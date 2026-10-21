// render_all_boundary_plots.js
// Masterclass Renderer for 18 Boundary &amp; Environmental Adjacency Archetypes (ENV-0001 to ENV-0018)
// Generates 800x480 high-precision architectural vector diagrams in both Lao and White Hmong RPA.

const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const laoData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_boundary_structured_lao.json'), 'utf8'));
const hmongData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_boundary_structured_hmong.json'), 'utf8'));

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
    .replace(/[🏢]/g, '')
    .replace(/[✓✔]/g, '✓')
    .replace(/[✗✘]/g, '✗')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/s+/g, ' ')
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

// Generate Center SVG drawing for each of the 18 Boundary Archetypes
// Architectural House Helper for Boundary Plots
function renderBoundaryHouse(hx, hy, hw, hh, roofPoints, isLao, houseText, subText, options = {}) {
  const bedSide = options.bedSide || 'left';
  const partX = bedSide === 'left' ? hx + Math.round(hw * 0.44) : hx + Math.round(hw * 0.56);
  const bedText = isLao ? 'ຫ້ອງນອນໃຫຍ່' : 'Chaw Pw Loj';
  const bedSub = isLao ? 'ຫົວຕຽງ' : 'Taub Hau';
  const hallText = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais';
  const doorText = isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj';

  let bedSvg = '';
  let hallSvg = '';
  let doorSvg = '';

  if (bedSide === 'left') {
    const bedX = hx + 6;
    const bedY = hy + 6;
    const bedW = 28;
    const bedH = Math.min(hh - 14, 20);
    const bedCenterX = bedX + bedW / 2;
    const hallCenterX = partX + (hx + hw - partX) / 2;
    bedSvg = `
      <!-- Master Bedroom -->
      <rect x="${bedX}" y="${bedY}" width="${bedW}" height="${bedH}" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" rx="2"/>
      <rect x="${bedX}" y="${bedY}" width="${bedW}" height="5" fill="#0284C7" rx="1"/>
      <text x="${bedCenterX}" y="${hy + 16}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#0369A1" text-anchor="middle">${bedSub}</text>
      <text x="${bedCenterX}" y="${hy + hh - 12}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${bedText}</text>
    `;
    hallSvg = `
      <!-- Living Hall -->
      <text x="${hallCenterX}" y="${hy + 20}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
      <text x="${hallCenterX}" y="${hy + 35}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${hallText}</text>
    `;
    if (options.hasDoor !== false) {
      doorSvg = `
        <!-- Front Main Door Step & Prominent Label -->
        <rect x="${hallCenterX - 10}" y="${hy + hh}" width="20" height="5" fill="#1E293B"/>
        <text x="${hallCenterX}" y="${hy + hh + 14}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${doorText}</text>
      `;
    }
  } else {
    // Bed on right side
    const bedX = hx + hw - 34;
    const bedY = hy + 6;
    const bedW = 28;
    const bedH = Math.min(hh - 14, 20);
    const bedCenterX = bedX + bedW / 2;
    const hallCenterX = hx + (partX - hx) / 2;
    bedSvg = `
      <!-- Master Bedroom -->
      <rect x="${bedX}" y="${bedY}" width="${bedW}" height="${bedH}" fill="#FFFFFF" stroke="#0284C7" stroke-width="1" rx="2"/>
      <rect x="${bedX}" y="${bedY}" width="${bedW}" height="5" fill="#0284C7" rx="1"/>
      <text x="${bedCenterX}" y="${hy + 16}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#0369A1" text-anchor="middle">${bedSub}</text>
      <text x="${bedCenterX}" y="${hy + hh - 12}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${bedText}</text>
    `;
    hallSvg = `
      <!-- Living Hall -->
      <text x="${hallCenterX}" y="${hy + 20}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
      <text x="${hallCenterX}" y="${hy + 35}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${hallText}</text>
    `;
    if (options.hasDoor !== false) {
      doorSvg = `
        <!-- Front Main Door Step & Prominent Label -->
        <rect x="${hallCenterX - 10}" y="${hy + hh}" width="20" height="5" fill="#1E293B"/>
        <text x="${hallCenterX}" y="${hy + hh + 14}" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${doorText}</text>
      `;
    }
  }

  return `
    <!-- House Structure & Interior -->
    <rect x="${hx}" y="${hy}" width="${hw}" height="${hh}" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
    <polygon points="${roofPoints}" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
    <line x1="${partX}" y1="${hy}" x2="${partX}" y2="${hy + hh}" stroke="#B45309" stroke-width="1.2" stroke-dasharray="3,2"/>
    ${bedSvg}
    ${hallSvg}
    ${doorSvg}
  `;
}

