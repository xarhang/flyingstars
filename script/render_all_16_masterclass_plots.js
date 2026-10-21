// render_all_16_masterclass_plots.js
// Renders all 16 Land Plot Archetypes in Masterclass 4-Card Architectural Quality
// Supports both Lao and White Hmong RPA
// Outputs PNGs with high-res Resvg and native OpenType typography

const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const p1 = require('./plots_data_part1.js');
const p2 = require('./plots_data_part2.js');
const allPlots = [...p1, ...p2];

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function escapeDict(obj) {
  const res = {};
  for (const k in obj) {
    if (typeof obj[k] === 'string') {
      res[k] = escapeXml(obj[k]);
    } else {
      res[k] = obj[k];
    }
  }
  return res;
}

// Special Scissors Sha Renderer for LP-0007
function renderScissorsShaSvg(lang = 'lao') {
  const isLao = lang === 'lao';
  const t = isLao ? {
    id: 'LP-0007',
    name: 'ຕອນດິນສາມຫຼ່ຽມ ຄົມມີດຕັດ ທາງສາມແພ່ງ (Scissors Sha / 剪刀煞)',
    score: 'ອັນຕະລາຍ: 18 / 100',
    leftRoad: '↓ ຖະໜົນສາຍຊ້າຍ (Left Road)',
    rightRoad: '↓ ຖະໜົນສາຍຂວາ (Right Road)',
    forkPoint: 'ຈຸດຕັດທາງສາມແພ່ງ (Scissors Y-Fork)',
    acuteAngle: 'ມຸມແຫຼມ &lt; 36°',
    hazardZone: '⛔ ເຂດອັນຕະລາຍ',
    hazardDesc: 'ຫ້າມສ້າງອາຄານ',
    remedyWallPill: 'ກຳແພງຫີນ 2.2m ຕັດມຸມ',
    remedyStone: '石敢当',
    house: 'ອາຄານຫຼັກ (Main House)',
    houseDesc: 'ຕັ້ງໃນເຂດປອດໄພ (Safe Zone)',
    mingTang: '✓ ໜອງນ້ຳໝິງຖັງ (Ming Tang)',
    xuanWu: '✓ ເຕົ່າດຳ (Xuan Wu): ກຳແພງທຶບ &amp; ຕົ້ນສົນ 5 ຕົ້ນພິງຫຼັງ (ຫຼັງແໜ້ນໜາ)',
    dragonTitle: '✓ ມັງກອນຂຽວ (Dragon - ຊ້າຍ)',
    dragonLine1: '• ທາງເຂົ້າ-ອອກລົດຫຼັກ',
    dragonLine2: '• ຕົ້ນໄມ້ສູງໂອບລ້ອມ 2.5m',
    dragonLine3: '• ເສີມຍົດຖາ &amp; ບາຣະມີ',
    tigerTitle: '✓ ເສືອຂາວ (Tiger - ຂວາ)',
    tigerLine1: '• ສວນດອກໄມ້ລະດັບຕ່ຳ',
    tigerLine2: '• ຮັກສາຄວາມສະຫງົບງຽບ',
    tigerLine3: '• ຫ້າມເປີດປະຕູໃຫຍ່ກວ້າງ',
    remedyTitle: '🛡️ ມາດຕະການແກ້ໄຂ 4 ຂັ້ນຕອນ',
    remedyLine1: '1. ຕັດມຸມແຫຼມດ້ວຍກຳແພງຫີນ 2.2m',
    remedyLine2: '2. ປູກຕົ້ນສົນ/ໄຜ່ດູດແຮງລົມພຸ່ງຊົນ',
    remedyLine3: '3. ຕັ້ງສີລາໄທຊານ (石敢当) ທີ່ຫົວມຸມ',
    remedyLine4: '4. ປັບເປັນສວນຫຍ້າ/ລານຈອດລົດກາງແຈ້ງ',
    impactTitle: '⚠️ ຜົນກະທົບຄົມມີດ &amp; ໄຟພິສ',
    impactLine1: '• ພະລັງທາດໄຟຮ້ອນ (Huo Sha 火煞)',
    impactLine2: '• ອຸບັດຕິເຫດລົດພຸ່ງຊົນມຸມແຫຼມ',
    impactLine3: '• ຄະດີຄວາມ, ຜ່າຕັດ, ເລືອດຕົກ',
    impactLine4: '• ເງິນຄຳຮົ່ວໄຫຼຍ້ອນແຮງລົມພັດຕີ',
    bottomSummary: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມເປັນທາດໄຟ (火) ຖືກທາງຕັດຄືມີດຕັດ ຕ້ອງສ້າງກຳແພງຕັດມຸມປ່ຽນຮູບຊົງໃຫ້ເປັນຄາງໝູ/ສີ່ຫຼ່ຽມ.'
  } : {
    id: 'LP-0007',
    name: 'San Jiao Tu: Dui Jiao Chong (Thaj Av Peb Fab Ntse Scissors Sha)',
    score: 'PHEM: 18 / 100',
    leftRoad: '↓ Txoj Kev Sab Laug (Left Road)',
    rightRoad: '↓ Txoj Kev Sab Xis (Right Road)',
    forkPoint: 'Kev Tshuam Rab Txiab (Y-Fork)',
    acuteAngle: 'Kaum Ntse &lt; 36°',
    hazardZone: '⛔ THAJ CHAW PHEM',
    hazardDesc: 'Txwv tsis tso tsev',
    remedyWallPill: 'Phab ntsa 2.2m txiav kaum',
    remedyStone: '石敢当',
    house: 'Lub Tsev Loj (Main House)',
    houseDesc: 'Tso rau thaj chaw nyab xeeb',
    mingTang: '✓ Pas Dej Ming Tang (Kev Nyiaj)',
    xuanWu: '✓ Xuan Wu: Phab ntsa tuab &amp; ntoo thuv 5 tsob zaum roob qaum',
    dragonTitle: '✓ Zaj Ntsuab (Dragon - Sab Laug)',
    dragonLine1: '• Qhov rooj nkag tsheb loj',
    dragonLine2: '• Ntoo siab ncig 2.5m thaiv',
    dragonLine3: '• Txhawb hwj chim &amp; koob meej',
    tigerTitle: '✓ Tsov Dawb (Tiger - Sab Xis)',
    tigerLine1: '• Hav paj qis mos muag',
    tigerLine2: '• Nyob twj ywm tsis nrov',
    tigerLine3: '• Txwv tsis qhib qhov rooj loj',
    remedyTitle: '🛡️ KEV KHO 4 KAUJ RUAM',
    remedyLine1: '1. Txiav kaum ntse nrog phab ntsa 2.2m',
    remedyLine2: '2. Cog ntoo thuv/xyoob nqus cua ntsawj',
    remedyLine3: '3. Tso pob zeb Tai Shan (石敢当)',
    remedyLine4: '4. Ua vaj paj ntsuab / chaw nres tsheb',
    impactTitle: '⚠️ KEV TXOM NYEM KEV TXIAB',
    impactLine1: '• Zog Hluav Taws Kub (Huo Sha 火煞)',
    impactLine2: '• Tsheb tsoo kaum ntse ntau zaus',
    impactLine3: '• Ntsib plaub ntug, phais mob, ntshav',
    impactLine4: '• Nyiaj txiag poob vim cua ntsawj ntxeev',
    bottomSummary: 'Tswv Yim: Thaj av peb fab hluav taws raug kev txiav zoo li txiab, yuav tsum tsim phab ntsa txiav kaum kom ua 4 fab.'
  };

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- Top HUD Bar -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="70" height="24" rx="4" fill="#DC2626"/>
  <text x="53" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">${t.id}</text>
  <text x="100" y="26" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="13" fill="#F8FAFC">${t.name}</text>
  <rect x="670" y="9" width="112" height="24" rx="4" fill="#991B1B"/>
  <text x="726" y="25" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${t.score}</text>

  <!-- Left Road Polygon: Width 48px, strictly parallel to Left Property Line -->
  <polygon points="314,48 362,48 214,435 166,435" fill="url(#roadGrad)"/>
  <line x1="338" y1="48" x2="190" y2="435" stroke="#FDE047" stroke-width="2" stroke-dasharray="10,7"/>
  <line x1="314" y1="48" x2="166" y2="435" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Right Road Polygon: Width 48px, strictly parallel to Right Property Line -->
  <polygon points="438,48 486,48 634,435 586,435" fill="url(#roadGrad)"/>
  <line x1="462" y1="48" x2="610" y2="435" stroke="#FDE047" stroke-width="2" stroke-dasharray="10,7"/>
  <line x1="486" y1="48" x2="634" y2="435" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Scissors Y-Fork Collision Zone & Labels -->
  <polygon points="362,48 438,48 400,147" fill="#1E293B"/>
  <path d="M 400 48 L 400 135" stroke="#EF4444" stroke-width="3" stroke-dasharray="4,3"/>
  <polygon points="400,143 394,131 406,131" fill="#EF4444"/>
  <circle cx="400" cy="147" r="5" fill="#EF4444"/>
  
  <rect x="300" y="52" width="200" height="17" rx="3" fill="#B91C1C"/>
  <text x="400" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#FFFFFF" text-anchor="middle">⚠️ ${t.forkPoint}</text>

  <!-- Road Labels (Tilted or Horizontal Banners) -->
  <g transform="translate(230, 290) rotate(69)">
    <rect x="-70" y="-10" width="140" height="18" rx="3" fill="#0F172A" fill-opacity="0.9"/>
    <text x="0" y="3" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FDE047" text-anchor="middle">${t.leftRoad}</text>
  </g>
  <g transform="translate(570, 290) rotate(-69)">
    <rect x="-70" y="-10" width="140" height="18" rx="3" fill="#0F172A" fill-opacity="0.9"/>
    <text x="0" y="3" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FDE047" text-anchor="middle">${t.rightRoad}</text>
  </g>

  <!-- The Triangular Land Plot: Apex=(400, 147), LeftBase=(214, 435), RightBase=(586, 435) -->
  <polygon points="400,147 214,435 586,435" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
  <polygon points="400,154 220,432 580,432" fill="none" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="4,4"/>

  <!-- Acute Apex Danger Area: Apex=(400,147) to Truncation Wall=(364,203) & (436,203) -->
  <polygon points="400,147 364,203 436,203" fill="#FEE2E2"/>
  <text x="400" y="166" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#991B1B" text-anchor="middle">∠ &lt; 36°</text>
  <text x="400" y="177" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#DC2626" text-anchor="middle">${t.hazardZone}</text>
  <text x="400" y="188" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#B91C1C" text-anchor="middle">${t.hazardDesc}</text>

  <!-- Granite Truncation Wall (2.2m) at y=203 from x=364 to 436 -->
  <line x1="364" y1="203" x2="436" y2="203" stroke="#15803D" stroke-width="6"/>
  <line x1="364" y1="205" x2="436" y2="205" stroke="#166534" stroke-width="1.5"/>

  <!-- Pill badge for Truncation Wall -->
  <rect x="330" y="210" width="140" height="15" rx="3" fill="#15803D"/>
  <text x="400" y="221" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">🛡️ ${t.remedyWallPill}</text>

  <!-- Tai Shan Stone Tablet (石敢当) at apex (x=400, y=149) -->
  <rect x="388" y="141" width="24" height="11" rx="2" fill="#334155"/>
  <text x="400" y="149" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#F8FAFC" text-anchor="middle">石敢当</text>

  <!-- Green Buffer Planting between Wall and Safe Zone -->
  <circle cx="376" cy="232" r="7" fill="#15803D"/>
  <circle cx="392" cy="230" r="8" fill="#166534"/>
  <circle cx="408" cy="230" r="8" fill="#166534"/>
  <circle cx="424" cy="232" r="7" fill="#15803D"/>

  <!-- Semicircular Ming Tang Water Pond (Front Courtyard) -->
  <path d="M 368 262 A 32 18 0 0 0 432 262 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
  <text x="400" y="258" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${t.mingTang}</text>

  <!-- SAFE RESIDENTIAL QUARDRANT: Main House (x=335, y=278, w=130, h=65) -->
  <rect x="335" y="278" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
  <polygon points="325,278 400,254 475,278" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
  <text x="400" y="306" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${t.house}</text>
  <text x="400" y="323" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${t.houseDesc}</text>
  <rect x="392" y="337" width="16" height="6" fill="#1E293B"/>

  <!-- Compass Axis Badge on House Right -->
  <g transform="translate(478, 282)">
    <rect x="0" y="0" width="36" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
    <text x="18" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
    <line x1="18" y1="17" x2="18" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
    <polygon points="18,36 15,30 21,30" fill="#0284C7"/>
    <text x="18" y="46" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
  </g>

  <!-- Rear Boundary Wall & Xuan Wu Defensive Pines -->
  <line x1="220" y1="430" x2="580" y2="430" stroke="#15803D" stroke-width="5"/>
  <circle cx="270" cy="418" r="9" fill="#14532D"/>
  <circle cx="330" cy="416" r="10" fill="#166534"/>
  <circle cx="400" cy="414" r="11" fill="#14532D"/>
  <circle cx="470" cy="416" r="10" fill="#166534"/>
  <circle cx="530" cy="418" r="9" fill="#14532D"/>

  <!-- Xuan Wu Banner at Rear Boundary -->
  <rect x="230" y="386" width="340" height="17" rx="3" fill="#14532D"/>
  <text x="400" y="398" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#F0FDF4" text-anchor="middle">${t.xuanWu}</text>

  <!-- Left Dragon Driveway & Gate -->
  <path d="M 248 375 C 275 355 310 340 335 325" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="4,3"/>
  <rect x="228" y="367" width="55" height="15" rx="2" fill="#15803D"/>
  <text x="255" y="377" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">🚪 ປະຕູຮົ້ວ</text>
  <line x1="210" y1="385" x2="232" y2="375" stroke="#F59E0B" stroke-width="2"/>
  <polygon points="234,374 227,370 228,378" fill="#F59E0B"/>

  <!-- Left Side Top Card: Green Dragon (X=18..182, Y=48..200) -->
  <rect x="18" y="48" width="164" height="152" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="48" width="164" height="24" rx="6" fill="#16A34A"/>
  <text x="100" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${t.dragonTitle}</text>
  <text x="26" y="88" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${t.dragonLine1}</text>
  <text x="26" y="108" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${t.dragonLine2}</text>
  <text x="26" y="128" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${t.dragonLine3}</text>
  <rect x="26" y="145" width="148" height="42" rx="4" fill="#DCFCE7"/>
  <text x="100" y="161" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">ທາງລົດເຂົ້າ: ຝັ່ງມັງກອນຂຽວ</text>
  <text x="100" y="176" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#166534" text-anchor="middle">✓ ເປີດຮັບພະລັງ Sheng Qi ປອດໄພ</text>

  <!-- Left Side Bottom Card: White Tiger (X=18..182, Y=206..442) -->
  <rect x="18" y="206" width="164" height="236" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="206" width="164" height="24" rx="6" fill="#D97706"/>
  <text x="100" y="222" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${t.tigerTitle}</text>
  <text x="26" y="246" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${t.tigerLine1}</text>
  <text x="26" y="266" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${t.tigerLine2}</text>
  <text x="26" y="286" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${t.tigerLine3}</text>
  
  <rect x="26" y="306" width="148" height="124" rx="4" fill="#FEF3C7"/>
  <text x="100" y="322" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#92400E" text-anchor="middle">☯️ ທາດກວ້າ &amp; ຄວາມຖືກຊາຕາ</text>
  <text x="32" y="340" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F">• ທາດປະຈຳຮູບ: ໄຟຮ້ອນ (火)</text>
  <text x="32" y="356" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F">• ✗ ບໍ່ຖືກກັບ: ທາດທອງ &amp; ໄມ້</text>
  <text x="32" y="372" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F">• ຫ້າມຄົນກວ້າ 6, 7, 3, 4 ຢູ່</text>
  <text x="32" y="388" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F">• ຕ້ອງຕັດມຸມປ່ຽນຮູບຊົງ</text>
  <text x="32" y="404" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F">• ຄົນທາດດິນ (2, 8) ພໍຢູ່ໄດ້ຖ້າແກ້</text>
  <text x="100" y="422" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#B45309" text-anchor="middle">ໄຟເຜົາຜານ: ຜິດຖຽງ, ເລືອດຕົກ</text>

  <!-- Right Side Top Card: Impact (X=618..782, Y=48..200) -->
  <rect x="618" y="48" width="164" height="152" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="48" width="164" height="24" rx="6" fill="#DC2626"/>
  <text x="700" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${t.impactTitle}</text>
  <text x="626" y="88" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#991B1B">${t.impactLine1}</text>
  <text x="626" y="108" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#991B1B">${t.impactLine2}</text>
  <text x="626" y="128" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#991B1B">${t.impactLine3}</text>
  <text x="626" y="148" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#991B1B">${t.impactLine4}</text>
  <rect x="626" y="160" width="148" height="32" rx="4" fill="#FEE2E2"/>
  <text x="700" y="174" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#B91C1C" text-anchor="middle">ທິດຫົວຕຽງ: ພິງຝາທຶບດ່ານຫຼັງ</text>
  <text x="700" y="186" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#DC2626" text-anchor="middle">ຫ້າມຫັນຫົວໄປທາງມຸມແຫຼມ</text>

  <!-- Right Side Bottom Card: Remedies (X=618..782, Y=206..442) -->
  <rect x="618" y="206" width="164" height="236" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="206" width="164" height="24" rx="6" fill="#9333EA"/>
  <text x="700" y="222" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${t.remedyTitle}</text>
  <text x="626" y="246" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${t.remedyLine1}</text>
  <text x="626" y="266" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${t.remedyLine2}</text>
  <text x="626" y="286" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${t.remedyLine3}</text>
  <text x="626" y="306" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${t.remedyLine4}</text>

  <rect x="626" y="326" width="148" height="104" rx="4" fill="#F3E8FF"/>
  <text x="700" y="342" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#7E22CE" text-anchor="middle">ຂໍ້ຫ້າມເດັດຂາດ (Taboos)</text>
  <text x="700" y="358" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">• ຫ້າມສ້າງຫ້ອງນອນໃນມຸມແຫຼມ</text>
  <text x="700" y="372" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມ</text>
  <text x="700" y="386" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">• ຫ້າມມີໜອງນ້ຳກົງມຸມແຫຼມ</text>
  <text x="700" y="400" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">• ຫ້າມປ່ອຍໃຫ້ມຸມແຫຼມຮົກເຮື້ອ</text>
  <text x="700" y="418" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#7E22CE" text-anchor="middle">✓ ດັດແປງເປັນສວນສີຂຽວ</text>

  <!-- Bottom Doctrinal Summary -->
  <rect x="18" y="448" width="764" height="26" rx="5" fill="#1E293B"/>
  <text x="400" y="465" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="9.5" fill="#F8FAFC" text-anchor="middle">${t.bottomSummary}</text>
</svg>
`;
}

// Unified Masterclass SVG Template for LP-0001..LP-0016 (except LP-0007)
function renderMasterPlotSvg(plot, lang = 'lao') {
  if (plot.id === 'LP-0007') {
    return renderScissorsShaSvg(lang);
  }

  const isLao = lang === 'lao';

  const name = isLao ? plot.nameLao : plot.nameHmong;
  const elementBadge = isLao ? plot.elementLao : plot.elementHmong;
  const scoreText = isLao ? 
    (plot.isGood ? `ດີເລີດ: ${plot.score} / 100` : `ອັນຕະລາຍ: ${plot.score} / 100`) :
    (plot.isGood ? `ZOO: ${plot.score} / 100` : `PHEM: ${plot.score} / 100`);
  const scoreColor = plot.isGood ? '#16A34A' : '#DC2626';
  const scoreBg = plot.isGood ? '#14532D' : '#991B1B';

  const ent = isLao ? escapeDict(plot.entranceLao) : escapeDict(plot.entranceHmong);
  const gua = isLao ? escapeDict(plot.guaLao) : escapeDict(plot.guaHmong);
  const hse = isLao ? escapeDict(plot.houseLao) : escapeDict(plot.houseHmong);
  const rem = isLao ? escapeDict(plot.remedyLao) : escapeDict(plot.remedyHmong);

  const summary = isLao ? escapeXml(plot.summaryLao) : escapeXml(plot.summaryHmong);
  const roadLabel = isLao ? 'ຖະໜົນໃຫຍ່ດ້ານໜ້າ (Facing Main Road)' : 'Kev Loj Pem Hauv Ntej (Main Road)';
  const tabooHeader = isLao ? 'ຂໍ້ຫ້າມເດັດຂາດ (Taboos)' : 'Cov Lus Txwv (Taboos)';
  const bedHeadLabel = isLao ? 'ທິດຫົວຕຽງ:' : 'Taub Hau Pw:';
  const bedHeadSub = isLao ? 'ພິງຝາທຶບ ຫຼີກລ່ຽງກົງປ່ອງຢ້ຽມ' : 'Phab ntsa tuab tsis ncaj qhov rai';

  const centerSvg = plot.renderCenter ? plot.renderCenter(lang, escapeXml) : '';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- ========================================================================= -->
  <!-- TOP HUD BAR (Y=0 to 42) -->
  <!-- ========================================================================= -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  
  <!-- ID Badge -->
  <rect x="18" y="9" width="70" height="24" rx="4" fill="${scoreColor}"/>
  <text x="53" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">${escapeXml(plot.id)}</text>
  
  <!-- Name -->
  <text x="100" y="26" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="12.5" fill="#F8FAFC">${escapeXml(name)}</text>
  
  <!-- Element Badge -->
  <rect x="495" y="9" width="165" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="577" y="25" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#38BDF8" text-anchor="middle">${escapeXml(elementBadge)}</text>

  <!-- Score Badge -->
  <rect x="670" y="9" width="112" height="24" rx="4" fill="${scoreBg}"/>
  <text x="726" y="25" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${escapeXml(scoreText)}</text>

  <!-- ========================================================================= -->
  <!-- LEFT COLUMN: CARDS (X=18 to 182) -->
  <!-- ========================================================================= -->

  <!-- Top-Left Card: Entrance & Driveway (Y=48 to 200) -->
  <rect x="18" y="48" width="164" height="152" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="48" width="164" height="24" rx="6" fill="#16A34A"/>
  <text x="100" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${ent.title}</text>
  <text x="26" y="88" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l1}</text>
  <text x="26" y="108" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l2}</text>
  <text x="26" y="128" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l3}</text>
  <text x="26" y="148" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l4}</text>
  
  <rect x="26" y="158" width="148" height="34" rx="4" fill="#DCFCE7"/>
  <text x="100" y="171" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${ent.sub1}</text>
  <text x="100" y="184" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#166534" text-anchor="middle">${ent.sub2}</text>

  <!-- Bottom-Left Card: Gua & Compatibility (Y=206 to 442) -->
  <rect x="18" y="206" width="164" height="236" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="206" width="164" height="24" rx="6" fill="#D97706"/>
  <text x="100" y="222" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${gua.title}</text>
  <text x="26" y="246" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l1}</text>
  <text x="26" y="266" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l2}</text>
  <text x="26" y="286" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l3}</text>
  <text x="26" y="306" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l4}</text>
  <text x="26" y="326" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l5}</text>
  
  <rect x="26" y="346" width="148" height="86" rx="4" fill="#FEF3C7"/>
  <text x="100" y="364" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#92400E" text-anchor="middle">${gua.sub1}</text>
  <text x="100" y="382" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F" text-anchor="middle">${gua.sub2}</text>
  <text x="100" y="402" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#B45309" text-anchor="middle">ກົດເກນ 5 ທາດ ແລະ ເຂັມທິດ 8 ທິດ</text>
  <text x="100" y="418" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#D97706" text-anchor="middle">✓ ສົມດຸນພະລັງງານທຳມະຊາດ</text>

  <!-- ========================================================================= -->
  <!-- RIGHT COLUMN: CARDS (X=618 to 782) -->
  <!-- ========================================================================= -->

  <!-- Top-Right Card: House Positioning & Facing (Y=48 to 200) -->
  <rect x="618" y="48" width="164" height="152" rx="6" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="48" width="164" height="24" rx="6" fill="#0284C7"/>
  <text x="700" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${hse.title}</text>
  <text x="626" y="88" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l1}</text>
  <text x="626" y="108" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l2}</text>
  <text x="626" y="128" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l3}</text>
  <text x="626" y="148" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l4}</text>
  
  <rect x="626" y="158" width="148" height="34" rx="4" fill="#E0F2FE"/>
  <text x="700" y="171" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${bedHeadLabel} ${hse.bed}</text>
  <text x="700" y="184" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#0284C7" text-anchor="middle">${bedHeadSub}</text>

  <!-- Bottom-Right Card: Remedies & Taboos (Y=206 to 442) -->
  <rect x="618" y="206" width="164" height="236" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="206" width="164" height="24" rx="6" fill="#9333EA"/>
  <text x="700" y="222" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${rem.title}</text>
  <text x="626" y="246" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l1}</text>
  <text x="626" y="266" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l2}</text>
  <text x="626" y="286" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l3}</text>
  <text x="626" y="306" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l4}</text>

  <rect x="626" y="326" width="148" height="106" rx="4" fill="#F3E8FF"/>
  <text x="700" y="342" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#7E22CE" text-anchor="middle">${tabooHeader}</text>
  <text x="700" y="360" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">${rem.t1}</text>
  <text x="700" y="376" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">${rem.t2}</text>
  <text x="700" y="392" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">${rem.t3}</text>
  <text x="700" y="418" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#7E22CE" text-anchor="middle">✓ ຮັກສາຄວາມສະອາດ &amp; ແສງສະຫວ່າງ</text>

  <!-- ========================================================================= -->
  <!-- CENTER: THE PLOT ARCHITECTURAL DRAWING (X=195 to 605, Y=48 to 384) -->
  <!-- ========================================================================= -->
  <g>
    ${centerSvg}
  </g>

  <!-- ========================================================================= -->
  <!-- MAIN ROADWAY (Y=388 to 442) -->
  <!-- ========================================================================= -->
  <rect x="0" y="388" width="800" height="54" fill="url(#roadGrad)"/>
  <line x1="0" y1="415" x2="800" y2="415" stroke="#FDE047" stroke-width="2" stroke-dasharray="16,10"/>
  <line x1="0" y1="392" x2="800" y2="392" stroke="#F8FAFC" stroke-width="1" stroke-dasharray="8,6"/>
  <text x="400" y="420" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#F8FAFC" text-anchor="middle">&#10140; ${escapeXml(roadLabel)} &#10140;</text>

  <!-- ========================================================================= -->
  <!-- BOTTOM DOCTRINAL SUMMARY CARD (Y=448 to 474) -->
  <!-- ========================================================================= -->
  <rect x="18" y="448" width="764" height="26" rx="5" fill="#1E293B"/>
  <text x="400" y="465" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="9.5" fill="#F8FAFC" text-anchor="middle">${summary}</text>
</svg>
`;
}

