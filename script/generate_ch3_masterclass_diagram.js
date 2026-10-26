const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outputDir = path.resolve(__dirname, '../img/lao');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateMasterclassDiagram() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 760 });

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @font-face {
          font-family: 'Noto Sans Lao';
          src: url('file:///${path.resolve(__dirname, '../asset/fonts/NotoSansLao-Regular.ttf').replace(/\\/g, '/')}') format('truetype');
          font-weight: normal;
        }
        @font-face {
          font-family: 'Noto Serif Lao';
          src: url('file:///${path.resolve(__dirname, '../asset/fonts/NotoSerifLao-Bold.ttf').replace(/\\/g, '/')}') format('truetype');
          font-weight: bold;
        }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          padding: 0;
          width: 1200px;
          height: 760px;
          font-family: 'Noto Sans Lao', system-ui, sans-serif;
          background: #090807;
          color: #f5f5f4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <div style="width: 1160px; height: 720px; background: linear-gradient(145deg, #100f0d 0%, #1a1815 50%, #12100e 100%); border: 2px solid #059669; border-radius: 20px; padding: 20px 26px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 25px 50px rgba(0,0,0,0.9);">
        
        <!-- Top Header Bar -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(5,150,105,0.4); padding-bottom: 10px;">
          <div>
            <div style="font-size: 12px; color: #34d399; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
              MASTERCLASS 1 • 罗盘校准 • 住宅立向 • 九宫飞星挨星排盘详解
            </div>
            <div style="font-size: 20px; font-weight: bold; color: #ecfdf5; font-family: 'Noto Serif Lao'; margin-top: 2px;">
              ວິທີໝຸນເຂັມທິດຫຼົວຜານ, ຜັງເຮືອນສະຖາປັດຕະຍະກຳ ແລະ ການໄລ່ກວ້າດາວເຫີນ (ທ່ານ ສົມສັກ 180.0° Wu / 0.0° Zi)
            </div>
          </div>
          <div style="background: rgba(5,150,105,0.2); border: 1.5px solid #059669; padding: 5px 16px; border-radius: 24px; font-size: 11.5px; color: #6ee7b7; font-weight: bold; display: flex; align-items: center; gap: 8px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 8px #10b981;"></span>
            ອົງສາປອດໄພ: ເຈີ້ງຊ່ຽນ (Zheng Xian 100%)
          </div>
        </div>

        <!-- 3-Panel Synchronized Core Visual -->
        <div style="display: grid; grid-template-columns: 1fr 1.08fr 0.92fr; gap: 16px; flex: 1; margin: 12px 0; align-items: stretch;">
          
          <!-- PANEL 1: LUOPAN ROTATION & CALIBRATION -->
          <div style="background: #070908; border: 1.5px solid #064e3b; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #065f46; padding-bottom: 6px;">
              <span style="font-size: 12px; font-weight: bold; color: #6ee7b7;">❶ ວິທີໝຸນ & ອ່ານຄ່າຫຼົວຜານ</span>
              <span style="font-size: 10px; background: #064e3b; color: #a7f3d0; padding: 2px 7px; border-radius: 10px;">天池合线</span>
            </div>

            <!-- Compass Dial SVG -->
            <div style="display: flex; justify-content: center; align-items: center; margin: 6px 0;">
              <svg width="320" height="320" viewBox="0 0 320 320">
                <!-- Outer Square Wooden Base Plate (Di Pan 地盘) -->
                <rect x="10" y="10" width="300" height="300" rx="16" fill="#1c1917" stroke="#b45309" stroke-width="3" />
                <rect x="18" y="18" width="284" height="284" rx="12" fill="#292524" stroke="#78350f" stroke-width="1.5" />
                
                <!-- Corner Level Vials & Alignment Screws -->
                <circle cx="36" cy="36" r="10" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
                <circle cx="36" cy="36" r="4" fill="#ffffff" opacity="0.8" />
                <text x="36" y="58" fill="#7dd3fc" font-size="8" text-anchor="middle">ລະດັບນ້ຳ</text>
                
                <!-- Inner Rotating Brass Dial (Tian Pan 天盘) -->
                <circle cx="160" cy="160" r="132" fill="#451a03" stroke="#f59e0b" stroke-width="2.5" />
                
                <!-- Rotation Arrows (Hand Turning Gesture) -->
                <path d="M 80 45 A 136 136 0 0 1 240 45" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5,4" />
                <polygon points="244,45 235,40 237,49" fill="#38bdf8" />
                <path d="M 240 275 A 136 136 0 0 1 80 275" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="5,4" />
                <polygon points="76,275 85,280 83,271" fill="#38bdf8" />
                <text x="160" y="38" fill="#38bdf8" font-size="9.5" font-weight="bold" text-anchor="middle">↻ ໝຸນຈານວົງມົນດ້ວຍມືສອງເບື້ອງ</text>

                <!-- Ring 1: 360 Degree Dial -->
                <circle cx="160" cy="160" r="120" fill="#78350f" stroke="#fbbf24" stroke-width="1" />
                <!-- 24 Mountain Dial Ring -->
                <circle cx="160" cy="160" r="102" fill="#292524" stroke="#d97706" stroke-width="1.2" />

                <!-- Cardinal 24 Mountain Labels & Wedges -->
                <!-- North (Sitting 坐): Zi 子 (0°), Gui 癸, Chou 丑 -->
                <g transform="translate(160, 160)">
                  <!-- North Zi (0°) -->
                  <text x="0" y="-106" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">0°/360°</text>
                  <text x="0" y="-88" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">子 (Zi)</text>
                  <text x="0" y="-76" fill="#93c5fd" font-size="8" text-anchor="middle">ກວ້າຂຳ ☵</text>
                  
                  <!-- South Wu (180°) -->
                  <text x="0" y="117" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">180°</text>
                  <text x="0" y="94" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">午 (Wu)</text>
                  <text x="0" y="78" fill="#fca5a5" font-size="8" text-anchor="middle">ກວ້າຫຼີ ☲</text>

                  <!-- East Mao (90°) -->
                  <text x="96" y="4" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">卯 90°</text>
                  <!-- West You (270°) -->
                  <text x="-96" y="4" fill="#fbbf24" font-size="10.5" font-weight="bold" text-anchor="middle">酉 270°</text>

                  <!-- Adjacent Mountains for Context -->
                  <text x="-48" y="-86" fill="#a8a29e" font-size="9" text-anchor="middle">壬</text>
                  <text x="48" y="-86" fill="#a8a29e" font-size="9" text-anchor="middle">癸</text>
                  <text x="-48" y="92" fill="#a8a29e" font-size="9" text-anchor="middle">丙</text>
                  <text x="48" y="92" fill="#a8a29e" font-size="9" text-anchor="middle">丁</text>
                </g>

                <!-- Ring 3: Central Heaven Pond (Tian Chi 天池) -->
                <circle cx="160" cy="160" r="54" fill="#09090b" stroke="#f59e0b" stroke-width="2.5" />
                
                <!-- Red Meridian Line in Pool (海底红线) with South Tiger Tail Two Dots -->
                <line x1="160" y1="112" x2="160" y2="208" stroke="#ef4444" stroke-width="1.8" />
                <circle cx="156" cy="198" r="2.5" fill="#ef4444" />
                <circle cx="164" cy="198" r="2.5" fill="#ef4444" />
                <text x="160" y="125" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">N ເໜືອ</text>
                <text x="160" y="206" fill="#ef4444" font-size="8" text-anchor="middle">ຈຸດໄຂ່ປາ 2 ຈຸດ</text>

                <!-- Magnetic Needle (เข็มแม่เหล็ก ชี้เหนือ-ใต้) -->
                <!-- Needle points North (sharp tip) and South (ring tail) -->
                <polygon points="160,118 156,160 164,160" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" />
                <polygon points="160,202 156,160 164,160" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
                <circle cx="160" cy="160" r="5" fill="#fbbf24" stroke="#ffffff" stroke-width="1.5" />

                <!-- Red Nylon Crosshairs (十字天心红线) -->
                <line x1="20" y1="160" x2="300" y2="160" stroke="#dc2626" stroke-width="1.6" opacity="0.85" />
                <line x1="160" y1="20" x2="160" y2="300" stroke="#dc2626" stroke-width="2.2" />

                <!-- Facing Pointer Badge -->
                <rect x="95" y="280" width="130" height="26" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.2" />
                <text x="160" y="297" fill="#fef2f2" font-size="10" font-weight="bold" text-anchor="middle">ທິດຫັນໜ້າ: 180.0° (ອູ່ 午)</text>
              </svg>
            </div>

            <!-- Panel 1 Footer Explanations -->
            <div style="background: rgba(6,78,59,0.3); border-left: 3px solid #10b981; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #d1fae5;">
              • <strong>ຂັ້ນຕອນໝຸນ:</strong> ວາງຖານໄມ້ສາກແນບປະຕູ ໝຸນຈານທອງຈົນປາຍເຂັມແດງ-ດຳທັບລົງພໍດີກັບເສັ້ນແດງໃນສະສະຫວັນ.<br>
              • <strong>ເສັ້ນກາກະບາດຕັດ:</strong> ອ່ານຄ່າດ້ານໜ້າ = <strong>180.0°</strong> ຕົກກາງພູເຂົາ ອູ່ (Zheng Xian 100%).
            </div>
          </div>

          <!-- PANEL 2: ARCHITECTURAL HOUSE PLAN & 9 PALACES -->
          <div style="background: #070908; border: 1.5px solid #064e3b; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #065f46; padding-bottom: 6px;">
              <span style="font-size: 12px; font-weight: bold; color: #6ee7b7;">❷ ແປນເຮືອນສະຖາປັດ & ຜັງ 9 ວັງ</span>
              <span style="font-size: 10px; background: #064e3b; color: #a7f3d0; padding: 2px 7px; border-radius: 10px;">九宫飞星叠图</span>
            </div>

            <!-- Architectural House Plan SVG -->
            <div style="display: flex; justify-content: center; align-items: center; margin: 4px 0;">
              <svg width="345" height="325" viewBox="0 0 345 325">
                <!-- Background Grid -->
                <rect width="345" height="325" fill="#0d1117" rx="10" />

                <!-- Sitting Vector (Top North) -->
                <rect x="95" y="6" width="155" height="20" rx="4" fill="#0c4a6e" stroke="#38bdf8" stroke-width="1" />
                <text x="172" y="20" fill="#bae6fd" font-size="9.5" font-weight="bold" text-anchor="middle">ທິດພິງ (Sitting 坐): 0.0° ເໜືອ (子)</text>
                
                <!-- Back Garden & Mountain Rockery -->
                <rect x="35" y="28" width="275" height="25" rx="4" fill="#1c1917" stroke="#44403c" stroke-dasharray="3,3" />
                <text x="172" y="44" fill="#a8a29e" font-size="9" text-anchor="middle">⛰️ ສວນຫີນ &amp; ຕົ້ນໄມ້ສູງ (ດຶງບາຣະມີດາວພູ 9)</text>

                <!-- House Outer Walls (Villa Footprint) -->
                <rect x="35" y="55" width="275" height="180" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2" />
                
                <!-- 9 Palaces Grid Lines (Superimposed) -->
                <line x1="126" y1="55" x2="126" y2="235" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3" />
                <line x1="218" y1="55" x2="218" y2="235" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3" />
                <line x1="35" y1="115" x2="310" y2="115" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3" />
                <line x1="35" y1="175" x2="310" y2="175" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,3" />

                <!-- Room Names & Flying Star Numbers -->
                <!-- 1. North Palace (Rear / Kan): Sitting Star 8, Facing Star 2, Period Star 4 -->
                <rect x="130" y="59" width="84" height="52" fill="#0f172a" rx="4" />
                <text x="172" y="73" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງນອນຫຼັງ</text>
                <text x="142" y="90" fill="#38bdf8" font-size="11" font-weight="bold">7</text>
                <text x="195" y="90" fill="#ef4444" font-size="11" font-weight="bold">2</text>
                <text x="172" y="103" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">4</text>

                <!-- 2. Northwest Palace (Qian): Kitchen -->
                <rect x="39" y="59" width="83" height="52" fill="#0f172a" rx="4" />
                <text x="80" y="73" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງຄົວ (NW)</text>
                <text x="51" y="90" fill="#38bdf8" font-size="11" font-weight="bold">6</text>
                <text x="104" y="90" fill="#ef4444" font-size="11" font-weight="bold">3</text>
                <text x="80" y="103" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">5</text>

                <!-- 3. Northeast Palace (Gen): Bathroom -->
                <rect x="222" y="59" width="84" height="52" fill="#0f172a" rx="4" />
                <text x="264" y="73" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງນ້ຳ (NE)</text>
                <text x="233" y="90" fill="#38bdf8" font-size="11" font-weight="bold">2</text>
                <text x="286" y="90" fill="#ef4444" font-size="11" font-weight="bold">7</text>
                <text x="264" y="103" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">9</text>

                <!-- 4. East Palace (Zhen): Master Bedroom -->
                <rect x="222" y="119" width="84" height="52" fill="#064e3b" rx="4" stroke="#10b981" stroke-width="1" />
                <text x="264" y="133" fill="#a7f3d0" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງນອນໃຫຍ່</text>
                <text x="233" y="150" fill="#38bdf8" font-size="11" font-weight="bold">3</text>
                <text x="286" y="150" fill="#ef4444" font-size="11" font-weight="bold">8</text>
                <text x="264" y="163" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">1</text>

                <!-- 5. Center Palace (Tai Ji / 宅心): Hallway -->
                <rect x="130" y="119" width="84" height="52" fill="#1c1917" rx="4" stroke="#f59e0b" stroke-width="1.5" />
                <text x="172" y="133" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">ໃຈກາງ (ໄທ້ຈີ໊)</text>
                <text x="142" y="150" fill="#38bdf8" font-size="11" font-weight="bold">8</text>
                <text x="195" y="150" fill="#ef4444" font-size="11" font-weight="bold">1</text>
                <text x="172" y="163" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">9</text>

                <!-- 6. West Palace (Dui): Study Room -->
                <rect x="39" y="119" width="83" height="52" fill="#0f172a" rx="4" />
                <text x="80" y="133" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງເຮັດວຽກ</text>
                <text x="51" y="150" fill="#38bdf8" font-size="11" font-weight="bold">1</text>
                <text x="104" y="150" fill="#ef4444" font-size="11" font-weight="bold">6</text>
                <text x="80" y="163" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">8</text>

                <!-- 7. South Palace (Facing / Li / Front Door): Living Room & Main Door -->
                <!-- Double 9 Star Palace: Highlights Auspicious Qi! -->
                <rect x="130" y="179" width="84" height="52" fill="#450a0a" rx="4" stroke="#ef4444" stroke-width="1.8" />
                <text x="172" y="193" fill="#fecaca" font-size="8.5" font-weight="bold" text-anchor="middle">ປະຕູ &amp; ຫ້ອງຮັບແຂກ</text>
                <!-- Mountain 9 & Water 9: Double Purple 9! -->
                <text x="142" y="210" fill="#38bdf8" font-size="13" font-weight="black">9</text>
                <text x="195" y="210" fill="#ef4444" font-size="13" font-weight="black">9</text>
                <text x="172" y="224" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">1</text>
                <text x="172" y="200" fill="#fde68a" font-size="7.5" font-weight="bold" text-anchor="middle">双星到向</text>

                <!-- 8. Southwest Palace (Kun): Guest Room -->
                <rect x="39" y="179" width="83" height="52" fill="#0f172a" rx="4" />
                <text x="80" y="193" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງຮັບແຂກຍ່ອຍ</text>
                <text x="51" y="210" fill="#38bdf8" font-size="11" font-weight="bold">5</text>
                <text x="104" y="210" fill="#ef4444" font-size="11" font-weight="bold">4</text>
                <text x="80" y="224" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">6</text>

                <!-- 9. Southeast Palace (Xun): Foyer / Water feature -->
                <rect x="222" y="179" width="84" height="52" fill="#0f172a" rx="4" />
                <text x="264" y="193" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ມຸມສະນ້ຳພຸ (SE)</text>
                <text x="233" y="210" fill="#38bdf8" font-size="11" font-weight="bold">4</text>
                <text x="286" y="210" fill="#ef4444" font-size="11" font-weight="bold">5</text>
                <text x="264" y="224" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">8</text>

                <!-- Front Main Door Opening Icon -->
                <rect x="150" y="231" width="44" height="8" rx="2" fill="#fbbf24" stroke="#d97706" stroke-width="1.2" />

                <!-- Front Yard & Fountain -->
                <rect x="35" y="243" width="275" height="50" rx="4" fill="#0f172a" stroke="#334155" stroke-dasharray="3,3" />
                <!-- Water Fountain Circle at Left (Dragon side) -->
                <circle cx="95" cy="268" r="14" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
                <text x="95" y="272" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">ນ້ຳພຸ 9</text>
                <text x="200" y="265" fill="#6ee7b7" font-size="9" font-weight="bold">ເດີ່ນຫຍ້າ (Ming Tang 明堂)</text>
                <text x="200" y="278" fill="#94a3b8" font-size="8">ດາວນ້ຳ 9 ຮັບກະແສຊັບໂຊກລາບ</text>

                <!-- Facing Vector (Bottom South) -->
                <line x1="172" y1="235" x2="172" y2="315" stroke="#ef4444" stroke-width="2.5" />
                <polygon points="172,322 167,312 177,312" fill="#ef4444" />
                <rect x="95" y="298" width="155" height="20" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1" />
                <text x="172" y="312" fill="#fef2f2" font-size="9.5" font-weight="bold" text-anchor="middle">ທິດຫັນ (Facing 向): 180.0° ໃຕ້ (午)</text>
              </svg>
            </div>

            <!-- Panel 2 Footer Explanations -->
            <div style="background: rgba(6,78,59,0.3); border-left: 3px solid #10b981; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #d1fae5;">
              • <strong>ດາວຄູ່ຮອດໜ້າ:</strong> ດາວພູ 9 (ສີຟ້າ) ແລະ ດາວນ້ຳ 9 (ສີແດງ) ມາຊຸມນຸມກັນຢູ່ປະຕູໃຫຍ່ທິດໃຕ້ (180.0°).<br>
              • <strong>ການຈັດວາງ:</strong> ວາງນ້ຳພຸໜ້າເຮືອນກະຕຸ້ນດາວນ້ຳ 9; ວາງສວນຫີນຫຼັງເຮືອນຄ້ຳຈຸນດາວພູ 9.
            </div>
          </div>

          <!-- PANEL 3: STEP-BY-STEP GUA & STAR FLIGHT MATH -->
          <div style="background: #070908; border: 1.5px solid #064e3b; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #065f46; padding-bottom: 6px;">
              <span style="font-size: 12px; font-weight: bold; color: #6ee7b7;">❸ ວິທີໄລ່ກວ້າ &amp; ການເຫີນດາວ</span>
              <span style="font-size: 10px; background: #064e3b; color: #a7f3d0; padding: 2px 7px; border-radius: 10px;">三元九运算法</span>
            </div>

            <!-- 5-Step Mathematical Breakdown Cards -->
            <div style="display: flex; flex-direction: column; gap: 7px; margin: 4px 0;">
              
              <!-- Step 1 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
                <div style="color: #38bdf8; font-weight: bold;">ຂັ້ນຕອນ 1: ອ່ານອົງສາ ➔ ຫາ 24 ພູເຂົາ</div>
                <div style="color: #cbd5e1; margin-top: 1px;">
                  • ຫຼົວຜານອ່ານໄດ້: <strong>180.0°</strong> ➔ ພູເຂົາ <strong>ອູ່ (Wu 午)</strong><br>
                  • ທິດພິງຫຼັງກົງກັນຂ້າມ: <strong>0.0°</strong> ➔ ພູເຂົາ <strong>ຈື໋ (Zi 子)</strong>
                </div>
              </div>

              <!-- Step 2 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
                <div style="color: #f59e0b; font-weight: bold;">ຂັ້ນຕອນ 2: ພູເຂົາ ➔ ຫາ 8 ໂປຍກວ້າ (Ba Gua)</div>
                <div style="color: #cbd5e1; margin-top: 1px;">
                  • ພູເຂົາ ອູ່ (180°) ➔ <strong>ກວ້າຫຼີ (Li ☲ / ໃຕ້ / ໄຟ)</strong><br>
                  • ພູເຂົາ ຈື໋ (0°) ➔ <strong>ກວ້າຂຳ (Kan ☵ / ເໜືອ / ນ້ຳ)</strong>
                </div>
              </div>

              <!-- Step 3 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
                <div style="color: #a78bfa; font-weight: bold;">ຂັ້ນຕອນ 3: ຈັດກຸ່ມ 3 ຫງວນ (Three Yuans)</div>
                <div style="color: #cbd5e1; margin-top: 1px;">
                  • ພູ 1 (ຕົ້ນ): ຕີ້ຫງວນ 地元 | ພູ 2 (ກາງ): <strong>ທຽນຫງວນ 天元</strong> | ພູ 3: ເຢິນຫງວນ 人元<br>
                  • ພູເຂົາ ອູ່ (Wu) ແລະ ຈື໋ (Zi) ຄື <strong>"ທຽນຫງວນ (Tian Yuan)"</strong>
                </div>
              </div>

              <!-- Step 4 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
                <div style="color: #f43f5e; font-weight: bold;">ຂັ້ນຕອນ 4: ກຳນົດຂົ້ວ ຢິນ-ຢາງ &amp; ເຫີນດາວ</div>
                <div style="color: #cbd5e1; margin-top: 1px;">
                  • <strong>ດາວນ້ຳໜ້າ:</strong> ຕົກເລກ 1 (Kan). ທຽນຫງວນຂອງ Kan ເປັນ <strong>ຢາງ (+) ➔ ເຫີນໜ້າ</strong>:<br>
                  &nbsp;&nbsp;<span style="color: #fca5a5;">1 ➔ 2 ➔ 3 ➔ 4 ➔ 5 ➔ 6 ➔ 7 ➔ 8 ➔ <strong>[9 ໃຕ້]</strong></span><br>
                  • <strong>ດາວພູຫຼັງ:</strong> ຕົກເລກ 8 (Gen). ທຽນຫງວນຂອງ Gen ເປັນ <strong>ຢິນ (-) ➔ ເຫີນຖອຍ</strong>:<br>
                  &nbsp;&nbsp;<span style="color: #93c5fd;">8 ➔ 7 ➔ 6 ➔ 5 ➔ 4 ➔ 3 ➔ 2 ➔ 1 ➔ <strong>[9 ໃຕ້]</strong></span>
                </div>
              </div>

              <!-- Step 5 -->
              <div style="background: rgba(5,150,105,0.15); border: 1.2px solid #10b981; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
                <div style="color: #34d399; font-weight: bold;">ຂັ້ນຕອນ 5: ຜົນລັບຜັງດາວ (Final Star Chart)</div>
                <div style="color: #ecfdf5; margin-top: 1px;">
                  ➔ ຕົກຮູບແບບ <strong>"ຊວງຊິງຕົ້າວຊຽງ" (Shuang Xing Dao Xiang)</strong>: ດາວ 9 ພູ ແລະ ດາວ 9 ນ້ຳ ມາຊຸມນຸມກັນຢູ່ໜ້າເຮືອນ ສົ່ງຜົນໃຫ້ຮັ່ງມີ ແລະ ສຸຂະພາບດີພ້ອມກັນ!
                </div>
              </div>
            </div>

            <!-- Bottom Formula Note -->
            <div style="background: rgba(245,158,11,0.1); border-left: 3px solid #f59e0b; padding: 5px 9px; border-radius: 0 8px 8px 0; font-size: 9.5px; color: #fde68a;">
              💡 <strong>ຫຼັກການສຽນຄົງ:</strong> ທຸກໆຜັງດາວຕ້ອງໄລ່ຕາມລຳດັບ: ອົງສາ ➔ ພູເຂົາ ➔ ກວ້າ ➔ 3 ຫງວນ ➔ ຢິນ/ຢາງ ➔ ເສັ້ນທາງເຫີນລົ່ວຊູ.
            </div>
          </div>
        </div>

        <!-- Bottom Footer Bar -->
        <div style="background: rgba(5,150,105,0.15); border: 1px solid #059669; border-radius: 10px; padding: 6px 16px; font-size: 11px; color: #ecfdf5; display: flex; justify-content: space-between; align-items: center;">
          <span>🎯 <strong>ສະຫຼຸບມາດຕະຖານວິສະວະກຳ:</strong> ການວັດແທກຫຼົວຜານທີ່ຖືກຕ້ອງ ຕ້ອງປະສານ 3 ອົງປະກອບ: ຈານໝຸນສະສະຫວັນ + ແປນເຮືອນສະຖາປັດ + ການໄລ່ກວ້າ 3 ຫງວນ.</span>
          <span style="font-weight: bold; color: #6ee7b7;">罗盘定针 • 挨星合法 • 富贵双全</span>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'load' });
  await page.waitForTimeout(500);
  const targetPath = path.join(outputDir, 'fig_3_case1_luopan_villa_masterclass.png');
  await page.screenshot({ path: targetPath, type: 'png' });
  console.log('Successfully generated masterclass diagram:', targetPath);
  await browser.close();
}

generateMasterclassDiagram();
