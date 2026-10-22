const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const artifactDir = 'C:/Users/chitc/.gemini/antigravity/brain/2bd06cba-8314-47a0-923b-83c5e8bd1b84';

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// ============================================================================

// ============================================================================
// 1. ENV-0001: CEMETERY & GRAVES OVERVIEW (ພາບລວມສຸສານ & ປ່າຊ້າ)
// ============================================================================
function renderEnvCemeterySvg(lang = 'lao') {
  return renderEnvCemeteryRearSvg(lang); // Default overview links to rear case
}

// ============================================================================
// 1A. ENV-0001-A: GRAVE ON LEFT SIDE / GREEN DRAGON (ສຸສານດ້ານຂ້າງຊ້າຍ ມັງກອນຂຽວ)
// ============================================================================
function renderEnvCemeteryLeftSvg(lang = 'lao') {
  const isLao = lang === 'lao';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <linearGradient id="cemeteryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- TOP TITLE HUD BAR -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="95" height="24" rx="4" fill="#DC2626"/>
  <text x="65" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">ENV-0001-A</text>
  <text x="122" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.8" fill="#F8FAFC">${isLao ? 'ເຄສ 1: ສຸສານດ້ານຂ້າງຊ້າຍ (ຝັ່ງມັງກອນຂຽວ Qing Long) - ສະກັດໄອຢິນ &amp; ເສີມບາຣະມີຊາຍ' : 'Qauv 1: Tshav Ntxa Sab Laug (Sab Zaj Ntsuab) - Zog Yeeb Tsoo Tus Tswv Tsev'}</text>
  <rect x="580" y="9" width="105" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="632" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#38BDF8" text-anchor="middle">${isLao ? 'ຢິນຊ່າ / Yin Sha' : 'Zog Yeeb Sha'}</text>
  <rect x="692" y="9" width="90" height="24" rx="4" fill="#991B1B"/>
  <text x="737" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${isLao ? 'ລະວັງສູງ' : 'Ceeb Laj'}</text>

  <!-- LEFT COLUMN CARDS -->
  <rect x="12" y="48" width="174" height="185" rx="6" fill="#F8FAFC" stroke="#64748B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#475569"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🐉 ສຸສານຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)' : '🐉 Tshav Ntxa Sab Zaj Ntsuab'}</text>
  <text x="20" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ຕຳແໜ່ງ: ສຸສານ/ປ່າຊ້າຕິດຮົ້ວຊ້າຍ' : '• Ntxa nyob sab laug ntawm av'}</text>
  <text x="20" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ມັງກອນຂຽວ: ຄຸ້ມຄອງເພດຊາຍ, ຍົດສັກ' : '• Sab Zaj: Tswv tsev, koob meej'}</text>
  <text x="20" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ໄອຢິນເຢັນດັບແສງມັງກອນ (ຊ່າແຮງ)' : '• Zog yeeb txias tua zog kaj sab zaj'}</text>
  <text x="20" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຜູ້ຊາຍອິດເມື່ອຍ, ການງານຕິດຂັດ' : '• Txiv neej qaug zog, hauj lwm poob'}</text>
  <rect x="18" y="148" width="162" height="42" rx="4" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="99" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#0F172A" text-anchor="middle">${isLao ? 'ໄລຍະອັນຕະລາຍ &lt;50-100m' : 'Qhov ze ceeb laj &lt;50-100m'}</text>
  <text x="99" y="178" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#475569" text-anchor="middle">${isLao ? 'ຕ້ອງຕັດສາຍຕາ &amp; ເສີມພະລັງຢາງ' : 'Yuav tsum thaiv &amp; ntxiv zog Yang'}</text>

  <rect x="12" y="240" width="174" height="202" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="240" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="100" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🚫 ຂໍ້ຫ້າມຝັ່ງມັງກອນຊ້າຍ' : '🚫 Cov Lus Txwv Sab Laug'}</text>
  <text x="20" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມເປີດປະຕູໃຫຍ່ປະເຊີນສຸສານ' : '• Txwv qhib rooj loj ntsia ntxa'}</text>
  <text x="20" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມຕັ້ງຫ້ອງນອນໃຫຍ່ຕິດຮົ້ວຊ້າຍ' : '• Txwv chav pw tswv tsev ze ciam av'}</text>
  <text x="20" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມປ່ອຍໃຫ້ຝັ່ງຊ້າຍມືດມົວ' : '• Txwv tsis pub sab laug tsaus nti'}</text>
  <rect x="18" y="325" width="162" height="48" rx="4" fill="#FEE2E2"/>
  <text x="99" y="340" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#B91C1C" text-anchor="middle">${isLao ? 'ກົດຫຼັກຮວງຈຸ້ຍມັງກອນ:' : 'Tswv Yim Sab Zaj:'}</text>
  <text x="24" y="354" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#7F1D1D">${isLao ? '• ມັງກອນຕ້ອງການແສງ &amp; ພະລັງຢາງ' : '• Sab zaj xav tau teeb &amp; zog Yang'}</text>
  <text x="24" y="366" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#7F1D1D">${isLao ? '• ຕັ້ງໂຄມໄຟສີອຸ່ນຟື້ນຟູບາຣະມີ' : '• Tso teeb daj kho lub koob meej'}</text>

  <!-- CENTER SITE PLAN (X=195 to 605, Y=48 to 442) -->
  <g id="centerSite">
    <!-- Neighbor Land on Left (Exterior Graves) -->
    <rect x="195" y="48" width="75" height="348" fill="url(#cemeteryGrad)" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="232" y="65" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ດິນຂ້າງບ້ານ' : 'Luag Av'}</text>
    <text x="232" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#DC2626" text-anchor="middle">${isLao ? '⛔ ຫ້າມລ່ວງລ້ຳ' : '⛔ Txwv Tsis Kov'}</text>
    <text x="232" y="87" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? '(ສຸສານ/ປ່າຊ້າ)' : '(Tshav Ntxa)'}</text>

    <!-- Tombs in Neighbor Land -->
    <path d="M 210 130 A 15 12 0 0 1 245 130 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="223" y="110" width="8" height="12" fill="#64748B" rx="1"/>
    
    <path d="M 212 210 A 15 12 0 0 1 247 210 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="225" y="190" width="8" height="12" fill="#64748B" rx="1"/>

    <path d="M 210 290 A 15 12 0 0 1 245 290 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="223" y="270" width="8" height="12" fill="#64748B" rx="1"/>

    <path d="M 212 360 A 15 12 0 0 1 247 360 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="225" y="342" width="8" height="12" fill="#64748B" rx="1"/>

    <!-- Cold Yin Qi arrows pushing towards right into our wall -->
    <path d="M 252 145 L 268 145" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="271,145 265,142 265,148" fill="#38BDF8"/>
    <path d="M 252 225 L 268 225" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="271,225 265,222 265,228" fill="#38BDF8"/>
    <path d="M 252 305 L 268 305" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="271,305 265,302 265,308" fill="#38BDF8"/>

    <!-- Our Property Perimeter Ground -->
    <rect x="274" y="48" width="331" height="348" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/>

    <!-- Defensive Left Boundary Wall (2.2m) -->
    <rect x="271" y="48" width="6" height="348" fill="#334155" stroke="#0F172A" stroke-width="1"/>

    <!-- Left Buffer: Dense Pine Trees along left wall -->
    <circle cx="288" cy="75" r="8" fill="#14532D"/>
    <circle cx="288" cy="105" r="8" fill="#166534"/>
    <circle cx="288" cy="135" r="8" fill="#14532D"/>
    <circle cx="288" cy="165" r="8" fill="#166534"/>
    <circle cx="288" cy="195" r="8" fill="#14532D"/>
    <circle cx="288" cy="255" r="8" fill="#166534"/>
    <circle cx="288" cy="285" r="8" fill="#14532D"/>
    <circle cx="288" cy="315" r="8" fill="#166534"/>
    <circle cx="288" cy="345" r="8" fill="#14532D"/>
    <circle cx="288" cy="375" r="8" fill="#166534"/>

    <!-- Warm Spotlight Lanterns on Left Wall -->
    <circle cx="280" cy="115" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="280" cy="175" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="280" cy="275" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="280" cy="335" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>

    <!-- Tai Shan Stone on Left Wall -->
    <rect x="272" y="215" width="28" height="18" rx="2" fill="#1E293B" stroke="#94A3B8" stroke-width="1"/>
    <text x="286" y="227" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>

    <!-- Wall Protection Annotation -->
    <path d="M 298 120 L 320 120" stroke="#166534" stroke-width="1.2"/>
    <text x="325" y="123" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#166534">${isLao ? '✓ ກຳແພງ 2.2m + ຕົ້ນສົນໜາ + ໄຟ Warm Yang' : '✓ Phab ntsa 2.2m + Ntoo thuv + Teeb ci'}</text>

    <!-- Safe Setback Distance Indicator -->
    <line x1="277" y1="200" x2="350" y2="200" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="3,2"/>
    <polygon points="277,200 282,197 282,203" fill="#0284C7"/>
    <polygon points="350,200 345,197 345,203" fill="#0284C7"/>
    <text x="313" y="195" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0284C7" text-anchor="middle">${isLao ? 'ໄລຍະຖອຍ >8-12m' : 'Thim deb >8-12m'}</text>

    <!-- Safe Main House (Positioned Center-Right) -->
    <polygon points="350,150 445,125 540,150" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
    <rect x="355" y="150" width="180" height="95" fill="#FEF08A" stroke="#854D0E" stroke-width="1.8" rx="3"/>
    <text x="445" y="175" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${isLao ? 'ເຮືອນພັກອາໄສ (Yang Zhai)' : 'Tsev Nyob (Yang Zhai)'}</text>
    <text x="445" y="192" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? '✓ ຕັ້ງຢູ່ເຂດປອດໄພຝັ່ງກາງ-ຂວາ' : '✓ Nyob thaj chaw nyab xeeb'}</text>
    <text x="445" y="206" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນໃຫຍ່ພິງຝາທຶບ ຫ່າງໄອຢິນຊ້າຍ' : 'Chav pw loj zaum phab ntsa tuab'}</text>
    <rect x="437" y="240" width="16" height="5" fill="#1E293B"/>

    <!-- Ming Tang Lawn In Front -->
    <rect x="350" y="270" width="220" height="95" rx="5" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
    <text x="460" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງດ້ານໜ້າ' : 'Thaj Tshav Kaj Pem Hauv Ntej'}</text>
    <text x="460" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#166534" text-anchor="middle">${isLao ? '✓ ຮັບແສງແດດ &amp; ພະລັງຢາງ (Yang Qi) ເຕັມທີ່' : '✓ Txais teeb tshav ntuj &amp; zog Yang'}</text>
    <text x="460" y="328" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0284C7" text-anchor="middle">${isLao ? '• ຟື້ນຟູພະລັງມັງກອນຂຽວໃຫ້ເຂັ້ມແຂງ' : '• Txhawb zog sab zaj kom muaj koob meej'}</text>

    <!-- Front Road -->
    <rect x="195" y="400" width="410" height="25" fill="#334155"/>
    <line x1="195" y1="412" x2="605" y2="412" stroke="#FBBF24" stroke-width="2" stroke-dasharray="8,6"/>
    <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ຖະໜົນໃຫຍ່ດ້ານໜ້າ (Facing Main Road)' : 'Kev Loj Pem Hauv Ntej'}</text>

    <!-- Entrance Gate (Front-Right Safe Zone) -->
    <rect x="475" y="396" width="35" height="8" rx="1.5" fill="#15803D"/>
    <text x="492" y="402" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວ' : 'Rooj Vag'}</text>
  </g>

  <!-- RIGHT COLUMN CARDS -->
  <rect x="614" y="48" width="174" height="185" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#15803D"/>
  <text x="701" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ 4 ວິທີແກ້ສຸສານດ້ານຊ້າຍ' : '🛡️ 4 Txoj Kev Kho Sab Laug'}</text>
  <text x="622" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '1. ກຳແພງທຶບສູງ 2.2m ຕະຫຼອດແນວຊ້າຍ' : '1. Phab ntsa tuab 2.2m sab laug'}</text>
  <text x="622" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '2. ປູກແນວຕົ້ນສົນ/ໄຜ່ໃບໜາດ້ານໃນ' : '2. Cog ntoo thuv/xyoob tuab'}</text>
  <text x="622" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '3. ຕິດໂຄມໄຟ Warm Yang ສ່ອງກຳແພງ' : '3. Teeb daj Warm Yang ci phab ntsa'}</text>
  <text x="622" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '4. ຕັ້ງສີລາ Tai Shan ຫັນໃສ່ສຸສານ' : '4. Pob zeb Tai Shan ntsia ntxa'}</text>
  <rect x="620" y="148" width="162" height="30" rx="3" fill="#DCFCE7"/>
  <text x="701" y="161" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#166534" text-anchor="middle">${isLao ? 'ກົດຫຼັກ: ຕັດສາຍຕາບໍ່ໃຫ້ເຫັນ' : 'Txoj cai: Tsis pub pom ntxa'}</text>
  <text x="701" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#14532D" text-anchor="middle">${isLao ? 'ບໍ່ເຫັນ = ບໍ່ເກີດຊ່າ (ສາຍຕາບໍ່ເຫັນໄອຢິນ)' : 'Tsis pom = Tsis muaj Sha'}</text>

  <rect x="614" y="240" width="174" height="202" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="240" width="174" height="24" rx="6" fill="#7E22CE"/>
  <text x="701" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '📐 ການຈັດວາງຜັງເຮືອນ' : '📐 Kev Teeb Lub Tsev'}</text>
  <text x="622" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ຖອຍຕົວເຮືອນຫ່າງຮົ້ວຊ້າຍ >8-12m' : '• Thim tsev deb ciam av >8-12m'}</text>
  <text x="622" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ວາງຫ້ອງນອນໃຫຍ່ໄປທາງກາງ-ຂວາ' : '• Tso chav pw loj rau nruab nrab-xis'}</text>
  <text x="622" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ເຮັດລານໝິງຖາງໂລ່ງແຈ້ງດ້ານໜ້າ' : '• Thaj tshav Ming Tang kaj pem tsev'}</text>
  <rect x="620" y="325" width="162" height="48" rx="3" fill="#F3E8FF"/>
  <text x="701" y="339" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#6B21A8" text-anchor="middle">${isLao ? 'ຈຸດປະຕູຮົ້ວເຂົ້າ-ອອກ:' : 'Qhov Rooj Vag Nkag Tsev:'}</text>
  <text x="701" y="352" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#581C87" text-anchor="middle">${isLao ? 'ເປີດປະຕູດ້ານໜ້າຝັ່ງປອດໄພ' : 'Qhib pem hauv ntej nyab xeeb'}</text>
  <text x="701" y="364" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#7E22CE" text-anchor="middle">${isLao ? 'ຫ້າມເປີດປະຕູແລ່ນຕຳແນວສຸສານ' : 'Txwv tsis qhib ncaj rau sab ntxa'}</text>

  <!-- BOTTOM SUMMARY BAR -->
  <rect x="0" y="445" width="800" height="35" fill="#0F172A"/>
  <text x="400" y="460" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫຼັກຮວງຈຸ້ຍສຸສານດ້ານຊ້າຍ (ມັງກອນຂຽວ): ໄອຢິນເຢັນກືນກິນພະລັງຢາງ ຜູ້ຊາຍຈະອິດເມື່ອຍ ການງານຕິດຂັດ.' : 'Tswv Yim: Ntxa nyob sab laug tsoo zog sab zaj ua rau txiv neej poob peev hauj lwm tsis vam meej.'}</text>
  <text x="400" y="472" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#94A3B8" text-anchor="middle">${isLao ? 'ວິທີແກ້ໄຂ: ກຳແພງ 2.2m + ແນວຕົ້ນສົນໜາ + ໄຟ Warm Yang ຕະຫຼອດຄືນ + ສີລາ Tai Shan ຕັດສາຍຕາບໍ່ໃຫ້ເຫັນ 100%.' : 'Kev Kho: Phab ntsa 2.2m + ntoo thuv tuab + teeb ci Warm Yang + pob zeb Tai Shan thaiv tsis pub pom qhov muag.'}</text>
