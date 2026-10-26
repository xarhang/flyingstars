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
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 18: ວິຊາເລືອກມື້ຍາມມຸງຄຸນ (Ze Ri Date Selection)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ຄຳພີຕົ່ງກຸງ (Dong Gong), ລະບົບ 12 ເທບພະເຈົ້າ (Jian Chu), ແລະ ຂໍ້ຫ້າມສັກສິດໃນການລົງເສົາເອກ-ຂຶ້ນເຮືອນໃໝ່</p>
      </div>

      <!-- Section 1: Philosophy of Time -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຄວາມສຳຄັນຂອງເວລາ: "ໄດ້ດິນ ບໍ່ເທົ່າໄດ້ເວລາ"</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນວິຊາຮວງຈຸ້ຍບູຮານມີຄຳພັງເພີຍກ່າວໄວ້ວ່າ: <em>"ໄດ້ທີ່ດິນມຸງຄຸນ ບໍ່ເທົ່າໄດ້ເວລາທີ່ເປັນມຸງຄຸນ" (De Di Bu Ru De Shi 得地不如得时)</em>. ເຖິງແມ່ນເຮືອນຈະມີຜັງດາວເຫີນທີ່ດີເລີດປານໃດ ແຕ່ຖ້າ <strong>ລົງເສົາເອກ ຫຼື ຍ້າຍເຂົ້າຢູ່ ໃນວັນເວລາທີ່ປະທະຮ້າຍແຮງ</strong> ພະລັງຮ້າຍນັ້ນຈະທຳລາຍເຈົ້າຂອງບ້ານກ່ອນທີ່ພະລັງດີຈະອອກລິດ!
        </p>
      </section>

      <!-- Section 2: 12 Jian Chu Officers -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ລະບົບ 12 ເທບພະເຈົ້າປະຈຳວັນ (12 Jian Chu Officers 建除十二神)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນປະຕິທິນຈີນບູຮານ ແຕ່ລະວັນຈະຖືກຄຸ້ມຄອງໂດຍ 1 ໃນ 12 ເທບພະເຈົ້າໝູນວຽນກັນ:
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div class="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
            <span class="font-bold text-emerald-950">1. ຈ້ຽນ (Jian 建):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ເລີ່ມຕົ້ນ, ເດີນທາງ, ເຂົ້າຮັບຕຳແໜ່ງ (ຫ້າມລົງເສົາເອກ).</p>
          </div>
          <div class="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
            <span class="font-bold text-emerald-950">2. ຊູ (Chu 除):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ກຳຈັດ, ປິ່ນປົວພະຍາດ, ປັດກວາດ, ທຸບຕຶກເກົ່າ.</p>
          </div>
          <div class="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
            <span class="font-bold text-emerald-950">3. ມານ (Man 满):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ເຕັມປ່ຽມ, ງານລ້ຽງ, ເປີດຮ້ານ, ເປີດຄັງເງິນ.</p>
          </div>
          <div class="p-2.5 bg-stone-50 rounded-lg border border-stone-200">
            <span class="font-bold text-stone-900">4. ຜິງ (Ping 平):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ສະເໝີພາບ, ປັບໜ້າດິນ, ເຈລະຈາໄກ່ເກ່ຍ.</p>
          </div>
          <div class="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
            <span class="font-bold text-emerald-950">5. ຕິ້ງ (Ding 定):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ໝັ້ນຄົງ, ວາງສິລາລຶກ, ເຊັນສັນຍາ, ແຕ່ງງານ.</p>
          </div>
          <div class="p-2.5 bg-rose-50 rounded-lg border border-rose-200">
            <span class="font-bold text-rose-950">6. ຈື້ (Zhi 执):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ຍຶດໝັ້ນ, ປູກຕົ້ນໄມ້, ຈັບໂຈນ (ຫ້າມຍ້າຍເຮືອນ).</p>
          </div>
          <div class="p-2.5 bg-rose-50 rounded-lg border border-rose-300">
            <span class="font-bold text-rose-950">7. ໂພ່ (Po 破):</span>
            <p class="text-stone-600 text-[11px] mt-0.5"><strong>ມື້ແຕກຫັກ:</strong> ຫ້າມທຸກກິດຈະກຳມຸງຄຸນ! ໃຊ້ສະເພາະລື້ຖອນ.</p>
          </div>
          <div class="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
            <span class="font-bold text-emerald-950">8. ເຫວີ່ຍ (Wei 危):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ອັນຕະລາຍ/ທ້າທາຍ, ໄຫວ້ພຣະຂໍພອນ, ເຮັດພິທີສັກສິດ.</p>
          </div>
          <div class="p-2.5 bg-emerald-50 rounded-lg border border-emerald-300">
            <span class="font-bold text-emerald-950">9. ເສິງ (Cheng 成):</span>
            <p class="text-stone-600 text-[11px] mt-0.5"><strong>ມື້ສຳເລັດ:</strong> ດີເລີດທີ່ສຸດສຳລັບຂຶ້ນເຮືອນໃໝ່, ເປີດທຸລະກິດ!</p>
          </div>
          <div class="p-2.5 bg-stone-50 rounded-lg border border-stone-200">
            <span class="font-bold text-stone-900">10. ໂຊວ (Shou 收):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ເກັບກ່ຽວ, ທວງໜີ້, ເກັບເງິນ, ຊື້ຊັບສິນ.</p>
          </div>
          <div class="p-2.5 bg-emerald-50 rounded-lg border border-emerald-300">
            <span class="font-bold text-emerald-950">11. ຄາຍ (Kai 开):</span>
            <p class="text-stone-600 text-[11px] mt-0.5"><strong>ມື້ເປີດກວ້າງ:</strong> ເປີດປະຕູໃຫຍ່, ເປີດບໍລິສັດ, ເລີ່ມຕົ້ນໂຄງການ.</p>
          </div>
          <div class="p-2.5 bg-rose-50 rounded-lg border border-rose-200">
            <span class="font-bold text-rose-950">12. ປີ້ (Bi 闭):</span>
            <p class="text-stone-600 text-[11px] mt-0.5">ມື້ປິດ, ຝັງສົບ, ປິດຮູຮົ່ວ (ຫ້າມເປີດທຸລະກິດ, ຫ້າມສ້າງເຮືອນ).</p>
          </div>
        </div>
      </section>

      <!-- Section 3: Absolute Prohibitions -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ຂໍ້ຫ້າມເດັດຂາດ 4 ປະການໃນການເລືອກມື້ (Four Prohibitions)</h2>
        <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300 text-xs space-y-2 text-stone-800">
          <ol class="list-decimal pl-5 space-y-1">
            <li><strong>ຫ້າມມື້ປະທະນັກສັດເຈົ້າຂອງບ້ານ (Sheng Xiao Chong):</strong> ເຊັ່ນ: ເຈົ້າຂອງບ້ານເກີດປີຊວດ (ໜູ) ຫ້າມເລືອກມື້ມະເມຍ (ມ້າ) ເດັດຂາດ.</li>
            <li><strong>ຫ້າມມື້ປະທະທິດນັ່ງຂອງເຮືອນ (Zuo Shan Chong):</strong> ເຊັ່ນ: ເຮືອນນັ່ງທິດເໜືອ (Zi) ຫ້າມເຮັດພິທີໃນວັນທິດໃຕ້ (Wu).</li>
            <li><strong>ຫ້າມມື້ຊານຊາ (San Sha Ri):</strong> ວັນທີ່ພະລັງສາມມານຮ້າຍເຂົ້າປະທະທິດຫຼັງເຮືອນ.</li>
            <li><strong>ຫ້າມມື້ສຸ້ຍໂພ່ (Sui Po Ri):</strong> ວັນທີ່ປະທະກັບປີປະຈຸບັນ 180 ອົງສາ.</li>
          </ol>
        </div>
      </section>

      <!-- Section 4: Move-in Ritual -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">4. ຂັ້ນຕອນພິທີຍ້າຍເຂົ້າເຮືອນໃໝ່ (Ru Zhai Ritual)</h2>
        <div class="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-1.5 leading-relaxed">
          <p>ເມື່ອຮອດຍາມມຸງຄຸນ (Auspicious Hour):</p>
          <ol class="list-decimal pl-5 space-y-1">
            <li><strong>ເຈົ້າຂອງບ້ານຍ່າງນຳໜ້າ:</strong> ຖືຖັງເຂົ້າສານທີ່ເຕັມປ່ຽມ (ມີຊອງອັງເປົາສີແດງໃສ່ເງິນ 9 ຫຼຽນວາງເທິງເຂົ້າສານ) ເປັນສັນຍາລັກແຫ່ງຄວາມອຸດົມສົມບູນ.</li>
            <li><strong>ສະມາຊິກຄອບຄົວ:</strong> ຖືເງິນສົດ, ທອງຄຳ, ຫຼື ວັດຖຸມີຄ່າ (ຫ້າມຍ່າງມືເປົ່າເຂົ້າເຮືອນເດັດຂາດ).</li>
            <li><strong>ເປີດເຕົາໄຟ ແລະ ຕົ້ມນ້ຳຟົດ:</strong> ເມື່ອເຂົ້າເຮືອນແລ້ວ ໃຫ້ເປີດເຕົາໄຟຕົ້ມນ້ຳໃຫ້ຟົດ ແລະ ເປີດພັດລົມໃຫ້ໝຸນວຽນ ເພື່ອກະຕຸ້ນພະລັງຊີວິດ (Sheng Qi) ໃຫ້ເຕັມໄປທົ່ວທຸກຫ້ອງ.</li>
          </ol>
        </div>
      </section>
    </div>
  `
};
