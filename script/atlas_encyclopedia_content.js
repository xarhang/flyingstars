// atlas_encyclopedia_content.js
// PHAU NTAWV QHIA TAG NRHO 91 QAUV ROOB, THAJ AV THIAB KEV KHO LOOJ MEM
// The Definitive Illustrated Field Atlas of the 91 Core Landforms, Mountain Peaks, Water Formations, Sacred Soils, Land Plot Siting, and Environmental Sha Remedies
// Written in 100% authentic White Hmong (Hmoob Dawb) RPA
// Pure Master Archetypes | 100% Illustrated | Zero Bloat | Zero Repetitive Spam | Mathematically Calibrated Zero-Overflow OpenXML Layout

const fs = require('fs');
const path = require('path');
const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType,
  BorderStyle, HeadingLevel, ShadingType, ImageRun
} = require('docx');

function getAtlasEncyclopediaContent() {
  const elements = [];

  // Typography & Layout Helpers with Strict Anti-Overflow & Anti-Clipping Guardrails
  function pTitle(text) {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      keepNext: true,
      spacing: { before: 240, after: 120 },
      children: [new TextRun({ text, bold: true, size: 30, font: "Segoe UI", color: "1A237E" })]
    });
  }

  function pSubtitle(text) {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      keepNext: true,
      spacing: { before: 0, after: 240 },
      children: [new TextRun({ text, italics: true, size: 21, font: "Segoe UI", color: "37474F" })]
    });
  }

  function pH1(text, pageBreakBefore = false) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore,
      keepNext: true,
      spacing: { before: 280, after: 140 },
      children: [new TextRun({ text, bold: true, size: 25, font: "Segoe UI", color: "0D47A1" })]
    });
  }

  function pH2(text, pageBreakBefore = false) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      pageBreakBefore,
      keepNext: true,
      spacing: { before: 140, after: 60 },
      children: [new TextRun({ text, bold: true, size: 21, font: "Segoe UI", color: "1B5E20" })]
    });
  }

  function pH3(text) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_3,
      keepNext: true,
      spacing: { before: 120, after: 60 },
      children: [new TextRun({ text, bold: true, size: 19, font: "Segoe UI", color: "B71C1C" })]
    });
  }

  function pBody(text) {
    return new Paragraph({
      spacing: { before: 60, after: 100, line: 260 },
      children: [new TextRun({ text, size: 19, font: "Segoe UI", color: "212121" })]
    });
  }

  // Precision Callout Box: 13,800 dxa width fits cleanly inside the 14,438 dxa printable width
  function pBox(boldTitle, lines, borderColor = "1A237E", bgColor = "F5F7FA") {
    const textRuns = [];
    textRuns.push(new TextRun({ text: boldTitle + "\n", bold: true, size: 18, font: "Segoe UI", color: borderColor }));
    lines.forEach((l, idx) => {
      textRuns.push(new TextRun({ text: l, size: 17, font: "Segoe UI", color: "263238", break: idx > 0 ? 1 : 0 }));
    });

    const borderConfig = { style: BorderStyle.SINGLE, size: 14, color: borderColor };
    return new Table({
      alignment: AlignmentType.CENTER,
      width: { size: 13800, type: WidthType.DXA },
      rows: [
        new TableRow({
          cantSplit: true,
          children: [
            new TableCell({
              width: { size: 13800, type: WidthType.DXA },
              shading: { type: ShadingType.CLEAR, fill: bgColor },
              borders: {
                top: borderConfig,
                bottom: borderConfig,
                left: { style: BorderStyle.SINGLE, size: 32, color: borderColor },
                right: borderConfig
              },
              margins: { top: 90, bottom: 90, left: 140, right: 140 },
              children: [new Paragraph({ spacing: { line: 240 }, children: textRuns })]
            })
          ]
        })
      ]
    });
  }

  // Category Divider Plate (Dedicated Section Break Plate)
  function pCategoryPlate(number, title, intro, highlights) {
    const runs = [
      new TextRun({ text: `PAWG ${number}: ${title}\n`, bold: true, size: 24, font: "Segoe UI", color: "0D47A1" }),
      new TextRun({ text: intro + "\n\n", size: 19, font: "Segoe UI", color: "37474F", italics: true })
    ];
    highlights.forEach(h => {
      runs.push(new TextRun({ text: "• " + h + "\n", size: 18, font: "Segoe UI", color: "263238" }));
    });

    return [
      new Paragraph({
        pageBreakBefore: true,
        spacing: { before: 180, after: 120 }
      }),
      new Table({
        alignment: AlignmentType.CENTER,
        width: { size: 13800, type: WidthType.DXA },
        rows: [
          new TableRow({
            cantSplit: true,
            children: [
              new TableCell({
                width: { size: 13800, type: WidthType.DXA },
                shading: { type: ShadingType.CLEAR, fill: "F0F4F8" },
                borders: {
                  top: { style: BorderStyle.SINGLE, size: 24, color: "0D47A1" },
                  bottom: { style: BorderStyle.SINGLE, size: 24, color: "0D47A1" },
                  left: { style: BorderStyle.SINGLE, size: 36, color: "B78103" },
                  right: { style: BorderStyle.SINGLE, size: 12, color: "0D47A1" }
                },
                margins: { top: 180, bottom: 180, left: 220, right: 220 },
                children: [new Paragraph({ spacing: { line: 260 }, children: runs })]
              })
            ]
          })
        ]
      })
    ];
  }

  // Pre-load image buffers for instant deduplicated embedding
  const imgCache = {};
  function getImageBuffer(filename) {
    if (!imgCache[filename]) {
      const pathsToTry = [
        path.resolve(__dirname, '..', 'book_figures', 'cases_6126', filename),
        path.resolve(__dirname, '..', 'book_figures', 'realistic', filename),
        path.resolve(__dirname, '..', 'book_figures', 'clean_hmong', filename),
        path.resolve(__dirname, '..', 'book_figures', filename),
        path.resolve(__dirname, '..', 'hmong', 'img', filename),
        path.resolve(__dirname, '..', 'lao', 'img', filename)
      ];
      for (const p of pathsToTry) {
        if (fs.existsSync(p)) {
          imgCache[filename] = fs.readFileSync(p);
          break;
        }
      }
      if (!imgCache[filename]) {
        console.warn("[WARNING] Image not found: " + filename);
        return null;
      }
    }
    return imgCache[filename];
  }

  // Calibrated Master Image Inserter (Fits gracefully on single Landscape page)
  function pImage(filename, caption, width = 420, height = 236) {
    const imgData = getImageBuffer(filename);
    if (!imgData) {
      return [new Paragraph({ children: [new TextRun({ text: "[Daim Duab: " + caption + " - Missing]", color: "D32F2F" })] })];
    }
    const isJpg = filename.toLowerCase().endsWith('.jpg') || filename.toLowerCase().endsWith('.jpeg');
    return [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        keepNext: true,
        spacing: { before: 80, after: 30 },
        children: [
          new ImageRun({
            data: imgData,
            transformation: { width, height },
            type: isJpg ? "jpg" : "png"
          })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        keepNext: true,
        spacing: { before: 10, after: 60 },
        children: [
          new TextRun({ text: caption, italics: true, size: 16, font: "Segoe UI", color: "455A64" })
        ]
      })
    ];
  }

  // Dedicated Illustrated Archetype Card Inserter: 1 Dedicated Landscape Page per Archetype
  function pArchetypeItem(a, index, totalInCategory) {
    const isGood = a.score >= 60;
    const boxBorder = isGood ? "1B5E20" : "B71C1C";
    const boxBg = isGood ? "F1F8E9" : "FFEBEE";

    elements.push(new Paragraph({
      heading: HeadingLevel.HEADING_2,
      pageBreakBefore: true,
      keepNext: true,
      spacing: { before: 100, after: 40 },
      children: [
        new TextRun({
          text: `Qauv ${a.id}: ${a.baseName}`,
          bold: true,
          size: 21,
          font: "Segoe UI",
          color: isGood ? "1B5E20" : "B71C1C"
        })
      ]
    }));

    elements.push(...pImage(a.img, `Daim Duab ${a.id}: Qauv Tshuaj Xyuas Looj Mem - ${a.baseName}`, 410, 230));

    const sectorImpact = a.score >= 60
      ? "Thaum nyob rau phab Kan (Qaum Teb), Zhen (Sab Hnub Tuaj), Xun (Sab Hnub Tuaj Qab Teb), lossis Qian (Sab Hnub Poob Qaum Teb) yuav txhawb nqa koob meej, nyiaj txiag, thiab kev noj qab nyob zoo; yog nyob rau lwm phab los tseem muaj zog zoo tiv thaiv cua phem."
      : "Yog tias nyob rau phab Li (Pem Teb) ua rau mob plawv thiab qhov muag; yog nyob rau phab Dui (Sab Hnub Poob) ua rau mob ntsws thiab muaj kev sib cav; yog nyob rau phab Kan ua rau mob raum. Yuav tsum kho kom haum raws li txheej txheem.";

    const boxLines = [
      `1. Qauv Duab & Physics Huab Cua (Geological Shape & Aerodynamics): ${a.physics}`,
      `2. Kev Tshuaj Xyuas Raws Li 8 Phab Bagua (Compass Sectors & Spatial Impact): ${sectorImpact}`,
      `3. Txiaj Ntsig & Qhab Nia Zog (Impact & Energy Score): ${a.impact} (Qhab Nia Zog: ${a.score}/100)`,
      `4. Cov Tswv Yim Kho Kom Haum Looj Mem (Remedy Protocol): ${a.remedy || 'Tsim phab ntsa pob zeb granite thiab cog hav ntoo thaiv cua kom haum.'}`
    ];

    elements.push(pBox(`TSHAV QHIA DUAB & KEV TSHUAJ XYUAS: QAUV ${a.id} (${isGood ? 'QAUV ZOO' : 'QAUV PHEM'})`, boxLines, boxBorder, boxBg));
  }

  // Dedicated Land Plot Archetype Card Inserter: 1 Dedicated Landscape Page per Land Plot
  function pLandPlotItem(lp, index, totalInCategory) {
    const isGood = lp.score >= 60;
    const boxBorder = isGood ? "1B5E20" : "B71C1C";
    const boxBg = isGood ? "F1F8E9" : "FFEBEE";

    elements.push(new Paragraph({
      heading: HeadingLevel.HEADING_2,
      pageBreakBefore: true,
      keepNext: true,
      spacing: { before: 100, after: 40 },
      children: [
        new TextRun({
          text: `Qauv ${lp.id}: ${lp.baseName}`,
          bold: true,
          size: 21,
          font: "Segoe UI",
          color: isGood ? "1B5E20" : "B71C1C"
        })
      ]
    }));

    elements.push(...pImage(lp.img, `Daim Duab ${lp.id}: Qauv Tshuaj Xyuas Ciam Thaj Av, Chaw Tso Tsev, Kev Nkag & Pas Dej - ${lp.baseName}`, 410, 230));

    const boxLines = [
      `1. Qauv Duab & Physics Huab Cua (Geological Geometry & Aerodynamics): ${lp.geometryPhysics}`,
      `2. Kev Teeb Qhov Rooj & Txoj Kev Nkag (Entrance & Driveway Auspicious vs Inauspicious): ${lp.entranceAnalysis}`,
      `3. Qhov Chaw Tso Pas Dej & Kwj Dej (Pond, Pool & Drainage Auspicious vs Inauspicious): ${lp.waterAnalysis}`,
      `4. Kev Tshuaj Xyuas Raws Li 8 Phab Bagua (Compass Sectors & Energy Score): ${lp.baguaSectors} (Qhab Nia Zog: ${lp.score}/100)`,
      `5. Cov Tswv Yim Kho Kom Haum Looj Mem (Master Architectural Remediation): ${lp.remedy}`
    ];

    elements.push(pBox(`TSHAV QHIA DUAB & KEV TSHUAJ XYUAS THAJ AV: QAUV ${lp.id} (${isGood ? 'THAJ AV ZOO' : 'THAJ AV PHEM'})`, boxLines, boxBorder, boxBg));
  }

  // Dedicated Boundary Adjacency Archetype Card Inserter: 1 Dedicated Landscape Page per Archetype
  function pBoundaryItem(env, index, totalInCategory) {
    const isGood = env.score >= 60;
    const boxBorder = isGood ? "1B5E20" : "B71C1C";
    const boxBg = isGood ? "F1F8E9" : "FFEBEE";

    elements.push(new Paragraph({
      heading: HeadingLevel.HEADING_2,
      pageBreakBefore: true,
      keepNext: true,
      spacing: { before: 100, after: 40 },
      children: [
        new TextRun({
          text: `Qauv ${env.id}: ${env.baseName}`,
          bold: true,
          size: 21,
          font: "Segoe UI",
          color: isGood ? "1B5E20" : "B71C1C"
        })
      ]
    }));

    elements.push(...pImage(`${env.id}.png`, `Daim Duab ${env.id}: Qauv Ciam Av & Kev Nkag Tsev - ${env.baseName}`, 410, 230));

    const boxLines = [
      `1. Qauv Ciam Av & Physics Huab Cua: ${env.geometryPhysics || '-'}`,
      `2. Kev Teeb Qhov Rooj & Kev Nkag Tsev: ${env.entrancePlacement || '-'}`,
      `3. Chaw Tso Tsev & Kev Ntsia/Zaum: ${env.housePositioning || '-'} | Ntsia/Zaum: ${env.orientationFacing || '-'}`,
      `4. Zog Tsib Yam & Neeg Haum/Tsis Haum: ${env.elementGua || '-'} | Haum: ${env.favorablePeople || '-'} | Tsis Haum: ${env.clashingPeople || '-'} (Qhab Nia: ${env.score}/100)`,
      `5. Cov Tswv Yim Kho Kom Haum Looj Mem: ${env.comprehensiveRemedy || '-'}`,
      `6. Cov Kev Txwv Tsis Pom Zoo: ${env.taboos ? env.taboos.replace(/\n/g, ' ') : '-'}`
    ];

    elements.push(pBox(`TSHAV QHIA DUAB & KEV TSHUAJ XYUAS CIAM AV: QAUV ${env.id} (${isGood ? 'CIAM AV ZOO' : 'CIAM AV PHEM'})`, boxLines, boxBorder, boxBg));
  }

  // ===========================================================================
  // EXECUTIVE COVER PAGE (ໜ້າປົກມາດຕະຖານສາກົນ)
  // ===========================================================================
  elements.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    keepNext: true,
    spacing: { before: 160, after: 100 },
    children: [
      new TextRun({
        text: "★ XUAN KONG FEI XING MASTER FIELD ATLAS SERIES — 2026 EDITION ★",
        bold: true,
        size: 19,
        font: "Segoe UI",
        color: "B78103"
      })
    ]
  }));

  elements.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    keepNext: true,
    spacing: { before: 60, after: 80 },
    children: [
      new TextRun({
        text: "PHAU NTAWV QHIA TAG NRHO COV QAUV ROOB, THAJ AV THIAB KEV KHO LOOJ MEM",
        bold: true,
        size: 32,
        font: "Segoe UI",
        color: "0D47A1"
      })
    ]
  }));

  elements.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    keepNext: true,
    spacing: { before: 20, after: 120 },
    children: [
      new TextRun({
        text: "The Definitive Illustrated Field Atlas of the 109 Core Landforms, Mountain Peaks, Water Formations, Sacred Soils, Land Plot Siting, and Environmental Boundary Remedies",
        italics: true,
        size: 20,
        font: "Segoe UI",
        color: "37474F"
      })
    ]
  }));

  const coverImgData = getImageBuffer("real_armchair_landscape.jpg");
  if (coverImgData) {
    elements.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      keepNext: true,
      spacing: { before: 40, after: 40 },
      children: [
        new ImageRun({
          data: coverImgData,
          transformation: { width: 500, height: 250 },
          type: "jpg"
        })
      ]
    }));
  }

  elements.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    keepNext: true,
    spacing: { before: 10, after: 120 },
    children: [
      new TextRun({
        text: "Qauv Looj Mem Classical Armchair Landscape: Xuan Wu, Qing Long, Bai Hu, Ming Tang & Yu Dai Shui",
        size: 16,
        italics: true,
        font: "Segoe UI",
        color: "546E7A"
      })
    ]
  }));

  elements.push(new Table({
    alignment: AlignmentType.CENTER,
    width: { size: 13800, type: WidthType.DXA },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 13800, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: "F8FAFC" },
            borders: {
              top: { style: BorderStyle.SINGLE, size: 18, color: "0D47A1" },
              bottom: { style: BorderStyle.SINGLE, size: 18, color: "0D47A1" },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE }
            },
            margins: { top: 90, bottom: 90, left: 160, right: 160 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240 },
                children: [
                  new TextRun({
                    text: "Tus Sau & Muab Tso Ua Ke: Cov Kws Txawj Looj Mem Hmoob  |  Yang Yun Song Luan Tou Tradition\n",
                    bold: true,
                    size: 18,
                    font: "Segoe UI",
                    color: "1A237E"
                  }),
                  new TextRun({
                    text: "Sau Thiab Txhais Ua Lus Hmoob Dawb (White Hmong RPA)  |  Lub Caij 9 Txuj Ci Looj Mem (Period 9: 2024–2043)  |  Tag Nrho 109 Qauv Field Master Edition",
                    size: 17,
                    font: "Segoe UI",
                    color: "37474F"
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  }));

  elements.push(new Paragraph({
    pageBreakBefore: true,
    spacing: { before: 0, after: 0 },
    children: []
  }));

  // ===========================================================================
  // FRONT MATTER & PREFACE (PAGE 2)
  // ===========================================================================
  elements.push(pTitle("COV LUS NTHUAV QHIA TXOG PHAU NTAWV ATLAS NO (PREFACE)"));
  elements.push(pSubtitle("Cov Cai Ntsuas Looj Mem Hauv Tshav Teb Thiab Kev Tshawb Fawb 109 Qauv Tiag"));

  elements.push(pBody("Phau ntawv no yog ib phau ntawv looj mem loj tshaj plaws uas tau muab tag nrho 109 cov qauv roob, thaj av, kwj dej, cov roob sha phem, cov qauv duab thaj av, thiab cov qauv ciam av hauv lub neej tiag tiag los nthuav qhia ua ib qho zuj zus (Definitive 109 Master Archetypes)."));

  elements.push(pBody("Txhua qauv hauv phau ntawv no muaj daim duab qhia tseeb (Dedicated Visual Illustration Plate), nrog rau kev tshuaj xyuas physics huab cua, kev ntsuas qhov rooj nkag zoo/phem, qhov chaw tso pas dej zoo/phem, kev ntsuas raws li 8 Phab Bagua, qhab nia zog (Energy Score), thiab cov txheej txheem kho kom nplua miag. Cov lus tshuaj xyuas tag nrho tau muab sau rau hauv lub thawj qhia (Callout Box) nyob sab nraum daim duab hauv phau ntawv Word, ua rau tus nyeem tuaj yeem pom tag nrho cov ntsiab lus meej pem tsis muaj ib lo lus raug txiav lossis raug daim duab thaiv qhov muag."));

  elements.push(pBox("Cov Txheej Txheem Ntsiab Lus Hauv Phau Ntawv Atlas:", [
    "1. Feem 1: Tswv Yim Hauv Paus Luan Tou Thiab 8 Daim Duab Landscape Tiag (Photorealistic Masterpieces uas nthuav qhia txog Sheng Long, Armchair, Jade Belt, Av Tsib Xim, 3D Plot, Mountain Sha, Yin Zhai, thiab Luopan Field Survey).",
    "2. Feem 2: Tag Nrho 75 Cov Qauv Roob, Cua, Dej, Av Thiab Roob Sha Phem (Pawg 1 txog Pawg 5).",
    "3. Feem 2: 16 Qauv Duab Thaj Av & Kev Tso Vaj Tsev (Pawg 6: 16 Classical Land Plot Shapes, Entrances & Water Drainage Layouts).",
    "4. Feem 2: 18 Qauv Ciam Thaj Av & Kev Nkag Tsev (Pawg 7: 18 Road, Water, Forest, Neighbor & Special Boundary Archetypes).",
    "5. Cov Lus Xaus & Txheej Txheem Tshuaj Xyuas Hauv Tshav Teb Tiag (Master Field Survey Protocol)."
  ], "0D47A1", "F0F4F8"));

  // ===========================================================================
  // FEEM 1: THE FOUNDATIONS OF LUAN TOU & 8 PHOTOREALISTIC MASTERWORKS
  // ===========================================================================
  elements.push(pH1("FEEM 1: TSWV YIM HAUV PAUS LUAN TOU THIAB 8 DAIM DUAB LANDSCAPE TIAG", true));
  elements.push(pBody("Hauv txuj ci Looj Mem qub, 'Zaj' (Dragon / Long) sawv cev rau cov leeg roob uas nqa lub zog Sheng Qi ntawm lub ntiaj teb tuaj. Hauv qab no yog 8 daim duab landscape tiag tiag (Photorealistic Masterpieces) uas qhia txog cov hauv paus loj tshaj plaws hauv ntiaj teb, txhua daim duab muaj ib nplooj ntawv tshwj xeeb:"));

  // 1.1 Sheng Long vs Si Long (Dedicated Page)
  elements.push(pH2("1.1. Roob Zaj Cua Lauj (Sheng Long) vs Roob Zaj Tuag (Si Long)", true));
  elements.push(...pImage("real_sheng_long_vs_si_long.jpg", "Daim Duab 1.1: Roob Zaj Cua Lauj (Sheng Long - Sab Laug) & Roob Zaj Tuag (Si Long - Sab Xis) - Photorealistic Field Masterpiece", 420, 236));
  elements.push(pBox("Kev Tshuaj Xyuas Txhua Lub Kaum & Phab Roob (Comprehensive Multi-Angle Analysis):", [
    "1. Phab Sab Laug (Sheng Long - Living Dragon): Txoj leeg roob nkhaus mos muag zoo li tus nab ua luam dej, hav zoov ntsuab xiab, av noo noo uas muaj electromagnetic currents zoo, cua ntsawj mos mos ntawm 1.0 txog 2.0 m/s tsis pub Qi tawg, thiab muaj tus dej Yu Dai Shui nkhaus puag nram taw roob.",
    "2. Phab Sab Xis (Si Long - Dead Dragon): Pob zeb ntse tawg ua ntu zus zoo li riam hlais, tsis muaj nroj tsuag lossis ntoo ntsuab, av qhuav qhawv raug cua txias tshuab ntsawj nrov nrov (Ao Feng Sha ntawm 6.5 m/s+), txoj leeg roob raug hlais txiav ua rau lub zog Qi tuag tag.",
    "3. Tshuaj Xyuas Raws Li 24 Roob: Thaum lub tsev ntsia pom Sheng Long nyob rau phab Kan, Zhen, Xun, lossis Qian, tsev neeg yuav muaj koob meej thiab nyiaj txiag nplua miag; tab sis yog tias pom Si Long nyob rau phab twg, phab ntawd yuav raug kev puas tsuaj loj.",
    "4. Kev Kho Raws Li Lub Kaum Roob: Yog tias ntsib Si Long nyob pem hauv ntej lossis sab xis, yuav tsum tsim phab ntsa granite 2m, cog ntoo thuv ntsuab tuab thaiv qhov muag kiag, thiab tsim pas dej puag sab hauv los nqus lub zog txias."
  ], "2E7D32", "E8F5E9"));

  // 1.2 Classical Armchair Landscape (Dedicated Page)
  elements.push(pH2("1.2. Thaj Av Puag Ncig Armchair Landscape (Si Shou 4 Tus Tsiaj Saum Ntuj)", true));
  elements.push(...pImage("real_armchair_landscape.jpg", "Daim Duab 1.2: Thaj Av Puag Ncig Zoo Tshaj Plaws Armchair Landscape (Si Shou) - Photorealistic Classical Masterpiece", 420, 236));
  elements.push(pBox("Kev Tshuaj Xyuas 4 Lub Kaum Armchair (Four Celestial Animals Architecture):", [
    "1. Phab Tom Qab (Xuan Wu - Black Tortoise): Roob loj siab nyob tom qab tiv thaiv cua txias qaum teb, ua lub roob nraub qaum ruaj khov zoo li lub rooj zaum muaj chaw nstais.",
    "2. Phab Sab Laug (Qing Long - Green Dragon): Sisan roob siab ntsuab npog nrog hav zoov ntoo thuv, sawv cev rau lub zog Yang, txiv neej, thiab koob meej.",
    "3. Phab Sab Xis (Bai Hu - White Tiger): Toj roob qis me ntsis thiab mos muag, sawv cev rau lub zog Yin, poj niam, thiab kev ruaj khov tiv thaiv kev sib tsoo.",
    "4. Phab Pem Hauv Ntej (Ming Tang & Zhu Que): Lub tshav dav ntsiag to pem hauv ntej uas muaj tus dej Yu Dai Shui nkhaus puag, cia lub zog Sheng Qi sib sau ua ke ua ntej nkag mus rau hauv tsev."
  ], "1A237E", "EDE7F6"));

  // 1.3 Hydrology: Jade Belt vs Reverse Bow (Dedicated Page)
  elements.push(pH2("1.3. Dej Nkhaus Puag (Yu Dai Shui) vs Dej Nkhaus Hlais (Fan Gong Shui)", true));
  elements.push(...pImage("real_jade_belt_vs_reverse_bow.jpg", "Daim Duab 1.3: Dej Nkhaus Puag (Yu Dai Shui) vs Dej Nkhaus Hlais (Fan Gong Shui) - 3D Aerial Hydrology Masterpiece", 420, 236));
  elements.push(pBox("Kev Tshuaj Xyuas Physics Ntawm 2 Lub Kaum Dej (Hydraulic & Centrifugal Dynamics):", [
    "1. Lub Kaum Sab Hauv (Concave - Yu Dai Shui): Dej ntws mos muag ntawm 0.8 txog 1.2 m/s, av noo nplua nuj, sediment deposits ua rau av ruaj khov, tsev neeg khaws tau nyiaj txiag zoo heev thiab muaj kev thaj yeeb.",
    "2. Lub Kaum Sab Nraud (Convex - Fan Gong Shui): Lub zog centrifugal force ua rau dej khiav ceev (2.5 txog 4.2 m/s) tsoo ncaj rau ntug dej, ua rau av nqes hav, phab ntsa tawg, thiab tsim lub zog riam hlais (Blade Sha).",
    "3. Kev Kho Raws Li Lub Kaum Tsoo: Tsim phab ntsa nkhaus convex deflector wall pem hauv ntej los thawb lub zog dej rov qab, tsim pas dej semicircular pond los nqus zog, thiab dai iav Pa Kua convex mirror."
  ], "0277BD", "E1F5FE"));

  // 1.4 Five-Color Dragon Soil (Dedicated Page)
  elements.push(pH2("1.4. Av Tsib Xim Hauv Qhov Xue (Ng Se Tu - Five-Color Sacred Dragon Soil)", true));
  elements.push(...pImage("real_five_color_soil.jpg", "Daim Duab 1.4: Av Tsib Xim Looj Mem (Ng Se Tu - Five-Color Dragon Soil) - Scientific Geological Cutaway Profile", 420, 236));
  elements.push(pBox("Kev Tshuaj Xyuas 5 Theem Av Raws Li Geology & Metaphysics:", [
    "1. Theem Saum Toj: Nyom ntsuab nrog cov cag ntoo noj qab nyob zoo, tiv thaiv av kom tsis txhob ntxuav mus.",
    "2. Av Daj (Earth Element): Av loam xim daj sov siab, density 1.85 g/cm³, tuav lub zog nyiaj txiag.",
    "3. Av Liab Cinnabar (Fire Element): Av nplaum xim liab doog, muaj mineral sov siab tiv thaiv pob txha kom qhuav zoo.",
    "4. Av Ntshav Doog (Purple Noble Qi): Av xim ntshav doog zoo li jade, tswj koob meej thiab hwj chim nom tswv.",
    "5. Av Dawb Kaolin (Metal Element): Av dawb huv impervious to water, tiv thaiv dej xau tsis pub nkag rau hauv qhov Xue.",
    "6. Av Dub (Water Element): Av dub nplua nuj uas muaj organic matter txhawb txoj sia kom ntev."
  ], "D84315", "FFF3E0"));

  // 1.5 3D Land Plot Topography (Dedicated Page)
  elements.push(pH2("1.5. 3D Architectural Aerial Topography Ntawm 3 Hom Qauv Thaj Av", true));
  elements.push(...pImage("real_land_plot_topography.jpg", "Daim Duab 1.5: 3D Architectural Aerial Topography Ntawm 3 Hom Qauv Thaj Av - Photorealistic Masterpiece", 420, 236));
  elements.push(pBox("Kev Tshuaj Xyuas Txhua Lub Kaum Thaj Av (Plot Topography & Geometry Dynamics):", [
    "1. Thaj Av A (Sab Laug - Zheng Fang Tu / Square Plot): 4 ces kaum sib npaug 100%, 8 phab ntawm Bagua muaj chaw txaus tsis poob phab twg, tsev neeg muaj kev sib raug zoo, noj qab nyob zoo, thiab nyiaj txiag ruaj khov.",
    "2. Thaj Av B (Nruab Nrab - Jin Dai Dou / Money Bag Plot): Pem hauv ntej nqaim (driveway 12m) tab sis tom qab dav zuj zus mus txog 45m zoo li lub hnab nyiaj, khaws tau lub zog Qi nplua nuj tsis pub cua ntsawj tawm mus, tsev neeg nplua miag zuj zus.",
    "3. Thaj Av C (Sab Xis - San Jiao Tu / Fire Triangle Sha): Thaj av peb fab ntse raug hlais ntawm ob txoj kev tsheb asphalt, ces kaum ntse (<45°) tsim lub zog Hluav Taws Huo Sha, yuav tsum tsim phab ntsa txiav lub kaum ntse tawm mus kom sab hauv dhau ua 4 fab.",
    "4. Cov Qauv Thaj Av Tag Nrho 16 Qauv: Saib tag nrho cov qauv thaj av nrog rau kev ntsuas qhov rooj nkag zoo/phem thiab qhov chaw tso pas dej hauv PAWG 6 ntawm phau ntawv no."
  ], "2E7D32", "F1F8E9"));

  // 1.6 Hostile Mountain Sha Formations (Dedicated Page)
  elements.push(pH2("1.6. Cov Qauv Roob Sha Phem (Fan Bei Shan, Tan Tou Shan, Po Mian Shan)", true));
  elements.push(...pImage("real_mountain_sha_formations.jpg", "Daim Duab 1.6: Cov Qauv Roob Sha Phem (Fan Bei Shan, Tan Tou Shan, Po Mian Shan) - Photorealistic Landscape Masterpiece", 420, 236));
  elements.push(pBox("Kev Tshuaj Xyuas Txhua Lub Kaum Roob Sha (Hostile Mountain Dynamics & Remediation):", [
    "1. Phab Sab Laug (Fan Bei Shan - Roob Tig Qab Ntxeev Siab): Txoj leeg roob nkhaus tig nraub qaum khiav tawm ntawm lub tsev mus, ua rau cov neeg ua hauj lwm ntxeev siab; kev kho: cog ntoo ntsuab tuab thaiv qhov muag thiab tsim pas dej puag sab hauv.",
    "2. Phab Sab Xis Pem Hauv Ntej (Tan Tou Shan - Roob Tub Sab Soj Xyuas): Ncov roob pob zeb ntse zais tom qab lub roob pem hauv ntej zoo li tub sab ntsia tuaj; kev kho: dai iav Pa Kua convex mirror pem lub qhov rai thiab cog tsob ntoo siab thaiv qhov muag tsis pub pom.",
    "3. Phab Sab Xis Tom Qab (Po Mian Shan - Roob Ntsej Muag Tawg): Av qeeg tawg pob zeb liab ploog zoo li raug riam txiav; kev kho: tsim phab ntsa granite 2m thiab zam kev tsim qhov rooj ntsia ncaj rau nws.",
    "4. Lu Chong Sha (Txoj Kev Ntsia Ncaj): Txoj kev tsheb ntsia ncaj rau lub qhov rooj loj; siv 4 txheej txheem kho: Phab ntsa granite 2m, ntoo ntsuab tuab, hloov qhov rooj 90 qib, thiab pob zeb Tai Shan Shi Gan Dang."
  ], "C62828", "FFEBEE"));

  // 1.7 Sacred Yin Zhai Ancestral Grave (Dedicated Page)
  elements.push(pH2("1.7. Thaj Chaw Ntxa Tsev Yeeb Hauv Hav Roob (Wo Xue & 120 Fen Jin)", true));
  elements.push(...pImage("real_yin_zhai_ancestral_grave.jpg", "Daim Duab 1.7: Thaj Chaw Ntxa Tsev Yeeb Hauv Hav Roob (Wo Xue & 120 Fen Jin) - Photorealistic Classical Masterpiece", 420, 236));
  elements.push(pBox("Kev Tshuaj Xyuas Txhua Lub Kaum Ntxa Tsev Yeeb (Yin Zhai Locus Architecture):", [
    "1. Qhov Xue (Wo Xue / Bird's Nest): Lub qhov ntxa nyob rau nruab nrab ntawm lub roob uas tau txais lub hnub ci sov siab, av noo noo tsib xim (Ng Se Tu).",
    "2. Phab Ntsa Omega (Horseshoe Retaining Wall): Phab ntsa pob zeb granite puag ncig tom qab tiv thaiv cua txias thiab av nqes hav.",
    "3. Ming Tang & Dej Shui Kou: Pem hauv ntej muaj lub tshav ntsuab tiaj tus thiab kwj dej ntws nkhaus zais mus zais los, qhov dej tawm (Shui Kou lock) raug zais tom qab cov roob me kom tsis txhob pom dej khiav tawm.",
    "4. 120 Fen Jin & 28 Lub Hnub Qub: Kev kho lub kaum pob zeb mus rau kab golden degree Wang/Xiang kom txhawb tub xeeb ntxwv kom vam meej ntau tiam neeg."
  ], "4527A0", "EDE7F6"));

  // 1.8 Luopan Compass Field Survey Photography (Dedicated Page)
  elements.push(pH2("1.8. Kev Siv Luopan Tshuaj Xyuas Thaj Av Hauv Hav Roob Tiag", true));
  elements.push(...pImage("real_luopan_compass_survey.jpg", "Daim Duab 1.8: Daim Duab Luopan Field Survey Tiag Tiag Hauv Hav Roob - Photorealistic Masterpiece", 420, 236));
  elements.push(pBox("Kev Tshuaj Xyuas 8 Phab Bagua Raws Li 24 Roob Luopan:", [
    "1. Phab Kan (Qaum Teb / North 337.5° txog 22.5°): Ren, Zi, Gui - Lub Zog Dej (Water), tswj tub nrab, raum, thiab ntshav.",
    "2. Phab Gen (Sab Hnub Tuaj Qaum Teb / Northeast 22.5° txog 67.5°): Chou, Gen, Yin - Lub Zog Av Me (Mountain Earth), tswj tub yau thiab pob txha.",
    "3. Phab Zhen (Sab Hnub Tuaj / East 67.5° txog 112.5°): Jia, Mao, Yi - Lub Zog Ntoo Loj (Thunder Wood), tswj tub hlob (Fang 1) thiab koob meej.",
    "4. Phab Xun (Sab Hnub Tuaj Qab Teb / Southeast 112.5° txog 157.5°): Chen, Xun, Si - Lub Zog Ntoo Me (Wind Wood), tswj ntxhais hlob thiab kev kawm.",
    "5. Phab Li (Pem Teb / South 157.5° txog 202.5°): Bing, Wu, Ding - Lub Zog Hluav Taws (Fire), tswj ntxhais nrab, qhov muag, thiab plawv.",
    "6. Phab Kun (Sab Hnub Poob Pem Teb / Southwest 202.5° txog 247.5°): Wei, Kun, Shen - Lub Zog Av Loj (Mother Earth), tswj niam tsev thiab lub plab.",
    "7. Phab Dui (Sab Hnub Poob / West 247.5° txog 292.5°): Geng, You, Xin - Lub Zog Kub Me (Lake Metal), tswj ntxhais yau, ntsws, thiab qhov ncauj.",
    "8. Phab Qian (Sab Hnub Poob Qaum Teb / Northwest 292.5° txog 337.5°): Xu, Qian, Hai - Lub Zog Kub Loj (Heaven Metal), tswj txiv tsev thiab hwj chim."
  ], "0D47A1", "E8EAF6"));

  // ===========================================================================
  // FEEM 2: THE 75 CORE DISTINCT LUAN TOU LANDFORM ARCHETYPES (PAWG 1 - 5)
  // ===========================================================================
  const archetypesPath = path.resolve(__dirname, 'data_75_core_luan_tou_archetypes.json');
  if (fs.existsSync(archetypesPath)) {
    const archetypes = JSON.parse(fs.readFileSync(archetypesPath, 'utf8'));
    console.log("Loaded " + archetypes.length + " Core Archetypes for Dedicated Illustrated Atlas");

    const categories = [
      {
        num: 1,
        key: "Roob 5 Thas & Cov Theem Roob",
        title: "5 YAM ZOG ROOB & COV THEEM ROOB ZAJ (5 MOUNTAIN ELEMENT ARCHETYPES)",
        intro: "Pawg no nthuav qhia 5 hom qauv roob xing ti raws li 5 Yam Zog (Ntoo, Hluav Taws, Av, Kub, Dej) uas yog lub hauv paus loj tshaj plaws ntawm Luan Tou:",
        highlights: [
          "Roob Ntoo (Wood Mountain): Ncov roob siab ncaj zoo li ntoo thuv, tswj kev kawm ntawv thiab nom tswv.",
          "Roob Hluav Taws (Fire Mountain): Ncov roob ntse zoo li nplaim taws, tsim Huo Sha phom sij.",
          "Roob Av (Earth Mountain): Ncov roob tiaj tus zoo li lub rooj, tswj kev ruaj khov thiab nyiaj txiag.",
          "Roob Kub (Metal Mountain): Ncov roob kheej zoo li lub tswb ntxeev, tswj hwj chim thiab koob meej.",
          "Roob Dej (Water Mountain): Ncov roob nthwv dej nthwv mus los, tswj kev txawj ntse thiab kev lag luam."
        ]
      },
      {
        num: 2,
        key: "Huab Cua & Kev Ceev Cua Zang Feng",
        title: "CUA & HUAB CUA ZANG FENG HAUV HAV ROOB (3 MOUNTAIN WIND ARCHETYPES)",
        intro: "Pawg no nthuav qhia 3 hom qauv huab cua, cua ntsawj hauv hav roob (Ao Feng), thiab cov cai tiv thaiv cua phem Zang Feng:",
        highlights: [
          "Cua Ao Feng Sha: Cua ntsawj ceev dhau qhov nruab nrab ntawm ob lub roob tsoo vaj tsev.",
          "Cua Zang Feng Dej Ju Qi: Huab cua ntsiag to mos muag tuav lub zog Qi kom nyob ntev hauv hav roob.",
          "Kev Kho Cua Hauv Hav Roob: Tsim hav ntoo thaiv cua thiab phab ntsa tiv thaiv cua txias."
        ]
      },
      {
        num: 3,
        key: "Dej & Kev Nkhaus NtawmTus Dej",
        title: "16 QAUV DEJ NTWS & KWJ DEJ YU DAI SHUI (16 CLASSICAL WATER ARCHETYPES)",
        intro: "Pawg no nthuav qhia tag nrho 16 qauv dej ntws nkhaus puag ncig vaj tsev, kev ntsuas tus dej nkag (Lai Shui) thiab qhov dej tawm (Qu Shui):",
        highlights: [
          "Yu Dai Shui (LT-0865): Dej nkhaus puag lub tsev sab hauv (Inner Concave Bank) - Safe & Rich.",
          "Fan Gong Shui (LT-0897): Dej nkhaus hlais sab nraud (Outer Convex Bluff) - Erosion & Bow Clash.",
          "Jiu Qu Shui: Tus dej nkhaus 9 kauj zais mus zais los coj nyiaj txiag loj nkag tsis tu ncua.",
          "Shui Kou Suo: Qhov dej tawm raug xauv kaw ruaj khov tsis pom dej ntws khiav tawm mus."
        ]
      },
      {
        num: 4,
        key: "Av & Cov Theem Av Looj Mem",
        title: "16 QAUV AV TSIBS XIM & QHOV XUE HAUV HAV ROOB (16 SACRED DRAGON SOIL ARCHETYPES)",
        intro: "Pawg no nthuav qhia tag nrho 16 theem av looj mem, av tsib xim (Ng Se Tu), thiab qib av ruaj khov hauv qhov chaw Xue:",
        highlights: [
          "Ng Se Tu (Sacred 5-Color Soil): Av muaj 5 xim sib xyaw zoo li jade, sov siab thiab noo noo.",
          "Wo Xue (Bird's Nest Locus): Lub qhov ntxa zoo li lub zes noog nyob hauv plawv roob puag ncig.",
          "Qian Xue & Shen Xue: Kev ntsuas qhov tob thiab qhov ntiav ntawm qhov chaw faus kom raug qib av zoo."
        ]
      },
      {
        num: 5,
        key: "35 Qauv Roob Sha Phem",
        title: "35 QAUV ROOB SHA PHEM THIAB KEV KHO (35 HOSTILE MOUNTAIN SHA ARCHETYPES)",
        intro: "Pawg no nthuav qhia tag nrho 35 hom roob sha phem uas ntsia nkag los hauv tsev (Fan Bei Shan, Tan Tou Shan, Po Mian Shan, Bi Dao Shan...) thiab cov txheej txheem kho kom tiav:",
        highlights: [
          "Fan Bei Shan: Roob tig nraub qaum ntxeev siab rau lub tsev.",
          "Tan Tou Shan: Ncov roob pob zeb soj xyuas zoo li tub sab pom tom qab roob pem hauv ntej.",
          "Po Mian Shan: Roob ntsej muag tawg pob zeb liab ploog zoo li raug riam txiav.",
          "Bi Dao Shan & Tian Zhan Sha: Roob hlais zoo li riam ntse los yog pob zeb tawg phua nruab nrab."
        ]
      }
    ];

    categories.forEach(cat => {
      elements.push(...pCategoryPlate(cat.num, cat.title, cat.intro, cat.highlights));

      const catArchetypes = archetypes.filter(a => a.category === cat.key);
      catArchetypes.forEach((item, idx) => {
        pArchetypeItem(item, idx + 1, catArchetypes.length);
      });
    });
  }

  // ===========================================================================
  // FEEM 2 (TXUAS): PAWG 6: 16 QAUV DUAB THAJ AV & KEV TSO VAJ TSEV (16 LAND PLOTS)
  // ===========================================================================
  const landPlotsPath = path.resolve(__dirname, 'data_16_core_land_plot_archetypes.json');
  if (fs.existsSync(landPlotsPath)) {
    const landPlots = JSON.parse(fs.readFileSync(landPlotsPath, 'utf8'));
    console.log("Loaded " + landPlots.length + " Land Plot Archetypes for Dedicated Illustrated Atlas");

    elements.push(...pCategoryPlate(
      6,
      "16 QAUV DUAB THAJ AV & KEV TSO VAJ TSEV RAWS LOOJ MEM (16 LAND PLOT & SITING ARCHETYPES)",
      "Pawg no nthuav qhia tag nrho 16 qauv duab thaj av hauv lub neej tiag tiag (Zheng Fang, Chang Fang, Jin Dai Dou, Hu Lu, Ti Xing, San Jiao, Tus Phom L-Shape, T-Shape, Diamond, Ban Yuan, Shan Yao, Dao Ba, Peninsula, thiab Jagged). Txhua thaj av muaj daim duab qhia tseeb txog ciam av, chaw tso tsev, kev ntsuas qhov rooj nkag zoo/phem, thiab qhov chaw tso pas dej:",
      [
        "Zheng Fang & Chang Fang Tu: Thaj av 4 fab xwm meem thiab 4 fab ntev, 8 lub palace puv nkaus, huab cua ncig sib npaug.",
        "Jin Dai Dou & Hu Lu Tu: Thaj av hnab nyiaj thiab taub qab, pem hauv ntej nqaim tom qab dav, khaws nyiaj txiag loj thiab tswj kev noj qab nyob ntev.",
        "Ti Xing Tu: Qhov txawv loj ntawm Pem Nqaim Tom Qab Dav (Ju Cai Zoo) thiab Pem Dav Tom Qab Nqaim (Tui Cai Phem).",
        "San Jiao & L-Shape Tu: Thaj av peb fab Huo Sha thiab thaj av tus phom poob kaum, txheej txheem txiav lub kaum ntse thiab teeb teeb kho kaum.",
        "Ban Yuan, Shan Yao, Dao Ba & Peninsula: Thaj av theem roob, thaj av ntug dej nkhaus puag, thiab kev kho txoj kev nkag ntev panhandle."
      ]
    ));

    landPlots.forEach((item, idx) => {
      pLandPlotItem(item, idx + 1, landPlots.length);
    });
  }

  // ===========================================================================
  // FEEM 2 (TXUAS): PAWG 7: 18 QAUV CIAM THAJ AV & KEV NKAG TSEV (18 BOUNDARY ADJACENCIES)
  // ===========================================================================
  const boundaryPath = path.resolve(__dirname, 'data_boundary_adjacencies_hmong.json');
  if (fs.existsSync(boundaryPath)) {
    const boundaryPlots = JSON.parse(fs.readFileSync(boundaryPath, 'utf8'));
    console.log("Loaded " + boundaryPlots.length + " Boundary Adjacency Archetypes for Dedicated Illustrated Atlas");

    elements.push(...pCategoryPlate(
      7,
      "18 QAUV CIAM THAJ AV & KEV NKAG TSEV RAWS LOOJ MEM (18 BOUNDARY ADJACENCIES & ACCESS INTERFACES)",
      "Pawg no nthuav qhia tag nrho 18 qauv ciam thaj av hauv lub neej tiag tiag raws li 5 pawg loj: Ciam Kev Tsheb (Kev 1 sab, kev 2 sab kaum, kev pem hauv ntej & tom qab, kev txiav rawg, thaj av nruab nrab 3-4 kev, kev nkag easement driveway), Ciam Dej & Pas Dej (Yu Dai Shui, Fan Gong Shui, Xuan Wu Dej tom qab, Kwj dej sab xis), Ciam Hav Zoov & Roob (Hav zoov tom qab, Ntug tsua, Hav zoov tsaus Yin Sha), Ciam Tsev Neeg & Nroog (Tsev siab thaiv, Tian Zhan Sha, Raug tsev 3 sab puag), thiab Ciam Phab Ntsa & Chaw Tshwj Xeeb (Phab ntsa dig muag, Tuam tsev / Tsev kho mob / Ncej fais). Txhua qauv muaj daim duab qhia tseeb txog chaw tso tsev, qhov rooj vag, fab ntsia/zaum, thiab tswv yim kho:",
      [
        "Pawg Ciam Kev: Kev ntsuas thaj av ciam kev ib sab, kaum kev 2 sab, kev pem hauv ntej & tom qab, rawg txiav scissors road, thaj av nruab nrab, thiab thaj av tsis ciam kev muaj kev nkag driveway.",
        "Pawg Ciam Dej: Yu Dai Shui puag zoo, Fan Gong Shui hlais phem, Pas dej tom qab Xuan Wu poob dej, thiab Kwj dej ntws nrawm txiav.",
        "Pawg Ciam Hav Zoov & Roob: Hav zoov roob nraub qaum tiv thaiv cua, Ntug tsua siab txaus ntshai, thiab Hav zoov tsaus nti Yin Sha.",
        "Pawg Ciam Tsev Neeg & Nroog: Tsev siab thaiv hnub ci, Qhov nqaim Tian Zhan Sha, thiab Raug tsev 3 sab puag ncig.",
        "Pawg Ciam Phab Ntsa & Chaw Tshwj Xeeb: Phab ntsa siab thaiv huab cua, thiab Tuam tsev / Tsev kho mob / Ncej fais hluav taws xob Huo Sha."
      ]
    ));

    boundaryPlots.forEach((item, idx) => {
      pBoundaryItem(item, idx + 1, boundaryPlots.length);
    });
  }

  // ===========================================================================
  // CONCLUSION / MASTER FIELD PROTOCOL
  // ===========================================================================
  elements.push(pH1("COV LUS XAUS RAU COV KWS TSHUAJ XYUAS THAJ TEB", true));
  elements.push(pBody("Thaum tshuaj xyuas ib thaj av twg hauv lub neej tiag tiag, tus kws looj mem yuav tsum siv 109 qauv hauv phau ntawv no ua daim ntawv qhia kev (Master Field Atlas): pib saib los ntawm Roob Loj (Long) ua ntej, tom qab ntawd saib thaj chaw nyob (Xue), saib cov roob puag ncig (Sha), saib cov dej ntws (Shui), saib ciam thaj av (Tu Xing), thiab saib txoj kev tsheb nkag (Lu). Yog tias thaj av ntawd ntsib cov xwm txheej phem, siv cov tswv yim kho raws li phau ntawv no tau sau tseg kom txo lub zog phem thiab hloov ua lub zog Sheng Qi zoo rau tsev neeg."));

  elements.push(pBox("6 Kauj Ruam Tshuaj Xyuas Thaj Teb Raws Li Luan Tou & Thaj Av:", [
    "1. Saib Roob Zaj (Long): Tshawb nrhiav saib txoj leeg roob puas muaj sia (Sheng Long) lossis tuag (Si Long).",
    "2. Saib Qhov Chaw (Xue): Ntsuam xyuas qhov chaw zaum puas muaj roob nraub qaum Xuan Wu tiv thaiv cua.",
    "3. Saib Cov Roob Puag Ncig (Sha): Saib phab sab laug Qing Long thiab sab xis Bai Hu puas puag zoo, tsis muaj roob sha phem ntsia tuaj.",
    "4. Saib Dej Ntws (Shui): Xyuas seb tus dej puas nkhaus puag (Yu Dai Shui) thiab qhov dej tawm puas raug xauv kaw zoo (Shui Kou).",
    "5. Saib Ciam Thaj Av (Plot Shape): Xyuas ciam av seb puas poob kaum (Que Jiao), seb puas yog hnab nyiaj lossis peb fab ntse.",
    "6. Saib Fab Tig (Xiang) & Kev Nkag: Siv Luopan ntsuas fab zaum, fab tig, qhov rooj nkag, thiab chaw tso pas dej kom phim rau Lub Caij 9."
  ], "1B5E20", "E8F5E9"));

  return elements;
}

module.exports = { getAtlasEncyclopediaContent };