</svg>
`;
}

// ============================================================================
// 1B. ENV-0001-B: GRAVE ON RIGHT SIDE / WHITE TIGER (ສຸສານດ້ານຂ້າງຂວາ ເສືອຂາວ)
// ============================================================================
function renderEnvCemeteryRightSvg(lang = 'lao') {
  const isLao = lang === 'lao';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <linearGradient id="cemeteryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- TOP TITLE HUD BAR -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="95" height="24" rx="4" fill="#DC2626"/>
  <text x="65" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">ENV-0001-B</text>
  <text x="122" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.8" fill="#F8FAFC">${isLao ? 'ເຄສ 2: ສຸສານດ້ານຂ້າງຂວາ (ຝັ່ງເສືອຂາວ Bai Hu) - ຢິນຊ້ອນຢິນ ປ້ອງກັນອາເພດ &amp; ຜິດຖຽງ' : 'Qauv 2: Tshav Ntxa Sab Xis (Sab Tsov Dawb) - Zog Yeeb Tsov Qhib Ncauj'}</text>
  <rect x="580" y="9" width="105" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="632" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#38BDF8" text-anchor="middle">${isLao ? 'ຢິນຊ່າ / Yin Sha' : 'Zog Yeeb Sha'}</text>
  <rect x="692" y="9" width="90" height="24" rx="4" fill="#991B1B"/>
  <text x="737" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${isLao ? 'ລະວັງສູງ' : 'Ceeb Laj'}</text>

  <!-- LEFT COLUMN CARDS -->
  <rect x="12" y="48" width="174" height="185" rx="6" fill="#F8FAFC" stroke="#64748B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#475569"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🐅 ສຸສານຝັ່ງເສືອຂາວ (ຂວາ)' : '🐅 Tshav Ntxa Sab Tsov Dawb'}</text>
  <text x="20" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ຕຳແໜ່ງ: ສຸສານ/ປ່າຊ້າຕິດຮົ້ວຂວາ' : '• Ntxa nyob sab xis ntawm av'}</text>
  <text x="20" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ເສືອຂາວ: ທາດຢິນ, ຄຸ້ມຄອງເພດຍິງ' : '• Sab Tsov: Zog Yeeb, tswj poj niam'}</text>
  <text x="20" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ສຸສານຕັ້ງຢູ່: ເກີດ \'ຢິນຊ້ອນຢິນ\'' : '• Muaj ntxa: Zog Yeeb muab ob npaug'}</text>
  <text x="20" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ເສືອຂາວເປີດປາກ: ຄອບຄົວຜິດຖຽງ' : '• Tsov qhib ncauj: Hauv tsev sib ceg'}</text>
  <rect x="18" y="148" width="162" height="42" rx="4" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="99" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#0F172A" text-anchor="middle">${isLao ? 'ຜູ້ຍິງສ່ຽງເຈັບປ່ວຍ/ຜ່າຕັດ' : 'Poj niam pheej raug mob/phais'}</text>
  <text x="99" y="178" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#475569" text-anchor="middle">${isLao ? 'ຕ້ອງຮັກສາຝັ່ງຂວາໃຫ້ \'ມິດງຽບ\'' : 'Sab xis yuav tsum nyob ntsiag to'}</text>

  <rect x="12" y="240" width="174" height="202" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="240" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="100" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🚫 ຂໍ້ຫ້າມຝັ່ງເສືອຂາວ' : '🚫 Cov Lus Txwv Sab Xis'}</text>
  <text x="20" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມຕັ້ງເຄື່ອງຈັກສຽງດັງຝັ່ງຂວາ' : '• Txwv tsis tso tshuab nrov sab xis'}</text>
  <text x="20" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມຂຸດສະນ້ຳ/ນ້ຳພຸເຄື່ອນໄຫວ' : '• Txwv tsis khawb pas dej txav sab xis'}</text>
  <text x="20" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມເຈາະປ່ອງຢ້ຽມໃຫຍ່ປະເຊີນສຸສານ' : '• Txwv qhib qhov rai loj ntsia ntxa'}</text>
  <rect x="18" y="325" width="162" height="48" rx="4" fill="#FEE2E2"/>
  <text x="99" y="340" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#B91C1C" text-anchor="middle">${isLao ? 'ກົດຫຼັກຮວງຈຸ້ຍເສືອຂາວ:' : 'Tswv Yim Sab Tsov:'}</text>
  <text x="24" y="354" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#7F1D1D">${isLao ? '• ເສືອຂາວຕ້ອງການຄວາມມິດງຽບ' : '• Sab tsov xav tau kev ntsiag to'}</text>
  <text x="24" y="366" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#7F1D1D">${isLao ? '• ບໍ່ກະຕຸ້ນ = ໄອຢິນບໍ່ກຳເລີບ' : '• Tsis txhawb = Zog yeeb nyob twjywm'}</text>

  <!-- CENTER SITE PLAN (X=195 to 605, Y=48 to 442) -->
  <g id="centerSite">
    <!-- Our Property Perimeter Ground -->
    <rect x="195" y="48" width="335" height="348" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/>

    <!-- Safe Main House (Positioned Center-Left) -->
    <polygon points="260,150 355,125 450,150" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
    <rect x="265" y="150" width="180" height="95" fill="#FEF08A" stroke="#854D0E" stroke-width="1.8" rx="3"/>
    <text x="355" y="175" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${isLao ? 'ເຮືອນພັກອາໄສ (Yang Zhai)' : 'Tsev Nyob (Yang Zhai)'}</text>
    <text x="355" y="192" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? '✓ ຕັ້ງຢູ່ເຂດປອດໄພຝັ່ງກາງ-ຊ້າຍ' : '✓ Nyob thaj chaw nyab xeeb'}</text>
    <text x="355" y="206" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ຝັ່ງເສືອຂາວມິດງຽບ ບໍ່ມີສຽງດັງ' : 'Sab tsov ntsiag to tsis nrov'}</text>
    <rect x="347" y="240" width="16" height="5" fill="#1E293B"/>

    <!-- Safe Setback Distance Indicator to Right Wall -->
    <line x1="445" y1="195" x2="528" y2="195" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="3,2"/>
    <polygon points="445,195 450,192 450,198" fill="#0284C7"/>
    <polygon points="528,195 523,192 523,198" fill="#0284C7"/>
    <text x="486" y="190" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0284C7" text-anchor="middle">${isLao ? 'ໄລຍະຖອຍ >8-12m' : 'Thim deb >8-12m'}</text>

    <!-- Defensive Right Boundary Wall (2.2m) -->
    <rect x="527" y="48" width="6" height="348" fill="#334155" stroke="#0F172A" stroke-width="1"/>

    <!-- Right Buffer: Dense Shrubs / Hedges along right wall -->
    <circle cx="512" cy="75" r="7.5" fill="#14532D"/>
    <circle cx="512" cy="105" r="7.5" fill="#166534"/>
    <circle cx="512" cy="135" r="7.5" fill="#14532D"/>
    <circle cx="512" cy="165" r="7.5" fill="#166534"/>
    <circle cx="512" cy="195" r="7.5" fill="#14532D"/>
    <circle cx="512" cy="255" r="7.5" fill="#166534"/>
    <circle cx="512" cy="285" r="7.5" fill="#14532D"/>
    <circle cx="512" cy="315" r="7.5" fill="#166534"/>
    <circle cx="512" cy="345" r="7.5" fill="#14532D"/>
    <circle cx="512" cy="375" r="7.5" fill="#166534"/>

    <!-- Warm Spotlight Lanterns on Right Wall -->
    <circle cx="522" cy="115" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="522" cy="175" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="522" cy="275" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="522" cy="335" r="4" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>

    <!-- Tai Shan Stone on Right Wall -->
    <rect x="502" y="215" width="28" height="18" rx="2" fill="#1E293B" stroke="#94A3B8" stroke-width="1"/>
    <text x="516" y="227" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>

    <!-- Wall Protection Annotation -->
    <path d="M 502 120 L 460 120" stroke="#166534" stroke-width="1.2"/>
    <text x="455" y="123" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#166534" text-anchor="end">${isLao ? '✓ ກຳແພງ 2.2m + ແນວໄມ້ພຸ່ມ + Tai Shan' : '✓ Phab ntsa 2.2m + Nroj ntsuab + Tai Shan'}</text>

    <!-- Ming Tang Lawn In Front-Left -->
    <rect x="230" y="270" width="220" height="95" rx="5" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
    <text x="340" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງດ້ານໜ້າ-ຊ້າຍ' : 'Thaj Tshav Kaj Pem Sab Zaj'}</text>
    <text x="340" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#166534" text-anchor="middle">${isLao ? '✓ ເຕົ້າໂຮມພະລັງງານຊີວິດ ແລະ ຄວາມສະຫງົບ' : '✓ Sau zog Sheng Qi &amp; kev ntsiag to'}</text>
    <text x="340" y="328" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0284C7" text-anchor="middle">${isLao ? '• ຝັ່ງເສືອຂາວຮັກສາຄວາມມິດງຽບ 100%' : '• Sab tsov nyob ntsiag to 100%'}</text>

    <!-- Neighbor Land on Right (Exterior Graves) -->
    <rect x="533" y="48" width="72" height="348" fill="url(#cemeteryGrad)" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="569" y="65" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ດິນຂ້າງບ້ານ' : 'Luag Av'}</text>
    <text x="569" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#DC2626" text-anchor="middle">${isLao ? '⛔ ຫ້າມລ່ວງລ້ຳ' : '⛔ Txwv Tsis Kov'}</text>
    <text x="569" y="87" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? '(ສຸສານ/ປ່າຊ້າ)' : '(Tshav Ntxa)'}</text>

    <!-- Tombs in Right Neighbor Land -->
    <path d="M 552 130 A 15 12 0 0 1 587 130 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="565" y="110" width="8" height="12" fill="#64748B" rx="1"/>

    <path d="M 550 210 A 15 12 0 0 1 585 210 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="563" y="190" width="8" height="12" fill="#64748B" rx="1"/>

    <path d="M 552 290 A 15 12 0 0 1 587 290 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="565" y="270" width="8" height="12" fill="#64748B" rx="1"/>

    <path d="M 550 360 A 15 12 0 0 1 585 360 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="563" y="342" width="8" height="12" fill="#64748B" rx="1"/>

    <!-- Cold Yin Qi arrows pushing left into our wall -->
    <path d="M 550 145 L 535 145" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="532,145 538,142 538,148" fill="#38BDF8"/>
    <path d="M 550 225 L 535 225" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="532,225 538,222 538,228" fill="#38BDF8"/>
    <path d="M 550 305 L 535 305" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="532,305 538,302 538,308" fill="#38BDF8"/>

    <!-- Front Road -->
    <rect x="195" y="400" width="410" height="25" fill="#334155"/>
    <line x1="195" y1="412" x2="605" y2="412" stroke="#FBBF24" stroke-width="2" stroke-dasharray="8,6"/>
    <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ຖະໜົນໃຫຍ່ດ້ານໜ້າ (Facing Main Road)' : 'Kev Loj Pem Hauv Ntej'}</text>

    <!-- Entrance Gate (Front-Left Green Dragon Safe Zone) -->
    <rect x="290" y="396" width="35" height="8" rx="1.5" fill="#15803D"/>
    <text x="307" y="402" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວ' : 'Rooj Vag'}</text>
  </g>

  <!-- RIGHT COLUMN CARDS -->
  <rect x="614" y="48" width="174" height="185" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#15803D"/>
  <text x="701" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ 4 ວິທີແກ້ສຸສານດ້ານຂວາ' : '🛡️ 4 Txoj Kev Kho Sab Xis'}</text>
  <text x="622" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '1. ກຳແພງທຶບສູງ 2.2m ດ້ານຂວາ' : '1. Phab ntsa tuab 2.2m sab xis'}</text>
  <text x="622" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '2. ປູກແນວໄມ້ພຸ່ມ/ໄມ້ໃບຂຽວບັງ' : '2. Cog nroj ntsuab tuab thaiv'}</text>
  <text x="622" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '3. ຕັ້ງສີລາ Tai Shan ດ້ານຂວາ' : '3. Pob zeb Tai Shan sab xis'}</text>
  <text x="622" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '4. ຮັກສາຝັ່ງຂວາໃຫ້ມິດງຽບ 100%' : '4. Cia sab xis ntsiag to 100%'}</text>
  <rect x="620" y="148" width="162" height="30" rx="3" fill="#DCFCE7"/>
  <text x="701" y="161" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#166534" text-anchor="middle">${isLao ? 'ກົດຫຼັກ: ສະຫງົບ-ມິດງຽບ-ປິດບັງ' : 'Txoj cai: Ntsiag to - Nkaum - Thaiv'}</text>
  <text x="701" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#14532D" text-anchor="middle">${isLao ? 'ບໍ່ກະຕຸ້ນເສືອຂາວ ໄອຢິນບໍ່ກຳເລີບ' : 'Tsis txhawb tsov, yeeb nyob twjywm'}</text>

  <rect x="614" y="240" width="174" height="202" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="240" width="174" height="24" rx="6" fill="#7E22CE"/>
  <text x="701" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '📐 ການຈັດວາງຜັງເຮືອນ' : '📐 Kev Teeb Lub Tsev'}</text>
  <text x="622" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ຖອຍຕົວເຮືອນຫ່າງຮົ້ວຂວາ >8-12m' : '• Thim tsev deb ciam av >8-12m'}</text>
  <text x="622" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ວາງຕົວເຮືອນໄປທາງກາງ-ຊ້າຍ' : '• Tso tsev rau nruab nrab-laug'}</text>
  <text x="622" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ຈັດສວນມິດງຽບຝັ່ງເສືອຂາວ' : '• Vaj ntsiag to rau sab tsov'}</text>
  <rect x="620" y="325" width="162" height="48" rx="3" fill="#F3E8FF"/>
  <text x="701" y="339" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#6B21A8" text-anchor="middle">${isLao ? 'ຈຸດປະຕູຮົ້ວເຂົ້າ-ອອກ:' : 'Qhov Rooj Vag Nkag Tsev:'}</text>
  <text x="701" y="352" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#581C87" text-anchor="middle">${isLao ? 'ເປີດປະຕູດ້ານໜ້າ-ຊ້າຍ (ມັງກອນ)' : 'Qhib pem sab laug (Sab Zaj)'}</text>
  <text x="701" y="364" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#7E22CE" text-anchor="middle">${isLao ? 'ຫ້າມເປີດປະຕູເຂົ້າຝັ່ງຂວາ' : 'Txwv qhib rooj vag sab xis'}</text>

  <!-- BOTTOM SUMMARY BAR -->
  <rect x="0" y="445" width="800" height="35" fill="#0F172A"/>
  <text x="400" y="460" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫຼັກຮວງຈຸ້ຍສຸສານດ້ານຂວາ (ເສືອຂາວ): ຢິນຊ້ອນຢິນ ເຮັດໃຫ້ເສືອຂາວດຸຮ້າຍ ເກີດການຜິດຖຽງ ແລະ ຜູ້ຍິງເຈັບປ່ວຍ.' : 'Tswv Yim: Ntxa sab xis ua rau zog Yeeb ob npaug, tsev neeg pheej sib ceg thiab poj niam mob nkeeg.'}</text>
  <text x="400" y="472" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#94A3B8" text-anchor="middle">${isLao ? 'ວິທີແກ້ໄຂ: ກຳແພງທຶບ 2.2m + ແນວໄມ້ບັງ + ສີລາ Tai Shan + ຮັກສາຄວາມສະຫງົບ ຫ້າມສຽງດັງ ແລະ ຫ້າມນ້ຳເຄື່ອນໄຫວດ້ານຂວາ.' : 'Kev Kho: Phab ntsa tuab 2.2m + nroj ntsuab thaiv + pob zeb Tai Shan + cia sab xis nyob ntsiag to tsis pub nrov.'}</text>
</svg>
`;
}

