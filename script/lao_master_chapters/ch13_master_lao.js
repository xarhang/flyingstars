/**
 * ch13_master_lao.js
 * ບົດທີ 13: ຮູບແບບດາວພິເສດ (Special Flying Star Formations)
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch13",
  title: "ບົດທີ 13: ຮູບແບບດາວພິເສດ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 3: ການວິເຄາະ ແລະ ພະຍາກອນຂັ້ນສູງ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 13: ຮູບແບບດາວພິເສດ (Special Flying Star Formations)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ເຄັດລັບຊັ້ນສູງ: ຜັງປະສົມສິບ (He Shi), ສາມກົ້ວພໍ່ແມ່ (San Ban Gua), ຜັງຮ້ອງໄຫ້ ຟູອິນ-ຟານອິນ</p>
      </div>

      <!-- Section 1: Combination of 10 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຜັງປະສົມສິບ (Combination of 10 / 合十格 - He Shi)</h2>
        <p class="doc-p text-justify leading-relaxed">
          <strong>ຜັງປະສົມສິບ</strong> ແມ່ນໜຶ່ງໃນຮູບແບບຜັງທີ່ເປັນມຸງຄຸນສູງສຸດໃນວິຊາດາວເຫີນ. ເກີດຂຶ້ນເມື່ອ:
        </p>
        <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-300 text-xs text-stone-800 space-y-2">
          <p class="font-bold text-emerald-950 text-sm">ກົດເກນການເກີດຜັງປະສົມສິບ:</p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>ຜັງປະສົມສິບດາວນ້ຳ:</strong> ດາວນ້ຳ (Water Star) ບວກກັບ ດາວຍຸກ (Period Star) ໃນທຸກໆ ວັງ ລວມກັນແລ້ວໄດ້ <strong>10</strong> ພໍດີ (ເຊັ່ນ: 1+9, 2+8, 3+7, 4+6, 5+5). <em>ຜົນດີ: ຊັບສິນເງິນທອງໄຫຼມາບໍ່ຂາດສາຍ, ທຸລະກິດບໍ່ມີວັນຕັນ!</em></li>
            <li><strong>ຜັງປະສົມສິບດາວພູ:</strong> ດາວພູ (Mountain Star) ບວກກັບ ດາວຍຸກ ໃນທຸກໆ ວັງ ລວມກັນແລ້ວໄດ້ <strong>10</strong> ພໍດີ. <em>ຜົນດີ: ສຸຂະພາບແຂງແຮງທັງຄອບຄົວ, ໄດ້ຮັບການຊ່ວຍເຫຼືອຈາກຜູ້ມີບາຣະມີໃນທຸກທິດທາງ.</em></li>
          </ul>
          <p class="text-[11px] text-emerald-900 italic font-semibold">
            * ຄວາມອັດສະຈັນ: ເຮືອນທີ່ໄດ້ຜັງປະສົມສິບ ເຖິງແມ່ນວ່າຈະມີດາວຮ້າຍເລກ 5 ຫຼື 2 ຕົກຢູ່ ພະລັງຮ້າຍກໍຈະຖືກປ່ຽນໃຫ້ກາຍເປັນມຸງຄຸນ ເພາະທຸກວັງເຊື່ອມໂຍງກັນເປັນໜຶ່ງດຽວ!
          </p>
        </div>
      </section>

      <!-- Section 2: Three Harmony Parent String -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ສາມກົ້ວພໍ່ແມ່ (Parent String / 三般卦 - San Ban Gua)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ຜັງສາມກົ້ວພໍ່ແມ່ ແມ່ນຜັງທີ່ຕົວເລກ 3 ຕົວ (ດາວພູ, ດາວນ້ຳ, ດາວຍຸກ) ໃນທຸກໆ ວັງ ປະກອບຂຶ້ນຈາກກຸ່ມຕົວເລກສັກສິດ 3 ຊຸດ:
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2 text-xs">
          <div class="p-3 bg-stone-50 rounded-xl border border-amber-300 text-center">
            <div class="font-black text-amber-900 text-base">1 - 4 - 7</div>
            <div class="text-stone-600 font-semibold mt-1">ຊຸດດາວສະຕິປັນຍາ & ບາຣະມີ</div>
            <p class="text-[11px] text-stone-500 mt-1">ເກີດຄວາມສຳເລັດດ້ານການສຶກສາ ແລະ ອຳນາດ</p>
          </div>
          <div class="p-3 bg-stone-50 rounded-xl border border-amber-300 text-center">
            <div class="font-black text-amber-900 text-base">2 - 5 - 8</div>
            <div class="text-stone-600 font-semibold mt-1">ຊຸດດາວອະສັງຫາລິມະຊັບ & ແຜ່ນດິນ</div>
            <p class="text-[11px] text-stone-500 mt-1">ຄວາມຮັ່ງມີດ້ານທີ່ດິນ, ສາງ, ໂຮງງານ</p>
          </div>
          <div class="p-3 bg-stone-50 rounded-xl border border-amber-300 text-center">
            <div class="font-black text-amber-900 text-base">3 - 6 - 9</div>
            <div class="text-stone-600 font-semibold mt-1">ຊຸດດາວການເງິນ & ຄວາມຈະເລີນກ້າວໜ້າ</div>
            <p class="text-[11px] text-stone-500 mt-1">ທຸລະກິດການຄ້າຂະຫຍາຍໂຕຢ່າງໄວວາ</p>
          </div>
        </div>
        <p class="doc-p text-justify leading-relaxed text-xs">
          <strong>ຄຸນຄ່າພິເສດ:</strong> ຜັງສາມກົ້ວພໍ່ແມ່ ສາມາດຄຸ້ມຄອງເຮືອນໃຫ້ຮຸ່ງເຮືອງໄດ້ຍາວນານເຖິງ <strong>3 ຍຸກ (60 ປີ)</strong> ຕິດຕໍ່ກັນ ໂດຍບໍ່ເສື່ອມຖອຍ!
        </p>
      </section>

      <!-- Section 3: Fu Yin and Fan Yin -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ຜັງອັບມຸງຄຸນ: ຟູອິນ (伏吟) ແລະ ຟານອິນ (反吟)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 my-2">
          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300">
            <h3 class="font-bold text-rose-950 text-sm">ຟູອິນ (Fu Yin / 伏吟 - ດາວທັບວັງເດີມ)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ເກີດຂຶ້ນເມື່ອດາວເລກ 5 ເຂົ້ານັ່ງກາງວັງ ແລ້ວ <strong>ເຫີນເດີນໜ້າ (Shun Fei)</strong> ເຮັດໃຫ້ດາວພູ ຫຼື ດາວນ້ຳໃນທຸກວັງ ມີຕົວເລກຄືກັນກັບເລກພື້ນຖານລົ່ວຊູ (1 ຢູ່ Kan, 2 ຢູ່ Kun, 3 ຢູ່ Zhen...).<br>
              <strong>ຜົນກະທົບ:</strong> ຄຳພີກ່າວວ່າ <em>"ຟູອິນ ຟູອິນ, ນ້ຳຕາໄຫຼລິນບໍ່ມີວັນສິ້ນສຸດ"</em>. ເກີດຄວາມໂສກເສົ້າ, ໂລກຊຶມເສົ້າ, ງານບໍ່ກ້າວໜ້າ, ເຈັບປ່ວຍຊ້ຳເຮື້ອ.
            </p>
          </div>

          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300">
            <h3 class="font-bold text-rose-950 text-sm">ຟານອິນ (Fan Yin / 反吟 - ດາວປະທະວັງເດີມ)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ເກີດຂຶ້ນເມື່ອດາວເລກ 5 ເຂົ້ານັ່ງກາງວັງ ແລ້ວ <strong>ເຫີນຖອຍຫຼັງ (Ni Fei)</strong> ເຮັດໃຫ້ຕົວເລກກົງກັນຂ້າມ 180 ອົງສາກັບຕຳແໜ່ງລົ່ວຊູເດີມ (9 ຢູ່ Kan, 1 ຢູ່ Li...).<br>
              <strong>ຜົນກະທົບ:</strong> ອັນຕະລາຍຮຸນແຮງກວ່າຟູອິນ! ເກີດການແຕກຫັກກະທັນຫັນ, ລົ້ມລະລາຍ, ໄຟໄໝ້, ອຸບັດຕິເຫດໃຫຍ່, ຄົນໃນເຮືອນເສຍຊີວິດກະທັນຫັນ.
            </p>
          </div>
        </div>

        <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-300 text-xs">
          <strong class="text-amber-950">ວິທີແກ້ໄຂຜັງ ຟູອິນ / ຟານອິນ:</strong>
          <ol class="list-decimal pl-5 mt-1 space-y-1 text-stone-700">
            <li>ຫ້າມສ້າງການເຄື່ອນໄຫວ ຫຼື ສຽງດັງໃນວັງທີ່ມີດາວ 5 ແລະ 2 ເດັດຂາດ.</li>
            <li>ໃຊ້ <strong>"ວັດຖຸທາດຄຳແທ້"</strong> ເຊັ່ນ: ກະດິ່ງລົມທອງເຫຼືອງ, ໂຖເກືອຮວງຈຸ້ຍ, ແລະ ຫຼຽນທອງ ເພື່ອລະບາຍພະລັງດິນທີ່ອັດແໜ້ນ.</li>
            <li>ເປີດປະຕູຮັບກະແສພະລັງງານຈາກ "ທິດປະຕູວັງຫຼວງ" (Cheng Men) ເພື່ອປ່ຽນແປງວົງຈອນພະລັງງານ.</li>
          </ol>
        </div>
      </section>
    </div>
  `
};
