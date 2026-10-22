/**
 * BUILD LAO WEB PORTAL (MASTER UNIFIED APPLICATION)
 * Output: lao/index.html
 * Features:
 *   - Tab 1: Master Atlas 91 Archetypes in 100% Pure Lao (Search, Filter, Modal)
 *   - Tab 2: 16 Land Plots Comparative Studio (100% Pure Lao)
 *   - Tab 3: 24 Chapters Digital Textbook Reader (100% Pure Lao)
 *   - Tab 4: 81 Flying Stars Calculator & Reference Glossary (100% Pure Lao)
 * ZERO Hmong words, 100% authentic Lao translations.
 */
const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(__dirname, '..');
const laoDir = path.resolve(projectDir, 'lao');

if (!fs.existsSync(laoDir)) fs.mkdirSync(laoDir, { recursive: true });

// 1. Load Lao 91 Archetypes Data
const ltData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_75_core_luan_tou_archetypes_lao.json'), 'utf8'));
const lpData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_16_core_land_plot_archetypes_lao.json'), 'utf8'));
const envData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_boundary_adjacencies_lao.json'), 'utf8'));

const archetypes = [];

// 16 Land Plots
lpData.forEach(lp => {
  const score = (typeof lp.score === 'number') ? lp.score : (lp.energyScore || 75);
  archetypes.push({
    id: lp.id,
    type: 'landplot',
    name: lp.baseName,
    category: lp.category || '16 ຮູບແບບຕອນດິນ ແລະ ການວາງຜັງອາຄານ',
    score: score,
    isGood: score >= 60,
    img: `img/${lp.id}.png`,
    physics: lp.geometryPhysics || '',
    entranceRules: lp.entranceAnalysis || '',
    waterRules: lp.waterAnalysis || '',
    baguaSectors: lp.baguaSectors || '',
    remedy: lp.remedy || '',
    housePositioning: lp.housePositioning || '',
    entrancePlacement: lp.entrancePlacement || '',
    orientationFacing: lp.orientationFacing || '',
    elementGua: lp.elementGua || '',
    favorablePeople: lp.favorablePeople || '',
    clashingPeople: lp.clashingPeople || '',
    comprehensiveRemedy: lp.comprehensiveRemedy || '',
    taboos: lp.taboos || ''
  });
});

// 18 Boundary & Environmental Adjacencies
envData.forEach(env => {
  const score = (typeof env.score === 'number') ? env.score : 75;
  archetypes.push({
    id: env.id,
    type: 'boundary',
    name: env.baseName,
    category: env.category || 'ສະພາບແວດລ້ອມຕິດແປະ & ທາງເຂົ້າ-ອອກ',
    score: score,
    isGood: env.isGood !== undefined ? env.isGood : score >= 60,
    img: `img/${env.id}.png`,
    physics: env.geometryPhysics || '',
    entranceRules: env.entrancePlacement || '',
    waterRules: env.waterRules || env.taboos || '',
    baguaSectors: env.elementGua || '',
    remedy: env.comprehensiveRemedy || '',
    housePositioning: env.housePositioning || '',
    entrancePlacement: env.entrancePlacement || '',
    orientationFacing: env.orientationFacing || '',
    elementGua: env.elementGua || '',
    favorablePeople: env.favorablePeople || '',
    clashingPeople: env.clashingPeople || '',
    comprehensiveRemedy: env.comprehensiveRemedy || '',
    taboos: env.taboos || ''
  });
});

// 75 Luan Tou Archetypes
ltData.forEach(lt => {
  const score = (typeof lt.score === 'number') ? lt.score : 70;
  archetypes.push({
    id: lt.id,
    type: 'luantou',
    name: lt.baseName,
    category: lt.category,
    score: score,
    isGood: score >= 60,
    img: `img/${lt.id}.png`,
    physics: lt.physics || '',
    impact: lt.impact || '',
    remedy: lt.remedy || ''
  });
});

// 2. Load 24 Compiled Lao Chapters
const chapters = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'compiled_lao_chapters_html.json'), 'utf8'));

// 3. 81 Flying Stars Data in Lao
const starNamesLao = [
  "",
  "1-ຂາວ (Tan Lang / ທາດນ້ຳ - ສະຕິປັນຍາ & ໂຊກລາບ)",
  "2-ດຳ (Ju Men / ທາດດິນ - ໂລກໄພໄຂ້ເຈັບ)",
  "3-ຂຽວ (Lu Cun / ທາດໄມ້ - ຜິດຖຽງ & ຄະດີຄວາມ)",
  "4-ຂຽວ (Wen Qu / ທາດໄມ້ - ການສຶກສາ & ສະເໜ່)",
  "5-ເຫຼືອງ (Lian Zhen / ທາດດິນ - ມະຫາວິບັດ)",
  "6-ຂາວ (Wu Qu / ທາດທອງ - ອຳນາດ & ບາຣະມີ)",
  "7-ແດງ (Po Jun / ທາດທອງ - ສູນເສຍ & ໂຈນໄພ)",
  "8-ຂາວ (Zuo Fu / ທາດດິນ - ຄວາມຮັ່ງມີ & ຊັບສິນ)",
  "9-ມ່ວງ (You Bi / ທາດໄຟ - ມະຫາມຸງຄຸນຍຸກ 9)"
];

const archetypesJson = JSON.stringify(archetypes);
const chaptersJson = JSON.stringify(chapters);

