/**
 * ch7_master_lao.js
 * ບົດທີ 7: ການວາງຜັງ 9 ວັງ (Nine Palaces), ການຫາຈຸດສູນກາງໄທ້ຈີ໊ (Taiji), ແລະ ການແກ້ໄຂມຸມຂາດ (Missing Corners)
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch7",
  title: "ບົດທີ 7: ການວາງຜັງ 9 ວັງ & ການແກ້ໄຂມຸມຂາດ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 1: ທິດສະດີພື້ນຖານ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 7: ການວາງຜັງ 9 ວັງ (Nine Palaces), ການຫາຈຸດສູນກາງໄທ້ຈີ໊ (Taiji), ແລະ ການແກ້ໄຂມຸມຂາດ (Missing Corners)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ວິທີການທາງສະຖາປັດຕະຍະກຳໃນການວາງຜັງດາວລົງສູ່ແປນເຮືອນຕົວຈິງ ແລະ ວິທີເສີມມຸມເວົ້າແຫວ່ງ</p>
      </div>

      <!-- Section 1 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ສອງວິທີການວາງຜັງດາວລົງສູ່ແປນເຮືອນ: ຜັງຕາໜ່າງ 9 ຫ້ອງ (Grid) vs ຜັງແບ່ງພາຍ 8 ທິດ (Pie Slices)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ເມື່ອໄດ້ຜັງດາວເຫີນມາແລ້ວ, ຄຳຖາມສຳຄັນຄື: <strong>"ຈະເອົາຜັງດາວໄປທາບໃສ່ແປນເຮືອນ (Floor Plan) ແນວໃດໃຫ້ຖືກຕ້ອງ?"</strong> ຊິນແສມືອາຊີບໃຊ້ 2 ວິທີຫຼັກຕາມຮູບຊົງຂອງເຮືອນ:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <div class="bg-amber-50/70 border border-amber-200 p-3.5 rounded-xl">
            <h3 class="font-bold text-amber-950 text-sm">📐 1. ຜັງຕາໜ່າງ 9 ຫ້ອງສີ່ຫຼ່ຽມ (Jiu Gong Ge / 九宫格):</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              <strong>ເໝາະສຳລັບ:</strong> ເຮືອນທີ່ມີຮູບຊົງສີ່ຫຼ່ຽມຈະຕຸລັດ ຫຼື ສີ່ຫຼ່ຽມຜືນຜ້າປົກກະຕິ. ໃຫ້ແບ່ງຄວາມກວ້າງ ແລະ ຄວາມຍາວຂອງເຮືອນອອກເປັນ 3 ສ່ວນເທົ່າກັນ (3×3 = 9 ຫ້ອງ). ແຕ່ລະຫ້ອງຈະຄອບຄອງພະລັງງານຂອງ 1 ວັງດາວເຫີນຢ່າງຊັດເຈນ.
            </p>
          </div>
          <div class="bg-blue-50/70 border border-blue-200 p-3.5 rounded-xl">
            <h3 class="font-bold text-blue-950 text-sm">🥧 2. ຜັງແບ່ງພາຍ 8 ທິດຮອບຈຸດສູນກາງ (Pie / Radiation):</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              <strong>ເໝາະສຳລັບ:</strong> ເຮືອນທີ່ມີຮູບຊົງແປກໆ (ຮູບໂຕ L, ໂຕ U, ເຮືອນຫຼ່ຽມຫຼາຍມຸມ). ໃຫ້ຊອກຫາ <strong>ຈຸດສູນກາງໄທ້ຈີ໊ (Center Taiji)</strong> ແລ້ວແຍກເສັ້ນລັດສະໝີ 8 ທິດ (ທິດລະ 45 ອົງສາ) ອອກຈາກສູນກາງຄືກັບການຕັດເຂົ້າໜົມເຄັກ.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 2 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ວິທີການຊອກຫາຈຸດສູນກາງ "ໄທ້ຈີ໊" (Center Taiji / 太极)</h2>
        <p class="doc-p text-justify leading-relaxed">
          <strong>ໄທ້ຈີ໊ (Taiji)</strong> ຄືຫົວໃຈຂອງເຮືອນ. ຫາກກຳນົດຈຸດສູນກາງຜິດ, ທຸກທິດທາງຈະຜິດພາດທັງໝົດ!
        </p>
        <ul class="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-stone-800">
          <li><strong>ເຮືອນສີ່ຫຼ່ຽມປົກກະຕິ:</strong> ຂີດເສັ້ນສະຫຼຽງ (Diagonal Lines) ຈາກ 4 ມູມເຮືອນຕັດກັນ. ຈຸດຕັດກັນຄືຈຸດ Taiji.</li>
          <li><strong>ເຮືອນຮູບໂຕ L:</strong> ໃຫ້ແບ່ງເຮືອນອອກເປັນ 2 ສີ່ຫຼ່ຽມ, ຊອກຫາຈຸດສູນກາງຂອງແຕ່ລະສີ່ຫຼ່ຽມ, ແລ້ວຂີດເສັ້ນເຊື່ອມຕໍ່ກັນ; ຈຸດສູນກາງລວມຈະຕົກຢູ່ຕາມອັດຕາສ່ວນພື້ນທີ່ (ບາງຄັ້ງອາດຕົກຢູ່ຂ້າງນອກຕົວເຮືອນ ເຊິ່ງຖືວ່າເປັນຮວງຈຸ້ຍທີ່ບໍ່ດີ).</li>
          <li><strong>ຂໍ້ຫ້າມສຳລັບຈຸດສູນກາງ:</strong> ຫ້າມຕັ້ງ <strong>ຫ້ອງນ້ຳ, ຫ້ອງຄົວ (ເຕົາໄຟ), ຫຼື ຂັ້ນໄດ</strong> ຢູ່ໃຈກາງເຮືອນເດັດຂາດ! ເພາະຈະເຮັດໃຫ້ພະລັງງານຊີ່ເສຍຫາຍ, ເຈັບປ່ວຍທັງຄອບຄົວ, ແລະ ເງິນຄຳຮົ່ວໄຫຼ.</li>
        </ul>
      </section>

      <!-- Section 3 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ບັນຫາມຸມຂາດ (Que Jiao / 缺角) ແລະ ວິທີແກ້ໄຂຢ່າງໄດ້ຜົນ</h2>
        <p class="doc-p text-justify leading-relaxed">
          ເຮືອນທີ່ດີທີ່ສຸດຄວນເປັນຮູບຊົງສີ່ຫຼ່ຽມເຕັມ ເພື່ອໃຫ້ມີພະລັງຄົບທັງ 8 ທິດ. ຫາກມູມໃດມູມໜຶ່ງແຫວ່ງຂາດຫາຍໄປເກີນກວ່າ 1/3 ຂອງຄວາມກວ້າງ, ຈະສົ່ງຜົນກະທົບຮ້າຍແຮງຕໍ່ສະມາຊິກຄອບຄົວປະຈຳທິດນັ້ນ:
        </p>

        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs border-collapse border border-amber-900/30 rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr class="bg-amber-950 text-amber-100 text-left">
                <th class="p-2 border border-amber-800">ມູມທີ່ຂາດ</th>
                <th class="p-2 border border-amber-800">ຜົນກະທົບຕໍ່ບຸກຄົນ</th>
                <th class="p-2 border border-amber-800">ຜົນກະທົບຕໍ່ສຸຂະພາບ</th>
                <th class="p-2 border border-amber-800 bg-amber-900 text-amber-200">ວິທີແກ້ໄຂທາງຮວງຈຸ້ຍ (Remedy)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-200 bg-amber-50/50 text-stone-800">
              <tr>
                <td class="p-2 font-bold border border-amber-900/20 text-slate-800">ຂາດ NW (ສຽນ)</td>
                <td class="p-2 border border-amber-900/20 font-semibold text-red-900">ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້າຂອງກິດຈະການ</td>
                <td class="p-2 border border-amber-900/20">ເຈັບຫົວ, ພະຍາດປອດ, ຄວາມດັນສູງ, ອຳມະພາດ</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900 font-semibold">ຕັ້ງ <strong>ຮູບປັ້ນໝາທອງເຫຼືອງ ຫຼື ກະດິ່ງໂລຫະ</strong>, ເສີມໄຟແສງສະຫວ່າງ.</td>
              </tr>
              <tr>
                <td class="p-2 font-bold border border-amber-900/20 text-stone-800">ຂາດ SW (ຄຸນ)</td>
                <td class="p-2 border border-amber-900/20 font-semibold text-red-900">ແມ່, ພັນລະຍາ, ຜູ້ຍິງອາວຸໂສ</td>
                <td class="p-2 border border-amber-900/20">ພະຍາດກະເພາະ, ມົດລູກ, ລະບົບຍ່ອຍອາຫານ</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900 font-semibold">ຕັ້ງ <strong>ແກ້ວຜລຶກສີເຫຼືອງ (Citrine), ໝໍ້ດິນເຜົາ, ຫຼື ຫີນພູເຂົາ</strong>.</td>
              </tr>
              <tr>
                <td class="p-2 font-bold border border-amber-900/20 text-emerald-900">ຂາດ E (ເຈິ້ນ)</td>
                <td class="p-2 border border-amber-900/20 font-semibold">ລູກຊາຍກົກ</td>
                <td class="p-2 border border-amber-900/20">ຕັບ, ຖົງບີ, ຂາ ແລະ ຕີນ</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900 font-semibold">ປູກ <strong>ຕົ້ນໄມ້ຂຽວສົດງົດງາມ ຫຼື ຕັ້ງຮູບປັ້ນມັງກອນຂຽວ</strong>.</td>
              </tr>
              <tr>
                <td class="p-2 font-bold border border-amber-900/20 text-green-800">ຂາດ SE (ຊຸ່ນ)</td>
                <td class="p-2 border border-amber-900/20 font-semibold">ລູກສາວກົກ</td>
                <td class="p-2 border border-amber-900/20">ລະບົບຫາຍໃຈ, ກົ້ນ, ຂາອ່ອນ</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900 font-semibold">ຕັ້ງ <strong>ຕົ້ນໄຜ່ກວນອິມ 4 ຕົ້ນ ຫຼື ວັດຖຸສີຂຽວ</strong>.</td>
              </tr>
              <tr>
                <td class="p-2 font-bold border border-amber-900/20 text-blue-900">ຂາດ N (ຂຳ)</td>
                <td class="p-2 border border-amber-900/20 font-semibold">ລູກຊາຍກາງ</td>
                <td class="p-2 border border-amber-900/20">ໝາກໄຂ່ຫຼັງ, ຫູ, ພົກຍ່ຽວ, ລະບົບສືບພັນ</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900 font-semibold">ຕັ້ງ <strong>ອ່າງນ້ຳສະອາດ ຫຼື ຮູບພາບແມ່ນ້ຳທີ່ສະຫງົບ</strong>.</td>
              </tr>
              <tr>
                <td class="p-2 font-bold border border-amber-900/20 text-red-900">ຂາດ S (ຫຼີ)</td>
                <td class="p-2 border border-amber-900/20 font-semibold">ລູກສາວກາງ (ສຳຄັນຫຼາຍໃນຍຸກ 9!)</td>
                <td class="p-2 border border-amber-900/20">ຕາ, ຫົວໃຈ, ຄວາມດັນເລືອດ, ລະບົບປະສາດ</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900 font-semibold">ຕັ້ງ <strong>ໂຄມໄຟສີແດງເປີດແຈ້ງສະຫວ່າງ, ຮູບມ້າສີແດງ</strong>.</td>
              </tr>
              <tr>
                <td class="p-2 font-bold border border-amber-900/20 text-amber-950">ຂາດ NE (ເກິ້ນ)</td>
                <td class="p-2 border border-amber-900/20 font-semibold">ລູກຊາຍຫຼ້າ</td>
                <td class="p-2 border border-amber-900/20">ມື, ກະດູກສັນຫຼັງ, ດັງ</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900 font-semibold">ຕັ້ງ <strong>ກ້ອນຫີນທຳມະຊາດໜັກແໜ້ນ ຫຼື ເຄື່ອງປັ້ນດິນເຜົາ</strong>.</td>
              </tr>
              <tr>
                <td class="p-2 font-bold border border-amber-900/20 text-amber-800">ຂາດ W (ຕຸ່ຍ)</td>
                <td class="p-2 border border-amber-900/20 font-semibold">ລູກສາວຫຼ້າ</td>
                <td class="p-2 border border-amber-900/20">ປາກ, ແຂ້ວ, ປອດ, ຫຼອດລົມ</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900 font-semibold">ຕັ້ງ <strong>ວັດຖຸໂລຫະເຫຼື້ອມ, ແຈກັນທອງເຫຼືອງ</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `
};
