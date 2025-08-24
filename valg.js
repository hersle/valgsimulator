var voteTable = document.getElementById("votes");
var seatTable = document.getElementById("seats");
var voteLink = document.getElementById("voteslink");
var seatLink = document.getElementById("seatslink");

function printTable(table, data, mergeParties, mergeDistricts, mergedDistrictLabel, showFraction, showColumnTotals, showRowTotals) {
	if (mergeParties.length > 0) {
		var newData = {};
		for (var district in data) {
			newData[district] = {"ANDRE": 0};
			for (var party in data[district]) {
				if (mergeParties.includes(party)) {
					newData[district]["ANDRE"] += data[district][party];
				} else {
					newData[district][party] = data[district][party];
				}
			}
		}
		return printTable(table, newData, [], mergeDistricts, mergedDistrictLabel, showFraction, showColumnTotals, showRowTotals);
	} else if (mergeDistricts.length > 0) {
		var newData = {};
		newData[mergedDistrictLabel] = {};
		for (var district in data) {
			if (mergeDistricts.includes(district)) {
				for (var party in data[district]) {
					if (!(party in newData[mergedDistrictLabel])) {
						newData[mergedDistrictLabel][party] = 0;
					}
					newData[mergedDistrictLabel][party] += data[district][party];
				}
			} else {
				newData[district] = data[district];
			}
		}
		return printTable(table, newData, mergeParties, [], mergedDistrictLabel, showFraction, showColumnTotals, showRowTotals);
	}


	// Build ordered list of unique parties
	var parties = [];
	for (var district in data) {
		for (var party in data[district]) {
			if (!parties.includes(party)) {
				parties.push(party);
			}
		}
	}
	if (parties.includes("ANDRE")) {
		// Make ANDRE always appear last
		parties.splice(parties.indexOf("ANDRE"), 1);
		parties.push("ANDRE");
	}

	// Reset table
	table.tHead.innerHTML = "";
	table.tBodies[0].innerHTML = "";

	// Print table
	const format = (x, total) => showFraction ? ((Math.floor(1000*x/total)/10).toFixed(1) + " %") : x.toLocaleString("no-NO"); // floor instead of rounding, so parties slightly below threshold cannot seem to be above it (e.g. show 3.999% as 3.9% instead of 4.0%)
	var head = table.tHead.insertRow();
	var cell = document.createElement("th");
	cell.innerHTML = "Valgdistrikt";
	head.appendChild(cell);
	for (var party of parties) {
		var cell = document.createElement("th");
		cell.innerHTML = party;
		head.appendChild(cell);
	}
	if (showRowTotals) {
		var cell = document.createElement("th");
		cell.innerHTML = "Totalt";
		head.appendChild(cell);
	}
	var globalTotal = 0;
	for (var district in data) {
		var row = table.insertRow();
		var cell = document.createElement("th");
		cell.innerHTML = district;
		row.appendChild(cell);
		var total = 0;
		for (var party in data[district]) {
			total += data[district][party];
		}
		globalTotal += total;
		for (var party of parties) {
			var cell = row.insertCell();
			if (party in data[district]) {
				cell.innerHTML = format(data[district][party], total);
			}
		}
		if (showRowTotals) {
			var cell = document.createElement("th");
			cell.innerHTML = format(total, total);
			row.appendChild(cell);
		}
	}

	if (showColumnTotals) {
		var row = table.insertRow();
		var cell = document.createElement("th");
		cell.innerHTML = "Totalt";
		row.appendChild(cell);
		for (var party of parties) {
			var cell = document.createElement("th");
			var total = 0;
			for (var district in data) {
				if (party in data[district]) {
					total += data[district][party];
				}
			}
			cell.innerHTML = format(total, globalTotal);
			row.appendChild(cell);
		}
		if (showRowTotals) {
			var cell = document.createElement("th");
			cell.innerHTML = format(globalTotal, globalTotal);
			row.appendChild(cell);
		}
	}
}

