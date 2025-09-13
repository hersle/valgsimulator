// https://valgresultat.no/valg/2025/st (preliminary, as of Sept 9th 15:22)
// https://www.regjeringen.no/no/aktuelt/fordeling-av-mandatene-for-stortingsvalget-i-2025/id3040582/
var election2025 = {
	"votes": {},

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

var str = `03;Oslo;;;;;A;Arbeiderpartiet;25,66091;518619;70553;37715;108268;2,69831;5;0;
03;Oslo;;;;;SV;SV - Sosialistisk Venstreparti;10,70848;518619;30164;15017;45181;-2,56514;2;0;
03;Oslo;;;;;RØDT;Rødt;7,1521;518619;20849;9327;30176;-1,10788;2;1;
03;Oslo;;;;;SP;Senterpartiet;0,75038;518619;1972;1194;3166;-2,39875;0;0;
03;Oslo;;;;;KRF;Kristelig Folkeparti;2,11415;518619;6040;2880;8920;0,29049;0;0;
03;Oslo;;;;;MDG;Miljøpartiet De Grønne;10,26882;518619;28958;14368;43326;1,78595;2;0;
03;Oslo;;;;;V;Venstre;7,26279;518619;19487;11156;30643;-2,78609;2;0;
03;Oslo;;;;;H;Høyre;18,4972;518619;53544;24499;78043;-5,0408;4;0;
03;Oslo;;;;;FRP;Fremskrittspartiet;14,32316;518619;46159;14273;60432;8,3205;3;0;
03;Oslo;;;;;DEMN;Norgesdemokratene;0,43326;518619;1058;770;1828;-0,24778;0;0;
03;Oslo;;;;;DNI;Partiet DNI;0,04788;518619;141;61;202;0,04788;0;0;
03;Oslo;;;;;ENSOM;Ensomhetspartiet;0,16875;518619;425;287;712;0,16875;0;0;
03;Oslo;;;;;FRED;Fred og Rettferdighet (FOR);0,48896;518619;1350;713;2063;0,48896;0;0;
03;Oslo;;;;;GENP;Generasjonspartiet;0,4079;518619;1152;569;1721;0,4079;0;0;
03;Oslo;;;;;HELSE;Velferd og Innovasjonspartiet;0,11519;518619;299;187;486;-0,04104;0;0;
03;Oslo;;;;;INP;Industri- og Næringspartiet;0,19008;518619;483;319;802;0,12843;0;0;
03;Oslo;;;;;KRISTNE;Konservativt;0,16686;518619;465;239;704;0,04198;0;0;
03;Oslo;;;;;PP;Pensjonistpartiet;0,37661;518619;1103;486;1589;0,03095;0;0;
03;Oslo;;;;;PS;Partiet Sentrum;0,30693;518619;730;565;1295;-0,05322;0;0;
03;Oslo;;;;;RUS;Redd Ullevål sykehus;0,55959;518619;1467;894;2361;0,55959;0;0;
04;Hedmark;;;;;A;Arbeiderpartiet;34,96826;155149;25274;16540;41814;1,84426;3;0;
04;Hedmark;;;;;SV;SV - Sosialistisk Venstreparti;4,47996;155149;3342;2015;5357;-2,38353;0;0;
04;Hedmark;;;;;RØDT;Rødt;4,776;155149;3470;2241;5711;1,4094;0;0;
04;Hedmark;;;;;SP;Senterpartiet;13,62971;155149;7952;8346;16298;-14,41313;1;0;
04;Hedmark;;;;;KRF;Kristelig Folkeparti;2,18019;155149;1406;1201;2607;0,55074;0;0;
04;Hedmark;;;;;MDG;Miljøpartiet De Grønne;2,84921;155149;2142;1265;3407;0,78026;0;0;
04;Hedmark;;;;;V;Venstre;1,9201;155149;1358;938;2296;-0,37468;0;0;
04;Hedmark;;;;;H;Høyre;8,99504;155149;6416;4340;10756;-1,59377;1;1;
04;Hedmark;;;;;FRP;Fremskrittspartiet;21,0768;155149;14962;10241;25203;12,65508;2;0;
04;Hedmark;;;;;DEMN;Norgesdemokratene;1,07128;155149;596;685;1281;-0,10564;0;0;
04;Hedmark;;;;;DNI;Partiet DNI;0,14217;155149;115;55;170;0,14217;0;0;
04;Hedmark;;;;;FRED;Fred og Rettferdighet (FOR);0,22161;155149;144;121;265;0,22161;0;0;
04;Hedmark;;;;;GENP;Generasjonspartiet;0,60798;155149;396;331;727;0,60798;0;0;
04;Hedmark;;;;;HELSE;Velferd og Innovasjonspartiet;0,15722;155149;96;92;188;-0,09727;0;0;
04;Hedmark;;;;;INP;Industri- og Næringspartiet;0,61801;155149;393;346;739;0,46862;0;0;
04;Hedmark;;;;;KRISTNE;Konservativt;0,27514;155149;195;134;329;0,08492;0;0;
04;Hedmark;;;;;PP;Pensjonistpartiet;1,91676;155149;1500;792;2292;0,62953;0;0;
04;Hedmark;;;;;PS;Partiet Sentrum;0,11457;155149;71;66;137;-0,06783;0;0;
05;Oppland;;;;;A;Arbeiderpartiet;33,21528;133306;20038;14007;34045;-1,80565;2;0;
05;Oppland;;;;;SV;SV - Sosialistisk Venstreparti;4,52692;133306;3058;1582;4640;-1,05584;1;1;
05;Oppland;;;;;RØDT;Rødt;4,47228;133306;2810;1774;4584;0,89032;0;0;
05;Oppland;;;;;SP;Senterpartiet;15,77787;133306;7979;8193;16172;-10,18883;1;0;
05;Oppland;;;;;KRF;Kristelig Folkeparti;2,21468;133306;1255;1015;2270;0,65682;0;0;
05;Oppland;;;;;MDG;Miljøpartiet De Grønne;2,88201;133306;1870;1084;2954;0,56194;0;0;
05;Oppland;;;;;V;Venstre;2,16102;133306;1311;904;2215;-0,24115;0;0;
05;Oppland;;;;;H;Høyre;9,21481;133306;5504;3941;9445;-3,27543;0;0;
05;Oppland;;;;;FRP;Fremskrittspartiet;21,37408;133306;12797;9111;21908;12,80027;2;0;
05;Oppland;;;;;DEMN;Norgesdemokratene;0,84489;133306;414;452;866;-0,09773;0;0;
05;Oppland;;;;;DNI;Partiet DNI;0,14927;133306;87;66;153;0,14927;0;0;
05;Oppland;;;;;FRED;Fred og Rettferdighet (FOR);0,24;133306;145;101;246;0,24;0;0;
05;Oppland;;;;;GENP;Generasjonspartiet;0,68782;133306;406;299;705;0,68782;0;0;
05;Oppland;;;;;HELSE;Velferd og Innovasjonspartiet;0,14927;133306;80;73;153;-0,03824;0;0;
05;Oppland;;;;;INP;Industri- og Næringspartiet;0,64196;133306;321;337;658;0,51223;0;0;
05;Oppland;;;;;KRISTNE;Konservativt;0,3083;133306;193;123;316;0,09342;0;0;
05;Oppland;;;;;PP;Pensjonistpartiet;0,95514;133306;603;376;979;0,41997;0;0;
05;Oppland;;;;;PS;Partiet Sentrum;0,18439;133306;105;84;189;-0,0021;0;0;
09;Aust-Agder;;;;;A;Arbeiderpartiet;26,88513;91325;11253;8093;19346;2,35866;1;0;
09;Aust-Agder;;;;;SV;SV - Sosialistisk Venstreparti;3,90645;91325;1841;970;2811;-1,6286;0;0;
09;Aust-Agder;;;;;RØDT;Rødt;4,59296;91325;2028;1277;3305;0,86242;0;0;
09;Aust-Agder;;;;;SP;Senterpartiet;5,07935;91325;1759;1896;3655;-8,44993;0;0;
09;Aust-Agder;;;;;KRF;Kristelig Folkeparti;8,09361;91325;3396;2428;5824;-0,63883;1;1;
09;Aust-Agder;;;;;MDG;Miljøpartiet De Grønne;3,37975;91325;1495;937;2432;0,37831;0;0;
09;Aust-Agder;;;;;V;Venstre;2,57789;91325;1098;757;1855;-0,66658;0;0;
09;Aust-Agder;;;;;H;Høyre;13,02843;91325;5677;3698;9375;-7,18118;1;0;
09;Aust-Agder;;;;;FRP;Fremskrittspartiet;27,79538;91325;11960;8041;20001;14,53799;1;0;
09;Aust-Agder;;;;;DEMN;Norgesdemokratene;0,64899;91325;222;245;467;-0,74389;0;0;
09;Aust-Agder;;;;;DNI;Partiet DNI;0,19178;91325;84;54;138;0,19178;0;0;
09;Aust-Agder;;;;;FRED;Fred og Rettferdighet (FOR);0,20984;91325;76;75;151;0,20984;0;0;
09;Aust-Agder;;;;;GENP;Generasjonspartiet;0,66984;91325;258;224;482;0,66984;0;0;
09;Aust-Agder;;;;;HELSE;Velferd og Innovasjonspartiet;0,12229;91325;52;36;88;-0,16631;0;0;
09;Aust-Agder;;;;;INP;Industri- og Næringspartiet;0,71708;91325;298;218;516;0,2933;0;0;
09;Aust-Agder;;;;;KRISTNE;Konservativt;1,22155;91325;542;337;879;0,35119;0;0;
09;Aust-Agder;;;;;PP;Pensjonistpartiet;0,75044;91325;289;251;540;0,17324;0;0;
09;Aust-Agder;;;;;PS;Partiet Sentrum;0,12924;91325;58;35;93;-0,22012;0;0;
10;Vest-Agder;;;;;A;Arbeiderpartiet;22,82677;144902;16449;9923;26372;2,0513;1;0;
10;Vest-Agder;;;;;SV;SV - Sosialistisk Venstreparti;3,87948;144902;3053;1429;4482;-1,46061;1;1;
10;Vest-Agder;;;;;RØDT;Rødt;4,01278;144902;2929;1707;4636;0,82204;0;0;
10;Vest-Agder;;;;;SP;Senterpartiet;4,03615;144902;2294;2369;4663;-6,2912;0;0;
10;Vest-Agder;;;;;KRF;Kristelig Folkeparti;12,98612;144902;9052;5951;15003;-0,89716;1;0;
10;Vest-Agder;;;;;MDG;Miljøpartiet De Grønne;3,4969;144902;2526;1514;4040;0,32993;0;0;
10;Vest-Agder;;;;;V;Venstre;3,0996;144902;2146;1435;3581;-0,54669;0;0;
10;Vest-Agder;;;;;H;Høyre;13,51066;144902;9806;5803;15609;-7,75365;1;0;
10;Vest-Agder;;;;;FRP;Fremskrittspartiet;27,65492;144902;20935;11015;31950;14,51059;2;0;
10;Vest-Agder;;;;;DEMN;Norgesdemokratene;0,59465;144902;383;304;687;-1,98172;0;0;
10;Vest-Agder;;;;;DNI;Partiet DNI;0,12551;144902;94;51;145;0,12551;0;0;
10;Vest-Agder;;;;;FRED;Fred og Rettferdighet (FOR);0,21639;144902;150;100;250;0,21639;0;0;
10;Vest-Agder;;;;;GENP;Generasjonspartiet;0,56608;144902;392;262;654;0,56608;0;0;
10;Vest-Agder;;;;;HELSE;Velferd og Innovasjonspartiet;0,12637;144902;83;63;146;-0,03245;0;0;
10;Vest-Agder;;;;;INP;Industri- og Næringspartiet;0,51155;144902;340;251;591;0,16918;0;0;
10;Vest-Agder;;;;;KRISTNE;Konservativt;1,31999;144902;923;602;1525;0,39843;0;0;
10;Vest-Agder;;;;;NKP;Norges Kommunistiske Parti;0,04328;144902;26;24;50;0,04328;0;0;
10;Vest-Agder;;;;;PP;Pensjonistpartiet;0,7591;144902;576;301;877;0,29119;0;0;
10;Vest-Agder;;;;;PS;Partiet Sentrum;0,2337;144902;170;100;270;-0,22089;0;0;
11;Rogaland;;;;;A;Arbeiderpartiet;23,66497;350288;42337;24402;66739;1,2717;4;0;
11;Rogaland;;;;;SV;SV - Sosialistisk Venstreparti;3,68773;350288;7005;3395;10400;-1,43495;1;1;
11;Rogaland;;;;;RØDT;Rødt;5,50146;350288;10040;5475;15515;1,78528;1;0;
11;Rogaland;;;;;SP;Senterpartiet;4,99369;350288;6818;7265;14083;-5,41895;1;0;
11;Rogaland;;;;;KRF;Kristelig Folkeparti;8,36406;350288;14043;9545;23588;0,30629;1;0;
11;Rogaland;;;;;MDG;Miljøpartiet De Grønne;2,74913;350288;5222;2531;7753;0,37263;0;0;
11;Rogaland;;;;;V;Venstre;2,64276;350288;4589;2864;7453;-0,87487;0;0;
11;Rogaland;;;;;H;Høyre;15,34665;350288;27851;15429;43280;-8,60069;2;0;
11;Rogaland;;;;;FRP;Fremskrittspartiet;28,72887;350288;54770;26250;81020;11,97052;4;0;
11;Rogaland;;;;;DEMN;Norgesdemokratene;0,69464;350288;1075;884;1959;-0,32287;0;0;
11;Rogaland;;;;;DNI;Partiet DNI;0,16985;350288;314;165;479;0,16985;0;0;
11;Rogaland;;;;;FRED;Fred og Rettferdighet (FOR);0,25211;350288;405;306;711;0,25211;0;0;
11;Rogaland;;;;;GENP;Generasjonspartiet;0,59287;350288;1045;627;1672;0,59287;0;0;
11;Rogaland;;;;;HELSE;Velferd og Innovasjonspartiet;0,14857;350288;230;189;419;-0,04458;0;0;
11;Rogaland;;;;;INP;Industri- og Næringspartiet;0,74216;350288;1272;821;2093;0,10631;0;0;
11;Rogaland;;;;;KRISTNE;Konservativt;0,87513;350288;1529;939;2468;0,33431;0;0;
11;Rogaland;;;;;PP;Pensjonistpartiet;0,71095;350288;1320;685;2005;0,19834;0;0;
11;Rogaland;;;;;PS;Partiet Sentrum;0,13439;350288;245;134;379;-0,21753;0;0;
12;Hordaland;;;;;A;Arbeiderpartiet;26,73735;397456;58038;28814;86852;4,01861;4;0;
12;Hordaland;;;;;SV;SV - Sosialistisk Venstreparti;5,81066;397456;13290;5585;18875;-3,05375;1;0;
12;Hordaland;;;;;RØDT;Rødt;4,97023;397456;10984;5161;16145;0,30753;1;0;
12;Hordaland;;;;;SP;Senterpartiet;4,22739;397456;7499;6233;13732;-5,65194;1;1;
12;Hordaland;;;;;KRF;Kristelig Folkeparti;4,96469;397456;10439;5688;16127;0,11284;1;0;
12;Hordaland;;;;;MDG;Miljøpartiet De Grønne;4,86464;397456;10698;5104;15802;0,93017;1;0;
12;Hordaland;;;;;V;Venstre;3,42513;397456;7012;4114;11126;-0,91233;0;0;
12;Hordaland;;;;;H;Høyre;16,87293;397456;36542;18267;54809;-7,60446;3;0;
12;Hordaland;;;;;FRP;Fremskrittspartiet;23,81894;397456;53682;23690;77372;11,1812;4;0;
12;Hordaland;;;;;DEMN;Norgesdemokratene;0,60339;397456;1157;803;1960;-0,34431;0;0;
12;Hordaland;;;;;DNI;Partiet DNI;0,15054;397456;332;157;489;0,15054;0;0;
12;Hordaland;;;;;FRED;Fred og Rettferdighet (FOR);0,24659;397456;517;284;801;0,24659;0;0;
12;Hordaland;;;;;GENP;Generasjonspartiet;1,10487;397456;2264;1325;3589;1,10487;0;0;
12;Hordaland;;;;;HELSE;Velferd og Innovasjonspartiet;0,17917;397456;341;241;582;0,0177;0;0;
12;Hordaland;;;;;INP;Industri- og Næringspartiet;0,52981;397456;1021;700;1721;-0,0429;0;0;
12;Hordaland;;;;;KRISTNE;Konservativt;0,55628;397456;1197;610;1807;0,10023;0;0;
12;Hordaland;;;;;PP;Pensjonistpartiet;0,83827;397456;1898;825;2723;0,08499;0;0;
12;Hordaland;;;;;PS;Partiet Sentrum;0,09913;397456;216;106;322;-0,09562;0;0;
14;Sogn og Fjordane;;;;;A;Arbeiderpartiet;30,93611;79081;12077;7702;19779;4,47755;1;0;
14;Sogn og Fjordane;;;;;SV;SV - Sosialistisk Venstreparti;4,26214;79081;1741;984;2725;-1,65745;0;0;
14;Sogn og Fjordane;;;;;RØDT;Rødt;3,97591;79081;1598;944;2542;-0,0333;0;0;
14;Sogn og Fjordane;;;;;SP;Senterpartiet;16,02409;79081;5446;4799;10245;-12,38028;1;0;
14;Sogn og Fjordane;;;;;KRF;Kristelig Folkeparti;4,27778;79081;1635;1100;2735;0,42965;0;0;
14;Sogn og Fjordane;;;;;MDG;Miljøpartiet De Grønne;3,28302;79081;1381;718;2099;0,79921;1;1;
14;Sogn og Fjordane;;;;;V;Venstre;2,92015;79081;1070;797;1867;-0,51885;0;0;
14;Sogn og Fjordane;;;;;H;Høyre;10,17752;79081;3915;2592;6507;-3,56076;0;0;
14;Sogn og Fjordane;;;;;FRP;Fremskrittspartiet;20,82584;79081;8610;4705;13315;11,53007;1;0;
14;Sogn og Fjordane;;;;;DEMN;Norgesdemokratene;0,60999;79081;197;193;390;-0,11969;0;0;
14;Sogn og Fjordane;;;;;DNI;Partiet DNI;0,17205;79081;67;43;110;0,17205;0;0;
14;Sogn og Fjordane;;;;;FRED;Fred og Rettferdighet (FOR);0,20177;79081;80;49;129;0,20177;0;0;
14;Sogn og Fjordane;;;;;GENP;Generasjonspartiet;0,83053;79081;309;222;531;0,83053;0;0;
14;Sogn og Fjordane;;;;;HELSE;Velferd og Innovasjonspartiet;0,15172;79081;54;43;97;0,00836;0;0;
14;Sogn og Fjordane;;;;;INP;Industri- og Næringspartiet;0,4051;79081;154;105;259;-0,06686;0;0;
14;Sogn og Fjordane;;;;;KRISTNE;Konservativt;0,427;79081;186;87;273;0,01947;0;0;
14;Sogn og Fjordane;;;;;PP;Pensjonistpartiet;0,41136;79081;161;102;263;0,13269;0;0;
14;Sogn og Fjordane;;;;;PS;Partiet Sentrum;0,10792;79081;44;25;69;-0,1192;0;0;
15;Møre og Romsdal;;;;;A;Arbeiderpartiet;23,59048;196528;23384;13608;36992;3,42473;2;0;
15;Møre og Romsdal;;;;;SV;SV - Sosialistisk Venstreparti;3,80399;196528;3967;1998;5965;-2,49006;0;0;
15;Møre og Romsdal;;;;;RØDT;Rødt;3,45516;196528;3464;1954;5418;0,13126;0;0;
15;Møre og Romsdal;;;;;SP;Senterpartiet;7,32611;196528;5558;5930;11488;-10,15115;1;0;
15;Møre og Romsdal;;;;;KRF;Kristelig Folkeparti;6,75918;196528;6298;4301;10599;1,43272;1;1;
15;Møre og Romsdal;;;;;MDG;Miljøpartiet De Grønne;3,08082;196528;3080;1751;4831;0,58975;0;0;
15;Møre og Romsdal;;;;;V;Venstre;2,97113;196528;2767;1892;4659;0,03063;0;0;
15;Møre og Romsdal;;;;;H;Høyre;12,64022;196528;12306;7515;19821;-3,61408;1;0;
15;Møre og Romsdal;;;;;FRP;Fremskrittspartiet;32,34636;196528;33832;16890;50722;10,28181;3;0;
15;Møre og Romsdal;;;;;DEMN;Norgesdemokratene;0,70468;196528;610;495;1105;-0,47583;0;0;
15;Møre og Romsdal;;;;;DNI;Partiet DNI;0,20407;196528;208;112;320;0,20407;0;0;
15;Møre og Romsdal;;;;;FRED;Fred og Rettferdighet (FOR);0,23787;196528;217;156;373;0,23787;0;0;
15;Møre og Romsdal;;;;;GENP;Generasjonspartiet;0,67981;196528;648;418;1066;0,67981;0;0;
15;Møre og Romsdal;;;;;HELSE;Velferd og Innovasjonspartiet;0,14604;196528;123;106;229;-0,04263;0;0;
15;Møre og Romsdal;;;;;INP;Industri- og Næringspartiet;0,71616;196528;687;436;1123;-0,02234;0;0;
15;Møre og Romsdal;;;;;KRISTNE;Konservativt;0,61093;196528;597;361;958;0,0638;0;0;
15;Møre og Romsdal;;;;;PP;Pensjonistpartiet;0,63772;196528;651;349;1000;0,10541;0;0;
15;Møre og Romsdal;;;;;PS;Partiet Sentrum;0,08928;196528;88;52;140;-0,12971;0;0;
16;Sør-Trøndelag;;;;;A;Arbeiderpartiet;31,97692;258002;44855;21523;66378;2,15809;4;0;
16;Sør-Trøndelag;;;;;SV;SV - Sosialistisk Venstreparti;6,87202;258002;10700;3565;14265;-2,25408;1;0;
16;Sør-Trøndelag;;;;;RØDT;Rødt;5,98417;258002;8824;3598;12422;0,36827;1;1;
16;Sør-Trøndelag;;;;;SP;Senterpartiet;6,75688;258002;6944;7082;14026;-8,34426;1;0;
16;Sør-Trøndelag;;;;;KRF;Kristelig Folkeparti;2,49734;258002;3366;1818;5184;0,31815;0;0;
16;Sør-Trøndelag;;;;;MDG;Miljøpartiet De Grønne;5,75823;258002;8724;3229;11953;0,96205;0;0;
16;Sør-Trøndelag;;;;;V;Venstre;3,66218;258002;5107;2495;7602;-0,70292;0;0;
16;Sør-Trøndelag;;;;;H;Høyre;12,47368;258002;17775;8118;25893;-4,00194;1;0;
16;Sør-Trøndelag;;;;;FRP;Fremskrittspartiet;19,81058;258002;28194;12929;41123;11,19422;2;0;
16;Sør-Trøndelag;;;;;DEMN;Norgesdemokratene;0,72454;258002;836;668;1504;-0,16711;0;0;
16;Sør-Trøndelag;;;;;DNI;Partiet DNI;0,1768;258002;227;140;367;0,1768;0;0;
16;Sør-Trøndelag;;;;;FRED;Fred og Rettferdighet (FOR);0,22834;258002;334;140;474;0,22834;0;0;
16;Sør-Trøndelag;;;;;GENP;Generasjonspartiet;0,53666;258002;725;389;1114;0,53666;0;0;
16;Sør-Trøndelag;;;;;HELSE;Velferd og Innovasjonspartiet;0,16716;258002;238;109;347;-0,00361;0;0;
16;Sør-Trøndelag;;;;;INP;Industri- og Næringspartiet;0,60314;258002;720;532;1252;0,26262;0;0;
16;Sør-Trøndelag;;;;;KRISTNE;Konservativt;0,21967;258002;257;199;456;0,06184;0;0;
16;Sør-Trøndelag;;;;;PP;Pensjonistpartiet;1,44377;258002;2121;876;2997;-0,29037;0;0;
16;Sør-Trøndelag;;;;;PS;Partiet Sentrum;0,10791;258002;150;74;224;-0,12082;0;0;
17;Nord-Trøndelag;;;;;A;Arbeiderpartiet;36,30809;101927;17793;11028;28821;2,73686;2;0;
17;Nord-Trøndelag;;;;;SV;SV - Sosialistisk Venstreparti;4,19506;101927;2191;1139;3330;-1,53149;0;0;
17;Nord-Trøndelag;;;;;RØDT;Rødt;5,18399;101927;2610;1505;4115;1,22407;0;0;
17;Nord-Trøndelag;;;;;SP;Senterpartiet;14,83516;101927;5612;6164;11776;-13,98548;1;0;
17;Nord-Trøndelag;;;;;KRF;Kristelig Folkeparti;2,6216;101927;1276;805;2081;0,3696;0;0;
17;Nord-Trøndelag;;;;;MDG;Miljøpartiet De Grønne;2,37342;101927;1186;698;1884;0,51546;1;1;
17;Nord-Trøndelag;;;;;V;Venstre;1,8229;101927;846;601;1447;-0,2086;0;0;
17;Nord-Trøndelag;;;;;H;Høyre;9,01624;101927;4411;2746;7157;-1,57964;0;0;
17;Nord-Trøndelag;;;;;FRP;Fremskrittspartiet;19,4724;101927;9725;5732;15457;11,45341;1;0;
17;Nord-Trøndelag;;;;;DEMN;Norgesdemokratene;0,70926;101927;285;278;563;-0,27453;0;0;
17;Nord-Trøndelag;;;;;DNI;Partiet DNI;0,28345;101927;147;78;225;0,28345;0;0;
17;Nord-Trøndelag;;;;;FRED;Fred og Rettferdighet (FOR);0,21416;101927;100;70;170;0,21416;0;0;
17;Nord-Trøndelag;;;;;GENP;Generasjonspartiet;0,54045;101927;246;183;429;0,54045;0;0;
17;Nord-Trøndelag;;;;;HELSE;Velferd og Innovasjonspartiet;0,13858;101927;58;52;110;-0,05061;0;0;
17;Nord-Trøndelag;;;;;INP;Industri- og Næringspartiet;0,85161;101927;367;309;676;0,38321;0;0;
17;Nord-Trøndelag;;;;;KRISTNE;Konservativt;0,33258;101927;183;81;264;0,09903;0;0;
17;Nord-Trøndelag;;;;;PP;Pensjonistpartiet;1,02672;101927;529;286;815;0,18777;0;0;
17;Nord-Trøndelag;;;;;PS;Partiet Sentrum;0,07433;101927;36;23;59;-0,09399;0;0;
18;Nordland;;;;;A;Arbeiderpartiet;30,58604;181833;25809;16241;42050;1,82081;3;0;
18;Nordland;;;;;SV;SV - Sosialistisk Venstreparti;5,67133;181833;4872;2925;7797;-1,49558;0;0;
18;Nordland;;;;;RØDT;Rødt;6,61837;181833;5438;3661;9099;1,19998;1;1;
18;Nordland;;;;;SP;Senterpartiet;8,64629;181833;5925;5962;11887;-12,56017;1;0;
18;Nordland;;;;;KRF;Kristelig Folkeparti;2,37924;181833;1795;1476;3271;0,41467;0;0;
18;Nordland;;;;;MDG;Miljøpartiet De Grønne;2,88185;181833;2464;1498;3962;0,54404;0;0;
18;Nordland;;;;;V;Venstre;1,969;181833;1571;1136;2707;-0,52079;0;0;
18;Nordland;;;;;H;Høyre;11,18045;181833;9434;5937;15371;-4,11591;1;0;
18;Nordland;;;;;FRP;Fremskrittspartiet;25,58099;181833;21602;13567;35169;13,40916;3;0;
18;Nordland;;;;;DEMN;Norgesdemokratene;0,79575;181833;543;551;1094;-0,55047;0;0;
18;Nordland;;;;;DNI;Partiet DNI;0,28877;181833;225;172;397;0,28877;0;0;
18;Nordland;;;;;FRED;Fred og Rettferdighet (FOR);0,26404;181833;224;139;363;0,26404;0;0;
18;Nordland;;;;;GENP;Generasjonspartiet;0,76883;181833;585;472;1057;0,76883;0;0;
18;Nordland;;;;;HELSE;Velferd og Innovasjonspartiet;0,18403;181833;144;109;253;-0,06853;0;0;
18;Nordland;;;;;INP;Industri- og Næringspartiet;1,0176;181833;779;620;1399;0,58773;0;0;
18;Nordland;;;;;KRISTNE;Konservativt;0,33095;181833;268;187;455;0,09702;0;0;
18;Nordland;;;;;PP;Pensjonistpartiet;0,7521;181833;600;434;1034;0,31553;0;0;
18;Nordland;;;;;PS;Partiet Sentrum;0,08438;181833;72;44;116;-0,07282;0;0;
31;Østfold;;;;;A;Arbeiderpartiet;29,79874;234843;32071;20890;52961;;4;0;
31;Østfold;;;;;SV;SV - Sosialistisk Venstreparti;4,342;234843;4892;2825;7717;;0;0;
31;Østfold;;;;;RØDT;Rødt;5,19668;234843;5714;3522;9236;;1;1;
31;Østfold;;;;;SP;Senterpartiet;4,82195;234843;3997;4573;8570;;0;0;
31;Østfold;;;;;KRF;Kristelig Folkeparti;3,85868;234843;3868;2990;6858;;0;0;
31;Østfold;;;;;MDG;Miljøpartiet De Grønne;3,44119;234843;3792;2324;6116;;0;0;
31;Østfold;;;;;V;Venstre;2,4965;234843;2543;1894;4437;;0;0;
31;Østfold;;;;;H;Høyre;12,54213;234843;13546;8745;22291;;1;0;
31;Østfold;;;;;FRP;Fremskrittspartiet;28,72632;234843;31894;19161;51055;;3;0;
31;Østfold;;;;;DEMN;Norgesdemokratene;0,9717;234843;850;877;1727;;0;0;
31;Østfold;;;;;DNI;Partiet DNI;0,13279;234843;140;96;236;;0;0;
31;Østfold;;;;;FRED;Fred og Rettferdighet (FOR);0,29539;234843;289;236;525;;0;0;
31;Østfold;;;;;GENP;Generasjonspartiet;0,67406;234843;693;505;1198;;0;0;
31;Østfold;;;;;HELSE;Velferd og Innovasjonspartiet;0,13279;234843;140;96;236;;0;0;
31;Østfold;;;;;INP;Industri- og Næringspartiet;0,62117;234843;556;548;1104;;0;0;
31;Østfold;;;;;KRISTNE;Konservativt;0,45069;234843;471;330;801;;0;0;
31;Østfold;;;;;PP;Pensjonistpartiet;1,36331;234843;1556;867;2423;;0;0;
31;Østfold;;;;;PS;Partiet Sentrum;0,13391;234843;113;125;238;;0;0;
32;Akershus;;;;;A;Arbeiderpartiet;27,31523;514317;72242;41285;113527;;6;0;
32;Akershus;;;;;SV;SV - Sosialistisk Venstreparti;5,18168;514317;13871;7665;21536;;1;0;
32;Akershus;;;;;RØDT;Rødt;4,24982;514317;11427;6236;17663;;1;0;
32;Akershus;;;;;SP;Senterpartiet;2,93443;514317;6379;5817;12196;;0;0;
32;Akershus;;;;;KRF;Kristelig Folkeparti;2,59565;514317;6630;4158;10788;;1;1;
32;Akershus;;;;;MDG;Miljøpartiet De Grønne;5,42036;514317;14765;7763;22528;;1;0;
32;Akershus;;;;;V;Venstre;5,42397;514317;14150;8393;22543;;1;0;
32;Akershus;;;;;H;Høyre;19,4366;514317;54116;26666;80782;;4;0;
32;Akershus;;;;;FRP;Fremskrittspartiet;23,56972;514317;65824;32136;97960;;5;0;
32;Akershus;;;;;DEMN;Norgesdemokratene;0,73216;514317;1650;1393;3043;;0;0;
32;Akershus;;;;;DNI;Partiet DNI;0,10539;514317;287;151;438;;0;0;
32;Akershus;;;;;FRED;Fred og Rettferdighet (FOR);0,31592;514317;769;544;1313;;0;0;
32;Akershus;;;;;GENP;Generasjonspartiet;0,63785;514317;1584;1067;2651;;0;0;
32;Akershus;;;;;HELSE;Velferd og Innovasjonspartiet;0,16337;514317;399;280;679;;0;0;
32;Akershus;;;;;INP;Industri- og Næringspartiet;0,41793;514317;1002;735;1737;;0;0;
32;Akershus;;;;;KRISTNE;Konservativt;0,31688;514317;834;483;1317;;0;0;
32;Akershus;;;;;PP;Pensjonistpartiet;0,90708;514317;2580;1190;3770;;0;0;
32;Akershus;;;;;PS;Partiet Sentrum;0,27597;514317;581;566;1147;;0;0;
33;Buskerud;;;;;A;Arbeiderpartiet;29,38756;194796;27688;16659;44347;;3;0;
33;Buskerud;;;;;SV;SV - Sosialistisk Venstreparti;4,35509;194796;4225;2347;6572;;1;1;
33;Buskerud;;;;;RØDT;Rødt;4,04893;194796;3873;2237;6110;;0;0;
33;Buskerud;;;;;SP;Senterpartiet;5,53531;194796;4252;4101;8353;;0;0;
33;Buskerud;;;;;KRF;Kristelig Folkeparti;2,83624;194796;2617;1663;4280;;0;0;
33;Buskerud;;;;;MDG;Miljøpartiet De Grønne;3,56717;194796;3411;1972;5383;;0;0;
33;Buskerud;;;;;V;Venstre;3,07745;194796;2787;1857;4644;;0;0;
33;Buskerud;;;;;H;Høyre;15,31371;194796;14531;8578;23109;;1;0;
33;Buskerud;;;;;FRP;Fremskrittspartiet;27,60563;194796;27604;14054;41658;;3;0;
33;Buskerud;;;;;DEMN;Norgesdemokratene;0,90256;194796;729;633;1362;;0;0;
33;Buskerud;;;;;DNI;Partiet DNI;0,17495;194796;169;95;264;;0;0;
33;Buskerud;;;;;FRED;Fred og Rettferdighet (FOR);0,26905;194796;247;159;406;;0;0;
33;Buskerud;;;;;GENP;Generasjonspartiet;0,68587;194796;606;429;1035;;0;0;
33;Buskerud;;;;;HELSE;Velferd og Innovasjonspartiet;0,16898;194796;140;115;255;;0;0;
33;Buskerud;;;;;INP;Industri- og Næringspartiet;0,57653;194796;506;364;870;;0;0;
33;Buskerud;;;;;KRISTNE;Konservativt;0,40754;194796;392;223;615;;0;0;
33;Buskerud;;;;;PP;Pensjonistpartiet;0,73358;194796;733;374;1107;;0;0;
33;Buskerud;;;;;PS;Partiet Sentrum;0,35387;194796;322;212;534;;0;0;
39;Vestfold;;;;;A;Arbeiderpartiet;27,48668;191610;24189;17400;41589;;2;0;
39;Vestfold;;;;;SV;SV - Sosialistisk Venstreparti;4,09039;191610;3921;2268;6189;;0;0;
39;Vestfold;;;;;RØDT;Rødt;4,91124;191610;4484;2947;7431;;0;0;
39;Vestfold;;;;;SP;Senterpartiet;3,29267;191610;2344;2638;4982;;0;0;
39;Vestfold;;;;;KRF;Kristelig Folkeparti;4,12343;191610;3428;2811;6239;;0;0;
39;Vestfold;;;;;MDG;Miljøpartiet De Grønne;4,288;191610;3882;2606;6488;;1;1;
39;Vestfold;;;;;V;Venstre;3,49689;191610;2998;2293;5291;;0;0;
39;Vestfold;;;;;H;Høyre;16,50166;191610;14639;10329;24968;;1;0;
39;Vestfold;;;;;FRP;Fremskrittspartiet;27,58053;191610;25310;16421;41731;;3;0;
39;Vestfold;;;;;DEMN;Norgesdemokratene;0,8116;191610;623;605;1228;;0;0;
39;Vestfold;;;;;DNI;Partiet DNI;0,18968;191610;180;107;287;;0;0;
39;Vestfold;;;;;FRED;Fred og Rettferdighet (FOR);0,2908;191610;271;169;440;;0;0;
39;Vestfold;;;;;GENP;Generasjonspartiet;0,70784;191610;620;451;1071;;0;0;
39;Vestfold;;;;;HELSE;Velferd og Innovasjonspartiet;0,17118;191610;143;116;259;;0;0;
39;Vestfold;;;;;INP;Industri- og Næringspartiet;0,64042;191610;511;458;969;;0;0;
39;Vestfold;;;;;KRISTNE;Konservativt;0,49833;191610;451;303;754;;0;0;
39;Vestfold;;;;;PP;Pensjonistpartiet;0,78054;191610;702;479;1181;;0;0;
39;Vestfold;;;;;PS;Partiet Sentrum;0,13813;191610;124;85;209;;0;0;
40;Telemark;;;;;A;Arbeiderpartiet;31,33763;133934;17016;15347;32363;;2;0;
40;Telemark;;;;;SV;SV - Sosialistisk Venstreparti;4,1076;133934;2536;1706;4242;;0;0;
40;Telemark;;;;;RØDT;Rødt;5,85251;133934;3327;2717;6044;;0;0;
40;Telemark;;;;;SP;Senterpartiet;6,17592;133934;2511;3867;6378;;0;0;
40;Telemark;;;;;KRF;Kristelig Folkeparti;5,01588;133934;2598;2582;5180;;1;1;
40;Telemark;;;;;MDG;Miljøpartiet De Grønne;3,33004;133934;1946;1493;3439;;0;0;
40;Telemark;;;;;V;Venstre;2,06639;133934;1175;959;2134;;0;0;
40;Telemark;;;;;H;Høyre;11,04462;133934;6079;5327;11406;;1;0;
40;Telemark;;;;;FRP;Fremskrittspartiet;26,06612;133934;14460;12459;26919;;2;0;
40;Telemark;;;;;DEMN;Norgesdemokratene;1,07677;133934;497;615;1112;;0;0;
40;Telemark;;;;;DNI;Partiet DNI;0,43284;133934;233;214;447;;0;0;
40;Telemark;;;;;FRED;Fred og Rettferdighet (FOR);0,28081;133934;161;129;290;;0;0;
40;Telemark;;;;;GENP;Generasjonspartiet;0,7427;133934;385;382;767;;0;0;
40;Telemark;;;;;HELSE;Velferd og Innovasjonspartiet;0,19366;133934;96;104;200;;0;0;
40;Telemark;;;;;INP;Industri- og Næringspartiet;0,83469;133934;411;451;862;;0;0;
40;Telemark;;;;;KRISTNE;Konservativt;0,69428;133934;397;320;717;;0;0;
40;Telemark;;;;;PP;Pensjonistpartiet;0,61004;133934;320;310;630;;0;0;
40;Telemark;;;;;PS;Partiet Sentrum;0,1375;133934;67;75;142;;0;0;
55;Troms Romsa;;;;;A;Arbeiderpartiet;29,53264;126355;16368;12447;28815;;2;0;
55;Troms Romsa;;;;;SV;SV - Sosialistisk Venstreparti;7,20303;126355;4350;2678;7028;;0;0;
55;Troms Romsa;;;;;RØDT;Rødt;7,44184;126355;4190;3071;7261;;1;1;
55;Troms Romsa;;;;;SP;Senterpartiet;6,28984;126355;2715;3422;6137;;0;0;
55;Troms Romsa;;;;;KRF;Kristelig Folkeparti;2,91791;126355;1418;1429;2847;;0;0;
55;Troms Romsa;;;;;MDG;Miljøpartiet De Grønne;3,61074;126355;2148;1375;3523;;0;0;
55;Troms Romsa;;;;;V;Venstre;1,99857;126355;1118;832;1950;;0;0;
55;Troms Romsa;;;;;H;Høyre;10,87219;126355;6046;4562;10608;;1;0;
55;Troms Romsa;;;;;FRP;Fremskrittspartiet;25,74972;126355;14737;10387;25124;;2;0;
55;Troms Romsa;;;;;DEMN;Norgesdemokratene;0,75945;126355;357;384;741;;0;0;
55;Troms Romsa;;;;;DNI;Partiet DNI;0,2675;126355;144;117;261;;0;0;
55;Troms Romsa;;;;;FRED;Fred og Rettferdighet (FOR);0,31465;126355;179;128;307;;0;0;
55;Troms Romsa;;;;;GENP;Generasjonspartiet;0,74716;126355;360;369;729;;0;0;
55;Troms Romsa;;;;;HELSE;Velferd og Innovasjonspartiet;0,14656;126355;79;64;143;;0;0;
55;Troms Romsa;;;;;INP;Industri- og Næringspartiet;1,02388;126355;497;502;999;;0;0;
55;Troms Romsa;;;;;KRISTNE;Konservativt;0,39254;126355;215;168;383;;0;0;
55;Troms Romsa;;;;;PP;Pensjonistpartiet;0,62929;126355;333;281;614;;0;0;
55;Troms Romsa;;;;;PS;Partiet Sentrum;0,10249;126355;50;50;100;;0;0;
56;Finnmark Finnmárku;;;;;A;Arbeiderpartiet;28,11867;54604;7103;4138;11241;;2;0;
56;Finnmark Finnmárku;;;;;SV;SV - Sosialistisk Venstreparti;5,20299;54604;1365;715;2080;;0;0;
56;Finnmark Finnmárku;;;;;RØDT;Rødt;9,83065;54604;2545;1385;3930;;0;0;
56;Finnmark Finnmárku;;;;;SP;Senterpartiet;5,47315;54604;1157;1031;2188;;0;0;
56;Finnmark Finnmárku;;;;;KRF;Kristelig Folkeparti;2,0787;54604;496;335;831;;0;0;
56;Finnmark Finnmárku;;;;;MDG;Miljøpartiet De Grønne;2,15374;54604;593;268;861;;1;1;
56;Finnmark Finnmárku;;;;;V;Venstre;1,2257;54604;321;169;490;;0;0;
56;Finnmark Finnmárku;;;;;H;Høyre;5,93841;54604;1536;838;2374;;0;0;
56;Finnmark Finnmárku;;;;;FRP;Fremskrittspartiet;24,47157;54604;6480;3303;9783;;1;0;
56;Finnmark Finnmárku;;;;;DEMN;Norgesdemokratene;0,85799;54604;178;165;343;;0;0;
56;Finnmark Finnmárku;;;;;DNI;Partiet DNI;0,38022;54604;106;46;152;;0;0;
56;Finnmark Finnmárku;;;;;FRED;Fred og Rettferdighet (FOR);0,38272;54604;82;71;153;;0;0;
56;Finnmark Finnmárku;;;;;GENP;Generasjonspartiet;0,97556;54604;245;145;390;;0;0;
56;Finnmark Finnmárku;;;;;HELSE;Velferd og Innovasjonspartiet;0,15509;54604;38;24;62;;0;0;
56;Finnmark Finnmárku;;;;;INP;Industri- og Næringspartiet;1,00308;54604;245;156;401;;0;0;
56;Finnmark Finnmárku;;;;;KRISTNE;Konservativt;1,2157;54604;293;193;486;;0;0;
56;Finnmark Finnmárku;;;;;PS;Partiet Sentrum;0,09505;54604;23;15;38;;0;0;
56;Finnmark Finnmárku;;;;;PASF;Pasientfokus;10,441;54604;2958;1216;4174;;0;0;`;

const translate = {
	"Finnmark Finnmárku": "Finnmark",
	"Troms Romsa": "Troms",
	"A": "AP",
	"PASF": "PF",
	"KRISTNE": "KON",
	"RØDT": "R",
	"FRED": "FOR",
	"GENP": "GP",
	"HELSE": "VIP",
	"DEMN": "ND",
	"ENSOM": "EN",
};

for (const line of str.split('\n')) {
	const cols = line.split(';');
	let district = cols[1];
	let party = cols[6];
	const votes = parseInt(cols[12]);
	if (district in translate) {
		district = translate[district];
	}
	if (party in translate) {
		party = translate[party];
	}
	if (!(district in election2025.votes)) {
		election2025.votes[district] = {};
	}
	election2025.votes[district][party] = votes;
}