function renderCenterDrawing(id, lang) {
  const isLao = lang === 'lao';
  const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
  const gateOkText = isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj';
  const gateNoText = isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag';

  switch (id) {
    case 'ENV-0001': // Single Road Frontage
      return `
        <!-- Main Plot Ground (x=275, y=95 to 355) -->
        <rect x="275" y="95" width="250" height="260" fill="#DCFCE7" rx="3"/>
        <!-- Rear & Side Perimeter Fences -->
        <line x1="275" y1="95" x2="525" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="275" y1="95" x2="275" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="525" y1="95" x2="525" y2="355" stroke="#334155" stroke-width="3"/>

        <text x="400" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="245" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 245 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="555" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>
        
        ${renderBoundaryHouse(335, 115, 130, 65, '325,115 400,90 475,115', isLao, houseText, isLao ? 'ຕັ້ງຫຼັງ 1/3 ຮັບພະລັງ' : 'Zaum 1/3 Tom Qab')}

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="290" y="200" width="220" height="74" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="214" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="227" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="239" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 450 262 A 20 11 0 0 0 490 262 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="470" y="258" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ/ນ້ຳພຸ (ຖ້າມີ)]' : '[Pas Dej (Yog Muaj)]'}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING AT DRAGON SIDE -->
        <line x1="275" y1="355" x2="305" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="350" y1="355" x2="525" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON THE FENCE LINE -->
        <rect x="301" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="346" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward to Courtyard) -->
        <line x1="305" y1="355" x2="315" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="350" y1="355" x2="340" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 327 395 L 327 355 C 327 320 345 285 375 265 C 405 245 425 220 425 188" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>
        <text x="338" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(-30 338 280)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(198, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="105" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="105" cy="5" r="2.2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO TIGER CORNER ON FENCE) -->
        <g transform="translate(440, 363)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="41" y1="0" x2="41" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0002': // Corner Plot
      return `
        <!-- Side road on right -->
        <rect x="525" y="48" width="45" height="340" fill="url(#roadGrad)"/>
        <line x1="547" y1="48" x2="547" y2="388" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="8,6"/>
        <text x="547" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#F8FAFC" text-anchor="middle" transform="rotate(90 547 180)">${isLao ? 'ຖະໜົນສາຍຮອງ (Side Road)' : 'Kev Sab Xis (Side Road)'}</text>
        
        <!-- Plot Ground with chamfered corner -->
        <polygon points="265,95 525,95 525,310 490,355 265,355" fill="#FEF9C3"/>
        <polygon points="270,100 520,100 520,307 488,349 270,349" fill="none" stroke="#CA8A04" stroke-width="1.2" stroke-dasharray="5,4"/>

        <!-- Perimeter Fences -->
        <line x1="265" y1="95" x2="525" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="265" y1="95" x2="265" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="525" y1="95" x2="525" y2="310" stroke="#334155" stroke-width="3"/>
        <line x1="525" y1="310" x2="490" y2="355" stroke="#DC2626" stroke-width="3.5"/>
        <circle cx="510" cy="330" r="8" fill="#15803D"/>
        <circle cx="495" cy="342" r="7" fill="#166534"/>

        <text x="395" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="245" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 245 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>

        ${renderBoundaryHouse(300, 120, 125, 65, '290,120 362,95 435,120', isLao, houseText, isLao ? 'ວາງໃນມຸມທະແຍງໃນ' : 'Kaum Sab Hauv')}

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING (MAIN ROAD, SETBACK >10M) -->
        <line x1="265" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="345" y1="355" x2="490" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 310 335 270 350 230" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO CHAMFERED CORNER APEX) -->
        <g transform="translate(470, 363)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="41" y1="0" x2="41" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0003': // Front & Rear Through Plot
      return `
        <!-- Rear Road at Top -->
        <rect x="200" y="48" width="400" height="44" fill="url(#roadGrad)"/>
        <line x1="200" y1="70" x2="600" y2="70" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="10,6"/>
        <text x="400" y="74" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#F8FAFC" text-anchor="middle">${isLao ? '! ຖະໜົນດ້ານຫຼັງ (Chuan Xin Sha ທາງຮົ່ວ)' : '! Kev Tom Qab (Chuan Xin Sha)'}</text>
        
        <!-- Plot Ground -->
        <rect x="265" y="96" width="270" height="259" fill="#FEE2E2"/>
        <rect x="270" y="101" width="260" height="249" fill="none" stroke="#DC2626" stroke-width="1.2" stroke-dasharray="5,4"/>

        <!-- Defensive Rear Solid Wall 2.5m & 7 Pines -->
        <line x1="265" y1="96" x2="535" y2="96" stroke="#991B1B" stroke-width="6"/>
        <circle cx="285" cy="110" r="7" fill="#14532D"/><circle cx="325" cy="110" r="8" fill="#166534"/>
        <circle cx="365" cy="110" r="8" fill="#14532D"/><circle cx="400" cy="110" r="9" fill="#166534"/>
        <circle cx="435" cy="110" r="8" fill="#14532D"/><circle cx="475" cy="110" r="8" fill="#166534"/><circle cx="515" cy="110" r="7" fill="#14532D"/>

        <!-- Side Fences -->
        <line x1="265" y1="96" x2="265" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="535" y1="96" x2="535" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="245" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 245 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="555" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        ${renderBoundaryHouse(335, 145, 130, 65, '325,145 400,120 475,145', isLao, houseText, isLao ? 'ພິງກຳແພງທຶບ ຫ້າມເປີດທະລຸ' : 'Zaum Phab Ntsa Tuab')}

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING -->
        <line x1="265" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="345" y1="355" x2="535" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 310 335 280 365 245" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO REAR WALL) -->
        <g transform="translate(355, 68)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມເຈາະປະຕູຫຼັງ' : '✗ Txwv Rooj Tom Qab'}</text>
          <line x1="45" y1="18" x2="45" y2="24" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="45" cy="24" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0004': // Flanked Road / Y-Fork
      return `
        <!-- Left & Right Roads -->
        <polygon points="360,48 400,48 255,410 205,410" fill="url(#roadGrad)"/>
        <polygon points="400,48 440,48 595,410 545,410" fill="url(#roadGrad)"/>
        <polygon points="400,95 255,410 545,410" fill="#FEF2F2"/>
        
        <!-- Fences -->
        <line x1="255" y1="410" x2="545" y2="410" stroke="#DC2626" stroke-width="3"/>
        <line x1="400" y1="95" x2="255" y2="410" stroke="#DC2626" stroke-width="3"/>
        <line x1="400" y1="95" x2="545" y2="410" stroke="#DC2626" stroke-width="3"/>

        <!-- Apex Tai Shan & Wall -->
        <rect x="375" y="96" width="50" height="13" rx="2" fill="#334155"/>
        <text x="400" y="106" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>
        <line x1="370" y1="145" x2="430" y2="145" stroke="#15803D" stroke-width="6"/>

        ${renderBoundaryHouse(330, 225, 140, 65, '325,225 400,202 475,225', isLao, houseText, isLao ? 'ເຂດປອດໄພດ່ານຫຼັງ' : 'Thaj Chaw Nyab Xeeb')}

        <!-- PHYSICAL GATE ON LEFT DRAGON ROAD (SAFE SETBACK >15M) -->
        <rect x="272" y="340" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="290" y="315" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <line x1="274" y1="340" x2="286" y2="346" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="292" y1="315" x2="282" y2="322" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 235 340 L 284 330 C 310 320 330 300 350 290" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO LEFT DRAGON GATE) -->
        <g transform="translate(195, 363)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="60" y1="0" x2="75" y2="-20" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="75" cy="-20" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO ACUTE APEX) -->
        <g transform="translate(355, 68)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="45" y1="18" x2="45" y2="24" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="45" cy="24" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0005': // Island Plot / Roundabout 360
      return `
        <!-- Circular Traffic Roundabout Ring (Asphalt with bright yellow lane divider) -->
        <ellipse cx="400" cy="210" rx="175" ry="135" fill="none" stroke="#1E293B" stroke-width="34"/>
        <ellipse cx="400" cy="210" rx="175" ry="135" fill="none" stroke="#EAB308" stroke-width="2" stroke-dasharray="12,8"/>
        <ellipse cx="400" cy="210" rx="192" ry="152" fill="none" stroke="#475569" stroke-width="1.5"/>
        <ellipse cx="400" cy="210" rx="158" ry="118" fill="none" stroke="#F8FAFC" stroke-width="2"/>

        <!-- Traffic Flow Direction Arrows & Label -->
        <text x="400" y="62" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#F8FAFC" text-anchor="middle">&#10227; ${isLao ? 'ຖະໜົນວົງວຽນອ້ອມຮອບ 360° (Island Roundabout)' : 'Kev Ncig 360° (Island Roundabout)'} &#10227;</text>

        <!-- Island Property Ground Fill -->
        <ellipse cx="400" cy="210" rx="156" ry="116" fill="#DCFCE7" stroke="#15803D" stroke-width="3"/>

        <!-- Dense 360° Protective Evergreen Windbreak Trees Encircling Island -->
        <circle cx="280" cy="140" r="8" fill="#15803D"/><circle cx="320" cy="115" r="9" fill="#166534"/>
        <circle cx="365" cy="102" r="8" fill="#15803D"/><circle cx="435" cy="102" r="8" fill="#15803D"/>
        <circle cx="480" cy="115" r="9" fill="#166534"/><circle cx="520" cy="140" r="8" fill="#15803D"/>
        <circle cx="545" cy="180" r="8" fill="#166534"/><circle cx="545" cy="240" r="8" fill="#15803D"/>
        <circle cx="520" cy="280" r="9" fill="#166534"/><circle cx="475" cy="305" r="8" fill="#15803D"/>
        <circle cx="400" cy="320" r="9" fill="#166534"/><circle cx="330" cy="310" r="8" fill="#15803D"/>
        <circle cx="255" cy="240" r="8" fill="#166534"/><circle cx="255" cy="180" r="8" fill="#15803D"/>

        <!-- Central Residence (Seated Securely at Center) -->
        ${renderBoundaryHouse(345, 142, 110, 52, '335,142 400,120 465,142', isLao, houseText, '')}

        <!-- Ming Tang Bright Hall Lawn in Front of Residence -->
        <rect x="320" y="218" width="160" height="42" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="400" y="234" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເກັບພະລັງຊີ່)' : 'Thaj Tshav Kaj (Ju Qi)'}</text>
        <text x="400" y="248" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#166534" text-anchor="middle">${isLao ? '• ແນວຕົ້ນໄມ້ບັງລົມ 360° ສະກັດລົມປັ່ນປ່ວນ' : '• Hav ntoo 360° thaiv cua ntsawj'}</text>

        <!-- Single Controlled Dragon Gate on Low-Speed Arc (x=280, y=285) -->
        <rect x="274" y="280" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="296" y="265" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <path d="M 245 305 C 265 292 285 280 315 272 C 355 260 410 248 420 200" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>
        <text x="355" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED SINGLE CONTROLLED GATE BADGE -->
        <g transform="translate(195, 360)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="95" y2="-65" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="95" cy="-65" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO DIRECT TRAFFIC ARC) -->
        <g transform="translate(450, 360)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="20" y1="0" x2="-20" y2="-45" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-20" cy="-45" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0006': // Easement / Right-of-Way Plot
      return `
        <!-- Plot Enclave -->
        <rect x="275" y="95" width="250" height="160" fill="#DCFCE7" rx="3"/>
        <line x1="275" y1="95" x2="525" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="275" y1="95" x2="275" y2="255" stroke="#334155" stroke-width="3"/>
        <line x1="525" y1="95" x2="525" y2="255" stroke="#334155" stroke-width="3"/>
        <line x1="275" y1="255" x2="378" y2="255" stroke="#334155" stroke-width="3"/>
        <line x1="422" y1="255" x2="525" y2="255" stroke="#334155" stroke-width="3"/>

        <!-- Neighbor properties on left and right -->
        <rect x="200" y="95" width="70" height="260" fill="#E2E8F0" stroke="#94A3B8"/>
        <text x="235" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#64748B" text-anchor="middle" transform="rotate(-90 235 220)">${isLao ? 'ດິນເພື່ອນບ້ານຊ້າຍ' : 'Ciam Av Tsev Sab Laug'}</text>
        <rect x="530" y="95" width="70" height="260" fill="#E2E8F0" stroke="#94A3B8"/>
        <text x="565" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#64748B" text-anchor="middle" transform="rotate(90 565 220)">${isLao ? 'ດິນເພື່ອນບ້ານຂວາ' : 'Ciam Av Tsev Sab Xis'}</text>
        <text x="400" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>

        <!-- Access Corridor -->
        <rect x="378" y="255" width="44" height="100" fill="#FEF3C7" stroke="#CA8A04" stroke-width="1.5"/>
        <line x1="378" y1="255" x2="378" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="422" y1="255" x2="422" y2="355" stroke="#334155" stroke-width="3"/>
        <circle cx="370" cy="290" r="4" fill="#F59E0B"/><circle cx="430" cy="290" r="4" fill="#F59E0B"/>
        <circle cx="370" cy="330" r="4" fill="#F59E0B"/><circle cx="430" cy="330" r="4" fill="#F59E0B"/>

        ${renderBoundaryHouse(335, 115, 130, 60, '325,115 400,90 475,115', isLao, houseText, isLao ? 'ບ່ອນພັກອາໄສສະຫງົບ' : 'Thaj Chaw Twj Ywm')}

        <!-- PHYSICAL GATE AT CORRIDOR ENTRANCE TO MAIN ROAD (Y=355) -->
        <rect x="374" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="418" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <line x1="378" y1="355" x2="388" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="422" y1="355" x2="412" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 400 395 L 400 255 C 400 220 380 200 380 175" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR CORRIDOR) -->
        <g transform="translate(275, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO PROPERTY CORNER WITHOUT ACCESS) -->
        <g transform="translate(440, 240)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
        </g>
      `;

    case 'ENV-0007': // Front Jade Belt Water
      return `
        <!-- Jade Belt River Gracefully Hugging Front (Vibrant Blue with Waves) -->
        <path d="M 190 310 C 290 355 510 355 610 310" fill="none" stroke="#0284C7" stroke-width="26"/>
        <path d="M 190 310 C 290 355 510 355 610 310" fill="none" stroke="#38BDF8" stroke-width="16"/>
        <path d="M 190 310 C 290 355 510 355 610 310" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="8,6"/>
        <text x="400" y="342" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '🌊 ສາຍນ້ຳສາຍຮັດແອວຫົກ (Yu Dai Shui - ໂອບອຸ້ມຊັບ)' : '🌊 Dej Txoj Siv Hlua Jade'}</text>

        <!-- Plot Ground -->
        <rect x="270" y="95" width="260" height="205" fill="#DCFCE7" rx="3"/>
        <line x1="270" y1="95" x2="530" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="270" y1="95" x2="270" y2="300" stroke="#334155" stroke-width="3"/>
        <line x1="530" y1="95" x2="530" y2="300" stroke="#334155" stroke-width="3"/>
        <text x="400" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="245" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 245 200)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="555" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 200)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        ${renderBoundaryHouse(335, 125, 130, 52, '325,125 400,102 475,125', isLao, houseText, '')}

        <!-- SOLID STONE BRIDGE SPANNING ACROSS RIVER AT DRAGON SIDE -->
        <rect x="318" y="302" width="34" height="48" fill="#F8FAFC" stroke="#475569" stroke-width="1.5" rx="2"/>
        <line x1="318" y1="302" x2="318" y2="350" stroke="#0284C7" stroke-width="2.5"/>
        <line x1="352" y1="302" x2="352" y2="350" stroke="#0284C7" stroke-width="2.5"/>
        <text x="335" y="328" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.8" fill="#334155" text-anchor="middle">${isLao ? '[ຂົວຂ້າມນ້ຳ]' : '[Choj]'}</text>

        <!-- Driveway Crossing Bridge to Residence -->
        <path d="M 335 395 L 335 300 C 335 260 360 235 375 210" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT CLEAR OF BRIDGE) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="120" y2="-25" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="120" cy="-25" r="2.2" fill="#15803D"/>
        </g>
      `;

    case 'ENV-0008': // Front Reverse Bow Water
      return `
        <!-- Reverse Bow River Blasting Toward Front Boundary (Vibrant Blue, No Road Collision!) -->
        <path d="M 200 375 C 310 295 490 295 600 375" fill="none" stroke="#0284C7" stroke-width="28"/>
        <path d="M 200 375 C 310 295 490 295 600 375" fill="none" stroke="#38BDF8" stroke-width="16"/>
        <path d="M 200 375 C 310 295 490 295 600 375" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-dasharray="8,6"/>
        <text x="400" y="325" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '🌊 ສາຍນ້ຳຄັນທະນູປີ້ນ (Fan Gong Shui - ພະລັງພິຄາດ)' : '🌊 Dej Ua Hneev Tua (Fan Gong Shui)'}</text>

        <!-- Plot Ground with 15m Safety Setback -->
        <rect x="260" y="90" width="280" height="195" fill="#FEF2F2" rx="3"/>
        <line x1="260" y1="90" x2="540" y2="90" stroke="#15803D" stroke-width="4"/>
        <line x1="260" y1="90" x2="260" y2="285" stroke="#334155" stroke-width="3"/>
        <line x1="540" y1="90" x2="540" y2="285" stroke="#334155" stroke-width="3"/>
        
        <!-- Reinforced Water Defense Wall & 7 Protective Pines -->
        <line x1="260" y1="285" x2="540" y2="285" stroke="#991B1B" stroke-width="6"/>
        <circle cx="280" cy="272" r="7" fill="#14532D"/><circle cx="320" cy="272" r="8" fill="#166534"/>
        <circle cx="360" cy="272" r="8" fill="#14532D"/><circle cx="400" cy="272" r="9" fill="#166534"/>
        <circle cx="440" cy="272" r="8" fill="#14532D"/><circle cx="480" cy="272" r="8" fill="#166534"/><circle cx="520" cy="272" r="7" fill="#14532D"/>

        <text x="400" y="80" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="240" y="190" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 240 190)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="560" y="190" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 560 190)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        ${renderBoundaryHouse(335, 115, 130, 52, '325,115 400,92 475,115', isLao, houseText, '')}

        <!-- Ming Tang Bright Hall (Seated deep in plot) -->
        <rect x="320" y="190" width="160" height="42" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="400" y="206" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#166534" text-anchor="middle">${isLao ? '• ຖອຍຮົ່ນອາຄານ >15m ຫຼີກກະແສນ້ຳແທງ' : '• Thim tsev deb tshaj 15m'}</text>

        <!-- Gate on Left Flank (Safe from Reverse Bow Peak) -->
        <path d="M 230 380 C 240 330 255 290 275 285" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO SHELTERED FLANK) -->
        <g transform="translate(195, 360)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO WATER IMPACT APEX) -->
        <g transform="translate(450, 360)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="45" y1="0" x2="45" y2="-45" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="45" cy="-45" r="2.2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0009': // Rear Water
      return `
        <!-- Rear River at Top (Y=50..85) -->
        <path d="M 200 68 L 600 68" stroke="#0284C7" stroke-width="26"/>
        <path d="M 200 68 L 600 68" stroke="#38BDF8" stroke-width="14"/>
        <text x="400" y="72" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ສາຍນ້ຳດ້ານຫຼັງ (Rear Water - ຂາດຫຼັງພິງ)' : 'Dej Tom Qab (Tsis Muaj Roob Zaum)'}</text>

        <!-- Plot Ground -->
        <rect x="265" y="96" width="270" height="259" fill="#FEF2F2"/>
        
        <!-- Rear Earth Berm & Tree Buffer Wall -->
        <line x1="265" y1="96" x2="535" y2="96" stroke="#15803D" stroke-width="6"/>
        <circle cx="285" cy="110" r="7" fill="#14532D"/><circle cx="325" cy="110" r="8" fill="#166534"/>
        <circle cx="365" cy="110" r="8" fill="#14532D"/><circle cx="400" cy="110" r="9" fill="#166534"/>
        <circle cx="435" cy="110" r="8" fill="#14532D"/><circle cx="475" cy="110" r="8" fill="#166534"/><circle cx="515" cy="110" r="7" fill="#14532D"/>

        <!-- Side Fences -->
        <line x1="265" y1="96" x2="265" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="535" y1="96" x2="535" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="245" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 245 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="555" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        ${renderBoundaryHouse(335, 175, 130, 65, '325,175 400,150 475,175', isLao, houseText, isLao ? 'ສ້າງຄັນດິນ & ປູກຕົ້ນໄມ້ພິງ' : 'Tsim Pob Av & Hav Ntoo')}

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING -->
        <line x1="265" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="345" y1="355" x2="535" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 320 340 300 365 260" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>
      `;

    case 'ENV-0010': // Flank Water Stream
      return `
        <!-- Left Flank River Stream (x=210 to 245) -->
        <path d="M 235 48 L 235 395" stroke="#0284C7" stroke-width="24"/>
        <path d="M 235 48 L 235 395" stroke="#38BDF8" stroke-width="12"/>
        <text x="235" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FFFFFF" text-anchor="middle" transform="rotate(-90 235 180)">${isLao ? 'ສາຍນ້ຳຂ້າງຊ້າຍ (Dragon Flank Stream)' : 'Dej Sab Laug (Dragon Stream)'}</text>

        <!-- Plot Ground -->
        <rect x="260" y="95" width="265" height="260" fill="#DCFCE7" rx="3"/>
        <line x1="260" y1="95" x2="525" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="260" y1="95" x2="260" y2="355" stroke="#15803D" stroke-width="3"/>
        <line x1="525" y1="95" x2="525" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="395" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="555" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        ${renderBoundaryHouse(335, 145, 130, 65, '325,145 400,120 475,145', isLao, houseText, isLao ? 'ດຶງພະລັງມັງກອນຂຽວ' : 'Kev Noj Qab Nyob Zoo')}

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING -->
        <line x1="260" y1="355" x2="300" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="350" y1="355" x2="525" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="296" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="346" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="300" y1="355" x2="310" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="350" y1="355" x2="340" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 325 395 L 325 355 C 325 315 345 280 375 235" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="105" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="105" cy="5" r="2.2" fill="#15803D"/>
        </g>
      `;

    case 'ENV-0011': // Rear Mountain Sanctuary
      return `
        <!-- Majestic Green Mountain in Rear (y=48 to 95) -->
        <path d="M 220 95 Q 310 45 400 65 Q 490 45 580 95 Z" fill="#166534" stroke="#14532D" stroke-width="2"/>
        <path d="M 290 95 Q 400 52 510 95 Z" fill="#15803D"/>
        <text x="400" y="78" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ພູເຂົາເຕົ່າດຳດ້ານຫຼັງ (Xuan Wu Mountain - ພະລັງບາຣະມີ)' : 'Rooj Ntxhoo Tom Qab (Xuan Wu)'}</text>

        <!-- Plot Ground -->
        <rect x="270" y="95" width="260" height="260" fill="#DCFCE7" rx="3"/>
        <line x1="270" y1="95" x2="530" y2="95" stroke="#14532D" stroke-width="4"/>
        <line x1="270" y1="95" x2="270" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="530" y1="95" x2="530" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="245" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 245 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="555" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        ${renderBoundaryHouse(335, 140, 130, 65, '325,140 400,115 475,140', isLao, houseText, isLao ? 'ພິງພູເຂົາແທ້ ໝັ້ນຄົງສູງສຸດ' : 'Zaum Rooj Muaj Zog')}

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING -->
        <line x1="270" y1="355" x2="305" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="355" y1="355" x2="530" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="301" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="351" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="305" y1="355" x2="315" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="355" y1="355" x2="345" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 330 395 L 330 355 C 330 315 350 280 375 235" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="105" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="105" cy="5" r="2.2" fill="#15803D"/>
        </g>
      `;

    case 'ENV-0012': // Cliff Edge Hazard
      return `
        <!-- Plot on Solid Ground -->
        <rect x="260" y="95" width="280" height="210" fill="#FEF2F2"/>
        <line x1="260" y1="95" x2="540" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="260" y1="95" x2="260" y2="305" stroke="#334155" stroke-width="3"/>
        <line x1="540" y1="95" x2="540" y2="305" stroke="#334155" stroke-width="3"/>
        <text x="240" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 240 200)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="560" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 560 200)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>
        
        <!-- Retaining Wall & Cliff Drop-off -->
        <line x1="260" y1="305" x2="540" y2="305" stroke="#991B1B" stroke-width="6" stroke-dasharray="8,4"/>
        <rect x="260" y="308" width="280" height="45" fill="#7F1D1D"/>
        <text x="400" y="330" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FEF2F2" text-anchor="middle">${isLao ? '[X] ແຄມໜ້າຜາຊັນ (Cliff Drop-off - ຫ້າມສ້າງອາຄານ)' : '[X] Ntug Tsua Siab (Txwv Tsis Tso Tsev)'}</text>
        
        <!-- Retaining Wall Label -->
        <rect x="315" y="285" width="170" height="15" rx="3" fill="#475569"/>
        <text x="400" y="296" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ກຳແພງກັນດິນ &amp; ເສົາເຂັມເລິກ' : 'Phab Ntsa Thaiv Av Ruaj'}</text>

        ${renderBoundaryHouse(335, 115, 130, 60, '325,115 400,90 475,115', isLao, houseText, isLao ? 'ຖອຍຫ່າງໜ້າຜາ 15 ແມັດ' : 'Deb Ntug Tsua 15m')}

        <!-- PHYSICAL INLAND GATE ON SOLID ROAD (Y=95) -->
        <rect x="296" y="90" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="346" y="90" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <path d="M 325 55 L 325 95 C 325 105 340 115 365 125" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR TOP DRIVEWAY) -->
        <g transform="translate(195, 65)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="105" y2="15" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="105" cy="15" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO CLIFF PRECIPICE) -->
        <g transform="translate(360, 312)">
          <rect x="0" y="0" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="40" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
        </g>
      `;

    case 'ENV-0013': // Cemetery / Graves / Yin Sha (ZERO CHINESE TEXT)
      return `
        <!-- Cemetery Zone on the Left (x=205 to 275) -->
        <rect x="205" y="95" width="70" height="260" fill="#0F172A" rx="3"/>
        <text x="240" y="112" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#EF4444" text-anchor="middle">${isLao ? 'ສຸສານ/ປ່າຊ້າ' : 'Hav Ntxa'}</text>
        
        <!-- 3 Tombstones (Graves) - Pure Lao/Hmong Text, ZERO Chinese characters -->
        <g transform="translate(220, 125)">
          <path d="M 0 25 L 0 8 C 0 0 20 0 20 8 L 20 25 Z" fill="#64748B" stroke="#94A3B8" stroke-width="1"/>
          <text x="10" y="17" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ສຸສານ' : 'Ntxa'}</text>
        </g>
        <g transform="translate(245, 175)">
          <path d="M 0 25 L 0 8 C 0 0 20 0 20 8 L 20 25 Z" fill="#64748B" stroke="#94A3B8" stroke-width="1"/>
          <text x="10" y="17" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ສຸສານ' : 'Ntxa'}</text>
        </g>
        <g transform="translate(220, 230)">
          <path d="M 0 25 L 0 8 C 0 0 20 0 20 8 L 20 25 Z" fill="#64748B" stroke="#94A3B8" stroke-width="1"/>
          <text x="10" y="17" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ສຸສານ' : 'Ntxa'}</text>
        </g>
        <circle cx="230" cy="290" r="8" fill="#1E293B"/><circle cx="255" cy="315" r="9" fill="#1E293B"/>

        <!-- Solid 2.5m Defensive Wall with Spotlights on Cemetery Boundary -->
        <line x1="280" y1="95" x2="280" y2="355" stroke="#F59E0B" stroke-width="6"/>
        <circle cx="280" cy="140" r="5" fill="#FDE047"/><circle cx="280" cy="210" r="5" fill="#FDE047"/><circle cx="280" cy="280" r="5" fill="#FDE047"/>

        <!-- Plot Ground -->
        <rect x="282" y="95" width="248" height="260" fill="#FEF9C3" rx="3"/>
        <line x1="282" y1="95" x2="530" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="530" y1="95" x2="530" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="406" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="555" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        ${renderBoundaryHouse(345, 140, 125, 52, '335,140 407,118 480,140', isLao, houseText, '')}

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING FAR FROM GRAVES (Y=355) -->
        <line x1="282" y1="355" x2="435" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="485" y1="355" x2="530" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="431" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="481" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="435" y1="355" x2="445" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="485" y1="355" x2="475" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 460 395 L 460 355 C 460 310 440 270 415 210" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT OF GATE TO CLEAR DRIVEWAY) -->
        <g transform="translate(335, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO WALL FACING GRAVES) -->
        <g transform="translate(285, 230)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="0" y1="9" x2="-6" y2="9" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-6" cy="9" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0014': // Overlooked by High-Rise
      return `
        <!-- Plot Ground -->
        <rect x="260" y="95" width="250" height="260" fill="#DCFCE7" rx="3"/>
        <line x1="260" y1="95" x2="505" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="260" y1="95" x2="260" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="505" y1="95" x2="505" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="382" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="240" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 240 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>

        ${renderBoundaryHouse(280, 130, 130, 65, '270,130 345,95 420,130', isLao, houseText, isLao ? 'ຫຼີກລ່ຽງເງົາກົດທັບ' : 'Zam Lub Hwj Chim')}

        <!-- MASSIVE OPPRESSIVE HIGH-RISE TOWER ON RIGHT (x=520 to 595) -->
        <rect x="520" y="55" width="75" height="300" fill="#334155" stroke="#1E293B" stroke-width="2"/>
        <!-- Window grid -->
        <rect x="530" y="70" width="12" height="15" fill="#93C5FD"/><rect x="550" y="70" width="12" height="15" fill="#93C5FD"/><rect x="570" y="70" width="12" height="15" fill="#93C5FD"/>
        <rect x="530" y="95" width="12" height="15" fill="#93C5FD"/><rect x="550" y="95" width="12" height="15" fill="#93C5FD"/><rect x="570" y="95" width="12" height="15" fill="#93C5FD"/>
        <rect x="530" y="120" width="12" height="15" fill="#93C5FD"/><rect x="550" y="120" width="12" height="15" fill="#93C5FD"/><rect x="570" y="120" width="12" height="15" fill="#93C5FD"/>
        <rect x="530" y="145" width="12" height="15" fill="#93C5FD"/><rect x="550" y="145" width="12" height="15" fill="#93C5FD"/><rect x="570" y="145" width="12" height="15" fill="#93C5FD"/>
        <text x="557" y="195" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#FEF2F2" text-anchor="middle" transform="rotate(90 557 195)">${isLao ? 'ຕຶກສູງກົດທັບ (Qiao Sha)' : 'Lub Tsev Siab Nias (Qiao Sha)'}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING FAR FROM TOWER -->
        <line x1="260" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="345" y1="355" x2="505" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 310 325 270 345 220" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED UNDER TOWER SHADOW) -->
        <g transform="translate(425, 363)">
          <rect x="0" y="0" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="40" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="40" y1="0" x2="40" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="40" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0015': // Sky Crack / Tian Zhan Sha
      return `
        <!-- Two Towers creating the Sky Crack on the Right (x=460 to 590) -->
        <rect x="460" y="55" width="55" height="150" fill="#334155" stroke="#1E293B" stroke-width="1.5"/>
        <rect x="535" y="55" width="55" height="150" fill="#334155" stroke="#1E293B" stroke-width="1.5"/>
        
        <!-- The Crack Blade (Wind Jet Axis) -->
        <line x1="525" y1="55" x2="525" y2="280" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="6,4"/>
        <polygon points="520,280 530,280 525,295" fill="#EF4444"/>
        <text x="525" y="130" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FCA5A5" text-anchor="middle" transform="rotate(90 525 130)">${isLao ? 'ຮ່ອງຕັດດາບຟ້າ (Tian Zhan Sha)' : 'Hniav Ntuj Txiav (Tian Zhan Sha)'}</text>

        <!-- Deflection Shield & Screen Wall -->
        <line x1="440" y1="210" x2="440" y2="310" stroke="#991B1B" stroke-width="6"/>
        <circle cx="440" cy="235" r="6" fill="#14532D"/><circle cx="440" cy="260" r="6" fill="#166534"/><circle cx="440" cy="285" r="6" fill="#14532D"/>

        <!-- Plot Ground -->
        <rect x="250" y="95" width="200" height="260" fill="#FEF9C3" rx="3"/>
        <line x1="250" y1="95" x2="440" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="250" y1="95" x2="250" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="440" y1="95" x2="440" y2="210" stroke="#334155" stroke-width="3"/>
        <text x="345" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="235" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 235 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>

        ${renderBoundaryHouse(270, 200, 120, 60, '260,200 330,175 400,200', isLao, houseText, isLao ? 'ຫຼີກແນວດາບຟ້າຕັດ' : 'Zam Ncaj Hniav Ntuj')}

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING ON FAR DRAGON SIDE -->
        <line x1="250" y1="355" x2="280" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="330" y1="355" x2="440" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="276" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="326" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="280" y1="355" x2="290" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="330" y1="355" x2="320" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 305 395 L 305 355 C 305 320 315 290 330 265" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(180, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED IN WIND JET LINE) -->
        <g transform="translate(485, 363)">
          <rect x="0" y="0" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="40" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="40" y1="0" x2="40" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="40" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0016': // Fish Pond / Water Retention (ILLUSTRATED WITH REAL FISH POND)
      return `
        <!-- Plot Ground -->
        <rect x="260" y="95" width="250" height="260" fill="#DCFCE7" rx="3"/>
        <line x1="260" y1="95" x2="505" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="260" y1="95" x2="260" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="505" y1="95" x2="505" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="382" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="240" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 240 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>

        ${renderBoundaryHouse(335, 115, 130, 65, '325,115 400,90 475,115', isLao, houseText, isLao ? 'ວາງອາຄານໃນເຂດດິນແໜ້ນ' : 'Nyob Rau Av Ruaj')}

        <!-- REAL FISH POND / RETENTION BASIN ON RIGHT FLANK (x=515 to 585) -->
        <ellipse cx="550" cy="225" rx="38" ry="85" fill="#38BDF8" stroke="#0284C7" stroke-width="2.5"/>
        <ellipse cx="550" cy="225" rx="30" ry="70" fill="#0284C7" opacity="0.3"/>
        <!-- Fish ripples -->
        <circle cx="545" cy="185" r="6" fill="none" stroke="#FFFFFF" stroke-width="1.2"/>
        <circle cx="555" cy="245" r="9" fill="none" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="550" y="228" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0C4A6E" text-anchor="middle" transform="rotate(90 550 228)">${isLao ? 'ໜອງປາ/ອ່າງເກັບນ້ຳ' : 'Pas Ntses / Pas Dej'}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING FAR FROM POND -->
        <line x1="260" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="345" y1="355" x2="505" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 310 335 270 355 220" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED NEAR POND SLUMP ZONE) -->
        <g transform="translate(425, 363)">
          <rect x="0" y="0" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="40" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="40" y1="0" x2="40" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="40" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0017': // Giant Boulders / Craggy Rocks (ILLUSTRATED WITH REAL ROCK BOULDERS)
      return `
        <!-- Plot Ground -->
        <rect x="260" y="95" width="250" height="260" fill="#DCFCE7" rx="3"/>
        <line x1="260" y1="95" x2="505" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="260" y1="95" x2="260" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="505" y1="95" x2="505" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="382" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="240" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 240 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>

        ${renderBoundaryHouse(290, 125, 130, 65, '280,125 355,100 430,125', isLao, houseText, isLao ? 'ຖອຍຫ່າງແນວກ້ອນຫີນ >5m' : 'Deb Pob Zeb >5m')}

        <!-- GIANT MENACING BOULDERS on the Right Flank (x=515 to 585) -->
        <path d="M 525 150 Q 555 125 580 155 Q 590 190 560 205 Q 520 200 525 150 Z" fill="#64748B" stroke="#334155" stroke-width="2"/>
        <path d="M 530 220 Q 565 195 585 235 Q 580 275 545 280 Q 515 260 530 220 Z" fill="#475569" stroke="#1E293B" stroke-width="2"/>
        <path d="M 520 300 Q 550 280 575 310 Q 570 345 535 345 Q 510 330 520 300 Z" fill="#64748B" stroke="#334155" stroke-width="2"/>
        <text x="555" y="240" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle" transform="rotate(90 555 240)">${isLao ? 'ແນວກ້ອນຫີນຍັກ (Rock Sha)' : 'Pob Zeb Loj (Rock Sha)'}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING FAR FROM BOULDERS -->
        <line x1="260" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="345" y1="355" x2="505" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 310 325 270 345 220" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED UNDER FALLING ROCK ZONE) -->
        <g transform="translate(425, 363)">
          <rect x="0" y="0" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="40" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="40" y1="0" x2="40" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="40" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;

    case 'ENV-0018': // Power Pole / Transformer Sha (ILLUSTRATED WITH REAL POWER POLE)
      return `
        <!-- Plot Ground -->
        <rect x="260" y="95" width="250" height="260" fill="#DCFCE7" rx="3"/>
        <line x1="260" y1="95" x2="505" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="260" y1="95" x2="260" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="505" y1="95" x2="505" y2="355" stroke="#334155" stroke-width="3"/>
        <text x="382" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="240" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 240 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>

        ${renderBoundaryHouse(280, 130, 130, 65, '270,130 345,105 420,130', isLao, houseText, isLao ? 'ຖອຍຫ່າງເສົາໄຟ >10m' : 'Deb Ncej Fais >10m')}

        <!-- REAL HIGH-VOLTAGE POWER POLE & TRANSFORMER (x=550) -->
        <line x1="550" y1="75" x2="550" y2="375" stroke="#475569" stroke-width="5"/>
        <line x1="525" y1="95" x2="575" y2="95" stroke="#334155" stroke-width="3.5"/>
        <line x1="530" y1="120" x2="570" y2="120" stroke="#334155" stroke-width="3"/>
        <!-- Transformer Box -->
        <rect x="536" y="130" width="28" height="35" rx="2" fill="#64748B" stroke="#1E293B" stroke-width="1.5"/>
        <text x="550" y="152" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FDE047" text-anchor="middle">⚡</text>
        <!-- Radiation waves (Huo Sha) -->
        <circle cx="550" cy="147" r="25" fill="none" stroke="#EF4444" stroke-width="1.2" stroke-dasharray="3,3"/>
        <circle cx="550" cy="147" r="40" fill="none" stroke="#F87171" stroke-width="1" stroke-dasharray="4,4"/>
        <text x="550" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#DC2626" text-anchor="middle" transform="rotate(90 550 200)">${isLao ? 'ເສົາໄຟຟ້າແຮງສູງ (Huo Sha)' : 'Ncej Fais / Hluav Taws Xob'}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING FAR FROM POLE -->
        <line x1="260" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="345" y1="355" x2="505" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 310 325 270 345 220" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET LEFT TO CLEAR DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
          <line x1="88" y1="9" x2="100" y2="5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="5" r="2.2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED FACING POWER POLE) -->
        <g transform="translate(425, 363)">
          <rect x="0" y="0" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="40" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
          <line x1="40" y1="0" x2="40" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="40" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;

    default:
      return '';
  }
}

