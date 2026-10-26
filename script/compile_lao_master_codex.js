/**
 * compile_lao_master_codex.js
 * Compiles all 24 Masterclass Lao chapters into:
 * 1. script/compiled_lao_master_chapters.json
 * 2. lao/index.html (chaptersData)
 * 3. book/index.html (LAO_DATA with full 3D flipbook pagination)
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const rootDir = path.resolve(__dirname, '..');
const laoMasterDir = path.join(__dirname, 'lao_master_chapters');
const bookDir = path.join(rootDir, 'book');
const laoDir = path.join(rootDir, 'lao');

// Helper to render figure HTML for book/index.html
function renderBookFig(file, caption) {
  const baseName = path.basename(file);
  const laoRelativePath = 'img/lao/' + baseName;
  const targetFile = fs.existsSync(path.resolve(rootDir, laoRelativePath)) ? laoRelativePath : file;

  return `
    <figure class="book-figure my-2 text-center bg-stone-50/90 border border-stone-200 rounded-xl p-3 sm:p-4 shadow-sm flex flex-col items-center justify-center">
      <div class="relative group cursor-zoom-in overflow-hidden rounded-lg inline-block w-full flex justify-center" onclick="openZoomInspector('../${targetFile}', '${caption.replace(/'/g, "\\'")}')">
        <img src="../${targetFile}" alt="${caption}" class="max-h-[460px] sm:max-h-[500px] w-auto max-w-full mx-auto object-contain rounded transition duration-200 group-hover:scale-[1.02]" loading="lazy">
      </div>
      <figcaption class="text-xs sm:text-sm font-bold text-amber-950 mt-2.5 px-3 leading-relaxed text-center">${caption}</figcaption>
    </figure>
  `;
}

// Helper to render figure HTML for lao/index.html (relative to /lao/ -> ../)
function renderPortalFig(file, caption) {
  const baseName = path.basename(file);
  const laoRelativePath = 'img/lao/' + baseName;
  const targetFile = fs.existsSync(path.resolve(rootDir, laoRelativePath)) ? laoRelativePath : file;

  return `
    <figure class="my-6 text-center bg-stone-50 border border-stone-200 rounded-xl p-4 shadow-sm">
      <div class="relative group cursor-zoom-in overflow-hidden rounded-lg inline-block" onclick="openZoomInspector('../${targetFile}', '${caption.replace(/'/g, "\\'")}')">
        <img src="../${targetFile}" alt="${caption}" class="max-h-80 mx-auto object-contain rounded transition duration-200 group-hover:scale-[1.02]" loading="lazy">
      </div>
      <figcaption class="text-xs sm:text-sm font-semibold text-stone-600 mt-2.5 italic px-2 leading-relaxed">${caption}</figcaption>
    </figure>
  `;
}

// Ordered chapter keys
const chapterOrder = [
  'ch0', 'ch1', 'ch2', 'ch3', 'ch4', 'ch5',
  'ch6', 'ch7', 'ch8', 'ch9', 'ch10', 'ch11',
  'ch12', 'ch13', 'ch14', 'ch15', 'ch16', 'ch17',
  'ch18', 'ch19', 'ch20', 'ch21', 'ch22', 'glossary'
];

// Figure attachments mapping
function getChapterFigures(chId, isBook = true) {
  const render = isBook ? renderBookFig : renderPortalFig;
  let figs = '';

  if (chId === 'ch1') {
    figs = 
      render('img/fig_1_1_directions.png', 'ຮູບທີ 1.1: ສັດສັກສິດປະຈຳ 4 ທິດ ແລະ ວົງຮອບແຫ່ງ 5 ທາດ (Four Celestial Animals & Five Elements)') +
      render('img/fig_1_2_sheng.png', 'ຮູບທີ 1.2: ວັດທະຈັກກໍ່ເກີດແຫ່ງທາດທັງ 5 (Sheng Cycle): ໄມ້ເກີດໄຟ, ໄຟເກີດດິນ, ດິນເກີດຄຳ, ຄຳເກີດນ້ຳ, ນ້ຳເກີດໄມ້') +
      render('img/fig_1_3_ke.png', 'ຮູບທີ 1.3: ວັດທະຈັກຂົ່ມ/ພິຄາດແຫ່ງທາດທັງ 5 (Ke Cycle): ໄມ້ພິຄາດດິນ, ດິນພິຄາດນ້ຳ, ນ້ຳພິຄາດໄຟ, ໄຟພິຄາດຄຳ, ຄຳພິຄາດໄມ້') +
      render('img/fig_1_4_xie.png', 'ຮູບທີ 1.4: ວັດທະຈັກຫຼຸດທອນ/ຖ່າຍເທແຫ່ງທາດທັງ 5 (Xie Cycle): ໄຟຖ່າຍເທໄມ້, ດິນຖ່າຍເທໄຟ, ຄຳຖ່າຍເທດິນ, ນ້ຳຖ່າຍເທຄຳ, ໄມ້ຖ່າຍເທນ້ຳ') +
      render('img/fig_1_5_directions.png', 'ຮູບທີ 1.5: 8 ທິດຫຼັກ ແລະ ມຸມອົງສາແຫ່ງຈານເຂັມທິດ (8 Major Compass Directions)') +
      render('img/fig_1_6_early_heaven.png', 'ຮູບທີ 1.6: ຜັງໂປຍກວ້າກ່ອນສະຫວັນ (Xian Tian Bagua) ຂອງພະຍາຟູຊີ') +
      render('img/fig_1_7_later_heaven.png', 'ຮູບທີ 1.7: ຜັງໂປຍກວ້າຫຼັງສະຫວັນ (Hou Tian Bagua) ຂອງພະຍາວູຫວາງ') +
      render('img/fig_1_8_luoshu_turtle.png', 'ຮູບທີ 1.8: ຕຳນານເຕົ່າສັກສິດລົ່ວຊູ (Luo Shu Divine Turtle) ທີ່ພົບເຫັນໃນແມ່ນ້ຳລົ່ວ') +
      render('img/fig_1_9_luoshu_trigrams.png', 'ຮູບທີ 1.9: ຄວາມສຳພັນລະຫວ່າງຕົວເລກລົ່ວຊູ, 8 ກວ້າ, ແລະ ທິດຕ່າງໆ') +
      render('img/fig_1_10_loshu.png', 'ຮູບທີ 1.10: ຜັງ 9 ວັງລົ່ວຊູ (Lo Shu Nine Palaces Matrix)');
  } else if (chId === 'ch2') {
    figs = 
      render('img/fig_p9_1_base_chart.png', 'ຮູບທີ 2.1: ຜັງດາວພື້ນຖານຍຸກ 9 (Period 9: 2024–2043) ໂດຍມີດາວ 9 ມ່ວງສະຖິດຢູ່ໃຈກາງວັງ') +
      render('img/table_2_4_jiazi.png', 'ຕາຕະລາງທີ 2.1: ວົງຮອບ 60 ປີດອກໄມ້ (Sexagenary 60 Jia Zi Cycle)');
  } else if (chId === 'ch3') {
    figs = 
      render('img/fig_3_1_luopan.png', 'ຮູບທີ 3.1: ຈານເຂັມທິດຫຼົວຜານ (Master Luopan Compass) ສະແດງວົງແຫວນ 24 ທິດເຂົາ ແລະ 120 ມຸມແບ່ງອົງສາ') +
      render('img/fig_3_2_loshu_trigrams.png', 'ຮູບທີ 3.2: ຜັງ 9 ວັງລົ່ວຊູ ແລະ 4 ມຸມກວ້າ (Four Corner Trigrams: Qian, Kun, Gen, Xun)') +
      render('img/fig_3_5_24_mountains.png', 'ຮູບທີ 3.3: ວົງແຫວນ 24 ທິດເຂົາ (24 Mountains Dial)') +
      render('img/fig_3_7_tianchi.png', 'ຮູບທີ 3.4: ສະສະຫວັນ (Tian Chi) ໃຈກາງເຂັມທິດ ພ້ອມເສັ້ນແດງນຳທິດ') +
      render('img/fig_3_8_seated_house.png', 'ຮູບທີ 3.5: ຫຼັກການ ນັ່ງ ແລະ ຫັນໜ້າ (Sitting & Facing)') +
      render('img/lao/fig_3_6_posture_holding.png', 'ຮູບທີ 3.6: ທ່າຢືນ ແລະ ການຖືຈານເຂັມທິດຫຼົວຜານພາກສະໜາມ (Posture & Luopan Holding Protocol)') +
      render('img/lao/fig_3_7_tianchi_alignment.png', 'ຮູບທີ 3.7: ການປັບເຂັມແມ່ເຫຼັກໃຫ້ລົງລັອກສະລອຍສະຫວັນ (Tian Chi Needle Settling to Hai Di Xian)') +
      render('img/lao/fig_3_8_triangulation_map.png', 'ຮູບທີ 3.8: ຜັງການວັດແທກ 3 ຈຸດແບບສາມຫຼ່ຽມພາກສະໜາມ (3-Point Triangulation Protocol)') +
      render('img/lao/fig_3_9_degree_boundaries.png', 'ຮູບທີ 3.9: ແຜນວາດການແບ່ງ 3 ເຂດອົງສາໃນ 1 ພູເຂົາ (Zheng Xian, Jian Xian, Kong Wang)') +
      render('img/lao/fig_3_10_door_tilting_cure.png', 'ຮູບທີ 3.10: ເຕັກນິກການບິດອົງສາປະຕູແກ້ໄຂເສັ້ນສູນສິ້ນຂົງຫວາງ (Door Tilting Qi Realignment Technique)');
  } else if (chId === 'ch4') {
    figs = 
      render('img/fig_4_1_celestial_clock.png', 'ຮູບທີ 4.1: ກຸ່ມດາວຈວຍຕັກນ້ຳເໜືອ (Ursa Major / Beidou) ໂມງດາລາສາດແຫ່ງຈັກກະວານ') +
      render('img/fig_4_2_wu_liang.png', 'ຮູບທີ 4.2: ພາບຄວັດຫີນບູຮານສະໄໝລາຊະວົງຮັ່ນ (Wu Liang Shrine 147 AD)') +
      render('img/fig_4_3_beidou_stars.png', 'ຮູບທີ 4.3: ດາວທັງ 9 ດວງແຫ່ງກຸ່ມດາວເໜືອ: 7 ດວງເຫັນແຈ້ງ + 2 ດວງຊ່ວຍ') +
      render('img/fig_4_4_coin_sword.png', 'ຮູບທີ 4.4: ດາບຫຼຽນບູຮານເຕົ໋າທີ່ເຊື່ອມໂຍງພະລັງແຫ່ງດາວເໜືອ 9 ດວງ') +
      render('img/fig_4_5_spring_ox.png', 'ຮູບທີ 4.5: ພາບງົວລະດູບານໃໝ່ (Spring Ox) ຈາກປຶ້ມປະຕິທິນທົ່ງຊູບູຮານ') +
      render('img/fig_4_6_almanac_stars.png', 'ຮູບທີ 4.6: ຕາຕະລາງດາວເຫີນປະຈຳປີ ແລະ ປະຈຳເດືອນໃນປະຕິທິນຫຼວງ') +
      render('img/fig_4_7_trigram_flip.png', 'ຮູບທີ 4.7: ກົດການພິກເສັ້ນຢິນ-ຢາງແຫ່ງໂປຍກວ້າ (Trigram Flip Mechanics)');
  } else if (chId === 'ch5') {
    figs = 
      render('img/fig_1_10_loshu_colors.png', 'ຮູບທີ 5.1: ຄຸນລັກສະນະ, ສີປະຈຳດາວ ແລະ ພະລັງງານແຫ່ງດາວທັງ 9 ດວງ') +
      render('img/fig_4_3_beidou_stars.png', 'ຮູບທີ 5.2: ຕຳແໜ່ງດາວເຫີນທັງ 9 ດວງໃນລະບົບດາລາສາດຈີນ');
  } else if (chId === 'ch6') {
    figs = 
      render('img/fig_6_1_chinese_house_growth.png', 'ຮູບທີ 6.1: ວິວັດທະນາການຂອງຜັງເຮືອນຈີນບູຮານຕາມຫຼັກການໄຫຼວຽນຂອງຊີ່') +
      render('img/fig_6_2_centroid.png', 'ຮູບທີ 6.2: ວິທີການຊອກຫາຈຸດສູນກາງມວນສານ (Geometric Centroid) ຂອງຜັງອາຄານ') +
      render('img/fig_6_3_pie_slice_method.png', 'ຮູບທີ 6.3: ວິທີການແບ່ງຜັງເຮືອນແບບ ຊິ້ນເຂົ້າໜົມເຄັກ (Pie Slice 8 Sectors)') +
      render('img/fig_6_4_minor_irregularities.png', 'ຮູບທີ 6.4: ການປັບແກ້ໄຂຜັງເຮືອນທີ່ມີສ່ວນເວົ້າສ່ວນຍື່ນ') +
      render('img/fig_6_5_luoshu_orientations.png', 'ຮູບທີ 6.5: ສອງວິທີການວາງຜັງລົ່ວຊູທາບໃສ່ຜັງເຮືອນ') +
      render('img/fig_6_6_nine_palaces_directions.png', 'ຮູບທີ 6.6: ການແບ່ງເຮືອນອອກເປັນ 9 ວັງຕາມທິດທາງແທ້ຈິງ') +
      render('img/fig_6_7_completed_nine_palaces_p7.png', 'ຮູບທີ 6.7: ຜັງ 9 ວັງທີ່ສົມບູນແບບພ້ອມດາວເຫີນປະຈຳຍຸກ') +
      render('img/fig_6_8_condensed_luoshu_rowhouse.png', 'ຮູບທີ 6.8: ການປັບຜັງລົ່ວຊູໃຫ້ເໝາະສົມກັບເຮືອນແຖວຍາວ (Townhouse / Shophouse)');
  } else if (chId === 'ch7') {
    figs = 
      render('img/fig_7_1_three_levels_luoshu.png', 'ຮູບທີ 7.1: ການແບ່ງລົ່ວຊູ 3 ລະດັບ: ລະດັບມະຫາພາກ, ລະດັບກາງ, ແລະ ລະດັບຈຸລະພາກ') +
      render('img/fig_7_2_micro_luoshu_room.png', 'ຮູບທີ 7.2: ຈຸລະພາກລົ່ວຊູ (Micro Luo Shu) ພາຍໃນຫ້ອງນອນ ແລະ ຫ້ອງຄົວ');
  } else if (chId === 'ch8') {
    figs = 
      render('img/fig_8_1_nine_mountain_shapes.png', 'ຮູບທີ 8.1: ຮູບສັນຖານພູເຂົາ 9 ແບບຕາມຫຼັກຫຼວນໂຖວ (Nine Mountain Peaks in Nature)') +
      render('img/fig_8_2_land_plot_shapes.png', 'ຮູບທີ 8.2: 16 ຮູບແບບຕອນດິນໃນຮວງຈຸ້ຍ: ດິນສີ່ຫຼ່ຽມ, ດິນຖົງເງິນຖົງຄຳ, ດິນສາມຫຼ່ຽມໄຟ, ດິນຮູບໂຕ L') +
      render('img/fig_8_3_road_formations.png', 'ຮູບທີ 8.3: ຮູບແບບຖະໜົນຫົນທາງໃນຕົວເມືອງປຽບເໝືອນ ກະແສນ້ຳທຽມ (Roads as Virtual Water)') +
      render('img/fig_8_4_yang_zhai_yin_zhai.png', 'ຮູບທີ 8.4: ຄວາມແຕກຕ່າງລະຫວ່າງ ຮວງຈຸ້ຍເຮືອນຄົນຢູ່ (Yang Zhai) ແລະ ຮວງຈຸ້ຍສຸສານ (Yin Zhai)') +
      render('img/fig_8_5_armchair_landscape.png', 'ຮູບທີ 8.5: ພູມິທັດຮວງຈຸ້ຍ ຕັ່ງນວມບາຣະມີ (Armchair Formation): ຫຼັງເຕົ່າດຳ, ຊ້າຍມັງກອນຂຽວ, ຂວາເສືອຂາວ, ໜ້າຫົງແດງ') +
      render('img/fig_8_6_mountain_sha.png', 'ຮູບທີ 8.6: ຊາພູເຂົາອັນຕະລາຍ: ພູຫຼັງຫັກ, ພູແອບເບິ່ງ, ພູໜ້າແຕກ') +
      render('img/fig_8_7_jade_belt_water.png', 'ຮູບທີ 8.7: ກະແສນ້ຳສາຍແອວຫຍົກ (Jade Belt Water) ໂອບອຸ້ມມຸງຄຸນ VS ກະແສນ້ຳຄັນທະນູປີ້ນ') +
      render('img/fig_8_8_five_color_soil.png', 'ຮູບທີ 8.8: ດິນມັງກອນ 5 ສີສັກສິດ (Sacred Five-Color Dragon Soil)');
  } else if (chId === 'ch9') {
    figs = 
      render('img/fig_9_1_luoshu_nine_palaces_trigrams.png', 'ຮູບທີ 9.1: ຜັງ 9 ວັງລົ່ວຊູ ພ້ອມໂປຍກວ້າ ແລະ ທິດທາງ') +
      render('img/fig_9_2_flight_path.png', 'ຮູບທີ 9.2: ເສັ້ນທາງເຫີນລົ່ວຊູ (The Flight Path: 5 ➔ 6 ➔ 7 ➔ 8 ➔ 9 ➔ 1 ➔ 2 ➔ 3 ➔ 4)') +
      render('img/fig_9_3_base_luoshu_flight.png', 'ຮູບທີ 9.3: ຂັ້ນຕອນການເຫີນຕາມລຳດັບໜ້າ (Forward Flight Sequence)') +
      render('img/fig_9_4_base_luoshu_directions.png', 'ຮູບທີ 9.4: ຜັງລົ່ວຊູພື້ນຖານພ້ອມຕົວເລກປະຈຳທິດ') +
      render('img/fig_9_5_period_star_center.png', 'ຮູບທີ 9.5: ການເອົາດາວປະຈຳຍຸກເຂົ້າສູ່ໃຈກາງວັງ') +
      render('img/fig_9_6_period_7_chart.png', 'ຮູບທີ 9.6: ຜັງດາວຍຸກທີ່ເຫີນຄົບຖ້ວນທັງ 9 ວັງ') +
      render('img/fig_9_7_mountain_stars.png', 'ຮູບທີ 9.7: ການຕື່ມ ດາວພູ (Mountain Star) ໃສ່ມຸມຊ້າຍເທິງຂອງແຕ່ລະວັງ') +
      render('img/fig_9_8_full_flying_star_chart.png', 'ຮູບທີ 9.8: ຜັງດາວເຫີນສະບັບສົມບູນ (Complete Flying Star Chart)') +
      render('img/fig_9_9_cottage_floor_plan_stars.png', 'ຮູບທີ 9.9: ການທາບຜັງດາວເຫີນໃສ່ຜັງພື້ນເຮືອນຕົວຈິງ') +
      render('img/fig_p9_2_shuang_xing_dao_xiang.png', 'ຮູບທີ 9.10: ຜັງດາວຍຸກ 9 ຮູບແບບ ດາວຄູ່ຮອດໜ້າ (Shuang Xing Dao Xiang)') +
      render('img/fig_p9_3_shuang_xing_dao_zuo.png', 'ຮູບທີ 9.11: ຜັງດາວຍຸກ 9 ຮູບແບບ ດາວຄູ່ຮອດຫຼັງ (Shuang Xing Dao Zuo)');
  } else if (chId === 'ch10') {
    figs = render('img/fig_10_1_key_palaces_cottage.png', 'ຮູບທີ 10.1: ການວິເຄາະວັງສຳຄັນໃນຜັງດາວເຫີນຂອງເຮືອນຕົວຢ່າງ');
  } else if (chId === 'ch12') {
    figs = 
      render('img/fig_12_1_period_6_base_chart.png', 'ຮູບທີ 12.1: ຜັງພື້ນຖານຍຸກ 6 ຂອງເຮືອນຕົວຢ່າງ') +
      render('img/fig_12_2_period_6_full_chart_e2.png', 'ຮູບທີ 12.2: ຜັງດາວເຫີນສົມບູນພ້ອມດາວພູ ແລະ ດາວນ້ຳ') +
      render('img/fig_12_3_monthly_stars_month_1_2002.png', 'ຮູບທີ 12.3: ດາວເຫີນປະຈຳເດືອນທີ່ບິນເຂົ້າມາຢ້ຽມຢາມໃນແຕ່ລະວັງ') +
      render('img/fig_12_4_monthly_stars_month_2_2002.png', 'ຮູບທີ 12.4: ການປ່ຽນແປງຂອງດາວເດືອນໃນເດືອນຖັດໄປ') +
      render('img/fig_12_5_star_positions_palace_summary.png', 'ຮູບທີ 12.5: ຕຳແໜ່ງຂອງດາວທັງ 5 ປະເພດໃນແຕ່ລະວັງ');
  } else if (chId === 'ch13') {
    figs = 
      render('img/fig_13_1_wang_shan_wang_xiang.png', 'ຮູບທີ 13.1: ຮູບແບບ ວັ່ງຊານ ວັ່ງຊຽງ (Wang Shan Wang Xiang): ຮຸ່ງເຮືອງທັງຄົນ ແລະ ເງິນຄຳ') +
      render('img/fig_13_2_shang_shan_xia_shui.png', 'ຮູບທີ 13.2: ຮູບແບບ ຊ່າງຊານ ເຊ່ຍສຸຍ (Shang Shan Xia Shui): ດາວພູລົງນ້ຳ, ດາວນ້ຳຂຶ້ນພູ') +
      render('img/fig_13_3_shuang_xing_dao_xiang.png', 'ຮູບທີ 13.3: ຮູບແບບ ຊວງຊິງ ຕົ້າວຊຽງ (Shuang Xing Dao Xiang): ດາວຄູ່ຮອດໜ້າເຮືອນ') +
      render('img/fig_13_4_shuang_xing_dao_zuo.png', 'ຮູບທີ 13.4: ຮູບແບບ ຊວງຊິງ ຕົ້າວຈົ້ວ (Shuang Xing Dao Zuo): ດາວຄູ່ຮອດຫຼັງເຮືອນ') +
      render('img/fig_13_5_he_shi_combination_tens.png', 'ຮູບທີ 13.5: ຮູບແບບ ເຫີຊື (Combination of Ten): ຜົນບວກດາວເທົ່າກັບ 10') +
      render('img/fig_13_6_fu_mu_san_ban_gua.png', 'ຮູບທີ 13.6: ຮູບແບບ ຟູ່ໝູ ຊານປານກວ້າ (Parents Three Plate Formation): ດາວ 1-4-7, 2-5-8, 3-6-9') +
      render('img/fig_13_7_lian_zhu_san_ban_gua.png', 'ຮູບທີ 13.7: ຮູບແບບ ລຽນຈູ ຊານປານກວ້າ (Continuous Three Plate Formation): ດາວລຽງ 3 ດວງ') +
      render('img/fig_13_8_ru_qiu_imprisoned_star.png', 'ຮູບທີ 13.8: ຮູບແບບ ຢູ່ຊິວ (Ru Qiu): ດາວໂຊກລາບຕົກເຂົ້າສູນກາງວັງ') +
      render('img/fig_13_9_remedy_imprisoned_star.png', 'ຮູບທີ 13.9: ວິທີແກ້ໄຂດາວຖືກຂັງໃນຄຸກ ດ້ວຍການເປີດຊ່ອງແສງສະຫວ່າງ ຫຼື ນ້ຳພຸເຄື່ອນໄຫວ') +
      render('img/fig_13_10_fu_yin_fan_yin.png', 'ຮູບທີ 13.10: ຮູບແບບ ຟູອິນ (Fu Yin) ແລະ ຟານອິນ (Fan Yin)') +
      render('img/fig_13_11_cheng_men_jue_castle_gate.png', 'ຮູບທີ 13.11: ສູດປະຕູປາສາດ (Cheng Men Jue): ເຄັດລັບການເປີດປະຕູຮັບໂຊກລາບສຳຮອງ');
  } else if (chId === 'ch14') {
    figs = 
      render('img/fig14_1_tai_sui_san_sha_compass.png', 'ຮູບທີ 14.1: ຈານເຂັມທິດສະແດງທິດໄທ້ສ່ວຍ (Tai Sui), ສຸຍໂພ່ (Sui Po), ແລະ ຊານຊ່າ (San Sha)') +
      render('img/fig14_2_san_he_triads_san_sha.png', 'ຮູບທີ 14.2: ກົດການສາມຮ່ວມ (San He Triads) ແລະ ທິດຊານຊ່າປະຈຳປີ') +
      render('img/fig14_3_malignant_stars_remedies.png', 'ຮູບທີ 14.3: ວິທີແກ້ໄຂດາວຮ້າຍ 5 ເຫຼືອງ (Lian Zhen) ແລະ 2 ດຳ (Ju Men)');
  } else if (chId === 'ch15') {
    figs = 
      render('img/fig_15_1_sheng_productive_cycle.png', 'ຮູບທີ 15.1: ການນຳໃຊ້ວັດທະຈັກກໍ່ເກີດໃນການປັບແກ້ຮວງຈຸ້ຍ') +
      render('img/fig_15_2_ke_controlling_cycle.png', 'ຮູບທີ 15.2: ການຄວບຄຸມທາດຮ້າຍດ້ວຍວັດທະຈັກຂົ່ມ') +
      render('img/fig_15_3_xie_weakening_cycle.png', 'ຮູບທີ 15.3: ການຫຼຸດທອນພະລັງຮ້າຍຢ່າງສະຫງົບດ້ວຍວັດທະຈັກຖ່າຍເທ (Xie Cycle)') +
      render('img/fig_15_4_windchime_and_coins.png', 'ຮູບທີ 15.4: ກະດິ່ງລົມໂລຫະ 6 ທໍ່ ແລະ ຫຼຽນ 6 ຈັກກະພັດ') +
      render('img/fig_15_5_salt_water_cure.png', 'ຮູບທີ 15.5: ໂຖນ້ຳເກືອແກ້ພະລັງຮ້າຍ ອ່ານຢິນສຸຍ (An Ren Shui Salt Water Cure)') +
      render('img/fig_15_6_five_elements_relationships.png', 'ຮູບທີ 15.6: ແຜນວາດສະຫຼຸບຄວາມສຳພັນ 5 ທາດ ແລະ ວິທີການແກ້ໄຂຮວງຈຸ້ຍຄົບວົງຈອນ');
  } else if (chId === 'ch16') {
    figs = 
      render('img/fig_v2_1_land_shapes.png', 'ຮູບທີ 16.1: 10 ຮູບແບບຕອນດິນ ແລະ ການວາງຜັງອາຄານທີ່ຖືກຕ້ອງຕາມຫຼັກວິທະຍາສາດຮວງຈຸ້ຍ') +
      render('img/fig_v2_2_water_formations.png', 'ຮູບທີ 16.2: ລະບົບສາຍນ້ຳໂອບອ້ອມອາຄານ ແລະ ການກັກເກັບກະແສຊັບ (Water Formations & Wealth)') +
      render('img/fig_v2_3_contradictory_mountains.png', 'ຮູບທີ 16.3: ຊາພູເຂົາປໍລະປັກ ແລະ ຮູບຊົງອາຄານທີ່ຕັດທອນພະລັງງານ (Hostile Mountain Sha Formations)') +
      render('img/fig_v2_4_road_clashes.png', 'ຮູບທີ 16.4: ແຜນວາດການປະທະຂອງທາງສາມແພ່ງ ແລະ ມຸມແຫຼມ (Road Clashes & Kinetic Wind Sha)') +
      render('img/fig_v2_5_remedy_blueprints.png', 'ຮູບທີ 16.5: ຜັງແມ່ບົດການແກ້ໄຂຮວງຈຸ້ຍພາຍໃນອາຄານຍຸກ 9 (Interior Yang Zhai Remedy Blueprints)') +
      render('img/fig_v2_6_castle_gate_period9.png', 'ຮູບທີ 16.6: ສູດປະຕູປາສາດຍຸກ 9 (Castle Gate Siting in Period 9): ການເປີດຮັບພະລັງຊັບສຳຮອງ');
  } else if (chId === 'ch17') {
    figs = 
      render('img/fig_v2_case1_shophouse.png', 'ກໍລະນີສຶກສາ 1: ຜັງດາວ ແລະ ການປັບແກ້ໄຂເຮືອນແຖວທຸລະກິດ (Urban Shophouse Case Study)') +
      render('img/fig_v2_case2_villa.png', 'ກໍລະນີສຶກສາ 2: ຜັງດາວ ແລະ ການປັບແກ້ໄຂຄະລຶຫາດວິນລາ (Suburban Luxury Villa Case Study)') +
      render('img/fig_v2_case3_condo.png', 'ກໍລະນີສຶກສາ 3: ຜັງດາວ ແລະ ການປັບແກ້ໄຂຄອນໂດມີນຽມຊັ້ນສູງ (High-Rise Condo Case Study)') +
      render('img/fig_v2_case4_factory.png', 'ກໍລະນີສຶກສາ 4: ຜັງດາວ ແລະ ການປັບແກ້ໄຂໂຮງງານອຸດສາຫະກຳ (Industrial Factory Case Study)') +
      render('img/fig_v2_case5_restaurant.png', 'ກໍລະນີສຶກສາ 5: ຜັງດາວ ແລະ ການປັບແກ້ໄຂຮ້ານອາຫານ (Restaurant Case Study)') +
      render('img/fig_v2_case6_tjunction.png', 'ກໍລະນີສຶກສາ 6: ການແກ້ໄຂທາງສາມແພ່ງຢ່າງສົມບູນ (T-Junction Road Clash Case Study)');
  } else if (chId === 'ch19') {
    figs = 
      render('img/fig_v3_1_yin_zhai_armchair.png', 'ຮູບທີ 19.1: ພູມິທັດຮວງຈຸ້ຍສຸສານບັນພະບຸລຸດແບບຕັ່ງນວມບາຣະມີ (Yin Zhai Armchair Landscape)') +
      render('img/fig_v3_2_generational_fang.png', 'ຮູບທີ 19.2: ຜັງການສົ່ງຜົນຕໍ່ລູກຫຼານແຕ່ລະສາຍຕາມຕຳແໜ່ງພູເຂົາ (Generational Fang Lineage Matrix)') +
      render('img/fig_v3_case1_mountain_grave.png', 'ກໍລະນີສຶກສາສຸສານ 1: ສຸສານຖືກລົມພັດກະແທກເທິງຍອດພູ (High Mountain Wind Sha Case)') +
      render('img/fig_v3_case2_water_erosion.png', 'ກໍລະນີສຶກສາສຸສານ 2: ສຸສານຖືກນ້ຳເຊາະເຈື່ອນ (Water Erosion Case Study)') +
      render('img/fig_v3_case3_road_cut.png', 'ກໍລະນີສຶກສາສຸສານ 3: ເສັ້ນເລືອດມັງກອນຖືກຕັດຂາດ (Road Cut Severing Vein Case)') +
      render('img/fig_v3_case4_mingtang_mud.png', 'ກໍລະນີສຶກສາສຸສານ 4: ໝິງຖາງນ້ຳເປື້ອນຂັງ (Muddy Ming Tang Case Study)') +
      render('img/fig_v3_case5_cemetery_park.png', 'ກໍລະນີສຶກສາສຸສານ 5: ການເລືອກຕຳແໜ່ງໃນສຸສານລວມ (Modern Cemetery Park Case)') +
      render('img/fig_v3_case6_qian_zang.png', 'ກໍລະນີສຶກສາສຸສານ 6: ການແກ້ໄຂອົງສາບ່ຽງເບນ (Qian Zang Realignment Case)');
  } else if (chId === 'ch20') {
    figs = 
      render('img/fig_case_sheng_long.png', 'ຮູບທີ 20.1: ມັງກອນມີຊີວິດ (Sheng Long): ສັນພູຄົດລ້ຽວອ່ອນຊ້ອຍ ຕົ້ນໄມ້ຂຽວສົດຊື່ນ ມີພະລັງ Sheng Qi') +
      render('img/fig_case_si_long.png', 'ຮູບທີ 20.2: ມັງກອນຕາຍ (Si Long): ສັນພູແຫ້ງແລ້ງ ຊັນຫັກ ຄົມແຫຼມ ບໍ່ມີພືດພັນ ສະແດງເຖິງພະລັງທີ່ດັບມອດ') +
      render('img/fig_case_fan_bei_shan.png', 'ຮູບທີ 20.3: ພູຫຼັງຫັກ (Fan Bei Shan): ພູເຂົາທີ່ຫັນຫຼັງໃຫ້ອາຄານ ນຳພາການທໍລະຍົດ ແລະ ສູນເສຍ') +
      render('img/fig_case_tan_tou_shan.png', 'ຮູບທີ 20.4: ພູແອບເບິ່ງ (Tan Tou Shan): ຍອດພູທີ່ໂຜ່ຂຶ້ນມາດ້ານຫຼັງປຽບເໝືອນໂຈນແອບເບິ່ງ ນຳພາຄະດີຄວາມ') +
      render('img/fig_case_plot_zheng_fang.png', 'ຮູບທີ 20.5: ຕອນດິນສີ່ຫຼ່ຽມສະເໝີ (Zheng Fang Tu): ດິນທາດດິນ ໝັ້ນຄົງ ເໝາະສົມສຳລັບສ້າງບ້ານພັກອາໄສ') +
      render('img/fig_case_plot_jin_dai_dou.png', 'ຮູບທີ 20.6: ຕອນດິນຖົງເງິນຖົງຄຳ (Jin Dai Dou): ໜ້າແຄບ ຫຼັງກວ້າງ ກັກເກັບຊັບສິນຮັ່ງມີຢ່າງຍືນຍົງ') +
      render('img/fig_case_plot_san_jiao_tu.png', 'ຮູບທີ 20.7: ຕອນດິນສາມຫຼ່ຽມໄຟ (San Jiao Tu): ມຸມແຫຼມພຸ່ງຊົນ ເກີດອັກຄີໄພ ແລະ ຜ່າຕັດ') +
      render('img/fig_case_plot_l_shape.png', 'ຮູບທີ 20.8: ຕອນດິນຮູບໂຕ L (L-Shape Knife Plot): ຂາດວັງພະລັງງານ ຕ້ອງແບ່ງເປັນ 2 ສີ່ຫຼ່ຽມ') +
      render('img/fig_case_lu_chong_remedy.png', 'ຮູບທີ 20.9: ວິທີແກ້ໄຂທາງສາມແພ່ງ (Lu Chong Mitigation): ການຕັ້ງກຳແພງໂຄ້ງ ແລະ ນ້ຳພຸ') +
      render('img/fig_case_fan_gong_remedy.png', 'ຮູບທີ 20.10: ວິທີແກ້ໄຂກະແສນ້ຳຄັນທະນູປີ້ນ (Fan Gong Water Remedy): ການປູກແນວໄມ້ບັງກະແສ');
  }

  return figs;
}

// 1. Build Master Chapters Array
const laoMasterChapters = [];
chapterOrder.forEach(chId => {
  const filePath = path.join(laoMasterDir, chId === 'glossary' ? 'glossary_master_lao.js' : `${chId}_master_lao.js`);
  if (fs.existsSync(filePath)) {
    const mod = require(filePath);
    laoMasterChapters.push({
      id: mod.id,
      title: mod.title,
      html: mod.html
    });
  } else {
    console.error(`Warning: Missing chapter file: ${filePath}`);
  }
});

console.log(`Loaded ${laoMasterChapters.length} master chapters.`);

// Save compiled master chapters for both portal and flipbook
const portalChapters = laoMasterChapters.map(ch => ({
  id: ch.id,
  title: ch.title,
  html: ch.html + getChapterFigures(ch.id, false)
}));

fs.writeFileSync(path.join(__dirname, 'compiled_lao_master_chapters.json'), JSON.stringify(portalChapters, null, 2), 'utf8');
console.log('Saved compiled_lao_master_chapters.json');

// 2. Update lao/index.html
const laoIndexPath = path.join(laoDir, 'index.html');
if (fs.existsSync(laoIndexPath)) {
  let laoHtml = fs.readFileSync(laoIndexPath, 'utf8');
  const startMarker = 'const chaptersData = ';
  const startIdx = laoHtml.indexOf(startMarker);
  if (startIdx !== -1) {
    // Find the end of chaptersData array
    const endMarker = ';\n    let currentChapterIndex = ';
    let endIdx = laoHtml.indexOf(endMarker, startIdx);
    if (endIdx === -1) {
      endIdx = laoHtml.indexOf('let currentChapterIndex = ', startIdx);
    }

    if (endIdx !== -1) {
      laoHtml = laoHtml.substring(0, startIdx + startMarker.length) +
        JSON.stringify(portalChapters) +
        laoHtml.substring(endIdx);
      fs.writeFileSync(laoIndexPath, laoHtml, 'utf8');
      console.log('Successfully updated lao/index.html with master chapters!');
    } else {
      console.error('Could not find end of chaptersData in lao/index.html');
    }
  } else {
    console.error('Could not find chaptersData in lao/index.html');
  }
}

// 3. Prepare Book Chapters with Book Figures
const bookChapters = laoMasterChapters.map(ch => ({
  id: ch.id,
  title: ch.title,
  html: ch.html + getChapterFigures(ch.id, true)
}));

// Pagination for book/index.html with tag-safe DOM block decomposition
async function paginateLaoContent(chapters) {
  const pages = [];
  const tocEntries = [];

  // Page 1: Illustrated Cover
  pages.push({
    isCover: true,
    chId: 'cover',
    chTitle: 'ໜ້າປົກຄຳພີຫຼວງ',
    html: `
      <div class="h-full w-full bg-gradient-to-br from-red-950 via-stone-900 to-amber-950 border-4 sm:border-8 border-amber-600/80 p-4 sm:p-6 flex flex-col justify-between items-center text-center shadow-2xl relative overflow-hidden rounded-2xl select-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(217,119,6,0.22),transparent_70%)] pointer-events-none"></div>
        
        <div class="border-2 border-amber-500/70 px-3.5 py-1 rounded-full text-amber-300 text-[10px] sm:text-xs font-bold tracking-widest uppercase shadow-md bg-stone-950/80 z-10 backdrop-blur-sm">
          玄空飞星 • 皇极三元 • ດາວເຫີນສະບັບສົມບູນ
        </div>
        
        <div class="my-auto w-full flex flex-col items-center gap-2.5 sm:gap-3 z-10 px-1">
          <div class="relative w-full max-w-[340px] sm:max-w-md rounded-xl overflow-hidden border-2 border-amber-400 shadow-2xl group cursor-zoom-in bg-stone-950" onclick="openZoomInspector('../img/lao/fig_landscape_armchair.jpg', 'ພາບປົກຄຳພີ: ພູມິທັດຮວງຈຸ້ຍຫຼວນໂຖວ 4 ສັດສັກສິດ (Four Celestial Animals Armchair Landscape)')">
            <img src="../img/lao/fig_landscape_armchair.jpg" alt="Cover Landscape Masterpiece" class="w-full h-44 sm:h-52 object-cover object-center transform transition duration-300 group-hover:scale-105" loading="eager">
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent"></div>
            <div class="absolute bottom-1.5 inset-x-0 text-center text-amber-200 text-[11px] font-bold tracking-wider drop-shadow">
              四正四隅 • 山环水抱 • 藏风聚气
            </div>
          </div>

          <h1 class="text-xl sm:text-2xl md:text-3xl font-black text-amber-300 leading-tight drop-shadow-md tracking-wide px-2 mt-1">
            ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ
          </h1>
          <div class="text-xs sm:text-sm md:text-base font-bold text-amber-400/90 tracking-wider">
            ສະບັບສົມບູນ ສາມວົງຮອບ ເກົ້າຍຸກ (三元九运) • ເຈາະເລິກຍຸກ 9 (2024–2043)
          </div>
          <p class="text-[10px] sm:text-xs text-amber-100/80 font-medium max-w-sm mx-auto leading-relaxed border-t border-b border-amber-600/40 py-1.5 sm:py-2">
            24 ບົດຮຽນ • 12 ກໍລະນີສຶກສາຕົວຈິງ • 105 ພູມສັນຖານ • ສູດດາວປະສົມ 81 ຄູ່
          </p>
        </div>

        <div class="border-t border-amber-600/60 w-full pt-2.5 sm:pt-3 flex justify-between items-center text-[10px] sm:text-xs text-amber-300/80 z-10">
          <span class="font-semibold">ຄະນະອາຈານຊ່ຽວຊານຮວງຈຸ້ຍ</span>
          <span class="bg-red-900/90 text-amber-200 border border-amber-400 px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest shadow">大吉大利</span>
        </div>
      </div>
    `
  });

  // Page 2: Foreword & Colophon
  pages.push({
    isColophon: true,
    chId: 'colophon',
    chTitle: 'ຄຳນຳ & ປະຫວັດສາຍວິຊາ',
    html: `
      <div class="p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full text-xs sm:text-sm leading-relaxed text-stone-800 bg-[#fdfbf7] relative overflow-hidden select-none">
        <!-- Classical Watermark Background -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,83,9,0.04),transparent_70%)] pointer-events-none"></div>

        <div>
          <!-- Header with Seal Banner -->
          <div class="flex items-center justify-between border-b-2 border-amber-800/60 pb-3 mb-4">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-widest text-amber-700 block">IMPERIAL PREFACE & HISTORICAL TRANSMISSION</span>
              <h2 class="text-lg sm:text-xl md:text-2xl font-black text-amber-950 mt-0.5">
                ຄຳນຳຄຳພີຫຼວງ & ສາຍທານປະຫວັດສາດ 5,000 ປີ
              </h2>
            </div>
            <span class="bg-amber-900 text-amber-100 border border-amber-700 px-2.5 py-1 rounded text-[10px] font-bold tracking-widest uppercase shadow-sm">
              玄空秘笈
            </span>
          </div>

          <!-- Body Text 1: The Essence of Xuan Kong -->
          <p class="mb-3 text-justify leading-relaxed">
            ຄຳພີ <strong>"ສານຸກົມຮວງຈຸ້ຍດາວເຫີນ ສະບັບສົມບູນ"</strong> ເຫຼັ້ມນີ້ ຄືການປະມວນອົງຄວາມຮູ້ແຫ່ງສາຍວິຊາ <strong>ສຽນຄົງເຟຍຊິງ (Xuan Kong Fei Xing 玄空飞星)</strong> ຂັ້ນສູງສຸດແຫ່ງລາຊະສຳນັກຈັກກະພັດຈີນບູຮານ. ວິຊານີ້ຄືສາດແຫ່ງການປະສານພະລັງງານລະຫວ່າງ <strong>"ມິຕິເວລາ" (Time)</strong> ຂອງດວງດາວໃນຈັກກະວານ ແລະ <strong>"ມິຕິພື້ນທີ່" (Space)</strong> ຂອງແຜ່ນດິນໂລກ ໃຫ້ເກີດຄວາມສົມດຸນສູງສຸດແກ່ຊີວິດມະນຸດ.
          </p>

          <!-- Classical Couplet Callout -->
          <div class="bg-amber-50/90 border-l-4 border-amber-700 p-3.5 my-3.5 rounded-r-xl shadow-sm text-xs space-y-1.5">
            <div class="font-serif text-amber-950 font-bold text-center sm:text-left text-xs sm:text-sm">
              “气乘风则散，界水则止。古人聚之使不散，行之使有止，故谓之风水。”
            </div>
            <div class="text-[11px] text-amber-900/90 leading-relaxed font-medium">
              — <em>ອາຈານໃຫຍ່ ກົວຜູ (Guo Pu), ຄຳພີຝັງສົບ "ຈ້າງຊູ" (Zang Shu), ລາຊະວົງຈິນ ຄ.ສ 276–324</em><br>
              <strong>ຄວາມໝາຍ:</strong> ພະລັງງານຊີ່ ຂີ່ໄປກັບສາຍລົມແລ້ວກະຈາຍຫາຍໄປ, ພົບສາຍນ້ຳແລ້ວຈຶ່ງຢຸດສະສົມ. ບັນພະບຸລຸດຈຶ່ງຮວບຮວມບໍ່ໃຫ້ກະຈາຍ ແລະ ຊັກນຳໃຫ້ສະສົມ ຈຶ່ງເອີ້ນວິຊານີ້ວ່າ <strong>"ຮວງຈຸ້ຍ" (ລົມ ແລະ ນ້ຳ)</strong>.
            </div>
          </div>

          <!-- Lineage Transmission Timeline -->
          <div class="my-3 space-y-1.5 text-xs text-stone-700 border-t border-b border-amber-900/20 py-2.5">
            <div class="font-bold text-amber-950 text-xs mb-1">ສາຍທານການສືບທອດແຫ່ງມະຫາປໍຣະມາຈານ 5 ຍຸກສະໄໝ:</div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div>• <strong>ຝູຊີ & ພະຍາອວີ່:</strong> ຕົ້ນກຳເນີດແຜ່ນຍັນຮືໂຕ້ (He Tu) ແລະ ລົ່ວຊູ (Luo Shu).</div>
              <div>• <strong>ກົວຜູ (Guo Pu):</strong> ບິດາແຫ່ງຮວງຈຸ້ຍ ແລະ ຄຳພີຝັງສົບ Zang Shu.</div>
              <div>• <strong>ຢາງຢຸນຊົງ (Yang Yun Song):</strong> ປໍຣະມາຈານລາຊະວົງຖັງ ຜູ້ແຕ່ງຄຳພີ Tian Yu Jing.</div>
              <div>• <strong>ຈຽງຕ້າຫົງ (Jiang Da Hong):</strong> ຜູ້ປະພັນ Di Li Bian Zheng ລາຊະວົງໝິງ-ຊິງ.</div>
              <div class="sm:col-span-2">• <strong>ເສິ່ນຈູ່ວຢົງ (Shen Zhu Reng):</strong> ວິລະບຸລຸດຜູ້ຖອດລະຫັດສຽນຄົງໃນຄຳພີ <em>Shen Shi Xuan Kong Xue</em> ສູ່ສາຍຕາຊາວໂລກ.</div>
            </div>
          </div>

          <p class="text-justify text-xs text-stone-700 leading-relaxed">
            ຄຳພີສະບັບນີ້ ບັນຈຸຄົບຖ້ວນທັງ <strong>24 ບົດຮຽນໃຫຍ່, 12 ກໍລະນີສຶກສາຕົວຈິງ, 105 ພູມສັນຖານຫຼວນໂຖວ, ສູດດາວປະສົມ 81 ຄູ່ຄົບ 100%, ພິມຂຽວ 24 ທິດທາງຍຸກ 9, ວິຊາດາວປ່ຽນແທນ 144 ແບບ, ແລະ ສູດປະຕູວັງຫຼວງ</strong> ເພື່ອໃຫ້ເປັນຄູ່ມືອັນຊົງຄຸນຄ່າແກ່ອະນຸຊົນຮຸ່ນຫຼັງຕະຫຼອດໄປ.
          </p>
        </div>

        <!-- Colophon Footer -->
        <div class="border-t-2 border-amber-800/40 pt-3 flex justify-between items-center text-[10px] sm:text-xs text-stone-500 font-medium">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>ຄະນະອາຈານຊ່ຽວຊານຮວງຈຸ້ຍສຽນຄົງ ດາວເຫີນ</span>
          </div>
          <span class="font-bold text-amber-900 tracking-wider">三元九运 • 2024–2043 ຍຸກ 9 ທາດໄຟ</span>
        </div>
      </div>
`
  });

  // Page 3: TOC Placeholder
  const tocPageIndex = pages.length;
  pages.push({
    isToc: true,
    chId: 'toc',
    chTitle: 'ສາລະບານທັງໝົດ',
    html: ''
  });

  // Decompose chapters into atomic, tag-safe DOM blocks using headless browser
  const browser = await chromium.launch({ headless: true });
  const bPage = await browser.newPage();

  const decomposed = await bPage.evaluate((allChapters) => {
    function decompose(chHtml) {
      const container = document.createElement('div');
      container.innerHTML = chHtml;
      const blocks = [];

      function collectBlocks(node) {
        if (!node) return;
        const isTransparent = node === container || (node.classList && (
          node.classList.contains('chapter-content') ||
          node.tagName === 'SECTION' ||
          node.classList.contains('space-y-6') ||
          node.classList.contains('space-y-4') ||
          node.classList.contains('space-y-3.5') ||
          node.classList.contains('space-y-3')
        ));

        if (isTransparent && node.children && node.children.length > 0) {
          Array.from(node.children).forEach(child => collectBlocks(child));
          return;
        }

        blocks.push({
          tag: node.tagName,
          isH1: node.tagName === 'H1',
          isH2: node.tagName === 'H2',
          isH3: node.tagName === 'H3',
          isHeading: /^H[123]$/.test(node.tagName),
          isFig: node.tagName === 'FIGURE' || Boolean(node.querySelector('figure, img')),
          isTable: node.tagName === 'TABLE' || Boolean(node.querySelector('table')),
          html: node.outerHTML,
          textLen: node.innerText ? node.innerText.trim().length : 0
        });
      }

      collectBlocks(container);
      return blocks;
    }

    return allChapters.map(ch => ({
      id: ch.id,
      title: ch.title,
      blocks: decompose(ch.html)
    }));
  }, chapters);

  await browser.close();

  // Track starting page for each chapter (Cover=1, Colophon=2, TOC=3 -> 4)
  let pageCounter = 3;

  decomposed.forEach(ch => {
    const chStartPage = pageCounter + 1;
    tocEntries.push({
      id: ch.id,
      title: ch.title,
      page: chStartPage
    });

    let curBlocks = [];
    let curTextLen = 0;
    let curFigs = 0;
    let curTables = 0;

    function pushCurrentPage() {
      if (curBlocks.length === 0) return;
      pageCounter++;
      const innerHtml = curBlocks.map(b => b.html).join('\n');
      pages.push({
        chId: ch.id,
        chTitle: ch.title,
        html: `
          <div class="chapter-page p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full text-stone-800 leading-relaxed text-xs sm:text-sm">
            <div class="page-content overflow-y-auto pr-1">
              ${innerHtml}
            </div>
          </div>
        `
      });
      curBlocks = [];
      curTextLen = 0;
      curFigs = 0;
      curTables = 0;
    }

    for (let i = 0; i < ch.blocks.length; i++) {
      const b = ch.blocks[i];

      if (curBlocks.length > 0) {
        // Never break if current page is only chapter header (less than 400 chars)
        const isTitleOnly = (curBlocks.length === 1 && curBlocks[0].isHeading);

        if (!isTitleOnly) {
          // Rule 1: We already have a figure plate -> push so the figure page closes cleanly
          if (curFigs >= 1) pushCurrentPage();
          // Rule 2: Incoming is a figure plate and current page already has substantial text -> push so figure starts on a fresh page
          else if (b.isFig && curTextLen > 450) pushCurrentPage();
          // Rule 3: Incoming is Table and current page already has text > 500 -> push so table stays with its heading
          else if (b.isTable && curTextLen > 500) pushCurrentPage();
          // Rule 4: Incoming is H2 heading and current page already has > 650 chars -> push to keep heading with its section!
          else if (b.isH2 && curTextLen > 650) pushCurrentPage();
          // Rule 5: Text capacity limit (~2,100 chars)
          else if (curTextLen > 800 && (curTextLen + b.textLen > 2100)) pushCurrentPage();
        }
      }

      curBlocks.push(b);
      curTextLen += b.textLen;
      if (b.isFig) curFigs++;
      if (b.isTable) curTables++;
    }

    if (curBlocks.length > 0) {
      pushCurrentPage();
    }
  });

  // Table of Contents HTML
  let tocHtml = `
    <div class="p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full text-xs text-stone-800">
      <div>
        <div class="flex items-center justify-between border-b-2 border-amber-800/40 pb-2 mb-3">
          <h2 class="text-base sm:text-lg md:text-xl font-black text-amber-950">
            ສາລະບານທັງໝົດ (Table of Contents)
          </h2>
          <span class="text-[10px] sm:text-xs text-amber-700 font-bold">24 CHAPTERS</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-1 overflow-y-auto max-h-[70vh] pr-1">
  `;

  tocEntries.forEach((entry, idx) => {
    tocHtml += `
      <div class="flex items-baseline justify-between border-b border-stone-100 py-1 hover:bg-amber-50 cursor-pointer rounded px-1.5 transition" onclick="jumpToPage(${entry.page})">
        <span class="truncate pr-2 font-medium text-amber-950 text-xs">
          <span class="text-amber-600 font-bold mr-1">${idx + 1}.</span> ${entry.title}
        </span>
        <span class="text-amber-800 font-bold shrink-0 text-xs">${entry.page}</span>
      </div>
    `;
  });

  tocHtml += `
        </div>
      </div>
      <div class="border-t border-stone-200 pt-2 text-[10px] text-stone-500 text-center">
        ຄລິກໃສ່ບົດໃດໜຶ່ງເພື່ອເປີດພິກໄປໜ້າດັ່ງກ່າວທັນທີ
      </div>
    </div>
  `;

  pages[tocPageIndex].html = tocHtml;

  pages.forEach((p, idx) => {
    p.pageNum = idx + 1;
  });

  return { pages, tocEntries };
}

// 4. Update book/index.html
(async () => {
  const bookIndexPath = path.join(bookDir, 'index.html');
  if (fs.existsSync(bookIndexPath)) {
    let bookHtml = fs.readFileSync(bookIndexPath, 'utf8');
    const paginatedLao = await paginateLaoContent(bookChapters);

    console.log(`Paginated Lao Master Codex into ${paginatedLao.pages.length} pages!`);

    const laoStartMarker = 'const LAO_DATA = ';
    const hmongMarker = 'const HMONG_DATA = ';

    const laoStartIdx = bookHtml.indexOf(laoStartMarker);
    const hmongIdx = bookHtml.indexOf(hmongMarker);

    if (laoStartIdx !== -1 && hmongIdx !== -1) {
      bookHtml = bookHtml.substring(0, laoStartIdx + laoStartMarker.length) +
        JSON.stringify(paginatedLao) + ';\n        ' +
        bookHtml.substring(hmongIdx);
      
      fs.writeFileSync(bookIndexPath, bookHtml, 'utf8');
      console.log('Successfully updated book/index.html with master LAO_DATA!');
    } else {
      console.error('Could not locate LAO_DATA insertion point in book/index.html');
    }
  }
})();
