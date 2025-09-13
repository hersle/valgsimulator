// https://valgresultat.no/valg/2009/st

const file2009 = `01;Østfold;;;;;A;Arbeiderpartiet;39,34075;201989;9896;48717;58613;3,59944;4;0;
01;Østfold;;;;;SV;Sosialistisk Venstreparti;4,36344;201989;1398;5103;6501;-2,86861;0;0;
01;Østfold;;;;;RØDT;Rødt;0,69871;201989;227;814;1041;0,04978;0;0;
01;Østfold;;;;;SP;Senterpartiet;4,86616;201989;961;6289;7250;-0,01501;0;0;
01;Østfold;;;;;KRF;Kristelig Folkeparti;5,76489;201989;1623;6966;8589;-1,11907;1;1;
01;Østfold;;;;;V;Venstre;2,5096;201989;817;2922;3739;-1,49936;0;0;
01;Østfold;;;;;H;Høyre;14,79381;201989;3604;18437;22041;2,85598;1;0;
01;Østfold;;;;;FRP;Fremskrittspartiet;26,07794;201989;7217;31636;38853;-0,78066;3;0;
01;Østfold;;;;;AML;AML;0,11947;201989;33;145;178;-0,04377;0;0;
01;Østfold;;;;;DEMN;Demokratene i Norge;0,07383;201989;43;67;110;-0,01184;0;0;
01;Østfold;;;;;KSP;Kristent Samlingsparti;0,1678;201989;44;206;250;0,01332;0;0;
01;Østfold;;;;;KYST;Kystpartiet;0,08658;201989;25;104;129;-0,1792;0;0;
01;Østfold;;;;;MDG;Miljøpartiet De Grønne;0,25103;201989;81;293;374;0,1296;0;0;
01;Østfold;;;;;PP;Pensjonistpartiet;0,88598;201989;321;999;1320;-0,02469;0;0;
02;Akershus;;;;;A;Arbeiderpartiet;33,68121;375622;22600;78641;101241;3,15674;5;0;
02;Akershus;;;;;SV;Sosialistisk Venstreparti;5,66893;375622;4411;12629;17040;-2,18129;1;0;
02;Akershus;;;;;RØDT;Rødt;0,85367;375622;692;1874;2566;0,06395;0;0;
02;Akershus;;;;;SP;Senterpartiet;3,13887;375622;1811;7624;9435;-0,80381;0;0;
02;Akershus;;;;;KRF;Kristelig Folkeparti;3,09662;375622;2418;6890;9308;-0,80569;1;1;
02;Akershus;;;;;V;Venstre;4,88646;375622;3521;11167;14688;-2,71282;1;0;
02;Akershus;;;;;H;Høyre;23,12317;375622;14540;54965;69505;2,52536;4;0;
02;Akershus;;;;;FRP;Fremskrittspartiet;24,3857;375622;17717;55583;73300;0,92346;4;0;
02;Akershus;;;;;DEMN;Demokratene i Norge;0,05456;375622;48;116;164;0,00862;0;0;
02;Akershus;;;;;ES;ES;0,03427;375622;26;77;103;0,03427;0;0;
02;Akershus;;;;;KSP;Kristent Samlingsparti;0,10213;375622;73;234;307;0,01512;0;0;
02;Akershus;;;;;KYST;Kystpartiet;0,0509;375622;30;123;153;-0,14366;0;0;
02;Akershus;;;;;MDG;Miljøpartiet De Grønne;0,3929;375622;323;858;1181;0,22584;0;0;
02;Akershus;;;;;PP;Pensjonistpartiet;0,53063;375622;622;973;1595;-0,20097;0;0;
03;Oslo;;;;;A;Arbeiderpartiet;35,00384;416168;31285;81818;113103;3,51572;6;0;
03;Oslo;;;;;SV;Sosialistisk Venstreparti;10,2765;416168;9592;23613;33205;-3,13977;2;0;
03;Oslo;;;;;RØDT;Rødt;3,99764;416168;2887;10030;12917;0,99376;0;0;
03;Oslo;;;;;SP;Senterpartiet;0,96745;416168;955;2171;3126;-0,09137;0;0;
03;Oslo;;;;;KRF;Kristelig Folkeparti;2,71915;416168;2955;5831;8786;-0,89703;1;1;
03;Oslo;;;;;V;Venstre;6,43236;416168;5872;14912;20784;-2,8409;1;0;
03;Oslo;;;;;H;Høyre;21,66374;416168;18712;51287;69999;1,86993;4;0;
03;Oslo;;;;;FRP;Fremskrittspartiet;17,62618;416168;18333;38620;56953;0,37419;3;0;
03;Oslo;;;;;DEMN;Demokratene i Norge;0,04859;416168;59;98;157;-0,03171;0;0;
03;Oslo;;;;;DLF;Det Liberale Folkepartiet;0,05261;416168;68;102;170;0,01894;0;0;
03;Oslo;;;;;KSP;Kristent Samlingsparti;0,09037;416168;97;195;292;0,05249;0;0;
03;Oslo;;;;;KYST;Kystpartiet;0,04488;416168;48;97;145;-0,13354;0;0;
03;Oslo;;;;;MDG;Miljøpartiet De Grønne;0,56574;416168;511;1317;1828;0,34944;0;0;
03;Oslo;;;;;NKP;Norges Kommunistiske Parti;0,03559;416168;42;73;115;-0,01006;0;0;
03;Oslo;;;;;NRA;NRA;0,01671;416168;12;42;54;0,01671;0;0;
03;Oslo;;;;;PP;Pensjonistpartiet;0,35467;416168;518;628;1146;-0,08116;0;0;
03;Oslo;;;;;SAMT;SAMT;0,0817;416168;55;209;264;0,0817;0;0;
03;Oslo;;;;;SFP;Samfunnspartiet;0,02228;416168;21;51;72;0,02228;0;0;
04;Hedmark;;;;;A;Arbeiderpartiet;47,10279;146649;12120;38735;50855;1,21033;4;0;
04;Hedmark;;;;;SV;Sosialistisk Venstreparti;6,55577;146649;1907;5171;7078;-2,21656;1;1;
04;Hedmark;;;;;RØDT;Rødt;0,58352;146649;221;409;630;0,07445;0;0;
04;Hedmark;;;;;SP;Senterpartiet;10,27731;146649;2120;8976;11096;0,00141;1;0;
04;Hedmark;;;;;KRF;Kristelig Folkeparti;2,45633;146649;800;1852;2652;-0,74262;0;0;
04;Hedmark;;;;;V;Venstre;2,45448;146649;822;1828;2650;-1,14991;0;0;
04;Hedmark;;;;;H;Høyre;10,18284;146649;2571;8423;10994;2,14229;1;0;
04;Hedmark;;;;;FRP;Fremskrittspartiet;17,90008;146649;4714;14612;19326;0,8854;1;0;
04;Hedmark;;;;;DEMN;Demokratene i Norge;0,06947;146649;29;46;75;0,02492;0;0;
04;Hedmark;;;;;DLF;Det Liberale Folkepartiet;0,05372;146649;22;36;58;0,05372;0;0;
04;Hedmark;;;;;KYST;Kystpartiet;0,07965;146649;31;55;86;-0,13215;0;0;
04;Hedmark;;;;;MDG;Miljøpartiet De Grønne;0,3214;146649;125;222;347;0,3214;0;0;
04;Hedmark;;;;;PP;Pensjonistpartiet;1,96265;146649;672;1447;2119;-0,3027;0;0;
05;Oppland;;;;;A;Arbeiderpartiet;45,76645;141243;9784;37944;47728;1,56734;3;0;
05;Oppland;;;;;SV;Sosialistisk Venstreparti;5,14642;141243;1590;3777;5367;-2,74728;1;1;
05;Oppland;;;;;RØDT;Rødt;0,58685;141243;207;405;612;0,03719;0;0;
05;Oppland;;;;;SP;Senterpartiet;12,38134;141243;2129;10783;12912;-0,33754;1;0;
05;Oppland;;;;;KRF;Kristelig Folkeparti;3,05122;141243;890;2292;3182;-0,96117;0;0;
05;Oppland;;;;;V;Venstre;2,97547;141243;881;2222;3103;-1,38994;0;0;
05;Oppland;;;;;H;Høyre;11,16449;141243;2365;9278;11643;3,13408;1;0;
05;Oppland;;;;;FRP;Fremskrittspartiet;17,52105;141243;4044;14228;18272;0,4714;1;0;
05;Oppland;;;;;DEMN;Demokratene i Norge;0,04699;141243;15;34;49;0,0011;0;0;
05;Oppland;;;;;KSP;Kristent Samlingsparti;0,16589;141243;46;127;173;0,04791;0;0;
05;Oppland;;;;;KYST;Kystpartiet;0,05466;141243;14;43;57;-0,19723;0;0;
05;Oppland;;;;;MDG;Miljøpartiet De Grønne;0,33657;141243;126;225;351;0,19424;0;0;
05;Oppland;;;;;PP;Pensjonistpartiet;0,8026;141243;283;554;837;0,26324;0;0;
06;Buskerud;;;;;A;Arbeiderpartiet;37,08356;188044;11893;40858;52751;0,88587;4;0;
06;Buskerud;;;;;SV;Sosialistisk Venstreparti;4,57929;188044;1803;4711;6514;-2,70552;0;0;
06;Buskerud;;;;;RØDT;Rødt;0,62145;188044;243;641;884;-0,0277;0;0;
06;Buskerud;;;;;SP;Senterpartiet;6,21586;188044;1562;7280;8842;-0,15844;1;1;
06;Buskerud;;;;;KRF;Kristelig Folkeparti;3,16347;188044;1255;3245;4500;-1,20414;0;0;
06;Buskerud;;;;;V;Venstre;3,03974;188044;1134;3190;4324;-2,09127;0;0;
06;Buskerud;;;;;H;Høyre;19,39416;188044;5633;21955;27588;4,32178;2;0;
06;Buskerud;;;;;FRP;Fremskrittspartiet;25,14183;188044;8284;27480;35764;1,07787;2;0;
06;Buskerud;;;;;DEMN;Demokratene i Norge;0,06046;188044;38;48;86;-0,01524;0;0;
06;Buskerud;;;;;KSP;Kristent Samlingsparti;0,142;188044;53;149;202;0,142;0;0;
06;Buskerud;;;;;KYST;Kystpartiet;0,07663;188044;27;82;109;-0,16618;0;0;
06;Buskerud;;;;;MDG;Miljøpartiet De Grønne;0,28612;188044;111;296;407;0,16543;0;0;
06;Buskerud;;;;;NKP;Norges Kommunistiske Parti;0,0696;188044;24;75;99;-0,00682;0;0;
06;Buskerud;;;;;VIGRID;VIGRID;0,12584;188044;35;144;179;0,12584;0;0;
07;Vestfold;;;;;A;Arbeiderpartiet;33,68671;171423;10119;34050;44169;3,44616;3;0;
07;Vestfold;;;;;SV;Sosialistisk Venstreparti;6,52166;171423;2206;6345;8551;-1,84063;1;1;
07;Vestfold;;;;;RØDT;Rødt;0,64675;171423;258;590;848;0,02701;0;0;
07;Vestfold;;;;;SP;Senterpartiet;3,24672;171423;684;3573;4257;-0,35027;0;0;
07;Vestfold;;;;;KRF;Kristelig Folkeparti;4,70114;171423;1557;4607;6164;-1,31447;0;0;
07;Vestfold;;;;;V;Venstre;3,008;171423;1106;2838;3944;-2,03119;0;0;
07;Vestfold;;;;;H;Høyre;19,64047;171423;5343;20409;25752;4,32871;1;0;
07;Vestfold;;;;;FRP;Fremskrittspartiet;27,21768;171423;8450;27237;35687;-2,09519;2;0;
07;Vestfold;;;;;DEMN;Demokratene i Norge;0,08084;171423;29;77;106;-0,04837;0;0;
07;Vestfold;;;;;KSP;Kristent Samlingsparti;0,22804;171423;70;229;299;0,22804;0;0;
07;Vestfold;;;;;KYST;Kystpartiet;0,10677;171423;26;114;140;-0,16325;0;0;
07;Vestfold;;;;;MDG;Miljøpartiet De Grønne;0,37753;171423;136;359;495;0,13613;0;0;
07;Vestfold;;;;;NPAT;NPAT;0,13957;171423;37;146;183;0,13957;0;0;
07;Vestfold;;;;;PP;Pensjonistpartiet;0,39812;171423;183;339;522;-0,0429;0;0;
08;Telemark;;;;;A;Arbeiderpartiet;41,65668;126972;7280;32016;39296;2,33085;3;0;
08;Telemark;;;;;SV;Sosialistisk Venstreparti;5,32157;126972;1309;3711;5020;-3,73297;0;0;
08;Telemark;;;;;RØDT;Rødt;1,21591;126972;297;850;1147;0,41794;0;0;
08;Telemark;;;;;SP;Senterpartiet;5,49543;126972;810;4374;5184;-1,3368;0;0;
08;Telemark;;;;;KRF;Kristelig Folkeparti;6,6138;126972;1379;4860;6239;-1,19115;1;1;
08;Telemark;;;;;V;Venstre;2,51662;126972;588;1786;2374;-1,16163;0;0;
08;Telemark;;;;;H;Høyre;13,15022;126972;2087;10318;12405;3,79565;1;0;
08;Telemark;;;;;FRP;Fremskrittspartiet;23,0121;126972;4207;17501;21708;0,88158;1;0;
08;Telemark;;;;;DEMN;Demokratene i Norge;0,07209;126972;16;52;68;-0,06898;0;0;
08;Telemark;;;;;KSP;Kristent Samlingsparti;0,25866;126972;56;188;244;0,00811;0;0;
08;Telemark;;;;;KYST;Kystpartiet;0,0636;126972;10;50;60;-0,22695;0;0;
08;Telemark;;;;;MDG;Miljøpartiet De Grønne;0,25442;126972;62;178;240;0,25442;0;0;
08;Telemark;;;;;PP;Pensjonistpartiet;0,36891;126972;107;241;348;0,02993;0;0;
09;Aust-Agder;;;;;A;Arbeiderpartiet;32,4992;79489;4952;14425;19377;3,51659;1;0;
09;Aust-Agder;;;;;SV;Sosialistisk Venstreparti;4,34061;79489;929;1659;2588;-3,4395;0;0;
09;Aust-Agder;;;;;RØDT;Rødt;0,63231;79489;146;231;377;0,17335;0;0;
09;Aust-Agder;;;;;SP;Senterpartiet;4,37583;79489;581;2028;2609;-0,90134;0;0;
09;Aust-Agder;;;;;KRF;Kristelig Folkeparti;11,17522;79489;1842;4821;6663;-1,53912;1;1;
09;Aust-Agder;;;;;V;Venstre;3,44498;79489;727;1327;2054;-1,94309;0;0;
09;Aust-Agder;;;;;H;Høyre;16,30411;79489;2370;7351;9721;3,61707;1;0;
09;Aust-Agder;;;;;FRP;Fremskrittspartiet;26,06041;79489;4301;11237;15538;1,08046;1;0;
09;Aust-Agder;;;;;DEMN;Demokratene i Norge;0,08051;79489;19;29;48;-0,03039;0;0;
09;Aust-Agder;;;;;KSP;Kristent Samlingsparti;0,27506;79489;43;121;164;0,00719;0;0;
09;Aust-Agder;;;;;KYST;Kystpartiet;0,05367;79489;7;25;32;-0,2432;0;0;
09;Aust-Agder;;;;;MDG;Miljøpartiet De Grønne;0,24823;79489;54;94;148;0,24823;0;0;
09;Aust-Agder;;;;;PP;Pensjonistpartiet;0,50987;79489;114;190;304;-0,32444;0;0;
10;Vest-Agder;;;;;A;Arbeiderpartiet;26,46734;121754;5506;18944;24450;2,53668;1;0;
10;Vest-Agder;;;;;SV;Sosialistisk Venstreparti;3,94791;121754;1115;2532;3647;-2,574;1;1;
10;Vest-Agder;;;;;RØDT;Rødt;0,46223;121754;163;264;427;0,11086;0;0;
10;Vest-Agder;;;;;SP;Senterpartiet;3,56795;121754;574;2722;3296;-0,65732;0;0;
10;Vest-Agder;;;;;KRF;Kristelig Folkeparti;15,51993;121754;3203;11134;14337;-3,38629;1;0;
10;Vest-Agder;;;;;V;Venstre;3,1133;121754;742;2134;2876;-2,30796;0;0;
10;Vest-Agder;;;;;H;Høyre;17,5518;121754;3182;13032;16214;2,84758;1;0;
10;Vest-Agder;;;;;FRP;Fremskrittspartiet;27,38314;121754;5830;19466;25296;3,43143;2;0;
10;Vest-Agder;;;;;DEMN;Demokratene i Norge;0,49904;121754;128;333;461;0,15321;0;0;
10;Vest-Agder;;;;;KSP;Kristent Samlingsparti;0,34316;121754;63;254;317;0,04388;0;0;
10;Vest-Agder;;;;;KYST;Kystpartiet;0,08444;121754;12;66;78;-0,20264;0;0;
10;Vest-Agder;;;;;MDG;Miljøpartiet De Grønne;0,34857;121754;111;211;322;0,11137;0;0;
10;Vest-Agder;;;;;NKP;Norges Kommunistiske Parti;0,03681;121754;10;24;34;-0,01418;0;0;
10;Vest-Agder;;;;;PP;Pensjonistpartiet;0,6744;121754;238;385;623;0,1734;0;0;
11;Rogaland;;;;;A;Arbeiderpartiet;26,06689;296220;11805;47340;59145;1,46858;3;0;
11;Rogaland;;;;;SV;Sosialistisk Venstreparti;4,67569;296220;2448;8161;10609;-1,62266;1;1;
11;Rogaland;;;;;RØDT;Rødt;0,40018;296220;291;617;908;-0,08962;0;0;
11;Rogaland;;;;;SP;Senterpartiet;5,79294;296220;2124;11020;13144;-0,5077;1;0;
11;Rogaland;;;;;KRF;Kristelig Folkeparti;11,25665;296220;5632;19909;25541;-0,92578;1;0;
11;Rogaland;;;;;V;Venstre;4,43064;296220;2347;7706;10053;-2,60516;0;0;
11;Rogaland;;;;;H;Høyre;19,51943;296220;7823;36466;44289;4,22925;3;0;
11;Rogaland;;;;;FRP;Fremskrittspartiet;26,45694;296220;13473;46557;60030;0,36678;4;0;
11;Rogaland;;;;;DEMN;Demokratene i Norge;0,05641;296220;35;93;128;-0,04155;0;0;
11;Rogaland;;;;;DLF;Det Liberale Folkepartiet;0,05377;296220;26;96;122;0,05377;0;0;
11;Rogaland;;;;;KSP;Kristent Samlingsparti;0,30278;296220;143;544;687;0,00478;0;0;
11;Rogaland;;;;;KYST;Kystpartiet;0,09828;296220;63;160;223;-0,45698;0;0;
11;Rogaland;;;;;MDG;Miljøpartiet De Grønne;0,25166;296220;146;425;571;0,12028;0;0;
11;Rogaland;;;;;NKP;Norges Kommunistiske Parti;0,02688;296220;18;43;61;0,02688;0;0;
11;Rogaland;;;;;PP;Pensjonistpartiet;0,61085;296220;356;1030;1386;0,21809;0;0;
12;Hordaland;;;;;A;Arbeiderpartiet;30,45744;344321;23839;57797;81636;2,55013;5;0;
12;Hordaland;;;;;SV;Sosialistisk Venstreparti;5,48365;344321;4800;9898;14698;-2,01644;1;0;
12;Hordaland;;;;;RØDT;Rødt;2,53476;344321;2026;4768;6794;-0,90653;0;0;
12;Hordaland;;;;;SP;Senterpartiet;5,50977;344321;3404;11364;14768;0,4744;1;0;
12;Hordaland;;;;;KRF;Kristelig Folkeparti;7,14017;344321;6300;12838;19138;-1,64735;1;0;
12;Hordaland;;;;;V;Venstre;4,61175;344321;4096;8265;12361;-2,42645;0;0;
12;Hordaland;;;;;H;Høyre;20,1714;344321;13986;40080;54066;3,76716;3;0;
12;Hordaland;;;;;FRP;Fremskrittspartiet;22,81324;344321;19331;41816;61147;0,64905;4;1;
12;Hordaland;;;;;DEMN;Demokratene i Norge;0,12387;344321;129;203;332;-0,08146;0;0;
12;Hordaland;;;;;KSP;Kristent Samlingsparti;0,22945;344321;210;405;615;0,05203;0;0;
12;Hordaland;;;;;KYST;Kystpartiet;0,12498;344321;113;222;335;-0,42524;0;0;
12;Hordaland;;;;;MDG;Miljøpartiet De Grønne;0,40405;344321;388;695;1083;0,2557;0;0;
12;Hordaland;;;;;NKP;Norges Kommunistiske Parti;0,0541;344321;56;89;145;-0,0002;0;0;
12;Hordaland;;;;;PP;Pensjonistpartiet;0,25146;344321;336;338;674;-0,12517;0;0;
12;Hordaland;;;;;SALL;SALL;0,08991;344321;50;191;241;0,08991;0;0;
14;Sogn og Fjordane;;;;;A;Arbeiderpartiet;29,59663;78071;3950;13425;17375;0,12997;2;0;
14;Sogn og Fjordane;;;;;SV;Sosialistisk Venstreparti;5,82223;78071;1040;2378;3418;-3,31419;0;0;
14;Sogn og Fjordane;;;;;RØDT;Rødt;0,92154;78071;162;379;541;0,32637;0;0;
14;Sogn og Fjordane;;;;;SP;Senterpartiet;25,17971;78071;2842;11940;14782;4,17803;1;0;
14;Sogn og Fjordane;;;;;KRF;Kristelig Folkeparti;6,78636;78071;1018;2966;3984;-2,17268;0;0;
14;Sogn og Fjordane;;;;;V;Venstre;3,32504;78071;612;1340;1952;-2,48241;0;0;
14;Sogn og Fjordane;;;;;H;Høyre;12,1146;78071;1461;5651;7112;3,72256;1;1;
14;Sogn og Fjordane;;;;;FRP;Fremskrittspartiet;15,81951;78071;2462;6825;9287;0,37495;1;0;
14;Sogn og Fjordane;;;;;DEMN;Demokratene i Norge;0,03747;78071;6;16;22;-0,03713;0;0;
14;Sogn og Fjordane;;;;;KYST;Kystpartiet;0,21122;78071;34;90;124;-0,60941;0;0;
14;Sogn og Fjordane;;;;;MDG;Miljøpartiet De Grønne;0,18567;78071;47;62;109;0,18567;0;0;
15;Møre og Romsdal;;;;;A;Arbeiderpartiet;30,67903;184975;9848;32694;42542;4,54001;3;0;
15;Møre og Romsdal;;;;;SV;Sosialistisk Venstreparti;3,80693;184975;1805;3474;5279;-2,12782;0;0;
15;Møre og Romsdal;;;;;RØDT;Rødt;0,47091;184975;232;421;653;0,06223;0;0;
15;Møre og Romsdal;;;;;SP;Senterpartiet;8,5665;184975;2066;9813;11879;0,154;1;0;
15;Møre og Romsdal;;;;;KRF;Kristelig Folkeparti;8,44679;184975;3165;8548;11713;-2,58325;1;0;
15;Møre og Romsdal;;;;;V;Venstre;3,82064;184975;1416;3882;5298;-3,75596;0;0;
15;Møre og Romsdal;;;;;H;Høyre;16,12196;184975;4520;17836;22356;3,31099;1;0;
15;Møre og Romsdal;;;;;FRP;Fremskrittspartiet;27,37978;184975;9521;28446;37967;1,12379;3;1;
15;Møre og Romsdal;;;;;DEMN;Demokratene i Norge;0,05336;184975;22;52;74;-0,02652;0;0;
15;Møre og Romsdal;;;;;KSP;Kristent Samlingsparti;0,35192;184975;136;352;488;0,03311;0;0;
15;Møre og Romsdal;;;;;KYST;Kystpartiet;0,16082;184975;47;176;223;-0,76852;0;0;
15;Møre og Romsdal;;;;;MDG;Miljøpartiet De Grønne;0,14134;184975;81;115;196;0,06218;0;0;
16;Sør-Trøndelag;;;;;A;Arbeiderpartiet;40,98415;213863;18548;48066;66614;2,71761;4;0;
16;Sør-Trøndelag;;;;;SV;Sosialistisk Venstreparti;7,90717;213863;4429;8423;12852;-2,81362;1;0;
16;Sør-Trøndelag;;;;;RØDT;Rødt;1,26557;213863;755;1302;2057;0,1381;0;0;
16;Sør-Trøndelag;;;;;SP;Senterpartiet;7,26178;213863;2274;9529;11803;-1,1977;1;0;
16;Sør-Trøndelag;;;;;KRF;Kristelig Folkeparti;3,80777;213863;1862;4327;6189;-1,05892;1;1;
16;Sør-Trøndelag;;;;;V;Venstre;3,61212;213863;1839;4032;5871;-0,8536;0;0;
16;Sør-Trøndelag;;;;;H;Høyre;13,89661;213863;6050;16537;22587;1,4146;1;0;
16;Sør-Trøndelag;;;;;FRP;Fremskrittspartiet;19,61719;213863;9051;22834;31885;1,84769;2;0;
16;Sør-Trøndelag;;;;;DEMN;Demokratene i Norge;0,13474;213863;83;136;219;-0,01107;0;0;
16;Sør-Trøndelag;;;;;KSP;Kristent Samlingsparti;0,14151;213863;81;149;230;0,02895;0;0;
16;Sør-Trøndelag;;;;;KYST;Kystpartiet;0,1612;213863;57;205;262;-0,28582;0;0;
16;Sør-Trøndelag;;;;;MDG;Miljøpartiet De Grønne;0,51312;213863;320;514;834;0,28289;0;0;
16;Sør-Trøndelag;;;;;NKP;Norges Kommunistiske Parti;0,06583;213863;37;70;107;0,00316;0;0;
16;Sør-Trøndelag;;;;;PP;Pensjonistpartiet;0,63124;213863;440;586;1026;-0,15344;0;0;
17;Nord-Trøndelag;;;;;A;Arbeiderpartiet;43,45832;97830;7337;24129;31466;3,42587;3;0;
17;Nord-Trøndelag;;;;;SV;Sosialistisk Venstreparti;6,47055;97830;1368;3317;4685;-4,98191;0;0;
17;Nord-Trøndelag;;;;;RØDT;Rødt;0,61736;97830;140;307;447;0,12239;0;0;
17;Nord-Trøndelag;;;;;SP;Senterpartiet;15,55003;97830;2105;9154;11259;-0,7662;1;0;
17;Nord-Trøndelag;;;;;KRF;Kristelig Folkeparti;4,02873;97830;845;2072;2917;-0,66052;0;0;
17;Nord-Trøndelag;;;;;V;Venstre;2,92659;97830;599;1520;2119;-1,38904;0;0;
17;Nord-Trøndelag;;;;;H;Høyre;8,92894;97830;1482;4983;6465;1,98302;1;1;
17;Nord-Trøndelag;;;;;FRP;Fremskrittspartiet;17,45874;97830;3025;9616;12641;2,57423;1;0;
17;Nord-Trøndelag;;;;;DEMN;Demokratene i Norge;0,0511;97830;8;29;37;0,00201;0;0;
17;Nord-Trøndelag;;;;;KSP;Kristent Samlingsparti;0,17678;97830;39;89;128;0,02543;0;0;
17;Nord-Trøndelag;;;;;KYST;Kystpartiet;0,16021;97830;21;95;116;-0,40839;0;0;
17;Nord-Trøndelag;;;;;MDG;Miljøpartiet De Grønne;0,17264;97830;36;89;125;0,0731;0;0;
18;Nordland;;;;;A;Arbeiderpartiet;39,25275;177796;13385;37527;50912;2,98543;4;0;
18;Nordland;;;;;SV;Sosialistisk Venstreparti;7,74462;177796;3107;6938;10045;-3,47633;1;0;
18;Nordland;;;;;RØDT;Rødt;1,41014;177796;574;1255;1829;0,47965;0;0;
18;Nordland;;;;;SP;Senterpartiet;8,27737;177796;2235;8501;10736;-0,81868;1;0;
18;Nordland;;;;;KRF;Kristelig Folkeparti;3,6838;177796;1344;3434;4778;-0,77789;0;0;
18;Nordland;;;;;V;Venstre;2,27982;177796;943;2014;2957;-0,97614;0;0;
18;Nordland;;;;;H;Høyre;11,49164;177796;3361;11544;14905;3,1157;1;0;
18;Nordland;;;;;FRP;Fremskrittspartiet;24,33406;177796;8663;22899;31562;1,69987;3;1;
18;Nordland;;;;;DEMN;Demokratene i Norge;0,05705;177796;23;51;74;-0,00252;0;0;
18;Nordland;;;;;KSP;Kristent Samlingsparti;0,17347;177796;51;174;225;0,03775;0;0;
18;Nordland;;;;;KYST;Kystpartiet;0,87816;177796;293;846;1139;-2,2549;0;0;
18;Nordland;;;;;MDG;Miljøpartiet De Grønne;0,26445;177796;105;238;343;0,16341;0;0;
18;Nordland;;;;;NKP;Norges Kommunistiske Parti;0,05089;177796;13;53;66;-0,01321;0;0;
18;Nordland;;;;;SFP;Samfunnspartiet;0,05243;177796;24;44;68;0,01925;0;0;
18;Nordland;;;;;TPF;TPF;0,04934;177796;20;44;64;0,04934;0;0;
19;Troms Romsa;;;;;A;Arbeiderpartiet;36,74124;115670;7374;23568;30942;3,73177;3;0;
19;Troms Romsa;;;;;SV;Sosialistisk Venstreparti;7,45108;115670;1886;4389;6275;-2,19239;0;0;
19;Troms Romsa;;;;;RØDT;Rødt;1,47478;115670;431;811;1242;0,30814;0;0;
19;Troms Romsa;;;;;SP;Senterpartiet;8,32977;115670;1289;5726;7015;0,6521;1;1;
19;Troms Romsa;;;;;KRF;Kristelig Folkeparti;3,61214;115670;717;2325;3042;-0,8558;0;0;
19;Troms Romsa;;;;;V;Venstre;2,55296;115670;662;1488;2150;-0,57947;0;0;
19;Troms Romsa;;;;;H;Høyre;12,87879;115670;2287;8559;10846;3,90248;1;0;
19;Troms Romsa;;;;;FRP;Fremskrittspartiet;25,20186;115670;5157;16067;21224;2,32583;2;0;
19;Troms Romsa;;;;;DEMN;Demokratene i Norge;0,05818;115670;13;36;49;0,01299;0;0;
19;Troms Romsa;;;;;KSP;Kristent Samlingsparti;0,18049;115670;46;106;152;-0,00027;0;0;
19;Troms Romsa;;;;;KYST;Kystpartiet;1,1328;115670;199;755;954;-7,45106;0;0;
19;Troms Romsa;;;;;MDG;Miljøpartiet De Grønne;0,30279;115670;91;164;255;0,15533;0;0;
19;Troms Romsa;;;;;NKP;Norges Kommunistiske Parti;0,08312;115670;22;48;70;-0,00964;0;0;
20;Finnmark Finnmárku;;;;;A;Arbeiderpartiet;45,37833;52686;4781;12053;16834;5,05928;3;0;
20;Finnmark Finnmárku;;;;;SV;Sosialistisk Venstreparti;8,05726;52686;1119;1870;2989;-4,81288;0;0;
20;Finnmark Finnmárku;;;;;RØDT;Rødt;0,806;52686;108;191;299;-0,01188;0;0;
20;Finnmark Finnmárku;;;;;SP;Senterpartiet;4,34806;52686;498;1115;1613;-1,7604;0;0;
20;Finnmark Finnmárku;;;;;KRF;Kristelig Folkeparti;2,76572;52686;363;663;1026;-1,26969;0;0;
20;Finnmark Finnmárku;;;;;V;Venstre;2,2832;52686;321;526;847;0,0536;0;0;
20;Finnmark Finnmárku;;;;;H;Høyre;10,70167;52686;1089;2881;3970;1,41887;1;1;
20;Finnmark Finnmárku;;;;;FRP;Fremskrittspartiet;22,31178;52686;2687;5590;8277;4,59374;1;0;
20;Finnmark Finnmárku;;;;;DEMN;Demokratene i Norge;0,07009;52686;4;22;26;-0,00279;0;0;
20;Finnmark Finnmárku;;;;;KSP;Kristent Samlingsparti;0,43939;52686;50;113;163;0,23964;0;0;
20;Finnmark Finnmárku;;;;;KYST;Kystpartiet;2,63094;52686;311;665;976;-1,70139;0;0;
20;Finnmark Finnmárku;;;;;MDG;Miljøpartiet De Grønne;0,20756;52686;34;43;77;0,20756;0;0;`;

