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
function renderCenterDrawing(id, lang) {
  const isLao = lang === 'lao';
  const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
  const gateOkText = isLao ? '✓ ປະຕູທີ່ຖືກຕ້ອງ' : '✓ Rooj Vag Zoo';
  const gateNoText = isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag';

  switch (id) {
    case 'ENV-0001': // Single Road Frontage
      return `
        <!-- Main Plot 250x260 (x=275, y=95 to 355) -->
        <rect x="275" y="95" width="250" height="260" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <line x1="275" y1="95" x2="525" y2="95" stroke="#15803D" stroke-width="4"/>
        <text x="400" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="245" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 245 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="555" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>
        
        <!-- House in rear 1/3 -->
        <rect x="335" y="115" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,115 400,90 475,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="159" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ເຂດຫຼັງ 1/3 (Xuan Wu)' : 'Sab Tom Qab 1/3'}</text>
        <rect x="392" y="174" width="16" height="6" fill="#1E293B"/>

        <!-- Semicircular Ming Tang Pond -->
        <path d="M 365 210 A 35 20 0 0 0 435 210 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
        
        <!-- Dragon Driveway to House -->
        <path d="M 320 355 C 320 310 350 270 380 240" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (Dragon Left) -->
        <rect x="280" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="321" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>
        
        <!-- [✗] FORBIDDEN GATE BADGE (Tiger Corner / Gunshot) -->
        <rect x="435" y="343" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="476" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0002': // Corner Plot
      return `
        <!-- Side road on right -->
        <rect x="525" y="48" width="45" height="340" fill="url(#roadGrad)"/>
        <line x1="547" y1="48" x2="547" y2="388" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="8,6"/>
        <text x="547" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#F8FAFC" text-anchor="middle" transform="rotate(90 547 180)">${isLao ? 'ຖະໜົນສາຍຮອງ (Side Road)' : 'Kev Sab Xis (Side Road)'}</text>
        
        <!-- Plot with chamfered corner -->
        <polygon points="265,95 525,95 525,310 490,355 265,355" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
        <circle cx="510" cy="330" r="8" fill="#15803D"/>
        <circle cx="495" cy="342" r="7" fill="#166534"/>

        <!-- House in Inner Quadrant -->
        <rect x="300" y="120" width="125" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="290,120 362,95 435,120" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="362" y="147" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="362" y="164" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ວາງໃນມຸມທະແຍງໃນ' : 'Kaum Sab Hauv'}</text>

        <!-- Driveway -->
        <path d="M 310 355 C 310 310 325 270 350 230" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (Main Road, Setback >10m) -->
        <rect x="270" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="311" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Directly at the Corner Intersection Apex) -->
        <rect x="475" y="318" width="80" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="515" y="330" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0003': // Front & Rear Through Plot
      return `
        <!-- Rear Road at Top -->
        <rect x="200" y="48" width="400" height="44" fill="url(#roadGrad)"/>
        <line x1="200" y1="70" x2="600" y2="70" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="10,6"/>
        <text x="400" y="74" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#F8FAFC" text-anchor="middle">${isLao ? '! ຖະໜົນດ້ານຫຼັງ (Chuan Xin Sha ທາງຮົ່ວ)' : '! Kev Tom Qab (Chuan Xin Sha)'}</text>
        
        <!-- Defensive Rear Wall 2.5m & 7 Pines -->
        <line x1="265" y1="96" x2="535" y2="96" stroke="#991B1B" stroke-width="6"/>
        <circle cx="285" cy="110" r="7" fill="#14532D"/><circle cx="325" cy="110" r="8" fill="#166534"/>
        <circle cx="365" cy="110" r="8" fill="#14532D"/><circle cx="400" cy="110" r="9" fill="#166534"/>
        <circle cx="435" cy="110" r="8" fill="#14532D"/><circle cx="475" cy="110" r="8" fill="#166534"/><circle cx="515" cy="110" r="7" fill="#14532D"/>

        <!-- Plot -->
        <rect x="265" y="96" width="270" height="259" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>
        <rect x="335" y="145" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,145 400,120 475,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="189" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ພິງກຳແພງທຶບ ຫ້າມເປີດທະລຸ' : 'Zaum Phab Ntsa Tuab'}</text>

        <!-- Driveway -->
        <path d="M 315 355 C 315 310 335 280 365 245" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (Front Road Only) -->
        <rect x="275" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="316" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Back Road Opening) -->
        <rect x="360" y="98" width="80" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="400" y="110" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0004': // Flanked Road / Y-Fork
      return `
        <!-- Left & Right Roads -->
        <polygon points="360,48 400,48 255,410 205,410" fill="url(#roadGrad)"/>
        <polygon points="400,48 440,48 595,410 545,410" fill="url(#roadGrad)"/>
        <polygon points="400,95 255,410 545,410" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
        
        <!-- Apex Tai Shan & Wall -->
        <rect x="375" y="96" width="50" height="13" rx="2" fill="#334155"/>
        <text x="400" y="106" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>
        <line x1="370" y1="145" x2="430" y2="145" stroke="#15803D" stroke-width="6"/>

        <!-- House in Safe Zone -->
        <rect x="330" y="225" width="140" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,225 400,202 475,225" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="254" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="272" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ເຂດປອດໄພດ່ານຫຼັງ' : 'Thaj Chaw Nyab Xeeb'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Left Dragon Setback >15m) -->
        <rect x="250" y="335" width="78" height="17" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="289" y="347" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Acute Apex <36°) -->
        <rect x="360" y="115" width="80" height="16" rx="2" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="400" y="126" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0005': // Island Plot / Roundabout
      return `
        <!-- Roundabout Ring -->
        <ellipse cx="400" cy="215" rx="170" ry="140" fill="none" stroke="#475569" stroke-width="36"/>
        <ellipse cx="400" cy="215" rx="170" ry="140" fill="none" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="10,6"/>
        <ellipse cx="400" cy="215" rx="145" ry="115" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
        <circle cx="300" cy="150" r="8" fill="#14532D"/><circle cx="500" cy="150" r="8" fill="#14532D"/>
        
        <!-- House in center -->
        <rect x="345" y="185" width="110" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="335,185 400,160 465,185" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="210" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="227" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ປູກຕົ້ນໄມ້ບັງລົມ 360°' : 'Hav Ntoo Ncig Ciam Av'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Slow traffic secondary tangent) -->
        <rect x="255" y="260" width="78" height="17" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="294" y="272" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (High-speed traffic merge point) -->
        <rect x="465" y="145" width="78" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="504" y="157" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0006': // Easement / Right-of-Way Plot
      return `
        <!-- Plot Enclave -->
        <rect x="275" y="95" width="250" height="160" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="200" y="95" width="70" height="260" fill="#E2E8F0" stroke="#94A3B8"/>
        <text x="235" y="220" font-family="'Segoe UI', sans-serif" font-size="7.5" fill="#64748B" text-anchor="middle" transform="rotate(-90 235 220)">Neighbor Property</text>
        <rect x="530" y="95" width="70" height="260" fill="#E2E8F0" stroke="#94A3B8"/>
        <text x="565" y="220" font-family="'Segoe UI', sans-serif" font-size="7.5" fill="#64748B" text-anchor="middle" transform="rotate(90 565 220)">Neighbor Property</text>

        <!-- Narrow Access Driveway -->
        <rect x="378" y="255" width="44" height="100" fill="#FEF3C7" stroke="#CA8A04" stroke-width="2"/>
        <line x1="400" y1="255" x2="400" y2="355" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6,4"/>
        <circle cx="370" cy="290" r="4" fill="#F59E0B"/><circle cx="430" cy="290" r="4" fill="#F59E0B"/>
        <circle cx="370" cy="330" r="4" fill="#F59E0B"/><circle cx="430" cy="330" r="4" fill="#F59E0B"/>

        <!-- House -->
        <rect x="335" y="115" width="130" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,115 400,90 475,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="159" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ບ່ອນພັກອາໄສສະຫງົບ' : 'Thaj Chaw Twj Ywm'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Driveway Entrance Mouth with Loop) -->
        <rect x="360" y="248" width="80" height="17" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="400" y="260" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Blocking alley without turning space) -->
        <rect x="430" y="325" width="76" height="16" rx="2" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="468" y="336" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0007': // Front Jade Belt Water
      return `
        <!-- Meandering Jade Belt Blue River -->
        <path d="M 200 360 C 260 410 340 425 400 425 C 460 425 540 410 600 360" fill="none" stroke="#BAE6FD" stroke-width="50"/>
        <path d="M 200 360 C 260 410 340 425 400 425 C 460 425 540 410 600 360" fill="none" stroke="#0284C7" stroke-width="2.5" stroke-dasharray="8,5"/>
        <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#0369A1" text-anchor="middle">${isLao ? 'ແມ່ນ້ຳໂອບອຸ້ມ (Jade Belt Water - ມຸງຄຸນສູງສຸດ)' : 'Dej Jade Belt Qhwv Tsev'}</text>
        
        <!-- Plot & House -->
        <rect x="275" y="95" width="250" height="245" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="335" y="130" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,130 400,105 475,130" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="157" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="174" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຍົກພື້ນສູງ 1.5m ຫັນຊົມນ້ຳ' : 'Tsa Pem Teb 1.5m'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Tranquil Water Embrace) -->
        <rect x="280" y="328" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="321" y="340" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Rapid wash exit tail) -->
        <rect x="445" y="328" width="80" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="485" y="340" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0008': // Front Reverse Bow Water
      return `
        <!-- Convex River Blade Rushing Against Property -->
        <path d="M 210 410 C 290 345 400 335 500 345 C 540 355 590 410 590 410" fill="none" stroke="#FECACA" stroke-width="44"/>
        <path d="M 210 410 C 290 345 400 335 500 345 C 540 355 590 410 590 410" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="6,4"/>
        <text x="400" y="352" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#991B1B" text-anchor="middle">${isLao ? '! ນ້ຳແທງໂຄ້ງສອກ (Reverse Bow Sha 反弓水)' : '! Dej Nkhaus Riam Hlais'}</text>
        
        <!-- Defensive Granite Wall & Trees -->
        <line x1="280" y1="300" x2="520" y2="300" stroke="#475569" stroke-width="6"/>
        <circle cx="340" cy="285" r="7" fill="#15803D"/><circle cx="400" cy="285" r="8" fill="#166534"/><circle cx="460" cy="285" r="7" fill="#15803D"/>

        <!-- Plot & House -->
        <rect x="275" y="95" width="250" height="195" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="335" y="110" width="130" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,110 400,85 475,110" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="154" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ຖອຍຫ່າງຈາກແຄມນ້ຳສອກແທງ' : 'Thim Deb Ntug Dej Tsoo'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Recessed Flank Behind Trees) -->
        <rect x="270" y="278" width="78" height="17" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="309" y="290" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Directly facing the Knife Curve) -->
        <rect x="360" y="305" width="80" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="400" y="317" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0009': // Rear Water
      return `
        <!-- Rear Lake at Top -->
        <ellipse cx="400" cy="75" rx="190" ry="30" fill="#BAE6FD" stroke="#0284C7" stroke-width="2"/>
        <text x="400" y="80" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#0369A1" text-anchor="middle">${isLao ? '! ໜອງນ້ຳຫຼັງເຮືອນ (Xuan Wu Drowning - ຫຼັງຂາດບ່ອນພິງ)' : '! Pas Dej Tom Qab (Xuan Wu Poob Dej)'}</text>
        
        <!-- Virtual Mountain: 7 Pines & Wall -->
        <line x1="265" y1="120" x2="535" y2="120" stroke="#15803D" stroke-width="6"/>
        <circle cx="280" cy="135" r="8" fill="#14532D"/><circle cx="320" cy="135" r="9" fill="#166534"/><circle cx="360" cy="135" r="9" fill="#14532D"/>
        <circle cx="400" cy="135" r="10" fill="#166534"/><circle cx="440" cy="135" r="9" fill="#14532D"/><circle cx="480" cy="135" r="8" fill="#166534"/>

        <!-- Plot & House -->
        <rect x="265" y="120" width="270" height="235" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
        <rect x="335" y="175" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,175 400,150 475,175" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="202" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="219" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ວາງຂ້ອນໜ້າ ພິງກຳແພງ &amp; ຕົ້ນສົນ' : 'Zaum Ntoo Thuv &amp; Phab Ntsa'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Front Road Dragon Side) -->
        <rect x="275" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="316" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Opening to Rear Lake) -->
        <rect x="360" y="125" width="80" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="400" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0010': // Flank Water Stream
      return `
        <!-- Left Dragon Stream -->
        <path d="M 235 48 C 230 150 240 260 235 388" fill="none" stroke="#BAE6FD" stroke-width="28"/>
        <path d="M 235 48 C 230 150 240 260 235 388" fill="none" stroke="#0284C7" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="215" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle" transform="rotate(-90 215 220)">${isLao ? 'ນ້ຳມັງກອນຂຽວ (Dragon Stream)' : 'Dej Zaj Ntsuab'}</text>
        
        <!-- Plot & House -->
        <rect x="260" y="95" width="265" height="260" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="335" y="145" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,145 400,120 475,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="189" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຫ່າງສາຍນ້ຳ 5 ແມັດປອດໄພ' : 'Deb Dej 5m Nyab Xeeb'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Front Main Road) -->
        <rect x="290" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="331" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Directly Opening Into Water Bank) -->
        <rect x="245" y="260" width="76" height="16" rx="2" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="283" y="271" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0011': // Rear Mountain Sanctuary
      return `
        <!-- Majestic Mountain Peaks at Top -->
        <polygon points="200,105 280,55 370,100 450,50 540,95 600,105" fill="#14532D"/>
        <polygon points="240,110 330,68 410,105 500,65 570,110" fill="#166534"/>
        <text x="400" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ພູເຂົາ &amp; ປ່າໄມ້ຫຼັງ (Xuan Wu ເຕົ່າດຳສົມບູນ)' : 'Toj Roob Xuan Wu Ruaj Khov'}</text>
        
        <!-- Plot & House -->
        <rect x="275" y="110" width="250" height="245" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="335" y="140" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,140 400,115 475,140" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="167" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ພິງພູເຂົາໜັກແໜ້ນ ອາຍຸຍືນ' : 'Zaum Roob Noj Qab Nyob Zoo'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Front Ming Tang) -->
        <rect x="285" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="326" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Mountain Runoff Ravine) -->
        <rect x="440" y="343" width="80" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="480" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0012': // Cliff Edge Hazard
      return `
        <!-- Plot on Solid Ground -->
        <rect x="260" y="95" width="280" height="210" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
        
        <!-- Retaining Wall & Cliff Drop-off -->
        <line x1="260" y1="305" x2="540" y2="305" stroke="#991B1B" stroke-width="6" stroke-dasharray="8,4"/>
        <rect x="260" y="308" width="280" height="45" fill="#7F1D1D"/>
        <text x="400" y="330" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FEF2F2" text-anchor="middle">${isLao ? '[X] ແຄມໜ້າຜາຊັນ (Cliff Drop-off - ຫ້າມສ້າງອາຄານ)' : '[X] Ntug Tsua Siab (Txwv Tsis Tso Tsev)'}</text>
        
        <!-- Retaining Wall Label -->
        <rect x="315" y="285" width="170" height="15" rx="3" fill="#475569"/>
        <text x="400" y="296" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? 'ກຳແພງກັນດິນ &amp; ເສົາເຂັມເລິກ' : 'Phab Ntsa Thaiv Av Ruaj'}</text>

        <!-- House -->
        <rect x="335" y="115" width="130" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,115 400,90 475,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="159" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ຖອຍຫ່າງໜ້າຜາ 15 ແມັດ' : 'Deb Ntug Tsua 15m'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Solid Inland Road) -->
        <rect x="270" y="260" width="78" height="17" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="309" y="272" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Facing the Precipice) -->
        <rect x="360" y="336" width="80" height="16" rx="2" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="400" y="347" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0013': // Cemetery / Graves / Yin Sha (ILLUSTRATED WITH REAL TOMBSTONES)
      return `
        <!-- Cemetery Zone on the Left (x=205 to 275) -->
        <rect x="205" y="95" width="70" height="260" fill="#0F172A" rx="3"/>
        <text x="240" y="112" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#EF4444" text-anchor="middle">${isLao ? 'ສຸສານ/ປ່າຊ້າ' : 'Hav Ntxa'}</text>
        
        <!-- 3 Tombstones (Graves) -->
        <g transform="translate(220, 125)">
          <path d="M 0 25 L 0 8 C 0 0 20 0 20 8 L 20 25 Z" fill="#64748B" stroke="#94A3B8" stroke-width="1"/>
          <text x="10" y="16" font-size="6.5" fill="#FFFFFF" text-anchor="middle">墓</text>
        </g>
        <g transform="translate(245, 175)">
          <path d="M 0 25 L 0 8 C 0 0 20 0 20 8 L 20 25 Z" fill="#64748B" stroke="#94A3B8" stroke-width="1"/>
          <text x="10" y="16" font-size="6.5" fill="#FFFFFF" text-anchor="middle">墓</text>
        </g>
        <g transform="translate(220, 230)">
          <path d="M 0 25 L 0 8 C 0 0 20 0 20 8 L 20 25 Z" fill="#64748B" stroke="#94A3B8" stroke-width="1"/>
          <text x="10" y="16" font-size="6.5" fill="#FFFFFF" text-anchor="middle">墓</text>
        </g>
        <circle cx="230" cy="290" r="8" fill="#1E293B"/><circle cx="255" cy="315" r="9" fill="#1E293B"/>

        <!-- Solid 2.5m Defensive Wall with Spotlights -->
        <line x1="280" y1="95" x2="280" y2="355" stroke="#F59E0B" stroke-width="6"/>
        <circle cx="280" cy="140" r="5" fill="#FDE047"/><circle cx="280" cy="210" r="5" fill="#FDE047"/><circle cx="280" cy="280" r="5" fill="#FDE047"/>

        <!-- Plot & House -->
        <rect x="282" y="95" width="248" height="260" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
        <rect x="345" y="140" width="125" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="335,140 407,115 480,140" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="407" y="167" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="407" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຫັນຮັບແສງແດດ Yang Qi' : 'Txais Tshav Ntuj Yang'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Facing Sunny Street Far Away from Graves) -->
        <rect x="430" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="471" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Directly Facing the Graves) -->
        <rect x="270" y="225" width="76" height="16" rx="2" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="308" y="236" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0014': // Overlooked by High-Rise
      return `
        <!-- Towering Skyscraper on Right -->
        <rect x="525" y="50" width="75" height="160" fill="#334155" stroke="#1E293B" stroke-width="2"/>
        <rect x="535" y="65" width="12" height="15" fill="#94A3B8"/><rect x="555" y="65" width="12" height="15" fill="#94A3B8"/><rect x="575" y="65" width="12" height="15" fill="#94A3B8"/>
        <rect x="535" y="95" width="12" height="15" fill="#94A3B8"/><rect x="555" y="95" width="12" height="15" fill="#94A3B8"/><rect x="575" y="95" width="12" height="15" fill="#94A3B8"/>
        <rect x="535" y="125" width="12" height="15" fill="#94A3B8"/><rect x="555" y="125" width="12" height="15" fill="#94A3B8"/><rect x="575" y="125" width="12" height="15" fill="#94A3B8"/>
        <text x="562" y="160" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຕຶກສູງຂົ່ມ' : 'Tsev Siab'}</text>
        
        <!-- Plot & House -->
        <rect x="260" y="95" width="260" height="260" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="280" y="130" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="270,130 345,95 420,130" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="345" y="157" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="345" y="174" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຫຼັງຄາຊົງສູງຕ້ານແຮງກົດ' : 'Ru Tsev Siab Tiv Thaiv'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Open Sky Quadrant) -->
        <rect x="275" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="316" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Directly Under Skyscraper Shadow) -->
        <rect x="430" y="343" width="80" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="470" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0015': // Sky Crack / Tian Zhan Sha
      return `
        <!-- Two Towers forming slit at x=400 -->
        <rect x="250" y="48" width="120" height="42" fill="#334155"/>
        <rect x="430" y="48" width="120" height="42" fill="#334155"/>
        <rect x="370" y="48" width="60" height="42" fill="#FEE2E2"/>
        <text x="400" y="72" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#DC2626" text-anchor="middle">天斩煞</text>
        
        <!-- Wind arrow down center -->
        <line x1="400" y1="90" x2="400" y2="160" stroke="#EF4444" stroke-width="3.5" stroke-dasharray="5,3"/>
        <polygon points="400,166 394,152 406,152" fill="#EF4444"/>

        <!-- Deflection Wall & Tai Shan -->
        <path d="M 360 172 C 380 188 420 188 440 172" fill="none" stroke="#15803D" stroke-width="5"/>
        <rect x="388" y="166" width="24" height="12" rx="2" fill="#334155"/>
        <text x="400" y="175" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">石敢当</text>

        <!-- Plot & Offset House -->
        <rect x="260" y="180" width="280" height="175" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
        <rect x="270" y="200" width="120" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="260,200 330,175 400,200" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="330" y="225" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="330" y="242" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ວາງຫຼົບແນວຊ່ອງລົມຜ່າ' : 'Tso Zam Qhov Cua Riam'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (Offset 45° Safely Out of Wind Line) -->
        <rect x="270" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="311" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Direct Center Wind Tunnel Blast) -->
        <rect x="360" y="178" width="80" height="17" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="400" y="190" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0016': // Fish Pond / Water Retention (ILLUSTRATED WITH REAL FISH POND)
      return `
        <!-- Plot -->
        <rect x="265" y="95" width="270" height="260" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
        
        <!-- House in Rear -->
        <rect x="335" y="115" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,115 400,90 475,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="159" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ອາຄານຫຼັກເຂດຫຼັງ' : 'Lub Tsev Sab Qaum'}</text>

        <!-- REAL FISH POND (ໜອງປາໜ້າບ້ານ) with Water Ripples & Plants -->
        <ellipse cx="400" cy="245" rx="75" ry="32" fill="#38BDF8" stroke="#0284C7" stroke-width="2.5"/>
        <ellipse cx="400" cy="245" rx="55" ry="20" fill="none" stroke="#BAE6FD" stroke-width="1.5" stroke-dasharray="6,4"/>
        <text x="400" y="249" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ໜອງປາໜ້າບ້ານ (Fish Pond)' : 'Pas Dej Ntses'}</text>
        <circle cx="345" cy="235" r="5" fill="#15803D"/><circle cx="455" cy="240" r="6" fill="#15803D"/>

        <!-- Curved Path Around Pond -->
        <path d="M 295 355 C 295 295 320 250 350 200" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (Gentle Curved Approach Around Pond) -->
        <rect x="275" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="316" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Plunging Straight into Fish Pond) -->
        <rect x="360" y="343" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="400" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0017': // Giant Boulders / Craggy Rocks (ILLUSTRATED WITH REAL ROCK BOULDERS)
      return `
        <!-- Plot & House -->
        <rect x="260" y="95" width="250" height="260" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
        <rect x="290" y="125" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="280,125 355,100 430,125" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="355" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="355" y="169" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຖອຍຫ່າງແນວກ້ອນຫີນ >5m' : 'Deb Pob Zeb >5m'}</text>

        <!-- GIANT MENACING BOULDERS on the Right Flank (x=515 to 585) -->
        <polygon points="515,140 545,105 580,120 590,170 550,195 510,165" fill="#475569" stroke="#1E293B" stroke-width="2"/>
        <polygon points="525,200 560,185 585,215 570,265 530,260 515,225" fill="#64748B" stroke="#1E293B" stroke-width="2"/>
        <polygon points="535,270 575,265 580,310 545,335 520,305" fill="#475569" stroke="#1E293B" stroke-width="2"/>
        <text x="550" y="235" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ກ້ອນຫີນຍັກ (Rock Sha)' : 'Pob Zeb Loj'}</text>
        
        <!-- Buffer Wall & Hedges -->
        <line x1="500" y1="95" x2="500" y2="355" stroke="#16A34A" stroke-width="4"/>
        <circle cx="495" cy="150" r="6" fill="#15803D"/><circle cx="495" cy="220" r="6" fill="#15803D"/><circle cx="495" cy="290" r="6" fill="#15803D"/>

        <!-- [✓] RECOMMENDED GATE BADGE (Clear Dragon Side Away from Rocks) -->
        <rect x="270" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="311" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Under Falling Rock Zone) -->
        <rect x="420" y="343" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="460" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
      `;

    case 'ENV-0018': // Power Pole / Transformer Sha (ILLUSTRATED WITH REAL POWER POLE)
      return `
        <!-- Plot & House -->
        <rect x="260" y="95" width="250" height="260" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
        <rect x="280" y="130" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="270,130 345,105 420,130" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="345" y="157" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="345" y="174" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຖອຍຫ່າງເສົາໄຟ >10m' : 'Deb Ncej Fais >10m'}</text>

        <!-- REAL HIGH-VOLTAGE POWER POLE & TRANSFORMER (x=550) -->
        <rect x="548" y="70" width="8" height="280" fill="#94A3B8" stroke="#475569" stroke-width="1"/>
        <!-- Crossarm -->
        <rect x="525" y="90" width="54" height="6" fill="#475569"/>
        <!-- 3 Insulators & High-voltage lines -->
        <rect x="528" y="80" width="4" height="10" fill="#F8FAFC"/><line x1="500" y1="80" x2="600" y2="80" stroke="#0F172A" stroke-width="1.5"/>
        <rect x="550" y="80" width="4" height="10" fill="#F8FAFC"/><line x1="500" y1="84" x2="600" y2="84" stroke="#0F172A" stroke-width="1.5"/>
        <rect x="572" y="80" width="4" height="10" fill="#F8FAFC"/><line x1="500" y1="88" x2="600" y2="88" stroke="#0F172A" stroke-width="1.5"/>
        <!-- Mounted Transformer Cylinder -->
        <rect x="556" y="98" width="18" height="26" rx="3" fill="#334155" stroke="#1E293B" stroke-width="1.2"/>
        <!-- Transformer lightning icon (vector polygon for 100% crisp rendering without font issues) -->
        <polygon points="566,106 561,114 565,114 563,123 570,112 566,112" fill="#FACC15"/>
        <text x="552" y="145" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#B91C1C" text-anchor="middle">${isLao ? 'ເສົາໄຟ/ໝໍ້ແປງ' : 'Ncej Fais/Sha'}</text>

        <!-- Buffer Hedge on Right -->
        <line x1="510" y1="95" x2="510" y2="355" stroke="#15803D" stroke-width="5"/>

        <!-- [✓] RECOMMENDED GATE BADGE (Dragon Left Setback >10m) -->
        <rect x="270" y="343" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="311" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${gateOkText}</text>

        <!-- [✗] FORBIDDEN GATE BADGE (Directly Under or Facing Power Pole) -->
        <rect x="420" y="343" width="80" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
        <text x="460" y="355" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${gateNoText}</text>
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
  <text x="105" y="26" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="12" fill="#F8FAFC">${escapeXml(name)}</text>
  
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
  <rect x="18" y="48" width="164" height="152" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="48" width="164" height="24" rx="6" fill="#16A34A"/>
  <text x="100" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${ent.title}</text>
  <text x="26" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l1}</text>
  <text x="26" y="108" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l2}</text>
  <text x="26" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l3}</text>
  <text x="26" y="148" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l4}</text>
  
  <rect x="24" y="156" width="152" height="38" rx="3" fill="#DCFCE7"/>
  <text x="100" y="170" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${ent.sub1}</text>
  <text x="100" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#166534" text-anchor="middle">${ent.sub2}</text>

  <!-- Bottom-Left Card: Gua &amp; Compatibility (Y=206 to 442) -->
  <rect x="18" y="206" width="164" height="236" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="206" width="164" height="24" rx="6" fill="#D97706"/>
  <text x="100" y="222" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${gua.title}</text>
  <text x="26" y="246" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l1}</text>
  <text x="26" y="266" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l2}</text>
  <text x="26" y="286" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l3}</text>
  <text x="26" y="306" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l4}</text>
  <text x="26" y="326" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l5}</text>
  
  <rect x="24" y="346" width="152" height="86" rx="4" fill="#FEF3C7"/>
  <text x="100" y="364" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#92400E" text-anchor="middle">${gua.sub1}</text>
  <text x="100" y="382" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F" text-anchor="middle">${gua.sub2}</text>
  <text x="100" y="402" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#B45309" text-anchor="middle">ກົດເກນ 5 ທາດ ແລະ ເຂັມທິດ 8 ທິດ</text>
  <text x="100" y="418" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#D97706" text-anchor="middle">✓ ສົມດຸນພະລັງງານທຳມະຊາດ</text>

  <!-- ========================================================================= -->
  <!-- RIGHT COLUMN: CARDS (X=618 to 782) -->
  <!-- ========================================================================= -->

  <!-- Top-Right Card: House Positioning &amp; Facing (Y=48 to 200) -->
  <rect x="618" y="48" width="164" height="152" rx="6" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="48" width="164" height="24" rx="6" fill="#0284C7"/>
  <text x="700" y="64" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${hse.title}</text>
  <text x="626" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l1}</text>
  <text x="626" y="108" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l2}</text>
  <text x="626" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l3}</text>
  <text x="626" y="148" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l4}</text>
  
  <rect x="624" y="158" width="152" height="34" rx="3" fill="#E0F2FE"/>
  <text x="700" y="171" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">ທິດຫົວຕຽງ: ${hse.bed}</text>
  <text x="700" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#0284C7" text-anchor="middle">${hse.bedSub}</text>

  <!-- Bottom-Right Card: Remedies &amp; Taboos (Y=206 to 442) -->
  <rect x="618" y="206" width="164" height="236" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="206" width="164" height="24" rx="6" fill="#9333EA"/>
  <text x="700" y="222" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${rem.title}</text>
  <text x="626" y="246" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l1}</text>
  <text x="626" y="266" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l2}</text>
  <text x="626" y="286" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l3}</text>
  <text x="626" y="306" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l4}</text>

  <rect x="624" y="326" width="152" height="106" rx="4" fill="#F3E8FF"/>
  <text x="700" y="342" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#7E22CE" text-anchor="middle">ຂໍ້ຫ້າມເດັດຂາດ (Taboos)</text>
  <text x="628" y="360" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t1}</text>
  <text x="628" y="376" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t2}</text>
  <text x="628" y="392" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t3}</text>
  <text x="700" y="418" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#7E22CE" text-anchor="middle">✓ ຮັກສາຄວາມສະອາດ &amp; ແສງສະຫວ່າງ</text>

  <!-- ========================================================================= -->
  <!-- CENTER: ARCHITECTURAL BOUNDARY DRAWING (X=195 to 605, Y=48 to 384) -->
  <!-- ========================================================================= -->
  <g>
    ${centerSvg}
  </g>

  <!-- ========================================================================= -->
  ${item.hasFrontRoad !== false ? `
  <!-- MAIN ROADWAY AT BOTTOM (Y=355 to 440, bounded in Central Zone X=190..610) -->
  <rect x="190" y="355" width="420" height="85" fill="url(#roadGrad)" rx="3"/>
  <line x1="190" y1="395" x2="610" y2="395" stroke="#FDE047" stroke-width="2" stroke-dasharray="14,8"/>
  <line x1="190" y1="360" x2="610" y2="360" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="6,4"/>
  <text x="400" y="420" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#F8FAFC" text-anchor="middle">&#10140; ${isLao ? 'ຖະໜົນສາຍຫຼັກ (Facing Main Road)' : 'Kev Loj Pem Hauv Ntej'} &#10140;</text>
  ` : ''}

  <!-- BOTTOM DOCTRINAL SUMMARY CARD (Y=448 to 474) -->
  <!-- ========================================================================= -->
  <rect x="18" y="448" width="764" height="26" rx="5" fill="#1E293B"/>
  <text x="400" y="465" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="9" fill="#F8FAFC" text-anchor="middle">${escapeXml(summary)}</text>
</svg>
`;
}

// Resvg Configuration with pure Lao OpenType fonts
const resvgOpts = {
  fitTo: { mode: 'width', value: 800 },
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