function sumLocal(local) {
	var global = {};
	for (var district in local) {
		for (var party in local[district]) {
			if (!(party in global)) {
				global[party] = 0;
			}
			global[party] += local[district][party];
		}
	}
	return global;
};
function sumGlobal(global) {
	var total = 0;
	for (var party in global) {
		total += global[party];
	}
	return total;
}

function calculateSeats(votes, seatCount, firstDivisor) {
	var seats = {};
	for (var party in votes) {
		seats[party] = 0;
	}

	while (seatCount > 0) {
		var bestScore = 0.0;
		var bestParty = null;
		for (var party in votes) {
			var s = seats[party];
			var divisor = s == 0 ? firstDivisor : 2*s + 1; // modified first Sainte-Laguë divisor
			var score = votes[party] / divisor; // Sainte-Laguë method // TODO: other methods
			if (score > bestScore) {
				bestScore = score;
				bestParty = party;
			} else if (score == bestScore) {
				alert("Error: " + bestparty + " and " + party + " tied. Don't know how to handle this."); // TODO: implement edge case handling
			}
		}
		seats[bestParty] += 1;
		seatCount -= 1;
	}

	return seats;
};

function calculateSeatCounts(districts, seatCount, areaFactor, minSeatsPerDistrict) {
	var scores = {};
	for (var district in districts) {
		scores[district] = districts[district].population + areaFactor*districts[district].area
	}

	var success = false;
	var finalSeatCounts = {};
	while (!success) {
		var seatCounts = calculateSeats(scores, seatCount, 1);

		success = true;
		for (var district in seatCounts) {
			if (seatCounts[district] < minSeatsPerDistrict) {
				finalSeatCounts[district] = minSeatsPerDistrict;
				seatCount -= minSeatsPerDistrict;
				delete scores[district];
				success = false;
			}
		}

		if (success) {
			for (var district in seatCounts) {
				finalSeatCounts[district] = seatCounts[district];
			}
		}
	}

	return finalSeatCounts;
};

function calculateAllSeatCounts(districts, localSeatCount, globalSeatsPerDistrict, areaFactor, minSeatsPerDistrict) {
	var districtCount = Object.keys(districts).length;
	var globalSeatCount = globalSeatsPerDistrict * districtCount;
	var totalSeatCount = localSeatCount + globalSeatCount;

	var localSeatCounts = calculateSeatCounts(districts, totalSeatCount, areaFactor, minSeatsPerDistrict);
	for (var district in localSeatCounts) {
		localSeatCounts[district] -= globalSeatsPerDistrict;
	}

	return [localSeatCounts, globalSeatCount];
};

function calculateLocalSeats(votes, localSeatCounts, firstDivisor) {
	var seats = {};
	for (var district in votes) {
		seats[district] = calculateSeats(votes[district], localSeatCounts[district], firstDivisor);
	}
	return seats;
};

