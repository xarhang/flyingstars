// ch8_content.js - Tshooj 8: Cov Zog Ntawm Thaj Av Ib Puag Ncig (Landscape Effects)
// Classical Xuan Kong Flying Star Luan Tou
// Authentic White Hmong Translation (RPA) - Strictly 0 Thai/Lao text bleed

const fs = require('fs');
const path = require('path');

module.exports = function(ctx) {
  with(ctx) {

    const tBorder = { style: BorderStyle.SINGLE, size: 4, color: "CBD5E1" };
    const tableBorders = { top: tBorder, bottom: tBorder, left: tBorder, right: tBorder };

    // Helper to find image path reliably
    function resolveImg(name) {
      const candidates = [
        path.resolve(__dirname, '../book_figures/clean_hmong', name),
        path.resolve(__dirname, '../asset/book_figures/clean_hmong', name),
        path.resolve('book_figures/clean_hmong', name),
        path.resolve('asset/book_figures/clean_hmong', name),
      ];
      for (const c of candidates) {
        if (fs.existsSync(c)) return c;
      }
      return null;
    }

    // --- Table 8.1: Multiple Interpretations of Mountain and Water ---
    function pTable81LandscapeInterpretation() {
      const colWidths = [3196,5302,5302];
      const headers = [
        "Theem Ib Puag Ncig",
        "Roob Tswj Tib Neeg (Mountain Governs People)",
        "Dej Tswj Nyiaj Txiag (Water Governs Wealth)"
      ];

      const rows = [
        [
          "Hauv Zos Teb chaws / Thaj Av Tiag (Rural / Physical)",
          "• Tej roob siab txuas zuj zus (Mountain range)\n• Lub roob siab (Mountain)\n• Tej roob qis (Hill)\n• Thaj av siab / pob av sawv siab (Elevated mound)",
          "• Hiav txwv loj (Sea / Ocean)\n• Dej ntws loj thiab pas dej loj (River and Lake)\n• Tej kwj dej me thiab kwj deg (Stream and Brook)\n• Pas dej me / pas dej nres (Pond / Pool)"
        ],
        [
          "Hauv Nroog / Qauv Tsev Tiag (Urban / Physical)",
          "• Cov tsev siab loj (Building)\n• Phab ntsa siab ruaj khov (Wall)\n• Vaj pob zeb tsim kho (Rock garden)",
          "• Txoj kev tsheb loj thiab kev taug taw (Road and Walkway)\n• Pas dej tsim kho (Water pond / basin)\n• Pas da dej ua si (Swimming pool)"
        ],
        [
          "Tswv Yim / Sab Cim Xeeb (Conceptual / Symbolic / Virtual)",
          "• Thaj chaw siab dua (Higher ground)\n• Qhov chaw ntsiag to (Quiet / Tranquil area)\n• Thaj chaw Yin (Yin area / Stillness)",
          "• Thaj chaw qis dua (Lower ground)\n• Qhov chaw tib neeg ncig ntau (Busy / Active area)\n• Thaj chaw Yang (Yang area / Movement)"
        ]
      ];

      return new Table({
        width: { size: 13800, type: WidthType.DXA },
        alignment: AlignmentType.CENTER,
        rows: [
          new TableRow({ cantSplit: true, tableHeader: true, children: headers.map((h, i) => makeHeaderCell(h, colWidths[i])) }),
          ...rows.map((r, rIdx) => new TableRow({ cantSplit: true, children: r.map((cellText, cIdx) => makeDataCell(cellText, colWidths[cIdx], false, rIdx % 2 === 1, AlignmentType.LEFT)),
          })),
        ],
      });
    }

    // --- Table 8.2: Nine Flying Stars with Mountain Physical Shapes & 5 Elements ---
    function pTable82NineMountainShapes() {
      const colWidths = [1598,1598,1888,1743,1453,1743,3777];
      const headers = [
        "Hnub Qub",
        "Npe Suav",
        "Duab Roob",
        "Lub Ntsiab",
        "Yam Khoom",
        "Hnub Qub Ntuj",
        "Cov Yam Ntxwv ntawm Roob (Physical Shapes)"
      ];

      const starData = [
        {
          star: "1-Kob Dawb",
          cn: "貪狼\n(Tan Lang)",
          img: "fig_8_shape_1_tanlang.png",
          meaning: "Tus Hma Ntshaw\n(Greedy Wolf)",
          elem: "Ntoo\n(Wood)",
          planet: "Hnub Qub Phaj Ntxhais\n(Jupiter)",
          desc: "Kheej, muaj pob av kheej nyob rau saum ntsis roob. Muaj hmoov zoo thaum lub roob kheej sib luag zoo tag nrho, tab sis yuav phem thaum tsis sib npaug."
        },
        {
          star: "2-Kob Dub",
          cn: "巨門\n(Ju Men)",
          img: "fig_8_shape_2_jumen.png",
          meaning: "Qhov Rooj Loj\n(Giant Gate)",
          elem: "Av\n(Earth)",
          planet: "Hnub Qub Xas Tuv\n(Saturn)",
          desc: "Ob sab roob siab ntxhab thiab ntse, lossis zoo li thaj av tiaj saum roob siab (plateau / table mountain)."
        },
        {
          star: "3-Kob Ntsuab",
          cn: "祿存\n(Lu Cun)",
          img: "fig_8_shape_3_lucun.png",
          meaning: "Tuav Hauj lwm\n(Preserving Rank)",
          elem: "Av\n(Earth)",
          planet: "Hnub Qub Xas Tuv\n(Saturn)",
          desc: "Saum ntsis roob tiaj tus, muaj 3, 4, lossis 5 lub pob roob me me tawm tuaj. Qee zaum muaj lwm yam duab; pab kom tau txoj hauj lwm me hauv nom tswv, thiab yuav coj kev kub ntxov me me tuaj."
        },
        {
          star: "4-Kob Ntsuab",
          cn: "文曲\n(Wen Qu)",
          img: "fig_8_shape_4_wenqu.png",
          meaning: "Nom Txuj Ci\n(Literary Arts)",
          elem: "Dej\n(Water)",
          planet: "Hnub Qub Phaj Qaum\n(Mercury)",
          desc: "Thaum ntsia saum nruab ntug los, lub roob no muaj tus duab tsis xwm yeem vim nws nkhaus nkhaus thiab kauv zoo li lub xov kauv (undulating ridges)."
        },
        {
          star: "5-Kob Daj",
          cn: "廉貞\n(Lian Zhen)",
          img: "fig_8_shape_5_lianzhen.png",
          meaning: "Kev Ncaj Ncees\n(Uprightness)",
          elem: "Hluav Taws\n(Fire)",
          planet: "Hnub Qub Phaj Hluav Taws\n(Mars)",
          desc: "Ntse heev, ntxhib ntxhab, muaj ib lossis ntau lub ntsis roob ntse sawv siab zoo li nplaim taws (sharp jagged peaks)."
        },
        {
          star: "6-Kob Dawb",
          cn: "武曲\n(Wu Qu)",
          img: "fig_8_shape_6_wuqu.png",
          meaning: "Nom Tub Rog\n(Military Arts)",
          elem: "Kub\n(Metal)",
          planet: "Hnub Qub Phaj Ntxhais Suav\n(Venus)",
          desc: "Saum ntsis roob kheej zoo li lub ru tsev dome sib luag zoo tag nrho, lossis ib nrab voj voog uas tsis muaj ntsis ntse (bell dome)."
        },
        {
          star: "7-Kob Liab",
          cn: "破軍\n(Po Jun)",
          img: "fig_8_shape_7_pojun.png",
          meaning: "Tub Rog Tawg\n(Broken Army)",
          elem: "Kub\n(Metal)",
          planet: "Hnub Qub Phaj Ntxhais Suav\n(Venus)",
          desc: "Muaj ntau lub ntsis roob, tab sis kheej dua lub roob Hnub Qub 5-Kob Daj; hauv qab yog hav dej tob thiab taw zeb ntxhab poob hav (scree)."
        },
        {
          star: "8-Kob Dawb",
          cn: "左輔\n(Zuo Fu)",
          img: "fig_8_shape_8_zuofu.png",
          meaning: "Pab Sab Laug\n(Left Assistant)",
          elem: "Av\n(Earth)",
          planet: "Hnub Qub Xas Tuv\n(Saturn / Sun)",
          desc: "Lub roob uas muaj ob lub ntsis kheej kheej sawv ua ke (ib lub loj thiab ib lub me sawv sib nrug tsis deb)."
        },
        {
          star: "9-Kob Ntshav",
          cn: "右弼\n(You Bi)",
          img: "fig_8_shape_9_youbi.png",
          meaning: "Pab Sab Xis\n(Right Assistant)",
          elem: "Hluav Taws\n(Fire)",
          planet: "Hnub Qub Phaj Hluav Taws\n(Mars)",
          desc: "Lub roob kauv zoo li lub xov kauv, feem ntau muaj ntau theem txuas zuj zus nqes hav, raug faib los ntawm tej hav roob me me."
        }
      ];

      return new Table({
        width: { size: 13800, type: WidthType.DXA },
        alignment: AlignmentType.CENTER,
        rows: [
          new TableRow({ cantSplit: true, tableHeader: true, children: headers.map((h, i) => makeHeaderCell(h, colWidths[i])) }),
          ...starData.map((d, rIdx) => {
            const isAlt = rIdx % 2 === 1;
            const imgPath = resolveImg(d.img);

            let imgCellChildren = [];
            if (imgPath && fs.existsSync(imgPath)) {
              imgCellChildren = [
                new Paragraph({
                  children: [
                    new ImageRun({
                      data: fs.readFileSync(imgPath),
                      transformation: { width: 56, height: 38 },
                      type: "png",
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 40, after: 40 },
                }),
              ];
            } else {
              imgCellChildren = [
                new Paragraph({
                  children: [new TextRun({ text: "[Duab Roob]", font: FONT, size: 16, italics: true, color: "6B7280" })],
                  alignment: AlignmentType.CENTER,
                }),
              ];
            }

            return new TableRow({ cantSplit: true, children: [
                makeDataCell(d.star, colWidths[0], true, isAlt),
                makeDataCell(d.cn, colWidths[1], true, isAlt),
                new TableCell({
                  children: imgCellChildren,
                  width: { size: colWidths[2], type: WidthType.DXA },
                  shading: { type: ShadingType.CLEAR, fill: isAlt ? "F8FAFC" : "FFFFFF" },
                  margins: { top: 60, bottom: 60, left: 40, right: 40 },
                  borders: tableBorders,
                }),
                makeDataCell(d.meaning, colWidths[3], true, isAlt),
                makeDataCell(d.elem, colWidths[4], true, isAlt),
                makeDataCell(d.planet, colWidths[5], true, isAlt),
                makeDataCell(d.desc, colWidths[6], false, isAlt, AlignmentType.LEFT),
              ],
            });
          }),
        ],
      });
    }

    return [
      pH1("TSHOOJ 8: COV ZOG NTAWM THAJ AV IB PUAG NCIG (LANDSCAPE EFFECTS)"),
      pSubtitle("Cov Zog Ntawm Roob Thiab Dej Nyob Hauv Txuj Ci Looj Mem Hnub Qub Ya"),

      pBody("Thaum koj ua daim phiaj Looj Mem Hnub Qub Ya (Flying Star Chart), txhua lub qhov hauv lub plaub fab Luo Shu yuav muaj peb tug hnub qub nyob ua ke, xws li: Hnub Qub Raws Caij Nyoog (Period Star - tau los ntawm lub sij hawm uas tsim kho lub tsev tias yog nyob rau lub caij nyoog twg), Hnub Qub Dej (Water Star), thiab Hnub Qub Roob (Mountain Star). Hauv tshooj no, peb yuav tshawb fawb saib seb Hnub Qub Dej thiab Hnub Qub Roob txhais tau li cas raws li thaj av ib puag ncig ntawm lub ntiaj teb tiag (physical landscape)."),

      pBody("Thov nco ntsoov tias txoj kev kawm Looj Mem (Feng Shui) yeej pib tshwm sim los ntawm kev ntsuam xyuas cov zog Qi uas muaj nyob hauv thaj av ib puag ncig. Yog li ntawd, kev saib seb cov Hnub Qub Ya sib cuam tshuam nrog rau tej chaw ib puag ncig tiag tiag li cas thiaj li yog ib qho tseem ceeb tshaj plaws. Qhov tseeb tiag, ntau txoj cai thiab cov tswv yim tseem ceeb uas pab tsim kom muaj kev sib txuas lus ntawm daim phiaj Hnub Qub Ya nrog rau lub ntiaj teb sab nraud yog tau los ntawm tsev kawm ntawv Looj Mem San He (Shan He School - Tsev Kawm Ntawv Yam Ntxwv Roob Thiab Dej)."),

      pBody("Yog tias koj xav txog sab cim xeeb (symbolism) ib pliag, koj yuav to taub tau sai heev tias:"),
      pBullet("• Kev Ruaj Khov ntawm Lub Roob: ", "Coj kev noj qab nyob zoo, kev sib raug zoo ntawm tib neeg, thiab tsev neeg uas muaj kev sib hlub nrog kev txhawb nqa tuaj rau peb."),
      pBullet("• Kev Ntws ntawm Cov Dej: ", "Xws li cov dej ntws tawm ntawm qhov dej txhawv ntuj tsim uas pom nyob rau saum roob siab, yuav coj kev nplua mias, nyiaj txiag, thiab koob hmoov tuaj rau peb."),

      pBody("Cov lus qhia no tau qhia meej txog vim li cas Hnub Qub Roob thiaj raug muab sib luag rau kev noj qab nyob zoo, kev sib raug zoo, thiab tsev neeg; thaum uas Hnub Qub Dej raug muab sib luag rau kev nplua mias thiab nyiaj txiag."),

      pBody("Txawm li ntawd los, kev sib txuas lus no muaj lub ntsiab lus tob dua li tsuas yog sab cim xeeb nkaus xwb. Vim hais tias cov dej uas tuaj sau ua ke nyob rau qhov chaw uas yog raws nraim yuav pab kom lub zog Qi tuaj sau ua pawg tau tiag tiag hauv thaj chaw ntawd, thiab nws yuav pab txhawb kom muaj kev nplua mias ntawm nyiaj txiag tiag tiag, tsis yog tsuas yog nyob rau hauv kev xav ntawm lub hlwb xwb."),

      pH2("1. Kev Txhais Lub Ntsiab ntawm Roob Thiab Dej Hauv Theem Me (Microcosm)"),
      pBody("Koj yuav txhais lub ntsiab ntawm Roob thiab Dej nyob rau theem me me hauv ib lub tsev lossis hauv ib chav tsev li cas?"),

      pBody("Ib qho piv txwv uas pom tau tseeb tshaj plaws yog: Ib chav tsev uas qhib qhov rai pom thaj chaw muaj pas dej lossis pas dej loj (lake), chav ntawd yuav suav tau tias yog chav muaj yam ntxwv zoo li 'Dej'. Ntawm ib sab ntxiv, chav tsev uas ntsia tawm mus pom lub roob siab lossis pom tej vaj tse siab loj nyob ze, chav ntawd yuav suav tau tias yog chav muaj yam ntxwv zoo li 'Roob'."),

      pBox("Tswv Yim Nco Ntsoov Ntawm Cov Kws Txawj Looj Mem:",
        "Thov tsis txhob cia li muab koj lub taub hau ntsia ntsoov rau hauv daim phiaj thiab kev suav lej nkaus xwb! Cia li tawm mus sab nraud thiab ntsia xyuas kom thoob plaws ib puag ncig. Ntsia kom pom tseeb thiab sau cia tej yam uas koj pom. Thawj thawj yog ntsia thaj chaw sab xub ntiag (lub ntsej muag tsev) ua ntej, tom qab ntawd mam ntsia thaj chaw sab nraub qaum (lub nrob qaum tsev).\n\nLooj Mem tsis yog lwm yam li, nws tsuas yog kev tshawb fawb txog kev soj ntsuam xyuas nkaus xwb. Yam khoom uas nyob ze yuav pom loj dua npaum twg, lub roob lossis thaj dej uas nyob ze lub tsev yeej yuav muaj zog Qi ntau dua thiab muaj hwj chim loj dua lub roob lossis thaj dej uas nyob deb npaum ntawd!"),

      pBody("Qhov tseem ceeb yog kev ntsia nkag mus rau hauv txhua chav tsev, saib seb sab hauv chav ntawd muaj yam ntxwv zoo li Dej lossis Roob. Ib qho piv txwv uas pom tseeb tshaj plaws ntawm qhov no yog:"),
      pBullet("• Chav Muaj Yam Ntxwv Zoo Li Dej: ", "Chav tsev uas muaj plag tsev qis dua lwm qhov hauv tsev, qhov rooj loj uas tib neeg taug mus los ntau, lossis chav uas muaj lub dab ntses (aquarium) loj heev."),
      pBullet("• Chav Muaj Yam Ntxwv Zoo Li Roob: ", "Chav tsev uas muaj plag tsev tsa siab dua, muaj phab ntsa ruaj khov uas tsis muaj qhov rooj qhov rai, lossis chav uas tso cov rooj tog hnyav heev thiab lub txee siab ruaj khov."),

      pH2("2. Kev Sib Cuam Tshuam ntawm Roob Thiab Dej: 'Dej Nce Roob' Thiab 'Roob Poob Dej'"),
      pBody("Hauv kev ntsuam xyuas sab nraud zoo li no, peb yuav tsum tau tshuaj xyuas seb Dej thiab Roob cuam tshuam rau ib leeg li cas, thiab lawv cuam tshuam rau cov Hnub Qub ntawm chav tsev ntawd li cas:"),
      pBullet("• Hnub Qub Dej Ntsib Roob Tiag: ", "Hnub Qub Dej uas muaj zog nyob rau thaj chaw uas muaj roob tiag tiag yuav tsis tsim txiaj ntsig dab tsi li. Cov ntawv Looj Mem Hnub Qub Ya Suav hu tus yam ntxwv phem no tias 'Dej nce Roob' (Shàng Shān / 上山). Qhov no ua rau txoj hmoov nyiaj txiag raug thaiv cia lossis ploj mus."),
      pBullet("• Hnub Qub Roob Ntsib Dej Tiag: ", "Kev muaj Hnub Qub Roob uas muaj zog nyob rau thaj chaw uas muaj dej tiag tiag los kuj tsis muaj txiaj ntsig zoo tib yam nkaus. Cov ntawv Looj Mem Hu ua 'Roob poob Dej' (Xià Shuǐ / 下水). Qhov no ua rau kev noj qab nyob zoo thiab kev sib raug zoo ntawm tib neeg hauv tsev raug puas tsuaj."),

      pBody("Kev txhais lub ntsiab lus ntawm thaj chaw Roob thiab thaj chaw Dej tsis tas yuav ua kom nruj heev lossis tuag tes tuag taw. Hauv tsev tiag, thaj chaw Roob hauv chav tsev yuav qhia tau los ntawm kev tso cov rooj tog hnyav heev, lub txee siab, lossis phab ntsa ruaj khov. Ntawm ib sab ntxiv, thaj chaw Dej yuav yog ib qho chaw qhib dav, qhov rooj nkag, txoj kev taug, lossis qhov chaw uas muaj plag tsev qis dua xwb los yeej suav tau."),

      pH2("3. Cov Ntsiab Lus Nthuav Dav ntawm Roob Thiab Dej"),
      pBody("Cov ntsiab lus nthuav dav ntawm Roob thiab Dej txij thaum thaj av ib puag ncig theem loj heev (macrocosm) mus txog rau theem me me hauv vaj tse (microcosm) raug muab tso rau hauv Lub Rooj 8.1 hauv qab no:"),

      ...pImage('book_figures/clean_hmong/fig_8_5_armchair_landscape.png', 540, 310, 'Daim Duab 8.1A: Qauv Roob Zaum Rooj Xis (Armchair Landscape) nrog Xuan Wu nraub qaum, Qing Long sab laug, Bai Hu sab xis, Ming Tang tiaj tus, thiab Dej Yu Dai Shui'),
     ...pImage('fig_living_vs_dead_dragon.jpg', 560, 315, 'Daim Duab 8.1B: Kev Sib Piv Roob Zaj Muaj Sia (Sheng Long 生龙 - Sab Laug) nrog Roob Zaj Tuag (Si Long 死龙 - Sab Xis)'),

      pH2("4. Kev Txhawb Zog Thiab Kev Tua Zog ntawm Cov Hnub Qub"),
      pBody("Txhua tus qauv uas nyob hauv kab thawj ntawm Lub Rooj 8.1 (kab sab laug) muaj peev xwm txhawb thiab yuav txhawb lub zog ntawm Hnub Qub Roob. Txhua tus qauv uas nyob hauv kab thib ob (kab sab xis) muaj peev xwm txhawb thiab yuav txhawb lub zog ntawm Hnub Qub Dej."),

      pBody("Qib ntawm kev txhawb zog muaj 3 theem loj:"),
      pBullet("1. Kev Txhawb Muaj Zog Tshaj Plaws: ", "Tau los ntawm cov qauv hauv zos teb chaws lossis tej yam tiag tiag uas yog ntuj tsim, xws li roob tiag thiab cov dej tiag."),
      pBullet("2. Kev Txhawb Theem Nruab Nrab: ", "Tau los ntawm cov qauv hauv nroog loj, xws li cov tsev siab loj (sawv cev rau roob) thiab txoj kev tsheb khiav (sawv cev rau dej)."),
      pBullet("3. Kev Txhawb Theem Tsawg Dua: ", "Tau los ntawm cov qauv raws li tswv yim lossis sab cim xeeb (conceptual / symbolic), xws li rooj tog hnyav, thaj chaw siab los sis qis, thaj chaw ntsiag to los sis chaw nrov."),

      pBody("Hnub Qub Roob uas tseem ceeb tshaj plaws hauv txhua daim phiaj yog Hnub Qub Roob uas muaj lub zog tshaj (dominant star). Hais lwm txoj kev mas yog: Hnub Qub Roob uas muaj tib tug lej nrog rau Hnub Qub Caij Nyoog niaj hnub no (Current Period Star)."),

      pBox("Txoj Cai Tswj Cov Hnub Qub Zoo Thiab Hnub Qub Phem:",
        "Cov qauv chaw muaj dej yuav txhawb Hnub Qub Dej kom muaj txiaj ntsig zoo, thiab cov qauv chaw muaj roob yuav txhawb Hnub Qub Roob kom muaj txiaj ntsig zoo.\n\nTxawm li ntawd los, yog tias koj muab pauv yuam kev (misplaced), ua rau Hnub Qub Dej mus ntsib nrog roob, lossis ua rau Hnub Qub Roob mus ntsib nrog dej, ces ob tug hnub qub no tsis yog tsuas raug muab hloov mus ua nruab nrab (neutralized) xwb, tab sis lawv tseem yuav nthuav tawm lawv tus yam ntxwv phem sab nraud tuaj!\n\nCov ntaub ntawv no muaj txiaj ntsig zoo kawg nkaus rau koj: Koj tuaj yeem ua kom cov hnub qub phem ntsiag to (muab kaw tsis pub nthuav zog phem) los ntawm kev muab tus qauv tiag tiag uas muaj yam ntxwv rov qab tso rau ze ze ntawm nws!"),

      pBody("Raws li kev xav zoo tag nrho (Ideal Configuration):"),
      pBullet("• Roob Tiag Sab Nraud: ", "Peb xav kom muaj Hnub Qub Roob uas zoo (Auspicious Mountain Star) thiab Hnub Qub Dej uas phem (Inauspicious Water Star) nyob ze rau lub roob tiag tiag. Vim lub roob yuav txhawb Hnub Qub Roob zoo kom nthuav koob hmoov, thiab tib lub sij hawm ntawd lub roob yuav thaiv thiab muab Hnub Qub Dej phem ntawd tua kom ntsiag to!"),
      pBullet("• Dej Tiag Sab Nraud: ", "Peb xav kom muaj Hnub Qub Dej uas zoo (Auspicious Water Star) thiab Hnub Qub Roob uas phem (Inauspicious Mountain Star) nyob ze rau thaj chaw muaj dej tiag tiag. Vim cov dej yuav txhawb Hnub Qub Dej zoo kom nplua mias nyiaj txiag, thiab tib lub sij hawm ntawd cov dej yuav muab Hnub Qub Roob phem ntawd tua kom ntsiag to!"),

      pH2("5. Kev Zoo Nkauj ntawm Thaj Av Thiab Kev Tsim Vaj Teb Suav"),
      pBody("Ib qho teeb meem uas tib neeg feem ntau pheej hnov qab yog: Tus qauv roob lossis chaw dej uas muaj kev zoo nkauj yuav muaj txiaj ntsig zoo dua thiab muab cov txiaj ntsig zoo tshaj tus qauv uas tsis tshua zoo nkauj. Yog li ntawd, hauv kev hloov kho thaj chaw vaj teb puag ncig lub tsev, cia li sim ua kom nws zoo nkauj thiab ntxim nyiam tshaj plaws."),

      pBody("Muaj ntau tus tub kawm Looj Mem pheej xav yuam kev tias kev tsuas muab ib tsheb thauj av tuaj nchuav ua ib pawg ces txaus rau kev tsim roob lawm. Leej twg uas tau mus so hauv tej vaj Suav qub thaum ub xws li vaj hauv nroog Suzhou, yuav paub tias qhov ntawd yog kev teb rau daim phiaj Hnub Qub Ya tau zoo tshaj plaws. Lub roob tshiab yuav tsum tau txuas nrog rau thaj av ib puag ncig kom sib haum xeeb, thiab dhau los ua ib feem ntawm lub zog Qi uas raug raws nraim ntawm lub tsev."),

      pH2("6. Tsev Kawm Ntawv Yam Ntxwv (Form School) Tseem Ceeb Dua Tej Lej Suav"),
      pBody("Hauv koj txoj kev kawm Looj Mem, koj yuav tsum nco ntsoov tias: Lub hauv paus ntawm tsev kawm Looj Mem Yam Ntxwv (Form School / Luan Tou) tseem ceeb tshaj cov hnub qub lossis tej txheej txheem lej suav! Txawm li cas los xij, Looj Mem yog kev kawm txog kev ntws ntawm lub zog Qi hla tej chaw ib puag ncig tiag tiag (Av / Ti), uas raug tswj los ntawm hwj chim ntawm Ntuj (Tian) thiab Tib Neeg (Ren)."),

      pBody("Koj yuav pom tau los ntawm Lub Rooj 8.1 tias:"),
      pBullet("• Yam Ntxwv ntawm Dej yog Yang: ", "Tsis nres, txav mus los, thiab ci ntsa iab."),
      pBullet("• Yam Ntxwv ntawm Roob yog Yin: ", "Txias, tsaus, thiab ntsiag to."),

      pBody("Tsis txhob xav yuam kev tias dej yog Yin tsuas yog vim nws yoog raws li lub ntiaj teb. Thaum ntev mus, yog lub roob uas yuav tsum tau yoog raws li dej thiab raug dej txhuam kom hloov pauv!"),

      pBody("Qhov tshwm sim yog: Cov qauv loj xws li pas dej hiav txwv lossis roob siab yuav txiav txim txog kev ntws ntawm lub zog Qi hauv theem loj heev, ntau dua li kob xiav ntawm phab ntsa sab qaum teb hauv chav pw ntawm ib tug neeg! Looj Mem yog hais txog kev sib npaug, thiab cov kws txawj looj mem hais ntxiv tias nws kuj yog hais txog qhov luaj li cas (sense of proportion) thiab. Thaj chaw ib puag ncig tiag tiag ntawm ib qho chaw yeej muaj qhov luaj loj dua thiab muaj hwj chim loj dua lub qhov rai lossis lub iav tsom hauv lub tsev me me."),

      pBox("Txoj Cai Kub ntawm Looj Mem Hnub Qub Ya:",
        "Qhov xwm txheej thiab koob hmoov raug txiav txim los ntawm cov Hnub Qub Ya uas raug lees paub tseeb, lossis raug txhawb los ntawm yam ntxwv sab nraud, lossis tau txais kev txhawb nqa, lossis tsis muaj kev txhawb nqa los ntawm thaj chaw tiag tiag uas haum raws li nws xwb!"),

      pBody("Piv txwv li: Hnub Qub Dej 8 nyob rau Lub Tsev Tig Ntsej Muag (Facing Palace) yog ib qho zoo heev rau txoj hmoov nplua mias hauv Caij Nyoog 7 lossis Caij Nyoog 8. Tab sis Hnub Qub Dej 8 hauv lub tsev no yuav muaj zog tiag tiag tsuas yog thaum sab nraud ntawm Lub Tsev Tig Ntsej Muag muaj yam ntxwv zoo li Dej thiab, tshwj xeeb yog dej tiag tiag. Yog tias sab nraud raug lub roob siab thaiv cia, ces nws yuav tsis muaj txiaj ntsig dab tsi li!"),

      pBody("Hauv cheeb tsam nroog thiab ib ncig nroog, tej vaj tse siab thiab tej phab ntsa nyob ib sab tuaj yeem sawv cev rau lub roob tau zoo heev. Ntawm ib sab ntxiv, tej txoj kev tsheb loj thiab thaj chaw uas qis dua tuaj yeem sawv cev rau qhov chaw muaj dej tau thiab. Tab sis yeej paub meej tias tej yam tiag tiag yeej zoo dua tej yam hloov pauv sawv cev tas li!"),

      pH2("7. Cov Duab Yam Ntxwv ntawm Roob rau Cuaj Tug Hnub Qub Ya"),
      pBody("Txhua tug ntawm Cuaj Tug Hnub Qub Ya muaj kev sib raug zoo nrog cov duab yam ntxwv ntawm roob uas txuas nrog rau ib tug hnub qub. Hnub Qub Roob uas zoo (Auspicious Mountain Star) yuav tau txais kev txhawb nqa los ntawm lub roob tiag tiag nyob rau 4 theem xws li:"),
      pBullet("1. Qib Ib: ", "Pom tseeb tias Hnub Qub Roob tau txais kev txhawb nqa yog tias muaj lub roob tiag tiag nyob rau thaj chaw ntawm nws."),
      pBullet("2. Qib Ob: ", "Yuav zoo dua ntau yog tias tus duab yam ntxwv ntawm lub roob tiag tiag muaj tib Yam Zog (Five Elements) nrog rau Yam Zog ntawm Hnub Qub Roob ntawd."),
      pBullet("3. Qib Peb: ", "Yog tias lub roob tiag tiag muaj tus duab yam ntxwv haum raws nraim ib tug Hnub Qub Ya twg, qhov no yuav pab txhawb kom nws lub zog thiab hwj chim loj hlob tuaj ntxiv."),
      pBullet("4. Qib Plaub: ", "Thaum kawg, yog tias lub roob tiag tiag haum raws nraim Hnub Qub Roob uas pom hauv daim phiaj, ces nws lub zog yuav muaj zog loj heev uas yuav luag tsis muaj dab tsi tuaj thaiv tau li!"),

      pBody("Koj yuav tsum to taub tias cov duab yam ntxwv ntawm roob haum rau txhua tug ntawm Cuaj Tug Hnub Qub Ya li cas, kom koj thiaj li nco tau thaum mus ua hauj lwm hauv thaj chaw tiag tiag. Koj yuav tsum soj ntsuam lub roob kom zoo kom thiaj li paub txog nws. Muaj ntau zaus uas lub roob tsis zoo nkaus li tus qauv uas qhia hauv Lub Rooj 8.2. Yog tias muaj li ntawd, koj yuav tsum nrhiav lwm cov yam ntxwv ntawm lub roob los pab txiav txim."),

      pBody("Piv txwv li: Hauv tej roob uas ntsia tsis tshua meej, yog muaj cov pob zeb kheej kheej zoo li Roob Kub (Metal Mountain) tawm tuaj ntawm sab roob, qhov no yuav pab qhia koj tias lub roob ntawd yog Roob Kub, thiab yog li ntawd nws yuav txhawb Hnub Qub 6-Kob Dawb (Wu Qu) lossis Hnub Qub 7-Kob Liab (Po Jun)."),

      pBody("Cov pob roob uas muaj pob zeb tsis xwm yeem thiab kauv ua voj voog yuav suav tau tias yog Roob Dej ntawm Hnub Qub 4-Kob Ntsuab (Wen Qu) lossis Roob Hluav Taws / Roob Txiav Theem ntawm Hnub Qub 9-Kob Ntshav (You Bi). Yog tias muaj ntau lub pob roob txuas zuj zus, ib lub nyob tom qab ib lub, nws muaj feem ntau yuav yog Hnub Qub 9-Kob Ntshav (You Bi)."),

      pBody("Cov qauv pob zeb loj xws li Pob Zeb Ayers Rock (Uluru) hauv plawv teb chaws Australia muaj yam ntxwv zoo li lub roob ntawm Hnub Qub 6-Kob Dawb (Wu Qu) uas yog Roob Kub (Metal Mountain). Thiab tej roob uas muaj saum ntsis tiaj tus thiab ob sab qis heev, lossis thaj av siab zoo li tej ntsuam rog/tawb roj (butter-shaped plateau) yuav muaj yam ntxwv ntawm Roob Av ntawm Hnub Qub 2-Kob Dub (Ju Men)."),

      pBody("(Saib Ntxiv 5 txog cov ntsiab lus ntawm cov duab yam ntxwv ntawm roob, thiab Saib Ntxiv 10 txog cov duab qhia cov yam ntxwv ntawm thaj chaw dej)."),

      pBox("Kev Ntsuam Xyuas Thaj Av Tiag Tiag Yog Qhov Yuav Tsum Tau Ua:",
        "Hwj chim ntawm thaj chaw yam ntxwv sab nraud ntawm thaj av, uas tuaj yeem txhawb lossis muab cov hnub qub hauv daim phiaj tshem tawm, tsis txhob saib tsis muaj nqis li! Qhov no yog ib qho laj thawj uas Looj Mem tiag tiag tsis tuaj yeem ua tau los ntawm kev tsuas muab daim phiaj tso rau saum rooj thiab zaum suav lej nkaus xwb.\n\nTus xib fwb Looj Mem yuav tsum tau mus txog rau ntawm thaj chaw tiag tiag, ib yam nkaus li tus kws kos duab tsev yuav tsum tau tshuaj xyuas thaj av ua ntej yuav muab tus cwj mem sau rau saum daim ntawv.\n\nPeb tau tshuaj xyuas tas lawm tias Hnub Qub Roob thiab Hnub Qub Dej yog dab tsi, thiab tshuaj xyuas tias lawv raug cuam tshuam los ntawm thaj av ib puag ncig li cas. Tam sim no txog lub caij uas peb yuav pib kos daim phiaj Looj Mem Hnub Qub Ya tiag tiag lawm!"),

      pH2("8. Daim Phiaj Cuaj Tus Duab Yam Ntxwv ntawm Roob Thiab Lub Rooj 8.2"),
      ...pImage('fig_8_1_nine_mountain_shapes.png', 520, 532, 'Daim Duab 8.1: Cuaj Tug Hnub Qub Ya Thiab Cov Duab Yam Ntxwv ntawm Roob (Tang Dynasty Yang Yun Song Nine Star Mountain Shapes)'),

      pBody("Hauv qab no yog Lub Rooj 8.2 uas qhia meej txog Cuaj Tug Hnub Qub Ya, cov npe Suav thaum ub, cov duab yam ntxwv ntawm roob, lub ntsiab lus, Yam Khoom sab nraud, Hnub Qub saum ntuj, thiab cov yam ntxwv hauv thaj chaw tiag:"),

      pTable82NineMountainShapes(),

      pBody("Nco ntsoov: Kev to taub txog cov duab yam ntxwv ntawm roob no yog ib qho cuab yeej tseem ceeb heev rau tus kws tshuaj Looj Mem Hnub Qub Ya. Thaum koj mus txog ib qho chaw twg, koj tsis yog tsuas saib daim phiaj ntawm daim ntawv xwb, tab sis koj yuav tsum ntsia saib cov roob thiab cov dej sab nraud seb lawv txhawb lossis txwv cov hnub qub twg hauv daim phiaj!"),
    
        pH1("8. Cov Qauv Roob Thiab Cuaj Hnub Qub Ya (Mountain Formations)"),
        pBody("Hauv txuj ci Looj Mem qub, cov duab roob sib txawv tau txuas nrog cuaj lub hnub qub ya. Txhua hom roob tsim tawm lub zog Qi sib txawv:\n" +
          "- Roob Tan Lang (1-Dawb / Ntoo): Lub ncov roob kheej kheej thiab siab zoo li tus ncej ntoo; coj kev kawm ntawv thiab koob meej.\n" +
          "- Roob Ju Men (2-Dub / Av): Lub ncov roob tiaj tus zoo li lub rooj; tswj hwm nyiaj txiag thiab vaj tse.\n" +
          "- Roob Lu Cun (3-Ntsuab / Av): Lub roob muaj ntau ntau lub ncov zoo li lub nruas tab sis nqes qis; ceev faj teeb meem kev sib cav.\n" +
          "- Roob Wen Qu (4-Ntsuab / Dej): Lub roob zoo li nthwv dej uas txuas ntxiv; zoo rau kev sau ntawv thiab tswv yim ntse.\n" +
          "- Roob Lian Zhen (5-Daj / Hluav Taws): Lub roob pob zeb ntse ntse, tawg nthoob, tsis muaj nroj ntsuab; yog roob phem tshaj plaws.\n" +
          "- Roob Wu Qu (6-Dawb / Kub): Lub ncov roob kheej zoo li lub tswb ntxeev; coj hwj chim tub rog thiab kev tswj hwm.\n" +
          "- Roob Po Jun (7-Liab / Kub): Lub ncov roob tawg thiab muaj pob zeb ntse ntse; coj tub sab thiab kev phom sij.\n" +
          "- Roob Zuo Fu (8-Dawb / Av) & You Bi (9-Ntshav / Hluav Taws): Cov roob mos muag uas pab txhawb nqa lwm cov roob loj; coj kev nplua nuj."),

        pH1("9. Cov Qauv Dej Ntws Thiab Cuaj Hnub Qub Ya (Water Formations)"),
        pBody("Dej tswj hwm txog nyiaj txiag. Hauv txuj ci Looj Mem, kev ntws ntawm dej tau faib ua ntau hom:\n" +
          "1. Dej Ntws Nkhaus Qhwv Lub Tsev (Embracing Water): Dej ntws maj mam nkhaus zoo li txoj siv tawv qhwv lub tsev; zoo tshaj plaws rau nyiaj txiag khaws cia.\n" +
          "2. Dej Ntws Ncaj Nrawm (Shooting Arrow Water): Dej ntws ceev ceev ntsia ncaj rau lub tsev; ua rau poob nyiaj sai heev.\n" +
          "3. Dej Ntws Rov Qab (Reverse Water): Dej nkhaus tawm mus sab nraud zoo li rab hneev tua tawm; ua rau tsev neeg tawg paj tsis sib haum.\n" +
          "4. Pas Dej Ntsiag To (Still Water): Lub pas dej ntshiab uas ntsiag to pem hauv ntej ntawm lub tsev; yog qhov chaw khaws lub zog Qi nplua nuj tshaj plaws."),

    
        // =========================================================================
        // 10. LUB HAUV PAUS TSEV YAJ THIAB TSEV YEEB (YANG & YIN DWELLINGS)
        // =========================================================================
        pH1("10. Lub Hauv Paus Tsev Yaj Thiab Tsev Yeeb (Theory of Yang & Yin Dwellings)"),
        pBody("Hauv txuj ci Looj Mem thaum ub, kev ntsuam xyuas thaj chaw tau muab faib ua ob ceg loj tshaj plaws:\n" +
          "1. Tsev Yaj (Yang Zhai - Vaj Tsev Neeg Muaj Sia Nyob): Yog lub tsev rau tib neeg muaj sia nyob, ua hauj lwm, noj pw, thiab tsim tsev neeg. Lub zog Yaj yog lub zog nti, nrawm, sov siab, thiab ci ntsa iab. Tsev Yaj tswj hwm txog: Nyiaj txiag tam sim no, txoj hauj lwm loj, kev vam meej ntawm tsev neeg, kev noj qab nyob zoo, thiab kev thaj yeeb ntawm cov neeg tab tom muaj sia nyob.\n" +
          "2. Tsev Yeeb (Yin Zhai - Thaj Chaw Ntxa / Thaj Chaw Ntxa): Yog qhov chaw ntxa faus cov poj koob yawm txwv uas tas sim neej lawm. Lub zog Yeeb yog lub zog ntsiag to, txias, thiab ruaj khov hauv av. Tsev Yeeb tswj hwm txog: Lub hauv paus cag ntawm tsev neeg, kev xeeb tub xeeb ntxwv, kev txawj ntse ntawm cov me nyuam yaus, thiab txoj hmoov zoo mus ntev txog ntau tiam neeg."),

        pBox("Ceeb Toom Kev Kawm Ntxiv (Note for Advanced Study):",
          "Tshooj no qhia txog lub hauv paus pib ntawm Tsev Yaj thiab Tsev Yeeb hauv Looj Mem ib puag ncig. Yog koj xav kawm kom tob txog txhua yam qauv tsev niaj hnub nim no, kev phim rau tib neeg txhua yam raws Zauv Ming Gua thiab Tsib Yam Zog, thiab kev cuam tshuam rau cov xeeb ntxwv txhua ceg ntawm cov poj koob yawm txwv cov pob txha, koj tuaj yeem mus kawm ntxiv rau hauv FEEM 3: TSHOOJ 16 (Txuj Ci Tsev Yaj Qib Siab) thiab TSHOOJ 17 (Txuj Ci Tsev Yeeb Qib Siab)."),

        pBody("Cov Kws Txawj Looj Mem qhia hais tias: 'Tsev Yeeb yog lub hauv paus cag ntoo (Roots), Tsev Yaj yog cov ceg thiab nplooj ntoo (Branches & Leaves)'. Yog lub hauv paus cag zoo (Tsev Yeeb zoo), cov ceg thiab nplooj yuav txi txiv ntau ntau (Tsev Yaj nplua nuj). Tab sis yog lub hauv paus cag qhuav (Tsev Yeeb phem), txawm Tsev Yaj yuav zoo npaum li cas los xij, koob hmoov yuav tsis ntev."),

        pH2("Qauv Plaub Tug Tsiaj Saum Ntuj (Four Celestial Animals / Armchair Formation):"),
        pBody("Tsis hais Tsev Yaj lossis Tsev Yeeb, qauv zoo tshaj plaws hauv kev xaiv thaj av yog qauv 'Rooj Zaum Xis' (Armchair Formation) uas tiv thaiv los ntawm Plaub Tug Tsiaj Saum Ntuj:"),
        pBullet("• Vaub Kib Dub (Xuan Wu - Tom Qab): ", "Yuav tsum muaj roob siab, phab ntsa ruaj khov, lossis tsev siab nyob tom qab lub tsev (lossis tom qab lub ntxa) kom muaj chaw nres ruaj khov. Tswj hwm kev txhawb nqa los ntawm cov neeg loj, kev noj qab haus huv, thiab kev muaj sia ntev."),
        pBullet("• Zaj Ntsuab (Qing Long - Sab Laug): ", "Thaj av lossis cov roob sab laug yuav tsum siab dua sab xis me ntsis. Zaj Ntsuab sawv cev rau lub zog Yaj, txiv neej, hwj chim, kev nce qib, thiab koob meej."),
        pBullet("• Tsov Dawb (Bai Hu - Sab Xis): ", "Thaj av lossis cov roob sab xis yuav tsum qis dua sab laug me ntsis thiab mos muag. Tsov Dawb sawv cev rau lub zog Yeeb, poj niam, kev khaws nyiaj txiag, thiab kev tiv thaiv. CEEV FAJ: Sab Tsov Dawb tsis txhob siab dua lossis ntev dua sab Zaj Ntsuab, vim tias yog Tsov siab dua Zaj, poj niam yuav tswj hwm tsev neeg lossis muaj kev sib cav phem!"),
        pBullet("• Noog Liab (Zhu Que - Pem Hauv Ntej): ", "Pem hauv ntej ntawm lub tsev yuav tsum muaj thaj chaw qhib dav uas hu ua 'Ming Tang' (Bright Hall), thiab tom qab qhov chaw qhib ntawd muaj dej ntws maj mam lossis txoj kev tsheb nkhaus qhwv. Tswj hwm kev lag luam, nyiaj txiag, thiab txoj hauv kev tshiab."),

        ...pImage('fig_8_4_yang_zhai_yin_zhai.png', 520, 360, "Daim Duab 8.4: Kev Sib Txawv Ntawm Tsev Yaj (Vaj Tsev Neeg Nyob) Thiab Tsev Yeeb (Thaj Chaw Ntxa)"),

        pH2("Daim Phiaj 8.3: Qauv Vaj Tsev Tsev Yaj Thiab Tsev Yeeb"),
        new Table({
          width: { size: 13800, type: WidthType.DXA },
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({ cantSplit: true, tableHeader: true, children: [makeHeaderCell("Yam Ntxwv Ntsuas", 2500),
                makeHeaderCell("Tsev Yaj (Tsev Neeg Muaj Sia)", 3500),
                makeHeaderCell("Tsev Yeeb (Thaj Chaw Ntxa)", 3800),
                makeHeaderCell("Cov Kev Cai Tswj fwm Tseem Ceeb", 4000),
              ],
              tableHeader: true,
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Lub Zog Tswj Hwm", 2500, true),
                makeDataCell("Lub Zog Yaj (Lub teeb ci, cua, kev txav chaw)", 3500),
                makeDataCell("Lub Zog Yeeb (Kev ntsiag to, av qhuav, txias)", 3800),
                makeDataCell("Tsev Yaj xav tau 70% Yaj / 30% Yeeb; Tsev Yeeb xav tau 100% Yeeb ntsiag to.", 4000),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Cov Yam Zoo (Auspicious)", 2500, true, true),
                makeDataCell("• Ming Tang dav pem hauv ntej\n• Lub teeb ci ntsa iab zoo\n• Cua ntsawj mos muag tsis nrawm\n• Qhov rooj loj ntsia mus rau fab zoo\n• Dej ntws qhwv pem hauv ntej", 3500, false, true),
                makeDataCell("• Txoj leeg zaj (Long Mai) txuas nraim\n• Roob qhwv ob sab zoo li rooj zaum\n• Av daj ntshiab, tsis muaj dej nyab\n• Ntsia pom roob zoo nkauj pem hauv ntej\n• Dej ntws kauv ntsiag to", 3800, false, true),
                makeDataCell("Tsim kom muaj kev nplua nuj rau neeg nyob thiab tseg koob hmoov rau tub xeeb ntxwv.", 4000, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Cov Yam Phem (Inauspicious)", 2500, true),
                makeDataCell("• Tsev tsaus nti tsis muaj teeb ci\n• Cua hlob ntsawj nrawm nroos\n• Txoj kev tsheb tsoo qhov rooj\n• Qhov cub kub nyob plawv tsev\n• Ces kaum tsev ploj ntau fab", 3500),
                makeDataCell("• Ntxa nyob saum ntsis roob cua ntsawj\n• Dej xau nkag rau hauv lub ntxa\n• Cag ntoo loj nkag mus hauv ntxa\n• Pob zeb ntse tawg nthoob ncig ntxa\n• Suab nrov los ntawm tsheb nqaj hlau", 3800),
                makeDataCell("Tsev Yeeb phem ua rau me nyuam muaj mob nkeeg txawv txawv, poob nyiaj tag nrho, tub xeeb ntxwv tsis vam meej.", 4000),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Txoj Kev Kho Kom Zoo", 2500, true, true),
                makeDataCell("• Taws teeb ci, qhib qhov rai\n• Teeb daim phab thaiv, tsom iav Pa Kua\n• Siv pas dej txav thiab pas dej ntsev\n• Hloov chaw pw thiab chaw ua noj", 3500, false, true),
                makeDataCell("• Tshem cov cag ntoo loj ib puag ncig\n• Khawb kwj dej kom dej tsis nyab ntxa\n• Tsim phab ntsa pob zeb thaiv cua ntsawj\n• Yog phem heev: Tsiv ntxa mus rau qhov tshiab", 3800, false, true),
                makeDataCell("Kev kho Tsev Yeeb xav tau kws looj mem paub txog San He thiab Luopan qib siab.", 4000, false, true),
              ],
            }),
          ],
        }),

        // =========================================================================
        // 11. COV QAUV DUAB THAJ AV TAG NRHO (LAND PLOT SHAPES)
        // =========================================================================
        pH1("11. Cov Qauv Duab Thaj Av Tag Nrho (Complete Land Plot Shapes & Topography)"),
        pBody("Cov duab ntawm thaj av uas koj tsim tsev rau saum yog lub hauv paus uas txais lub zog Qi ntawm lub ntiaj teb. Yog thaj av muaj duab zoo, lub tsev yuav nqus tau lub zog Qi zoo tau yooj yim. Tab sis yog thaj av muaj duab tsis zoo, lub zog Qi yuav tawg paj lossis tsim kom muaj Sha Qi uas ua rau tsev neeg ntsib kev nyuaj siab. (Txog txuj ci qib siab ntawm Tsev Yaj rau neeg nyob thiab Tsev Yeeb rau thaj chaw ntxa, saib Feem 3: Tshooj 16 thiab Tshooj 17)."),

        ...pImage('book_figures/clean_hmong/fig_8_2_land_plot_shapes.png', 540, 310, 'Daim Duab 8.2: Cov Qauv Duab Thaj Av Hauv Looj Mem: Av Xwm Fab (Square), Av Hnab Nyiaj Kub (Money Bag), Av Nqaim Tom Qab (Funnel), Av Peb Ces Kaum Ntse (Fire Sha), Av Riam Txiav (L-Shape), thiab Av Nce Theem (Slope)'),

        pH2("Daim Phiaj 8.4: Qauv Cov Duab Thaj Av Tag Nrho"),
        new Table({
          width: { size: 13800, type: WidthType.DXA },
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({ cantSplit: true, tableHeader: true, children: [makeHeaderCell("Duab Thaj Av", 2200),
                makeHeaderCell("Yam Khoom (Element)", 2200),
                makeHeaderCell("Qib Zoo / Phem", 2200),
                makeHeaderCell("Kev Cuam Tshuam Rau Tsev Neeg", 3600),
                makeHeaderCell("Txoj Kev Kho Kom Haum Looj Mem", 3600),
              ],
              tableHeader: true,
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Av Xwm Fab (Square)", 2200, true),
                makeDataCell("Av (Earth)", 2200, true),
                makeDataCell("Zoo Tshaj Plaws", 2200, true),
                makeDataCell("Ruaj khov tshaj plaws, tsev neeg sib haum xeeb, nyiaj txiag khaws tau ruaj ntseg.", 3600),
                makeDataCell("Zoo lawm tsis tas kho; tsim tsev rau nruab nrab kom tshuav vaj paj ncig.", 3600),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Av Ntev Xwm Yeem (Rectangle)", 2200, true, true),
                makeDataCell("Ntoo & Av (Wood/Earth)", 2200, true, true),
                makeDataCell("Zoo Heev", 2200, true, true),
                makeDataCell("Kev loj hlob tsis tu ncua, kev kawm ntawv zoo, kev noj qab haus huv ruaj khov.", 3600, false, true),
                makeDataCell("Tsim tsev raws kab ntev kom lub teeb ci nkag tau rau txhua chav.", 3600, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Av Hnab Nyiaj (Narrow Front, Wide Back)", 2200, true),
                makeDataCell("Av Nplua Nuj (Tu Li)", 2200, true),
                makeDataCell("Zoo Tshaj Plaws (Top Auspicious)", 2200, true),
                makeDataCell("Nyiaj txiag nkag los yooj yim tab sis tsis xau tawm; kev nplua nuj loj tuaj txhua tiam.", 3600),
                makeDataCell("Zoo heev! Muab lub qhov rooj loj tso rau pem hauv ntej, khaws chaw ntiag tug tom qab.", 3600),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Av Nqaim Tom Qab (Wide Front, Narrow Back)", 2200, true, true),
                makeDataCell("Av Xau Zog (Funnel)", 2200, true, true),
                makeDataCell("Phem (Inauspicious)", 2200, true, true),
                makeDataCell("Pib zoo tab sis xaus phem; nyiaj txiag xau tawm mus zuj zus, tub xeeb ntxwv poob lag luam.", 3600, false, true),
                makeDataCell("Tsim phab ntsa thaiv sab nqaim, teeb lub teeb pom kev ci tom qab kom rub lub zog nthuav dav.", 3600, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Av Peb Ces Kaum (Triangle)", 2200, true),
                makeDataCell("Hluav Taws Sha (Fire)", 2200, true),
                makeDataCell("Phem Tshaj Plaws", 2200, true),
                makeDataCell("Xwm txheej phem, hluav taws kub, kev phom sij ntawm txoj kev tsheb, sib cav sib foob.", 3600),
                makeDataCell("TXWV TSIS TXHOB TSIM TSEV PUV! Muab cov ces kaum ntse txiav ua vaj paj lossis cog ntoo thaiv.", 3600),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Av Riam Txiav (L-Shape / Knife)", 2200, true, true),
                makeDataCell("Kub Ntse (Metal Sha)", 2200, true, true),
                makeDataCell("Phem / Ceev Faj", 2200, true, true),
                makeDataCell("Ces kaum ploj ua rau tus tswv lossis tus poj niam muaj mob hnyav raws fab uas ploj.", 3600, false, true),
                makeDataCell("Teeb ncej fais (ncej hluav taws xob) ci lossis tsim lub tsev rau khoom ntawm ces kaum ploj kom rov xwm yeem.", 3600, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Av Nce Theem (Front Low, Back High)", 2200, true),
                makeDataCell("Av Roob (Mountain Backing)", 2200, true),
                makeDataCell("Zoo Tshaj Plaws", 2200, true),
                makeDataCell("Nce qib hauv hauj lwm, muaj neeg loj pab txhawb, tsev neeg noj qab nyob ntev.", 3600),
                makeDataCell("Tsim tsev kom sab nraub qaum nres rau sab siab, sab qhov rooj qhib rau sab qis.", 3600),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
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
            new TableRow({ cantSplit: true, tableHeader: true, children: [makeHeaderCell("Qauv Txoj Kev", 2400),
                makeHeaderCell("Hom Zog Qi", 2200),
                makeHeaderCell("Qib Zoo / Phem", 2200),
                makeHeaderCell("Kev Cuam Tshuam Looj Mem", 3500),
                makeHeaderCell("Cov Tswv Yim Kho Tiag Tiag", 3500),
              ],
              tableHeader: true,
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Kev Nkhaus Qhwv (Jade Belt / Yu Dai)", 2400, true),
                makeDataCell("Sheng Qi (Zog Vam Meej)", 2200, true),
                makeDataCell("Zoo Tshaj Plaws", 2200, true),
                makeDataCell("Txoj kev qhwv zoo li txoj siv tawv huab tais, khaws tau nyiaj txiag loj, koob hmoov.", 3500),
                makeDataCell("Zoo heev lawm! Qhib lub qhov rooj loj kom pom txoj kev nkhaus no.", 3500),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Kev Nkhaus Tua Tawm (Reverse Bow / Fan Gong)", 2400, true, true),
                makeDataCell("Sha Qi (Riam Txiav)", 2200, true, true),
                makeDataCell("Phem Heev", 2200, true, true),
                makeDataCell("Txoj kev zoo li rab hneev tua tawm rau lub tsev; coj kev poob nyiaj, kev ntxeev siab, mob nkeeg.", 3500, false, true),
                makeDataCell("Dai tsom iav Pa Kua convex, cog ntoo tuab thaiv, tsim phab ntsa pob zeb pem hauv ntej.", 3500, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Kev Ncaj Tsoo Qhov Rooj (T-Junction / Lu Chong)", 2400, true),
                makeDataCell("Chong Sha (Xub Tua)", 2200, true),
                makeDataCell("Phem Tshaj Plaws", 2200, true),
                makeDataCell("Tsheb khiav nrawm ntsia ncaj rau qhov rooj; coj xwm txheej phem sai, phom sij rau txoj sia.", 3500),
                makeDataCell("Muab pob zeb Tai Shan Shi Gan Dang tso rau pem taub, teeb pas dej txav, lossis hloov qhov rooj.", 3500),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Kev Riam Txiab (Y-Junction / Scissor Road)", 2400, true, true),
                makeDataCell("Jian Dao Sha (Riam Txiab)", 2200, true, true),
                makeDataCell("Phom Sij Heev", 2200, true, true),
                makeDataCell("Tsev nyob hauv nruab nrab ntawm ob txoj kev sib tshuam; coj kev phais mob, raug mob los ntawm riam phom.", 3500, false, true),
                makeDataCell("Dai tsom iav concave, cog tsob ntoo nphoo loj thaiv, tsis txhob ua qhov rooj iav qhib dav.", 3500, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Kev Kaw (Cul-de-sac / Dead End)", 2400, true),
                makeDataCell("Si Qi (Qi Tuag)", 2200, true),
                makeDataCell("Phem / Ntxhov Siab", 2200, true),
                makeDataCell("Qi tsis ncig, nyob hauv qhov chaw kaw; ua rau lub tswv yim txhaws, hauj lwm tsis nce qib, ntxhov siab.", 3500),
                makeDataCell("Taws teeb pom kev ci ntsa iab pem hauv ntej, teeb lub pas dej txav kom lub zog Qi nti tuaj.", 3500),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
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
            new TableRow({ cantSplit: true, tableHeader: true, children: [makeHeaderCell("Qhov Chaw Nyob Ntawm Dej", 2600),
                makeHeaderCell("Qib Kev Tso Dej", 3200),
                makeHeaderCell("Txiaj Ntsig / Kev Cuam Tshuam", 4000),
                makeHeaderCell("Cov Kev Cai Tswj fwm Yuav Tsum Nco Ntsoov", 4000),
              ],
              tableHeader: true,
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Pem Hauv Ntej Tsev (Ming Tang)", 2600, true),
                makeDataCell("ZOO TSHAJ PLAWS\n(Auspicious)", 3200, true),
                makeDataCell("Rub lub zog Sheng Qi thiab nyiaj txiag nkag los rau hauv lub tsev; tsev neeg muaj koob meej.", 4000),
                makeDataCell("Dej yuav tsum ntshiab, ncig maj mam, tsis txhob ceev dhau, thiab tsis txhob muaj ntxhiab tsw phem.", 4000),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Palace Hnub Qub Dej 9 (Caij 9)", 2600, true, true),
                makeDataCell("QHIB HMOOV NYIAJ LOJ\n(Wang Qi Water)", 3200, true, true),
                makeDataCell("Tsim kom muaj nyiaj txiag loj tshaj plaws hauv Lub Caij 9 (2024–2043); lag luam vam meej nrawm.", 4000, false, true),
                makeDataCell("Siv lub pas dej txav (moving water / fountain) lossis pas ntses koi uas muaj oxygen txav.", 4000, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Palace Hnub Qub Dej 1 (Sheng Qi)", 2600, true),
                makeDataCell("ZOO HEEV\n(Future Wealth)", 3200, true),
                makeDataCell("Txhawb nqa txoj kev kawm ntawv, tswv yim ntse, koob meej, thiab nyiaj txiag rau yav tom ntej.", 4000),
                makeDataCell("Haum zoo rau pas dej me me lossis lub tais dej ntshiab ntxiv paj ntoo.", 4000),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Rooj Vag Tsev Fuab Tais (Castle Gate)", 2600, true, true),
                makeDataCell("CAWM TSEV POOB NYIAJ\n(Cheng Men Water)", 3200, true, true),
                makeDataCell("Qhib qhov rooj vag zais cia kom rub lub zog nplua nuj nkag los rau cov tsev uas muaj daim duab nyuaj.", 4000, false, true),
                makeDataCell("Yuav tsum ntsuas qib Luopan kom raug tseeb raws li cov cai ntawm Tshooj 13.", 4000, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Tom Qab Tsev (Back of House)", 2600, true),
                makeDataCell("TXWV TSIS TXHOB TSO!\n(Drowning the Mountain)", 3200, true),
                makeDataCell("Ua rau poob chaw nres, tsev neeg mob nkeeg, poob nyiaj, thiab tsis muaj neeg pab txhawb nqa.", 4000),
                makeDataCell("ZAM KIAG LI! Tsuas yog tsev uas yog qauv Shuang Xing Dao Zuo xwb thiaj pub muaj dej tom qab roob.", 4000),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Palace Hnub Qub Roob Tam Sim No", 2600, true, true),
                makeDataCell("PHOM SIJ RAU NEEG\n(Down the Mountain)", 3200, true, true),
                makeDataCell("Dej yuav rhuav tshem lub zog Hnub Qub Roob; ua rau neeg hauv tsev ntsib xwm txheej tuag lossis mob hnyav.", 4000, false, true),
                makeDataCell("Qhov chaw uas muaj Hnub Qub Roob 9 yuav tsum yog roob siab lossis rooj tog ruaj khov, tsis txhob muaj dej!", 4000, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Plawv Tsev (Tai Ji Center)", 2600, true),
                makeDataCell("TXWV TSHWAJ PLAWS\n(Heart Piercing)", 3200, true),
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
        pBody("Hauv txheej txheem Looj Mem, thaum muaj Sha Qi sab nraud tuaj tsoo lub tsev, peb tsis tas yuav ntshai lossis tsiv tsev tam sim ntawd. Muaj 4 txoj kev loj uas kws looj mem siv los kho:\n" +
          "1. Thaiv Cia (Block): Siv phab ntsa, ntoo, lossis rido thaiv kom Sha Qi tsis txhob nkag tau rau hauv qhov muag.\n" +
          "2. Txo Zog (Dissolve / Deflect): Siv lub voj voog Tsib Yam Zog los nqus lossis txo lub zog phem ntawd.\n" +
          "3. Tawm Tsam Rov Qab (Reflect): Siv tsom iav Pa Kua lossis pob zeb Tai Shan Shi Gan Dang rov tsoo.\n" +
          "4. Hloov Txoj Kev Taug (Transform): Siv lub pas dej txav lossis txoj kev nkhaus kom hloov Sha Qi mus ua Sheng Qi."),

        pH2("Daim Phiaj 8.7: Cov Tswv Yim Kho Sha Qi Sab Nraud Tag Nrho"),
        new Table({
          width: { size: 13800, type: WidthType.DXA },
          alignment: AlignmentType.CENTER,
          rows: [
            new TableRow({ cantSplit: true, tableHeader: true, children: [makeHeaderCell("Yam Sha Qi Sab Nraud", 2500),
                makeHeaderCell("Lub Npe Suav", 2200),
                makeHeaderCell("Kev Cuam Tshuam Phem", 2500),
                makeHeaderCell("Cov Khoom Siv Kho Tiag Tiag", 3600),
                makeHeaderCell("Txoj Kev Teeb Tsa Kom Zoo", 3000),
              ],
              tableHeader: true,
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Kev Ncaj Tsoo Qhov Rooj", 2500, true),
                makeDataCell("Lu Chong (路衝)", 2200, true),
                makeDataCell("Xwm txheej tsheb, phais mob, poob nyiaj sai.", 2500),
                makeDataCell("• Pob zeb Tai Shan Shi Gan Dang\n• Tsom iav Pa Kua convex (tawm)\n• Lub pas dej txav\n• Cog ntoo xyoob tuab tuab", 3600),
                makeDataCell("Tso pob zeb ntsia ncaj rau txoj kev, lossis tsim daim phab thaiv pem qhov rooj.", 3000),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Ces Kaum Ntse Ntawm Lwm Lub Tsev", 2500, true, true),
                makeDataCell("Jian Jiao Sha (尖角煞)", 2200, true, true),
                makeDataCell("Mob nkeeg, kev sib cav, kev ua phem ntawm neeg.", 2500, false, true),
                makeDataCell("• Tsom iav Pa Kua concave (nkag)\n• Dai lub tswb hlau 6 raj\n• Cog nroj ntsuab saum balcony\n• Dai daim ntaub thaiv tuab", 3600, false, true),
                makeDataCell("Tsis txhob qhib qhov rai ntsia ncaj rau ces kaum ntse ntawd tas li.", 3000, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Qhov Chaw Ntse Ntawm Ob Lub Tsev Siab", 2500, true),
                makeDataCell("Tian Zhan Sha (天斬煞)", 2200, true),
                makeDataCell("Cua hlob ntsawj nqaim zoo li rab riam txiav tsev; poob lag luam loj.", 2500),
                makeDataCell("• Tsom iav Pa Kua loj\n• Ob tug tsiaj Qi Lin tooj liab\n• Tsob ntoo thuv loj", 3600),
                makeDataCell("Muab ob tug Qi Lin tso rau sab balcony ntsia mus rau qhov chaw nqaim ntawd.", 3000),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Ncej Hluav Taws Xob / 5G Tower", 2500, true, true),
                makeDataCell("Huo Sha (火煞)", 2200, true, true),
                makeDataCell("Mob taub hau, mob qhov muag, kub ntxhov hauv siab, mob siab.", 2500, false, true),
                makeDataCell("• Lauj kaub av ncuab loj (Av)\n• Pas dej ntsiag to (Dej)\n• Pob zeb ntshiab quartz", 3600, false, true),
                makeDataCell("Siv Khoom Siv Av thiab Dej los nqus lub zog Hluav Taws kom txias tuaj.", 3000, false, true),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Nyob Ze Chaw Ntxa / Tsev Kho Mob", 2500, true),
                makeDataCell("Yin Sha (陰煞)", 2200, true),
                makeDataCell("Lub zog Yin ntau dhau, tsev tsaus nti, neeg hauv tsev qaug zog, npau suav phem.", 2500),
                makeDataCell("• Taws teeb ci ntsa iab Yang\n• Teeb ci liab lossis teeb teev ntuj\n• Ob tug tsov ntxhuav pob zeb\n• Dai daim ntaub liab", 3600),
                makeDataCell("Ua kom pem hauv ntej tsev kaj siab lug, tsis txhob cia ntoo ntxoov tsaus nti.", 3000),
              ],
            }),
            new TableRow({ cantSplit: true, children: [
                makeDataCell("Tsob Ntoo Tuag / Ncej Xov Pem Qhov Rooj", 2500, true, true),
                makeDataCell("Ding Xin Sha (頂心煞)", 2200, true, true),
                makeDataCell("Ua pa tsis xis, mob hauv siab, kev nyuaj siab hauv hauj lwm.", 2500, false, true),
                makeDataCell("• Tshem tawm yog ua tau\n• Dai lub tswb hlau\n• Tsom iav Pa Kua\n• Tso ob lub lauj kaub paj ntoo", 3600, false, true),
                makeDataCell("Tso cov paj ntoo ob sab qhov rooj kom txo qhov pom ntawm tus ncej ncaj qha.", 3000, false, true),
              ],
            }),
          ],
        }),

    ];

    // =========================================================================
    // FEEM 7: COV QAUV ROOB, DEJ, CUA & AV HAUV NTIAJ TEB TIAG (LUAN TOU MASTER CASES & FIELD MATRICES)
    // =========================================================================
    children.push(pH1("Feem 7: Cov Qauv Roob, Dej, Cua & Av Hauv Ntiaj Teb Tiag (Luan Tou Master Cases & Field Matrices)"));
    children.push(pBody("Tshooj no muab tag nrho cov qauv ntsuas roob, dej, av, cua, thiab sha qi sab nraud raws li cov qauv field cases tiag tiag, nrog rau daim ntawv ntsuas 9 Lub Roob Hnub Qub, cov duab dej ntws, thiab kev ntsuas thaj av:"));

    const { luanTouDeepCases, formatNarrativeCases } = require('./generate_deep_narrative_master_cases');
    const { buildLuanTouDiagnosticTables } = require('./build_master_diagnostic_matrices');
    children.push(...formatNarrativeCases(ctx, luanTouDeepCases));
    children.push(...buildLuanTouDiagnosticTables(ctx));

    return children;
  }
};
