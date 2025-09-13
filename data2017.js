// https://valgresultat.no/valg/2017/st

const file2017 = `01;Østfold;;;;;A;Arbeiderpartiet;32,05136;216293;12947;38598;51545;-2,86489;3;0;
01;Østfold;;;;;SV;Sosialistisk Venstreparti;4,37508;216293;1767;5269;7036;2,04266;1;1;
01;Østfold;;;;;RØDT;Rødt;2,13593;216293;1018;2417;3435;1,4053;0;0;
01;Østfold;;;;;SP;Senterpartiet;8,66994;216293;3046;10897;13943;4,59712;1;0;
01;Østfold;;;;;KRF;Kristelig Folkeparti;4,23517;216293;1575;5236;6811;-1,37839;0;0;
01;Østfold;;;;;MDG;Miljøpartiet De Grønne;2,60664;216293;1403;2789;4192;0,59217;0;0;
01;Østfold;;;;;V;Venstre;2,41139;216293;984;2894;3878;-1,22776;0;0;
01;Østfold;;;;;H;Høyre;23,79306;216293;9366;28898;38264;-1,45334;2;0;
01;Østfold;;;;;FRP;Fremskrittspartiet;17,52332;216293;7085;21096;28181;-2,06247;2;0;
01;Østfold;;;;;ALLI;Alliansen;0,1312;216293;63;148;211;0,1312;0;0;
01;Østfold;;;;;DEMN;Demokratene i Norge;0,11814;216293;60;130;190;0,05519;0;0;
01;Østfold;;;;;HELSE;Helsepartiet;0,50118;216293;216;590;806;0,50118;0;0;
01;Østfold;;;;;KRISTNE;Partiet De Kristne;0,3221;216293;163;355;518;-0,392;0;0;
01;Østfold;;;;;KYST;Kystpartiet;0,06094;216293;19;79;98;0,0177;0;0;
01;Østfold;;;;;LIBS;Liberalistene;0,2195;216293;78;275;353;0,2195;0;0;
01;Østfold;;;;;PP;Pensjonistpartiet;0,84504;216293;438;921;1359;0,23714;0;0;
02;Akershus;;;;;A;Arbeiderpartiet;26,31502;417141;31409;57280;88689;-2,12522;5;0;
02;Akershus;;;;;SV;Sosialistisk Venstreparti;5,29897;417141;6149;11710;17859;1,77989;1;0;
02;Akershus;;;;;RØDT;Rødt;1,94109;417141;2785;3757;6542;1,2049;0;0;
02;Akershus;;;;;SP;Senterpartiet;5,9992;417141;6399;13820;20219;3,47437;1;0;
02;Akershus;;;;;KRF;Kristelig Folkeparti;2,32592;417141;2750;5089;7839;-0,90429;0;0;
02;Akershus;;;;;MDG;Miljøpartiet De Grønne;3,69673;417141;5363;7096;12459;0,64489;0;0;
02;Akershus;;;;;V;Venstre;6,48403;417141;6921;14932;21853;0,19078;1;0;
02;Akershus;;;;;H;Høyre;30,99179;417141;39714;64737;104451;-2,8947;6;1;
02;Akershus;;;;;FRP;Fremskrittspartiet;15,05543;417141;18553;32188;50741;-1,95879;3;0;
02;Akershus;;;;;ALLI;Alliansen;0,11364;417141;150;233;383;0,11364;0;0;
02;Akershus;;;;;DEMN;Demokratene i Norge;0,07952;417141;115;153;268;0,04372;0;0;
02;Akershus;;;;;HELSE;Helsepartiet;0,60885;417141;805;1247;2052;0,60885;0;0;
02;Akershus;;;;;KRISTNE;Partiet De Kristne;0,12462;417141;173;247;420;-0,12192;0;0;
02;Akershus;;;;;KYST;Kystpartiet;0,04035;417141;43;93;136;-0,00603;0;0;
02;Akershus;;;;;LIBS;Liberalistene;0,17743;417141;214;384;598;0,17743;0;0;
02;Akershus;;;;;PIR;Piratpartiet;0,16764;417141;189;376;565;-0,17664;0;0;
02;Akershus;;;;;PP;Pensjonistpartiet;0,57977;417141;1037;917;1954;0,0951;0;0;
03;Oslo;;;;;A;Arbeiderpartiet;28,35432;460108;50513;53576;104089;-2,05837;5;0;
03;Oslo;;;;;SV;Sosialistisk Venstreparti;9,27592;460108;15536;18516;34052;2,98572;2;0;
03;Oslo;;;;;RØDT;Rødt;6,28792;460108;11935;11148;23083;3,09375;1;0;
03;Oslo;;;;;SP;Senterpartiet;2,11876;460108;3947;3831;7778;1,26865;0;0;
03;Oslo;;;;;KRF;Kristelig Folkeparti;2,13647;460108;3721;4122;7843;-0,68959;0;0;
03;Oslo;;;;;MDG;Miljøpartiet De Grønne;5,95286;460108;11138;10715;21853;0,39944;1;0;
03;Oslo;;;;;V;Venstre;8,42629;460108;12086;18847;30933;0,21523;2;0;
03;Oslo;;;;;H;Høyre;26,4464;460108;47508;49577;97085;-3,34456;6;1;
03;Oslo;;;;;FRP;Fremskrittspartiet;9,54424;460108;18328;16709;35037;-2,1215;2;0;
03;Oslo;;;;;ALLI;Alliansen;0,08554;460108;179;135;314;0,08554;0;0;
03;Oslo;;;;;DEMN;Demokratene i Norge;0,0888;460108;204;122;326;0,02109;0;0;
03;Oslo;;;;;HELSE;Helsepartiet;0,32253;460108;658;526;1184;0,32253;0;0;
03;Oslo;;;;;KRISTNE;Partiet De Kristne;0,09343;460108;173;170;343;-0,11716;0;0;
03;Oslo;;;;;LIBS;Liberalistene;0,18169;460108;363;304;667;0,18169;0;0;
03;Oslo;;;;;NKP;Norges Kommunistiske Parti;0,03242;460108;58;61;119;-0,00861;0;0;
03;Oslo;;;;;PIR;Piratpartiet;0,17161;460108;304;326;630;-0,21772;0;0;
03;Oslo;;;;;PP;Pensjonistpartiet;0,36366;460108;866;469;1335;0,0274;0;0;
03;Oslo;;;;;SAMFS;Samfunnspartiet;0,02833;460108;56;48;104;0,02833;0;0;
03;Oslo;;;;;FI;Feministisk Initiativ;0,0888;460108;213;113;326;0,0888;0;0;
04;Hedmark;;;;;A;Arbeiderpartiet;35,55487;149920;13614;26947;40561;-7,64305;2;0;
04;Hedmark;;;;;SV;Sosialistisk Venstreparti;5,7223;149920;2090;4438;6528;1,82514;1;1;
04;Hedmark;;;;;RØDT;Rødt;1,2649;149920;576;867;1443;0,57915;0;0;
04;Hedmark;;;;;SP;Senterpartiet;22,17391;149920;7408;17888;25296;11,98699;2;0;
04;Hedmark;;;;;KRF;Kristelig Folkeparti;1,79786;149920;681;1370;2051;-0,74909;0;0;
04;Hedmark;;;;;MDG;Miljøpartiet De Grønne;1,94162;149920;1009;1206;2215;-0,03136;0;0;
04;Hedmark;;;;;V;Venstre;2,33082;149920;939;1720;2659;-1,04471;0;0;
04;Hedmark;;;;;H;Høyre;15,29979;149920;5910;11544;17454;-2,9751;1;0;
04;Hedmark;;;;;FRP;Fremskrittspartiet;11,72511;149920;4130;9246;13376;-1,86218;1;0;
04;Hedmark;;;;;ALLI;Alliansen;0,10519;149920;44;76;120;0,10519;0;0;
04;Hedmark;;;;;DEMN;Demokratene i Norge;0,1683;149920;76;116;192;0,11241;0;0;
04;Hedmark;;;;;HELSE;Helsepartiet;0,31206;149920;121;235;356;0,31206;0;0;
04;Hedmark;;;;;KRISTNE;Partiet De Kristne;0,14464;149920;73;92;165;-0,22264;0;0;
04;Hedmark;;;;;KYST;Kystpartiet;0,03945;149920;15;30;45;-0,01112;0;0;
04;Hedmark;;;;;LIBS;Liberalistene;0,14464;149920;56;109;165;0,14464;0;0;
04;Hedmark;;;;;PP;Pensjonistpartiet;1,14218;149920;629;674;1303;-0,3828;0;0;
04;Hedmark;;;;;NP;Norgespartiet;0,13236;149920;54;97;151;0,13236;0;0;
05;Oppland;;;;;A;Arbeiderpartiet;35,07465;143221;12263;25793;38056;-5,93681;2;0;
05;Oppland;;;;;SV;Sosialistisk Venstreparti;4,6341;143221;1681;3347;5028;1,68742;0;0;
05;Oppland;;;;;RØDT;Rødt;1,68018;143221;752;1071;1823;0,91954;0;0;
05;Oppland;;;;;SP;Senterpartiet;21,18894;143221;6658;16332;22990;8,93485;2;0;
05;Oppland;;;;;KRF;Kristelig Folkeparti;2,1023;143221;736;1545;2281;-1,07992;0;0;
05;Oppland;;;;;MDG;Miljøpartiet De Grønne;2,35023;143221;1098;1452;2550;-0,0546;0;0;
05;Oppland;;;;;V;Venstre;2,55853;143221;823;1953;2776;-1,39645;1;1;
05;Oppland;;;;;H;Høyre;16,74009;143221;5552;12611;18163;-2,38028;1;0;
05;Oppland;;;;;FRP;Fremskrittspartiet;12,24424;143221;3938;9347;13285;-0,49492;1;0;
05;Oppland;;;;;ALLI;Alliansen;0,12719;143221;59;79;138;0,12719;0;0;
05;Oppland;;;;;DEMN;Demokratene i Norge;0,12166;143221;54;78;132;0,07138;0;0;
05;Oppland;;;;;HELSE;Helsepartiet;0,41935;143221;164;291;455;0,41935;0;0;
05;Oppland;;;;;KRISTNE;Partiet De Kristne;0,16959;143221;75;109;184;-0,25868;0;0;
05;Oppland;;;;;KYST;Kystpartiet;0,03687;143221;12;28;40;-0,03203;0;0;
05;Oppland;;;;;LIBS;Liberalistene;0,13456;143221;54;92;146;0,13456;0;0;
05;Oppland;;;;;PP;Pensjonistpartiet;0,41751;143221;200;253;453;-0,32917;0;0;
06;Buskerud;;;;;A;Arbeiderpartiet;28,27325;198720;15667;27476;43143;-3,48143;3;0;
06;Buskerud;;;;;SV;Sosialistisk Venstreparti;5,00809;198720;2579;5063;7642;2,27532;1;1;
06;Buskerud;;;;;RØDT;Rødt;1,48106;198720;958;1302;2260;0,87697;0;0;
06;Buskerud;;;;;SP;Senterpartiet;10,77769;198720;4768;11678;16446;4,69669;1;0;
06;Buskerud;;;;;KRF;Kristelig Folkeparti;2,61808;198720;1422;2573;3995;-0,62801;0;0;
06;Buskerud;;;;;MDG;Miljøpartiet De Grønne;2,69475;198720;1755;2357;4112;0,46194;0;0;
06;Buskerud;;;;;V;Venstre;3,67251;198720;1872;3732;5604;-0,94197;0;0;
06;Buskerud;;;;;H;Høyre;26,87607;198720;14594;26417;41011;-2,17053;2;0;
06;Buskerud;;;;;FRP;Fremskrittspartiet;17,31338;198720;9187;17232;26419;-1,27938;2;0;
06;Buskerud;;;;;ALLI;Alliansen;0,14483;198720;100;121;221;0,14483;0;0;
06;Buskerud;;;;;DEMN;Demokratene i Norge;0,13172;198720;87;114;201;0,07832;0;0;
06;Buskerud;;;;;HELSE;Helsepartiet;0,56031;198720;358;497;855;0,56031;0;0;
06;Buskerud;;;;;KRISTNE;Partiet De Kristne;0,18022;198720;105;170;275;-0,31107;0;0;
06;Buskerud;;;;;KYST;Kystpartiet;0,05964;198720;34;57;91;-0,03048;0;0;
06;Buskerud;;;;;LIBS;Liberalistene;0,2084;198720;99;219;318;0,2084;0;0;
07;Vestfold;;;;;A;Arbeiderpartiet;27,95581;181612;12134;26984;39118;-1,65019;2;0;
07;Vestfold;;;;;SV;Sosialistisk Venstreparti;4,9504;181612;2176;4751;6927;1,13565;0;0;
07;Vestfold;;;;;RØDT;Rødt;1,85953;181612;1004;1598;2602;1,18438;0;0;
07;Vestfold;;;;;SP;Senterpartiet;6,27251;181612;2403;6374;8777;3,31401;0;0;
07;Vestfold;;;;;KRF;Kristelig Folkeparti;3,6869;181612;1624;3535;5159;-1,19202;0;0;
07;Vestfold;;;;;MDG;Miljøpartiet De Grønne;2,93508;181612;1528;2579;4107;0,46701;0;0;
07;Vestfold;;;;;V;Venstre;3,83983;181612;1429;3944;5373;-0,67181;1;1;
07;Vestfold;;;;;H;Høyre;30,14336;181612;12787;29392;42179;0,18385;3;0;
07;Vestfold;;;;;FRP;Fremskrittspartiet;16,88583;181612;7335;16293;23628;-2,65663;1;0;
07;Vestfold;;;;;ALLI;Alliansen;0,13293;181612;67;119;186;0,13293;0;0;
07;Vestfold;;;;;DEMN;Demokratene i Norge;0,11434;181612;69;91;160;0,06726;0;0;
07;Vestfold;;;;;HELSE;Helsepartiet;0,48025;181612;264;408;672;0,48025;0;0;
07;Vestfold;;;;;KRISTNE;Partiet De Kristne;0,28801;181612;131;272;403;-0,21256;0;0;
07;Vestfold;;;;;KYST;Kystpartiet;0,07933;181612;48;63;111;-0,03441;0;0;
07;Vestfold;;;;;LIBS;Liberalistene;0,22083;181612;70;239;309;0,22083;0;0;
07;Vestfold;;;;;PIR;Piratpartiet;0,15508;181612;69;148;217;-0,18829;0;0;
08;Telemark;;;;;A;Arbeiderpartiet;31,93141;129712;8740;22191;30931;-4,81127;2;0;
08;Telemark;;;;;SV;Sosialistisk Venstreparti;4,95525;129712;1408;3392;4800;1,69405;0;0;
08;Telemark;;;;;RØDT;Rødt;2,10701;129712;745;1296;2041;1,20385;0;0;
08;Telemark;;;;;SP;Senterpartiet;12,8599;129712;3167;9290;12457;8,40538;1;0;
08;Telemark;;;;;KRF;Kristelig Folkeparti;4,98106;129712;1432;3393;4825;-1,77225;1;1;
08;Telemark;;;;;MDG;Miljøpartiet De Grønne;2,46937;129712;992;1400;2392;0,30749;0;0;
08;Telemark;;;;;V;Venstre;2,6748;129712;783;1808;2591;-0,79176;0;0;
08;Telemark;;;;;H;Høyre;20,07392;129712;5453;13992;19445;-1,68787;1;0;
08;Telemark;;;;;FRP;Fremskrittspartiet;16,53091;129712;4547;11466;16013;-2,43555;1;0;
08;Telemark;;;;;ALLI;Alliansen;0,14246;129712;47;91;138;0,14246;0;0;
08;Telemark;;;;;DEMN;Demokratene i Norge;0,13317;129712;45;84;129;0,07596;0;0;
08;Telemark;;;;;HELSE;Helsepartiet;0,36545;129712;134;220;354;0,36545;0;0;
08;Telemark;;;;;KRISTNE;Partiet De Kristne;0,55437;129712;188;349;537;-0,48468;0;0;
08;Telemark;;;;;KYST;Kystpartiet;0,08362;129712;27;54;81;0,01415;0;0;
08;Telemark;;;;;LIBS;Liberalistene;0,1373;129712;53;80;133;0,1373;0;0;
09;Aust-Agder;;;;;A;Arbeiderpartiet;25,44307;84426;5802;10679;16481;-2,57442;1;0;
09;Aust-Agder;;;;;SV;Sosialistisk Venstreparti;3,95517;84426;997;1565;2562;1,32878;0;0;
09;Aust-Agder;;;;;RØDT;Rødt;1,24583;84426;360;447;807;0,69734;0;0;
09;Aust-Agder;;;;;SP;Senterpartiet;8,31326;84426;1611;3774;5385;3,83791;0;0;
09;Aust-Agder;;;;;KRF;Kristelig Folkeparti;9,8061;84426;2058;4294;6352;-1,35288;1;1;
09;Aust-Agder;;;;;MDG;Miljøpartiet De Grønne;2,58738;84426;764;912;1676;0,61282;0;0;
09;Aust-Agder;;;;;V;Venstre;3,27436;84426;743;1378;2121;-1,54758;0;0;
09;Aust-Agder;;;;;H;Høyre;25,64839;84426;5968;10646;16614;-0,27053;1;0;
09;Aust-Agder;;;;;FRP;Fremskrittspartiet;17,28264;84426;3750;7445;11195;-0,64741;1;0;
09;Aust-Agder;;;;;ALLI;Alliansen;0,09417;84426;27;34;61;0,09417;0;0;
09;Aust-Agder;;;;;DEMN;Demokratene i Norge;0,15747;84426;41;61;102;0,08433;0;0;
09;Aust-Agder;;;;;HELSE;Helsepartiet;0,3844;84426;86;163;249;0,3844;0;0;
09;Aust-Agder;;;;;KRISTNE;Partiet De Kristne;0,72558;84426;194;276;470;-0,64485;0;0;
09;Aust-Agder;;;;;KYST;Kystpartiet;0,03705;84426;7;17;24;-0,01859;0;0;
09;Aust-Agder;;;;;LIBS;Liberalistene;0,18834;84426;42;80;122;0,18834;0;0;
09;Aust-Agder;;;;;PIR;Piratpartiet;0,15747;84426;33;69;102;-0,12234;0;0;
09;Aust-Agder;;;;;PP;Pensjonistpartiet;0,69933;84426;207;246;453;0,13653;0;0;
10;Vest-Agder;;;;;A;Arbeiderpartiet;21,0371;131684;6861;14377;21238;-2,75131;1;0;
10;Vest-Agder;;;;;SV;Sosialistisk Venstreparti;4,29201;131684;1411;2922;4333;1,66194;0;0;
10;Vest-Agder;;;;;RØDT;Rødt;1,36298;131684;566;810;1376;0,89187;0;0;
10;Vest-Agder;;;;;SP;Senterpartiet;6,48011;131684;1871;4671;6542;3,44652;0;0;
10;Vest-Agder;;;;;KRF;Kristelig Folkeparti;12,62642;131684;3675;9072;12747;-1,23675;2;1;
10;Vest-Agder;;;;;MDG;Miljøpartiet De Grønne;2,88346;131684;1201;1710;2911;0,63438;0;0;
10;Vest-Agder;;;;;V;Venstre;3,61943;131684;1102;2552;3654;-0,6872;0;0;
10;Vest-Agder;;;;;H;Høyre;27,87975;131684;8863;19283;28146;0,41355;2;0;
10;Vest-Agder;;;;;FRP;Fremskrittspartiet;17,1205;131684;5553;11731;17284;-1,17426;1;0;
10;Vest-Agder;;;;;ALLI;Alliansen;0,09806;131684;33;66;99;0,09806;0;0;
10;Vest-Agder;;;;;DEMN;Demokratene i Norge;0,74092;131684;281;467;748;0,21245;0;0;
10;Vest-Agder;;;;;HELSE;Helsepartiet;0,22386;131684;97;129;226;0,22386;0;0;
10;Vest-Agder;;;;;KRISTNE;Partiet De Kristne;0,7855;131684;298;495;793;-1,23724;0;0;
10;Vest-Agder;;;;;KYST;Kystpartiet;0,06538;131684;13;53;66;0,02134;0;0;
10;Vest-Agder;;;;;LIBS;Liberalistene;0,209;131684;80;131;211;0,209;0;0;
10;Vest-Agder;;;;;PIR;Piratpartiet;0,15155;131684;47;106;153;-0,13931;0;0;
10;Vest-Agder;;;;;PP;Pensjonistpartiet;0,42395;131684;204;224;428;-0,47834;0;0;
11;Rogaland;;;;;A;Arbeiderpartiet;22,43656;321163;17005;39335;56340;-0,19982;4;0;
11;Rogaland;;;;;SV;Sosialistisk Venstreparti;3,94054;321163;3039;6856;9895;0,65368;1;1;
11;Rogaland;;;;;RØDT;Rødt;1,15289;321163;1064;1831;2895;0,71232;0;0;
11;Rogaland;;;;;SP;Senterpartiet;7,52545;321163;5130;13767;18897;2,2797;1;0;
11;Rogaland;;;;;KRF;Kristelig Folkeparti;8,39957;321163;6322;14770;21092;-2,23448;1;0;
11;Rogaland;;;;;MDG;Miljøpartiet De Grønne;2,56623;321163;2420;4024;6444;0,37707;0;0;
11;Rogaland;;;;;V;Venstre;3,52478;321163;2457;6394;8851;-0,97532;0;0;
11;Rogaland;;;;;H;Høyre;28,75297;321163;21671;50530;72201;-1,36819;4;0;
11;Rogaland;;;;;FRP;Fremskrittspartiet;19,69312;321163;16292;33159;49451;0,95541;3;0;
11;Rogaland;;;;;ALLI;Alliansen;0,09199;321163;90;141;231;0,09199;0;0;
11;Rogaland;;;;;DEMN;Demokratene i Norge;0,09558;321163;95;145;240;0,04778;0;0;
11;Rogaland;;;;;HELSE;Helsepartiet;0,21106;321163;189;341;530;0,21106;0;0;
11;Rogaland;;;;;KRISTNE;Partiet De Kristne;0,50018;321163;445;811;1256;-0,45412;0;0;
11;Rogaland;;;;;KYST;Kystpartiet;0,09876;321163;78;170;248;0,0148;0;0;
11;Rogaland;;;;;LIBS;Liberalistene;0,25646;321163;190;454;644;0,25646;0;0;
11;Rogaland;;;;;NKP;Norges Kommunistiske Parti;0,02987;321163;22;53;75;0,00202;0;0;
11;Rogaland;;;;;PIR;Piratpartiet;0,17682;321163;128;316;444;-0,18271;0;0;
11;Rogaland;;;;;PP;Pensjonistpartiet;0,48824;321163;610;616;1226;-0,00679;0;0;
11;Rogaland;;;;;VERDI;Verdipartiet;0,05894;321163;46;102;148;0,05894;0;0;
12;Hordaland;;;;;A;Arbeiderpartiet;22,83847;370584;29447;38748;68195;-2,02458;4;0;
12;Hordaland;;;;;SV;Sosialistisk Venstreparti;7,01882;370584;8385;12573;20958;2,0812;1;0;
12;Hordaland;;;;;RØDT;Rødt;2,14403;370584;3118;3284;6402;1,20594;0;0;
12;Hordaland;;;;;SP;Senterpartiet;7,56672;370584;8369;14225;22594;3,20619;2;1;
12;Hordaland;;;;;KRF;Kristelig Folkeparti;5,5302;370584;6729;9784;16513;-2,19028;1;0;
12;Hordaland;;;;;MDG;Miljøpartiet De Grønne;3,50841;370584;5056;5420;10476;0,30661;0;0;
12;Hordaland;;;;;V;Venstre;4,36274;370584;4605;8422;13027;-1,43757;1;0;
12;Hordaland;;;;;H;Høyre;30,38644;370584;37493;53240;90733;-0,9235;5;0;
12;Hordaland;;;;;FRP;Fremskrittspartiet;15,09057;370584;19620;25440;45060;-0,0463;2;0;
12;Hordaland;;;;;ALLI;Alliansen;0,10348;370584;144;165;309;0,10348;0;0;
12;Hordaland;;;;;DEMN;Demokratene i Norge;0,10985;370584;154;174;328;0,01384;0;0;
12;Hordaland;;;;;HELSE;Helsepartiet;0,2495;370584;399;346;745;0,2495;0;0;
12;Hordaland;;;;;KRISTNE;Partiet De Kristne;0,45446;370584;675;682;1357;-0,39111;0;0;
12;Hordaland;;;;;KYST;Kystpartiet;0,14836;370584;214;229;443;0,05514;0;0;
12;Hordaland;;;;;LIBS;Liberalistene;0,20127;370584;215;386;601;0,20127;0;0;
12;Hordaland;;;;;PIR;Piratpartiet;0,16276;370584;180;306;486;-0,20801;0;0;
12;Hordaland;;;;;FI;Feministisk Initiativ;0,12391;370584;180;190;370;0,12391;0;0;
14;Sogn og Fjordane;;;;;A;Arbeiderpartiet;24,55739;78693;5096;10162;15258;-3,53225;1;0;
14;Sogn og Fjordane;;;;;SV;Sosialistisk Venstreparti;4,47595;78693;1072;1709;2781;1,08224;0;0;
14;Sogn og Fjordane;;;;;RØDT;Rødt;1,27149;78693;294;496;790;0,64048;0;0;
14;Sogn og Fjordane;;;;;SP;Senterpartiet;29,68841;78693;5384;13062;18446;9,05969;1;0;
14;Sogn og Fjordane;;;;;KRF;Kristelig Folkeparti;4,31823;78693;911;1772;2683;-3,77698;1;1;
14;Sogn og Fjordane;;;;;MDG;Miljøpartiet De Grønne;2,26936;78693;720;690;1410;0,58232;0;0;
14;Sogn og Fjordane;;;;;V;Venstre;4,07519;78693;833;1699;2532;-2,27248;0;0;
14;Sogn og Fjordane;;;;;H;Høyre;18,62486;78693;3722;7850;11572;-0,39528;1;0;
14;Sogn og Fjordane;;;;;FRP;Fremskrittspartiet;9,90311;78693;2165;3988;6153;-0,89922;0;0;
14;Sogn og Fjordane;;;;;ALLI;Alliansen;0,06921;78693;22;21;43;0,06921;0;0;
14;Sogn og Fjordane;;;;;DEMN;Demokratene i Norge;0,06921;78693;11;32;43;0,0169;0;0;
14;Sogn og Fjordane;;;;;HELSE;Helsepartiet;0,17704;78693;38;72;110;0,17704;0;0;
14;Sogn og Fjordane;;;;;KRISTNE;Partiet De Kristne;0,41042;78693;126;129;255;-0,43147;0;0;
14;Sogn og Fjordane;;;;;LIBS;Liberalistene;0,09013;78693;22;34;56;0,09013;0;0;
15;Møre og Romsdal;;;;;A;Arbeiderpartiet;21,33394;190887;11016;20337;31353;-3,82326;2;0;
15;Møre og Romsdal;;;;;SV;Sosialistisk Venstreparti;3,90915;190887;2151;3594;5745;1,44423;0;0;
15;Møre og Romsdal;;;;;RØDT;Rødt;1,23092;190887;795;1014;1809;0,78288;0;0;
15;Møre og Romsdal;;;;;SP;Senterpartiet;12,95972;190887;5635;13411;19046;4,76033;1;0;
15;Møre og Romsdal;;;;;KRF;Kristelig Folkeparti;6,13556;190887;3028;5989;9017;-2,78754;1;1;
15;Møre og Romsdal;;;;;MDG;Miljøpartiet De Grønne;2,15496;190887;1449;1718;3167;0,78502;0;0;
15;Møre og Romsdal;;;;;V;Venstre;3,4621;190887;1589;3499;5088;-2,09652;0;0;
15;Møre og Romsdal;;;;;H;Høyre;23,61683;190887;11674;23034;34708;-2,61929;3;0;
15;Møre og Romsdal;;;;;FRP;Fremskrittspartiet;22,28452;190887;12178;20572;32750;2,22325;2;0;
15;Møre og Romsdal;;;;;ALLI;Alliansen;0,12316;190887;64;117;181;0,12316;0;0;
15;Møre og Romsdal;;;;;DEMN;Demokratene i Norge;0,08778;190887;62;67;129;0,02218;0;0;
15;Møre og Romsdal;;;;;KRISTNE;Partiet De Kristne;0,50421;190887;311;430;741;-0,56634;0;0;
15;Møre og Romsdal;;;;;KYST;Kystpartiet;0,08233;190887;59;62;121;-0,02863;0;0;
15;Møre og Romsdal;;;;;LIBS;Liberalistene;0,11908;190887;79;96;175;0,11908;0;0;
15;Møre og Romsdal;;;;;PP;Pensjonistpartiet;0,54299;190887;380;418;798;0,54299;0;0;
15;Møre og Romsdal;;;;;NML;Nordmørslista;1,45275;190887;711;1424;2135;1,45275;0;0;
16;Sør-Trøndelag;;;;;A;Arbeiderpartiet;32,7895;232067;24257;35353;59610;-3,90575;4;0;
16;Sør-Trøndelag;;;;;SV;Sosialistisk Venstreparti;7,70534;232067;5866;8142;14008;2,00754;1;0;
16;Sør-Trøndelag;;;;;RØDT;Rødt;2,93956;232067;2484;2860;5344;1,98898;0;0;
16;Sør-Trøndelag;;;;;SP;Senterpartiet;10,67625;232067;6333;13076;19409;4,2035;1;0;
16;Sør-Trøndelag;;;;;KRF;Kristelig Folkeparti;2,73603;232067;1956;3018;4974;-1,00585;0;0;
16;Sør-Trøndelag;;;;;MDG;Miljøpartiet De Grønne;3,89558;232067;3455;3627;7082;0,73647;0;0;
16;Sør-Trøndelag;;;;;V;Venstre;4,06225;232067;2848;4537;7385;-1,33219;1;1;
16;Sør-Trøndelag;;;;;H;Høyre;20,74798;232067;14897;22822;37719;-1,4513;2;0;
16;Sør-Trøndelag;;;;;FRP;Fremskrittspartiet;11,68783;232067;8361;12887;21248;-1,92428;1;0;
16;Sør-Trøndelag;;;;;ALLI;Alliansen;0,14522;232067;105;159;264;0,14522;0;0;
16;Sør-Trøndelag;;;;;DEMN;Demokratene i Norge;0,09241;232067;79;89;168;-0,02734;0;0;
16;Sør-Trøndelag;;;;;HELSE;Helsepartiet;0,22278;232067;191;214;405;0,22278;0;0;
16;Sør-Trøndelag;;;;;KRISTNE;Partiet De Kristne;0,12377;232067;92;133;225;-0,1739;0;0;
16;Sør-Trøndelag;;;;;KYST;Kystpartiet;0,07866;232067;45;98;143;-0,0006;0;0;
16;Sør-Trøndelag;;;;;LIBS;Liberalistene;0,20242;232067;155;213;368;0,20242;0;0;
16;Sør-Trøndelag;;;;;PIR;Piratpartiet;0,19857;232067;150;211;361;-0,29012;0;0;
16;Sør-Trøndelag;;;;;PP;Pensjonistpartiet;1,69586;232067;1675;1408;3083;0,78918;0;0;
17;Nord-Trøndelag;;;;;A;Arbeiderpartiet;34,20388;102031;9860;16962;26822;-7,69677;2;0;
17;Nord-Trøndelag;;;;;SV;Sosialistisk Venstreparti;5,03838;102031;1453;2498;3951;1,64492;0;0;
17;Nord-Trøndelag;;;;;RØDT;Rødt;1,63483;102031;538;744;1282;1,08189;0;0;
17;Nord-Trøndelag;;;;;SP;Senterpartiet;24,42679;102031;5791;13364;19155;7,69999;1;0;
17;Nord-Trøndelag;;;;;KRF;Kristelig Folkeparti;2,69708;102031;772;1343;2115;-0,84148;0;0;
17;Nord-Trøndelag;;;;;MDG;Miljøpartiet De Grønne;1,76745;102031;653;733;1386;0,3936;0;0;
17;Nord-Trøndelag;;;;;V;Venstre;2,24183;102031;636;1122;1758;-1,88627;1;1;
17;Nord-Trøndelag;;;;;H;Høyre;14,75172;102031;4144;7424;11568;0,20531;1;0;
17;Nord-Trøndelag;;;;;FRP;Fremskrittspartiet;11,49481;102031;3321;5693;9014;-1,40584;0;0;
17;Nord-Trøndelag;;;;;ALLI;Alliansen;0,11604;102031;40;51;91;0,11604;0;0;
17;Nord-Trøndelag;;;;;DEMN;Demokratene i Norge;0,12497;102031;47;51;98;0,0753;0;0;
17;Nord-Trøndelag;;;;;HELSE;Helsepartiet;0,37619;102031;111;184;295;0,37619;0;0;
17;Nord-Trøndelag;;;;;KRISTNE;Partiet De Kristne;0,21551;102031;75;94;169;-0,15442;0;0;
17;Nord-Trøndelag;;;;;KYST;Kystpartiet;0,07779;102031;25;36;61;-0,02809;0;0;
17;Nord-Trøndelag;;;;;LIBS;Liberalistene;0,09947;102031;27;51;78;0,09947;0;0;
17;Nord-Trøndelag;;;;;PIR;Piratpartiet;0,14282;102031;49;63;112;-0,13038;0;0;
17;Nord-Trøndelag;;;;;PP;Pensjonistpartiet;0,59043;102031;254;209;463;0,59043;0;0;
18;Nordland;;;;;A;Arbeiderpartiet;26,03351;181324;13554;21642;35196;-9,03619;2;0;
18;Nordland;;;;;SV;Sosialistisk Venstreparti;7,00248;181324;3294;6173;9467;1,82039;1;1;
18;Nordland;;;;;RØDT;Rødt;2,88842;181324;1625;2280;3905;1,26484;0;0;
18;Nordland;;;;;SP;Senterpartiet;18,64492;181324;8539;16668;25207;11,71471;2;0;
18;Nordland;;;;;KRF;Kristelig Folkeparti;2,42908;181324;1182;2102;3284;-1,23672;0;0;
18;Nordland;;;;;MDG;Miljøpartiet De Grønne;2,16872;181324;1342;1590;2932;0,17826;0;0;
18;Nordland;;;;;V;Venstre;2,59551;181324;1271;2238;3509;-1,10931;0;0;
18;Nordland;;;;;H;Høyre;20,17308;181324;9969;17304;27273;-1,0377;2;0;
18;Nordland;;;;;FRP;Fremskrittspartiet;16,45623;181324;8369;13879;22248;-2,31543;2;0;
18;Nordland;;;;;ALLI;Alliansen;0,09394;181324;57;70;127;0,09394;0;0;
18;Nordland;;;;;DEMN;Demokratene i Norge;0,13758;181324;69;117;186;0,09256;0;0;
18;Nordland;;;;;HELSE;Helsepartiet;0,4549;181324;252;363;615;0,4549;0;0;
18;Nordland;;;;;KRISTNE;Partiet De Kristne;0,21303;181324;141;147;288;-0,31066;0;0;
18;Nordland;;;;;KYST;Kystpartiet;0,31066;181324;131;289;420;-0,00745;0;0;
18;Nordland;;;;;LIBS;Liberalistene;0,19897;181324;102;167;269;0,19897;0;0;
18;Nordland;;;;;NKP;Norges Kommunistiske Parti;0,04364;181324;21;38;59;0,00013;0;0;
18;Nordland;;;;;PIR;Piratpartiet;0,15533;181324;63;147;210;-0,18304;0;0;
19;Troms Romsa;;;;;A;Arbeiderpartiet;24,02767;121560;7725;14157;21882;-7,05424;2;0;
19;Troms Romsa;;;;;SV;Sosialistisk Venstreparti;10,11639;121560;3224;5989;9213;3,67253;1;1;
19;Troms Romsa;;;;;RØDT;Rødt;2,28506;121560;925;1156;2081;0,46337;0;0;
19;Troms Romsa;;;;;SP;Senterpartiet;14,97749;121560;4123;9517;13640;8,59253;1;0;
19;Troms Romsa;;;;;KRF;Kristelig Folkeparti;2,64412;121560;760;1648;2408;-1,50112;0;0;
19;Troms Romsa;;;;;MDG;Miljøpartiet De Grønne;2,84177;121560;1144;1444;2588;0,36075;0;0;
19;Troms Romsa;;;;;V;Venstre;2,9362;121560;844;1830;2674;-1,24075;0;0;
19;Troms Romsa;;;;;H;Høyre;20,54354;121560;6371;12338;18709;-1,73243;1;0;
19;Troms Romsa;;;;;FRP;Fremskrittspartiet;18,23213;121560;5649;10955;16604;-1,38382;1;0;
19;Troms Romsa;;;;;ALLI;Alliansen;0,12628;121560;38;77;115;0,12628;0;0;
19;Troms Romsa;;;;;DEMN;Demokratene i Norge;0,13067;121560;49;70;119;0,08875;0;0;
19;Troms Romsa;;;;;HELSE;Helsepartiet;0,31734;121560;120;169;289;0,31734;0;0;
19;Troms Romsa;;;;;KRISTNE;Partiet De Kristne;0,17569;121560;54;106;160;-0,1891;0;0;
19;Troms Romsa;;;;;KYST;Kystpartiet;0,18996;121560;52;121;173;-0,35042;0;0;
19;Troms Romsa;;;;;LIBS;Liberalistene;0,32942;121560;103;197;300;0,32942;0;0;
19;Troms Romsa;;;;;NKP;Norges Kommunistiske Parti;0,06149;121560;24;32;56;-0,02687;0;0;
19;Troms Romsa;;;;;NORDT;Nordting;0,06479;121560;18;41;59;0,06479;0;0;
20;Finnmark Finnmárku;;;;;A;Arbeiderpartiet;31,97204;54099;4907;7533;12440;-7,86704;2;0;
20;Finnmark Finnmárku;;;;;SV;Sosialistisk Venstreparti;8,83343;54099;1320;2117;3437;3,65008;0;0;
20;Finnmark Finnmárku;;;;;RØDT;Rødt;1,5472;54099;307;295;602;0,61515;0;0;
20;Finnmark Finnmárku;;;;;SP;Senterpartiet;14,88088;54099;2397;3393;5790;11,15534;1;0;
20;Finnmark Finnmárku;;;;;KRF;Kristelig Folkeparti;2,07664;54099;337;471;808;-0,88945;0;0;
20;Finnmark Finnmárku;;;;;MDG;Miljøpartiet De Grønne;2,1486;54099;430;406;836;-0,09256;0;0;
20;Finnmark Finnmárku;;;;;V;Venstre;4,22524;54099;741;903;1644;0,61654;0;0;
20;Finnmark Finnmárku;;;;;H;Høyre;14,39256;54099;2214;3386;5600;-6,93568;1;1;
20;Finnmark Finnmárku;;;;;FRP;Fremskrittspartiet;17,97528;54099;3191;3803;6994;1,94192;1;0;
20;Finnmark Finnmárku;;;;;ALLI;Alliansen;0,20304;54099;43;36;79;0,20304;0;0;
20;Finnmark Finnmárku;;;;;DEMN;Demokratene i Norge;0,18248;54099;29;42;71;0,1214;0;0;
20;Finnmark Finnmárku;;;;;HELSE;Helsepartiet;0,35724;54099;67;72;139;0,35724;0;0;
20;Finnmark Finnmárku;;;;;KRISTNE;Partiet De Kristne;0,36238;54099;65;76;141;-0,52718;0;0;
20;Finnmark Finnmárku;;;;;KYST;Kystpartiet;0,42664;54099;79;87;166;-1,03384;0;0;
20;Finnmark Finnmárku;;;;;LIBS;Liberalistene;0,22103;54099;41;45;86;0,22103;0;0;
20;Finnmark Finnmárku;;;;;PIR;Piratpartiet;0,19533;54099;30;46;76;-0,18705;0;0;`;