// ============================================================================
// 1C. ENV-0001-C: GRAVE BEHIND HOUSE / REAR XUAN WU (ສຸສານດ້ານຫຼັງເຮືອນ ເຕົ່າດຳ)
// ============================================================================
function renderEnvCemeteryRearSvg(lang = 'lao') {
  const isLao = lang === 'lao';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <linearGradient id="cemeteryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- TOP TITLE HUD BAR -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="95" height="24" rx="4" fill="#DC2626"/>
  <text x="65" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">ENV-0001-C</text>
  <text x="122" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.8" fill="#F8FAFC">${isLao ? 'ເຄສ 3: ສຸສານດ້ານຫຼັງເຮືອນ (ຕຳແໜ່ງເຕົ່າດຳ Xuan Wu) - ແກ້ໄຂເຮືອນຂາດຫຼັງພິງ &amp; ຝັນຮ້າຍ' : 'Qauv 3: Tshav Ntxa Sab Qaum Tsev (Vaub Kib Xuan Wu) - Tsis Muaj Zog Zaum &amp; Npau Suav Phem'}</text>
  <rect x="580" y="9" width="105" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="632" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#38BDF8" text-anchor="middle">${isLao ? 'ຢິນຊ່າ / Yin Sha' : 'Zog Yeeb Sha'}</text>
  <rect x="692" y="9" width="90" height="24" rx="4" fill="#991B1B"/>
  <text x="737" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${isLao ? 'ລະວັງສູງ' : 'Ceeb Laj'}</text>

  <!-- LEFT COLUMN CARDS -->
  <rect x="12" y="48" width="174" height="185" rx="6" fill="#F8FAFC" stroke="#64748B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#475569"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🐢 ສຸສານຕຳແໜ່ງເຕົ່າດຳ (ຫຼັງ)' : '🐢 Tshav Ntxa Sab Vaub Kib'}</text>
  <text x="20" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ຕຳແໜ່ງ: ສຸສານ/ປ່າຊ້າຢູ່ຫຼັງເຮືອນ' : '• Ntxa nyob tom qab tsev'}</text>
  <text x="20" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ເຕົ່າດຳ: ຕ້ອງການພູເຂົາພິງຫຼັງ' : '• Sab Vaub Kib: Xav tau roob zaum'}</text>
  <text x="20" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ພິງໃສ່ສຸສານ: ເຮືອນພິງໄອຢິນເຢັນ' : '• Zaum ntxa: Zaum zog yeeb txias'}</text>
  <text x="20" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຂາດຜູ້ອຸປະຖຳ, ຝັນຮ້າຍ, ປວດຫຼັງ' : '• Tsis muaj neeg pab, npau suav phem'}</text>
  <rect x="18" y="148" width="162" height="42" rx="4" fill="#F1F5F9" stroke="#CBD5E1"/>
  <text x="99" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#0F172A" text-anchor="middle">${isLao ? 'ໄລຍະອັນຕະລາຍ &lt;50-100m' : 'Qhov ze ceeb laj &lt;50-100m'}</text>
  <text x="99" y="178" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#475569" text-anchor="middle">${isLao ? 'ຕ້ອງສ້າງ \'ພູເຂົາຈຳລອງ\' ປົກປ້ອງ' : 'Yuav tsum tsim \'roob cuav\' thaiv'}</text>

  <rect x="12" y="240" width="174" height="202" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="240" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="100" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🚫 ຂໍ້ຫ້າມດ້ານຫຼັງເຮືອນ' : '🚫 Cov Lus Txwv Tom Qab'}</text>
  <text x="20" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມເຈາະປະຕູຫຼັງເຮືອນປະເຊີນສຸສານ' : '• Txwv qhib rooj nram qab ntsia ntxa'}</text>
  <text x="20" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມເປີດປ່ອງຢ້ຽມແກ້ວໃສຫຼຽວເຫັນ' : '• Txwv qhov rai iav loj tom qab'}</text>
  <text x="20" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມຫົວຕຽງຫັນໃສ່ສຸສານຫຼັງ' : '• Txwv taub hau pw ntsia tom ntxa'}</text>
  <rect x="18" y="325" width="162" height="48" rx="4" fill="#FEE2E2"/>
  <text x="99" y="340" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#B91C1C" text-anchor="middle">${isLao ? 'ກົດຫຼັກຮວງຈຸ້ຍເຕົ່າດຳ:' : 'Tswv Yim Sab Vaub Kib:'}</text>
  <text x="24" y="354" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#7F1D1D">${isLao ? '• ດ້ານຫຼັງຕ້ອງ \'ໜັກແໜ້ນ-ທຶບ-ສະຫງົບ\'' : '• Sab qaum yuav tsum \'ruaj-tuab\''}</text>
  <text x="24" y="366" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#7F1D1D">${isLao ? '• ປິດຫຼັງໃຫ້ແໜ້ນໜາຄືພູເຂົາ' : '• Thaiv tom qab kom ruaj li roob'}</text>

  <!-- CENTER SITE PLAN (X=195 to 605, Y=48 to 442) -->
  <g id="centerSite">
    <!-- Rear External Cemetery Ground (Neighbor Land) -->
    <rect x="195" y="48" width="410" height="92" fill="url(#cemeteryGrad)" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="400" y="65" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ສຸສານ / ປ່າຊ້າພາຍນອກດ້ານຫຼັງເຮືອນ (External Cemetery)' : 'Tshav Ntxa Sab Nraud Tom Qab Tsev'}</text>
    <text x="400" y="78" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#DC2626" text-anchor="middle">${isLao ? 'ດິນຄົນອື່ນ (⛔ ຫ້າມລ່ວງລ້ຳ)' : 'Luag Av (⛔ Txwv Tsis Kov)'}</text>
    
    <!-- Tombs across rear -->
    <path d="M 225 110 A 18 14 0 0 1 261 110 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="238" y="90" width="8" height="14" fill="#64748B" rx="1"/>
    <path d="M 310 110 A 18 14 0 0 1 346 110 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="323" y="90" width="8" height="14" fill="#64748B" rx="1"/>
    <path d="M 390 110 A 20 16 0 0 1 430 110 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="405" y="88" width="8" height="15" fill="#64748B" rx="1"/>
    <path d="M 470 110 A 18 14 0 0 1 506 110 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="483" y="90" width="8" height="14" fill="#64748B" rx="1"/>
    <path d="M 545 110 A 18 14 0 0 1 581 110 Z" fill="#94A3B8" stroke="#475569" stroke-width="1.2"/>
    <rect x="558" y="90" width="8" height="14" fill="#64748B" rx="1"/>

    <!-- Cold Yin arrows pointing down into our boundary -->
    <path d="M 250 118 L 250 138" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="250,142 247,136 253,136" fill="#38BDF8"/>
    <path d="M 400 118 L 400 138" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="400,142 397,136 403,136" fill="#38BDF8"/>
    <path d="M 550 118 L 550 138" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="550,142 547,136 553,136" fill="#38BDF8"/>
    <text x="400" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#0284C7" text-anchor="middle">${isLao ? '⬇ ໄອຢິນເຢັນ (Yin Sha) ແຜ່ລົງມາຈາກຫຼັງ' : '⬇ Zog Yeeb Txias Los Tom Qab'}</text>

    <!-- Defensive Rear Boundary Wall (Extra-Tall 2.5m Solid Masonry) -->
    <rect x="200" y="142" width="400" height="7" fill="#334155" stroke="#0F172A" stroke-width="1"/>
    
    <!-- 5 Pines Guard (ຫ້າຕົ້ນສົນປົກປ້ອງເຕົ່າດຳ) -->
    <circle cx="235" cy="158" r="8.5" fill="#14532D"/>
    <circle cx="295" cy="158" r="8.5" fill="#166534"/>
    <circle cx="355" cy="158" r="8.5" fill="#14532D"/>
    <circle cx="445" cy="158" r="8.5" fill="#166534"/>
    <circle cx="505" cy="158" r="8.5" fill="#14532D"/>
    <circle cx="565" cy="158" r="8.5" fill="#166534"/>

    <!-- Centered Tai Shan Stone Plaque -->
    <rect x="375" y="145" width="50" height="16" rx="2" fill="#1E293B" stroke="#94A3B8" stroke-width="1"/>
    <text x="400" y="157" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>

    <!-- Warm Spotlight Lanterns on Rear Wall -->
    <circle cx="265" cy="146" r="3.5" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="335" cy="146" r="3.5" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="465" cy="146" r="3.5" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <circle cx="535" cy="146" r="3.5" fill="#FBBF24" stroke="#D97706" stroke-width="1"/>
    <text x="400" y="174" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#166534" text-anchor="middle">${isLao ? '✓ ກຳແພງ 2.5m + ແນວ 5 ຕົ້ນສົນສູງປົກປ້ອງເຕົ່າດຳ + ໄຟສີອຸ່ນ + ຫີນ Tai Shan' : '✓ Phab ntsa 2.5m + 5 tsob ntoo thuv + Teeb ci + Pob zeb Tai Shan'}</text>

    <!-- Residential Ground -->
    <rect x="200" y="178" width="400" height="218" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/>

    <!-- Setback Distance Indicator -->
    <line x1="400" y1="180" x2="400" y2="210" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="3,2"/>
    <polygon points="400,180 397,185 403,185" fill="#0284C7"/>
    <polygon points="400,210 397,205 403,205" fill="#0284C7"/>
    <text x="440" y="196" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0284C7">${isLao ? 'ໄລຍະຖອຍ >10-15m' : 'Thim deb >10-15m'}</text>

    <!-- Safe Main House Seated Solidly -->
    <polygon points="290,210 400,185 510,210" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
    <rect x="295" y="210" width="210" height="70" fill="#FEF08A" stroke="#854D0E" stroke-width="1.8" rx="3"/>
    <text x="400" y="232" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#1E293B" text-anchor="middle">${isLao ? 'ເຮືອນພັກອາໄສ (Yang Zhai) - ຝາຫຼັງທຶບແໜ້ນໜາ' : 'Tsev Nyob (Yang Zhai) - Sab Qaum Tuab'}</text>
    <text x="400" y="247" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#15803D" text-anchor="middle">${isLao ? '✓ ຫົວຕຽງພິງຝາທຶບພາຍໃນ / ບໍ່ເຈາະປ່ອງຢ້ຽມໃຫຍ່ດ້ານຫຼັງ' : '✓ Taub hau pw phab ntsa tuab / Tsis qhib qhov rai tom qab'}</text>
    <text x="400" y="260" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#475569" text-anchor="middle">${isLao ? 'ສ້າງພູເຂົາຈຳລອງປົກປ້ອງດ້ານຫຼັງ ແກ້ໄຂອາການຝັນຮ້າຍ &amp; ສຸຂະພາບ' : 'Ua roob cuav tiv thaiv tom qab kho npau suav phem'}</text>
    <rect x="392" y="275" width="16" height="5" fill="#1E293B"/>

    <!-- Ming Tang Lawn In Front -->
    <rect x="260" y="295" width="280" height="75" rx="5" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
    <text x="400" y="315" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງດ້ານໜ້າ (Bright Hall)' : 'Thaj Tshav Kaj Pem Hauv Ntej (Ming Tang)'}</text>
    <text x="400" y="332" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#166534" text-anchor="middle">${isLao ? '✓ ຮັບແສງແດດ &amp; ພະລັງຢາງ (Yang Qi) ເຕັມທີ່' : '✓ Txais teeb tshav ntuj &amp; zog Yang'}</text>
    <text x="400" y="347" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0284C7" text-anchor="middle">${isLao ? '• ເຕົ້າໂຮມພະລັງງານຊີວິດ ແລະ ຄວາມຮັ່ງມີ' : '• Sau zog Sheng Qi thiab nyiaj txiag'}</text>

    <!-- Front Road -->
    <rect x="200" y="400" width="400" height="25" fill="#334155"/>
    <line x1="200" y1="412" x2="600" y2="412" stroke="#FBBF24" stroke-width="2" stroke-dasharray="8,6"/>
    <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ຖະໜົນໃຫຍ່ດ້ານໜ້າ (Facing Main Road) ຮັບແສງສະຫວ່າງ' : 'Kev Loj Pem Hauv Ntej'}</text>

    <rect x="420" y="396" width="30" height="8" rx="1.5" fill="#15803D"/>
    <text x="435" y="402" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວ' : 'Rooj Vag'}</text>
  </g>

  <!-- RIGHT COLUMN CARDS -->
  <rect x="614" y="48" width="174" height="185" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#15803D"/>
  <text x="701" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ 4 ວິທີແກ້ສຸສານດ້ານຫຼັງ' : '🛡️ 4 Txoj Kev Kho Sab Qaum'}</text>
  <text x="622" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '1. ກຳແພງທຶບສູງ 2.2-2.5m ດ້ານຫຼັງ' : '1. Phab ntsa tuab 2.2-2.5m sab qaum'}</text>
  <text x="622" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '2. ປູກ 5 ຕົ້ນສົນໃຫຍ່ປົກປ້ອງເຕົ່າດຳ' : '2. Cog 5 tsob ntoo thuv ua roob'}</text>
  <text x="622" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '3. ຕັ້ງສີລາ Tai Shan ໃຈກາງກຳແພງ' : '3. Pob zeb Tai Shan plawv phab ntsa'}</text>
  <text x="622" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '4. ຕິດໂຄມໄຟ Warm Yang ສ່ອງຫຼັງ' : '4. Teeb daj Warm Yang ci tom qab'}</text>
  <rect x="620" y="148" width="162" height="30" rx="3" fill="#DCFCE7"/>
  <text x="701" y="161" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#166534" text-anchor="middle">${isLao ? 'ກົດຫຼັກ: ປິດຫຼັງໃຫ້ແໜ້ນໜາຄືພູເຂົາ' : 'Txoj cai: Thaiv sab qaum kom ruaj'}</text>
  <text x="701" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#14532D" text-anchor="middle">${isLao ? 'ກຳແພງ + ຕົ້ນສົນ = ພູເຂົາເຕົ່າດຳ' : 'Phab ntsa + Ntoo thuv = Roob Vaub Kib'}</text>

  <rect x="614" y="240" width="174" height="202" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="240" width="174" height="24" rx="6" fill="#7E22CE"/>
  <text x="701" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '📐 ການຈັດວາງຜັງເຮືອນ' : '📐 Kev Teeb Lub Tsev'}</text>
  <text x="622" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ຝາຫຼັງເຮືອນທຶບ ປິດມ່ານໜາ' : '• Phab ntsa tsev tom qab tuab'}</text>
  <text x="622" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ຫົວຕຽງພິງຝາທຶບພາຍໃນເຮືອນ' : '• Taub hau pw phab ntsa tuab'}</text>
  <text x="622" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '• ຖອຍຕົວເຮືອນຫ່າງຮົ້ວຫຼັງ >10m' : '• Thim tsev deb ciam av tom qab'}</text>
  <rect x="620" y="325" width="162" height="48" rx="3" fill="#F3E8FF"/>
  <text x="701" y="339" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#6B21A8" text-anchor="middle">${isLao ? 'ແກ້ໄຂອາການຝັນຮ້າຍ:' : 'Kho Npau Suav Phem:'}</text>
  <text x="701" y="352" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#581C87" text-anchor="middle">${isLao ? 'ຕັດສາຍຕາບໍ່ໃຫ້ເຫັນສຸສານ 100%' : 'Tsis pub pom ntxa kiag li'}</text>
  <text x="701" y="364" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#7E22CE" text-anchor="middle">${isLao ? 'ເພີ່ມໄຟແສງສີສົ້ມຫຼັງເຮືອນ' : 'Tso teeb daj ci tom qab tsev'}</text>

  <!-- BOTTOM SUMMARY BAR -->
  <rect x="0" y="445" width="800" height="35" fill="#0F172A"/>
  <text x="400" y="460" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫຼັກຮວງຈຸ້ຍສຸສານດ້ານຫຼັງ (ເຕົ່າດຳ): ເຮືອນພິງໃສ່ໄອຢິນ ຂາດຄວາມໝັ້ນຄົງ ເກີດຝັນຮ້າຍ ແລະ ສຸຂະພາບຊຸດໂຊມ.' : 'Tswv Yim: Tsev zaum zog yeeb tsis muaj roob txhawb, ua rau npau suav phem thiab mob nraub qaum.'}</text>
  <text x="400" y="472" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#94A3B8" text-anchor="middle">${isLao ? 'ວິທີແກ້ໄຂ: ກຳແພງທຶບ 2.5m + ແນວ 5 ຕົ້ນສົນໃຫຍ່ຈຳລອງພູເຂົາ + ສີລາ Tai Shan + ຫົວຕຽງພິງຝາທຶບພາຍໃນ ປິດມ່ານຫຼັງເຮືອນ.' : 'Kev Kho: Phab ntsa tuab 2.5m + 5 tsob ntoo thuv loj ua roob cuav + pob zeb Tai Shan + taub hau pw rau phab ntsa tuab hauv tsev.'}</text>
