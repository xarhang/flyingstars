/**
 * ch4_master_lao.js
 * ບົດທີ 4: ດາວທັງ 9 ແຫ່ງກະບວຍເໜືອ (Beidou) ແລະ ເສັ້ນທາງການເຫີນແຫ່ງລົ່ວຊູ (Luo Shu Flight Path)
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch4",
  title: "ບົດທີ 4: ດາວທັງ 9 ແຫ່ງກະບວຍເໜືອ & ເສັ້ນທາງເຫີນລົ່ວຊູ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 1: ທິດສະດີພື້ນຖານ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 4: ດາວທັງ 9 ແຫ່ງກະບວຍເໜືອ (Beidou) ແລະ ເສັ້ນທາງການເຫີນແຫ່ງລົ່ວຊູ (Luo Shu Flight Path)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ຕົ້ນກຳເນີດດາລາສາດແຫ່ງດາວ 9 ດວງ ແລະ ກົດເກນການເດີນໜ້າ-ຖອຍຫຼັງໃນ 9 ວັງ</p>
      </div>

      <!-- Section 1 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຕົ້ນກຳເນີດດາລາສາດ: ກຸ່ມດາວກະບວຍເໜືອ 7 ດວງ + 2 ດາວບໍລິວານ (Beidou 9 Stars)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນວິຊາຮວງຈຸ້ຍດາວເຫີນ, ຕົວເລກ 1 ເຖິງ 9 ບໍ່ແມ່ນຕົວເລກລອຍໆ, ແຕ່ເປັນ <strong>"ຕົວແທນຂອງດວງດາວແທ້ໃນທ້ອງຟ້າ"</strong> ຄື ກຸ່ມດາວໝີໃຫຍ່ ຫຼື <strong>ກະບວຍເໜືອ (Ursa Major / 北斗七星)</strong> ບວກກັບ <strong>2 ດາວຜູ້ຊ່ວຍ (Zuo Fu ແລະ You Bi)</strong> ທີ່ຢູ່ຕິດກັບດາວທີ 6 ແລະ ທີ 7:
        </p>

        <div class="overflow-x-auto my-3">
          <table class="w-full text-xs sm:text-sm border-collapse border border-amber-900/30 rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr class="bg-stone-900 text-amber-300 text-left">
                <th class="p-2 border border-stone-800">ເລກ</th>
                <th class="p-2 border border-stone-800">ຊື່ດາວຮວງຈຸ້ຍ</th>
                <th class="p-2 border border-stone-800">ຊື່ດາລາສາດສາກົນ</th>
                <th class="p-2 border border-stone-800">ທາດ</th>
                <th class="p-2 border border-stone-800">ລັກສະນະພະລັງງານ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-200 bg-amber-50/50 text-stone-800">
              <tr>
                <td class="p-2 font-black text-blue-900 border border-amber-900/20">1</td>
                <td class="p-2 font-bold border border-amber-900/20">ທານຫຼາງ (Tan Lang / 贪狼星) — 1 ຂາວ</td>
                <td class="p-2 border border-amber-900/20">Dubhe (Alpha Ursae Majoris)</td>
                <td class="p-2 border border-amber-900/20 text-blue-900">ນ້ຳ</td>
                <td class="p-2 border border-amber-900/20">ສະຕິປັນຍາ, ຊື່ສຽງ, ການສຶກສາ, ໂຊກລາບອະນາຄົດ</td>
              </tr>
              <tr>
                <td class="p-2 font-black text-stone-800 border border-amber-900/20">2</td>
                <td class="p-2 font-bold border border-amber-900/20">ຈູ້ເໝິນ (Ju Men / 巨门星) — 2 ດຳ</td>
                <td class="p-2 border border-amber-900/20">Merak (Beta Ursae Majoris)</td>
                <td class="p-2 border border-amber-900/20 text-stone-800">ດິນ</td>
                <td class="p-2 border border-amber-900/20 text-red-900 font-semibold">ດາວແຫ່ງພະຍາດ (Illness Star), ຄວາມເຈັບປ່ວຍ, ຄວາມອິດສາ</td>
              </tr>
              <tr>
                <td class="p-2 font-black text-emerald-900 border border-amber-900/20">3</td>
                <td class="p-2 font-bold border border-amber-900/20">ລູ່ຊຸນ (Lu Cun / 禄存星) — 3 ຂຽວມຸງກຸດ</td>
                <td class="p-2 border border-amber-900/20">Phecda (Gamma Ursae Majoris)</td>
                <td class="p-2 border border-amber-900/20 text-emerald-900">ໄມ້</td>
                <td class="p-2 border border-amber-900/20 text-amber-950">ການໂຕ້ຖຽງ, ຄະດີຄວາມ, ການຜິດຖຽງ, ການແຂ່ງຂັນ</td>
              </tr>
              <tr>
                <td class="p-2 font-black text-green-800 border border-amber-900/20">4</td>
                <td class="p-2 font-bold border border-amber-900/20">ເຫວິນຊວີ່ (Wen Qu / 文曲星) — 4 ຂຽວເຂັ້ມ</td>
                <td class="p-2 border border-amber-900/20">Megrez (Delta Ursae Majoris)</td>
                <td class="p-2 border border-amber-900/20 text-green-800">ໄມ້</td>
                <td class="p-2 border border-amber-900/20">ສະເໜ່, ຄວາມຮັກ, ສິລະປະ, ວິຊາການ, ຄວາມຄິດສ້າງສັນ</td>
              </tr>
              <tr>
                <td class="p-2 font-black text-amber-800 border border-amber-900/20">5</td>
                <td class="p-2 font-bold border border-amber-900/20">ລຽນເຈິ້ນ (Lian Zhen / 廉贞星) — 5 ເຫຼືອງ</td>
                <td class="p-2 border border-amber-900/20">Alioth (Epsilon Ursae Majoris)</td>
                <td class="p-2 border border-amber-900/20 text-amber-950 font-bold">ດິນກາງ</td>
                <td class="p-2 border border-amber-900/20 text-red-950 font-black">ດາວຮ້າຍແຮງທີ່ສຸດ (Five Yellow / ໂຊກຮ້າຍ, ອຸບັດຕິເຫດ, ພິນາດ)</td>
              </tr>
              <tr>
                <td class="p-2 font-black text-slate-800 border border-amber-900/20">6</td>
                <td class="p-2 font-bold border border-amber-900/20">ອູ່ຊວີ່ (Wu Qu / 武曲星) — 6 ຂາວ</td>
                <td class="p-2 border border-amber-900/20">Mizar (Zeta Ursae Majoris)</td>
                <td class="p-2 border border-amber-900/20 text-slate-800">ທອງ</td>
                <td class="p-2 border border-amber-900/20">ອຳນາດ, ບາຣະມີ, ລາຊະການ, ຄວາມເປັນຜູ້ນຳ, ໂຊກລາບໃຫຍ່</td>
              </tr>
              <tr>
                <td class="p-2 font-black text-amber-900 border border-amber-900/20">7</td>
                <td class="p-2 font-bold border border-amber-900/20">ຜໍຈວິນ (Po Jun / 破军星) — 7 ແດງ</td>
                <td class="p-2 border border-amber-900/20">Alkaid (Eta Ursae Majoris)</td>
                <td class="p-2 border border-amber-900/20 text-amber-900">ທອງ</td>
                <td class="p-2 border border-amber-900/20 text-red-900">ການຖືກລັກ, ການຜ່າຕັດ, ອັກຄີໄພ, ການທໍລະຍົດ, ຄຳເວົ້າຫຼອກລວງ</td>
              </tr>
              <tr>
                <td class="p-2 font-black text-amber-950 border border-amber-900/20">8</td>
                <td class="p-2 font-bold border border-amber-900/20">ຈົວຟູ່ (Zuo Fu / 左辅星) — 8 ຂາວ</td>
                <td class="p-2 border border-amber-900/20">Alcor (ດາວຄູ່ຂ້າງ Mizar)</td>
                <td class="p-2 border border-amber-900/20 text-amber-950">ດິນ</td>
                <td class="p-2 border border-amber-900/20">ຄວາມໝັ້ນຄົງ, ອະສັງຫາລິມະຊັບ, ຄວາມດຸໝັ່ນ (ອະດີດດາວວັ່ງຍຸກ 8)</td>
              </tr>
              <tr class="bg-red-100/70 font-bold">
                <td class="p-2 font-black text-red-950 border border-amber-900/20">9</td>
                <td class="p-2 font-black text-red-950 border border-amber-900/20">ຢິ້ວປີ້ (You Bi / 右弼星) — 9 ສີມ່ວງ</td>
                <td class="p-2 border border-amber-900/20">Invisible Star / ດາວພະລັງງານ</td>
                <td class="p-2 border border-amber-900/20 text-red-950">ໄຟ</td>
                <td class="p-2 border border-amber-900/20 text-red-950 font-black">🔥 ດາວວັ່ງຊີ່ຍຸກ 9 (2024–2043) — ມະຫາໂຊກລາບ, ຄວາມຮັ່ງມີ, ຊື່ສຽງ!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section 2 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ເສັ້ນທາງການເຫີນແຫ່ງລົ່ວຊູ (Luo Shu Flight Trajectory): ຂັ້ນຕອນ 9 ກ້າວມະຫັດສະຈັນ</h2>
        <p class="doc-p text-justify leading-relaxed">
          ເມື່ອດາວໃດໜຶ່ງເຂົ້າສູ່ສູນກາງ (Center Palace / ວັງກາງ), ດາວອື່ນໆທັງໝົດຈະຕ້ອງ <strong>"ເຫີນ" (Fly) ໄປຕາມລຳດັບ 9 ວັງ</strong> ຢ່າງເຂັ້ມງວດ. ເສັ້ນທາງນີ້ບໍ່ມີວັນປ່ຽນແປງ:
        </p>

        <div class="p-4 bg-amber-50 rounded-xl border border-amber-300 shadow-sm my-3 font-semibold text-xs sm:text-sm text-stone-800 leading-loose">
          <span class="bg-amber-900 text-amber-100 px-2.5 py-1 rounded-md text-xs font-bold mr-2">ລຳດັບການເຫີນ 9 ກ້າວ:</span>
          <br>1. <strong>ສູນກາງ (Center / ວັງກາງ)</strong> →
          <br>2. <strong>ຕາເວັນຕົກສຽງເໜືອ (Qian / 乾)</strong> →
          <br>3. <strong>ຕາເວັນຕົກ (Dui / 兑)</strong> →
          <br>4. <strong>ຕາເວັນອອກສຽງເໜືອ (Gen / 艮)</strong> →
          <br>5. <strong>ໃຕ້ (Li / 离)</strong> →
          <br>6. <strong>ເໜືອ (Kan / 坎)</strong> →
          <br>7. <strong>ຕາເວັນຕົກສຽງໃຕ້ (Kun / 坤)</strong> →
          <br>8. <strong>ຕາເວັນອອກ (Zhen / 震)</strong> →
          <br>9. <strong>ຕາເວັນອອກສຽງໃຕ້ (Xun / 巽)</strong> → ແລ້ວກັບຄືນສູ່ສູນກາງ!
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <div class="bg-emerald-50 border border-emerald-300 p-3.5 rounded-xl">
            <h3 class="font-bold text-emerald-950 text-sm">➡️ ການເຫີນເດີນໜ້າ (Shun Fei / 顺飞): ພະລັງຢາງ (+)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ເມື່ອດາວມີຂົ້ວເປັນ <strong>ຢາງ (Yang / +)</strong>: ດາວຈະເຫີນ <strong>ເພີ່ມຂຶ້ນຕາມລຳດັບເລກ</strong> ຕາມເສັ້ນທາງລົ່ວຊູ. ຕົວຢ່າງ: ຖ້າເລີ່ມທີ່ສູນກາງຄື 9 → Qian ຈະເປັນ 1 → Dui ຈະເປັນ 2 → Gen ຈະເປັນ 3 → Li ຈະເປັນ 4...
            </p>
          </div>
          <div class="bg-blue-50 border border-blue-300 p-3.5 rounded-xl">
            <h3 class="font-bold text-blue-950 text-sm">⬅️ ການເຫີນຖອຍຫຼັງ (Ni Fei / 逆飞): ພະລັງຢິນ (-)</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ເມື່ອດາວມີຂົ້ວເປັນ <strong>ຢິນ (Yin / -)</strong>: ດາວຈະເຫີນ <strong>ຫຼຸດລົງຕາມລຳດັບເລກ</strong> ຕາມເສັ້ນທາງລົ່ວຊູ. ຕົວຢ່າງ: ຖ້າເລີ່ມທີ່ສູນກາງຄື 9 → Qian ຈະເປັນ 8 → Dui ຈະເປັນ 7 → Gen ຈະເປັນ 6 → Li ຈະເປັນ 5...
            </p>
          </div>
        </div>
      </section>
    </div>
  `
};
