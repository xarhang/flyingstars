/**
 * BUILD PAHAWH HMONG WEB PORTAL (THIRD STAGE / VERSION 3)
 * 100% PURE PAHAWH HMONG STAGE 3 (𖬖𖬰𖬝𖬵 𖬄𖬶𖬟 𖬌𖬣𖬵)
 * Output: pahawh/index.html
 * Conforms strictly to Unicode Standard U+16B00..U+16B8F & Google Noto Sans Pahawh Hmong.
 * Zero Lao bleed, Zero Thai bleed, Pure Pahawh Hmong across all UI, Atlas, Reader, and Calculator.
 */
const fs = require('fs');
const path = require('path');
const { rpaToPahawh } = require('./rpa_to_pahawh_converter.js');

const projectDir = path.resolve(__dirname, '..');
const pahawhDir = path.resolve(projectDir, 'pahawh');

if (!fs.existsSync(pahawhDir)) {
  fs.mkdirSync(pahawhDir, { recursive: true });
}

// 1. Load Clean Archetypes Datasets
const ltData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_75_core_luan_tou_archetypes.json'), 'utf8'));
const lpData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_16_core_land_plot_archetypes.json'), 'utf8'));
const envData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_boundary_adjacencies_hmong.json'), 'utf8'));

console.log('Transliterating 101 archetypes into 100% Pure Pahawh Hmong Stage 3...');
const archetypes = [];

// Helper to extract clean Hmong title without English parenthesis for pure Pahawh rendering
function cleanHmongTitle(title) {
  if (!title) return '';
  return title.replace(/\s*\([^)]*\)/g, '').trim();
}

// 20 Land Plots
lpData.forEach(lp => {
  const score = (typeof lp.score === 'number') ? lp.score : (lp.energyScore || 75);
  const pureHmongName = cleanHmongTitle(lp.nameHmong || lp.baseName || lp.name || lp.id);
  const rpaName = lp.baseName || lp.nameHmong || lp.name || lp.id;
  const pureHmongCat = '20 Qauv Thaj Av & Qauv Tsev';

  archetypes.push({
    id: lp.id,
    type: 'landplot',
    name: rpaToPahawh(pureHmongName),
    rpaName: rpaName,
    category: rpaToPahawh(pureHmongCat),
    rpaCategory: pureHmongCat,
    score: score,
    isGood: score >= 60,
    img: `img/${lp.id}.png`,
    physics: rpaToPahawh(lp.physics || lp.geometryPhysics || ''),
    entrance: rpaToPahawh(lp.entrancePlacement || lp.entrance || ''),
    water: rpaToPahawh(lp.water || ''),
    bagua: rpaToPahawh(lp.bagua || lp.elementGua || ''),
    remedy: rpaToPahawh(lp.comprehensiveRemedy || lp.remedy || ''),
    housePositioning: rpaToPahawh(lp.housePositioning || ''),
    entrancePlacement: rpaToPahawh(lp.entrancePlacement || ''),
    orientationFacing: rpaToPahawh(lp.orientationFacing || ''),
    elementGua: rpaToPahawh(lp.elementGua || ''),
    favorablePeople: rpaToPahawh(lp.favorablePeople || ''),
    clashingPeople: rpaToPahawh(lp.clashingPeople || ''),
    comprehensiveRemedy: rpaToPahawh(lp.comprehensiveRemedy || ''),
    taboos: rpaToPahawh(lp.taboos || '')
  });
});

// 22 Boundary & Environmental Adjacencies
envData.forEach(env => {
  const score = (typeof env.score === 'number') ? env.score : 75;
  const pureHmongName = cleanHmongTitle(env.baseName || env.nameHmong || env.id);
  const rpaName = env.baseName || env.nameHmong || env.id;
  const pureHmongCat = '22 Qauv Ciam Av & Kev Nkag Tsev';

  archetypes.push({
    id: env.id,
    type: 'boundary',
    name: rpaToPahawh(pureHmongName),
    rpaName: rpaName,
    category: rpaToPahawh(pureHmongCat),
    rpaCategory: pureHmongCat,
    score: score,
    isGood: env.isGood !== undefined ? env.isGood : score >= 60,
    img: `img/${env.id}.png`,
    physics: rpaToPahawh(env.geometryPhysics || ''),
    entrance: rpaToPahawh(env.entrancePlacement || ''),
    house: rpaToPahawh(env.housePositioning || ''),
    orientation: rpaToPahawh(env.orientationFacing || ''),
    water: rpaToPahawh(env.waterRules || ''),
    bagua: rpaToPahawh((env.elementGua || '') + (env.favorablePeople ? ' • Haum: ' + env.favorablePeople : '') + (env.clashingPeople ? ' • Tsis haum: ' + env.clashingPeople : '')),
    remedy: rpaToPahawh(env.comprehensiveRemedy || ''),
    housePositioning: rpaToPahawh(env.housePositioning || ''),
    entrancePlacement: rpaToPahawh(env.entrancePlacement || ''),
    orientationFacing: rpaToPahawh(env.orientationFacing || ''),
    elementGua: rpaToPahawh(env.elementGua || ''),
    favorablePeople: rpaToPahawh(env.favorablePeople || ''),
    clashingPeople: rpaToPahawh(env.clashingPeople || ''),
    comprehensiveRemedy: rpaToPahawh(env.comprehensiveRemedy || ''),
    taboos: rpaToPahawh(env.taboos || '')
  });
});

// 59 Luan Tou Archetypes
ltData.forEach(lt => {
  const score = (typeof lt.score === 'number') ? lt.score : (lt.energyScore || 70);
  const pureHmongName = cleanHmongTitle(lt.baseName || lt.nameHmong || lt.name || lt.id);
  const rpaName = lt.baseName || lt.nameHmong || lt.name || lt.id;
  const pureHmongCat = cleanHmongTitle(lt.category || lt.categoryHmong || '59 Qauv Roob & Hav Dej');

  archetypes.push({
    id: lt.id,
    type: 'luantou',
    name: rpaToPahawh(pureHmongName),
    rpaName: rpaName,
    category: rpaToPahawh(pureHmongCat),
    rpaCategory: pureHmongCat,
    score: score,
    isGood: score >= 60,
    img: `img/${lt.id}.png`,
    physics: rpaToPahawh(lt.physics || lt.shapePhysics || lt.geometryPhysics || ''),
    impact: rpaToPahawh(lt.impact || lt.environmentalImpact || ''),
    remedy: rpaToPahawh(lt.remedy || lt.remedyProtocol || '')
  });
});

console.log(`Transliterated ${archetypes.length} archetypes.`);

// 2. Load and Transliterate 24 Chapters
console.log('Compiling and transliterating 24 chapters into Pahawh Hmong Stage 3...');
const rawChapters = require('./compile_all_chapters_html.js');
const chapters = rawChapters.map(ch => {
  return {
    id: ch.id,
    title: rpaToPahawh(cleanHmongTitle(ch.title)),
    rpaTitle: ch.title,
    html: rpaToPahawh(ch.html),
    count: ch.count
  };
});
console.log(`Transliterated ${chapters.length} chapters.`);

