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
        <p class="text-sm font-semibold text-amber-900/80">ຄູ່ມືຄິດໄລ່ເທື່ອລະກ້າວ (Step-by-Step Algorithm): ຫຼັກການກຳນົດຂົ້ວ ຢິນ-ຢາງ, ກົດເກນດາວ 5 ແລະ ຕົວຢ່າງການຕັ້ງຜັງຕົວຈິງ 3 ຮູບແບບ</p>
      </div>

      <!-- Section 1: Anatomy of 9 Palaces Box -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ໂຄງສ້າງ ແລະ ກາຍະວິພາກຂອງ 1 ວັງ (Anatomy of a Flying Star Palace)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນລະບົບຮວງຈຸ້ຍດາວເຫີນສຽນຄົງ (Xuan Kong Fei Xing), ຜັງ 9 ວັງ (Nine Palaces) ປຽບເໝືອນແຜນທີ່ສະແກນພະລັງງານ 3 ມິຕິຂອງອາຄານ. ໃນແຕ່ລະຊ່ອງສີ່ຫຼ່ຽມ (ແຕ່ລະວັງ) ຈະບັນຈຸຕົວເລກພະລັງງານສຳຄັນ <strong>3 ຕົວເລກ</strong> ທີ່ເຮັດວຽກປະສານກັນຢ່າງສະຫຼັບສັບຊ້ອນ:
        </p>

        <div class="p-5 bg-stone-900 text-stone-100 rounded-2xl shadow-xl my-4 max-w-md mx-auto font-mono border border-amber-500/30">
          <div class="text-xs text-amber-400 font-bold uppercase tracking-wider text-center mb-3">ຮູບຮ່າງ 1 ວັງໃນຜັງດາວເຫີນ (One Palace Box)</div>
          <div class="flex justify-between items-center text-3xl font-black px-8 py-2 bg-stone-800/80 rounded-xl border border-stone-700">
            <div class="text-center">
              <span class="text-emerald-400 block text-4xl">8</span>
              <span class="text-[10px] text-emerald-300 font-sans tracking-normal font-normal">ດາວພູ (Mountain)</span>
            </div>
            <div class="text-stone-500 text-xl font-light">|</div>
            <div class="text-center">
              <span class="text-red-400 block text-4xl">9</span>
              <span class="text-[10px] text-red-300 font-sans tracking-normal font-normal">ດາວນ້ຳ (Water)</span>
            </div>
          </div>
          <div class="mt-3 text-center bg-amber-950/60 py-2 rounded-lg border border-amber-800/50">
            <span class="text-2xl font-black text-amber-300">1</span>
            <span class="text-[10px] text-amber-200 block font-sans tracking-normal font-normal">ດາວຍຸກພື້ນຖານ (Period Star)</span>
          </div>
          <div class="mt-3 text-[11px] text-stone-300 space-y-1 font-sans text-justify px-1">
            <p>• <strong>ມູມຊ້າຍເທິງ (ດາວພູ - Shan Xing 山星):</strong> ຄວບຄຸມ <em>"ສຸຂະພາບ, ຄວາມສະຫງົບສຸກ, ຄວາມສາມັກຄີ, ບາຣະມີ ແລະ ຜູ້ສືບຕະກຸນ"</em> (Ding 丁). ຕ້ອງການຄວາມງຽບສະຫງົບ ແລະ ສິ່ງປົກປ້ອງທີ່ໜັກແໜ້ນ.</p>
            <p>• <strong>ມູມຂວາເທິງ (ດາວນ້ຳ - Xiang Xing 向星):</strong> ຄວບຄຸມ <em>"ໂຊກລາບ, ຊັບສິນເງິນທອງ, ກາລະໂອກາດທາງທຸລະກິດ ແລະ ການໄຫຼວຽນຂອງລາຍໄດ້"</em> (Cai 财). ຕ້ອງການການເຄື່ອນໄຫວ, ແສງສະຫວ່າງ ແລະ ພື້ນທີ່ໂລ່ງແຈ້ງ.</p>
            <p>• <strong>ກາງລຸ່ມ (ດາວຍຸກ - Yun Xing 运星):</strong> ເປັນພື້ນດິນພະລັງງານກຳເນີດປະຈຳຍຸກ 20 ປີ ເຊິ່ງເປັນຕົວສະໜັບສະໜູນ ຫຼື ຖ່າຍເທດາວພູ ແລະ ດາວນ້ຳ.</p>
          </div>
        </div>
      </section>

      <!-- Section 2: Complete 24 Mountain Polarity Rules -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ຫຼັກການກຳນົດຂົ້ວ ຢິນ-ຢາງ ຂອງ 24 ພູເຂົາ (The 24 Mountain Polarity Rules)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ຫົວໃຈຫຼັກທີ່ຕັດສິນວ່າດາວພູ ແລະ ດາວນ້ຳ ຈະ <strong>"ເຫີນເດີນໜ້າ" (Shun Fei 顺飞 / +)</strong> ຫຼື <strong>"ເຫີນຖອຍຫຼັງ" (Ni Fei 逆飞 / -)</strong> ແມ່ນຂຶ້ນກັບ <strong>ຂົ້ວ ຢິນ-ຢາງ (Yin/Yang Polarity)</strong> ຂອງສາຍມັງກອນທີ່ດາວໜ່ວຍນັ້ນສັງກັດຢູ່.
        </p>

        <div class="p-4 bg-amber-50 rounded-xl border border-amber-300 text-xs text-stone-800 space-y-2 leading-relaxed">
          <p class="font-bold text-amber-950 text-sm">ກົດເກນການແບ່ງ 3 ສາຍມັງກອນ (The Three Yuan Dragons):</p>
          <p>ໃນແຕ່ລະກົ້ວ (ແຕ່ລະທິດຫຼັກ 45 ອົງສາ) ຈະມີ 3 ພູເຂົາຍ່ອຍ (ແຕ່ລະພູເຂົາ 15 ອົງສາ):</p>
          <ul class="list-disc pl-5 space-y-1 text-stone-700">
            <li><strong>ພູເຂົາທີ 1 = ມັງກອນດິນ (Di Yuan Long 地元龙):</strong> ພູເຂົາທຳອິດຂອງແຕ່ລະທິດ (ເຊັ່ນ: Ren, Gen, Jia, Xun, Bing, Kun, Geng, Qian).</li>
            <li><strong>ພູເຂົາທີ 2 = ມັງກອນສະຫວັນ (Tian Yuan Long 天元龙):</strong> ພູເຂົາກາງຂອງແຕ່ລະທິດ (ເຊັ່ນ: Zi, Yin, Mao, Chen, Wu, Shen, You, Xu).</li>
            <li><strong>ພູເຂົາທີ 3 = ມັງກອນມະນຸດ (Ren Yuan Long 人元龙):</strong> ພູເຂົາສຸດທ້າຍຂອງແຕ່ລະທິດ (ເຊັ່ນ: Gui, Chou, Yi, Si, Ding, Wei, Xin, Hai).</li>
          </ul>
        </div>

        <div class="overflow-x-auto my-3">
          <table class="w-full text-left text-xs border border-stone-300 rounded-lg overflow-hidden shadow-sm">
            <thead class="bg-amber-900 text-white font-bold">
              <tr>
                <th class="p-2.5 border">ທິດຫຼັກ (ກົ້ວ)</th>
                <th class="p-2.5 border">ມັງກອນດິນ (Di Yuan) [ພູເຂົາ 1]</th>
                <th class="p-2.5 border">ມັງກອນສະຫວັນ (Tian Yuan) [ພູເຂົາ 2]</th>
                <th class="p-2.5 border">ມັງກອນມະນຸດ (Ren Yuan) [ພູເຂົາ 3]</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-200 bg-white">
              <tr class="hover:bg-amber-50">
                <td class="p-2 border font-bold text-stone-900">ທິດເໜືອ (Kan 坎 1)</td>
                <td class="p-2 border text-emerald-700 font-bold">壬 Ren (+) ຢາງ</td>
                <td class="p-2 border text-rose-700 font-bold">子 Zi (-) ຢິນ</td>
                <td class="p-2 border text-rose-700 font-bold">癸 Gui (-) ຢິນ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 border font-bold text-stone-900">ທິດໃຕ້ (Li 离 9)</td>
                <td class="p-2 border text-emerald-700 font-bold">丙 Bing (+) ຢາງ</td>
                <td class="p-2 border text-rose-700 font-bold">午 Wu (-) ຢິນ</td>
                <td class="p-2 border text-rose-700 font-bold">丁 Ding (-) ຢິນ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 border font-bold text-stone-900">ທິດຕາເວັນອອກ (Zhen 震 3)</td>
                <td class="p-2 border text-rose-700 font-bold">甲 Jia (-) ຢິນ</td>
                <td class="p-2 border text-emerald-700 font-bold">卯 Mao (+) ຢາງ</td>
                <td class="p-2 border text-emerald-700 font-bold">乙 Yi (+) ຢາງ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 border font-bold text-stone-900">ທິດຕາເວັນຕົກ (Dui 兑 7)</td>
                <td class="p-2 border text-rose-700 font-bold">庚 Geng (-) ຢິນ</td>
                <td class="p-2 border text-emerald-700 font-bold">酉 You (+) ຢາງ</td>
                <td class="p-2 border text-emerald-700 font-bold">辛 Xin (+) ຢາງ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 border font-bold text-stone-900">ທິດຕາເວັນອອກສ່ຽງເໜືອ (Gen 艮 8)</td>
                <td class="p-2 border text-rose-700 font-bold">丑 Chou (-) ຢິນ</td>
                <td class="p-2 border text-emerald-700 font-bold">艮 Gen (+) ຢາງ</td>
                <td class="p-2 border text-emerald-700 font-bold">寅 Yin (+) ຢາງ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 border font-bold text-stone-900">ທິດຕາເວັນອອກສ່ຽງໃຕ້ (Xun 巽 4)</td>
                <td class="p-2 border text-emerald-700 font-bold">辰 Chen (+) ຢາງ</td>
                <td class="p-2 border text-rose-700 font-bold">巽 Xun (-) ຢິນ</td>
                <td class="p-2 border text-rose-700 font-bold">巳 Si (-) ຢິນ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 border font-bold text-stone-900">ທິດຕາເວັນຕົກສ່ຽງໃຕ້ (Kun 坤 2)</td>
                <td class="p-2 border text-rose-700 font-bold">未 Wei (-) ຢິນ</td>
                <td class="p-2 border text-emerald-700 font-bold">坤 Kun (+) ຢາງ</td>
                <td class="p-2 border text-emerald-700 font-bold">申 Shen (+) ຢາງ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2 border font-bold text-stone-900">ທິດຕາເວັນຕົກສ່ຽງເໜືອ (Qian 乾 6)</td>
                <td class="p-2 border text-emerald-700 font-bold">戌 Xu (+) ຢາງ</td>
                <td class="p-2 border text-rose-700 font-bold">乾 Qian (-) ຢິນ</td>
                <td class="p-2 border text-rose-700 font-bold">亥 Hai (-) ຢິນ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-[11px] text-stone-600 italic">
          * ຂໍ້ສັງເກດຄຳພີ: ມັງກອນສະຫວັນ (Tian Yuan) ແລະ ມັງກອນມະນຸດ (Ren Yuan) ຈະມີຂົ້ວດຽວກັນສະເໝີ! ສ່ວນມັງກອນດິນ (Di Yuan) ຈະມີຂົ້ວກົງກັນຂ້າມກັບສອງມັງກອນນັ້ນ.
        </p>
      </section>

      <!-- Section 3: The 5-Step Star Chart Algorithm -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ຂັ້ນຕອນການຕັ້ງຜັງດາວ 5 ຂັ້ນຕອນມາດຕະຖານ (The 5-Step Master Algorithm)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ການສ້າງຜັງດາວເຫີນບໍ່ແມ່ນເລື່ອງຂອງການຄາດເດົາ ແຕ່ແມ່ນວິຊາຄະນິດສາດພະລັງງານທີ່ມີຂັ້ນຕອນແນ່ນອນ 100%:
        </p>

        <div class="space-y-3.5">
          <div class="p-4 bg-stone-50 rounded-xl border-l-4 border-amber-700 shadow-sm space-y-1.5">
            <h3 class="font-bold text-amber-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center text-xs font-black">1</span>
              ຂັ້ນຕອນທີ 1: ຕັ້ງຜັງດາວຍຸກ (Yun Pan 运盘)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              ເອົາເລກດາວປະຈຳຍຸກທີ່ສ້າງເຮືອນ (ເຊັ່ນ ຍຸກ 9 ຄືເລກ 9) ວາງລົງສູນກາງ (Zhong Gong). ແລ້ວໃຫ້ <strong>ເຫີນເດີນໜ້າ (Shun Fei) ຕາມເສັ້ນທາງລົ່ວຊູສະເໝີ</strong>: 9 ຢູ່ກາງ → 1 ໄປ Qian (NW) → 2 ໄປ Dui (W) → 3 ໄປ Gen (NE) → 4 ໄປ Li (S) → 5 ໄປ Kan (N) → 6 ໄປ Kun (SW) → 7 ໄປ Zhen (E) → 8 ໄປ Xun (SE).
            </p>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border-l-4 border-amber-700 shadow-sm space-y-1.5">
            <h3 class="font-bold text-amber-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center text-xs font-black">2</span>
              ຂັ້ນຕອນທີ 2: ວັດແທກຫາທິດພິງ (Sitting) ແລະ ທິດຫັນໜ້າ (Facing)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              ໃຊ້ເຂັມທິດຫຼົວຜານ (Luo Pan) ວັດແທກໃຫ້ໄດ້ອົງສາລະອຽດ ເພື່ອກຳນົດວ່າເຮືອນຕັ້ງຢູ່ໃນ <strong>ພູເຂົາໃດ</strong> ໃນ 24 ພູເຂົາ ແລະ ເປັນ <strong>ມັງກອນສາຍໃດ</strong> (ດິນ, ສະຫວັນ, ຫຼື ມະນຸດ).
            </p>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border-l-4 border-amber-700 shadow-sm space-y-1.5">
            <h3 class="font-bold text-amber-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center text-xs font-black">3</span>
              ຂັ້ນຕອນທີ 3: ດຶງດາວພູ ແລະ ດາວນ້ຳ ເຂົ້າສູ່ສູນກາງ
            </h3>
            <ul class="list-disc pl-5 text-xs text-stone-700 space-y-1 leading-relaxed">
              <li><strong>ດາວພູ (Mountain Star):</strong> ໄປເບິ່ງວັງທິດພິງ (Sitting Palace). ເບິ່ງວ່າດາວຍຸກໃນວັງນັ້ນແມ່ນເລກຫຍັງ ແລ້ວນຳເລກນັ້ນມາຂຽນໄວ້ທີ່ <em>ມູມຊ້າຍເທິງຂອງສູນກາງ</em>.</li>
              <li><strong>ດາວນ້ຳ (Water Star):</strong> ໄປເບິ່ງວັງທິດຫັນໜ້າ (Facing Palace). ເບິ່ງວ່າດາວຍຸກໃນວັງນັ້ນແມ່ນເລກຫຍັງ ແລ້ວນຳເລກນັ້ນມາຂຽນໄວ້ທີ່ <em>ມູມຂວາເທິງຂອງສູນກາງ</em>.</li>
            </ul>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border-l-4 border-amber-700 shadow-sm space-y-1.5">
            <h3 class="font-bold text-amber-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center text-xs font-black">4</span>
              ຂັ້ນຕອນທີ 4: ວິທີກຳນົດຂົ້ວ ຢິນ-ຢາງ (+/-) ຢ່າງຖືກຕ້ອງ 100%
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              ນີ້ແມ່ນຈຸດສຳຄັນທີ່ສຸດໃນວິຊາດາວເຫີນ! ຂັ້ນຕອນການສືບຫາຂົ້ວ:
            </p>
            <ol class="list-decimal pl-5 text-xs text-stone-700 space-y-1">
              <li>ເບິ່ງວ່າເຮືອນຂອງເຮົາຕັ້ງຢູ່ໃນ <strong>ມັງກອນສາຍໃດ</strong> (ດິນ=ພູເຂົາ 1, ສະຫວັນ=ພູເຂົາ 2, ມະນຸດ=ພູເຂົາ 3).</li>
              <li>ເບິ່ງເລກດາວພູ ຫຼື ດາວນ້ຳທີ່ເຮົານຳມາວາງໄວ້ສູນກາງ. ຖອດເລກນັ້ນກັບໄປຫາກົ້ວດັ້ງເດີມຂອງມັນ (ເຊັ່ນ ດາວ 1 ຄື Kan, ດາວ 2 ຄື Kun, ດາວ 3 ຄື Zhen, ດາວ 4 ຄື Xun, ດາວ 6 ຄື Qian, ດາວ 7 ຄື Dui, ດາວ 8 ຄື Gen, ດາວ 9 ຄື Li).</li>
              <li>ໄປເບິ່ງພູເຂົາໃນກົ້ວດັ້ງເດີມນັ້ນ <strong>ທີ່ຕົກຢູ່ໃນສາຍມັງກອນດຽວກັນກັບເຮືອນ</strong>!</li>
              <li>ກວດເບິ່ງວ່າພູເຂົານັ້ນມີຂົ້ວເປັນ <strong>ຢາງ (+)</strong> ຫຼື <strong>ຢິນ (-)</strong>: ຖ້າເປັນ ຢາງ (+) ໃຫ້ເຫີນເດີນໜ້າ; ຖ້າເປັນ ຢິນ (-) ໃຫ້ເຫີນຖອຍຫຼັງ!</li>
            </ol>
            <div class="mt-2 p-3 bg-rose-50 rounded-lg border border-rose-300 text-rose-950 text-xs">
              <strong>⚠️ ກົດເກນພິເສດເມື່ອພົບ "ດາວເລກ 5":</strong><br>
              ຍ້ອນເລກ 5 ສະຖິດຢູ່ສູນກາງຈຶ່ງບໍ່ມີກົ້ວ ແລະ ບໍ່ມີ 24 ພູເຂົາປະຈຳຕົວ. ດັ່ງນັ້ນ <em>ຖ້າດາວພູ ຫຼື ດາວນ້ຳເປັນເລກ 5</em>: <strong>ໃຫ້ຖືເອົາຂົ້ວ ຢິນ/ຢາງ ຂອງພູເຂົາທີ່ເຮືອນພິງ (ສຳລັບດາວພູ) ຫຼື ພູເຂົາທີ່ເຮືອນຫັນໜ້າ (ສຳລັບດາວນ້ຳ) ໂດຍກົງ!</strong>
            </div>
          </div>

          <div class="p-4 bg-emerald-50 rounded-xl border-l-4 border-emerald-600 shadow-sm space-y-1.5">
            <h3 class="font-bold text-emerald-950 text-sm flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-black">5</span>
              ຂັ້ນຕອນທີ 5: ການເຫີນດາວພູ ແລະ ດາວນ້ຳ ໃຫ້ຄົບທັງ 9 ວັງ
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              ເມື່ອຮູ້ຂົ້ວ (+/-) ແລ້ວ ໃຫ້ເຫີນດາວໄປຕາມລຳດັບເລກລົ່ວຊູ:
              <br>• <strong>ຖ້າເປັນ (+) ເຫີນເດີນໜ້າ (Shun Fei):</strong> ສູນກາງ → Qian (NW) → Dui (W) → Gen (NE) → Li (S) → Kan (N) → Kun (SW) → Zhen (E) → Xun (SE) ໂດຍຕົວເລກເພີ່ມຂຶ້ນ (1→2→3→4→5→6→7→8→9→1).
              <br>• <strong>ຖ້າເປັນ (-) ເຫີນຖອຍຫຼັງ (Ni Fei):</strong> ໄປຕາມເສັ້ນທາງດຽວກັນ ແຕ່ຕົວເລກຫຼຸດລົງ (9→8→7→6→5→4→3→2→1→9).
            </p>
          </div>
        </div>
      </section>

      <!-- Section 4: Three Detailed Worked Examples -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">4. ຕົວຢ່າງການຕັ້ງຜັງຕົວຈິງ 3 ຮູບແບບ (Three Master Case Examples)</h2>

        <!-- Case 1 -->
        <div class="p-4 bg-white rounded-xl border border-stone-300 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b pb-2">
            <span class="font-bold text-sm text-stone-900">ຕົວຢ່າງທີ 1: ເຮືອນຍຸກ 9 • ພິງ ຈື່ (Zi / N2) ຫັນໜ້າ ອູ່ (Wu / S2)</span>
            <span class="text-xs px-2.5 py-1 bg-amber-100 text-amber-900 font-bold rounded-full">ມັງກອນສະຫວັນ (Tian Yuan Long)</span>
          </div>
          <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
            <p><strong>1. ຕັ້ງຜັງດາວຍຸກ 9:</strong> 9 ຢູ່ກາງ → 1 ຢູ່ NW → 2 ຢູ່ W → 3 ຢູ່ NE → 4 ຢູ່ S → 5 ຢູ່ N → 6 ຢູ່ SW → 7 ຢູ່ E → 8 ຢູ່ SE.</p>
            <p><strong>2. ດຶງດາວພູ ແລະ ດາວນ້ຳ:</strong>
              <br>• ທິດພິງຄື ທິດເໜືອ (Kan): ດາວຍຸກໃນທິດເໜືອຄືເລກ <strong>5</strong>. ເອົາ 5 ມາວາງມູມຊ້າຍເທິງຂອງສູນກາງ.
              <br>• ທິດຫັນໜ້າຄື ທິດໃຕ້ (Li): ດາວຍຸກໃນທິດໃຕ້ຄືເລກ <strong>4</strong>. ເອົາ 4 ມາວາງມູມຂວາເທິງຂອງສູນກາງ.
            </p>
            <p><strong>3. ຫາຂົ້ວ ຢິນ/ຢາງ:</strong>
              <br>• ພູເຂົາ ຈື່ (Zi) ແລະ ອູ່ (Wu) ເປັນ <strong>ມັງກອນສະຫວັນ (ພູເຂົາທີ 2)</strong>.
              <br>• <strong>ດາວນ້ຳ (ເລກ 4):</strong> ເລກ 4 ຄືກົ້ວຊຸ່ນ (Xun). ມັງກອນສະຫວັນ (ພູເຂົາທີ 2) ຂອງກົ້ວຊຸ່ນຄື ພູເຂົາ <strong>ຊຸ່ນ (Xun)</strong> ເຊິ່ງເປັນ <strong>ຢິນ (Yin / -)</strong>! ດັ່ງນັ້ນ ດາວນ້ຳ 4 ຈຶ່ງຕ້ອງ <strong>ເຫີນຖອຍຫຼັງ (-)</strong>!
              <br>• <strong>ດາວພູ (ເລກ 5):</strong> ເລກ 5 ບໍ່ມີກົ້ວ. ໃຫ້ໃຊ້ຂົ້ວຂອງພູເຂົາທີ່ເຮົາພິງໂດຍກົງ ຄືພູເຂົາ <strong>ຈື່ (Zi)</strong> ເຊິ່ງເປັນ <strong>ຢິນ (Yin / -)</strong>! ດັ່ງນັ້ນ ດາວພູ 5 ຈຶ່ງຕ້ອງ <strong>ເຫີນຖອຍຫຼັງ (-)</strong>!
            </p>
            <p><strong>4. ຜົນການເຫີນດາວ:</strong>
              <br>• ດາວພູ 5 (-): 5 ຢູ່ກາງ → 4 ຢູ່ NW → 3 ຢູ່ W → 2 ຢູ່ NE → 1 ຢູ່ S → 9 ຢູ່ N → 8 ຢູ່ SW → 7 ຢູ່ E → 6 ຢູ່ SE. (ດາວພູ 9 ຕົກຢູ່ທິດເໜືອ/ຕຳແໜ່ງພິງ).
              <br>• ດາວນ້ຳ 4 (-): 4 ຢູ່ກາງ → 3 ຢູ່ NW → 2 ຢູ່ W → 1 ຢູ່ NE → 9 ຢູ່ S → 8 ຢູ່ N → 7 ຢູ່ SW → 6 ຢູ່ E → 5 ຢູ່ SE. (ດາວນ້ຳ 9 ຕົກຢູ່ທິດໃຕ້/ຕຳແໜ່ງຫັນໜ້າ).
            </p>
            <div class="p-2.5 bg-emerald-50 rounded text-emerald-950 font-bold border border-emerald-200">
              🌟 ສະຫຼຸບ: ເຮືອນຫຼັງນີ້ໄດ້ດາວພູ 9 ຢູ່ຫຼັງເຮືອນ (Sitting) ແລະ ດາວນ້ຳ 9 ຢູ່ໜ້າເຮືອນ (Facing) — ເປັນຜັງມະຫາເສດຖີທີ່ສົມບູນແບບ!
            </div>
          </div>
        </div>

        <!-- Case 2 -->
        <div class="p-4 bg-white rounded-xl border border-stone-300 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b pb-2">
            <span class="font-bold text-sm text-stone-900">ຕົວຢ່າງທີ 2: ເຮືອນຍຸກ 9 • ພິງ ເຢິນ (Ren / N1) ຫັນໜ້າ ປິງ (Bing / S1)</span>
            <span class="text-xs px-2.5 py-1 bg-blue-100 text-blue-900 font-bold rounded-full">ມັງກອນດິນ (Di Yuan Long)</span>
          </div>
          <div class="text-xs text-stone-700 space-y-2 leading-relaxed">
            <p><strong>1. ດາວຍຸກຄືເກົ່າ:</strong> ດາວພູມາຈາກ Kan (ເລກ 5), ດາວນ້ຳມາຈາກ Li (ເລກ 4).</p>
            <p><strong>2. ຫາຂົ້ວ ຢິນ/ຢາງ ຂອງມັງກອນດິນ (ພູເຂົາທີ 1):</strong>
              <br>• <strong>ດາວນ້ຳ (ເລກ 4):</strong> ເລກ 4 ຄືກົ້ວຊຸ່ນ. ມັງກອນດິນ (ພູເຂົາທີ 1) ຂອງກົ້ວຊຸ່ນຄື <strong>ເສິນ (Chen / 辰)</strong> ເຊິ່ງເປັນ <strong>ຢາງ (Yang / +)</strong>! ດັ່ງນັ້ນ ດາວນ້ຳ 4 ຈຶ່ງຕ້ອງ <strong>ເຫີນເດີນໜ້າ (+)</strong>!
              <br>• <strong>ດາວພູ (ເລກ 5):</strong> ໃຊ້ຂົ້ວຂອງພູເຂົາທີ່ເຮົາພິງໂດຍກົງ ຄືພູເຂົາ <strong>ເຢິນ (Ren / 壬)</strong> ເຊິ່ງເປັນ <strong>ຢາງ (Yang / +)</strong>! ດັ່ງນັ້ນ ດາວພູ 5 ຈຶ່ງຕ້ອງ <strong>ເຫີນເດີນໜ້າ (+)</strong>!
            </p>
            <div class="p-2.5 bg-blue-50 rounded text-blue-950 font-bold border border-blue-200">
              💡 ບົດຮຽນສຳຄັນ: ພຽງແຕ່ບ່ຽງອົງສາຈາກມັງກອນສະຫວັນ (Zi) ໄປຫາມັງກອນດິນ (Ren) ຂົ້ວຂອງດາວທັງໝົດຈະພິກຈາກ (-) ກາຍເປັນ (+) ທັນທີ! ນີ້ຄືເຫດຜົນທີ່ການວັດແທກອົງສາພາດແມ່ນແຕ່ 2-3 ອົງສາ ຈະເຮັດໃຫ້ຜັງດາວຜິດພາດທັງໝົດ!
            </div>
          </div>
        </div>
      </section>

      <!-- Section 5: Common Traps -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">5. ຂໍ້ຜິດພາດຮ້າຍແຮງທີ່ພົບເລື້ອຍໃນການຕັ້ງຜັງ (Fatal Novice Pitfalls)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300">
            <h3 class="font-bold text-rose-950 text-sm">1. ການຕັ້ງຜັງຂ້າມສາຍມັງກອນ (Chu Xian 出线)</h3>
            <p class="text-stone-700 mt-1 leading-relaxed">
              ການວັດອົງສາທີ່ຕົກຢູ່ເສັ້ນແບ່ງລະຫວ່າງ 2 ພູເຂົາ (ເຊັ່ນ ລະຫວ່າງ Ren ແລະ Zi). ຖ້າເກີນ 3 ອົງສາຈາກຈຸດກາງ ຈະເກີດສະພາວະ <em>"ດາວປ່ຽນແທນ" (Ti Gua 替卦)</em> ເຊິ່ງຕ້ອງໃຊ້ສູດຄິດໄລ່ພິເສດ ຫ້າມໃຊ້ຜັງດາວເດີມເດັດຂາດ.
            </p>
          </div>

          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300">
            <h3 class="font-bold text-rose-950 text-sm">2. ຄວາມສັບສົນເລື່ອງຂົ້ວດາວ 5 (The Number 5 Trap)</h3>
            <p class="text-stone-700 mt-1 leading-relaxed">
              ອາຈານຮວງຈຸ້ຍຈຳນວນຫຼາຍມັກລືມວ່າເລກ 5 ບໍ່ມີກົ້ວເດີມ ແລ້ວໄປເອົາຂົ້ວຂອງກົ້ວ Kun ຫຼື Gen ມາໃຊ້ແທນ. <strong>ກົດທີ່ຖືກຕ້ອງຄື:</strong> ໃຫ້ເອົາຂົ້ວຂອງພູເຂົາທີ່ເຮົາພິງ ຫຼື ຫັນໜ້າຕົວຈິງເທົ່ານັ້ນ!
            </p>
          </div>
        </div>
      </section>
    </div>
  `
};
