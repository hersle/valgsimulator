// https://valgresultat.no/valg/2021/st
// https://lovdata.no/lov/2023-06-16-62

var partyNames = {
	"A": "Arbeiderpartiet",
	"SV": "SV - Sosialistisk Venstreparti",
	"RØDT": "Rødt",
	"SP": "Senterpartiet",
	"KRF": "Kristelig Folkeparti",
	"MDG": "Miljøpartiet De Grønne",
	"V": "Venstre",
	"H": "Høyre",
	"FRP": "Fremskrittspartiet",
	"AAN": "Alliansen - Alternativ for Norge",
	"DEMN": "Norgesdemokratene",
	"FNB": "Folkeaksjonen Nei til mer bompenger",
	"HELSE": "Helsepartiet",
	"INP": "Industri- og Næringspartiet",
	"KRISTNE": "Konservativt",
	"LIBS": "Liberalistene",
	"PIR": "Piratpartiet",
	"PP": "Pensjonistpartiet",
	"PS": "Partiet Sentrum",
};

var votes = {
	"Østfold": {
		"A": 49345,
		"SV": 9840,
		"RØDT": 7418,
		"SP": 22849,
		"KRF": 5414,
		"MDG": 4782,
		"V": 4771,
		"H": 30211,
		"FRP": 20527,
		"AAN": 172,
		"DEMN": 2348,
		"FNB": 285,
		"HELSE": 393,
		"INP": 230,
		"KRISTNE": 688,
		"LIBS": 263,
		"PIR": 155,
		"PP": 1869,
		"PS": 336,
	},
	"Akershus": {
		"A": 95609,
		"SV": 25240,
		"RØDT": 14572,
		"SP": 32584,
		"KRF": 7580,
		"MDG": 17461,
		"V": 25393,
		"H": 101439,
		"FRP": 38779,
		"AAN": 309,
		"DEMN": 4007,
		"FNB": 634,
		"HELSE": 1161,
		"INP": 489,
		"KRISTNE": 719,
		"LIBS": 636,
		"PIR": 338,
		"PP": 2286,
		"PS": 953,
		"GENE": 112,
	},

	"Oslo": {
		"A": 87158,
		"SV": 50382,
		"RØDT": 31352,
		"SP": 11953,
		"KRF": 6922,
		"MDG": 32198,
		"V": 38142,
		"H": 89342,
		"FRP": 22784,
		"AAN": 232,
		"DEMN": 2585,
		"FNB": 1072,
		"HELSE": 593,
		"INP": 234,
		"KRISTNE": 474,
		"KYST": 64,
		"LIBS": 665,
		"NKP": 123,
		"PIR": 336,
		"PP": 1312,
		"PS": 1367,
		"FI": 275,
	},

	"Hedmark": {
		"A": 38136,
		"SV": 7902,
		"RØDT": 3876,
		"SP": 32286,
		"KRF": 1876,
		"MDG": 2382,
		"V": 2642,
		"H": 12191,
		"FRP": 9696,
		"AAN": 100,
		"DEMN": 1355,
		"FNB": 81,
		"HELSE": 293,
		"INP": 172,
		"KRISTNE": 219,
		"LIBS": 135,
		"PP": 1482,
		"PS": 210,
		"RN": 97,
	},

	"Oppland": {
		"A": 34552,
		"SV": 5508,
		"RØDT": 3534,
		"SP": 25619,
		"KRF": 1537,
		"MDG": 2289,
		"V": 2370,
		"H": 12323,
		"FRP": 8459,
		"AAN": 81,
		"DEMN": 930,
		"FNB": 66,
		"HELSE": 185,
		"INP": 128,
		"KRISTNE": 212,
		"LIBS": 91,
		"PIR": 65,
		"PP": 528,
		"PS": 184,
	},

	"Buskerud": {
		"A": 40575,
		"SV": 8062,
		"RØDT": 4941,
		"SP": 23068,
		"KRF": 3319,
		"MDG": 4251,
		"V": 5207,
		"H": 31544,
		"FRP": 17509,
		"AAN": 147,
		"DEMN": 1976,
		"FNB": 126,
		"HELSE": 421,
		"INP": 275,
		"KRISTNE": 330,
		"LIBS": 244,
		"PIR": 115,
		"PP": 520,
		"PS": 440,
	},

	"Vestfold": {
		"A": 37518,
		"SV": 8670,
		"RØDT": 6155,
		"SP": 13775,
		"KRF": 4861,
		"MDG": 5428,
		"V": 5771,
		"H": 34831,
		"FRP": 17271,
		"AAN": 146,
		"DEMN": 1826,
		"FNB": 71,
		"HELSE": 383,
		"INP": 403,
		"KRISTNE": 662,
		"LIBS": 198,
		"PIR": 125,
		"PP": 562,
		"PS": 381,
	},

	"Telemark": {
		"A": 29883,
		"SV": 5934,
		"RØDT": 4506,
		"SP": 15963,
		"KRF": 4327,
		"MDG": 2729,
		"V": 2203,
		"H": 15198,
		"FRP": 12297,
		"AAN": 107,
		"DEMN": 1379,
		"FNB": 87,
		"HELSE": 193,
		"INP": 596,
		"KRISTNE": 631,
		"LIBS": 110,
		"PIR": 85,
		"PP": 419,
		"PS": 263,
	},

	"Aust-Agder": {
		"A": 16147,
		"SV": 3644,
		"RØDT": 2456,
		"SP": 8907,
		"KRF": 5749,
		"MDG": 1976,
		"V": 2136,
		"H": 13305,
		"FRP": 8728,
		"AAN": 45,
		"DEMN": 917,
		"HELSE": 190,
		"INP": 279,
		"KRISTNE": 573,
		"LIBS": 102,
		"PIR": 71,
		"PP": 380,
		"PS": 230,
	},

	"Vest-Agder": {
		"A": 21845,
		"SV": 5615,
		"RØDT": 3355,
		"SP": 10859,
		"KRF": 14598,
		"MDG": 3330,
		"V": 3834,
		"H": 22359,
		"FRP": 13821,
		"AAN": 53,
		"DEMN": 2709,
		"FNB": 62,
		"HELSE": 167,
		"INP": 360,
		"KRISTNE": 969,
		"LIBS": 164,
		"PIR": 78,
		"PP": 492,
		"PS": 478,
	},

	"Rogaland": {
		"A": 57969,
		"SV": 13261,
		"RØDT": 9620,
		"SP": 26955,
		"KRF": 20859,
		"MDG": 6152,
		"V": 9106,
		"H": 61992,
		"FRP": 43382,
		"AAN": 212,
		"DEMN": 2634,
		"FNB": 316,
		"HELSE": 500,
		"INP": 1646,
		"KRISTNE": 1400,
		"LIBS": 424,
		"PIR": 202,
		"PP": 1327,
		"PS": 911,
	},

	"Hordaland": {
		"A": 68945,
		"SV": 26901,
		"RØDT": 14150,
		"SP": 29981,
		"KRF": 14724,
		"MDG": 11940,
		"V": 13163,
		"H": 74282,
		"FRP": 38352,
		"AAN": 206,
		"DEMN": 2876,
		"FNB": 403,
		"HELSE": 490,
		"INP": 1738,
		"KRISTNE": 1384,
		"KYST": 107,
		"LIBS": 527,
		"NKP": 77,
		"PIR": 262,
		"PP": 2286,
		"PS": 591,
		"GT": 87,
	},

	"Sogn og Fjordane": {
		"A": 16426,
		"SV": 3675,
		"RØDT": 2489,
		"SP": 17634,
		"KRF": 2389,
		"MDG": 1542,
		"V": 2135,
		"H": 8529,
		"FRP": 5771,
		"AAN": 43,
		"DEMN": 453,
		"HELSE": 89,
		"INP": 293,
		"KRISTNE": 253,
		"LIBS": 47,
		"PP": 173,
		"PS": 141,
	},

	"Møre og Romsdal": {
		"A": 29928,
		"SV": 9341,
		"RØDT": 4933,
		"SP": 25938,
		"KRF": 7905,
		"MDG": 3697,
		"V": 4364,
		"H": 24123,
		"FRP": 32746,
		"AAN": 126,
		"DEMN": 1752,
		"FNB": 79,
		"HELSE": 280,
		"INP": 1096,
		"KRISTNE": 812,
		"LIBS": 175,
		"PP": 790,
		"PS": 325,
	},

	"Sør-Trøndelag": {
		"A": 57621,
		"SV": 17635,
		"RØDT": 10852,
		"SP": 29181,
		"KRF": 4211,
		"MDG": 9268,
		"V": 8435,
		"H": 31837,
		"FRP": 16650,
		"AAN": 216,
		"DEMN": 1723,
		"HELSE": 330,
		"INP": 658,
		"KRISTNE": 305,
		"LIBS": 247,
		"NKP": 63,
		"PIR": 212,
		"PP": 3351,
		"PS": 442,
	},

	"Nord-Trøndelag": {
		"A": 25730,
		"SV": 4389,
		"RØDT": 3035,
		"SP": 22089,
		"KRF": 1726,
		"MDG": 1424,
		"V": 1557,
		"H": 8121,
		"FRP": 6146,
		"AAN": 79,
		"DEMN": 754,
		"FNB": 23,
		"HELSE": 145,
		"INP": 359,
		"KRISTNE": 179,
		"LIBS": 60,
		"PIR": 55,
		"PP": 643,
		"PS": 129,
	},

	"Nordland": {
		"A": 38611,
		"SV": 9620,
		"RØDT": 7273,
		"SP": 28465,
		"KRF": 2637,
		"MDG": 3138,
		"V": 3342,
		"H": 20532,
		"FRP": 16338,
		"AAN": 99,
		"DEMN": 1807,
		"HELSE": 339,
		"INP": 577,
		"KRISTNE": 314,
		"LIBS": 175,
		"NKP": 38,
		"PIR": 126,
		"PP": 586,
		"PS": 211,
	},

	"Troms": {
		"A": 25168,
		"SV": 10029,
		"RØDT": 4455,
		"SP": 17698,
		"KRF": 2062,
		"MDG": 2768,
		"V": 2298,
		"H": 12493,
		"FRP": 12998,
		"AAN": 66,
		"DEMN": 1370,
		"FNB": 130,
		"HELSE": 225,
		"INP": 319,
		"KRISTNE": 186,
		"LIBS": 187,
		"PIR": 83,
		"PS": 175,
	},

	"Finnmark": {
		"A": 12228,
		"SV": 2415,
		"RØDT": 1959,
		"SP": 7157,
		"KRF": 648,
		"MDG": 892,
		"V": 564,
		"H": 2664,
		"FRP": 4220,
		"AAN": 50,
		"DEMN": 667,
		"HELSE": 113,
		"INP": 179,
		"KRISTNE": 138,
		"LIBS": 70,
		"PS": 69,
		"PF": 4950,
	},
};

