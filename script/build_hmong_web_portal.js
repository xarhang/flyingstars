/**
 * BUILD HMONG WEB PORTAL (MASTER UNIFIED APPLICATION)
 * Output: hmong/index.html
 * Features:
 *   - Tab 1: Master Atlas 91 Archetypes (Search, Filter, Modal)
 *   - Tab 2: 16 Land Plots Comparative Studio
 *   - Tab 3: Phau 1: 24 Chapters Digital Textbook Reader
 *   - Tab 4: 81 Flying Stars Calculator & Reference Glossary
 */
const fs = require('fs');
const path = require('path');

const projectDir = path.resolve(__dirname, '..');
const hmongDir = path.resolve(projectDir, 'hmong');

// 1. Load 91 Archetypes Data
const ltData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_75_core_luan_tou_archetypes.json'), 'utf8'));
const lpData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_16_core_land_plot_archetypes.json'), 'utf8'));
const envData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_boundary_adjacencies_hmong.json'), 'utf8'));

const archetypes = [];

// 16 Land Plots
lpData.forEach(lp => {
  const score = (typeof lp.score === 'number') ? lp.score : (lp.energyScore || 75);
  archetypes.push({
    id: lp.id,
    type: 'landplot',
    name: lp.baseName || lp.nameHmong || lp.name || lp.id,
    category: lp.category || '16 Thaj Av & Qauv Tsev (Land Plots)',
    score: score,
    isGood: score >= 60,
    img: `img/${lp.id}.png`,
    physics: lp.geometryPhysics || lp.shapePhysics || lp.physics || '',
    entrance: lp.entranceAnalysis || lp.entranceRules || lp.entrance || '',
    water: lp.waterAnalysis || lp.waterRules || lp.water || '',
    bagua: lp.baguaSectors || lp.baguaRules || lp.bagua || '',
    remedy: lp.remedy || lp.remediationProtocol || '',
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
    name: env.baseName || env.nameHmong || env.id,
    category: env.category || 'Cov Qauv Ciam Av & Kev Nkag Tsev',
    score: score,
    isGood: env.isGood !== undefined ? env.isGood : score >= 60,
    img: `img/${env.id}.png`,
    physics: env.geometryPhysics || '',
    entrance: env.entrancePlacement || '',
    house: env.housePositioning || '',
    orientation: env.orientationFacing || '',
    water: env.waterRules ? env.waterRules.replace(/\n/g, '<br>') : (env.taboos ? env.taboos.replace(/\n/g, '<br>') : ''),
    bagua: (env.elementGua || '') + (env.favorablePeople ? '<br>• Haum: ' + env.favorablePeople : '') + (env.clashingPeople ? '<br>• Tsis haum: ' + env.clashingPeople : ''),
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
  const score = (typeof lt.score === 'number') ? lt.score : (lt.energyScore || 70);
  archetypes.push({
    id: lt.id,
    type: 'luantou',
    name: lt.baseName || lt.nameHmong || lt.name || lt.id,
    category: lt.category || lt.categoryHmong || 'Qauv Roob & Thaj Av',
    score: score,
    isGood: score >= 60,
    img: `img/${lt.id}.png`,
    physics: lt.physics || lt.shapePhysics || lt.geometryPhysics || '',
    impact: lt.impact || lt.environmentalImpact || '',
    remedy: lt.remedy || lt.remedyProtocol || ''
  });
});

// 2. Load 24 Compiled Chapters
const chapters = require('./compile_all_chapters_html.js');

// 3. 81 Flying Stars Data (Quick Lookup)
const starNames = [
  "",
  "1-Dawb (Tan Lang - Dej)",
  "2-Dub (Ju Men - Av)",
  "3-Ntsuab (Lu Cun - Ntoo)",
  "4-Ntsuab (Wen Qu - Ntoo)",
  "5-Daj (Lian Zhen - Av)",
  "6-Dawb (Wu Qu - Kub)",
  "7-Liab (Po Jun - Kub)",
  "8-Dawb (Zuo Fu - Av)",
  "9-Ntshav (You Bi - Hluav Taws)"
];

// Build the HTML template
const archetypesJson = JSON.stringify(archetypes);
const chaptersJson = JSON.stringify(chapters);

const html = `<!DOCTYPE html>
<html lang="hmn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tshej Vaj Huam Luam • Looj Mem Hnub Qub Ya (Hmoob RPA Edition)</title>
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
    .dark-mode {
      --bg: #0F172A;
      --card-bg: #1E293B;
      --text: #F1F5F9;
      --text-muted: #94A3B8;
      --border: #334155;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
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
      max-width: 1400px;
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
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #7F1D1D;
      border: 2px solid var(--gold);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
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
      font-size: 13px;
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
      gap: 10px;
    }
    .lao-btn {
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
    .lao-btn:hover {
      background: rgba(255,255,255,0.25);
    }
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
      max-width: 1400px;
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
      font-size: 22px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 6px;
    }
    .atlas-hero p {
      font-size: 13.5px;
      color: var(--text-muted);
      max-width: 800px;
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
      font-size: 12px;
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
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 20px;
      font-size: 12.5px;
      font-weight: 600;
      color: var(--text);
      cursor: pointer;
      transition: all 0.2s;
    }
    .filter-btn:hover {
      background: #E2E8F0;
    }
    .filter-btn.active {
      background: var(--primary);
      color: white;
      border-color: var(--primary);
    }
    .filter-btn.good.active {
      background: var(--good);
      border-color: var(--good);
    }
    .filter-btn.bad.active {
      background: var(--bad);
      border-color: var(--bad);
    }

    /* GRID & CARDS */
    .items-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }
    .item-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1);
      display: flex;
      flex-direction: column;
    }
    .item-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      border-color: var(--gold);
    }
    .card-img-wrap {
      width: 100%;
      height: 180px;
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
      font-size: 11px;
      font-weight: 700;
      color: var(--gold-dark);
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    .card-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--text);
      line-height: 1.35;
      margin-bottom: 8px;
    }
    .card-desc {
      font-size: 12px;
      color: var(--text-muted);
      line-height: 1.45;
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
      font-size: 11.5px;
      font-weight: 600;
      color: var(--primary);
    }

    /* MODAL */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0,0,0,0.7);
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
      font-size: 13.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      color: var(--text);
    }
    .section-text {
      font-size: 13px;
      color: var(--text);
      line-height: 1.6;
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
      font-size: 22px;
      font-weight: 800;
      color: var(--gold);
      margin-bottom: 6px;
    }
    .plots-studio-head p {
      font-size: 13.5px;
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
      font-size: 14px;
      font-weight: 800;
      color: var(--primary);
      text-transform: uppercase;
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
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      color: var(--text);
      transition: all 0.2s;
      line-height: 1.35;
    }
    .chapter-nav-item:hover {
      background: rgba(139,0,0,0.06);
      color: var(--primary);
    }
    .chapter-nav-item.active {
      background: var(--primary);
      color: white;
      font-weight: 700;
    }
    .reader-main {
      flex: 1;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 32px 40px;
      min-width: 0;
    }
    .reader-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 16px;
      margin-bottom: 24px;
      border-bottom: 1px solid var(--border);
    }
    .font-ctrls {
      display: flex;
      gap: 6px;
    }
    .font-btn {
      padding: 4px 10px;
      border: 1px solid var(--border);
      background: var(--bg);
      border-radius: 6px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
    }
    .reader-nav-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 36px;
      padding-top: 20px;
      border-top: 1px solid var(--border);
    }
    .reader-nav-btn {
      padding: 10px 18px;
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .reader-nav-btn:hover { background: var(--primary-dark); }

    /* CHAPTER DOCUMENT STYLES */
    .doc-title {
      font-size: 24px;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 6px;
      line-height: 1.3;
    }
    .doc-subtitle {
      font-size: 15px;
      font-weight: 600;
      color: var(--gold-dark);
      margin-bottom: 8px;
    }
    .doc-author {
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--border);
    }
    .doc-h1 {
      font-size: 18px;
      font-weight: 800;
      color: #1E3A8A;
      margin: 28px 0 12px;
      padding-bottom: 6px;
      border-bottom: 2px solid #93C5FD;
    }
    .doc-h2 {
      font-size: 15.5px;
      font-weight: 700;
      color: #1E40AF;
      margin: 22px 0 10px;
    }
    .doc-h3 {
      font-size: 14px;
      font-weight: 700;
      color: #374151;
      margin: 18px 0 8px;
    }
    .doc-p {
      font-size: 14px;
      line-height: 1.7;
      margin-bottom: 14px;
      text-align: justify;
    }
    .doc-bullet {
      font-size: 13.5px;
      line-height: 1.6;
      margin-left: 20px;
      margin-bottom: 8px;
    }
    .doc-box, .doc-callout {
      background: rgba(30, 58, 138, 0.04);
      border-left: 4px solid #2563EB;
      padding: 14px 18px;
      border-radius: 0 8px 8px 0;
      margin: 18px 0;
    }
    .doc-box-title, .doc-callout-title {
      font-size: 13.5px;
      font-weight: 800;
      color: #1E3A8A;
      margin-bottom: 6px;
    }
    .doc-box-body, .doc-callout-body {
      font-size: 13px;
      line-height: 1.6;
    }
    .doc-figure {
      margin: 24px auto;
      text-align: center;
      max-width: 650px;
    }
    .doc-figure img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      border: 1px solid var(--border);
    }
    .doc-figure figcaption {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
      margin-top: 8px;
    }
    .table-wrap {
      overflow-x: auto;
      margin: 20px 0;
      border: 1px solid var(--border);
      border-radius: 8px;
    }
    .doc-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12.5px;
    }
    .doc-table th {
      background: #1E3A8A;
      color: white;
      padding: 10px 12px;
      font-weight: 700;
      text-align: left;
      border: 1px solid #CBD5E1;
    }
    .doc-table td {
      padding: 8px 12px;
      border: 1px solid var(--border);
      line-height: 1.45;
    }
    .doc-table tr:nth-child(even) {
      background: rgba(0,0,0,0.02);
    }

    /* TAB 4: 81 STARS CALCULATOR */
    .calc-container {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
    }
    .calc-pickers {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-bottom: 24px;
    }
    .picker-box {
      flex: 1;
      min-width: 250px;
    }
    .picker-box label {
      display: block;
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 8px;
      color: var(--primary);
    }
    .picker-select {
      width: 100%;
      padding: 12px 16px;
      font-size: 14px;
      border: 2px solid var(--border);
      border-radius: 10px;
      background: var(--bg);
      color: var(--text);
      font-weight: 600;
    }
    .calc-result-card {
      border: 2px solid var(--gold);
      border-radius: 12px;
      padding: 20px;
      background: rgba(212,175,55,0.05);
    }
    .calc-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 800;
      color: white;
      margin-bottom: 8px;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      .reader-layout { flex-direction: column; }
      .reader-sidebar { width: 100%; position: static; max-height: 250px; }
      .reader-main { padding: 20px; }
      .nav-container { flex-direction: column; align-items: stretch; }
      .nav-tabs { overflow-x: auto; }
    }
  </style>
</head>
<body>

  <!-- TOP NAVBAR -->
  <header>
    <div class="nav-container">
      <a href="#" class="brand">
        <div class="brand-logo">☯</div>
        <div class="brand-text">
          <h1>LOOJ MEM HNUB QUB YA</h1>
          <span>XUAN KONG FEI XING • HMOOB RPA</span>
        </div>
      </a>

      <div class="nav-tabs">
        <button class="nav-tab-btn active" data-tab="tabAtlas">🗺️ 102 Qauv Atlas</button>
        <button class="nav-tab-btn" data-tab="tabPlots">📐 34 Thaj Av Site Plans</button>
        <button class="nav-tab-btn" data-tab="tabBook">📖 Phau 1: 24 Tshooj</button>
        <button class="nav-tab-btn" data-tab="tabCalc">🧭 81 Hnub Qub & Lus Txhais</button>
      </div>

      <div class="nav-actions">
        <a href="../lao/index.html" class="lao-btn" title="ໄປຫາເວັບໄຊສະບັບພາສາລາວ">
          <span>🇱🇦 ຕຳລາພາສາລາວ (/lao/)</span>
        </a>
        <a href="../index.html" class="lao-btn" title="ກັບຄືນໜ້າຈານເຂັມທິດ">
          <span>🧭 ຈານເຂັມທິດ (../)</span>
        </a>
        <button class="theme-btn" id="themeToggle" title="Toggle Dark Mode">🌙</button>
      </div>
    </div>
  </header>

  <!-- MAIN APP CONTAINER -->
  <main>

    <!-- TAB 1: MASTER ATLAS 93 ARCHETYPES -->
    <div id="tabAtlas" class="tab-view active">
      <div class="atlas-hero">
        <h2>🗺️ PHAU NTAWV QHIA TAG NRHO 102 QAUV ROOB THIAB THAJ AV</h2>
        <p>Tshawb nrhiav cov qauv roob, kwj deg, 16 thaj av thiab 18 ciam av nrog rau physics huab cua, kev teeb qhov rooj, pas dej thiab tswv yim kho kom haum Looj Mem.</p>
      </div>

      <div class="search-box">
        <input type="text" id="atlasSearchInput" class="search-input" placeholder="🔍 Tshawb nrhiav qauv (Piv txwv: ENV-0001, LP-0007, San Jiao, Triangle, Dej, Roob, Granite, Hluav Taws, Lu Chong...)">
      </div>

      <div class="filter-row" id="atlasFilters">
        <button class="filter-btn active" data-cat="all">Tag Nrho (102)</button>
        <button class="filter-btn" data-cat="env">🏞️ 18 Ciam Av (Boundaries)</button>
        <button class="filter-btn" data-cat="plot">16 Thaj Av (Land Plots)</button>
        <button class="filter-btn" data-cat="sha">35 Roob Sha</button>
        <button class="filter-btn" data-cat="water">16 Dej Ntws</button>
        <button class="filter-btn" data-cat="element">5 Roob 5 Thas</button>
        <button class="filter-btn" data-cat="wind">3 Huab Cua</button>
        <button class="filter-btn good" data-score="good">✓ Zoo (≥60)</button>
        <button class="filter-btn bad" data-score="bad">✗ Phem (&lt;60)</button>
      </div>

      <div class="items-grid" id="atlasGrid"></div>
    </div>

    <!-- TAB 2: 34 LAND PLOTS & BOUNDARIES STUDIO -->
    <div id="tabPlots" class="tab-view">
      <div class="plots-studio-head">
        <h2>📐 34 THAJ AV & CIAM AV KHO KOM HAUM LOOJ MEM (SITE PLANS STUDIO)</h2>
        <p>Kev tshuaj xyuas 34 hom thaj av tiag tiag: 16 qauv duab thaj av + 18 qauv ciam av (ciam kev 1 sab, ciam kev 2 sab kaum, ciam kev 3-4 sab, kev nkag driveway, ciam pas dej, ciam hav zoov, ciam phab ntsa...) raws li txoj cai 360°.</p>
      </div>
      <div class="items-grid" id="plotsGrid"></div>
    </div>

    <!-- TAB 3: BOOK 1 DIGITAL READER (24 CHAPTERS) -->
    <div id="tabBook" class="tab-view">
      <div class="reader-layout">
        <!-- Sidebar Navigation -->
        <aside class="reader-sidebar">
          <h3>📖 Cov Tshooj Hauv Phau Ntawv (24 Bhoov)</h3>
          <ul class="chapter-nav-list" id="chapterNavList"></ul>
        </aside>

        <!-- Chapter Content Area -->
        <article class="reader-main">
          <div class="reader-toolbar">
            <span id="readingChapterBadge" style="font-size: 13px; font-weight: 700; color: var(--gold-dark);"></span>
            <div class="font-ctrls">
              <button class="font-btn" id="fontDecBtn" title="Txo qhov loj ntawv">A-</button>
              <button class="font-btn" id="fontIncBtn" title="Ua kom ntawv loj tuaj">A+</button>
            </div>
          </div>

          <div id="chapterContentArea"></div>

          <div class="reader-nav-bottom">
            <button class="reader-nav-btn" id="prevChapterBtn">⬅️ Tshooj Dhau Los</button>
            <button class="reader-nav-btn" id="nextChapterBtn">Tshooj Tom Ntej ➡️</button>
          </div>
        </article>
      </div>
    </div>

    <!-- TAB 4: 81 FLYING STARS CALCULATOR & GLOSSARY -->
    <div id="tabCalc" class="tab-view">
      <div class="calc-container">
        <h2 style="font-size: 20px; font-weight: 800; color: var(--primary); margin-bottom: 6px;">🧭 81 HNUB QUB SIB KHOOM (FLYING STAR COMBINATION CALCULATOR)</h2>
        <p style="font-size: 13.5px; color: var(--text-muted); margin-bottom: 20px;">Xaiv Hnub Qub Roob (Shan Xing) thiab Hnub Qub Dej (Xiang Xing) los xyuas seb nkawd muab hmoov zoo los yog hmoov phem li cas:</p>

        <div class="calc-pickers">
          <div class="picker-box">
            <label>⛰️ Hnub Qub Roob (Shan Xing / Mountain Star):</label>
            <select id="selMountainStar" class="picker-select">
              <option value="1">1 - Dawb (Tan Lang / Dej - Txawj Ntse)</option>
              <option value="2">2 - Dub (Ju Men / Av - Mob Nkeeg)</option>
              <option value="3">3 - Ntsuab (Lu Cun / Ntoo - Sib Cav)</option>
              <option value="4">4 - Ntsuab (Wen Qu / Ntoo - Ntawv & Kev Hlub)</option>
              <option value="5">5 - Daj (Lian Zhen / Av - Xwm Txheej Loj)</option>
              <option value="6">6 - Dawb (Wu Qu / Kub - Hwj Chim)</option>
              <option value="7">7 - Liab (Po Jun / Kub - Rhuav Tshem)</option>
              <option value="8">8 - Dawb (Zuo Fu / Av - Vam Meej)</option>
              <option value="9" selected>9 - Ntshav (You Bi / Hluav Taws - Period 9 Wang)</option>
            </select>
          </div>
          <div class="picker-box">
            <label>🌊 Hnub Qub Dej (Xiang Xing / Water Star):</label>
            <select id="selWaterStar" class="picker-select">
              <option value="1">1 - Dawb (Tan Lang / Dej - Nyiaj Txiag & Txawj Ntse)</option>
              <option value="2">2 - Dub (Ju Men / Av - Mob Nkeeg)</option>
              <option value="3">3 - Ntsuab (Lu Cun / Ntoo - Sib Cav)</option>
              <option value="4">4 - Ntsuab (Wen Qu / Ntoo - Ntawv & Kev Hlub)</option>
              <option value="5">5 - Daj (Lian Zhen / Av - Xwm Txheej Loj)</option>
              <option value="6">6 - Dawb (Wu Qu / Kub - Hwj Chim)</option>
              <option value="7">7 - Liab (Po Jun / Kub - Rhuav Tshem)</option>
              <option value="8">8 - Dawb (Zuo Fu / Av - Vam Meej)</option>
              <option value="9" selected>9 - Ntshav (You Bi / Hluav Taws - Period 9 Wang)</option>
            </select>
          </div>
        </div>

        <div class="calc-result-card" id="calcResultDisplay"></div>
      </div>

      <!-- Quick 24 Mountains Table -->
      <div class="calc-container">
        <h3 style="font-size: 16px; font-weight: 800; color: #1E3A8A; margin-bottom: 12px;">🧭 Daim Phiaj 24 Fab Roob (24 Mountains Compass Table)</h3>
        <div class="table-wrap">
          <table class="doc-table">
            <thead>
              <tr>
                <th>Fab (Direction)</th>
                <th>Cim Bagua</th>
                <th>3 Fab Roob (Mountains)</th>
                <th>Thaj Tsam Degree</th>
                <th>Yam Zog (Element)</th>
                <th>Yaj / Yeeb</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Qaum Teb (North)</td><td>☵ Kan</td><td>Ren (壬), Zi (子), Gui (癸)</td><td>337.5° - 22.5°</td><td>Dej (Water)</td><td>Yaj, Yeeb, Yeeb</td></tr>
              <tr><td>Qaum Teb Hnub Tuaj (NE)</td><td>☶ Gen</td><td>Chou (丑), Gen (艮), Yin (寅)</td><td>22.5° - 67.5°</td><td>Av (Earth)</td><td>Yeeb, Yaj, Yaj</td></tr>
              <tr><td>Hnub Tuaj (East)</td><td>☳ Zhen</td><td>Jia (甲), Mao (卯), Yi (乙)</td><td>67.5° - 112.5°</td><td>Ntoo (Wood)</td><td>Yaj, Yeeb, Yeeb</td></tr>
              <tr><td>Qab Teb Hnub Tuaj (SE)</td><td>☴ Xun</td><td>Chen (辰), Xun (巽), Si (巳)</td><td>112.5° - 157.5°</td><td>Ntoo (Wood)</td><td>Yeeb, Yaj, Yaj</td></tr>
              <tr><td>Qab Teb (South)</td><td>☲ Li</td><td>Bing (丙), Wu (午), Ding (丁)</td><td>157.5° - 202.5°</td><td>Hluav Taws (Fire)</td><td>Yaj, Yeeb, Yeeb</td></tr>
              <tr><td>Qab Teb Hnub Poob (SW)</td><td>☷ Kun</td><td>Wei (未), Kun (坤), Shen (申)</td><td>202.5° - 247.5°</td><td>Av (Earth)</td><td>Yeeb, Yaj, Yaj</td></tr>
              <tr><td>Hnub Poob (West)</td><td>☱ Dui</td><td>Geng (庚), You (酉), Xin (辛)</td><td>247.5° - 292.5°</td><td>Kub (Metal)</td><td>Yaj, Yeeb, Yeeb</td></tr>
              <tr><td>Qaum Teb Hnub Poob (NW)</td><td>☰ Qian</td><td>Xu (戌), Qian (乾), Hai (亥)</td><td>292.5° - 337.5°</td><td>Kub (Metal)</td><td>Yeeb, Yaj, Yaj</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </main>

  <!-- DETAIL MODAL FOR ARCHETYPES -->
  <div class="modal-overlay" id="atlasModal">
    <div class="modal-box">
      <div class="modal-head">
        <div>
          <span id="modalIdTag" style="font-size: 13px; font-weight: 800; color: var(--primary);"></span>
          <h2 id="modalMainTitle" style="font-size: 18px; font-weight: 800;"></h2>
        </div>
        <button class="modal-close" id="modalCloseBtn">&times;</button>
      </div>
      <div class="modal-content">
        <div class="modal-img-wrap">
          <img id="modalDetailImg" class="modal-img" src="" alt="" title="Nyem rau qhov loj Ultra-HD 2400x1440">
          <a id="modalDetailImgZoomBtn" href="#" target="_blank" class="modal-zoom-pill" title="Saib Duab Loj Ultra-HD 2400x1440">
            🔍 Saib Duab Loj Ultra-HD (2400x1440)
          </a>
        </div>
        <div id="modalDetailsArea"></div>
      </div>
    </div>
  </div>

  <!-- CLIENT SCRIPT -->
  <script>
    const archetypesData = ${archetypesJson};
    const chaptersData = ${chaptersJson};

    // State
    let currentTab = 'tabAtlas';
    let atlasCat = 'all';
    let atlasScore = 'all';
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

    // RENDER ATLAS GRID
    function renderAtlas() {
      const filtered = archetypesData.filter(item => {
        if (atlasKeyword) {
          const match = (
            item.id.toLowerCase().indexOf(atlasKeyword) !== -1 ||
            item.name.toLowerCase().indexOf(atlasKeyword) !== -1 ||
            item.physics.toLowerCase().indexOf(atlasKeyword) !== -1 ||
            (item.remedy && item.remedy.toLowerCase().indexOf(atlasKeyword) !== -1) ||
            (item.entrance && item.entrance.toLowerCase().indexOf(atlasKeyword) !== -1)
          );
          if (!match) return false;
        }

        if (atlasCat !== 'all') {
          if (atlasCat === 'env' && item.type !== 'boundary') return false;
          if (atlasCat === 'plot' && item.type !== 'landplot') return false;
          if (atlasCat === 'sha' && item.category.indexOf('Sha') === -1) return false;
          if (atlasCat === 'water' && item.category.indexOf('Dej') === -1) return false;
          if (atlasCat === 'element' && item.category.indexOf('5 Thas') === -1) return false;
          if (atlasCat === 'wind' && item.category.indexOf('Huab Cua') === -1) return false;
        }

        if (atlasScore === 'good' && !item.isGood) return false;
        if (atlasScore === 'bad' && item.isGood) return false;

        return true;
      });

      if (filtered.length === 0) {
        atlasGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted); font-size: 15px;">Tsis pom cov qauv twg phim rau qhov koj tshawb nrhiav.</div>';
        return;
      }

      var htmlCards = '';
      for (var i = 0; i < filtered.length; i++) {
        var it = filtered[i];
        var sClass = it.isGood ? 'good' : 'bad';
        var sText = (it.isGood ? '✓ ZOO' : '✗ PHEM') + ': ' + it.score + '/100';
        var badgeType = it.type === 'landplot' ? '📐 360° Site Plan' : it.type === 'boundary' ? '🏞️ Ciam Av & Kev Nkag' : '🏞️ Luan Tou';

        htmlCards += '<div class="item-card" onclick="openItemModal(\\'' + it.id + '\\')">' +
          '<div class="card-img-wrap">' +
            '<img class="card-img" src="' + it.img + '" alt="' + it.name + '" loading="lazy">' +
            '<span class="card-id-pill">' + it.id + '</span>' +
            '<span class="card-score-pill ' + sClass + '">' + sText + '</span>' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="card-cat">' + it.category + '</div>' +
            '<div class="card-title">' + it.name + '</div>' +
            '<div class="card-desc">' + it.physics + '</div>' +
            '<div class="card-footer">' +
              '<span>' + badgeType + '</span>' +
              '<span>Saib Ntxiv &#10140;</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      }
      atlasGrid.innerHTML = htmlCards;
    }

    // RENDER 34 LAND PLOTS & BOUNDARIES STUDIO
    function renderPlotsStudio() {
      const plots = archetypesData.filter(x => x.type === 'landplot' || x.type === 'boundary');
      var htmlCards = '';
      for (var i = 0; i < plots.length; i++) {
        var it = plots[i];
        var sClass = it.isGood ? 'good' : 'bad';
        var sText = (it.isGood ? '✓ ZOO' : '✗ PHEM') + ': ' + it.score + '/100';

        htmlCards += '<div class="item-card" onclick="openItemModal(\\'' + it.id + '\\')">' +
          '<div class="card-img-wrap">' +
            '<img class="card-img" src="' + it.img + '" alt="' + it.name + '" loading="lazy">' +
            '<span class="card-id-pill">' + it.id + '</span>' +
            '<span class="card-score-pill ' + sClass + '">' + sText + '</span>' +
          '</div>' +
          '<div class="card-body">' +
            '<div class="card-cat">' + (it.type === 'boundary' ? '18 CIAM AV & KEV NKAG' : '16 QAUV THAJ AV') + '</div>' +
            '<div class="card-title">' + it.name + '</div>' +
            '<div class="card-desc">' + it.physics + '</div>' +
            '<div class="card-footer">' +
              '<span>📐 360° Architectural Site Plan</span>' +
              '<span>Tshuaj Xyuas &#10140;</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      }
      plotsGrid.innerHTML = htmlCards;
    }

    // MODAL HANDLER
    function openItemModal(id) {
      var item = null;
      for (var i = 0; i < archetypesData.length; i++) {
        if (archetypesData[i].id === id) { item = archetypesData[i]; break; }
      }
      if (!item) return;

      document.getElementById('modalIdTag').textContent = item.id + ' • ' + (item.isGood ? '✓ QAUV ZOO' : '✗ QAUV PHEM') + ' (' + item.score + '/100)';
      document.getElementById('modalMainTitle').textContent = item.name;
      const mImg = document.getElementById('modalDetailImg');
      mImg.src = item.img;
      mImg.onclick = () => window.open(item.img, '_blank');
      const zoomBtn = document.getElementById('modalDetailImgZoomBtn');
      if (zoomBtn) zoomBtn.href = item.img;

      var bodyHtml = '';
      if (item.type === 'landplot' || item.type === 'boundary') {
        bodyHtml =
          '<div class="section-block">' +
            '<div class="section-title">1. Qauv Ciam Av & Physics Huab Cua (Geological Geometry & Aerodynamics)</div>' +
            '<div class="section-text">' + item.physics + '</div>' +
          '</div>' +
          '<div class="section-block ' + (item.isGood ? 'good' : '') + '">' +
            '<div class="section-title">2. Kev Teeb Qhov Rooj & Txoj Kev Nkag (Entrance & Driveway Placement)</div>' +
            '<div class="section-text">' + (item.entrancePlacement || item.entrance) + '</div>' +
          '</div>' +
          '<div class="section-block">' +
            '<div class="section-title">3. Chaw Tso Tsev & Kev Ntsia/Zaum (House Siting & Orientation Facing)</div>' +
            '<div class="section-text">' + (item.housePositioning ? ('<strong>• Chaw tso tsev:</strong> ' + item.housePositioning + '<br><strong>• Ntsia & Zaum:</strong> ' + item.orientationFacing) : item.water) + '</div>' +
          '</div>' +
          '<div class="section-block">' +
            '<div class="section-title">4. Zog Tsib Yam & Neeg Haum/Tsis Haum (Trigram Elements & Compatibility)</div>' +
            '<div class="section-text">' + item.bagua + '</div>' +
          '</div>' +
          '<div class="section-block" style="background:rgba(2,132,199,0.08); border-left-color:#0284C7;">' +
            '<div class="section-title" style="color:#0284C7;">5. Kev Cai Tswj Dej (Dual Water Doctrine: Ntxiv Pas Dej vs Ntsaws Pov Tseg)</div>' +
            '<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:8px 0;">' +
              '<div style="background:var(--card-bg); border:1px solid #38BDF8; border-radius:6px; padding:10px;">' +
                '<strong style="color:#0284C7; font-size:12px;">💧 Tsis Muaj Dej: Puas Ntxiv?</strong>' +
                '<div style="font-size:11.5px; line-height:1.5; margin-top:4px;">• <strong>Ntxiv:</strong> Yog pem tsev dav >6-8m thiab yog fab txais nyiaj Caij 9 (ntxiv semicircular).<br>• <strong>Txwv:</strong> Yog pem nqaim lossis Roob 9 poob pem, ua <strong>tshav xyoob ntsuab kaj</strong> xwb.</div>' +
              '</div>' +
              '<div style="background:var(--card-bg); border:1px solid #DC2626; border-radius:6px; padding:10px;">' +
                '<strong style="color:#DC2626; font-size:12px;">🚫 Muaj Dej Lawm: Puas Ntsaws?</strong>' +
                '<div style="font-size:11.5px; line-height:1.5; margin-top:4px;">• <strong>Ntsaws pov tseg:</strong> Yog nyob tom qab (Xuan Wu), plawv tsev (Tai Ji), kaum ntse, lossis dej lwj.<br>• <strong>Khaws cia:</strong> Yog nyob pem tsev puag ncig huv si.</div>' +
              '</div>' +
            '</div>' +
            '<div style="font-size:12.5px; line-height:1.6; margin-top:6px;"><strong>• Cov lus qhia raws thaj av:</strong> ' + item.water + '</div>' +
          '</div>' +
          '<div class="section-block ' + (item.isGood ? 'good' : 'bad') + '">' +
            '<div class="section-title">6. Cov Tswv Yim Kho Kom Haum Looj Mem (Master Architectural Remediation Protocol)</div>' +
            '<div class="section-text">' + (item.comprehensiveRemedy || item.remedy) + (item.taboos ? '<div style="margin-top:8px; color:var(--bad);"><strong>Cov Kev Txwv:</strong><br>' + item.taboos.replace(/\n/g, '<br>') + '</div>' : '') + '</div>' +
          '</div>';
      } else {
        bodyHtml =
          '<div class="section-block">' +
            '<div class="section-title">1. Qauv Duab & Physics Huab Cua (Geological Shape & Aerodynamics)</div>' +
            '<div class="section-text">' + item.physics + '</div>' +
          '</div>' +
          '<div class="section-block">' +
            '<div class="section-title">2. Txiaj Ntsig & Qhab Nia Zog (Impact & Energy Score)</div>' +
            '<div class="section-text">' + item.impact + ' (Qhab Nia Zog: ' + item.score + '/100)</div>' +
          '</div>' +
          '<div class="section-block ' + (item.isGood ? 'good' : 'bad') + '">' +
            '<div class="section-title">3. Cov Tswv Yim Kho Kom Haum Looj Mem (Remedy Protocol)</div>' +
            '<div class="section-text">' + item.remedy + '</div>' +
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
      atlasKeyword = e.target.value.trim().toLowerCase();
      renderAtlas();
    });

    atlasFilterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        if (btn.dataset.cat) {
          atlasFilterBtns.forEach(function(b) { if (b.dataset.cat) b.classList.remove('active'); });
          btn.classList.add('active');
          atlasCat = btn.dataset.cat;
        } else if (btn.dataset.score) {
          if (btn.classList.contains('active')) {
            btn.classList.remove('active');
            atlasScore = 'all';
          } else {
            atlasFilterBtns.forEach(function(b) { if (b.dataset.score) b.classList.remove('active'); });
            btn.classList.add('active');
            atlasScore = btn.dataset.score;
          }
        }
        renderAtlas();
      });
    });

    // BOOK 1 READER SYSTEM
    const chapterNavList = document.getElementById('chapterNavList');
    const chapterContentArea = document.getElementById('chapterContentArea');
    const readingChapterBadge = document.getElementById('readingChapterBadge');
    const prevChapterBtn = document.getElementById('prevChapterBtn');
    const nextChapterBtn = document.getElementById('nextChapterBtn');
    const fontIncBtn = document.getElementById('fontIncBtn');
    const fontDecBtn = document.getElementById('fontDecBtn');

    function initBookNav() {
      var navHtml = '';
      for (var i = 0; i < chaptersData.length; i++) {
        var ch = chaptersData[i];
        navHtml += '<li class="chapter-nav-item ' + (i === 0 ? 'active' : '') + '" data-idx="' + i + '">' + ch.title + '</li>';
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
      readingChapterBadge.textContent = 'BHOOV ' + (idx) + ' NTAWM ' + (chaptersData.length - 1) + ' • ' + ch.title;
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
      const ps = chapterContentArea.querySelectorAll('.doc-p, .doc-bullet, .doc-table, .doc-box-body');
      ps.forEach(p => p.style.fontSize = readerFontSize + 'px');
    }

    fontIncBtn.addEventListener('click', () => {
      if (readerFontSize < 20) { readerFontSize += 1.5; applyFontSize(); }
    });
    fontDecBtn.addEventListener('click', () => {
      if (readerFontSize > 12) { readerFontSize -= 1.5; applyFontSize(); }
    });

    // 81 FLYING STARS CALCULATOR
    const selMountainStar = document.getElementById('selMountainStar');
    const selWaterStar = document.getElementById('selWaterStar');
    const calcResultDisplay = document.getElementById('calcResultDisplay');

    const starCombos = {
      '9_9': { verdict: 'ZOO TSHAJ PLAWS (SUPREME AUSPICIOUS)', class: 'good', score: 98, desc: 'Ob lub Hnub Qub 9-Liab Doog sib ntsib hauv Period 9 yog Wang Qi muaj zog tshaj plaws. Nyiaj txiag nplua mias, koob meej nrov thoob ntiaj teb, kev lag luam tshiab, thev naus laus zis thiab kev lom zem vam meej heev.', cure: 'Siv lub teeb liab ci, qhov rais qhib kom pom tshav ntuj, tso paj liab lossis tso dej ntws mos hauv Xiang Xing.' },
      '9_1': { verdict: 'ZOO HEEV (WATER-FIRE HARMONY)', class: 'good', score: 92, desc: 'Hnub Qub 9 (Hluav Taws) nrog Hnub Qub 1 (Dej). Nws yog He Tu 1-6 / Dej-Hluav Taws sib haum. Txhawb nqa kev kawm ntawv qib siab, kev lag luam hla teb chaws, koob meej, thiab kev tsim tshiab.', cure: 'Tso tsob ntoo ntsuab (Ntoo) los ua tus choj txuas Dej nrog Hluav Taws kom yug zog vam meej.' },
      '1_9': { verdict: 'ZOO HEEV (FIRE-WATER ILLUMINATION)', class: 'good', score: 90, desc: 'Dej thiab Hluav Taws sib pab txhawb nqa. Kev txawj ntse thiab koob meej loj hlob tuaj ua ke.', cure: 'Tso nroj tsuag ntsuab 4 ceg los pab tsim zog Sheng Qi.' },
      '8_8': { verdict: 'ZOO HEV (EARTH STABILITY)', class: 'good', score: 85, desc: 'Ob lub Hnub Qub 8-Dawb sib ntsib. Txawm hais tias Period 9 Hnub Qub 8 yog Tui Qi lawm los, nws tseem yog San Bai (Ib qho ntawm 3 lub hnub qub dawb zoo). Tswj kev ruaj khov ntawm vaj tse thiab av.', cure: 'Tso pob zeb granite lossis pob zeb ceramic duab roob.' },
      '9_8': { verdict: 'ZOO (FIRE GENERATES EARTH)', class: 'good', score: 88, desc: 'Hluav Taws (9) yug Av (8). Nyiaj txiag vaj tse thiab kev lag luam ruaj khov.', cure: 'Tso lub teeb sov daj lossis duab roob av.' },
      '2_5': { verdict: 'PHEM TSHAJ PLAWS (DEADLY EARTH SHA)', class: 'bad', score: 5, desc: 'Hnub Qub 2 (Ju Men - Mob Nkeeg) nrog Hnub Qub 5 (Lian Zhen - Wu Gui Xwm Txheej Loj). Ob lub Av phem sib koom ua rau muaj kab mob cancer, mob plab hnyav, xwm txheej tuag, thiab kev puas tsuaj loj.', cure: 'TXWV TSIS PUB MUAJ HLUAV TAWS THIAB KOB LIAB! Siv txuj ci Kub kho: Dai Tswb Cua 6 Tub Kub (6-tube bronze windchime) thiab tso Lub Hub Dej Ntsev 6 Npib Nyiaj (Salt Water Cure).' },
      '5_2': { verdict: 'PHEM TSHAJ PLAWS (DEADLY EARTH SHA)', class: 'bad', score: 5, desc: 'Wu Gui nrog Ju Men. Kab mob nkeeg hnyav heev, mob plab, xwm txheej poob nyiaj.', cure: 'Dai tswb cua 6 tub kub, tso hub dej ntsev 6 npib nyiaj, tsis txhob teeb teeb liab lossis tswm ciab.' },
      '3_7': { verdict: 'PHEM (SWORD FIGHT CLASH)', class: 'bad', score: 20, desc: 'Hnub Qub 3 (Ntoo) nrog Hnub Qub 7 (Kub). Kub txiav Ntoo, hu ua "Riam Phom Sib Ntaus". Ua rau muaj kev sib cav sib ceg, raug tub sab nyiag nyiaj, foob plaub ntug, thiab raug riam txiav.', cure: 'Siv Dej nyob ntsiag to (An Ren Shui) los ua tus choj txo lub zog Kub thiab pab Ntoo.' },
      '7_3': { verdict: 'PHEM (ROBBERY & CONFLICT)', class: 'bad', score: 22, desc: 'Tub sab nyiag nyiaj, raug ntxias, kev phom sij los ntawm hlau.', cure: 'Tso ib lub tais dej xiav ntsiag to los daws kev phom sij.' }
    };

    function updateCalc() {
      const m = selMountainStar.value;
      const w = selWaterStar.value;
      const key = m + '_' + w;
      const data = starCombos[key] || {
        verdict: (m==='9'||w==='9'||m==='1'||w==='1'||m==='8'||w==='8') ? 'QAUV ZOO (AUSPICIOUS COMBINATION)' : 'QAUV ZOG NTAU (MIXED / NEUTRAL)',
        class: (m==='2'||w==='2'||m==='5'||w==='5') ? 'bad' : 'good',
        score: (m==='5'||w==='5') ? 25 : 70,
        desc: 'Kev sib koom ntawm Hnub Qub ' + m + ' (Roob) thiab Hnub Qub ' + w + ' (Dej) tswj hwm kev sib raug zoo ntawm tib neeg (Roob) thiab nyiaj txiag kev vam meej (Dej).',
        cure: 'Xyuas Tsib Yam Zog ntawm ob lub hnub qub kom sib raug zoo (Sheng-Ke cycle).'
      };

      const sColor = data.class === 'good' ? '#16A34A' : '#DC2626';

      calcResultDisplay.innerHTML =
        '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">' +
          '<span class="calc-badge" style="background: ' + sColor + ';">' + data.verdict + '</span>' +
          '<strong style="font-size: 14px; color: ' + sColor + ';">Qhab Nia Zog: ' + data.score + '/100</strong>' +
        '</div>' +
        '<div style="font-size: 16px; font-weight: 800; color: var(--text); margin-bottom: 8px;">' +
          'Hnub Qub ' + m + ' (Roob) Sib Ntsib Hnub Qub ' + w + ' (Dej)' +
        '</div>' +
        '<p style="font-size: 13.5px; line-height: 1.6; margin-bottom: 14px;">' + data.desc + '</p>' +
        '<div style="padding: 12px 16px; background: rgba(0,0,0,0.04); border-left: 4px solid var(--gold); border-radius: 0 8px 8px 0; font-size: 13px;">' +
          '<strong>💡 Tswv Yim Kho & Ntxiv Zog:</strong> ' + data.cure +
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

// Write to hmong/index.html
const outPortalPath = path.resolve(hmongDir, 'index.html');
fs.writeFileSync(outPortalPath, html, 'utf8');

console.log('🎉 Successfully created Master Hmong Web Portal:');
console.log('  File:', outPortalPath);
console.log('  Total Archetypes embedded:', archetypes.length);
console.log('  Total Chapters embedded:', chapters.length);
console.log('  Portal File Size:', (fs.statSync(outPortalPath).size / 1024).toFixed(1), 'KB');
