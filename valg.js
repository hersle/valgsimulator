var voteTab = document.getElementById("votestab");
var seatTab = document.getElementById("seatstab");
var teamTab = document.getElementById("teamstab");
var statTab = document.getElementById("statstab");
var voteTable = document.getElementById("votes");
var seatTable = document.getElementById("seats");
var teamTable = document.getElementById("teams");
var statTable = document.getElementById("stats");
var voteLink = document.getElementById("voteslink");
var seatLink = document.getElementById("seatslink");
var teamLink = document.getElementById("teamslink");
var statLink = document.getElementById("statslink");

var LANG = "no-NO";

function roundDown(number, decimals) {
	number = Math.floor(number * 10**decimals) / 10**decimals;
	return number.toFixed(decimals);
};

function printTable(table, data, districts, parties, mergeParties, mergeDistricts, mergedDistrictLabel, firstHeader, showFraction, showColumnTotals, showRowTotals, decimals) {
	if (mergeParties.length > 0) {
		var newData = {};
		parties = parties.slice(); // make copy
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
		for (var party of mergeParties) {
			if (parties.includes(party)) {
				parties.splice(parties.indexOf(party), 1); // remove from list of sorted parties
			}
		}
		parties.push("ANDRE"); // always last
		return printTable(table, newData, districts, parties, [], mergeDistricts, mergedDistrictLabel, firstHeader, showFraction, showColumnTotals, showRowTotals, decimals);
	} else if (mergeDistricts.length > 0) {
		var newData = {};
		newData[mergedDistrictLabel] = {};
		var newDistricts = [mergedDistrictLabel];
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
				newDistricts.push(district);
			}
		}
		return printTable(table, newData, newDistricts, parties, mergeParties, [], mergedDistrictLabel, firstHeader, showFraction, showColumnTotals, showRowTotals, decimals);
	}

	// Make ANDRE always appear last
	if (parties.includes("ANDRE")) {
		parties.splice(parties.indexOf("ANDRE"), 1);
		parties.push("ANDRE");
	}

	// Reset table
	table.tHead.innerHTML = "";
	table.tBodies[0].innerHTML = "";

	// Print table
	const format = (x, total) => showFraction ? (roundDown(100*x/total, decimals) + " %") : x.toLocaleString(LANG); // round *down* so parties slightly below threshold cannot seem to be above it (e.g. show 3.999% as 3.9% instead of 4.0%)
	var head = table.tHead.insertRow();
	var cell = document.createElement("th");
	cell.innerHTML = firstHeader;
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
	for (var district of districts) {
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

function sainteLague14(votes, seats, totalVotes, totalSeats) {
	return votes / (seats == 0 ? 1.4 : (2*seats + 1));
}
function sainteLague12(votes, seats, totalVotes, totalSeats) {
	return votes / (seats == 0 ? 1.2 : (2*seats + 1));
}
function sainteLague10(votes, seats, totalVotes, totalSeats) {
	return votes / (2*seats + 1);
}
function dHondt(votes, seats, totalVotes, totalSeats) {
	return votes / (seats + 1);
}
function hamilton(votes, seats, totalVotes, totalSeats) {
	return votes * totalSeats - seats * totalVotes; // equivalent to votes/totalVotes * totalSeats - seats, but avoids any divison by zero
}

function calculateSeats(votes, totalSeats, scoreFunction) {
	var seats = {};
	for (var party in votes) {
		seats[party] = 0;
	}

	var totalVotes = sumGlobal(votes);

	for (var seat = 1; seat <= totalSeats; seat++) {
		var bestScore = Number.MIN_VALUE;
		var bestParty = null;
		for (var party in votes) {
			var score = scoreFunction(votes[party], seats[party], totalVotes, totalSeats);
			if (score > bestScore) {
				bestScore = score;
				bestParty = party;
			} else if (score == bestScore) {
				alert("Error: " + bestParty + " and " + party + " tied with score " + score + ". Don't know how to handle this."); // TODO: implement edge case handling
			}
		}
		seats[bestParty] += 1;
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
		var seatCounts = calculateSeats(scores, seatCount, sainteLague10);

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

function calculateAllSeatCounts(districts, totalSeatCount, globalSeatsPerDistrict, areaFactor, minSeatsPerDistrict) {
	var districtCount = Object.keys(districts).length;
	var globalSeatCount = globalSeatsPerDistrict * districtCount;

	var localSeatCounts = calculateSeatCounts(districts, totalSeatCount, areaFactor, minSeatsPerDistrict);
	for (var district in localSeatCounts) {
		localSeatCounts[district] -= globalSeatsPerDistrict;
	}

	return [localSeatCounts, globalSeatCount];
};

function calculateLocalSeats(votes, localSeatCounts, scoreFunction, threshold) {
	var seats = {};
	for (var district in votes) {
		var totalVotes = sumGlobal(votes[district]);
		var votesAboveThreshold = {};
		for (var party in votes[district]) {
			if (votes[district][party] * 100 >= threshold * totalVotes) {
				votesAboveThreshold[party] = votes[district][party];
			}
		}
		seats[district] = calculateSeats(votesAboveThreshold, localSeatCounts[district], scoreFunction);
	}
	return seats;
};

function calculateGlobalSeats(localVotes, localSeats, globalSeatCount, globalThreshold, scoreFunction, negativeGlobalSeats, requireGlobalRepresentation, exemptGlobalThresholdIflocalSeats) {
	// Accumulate votes from each district
	var globalVotes = sumLocal(localVotes);
	var totalVotes = sumGlobal(globalVotes);

	// Nationwide results when leveling mandates are excluded
	localSeats = sumLocal(localSeats);

	// Decide which parties are eligible for leveling mandates. They must meet all of these conditions:
	// * run for election in all districts (can be turned off)
	// * have at least 4% of the national votes (electoral threshold)
	for (var party in globalVotes) {
		if (globalVotes[party] * 100 < globalThreshold * totalVotes) { // globalThreshold is in percent
			var exempt = exemptGlobalThresholdIflocalSeats && (party in localSeats) && localSeats[party] > 0;
			if (exempt) {
				//console.log(party, "is exempt from threshold");
			} else {
				delete globalVotes[party]; // party is below electoral threshold
			}
		} else if (requireGlobalRepresentation) {
			for (var district in localVotes) {
				if (!(party in localVotes[district])) {
					delete globalVotes[party]; // party is not registered all districts
					break;
				}
			}
		}
	}
	//console.log("Eligible for global seats:", globalVotes);

	//console.log("Results without leveling mandates: ", localSeats);

	while (true) { // may have to repeat
		// Allocate all seats including leveling mandates, but exclude ineligible parties
		var totalSeatCount = globalSeatCount;
		for (var party in globalVotes) {
			totalSeatCount += localSeats[party]; // allocate mandates for eligible parties only
		}

		// Nationwide results when leveling mandates are included
		var globalSeats = calculateSeats(globalVotes, totalSeatCount, scoreFunction);

		//console.log("Allocating " + totalSeatCount + " mandates from votes", globalVotes);
		//console.log("Allocated", globalSeats);

		// Set number of leveling mandates from difference between nationwide allocations with and without leveling mandates
		// Check that no parties got fewer mandates with leveling mandates included; otherwise exclude them and repeat
		var success = true;
		for (var party in globalSeats) {
			if (party in localSeats) {
				globalSeats[party] = globalSeats[party] - localSeats[party];
			}
			if (!negativeGlobalSeats && globalSeats[party] < 0) {
				//console.log(party, "got fewer seats with leveling mandates included; repeating allocation with their seats reserved and without their nationwide votes");
				delete globalVotes[party];
				success = false;
			}
		}
		if (success) {
			return globalSeats;
		}
	}
};

function calculateAllSeats(votes, localSeatCounts, globalSeatCount, localThreshold, globalThreshold, scoreFunction, negativeGlobalSeats, requireGlobalRepresentation, exemptGlobalThresholdIflocalSeats) {
	var seats = calculateLocalSeats(votes, localSeatCounts, scoreFunction, localThreshold);
	seats["Utjevningsmandater"] = calculateGlobalSeats(votes, seats, globalSeatCount, globalThreshold, scoreFunction, negativeGlobalSeats, requireGlobalRepresentation, exemptGlobalThresholdIflocalSeats);
	return seats;
};

function calculateTeams(friends) {
	function dfs(team, teams) {
		for (var team2 of teams) {
			if (team.length == team2.length) {
				var isSubset = true;
				for (var party of team) {
					if (!team2.includes(party)) {
						isSubset = false;
						break;
					}
				}
				if (isSubset) {
					return; // team already explored
				}
			}
		}

		teams.push(team.slice()); // register team

		// Explore new teams by adding parties that are friends with everyone already in the team
		for (var newParty in friends) {
			var friendsWithEveryone = true;
			for (var party of team) {
				if (!friends[party].includes(newParty)) {
					friendsWithEveryone = false;
					break;
				}
			}
			if (friendsWithEveryone) {
				team.push(newParty);
				dfs(team, teams);
				team.splice(team.indexOf(newParty), 1);
			}
		}
		return teams;
	};

	return dfs([], []).slice(1); // drop empty team
};

function mergeDistrictData(datasets, districts, newDistrict) {
	for (var dataset of datasets) {
		dataset[newDistrict] = {};
		for (var district of districts) {
			for (var party in dataset[district]) {
				if (!(party in dataset[newDistrict])) {
					dataset[newDistrict][party] = 0;
				}
				dataset[newDistrict][party] += dataset[district][party];
			}
			delete dataset[district];
		}
	}
};

function update() {
	// Deep copy votes, so original data is not modified
	var districts = {};
	for (var district in districts2021) {
		districts[district] = {};
		for (var key in districts2021[district]) {
			districts[district][key] = districts2021[district][key];
		}
	}
	var votes = {};
	for (var district in votes2021) {
		votes[district] = {};
		for (var party in votes2021[district]) {
			votes[district][party] = votes2021[district][party];
		}
	}

	var localThreshold = parseFloat(document.getElementById("localthreshold").value);
	var globalThreshold = parseFloat(document.getElementById("globalthreshold").value);
	var totalSeatCount = parseInt(document.getElementById("totalseats").value);
	var globalSeatsPerDistrict = parseInt(document.getElementById("globalseatsperdistrict").value);
	var negativeGlobalSeats = document.getElementById("negativeglobalseats").checked;
	var areaFactor = parseFloat(document.getElementById("areafactor").value);
	var minSeatsPerDistrict = parseInt(document.getElementById("minlocalseats").value);
	var requireGlobalRepresentation = document.getElementById("requireglobalrepresentation").checked;
	var exemptGlobalThresholdIflocalSeats = document.getElementById("exemptglobalthresholdiflocalseats").checked;

	var method = document.getElementById("method").value;
	if (method == "Sainte-Laguë fra 1,4") {
		var scoreFunction = sainteLague14;
	} else	if (method == "Sainte-Laguë fra 1,2") {
		var scoreFunction = sainteLague12;
	} else	if (method == "Sainte-Laguë fra 1,0") {
		var scoreFunction = sainteLague10;
	} else if (method == "D’Hondt") {
		var scoreFunction = dHondt;
	} else if (method == "Hare/Hamilton") {
		var scoreFunction = hamilton;
	} else {
		alert("Unknown method " + method);
	}

	var extraVotesInput = document.getElementById("extravotes");
	var extraPartyInput = document.getElementById("extraparty");
	var extraDistrictInput = document.getElementById("extradistrict");
	var extraVotes = parseInt(extraVotesInput.value);
	var extraParty = extraPartyInput.value;
	var extraDistrict = extraDistrictInput.value;

	if (document.getElementById("mergedistricts").checked) {
		mergeDistrictData([votes, districts], ["Buskerud", "Akershus", "Østfold"], "Viken");
		mergeDistrictData([votes, districts], ["Oppland", "Hedmark"], "Innlandet");
		mergeDistrictData([votes, districts], ["Vestfold", "Telemark"], "Vestfold og Telemark");
		mergeDistrictData([votes, districts], ["Aust-Agder", "Vest-Agder"], "Agder");
		mergeDistrictData([votes, districts], ["Sogn og Fjordane", "Hordaland"], "Vestland");
		mergeDistrictData([votes, districts], ["Troms", "Finnmark"], "Troms og Finnmark");
		mergeDistrictData([votes, districts], ["Sør-Trøndelag", "Nord-Trøndelag"], "Trøndelag");
		if (!(extraDistrict in Object.keys(districts))) {
			extraDistrictInput.value = ""; // de-select invalid extra vote district if not part of new merged districts
		}
	}

	if (extraParty && extraDistrict && !isNaN(extraVotes)) {
		if (!(extraParty in votes[extraDistrict])) {
			votes[extraDistrict][extraParty] = 0; // if party did not run in that district originally, make it run
		}
		votes[extraDistrict][extraParty] += extraVotes;
	}

	var [localSeatCounts, globalSeatCount] = calculateAllSeatCounts(districts, totalSeatCount, globalSeatsPerDistrict, areaFactor, minSeatsPerDistrict);
	var seats = calculateAllSeats(votes, localSeatCounts, globalSeatCount, localThreshold, globalThreshold, scoreFunction, negativeGlobalSeats, requireGlobalRepresentation, exemptGlobalThresholdIflocalSeats);
	var globalSeats = sumLocal(seats);

	var showFraction = document.getElementById("showfraction").checked;
	var decimals = parseInt(document.getElementById("decimals").value);

	// Build sorted list of unique parties
	var sortParties = document.getElementById("sortparties").value;
	var parties = [];
	for (var district in votes) {
		for (var party in votes[district]) {
			if (!parties.includes(party)) {
				parties.push(party);
			}
		}
	}
	var globalVotes = sumLocal(votes);
	var compare = (party1, party2, data) => data[party2] == data[party1] ? (party1 < party2 ? -1 : +1) : (data[party2] - data[party1]); // sort by value in "data", but by name if values are equal
	if (sortParties == "Navn") {
		parties.sort();
	} else if (sortParties == "Stemmer") {
		parties.sort((party1, party2) => compare(party1, party2, globalVotes));
	} else if (sortParties == "Mandater") {
		parties.sort((party1, party2) => compare(party1, party2, globalSeats));
	} else if (sortParties == "Farge (subjektivt)") {
		var spectrum = ["NKP", "RØDT", "SV", "A", "SP", "MDG", "KYST", "KRF", "V", "H", "FRP", "KRISTNE", "LIBS", "DEMN", "AAN"];
		var rightism = {};
		for (var party of parties) {
			rightism[party] = spectrum.includes(party) ? spectrum.indexOf(party) : 10000;
		}
		parties.sort((party1, party2) => compare(party2, party1, rightism));
	}

	var sortDistricts = document.getElementById("sortdistricts").value;
	var districtList = [];
	for (var district in votes) {
		districtList.push(district);
	}
	if (sortDistricts == "Navn") {
		districtList.sort();
	} else if (sortDistricts == "Stemmer") {
		var districtVotes = {};
		for (var district in votes) {
			districtVotes[district] = 0;
			for (var party in votes[district]) {
				districtVotes[district] += votes[district][party];
			}
		}
		districtList.sort((district1, district2) => compare(district1, district2, districtVotes));
	} else if (sortDistricts == "Mandater") {
		districtList.sort((district1, district2) => compare(district1, district2, localSeatCounts));
	} else if (sortDistricts == "Innbyggertall") {
		var populations = {};
		for (var district in districts) {
			populations[district] = districts[district]["population"];
		}
		districtList.sort((district1, district2) => compare(district1, district2, populations));
	} else if (sortDistricts == "Areal") {
		var areas = {};
		for (var district in districts) {
			areas[district] = districts[district]["area"];
		}
		districtList.sort((district1, district2) => compare(district1, district2, areas));
	}
	var districtListWithGlobal = districtList.slice();
	districtListWithGlobal.push("Utjevningsmandater");

	var groupOtherParties = document.getElementById("groupotherparties").checked;
	var mergeParties = [];
	if (groupOtherParties) {
		for (var party of parties) { // all parties are not necessarily in globalSeats (e.g. if under thresholds), so loop over parties instead
			if (globalSeats[party] == 0 || !(party in globalSeats)) {
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

	printTable(voteTable, votes, districtList, parties, mergeParties, mergeDistricts, "Distriktsstemmer", "Valgdistrikt", showFraction, true, true, decimals);
	printTable(seatTable, seats, districtListWithGlobal, parties, mergeParties, mergeDistricts, "Distriktsmandater", "Valgdistrikt", showFraction, true, true, decimals);

	// Read graph of friend parties
	var friendsInput = document.getElementById("friends");
	var friendsText = friendsInput.value.trim();
	var friends = {};
	for (var party of parties) {
		friends[party] = [];
	}
	var valid = true;
	if (friendsText.length > 0) {
		for (var text of friendsText.split(/\s*,\s*/)) {
			var friendList = text.split(/\s*\+\s*/);
			for (var party1 of friendList) {
				if (!parties.includes(party1)) {
					valid = false;
					break;
				}
				for (var party2 of friendList) {
					if (party1 != party2 && !friends[party1].includes(party2)) { // don't be friends with oneself
						friends[party1].push(party2);
					}
				}
			}
		}
	}

	// Do not let unrepresented parties be part of coalitions
	for (var party in friends) {
		if (globalSeats[party] == 0 || !(party in globalSeats)) {
			delete friends[party];
		}
	}

	// Color input field depending on validity of input formatting
	friendsInput.style["background-color"] = valid ? "limegreen" : "crimson";

	if (valid) {
		var teams = calculateTeams(friends);

		var teamSeats = {};
		for (var team of teams) {
			teamSeats[team] = 0;
			for (var party of team) {
				if (party in globalSeats) {
					teamSeats[team] += globalSeats[party];
				}
			}
		}

		teams.sort((team1, team2) => teamSeats[team2] - teamSeats[team1]);

		var teamsDict = {};
		var teamNames = [];
		for (var team of teams) {
			var teamName = team.join(" + ");
			teamsDict[teamName] = {"Posisjon": teamSeats[team], "Opposisjon": totalSeatCount - teamSeats[team]};
			teamNames.push(teamName);
		}
		printTable(teamTable, teamsDict, teamNames, ["Posisjon", "Opposisjon"], [], [], "", "Partier i posisjon", showFraction, false, true, decimals);
	}

	var totalVotes = sumGlobal(globalVotes);
	var LSq = 0.0;
	var LH = 0.0;
	for (var party of parties) {
		var fracSeats = party in globalSeats ? globalSeats[party] / totalSeatCount : 0.0;
		var fracVotes = globalVotes[party] / totalVotes;
		LSq += (fracVotes - fracSeats)**2;
		LH += Math.abs(fracVotes - fracSeats);
	}
	LSq = Math.sqrt(LSq / 2);
	LH = LH / 2;
	var data = {
		"Disproporsjonalitet (Gallagher)": {"Verdi": (100*LSq).toLocaleString(LANG) + " %"},
		"Disproporsjonalitet (Loosemore-Hanby)": {"Verdi": (100*LH).toLocaleString(LANG) + " %"},
	};
	printTable(statTable, data, Object.keys(data), ["Verdi"], [], [], "", "Variabel", false, false, false, 0);

	extraPartyInput.innerHTML = "";
	for (var party of parties) {
		var el = document.createElement("option");
		el.innerHTML = party;
		extraPartyInput.appendChild(el);
	}
	extraPartyInput.value = extraParty; // restore selection

	extraDistrictInput.innerHTML = "";
	for (var district of districtList) {
		var el = document.createElement("option");
		el.innerHTML = district;
		extraDistrictInput.appendChild(el);
	}
	extraDistrictInput.value = extraDistrict; // restore selection

	extraVotesInput.step = extraVotes == 0 ? 1 : 10 ** Math.floor(Math.log10(Math.abs(extraVotes)));;
};

function showTables(showVotes, showSeats, showTeams, showStats) {
	voteTab.style["display"] = showVotes ? "block" : "none";
	seatTab.style["display"] = showSeats ? "block" : "none";
	teamTab.style["display"] = showTeams ? "block" : "none";
	statTab.style["display"] = showStats ? "block" : "none";
	voteLink.style["color"] =  showVotes ? "black" : "gray";
	seatLink.style["color"] =  showSeats ? "black" : "gray";
	teamLink.style["color"] =  showTeams ? "black" : "gray";
	statLink.style["color"] =  showStats ? "black" : "gray";
};

showTables(true, false, false);
update(); // run once on page load
