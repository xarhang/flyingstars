/**
 * ch11_master_lao.js
 * ບົດທີ 11: ການປະສົມດາວ 81 ຮູບແບບຄົບຖ້ວນ (The Complete 81 Flying Star Combinations)
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch11",
  title: "ບົດທີ 11: ການປະສົມດາວ 81 ຮູບແບບຄົບຖ້ວນ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 3: ການວິເຄາະ ແລະ ພະຍາກອນຂັ້ນສູງ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 11: ການປະສົມດາວ 81 ຮູບແບບຄົບຖ້ວນ (The Complete 81 Star Combinations)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ຄຳພີຖອດລະຫັດພະລັງງານ: ຄວາມໝາຍ, ໂລກໄພໄຂ້ເຈັບ, ໂຊກລາບ-ໜ້າທີ່ການງານ ແລະ ວິທີແກ້ໄຂຢ່າງລະອຽດ</p>
      </div>

      <!-- Section 1: Theory of Host & Guest -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຫຼັກການອ່ານດາວປະສົມ: ເຈົ້າບ້ານ ແລະ ແຂກ (Host & Guest Principle)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ການອ່ານຜັງດາວເຫີນບໍ່ແມ່ນການເບິ່ງດາວດ່ຽວໆ ແຕ່ແມ່ນການອ່ານ <strong>ການປະຕິກິລິຍາລະຫວ່າງດາວ 2 ດວງ (ຫຼື 3 ດວງ ຮ່ວມກັບດາວຍຸກ)</strong>. ໃນນັ້ນມີຫຼັກການສຳຄັນດັ່ງນີ້:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
          <div class="p-3 bg-amber-50 rounded-xl border border-amber-200">
            <h3 class="font-bold text-amber-900 text-xs uppercase tracking-wider">ດາວພູ (Mountain Star)</h3>
            <p class="text-xs text-stone-700 mt-1">
              <strong>ເຈົ້າພາບຝ່າຍຢິນ (Yin/Host):</strong> ຄວບຄຸມສຸຂະພາບ, ອາຍຸຍືນຍາວ, ບາຣະມີ, ຄວາມສຳພັນໃນຄອບຄົວ ແລະ ຄວາມສະຫງົບສຸກ.
            </p>
          </div>
          <div class="p-3 bg-amber-50 rounded-xl border border-amber-200">
            <h3 class="font-bold text-amber-900 text-xs uppercase tracking-wider">ດາວນ້ຳ (Water Star)</h3>
            <p class="text-xs text-stone-700 mt-1">
              <strong>ເຈົ້າພາບຝ່າຍຢາງ (Yang/Guest):</strong> ຄວບຄຸມຊັບສິນ, ເງິນທອງ, ທຸລະກິດ, ໂອກາດການງານ ແລະ ການໄຫຼວຽນຂອງໂຊກລາບ.
            </p>
          </div>
          <div class="p-3 bg-amber-50 rounded-xl border border-amber-200">
            <h3 class="font-bold text-amber-900 text-xs uppercase tracking-wider">ດາວຍຸກ & ດາວຈອນ (Period/Annual)</h3>
            <p class="text-xs text-stone-700 mt-1">
              <strong>ຕົວຊັກນຳ (Catalyst):</strong> ດາວຍຸກເປັນພື້ນດິນຮອງຮັບ ສ່ວນດາວຈອນປະຈຳປີເປັນຕົວຈຸດຊະນວນໃຫ້ເຫດການເກີດຂຶ້ນຈິງ.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 2: Star 1 Combinations -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ກຸ່ມດາວເລກ 1 (ນ້ຳຄຳຂາວ - 1 White Water)</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 1 (ນ້ຳທົບນ້ຳ):</strong> 
            <span>ສະຕິປັນຍາສູງ, ຮຽນເກັ່ງ, ເດີນທາງໄກ. ແຕ່ຖ້າເປັນດາວເສື່ອມຈະເກີດພະຍາດກ່ຽວກັບໝາກໄຂ່ຫຼັງ, ລະບົບຍ່ຽວ, ຫຼື ຈົມນ້ຳ. <em>ແກ້ໄຂ: ໃຊ້ທາດໄມ້ (ຕົ້ນໄມ້ຂຽວ) ເພື່ອດູດຊັບນ້ຳທີ່ລົ້ນເກີນ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 2 (ດິນພິຄາດນ້ຳ - Tu Ke Shui):</strong> 
            <span>ດິນດຳເລກ 2 ທຳລາຍນ້ຳເລກ 1. ແມ່ຍິງຄວບຄຸມຜູ້ຊາຍ, ພະຍາດລະບົບສືບພັນ, ພະຍາດທ້ອງມານ, ໝາກໄຂ່ຫຼັງຊຸດໂຊມ. <em>ແກ້ໄຂ: ໃຊ້ນ້ຳເຕົ້າທອງເຫຼືອງ ຫຼື ຫຼຽນທອງ 6 ຫຼຽນ (ທາດຄຳ) ເພື່ອຖ່າຍເທດິນ ແລະ ສົ່ງເສີມນ້ຳ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 3 (ນ້ຳເກີດໄມ້):</strong> 
            <span>ສະຫຼາດຫຼັກແຫຼມ, ໂດດເດັ່ນໃນການສື່ສານ. ແຕ່ຖ້າເສື່ອມ ຈະຖືກຫຼອກລວງ, ເສຍຊັບເພາະຄົນອື່ນ, ຫຼື ມີຄະດີຄວາມເລື່ອງເອກະສານ. <em>ແກ້ໄຂ: ໃຊ້ທາດໄຟ (ໂຄມໄຟສີແດງ) ເລັກນ້ອຍເພື່ອລະບາຍໄມ້ທີ່ແຂງເກີນໄປ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 4 (ດາວບັນດິດ & ສະເໜ່ - Si Lu Tong Gong):</strong> 
            <span><strong>"ໜຶ່ງສີ່ຮ່ວມວັງ":</strong> ຄູ່ດາວມະຫາມຸງຄຸນດ້ານການສຶກສາ, ການສອບເສັງຕິດອັນດັບ 1, ຊື່ສຽງໂດ່ງດັງ, ແລະ ສະເໜ່ຄວາມຮັກ. ຖ້າເສື່ອມ: ຫຼົງໄຫຼກາມມະຮົມ, ຊູ້ສາວ. <em>ກະຕຸ້ນ: ວາງຕົ້ນໄຜ່ກວນອິມ 4 ຕົ້ນແຊ່ນ້ຳສະອາດ ຫຼື ປາກກາຂຽນ 4 ດວມ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 5 (ດິນເຫຼືອງພິຄາດນ້ຳ):</strong> 
            <span>ອັນຕະລາຍຮ້າຍແຮງ! ພະຍາດທາງເພດສຳພັນ, ໝາກໄຂ່ຫຼັງວາຍ, ມະເຮັງມົດລູກ, ອຸບັດຕິເຫດທາງນ້ຳ, ເງິນທອງສູນຫາຍ. <em>ແກ້ໄຂດ່ວນ: ວາງກະດິ່ງລົມໂລຫະ 6 ທໍ່ ແລະ ໂຖເກືອຮວງຈຸ້ຍ (Salt Water Cure).</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 6 (ຄຳເກີດນ້ຳ - He Tu 1-6 Shui):</strong> 
            <span>ຄູ່ດາວໂຊກລາບ ແລະ ອຳນາດ! ໄດ້ຮັບການສະໜັບສະໜູນຈາກຜູ້ໃຫຍ່, ລາຊະການກ້າວໜ້າ, ສະຕິປັນຍາເລິກເຊິ່ງ, ການເງິນໝັ້ນຄົງ.</span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 7 (ຄຳເກີດນ້ຳ / ດາວໂຈນ):</strong> 
            <span>ວາດເວົ້າດີ, ຫາເງິນເກັ່ງຈາກຄຳເວົ້າ. ແຕ່ຖ້າເສື່ອມ: ຖືກໂຈນປົ້ນ, ຖືກຫຼອກ, ເລືອດຕົກຢາງອອກ, ພະຍາດປອດ. <em>ແກ້ໄຂ: ວາງອ່າງນ້ຳນິ້ງ (Quiet Water) ໃສ່ໂຖແກ້ວເພື່ອດູດພະລັງຮ້າຍຂອງດາວ 7.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 8 (ດິນພິຄາດນ້ຳ):</strong> 
            <span>ເດັກນ້ອຍເຈັບປ່ວຍ, ຫູອັກເສບ, ໝາກໄຂ່ຫຼັງ, ກະດູກຫັກ. ການເງິນຕິດຂັດຊົ່ວຄາວ. <em>ແກ້ໄຂ: ໃຊ້ທາດຄຳ (ວັດຖຸໂລຫະມົນກົມ) ເພື່ອເຊື່ອມພະລັງດິນ-ຄຳ-ນ້ຳ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">1 - 9 (ນ້ຳປະທະໄຟ - Shui Huo Ji Ji):</strong> 
            <span>ຖ້າສົມດຸນ: ທຸລະກິດຮຸ່ງເຮືອງວ່ອງໄວ, ມີຊື່ສຽງ. ຖ້າບໍ່ສົມດຸນ: ພະຍາດຕາ, ພະຍາດຫົວໃຈ, ຄວາມດັນສູງ, ຜິດຖຽງກັນເລື້ອຍໆ. <em>ແກ້ໄຂ: ວາງຕົ້ນໄມ້ຂຽວ (ທາດໄມ້) ເພື່ອເຊື່ອມນ້ຳໄປເກີດໄຟ.</em></span>
          </div>
        </div>
      </section>

      <!-- Section 3: Star 2 Combinations -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ກຸ່ມດາວເລກ 2 (ດິນດຳພະຍາດ - 2 Black Earth)</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">2 - 2 (ດິນດຳຄູ່):</strong> 
            <span>ໂລກໄພຊ້ຳເຮື້ອ, ມະເຮັງ, ພະຍາດລະບົບຍ່ອຍອາຫານ, ແມ່ເຖົ້າເຈັບປ່ວຍ, ຄວາມຄິດອືດອາດ. <em>ແກ້ໄຂ: ວາງນ້ຳເຕົ້າທອງເຫຼືອງແທ້ ແລະ ຫຼຽນ 6 ຫຼຽນ. ຫ້າມຈຸດທຽນ ຫຼື ວາງສີແດງເດັດຂາດ!</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-rose-900 font-bold">2 - 3 (ດາວກັດກັນ / ງົວຊົນກັນ - Dou Niu Sha 斗牛煞):</strong> 
            <span>ໄມ້ເລກ 3 ພິຄາດ ດິນເລກ 2: ການຂັດແຍ້ງຮຸນແຮງ, ຂຶ້ນໂຮງຂຶ້ນສານ, ຜົວເມຍແຕກແຍກ, ແມ່ຍິງຖືກທຳຮ້າຍ, ພະຍາດກະເພາະ. <em>ແກ້ໄຂ: ໃຊ້ທາດໄຟ (ພົມແດງ, ໂຄມໄຟແດງ) ເພື່ອຖ່າຍເທໄມ້ເລກ 3 ໄປເກີດດິນເລກ 2.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">2 - 4 (ແມ່ເຖົ້າກັບລູກໃພ້ຂັດກັນ):</strong> 
            <span>ບັນຫາແມ່ຜົວລູກໃພ້, ມົດລູກມີບັນຫາ, ຫຼຸລູກ, ອົກຫັກ, ມັກຫຼົງເຊື່ອຄົນງ່າຍ. <em>ແກ້ໄຂ: ໃຊ້ໂຄມໄຟສີແດງດັບພະລັງໄມ້ເລກ 4.</em></span>
          </div>
          <div class="p-3 bg-rose-50 rounded-lg border border-rose-300 hover:border-rose-500">
            <strong class="text-rose-950 font-black">2 - 5 (ສອງດາວມະຫາໂລກາ - Er Wu Jiao Jia 二五交加):</strong> 
            <span><strong>ຄູ່ດາວອັນຕະລາຍທີ່ສຸດໃນຮວງຈຸ້ຍ!</strong> ນຳເອົາຄວາມຕາຍ, ມະເຮັງ, ອຸບັດຕິເຫດຮ້າຍແຮງ, ລົ້ມລະລາຍ, ສູນເສຍສະມາຊິກໃນຄອບຄົວ. <em>ແກ້ໄຂຢ່າງເຂັ້ມງວດ: ແຂວນກະດິ່ງລົມ 6 ທໍ່, ວາງໂຖເກືອຮວງຈຸ້ຍ, ຫ້າມເຄາະ, ຫ້າມເຈາະ, ຫ້າມມີສຽງດັງ ຫຼື ສີແດງໃນບໍລິເວນນີ້!</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">2 - 6 (ດິນເກີດຄຳ):</strong> 
            <span>ແມ່ຍິງສ້າງຖານະ, ອະສັງຫາລິມະຊັບຮຸ່ງເຮືອງ, ໄດ້ຮັບມໍລະດົກ. ແຕ່ອາດມີອາການເຈັບຫົວ ຫຼື ພະຍາດກະດູກ.</span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">2 - 7 (ຮ່ວມທາດໄຟ - He Tu 2-7 Fire):</strong> 
            <span>ຮ່ວມກັນເກີດທາດໄຟ: ລະວັງອັກຄີໄພ (ໄຟໄໝ້), ໂລກຜິວໜັງ, ຝີໜອງ, ຄວາມຮັກຜິດສິນລະທຳ. <em>ແກ້ໄຂ: ໃຊ້ນ້ຳສະອາດ (ທາດນ້ຳ) ເພື່ອຄວບຄຸມໄຟ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">2 - 8 (ດິນຮ່ວມດິນ):</strong> 
            <span>ຊັບສິນທີ່ດິນເພີ່ມພູນ, ຮັ່ງມີອະສັງຫາຯ. ແຕ່ຕ້ອງລະວັງສຸຂະພາບລະບົບຍ່ອຍອາຫານຂອງເດັກນ້ອຍ.</span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-400">
            <strong class="text-amber-900">2 - 9 (ໄຟເກີດດິນພະຍາດ):</strong> 
            <span>ໄຟເລກ 9 ໄປກະຕຸ້ນດິນພະຍາດເລກ 2: ຕາບອດ, ພະຍາດເລືອດ, ມະເຮັງກຳເລີບ, ເກີດລູກຍາກ. <em>ແກ້ໄຂ: ໃຊ້ນ້ຳເຕົ້າທອງເຫຼືອງຂະໜາດໃຫຍ່ດູດພະລັງ.</em></span>
          </div>
        </div>
      </section>

      <!-- Section 4: Star 3 Combinations -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">4. ກຸ່ມດາວເລກ 3 (ໄມ້ມໍລະກົດຜິດຖຽງ - 3 Jade Wood)</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-amber-900">3 - 3 (ໄມ້ທົບໄມ້):</strong> 
            <span>ຜິດຖຽງກັນບໍ່ຢຸດຢ່ອນ, ຄະດີຄວາມ, ໂຈນຂຶ້ນບ້ານ, ປະສາດຫຼອນ, ເຈັບຕີນ/ຂາ. <em>ແກ້ໄຂ: ໃຊ້ໂຄມໄຟສີແດງຈຸດແຈ້ງ (ທາດໄຟລະບາຍໄມ້).</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-amber-900">3 - 7 (ດາບຕັດໄມ້ / ໂຈນປົ້ນ - Jiao Sha 劫煞):</strong> 
            <span>ຄຳເລກ 7 ຟັນໄມ້ເລກ 3: ການຜ່າຕັດ, ອຸບັດຕິເຫດລົດຊົນ, ຖືກປົ້ນ, ຖືກຫັກຫຼັງທາງທຸລະກິດ. <em>ແກ້ໄຂ: ວາງໂຖນ້ຳນິ້ງ (Quiet Water) ເພື່ອເຊື່ອມຄຳ-ນ້ຳ-ໄມ້.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-amber-900">3 - 8 (ຮ່ວມທາດໄມ້ - He Tu 3-8 Wood):</strong> 
            <span>ຮັ່ງມີຈາກການສຶກສາ, ງານສິລະປະ, ເດັກນ້ອຍສະຫຼາດ. ແຕ່ຖ້າເສື່ອມອາດເກີດບັນຫາກະດູກ ແລະ ເສັ້ນເອັນ.</span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-amber-900">3 - 9 (ໄມ້ເກີດໄຟ):</strong> 
            <span>ສະຕິປັນຍາສ່ອງແຈ້ງ, ຊື່ສຽງໂດ່ງດັງ, ທຸລະກິດເຕັກໂນໂລຊີຮຸ່ງເຮືອງ, ຄົນໃນບ້ານມີພະລັງຊີວິດສູງ.</span>
          </div>
        </div>
      </section>

      <!-- Section 5: Star 4 & 5 Combinations -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">5. ກຸ່ມດາວເລກ 4 & 5 (ດາວບັນດິດ ແລະ ດາວຫ້າເຫຼືອງ)</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-amber-900">4 - 5 (ໄມ້ພິຄາດດິນຫ້າເຫຼືອງ):</strong> 
            <span>ເກີດໂລກຜິວໜັງຮ້າຍແຮງ, ມະເຮັງເຕົ້ານົມ, ທ້ອງລ່ວງຊ້ຳເຮື້ອ, ການພະນັນພາຈິບຫາຍ. <em>ແກ້ໄຂ: ໃຊ້ກະດິ່ງລົມໂລຫະ ແລະ ໂຖເກືອຮວງຈຸ້ຍ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-amber-900">4 - 8 (ໄມ້ພິຄາດດິນນ້ອຍ):</strong> 
            <span>ເດັກນ້ອຍໃນບ້ານເຈັບປ່ວຍ, ດື້ດຶງ, ຮຽນໜັງສືບໍ່ເກັ່ງ, ບັນຫາຂໍ້ຕໍ່ກະດູກ. <em>ແກ້ໄຂ: ໃຊ້ສີແດງ ຫຼື ໂຄມໄຟແດງ (ທາດໄຟ) ເພື່ອລະບາຍໄມ້ໄປລ້ຽງດິນ.</em></span>
          </div>
          <div class="p-3 bg-rose-50 rounded-lg border border-rose-300">
            <strong class="text-rose-950 font-black">5 - 5 (ດາວຫ້າເຫຼືອງຄູ່ - Shuang Wu Huang):</strong> 
            <span>ມະຫາໄພພິບັດສອງເທົ່າ! ອັນຕະລາຍເຖິງຊີວິດ, ລົ້ມລະລາຍຢ່າງສິ້ນເຊີງ. <em>ແກ້ໄຂ: ຍ້າຍຫ້ອງນອນ ຫຼື ໂຕະເຮັດວຽກອອກທັນທີ, ວາງໂລຫະໜັກຫຼາຍໆຊະນິດ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-amber-900">5 - 9 (ໄຟເກີດຫ້າເຫຼືອງ):</strong> 
            <span>ໄຟເລກ 9 ໄປຈູດເຜົາ ແລະ ເພີ່ມພະລັງໃຫ້ດາວຫ້າເຫຼືອງເລກ 5: ໂລກຫົວໃຈກຳເລີບ, ຕາອັກເສບ, ອຸບັດຕິເຫດໄຟໄໝ້, ເລືອດຕົກຢາງອອກ. <em>ແກ້ໄຂ: ວາງໂລຫະໜັກສີທອງ ຫຼື ໂຖເກືອຮວງຈຸ້ຍ.</em></span>
          </div>
        </div>
      </section>

      <!-- Section 6: Star 6 & 7 Combinations -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">6. ກຸ່ມດາວເລກ 6 & 7 (ທາດຄຳໃຫຍ່ ແລະ ທາດຄຳນ້ອຍ)</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-amber-900">6 - 6 (ຄຳທົບຄຳ):</strong> 
            <span>ອຳນາດວາດສະໜາສູງ, ລາຊະການດີເດັ່ນ. ແຕ່ອາດເຂັ້ມງວດເກີນໄປຈົນຄົນໃນບ້ານອຶດອັດ, ປວດຫົວຂ້າງດຽວ.</span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-rose-900 font-bold">6 - 7 (ດາບປະທະກັນ - Jiao Jian Sha 交剑煞):</strong> 
            <span>ຄຳແຂງ 6 ປະທະ ຄຳອ່ອນ 7: ການຜ່າຕັດ, ເລືອດຕົກຢາງອອກ, ອຸບັດຕິເຫດລົດຊົນ, ຄູ່ແຂ່ງຂັນທາງທຸລະກິດຫັກຫຼັງ. <em>ແກ້ໄຂ: ວາງໂຖນ້ຳນິ້ງ (Quiet Water) ເພື່ອຖ່າຍເທພະລັງຄຳທີ່ເກີນ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-rose-900 font-bold">6 - 9 (ໄຟເຜົາປະຕູສະຫວັນ - Huo Shao Tian Men 火烧天门):</strong> 
            <span>ໄຟເລກ 9 ເຜົາຜານຄຳເລກ 6 (Qian ພໍ່/ຫົວໜ້າຄອບຄົວ): ພໍ່ເຈັບປ່ວຍໜັກ, ເສັ້ນເລືອດໃນສະໝອງແຕກ, ໄອເປັນເລືອດ, ລູກຊາຍຕໍ່ຕ້ານພໍ່. <em>ແກ້ໄຂ: ວາງຫີນສີເຫຼືອງ ຫຼື ເຄື່ອງປັ້ນດິນເຜົາ (ທາດດິນ) ເພື່ອເຊື່ອມໄຟໄປເກີດດິນ ແລ້ວດິນໄປເກີດຄຳ.</em></span>
          </div>
          <div class="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <strong class="text-rose-900 font-bold">7 - 9 (ໄຟຫຼອມຄຳ / ອັກຄີໄພ):</strong> 
            <span>ໄຟເຜົາຄຳ 7: ລະວັງໄຟໄໝ້ເຮືອນ, ຖືກລອບວາງເພີງ, ໂລກປອດ, ໂລກຜິວໜັງ, ການຜິດຖຽງກັນເລື່ອງຊູ້ສາວ. <em>ແກ້ໄຂ: ວາງອ່າງນ້ຳນິ້ງ ຫຼື ທາດດິນ.</em></span>
          </div>
        </div>
      </section>

      <!-- Section 7: Star 8 & 9 Combinations -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">7. ກຸ່ມດາວເລກ 8 & 9 (ດາວມະຫາມຸງຄຸນຍຸກປະຈຸບັນ)</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 bg-emerald-50 rounded-lg border border-emerald-300">
            <strong class="text-emerald-950 font-bold">8 - 9 (ໄຟເກີດດິນ - ມະຫາໂຊກລາບສອງຍຸກ):</strong> 
            <span><strong>ສຸດຍອດຄູ່ດາວໂຊກລາບ!</strong> ດາວ 9 (ຍຸກປະຈຸບັນ) ສົ່ງເສີມ ດາວ 8 (ອະສັງຫາລິມະຊັບ): ຮັ່ງມີໄວ, ມີງານມຸງຄຸນ, ແຕ່ງງານ, ມີລູກ, ຊື່ສຽງໂດ່ງດັງ, ການຄ້າຂາຍກ້າວໜ້າຢ່າງກ້າວກະໂດດ!</span>
          </div>
          <div class="p-3 bg-amber-50 rounded-lg border border-amber-300">
            <strong class="text-amber-950 font-bold">9 - 9 (ໄຟທົບໄຟ - ດາວກະສັດຍຸກ 9):</strong> 
            <span><strong>ພະລັງງານສູງສຸດຂອງຍຸກປະຈຸບັນ (2024–2043)!</strong> ດຶງດູດຄວາມຈະເລີນຮຸ່ງເຮືອງທັນຕາເຫັນ, ຄວາມສຳເລັດລະດັບໂລກ, ເຕັກໂນໂລຊີ, AI, ພະລັງງານ. ແຕ່ຕ້ອງລະວັງ: ຖ້າພະລັງງານຮ້ອນເກີນໄປ ອາດເຮັດໃຫ້ຄົນໃນເຮືອນໃຈຮ້ອນ, ຄວາມດັນເລືອດຂຶ້ນ. <em>ປັບສົມດຸນ: ວາງເຄື່ອງປັ້ນດິນເຜົາ ຫຼື ຫີນຄຣິສຕັລທຳມະຊາດ (Earth element) ເພື່ອຮອງຮັບໄຟ.</em></span>
          </div>
        </div>
      </section>
    </div>
  `
};
