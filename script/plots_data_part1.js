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
    elementLao: 'ທາດດິນ Earth / 土',
    elementHmong: 'Zog Av Earth / 土',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສີ່ຫຼ່ຽມຈະຕຸລັດເປັນທາດດິນ (土) ມຸມ 90° ສົມບູນ ພະລັງງານໝູນວຽນສົມດຸນ ເປັນມຸງຄຸນສູງສຸດ.',
    summaryHmong: 'Tswv Yim: Thaj av plaub fab sib npaug yog zog Av (土) 4 ces kaum 90° huab cua ncig sib npaug zoo tshaj plaws.',
    
    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຕັ້ງຝັ່ງມັງກອນຂຽວ (ຊ້າຍ) ຫ່າງມຸມ >3m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດດິນ (土)',
      l2: '• ✓ ຖືກກັບ: ທາດດິນ & ທາດທອງ',
      l3: '  (ກວ້າ 2 坤, 8 艮, 6 乾, 7 兑)',
      l4: '• ✗ ບໍ່ຂັດກັບໃຜ (ດິນມຸງຄຸນສູງ)',
      l5: '• ຄົນທາດນ້ຳ (ກວ້າ 1) ຄວນມີນ້ຳພຸເສີມ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ດິນເກີດທອງ: ຮັ່ງມີ, ໝັ້ນຄົງ, ບາຣະມີ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Av (Earth)',
      l2: '• ✓ Haum: Neeg Zog Av & Kub',
      l3: '  (Gua 2 坤, 8 艮, 6 乾, 7 兑)',
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
        <polygon points="330,115 400,90 470,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="115" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="115" x2="388" y2="180" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="123" width="32" height="24" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="123" width="32" height="6" fill="#0284C7"/>
        <text x="364" y="139" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="158" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="416" y="176" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="188" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Axis Badge (X=470..510) -->
        <g transform="translate(470, 120)">
          <rect x="0" y="0" width="40" height="55" rx="4" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="20" y="14" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="20" y1="18" x2="20" y2="38" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="2,2"/>
          <polygon points="20,40 17,33 23,33" fill="#0284C7"/>
          <text x="20" y="50" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="295" y="201" width="210" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="215" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="228" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="240" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 445 258 A 18 10 0 0 0 481 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="463" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

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
        <path d="M 327 385 L 327 345 C 327 310 350 280 380 260 C 405 240 424 215 424 188" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="6,4"/>
        <text x="340" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(-30 340 280)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

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
    elementLao: 'ທາດໄມ້ Wood / 木',
    elementHmong: 'Zog Ntoo Wood / 木',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສີ່ຫຼ່ຽມຜືນຜ້າເປັນທາດໄມ້ (木) ຮັກສາພະລັງງານໄດ້ເລິກ ເສີມການສຶກສາ ແລະ ທຸລະກິດຍາວນານ.',
    summaryHmong: 'Tswv Yim: Thaj av plaub fab ntev yog zog Ntoo (木) khaws zog tob txhawb kev kawm ntawv & lag luam ntev.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າແຄບ ຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດໄມ້ (木)',
      l2: '• ✓ ຖືກກັບ: ທາດໄມ້ & ທາດໄຟ',
      l3: '  (ກວ້າ 3 震, 4 巽, 9 离)',
      l4: '• ✗ ຄົນທາດດິນ (ກວ້າ 2 坤, 8 艮)',
      l5: '• ແກ້ໄຂດ້ວຍສີຄຣີມ/ໂຄມໄຟສີສົ້ມ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ໄມ້ເກີດໄຟ: ປັນຍາ, ຊື່ສຽງ, ການສຶກສາ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Ntoo (Wood)',
      l2: '• ✓ Haum: Neeg Zog Ntoo & Hluav',
      l3: '  (Gua 3 震, 4 巽, 9 离)',
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

        <!-- Main House in Rear 1/3 (Architectural Layout with Bedroom & Living Hall) -->
        <polygon points="335,105 400,85 465,105" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="345" y="105" width="110" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="105" x2="388" y2="165" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="352" y="112" width="30" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="352" y="112" width="30" height="5.5" fill="#0284C7"/>
        <text x="367" y="126" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="367" y="148" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="422" y="128" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="422" y="144" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="414" y="161" width="15" height="5" fill="#1E293B"/>
        <text x="422" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge (X=462..498) -->
        <g transform="translate(462, 108)">
          <rect x="0" y="0" width="36" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="18" y1="16" x2="18" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,36 15,30 21,30" fill="#0284C7"/>
          <text x="18" y="45" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="300" y="192" width="200" height="66" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="206" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="219" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 445 248 A 18 10 0 0 0 481 248 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="463" y="245" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- Dragon & Tiger Garden Trees (Shifted away from badge) -->
        <circle cx="308" cy="120" r="6" fill="#16A34A"/>
        <circle cx="308" cy="180" r="6" fill="#16A34A"/>
        <circle cx="308" cy="240" r="6" fill="#16A34A"/>
        <circle cx="500" cy="120" r="5" fill="#CA8A04"/>
        <circle cx="500" cy="180" r="5" fill="#CA8A04"/>
        <circle cx="500" cy="240" r="5" fill="#CA8A04"/>

        <!-- ARCHITECTURAL FRONT FENCE & GATE ON FENCE -->
        <!-- Left Fence Segment: (290, 355) to (315, 355) -->
        <line x1="290" y1="355" x2="315" y2="355" stroke="#334155" stroke-width="3.5"/>
        <!-- Right Fence Segment: (355, 355) to (510, 355) -->
        <line x1="355" y1="355" x2="510" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON THE FENCE LINE -->
        <rect x="311" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="351" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="315" y1="355" x2="325" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="355" y1="355" x2="345" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 335 395 L 335 355 C 335 300 355 250 385 220" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="340" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(-25 340 280)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(205, 350)">
          <rect x="0" y="0" width="88" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="44" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Opening -->
          <line x1="88" y1="9" x2="108" y2="-5" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="108" cy="-5" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO TIGER CORNER ON FENCE) -->
        <g transform="translate(425, 350)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-5" r="2" fill="#DC2626"/>
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
    elementLao: 'ທາດທອງ/ດິນ Metal/Earth / 金土',
    elementHmong: 'Zog Kub/Av Metal/Earth / 金土',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຖົງເງິນຖົງຄຳ ໜ້າແຄບຫຼັງກວ້າງໃຫຍ່ ກັກເກັບຊັບສົມບັດ ມະຫາເສດຖີອັນດັບ 1.',
    summaryHmong: 'Tswv Yim: Thaj av hnab nyiaj pem nqaim tom qab dav loj, nyiaj nkag yooj yim khaws cia zoo tshaj plaws.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ປາກຄໍຖົງແຄບດ້ານໜ້າ ພໍດີ 4-5m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
      l3: '  ດີເລີດ: ກວ້າ 6 乾, 7 兑, 8 艮, 2 坤',
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
        <polygon points="330,115 400,90 470,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="115" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="115" x2="388" y2="180" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="123" width="32" height="24" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="123" width="32" height="6" fill="#0284C7"/>
        <text x="364" y="139" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="158" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="416" y="176" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="188" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge -->
        <g transform="translate(470, 120)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="295" y="201" width="210" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="215" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="228" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="240" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 445 258 A 18 10 0 0 0 481 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="463" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- ARCHITECTURAL GATE AT BOTTLE NECK ENTRANCE (Y=355) -->
        <line x1="360" y1="355" x2="380" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="420" y1="355" x2="440" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON BOTTLE NECK -->
        <rect x="376" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="416" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward to Courtyard) -->
        <line x1="380" y1="355" x2="390" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="420" y1="355" x2="410" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 400 395 L 400 355 C 400 300 390 260 410 220" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="340" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(-25 340 280)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(265, 350)">
          <rect x="0" y="0" width="95" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="47" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູປາກຖົງຮັບຊັບ' : '✓ Rooj Vag Hnab'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="95" y1="9" x2="111" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="111" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO REAR BASE WALL) -->
        <g transform="translate(440, 72)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="18" x2="41" y2="24" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="24" r="2" fill="#DC2626"/>
        </g>

        <!-- Decorative Garden Trees -->
        <circle cx="310" cy="115" r="7" fill="#16A34A"/>
        <circle cx="490" cy="115" r="7" fill="#16A34A"/>
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
    elementLao: 'ທາດນ້ຳ/ທອງ Water/Metal / 水金',
    elementHmong: 'Zog Dej/Kub Water/Metal / 水金',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບນ້ຳເຕົ້າ 2 ຫ້ອງໂອບອຸ້ມ ກັ່ນຕອງພະລັງງານຊີວິດ ອາຍຸຍືນຍາວ ປິ່ນປົວໂລກາ.',
    summaryHmong: 'Tswv Yim: Thaj av hu lu 2 chav voj kheej, lim huab cua kom huv, noj qab nyob zoo ntev xyoo.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ປາກນ້ຳເຕົ້າດ້ານໜ້າ ຝັ່ງມັງກອນຂຽວ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
      l3: '  (ກວ້າ 1 坎, 6 乾, 7 兑)',
      l4: '• ✗ ຄົນທາດໄຟຮ້ອນ (ກວ້າ 9 离)',
      l5: '• ແກ້ໄຂດ້ວຍດອກໄມ້ສີສົ້ມ/ແດງ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ທອງເກີດນ້ຳ: ສຸຂະພາບ, ອາຍຸຍືນ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Dej & Kub',
      l2: '• ✓ Haum: Neeg laus, kws kho mob',
      l3: '  (Gua 1 坎, 6 乾, 7 兑)',
      l4: '• ✗ Neeg Zog Hluav (Gua 9 离)',
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
        <text x="245" y="160" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 245 160)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="555" y="160" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 555 160)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Gourd Shape Ground -->
        <path d="M 360 355 C 330 355 330 270 370 240 C 330 230 270 190 270 145 C 270 95 330 90 400 90 C 470 90 530 95 530 145 C 530 190 470 230 430 240 C 470 270 470 355 440 355 Z"
              fill="#DCFCE7"/>
        <path d="M 365 350 C 335 350 335 272 372 243 C 332 232 276 192 276 148 C 276 100 334 95 400 95 C 466 95 524 100 524 148 C 524 192 468 232 428 243 C 465 272 465 350 435 350 Z"
              fill="none" stroke="#22C55E" stroke-width="1.2" stroke-dasharray="5,4"/>

        <!-- Rear & Side Perimeter Fence Line -->
        <path d="M 370 240 C 330 230 270 190 270 145 C 270 95 330 90 400 90 C 470 90 530 95 530 145 C 530 190 470 230 430 240"
              fill="none" stroke="#15803D" stroke-width="4"/>

        <!-- House in Rear Belly (Architectural Layout) -->
        <polygon points="330,110 400,88 470,110" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="110" width="120" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="110" x2="388" y2="170" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="116" width="30" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="116" width="30" height="5.5" fill="#0284C7"/>
        <text x="363" y="130" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="363" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="133" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="149" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="416" y="166" width="15" height="5" fill="#1E293B"/>
        <text x="424" y="177" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge -->
        <g transform="translate(465, 110)">
          <rect x="0" y="0" width="36" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="18" y1="16" x2="18" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,36 15,30 21,30" fill="#0284C7"/>
          <text x="18" y="45" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="310" y="246" width="180" height="58" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="260" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="273" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="285" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 445 292 A 18 10 0 0 0 481 292 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="463" y="289" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- Front Boundary Fence with Gate Opening at Mouth (Y=355) -->
        <!-- Front left fence segment: (355, 355) to (378, 355) -->
        <line x1="355" y1="355" x2="378" y2="355" stroke="#334155" stroke-width="3.5"/>
        <!-- Front right fence segment: (422, 355) to (445, 355) -->
        <line x1="422" y1="355" x2="445" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="374" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="418" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="378" y1="355" x2="388" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="422" y1="355" x2="412" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 400 395 L 400 355 C 400 310 395 250 395 175" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="340" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(-25 340 280)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(265, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="108" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="108" cy="0" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO REAR FENCE) -->
        <g transform="translate(435, 68)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມເຈາະປະຕູຫຼັງ' : '✗ Txwv Rooj Tom Qab'}</text>
          <line x1="45" y1="18" x2="45" y2="22" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="45" cy="22" r="2" fill="#DC2626"/>
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
    elementLao: 'ທາດດິນ/ທອງ Earth/Metal / 坤乾',
    elementHmong: 'Zog Av/Kub Earth/Metal / 坤乾',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຄາງໝູໜ້າແຄບຫຼັງກວ້າງ ກະແສລົມບີບເຂົ້າແລ້ວຜາຍອອກພາຍໃນ ສະສົມຊັບສິນ.',
    summaryHmong: 'Tswv Yim: Thaj av pem nqaim tom qab dav, huab cua nkag los nthuav dav khaws nyiaj txiag.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າແຄບ ຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
      l3: '  (ກວ້າ 8 艮, 2 坤, 6 乾, 7 兑)',
      l4: '• ✗ ບໍ່ມີຂໍ້ຂັດແຍ້ງຮ້າຍແຮງ',
      l5: '• ທຸກກວ້າຢູ່ແລ້ວໝັ້ນຄົງດີ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ດິນເກີດທອງ: ຍິ່ງຢູ່ຍິ່ງຮັ່ງມີ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Av & Kub',
      l2: '• ✓ Haum: Neeg pib tsim lag luam',
      l3: '  (Gua 8 艮, 2 坤, 6 乾, 7 兑)',
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
        <text x="260" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-70 260 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="540" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(70 540 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Plot Ground Fill: (320, 355) front-left, (480, 355) front-right, (560, 95) rear-right, (240, 95) rear-left -->
        <polygon points="240,95 560,95 480,355 320,355" fill="#DCFCE7"/>
        <polygon points="246,99 554,99 476,351 324,351" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="6,4"/>

        <!-- Rear & Side Perimeter Fences -->
        <line x1="240" y1="95" x2="560" y2="95" stroke="#15803D" stroke-width="4.5"/>
        <line x1="240" y1="95" x2="320" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="560" y1="95" x2="480" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Main House in Broad Rear (Architectural Layout) -->
        <polygon points="330,115 400,90 470,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="115" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="115" x2="388" y2="180" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="123" width="32" height="24" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="123" width="32" height="6" fill="#0284C7"/>
        <text x="364" y="139" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="158" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="416" y="176" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="188" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge -->
        <g transform="translate(470, 120)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="295" y="201" width="210" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="215" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="228" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="240" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 445 258 A 18 10 0 0 0 481 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="463" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- ARCHITECTURAL FRONT FENCE WITH GATE OPENING AT DRAGON SIDE -->
        <!-- Left fence: (320, 355) to (345, 355) -->
        <line x1="320" y1="355" x2="345" y2="355" stroke="#334155" stroke-width="3.5"/>
        <!-- Right fence: (390, 355) to (480, 355) -->
        <line x1="390" y1="355" x2="480" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="386" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="345" y1="355" x2="355" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="390" y1="355" x2="380" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 367 395 L 367 355 C 367 300 375 260 385 230" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="340" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(-25 340 280)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(230, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="111" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="111" cy="0" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO TIGER CORNER) -->
        <g transform="translate(425, 350)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-5" r="2" fill="#DC2626"/>
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
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
      l2: '• ✗ ຂັດແຍ້ງ: ຫົວໜ້າຄອບຄົວ (ກວ້າ 6 乾)',
      l3: '  ແລະ ແມ່ (ກວ້າ 2 坤) ໄຮ້ທີ່ເພິ່ງ',
      l4: '• ບໍ່ເໝາະສຳລັບຢູ່ອາໄສຖ້າບໍ່ແກ້',
      l5: '• ເໝາະສະເພາະຮ້ານຄ້າໜ້າກວ້າງຊົ່ວຄາວ',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ຊັບສິນຮົ່ວໄຫຼ, ຄວາມຄຽດ, ໄຮ້ທີ່ເພິ່ງ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Hluav Taws Sha',
      l2: '• ✗ Tsis haum: Txiv tsev (Gua 6 乾)',
      l3: '  thiab Niam tsev (Gua 2 坤)',
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
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="65" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="240" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-65 240 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="560" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(65 560 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Plot Ground Fill: (240, 355) front-left, (560, 355) front-right, (480, 95) rear-right, (320, 95) rear-left -->
        <polygon points="320,95 480,95 560,355 240,355" fill="#FEE2E2"/>
        <polygon points="324,99 476,99 554,351 246,351" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="6,4"/>

        <!-- Rear & Side Perimeter Fences -->
        <line x1="320" y1="95" x2="480" y2="95" stroke="#15803D" stroke-width="6"/>
        <line x1="320" y1="95" x2="240" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="480" y1="95" x2="560" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Rear Defensive Wall & Trees -->
        <rect x="330" y="78" width="140" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="89" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(wallPill)}</text>
        <circle cx="340" cy="110" r="6" fill="#14532D"/>
        <circle cx="370" cy="108" r="7" fill="#166534"/>
        <circle cx="400" cy="106" r="7.5" fill="#14532D"/>
        <circle cx="430" cy="108" r="7" fill="#166534"/>
        <circle cx="460" cy="110" r="6" fill="#14532D"/>

        <!-- Main House in Center (Architectural Layout) -->
        <polygon points="330,145 400,120 470,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="145" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="145" x2="388" y2="210" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="153" width="32" height="24" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="153" width="32" height="6" fill="#0284C7"/>
        <text x="364" y="169" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="192" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="188" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="416" y="206" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="218" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Axis Badge -->
        <g transform="translate(470, 150)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="290" y="211" width="220" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="225" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="238" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="250" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 445 268 A 18 10 0 0 0 481 268 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="463" y="265" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- ARCHITECTURAL FRONT FENCE WITH CONTROLLED GATE (DRAGON SIDE) -->
        <!-- Front left fence: (240, 355) to (295, 355) -->
        <line x1="240" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <!-- Front right fence: (340, 355) to (560, 355) -->
        <line x1="340" y1="355" x2="560" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="336" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="340" y1="355" x2="330" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 317 395 L 317 355 C 317 320 345 285 378 265 C 405 245 425 220 425 188" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="335" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(-30 335 280)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="108" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="108" cy="0" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO REAR NARROW FENCE) -->
        <g transform="translate(420, 68)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມເຈາະປະຕູຫຼັງ' : '✗ Txwv Rooj Tom Qab'}</text>
          <line x1="45" y1="18" x2="45" y2="24" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="45" cy="24" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  },

  // 7. LP-0007: Scissors Sha
  {
    id: 'LP-0007',
    score: 18,
    isGood: false,
    nameLao: 'ຕອນດິນສາມຫຼ່ຽມ ຄົມມີດຕັດ ທາງສາມແພ່ງ (Scissors Sha / 剪刀煞)',
    nameHmong: 'San Jiao Tu: Dui Jiao Chong (Thaj Av Peb Fab Ntse Scissors Sha)',
    elementLao: 'ທາດໄຟຮ້ອນ Sharp Fire / 火煞',
    elementHmong: 'Zog Hluav Taws Sharp Fire / 火煞',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມເປັນທາດໄຟ (火) ຖືກທາງຕັດຄືມີດຕັດ ຕ້ອງສ້າງກຳແພງຕັດມຸມປ່ຽນຮູບຊົງໃຫ້ເປັນຄາງໝູ/ສີ່ຫຼ່ຽມ.',
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
    elementLao: 'ທາດໄຟ/ລົມ Fire/Wind Sha / 火',
    elementHmong: 'Zog Hluav/Cua Fire/Wind Sha / 火',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມຕິດຖະໜົນດ້ານຊ້າຍ (ຝັ່ງມັງກອນ) ເບື້ອງດຽວ, ດ້ານຂວາຕິດເພື່ອນບ້ານ. ມຸມແຫຼມຍັງເປັນທາດໄຟ, ຕ້ອງຕັດມຸມສ້າງກຳແພງແກ້ໄຂ.',
    summaryHmong: 'Tswv Yim: Thaj av peb fab muaj kev sab laug (Dragon), sab xis yog vaj tse luag lwm tus. Kaum ntse yog hluav taws, yuav tsum txiav kaum tsim phab ntsa kho.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຕິດຖະໜົນຊ້າຍ ຖອຍຫ່າງມຸມແຫຼມ >15m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
        <!-- Left Road Polygon (Width=40px, strictly within X=195..360) -->
        <polygon points="360,48 400,48 255,410 205,410" fill="url(#roadGrad)"/>
        <line x1="380" y1="48" x2="230" y2="410" stroke="#FDE047" stroke-width="2" stroke-dasharray="10,6"/>
        <line x1="205" y1="410" x2="360" y2="48" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>
        <rect x="205" y="155" width="105" height="18" rx="3" fill="#0F172A" fill-opacity="0.92" stroke="#F59E0B" stroke-width="1"/>
        <text x="257" y="168" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FDE047" text-anchor="middle">${escapeXml(roadLeft)}</text>

        <!-- Right Neighbor Boundary -->
        <line x1="400" y1="95" x2="545" y2="410" stroke="#64748B" stroke-width="2.5" stroke-dasharray="8,5"/>
        <text x="500" y="240" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(65 500 240)">${escapeXml(neighborRight)}</text>

        <!-- Triangular Plot Ground -->
        <polygon points="400,95 255,410 545,410" fill="#FEF2F2"/>
        <polygon points="400,102 262,406 538,406" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="4,4"/>

        <!-- PHYSICAL PERIMETER FENCES WITH GATE BREAK ON LEFT ROAD -->
        <!-- Base Fence -->
        <line x1="255" y1="410" x2="545" y2="410" stroke="#DC2626" stroke-width="3"/>
        <!-- Right Neighbor Fence Line -->
        <line x1="545" y1="410" x2="400" y2="95" stroke="#64748B" stroke-width="3"/>
        <!-- Left Road Upper Fence Segment: Apex (400,95) down to Upper Gate Pillar (292,330) -->
        <line x1="400" y1="95" x2="292" y2="330" stroke="#DC2626" stroke-width="3"/>
        <!-- Left Road Lower Fence Segment: Lower Gate Pillar (276,365) down to Base (255,410) -->
        <line x1="276" y1="365" x2="255" y2="410" stroke="#DC2626" stroke-width="3"/>

        <!-- GATE POSTS ON LEFT FENCE LINE -->
        <rect x="288" y="326" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="272" y="361" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="292" y1="330" x2="306" y2="338" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="276" y1="365" x2="290" y2="357" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Apex Hazard Zone & Tai Shan Stone -->
        <polygon points="400,95 375,145 425,145" fill="#FEE2E2"/>
        <rect x="375" y="96" width="50" height="13" rx="2" fill="#334155" stroke="#94A3B8" stroke-width="0.8"/>
        <text x="400" y="106" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>

        <!-- Truncation Wall (Remedy) at Y=145 -->
        <line x1="370" y1="145" x2="430" y2="145" stroke="#15803D" stroke-width="6"/>
        <rect x="330" y="151" width="140" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">[+] ${escapeXml(wallPill)}</text>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <!-- Wide open sunlit manicured green lawn inside plot boundaries -->
        <polygon points="368,172 432,172 452,228 348,228" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="183" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="195" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '✓ ບໍ່ມີບໍ່ນ້ຳ (ດີເລີດ): ລານຫຍ້າຂຽວໂລ່ງຮັບແສງ &amp; ລົມ' : '✓ Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        
        <!-- COMPACT ORNAMENTAL FOUNTAIN ON DRAGON FLANK (IF HOMEOWNER ADDS WATER) -->
        <!-- Placed safely on Green Dragon garden flank (cx=360, cy=208), completely clear of driveway & porch! -->
        <!-- Size: Compact proportional 10-15% of courtyard (Diameter 18px = ~2.2m, 1/6 of house facade) -->
        <circle cx="360" cy="208" r="9" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.2"/>
        <ellipse cx="360" cy="208" rx="6" ry="3" fill="none" stroke="#38BDF8" stroke-width="0.8"/>
        <circle cx="360" cy="208" r="1.8" fill="#0284C7"/>
        <text x="360" y="194" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.8" fill="#0369A1" text-anchor="middle">${isLao ? 'ອ່າງນ້ຳພຸ (ຖ້າມີ)' : 'Pas Dej (Yog Muaj)'}</text>
        <text x="360" y="223" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.2" fill="#0284C7" text-anchor="middle">${isLao ? '[ຝັ່ງມັງກອນ 10-15%]' : '[Sab Zaj 10-15%]'}</text>

        <!-- SAFE RESIDENTIAL QUADRANT: Main House (x=330, y=236, w=140, h=65) -->
        <polygon points="325,236 400,214 475,236" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="330" y="236" width="140" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition inside House -->
        <line x1="392" y1="236" x2="392" y2="301" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>
        
        <!-- Living Hall on Left (towards entrance) -->
        <text x="361" y="264" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="361" y="282" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="353" y="231" width="16" height="5" fill="#1E293B"/>

        <!-- Master Bedroom on Quiet Right Flank (against neighbor boundary) -->
        <rect x="402" y="268" width="34" height="26" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="402" y="287" width="34" height="7" fill="#0284C7"/>
        <text x="419" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="419" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນໃຫຍ່' : 'Chaw Pw'}</text>

        <!-- Compass Sitting & Facing Axis Badge (ທິດໜ້າ ⬆ / ທິດພິງ ⬇) -->
        <g transform="translate(480, 240)">
          <rect x="0" y="0" width="56" height="56" rx="4" fill="#FFFFFF" fill-opacity="0.96" stroke="#0284C7" stroke-width="1.2"/>
          <text x="28" y="14" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ (向)' : 'Ntsia (向)'}</text>
          <line x1="28" y1="18" x2="28" y2="34" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="2,2"/>
          <polygon points="28,16 25,22 31,22" fill="#0284C7"/>
          <polygon points="28,38 25,32 31,32" fill="#0284C7"/>
          <text x="28" y="49" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ (坐)' : 'Zaum (坐)'}</text>
        </g>

        <!-- DRIVEWAY PASSING THROUGH GATE TO COURTYARD -->
        <path d="M 235 348 L 284 348 C 305 348 316 295 330 260 C 338 238 348 232 360 232" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="295" y="336" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#B45309" text-anchor="middle" transform="rotate(-15 295 336)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(180, 339)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="82" y1="9" x2="94" y2="9" stroke="#15803D" stroke-width="2"/>
          <circle cx="94" cy="9" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO ACUTE FENCE APEX) -->
        <g transform="translate(355, 76)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູຮົ້ວ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="45" y1="18" x2="45" y2="24" stroke="#DC2626" stroke-width="2"/>
          <circle cx="45" cy="24" r="2" fill="#DC2626"/>
        </g>

        <!-- Rear Base Xuan Wu Buffer -->
        <line x1="255" y1="408" x2="545" y2="408" stroke="#15803D" stroke-width="5"/>
        <circle cx="295" cy="396" r="8" fill="#14532D"/>
        <circle cx="350" cy="394" r="9" fill="#166534"/>
        <circle cx="400" cy="392" r="10" fill="#14532D"/>
        <circle cx="450" cy="394" r="9" fill="#166534"/>
        <circle cx="505" cy="396" r="8" fill="#14532D"/>
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
    elementLao: 'ທາດໄຟ/ເສືອຂາວ Fire/Tiger Sha / 火',
    elementHmong: 'Zog Hluav/Tsov Fire/Tiger Sha / 火',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມຕິດຖະໜົນດ້ານຂວາ (ຝັ່ງເສືອຂາວ) ເບື້ອງດຽວ, ດ້ານຊ້າຍຕິດເພື່ອນບ້ານ. ເສືອຂາວເຄື່ອນໄຫວແຮງ ຕ້ອງຕັດມຸມແຫຼມ ແລະ ປູກແນວໄມ້ບັງ.',
    summaryHmong: 'Tswv Yim: Thaj av peb fab muaj kev sab xis (White Tiger), sab laug yog tsev luag. Tsov Dawb txav zog heev, yuav tsum txiav kaum ntse thiab cog ntoo thaiv.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຕິດຖະໜົນຂວາ ຖອຍຫ່າງມຸມແຫຼມ >18m',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
        <!-- Right Road Polygon (Width=40px, strictly within X=440..605) -->
        <polygon points="400,48 440,48 595,410 545,410" fill="url(#roadGrad)"/>
        <line x1="420" y1="48" x2="570" y2="410" stroke="#FDE047" stroke-width="2" stroke-dasharray="10,6"/>
        <line x1="595" y1="410" x2="440" y2="48" stroke="#94A3B8" stroke-width="1.5" stroke-dasharray="4,4"/>
        <rect x="490" y="155" width="105" height="18" rx="3" fill="#0F172A" fill-opacity="0.92" stroke="#F59E0B" stroke-width="1"/>
        <text x="542" y="168" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FDE047" text-anchor="middle">${escapeXml(roadRight)}</text>

        <!-- Left Neighbor Boundary -->
        <line x1="400" y1="95" x2="255" y2="410" stroke="#64748B" stroke-width="2.5" stroke-dasharray="8,5"/>
        <text x="300" y="240" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-65 300 240)">${escapeXml(neighborLeft)}</text>

        <!-- Triangular Plot Ground -->
        <polygon points="400,95 255,410 545,410" fill="#FEF2F2"/>
        <polygon points="400,102 262,406 538,406" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="4,4"/>

        <!-- PHYSICAL PERIMETER FENCES WITH GATE BREAK ON RIGHT ROAD -->
        <!-- Base Fence -->
        <line x1="255" y1="410" x2="545" y2="410" stroke="#DC2626" stroke-width="3"/>
        <!-- Left Neighbor Fence Line -->
        <line x1="255" y1="410" x2="400" y2="95" stroke="#64748B" stroke-width="3"/>
        <!-- Right Road Upper Fence Segment: Apex (400,95) down to Upper Gate Pillar (508,330) -->
        <line x1="400" y1="95" x2="508" y2="330" stroke="#DC2626" stroke-width="3"/>
        <!-- Right Road Lower Fence Segment: Lower Gate Pillar (524,365) down to Base (545,410) -->
        <line x1="524" y1="365" x2="545" y2="410" stroke="#DC2626" stroke-width="3"/>

        <!-- GATE POSTS ON RIGHT FENCE LINE -->
        <rect x="504" y="326" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="520" y="361" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="508" y1="330" x2="494" y2="338" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="524" y1="365" x2="510" y2="357" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Apex Hazard Zone & Tai Shan Stone -->
        <polygon points="400,95 375,145 425,145" fill="#FEE2E2"/>
        <rect x="375" y="96" width="50" height="13" rx="2" fill="#334155" stroke="#94A3B8" stroke-width="0.8"/>
        <text x="400" y="106" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>

        <!-- Truncation Wall (Remedy) at Y=145 -->
        <line x1="370" y1="145" x2="430" y2="145" stroke="#15803D" stroke-width="6"/>
        <rect x="330" y="151" width="140" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="162" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">[+] ${escapeXml(wallPill)}</text>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <!-- Wide open sunlit manicured green lawn inside plot boundaries -->
        <polygon points="368,172 432,172 452,228 348,228" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="183" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="195" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '✓ ບໍ່ມີບໍ່ນ້ຳ (ດີເລີດ): ລານຫຍ້າຂຽວໂລ່ງຮັບແສງ &amp; ລົມ' : '✓ Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        
        <!-- COMPACT ORNAMENTAL FOUNTAIN ON DRAGON FLANK (IF HOMEOWNER ADDS WATER) -->
        <!-- Placed safely on Green Dragon garden flank (cx=360, cy=208), completely clear of driveway & porch! -->
        <!-- Size: Compact proportional 10-15% of courtyard (Diameter 18px = ~2.2m, 1/6 of house facade) -->
        <circle cx="360" cy="208" r="9" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.2"/>
        <ellipse cx="360" cy="208" rx="6" ry="3" fill="none" stroke="#38BDF8" stroke-width="0.8"/>
        <circle cx="360" cy="208" r="1.8" fill="#0284C7"/>
        <text x="360" y="194" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="5.8" fill="#0369A1" text-anchor="middle">${isLao ? 'ອ່າງນ້ຳພຸ (ຖ້າມີ)' : 'Pas Dej (Yog Muaj)'}</text>
        <text x="360" y="223" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.2" fill="#0284C7" text-anchor="middle">${isLao ? '[ຝັ່ງມັງກອນ 10-15%]' : '[Sab Zaj 10-15%]'}</text>

        <!-- SAFE RESIDENTIAL QUADRANT: Main House (x=330, y=236, w=140, h=65) -->
        <polygon points="325,236 400,214 475,236" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="330" y="236" width="140" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition inside House -->
        <line x1="378" y1="236" x2="378" y2="301" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>
        
        <!-- Master Bedroom on Quiet Left Flank (against neighbor boundary) -->
        <rect x="338" y="268" width="34" height="26" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="338" y="287" width="34" height="7" fill="#0284C7"/>
        <text x="355" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="355" y="256" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນໃຫຍ່' : 'Chaw Pw'}</text>

        <!-- Living Hall on Right (towards road & entrance) -->
        <text x="424" y="264" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="282" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="416" y="231" width="16" height="5" fill="#1E293B"/>

        <!-- Compass Sitting & Facing Axis Badge (ທິດໜ້າ ⬆ / ທິດພິງ ⬇) -->
        <g transform="translate(480, 240)">
          <rect x="0" y="0" width="56" height="56" rx="4" fill="#FFFFFF" fill-opacity="0.96" stroke="#0284C7" stroke-width="1.2"/>
          <text x="28" y="14" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ (向)' : 'Ntsia (向)'}</text>
          <line x1="28" y1="18" x2="28" y2="34" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="2,2"/>
          <polygon points="28,16 25,22 31,22" fill="#0284C7"/>
          <polygon points="28,38 25,32 31,32" fill="#0284C7"/>
          <text x="28" y="49" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ (坐)' : 'Zaum (坐)'}</text>
        </g>

        <!-- DRIVEWAY PASSING THROUGH GATE TO COURTYARD -->
        <path d="M 565 348 L 516 348 C 495 348 484 295 470 260 C 462 238 450 232 424 232" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="495" y="336" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#B45309" text-anchor="middle" transform="rotate(15 495 336)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO RIGHT CLEAR OF DRIVEWAY) -->
        <g transform="translate(528, 339)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="0" y1="9" x2="-6" y2="9" stroke="#15803D" stroke-width="2"/>
          <circle cx="-6" cy="9" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO ACUTE FENCE APEX) -->
        <g transform="translate(355, 76)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູຮົ້ວ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="45" y1="18" x2="45" y2="24" stroke="#DC2626" stroke-width="2"/>
          <circle cx="45" cy="24" r="2" fill="#DC2626"/>
        </g>

        <!-- Rear Base Xuan Wu Buffer -->
        <line x1="255" y1="408" x2="545" y2="408" stroke="#15803D" stroke-width="5"/>
        <circle cx="295" cy="396" r="8" fill="#14532D"/>
        <circle cx="350" cy="394" r="9" fill="#166534"/>
        <circle cx="400" cy="392" r="10" fill="#14532D"/>
        <circle cx="450" cy="394" r="9" fill="#166534"/>
        <circle cx="505" cy="396" r="8" fill="#14532D"/>
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
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ປ້ອງກັນພະລັງພິສ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Pem kaum ntse thim >8m sab Zaj',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve) txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab (txwv ntxiv kaum ntse)',
      l4: '• Yog Muaj Dej: Ntsaws kaum ntse pov tseg! Khaws pem tsev',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev nkhaus zoo siab (曲则有情) tiv thaiv sha'
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
        <!-- Front Horizontal Road Polygon (Width=420px, Y=375..440) -->
        <rect x="190" y="375" width="420" height="65" fill="url(#roadGrad)"/>
        <line x1="190" y1="407" x2="610" y2="407" stroke="#FDE047" stroke-width="2" stroke-dasharray="14,8"/>
        <line x1="190" y1="375" x2="610" y2="375" stroke="#94A3B8" stroke-width="1.2" stroke-dasharray="6,4"/>
        <rect x="330" y="415" width="140" height="18" rx="3" fill="#0F172A" fill-opacity="0.9" stroke="#F59E0B" stroke-width="1"/>
        <text x="400" y="427" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FDE047" text-anchor="middle">${escapeXml(roadText)}</text>

        <!-- Triangular Plot Ground: Rear Base (240,95) to (560,95), Front Apex (400,375) -->
        <polygon points="400,375 240,95 560,95" fill="#FEF2F2"/>
        <polygon points="400,365 248,102 552,102" fill="none" stroke="#EF4444" stroke-width="1" stroke-dasharray="4,4"/>

        <!-- Rear Base Neighbor Boundary Line (Xuan Wu) -->
        <line x1="240" y1="95" x2="560" y2="95" stroke="#16A34A" stroke-width="4"/>
        <!-- Rear Backing Trees (5 Pine Trees for Mountain Support) -->
        <circle cx="280" cy="85" r="9" fill="#14532D"/>
        <circle cx="340" cy="82" r="10" fill="#15803D"/>
        <circle cx="400" cy="80" r="11" fill="#166534"/>
        <circle cx="460" cy="82" r="10" fill="#15803D"/>
        <circle cx="520" cy="85" r="9" fill="#14532D"/>

        <!-- Physical Side Fences -->
        <line x1="240" y1="95" x2="365" y2="320" stroke="#DC2626" stroke-width="3"/>
        <line x1="560" y1="95" x2="435" y2="320" stroke="#DC2626" stroke-width="3"/>

        <!-- Acute Front Apex Hazard Zone (Y=320 down to 375) -->
        <polygon points="400,375 365,320 435,320" fill="#FEE2E2"/>
        <rect x="340" y="348" width="120" height="15" rx="3" fill="#B91C1C"/>
        <text x="400" y="359" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${escapeXml(hazardText)}</text>

        <!-- Tai Shan Stone at the sharp front apex -->
        <rect x="375" y="362" width="50" height="12" rx="2" fill="#334155" stroke="#94A3B8" stroke-width="0.8"/>
        <text x="400" y="371" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#F8FAFC" text-anchor="middle">TAI SHAN</text>

        <!-- Truncation Wall (Remedy) across Front Apex at Y=320 -->
        <line x1="365" y1="320" x2="435" y2="320" stroke="#15803D" stroke-width="5"/>
        <rect x="330" y="302" width="140" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="313" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">[+] ${escapeXml(wallPill)}</text>

        <!-- Gate Post on Front Left of Cut-Off Wall -->
        <rect x="355" y="316" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="385" y="316" width="8" height="8" rx="2" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <!-- Swinging Gate Doors -->
        <line x1="359" y1="320" x2="368" y2="310" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="389" y1="320" x2="380" y2="310" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- S-CURVE DRIVEWAY FROM FRONT GATE TO HOUSE PORCH (CLEAR & UNOBSTRUCTED) -->
        <path d="M 370 320 C 375 270 395 230 416 186" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="410" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(65 410 255)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <!-- Wide open manicured lawn inside plot boundaries (70-80% of courtyard) -->
        <polygon points="325,192 475,192 432,285 368,285" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="395" y="268" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.2" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງໂລ່ງແຈ້ງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="395" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '✓ ບໍ່ມີບໍ່ນ້ຳ (ດີເລີດ): ລານຫຍ້າຂຽວໂລ່ງຮັບແສງ &amp; ລົມ' : '✓ Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        
        <!-- COMPACT ORNAMENTAL FOUNTAIN ON DRAGON FLANK (IF HOMEOWNER ADDS WATER) -->
        <!-- Placed safely on the Green Dragon garden flank (X=338, Y=230), completely clear of driveway! -->
        <!-- Size: Compact proportional 10-15% of courtyard (Diameter 26px = ~2.6m, 1/5 of house facade) -->
        <circle cx="338" cy="230" r="13" fill="#BAE6FD" stroke="#0284C7" stroke-width="1.2"/>
        <ellipse cx="338" cy="230" rx="8" ry="4" fill="none" stroke="#38BDF8" stroke-width="0.8"/>
        <circle cx="338" cy="230" r="2.2" fill="#0284C7"/>
        <text x="338" y="212" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ອ່າງນ້ຳພຸ (ຖ້າມີ)' : 'Pas Dej (Yog Muaj)'}</text>
        <text x="338" y="249" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ຝັ່ງມັງກອນ 10-15%]' : '[Sab Zaj 10-15%]'}</text>

        <!-- Taboo Note at Acute Apex -->
        <text x="400" y="337" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.2" fill="#DC2626" text-anchor="middle">${isLao ? '🚫 ຖົມໜອງນ້ຳແຫຼມຖິ້ມ (ຫ້າມມີນ້ຳໃນມຸມແຫຼມ)' : '🚫 Ntsaws pas dej kaum ntse pov tseg'}</text>

        <!-- SAFE RESIDENTIAL QUADRANT: Main House in Wide Rear (x=330, y=118, w=140, h=65) -->
        <polygon points="325,118 400,98 475,118" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="330" y="118" width="140" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition inside House -->
        <line x1="380" y1="118" x2="380" y2="183" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>
        
        <!-- Master Bedroom on Quiet Left Flank -->
        <rect x="338" y="126" width="34" height="26" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="338" y="126" width="34" height="7" fill="#0284C7"/>
        <text x="355" y="144" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.8" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="355" y="170" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນໃຫຍ່' : 'Chaw Pw'}</text>

        <!-- Living Hall on Right -->
        <text x="424" y="146" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="164" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="416" y="180" width="16" height="5" fill="#1E293B"/>

        <!-- Compass Orientation Badge (ທິດພິງຫຼັງ ⬆ / ທິດໜ້າບ້ານ ⬇) -->
        <g transform="translate(480, 118)">
          <rect x="0" y="0" width="56" height="56" rx="4" fill="#FFFFFF" fill-opacity="0.96" stroke="#0284C7" stroke-width="1.2"/>
          <text x="28" y="14" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ (坐)' : 'Zaum (坐)'}</text>
          <line x1="28" y1="18" x2="28" y2="34" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="2,2"/>
          <polygon points="28,16 25,22 31,22" fill="#0284C7"/>
          <polygon points="28,38 25,32 31,32" fill="#0284C7"/>
          <text x="28" y="49" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ (向)' : 'Ntsia (向)'}</text>
        </g>

        <!-- [✓] RECOMMENDED GATE BADGE -->
        <g transform="translate(230, 312)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="90" y1="9" x2="125" y2="8" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="125" cy="8" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (AT ACUTE FRONT TIP) -->
        <g transform="translate(440, 362)">
          <rect x="0" y="0" width="92" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="46" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປາຍແຫຼມ' : '✗ Txwv Qhov Ntse'}</text>
          <line x1="0" y1="9" x2="-35" y2="6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-35" cy="6" r="2" fill="#DC2626"/>
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
    elementLao: 'ທາດໄຟແຫຼມ Reverse Fire / 火',
    elementHmong: 'Zog Hluav Taws Reverse Fire / 火',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນສາມຫຼ່ຽມຫົວສ້ຽມປີ້ນກັບ ຫຼັງແຫຼມຄືຫອກແທງ ໄຮ້ບາຣະມີ ຕ້ອງສ້າງກຳແພງຕັດມຸມຫຼັງ.',
    summaryHmong: 'Tswv Yim: Thaj av peb fab ntxeev, tom qab ntse zoo li rab hmuv, tsis muaj chaw nstais, yuav tsum kho.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າຖານກວ້າງ ຝັ່ງມັງກອນຂຽວ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (曲则有情) ຈະເລີນຮຸ່ງເຮືອງ'
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
      l3: '  (ກວ້າ 2 坤, 8 艮, 3 震, 4 巽)',
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
        <text x="240" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-60 240 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="560" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(60 560 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Inverted Triangle Ground Fill: Apex=(400, 95) Rear, Base=(240, 355) to (560, 355) Front -->
        <polygon points="400,95 560,355 240,355" fill="#FEE2E2"/>
        <polygon points="400,103 554,351 246,351" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="6,4"/>

        <!-- Rear Apex Remedy: Granite Truncation Wall at Y=135 -->
        <line x1="360" y1="135" x2="440" y2="135" stroke="#15803D" stroke-width="6"/>
        <rect x="345" y="122" width="110" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="133" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(wallPill)}</text>

        <!-- Tai Shan Stone Tablet at Rear Apex -->
        <rect x="388" y="98" width="24" height="12" rx="2" fill="#334155"/>
        <text x="400" y="107" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">石敢当</text>

        <circle cx="375" cy="115" r="5.5" fill="#14532D"/>
        <circle cx="425" cy="115" r="5.5" fill="#14532D"/>

        <!-- Perimeter Side Fence Lines -->
        <line x1="240" y1="355" x2="400" y2="95" stroke="#DC2626" stroke-width="3"/>
        <line x1="560" y1="355" x2="400" y2="95" stroke="#DC2626" stroke-width="3"/>

        <!-- Main House in Safe Central/Forward Zone (Architectural Layout) -->
        <polygon points="330,175 400,150 470,175" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="175" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="175" x2="388" y2="240" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Wall -->
        <rect x="348" y="183" width="32" height="24" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="183" width="32" height="6" fill="#0284C7"/>
        <text x="364" y="199" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="222" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="202" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="218" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch -->
        <rect x="416" y="236" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="248" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge -->
        <g transform="translate(470, 180)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="300" y="231" width="200" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="245" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / 聚气)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="258" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="270" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 445 288 A 18 10 0 0 0 481 288 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="463" y="285" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- ARCHITECTURAL FRONT BASE FENCE WITH GATE OPENING ON DRAGON SIDE -->
        <!-- Front left fence: (240, 355) to (295, 355) -->
        <line x1="240" y1="355" x2="295" y2="355" stroke="#334155" stroke-width="3.5"/>
        <!-- Front right fence: (345, 355) to (560, 355) -->
        <line x1="345" y1="355" x2="560" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 355 C 320 310 350 290 380 275" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="340" y="280" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle" transform="rotate(-25 340 280)">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
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