// Master SVG Template for Boundary Archetypes
function renderBoundarySvg(item, lang = 'lao') {
  const isLao = lang === 'lao';

  const name = isLao ? item.baseName : item.baseName;
  const scoreText = isLao ?
    (item.isGood ? `ດີເລີດ: ${item.score} / 100` : `ອັນຕະລາຍ: ${item.score} / 100`) :
    (item.isGood ? `ZOO: ${item.score} / 100` : `PHEM: ${item.score} / 100`);
  const scoreColor = item.isGood ? '#16A34A' : '#DC2626';
  const scoreBg = item.isGood ? '#14532D' : '#991B1B';

  const roadBadge = isLao ? item.roadType : item.roadType;
  const summary = isLao ? item.summary : item.summary;

  const ent = escapeDict(item.entrance);
  const gua = escapeDict(item.gua);
  const hse = escapeDict(item.house);
  const rem = escapeDict(item.remedy);

  const centerSvg = renderCenterDrawing(item.id, lang);

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
  <rect x="18" y="9" width="75" height="24" rx="4" fill="${scoreColor}"/>
  <text x="55" y="25" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(item.id)}</text>
  
  <!-- Name -->
  <!-- Dynamic Title to prevent collision -->
  <text x="96" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="${name.length > 32 ? '10' : '11.5'}" fill="#F8FAFC">${escapeXml(name)}</text>
  
  <!-- Road Type Badge -->
  <rect x="495" y="9" width="165" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="577" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#38BDF8" text-anchor="middle">${escapeXml(roadBadge)}</text>

  <!-- Score Badge -->
  <rect x="670" y="9" width="112" height="24" rx="4" fill="${scoreBg}"/>
  <text x="726" y="25" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${escapeXml(scoreText)}</text>

  <!-- ========================================================================= -->
  <!-- LEFT COLUMN: CARDS (X=18 to 182) -->
  <!-- ========================================================================= -->

  <!-- Top-Left Card: Entrance &amp; Driveway (Y=48 to 200) -->
  <rect x="12" y="48" width="174" height="152" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="12" y="48" width="174" height="24" rx="6" fill="#16A34A"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${ent.title}</text>
  <text x="20" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l1}</text>
  <text x="20" y="108" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l2}</text>
  <text x="20" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l3}</text>
  <text x="20" y="148" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l4}</text>
  
  <rect x="18" y="156" width="162" height="38" rx="3" fill="#DCFCE7"/>
  <text x="100" y="170" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${ent.sub1}</text>
  <text x="100" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#166534" text-anchor="middle">${ent.sub2}</text>

  <!-- Bottom-Left Card: Gua &amp; Compatibility (Y=206 to 442) -->
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
  <text x="100" y="402" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#B45309" text-anchor="middle">ກົດເກນ 5 ທາດ ແລະ ເຂັມທິດ 8 ທິດ</text>
  <text x="100" y="418" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#D97706" text-anchor="middle">✓ ສົມດຸນພະລັງງານທຳມະຊາດ</text>

  <!-- ========================================================================= -->
  <!-- RIGHT COLUMN: CARDS (X=618 to 782) -->
  <!-- ========================================================================= -->

  <!-- Top-Right Card: House Positioning &amp; Facing (Y=48 to 200) -->
  <rect x="614" y="48" width="174" height="152" rx="6" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="48" width="174" height="24" rx="6" fill="#0284C7"/>
  <text x="700" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${hse.title}</text>
  <text x="622" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l1}</text>
  <text x="622" y="108" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l2}</text>
  <text x="622" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l3}</text>
  <text x="622" y="148" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l4}</text>
  
  <rect x="620" y="158" width="162" height="34" rx="3" fill="#E0F2FE"/>
  <text x="700" y="171" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">ທິດຫົວຕຽງ: ${hse.bed}</text>
  <text x="700" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#0284C7" text-anchor="middle">${hse.bedSub}</text>

  <!-- Bottom-Right Card: Remedies &amp; Taboos (Y=206 to 442) -->
  <rect x="614" y="206" width="174" height="236" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="614" y="206" width="174" height="24" rx="6" fill="#9333EA"/>
  <text x="700" y="222" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${rem.title}</text>
  <text x="622" y="246" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l1}</text>
  <text x="622" y="266" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l2}</text>
  <text x="622" y="286" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l3}</text>
  <text x="622" y="306" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l4}</text>

  <rect x="620" y="326" width="162" height="106" rx="4" fill="#F3E8FF"/>
  <text x="700" y="342" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#7E22CE" text-anchor="middle">ຂໍ້ຫ້າມເດັດຂາດ (Taboos)</text>
  <text x="628" y="360" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t1}</text>
  <text x="628" y="376" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t2}</text>
  <text x="628" y="392" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t3}</text>
  <text x="700" y="418" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#7E22CE" text-anchor="middle">✓ ຮັກສາຄວາມສະອາດ &amp; ແສງສະຫວ່າງ</text>

  <!-- ========================================================================= -->
  ${item.hasFrontRoad !== false ? `
  <!-- MAIN ROADWAY AT BOTTOM (Y=355 to 440, bounded in Central Zone X=190..610) -->
  <!-- Placed before centerSvg so fence gates and badges paint clearly on top! -->
  <rect x="190" y="355" width="420" height="85" fill="url(#roadGrad)" rx="3"/>
  <line x1="190" y1="395" x2="610" y2="395" stroke="#FDE047" stroke-width="2" stroke-dasharray="14,8"/>
  <line x1="190" y1="360" x2="610" y2="360" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="6,4"/>
  <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#F8FAFC" text-anchor="middle">&#10140; ${isLao ? 'ຖະໜົນສາຍຫຼັກ (Facing Main Road)' : 'Kev Loj Pem Hauv Ntej'} &#10140;</text>
  ` : ''}

  <!-- ========================================================================= -->
  <!-- CENTER: ARCHITECTURAL BOUNDARY DRAWING (X=195 to 605, Y=48 to 384) -->
  <!-- ========================================================================= -->
  <g>
    ${centerSvg}
  </g>

  <!-- BOTTOM DOCTRINAL SUMMARY CARD (Y=448 to 474) -->
  <!-- ========================================================================= -->
  <rect x="18" y="448" width="764" height="26" rx="5" fill="#1E293B"/>
  <text x="400" y="465" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="9" fill="#F8FAFC" text-anchor="middle">${escapeXml(summary)}</text>
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