const translate2017 = {
	"Finnmark Finnmárku": "Finnmark",
	"Troms Romsa": "Troms",
	"A": "AP",
	"KRISTNE": "PDK",
	"RØDT": "R",
	"LIBS": "LIB",
	"DEMN": "ND",
	"ALLI": "AAN",
	"NML": "NORDM",
	"SAMFS": "SAMF",
};

const election2017 = {
	"defaults": merge3({"friends": "R+SV+AP+SP+MDG, KRF+V+H+FRP"}, DEFAULTS_BEFORE_2025, DEFAULTS_COMMON),

	// https://no.wikipedia.org/wiki/Historisk_mandatfordeling_p%C3%A5_fylker_ved_stortingsvalg#2013%E2%80%932019
	// TODO: where can I find the official numbers???
	// TODO: https://www.regjeringen.no/contentassets/728e99d8bd3f432183e848f7a38e15e4/grunnlag-for-arealberegning-av-valgdistrikter.pdf
	// TODO: https://www.stortinget.no/no/Saker-og-publikasjoner/Publikasjoner/Referater/Stortinget/2011-2012/120605/referatsaker/?
	"districts": {
		"Østfold": {"area": 4182, "population": 278352},
		"Akershus": {"area": 4918, "population": 556254},
		"Oslo": {"area": 454, "population": 613285},
		"Hedmark": {"area": 27398, "population": 192791},
		"Oppland": {"area": 25192, "population": 187147},
		"Buskerud": {"area": 14911, "population": 265164},
		"Vestfold": {"area": 2224, "population": 236424},
		"Telemark": {"area": 15298, "population": 170023},
		"Aust-Agder": {"area": 9157, "population": 111495},
		"Vest-Agder": {"area": 7277, "population": 174324},
		"Rogaland": {"area": 9376, "population": 443115},
		"Hordaland": {"area": 15440, "population": 490570},
		"Sogn og Fjordane": {"area": 18623, "population": 108201},
		"Møre og Romsdal": {"area": 15115, "population": 256628},
		"Sør-Trøndelag": {"area": 18856, "population": 297950},
		"Nord-Trøndelag": {"area": 22415, "population": 133390},
		"Nordland": {"area": 38462, "population": 238320},
		"Troms": {"area": 25870, "population": 158650},
		"Finnmark": {"area": 48617, "population": 73787},
	},

	"votes": parseVotes(file2017, translate2017),
};