// Resvg Configuration with pure Lao OpenType fonts
const resvgOpts = {
  fitTo: { mode: 'width', value: 800 },
  font: {
    defaultFontFamily: 'Phetsarath OT',
    fontFiles: [
      path.resolve('asset/fonts/Phetsarath-OT.ttf'),
      path.resolve('asset/fonts/Phetsarath-Bold.ttf'),
      path.resolve('asset/fonts/NotoSansLao-Bold.ttf')
    ],
    loadSystemFonts: true
  }
};

// Target output directories
const outDirs = [
  'book_figures/cases_6126',
  'hmong/img',
  'lao/img',
  'asset/book_figures/clean_hmong'
];

outDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const artifactDir = 'C:/Users/chitc/.gemini/antigravity/brain/2bd06cba-8314-47a0-923b-83c5e8bd1b84';

console.log('🚀 Starting batch rendering of all 16 Masterclass Land Plots...');

for (const plot of allPlots) {
  console.log(`\nProcessing ${plot.id}: ${plot.nameLao}...`);

  // Render Lao Version
  const svgLao = renderMasterPlotSvg(plot, 'lao');
  const resvgL = new Resvg(svgLao, resvgOpts);
  const pngLao = resvgL.render().asPng();

  // Render Hmong Version
  const svgHmong = renderMasterPlotSvg(plot, 'hmong');
  const resvgH = new Resvg(svgHmong, resvgOpts);
  const pngHmong = resvgH.render().asPng();

  // 1. Save Lao PNG to lao/img/
  fs.writeFileSync(`lao/img/${plot.id}.png`, pngLao);

  // 2. Save Hmong PNG to hmong/img/
  fs.writeFileSync(`hmong/img/${plot.id}.png`, pngHmong);

  // 3. Save to book_figures/cases_6126/ (Lao master for primary book reference)
  fs.writeFileSync(`book_figures/cases_6126/${plot.id}.png`, pngLao);

  // 4. Save to asset/book_figures/clean_hmong/ (Hmong for RPA book)
  fs.writeFileSync(`asset/book_figures/clean_hmong/${plot.id}.png`, pngHmong);

  // Also write LP-0007, LP-0009, LP-0010, LP-0012, LP-0015 to artifactDir for inspection
  if (['LP-0001', 'LP-0007', 'LP-0009', 'LP-0010', 'LP-0012', 'LP-0015', 'LP-0016'].includes(plot.id)) {
    fs.writeFileSync(path.join(artifactDir, `${plot.id}-lao-masterclass.png`), pngLao);
    fs.writeFileSync(path.join(artifactDir, `${plot.id}-hmong-masterclass.png`), pngHmong);
  }

  console.log(`  ✓ Successfully rendered ${plot.id} (Lao & Hmong)`);
}

console.log('\n🎉 ALL 16 MASTERCLASS LAND PLOTS RENDERED AND SAVED SUCCESSFULLY!');
