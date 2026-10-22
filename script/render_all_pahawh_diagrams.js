// script/render_all_pahawh_diagrams.js
// Renders all Masterclass Land Plot (LP-0001..LP-0016) and Environmental (ENV-0001..ENV-0018)
// diagrams in 100% Pure Pahawh Hmong (Stage 3) using Noto Sans Pahawh Hmong typography.

const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');
const { rpaToPahawh } = require('./rpa_to_pahawh_converter.js');

const fontPath = path.resolve(__dirname, '../pahawh/fonts/NotoSansPahawhHmong-Regular.ttf');
if (!fs.existsSync(fontPath)) {
  console.error('FATAL: NotoSansPahawhHmong-Regular.ttf not found at:', fontPath);
  process.exit(1);
}

const resvgOptsPahawh = {
  fitTo: { mode: 'width', value: 2400 },
  font: {
    fontFiles: [fontPath],
    defaultFontFamily: 'Noto Sans Pahawh Hmong',
    loadSystemFonts: true
  }
};

const DIAGRAM_TRANSLATIONS = [
  // Chinese archetype names to pure Hmong RPA
  [/Qiang Xing Tu/gi, 'Thaj Av Tus Phom'],
  [/Qiang Xing/gi, 'Tus Phom'],
  [/San Jiao Tu:\s*Dui Jiao Chong/gi, 'Thaj Av Peb Fab Riam Hlais'],
  [/San Jiao Tu/gi, 'Thaj Av Peb Fab'],
  [/Chang Fang Tu/gi, 'Thaj Av Plaub Fab Ntev'],
  [/Zheng Fang Tu/gi, 'Thaj Av Plaub Fab Sib Npaug'],
  [/Jin Dai Dou/gi, 'Thaj Av Hnab Nyiaj'],
  [/Hu Lu Tu:\s*Narrow Front,\s*Wide Rear/gi, 'Thaj Av Lub Taub Ncauj Nqaim'],
  [/Hu Lu Tu/gi, 'Thaj Av Lub Taub'],
  [/Ti Xing:\s*Qian Zhai Hou Kuan/gi, 'Thaj Av Pem Nqaim Tom Qab Dav'],
  [/Qian Kuan Hou Zhai/gi, 'Pem Dav Tom Qab Nqaim'],
  [/Ti Xing/gi, 'Thaj Av Khib'],
  [/Dao San Jiao Tu/gi, 'Thaj Av Peb Fab Rov Qab'],
  [/T-Shape Tu/gi, 'Thaj Av Tus T'],
  [/Ling Xing Tu/gi, 'Thaj Av Pob Zeb Suav'],
  [/Ban Yuan Tu/gi, 'Thaj Av Voj Kheej'],
  [/Shan Yao Tu/gi, 'Thaj Av Toj Roob Theem'],
  [/Dao Ba Tu/gi, 'Thaj Av Tus Chij'],
  [/Huan Bao He Wan Tu/gi, 'Thaj Av Dej Qhwv'],

  // Special terms
  [/Tai Shan/gi, 'Pob Zeb Thaiv'],
  [/Qu Ze You Qing/gi, 'Kev Nkhaus Muaj Siab Zoo'],
  [/You Qing/gi, 'Muaj Siab Zoo'],
  [/Qu Ze/gi, 'Kev Nkhaus'],
  [/Facing Main Road/gi, 'Kev Loj Pem Hauv Ntej'],
  [/Main Road/gi, 'Kev Loj'],
  [/Main House/gi, 'Lub Tsev Loj'],
  [/Taboos/gi, 'Cov Lus Txwv'],
  [/Missing Sector/gi, 'Kaum Poob'],
  [/L-Shape Plot/gi, 'Thaj Av Tus L'],
  [/L-Shape/gi, 'Tus L'],
  [/DO NOT TRESPASS/gi, 'Txwv Tsis Kov'],
  [/Private Property \/ Luag Av/gi, 'Luag Av Txwv Tsis Kov'],
  [/Private Property/gi, 'Ciam Av Luag Tus'],
  [/Private Neighbor Property/gi, 'Ciam Av Luag Tus'],
  [/Safe Zone/gi, 'Thaj Chaw Nyab Xeeb'],
  [/Left Road Only/gi, 'Kev Sab Laug Xwb'],
  [/Right Road Only/gi, 'Kev Sab Xis Xwb'],
  [/Left Road/gi, 'Kev Sab Laug'],
  [/Right Road/gi, 'Kev Sab Xis'],
  [/Scissors Fork/gi, 'Kev Tshuam Rab Txiab'],
  [/Y-Fork/gi, 'Kev Tshuam Y'],
  [/Scissors Sha/gi, 'Riam Hlais Sha'],
  [/Water Wealth/gi, 'Dej Nyiaj Txiag'],
  [/Hillside Terrace/gi, 'Toj Roob Theem'],
  [/Flagpole Panhandle/gi, 'Tus Chij'],
  [/Jade Belt Peninsula/gi, 'Thaj Av Siv Tawv Kub'],
  [/Jade Belt/gi, 'Siv Tawv Kub'],
  [/Hammer T-Shape Plot/gi, 'Thaj Av Tus T'],
  [/Hammer T Plot/gi, 'Thaj Av Tus T'],
  [/Square Plot/gi, 'Thaj Av Plaub Fab'],
  [/Golden Rectangle Plot/gi, 'Thaj Av Plaub Fab Ntev'],
  [/Money Bag Plot/gi, 'Thaj Av Hnab Nyiaj'],
  [/Gourd Longevity Plot/gi, 'Thaj Av Lub Taub'],
  [/Semicircular Metal Plot/gi, 'Thaj Av Voj Kheej'],
  [/Rhombus Slanted Plot/gi, 'Thaj Av Pob Zeb Suav'],
  [/Irregular Jagged Plot/gi, 'Thaj Av Kaum Txiav'],
  [/Front Apex Facing Road/gi, 'Kaum Ntse Ntsia Kev'],
  [/Reverse Fire/gi, 'Hluav Taws Rov Qab'],
  [/Fire Sha/gi, 'Hluav Taws Sha'],
  [/Fire\/Wind Sha/gi, 'Hluav Taws Cua Sha'],
  [/Fire\/Tiger Sha/gi, 'Hluav Taws Tsov Sha'],
  [/Sharp Fire/gi, 'Hluav Taws Ntse'],
  [/Broken Metal/gi, 'Kub Txiav'],
  [/Hammer Earth Sha/gi, 'Zog Av Rauj Sha'],
  [/Chaotic Sha Element/gi, 'Zog Sha Ntxhov'],
  [/Wind Tunnel Sha/gi, 'Cua Ntsawj Sha'],
  [/Metal Gold/gi, 'Kub'],
  [/Mountain Earth/gi, 'Toj Roob'],
  [/Earth/gi, 'Av'],
  [/Wood/gi, 'Ntoo'],
  [/Metal/gi, 'Kub'],
  [/Water/gi, 'Dej'],
  [/Fire/gi, 'Hluav Taws'],
  [/Bagua/gi, '8 Fab'],
  [/Ming Tang/gi, 'Tshav Kaj'],
  [/Cemetery & Graves \(Inside vs Outside\)/gi, 'Tshav Ntxa: Nyob Sab Nraud vs Sab Hauv'],
  [/Cemetery Yin Sha & Remedies/gi, 'Yeeb Sha Ntxa & Kev Kho'],
  [/Cemetery Feng Shui/gi, 'Looj Mem Ntxa'],
  [/External Cemetery & Ancestral Graves/gi, 'Tshav Ntxa Sab Nraud'],
  [/S-Curve/gi, 'Kev Nkhaus Mos'],
  [/semicircular/gi, 'voj kheej'],
  [/granite/gi, 'pob zeb'],
  [/Xiang/gi, 'Ntsia'],
  [/Zuo/gi, 'Zaum']
];

