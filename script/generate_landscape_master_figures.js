const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outDirs = [
  path.resolve(__dirname, '../asset/book_figures/clean_hmong'),
  path.resolve(__dirname, '../book_figures/clean_hmong'),
];

outDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const primaryDir = outDirs[0];

// 1. fig_8_2_land_plot_shapes
const html82 = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 25px; background: white; font-family: 'Segoe UI', Tahoma, sans-serif; display: flex; justify-content: center; }
  .card { width: 880px; border: 2px solid #CBD5E1; border-radius: 12px; padding: 25px; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  h2 { text-align: center; color: #1E3A8A; margin: 0 0 6px 0; font-size: 22px; text-transform: uppercase; }
  p.subtitle { text-align: center; color: #64748B; margin: 0 0 20px 0; font-size: 14px; font-weight: 500; }
  .grid-plots { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
  .plot-box { border: 2px solid #CBD5E1; border-radius: 8px; padding: 12px; background: #F8FAFC; text-align: center; }
  .plot-title { font-size: 14px; font-weight: bold; color: #1E293B; margin-bottom: 8px; }
  .plot-svg { width: 100%; height: 130px; }
  .plot-tag { display: inline-block; font-size: 11.5px; font-weight: bold; padding: 3px 8px; border-radius: 4px; margin-top: 8px; }
  .tag-good { background: #DCFCE7; color: #166534; }
  .tag-bad { background: #FEE2E2; color: #991B1B; }
  .tag-remedy { font-size: 11px; color: #475569; margin-top: 5px; line-height: 1.3; }
</style>
</head>
<body>
<div class="card">
  <h2>Daim Duab 8.2: Cov Qauv Duab Thaj Av Hauv Looj Mem</h2>
  <p class="subtitle">Kev Ntsuam Xyuas Qauv Av Zoo Thiab Av Phem Nrog Txoj Kev Kho (Land Plot Shapes & Topography)</p>

  <div class="grid-plots">
    <!-- Plot 1: Square -->
    <div class="plot-box" style="border-color: #059669;">
      <div class="plot-title">1. Av Xwm Fab (Square - Av)</div>
      <svg class="plot-svg" viewBox="0 0 160 120">
        <rect x="35" y="15" width="90" height="90" fill="#ECFDF5" stroke="#059669" stroke-width="2.5" rx="4"/>
        <text x="80" y="65" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">Ruaj Khov</text>
      </svg>
      <div class="plot-tag tag-good">&#10004; Zoo Tshaj Plaws (Earth)</div>
      <div class="tag-remedy">Tsim kom muaj kev thaj yeeb, nyiaj txiag ruaj khov, tsev neeg sib haum.</div>
    </div>

    <!-- Plot 2: Money Bag (Narrow Front, Wide Back) -->
    <div class="plot-box" style="border-color: #059669;">
      <div class="plot-title">2. Av Hnab Nyiaj (Money Bag)</div>
      <svg class="plot-svg" viewBox="0 0 160 120">
        <polygon points="55,20 105,20 130,105 30,105" fill="#ECFDF5" stroke="#059669" stroke-width="2.5"/>
        <text x="80" y="70" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">Hnab Nyiaj</text>
        <text x="80" y="15" font-size="9" fill="#065F46" text-anchor="middle">Pem Hauv Ntej Nqaim</text>
        <text x="80" y="115" font-size="9" fill="#065F46" text-anchor="middle">Tom Qab Dav</text>
      </svg>
      <div class="plot-tag tag-good">&#10004; Nplua Nuj Heev (Tu Li)</div>
      <div class="tag-remedy">Nyiaj txiag nkag los yooj yim, tsis xau tawm, vam meej zuj zus.</div>
    </div>

    <!-- Plot 3: Wide Front, Narrow Back (Funnel) -->
    <div class="plot-box" style="border-color: #DC2626;">
      <div class="plot-title">3. Av Nqaim Tom Qab (Funnel)</div>
      <svg class="plot-svg" viewBox="0 0 160 120">
        <polygon points="25,20 135,20 105,105 55,105" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
        <text x="80" y="65" font-size="12" font-weight="bold" fill="#B91C1C" text-anchor="middle">Xau Nyiaj</text>
        <text x="80" y="15" font-size="9" fill="#991B1B" text-anchor="middle">Pem Hauv Ntej Dav</text>
      </svg>
      <div class="plot-tag tag-bad">&#10008; Phem (Poob Nyiaj)</div>
      <div class="tag-remedy">Kho: Tsim phab ntsa thaiv sab nraud, tso teeb pom kev ci tom qab.</div>
    </div>

    <!-- Plot 4: Triangle (Fire Sha) -->
    <div class="plot-box" style="border-color: #DC2626;">
      <div class="plot-title">4. Av Peb Ces Kaum (Triangle)</div>
      <svg class="plot-svg" viewBox="0 0 160 120">
        <polygon points="80,15 140,105 20,105" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
        <text x="80" y="75" font-size="12" font-weight="bold" fill="#B91C1C" text-anchor="middle">Hluav Taws Sha</text>
      </svg>
      <div class="plot-tag tag-bad">&#10008; Phem Tshaj (Fire Sha)</div>
      <div class="tag-remedy">Kho: Cog ntoo txiav ces kaum ntse kom ua av xwm fab, tsis txhob tsim tsev puv.</div>
    </div>

    <!-- Plot 5: L-Shape / Knife Plot -->
    <div class="plot-box" style="border-color: #D97706;">
      <div class="plot-title">5. Av Riam Txiav (L-Shape / Knife)</div>
      <svg class="plot-svg" viewBox="0 0 160 120">
        <polygon points="30,15 90,15 90,60 135,60 135,105 30,105" fill="#FFFBEB" stroke="#D97706" stroke-width="2.5"/>
        <text x="60" y="60" font-size="11" font-weight="bold" fill="#B45309" text-anchor="middle">Ces Kaum</text>
        <text x="60" y="75" font-size="11" font-weight="bold" fill="#B45309" text-anchor="middle">Ploj</text>
      </svg>
      <div class="plot-tag" style="background:#FEF3C7; color:#B45309;">&#9888; Ceev Faj (Missing Corner)</div>
      <div class="tag-remedy">Kho: Teeb ncej fais (ncej hluav taws xob) lossis cog ntoo rau ntawm ces kaum ploj kom rov xwm yeem.</div>
    </div>

    <!-- Plot 6: Sloping Terrain -->
    <div class="plot-box" style="border-color: #059669;">
      <div class="plot-title">6. Av Nce Theem (Slope Back High)</div>
      <svg class="plot-svg" viewBox="0 0 160 120">
        <polygon points="25,95 135,45 135,105 25,105" fill="#ECFDF5" stroke="#059669" stroke-width="2.5"/>
        <line x1="25" y1="95" x2="135" y2="45" stroke="#047857" stroke-width="3"/>
        <text x="80" y="80" font-size="11" font-weight="bold" fill="#065F46" text-anchor="middle">Tom Qab Siab (Roob)</text>
        <text x="40" y="115" font-size="9" fill="#047857">Pem Qis</text>
      </svg>
      <div class="plot-tag tag-good">&#10004; Zoo Heev (Staircase)</div>
      <div class="tag-remedy">Muaj roob txhawb nqa tom qab, nce qib hauv hauj lwm, neeg noj qab nyob ntev.</div>
    </div>
  </div>
</div>
</body>
</html>`;

// 2. fig_8_3_road_formations
const html83 = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 25px; background: white; font-family: 'Segoe UI', Tahoma, sans-serif; display: flex; justify-content: center; }
  .card { width: 880px; border: 2px solid #CBD5E1; border-radius: 12px; padding: 25px; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  h2 { text-align: center; color: #1E3A8A; margin: 0 0 6px 0; font-size: 22px; text-transform: uppercase; }
  p.subtitle { text-align: center; color: #64748B; margin: 0 0 20px 0; font-size: 14px; font-weight: 500; }
  .grid-roads { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
  .road-box { border: 2px solid #CBD5E1; border-radius: 8px; padding: 12px; background: #F8FAFC; text-align: center; }
  .road-title { font-size: 13.5px; font-weight: bold; color: #1E293B; margin-bottom: 8px; }
  .road-svg { width: 100%; height: 145px; }
  .road-tag { display: inline-block; font-size: 11.5px; font-weight: bold; padding: 3px 8px; border-radius: 4px; margin-top: 8px; }
  .tag-good { background: #DCFCE7; color: #166534; }
  .tag-bad { background: #FEE2E2; color: #991B1B; }
  .tag-remedy { font-size: 11px; color: #475569; margin-top: 5px; line-height: 1.3; }
</style>
</head>
<body>
<div class="card">
  <h2>Daim Duab 8.3: Cov Qauv Kev Tsheb Niaj Hnub Nim No (Virtual Water)</h2>
  <p class="subtitle">Txoj Kev Tsheb Sawv Cev Rau Dej Hauv Nroog Thiab Cov Tswv Yim Kho Sha Qi</p>

  <div class="grid-roads">
    <!-- Road 1: Embracing Jade Belt (Yu Dai) -->
    <div class="road-box" style="border-color: #059669;">
      <div class="road-title">1. Kev Nkhaus Qhwv (Jade Belt)</div>
      <svg class="road-svg" viewBox="0 0 160 145">
        <path d="M 12 35 Q 80 105 148 35" fill="none" stroke="#64748B" stroke-width="18" stroke-linecap="round"/>
        <path d="M 12 35 Q 80 105 148 35" fill="none" stroke="#F8FAFC" stroke-width="2.5" stroke-dasharray="6,4"/>
        <polygon points="135,42 145,35 142,47" fill="#F8FAFC"/>
        <rect x="65" y="20" width="30" height="26" fill="#ECFDF5" stroke="#059669" stroke-width="2.5" rx="3"/>
        <text x="80" y="36" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">Tsev</text>
        <text x="80" y="56" font-size="8" font-weight="bold" fill="#059669" text-anchor="middle">Sab Hauv (Concave)</text>
      </svg>
      <div class="road-tag tag-good">&#10004; Zoo Tshaj Plaws (Yu Dai)</div>
      <div class="tag-remedy">Kev qhwv zoo li txoj siv tawv puag lub tsev, khaws nyiaj txiag, muaj koob hmoov loj.</div>
    </div>

    <!-- Road 2: Reverse Bow (Fan Gong Sha) -->
    <div class="road-box" style="border-color: #DC2626;">
      <div class="road-title">2. Kev Nkhaus Tua Tawm (Reverse Bow)</div>
      <svg class="road-svg" viewBox="0 0 160 145">
        <path d="M 12 35 Q 80 105 148 35" fill="none" stroke="#64748B" stroke-width="18" stroke-linecap="round"/>
        <path d="M 12 35 Q 80 105 148 35" fill="none" stroke="#F8FAFC" stroke-width="2.5" stroke-dasharray="6,4"/>
        <!-- Red centrifugal thrust arrows -->
        <line x1="68" y1="102" x2="68" y2="114" stroke="#DC2626" stroke-width="2"/>
        <polygon points="65,114 71,114 68,118" fill="#DC2626"/>
        <line x1="80" y1="105" x2="80" y2="117" stroke="#DC2626" stroke-width="2.5"/>
        <polygon points="76,117 84,117 80,122" fill="#DC2626"/>
        <line x1="92" y1="102" x2="92" y2="114" stroke="#DC2626" stroke-width="2"/>
        <polygon points="89,114 95,114 92,118" fill="#DC2626"/>
        <!-- House sitting outside on convex target -->
        <rect x="65" y="118" width="30" height="24" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5" rx="3"/>
        <text x="80" y="134" font-size="9.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">Tsev</text>
        <rect x="25" y="64" width="110" height="18" fill="#FFFFFF" stroke="#FCA5A5" stroke-width="1" rx="4"/>
        <text x="80" y="77" font-size="8.5" font-weight="bold" fill="#DC2626" text-anchor="middle">Raug Tua (Convex)</text>
      </svg>
      <div class="road-tag tag-bad">&#10008; Phem Heev (Fan Gong Sha)</div>
      <div class="tag-remedy">Kho: Tsom iav Ba Gua convex, cog ntoo tuab thaiv, tsim phab ntsa pob zeb granite.</div>
    </div>

    <!-- Road 3: T-Junction Clash (Lu Chong) -->
    <div class="road-box" style="border-color: #DC2626;">
      <div class="road-title">3. Kev Ncaj Tsoo Qhov Rooj (Lu Chong)</div>
      <svg class="road-svg" viewBox="0 0 160 145">
        <rect x="10" y="50" width="140" height="18" fill="#64748B"/>
        <line x1="10" y1="59" x2="150" y2="59" stroke="#F8FAFC" stroke-width="2" stroke-dasharray="6,4"/>
        <rect x="71" y="68" width="18" height="72" fill="#64748B"/>
        <line x1="80" y1="70" x2="80" y2="140" stroke="#F8FAFC" stroke-width="2" stroke-dasharray="6,4"/>
        <rect x="65" y="14" width="30" height="26" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5" rx="3"/>
        <text x="80" y="30" font-size="9.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">Tsev</text>
        <line x1="80" y1="130" x2="80" y2="44" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="4,2"/>
        <polygon points="76,45 84,45 80,40" fill="#DC2626"/>
      </svg>
      <div class="road-tag tag-bad">&#10008; Phem Heev (Lu Chong)</div>
      <div class="tag-remedy">Kho: Pob zeb Tai Shan Shi Gan Dang, phab ntsa pob zeb granite, pas dej txav.</div>
    </div>

    <!-- Road 4: Scissor Road (Y-Junction) -->
    <div class="road-box" style="border-color: #DC2626;">
      <div class="road-title">4. Kev Riam Txiab (Scissor Road)</div>
      <svg class="road-svg" viewBox="0 0 160 145">
        <path d="M 18 135 L 80 60 L 142 135" fill="none" stroke="#64748B" stroke-width="18" stroke-linejoin="round"/>
        <path d="M 18 135 L 80 60 L 142 135" fill="none" stroke="#F8FAFC" stroke-width="2" stroke-dasharray="6,4"/>
        <rect x="65" y="18" width="30" height="26" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5" rx="3"/>
        <text x="80" y="34" font-size="9.5" font-weight="bold" fill="#B91C1C" text-anchor="middle">Tsev</text>
        <line x1="80" y1="65" x2="80" y2="48" stroke="#DC2626" stroke-width="2.5"/>
        <polygon points="76,50 84,50 80,45" fill="#DC2626"/>
      </svg>
      <div class="road-tag tag-bad">&#10008; Phem Hnyav (Jian Dao Sha)</div>
      <div class="tag-remedy">Kho: Txiav kaum ntse kom ua xwm fab, cog ntoo tuab thaiv, tsom iav Ba Gua convex.</div>
    </div>

    <!-- Road 5: Cul-de-Sac / Dead End -->
    <div class="road-box" style="border-color: #D97706;">
      <div class="road-title">5. Kev Kaw (Cul-de-sac / Dead End)</div>
      <svg class="road-svg" viewBox="0 0 160 145">
        <rect x="71" y="65" width="18" height="75" fill="#64748B"/>
        <circle cx="80" cy="50" r="26" fill="#64748B"/>
        <circle cx="80" cy="50" r="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
        <rect x="65" y="8" width="30" height="24" fill="#FFFBEB" stroke="#D97706" stroke-width="2.5" rx="3"/>
        <text x="80" y="24" font-size="9.5" font-weight="bold" fill="#B45309" text-anchor="middle">Tsev</text>
        <text x="80" y="53" font-size="7.5" font-weight="bold" fill="#1E293B" text-anchor="middle">Tig Tsheb</text>
      </svg>
      <div class="road-tag" style="background:#FEF3C7; color:#B45309;">&#9888; Qi Tuag (Dead End Sha)</div>
      <div class="tag-remedy">Kho: Taws teeb ci ntsa iab pem hauv ntej, teeb lub pas dej txav kom Qi nti.</div>
    </div>

    <!-- Road 6: Roundabout / Circular Flow -->
    <div class="road-box" style="border-color: #059669;">
      <div class="road-title">6. Kev Voj Kheej (Roundabout)</div>
      <svg class="road-svg" viewBox="0 0 160 145">
        <circle cx="80" cy="78" r="38" fill="none" stroke="#64748B" stroke-width="16"/>
        <circle cx="80" cy="78" r="38" fill="none" stroke="#F8FAFC" stroke-width="2" stroke-dasharray="6,4"/>
        <circle cx="80" cy="78" r="24" fill="#ECFDF5" stroke="#059669" stroke-width="2"/>
        <text x="80" y="82" font-size="9" font-weight="bold" fill="#047857" text-anchor="middle">Vaj Paj</text>
        <rect x="65" y="8" width="30" height="22" fill="#ECFDF5" stroke="#059669" stroke-width="2.5" rx="3"/>
        <text x="80" y="23" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">Tsev</text>
      </svg>
      <div class="road-tag tag-good">&#10004; Qi Tig Maj Mam (Gentle Qi)</div>
      <div class="tag-remedy">Zoo yog tsheb tsis ceev dhau; tsim kev vam meej thiab kev noj qab nyob zoo.</div>
    </div>
  </div>
</div>
</body>
</html>`;

// 3. fig_8_4_yang_zhai_yin_zhai
const html84 = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 25px; background: white; font-family: 'Segoe UI', Tahoma, sans-serif; display: flex; justify-content: center; }
  .card { width: 880px; border: 2px solid #CBD5E1; border-radius: 12px; padding: 25px; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  h2 { text-align: center; color: #1E3A8A; margin: 0 0 6px 0; font-size: 22px; text-transform: uppercase; }
  p.subtitle { text-align: center; color: #64748B; margin: 0 0 20px 0; font-size: 14px; font-weight: 500; }
  .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .section-box { border: 2px solid #CBD5E1; border-radius: 8px; padding: 15px; background: #F8FAFC; }
  .sec-title { font-size: 16px; font-weight: bold; text-align: center; margin-bottom: 12px; }
  .sec-svg { width: 100%; height: 260px; background: white; border: 1px solid #E2E8F0; border-radius: 6px; }
  .bullet-list { margin-top: 12px; font-size: 12.5px; line-height: 1.5; color: #334155; }
</style>
</head>
<body>
<div class="card">
  <h2>Daim Duab 8.4: Kev Sib Txawv Ntawm Yang Zhai Thiab Yin Zhai</h2>
  <p class="subtitle">Kev Sib Piv Ntawm Vaj Tsev Neeg Nyob (Yang Zhai) Thiab Thaj Chaw Ntxa (Yin Zhai)</p>

  <div class="comparison-grid">
    <!-- Left: Yang Zhai -->
    <div class="section-box" style="border-color: #2563EB;">
      <div class="sec-title" style="color: #1E40AF;">A. YANG ZHAI (Vaj Tsev Neeg Nyob)</div>
      <svg class="sec-svg" viewBox="0 0 380 260">
        <!-- Background Mountain (Tortoise) -->
        <path d="M 90 90 Q 190 20 290 90" fill="#EFF6FF" stroke="#2563EB" stroke-width="2"/>
        <text x="190" y="55" font-size="11" font-weight="bold" fill="#1E40AF" text-anchor="middle">Vaub Kib Dub (Xuan Wu) - Tom Qab</text>

        <!-- Left Armrest (Dragon) -->
        <path d="M 40 160 Q 70 80 120 120" fill="none" stroke="#059669" stroke-width="3"/>
        <text x="60" y="110" font-size="10" font-weight="bold" fill="#047857">Zaj Ntsuab (Qing Long)</text>

        <!-- Right Armrest (Tiger) -->
        <path d="M 340 160 Q 310 90 260 120" fill="none" stroke="#D97706" stroke-width="3"/>
        <text x="320" y="110" font-size="10" font-weight="bold" fill="#B45309" text-anchor="middle">Tsov Dawb (Bai Hu)</text>

        <!-- The House -->
        <rect x="155" y="115" width="70" height="50" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5" rx="3"/>
        <polygon points="145,115 190,85 235,115" fill="#DC2626"/>
        <text x="190" y="145" font-size="12" font-weight="bold" fill="#1E293B" text-anchor="middle">Tsev Yang</text>

        <!-- Ming Tang (Bright Hall) -->
        <rect x="140" y="175" width="100" height="35" fill="#ECFDF5" stroke="#059669" stroke-dasharray="4,2"/>
        <text x="190" y="197" font-size="11" font-weight="bold" fill="#065F46" text-anchor="middle">Ming Tang (Chaw Qhib)</text>

        <!-- Water / Road in front (Phoenix) -->
        <path d="M 50 240 Q 190 205 330 240" fill="none" stroke="#0284C7" stroke-width="8"/>
        <text x="190" y="235" font-size="10" font-weight="bold" fill="#0369A1" text-anchor="middle">Noog Liab (Zhu Que) / Dej &amp; Kev</text>
      </svg>
      <div class="bullet-list">
        &bull; <strong>Tsom Ntsoov:</strong> Lub teeb ci Yang, kev cua ntsawj txaus, qhov rooj loj.<br>
        &bull; <strong>Txiaj Ntsig:</strong> Coj kev nplua nuj, nyiaj txiag, koob hmoov rau cov neeg muaj sia tam sim no.<br>
        &bull; <strong>Qauv:</strong> Roob txhawb nqa tom qab, Ming Tang dav pem hauv ntej, dej ntws nkhaus.
      </div>
    </div>

    <!-- Right: Yin Zhai -->
    <div class="section-box" style="border-color: #7C3AED;">
      <div class="sec-title" style="color: #6D28D9;">B. YIN ZHAI (Thaj Chaw Ntxa Poj Koob Yawm Txwv)</div>
      <svg class="sec-svg" viewBox="0 0 380 260">
        <!-- Mountain Dragon Vein -->
        <rect x="75" y="4" width="230" height="18" fill="#F5F3FF" rx="4" stroke="#DDD6FE" stroke-width="1"/>
        <text x="190" y="17" font-size="10.5" font-weight="bold" fill="#6D28D9" text-anchor="middle">Txoj Leeg Zaj (Long Mai) Txuas Los</text>
        <path d="M 30 65 Q 90 25 150 60 Q 190 30 230 60 Q 290 25 350 65" fill="none" stroke="#7C3AED" stroke-width="3"/>

        <!-- Embracing Hills -->
        <path d="M 60 170 Q 120 70 160 110" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2"/>
        <path d="M 320 170 Q 260 70 220 110" fill="#F5F3FF" stroke="#7C3AED" stroke-width="2"/>

        <!-- The Grave Mound (Luan Tou) -->
        <ellipse cx="190" cy="135" rx="35" ry="25" fill="#EDE9FE" stroke="#6D28D9" stroke-width="2.5"/>
        <path d="M 175 140 Q 190 120 205 140" fill="none" stroke="#6D28D9" stroke-width="2"/>
        <text x="190" y="148" font-size="11" font-weight="bold" fill="#5B21B6" text-anchor="middle">Lub Ntxa</text>

        <!-- Gathering Qi Spot (Xue) -->
        <circle cx="190" cy="170" r="12" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>
        <text x="190" y="174" font-size="8" font-weight="bold" fill="#B45309" text-anchor="middle">Xue</text>

        <!-- Meandering River -->
        <path d="M 60 235 Q 130 195 190 220 Q 250 245 320 210" fill="none" stroke="#0284C7" stroke-width="5"/>
        <text x="190" y="248" font-size="10" font-weight="bold" fill="#0369A1" text-anchor="middle">Dej Ntws Mos Muag Khaws Qi (Cang Feng Ju Qi)</text>
      </svg>
      <div class="bullet-list">
        &bull; <strong>Tsom Ntsoov:</strong> Kev ntsiag to Yin, txoj leeg zaj hauv av, av qhuav zoo nkauj.<br>
        &bull; <strong>Txiaj Ntsig:</strong> Coj kev vam meej ntev rau txhua tiam tub xeeb ntxwv yav tom ntej.<br>
        &bull; <strong>Zam Kiag Li:</strong> Cua hlob ntsawj ntsis roob, dej nyab ntxa, cag ntoo nkag ntxa.
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

// 4. fig_8_5_armchair_landscape
const html85 = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 25px; background: white; font-family: 'Segoe UI', Tahoma, sans-serif; display: flex; justify-content: center; }
  .card { width: 880px; border: 2px solid #CBD5E1; border-radius: 12px; padding: 25px; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  h2 { text-align: center; color: #1E3A8A; margin: 0 0 6px 0; font-size: 22px; text-transform: uppercase; }
  p.subtitle { text-align: center; color: #64748B; margin: 0 0 18px 0; font-size: 14px; font-weight: 500; }
  .canvas-svg { width: 100%; height: 440px; background: #F8FAFC; border: 2px solid #E2E8F0; border-radius: 8px; }
  .cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 15px; }
  .feat-box { border: 1.5px solid #CBD5E1; border-radius: 6px; padding: 10px; background: #FFFFFF; font-size: 11.5px; line-height: 1.4; color: #334155; }
  .feat-title { font-weight: bold; margin-bottom: 4px; font-size: 12px; }
</style>
</head>
<body>
<div class="card">
  <h2>Daim Duab 8.5: Qauv Roob Zaum Rooj Xis (Armchair Landscape)</h2>
  <p class="subtitle">Kev Puag Nqa Ntawm Plaub Tus Tsiaj Saum Ntuj &amp; Lub Zog Cang Feng Ju Qi (Four Celestial Animals)</p>

  <svg class="canvas-svg" viewBox="0 0 880 440">
    <!-- Sky Background -->
    <defs>
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#E0F2FE"/>
        <stop offset="100%" stop-color="#F8FAFC"/>
      </linearGradient>
      <linearGradient id="mountainXuanWu" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1E3A8A"/>
        <stop offset="100%" stop-color="#3B82F6"/>
      </linearGradient>
      <linearGradient id="mountainLong" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#065F46"/>
        <stop offset="100%" stop-color="#10B981"/>
      </linearGradient>
      <linearGradient id="mountainHu" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#92400E"/>
        <stop offset="100%" stop-color="#F59E0B"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="880" height="440" fill="url(#skyGrad)"/>

    <!-- Distant Mountains (Chao Shan) -->
    <path d="M 80 180 Q 220 120 360 180 Q 480 130 620 180 Q 750 140 880 180 L 880 220 L 0 220 Z" fill="#E2E8F0" opacity="0.7"/>

    <!-- Rear Protective Mountain: Xuan Wu (Black Tortoise) -->
    <path d="M 220 220 Q 440 25 660 220 Z" fill="url(#mountainXuanWu)" opacity="0.95"/>
    <text x="440" y="80" font-size="15" font-weight="bold" fill="#FFFFFF" text-anchor="middle">1. Roob Vaub Kib Dub (Xuan Wu 玄武)</text>
    <text x="440" y="102" font-size="12" fill="#DBEAFE" text-anchor="middle">Tom Qab Siab Txhawb Nqa &bull; Kev Noj Qab Nyob Ntev &bull; Neeg Pab Txhawb</text>

    <!-- Left Arm: Green Dragon (Qing Long) - Higher & Undulating -->
    <path d="M 40 330 Q 120 140 260 210 Q 320 250 350 280 L 150 360 Z" fill="url(#mountainLong)" opacity="0.9"/>
    <text x="180" y="195" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">2. Zaj Ntsuab (Qing Long 青龙)</text>
    <text x="180" y="215" font-size="11" fill="#D1FAE5" text-anchor="middle">Sab Laug Siab Puag &bull; Tswj Hwm Txiv Neej &amp; Vam Meej</text>

    <!-- Right Arm: White Tiger (Bai Hu) - Lower & Docile -->
    <path d="M 840 330 Q 760 170 620 230 Q 560 260 530 280 L 730 360 Z" fill="url(#mountainHu)" opacity="0.9"/>
    <text x="700" y="205" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">3. Tsov Dawb (Bai Hu 白虎)</text>
    <text x="700" y="225" font-size="11" fill="#FEF3C7" text-anchor="middle">Sab Xis Qis Thaj Yeeb &bull; Tswj Hwm Poj Niam &amp; Tiv Thaiv</text>

    <!-- Center Protected Pocket: The House / Xue (穴) -->
    <rect x="390" y="210" width="100" height="65" fill="#FFFFFF" stroke="#1E293B" stroke-width="2.5" rx="5"/>
    <polygon points="380,210 440,175 500,210" fill="#DC2626"/>
    <rect x="425" y="240" width="30" height="35" fill="#B91C1C"/>
    <text x="440" y="235" font-size="12" font-weight="bold" fill="#1E293B" text-anchor="middle">Tsev Nyob / Xue</text>

    <!-- Ming Tang (Bright Hall) - Open Fertile Green Field -->
    <ellipse cx="440" cy="305" rx="140" ry="32" fill="#ECFDF5" stroke="#059669" stroke-width="2" stroke-dasharray="6,3"/>
    <text x="440" y="305" font-size="13" font-weight="bold" fill="#047857" text-anchor="middle">4. Ming Tang Txiav Txim Siab Dav (明堂)</text>
    <text x="440" y="322" font-size="10.5" fill="#065F46" text-anchor="middle">Chaw Qhib Dav Khaws Cua &amp; Sau Zog Qi (Gathering Sheng Qi)</text>

    <!-- River: Jade Belt Water (Yu Dai Shui) - Curving in front -->
    <path d="M 60 410 Q 440 330 820 410" fill="none" stroke="#0284C7" stroke-width="24" stroke-linecap="round"/>
    <path d="M 60 410 Q 440 330 820 410" fill="none" stroke="#E0F2FE" stroke-width="3" stroke-dasharray="10,6"/>
    <text x="440" y="380" font-size="13" font-weight="bold" fill="#0369A1" text-anchor="middle">5. Dej Txoj Siv Hmoov (Yu Dai Shui 玉带水) - Concave Embrace</text>

    <!-- Distant Table Hill: An Shan -->
    <ellipse cx="440" cy="428" rx="80" ry="14" fill="#059669" opacity="0.8"/>
    <text x="440" y="432" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">6. Roob Rooj (An Shan 案山)</text>
  </svg>

  <div class="cards-grid">
    <div class="feat-box" style="border-top: 3px solid #1E3A8A;">
      <div class="feat-title" style="color: #1E3A8A;">Xuan Wu (Vaub Kib)</div>
      Roob siab tom qab tiv thaiv cua txias, coj kev noj qab nyob ntev, kev txhawb nqa ruaj khov los ntawm neeg loj.
    </div>
    <div class="feat-box" style="border-top: 3px solid #059669;">
      <div class="feat-title" style="color: #059669;">Qing Long (Zaj Ntsuab)</div>
      Roob sab laug siab dua sab xis, tswj hwm txiv neej, kev lag luam vam meej, koob meej thiab hwj chim siab.
    </div>
    <div class="feat-box" style="border-top: 3px solid #D97706;">
      <div class="feat-title" style="color: #D97706;">Bai Hu (Tsov Dawb)</div>
      Roob sab xis qis dua sab laug, tswj hwm poj niam, kev nplua nuj nyob twj ywm, tiv thaiv xwm txheej phem.
    </div>
    <div class="feat-box" style="border-top: 3px solid #0284C7;">
      <div class="feat-title" style="color: #0284C7;">Ming Tang &amp; Dej</div>
      Chaw tiaj dav pem hauv ntej nrog dej nkhaus qhwv puag kom lub zog Qi tsis txhob tawg, khaws nyiaj txiag nplua nuj.
    </div>
  </div>
</div>
</body>
</html>`;

// 5. fig_8_6_mountain_sha
const html86 = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 25px; background: white; font-family: 'Segoe UI', Tahoma, sans-serif; display: flex; justify-content: center; }
  .card { width: 880px; border: 2px solid #CBD5E1; border-radius: 12px; padding: 25px; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  h2 { text-align: center; color: #1E3A8A; margin: 0 0 6px 0; font-size: 22px; text-transform: uppercase; }
  p.subtitle { text-align: center; color: #64748B; margin: 0 0 20px 0; font-size: 14px; font-weight: 500; }
  .grid-sha { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
  .sha-box { border: 2px solid #DC2626; border-radius: 8px; padding: 12px; background: #FEF2F2; text-align: center; }
  .sha-title { font-size: 14px; font-weight: bold; color: #991B1B; margin-bottom: 8px; }
  .sha-svg { width: 100%; height: 165px; background: #FFFFFF; border: 1px solid #FECACA; border-radius: 6px; }
  .sha-tag { display: inline-block; font-size: 11.5px; font-weight: bold; padding: 3px 8px; border-radius: 4px; margin-top: 8px; background: #FEE2E2; color: #991B1B; }
  .sha-desc { font-size: 11px; color: #475569; margin-top: 6px; line-height: 1.35; text-align: left; }
</style>
</head>
<body>
<div class="card">
  <h2>Daim Duab 8.6: Cov Hom Roob Phem (Luan Tou Shan Sha 峦头山煞)</h2>
  <p class="subtitle">Kev Ntsuam Xyuas Roob Ntxeev Siab, Roob Soj Xyuas Thiab Roob Pob Zeb Tawg Hauv Looj Mem</p>

  <div class="grid-sha">
    <!-- Sha 1: Fan Bei Shan -->
    <div class="sha-box">
      <div class="sha-title">1. Roob Ntxeev Siab (Fan Bei Shan)</div>
      <svg class="sha-svg" viewBox="0 0 220 165">
        <!-- Ridge bending backward away -->
        <path d="M 30 140 Q 90 20 200 40 L 210 140 Z" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>
        <path d="M 60 140 Q 110 50 190 70" fill="none" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="4,3"/>
        <!-- Centrifugal arrow draining away -->
        <path d="M 110 55 Q 160 40 190 45" fill="none" stroke="#B91C1C" stroke-width="3"/>
        <polygon points="190,40 198,46 188,52" fill="#B91C1C"/>
        <text x="145" y="32" font-size="10" font-weight="bold" fill="#B91C1C">Qi Khiav Deb</text>
        <!-- The house in front -->
        <rect x="35" y="105" width="40" height="32" fill="#FFFFFF" stroke="#1E293B" stroke-width="2"/>
        <polygon points="30,105 55,85 80,105" fill="#DC2626"/>
        <text x="55" y="125" font-size="10" font-weight="bold" fill="#1E293B" text-anchor="middle">Tsev</text>
        <text x="135" y="125" font-size="9" fill="#991B1B">Roob nraub qaum khiav deb</text>
      </svg>
      <div class="sha-tag">&#10008; Phem (Kev Ntxeev Siab)</div>
      <div class="sha-desc">
        &bull; <strong>Yam Ntxwv:</strong> Roob nraub qaum khoov ntxeev khiav deb tsis txhawb lub tsev.<br>
        &bull; <strong>Txiaj Ntsig Phem:</strong> Neeg pab ntxeev siab, tub xeeb ntxwv khiav tsis rov qab, poob nyiaj.<br>
        &bull; <strong>Kev Kho:</strong> Cog ntoo thuv tuab nraub qaum tsev, tsom iav Ba Gua convex.
      </div>
    </div>

    <!-- Sha 2: Tan Tou Shan -->
    <div class="sha-box">
      <div class="sha-title">2. Roob Soj Xyuas (Tan Tou Shan)</div>
      <svg class="sha-svg" viewBox="0 0 220 165">
        <!-- Low front hill -->
        <path d="M 10 145 Q 90 70 180 145 Z" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
        <!-- Sinister peek rock summit behind -->
        <polygon points="120,70 145,22 165,65" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
        <circle cx="145" cy="40" r="4" fill="#DC2626"/>
        <!-- Menacing gaze line -->
        <line x1="145" y1="45" x2="60" y2="115" stroke="#DC2626" stroke-width="2" stroke-dasharray="4,2"/>
        <polygon points="63,110 56,118 68,118" fill="#DC2626"/>
        <text x="145" y="16" font-size="9.5" font-weight="bold" fill="#DC2626" text-anchor="middle">Ntsis Roob Soj</text>
        <!-- The house in front -->
        <rect x="25" y="115" width="40" height="30" fill="#FFFFFF" stroke="#1E293B" stroke-width="2"/>
        <polygon points="20,115 45,95 70,115" fill="#DC2626"/>
        <text x="45" y="133" font-size="9.5" font-weight="bold" fill="#1E293B" text-anchor="middle">Tsev</text>
      </svg>
      <div class="sha-tag">&#10008; Phem (Tub Sab &amp; Dag Nyiaj)</div>
      <div class="sha-desc">
        &bull; <strong>Yam Ntxwv:</strong> Pob tsuas ntse leem saum ntsis roob zoo li tub sab soj xyuas.<br>
        &bull; <strong>Txiaj Ntsig Phem:</strong> Raug tub sab nyiag khoom, raug dag nyiaj txiag, raug foob plaub.<br>
        &bull; <strong>Kev Kho:</strong> Cog ntoo siab thaiv kom txhob pom lub ntsis roob phem.
      </div>
    </div>

    <!-- Sha 3: Po Mian Shan -->
    <div class="sha-box">
      <div class="sha-title">3. Roob Pob Zeb Tawg (Po Mian Shan)</div>
      <svg class="sha-svg" viewBox="0 0 220 165">
        <!-- Mountain with violent quarry rockfall scar -->
        <path d="M 60 145 L 140 25 L 210 145 Z" fill="#E2E8F0" stroke="#64748B" stroke-width="2"/>
        <!-- Raw red landslide scar -->
        <polygon points="110,65 140,35 170,85 160,130 95,115" fill="#FEE2E2" stroke="#DC2626" stroke-width="2"/>
        <!-- Falling jagged boulders -->
        <polygon points="120,80 128,75 132,85 122,90" fill="#B91C1C"/>
        <polygon points="142,95 152,90 156,102 144,106" fill="#B91C1C"/>
        <polygon points="110,105 118,100 120,112 112,114" fill="#B91C1C"/>
        <text x="135" y="60" font-size="9" font-weight="bold" fill="#B91C1C" text-anchor="middle">Pob Zeb Tawg</text>
        <!-- The house facing scar -->
        <rect x="15" y="115" width="40" height="30" fill="#FFFFFF" stroke="#1E293B" stroke-width="2"/>
        <polygon points="10,115 35,95 60,115" fill="#DC2626"/>
        <text x="35" y="133" font-size="9.5" font-weight="bold" fill="#1E293B" text-anchor="middle">Tsev</text>
      </svg>
      <div class="sha-tag">&#10008; Phem Hnyav (Phais Mob &amp; Ntshav)</div>
      <div class="sha-desc">
        &bull; <strong>Yam Ntxwv:</strong> Pob tsuas tawg ntho, av qhuav liab ploog, pob zeb ntse nti.<br>
        &bull; <strong>Txiaj Ntsig Phem:</strong> Kev phais mob (surgery), xwm txheej raug ntshav, mob qhov muag.<br>
        &bull; <strong>Kev Kho:</strong> Phab ntsa pob zeb granite, pob zeb Tai Shan Shi Gan Dang.
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

// 6. fig_8_7_jade_belt_water
const html87 = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 25px; background: white; font-family: 'Segoe UI', Tahoma, sans-serif; display: flex; justify-content: center; }
  .card { width: 880px; border: 2px solid #CBD5E1; border-radius: 12px; padding: 25px; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  h2 { text-align: center; color: #1E3A8A; margin: 0 0 6px 0; font-size: 22px; text-transform: uppercase; }
  p.subtitle { text-align: center; color: #64748B; margin: 0 0 20px 0; font-size: 14px; font-weight: 500; }
  .water-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .water-box { border: 2px solid #CBD5E1; border-radius: 8px; padding: 15px; }
  .water-title { font-size: 15px; font-weight: bold; text-align: center; margin-bottom: 10px; }
  .water-svg { width: 100%; height: 250px; background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; }
  .water-tag { display: inline-block; font-size: 12px; font-weight: bold; padding: 4px 10px; border-radius: 4px; margin-top: 10px; }
  .water-list { margin-top: 10px; font-size: 12px; line-height: 1.5; color: #334155; }
</style>
</head>
<body>
<div class="card">
  <h2>Daim Duab 8.7: Kev Sib Piv Dej Yu Dai Shui Thiab Dej Fan Gong Shui</h2>
  <p class="subtitle">Kev Khiav Ntawm Dej Ntws Mos Muag (Concave) Thiab Dej Hlais Tsev (Convex) Hauv Looj Mem</p>

  <div class="water-grid">
    <!-- Left: Jade Belt Water -->
    <div class="water-box" style="border-color: #059669; background: #F0FDF4;">
      <div class="water-title" style="color: #065F46;">A. Dej Txoj Siv Hmoov (Yu Dai Shui 玉带水)</div>
      <svg class="water-svg" viewBox="0 0 380 250">
        <!-- Embracing River: House is inside concave loop -->
        <path d="M 30 70 Q 190 220 350 70" fill="none" stroke="#0284C7" stroke-width="32" stroke-linecap="round"/>
        <path d="M 30 70 Q 190 220 350 70" fill="none" stroke="#E0F2FE" stroke-width="4" stroke-dasharray="10,6"/>
        <!-- River Flow Arrow -->
        <polygon points="330,85 348,70 342,92" fill="#E0F2FE"/>

        <!-- The House: Inside concave embrace -->
        <rect x="150" y="45" width="80" height="55" fill="#FFFFFF" stroke="#059669" stroke-width="3" rx="5"/>
        <polygon points="140,45 190,15 240,45" fill="#059669"/>
        <text x="190" y="70" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">Tsev Nyob</text>
        <text x="190" y="88" font-size="9.5" fill="#065F46" text-anchor="middle">Sab Hauv (Concave)</text>

        <!-- Ming Tang Gathering Qi Vortex -->
        <ellipse cx="190" cy="120" rx="45" ry="15" fill="#DCFCE7" stroke="#16A34A" stroke-dasharray="4,2"/>
        <text x="190" y="124" font-size="9" font-weight="bold" fill="#15803D" text-anchor="middle">Ming Tang (Sau Qi)</text>

        <!-- Wealth indicators -->
        <text x="190" y="195" font-size="11" font-weight="bold" fill="#0369A1" text-anchor="middle">Dej Ntws Puag Mos Muag (Yu Dai)</text>
      </svg>
      <div class="water-tag" style="background: #DCFCE7; color: #166534;">&#10004; Zoo Tshaj Plaws (Cang Feng Ju Qi)</div>
      <div class="water-list">
        &bull; <strong>Lub Zog:</strong> Dej ntws qeeb thiab mos muag qhwv puag lub tsev zoo li txoj siv tawv jade.<br>
        &bull; <strong>Txiaj Ntsig:</strong> Khaws nyiaj txiag tsis xau, kev vam meej ntev, tsev neeg sib haum xeeb.<br>
        &bull; <strong>Kev Tiv Thaiv:</strong> Av tsis yaig, cua tsis tshuab hnyav, tsis raug kev puas tsuaj ntawm dej.
      </div>
    </div>

    <!-- Right: Reverse Bow Water -->
    <div class="water-box" style="border-color: #DC2626; background: #FEF2F2;">
      <div class="water-title" style="color: #991B1B;">B. Dej Nkhaus Ntxeev Hlais Tsev (Fan Gong Shui 反弓水)</div>
      <svg class="water-svg" viewBox="0 0 380 250">
        <!-- Cutting River: Outer convex curve faces the house -->
        <path d="M 30 70 Q 190 220 350 70" fill="none" stroke="#64748B" stroke-width="32" stroke-linecap="round"/>
        <path d="M 30 70 Q 190 220 350 70" fill="none" stroke="#F8FAFC" stroke-width="4" stroke-dasharray="10,6"/>

        <!-- Centrifugal Thrust Thrust Arrows pointing OUT at house -->
        <line x1="160" y1="180" x2="160" y2="200" stroke="#DC2626" stroke-width="3"/>
        <polygon points="155,200 165,200 160,207" fill="#DC2626"/>
        <line x1="190" y1="185" x2="190" y2="207" stroke="#DC2626" stroke-width="4"/>
        <polygon points="183,207 197,207 190,216" fill="#DC2626"/>
        <line x1="220" y1="180" x2="220" y2="200" stroke="#DC2626" stroke-width="3"/>
        <polygon points="215,200 225,200 220,207" fill="#DC2626"/>

        <text x="190" y="155" font-size="10.5" font-weight="bold" fill="#DC2626" text-anchor="middle">Dej Hlais Tua (Centrifugal Force)</text>

        <!-- The House: Outside on convex blast zone -->
        <rect x="150" y="210" width="80" height="36" fill="#FFFFFF" stroke="#DC2626" stroke-width="3" rx="4"/>
        <text x="190" y="226" font-size="11" font-weight="bold" fill="#B91C1C" text-anchor="middle">Tsev Nyob</text>
        <text x="190" y="240" font-size="8.5" fill="#991B1B" text-anchor="middle">Raug Hlais (Convex Target)</text>
      </svg>
      <div class="water-tag" style="background: #FEE2E2; color: #991B1B;">&#10008; Phem Hnyav (Fan Gong Sha)</div>
      <div class="water-list">
        &bull; <strong>Lub Zog:</strong> Dej nkhaus zoo li rab riam txiav (Curved Blade) tua ncaj rau lub tsev.<br>
        &bull; <strong>Txiaj Ntsig Phem:</strong> Poob nyiaj txiag sai heev, mob plawv thiab ntshav, teeb meem plaub ntug.<br>
        &bull; <strong>Kev Kho:</strong> Tsim phab ntsa pob zeb nkhaus convex, cog ntoo tuab thaiv, tsom iav Ba Gua.
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

// 7. fig_8_8_five_color_soil
const html88 = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  body { margin: 0; padding: 25px; background: white; font-family: 'Segoe UI', Tahoma, sans-serif; display: flex; justify-content: center; }
  .card { width: 880px; border: 2px solid #CBD5E1; border-radius: 12px; padding: 25px; background: #ffffff; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
  h2 { text-align: center; color: #1E3A8A; margin: 0 0 6px 0; font-size: 22px; text-transform: uppercase; }
  p.subtitle { text-align: center; color: #64748B; margin: 0 0 20px 0; font-size: 14px; font-weight: 500; }
  .soil-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 20px; }
  .strata-box { border: 2px solid #CBD5E1; border-radius: 8px; padding: 15px; background: #F8FAFC; }
  .test-box { border: 2px solid #CBD5E1; border-radius: 8px; padding: 15px; background: #F8FAFC; }
  .box-title { font-size: 15px; font-weight: bold; color: #1E3A8A; margin-bottom: 12px; text-align: center; }
  .strata-svg { width: 100%; height: 280px; border-radius: 6px; border: 1px solid #CBD5E1; }
  .test-item { background: #FFFFFF; border: 1.5px solid #E2E8F0; border-radius: 6px; padding: 10px; margin-bottom: 10px; font-size: 11.5px; line-height: 1.4; }
  .test-header { font-weight: bold; color: #1E293B; margin-bottom: 4px; font-size: 12px; }
</style>
</head>
<body>
<div class="card">
  <h2>Daim Duab 8.8: Theem Av Tsib Kob Hauv Qhov Ntxa (Ng Se Tu 五色土)</h2>
  <p class="subtitle">Daim Duab Qhia Cov Theem Av Zoo Hauv Qhov Xue Ntawm Roob Zaj Thiab Kev Ntsuas Av</p>

  <div class="soil-grid">
    <!-- Left: Geological Strata Profile -->
    <div class="strata-box">
      <div class="box-title">Theem Av Hauv Qhov Xue (Soil Strata Profile)</div>
      <svg class="strata-svg" viewBox="0 0 420 280">
        <!-- Layer 1: Living turf -->
        <rect x="0" y="0" width="420" height="35" fill="#15803D"/>
        <text x="210" y="22" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">1. Nyom Ntsuab &amp; Cag Ntoo (Living Turf - Sheng Qi)</text>

        <!-- Layer 2: Golden Earth -->
        <rect x="0" y="35" width="420" height="45" fill="#EAB308"/>
        <text x="210" y="62" font-size="11" font-weight="bold" fill="#713F12" text-anchor="middle">2. Av Daj (Golden Earth - Av Zog / Earth Element)</text>

        <!-- Layer 3: Cinnabar Red Clay -->
        <rect x="0" y="80" width="420" height="45" fill="#EF4444"/>
        <text x="210" y="107" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">3. Av Liab (Cinnabar Red - Hluav Taws Zog / Fire Element)</text>

        <!-- Layer 4: Royal Purple Mineral Earth -->
        <rect x="0" y="125" width="420" height="45" fill="#8B5CF6"/>
        <text x="210" y="152" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">4. Av Ntshav (Royal Purple - Heavenly Qi / San Yuan)</text>

        <!-- Layer 5: Fine White Kaolin -->
        <rect x="0" y="170" width="420" height="45" fill="#F1F5F9" stroke="#94A3B8"/>
        <text x="210" y="197" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">5. Av Dawb (Fine White Kaolin - Kub Zog / Metal Element)</text>

        <!-- Layer 6: Rich Black Cohesive Soil -->
        <rect x="0" y="215" width="420" height="65" fill="#1E293B"/>
        <text x="210" y="250" font-size="11" font-weight="bold" fill="#94A3B8" text-anchor="middle">6. Av Dub (Rich Black - Dej Zog / Water Element)</text>
      </svg>
    </div>

    <!-- Right: Field Cohesion & Quality Tests -->
    <div class="test-box">
      <div class="box-title">Kev Ntsuas Av Hauv Tshav Teb (Field Soil Tests)</div>

      <div class="test-item" style="border-left: 4px solid #10B981;">
        <div class="test-header" style="color: #047857;">1. Kev Ntsuas Tuav Av (Cohesion Ball Test)</div>
        Muab av tuav hauv xib teg puab ua ib lub pob kheej zoo li lub qe: Av yuav tsum ntom nti zoo li qhob noom (dough/jade), tsis nplaum ntub li av nkos, thiab tsis qhuav tawg ua hmoov av xuab zeb.
      </div>

      <div class="test-item" style="border-left: 4px solid #3B82F6;">
        <div class="test-header" style="color: #1D4ED8;">2. Kev Ntsuas Cua &amp; Dej (Moisture Balance)</div>
        Av hauv qhov Xue yuav tsum sov siab thiab noo xwm yeem (warm and moist). Tsis muaj dej xau nyab qhov ntxa, tsis muaj cua ntsawj txias, thiab muaj ntxhiab tsw tshiab ntawm roob zaj.
      </div>

      <div class="test-item" style="border-left: 4px solid #8B5CF6;">
        <div class="test-header" style="color: #6D28D9;">3. Txiaj Ntsig Rau Tub Xeeb Ntxwv</div>
        Poj koob yawm txwv cov pob txha yuav nyob sov siab thiab daj ci zoo li kub (Huang Jin Gu), foom koob hmoov rau txhua tiam tub xeeb ntxwv muaj nyiaj txiag, koob meej, thiab noj qab nyob ntev.
      </div>
    </div>
  </div>
</div>
</body>
</html>`;

async function generate() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 3200 } });

  const tasks = [
    { html: html82, name: 'fig_8_2_land_plot_shapes' },
    { html: html83, name: 'fig_8_3_road_formations' },
    { html: html84, name: 'fig_8_4_yang_zhai_yin_zhai' },
    { html: html85, name: 'fig_8_5_armchair_landscape' },
    { html: html86, name: 'fig_8_6_mountain_sha' },
    { html: html87, name: 'fig_8_7_jade_belt_water' },
    { html: html88, name: 'fig_8_8_five_color_soil' },
  ];

  for (const t of tasks) {
    await page.setContent(t.html, { waitUntil: 'load' });
    const card = await page.$('.card');
    const pngPath = path.join(primaryDir, t.name + '.png');
    await card.screenshot({ path: pngPath });
    outDirs.slice(1).forEach(d => {
      fs.copyFileSync(pngPath, path.join(d, t.name + '.png'));
    });
    console.log(`Rendered ${t.name}.png cleanly (${fs.statSync(pngPath).size} bytes)`);
  }

  await browser.close();
  console.log("All 7 master landscape figures rendered successfully!");
}

generate().catch(console.error);
