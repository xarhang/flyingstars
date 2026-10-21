// render_all_boundary_plots.js
// Masterclass Renderer for 18 Boundary &amp; Environmental Adjacency Archetypes (ENV-0001 to ENV-0018)
// Generates 800x480 high-precision architectural vector diagrams in both Lao and White Hmong RPA.

const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');

const laoData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_boundary_structured_lao.json'), 'utf8'));
const hmongData = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data_boundary_structured_hmong.json'), 'utf8'));

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

// Generate Center SVG drawing for each of the 18 Boundary Archetypes
function renderCenterDrawing(id, lang) {
  const isLao = lang === 'lao';
  const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
  const gateText = isLao ? '🚪 ປະຕູຮົ້ວ' : '🚪 Qhov Rooj Vag';
  const pondText = isLao ? '✓ ໜອງນ້ຳ' : '✓ Pas Dej';

  switch (id) {
    case 'ENV-0001': // Single Road Frontage
      return `
        <!-- Main Plot 250x250 (x=275, y=95) -->
        <rect x="275" y="95" width="250" height="250" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <line x1="275" y1="95" x2="525" y2="95" stroke="#15803D" stroke-width="4"/>
        <text x="400" y="85" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? '🏡 ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : '🏡 Ciam Av Tom Qab'}</text>
        <text x="240" y="220" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 240 220)">${isLao ? '🏡 ເພື່ອນບ້ານຊ້າຍ' : '🏡 Tsev Sab Laug'}</text>
        <text x="560" y="220" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 560 220)">${isLao ? '🏡 ເພື່ອນບ້ານຂວາ' : '🏡 Tsev Sab Xis'}</text>
        <rect x="335" y="115" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,115 400,90 475,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="142" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="159" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ເຂດຫຼັງ 1/3 (Xuan Wu)' : 'Sab Tom Qab 1/3'}</text>
        <rect x="392" y="174" width="16" height="6" fill="#1E293B"/>
        <g transform="translate(478, 120)">
          <rect x="0" y="0" width="36" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="18" y1="17" x2="18" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,36 15,30 21,30" fill="#0284C7"/>
          <text x="18" y="46" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>
        <path d="M 365 210 A 35 20 0 0 0 435 210 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
        <path d="M 320 345 C 320 300 350 260 380 235" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <rect x="290" y="336" width="60" height="18" rx="3" fill="#15803D"/>
        <text x="320" y="348" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="320" y1="385" x2="320" y2="356" stroke="#F59E0B" stroke-width="2.5"/>
        <polygon points="320,354 316,362 324,362" fill="#F59E0B"/>
      `;

    case 'ENV-0002': // Corner Plot (Double Road Frontage)
      return `
        <rect x="525" y="48" width="45" height="340" fill="url(#roadGrad)"/>
        <line x1="547" y1="48" x2="547" y2="388" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="8,6"/>
        <text x="547" y="180" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#F8FAFC" text-anchor="middle" transform="rotate(90 547 180)">${isLao ? 'ຖະໜົນສາຍຮອງ (Side Road)' : 'Kev Sab Xis (Side Road)'}</text>
        <polygon points="265,95 525,95 525,310 490,345 265,345" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
        <circle cx="510" cy="330" r="10" fill="#15803D"/>
        <circle cx="495" cy="340" r="8" fill="#166534"/>
        <rect x="445" y="325" width="60" height="14" rx="2" fill="#B45309"/>
        <text x="475" y="335" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ ຕັດມຸມມົນ' : '🛡️ Txiav Kaum'}</text>
        <rect x="300" y="120" width="125" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="290,120 362,95 435,120" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="362" y="147" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="362" y="164" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ວາງໃນມຸມທະແຍງໃນ' : 'Kaum Sab Hauv'}</text>
        <g transform="translate(435, 125)">
          <rect x="0" y="0" width="34" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="17" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="17" y1="16" x2="17" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="17,34 14,28 20,28" fill="#0284C7"/>
          <text x="17" y="44" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>
        <path d="M 330 345 C 330 300 340 260 360 220" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <rect x="300" y="336" width="60" height="18" rx="3" fill="#15803D"/>
        <text x="330" y="348" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="330" y1="385" x2="330" y2="356" stroke="#F59E0B" stroke-width="2.5"/>
        <polygon points="330,354 326,362 334,362" fill="#F59E0B"/>
      `;

    case 'ENV-0003': // Front &amp; Rear Through Plot
      return `
        <rect x="200" y="48" width="400" height="44" fill="url(#roadGrad)"/>
        <line x1="200" y1="70" x2="600" y2="70" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="10,6"/>
        <text x="400" y="74" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#F8FAFC" text-anchor="middle">${isLao ? '⚠️ ຖະໜົນດ້ານຫຼັງ (Rear Road - ທາງຮົ່ວ)' : '⚠️ Kev Tom Qab (Chuan Xin Sha)'}</text>
        <line x1="265" y1="96" x2="535" y2="96" stroke="#991B1B" stroke-width="6"/>
        <rect x="320" y="100" width="160" height="15" rx="3" fill="#991B1B"/>
        <text x="400" y="111" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ ກຳແພງທຶບ 2.5m ປິດຫຼັງແໜ້ນ' : '🛡️ Phab Ntsa 2.5m Thaiv Kev Qaum'}</text>
        <circle cx="300" cy="115" r="8" fill="#14532D"/>
        <circle cx="350" cy="115" r="9" fill="#166534"/>
        <circle cx="450" cy="115" r="9" fill="#166534"/>
        <circle cx="500" cy="115" r="8" fill="#14532D"/>
        <rect x="265" y="96" width="270" height="249" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>
        <rect x="335" y="145" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,145 400,120 475,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="172" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="189" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ພິງກຳແພງທຶບ ຫ້າມເປີດທະລຸ' : 'Zaum Phab Ntsa Tuab'}</text>
        <path d="M 330 345 C 330 300 350 270 380 240" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <rect x="300" y="336" width="60" height="18" rx="3" fill="#15803D"/>
        <text x="330" y="348" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="330" y1="385" x2="330" y2="356" stroke="#F59E0B" stroke-width="2.5"/>
        <polygon points="330,354 326,362 334,362" fill="#F59E0B"/>
      `;

    case 'ENV-0004': // Flanked Road / Y-Fork
      return `
        <polygon points="320,48 360,48 230,388 190,388" fill="url(#roadGrad)"/>
        <polygon points="440,48 480,48 610,388 570,388" fill="url(#roadGrad)"/>
        <polygon points="400,120 250,388 550,388" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>
        <line x1="370" y1="170" x2="430" y2="170" stroke="#15803D" stroke-width="6"/>
        <rect x="388" y="125" width="24" height="11" rx="2" fill="#334155"/>
        <text x="400" y="133" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#F8FAFC" text-anchor="middle">石敢当</text>
        <rect x="335" y="240" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,240 400,215 475,240" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="267" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="284" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ເຂດປອດໄພດ່ານຫຼັງ' : 'Thaj Chaw Nyab Xeeb'}</text>
      `;

    case 'ENV-0005': // Island Plot
      return `
        <ellipse cx="400" cy="215" rx="170" ry="140" fill="none" stroke="#475569" stroke-width="36"/>
        <ellipse cx="400" cy="215" rx="170" ry="140" fill="none" stroke="#FDE047" stroke-width="1.5" stroke-dasharray="10,6"/>
        <ellipse cx="400" cy="215" rx="145" ry="115" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
        <circle cx="300" cy="150" r="8" fill="#14532D"/>
        <circle cx="500" cy="150" r="8" fill="#14532D"/>
        <circle cx="280" cy="215" r="9" fill="#15803D"/>
        <circle cx="520" cy="215" r="9" fill="#15803D"/>
        <circle cx="340" cy="125" r="9" fill="#14532D"/>
        <circle cx="460" cy="125" r="9" fill="#14532D"/>
        <rect x="345" y="185" width="110" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="335,185 400,160 465,185" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="210" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="227" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ປູກຕົ້ນໄມ້ບັງລົມຮອບດ້ານ' : 'Hav Ntoo Ncig Ciam Av'}</text>
      `;

    case 'ENV-0006': // Easement Driveway
      return `
        <rect x="275" y="95" width="250" height="160" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="378" y="255" width="44" height="133" fill="#FEF3C7" stroke="#CA8A04" stroke-width="2"/>
        <line x1="400" y1="255" x2="400" y2="388" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6,4"/>
        <circle cx="370" cy="290" r="5" fill="#F59E0B"/>
        <circle cx="370" cy="340" r="5" fill="#F59E0B"/>
        <circle cx="430" cy="290" r="5" fill="#F59E0B"/>
        <circle cx="430" cy="340" r="5" fill="#F59E0B"/>
        <text x="460" y="320" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#B45309">${isLao ? '💡 ໂຄມໄຟນຳທາງ' : '💡 Teeb Ci Raws Kev'}</text>
        <circle cx="400" cy="225" r="16" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
        <rect x="335" y="115" width="130" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,115 400,90 475,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="142" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="159" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ບ່ອນພັກອາໄສສະຫງົບ' : 'Thaj Chaw Twj Ywm'}</text>
      `;

    case 'ENV-0007': // Front Jade Belt Water
      return `
        <path d="M 220 340 C 260 380 340 395 400 395 C 460 395 540 380 580 340" fill="none" stroke="#BAE6FD" stroke-width="40"/>
        <path d="M 220 340 C 260 380 340 395 400 395 C 460 395 540 380 580 340" fill="none" stroke="#0284C7" stroke-width="2.5" stroke-dasharray="6,4"/>
        <text x="400" y="390" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#0369A1" text-anchor="middle">${isLao ? '🌊 ແມ່ນ້ຳໂອບອຸ້ມ (Jade Belt Water - ມຸງຄຸນສູງສຸດ)' : '🌊 Dej Jade Belt Qhwv Tsev'}</text>
        <rect x="275" y="95" width="250" height="230" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="335" y="130" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,130 400,105 475,130" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="157" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="174" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຍົກພື້ນສູງ 1.5m ຫັນຊົມນ້ຳ' : 'Tsa Pem Teb 1.5m'}</text>
        <line x1="285" y1="320" x2="515" y2="320" stroke="#475569" stroke-width="4"/>
      `;

    case 'ENV-0008': // Front Reverse Bow Water
      return `
        <path d="M 220 380 C 300 320 400 310 500 320 C 540 330 580 380 580 380" fill="none" stroke="#FECACA" stroke-width="36"/>
        <path d="M 220 380 C 300 320 400 310 500 320 C 540 330 580 380 580 380" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="6,4"/>
        <text x="400" y="325" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#991B1B" text-anchor="middle">⚠️ ${isLao ? 'ນ້ຳແທງໂຄ້ງສອກ (Reverse Bow Sha 反弓水)' : 'Dej Nkhaus Riam Hlais'}</text>
        <line x1="280" y1="280" x2="520" y2="280" stroke="#475569" stroke-width="6"/>
        <circle cx="340" cy="265" r="8" fill="#15803D"/>
        <circle cx="400" cy="265" r="9" fill="#166534"/>
        <circle cx="460" cy="265" r="8" fill="#15803D"/>
        <rect x="335" y="110" width="130" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,110 400,85 475,110" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="137" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="154" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ຖອຍຫ່າງຈາກແຄມນ້ຳສອກແທງ' : 'Thim Deb Ntug Dej Tsoo'}</text>
      `;

    case 'ENV-0009': // Rear Water
      return `
        <ellipse cx="400" cy="75" rx="190" ry="32" fill="#BAE6FD" stroke="#0284C7" stroke-width="2"/>
        <text x="400" y="80" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#0369A1" text-anchor="middle">⚠️ ${isLao ? 'ໜອງນ້ຳຫຼັງເຮືອນ (Xuan Wu Drowning - ຫຼັງຂາດບ່ອນພິງ)' : 'Pas Dej Tom Qab (Xuan Wu Poob Dej)'}</text>
        <line x1="265" y1="120" x2="535" y2="120" stroke="#15803D" stroke-width="6"/>
        <circle cx="280" cy="135" r="9" fill="#14532D"/>
        <circle cx="320" cy="135" r="9" fill="#166534"/>
        <circle cx="360" cy="135" r="10" fill="#14532D"/>
        <circle cx="400" cy="135" r="11" fill="#166534"/>
        <circle cx="440" cy="135" r="10" fill="#14532D"/>
        <circle cx="480" cy="135" r="9" fill="#166534"/>
        <circle cx="520" cy="135" r="9" fill="#14532D"/>
        <rect x="325" y="148" width="150" height="14" rx="2" fill="#15803D"/>
        <text x="400" y="158" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ ຕົ້ນສົນ 7 ຕົ້ນເປັນພູເຂົາພິງຫຼັງ' : '🛡️ Ntoo Thuv 7 Tsob Ua Roob Qaum'}</text>
        <rect x="335" y="175" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,175 400,150 475,175" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="202" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="219" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ວາງຂ້ອນໜ້າ ພິງກຳແພງ &amp; ຕົ້ນສົນ' : 'Zaum Ntoo Thuv &amp; Phab Ntsa'}</text>
      `;

    case 'ENV-0010': // Flank Water Stream
      return `
        <path d="M 235 48 C 230 150 240 260 235 388" fill="none" stroke="#BAE6FD" stroke-width="28"/>
        <path d="M 235 48 C 230 150 240 260 235 388" fill="none" stroke="#0284C7" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="215" y="220" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle" transform="rotate(-90 215 220)">${isLao ? '🌊 ນ້ຳມັງກອນຂຽວ (Dragon Stream)' : '🌊 Dej Zaj Ntsuab'}</text>
        <rect x="260" y="95" width="260" height="250" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="335" y="145" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,145 400,120 475,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="172" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="189" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຫ່າງສາຍນ້ຳ 5 ແມັດປອດໄພ' : 'Deb Dej 5m Nyab Xeeb'}</text>
      `;

    case 'ENV-0011': // Rear Mountain Sanctuary
      return `
        <polygon points="200,105 280,55 370,100 450,50 540,95 600,105" fill="#14532D"/>
        <polygon points="240,110 330,68 410,105 500,65 570,110" fill="#166534"/>
        <text x="400" y="85" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${isLao ? '⛰️ ພູເຂົາ &amp; ປ່າໄມ້ຫຼັງ (Xuan Wu ເຕົ່າດຳສົມບູນ)' : '⛰️ Toj Roob Xuan Wu Ruaj Khov'}</text>
        <rect x="275" y="110" width="250" height="235" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="335" y="140" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,140 400,115 475,140" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="167" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="184" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ພິງພູເຂົາໜັກແໜ້ນ ອາຍຸຍືນ' : 'Zaum Roob Noj Qab Nyob Zoo'}</text>
      `;

    case 'ENV-0012': // Cliff Edge Hazard
      return `
        <rect x="260" y="95" width="280" height="210" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>
        <line x1="260" y1="305" x2="540" y2="305" stroke="#991B1B" stroke-width="6" stroke-dasharray="8,4"/>
        <rect x="260" y="308" width="280" height="37" fill="#7F1D1D"/>
        <text x="400" y="330" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FEF2F2" text-anchor="middle">⛔ ${isLao ? 'ແຄມໜ້າຜາຊັນ (Cliff Drop-off - ຫ້າມສ້າງອາຄານ)' : 'Ntug Tsua Siab (Txwv Tsis Tso Tsev)'}</text>
        <rect x="315" y="285" width="170" height="15" rx="3" fill="#475569"/>
        <text x="400" y="296" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '🛡️ ກຳແພງກັນດິນ &amp; ເສົາເຂັມເລິກ' : '🛡️ Phab Ntsa Thaiv Av Ruaj'}</text>
        <rect x="335" y="115" width="130" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,115 400,90 475,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="142" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="159" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ຖອຍຫ່າງໜ້າຜາ 15 ແມັດ' : 'Deb Ntug Tsua 15m'}</text>
      `;

    case 'ENV-0013': // Overgrown Forest / Yin Sha
      return `
        <rect x="220" y="95" width="55" height="250" fill="#1E293B"/>
        <circle cx="245" cy="120" r="10" fill="#0F172A"/>
        <circle cx="250" cy="180" r="12" fill="#0F172A"/>
        <circle cx="245" cy="240" r="11" fill="#0F172A"/>
        <text x="235" y="220" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#94A3B8" text-anchor="middle" transform="rotate(-90 235 220)">${isLao ? '🌲 ປ່າຮົກເຮື້ອ / ປ່າຊ້າ (Yin Sha)' : '🌲 Hav Ntoo Tuag / Ntxa'}</text>
        <line x1="280" y1="95" x2="280" y2="345" stroke="#F59E0B" stroke-width="5"/>
        <circle cx="280" cy="140" r="6" fill="#F59E0B"/>
        <circle cx="280" cy="200" r="6" fill="#F59E0B"/>
        <circle cx="280" cy="260" r="6" fill="#F59E0B"/>
        <rect x="282" y="95" width="245" height="250" fill="#FEF9C3" stroke="#CA8A04" stroke-width="2.5"/>
        <rect x="345" y="140" width="125" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="335,140 407,115 480,140" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="407" y="167" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="407" y="184" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຫັນຮັບແສງແດດ Yang Qi' : 'Txais Tshav Ntuj Yang'}</text>
      `;

    case 'ENV-0014': // Overlooked by High-Rise
      return `
        <rect x="525" y="50" width="75" height="140" fill="#334155" stroke="#1E293B" stroke-width="2"/>
        <rect x="535" y="65" width="12" height="15" fill="#94A3B8"/>
        <rect x="555" y="65" width="12" height="15" fill="#94A3B8"/>
        <rect x="575" y="65" width="12" height="15" fill="#94A3B8"/>
        <rect x="535" y="95" width="12" height="15" fill="#94A3B8"/>
        <rect x="555" y="95" width="12" height="15" fill="#94A3B8"/>
        <rect x="575" y="95" width="12" height="15" fill="#94A3B8"/>
        <text x="562" y="150" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#F8FAFC" text-anchor="middle">${isLao ? '🏢 ຕຶກສູງຂົ່ມ' : '🏢 Tsev Siab'}</text>
        <path d="M 520 130 L 460 170" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="4,3"/>
        <circle cx="490" cy="140" r="9" fill="#14532D"/>
        <circle cx="495" cy="180" r="9" fill="#14532D"/>
        <rect x="280" y="130" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="270,130 345,95 420,130" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="345" y="157" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="345" y="174" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ຫຼັງຄາຊົງສູງຕ້ານແຮງກົດ' : 'Ru Tsev Siab Tiv Thaiv'}</text>
      `;

    case 'ENV-0015': // Sky Crack / Tian Zhan Sha
      return `
        <rect x="250" y="48" width="120" height="40" fill="#334155"/>
        <rect x="430" y="48" width="120" height="40" fill="#334155"/>
        <rect x="370" y="48" width="60" height="40" fill="#FEE2E2"/>
        <text x="400" y="70" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#DC2626" text-anchor="middle">天斩煞</text>
        <line x1="400" y1="88" x2="400" y2="155" stroke="#EF4444" stroke-width="3.5" stroke-dasharray="5,3"/>
        <polygon points="400,162 394,150 406,150" fill="#EF4444"/>
        <path d="M 360 170 C 380 185 420 185 440 170" fill="none" stroke="#15803D" stroke-width="5"/>
        <rect x="388" y="165" width="24" height="12" rx="2" fill="#334155"/>
        <text x="400" y="174" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">石敢当</text>
        <rect x="270" y="200" width="120" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="260,200 330,175 400,200" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="330" y="225" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="330" y="242" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${isLao ? 'ວາງຫຼົບແນວຊ່ອງລົມຜ່າ' : 'Tso Zam Qhov Cua Riam'}</text>
      `;

    case 'ENV-0016': // Inner Enclosed Plot
      return `
        <rect x="265" y="95" width="270" height="250" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5"/>
        <rect x="200" y="140" width="60" height="100" fill="#E2E8F0" stroke="#94A3B8"/>
        <text x="230" y="190" font-family="'Segoe UI', sans-serif" font-size="7" fill="#64748B" text-anchor="middle" transform="rotate(-90 230 190)">Neighbor</text>
        <rect x="540" y="140" width="60" height="100" fill="#E2E8F0" stroke="#94A3B8"/>
        <text x="570" y="190" font-family="'Segoe UI', sans-serif" font-size="7" fill="#64748B" text-anchor="middle" transform="rotate(90 570 190)">Neighbor</text>
        <rect x="300" y="48" width="200" height="42" fill="#E2E8F0" stroke="#94A3B8"/>
        <text x="400" y="72" font-family="'Segoe UI', sans-serif" font-size="7" fill="#64748B" text-anchor="middle">Rear Neighbor</text>
        <rect x="305" y="125" width="190" height="90" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <rect x="375" y="145" width="50" height="45" fill="#38BDF8" fill-opacity="0.5" stroke="#0284C7" stroke-width="1.5"/>
        <text x="400" y="172" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຊ່ອງແສງໄທຈີ' : 'Courtyard'}</text>
        <text x="340" y="165" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#1E293B">${escapeXml(houseText)}</text>
      `;

    case 'ENV-0017': // Blind Boundary Wall
      return `
        <rect x="500" y="95" width="20" height="250" fill="#475569" stroke="#1E293B" stroke-width="1.5"/>
        <text x="535" y="220" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#475569" text-anchor="middle" transform="rotate(90 535 220)">${isLao ? 'ກຳແພງສູງທຶບ 3m (Blind Wall)' : 'Phab Ntsa Tuab 3m'}</text>
        <line x1="485" y1="95" x2="485" y2="345" stroke="#16A34A" stroke-width="4" stroke-dasharray="6,3"/>
        <circle cx="485" cy="130" r="6" fill="#16A34A"/>
        <circle cx="485" cy="180" r="6" fill="#16A34A"/>
        <circle cx="485" cy="230" r="6" fill="#16A34A"/>
        <circle cx="485" cy="280" r="6" fill="#16A34A"/>
        <rect x="290" y="125" width="160" height="70" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="280,125 370,100 460,125" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="370" y="152" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="370" y="169" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ໄລຍະຖອຍຮົ່ນ 3m ພ້ອມສວນໄຜ່' : 'Deb Phab Ntsa 3m'}</text>
      `;

    case 'ENV-0018': // Temple / Hospital / Substation Special Sha
      return `
        <polygon points="515,110 565,60 565,110" fill="#B91C1C" stroke="#7F1D1D" stroke-width="1.5"/>
        <line x1="515" y1="110" x2="575" y2="110" stroke="#7F1D1D" stroke-width="3"/>
        <text x="555" y="130" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#B91C1C" text-anchor="middle">${isLao ? 'ວັດ/ໂຮງໝໍ (Yin Sha)' : 'Tsev Teev Hawm'}</text>
        <line x1="510" y1="110" x2="455" y2="135" stroke="#EF4444" stroke-width="2.5" stroke-dasharray="4,3"/>
        <polygon points="450,137 460,132 458,142" fill="#EF4444"/>
        <line x1="475" y1="95" x2="475" y2="345" stroke="#15803D" stroke-width="6"/>
        <circle cx="465" cy="120" r="9" fill="#14532D"/>
        <circle cx="465" cy="170" r="10" fill="#166534"/>
        <circle cx="465" cy="220" r="9" fill="#14532D"/>
        <circle cx="465" cy="270" r="10" fill="#166534"/>
        <rect x="440" y="200" width="18" height="11" rx="2" fill="#334155"/>
        <text x="449" y="208" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">石</text>
        <rect x="275" y="130" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="265,130 340,105 415,130" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="340" y="157" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="340" y="174" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${isLao ? 'ກຳແພງ 2.5m ບັງສາຍຕາ 100%' : 'Phab Ntsa 2.5m Thaiv 100%'}</text>
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
  <text x="105" y="26" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="12" fill="#F8FAFC">${escapeXml(name)}</text>
  
  <!-- Road Type Badge -->
  <rect x="495" y="9" width="165" height="24" rx="4" fill="#1E293B" stroke="#475569" stroke-width="1"/>
  <text x="577" y="25" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#38BDF8" text-anchor="middle">${escapeXml(roadBadge)}</text>

  <!-- Score Badge -->
  <rect x="670" y="9" width="112" height="24" rx="4" fill="${scoreBg}"/>
  <text x="726" y="25" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#FEF2F2" text-anchor="middle">${escapeXml(scoreText)}</text>

  <!-- ========================================================================= -->
  <!-- LEFT COLUMN: CARDS (X=18 to 182) -->
  <!-- ========================================================================= -->

  <!-- Top-Left Card: Entrance &amp; Driveway (Y=48 to 200) -->
  <rect x="18" y="48" width="164" height="152" rx="6" fill="#F0FDF4" stroke="#22C55E" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="48" width="164" height="24" rx="6" fill="#16A34A"/>
  <text x="100" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${ent.title}</text>
  <text x="26" y="88" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l1}</text>
  <text x="26" y="108" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l2}</text>
  <text x="26" y="128" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l3}</text>
  <text x="26" y="148" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#14532D">${ent.l4}</text>
  
  <rect x="24" y="156" width="152" height="38" rx="3" fill="#DCFCE7"/>
  <text x="100" y="170" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${ent.sub1}</text>
  <text x="100" y="184" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#166534" text-anchor="middle">${ent.sub2}</text>

  <!-- Bottom-Left Card: Gua &amp; Compatibility (Y=206 to 442) -->
  <rect x="18" y="206" width="164" height="236" rx="6" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="18" y="206" width="164" height="24" rx="6" fill="#D97706"/>
  <text x="100" y="222" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${gua.title}</text>
  <text x="26" y="246" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l1}</text>
  <text x="26" y="266" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l2}</text>
  <text x="26" y="286" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l3}</text>
  <text x="26" y="306" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l4}</text>
  <text x="26" y="326" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#78350F">${gua.l5}</text>
  
  <rect x="24" y="346" width="152" height="86" rx="4" fill="#FEF3C7"/>
  <text x="100" y="364" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#92400E" text-anchor="middle">${gua.sub1}</text>
  <text x="100" y="382" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#78350F" text-anchor="middle">${gua.sub2}</text>
  <text x="100" y="402" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#B45309" text-anchor="middle">ກົດເກນ 5 ທາດ ແລະ ເຂັມທິດ 8 ທິດ</text>
  <text x="100" y="418" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#D97706" text-anchor="middle">✓ ສົມດຸນພະລັງງານທຳມະຊາດ</text>

  <!-- ========================================================================= -->
  <!-- RIGHT COLUMN: CARDS (X=618 to 782) -->
  <!-- ========================================================================= -->

  <!-- Top-Right Card: House Positioning &amp; Facing (Y=48 to 200) -->
  <rect x="618" y="48" width="164" height="152" rx="6" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="48" width="164" height="24" rx="6" fill="#0284C7"/>
  <text x="700" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${hse.title}</text>
  <text x="626" y="88" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l1}</text>
  <text x="626" y="108" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l2}</text>
  <text x="626" y="128" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l3}</text>
  <text x="626" y="148" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#0369A1">${hse.l4}</text>
  
  <rect x="624" y="158" width="152" height="34" rx="3" fill="#E0F2FE"/>
  <text x="700" y="171" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">ທິດຫົວຕຽງ: ${hse.bed}</text>
  <text x="700" y="184" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#0284C7" text-anchor="middle">${hse.bedSub}</text>

  <!-- Bottom-Right Card: Remedies &amp; Taboos (Y=206 to 442) -->
  <rect x="618" y="206" width="164" height="236" rx="6" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.2" filter="url(#shadow)"/>
  <rect x="618" y="206" width="164" height="24" rx="6" fill="#9333EA"/>
  <text x="700" y="222" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${rem.title}</text>
  <text x="626" y="246" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l1}</text>
  <text x="626" y="266" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l2}</text>
  <text x="626" y="286" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l3}</text>
  <text x="626" y="306" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">${rem.l4}</text>

  <rect x="624" y="326" width="152" height="106" rx="4" fill="#F3E8FF"/>
  <text x="700" y="342" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#7E22CE" text-anchor="middle">ຂໍ້ຫ້າມເດັດຂາດ (Taboos)</text>
  <text x="628" y="360" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t1}</text>
  <text x="628" y="376" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t2}</text>
  <text x="628" y="392" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA">• ${rem.t3}</text>
  <text x="700" y="418" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#7E22CE" text-anchor="middle">✓ ຮັກສາຄວາມສະອາດ &amp; ແສງສະຫວ່າງ</text>

  <!-- ========================================================================= -->
  <!-- CENTER: ARCHITECTURAL BOUNDARY DRAWING (X=195 to 605, Y=48 to 384) -->
  <!-- ========================================================================= -->
  <g>
    ${centerSvg}
  </g>

  <!-- ========================================================================= -->
  <!-- MAIN ROADWAY AT BOTTOM (Y=388 to 442) -->
  <!-- ========================================================================= -->
  <rect x="0" y="388" width="800" height="54" fill="url(#roadGrad)"/>
  <line x1="0" y1="415" x2="800" y2="415" stroke="#FDE047" stroke-width="2" stroke-dasharray="16,10"/>
  <line x1="0" y1="392" x2="800" y2="392" stroke="#F8FAFC" stroke-width="1" stroke-dasharray="8,6"/>
  <text x="400" y="420" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#F8FAFC" text-anchor="middle">&#10140; ${isLao ? 'ຖະໜົນສາຍຫຼັກ (Facing Main Road)' : 'Kev Loj Pem Hauv Ntej'} &#10140;</text>

  <!-- ========================================================================= -->
  <!-- BOTTOM DOCTRINAL SUMMARY CARD (Y=448 to 474) -->
  <!-- ========================================================================= -->
  <rect x="18" y="448" width="764" height="26" rx="5" fill="#1E293B"/>
  <text x="400" y="465" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="9" fill="#F8FAFC" text-anchor="middle">${escapeXml(summary)}</text>
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
