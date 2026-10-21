const fs = require('fs');

const part2Code = `
  // 7. LP-0007: Sharp Triangular Scissors Sha
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

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານຂ້າງຝັ່ງມັງກອນ',
      l2: '• ໄລຍະຫ່າງ: ຫ່າງມຸມແຫຼມ > 15m',
      l3: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມແຍກ',
      l4: '• ຫ້າມເປີດປະຕູໃຫຍ່ດ້ານເສືອຂາວ',
      sub1: 'ທາງເຂົ້າ: ດ້ານຂ້າງມັງກອນຂຽວ',
      sub2: '✓ ຫ່າງໄກຈາກຈຸດປະທະມີດຕັດ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Sab laug zaj',
      l2: '• Qhov Deb: Deb ncov ntse > 15m',
      l3: '• Txwv tsis qhib rau ncov ntse',
      l4: '• Txwv tsis qhib sab tsov dawb',
      sub1: 'Kev Nkag: Sab laug zaj deb',
      sub2: '✓ Deb ntawm chaw raug txiab'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ໄຟຮ້ອນແຮງ (火)',
      l2: '• ✗ ຂັດແຍ້ງຮຸນແຮງ: ທາດທອງ (金)',
      l3: '  (ກວ້າ 6 乾, 7 兑) ໄຟຫຼອມທອງ',
      l4: '• ✗ ຄົນທາດນ້ຳ (ກວ້າ 1 坎) ປະທະ',
      l5: '• ຫ້າມໃຊ້ຢູ່ອາໄສສຳລັບທຸກຄົນ',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ອຸບັດຕິເຫດ, ຄະດີຄວາມ, ຜ່າຕັດ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Hluav Taws Kub (火)',
      l2: '• ✗ Tsis haum heev: Neeg Zog Kub',
      l3: '  (Gua 6 乾, 7 兑) Hluav yaj Kub',
      l4: '• ✗ Neeg Zog Dej (Gua 1 坎) ntsib',
      l5: '• Txwv tsis tsim nyob rau tsev neeg',
      sub1: 'Tej Kev Txom Nyem (Impact)',
      sub2: 'Tsheb tsoo, phais mob, plaub ntug'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ເຂດຫຼັງສຸດ (Safe Rear)',
      l2: '• ຫຼັງກຳແພງຫີນແກຣນິດ 2.2m',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ສວນພາຍໃນ',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງທີ່ໜັກແໜ້ນ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບຫຼັງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Sab tom qab kawg ruaj',
      l2: '• Nyob tom qab phab ntsa granite',
      l3: '• Ntsia (Xiang): Ntsia vaj hauv',
      l4: '• Zaum (Zuo): Zaum roob nraub qaum',
      bed: 'Taub Hau Pw: Phab ntsa tom qab'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ກຳແພງຫີນແກຣນິດ 2.2m ຕັດມຸມ',
      l2: '2. ປູກຕົ້ນສົນ/ໄຜ່ດູດແຮງລົມພຸ່ງຊົນ',
      l3: '3. ຕັ້ງສີລາໄທຊານ (石敢当) ທີ່ຫົວມຸມ',
      l4: '4. ປັບເປັນສວນຫຍ້າ/ລານຈອດກາງແຈ້ງ',
      t1: '• ຫ້າມສ້າງຫ້ອງນອນໃນມຸມແຫຼມ',
      t2: '• ຫ້າມຕັ້ງເຕົາໄຟໃນມຸມແຫຼມ',
      t3: '• ຫ້າມເປີດປະຕູກົງມຸມມີດຕັດ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Phab ntsa granite 2.2m txiav kaum',
      l2: '2. Cog hav ntoo ntsuab tuab txo cua',
      l3: '3. Pob zeb Tai Shan (石敢当) ncov',
      l4: '4. Ua vaj paj ntsuab chaw nres tsheb',
      t1: '• Txwv tsis tso chav pw kaum ntse',
      t2: '• Txwv tsis tso qhov cub kaum ntse',
      t3: '• Txwv tsis qhib qhov rooj kaum'
    },

    isCustomScissors: true
  },

  // 8. LP-0008: Inverted Triangle Plot (Dao San Jiao Tu)
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
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າກວ້າງ ຝັ່ງຊ້າຍ',
      l2: '• ທາງລົດເຂົ້າ: ສະດວກສະບາຍ',
      l3: '• ຫ້າມເປີດປະຕູກົງມຸມສ້ຽມຫຼັງ',
      l4: '• ຕັ້ງໄຟສະຫວ່າງດ້ານໜ້າ',
      sub1: 'ທາງເຂົ້າ: ດ້ານໜ້າກວ້າງ (ຊ້າຍ)',
      sub2: '✓ ທາງເຂົ້າສະດວກປອດໄພ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Pem dav sab laug',
      l2: '• Kev Tsheb: Yooj yim nkag tsev',
      l3: '• Txwv tsis qhib rau sab tom qab',
      l4: '• Teeb ci pom kev pem hauv ntej',
      sub1: 'Kev Nkag: Pem dav sab laug',
      sub2: '✓ Kev tsheb nkag yooj yim'
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

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ວາງກາງຂ້ອນໜ້າ' : 'Hauv Plawv Pem';
      const gateText = isLao ? '🚪 ປະຕູຮົ້ວ (Gate)' : '🚪 Qhov Rooj Vag';
      const waterText = isLao ? '✓ ໜອງນ້ຳໜ້າເຮືອນ' : '✓ Pas Dej Pem';
      const wallPill = isLao ? '🛡️ ກຳແພງຕັດມຸມຫຼັງ' : '🛡️ Phab Ntsa Txiav Kaum';

      return `
        <!-- Inverted Triangle: Wide Base at Bottom (240..560 at y=355), Apex at Top (400, 95) -->
        <polygon points="400,95 560,355 240,355" fill="#FEE2E2" stroke="#DC2626" stroke-width="3"/>
        <polygon points="400,103 554,351 246,351" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="6,4"/>

        <!-- Rear Apex Truncation Wall -->
        <line x1="360" y1="140" x2="440" y2="140" stroke="#15803D" stroke-width="6"/>
        <rect x="345" y="125" width="110" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="136" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(wallPill)}</text>

        <!-- Tai Shan Stone at rear apex -->
        <rect x="388" y="102" width="24" height="12" rx="2" fill="#334155"/>
        <text x="400" y="111" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#F8FAFC" text-anchor="middle">石敢当</text>

        <!-- Pine Trees in Rear Apex -->
        <circle cx="380" cy="120" r="5" fill="#14532D"/>
        <circle cx="420" cy="120" r="5" fill="#14532D"/>

        <!-- House seated safely forward (y=180) -->
        <rect x="340" y="175" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="330,175 400,150 470,175" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="202" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="219" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="234" width="16" height="6" fill="#1E293B"/>

        <!-- Axis Badge -->
        <g transform="translate(470, 180)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- Semicircular Ming Tang Pond in Front -->
        <path d="M 365 265 A 35 22 0 0 0 435 265 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
        <text x="400" y="260" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">${escapeXml(waterText)}</text>

        <!-- Driveway from Wide Front Left -->
        <path d="M 320 355 C 320 310 350 290 380 275" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- Gate Badge -->
        <rect x="290" y="346" width="60" height="16" rx="3" fill="#15803D"/>
        <text x="320" y="357" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="320" y1="385" x2="320" y2="364" stroke="#F59E0B" stroke-width="2"/>
        <polygon points="320,362 317,368 323,368" fill="#F59E0B"/>
      `;
    }
  },

  // 9. LP-0009: L-Shape Gun Plot (Qiang Xing Tu)
  {
    id: 'LP-0009',
    score: 30,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບປືນ / ໂຕແອວ ຂາດມຸມ (Qiang Xing / L-Plot)',
    nameHmong: 'Tus Phom / L-Shape Tu (Thaj Av Tus Phom - Gun / L-Plot)',
    elementLao: 'ທາດທອງຫັກ Broken Metal / 破金',
    elementHmong: 'Zog Kub Txiav Broken Metal / 破金',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບປືນ/ໂຕແອວ ຂາດມຸມ Bagua ໃຫຍ່ກວ່າ 30% ຕ້ອງປູກຕົ້ນໄມ້ ແລະ ຕັ້ງເສົາໄຟເຕັມມຸມຂາດ.',
    summaryHmong: 'Tswv Yim: Thaj av tus phom poob kaum Bagua ntau dua 30%, yuav tsum cog ntoo & teeb ci ntsa iab kho kom puv.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າປີກໃຫຍ່ (ຊ້າຍ)',
      l2: '• ຫ້າມເປີດປະຕູກົງມຸມຫັກໂຕແອວ',
      l3: '• ທາງລົດເຂົ້າ: ແລ່ນໃນປີກໃຫຍ່',
      l4: '• ປູກຮົ້ວໄມ້ບັງມຸມຫັກພາຍໃນ',
      sub1: 'ທາງເຂົ້າ: ປີກໃຫຍ່ (ຊ້າຍ)',
      sub2: '✓ ຫຼີກລ່ຽງມຸມຫັກເລັງພິສ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Tis loj sab laug',
      l2: '• Txwv tsis qhib rau ces kaum lov',
      l3: '• Kev Tsheb: Nyob hauv tis loj',
      l4: '• Cog ntoo thaiv ces kaum lov',
      sub1: 'Kev Nkag: Tis loj sab laug',
      sub2: '✓ Zam txhob ntsib kaum lov'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທອງຫັກ (Broken)',
      l2: '• ✗ ກະທົບຄົນປະຈຳທິດທີ່ຂາດຫາຍ:',
      l3: '  ຂາດ NW: ກະທົບພໍ່ (ກວ້າ 6 乾)',
      l4: '  ຂາດ SW: ກະທົບແມ່ (ກວ້າ 2 坤)',
      l5: '  ຂາດ E: ກະທົບລູກຊາຍກົກ (ກວ້າ 3)',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ຄອບຄົວຂາດຄວາມສົມດຸນ, ພະຍາດຊຳເຮື້ອ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Kub Lov (Broken Metal)',
      l2: '• ✗ Raug tus neeg raws kaum ploj:',
      l3: '  Ploj NW: Raug txiv (Gua 6 乾)',
      l4: '  Ploj SW: Raug niam (Gua 2 坤)',
      l5: '  Ploj E: Raug tub hlob (Gua 3 震)',
      sub1: 'Tej Kev Txom Nyem (Impact)',
      sub2: 'Tsev neeg tsis sib haum, mob nkeeg'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງໃນປີກໃຫຍ່ສີ່ຫຼ່ຽມ',
      l2: '• ຫ້າມສ້າງເຮືອນຂວາງຮອຍຕໍ່ໂຕແອວ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ລານໜ້າປີກໃຫຍ່',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງປີກໃຫຍ່',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບປີກໃຫຍ່'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv tis loj 4 fab',
      l2: '• Txwv tsis ua tsev hla duav lov',
      l3: '• Ntsia (Xiang): Ntsia tshav tis loj',
      l4: '• Zaum (Zuo): Zaum nraub qaum tis',
      bed: 'Taub Hau Pw: Phab ntsa tis loj'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ປູກຕົ້ນໄມ້ພຸ່ມເຕັມມຸມຂາດໃຫ້ເຕັມ',
      l2: '2. ຕັ້ງເສົາໄຟສະຫວ່າງສູງທີ່ມຸມຕັດ',
      l3: '3. ສ້າງສາລາພັກຜ່ອນໃນມຸມຂາດ',
      l4: '4. ແຍກຕອນດິນເປັນ 2 ສີ່ຫຼ່ຽມ',
      t1: '• ຫ້າມວາງຫ້ອງນອນກົງມຸມຫັກ',
      t2: '• ຫ້າມຕັ້ງເຕົາໄຟກົງຮອຍຕໍ່',
      t3: '• ຫ້າມປ່ອຍໃຫ້ມຸມຂາດມືດມົວ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Cog ntoo ntsuab sau kaum ploj',
      l2: '2. Ncej fais (ncej hluav taws xob) ci siab kaum txiav',
      l3: '3. Tsim lub tsev so vaj kaum ploj',
      l4: '4. Faib ua 2 thaj av xwm meem',
      t1: '• Txwv tsis tso chav pw kaum lov',
      t2: '• Txwv tsis tso qhov cub qhov lov',
      t3: '• Txwv tsis cia kaum ploj tsaus ntuj'
    },

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ວາງໃນປີກໃຫຍ່' : 'Hauv Tis Loj';
      const gateText = isLao ? '🚪 ປະຕູຮົ້ວ (Gate)' : '🚪 Qhov Rooj Vag';
      const missingText = isLao ? '✗ ມຸມທີ່ຂາດ (Missing Sector)' : '✗ Kaum Ploj (Missing)';
      const remedyText = isLao ? '🛡️ ປູກໄມ້ & ຕັ້ງໄຟເຕັມມຸມ' : '🛡️ Cog Ntoo & Teeb Ci';

      return `
        <!-- L-Shape Boundary: Main Leg (250..420 at y=95..355), Foot Leg (420..550 at y=220..355) -->
        <polygon points="250,95 420,95 420,220 550,220 550,355 250,355" fill="#FEE2E2" stroke="#DC2626" stroke-width="3"/>
        
        <!-- Missing Sector indicated by dashed rectangle (420..550 at y=95..220) -->
        <rect x="420" y="95" width="130" height="125" fill="#FEF2F2" stroke="#EF4444" stroke-width="1.8" stroke-dasharray="6,4"/>
        <text x="485" y="150" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#B91C1C" text-anchor="middle">${escapeXml(missingText)}</text>
        <rect x="435" y="165" width="100" height="16" rx="3" fill="#15803D"/>
        <text x="485" y="176" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(remedyText)}</text>

        <!-- Light Pole & Buffer Trees filling missing sector -->
        <circle cx="485" cy="115" r="10" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        <text x="485" y="118" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FFFFFF" text-anchor="middle">💡</text>
        <circle cx="530" cy="115" r="7" fill="#15803D"/>
        <circle cx="530" cy="195" r="7" fill="#15803D"/>

        <!-- House seated safely in Main Leg (x=280, y=130, w=110, h=60) -->
        <rect x="280" y="130" width="110" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="270,130 335,108 400,130" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="335" y="155" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="335" y="171" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="328" y="186" width="14" height="5" fill="#1E293B"/>

        <!-- Driveway from Front Left -->
        <path d="M 290 355 C 290 280 320 250 335 220" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- Gate Badge -->
        <rect x="265" y="346" width="60" height="16" rx="3" fill="#15803D"/>
        <text x="295" y="357" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="295" y1="385" x2="295" y2="364" stroke="#F59E0B" stroke-width="2"/>
        <polygon points="295,362 292,368 298,368" fill="#F59E0B"/>
      `;
    }
  },

  // 10. LP-0010: Hammer T-Shape Plot (T-Shape Tu)
  {
    id: 'LP-0010',
    score: 40,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບຄ້ອນຕີ / ໂຕທີ (T-Shape Hammer Plot)',
    nameHmong: 'T-Shape Tu (Thaj Av Tus T - Hammer T-Shape Plot)',
    elementLao: 'ທາດດິນແຕກ Clashing Earth / 冲土',
    elementHmong: 'Zog Av Tsoo Clashing Earth / 冲土',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບຄ້ອນຕີ/ໂຕທີ ພະລັງງານແຕກແຍກລະຫວ່າງສອງສ່ວນ ຕ້ອງສ້າງກຳແພງແບ່ງ 2 ສ່ວນ.',
    summaryHmong: 'Tswv Yim: Thaj av tus T zog av tsoo sib nrug, yuav tsum ua phab ntsa faib ua 2 feem xwm meem kho.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ປາຍດ້າມຄ້ອນຕິດຖະໜົນ',
      l2: '• ທາງລົດ: ແລ່ນຕາມລຳຕົ້ນດ້າມຄ້ອນ',
      l3: '• ຫ້າມສ້າງເຮືອນທັບຮອຍຕໍ່ຫົວ-ດ້າມ',
      l4: '• ປູກຕົ້ນໄມ້ແນວແບ່ງສອງຝັ່ງ',
      sub1: 'ທາງເຂົ້າ: ປາຍດ້າມຄ້ອນ',
      sub2: '✓ ແຍກທາງສັນຈອນຈາກທີ່ພັກ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Taub qab ncej tsheb',
      l2: '• Kev Tsheb: Raws ncej mus rau tsev',
      l3: '• Txwv tsis ua tsev hla duav lov',
      l4: '• Cog ntoo faib 2 sab',
      sub1: 'Kev Nkag: Taub ncej T',
      sub2: '✓ Cais kev tsheb & chaw nyob'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ດິນແຕກ (Clash)',
      l2: '• ✗ ຂັດແຍ້ງ: ທາດນ້ຳ & ທາດໄຟ',
      l3: '  (ກວ້າ 1 坎, 9 离)',
      l4: '• ເໝາະສຳລັບໂຮງງານ/ສາງສິນຄ້າ',
      l5: '• ບໍ່ຄວນໃຊ້ເປັນເຮືອນຢູ່ອາໄສຖ້າບໍ່ແກ້',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ຄວາມກົດດັນ, ປວດເມື່ອຍ, ງານໜັກ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Av Tsoo (Clash Earth)',
      l2: '• ✗ Tsis haum: Neeg Zog Dej & Hluav',
      l3: '  (Gua 1 坎, 9 离)',
      l4: '• Haum rau tsev khaws khoom xwb',
      l5: '• Tsis haum rau tsev neeg nyob',
      sub1: 'Tej Kev Txom Nyem (Impact)',
      sub2: 'Sab siab, nkees nkees, ntxhov siab'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ຫົວຄ້ອນດ້ານເທິງ (Crossbar)',
      l2: '• ຫ້າມສ້າງເຮືອນຂວາງເອວຮອຍຕໍ່',
      l3: '• ທິດໜ້າ (向): ຫັນໜ້າລົງສູ່ດ້າມຄ້ອນ',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງຫົວຄ້ອນແໜ້ນ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບຫົວຄ້ອນ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Lub taub hau T pem saud',
      l2: '• Txwv tsis ua tsev hla duav lov',
      l3: '• Ntsia (Xiang): Ntsia ncej T nqes',
      l4: '• Zaum (Zuo): Zaum taub hau T',
      bed: 'Taub Hau Pw: Phab ntsa taub hau'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ກຳແພງແບ່ງຫົວຄ້ອນ ແລະ ດ້າມຄ້ອນ',
      l2: '2. ດັດແປງເປັນ 2 ສີ່ຫຼ່ຽມຈະຕຸລັດ',
      l3: '3. ໂຄມໄຟສະຫວ່າງຕາມດ້າມຄ້ອນ',
      l4: '4. ໜອງນ້ຳໜ້າເຮືອນໃນຫົວຄ້ອນ',
      t1: '• ຫ້າມສ້າງເຮືອນຂວາງເອວ',
      t2: '• ຫ້າມນອນກົງຮອຍຕໍ່',
      t3: '• ຫ້າມດ້າມຄ້ອນມືດມົວ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Phab ntsa faib taub hau & ncej',
      l2: '2. Kho kom tau 2 thaj xwm meem',
      l3: '3. Teeb ci pom kev raws ncej T',
      l4: '4. Pas dej pem hauv taub hau',
      t1: '• Txwv tsis ua tsev hla duav',
      t2: '• Txwv tsis pw qhov lov',
      t3: '• Txwv tsis cia ncej T tsaus'
    },

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫົວຄ້ອນເທິງ' : 'Taub Hau T';
      const gateText = isLao ? '🚪 ທາງເຂົ້າດ້າມ' : '🚪 Qhov Rooj Ncej';
      const wallPill = isLao ? '🛡️ ກຳແພງແບ່ງ 2 ສ່ວນ' : '🛡️ Phab Ntsa Faib 2';

      return `
        <!-- T-Shape Polygon: Crossbar (240..560 at y=95..200), Stem (340..460 at y=200..355) -->
        <polygon points="240,95 560,95 560,200 460,200 460,355 340,355 340,200 240,200" fill="#FEE2E2" stroke="#DC2626" stroke-width="3"/>
        
        <!-- Partition Wall dividing Crossbar from Stem at y=200 -->
        <line x1="340" y1="200" x2="460" y2="200" stroke="#15803D" stroke-width="5" stroke-dasharray="6,3"/>
        <rect x="350" y="190" width="100" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="201" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(wallPill)}</text>

        <!-- House seated in Crossbar (x=340, y=110, w=120, h=60) -->
        <rect x="340" y="110" width="120" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="330,110 400,88 470,110" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="134" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="150" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="393" y="165" width="14" height="5" fill="#1E293B"/>

        <!-- Driveway down Stem -->
        <line x1="400" y1="210" x2="400" y2="350" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- Gate Badge at Stem Base -->
        <rect x="365" y="346" width="70" height="16" rx="3" fill="#15803D"/>
        <text x="400" y="357" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="400" y1="385" x2="400" y2="364" stroke="#F59E0B" stroke-width="2"/>
        <polygon points="400,362 397,368 403,368" fill="#F59E0B"/>
      `;
    }
  },

  // 11. LP-0011: Rhombus Slanted Plot (Ling Xing Tu)
  {
    id: 'LP-0011',
    score: 45,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບເຂົ້າຫຼາມຕັດ / ເພັດ (Ling Xing Tu - Rhombus)',
    nameHmong: 'Ling Xing Tu (Thaj Av Pob Zeb Diamond - Rhombus Slanted)',
    elementLao: 'ທາດໄມ້ບ້ຽວ Slanted Wood / 偏木',
    elementHmong: 'Zog Ntoo Tsis Ncaj Slanted Wood / 偏木',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບເຂົ້າຫຼາມຕັດ ມຸມແຫຼມສອງຂ້າງຕັດລົມ ຕ້ອງສ້າງເຮືອນຕັ້ງສາກ 90° ແລະ ປູກໄມ້ຕັດມຸມ.',
    summaryHmong: 'Tswv Yim: Thaj av pob zeb diamond kaum ntse txiav cua, yuav tsum ua tsev ncaj 90° & cog ntoo kho kaum.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານຂ້າງທີ່ລຽບງ່າຍ',
      l2: '• ໄລຍະຫ່າງ: ຫ່າງສອງມຸມແຫຼມ > 10m',
      l3: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມເພັດ',
      l4: '• ທາງລົດເຂົ້າ: ໂຄ້ງມົນງາມ',
      sub1: 'ທາງເຂົ້າ: ດ້ານລຽບ (ຂ້າງ)',
      sub2: '✓ ຫຼີກລ່ຽງມຸມແຫຼມຕັດພະລັງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Sab tiaj tus',
      l2: '• Qhov Deb: Deb 2 ncov ntse > 10m',
      l3: '• Txwv tsis qhib rau ncov ntse',
      l4: '• Kev Tsheb: Nkhaus mos muag',
      sub1: 'Kev Nkag: Sab tiaj tus',
      sub2: '✓ Zam txhob ntsib ncov ntse'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ໄມ້ບ້ຽວ (Slanted)',
      l2: '• ✗ ຂັດແຍ້ງ: ຄົນທາດດິນ (ກວ້າ 2, 8)',
      l3: '  ມຸມແຫຼມແທງທຳລາຍຄວາມໝັ້ນຄົງ',
      l4: '• ພໍ່ຄ້າລົງທຶນສ່ຽງ (ຕ້ອງແກ້ໄຂ)',
      l5: '• ຄົນທົ່ວໄປຄວນດັດແປງກ່ອນຢູ່',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ຄວາມບໍ່ແນ່ນອນ, ການພະນັນ, ຄວາມໂລບ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Ntoo Tsis Ncaj',
      l2: '• ✗ Tsis haum: Neeg Zog Av (Gua 2, 8)',
      l3: '  Ncov ntse nstab kev ruaj khov',
      l4: '• Neeg twv txiaj & pheej hmoo',
      l5: '• Yuav tsum kho ua ntej nyob',
      sub1: 'Tej Kev Txom Nyem (Impact)',
      sub2: 'Kev tsis ruaj khov, poob nyiaj'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງກາງຕອນດິນ ຕັ້ງສາກ 90°',
      l2: '• ຫ້າມສ້າງເຮືອນບ້ຽວຕາມແນວແດນ',
      l3: '• ທິດໜ້າ (向): ຫັນຕາມທິດເຂັມທິດຫຼັກ',
      l4: '• ທິດພິງ (坐): ພິງທິດຕັ້ງສາກ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບສາກ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Plawv thaj av ncaj 90°',
      l2: '• Txwv tsis ua tsev qaij raws ciam',
      l3: '• Ntsia (Xiang): Ntsia qhov ncaj',
      l4: '• Zaum (Zuo): Zaum phab ncaj',
      bed: 'Taub Hau Pw: Phab ntsa ncaj 90°'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ປູກຕົ້ນໄມ້ຕັດ 2 ມຸມແຫຼມໃຫ້ມົນ',
      l2: '2. ກຳແພງຕັດມຸມແຫຼມທັງສອງ',
      l3: '3. ຕັ້ງອ່າງນ້ຳພຸຊະລໍແຮງລົມກາງ',
      l4: '4. ສ້າງເຮືອນສີ່ຫຼ່ຽມຕັ້ງສາກ 90°',
      t1: '• ຫ້າມສ້າງເຮືອນສະຫຼຽງຕາມດິນ',
      t2: '• ຫ້າມຫ້ອງນອນໃນມຸມແຫຼມ',
      t3: '• ຫ້າມເປີດປະຕູກົງມຸມເພັດ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Cog ntoo txiav 2 kaum ntse',
      l2: '2. Phab ntsa txiav kaum ntse',
      l3: '3. Pas dej txo cua hauv plawv',
      l4: '4. Ua tsev xwm meem ncaj 90°',
      t1: '• Txwv tsis ua tsev qaij raws av',
      t2: '• Txwv tsis pw kaum ntse',
      t3: '• Txwv tsis qhib qhov rooj kaum'
    },

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຕັ້ງສາກ 90° ປົກກະຕິ' : 'Ncaj 90° Xwm Meem';
      const gateText = isLao ? '🚪 ປະຕູຮົ້ວ (Gate)' : '🚪 Qhov Rooj Vag';
      const waterText = isLao ? '✓ ອ່າງນ້ຳພຸປັບດຸນ' : '✓ Pas Dej Kho Zog';

      return `
        <!-- Rhombus Parallelogram (310,95 to 570,95 to 490,355 to 230,355) -->
        <polygon points="310,95 570,95 490,355 230,355" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>

        <!-- Rounding buffer trees in acute corners (245, 345) and (555, 105) -->
        <circle cx="260" cy="335" r="14" fill="#15803D"/>
        <circle cx="540" cy="115" r="14" fill="#15803D"/>

        <!-- Orthogonal House aligned square to cardinal directions (not skewed!) -->
        <rect x="340" y="145" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="330,145 400,120 470,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="172" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="189" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="204" width="16" height="6" fill="#1E293B"/>

        <!-- Central Fountain -->
        <circle cx="400" cy="245" r="18" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
        <text x="400" y="249" font-family="'Segoe UI', sans-serif" font-size="10" text-anchor="middle">⛲</text>

        <!-- Driveway from Flat Front -->
        <path d="M 330 355 C 330 300 360 280 380 265" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- Gate Badge -->
        <rect x="300" y="346" width="60" height="16" rx="3" fill="#15803D"/>
        <text x="330" y="357" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="330" y1="385" x2="330" y2="364" stroke="#F59E0B" stroke-width="2"/>
        <polygon points="330,362 327,368 333,368" fill="#F59E0B"/>
      `;
    }
  },

  // 12. LP-0012: Semicircular Metal Plot (Ban Yuan Tu)
  {
    id: 'LP-0012',
    score: 93,
    isGood: true,
    nameLao: 'ຕອນດິນຮູບເຄິ່ງວົງມົນ ທາດທອງ (Ban Yuan Tu - Semicircular)',
    nameHmong: 'Ban Yuan Tu (Thaj Av Voj Kheej Ntoos - Semicircular Metal)',
    elementLao: 'ທາດທອງ Gold Metal / 乾金',
    elementHmong: 'Zog Kub Gold Metal / 乾金',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບເຄິ່ງວົງມົນເປັນທາດທອງ (金) ສ່ວນໂຄ້ງໂອບອຸ້ມຕົວເຮືອນ ປົກປ້ອງພະລັງງານ ມຸງຄຸນສູງ.',
    summaryHmong: 'Tswv Yim: Thaj av voj kheej yog zog Kub (金) puag tsev zoo heev, tiv thaiv huab cua phem, nplua mias.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າພຽງ ຝັ່ງຊ້າຍ',
      l2: '• ທາງລົດເຂົ້າ: ໂຄ້ງຮັບພະລັງ',
      l3: '• ຫ້າມເຈາະປະຕູຫຼັງສ່ວນໂຄ້ງ',
      l4: '• ປະຕູຮົ້ວສະຫງ່າງາມ',
      sub1: 'ທາງເຂົ້າ: ດ້ານໜ້າພຽງ (ຊ້າຍ)',
      sub2: '✓ ພະລັງງານໂອບອຸ້ມຮອບດ້ານ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Pem tiaj sab laug',
      l2: '• Kev Tsheb: Nkhaus txais zog',
      l3: '• Txwv tsis qhib qhov rooj nraub qaum',
      l4: '• Qhov rooj vag zoo nkauj',
      sub1: 'Kev Nkag: Pem tiaj sab laug',
      sub2: '✓ Zog puag tsev puv nkaus'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດທອງ (金)',
      l2: '• ✓ ຖືກກັບ: ທາດທອງ & ທາດນ້ຳ',
      l3: '  (ກວ້າ 6 乾, 7 兑, 1 坎)',
      l4: '• ✗ ຄົນທາດໄມ້ (ກວ້າ 3, 4) ປູກໄມ້ເສີມ',
      l5: '• ມີອຳນາດບາຣະມີ, ບໍລິວານຊື່ສັດ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ທອງເກີດນ້ຳ: ຄວາມຮັ່ງມີ, ຊື່ສຽງ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Kub (Metal)',
      l2: '• ✓ Haum: Neeg Zog Kub & Dej',
      l3: '  (Gua 6 乾, 7 兑, 1 坎)',
      l4: '• ✗ Neeg Zog Ntoo (Gua 3, 4) cog ntoo',
      l5: '• Hwj chim loj, neeg hwm',
      sub1: 'Tsib Yam Zog: Kub yug Dej',
      sub2: 'Nplua mias, koob meej, tiv thaiv'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ໃຈກາງສ່ວນໂຄ້ງ (Embrace)',
      l2: '• ໄລຍະຖອຍຮົ່ນ: ລານໜ້າກວ້າງ 8-10m',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ຖະໜົນດ້ານໜ້າ',
      l4: '• ທິດພິງ (坐): ພິງສ່ວນໂຄ້ງປົກປ້ອງ',
      bed: 'ຫົວຕຽງ: ພິງສ່ວນໂຄ້ງຫຼັງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Plawv voj kheej puag tsev',
      l2: '• Qhov Deb: Tshav pem 8-10m',
      l3: '• Ntsia (Xiang): Ntsia kev pem hauv',
      l4: '• Zaum (Zuo): Zaum voj kheej qaum',
      bed: 'Taub Hau Pw: Phab ntsa voj qaum'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ຕົ້ນສົນລຽບຕາມແນວໂຄ້ງຫຼັງ',
      l2: '2. ໜອງນ້ຳໂອບອຸ້ມໜ້າເຮືອນ',
      l3: '3. ປະຕູຮົ້ວມຸງຄຸນສະຫງ່າງາມ',
      l4: '4. ລານຫຍ້າສີຂຽວກາງເຮືອນ',
      t1: '• ຫ້າມເຈາະປະຕູຫຼັງສ່ວນໂຄ້ງ',
      t2: '• ຫ້າມສ້າງອາຄານແຫຼມພາຍໃນ',
      t3: '• ຫ້າມຕັດສ່ວນໂຄ້ງໃຫ້ແຕກ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Ntoo thuv raws voj kheej qaum',
      l2: '2. Pas dej semicircular pem tsev',
      l3: '3. Qhov rooj vag zoo nkauj',
      l4: '4. Tshav nroj ntsuab hauv plawv',
      t1: '• Txwv tsis qhib qhov rooj qaum',
      t2: '• Txwv tsis ua tsev ntse hauv',
      t3: '• Txwv tsis txiav voj kheej lov'
    },

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ກາງສ່ວນໂຄ້ງໂອບ' : 'Plawv Voj Kheej';
      const gateText = isLao ? '🚪 ປະຕູຮົ້ວ (Gate)' : '🚪 Qhov Rooj Vag';
      const waterText = isLao ? '✓ ໜອງນ້ຳໜ້າເຮືອນ' : '✓ Pas Dej Pem';

      return `
        <!-- Semicircular Arc at top, flat base along road (240..560 at y=355) -->
        <path d="M 240 355 A 160 160 0 0 1 560 355 Z" fill="#DCFCE7" stroke="#16A34A" stroke-width="3"/>
        
        <!-- House in center of semicircular arc -->
        <rect x="340" y="200" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="330,200 400,175 470,200" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="227" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="244" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="259" width="16" height="6" fill="#1E293B"/>

        <!-- Rear protective trees around arc curve -->
        <g fill="#166534">
          <circle cx="280" cy="270" r="10"/>
          <circle cx="330" cy="160" r="10"/>
          <circle cx="400" cy="130" r="12"/>
          <circle cx="470" cy="160" r="10"/>
          <circle cx="520" cy="270" r="10"/>
        </g>

        <!-- Semicircular Ming Tang Pond in Front -->
        <path d="M 365 295 A 35 20 0 0 0 435 295 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
        <text x="400" y="290" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">${escapeXml(waterText)}</text>

        <!-- Driveway from Left Gate -->
        <path d="M 300 355 C 300 320 330 310 360 295" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- Gate Badge -->
        <rect x="270" y="346" width="60" height="16" rx="3" fill="#15803D"/>
        <text x="300" y="357" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="300" y1="385" x2="300" y2="364" stroke="#F59E0B" stroke-width="2"/>
        <polygon points="300,362 297,368 303,368" fill="#F59E0B"/>
      `;
    }
  },

  // 13. LP-0013: Hillside Terrace Plot (Shan Yao Tu)
  {
    id: 'LP-0013',
    score: 82,
    isGood: true,
    nameLao: 'ຕອນດິນເທິງເນີນເຂົາ / ຂັ້ນໄດ (Shan Yao Tu - Hillside Terrace)',
    nameHmong: 'Shan Yao Tu (Thaj Av Qis Siab Hauv Toj - Hillside Terrace)',
    elementLao: 'ທາດດິນພູເຂົາ Mountain Earth / 艮土',
    elementHmong: 'Zog Toj Roob Mountain Earth / 艮土',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນເທິງເນີນເຂົາແບ່ງເປັນ 3 ຂັ້ນໄດ ວາງເຮືອນຢູ່ຊັ້ນກາງ ພິງເນີນສູງ ສ້າງກຳແພງກັນດິນເຈື່ອນ.',
    summaryHmong: 'Tswv Yim: Thaj av hauv toj roob ua 3 theem, tso tsev rau theem nruab nrab, ua phab ntsa thaiv av ruaj khov.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ຕັ້ງຊັ້ນລຸ່ມສຸດ',
      l2: '• ທາງລົດ: ຂຶ້ນໂຄ້ງຄ່ອຍໆຕາມເນີນ',
      l3: '• ຄວາມລາດຊັນ: ບໍ່ເກີນ 12-15%',
      l4: '• ຫ້າມເຮັດທາງຊື່ຊັນຍິງກົງເຮືອນ',
      sub1: 'ທາງເຂົ້າ: ຊັ້ນລຸ່ມ ໂຄ້ງຂຶ້ນ',
      sub2: '✓ ທາງຂຶ້ນໂຄ້ງປອດໄພ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Theem qis kawg',
      l2: '• Kev Tsheb: Nkhaus nce toj qeeb',
      l3: '• Qhov Qaij: Tsis pub siab dua 15%',
      l4: '• Txwv tsis ua kev ncaj nraim',
      sub1: 'Kev Nkag: Theem qis nce saud',
      sub2: '✓ Kev tsheb nkhaus nyab xeeb'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ດິນພູເຂົາ (艮)',
      l2: '• ✓ ຖືກກັບ: ຜູ້ບໍລິຫານ, ນັກຄິດ',
      l3: '  (ກວ້າ 8 艮, 2 坤, 6 乾)',
      l4: '• ✗ ຄົນສຸຂະພາບອ່ອນແອ (ຍ່າງຍາກ)',
      l5: '• ມີຄວາມສະຫງົບ, ອາຍຸໝັ້ນຂວັນຍືນ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ພູເຂົາ Gen: ໜັກແໜ້ນ, ບາຣະມີ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Toj Roob (艮 Earth)',
      l2: '• ✓ Haum: Neeg xav tau kev ntsiag to',
      l3: '  (Gua 8 艮, 2 坤, 6 乾)',
      l4: '• ✗ Neeg mob nkeeg (nce toj nyuaj)',
      l5: '• Noj qab nyob zoo ntev xyoo',
      sub1: 'Tsib Yam Zog: Roob Gen ruaj',
      sub2: 'Hwj chim loj, ntsiag to zoo'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ຊັ້ນກາງ (Mid-Terrace)',
      l2: '• ພິງຊັ້ນເທິງ ແລະ ແນມເຫັນຊັ້ນລຸ່ມ',
      l3: '• ທິດໜ້າ (向): ຫັນໜ້າລົງສູ່ຮ່ອມພູ',
      l4: '• ທິດພິງ (坐): ພິງເນີນສູງດ້ານເທິງ',
      bed: 'ຫົວຕຽງ: ພິງເນີນສູງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Theem nruab nrab (Mid)',
      l2: '• Zaum theem siab ntsia theem qis',
      l3: '• Ntsia (Xiang): Ntsia kwj ha pem',
      l4: '• Zaum (Zuo): Zaum toj siab qaum',
      bed: 'Taub Hau Pw: Phab ntsa toj siab'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ກຳແພງກັນດິນ Retaining Wall',
      l2: '2. ລະບົບລະບາຍນ້ຳຝົນຮອບຊັ້ນ',
      l3: '3. ປູກຫຍ້າແຝກຍຶດໜ້າດິນ',
      l4: '4. ຮົ້ວກັ້ນຕົກທີ່ແໜ້ນໜາ',
      t1: '• ຫ້າມນ້ຳຝົນໄຫຼເຊາະໜ້າດິນ',
      t2: '• ຫ້າມທາງລົດຊື່ຊັນເກີນ 15%',
      t3: '• ຫ້າມສ້າງເຮືອນຕິດແຄມເຈື່ອນ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Phab ntsa thaiv av Retaining Wall',
      l2: '2. Kwj dej xau nag kom huv si',
      l3: '3. Cog nroj tuab tuav av',
      l4: '4. Ciam av thaiv kom tsis poob',
      t1: '• Txwv tsis cia dej เซາະດິນ',
      t2: '• Txwv tsis ua kev qaij dhau 15%',
      t3: '• Txwv tsis tso tsev ze ntug av'
    },

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຊັ້ນກາງ (Mid-Terrace)' : 'Theem Nruab Nrab';
      const gateText = isLao ? '🚪 ທາງເຂົ້າຊັ້ນລຸ່ມ' : '🚪 Qhov Rooj Theem Qis';
      const t1 = isLao ? 'ຊັ້ນເທິງ (Upper Terrace)' : 'Theem Siab';
      const t2 = isLao ? 'ຊັ້ນກາງ (Mid Terrace)' : 'Theem Nruab Nrab';
      const t3 = isLao ? 'ຊັ້ນລຸ່ມ (Lower Terrace)' : 'Theem Qis';

      return `
        <!-- 3 Stepped Terraces -->
        <rect x="250" y="95" width="300" height="80" fill="#86EFAC" stroke="#15803D" stroke-width="2"/>
        <text x="270" y="115" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#166534">${escapeXml(t1)}</text>

        <rect x="250" y="175" width="300" height="95" fill="#BBF7D0" stroke="#15803D" stroke-width="2"/>
        <text x="270" y="195" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#166534">${escapeXml(t2)}</text>

        <rect x="250" y="270" width="300" height="85" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/>
        <text x="270" y="290" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#166534">${escapeXml(t3)}</text>

        <!-- Retaining walls between terraces -->
        <line x1="250" y1="175" x2="550" y2="175" stroke="#052E16" stroke-width="4"/>
        <line x1="250" y1="270" x2="550" y2="270" stroke="#052E16" stroke-width="4"/>

        <!-- House seated on Mid Terrace -->
        <rect x="340" y="190" width="120" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="330,190 400,168 470,190" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="215" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="231" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="393" y="246" width="14" height="5" fill="#1E293B"/>

        <!-- Curving Driveway climbing from Lower to Mid -->
        <path d="M 300 355 C 300 310 330 290 350 250" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- Gate Badge at Lower Terrace -->
        <rect x="270" y="346" width="60" height="16" rx="3" fill="#15803D"/>
        <text x="300" y="357" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="300" y1="385" x2="300" y2="364" stroke="#F59E0B" stroke-width="2"/>
        <polygon points="300,362 297,368 303,368" fill="#F59E0B"/>
      `;
    }
  },

  // 14. LP-0014: Flagpole Panhandle Plot (Dao Ba Tu)
  {
    id: 'LP-0014',
    score: 48,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບເສົາທຸງ / ດວງກະບວຍ (Dao Ba Tu - Flagpole Panhandle)',
    nameHmong: 'Dao Ba Tu (Thaj Av Tus Txiab Ntev - Flagpole Panhandle)',
    elementLao: 'ທາດໄມ້ຍາວ Flagpole Wood / 木',
    elementHmong: 'Zog Ntoo Ntev Flagpole Wood / 木',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບເສົາທຸງ ແລວທາງຍາວແຄບຄືຊ່ອງລົມ ຕ້ອງຕັ້ງໄຟສະຫວ່າງຕະຫຼອດທາງ ແລະ ສ້າງວົງວຽນ.',
    summaryHmong: 'Tswv Yim: Thaj av tus txiab ntev cua ntsawj nqaim, yuav tsum teeb ci ntsa iab & ua voj kheej tig tsheb kho.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ຕິດຖະໜົນຫຼັກປາກດວງ',
      l2: '• ແລວທາງຍາວ: ທາງລົດກວ້າງ 3.5-4m',
      l3: '• ຕັ້ງໂຄມໄຟທຸກໆ 6-8 ແມັດ',
      l4: '• ຫ້າມມີສິ່ງກີດຂວາງໃນແລວທາງ',
      sub1: 'ທາງເຂົ້າ: ປາກດວງກະບວຍ',
      sub2: '⚠️ ຕັ້ງໄຟສະຫວ່າງໄລ່ພະລັງຢິນ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Pem ncauj ncej txiab',
      l2: '• Kev Tsheb: Dav 3.5-4m mus tsev',
      l3: '• Teeb ci txhua 6-8m raws kev',
      l4: '• Txwv tsis tso khoom ntxhov kev',
      sub1: 'Kev Nkag: Ncauj ncej txiab',
      sub2: '⚠️ Teeb ci kom tsis muaj yeeb'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ໄມ້ຍາວແຄບ',
      l2: '• ✗ ຂັດແຍ້ງ: ຄົນຂີ້ຢ້ານ, ໂລກຊຶມເສົ້າ',
      l3: '  ແລະ ຄອບຄົວຄ້າຂາຍ (ກວ້າ 2, 7)',
      l4: '• ຄົນມັກຄວາມງຽບສະຫງົບ, ນັກຂຽນ',
      l5: '• ຂາດພະລັງງານ Sheng Qi ໝູນວຽນ',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ຄວາມໂດດດ່ຽວ, ອັບລົມ, ທຸລະກິດຊ້າ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Ntoo Ntev Nqaim',
      l2: '• ✗ Tsis haum: Neeg ntshai tsaus ntuj',
      l3: '  thiab neeg ua lag luam (Gua 2, 7)',
      l4: '• Haum rau neeg nyiam ntsiag to',
      l5: '• Tsis muaj zog Sheng Qi ntau',
      sub1: 'Tej Kev Txom Nyem (Impact)',
      sub2: 'Nyob ib leeg, ntxhov siab, nqaim'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ຕອນດິນກວ້າງດ້ານໃນສຸດ',
      l2: '• ຫ້າມສ້າງເຮືອນອາໄສໃນແລວທາງ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ສວນກວ້າງໃນ',
      l4: '• ທິດພິງ (坐): ພິງແນວແດນຫຼັງສຸດ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບຫຼັງສຸດ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Thaj chaw dav hauv kawg',
      l2: '• Txwv tsis ua tsev rau ncej ntev',
      l3: '• Ntsia (Xiang): Ntsia tshav hauv',
      l4: '• Zaum (Zuo): Zaum ciam av kawg',
      bed: 'Taub Hau Pw: Phab ntsa tom qab'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ໂຄມໄຟສະຫວ່າງຕະຫຼອດແລວທາງຍາວ',
      l2: '2. ປູກດອກໄມ້ສີສົດຕາມທາງຍາວ',
      l3: '3. ເຮັດວົງວຽນກັບລົດໜ້າເຮືອນ',
      l4: '4. ໜອງນ້ຳໜ້າເຮືອນດຶງດູດພະລັງ',
      t1: '• ຫ້າມປ່ອຍໃຫ້ແລວທາງມືດມົວ',
      t2: '• ຫ້າມສ້າງເຮືອນໃນແລວທາງຍາວ',
      t3: '• ຫ້າມປ່ອຍນ້ຳຂັງໃນແລວທາງ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Teeb ci ntsa iab raws ncej ntev',
      l2: '2. Cog paj liab raws txoj kev',
      l3: '3. Ua voj kheej tig tsheb pem tsev',
      l4: '4. Pas dej pem tsev txais zog',
      t1: '• Txwv tsis cia ncej txiab tsaus ntuj',
      t2: '• Txwv tsis ua tsev rau ncej ntev',
      t3: '• Txwv tsis cia dej khov raws kev'
    },

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ດິນກວ້າງດ້ານໃນ' : 'Hauv Thaj Dav';
      const gateText = isLao ? '🚪 ປາກດວງ (Gate)' : '🚪 Ncauj Ncej (Gate)';
      const circleText = isLao ? '✓ ວົງວຽນກັບລົດ' : '✓ Voj Tig Tsheb';

      return `
        <!-- Panhandle: Pole (250..290 at y=170..355), Flag (250..550 at y=95..170) -->
        <polygon points="250,95 550,95 550,170 300,170 300,355 250,355 250,95" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>
        
        <!-- House in Flag Area (x=340, y=105, w=120, h=55) -->
        <rect x="340" y="105" width="120" height="55" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="330,105 400,85 470,105" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="128" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="144" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="393" y="157" width="14" height="5" fill="#1E293B"/>

        <!-- Turnaround Circle in front of house -->
        <circle cx="400" cy="195" r="20" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="4,2"/>
        <circle cx="400" cy="195" r="8" fill="#38BDF8"/>
        <text x="400" y="225" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#B45309" text-anchor="middle">${escapeXml(circleText)}</text>

        <!-- Driveway down Pole -->
        <line x1="275" y1="355" x2="275" y2="200" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>
        <path d="M 275 200 C 275 195 330 195 380 195" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="4,2"/>

        <!-- Lanterns along Pole -->
        <circle cx="290" cy="310" r="4" fill="#EAB308"/>
        <circle cx="290" cy="260" r="4" fill="#EAB308"/>
        <circle cx="290" cy="210" r="4" fill="#EAB308"/>

        <!-- Gate Badge at Pole Entrance -->
        <rect x="245" y="346" width="60" height="16" rx="3" fill="#15803D"/>
        <text x="275" y="357" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="275" y1="385" x2="275" y2="364" stroke="#F59E0B" stroke-width="2"/>
        <polygon points="275,362 272,368 278,368" fill="#F59E0B"/>
      `;
    }
  },

  // 15. LP-0015: River Peninsula Jade Belt (Huan Bao He Wan Tu)
  {
    id: 'LP-0015',
    score: 96,
    isGood: true,
    nameLao: 'ຕອນດິນແຫຼມໂຄ້ງສາຍແອວຫຍົກ (Huan Bao He Wan Tu)',
    nameHmong: 'Huan Bao He Wan Tu (Thaj Av Dej Nkhaus Qhwv Tsev - Jade Belt)',
    elementLao: 'ທາດນ້ຳມຸງຄຸນ Jade Water / 坎水',
    elementHmong: 'Zog Dej Jade Belt / 坎水',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນແຫຼມໂຄ້ງຖືກສາຍນ້ຳສາຍແອວຫຍົກໂອບອຸ້ມ 3 ດ້ານ ມະຫາເສດຖີເງິນຄຳຫຼັ່ງໄຫຼເຂົ້າມາບໍ່ຂາດ.',
    summaryHmong: 'Tswv Yim: Thaj av dej jade belt puag 3 sab, nyiaj txiag ntws nkag tsis tu, thaj av zoo tshaj plaws.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານເທິງແຜ່ນດິນ ຝັ່ງຊ້າຍ',
      l2: '• ທາງລົດເຂົ້າ: ແລ່ນສູ່ໃຈກາງແຫຼມ',
      l3: '• ຫ້າມຕັ້ງເຮືອນຝັ່ງນ້ຳແທງ (Fan Gong)',
      l4: '• ທາງຍ່າງຊົມວິວນ້ຳໂອບອຸ້ມ',
      sub1: 'ທາງເຂົ້າ: ດ້ານເທິງແຜ່ນດິນ',
      sub2: '✓ ສາຍນ້ຳໂອບອຸ້ມ 3 ດ້ານ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Pem toj sab laug',
      l2: '• Kev Tsheb: Raws mus rau plawv av',
      l3: '• Txwv tsis nyob sab dej nstab',
      l4: '• Kev taug kev saib dej puag',
      sub1: 'Kev Nkag: Pem toj sab laug',
      sub2: '✓ Dej puag 3 sab nplua mias'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ນ້ຳມຸງຄຸນ (水)',
      l2: '• ✓ ຖືກກັບທຸກຄົນ 100%!',
      l3: '  ດີເລີດ: ກວ້າ 1 坎, 3 震, 4 巽, 9 离',
      l4: '• ✗ ບໍ່ຂັດກັບໃຜ (ດິນເສດຖີແຄມນ້ຳ)',
      l5: '• ນັກທຸລະກິດ, ພໍ່ຄ້າ, ນັກການເງິນ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ນ້ຳເກີດໄມ້: ຊັບສິນເງິນຄຳຫຼັ່ງໄຫຼ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Dej Jade Belt (水)',
      l2: '• ✓ Haum txhua tus neeg 100%!',
      l3: '  Zoo heev: Gua 1 坎, 3 震, 4 巽, 9 离',
      l4: '• ✗ Tsis ntsib kev tsis zoo',
      l5: '• Haum rau neeg ua lag luam loj',
      sub1: 'Tsib Yam Zog: Dej yug Ntoo',
      sub2: 'Nyiaj txiag ntau heev tsis tu'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ໃຈກາງແຫຼມໂຄ້ງ (Center)',
      l2: '• ໄລຍະຖອຍຮົ່ນ: ຫ່າງແຄມຝັ່ງ > 10m',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ສາຍນ້ຳໂຄ້ງໂອບ',
      l4: '• ທິດພິງ (坐): ພິງສັນດິນຫຼັກ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບຫຼັງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Plawv nres av dej puag',
      l2: '• Qhov Deb: Deb ntug dej > 10m',
      l3: '• Ntsia (Xiang): Ntsia dej Jade Belt',
      l4: '• Zaum (Zuo): Zaum nraub qaum toj',
      bed: 'Taub Hau Pw: Phab ntsa tom qab'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ກຳແພງກັນຕາຝັ່ງເຈື່ອນແຂງແຮງ',
      l2: '2. ປູກຕົ້ນໄຜ່ ແລະ ດອກໄມ້ແຄມຝັ່ງ',
      l3: '3. ສວນຫຍ້າຊົມວິວນ້ຳໜ້າເຮືອນ',
      l4: '4. ທ່າເຮືອສ່ວນຕົວກັກເກັບພະລັງ',
      t1: '• ຫ້າມໃຫ້ນ້ຳເຊາະຕາຝັ່ງພັງ',
      t2: '• ຫ້າມສ້າງເຮືອນຕິດແຄມນ້ຳເກີນ',
      t3: '• ຫ້າມໃຫ້ນ້ຳໄຫຼເຊາະກົກເຮືອນ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Phab ntsa thaiv ntug dej ruaj khov',
      l2: '2. Cog xyoob & paj raws ntug dej',
      l3: '3. Tshav nroj ntsuab saib dej pem',
      l4: '4. Chaw nres nkoj khaws zog',
      t1: '• Txwv tsis cia dej เซາະດິນพัง',
      t2: '• Txwv tsis ua tsev ze ntug dej dhau',
      t3: '• Txwv tsis cia dej เซາະ hauv tsev'
    },

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ກາງແຫຼມສາຍແອວຫຍົກ' : 'Plawv Jade Belt';
      const gateText = isLao ? '🚪 ທາງເຂົ້າແຜ່ນດິນ' : '🚪 Qhov Rooj Pem Toj';
      const riverText = isLao ? '✓ ສາຍນ້ຳສາຍແອວຫຍົກ (Jade Belt)' : '✓ Dej Jade Belt';

      return `
        <!-- River encircling peninsula on 3 sides -->
        <path d="M 230 95 C 190 200 210 350 400 350 C 590 350 610 200 570 95"
              stroke="#0284C7" stroke-width="40" fill="none" stroke-linecap="round"/>
        
        <!-- Plot inside peninsula -->
        <path d="M 255 100 C 235 190 250 325 400 325 C 550 325 565 190 545 100 Z"
              fill="#DCFCE7" stroke="#16A34A" stroke-width="3"/>

        <!-- House in center of peninsula -->
        <rect x="340" y="160" width="120" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="330,160 400,135 470,160" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="187" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="204" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="219" width="16" height="6" fill="#1E293B"/>

        <!-- River Label -->
        <rect x="270" y="338" width="260" height="18" rx="4" fill="#0369A1"/>
        <text x="400" y="350" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#FFFFFF" text-anchor="middle">${escapeXml(riverText)}</text>

        <!-- Driveway from Top Mainland -->
        <line x1="320" y1="95" x2="350" y2="160" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- Gate Badge at Top Mainland -->
        <rect x="290" y="85" width="65" height="16" rx="3" fill="#15803D"/>
        <text x="322" y="96" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
      `;
    }
  },

  // 16. LP-0016: Irregular Jagged Plot (Bu Gui Ze Tu)
  {
    id: 'LP-0016',
    score: 25,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບຊົງບໍ່ສະໝ່ຳສະເໝີ ແຂ້ວເລື່ອຍ (Bu Gui Ze Tu)',
    nameHmong: 'Bu Gui Ze Tu (Thaj Av Hniav Saw Tsis Ncaj - Irregular Jagged)',
    elementLao: 'ທາດພິສປັ່ນປ່ວນ Chaotic Sha / 乱煞',
    elementHmong: 'Zog Ntxhov Chaotic Sha / 乱煞',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນແຂ້ວເລື່ອຍສ້າງກະແສລົມປັ່ນປ່ວນ ຕ້ອງສ້າງກຳແພງດັດສີ່ຫຼ່ຽມພາຍໃນ ແລະ ປູກໄມ້ປິດມຸມແຫຼມ.',
    summaryHmong: 'Tswv Yim: Thaj av hniav saw huab cua ntxhov siab, yuav tsum ua phab ntsa xwm meem hauv & cog ntoo kho kaum.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານທີ່ລຽບງ່າຍທີ່ສຸດ',
      l2: '• ຫ່າງຈາກມຸມແຫຼມແຂ້ວເລື່ອຍ',
      l3: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມແທງ',
      l4: '• ປູກຮົ້ວຕົ້ນໄມ້ບັງມຸມແຫຼມ',
      sub1: 'ທາງເຂົ້າ: ດ້ານລຽບປອດໄພ',
      sub2: '⚠️ ຫ່າງໄກຈາກມຸມແຂ້ວເລື່ອຍ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Sab tiaj tus kawg',
      l2: '• Deb ntawm cov hniav saw ntse',
      l3: '• Txwv tsis qhib rau ncov ntse',
      l4: '• Cog ntoo thaiv cov kaum ntse',
      sub1: 'Kev Nkag: Sab tiaj nyab xeeb',
      sub2: '⚠️ Deb ntawm hniav saw nstab'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ພິສປັ່ນປ່ວນ',
      l2: '• ✗ ຂັດແຍ້ງກັບທຸກຄົນໃນຄອບຄົວ!',
      l3: '  ກະແສລົມຕັດກັນ ເກີດຄວາມຄຽດ',
      l4: '• ບໍ່ເໝາະສຳລັບການຢູ່ອາໄສຖ້າບໍ່ແກ້',
      l5: '• ທິດ Bagua ຂາດ-ເກີນຫຼາຍຈຸດ',
      sub1: 'ຜົນກະທົບພະລັງງານ (Impact)',
      sub2: 'ຄວາມວຸ້ນວາຍ, ຜິດຖຽງ, ເຈັບຊຳເຮື້ອ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Ntxhov (Chaotic)',
      l2: '• ✗ Tsis haum txhua tus hauv tsev!',
      l3: '  Huab cua sib tsoo ua rau ntxhov',
      l4: '• Tsis haum rau tsev neeg nyob',
      l5: '• Kaum Bagua poob ntau qhov',
      sub1: 'Tej Kev Txom Nyem (Impact)',
      sub2: 'Sib ceg, ntxhov siab, mob nkeeg'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ໃຈກາງທີ່ດັດສີ່ຫຼ່ຽມໄດ້',
      l2: '• ຫ້າມສ້າງເຮືອນຕິດແຄມແຂ້ວເລື່ອຍ',
      l3: '• ທິດໜ້າ (向): ຫັນຕາມທິດສາກ 90°',
      l4: '• ທິດພິງ (坐): ພິງກຳແພງພາຍໃນ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບສີ່ຫຼ່ຽມ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Plawv av uas faib xwm meem',
      l2: '• Txwv tsis ua tsev ze hniav saw',
      l3: '• Ntsia (Xiang): Ntsia ncaj 90°',
      l4: '• Zaum (Zuo): Zaum phab ntsa hauv',
      bed: 'Taub Hau Pw: Phab ntsa xwm meem'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ກຳແພງດັດສີ່ຫຼ່ຽມພາຍໃນ',
      l2: '2. ປັບມຸມແຫຼມທັງໝົດເປັນສວນດອກໄມ້',
      l3: '3. ຕັ້ງສີລາໄທຊານໃນມຸມແຫຼມຮຸນແຮງ',
      l4: '4. ອ່າງນ້ຳພຸຊະລໍກະແສລົມປັ່ນປ່ວນ',
      t1: '• ຫ້າມສ້າງເຮືອນແຂ້ວເລື່ອຍຕາມດິນ',
      t2: '• ຫ້າມຫ້ອງນອນໃນມຸມແຫຼມ',
      t3: '• ຫ້າມປະຕູກົງແຂ້ວເລື່ອຍ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Phab ntsa faib xwm meem hauv',
      l2: '2. Ua vaj paj rau cov kaum ntse',
      l3: '3. Pob zeb Tai Shan kaum ntse heev',
      l4: '4. Pas dej txo cua ntxhov hauv plawv',
      t1: '• Txwv tsis ua tsev hniav saw raws av',
      t2: '• Txwv tsis pw rau kaum ntse',
      t3: '• Txwv tsis qhib qhov rooj kaum'
    },

    renderCenter(lang) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ກາງສີ່ຫຼ່ຽມດັດພາຍໃນ' : 'Hauv Chaw Xwm Meem';
      const gateText = isLao ? '🚪 ປະຕູຮົ້ວ (Gate)' : '🚪 Qhov Rooj Vag';
      const wallPill = isLao ? '🛡️ ກຳແພງດັດສີ່ຫຼ່ຽມພາຍໃນ' : '🛡️ Phab Ntsa Xwm Meem';

      return `
        <!-- Jagged Boundary (250..560 at y=95..355) -->
        <polygon points="250,95 320,130 380,95 480,140 550,95 520,240 560,300 480,355 380,330 320,355 240,300 270,200"
                 fill="#FEE2E2" stroke="#DC2626" stroke-width="3"/>

        <!-- Internal Regularizing Wall (Rectangular Partition 310..490 at y=130..280) -->
        <rect x="310" y="130" width="180" height="150" fill="#DCFCE7" fill-opacity="0.8" stroke="#15803D" stroke-width="2" stroke-dasharray="6,4"/>
        <rect x="325" y="120" width="150" height="16" rx="3" fill="#15803D"/>
        <text x="400" y="131" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(wallPill)}</text>

        <!-- House seated inside regularized core -->
        <rect x="340" y="145" width="120" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="330,145 400,122 470,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="170" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="186" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="393" y="201" width="14" height="5" fill="#1E293B"/>

        <!-- Driveway from Flat Front -->
        <path d="M 330 355 C 330 310 360 290 380 270" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="5,4"/>

        <!-- Gate Badge -->
        <rect x="300" y="346" width="60" height="16" rx="3" fill="#15803D"/>
        <text x="330" y="357" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(gateText)}</text>
        <line x1="330" y1="385" x2="330" y2="364" stroke="#F59E0B" stroke-width="2"/>
        <polygon points="330,362 327,368 333,368" fill="#F59E0B"/>
      `;
    }
  }
];

// Master Frame Generator for all plots
function generateMasterPlotSvg(p, lang = 'lao') {
  if (p.id === 'LP-0007') {
    // Call the dedicated masterclass scissors renderer for LP-0007
    const testCode = fs.readFileSync('script/render_master_lp0007_test.js', 'utf8');
    const fnStart = testCode.indexOf('function renderLP0007Svg');
    const fnEnd = testCode.indexOf('// Resvg options with real fonts');
    const fnStr = testCode.substring(fnStart, fnEnd);
    const fn = new Function('escapeXml', fnStr + '; return renderLP0007Svg(\"' + lang + '\");');
    return fn(escapeXml);
  }

  const isLao = lang === 'lao';
  const name = isLao ? p.nameLao : p.nameHmong;
  const elementBadge = isLao ? p.elementLao : p.elementHmong;
  const scoreText = isLao ? (p.isGood ? '✓ ດີຫຼາຍ: ' + p.score + ' / 100' : '✗ ໃຫ້ໂທດ: ' + p.score + ' / 100')
                          : (p.isGood ? '✓ ZOO: ' + p.score + ' / 100' : '✗ PHEM: ' + p.score + ' / 100');
  const summaryText = isLao ? p.summaryLao : p.summaryHmong;

  const ent = isLao ? p.entranceLao : p.entranceHmong;
  const gua = isLao ? p.guaLao : p.guaHmong;
  const hse = isLao ? p.houseLao : p.houseHmong;
  const rem = isLao ? p.remedyLao : p.remedyHmong;

  const xuanWuText = isLao ? '✓ ເຕົ່າດຳ (Xuan Wu): ຫຼັງພິງແໜ້ນໜາ ຕົ້ນສົນ 5 ຕົ້ນ' : '✓ Xuan Wu: Phab Ntsa & Ntoo Thuv 5 Tsob';
  const roadText = isLao ? 'ຖະໜົນໃຫຍ່ດ້ານໜ້າ (Facing Main Road)' : 'Txoj Kev Tsheb Pem Hauv Ntej (Main Road)';

  return \`
<svg width="800" height="480" viewBox="0 0 800 480" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" stroke-width="0.7"/>
    </pattern>
    <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
  </defs>

  <!-- Clean Background -->
  <rect width="800" height="480" fill="#F8FAFC"/>
  <rect width="800" height="480" fill="url(#grid)" opacity="0.65"/>

  <!-- ========================================================================= -->
  <!-- TOP SLIM HUD BAR (y=8 to 42) -->
  <!-- ========================================================================= -->
  <rect x="18" y="8" width="764" height="34" rx="8" fill="#FFFFFF" stroke="\${p.isGood ? '#16A34A' : '#DC2626'}" stroke-width="1.8" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.06))"/>
  <rect x="24" y="13" width="75" height="24" rx="5" fill="\${p.isGood ? '#15803D' : '#DC2626'}"/>
  <text x="61" y="29" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="12" fill="#FFFFFF" text-anchor="middle">\${p.id}</text>
  <text x="110" y="30" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="12" fill="#0F172A">\${escapeXml(name)}</text>
  
  <!-- Element Badge -->
  <rect x="495" y="13" width="130" height="24" rx="5" fill="#FEF3C7" stroke="#D97706" stroke-width="1"/>
  <text x="560" y="29" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#B45309" text-anchor="middle">🌍 \${escapeXml(elementBadge)}</text>

  <!-- Score Badge -->
  <rect x="635" y="13" width="140" height="24" rx="5" fill="\${p.isGood ? '#166534' : '#991B1B'}"/>
  <text x="705" y="29" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">\${escapeXml(scoreText)}</text>

  <!-- ========================================================================= -->
  <!-- LEFT COLUMN: 2 STRUCTURED CARDS (X=18 to 182) -->
  <!-- ========================================================================= -->

  <!-- Top-Left Card: Entrance & Green Dragon (Y=48 to 198) -->
  <rect x="18" y="48" width="164" height="150" rx="7" fill="#F0FDF4" stroke="#16A34A" stroke-width="1.4" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.06))"/>
  <rect x="18" y="48" width="164" height="24" rx="7" fill="#16A34A"/>
  <text x="100" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#FFFFFF" text-anchor="middle">\${escapeXml(ent.title)}</text>
  <text x="26" y="88" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#166534">\${escapeXml(ent.l1)}</text>
  <text x="26" y="106" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#166534">\${escapeXml(ent.l2)}</text>
  <text x="26" y="124" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#166534">\${escapeXml(ent.l3)}</text>
  <text x="26" y="142" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#B91C1C">\${escapeXml(ent.l4)}</text>
  <rect x="26" y="156" width="148" height="32" rx="4" fill="#DCFCE7"/>
  <text x="100" y="170" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">\${escapeXml(ent.sub1)}</text>
  <text x="100" y="182" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#166534" text-anchor="middle">\${escapeXml(ent.sub2)}</text>

  <!-- Bottom-Left Card: Gua & Elemental Match (Y=206 to 395) -->
  <rect x="18" y="206" width="164" height="190" rx="7" fill="#FEFCE8" stroke="#CA8A04" stroke-width="1.4" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.06))"/>
  <rect x="18" y="206" width="164" height="24" rx="7" fill="#CA8A04"/>
  <text x="100" y="222" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#FFFFFF" text-anchor="middle">\${escapeXml(gua.title)}</text>
  <text x="26" y="246" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#854D0E">\${escapeXml(gua.l1)}</text>
  <text x="26" y="264" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#15803D">\${escapeXml(gua.l2)}</text>
  <text x="26" y="280" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#166534">\${escapeXml(gua.l3)}</text>
  <text x="26" y="300" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#0284C7">\${escapeXml(gua.l4)}</text>
  <text x="26" y="318" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#475569">\${escapeXml(gua.l5)}</text>
  
  <rect x="26" y="338" width="148" height="48" rx="4" fill="#FEF3C7"/>
  <text x="100" y="352" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#B45309" text-anchor="middle">\${escapeXml(gua.sub1)}</text>
  <text x="100" y="366" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#92400E" text-anchor="middle">\${escapeXml(gua.sub2)}</text>

  <!-- ========================================================================= -->
  <!-- RIGHT COLUMN: 2 STRUCTURED CARDS (X=618 to 782) -->
  <!-- ========================================================================= -->

  <!-- Top-Right Card: House & Orientation (Y=48 to 198) -->
  <rect x="618" y="48" width="164" height="150" rx="7" fill="#F0F9FF" stroke="#0284C7" stroke-width="1.4" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.06))"/>
  <rect x="618" y="48" width="164" height="24" rx="7" fill="#0284C7"/>
  <text x="700" y="64" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#FFFFFF" text-anchor="middle">\${escapeXml(hse.title)}</text>
  <text x="626" y="88" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#0369A1">\${escapeXml(hse.l1)}</text>
  <text x="626" y="106" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#0369A1">\${escapeXml(hse.l2)}</text>
  <text x="626" y="124" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#0369A1">\${escapeXml(hse.l3)}</text>
  <text x="626" y="142" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#0369A1">\${escapeXml(hse.l4)}</text>
  <rect x="626" y="156" width="148" height="32" rx="4" fill="#E0F2FE"/>
  <text x="700" y="170" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">\${escapeXml(hse.bed)}</text>
  <text x="700" y="182" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7" fill="#0284C7" text-anchor="middle">ພິງຝາທຶບ ຫຼີກລ່ຽງກົງປ່ອງຢ້ຽມ</text>

  <!-- Bottom-Right Card: Remedies & Rules (Y=206 to 395) -->
  <rect x="618" y="206" width="164" height="190" rx="7" fill="#FDF4FF" stroke="#A855F7" stroke-width="1.4" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.06))"/>
  <rect x="618" y="206" width="164" height="24" rx="7" fill="#A855F7"/>
  <text x="700" y="222" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#FFFFFF" text-anchor="middle">\${escapeXml(rem.title)}</text>
  <text x="626" y="246" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">\${escapeXml(rem.l1)}</text>
  <text x="626" y="264" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">\${escapeXml(rem.l2)}</text>
  <text x="626" y="282" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">\${escapeXml(rem.l3)}</text>
  <text x="626" y="300" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#6B21A8">\${escapeXml(rem.l4)}</text>
  
  <rect x="626" y="318" width="148" height="68" rx="4" fill="#F3E8FF"/>
  <text x="700" y="332" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#7E22CE" text-anchor="middle">ຂໍ້ຫ້າມເດັດຂາດ (Taboos)</text>
  <text x="700" y="346" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">\${escapeXml(rem.t1)}</text>
  <text x="700" y="360" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">\${escapeXml(rem.t2)}</text>
  <text x="700" y="374" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#9333EA" text-anchor="middle">\${escapeXml(rem.t3)}</text>

  <!-- ========================================================================= -->
  <!-- CENTER: PLOT DRAWING (X=205 to 595, Y=48 to 395) -->
  <!-- ========================================================================= -->

  <!-- Xuan Wu Top Pill (Centered at Y=48) -->
  <rect x="235" y="48" width="330" height="20" rx="4" fill="#F0FDF4" stroke="#15803D" stroke-width="1.2"/>
  <text x="400" y="62" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="9" fill="#14532D" text-anchor="middle">\${escapeXml(xuanWuText)}</text>

  <!-- Row of 5 tall protective pine trees along rear boundary -->
  <circle cx="280" cy="80" r="9" fill="#14532D"/>
  <circle cx="340" cy="76" r="10" fill="#166534"/>
  <circle cx="400" cy="74" r="11" fill="#14532D"/>
  <circle cx="460" cy="76" r="10" fill="#166534"/>
  <circle cx="520" cy="80" r="9" fill="#14532D"/>

  <!-- CENTRAL ARCHITECTURAL PLOT DRAWING -->
  \${p.renderCenter(lang)}

  <!-- ========================================================================= -->
  <!-- MAIN ROADWAY (Y=388 to 442) -->
  <!-- ========================================================================= -->
  <rect x="0" y="388" width="800" height="54" fill="url(#roadGrad)"/>
  <line x1="0" y1="415" x2="800" y2="415" stroke="#FDE047" stroke-width="2" stroke-dasharray="16,10"/>
  <line x1="0" y1="392" x2="800" y2="392" stroke="#F8FAFC" stroke-width="1" stroke-dasharray="8,6"/>
  
  <text x="400" y="412" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#F8FAFC" text-anchor="middle">&#10140; \${escapeXml(roadText)} &#10140;</text>

  <!-- ========================================================================= -->
  <!-- BOTTOM DOCTRINAL SUMMARY CARD (Y=448 to 474) -->
  <!-- ========================================================================= -->
  <rect x="18" y="448" width="764" height="26" rx="5" fill="#1E293B"/>
  <text x="400" y="465" font-family="'Phetsarath OT', 'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="9.5" fill="#F8FAFC" text-anchor="middle">\${escapeXml(summaryText)}</text>
</svg>
\`;
}

// Master Render Function
function renderAllMasterPlots() {
  console.log('Starting Masterclass Vector Generation for ALL 16 Land Plots at 800x480...');
  
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

  masterPlots.forEach(p => {
    // 1. Render Lao
    const svgLao = generateMasterPlotSvg(p, 'lao');
    const resvgL = new Resvg(svgLao, resvgOpts);
    const pngL = resvgL.render().asPng();
    const outLao = path.join(laoDir, p.id + '.png');
    fs.writeFileSync(outLao, pngL);

    // 2. Render Hmong
    const svgHmong = generateMasterPlotSvg(p, 'hmong');
    const resvgH = new Resvg(svgHmong, resvgOpts);
    const pngH = resvgH.render().asPng();
    const outHmong = path.join(hmongDir, p.id + '.png');
    const outCases = path.join(casesDir, p.id + '.png');
    fs.writeFileSync(outHmong, pngH);
    fs.writeFileSync(outCases, pngH);

    console.log('  ✓ Successfully rendered ' + p.id + ' [Lao + Hmong] (800x480 Masterclass)');
  });

  console.log('\\n🎉 ALL 16 Master Land Plots successfully rendered to lao/img/, hmong/img/, and book_figures/cases_6126/!');
}

renderAllMasterPlots();
`;

// Append part2Code to render_all_16_masterclass_plots.js
let code = fs.readFileSync('script/render_all_16_masterclass_plots.js', 'utf8');
code = code.replace("console.log('Plots defined so far in generator: LP-0001 to LP-0006');", part2Code);
fs.writeFileSync('script/render_all_16_masterclass_plots.js', code, 'utf8');
console.log('✅ Assembled script/render_all_16_masterclass_plots.js');