</svg>
`;
}

// ============================================================================
// 1D. ENV-0001-D: OLD GRAVE INSIDE LAND PLOT (ຫຼຸບຝັງສົບເກົ່າຢູ່ໃນຕອນດິນ)
// ============================================================================
function renderEnvCemeteryInsideSvg(lang = 'lao') {
  const isLao = lang === 'lao';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <linearGradient id="safeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FEFCE8"/>
      <stop offset="100%" stop-color="#FEF08A"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- TOP TITLE HUD BAR -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="95" height="24" rx="4" fill="#DC2626"/>
  <text x="65" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">ENV-0001-D</text>
  <text x="122" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.8" fill="#F8FAFC">${isLao ? 'ເຄສ 4: ຫຼຸບຝັງສົບເກົ່າຢູ່ໃນຕອນດິນ - ຢິນຊ່າຂັ້ນຮຸນແຮງ ຫຼັກການລອກດິນ &amp; ປັບພື້ນທີ່' : 'Qauv 4: Qub Ntxa Nyob Hauv Thaj Av - Yeeb Sha Hnyav &amp; Txoj Kev Kho Av'}</text>
  <rect x="580" y="9" width="105" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="632" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#38BDF8" text-anchor="middle">${isLao ? 'ຢິນຊ່າ / Yin Sha' : 'Zog Yeeb Sha'}</text>
  <rect x="692" y="9" width="90" height="24" rx="4" fill="#991B1B"/>
  <text x="737" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${isLao ? 'ລະວັງສູງ' : 'Ceeb Laj'}</text>

  <!-- LEFT COLUMN CARDS -->
  <rect x="12" y="48" width="174" height="185" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🚫 ຫຼຸບຝັງສົບເກົ່າຢູ່ໃນດິນ' : '🚫 Qub Ntxa Hauv Thaj Av'}</text>
  <text x="20" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ສະພາບ: ພົບຫຼຸບຝັງສົບ/ອັດຖິໃນດິນ' : '• Muaj qub ntxa/pob txha hauv av'}</text>
  <text x="20" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ເປັນຢິນຊ່າຂັ້ນຮຸນແຮງ (Extreme Yin)' : '• Yog Yeeb Sha hnyav heev'}</text>
  <text x="20" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ເຮືອນຄົນເປັນທັບເຮືອນຄົນຕາຍ' : '• Tsev neeg ciaj nyob saum tuag'}</text>
  <text x="20" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຄົນຢູ່ຈະອັບໂຊກ, ປ່ວຍຊຳເຮື້ອ' : '• Raug mob tsis zoo, poob peev'}</text>
  <rect x="18" y="148" width="162" height="42" rx="4" fill="#FEE2E2" stroke="#FCA5A5"/>
  <text x="99" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#B91C1C" text-anchor="middle">${isLao ? 'ຫ້າມປຸກເຮືອນທັບເດັດຂາດ!' : 'Txwv tsis tsim tsev saum!'}</text>
  <text x="99" y="178" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#7F1D1D" text-anchor="middle">${isLao ? 'ຕ້ອງແກ້ໄຂຕາມພິທີກຳກ່ອນ' : 'Yuav tsum kho ua ntej tsim tsev'}</text>

  <rect x="12" y="240" width="174" height="202" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="240" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="100" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '⚠️ ຂໍ້ຫ້າມສຳຄັນທີ່ສຸດ!' : '⚠️ Lus Txwv Loj Tshaj!'}</text>
  <text x="20" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມປຸກຫ້ອງນອນທັບຈຸດສຸສານ' : '• Txwv chav pw saum qub ntxa'}</text>
  <text x="20" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມປຸກຫ້ອງຮັບແຂກ/ຫ້ອງຄົວທັບ' : '• Txwv chav noj mov/ua noj saum'}</text>
  <text x="20" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#991B1B">${isLao ? '• ຫ້າມຖົມດິນທັບໂດຍບໍ່ຍ້າຍອັດຖິ' : '• Txwv ntsaws av yog tsis tsiv pob txha'}</text>
  <rect x="18" y="325" width="162" height="48" rx="4" fill="#FEE2E2"/>
  <text x="99" y="340" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#B91C1C" text-anchor="middle">${isLao ? 'ກົດເດັດຂາດ:' : 'Txoj Cai Ruaj:'}</text>
  <text x="24" y="354" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#7F1D1D">${isLao ? '• ດິນສຸສານມີໄອຢິນຝັງເລິກ' : '• Av ntxa muaj zog yeeb tob'}</text>
  <text x="24" y="366" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#7F1D1D">${isLao ? '• ຕ້ອງຕາກແດດ 49 ວັນດູດຢາງ' : '• Tshav av 49 hnub nqus zog Yang'}</text>

  <!-- CENTER SITE PLAN (X=195 to 605, Y=48 to 442) -->
  <g id="centerSite">
    <!-- Our Full Property Perimeter -->
    <rect x="200" y="48" width="400" height="348" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/>

    <!-- LEFT ZONE: OLD GRAVE SITE & REHABILITATION FLOW -->
    <g transform="translate(210, 60)">
      <!-- Taboo Box with red dashed outline -->
      <rect x="0" y="0" width="150" height="95" rx="5" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.8" stroke-dasharray="5,4"/>
      
      <!-- Tombstone with Red X -->
      <path d="M 55 45 A 18 14 0 0 1 95 45 Z" fill="#94A3B8" stroke="#DC2626" stroke-width="1.2"/>
      <rect x="71" y="25" width="8" height="15" fill="#64748B" rx="1"/>
      <line x1="45" y1="20" x2="105" y2="60" stroke="#DC2626" stroke-width="2.5"/>
      <line x1="105" y1="20" x2="45" y2="60" stroke="#DC2626" stroke-width="2.5"/>

      <text x="75" y="15" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#DC2626" text-anchor="middle">${isLao ? '🚫 ຈຸດສຸສານເກົ່າໃນດິນ' : '🚫 Qub Ntxa Hauv Av'}</text>
      <text x="75" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#B91C1C" text-anchor="middle">${isLao ? '❌ ຫ້າມປຸກເຮືອນທັບເດັດຂາດ!' : '❌ Txwv tsis tsim tsev rau saum!'}</text>
      <text x="75" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#7F1D1D" text-anchor="middle">${isLao ? '(ເປັນຢິນຊ່າຮຸນແຮງ Extreme Yin)' : '(Yog Yeeb Sha Hnyav)'}</text>
    </g>

    <!-- 4-Step Remediation Flow Arrow -->
    <path d="M 285 160 L 285 210" stroke="#16A34A" stroke-width="2" stroke-dasharray="3,2"/>
    <polygon points="285,215 281,208 289,208" fill="#16A34A"/>
    <rect x="215" y="166" width="140" height="38" rx="3" fill="#DCFCE7" stroke="#16A34A" stroke-width="1"/>
    <text x="285" y="178" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.2" fill="#15803D" text-anchor="middle">${isLao ? '1. ຍ້າຍອັດຖິ ➔ 2. ລອກດິນ 1.5m' : '1. Tsiv ntxa ➔ 2. Khawb 1.5m'}</text>
    <text x="285" y="190" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.2" fill="#15803D" text-anchor="middle">${isLao ? '3. ຕາກແດດ 49 ວັນ ➔ 4. ຖົມດິນໃໝ່' : '3. Tshav 49 hnub ➔ 4. Av tshiab'}</text>
    <text x="285" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#166534" text-anchor="middle">${isLao ? 'ດູດຊັບພະລັງຢາງ (Yang Qi) ປ່ຽນເປັນດີ' : 'Nqus zog Yang hloov ua zoo'}</text>

    <!-- Transformed Open Sunlit Garden -->
    <rect x="210" y="222" width="150" height="150" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.8"/>
    <text x="285" y="242" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? '🌸 ສວນດອກໄມ້ກາງແຈ້ງ / ບ່ອນຈອດລົດ' : '🌸 Vaj Paj Kaj Siab / Chaw Nres Tsheb'}</text>
    <text x="285" y="258" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '✓ ປັບເປັນພື້ນທີ່ໂລ່ງແຈ້ງຮັບແສງແດດ' : '✓ Ua chaw kaj siab txais tshav ntuj'}</text>
    
    <!-- Flower & Sun Decor in Garden -->
    <circle cx="240" cy="285" r="8" fill="#FEF08A" stroke="#CA8A04" stroke-width="1"/>
    <circle cx="285" cy="285" r="8" fill="#FBCFE8" stroke="#DB2777" stroke-width="1"/>
    <circle cx="330" cy="285" r="8" fill="#FEF08A" stroke="#CA8A04" stroke-width="1"/>
    <text x="285" y="315" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#15803D" text-anchor="middle">${isLao ? 'ປູກຫຍ້າຂຽວ + ດອກໄມ້ສີສົດໃສ' : 'Cog xyoob ntsuab + paj zoo nkauj'}</text>
    <text x="285" y="330" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0284C7" text-anchor="middle">${isLao ? 'ແສງແດດເຕັມທີ່ ລ້າງໄອຢິນ 100%' : 'Teeb tshav ntuj ntxuav zog yeeb'}</text>
    <text x="285" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '✓ ປ່ຽນພື້ນທີ່ຮ້າຍກາຍເປັນພື້ນທີ່ໂຊກ' : '✓ Hloov thaj phem ua thaj hmoov'}</text>

    <!-- RIGHT ZONE: SAFE BUILDING ZONE (SAFE HOUSE) -->
    <rect x="375" y="60" width="215" height="312" rx="6" fill="#FEFCE8" stroke="#CA8A04" stroke-width="1.8" stroke-dasharray="4,3"/>
    <rect x="385" y="70" width="195" height="22" rx="3" fill="#15803D"/>
    <text x="482" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ເຂດປຸກສ້າງທີ່ປອດໄພ (Safe Living Zone)' : '✓ Thaj Chaw Tsim Tsev Nyab Xeeb'}</text>

    <!-- Safe Main House Inside Safe Zone -->
    <polygon points="400,135 485,110 570,135" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
    <rect x="405" y="135" width="160" height="90" fill="#FEF08A" stroke="#854D0E" stroke-width="1.8" rx="3"/>
    <text x="485" y="160" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#1E293B" text-anchor="middle">${isLao ? 'ເຮືອນພັກອາໄສ (Yang Zhai)' : 'Tsev Nyob (Yang Zhai)'}</text>
    <text x="485" y="178" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.2" fill="#15803D" text-anchor="middle">${isLao ? '✓ ຕັ້ງຢູ່ເຂດດິນບໍລິສຸດ ປອດໄພ 100%' : '✓ Nyob thaj av huv si nyab xeeb'}</text>
    <text x="485" y="193" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#475569" text-anchor="middle">${isLao ? 'ບໍ່ມີໄອຢິນລົບກວນ ສຸຂະພາບແຂງແຮງ' : 'Tsis muaj Yeeb Sha tsev neeg zoo'}</text>
    <rect x="477" y="220" width="16" height="5" fill="#1E293B"/>

    <!-- Ming Tang Lawn In Front of House -->
    <rect x="400" y="240" width="170" height="75" rx="4" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="3,2"/>
    <text x="485" y="260" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງ' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
    <text x="485" y="275" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '✓ ຮັບໂຊກລາບ &amp; ພະລັງງານຊີວິດ' : '✓ Txais nyiaj txiag &amp; zog Sheng Qi'}</text>
    <text x="485" y="290" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0284C7" text-anchor="middle">${isLao ? '• ທາງລົດແລ່ນເຂົ້າສະດວກສະບາຍ' : '• Kev tsheb nkag yooj yim'}</text>

    <!-- Front Road -->
    <rect x="200" y="400" width="400" height="25" fill="#334155"/>
    <line x1="200" y1="412" x2="600" y2="412" stroke="#FBBF24" stroke-width="2" stroke-dasharray="8,6"/>
    <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ຖະໜົນໃຫຍ່ດ້ານໜ້າ (Facing Main Road) ຮັບແສງສະຫວ່າງ' : 'Kev Loj Pem Hauv Ntej'}</text>

    <!-- Entrance Gates -->
    <rect x="465" y="396" width="35" height="8" rx="1.5" fill="#15803D"/>
    <text x="482" y="402" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວ' : 'Rooj Vag'}</text>
  </g>

  <!-- RIGHT COLUMN CARDS -->
  <rect x="614" y="48" width="174" height="185" rx="6" fill="#FAF5FF" stroke="#9333EA" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#7E22CE"/>
  <text x="701" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛠️ 4 ຂັ້ນຕອນແກ້ສຸສານໃນດິນ' : '🛠️ 4 Kauj Ruam Kho Qub Ntxa'}</text>
  <text x="622" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '1. ຍ້າຍອັດຖິອອກຕາມພິທີກຳ' : '1. Tsiv pob txha tawm kom zoo'}</text>
  <text x="622" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '2. ລອກດິນ 1.5-2m ຕາກແດດ 49 ວັນ' : '2. Khawb 1.5-2m tshav 49 hnub'}</text>
  <text x="622" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '3. ຖົມດິນ 5 ສີ/ດິນດານໃໝ່ສະອາດ' : '3. Ntsaws av 5 xim/av daj tshiab'}</text>
  <text x="622" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#581C87">${isLao ? '4. ປັບເປັນສວນດອກໄມ້/ບ່ອນຈອດລົດ' : '4. Kho ua vaj paj/chaw nres tsheb'}</text>
  <rect x="620" y="148" width="162" height="30" rx="3" fill="#F3E8FF"/>
  <text x="701" y="161" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#6B21A8" text-anchor="middle">${isLao ? 'ກົດຫຼັກ: ຕາກແດດ 49 ວັນດູດຢາງ' : 'Txoj cai: Tshav 49 hnub nqus Yang'}</text>
  <text x="701" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#581C87" text-anchor="middle">${isLao ? 'ປ່ຽນພື້ນທີ່ຢິນໃຫ້ກາຍເປັນໂລ່ງແຈ້ງ' : 'Hloov thaj chaw yeeb ua kaj siab'}</text>

  <rect x="614" y="240" width="174" height="202" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="240" width="174" height="24" rx="6" fill="#15803D"/>
  <text x="701" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '📐 ການຈັດວາງຜັງອາຄານ' : '📐 Kev Teeb Tsev Hauv Av'}</text>
  <text x="622" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '• ແຍກເຂດສຸສານເກົ່າເປັນສວນດອກໄມ້' : '• Faib qub ntxa ua vaj paj'}</text>
  <text x="622" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '• ປຸກເຮືອນໃນ \'ເຂດດິນບໍລິສຸດ\'' : '• Tsim tsev rau \'thaj av huv si\''}</text>
  <text x="622" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '• ປູກຫຍ້າຂຽວ + ດອກໄມ້ສີສົດໃສ' : '• Cog xyoob ntsuab + paj zoo nkauj'}</text>
  <rect x="620" y="325" width="162" height="48" rx="3" fill="#DCFCE7"/>
  <text x="701" y="339" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#166534" text-anchor="middle">${isLao ? 'ຂໍ້ຫ້າມສຳຄັນທີ່ສຸດ:' : 'Lus Txwv Loj Tshaj:'}</text>
  <text x="701" y="352" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#14532D" text-anchor="middle">${isLao ? 'ຫ້າມສ້າງຫ້ອງນອນ/ຫ້ອງຮັບແຂກທັບ' : 'Txwv tsis tsim chav pw rau saum'}</text>
  <text x="701" y="364" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? 'ໃຫ້ຈັດເປັນສວນດອກໄມ້ ຫຼື ບ່ອນຈອດລົດ' : 'Ua vaj paj lossis chaw nres tsheb'}</text>

  <!-- BOTTOM SUMMARY BAR -->
  <rect x="0" y="445" width="800" height="35" fill="#0F172A"/>
  <text x="400" y="460" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫຼັກຮວງຈຸ້ຍສຸສານໃນດິນ: ເປັນຢິນຊ່າຮຸນແຮງ ຫ້າມປຸກເຮືອນທັບເດັດຂາດ! ຕ້ອງຍ້າຍອັດຖິຕາມພິທີ ແລະ ຂຸດລອກດິນ 1.5m ຕາກແດດ 49 ວັນ.' : 'Tswv Yim: Ntxa hauv av yog Yeeb Sha hnyav txwv tsim tsev saum! Yuav tsum tsiv pob txha thiab khawb av 1.5m tshav 49 hnub.'}</text>
  <text x="400" y="472" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#94A3B8" text-anchor="middle">${isLao ? 'ການວາງຜັງ: ຖົມດິນໃໝ່ສະອາດ ແລ້ວຈັດຈຸດດັ່ງກ່າວເປັນສວນດອກໄມ້ກາງແຈ້ງ ຫຼື ບ່ອນຈອດລົດ ໃຫ້ປຸກຕົວເຮືອນໃນເຂດດິນບໍລິສຸດເທົ່ານັ້ນ.' : 'Kev Teeb Tsev: Ntsaws av tshiab huv ua vaj paj lossis chaw nres tsheb, tsuas yog tsim tsev rau thaj chaw av huv si xwb.'}</text>
</svg>
`;
}

