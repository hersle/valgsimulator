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
};

var parties2025 = ["Ap", "Høyre", "Frp", "SV", "Sp", "KrF", "Venstre", "MDG", "Rødt", "Andre"];

var votes2025 = {
	"Akershus": [27.4, 19.5, 18.9, 6.1, 3.6, 2.5, 6.4, 5.4, 5.4, 3.9],
	"Aust-Agder": [26.0, 14.4, 23.9, 4.9, 5.6, 10.5, 3.0, 3.4, 5.1, 5.3],
	"Buskerud": [30.1, 15.7, 22.1, 5.0, 6.7, 2.8, 3.4, 3.4, 4.7, 4.0],
	"Finnmark": [33.3, 4.9, 19.5, 5.5, 7.6, 2.0, 1.4, 2.6, 6.9, 19.9],
	"Hedmark": [35.1, 7.6, 15.2, 6.1, 11.6, 2.0, 2.2, 2.4, 4.6, 4.5],
	"Hordaland": [24.1, 17.5, 22.8, 7.9, 4.1, 5.8, 4.1, 4.5, 6.4, 4.5],
	"Møre og Romsdal": [21.4, 11.6, 39.8, 5.6, 7.2, 6.4, 2.8, 2.8, 4.5, 4.6],
	"Nord-Trøndelag": [35.6, 7.6, 14.5, 5.1, 12.0, 2.7, 1.9, 2.1, 5.4, 3.9],
	"Nordland": [30.5, 10.9, 22.0, 6.4, 8.8, 2.4, 2.3, 2.7, 7.4, 4.0],
	"Oppland": [37.1, 8.9, 15.5, 5.0, 10.8, 1.9, 2.3, 2.6, 4.9, 3.1],
	"Oslo": [24.4, 16.8, 10.8, 11.8, 1.3, 2.2, 9.4, 9.7, 11.3, 3.1],
	"Rogaland": [23.8, 17.1, 30.3, 4.6, 4.3, 9.7, 3.3, 2.7, 5.1, 4.6],
	"Sogn og Fjordane": [28.1, 9.8, 16.8, 5.3, 11.8, 4.6, 3.2, 2.8, 5.5, 3.0],
	"Sør-Trøndelag": [31.6, 11.7, 15.6, 8.1, 6.3, 2.6, 4.1, 5.5, 7.7, 4.9],
	"Telemark": [32.7, 11.2, 22.9, 5.4, 6.8, 5.4, 2.1, 3.2, 6.4, 5.0],
	"Troms": [28.8, 9.6, 25.3, 9.6, 7.9, 2.7, 2.3, 3.4, 6.6, 3.7],
	"Vest-Agder": [22.0, 15.2, 23.7, 4.7, 4.3, 16.7, 3.4, 3.6, 4.4, 6.5],
	"Vestfold": [28.6, 17.9, 22.4, 5.5, 4.1, 4.2, 3.9, 4.4, 6.0, 4.3],
	"Østfold": [32.3, 13.3, 22.9, 5.4, 5.9, 4.0, 2.8, 3.4, 6.3, 5.2],
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
