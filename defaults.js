var DEFAULTS_COMMON = {
	"totalseats": 169,
	"areafactor": 1.8,
	"globalseatsperdistrict": 1,
	"localthreshold": 0.0,
	"globalthreshold": 4.0,
	"method": "Sainte-Laguë fra 1,4",
	"negativeglobalseats": false,
	"exemptglobalthreshold": false,
	"mergedistricts": "19 fylker (til 2018)",
	"extravotes": 0,
	"extraparty": "",
	"extradistrict": "",
};

var DEFAULTS_BEFORE_2025 = {
	"minlocalseats": 0,
	"requireglobalrepresentation": false,
};

var DEFAULTS_AFTER_2025 = {
	"minlocalseats": 4,
	"requireglobalrepresentation": true,
};

function merge2(dict1, dict2) {
	for (var key in dict2) {
		dict1[key] = dict2[key];
	}
	return dict1;
}

function merge3(dict1, dict2, dict3) {
	return merge2(merge2(dict1, dict2), dict3);
}