// 2. ENV-0002: WATER SYSTEMS (ນ້ຳໃນດິນ vs ແມ່ນ້ຳນອກດິນ)
// ============================================================================
function renderEnvWaterSvg(lang = 'lao') {
  const isLao = lang === 'lao';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <linearGradient id="waterFlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="50%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- TOP TITLE HUD BAR -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="80" height="24" rx="4" fill="#0284C7"/>
  <text x="58" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">ENV-0002</text>
  <text x="108" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#F8FAFC">${isLao ? 'ລະບົບນ້ຳຮວງຈຸ້ຍ: ໜອງນ້ຳໃນດິນ vs ແມ່ນ້ຳນອກດິນ (Water Systems: Inside vs Outside)' : 'Txheej Txheem Dej: Pas Dej Hauv Av vs Tus Dej Sab Nraud (Water Masterclass)'}</text>
  <rect x="580" y="9" width="105" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="632" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#38BDF8" text-anchor="middle">${isLao ? 'ທາດນ້ຳ / Water' : 'Zog Dej / Water'}</text>
  <rect x="692" y="9" width="90" height="24" rx="4" fill="#15803D"/>
  <text x="737" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${isLao ? 'ຫຼັກການຄົບຖ້ວນ' : 'Ua Kom Tag'}</text>

  <!-- LEFT COLUMN CARDS -->
  <rect x="12" y="48" width="174" height="185" rx="6" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#0284C7"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🌊 ແມ່ນ້ຳນອກດິນ (Macro Water)' : '🌊 Tus Dej Loj Sab Nraud'}</text>
  <text x="20" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#0369A1">${isLao ? '• ເປັນມັງກອນນ້ຳທຳມະຊາດຂະໜາດໃຫຍ່' : '• Yog tus zaj dej loj ntawm ntuj'}</text>
  <text x="20" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.8" fill="#15803D">${isLao ? '✓ ສາຍແອວຫົກ (Jade Belt): ໂຄ້ງໂອບ' : '✓ Jade Belt: Puag ncig tsev'}</text>
  <text x="26" y="117" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#166534">${isLao ? '→ ນຳພາຊັບສິນ, ໂຊກລາບ, ປອດໄພ' : '→ Sau nyiaj txiag, zoo siab'}</text>
  <text x="20" y="134" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.8" fill="#DC2626">${isLao ? '✗ ຄັນທະນູຕັດ (Reverse Bow): ຕີກັບ' : '✗ Reverse Bow: Nkhaus tua rau tsev'}</text>
  <text x="26" y="148" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#991B1B">${isLao ? '→ ເສຍຊັບ, ຄະດີຄວາມ, ລົ້ມລະລາຍ' : '→ Poob peev, raug plaub'}</text>
  <rect x="18" y="156" width="162" height="24" rx="3" fill="#E0F2FE"/>
  <text x="99" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#0369A1" text-anchor="middle">${isLao ? 'ແກ້ຄັນທະນູ: ກຳແພງຫີນ + ແນວຕົ້ນໄມ້' : 'Kho: Phab ntsa pob zeb + ntoo'}</text>

  <rect x="12" y="240" width="174" height="202" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="240" width="174" height="24" rx="6" fill="#15803D"/>
  <text x="100" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🏞️ ໜອງນ້ຳໃນດິນ (Micro Water)' : '🏞️ Pas Dej Hauv Av'}</text>
  <text x="20" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.8" fill="#15803D">${isLao ? '✓ ບໍ່ມີບໍ່ນ້ຳ = ດີເລີດທີ່ສຸດ 100%' : '✓ Tsis muaj dej = Zoo tshaj 100%'}</text>
  <text x="26" y="292" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#166534">${isLao ? '→ ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ &amp; ລົມ' : '→ Tshav xyoob ntsuab kaj txais teeb'}</text>
  <text x="20" y="309" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#0369A1">${isLao ? '• ຫາກມີ: ວາງຝັ່ງມັງກອນຂຽວ 10-15%' : '• Yog muaj: Tso sab zaj 10-15%'}</text>
  <text x="20" y="326" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#0369A1">${isLao ? '• ນ້ຳຕ້ອງໃສສະອາດ ແລະ ໄຫຼວຽນ' : '• Dej huv thiab ntws tas li'}</text>
  <rect x="18" y="338" width="162" height="52" rx="3" fill="#DCFCE7"/>
  <text x="99" y="352" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#14532D" text-anchor="middle">${isLao ? 'ອັດຕາສ່ວນທອງຄຳ (Golden Ratio):' : 'Golden Ratio:'}</text>
  <text x="24" y="366" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534">${isLao ? '• ເນື້ອທີ່: 10-15% ຂອງລານໝິງຖາງ' : '• Qhov loj: 10-15% ntawm tshav'}</text>
  <text x="24" y="378" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534">${isLao ? '• ຄວາມເລິກ: ພຽງ 30-50 cm (ຫ້າມເລິກ)' : '• Qhov tob: 30-50cm xwb'}</text>

  <!-- CENTER SITE PLAN (X=195 to 605, Y=48 to 442) -->
  <g id="centerSite">
    <path d="M 195 90 C 270 90 320 135 320 160 C 320 200 240 240 200 280 L 195 285" fill="none" stroke="#BAE6FD" stroke-width="26" stroke-linecap="round"/>
    <path d="M 195 90 C 270 90 320 135 320 160 C 320 200 240 240 200 280 L 195 285" fill="none" stroke="url(#waterFlow)" stroke-width="20" stroke-linecap="round"/>

    <path d="M 230 110 Q 250 115 270 110" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
    <path d="M 280 145 Q 295 160 285 180" fill="none" stroke="#FFFFFF" stroke-width="1.5"/>
    <polygon points="215,260 210,248 222,252" fill="#FFFFFF"/>

    <rect x="235" y="80" width="135" height="18" rx="3" fill="#0284C7"/>
    <text x="302" y="92" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ແມ່ນ້ຳໂອບອຸ້ມ (ສາຍແອວຫົກ / Jade Belt)' : '✓ Tus Dej Puag Ncig (Jade Belt)'}</text>

    <!-- Reverse Bow -->
    <path d="M 580 85 C 550 120 545 165 570 210 L 605 240" fill="none" stroke="#FCA5A5" stroke-width="22" stroke-linecap="round"/>
    <path d="M 580 85 C 550 120 545 165 570 210 L 605 240" fill="none" stroke="#EF4444" stroke-width="16" stroke-linecap="round"/>
    <rect x="495" y="130" width="105" height="26" rx="3" fill="#DC2626"/>
    <text x="547" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຄັນທະນູຕັດ (Reverse Bow)' : '✗ Tus Dej Tua (Reverse Bow)'}</text>
    <text x="547" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#FEE2E2" text-anchor="middle">${isLao ? 'ນ້ຳຕຳໃສ່ຝັ່ງກົງກັນຂ້າມ' : 'Dej tua rau sab nraud'}</text>

    <!-- Property Boundary -->
    <rect x="335" y="115" width="200" height="260" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="2.5"/>

    <!-- Main House -->
    <polygon points="380,145 435,128 490,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
    <rect x="385" y="145" width="100" height="55" fill="#FEF08A" stroke="#854D0E" stroke-width="1.8" rx="3"/>
    <text x="435" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#1E293B" text-anchor="middle">${isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev'}</text>
    <text x="435" y="186" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ຫັນໜ້າສູ່ລານໝິງຖາງ &amp; ສາຍນ້ຳ' : 'Ntsia rau tshav kaj &amp; dej'}</text>
    <rect x="427" y="196" width="16" height="5" fill="#1E293B"/>

    <!-- Inside Ming Tang -->
    <rect x="350" y="215" width="170" height="55" rx="5" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
    <text x="435" y="232" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
    <text x="435" y="246" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#166534" text-anchor="middle">${isLao ? '✓ ບໍ່ມີບໍ່ນ້ຳ (ດີເລີດທີ່ສຸດ): ລານຫຍ້າຂຽວໂລ່ງສະອາດ' : '✓ Tsis muaj dej (Zoo tshaj): Tshav xyoob'}</text>
    <text x="435" y="258" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ປອດໄພ, ບໍ່ຊຸ່ມຊຶມ, ບໍ່ມີຍຸງ, ຮັບລົມ-ແສງ 100%' : 'Nyab xeeb, tsis ntub, tsis muaj yoov'}</text>

    <!-- Green Dragon Flank: Compact Fountain -->
    <g transform="translate(355, 290)">
      <circle cx="20" cy="20" r="14" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.5"/>
      <ellipse cx="20" cy="20" rx="9" ry="4.5" fill="none" stroke="#38BDF8" stroke-width="1"/>
      <circle cx="20" cy="20" r="2.5" fill="#0284C7"/>
      <text x="20" y="44" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0284C7" text-anchor="middle">${isLao ? '✓ ອ່າງນ້ຳພຸຝັ່ງມັງກອນ' : '✓ Pas Dej Sab Zaj'}</text>
      <text x="20" y="54" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0369A1" text-anchor="middle">${isLao ? '[ຂະໜາດ 10-15%]' : '[10-15%]'}</text>
    </g>

    <!-- White Tiger Flank: Taboo -->
    <g transform="translate(470, 290)">
      <circle cx="20" cy="20" r="14" fill="#FEE2E2" stroke="#DC2626" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="8" y1="8" x2="32" y2="32" stroke="#DC2626" stroke-width="2"/>
      <line x1="32" y1="8" x2="8" y2="32" stroke="#DC2626" stroke-width="2"/>
      <text x="20" y="44" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#DC2626" text-anchor="middle">${isLao ? '🚫 ຫ້າມນ້ຳຝັ່ງເສືອຂາວ' : '🚫 Txwv Dej Sab Tsov'}</text>
      <text x="20" y="54" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#991B1B" text-anchor="middle">${isLao ? '(ເສືອຂາວອ້າປາກ)' : '(Tsov qhib ncauj)'}</text>
    </g>

    <path d="M 435 395 L 435 375 C 435 340 415 320 415 275 C 415 225 427 210 435 201" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>
    <text x="435" y="365" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ ບໍ່ຜ່ານບໍ່ນ້ຳ' : '⟿ Kev tsheb nkhaus'}</text>
    <rect x="420" y="372" width="30" height="6" rx="1" fill="#15803D"/>

    <rect x="250" y="395" width="355" height="28" fill="#334155"/>
    <line x1="250" y1="409" x2="605" y2="409" stroke="#FBBF24" stroke-width="2" stroke-dasharray="8,6"/>
    <text x="435" y="418" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ຖະໜົນດ້ານໜ້າ (Road In Front of Estate)' : 'Kev Pem Hauv Ntej'}</text>
  </g>

  <!-- RIGHT COLUMN CARDS -->
  <rect x="614" y="48" width="174" height="185" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="701" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🚫 4 ຂໍ້ຫ້າມເລື່ອງນ້ຳໃນດິນ' : '🚫 4 Yam Txwv Txog Dej'}</text>
  <text x="622" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '1. ຫ້າມສະນ້ຳໃຫຍ່ຂວາງກາງທາງ' : '1. Txwv pas dej loj thaiv kev'}</text>
  <text x="628" y="99" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#7F1D1D">${isLao ? '(ນ້ຳໃຫຍ່ຖ້ວມເຮືອນ / ປອດຊຸ່ມເຢັນ)' : '(Shui Da Chen She)'}</text>
  <text x="622" y="115" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '2. ຫ້າມນ້ຳຝັ່ງເສືອຂາວ (ເບື້ອງຂວາ)' : '2. Txwv dej sab xis (Sab tsov)'}</text>
  <text x="628" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#7F1D1D">${isLao ? '(ເສືອຂາວອ້າປາກ / ເກີດອຸບັດຕິເຫດ)' : '(Bai Hu Zhang Kou)'}</text>
  <text x="622" y="144" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '3. ຫ້າມນ້ຳໃນມຸມແຫຼມສາມຫຼ່ຽມ' : '3. Txwv dej kaum ntse'}</text>
  <text x="628" y="157" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#7F1D1D">${isLao ? '(ໄຟປະທະນ້ຳ / ວຸ້ນວາຍໃນຄອບຄົວ)' : '(Shui Huo Xiang Chong)'}</text>
  <text x="622" y="173" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '4. ຫ້າມນ້ຳຂັງດຳເນົ່າເໝັນ (Dead Water)' : '4. Txwv dej tsw lwj (Dej Tuag)'}</text>

  <rect x="614" y="240" width="174" height="202" rx="6" fill="#F8FAFC" stroke="#475569" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="240" width="174" height="24" rx="6" fill="#334155"/>
  <text x="701" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '💡 ຄຳແນະນຳທີ່ດີທີ່ສຸດ' : '💡 Tswv Yim Zoo Tshaj'}</text>
  <text x="622" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#0F172A">${isLao ? '• ບ້ານພັກອາໄສທົ່ວໄປ: ບໍ່ຕ້ອງເຮັດສະນ້ຳ' : '• Tsev nyob: Tsis tas tsim pas dej'}</text>
  <text x="622" y="297" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#0F172A">${isLao ? '• ປູຫຍ້າຂຽວໂລ່ງ = ປອດໄພ &amp; Ju Qi ສູງ' : '• Xyoob ntsuab = Nyab xeeb &amp; Ju Qi'}</text>
  <text x="622" y="314" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#0F172A">${isLao ? '• ຫາກມັກນ້ຳ: ເຮັດອ່າງນ້ຳພຸວົງມົນນ້ອຍ' : '• Yog nyiam: Ua pas dej kheej me'}</text>
  <rect x="620" y="328" width="162" height="46" rx="3" fill="#E2E8F0"/>
  <text x="701" y="343" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#1E293B" text-anchor="middle">${isLao ? 'ຫຼັກຄຳພີ: ມັງກອນຂຽວໄດ້ນ້ຳ' : 'Zaj Tau Dej (Qing Long De Shui)'}</text>
  <text x="701" y="356" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ນ້ຳຢູ່ເບື້ອງຊ້າຍ ກະຕຸ້ນໂຊກລາບ' : 'Dej nyob sab laug txhawb zog'}</text>
  <text x="701" y="367" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#334155" text-anchor="middle">${isLao ? 'ໂດຍບໍ່ກີດຂວາງທາງຍ່າງເຂົ້າເຮືອນ' : 'Tsis thaiv kev nkag tsev'}</text>

  <!-- BOTTOM SUMMARY BAR -->
  <rect x="0" y="445" width="800" height="35" fill="#0F172A"/>
  <text x="400" y="460" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫຼັກການລະບົບນ້ຳ: ແມ່ນ້ຳນອກດິນຖ້າໂອບອຸ້ມ (ສາຍແອວຫົກ) ເປັນມະຫາເສດຖີ, ຖ້າຄັນທະນູຕັດຕ້ອງສ້າງກຳແພງຫີນບັງ.' : 'Tswv Yim: Tus dej sab nraud yog puag ncig (Jade Belt) yuav nplua mias, yog tua rov qab yuav tsum tsim phab ntsa thaiv.'}</text>
  <text x="400" y="472" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#94A3B8" text-anchor="middle">${isLao ? 'ໜອງນ້ຳໃນດິນ: ບໍ່ມີເລີຍເປັນລານຫຍ້າຂຽວໂລ່ງ = ດີເລີດທີ່ສຸດ. ຫາກມີຕ້ອງວາງຝັ່ງມັງກອນຂຽວ 10-15%, ຫ້າມຂວາງກາງທາງ ແລະ ຫ້າມຢູ່ຝັ່ງເສືອຂາວ.' : 'Pas dej hauv av: Tsis muaj dej ua tshav ntsuab = Zoo tshaj. Yog muaj tso sab zaj 10-15%, txwv tsis thaiv kev thiab txwv sab tsov.'}</text>
