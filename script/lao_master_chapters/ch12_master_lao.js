/**
 * ch12_master_lao.js
 * ບົດທີ 12: ດາວຈອນ (Visiting Stars) ແລະ ພະລັງງານກະທົບຕາມເວລາ
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch12",
  title: "ບົດທີ 12: ດາວຈອນ ແລະ ພະລັງງານກະທົບຕາມເວລາ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 3: ການວິເຄາະ ແລະ ພະຍາກອນຂັ້ນສູງ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 12: ດາວຈອນ (Visiting Stars) ແລະ ພະລັງງານກະທົບຕາມເວລາ</h1>
        <p class="text-sm font-semibold text-amber-900/80">ສູດຄິດໄລ່ດາວປີ, ດາວເດືອນ, ໄທ່ສຸ້ຍ (Tai Sui), ຊານຊາ (San Sha) ແລະ ກົນໄກການຈຸດຊະນວນເຫດການ</p>
      </div>

      <!-- Section 1: Intro to Visiting Stars -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຫຼັກການເຮັດວຽກຂອງດາວຈອນ (The Visiting Stars Mechanism)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ຖ້າຜັງດາວເດີມຂອງເຮືອນ (Natal Chart) ປຽບເໝືອນ <strong>"ດາວພິຈິດຊະຕາກຳ"</strong> ທີ່ຄົງທີ່ຕະຫຼອດ 20 ປີ, <strong>ດາວຈອນ (Visiting Stars)</strong> ກໍປຽບເໝືອນ <strong>"ສະພາບດິນຟ້າອາກາດ"</strong> ທີ່ປ່ຽນແປງທຸກໆ ປີ, ເດືອນ, ວັນ ແລະ ຍາມ:
        </p>
        <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-300 text-xs text-stone-800 leading-relaxed">
          <p class="font-bold text-amber-950">ຫຼັກການຄຳພີ: "ຜັງເດີມກຳນົດໂຄງສ້າງ, ດາວຈອນກຳນົດເວລາເກີດເຫດ" (Ji Xiong You Yuan Pan, Ying Qi You Liu Nian)</p>
          <p class="mt-1">
            ຫ້ອງໃດໜຶ່ງທີ່ມີດາວ 5-2 ຢູ່ແລ້ວ ອາດຈະຍັງບໍ່ເກີດເລື່ອງຮ້າຍ ຈົນກວ່າຈະມີ <strong>ດາວຈອນປະຈຳປີເລກ 5 ຫຼື ເລກ 2</strong> ບິນເຂົ້າມາທັບຊ້ອນ ຫຼື ມີການຂຸດດິນ, ຕອກຕະປູ, ສ້ອມແປງໃນທິດນັ້ນ ເຫດການຮ້າຍແຮງຈຶ່ງຈະລະເບີດຂຶ້ນທັນທີ!
          </p>
        </div>
      </section>

      <!-- Section 2: Formulas for Annual and Monthly Stars -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ສູດຄິດໄລ່ດາວຈອນປະຈຳປີ (Annual Flying Star Formula)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ການຊອກຫາດາວທີ່ລົງສູນກາງໃນແຕ່ລະປີ (Solar Year - ເລີ່ມຕົ້ນມື້ Li Chun 4 ກຸມພາ ຂອງທຸກປີ) ມີສູດຄິດໄລ່ທາງຄະນິດສາດດັ່ງນີ້:
        </p>

        <div class="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2">
          <div class="text-amber-400 font-bold text-sm">ສູດຄິດໄລ່ດາວປີ (ສຳລັບສັດຕະວັດທີ 21 - ປີ 2000 ເປັນຕົ້ນໄປ):</div>
          <div class="bg-stone-800 p-2.5 rounded border border-stone-700">
            ເລກດາວສູນກາງ = 9 - (ຜົນບວກຕົວເລກ 2 ຫຼັກສຸດທ້າຍຂອງປີ ຄິດໄລ່ໃຫ້ເຫຼືອຫຼັກດຽວ)
          </div>
          <div class="text-stone-300 text-[11px] space-y-1">
            <p><strong>ຕົວຢ່າງປີ 2024 (ປີມັງກອນ):</strong> ເອົາ 2 + 4 = 6. ດັ່ງນັ້ນ: 9 - 6 = <strong>3</strong> (ດາວ 3 ລົງກາງວັງໃນປີ 2024).</p>
            <p><strong>ຕົວຢ່າງປີ 2025 (ປີງູ):</strong> ເອົາ 2 + 5 = 7. ດັ່ງນັ້ນ: 9 - 7 = <strong>2</strong> (ດາວ 2 ລົງກາງວັງໃນປີ 2025).</p>
            <p><strong>ຕົວຢ່າງປີ 2026 (ປີມ້າ):</strong> ເອົາ 2 + 6 = 8. ດັ່ງນັ້ນ: 9 - 8 = <strong>1</strong> (ດາວ 1 ລົງກາງວັງໃນປີ 2026).</p>
          </div>
          <div class="text-[10px] text-emerald-400 mt-2">
            * ໝາຍເຫດ: ເມື່ອໄດ້ເລກດາວສູນກາງແລ້ວ ດາວປີຈະ <strong>ເຫີນເດີນໜ້າສະເໝີ (Shun Fei)</strong> ຕາມເສັ້ນທາງລົ່ວຊູ.
          </div>
        </div>
      </section>

      <!-- Section 3: Afflictions: Tai Sui, Sui Po, San Sha -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ພະລັງງານອັບມຸງຄຸນປະຈຳປີ (Annual Afflictions)</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300">
            <h3 class="font-bold text-rose-950 text-xs uppercase tracking-wider">1. ໄທ່ສຸ້ຍ (Tai Sui / องค์ไท้ส่วย)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              <strong>"ເທບພະເຈົ້າແຫ່ງການເວລາ":</strong> ສະຖິດຢູ່ໃນທິດທາງຂອງນັກສັດປະຈຳປີ (ເຊັ່ນ ປີມະໂຮງ 2024 ຢູ່ທິດ Chen/SE1, ປີມະເສງ 2025 ຢູ່ Si/SE3, ປີມະເມຍ 2026 ຢູ່ Wu/S2).<br>
              <strong>ຂໍ້ຫ້າມ:</strong> ຫ້າມຂຸດເຈາະ, ຫ້າມສັ່ນສະເທືອນ, ຫ້າມນັ່ງຫັນໜ້າປະເຊີນກັບໄທ່ສຸ້ຍ! ໃຫ້ນັ່ງເອົາຫຼັງພິງໄທ່ສຸ້ຍຈະໄດ້ຮັບການປົກປ້ອງ.
            </p>
          </div>

          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300">
            <h3 class="font-bold text-rose-950 text-xs uppercase tracking-wider">2. ສຸ້ຍໂພ່ (Sui Po / 岁破)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              <strong>"ທິດຕຳແໜ່ງປະທະໄທ່ສຸ້ຍ":</strong> ຢູ່ກົງກັນຂ້າມ 180 ອົງສາກັບໄທ່ສຸ້ຍສະເໝີ (ເຊັ່ນ ໄທ່ສຸ້ຍຢູ່ທິດໃຕ້ ສຸ້ຍໂພ່ຈະຢູ່ທິດເໜືອ).<br>
              <strong>ຜົນກະທົບ:</strong> ອັນຕະລາຍຮ້າຍແຮງກວ່າໄທ່ສຸ້ຍ! ຖ້າໄປຂຸດເຈາະ ຫຼື ສ້ອມແປງທິດສຸ້ຍໂພ່ ຈະເກີດການສູນເສຍເງິນຄຳຢ່າງໄວວາ ແລະ ຜູ້ເຖົ້າໃນບ້ານຈະເຈັບປ່ວຍກະທັນຫັນ.
            </p>
          </div>

          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300">
            <h3 class="font-bold text-rose-950 text-xs uppercase tracking-wider">3. ຊານຊາ (San Sha / 三煞)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              <strong>"ສາມມານຮ້າຍ":</strong> ກວມເອົາ 3 ທິດຍ່ອຍ (45 ອົງສາ): ປະກອບດ້ວຍ ປຽບຊາ (Jie Sha - ຖືກປົ້ນ/ຄະດີ), ໄຈຊາ (Zai Sha - ໂລກໄພ), ແລະ ສຸຍຊາ (Sui Sha - ອຸບັດຕິເຫດ).<br>
              <strong>ຫຼັກການ:</strong> "ສາມາດປະເຊີນໜ້າໄດ້ ແຕ່ຫ້າມນັ່ງພິງຫຼັງໃສ່ຊານຊາ" (Ke Xiang Er Bu Ke Zuo).
            </p>
          </div>
        </div>
      </section>

      <!-- Section 4: Dynamic Triggers -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">4. ຕາຕະລາງປະຕິສຳພັນດາວຈອນ ແລະ ການປ້ອງກັນ</h2>
        <div class="overflow-x-auto text-xs">
          <table class="w-full text-left border border-stone-300 rounded-lg overflow-hidden shadow-sm">
            <thead class="bg-amber-900 text-white font-bold">
              <tr>
                <th class="p-2 border">ດາວຈອນ</th>
                <th class="p-2 border">ເມື່ອພົບດາວພື້ນຖານ</th>
                <th class="p-2 border">ເຫດການທີ່ຖືກກະຕຸ້ນ</th>
                <th class="p-2 border">ວິທີປ້ອງກັນ / ແກ້ໄຂ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-200 bg-white">
              <tr class="hover:bg-amber-50">
                <td class="p-2 font-bold text-rose-800 border">ດາວ 5 ຈອນມາ</td>
                <td class="p-2 border">ພົບດາວ 2 ຫຼື 5 ເດີມ</td>
                <td class="p-2 border">ອຸບັດຕິເຫດຮ້າຍແຮງ, ຜ່າຕັດ, ລົ້ມລະລາຍ</td>
                <td class="p-2 border">ແຂວນກະດິ່ງລົມໂລຫະ 6 ທໍ່, ວາງໂຖເກືອ, ຫ້າມສຽງດັງ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 font-bold text-rose-800 border">ດາວ 2 ຈອນມາ</td>
                <td class="p-2 border">ພົບດາວ 1 ຫຼື 2 ເດີມ</td>
                <td class="p-2 border">ພະຍາດຊ້ຳເຮື້ອ, ໂລກກະເພາະ, ຜ່າຕັດມົດລູກ</td>
                <td class="p-2 border">ວາງນ້ຳເຕົ້າທອງເຫຼືອງແທ້ ແລະ ຫຼຽນ 6 ຫຼຽນ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 font-bold text-emerald-800 border">ດາວ 9 ຈອນມາ</td>
                <td class="p-2 border">ພົບດາວ 8 ຫຼື 9 ເດີມ</td>
                <td class="p-2 border">ໂຊກລາບກ້ອນໃຫຍ່, ໄດ້ເລື່ອນຕຳແໜ່ງ, ແຕ່ງງານ</td>
                <td class="p-2 border">ເປີດໄຟແຈ້ງ, ເປີດປະຕູຮັບລົມ, ວາງຕົ້ນໄມ້ມຸງຄຸນ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 font-bold text-blue-800 border">ດາວ 1 ຈອນມາ</td>
                <td class="p-2 border">ພົບດາວ 4 ຫຼື 6 ເດີມ</td>
                <td class="p-2 border">ສອບເສັງຕິດ, ໄດ້ຮັບທຶນ, ຊື່ສຽງ, ເດີນທາງຕ່າງປະເທດ</td>
                <td class="p-2 border">ຕັ້ງໂຕະຂຽນໜັງສື, ວາງໄຜ່ກວນອິມ 4 ຕົ້ນ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `
};
