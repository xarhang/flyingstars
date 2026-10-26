/**
 * ch10_master_lao.js
 * ບົດທີ 10: ໂຄງສ້າງແຜນຜັງດາວ 4 ແບບໃຫຍ່ ແລະ ຫຼັກການປັບແກ້
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch10",
  title: "ບົດທີ 10: ໂຄງສ້າງແຜນຜັງດາວ 4 ແບບໃຫຍ່",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 2: ພາກປະຕິບັດ ແລະ ການແກ້ໄຂ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 10: ໂຄງສ້າງແຜນຜັງດາວ 4 ແບບໃຫຍ່ (The Four Major Star Chart Patterns)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ການຈຳແນກຮູບແບບຜັງພະລັງງານສູງສຸດ, ປິດສະໜາຄວາມລັບຍຸກ 9, ແລະ ຍຸດທະສາດການຈັດວາງພູມສັນຖານພິກວິກິດເປັນໂອກາດ</p>
      </div>

      <!-- Section 1: Intro to 4 Patterns -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຫຼັກການວິທະຍາສາດ ແລະ ພື້ນຖານຂອງ 4 ໂຄງສ້າງໃຫຍ່</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນວິຊາຮວງຈຸ້ຍດາວເຫີນສຽນຄົງ, ເມື່ອເຮົາຕັ້ງຜັງດາວ 24 ທິດທາງໃນຍຸກໃດໜຶ່ງ ຜັງທັງໝົດຈະຖືກຈັດແບ່ງອອກເປັນ <strong>4 ໂຄງສ້າງຫຼັກ</strong> ໂດຍອີງຕາມຕຳແໜ່ງທີ່ <strong>ດາວປະຈຳຍຸກທີ່ຮຸ່ງເຮືອງທີ່ສຸດ (Dang Ling Wang Xing 当令旺星)</strong> ຕົກຢູ່. ການປະສານກັນລະຫວ່າງ <em>"ດາວພູ (ສຸຂະພາບ/ຄົນ)"</em> ແລະ <em>"ດາວນ້ຳ (ຊັບສິນ/ເງິນທອງ)"</em> ຄືຕົວຕັດສິນຊະຕາກຳຂອງເຮືອນ:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
          <!-- Pattern 1 -->
          <div class="p-4 bg-emerald-50 rounded-xl border border-emerald-300 shadow-sm space-y-2">
            <h3 class="font-bold text-emerald-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black">1</span>
              ວັງຊານ ວັງສຸຍ (旺山旺向 - Wang Shan Wang Xiang)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              <strong>"ຈະເລີນທັງພູ ແລະ ຈະເລີນທັງນ້ຳ":</strong> ດາວພູປະຈຳຍຸກຕົກຢູ່ຕຳແໜ່ງພິງ (ຫຼັງເຮືອນ) ແລະ ດາວນ້ຳປະຈຳຍຸກຕົກຢູ່ຕຳແໜ່ງຫັນໜ້າ (ໜ້າເຮືອນ).
            </p>
            <div class="text-[11px] text-emerald-900 bg-emerald-100/70 p-2 rounded">
              <strong>ຜົນກະທົບ:</strong> ໂຄງສ້າງທີ່ສົມບູນແບບທີ່ສຸດ — ຜູ້ຢູ່ອາໄສມີສຸຂະພາບແຂງແຮງ, ອາຍຸໝັ້ນຂວັນຍືນ, ຄອບຄົວປອງດອງ, ແລະ ເງິນທອງໄຫຼມາເທມາບໍ່ຂາດສາຍ.
            </div>
          </div>

          <!-- Pattern 2 -->
          <div class="p-4 bg-blue-50 rounded-xl border border-blue-300 shadow-sm space-y-2">
            <h3 class="font-bold text-blue-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black">2</span>
              ຊວງຊິງ ຕົ້າວຊຽງ (双星到向 - Shuang Xing Dao Xiang)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              <strong>"ດາວຄູ່ລົງໜ້າເຮືອນ":</strong> ທັງດາວພູປະຈຳຍຸກ ແລະ ດາວນ້ຳປະຈຳຍຸກ ໂຄຈອນມາຊຸມນຸມພົບກັນຢູ່ໜ້າເຮືອນ (Facing Palace).
            </p>
            <div class="text-[11px] text-blue-900 bg-blue-100/70 p-2 rounded">
              <strong>ຜົນກະທົບ:</strong> <em>"ຮັ່ງມີເງິນຄຳ ແຕ່ດ້ອຍສຸຂະພາບ" (Wang Cai Bu Wang Ding)</em>. ທຸລະກິດການຄ້າຈະເລີນຮຸ່ງເຮືອງໄວຫຼາຍ ແຕ່ຄົນໃນເຮືອນອາດເຈັບປ່ວຍງ່າຍ ຫຼື ມີຄວາມກົດດັນສູງ ຖ້າໜ້າເຮືອນບໍ່ມີສັນຖານພູຮອງຮັບ.
            </div>
          </div>

          <!-- Pattern 3 -->
          <div class="p-4 bg-purple-50 rounded-xl border border-purple-300 shadow-sm space-y-2">
            <h3 class="font-bold text-purple-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-black">3</span>
              ຊວງຊິງ ຕົ້າວຈົວ (双星到坐 - Shuang Xing Dao Zuo)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              <strong>"ດາວຄູ່ລົງຫຼັງເຮືອນ":</strong> ທັງດາວພູປະຈຳຍຸກ ແລະ ດາວນ້ຳປະຈຳຍຸກ ໂຄຈອນມາກອງກັນຢູ່ຫຼັງເຮືອນ (Sitting Palace).
            </p>
            <div class="text-[11px] text-purple-900 bg-purple-100/70 p-2 rounded">
              <strong>ຜົນກະທົບ:</strong> <em>"ຮຸ່ງເຮືອງບາຣະມີ ແຕ່ດ້ອຍຊັບສິນ" (Wang Ding Bu Wang Cai)</em>. ຄອບຄົວມີຄວາມສະຫງົບສຸກ, ລູກຫຼານສະຫຼາດ, ໄດ້ຮັບການຍ້ອງຍໍສັນລະເສີນ ແຕ່ການເງິນໄຫຼເຂົ້າຊ້າ ຫຼື ໝຸນເງິນຝຶດເຄືອງ ຖ້າຫຼັງເຮືອນບໍ່ມີກະແສນ້ຳເຄື່ອນໄຫວ.
            </div>
          </div>

          <!-- Pattern 4 -->
          <div class="p-4 bg-rose-50 rounded-xl border border-rose-300 shadow-sm space-y-2">
            <h3 class="font-bold text-rose-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-black">4</span>
              ຊ່າງຊານ ເສຍສຸຍ (上山下水 - Shang Shan Xia Shui)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              <strong>"ຂຶ້ນພູ ລົງນ້ຳ (ຜັງຫາຍະນະ)":</strong> ດາວພູປະຈຳຍຸກພັດຕົກຢູ່ໜ້າເຮືອນ (ລົງນ້ຳ) ແລະ ດາວນ້ຳປະຈຳຍຸກພັດຕົກຢູ່ຫຼັງເຮືອນ (ຂຶ້ນພູ).
            </p>
            <div class="text-[11px] text-rose-900 bg-rose-100/70 p-2 rounded">
              <strong>ຜົນກະທົບ:</strong> ຜິດຫຼັກທຳມະຊາດຢ່າງຮຸນແຮງ — ຖ້າພູມສັນຖານພາຍນອກເປັນແບບທຳມະດາ (ຫຼັງມີພູ ໜ້າມີນ້ຳ) ຈະເກີດການ <em>"ສູນເສຍທັງເງິນຄຳ ແລະ ຄົນໃນບ້ານລົ້ມປ່ວຍ/ເສຍຊີວິດ" (Sun Ding Po Cai)</em>.
            </div>
          </div>
        </div>
      </section>

      <!-- Section 2: Period 9 Anomaly -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ປິດສະໜາຄວາມລັບຂອງຍຸກ 9: ການຫາຍໄປຂອງ 2 ໂຄງສ້າງໃຫຍ່!</h2>
        
        <div class="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-300 text-xs text-stone-800 space-y-2 leading-relaxed">
          <p class="font-bold text-amber-950 text-sm">
            🔥 ປະກົດການພິເສດທາງຄະນິດສາດໃນຍຸກ 9 (ປີ 2024 – 2043):
          </p>
          <p>
            ໃນ <strong>ຍຸກ 9</strong> ນີ້ ມີຄວາມແຕກຕ່າງຈາກຍຸກ 8, ຍຸກ 7 ຫຼື ຍຸກອື່ນໆ ຢ່າງສິ້ນເຊີງ! ຍ້ອນວ່າເລກ 9 ເມື່ອສະຖິດຢູ່ສູນກາງ ຕົວເລກທີ່ເຫີນໄປຕົກຢູ່ທິດພິງ ແລະ ທິດຫັນໜ້າ ຈະມີຄຸນລັກສະນະຄູ່ສະເໝີ. ສົ່ງຜົນໃຫ້:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2 font-bold text-center">
            <div class="p-3 bg-red-100/80 rounded-lg border border-red-300 text-red-950">
              ❌ ບໍ່ມີຜັງ "ວັງຊານ ວັງສຸຍ" (Wang Shan Wang Xiang) ເລີຍແມ່ນແຕ່ທິດດຽວ!
            </div>
            <div class="p-3 bg-red-100/80 rounded-lg border border-red-300 text-red-950">
              ❌ ບໍ່ມີຜັງ "ຊ່າງຊານ ເສຍສຸຍ" (Shang Shan Xia Shui) ເລີຍແມ່ນແຕ່ທິດດຽວ!
            </div>
          </div>
          <p>
            ທັງ <strong>24 ທິດທາງພູເຂົາໃນຍຸກ 9</strong> ຈະແບ່ງອອກເປັນພຽງ <strong>2 ຮູບແບບເທົ່ານັ້ນ</strong> ຄື:
          </p>
          <ul class="list-disc pl-5 space-y-1 font-semibold text-stone-900">
            <li><strong>16 ທິດທາງ:</strong> ເປັນຜັງ <em>"ຊວງຊິງ ຕົ້າວຊຽງ" (Shuang Xing Dao Xiang)</em> — ດາວຄູ່ 9-9 ຕົກຢູ່ໜ້າເຮືອນ.</li>
            <li><strong>8 ທິດທາງ:</strong> ເປັນຜັງ <em>"ຊວງຊິງ ຕົ້າວຈົວ" (Shuang Xing Dao Zuo)</em> — ດາວຄູ່ 9-9 ຕົກຢູ່ຫຼັງເຮືອນ.</li>
          </ul>
        </div>

        <!-- Table of 24 Mountains in Period 9 -->
        <div class="overflow-x-auto my-3">
          <table class="w-full text-left text-xs border border-stone-300 rounded-lg overflow-hidden shadow-sm">
            <thead class="bg-amber-900 text-white font-bold">
              <tr>
                <th class="p-2.5 border">ປະເພດຜັງໃນຍຸກ 9</th>
                <th class="p-2.5 border">ຈຳນວນ</th>
                <th class="p-2.5 border">ລາຍຊື່ທິດທາງພູເຂົາ (Sitting → Facing)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-200 bg-white">
              <tr class="hover:bg-blue-50">
                <td class="p-2.5 border font-bold text-blue-900">
                  ຊວງຊິງ ຕົ້າວຊຽງ<br><span class="text-[10px] text-stone-500 font-normal">(ດາວຄູ່ 9-9 ລົງໜ້າເຮືອນ)</span>
                </td>
                <td class="p-2.5 border font-bold text-blue-800 text-center">16 ທິດ</td>
                <td class="p-2.5 border text-stone-700 leading-relaxed">
                  Zi ພິງ Wu, Gui ພິງ Ding, Ren ພິງ Bing, Chen ພິງ Xu, Xu ພິງ Chen, Qian ພິງ Xun, Hai ພິງ Si, Si ພິງ Hai, Geng ພິງ Jia, You ພິງ Mao, Xin ພິງ Yi, Mao ພິງ You, Yi ພິງ Xin, Jia ພິງ Geng, Chou ພິງ Wei, Wei ພິງ Chou.
                </td>
              </tr>
              <tr class="hover:bg-purple-50">
                <td class="p-2.5 border font-bold text-purple-900">
                  ຊວງຊິງ ຕົ້າວຈົວ<br><span class="text-[10px] text-stone-500 font-normal">(ດາວຄູ່ 9-9 ລົງຫຼັງເຮືອນ)</span>
                </td>
                <td class="p-2.5 border font-bold text-purple-800 text-center">8 ທິດ</td>
                <td class="p-2.5 border text-stone-700 leading-relaxed">
                  Wu ພິງ Zi, Ding ພິງ Gui, Bing ພິງ Ren, Xun ພິງ Qian, Gen ພິງ Kun, Yin ພິງ Shen, Kun ພິງ Gen, Shen ພິງ Yin.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Section 3: Physical Landform Matching -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ຍຸດທະສາດການຈັດພູມສັນຖານພາຍນອກ ແລະ ພາຍໃນ (Luan Tou Mastery)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ຄຳພີບູຮານສຽນຄົງກ່າວໄວ້ວ່າ: <em>"ຜັງດາວຄືຈິດວິນຍານ, ພູມສັນຖານຄືຮ່າງກາຍ"</em>. ຖ້າຜັງດາວດີແຕ່ພູມສັນຖານຕົວຈິງບໍ່ສອດຄ່ອງ ພະລັງງານຈະບໍ່ສາມາດເກີດຂຶ້ນໄດ້:
        </p>

        <div class="space-y-3.5">
          <!-- Strategy for Shuang Xing Dao Xiang -->
          <div class="p-4 bg-stone-50 rounded-xl border border-stone-300 space-y-2">
            <h3 class="font-bold text-blue-950 text-sm">A. ຍຸດທະສາດສຳລັບ "ຊວງຊິງ ຕົ້າວຊຽງ" (16 ທິດທາງໃນຍຸກ 9):</h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              ຍ້ອນທັງດາວພູ (ເລກ 9) ແລະ ດາວນ້ຳ (ເລກ 9) ມາກອງກັນຢູ່ໜ້າເຮືອນ. ຖ້າໜ້າເຮືອນມີແຕ່ນ້ຳໂລ່ງແປນຢ່າງດຽວ ເງິນຄຳຈະເຂົ້າມາແທ້ ແຕ່ຄົນໃນບ້ານຈະເສຍສຸຂະພາບ.
            </p>
            <div class="p-3 bg-blue-50 rounded-lg border border-blue-200 text-xs text-stone-800 space-y-1">
              <p><strong>ສູດພູມສັນຖານທີ່ຖືກຕ້ອງ:</strong> <em>"ນ້ຳຢູ່ໃກ້ ແລະ ມີພູຢູ່ໄກ" (Shui Wai You Shan 水外有山)</em>.</p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>ບໍລິເວນໜ້າເຮືອນໄລຍະໃກ້:</strong> ເຮັດເປັນສະລອຍນ້ຳ, ອ່າງນ້ຳພຸ, ຫຼື ເປັນລານກວ້າງໂລ່ງ (Ming Tang) ເພື່ອຮັບດາວນ້ຳ 9.</li>
                <li><strong>ບໍລິເວນຖັດອອກໄປ (ໄລຍະໄກ):</strong> ຄວນມີເນີນດິນ, ແນວຕົ້ນໄມ້ໃຫຍ່, ຫຼື ອາຄານສູງຂອງເພື່ອນບ້ານ (ຫຼື ສວນຫີນ Rock Garden ທີ່ສວຍງາມ) ເພື່ອເປັນບ່ອນເກາະຮອງຮັບດາວພູ 9!</li>
                <li><strong>ພາຍໃນເຮືອນ:</strong> ຫ້ອງຮັບແຂກໜ້າເຮືອນຄວນເປີດໂລ່ງ, ມີແສງສະຫວ່າງ, ແລະ ວາງຫີນແກະສະຫຼັກ ຫຼື ວັດຖຸໜັກແໜ້ນໄວ້ທີ່ມູມຫ້ອງ.</li>
              </ul>
            </div>
          </div>

          <!-- Strategy for Shuang Xing Dao Zuo -->
          <div class="p-4 bg-stone-50 rounded-xl border border-stone-300 space-y-2">
            <h3 class="font-bold text-purple-950 text-sm">B. ຍຸດທະສາດສຳລັບ "ຊວງຊິງ ຕົ້າວຈົວ" (8 ທິດທາງໃນຍຸກ 9):</h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              ຍ້ອນດາວຄູ່ 9-9 ຕົກຢູ່ຫຼັງເຮືອນ. ຖ້າຫຼັງເຮືອນປິດແໜ້ນຕຶບ ຄົນໃນບ້ານຈະມີສຸຂະພາບດີ ແຕ່ເງິນທອງຈະຕັນ.
            </p>
            <div class="p-3 bg-purple-50 rounded-lg border border-purple-200 text-xs text-stone-800 space-y-1">
              <p><strong>ສູດພູມສັນຖານທີ່ຖືກຕ້ອງ:</strong> <em>"ພູຢູ່ໃກ້ ແລະ ມີນ້ຳໂອບຮອບ" (Shan Wai You Shui 山外有水)</em>.</p>
              <ul class="list-disc pl-5 space-y-1">
                <li><strong>ຫຼັງເຮືອນ:</strong> ຄວນມີຝາຜະໜັງທີ່ແຂງແກ່ນ ຫຼື ເນີນດິນຮອງຮັບ (ດາວພູ 9) ແຕ່ພ້ອມດຽວກັນນັ້ນກໍມີສາຍນ້ຳໄຫຼ ຫຼື ທາງຍ່າງໝຸນວຽນໂອບຮອບ (ດາວນ້ຳ 9).</li>
                <li><strong>ພາຍໃນເຮືອນ:</strong> ຫ້ອງຫຼັງເຮືອນ (ເຊັ່ນ ຫ້ອງນອນໃຫຍ່ ຫຼື ຫ້ອງເຮັດວຽກ) ໃຫ້ຕັ້ງຫົວຕຽງພິງຝາຕຶບ ແຕ່ເປີດໜ້າຕ່າງດ້ານຂ້າງເພື່ອໃຫ້ລົມ ແລະ ແສງສະຫວ່າງໄຫຼວຽນໄດ້ສະດວກ.</li>
              </ul>
            </div>
          </div>

          <!-- Strategy for Shang Shan Xia Shui (Remedy) -->
          <div class="p-4 bg-stone-50 rounded-xl border border-stone-300 space-y-2">
            <h3 class="font-bold text-rose-950 text-sm">C. ເຄັດລັບພິເສດ: ການພິກແພງຜັງ "ຊ່າງຊານ ເສຍສຸຍ" (Dian Dao Luan Tou 颠倒峦头)</h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              ສຳລັບເຮືອນເກົ່າຍຸກ 8 ຫຼື 7 ທີ່ຕິດຜັງຮ້າຍແຮງ "ຊ່າງຊານ ເສຍສຸຍ": ຖ້າເຮືອນຫຼັງນັ້ນຕັ້ງຢູ່ໃນສະຖານທີ່ພິເສດ ຄື <strong>"ຫຼັງເຮືອນຕິດແມ່ນ້ຳຂອງ ຫຼື ສະນ້ຳ ແລະ ໜ້າເຮືອນຕິດເນີນພູ ຫຼື ຕຶກສູງ"</strong> — ຜັງຮ້າຍນີ້ຈະພິກກັບກາຍເປັນ <strong>"ຜັງມະຫາເສດຖີອັນດັບ 1"</strong> ທັນທີ! ນີ້ຄືສິ່ງທີ່ບູຮານເອີ້ນວ່າ <em>"ຫຼັບຕາປ່ຽນທິດ ພິກດິນເປັນຄຳ"</em>.
            </p>
          </div>
        </div>
      </section>
    </div>
  `
};
