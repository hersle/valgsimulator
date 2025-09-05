// https://www.regjeringen.no/no/aktuelt/fordeling-av-mandatene-for-stortingsvalget-i-2025/id3040582/
// Eligible voters: https://www.ssb.no/statbank/table/07360/ (choose 2025; Valgdistrikt (Velg alle); Vis tabell)
// Fraction of eligible voters that show up: https://valgresultat.no/valg/2021/st/akershus CTRL+F "Fremmøteprosent" etc. (alternatively see https://www.ssb.no/statbank/table/08243)
// https://www.pollofpolls.no/?cmd=Stortinget&fylke=2
var election2025 = {
	"votes": {}, // computed below

	"districts": {
		"Akershus": {"population": 728803, "area": 5895, "eligible": 478947, "showup": 79.1},
		"Aust-Agder": {"population": 122968, "area": 9155, "eligible": 91255, "showup": 75.8},
		"Buskerud": {"population": 269819, "area": 14694, "eligible": 242919, "showup": 75.2},
		"Finnmark": {"population": 75053, "area": 48638, "eligible": 54558, "showup": 72.0},
		"Hedmark": {"population": 202048, "area": 27398, "eligible": 155046, "showup": 76.1},
		"Hordaland": {"population": 541875, "area": 15438, "eligible": 409396, "showup": 79.9},
		"Møre og Romsdal": {"population": 270624, "area": 14356, "eligible": 196435, "showup": 77.6},
		"Nord-Trøndelag": {"population": 135440, "area": 21945, "eligible": 102344, "showup": 76.5},
		"Nordland": {"population": 243081, "area": 38155, "eligible": 181787, "showup": 74.2},
		"Oppland": {"population": 174256, "area": 24675, "eligible": 133249, "showup": 75.0},
		"Oslo": {"population": 717710, "area": 454, "eligible": 516704, "showup": 78.5},
		"Rogaland": {"population": 499417, "area": 9377, "eligible": 349960, "showup": 78.1},
		"Sogn og Fjordane": {"population": 109424, "area": 18433, "eligible": 66785, "showup": 79.7},
		"Sør-Trøndelag": {"population": 347516, "area": 20258, "eligible": 257314, "showup": 78.5},
		"Telemark": {"population": 177093, "area": 15298, "eligible": 133883, "showup": 74.5},
		"Troms": {"population": 169610, "area": 26189, "eligible": 126281, "showup": 74.9},
		"Vest-Agder": {"population": 196882, "area": 7278, "eligible": 144818, "showup": 76.9},
		"Vestfold": {"population": 256432, "area": 2168, "eligible": 191454, "showup": 76.5},
		"Østfold": {"population": 312152, "area": 4004, "eligible": 220797, "showup": 72.9},
	},

	"defaults": merge3({"friends": "R+SV+AP+SP+MDG, KRF+V+H+FRP"}, DEFAULTS_AFTER_2025, DEFAULTS_COMMON),
};

var parties2025 = ["AP", "H", "FRP", "SV", "SP", "KRF", "V", "MDG", "R", "ANDRE"];

// pollofpolls.no "Poll of polls (brutt ned)" sept 5th 2025
var votes2025 = {
	"Akershus": [27.0, 19.3, 19.2, 5.9, 3.9, 2.6, 5.9, 6.4, 5.1, 3.6],
	"Aust-Agder": [25.6, 14.3, 24.2, 4.8, 6.0, 11.2, 2.8, 4.1, 4.8, 4.9],
	"Buskerud": [29.6, 15.6, 22.4, 4.9, 7.1, 3.0, 3.1, 4.0, 4.5, 3.7],
	"Finnmark": [32.8, 4.8, 19.8, 5.4, 8.1, 2.1, 1.2, 3.1, 6.5, 18.5],
	"Hedmark": [34.6, 7.5, 15.4, 6.0, 12.4, 2.1, 2.0, 2.8, 4.4, 4.2],
	"Hordaland": [23.8, 17.3, 23.1, 7.7, 4.4, 6.2, 3.7, 5.3, 6.0, 4.2],
	"Møre og Romsdal": [21.1, 11.5, 40.3, 5.5, 7.7, 6.8, 2.5, 3.4, 4.3, 4.2],
	"Nord-Trøndelag": [35.1, 7.5, 14.7, 5.0, 12.7, 2.9, 1.7, 2.5, 5.1, 3.7],
	"Nordland": [30.1, 10.8, 22.3, 6.2, 9.4, 2.5, 2.1, 3.2, 7.0, 3.7],
	"Oppland": [36.6, 8.8, 15.7, 4.8, 11.5, 2.0, 2.1, 3.1, 4.6, 2.9],
	"Oslo": [24.0, 16.6, 11.0, 11.5, 1.4, 2.3, 8.6, 11.5, 10.7, 2.8],
	"Rogaland": [23.4, 16.9, 30.6, 4.4, 4.6, 10.4, 3.0, 3.2, 4.8, 4.3],
	"Sogn og Fjordane": [27.7, 9.7, 17.0, 5.1, 12.5, 4.9, 2.9, 3.4, 5.2, 2.8],
	"Sør-Trøndelag": [31.2, 11.6, 15.8, 7.9, 6.7, 2.8, 3.7, 6.5, 7.3, 4.5],
	"Telemark": [32.2, 11.1, 23.2, 5.3, 7.3, 5.7, 1.9, 3.8, 6.0, 4.6],
	"Troms": [28.4, 9.5, 25.6, 9.4, 8.4, 2.9, 2.1, 4.0, 6.2, 3.4],
	"Vest-Agder": [21.7, 15.0, 24.0, 4.6, 4.6, 17.8, 3.1, 4.3, 4.1, 6.1],
	"Vestfold": [28.2, 17.7, 22.7, 5.4, 4.4, 4.5, 3.5, 5.3, 5.7, 4.0],
	"Østfold": [31.9, 13.2, 23.2, 5.3, 6.2, 4.3, 2.5, 4.0, 5.9, 4.8],
};

for (var district in votes2025) {
	var districtVotes = {};
	for (var i = 0; i < parties2025.length; i++) {
		var party = parties2025[i];
		var eligible = election2025["districts"][district]["eligible"];
		var showUpFrac = election2025["districts"][district]["showup"] / 100; // fraction of eligible voters that voted
		var voteFrac = votes2025[district][i] / 100; // fraction of voters that voted for this party
		districtVotes[party] = Math.round(eligible * voteFrac * showUpFrac);
	}
	election2025["votes"][district] = districtVotes;
}