function calculateGlobalSeats(localVotes, localSeats, globalSeatCount, globalThreshold, firstDivisor, negativeGlobalSeats) {
	// Accumulate votes from each district into nationwide results
	var globalVotes = sumLocal(localVotes);

	var totalVotes = sumGlobal(globalVotes);

	// Decide which parties are eligible for leveling mandates. They must meet all of these conditions:
	// * run for election in all districts
	// * have at least 4% of the national votes (electoral threshold)
	var eligible = {};
	for (var party in globalVotes) {
		eligible[party] = true; // eligible for leveling mandates?
		for (var district in localVotes) {
			if (!(party in localVotes[district])) {
				eligible[party] = false; // party is not registered all districts
			}
		}
		if (globalVotes[party] * 100 < globalThreshold * totalVotes) { // globalThreshold is in percent
			eligible[party] = false; // party is below electoral threshold
		}
	}

	// Nationwide results when leveling mandates are excluded
	localSeats = sumLocal(localSeats);

	//console.log("Results without leveling mandates: ", localSeats);

	while (true) { // may have to repeat
		// Allocate all seats including leveling mandates, but exclude ineligible parties
		var totalSeatCount = globalSeatCount;
		for (var party in globalVotes) {
			if (eligible[party]) {
				totalSeatCount += localSeats[party]; // do not allocate their mandates
			} else {
				delete globalVotes[party]; // do not consider their votes
			}
		}

		// Nationwide results when leveling mandates are included
		var globalSeats = calculateSeats(globalVotes, totalSeatCount, firstDivisor);

		//console.log("Allocating " + totalSeatCount + " mandates from votes", globalVotes);
		//console.log("Allocated", globalSeats);

		// Set number of leveling mandates from difference between nationwide allocations with and without leveling mandates
		// Check that no parties got fewer mandates with leveling mandates included; otherwise exclude them and repeat
		success = true;
		for (var party in globalSeats) {
			globalSeats[party] = globalSeats[party] - localSeats[party];
			if (!negativeGlobalSeats && globalSeats[party] < 0) {
				//console.log(party, "got fewer seats with leveling mandates included; repeating allocation with their seats reserved and without their nationwide votes");
				eligible[party] = false;
				success = false;
			}
		}
		if (success) {
			return globalSeats;
		}
	}
};

function calculateAllSeats(votes, localSeatCounts, globalSeatCount, globalThreshold, firstDivisor, negativeGlobalSeats) {
	var seats = calculateLocalSeats(votes, localSeatCounts, firstDivisor);
	seats["Utjevningsmandater"] = calculateGlobalSeats(votes, seats, globalSeatCount, globalThreshold, firstDivisor, negativeGlobalSeats);
	return seats;
};

function update() {
	var threshold = parseFloat(document.getElementById("threshold").value);
	var firstDivisor = parseFloat(document.getElementById("firstdivisor").value);
	var localSeatCount = parseInt(document.getElementById("localseats").value);
	var globalSeatsPerDistrict = parseInt(document.getElementById("globalseatsperdistrict").value);
	var negativeGlobalSeats = document.getElementById("negativeglobalseats").checked;
	var areaFactor = parseFloat(document.getElementById("areafactor").value);
	var minSeatsPerDistrict = parseInt(document.getElementById("minlocalseats").value);

	var [localSeatCounts, globalSeatCount] = calculateAllSeatCounts(districts, localSeatCount, globalSeatsPerDistrict, areaFactor, minSeatsPerDistrict);
	var seats = calculateAllSeats(votes, localSeatCounts, globalSeatCount, threshold, firstDivisor, negativeGlobalSeats);

	var groupOtherParties = document.getElementById("groupotherparties").checked;
	var totalSeats = sumLocal(seats);
	var mergeParties = [];
	if (groupOtherParties) {
		for (var party in totalSeats) {
			if (totalSeats[party] == 0) {
				mergeParties.push(party);
			}
		}
	}

	var groupLocal = document.getElementById("grouplocal").checked;
	var mergeDistricts = [];
	if (groupLocal) {
		for (var district in votes) {
			mergeDistricts.push(district);
		}
	}

	var showFraction = document.getElementById("showfraction").checked;

	printTable(voteTable, votes, mergeParties, mergeDistricts, "Distriktsstemmer", showFraction, true, true);
	printTable(seatTable, seats, mergeParties, mergeDistricts, "Distriktsmandater", showFraction, true, true);
};

function showTables(showVotes, showSeats) {
	voteTable.style["display"] = showVotes ? "block" : "none";
	seatTable.style["display"] = showSeats ? "block" : "none";
	voteLink.style["color"] =  showVotes ? "black" : "gray";
	seatLink.style["color"] =  showSeats ? "black" : "gray";
};

showTables(true, false);
update(); // run once on page load