function sanitizeForPahawh(text) {
  if (!text) return '';
  let res = String(text);
  for (const [re, repl] of DIAGRAM_TRANSLATIONS) {
    res = res.replace(re, repl);
  }
  return res;
}

// Preserve emoji sequences and symbols safely
const PRESERVE_REGEX = /([\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]|[✓✗⟿⟵⟶⬇⬆➔→←])/u;

function transliterateWithPreserve(text) {
  const sanitized = sanitizeForPahawh(text);
  const parts = sanitized.split(PRESERVE_REGEX);
  return parts.map(part => {
    if (!part) return '';
    if (PRESERVE_REGEX.test(part)) return part;
    return rpaToPahawh(part);
  }).join('');
}

function convertHmongSvgToPahawh(svgContent) {
  // 1. Substitute font family
  let pahawhSvg = svgContent.replace(
    /font-family=\"[^\"]*\"/g,
    'font-family="\'Noto Sans Pahawh Hmong\', sans-serif"'
  );

  // 2. Transliterate all text inside <text> tags
  pahawhSvg = pahawhSvg.replace(/<text([^>]*)>([\s\S]*?)<\/text>/g, (fullMatch, attrs, content) => {
    // If it's a pure ID badge like LP-0009 or ENV-0001 or ENV-0001-A, keep Latin ID for cross-referencing
    const trimmed = content.trim();
    if (/^(LP-\d+(?:-[A-Z0-9]+)?|ENV-\d+(?:-[A-Z0-9]+)?|LT-\d+)$/.test(trimmed)) {
      return `<text${attrs}>${content}</text>`;
    }
    
    // Transliterate content while preserving inner tags (like <tspan>) and emojis
    const converted = content.replace(/(>|^)([^<]+)(<|$)/g, (m, prefix, txt, suffix) => {
      return prefix + transliterateWithPreserve(txt) + suffix;
    });

    return `<text${attrs}>${converted}</text>`;
  });

  return pahawhSvg;
}