</svg>
`;
}

// ============================================================================
// 3. ENV-0003: ELECTRIC PYLON & TRANSFORMER (ເສົາໄຟຟ້າແຮງສູງ & ໝໍ້ແປງໄຟ)
// ============================================================================
function renderEnvElectricSvg(lang = 'lao') {
  const isLao = lang === 'lao';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- TOP TITLE HUD BAR -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="80" height="24" rx="4" fill="#EA580C"/>
  <text x="58" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">ENV-0003</text>
  <text x="108" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#F8FAFC">${isLao ? 'ເສົາໄຟຟ້າແຮງສູງ &amp; ໝໍ້ແປງໄຟ: ທາດໄຟຊ່າ &amp; ວິທີແກ້ໄຂ (Electric Pylon Fire Sha)' : 'Ncej Hluav Taws Xob &amp; Transformer: Zog Hluav Taws Sha (Electric Sha)'}</text>
  <rect x="580" y="9" width="105" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="632" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#F97316" text-anchor="middle">${isLao ? 'ທາດໄຟ / Fire Sha' : 'Hluav Taws Sha'}</text>
  <rect x="692" y="9" width="90" height="24" rx="4" fill="#991B1B"/>
  <text x="737" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${isLao ? 'ລະວັງໄຟ' : 'Ceeb Laj'}</text>

  <!-- LEFT COLUMN CARDS -->
  <rect x="12" y="48" width="174" height="185" rx="6" fill="#FFF7ED" stroke="#F97316" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#EA580C"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '⚡ ເສົາໄຟແຮງສູງ / ໝໍ້ແປງ' : '⚡ Ncej Hluav Taws Xob'}</text>
  <text x="20" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#9A3412">${isLao ? '• ເປັນທາດໄຟຮ້ອນ (Huo Sha)' : '• Yog zog hluav taws kub'}</text>
  <text x="20" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#9A3412">${isLao ? '• ແຜ່ຄື້ນແມ່ເຫຼັກໄຟຟ້າ ແລະ ໄອຮ້ອນ' : '• Tshwm zog electromagnetic'}</text>
  <text x="20" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#9A3412">${isLao ? '• ກະທົບຫົວໃຈ, ຄວາມດັນ, ອາລົມຮ້ອນ' : '• Raug lub siab, chim ceev'}</text>
  <rect x="18" y="132" width="162" height="42" rx="4" fill="#FFEDD5"/>
  <text x="99" y="146" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#C2410C" text-anchor="middle">${isLao ? 'ໄລຍະປອດໄພ:' : 'Qhov deb nyab xeeb:'}</text>
  <text x="99" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#9A3412" text-anchor="middle">${isLao ? 'ຫ່າງ >30-50 ແມັດ ຂຶ້ນໄປ' : 'Deb >30-50m sauv'}</text>

  <rect x="12" y="240" width="174" height="202" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="240" width="174" height="24" rx="6" fill="#15803D"/>
  <text x="100" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ ຫຼັກການຖອຍຮົ່ນ' : '🛡️ Txoj Cai Thim Tsev'}</text>
  <text x="20" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#14532D">${isLao ? '1. ຖອຍຕົວເຮືອນເຂົ້າເລິກ' : '1. Thim lub tsev rau tom qab'}</text>
  <text x="20" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#14532D">${isLao ? '2. ເຮັດເດີ່ນໜ້າເປັນສວນກັ່ນຕອງ' : '2. Ua vaj paj pem hauv ntej'}</text>
  <text x="20" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#14532D">${isLao ? '3. ຫ້ອງນອນຢູ່ຝັ່ງໄກເສົາໄຟ' : '3. Chav pw nyob deb ncej'}</text>
  <rect x="18" y="328" width="162" height="45" rx="3" fill="#DCFCE7"/>
  <text x="99" y="343" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#166534" text-anchor="middle">${isLao ? 'ກົດ 5 ທາດ: ດິນລະບາຍໄຟ' : 'Av daws Hluav Taws'}</text>
  <text x="99" y="357" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#14532D" text-anchor="middle">${isLao ? 'ສ້າງກຳແພງດິນ/ຫີນ + ນ້ຳພຸ' : 'Phab ntsa av/zeb + pas dej'}</text>

  <!-- CENTER SITE PLAN -->
  <g id="centerSite">
    <rect x="200" y="48" width="400" height="280" fill="#F0FDF4" stroke="#16A34A" stroke-width="2"/>

    <!-- SAFE HOUSE IN REAR -->
    <polygon points="340,90 400,70 460,90" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
    <rect x="345" y="90" width="110" height="55" fill="#FEF08A" stroke="#854D0E" stroke-width="1.8" rx="3"/>
    <text x="400" y="115" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#1E293B" text-anchor="middle">${isLao ? 'ເຮືອນພັກອາໄສ' : 'Lub Tsev'}</text>
    <text x="400" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ຖອຍຮົ່ນເລິກ >25m ປອດໄພ' : 'Thim deb >25m'}</text>

    <!-- Ming Tang Lawn -->
    <rect x="250" y="160" width="300" height="70" rx="5" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
    <text x="400" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງສີຂຽວ: ກັ່ນຕອງຄື້ນແມ່ເຫຼັກໄຟຟ້າ' : 'Thaj Tshav Kaj: Lim zog hluav taws'}</text>
    <text x="400" y="196" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#166534" text-anchor="middle">${isLao ? '✓ ປູກຫຍ້າຂຽວ + ໄມ້ພຸ່ມດູດຊັບໄອຮ້ອນ' : '✓ Cog xyoob ntsuab lim zog kub'}</text>

    <!-- Water Basin Cure (Water cools Fire) -->
    <circle cx="340" cy="205" r="12" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.2"/>
    <ellipse cx="340" cy="205" rx="8" ry="4" fill="none" stroke="#38BDF8" stroke-width="0.8"/>
    <circle cx="340" cy="205" r="2" fill="#0284C7"/>
    <text x="340" y="228" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0284C7" text-anchor="middle">${isLao ? 'ນ້ຳພຸຊະລໍໄຟ' : 'Pas dej txias'}</text>

    <!-- Defensive Screen Wall & Hedge (Y=245 to 260) -->
    <rect x="200" y="245" width="400" height="5" fill="#334155"/>
    <circle cx="220" cy="255" r="6" fill="#14532D"/>
    <circle cx="245" cy="255" r="6" fill="#166534"/>
    <circle cx="270" cy="255" r="6" fill="#14532D"/>
    <circle cx="295" cy="255" r="6" fill="#166534"/>
    <circle cx="320" cy="255" r="6" fill="#14532D"/>
    <circle cx="345" cy="255" r="6" fill="#166534"/>
    <rect x="375" y="246" width="50" height="15" rx="2" fill="#1E293B" stroke="#94A3B8" stroke-width="1"/>
    <text x="400" y="257" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>
    <circle cx="455" cy="255" r="6" fill="#14532D"/>
    <circle cx="480" cy="255" r="6" fill="#166534"/>
    <circle cx="505" cy="255" r="6" fill="#14532D"/>
    <circle cx="530" cy="255" r="6" fill="#166534"/>
    <circle cx="555" cy="255" r="6" fill="#14532D"/>
    <circle cx="580" cy="255" r="6" fill="#166534"/>

    <!-- FRONT ROAD WITH HIGH VOLTAGE PYLON (Y=330 to 425) -->
    <rect x="200" y="330" width="400" height="95" fill="#334155"/>
    <line x1="200" y1="375" x2="600" y2="375" stroke="#FBBF24" stroke-width="2" stroke-dasharray="8,6"/>
    <text x="400" y="395" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ຖະໜົນໃຫຍ່ (Road with Electric Infrastructure)' : 'Kev Loj'}</text>

    <!-- HIGH VOLTAGE PYLON DRAWING (Right Roadside X=520, Y=340) -->
    <g transform="translate(490, 335)">
      <!-- Steel Pylon Frame -->
      <polygon points="25,10 5,75 45,75" fill="none" stroke="#EA580C" stroke-width="2.2"/>
      <line x1="12" y1="50" x2="38" y2="50" stroke="#EA580C" stroke-width="1.8"/>
      <line x1="18" y1="30" x2="32" y2="30" stroke="#EA580C" stroke-width="1.8"/>
      <line x1="5" y1="75" x2="32" y2="30" stroke="#EA580C" stroke-width="1.2"/>
      <line x1="45" y1="75" x2="18" y2="30" stroke="#EA580C" stroke-width="1.2"/>
      <!-- Cross Arms -->
      <line x1="0" y1="25" x2="50" y2="25" stroke="#EA580C" stroke-width="2"/>
      <line x1="5" y1="45" x2="45" y2="45" stroke="#EA580C" stroke-width="2"/>
      <!-- Sparks / Fire Sha Vectors -->
      <path d="M 0 25 C -20 20 -40 10 -60 0" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3,2"/>
      <polygon points="-62,-2 -55,4 -58,-5" fill="#EF4444"/>
      <path d="M 5 45 C -20 40 -50 35 -75 25" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3,2"/>
      <polygon points="-78,23 -70,28 -74,20" fill="#EF4444"/>
      <rect x="-10" y="78" width="70" height="15" rx="2" fill="#DC2626"/>
      <text x="25" y="89" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '⚡ ເສົາໄຟແຮງສູງ' : '⚡ Ncej Hluav'}</text>
    </g>

    <!-- Gate Positioned Away from Pylon (Left Flank X=260) -->
    <rect x="250" y="326" width="35" height="8" rx="1.5" fill="#15803D"/>
    <text x="267" y="332" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວຫຼົບມຸມ' : 'Rooj Vag'}</text>
  </g>

  <!-- RIGHT COLUMN CARDS -->
  <rect x="614" y="48" width="174" height="185" rx="6" fill="#F8FAFC" stroke="#EA580C" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#EA580C"/>
  <text x="701" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ 4 ວິທີແກ້ໄຟຟ້າຊ່າ' : '🛡️ 4 Txoj Kev Kho Hluav Taws'}</text>
  <text x="622" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9A3412">${isLao ? '1. ຕັ້ງປະຕູຮົ້ວຫຼົບໃຫ້ໄກເສົາໄຟ' : '1. Tso rooj vag deb ncej'}</text>
  <text x="622" y="103" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9A3412">${isLao ? '2. ປູກແນວຕົ້ນໄມ້ໃບໜາບັງສາຍຕາ' : '2. Cog ntoo tuab thaiv qhov muag'}</text>
  <text x="622" y="120" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9A3412">${isLao ? '3. ສ້າງອ່າງນ້ຳພຸ (ນ້ຳດັບໄຟຮ້ອນ)' : '3. Tsim pas dej (dej daws hluav)'}</text>
  <text x="622" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9A3412">${isLao ? '4. ຕັ້ງຫີນແກຣນິດ Tai Shan ສະກັດ' : '4. Pob zeb Tai Shan thaiv'}</text>
  <rect x="620" y="148" width="162" height="30" rx="3" fill="#FFEDD5"/>
  <text x="701" y="161" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#C2410C" text-anchor="middle">${isLao ? 'ຫ້າມຕັ້ງປະຕູຮົ້ວກົງເສົາໄຟ' : 'Txwv tsis tso rooj vag ncaj ncej'}</text>
  <text x="701" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#9A3412" text-anchor="middle">${isLao ? 'ປະຕູກົງເສົາໄຟ = ເສົາສຽບຫົວໃຈ' : 'Ncaj ncej = Hno lub siab'}</text>

  <rect x="614" y="240" width="174" height="202" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="240" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="701" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🚫 ຂໍ້ຫ້າມເລື່ອງໄຟຟ້າ' : '🚫 Cov Lus Txwv'}</text>
  <text x="622" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '• ຫ້າມຫ້ອງນອນໃຫຍ່ຢູ່ຕິດເສົາໄຟ' : '• Txwv chav pw ze ncej'}</text>
  <text x="622" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '• ຫ້າມຫົວຕຽງອີງຝາດ້ານເສົາໄຟ' : '• Txwv taub hau pw ntsia ncej'}</text>
  <text x="622" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '• ຫ້າມເປີດປ່ອງຢ້ຽມຮັບເສົາໄຟກົງໆ' : '• Txwv qhib qhov rai ncaj ncej'}</text>
  <rect x="620" y="325" width="162" height="48" rx="3" fill="#FEE2E2"/>
  <text x="701" y="340" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#B91C1C" text-anchor="middle">${isLao ? 'ວິທີຕິດຜ້າມ່ານ &amp; ກະຈົກ:' : 'Kho Qhov Rai:'}</text>
  <text x="701" y="353" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#991B1B" text-anchor="middle">${isLao ? 'ຕິດຜ້າມ່ານໜາ + ຟິມກັນແສງ UV' : 'Rov ntaub tuab + film thaiv'}</text>
  <text x="701" y="365" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#7F1D1D" text-anchor="middle">${isLao ? 'ຕິດກະຈົກແປດທິດນູນສະທ້ອນຄື້ນ' : 'Daim iav convex Bagua'}</text>

  <!-- BOTTOM SUMMARY BAR -->
  <rect x="0" y="445" width="800" height="35" fill="#0F172A"/>
  <text x="400" y="460" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫຼັກການເສົາໄຟຟ້າແຮງສູງ: ເປັນທາດໄຟຮ້ອນ (Huo Sha). ຕ້ອງຖອຍຕົວເຮືອນເລິກ >25-30 ແມັດ, ຕັ້ງປະຕູຮົ້ວຫຼົບມຸມ.' : 'Tswv Yim: Ncej hluav taws xob yog Hluav Taws Sha. Thim tsev deb >25-30m, tso rooj vag deb ncej.'}</text>
  <text x="400" y="472" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#94A3B8" text-anchor="middle">${isLao ? 'ແກ້ໄຂດ້ວຍແນວຕົ້ນໄມ້ກັ່ນຕອງ, ອ່າງນ້ຳພຸຊະລໍໄຟ, ກຳແພງຫີນ Tai Shan, ແລະ ຫ້າມຫ້ອງນອນຢູ່ຕິດຝັ່ງເສົາໄຟເດັດຂາດ.' : 'Kho nrog ntoo tuab, pas dej txias, pob zeb Tai Shan, thiab txwv chav pw nyob ze ncej.'}</text>
</svg>
`;
}

