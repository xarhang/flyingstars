/**
 * ch9_master_lao.js
 * ບົດທີ 9: ຂັ້ນຕອນການຕັ້ງຜັງດາວເຫີນ: ດາວພູ (Mountain Star) ແລະ ດາວນ້ຳ (Water Star)
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch9",
  title: "ບົດທີ 9: ຂັ້ນຕອນການຕັ້ງຜັງດາວເຫີນ ສະບັບສົມບູນ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 2: ພາກປະຕິບັດ ແລະ ການແກ້ໄຂ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 9: ຂັ້ນຕອນການຕັ້ງຜັງດາວເຫີນ: ດາວພູ (Mountain Star) ແລະ ດາວນ້ຳ (Water Star)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ຄູ່ມືຄິດໄລ່ເທື່ອລະກ້າວ (Step-by-Step Algorithm): ວິທີສ້າງຜັງ 9 ວັງຢ່າງຖືກຕ້ອງ 100%</p>
      </div>

      <!-- Section 1 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ໂຄງສ້າງ 3 ຕົວເລກໃນແຕ່ລະວັງ (The Anatomy of a Flying Star Palace)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ເມື່ອຕັ້ງຜັງດາວເຫີນສຳເລັດ, ໃນແຕ່ລະຫ້ອງຂອງ 9 ວັງ ຈະມີ <strong>3 ຕົວເລກຫຼັກ</strong> ປະຈຳຢູ່ສະເໝີ:
        </p>

        <div class="p-4 bg-stone-900 text-stone-100 rounded-xl shadow-lg my-3 max-w-sm mx-auto text-center font-mono">
          <div class="text-xs text-stone-400 mb-2">ຕົວຢ່າງ 1 ວັງ (One Palace Box):</div>
          <div class="flex justify-between items-center text-2xl font-black px-6">
            <span class="text-emerald-400" title="ດາວພູ (Mountain Star)">8</span>
            <span class="text-red-450 text-3xl" title="ດາວນ້ຳ (Water Star)">9</span>
          </div>
          <div class="text-xl font-bold text-amber-300 mt-2 border-t border-stone-700 pt-1" title="ດາວຍຸກ (Period Star)">
            1
          </div>
          <div class="grid grid-cols-2 text-[10px] text-stone-400 mt-2 border-t border-stone-800 pt-1">
            <span class="text-left text-emerald-300">ຊ້າຍເທິງ: ດາວພູ (ສຸຂະພາບ)</span>
            <span class="text-right text-red-300">ຂວາເທິງ: ດາວນ້ຳ (ເງິນຄຳ)</span>
          </div>
          <div class="text-[10px] text-amber-200 mt-0.5">ກາງລຸ່ມ: ດາວຍຸກ (ພື້ນຖານເວລາ)</div>
        </div>
      </section>

      <!-- Section 2: Step-by-Step Algorithm -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ຂັ້ນຕອນການຕັ້ງຜັງດາວເຫີນ 5 ຂັ້ນຕອນ (The 5-Step Formula)</h2>
        
        <div class="space-y-3">
          <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
            <h3 class="font-bold text-amber-950 text-sm">ຂັ້ນຕອນທີ 1: ຕັ້ງຜັງດາວຍຸກ (Period Star Chart)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ເອົາເລກປະຈຳຍຸກທີ່ສ້າງເຮືອນ ວາງລົງສູນກາງ (ໃນຍຸກ 9 ຄືເລກ 9). ແລ້ວໃຫ້ <strong>ເຫີນເດີນໜ້າສະເໝີ (Shun Fei)</strong> ຕາມເສັ້ນທາງລົ່ວຊູ: 9 ຢູ່ກາງ → 1 ໄປ Qian (NW) → 2 ໄປ Dui (W) → 3 ໄປ Gen (NE) → 4 ໄປ Li (S) → 5 ໄປ Kan (N) → 6 ໄປ Kun (SW) → 7 ໄປ Zhen (E) → 8 ໄປ Xun (SE).
            </p>
          </div>

          <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
            <h3 class="font-bold text-amber-950 text-sm">ຂັ້ນຕອນທີ 2: ຊອກຫາທິດພິງ (Sitting) ແລະ ທິດຫັນໜ້າ (Facing)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ໃຊ້ຫຼົວຜານວັດແທກອົງສາຕົວຈິງ. ຕົວຢ່າງ: ເຮືອນສ້າງໃນຍຸກ 9, <strong>ພິງທິດເໜືອ ພູເຂົາ ຈື່ (Zi / 子, 0 ອົງສາ) ຫັນໜ້າທິດໃຕ້ ພູເຂົາ ອູ່ (Wu / 午, 180 ອົງສາ)</strong>.
            </p>
          </div>

          <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
            <h3 class="font-bold text-amber-950 text-sm">ຂັ້ນຕອນທີ 3: ດຶງດາວພູ ແລະ ດາວນ້ຳ ເຂົ້າສູ່ສູນກາງ</h3>
            <ul class="list-disc pl-5 mt-1 text-xs text-stone-700 space-y-1 leading-relaxed">
              <li><strong>ດາວພູ (Mountain Star):</strong> ທິດພິງຄື ທິດເໜືອ (Kan). ໄປເບິ່ງຜັງດາວຍຸກໃນທິດເໜືອ ພົບດາວເລກ <strong>5</strong>. ເອົາເລກ 5 ມາຂຽນໄວ້ <strong>ມູມຊ້າຍເທິງຂອງສູນກາງ</strong>.</li>
              <li><strong>ດາວນ້ຳ (Water Star):</strong> ທິດຫັນໜ້າຄື ທິດໃຕ້ (Li). ໄປເບິ່ງຜັງດາວຍຸກໃນທິດໃຕ້ ພົບດາວເລກ <strong>4</strong>. ເອົາເລກ 4 ມາຂຽນໄວ້ <strong>ມູມຂວາເທິງຂອງສູນກາງ</strong>.</li>
            </ul>
          </div>

          <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
            <h3 class="font-bold text-amber-950 text-sm">ຂັ້ນຕອນທີ 4: ກຳນົດຂົ້ວ ຢິນ/ຢາງ (+/-) ຂອງດາວພູ ແລະ ດາວນ້ຳ</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ນີ້ຄືຈຸດສຳຄັນທີ່ສຸດທີ່ຄົນມັກຜິດພາດ! ວິທີກຳນົດຂົ້ວ:
            </p>
            <ul class="list-disc pl-5 mt-1 text-xs text-stone-700 space-y-1.5 leading-relaxed">
              <li>
                <strong>ກວດເບິ່ງສາຍເລືອດມັງກອນ:</strong> ພູເຂົາ ຈື່ (Zi) ແລະ ອູ່ (Wu) ເປັນ <strong>ມັງກອນສະຫວັນ (Tian Yuan Long / ພູເຂົາທີ 2)</strong>.
              </li>
              <li>
                <strong>ຫາຂົ້ວດາວນ້ຳ (ເລກ 4):</strong> ດາວ 4 ມີຕົ້ນກຳເນີດມາຈາກກວ້າຊຸ່ນ (Xun). ໄປເບິ່ງພູເຂົາທີ 2 (ມັງກອນສະຫວັນ) ຂອງກວ້າຊຸ່ນ ຄືພູເຂົາ <strong>ຊຸ່ນ (Xun)</strong>. ໃນຕາຕະລາງ 24 ພູເຂົາ, ພູເຂົາ ຊຸ່ນ ມີຂົ້ວເປັນ <strong>ຢາງ (Yang / +)</strong>! ດັ່ງນັ້ນ ດາວນ້ຳ 4 ຈຶ່ງຕ້ອງ <strong>ເຫີນເດີນໜ້າ (+)</strong>!
              </li>
              <li>
                <strong>ຫາຂົ້ວດາວພູ (ເລກ 5):</strong> ເລກ 5 ບໍ່ມີກວ້າປະຈຳຕົວ. <strong>ກົດເກນພິເສດຂອງເລກ 5:</strong> ໃຫ້ເອົາຂົ້ວຂອງພູເຂົາທີ່ເຮົາພິງໂດຍກົງ! ເຮືອນພິງພູເຂົາ ຈື່ (Zi) ເຊິ່ງເປັນ <strong>ຢິນ (Yin / -)</strong>. ດັ່ງນັ້ນ ດາວພູ 5 ຈຶ່ງຕ້ອງ <strong>ເຫີນຖອຍຫຼັງ (-)</strong>!
              </li>
            </ul>
          </div>

          <div class="p-3.5 bg-emerald-50 rounded-xl border border-emerald-300">
            <h3 class="font-bold text-emerald-950 text-sm">ຂັ້ນຕອນທີ 5: ເຫີນດາວພູ ແລະ ດາວນ້ຳ ຄົບທັງ 9 ວັງ</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              - <strong>ດາວພູ 5 (- ຖອຍຫຼັງ):</strong> 5 ຢູ່ກາງ → Qian ເປັນ 4 → Dui ເປັນ 3 → Gen ເປັນ 2 → Li ເປັນ 1 → Kan ເປັນ 9 → Kun ເປັນ 8 → Zhen ເປັນ 7 → Xun ເປັນ 6.
              <br>- <strong>ດາວນ້ຳ 4 (+ ເດີນໜ້າ):</strong> 4 ຢູ່ກາງ → Qian ເປັນ 5 → Dui ເປັນ 6 → Gen ເປັນ 7 → Li ເປັນ 8 → Kan ເປັນ 9 → Kun ເປັນ 1 → Zhen ເປັນ 2 → Xun ເປັນ 3.
              <br><strong class="text-emerald-900 font-bold mt-1 block">🎉 ສຳເລັດຜັງດາວເຫີນຍຸກ 9: ພິງ ຈື່ ຫັນ ອູ່ (Sitting Zi Facing Wu Period 9)!</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  `
};