// Number of mandates in each district // TODO: calculate it based on inhabitants/area in https://www.regjeringen.no/no/dokumentarkiv/regjeringen-solberg/aktuelt-regjeringen-solberg/kmd/pressemeldinger/2020/fordeling-av-mandatene-ved-neste-stortingsvalg/id2699589/
// Subtracted 1 from the numbers in the official table, because it includes leveling mandates
var localSeatCounts = {
	"Østfold": 8,
	"Akershus": 18,
	"Oslo": 19,
	"Hedmark": 6,
	"Oppland": 5,
	"Buskerud": 7,
	"Vestfold": 6,
	"Telemark": 5,
	"Aust-Agder": 3,
	"Vest-Agder": 5,
	"Rogaland": 13,
	"Hordaland": 15,
	"Sogn og Fjordane": 3,
	"Møre og Romsdal": 7,
	"Sør-Trøndelag": 9,
	"Nord-Trøndelag": 4,
	"Nordland": 8,
	"Troms": 5,
	"Finnmark": 4,
};

function printTable(table, data, mergeParties, mergeDistricts, mergedDistrictLabel, showColumnTotals, showRowTotals) {
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
		return printTable(table, newData, [], mergeDistricts, mergedDistrictLabel, showColumnTotals, showRowTotals);
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
		return printTable(table, newData, mergeParties, [], mergedDistrictLabel, showColumnTotals, showRowTotals);
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
	const format = (x) => x.toLocaleString("no-NO");
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
	for (var district in data) {
		var row = table.insertRow();
		var cell = document.createElement("th");
		cell.innerHTML = district;
		row.appendChild(cell);
		var total = 0;
		for (var party of parties) {
			var cell = row.insertCell();
			if (party in data[district]) {
				cell.innerHTML = format(data[district][party]);
				total += data[district][party];
			}
		}
		if (showRowTotals) {
			var cell = document.createElement("th");
			cell.innerHTML = format(total);
			row.appendChild(cell);
		}
	}

	if (showColumnTotals) {
		var globalTotal = 0;
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
			globalTotal += total;
			cell.innerHTML = format(total);
			row.appendChild(cell);
		}
		if (showRowTotals) {
			var cell = document.createElement("th");
			cell.innerHTML = format(globalTotal);
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
			}
		}
		seats[bestParty] += 1;
		seatCount -= 1;
	}

	return seats;
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
	var globalSeatCount = parseInt(document.getElementById("globalseats").value);
	var negativeGlobalSeats = document.getElementById("negativeglobalseats").checked;

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

	var groupLocalVotes = document.getElementById("grouplocalvotes").checked;
	var groupLocalSeats = document.getElementById("grouplocalseats").checked;
	var mergeDistricts = [];
	for (var district in votes) {
		mergeDistricts.push(district);
	}
	var mergeLocalVotes = groupLocalVotes ? mergeDistricts : [];
	var mergeLocalSeats = groupLocalSeats ? mergeDistricts : [];

	var voteTable = document.getElementById("votes");
	var seatTable = document.getElementById("seats");
	printTable(voteTable, votes, mergeParties, mergeLocalVotes, "Distriktsstemmer", true, true);
	printTable(seatTable, seats, mergeParties, mergeLocalSeats, "Distriktsmandater", true, true);
};

update(); // run once on page load