// ============================================================================
// 4. ENV-0004: CLIFF, CRAGS & BOULDERS (ໜ້າຜາ, ຫີນແຫຼມ & ເນີນເຂົາຊັນ)
// ============================================================================
function renderEnvCliffSvg(lang = 'lao') {
  const isLao = lang === 'lao';

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#EDF2F7"/>
    </linearGradient>
    <linearGradient id="rockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#64748B"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <rect width="800" height="480" fill="url(#bgGrad)"/>

  <!-- TOP TITLE HUD BAR -->
  <rect x="0" y="0" width="800" height="42" fill="#0F172A"/>
  <rect x="18" y="9" width="80" height="24" rx="4" fill="#475569"/>
  <text x="58" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">ENV-0004</text>
  <text x="108" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#F8FAFC">${isLao ? 'ໜ້າຜາ, ຫີນແຫຼມ &amp; ເນີນເຂົາຊັນ: ພູເຂົາຊ່າ &amp; ວິທີແກ້ໄຂ (Cliff &amp; Crag Sha Remedies)' : 'Pob Tsom Zeb, Pob Ntxhab &amp; Roob Ntse: Roob Sha &amp; Kev Kho (Cliff &amp; Rock Sha)'}</text>
  <rect x="580" y="9" width="105" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="632" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#38BDF8" text-anchor="middle">${isLao ? 'ພູເຂົາຊ່າ / Mountain Sha' : 'Roob Sha'}</text>
  <rect x="692" y="9" width="90" height="24" rx="4" fill="#B45309"/>
  <text x="737" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${isLao ? 'ແກ້ດ້ວຍດິນ-ໄມ້' : 'Kho Av-Ntoo'}</text>

  <!-- LEFT COLUMN CARDS -->
  <rect x="12" y="48" width="174" height="185" rx="6" fill="#F8FAFC" stroke="#64748B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#475569"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '⛰️ ຮູບຊົງພູເຂົາທີ່ເປັນຊ່າ' : '⛰️ Cov Roob Sha'}</text>
  <text x="20" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ໜ້າຜາຫັກພັງ (Po Mian Shan):' : '• Roob ntsej muag tawg (Po Mian):'}</text>
  <text x="26" y="99" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#475569">${isLao ? '→ ດິນເຈື່ອນ, ບາດເຈັບ, ຜ່າຕັດ' : '→ Av liam, raug mob'}</text>
  <text x="20" y="115" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#1E293B">${isLao ? '• ຫີນແຫຼມໂຜ່ມອງ (Tan Tou Shan):' : '• Roob soj ntsuam (Tan Tou):'}</text>
  <text x="26" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#475569">${isLao ? '→ ໂຈນຂະໂມຍ, ຄົນຫຼັງຫຼອກລວງ' : '→ Tub sab, neeg dag ntxias'}</text>
  <rect x="18" y="140" width="162" height="34" rx="3" fill="#F1F5F9"/>
  <text x="99" y="154" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#0F172A" text-anchor="middle">${isLao ? 'ອັນຕະລາຍກາຍະພາບ:' : 'Kev phom sij tiag:'}</text>
  <text x="99" y="166" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫີນຕົກ, ດິນເຈື່ອນ, ລົມຫົວຂວັ້ນ' : 'Zeb poob, av liam, cua hnyiab'}</text>

  <rect x="12" y="240" width="174" height="202" rx="6" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="240" width="174" height="24" rx="6" fill="#15803D"/>
  <text x="100" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ 3 ຂັ້ນຕອນແກ້ໄຂໜ້າຜາ' : '🛡️ 3 Kauj Ruam Kho'}</text>
  <text x="20" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '1. ສ້າງກຳແພງກັ້ນດິນ (Retaining Wall)' : '1. Tsim phab ntsa thaiv av'}</text>
  <text x="26" y="291" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#166534">${isLao ? 'ພ້ອມທໍ່ລະບາຍນ້ຳກັນດິນເຈື່ອນ' : 'Nrog qhov tso dej'}</text>
  <text x="20" y="307" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '2. ປູກແນວຕົ້ນໄມ້ປ້ອງກັນ (Pine Buffer)' : '2. Cog ntoo thuv thaiv'}</text>
  <text x="20" y="324" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#14532D">${isLao ? '3. ເຮັດລານຂັ້ນໄດ (Terrace Slopes)' : '3. Ua kauj ruam ntaiv'}</text>
  <rect x="18" y="336" width="162" height="46" rx="3" fill="#DCFCE7"/>
  <text x="99" y="350" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#14532D" text-anchor="middle">${isLao ? 'ໄລຍະຖອຍຮົ່ນປອດໄພ:' : 'Qhov deb nyab xeeb:'}</text>
  <text x="99" y="364" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? 'ຫ່າງຕີນຜາ >10-15 ແມັດຂຶ້ນໄປ' : 'Deb ntawm taw roob >10-15m'}</text>

  <!-- CENTER SITE PLAN -->
  <g id="centerSite">
    <!-- STEEP JAGGED CLIFF IN REAR (Y=48 to 145) -->
    <path d="M 195 48 L 195 130 L 230 115 L 260 140 L 300 120 L 340 145 L 390 125 L 430 145 L 480 120 L 520 140 L 560 115 L 605 135 L 605 48 Z" fill="url(#rockGrad)"/>
    <!-- Craggy Rock Outcrops -->
    <polygon points="260,110 275,80 290,115" fill="#94A3B8"/>
    <polygon points="350,115 370,75 390,120" fill="#CBD5E1"/>
    <polygon points="450,110 470,78 490,115" fill="#94A3B8"/>
    <text x="400" y="70" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#FEF2F2" text-anchor="middle">${isLao ? '⛰️ ໜ້າຜາຊັນ / ຫີນແຫຼມພູເຂົາ (Steep Cliff &amp; Menacing Crags)' : '⛰️ Pob Ntxhab &amp; Roob Ntse'}</text>
    <text x="400" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#FCA5A5" text-anchor="middle">${isLao ? 'ອັນຕະລາຍຫີນຕົກ &amp; ພະລັງງານແຫຼມຄົມ' : 'Kev phom sij zeb poob'}</text>

    <!-- HEAVY DUTY RETAINING WALL AT CLIFF BASE (Y=143 to 155) -->
    <rect x="200" y="143" width="400" height="12" fill="#475569" stroke="#1E293B" stroke-width="1.5"/>
    <!-- Weep drainage holes -->
    <circle cx="230" cy="149" r="2" fill="#0284C7"/>
    <circle cx="270" cy="149" r="2" fill="#0284C7"/>
    <circle cx="310" cy="149" r="2" fill="#0284C7"/>
    <circle cx="350" cy="149" r="2" fill="#0284C7"/>
    <circle cx="390" cy="149" r="2" fill="#0284C7"/>
    <circle cx="430" cy="149" r="2" fill="#0284C7"/>
    <circle cx="470" cy="149" r="2" fill="#0284C7"/>
    <circle cx="510" cy="149" r="2" fill="#0284C7"/>
    <circle cx="550" cy="149" r="2" fill="#0284C7"/>
    <text x="400" y="167" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#15803D" text-anchor="middle">${isLao ? '✓ ກຳແພງກັ້ນດິນຄອນກຣີດເສີມເຫຼັກ + ທໍ່ລະບາຍນ້ຳປ້ອງກັນດິນເຈື່ອນ' : '✓ Phab ntsa thaiv av + Qhov tso dej'}</text>

    <!-- PINE TREE BUFFER BEHIND HOUSE (Y=172 to 195) -->
    <circle cx="230" cy="185" r="9" fill="#14532D"/>
    <circle cx="270" cy="185" r="9" fill="#166534"/>
    <circle cx="310" cy="185" r="9" fill="#14532D"/>
    <circle cx="350" cy="185" r="9" fill="#166534"/>
    <circle cx="390" cy="185" r="9" fill="#14532D"/>
    <circle cx="430" cy="185" r="9" fill="#166534"/>
    <circle cx="470" cy="185" r="9" fill="#14532D"/>
    <circle cx="510" cy="185" r="9" fill="#166534"/>
    <circle cx="550" cy="185" r="9" fill="#14532D"/>
    <circle cx="580" cy="185" r="9" fill="#166534"/>

    <!-- RESIDENTIAL PLOT GROUND (Y=195 to 400) -->
    <rect x="200" y="195" width="400" height="205" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/>

    <!-- SAFE HOUSE (SET BACK >15m FROM CLIFF) -->
    <polygon points="340,225 400,205 460,225" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
    <rect x="345" y="225" width="110" height="55" fill="#FEF08A" stroke="#854D0E" stroke-width="1.8" rx="3"/>
    <text x="400" y="250" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#1E293B" text-anchor="middle">${isLao ? 'ເຮືອນພັກອາໄສ' : 'Lub Tsev'}</text>
    <text x="400" y="263" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ພິງແນວຕົ້ນສົນ &amp; ກຳແພງກັ້ນດິນ (Xuan Wu)' : 'Zaum ntoo thuv &amp; phab ntsa'}</text>
    <rect x="392" y="277" width="16" height="5" fill="#1E293B"/>

    <!-- Ming Tang Lawn In Front -->
    <rect x="300" y="300" width="200" height="55" rx="5" fill="#FFFFFF" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
    <text x="400" y="318" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງດ້ານໜ້າ' : 'Thaj Tshav Kaj Pem Hauv Ntej'}</text>
    <text x="400" y="332" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '✓ ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ &amp; ເຕົ້າໂຮມພະລັງຊີ່' : '✓ Tshav ntsuab kaj txais teeb'}</text>
    <text x="400" y="344" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.0" fill="#0284C7" text-anchor="middle">${isLao ? '• ອ່າງນ້ຳພຸຝັ່ງມັງກອນ 10-15% (ຖ້າມີ)' : '• Pas dej sab zaj 10-15%'}</text>

    <!-- Front Road -->
    <rect x="200" y="400" width="400" height="25" fill="#334155"/>
    <line x1="200" y1="412" x2="600" y2="412" stroke="#FBBF24" stroke-width="2" stroke-dasharray="8,6"/>
    <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ຖະໜົນໃຫຍ່ດ້ານໜ້າ (Main Road)' : 'Kev Loj'}</text>
    <rect x="385" y="396" width="30" height="8" rx="1.5" fill="#15803D"/>
  </g>

  <!-- RIGHT COLUMN CARDS -->
  <rect x="614" y="48" width="174" height="185" rx="6" fill="#F8FAFC" stroke="#475569" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#334155"/>
  <text x="701" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ ວິສະວະກຳປ້ອງກັນ' : '🛡️ Kev Tiv Thaiv Tiag'}</text>
  <text x="622" y="86" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#0F172A">${isLao ? '1. ເຈາະທໍ່ລະບາຍນ້ຳກຳແພງ' : '1. Qhov tso dej hauv phab ntsa'}</text>
  <text x="628" y="99" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#475569">${isLao ? 'ເພື່ອຫຼຸດແຮງດັນນ້ຳໃຕ້ດິນ' : 'Txo zog dej hauv av'}</text>
  <text x="622" y="115" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#0F172A">${isLao ? '2. ປູກຫຍ້າແຝກ / ໄມ້ຢຶດໜ້າດິນ' : '2. Cog nroj tiv thaiv av'}</text>
  <text x="622" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#0F172A">${isLao ? '3. ຕາໜ່າງເຫຼັກກັນຫີນຕົກ (Rock Net)' : '3. Hlua hlau thaiv zeb poob'}</text>
  <rect x="620" y="145" width="162" height="32" rx="3" fill="#E2E8F0"/>
  <text x="701" y="159" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#1E293B" text-anchor="middle">${isLao ? 'ປ່ຽນພູເຂົາຮ້າຍໃຫ້ກາຍເປັນ Xuan Wu' : 'Hloov roob phem ua Xuan Wu'}</text>
  <text x="701" y="170" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ດ້ວຍແນວຕົ້ນສົນ ແລະ ກຳແພງແໜ້ນ' : 'Nrog ntoo thuv &amp; phab ntsa'}</text>

  <rect x="614" y="240" width="174" height="202" rx="6" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="240" width="174" height="24" rx="6" fill="#DC2626"/>
  <text x="701" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '🚫 ຂໍ້ຫ້າມເລື່ອງໜ້າຜາ' : '🚫 Cov Lus Txwv'}</text>
  <text x="622" y="278" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '• ຫ້າມສ້າງເຮືອນຕິດແປະຕີນຜາ' : '• Txwv tsim tsev ze taw roob'}</text>
  <text x="622" y="295" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '• ຫ້າມໜ້າເຮືອນປະເຊີນໜ້າຜາຊັນ' : '• Txwv tsev ntsia ncaj pob tsom'}</text>
  <text x="622" y="312" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#991B1B">${isLao ? '• ຫ້າມຂຸດເຈາະຕັດຕີນຜາຊະຊາຍ' : '• Txwv khawb taw roob yam tsis zoo'}</text>
  <rect x="620" y="325" width="162" height="48" rx="3" fill="#FEE2E2"/>
  <text x="701" y="340" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#B91C1C" text-anchor="middle">${isLao ? 'ຫຼັກຄວາມປອດໄພສູງສຸດ:' : 'Kev Nyab Xeeb Loj Tshaj:'}</text>
  <text x="701" y="353" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#991B1B" text-anchor="middle">${isLao ? 'ຖອຍຮົ່ນເຮືອນໃຫ້ພົ້ນແນວຫີນຕົກ' : 'Thim tsev kom dhau thaj chaw'}</text>
  <text x="701" y="365" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#7F1D1D" text-anchor="middle">${isLao ? 'ກວດສອບຄວາມແໜ້ນຂອງຫີນສະເໝີ' : 'Tshawb xyuas pob zeb tas li'}</text>

  <!-- BOTTOM SUMMARY BAR -->
  <rect x="0" y="445" width="800" height="35" fill="#0F172A"/>
  <text x="400" y="460" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫຼັກການໜ້າຜາ &amp; ຫີນແຫຼມ: ເປັນພູເຂົາຊ່າ (Mountain Sha) ທີ່ສ່ຽງດິນເຈື່ອນ ແລະ ຫີນຕົກ. ຕ້ອງສ້າງກຳແພງກັ້ນດິນຄອນກຣີດ.' : 'Tswv Yim: Pob ntxhab &amp; roob ntse yog Roob Sha uas pheej hmoo av liam. Yuav tsum tsim phab ntsa thaiv av.'}</text>
  <text x="400" y="472" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#94A3B8" text-anchor="middle">${isLao ? 'ຖອຍຕົວເຮືອນຫ່າງຕີນຜາ >15m, ປູກແນວຕົ້ນສົນໜາດູດຊັບພະລັງງານ, ແລະ ເຈາະທໍ່ລະບາຍນ້ຳກຳແພງຫຼຸດແຮງດັນໃຕ້ດິນ.' : 'Thim tsev deb >15m, cog ntoo thuv tuab, thiab ua qhov tso dej kom tsis txhob liam.'}</text>
