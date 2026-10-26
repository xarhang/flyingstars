/**
 * ch19_master_lao.js
 * ບົດທີ 19: ວິຊາສຸສານເຮືອນຢິນຂັ້ນສູງ (Advanced Yin Zhai Feng Shui)
 * (Comprehensive Masterclass Edition - Ultra In-Depth)
 */

module.exports = {
  id: "ch19",
  title: "ບົດທີ 19: ວິຊາສຸສານເຮືອນຢິນຂັ້ນສູງ",
  html: `
    <div class="chapter-content space-y-6">
      <div class="border-b-2 border-amber-800/40 pb-4 mb-6">
        <div class="text-xs font-bold uppercase tracking-widest text-amber-700">ຄຳພີສານຸກົມຮວງຈຸ້ຍດາວເຫີນ • ພາກທີ 6: ວິຊາການເວລາ ແລະ ພິທີກຳ</div>
        <h1 class="doc-h1 text-2xl sm:text-3xl font-black text-amber-950 mt-1">ບົດທີ 19: ວິຊາສຸສານເຮືອນຢິນຂັ້ນສູງ (Advanced Yin Zhai Feng Shui)</h1>
        <p class="text-sm font-semibold text-amber-900/80">ຄຳພີຝັງສົບກົວຜູ (Zang Shu), ມັງກອນສາຍພູ (Long Mai), ດິນຫ້າສີ (Ng Se Tu), ແລະ ຕຳແໜ່ງຈຸດຝັງ (Xue Dian)</p>
      </div>

      <!-- Section 1: Philosophy of Ancestral Connection -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">1. ຫຼັກການເຮືອນຢິນ: ສາຍໃຍເລືອດເນື້ອ ແລະ ພະລັງງານຊີວິດ</h2>
        <p class="doc-p text-justify leading-relaxed">
          ໃນຄຳພີ <strong>"ຊ່າງຊູ" (Zang Shu 葬书)</strong> ຂອງ <strong>ກົວຜູ (Guo Pu)</strong> ໄດ້ບັນທຶກໄວ້ວ່າ:
        </p>
        <div class="p-3.5 bg-amber-50 rounded-xl border border-amber-300 text-xs text-stone-800 leading-relaxed font-serif">
          <em>"ຄົນເຮົາເກີດມາຈາກພໍ່ແມ່. ເມື່ອພໍ່ແມ່ຕາຍໄປ ກະດູກຍັງຄົງມີສາຍເລືອດ ແລະ ຄວາມຖີ່ດຽວກັນກັບລູກຫຼານ (Tong Qi Xiang Qiu 同气相求). ຖ້າຝັງກະດູກບັນພະບຸລຸດລົງໃນດິນທີ່ມີພະລັງຊີວິດ (Sheng Qi), ພະລັງນັ້ນຈະສົ່ງຕໍ່ຜ່ານຄື້ນສະໜາມແມ່ເຫຼັກໄປຄຸ້ມຄອງ ແລະ ສົ່ງເສີມລູກຫຼານໃຫ້ຈະເລີນຮຸ່ງເຮືອງ, ສະຫຼາດຫຼັກແຫຼມ, ແລະ ເປັນເຈົ້ານາຍຄົນ."</em>
        </div>
      </section>

      <!-- Section 2: Finding the Xue Dian -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">2. ຈຸດຝັງສັກສິດ (Xue Dian 穴点) 4 ຮູບແບບຫຼັກ</h2>
        <p class="doc-p text-justify leading-relaxed">
          ການຫາຈຸດທີ່ພະລັງມັງກອນລວມຕົວ (Ju Qi) ຢູ່ເທິງເນີນພູ ມີ 4 ລັກສະນະທຳມະຊາດ:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <h3 class="font-bold text-amber-950">1. ວໍເສວຽ (Wo Xue 窝穴 - ຮັງນົກ / ອ່າງຄຳ):</h3>
            <p class="text-stone-700 mt-1 leading-relaxed">
              ເນີນພູເວົ້າເຂົ້າຄືຮັງນົກ ຫຼື ອ່າງຮອງຮັບນ້ຳ. ມີເນີນໂອບລ້ອມທັງຊ້າຍ-ຂວາ. ເປັນຈຸດຝັງທີ່ອົບອຸ່ນ, ລົມພັດຜ່ານບໍ່ໄດ້, ຊັບສິນເງິນທອງສະສົມແໜ້ນໜາ.
            </p>
          </div>
          <div class="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <h3 class="font-bold text-amber-950">2. ຄຽນເສວຽ (Qian Xue 钳穴 - ຕົວຄີບ / ຂາກວານ):</h3>
            <p class="text-stone-700 mt-1 leading-relaxed">
              ສັນພູແຍກອອກເປັນສອງຂາ ຄ້າຍຄືຄີມ ຫຼື ຂາກວານ ໂອບຮັດຈຸດກາງໄວ້. ໃຫ້ພະລັງດ້ານອຳນາດທາງການທະຫານ ແລະ ການປົກຄອງ.
            </p>
          </div>
          <div class="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <h3 class="font-bold text-amber-950">3. ລົ່ວເສວຽ (Ru Xue 乳穴 - ນົມແມ່):</h3>
            <p class="text-stone-700 mt-1 leading-relaxed">
              ສັນພູຄ່ອຍໆ ໂຄ້ງໂນນລົງມາຄ້າຍຄືເຕົ້ານົມແມ່. ຈຸດຝັງຢູ່ປາຍຍອດນົມ. ສົ່ງເສີມຄວາມຮັ່ງມີ, ລູກຫຼານສືບຕະກຸນດົກໜາ, ຄອບຄົວອຸດົມສົມບູນ.
            </p>
          </div>
          <div class="p-3 bg-stone-50 rounded-xl border border-stone-200">
            <h3 class="font-bold text-amber-950">4. ຖູເສວຽ (Tu Xue 突穴 - ຫົວໂນ / ຫຼັງເຕົ່າ):</h3>
            <p class="text-stone-700 mt-1 leading-relaxed">
              ກາງທົ່ງພຽງຮາບພຽງແຕ່ມີເນີນດິນມົນກົມໂນນຂຶ້ນມາໂດດເດັ່ນ. ຈຸດຝັງຢູ່ເທິງຍອດເນີນ. ເໝາະສຳລັບຄົນທີ່ຕ້ອງການສ້າງຊື່ສຽງໂດ່ງດັງລະດັບປະເທດ.
            </p>
          </div>
        </div>
      </section>

      <!-- Section 3: Five Color Soil -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">3. ດິນ 5 ສີແຫ່ງມັງກອນ (Five-Color Dragon Soil 五色土 - Ng Se Tu)</h2>
        <div class="p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2 text-stone-700 leading-relaxed">
          <p>
            ເມື່ອຂຸດລົງໄປຮອດຈຸດຝັງແທ້ (Xue) ໃນລະດັບ 1.5 – 2 ແມັດ ຈະຕ້ອງພົບກັບ <strong>"ດິນ 5 ສີ"</strong>:
          </p>
          <ul class="list-disc pl-5 space-y-1">
            <li><strong>ລັກສະນະເນື້ອດິນ:</strong> ດິນມີຄວາມລະອຽດນຸ່ມຄືໄຂມັນງົວ ຫຼື ແປ້ງສີລາ, ບໍ່ແຫ້ງແລ້ງເປັນຂີ້ຝຸ່ນ ແລະ ບໍ່ຊຸ່ມແສວເປັນຂີ້ຕົມ. ເມື່ອກຳເປັນກ້ອນຈະຕິດແໜ້ນ.</li>
            <li><strong>ສີສັນ 5 ສີ:</strong> ປະກອບດ້ວຍເສັ້ນໄຍສີເຫຼືອງທອງ, ສີແດງຊາດ (Cinnabar), ສີມ່ວງ, ສີຂາວໄຂ່ມຸກ, ແລະ ສີດຳເຫຼື້ອມ ເຊິ່ງເປັນສັນຍາລັກແຫ່ງ <strong>ຄວາມສົມບູນພູນສຸກຂອງ 5 ທາດ</strong> ຈາກແກນໂລກ.</li>
          </ul>
        </div>
      </section>

      <!-- Section 4: Water Mouth Lock -->
      <section class="space-y-3">
        <h2 class="doc-h2 text-lg sm:text-xl font-bold text-amber-900 border-l-4 border-amber-600 pl-3">4. ປາກນ້ຳລັອກ (Shui Kou Suo 水口锁)</h2>
        <p class="doc-p text-justify leading-relaxed text-xs">
          ໃນເຮືອນຢິນ, <strong>"ສາຍນ້ຳໄຫຼເຂົ້າຕ້ອງເຫັນໄດ້ຊັດເຈນ, ແຕ່ສາຍນ້ຳໄຫຼອອກຕ້ອງມິດຊິດ"</strong> (Ru Shui Yao You Qing, Chu Shui Yao You Suo). ປາກນ້ຳອອກ (Shui Kou) ຕ້ອງມີພູສອງຂ້າງຍື່ນເຂົ້າມາສັບຫວ່າງກັນຄືຟັນປາ ເພື່ອ "ລັອກ" ບໍ່ໃຫ້ຊັບສິນ ແລະ ບາຣະມີຂອງຕະກຸນໄຫຼອອກສູ່ໂລກພາຍນອກໄວເກີນໄປ.
        </p>
      </section>
    </div>
  `
};
