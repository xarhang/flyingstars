// plots_data_part1.js
// Masterclass definitions for LP-0001 through LP-0008
const fs = require('fs');

module.exports = [
  // 1. LP-0001
  {
    id: 'LP-0001',
    score: 95,
    isGood: true,
    nameLao: 'ຕອນດິນສີ່ຫຼ່ຽມຈະຕຸລັດ (Zheng Fang Tu - Square Plot)',
    nameHmong: 'Zheng Fang Tu (Thaj Av 4 Fab Sib Npaug - Square Plot)',
    elementLao: 'ທາດດິນ Earth / ທາດດິນ',
    elementHmong: 'Zog Av Earth / ທາດດິນ',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສີ່ຫຼ່ຽມຈະຕຸລັດເປັນທາດດິນ (ທາດດິນ) ມຸມ 90° ສົມບູນ ພະລັງງານໝູນວຽນສົມດຸນ ເປັນມຸງຄຸນສູງສຸດ.',
    summaryHmong: 'Tswv Yim: Thaj av plaub fab sib npaug yog zog Av (ທາດດິນ) 4 ces kaum 90° huab cua ncig sib npaug zoo tshaj plaws.',
    
    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຕັ້ງຝັ່ງມັງກອນຂຽວ (ຊ້າຍ) ຫ່າງມຸມ >3m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Sab Zaj Ntsuab, deb kaum >3m',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດດິນ (ທາດດິນ)',
      l2: '• ✓ ຖືກກັບ: ທາດດິນ & ທາດທອງ',
      l3: '  (ກວ້າ 2 (ທາດດິນ), 8 (ທາດດິນ), 6 (ທາດທອງ), 7 (ທາດທອງ))',
      l4: '• ✗ ບໍ່ຂັດກັບໃຜ (ດິນມຸງຄຸນສູງ)',
      l5: '• ຄົນທາດນ້ຳ (ກວ້າ 1) ຄວນມີນ້ຳພຸເສີມ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ດິນເກີດທອງ: ຮັ່ງມີ, ໝັ້ນຄົງ, ບາຣະມີ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Av (Earth)',
      l2: '• ✓ Haum: Neeg Zog Av & Kub',
      l3: '  (Gua 2 (ທາດດິນ), 8 (ທາດດິນ), 6 (ທາດທອງ), 7 (ທາດທອງ))',
      l4: '• ✗ Tsis ntsib kev tsis zoo',
      l5: '• Neeg Zog Dej (Gua 1) tso pas dej',
      sub1: 'Tsib Yam Zog: Av yug Kub',
      sub2: 'Ruaj khov, nplua mias, hwj chim'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ເຂດຫຼັງ 1/3 (Xuan Wu)',
      l2: '• ໄລຍະຖອຍຮົ່ນ: ຫ່າງທາງໜ້າ 6-8m',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ລານໜ້າໝິງຖັງ',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງທີ່ໜັກແໜ້ນ',
      bed: 'ຫົວຕຽງ: ຫັນສູ່ທິດ Sheng Qi ພິງຝາທຶບ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Sab Tom Qab 1/3',
      l2: '• Qhov Deb: Deb kev pem hauv 6-8m',
      l3: '• Ntsia (Xiang): Ntsia tshav Ming Tang',
      l4: '• Zaum (Zuo): Zaum roob nraub qaum',
      bed: 'Taub Hau Pw: Thaj Sheng Qi phab ntsa'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ປູກຮົ້ວໄມ້ພຸ່ມສີຂຽວອ້ອມແນວແດນ',
      l2: '2. ຂຸດໜອງນ້ຳເຄິ່ງວົງມົນໜ້າເຮືອນ',
      l3: '3. ປູກຕົ້ນສົນ 5 ຕົ້ນພິງຫຼັງເຮືອນ',
      l4: '4. ຮັກສາໃຈກາງໄທຈີໃຫ້ໂລ່ງແຈ້ງ',
      t1: '• ຫ້າມຂຸດໜອງນ້ຳຫຼັງເຮືອນ',
      t2: '• ຫ້າມມີໜອງນ້ຳກາງໄທຈີ',
      t3: '• ຫ້າມເປີດປະຕູກົງມຸມຕອນດິນ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Cog hav ntoo ntsuab ciam av',
      l2: '2. Tsim pas dej semicircular pem',
      l3: '3. Cog ntoo thuv 5 tsob tom qab',
      l4: '4. Tso plawv tsev kom pom kev',
      t1: '• Txwv tsis khawb pas dej tom qab',
      t2: '• Txwv tsis tso dej plawv Tai Ji',
      t3: '• Txwv tsis qhib qhov rooj kaum'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const gateText = isLao ? '🚪 ປະຕູຮົ້ວ (Gate)' : '🚪 Qhov Rooj Vag';
      const waterText = isLao ? '✓ ໜອງນ້ຳໝິງຖັງ' : '✓ Pas Dej Ming Tang';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="85" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="250" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 250 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="550" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 550 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Plot Ground Fill -->
        <rect x="275" y="95" width="250" height="250" fill="#DCFCE7" rx="3"/>
        <rect x="279" y="99" width="242" height="242" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="6,4"/>
        
        <!-- Rear & Side Perimeter Fences -->
        <line x1="275" y1="95" x2="525" y2="95" stroke="#15803D" stroke-width="4.5"/>
        <line x1="275" y1="95" x2="275" y2="345" stroke="#334155" stroke-width="3"/>
        <line x1="525" y1="95" x2="525" y2="345" stroke="#334155" stroke-width="3"/>

        <!-- Main House in Rear 1/3 (Architectural Layout with Bedroom & Living Hall) -->
        <polygon points="330,112 400,90 470,112" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="112" width="120" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="112" x2="388" y2="164" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="118" width="32" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="118" width="32" height="5.5" fill="#0284C7"/>
        <text x="364" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="136" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Prominently Visible & Unclipped) -->
        <rect x="416" y="164" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Axis Badge (X=470..510) -->
        <g transform="translate(470, 112)">
          <rect x="0" y="0" width="40" height="52" rx="4" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="20" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="20" y1="17" x2="20" y2="35" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="2,2"/>
          <polygon points="20,37 17,30 23,30" fill="#0284C7"/>
          <text x="20" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="305" y="202" width="190" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ອ່າງນ້ຳພຸ 10-15% (ນ້ຳໃສໄຫຼ)' : '• Yog muaj dej: Pas dej 10-15%'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 258 A 16 8 0 0 0 472 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="456" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- Dragon & Tiger Garden Trees (Shifted to clear axis badge) -->
        <circle cx="295" cy="125" r="7" fill="#16A34A"/>
        <circle cx="295" cy="190" r="7" fill="#16A34A"/>
        <circle cx="516" cy="125" r="6" fill="#CA8A04"/>
        <circle cx="516" cy="190" r="6" fill="#CA8A04"/>

        <!-- ARCHITECTURAL FRONT FENCE & GATE ON FENCE -->
        <!-- Left Fence Segment: (275, 345) to (305, 345) -->
        <line x1="275" y1="345" x2="305" y2="345" stroke="#334155" stroke-width="3.5"/>
        <!-- Right Fence Segment: (350, 345) to (525, 345) -->
        <line x1="350" y1="345" x2="525" y2="345" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON THE FENCE LINE -->
        <rect x="301" y="340" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="346" y="340" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="305" y1="345" x2="315" y2="334" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="350" y1="345" x2="340" y2="334" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 327 385 L 327 345 C 327 305 355 275 385 240 C 405 210 424 190 424 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="6,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(198, 350)">
          <rect x="0" y="0" width="88" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="44" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Opening -->
          <line x1="88" y1="9" x2="103" y2="-5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="103" cy="-5" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO TIGER CORNER ON FENCE) -->
        <g transform="translate(440, 350)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-5" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  },

  // 2. LP-0002
  {
    id: 'LP-0002',
    score: 92,
    isGood: true,
    nameLao: 'ຕອນດິນສີ່ຫຼ່ຽມຜືນຜ້າ ຄຳ (Chang Fang Tu - Golden Rectangle Plot)',
    nameHmong: 'Chang Fang Tu (Thaj Av 4 Fab Ntev - Golden Rectangle Plot)',
    elementLao: 'ທາດໄມ້ Wood / ທາດໄມ້',
    elementHmong: 'Zog Ntoo Wood / ທາດໄມ້',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສີ່ຫຼ່ຽມຜືນຜ້າເປັນທາດໄມ້ (ທາດໄມ້) ຮັກສາພະລັງງານໄດ້ເລິກ ເສີມການສຶກສາ ແລະ ທຸລະກິດຍາວນານ.',
    summaryHmong: 'Tswv Yim: Thaj av plaub fab ntev yog zog Ntoo (ທາດໄມ້) khaws zog tob txhawb kev kawm ntawv & lag luam ntev.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າແຄບ ຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Pem hauv ntej sab Zaj Ntsuab',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດໄມ້ (ທາດໄມ້)',
      l2: '• ✓ ຖືກກັບ: ທາດໄມ້ & ທາດໄຟ',
      l3: '  (ກວ້າ 3 (ທາດໄມ້), 4 (ທາດໄມ້), 9 (ທາດໄຟ))',
      l4: '• ✗ ຄົນທາດດິນ (ກວ້າ 2 (ທາດດິນ), 8 (ທາດດິນ))',
      l5: '• ແກ້ໄຂດ້ວຍສີຄຣີມ/ໂຄມໄຟສີສົ້ມ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ໄມ້ເກີດໄຟ: ປັນຍາ, ຊື່ສຽງ, ການສຶກສາ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Ntoo (Wood)',
      l2: '• ✓ Haum: Neeg Zog Ntoo & Hluav',
      l3: '  (Gua 3 (ທາດໄມ້), 4 (ທາດໄມ້), 9 (ທາດໄຟ))',
      l4: '• ✗ Neeg Zog Av (Gua 2, 8) ceev faj',
      l5: '• Siv teeb ci kub & xim cream kho',
      sub1: 'Tsib Yam Zog: Ntoo yug Hluav',
      sub2: 'Tswv yim zoo, npe nrov, vam meej'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ເຂດຫຼັງ 1/3 (ຄວາມເລິກ)',
      l2: '• ໄລຍະຖອຍຮົ່ນ: ລານໜ້າກວ້າງ 10-12m',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ລານໜ້າເລິກ',
      l4: '• ທິດພິງ (坐): ພິງທິດເລິກຂອງແນວຕອນດິນ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບຫ້ອງຫຼັງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Sab Tom Qab 1/3 qhov tob',
      l2: '• Qhov Deb: Tshav pem hauv 10-12m',
      l3: '• Ntsia (Xiang): Ntsia tshav loj pem',
      l4: '• Zaum (Zuo): Zaum thaj chaw tob',
      bed: 'Taub Hau Pw: Phab ntsa tom qab'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ປູກຕົ້ນສົນສອງຂ້າງແນວຮົ້ວຍາວ',
      l2: '2. ໜອງນ້ຳຮູບໄຂ່ ຫຼື ໜອງບົວໜ້າເຮືອນ',
      l3: '3. ຕັ້ງຫີນແກຣນິດປະດັບລານໜ້າ',
      l4: '4. ກຳແພງຫຼັງສູງ 2.2 ແມັດ',
      t1: '• ຫ້າມທາງລົດຊື່ກົງປະຕູຫຼັກ',
      t2: '• ຫ້າມປ່ອຍນ້ຳໄຫຼຊື່ອອກໜ້າດິນ',
      t3: '• ຫ້າມເຮືອນຕິດແຄມຮົ້ວດ້ານຂ້າງ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Cog ntoo thuv raws ob sab phab',
      l2: '2. Pas dej oval pem hauv ntej',
      l3: '3. Pob zeb granite kho kom nres cua',
      l4: '4. Phab ntsa granite tom qab 2.2m',
      t1: '• Txwv tsis ua kev ncaj zoo li phom',
      t2: '• Txwv dej xau ncaj tawm mus kev',
      t3: '• Txwv tsis tso tsev ze phab sab'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const gateText = isLao ? '🚪 ປະຕູຮົ້ວ (Gate)' : '🚪 Qhov Rooj Vag';
      const waterText = isLao ? '✓ ໜອງນ້ຳຮູບໄຂ່' : '✓ Pas Dej Oval';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="265" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 265 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="535" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 535 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Plot Ground Fill -->
        <rect x="290" y="85" width="220" height="270" fill="#DCFCE7" rx="4"/>
        <rect x="294" y="89" width="212" height="262" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="6,4"/>
        
        <!-- Rear & Side Perimeter Fences -->
        <line x1="290" y1="85" x2="510" y2="85" stroke="#15803D" stroke-width="4.5"/>
        <line x1="290" y1="85" x2="290" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="510" y1="85" x2="510" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Main House in Rear 1/3 (Architectural Layout) -->
        <polygon points="335,112 400,90 465,112" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="345" y="112" width="110" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="390" y1="112" x2="390" y2="164" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="352" y="118" width="30" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="352" y="118" width="30" height="5.5" fill="#0284C7"/>
        <text x="367" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="367" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="422" y="136" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="422" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="414" y="164" width="15" height="5" fill="#1E293B"/>
        <text x="422" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge (X=462..498) -->
        <g transform="translate(462, 112)">
          <rect x="0" y="0" width="36" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="18" y1="16" x2="18" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,36 15,30 21,30" fill="#0284C7"/>
          <text x="18" y="45" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="305" y="202" width="190" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 258 A 16 8 0 0 0 472 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="456" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- ARCHITECTURAL FRONT BASE FENCE WITH GATE OPENING ON DRAGON SIDE -->
        <line x1="290" y1="355" x2="311" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="351" y1="355" x2="510" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="311" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="351" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="315" y1="355" x2="325" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="355" y1="355" x2="345" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 335 395 L 335 355 C 335 305 355 275 385 240 C 405 210 422 190 422 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE -->
        <g transform="translate(215, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="90" y1="9" x2="98" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="98" cy="0" r="2" fill="#15803D"/>
        </g>
      `;
    }
  },

  // 3. LP-0003
  {
    id: 'LP-0003',
    score: 98,
    isGood: true,
    nameLao: 'ຕອນດິນຖົງເງິນຖົງຄຳ (Jin Dai Dou - Money Bag Plot)',
    nameHmong: 'Jin Dai Dou (Thaj Av Hnab Nyiaj - Money Bag Plot)',
    elementLao: 'ທາດທອງ/ດິນ Metal/Earth / ທາດທອງ土',
    elementHmong: 'Zog Kub/Av Metal/Earth / ທາດທອງ土',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຖົງເງິນຖົງຄຳ ໜ້າແຄບຫຼັງກວ້າງໃຫຍ່ ກັກເກັບຊັບສົມບັດ ມະຫາເສດຖີອັນດັບ 1.',
    summaryHmong: 'Tswv Yim: Thaj av hnab nyiaj pem nqaim tom qab dav loj, nyiaj nkag yooj yim khaws cia zoo tshaj plaws.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ປາກຄໍຖົງແຄບດ້ານໜ້າ ພໍດີ 4-5m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Ncauj hnab nqaim pem hauv ntej',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທອງ & ດິນ',
      l2: '• ✓ ຖືກກັບທຸກຄົນ 100%!',
      l3: '  ດີເລີດ: ກວ້າ 6 (ທາດທອງ), 7 (ທາດທອງ), 8 (ທາດດິນ), 2 (ທາດດິນ)',
      l4: '• ✗ ບໍ່ມີຂໍ້ຂັດແຍ້ງ (ດິນເສດຖີ)',
      l5: '• ເໝາະສຳລັບນັກທຸລະກິດ, ພໍ່ຄ້າ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ດິນເກີດທອງ: ໂຊກລາບມະຫາສານ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Kub & Av',
      l2: '• ✓ Haum txhua tus neeg 100%!',
      l3: '  Zoo heev: Gua 6, 7, 8, 2',
      l4: '• ✗ Tsis ntsib kev tsis zoo',
      l5: '• Haum rau neeg ua lag luam',
      sub1: 'Tsib Yam Zog: Av yug Kub',
      sub2: 'Nyiaj txiag ntau heev tsis tu'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ໃຈກາງທ້ອງຖົງກວ້າງໃຫຍ່',
      l2: '• ໄລຍະຖອຍຮົ່ນ: ພິງກົ້ນຖົງແໜ້ນ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ປາກຄໍຖົງ',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງທີ່ກວ້າງຂວາງ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບກົ້ນຖົງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Plawv hnab nyiaj dav loj',
      l2: '• Qhov Deb: Zaum nraub qaum hnab',
      l3: '• Ntsia (Xiang): Ntsia caj dab pem',
      l4: '• Zaum (Zuo): Zaum thaj chaw dav',
      bed: 'Taub Hau Pw: Phab ntsa tom qab'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ປູກໄມ້ມຸງຄຸນສອງຂ້າງຄໍຖົງ',
      l2: '2. ຂຸດໜອງນ້ຳກາງທ້ອງຖົງກັກຊັບ',
      l3: '3. ຕັ້ງໂຄມໄຟສະຫວ່າງທີ່ປາກທາງ',
      l4: '4. ກຳແພງຫຼັງສູງ 2.2m ແໜ້ນໜາ',
      t1: '• ຫ້າມເປີດປາກຖົງກວ້າງເກີນໄປ',
      t2: '• ຫ້າມປ່ອຍນ້ຳໄຫຼອອກຄໍຖົງໄວ',
      t3: '• ຫ້າມມີສິ່ງກີດຂວາງໃນທ້ອງຖົງ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Cog ntoo tiv thaiv caj dab',
      l2: '2. Khawb pas dej hauv plawv hnab',
      l3: '3. Teeb ci ntsa iab ntawm qhov rooj',
      l4: '4. Phab ntsa tom qab ruaj khov 2.2m',
      t1: '• Txwv tsis qhib caj dab dav heev',
      t2: '• Txwv tsis cia dej ntws tawm ceev',
      t3: '• Txwv tsis tso khoom ntxhov plawv'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const gateText = isLao ? '🚪 ປາກຖົງ (Gate)' : '🚪 Caj Dab (Gate)';
      const waterText = isLao ? '✓ ໜອງນ້ຳທ້ອງຖົງ' : '✓ Pas Dej Hnab';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="235" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 235 200)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="565" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 565 200)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Money Bag Perimeter Path (Bottle Neck at Front, Expanding Vastly at Rear) -->
        <path d="M 360 355 L 360 320 C 340 310 260 270 260 170 C 260 95 330 90 400 90 C 470 90 540 95 540 170 C 540 270 460 310 440 320 L 440 355 Z"
              fill="#DCFCE7" stroke="#16A34A" stroke-width="3"/>
        
        <!-- Main House Seated in Deep Rear (Architectural Layout) -->
        <polygon points="330,112 400,90 470,112" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="112" width="120" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="112" x2="388" y2="164" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="118" width="32" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="118" width="32" height="5.5" fill="#0284C7"/>
        <text x="364" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="136" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="416" y="164" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge (X=470..510) -->
        <g transform="translate(470, 112)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="305" y="202" width="190" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 258 A 16 8 0 0 0 472 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="456" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- ARCHITECTURAL FRONT BASE FENCE WITH GATE OPENING -->
        <line x1="360" y1="355" x2="376" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="424" y1="355" x2="440" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="376" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="416" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="380" y1="355" x2="390" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="420" y1="355" x2="410" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 396 395 L 396 355 C 396 315 375 285 395 245 C 410 215 424 190 424 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE -->
        <g transform="translate(280, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="90" y1="9" x2="98" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="98" cy="0" r="2" fill="#15803D"/>
        </g>
      `;
    }
  },

  // 4. LP-0004
  {
    id: 'LP-0004',
    score: 94,
    isGood: true,
    nameLao: 'ຕອນດິນຮູບນ້ຳເຕົ້າ ອາຍຸຍືນ (Hu Lu Tu - Gourd Longevity Plot)',
    nameHmong: 'Hu Lu Tu (Thaj Av Hu Lu - Gourd Longevity Plot)',
    elementLao: 'ທາດນ້ຳ/ທອງ Water/Metal / ທາດນ້ຳ金',
    elementHmong: 'Zog Dej/Kub Water/Metal / ທາດນ້ຳ金',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບນ້ຳເຕົ້າ 2 ຫ້ອງໂອບອຸ້ມ ກັ່ນຕອງພະລັງງານຊີວິດ ອາຍຸຍືນຍາວ ປິ່ນປົວໂລກາ.',
    summaryHmong: 'Tswv Yim: Thaj av hu lu 2 chav voj kheej, lim huab cua kom huv, noj qab nyob zoo ntev xyoo.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ປາກນ້ຳເຕົ້າດ້ານໜ້າ ຝັ່ງມັງກອນຂຽວ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Ncauj taub pem hauv ntej sab zaj',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ນ້ຳ & ທອງ',
      l2: '• ✓ ຖືກກັບ: ຜູ້ສູງອາຍຸ, ແພດໝໍ',
      l3: '  (ກວ້າ 1 (ທາດນ້ຳ), 6 (ທາດທອງ), 7 (ທາດທອງ))',
      l4: '• ✗ ຄົນທາດໄຟຮ້ອນ (ກວ້າ 9 (ທາດໄຟ))',
      l5: '• ແກ້ໄຂດ້ວຍດອກໄມ້ສີສົ້ມ/ແດງ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ທອງເກີດນ້ຳ: ສຸຂະພາບ, ອາຍຸຍືນ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Dej & Kub',
      l2: '• ✓ Haum: Neeg laus, kws kho mob',
      l3: '  (Gua 1 (ທາດນ້ຳ), 6 (ທາດທອງ), 7 (ທາດທອງ))',
      l4: '• ✗ Neeg Zog Hluav (Gua 9 (ທາດໄຟ))',
      l5: '• Cog paj liab & teeb ci kho',
      sub1: 'Tsib Yam Zog: Kub yug Dej',
      sub2: 'Noj qab nyob zoo, tsis mob'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ຫ້ອງຫຼັງໃຫຍ່ (Rear Belly)',
      l2: '• ໄລຍະຖອຍຮົ່ນ: ຫ້ອງໜ້າເປັນສວນຮັບແຂກ',
      l3: '• ທິດໜ້າ (向): ຫັນຜ່ານຄອດກາງສູ່ໜ້າ',
      l4: '• ທິດພິງ (坐): ພິງທ້າຍນ້ຳເຕົ້າ',
      bed: 'ຫົວຕຽງ: ຫັນສູ່ທິດ Tian Yi (ໝໍເທວະດາ)'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Chav tom qab loj',
      l2: '• Qhov Deb: Chav pem ua vaj paj',
      l3: '• Ntsia (Xiang): Ntsia dhau caj dab',
      l4: '• Zaum (Zuo): Zaum nraub qaum hu lu',
      bed: 'Taub Hau Pw: Thaj Tian Yi'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ປູກໄມ້ດັດໂອບລ້ອມຄອດກາງ',
      l2: '2. ໜອງນ້ຳຮູບກີບບົວໃນຫ້ອງໜ້າ',
      l3: '3. ຕັ້ງສີລາແກຣນິດຫຼັງເຮືອນ',
      l4: '4. ຮົ້ວຮອບຂອບຊິດປົກປ້ອງພະລັງ',
      t1: '• ຫ້າມເຈາະປະຕູຫຼັງທະລຸ',
      t2: '• ຫ້າມວາງເຕົາໄຟກົງຄອດກາງ',
      t3: '• ຫ້າມຕັດຄອດກາງໃຫ້ຂາດ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Cog ntoo khoov puag caj dab',
      l2: '2. Pas dej paj nplooj chav pem',
      l3: '3. Pob zeb granite tom qab',
      l4: '4. Phab ntsa ciam av ruaj khov',
      t1: '• Txwv tsis qhib qhov rooj tom qab',
      t2: '• Txwv tsis tso qhov cub caj dab',
      t3: '• Txwv tsis txiav caj dab kom lov'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງບົວຫ້ອງໜ້າ' : '✓ Pas Dej Pem';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="280" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-65 280 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="520" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(65 520 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Trapezoid Perimeter Polygon -->
        <polygon points="320,85 480,85 540,355 260,355" fill="#FEF2F2" stroke="#EF4444" stroke-width="2.5"/>
        
        <!-- Rear & Side Perimeter Fences -->
        <line x1="320" y1="85" x2="480" y2="85" stroke="#991B1B" stroke-width="4.5"/>
        <line x1="320" y1="85" x2="260" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="480" y1="85" x2="540" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Main House in Rear Narrow Area (Architectural Layout) -->
        <polygon points="340,112 400,90 460,112" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="350" y="112" width="100" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="390" y1="112" x2="390" y2="164" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Bedroom -->
        <rect x="355" y="118" width="28" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="355" y="118" width="28" height="5.5" fill="#0284C7"/>
        <text x="369" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="369" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="420" y="136" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="420" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="416" y="164" width="15" height="5" fill="#1E293B"/>
        <text x="424" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge (X=458..492) -->
        <g transform="translate(458, 112)">
          <rect x="0" y="0" width="34" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="17" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="17" y1="16" x2="17" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="17,34 14,28 20,28" fill="#0284C7"/>
          <text x="17" y="43" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="315" y="202" width="170" height="68" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ' : '• Tsis muaj dej: Tshav xyoob ntsuab'}</text>
        <text x="400" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ອ່າງນ້ຳພຸເຄິ່ງວົງມົນໂອບເຮືອນ' : '• Yog muaj dej: Pas dej puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 258 A 16 8 0 0 0 472 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="456" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- FRONT FENCE WITH GATES -->
        <line x1="260" y1="355" x2="374" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="426" y1="355" x2="540" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="374" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="418" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS -->
        <line x1="378" y1="355" x2="388" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="422" y1="355" x2="412" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 396 395 L 396 355 C 396 315 375 285 395 245 C 410 215 424 190 424 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE -->
        <g transform="translate(280, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="90" y1="9" x2="98" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="98" cy="0" r="2" fill="#15803D"/>
        </g>
      `;
    }
  },

  // 5. LP-0005
  {
    id: 'LP-0005',
    score: 88,
    isGood: true,
    nameLao: 'ຕອນດິນຄາງໝູ ໜ້າແຄບຫຼັງກວ້າງ (Ti Xing: Qian Zhai Hou Kuan)',
    nameHmong: 'Ti Xing Tu: Qian Zhai Hou Kuan (Pem Nqaim Tom Qab Dav)',
    elementLao: 'ທາດດິນ/ທອງ Earth/Metal / ທາດດິນທາດທອງ',
    elementHmong: 'Zog Av/Kub Earth/Metal / ທາດດິນທາດທອງ',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຄາງໝູໜ້າແຄບຫຼັງກວ້າງ ກະແສລົມບີບເຂົ້າແລ້ວຜາຍອອກພາຍໃນ ສະສົມຊັບສິນ.',
    summaryHmong: 'Tswv Yim: Thaj av pem nqaim tom qab dav, huab cua nkag los nthuav dav khaws nyiaj txiag.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າແຄບ ຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Pem nqaim sab Zaj Ntsuab',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ດິນ & ທອງ',
      l2: '• ✓ ຖືກກັບ: ຜູ້ສ້າງເນື້ອສ້າງຕົວ',
      l3: '  (ກວ້າ 8 (ທາດດິນ), 2 (ທາດດິນ), 6 (ທາດທອງ), 7 (ທາດທອງ))',
      l4: '• ✗ ບໍ່ມີຂໍ້ຂັດແຍ້ງຮ້າຍແຮງ',
      l5: '• ທຸກກວ້າຢູ່ແລ້ວໝັ້ນຄົງດີ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ດິນເກີດທອງ: ຍິ່ງຢູ່ຍິ່ງຮັ່ງມີ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Av & Kub',
      l2: '• ✓ Haum: Neeg pib tsim lag luam',
      l3: '  (Gua 8 (ທາດດິນ), 2 (ທາດດິນ), 6 (ທາດທອງ), 7 (ທາດທອງ))',
      l4: '• ✗ Tsis ntsib kev tsis zoo',
      l5: '• Txhua tus nyob tau zoo heev',
      sub1: 'Tsib Yam Zog: Av yug Kub',
      sub2: 'Nyob ntev nyiaj txiag ntau'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ເຂດຫຼັງກວ້າງ (Xuan Wu Wide)',
      l2: '• ໄລຍະຖອຍຮົ່ນ: ລານໜ້າກວ້າງ 8-10m',
      l3: '• ທິດໜ້າ (向): ຫັນໜ້າສູ່ທາງເຂົ້າແຄບ',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງກວ້າງແໜ້ນໜາ',
      bed: 'ຫົວຕຽງ: ພິງຝາຫຼັງກວ້າງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Sab tom qab dav loj',
      l2: '• Qhov Deb: Tshav pem 8-10m',
      l3: '• Ntsia (Xiang): Ntsia caj dab pem',
      l4: '• Zaum (Zuo): Zaum nraub qaum dav',
      bed: 'Taub Hau Pw: Phab ntsa tom qab'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ໂຄມໄຟສະຫວ່າງນຳທາງເຂົ້າ',
      l2: '2. ແນວຕົ້ນໄມ້ຕາມແນວແດນຜາຍອອກ',
      l3: '3. ໜອງນ້ຳເຄິ່ງວົງມົນໜ້າເຮືອນ',
      l4: '4. ກຳແພງຫຼັງສູງ 2.2m',
      t1: '• ຫ້າມເປີດປະຕູຫຼັງກວ້າງ',
      t2: '• ຫ້າມຕິດມຸມແຫຼມເກີນໄປ',
      t3: '• ຫ້າມຂຸດໜອງນ້ຳຫຼັງ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Teeb ci qhia kev nkag',
      l2: '2. Ntoo ntsuab raws ciam av',
      l3: '3. Pas dej semicircular pem tsev',
      l4: '4. Phab ntsa tom qab 2.2m',
      t1: '• Txwv tsis qhib qhov rooj tom qab',
      t2: '• Txwv tsis nyob ze ces kaum',
      t3: '• Txwv tsis khawb pas dej tom qab'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງນ້ຳໝິງຖັງ' : '✓ Pas Dej Ming Tang';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>

        <!-- Triangular Plot Perimeter Polygon (Apex pointing Down/South at Y=355) -->
        <polygon points="260,85 540,85 400,355" fill="#FEF2F2" stroke="#DC2626" stroke-width="3"/>
        
        <!-- Rear Perimeter Wall (Wide Base at Rear Y=85) -->
        <line x1="260" y1="85" x2="540" y2="85" stroke="#991B1B" stroke-width="4.5"/>
        <line x1="260" y1="85" x2="400" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="540" y1="85" x2="400" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Main House in Rear Wide Base Area (Architectural Layout) -->
        <polygon points="330,112 400,90 470,112" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="112" width="120" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="112" x2="388" y2="164" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Bedroom -->
        <rect x="348" y="118" width="32" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="118" width="32" height="5.5" fill="#0284C7"/>
        <text x="364" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="136" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="416" y="164" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge (X=470..510) -->
        <g transform="translate(470, 112)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="305" y="202" width="190" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 258 A 16 8 0 0 0 472 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="456" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="345" y="348" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="395" y="348" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS -->
        <line x1="349" y1="353" x2="359" y2="342" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="399" y1="353" x2="389" y2="342" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 370 395 L 370 355 C 370 310 390 280 410 240 C 420 210 424 190 424 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE -->
        <g transform="translate(245, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="90" y1="9" x2="100" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN APEX GATE BADGE -->
        <g transform="translate(415, 350)">
          <rect x="0" y="0" width="88" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="44" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="0" y1="9" x2="-12" y2="5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-12" cy="5" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  },

  // 6. LP-0006
  {
    id: 'LP-0006',
    score: 35,
    isGood: false,
    nameLao: 'ຕອນດິນຄາງໝູ ໜ້າກວ້າງຫຼັງແຄບ ຊັບຮົ່ວໄຫຼ (Qian Kuan Hou Zhai)',
    nameHmong: 'Ti Xing Tu: Qian Kuan Hou Zhai (Pem Dav Tom Qab Nqaim)',
    elementLao: 'ທາດໄຟພິສ Fire Sha / 煞',
    elementHmong: 'Zog Hluav Taws Fire Sha / 煞',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຄາງໝູໜ້າກວ້າງຫຼັງແຄບ ລົມພັດກວາດອອກຫຼັງໄວ ຊັບຮົ່ວໄຫຼ ຕ້ອງສ້າງກຳແພງຕັນຫຼັງ.',
    summaryHmong: 'Tswv Yim: Thaj av pem dav tom qab nqaim cua ntsawj tawm ceev, nyiaj txiag khiav tawm, yuav tsum kho.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າຝັ່ງມັງກອນຂຽວ ຂະໜາດ 4-5m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Pem hauv ntej sab Zaj dav 4-5m',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ໄຟພິສ (Fire Sha)',
      l2: '• ✗ ຂັດແຍ້ງ: ຫົວໜ້າຄອບຄົວ (ກວ້າ 6 (ທາດທອງ))',
      l3: '  ແລະ ແມ່ (ກວ້າ 2 (ທາດດິນ)) ໄຮ້ທີ່ເພິ່ງ',
      l4: '• ບໍ່ເໝາະສຳລັບຢູ່ອາໄສຖ້າບໍ່ແກ້',
      l5: '• ເໝາະສະເພາະຮ້ານຄ້າໜ້າກວ້າງຊົ່ວຄາວ',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ຊັບສິນຮົ່ວໄຫຼ, ຄວາມຄຽດ, ໄຮ້ທີ່ເພິ່ງ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Hluav Taws Sha',
      l2: '• ✗ Tsis haum: Txiv tsev (Gua 6 (ທາດທອງ))',
      l3: '  thiab Niam tsev (Gua 2 (ທາດດິນ))',
      l4: '• Tsis haum rau tsev neeg nyob',
      l5: '• Siv tau rau chaw muag khoom xwb',
      sub1: 'Tej Kev Txom Nyem (Impact)',
      sub2: 'Nyiaj txiag khiav tawm, ntxhov siab'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງກາງຕອນດິນ (Center)',
      l2: '• ຫ້າມຕິດດ້ານຫຼັງແຄບເດັດຂາດ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ລານໜ້າກວ້າງ',
      l4: '• ທິດພິງ (坐): ພິງກຳແພງແກ້ໄຂຫຼັງ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບກາງເຮືອນ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv plawv thaj av',
      l2: '• Txwv tsis tso ze tom qab nqaim',
      l3: '• Ntsia (Xiang): Ntsia pem dav',
      l4: '• Zaum (Zuo): Zaum phab ntsa kho',
      bed: 'Taub Hau Pw: Phab ntsa plawv tsev'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ສ້າງກຳແພງຫີນແກຣນິດ 2.5m ຫຼັງແຄບ',
      l2: '2. ປູກຕົ້ນສົນ 7 ຕົ້ນໜາແໜ້ນຫຼັງແຄບ',
      l3: '3. ຕັ້ງໂຄມໄຟສະຫວ່າງ 2 ມຸມຫຼັງ',
      l4: '4. ໜອງນ້ຳເຄິ່ງວົງມົນໜ້າເຮືອນດັກຊັບ',
      t1: '• ຫ້າມສ້າງເຮືອນຕິດຫຼັງແຄບ',
      t2: '• ຫ້າມເຈາະປະຕູຫຼັງທະລຸ',
      t3: '• ຫ້າມເປີດປະຕູໜ້າກວ້າງເກີນ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Phab ntsa granite 2.5m tom qab',
      l2: '2. Cog ntoo thuv 7 tsob tom qab',
      l3: '3. Teeb ci 2 ces kaum tom qab',
      l4: '4. Pas dej semicircular pem tsev',
      t1: '• Txwv tsis ua tsev ze tom qab',
      t2: '• Txwv tsis qhib qhov rooj tom qab',
      t3: '• Txwv tsis qhib qhov rooj pem dav'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງນ້ຳດັກຊັບ' : '✓ Pas Dej Khaws Zog';
      const wallPill = isLao ? '🛡️ ກຳແພງ 2.5m + ສົນ 7 ຕົ້ນ' : '🛡️ Phab Ntsa 2.5m + Ntoo';

      return `
        <!-- Diamond Perimeter Polygon -->
        <polygon points="400,85 540,220 400,355 260,220" fill="#FEF2F2" stroke="#EA580C" stroke-width="3"/>
        <polygon points="400,90 533,220 400,350 267,220" fill="none" stroke="#F97316" stroke-width="1.5" stroke-dasharray="6,4"/>

        <!-- Main House in Center (Architectural Layout) -->
        <polygon points="340,118 400,96 460,118" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="350" y="118" width="100" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="390" y1="118" x2="390" y2="170" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Bedroom -->
        <rect x="355" y="124" width="28" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="355" y="124" width="28" height="5.5" fill="#0284C7"/>
        <text x="369" y="138" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="369" y="158" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="420" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="420" y="158" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="416" y="170" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="186" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge (X=458..492) -->
        <g transform="translate(458, 118)">
          <rect x="0" y="0" width="34" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="17" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="17" y1="16" x2="17" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="17,34 14,28 20,28" fill="#0284C7"/>
          <text x="17" y="43" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="310" y="206" width="180" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="221" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="235" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="248" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 262 A 16 8 0 0 0 472 262 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="456" y="259" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="325" y="340" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="375" y="340" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS -->
        <line x1="329" y1="345" x2="339" y2="334" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="379" y1="345" x2="369" y2="334" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 350 395 L 350 355 C 350 310 380 280 400 240 C 415 210 424 195 424 175" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE -->
        <g transform="translate(225, 340)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="90" y1="9" x2="100" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="100" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN APEX GATE BADGE -->
        <g transform="translate(415, 340)">
          <rect x="0" y="0" width="88" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="44" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="0" y1="9" x2="-12" y2="5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-12" cy="5" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  },

  // 7. LP-0007: Scissors Sha
  {
    id: 'LP-0007',
    score: 18,
    isGood: false,
    nameLao: 'ຕອນດິນສາມຫຼ່ຽມ ຄົມມີດຕັດ ທາງສາມແພ່ງ (Scissors Sha / ມີດຕັດສາມແພ່ງ)',
    nameHmong: 'San Jiao Tu: Dui Jiao Chong (Thaj Av Peb Fab Ntse Scissors Sha)',
    elementLao: 'ທາດໄຟຮ້ອນ Sharp Fire / ທາດໄຟ煞',
    elementHmong: 'Zog Hluav Taws Sharp Fire / ທາດໄຟ煞',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມເປັນທາດໄຟ (ທາດໄຟ) ຖືກທາງຕັດຄືມີດຕັດ ຕ້ອງສ້າງກຳແພງຕັດມຸມປ່ຽນຮູບຊົງໃຫ້ເປັນຄາງໝູ/ສີ່ຫຼ່ຽມ.',
    summaryHmong: 'Tswv Yim: Thaj av peb fab hluav taws raug kev txiav zoo li txiab, yuav tsum tsim phab ntsa txiav kaum kom ua 4 fab.',
    isCustomScissors: true
  },

  // 7B. LP-0007B: Triangle Plot with Road on Left Side Only
  {
    id: 'LP-0007B',
    score: 38,
    isGood: false,
    hasFrontRoad: false,
    nameLao: 'ຕອນດິນສາມຫຼ່ຽມ ທາງຕິດດ້ານຊ້າຍເບື້ອງດຽວ (Triangle Plot - Left Road Only)',
    nameHmong: 'San Jiao Tu: Kev Sab Laug (Thaj Av Peb Fab Kev Sab Laug)',
    elementLao: 'ທາດໄຟ/ລົມ Fire/Wind Sha / ທາດໄຟ',
    elementHmong: 'Zog Hluav/Cua Fire/Wind Sha / ທາດໄຟ',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມຕິດຖະໜົນດ້ານຊ້າຍ (ຝັ່ງມັງກອນ) ເບື້ອງດຽວ, ດ້ານຂວາຕິດເພື່ອນບ້ານ. ມຸມແຫຼມຍັງເປັນທາດໄຟ, ຕ້ອງຕັດມຸມສ້າງກຳແພງແກ້ໄຂ.',
    summaryHmong: 'Tswv Yim: Thaj av peb fab muaj kev sab laug (Dragon), sab xis yog vaj tse luag lwm tus. Kaum ntse yog hluav taws, yuav tsum txiav kaum tsim phab ntsa kho.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຕິດຖະໜົນຊ້າຍ ຖອຍຫ່າງມຸມແຫຼມ >15m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Kev sab laug, deb kaum ntse >15m',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳ: ໄຟ & ລົມ (Fire Sha)',
      l2: '• ມັງກອນເປີດຮັບພະລັງ Yang Qi',
      l3: '• ເສືອຂວາສະຫງົບ (ຕິດເພື່ອນບ້ານ)',
      l4: '• ✗ ຄົນທາດທອງ (ກວ້າ 6, 7) ລະວັງ',
      l5: '• ປູກຕົ້ນໄມ້ ແລະ ສ້າງກຳແພງດິນ',
      sub1: 'ກົດເກນ 5 ທາດ & ເຂັມທິດ',
      sub2: 'ໄຟຂົ່ມທອງ: ຕ້ອງໃຊ້ດິນໄກ່ເກ່ຍ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog: Hluav Taws & Cua',
      l2: '• Zaj Ntsuab txais zog Yang',
      l3: '• Tsov Dawb ntsiag to (ciam luag)',
      l4: '• ✗ Neeg Zog Kub (Gua 6, 7) ceev faj',
      l5: '• Cog ntoo & tsim phab ntsa kho',
      sub1: 'Tsib Yam Zog & Bagua',
      sub2: 'Hluav rhuav Kub: Siv Av kho'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງຂ້ອນໄປທາງຫຼັງກວ້າງ',
      l2: '• ຫຼີກລ່ຽງເຂດມຸມແຫຼມ >15m',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ຖະໜົນຊ້າຍ',
      l4: '• ທິດພິງ (坐): ພິງດ້ານເພື່ອນບ້ານ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບດ້ານເພື່ອນບ້ານ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso tom qab thaj av dav',
      l2: '• Deb kaum ntse >15m',
      l3: '• Ntsia (Xiang): Ntsia kev sab laug',
      l4: '• Zaum (Zuo): Zaum phab tsev luag',
      bed: 'Taub Hau Pw: Phab ntsa sab tsev luag'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ສ້າງກຳແພງ 2.2m ຕັດມຸມແຫຼມ',
      l2: '2. ຕັ້ງຫີນ Tai Shan Shi Gan Dang',
      l3: '3. ປູກຕົ້ນສົນ 5 ຕົ້ນບັງແນວຖະໜົນ',
      l4: '4. ຂຸດໜອງນ້ຳໝິງຖັງດັບໄຟແຫຼມ',
      t1: '• ຫ້າມສ້າງເຮືອນຕິດມຸມແຫຼມ',
      t2: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມ',
      t3: '• ຫ້າມນອນຫັນຫົວຫາມຸມແຫຼມ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Phab ntsa 2.2m txiav kaum ntse',
      l2: '2. Tso pob zeb Tai Shan ntawm kaum',
      l3: '3. Cog ntoo thuv 5 tsob thaiv kev',
      l4: '4. Pas dej semicircular tua hluav',
      t1: '• Txwv tsis tso tsev ze kaum ntse',
      t2: '• Txwv tsis qhib qhov rooj kaum',
      t3: '• Txwv tsis ntsia taub hau kaum'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ວາງຂ້ອນຫຼັງກວ້າງ' : 'Hauv Qab Dav';
      const wallPill = isLao ? '🛡️ ກຳແພງ 2.2m ຕັດມຸມ' : '🛡️ Phab Ntsa 2.2m Txiav';
      const roadLeft = isLao ? 'ຖະໜົນດ້ານຊ້າຍ (Left Road)' : 'Kev Sab Laug (Left Road)';
      const neighborRight = isLao ? 'ເພື່ອນບ້ານດ້ານຂວາ (Right Neighbor)' : 'Ciam Av Tsev Sab Xis';

      return `
        <!-- Left Wedge Plot Fill -->
        <polygon points="120,60 380,240 180,360" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        
        <!-- House Footprint Located Away from Apex (Architectural Layout) -->
        <polygon points="320,236 400,214 480,236" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="330" y="236" width="140" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <text x="400" y="260" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#1E293B" text-anchor="middle">${isLao ? 'ອາຄານຫຼັກ (ຖອຍຫ່າງຈາກມຸມແຫຼມ)' : 'Lub Tsev (Nyob Deb Ntawm Hniav)'}</text>
        <text x="400" y="276" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງໂຖງ &amp; ຫ້ອງນອນ' : 'Chaw Txais Qhua &amp; Chaw Pw'}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="392" y="288" width="16" height="5" fill="#1E293B"/>
        <text x="400" y="304" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Defensive Tree Buffer / Hedge at Intersection Apex -->
        <path d="M 370 230 C 375 225 385 225 390 230 C 395 235 390 245 380 245 Z" fill="#15803D"/>
        <circle cx="370" cy="225" r="8" fill="#16A34A"/>
        <circle cx="382" cy="218" r="9" fill="#22C55E"/>
        <circle cx="395" cy="225" r="8" fill="#16A34A"/>
        <text x="385" y="208" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#166534" text-anchor="middle">${isLao ? 'ປ່າໄມ້ກັນຊົນ / ຕົ້ນໄມ້ບັງສາຍຕາ' : 'Ntoo Thaiv Hniav Txiab'}</text>

        <!-- Ming Tang Bright Hall (In Front of House Y=150..205) -->
        <rect x="325" y="150" width="150" height="52" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="400" y="168" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="182" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າໂລ່ງ' : '• Tsis muaj dej: Tshav kaj'}</text>
        <text x="400" y="195" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ອ່າງນ້ຳພຸມົນ 10-15%' : '• Yog muaj: Pas dej 10-15%'}</text>

        <!-- Driveway Entering from Safe Side Road -->
        <path d="M 230 360 C 260 340 320 330 392 293" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,3"/>
        <text x="295" y="325" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- Intersection Road Lines -->
        <line x1="80" y1="40" x2="390" y2="245" stroke="#94A3B8" stroke-width="14"/>
        <line x1="80" y1="40" x2="390" y2="245" stroke="#E2E8F0" stroke-width="1.5" stroke-dasharray="5,5"/>
        <line x1="140" y1="380" x2="390" y2="245" stroke="#94A3B8" stroke-width="14"/>
        <line x1="140" y1="380" x2="390" y2="245" stroke="#E2E8F0" stroke-width="1.5" stroke-dasharray="5,5"/>

        <!-- Scissors Sha Attack Vector Badge -->
        <g transform="translate(415, 230)">
          <rect x="0" y="0" width="85" height="22" rx="3" fill="#DC2626"/>
          <text x="42" y="14" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${isLao ? '⚠️ ຈຸດແຫຼມມີດຕັດ' : '⚠️ Hniav Txiab Tua'}</text>
        </g>
      `;
    }
  },

  // 7C. LP-0007C: Triangle Plot with Road on Right Side Only
  {
    id: 'LP-0007C',
    score: 32,
    isGood: false,
    hasFrontRoad: false,
    nameLao: 'ຕອນດິນສາມຫຼ່ຽມ ທາງຕິດດ້ານຂວາເບື້ອງດຽວ (Triangle Plot - Right Road Only)',
    nameHmong: 'San Jiao Tu: Kev Sab Xis (Thaj Av Peb Fab Kev Sab Xis)',
    elementLao: 'ທາດໄຟ/ເສືອຂາວ Fire/Tiger Sha / ທາດໄຟ',
    elementHmong: 'Zog Hluav/Tsov Fire/Tiger Sha / ທາດໄຟ',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມຕິດຖະໜົນດ້ານຂວາ (ຝັ່ງເສືອຂາວ) ເບື້ອງດຽວ, ດ້ານຊ້າຍຕິດເພື່ອນບ້ານ. ເສືອຂາວເຄື່ອນໄຫວແຮງ ຕ້ອງຕັດມຸມແຫຼມ ແລະ ປູກແນວໄມ້ບັງ.',
    summaryHmong: 'Tswv Yim: Thaj av peb fab muaj kev sab xis (White Tiger), sab laug yog tsev luag. Tsov Dawb txav zog heev, yuav tsum txiav kaum ntse thiab cog ntoo thaiv.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຕິດຖະໜົນຂວາ ຖອຍຫ່າງມຸມແຫຼມ >18m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Kev sab xis, deb kaum ntse >18m',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳ: ໄຟ & ເສືອຂາວ (Tiger Sha)',
      l2: '• ເສືອຂວາເຄື່ອນໄຫວ: ລະວັງການຂັດແຍ້ງ',
      l3: '• ມັງກອນຊ້າຍຕິດເພື່ອນບ້ານ: ຂາດພະລັງໜູນ',
      l4: '• ✗ ຄົນທາດໄມ້ (ກວ້າ 3, 4) ລະວັງ',
      l5: '• ສ້າງກຳແພງແຍກໂຊນຢ່າງເດັດຂາດ',
      sub1: 'ກົດເກນ 5 ທາດ & ເຂັມທິດ',
      sub2: 'ເສືອຂາວພຸ່ງ: ຕ້ອງຕັ້ງຫີນ Tai Shan'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog: Hluav Taws & Tsov Dawb Sha',
      l2: '• Tsov Dawb txav ceev: ceev faj kev sib cav',
      l3: '• Zaj Ntsuab ciam luag: tsis muaj zog pab',
      l4: '• ✗ Neeg Zog Ntoo (Gua 3, 4) ceev faj',
      l5: '• Tsim phab ntsa thaiv cais thaj chaw',
      sub1: 'Tsib Yam Zog & Bagua',
      sub2: 'Tsov Dawb phem: Tso pob zeb Tai Shan'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງໃນເຂດປອດໄພຫຼັງກວ້າງ',
      l2: '• ຖອຍຫ່າງມຸມແຫຼມ >18m',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ຖະໜົນຂວາ',
      l4: '• ທິດພິງ (坐): ພິງເພື່ອນບ້ານຊ້າຍ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບດ້ານເພື່ອນບ້ານ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv thaj chaw tom qab dav',
      l2: '• Deb kaum ntse >18m',
      l3: '• Ntsia (Xiang): Ntsia kev sab xis',
      l4: '• Zaum (Zuo): Zaum phab tsev luag sab laug',
      bed: 'Taub Hau Pw: Phab ntsa sab tsev luag'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ສ້າງກຳແພງ 2.2m ຕັດມຸມແຫຼມໜ້າ',
      l2: '2. ຕັ້ງຫີນ Tai Shan Shi Gan Dang',
      l3: '3. ປູກແນວໄມ້ໜາແໜ້ນ 2.5m ຕາມແນວຖະໜົນ',
      l4: '4. ໜອງນ້ຳເຄິ່ງວົງມົນດັບໄຟເສືອ',
      t1: '• ຫ້າມສ້າງເຮືອນຕິດມຸມແຫຼມ',
      t2: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມ',
      t3: '• ຫ້າມເປີດປະຕູກວ້າງເກີນໄປດ້ານເສືອ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Phab ntsa 2.2m txiav kaum ntse pem',
      l2: '2. Tso pob zeb Tai Shan ntawm kaum',
      l3: '3. Cog hav ntoo tuab 2.5m raws txoj kev',
      l4: '4. Pas dej semicircular tua hluav tsov',
      t1: '• Txwv tsis tso tsev ze kaum ntse',
      t2: '• Txwv tsis qhib qhov rooj kaum',
      t3: '• Txwv tsis qhib qhov rooj dav sab tsov'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ວາງຂ້ອນຫຼັງກວ້າງ' : 'Hauv Qab Dav';
      const wallPill = isLao ? '🛡️ ກຳແພງ 2.2m ຕັດມຸມ' : '🛡️ Phab Ntsa 2.2m Txiav';
      const roadRight = isLao ? 'ຖະໜົນດ້ານຂວາ (Right Road)' : 'Kev Sab Xis (Right Road)';
      const neighborLeft = isLao ? 'ເພື່ອນບ້ານດ້ານຊ້າຍ (Left Neighbor)' : 'Ciam Av Tsev Sab Laug';

      return `
        <!-- Right Wedge Plot Fill -->
        <polygon points="680,60 420,240 620,360" fill="#FEF2F2" stroke="#DC2626" stroke-width="2"/>
        
        <!-- House Footprint Located Away from Apex (Architectural Layout) -->
        <polygon points="320,236 400,214 480,236" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="330" y="236" width="140" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <text x="400" y="260" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#1E293B" text-anchor="middle">${isLao ? 'ອາຄານຫຼັກ (ຖອຍຫ່າງຈາກມຸມແຫຼມ)' : 'Lub Tsev (Nyob Deb Ntawm Hniav)'}</text>
        <text x="400" y="276" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງໂຖງ &amp; ຫ້ອງນອນ' : 'Chaw Txais Qhua &amp; Chaw Pw'}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="392" y="288" width="16" height="5" fill="#1E293B"/>
        <text x="400" y="304" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Defensive Tree Buffer / Hedge at Intersection Apex -->
        <path d="M 410 230 C 405 225 395 225 390 230 C 385 235 390 245 400 245 Z" fill="#15803D"/>
        <circle cx="430" cy="225" r="8" fill="#16A34A"/>
        <circle cx="418" cy="218" r="9" fill="#22C55E"/>
        <circle cx="405" cy="225" r="8" fill="#16A34A"/>
        <text x="415" y="208" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#166534" text-anchor="middle">${isLao ? 'ປ່າໄມ້ກັນຊົນ / ຕົ້ນໄມ້ບັງສາຍຕາ' : 'Ntoo Thaiv Hniav Txiab'}</text>

        <!-- Ming Tang Bright Hall (In Front of House Y=150..205) -->
        <rect x="325" y="150" width="150" height="52" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="400" y="168" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="182" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າໂລ່ງ' : '• Tsis muaj dej: Tshav kaj'}</text>
        <text x="400" y="195" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ອ່າງນ້ຳພຸມົນ 10-15%' : '• Yog muaj: Pas dej 10-15%'}</text>

        <!-- Driveway Entering from Safe Side Road -->
        <path d="M 570 360 C 540 340 480 330 408 293" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,3"/>
        <text x="495" y="325" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- Intersection Road Lines -->
        <line x1="720" y1="40" x2="410" y2="245" stroke="#94A3B8" stroke-width="14"/>
        <line x1="720" y1="40" x2="410" y2="245" stroke="#E2E8F0" stroke-width="1.5" stroke-dasharray="5,5"/>
        <line x1="660" y1="380" x2="410" y2="245" stroke="#94A3B8" stroke-width="14"/>
        <line x1="660" y1="380" x2="410" y2="245" stroke="#E2E8F0" stroke-width="1.5" stroke-dasharray="5,5"/>

        <!-- Scissors Sha Attack Vector Badge -->
        <g transform="translate(300, 230)">
          <rect x="0" y="0" width="85" height="22" rx="3" fill="#DC2626"/>
          <text x="42" y="14" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${isLao ? '⚠️ ຈຸດແຫຼມມີດຕັດ' : '⚠️ Hniav Txiab Tua'}</text>
        </g>
      `;
    }
  },

  // 7D. LP-0007D: Triangle Plot with Front Apex Facing Road
  {
    id: 'LP-0007D',
    score: 28,
    isGood: false,
    hasFrontRoad: true,
    nameLao: 'ຕອນດິນສາມຫຼ່ຽມ ຫົວແຫຼມຕຳທາງໜ້າ ຫຼັງກວ້າງ (Triangle Plot - Front Apex Facing Road)',
    nameHmong: 'San Jiao Tu: Kaum Ntse Pem (Thaj Av Peb Fab Kaum Ntse Ntsib Kev)',
    elementLao: 'ທາດໄຟແຫຼມຕຳທາງໜ້າ Front Sharp Fire / 尖嘴煞',
    elementHmong: 'Zog Hluav Ntse Pem Front Fire Sha / 尖嘴煞',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມຫົວແຫຼມຕຳທາງໜ້າ ເປັນພະລັງພິສທາດໄຟ (Fire Sha). ຕ້ອງສ້າງກຳແພງຕັດມຸມປ່ຽນເປັນຄາງໝູ, ວາງເຮືອນຢູ່ຫຼັງກວ້າງ ແລະ ເຮັດທາງລົດໂຄ້ງ S-Curve.',
    summaryHmong: 'Tswv Yim: Thaj av peb fab kaum ntse ntsib kev yog zog Hluav Taws Sha. Yuav tsum tsim phab ntsa txiav kaum ua trapezoid, tso tsev rau sab nraub qaum dav thiab ua kev nkhaus S-Curve.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຕັ້ງຖອຍຈາກມຸມແຫຼມ >8m ຝັ່ງມັງກອນ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ S-Curve ຫ້າມແທງຊື່',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ຈັດລານຫຍ້າຂຽວໂລ່ງ (ຫ້າມເຕີມໃນມຸມແຫຼມ)',
      l4: '• ມີບໍ່ນ້ຳ: ຖົມມຸມແຫຼມຖິ້ມ! ຮັກສາໄວ້ສະເພາະໜ້າເຮືອນ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ປ້ອງກັນພະລັງພິສ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Pem kaum ntse thim >8m sab Zaj',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve) txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab (txwv ntxiv kaum ntse)',
      l4: '• Yog Muaj Dej: Ntsaws kaum ntse pov tseg! Khaws pem tsev',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev nkhaus zoo siab (ເສັ້ນໂຄ້ງມີເມດຕາ) tiv thaiv sha'
    },

    guaLao: {
      title: '☯ ທາດກວ້າ & ພະລັງຊີ່',
      l1: '• ທາດປະຈຳດິນ: ທາດໄຟແຫຼມ (Huo Sha 3-8/9)',
      l2: '• ຖືກກັບ: ວັດວາ, ປ້ຳນ້ຳມັນ, ຮ້ານຂາຍເຫຼັກ/ໄຟຟ້າ',
      l3: '• ບໍ່ຖືກກັບ: ຄົນທາດທອງ (ກວ້າ 6, 7) ແລະ ນ້ຳ (ກວ້າ 1)',
      l4: '• ຫຼັງພິງ: ຫຼັງກວ້າງ Xuan Wu ດີເລີດຖ້າຕັ້ງສາກ 90°',
      l5: '• ຄະແນນພະລັງ: 28/100 (ແກ້ໄຂແລ້ວຂຶ້ນ 75/100)',
      sub1: 'ການດັດແປງ: ຕັດມຸມແຫຼມໜ້າປ່ຽນເປັນຄາງໝູ',
      sub2: '✓ ປ່ຽນພະລັງພິສໃຫ້ກາຍເປັນພະລັງມຸງຄຸນ'
    },
    guaHmong: {
      title: '☯ ZOG GUA & LUB ZOG QI',
      l1: '• Zog Ntsiab: Zog Hluav Ntse (Fire Sha 3-8/9)',
      l2: '• Haum rau: Tuam tsev, chaw tso roj tsheb, hlau/hluav taws',
      l3: '• Tsis haum: Neeg Zog Kub (Gua 6, 7) thiab Dej (Gua 1)',
      l4: '• Nraub Qaum: Xuan Wu dav heev yog tso ncaj 90°',
      l5: '• Zog Zog: 28/100 (Kho tas nce txog 75/100)',
      sub1: 'Kev Kho: Txiav kaum ntse hloov ua trapezoid',
      sub2: '✓ Hloov zog phem ua kom muaj hmoov'
    },

    houseLao: {
      title: '🏡 ການວາງເຮືອນ & ທິດ',
      l1: '• ຕຳແໜ່ງ: ວາງອາຄານຫຼັກໃນເຂດຫຼັງກວ້າງ 1/3',
      l2: '• ໄລຍະຖອຍ: ຖອຍຫ່າງຈາກມຸມແຫຼມໜ້າ >15-20m',
      l3: '• ຮູບຊົງເຮືອນ: ສີ່ຫຼ່ຽມຜືນຜ້າຕັ້ງສາກ 90° ເຕັມຫຼັງ',
      l4: '• ທິດຫົວຕຽງ: ພິງຝາທຶບດ້ານຫຼັງກວ້າງ',
      bed: 'ຫົວຕຽງພິງກຳແພງຫຼັງທີ່ໜັກແໜ້ນ',
      bedSub: 'ຫ້າມວາງຕຽງນອນ ຫຼື ເຕົາໄຟໃນເຂດມຸມແຫຼມ'
    },
    houseHmong: {
      title: '🏡 KEV TSO TSEV & KEV TAWS',
      l1: '• Chaw Tso Tsev: Tso rau sab nraub qaum dav 1/3',
      l2: '• Qhov Nrug: Thim deb ntawm kaum ntse pem >15-20m',
      l3: '• Duab Tsev: Rectangle ncaj ncees 90° puv nkaus',
      l4: '• Taub Hau Pw: Phab ntsa sab nraub qaum dav',
      bed: 'Taub Hau Pw: Phab ntsa nraub qaum ruaj khov',
      bedSub: 'Txwv tsis tso txaj pw lossis qhov cub kaum ntse'
    },

    remedyLao: {
      title: '🛡 ວິທີແກ້ & ເສີມຊີ່',
      l1: '1. ສ້າງກຳແພງ 2.2m ຕັດມຸມແຫຼມໜ້າຖິ້ມ',
      l2: '2. ປູກແນວຕົ້ນສົນ/ໄຜ່ດູດແຮງລົມໃນມຸມແຫຼມ',
      l3: '3. ຕັ້ງສີລາໄທຊານ (石敢当) ທີ່ມຸມແຫຼມຕຳທາງ',
      l4: '4. ຖົມໜອງນ້ຳແຫຼມຖິ້ມ; ຕັ້ງນ້ຳພຸເຄິ່ງວົງໜ້າເຮືອນ',
      t1: '• ຫ້າມສ້າງເຮືອນຍື່ນເຂົ້າໄປໃນມຸມແຫຼມໜ້າ',
      t2: '• ຫ້າມຕັ້ງປະຕູໃຫຍ່ກົງປາຍແຫຼມພໍດີ',
      t3: '• ຫ້າມຂຸດສະນ້ຳສາມຫຼ່ຽມໃນມຸມແຫຼມ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Phab ntsa 2.2m txiav kaum ntse pem pov tseg',
      l2: '2. Cog hav ntoo ntsuab/ntoo xyoob thaiv cua pem',
      l3: '3. Tso pob zeb Tai Shan ntawm kaum ntse pem',
      l4: '4. Ntsaws pas dej kaum ntse; tso dej semicircular pem tsev',
      t1: '• Txwv tsis txhim tsev rau hauv kaum ntse pem',
      t2: '• Txwv tsis qhib qhov rooj ncaj qhov ntse',
      t3: '• Txwv tsis khawb pas dej peb fab kaum ntse'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ວາງຫຼັງກວ້າງ 90°' : 'Nraub Qaum Dav';
      const wallPill = isLao ? '🛡️ ກຳແພງ 2.2m ຕັດມຸມ' : '🛡️ Phab Ntsa 2.2m Txiav';
      const roadText = isLao ? 'ຖະໜົນດ້ານໜ້າ (Front Main Road)' : 'Kev Pem Hauv Ntej (Front Road)';
      const hazardText = isLao ? '⚠️ ມຸມແຫຼມຕຳທາງ (Huo Sha)' : '⚠️ Kaum Ntse Ntsib Kev';

      return `
        <!-- Central Acute Wedge Plot -->
        <polygon points="400,60 280,360 520,360" fill="#FEF2F2" stroke="#DC2626" stroke-width="2.5"/>

        <!-- Main House in Rear Upper Safe Zone -->
        <polygon points="320,118 400,96 480,118" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="330" y="118" width="140" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <text x="400" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#1E293B" text-anchor="middle">${isLao ? 'ອາຄານຫຼັກ (ຕັ້ງຢູ່ເຂດປອດໄພດ້ານຫຼັງ)' : 'Lub Tsev (Nyob Sab Nraub Qaum)'}</text>
        <text x="400" y="158" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງໂຖງ &amp; ຫ້ອງນອນ' : 'Chaw Txais Qhua &amp; Chaw Pw'}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="392" y="170" width="16" height="5" fill="#1E293B"/>
        <text x="400" y="186" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Ming Tang Bright Hall (Center of Plot Y=202..260) -->
        <rect x="335" y="202" width="130" height="54" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="400" y="218" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າໂລ່ງ' : '• Tsis muaj dej: Tshav kaj'}</text>
        <text x="400" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ອ່າງນ້ຳພຸມົນ 10-15%' : '• Yog muaj: Pas dej 10-15%'}</text>

        <!-- Defensive Tree Buffer / Hedge at Acute Tip Y=320..350 -->
        <circle cx="370" cy="335" r="9" fill="#16A34A"/>
        <circle cx="400" cy="342" r="11" fill="#15803D"/>
        <circle cx="430" cy="335" r="9" fill="#16A34A"/>
        <text x="400" y="325" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? 'ແນວຕົ້ນໄມ້ປ້ອງກັນ / ກຳແພງກັນແຫຼມ' : 'Ntoo Thaiv Hniav Txiab'}</text>

        <!-- Driveway Entering Safely from Side -->
        <path d="M 310 360 C 330 320 370 290 392 175" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,3"/>
        <text x="350" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- Road Intersections Crossing Outside Apex -->
        <line x1="220" y1="390" x2="400" y2="355" stroke="#94A3B8" stroke-width="12"/>
        <line x1="580" y1="390" x2="400" y2="355" stroke="#94A3B8" stroke-width="12"/>
        
        <!-- Scissors Sha Attack Vector Badge -->
        <g transform="translate(355, 362)">
          <rect x="0" y="0" width="90" height="20" rx="3" fill="#DC2626"/>
          <text x="45" y="13" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${isLao ? '⚠️ ຈຸດຕັດຄົມມີດ' : '⚠️ Hniav Txiab Tua'}</text>
        </g>
      `;
    }
  },

  // 8. LP-0008: Inverted Triangle Plot
  {
    id: 'LP-0008',
    score: 22,
    isGood: false,
    nameLao: 'ຕອນດິນສາມຫຼ່ຽມຫົວສ້ຽມປີ້ນກັບ (Dao San Jiao Tu)',
    nameHmong: 'Dao San Jiao Tu (Thaj Av Peb Fab Ntxeev - Inverted Triangle)',
    elementLao: 'ທາດໄຟແຫຼມ Reverse Fire / ທາດໄຟ',
    elementHmong: 'Zog Hluav Taws Reverse Fire / ທາດໄຟ',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມຫົວສ້ຽມປີ້ນກັບ ຫຼັງແຫຼມຄືຫອກແທງ ໄຮ້ບາຣະມີ ຕ້ອງສ້າງກຳແພງຕັດມຸມຫຼັງ.',
    summaryHmong: 'Tswv Yim: Thaj av peb fab ntxeev, tom qab ntse zoo li rab hmuv, tsis muaj chaw nstais, yuav tsum kho.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າຖານກວ້າງ ຝັ່ງມັງກອນຂຽວ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Pem dav sab Zaj Ntsuab',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ໄຟແຫຼມ (Fire)',
      l2: '• ✗ ຂັດແຍ້ງ: ທາດດິນ & ທາດໄມ້',
      l3: '  (ກວ້າ 2 (ທາດດິນ), 8 (ທາດດິນ), 3 (ທາດໄມ້), 4 (ທາດໄມ້))',
      l4: '• ຖືກແທງຂ້າງຫຼັງ, ຂາດຜູ້ອຸປະຖຳ',
      l5: '• ບໍ່ເໝາະສຳລັບຢູ່ອາໄສຖ້າບໍ່ແກ້',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ໄຮ້ບາຣະມີ, ຖືກຫັກຫຼັງ, ເຈັບຫຼັງ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Hluav Taws Ntse',
      l2: '• ✗ Tsis haum: Neeg Zog Av & Ntoo',
      l3: '  (Gua 2, 8, 3, 4) raug nstab qaum',
      l4: '• Tsis muaj neeg pab txhawb zog',
      l5: '• Tsis haum rau tsev neeg nyob',
      sub1: 'Tej Kev Txom Nyem (Impact)',
      sub2: 'Raug ntxeev siab, mob nraub qaum'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງກາງຕອນດິນຂ້ອນໜ້າ',
      l2: '• ຫ້າມຕັ້ງເຮືອນໃນມຸມສ້ຽມຫຼັງ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ດ້ານໜ້າກວ້າງ',
      l4: '• ທິດພິງ (坐): ພິງກຳແພງຕັດມຸມຫຼັງ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບກາງເຮືອນ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv plawv ze pem dav',
      l2: '• Txwv tsis tso ze kaum ntse qaum',
      l3: '• Ntsia (Xiang): Ntsia pem dav',
      l4: '• Zaum (Zuo): Zaum phab ntsa kho',
      bed: 'Taub Hau Pw: Phab ntsa plawv tsev'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ກຳແພງຫີນ 2.2m ຕັດມຸມສ້ຽມຫຼັງ',
      l2: '2. ປູກຕົ້ນສົນ 7 ຕົ້ນສ້າງພູເຂົາພິງ',
      l3: '3. ຕັ້ງສີລາໄທຊານທີ່ມຸມແຫຼມຫຼັງ',
      l4: '4. ປັບມຸມຫຼັງເປັນສວນດອກໄມ້',
      t1: '• ຫ້າມສ້າງຫ້ອງນອນໃນມຸມສ້ຽມຫຼັງ',
      t2: '• ຫ້າມຂຸດໜອງນ້ຳຫຼັງເຮືອນ',
      t3: '• ຫ້າມເປີດປະຕູຫຼັງທະລຸ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Phab ntsa 2.2m txiav kaum qaum',
      l2: '2. Cog ntoo thuv 7 tsob ua roob',
      l3: '3. Pob zeb Tai Shan ncov qaum',
      l4: '4. Ua vaj paj ntsuab tom qab',
      t1: '• Txwv tsis tso chav pw kaum qaum',
      t2: '• Txwv tsis khawb pas dej tom qab',
      t3: '• Txwv tsis qhib qhov rooj tom qab'
    },

    renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງນ້ຳໜ້າເຮືອນ' : '✓ Pas Dej Pem';
      const wallPill = isLao ? '🛡️ ກຳແພງຕັດມຸມຫຼັງ' : '🛡️ Phab Ntsa Txiav Kaum';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>

        <!-- Triangle Plot Perimeter Polygon (Apex in Rear Y=85, Wide Base at Front Y=355) -->
        <polygon points="400,85 560,355 240,355" fill="#FEF2F2" stroke="#DC2626" stroke-width="3"/>
        
        <!-- Rear & Side Perimeter Fences -->
        <line x1="400" y1="85" x2="240" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="400" y1="85" x2="560" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Main House Located Forward in Wide Middle Section (Architectural Layout) -->
        <polygon points="330,115 400,93 470,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="115" width="120" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="115" x2="388" y2="167" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Bedroom -->
        <rect x="348" y="121" width="32" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="121" width="32" height="5.5" fill="#0284C7"/>
        <text x="364" y="135" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="155" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="139" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="155" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="416" y="167" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="183" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge (X=470..510) -->
        <g transform="translate(470, 115)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="305" y="205" width="190" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="234" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="247" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 261 A 16 8 0 0 0 472 261 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="456" y="258" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- ARCHITECTURAL FRONT BASE FENCE WITH GATE OPENING ON DRAGON SIDE -->
        <line x1="240" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="345" y1="355" x2="560" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 310 350 285 385 245 C 405 215 424 195 424 172" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="90" y1="9" x2="108" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="108" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO ACUTE REAR APEX) -->
        <g transform="translate(435, 90)">
          <rect x="0" y="0" width="88" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="44" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="0" y1="9" x2="-25" y2="5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-25" cy="5" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  }
];