const translate2009 = {
	"Finnmark Finnmárku": "Finnmark",
	"Troms Romsa": "Troms",
	"A": "AP",
	"RØDT": "R",
	"DEMN": "ND",
	"NPAT": "NP",
	"VIGRID": "VIGR",
	"AML": "ABORT",
};

const election2009 = {
	// https://no.wikipedia.org/wiki/Historisk_mandatfordeling_p%C3%A5_fylker_ved_stortingsvalg#2005%E2%80%932012
	// TODO: official data?!?!?!
	"districts": {
		"Østfold": {"area": 4182, "population": 256668},
		"Akershus": {"area": 4918, "population": 488618},
		"Oslo": {"area": 454, "population": 521886},
		"Hedmark": {"area": 27397, "population": 188326},
		"Oppland": {"area": 25192, "population": 183690},
		"Buskerud": {"area": 14910, "population": 242331},
		"Vestfold": {"area": 2224, "population": 219480},
		"Telemark": {"area": 15299, "population": 166124},
		"Aust-Agder": {"area": 9157, "population": 103374},
		"Vest-Agder": {"area": 7276, "population": 160127},
		"Rogaland": {"area": 9378, "population": 388848},
		"Hordaland": {"area": 15460, "population": 445059},
		"Sogn og Fjordane": {"area": 18623, "population": 107222},
		"Møre og Romsdal": {"area": 15121, "population": 244570},
		"Sør-Trøndelag": {"area": 18848, "population": 270266},
		"Nord-Trøndelag": {"area": 22412, "population": 127973},
		"Nordland": {"area": 38456, "population": 237057},
		"Troms": {"area": 25877, "population": 152628},
		"Finnmark": {"area": 48618, "population": 73210},
	},

	"defaults": merge3({"friends": "SV+AP+SP, KRF+H+FRP"}, DEFAULTS_BEFORE_2025, DEFAULTS_COMMON),

	"votes": parseVotes(file2009, translate2009),
};
