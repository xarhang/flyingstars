// plots_data_part2.js
// Masterclass definitions for LP-0009 through LP-0016
// 100% Comprehensive 4-Card Doctrine + Resvg High-Precision Vector Geometries

module.exports = [
  // 9. LP-0009: Qiang Xing Tu / L-Shape Plot
  {
    id: 'LP-0009',
    score: 30,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບປືນ / ໂຕແອວ ຂາດມຸມ (Qiang Xing / L-Shape Plot)',
    nameHmong: 'Qiang Xing Tu (Thaj Av Tus Phom - L-Shape Plot)',
    elementLao: 'ທາດທອງຫັກ & ມຸມຂາດ (Broken Metal & Missing Sector Sha)',
    elementHmong: 'Zog Kub Txiav & Poob Kaum (Broken Metal)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບປືນ/ໂຕແອວຂາດມຸມເກີນ 30% ສ້າງພະລັງພິສເລັງໃສ່ບໍລິເວນມຸມຫັກ ຕ້ອງເຕັມມຸມຂາດດ້ວຍແນວໄມ້ ແລະ ເສົາໄຟ.',
    summaryHmong: 'Tswv Yim: Thaj av tus phom poob kaum tshaj 30% tsim zog phem ntsia plawv kaum txiav yuav tsum kho nrog hav ntoo & ncej fais (ncej hluav taws xob).',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ປີກຫຼັກ',
      l1: '• ປະຕູຮົ້ວ: ຕັ້ງດ້ານໜ້າປີກໃຫຍ່',
      l2: '• ຝັ່ງມັງກອນຂຽວ ຫ່າງມຸມ 3m',
      l3: '• ຫ້າມເປີດປະຕູກົງມຸມຫັກໂຕແອວ',
      l4: '• ທາງລົດເຂົ້າ: ໂຄ້ງໃນປີກໃຫຍ່',
      sub1: 'ທາງລົດເຂົ້າ: ປີກໃຫຍ່ມັງກອນຂຽວ',
      sub2: '✗ ຫ້າມເປີດປະຕູກົງມຸມຫັກໂຕ L'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & TIS LOJ',
      l1: '• Qhov Rooj Loj: Phab tis loj',
      l2: '• Sab Laug Zaj deb kaum 3m',
      l3: '• Txwv tsis qhib rau kaum txiav',
      l4: '• Kev Tsheb: Nkhaus phab tis loj',
      sub1: 'Kev Nkag: Sab Laug Tis Loj',
      sub2: '✗ Txwv tsis qhib rau kaum L'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດທອງຫັກ & ມຸມຂາດ',
      l2: '• ✗ ບໍ່ຖືກກັບ: ທຸກຄົນ (ຖ້າບໍ່ແກ້)',
      l3: '• ຂາດຕາເວັນຕົກສ່ຽງເໜືອກະທົບພໍ່ (6 乾)',
      l4: '• ຂາດຕາເວັນຕົກສ່ຽງໃຕ້ກະທົບແມ່ (2 坤)',
      l5: '• ຂາດຕາເວັນອອກກະທົບລູກກົກ (3 震)',
      sub1: 'ຜົນກະທົບ: ຂາດທິດ Bagua ຫຼັກ',
      sub2: 'ສຸຂະພາບຊຸດໂຊມ, ເງິນຮົ່ວໄຫຼ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Kub Txiav & Poob Kaum',
      l2: '• ✗ Tsis haum: Txhua tus neeg',
      l3: '• Poob NW raug leej txiv (Gua 6 乾)',
      l4: '• Poob SW raug leej niam (Gua 2 坤)',
      l5: '• Poob Sab Hnub Tuaj raug tub hlob',
      sub1: 'Kev Txom Nyem: Poob kaum Bagua',
      sub2: 'Mob nkeeg, poob nyiaj txiag'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງໃນປີກໃຫຍ່ສີ່ຫຼ່ຽມ',
      l2: '• ຫ້າມສ້າງເຮືອນຂວາງຮອຍຕໍ່ມຸມຫັກ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ລານໜ້າປີກໃຫຍ່',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງປີກໃຫຍ່ທີ່ແໜ້ນ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບໃນປີກໃຫຍ່'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv tis loj 4 fab',
      l2: '• Txwv tsis tso tsev hla kaum txiav',
      l3: '• Ntsia (Xiang): Ntsia tshav tis loj',
      l4: '• Zaum (Zuo): Zaum phab tis loj',
      bed: 'Taub Hau Pw: Phab ntsa tis loj'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ປູກແນວໄມ້ພຸ່ມເຕັມມຸມຂາດໃຫ້ເປັນ 4 ຫຼ່ຽມ',
      l2: '2. ຕັ້ງເສົາໄຟສະຫວ່າງສູງທີ່ມຸມຕັດທີ່ຂາດ',
      l3: '3. ປັບມຸມຂາດເປັນສວນດອກໄມ້/ສາລາ',
      l4: '4. ແຍກສ່ວນດິນເປັນ 2 ໂຊນຈະແຈ້ງ',
      t1: '• ຫ້າມສ້າງຫ້ອງນອນກົງມຸມຫັກໂຕ L',
      t2: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມພາຍໃນ',
      t3: '• ຫ້າມຂຸດໜອງນ້ຳກົງມຸມຕັດ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Cog hav ntoo sau puv kaum poob',
      l2: '2. Tso ncej fais (hluav taws xob) kaum nraud',
      l3: '3. Ua vaj paj / tsev so kaum poob',
      l4: '4. Faib thaj av ua 2 feem meej',
      t1: '• Txwv tsis tso chav pw kaum txiav',
      t2: '• Txwv tsis qhib qhov rooj kaum L',
      t3: '• Txwv tsis khawb pas dej kaum txiav'
    },

        renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໃຫຍ່ຫຼັງ' : 'Chav Loj Tom Qab';
      const waterText = isLao ? '✓ ໜອງນ້ຳໜ້າເຮືອນ' : '✓ Pas Dej Pem';
      const missingText = isLao ? '⚠️ ມຸມທີ່ຂາດຫາຍ (Missing Sector)' : '⚠️ Kaum Poob (Missing Sector)';
      const hedgeText = isLao ? '🌲 ແນວໄມ້ເຕັມມຸມຂາດ' : '🌲 Hav Ntoo Kho Kaum';
      const lightText = isLao ? '💡 ເສົາໄຟແສງສະຫວ່າງ' : '💡 Ncej Fais (Hluav Taws Xob)';

      return `
        <!-- Missing Sector (Yellow hatched fill) -->
        <rect x="420" y="95" width="125" height="135" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6,4"/>
        <text x="482" y="155" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#B45309" text-anchor="middle">${escapeXml(missingText)}</text>
        <line x1="420" y1="95" x2="545" y2="230" stroke="#F59E0B" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="545" y1="95" x2="420" y2="230" stroke="#F59E0B" stroke-width="1" stroke-dasharray="3,3"/>

        <!-- Light Pole at outer missing corner (x=545, y=95) -->
        <circle cx="545" cy="95" r="9" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        <text x="545" y="98" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FFFFFF" text-anchor="middle">💡</text>
        <rect x="460" y="78" width="85" height="14" rx="3" fill="#B45309"/>
        <text x="502" y="88" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(lightText)}</text>

        <!-- Living Plot L-Shape Boundary Ground -->
        <path d="M 255 95 L 420 95 L 420 230 L 545 230 L 545 355 L 255 355 Z" fill="#FEE2E2"/>
        <path d="M 260 100 L 415 100 L 415 235 L 540 235 L 540 350 L 260 350 Z" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Perimeter Fences -->
        <line x1="255" y1="95" x2="420" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="255" y1="95" x2="255" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="420" y1="95" x2="420" y2="230" stroke="#DC2626" stroke-width="3"/>
        <line x1="420" y1="230" x2="545" y2="230" stroke="#DC2626" stroke-width="3"/>
        <line x1="545" y1="230" x2="545" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Buffer Hedge filling the missing sector boundary -->
        <line x1="420" y1="95" x2="545" y2="95" stroke="#15803D" stroke-width="5" stroke-dasharray="6,4"/>
        <line x1="545" y1="95" x2="545" y2="230" stroke="#15803D" stroke-width="5" stroke-dasharray="6,4"/>
        <circle cx="445" cy="95" r="6" fill="#16A34A"/>
        <circle cx="485" cy="95" r="6" fill="#16A34A"/>
        <circle cx="525" cy="95" r="6" fill="#16A34A"/>
        <circle cx="545" cy="130" r="6" fill="#16A34A"/>
        <circle cx="545" cy="170" r="6" fill="#16A34A"/>
        <circle cx="545" cy="210" r="6" fill="#16A34A"/>
        <rect x="430" y="105" width="95" height="14" rx="3" fill="#15803D"/>
        <text x="477" y="115" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(hedgeText)}</text>

        <!-- House seated inside the large rectangular wing -->
        <rect x="280" y="115" width="115" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="270,115 337,90 405,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="337" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="337" y="159" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="330" y="174" width="14" height="6" fill="#1E293B"/>

        <!-- Compass Axis Badge inside main wing -->
        <g transform="translate(375, 120)">
          <rect x="0" y="0" width="34" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="17" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="17" y1="17" x2="17" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="17,36 14,30 20,30" fill="#0284C7"/>
          <text x="17" y="46" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- Semicircular Ming Tang Pond in front of main house -->
        <path d="M 310 215 A 30 18 0 0 0 370 215 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
        <text x="340" y="210" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${escapeXml(waterText)}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING ON DRAGON SIDE -->
        <line x1="255" y1="355" x2="285" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="335" y1="355" x2="545" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="281" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="331" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="285" y1="355" x2="295" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="335" y1="355" x2="325" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE -->
        <path d="M 310 395 L 310 355 C 310 300 320 270 340 240" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO GATE ON FENCE) -->
        <g transform="translate(265, 363)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="45" y1="0" x2="45" y2="-6" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="45" cy="-6" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO MISSING SECTOR NOTCH) -->
        <g transform="translate(420, 238)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-6" r="2" fill="#DC2626"/>
        </g>

        <!-- Trees in lower wing courtyard -->
        <circle cx="480" cy="280" r="10" fill="#16A34A"/>
        <circle cx="510" cy="300" r="8" fill="#CA8A04"/>
        <circle cx="450" cy="320" r="7" fill="#16A34A"/>
      `;
    }
  },

  // 10. LP-0010: T-Shape Tu (Hammer T-Shape Plot)
  {
    id: 'LP-0010',
    score: 35,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບຄ້ອນຕີ / ໂຕທີ (T-Shape Tu - Hammer T Plot)',
    nameHmong: 'T-Shape Tu (Thaj Av Tus T - Hammer T-Shape Plot)',
    elementLao: 'ທາດດິນປະທະ & ທາດພິສຄ້ອນຕີ (Hammer Earth Sha)',
    elementHmong: 'Zog Av Tsoo (Hammer Earth Sha)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບຄ້ອນຕີມີແຮງກົດດັນບໍ່ສະໝ່ຳສະເໝີ ສ່ວນລຳຄ້ອນສ້າງກະແສລົມພຸ່ງຊົນ ຕ້ອງແຍກດິນເປັນ 2 ສ່ວນດ້ວຍແນວຮົ້ວ.',
    summaryHmong: 'Tswv Yim: Thaj av tus T muaj zog nias tsis sib npaug tus ncej tsim cua tshuab tsoo yuav tsum faib av ua 2 feem nrog phab ntsa.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ສ່ວນລຳຄ້ອນ',
      l1: '• ປະຕູຮົ້ວ: ຢູ່ດ້ານໜ້າສ່ວນລຳຄ້ອນ',
      l2: '• ຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)',
      l3: '• ທາງລົດເຂົ້າ: ໂຄ້ງຊະລໍຄວາມໄວ',
      l4: '• ປູກໄມ້ບັງສອງຂ້າງທາງລົດ',
      sub1: 'ທາງລົດເຂົ້າ: ຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)',
      sub2: '✓ ປູກໄມ້ຊະລໍກະແສລົມລຳຄ້ອນ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & TUS NCEJ',
      l1: '• Qhov Rooj Loj: Pem tus ncej',
      l2: '• Sab Laug Zaj (phab laug)',
      l3: '• Kev Tsheb: Nkhaus mos muag',
      l4: '• Cog ntoo thaiv 2 sab kev',
      sub1: 'Kev Nkag: Sab Laug (Dragon)',
      sub2: '✓ Cog ntoo txo cua ntsawj'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດດິນປະທະ (土)',
      l2: '• ✗ ບໍ່ຖືກກັບ: ທຸກຄົນໃນຄອບຄົວ',
      l3: '• ພະລັງງານຕິດຂັດຢູ່ຮອຍຕໍ່ໂຕ T',
      l4: '• ເຮັດໃຫ້ເກີດຄວາມເຄັ່ງຕຶງ ແລະ ຜິດຖຽງ',
      l5: '• ຕ້ອງແບ່ງດິນຈຶ່ງຈະຢູ່ໄດ້ຢ່າງສະຫງົບ',
      sub1: 'ຜົນກະທົບ: ແຮງກົດດັນຄ້ອນຕີ',
      sub2: 'ຄວາມຄຽດ, ປວດຫົວ, ຄອບຄົວແຕກແຍກ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Av Tsoo (Hammer)',
      l2: '• ✗ Tsis haum: Txhua tus hauv tsev',
      l3: '• Zog daig ntawm kaum tshuam T',
      l4: '• Tsim kev ntxhov siab & sib cav',
      l5: '• Yuav tsum faib thaj av thiaj nyob tau',
      sub1: 'Kev Txom Nyem: Zog rauj nias',
      sub2: 'Sab siab, mob taub hau, sib cais'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງໃນສ່ວນຫົວຄ້ອນໃຫຍ່',
      l2: '• ຫ້າມສ້າງເຮືອນກົງຮອຍຕໍ່ໂຕ T',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ລານກາງ',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງຫົວຄ້ອນທີ່ກວ້າງ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບສ່ວນຫົວຄ້ອນ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv taub hau rauj dav',
      l2: '• Txwv tsis tso tsev rau kaum tshuam',
      l3: '• Ntsia (Xiang): Ntsia tshav nruab nrab',
      l4: '• Zaum (Zuo): Zaum phab taub hau rauj',
      bed: 'Taub Hau Pw: Phab ntsa taub hau rauj'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ສ້າງກຳແພງ/ຮົ້ວໄມ້ແຍກ 2 ສ່ວນຈະແຈ້ງ',
      l2: '2. ປັບສ່ວນລຳຄ້ອນເປັນສວນ & ບ່ອນຈອດລົດ',
      l3: '3. ວາງເຮືອນສະເພາະສ່ວນຫົວຄ້ອນທີ່ກວ້າງ',
      l4: '4. ຕັ້ງນ້ຳພຸວົງມົນຊະລໍລົມທີ່ຮອຍຕໍ່',
      t1: '• ຫ້າມສ້າງເຮືອນຂວາງຮອຍຕໍ່ໂຕ T',
      t2: '• ຫ້າມເປີດປະຕູກົງມຸມຫັກສອງຂ້າງ',
      t3: '• ຫ້າມຂຸດໜອງນ້ຳກົງລຳຄ້ອນ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Ua phab ntsa/hav ntoo faib 2 feem',
      l2: '2. Ua vaj paj & chaw nres tsheb ncej',
      l3: '3. Tso tsev rau feem taub hau xwb',
      l4: '4. Tso pas dej voj kheej txo cua',
      t1: '• Txwv tsis tso tsev hla kaum tshuam T',
      t2: '• Txwv tsis qhib qhov rooj kaum txiav',
      t3: '• Txwv tsis khawb pas dej tus ncej'
    },

        renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ວາງໃນຫົວຄ້ອນ' : 'Nyob Taub Rauj';
      const waterText = isLao ? '✓ ນ້ຳພຸວົງມົນ' : '✓ Pas Dej Kheej';
      const divideText = isLao ? '🛡️ ກຳແພງແຍກສ່ວນດິນ' : '🛡️ Phab Ntsa Faib Av';
      const gardenText = isLao ? '🌳 ສວນ & ບ່ອນຈອດລົດ' : '🌳 Vaj & Chaw Tsheb';

      return `
        <!-- T-Shape Polygon Ground -->
        <polygon points="240,95 560,95 560,200 460,200 460,355 340,355 340,200 240,200" fill="#FEE2E2"/>
        <polygon points="245,100 555,100 555,195 455,195 455,350 345,350 345,195 245,195" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Perimeter Fences -->
        <line x1="240" y1="95" x2="560" y2="95" stroke="#15803D" stroke-width="4.5"/>
        <line x1="240" y1="95" x2="240" y2="200" stroke="#334155" stroke-width="3"/>
        <line x1="240" y1="200" x2="340" y2="200" stroke="#DC2626" stroke-width="3"/>
        <line x1="340" y1="200" x2="340" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="560" y1="95" x2="560" y2="200" stroke="#334155" stroke-width="3"/>
        <line x1="560" y1="200" x2="460" y2="200" stroke="#DC2626" stroke-width="3"/>
        <line x1="460" y1="200" x2="460" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Internal Dividing Wall separating Crossbar from Stem -->
        <line x1="340" y1="200" x2="460" y2="200" stroke="#15803D" stroke-width="5"/>
        <rect x="350" y="192" width="100" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="203" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(divideText)}</text>

        <!-- Main House in Crossbar -->
        <rect x="335" y="105" width="130" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,105 400,82 475,105" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="130" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="146" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="159" width="16" height="6" fill="#1E293B"/>

        <!-- Compass Axis Badge -->
        <g transform="translate(478, 110)">
          <rect x="0" y="0" width="36" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="18" y1="16" x2="18" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,34 15,28 21,28" fill="#0284C7"/>
          <text x="18" y="44" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- Circular Fountain at junction -->
        <circle cx="400" cy="180" r="14" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
        <circle cx="400" cy="180" r="5" fill="#0284C7"/>

        <!-- Stem Courtyard: Garden trees & Driveway -->
        <rect x="350" y="240" width="100" height="15" rx="3" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1"/>
        <text x="400" y="251" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#B45309" text-anchor="middle">${escapeXml(gardenText)}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING IN STEM BASE (Y=355) -->
        <line x1="340" y1="355" x2="375" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="425" y1="355" x2="460" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="371" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="421" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="375" y1="355" x2="385" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="425" y1="355" x2="415" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE -->
        <path d="M 400 395 L 400 355 C 400 310 390 260 395 210" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO GATE ON FENCE) -->
        <g transform="translate(355, 363)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="45" y1="0" x2="45" y2="-6" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="45" cy="-6" r="2" fill="#15803D"/>
        </g>

        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO INNER NOTCH) -->
        <g transform="translate(465, 208)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="0" y1="9" x2="-6" y2="9" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-6" cy="9" r="2" fill="#DC2626"/>
        </g>

        <!-- Side trees in crossbar wings -->
        <circle cx="280" cy="140" r="10" fill="#16A34A"/>
        <circle cx="310" cy="150" r="8" fill="#16A34A"/>
        <circle cx="490" cy="170" r="9" fill="#CA8A04"/>
        <circle cx="525" cy="140" r="10" fill="#16A34A"/>
      `;
    }
  },

  // 11. LP-0011: Ling Xing Tu (Rhombus Slanted / Diamond Plot)
  {
    id: 'LP-0011',
    score: 40,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບເຂົ້າຫຼາມຕັດ (Ling Xing Tu - Rhombus Slanted Plot)',
    nameHmong: 'Ling Xing Tu (Thaj Av Pob Zeb Diamond - Rhombus Slanted)',
    elementLao: 'ທາດໄມ້ບ້ຽວ (Slanted Wood Element Sha)',
    elementHmong: 'Zog Ntoo Tsis Ncaj (Slanted Wood Sha)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບເຂົ້າຫຼາມຕັດມີມຸມແຫຼມ ແລະ ມຸມປ້ານ ບໍ່ຕັ້ງສາກ 90° ອາຄານຫຼັກຕ້ອງສ້າງຕັ້ງສາກ 90° ແລະ ປູກໄມ້ລົບມຸມແຫຼມ.',
    summaryHmong: 'Tswv Yim: Thaj av pob zeb diamond muaj kaum ntse tsis yog 90° lub tsev yuav tsum tsim 90° ncaj & cog ntoo kho kaum ntse.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມຸມປອດໄພ',
      l1: '• ປະຕູຮົ້ວ: ຢູ່ດ້ານໜ້າຝັ່ງມຸມປ້ານ',
      l2: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມ',
      l3: '• ທາງລົດເຂົ້າ: ໂຄ້ງຊະລໍຄວາມໄວ',
      l4: '• ປູກໄມ້ພຸ່ມບັງມຸມແຫຼມສອງຂ້າງ',
      sub1: 'ທາງລົດເຂົ້າ: ຝັ່ງມັງກອນມຸມປ້ານ',
      sub2: '✗ ຫ້າມເປີດປະຕູກົງມຸມແຫຼມສ້ຽມ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & KAUM ZOO',
      l1: '• Qhov Rooj Loj: Pem kaum dav',
      l2: '• Txwv tsis qhib rau kaum ntse',
      l3: '• Kev Tsheb: Nkhaus mos muag',
      l4: '• Cog hav ntoo thaiv kaum ntse',
      sub1: 'Kev Nkag: Sab Laug Kaum Dav',
      sub2: '✗ Txwv tsis qhib rau kaum ntse'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດໄມ້ບ້ຽວ (木)',
      l2: '• ✗ ບໍ່ຖືກກັບ: ຄົນທາດດິນ & ທາດທອງ',
      l3: '• ມຸມບ້ຽວສ້າງກະແສລົມຕັດຂວາງ',
      l4: '• ເຮັດໃຫ້ຈິດໃຈບໍ່ສະຫງົບ ຕັດສິນໃຈຜິດພາດ',
      l5: '• ຄົນທາດໄມ້ (3, 4) ຢູ່ໄດ້ຖ້າແກ້ໄຂມຸມແຫຼມ',
      sub1: 'ຜົນກະທົບ: ພະລັງງານບ້ຽວ',
      sub2: 'ລາຍຈ່າຍຮົ່ວໄຫຼ, ອຸບັດຕິເຫດ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Ntoo Tsis Ncaj (Wood)',
      l2: '• ✗ Tsis haum: Neeg Zog Av & Kub',
      l3: '• Kaum nqes tsim cua ntsawj txiav',
      l4: '• Tsis nyob tus siab, txiav txim siab yuam kev',
      l5: '• Neeg Zog Ntoo (3, 4) nyob tau yog kho',
      sub1: 'Kev Txom Nyem: Zog qaij',
      sub2: 'Poob nyiaj, ntsib xwm txheej'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງກາງຕອນດິນ ຕັ້ງສາກ 90°',
      l2: '• ຫ້າມສ້າງເຮືອນບ້ຽວຕາມແນວຕອນດິນ',
      l3: '• ທິດໜ້າ (向): ຫັນຕາມທິດເຂັມທິດຫຼັກ',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງທີ່ຕັ້ງສາກ 90°',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບຕາມແກນ 90°'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv plawv 90° ncaj',
      l2: '• Txwv tsis tso tsev qaij raws ciam av',
      l3: '• Ntsia (Xiang): Ntsia raws koob qhia kev',
      l4: '• Zaum (Zuo): Zaum phab ntsa 90° ncaj',
      bed: 'Taub Hau Pw: Phab ntsa 90° ncaj'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ສ້າງເຮືອນສີ່ຫຼ່ຽມຕັ້ງສາກ 90° ເດັດຂາດ',
      l2: '2. ປູກຕົ້ນໄມ້ພຸ່ມໜາແໜ້ນລົບມຸມແຫຼມທັງສອງ',
      l3: '3. ຕັ້ງສີລາໄທຊານໃນມຸມແຫຼມທີ່ສ້ຽມ',
      l4: '4. ຂຸດໜອງນ້ຳວົງມົນກາງລານໜ້າ',
      t1: '• ຫ້າມສ້າງເຮືອນຮູບເຂົ້າຫຼາມຕັດຕາມດິນ',
      t2: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມ',
      t3: '• ຫ້າມວາງຕຽງນອນຕິດຝາບ້ຽວ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Tsim lub tsev 90° ncaj nraim xwb',
      l2: '2. Cog hav ntoo tuab thaiv 2 kaum ntse',
      l3: '3. Pob zeb Tai Shan rau kaum ntse',
      l4: '4. Pas dej kheej nruab nrab tshav',
      t1: '• Txwv tsis tsim tsev qaij raws av',
      t2: '• Txwv tsis qhib qhov rooj kaum ntse',
      t3: '• Txwv tsis tso txaj pw phab ntsa qaij'
    },

        renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ (90° ສາກ)' : 'Lub Tsev (90° Ncaj)';
      const houseSub = isLao ? 'ສ້າງຕັ້ງສາກ ບໍ່ບ້ຽວຕາມດິນ' : 'Tsim Ncaj Tsis Qaij';
      const waterText = isLao ? '✓ ໜອງນ້ຳວົງມົນ' : '✓ Pas Dej Kheej';
      const cornerRemedy = isLao ? '🌲 ໄມ້ລົບມຸມແຫຼມ' : '🌲 Ntoo Thaiv Kaum';

      return `
        <!-- Rhombus / Diamond Plot Ground -->
        <polygon points="320,95 540,95 480,355 260,355" fill="#FEF2F2"/>
        <polygon points="325,100 535,100 475,350 265,350" fill="none" stroke="#F87171" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Rear & Side Perimeter Fences -->
        <line x1="320" y1="95" x2="540" y2="95" stroke="#15803D" stroke-width="4"/>
        <line x1="260" y1="355" x2="320" y2="95" stroke="#DC2626" stroke-width="3"/>
        <line x1="480" y1="355" x2="540" y2="95" stroke="#DC2626" stroke-width="3"/>

        <!-- Corner Rounding Trees & Tai Shan stones at Acute Corners -->
        <circle cx="280" cy="335" r="14" fill="#15803D"/>
        <circle cx="295" cy="315" r="10" fill="#166534"/>
        <circle cx="520" cy="115" r="14" fill="#15803D"/>
        <circle cx="505" cy="135" r="10" fill="#166534"/>
        <rect x="272" y="340" width="16" height="10" rx="2" fill="#334155"/>
        <text x="280" y="348" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">石</text>
        <rect x="512" y="105" width="16" height="10" rx="2" fill="#334155"/>
        <text x="520" y="113" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">石</text>

        <!-- Main House built strictly Orthogonal (90°) -->
        <rect x="335" y="125" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,125 400,100 475,125" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="169" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="184" width="16" height="6" fill="#1E293B"/>

        <!-- Compass Axis Badge on House Right -->
        <g transform="translate(475, 130)">
          <rect x="0" y="0" width="36" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="18" y1="17" x2="18" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,36 15,30 21,30" fill="#0284C7"/>
          <text x="18" y="46" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- Circular Central Ming Tang Fountain -->
        <circle cx="400" cy="225" r="18" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
        <circle cx="400" cy="225" r="6" fill="#0284C7"/>
        <text x="400" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">${escapeXml(waterText)}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING IN SAFE CENTRAL CORRIDOR (Y=355) -->
        <line x1="260" y1="355" x2="330" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="380" y1="355" x2="480" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="326" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="376" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="330" y1="355" x2="340" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="380" y1="355" x2="370" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE -->
        <path d="M 355 395 L 355 355 C 355 310 380 280 390 245" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO GATE ON FENCE) -->
        <g transform="translate(310, 363)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="45" y1="0" x2="45" y2="-6" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="45" cy="-6" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO ACUTE KNIFE EDGE CORNER) -->
        <g transform="translate(435, 363)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-6" r="2" fill="#DC2626"/>
        </g>

        <!-- Pill Label for Corner Buffer -->
        <rect x="440" y="80" width="85" height="14" rx="3" fill="#15803D"/>
        <text x="482" y="90" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7" fill="#FFFFFF" text-anchor="middle">${escapeXml(cornerRemedy)}</text>
      `;
    }
  },

  // 12. LP-0012: Ban Yuan Tu (Semicircular Metal Plot)
  {
    id: 'LP-0012',
    score: 88,
    isGood: true,
    nameLao: 'ຕອນດິນເຄິ່ງວົງມົນ ທາດທອງ (Ban Yuan Tu - Semicircular Metal Plot)',
    nameHmong: 'Ban Yuan Tu (Thaj Av Voj Kheej Ntoos - Semicircular Metal)',
    elementLao: 'ທາດທອງ Metal / 金 (Wu Qu Star)',
    elementHmong: 'Zog Kub Voj (Metal Gold / 金)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນເຄິ່ງວົງມົນທາດທອງ ຫຼັງໂຄ້ງໂອບອຸ້ມຄືອ້ອມແຂນມັງກອນ ໜ້າຮາບພຽງຮັບຊັບ ເປັນມຸງຄຸນສູງສົ່ງເສີມອຳນາດບາຣະມີ.',
    summaryHmong: 'Tswv Yim: Thaj av voj kheej zog Kub tom qab nkhaus qhwv tsev zoo li npab zaj pem tiaj txais nyiaj txiag muaj hwj chim loj.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ມັງກອນຂຽວ',
      l1: '• ປະຕູຮົ້ວ: ຢູ່ດ້ານໜ້າລຽບ ຝັ່ງຊ້າຍ',
      l2: '• ຫ່າງມຸມຂອບດິນຢ່າງໜ້ອຍ 3m',
      l3: '• ທາງລົດເຂົ້າ: ໂຄ້ງຄ່ອຍໆສູ່ເຮືອນ',
      l4: '• ປູກໄມ້ພຸ່ມປະດັບສອງຂ້າງທາງ',
      sub1: 'ທາງລົດເຂົ້າ: ຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)',
      sub2: '✓ ເປີດຮັບພະລັງເຊິ້ງຊີ່ (Sheng Qi)'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & DRAGON',
      l1: '• Qhov Rooj Loj: Pem tiaj sab laug',
      l2: '• Ceev Xwm: Deb kaum av 3m',
      l3: '• Kev Tsheb: Nkhaus mos muag',
      l4: '• Cog paj & hav ntoo 2 sab kev',
      sub1: 'Kev Nkag: Sab Laug (Dragon)',
      sub2: '✓ Txais Zog Sheng Qi'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດທອງ (金)',
      l2: '• ✓ ຖືກກັບ: ຄົນທາດທອງ & ທາດນ້ຳ',
      l3: '  (ກວ້າ 6 乾, 7 兑, 1 坎)',
      l4: '• ດິນໂຄ້ງເກີດທອງ: ສົ່ງເສີມຍົດຖາບັນດາສັກ',
      l5: '• ຄົນທາດໄມ້ (3, 4) ຄວນມີໜອງນ້ຳເຊື່ອມທາດ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ທອງເກີດນ້ຳ: ອຳນາດ, ບາຣະມີ, ຄວາມຮັ່ງມີ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Kub (Metal 金)',
      l2: '• ✓ Haum: Neeg Zog Kub & Dej',
      l3: '  (Gua 6 乾, 7 兑, 1 坎)',
      l4: '• Voj nkhaus yug Kub: Muaj hwj chim loj',
      l5: '• Neeg Zog Ntoo (3, 4) tso pas dej txuas zog',
      sub1: 'Tsib Yam Zog: Kub yug Dej',
      sub2: 'Hwj chim, nyiaj txiag, koob meej'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ເຂດຫຼັງ 1/3 ໃນວົງໂຄ້ງ',
      l2: '• ພິງຫຼັງວົງໂຄ້ງທີ່ປົກປ້ອງແໜ້ນໜາ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ດ້ານໜ້າຮາບພຽງ',
      l4: '• ທິດພິງ (坐): ພິງຈຸດສູງສຸດຂອງວົງໂຄ້ງ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບຫັນຕາມວົງໂຄ້ງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Sab tom qab 1/3 hauv voj',
      l2: '• Zaum nraub qaum voj nkhaus thaiv',
      l3: '• Ntsia (Xiang): Ntsia pem tiaj dav',
      l4: '• Zaum (Zuo): Zaum plawv ncov voj',
      bed: 'Taub Hau Pw: Phab ntsa voj nkhaus'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ປູກຕົ້ນສົນຕາມແນວໂຄ້ງຫຼັງ 9 ຕົ້ນ',
      l2: '2. ຂຸດໜອງນ້ຳເຄິ່ງວົງມົນໜ້າເຮືອນ',
      l3: '3. ວາງໂຄມໄຟສະຫວ່າງຕາມແນວໂຄ້ງ',
      l4: '4. ຮັກສາລານໜ້າໃຫ້ໂລ່ງຮັບຊັບ',
      t1: '• ຫ້າມເຮັດຫຼັງຮາບພຽງໜ້າໂຄ້ງ (ຈະກາຍເປັນ Reverse Bow)',
      t2: '• ຫ້າມຂຸດໜອງນ້ຳຫຼັງວົງໂຄ້ງ',
      t3: '• ຫ້າມເປີດປະຕູຫຼັງທະລຸ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Cog ntoo thuv raws voj qaum 9 tsob',
      l2: '2. Tsim pas dej semicircular pem',
      l3: '3. Tso teeb pom kev raws voj nkhaus',
      l4: '4. Tso tshav pem kom pom kev txais nyiaj',
      t1: '• Txwv tsis ntxeev voj rau pem (ua Reverse Bow)',
      t2: '• Txwv tsis khawb pas dej tom qab',
      t3: '• Txwv tsis qhib qhov rooj tom qab'
    },

        renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ພິງວົງໂຄ້ງຫຼັງ' : 'Zaum Nraub Qaum Voj';
      const waterText = isLao ? '✓ ໜອງນ້ຳໝິງຖັງ' : '✓ Pas Dej Ming Tang';
      const archPill = isLao ? '🛡️ ວົງໂຄ້ງໂອບອຸ້ມ (Embrace Arc)' : '🛡️ Voj Nkhaus Qhwv (Embrace)';

      return `
        <!-- Semicircular Arc Plot Ground: Base at y=355 (x=260 to 540) -->
        <path d="M 260 355 A 140 140 0 0 1 540 355 Z" fill="#DCFCE7"/>
        <path d="M 266 350 A 134 134 0 0 1 534 350 Z" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Rear Arch Perimeter Fence -->
        <path d="M 260 355 A 140 140 0 0 1 540 355" fill="none" stroke="#15803D" stroke-width="4.5"/>

        <!-- Protective Pine Tree Ring along Rear Arch -->
        <circle cx="285" cy="275" r="9" fill="#14532D"/>
        <circle cx="310" cy="210" r="9" fill="#166534"/>
        <circle cx="350" cy="155" r="10" fill="#14532D"/>
        <circle cx="400" cy="125" r="11" fill="#15803D"/>
        <circle cx="450" cy="155" r="10" fill="#14532D"/>
        <circle cx="490" cy="210" r="9" fill="#166534"/>
        <circle cx="515" cy="275" r="9" fill="#14532D"/>

        <!-- Arch Pill Badge -->
        <rect x="330" y="70" width="140" height="18" rx="3" fill="#15803D"/>
        <text x="400" y="82" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#FFFFFF" text-anchor="middle">${escapeXml(archPill)}</text>

        <!-- House seated inside rear arch -->
        <rect x="335" y="145" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,145 400,120 475,145" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="172" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="189" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="204" width="16" height="6" fill="#1E293B"/>

        <!-- Compass Axis Badge -->
        <g transform="translate(478, 150)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- Semicircular Ming Tang Water Pond -->
        <path d="M 365 245 A 35 22 0 0 0 435 245 Z" fill="#38BDF8" stroke="#0284C7" stroke-width="1.8"/>
        <text x="400" y="240" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">${escapeXml(waterText)}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING ON DRAGON SIDE (Y=355) -->
        <line x1="260" y1="355" x2="300" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="350" y1="355" x2="540" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="296" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="346" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="300" y1="355" x2="310" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="350" y1="355" x2="340" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE -->
        <path d="M 325 395 L 325 355 C 325 310 350 280 380 265" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO GATE ON FENCE) -->
        <g transform="translate(280, 363)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="45" y1="0" x2="45" y2="-6" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="45" cy="-6" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO TIGER CORNER) -->
        <g transform="translate(450, 363)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  },

  // 13. LP-0013: Shan Yao Tu (Hillside Terrace Plot)
  {
    id: 'LP-0013',
    score: 78,
    isGood: true,
    nameLao: 'ຕອນດິນເນີນເຂົາ ຂັ້ນໄດ (Shan Yao Tu - Hillside Terrace Plot)',
    nameHmong: 'Shan Yao Tu (Thaj Av Qis Siab Hauv Toj - Hillside Terrace)',
    elementLao: 'ທາດດິນພູເຂົາ Mountain Earth / 土 (Gen Gua 艮)',
    elementHmong: 'Zog Toj Roob (Mountain Earth / 艮 土)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນເນີນເຂົາຫຼັງສູງໜ້າຕ່ຳຕ້ອງແບ່ງເປັນ 3 ຂັ້ນໄດພ້ອມກຳແພງກັນດິນ ເຮືອນວາງໃນຂັ້ນກາງ ຫຼັງພິງພູໜ້າຊົມວິວ.',
    summaryHmong: 'Tswv Yim: Thaj av toj roob nraub qaum siab pem qis yuav tsum faib ua 3 theem theem nruab nrab tso tsev tom qab zaum roob.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ຂັ້ນໄດຕ່ຳ',
      l1: '• ປະຕູຮົ້ວ: ຢູ່ຂັ້ນໄດລຸ່ມຕິດຖະໜົນ',
      l2: '• ທາງລົດຂຶ້ນ: ໂຄ້ງຊະລໍຄວາມຊັນ',
      l3: '• ຫ້າມເຮັດທາງລົດຊື່ຊັນເກີນ 12%',
      l4: '• ຮ່ອງລະບາຍນ້ຳສອງຂ້າງທາງລົດ',
      sub1: 'ທາງລົດເຂົ້າ: ໂຄ້ງຊະລໍຄວາມຊັນ',
      sub2: '✓ ຮ່ອງລະບາຍນ້ຳກັນນ້ຳເຊາະເຈື່ອນ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THEEM QIS',
      l1: '• Qhov Rooj Loj: Theem qis ze kev',
      l2: '• Kev Tsheb: Nkhaus txo qhov siab',
      l3: '• Txwv tsis ua kev ntxhab tshaj 12%',
      l4: '• Kwj dej 2 sab kev thaiv av liam',
      sub1: 'Kev Nkag: Nkhaus txo kev ntxhab',
      sub2: '✓ Kwj dej thaiv av nkos liam'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດດິນພູເຂົາ (艮 土)',
      l2: '• ✓ ຖືກກັບ: ຄົນທາດດິນ & ທາດທອງ',
      l3: '  (ກວ້າ 8 艮, 2 坤, 6 乾, 7 兑)',
      l4: '• ພູເຂົາພິງຫຼັງ: ເສີມສຸຂະພາບ & ອາຍຸຍືນ',
      l5: '• ຄົນທາດນ້ຳ (1) ຕ້ອງລະວັງນ້ຳເຊາະດິນ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ພູເຂົາເກີດທອງ: ໝັ້ນຄົງ, ບາຣະມີ, ຍືນຍາວ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Toj Roob (Mountain 艮)',
      l2: '• ✓ Haum: Neeg Zog Av & Kub',
      l3: '  (Gua 8 艮, 2 坤, 6 乾, 7 兑)',
      l4: '• Zaum roob: Noj qab nyob zoo, lub neej ntev',
      l5: '• Neeg Zog Dej (1) ceev faj dej liam av',
      sub1: 'Tsib Yam Zog: Roob yug Kub',
      sub2: 'Ruaj khov, hwj chim, noj ntev'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງໃນຂັ້ນກາງ (Mid Terrace)',
      l2: '• ຫຼັງພິງກຳແພງກັນດິນຂັ້ນເທິງ',
      l3: '• ທິດໜ້າ (向): ຫັນລົງສູ່ຂັ້ນລຸ່ມຊົມວິວ',
      l4: '• ທິດພິງ (坐): ພິງພູສູງຫຼັງແໜ້ນໜາ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບດ່ານພູເຂົາ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Theem nruab nrab (Mid Terrace)',
      l2: '• Zaum phab ntsa thaiv av theem siab',
      l3: '• Ntsia (Xiang): Ntsia qis pom kev dav',
      l4: '• Zaum (Zuo): Zaum roob siab nraub qaum',
      bed: 'Taub Hau Pw: Phab ntsa roob qaum'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ສ້າງກຳແພງກັນດິນຄອນກຣີດ 3 ຊັ້ນແຂງແຮງ',
      l2: '2. ຂຸດຮ່ອງລະບາຍນ້ຳອ້ອມຮອບບໍ່ໃຫ້ນ້ຳເຊາະ',
      l3: '3. ປູກຕົ້ນໄມ້ຮາກເລິກຍຶດໜ້າດິນ',
      l4: '4. ວາງເຮືອນໃນຂັ້ນກາງທີ່ດິນແໜ້ນ',
      t1: '• ຫ້າມສ້າງເຮືອນຕິດແຄມໜ້າຜາຊັນ',
      t2: '• ຫ້າມຂາດຮ່ອງລະບາຍນ້ຳເທິງເນີນ',
      t3: '• ຫ້າມຖົມດິນຫຼວມໂດຍບໍ່ມີກຳແພງກັນ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Ua phab ntsa pob zeb 3 theem ruaj khov',
      l2: '2. Khawb kwj dej ncig thaiv av nkos',
      l3: '3. Cog ntoo hauv paus tob tuav av',
      l4: '4. Tso tsev theem nruab nrab av ruaj',
      t1: '• Txwv tsis tso tsev ze ntug tsua',
      t2: '• Txwv tsis txhob tso tsis muaj kwj dej',
      t3: '• Txwv tsis nchuav av tsis muaj phab ntsa'
    },

        renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ (ຂັ້ນກາງ)' : 'Lub Tsev (Theem Nruab Nrab)';
      const houseSub = isLao ? 'ພິງກຳແພງກັນດິນ' : 'Zaum Phab Thaiv Av';
      const upperText = isLao ? '⛰️ ຂັ້ນເທິງ: ສວນສົນພິງຫຼັງ (Upper Terrace)' : '⛰️ Theem Siab: Hav Ntoo Zaum Roob';
      const lowerText = isLao ? '🏡 ຂັ້ນລຸ່ມ: ລານໜ້າ & ບ່ອນຈອດລົດ' : '🏡 Theem Qis: Tshav & Chaw Tsheb';
      const wallPill = isLao ? '🛡️ ກຳແພງກັນດິນ 2.5m' : '🛡️ Phab Ntsa Thaiv Av 2.5m';

      return `
        <!-- Stepped Terrace Land Plot Ground -->
        <rect x="260" y="95" width="280" height="70" fill="#DCFCE7"/>
        <rect x="260" y="165" width="280" height="95" fill="#FEF9C3"/>
        <rect x="260" y="260" width="280" height="95" fill="#E0F2FE"/>

        <!-- Side Perimeter Fences -->
        <line x1="260" y1="95" x2="260" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="540" y1="95" x2="540" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="260" y1="95" x2="540" y2="95" stroke="#15803D" stroke-width="4.5"/>

        <!-- Retaining Wall 1 (between Upper and Mid): y=165 -->
        <line x1="260" y1="165" x2="540" y2="165" stroke="#475569" stroke-width="6"/>
        <line x1="260" y1="168" x2="540" y2="168" stroke="#94A3B8" stroke-width="2"/>
        <!-- Retaining Wall 2 (between Mid and Lower): y=260 -->
        <line x1="260" y1="260" x2="540" y2="260" stroke="#475569" stroke-width="6"/>
        <line x1="260" y1="263" x2="540" y2="263" stroke="#94A3B8" stroke-width="2"/>

        <!-- Upper Terrace Trees & Label -->
        <circle cx="290" cy="120" r="9" fill="#14532D"/>
        <circle cx="340" cy="115" r="10" fill="#166534"/>
        <circle cx="400" cy="112" r="11" fill="#14532D"/>
        <circle cx="460" cy="115" r="10" fill="#166534"/>
        <circle cx="510" cy="120" r="9" fill="#14532D"/>
        <rect x="295" y="132" width="210" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="143" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(upperText)}</text>

        <!-- Main House seated on Middle Terrace -->
        <rect x="335" y="175" width="130" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,175 400,152 475,175" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="229" width="16" height="6" fill="#1E293B"/>

        <!-- Compass Axis Badge on House Right -->
        <g transform="translate(478, 178)">
          <rect x="0" y="0" width="36" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="18" y1="16" x2="18" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,34 15,28 21,28" fill="#0284C7"/>
          <text x="18" y="44" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- Lower Terrace Label & Driveway -->
        <rect x="310" y="270" width="180" height="15" rx="3" fill="#0284C7"/>
        <text x="400" y="281" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(lowerText)}</text>

        <!-- Retaining Wall Badge -->
        <rect x="450" y="248" width="85" height="14" rx="2" fill="#475569"/>
        <text x="492" y="258" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#F8FAFC" text-anchor="middle">${escapeXml(wallPill)}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING IN LOWER TERRACE (Y=355) -->
        <line x1="260" y1="355" x2="300" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="350" y1="355" x2="540" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="296" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="346" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="300" y1="355" x2="310" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="350" y1="355" x2="340" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE -->
        <path d="M 325 395 L 325 355 C 325 300 350 270 380 240" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO GATE ON FENCE) -->
        <g transform="translate(280, 363)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="45" y1="0" x2="45" y2="-6" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="45" cy="-6" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO HIGH CLIFF TOP) -->
        <g transform="translate(450, 68)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="18" x2="41" y2="24" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="24" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  },

  // 14. LP-0014: Dao Ba Tu (Flagpole Panhandle Plot)
  {
    id: 'LP-0014',
    score: 45,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບດວງທຸງ / ດອກມີດ (Dao Ba Tu - Flagpole Panhandle)',
    nameHmong: 'Dao Ba Tu (Thaj Av Tus Txiab Ntev - Flagpole Panhandle)',
    elementLao: 'ທາດໄມ້ລຳທຸງ & ລົມອຸບມຸງ Sha (Wind Tunnel Sha)',
    elementHmong: 'Zog Ncej Tsheb & Cua Ntsawj Nqaim',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນຮູບດວງທຸງມີທາງເຂົ້າແຄບຍາວຄືລຳປືນ ເກີດລົມພຸ່ງຊົນຮຸນແຮງ ຕ້ອງຕັ້ງໂຄມໄຟນຳທາງ ແລະ ວົງວຽນລົດ.',
    summaryHmong: 'Tswv Yim: Thaj av tus txiab muaj kev nkag nqaim ntev tsim cua ntsawj tsoo yuav tsum tso teeb pom kev & voj lem tsheb.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລຳດວງທຸງ',
      l1: '• ປະຕູຮົ້ວ: ຢູ່ປາກທາງເຂົ້າແຄບ',
      l2: '• ຄວາມກວ້າງທາງເຂົ້າ: ຢ່າງໜ້ອຍ 4m',
      l3: '• ຕັ້ງໂຄມໄຟສະຫວ່າງຕາມແນວທາງ',
      l4: '• ວົງວຽນກັບລົດກ່ອນຮອດເຮືອນ',
      sub1: 'ທາງລົດເຂົ້າ: ແລ່ນຜ່ານລຳດວງທຸງ',
      sub2: '✓ ວົງວຽນກັບລົດຊະລໍກະແສລົມ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & TUS NCEJ',
      l1: '• Qhov Rooj Loj: Qhov ncauj nqaim',
      l2: '• Kev Dav: Yam tsawg 4m',
      l3: '• Tso teeb pom kev raws 2 sab kev',
      l4: '• Voj lem tsheb ua ntej txog tsev',
      sub1: 'Kev Nkag: Raws tus ncej ntev',
      sub2: '✓ Voj lem tsheb txo cua ntsawj'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດໄມ້ລຳທຸງ (木)',
      l2: '• ✗ ບໍ່ຖືກກັບ: ຄົນທາດດິນ (2 坤, 8 艮)',
      l3: '• ລົມອຸບມຸງແຄບຍາວສ້າງພະລັງພິສ',
      l4: '• ເຮັດໃຫ້ໂຊກລາບເຂົ້າຍາກ ເງິນໝູນຊ້າ',
      l5: '• ຄົນທາດໄມ້ (3, 4) ຢູ່ໄດ້ຖ້າທາງກວ້າງ',
      sub1: 'ຜົນກະທົບ: ລົມອຸບມຸງແຄບຍາວ',
      sub2: 'ໂຊກລາບຕິດຂັດ, ຄົນໃນເຮືອນໂດດດ່ຽວ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Ntoo Ncej Tsheb (Wood)',
      l2: '• ✗ Tsis haum: Neeg Zog Av (2, 8)',
      l3: '• Cua ntsawj qhov nqaim tsim zog phem',
      l4: '• Nyiaj txiag nkag nyuaj, qeeb heev',
      l5: '• Neeg Zog Ntoo (3, 4) nyob tau yog kev dav',
      sub1: 'Kev Txom Nyem: Cua ntsawj qhov nqaim',
      sub2: 'Nyiaj nkag nyuaj, nyob kho siab'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງໃນສ່ວນຜືນທຸງກວ້າງ',
      l2: '• ຫ້າມສ້າງເຮືອນກົງແນວປາກທາງແຄບ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ລານກວ້າງຜືນທຸງ',
      l4: '• ທິດພິງ (坐): ພິງຫຼັງຜືນທຸງທີ່ໜັກແໜ້ນ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບໃນຜືນທຸງ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv daim chij dav',
      l2: '• Txwv tsis tso tsev ncaj qhov ncauj kev',
      l3: '• Ntsia (Xiang): Ntsia tshav daim chij',
      l4: '• Zaum (Zuo): Zaum phab nraub qaum chij',
      bed: 'Taub Hau Pw: Phab ntsa daim chij'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ເຮັດທາງເຂົ້າໃຫ້ກວ້າງຢ່າງໜ້ອຍ 4-6 ແມັດ',
      l2: '2. ຕັ້ງໂຄມໄຟສະຫວ່າງຕາມແນວທາງທຸກໆ 10m',
      l3: '3. ສ້າງວົງວຽນນ້ຳພຸຊະລໍລົມກ່ອນຮອດເຮືອນ',
      l4: '4. ປູກແນວໄມ້ບັງສາຍຕາປ້ອງກັນລົມພຸ່ງ',
      t1: '• ຫ້າມວາງປະຕູເຮືອນກົງລຳທາງເຂົ້າແຄບ',
      t2: '• ຫ້າມປ່ອຍໃຫ້ທາງເຂົ້າແຄບມືດມົວ',
      t3: '• ຫ້າມຂຸດໜອງນ້ຳກົງປາກທາງ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Ua kev nkag kom dav 4-6m tsawg kawg',
      l2: '2. Tso teeb pom kev raws kev txhua 10m',
      l3: '3. Tsim voj lem pas dej txo cua tshuab',
      l4: '4. Cog hav ntoo thaiv cua ntsawj',
      t1: '• Txwv tsis tso qhov rooj tsev ncaj kev',
      t2: '• Txwv tsis cia kev nkag tsaus ntuj',
      t3: '• Txwv tsis khawb pas dej qhov ncauj'
    },

        renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ວາງໃນຜືນທຸງກວ້າງ' : 'Nyob Daim Chij';
      const waterText = isLao ? '✓ ວົງວຽນນ້ຳພຸ' : '✓ Voj Lem Pas Dej';
      const poleText = isLao ? '⚠️ ທາງເຂົ້າແຄບຍາວ (Panhandle)' : '⚠️ Kev Nqaim Ntev (Panhandle)';

      return `
        <!-- Flagpole Panhandle Ground -->
        <polygon points="240,95 520,95 520,240 300,240 300,355 240,355 240,95" fill="#FEF2F2"/>
        <polygon points="245,100 515,100 515,235 295,235 295,350 245,350 245,100" fill="none" stroke="#F87171" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Perimeter Fences -->
        <line x1="240" y1="95" x2="520" y2="95" stroke="#15803D" stroke-width="4.5"/>
        <line x1="520" y1="95" x2="520" y2="240" stroke="#334155" stroke-width="3"/>
        <line x1="520" y1="240" x2="300" y2="240" stroke="#334155" stroke-width="3"/>
        <line x1="300" y1="240" x2="300" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="240" y1="95" x2="240" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Panhandle Lanterns along the narrow neck -->
        <circle cx="250" cy="270" r="5" fill="#F59E0B"/>
        <circle cx="250" cy="310" r="5" fill="#F59E0B"/>
        <circle cx="290" cy="270" r="5" fill="#F59E0B"/>
        <circle cx="290" cy="310" r="5" fill="#F59E0B"/>
        <rect x="235" y="325" width="115" height="14" rx="2" fill="#B45309"/>
        <text x="292" y="335" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(poleText)}</text>

        <!-- Main House in wide flag quadrant -->
        <rect x="350" y="110" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="340,110 415,85 490,110" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="415" y="137" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="415" y="154" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="407" y="169" width="16" height="6" fill="#1E293B"/>

        <!-- Compass Axis Badge on House Right -->
        <g transform="translate(488, 115)">
          <rect x="0" y="0" width="36" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="18" y1="17" x2="18" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,36 15,30 21,30" fill="#0284C7"/>
          <text x="18" y="46" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- Turnaround Fountain Circle before reaching house -->
        <circle cx="350" cy="205" r="18" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
        <circle cx="350" cy="205" r="6" fill="#0284C7"/>
        <text x="350" y="235" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#0369A1" text-anchor="middle">${escapeXml(waterText)}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING AT PANHANDLE MOUTH (Y=355) -->
        <line x1="240" y1="355" x2="252" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="288" y1="355" x2="300" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="248" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="284" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="252" y1="355" x2="260" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="288" y1="355" x2="280" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE -->
        <path d="M 270 395 L 270 240 C 270 210 310 205 332 205" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO GATE AT MOUTH) -->
        <g transform="translate(225, 363)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="45" y1="0" x2="45" y2="-6" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="45" cy="-6" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO NARROW INNER CORNER) -->
        <g transform="translate(305, 245)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="0" y1="9" x2="-6" y2="9" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-6" cy="9" r="2" fill="#DC2626"/>
        </g>

        <!-- Trees in flag garden -->
        <circle cx="480" cy="180" r="10" fill="#16A34A"/>
        <circle cx="505" cy="205" r="8" fill="#CA8A04"/>
        <circle cx="460" cy="220" r="7" fill="#16A34A"/>
      `;
    }
  },

  // 15. LP-0015: Huan Bao He Wan Tu (River Peninsula Jade Belt Plot)
  {
    id: 'LP-0015',
    score: 96,
    isGood: true,
    nameLao: 'ຕອນດິນແຫຼມແມ່ນ້ຳ ຫົວສາຍແອວຫົກ (Jade Belt Peninsula)',
    nameHmong: 'Huan Bao He Wan Tu (Thaj Av Dej Nkhaus Qhwv Tsev - Jade Belt)',
    elementLao: 'ທາດນ້ຳໂອບອຸ້ມ Water Wealth / 水 (Jade Belt)',
    elementHmong: 'Zog Dej Jade Belt (Water Wealth / 水)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນແຫຼມແມ່ນ້ຳໂອບອຸ້ມຄືສາຍແອວຫຍົກ ເປັນສຸດຍອດຕອນດິນຮັບຊັບ ສາຍນ້ຳໂອບອຸ້ມນຳພາໂຊກລາບມະຫາສານ.',
    summaryHmong: 'Tswv Yim: Thaj av dej nkhaus qhwv tsev zoo li siv tawv kub yog thaj av zoo tshaj plaws dej qhwv nqa nyiaj txiag ntau heev.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ດ້ານຫຼັງພິງ',
      l1: '• ປະຕູຮົ້ວ: ຢູ່ດ້ານຫຼັງ/ຂ້າງຕິດຖະໜົນ',
      l2: '• ຫ່າງຈາກແຄມແມ່ນ້ຳປອດໄພ',
      l3: '• ທາງລົດເຂົ້າ: ໂຄ້ງສູ່ຕົວເຮືອນ',
      l4: '• ປູກໄມ້ພຸ່ມປະດັບສອງຂ້າງທາງ',
      sub1: 'ທາງລົດເຂົ້າ: ຝັ່ງມັງກອນຂຽວ (ຊ້າຍ)',
      sub2: '✓ ເປີດຮັບພະລັງເຊິ້ງຊີ່ (Sheng Qi)'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & ROOB QAUM',
      l1: '• Qhov Rooj Loj: Sab nraub qaum/ze kev',
      l2: '• Ceev Xwm: Deb ntug dej nyab',
      l3: '• Kev Tsheb: Nkhaus mos muag',
      l4: '• Cog hav ntoo 2 sab kev tsheb',
      sub1: 'Kev Nkag: Sab Laug (Dragon)',
      sub2: '✓ Txais Zog Sheng Qi'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດນ້ຳໂອບອຸ້ມ (水)',
      l2: '• ✓ ຖືກກັບ: ຄົນທາດນ້ຳ & ທາດໄມ້',
      l3: '  (ກວ້າ 1 坎, 3 震, 4 巽)',
      l4: '• ສາຍນ້ຳໂອບອຸ້ມ: ມະຫາເສດຖີ, ທຸລະກິດຍິ່ງໃຫຍ່',
      l5: '• ຄົນທາດໄຟ (9) ຄວນມີແນວໄມ້ປ້ອງກັນນ້ຳພິຊິດ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ນ້ຳເກີດໄມ້: ຮັ່ງມີ, ຊື່ສຽງ, ເງິນທອງໄຫຼມາ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Dej Jade Belt (Water 水)',
      l2: '• ✓ Haum: Neeg Zog Dej & Ntoo',
      l3: '  (Gua 1 坎, 3 震, 4 巽)',
      l4: '• Dej qhwv tsev: Neeg nplua mias, lag luam loj',
      l5: '• Neeg Zog Hluav Taws (9) cog ntoo thaiv dej',
      sub1: 'Tsib Yam Zog: Dej yug Ntoo',
      sub2: 'Nplua mias, koob meej, nyiaj ntws'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງໃນຈຸດສູງສຸດກາງແຫຼມ',
      l2: '• ຍົກພື້ນສູງປ້ອງກັນນ້ຳຖ້ວມ',
      l3: '• ທິດໜ້າ (向): ຫັນສູ່ສາຍນ້ຳໂອບອຸ້ມ (Jade Belt)',
      l4: '• ທິດພິງ (坐): ພິງດ້ານຫຼັງແຜ່ນດິນໃຫຍ່',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບຫັນໜ້າຮັບນ້ຳ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv plawv siab tshaj plaws',
      l2: '• Tsa pem teb kom siab thaiv dej nyab',
      l3: '• Ntsia (Xiang): Ntsia dej Jade Belt qhwv',
      l4: '• Zaum (Zuo): Zaum teb chaws loj qaum',
      bed: 'Taub Hau Pw: Phab ntsa ntsia dej'
    },

    remedyLao: {
      title: '🛡️ ວິທີເສີມພະລັງ & ຂໍ້ຄວນລະວັງ',
      l1: '1. ສ້າງກຳແພງກັນນ້ຳເຊາະແຄມຕາຝັ່ງ (Seawall)',
      l2: '2. ປູກຕົ້ນໄມ້ແຄມຝັ່ງຍຶດດິນ ແລະ ບັງລົມ',
      l3: '3. ຍົກລະດັບພື້ນດິນສູງກວ່າລະດັບນ້ຳ 1.5m',
      l4: '4. ສ້າງທ່າເຮືອພັກຜ່ອນໂອບຮັບຊັບ',
      t1: '• ຫ້າມຢູ່ຝັ່ງກົງກັນຂ້າມ (Reverse Bow Blade)',
      t2: '• ຫ້າມສ້າງເຮືອນຕິດແຄມນ້ຳເກີນໄປ',
      t3: '• ຫ້າມປ່ອຍໃຫ້ນ້ຳເຊາະຕາຝັ່ງພັງ'
    },
    remedyHmong: {
      title: '🛡️ KEV TXHAWB ZOG & KHO',
      l1: '1. Ua phab ntsa pob zeb thaiv ntug dej',
      l2: '2. Cog hav ntoo tuav av ntug dej',
      l3: '3. Tsa av kom siab dua dej 1.5m',
      l4: '4. Ua chaw nkoj so txais nyiaj',
      t1: '• Txwv tsis nyob phab Reverse Bow ntsia riam',
      t2: '• Txwv tsis tso tsev ze ntug dej dhau',
      t3: '• Txwv tsis cia dej เซาะ av ntug liam'
    },

        renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຈຸດສູງກາງແຫຼມ' : 'Plawv Siab Jade Belt';
      const riverText = isLao ? '🌊 ແມ່ນ້ຳໂອບອຸ້ມ (Jade Belt River)' : '🌊 Dej Nkhaus Qhwv (Jade Belt)';
      const seawallText = isLao ? '🛡️ ກຳແພງກັນນ້ຳເຊາະ' : '🛡️ Phab Ntsa Thaiv Dej';

      return `
        <!-- Meandering Jade Belt River curving around Peninsula -->
        <path d="M 230 75 C 210 200 230 310 380 340 C 490 360 560 300 570 200 C 580 120 540 75 540 75" fill="none" stroke="#BAE6FD" stroke-width="50"/>
        <path d="M 230 75 C 210 200 230 310 380 340 C 490 360 560 300 570 200 C 580 120 540 75 540 75" fill="none" stroke="#0284C7" stroke-width="3" stroke-dasharray="8,5"/>
        <text x="400" y="348" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#0369A1" text-anchor="middle">${escapeXml(riverText)}</text>

        <!-- Peninsula Land Plot Ground nestled inside embrace -->
        <path d="M 270 95 C 255 190 270 280 385 305 C 475 320 525 275 530 190 C 535 125 505 95 505 95 Z" fill="#DCFCE7"/>
        <path d="M 276 100 C 263 190 276 274 385 298 C 470 312 518 270 523 190 C 528 130 500 100 500 100 Z" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Seawall Barrier along waterfront -->
        <path d="M 270 240 C 310 295 385 305 460 295" fill="none" stroke="#475569" stroke-width="4"/>
        <rect x="345" y="306" width="90" height="13" rx="2" fill="#475569"/>
        <text x="390" y="315" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#F8FAFC" text-anchor="middle">${escapeXml(seawallText)}</text>

        <!-- Main House in elevated center -->
        <rect x="335" y="140" width="130" height="65" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,140 400,115 475,140" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="400" y="167" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="11.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="400" y="184" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="392" y="199" width="16" height="6" fill="#1E293B"/>

        <!-- Compass Axis Badge on House Right -->
        <g transform="translate(478, 145)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- PHYSICAL REAR ENTRANCE BRIDGE & GATE (Y=95) -->
        <line x1="270" y1="95" x2="295" y2="95" stroke="#334155" stroke-width="3.5"/>
        <line x1="335" y1="95" x2="505" y2="95" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON BRIDGE ENTRANCE -->
        <rect x="291" y="90" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="331" y="90" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward to Peninsula) -->
        <line x1="295" y1="95" x2="305" y2="106" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="335" y1="95" x2="325" y2="106" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE -->
        <path d="M 315 55 L 315 95 C 315 120 350 130 380 140" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO BRIDGE GATE) -->
        <g transform="translate(270, 48)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="45" y1="18" x2="45" y2="24" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="45" cy="24" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO DIRECT WATER POINT) -->
        <g transform="translate(355, 318)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-6" r="2" fill="#DC2626"/>
        </g>

        <!-- Trees along riverbank -->
        <circle cx="300" cy="260" r="8" fill="#15803D"/>
        <circle cx="460" cy="270" r="8" fill="#15803D"/>
      `;
    }
  },

  // 16. LP-0016: Bu Gui Ze Tu (Irregular Jagged Plot)
  {
    id: 'LP-0016',
    score: 25,
    isGood: false,
    nameLao: 'ຕອນດິນຮູບຊົງແຂ້ວເລື່ອຍ ບໍ່ສະໝ່ຳສະເໝີ (Irregular Jagged Plot)',
    nameHmong: 'Bu Gui Ze Tu (Thaj Av Hniav Saw Tsis Ncaj - Irregular Jagged)',
    elementLao: 'ທາດພິສປັ່ນປ່ວນ (Chaotic Sha Element)',
    elementHmong: 'Zog Ntxhov Siab (Chaotic Sha Element)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນແຂ້ວເລື່ອຍມີມຸມແຫຼມຮອບດ້ານສ້າງລົມໝູນວົນຕັດກັນ ຕ້ອງສ້າງກຳແພງພາຍໃນດັດໃຫ້ເປັນສີ່ຫຼ່ຽມ ແລະ ປູກໄມ້ປິດມຸມແຫຼມ.',
    summaryHmong: 'Tswv Yim: Thaj av hniav saw muaj kaum ntse ntau tsim cua ntsawj ntxhov siab yuav tsum ua phab ntsa faib ua 4 fab ncaj hauv plawv.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ດ້ານທີ່ລຽບ',
      l1: '• ປະຕູຮົ້ວ: ຢູ່ດ້ານທີ່ລຽບງ່າຍທີ່ສຸດ',
      l2: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມແຂ້ວເລື່ອຍ',
      l3: '• ທາງລົດເຂົ້າ: ໂຄ້ງຊະລໍຄວາມໄວ',
      l4: '• ປູກໄມ້ພຸ່ມບັງມຸມແຫຼມທຸກຈຸດ',
      sub1: 'ທາງລົດເຂົ້າ: ດ້ານລຽບປອດໄພ',
      sub2: '✗ ຫ້າມເປີດປະຕູກົງມຸມແຫຼມແຂ້ວເລື່ອຍ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & PHAB TIAJ',
      l1: '• Qhov Rooj Loj: Phab tiaj zoo tshaj',
      l2: '• Txwv tsis qhib rau kaum hniav saw',
      l3: '• Kev Tsheb: Nkhaus mos muag',
      l4: '• Cog hav ntoo thaiv kaum ntse',
      sub1: 'Kev Nkag: Phab tiaj zoo',
      sub2: '✗ Txwv tsis qhib rau kaum ntse'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດພິສປັ່ນປ່ວນ (Sha)',
      l2: '• ✗ ບໍ່ຖືກກັບ: ທຸກຄົນໃນຄອບຄົວ',
      l3: '• ມຸມແຫຼມຮອບທິດສ້າງຄວາມຂັດແຍ້ງ',
      l4: '• ເຮັດໃຫ້ເກີດຄວາມຄຽດ ແລະ ຜິດຖຽງກັນ',
      l5: '• ຕ້ອງແກ້ໄຂດ້ວຍການດັດສີ່ຫຼ່ຽມພາຍໃນ',
      sub1: 'ຜົນກະທົບ: ພະລັງງານປັ່ນປ່ວນ',
      sub2: 'ສຸຂະພາບຊຸດໂຊມ, ເສຍຊັບ, ຄະດີຄວາມ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Ntxhov (Chaotic Sha)',
      l2: '• ✗ Tsis haum: Txhua tus hauv tsev',
      l3: '• Kaum ntse ntau tsim kev sib cav',
      l4: '• Tsim kev ntxhov siab, mob nkeeg ntau',
      l5: '• Yuav tsum kho faib 4 fab ncaj xwb',
      sub1: 'Kev Txom Nyem: Zog cua ntxhov',
      sub2: 'Mob nkeeg, poob nyiaj, ntsib plaub'
    },

    houseLao: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ວາງໃນເຂດສີ່ຫຼ່ຽມພາຍໃນ',
      l2: '• ຫ້າມສ້າງເຮືອນຕິດແຄມແຂ້ວເລື່ອຍ',
      l3: '• ທິດໜ້າ (向): ຫັນຕາມທິດເຂັມທິດຫຼັກ',
      l4: '• ທິດພິງ (坐): ພິງກຳແພງພາຍໃນທີ່ແໜ້ນ',
      bed: 'ຫົວຕຽງ: ພິງຝາທຶບໃນເຂດສີ່ຫຼ່ຽມ'
    },
    houseHmong: {
      title: '🧭 CHAW TSO TSEV & TSHAV',
      l1: '• Chaw: Tso hauv plawv 4 fab ncaj',
      l2: '• Txwv tsis tso ze ntug hniav saw',
      l3: '• Ntsia (Xiang): Ntsia raws koob qhia kev',
      l4: '• Zaum (Zuo): Zaum phab ntsa faib av',
      bed: 'Taub Hau Pw: Phab ntsa plawv 4 fab'
    },

    remedyLao: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: '1. ສ້າງກຳແພງພາຍໃນດັດເປັນສີ່ຫຼ່ຽມ (Rectangular)',
      l2: '2. ປັບມຸມແຫຼມແຂ້ວເລື່ອຍເປັນສວນດອກໄມ້ທັງໝົດ',
      l3: '3. ຕັ້ງສີລາໄທຊານໃນມຸມແຫຼມທີ່ຮຸນແຮງ',
      l4: '4. ຕັ້ງອ່າງນ້ຳພຸຊະລໍກະແສລົມໃຈກາງ',
      t1: '• ຫ້າມສ້າງຫ້ອງນອນຕິດມຸມແຫຼມແຂ້ວເລື່ອຍ',
      t2: '• ຫ້າມເປີດປະຕູກົງມຸມແຫຼມ',
      t3: '• ຫ້າມຂຸດໜອງນ້ຳກົງມຸມແຂ້ວເລື່ອຍ'
    },
    remedyHmong: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: '1. Ua phab ntsa faib 4 fab ncaj (Rectangular)',
      l2: '2. Ua vaj paj thaiv tag nrho kaum hniav saw',
      l3: '3. Pob zeb Tai Shan rau kaum ntse hnyav',
      l4: '4. Pas dej nruab nrab txo cua ntsawj',
      t1: '• Txwv tsis tso chav pw ze kaum ntse',
      t2: '• Txwv tsis qhib qhov rooj kaum ntse',
      t3: '• Txwv tsis khawb pas dej kaum ntse'
    },

        renderCenter(lang, escapeXml) {
      const isLao = lang === 'lao';
      const houseText = isLao ? 'ອາຄານຫຼັກ (ສີ່ຫຼ່ຽມພາຍໃນ)' : 'Lub Tsev (4 Fab Ncaj)';
      const houseSub = isLao ? 'ວາງໃນເຂດສີ່ຫຼ່ຽມປອດໄພ' : 'Hauv Thaj 4 Fab Zoo';
      const waterText = isLao ? '✓ ນ້ຳພຸຊະລໍລົມ' : '✓ Pas Dej Txo Cua';
      const partitionText = isLao ? '🛡️ ກຳແພງດັດສີ່ຫຼ່ຽມ (Rectangular Partition)' : '🛡️ Phab Ntsa Faib 4 Fab Ncaj';

      return `
        <!-- Jagged Sawtooth Outer Ground -->
        <polygon points="260,95 340,115 390,95 470,120 540,100 510,180 550,230 490,290 530,355 380,355 350,330 310,355 240,355 270,280 230,210 270,150" fill="#FEE2E2" stroke="#DC2626" stroke-width="2.5"/>

        <!-- Internal Rectangular Partition -->
        <rect x="290" y="135" width="210" height="180" fill="#DCFCE7" stroke="#16A34A" stroke-width="2.5" rx="3"/>
        <rect x="294" y="139" width="202" height="172" fill="none" stroke="#22C55E" stroke-width="1.2" stroke-dasharray="4,3"/>

        <!-- Partition Label Banner -->
        <rect x="280" y="115" width="230" height="16" rx="3" fill="#15803D"/>
        <text x="395" y="126" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(partitionText)}</text>

        <!-- Buffer Trees & Tai Shan Stones in Jagged Teeth pockets -->
        <circle cx="250" cy="110" r="8" fill="#15803D"/>
        <circle cx="530" cy="115" r="8" fill="#15803D"/>
        <circle cx="535" cy="230" r="8" fill="#15803D"/>
        <circle cx="245" cy="210" r="8" fill="#15803D"/>
        <rect x="522" y="240" width="16" height="10" rx="2" fill="#334155"/>
        <text x="530" y="248" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">石</text>
        <rect x="237" y="220" width="16" height="10" rx="2" fill="#334155"/>
        <text x="245" y="228" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">石</text>

        <!-- Main House inside rectangular sanctuary -->
        <rect x="335" y="150" width="120" height="60" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        <polygon points="325,150 395,125 465,150" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <text x="395" y="175" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="395" y="192" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        <rect x="387" y="204" width="16" height="6" fill="#1E293B"/>

        <!-- Compass Axis Badge inside rectangular core -->
        <g transform="translate(460, 155)">
          <rect x="0" y="0" width="34" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="17" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">坐 ⬆</text>
          <line x1="17" y1="16" x2="17" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="17,34 14,28 20,28" fill="#0284C7"/>
          <text x="17" y="44" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">向 ⬇</text>
        </g>

        <!-- Central Fountain to convert chaotic energy -->
        <circle cx="395" cy="240" r="16" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
        <circle cx="395" cy="240" r="5" fill="#0284C7"/>
        <text x="395" y="270" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${escapeXml(waterText)}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING IN SAFE FLAT SECTION (Y=355) -->
        <line x1="240" y1="355" x2="310" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="355" y1="355" x2="380" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="306" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="351" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="310" y1="355" x2="320" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="355" y1="355" x2="345" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE -->
        <path d="M 332 395 L 332 355 C 332 320 350 290 380 260" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>

        <!-- [✓] RECOMMENDED GATE BADGE (ANCHORED TO GATE ON FENCE) -->
        <g transform="translate(290, 363)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <line x1="45" y1="0" x2="45" y2="-6" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="45" cy="-6" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO SAWTOOTH APEX) -->
        <g transform="translate(480, 363)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-6" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-6" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  }
];