const artifactDir = 'C:/Users/chitc/.gemini/antigravity/brain/2bd06cba-8314-47a0-923b-83c5e8bd1b84';

console.log('🚀 Starting batch rendering of all 18 Masterclass Boundary Adjacency Archetypes (ENV-0001 to ENV-0018)...');

for (let i = 0; i < laoData.length; i++) {
  const itemLao = laoData[i];
  const itemHmong = hmongData[i];

  console.log(`\nProcessing ${itemLao.id}: ${itemLao.baseName}...`);

  // Render Lao
  const svgLao = renderBoundarySvg(itemLao, 'lao');
  const resvgL = new Resvg(svgLao, resvgOpts);
  const pngLao = resvgL.render().asPng();

  // Render Hmong
  const svgHmong = renderBoundarySvg(itemHmong, 'hmong');
  const resvgH = new Resvg(svgHmong, resvgOpts);
  const pngHmong = resvgH.render().asPng();

  // Save to directories
  fs.writeFileSync(`lao/img/${itemLao.id}.png`, pngLao);
  fs.writeFileSync(`hmong/img/${itemLao.id}.png`, pngHmong);

  // Copy sample to artifacts dir
  fs.writeFileSync(path.join(artifactDir, `${itemLao.id}-lao.png`), pngLao);

  console.log(`  ✓ Rendered ${itemLao.id} (Lao &amp; Hmong)`);
}

console.log('\n🎉 ALL 18 MASTERCLASS BOUNDARY ADJACENCY PLOTS RENDERED AND SAVED SUCCESSFULLY!');
