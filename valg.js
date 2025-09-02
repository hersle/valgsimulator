var elections = {
	"2009": election2009,
	"2013": election2013,
	"2017": election2017,
	"2021": election2021,
	"2025*": election2025,
};
var election;

var voteTab = document.getElementById("votestab");
var seatTab = document.getElementById("seatstab");
var teamTab = document.getElementById("teamstab");
var distTab = document.getElementById("diststab");
var calcTab = document.getElementById("calcstab");
var voteTable = document.getElementById("votes");
var seatTable = document.getElementById("seats");
var teamTable = document.getElementById("teams");
var statTable = document.getElementById("stats");
var distTable = document.getElementById("dists");
var logOutput = document.getElementById("log");
var voteLink = document.getElementById("voteslink");
var seatLink = document.getElementById("seatslink");
var teamLink = document.getElementById("teamslink");
var distLink = document.getElementById("distslink");
var calcLink = document.getElementById("calcslink");

var LANG = "no-NO";

distTable.sortColumn = "Valgdistrikt";
voteTable.sortColumn = "Valgdistrikt";
voteTable.sortRow = "Totalt";
seatTable.sortColumn = "Valgdistrikt";
seatTable.sortRow = "Totalt";
teamTable.sortColumn = "Posisjon";

// Add event listeners for help buttons
for (var fieldset of document.getElementsByTagName("fieldset")) {
	for (const span of fieldset.getElementsByTagName("span")) { // const fixes span in the function closure
		for (var a of span.getElementsByTagName("a")) {
			a.addEventListener("click", function (e) {
				alert(span.title);
			});
		}
	}
}

// Cut off remaining decimals
function truncate(number, decimals) {
	if (number < 0) {
		return -truncate(-number, decimals);
	}
	return Math.floor(number * 10**decimals) / 10**decimals;
};

function formatFraction(x, total, decimals) {
	return truncate(100*x/total, decimals) + " %"; // round *down* so parties slightly below threshold cannot seem to be above it (e.g. show 3.999% as 3.9% instead of 4.0%)
}
function formatCount(x, total) {
	return x.toLocaleString(LANG);
}

function clearLog() {
	log = "";
};
function printLog(line) {
	log += line + '\n';
};
function flushLog() {
	logOutput.innerHTML = log;
};

function _comp(x1, x2) {
	if (x1 == undefined && x2 == undefined) return 0;
	if (x1 == undefined) return +1;
	if (x2 == undefined) return -1;
	if (!isNaN(x2 - x1)) return x2 - x1;
	x1 = x1.replaceAll(" ", "").replaceAll(" ", "").replaceAll("−", "-").replaceAll(",", ".").replaceAll("%", ""); // non-breakable space and minus sign! // TODO: what a mess
	x2 = x2.replaceAll(" ", "").replaceAll(" ", "").replaceAll("−", "-").replaceAll(",", ".").replaceAll("%", ""); // non-breakable space and minus sign!
	return x2.localeCompare(x1, LANG, {numeric: true});
}

function createCell(tag, text) {
	var cell = document.createElement(tag);
	cell.innerText = text;
	return cell;
}

