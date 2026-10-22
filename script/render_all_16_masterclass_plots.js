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

function sanitizeSvgText(text) {
  if (!text) return '';
  return String(text)
    .replace(/[🚪]/g, '')
    .replace(/[☯️☯]/g, '')
    .replace(/[🧭]/g, '')
    .replace(/[🛡️🛡]/g, '')
    .replace(/[⚠️⚠]/g, '!')
    .replace(/[⛔]/g, '[X]')
    .replace(/[🛏️🛏]/g, '')
    .replace(/[💡]/g, '')
    .replace(/[🌲🌳]/g, '')
    .replace(/[🌊]/g, '')
    .replace(/[⛰️⛰]/g, '')
    .replace(/[🏡🏠]/g, '')
    .replace(/[✓✔]/g, '✓')
    .replace(/[✗✘]/g, '✗')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  const cleaned = sanitizeSvgText(unsafe);
  return cleaned
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

// Smart Auto-Wrapping Bottom Doctrinal Summary Bar Renderer
function renderSummaryBarSvg(summary) {
  if (!summary) return '';
  if (summary.length <= 95) {
    return `
  <!-- Bottom Doctrinal Summary -->
  <rect x="12" y="446" width="776" height="27" rx="5" fill="#1E293B" stroke="#334155" stroke-width="0.8"/>
  <text x="400" y="463" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.2" fill="#F8FAFC" text-anchor="middle">${summary}</text>`;
  }
  
  // Split into 2 lines around middle punctuation or space
  const mid = Math.floor(summary.length / 2);
  let splitIdx = -1;
  for (let i = 0; i < 30; i++) {
    if (summary[mid + i] === '.' || summary[mid + i] === ',' || summary[mid + i] === ' ') {
      splitIdx = mid + i + 1;
      break;
    }
    if (summary[mid - i] === '.' || summary[mid - i] === ',' || summary[mid - i] === ' ') {
      splitIdx = mid - i + 1;
      break;
    }
  }
  if (splitIdx === -1) splitIdx = mid;
  
  const l1 = summary.substring(0, splitIdx).trim();
  const l2 = summary.substring(splitIdx).trim();

  return `
  <!-- Bottom Doctrinal Summary -->
  <rect x="12" y="445" width="776" height="29" rx="5" fill="#1E293B" stroke="#334155" stroke-width="0.8"/>
  <text x="400" y="457" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${l1}</text>
  <text x="400" y="469" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#CBD5E1" text-anchor="middle">${l2}</text>`;
}

// Special Scissors Sha Renderer for LP-0007
function renderScissorsShaSvg(lang = 'lao') {
  const isLao = lang === 'lao';
  const rawT = isLao ? {
    id: 'LP-0007',
    name: 'ຕອນດິນສາມຫຼ່ຽມ ຄົມມີດຕັດ ທາງສາມແພ່ງ (Scissors Sha / ມີດຕັດສາມແພ່ງ)',
    score: 'ອັນຕະລາຍ: 18 / 100',
    leftRoad: '↓ ຖະໜົນສາຍຊ້າຍ (Left Road)',
    rightRoad: '↓ ຖະໜົນສາຍຂວາ (Right Road)',
    forkPoint: 'ຈຸດຕັດທາງສາມແພ່ງ (Scissors Fork)',
    acuteAngle: 'ມຸມແຫຼມ < 36°',
    hazardZone: 'ເຂດມຸມແຫຼມອັນຕະລາຍ',
    hazardDesc: 'ຫ້າມສ້າງເຮືອນ',
    remedyWallPill: 'ກຳແພງຫີນ 2.2m ຕັດມຸມ',
    remedyStone: 'Tai Shan',
    house: 'ອາຄານຫຼັກ (Main House)',
    houseDesc: 'ຕັ້ງໃນເຂດປອດໄພ (Safe Zone)',
    mingTang: 'ໜອງນ້ຳໝິງຖັງ (Ming Tang)',
    xuanWu: 'ເຕົ່າດຳ (Xuan Wu): ຕົ້ນສົນ 5 ຕົ້ນພິງຫຼັງແໜ້ນ',
    dragonTitle: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
    dragonLine1: '• ປະຕູຮົ້ວ: ຕັ້ງຝັ່ງມັງກອນ ຫ່າງມຸມແຫຼມ >15m',
    dragonLine2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
    dragonLine3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
    dragonSub1: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
    dragonSub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ປອດໄພສູງ',
    tigerTitle: 'ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
    tigerLine1: '• ທາດປະຈຳຮູບ: ທາດໄຟ (ທາດໄຟ)',
    tigerLine2: '• ລັກສະນະ: ຄົມມີດ, ໄຟພິສ',
    tigerLine3: '• ✗ ບໍ່ຖືກກັບ: ທາດທອງ & ໄມ້',
    tigerLine4: '• ຫ້າມຄົນກວ້າ: 6, 7, 3, 4',
    tigerLine5: '• ✓ ຖືກກັບ: ຄົນທາດດິນ (2, 8)',
    guaSub1: 'ກົດເກນທາດໄຟຮ້ອນ (Huo Sha)',
    guaSub2: 'ໄຟຫຼອມທອງ: ຜ່າຕັດ, ອຸບັດຕິເຫດ',
    guaSub3: 'ຕ້ອງຕັດມຸມປ່ຽນເປັນ 4 ຫຼ່ຽມ',
    guaSub4: '✓ ປັບພະລັງໃຫ້ສົມດຸນ',
    remedyTitle: 'ມາດຕະການແກ້ໄຂ 4 ຂັ້ນຕອນ',
    remedyLine1: '1. ສ້າງກຳແພງ 2.2m ຕັດມຸມ',
    remedyLine2: '2. ປູກຕົ້ນສົນ/ໄຜ່ດູດແຮງລົມ',
    remedyLine3: '3. ຕັ້ງສີລາໄທຊານ (Tai Shan)',
    remedyLine4: '4. ປັບມຸມແຫຼມເປັນສວນຫຍ້າ',
    tabooTitle: 'ຂໍ້ຫ້າມເດັດຂາດ (Taboos)',
    taboo1: '• ຫ້າມສ້າງຫ້ອງນອນໃນມຸມແຫຼມ',
    taboo2: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມ',
    taboo3: '• ຫ້າມມີໜອງນ້ຳກົງມຸມແຫຼມ',
    taboo4: '✓ ປ່ຽນເປັນເຂດສວນກັນຊົນ',
    impactTitle: 'ຜົນກະທົບຄົມມີດ & ໄຟພິສ',
    impactLine1: '• ພະລັງທາດໄຟຮ້ອນ (Huo Sha)',
    impactLine2: '• ລົດພຸ່ງຊົນມຸມແຫຼມເລື້ອຍໆ',
    impactLine3: '• ເກີດຄະດີຄວາມ, ຜ່າຕັດ',
    impactLine4: '• ເງິນຄຳຮົ່ວໄຫຼຍ້ອນແຮງລົມ',
    bedTitle: 'ທິດຫົວຕຽງ: ພິງຝາທຶບ',
    bedSub: 'ຫ້າມຫັນຫົວໄປຫາມຸມແຫຼມ',
    bottomSummary: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມເປັນທາດໄຟ (ທາດໄຟ) ຖືກທາງຕັດຄືມີດຕັດ ຕ້ອງສ້າງກຳແພງຕັດມຸມປ່ຽນຮູບຊົງໃຫ້ເປັນຄາງໝູ/ສີ່ຫຼ່ຽມ.'
  } : {
    id: 'LP-0007',
    name: 'San Jiao Tu: Dui Jiao Chong (Thaj Av Peb Fab Ntse Scissors Sha)',
    score: 'PHEM: 18 / 100',
    leftRoad: '↓ Txoj Kev Sab Laug (Left Road)',
    rightRoad: '↓ Txoj Kev Sab Xis (Right Road)',
    forkPoint: 'Kev Tshuam Rab Txiab (Y-Fork)',
    acuteAngle: 'Kaum Ntse < 36°',
    hazardZone: 'THAJ CHAW PHEM',
    hazardDesc: 'Txwv tsis tso tsev',
    remedyWallPill: 'Phab ntsa 2.2m txiav kaum',
    remedyStone: 'Tai Shan',
    house: 'Lub Tsev Loj (Main House)',
    houseDesc: 'Tso rau thaj chaw nyab xeeb',
    mingTang: 'Pas Dej Ming Tang (Kev Nyiaj)',
    xuanWu: 'Xuan Wu: Ntoo thuv 5 tsob zaum roob qaum',
    dragonTitle: '🚪 QHOV ROOJ & THAJ TSHAV',
    dragonLine1: '• Qhov rooj vag: Sab zaj, deb kaum ntse >15m',
    dragonLine2: '• Kev tsheb: Nkhaus mos muag, txwv ncaj tua',
    dragonLine3: '• Tsis muaj dej: Tshav xyoob ntsuab kaj sau zog',
    dragonSub1: '• Yog muaj dej: Dej ntshiab puag ncig semicircular',
    dragonSub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)',
    tigerTitle: 'Zog Tsib Yam & Neeg Haum',
    tigerLine1: '• Zog thaj av: Hluav Taws (Fire)',
    tigerLine2: '• Ciam av: Riam hlais, Huo Sha',
    tigerLine3: '• ✗ Tsis haum: Neeg Kub & Ntoo',
    tigerLine4: '• Txwv tsis haum: Gua 6, 7, 3, 4',
    tigerLine5: '• ✓ Haum: Neeg Zog Av (2, 8)',
    guaSub1: 'Zog Hluav Taws Kub (Huo Sha)',
    guaSub2: 'Hluav taws hlawv kub: Phais mob',
    guaSub3: 'Yuav tsum txiav kaum ua 4 fab',
    guaSub4: '✓ Kho kom lub zog sib npaug',
    remedyTitle: 'KEV KHO 4 KAUJ RUAM',
    remedyLine1: '1. Phab ntsa 2.2m txiav kaum',
    remedyLine2: '2. Cog ntoo thuv nqus cua',
    remedyLine3: '3. Tso pob zeb Tai Shan',
    remedyLine4: '4. Ua vaj paj / chaw nres tsheb',
    tabooTitle: 'Cov Kev Txwv (Taboos)',
    taboo1: '• Txwv tsis pw rau kaum ntse',
    taboo2: '• Txwv qhib rooj rau kaum ntse',
    taboo3: '• Txwv pas dej rau kaum ntse',
    taboo4: '✓ Ua vaj paj ntsuab tiv thaiv',
    impactTitle: 'KEV TXOM NYEM KEV TXIAB',
    impactLine1: '• Zog Hluav Taws Kub (Huo Sha)',
    impactLine2: '• Tsheb tsoo kaum ntse ntau zaus',
    impactLine3: '• Ntsib plaub ntug, phais mob',
    impactLine4: '• Nyiaj txiag poob vim cua ntsawj',
    bedTitle: 'Taub Hau Pw: Phab Ntsa Tuab',
    bedSub: 'Txwv tsis tig mus rau kaum ntse',
    bottomSummary: 'Tswv Yim: Thaj av peb fab hluav taws raug kev txiav zoo li txiab, yuav tsum tsim phab ntsa txiav kaum kom ua 4 fab.'
  };

  const t = escapeDict(rawT);

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

  <!-- Background -->
  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- Top HUD Bar -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="70" height="24" rx="4" fill="#DC2626"/>
  <text x="53" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">${t.id}</text>
  <text x="100" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="12.5" fill="#F8FAFC">${t.name}</text>
  <rect x="670" y="9" width="112" height="24" rx="4" fill="#991B1B"/>
  <text x="726" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${t.score}</text>

  <!-- ========================================================================= -->
  <!-- LEFT COLUMN: CARDS (X=18 to 182) -->
  <!-- ========================================================================= -->
  <rect x="12" y="48" width="174" height="150" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#16A34A"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${t.dragonTitle}</text>
  <text x="20" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#14532D">${t.dragonLine1}</text>
  <text x="26" y="106" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#14532D">${t.dragonLine2}</text>
  <text x="26" y="124" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#14532D">${t.dragonLine3}</text>
  <rect x="18" y="138" width="162" height="52" rx="4" fill="#DCFCE7"/>
  <text x="100" y="156" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${t.dragonSub1}</text>
  <text x="100" y="174" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.2" fill="#166534" text-anchor="middle">${t.dragonSub2}</text>

  <rect x="12" y="204" width="174" height="240" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="204" width="164" height="24" rx="6" fill="#D97706"/>
  <text x="100" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${t.tigerTitle}</text>
  <text x="26" y="242" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#78350F">${t.tigerLine1}</text>
  <text x="26" y="259" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#78350F">${t.tigerLine2}</text>
  <text x="26" y="276" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#78350F">${t.tigerLine3}</text>
  <text x="26" y="293" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#78350F">${t.tigerLine4}</text>
  <text x="26" y="310" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#78350F">${t.tigerLine5}</text>
  
  <rect x="18" y="324" width="162" height="110" rx="4" fill="#FEF3C7"/>
  <text x="100" y="342" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.8" fill="#92400E" text-anchor="middle">${t.guaSub1}</text>
  <text x="100" y="360" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.2" fill="#78350F" text-anchor="middle">${t.guaSub2}</text>
  <text x="100" y="378" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.2" fill="#78350F" text-anchor="middle">${t.guaSub3}</text>
  <text x="100" y="398" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#B45309" text-anchor="middle">${t.guaSub4}</text>

  <!-- ========================================================================= -->
  <!-- RIGHT COLUMN: CARDS (X=618 to 782) -->
  <!-- ========================================================================= -->
  <rect x="614" y="48" width="174" height="150" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="700" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${t.impactTitle}</text>
  <text x="622" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${t.impactLine1}</text>
  <text x="626" y="106" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${t.impactLine2}</text>
  <text x="626" y="124" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${t.impactLine3}</text>
  <text x="626" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${t.impactLine4}</text>
  <rect x="620" y="152" width="162" height="38" rx="4" fill="#FEE2E2"/>
  <text x="700" y="167" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#B91C1C" text-anchor="middle">${t.bedTitle}</text>
  <text x="700" y="181" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.2" fill="#DC2626" text-anchor="middle">${t.bedSub}</text>

  <rect x="614" y="204" width="174" height="240" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="204" width="164" height="24" rx="6" fill="#9333EA"/>
  <text x="700" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${t.remedyTitle}</text>
  <text x="626" y="242" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#6B21A8">${t.remedyLine1}</text>
  <text x="626" y="259" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#6B21A8">${t.remedyLine2}</text>
  <text x="626" y="276" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#6B21A8">${t.remedyLine3}</text>
  <text x="626" y="293" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#6B21A8">${t.remedyLine4}</text>
  
  <rect x="620" y="324" width="162" height="110" rx="4" fill="#F3E8FF"/>
  <text x="700" y="342" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.8" fill="#7E22CE" text-anchor="middle">${t.tabooTitle}</text>
  <text x="630" y="360" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.2" fill="#9333EA">${t.taboo1}</text>
  <text x="630" y="377" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.2" fill="#9333EA">${t.taboo2}</text>
  <text x="630" y="394" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.2" fill="#9333EA">${t.taboo3}</text>
  <text x="700" y="418" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#7E22CE" text-anchor="middle">${t.taboo4}</text>

  <!-- ========================================================================= -->
  <!-- CENTER: MASTERCLASS ARCHITECTURAL SITE PLAN (X=190 to X=610) -->
  <!-- ========================================================================= -->

  <!-- Left Road Polygon (Width=40px, strictly within X=195..360, parallel to left plot boundary) -->
  <!-- Plot left edge: (400,95) to (255,410). Left road outer: (360,48) to (200,410) -->
  <polygon points="360,48 400,48 255,410 205,410" fill="url(#roadGrad)"/>
  <line x1="380" y1="48" x2="230" y2="410" stroke="#FDE047" stroke-width="2" stroke-dasharray="10,6"/>
  <line x1="205" y1="410" x2="360" y2="48" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Right Road Polygon (Width=40px, strictly within X=440..605, parallel to right plot boundary) -->
  <!-- Plot right edge: (400,95) to (545,410). Right road outer: (440,48) to (595,410) -->
  <polygon points="400,48 440,48 595,410 545,410" fill="url(#roadGrad)"/>
  <line x1="420" y1="48" x2="570" y2="410" stroke="#FDE047" stroke-width="2" stroke-dasharray="10,6"/>
  <line x1="595" y1="410" x2="440" y2="48" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Y-Fork Split Island & Traffic Warning -->
  <rect x="315" y="52" width="170" height="20" rx="4" fill="#B91C1C"/>
  <text x="400" y="66" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#FFFFFF" text-anchor="middle">! ${t.forkPoint}</text>

  <!-- Left & Right Road Labels (Placed at Y=160 completely clear of the house) -->
  <rect x="205" y="155" width="105" height="18" rx="3" fill="#0F172A" fill-opacity="0.92" stroke="#F59E0B" stroke-width="1"/>
  <text x="257" y="168" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FDE047" text-anchor="middle">${t.leftRoad}</text>

  <rect x="490" y="155" width="105" height="18" rx="3" fill="#0F172A" fill-opacity="0.92" stroke="#F59E0B" stroke-width="1"/>
  <text x="542" y="168" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FDE047" text-anchor="middle">${t.rightRoad}</text>

  <!-- THE TRIANGULAR PLOT: Apex=(400, 95), LeftBase=(255, 410), RightBase=(545, 410) -->
  <!-- Property Ground Fill -->
  <polygon points="400,95 255,410 545,410" fill="#FEF2F2"/>
  <polygon points="400,102 262,406 538,406" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- PHYSICAL BOUNDARY FENCE WITH ACTUAL GATE OPENING ON LEFT FENCE -->
  <!-- Base Fence: (255,410) to (545,410) -->
  <line x1="255" y1="410" x2="545" y2="410" stroke="#DC2626" stroke-width="3"/>
  <!-- Right Fence: (545,410) up to Apex (400,95) -->
  <line x1="545" y1="410" x2="400" y2="95" stroke="#DC2626" stroke-width="3"/>
  <!-- Left Fence Upper Segment: Apex (400,95) down to Upper Gate Pillar (292,330) -->
  <line x1="400" y1="95" x2="292" y2="330" stroke="#DC2626" stroke-width="3"/>
  <!-- Left Fence Lower Segment: Lower Gate Pillar (276,365) down to Base (255,410) -->
  <line x1="276" y1="365" x2="255" y2="410" stroke="#DC2626" stroke-width="3"/>

  <!-- GATE POSTS ON THE FENCE LINE -->
  <rect x="288" y="326" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
  <rect x="272" y="361" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
  <!-- OPEN GATE DOORS (Swinging inward towards courtyard) -->
  <line x1="292" y1="330" x2="306" y2="338" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="276" y1="365" x2="290" y2="357" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Apex Acute Hazard Zone: from (400,95) down to Y=145 -->
  <polygon points="400,95 375,145 425,145" fill="#FEE2E2"/>
  <text x="400" y="116" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#991B1B" text-anchor="middle">${t.acuteAngle}</text>
  <text x="400" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#DC2626" text-anchor="middle">${t.hazardZone}</text>
  <text x="400" y="139" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#B91C1C" text-anchor="middle">${t.hazardDesc}</text>

  <!-- Tai Shan Stone Tablet at Apex (x=400, y=98) -->
  <rect x="375" y="96" width="50" height="13" rx="2" fill="#334155" stroke="#94A3B8" stroke-width="0.8"/>
  <text x="400" y="106" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>

  <!-- Granite Truncation Wall (Remedy) at Y=145 from X=372 to X=428 -->
  <line x1="370" y1="145" x2="430" y2="145" stroke="#15803D" stroke-width="6"/>
  <line x1="370" y1="147" x2="430" y2="147" stroke="#166534" stroke-width="1.5"/>
  <rect x="330" y="151" width="140" height="15" rx="3" fill="#15803D"/>
  <text x="400" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">[+] ${t.remedyWallPill}</text>

  <!-- Green Buffer Planting Behind Wall (Y=172) -->
  <circle cx="375" cy="173" r="6" fill="#15803D"/>
  <circle cx="390" cy="171" r="7" fill="#166534"/>
  <circle cx="410" cy="171" r="7" fill="#166534"/>
  <circle cx="425" cy="173" r="6" fill="#15803D"/>

  <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
  <!-- Wide open sunlit manicured green lawn with clean vertical stacking & zero overlap -->
  <polygon points="368,168 432,168 448,210 352,210" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="400" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງ (Bright Hall)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
  <text x="400" y="193" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '✓ ລານຫຍ້າຂຽວໂລ່ງຮັບແສງ-ລົມ (ດີເລີດທີ່ສຸດ)' : '✓ Tshav xyoob ntsuab kaj (Zoo tshaj)'}</text>
  <text x="400" y="204" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0284C7" text-anchor="middle">${isLao ? '• ອ່າງນ້ຳພຸ (ຖ້າມີ): ຂະໜາດນ້ອຍ 10-15%' : '• Pas dej (yog muaj): Me 10-15%'}</text>

  <!-- SAFE RESIDENTIAL QUADRANT: Main House (x=330, y=236, w=140, h=65) -->
  <polygon points="325,236 400,222 475,236" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
  <rect x="330" y="236" width="140" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
  
  <!-- Architectural Room Partition inside House -->
  <line x1="380" y1="236" x2="380" y2="301" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>
  
  <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
  <rect x="338" y="268" width="34" height="26" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
  <rect x="338" y="287" width="34" height="7" fill="#0284C7"/>
  <text x="355" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
  <text x="355" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນໃຫຍ່' : 'Chaw Pw'}</text>

  <!-- Right Room: Main Living Hall -->
  <text x="425" y="264" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${t.house}</text>
  <text x="425" y="282" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${t.houseDesc}</text>
  
  <!-- Front Porch / Door Indicator (Facing Front Ming Tang, Completely Visible & Labeled) -->
  <rect x="417" y="231" width="16" height="5" fill="#1E293B"/>
  <text x="425" y="226" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

  <!-- Compass Sitting & Facing Axis Badge (ທິດໜ້າ ⬆ / ທິດພິງ ⬇) -->
  <g transform="translate(480, 240)">
    <rect x="0" y="0" width="56" height="56" rx="4" fill="#FFFFFF" fill-opacity="0.96" stroke="#0284C7" stroke-width="1.2"/>
    <text x="28" y="14" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ' : 'Ntsia'}</text>
    <line x1="28" y1="18" x2="28" y2="34" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="2,2"/>
    <polygon points="28,16 25,22 31,22" fill="#0284C7"/>
    <polygon points="28,38 25,32 31,32" fill="#0284C7"/>
    <text x="28" y="49" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ' : 'Zaum'}</text>
  </g>

  <!-- Left Dragon Driveway: Through the Fence Gate to Courtyard & Porch -->
  <path d="M 235 348 L 284 348 C 305 348 316 295 330 260 C 342 232 385 230 415 233" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
  <text x="290" y="336" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#B45309" text-anchor="middle" transform="rotate(-15 290 336)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

  <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO AVOID DRIVEWAY OVERLAP) -->
  <g transform="translate(180, 339)">
    <rect x="0" y="0" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
    <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
    <!-- Pointer Line to Gate Post -->
    <line x1="82" y1="9" x2="94" y2="9" stroke="#15803D" stroke-width="2"/>
    <circle cx="94" cy="9" r="2" fill="#15803D"/>
  </g>

  <!-- [✗] FORBIDDEN GATE BADGE (DIRECTLY ON ACUTE FENCE APEX) -->
  <g transform="translate(355, 76)">
    <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
    <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູຮົ້ວ' : '✗ Txwv Rooj Vag'}</text>
    <!-- Pointer Line to Fence Apex -->
    <line x1="45" y1="18" x2="45" y2="24" stroke="#DC2626" stroke-width="2"/>
    <circle cx="45" cy="24" r="2" fill="#DC2626"/>
  </g>
  <line x1="244" y1="350" x2="260" y2="340" stroke="#F59E0B" stroke-width="2"/>
  <polygon points="262,339 255,336 256,344" fill="#F59E0B"/>

  <!-- Rear Boundary Wall & Xuan Wu Defensive Pines along Base (Y=405) -->
  <line x1="255" y1="408" x2="545" y2="408" stroke="#15803D" stroke-width="5"/>
  <circle cx="295" cy="396" r="8" fill="#14532D"/>
  <circle cx="350" cy="394" r="9" fill="#166534"/>
  <circle cx="400" cy="392" r="10" fill="#14532D"/>
  <circle cx="450" cy="394" r="9" fill="#166534"/>
  <circle cx="505" cy="396" r="8" fill="#14532D"/>

  <!-- Xuan Wu Banner at Rear Base -->
  <rect x="260" y="365" width="280" height="16" rx="3" fill="#14532D"/>
  <text x="400" y="377" font-family="'Noto Sans Lao', 'Phetsarath OT', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F0FDF4" text-anchor="middle">${t.xuanWu}</text>

  ${renderSummaryBarSvg(t.bottomSummary)}
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
  const cleanBed = hse.bed ? hse.bed.replace(/^(ທິດຫົວຕຽງ|ຫົວຕຽງ|Taub Hau Pw)\s*:\s*/i, '') : '';

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
  <!-- Dynamic Title to prevent collision -->
  <text x="96" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="${name.length > 32 ? '10' : '11.5'}" fill="#F8FAFC">${escapeXml(name)}</text>
  
  <!-- Element Badge -->
  <rect x="495" y="9" width="165" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="577" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#38BDF8" text-anchor="middle">${escapeXml(elementBadge)}</text>

  <!-- Score Badge -->
  <rect x="670" y="9" width="112" height="24" rx="4" fill="${scoreBg}"/>
  <text x="726" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${escapeXml(scoreText)}</text>

  <!-- ========================================================================= -->
  <!-- LEFT COLUMN: CARDS (X=18 to 182) -->
  <!-- ========================================================================= -->

  <!-- Top-Left Card: Entrance & Driveway (Y=48 to 200) -->
  <rect x="12" y="48" width="174" height="152" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#16A34A"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${ent.title}</text>
  <text x="20" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l1}</text>
  <text x="20" y="108" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l2}</text>
  <text x="20" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l3}</text>
  <text x="20" y="148" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l4}</text>
  
  <rect x="18" y="158" width="162" height="34" rx="4" fill="#DCFCE7"/>
  <text x="100" y="171" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${ent.sub1}</text>
  <text x="100" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#166534" text-anchor="middle">${ent.sub2}</text>

  <!-- Bottom-Left Card: Gua & Compatibility (Y=206 to 442) -->
  <rect x="12" y="206" width="174" height="236" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="206" width="174" height="24" rx="6" fill="#D97706"/>
  <text x="100" y="222" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${gua.title}</text>
  <text x="20" y="246" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l1}</text>
  <text x="20" y="266" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l2}</text>
  <text x="20" y="286" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l3}</text>
  <text x="20" y="306" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l4}</text>
  <text x="20" y="326" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l5}</text>
  
  <rect x="18" y="346" width="162" height="86" rx="4" fill="#FEF3C7"/>
  <text x="100" y="364" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#92400E" text-anchor="middle">${gua.sub1}</text>
  <text x="100" y="382" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F" text-anchor="middle">${gua.sub2}</text>
  <text x="100" y="402" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#B45309" text-anchor="middle">${isLao ? 'ກົດເກນ 5 ທາດ ແລະ ເຂັມທິດ 8 ທິດ' : 'Tsib Yam Zog &amp; 8 Fab Bagua'}</text>
  <text x="100" y="418" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#D97706" text-anchor="middle">${isLao ? '✓ ສົມດຸນພະລັງງານທຳມະຊາດ' : '✓ Huab Cua Sib Npaug Zoo'}</text>

  <!-- ========================================================================= -->
  <!-- RIGHT COLUMN: CARDS (X=618 to 782) -->
  <!-- ========================================================================= -->

  <!-- Top-Right Card: House Positioning & Facing (Y=48 to 200) -->
  <rect x="614" y="48" width="174" height="152" rx="6" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#0284C7"/>
  <text x="700" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${hse.title}</text>
  <text x="622" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l1}</text>
  <text x="622" y="108" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l2}</text>
  <text x="622" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l3}</text>
  <text x="622" y="148" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l4}</text>
  
  <rect x="620" y="158" width="162" height="34" rx="4" fill="#E0F2FE"/>
  <text x="700" y="171" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${bedHeadLabel} ${cleanBed}</text>
  <text x="700" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#0284C7" text-anchor="middle">${bedHeadSub}</text>

  <!-- Bottom-Right Card: Remedies & Taboos (Y=206 to 442) -->
  <rect x="614" y="206" width="174" height="236" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="206" width="174" height="24" rx="6" fill="#9333EA"/>
  <text x="700" y="222" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${rem.title}</text>
  <text x="622" y="246" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l1}</text>
  <text x="622" y="266" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l2}</text>
  <text x="622" y="286" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l3}</text>
  <text x="622" y="306" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l4}</text>

  <rect x="620" y="326" width="162" height="106" rx="4" fill="#F3E8FF"/>
  <text x="700" y="342" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#7E22CE" text-anchor="middle">${tabooHeader}</text>
  <text x="626" y="360" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">${rem.t1}</text>
  <text x="626" y="377" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">${rem.t2}</text>
  <text x="626" y="394" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">${rem.t3}</text>
  <text x="700" y="418" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#7E22CE" text-anchor="middle">${isLao ? '✓ ຮັກສາຄວາມສະອາດ &amp; ແສງສະຫວ່າງ' : '✓ Huv Si &amp; Teeb Pom Kev Zoo'}</text>

  <!-- ========================================================================= -->
  ${plot.hasFrontRoad !== false ? `
  <!-- MAIN ROADWAY (Y=355 to 440, bounded in Central Zone X=190..610) -->
  <!-- Placed before centerSvg so fence gates and badges paint clearly on top! -->
  <rect x="190" y="355" width="420" height="85" fill="url(#roadGrad)" rx="3"/>
  <line x1="190" y1="395" x2="610" y2="395" stroke="#FDE047" stroke-width="2" stroke-dasharray="14,8"/>
  <line x1="190" y1="360" x2="610" y2="360" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="6,4"/>
  <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#F8FAFC" text-anchor="middle">&#10140; ${escapeXml(roadLabel)} &#10140;</text>
  ` : ''}

  <!-- ========================================================================= -->
  <!-- CENTER: THE PLOT ARCHITECTURAL DRAWING (X=195 to 605, Y=48 to 384) -->
  <!-- ========================================================================= -->
  <g>
    ${centerSvg}
  </g>

  ${renderSummaryBarSvg(summary)}