const html = `<!DOCTYPE html>
<html lang="lo">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ຕຳລາຮວງຈຸ້ຍດາວເຫີນ ສະບັບສົມບູນ (Flying Star Feng Shui Lao Edition)</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='31' fill='%237f1d1d' stroke='%23f59e0b' stroke-width='2'/%3E%3Ccircle cx='32' cy='32' r='26' fill='%230f172a' stroke='%23fbbf24' stroke-width='1.5'/%3E%3Cpath d='M32,8 A24,24 0 0,1 32,56 A12,12 0 0,1 32,32 A12,12 0 0,0 32,8 Z' fill='%23f8fafc'/%3E%3Cpath d='M32,8 A24,24 0 0,0 32,56 A12,12 0 0,0 32,32 A12,12 0 0,1 32,8 Z' fill='%230f172a'/%3E%3Ccircle cx='32' cy='20' r='3.5' fill='%230f172a'/%3E%3Ccircle cx='32' cy='44' r='3.5' fill='%23f8fafc'/%3E%3C/svg%3E">
  <style>
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
      --sidebar-w: 320px;
    }

    body.dark-mode {
      --bg: #0F172A;
      --card-bg: #1E293B;
      --text: #F8FAFC;
      --text-muted: #94A3B8;
      --border: #334155;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Phetsarath OT', 'Noto Sans Lao', system-ui, -apple-system, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      transition: background 0.2s, color 0.2s;
    }

    /* TOP NAVBAR */
    header {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--card-bg);
      border-bottom: 2px solid var(--gold);
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    }
    .nav-container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 20px;
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: inherit;
    }
    .brand-logo {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary), var(--primary-dark));
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gold);
      font-size: 24px;
      box-shadow: 0 2px 8px rgba(139,0,0,0.3);
    }
    .brand-text h1 {
      font-size: 16px;
      font-weight: 800;
      color: var(--primary);
      letter-spacing: 0.5px;
      line-height: 1.2;
    }
    .brand-text span {
      font-size: 11.5px;
      color: var(--text-muted);
      font-weight: 600;
    }

    /* NAV TABS */
    .nav-tabs {
      display: flex;
      gap: 6px;
      background: var(--bg);
      padding: 4px;
      border-radius: 10px;
      border: 1px solid var(--border);
    }
    .nav-tab-btn {
      padding: 8px 16px;
      border: none;
      background: transparent;
      border-radius: 8px;
      font-family: inherit;
      font-size: 13.5px;
      font-weight: 700;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s;
      white-space: nowrap;
    }
    .nav-tab-btn:hover { color: var(--primary); }
    .nav-tab-btn.active {
      background: var(--card-bg);
      color: var(--primary);
      box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .hmong-btn {
      padding: 7px 14px;
      background: #0284C7;
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .hmong-btn:hover { background: #0369A1; }
    .compass-btn {
      padding: 7px 14px;
      background: var(--primary);
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 8px;
      font-size: 12.5px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .compass-btn:hover { background: var(--primary-dark); }
    .theme-btn {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: var(--card-bg);
      cursor: pointer;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text);
    }

    /* MAIN CONTAINER */
    main {
      max-width: 1440px;
      margin: 0 auto;
      padding: 24px 20px;
      min-height: calc(100vh - 120px);
    }
    .tab-view { display: none; }
    .tab-view.active { display: block; animation: fadeIn 0.25s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }

    /* TAB 1: ATLAS */
    .atlas-hero {
      text-align: center;
      padding: 24px 20px 32px;
      background: linear-gradient(180deg, rgba(139,0,0,0.06), transparent);
      border-radius: 16px;
      margin-bottom: 24px;
    }
    .atlas-hero h2 {
      font-size: 26px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 8px;
    }
    .atlas-hero p {
      color: var(--text-muted);
      font-size: 14px;
      max-width: 760px;
      margin: 0 auto 16px;
    }
    .stats-row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
    }
    .stat-badge {
      background: var(--card-bg);
      border: 1px solid var(--border);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.04);
    }
    .stat-badge strong { color: var(--primary); font-weight: 800; }

    /* SEARCH & FILTERS */
    .search-box {
      margin-bottom: 18px;
    }
    .search-input {
      width: 100%;
      padding: 14px 20px;
      font-size: 15px;
      font-family: inherit;
      border: 2px solid var(--border);
      border-radius: 12px;
      background: var(--card-bg);
      color: var(--text);
      outline: none;
      transition: border 0.2s;
    }
    .search-input:focus { border-color: var(--primary); }

    .filter-pills {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }
    .filter-btn {
      padding: 8px 16px;
      border: 1px solid var(--border);
      background: var(--card-bg);
      color: var(--text-muted);
      border-radius: 20px;
      font-family: inherit;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn:hover { border-color: var(--primary); color: var(--primary); }
    .filter-btn.active {
      background: var(--primary);
      color: #FFFFFF;
      border-color: var(--primary);
    }

    /* ATLAS GRID */
    .atlas-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }
    .archetype-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 10px rgba(0,0,0,0.03);
    }
    .archetype-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.08);
      border-color: var(--gold);
    }
    .card-img-wrap {
      width: 100%;
      height: 190px;
      background: #F1F5F9;
      position: relative;
      overflow: hidden;
    }
    .card-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #0F172A;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: high-quality;
    }
    .card-score {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 800;
      color: #FFFFFF;
    }
    .card-score.good { background: var(--good); }
    .card-score.bad { background: var(--bad); }

    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-id-tag {
      font-size: 11px;
      font-weight: 800;
      color: var(--gold-dark);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .card-title {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 8px;
      line-height: 1.35;
    }
    .card-desc {
      font-size: 12.5px;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 12px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-footer {
      margin-top: auto;
      padding-top: 10px;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: var(--primary);
      font-weight: 700;
    }

    /* MODAL */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(15, 23, 42, 0.7);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-backdrop.open { display: flex; }
    .modal-box {
      background: var(--card-bg);
      width: 100%;
      max-width: 1060px;
      max-height: 92vh;
      border-radius: 18px;
      overflow-y: auto;
      border: 1px solid var(--border);
      box-shadow: 0 24px 48px rgba(0,0,0,0.35);
      position: relative;
    }
    .modal-header {
      position: sticky;
      top: 0;
      background: var(--card-bg);
      border-bottom: 1px solid var(--border);
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 10;
    }
    .modal-title { font-size: 18px; font-weight: 800; color: var(--primary); }
    .modal-close {
      width: 32px;
      height: 32px;
      border: none;
      background: var(--bg);
      border-radius: 50%;
      font-size: 18px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .modal-body { padding: 24px; }
    .modal-img-wrap {
      width: 100%;
      max-height: 560px;
      background: #0F172A;
      border: 1px solid var(--border);
      border-radius: 14px;
      margin-bottom: 20px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    .modal-img-wrap img {
      max-width: 100%;
      max-height: 560px;
      object-fit: contain;
      image-rendering: -webkit-optimize-contrast;
      image-rendering: high-quality;
      cursor: zoom-in;
      transition: transform 0.2s ease;
    }
    .modal-img-wrap:hover img {
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
      font-size: 12px;
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
    .modal-section { margin-bottom: 18px; }
    .modal-section h4 {
      font-size: 14px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .modal-section p { font-size: 13.5px; color: var(--text); line-height: 1.6; }

    /* TAB 2: 16 PLOTS STUDIO */
    .plots-studio-header {
      text-align: center;
      margin-bottom: 24px;
    }
    .plots-studio-header h2 {
      font-size: 24px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 6px;
    }
    .plots-studio-header p {
      font-size: 13.5px;
      color: var(--text-muted);
    }

    /* TAB 3: 24 CHAPTERS READER */
    .book-layout {
      display: flex;
      gap: 24px;
      min-height: 700px;
    }
    .book-sidebar {
      width: var(--sidebar-w);
      flex-shrink: 0;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px;
      height: fit-content;
      max-height: 85vh;
      overflow-y: auto;
      position: sticky;
      top: 88px;
    }
    .sidebar-title {
      font-size: 14px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--border);
    }
    .chapter-nav-list { list-style: none; display: flex; flex-direction: column; gap: 4px; }
    .chapter-nav-item {
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 13px;
      color: var(--text-muted);
      cursor: pointer;
      transition: all 0.2s;
      line-height: 1.35;
    }
    .chapter-nav-item:hover { background: var(--bg); color: var(--primary); }
    .chapter-nav-item.active {
      background: rgba(139,0,0,0.08);
      color: var(--primary);
      font-weight: 700;
    }

    .book-reader {
      flex: 1;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 36px 40px;
      max-width: 960px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    }
    .reader-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--border);
    }
    .reader-chapter-title { font-size: 20px; font-weight: 800; color: var(--primary); }
    .font-btns { display: flex; gap: 6px; }
    .font-btn {
      padding: 4px 10px;
      border: 1px solid var(--border);
      background: var(--bg);
      border-radius: 6px;
      cursor: pointer;
      font-family: inherit;
      font-size: 12px;
      font-weight: 700;
    }

    /* DOCUMENT CONTENT STYLING */
    .doc-h1 { font-size: 22px; font-weight: 800; color: var(--primary); margin: 24px 0 12px; }
    .doc-h2 { font-size: 17px; font-weight: 800; color: #1E40AF; margin: 20px 0 10px; }
    .doc-lead { font-size: 15px; font-weight: 600; color: var(--primary-dark); margin-bottom: 16px; line-height: 1.7; }
    .doc-p { font-size: 14px; line-height: 1.75; margin-bottom: 14px; }
    .doc-callout {
      background: #EFF6FF;
      border-left: 4px solid #2563EB;
      padding: 14px 18px;
      border-radius: 0 8px 8px 0;
      margin: 18px 0;
      font-size: 13.5px;
    }
    .doc-table {
      width: 100%;
      border-collapse: collapse;
      margin: 18px 0;
      font-size: 13px;
    }
    .doc-table th {
      background: var(--primary);
      color: #FFFFFF;
      padding: 10px 12px;
      text-align: left;
      font-weight: 700;
    }
    .doc-table td {
      padding: 10px 12px;
      border-bottom: 1px solid var(--border);
    }
    .doc-table tr:nth-child(even) { background: var(--bg); }
    .doc-table tr.highlight-row { background: #FEF08A; font-weight: 700; }

    /* TAB 4: CALCULATOR */
    .calc-container {
      max-width: 980px;
      margin: 0 auto;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.03);
    }
    .calc-pickers {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 24px;
    }
    .picker-box {
      background: var(--bg);
      padding: 16px;
      border-radius: 12px;
      border: 1px solid var(--border);
    }
    .picker-box label {
      display: block;
      font-size: 13px;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 8px;
    }
    .picker-select {
      width: 100%;
      padding: 10px 14px;
      font-size: 14px;
      font-family: inherit;
      border: 1px solid var(--border);
      border-radius: 8px;
      background: var(--card-bg);
      color: var(--text);
      outline: none;
    }

    .calc-result-card {
      background: linear-gradient(180deg, rgba(139,0,0,0.04), transparent);
      border: 2px solid var(--gold);
      border-radius: 14px;
      padding: 24px;
      margin-top: 24px;
    }
    .result-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    .result-combo-name { font-size: 20px; font-weight: 800; color: var(--primary); }
    .result-score-tag {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 800;
      color: #FFFFFF;
    }

    /* FOOTER */
    footer {
      border-top: 1px solid var(--border);
      background: var(--card-bg);
      padding: 24px;
      text-align: center;
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 40px;
    }

    @media (max-width: 900px) {
      .book-layout { flex-direction: column; }
      .book-sidebar { width: 100%; max-height: 240px; position: static; }
      .calc-pickers { grid-template-columns: 1fr; }
      .nav-tabs { overflow-x: auto; max-width: calc(100vw - 180px); }
    }
  </style>
</head>
<body>

  <!-- HEADER NAVBAR -->
  <header>
    <div class="nav-container">
      <a href="#" class="brand">
        <div class="brand-logo">☯</div>
        <div class="brand-text">
          <h1>ຮວງຈຸ້ຍດາວເຫີນ</h1>
          <span>XUAN KONG FEI XING • ພາສາລາວ</span>
        </div>
      </a>

      <div class="nav-tabs">
        <button class="nav-tab-btn active" data-tab="tabAtlas">🗺️ ສາລະນຸກົມ 101 ຮູບແບບ</button>
        <button class="nav-tab-btn" data-tab="tabPlots">📐 ສະຕູດີໂອ 42 ຕອນດິນ</button>
        <button class="nav-tab-btn" data-tab="tabBook">📖 ຕຳລາຫຼັກ 24 ບົດຮຽນ</button>
        <button class="nav-tab-btn" data-tab="tabCalc">🧭 ຄິດໄລ່ດາວ 81 ຄູ່</button>
      </div>

      <div class="nav-actions">
        <a href="../hmong/index.html" class="hmong-btn" title="ໄປຫາເວັບໄຊສະບັບພາສາມົ້ງ RPA">
          <span>📖 Hmoob RPA</span>
        </a>
        <a href="../pahawh/index.html" class="hmong-btn" style="background: #7F1D1D; border: 1px solid #D4AF37;" title="ໄປຫາເວັບໄຊສະບັບພາສາມົ້ງ">
          <span>𖬌𖬣𖬵 ມົ້ງ</span>
        </a>
        <a href="../index.html" class="compass-btn" title="ກັບຄືນໜ້າຈານເຂັມທິດຫຼັກ">
          <span>🧭 ຈານເຂັມທິດ</span>
        </a>
        <button class="theme-btn" id="themeToggle" title="ປ່ຽນໂໝດມືດ/ແຈ້ງ">🌙</button>
      </div>
    </div>
  </header>

  <!-- MAIN APP CONTAINER -->
  <main>

    <!-- TAB 1: MASTER ATLAS 93 ARCHETYPES -->
    <div id="tabAtlas" class="tab-view active">
      <div class="atlas-hero">
        <h2>🗺️ ສາລະນຸກົມຮວງຈຸ້ຍ 101 ຮູບແບບ ພູເຂົາ, ສາຍນ້ຳ, ຕອນດິນ &amp; ສະພາບແວດລ້ອມຕິດແປະ</h2>
        <p>ຄັງຄວາມຮູ້ຮວງຈຸ້ຍຫຼວນໂຖວ (Luan Tou), ຜັງຕອນດິນ ແລະ ສະພາບແວດລ້ອມຕິດແປະ 101 ຮູບແບບ: ວິເຄາະພະລັງງານຊີ່, ຫຼັກການວາງປະຕູ, ໜອງນ້ຳ ແລະ ວິທີແກ້ໄຂຮວງຈຸ້ຍຢ່າງລະອຽດ.</p>
      </div>

      <div class="search-box">
        <input type="text" id="atlasSearchInput" class="search-input" placeholder="🔍 ຄົ້ນຫາຕາມຊື່, ລະຫັດ (ENV/LP/LT), ທາດ, ຫຼື ວິທີແກ້ໄຂ...">
      </div>

      <div class="filter-pills" id="atlasFilters">
        <button class="filter-btn active" data-cat="all">ທັງໝົດ (101)</button>
        <button class="filter-btn" data-cat="env">🏞️ 22 ສະພາບແວດລ້ອມຕິດແປະ (Boundaries)</button>
        <button class="filter-btn" data-cat="plots">📐 20 ຮູບຊົງຕອນດິນ (Land Plots)</button>
        <button class="filter-btn" data-cat="shas">⛰️ 35 ພູເຂົາພິສ (Mountain Sha)</button>
        <button class="filter-btn" data-cat="waters">🌊 16 ສາຍນ້ຳ (Water Courses)</button>
        <button class="filter-btn" data-cat="peaks">⭐ 5 ພູເຂົາ 5 ທາດ (Five Peaks)</button>
        <button class="filter-btn" data-cat="winds">💨 3 ຮູບແບບລົມ (Winds)</button>
      </div>

      <div class="atlas-grid" id="atlasGrid"></div>
    </div>

    <!-- TAB 2: 34 LAND PLOTS & BOUNDARIES STUDIO -->
    <div id="tabPlots" class="tab-view">
      <div class="plots-studio-header">
        <h2>📐 ສະຕູດີໂອປຽບທຽບ 42 ຮູບແບບຕອນດິນ & ສະພາບແວດລ້ອມຕິດແປະ</h2>
        <p>ປຽບທຽບຜັງຕອນດິນ 42 ແບບ: 20 ຮູບຊົງເລຂາຄະນິດ (ຈະຕຸລັດ, ຜືນຜ້າ, ຖົງເງິນ, ນ້ຳເຕົ້າ, ສາມຫຼ່ຽມ, ໂຕແອວ...) + 22 ສະພາບແວດລ້ອມຕິດແປະ (ຕິດທາງດ້ານດຽວ, ສອງດ້ານ, ສາມ-ສີ່ດ້ານ, ທາງຈົ່ງ, ຕິດໜອງ, ຕິດປ່າ, ຕິດເພື່ອນບ້ານ, ຕິດກຳແພງ...) ພ້ອມຫຼັກການ 360 ອົງສາ.</p>
      </div>
      <div class="atlas-grid" id="plotsGrid"></div>
    </div>

    <!-- TAB 3: 24 CHAPTERS READER -->
    <div id="tabBook" class="tab-view">
      <div class="book-layout">
        <aside class="book-sidebar">
          <div class="sidebar-title">📚 ສາລະບານ 24 ບົດຮຽນ</div>
          <ul class="chapter-nav-list" id="chapterNavList"></ul>
        </aside>

        <section class="book-reader">
          <div class="reader-toolbar">
            <div class="reader-chapter-title" id="readerTitle">ບົດທີ 1</div>
            <div class="font-btns">
              <button class="font-btn" id="btnFontDec">A-</button>
              <button class="font-btn" id="btnFontInc">A+</button>
            </div>
          </div>
          <div id="readerContent"></div>
        </section>
      </div>
    </div>

    <!-- TAB 4: 81 STARS CALCULATOR -->
    <div id="tabCalc" class="tab-view">
      <div class="calc-container">
        <h2 style="font-size: 20px; font-weight: 800; color: var(--primary); margin-bottom: 6px;">🧭 ເຄື່ອງຄິດໄລ່ດາວປະສົມ 81 ຄູ່ (81 Flying Star Combinations Calculator)</h2>
        <p style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 20px;">ເລືອກດາວພູ (Mountain Star) ແລະ ດາວນ້ຳ (Water Star) ເພື່ອກວດສອບຄຸນແລະໂທດ ພ້ອມວິທີແກ້ໄຂຮວງຈຸ້ຍ:</p>

        <div class="calc-pickers">
          <div class="picker-box">
            <label>⛰️ ດາວພູ (Shan Xing / Mountain Star):</label>
            <select id="selMountainStar" class="picker-select">
              <option value="1">1 - ຂາວ (Tan Lang / ທາດນ້ຳ - ສະຕິປັນຍາ)</option>
              <option value="2">2 - ດຳ (Ju Men / ທາດດິນ - ໂລກໄພໄຂ້ເຈັບ)</option>
              <option value="3">3 - ຂຽວ (Lu Cun / ທາດໄມ້ - ຜິດຖຽງ)</option>
              <option value="4">4 - ຂຽວ (Wen Qu / ທາດໄມ້ - ການສຶກສາ & ສະເໜ່)</option>
              <option value="5">5 - ເຫຼືອງ (Lian Zhen / ທາດດິນ - ມະຫາວິບັດ)</option>
              <option value="6">6 - ຂາວ (Wu Qu / ທາດທອງ - ອຳນາດບາຣະມີ)</option>
              <option value="7">7 - ແດງ (Po Jun / ທາດທອງ - ສູນເສຍ/ໂຈນໄພ)</option>
              <option value="8">8 - ຂາວ (Zuo Fu / ທາດດິນ - ຄວາມຮັ່ງມີ)</option>
              <option value="9">9 - ມ່ວງ (You Bi / ທາດໄຟ - ມຸງຄຸນຍຸກ 9)</option>
            </select>
          </div>

          <div class="picker-box">
            <label>🌊 ດາວນ້ຳ (Xiang Xing / Water Star):</label>
            <select id="selWaterStar" class="picker-select">
              <option value="9" selected>9 - ມ່ວງ (You Bi / ທາດໄຟ - ມຸງຄຸນຍຸກ 9)</option>
              <option value="1">1 - ຂາວ (Tan Lang / ທາດນ້ຳ - ສະຕິປັນຍາ)</option>
              <option value="2">2 - ດຳ (Ju Men / ທາດດິນ - ໂລກໄພໄຂ້ເຈັບ)</option>
              <option value="3">3 - ຂຽວ (Lu Cun / ທາດໄມ້ - ຜິດຖຽງ)</option>
              <option value="4">4 - ຂຽວ (Wen Qu / ທາດໄມ້ - ການສຶກສາ & ສະເໜ່)</option>
              <option value="5">5 - ເຫຼືອງ (Lian Zhen / ທາດດິນ - ມະຫາວິບັດ)</option>
              <option value="6">6 - ຂາວ (Wu Qu / ທາດທອງ - ອຳນາດບາຣະມີ)</option>
              <option value="7">7 - ແດງ (Po Jun / ທາດທອງ - ສູນເສຍ/ໂຈນໄພ)</option>
              <option value="8">8 - ຂາວ (Zuo Fu / ທາດດິນ - ຄວາມຮັ່ງມີ)</option>
            </select>
          </div>
        </div>

        <div class="calc-result-card" id="calcResultCard">
          <div class="result-header">
            <div class="result-combo-name" id="resComboName">ຄູ່ດາວ 1 - 9 (ໄມ້ & ໄຟ)</div>
            <div class="result-score-tag" id="resScoreTag" style="background: var(--good);">✓ ດີຫຼາຍ (Auspicious)</div>
          </div>
          <div style="font-size: 14px; line-height: 1.7;" id="resDescription">
            ກຳລັງໂຫຼດຂໍ້ມູນຄູ່ດາວ...
          </div>
        </div>
      </div>
    </div>

  </main>

  <!-- MODAL DETAIL -->
  <div class="modal-backdrop" id="atlasModal">
    <div class="modal-box">
      <div class="modal-header">
        <div class="modal-title" id="mTitle">ລາຍລະອຽດຮູບແບບ</div>
        <button class="modal-close" id="modalCloseBtn">✕</button>
      </div>
      <div class="modal-body">
        <div class="modal-img-wrap">
          <img id="mImg" src="" alt="Drawing">
          <a id="mImgZoomBtn" href="#" target="_blank" class="modal-zoom-pill" title="ເບິ່ງຮູບຂະໜາດເຕັມ Ultra-HD 2400x1440">
            🔍 ເບິ່ງຮູບໃຫຍ່ Ultra-HD 2400x1440
          </a>
        </div>
        <div class="modal-section">
          <h4>🔬 ລັກສະນະທາງກາຍະພາບ (Physics & Geometry)</h4>
          <p id="mPhysics">-</p>
        </div>
        <div class="modal-section" id="mImpactSec">
          <h4>⚡ ຜົນກະທົບຕໍ່ໂຊກລາບ & ພະລັງງານ (Impact)</h4>
          <p id="mImpact">-</p>
        </div>
        <div class="modal-section" id="mHouseSec" style="display:none;">
          <h4>🧭 ຕຳແໜ່ງເຮືອນ, ໄລຍະຖອຍຮົ່ນ & ທິດຫັນໜ້າ (House Positioning & Orientation)</h4>
          <p><strong>• ຕຳແໜ່ງວາງເຮືອນ & ໄລຍະຖອຍຮົ່ນ:</strong> <span id="mHousePos">-</span></p>
          <p style="margin-top: 6px;"><strong>• ທິດຫັນໜ້າ (向), ທິດພິງຫຼັງ (坐) & ທິດຫົວຕຽງ:</strong> <span id="mOrientation">-</span></p>
        </div>
        <div class="modal-section" id="mGuaSec" style="display:none;">
          <h4>☯️ ທາດກວ້າປະຈຳຮູບຊົງ & ຄວາມຖືກຊາຕາ (Gua Element & Compatibility)</h4>
          <p><strong>• ທາດກວ້າປະຈຳຮູບຊົງ:</strong> <span id="mElementGua">-</span></p>
          <p style="margin-top: 6px; color: var(--good);"><strong>• ✓ ຖືກກັບຄົນແບບໃດ:</strong> <span id="mFavorable">-</span></p>
          <p style="margin-top: 6px; color: var(--bad);"><strong>• ✗ ບໍ່ຖືກກັບໃຜ / ຂໍ້ຄວນລະວັງ:</strong> <span id="mClashing">-</span></p>
        </div>
        <div class="modal-section" id="mEntranceSec" style="display:none;">
          <h4>🚪 ຫຼັກການວາງປະຕູໃຫຍ່ & ທາງລົດ (Entrance Placement & Rules)</h4>
          <p><strong>• ຕຳແໜ່ງທາງເຂົ້າ & ປະຕູຮົ້ວ:</strong> <span id="mEntrancePlacement">-</span></p>
          <p style="margin-top: 6px;"><strong>• ຫຼັກການລະອຽດ:</strong> <span id="mEntrance">-</span></p>
        </div>
        <div class="modal-section" id="mWaterSec" style="display:none; background: #F0F9FF; border: 1.5px solid #BAE6FD; border-radius: 12px; padding: 16px;">
          <h4 style="color: #0369A1; margin-top: 0; font-size: 15px; display: flex; align-items: center; gap: 8px;">🌊 ກົດເກນການຈັດການເລື່ອງນ້ຳ (Dual Water Doctrine: ເຕີມໃສ່ vs ຖົມຖິ້ມ)</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
            <div style="background: #FFFFFF; border: 1px solid #7DD3FC; border-radius: 8px; padding: 12px;">
              <strong style="color: #0284C7; display: flex; align-items: center; gap: 6px; font-size: 13px;">
                💧 ຖ້າບໍ່ມີບໍ່ນ້ຳ: ຄວນເຕີມໃສ່ດີບໍ?
              </strong>
              <div style="font-size: 12.5px; line-height: 1.6; color: #334155; margin-top: 6px;">
                • <strong>ຄວນເຕີມ:</strong> ຖ້າໜ້າເຮືອນມີລານໝິງຖາງກວ້າງ >6-8m ແລະ ເປັນທິດຮັບຊັບຍຸກ 9 (ເຕີມເປັນສະນ້ຳເຄິ່ງວົງມົນ ຫຼື ອ່າງນ້ຳພຸໝູນວຽນ).<br>
                • <strong>ຫ້າມເຕີມ:</strong> ຖ້າໜ້າເຮືອນແຄບ, ດາວພູເຂົາ 9 ຕົກໜ້າເຮືອນ (ຈະຈົມນ້ຳ ເສຍສຸຂະພາບ/ບາຣະມີ) ຫຼື ບໍ່ມີຄົນດູແລນ້ຳ ໃຫ້ຈັດເປັນ <strong>ລານຫຍ້າຂຽວໂລ່ງ</strong> ແທນ.
              </div>
            </div>
            <div style="background: #FFFFFF; border: 1px solid #FDA4AF; border-radius: 8px; padding: 12px;">
              <strong style="color: #DC2626; display: flex; align-items: center; gap: 6px; font-size: 13px;">
                🚫 ຫາກມີບໍ່ນ້ຳຢູ່ແລ້ວ: ຄວນຖົມບໍ?
              </strong>
              <div style="font-size: 12.5px; line-height: 1.6; color: #334155; margin-top: 6px;">
                • <strong>ຕ້ອງຖົມຖິ້ມທັນທີ:</strong> ຖ້າຢູ່ <strong>ຫຼັງເຮືອນ (Xuan Wu)</strong>, ຢູ່ <strong>ກາງຕອນດິນ (Tai Ji)</strong>, ເປັນ <strong>ມຸມສາມແຈແຫຼມ</strong>, ຫຼື <strong>ນ້ຳເນົ່າຂັງ</strong>.<br>
                • <strong>ຫ້າມຖົມ (ຮັກສາໄວ້):</strong> ຖ້າຢູ່ <strong>ໜ້າເຮືອນ (ໝິງຖັງ)</strong> ຫຼື ດ້ານຊ້າຍມັງກອນ ໂອບອຸ້ມຕົວເຮືອນ ໃຫ້ລ້າງສະອາດ ແລະ ເຮັດໃຫ້ນ້ຳໄຫຼວຽນ.
              </div>
            </div>
          </div>
          <div style="background: #FFFFFF; border: 1px solid #BAE6FD; border-radius: 8px; padding: 12px;">
            <strong style="color: #0369A1; font-size: 13px;">📋 ຄຳແນະນຳສະເພາະຮູບແບບຕອນດິນນີ້:</strong>
            <p id="mWater" style="margin-top: 6px; font-size: 13px; color: #1E293B; line-height: 1.6;">-</p>
          </div>
        </div>
        <div class="modal-section">
          <h4>🛡️ ວິທີແກ້ໄຂ & ປັບສົມດຸນຮວງຈຸ້ຍ (Remedy Protocol)</h4>
          <p id="mRemedy">-</p>
        </div>
      </div>
    </div>
  </div>

  <!-- FOOTER -->
  <footer>
    <p>ຕຳລາຮວງຈຸ້ຍດາວເຫີນ ສະບັບສົມບູນ (Xuan Kong Fei Xing • Lao Edition)</p>
    <p style="margin-top: 4px; font-size: 11.5px;">ແປ ແລະ ຮຽບຮຽງໂດຍກົງຈາກຕົ້ນສະບັບຕຳລາຮວງຈຸ້ຍດາວເຫີນ (Stephen Skinner) & ຕຳລາສວຽນຄົງ 沈氏玄空学</p>
  </footer>

  <script>
    const archetypesData = ${archetypesJson};
    const chaptersData = ${chaptersJson};

    // State
    let currentTab = 'tabAtlas';
    let atlasCat = 'all';
    let atlasKeyword = '';
    let currentChapterIndex = 0;
    let readerFontSize = 14;

    // Elements
    const tabBtns = document.querySelectorAll('.nav-tab-btn');
    const tabViews = document.querySelectorAll('.tab-view');
    const atlasGrid = document.getElementById('atlasGrid');
    const plotsGrid = document.getElementById('plotsGrid');
    const atlasSearchInput = document.getElementById('atlasSearchInput');
    const atlasFilterBtns = document.querySelectorAll('#atlasFilters .filter-btn');
    const atlasModal = document.getElementById('atlasModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const themeToggle = document.getElementById('themeToggle');

    // TAB SWITCHING
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabViews.forEach(v => v.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        document.getElementById(target).classList.add('active');
        currentTab = target;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // THEME TOGGLE
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // RENDER CARD
    function createCard(item) {
      const card = document.createElement('div');
      card.className = 'archetype-card';
      const scoreClass = item.isGood ? 'good' : 'bad';
      const scoreLabel = item.isGood ? 'ດີ' : 'ໂທດ';

      card.innerHTML = \`
        <div class="card-img-wrap">
          <img src="\${item.img}" alt="\${item.id}" loading="lazy">
          <div class="card-score \${scoreClass}">\${scoreLabel}: \${item.score}/100</div>
        </div>
        <div class="card-body">
          <div class="card-id-tag">\${item.id} • \${item.type === 'landplot' ? 'ຮູບຊົງຕອນດິນ' : item.type === 'boundary' ? 'ສະພາບແວດລ້ອມ' : 'ພູມິທັດ'}</div>
          <div class="card-title">\${item.name}</div>
          <div class="card-desc">\${item.physics || item.impact || item.remedy}</div>
          <div class="card-footer">
            <span>\${item.isGood ? '✓ ມຸງຄຸນ' : '✗ ຄວນແກ້ໄຂ'}</span>
            <span>ເບິ່ງລາຍລະອຽດ &#10140;</span>
          </div>
        </div>
      \`;

      card.addEventListener('click', () => openModal(item));
      return card;
    }

    // FILTER & SEARCH
    function renderAtlas() {
      atlasGrid.innerHTML = '';
      const kw = atlasKeyword.toLowerCase().trim();

      const filtered = archetypesData.filter(item => {
        // Category filter
        if (atlasCat === 'env' && item.type !== 'boundary') return false;
        if (atlasCat === 'plots' && item.type !== 'landplot') return false;
        if (atlasCat === 'peaks' && !item.category.includes('5 ພູເຂົາ')) return false;
        if (atlasCat === 'winds' && !item.category.includes('ລົມ')) return false;
        if (atlasCat === 'waters' && !item.category.includes('ສາຍນ້ຳ')) return false;
        if (atlasCat === 'shas' && !item.category.includes('Sha')) return false;

        // Keyword
        if (kw) {
          const matchStr = (item.id + ' ' + item.name + ' ' + item.category + ' ' + item.physics + ' ' + (item.impact || '') + ' ' + item.remedy).toLowerCase();
          if (!matchStr.includes(kw)) return false;
        }
        return true;
      });

      if (filtered.length === 0) {
        atlasGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--text-muted);">ບໍ່ພົບຂໍ້ມູນທີ່ຕົງກັບຄຳຄົ້ນຫາ</div>';
        return;
      }

      filtered.forEach(item => atlasGrid.appendChild(createCard(item)));
    }

    // 34 PLOTS & BOUNDARIES STUDIO GRID
    function renderPlotsStudio() {
      plotsGrid.innerHTML = '';
      const plots = archetypesData.filter(x => x.type === 'landplot' || x.type === 'boundary');
      plots.forEach(item => plotsGrid.appendChild(createCard(item)));
    }

    atlasSearchInput.addEventListener('input', e => {
      atlasKeyword = e.target.value;
      renderAtlas();
    });

    atlasFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        atlasFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        atlasCat = btn.dataset.cat;
        renderAtlas();
      });
    });

    // MODAL
    function openModal(item) {
      document.getElementById('mTitle').textContent = item.id + ': ' + item.name;
      const mImg = document.getElementById('mImg');
      mImg.src = item.img;
      mImg.onclick = () => window.open(item.img, '_blank');
      const zoomBtn = document.getElementById('mImgZoomBtn');
      if (zoomBtn) zoomBtn.href = item.img;
      document.getElementById('mPhysics').textContent = item.physics || '-';
      document.getElementById('mRemedy').textContent = item.remedy || '-';

      const impSec = document.getElementById('mImpactSec');
      const hseSec = document.getElementById('mHouseSec');
      const guaSec = document.getElementById('mGuaSec');
      const entSec = document.getElementById('mEntranceSec');
      const watSec = document.getElementById('mWaterSec');

      if (item.type === 'landplot' || item.type === 'boundary') {
        impSec.style.display = 'none';
        hseSec.style.display = 'block';
        guaSec.style.display = 'block';
        entSec.style.display = 'block';
        watSec.style.display = 'block';

        document.getElementById('mHousePos').textContent = item.housePositioning || '-';
        document.getElementById('mOrientation').textContent = item.orientationFacing || '-';
        document.getElementById('mElementGua').textContent = item.elementGua || '-';
        document.getElementById('mFavorable').textContent = item.favorablePeople || '-';
        document.getElementById('mClashing').textContent = item.clashingPeople || '-';
        document.getElementById('mEntrancePlacement').textContent = item.entrancePlacement || '-';
        document.getElementById('mEntrance').textContent = item.entranceRules || item.entrancePlacement || '-';
        document.getElementById('mWater').textContent = item.waterRules || item.taboos || '-';
        document.getElementById('mRemedy').textContent = item.comprehensiveRemedy || item.remedy || '-';
      } else {
        impSec.style.display = 'block';
        hseSec.style.display = 'none';
        guaSec.style.display = 'none';
        entSec.style.display = 'none';
        watSec.style.display = 'none';
        document.getElementById('mImpact').textContent = item.impact || '-';
        document.getElementById('mRemedy').textContent = item.remedy || '-';
      }

      atlasModal.classList.add('open');
    }

    modalCloseBtn.addEventListener('click', () => atlasModal.classList.remove('open'));
    atlasModal.addEventListener('click', e => {
      if (e.target === atlasModal) atlasModal.classList.remove('open');
    });

    // 24 CHAPTERS READER
    const chapterNavList = document.getElementById('chapterNavList');
    const readerTitle = document.getElementById('readerTitle');
    const readerContent = document.getElementById('readerContent');

    function initReader() {
      chapterNavList.innerHTML = '';
      chaptersData.forEach((ch, idx) => {
        const li = document.createElement('li');
        li.className = 'chapter-nav-item' + (idx === 0 ? ' active' : '');
        li.textContent = ch.title;
        li.addEventListener('click', () => loadChapter(idx));
        chapterNavList.appendChild(li);
      });
      loadChapter(0);
    }

    function loadChapter(idx) {
      currentChapterIndex = idx;
      document.querySelectorAll('.chapter-nav-item').forEach((li, i) => {
        li.classList.toggle('active', i === idx);
      });
      const ch = chaptersData[idx];
      readerTitle.textContent = ch.title;
      readerContent.innerHTML = ch.html;
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    document.getElementById('btnFontInc').addEventListener('click', () => {
      if (readerFontSize < 20) {
        readerFontSize += 1.5;
        readerContent.style.fontSize = readerFontSize + 'px';
      }
    });
    document.getElementById('btnFontDec').addEventListener('click', () => {
      if (readerFontSize > 12) {
        readerFontSize -= 1.5;
        readerContent.style.fontSize = readerFontSize + 'px';
      }
    });

    // 81 STARS CALCULATOR
    const selM = document.getElementById('selMountainStar');
    const selW = document.getElementById('selWaterStar');
    const resComboName = document.getElementById('resComboName');
    const resScoreTag = document.getElementById('resScoreTag');
    const resDesc = document.getElementById('resDescription');

    function calculate81Stars() {
      const m = parseInt(selM.value, 10);
      const w = parseInt(selW.value, 10);

      const elements = ['', 'ນ້ຳ', 'ດິນ', 'ໄມ້', 'ໄມ້', 'ດິນ', 'ທອງ', 'ທອງ', 'ດິນ', 'ໄຟ'];
      const elemM = elements[m];
      const elemW = elements[w];

      resComboName.textContent = \`ຄູ່ດາວ \${m} - \${w} (ດາວພູ: \${elemM} • ດາວນ້ຳ: \${elemW})\`;

      let isGood = true;
      let scoreText = '✓ ດີຫຼາຍ (Auspicious)';
      let scoreColor = 'var(--good)';
      let analysis = '';
      let remedy = '';

      // Special Harmful Combinations
      if ((m === 2 && w === 5) || (m === 5 && w === 2)) {
        isGood = false;
        scoreText = '✗ ມະຫາວິບັດຮ້າຍແຮງ (Extremely Inauspicious)';
        scoreColor = 'var(--bad)';
        analysis = 'ຄູ່ດາວ 2-5 ຫຼື 5-2 ເອີ້ນວ່າ "ສອງດາວມະຫາພະຍາດ ແລະ ມະຫາວິບັດປະສົມກັນ". ເກີດໂລກໄພໄຂ້ເຈັບຮ້າຍແຮງ, ຜ່າຕັດ, ອຸບັດຕິເຫດເສຍເລືອດ, ລົ້ມລະລາຍ, ຄວາມສູນເສຍໃນຄອບຄົວ.';
        remedy = '<strong>ວິທີແກ້ໄຂດ່ວນ:</strong> ຫ້າມໃຊ້ໄຟ ຫຼື ສີແດງໃນຕຳແໜ່ງນີ້ເດັດຂາດ! ໃຫ້ຕັ້ງໂຖນ້ຳເກືອພະລັງງານສູງ (Salt Water Cure) ພ້ອມຫຼຽນທອງ 6 ຫຼຽນ ແລະ ແຂວນກະດິ່ງລົມໂລຫະ 6 ຫຼອດ ເພື່ອຖ່າຍເທພະລັງດິນຮ້າຍອອກໄປ.';
      } else if ((m === 9 && w === 5) || (m === 5 && w === 9)) {
        isGood = false;
        scoreText = '✗ ໄຟເຜົາດິນຮ້າຍ (Inauspicious)';
        scoreColor = 'var(--bad)';
        analysis = 'ດາວ 9 ທາດໄຟ ເຂົ້າໄປສົ່ງເສີມດາວ 5 ເຫຼືອງ ທາດດິນ ໃຫ້ກຳເລີບຮຸນແຮງຂຶ້ນ (Fire generates Earth)! ເກີດອັກຄີໄພ, ພະຍາດຫົວໃຈ ແລະ ເສັ້ນເລືອດໃນສະໝອງ.';
        remedy = '<strong>ວິທີແກ້ໄຂ:</strong> ວາງວັດຖຸທາດທອງໜັກ (ເຊັ່ນ: ກະດິ່ງທອງເຫຼືອງ ຫຼື ແຜ່ນທອງເຫຼືອງ) ເພື່ອດັກຈັບ ແລະ ຖ່າຍເທພະລັງງານ.';
      } else if ((m === 2 && w === 3) || (m === 3 && w === 2)) {
        isGood = false;
        scoreText = '✗ ການຕໍ່ສູ້ຂອງງົວ (Dou Niu Sha)';
        scoreColor = 'var(--bad)';
        analysis = 'ໄມ້ຂົ່ມດິນ ເກີດການປະທະ "ດາວ 3 ໄມ້ ປະທະ ດາວ 2 ດິນ" ເອີ້ນວ່າ ໂຕນິວຊາ: ຜິດຖຽງ, ຄະດີຄວາມຂຶ້ນໂຮງຂຶ້ນສານ, ຄວາມຂັດແຍ້ງລະຫວ່າງແມ່ເຖົ້າກັບລູກໃພ້.';
        remedy = '<strong>ວິທີແກ້ໄຂ:</strong> ໃຊ້ "ທາດໄຟ" (ໂຄມໄຟສີແດງ, ຜ້າພົມແດງ) ເປັນຕົວກາງໄກ່ເກ່ຍ (ໄມ້ເກີດໄຟ, ໄຟເກີດດິນ) ປ່ຽນການຂົ່ມກັນໃຫ້ກາຍເປັນການສົ່ງເສີມກັນ.';
      } else if (w === 9 || m === 9) {
        isGood = true;
        scoreText = '✓ ມະຫາມຸງຄຸນຍຸກ 9 (Supreme Period 9 Luck)';
        scoreColor = 'var(--good)';
        analysis = \`ດາວ 9 ມ່ວງ ຄືດາວຄອງຍຸກປະຈຸບັນ (ປີ 2024–2043). ໃນຕຳແໜ່ງນີ້ ພະລັງງານຊີ່ມີຄວາມສົດໃສ ແລະ ຮຸ່ງເຮືອງສູງສຸດ (Wang Qi). ສົ່ງເສີມຊື່ສຽງ, ເງິນຄຳ, ຄວາມສຳເລັດໃນທຸລະກິດ ແລະ ຄວາມຮັກ.\`;
        remedy = '<strong>ວິທີກະຕຸ້ນ:</strong> ເປີດໄຟສະຫວ່າງ, ຕັ້ງອ່າງນ້ຳພຸວົນ (ຫາກດາວ 9 ເປັນດາວນ້ຳ), ຫຼື ຕັ້ງຕົ້ນໄມ້ຂຽວສົດໃສ (ໄມ້ເກີດໄຟ).';
      } else if ((m === 1 && w === 4) || (m === 4 && w === 1)) {
        isGood = true;
        scoreText = '✓ ມຸງຄຸນນັກປາດ (Wen Chang)';
        scoreColor = 'var(--good)';
        analysis = 'ນ້ຳສົ່ງເສີມໄມ້ (Water generates Wood): ມະຫາມຸງຄຸນດ້ານສະຕິປັນຍາ, ການຮຽນ-ການສອບເສັງ, ວຽກງານຂຽນ, ສະເໜ່ ແລະ ຊື່ສຽງ.';
        remedy = '<strong>ວິທີເສີມ:</strong> ຕັ້ງໄຜ່ກວນອິມ 4 ຕົ້ນໃນແຈກັນນ້ຳ, ຫຼື ຕັ້ງໂຕະເຮັດວຽກ/ໂຕະຮຽນໜັງສື.';
      } else {
        analysis = \`ການປະສົມລະຫວ່າງ ດາວພູ \${m} (\${elemM}) ແລະ ດາວນ້ຳ \${w} (\${elemW}). ພະລັງງານດຳເນີນໄປຕາມວັດທະຈັກທຳມະຊາດ.\`;
        remedy = '<strong>ຂໍ້ແນະນຳ:</strong> ຮັກສາຄວາມສະອາດ ແລະ ຄວາມສະຫວ່າງໃຫ້ພໍດີ.';
      }

      resScoreTag.textContent = scoreText;
      resScoreTag.style.background = scoreColor;
      resDesc.innerHTML = \`
        <p style="margin-bottom: 10px;">\${analysis}</p>
        <p style="background: var(--bg); padding: 12px; border-radius: 8px; border-left: 3px solid \${scoreColor};">\${remedy}</p>
      \`;
    }

    selM.addEventListener('change', calculate81Stars);
    selW.addEventListener('change', calculate81Stars);

    // INIT
    renderAtlas();
    renderPlotsStudio();
    initReader();
    calculate81Stars();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(laoDir, 'index.html'), html, 'utf8');
console.log(`🎉 Successfully generated Lao Web Portal at: ${path.join(laoDir, 'index.html')}!`);
