/**
 * ch21_master_lao.js
 * ບົດທີ 21: ວິຊາດາວປ່ຽນແທນ (Substituted Stars Formula - Ti Gua)
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch21",
  title: "ບົດທີ 21: ວິຊາດາວປ່ຽນແທນ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 6: ວິຊາລັບຂັ້ນສູງສຸດ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 21: ວິຊາດາວປ່ຽນແທນ (Substituted Stars - Ti Gua 替卦)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ຄວາມລັບຄຳກອນເສິ່ນຊື່ (Shen's Poem), ການແກ້ໄຂອົງສາບ່ຽງບ່ຽງ (Xia Xian), ເສັ້ນສູນສິ້ນ (Kong Wang) ແລະ ເຄັດລັບ "ປະຕູບ່ຽງ" (Xie Men)</p>
      </div>

      <!-- Section 1: Intro to Substituted Stars -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຫຼັກການ ແລະ ຄວາມຈຳເປັນຂອງວິຊາດາວປ່ຽນແທນ (Ti Gua Theory)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນການວັດແທກຮວງຈຸ້ຍດ້ວຍເຂັມທິດຫຼົວຜານ (Luo Pan), ແຕ່ລະພູເຂົາໃນ 24 ພູເຂົາຈະມີຂອບເຂດກວ້າງ <strong>15 ອົງສາ</strong>. ຄວາມບໍລິສຸດຂອງພະລັງງານຈະຖືກແບ່ງອອກເປັນ 3 ເຂດດັ່ງນີ້:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-3 text-xs">
          <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-300 space-y-1.5">
            <h3 class="font-bold text-emerald-950 text-sm">1. ເຈີ້ງຊ່ຽນ (Zheng Xian 正线)</h3>
            <p class="text-stone-700 leading-relaxed">
              <strong>ອົງສາກົງກາງ:</strong> ບ່ຽງບໍ່ເກີນ <strong>3 ອົງສາ</strong> ຈາກຈຸດສູນກາງຂອງພູເຂົາ (±1.5°).<br>
              <span class="text-emerald-900 font-bold">ສະຖານະ:</span> ພະລັງງານບໍລິສຸດ 100%! ໃຊ້ຜັງດາວເດີມປົກກະຕິ (Zheng Pan) ໄດ້ເລີຍ.
            </p>
          </div>

          <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-300 space-y-1.5">
            <h3 class="font-bold text-amber-950 text-sm">2. ເສຍຊ່ຽນ (Xia Xian 下线)</h3>
            <p class="text-stone-700 leading-relaxed">
              <strong>ອົງສາບ່ຽງ:</strong> ບ່ຽງລະຫວ່າງ <strong>3 ຫາ 4.5 ອົງສາ</strong> ຈາກຈຸດກາງ (ເຂົ້າໃກ້ຂອບເຂດພູເຂົາອື່ນ).<br>
              <span class="text-amber-900 font-bold">ສະຖານະ:</span> ພະລັງງານເລີ່ມປັ່ນປ່ວນ! <strong>ຕ້ອງໃຊ້ສູດດາວປ່ຽນແທນ (Ti Gua)</strong> ທັນທີ ຫ້າມໃຊ້ຜັງເດີມ.
            </p>
          </div>

          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300 space-y-1.5">
            <h3 class="font-bold text-rose-950 text-sm">3. ຂົງຫວາງ (Kong Wang 空亡)</h3>
            <p class="text-stone-700 leading-relaxed">
              <strong>ເສັ້ນສູນສິ້ນ:</strong> ບ່ຽງເກີນ <strong>4.5 ອົງສາ</strong> ຂຶ້ນໄປ ຫຼື ຕົກຢູ່ເສັ້ນແບ່ງລະຫວ່າງ 2 ພູເຂົາພໍດີ.<br>
              <span class="text-rose-900 font-bold">ສະຖານະ:</span> ພະລັງງານວ່າງເປົ່າ ແລະ ຜິດປົກກະຕິຮ້າຍແຮງ! ເກີດພາບຫຼອນ, ປະສາດຫຼອນ, ລົ້ມລະລາຍ.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 2: Classical Shen's Ti Gua Song -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ຄຳກອນດາວປ່ຽນແທນຕະກູນເສິ່ນ (Shen's Substituted Star Poem)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ອາຈານໃຫຍ່ ເສິ່ນຈູ່ວຢົງ (Shen Zhu Reng) ໄດ້ບັນທຶກຄຳກອນລັບທີ່ໃຊ້ຖອດລະຫັດດາວປ່ຽນແທນໄວ້ໃນຄຳພີ <em>"ເສິ່ນຊື່ສຽນຄົງເສວ່"</em> ດັ່ງນີ້:
        </p>

        <div class="p-4 bg-stone-900 text-amber-300 rounded-xl font-mono text-xs space-y-2 leading-relaxed">
          <div class="text-white font-bold text-sm border-b border-stone-700 pb-1">ຄຳກອນບູຮານ (沈氏替卦歌):</div>
          <p class="text-amber-400 font-bold text-sm">
            子癸并甲申，贪狼一路行；<br>
            壬卯乙未坤，五位为巨门；<br>
            乾亥辰巽巳，武曲连罡星；<br>
            艮丙辛酉丑，破军廉贞并；<br>
            寅午庚丁戌，右弼辅九星。
          </p>
          <div class="text-stone-300 text-[11px] font-sans pt-1">
            <strong>ຄຳແປ ແລະ ຄວາມໝາຍ:</strong><br>
            • ພູເຂົາ <strong>Zi, Gui, Jia, Shen</strong>: ປ່ຽນແທນດ້ວຍ <strong>ດາວ 1 ທຳຫຼາງ (Tan Lang)</strong>.<br>
            • ພູເຂົາ <strong>Ren, Mao, Yi, Wei, Kun</strong>: ປ່ຽນແທນດ້ວຍ <strong>ດາວ 2 ຈີ້ເໝິນ (Ju Men)</strong>.<br>
            • ພູເຂົາ <strong>Qian, Hai, Chen, Xun, Si</strong>: ປ່ຽນແທນດ້ວຍ <strong>ດາວ 6 ອູ່ຊີ (Wu Qu)</strong>.<br>
            • ພູເຂົາ <strong>Gen, Bing, Xin, You, Chou</strong>: ປ່ຽນແທນດ້ວຍ <strong>ດາວ 7 ຜົວຈວິນ (Po Jun)</strong>.<br>
            • ພູເຂົາ <strong>Yin, Wu, Geng, Ding, Xu</strong>: ປ່ຽນແທນດ້ວຍ <strong>ດາວ 9 ຢິ້ວປີ່ (You Bi)</strong>.
          </div>
        </div>
      </section>

      <!-- Section 3: The Xie Men Remedy for Kong Wang -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ເຄັດລັບການແກ້ໄຂເສັ້ນສູນສິ້ນ: ວິຊາປະຕູບ່ຽງ (Xie Men 斜门)</h2>
        <div class="p-4 bg-amber-50 rounded-xl border border-amber-300 text-xs text-stone-800 space-y-2 leading-relaxed">
          <p class="font-bold text-amber-950 text-sm">
            🚪 ວິທີແກ້ໄຂເຮືອນທີ່ສ້າງຕົກເສັ້ນສູນສິ້ນ (Kong Wang Remedy):
          </p>
          <p class="doc-p text-justify">
            ຖ້າເຮືອນສ້າງຕິດເສັ້ນສູນສິ້ນໃຫຍ່ (Da Kong Wang - ເສັ້ນແບ່ງລະຫວ່າງ 8 ທິດຫຼັກ) ຫຼື ເສັ້ນສູນສິ້ນນ້ອຍ (Xiao Kong Wang - ເສັ້ນແບ່ງລະຫວ່າງ 24 ພູເຂົາ) ບໍ່ສາມາດຮື້ຖອນອາຄານໄດ້: <strong>ວິທີແກ້ໄຂທີ່ສັກສິດທີ່ສຸດຄື "ການເຮັດປະຕູບ່ຽງ" (Xie Men 斜门)</strong>!
          </p>
          <p class="doc-p text-justify">
            ຄືການປ່ຽນມຸມບານປະຕູໃຫຍ່ໜ້າເຮືອນ ໃຫ້ບ່ຽງອອກຈາກແນວຝາເດີມ <strong>5 ຫາ 8 ອົງສາ</strong> ເພື່ອດຶງເອົາອົງສາການຮັບກະແສ Qi ໃຫ້ຫຼຸດອອກຈາກເສັ້ນສູນສິ້ນ ແລ້ວແລ່ນເຂົ້າສູ່ເຂດ <em>"ເຈີ້ງຊ່ຽນ" (Zheng Xian)</em> ທີ່ບໍລິສຸດຂອງພູເຂົາໃກ້ຄຽງ. ວິທີນີ້ສາມາດປ່ຽນເຮືອນທີ່ມີຜີຫຼອກ ຫຼື ທຸລະກິດລົ້ມລະລາຍ ໃຫ້ກັບມາມີຊີວິດຊີວາ ແລະ ສ້າງລາຍໄດ້ໄດ້ຢ່າງມະຫັດສະຈັນ!
          </p>
        </div>
      </section>
    </div>
  `
};