// Ensure pahawh/img exists
const outDir = path.resolve(__dirname, '../pahawh/img');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Convert all Masterclass Plots (LP-*) from hmong/img/*.svg
const hmongImgDir = path.resolve(__dirname, '../hmong/img');
const files = fs.readdirSync(hmongImgDir);
const svgFiles = files.filter(f => f.endsWith('.svg'));

console.log(`🚀 Found ${svgFiles.length} Masterclass SVGs to render into 100% Pure Pahawh Hmong...`);

let successCount = 0;
for (const svgFile of svgFiles) {
  const baseName = svgFile.replace('.svg', '');
  const inPath = path.join(hmongImgDir, svgFile);
  const rawSvg = fs.readFileSync(inPath, 'utf8');

  // Convert SVG
  const pahawhSvg = convertHmongSvgToPahawh(rawSvg);
  const outSvgPath = path.join(outDir, `${baseName}.svg`);
  fs.writeFileSync(outSvgPath, pahawhSvg, 'utf8');

  // Render to PNG
  try {
    const resvg = new Resvg(pahawhSvg, resvgOptsPahawh);
    const pngData = resvg.render().asPng();
    const outPngPath = path.join(outDir, `${baseName}.png`);
    fs.writeFileSync(outPngPath, pngData);
    successCount++;
    console.log(`  ✓ Successfully rendered Pahawh: ${baseName}.png (${(pngData.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`  ✗ Error rendering ${baseName}:`, err.message);
  }
}

// 2. Also copy any remaining PNGs that don't have SVGs (like photo figures or secondary archetypes)
for (const f of files) {
  if (f.endsWith('.png')) {
    const target = path.join(outDir, f);
    if (!fs.existsSync(target)) {
      fs.copyFileSync(path.join(hmongImgDir, f), target);
    }
  }
}

// 3. Copy samples to artifact directory for instant viewing
const artifactDir = 'C:/Users/chitc/.gemini/antigravity/brain/2bd06cba-8314-47a0-923b-83c5e8bd1b84';
for (const id of ['LP-0009', 'LP-0001', 'LP-0007', 'ENV-0001', 'ENV-0001-A', 'ENV-0001-B', 'ENV-0001-C', 'ENV-0001-D']) {
  const src = path.join(outDir, `${id}.png`);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(artifactDir, `${id}-pahawh-final.png`));
  }
}

console.log(`\n🎉 ALL ${successCount} PAHAWH MASTERCLASS DIAGRAMS RENDERED AND SAVED TO pahawh/img/!`);
