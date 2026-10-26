/**
 * ch18_master_lao.js
 * ບົດທີ 18: ວິຊາເລືອກມື້ຍາມມຸງຄຸນ (Ze Ri Date Selection)
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch18",
  title: "ບົດທີ 18: ວິຊາເລືອກມື້ຍາມມຸງຄຸນ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 6: ວິຊາການເວລາ ແລະ ພິທີກຳ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 18: ວິຊາເລືອກມື້ຍາມມຸງຄຸນ (Ze Ri Date Selection / 择日学)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ຄຳພີຕົ່ງກຸງ (Dong Gong), ລະບົບ 12 ເທບພະເຈົ້າ (Jian Chu), ແລະ ຫຼັກການຄິດໄລ່ມື້ລົງເສົາເອກ-ຂຶ້ນເຮືອນໃໝ່ທີ່ປອດໄພ 100%</p>
      </div>

      <!-- Section 1: Philosophy of Time & Qi -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ປັດຊະຍາແຫ່ງການເວລາ: "ໄດ້ທີ່ດິນມຸງຄຸນ ບໍ່ເທົ່າໄດ້ເວລາທີ່ເປັນມຸງຄຸນ" (De Di Bu Ru De Shi)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນວິຊາຮວງຈຸ້ຍບູຮານມີຄຳພັງເພີຍກ່າວໄວ້ວ່າ: <em>"ຟ້າກຳນົດເວລາ, ດິນກຳນົດພື້ນທີ່, ຄົນກຳນົດຄວາມປອງດອງ" (Tian Shi, Di Li, Ren He 天时地利人和)</em>. ຖ້າປຽບທຽບເຮືອນຄືລົດໃຫຍ່ຄັນຫຼູຫຼາ, <strong>ວັນເວລາ (Ze Ri 择日)</strong> ກໍປຽບເໝືອນ <strong>"ກະແຈສະຕາດລົດ"</strong>:
        </p>
        <div class="p-4 bg-amber-50 rounded-xl border border-amber-300 text-xs text-stone-800 leading-relaxed space-y-2">
          <p class="font-bold text-amber-950 text-sm">ຄວາມລັບແຫ່ງການເຊື່ອມຕໍ່ພະລັງງານ:</p>
          <p>
            ເຖິງແມ່ນເຮືອນຈະຖືກອອກແບບຕາມຜັງດາວເຫີນທີ່ດີເລີດປານໃດ, ແຕ່ຖ້າ <strong>ລົງເສົາເອກ, ທຸບຕຶກ, ຫຼື ຍ້າຍເຂົ້າຢູ່ ໃນວັນເວລາທີ່ພະລັງຟ້າ-ດິນປະທະກັນ (Chong 冲)</strong>, ພະລັງງານຊາຊີ່ຈະແຕກກະຈາຍ ແລະ ທຳລາຍເຈົ້າຂອງບ້ານທັນທີກ່ອນທີ່ພະລັງດີຈະມີໂອກາດອອກລິດ. ໃນທາງກົງກັນຂ້າມ, ເຮືອນທີ່ມີຂໍ້ບົກຜ່ອງບາງຢ່າງ ແຕ່ເລືອກມື້ຍາມທີ່ເປັນມຸງຄຸນສູງສຸດ (Huang Dao Ji Ri) ພະລັງມຸງຄຸນຂອງຟ້າ-ດິນຈະຊ່ວຍຄຸ້ມຄອງ ແລະ ຜ່ອນໜັກໃຫ້ເປັນເບົາໄດ້ຢ່າງອັດສະຈັນ.
          </p>
        </div>
      </section>

      <!-- Section 2: 12 Jian Chu Officers in Complete Detail -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ຄູ່ມືລະອຽດ 12 ເທບພະເຈົ້າປະຈຳວັນ (The 12 Jian Chu Officers 建除十二神)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນລະບົບປະຕິທິນສຸລິຍະຄະຕິຈີນ, ແຕ່ລະວັນຈະຖືກຄຸ້ມຄອງໂດຍ 1 ໃນ 12 ເທບພະເຈົ້າໝູນວຽນກັນໄປຕາມລຳດັບ ໂດຍເລີ່ມຕົ້ນນັບຈາກມື້ທີ່ກົງກັບສາຂາດິນປະຈຳເດືອນ (Yue Zhi):
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
            <span class="font-bold text-emerald-950 text-sm">1. ຈ້ຽນ (Jian 建 - ມື້ເລີ່ມຕົ້ນ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ທີ່ພະລັງງານໃໝ່ກຳເນີດຂຶ້ນ. ເໝາະສຳລັບການເດີນທາງໄກ, ເຂົ້າຮັບຕຳແໜ່ງໃໝ່, ເຊັນສັນຍາ, ວາງແຜນງານ.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມລົງເສົາເອກ (ຂຸດດິນ) ແລະ ຫ້າມຍ້າຍເຂົ້າເຮືອນໃໝ່ ເພາະພະລັງງານຍັງອ່ອນໄຫວເກີນໄປ.</em>
            </p>
          </div>

          <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
            <span class="font-bold text-emerald-950 text-sm">2. ຊູ (Chu 除 - ມື້ກຳຈັດສິ່ງເກົ່າ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ປົດປ່ອຍສິ່ງອັບມຸງຄຸນ. ດີເລີດສຳລັບການປິ່ນປົວພະຍາດ, ຜ່າຕັດ, ປັດກວາດລ້າງເຮືອນ, ທຸບຕຶກເກົ່າ, ລ້າງມົນທິນ, ປົດໜີ້.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມແຕ່ງງານ ແລະ ຫ້າມເປີດທຸລະກິດໃໝ່.</em>
            </p>
          </div>

          <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
            <span class="font-bold text-emerald-950 text-sm">3. ມານ (Man 满 - ມື້ເຕັມປ່ຽມ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ແຫ່ງຄວາມອຸດົມສົມບູນ. ດີເລີດສຳລັບການເປີດຮ້ານຄ້າ, ເປີດຄັງເງິນ, ງານລ້ຽງສະຫຼອງ, ເກັບເງິນ, ຂໍພອນ.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມຂຸດເຈາະທໍ່ລະບາຍນ້ຳ ແລະ ຫ້າມຝັງສົບ.</em>
            </p>
          </div>

          <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span class="font-bold text-stone-900 text-sm">4. ຜິງ (Ping 平 - ມື້ສະເໝີພາບ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ພະລັງງານລາບລຽບສະເໝີກັນ. ເໝາະສຳລັບການປັບໜ້າດິນ, ສ້ອມແປງຖະໜົນ, ເຈລະຈາໄກ່ເກ່ຍຂໍ້ຂັດແຍ້ງ, ງານສາມັນທົ່ວໄປ.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມເຮັດສັນຍາໃຫຍ່ທີ່ຕ້ອງການຄວາມໄດ້ປຽບ.</em>
            </p>
          </div>

          <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
            <span class="font-bold text-emerald-950 text-sm">5. ຕິ້ງ (Ding 定 - ມື້ໝັ້ນຄົງຖາວອນ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ຄວາມໝັ້ນຄົງຍາວນານດັ່ງຫີນຜາ. ດີເລີດສຳລັບການວາງສິລາລຶກ, ລົງເສົາເອກ, ແຕ່ງງານ, ເຊັນສັນຍາໄລຍະຍາວ, ເຂົ້າຮັບຕຳແໜ່ງ.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມຂຶ້ນສານ, ຫ້າມທະເລາະກັນ (ຈະແກ່ຍາວບໍ່ຈົບ).</em>
            </p>
          </div>

          <div class="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
            <span class="font-bold text-rose-950 text-sm">6. ຈື້ (Zhi 执 - ມື້ຍຶດໝັ້ນ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ຍຶດຖື, ຈັບກຸມ. ເໝາະສຳລັບການປູກຕົ້ນໄມ້, ຈັບໂຈນ, ບັງຄັບໃຊ້ກົດໝາຍ.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມຍ້າຍເຮືອນ, ຫ້າມເດີນທາງໄກ, ຫ້າມເປີດຄັງເງິນ.</em>
            </p>
          </div>

          <div class="p-3 bg-rose-100 rounded-xl border border-rose-400 space-y-1">
            <span class="font-black text-rose-950 text-sm">7. ໂພ່ (Po 破 - ມື້ແຕກຫັກ / ມະຫາອັບມຸງຄຸນ):</span>
            <p class="text-stone-800 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ທີ່ປະທະກັບເດືອນ 180 ອົງສາ (Yue Po 日破). <strong>ຫ້າມທຸກກິດຈະກຳມຸງຄຸນຢ່າງເດັດຂາດ!</strong> ຫ້າມຂຶ້ນເຮືອນໃໝ່, ຫ້າມເປີດຮ້ານ, ຫ້າມແຕ່ງງານ.<br>
              <em>ໃຊ້ໄດ້ພຽງຢ່າງດຽວຄື: ການລື້ຖອນອາຄານເກົ່າ ຫຼື ທຳລາຍສິ່ງກີດຂວາງ.</em>
            </p>
          </div>

          <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
            <span class="font-bold text-emerald-950 text-sm">8. ເຫວີ່ຍ (Wei 危 - ມື້ທ້າທາຍ / ສັກສິດ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ແຫ່ງຄວາມລະມັດລະວັງ ແລະ ການຂ້າມຜ່ານ. ເໝາະສຳລັບການໄຫວ້ພຣະຂໍພອນ, ພິທີກຳທາງສາສະໜາ, ຂຶ້ນພູ, ເຮັດບຸນ.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມຂີ່ເຮືອ, ຫ້າມປີນບ່ອນສູງ, ຫ້າມເຮັດວຽກສ່ຽງໄພ.</em>
            </p>
          </div>

          <div class="p-3 bg-emerald-100 rounded-xl border border-emerald-400 space-y-1">
            <span class="font-black text-emerald-950 text-sm">9. ເສິງ (Cheng 成 - ມື້ສຳເລັດສົມບູນ / ສຸດຍອດມຸງຄຸນ):</span>
            <p class="text-stone-800 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ແຫ່ງຄວາມສຳເລັດທຸກປະການ! <strong>ດີເລີດທີ່ສຸດສຳລັບການຍ້າຍເຂົ້າເຮືອນໃໝ່ (Ru Zhai), ເປີດບໍລິສັດ, ເປີດຮ້ານຄ້າ, ແຕ່ງງານ, ແລະ ລົງເສົາເອກ.</strong> ທຸກສິ່ງທີ່ເລີ່ມຕົ້ນໃນມື້ນີ້ຈະປະສົບຜົນສຳເລັດຢ່າງຍືນຍົງ.
            </p>
          </div>

          <div class="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <span class="font-bold text-stone-900 text-sm">10. ໂຊວ (Shou 收 - ມື້ເກັບກ່ຽວ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ເກັບຜົນປະໂຫຍດ ແລະ ຊັບສິນ. ດີເລີດສຳລັບການທວງໜີ້, ເກັບເງິນ, ຊື້ທີ່ດິນ, ເກັບກ່ຽວຜົນລະປູກ.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມຝັງສົບ ແລະ ຫ້າມເລີ່ມຕົ້ນປິ່ນປົວພະຍາດ.</em>
            </p>
          </div>

          <div class="p-3 bg-emerald-100 rounded-xl border border-emerald-400 space-y-1">
            <span class="font-black text-emerald-950 text-sm">11. ຄາຍ (Kai 开 - ມື້ເປີດກວ້າງ / ສຸດຍອດມຸງຄຸນ):</span>
            <p class="text-stone-800 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ແຫ່ງການເປີດປະຕູຮັບໂອກາດ ແລະ ຄວາມຈະເລີນ. <strong>ດີເລີດສຳລັບການເປີດປະຕູໃຫຍ່, ເປີດທຸລະກິດ, ເຂົ້າຮຽນ, ເດີນທາງ, ຕັດສາຍຮົກເດັກເກີດໃໝ່.</strong><br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມຝັງສົບ.</em>
            </p>
          </div>

          <div class="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
            <span class="font-bold text-rose-950 text-sm">12. ປີ້ (Bi 闭 - ມື້ປິດປະຕູ):</span>
            <p class="text-stone-700 leading-relaxed">
              <strong>ຄວາມໝາຍ:</strong> ມື້ແຫ່ງຄວາມສະຫງົບມິດຊິດ. ເໝາະສຳລັບການສ້າງກຳແພງ, ປິດຮູຮົ່ວ, ຝັງສົບ, ສ້າງເຂື່ອນ.<br>
              <em class="text-rose-700 font-semibold">ຂໍ້ຫ້າມ: ຫ້າມເປີດທຸລະກິດ, ຫ້າມຂຶ້ນເຮືອນໃໝ່, ຫ້າມແຕ່ງງານ, ຫ້າມເຈາະປ່ອງຢ້ຽມ.</em>
            </p>
          </div>
        </div>
      </section>

      <!-- Section 3: The Four Absolute Prohibitions -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ຂໍ້ຫ້າມເດັດຂາດ 4 ປະການໃນການເລືອກມື້ (The Four Absolute Prohibitions)</h2>
        <div class="p-4 bg-rose-50 rounded-xl border border-rose-300 text-xs space-y-2.5 text-stone-800 leading-relaxed">
          <p class="font-bold text-rose-950 text-sm">ກົດຫຼັກທີ່ຫ້າມລະເມີດເດັດຂາດໃນການເລືອກມື້ຮວງຈຸ້ຍ:</p>
          <ol class="list-decimal pl-5 space-y-2">
            <li><strong>ຫ້າມມື້ປະທະນັກສັດເຈົ້າຂອງບ້ານ (Sheng Xiao Chong 生肖冲):</strong> ນັກສັດປະຈຳປີເກີດຂອງເຈົ້າຂອງບ້ານ ຫ້າມປະທະ 180 ອົງສາກັບວັນທີ່ເຮັດພິທີ (ເຊັ່ນ: ເຈົ້າຂອງບ້ານເກີດປີຊວດ [ໜູ] ຫ້າມເລືອກວັນມະເມຍ [ມ້າ]; ເກີດປີສະຫຼູ [ງົວ] ຫ້າມເລືອກວັນມະແມ [ແບ້]). ຖ້າລະເມີດ ເຈົ້າຂອງບ້ານຈະຮັບເຄາະກຳໂດຍກົງ.</li>
            <li><strong>ຫ້າມມື້ປະທະທິດນັ່ງຂອງເຮືອນ (Zuo Shan Chong 坐山冲):</strong> ສຳຄັນທີ່ສຸດ! ວັນທີ່ເລືອກ ຫ້າມປະທະກັບ <strong>"ທິດນັ່ງ (Zuo)"</strong> ຂອງເຮືອນເດັດຂາດ (ເຊັ່ນ: ເຮືອນນັ່ງທິດເໜືອ Zi ຫ້າມເຮັດພິທີໃນວັນທິດໃຕ້ Wu; ເຮືອນນັ່ງທິດໃຕ້ Wu ຫ້າມເຮັດພິທີໃນວັນທິດເໜືອ Zi). ຖ້າລະເມີດ ເຮືອນຈະເກີດຄວາມວຸ້ນວາຍ, ໄຟໄໝ້, ຫຼື ລົ້ມລະລາຍ.</li>
            <li><strong>ຫ້າມມື້ຊານຊາ (San Sha Ri 三煞日):</strong> ວັນທີ່ພະລັງສາມມານຮ້າຍເຂົ້າປະທະທິດຫຼັງເຮືອນ. ເຊັ່ນ: ເຮືອນນັ່ງທິດໃຕ້ (ທາດໄຟ) ຫ້າມເລືອກມື້ຊານຊາທາດນ້ຳ (Shen, Zi, Chen).</li>
            <li><strong>ຫ້າມມື້ສຸ້ຍໂພ່ (Sui Po Ri 岁破日):</strong> ວັນທີ່ປະທະກັບປີປະຈຸບັນ 180 ອົງສາ (ເຊັ່ນ: ໃນປີມະໂຮງ 2024 ຫ້າມເລືອກວັນຈໍ [ໝາ]). ເປັນມື້ທີ່ຟ້າດິນປັ່ນປ່ວນສູງສຸດ.</li>
          </ol>
        </div>
      </section>

      <!-- Section 4: Move-in Ritual Step-by-Step -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">4. ຂັ້ນຕອນພິທີຍ້າຍເຂົ້າເຮືອນໃໝ່ ສະບັບສົມບູນ (The Master Ru Zhai Ritual 入宅仪式)</h2>
        <div class="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2 leading-relaxed">
          <p class="font-bold text-amber-950 text-sm">ເມື່ອຮອດຍາມມຸງຄຸນ (Auspicious Hour) ທີ່ຄຳນວນໄວ້:</p>
          <ol class="list-decimal pl-5 space-y-1.5">
            <li><strong>ເຈົ້າຂອງບ້ານຍ່າງນຳໜ້າ:</strong> ສອງມືຖື <em>ຖັງເຂົ້າສານທີ່ບັນຈຸເຂົ້າສານເຕັມປ່ຽມ</em> (ດ້ານເທິງເຂົ້າສານມີຊອງອັງເປົາສີແດງໃສ່ເງິນຫຼຽນ 9 ຫຼຽນ ຫຼື ທອງຄຳ) ກ້າວຂາຂວາຂ້າມທໍລະນີປະຕູໃຫຍ່ເຂົ້າສູ່ເຮືອນກ່ອນໝູ່ ເປັນສັນຍາລັກແຫ່ງຄວາມອຸດົມສົມບູນບໍ່ມີວັນອຶດຢາກ.</li>
            <li><strong>ສະມາຊິກຄອບຄົວ:</strong> ຍ່າງຕາມຫຼັງມາ ໂດຍທຸກຄົນຕ້ອງຖື <em>ເງິນສົດ, ທອງຄຳ, ເຄື່ອງປະດັບ, ຫຼື ໝາກໄມ້ມຸງຄຸນ (ໝາກກ້ຽງ, ໝາກໂປ່ມ)</em>. <strong>ຫ້າມຍ່າງມືເປົ່າເຂົ້າເຮືອນເດັດຂາດ!</strong></li>
            <li><strong>ເປີດໄຟ ແລະ ລະບົບນ້ຳທົ່ວເຮືອນ:</strong> ເມື່ອເຂົ້າຮອດເຮືອນແລ້ວ ໃຫ້ເປີດໄຟທຸກດວງໃຫ້ແຈ້ງສະຫວ່າງ, ເປີດກ໊ອກນ້ຳໃຫ້ໄຫຼລິນຊ້າໆ (ສື່ເຖິງເງິນທອງໄຫຼມາບໍ່ຂາດສາຍ).</li>
            <li><strong>ຈຸດເຕົາໄຟ ແລະ ຕົ້ມນ້ຳຟົດ:</strong> ເປີດເຕົາແກັສຕົ້ມນ້ຳຊາໃຫ້ຟົດຈົນມີໄອຄວັນພຸ່ງຂຶ້ນ (ສື່ເຖິງທຸລະກິດຮຸ່ງເຮືອງຟົດຟື້ນ), ເປີດພັດລົມໝຸນວຽນອາກາດ ເພື່ອກະຕຸ້ນພະລັງຊີວິດ (Sheng Qi) ໃຫ້ແຜ່ໄປທົ່ວທຸກມຸມບ້ານ.</li>
          </ol>
        </div>
      </section>
    </div>
  `
};