function printTable(table, data, districts, parties, firstHeader, showTotals, format, fractional) {
	// Reset table
	const thead = table.tHead;
	const tbody = table.tBodies[0];
	thead.innerHTML = "";
	tbody.innerHTML = "";

	if (showTotals) {
		const totalDistrict = {};
		var globalTotal = 0;
		for (const district in data) {
			var districtTotal = 0;
			for (const party in data[district]) {
				const contrib = data[district][party];
				districtTotal += contrib;
				if (!(party in totalDistrict)) {
					totalDistrict[party] = 0;
				}
				totalDistrict[party] += contrib;
				globalTotal += contrib;
			}
			data[district]["Totalt"] = districtTotal;
		}
		data["Totalt"] = totalDistrict;
		data["Totalt"]["Totalt"] = globalTotal;
	}

	if (fractional) {
		for (const district in data) {
			for (const party in data[district]) {
				data[district][party] /= data[district]["Totalt"];
			}
		}
		format = (x) => truncate(100*x, 1).toLocaleString(LANG) + " %"; // TODO: decimals
	}

	if (table.sortColumn) {
		districts.sort(function (d1, d2) {
			const have1 = table.sortColumn in data[d1];
			const have2 = table.sortColumn in data[d2];
			if (!have1 && !have2) return d1.localeCompare(d2); // alphabetically ascending
			if (!have1) return +1; // prefer d2 (as if district1 is zero)
			if (!have2) return -1; // prefer d1 (as if district2 is zero)
			return data[d2][table.sortColumn] - data[d1][table.sortColumn]; // numerically descending
		});
		var levelingIndex = districts.indexOf("Utjevningsmandater");
		if (levelingIndex != -1) {
			districts.push(districts.splice(levelingIndex, 1)[0]); // remove and re-add at the end
		}
	}
	if (table.sortRow) {
		parties.sort(function (p1, p2) {
			const have1 = p1 in data[table.sortRow];
			const have2 = p2 in data[table.sortRow];
			if (!have1 && !have2) return p1.localeCompare(p2); // alphabetically ascending
			if (!have1) return +1; // prefer p2 (as if district1 is zero)
			if (!have2) return -1; // prefer p1 (as if district2 is zero)
			return data[table.sortRow][p2] - data[table.sortRow][p1]; // numerically descending
		});
	}

	// Print table
	const head = thead.insertRow();
	head.appendChild(createCell("th", firstHeader));
	for (const party of parties) {
		head.appendChild(createCell("th", party));
	}
	if (showTotals) {
		head.appendChild(createCell("th", "Totalt"));
	}

	for (var district of districts) {
		const row = tbody.insertRow();
		row.appendChild(createCell("th", district));
		for (var i = 0; i < parties.length; i++) {
			var party = parties[i];
			row.appendChild(createCell("td", party in data[district] ? format(data[district][party], i) : ""));
		}
		if (showTotals) {
			row.appendChild(createCell("th", format(data[district]["Totalt"], 0)));
		}
	}

	if (showTotals) {
		const tfoot = table.tFoot;
		tfoot.innerHTML = "";
		const row = tfoot.insertRow();
		row.appendChild(createCell("th", "Totalt"));
		for (const party of parties) {
			row.appendChild(createCell("th", format(data["Totalt"][party], 0)));
		}
		if (showTotals) {
			row.appendChild(createCell("th", format(data["Totalt"]["Totalt"], 0)));
		}
		const cell = tfoot.children[0].children[0];
		cell.addEventListener("click", function (e) {
			table.sortRow = cell.innerText;
			update();
		});
	}

	const toggleShowFraction = function (e) {
		if (table.showFraction) {
			table.showFraction = !table.showFraction;
		} else {
			table.showFraction = true;
		}
		update(); // could just re-render table?
	};
	for (const row of tbody.children) {
		if (showTotals) {
			const cell = row.children[0];
			cell.addEventListener("click", function (e) {
				table.sortRow = cell.innerText;
				update();
			});
		}
		for (let i = 1; i < row.children.length; i++) {
			const cell = row.children[i];
			cell.addEventListener("click", toggleShowFraction);
		}
	}
	for (const cell of thead.children[0].children) {
		cell.addEventListener("click", function (e) {
			table.sortColumn = cell.innerText;
			update();
		});
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
function winnerTakesItAll(votes, seats, totalVotes, totalSeats) {
	return votes;
}

var scoreFunctions = {
	"Sainte-Laguë fra 1,4": sainteLague14,
	"Sainte-Laguë fra 1,2": sainteLague12,
	"Sainte-Laguë fra 1,0": sainteLague10,
	"D’Hondt": dHondt,
	"Hare/Hamilton": hamilton,
	"Vinneren tar alt": winnerTakesItAll,
};

function calculateSeats(votes, totalSeats, methodName) {
	var scoreFunction = scoreFunctions[methodName];
	var seats = {};
	for (var party in votes) {
		seats[party] = 0;
	}

	var totalVotes = sumGlobal(votes);

	var tiedParty = undefined;
	for (var seat = 1; seat <= totalSeats + 1; seat++) {
		var bestScore = Number.MIN_VALUE;
		var bestParty = null;
		for (var party in votes) {
			var score = scoreFunction(votes[party], seats[party], totalVotes, totalSeats);
			if (score > bestScore) {
				bestScore = score;
				bestParty = party;
				tiedParty = undefined;
			} else if (score == bestScore) {
				tiedParty = party;
			}
		}
		if (seat <= totalSeats) {
			printLog("  " + seat + ". mandat til " + bestParty + " med " + bestScore + " poeng (" + seats[bestParty] + " mandater fra før)");
			seats[bestParty] += 1;
		} else {
			printLog("  Neste mandat ville gått til " + bestParty + " med " + bestScore + " poeng (" + seats[bestParty] + " mandater fra før)");
		}
	}
	if (tiedParty !== undefined) {
		printLog("  ADVARSEL: " + bestParty + " og " + party + " har begge poengsum " + score + "; foretrekker " + bestParty); // TODO: implement edge case handling
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
	for (var attempt = 1; !success; attempt++) {
		var method = "Sainte-Laguë fra 1,0";
		printLog(attempt + ". forsøk: Fordeler " + seatCount + " seter mellom " + Object.keys(districts).length + " distrikter med arealfaktor " + areaFactor + " og minst " + minSeatsPerDistrict + " seter til hvert distrikt med " + method);
		var seatCounts = calculateSeats(scores, seatCount, method);

		success = true;
		for (var district in seatCounts) {
			if (seatCounts[district] < minSeatsPerDistrict) {
				printLog("  " + district + " fikk bare " + seatCounts[district] + " seter; reserverer " + minSeatsPerDistrict + " seter og holder dem utenfor kommende omfordeling");
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
		} else {
			printLog("");
		}
	}

	return finalSeatCounts;
};

function calculateAllSeatCounts(districts, totalSeatCount, globalSeatsPerDistrict, areaFactor, minSeatsPerDistrict) {
	var districtCount = Object.keys(districts).length;
	var globalSeatCount = globalSeatsPerDistrict * districtCount;

	var localSeatCounts = calculateSeatCounts(districts, totalSeatCount, areaFactor, minSeatsPerDistrict);
	printLog("");
	for (var district in localSeatCounts) {
		printLog("Deler " + localSeatCounts[district] + " mandater i " + district + " mellom " + (localSeatCounts[district] - globalSeatsPerDistrict) + " distriktsmandater og " + globalSeatsPerDistrict + " utjevningsmandater");
		localSeatCounts[district] -= globalSeatsPerDistrict;
	}

	return [localSeatCounts, globalSeatCount];
};

function calculateLocalSeats(votes, localSeatCounts, methodName, localThreshold, globalThreshold) {
	var seats = {};
	var partyTotalVotes = sumLocal(votes);
	var globalTotalVotes = sumGlobal(partyTotalVotes);

	for (var district in votes) {
		var localTotalVotes = sumGlobal(votes[district]);
		var votesAboveThreshold = {};
		for (var party in votes[district]) {
			if (votes[district][party] * 100 >= localThreshold * localTotalVotes && partyTotalVotes[party] * 100 >= globalThreshold * globalTotalVotes) {
				votesAboveThreshold[party] = votes[district][party];
			}
		}
		printLog("");
		printLog("Fordeler " + localSeatCounts[district] + " distriktsmandater i " + district + " mellom " + Object.keys(votesAboveThreshold).join(", ") + " (fikk minst " + localThreshold + " % av stemmene i distriktet og " + globalThreshold + " % av stemme nasjonalt) med " + methodName);
		seats[district] = calculateSeats(votesAboveThreshold, localSeatCounts[district], methodName);
	}
	return seats;
};

function calculateGlobalSeats(localVotes, localSeats, globalSeatCount, globalThreshold, methodName, negativeGlobalSeats, requireGlobalRepresentation, exemptGlobalThresholdIflocalSeats) {
	printLog("");

	// Accumulate votes from each district
	var globalVotes = sumLocal(localVotes);
	var totalVotes = sumGlobal(globalVotes);

	// Nationwide results when leveling mandates are excluded
	localSeats = sumLocal(localSeats);

	// Decide which parties are eligible for leveling mandates. They must meet all of these conditions:
	// * run for election in all districts (can be turned off)
	// * have at least 4% of the national votes (electoral threshold)
	for (var party in globalVotes) {
		if (party.toUpperCase() == "ANDRE") {
			printLog(party + " holdes alltid utenfor fordelingen av utjevningsmandater");
			delete globalVotes[party];
		} else if (globalVotes[party] * 100 < globalThreshold * totalVotes) { // globalThreshold is in percent
			var exempt = exemptGlobalThresholdIflocalSeats && (party in localSeats) && localSeats[party] > 0;
			if (exempt) {
				printLog(party + " unntas fra sperregrensen for utjevningsmandater fordi de har minst ett distriktsmandat");
			} else {
				printLog(party + " (" + (globalVotes[party]*100/totalVotes) + " % av nasjonale stemmer) kom under sperregrensen (" + globalThreshold + " %) og holdes utenfor fordelingen av utjevningsmandater");
				delete globalVotes[party]; // party is below electoral threshold
			}
		} else if (requireGlobalRepresentation) {
			for (var district in localVotes) {
				if (!(party in localVotes[district])) {
					printLog(party + " stiller ikke til valg i alle distrikter og holdes utenfor fordelingen av utjevningsmandater")
					delete globalVotes[party]; // party is not registered all districts
					break;
				}
			}
		}
	}

	for (var attempt = 1; true; attempt++) { // may have to repeat
		// Allocate all seats including leveling mandates, but exclude ineligible parties
		var totalSeatCount = globalSeatCount;
		for (var party in globalVotes) {
			totalSeatCount += localSeats[party]; // allocate mandates for eligible parties only
		}

		printLog("");
		printLog(attempt + ". forsøk: Fordeler " + totalSeatCount + " mandater nasjonalt mellom " + Object.keys(globalVotes).join(", ") + " (" + (totalSeatCount - globalSeatCount) + " distriktsmandater + " + globalSeatCount + " utjevningsmandater) med " + methodName);

		// Nationwide results when leveling mandates are included
		var globalSeats = calculateSeats(globalVotes, totalSeatCount, methodName);

		// Set number of leveling mandates from difference between nationwide allocations with and without leveling mandates
		// Check that no parties got fewer mandates with leveling mandates included; otherwise exclude them and repeat
		var success = true;
		for (var party in globalSeats) {
			if (party in localSeats) {
				globalSeats[party] = globalSeats[party] - localSeats[party];
			}
			printLog(party + " fikk " + globalSeats[party] + " utjevningsmandater (" + (localSeats[party] + globalSeats[party]) + " mandater i nasjonal fordeling - " + localSeats[party] + " distriktsmandater fra før)");
			if (!negativeGlobalSeats && globalSeats[party] < 0) {
				printLog(party + " fikk færre mandater i den nasjonale fordelingen med utjevningsmandater enn de har distriktsmandater fra før; holder dem utenfor kommende omfordeling");
				delete globalVotes[party];
				success = false;
			}
		}
		if (success) {
			return globalSeats;
		}
	}
};

function calculateAllSeats(votes, localSeatCounts, globalSeatCount, localThreshold, globalThreshold, localGlobalThreshold, methodName, negativeGlobalSeats, requireGlobalRepresentation, exemptGlobalThresholdIflocalSeats) {
	var seats = calculateLocalSeats(votes, localSeatCounts, methodName, localThreshold, localGlobalThreshold);
	seats["Utjevningsmandater"] = calculateGlobalSeats(votes, seats, globalSeatCount, globalThreshold, methodName, negativeGlobalSeats, requireGlobalRepresentation, exemptGlobalThresholdIflocalSeats);
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

function applyDefaults(defaults) {
	for (var id in defaults) {
		var val = defaults[id];
		var el = document.getElementById(id);
		if (typeof(val) == "boolean") {
			el.checked = val;
		} else {
			el.value = val;
		}
	}
};

function setElection() {
	election = document.getElementById("election").value;
	if (!(election in elections)) {
		alert("Unknown election " + election);
	}
	election = elections[election];

	if ("defaults" in election) {
		applyDefaults(election["defaults"]);
	}

	update();
}

function update() {
	clearLog();

	var votes = election.votes;
	var districts = election.districts;

	// Deep copy votes, so original data is not modified
	var newDistricts = {};
	for (var district in districts) {
		newDistricts[district] = {};
		for (var key in districts[district]) {
			newDistricts[district][key] = districts[district][key];
		}
	}
	districts = newDistricts;
	var newVotes = {};
	for (var district in votes) {
		newVotes[district] = {};
		for (var party in votes[district]) {
			newVotes[district][party] = votes[district][party];
		}
	}
	votes = newVotes;

	var localThreshold = parseFloat(document.getElementById("localthreshold").value);
	var globalThreshold = parseFloat(document.getElementById("globalthreshold").value);
	var localGlobalThreshold = document.getElementById("localglobalthreshold").checked ? globalThreshold : 0.0;
	var totalSeatCount = parseInt(document.getElementById("totalseats").value);
	var globalSeatsPerDistrict = parseInt(document.getElementById("globalseatsperdistrict").value);
	var negativeGlobalSeats = document.getElementById("negativeglobalseats").checked;
	var areaFactor = parseFloat(document.getElementById("areafactor").value);
	var minSeatsPerDistrict = parseInt(document.getElementById("minlocalseats").value);
	var requireGlobalRepresentation = document.getElementById("requireglobalrepresentation").checked;
	var exemptGlobalThresholdIflocalSeats = document.getElementById("exemptglobalthreshold").checked;

	var methodName = document.getElementById("method").value;

	var extraVotesInput = document.getElementById("extravotes");
	var extraPartyInput = document.getElementById("extraparty");
	var extraDistrictInput = document.getElementById("extradistrict");
	var extraVotes = parseInt(extraVotesInput.value);
	var extraParty = extraPartyInput.value;
	var extraDistrict = extraDistrictInput.value;

	var districtCount = parseInt(document.getElementById("mergedistricts").value.split(" ")[0]); // 19, 18, 11, 15 or 1
	if (districtCount <= 18) {
		mergeDistrictData([votes, districts], ["Sør-Trøndelag", "Nord-Trøndelag"], "Trøndelag");
	}
	if (districtCount <= 15) {
		mergeDistrictData([votes, districts], ["Oppland", "Hedmark"], "Innlandet");
		mergeDistrictData([votes, districts], ["Sogn og Fjordane", "Hordaland"], "Vestland");
		mergeDistrictData([votes, districts], ["Aust-Agder", "Vest-Agder"], "Agder");
	}
	if (districtCount <= 11) {
		mergeDistrictData([votes, districts], ["Buskerud", "Akershus", "Østfold"], "Viken");
		mergeDistrictData([votes, districts], ["Vestfold", "Telemark"], "Vestfold og Telemark");
		mergeDistrictData([votes, districts], ["Troms", "Finnmark"], "Troms og Finnmark");
	}
	if (districtCount <= 1) {
		mergeDistrictData([votes, districts], Object.keys(districts), "Norge"); // merge all remaining districts
	}
	if (!(extraDistrict in Object.keys(districts))) {
		extraDistrictInput.value = ""; // de-select invalid extra vote district if not part of new merged districts
	}

	if (extraParty && extraDistrict && !isNaN(extraVotes)) {
		if (!(extraParty in votes[extraDistrict])) {
			votes[extraDistrict][extraParty] = 0; // if party did not run in that district originally, make it run
		}
		votes[extraDistrict][extraParty] += extraVotes;
	}

	var [localSeatCounts, globalSeatCount] = calculateAllSeatCounts(districts, totalSeatCount, globalSeatsPerDistrict, areaFactor, minSeatsPerDistrict);
	var seats = calculateAllSeats(votes, localSeatCounts, globalSeatCount, localThreshold, globalThreshold, localGlobalThreshold, methodName, negativeGlobalSeats, requireGlobalRepresentation, exemptGlobalThresholdIflocalSeats);
	var globalSeats = sumLocal(seats);
	var globalVotes = sumLocal(votes);
	var totalVotes = sumGlobal(globalVotes);

	// Build sorted list of unique parties
	var parties = [];
	for (var district in votes) {
		for (var party in votes[district]) {
			if (!parties.includes(party)) {
				parties.push(party);
			}
		}
	}
	parties.sort();
	var fullParties = parties.slice(); // always refers to full party list (copy for safety)

	var decimals = parseInt(document.getElementById("decimals").value);

	// Compute statistics (before any merging of parties takes place)
	var LSq = 0.0;
	var LH = 0.0;
	for (var party of parties) {
		var seatFrac = party in globalSeats ? globalSeats[party] / totalSeatCount : 0;
		var voteFrac = globalVotes[party] / totalVotes;
		var diff = voteFrac - seatFrac;
		LSq += diff**2;
		LH += Math.abs(diff);
	}
	LSq = Math.sqrt(LSq / 2);
	LH = LH / 2;
	var data = {"LSq": {"Verdi": LSq*100}, "LH": {"Verdi": LH*100}};
	printTable(statTable, data, ["LSq", "LH"], ["Verdi"], "Variabel", false, x => truncate(x, decimals) + " %");

	// Merge parties with no seats as "ANDRE", if requested
	var groupOtherParties = document.getElementById("groupotherparties").checked;
	var newParties = [];
	if (groupOtherParties) {
		globalVotes["ANDRE"] = 0;
		globalSeats["ANDRE"] = 0;
		for (var party of parties) { // all parties are not necessarily in globalSeats (e.g. if under thresholds), so loop over parties instead
			if (globalSeats[party] == 0 || !(party in globalSeats)) {
				for (data of [votes, seats]) {
					for (var district in data) {
						if (party in data[district]) {
							if (!("ANDRE" in data[district])) {
								data[district]["ANDRE"] = 0;
							}
							data[district]["ANDRE"] += data[district][party];
							delete data[district][party];
						}
					}
				}
				for (data of [globalSeats, globalVotes]) {
					data["ANDRE"] += data[party];
					delete data[party];
				}
			} else {
				newParties.push(party);
			}
		}
		newParties.push("ANDRE"); // always last
		parties = newParties;
	}

	// Make ANDRE always appear last
	if (parties.includes("ANDRE")) {
		parties.splice(parties.indexOf("ANDRE"), 1);
		parties.push("ANDRE");
	}

	var districtList = [];
	for (var district in votes) {
		districtList.push(district);
	}
	districtList.sort();
	var districtListWithGlobal = districtList.slice();
	districtListWithGlobal.push("Utjevningsmandater");

	printTable(voteTable, votes, districtList, parties, "Valgdistrikt", true, x => x.toLocaleString(LANG), voteTable.showFraction);
	printTable(seatTable, seats, districtListWithGlobal, parties, "Valgdistrikt", true, x => x.toLocaleString(LANG), seatTable.showFraction);

	// Read graph of friend parties
	var friendsInput = document.getElementById("friends");
	var friendsText = friendsInput.value.trim();
	var friends = {};
	for (var party of fullParties) {
		friends[party] = [];
	}
	var valid = true;
	if (friendsText.length > 0) {
		for (var text of friendsText.split(/\s*,\s*/)) {
			var friendList = text.split(/\s*\+\s*/);
			for (var party1 of friendList) {
				if (!fullParties.includes(party1)) {
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

		// add parties with no votes as "empty teams"
		for (var party of parties) {
			if (globalSeats[party] == 0) {
				teams.push([party]);
			}
		}

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
			var teamVotes = 0;
			for (var party of team) {
				teamVotes += globalVotes[party];
			}
			var seatFrac = teamSeats[team] / totalSeatCount;
			var voteFrac = teamVotes / totalVotes;
			var teamName = team.join(" + ");
			teamsDict[teamName] = {
				"Posisjon": teamSeats[team],
				"Opposisjon": totalSeatCount - teamSeats[team],
				"Andel mandater": seatFrac,
				"Andel stemmer": voteFrac,
				"Overrepresentasjon": seatFrac-voteFrac,
				"Stemmer per mandat": Math.ceil(teamVotes/teamSeats[team]),
			};
			teamNames.push(teamName);
		}
		printTable(teamTable, teamsDict, teamNames, ["Posisjon", "Opposisjon", "Andel mandater", "Andel stemmer", "Overrepresentasjon", "Stemmer per mandat"], "Partier i posisjon", false, (x, i) => i >= 2 && i <= 4 ? truncate(100*x, decimals).toLocaleString(LANG) + " %" : x.toLocaleString(LANG));
	}

	var totalPopulation = 0;
	for (var district in districts) {
		totalPopulation += districts[district]["population"];
	}
	for (var district in districts) {
		districts[district]["Fordelingstall"] = truncate(districts[district]["population"] * areaFactor + districts[district]["area"], 0); // TODO: don't duplicate!
		districts[district]["Mandater"] = localSeatCounts[district] + globalSeatsPerDistrict;
		districts[district]["Befolkningsandel"] = districts[district]["population"] / totalPopulation;
		districts[district]["Mandatandel"] = districts[district]["Mandater"] / totalSeatCount;
		districts[district]["Overrepresentasjon"] = districts[district]["Mandatandel"] - districts[district]["Befolkningsandel"];
		districts[district]["Innbyggere per mandat"] = Math.ceil(districts[district]["population"] / districts[district]["Mandater"], 0);
		districts[district]["Folketall"] = districts[district]["population"];
		districts[district]["Areal / km²"] = districts[district]["area"];
	}
	printTable(distTable, districts, districtList, ["Folketall", "Areal / km²", "Fordelingstall", "Mandater", "Innbyggere per mandat", "Mandatandel", "Befolkningsandel", "Overrepresentasjon"], "Valgdistrikt", false, (x, i) => i >= 5 && i <= 7 ? truncate(100*x, decimals).toLocaleString(LANG) + " %" : x.toLocaleString(LANG));

	extraPartyInput.innerHTML = "";
	for (var party of fullParties) {
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

	flushLog();
};

function showTab(tab) {
	voteTab.style["display"] = tab == "votes" ? "block" : "none";
	seatTab.style["display"] = tab == "seats" ? "block" : "none";
	teamTab.style["display"] = tab == "teams" ? "block" : "none";
	distTab.style["display"] = tab == "dists" ? "block" : "none";
	calcTab.style["display"] = tab == "calcs" ? "block" : "none";
	voteLink.style["color"] = tab == "votes" ? "black" : "gray";
	seatLink.style["color"] = tab == "seats" ? "black" : "gray";
	teamLink.style["color"] = tab == "teams" ? "black" : "gray";
	distLink.style["color"] = tab == "dists" ? "black" : "gray";
	calcLink.style["color"] = tab == "calcs" ? "black" : "gray";
};

showTab("votes");
setElection(); // run once on page load
