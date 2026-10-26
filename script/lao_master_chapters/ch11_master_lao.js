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
      <p class="text-sm font-semibold text-amber-900/80">ຄຳພີຖອດລະຫັດພະລັງງານ: ຄວາມໝາຍ, ໂລກໄພໄຂ້ເຈັບ, ໂຊກລາບ-ໜ້າທີ່ການງານ ແລະ ວິທີແກ້ໄຂຄົບທຸກຄູ່ (1-1 ຫາ 9-9)</p>
    </div>

    <!-- Section 1: Theory -->
    <section class="space-y-3">
      <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຫຼັກການອ່ານດາວປະສົມ: ເຈົ້າບ້ານ ແລະ ແຂກ (Host & Guest Principle)</h2>
      <p class="doc-p text-justify leading-relaxed">
        ໃນວິຊາຮວງຈຸ້ຍດາວເຫີນສວຽນຄົງ, ການອ່ານຜັງດາວບໍ່ແມ່ນການຕີຄວາມໝາຍຂອງດາວດວງໃດດວງໜຶ່ງຢ່າງໂດດດ່ຽວ. ຫົວໃຈທີ່ແທ້ຈິງຄື <strong>"ການອ່ານປະຕິສຳພັນລະຫວ່າງດາວ 2 ດວງ (ຫຼື 3 ດວງ ຮ່ວມກັບດາວຍຸກ)"</strong>:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
        <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
          <h3 class="font-bold text-amber-900 text-xs uppercase tracking-wider">ດາວພູ (Mountain Star - 主)</h3>
          <p class="text-xs text-stone-700 mt-1 leading-relaxed">
            <strong>ເຈົ້າພາບຝ່າຍຢິນ (Yin/Host):</strong> ຄວບຄຸມມະນຸດ, ສຸຂະພາບ, ອາຍຸຍືນຍາວ, ບາຣະມີ, ຄວາມສຳພັນໃນຄອບຄົວ ແລະ ຄວາມສະຫງົບສຸກ. ດາວພູຕ້ອງການ <em>ຄວາມສະຫງົບ ແລະ ຄວາມໜັກແໜ້ນ (Jing 静)</em>.
          </p>
        </div>
        <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
          <h3 class="font-bold text-amber-900 text-xs uppercase tracking-wider">ດາວນ້ຳ (Water Star - 客)</h3>
          <p class="text-xs text-stone-700 mt-1 leading-relaxed">
            <strong>ເຈົ້າພາບຝ່າຍຢາງ (Yang/Guest):</strong> ຄວບຄຸມຊັບສິນ, ເງິນທອງ, ທຸລະກິດ, ໂອກາດການງານ ແລະ ຄວາມຮັ່ງມີ. ດາວນ້ຳຕ້ອງການ <em>ການເຄື່ອນໄຫວ ແລະ ກະແສລົມ/ນ້ຳ (Dong 动)</em>.
          </p>
        </div>
        <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
          <h3 class="font-bold text-amber-900 text-xs uppercase tracking-wider">ດາວຍຸກ & ດາວຈອນ (Catalyst)</h3>
          <p class="text-xs text-stone-700 mt-1 leading-relaxed">
            <strong>ຕົວຈຸດຊະນວນ (Trigger):</strong> ດາວຍຸກເປັນພື້ນຖານເວລາ 20 ປີ. ເມື່ອດາວຈອນປະຈຳປີ ຫຼື ປະຈຳເດືອນ ບິນເຂົ້າມາທັບຊ້ອນ ມັນຈະຈຸດຊະນວນໃຫ້ເຫດການຕາມຄຳກອນບູຮານເກີດຂຶ້ນຈິງທັນທີ!
          </p>
        </div>
      </div>
    </section>

    <!-- Section for Mountain Star 1 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 1: 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] - ຕຳແໜ່ງ Kan (坎) (ລູກຊາຍກາງ (Middle Son))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 1 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-1</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “比和之象，坎水汪洋，水多木漂”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (1 ຂາວ (1 White)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດນ້ຳ (Water). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-2</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “中男灭绝不还乡，土克水也”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] ພົບກັບ ດາວນ້ຳ 2 ດຳ (2 Black) [ທາດດິນ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດດິນ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-3</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “水生木旺，震为长男，聪慧过人”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] ພົບກັບ ດາວນ້ຳ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-4</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “四绿同宫，定主聪明擢秀；凤池身贵”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] ພົບກັບ ດາວນ້ຳ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-5</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “子癸生疡，土克水也；重病缠身”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] ພົບກັບ ດາວນ້ຳ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ວາງວັດຖຸທາດຄຳແທ້ ຫຼື ໂຖເກືອຮວງຈຸ້ຍ ເພື່ອສະກົດດາວ 5.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-6</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “一六共宗，买田庄底，官贵亨通”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] ພົບກັບ ດາວນ້ຳ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-7</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “金水多情，贪恋沙场；白虎引盗”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] ພົບກັບ ດາວນ້ຳ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-8</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “土克水，小口损伤；耳病肾亏”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] ພົບກັບ ດາວນ້ຳ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">1-9</span>
          ການປະສົມດາວ: ດາວພູ 1 (1 ຂາວ (1 White)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “水火既济，照显文采；南离北坎”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)] ພົບກັບ ດາວນ້ຳ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກາງ (Middle Son) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດນ້ຳ (Water) ແລະ ທາດໄຟ (Fire). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
    <!-- Section for Mountain Star 2 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 2: 2 ດຳ (2 Black) [ທາດດິນ (Earth)] - ຕຳແໜ່ງ Kun (坤) (ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 2 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-1</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “坤克坎水，母多寡孤，子嗣艰难”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 2 ດຳ (2 Black) [ທາດດິນ (Earth)] ພົບກັບ ດາວນ້ຳ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດນ້ຳ (Water). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-2</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “二黑重逢，主病魔缠身，寡母当家”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (2 ດຳ (2 Black)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດດິນ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-3</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “二三交加，斗牛煞起；伤人损财”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 2 ດຳ (2 Black) [ທາດດິນ (Earth)] ພົບກັບ ດາວນ້ຳ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດໄມ້ (Wood). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ໃຊ້ທາດໄຟ (ໂຄມໄຟສີແດງ, ພົມແດງ) ເພື່ອຖ່າຍເທໄມ້ 3 ໄປເກີດດິນ 2 ຢຸດການຂັດແຍ້ງ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-4</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “二四同宫，姑媳不和；妇人受制”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 2 ດຳ (2 Black) [ທາດດິນ (Earth)] ພົບກັບ ດາວນ້ຳ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-5</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “二五交加，必损主；孤儿寡母”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 2 ດຳ (2 Black) [ທາດດິນ (Earth)] ພົບກັບ ດາວນ້ຳ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ແຂວນກະດິ່ງລົມໂລຫະ 6 ທໍ່, ຕັ້ງໂຖເກືອຮວງຈຸ້ຍ An Ren Shui, ຫ້າມໄຟ, ຫ້າມສຽງດັງ, ຫ້າມຂຸດດິນເດັດຂາດ!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-6</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “二六同宫，乾坤配合；富有田庄”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 2 ດຳ (2 Black) [ທາດດິນ (Earth)] ພົບກັບ ດາວນ້ຳ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-7</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “二七同道，火灼重土；先天结煞”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 2 ດຳ (2 Black) [ທາດດິນ (Earth)] ພົບກັບ ດາວນ້ຳ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-8</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “比和之象，土聚中原；田产巨富”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 2 ດຳ (2 Black) [ທາດດິນ (Earth)] ພົບກັບ ດາວນ້ຳ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">2-9</span>
          ການປະສົມດາວ: ດາວພູ 2 (2 ດຳ (2 Black)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “火见生土，愚钝难改；目疾心疼”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 2 ດຳ (2 Black) [ທາດດິນ (Earth)] ພົບກັບ ດາວນ້ຳ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນ (Earth) ແລະ ທາດໄຟ (Fire). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
    <!-- Section for Mountain Star 3 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 3: 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] - ຕຳແໜ່ງ Zhen (震) (ລູກຊາຍກົກ (Eldest Son))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 3 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-1</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “雷出地奋，长男得禄；木得水生”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດນ້ຳ (Water). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-2</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “三二斗牛，男盗女娼；讼狱官非”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 2 ດຳ (2 Black) [ທາດດິນ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດດິນ (Earth). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ໃຊ້ທາດໄຟ (ໂຄມໄຟສີແດງ, ພົມແດງ) ເພື່ອຖ່າຍເທໄມ້ 3 ໄປເກີດດິນ 2 ຢຸດການຂັດແຍ້ງ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-3</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “双木成林，争竞不休；雷霆震怒”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (3 ຂຽວ (3 Jade)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-4</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “三四同宫，碧绿风魔；狂妄自大”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-5</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木克五黄，脾胃受损；瘟疫横行”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-6</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “金克长男，足疾难免；官非口舌”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-7</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “交剑交煞，折伤手足；盗贼侵凌”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-8</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木克小口，伤损少男；筋骨折伤”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">3-9</span>
          ການປະສົມດາວ: ດາວພູ 3 (3 ຂຽວ (3 Jade)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木火通明，文章显达；出入栋梁”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍກົກ (Eldest Son) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດໄຟ (Fire). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
    <!-- Section for Mountain Star 4 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 4: 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] - ຕຳແໜ່ງ Xun (巽) (ລູກສາວກົກ (Eldest Daughter))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 4 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-1</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “名扬四海，登科及第；一四同宗”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດນ້ຳ (Water). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-2</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木克坤土，母女不和；妇科宿疾”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 2 ດຳ (2 Black) [ທາດດິນ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດດິນ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-3</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “碧绿相逢，风气难制；口角争执”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-4</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “双巽成风，飘荡无依；文秀多情”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (4 ຂຽວມໍລະກົດ (4 Green)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-5</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木克毒土，疮痍满目；沉溺博彩”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-6</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “金克秀木，折断文昌；刀兵之灾”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-7</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “刀截修竹，女色破家；口舌飞祸”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-8</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木克少男，小儿风湿；学业阻滞”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">4-9</span>
          ການປະສົມດາວ: ດາວພູ 4 (4 ຂຽວມໍລະກົດ (4 Green)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木火相生，青云得路；大魁天下”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)] ພົບກັບ ດາວນ້ຳ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກົກ (Eldest Daughter) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດໄມ້ (Wood) ແລະ ທາດໄຟ (Fire). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
    <!-- Section for Mountain Star 5 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 5: 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] - ຕຳແໜ່ງ Zhong (中宫) (ຈັກກະພັດ / ພະຍາມານ (Emperor))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 5 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-1</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “五土克水，中男短命；肾衰耳聋”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] ພົບກັບ ດາວນ້ຳ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດນ້ຳ (Water). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ວາງວັດຖຸທາດຄຳແທ້ ຫຼື ໂຖເກືອຮວງຈຸ້ຍ ເພື່ອສະກົດດາວ 5.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-2</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “二五交加，灾难并至；疾病死亡”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] ພົບກັບ ດາວນ້ຳ 2 ດຳ (2 Black) [ທາດດິນ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດດິນ (Earth). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ແຂວນກະດິ່ງລົມໂລຫະ 6 ທໍ່, ຕັ້ງໂຖເກືອຮວງຈຸ້ຍ An Ren Shui, ຫ້າມໄຟ, ຫ້າມສຽງດັງ, ຫ້າມຂຸດດິນເດັດຂາດ!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-3</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “五黄遇木，疮疡难医；家破人亡”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] ພົບກັບ ດາວນ້ຳ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-4</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木入中宫，狂风掀宅；妇人心疾”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] ພົບກັບ ດາວນ້ຳ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-5</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “双五重叠，至毒至凶；九死一生”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (5 ເຫຼືອງ (5 Yellow)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ແຂວນກະດິ່ງລົມໂລຫະ 6 ທໍ່, ຕັ້ງໂຖເກືອຮວງຈຸ້ຍ An Ren Shui, ຫ້າມໄຟ, ຫ້າມສຽງດັງ, ຫ້າມຂຸດດິນເດັດຂາດ!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-6</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “土生阳金，老翁病重；头疾骨折”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] ພົບກັບ ດາວນ້ຳ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-7</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “土生阴金，吐血咽痛；少女夭亡”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] ພົບກັບ ດາວນ້ຳ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-8</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “重叠戊己，小儿中毒；骨瘤腹痛”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] ພົບກັບ ດາວນ້ຳ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">5-9</span>
          ການປະສົມດາວ: ດາວພູ 5 (5 ເຫຼືອງ (5 Yellow)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “火炎土燥，毒火燎原；目疾发疯”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)] ພົບກັບ ດາວນ້ຳ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ຈັກກະພັດ / ພະຍາມານ (Emperor) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນພູເຂົາໄຟ (Earth) ແລະ ທາດໄຟ (Fire). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
    <!-- Section for Mountain Star 6 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 6: 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] - ຕຳແໜ່ງ Qian (乾) (ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 6 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-1</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “金水相生，虚堂悬象；名列三台”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] ພົບກັບ ດາວນ້ຳ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດນ້ຳ (Water). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-2</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “乾坤同德，巨富多财；长辈延寿”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] ພົບກັບ ດາວນ້ຳ 2 ດຳ (2 Black) [ທາດດິນ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດດິນ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-3</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “金克长男，官非缠身；足疾风湿”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] ພົບກັບ ດາວນ້ຳ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-4</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “乾金克巽，长女受克；神经错乱”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] ພົບກັບ ດາວນ້ຳ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-5</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “土重金埋，父衰家落；脑溢血崩”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] ພົບກັບ ດາວນ້ຳ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-6</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “天门重重，刚愎自用；武贵得权”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (6 ຂາວ (6 White)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-7</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “交剑交锋，干戈四起；血光之灾”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] ພົບກັບ ດາວນ້ຳ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ວາງໂຖນ້ຳນິ້ງສະອາດ (Still Water) ເພື່ອຖ່າຍເທພະລັງຄຳທີ່ປະທະກັນ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-8</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “富比陶朱，坚金遇土；福禄悠长”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] ພົບກັບ ດາວນ້ຳ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">6-9</span>
          ການປະສົມດາວ: ດາວພູ 6 (6 ຂາວ (6 White)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “火烧天门，父子不和；咳喘吐血”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)] ພົບກັບ ດາວນ້ຳ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດຄຳໃຫຍ່ (Metal) ແລະ ທາດໄຟ (Fire). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ວາງເຄື່ອງປັ້ນດິນເຜົາ ຫຼື ຫີນສີເຫຼືອງ (ທາດດິນ) ເພື່ອລະບາຍໄຟ 9 ໄປລ້ຽງດິນ ແລ້ວດິນໄປເກີດຄຳ 6.
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
    <!-- Section for Mountain Star 7 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 7: 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] - ຕຳແໜ່ງ Dui (兑) (ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 7 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-1</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “金生坎水，口才显达；桃花盗贼”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] ພົບກັບ ດາວນ້ຳ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດນ້ຳ (Water). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-2</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “二七同道，火灾吐血；回禄之灾”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] ພົບກັບ ດາວນ້ຳ 2 ດຳ (2 Black) [ທາດດິນ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດດິນ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-3</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “穿心煞至，官非破财；盗贼破门”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] ພົບກັບ ດາວນ້ຳ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-4</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “金克柔木，桃花劫煞；口舌是非”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] ພົບກັບ ດາວນ້ຳ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-5</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “土生毒金，口舌生疮；咽喉之灾”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] ພົບກັບ ດາວນ້ຳ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-6</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “剑戟相碰，血光骨折；争强好胜”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] ພົບກັບ ດາວນ້ຳ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ວາງໂຖນ້ຳນິ້ງສະອາດ (Still Water) ເພື່ອຖ່າຍເທພະລັງຄຳທີ່ປະທະກັນ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-7</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “双破同临，贼星入室；兵刃之灾”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (7 ແດງ (7 Red)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-8</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “生入克出，财源广进；少男得妻”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] ພົບກັບ ດາວນ້ຳ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">7-9</span>
          ການປະສົມດາວ: ດາວພູ 7 (7 ແດງ (7 Red)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “火照金城，回禄之灾；肺痨吐血”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)] ພົບກັບ ດາວນ້ຳ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດຄຳນ້ອຍ (Metal) ແລະ ທາດໄຟ (Fire). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ວາງໂຖນ້ຳນິ້ງ ຫຼື ວັດຖຸທາດດິນ ເພື່ອປ້ອງກັນອັກຄີໄພ ແລະ ດັບໄຟທີ່ຫຼອມຄຳ.
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
    <!-- Section for Mountain Star 8 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 8: 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] - ຕຳແໜ່ງ Gen (艮) (ລູກຊາຍຫຼ້າ (Youngest Son))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 8 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-1</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “土克坎水，耳病肾损；少男欺长”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] ພົບກັບ ດາວນ້ຳ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດນ້ຳ (Water). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-2</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “土聚丰盈，田宅万顷；老幼同欢”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] ພົບກັບ ດາວນ້ຳ 2 ດຳ (2 Black) [ທາດດິນ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດດິນ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-3</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木克八白，少男伤筋；损财破败”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] ພົບກັບ ດາວນ້ຳ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-4</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “风水相搏，小儿疳积；阻滞文思”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] ພົບກັບ ດາວນ້ຳ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-5</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “五黄加八，毒肿痈疽；破财损丁”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] ພົບກັບ ດາວນ້ຳ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-6</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “坚金遇土，富贵双全；官禄亨通”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] ພົບກັບ ດາວນ້ຳ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-7</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “土金相生，连生贵子；富贵并臻”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] ພົບກັບ ດາວນ້ຳ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-8</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “八白重临，双喜临门；富甲一方”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (8 ຂາວ (8 White)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">8-9</span>
          ການປະສົມດາວ: ດາວພູ 8 (8 ຂາວ (8 White)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “火生旺土，喜庆临门；吉星高照”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)] ພົບກັບ ດາວນ້ຳ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກຊາຍຫຼ້າ (Youngest Son) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດດິນນ້ອຍ (Earth) ແລະ ທາດໄຟ (Fire). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
    <!-- Section for Mountain Star 9 -->
    <section class="space-y-4 pt-4 border-t border-stone-300">
      <div class="bg-stone-900 text-white p-3.5 rounded-xl shadow">
        <h2 class="text-base sm:text-lg font-black text-amber-300">
          ກຸ່ມດາວພູເລກ 9: 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] - ຕຳແໜ່ງ Li (离) (ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter))
        </h2>
        <p class="text-xs text-stone-300 mt-0.5">
          ເມື່ອດາວພູ 9 ສະຖິດຢູ່ໃນວັງ ແລ້ວພົບກັບດາວນ້ຳ 1 ຫາ 9 ຈະສ້າງສະໜາມພະລັງງານ 9 ຮູບແບບດັ່ງລຸ່ມນີ້:
        </p>
      </div>

      <div class="space-y-3">
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-1</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 1 (1 ຂາວ (1 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “水火不相射，既济显贵；离坎通明”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] ພົບກັບ ດາວນ້ຳ 1 ຂາວ (1 White) [ທາດນ້ຳ (Water)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ລູກຊາຍກາງ (Middle Son). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດນ້ຳ (Water). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 1 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-2</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 2 (2 ດຳ (2 Black))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “火烈土焦，妇人盲目；心胞受损”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] ພົບກັບ ດາວນ້ຳ 2 ດຳ (2 Black) [ທາດດິນ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ແມ່, ແມ່ເຖົ້າ, ແມ່ຍິງອາວຸໂສ (Mother). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດດິນ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 2 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-3</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 3 (3 ຂຽວ (3 Jade))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木火通明，文采风流；名震寰宇”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] ພົບກັບ ດາວນ້ຳ 3 ຂຽວ (3 Jade) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ລູກຊາຍກົກ (Eldest Son). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 3 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-4</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 4 (4 ຂຽວມໍລະກົດ (4 Green))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “木火相生，栋梁之材；大喜连连”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] ພົບກັບ ດາວນ້ຳ 4 ຂຽວມໍລະກົດ (4 Green) [ທາດໄມ້ (Wood)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ລູກສາວກົກ (Eldest Daughter). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດໄມ້ (Wood). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 4 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-amber-300 bg-amber-50/50 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-amber-900 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-5</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 5 (5 ເຫຼືອງ (5 Yellow))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-600 text-white">ມຸງຄຸນປານກາງ (Neutral/Favorable)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “毒火生土，瘟病四起；目疾心痛”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] ພົບກັບ ດາວນ້ຳ 5 ເຫຼືອງ (5 Yellow) [ທາດດິນພູເຂົາໄຟ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ຈັກກະພັດ / ພະຍາມານ (Emperor). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດດິນພູເຂົາໄຟ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 5 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລາຍຮັບໝູນວຽນປົກກະຕິ, ຄວນເສີມດ້ວຍການຈັດຮວງຈຸ້ຍໃຫ້ຖືກທິດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຮັກສາຄວາມສະອາດ, ຄວາມສະຫວ່າງໃຫ້ພໍດີ ແລະ ຫຼີກລ່ຽງການວາງສິ່ງຂອງລົກເຮື້ອ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-6</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 6 (6 ຂາວ (6 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “火烧天门，父子反目；肺病咳血”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] ພົບກັບ ດາວນ້ຳ 6 ຂາວ (6 White) [ທາດຄຳໃຫຍ່ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ພໍ່, ຜູ້ນຳຄອບຄົວ, ເຈົ້ານາຍ (Father). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດຄຳໃຫຍ່ (Metal). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 6 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ວາງເຄື່ອງປັ້ນດິນເຜົາ ຫຼື ຫີນສີເຫຼືອງ (ທາດດິນ) ເພື່ອລະບາຍໄຟ 9 ໄປລ້ຽງດິນ ແລ້ວດິນໄປເກີດຄຳ 6.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-rose-300 bg-rose-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-rose-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-7</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 7 (7 ແດງ (7 Red))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-600 text-white">⚠️ ອັບມຸງຄຸນ / ຊາຮ້າຍ (Severe Sha Qi - Requires Immediate Cure)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “烈火融金，回禄重重；咽痛肺痨”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] ພົບກັບ ດາວນ້ຳ 7 ແດງ (7 Red) [ທາດຄຳນ້ອຍ (Metal)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ລູກສາວຫຼ້າ, ຍິງສາວ (Youngest Daughter). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດຄຳນ້ອຍ (Metal). 
            ລະວັງພະຍາດຮຸນແຮງຊ້ຳເຮື້ອ, ການຜ່າຕັດ, ອຸບັດຕິເຫດ ຫຼື ການເສຍຊີວິດກະທັນຫັນ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 7 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ລະວັງການສູນເສຍຊັບ, ຖືກສໍ້ໂກງ, ໜີ້ສິນ, ຄະດີຄວາມ, ຫຼື ການລົ້ມລະລາຍ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ວາງໂຖນ້ຳນິ້ງ ຫຼື ວັດຖຸທາດດິນ ເພື່ອປ້ອງກັນອັກຄີໄພ ແລະ ດັບໄຟທີ່ຫຼອມຄຳ.
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-8</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 8 (8 ຂາວ (8 White))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “吉星生旺，富贵双全；添丁进喜”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>ປະຕິສຳພັນ 5 ທາດ:</strong> ດາວພູ 9 ມ່ວງ (9 Purple) [ທາດໄຟ (Fire)] ພົບກັບ ດາວນ້ຳ 8 ຂາວ (8 White) [ທາດດິນນ້ອຍ (Earth)]. ດາວພູເປັນເຈົ້າບ້ານຝ່າຍຢິນ (ສຸຂະພາບ/ຄົນ) ແລະ ດາວນ້ຳເປັນແຂກຝ່າຍຢາງ (ເງິນຄຳ/ໂຊກ).
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ລູກຊາຍຫຼ້າ (Youngest Son). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດດິນນ້ອຍ (Earth). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 8 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
    <div class="pair-card p-4 rounded-xl border border-emerald-300 bg-emerald-50/60 shadow-sm space-y-2.5 transition hover:shadow-md">
      <div class="flex flex-wrap items-center justify-between border-b border-stone-200/80 pb-2">
        <h3 class="font-black text-sm sm:text-base text-emerald-950 flex items-center gap-2">
          <span class="w-7 h-7 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center font-mono font-bold text-xs">9-9</span>
          ການປະສົມດາວ: ດາວພູ 9 (9 ມ່ວງ (9 Purple)) + ດາວນ້ຳ 9 (9 ມ່ວງ (9 Purple))
        </h3>
        <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">⭐ ມະຫາມຸງຄຸນ (Highly Auspicious)</span>
      </div>

      <div class="text-[11px] font-serif text-stone-600 italic bg-white/70 p-2 rounded border border-stone-200/50">
        📜 <strong>ຄຳກອນບູຮານ (Classical Ode):</strong> “九紫当令，至尊至贵；大旺二十年”
      </div>

      <p class="text-xs text-stone-800 text-justify leading-relaxed">
        <strong>比和 (Bi He - ພະລັງດຽວກັນທົບທອງ):</strong> ທັງດາວພູ ແລະ ດາວນ້ຳ ເປັນດາວດຽວກັນ (9 ມ່ວງ (9 Purple)), ເຮັດໃຫ້ຄຸນລັກສະນະ ແລະ ພະລັງງານຂອງດາວນີ້ເພີ່ມຂຶ້ນເປັນ 2 ເທົ່າ!
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1 text-xs text-stone-700">
        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🩺 ສຸຂະພາບ & ອະໄວຍະວະ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ກ່ຽວຂ້ອງກັບ: ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter) ແລະ ລູກສາວກາງ, ຍິງໄວເຮັດວຽກ (Middle Daughter). ພະລັງກະທົບຕໍ່: ທາດໄຟ (Fire) ແລະ ທາດໄຟ (Fire). 
            ສຸຂະພາບປົກກະຕິ ຫຼື ສົ່ງເສີມຄວາມສົມດຸນຫາກສະພາບແວດລ້ອມສະອາດ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">💰 ການເງິນ & ອາຊີບ:</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ດາວນ້ຳ 9 ເປັນຕົວຄວບຄຸມກະແສເງິນ. ດຶງດູດຄວາມຮັ່ງມີ, ໂຊກລາບມະຫາສານ, ທຸລະກິດເຕີບໃຫຍ່, ໄດ້ຮັບການເລື່ອນຕຳແໜ່ງສູງ.
          </p>
        </div>

        <div class="bg-white/80 p-2.5 rounded-lg border border-stone-200/70">
          <strong class="text-stone-900 flex items-center gap-1">🛠️ ວິທີຈັດວາງ & ແກ້ໄຂ (Remedy):</strong>
          <p class="mt-1 text-[11px] leading-relaxed">
            ຕັ້ງນ້ຳພຸເຄື່ອນໄຫວ (Active Water) ຫຼື ເປີດປະຕູ/ປ່ອງຢ້ຽມຮັບລົມ ເພື່ອກະຕຸ້ນໂຊກລາບຢ່າງເຕັມທີ່!
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </section>
  
  </div>
`
};
