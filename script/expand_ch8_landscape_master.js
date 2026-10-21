const fs = require('fs');
const path = require('path');

console.log("Preparing expanded Yang Zhai / Yin Zhai / Land Plots / Roads / Water content for Tshooj 8...");

const ch8Addition = `
        // =========================================================================
        // 10. LUB HAUV PAUS YANG ZHAI THIAB YIN ZHAI (YANG & YIN DWELLINGS)
        // =========================================================================
        pH1("10. Lub Hauv Paus Yang Zhai Thiab Yin Zhai (Theory of Yang & Yin Dwellings)"),
        pBody("Hauv txuj ci Looj Mem thaum ub, kev ntsuam xyuas thaj chaw tau muab faib ua ob ceg loj tshaj plaws:\\n" +
          "1. Yang Zhai (Vaj Tsev Neeg Muaj Sia Nyob): Yog lub tsev rau tib neeg muaj sia nyob, ua hauj lwm, noj pw, thiab tsim tsev neeg. Lub zog Yang yog lub zog nti, nrawm, sov siab, thiab ci ntsa iab. Yang Zhai tswj hwm txog: Nyiaj txiag tam sim no, txoj hauj lwm loj, kev vam meej ntawm tsev neeg, kev noj qab nyob zoo, thiab kev thaj yeeb ntawm cov neeg tab tom muaj sia nyob.\\n" +
          "2. Yin Zhai (Thaj Chaw Ntxa Poj Koob Yawm Txwv / Thaj Chaw Ntxa): Yog qhov chaw ntxa faus cov poj koob yawm txwv uas tas sim neej lawm. Lub zog Yin yog lub zog ntsiag to, txias, thiab ruaj khov hauv av. Yin Zhai tswj hwm txog: Lub hauv paus cag ntawm tsev neeg, kev xeeb tub xeeb ntxwv, kev txawj ntse ntawm cov me nyuam yaus, thiab txoj hmoov zoo mus ntev txog ntau tiam neeg."),

        pBody("Cov Kws Txawj Looj Mem qhia hais tias: 'Yin Zhai yog lub hauv paus cag ntoo (Roots), Yang Zhai yog cov ceg thiab nplooj ntoo (Branches & Leaves)'. Yog lub hauv paus cag zoo (Yin Zhai zoo), cov ceg thiab nplooj yuav txi txiv ntau ntau (Yang Zhai nplua nuj). Tab sis yog lub hauv paus cag qhuav (Yin Zhai phem), txawm Yang Zhai yuav zoo npaum li cas los xij, koob hmoov yuav tsis ntev."),

        pH2("Qauv Plaub Tug Tsiaj Saum Ntuj (Four Celestial Animals / Armchair Formation):"),
        pBody("Tsis hais Yang Zhai lossis Yin Zhai, qauv zoo tshaj plaws hauv kev xaiv thaj av yog qauv 'Rooj Zaum Xis' (Armchair Formation) uas tiv thaiv los ntawm Plaub Tug Tsiaj Saum Ntuj:"),
        pBullet("• Vaub Kib Dub (Xuan Wu - Tom Qab): ", "Yuav tsum muaj roob siab, phab ntsa ruaj khov, lossis tsev siab nyob tom qab lub tsev (lossis tom qab lub ntxa) kom muaj chaw nres ruaj khov. Tswj hwm kev txhawb nqa los ntawm cov neeg loj, kev noj qab haus huv, thiab kev muaj sia ntev."),
        pBullet("• Zaj Ntsuab (Qing Long - Sab Laug): ", "Thaj av lossis cov roob sab laug yuav tsum siab dua sab xis me ntsis. Zaj Ntsuab sawv cev rau lub zog Yang, txiv neej, hwj chim, kev nce qib, thiab koob meej."),
        pBullet("• Tsov Dawb (Bai Hu - Sab Xis): ", "Thaj av lossis cov roob sab xis yuav tsum qis dua sab laug me ntsis thiab mos muag. Tsov Dawb sawv cev rau lub zog Yin, poj niam, kev khaws nyiaj txiag, thiab kev tiv thaiv. CEEV FAJ: Sab Tsov Dawb tsis txhob siab dua lossis ntev dua sab Zaj Ntsuab, vim tias yog Tsov siab dua Zaj, poj niam yuav tswj hwm tsev neeg lossis muaj kev sib cav phem!"),
        pBullet("• Noog Liab (Zhu Que - Pem Hauv Ntej): ", "Pem hauv ntej ntawm lub tsev yuav tsum muaj thaj chaw qhib dav uas hu ua 'Ming Tang' (Bright Hall), thiab tom qab qhov chaw qhib ntawd muaj dej ntws maj mam lossis txoj kev tsheb nkhaus qhwv. Tswj hwm kev lag luam, nyiaj txiag, thiab txoj hauv kev tshiab."),

        ...pImage('fig_8_4_yang_zhai_yin_zhai.png', 520, 360, "Daim Duab 8.4: Kev Sib Txawv Ntawm Yang Zhai (Vaj Tsev Neeg Nyob) Thiab Yin Zhai (Thaj Chaw Ntxa)"),

        pH2("Daim Phiaj 8.3: Qauv Vaj Tsev Yang Zhai Thiab Yin Zhai"),
        new Table({
          width: { size: 13800, type: WidthType.DXA },
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({
              children: [
                makeHeaderCell("Yam Ntxwv Ntsuas", 2500),
                makeHeaderCell("Yang Zhai (Tsev Neeg Muaj Sia)", 3500),
                makeHeaderCell("Yin Zhai (Thaj Chaw Ntxa)", 3800),
                makeHeaderCell("Cov Kev Cai Tswj fwm Tseem Ceeb", 4000),
              ],
              tableHeader: true,
            }),
            new TableRow({
              children: [
                makeDataCell("Lub Zog Tswj Hwm", 2500, true),
                makeDataCell("Yang Qi (Lub teeb ci, cua, kev txav chaw)", 3500),
                makeDataCell("Yin Qi (Kev ntsiag to, av qhuav, txias)", 3800),
                makeDataCell("Yang Zhai xav tau 70% Yang / 30% Yin; Yin Zhai xav tau 100% Yin ntsiag to.", 4000),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Cov Yam Zoo (Auspicious)", 2500, true, true),
                makeDataCell("• Ming Tang dav pem hauv ntej\\n• Lub teeb ci ntsa iab zoo\\n• Cua ntsawj mos muag tsis nrawm\\n• Qhov rooj loj ntsia mus rau fab zoo\\n• Dej ntws qhwv pem hauv ntej", 3500, false, true),
                makeDataCell("• Txoj leeg zaj (Long Mai) txuas nraim\\n• Roob qhwv ob sab zoo li rooj zaum\\n• Av daj ntshiab, tsis muaj dej nyab\\n• Ntsia pom roob zoo nkauj pem hauv ntej\\n• Dej ntws kauv ntsiag to", 3800, false, true),
                makeDataCell("Tsim kom muaj kev nplua nuj rau neeg nyob thiab tseg koob hmoov rau tub xeeb ntxwv.", 4000, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Cov Yam Phem (Inauspicious)", 2500, true),
                makeDataCell("• Tsev tsaus nti tsis muaj teeb ci\\n• Cua hlob ntsawj nrawm nroos\\n• Txoj kev tsheb tsoo qhov rooj\\n• Qhov cub kub nyob plawv tsev\\n• Ces kaum tsev ploj ntau fab", 3500),
                makeDataCell("• Ntxa nyob saum ntsis roob cua ntsawj\\n• Dej xau nkag rau hauv lub ntxa\\n• Cag ntoo loj nkag mus hauv ntxa\\n• Pob zeb ntse tawg nthoob ncig ntxa\\n• Suab nrov los ntawm tsheb nqaj hlau", 3800),
                makeDataCell("Yin Zhai phem ua rau me nyuam muaj mob nkeeg txawv txawv, poob nyiaj tag nrho, tub xeeb ntxwv tsis vam meej.", 4000),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Txoj Kev Kho Kom Zoo", 2500, true, true),
                makeDataCell("• Taws teeb ci, qhib qhov rai\\n• Teeb daim phab thaiv, tsom iav Pa Kua\\n• Siv pas dej txav thiab pas dej ntsev\\n• Hloov chaw pw thiab chaw ua noj", 3500, false, true),
                makeDataCell("• Tshem cov cag ntoo loj ib puag ncig\\n• Khawb kwj dej kom dej tsis nyab ntxa\\n• Tsim phab ntsa pob zeb thaiv cua ntsawj\\n• Yog phem heev: Tsiv ntxa mus rau qhov tshiab", 3800, false, true),
                makeDataCell("Kev kho Yin Zhai xav tau kws looj mem paub txog San He thiab Luopan qib siab.", 4000, false, true),
              ],
            }),
          ],
        }),

        // =========================================================================
        // 11. COV QAUV DUAB THAJ AV TAG NRHO (LAND PLOT SHAPES)
        // =========================================================================
        pH1("11. Cov Qauv Duab Thaj Av Tag Nrho (Complete Land Plot Shapes & Topography)"),
        pBody("Cov duab ntawm thaj av uas koj tsim tsev rau saum yog lub hauv paus uas txais lub zog Qi ntawm lub ntiaj teb. Yog thaj av muaj duab zoo, lub tsev yuav nqus tau lub zog Qi zoo tau yooj yim. Tab sis yog thaj av muaj duab tsis zoo, lub zog Qi yuav tawg paj lossis tsim kom muaj Sha Qi uas ua rau tsev neeg ntsib kev nyuaj siab."),

        ...pImage('fig_8_2_land_plot_shapes.png', 520, 350, "Daim Duab 8.2: Cov Qauv Duab Thaj Av Hauv Looj Mem (Land Plot Shapes)"),

        pH2("Daim Phiaj 8.4: Qauv Cov Duab Thaj Av Tag Nrho"),
        new Table({
          width: { size: 13800, type: WidthType.DXA },
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({
              children: [
                makeHeaderCell("Duab Thaj Av", 2200),
                makeHeaderCell("Yam Khoom (Element)", 2200),
                makeHeaderCell("Qib Zoo / Phem", 2200),
                makeHeaderCell("Kev Cuam Tshuam Rau Tsev Neeg", 3600),
                makeHeaderCell("Txoj Kev Kho Kom Haum Looj Mem", 3600),
              ],
              tableHeader: true,
            }),
            new TableRow({
              children: [
                makeDataCell("Av Xwm Fab (Square)", 2200, true),
                makeDataCell("Av (Earth)", 2200, true),
                makeDataCell("Zoo Tshaj Plaws", 2200, true),
                makeDataCell("Ruaj khov tshaj plaws, tsev neeg sib haum xeeb, nyiaj txiag khaws tau ruaj ntseg.", 3600),
                makeDataCell("Zoo lawm tsis tas kho; tsim tsev rau nruab nrab kom tshuav vaj paj ncig.", 3600),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Av Ntev Xwm Yeem (Rectangle)", 2200, true, true),
                makeDataCell("Ntoo & Av (Wood/Earth)", 2200, true, true),
                makeDataCell("Zoo Heev", 2200, true, true),
                makeDataCell("Kev loj hlob tsis tu ncua, kev kawm ntawv zoo, kev noj qab haus huv ruaj khov.", 3600, false, true),
                makeDataCell("Tsim tsev raws kab ntev kom lub teeb ci nkag tau rau txhua chav.", 3600, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Av Hnab Nyiaj (Narrow Front, Wide Back)", 2200, true),
                makeDataCell("Av Nplua Nuj (Tu Li)", 2200, true),
                makeDataCell("Zoo Tshaj Plaws (Top Auspicious)", 2200, true),
                makeDataCell("Nyiaj txiag nkag los yooj yim tab sis tsis xau tawm; kev nplua nuj loj tuaj txhua tiam.", 3600),
                makeDataCell("Zoo heev! Muab lub qhov rooj loj tso rau pem hauv ntej, khaws chaw ntiag tug tom qab.", 3600),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Av Nqaim Tom Qab (Wide Front, Narrow Back)", 2200, true, true),
                makeDataCell("Av Xau Zog (Funnel)", 2200, true, true),
                makeDataCell("Phem (Inauspicious)", 2200, true, true),
                makeDataCell("Pib zoo tab sis xaus phem; nyiaj txiag xau tawm mus zuj zus, tub xeeb ntxwv poob lag luam.", 3600, false, true),
                makeDataCell("Tsim phab ntsa thaiv sab nqaim, teeb lub teeb pom kev ci tom qab kom rub lub zog nthuav dav.", 3600, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Av Peb Ces Kaum (Triangle)", 2200, true),
                makeDataCell("Hluav Taws Sha (Fire)", 2200, true),
                makeDataCell("Phem Tshaj Plaws", 2200, true),
                makeDataCell("Xwm txheej phem, hluav taws kub, kev phom sij ntawm txoj kev tsheb, sib cav sib foob.", 3600),
                makeDataCell("TXWV TSIS TXHOB TSIM TSEV PUV! Muab cov ces kaum ntse txiav ua vaj paj lossis cog ntoo thaiv.", 3600),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Av Riam Txiav (L-Shape / Knife)", 2200, true, true),
                makeDataCell("Hlau Ntse (Metal Sha)", 2200, true, true),
                makeDataCell("Phem / Ceev Faj", 2200, true, true),
                makeDataCell("Ces kaum ploj ua rau tus tswv lossis tus poj niam muaj mob hnyav raws fab uas ploj.", 3600, false, true),
                makeDataCell("Teeb ncej fais (ncej hluav taws xob) ci lossis tsim lub tsev rau khoom ntawm ces kaum ploj kom rov xwm yeem.", 3600, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Av Nce Theem (Front Low, Back High)", 2200, true),
                makeDataCell("Av Roob (Mountain Backing)", 2200, true),
                makeDataCell("Zoo Tshaj Plaws", 2200, true),
                makeDataCell("Nce qib hauv hauj lwm, muaj neeg loj pab txhawb, tsev neeg noj qab nyob ntev.", 3600),
                makeDataCell("Tsim tsev kom sab nraub qaum nres rau sab siab, sab qhov rooj qhib rau sab qis.", 3600),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Av Nqes Hav (Front High, Back Low)", 2200, true, true),
                makeDataCell("Av Ntws Poob (Falling Cliff)", 2200, true, true),
                makeDataCell("Phem Heev", 2200, true, true),
                makeDataCell("Tsis muaj chaw nres tom qab, poob nyiaj nrawm, kev ntxhov siab, mob nraub qaum.", 3600, false, true),
                makeDataCell("Tsim phab ntsa pob zeb ruaj khov tom qab, teeb teeb pom kev loj kom rub lub zog Qi rov qab.", 3600, false, true),
              ],
            }),
          ],
        }),

        // =========================================================================
        // 12. COV QAUV KEV TSHEB NIAJ HNUB NIM NO (ROAD FORMATIONS AS VIRTUAL WATER)
        // =========================================================================
        pH1("12. Cov Qauv Kev Tsheb Niaj Hnub Nim No (Road Formations as Virtual Water)"),
        pBody("Hauv txuj ci Looj Mem niaj hnub nim no, cov nroog loj tsis tshua muaj dej ntws tiag tiag. Tab sis cov kws txawj looj mem siv txoj cai hu ua 'Kev Tsheb Yog Dej Cuav' (Virtual Water / Xu Shui). Vim hais tias cov tsheb khiav mus los tsim kom muaj cua thiab lub zog Qi txav chaw ib yam nkaus li dej ntws tiag tiag!"),

        ...pImage('fig_8_3_road_formations.png', 520, 350, "Daim Duab 8.3: Cov Qauv Kev Tsheb Niaj Hnub Nim No (Road Formations as Virtual Water)"),

        pH2("Daim Phiaj 8.5: Qauv Cov Kev Tsheb Niaj Hnub Nim No"),
        new Table({
          width: { size: 13800, type: WidthType.DXA },
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({
              children: [
                makeHeaderCell("Qauv Txoj Kev", 2400),
                makeHeaderCell("Hom Zog Qi", 2200),
                makeHeaderCell("Qib Zoo / Phem", 2200),
                makeHeaderCell("Kev Cuam Tshuam Looj Mem", 3500),
                makeHeaderCell("Cov Tswv Yim Kho Tiag Tiag", 3500),
              ],
              tableHeader: true,
            }),
            new TableRow({
              children: [
                makeDataCell("Kev Nkhaus Qhwv (Jade Belt / Yu Dai)", 2400, true),
                makeDataCell("Sheng Qi (Zog Vam Meej)", 2200, true),
                makeDataCell("Zoo Tshaj Plaws", 2200, true),
                makeDataCell("Txoj kev qhwv zoo li txoj siv tawv huab tais, khaws tau nyiaj txiag loj, koob hmoov.", 3500),
                makeDataCell("Zoo heev lawm! Qhib lub qhov rooj loj kom pom txoj kev nkhaus no.", 3500),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Kev Nkhaus Tua Tawm (Reverse Bow / Fan Gong)", 2400, true, true),
                makeDataCell("Sha Qi (Riam Txiav)", 2200, true, true),
                makeDataCell("Phem Heev", 2200, true, true),
                makeDataCell("Txoj kev zoo li rab hneev tua tawm rau lub tsev; coj kev poob nyiaj, kev ntxeev siab, mob nkeeg.", 3500, false, true),
                makeDataCell("Dai tsom iav Pa Kua convex, cog ntoo tuab thaiv, tsim phab ntsa pob zeb pem hauv ntej.", 3500, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Kev Ncaj Tsoo Qhov Rooj (T-Junction / Lu Chong)", 2400, true),
                makeDataCell("Chong Sha (Xub Tua)", 2200, true),
                makeDataCell("Phem Tshaj Plaws", 2200, true),
                makeDataCell("Tsheb khiav nrawm ntsia ncaj rau qhov rooj; coj xwm txheej phem sai, phom sij rau txoj sia.", 3500),
                makeDataCell("Muab pob zeb Tai Shan Shi Gan Dang tso rau pem taub, teeb pas dej txav, lossis hloov qhov rooj.", 3500),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Kev Riam Txiab (Y-Junction / Scissor Road)", 2400, true, true),
                makeDataCell("Jian Dao Sha (Riam Txiab)", 2200, true, true),
                makeDataCell("Phom Sij Heev", 2200, true, true),
                makeDataCell("Tsev nyob hauv nruab nrab ntawm ob txoj kev sib tshuam; coj kev phais mob, raug mob los ntawm riam phom.", 3500, false, true),
                makeDataCell("Dai tsom iav concave, cog tsob ntoo nphoo loj thaiv, tsis txhob ua qhov rooj iav qhib dav.", 3500, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Kev Kaw (Cul-de-sac / Dead End)", 2400, true),
                makeDataCell("Si Qi (Qi Tuag)", 2200, true),
                makeDataCell("Phem / Ntxhov Siab", 2200, true),
                makeDataCell("Qi tsis ncig, nyob hauv qhov chaw kaw; ua rau lub tswv yim txhaws, hauj lwm tsis nce qib, ntxhov siab.", 3500),
                makeDataCell("Taws teeb pom kev ci ntsa iab pem hauv ntej, teeb lub pas dej txav kom lub zog Qi nti tuaj.", 3500),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Kev Tsheb Loj Saum Huab Cua (Flyover / Highway)", 2400, true, true),
                makeDataCell("Ge Jiao Sha (Txiav Ko Taw)", 2200, true, true),
                makeDataCell("Phem", 2200, true, true),
                makeDataCell("Kev tsheb khiav saum huab cua thaiv lub teeb ci thiab tsim suab nrov nrov; ua rau poob nyiaj.", 3500, false, true),
                makeDataCell("Siv iav ob txheej thaiv suab, dai daim ntaub thaiv qhov rais tuab, tso cov nroj ntsuab saum balcony.", 3500, false, true),
              ],
            }),
          ],
        }),

        // =========================================================================
        // 13. COV CAI TSO DEJ THIAB QHOV CHAW TSO DEJ ZOO TSHAJ
        // =========================================================================
        pH1("13. Cov Cai Tso Dej Thiab Qhov Chaw Tso Dej Zoo Tshaj (Master Water Placement Rules)"),
        pBody("Hauv txuj ci Looj Mem qub muaj lo lus hais tias: 'Shan Guan Ren Ding, Shui Guan Cai' (Roob tswj neeg thiab kev noj qab nyob zoo, Dej tswj nyiaj txiag thiab kev nplua nuj). Dej yog yam khoom siv uas muaj hwj chim loj tshaj plaws hauv kev qhib hmoov nyiaj txiag! Tab sis yog muab tso rau qhov chaw tsis raug, dej yuav rhuav tshem tsev neeg kom poob lag luam thiab ua rau neeg muaj mob nkeeg loj."),

        pH2("Daim Phiaj 8.6: Cov Cai Tso Dej Thiab Qhov Chaw Tso Dej Zoo Tshaj"),
        new Table({
          width: { size: 13800, type: WidthType.DXA },
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({
              children: [
                makeHeaderCell("Qhov Chaw Nyob Ntawm Dej", 2600),
                makeHeaderCell("Qib Kev Tso Dej", 3200),
                makeHeaderCell("Txiaj Ntsig / Kev Cuam Tshuam", 4000),
                makeHeaderCell("Cov Kev Cai Tswj fwm Yuav Tsum Nco Ntsoov", 4000),
              ],
              tableHeader: true,
            }),
            new TableRow({
              children: [
                makeDataCell("Pem Hauv Ntej Tsev (Ming Tang)", 2600, true),
                makeDataCell("ZOO TSHAJ PLAWS\\n(Auspicious)", 3200, true),
                makeDataCell("Rub lub zog Sheng Qi thiab nyiaj txiag nkag los rau hauv lub tsev; tsev neeg muaj koob meej.", 4000),
                makeDataCell("Dej yuav tsum ntshiab, ncig maj mam, tsis txhob ceev dhau, thiab tsis txhob muaj ntxhiab tsw phem.", 4000),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Palace Hnub Qub Dej 9 (Caij 9)", 2600, true, true),
                makeDataCell("QHIB HMOOV NYIAJ LOJ\\n(Wang Qi Water)", 3200, true, true),
                makeDataCell("Tsim kom muaj nyiaj txiag loj tshaj plaws hauv Lub Caij 9 (2024–2043); lag luam vam meej nrawm.", 4000, false, true),
                makeDataCell("Siv lub pas dej txav (moving water / fountain) lossis pas ntses koi uas muaj oxygen txav.", 4000, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Palace Hnub Qub Dej 1 (Sheng Qi)", 2600, true),
                makeDataCell("ZOO HEEV\\n(Future Wealth)", 3200, true),
                makeDataCell("Txhawb nqa txoj kev kawm ntawv, tswv yim ntse, koob meej, thiab nyiaj txiag rau yav tom ntej.", 4000),
                makeDataCell("Haum zoo rau pas dej me me lossis lub tais dej ntshiab ntxiv paj ntoo.", 4000),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Rooj Vag Tsev Fuab Tais (Castle Gate)", 2600, true, true),
                makeDataCell("CAWMTSEV POOB NYIAJ\\n(Cheng Men Water)", 3200, true, true),
                makeDataCell("Qhib qhov rooj vag zais cia kom rub lub zog nplua nuj nkag los rau cov tsev uas muaj daim duab nyuaj.", 4000, false, true),
                makeDataCell("Yuav tsum ntsuas qib Luopan kom raug tseeb raws li cov cai ntawm Tshooj 13.", 4000, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Tom Qab Tsev (Back of House)", 2600, true),
                makeDataCell("TXWV TSIS TXHOB TSO!\\n(Drowning the Mountain)", 3200, true),
                makeDataCell("Ua rau poob chaw nres, tsev neeg mob nkeeg, poob nyiaj, thiab tsis muaj neeg pab txhawb nqa.", 4000),
                makeDataCell("ZAM KIAG LI! Tsuas yog tsev uas yog qauv Shuang Xing Dao Zuo xwb thiaj pub muaj dej tom qab roob.", 4000),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Palace Hnub Qub Roob Tam Sim No", 2600, true, true),
                makeDataCell("PHOM SIJ RAU NEEG\\n(Down the Mountain)", 3200, true, true),
                makeDataCell("Dej yuav rhuav tshem lub zog Hnub Qub Roob; ua rau neeg hauv tsev ntsib xwm txheej tuag lossis mob hnyav.", 4000, false, true),
                makeDataCell("Qhov chaw uas muaj Hnub Qub Roob 9 yuav tsum yog roob siab lossis rooj tog ruaj khov, tsis txhob muaj dej!", 4000, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Plawv Tsev (Tai Ji Center)", 2600, true),
                makeDataCell("TXWV TSHWAJ PLAWS\\n(Heart Piercing)", 3200, true),
                makeDataCell("Ua rau lub plawv tsev ntub dej; coj kab mob plawv, mob hlwb, thiab kev tawg paj ntawm tsev neeg.", 4000),
                makeDataCell("Tsis txhob muab pas dej, pas ntses, lossis chav dej tso rau nruab nrab ntawm lub tsev.", 4000),
              ],
            }),
          ],
        }),

        // =========================================================================
        // 14. COV TSWV YIM KHO SHA QI SAB NRAUD TAG NRHO
        // =========================================================================
        pH1("14. Cov Tswv Yim Kho Sha Qi Sab Nraud Tag Nrho (Exterior Sha Qi Remedies Directory)"),
        pBody("Hauv txheej txheem Looj Mem, thaum muaj Sha Qi sab nraud tuaj tsoo lub tsev, peb tsis tas yuav ntshai lossis tsiv tsev tam sim ntawd. Muaj 4 txoj kev loj uas kws looj mem siv los kho:\\n" +
          "1. Thaiv Cia (Block): Siv phab ntsa, ntoo, lossis rido thaiv kom Sha Qi tsis txhob nkag tau rau hauv qhov muag.\\n" +
          "2. Txo Zog (Dissolve / Deflect): Siv lub voj voog Tsib Yam Zog los nqus lossis txo lub zog phem ntawd.\\n" +
          "3. Tawm Tsam Rov Qab (Reflect): Siv tsom iav Pa Kua lossis pob zeb Tai Shan Shi Gan Dang rov tsoo.\\n" +
          "4. Hloov Txoj Kev Taug (Transform): Siv lub pas dej txav lossis txoj kev nkhaus kom hloov Sha Qi mus ua Sheng Qi."),

        pH2("Daim Phiaj 8.7: Cov Tswv Yim Kho Sha Qi Sab Nraud Tag Nrho"),
        new Table({
          width: { size: 13800, type: WidthType.DXA },
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({
              children: [
                makeHeaderCell("Yam Sha Qi Sab Nraud", 2500),
                makeHeaderCell("Lub Npe Suav", 2200),
                makeHeaderCell("Kev Cuam Tshuam Phem", 2500),
                makeHeaderCell("Cov Khoom Siv Kho Tiag Tiag", 3600),
                makeHeaderCell("Txoj Kev Teeb Tsa Kom Zoo", 3000),
              ],
              tableHeader: true,
            }),
            new TableRow({
              children: [
                makeDataCell("Kev Ncaj Tsoo Qhov Rooj", 2500, true),
                makeDataCell("Lu Chong (路衝)", 2200, true),
                makeDataCell("Xwm txheej tsheb, phais mob, poob nyiaj sai.", 2500),
                makeDataCell("• Pob zeb Tai Shan Shi Gan Dang\\n• Tsom iav Pa Kua convex (tawm)\\n• Lub pas dej txav\\n• Cog ntoo xyoob tuab tuab", 3600),
                makeDataCell("Tso pob zeb ntsia ncaj rau txoj kev, lossis tsim daim phab thaiv pem qhov rooj.", 3000),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Ces Kaum Ntse Ntawm Lwm Lub Tsev", 2500, true, true),
                makeDataCell("Jian Jiao Sha (尖角煞)", 2200, true, true),
                makeDataCell("Mob nkeeg, kev sib cav, kev ua phem ntawm neeg.", 2500, false, true),
                makeDataCell("• Tsom iav Pa Kua concave (nkag)\\n• Dai lub tswb hlau 6 raj\\n• Cog nroj ntsuab saum balcony\\n• Dai daim ntaub thaiv tuab", 3600, false, true),
                makeDataCell("Tsis txhob qhib qhov rai ntsia ncaj rau ces kaum ntse ntawd tas li.", 3000, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Qhov Chaw Ntse Ntawm Ob Lub Tsev Siab", 2500, true),
                makeDataCell("Tian Zhan Sha (天斬煞)", 2200, true),
                makeDataCell("Cua hlob ntsawj nqaim zoo li rab riam txiav tsev; poob lag luam loj.", 2500),
                makeDataCell("• Tsom iav Pa Kua loj\\n• Ob tug tsiaj Qi Lin tooj liab\\n• Tsob ntoo thuv loj", 3600),
                makeDataCell("Muab ob tug Qi Lin tso rau sab balcony ntsia mus rau qhov chaw nqaim ntawd.", 3000),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Ncej Hluav Taws Xob / 5G Tower", 2500, true, true),
                makeDataCell("Huo Sha (火煞)", 2200, true, true),
                makeDataCell("Mob taub hau, mob qhov muag, kub ntxhov hauv siab, mob siab.", 2500, false, true),
                makeDataCell("• Lauj kaub av ncuab loj (Av)\\n• Pas dej ntsiag to (Dej)\\n• Pob zeb ntshiab quartz", 3600, false, true),
                makeDataCell("Siv Khoom Siv Av thiab Dej los nqus lub zog Hluav Taws kom txias tuaj.", 3000, false, true),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Nyob Ze Chaw Ntxa / Tsev Kho Mob", 2500, true),
                makeDataCell("Yin Sha (陰煞)", 2200, true),
                makeDataCell("Lub zog Yin ntau dhau, tsev tsaus nti, neeg hauv tsev qaug zog, npau suav phem.", 2500),
                makeDataCell("• Taws teeb ci ntsa iab Yang\\n• Teeb ci liab lossis teeb teev ntuj\\n• Ob tug tsov ntxhuav pob zeb\\n• Dai daim ntaub liab", 3600),
                makeDataCell("Ua kom pem hauv ntej tsev kaj siab lug, tsis txhob cia ntoo ntxoov tsaus nti.", 3000),
              ],
            }),
            new TableRow({
              children: [
                makeDataCell("Tsob Ntoo Tuag / Ncej Xov Pem Qhov Rooj", 2500, true, true),
                makeDataCell("Ding Xin Sha (頂心煞)", 2200, true, true),
                makeDataCell("Ua pa tsis xis, mob hauv siab, kev nyuaj siab hauv hauj lwm.", 2500, false, true),
                makeDataCell("• Tshem tawm yog ua tau\\n• Dai lub tswb hlau\\n• Tsom iav Pa Kua\\n• Tso ob lub lauj kaub paj ntoo", 3600, false, true),
                makeDataCell("Tso cov paj ntoo ob sab qhov rooj kom txo qhov pom ntawm tus ncej ncaj qha.", 3000, false, true),
              ],
            }),
          ],
        }),
`;

// Read current ch8_content.js
let ch8Content = fs.readFileSync(path.resolve('script/ch8_content.js'), 'utf8');

if (!ch8Content.includes("10. Lub Hauv Paus Yang Zhai Thiab Yin Zhai")) {
  // Find where the last `];` is
  const lastIndex = ch8Content.lastIndexOf("];");
  if (lastIndex !== -1) {
    ch8Content = ch8Content.substring(0, lastIndex) + ch8Addition + "\n    ];\n  }\n};\n";
    fs.writeFileSync(path.resolve('script/ch8_content.js'), ch8Content, 'utf8');
    console.log("Successfully expanded ch8_content.js with master Yang/Yin Zhai, Land Plots, Roads, Water, and Remedies!");
  } else {
    console.error("Could not find ]; in ch8_content.js");
  }
} else {
  console.log("ch8_content.js already contains Yang Zhai / Yin Zhai content.");
}
