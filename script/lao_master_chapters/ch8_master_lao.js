/**
 * ch8_master_lao.js
 * ບົດທີ 8: ຫຼວນໂຖວ (Luan Tou): ພູມສັນຖານພູເຂົາ, ສາຍນ້ຳ, ຕອນດິນ, ຖະໜົນ ແລະ ສິ່ງແວດລ້ອມ
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch8",
  title: "ບົດທີ 8: ຫຼວນໂຖວ: ພູມສັນຖານພູເຂົາ, ສາຍນ້ຳ & ຕອນດິນ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 2: ພາກປະຕິບັດ ແລະ ການແກ້ໄຂ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 8: ຫຼວນໂຖວ (Luan Tou): ພູມສັນຖານພູເຂົາ, ສາຍນ້ຳ, ຕອນດິນ, ຖະໜົນ ແລະ ສິ່ງແວດລ້ອມ</h1>
        <p class="text-sm font-semibold text-amber-900/80">"ຫຼວນໂຖວຄືຮ່າງກາຍ, ຫຼີ່ຊີ່ຄືຈິດວິນຍານ" — ວິຊາເບິ່ງຮູບຮ່າງກາຍະພາບທີ່ກຳນົດຜົນສຳເລັດ 70% ຂອງຮວງຈຸ້ຍ</p>
      </div>

      <!-- Section 1 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ກົດເກນທອງຄຳ: "ຫຼວນໂຖວ ບໍ່ມີ, ຫຼີ່ຊີ່ ບໍ່ເກີດ" (Luan Tou vs Li Qi)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນວົງການຊິນແສຊັ້ນສູງມີຄຳສຸພາສິດອະມະຕະວ່າ: <strong>"ຫຼວນໂຖວ ເວ່ຍ ຖີ, ຫຼີ່ຊີ່ ເວ່ຍ ຢົງ" (峦头为体，理气为用)</strong> ໝາຍຄວາມວ່າ: <em>"ພູມສັນຖານກາຍະພາບຄືຮ່າງກາຍ, ສູດຄິດໄລ່ດາວເຫີນຄືຈິດວິນຍານ"</em>. 
        </p>
        <p class="doc-p text-justify leading-relaxed">
          ຕໍ່ໃຫ້ທ່ານຄຳນວນຜັງດາວເຫີນອອກມາໄດ້ດາວ 9 ທີ່ຮຸ່ງເຮືອງທີ່ສຸດຢູ່ໜ້າປະຕູ, ແຕ່ຖ້າໜ້າປະຕູມີ <strong>ເສົາໄຟຟ້າຂວາງ, ມີທາງສາມແພ່ງແທງໃສ່, ຫຼື ເປັນໜ້າຜາຊັນທີ່ລົມພັດແຮງ</strong>, ດາວ 9 ກໍບໍ່ສາມາດໃຫ້ຄຸນໄດ້ເລີຍ ຊ້ຳບໍ່ໜຳຍັງຈະປ່ຽນເປັນພະລັງຮ້າຍ! ດັ່ງນັ້ນ, ກ່ອນຈະເບິ່ງດາວເຫີນ ຕ້ອງກວດກາພູມສັນຖານ <strong>"ຫຼວນໂຖວ" (Luan Tou)</strong> ໃຫ້ຜ່ານກ່ອນສະເໝີ.
        </p>
      </section>

      <!-- Section 2 -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ພູມສັນຖານ 4 ສັດສັກສິດ (The Four Celestial Animals / Si Shou)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ຮູບແບບພູມສັນຖານທີ່ສົມບູນແບບທີ່ສຸດໃນທຳມະຊາດ ຄື <strong>"ພູມສັນຖານຕັ່ງນວມອາມແຊຣ໌" (The Armchair Formation)</strong> ປະກອບດ້ວຍ 4 ຕຳແໜ່ງສັກສິດ:
        </p>

        <!-- Figure Landscape Armchair -->
        <div class="my-3 bg-stone-900 p-2 rounded-xl text-center shadow-lg cursor-zoom-in" onclick="openZoomInspector('../img/lao/fig_landscape_armchair.jpg', 'ພູມສັນຖານ 4 ສັດສັກສິດ (Four Celestial Animals Armchair Formation)')">
          <img src="../img/lao/fig_landscape_armchair.jpg" alt="Four Celestial Animals" class="w-full h-48 sm:h-64 object-cover rounded-lg" loading="lazy">
          <div class="text-xs font-bold text-amber-300 mt-2">ພູມສັນຖານຫຼັກ: ເຕົ່າດຳ (ຫຼັງ) • ມັງກອນຂຽວ (ຊ້າຍ) • ເສືອຂາວ (ຂວາ) • ຫົງແດງ & ໝິງຖັງ (ໜ້າ)</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <div class="p-3 bg-stone-100 border border-stone-300 rounded-lg">
            <h3 class="font-bold text-stone-900 text-sm">🐢 1. ເຕົ່າດຳ (Xuan Wu / 玄武) — ພູເຂົາພິງຫຼັງ:</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ຕັ້ງຢູ່ດ້ານຫຼັງຂອງເຮືອນ. ຕ້ອງມີລັກສະນະ <strong>ສູງໃຫຍ່, ໜັກແໜ້ນ, ສະຫງົບ, ແລະ ປົກປ້ອງ</strong> (ເປັນພູເຂົາແທ້ ຫຼື ອາຄານສູງທີ່ໝັ້ນຄົງ). ໃຫ້ການສະໜັບສະໜູນ, ສຸຂະພາບແຂງແຮງ, ບາຣະມີ, ຄວາມອົບອຸ່ນໃນຄອບຄົວ, ແລະ ມີຜູ້ໃຫຍ່ຄອຍຊ່ວຍເຫຼືອ.
            </p>
          </div>
          <div class="p-3 bg-emerald-50 border border-emerald-300 rounded-lg">
            <h3 class="font-bold text-emerald-950 text-sm">🐉 2. ມັງກອນຂຽວ (Qing Long / 青龙) — ໂອບລ້ອມດ້ານຊ້າຍ:</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ຕັ້ງຢູ່ເບື້ອງຊ້າຍມືຂອງເຮືອນ (ເມື່ອຢືນໃນເຮືອນແນມອອກໄປໜ້າບ້ານ). ຕ້ອງມີລັກສະນະ <strong>ສູງກວ່າເບື້ອງຂວາເລັກນ້ອຍ, ທອດຍາວອ່ອນຊ້ອຍ, ມີຊີວິດຊີວາ</strong>. ເປັນຕົວແທນຂອງຜູ້ຊາຍ, ບາຣະມີ, ຍົດຖາບັນດາສັກ, ຄວາມສຳເລັດ, ແລະ ເງິນຄຳທີ່ຖືກຕ້ອງຕາມກົດໝາຍ.
            </p>
          </div>
          <div class="p-3 bg-amber-50 border border-amber-300 rounded-lg">
            <h3 class="font-bold text-amber-950 text-sm">🐅 3. ເສືອຂາວ (Bai Hu / 白虎) — ໂອບລ້ອມດ້ານຂວາ:</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ຕັ້ງຢູ່ເບື້ອງຂວາມືຂອງເຮືອນ. ຕ້ອງມີລັກສະນະ <strong>ຕ່ຳກວ່າມັງກອນຂຽວ, ສະຫງົບນິ້ງ, ບໍ່ກົດຂີ່</strong>. ຫາກເບື້ອງຂວາສູງໃຫຍ່ ຫຼື ເຄື່ອນໄຫວຮຸນແຮງກວ່າເບື້ອງຊ້າຍ (Bai Hu Qi Tou / ເສືອຂາວເງີຍຫົວ), ຈະເກີດການຜິດຖຽງ, ຜູ້ຍິງເປັນໃຫຍ່ຂົ່ມຜົວ, ເກີດອຸບັດຕິເຫດເລືອດຕົກຢາງອອກ, ແລະ ຖືກທໍລະຍົດ.
            </p>
          </div>
          <div class="p-3 bg-red-50 border border-red-300 rounded-lg">
            <h3 class="font-bold text-red-950 text-sm">🦚 4. ຫົງແດງ (Zhu Que / 朱雀) ແລະ ໝິງຖັງ (Ming Tang):</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ຕັ້ງຢູ່ດ້ານໜ້າຂອງເຮືອນ. ຕ້ອງເປັນ <strong>ລານໂລ່ງແຈ້ງສະອາດ (Ming Tang / 明堂)</strong> ສຳລັບສະສົມພະລັງງານຊີ່, ບໍ່ມີສິ່ງກີດຂວາງ. ໄກອອກໄປຄວນມີ <strong>ພູໂຕະ (An Shan) ຫຼື ພູຄຳນັບ (Chao Shan)</strong> ເຕ້ຍໆຢູ່ໄກໆ. ເປັນຕົວແທນຂອງວິໄສທັດ, ອະນາຄົດ, ໂອກາດທຸລະກິດ, ແລະ ລາບຍົດ.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 3: Living vs Dead Dragon & Mountain Shapes -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ພູມສັນຖານ 9 ຮູບຊົງພູເຂົາ (Jiu Xing Shan) ແລະ ມັງກອນມີຊີວິດ vs ມັງກອນຕາຍ</h2>
        <p class="doc-p text-justify leading-relaxed">
          ພູເຂົາແຕ່ລະໜ່ວຍມີທາດປະຈຳຕົວຕາມຮູບຊົງ. ການຕັ້ງເຮືອນພິງພູເຂົາທີ່ຖືກທາດ ຈະນຳຄວາມຈະເລີນຮຸ່ງເຮືອງມາສູ່ຕະກຸນ:
        </p>

        <!-- Figures: Mountain Peaks & Living/Dead Dragon -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
          <div class="bg-stone-900 p-2 rounded-xl text-center shadow-md cursor-zoom-in" onclick="openZoomInspector('../img/lao/fig_nine_mountain_peaks.jpg', 'ຮູບ 9 ຮູບຊົງພູເຂົາຕາມຫຼັກດາວ 9 ດວງ (Nine Mountain Peaks in Nature)')">
            <img src="../img/lao/fig_nine_mountain_peaks.jpg" alt="Nine Peaks" class="w-full h-44 object-cover rounded-lg" loading="lazy">
            <div class="text-[11px] font-bold text-amber-300 mt-1.5">9 ຮູບຊົງພູເຂົາໃນທຳມະຊາດ (峦头九星峰形)</div>
          </div>
          <div class="bg-stone-900 p-2 rounded-xl text-center shadow-md cursor-zoom-in" onclick="openZoomInspector('../img/lao/fig_living_vs_dead_dragon.jpg', 'ຮູບມັງກອນມີຊີວິດ (Sheng Long) vs ມັງກອນຕາຍ (Si Long)')">
            <img src="../img/lao/fig_living_vs_dead_dragon.jpg" alt="Living vs Dead Dragon" class="w-full h-44 object-cover rounded-lg" loading="lazy">
            <div class="text-[11px] font-bold text-amber-300 mt-1.5">ມັງກອນມີຊີວິດ (Sheng Long) vs ມັງກອນຕາຍ (Si Long)</div>
          </div>
        </div>

        <ul class="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-stone-800">
          <li><strong>ພູເຂົາທາດໄມ້ (Tan Lang):</strong> ຮູບຊົງສູງຊັນປາຍມົນຄືຕົ້ນໄມ້. ສົ່ງເສີມສະຕິປັນຍາ, ການສຶກສາ, ແລະ ຊື່ສຽງ.</li>
          <li><strong>ພູເຂົາທາດດິນ (Ju Men):</strong> ຮູບຊົງຫຼັງພູຮາບພຽງຄືໂຕະ (Table Mountain / Mesa). ສົ່ງເສີມຄວາມຮັ່ງມີ, ຊັບສິນອະສັງຫາລິມະຊັບ, ແລະ ຄວາມໝັ້ນຄົງ.</li>
          <li><strong>ພູເຂົາທາດນ້ຳ (Wen Qu):</strong> ຮູບຊົງຄື້ນລອນຕໍ່ເນື່ອງກັນ. ສົ່ງເສີມການຄ້າຂາຍ, ການເຈລະຈາ, ແລະ ສິລະປະ.</li>
          <li><strong>ພູເຂົາທາດໄຟ (Lian Zhen):</strong> ຮູບຊົງແຫຼມຄົມຄືແປວໄຟ. ເປັນພູເຂົາຮ້າຍ! ມັກນຳມາເຊິ່ງອັກຄີໄພ, ຜ່າຕັດ, ແລະ ເລືອດຕົກຢາງອອກ (ຍົກເວັ້ນຢູ່ໄກໆໃນຍຸກ 9).</li>
          <li><strong>ພູເຂົາທາດທອງ (Wu Qu):</strong> ຮູບຊົງກົມມົນຄືລະຄັງຂວ້ຳ (Bell Dome). ສົ່ງເສີມອຳນາດ, ບາຣະມີ, ລາຊະການ, ແລະ ມະຫາເສດຖີ.</li>
        </ul>

        <div class="doc-callout bg-emerald-50 border border-emerald-300 p-3.5 rounded-xl shadow-sm mt-3">
          <p class="font-bold text-emerald-950 text-sm">🌿 ຄວາມແຕກຕ່າງລະຫວ່າງ ມັງກອນມີຊີວິດ (Sheng Long) vs ມັງກອນຕາຍ (Si Long):</p>
          <p class="text-xs text-stone-700 leading-relaxed mt-1">
            <strong>ມັງກອນມີຊີວິດ:</strong> ພູເຂົາທີ່ຄົດລ້ຽວອ່ອນຊ້ອຍຄືງູເລືອ, ດິນອຸດົມສົມບູນມີ <strong>ດິນ 5 ສີ (Ng Se Tu)</strong>, ຕົ້ນໄມ້ຂຽວສົດງົດງາມ, ມີສາຍນ້ຳໃສໄຫຼອ້ອມຮອບ. ເປັນແຫຼ່ງກຳເນີດພະລັງມຸງຄຸນມະຫາສານ.
            <br><strong>ມັງກອນຕາຍ:</strong> ພູເຂົາແຂງທື່ຊື່ຕົງ, ຫີນແຕກຫັກຊັນ, ດິນແຫ້ງແລ້ງ, ຕົ້ນໄມ້ຕາຍແຫ້ງ, ລົມພັດກະໜ່ຳແຮງ. ເປັນແຫຼ່ງກຳເນີດຊາຊີ່ (ພະລັງພິສ) ທີ່ຫ້າມໄປຕັ້ງບ້ານເຮືອນ ຫຼື ສຸສານເດັດຂາດ!
          </p>
        </div>
      </section>

      <!-- Section 4: Water Formations -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">4. ພູມສັນຖານສາຍນ້ຳ ແລະ ຖະໜົນ: "ສາຍຮັດແອວຫຍົກ" vs "ຄັນທະນູປີ້ນກັບ"</h2>
        <div class="my-3 bg-stone-900 p-2 rounded-xl text-center shadow-md cursor-zoom-in" onclick="openZoomInspector('../img/lao/fig_jade_belt_vs_reverse_bow.jpg', 'ຮູບນ້ຳສາຍຮັດແອວຫຍົກ (Yu Dai Shui) vs ນ້ຳຄັນທະນູປີ້ນກັບ (Fan Gong Shui)')">
          <img src="../img/lao/fig_jade_belt_vs_reverse_bow.jpg" alt="Jade Belt vs Reverse Bow" class="w-full h-48 sm:h-56 object-cover rounded-lg" loading="lazy">
          <div class="text-[11px] font-bold text-amber-300 mt-1.5">ນ້ຳສາຍຮັດແອວຫຍົກ (Yu Dai Shui) vs ນ້ຳຄັນທະນູປີ້ນກັບ (Fan Gong Shui)</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          <div class="bg-emerald-50 border border-emerald-300 p-3.5 rounded-xl">
            <h3 class="font-bold text-emerald-950 text-sm">💎 ນ້ຳສາຍຮັດແອວຫຍົກ (Yu Dai Shui / 玉带水): ມະຫາໂຊກລາບ</h3>
            <p class="text-xs text-stone-700 mt-1 leading-relaxed">
              ແມ່ນ້ຳ ຫຼື ຖະໜົນທີ່ໂຄ້ງໂອບລ້ອມຕົວເຮືອນຄືກັບສາຍແອວຫຍົກໂອບອຸ້ມຮ່າງກາຍ. ເຮືອນທີ່ຢູ່ <strong>ດ້ານໃນຂອງສ່ວນໂຄ້ງ</strong> ຈະສະສົມພະລັງງານຊີ່ຢ່າງໜາແໜ້ນ, ທຸລະກິດຈະເລີນຮຸ່ງເຮືອງ, ເງິນຄຳບໍ່ຮົ່ວໄຫຼ, ຄອບຄົວຮັກແພງກັນ.
            </p>
          </div>
          <div class="bg-red-50 border border-red-300 p-3.5 rounded-xl">
            <h3 class="font-bold text-red-950 text-sm">🏹 ນ້ຳຄັນທະນູປີ້ນກັບ (Fan Gong Shui / 反弓水): ມະຫາໂທດ</h3>
            <p class="text-xs text-red-950 mt-1 leading-relaxed">
              ແມ່ນ້ຳ ຫຼື ຖະໜົນທີ່ໂຄ້ງເອົາສັນນອກແທງໃສ່ຕົວເຮືອນ ຄືກັບໃບມີດໂຄ້ງ ຫຼື ຄັນທະນູທີ່ພວມຍິງລູກສອນໃສ່. ເຮືອນທີ່ຢູ່ <strong>ດ້ານນອກຂອງສ່ວນໂຄ້ງ</strong> ຈະຖືກກະແສພະລັງງານຊີ່ຕັດຟັນ: ເງິນຄຳໝົດຕົວ, ລົ້ມລະລາຍ, ຖືກທໍລະຍົດ, ເກີດຄະດີຄວາມ, ແລະ ອຸບັດຕິເຫດຮ້າຍແຮງ!
            </p>
          </div>
        </div>
      </section>
    </div>
  `
};