</svg>
`;
}

// Render all 4 to PNG via Playwright
async function renderAllEnvArchetypes() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2400, height: 1440 } });

  const envs = [
    { id: 'ENV-0001', name: 'Cemetery & Graves Overview', fn: renderEnvCemeterySvg },
    { id: 'ENV-0001-A', name: 'Left Flank Grave (Green Dragon)', fn: renderEnvCemeteryLeftSvg },
    { id: 'ENV-0001-B', name: 'Right Flank Grave (White Tiger)', fn: renderEnvCemeteryRightSvg },
    { id: 'ENV-0001-C', name: 'Rear Grave (Black Tortoise Xuan Wu)', fn: renderEnvCemeteryRearSvg },
    { id: 'ENV-0001-D', name: 'Old Grave Inside Plot (Soil Remediation)', fn: renderEnvCemeteryInsideSvg },
    { id: 'ENV-0002', name: 'Water Systems (Inside vs Outside)', fn: renderEnvWaterSvg },
    { id: 'ENV-0003', name: 'High-Voltage Electric Pylon & Transformer', fn: renderEnvElectricSvg },
    { id: 'ENV-0004', name: 'Cliff, Crags & Steep Slope Sha', fn: renderEnvCliffSvg }
  ];

  for (const env of envs) {
    console.log(`Processing ${env.id}: ${env.name}...`);
    for (const lang of ['lao', 'hmong']) {
      const svg = env.fn(lang);
      
      // Save SVG
      fs.writeFileSync(`lao/img/${env.id}.svg`, env.fn('lao'), 'utf8');
      fs.writeFileSync(`hmong/img/${env.id}.svg`, env.fn('hmong'), 'utf8');

      await page.setContent(`<!DOCTYPE html><html><body style="margin:0;padding:0;overflow:hidden;background:#F8FAFC;">${svg}</body></html>`);
      const svgEl = await page.$('svg');
      const pngBuffer = await svgEl.screenshot({ type: 'png' });

      // Save PNG
      if (lang === 'lao') {
        fs.writeFileSync(`lao/img/${env.id}.png`, pngBuffer);
        fs.writeFileSync(path.join(artifactDir, `${env.id}-lao-masterclass.png`), pngBuffer);
      } else {
        fs.writeFileSync(`hmong/img/${env.id}.png`, pngBuffer);
        fs.writeFileSync(path.join(artifactDir, `${env.id}-hmong-masterclass.png`), pngBuffer);
      }
    }
    console.log(`  ✓ Successfully rendered ${env.id} (Lao & Hmong)`);
  }

  await browser.close();
  console.log('\n🎉 ALL 4 ENVIRONMENTAL MASTERCLASS ARCHETYPES RENDERED SUCCESSFULLY!');
}

renderAllEnvArchetypes().catch(err => {
  console.error('Fatal render error:', err);
  process.exit(1);
});