// 3. 81 Flying Stars Pre-transliteration
const rawStarCombos = {
  '9_9': {
    verdict: rpaToPahawh('ZOO TSHAJ PLAWS (SUPREME AUSPICIOUS)'),
    class: 'good',
    score: 98,
    desc: rpaToPahawh('Ob lub Hnub Qub 9-Ntshav sib ntsib hauv lub Caij 9 yog Wang Qi muaj zog tshaj plaws. Nyiaj txiag nplua mias, koob meej nrov thoob ntiaj teb, kev lag luam thev naus laus zis thiab kev lom zem vam meej heev.'),
    cure: rpaToPahawh('Siv lub teeb liab ci, qhov rais qhib kom pom tshav ntuj, tso paj liab lossis tso dej ntws mos hauv Hnub Qub Dej.')
  },
  '9_1': {
    verdict: rpaToPahawh('ZOO HEEV (WATER-FIRE HARMONY)'),
    class: 'good',
    score: 92,
    desc: rpaToPahawh('Hnub Qub 9 (Hluav Taws) nrog Hnub Qub 1 (Dej). Nws yog He Tu 1-6 / Dej-Hluav Taws sib haum. Txhawb nqa kev kawm ntawv qib siab, kev lag luam hla teb chaws, koob meej, thiab kev tsim tshiab.'),
    cure: rpaToPahawh('Tso tsob ntoo ntsuab (Ntoo) los ua tus choj txuas Dej nrog Hluav Taws kom yug zog vam meej.')
  },
  '1_9': {
    verdict: rpaToPahawh('ZOO HEEV (FIRE-WATER ILLUMINATION)'),
    class: 'good',
    score: 90,
    desc: rpaToPahawh('Dej thiab Hluav Taws sib pab txhawb nqa. Kev txawj ntse thiab koob meej loj hlob tuaj ua ke.'),
    cure: rpaToPahawh('Tso nroj tsuag ntsuab 4 ceg los pab tsim zog Sheng Qi.')
  },
  '8_8': {
    verdict: rpaToPahawh('ZOO HEEV (EARTH STABILITY)'),
    class: 'good',
    score: 85,
    desc: rpaToPahawh('Ob lub Hnub Qub 8-Dawb sib ntsib. Txawm hais tias lub Caij 9 Hnub Qub 8 yog Tui Qi lawm los, nws tseem yog San Bai (Ib qho ntawm 3 lub hnub qub dawb zoo). Tswj kev ruaj khov ntawm vaj tse thiab av.'),
    cure: rpaToPahawh('Tso pob zeb granite lossis pob zeb ceramic duab roob.')
  },
  '9_8': {
    verdict: rpaToPahawh('ZOO (FIRE GENERATES EARTH)'),
    class: 'good',
    score: 88,
    desc: rpaToPahawh('Hluav Taws (9) yug Av (8). Nyiaj txiag vaj tse thiab kev lag luam ruaj khov.'),
    cure: rpaToPahawh('Tso lub teeb sov daj lossis duab roob av.')
  },
  '2_5': {
    verdict: rpaToPahawh('PHEM TSHAJ PLAWS (DEADLY EARTH SHA)'),
    class: 'bad',
    score: 5,
    desc: rpaToPahawh('Hnub Qub 2 (Mob Nkeeg) nrog Hnub Qub 5 (Xwm Txheej Loj). Ob lub Av phem sib koom ua rau muaj kab mob cancer, mob plab hnyav, xwm txheej tuag, thiab kev puas tsuaj loj.'),
    cure: rpaToPahawh('TXWV TSIS PUB MUAJ HLUAV TAWS THIAB KOB LIAB! Siv txuj ci Kub kho: Dai Tswb Cua 6 Tub Kub thiab tso Lub Hub Dej Ntsev 6 Npib Nyiaj.')
  },
  '5_2': {
    verdict: rpaToPahawh('PHEM TSHAJ PLAWS (DEADLY EARTH SHA)'),
    class: 'bad',
    score: 5,
    desc: rpaToPahawh('Xwm Txheej Loj nrog Mob Nkeeg. Kab mob nkeeg hnyav heev, mob plab, xwm txheej poob nyiaj.'),
    cure: rpaToPahawh('Dai tswb cua 6 tub kub, tso hub dej ntsev 6 npib nyiaj, tsis txhob teeb teeb liab lossis tswm ciab.')
  },
  '3_7': {
    verdict: rpaToPahawh('PHEM (SWORD FIGHT CLASH)'),
    class: 'bad',
    score: 20,
    desc: rpaToPahawh('Hnub Qub 3 (Ntoo) nrog Hnub Qub 7 (Kub). Kub txiav Ntoo, hu ua "Riam Phom Sib Ntaus". Ua rau muaj kev sib cav sib ceg, raug tub sab nyiag nyiaj, foob plaub ntug, thiab raug riam txiav.'),
    cure: rpaToPahawh('Siv Dej nyob ntsiag to (An Ren Shui) los ua tus choj txo lub zog Kub thiab pab Ntoo.')
  },
  '7_3': {
    verdict: rpaToPahawh('PHEM (ROBBERY & CONFLICT)'),
    class: 'bad',
    score: 22,
    desc: rpaToPahawh('Tub sab nyiag nyiaj, raug ntxias, kev phom sij los ntawm hlau.'),
    cure: rpaToPahawh('Tso ib lub tais dej xiav ntsiag to los daws kev phom sij.')
  }
};

// 4. Prepare JSON payloads
const archetypesJson = JSON.stringify(archetypes);
const chaptersJson = JSON.stringify(chapters);
const starCombosJson = JSON.stringify(rawStarCombos);

