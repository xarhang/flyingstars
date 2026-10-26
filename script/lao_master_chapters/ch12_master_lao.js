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
        <p class="text-sm font-semibold text-amber-900/80">ສູດຄິດໄລ່ດາວປີ, ດາວເດືອນ, ດາວວັນ, ໄທ່ສຸ້ຍ (Tai Sui), ຊານຊາ (San Sha) ແລະ ກົນໄກການຈຸດຊະນວນເຫດການ (Ying Qi)</p>
      </div>

      <!-- Section 1: Intro -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຫຼັກການເຮັດວຽກຂອງດາວຈອນ (The Visiting Stars Mechanism)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນວິຊາດາວເຫີນ, ຜັງດາວເດີມຂອງເຮືອນ (Natal Chart) ປຽບເໝືອນ <strong>"ໂຄງສ້າງ DNA ຂອງຊີວິດ"</strong> ທີ່ຄົງທີ່ຕະຫຼອດ 20 ປີ, ແຕ່ <strong>ດາວຈອນ (Visiting Stars / Liu Nian & Liu Yue)</strong> ປຽບເໝືອນ <strong>"ດິນຟ້າອາກາດ ແລະ ລະດູການ"</strong> ທີ່ປ່ຽນແປງຕະຫຼອດເວລາ:
        </p>
        <div class="p-4 bg-amber-50 rounded-xl border border-amber-300 text-xs text-stone-800 leading-relaxed space-y-2">
          <p class="font-bold text-amber-950 text-sm">ກົດຄຳພີ: "ຜັງເດີມກຳນົດໂຄງສ້າງ, ດາວຈອນກຳນົດເວລາເກີດເຫດ" (Ji Xiong You Yuan Pan, Ying Qi You Liu Nian)</p>
          <p>
            ຫ້ອງໃດໜຶ່ງທີ່ມີດາວຮ້າຍ 5-2 ຫຼື 2-5 ຢູ່ແລ້ວ ອາດຈະຍັງບໍ່ເກີດເລື່ອງຮ້າຍຕະຫຼອດເວລາ ຈົນກວ່າຈະຮອດປີ ຫຼື ເດືອນ ທີ່ມີ <strong>ດາວຈອນເລກ 5 ຫຼື ເລກ 2</strong> ບິນເຂົ້າມາທັບຊ້ອນ ຫຼື ມີການເຄື່ອນໄຫວສັ່ນສະເທືອນ (ຂຸດດິນ, ເຈາະຝາ, ສ້ອມແປງ) ໃນທິດນັ້ນ ເຫດການຮ້າຍແຮງຈຶ່ງຈະລະເບີດຂຶ້ນທັນທີ!
          </p>
        </div>
      </section>

      <!-- Section 2: Complete Calculation Formulas -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ສູດຄິດໄລ່ດາວຈອນປະຈຳປີ ແລະ ປະຈຳເດືອນ (Annual & Monthly Formulas)</h2>
        
        <!-- Annual Formula -->
        <div class="p-4 bg-stone-900 text-stone-100 rounded-xl font-mono text-xs space-y-2.5">
          <div class="text-amber-400 font-bold text-sm">A. ສູດຄິດໄລ່ດາວຈອນປະຈຳປີ (Annual Flying Star Formula):</div>
          <p class="text-stone-300 font-sans text-justify">
            ປີທາງຮວງຈຸ້ຍ (Solar Calendar) ຈະເລີ່ມຕົ້ນໃນມື້ <strong>ຫຼີຊຸນ (Li Chun 立春 - ປະມານວັນທີ 4 ກຸມພາ)</strong> ຂອງທຸກປີ (ບໍ່ແມ່ນມື້ 1 ມັງກອນ ແລະ ບໍ່ແມ່ນມື້ກຸດຈີນ). ສູດຄິດໄລ່ສຳລັບສັດຕະວັດທີ 21 (ປີ 2000 – 2099):
          </p>
          <div class="bg-stone-800 p-3 rounded-lg border border-stone-700 text-amber-300 font-bold text-center text-sm">
            ເລກດາວສູນກາງ = 9 - [ຜົນບວກເລກ 2 ຫຼັກສຸດທ້າຍຂອງປີ ຄິດໄລ່ໃຫ້ເຫຼືອຫຼັກດຽວ]
          </div>
          <div class="text-stone-300 text-[11px] space-y-1 font-sans">
            <p>• <strong>ປີ 2024 (ມັງກອນ):</strong> 2 + 4 = 6. ດັ່ງນັ້ນ: 9 - 6 = <strong>3</strong> (ດາວ 3 ລົງກາງວັງ).</p>
            <p>• <strong>ປີ 2025 (ງູ):</strong> 2 + 5 = 7. ດັ່ງນັ້ນ: 9 - 7 = <strong>2</strong> (ດາວ 2 ລົງກາງວັງ).</p>
            <p>• <strong>ປີ 2026 (ມ້າ):</strong> 2 + 6 = 8. ດັ່ງນັ້ນ: 9 - 8 = <strong>1</strong> (ດາວ 1 ລົງກາງວັງ).</p>
            <p>• <strong>ປີ 2027 (ແບ້):</strong> 2 + 7 = 9. ດັ່ງນັ້ນ: 9 - 9 = 0 (ແທນດ້ວຍ <strong>9</strong> - ດາວ 9 ລົງກາງວັງ).</p>
          </div>
          <div class="text-[10px] text-emerald-400 font-sans">
            * ດາວຈອນປະຈຳປີຈະ <strong>ເຫີນເດີນໜ້າສະເໝີ (Shun Fei)</strong> ຕາມເສັ້ນທາງລົ່ວຊູ.
          </div>
        </div>

        <!-- Monthly Formula -->
        <div class="p-4 bg-stone-50 rounded-xl border border-stone-300 text-xs text-stone-800 space-y-2">
          <h3 class="font-bold text-amber-950 text-sm">B. ສູດຄິດໄລ່ດາວຈອນປະຈຳເດືອນ (Monthly Flying Star Formula):</h3>
          <p class="text-justify leading-relaxed">
            ດາວປະຈຳເດືອນຈະຂຶ້ນກັບ <strong>ນັກສັດປະຈຳປີ (Earthly Branch)</strong> ໂດຍເດືອນທີ 1 ຂອງປີ (ເດືອນ Yin / ຂານ) ຈະເລີ່ມຕົ້ນດ້ວຍດາວແຕກຕ່າງກັນ 3 ກຸ່ມ:
          </p>
          <ul class="list-disc pl-5 space-y-1.5 text-stone-700">
            <li><strong>ປີ ຈື່ (Zi ຫນູ), ມາວ (Mao ກະຕ່າຍ), ອູ່ (Wu ມ້າ), ຢິ້ວ (You ໄກ່):</strong> ເດືອນ 1 (ຂານ) ຈະເລີ່ມຕົ້ນດ້ວຍ <strong>ດາວ 8</strong> ຢູ່ສູນກາງ. ແລ້ວເດືອນຕໍ່ໆ ໄປຈະຖອຍຫຼັງ (8→7→6→5...).</li>
            <li><strong>ປີ ເສິນ (Chen ມັງກອນ), ຊວີ (Xu ໝາ), ໂຈ່ວ (Chou ງົວ), ເວີ່ຍ (Wei ແບ້):</strong> ເດືອນ 1 (ຂານ) ຈະເລີ່ມຕົ້ນດ້ວຍ <strong>ດາວ 5</strong> ຢູ່ສູນກາງ.</li>
            <li><strong>ປີ ອິ່ນ (Yin ເສືອ), ຊື່ (Si ງູ), ເຊີນ (Shen ລີງ), ຮ່າຍ (Hai ໝູ):</strong> ເດືອນ 1 (ຂານ) ຈະເລີ່ມຕົ້ນດ້ວຍ <strong>ດາວ 2</strong> ຢູ່ສູນກາງ.</li>
          </ul>
        </div>
      </section>

      <!-- Section 3: Annual Afflictions: Tai Sui, Sui Po, San Sha -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ພະລັງງານອັບມຸງຄຸນປະຈຳປີ (The Annual Afflictions)</h2>
        <p class="doc-p text-justify leading-relaxed">
          ນອກຈາກດາວເຫີນແລ້ວ, ຍັງມີ <strong>3 ພະລັງງານອັນຕະລາຍປະຈຳປີ</strong> ທີ່ອາຈານຮວງຈຸ້ຍຕ້ອງຫຼີກລ່ຽງຢ່າງເດັດຂາດ:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-2">
          <!-- Tai Sui -->
          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300 space-y-1.5">
            <h3 class="font-bold text-rose-950 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-rose-600"></span> 1. ໄທ່ສຸ້ຍ (Tai Sui / องค์ไท้ส่วย)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              <strong>"ເທບພະເຈົ້າແຫ່ງການເວລາ":</strong> ສະຖິດຢູ່ໃນທິດຂອງນັກສັດປະຈຳປີ (15 ອົງສາ). ເຊັ່ນ ປີມະເມຍ 2026 ສະຖິດຢູ່ທິດໃຕ້ (Wu / 172.5°–187.5°).
            </p>
            <div class="text-[11px] text-rose-900 font-semibold bg-rose-100 p-2 rounded">
              ⚠️ <strong>ກົດເຫຼັກ:</strong> ຫ້າມຂຸດເຈາະ, ຫ້າມສັ່ນສະເທືອນ, ຫ້າມນັ່ງຫັນໜ້າປະເຊີນກັບໄທ່ສຸ້ຍ! ໃຫ້ນັ່ງເອົາຫຼັງພິງໄທ່ສຸ້ຍຈະໄດ້ຮັບການຄຸ້ມຄອງ.
            </div>
          </div>

          <!-- Sui Po -->
          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300 space-y-1.5">
            <h3 class="font-bold text-rose-950 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-rose-600"></span> 2. ສຸ້ຍໂພ່ (Sui Po / 岁破)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              <strong>"ຕຳແໜ່ງປະທະໄທ່ສຸ້ຍ":</strong> ຢູ່ກົງກັນຂ້າມ 180 ອົງສາກັບໄທ່ສຸ້ຍສະເໝີ. ເຊັ່ນ ປີ 2026 ໄທ່ສຸ້ຍຢູ່ໃຕ້, ສຸ້ຍໂພ່ຈະຢູ່ທິດເໜືອ (Zi / 352.5°–7.5°).
            </p>
            <div class="text-[11px] text-rose-900 font-semibold bg-rose-100 p-2 rounded">
              ⚠️ <strong>ອັນຕະລາຍ:</strong> ຮຸນແຮງກວ່າໄທ່ສຸ້ຍ! ຖ້າໄປກະທົບສັ່ນສະເທືອນທິດສຸ້ຍໂພ່ ຈະເກີດການສູນເສຍຊັບສິນຢ່າງໄວວາ ແລະ ຜູ້ເຖົ້າໃນເຮືອນຈະລົ້ມປ່ວຍກະທັນຫັນ.
            </div>
          </div>

          <!-- San Sha -->
          <div class="p-3.5 bg-rose-50 rounded-xl border border-rose-300 space-y-1.5">
            <h3 class="font-bold text-rose-950 text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-rose-600"></span> 3. ຊານຊາ (San Sha / 三煞)
            </h3>
            <p class="text-xs text-stone-700 leading-relaxed">
              <strong>"ສາມມານຮ້າຍ":</strong> ກວມເອົາ 3 ທິດຍ່ອຍ (45 ອົງສາ). ປະກອບດ້ວຍ ປຽບຊາ (Jie Sha - ປົ້ນຊັບ), ໄຈຊາ (Zai Sha - ໂລກໄພ), ແລະ ສຸຍຊາ (Sui Sha - ອຸບັດຕິເຫດ).
            </p>
            <div class="text-[11px] text-rose-900 font-semibold bg-rose-100 p-2 rounded">
              ⚠️ <strong>ກົດຄຳພີ:</strong> <em>"ສາມາດປະເຊີນໜ້າໄດ້ ແຕ່ຫ້າມນັ່ງພິງຫຼັງໃສ່ຊານຊາ" (Ke Xiang Er Bu Ke Zuo)</em>!
            </div>
          </div>
        </div>

        <!-- San Sha Lookup Table -->
        <div class="p-3 bg-stone-100 rounded-xl text-xs space-y-1 border border-stone-300">
          <div class="font-bold text-stone-900">ຕາຕະລາງທິດສະຖິດຂອງ ຊານຊາ (San Sha Direction Lookup):</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-[11px] mt-1">
            <div class="p-2 bg-white rounded border"><strong>ປີ Yin, Wu, Xu (ເສືອ, ມ້າ, ໝາ):</strong> ຊານຊາຢູ່ <strong>ທິດເໜືອ (Hai, Zi, Chou)</strong></div>
            <div class="p-2 bg-white rounded border"><strong>ປີ Shen, Zi, Chen (ລີງ, ຫນູ, ມັງກອນ):</strong> ຊານຊາຢູ່ <strong>ທິດໃຕ້ (Si, Wu, Wei)</strong></div>
            <div class="p-2 bg-white rounded border"><strong>ປີ Hai, Mao, Wei (ໝູ, ກະຕ່າຍ, ແບ້):</strong> ຊານຊາຢູ່ <strong>ທິດຕາເວັນຕົກ (Shen, You, Xu)</strong></div>
            <div class="p-2 bg-white rounded border"><strong>ປີ Si, You, Chou (ງູ, ໄກ່, ງົວ):</strong> ຊານຊາຢູ່ <strong>ທິດຕາເວັນອອກ (Yin, Mao, Chen)</strong></div>
          </div>
        </div>
      </section>

      <!-- Section 4: Comprehensive Visiting Star Interaction Matrix -->
      <section class="space-y-4">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">4. ຕາຕະລາງປະຕິສຳພັນດາວຈອນ ແລະ ວິທີປ້ອງກັນ (Interaction & Remedies Matrix)</h2>
        <div class="overflow-x-auto text-xs">
          <table class="w-full text-left border border-stone-300 rounded-lg overflow-hidden shadow-sm">
            <thead class="bg-amber-900 text-white font-bold">
              <tr>
                <th class="p-2.5 border">ດາວຈອນປະຈຳປີ</th>
                <th class="p-2.5 border">ເມື່ອພົບດາວພື້ນຖານ</th>
                <th class="p-2.5 border">ເຫດການທີ່ຖືກກະຕຸ້ນ (Ying Qi)</th>
                <th class="p-2.5 border">ວິທີປ້ອງກັນ ແລະ ແກ້ໄຂຢ່າງໄດ້ຜົນ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-stone-200 bg-white">
              <tr class="hover:bg-rose-50">
                <td class="p-2.5 font-bold text-rose-800 border">ດາວ 5 ເຫຼືອງ (Wu Huang)</td>
                <td class="p-2.5 border">ພົບດາວ 2 ຫຼື 5 ເດີມ</td>
                <td class="p-2.5 border text-rose-950 font-semibold">ອຸບັດຕິເຫດຮ້າຍແຮງ, ຜ່າຕັດດ່ວນ, ທຸລະກິດລົ້ມລະລາຍ, ໂລກມະເຮັງກຳເລີບ</td>
                <td class="p-2.5 border">ແຂວນກະດິ່ງລົມໂລຫະ 6 ທໍ່, ວາງໂຖເກືອຮວງຈຸ້ຍ (Salt Water Cure), ຫ້າມສຽງດັງ ຫຼື ຂຸດເຈາະເດັດຂາດ</td>
              </tr>
              <tr class="hover:bg-rose-50">
                <td class="p-2.5 font-bold text-rose-800 border">ດາວ 2 ດຳ (Er Hei)</td>
                <td class="p-2.5 border">ພົບດາວ 1, 2 ຫຼື 5 ເດີມ</td>
                <td class="p-2.5 border text-rose-950 font-semibold">ພະຍາດຊ້ຳເຮື້ອ, ໂລກກະເພາະ, ຜ່າຕັດມົດລູກ, ແມ່ຍິງແທ້ງລູກ</td>
                <td class="p-2.5 border">ວາງນ້ຳເຕົ້າທອງເຫຼືອງແທ້ ແລະ ຫຼຽນທອງຈີນ 6 ຫຼຽນ ເພື່ອດູດພະລັງດິນພິດ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2.5 font-bold text-amber-800 border">ດາວ 3 ມານຂຽວ (San Bi)</td>
                <td class="p-2.5 border">ພົບດາວ 2, 3 ຫຼື 7 ເດີມ</td>
                <td class="p-2.5 border">ການຂຶ້ນສານ, ຄະດີຄວາມ, ຜົວເມຍຜິດຖຽງກັນຮຸນແຮງ, ຖືກໃສ່ຮ້າຍປ້າຍສີ</td>
                <td class="p-2.5 border">ວາງພົມສີແດງ, ໂຄມໄຟແດງ, ຫຼື ວັດຖຸທາດໄຟ ເພື່ອລະບາຍພະລັງໄມ້</td>
              </tr>
              <tr class="hover:bg-emerald-50">
                <td class="p-2.5 font-bold text-emerald-800 border">ດາວ 4 ຂຽວ (Si Lv)</td>
                <td class="p-2.5 border">ພົບດາວ 1 ຫຼື 4 ເດີມ</td>
                <td class="p-2.5 border text-emerald-950 font-semibold">ສອບເສັງຕິດ, ໄດ້ເລື່ອນຂັ້ນ, ສະເໜ່ຄວາມຮັກ, ຊື່ສຽງໂດ່ງດັງ</td>
                <td class="p-2.5 border">ຕັ້ງໂຕະເຮັດວຽກ, ວາງໄຜ່ກວນອິມ 4 ຕົ້ນແຊ່ນ້ຳສະອາດ, ແຂວນພູ່ກັນຈີນ 4 ດວງ</td>
              </tr>
              <tr class="hover:bg-amber-50">
                <td class="p-2.5 font-bold text-stone-800 border">ດາວ 7 ແດງ (Qi Chi)</td>
                <td class="p-2.5 border">ພົບດາວ 2, 3 ຫຼື 7 ເດີມ</td>
                <td class="p-2.5 border">ຖືກໂຈນປົ້ນ, ຖືກໂກງເງິນ, ຖືກຂອງມີຄົມບາດ, ອັກຄີໄພ (ໄຟໄໝ້)</td>
                <td class="p-2.5 border">ວາງອ່າງນ້ຳນິ້ງ (Still Water) 3 ຈອກ ຫຼື ໄຜ່ກວນອິມ 3 ຕົ້ນ ເພື່ອຖ່າຍເທພະລັງທອງ</td>
              </tr>
              <tr class="hover:bg-emerald-50">
                <td class="p-2.5 font-bold text-emerald-800 border">ດາວ 9 ມ່ວງ (Jiu Zi)</td>
                <td class="p-2.5 border">ພົບດາວ 8, 9 ຫຼື 1 ເດີມ</td>
                <td class="p-2.5 border text-emerald-950 font-semibold">ໂຊກລາບກ້ອນໃຫຍ່ທີ່ສຸດໃນຍຸກ 9, ງານມຸງຄຸນແຕ່ງງານ, ທຸລະກິດເຕີບໂຕກ້າວກະໂດດ</td>
                <td class="p-2.5 border">ເປີດໄຟສະຫວ່າງ, ເປີດປະຕູຮັບລົມ, ວາງຕົ້ນໄມ້ໃບຂຽວສົດຊື່ນ ຫຼື ນ້ຳພຸເຄື່ອນໄຫວ</td>
              </tr>
              <tr class="hover:bg-blue-50">
                <td class="p-2.5 font-bold text-blue-800 border">ດາວ 1 ຂາວ (Yi Bai)</td>
                <td class="p-2.5 border">ພົບດາວ 4 ຫຼື 6 ເດີມ</td>
                <td class="p-2.5 border text-blue-950 font-semibold">ໄດ້ຮັບທຶນການສຶກສາ, ເດີນທາງຕ່າງປະເທດ, ພົບຜູ້ອຸປະຖຳຄ້ຳຊູ</td>
                <td class="p-2.5 border">ວາງລູກແກ້ວຄິດຕັນກົມໃສ ຫຼື ວາງນ້ຳພຸຂະໜາດນ້ອຍເພື່ອເສີມພະລັງສະຕິປັນຍາ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `
};
