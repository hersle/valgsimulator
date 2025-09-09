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

var str = `03;Oslo;;;;;A;Arbeiderpartiet;25,66014;518619;70555;37691;108246;2,69753;;5;0;
03;Oslo;;;;;SV;SV - Sosialistisk Venstreparti;10,71009;518619;30164;15016;45180;-2,56352;;2;0;
03;Oslo;;;;;RØDT;Rødt;7,15263;518619;20847;9326;30173;-1,10735;;2;1;
03;Oslo;;;;;SP;Senterpartiet;0,75051;518619;1972;1194;3166;-2,39862;;0;0;
03;Oslo;;;;;KRF;Kristelig Folkeparti;2,11452;518619;6040;2880;8920;0,29085;;0;0;
03;Oslo;;;;;MDG;Miljøpartiet De Grønne;10,27012;518619;28957;14367;43324;1,78725;;2;0;
03;Oslo;;;;;V;Venstre;7,25906;518619;19487;11135;30622;-2,78981;;2;0;
03;Oslo;;;;;H;Høyre;18,49613;518619;53532;24493;78025;-5,04187;;4;0;
03;Oslo;;;;;FRP;Fremskrittspartiet;14,32517;518619;46158;14272;60430;8,32251;;3;0;
03;Oslo;;;;;DEMN;Norgesdemokratene;0,43286;518619;1056;770;1826;-0,24818;;0;0;
03;Oslo;;;;;DNI;Partiet DNI;0,0486;518619;141;64;205;0,0486;;0;0;
03;Oslo;;;;;ENSOM;Ensomhetspartiet;0,16878;518619;425;287;712;0,16878;;0;0;
03;Oslo;;;;;FRED;Fred og Rettferdighet (FOR);0,48928;518619;1350;714;2064;0,48928;;0;0;
03;Oslo;;;;;GENP;Generasjonspartiet;0,40773;518619;1152;568;1720;0,40773;;0;0;
03;Oslo;;;;;HELSE;Velferd og Innovasjonspartiet;0,11497;518619;299;186;485;-0,04126;;0;0;
03;Oslo;;;;;INP;Industri- og Næringspartiet;0,19035;518619;483;320;803;0,1287;;0;0;
03;Oslo;;;;;KRISTNE;Konservativt;0,16689;518619;465;239;704;0,04201;;0;0;
03;Oslo;;;;;PP;Pensjonistpartiet;0,37573;518619;1103;482;1585;0,03007;;0;0;
03;Oslo;;;;;PS;Partiet Sentrum;0,30698;518619;730;565;1295;-0,05316;;0;0;
03;Oslo;;;;;RUS;Redd Ullevål sykehus;0,55945;518619;1467;893;2360;0,55945;;0;0;
04;Hedmark;;;;;A;Arbeiderpartiet;34,96814;155149;25277;16540;41817;1,84413;;3;0;
04;Hedmark;;;;;SV;SV - Sosialistisk Venstreparti;4,48046;155149;3343;2015;5358;-2,38303;;0;0;
04;Hedmark;;;;;RØDT;Rødt;4,77732;155149;3472;2241;5713;1,41072;;0;0;
04;Hedmark;;;;;SP;Senterpartiet;13,62785;155149;7951;8346;16297;-14,41499;;1;0;
04;Hedmark;;;;;KRF;Kristelig Folkeparti;2,18002;155149;1406;1201;2607;0,55057;;0;0;
04;Hedmark;;;;;MDG;Miljøpartiet De Grønne;2,84983;155149;2143;1265;3408;0,78088;;0;0;
04;Hedmark;;;;;V;Venstre;1,91996;155149;1358;938;2296;-0,37482;;0;0;
04;Hedmark;;;;;H;Høyre;8,9952;155149;6416;4341;10757;-1,59361;;1;1;
04;Hedmark;;;;;FRP;Fremskrittspartiet;21,07688;155149;14963;10242;25205;12,65517;;2;0;
04;Hedmark;;;;;DEMN;Norgesdemokratene;1,0712;155149;596;685;1281;-0,10572;;0;0;
04;Hedmark;;;;;DNI;Partiet DNI;0,14216;155149;115;55;170;0,14216;;0;0;
04;Hedmark;;;;;FRED;Fred og Rettferdighet (FOR);0,2216;155149;144;121;265;0,2216;;0;0;
04;Hedmark;;;;;GENP;Generasjonspartiet;0,60793;155149;396;331;727;0,60793;;0;0;
04;Hedmark;;;;;HELSE;Velferd og Innovasjonspartiet;0,15721;155149;96;92;188;-0,09728;;0;0;
04;Hedmark;;;;;INP;Industri- og Næringspartiet;0,61797;155149;393;346;739;0,46857;;0;0;
04;Hedmark;;;;;KRISTNE;Konservativt;0,27595;155149;195;135;330;0,08573;;0;0;
04;Hedmark;;;;;PP;Pensjonistpartiet;1,91578;155149;1499;792;2291;0,62855;;0;0;
04;Hedmark;;;;;PS;Partiet Sentrum;0,11456;155149;71;66;137;-0,06784;;0;0;
05;Oppland;;;;;A;Arbeiderpartiet;33,21561;133306;20038;14007;34045;-1,80532;;2;0;
05;Oppland;;;;;SV;SV - Sosialistisk Venstreparti;4,52794;133306;3059;1582;4641;-1,05482;;1;1;
05;Oppland;;;;;RØDT;Rødt;4,4733;133306;2811;1774;4585;0,89134;;0;0;
05;Oppland;;;;;SP;Senterpartiet;15,77217;133306;7974;8192;16166;-10,19453;;1;0;
05;Oppland;;;;;KRF;Kristelig Folkeparti;2,21567;133306;1256;1015;2271;0,65781;;0;0;
05;Oppland;;;;;MDG;Miljøpartiet De Grønne;2,88204;133306;1870;1084;2954;0,56197;;0;0;
05;Oppland;;;;;V;Venstre;2,16104;133306;1311;904;2215;-0,24113;;0;0;
05;Oppland;;;;;H;Høyre;9,2149;133306;5504;3941;9445;-3,27534;;0;0;
05;Oppland;;;;;FRP;Fremskrittspartiet;21,37624;133306;12796;9114;21910;12,80243;;2;0;
05;Oppland;;;;;DEMN;Norgesdemokratene;0,8449;133306;414;452;866;-0,09772;;0;0;
05;Oppland;;;;;DNI;Partiet DNI;0,14927;133306;87;66;153;0,14927;;0;0;
05;Oppland;;;;;FRED;Fred og Rettferdighet (FOR);0,24001;133306;145;101;246;0,24001;;0;0;
05;Oppland;;;;;GENP;Generasjonspartiet;0,68783;133306;406;299;705;0,68783;;0;0;
05;Oppland;;;;;HELSE;Velferd og Innovasjonspartiet;0,14927;133306;80;73;153;-0,03824;;0;0;
05;Oppland;;;;;INP;Industri- og Næringspartiet;0,64197;133306;321;337;658;0,51223;;0;0;
05;Oppland;;;;;KRISTNE;Konservativt;0,3083;133306;193;123;316;0,09342;;0;0;
05;Oppland;;;;;PP;Pensjonistpartiet;0,95515;133306;603;376;979;0,41998;;0;0;
05;Oppland;;;;;PS;Partiet Sentrum;0,1844;133306;105;84;189;-0,0021;;0;0;
09;Aust-Agder;;;;;A;Arbeiderpartiet;26,88486;91325;11252;8093;19345;2,35839;;1;0;
09;Aust-Agder;;;;;SV;SV - Sosialistisk Venstreparti;3,908;91325;1842;970;2812;-1,62705;;0;0;
09;Aust-Agder;;;;;RØDT;Rødt;4,59037;91325;2026;1277;3303;0,85983;;0;0;
09;Aust-Agder;;;;;SP;Senterpartiet;5,08234;91325;1761;1896;3657;-8,44693;;0;0;
09;Aust-Agder;;;;;KRF;Kristelig Folkeparti;8,09395;91325;3396;2428;5824;-0,63849;;1;1;
09;Aust-Agder;;;;;MDG;Miljøpartiet De Grønne;3,37989;91325;1495;937;2432;0,37845;;0;0;
09;Aust-Agder;;;;;V;Venstre;2,57383;91325;1095;757;1852;-0,67064;;0;0;
09;Aust-Agder;;;;;H;Høyre;13,03037;91325;5678;3698;9376;-7,17925;;1;0;
09;Aust-Agder;;;;;FRP;Fremskrittspartiet;27,79515;91325;11959;8041;20000;14,53776;;1;0;
09;Aust-Agder;;;;;DEMN;Norgesdemokratene;0,65041;91325;223;245;468;-0,74247;;0;0;
09;Aust-Agder;;;;;DNI;Partiet DNI;0,19179;91325;84;54;138;0,19179;;0;0;
09;Aust-Agder;;;;;FRED;Fred og Rettferdighet (FOR);0,20985;91325;76;75;151;0,20985;;0;0;
09;Aust-Agder;;;;;GENP;Generasjonspartiet;0,66986;91325;258;224;482;0,66986;;0;0;
09;Aust-Agder;;;;;HELSE;Velferd og Innovasjonspartiet;0,1223;91325;52;36;88;-0,1663;;0;0;
09;Aust-Agder;;;;;INP;Industri- og Næringspartiet;0,71711;91325;298;218;516;0,29333;;0;0;
09;Aust-Agder;;;;;KRISTNE;Konservativt;1,2216;91325;542;337;879;0,35124;;0;0;
09;Aust-Agder;;;;;PP;Pensjonistpartiet;0,74908;91325;288;251;539;0,17188;;0;0;
09;Aust-Agder;;;;;PS;Partiet Sentrum;0,12925;91325;58;35;93;-0,22011;;0;0;
10;Vest-Agder;;;;;A;Arbeiderpartiet;22,82611;144902;16449;9922;26371;2,05063;;1;0;
10;Vest-Agder;;;;;SV;SV - Sosialistisk Venstreparti;3,88038;144902;3054;1429;4483;-1,45971;;1;1;
10;Vest-Agder;;;;;RØDT;Rødt;4,01368;144902;2930;1707;4637;0,82294;;0;0;
10;Vest-Agder;;;;;SP;Senterpartiet;4,03532;144902;2293;2369;4662;-6,29203;;0;0;
10;Vest-Agder;;;;;KRF;Kristelig Folkeparti;12,98883;144902;9053;5953;15006;-0,89445;;1;0;
10;Vest-Agder;;;;;MDG;Miljøpartiet De Grønne;3,49606;144902;2525;1514;4039;0,3291;;0;0;
10;Vest-Agder;;;;;V;Venstre;3,09963;144902;2146;1435;3581;-0,54666;;0;0;
10;Vest-Agder;;;;;H;Høyre;13,51164;144902;9807;5803;15610;-7,75267;;1;0;
10;Vest-Agder;;;;;FRP;Fremskrittspartiet;27,65169;144902;20934;11012;31946;14,50736;;2;0;
10;Vest-Agder;;;;;DEMN;Norgesdemokratene;0,59552;144902;384;304;688;-1,98085;;0;0;
10;Vest-Agder;;;;;DNI;Partiet DNI;0,12551;144902;94;51;145;0,12551;;0;0;
10;Vest-Agder;;;;;FRED;Fred og Rettferdighet (FOR);0,21639;144902;150;100;250;0,21639;;0;0;
10;Vest-Agder;;;;;GENP;Generasjonspartiet;0,56609;144902;392;262;654;0,56609;;0;0;
10;Vest-Agder;;;;;HELSE;Velferd og Innovasjonspartiet;0,12637;144902;83;63;146;-0,03245;;0;0;
10;Vest-Agder;;;;;INP;Industri- og Næringspartiet;0,51156;144902;340;251;591;0,16918;;0;0;
10;Vest-Agder;;;;;KRISTNE;Konservativt;1,31914;144902;922;602;1524;0,39758;;0;0;
10;Vest-Agder;;;;;NKP;Norges Kommunistiske Parti;0,04328;144902;26;24;50;0,04328;;0;0;
10;Vest-Agder;;;;;PP;Pensjonistpartiet;0,75911;144902;576;301;877;0,2912;;0;0;
10;Vest-Agder;;;;;PS;Partiet Sentrum;0,23371;144902;170;100;270;-0,22089;;0;0;
11;Rogaland;;;;;A;Arbeiderpartiet;23,66428;350288;42335;24403;66738;1,27101;;4;0;
11;Rogaland;;;;;SV;SV - Sosialistisk Venstreparti;3,68697;350288;7003;3395;10398;-1,43572;;1;1;
11;Rogaland;;;;;RØDT;Rødt;5,50174;350288;10041;5475;15516;1,78556;;1;0;
11;Rogaland;;;;;SP;Senterpartiet;4,99362;350288;6818;7265;14083;-5,41903;;1;0;
11;Rogaland;;;;;KRF;Kristelig Folkeparti;8,3643;350288;14043;9546;23589;0,30653;;1;0;
11;Rogaland;;;;;MDG;Miljøpartiet De Grønne;2,7498;350288;5223;2532;7755;0,3733;;0;0;
11;Rogaland;;;;;V;Venstre;2,64307;350288;4589;2865;7454;-0,87455;;0;0;
11;Rogaland;;;;;H;Høyre;15,34678;350288;27851;15430;43281;-8,60056;;2;0;
11;Rogaland;;;;;FRP;Fremskrittspartiet;28,72846;350288;54770;26250;81020;11,97011;;4;0;
11;Rogaland;;;;;DEMN;Norgesdemokratene;0,69463;350288;1075;884;1959;-0,32288;;0;0;
11;Rogaland;;;;;DNI;Partiet DNI;0,16985;350288;314;165;479;0,16985;;0;0;
11;Rogaland;;;;;FRED;Fred og Rettferdighet (FOR);0,25211;350288;405;306;711;0,25211;;0;0;
11;Rogaland;;;;;GENP;Generasjonspartiet;0,59287;350288;1045;627;1672;0,59287;;0;0;
11;Rogaland;;;;;HELSE;Velferd og Innovasjonspartiet;0,14857;350288;230;189;419;-0,04458;;0;0;
11;Rogaland;;;;;INP;Industri- og Næringspartiet;0,7425;350288;1272;822;2094;0,10666;;0;0;
11;Rogaland;;;;;KRISTNE;Konservativt;0,87512;350288;1529;939;2468;0,3343;;0;0;
11;Rogaland;;;;;PP;Pensjonistpartiet;0,71094;350288;1320;685;2005;0,19833;;0;0;
11;Rogaland;;;;;PS;Partiet Sentrum;0,13439;350288;245;134;379;-0,21753;;0;0;
12;Hordaland;;;;;A;Arbeiderpartiet;26,73639;397456;58033;28814;86847;4,01765;;4;0;
12;Hordaland;;;;;SV;SV - Sosialistisk Venstreparti;5,81048;397456;13292;5582;18874;-3,05393;;1;0;
12;Hordaland;;;;;RØDT;Rødt;4,97065;397456;10985;5161;16146;0,30794;;1;0;
12;Hordaland;;;;;SP;Senterpartiet;4,22779;397456;7506;6227;13733;-5,65154;;1;1;
12;Hordaland;;;;;KRF;Kristelig Folkeparti;4,9648;397456;10455;5672;16127;0,11295;;1;0;
12;Hordaland;;;;;MDG;Miljøpartiet De Grønne;4,86444;397456;10699;5102;15801;0,92997;;1;0;
12;Hordaland;;;;;V;Venstre;3,42521;397456;7015;4111;11126;-0,91226;;0;0;
12;Hordaland;;;;;H;Høyre;16,87237;397456;36550;18256;54806;-7,60502;;3;0;
12;Hordaland;;;;;FRP;Fremskrittspartiet;23,82037;397456;53685;23690;77375;11,18263;;4;0;
12;Hordaland;;;;;DEMN;Norgesdemokratene;0,6034;397456;1158;802;1960;-0,3443;;0;0;
12;Hordaland;;;;;DNI;Partiet DNI;0,15054;397456;333;156;489;0,15054;;0;0;
12;Hordaland;;;;;FRED;Fred og Rettferdighet (FOR);0,24659;397456;517;284;801;0,24659;;0;0;
12;Hordaland;;;;;GENP;Generasjonspartiet;1,10459;397456;2264;1324;3588;1,10459;;0;0;
12;Hordaland;;;;;HELSE;Velferd og Innovasjonspartiet;0,17917;397456;341;241;582;0,01771;;0;0;
12;Hordaland;;;;;INP;Industri- og Næringspartiet;0,52982;397456;1022;699;1721;-0,04288;;0;0;
12;Hordaland;;;;;KRISTNE;Konservativt;0,5563;397456;1198;609;1807;0,10024;;0;0;
12;Hordaland;;;;;PP;Pensjonistpartiet;0,83798;397456;1904;818;2722;0,0847;;0;0;
12;Hordaland;;;;;PS;Partiet Sentrum;0,09913;397456;216;106;322;-0,09562;;0;0;
14;Sogn og Fjordane;;;;;A;Arbeiderpartiet;30,93849;79081;12080;7703;19783;4,47994;;1;0;
14;Sogn og Fjordane;;;;;SV;SV - Sosialistisk Venstreparti;4,26474;79081;1743;984;2727;-1,65485;;0;0;
14;Sogn og Fjordane;;;;;RØDT;Rødt;3,97542;79081;1598;944;2542;-0,0338;;0;0;
14;Sogn og Fjordane;;;;;SP;Senterpartiet;16,02365;79081;5447;4799;10246;-12,38072;;1;0;
14;Sogn og Fjordane;;;;;KRF;Kristelig Folkeparti;4,27725;79081;1636;1099;2735;0,42911;;0;0;
14;Sogn og Fjordane;;;;;MDG;Miljøpartiet De Grønne;3,28105;79081;1380;718;2098;0,79724;;1;1;
14;Sogn og Fjordane;;;;;V;Venstre;2,91979;79081;1070;797;1867;-0,51921;;0;0;
14;Sogn og Fjordane;;;;;H;Høyre;10,17781;79081;3916;2592;6508;-3,56047;;0;0;
14;Sogn og Fjordane;;;;;FRP;Fremskrittspartiet;20,8248;79081;8611;4705;13316;11,52903;;1;0;
14;Sogn og Fjordane;;;;;DEMN;Norgesdemokratene;0,60992;79081;197;193;390;-0,11976;;0;0;
14;Sogn og Fjordane;;;;;DNI;Partiet DNI;0,17203;79081;67;43;110;0,17203;;0;0;
14;Sogn og Fjordane;;;;;FRED;Fred og Rettferdighet (FOR);0,20174;79081;80;49;129;0,20174;;0;0;
14;Sogn og Fjordane;;;;;GENP;Generasjonspartiet;0,83043;79081;309;222;531;0,83043;;0;0;
14;Sogn og Fjordane;;;;;HELSE;Velferd og Innovasjonspartiet;0,1517;79081;54;43;97;0,00834;;0;0;
14;Sogn og Fjordane;;;;;INP;Industri- og Næringspartiet;0,40505;79081;154;105;259;-0,06691;;0;0;
14;Sogn og Fjordane;;;;;KRISTNE;Konservativt;0,42694;79081;186;87;273;0,01942;;0;0;
14;Sogn og Fjordane;;;;;PP;Pensjonistpartiet;0,4113;79081;161;102;263;0,13264;;0;0;
14;Sogn og Fjordane;;;;;PS;Partiet Sentrum;0,10791;79081;44;25;69;-0,11921;;0;0;
15;Møre og Romsdal;;;;;A;Arbeiderpartiet;23,59086;196528;23387;13607;36994;3,4251;;2;0;
15;Møre og Romsdal;;;;;SV;SV - Sosialistisk Venstreparti;3,80512;196528;3969;1998;5967;-2,48893;;0;0;
15;Møre og Romsdal;;;;;RØDT;Rødt;3,45503;196528;3464;1954;5418;0,13113;;0;0;
15;Møre og Romsdal;;;;;SP;Senterpartiet;7,32583;196528;5558;5930;11488;-10,15143;;1;0;
15;Møre og Romsdal;;;;;KRF;Kristelig Folkeparti;6,75892;196528;6298;4301;10599;1,43246;;1;1;
15;Møre og Romsdal;;;;;MDG;Miljøpartiet De Grønne;3,0807;196528;3080;1751;4831;0,58963;;0;0;
15;Møre og Romsdal;;;;;V;Venstre;2,97165;196528;2768;1892;4660;0,03115;;0;0;
15;Møre og Romsdal;;;;;H;Høyre;12,63973;196528;12306;7515;19821;-3,61456;;1;0;
15;Møre og Romsdal;;;;;FRP;Fremskrittspartiet;32,3464;196528;33833;16891;50724;10,28184;;3;0;
15;Møre og Romsdal;;;;;DEMN;Norgesdemokratene;0,70401;196528;610;494;1104;-0,4765;;0;0;
15;Møre og Romsdal;;;;;DNI;Partiet DNI;0,20406;196528;208;112;320;0,20406;;0;0;
15;Møre og Romsdal;;;;;FRED;Fred og Rettferdighet (FOR);0,2385;196528;217;157;374;0,2385;;0;0;
15;Møre og Romsdal;;;;;GENP;Generasjonspartiet;0,67978;196528;648;418;1066;0,67978;;0;0;
15;Møre og Romsdal;;;;;HELSE;Velferd og Innovasjonspartiet;0,14603;196528;123;106;229;-0,04263;;0;0;
15;Møre og Romsdal;;;;;INP;Industri- og Næringspartiet;0,71613;196528;687;436;1123;-0,02236;;0;0;
15;Møre og Romsdal;;;;;KRISTNE;Konservativt;0,61091;196528;597;361;958;0,06378;;0;0;
15;Møre og Romsdal;;;;;PP;Pensjonistpartiet;0,63706;196528;650;349;999;0,10475;;0;0;
15;Møre og Romsdal;;;;;PS;Partiet Sentrum;0,08928;196528;88;52;140;-0,12971;;0;0;
16;Sør-Trøndelag;;;;;A;Arbeiderpartiet;31,97547;258002;44852;21523;66375;2,15665;;4;0;
16;Sør-Trøndelag;;;;;SV;SV - Sosialistisk Venstreparti;6,87153;258002;10699;3565;14264;-2,25456;;1;0;
16;Sør-Trøndelag;;;;;RØDT;Rødt;5,98417;258002;8824;3598;12422;0,36827;;1;1;
16;Sør-Trøndelag;;;;;SP;Senterpartiet;6,75784;258002;6946;7082;14028;-8,3433;;1;0;
16;Sør-Trøndelag;;;;;KRF;Kristelig Folkeparti;2,49734;258002;3366;1818;5184;0,31815;;0;0;
16;Sør-Trøndelag;;;;;MDG;Miljøpartiet De Grønne;5,75823;258002;8724;3229;11953;0,96205;;0;0;
16;Sør-Trøndelag;;;;;V;Venstre;3,66218;258002;5107;2495;7602;-0,70292;;0;0;
16;Sør-Trøndelag;;;;;H;Høyre;12,47465;258002;17776;8119;25895;-4,00097;;1;0;
16;Sør-Trøndelag;;;;;FRP;Fremskrittspartiet;19,81106;258002;28195;12929;41124;11,1947;;2;0;
16;Sør-Trøndelag;;;;;DEMN;Norgesdemokratene;0,72502;258002;837;668;1505;-0,16663;;0;0;
16;Sør-Trøndelag;;;;;DNI;Partiet DNI;0,1768;258002;227;140;367;0,1768;;0;0;
16;Sør-Trøndelag;;;;;FRED;Fred og Rettferdighet (FOR);0,22834;258002;334;140;474;0,22834;;0;0;
16;Sør-Trøndelag;;;;;GENP;Generasjonspartiet;0,53666;258002;725;389;1114;0,53666;;0;0;
16;Sør-Trøndelag;;;;;HELSE;Velferd og Innovasjonspartiet;0,16716;258002;238;109;347;-0,00361;;0;0;
16;Sør-Trøndelag;;;;;INP;Industri- og Næringspartiet;0,60314;258002;720;532;1252;0,26262;;0;0;
16;Sør-Trøndelag;;;;;KRISTNE;Konservativt;0,21967;258002;257;199;456;0,06184;;0;0;
16;Sør-Trøndelag;;;;;PP;Pensjonistpartiet;1,44329;258002;2120;876;2996;-0,29085;;0;0;
16;Sør-Trøndelag;;;;;PS;Partiet Sentrum;0,10743;258002;150;73;223;-0,12131;;0;0;
17;Nord-Trøndelag;;;;;A;Arbeiderpartiet;36,31566;101927;17803;11028;28831;2,74442;;2;0;
17;Nord-Trøndelag;;;;;SV;SV - Sosialistisk Venstreparti;4,19448;101927;2191;1139;3330;-1,53207;;0;0;
17;Nord-Trøndelag;;;;;RØDT;Rødt;5,18201;101927;2609;1505;4114;1,22209;;0;0;
17;Nord-Trøndelag;;;;;SP;Senterpartiet;14,8331;101927;5612;6164;11776;-13,98753;;1;0;
17;Nord-Trøndelag;;;;;KRF;Kristelig Folkeparti;2,62124;101927;1276;805;2081;0,36924;;0;0;
17;Nord-Trøndelag;;;;;MDG;Miljøpartiet De Grønne;2,37309;101927;1186;698;1884;0,51513;;1;1;
17;Nord-Trøndelag;;;;;V;Venstre;1,82013;101927;846;599;1445;-0,21137;;0;0;
17;Nord-Trøndelag;;;;;H;Høyre;9,01499;101927;4411;2746;7157;-1,58089;;0;0;
17;Nord-Trøndelag;;;;;FRP;Fremskrittspartiet;19,47223;101927;9727;5732;15459;11,45323;;1;0;
17;Nord-Trøndelag;;;;;DEMN;Norgesdemokratene;0,70916;101927;285;278;563;-0,27462;;0;0;
17;Nord-Trøndelag;;;;;DNI;Partiet DNI;0,28341;101927;147;78;225;0,28341;;0;0;
17;Nord-Trøndelag;;;;;FRED;Fred og Rettferdighet (FOR);0,21413;101927;100;70;170;0,21413;;0;0;
17;Nord-Trøndelag;;;;;GENP;Generasjonspartiet;0,54037;101927;246;183;429;0,54037;;0;0;
17;Nord-Trøndelag;;;;;HELSE;Velferd og Innovasjonspartiet;0,14108;101927;58;54;112;-0,04811;;0;0;
17;Nord-Trøndelag;;;;;INP;Industri- og Næringspartiet;0,85149;101927;367;309;676;0,38309;;0;0;
17;Nord-Trøndelag;;;;;KRISTNE;Konservativt;0,33254;101927;183;81;264;0,09899;;0;0;
17;Nord-Trøndelag;;;;;PP;Pensjonistpartiet;1,02658;101927;529;286;815;0,18762;;0;0;
17;Nord-Trøndelag;;;;;PS;Partiet Sentrum;0,07432;101927;36;23;59;-0,094;;0;0;
18;Nordland;;;;;A;Arbeiderpartiet;30,58181;181833;25784;16240;42024;1,81658;;3;0;
18;Nordland;;;;;SV;SV - Sosialistisk Venstreparti;5,67114;181833;4866;2927;7793;-1,49577;;0;0;
18;Nordland;;;;;RØDT;Rødt;6,62082;181833;5435;3663;9098;1,20243;;1;1;
18;Nordland;;;;;SP;Senterpartiet;8,63807;181833;5903;5967;11870;-12,56839;;1;0;
18;Nordland;;;;;KRF;Kristelig Folkeparti;2,37893;181833;1794;1475;3269;0,41436;;0;0;
18;Nordland;;;;;MDG;Miljøpartiet De Grønne;2,88251;181833;2460;1501;3961;0,5447;;0;0;
18;Nordland;;;;;V;Venstre;1,96849;181833;1568;1137;2705;-0,5213;;0;0;
18;Nordland;;;;;H;Høyre;11,18655;181833;9436;5936;15372;-4,10981;;1;0;
18;Nordland;;;;;FRP;Fremskrittspartiet;25,586;181833;21587;13572;35159;13,41417;;3;0;
18;Nordland;;;;;DEMN;Norgesdemokratene;0,79467;181833;542;550;1092;-0,55154;;0;0;
18;Nordland;;;;;DNI;Partiet DNI;0,28891;181833;225;172;397;0,28891;;0;0;
18;Nordland;;;;;FRED;Fred og Rettferdighet (FOR);0,26416;181833;224;139;363;0,26416;;0;0;
18;Nordland;;;;;GENP;Generasjonspartiet;0,76848;181833;584;472;1056;0,76848;;0;0;
18;Nordland;;;;;HELSE;Velferd og Innovasjonspartiet;0,18411;181833;144;109;253;-0,06844;;0;0;
18;Nordland;;;;;INP;Industri- og Næringspartiet;1,01736;181833;778;620;1398;0,58749;;0;0;
18;Nordland;;;;;KRISTNE;Konservativt;0,33111;181833;268;187;455;0,09718;;0;0;
18;Nordland;;;;;PP;Pensjonistpartiet;0,75247;181833;600;434;1034;0,31589;;0;0;
18;Nordland;;;;;PS;Partiet Sentrum;0,08442;181833;72;44;116;-0,07278;;0;0;
31;Østfold;;;;;A;Arbeiderpartiet;29,79874;234843;32069;20892;52961;;;4;0;
31;Østfold;;;;;SV;SV - Sosialistisk Venstreparti;4,34257;234843;4893;2825;7718;;;0;0;
31;Østfold;;;;;RØDT;Rødt;5,19668;234843;5714;3522;9236;;;1;1;
31;Østfold;;;;;SP;Senterpartiet;4,82139;234843;3996;4573;8569;;;0;0;
31;Østfold;;;;;KRF;Kristelig Folkeparti;3,85868;234843;3868;2990;6858;;;0;0;
31;Østfold;;;;;MDG;Miljøpartiet De Grønne;3,44119;234843;3792;2324;6116;;;0;0;
31;Østfold;;;;;V;Venstre;2,49706;234843;2544;1894;4438;;;0;0;
31;Østfold;;;;;H;Høyre;12,54269;234843;13547;8745;22292;;;1;0;
31;Østfold;;;;;FRP;Fremskrittspartiet;28,72407;234843;31894;19157;51051;;;3;0;
31;Østfold;;;;;DEMN;Norgesdemokratene;0,97114;234843;849;877;1726;;;0;0;
31;Østfold;;;;;DNI;Partiet DNI;0,13279;234843;140;96;236;;;0;0;
31;Østfold;;;;;FRED;Fred og Rettferdighet (FOR);0,29596;234843;290;236;526;;;0;0;
31;Østfold;;;;;GENP;Generasjonspartiet;0,67406;234843;693;505;1198;;;0;0;
31;Østfold;;;;;HELSE;Velferd og Innovasjonspartiet;0,13335;234843;141;96;237;;;0;0;
31;Østfold;;;;;INP;Industri- og Næringspartiet;0,62117;234843;556;548;1104;;;0;0;
31;Østfold;;;;;KRISTNE;Konservativt;0,45069;234843;471;330;801;;;0;0;
31;Østfold;;;;;PP;Pensjonistpartiet;1,36387;234843;1557;867;2424;;;0;0;
31;Østfold;;;;;PS;Partiet Sentrum;0,13391;234843;113;125;238;;;0;0;
32;Akershus;;;;;A;Arbeiderpartiet;27,31475;514317;72050;41286;113336;;;6;0;
32;Akershus;;;;;SV;SV - Sosialistisk Venstreparti;5,17466;514317;13806;7665;21471;;;1;0;
32;Akershus;;;;;RØDT;Rødt;4,24534;514317;11379;6236;17615;;;1;0;
32;Akershus;;;;;SP;Senterpartiet;2,93233;514317;6351;5816;12167;;;0;0;
32;Akershus;;;;;KRF;Kristelig Folkeparti;2,59637;514317;6615;4158;10773;;;1;1;
32;Akershus;;;;;MDG;Miljøpartiet De Grønne;5,41807;514317;14718;7763;22481;;;1;0;
32;Akershus;;;;;V;Venstre;5,4294;514317;14135;8393;22528;;;1;0;
32;Akershus;;;;;H;Høyre;19,4466;514317;54022;26667;80689;;;4;0;
32;Akershus;;;;;FRP;Fremskrittspartiet;23,57119;514317;65664;32139;97803;;;5;0;
32;Akershus;;;;;DEMN;Norgesdemokratene;0,73194;514317;1644;1393;3037;;;0;0;
32;Akershus;;;;;DNI;Partiet DNI;0,10556;514317;287;151;438;;;0;0;
32;Akershus;;;;;FRED;Fred og Rettferdighet (FOR);0,31524;514317;764;544;1308;;;0;0;
32;Akershus;;;;;GENP;Generasjonspartiet;0,6377;514317;1578;1068;2646;;;0;0;
32;Akershus;;;;;HELSE;Velferd og Innovasjonspartiet;0,1634;514317;398;280;678;;;0;0;
32;Akershus;;;;;INP;Industri- og Næringspartiet;0,41718;514317;996;735;1731;;;0;0;
32;Akershus;;;;;KRISTNE;Konservativt;0,31692;514317;832;483;1315;;;0;0;
32;Akershus;;;;;PP;Pensjonistpartiet;0,90715;514317;2574;1190;3764;;;0;0;
32;Akershus;;;;;PS;Partiet Sentrum;0,27619;514317;580;566;1146;;;0;0;
33;Buskerud;;;;;A;Arbeiderpartiet;29,39005;194796;27688;16661;44349;;;3;0;
33;Buskerud;;;;;SV;SV - Sosialistisk Venstreparti;4,3546;194796;4224;2347;6571;;;1;1;
33;Buskerud;;;;;RØDT;Rødt;4,04843;194796;3873;2236;6109;;;0;0;
33;Buskerud;;;;;SP;Senterpartiet;5,53486;194796;4253;4099;8352;;;0;0;
33;Buskerud;;;;;KRF;Kristelig Folkeparti;2,83702;194796;2617;1664;4281;;;0;0;
33;Buskerud;;;;;MDG;Miljøpartiet De Grønne;3,56665;194796;3410;1972;5382;;;0;0;
33;Buskerud;;;;;V;Venstre;3,07758;194796;2787;1857;4644;;;0;0;
33;Buskerud;;;;;H;Høyre;15,31432;194796;14531;8578;23109;;;1;0;
33;Buskerud;;;;;FRP;Fremskrittspartiet;27,60341;194796;27599;14054;41653;;;3;0;
33;Buskerud;;;;;DEMN;Norgesdemokratene;0,90193;194796;728;633;1361;;;0;0;
33;Buskerud;;;;;DNI;Partiet DNI;0,17562;194796;169;96;265;;;0;0;
33;Buskerud;;;;;FRED;Fred og Rettferdighet (FOR);0,26906;194796;247;159;406;;;0;0;
33;Buskerud;;;;;GENP;Generasjonspartiet;0,68589;194796;606;429;1035;;;0;0;
33;Buskerud;;;;;HELSE;Velferd og Innovasjonspartiet;0,167;194796;137;115;252;;;0;0;
33;Buskerud;;;;;INP;Industri- og Næringspartiet;0,57854;194796;509;364;873;;;0;0;
33;Buskerud;;;;;KRISTNE;Konservativt;0,40756;194796;392;223;615;;;0;0;
33;Buskerud;;;;;PP;Pensjonistpartiet;0,73361;194796;733;374;1107;;;0;0;
33;Buskerud;;;;;PS;Partiet Sentrum;0,35388;194796;322;212;534;;;0;0;
39;Vestfold;;;;;A;Arbeiderpartiet;27,48524;191610;24190;17396;41586;;;2;0;
39;Vestfold;;;;;SV;SV - Sosialistisk Venstreparti;4,09113;191610;3921;2269;6190;;;0;0;
39;Vestfold;;;;;RØDT;Rødt;4,91266;191610;4485;2948;7433;;;0;0;
39;Vestfold;;;;;SP;Senterpartiet;3,29273;191610;2344;2638;4982;;;0;0;
39;Vestfold;;;;;KRF;Kristelig Folkeparti;4,12285;191610;3427;2811;6238;;;0;0;
39;Vestfold;;;;;MDG;Miljøpartiet De Grønne;4,28676;191610;3882;2604;6486;;;1;1;
39;Vestfold;;;;;V;Venstre;3,49762;191610;2999;2293;5292;;;0;0;
39;Vestfold;;;;;H;Høyre;16,50265;191610;14640;10329;24969;;;1;0;
39;Vestfold;;;;;FRP;Fremskrittspartiet;27,57976;191610;25310;16419;41729;;;3;0;
39;Vestfold;;;;;DEMN;Norgesdemokratene;0,81096;191610;622;605;1227;;;0;0;
39;Vestfold;;;;;DNI;Partiet DNI;0,18969;191610;180;107;287;;;0;0;
39;Vestfold;;;;;FRED;Fred og Rettferdighet (FOR);0,29081;191610;271;169;440;;;0;0;
39;Vestfold;;;;;GENP;Generasjonspartiet;0,70785;191610;620;451;1071;;;0;0;
39;Vestfold;;;;;HELSE;Velferd og Innovasjonspartiet;0,17118;191610;143;116;259;;;0;0;
39;Vestfold;;;;;INP;Industri- og Næringspartiet;0,64044;191610;511;458;969;;;0;0;
39;Vestfold;;;;;KRISTNE;Konservativt;0,49966;191610;453;303;756;;;0;0;
39;Vestfold;;;;;PP;Pensjonistpartiet;0,77989;191610;701;479;1180;;;0;0;
39;Vestfold;;;;;PS;Partiet Sentrum;0,13813;191610;124;85;209;;;0;0;
40;Telemark;;;;;A;Arbeiderpartiet;31,35385;133934;16998;15346;32344;;;2;0;
40;Telemark;;;;;SV;SV - Sosialistisk Venstreparti;4,10341;133934;2527;1706;4233;;;0;0;
40;Telemark;;;;;RØDT;Rødt;5,84734;133934;3315;2717;6032;;;0;0;
40;Telemark;;;;;SP;Senterpartiet;6,1779;133934;2506;3867;6373;;;0;0;
40;Telemark;;;;;KRF;Kristelig Folkeparti;5,0127;133934;2589;2582;5171;;;1;1;
40;Telemark;;;;;MDG;Miljøpartiet De Grønne;3,33178;133934;1944;1493;3437;;;0;0;
40;Telemark;;;;;V;Venstre;2,06576;133934;1172;959;2131;;;0;0;
40;Telemark;;;;;H;Høyre;11,04519;133934;6069;5325;11394;;;1;0;
40;Telemark;;;;;FRP;Fremskrittspartiet;26,05712;133934;14422;12458;26880;;;2;0;
40;Telemark;;;;;DEMN;Norgesdemokratene;1,07602;133934;495;615;1110;;;0;0;
40;Telemark;;;;;DNI;Partiet DNI;0,43332;133934;233;214;447;;;0;0;
40;Telemark;;;;;FRED;Fred og Rettferdighet (FOR);0,28112;133934;161;129;290;;;0;0;
40;Telemark;;;;;GENP;Generasjonspartiet;0,74158;133934;383;382;765;;;0;0;
40;Telemark;;;;;HELSE;Velferd og Innovasjonspartiet;0,19388;133934;96;104;200;;;0;0;
40;Telemark;;;;;INP;Industri- og Næringspartiet;0,83561;133934;411;451;862;;;0;0;
40;Telemark;;;;;KRISTNE;Konservativt;0,69505;133934;397;320;717;;;0;0;
40;Telemark;;;;;PP;Pensjonistpartiet;0,61071;133934;320;310;630;;;0;0;
40;Telemark;;;;;PS;Partiet Sentrum;0,13765;133934;67;75;142;;;0;0;
55;Troms Romsa;;;;;A;Arbeiderpartiet;29,57603;126355;15994;12252;28246;;;2;0;
55;Troms Romsa;;;;;SV;SV - Sosialistisk Venstreparti;7,15265;126355;4194;2637;6831;;;0;0;
55;Troms Romsa;;;;;RØDT;Rødt;7,40814;126355;4057;3018;7075;;;1;1;
55;Troms Romsa;;;;;SP;Senterpartiet;6,32964;126355;2650;3395;6045;;;0;0;
55;Troms Romsa;;;;;KRF;Kristelig Folkeparti;2,92137;126355;1376;1414;2790;;;0;0;
55;Troms Romsa;;;;;MDG;Miljøpartiet De Grønne;3,53183;126355;2021;1352;3373;;;0;0;
55;Troms Romsa;;;;;V;Venstre;1,98109;126355;1074;818;1892;;;0;0;
55;Troms Romsa;;;;;H;Høyre;10,84887;126355;5876;4485;10361;;;1;0;
55;Troms Romsa;;;;;FRP;Fremskrittspartiet;25,83898;126355;14428;10249;24677;;;2;0;
55;Troms Romsa;;;;;DEMN;Norgesdemokratene;0,76437;126355;352;378;730;;;0;0;
55;Troms Romsa;;;;;DNI;Partiet DNI;0,2691;126355;142;115;257;;;0;0;
55;Troms Romsa;;;;;FRED;Fred og Rettferdighet (FOR);0,31203;126355;171;127;298;;;0;0;
55;Troms Romsa;;;;;GENP;Generasjonspartiet;0,74971;126355;354;362;716;;;0;0;
55;Troms Romsa;;;;;HELSE;Velferd og Innovasjonspartiet;0,14659;126355;76;64;140;;;0;0;
55;Troms Romsa;;;;;INP;Industri- og Næringspartiet;1,04185;126355;496;499;995;;;0;0;
55;Troms Romsa;;;;;KRISTNE;Konservativt;0,3958;126355;213;165;378;;;0;0;
55;Troms Romsa;;;;;PP;Pensjonistpartiet;0,63244;126355;324;280;604;;;0;0;
55;Troms Romsa;;;;;PS;Partiet Sentrum;0,09947;126355;48;47;95;;;0;0;
56;Finnmark Finnmárku;;;;;A;Arbeiderpartiet;28,12156;54604;7105;4138;11243;;;2;0;
56;Finnmark Finnmárku;;;;;SV;SV - Sosialistisk Venstreparti;5,2026;54604;1360;720;2080;;;0;0;
56;Finnmark Finnmárku;;;;;RØDT;Rødt;9,82991;54604;2545;1385;3930;;;0;0;
56;Finnmark Finnmárku;;;;;SP;Senterpartiet;5,47274;54604;1157;1031;2188;;;0;0;
56;Finnmark Finnmárku;;;;;KRF;Kristelig Folkeparti;2,07854;54604;496;335;831;;;0;0;
56;Finnmark Finnmárku;;;;;MDG;Miljøpartiet De Grønne;2,15108;54604;592;268;860;;;1;1;
56;Finnmark Finnmárku;;;;;V;Venstre;1,22561;54604;321;169;490;;;0;0;
56;Finnmark Finnmárku;;;;;H;Høyre;5,93797;54604;1536;838;2374;;;0;0;
56;Finnmark Finnmárku;;;;;FRP;Fremskrittspartiet;24,46973;54604;6480;3303;9783;;;1;0;
56;Finnmark Finnmárku;;;;;DEMN;Norgesdemokratene;0,85793;54604;178;165;343;;;0;0;
56;Finnmark Finnmárku;;;;;DNI;Partiet DNI;0,38019;54604;106;46;152;;;0;0;
56;Finnmark Finnmárku;;;;;FRED;Fred og Rettferdighet (FOR);0,38269;54604;82;71;153;;;0;0;
56;Finnmark Finnmárku;;;;;GENP;Generasjonspartiet;0,97549;54604;245;145;390;;;0;0;
56;Finnmark Finnmárku;;;;;HELSE;Velferd og Innovasjonspartiet;0,15508;54604;38;24;62;;;0;0;
56;Finnmark Finnmárku;;;;;INP;Industri- og Næringspartiet;1,003;54604;245;156;401;;;0;0;
56;Finnmark Finnmárku;;;;;KRISTNE;Konservativt;1,21561;54604;293;193;486;;;0;0;
56;Finnmark Finnmárku;;;;;PS;Partiet Sentrum;0,09505;54604;23;15;38;;;0;0;
56;Finnmark Finnmárku;;;;;PASF;Pasientfokus;10,44522;54604;2960;1216;4176;;;0;0;`;

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