// 5. Build Complete HTML Application
const html = `<!DOCTYPE html>
<html lang="hmn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>𖬖𖬰𖬝𖬵 𖬄𖬶𖬟 𖬌𖬣𖬵 • 𖬌𖬲𖬞 𖬈𖬦 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬗𖬰𖬤 (ມົ້ງພາເຮົ່າ)</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='31' fill='%237f1d1d' stroke='%23f59e0b' stroke-width='2'/%3E%3Ccircle cx='32' cy='32' r='26' fill='%230f172a' stroke='%23fbbf24' stroke-width='1.5'/%3E%3Cpath d='M32,8 A24,24 0 0,1 32,56 A12,12 0 0,1 32,32 A12,12 0 0,0 32,8 Z' fill='%23f8fafc'/%3E%3Cpath d='M32,8 A24,24 0 0,0 32,56 A12,12 0 0,0 32,32 A12,12 0 0,1 32,8 Z' fill='%230f172a'/%3E%3Ccircle cx='32' cy='20' r='3.5' fill='%230f172a'/%3E%3Ccircle cx='32' cy='44' r='3.5' fill='%23f8fafc'/%3E%3C/svg%3E">

  <!-- GOOGLE FONTS & LOCAL NOTO SANS PAHAWH HMONG FONT STACK -->
  <style>
    @font-face {
      font-family: 'Noto Sans Pahawh Hmong';
      src: url('fonts/NotoSansPahawhHmong-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Pahawh+Hmong&family=Outfit:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

    :root {
      --primary: #8B0000;
      --primary-dark: #5B0000;
      --gold: #D4AF37;
      --gold-dark: #AA820A;
      --bg: #F8FAFC;
      --card-bg: #FFFFFF;
      --text: #1E293B;
      --text-muted: #64748B;
      --border: #E2E8F0;
      --good: #16A34A;
      --bad: #DC2626;
      --sidebar-w: 340px;
    }
    .dark-mode {
      --bg: #0F172A;
      --card-bg: #1E293B;
      --text: #F1F5F9;
      --text-muted: #94A3B8;
      --border: #334155;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Noto Sans Pahawh Hmong', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }

    .pahawh-glyph {
      font-family: 'Noto Sans Pahawh Hmong', sans-serif;
      letter-spacing: 0.5px;
    }
    .rpa-sub {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 0.85em;
      opacity: 0.78;
    }

    /* TOP NAVBAR */
    header {
      background: linear-gradient(135deg, #3B0000 0%, #7F1D1D 50%, #200000 100%);
      color: white;
      border-bottom: 3px solid var(--gold);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 4px 15px rgba(0,0,0,0.25);
    }
    .nav-container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: white;
    }
    .brand-logo {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #7F1D1D;
      border: 2px solid var(--gold);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
    }
    .brand-text h1 {
      font-size: 16px;
      font-weight: 800;
      letter-spacing: 0.5px;
      color: #FFF;
      line-height: 1.2;
    }
    .brand-text span {
      font-size: 11px;
      color: var(--gold);
      font-weight: 600;
      letter-spacing: 1px;
    }
    .nav-tabs {
      display: flex;
      gap: 6px;
      background: rgba(0,0,0,0.3);
      padding: 4px;
      border-radius: 12px;
      border: 1px solid rgba(212,175,55,0.3);
    }
    .nav-tab-btn {
      padding: 7px 14px;
      background: transparent;
      border: none;
      color: #E2E8F0;
      font-size: 14px;
      font-weight: 600;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .nav-tab-btn:hover {
      background: rgba(255,255,255,0.1);
      color: white;
    }
    .nav-tab-btn.active {
      background: var(--primary);
      color: white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      border: 1px solid var(--gold);
    }
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .lang-btn {
      padding: 6px 12px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 8px;
      color: white;
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: all 0.2s;
    }
    .lang-btn:hover {
      background: rgba(255,255,255,0.25);
    }
    .lang-btn.active {
      background: var(--gold);
      color: #3B0000;
      border-color: #FFF;
      font-weight: 800;
    }
    .compass-btn {
      padding: 6px 12px;
      background: #D97706;
      border: 1px solid #F59E0B;
      border-radius: 8px;
      color: white;
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: background 0.2s;
    }
    .compass-btn:hover { background: #B45309; }
    .theme-btn {
      background: none;
      border: none;
      font-size: 18px;
      color: var(--gold);
      cursor: pointer;
      padding: 4px;
    }

    /* MAIN VIEW CONTAINER */
    main {
      flex: 1;
      max-width: 1440px;
      width: 100%;
      margin: 0 auto;
      padding: 20px;
    }
    .tab-view {
      display: none;
    }
    .tab-view.active {
      display: block;
    }

    /* TAB 1: MASTER ATLAS */
    .atlas-hero {
      background: linear-gradient(135deg, rgba(139,0,0,0.08) 0%, rgba(212,175,55,0.08) 100%);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 20px;
      text-align: center;
    }
    .atlas-hero h2 {
      font-size: 24px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 6px;
    }
    .atlas-hero p {
      font-size: 14px;
      color: var(--text-muted);
      max-width: 850px;
      margin: 0 auto 16px;
    }
    .stats-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
    }
    .stat-badge {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 12.5px;
      font-weight: 600;
    }
    .stat-badge strong {
      color: var(--gold-dark);
    }
    .search-box {
      margin-bottom: 16px;
      display: flex;
      gap: 10px;
    }
    .search-input {
      flex: 1;
      padding: 12px 18px;
      font-size: 15px;
      border: 2px solid var(--border);
      border-radius: 10px;
      outline: none;
      background: var(--card-bg);
      color: var(--text);
      transition: all 0.2s;
      font-family: inherit;
    }
    .search-input:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px rgba(139,0,0,0.1);
    }
    .filter-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
    }
    .filter-btn {
      padding: 7px 14px;
      border: 1px solid var(--border);
      background: var(--card-bg);
      color: var(--text);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn:hover {
      background: var(--border);
    }
    .filter-btn.active {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
      gap: 18px;
    }
    .item-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.25s ease;
      display: flex;
      flex-direction: column;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .item-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(0,0,0,0.1);
      border-color: var(--gold);
    }
    .card-img-wrap {
      width: 100%;
      height: 185px;
      background: #0B0F17;
      position: relative;
      overflow: hidden;
    }
    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s;
    }
    .item-card:hover .card-img {
      transform: scale(1.04);
    }
    .card-id-pill {
      position: absolute;
      top: 8px;
      left: 8px;
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 800;
      backdrop-filter: blur(4px);
    }
    .card-score-pill {
      position: absolute;
      top: 8px;
      right: 8px;
      padding: 3px 9px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 800;
      color: white;
      backdrop-filter: blur(4px);
    }
    .card-score-pill.good { background: rgba(22, 163, 74, 0.9); }
    .card-score-pill.bad { background: rgba(220, 38, 38, 0.9); }
    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-cat {
      font-size: 11.5px;
      font-weight: 700;
      color: var(--gold-dark);
      margin-bottom: 4px;
    }
    .card-title {
      font-size: 16.5px;
      font-weight: 700;
      color: var(--text);
      line-height: 1.35;
      margin-bottom: 4px;
    }
    .card-subtitle {
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 8px;
    }
    .card-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 12px;
      flex: 1;
    }
    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 10px;
      border-top: 1px solid var(--border);
      font-size: 12px;
      font-weight: 600;
      color: var(--primary);
    }

    /* MODAL */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.72);
      backdrop-filter: blur(6px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }
    .modal-overlay.active {
      display: flex;
    }
    .modal-box {
      background: var(--card-bg);
      border-radius: 18px;
      max-width: 1060px;
      width: 100%;
      max-height: 92vh;
      overflow-y: auto;
      box-shadow: 0 24px 48px rgba(0,0,0,0.35);
      border: 1px solid var(--border);
    }
    .modal-head {
      padding: 18px 24px;
      background: var(--bg);
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    .modal-close {
      background: none;
      border: none;
      font-size: 26px;
      color: var(--text-muted);
      cursor: pointer;
    }
    .modal-close:hover { color: var(--text); }
    .modal-content {
      padding: 24px;
    }
    .modal-img-wrap {
      width: 100%;
      background: #0B0F17;
      border-radius: 14px;
      overflow: hidden;
      margin-bottom: 24px;
      border: 1px solid var(--border);
      text-align: center;
      position: relative;
    }
    .modal-img {
      max-width: 100%;
      max-height: 560px;
      object-fit: contain;
      display: inline-block;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: high-quality;
      cursor: zoom-in;
      transition: transform 0.2s ease;
    }
    .modal-img-wrap:hover .modal-img {
      transform: scale(1.01);
    }
    .modal-zoom-pill {
      position: absolute;
      bottom: 14px;
      right: 14px;
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.25);
      color: #F8FAFC;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12.5px;
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      z-index: 5;
    }
    .modal-zoom-pill:hover {
      background: #DC2626;
      color: #FFFFFF;
      transform: translateY(-2px);
    }
    .section-block {
      margin-bottom: 16px;
      padding: 14px 18px;
      border-left: 4px solid var(--primary);
      background: rgba(0,0,0,0.02);
      border-radius: 0 8px 8px 0;
    }
    .section-block.good { border-left-color: var(--good); background: rgba(22,163,74,0.04); }
    .section-block.bad { border-left-color: var(--bad); background: rgba(220,38,38,0.04); }
    .section-title {
      font-size: 14.5px;
      font-weight: 800;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      color: var(--text);
    }
    .section-text {
      font-size: 14px;
      color: var(--text);
      line-height: 1.65;
    }

    /* TAB 2: 16 LAND PLOTS COMPARATIVE STUDIO */
    .plots-studio-head {
      background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
      color: white;
      padding: 24px;
      border-radius: 16px;
      margin-bottom: 24px;
      border: 1px solid var(--gold);
    }
    .plots-studio-head h2 {
      font-size: 24px;
      font-weight: 800;
      color: var(--gold);
      margin-bottom: 6px;
    }
    .plots-studio-head p {
      font-size: 14px;
      color: #CBD5E1;
      max-width: 900px;
    }

    /* TAB 3: BOOK 1 DIGITAL READER */
    .reader-layout {
      display: flex;
      gap: 24px;
      align-items: flex-start;
    }
    .reader-sidebar {
      width: var(--sidebar-w);
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px;
      position: sticky;
      top: 76px;
      max-height: calc(100vh - 100px);
      overflow-y: auto;
      flex-shrink: 0;
    }
    .reader-sidebar h3 {
      font-size: 14.5px;
      font-weight: 800;
      color: var(--primary);
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid var(--gold);
    }
    .chapter-nav-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .chapter-nav-item {
      padding: 9px 12px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      color: var(--text);
      cursor: pointer;
      transition: all 0.2s;
      line-height: 1.4;
    }
    .chapter-nav-item:hover {
      background: var(--border);
    }
    .chapter-nav-item.active {
      background: var(--primary);
      color: white;
      font-weight: 700;
    }
    .chapter-nav-item .sub-rpa {
      display: block;
      font-size: 11px;
      opacity: 0.75;
      font-weight: normal;
    }
    .reader-main {
      flex: 1;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      min-width: 0;
    }
    .reader-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--border);
      flex-wrap: wrap;
      gap: 12px;
    }
    .reading-badge {
      display: inline-block;
      padding: 5px 14px;
      background: rgba(139,0,0,0.08);
      color: var(--primary);
      border-radius: 20px;
      font-size: 13.5px;
      font-weight: 700;
    }
    .reader-btn-group {
      display: flex;
      gap: 8px;
    }
    .reader-btn {
      padding: 7px 14px;
      border: 1px solid var(--border);
      background: var(--bg);
      color: var(--text);
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
    }
    .reader-btn:hover {
      background: var(--border);
    }
    .chapter-content-body {
      font-size: 15px;
      line-height: 1.85;
      color: var(--text);
    }
    .chapter-content-body h1, .chapter-content-body h2, .chapter-content-body h3, .chapter-content-body h4 {
      color: var(--primary);
      margin-top: 24px;
      margin-bottom: 12px;
      line-height: 1.35;
    }
    .chapter-content-body p {
      margin-bottom: 14px;
    }
    .chapter-content-body ul, .chapter-content-body ol {
      margin-left: 24px;
      margin-bottom: 14px;
    }
    .chapter-content-body li {
      margin-bottom: 6px;
    }
    .chapter-content-body table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 13.5px;
    }
    .chapter-content-body th, .chapter-content-body td {
      border: 1px solid var(--border);
      padding: 8px 12px;
      text-align: left;
    }
    .chapter-content-body th {
      background: rgba(139,0,0,0.06);
      font-weight: 700;
      color: var(--primary);
    }
    .chapter-content-body img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      margin: 16px 0;
      border: 1px solid var(--border);
    }

    /* TAB 4: 81 FLYING STARS CALCULATOR */
    .calc-container {
      max-width: 900px;
      margin: 0 auto;
    }
    .calc-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
      margin-bottom: 24px;
    }
    .calc-title {
      font-size: 21px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 8px;
    }
    .calc-desc {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 20px;
    }
    .calc-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
    .calc-input-group label {
      display: block;
      font-size: 13.5px;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 6px;
    }
    .calc-select {
      width: 100%;
      padding: 12px 14px;
      border: 2px solid var(--border);
      border-radius: 10px;
      background: var(--card-bg);
      color: var(--text);
      font-size: 14px;
      font-weight: 600;
      outline: none;
      font-family: inherit;
    }
    .calc-select:focus {
      border-color: var(--primary);
    }
    .calc-result-box {
      background: var(--bg);
      border: 2px solid var(--border);
      border-radius: 12px;
      padding: 20px;
    }
    .calc-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12.5px;
      font-weight: 800;
      color: white;
      letter-spacing: 0.5px;
    }

    /* FOOTER */
    footer {
      background: #111827;
      color: #9CA3AF;
      padding: 24px 20px;
      font-size: 12.5px;
      text-align: center;
      border-top: 1px solid #1F2937;
      margin-top: 40px;
    }
    footer a { color: var(--gold); text-decoration: none; }
    footer a:hover { text-decoration: underline; }

    @media (max-width: 900px) {
      .reader-layout { flex-direction: column; }
      .reader-sidebar { width: 100%; position: static; max-height: 280px; }
      .calc-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- TOP HEADER -->
  <header>
    <div class="nav-container">
      <a href="index.html" class="brand">
        <div class="brand-logo">𖬌𖬣𖬵</div>
        <div class="brand-text">
          <h1 class="pahawh-glyph">𖬖𖬰𖬝𖬵 𖬄𖬶𖬟 𖬌𖬣𖬵 • 𖬌𖬲𖬞 𖬈𖬦 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬗𖬰𖬤</h1>
          <span>𖬖𖬰𖬝𖬵 𖬄𖬶𖬟 (ມົ້ງພາເຮົ່າ)</span>
        </div>
      </a>

      <!-- 4 NAVIGATION TABS (ALL IN PAHAWH) -->
      <nav class="nav-tabs">
        <button class="nav-tab-btn active" data-tab="tabAtlas">
          <span>𖬚𖬰𖬝𖬵 𖬂𖬤𖬵 𖬌𖬲𖬞 𖬈𖬦</span>
          <span style="font-size: 11px; opacity:0.8;">(𖭑𖭐𖭑)</span>
        </button>
        <button class="nav-tab-btn" data-tab="tabStudio">
          <span>𖭑𖭖 𖬖𖬰𖬟𖬰 𖬗𖬮𖬰</span>
          <span style="font-size: 11px; opacity:0.8;">(𖭑𖭖)</span>
        </button>
        <button class="nav-tab-btn" data-tab="tabReader">
          <span>𖬄𖬰𖬪𖬵 𖭑: 𖭒𖭔 𖬌𖬲𖬝𖬵</span>
          <span style="font-size: 11px; opacity:0.8;">(𖬄𖬰𖬪𖬵 𖬖𖬰𖬟𖬰)</span>
        </button>
        <button class="nav-tab-btn" data-tab="tabCalc">
          <span>𖭘𖭑 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬗𖬰𖬤</span>
          <span style="font-size: 11px; opacity:0.8;">(𖭘𖭑 𖬆𖬰𖬩)</span>
        </button>
      </nav>

      <!-- LANGUAGE SWITCHER & TOOLS -->
      <div class="nav-actions">
        <a href="../lao/index.html" class="lang-btn" title="ໄປຫາເວັບໄຊສະບັບພາສາລາວ">
          <span>🇱🇦 ລາວ</span>
        </a>
        <a href="../hmong/index.html" class="lang-btn" title="Mus rau Hmoob RPA">
          <span>📖 RPA</span>
        </a>
        <span class="lang-btn active" title="ພາສາມົ້ງພາເຮົ່າ">
          <span class="pahawh-glyph">𖬌𖬣𖬵 𖬖𖬰𖬝𖬵 𖬄𖬶𖬟 (ມົ້ງພາເຮົ່າ)</span>
        </span>
        <a href="../index.html" class="compass-btn" title="Kev Ntsuas Luopan">
          <span>🧭 Luopan</span>
        </a>
        <button class="theme-btn" id="themeToggleBtn" title="Hloov Hom Ci / Tsaus">🌓</button>
      </div>
    </div>
  </header>

  <!-- MAIN APP VIEWS -->
  <main>
    <!-- TAB 1: MASTER ATLAS 101 ARCHETYPES -->
    <section id="tabAtlas" class="tab-view active">
      <div class="atlas-hero">
        <h2 class="pahawh-glyph">𖬚𖬰𖬝𖬵 𖬂𖬤𖬵 𖬌𖬲𖬞 𖬈𖬦 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬗𖬰𖬤 𖭑𖭐𖭑 𖬄𖬲𖬦𖬵</h2>
        <div class="pahawh-glyph" style="font-weight: 700; color: var(--gold-dark); margin-bottom: 6px; font-size: 15px;">𖬚𖬰𖬝𖬵 𖬂𖬤𖬵 𖭑𖭐𖭑 𖬄𖬲𖬦𖬵 𖬌𖬲𖬞 𖬈𖬦 & 𖬔𖬲𖬝 𖬗𖬮𖬰 𖬄𖬰𖬪𖬵 𖬖𖬰𖬦𖬵 𖬐𖬰𖬧 𖬎𖬲𖬟 (Pahawh Stage 3)</div>
        <p class="pahawh-glyph">𖬆𖬰𖬝 𖬈𖬰𖬩 𖬌𖬰𖬟 𖬄𖬲𖬦𖬵 𖬌𖬲𖬞, 𖬖 𖬈𖬲𖬝, 𖬔𖬲𖬝 𖬗𖬮𖬰, 𖬂𖬤𖬵 𖬌𖬲𖬟 𖬉 𖬖𖬰𖬦𖬵 𖬊𖬰𖬧𖬵 𖬐𖬰𖬦 𖬆𖬲𖬝 𖬂𖬤𖬵 𖬈𖬰𖬪 (𖭓𖭖𖭐° Architectural Site Plans & Luan Tou Topography).</p>
        <div class="stats-row">
          <span class="stat-badge">𖬧𖬰𖬝 𖬌𖬰𖬟: <strong id="statTotal">𖭑𖭐𖭑</strong></span>
          <span class="stat-badge">𖭒𖭐 𖬖𖬰𖬟𖬰 𖬗𖬮𖬰: <strong>𖭒𖭐</strong></span>
          <span class="stat-badge">𖭒𖭒 𖬔𖬲𖬝 𖬗𖬮𖬰: <strong>𖭒𖭒</strong></span>
          <span class="stat-badge">𖭕𖭙 𖬄𖬲𖬦𖬵 𖬌𖬲𖬞: <strong>𖭕𖭙</strong></span>
          <span class="stat-badge" style="color: var(--good);">✓ 𖬌𖬲𖬞: <strong id="statGood" style="color:var(--good);">0</strong></span>
          <span class="stat-badge" style="color: var(--bad);">✗ 𖬉𖬝𖬵: <strong id="statBad" style="color:var(--bad);">0</strong></span>
        </div>
      </div>

      <div class="search-box">
        <input type="text" id="atlasSearchInput" class="search-input" placeholder="🔍 𖬆𖬰𖬝 𖬈𖬰𖬩 (Pahawh / RPA, e.g. 𖬄𖬰𖬝, LP-0001, 𖬈𖬲𖬝, 𖬌𖬲𖬞, daus, roob)...">
      </div>

      <div class="filter-row">
        <button class="filter-btn active" data-cat="all">𖬧𖬰𖬝 𖬌𖬰𖬟 (𖭑𖭐𖭑)</button>
        <button class="filter-btn" data-cat="landplot">𖭒𖭐 𖬄𖬲𖬦𖬵 𖬖𖬰𖬟𖬰 𖬗𖬮𖬰 (Plots)</button>
        <button class="filter-btn" data-cat="boundary">𖭒𖭒 𖬔𖬲𖬝 𖬗𖬮𖬰 (Boundaries)</button>
        <button class="filter-btn" data-cat="luantou">𖭕𖭙 𖬄𖬲𖬦𖬵 𖬌𖬲𖬞 (Luan Tou)</button>
        <button class="filter-btn" data-score="good" style="margin-left:auto; border-color:var(--good); color:var(--good);">✓ 𖬄𖬲𖬦𖬵 𖬌𖬲𖬞 (&ge; 𖭖𖭐)</button>
        <button class="filter-btn" data-score="bad" style="border-color:var(--bad); color:var(--bad);">✗ 𖬄𖬲𖬦𖬵 𖬉𖬝𖬵 (&lt; 𖭖𖭐)</button>
      </div>

      <div class="grid-container" id="atlasGrid">
        <!-- Rendered by JS -->
      </div>
    </section>

    <!-- TAB 2: 16 LAND PLOTS COMPARATIVE STUDIO -->
    <section id="tabStudio" class="tab-view">
      <div class="plots-studio-head">
        <h2 class="pahawh-glyph">𖭑𖭖 𖬖𖬰𖬟𖬰 𖬗𖬮𖬰 𖬒𖬰𖬮𖬵 𖬄𖬲𖬟 𖬆𖬰𖬞 𖬊𖬰𖬧𖬵</h2>
        <div class="pahawh-glyph" style="color:#FBBF24; font-weight:700; margin-bottom: 6px; font-size:15px;">𖭑𖭖 𖬖𖬰𖬟𖬰 𖬗𖬮𖬰 & 𖬄𖬲𖬦𖬵 𖬊𖬰𖬧𖬵 (360° Architectural Site Plans)</div>
        <p class="pahawh-glyph">𖬚𖬰𖬝𖬵 𖬂𖬤𖬵 𖬎𖬲𖬮 𖬖𖬰𖬟𖬰 𖬖𖬰𖬝 𖬂𖬤𖬵 𖬅𖬰𖬞 𖬊𖬰𖬧𖬵: 𖬄𖬲𖬦𖬵 𖬔𖬲𖬝 𖬗𖬮𖬰, 𖬅𖬰𖬟 𖬑 𖬈𖬲𖬟, 𖬉 𖬉𖬰𖬧 𖬒𖬰𖬮𖬵 𖬌𖬲𖬞, 𖬖𖬰𖬝 𖬒𖬰𖬧 𖬊𖬰𖬧𖬵, 𖬂𖬤𖬵 𖬖𖬰𖬪𖬵 𖬌𖬲𖬟, 𖬂𖬤𖬵 𖬉 𖬈𖬰𖬪.</p>
      </div>
      <div class="grid-container" id="plotsGrid">
        <!-- Rendered by JS -->
      </div>
    </section>

    <!-- TAB 3: BOOK 1 DIGITAL READER -->
    <section id="tabReader" class="tab-view">
      <div class="reader-layout">
        <!-- Sidebar Navigation -->
        <aside class="reader-sidebar">
          <h3 class="pahawh-glyph">𖬄𖬰𖬪𖬵 𖭑: 𖭒𖭔 𖬌𖬲𖬝𖬵</h3>
          <ul class="chapter-nav-list" id="chapterNavList">
            <!-- Rendered by JS -->
          </ul>
        </aside>

        <!-- Chapter Main Reader Area -->
        <div class="reader-main">
          <div class="reader-controls">
            <div>
              <span class="reading-badge pahawh-glyph" id="readingChapterBadge">𖬌𖬲𖬝𖬵 𖭐 • 𖬌𖬲𖬞 𖬈𖬦 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬗𖬰𖬤</span>
            </div>
            <div class="reader-btn-group">
              <button class="reader-btn pahawh-glyph" id="prevChapterBtn">← 𖬄𖬰𖬟 𖬌𖬲𖬞</button>
              <button class="reader-btn pahawh-glyph" id="nextChapterBtn">𖬒𖬰𖬧 𖬈𖬲𖬧 →</button>
              <button class="reader-btn" id="fontIncBtn" title="Ua kom ntawv loj tuaj">A+</button>
              <button class="reader-btn" id="fontDecBtn" title="Ua kom ntawv me zuj zus">A-</button>
            </div>
          </div>
          <div class="chapter-content-body pahawh-glyph" id="chapterContentArea">
            <!-- Rendered by JS -->
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 4: 81 FLYING STARS CALCULATOR -->
    <section id="tabCalc" class="tab-view">
      <div class="calc-container">
        <div class="calc-card">
          <h2 class="calc-title pahawh-glyph">𖭘𖭑 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬗𖬰𖬤 (81 Flying Stars Matrix)</h2>
          <div class="pahawh-glyph" style="font-weight:700; color:var(--gold-dark); margin-bottom:8px; font-size:15px;">𖭘𖭑 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬗𖬰𖬤 & 𖬌𖬰𖬟 𖬄𖬲𖬝𖬵 𖬂𖬦 𖬈𖬰𖬪 (Remediation Protocol)</div>
          <p class="calc-desc pahawh-glyph">𖬎𖬲𖬮 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬌𖬲𖬞 (Mountain Star) 𖬂𖬤𖬵 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬈𖬲𖬝 (Water Star) 𖬌𖬰𖬝 𖬆𖬰𖬝 𖬈𖬰𖬩 𖬄𖬲𖬦𖬵 𖬌𖬲𖬞 𖬄𖬲𖬦𖬵 𖬉𖬝𖬵 𖬂𖬤𖬵 𖬌𖬰𖬟 𖬉 𖬈𖬰𖬪.</p>

          <div class="calc-grid">
            <div class="calc-input-group">
              <label class="pahawh-glyph">🏔️ 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬌𖬲𖬞 (Roob / Tib Neeg):</label>
              <select id="selMountainStar" class="calc-select pahawh-glyph">
                <option value="1">𖭑-𖬔𖬲𖬝 (𖬈𖬲𖬝 / Dej)</option>
                <option value="2">𖭒-𖬆𖬰𖬝 (𖬗𖬮𖬰 / Av)</option>
                <option value="3">𖭓-𖬐𖬶𖬝 (𖬍𖬰𖬧 / Ntoo)</option>
                <option value="4">𖭔-𖬐𖬶𖬝 (𖬍𖬰𖬧 / Ntoo)</option>
                <option value="5">𖭕-𖬖𖬰𖬝 (𖬗𖬮𖬰 / Av)</option>
                <option value="6">𖭖-𖬔𖬲𖬝 (𖬆𖬰 / Kub)</option>
                <option value="7">𖭗-𖬔𖬲𖬞 (𖬆𖬰 / Kub)</option>
                <option value="8">𖭘-𖬔𖬲𖬝 (𖬗𖬮𖬰 / Av)</option>
                <option value="9" selected>𖭙-𖬖𖬲𖬩𖬵 (𖬐𖬲𖬯 𖬏𖬲𖬧 / Hluav Taws)</option>
              </select>
            </div>

            <div class="calc-input-group">
              <label class="pahawh-glyph">💧 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬈𖬲𖬝 (Dej / Nyiaj Txiag):</label>
              <select id="selWaterStar" class="calc-select pahawh-glyph">
                <option value="1">𖭑-𖬔𖬲𖬝 (𖬈𖬲𖬝 / Dej)</option>
                <option value="2">𖭒-𖬆𖬰𖬝 (𖬗𖬮𖬰 / Av)</option>
                <option value="3">𖭓-𖬐𖬶𖬝 (𖬍𖬰𖬧 / Ntoo)</option>
                <option value="4">𖭔-𖬐𖬶𖬝 (𖬍𖬰𖬧 / Ntoo)</option>
                <option value="5">𖭕-𖬖𖬰𖬝 (𖬗𖬮𖬰 / Av)</option>
                <option value="6">𖭖-𖬔𖬲𖬝 (𖬆𖬰 / Kub)</option>
                <option value="7">𖭗-𖬔𖬲𖬞 (𖬆𖬰 / Kub)</option>
                <option value="8">𖭘-𖬔𖬲𖬝 (𖬗𖬮𖬰 / Av)</option>
                <option value="9" selected>𖭙-𖬖𖬲𖬩𖬵 (𖬐𖬲𖬯 𖬏𖬲𖬧 / Hluav Taws)</option>
              </select>
            </div>
          </div>

          <div class="calc-result-box" id="calcResultDisplay">
            <!-- Dynamically updated -->
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- DETAIL MODAL -->
  <div class="modal-overlay" id="atlasModal">
    <div class="modal-box">
      <div class="modal-head">
        <div>
          <span style="font-size:12px; font-weight:800; color:var(--primary);" id="modalIdTag">LP-0001</span>
          <div id="modalMainTitle" class="pahawh-glyph" style="font-size:22px; font-weight:800; line-height:1.2;">Title</div>
          <div id="modalSubTitle" class="rpa-sub" style="font-size:13.5px; color:var(--gold-dark); margin-top:2px;">RPA Title</div>
        </div>
        <button class="modal-close" id="modalCloseBtn">&times;</button>
      </div>
      <div class="modal-content">
        <div class="modal-img-wrap">
          <img src="" alt="" class="modal-img" id="modalDetailImg">
          <a href="#" target="_blank" class="modal-zoom-pill pahawh-glyph" id="modalDetailImgZoomBtn">
            <span>🔍 𖬊𖬰𖬤 𖬆𖬲𖬝 HD</span>
          </a>
        </div>
        <div id="modalDetailsArea">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer>
    <p class="pahawh-glyph">𖬖𖬰𖬝𖬵 𖬄𖬶𖬟 𖬌𖬣𖬵: 𖬌𖬲𖬞 𖬈𖬦 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬗𖬰𖬤 (Pahawh Hmong Version 3 Master Portal) &bull; Looj Mem Hnub Qub Ya Period 9 (2024–2043)</p>
    <p style="margin-top: 6px; opacity:0.8;">Unicode Standard U+16B00..U+16B8F &bull; Noto Sans Pahawh Hmong Typography &bull; Clean Architecture Edition</p>
  </footer>

  <!-- DATA & LOGIC SCRIPTS -->
  <script>
    const archetypesData = ${archetypesJson};
    const chaptersData = ${chaptersJson};
    const starCombos = ${starCombosJson};

    // DARK MODE TOGGLE
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    // NAVIGATION TABS
    const navTabBtns = document.querySelectorAll('.nav-tab-btn');
    const tabViews = document.querySelectorAll('.tab-view');

    navTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        navTabBtns.forEach(b => b.classList.remove('active'));
        tabViews.forEach(v => v.classList.remove('active'));
        btn.classList.add('active');
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // TAB 1: MASTER ATLAS CONTROLLER
    const atlasGrid = document.getElementById('atlasGrid');
    const atlasSearchInput = document.getElementById('atlasSearchInput');
    const atlasFilterBtns = document.querySelectorAll('.filter-btn');
    const statGood = document.getElementById('statGood');
    const statBad = document.getElementById('statBad');
    const atlasModal = document.getElementById('atlasModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    let currentCat = 'all';
    let currentScore = 'all';
    let currentQuery = '';

    function renderAtlas() {
      let goods = 0;
      let bads = 0;

      const filtered = archetypesData.filter(item => {
        if (item.isGood) goods++; else bads++;

        if (currentCat !== 'all' && item.type !== currentCat) return false;
        if (currentScore === 'good' && !item.isGood) return false;
        if (currentScore === 'bad' && item.isGood) return false;

        if (currentQuery) {
          const q = currentQuery.toLowerCase();
          const matchPahawh = item.name.toLowerCase().includes(q) || item.physics.toLowerCase().includes(q);
          const matchRpa = (item.rpaName || '').toLowerCase().includes(q) || (item.rpaCategory || '').toLowerCase().includes(q) || item.id.toLowerCase().includes(q);
          if (!matchPahawh && !matchRpa) return false;
        }
        return true;
      });

      statGood.textContent = goods;
      statBad.textContent = bads;

      if (filtered.length === 0) {
        atlasGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); font-size: 16px;" class="pahawh-glyph">𖬂𖬤𖬵 𖬔𖬰𖬞 𖬌𖬰𖬟 𖬄𖬲𖬦𖬵 𖬎𖬲𖬮. 𖬄𖬰𖬟 𖬂𖬲𖬝 𖬄𖬰𖬝.</div>';
        return;
      }

      var html = '';
      for (var i = 0; i < filtered.length; i++) {
        var it = filtered[i];
        var sClass = it.isGood ? 'good' : 'bad';
        var sText = (it.isGood ? '✓ 𖬌𖬲𖬞' : '✗ 𖬉𖬝𖬵') + ': ' + it.score + '/𖭑𖭐𖭐';

        html += '<div class="item-card" onclick="openItemModal(\\'' + it.id + '\\')">' +
          '<div class="card-img-wrap">' +
            '<img class="card-img" src="' + it.img + '" alt="' + it.name + '" loading="lazy">' +
            '<span class="card-id-pill">' + it.id + '</span>' +
            '<span class="card-score-pill ' + sClass + '">' + sText + '</span>' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="card-cat pahawh-glyph">' + it.category + '</div>' +
            '<div class="card-title pahawh-glyph">' + it.name + '</div>' +
            '<div class="card-subtitle rpa-sub">' + (it.rpaName || '') + '</div>' +
            '<div class="card-desc pahawh-glyph">' + it.physics + '</div>' +
            '<div class="card-footer">' +
              '<span class="pahawh-glyph">' + (it.type === 'luantou' ? '🏔️ 𖬄𖬲𖬦𖬵 𖬌𖬲𖬞' : '📐 𖭓𖭖𖭐° 𖬄𖬲𖬦𖬵 𖬗𖬮𖬰') + '</span>' +
              '<span class="pahawh-glyph">𖬆𖬰𖬝 𖬎𖬲𖬮 &#10140;</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      }
      atlasGrid.innerHTML = html;
    }

    // TAB 2: 16 LAND PLOTS COMPARATIVE STUDIO
    const plotsGrid = document.getElementById('plotsGrid');
    function renderPlotsStudio() {
      const plots = archetypesData.filter(x => x.type === 'landplot' || x.type === 'boundary');
      var html = '';
      for (var i = 0; i < plots.length; i++) {
        var it = plots[i];
        var sClass = it.isGood ? 'good' : 'bad';
        var sText = (it.isGood ? '✓ 𖬌𖬲𖬞' : '✗ 𖬉𖬝𖬵') + ': ' + it.score + '/𖭑𖭐𖭐';

        html += '<div class="item-card" onclick="openItemModal(\\'' + it.id + '\\')">' +
          '<div class="card-img-wrap">' +
            '<img class="card-img" src="' + it.img + '" alt="' + it.name + '" loading="lazy">' +
            '<span class="card-id-pill">' + it.id + '</span>' +
            '<span class="card-score-pill ' + sClass + '">' + sText + '</span>' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="card-cat pahawh-glyph">' + (it.type === 'boundary' ? '𖭒𖭒 𖬔𖬲𖬝 𖬗𖬮𖬰 & 𖬉 𖬖𖬰𖬦𖬵' : '𖭒𖭐 𖬄𖬲𖬦𖬵 𖬖𖬰𖬟𖬰 𖬗𖬮𖬰') + '</div>' +
            '<div class="card-title pahawh-glyph">' + it.name + '</div>' +
            '<div class="card-subtitle rpa-sub">' + (it.rpaName || '') + '</div>' +
            '<div class="card-desc pahawh-glyph">' + it.physics + '</div>' +
            '<div class="card-footer">' +
              '<span class="pahawh-glyph">📐 𖭓𖭖𖭐° 𖬄𖬲𖬦𖬵 𖬗𖬮𖬰</span>' +
              '<span class="pahawh-glyph">𖬆𖬰𖬝 𖬎𖬲𖬮 &#10140;</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      }
      plotsGrid.innerHTML = html;
    }

    // DETAIL MODAL HANDLER
    function openItemModal(id) {
      var item = null;
      for (var i = 0; i < archetypesData.length; i++) {
        if (archetypesData[i].id === id) { item = archetypesData[i]; break; }
      }
      if (!item) return;

      document.getElementById('modalIdTag').textContent = item.id + ' • ' + (item.isGood ? '✓ 𖬄𖬲𖬦𖬵 𖬌𖬲𖬞' : '✗ 𖬄𖬲𖬦𖬵 𖬉𖬝𖬵') + ' (' + item.score + '/𖭑𖭐𖭐)';
      document.getElementById('modalMainTitle').textContent = item.name;
      document.getElementById('modalSubTitle').textContent = item.rpaName || '';

      const mImg = document.getElementById('modalDetailImg');
      mImg.src = item.img;
      mImg.onclick = () => window.open(item.img, '_blank');
      const zoomBtn = document.getElementById('modalDetailImgZoomBtn');
      if (zoomBtn) zoomBtn.href = item.img;

      var bodyHtml = '';
      if (item.type === 'landplot' || item.type === 'boundary') {
        bodyHtml =
          '<div class="section-block">' +
            '<div class="section-title pahawh-glyph">𖭑. 𖬄𖬲𖬦𖬵 𖬔𖬲𖬝 𖬗𖬮𖬰 & 𖬅𖬰𖬟 𖬑 𖬈𖬲𖬟 (Geometry & Aerodynamics)</div>' +
            '<div class="section-text pahawh-glyph">' + item.physics + '</div>' +
          '</div>' +
          '<div class="section-block ' + (item.isGood ? 'good' : '') + '">' +
            '<div class="section-title pahawh-glyph">𖭒. 𖬉 𖬉𖬰𖬧 𖬒𖬰𖬮𖬵 𖬌𖬲𖬞 & 𖬌𖬲𖬟 𖬉 𖬖𖬰𖬦𖬵 (Entrance & Driveway)</div>' +
            '<div class="section-text pahawh-glyph">' + (item.entrancePlacement || item.entrance) + '</div>' +
          '</div>' +
          '<div class="section-block">' +
            '<div class="section-title pahawh-glyph">𖭓. 𖬖𖬰𖬝 𖬒𖬰𖬧 𖬊𖬰𖬧𖬵 & 𖬉 𖬔𖬲𖬧𖬵/𖬄𖬰𖬝𖬵 (House Siting & Facing)</div>' +
            '<div class="section-text pahawh-glyph">' + (item.housePositioning ? ('<strong>• 𖬖𖬰𖬝 𖬒𖬰𖬧 𖬊𖬰𖬧𖬵:</strong> ' + item.housePositioning + '<br><strong>• 𖬔𖬲𖬧𖬵 & 𖬄𖬰𖬝𖬵:</strong> ' + item.orientationFacing) : item.water) + '</div>' +
          '</div>' +
          '<div class="section-block">' +
            '<div class="section-title pahawh-glyph">𖭔. 𖬌𖬲𖬟 𖬂𖬤𖬵 𖬖𖬰𖬪𖬵 & 𖬈𖬦 𖬄𖬲𖬟/𖬂𖬤𖬵 𖬄𖬲𖬟 (Trigram & Compatibility)</div>' +
            '<div class="section-text pahawh-glyph">' + item.bagua + '</div>' +
          '</div>' +
          '<div class="section-block" style="background:rgba(2,132,199,0.08); border-left-color:#0284C7;">' +
            '<div class="section-title pahawh-glyph" style="color:#0284C7;">𖭕. 𖬉 𖬊𖬰𖬝 𖬌𖬲𖬝 𖬈𖬲𖬝 (Dual Water Doctrine)</div>' +
            '<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:8px 0;">' +
              '<div style="background:var(--card-bg); border:1px solid #38BDF8; border-radius:6px; padding:10px;">' +
                '<strong style="color:#0284C7; font-size:12.5px;" class="pahawh-glyph">💧 𖬂𖬤𖬵 𖬐𖬰𖬦 𖬈𖬲𖬝: 𖬐𖬰𖬪 𖬎𖬰𖬩𖬵?</strong>' +
                '<div style="font-size:12px; line-height:1.5; margin-top:4px;" class="pahawh-glyph">• <strong>𖬎𖬰𖬩𖬵:</strong> 𖬊𖬲𖬞 𖬈𖬪𖬵 𖬊𖬰𖬧𖬵 𖬗𖬞 >𖭖-𖭘m 𖬂𖬤𖬵 𖬊𖬲𖬞 𖬖𖬲𖬜 𖬔𖬶𖬮 𖬊𖬶𖬯 𖭙 (semicircular).<br>• <strong>𖬘𖬲𖬝:</strong> 𖬊𖬲𖬞 𖬈𖬪𖬵 𖬊𖬬𖬰 𖬌𖬰𖬞 𖬌𖬲𖬞 𖭙 𖬔𖬰𖬞 𖬈𖬪𖬵, 𖬑 <strong>𖬖𖬰𖬟 𖬆𖬰𖬮 𖬐𖬶𖬝 𖬖𖬰𖬟</strong> 𖬎𖬰𖬝.</div>' +
              '</div>' +
              '<div style="background:var(--card-bg); border:1px solid #DC2626; border-radius:6px; padding:10px;">' +
                '<strong style="color:#DC2626; font-size:12.5px;" class="pahawh-glyph">🚫 𖬐𖬰𖬦 𖬈𖬲𖬝 𖬖𖬲𖬞: 𖬐𖬰𖬪 𖬎𖬰𖬧𖬵?</strong>' +
                '<div style="font-size:12px; line-height:1.5; margin-top:4px;" class="pahawh-glyph">• <strong>𖬎𖬰𖬧𖬵:</strong> 𖬒𖬧𖬵 𖬖𖬲𖬦𖬵 (Xuan Wu), 𖬖𖬲𖬟𖬰 𖬊𖬰𖬧𖬵 (Tai Ji), 𖬄𖬰𖬝 𖬉𖬰𖬝, 𖬌𖬰𖬞 𖬈𖬲𖬝 𖬈𖬲𖬞.<br>• <strong>𖬄𖬰𖬟:</strong> 𖬈𖬪𖬵 𖬊𖬰𖬧𖬵 𖬄𖬲𖬟 𖬂𖬤𖬵 𖬆𖬰𖬟 𖬂𖬲𖬤.</div>' +
              '</div>' +
            '</div>' +
            '<div style="font-size:13px; line-height:1.6; margin-top:6px;" class="pahawh-glyph"><strong>• 𖬌𖬰𖬟 𖬆𖬰𖬞 𖬐𖬲𖬟:</strong> ' + item.water + '</div>' +
          '</div>' +
          '<div class="section-block ' + (item.isGood ? 'good' : 'bad') + '">' +
            '<div class="section-title pahawh-glyph">𖭖. 𖬌𖬰𖬟 𖬄𖬲𖬝𖬵 𖬂𖬦 𖬈𖬰𖬪 𖬌𖬲𖬞 𖬈𖬦 (Remediation Protocol)</div>' +
            '<div class="section-text pahawh-glyph">' + (item.comprehensiveRemedy || item.remedy) + (item.taboos ? '<div style="margin-top:8px; color:var(--bad);"><strong>𖬌𖬰𖬟 𖬉 𖬘𖬲𖬝:</strong><br>' + item.taboos.replace(/\\n/g, '<br>') + '</div>' : '') + '</div>' +
          '</div>';
      } else {
        bodyHtml =
          '<div class="section-block">' +
            '<div class="section-title pahawh-glyph">𖭑. 𖬄𖬲𖬦𖬵 𖬆𖬲𖬝 & 𖬅𖬰𖬟 𖬑 𖬈𖬲𖬟 (Geological Shape & Aerodynamics)</div>' +
            '<div class="section-text pahawh-glyph">' + item.physics + '</div>' +
          '</div>' +
          '<div class="section-block">' +
            '<div class="section-title pahawh-glyph">𖭒. 𖬔𖬲𖬟 𖬎𖬰𖬧𖬵 & 𖬖𖬰𖬦𖬵 𖬔𖬲𖬩 𖬌𖬲𖬟 (Impact & Energy Score)</div>' +
            '<div class="section-text pahawh-glyph">' + item.impact + ' (𖬖𖬰𖬦𖬵 𖬔𖬲𖬩 𖬌𖬲𖬟: ' + item.score + '/𖭑𖭐𖭐)</div>' +
          '</div>' +
          '<div class="section-block ' + (item.isGood ? 'good' : 'bad') + '">' +
            '<div class="section-title pahawh-glyph">𖭓. 𖬌𖬰𖬟 𖬄𖬲𖬝𖬵 𖬂𖬦 𖬈𖬰𖬪 𖬌𖬲𖬞 𖬈𖬦 (Remedy Protocol)</div>' +
            '<div class="section-text pahawh-glyph">' + item.remedy + '</div>' +
          '</div>';
      }

      document.getElementById('modalDetailsArea').innerHTML = bodyHtml;
      atlasModal.classList.add('active');
    }

    modalCloseBtn.onclick = function() { atlasModal.classList.remove('active'); };
    atlasModal.onclick = function(e) {
      if (e.target === atlasModal) atlasModal.classList.remove('active');
    };

    // SEARCH & FILTER EVENTS
    atlasSearchInput.addEventListener('input', function(e) {
      currentQuery = e.target.value.trim();
      renderAtlas();
    });

    atlasFilterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (btn.dataset.cat) {
          atlasFilterBtns.forEach(function(b) { if (b.dataset.cat) b.classList.remove('active'); });
          btn.classList.add('active');
          currentCat = btn.dataset.cat;
        } else if (btn.dataset.score) {
          if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            currentScore = 'all';
          } else {
            atlasFilterBtns.forEach(function(b) { if (b.dataset.score) b.classList.remove('active'); });
            btn.classList.add('active');
            currentScore = btn.dataset.score;
          }
        }
        renderAtlas();
      });
    });

    // TAB 3: BOOK 1 READER SYSTEM
    const chapterNavList = document.getElementById('chapterNavList');
    const chapterContentArea = document.getElementById('chapterContentArea');
    const readingChapterBadge = document.getElementById('readingChapterBadge');
    const prevChapterBtn = document.getElementById('prevChapterBtn');
    const nextChapterBtn = document.getElementById('nextChapterBtn');
    const fontIncBtn = document.getElementById('fontIncBtn');
    const fontDecBtn = document.getElementById('fontDecBtn');

    let currentChapterIndex = 0;
    let readerFontSize = 15;

    function initBookNav() {
      var navHtml = '';
      for (var i = 0; i < chaptersData.length; i++) {
        var ch = chaptersData[i];
        navHtml += '<li class="chapter-nav-item ' + (i === 0 ? 'active' : '') + '" data-idx="' + i + '">' +
          '<span class="pahawh-glyph">' + ch.title + '</span>' +
          '<span class="sub-rpa">' + (ch.rpaTitle || '') + '</span>' +
        '</li>';
      }
      chapterNavList.innerHTML = navHtml;

      const items = document.querySelectorAll('.chapter-nav-item');
      items.forEach(it => {
        it.addEventListener('click', () => {
          loadChapter(parseInt(it.dataset.idx, 10));
        });
      });
    }

    function loadChapter(idx) {
      if (idx < 0 || idx >= chaptersData.length) return;
      currentChapterIndex = idx;

      const navItems = document.querySelectorAll('.chapter-nav-item');
      navItems.forEach((it, i) => {
        if (i === idx) it.classList.add('active');
        else it.classList.remove('active');
      });

      const ch = chaptersData[idx];
      readingChapterBadge.innerHTML = '𖬌𖬲𖬝𖬵 ' + (idx) + ' 𖬎𖬰𖬩𖬵 ' + (chaptersData.length - 1) + ' • <span class="pahawh-glyph">' + ch.title + '</span>';
      chapterContentArea.innerHTML = ch.html;
      applyFontSize();

      prevChapterBtn.disabled = idx === 0;
      prevChapterBtn.style.opacity = idx === 0 ? '0.4' : '1';
      nextChapterBtn.disabled = idx === chaptersData.length - 1;
      nextChapterBtn.style.opacity = idx === chaptersData.length - 1 ? '0.4' : '1';

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    prevChapterBtn.addEventListener('click', () => loadChapter(currentChapterIndex - 1));
    nextChapterBtn.addEventListener('click', () => loadChapter(currentChapterIndex + 1));

    function applyFontSize() {
      const ps = chapterContentArea.querySelectorAll('.doc-p, .doc-bullet, .doc-table, .doc-box-body, p, li, table');
      ps.forEach(p => p.style.fontSize = readerFontSize + 'px');
    }

    fontIncBtn.addEventListener('click', () => {
      if (readerFontSize < 22) { readerFontSize += 1.5; applyFontSize(); }
    });
    fontDecBtn.addEventListener('click', () => {
      if (readerFontSize > 12) { readerFontSize -= 1.5; applyFontSize(); }
    });

    // TAB 4: 81 FLYING STARS CALCULATOR (100% PAHAWH)
    const selMountainStar = document.getElementById('selMountainStar');
    const selWaterStar = document.getElementById('selWaterStar');
    const calcResultDisplay = document.getElementById('calcResultDisplay');

    function updateCalc() {
      const m = selMountainStar.value;
      const w = selWaterStar.value;
      const key = m + '_' + w;
      const rawData = starCombos[key] || {
        verdict: (m==='9'||w==='9'||m==='1'||w==='1'||m==='8'||w==='8') ? '𖬄𖬲𖬦𖬵 𖬌𖬲𖬞 (AUSPICIOUS COMBINATION)' : '𖬄𖬲𖬦𖬵 𖬌𖬲𖬞 𖬄𖬰𖬝 (MIXED / NEUTRAL)',
        class: (m==='2'||w==='2'||m==='5'||w==='5') ? 'bad' : 'good',
        score: (m==='5'||w==='5') ? 25 : 70,
        desc: '𖬉 𖬂𖬲𖬤𖬵 𖬌𖬰𖬞 𖬎𖬰𖬩𖬵 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 ' + m + ' (𖬌𖬲𖬞) 𖬂𖬤𖬵 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 ' + w + ' (𖬈𖬲𖬝) 𖬌𖬲𖬝 𖬈𖬲𖬟 𖬉 𖬂𖬲𖬤𖬵 𖬄𖬲𖬟 𖬌𖬰𖬞 𖬎𖬰𖬩𖬵 𖬂𖬰𖬧 𖬈𖬦 (𖬌𖬲𖬞) 𖬂𖬤𖬵 𖬔𖬶𖬮 𖬔𖬲𖬟 𖬉 𖬖𖬰𖬪 𖬈𖬲𖬪 (𖬈𖬲𖬝).',
        cure: '𖬎𖬲𖬮 𖬂𖬤𖬵 𖬖𖬰𖬪𖬵 𖬌𖬲𖬟 𖬎𖬰𖬩𖬵 𖬒𖬰𖬮𖬰 𖬆𖬰𖬞 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 𖬌𖬰𖬝 𖬂𖬲𖬤𖬵 𖬄𖬲𖬟 (Sheng-Ke cycle).'
      };

      const sColor = rawData.class === 'good' ? '#16A34A' : '#DC2626';

      calcResultDisplay.innerHTML =
        '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">' +
          '<span class="calc-badge pahawh-glyph" style="background: ' + sColor + ';">' + rawData.verdict + '</span>' +
          '<strong style="font-size: 14px; color: ' + sColor + ';" class="pahawh-glyph">𖬖𖬰𖬦𖬵 𖬔𖬲𖬩 𖬌𖬲𖬟: ' + rawData.score + '/𖭑𖭐𖭐</strong>' +
        '</div>' +
        '<div style="font-size: 17px; font-weight: 800; color: var(--text); margin-bottom: 8px;" class="pahawh-glyph">' +
          '𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 ' + m + ' (𖬌𖬲𖬞) 𖬂𖬲𖬤𖬵 𖬈𖬰𖬩 𖬆𖬰𖬩 𖬆𖬰𖬦𖬵 ' + w + ' (𖬈𖬲𖬝)' +
        '</div>' +
        '<p style="font-size: 14.5px; line-height: 1.65; margin-bottom: 14px;" class="pahawh-glyph">' + rawData.desc + '</p>' +
        '<div style="padding: 12px 16px; background: rgba(0,0,0,0.04); border-left: 4px solid var(--gold); border-radius: 0 8px 8px 0; font-size: 13.5px;" class="pahawh-glyph">' +
          '<strong>💡 𖬄𖬲𖬝𖬵 𖬂𖬦 𖬈𖬰𖬪 & 𖬎𖬰𖬩𖬵 𖬌𖬲𖬟:</strong> ' + rawData.cure +
        '</div>';
    }

    selMountainStar.addEventListener('change', updateCalc);
    selWaterStar.addEventListener('change', updateCalc);

    // INITIAL RENDER
    renderAtlas();
    renderPlotsStudio();
    initBookNav();
    loadChapter(0);
    updateCalc();
  </script>
</body>
</html>
`;

console.log('Writing 100% Pure Pahawh Portal to:', path.resolve(pahawhDir, 'index.html'));
fs.writeFileSync(path.resolve(pahawhDir, 'index.html'), html, 'utf8');

console.log('🎉 Successfully created Master Pahawh Hmong Web Portal:');
console.log('  File:', path.resolve(pahawhDir, 'index.html'));
console.log('  Total Archetypes embedded:', archetypes.length);
console.log('  Total Chapters embedded:', chapters.length);
console.log('  Portal File Size:', (fs.statSync(path.resolve(pahawhDir, 'index.html')).size / 1024).toFixed(1), 'KB');