</svg>
`;
}

// Resvg Configuration with pure Lao OpenType fonts (Ultra-HD 2400x1440 for Retina & 4K screens)
const resvgOpts = {
  fitTo: { mode: 'width', value: 2400 },
  font: {
    defaultFontFamily: 'Noto Sans Lao',
    fontFiles: [
      path.resolve('asset/fonts/NotoSansLao-Regular.ttf'),
      path.resolve('asset/fonts/NotoSansLao-Bold.ttf'),
      path.resolve('asset/fonts/Phetsarath-OT.ttf'),
      path.resolve('asset/fonts/Phetsarath-Bold.ttf')
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

  // 1. Save Lao PNG & SVG to lao/img/
  fs.writeFileSync(`lao/img/${plot.id}.png`, pngLao);
  fs.writeFileSync(`lao/img/${plot.id}.svg`, svgLao, 'utf8');

  // 2. Save Hmong PNG & SVG to hmong/img/
  fs.writeFileSync(`hmong/img/${plot.id}.png`, pngHmong);
  fs.writeFileSync(`hmong/img/${plot.id}.svg`, svgHmong, 'utf8');

  // 3. Save to book_figures/cases_6126/ (Lao master for primary book reference)
  fs.writeFileSync(`book_figures/cases_6126/${plot.id}.png`, pngLao);
  fs.writeFileSync(`book_figures/cases_6126/${plot.id}.svg`, svgLao, 'utf8');

  // 4. Save to asset/book_figures/clean_hmong/ (Hmong for RPA book)
  fs.writeFileSync(`asset/book_figures/clean_hmong/${plot.id}.png`, pngHmong);
  fs.writeFileSync(`asset/book_figures/clean_hmong/${plot.id}.svg`, svgHmong, 'utf8');

  // Also write all plots to artifactDir for inspection
  fs.writeFileSync(path.join(artifactDir, `${plot.id}-lao-masterclass.png`), pngLao);
  fs.writeFileSync(path.join(artifactDir, `${plot.id}-hmong-masterclass.png`), pngHmong);

  console.log(`  ✓ Successfully rendered ${plot.id} (Lao & Hmong)`);
}

console.log('\n🎉 ALL 16 MASTERCLASS LAND PLOTS RENDERED AND SAVED SUCCESSFULLY!');
