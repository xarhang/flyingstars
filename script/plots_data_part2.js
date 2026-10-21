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
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຕັ້ງດ້ານໜ້າປີກໃຫຍ່ ຝັ່ງມັງກອນຂຽວ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Tis tsev loj sab Zaj Ntsuab',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດທອງຫັກ & ມຸມຂາດ',
      l2: '• ✗ ບໍ່ຖືກກັບ: ທຸກຄົນ (ຖ້າບໍ່ແກ້)',
      l3: '• ຂາດຕາເວັນຕົກສ່ຽງເໜືອກະທົບພໍ່ (6 (ທາດທອງ))',
      l4: '• ຂາດຕາເວັນຕົກສ່ຽງໃຕ້ກະທົບແມ່ (2 (ທາດດິນ))',
      l5: '• ຂາດຕາເວັນອອກກະທົບລູກກົກ (3 (ທາດໄມ້))',
      sub1: 'ຜົນກະທົບ: ຂາດທິດ Bagua ຫຼັກ',
      sub2: 'ສຸຂະພາບຊຸດໂຊມ, ເງິນຮົ່ວໄຫຼ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Kub Txiav & Poob Kaum',
      l2: '• ✗ Tsis haum: Txhua tus neeg',
      l3: '• Poob NW raug leej txiv (Gua 6 (ທາດທອງ))',
      l4: '• Poob SW raug leej niam (Gua 2 (ທາດດິນ))',
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
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງນ້ຳໜ້າເຮືອນ' : '✓ Pas Dej Pem';
      const missingText = isLao ? '⚠️ ມຸມທີ່ຂາດຫາຍ (Missing Sector)' : '⚠️ Kaum Poob (Missing Sector)';
      const hedgeText = isLao ? '🌲 ແນວໄມ້ເຕັມມຸມຂາດ' : '🌲 Hav Ntoo Kho Kaum';
      const lightText = isLao ? '💡 ເສົາໄຟແສງສະຫວ່າງ' : '💡 Ncej Fais (Hluav Taws Xob)';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="340" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="235" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 235 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="565" y="290" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 565 290)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

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

        <!-- House seated inside the large rectangular wing (Architectural Layout) -->
        <polygon points="270,112 337,90 405,112" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="280" y="112" width="115" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="324" y1="112" x2="324" y2="164" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="288" y="118" width="28" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="288" y="118" width="28" height="5.5" fill="#0284C7"/>
        <text x="302" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="302" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="358" y="136" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="358" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="350" y="164" width="15" height="5" fill="#1E293B"/>
        <text x="358" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge inside main wing -->
        <g transform="translate(378, 112)">
          <rect x="0" y="0" width="34" height="50" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="17" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="17" y1="17" x2="17" y2="34" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="17,36 14,30 20,30" fill="#0284C7"/>
          <text x="17" y="46" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="270" y="200" width="145" height="66" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="342" y="214" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="342" y="228" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="342" y="241" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 380 255 A 16 8 0 0 0 412 255 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="396" y="252" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING ON DRAGON SIDE -->
        <line x1="255" y1="355" x2="285" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="335" y1="355" x2="545" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="281" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="331" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="285" y1="355" x2="295" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="335" y1="355" x2="325" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 310 395 L 310 355 C 310 305 330 275 350 240 C 358 210 358 190 358 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="340" y="318" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="88" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="44" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="88" y1="9" x2="103" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="103" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO MISSING SECTOR NOTCH) -->
        <g transform="translate(425, 240)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="0" y1="9" x2="-5" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-5" cy="-5" r="2" fill="#DC2626"/>
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
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຢູ່ດ້ານໜ້າສ່ວນລຳຄ້ອນ ຝັ່ງມັງກອນ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Qauv rauj pem hauv ntej sab zaj',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດດິນປະທະ (ທາດດິນ)',
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
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ນ້ຳພຸວົງມົນ' : '✓ Pas Dej Kheej';
      const divideText = isLao ? '🛡️ ກຳແພງແຍກສ່ວນດິນ' : '🛡️ Phab Ntsa Faib Av';
      const gardenText = isLao ? '🌳 ສວນ & ບ່ອນຈອດລົດ' : '🌳 Vaj & Chaw Tsheb';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="225" y="150" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 225 150)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="575" y="150" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 575 150)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

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

        <!-- Main House in Crossbar (Architectural Layout) -->
        <polygon points="325,105 400,82 475,105" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="335" y="105" width="130" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="105" x2="388" y2="157" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="345" y="112" width="30" height="20" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="345" y="112" width="30" height="5" fill="#0284C7"/>
        <text x="360" y="125" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="360" y="145" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="126" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="142" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.5" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="416" y="157" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="174" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge -->
        <g transform="translate(478, 108)">
          <rect x="0" y="0" width="36" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="18" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="18" y1="16" x2="18" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="18,34 15,28 21,28" fill="#0284C7"/>
          <text x="18" y="44" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="345" y="196" width="110" height="66" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="210" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="223" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ' : '• Tsis muaj dej: Tshav ntsuab'}</text>
        <text x="400" y="236" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ມີບໍ່ນ້ຳ: ອ່າງນ້ຳພຸວົງມົນ 10-15%' : '• Yog muaj dej: Pas dej kheej'}</text>
        <!-- Optional Water Feature Badge -->
        <circle cx="400" cy="250" r="7" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2"/>
        <text x="400" y="252" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5" fill="#0284C7" text-anchor="middle">${isLao ? '[ນ້ຳພຸ]' : '[Fountain]'}</text>

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

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 400 395 L 400 355 C 400 315 410 270 420 220 C 424 195 424 180 424 162" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="400" y="315" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(255, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="116" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="116" cy="0" r="2" fill="#15803D"/>
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
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າຝັ່ງມຸມປ້ານ ຫ້າມກົງມຸມແຫຼມ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Sab kaum du, txwv kaum ntse',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດໄມ້ບ້ຽວ (ທາດໄມ້)',
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
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງນ້ຳວົງມົນ' : '✓ Pas Dej Kheej';
      const cornerRemedy = isLao ? '🌲 ໄມ້ລົບມຸມແຫຼມ' : '🌲 Ntoo Thaiv Kaum';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="430" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="250" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-65 250 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="550" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(65 550 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

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
        <text x="280" y="348" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫີນ' : 'Pob'}</text>
        <rect x="512" y="105" width="16" height="10" rx="2" fill="#334155"/>
        <text x="520" y="113" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫີນ' : 'Pob'}</text>

        <!-- Main House built strictly Orthogonal 90° (Architectural Layout) -->
        <polygon points="325,112 400,90 475,112" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="335" y="112" width="130" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="112" x2="388" y2="164" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="345" y="118" width="30" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="345" y="118" width="30" height="5.5" fill="#0284C7"/>
        <text x="360" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="360" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="136" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="416" y="164" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge on House Right (shifted to clear diamond boundary) -->
        <g transform="translate(465, 112)">
          <rect x="0" y="0" width="34" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.95" stroke="#0284C7" stroke-width="1.2"/>
          <text x="17" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="17" y1="16" x2="17" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="17,34 14,28 20,28" fill="#0284C7"/>
          <text x="17" y="44" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="305" y="202" width="190" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="400" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="400" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="400" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 258 A 16 8 0 0 0 472 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="456" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING IN SAFE CENTRAL CORRIDOR (Y=355) -->
        <line x1="260" y1="355" x2="330" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="380" y1="355" x2="480" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="326" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="376" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="330" y1="355" x2="340" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="380" y1="355" x2="370" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 355 395 L 355 355 C 355 305 385 275 405 240 C 424 210 424 190 424 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(225, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="101" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="101" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO ACUTE KNIFE EDGE CORNER) -->
        <g transform="translate(435, 350)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-5" r="2" fill="#DC2626"/>
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
    elementLao: 'ທາດທອງ Metal / ທາດທອງ (Wu Qu Star)',
    elementHmong: 'Zog Kub Voj (Metal Gold / ທາດທອງ)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນເຄິ່ງວົງມົນທາດທອງ ຫຼັງໂຄ້ງໂອບອຸ້ມຄືອ້ອມແຂນມັງກອນ ໜ້າຮາບພຽງຮັບຊັບ ເປັນມຸງຄຸນສູງສົ່ງເສີມອຳນາດບາຣະມີ.',
    summaryHmong: 'Tswv Yim: Thaj av voj kheej zog Kub tom qab nkhaus qhwv tsev zoo li npab zaj pem tiaj txais nyiaj txiag muaj hwj chim loj.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານໜ້າລຽບ ຝັ່ງມັງກອນຂຽວ',
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
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດທອງ (ທາດທອງ)',
      l2: '• ✓ ຖືກກັບ: ຄົນທາດທອງ & ທາດນ້ຳ',
      l3: '  (ກວ້າ 6 (ທາດທອງ), 7 (ທາດທອງ), 1 (ທາດນ້ຳ))',
      l4: '• ດິນໂຄ້ງເກີດທອງ: ສົ່ງເສີມຍົດຖາບັນດາສັກ',
      l5: '• ຄົນທາດໄມ້ (3, 4) ຄວນມີໜອງນ້ຳເຊື່ອມທາດ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ທອງເກີດນ້ຳ: ອຳນາດ, ບາຣະມີ, ຄວາມຮັ່ງມີ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Zog Kub (Metal 金)',
      l2: '• ✓ Haum: Neeg Zog Kub & Dej',
      l3: '  (Gua 6 (ທາດທອງ), 7 (ທາດທອງ), 1 (ທາດນ້ຳ))',
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
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງນ້ຳເຄິ່ງວົງມົນ' : '✓ Pas Dej Ban Yuan';
      const wallPill = isLao ? '🛡️ ກຳແພງໂຄ້ງໂອບ' : '🛡️ Phab Ntsa Nkhaus';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="235" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 235 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="565" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 565 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Semicircular Plot Ground: Arc at rear from (250, 355) through (400, 95) to (550, 355), Base at front Y=355 -->
        <path d="M 250 355 A 150 260 0 0 1 550 355 Z" fill="#DCFCE7"/>
        <path d="M 256 350 A 144 250 0 0 1 544 350 Z" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Rear Curved Perimeter Fence -->
        <path d="M 250 355 A 150 260 0 0 1 550 355" fill="none" stroke="#15803D" stroke-width="4.5"/>
        
        <!-- Rear Protective Trees along Crown -->
        <circle cx="340" cy="115" r="7" fill="#14532D"/>
        <circle cx="370" cy="105" r="8" fill="#166534"/>
        <circle cx="400" cy="100" r="9" fill="#14532D"/>
        <circle cx="430" cy="105" r="8" fill="#166534"/>
        <circle cx="460" cy="115" r="7" fill="#14532D"/>

        <!-- Main House in Crown 1/3 (Architectural Layout) -->
        <polygon points="330,115 400,90 470,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="115" width="120" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="115" x2="388" y2="167" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="121" width="32" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="121" width="32" height="5.5" fill="#0284C7"/>
        <text x="364" y="135" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="364" y="155" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="138" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="154" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Prominently Visible & Unclipped) -->
        <rect x="416" y="167" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="183" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge on House Right -->
        <g transform="translate(470, 115)">
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

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING (Y=355) -->
        <line x1="250" y1="355" x2="325" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="375" y1="355" x2="550" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="321" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="371" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="325" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="375" y1="355" x2="365" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 350 395 L 350 355 C 350 305 385 275 405 240 C 424 210 424 190 424 172" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(225, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="96" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="96" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO CORNER POST) -->
        <g transform="translate(455, 350)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-5" r="2" fill="#DC2626"/>
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
    elementLao: 'ທາດດິນພູເຂົາ Mountain Earth / ທາດດິນ (Gen Gua ທາດດິນ)',
    elementHmong: 'Zog Toj Roob (Mountain Earth / ທາດດິນ 土)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນເນີນເຂົາຫຼັງສູງໜ້າຕ່ຳຕ້ອງແບ່ງເປັນ 3 ຂັ້ນໄດພ້ອມກຳແພງກັນດິນ ເຮືອນວາງໃນຂັ້ນກາງ ຫຼັງພິງພູໜ້າຊົມວິວ.',
    summaryHmong: 'Tswv Yim: Thaj av toj roob nraub qaum siab pem qis yuav tsum faib ua 3 theem theem nruab nrab tso tsev tom qab zaum roob.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ຂັ້ນໄດລຸ່ມຕິດຖະໜົນ ຝັ່ງມັງກອນ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Qis theem ciam kev sab zaj',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດດິນພູເຂົາ (ທາດດິນ 土)',
      l2: '• ✓ ຖືກກັບ: ຄົນທາດດິນ & ທາດທອງ',
      l3: '  (ກວ້າ 8 (ທາດດິນ), 2 (ທາດດິນ), 6 (ທາດທອງ), 7 (ທາດທອງ))',
      l4: '• ພູເຂົາພິງຫຼັງ: ເສີມສຸຂະພາບ & ອາຍຸຍືນ',
      l5: '• ຄົນທາດນ້ຳ (1) ຕ້ອງລະວັງນ້ຳເຊາະດິນ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ພູເຂົາເກີດທອງ: ໝັ້ນຄົງ, ບາຣະມີ, ຍືນຍາວ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Toj Roob (Mountain ທາດດິນ)',
      l2: '• ✓ Haum: Neeg Zog Av & Kub',
      l3: '  (Gua 8 (ທາດດິນ), 2 (ທາດດິນ), 6 (ທາດທອງ), 7 (ທາດທອງ))',
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
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງນ້ຳຂັ້ນລຸ່ມ' : '✓ Pas Dej Qis';
      const terraceText = isLao ? '⛰️ ເນີນດິນຫຼັງສູງ' : '⛰️ Roob Qaum Siab';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="235" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 235 220)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="565" y="220" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 565 220)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Plot Ground Fill -->
        <rect x="260" y="95" width="280" height="260" fill="#DCFCE7" rx="4"/>
        <rect x="265" y="100" width="270" height="250" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Stepped Hillside Terraces (Upper Terrace Y=95..180, Lower Terrace Y=180..355) -->
        <line x1="260" y1="180" x2="540" y2="180" stroke="#CA8A04" stroke-width="2.5" stroke-dasharray="6,4"/>
        <rect x="420" y="165" width="110" height="13" rx="2" fill="#CA8A04"/>
        <text x="475" y="174" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '⛰️ ເສັ້ນແບ່ງລະດັບເນີນ' : '⛰️ Ciam Qis Siab'}</text>

        <!-- Perimeter Fences -->
        <line x1="260" y1="95" x2="540" y2="95" stroke="#15803D" stroke-width="4.5"/>
        <line x1="260" y1="95" x2="260" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="540" y1="95" x2="540" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Rear Mountain Hillside Buffer Pines -->
        <circle cx="290" cy="110" r="8" fill="#14532D"/>
        <circle cx="320" cy="105" r="9" fill="#166534"/>
        <circle cx="480" cy="105" r="9" fill="#166534"/>
        <circle cx="510" cy="110" r="8" fill="#14532D"/>

        <!-- Main House on Upper Stable Terrace (Architectural Layout) -->
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

        <!-- Compass Axis Badge on House Right -->
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

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING AT DRAGON SIDE -->
        <line x1="260" y1="355" x2="325" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="375" y1="355" x2="540" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="321" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="371" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="325" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="375" y1="355" x2="365" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 350 395 L 350 355 C 350 305 385 275 405 240 C 424 210 424 190 424 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(225, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="96" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="96" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO TIGER CORNER) -->
        <g transform="translate(450, 350)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-5" r="2" fill="#DC2626"/>
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
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ປາກທາງເຂົ້າແຄບ ກວ້າງ >4-6 ແມັດ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Ncauj kev nqaim dav >4-6 meters',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບ: ທາດໄມ້ລຳທຸງ (ທາດໄມ້)',
      l2: '• ✗ ບໍ່ຖືກກັບ: ຄົນທາດດິນ (2 (ທາດດິນ), 8 (ທາດດິນ))',
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
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ໜອງນ້ຳທ້ອງຖົງ' : '✓ Pas Dej Pem';
      const corridorText = isLao ? '🚪 ທາງເຂົ້າຄໍຂວດ (Panhandle Ingress)' : '🚪 Txoj Kev Nqaim (Ingress)';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="250" y="160" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 250 160)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="550" y="160" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 550 160)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Flagpole Plot Ground: Wide rear body (270..530, Y=95..240) + Narrow panhandle (290..350, Y=240..355) -->
        <path d="M 270 95 L 530 95 L 530 240 L 350 240 L 350 355 L 290 355 L 290 240 L 270 240 Z" fill="#DCFCE7"/>
        <path d="M 275 100 L 525 100 L 525 235 L 345 235 L 345 350 L 295 350 L 295 235 L 275 235 Z" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Perimeter Fences -->
        <line x1="270" y1="95" x2="530" y2="95" stroke="#15803D" stroke-width="4.5"/>
        <line x1="270" y1="95" x2="270" y2="240" stroke="#334155" stroke-width="3"/>
        <line x1="270" y1="240" x2="290" y2="240" stroke="#334155" stroke-width="3"/>
        <line x1="290" y1="240" x2="290" y2="355" stroke="#334155" stroke-width="3"/>
        <line x1="530" y1="95" x2="530" y2="240" stroke="#334155" stroke-width="3"/>
        <line x1="530" y1="240" x2="350" y2="240" stroke="#DC2626" stroke-width="3"/>
        <line x1="350" y1="240" x2="350" y2="355" stroke="#334155" stroke-width="3"/>

        <!-- Label for Panhandle Ingress Corridor -->
        <rect x="235" y="275" width="130" height="15" rx="3" fill="#0F172A" fill-opacity="0.9"/>
        <text x="300" y="286" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FDE047" text-anchor="middle">${escapeXml(corridorText)}</text>

        <!-- Main House in Broad Rear Square (Architectural Layout) -->
        <polygon points="330,112 400,90 470,112" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="340" y="112" width="120" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="112" x2="388" y2="164" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="348" y="118" width="30" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="348" y="118" width="30" height="5.5" fill="#0284C7"/>
        <text x="363" y="132" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="363" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="136" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="152" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Clear Buffer Zone) -->
        <rect x="416" y="164" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="180" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge on House Right -->
        <g transform="translate(470, 112)">
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

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING IN CORRIDOR (Y=355) -->
        <!-- Gate opening: X=295 to 345 -->
        <rect x="291" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="341" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward to Corridor) -->
        <line x1="295" y1="355" x2="305" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="345" y1="355" x2="335" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 320 395 L 320 230 C 320 200 350 185 385 180 C 405 180 424 180 424 169" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(195, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="96" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="96" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO DEAD CORRIDOR NOTCH) -->
        <g transform="translate(355, 245)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="0" y1="9" x2="-5" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-5" cy="-5" r="2" fill="#DC2626"/>
        </g>

        <!-- Garden trees in expansive side courtyard -->
        <circle cx="480" cy="200" r="8" fill="#16A34A"/>
        <circle cx="505" cy="215" r="6" fill="#CA8A04"/>
      `;
    }
  },

  // 15. LP-0015: Huan Bao He Wan Tu (River Peninsula Jade Belt Plot)
  {
    id: 'LP-0015',
    hasFrontRoad: false,
    score: 96,
    isGood: true,
    nameLao: 'ຕອນດິນແຫຼມແມ່ນ້ຳ ຫົວສາຍແອວຫົກ (Jade Belt Peninsula)',
    nameHmong: 'Huan Bao He Wan Tu (Thaj Av Dej Nkhaus Qhwv Tsev - Jade Belt)',
    elementLao: 'ທາດນ້ຳໂອບອຸ້ມ Water Wealth / ທາດນ້ຳ (Jade Belt)',
    elementHmong: 'Zog Dej Jade Belt (Water Wealth / ທາດນ້ຳ)',
    summaryLao: 'ຫຼັກການຮວງຈຸ້ຍ: ຕອນດິນແຫຼມແມ່ນ້ຳໂອບອຸ້ມຄືສາຍແອວຫຍົກ ເປັນສຸດຍອດຕອນດິນຮັບຊັບ ສາຍນ້ຳໂອບອຸ້ມນຳພາໂຊກລາບມະຫາສານ.',
    summaryHmong: 'Tswv Yim: Thaj av dej nkhaus qhwv tsev zoo li siv tawv kub yog thaj av zoo tshaj plaws dej qhwv nqa nyiaj txiag ntau heev.',

    entranceLao: {
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານຄໍແຫຼມທິດເໜືອ ຂ້າມຂົວແໜ້ນໜາ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Sab qaum teb hla choj ruaj khov',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
    },

    guaLao: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳຮູບຊົງ: ທາດນ້ຳໂອບອຸ້ມ (ທາດນ້ຳ)',
      l2: '• ✓ ຖືກກັບ: ຄົນທາດນ້ຳ & ທາດໄມ້',
      l3: '  (ກວ້າ 1 (ທາດນ້ຳ), 3 (ທາດໄມ້), 4 (ທາດໄມ້))',
      l4: '• ສາຍນ້ຳໂອບອຸ້ມ: ມະຫາເສດຖີ, ທຸລະກິດຍິ່ງໃຫຍ່',
      l5: '• ຄົນທາດໄຟ (9) ຄວນມີແນວໄມ້ປ້ອງກັນນ້ຳພິຊິດ',
      sub1: 'ກົດເກນ 5 ທາດ (Five Elements)',
      sub2: 'ນ້ຳເກີດໄມ້: ຮັ່ງມີ, ຊື່ສຽງ, ເງິນທອງໄຫຼມາ'
    },
    guaHmong: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: Dej Jade Belt (Water 水)',
      l2: '• ✓ Haum: Neeg Zog Dej & Ntoo',
      l3: '  (Gua 1 (ທາດນ້ຳ), 3 (ທາດໄມ້), 4 (ທາດໄມ້))',
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
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const riverText = isLao ? '🌊 ແມ່ນ້ຳໂອບອຸ້ມ (Jade Belt River)' : '🌊 Dej Nkhaus Qhwv (Jade Belt)';
      const seawallText = isLao ? '🛡️ ກຳແພງກັນນ້ຳເຊາະ' : '🛡️ Phab Ntsa Thaiv Dej';
      const bridgeText = isLao ? '🌉 ຂົວຂ້າມນ້ຳເຂົ້າຕອນດິນ' : '🌉 Chaw Choj Nkag Av';

      return `
        <!-- Meandering Jade Belt River curving around Peninsula -->
        <path d="M 230 75 C 210 200 230 310 380 340 C 490 360 560 300 570 200 C 580 120 540 75 540 75" fill="none" stroke="#BAE6FD" stroke-width="50"/>
        <path d="M 230 75 C 210 200 230 310 380 340 C 490 360 560 300 570 200 C 580 120 540 75 540 75" fill="none" stroke="#0284C7" stroke-width="3" stroke-dasharray="8,5"/>
        <text x="390" y="348" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8.5" fill="#0369A1" text-anchor="middle">${escapeXml(riverText)}</text>

        <!-- Peninsula Land Plot Ground nestled inside embrace -->
        <path d="M 270 95 C 255 190 270 280 385 305 C 475 320 525 275 530 190 C 535 125 505 95 505 95 Z" fill="#DCFCE7"/>
        <path d="M 276 100 C 263 190 276 274 385 298 C 470 312 518 270 523 190 C 528 130 500 100 500 100 Z" fill="none" stroke="#22C55E" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Seawall Barrier along waterfront -->
        <path d="M 270 240 C 310 295 385 305 460 295" fill="none" stroke="#475569" stroke-width="4"/>
        <rect x="345" y="306" width="90" height="13" rx="2" fill="#475569"/>
        <text x="390" y="315" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#F8FAFC" text-anchor="middle">${escapeXml(seawallText)}</text>

        <!-- Main House in Elevated Center (Architectural Layout) -->
        <polygon points="325,115 400,90 475,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="335" y="115" width="130" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="388" y1="115" x2="388" y2="167" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Rear Wall -->
        <rect x="345" y="121" width="30" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="345" y="121" width="30" height="5.5" fill="#0284C7"/>
        <text x="360" y="135" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="360" y="155" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="424" y="138" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="424" y="154" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Facing south river embrace, Clear Buffer Zone) -->
        <rect x="416" y="167" width="16" height="5" fill="#1E293B"/>
        <text x="424" y="183" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="295" y="202" width="190" height="65" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="390" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="390" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ • ມີແມ່ນ້ຳໂອບອຸ້ມ' : '• Tsis muaj dej: Tshav ntsuab • Muaj dej qhwv'}</text>
        <text x="390" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ສາຍນ້ຳໂອບອຸ້ມທຳມະຊາດ ນຳພາຊັບສົມບັດ' : '• Dej Jade Belt qhwv coj nyiaj txiag los'}</text>

        <!-- Compass Axis Badge on House Right -->
        <g transform="translate(478, 145)">
          <rect x="0" y="0" width="38" height="52" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="19" y="13" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="19" y1="17" x2="19" y2="35" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="19,37 16,31 22,31" fill="#0284C7"/>
          <text x="19" y="47" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- Access Bridge Label at North Y=45 -->
        <rect x="255" y="48" width="125" height="15" rx="3" fill="#0F172A" fill-opacity="0.9"/>
        <text x="317" y="59" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FDE047" text-anchor="middle">${escapeXml(bridgeText)}</text>

        <!-- PHYSICAL REAR ENTRANCE BRIDGE & GATE (Y=95) -->
        <line x1="270" y1="95" x2="295" y2="95" stroke="#334155" stroke-width="3.5"/>
        <line x1="335" y1="95" x2="505" y2="95" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON BRIDGE ENTRANCE -->
        <rect x="291" y="90" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="331" y="90" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward to Peninsula) -->
        <line x1="295" y1="95" x2="305" y2="106" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="335" y1="95" x2="325" y2="106" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 315 55 L 315 95 C 315 120 330 140 340 160 C 350 170 380 172 416 172" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="300" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT OF BRIDGE GATE) -->
        <g transform="translate(195, 85)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Bridge Gate -->
          <line x1="90" y1="9" x2="96" y2="9" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="96" cy="9" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (OFFSET CLEAR OF WATERWAY) -->
        <g transform="translate(450, 318)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="0" y1="9" x2="-6" y2="9" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="-6" cy="9" r="2" fill="#DC2626"/>
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
      title: '🚪 ທາງເຂົ້າ & ລານໝິງຖາງ',
      l1: '• ປະຕູຮົ້ວ: ດ້ານທີ່ລຽບງ່າຍທີ່ສຸດ ຫຼີກມຸມແຂ້ວເລື່ອຍ',
      l2: '• ທາງລົດ: ໂຄ້ງອ່ອນນ້ອມ ຫ້າມແທງຊື່ຫາເຮືອນ',
      l3: '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງ ຮັບແສງ-ລົມ',
      l4: '• ຫາກມີບໍ່ນ້ຳ: ນ້ຳໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ',
      sub1: 'ລານໝິງຖາງ: ໂລ່ງແຈ້ງກັກເກັບພະລັງຊີ່ (Ju Qi)',
      sub2: '✓ ທາງໂຄ້ງມີໄມຕີ (ເສັ້ນໂຄ້ງມີເມດຕາ) ຈະເລີນຮຸ່ງເຮືອງ'
    },
    entranceHmong: {
      title: '🚪 QHOV ROOJ & THAJ TSHAV',
      l1: '• Qhov Rooj Vag: Sab du tshaj, zam cov hniav txiab',
      l2: '• Kev Tsheb: Nkhaus mos muag (S-Curve), txwv ncaj tua',
      l3: '• Tsis Muaj Dej: Tshav xyoob ntsuab kaj sau zog',
      l4: '• Yog Muaj Dej: Dej ntshiab puag ncig semicircular',
      sub1: 'Thaj Tshav Kaj: Huv si sau ntau lub zog',
      sub2: '✓ Kev Nkhaus Muaj Siab Zoo (Qu Ze You Qing)'
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
      const houseText = isLao ? 'ອາຄານຫຼັກ' : 'Lub Tsev';
      const houseSub = isLao ? 'ຫ້ອງໂຖງໃຫຍ່' : 'Chaw Txais Qhua';
      const waterText = isLao ? '✓ ນ້ຳພຸໃຈກາງ' : '✓ Pas Dej Plawv';
      const partitionText = isLao ? '🛡️ ກຳແພງຕັດແຂ້ວເລື່ອຍ' : '🛡️ Phab Ntsa Txiav';

      return `
        <!-- Surrounding Neighbor Property Labels -->
        <text x="400" y="76" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle">${isLao ? 'ດິນເພື່ອນບ້ານຫຼັງ (Rear Neighbor)' : 'Ciam Av Tom Qab'}</text>
        <text x="225" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(-90 225 200)">${isLao ? 'ເພື່ອນບ້ານຊ້າຍ' : 'Tsev Sab Laug'}</text>
        <text x="575" y="200" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="8" fill="#64748B" text-anchor="middle" transform="rotate(90 575 200)">${isLao ? 'ເພື່ອນບ້ານຂວາ' : 'Tsev Sab Xis'}</text>

        <!-- Irregular Jagged Sawtooth Plot Ground -->
        <polygon points="260,95 380,120 540,95 510,180 550,250 490,300 520,355 380,355 355,300 240,355 270,250 230,170" fill="#FEE2E2"/>
        <polygon points="265,100 380,124 535,100 505,180 545,248 485,298 515,350 380,350 355,296 245,350 274,248 236,170" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Rectangular Internal Sanctuary Wall (Remedy for Jagged plot) -->
        <rect x="290" y="130" width="220" height="195" rx="3" fill="#F0FDF4" stroke="#15803D" stroke-width="2.5"/>
        <rect x="330" y="122" width="140" height="15" rx="3" fill="#15803D"/>
        <text x="400" y="133" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#FFFFFF" text-anchor="middle">${escapeXml(partitionText)}</text>

        <!-- Buffer Trees & Tai Shan Stones in Jagged Teeth pockets -->
        <circle cx="250" cy="110" r="8" fill="#15803D"/>
        <circle cx="530" cy="115" r="8" fill="#15803D"/>
        <circle cx="535" cy="230" r="8" fill="#15803D"/>
        <circle cx="245" cy="210" r="8" fill="#15803D"/>
        <rect x="522" y="240" width="16" height="10" rx="2" fill="#334155"/>
        <text x="530" y="248" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫີນ' : 'Pob'}</text>
        <rect x="237" y="220" width="16" height="10" rx="2" fill="#334155"/>
        <text x="245" y="228" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="6" fill="#F8FAFC" text-anchor="middle">${isLao ? 'ຫີນ' : 'Pob'}</text>

        <!-- Main House inside rectangular sanctuary (Architectural Layout) -->
        <polygon points="325,115 395,90 465,115" fill="#2563EB" stroke="#1E40AF" stroke-width="2"/>
        <rect x="335" y="115" width="120" height="52" fill="#FEF08A" stroke="#854D0E" stroke-width="2" rx="4"/>
        
        <!-- Architectural Room Partition Line -->
        <line x1="382" y1="115" x2="382" y2="167" stroke="#CA8A04" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Left Room: Master Bedroom with Bed Head Against Solid Wall -->
        <rect x="342" y="121" width="30" height="22" rx="2" fill="#FFFFFF" stroke="#0284C7" stroke-width="1"/>
        <rect x="342" y="121" width="30" height="5.5" fill="#0284C7"/>
        <text x="357" y="135" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? 'ຫົວຕຽງ' : 'Taub Hau'}</text>
        <text x="357" y="155" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.8" fill="#475569" text-anchor="middle">${isLao ? 'ຫ້ອງນອນ' : 'Chaw Pw'}</text>

        <!-- Right Room: Main Living Hall -->
        <text x="418" y="138" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="10.5" fill="#1E293B" text-anchor="middle">${escapeXml(houseText)}</text>
        <text x="418" y="154" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="7.8" fill="#475569" text-anchor="middle">${escapeXml(houseSub)}</text>
        
        <!-- Front Main Entrance Door / Porch (Prominently Visible & Unclipped) -->
        <rect x="410" y="167" width="16" height="5" fill="#1E293B"/>
        <text x="418" y="183" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.5" fill="#0F172A" text-anchor="middle">${isLao ? 'ປະຕູໃຫຍ່' : 'Rooj Loj'}</text>

        <!-- Compass Axis Badge inside rectangular core -->
        <g transform="translate(465, 115)">
          <rect x="0" y="0" width="34" height="48" rx="3" fill="#FFFFFF" fill-opacity="0.92" stroke="#0284C7" stroke-width="1.2"/>
          <text x="17" y="12" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດພິງ ⬆' : 'Zaum ⬆'}</text>
          <line x1="17" y1="16" x2="17" y2="32" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2,2"/>
          <polygon points="17,34 14,28 20,28" fill="#0284C7"/>
          <text x="17" y="44" font-family="'Segoe UI', sans-serif" font-weight="bold" font-size="7.5" fill="#0369A1" text-anchor="middle">${isLao ? 'ທິດໜ້າ ⬇' : 'Ntsia ⬇'}</text>
        </g>

        <!-- MING TANG BRIGHT HALL (ລານໝິງຖາງ / THAJ TSHAV KAJ) -->
        <rect x="305" y="202" width="180" height="68" rx="8" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.2" stroke-dasharray="4,3"/>
        <text x="395" y="217" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="8" fill="#15803D" text-anchor="middle">${isLao ? 'ລານໝິງຖາງ (Bright Hall / ເຕົ້າໂຮມພະລັງງານ)' : 'Thaj Tshav Kaj (Ming Tang)'}</text>
        <text x="395" y="231" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#166534" text-anchor="middle">${isLao ? '• ບໍ່ມີບໍ່ນ້ຳ: ລານຫຍ້າຂຽວໂລ່ງສະອາດ ຮັບແສງ-ລົມ' : '• Tsis muaj dej: Tshav xyoob ntsuab kaj'}</text>
        <text x="395" y="244" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="6.2" fill="#0369A1" text-anchor="middle">${isLao ? '• ຫາກມີບໍ່ນ້ຳ: ຕ້ອງໃສສະອາດ ໂອບອຸ້ມເຄິ່ງວົງ' : '• Yog muaj dej: Dej ntshiab puag ncig'}</text>
        <!-- Optional Water Feature Badge -->
        <path d="M 440 258 A 16 8 0 0 0 476 258 Z" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="3,2"/>
        <text x="458" y="255" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-size="5.5" fill="#0284C7" text-anchor="middle">${isLao ? '[ສະນ້ຳ(ຖ້າມີ)]' : '[Pas Dej]'}</text>

        <!-- PHYSICAL FRONT FENCE WITH GATE OPENING IN SAFE FLAT SECTION (Y=355) -->
        <line x1="240" y1="355" x2="310" y2="355" stroke="#334155" stroke-width="3.5"/>
        <line x1="355" y1="355" x2="380" y2="355" stroke="#334155" stroke-width="3.5"/>

        <!-- GATE POSTS ON FRONT FENCE LINE -->
        <rect x="306" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>
        <rect x="351" y="350" width="8" height="10" rx="1.5" fill="#1E293B" stroke="#0F172A" stroke-width="1.2"/>

        <!-- SWINGING GATE DOORS (Open Inward) -->
        <line x1="310" y1="355" x2="320" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="355" y1="355" x2="345" y2="344" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>

        <!-- DRIVEWAY PASSING THROUGH GATE TO HOUSE (100% UNOBSTRUCTED) -->
        <path d="M 332 395 L 332 355 C 332 310 360 275 390 240 C 410 210 410 190 410 172" fill="none" stroke="#F59E0B" stroke-width="3.5" stroke-dasharray="5,4"/>
        <text x="355" y="322" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#B45309" text-anchor="middle">${isLao ? '⟿ ທາງລົດໂຄ້ງອ່ອນນ້ອມ (ຫ້າມແທງຊື່)' : '⟿ Kev Nkhaus Zoo Siab'}</text>

        <!-- [✓] RECOMMENDED GATE BADGE (OFFSET TO LEFT CLEAR OF DRIVEWAY) -->
        <g transform="translate(210, 350)">
          <rect x="0" y="0" width="90" height="18" rx="3" fill="#15803D" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="45" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="7.2" fill="#FFFFFF" text-anchor="middle">${isLao ? '✓ ປະຕູຮົ້ວໃຫຍ່' : '✓ Rooj Vag Loj'}</text>
          <!-- Pointer Line to Gate Post -->
          <line x1="90" y1="9" x2="96" y2="0" stroke="#15803D" stroke-width="1.8"/>
          <circle cx="96" cy="0" r="2" fill="#15803D"/>
        </g>
        
        <!-- [✗] FORBIDDEN GATE BADGE (ANCHORED TO SAWTOOTH APEX) -->
        <g transform="translate(455, 350)">
          <rect x="0" y="0" width="82" height="18" rx="3" fill="#DC2626" stroke="#FFFFFF" stroke-width="1.2"/>
          <text x="41" y="12" font-family="'Noto Sans Lao', 'Segoe UI', sans-serif" font-weight="bold" font-size="6.8" fill="#FFFFFF" text-anchor="middle">${isLao ? '✗ ຫ້າມຕັ້ງປະຕູ' : '✗ Txwv Rooj Vag'}</text>
          <line x1="41" y1="0" x2="41" y2="-5" stroke="#DC2626" stroke-width="1.8"/>
          <circle cx="41" cy="-5" r="2" fill="#DC2626"/>
        </g>
      `;
    }
  }
];
