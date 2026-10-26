const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outputDir = path.resolve(__dirname, '../img/lao');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function renderDiagram(page, html, outputPath, width = 1200, height = 760) {
  await page.setViewportSize({ width, height });
  await page.setContent(`
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
          width: ${width}px;
          height: ${height}px;
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
      ${html}
    </body>
    </html>
  `, { waitUntil: 'load' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: outputPath, type: 'png' });
  console.log('Generated Masterclass Diagram:', outputPath);
}

// Common SVG compass generator helper
function generateCompassSvg({
  facingDegree,
  facingMountainText,
  facingGuaText,
  sittingDegree,
  sittingMountainText,
  sittingGuaText,
  needleNorthDegree = 0,
  needleSouthDegree = 180,
  crosshairDegree = 180,
  deviationLabel = "ເຈີ້ງຊ່ຽນ 100%",
  deviationColor = "#10b981",
  badgeBg = "#7f1d1d",
  badgeBorder = "#ef4444",
  badgeText = "ທິດຫັນໜ້າ",
  isKongWang = false,
  targetShiftAngle = null,
  showExtraAngle = false,
  extraAngle = 28.5,
  extraText = "ມຸມບິດໃໝ່: 28.5°"
}) {
  return `
    <svg width="320" height="320" viewBox="0 0 320 320">
      <!-- Outer Square Wooden Base Plate (Di Pan 地盘) -->
      <rect x="10" y="10" width="300" height="300" rx="16" fill="#1c1917" stroke="#b45309" stroke-width="3" />
      <rect x="18" y="18" width="284" height="284" rx="12" fill="#292524" stroke="#78350f" stroke-width="1.5" />
      
      <!-- Corner Level Vials & Alignment Screws -->
      <circle cx="36" cy="36" r="10" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
      <circle cx="36" cy="36" r="4" fill="#ffffff" opacity="0.8" />
      <text x="36" y="58" fill="#7dd3fc" font-size="8" text-anchor="middle">ລະດັບນ້ຳ</text>

      <circle cx="284" cy="36" r="6" fill="#78350f" stroke="#d97706" stroke-width="1" />
      <circle cx="36" cy="284" r="6" fill="#78350f" stroke="#d97706" stroke-width="1" />
      <circle cx="284" cy="284" r="6" fill="#78350f" stroke="#d97706" stroke-width="1" />
      
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
      
      <!-- Ring 2: 24 Mountain Dial Ring -->
      <circle cx="160" cy="160" r="102" fill="#292524" stroke="#d97706" stroke-width="1.2" />

      <!-- Mountain and Degree Labels -->
      <g transform="translate(160, 160)">
        <!-- Top (Sitting / 0°) -->
        <text x="0" y="-106" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">${sittingDegree}</text>
        <text x="0" y="-88" fill="#38bdf8" font-size="11.5" font-weight="bold" text-anchor="middle">${sittingMountainText}</text>
        <text x="0" y="-76" fill="#93c5fd" font-size="8" text-anchor="middle">${sittingGuaText}</text>
        
        <!-- Bottom (Facing / 180° or angled) -->
        <text x="0" y="117" fill="#ef4444" font-size="10.5" font-weight="bold" text-anchor="middle">${facingDegree}</text>
        <text x="0" y="95" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">${facingMountainText}</text>
        <text x="0" y="80" fill="#fca5a5" font-size="8" text-anchor="middle">${facingGuaText}</text>

        <!-- East (90°) & West (270°) -->
        <text x="96" y="4" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">卯 90°</text>
        <text x="-96" y="4" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">酉 270°</text>
      </g>

      <!-- Ring 3: Central Heaven Pond (Tian Chi 天池) -->
      <circle cx="160" cy="160" r="54" fill="#09090b" stroke="#f59e0b" stroke-width="2.5" />
      
      <!-- Red Meridian Line in Pool (海底红线) with South Tiger Tail Two Dots -->
      <line x1="160" y1="112" x2="160" y2="208" stroke="#ef4444" stroke-width="1.8" />
      <circle cx="156" cy="198" r="2.5" fill="#ef4444" />
      <circle cx="164" cy="198" r="2.5" fill="#ef4444" />
      <text x="160" y="125" fill="#ef4444" font-size="8.5" font-weight="bold" text-anchor="middle">N ເໜືອ</text>
      <text x="160" y="206" fill="#ef4444" font-size="7.5" text-anchor="middle">ຈຸດໄຂ່ປາ 2 ຈຸດ</text>

      <!-- Magnetic Needle -->
      <polygon points="160,118 156,160 164,160" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" />
      <polygon points="160,202 156,160 164,160" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" />
      <circle cx="160" cy="160" r="5" fill="#fbbf24" stroke="#ffffff" stroke-width="1.5" />

      <!-- Red Crosshair (十字天心红线) -->
      <line x1="20" y1="160" x2="300" y2="160" stroke="#dc2626" stroke-width="1.5" opacity="0.85" />
      <line x1="160" y1="20" x2="160" y2="300" stroke="#dc2626" stroke-width="2.2" />

      ${isKongWang ? `
        <!-- Warning Skull / Kong Wang Indicator -->
        <g transform="translate(160, 220)">
          <rect x="-45" y="-12" width="90" height="24" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
          <text x="0" y="4" fill="#fef2f2" font-size="9" font-weight="bold" text-anchor="middle">☠️ ມະຫາຂົງຫວາງ</text>
        </g>
      ` : ''}

      ${showExtraAngle ? `
        <!-- Extra Pivot Angle Line -->
        <line x1="160" y1="160" x2="200" y2="280" stroke="#10b981" stroke-width="2.5" stroke-dasharray="4,3" />
        <circle cx="200" cy="280" r="4" fill="#10b981" />
        <rect x="180" y="260" width="115" height="20" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1" />
        <text x="237" y="274" fill="#a7f3d0" font-size="8.5" font-weight="bold" text-anchor="middle">${extraText}</text>
      ` : ''}

      <!-- Facing Pointer Badge -->
      <rect x="80" y="280" width="160" height="26" rx="6" fill="${badgeBg}" stroke="${badgeBorder}" stroke-width="1.2" />
      <text x="160" y="297" fill="#fef2f2" font-size="10" font-weight="bold" text-anchor="middle">${badgeText}</text>
    </svg>
  `;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // =========================================================================
  // 1. MASTERCLASS CASE 2: SHOPHOUSE & PARTY WALL (ທ່ານນາງ ມະນີວອນ 201.0° / 21.0°)
  // =========================================================================
  const case2Html = `
    <div style="width: 1160px; height: 720px; background: linear-gradient(145deg, #100f0d 0%, #1c1815 50%, #12100e 100%); border: 2px solid #d97706; border-radius: 20px; padding: 20px 26px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 25px 50px rgba(0,0,0,0.9);">
      
      <!-- Top Header Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(217,119,6,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 12px; color: #f59e0b; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            MASTERCLASS 2 • 商铺界墙拉线 • 替卦挨星排盘 • 罗盘分金详解
          </div>
          <div style="font-size: 20px; font-weight: bold; color: #fef3c7; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ວິທີໝຸນເຂັມທິດ, ແປນຕຶກແຖວຮ້ານຄຳ ແລະ ການໄລ່ຜັງດາວປ່ຽນແທນ (ທ່ານນາງ ມະນີວອນ 201.0° Ding / 21.0° Gui)
          </div>
        </div>
        <div style="background: rgba(217,119,6,0.2); border: 1.5px solid #d97706; padding: 5px 16px; border-radius: 24px; font-size: 11.5px; color: #fde68a; font-weight: bold; display: flex; align-items: center; gap: 8px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; box-shadow: 0 0 8px #f59e0b;"></span>
          ອົງສາບ່ຽງ: ຈຽນສຽນ (Jian Xian Ti Gua 替卦)
        </div>
      </div>

      <!-- 3-Panel Synchronized Core Visual -->
      <div style="display: grid; grid-template-columns: 1fr 1.08fr 0.92fr; gap: 16px; flex: 1; margin: 12px 0; align-items: stretch;">
        
        <!-- PANEL 1: LUOPAN ROTATION & CALIBRATION -->
        <div style="background: #070908; border: 1.5px solid #78350f; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #92400e; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #fde68a;">❶ ວິທີໝຸນ & ອ່ານຄ່າຫຼົວຜານ</span>
            <span style="font-size: 10px; background: #78350f; color: #fef3c7; padding: 2px 7px; border-radius: 10px;">拉线避磁</span>
          </div>

          <!-- Compass Dial SVG -->
          <div style="display: flex; justify-content: center; align-items: center; margin: 6px 0;">
            ${generateCompassSvg({
              facingDegree: "201.0°",
              facingMountainText: "丁 (Ding 195°)",
              facingGuaText: "ບ່ຽງ 未 +6.0°",
              sittingDegree: "21.0°",
              sittingMountainText: "癸 (Gui 15°)",
              sittingGuaText: "ບ່ຽງ 丑 +6.0°",
              badgeBg: "#78350f",
              badgeBorder: "#d97706",
              badgeText: "ທິດຫັນ: 201.0° (ຕິ່ງ 丁 ບ່ຽງ ໝຸຍ)"
            })}
          </div>

          <!-- Explanations -->
          <div style="background: rgba(120,53,15,0.3); border-left: 3px solid #f59e0b; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #fef3c7;">
            • <strong>ດຶງເຊືອກຂະໜານ:</strong> ດຶງແນວເຊືອກຈາກກຳແພງແບ່ງອອກມາວັດທາງຍ່າງ 3.0 m ຫຼົບປະຕູມ້ວນເຫຼັກ.<br>
            • <strong>ອ່ານຄ່າໄດ້ 201.0°:</strong> ແກນກາງພູເຂົາ ຕິ່ງ = 195.0°, ບ່ຽງເບນ +6.0° ຕົກເຂດຈຽນສຽນ ຕ້ອງໃຊ້ດາວປ່ຽນແທນ.
          </div>
        </div>

        <!-- PANEL 2: ARCHITECTURAL FLOORPLAN & 9 PALACES -->
        <div style="background: #070908; border: 1.5px solid #78350f; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #92400e; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #fde68a;">❷ ແປນຮ້ານຄຳ & ຜັງ 9 ວັງ (ຕີ້ກວ້າ)</span>
            <span style="font-size: 10px; background: #78350f; color: #fef3c7; padding: 2px 7px; border-radius: 10px;">商铺功能布局</span>
          </div>

          <!-- Floorplan SVG -->
          <div style="display: flex; justify-content: center; align-items: center; margin: 4px 0;">
            <svg width="345" height="325" viewBox="0 0 345 325">
              <rect width="345" height="325" fill="#0d1117" rx="10" />

              <!-- Sitting Vector (Top North) -->
              <rect x="95" y="6" width="155" height="20" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
              <text x="172" y="20" fill="#bae6fd" font-size="9.5" font-weight="bold" text-anchor="middle">ທິດພິງ (Sitting 坐): 21.0° ກຸ້ຍ (癸)</text>

              <!-- Neighbor Wall / Party Wall String -->
              <line x1="38" y1="35" x2="38" y2="295" stroke="#fbbf24" stroke-width="2" stroke-dasharray="5,3" />
              <circle cx="38" cy="35" r="3.5" fill="#fbbf24" />
              <circle cx="38" cy="295" r="3.5" fill="#fbbf24" />
              <text x="32" y="165" fill="#fbbf24" font-size="8" text-anchor="middle" transform="rotate(-90 32 165)">ແນວເຊືອກຂະໜານ Party Wall</text>

              <!-- Shophouse Outer Perimeter -->
              <rect x="48" y="32" width="250" height="225" rx="5" fill="#1c1917" stroke="#d97706" stroke-width="2" />
              
              <!-- 9-Palace Grid Lines -->
              <line x1="131" y1="32" x2="131" y2="257" stroke="#b45309" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="214" y1="32" x2="214" y2="257" stroke="#b45309" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="48" y1="107" x2="298" y2="107" stroke="#b45309" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="48" y1="182" x2="298" y2="182" stroke="#b45309" stroke-width="1.2" stroke-dasharray="3,3" />

              <!-- Room 1: North (Rear): Gold Workshop & Safe Storage -->
              <rect x="135" y="36" width="75" height="67" fill="#0f172a" rx="4" />
              <text x="172" y="52" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ສາງ & ຊ່າງທອງ</text>
              <text x="145" y="70" fill="#38bdf8" font-size="11" font-weight="bold">9</text>
              <text x="195" y="70" fill="#ef4444" font-size="11" font-weight="bold">1</text>
              <text x="172" y="85" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">8</text>

              <!-- Room 2: Northwest: Staircase to Living -->
              <rect x="52" y="36" width="75" height="67" fill="#0f172a" rx="4" />
              <text x="89" y="52" fill="#94a3b8" font-size="8.5" text-anchor="middle">ຂັ້ນໄດຂຶ້ນຊັ້ນ 2</text>
              <text x="62" y="70" fill="#38bdf8" font-size="10">8</text>
              <text x="112" y="70" fill="#ef4444" font-size="10">2</text>
              <text x="89" y="85" fill="#fbbf24" font-size="10" text-anchor="middle">9</text>

              <!-- Room 3: Northeast: Restroom -->
              <rect x="218" y="36" width="76" height="67" fill="#0f172a" rx="4" />
              <text x="256" y="52" fill="#94a3b8" font-size="8.5" text-anchor="middle">ຫ້ອງນ້ຳ (NE)</text>
              <text x="228" y="70" fill="#38bdf8" font-size="10">4</text>
              <text x="278" y="70" fill="#ef4444" font-size="10">6</text>
              <text x="256" y="85" fill="#fbbf24" font-size="10" text-anchor="middle">4</text>

              <!-- Room 4: East: Safe Box & VIP Vault ❷ -->
              <rect x="218" y="111" width="76" height="67" fill="#064e3b" rx="4" stroke="#10b981" stroke-width="1.8" />
              <text x="256" y="127" fill="#a7f3d0" font-size="8.5" font-weight="bold" text-anchor="middle">ຕູ້ນິລະໄພ ❷</text>
              <text x="228" y="146" fill="#38bdf8" font-size="11" font-weight="bold">8</text>
              <text x="278" y="146" fill="#ef4444" font-size="11" font-weight="bold">9</text>
              <text x="256" y="160" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">3</text>
              <text x="256" y="172" fill="#34d399" font-size="7.5" font-weight="bold" text-anchor="middle">ວັງດາວ 8-9 ໂຊກ</text>

              <!-- Room 5: Center: Main Trading Hall -->
              <rect x="135" y="111" width="75" height="67" fill="#1c1917" rx="4" stroke="#d97706" stroke-width="1" />
              <text x="172" y="127" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງໂຖງກາງ</text>
              <text x="145" y="146" fill="#38bdf8" font-size="11" font-weight="bold">1</text>
              <text x="195" y="146" fill="#ef4444" font-size="11" font-weight="bold">8</text>
              <text x="172" y="160" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">9</text>

              <!-- Room 6: West: Glass Display Shelves -->
              <rect x="52" y="111" width="75" height="67" fill="#0f172a" rx="4" />
              <text x="89" y="127" fill="#cbd5e1" font-size="8.5" text-anchor="middle">ຕູ້ໂຊຮອງ</text>
              <text x="62" y="146" fill="#38bdf8" font-size="10">6</text>
              <text x="112" y="146" fill="#ef4444" font-size="10">4</text>
              <text x="89" y="160" fill="#fbbf24" font-size="10" text-anchor="middle">5</text>

              <!-- Room 7: South (Front): Main Glass Gold Counters -->
              <rect x="135" y="186" width="75" height="67" fill="#451a03" rx="4" stroke="#f59e0b" stroke-width="1.8" />
              <text x="172" y="202" fill="#fef3c7" font-size="8.5" font-weight="bold" text-anchor="middle">ຕູ້ໂຊຄຳຫຼັກ</text>
              <text x="145" y="221" fill="#38bdf8" font-size="12" font-weight="bold">8</text>
              <text x="195" y="221" fill="#ef4444" font-size="12" font-weight="bold">9</text>
              <text x="172" y="235" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">1</text>
              <text x="172" y="247" fill="#fde68a" font-size="7.5" font-weight="bold" text-anchor="middle">替卦财星到门</text>

              <!-- Room 8 & 9: SW & SE Display Windows -->
              <rect x="52" y="186" width="75" height="67" fill="#0f172a" rx="4" />
              <text x="89" y="202" fill="#94a3b8" font-size="8.5" text-anchor="middle">ຕູ້ໂຊແກ້ວ (SW)</text>
              <text x="62" y="221" fill="#38bdf8" font-size="10">2</text>
              <text x="112" y="221" fill="#ef4444" font-size="10">7</text>
              <text x="89" y="235" fill="#fbbf24" font-size="10" text-anchor="middle">7</text>

              <rect x="218" y="186" width="76" height="67" fill="#0f172a" rx="4" />
              <text x="256" y="202" fill="#94a3b8" font-size="8.5" text-anchor="middle">ຕູ້ໂຊແກ້ວ (SE)</text>
              <text x="228" y="221" fill="#38bdf8" font-size="10">3</text>
              <text x="278" y="221" fill="#ef4444" font-size="10">5</text>
              <text x="256" y="235" fill="#fbbf24" font-size="10" text-anchor="middle">2</text>

              <!-- Steel Rolling Door Barrier -->
              <rect x="48" y="254" width="250" height="7" fill="#7f1d1d" stroke="#ef4444" stroke-width="1" />
              <text x="172" y="260" fill="#fca5a5" font-size="7.5" text-anchor="middle">⚠️ ປະຕູມ້ວນເຫຼັກ (ລົບກວນແມ່ເຫຼັກ)</text>

              <!-- Sidewalk 3.0m Zone & Measurement Station ❸ -->
              <rect x="48" y="264" width="250" height="35" rx="4" fill="#0f172a" stroke="#475569" stroke-dasharray="2,2" />
              <circle cx="172" cy="281" r="11" fill="#10b981" stroke="#34d399" stroke-width="1.5" />
              <text x="172" y="285" fill="#064e3b" font-size="9.5" font-weight="bold" text-anchor="middle">❸</text>
              <text x="235" y="285" fill="#a7f3d0" font-size="8.5" font-weight="bold">ຈຸດວັດແທກ 3.0 m ກາງແຈ້ງ</text>

              <!-- Facing Vector (Bottom South) -->
              <line x1="172" y1="262" x2="172" y2="315" stroke="#ef4444" stroke-width="2.5" />
              <polygon points="172,322 167,312 177,312" fill="#ef4444" />
              <rect x="95" y="298" width="155" height="20" rx="4" fill="#78350f" stroke="#d97706" stroke-width="1" />
              <text x="172" y="312" fill="#fef3c7" font-size="9.5" font-weight="bold" text-anchor="middle">ທິດຫັນ: 201.0° ຕິ່ງ (丁 替卦)</text>
            </svg>
          </div>

          <!-- Explanations -->
          <div style="background: rgba(120,53,15,0.3); border-left: 3px solid #f59e0b; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #fef3c7;">
            • <strong>ຕູ້ນິລະໄພ &amp; ໂຕະເກັບເງິນ:</strong> ຍ້າຍມາວາງໃນວັງດາວ 8-9 ໂຊກລາບ ປ້ອງກັນເງິນຄຳຮົ່ວໄຫຼ.<br>
            • <strong>ຜັງດາວປ່ຽນແທນ:</strong> ດາວ 1 ປ່ຽນແທນດາວ 2 ເຮັດໃຫ້ດາວນ້ຳ 9 ເຫີນມາວາບຢູ່ປະຕູໃຫຍ່ ດຶງດູດລູກຄ້າ!
          </div>
        </div>

        <!-- PANEL 3: STEP-BY-STEP GUA & TI GUA ALGORITHM -->
        <div style="background: #070908; border: 1.5px solid #78350f; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #92400e; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #fde68a;">❸ ວິທີໄລ່ກວ້າ &amp; ສູດດາວປ່ຽນແທນ</span>
            <span style="font-size: 10px; background: #78350f; color: #fef3c7; padding: 2px 7px; border-radius: 10px;">替卦挨星秘诀</span>
          </div>

          <!-- 5-Step Cards -->
          <div style="display: flex; flex-direction: column; gap: 7px; margin: 4px 0;">
            <!-- Step 1 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #292524; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #38bdf8; font-weight: bold;">ຂັ້ນຕອນ 1: ອ່ານອົງສາ ➔ ພິສູດເຂດຈຽນສຽນ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ຫຼົວຜານອ່ານໄດ້: <strong>201.0°</strong> (ແກນກາງ ຕິ່ງ = 195.0°)<br>
                • ມຸມບ່ຽງ: <strong>Δ = +6.0° ≥ 3.0°</strong> ➔ ຕົກ <strong>"ຈຽນສຽນ (Jian Xian)"</strong> ຕ້ອງໃຊ້ດາວປ່ຽນແທນ!
              </div>
            </div>

            <!-- Step 2 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #292524; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #f59e0b; font-weight: bold;">ຂັ້ນຕອນ 2: ພູເຂົາ ➔ ຫາ 8 ໂປຍກວ້າ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ທິດຫັນ ຕິ່ງ (Ding) ➔ <strong>ກວ້າຫຼີ (Li ☲ / ໃຕ້)</strong><br>
                • ທິດພິງ ກຸ້ຍ (Gui) ➔ <strong>ກວ້າຂຳ (Kan ☵ / ເໜືອ)</strong>
              </div>
            </div>

            <!-- Step 3 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #292524; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #a78bfa; font-weight: bold;">ຂັ້ນຕອນ 3: ຈັດກຸ່ມ 3 ຫງວນ (Three Yuans)</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ພູ ຕິ່ງ (Ding) ແລະ ກຸ້ຍ (Gui) ຄື <strong>"ເຢິນຫງວນ (Ren Yuan 人元)"</strong><br>
                • ທິດບ່ຽງໄປຫາ ໝຸຍ (Wei) ເຊິ່ງເປັນ <strong>ຕີ້ຫງວນ (Di Yuan)</strong>.
              </div>
            </div>

            <!-- Step 4 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #292524; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #f43f5e; font-weight: bold;">ຂັ້ນຕອນ 4: ສູດຄຳກອນຕີ້ກວ້າ (Ti Gua Verse)</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ຄຳກອນບູຮານ: <em>"坤申子辰癸九，酉辛丑艮丙一，乾亥午甲寅四，坎艮卯乙未二..."</em><br>
                • ດາວ 2 ຖືກປ່ຽນແທນດ້ວຍ <strong>ດາວ 1 (Tan Lang 贪狼)</strong>!<br>
                • ດາວ 1 ຢູ່ Kan (Gui ເປັນ ຢິນ -) ➔ <strong>ເຫີນຖອຍ (Fly Backward)</strong>!
              </div>
            </div>

            <!-- Step 5 -->
            <div style="background: rgba(217,119,6,0.15); border: 1.2px solid #f59e0b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #fde68a; font-weight: bold;">ຂັ້ນຕອນ 5: ຜົນລັບຜັງດາວ &amp; ຈຸດຕັ້ງຊັບ</div>
              <div style="color: #fef3c7; margin-top: 1px;">
                ➔ ດາວນ້ຳ 9 ເຫີນມາວາບຢູ່ປະຕູໜ້າຮ້ານ ແລະ ດາວ 8-9 ມາສະຖິດຢູ່ຕູ້ນິລະໄພ ເຮັດໃຫ້ຮ້ານຂາຍຄຳປ້ອງກັນເງິນຮົ່ວໄຫຼ ແລະ ທຸລະກິດຮຸ່ງເຮືອງ!
              </div>
            </div>
          </div>

          <!-- Bottom Formula Note -->
          <div style="background: rgba(245,158,11,0.1); border-left: 3px solid #f59e0b; padding: 5px 9px; border-radius: 0 8px 8px 0; font-size: 9.5px; color: #fde68a;">
            💡 <strong>ກົດເກນຕີ້ກວ້າ:</strong> ເມື່ອບ່ຽງເກີນ 3.0° ຫ້າມໃຊ້ຜັງປົກກະຕິເດັດຂາດ! ຕ້ອງໃຊ້ດາວປ່ຽນແທນຕາມສູດບູຮານເທົ່ານັ້ນ.
          </div>
        </div>
      </div>

      <!-- Bottom Footer Bar -->
      <div style="background: rgba(217,119,6,0.15); border: 1px solid #d97706; border-radius: 10px; padding: 6px 16px; font-size: 11px; color: #fef3c7; display: flex; justify-content: space-between; align-items: center;">
        <span>🎯 <strong>ສະຫຼຸບມາດຕະຖານ:</strong> ຕຶກແຖວປະຕູມ້ວນເຫຼັກ ຕ້ອງດຶງເຊືອກຂະໜານ 3.0 m ແລະ ຖ້າບ່ຽງເກີນ 3° ຕ້ອງໃຊ້ດາວປ່ຽນແທນ Ti Gua.</span>
        <span style="font-weight: bold; color: #f59e0b;">替卦挨星 • 逢偏必变 • 财库安稳</span>
      </div>
    </div>
  `;
  await renderDiagram(page, case2Html, path.join(outputDir, 'fig_3_case2_shophouse.png'));

  // =========================================================================
  // 2. MASTERCLASS CASE 3: CONDO FACING & MEKONG QI (ທ່ານ ຄຳພັນ 270.0° / 90.0°)
  // =========================================================================
  const case3Html = `
    <div style="width: 1160px; height: 720px; background: linear-gradient(145deg, #0c1520 0%, #112233 50%, #0d1722 100%); border: 2px solid #0284c7; border-radius: 20px; padding: 20px 26px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 25px 50px rgba(0,0,0,0.9);">
      
      <!-- Top Header Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(2,132,199,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 12px; color: #38bdf8; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            MASTERCLASS 3 • 高层公寓纳气 • 阳气立向 • 酉山卯向飞星排盘
          </div>
          <div style="font-size: 20px; font-weight: bold; color: #f0f9ff; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ວິທີໝຸນເຂັມທິດ, ແປນຫ້ອງຄອນໂດຊັ້ນ 8 ແລະ ການໄລ່ກວ້າດາວເຫີນຮັບຊີ່ແມ່ນ້ຳ (ທ່ານ ຄຳພັນ 270.0° You / 90.0° Mao)
          </div>
        </div>
        <div style="background: rgba(2,132,199,0.2); border: 1.5px solid #0284c7; padding: 5px 16px; border-radius: 24px; font-size: 11.5px; color: #7dd3fc; font-weight: bold; display: flex; align-items: center; gap: 8px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #38bdf8; box-shadow: 0 0 8px #38bdf8;"></span>
          ການຕັດສິນທິດຫັນ: ຢາງຊີ່ (Yang Qi Facing 100%)
        </div>
      </div>

      <!-- 3-Panel Synchronized Core Visual -->
      <div style="display: grid; grid-template-columns: 1fr 1.08fr 0.92fr; gap: 16px; flex: 1; margin: 12px 0; align-items: stretch;">
        
        <!-- PANEL 1: LUOPAN ROTATION & CALIBRATION -->
        <div style="background: #070b10; border: 1.5px solid #075985; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #0369a1; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #7dd3fc;">❶ ວິທີໝຸນ & ອ່ານຄ່າຫຼົວຜານ</span>
            <span style="font-size: 10px; background: #0c4a6e; color: #bae6fd; padding: 2px 7px; border-radius: 10px;">以光定针</span>
          </div>

          <!-- Compass Dial SVG -->
          <div style="display: flex; justify-content: center; align-items: center; margin: 6px 0;">
            ${generateCompassSvg({
              facingDegree: "270.0°",
              facingMountainText: "酉 (You)",
              facingGuaText: "ກວ້າຕຸ້ຍ ☱ (West)",
              sittingDegree: "90.0°",
              sittingMountainText: "卯 (Mao)",
              sittingGuaText: "ກວ້າເຈິ່ນ ☳ (East)",
              badgeBg: "#0c4a6e",
              badgeBorder: "#0284c7",
              badgeText: "ທິດຫັນໜ້າ: 270.0° (ຢິວ 酉 / West)"
            })}
          </div>

          <!-- Explanations -->
          <div style="background: rgba(12,74,110,0.3); border-left: 3px solid #38bdf8; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #e0f2fe;">
            • <strong>ວັດແທກ 2 ຂັ້ນຕອນ:</strong> ຂັ້ນ 1 ວັດແກນຕຶກຊັ້ນລຸ່ມ, ຂັ້ນ 2 ວັດແນວລະບຽງແວ່ນເລື່ອນຊັ້ນ 8.<br>
            • <strong>ຕັດສິນທິດຫັນ:</strong> 270.0° ຕົກກາງພູເຂົາ ຢິວ (You) ເຈີ້ງຊ່ຽນບໍລິສຸດ 100%.
          </div>
        </div>

        <!-- PANEL 2: ARCHITECTURAL FLOORPLAN & 9 PALACES -->
        <div style="background: #070b10; border: 1.5px solid #075985; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #0369a1; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #7dd3fc;">❷ ແປນຄອນໂດຊັ້ນ 8 & ຜັງ 9 ວັງ</span>
            <span style="font-size: 10px; background: #0c4a6e; color: #bae6fd; padding: 2px 7px; border-radius: 10px;">阳台纳气叠图</span>
          </div>

          <!-- Floorplan SVG -->
          <div style="display: flex; justify-content: center; align-items: center; margin: 4px 0;">
            <svg width="345" height="325" viewBox="0 0 345 325">
              <rect width="345" height="325" fill="#0d1117" rx="10" />

              <!-- Dark Corridor (North / Yin Qi) -->
              <rect x="35" y="6" width="275" height="25" rx="3" fill="#1e1b4b" stroke="#4338ca" stroke-dasharray="3,3" />
              <text x="172" y="22" fill="#a5b4fc" font-size="8.5" text-anchor="middle">ທາງຍ່າງມືດ (Dark Corridor / Yin Qi)</text>

              <!-- Entry Door ❶ (NOT Facing) -->
              <rect x="150" y="27" width="44" height="7" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.2" />
              <circle cx="172" cy="40" r="8" fill="#ef4444" />
              <text x="172" y="44" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">❌</text>
              <text x="172" y="56" fill="#fca5a5" font-size="7.5" font-weight="bold" text-anchor="middle">ປະຕູຫ້ອງ ❶ (ບໍ່ແມ່ນທິດຫັນ)</text>

              <!-- Condo Suite Footprint -->
              <rect x="35" y="60" width="275" height="180" rx="6" fill="#1e293b" stroke="#0284c7" stroke-width="2" />
              
              <!-- 9-Palace Grid Lines -->
              <line x1="126" y1="60" x2="126" y2="240" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="218" y1="60" x2="218" y2="240" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="35" y1="120" x2="310" y2="120" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="35" y1="180" x2="310" y2="180" stroke="#0284c7" stroke-width="1.2" stroke-dasharray="3,3" />

              <!-- Room 1: North: Entry Foyer -->
              <rect x="130" y="64" width="84" height="52" fill="#0f172a" rx="4" />
              <text x="172" y="78" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ໂຖງທາງເຂົ້າ</text>
              <text x="142" y="96" fill="#38bdf8" font-size="11" font-weight="bold">8</text>
              <text x="195" y="96" fill="#ef4444" font-size="11" font-weight="bold">1</text>
              <text x="172" y="109" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">4</text>

              <!-- Room 2: Northwest: Kitchen & Dining -->
              <rect x="39" y="64" width="83" height="52" fill="#0f172a" rx="4" />
              <text x="80" y="78" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງຄົວ (NW)</text>
              <text x="51" y="96" fill="#38bdf8" font-size="11" font-weight="bold">7</text>
              <text x="104" y="96" fill="#ef4444" font-size="11" font-weight="bold">2</text>
              <text x="80" y="109" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">5</text>

              <!-- Room 3: Northeast: Guest Bath -->
              <rect x="222" y="64" width="84" height="52" fill="#0f172a" rx="4" />
              <text x="264" y="78" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງນ້ຳ (NE)</text>
              <text x="233" y="96" fill="#38bdf8" font-size="11" font-weight="bold">3</text>
              <text x="286" y="96" fill="#ef4444" font-size="11" font-weight="bold">6</text>
              <text x="264" y="109" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">9</text>

              <!-- Room 4: East (Sitting 90° Mao): Master Bedroom -->
              <rect x="222" y="124" width="84" height="52" fill="#0c4a6e" rx="4" stroke="#38bdf8" stroke-width="1.5" />
              <text x="264" y="138" fill="#bae6fd" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງນອນໃຫຍ່</text>
              <text x="233" y="156" fill="#38bdf8" font-size="11" font-weight="bold">4</text>
              <text x="286" y="156" fill="#ef4444" font-size="11" font-weight="bold">5</text>
              <text x="264" y="169" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">1</text>
              <text x="264" y="174" fill="#7dd3fc" font-size="7.5" text-anchor="middle">ທິດພິງ 90° 卯</text>

              <!-- Room 5: Center: Living Center -->
              <rect x="130" y="124" width="84" height="52" fill="#1c1917" rx="4" />
              <text x="172" y="138" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">ໃຈກາງໄທ້ຈີ໊</text>
              <text x="142" y="156" fill="#38bdf8" font-size="11" font-weight="bold">9</text>
              <text x="195" y="156" fill="#ef4444" font-size="11" font-weight="bold">9</text>
              <text x="172" y="169" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">2</text>

              <!-- Room 6: West (Facing 270° You): Balcony Living & Desk ❸ -->
              <rect x="39" y="124" width="83" height="52" fill="#064e3b" rx="4" stroke="#10b981" stroke-width="1.8" />
              <text x="80" y="138" fill="#a7f3d0" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງຮັບແຂກ & ໂຕະ</text>
              <text x="51" y="156" fill="#38bdf8" font-size="11" font-weight="bold">5</text>
              <text x="104" y="156" fill="#ef4444" font-size="11" font-weight="bold">4</text>
              <text x="80" y="169" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">8</text>
              <text x="80" y="174" fill="#34d399" font-size="7.5" text-anchor="middle">ໂຕະດຶງດູດຊີ່ ❸</text>

              <!-- Room 7, 8, 9 -->
              <rect x="130" y="184" width="84" height="52" fill="#0f172a" rx="4" />
              <text x="172" y="198" fill="#cbd5e1" font-size="8.5" text-anchor="middle">ມຸມນັ່ງຫຼິ້ນ</text>
              <text x="142" y="216" fill="#38bdf8" font-size="10">2</text>
              <text x="195" y="216" fill="#ef4444" font-size="10">7</text>
              <text x="172" y="229" fill="#fbbf24" font-size="10" text-anchor="middle">6</text>

              <rect x="39" y="184" width="83" height="52" fill="#0f172a" rx="4" />
              <text x="80" y="198" fill="#cbd5e1" font-size="8.5" text-anchor="middle">ລະບຽງເສີມ</text>
              <text x="51" y="216" fill="#38bdf8" font-size="10">1</text>
              <text x="104" y="216" fill="#ef4444" font-size="10">8</text>
              <text x="80" y="229" fill="#fbbf24" font-size="10" text-anchor="middle">7</text>

              <rect x="222" y="184" width="84" height="52" fill="#0f172a" rx="4" />
              <text x="264" y="198" fill="#cbd5e1" font-size="8.5" text-anchor="middle">ຫ້ອງແຕ່ງຕົວ</text>
              <text x="233" y="216" fill="#38bdf8" font-size="10">6</text>
              <text x="286" y="216" fill="#ef4444" font-size="10">3</text>
              <text x="264" y="229" fill="#fbbf24" font-size="10" text-anchor="middle">3</text>

              <!-- Full-width Glass Balcony Door ❷ -->
              <rect x="35" y="238" width="275" height="8" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
              
              <!-- Balcony Deck overlooking Mekong River -->
              <rect x="35" y="246" width="275" height="42" rx="4" fill="#0c4a6e" stroke="#0284c7" stroke-width="1.2" />
              <circle cx="95" cy="265" r="10" fill="#10b981" />
              <text x="95" y="269" fill="#ffffff" font-size="9.5" font-weight="bold" text-anchor="middle">✔️</text>
              <text x="175" y="263" fill="#a7f3d0" font-size="9" font-weight="bold">❷ ທິດຫັນໜ້າແທ້ຈິງ (Facing: 270.0° 酉)</text>
              <text x="175" y="276" fill="#7dd3fc" font-size="8">ແວ່ນເລື່ອນລະບຽງ ຮັບແສງ &amp; ລົມແມ່ນ້ຳຂອງ 100%</text>

              <!-- River Mekong Waves -->
              <path d="M 40 298 Q 100 292 160 298 T 280 298 T 310 298" fill="none" stroke="#38bdf8" stroke-width="2" />
              <path d="M 40 306 Q 100 300 160 306 T 280 306 T 310 306" fill="none" stroke="#0284c7" stroke-width="1.5" />
              <text x="172" y="316" fill="#7dd3fc" font-size="8.5" font-weight="bold" text-anchor="middle">🌊 ກະແສຊີ່ແມ່ນ້ຳຂອງ (Mekong Virtual Water)</text>
            </svg>
          </div>

          <!-- Explanations -->
          <div style="background: rgba(12,74,110,0.3); border-left: 3px solid #38bdf8; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #e0f2fe;">
            • <strong>ກົດເກນຢາງຊີ່:</strong> ປະຕູຕິດທາງຍ່າງມືດເປັນ Yin Qi; ລະບຽງເປີດຮັບແສງ & ລົມແມ່ນ້ຳເປັນ Yang Qi ຈຶ່ງເປັນທິດຫັນ.<br>
            • <strong>ວາງໂຕະເຮັດວຽກ:</strong> ຫັນໜ້າຫາລະບຽງເພື່ອດຶງດູດກະແສຊັບດາວ 9 ມ່ວງຈາກແມ່ນ້ຳຂອງ!
          </div>
        </div>

        <!-- PANEL 3: STEP-BY-STEP GUA & HIGH-RISE ALGORITHM -->
        <div style="background: #070b10; border: 1.5px solid #075985; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #0369a1; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #7dd3fc;">❸ ວິທີໄລ່ກວ້າ &amp; ກົດເກນຄອນໂດ</span>
            <span style="font-size: 10px; background: #0c4a6e; color: #bae6fd; padding: 2px 7px; border-radius: 10px;">高楼阳气定局</span>
          </div>

          <!-- 5-Step Cards -->
          <div style="display: flex; flex-direction: column; gap: 7px; margin: 4px 0;">
            <!-- Step 1 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #38bdf8; font-weight: bold;">ຂັ້ນຕອນ 1: ຕັດສິນທິດຫັນ ➔ ຍຶດຖືລະບຽງ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ປະຕູຫ້ອງ (ທາງຍ່າງມືດ) ❌ <strong>ບໍ່ນັບເປັນທິດຫັນ</strong><br>
                • ລະບຽງແວ່ນເລື່ອນ <strong>270.0° (You 酉)</strong> ✔️ ຮັບແສງ & ລົມ 100% ➔ ເປັນທິດຫັນໜ້າແທ້!
              </div>
            </div>

            <!-- Step 2 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #f59e0b; font-weight: bold;">ຂັ້ນຕອນ 2: ພູເຂົາ ➔ ຫາ 8 ໂປຍກວ້າ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ທິດຫັນ ຢິວ (270°) ➔ <strong>ກວ້າຕຸ້ຍ (Dui ☱ / ຕາເວັນຕົກ)</strong><br>
                • ທິດພິງ ເມົາ (90°) ➔ <strong>ກວ້າເຈິ່ນ (Zhen ☳ / ຕາເວັນອອກ)</strong>
              </div>
            </div>

            <!-- Step 3 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #a78bfa; font-weight: bold;">ຂັ້ນຕອນ 3: ຈັດກຸ່ມ 3 ຫງວນ (Three Yuans)</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ພູເຂົາ ຢິວ (You) ແລະ ເມົາ (Mao) ແມ່ນ <strong>"ທຽນຫງວນ (Tian Yuan 天元)"</strong> (ແກນກາງຂອງກວ້າ).
              </div>
            </div>

            <!-- Step 4 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #f43f5e; font-weight: bold;">ຂັ້ນຕອນ 4: ກຳນົດຂົ້ວ ຢິນ-ຢາງ &amp; ເຫີນດາວ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ດາວປະຈຳຍຸກ 9 ຕົກໃຈກາງ. ດາວນ້ຳຕາເວັນຕົກຄື 5.<br>
                • 5 ຍຶດຕາມ Dui Tian Yuan (You) ເປັນ <strong>ຢິນ (-) ➔ ເຫີນຖອຍ (Fly Backward)</strong>!<br>
                • ດາວພູຕາເວັນອອກ (Zhen) ເປັນ <strong>ຢິນ (-) ➔ ເຫີນຖອຍ</strong>!
              </div>
            </div>

            <!-- Step 5 -->
            <div style="background: rgba(2,132,199,0.15); border: 1.2px solid #0284c7; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #7dd3fc; font-weight: bold;">ຂັ້ນຕອນ 5: ຜົນລັບຜັງດາວ &amp; ວິວແມ່ນ້ຳຂອງ</div>
              <div style="color: #f0f9ff; margin-top: 1px;">
                ➔ ຈັດວາງໂຕະເຮັດວຽກຫັນໜ້າຫາລະບຽງ ເປີດຮັບແສງ ແລະ ລົມແມ່ນ້ຳຂອງ ຊ່ວຍດຶງດູດກະແສຊັບດາວ 9 ມ່ວງ ໃຫ້ຈະເລີນກ້າວໜ້າ!
              </div>
            </div>
          </div>

          <!-- Bottom Formula Note -->
          <div style="background: rgba(14,165,233,0.1); border-left: 3px solid #0284c7; padding: 5px 9px; border-radius: 0 8px 8px 0; font-size: 9.5px; color: #bae6fd;">
            💡 <strong>ກົດເກນຢາງຊີ່:</strong> "以向为阳，以背为阴" ຄອນໂດຊັ້ນສູງຍຶດຖືແສງສະຫວ່າງ ແລະ ລົມໃຫຍ່ເປັນທິດຫັນໜ້າສະເໝີ!
          </div>
        </div>
      </div>

      <!-- Bottom Footer Bar -->
      <div style="background: rgba(2,132,199,0.15); border: 1px solid #0284c7; border-radius: 10px; padding: 6px 16px; font-size: 11px; color: #f0f9ff; display: flex; justify-content: space-between; align-items: center;">
        <span>🎯 <strong>ສະຫຼຸບມາດຕະຖານ:</strong> ຫ້າມເອົາປະຕູຫ້ອງຄອນໂດຕິດທາງຍ່າງມືດເປັນທິດຫັນໜ້າ ເພາະຈະເຮັດໃຫ້ຜັງດາວປີ້ນ 180°!</span>
        <span style="font-weight: bold; color: #38bdf8;">高楼以光为向 • 临水纳财 • 步步高升</span>
      </div>
    </div>
  `;
  await renderDiagram(page, case3Html, path.join(outputDir, 'fig_3_case3_condo.png'));

  // =========================================================================
  // 3. MASTERCLASS CASE 4: FACTORY CENTROID & QI MOUTH (ທ່ານ ບຸນມີ 135.0° / 315.0°)
  // =========================================================================
  const case4Html = `
    <div style="width: 1160px; height: 720px; background: linear-gradient(145deg, #120e1f 0%, #1c1533 50%, #130f21 100%); border: 2px solid #8b5cf6; border-radius: 20px; padding: 20px 26px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 25px 50px rgba(0,0,0,0.9);">
      
      <!-- Top Header Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(139,92,246,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 12px; color: #a78bfa; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            MASTERCLASS 4 • 工业厂房立极 • 几何重心 • 巽山乾向气口定局
          </div>
          <div style="font-size: 20px; font-weight: bold; color: #faf5ff; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ວິທີໝຸນເຂັມທິດ, ແປນໂຮງງານ 5,000 m² ແລະ ການໄລ່ກວ້າດາວເຫີນຫາປະຕູຊີ່ (ທ່ານ ບຸນມີ 135.0° Xun / 315.0° Qian)
          </div>
        </div>
        <div style="background: rgba(139,92,246,0.2); border: 1.5px solid #8b5cf6; padding: 5px 16px; border-radius: 24px; font-size: 11.5px; color: #ddd6fe; font-weight: bold; display: flex; align-items: center; gap: 8px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #a78bfa; box-shadow: 0 0 8px #a78bfa;"></span>
          ການຫາຈຸດສູນກາງ: ໄທ້ຈີ໊ (Geometric Centroid 100%)
        </div>
      </div>

      <!-- 3-Panel Synchronized Core Visual -->
      <div style="display: grid; grid-template-columns: 1fr 1.08fr 0.92fr; gap: 16px; flex: 1; margin: 12px 0; align-items: stretch;">
        
        <!-- PANEL 1: LUOPAN ROTATION & CALIBRATION -->
        <div style="background: #090712; border: 1.5px solid #5b21b6; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #6d28d9; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #ddd6fe;">❶ ວິທີໝຸນ & ອ່ານຄ່າຫຼົວຜານ</span>
            <span style="font-size: 10px; background: #4c1d95; color: #ede9fe; padding: 2px 7px; border-radius: 10px;">避电测针</span>
          </div>

          <!-- Compass Dial SVG -->
          <div style="display: flex; justify-content: center; align-items: center; margin: 6px 0;">
            ${generateCompassSvg({
              facingDegree: "135.0°",
              facingMountainText: "巽 (Xun)",
              facingGuaText: "ກວ້າຊຸ່ນ ☴ (SE)",
              sittingDegree: "315.0°",
              sittingMountainText: "乾 (Qian)",
              sittingGuaText: "ກວ້າຂຽນ ☰ (NW)",
              badgeBg: "#4c1d95",
              badgeBorder: "#8b5cf6",
              badgeText: "ທິດຫັນ: 135.0° (ຊຸ່ນ 巽 / SE)"
            })}
          </div>

          <!-- Explanations -->
          <div style="background: rgba(76,29,149,0.3); border-left: 3px solid #a78bfa; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #ede9fe;">
            • <strong>ວັດແທກຫ່າງ 15 ແມັດ:</strong> ອອກມາວັດແທກນອກຮົ້ວໂຮງງານ ຫຼົບສະໜາມໄຟຟ້າແຮງສູງ & ມໍເຕີ້ໜັກ.<br>
            • <strong>ອ່ານຄ່າໄດ້ 135.0°:</strong> ເຂັມນິ້ງສະຫງົບ ຕົກກາງພູເຂົາ ຊຸ່ນ (Xun) ເຈີ້ງຊ່ຽນບໍລິສຸດ 100%.
          </div>
        </div>

        <!-- PANEL 2: ARCHITECTURAL FACTORY PLAN & 9 PALACES -->
        <div style="background: #090712; border: 1.5px solid #5b21b6; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #6d28d9; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #ddd6fe;">❷ ແປນໂຮງງານ 5,000 m² & ຜັງ 9 ວັງ</span>
            <span style="font-size: 10px; background: #4c1d95; color: #ede9fe; padding: 2px 7px; border-radius: 10px;">厂房空间立极</span>
          </div>

          <!-- Factory Plan SVG -->
          <div style="display: flex; justify-content: center; align-items: center; margin: 4px 0;">
            <svg width="345" height="325" viewBox="0 0 345 325">
              <rect width="345" height="325" fill="#0d1117" rx="10" />

              <!-- Sitting Vector (Top NW 315°) -->
              <rect x="75" y="6" width="195" height="20" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1" />
              <text x="172" y="20" fill="#ddd6fe" font-size="9.5" font-weight="bold" text-anchor="middle">ທິດພິງ (Sitting 坐): 315.0° ພາຍັບ (乾)</text>

              <!-- Factory Boundary 5,000 m² -->
              <rect x="35" y="32" width="275" height="230" rx="6" fill="#1e1b4b" stroke="#6366f1" stroke-width="2" />
              
              <!-- 9-Palace Grid Lines -->
              <line x1="126" y1="32" x2="126" y2="262" stroke="#8b5cf6" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="218" y1="32" x2="218" y2="262" stroke="#8b5cf6" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="35" y1="108" x2="310" y2="108" stroke="#8b5cf6" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="35" y1="185" x2="310" y2="185" stroke="#8b5cf6" stroke-width="1.2" stroke-dasharray="3,3" />

              <!-- CAD Geometric Diagonals for Centroid Tai Ji ❶ -->
              <line x1="35" y1="32" x2="310" y2="262" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,2" />
              <line x1="310" y1="32" x2="35" y2="262" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,2" />
              <circle cx="172" cy="147" r="12" fill="#f59e0b" stroke="#fef3c7" stroke-width="2" />
              <text x="172" y="151" fill="#451a03" font-size="10" font-weight="bold" text-anchor="middle">❶</text>
              <text x="172" y="170" fill="#fde68a" font-size="7.5" font-weight="bold" text-anchor="middle">ຈຸດສູນກາງໄທ້ຈີ໊</text>

              <!-- Heavy Machinery Red Noise Zone (North / Kan) -->
              <circle cx="80" cy="147" r="32" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3,3" />
              <text x="80" y="145" fill="#fca5a5" font-size="8" font-weight="bold" text-anchor="middle">⚙️ ເຄື່ອງຈັກໜັກ</text>
              <text x="80" y="157" fill="#ef4444" font-size="7" text-anchor="middle">(ສະກົດດາວ 5 ເຫຼືອງ)</text>

              <!-- Administrative & Accounting Office ❹ (SE / Auspicious 9-1) -->
              <rect x="222" y="189" width="84" height="69" fill="#064e3b" rx="4" stroke="#10b981" stroke-width="1.8" />
              <text x="264" y="206" fill="#a7f3d0" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງການບັນຊີ ❹</text>
              <text x="233" y="226" fill="#38bdf8" font-size="11" font-weight="bold">9</text>
              <text x="286" y="226" fill="#ef4444" font-size="11" font-weight="bold">1</text>
              <text x="264" y="240" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">2</text>
              <text x="264" y="252" fill="#34d399" font-size="7.5" font-weight="bold" text-anchor="middle">ວັງດາວໂຊກ 9-1</text>

              <!-- Main Truck Logistics Gate SE 135° ❷ (Qi Mouth) -->
              <rect x="235" y="258" width="58" height="10" fill="#10b981" stroke="#34d399" stroke-width="2" rx="2" />
              <circle cx="264" cy="278" r="10" fill="#10b981" />
              <text x="264" y="282" fill="#064e3b" font-size="9.5" font-weight="bold" text-anchor="middle">❷</text>
              <text x="185" y="282" fill="#6ee7b7" font-size="8.5" font-weight="bold">ປະຕູຊີ່ຫຼັກ SE 135° (ລົດບັນທຸກ 90%)</text>

              <!-- External Measurement Station 15m Outside ❸ -->
              <circle cx="65" cy="285" r="10" fill="#a855f7" stroke="#d8b4fe" stroke-width="1.5" />
              <text x="65" y="289" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">❸</text>
              <text x="65" y="302" fill="#d8b4fe" font-size="7.5" font-weight="bold" text-anchor="middle">ຈຸດວັດ 15 m ປອດໄຟຟ້າ</text>

              <!-- Facing Vector (Bottom SE 135°) -->
              <line x1="264" y1="262" x2="264" y2="315" stroke="#ef4444" stroke-width="2.5" />
              <polygon points="264,322 259,312 269,312" fill="#ef4444" />
              <rect x="155" y="302" width="150" height="18" rx="4" fill="#4c1d95" stroke="#8b5cf6" stroke-width="1" />
              <text x="230" y="315" fill="#faf5ff" font-size="9" font-weight="bold" text-anchor="middle">ທິດຫັນ: 135.0° ຊຸ່ນ (巽 SE)</text>
            </svg>
          </div>

          <!-- Explanations -->
          <div style="background: rgba(76,29,149,0.3); border-left: 3px solid #a78bfa; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #ede9fe;">
            • <strong>ຫາຈຸດໄທ້ຈີ໊:</strong> ໃຊ້ແຜນຜັງ CAD ຕັດເສັ້ນທະແຍງມຸມ ຫາຈຸດສູນກາງມວນສານທີ່ແທ້ຈິງ.<br>
            • <strong>ປະຕູຊີ່ຫຼັກ:</strong> ປະຕູ SE ມີລົດບັນທຸກສັນຈອນ 90% ເປັນປາກຮັບຊີ່ໃຫຍ່ ດຶງດູດໂຊກລາບເຂົ້າຫ້ອງການບັນຊີ!
          </div>
        </div>

        <!-- PANEL 3: STEP-BY-STEP GUA & FACTORY ALGORITHM -->
        <div style="background: #090712; border: 1.5px solid #5b21b6; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #6d28d9; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #ddd6fe;">❸ ວິທີໄລ່ກວ້າ &amp; ກົດເກນໂຮງງານ</span>
            <span style="font-size: 10px; background: #4c1d95; color: #ede9fe; padding: 2px 7px; border-radius: 10px;">动处为气口</span>
          </div>

          <!-- 5-Step Cards -->
          <div style="display: flex; flex-direction: column; gap: 7px; margin: 4px 0;">
            <!-- Step 1 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #38bdf8; font-weight: bold;">ຂັ້ນຕອນ 1: ຫາຈຸດໄທ້ຈີ໊ ➔ ກຳນົດປະຕູຊີ່ຫຼັກ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ຕັດເສັ້ນທະແຍງມຸມ CAD ➔ <strong>ຈຸດສູນກາງໄທ້ຈີ໊ (Tai Ji Centroid)</strong><br>
                • ປະຕູ SE (ລົດບັນທຸກ 90%) <strong>135.0° (Xun 巽)</strong> ➔ ປາກຮັບຊີ່ຫຼັກ (Qi Mouth).
              </div>
            </div>

            <!-- Step 2 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #f59e0b; font-weight: bold;">ຂັ້ນຕອນ 2: ພູເຂົາ ➔ ຫາ 8 ໂປຍກວ້າ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ທິດຫັນ ຊຸ່ນ (135°) ➔ <strong>ກວ້າຊຸ່ນ (Xun ☴ / ອາຄະເນ)</strong><br>
                • ທິດພິງ ຂຽນ (315°) ➔ <strong>ກວ້າຂຽນ (Qian ☰ / ພາຍັບ)</strong>
              </div>
            </div>

            <!-- Step 3 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #a78bfa; font-weight: bold;">ຂັ້ນຕອນ 3: ຈັດກຸ່ມ 3 ຫງວນ (Three Yuans)</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ພູເຂົາ ຊຸ່ນ (Xun) ແລະ ຂຽນ (Qian) ແມ່ນ <strong>"ທຽນຫງວນ (Tian Yuan 天元)"</strong> (ແກນກາງ).
              </div>
            </div>

            <!-- Step 4 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #1e293b; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #f43f5e; font-weight: bold;">ຂັ້ນຕອນ 4: ກຳນົດຂົ້ວ ຢິນ-ຢາງ &amp; ເຫີນດາວ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ດາວປະຈຳຍຸກ 9 ຕົກໃຈກາງ. ດາວນ້ຳອາຄະເນຄື 1 (Kan).<br>
                • Kan Tian Yuan ເປັນ <strong>ຢາງ (+) ➔ ເຫີນໜ້າ (Fly Forward)</strong>!<br>
                • ດາວພູພາຍັບຄື 8 (Gen). Gen Tian Yuan ເປັນ <strong>ຢິນ (-) ➔ ເຫີນຖອຍ</strong>!
              </div>
            </div>

            <!-- Step 5 -->
            <div style="background: rgba(139,92,246,0.15); border: 1.2px solid #8b5cf6; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #ddd6fe; font-weight: bold;">ຂັ້ນຕອນ 5: ຜົນລັບຜັງດາວ &amp; ການຈັດວາງພາຍໃນ</div>
              <div style="color: #faf5ff; margin-top: 1px;">
                ➔ ດາວ 9-1 ເຫີນມາວາບຢູ່ຫ້ອງການບໍລິຫານ ເຮັດໃຫ້ກຳໄລເພີ່ມຂຶ້ນຢ່າງວ່ອງໄວ; ເຄື່ອງຈັກໜັກຖືກຍ້າຍໄປວັງດາວ 5 ເຫຼືອງ ເພື່ອສະກົດຂົ່ມພະລັງຮ້າຍ!
              </div>
            </div>
          </div>

          <!-- Bottom Formula Note -->
          <div style="background: rgba(109,40,217,0.1); border-left: 3px solid #8b5cf6; padding: 5px 9px; border-radius: 0 8px 8px 0; font-size: 9.5px; color: #ede9fe;">
            💡 <strong>ກົດເກນໂຮງງານ:</strong> "动处为气口" ບ່ອນໃດລົດສິນຄ້າສັນຈອນຫຼາຍທີ່ສຸດ ບ່ອນນັ້ນຄືປະຕູຊີ່ໃຫຍ່ ຫ້າມວັດແທກໃກ້ໝໍ້ແປງໄຟຟ້າ!
          </div>
        </div>
      </div>

      <!-- Bottom Footer Bar -->
      <div style="background: rgba(139,92,246,0.15); border: 1px solid #8b5cf6; border-radius: 10px; padding: 6px 16px; font-size: 11px; color: #faf5ff; display: flex; justify-content: space-between; align-items: center;">
        <span>🎯 <strong>ສະຫຼຸບມາດຕະຖານ:</strong> ໂຮງງານອຸດສາຫະກຳໃຫຍ່ ຕ້ອງຊອກຫາຈຸດໄທ້ຈີ໊ດ້ວຍ CAD ແລະ ອອກມາວັດແທກກາງແຈ້ງ 15 m.</span>
        <span style="font-weight: bold; color: #a78bfa;">厂区立极 • 避电定针 • 财源广进</span>
      </div>
    </div>
  `;
  await renderDiagram(page, case4Html, path.join(outputDir, 'fig_3_case4_factory.png'));

  // =========================================================================
  // 4. MASTERCLASS CASE 5: DOOR TILTING KONG WANG REMEDY (ທ່ານ ດາວອນ 22.5° → 28.5°)
  // =========================================================================
  const case5Html = `
    <div style="width: 1160px; height: 720px; background: linear-gradient(145deg, #1c0d0d 0%, #291212 50%, #170a0a 100%); border: 2px solid #ef4444; border-radius: 20px; padding: 20px 26px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 25px 50px rgba(0,0,0,0.9);">
      
      <!-- Top Header Bar -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(239,68,68,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 12px; color: #f87171; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            MASTERCLASS 5 • 大空亡线化解 • 门楼转角罗盘较正 • 丑山未向飞星排盘
          </div>
          <div style="font-size: 20px; font-weight: bold; color: #fef2f2; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ວິທີໝຸນເຂັມທິດ, ແປນບິດມຸມປະຕູ ແລະ ການໄລ່ກວ້າດາວເຫີນແກ້ໄຂເສັ້ນຂົງຫວາງ (ທ່ານ ດາວອນ 22.5° → 28.5° Chou)
          </div>
        </div>
        <div style="background: rgba(239,68,68,0.2); border: 1.5px solid #ef4444; padding: 5px 16px; border-radius: 24px; font-size: 11.5px; color: #fca5a5; font-weight: bold; display: flex; align-items: center; gap: 8px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #ef4444; box-shadow: 0 0 8px #ef4444;"></span>
          ແກ້ໄຂເສັ້ນຂົງຫວາງ: ບິດປະຕູ +6.0° (Cured 100%)
        </div>
      </div>

      <!-- 3-Panel Synchronized Core Visual -->
      <div style="display: grid; grid-template-columns: 1fr 1.08fr 0.92fr; gap: 16px; flex: 1; margin: 12px 0; align-items: stretch;">
        
        <!-- PANEL 1: LUOPAN ROTATION & CALIBRATION (BEFORE VS AFTER PIVOT) -->
        <div style="background: #0d0606; border: 1.5px solid #991b1b; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #b91c1c; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #fca5a5;">❶ ວິທີໝຸນ & ອ່ານຄ່າຫຼົວຜານ (ບິດແກ້ໄຂ)</span>
            <span style="font-size: 10px; background: #7f1d1d; color: #fecaca; padding: 2px 7px; border-radius: 10px;">转角较针</span>
          </div>

          <!-- Compass Dial SVG showing Kong Wang and Shift -->
          <div style="display: flex; justify-content: center; align-items: center; margin: 6px 0;">
            ${generateCompassSvg({
              facingDegree: "22.5° ➔ 28.5°",
              facingMountainText: "癸丑界 ➔ 丑 (Chou)",
              facingGuaText: "ແບ່ງ Kan ☵ / Gen ☶",
              sittingDegree: "202.5° ➔ 208.5°",
              sittingMountainText: "丁未界 ➔ 未 (Wei)",
              sittingGuaText: "ແບ່ງ Li ☲ / Kun ☷",
              isKongWang: true,
              showExtraAngle: true,
              extraAngle: 28.5,
              extraText: "ບິດ +6.0° ➔ 28.5° ໂຈ່ວ",
              badgeBg: "#064e3b",
              badgeBorder: "#10b981",
              badgeText: "ມຸມໃໝ່ປອດໄພ: 28.5° (ໂຈ່ວ 丑 100%)"
            })}
          </div>

          <!-- Explanations -->
          <div style="background: rgba(127,29,29,0.3); border-left: 3px solid #ef4444; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #fecaca;">
            • <strong>ແກນເດີມ 22.5°:</strong> ຕົກເສັ້ນແບ່ງລະຫວ່າງ ກຸ້ຍ-ໂຈ່ວ ເປັນມະຫາຂົງຫວາງ (ເສັ້ນສູນສິ້ນ).<br>
            • <strong>ໝຸນຈານຫຼົວຜານບິດ +6.0°:</strong> ເຂັມທິດເຄື່ອນເຂົ້າສູ່ <strong>28.5° ພູເຂົາໂຈ່ວ</strong> ຕົກເຂດເຈີ້ງຊ່ຽນປອດໄພ 100%!
          </div>
        </div>

        <!-- PANEL 2: ARCHITECTURAL FLOORPLAN WITH ANGLED THRESHOLD -->
        <div style="background: #0d0606; border: 1.5px solid #991b1b; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #b91c1c; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #fca5a5;">❷ ແປນເຮືອນບິດປະຕູ & ຜັງ 9 ວັງໃໝ່</span>
            <span style="font-size: 10px; background: #7f1d1d; color: #fecaca; padding: 2px 7px; border-radius: 10px;">门楼转角立案</span>
          </div>

          <!-- Floorplan SVG with Angled Door -->
          <div style="display: flex; justify-content: center; align-items: center; margin: 4px 0;">
            <svg width="345" height="325" viewBox="0 0 345 325">
              <rect width="345" height="325" fill="#0d1117" rx="10" />

              <!-- Rear Mountain Garden (Southwest 208.5° Wei) -->
              <rect x="35" y="6" width="275" height="24" rx="4" fill="#1c1917" stroke="#44403c" stroke-dasharray="3,3" />
              <text x="172" y="22" fill="#a8a29e" font-size="8.5" text-anchor="middle">⛰️ ສວນຫີນພູເຂົາ 1.8 m (ຄ້ຳຈຸນດາວພູ 9)</text>

              <!-- Villa Footprint (Original Walls Fixed at 22.5°) -->
              <rect x="35" y="34" width="275" height="200" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.8" />
              
              <!-- 9-Palace Grid Lines -->
              <line x1="126" y1="34" x2="126" y2="234" stroke="#7f1d1d" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="218" y1="34" x2="218" y2="234" stroke="#7f1d1d" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="35" y1="100" x2="310" y2="100" stroke="#7f1d1d" stroke-width="1.2" stroke-dasharray="3,3" />
              <line x1="35" y1="167" x2="310" y2="167" stroke="#7f1d1d" stroke-width="1.2" stroke-dasharray="3,3" />

              <!-- Original Axis Line 22.5° (Deadly) -->
              <line x1="172" y1="34" x2="172" y2="245" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="5,3" />
              <text x="145" y="125" fill="#fca5a5" font-size="7.5" transform="rotate(-90 145 125)">ແກນເດີມ 22.5° (ມະຫາຂົງຫວາງ ☠️)</text>

              <!-- Rear Sitting 208.5° Wei -->
              <rect x="130" y="38" width="84" height="58" fill="#064e3b" rx="4" stroke="#10b981" stroke-width="1.2" />
              <text x="172" y="52" fill="#a7f3d0" font-size="8.5" font-weight="bold" text-anchor="middle">ຫ້ອງນອນໃຫຍ່</text>
              <text x="142" y="70" fill="#38bdf8" font-size="11" font-weight="bold">9</text>
              <text x="195" y="70" fill="#ef4444" font-size="11" font-weight="bold">2</text>
              <text x="172" y="84" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">2</text>

              <!-- Center Palace -->
              <rect x="130" y="104" width="84" height="58" fill="#1c1917" rx="4" />
              <text x="172" y="118" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">ໃຈກາງໄທ້ຈີ໊</text>
              <text x="142" y="136" fill="#38bdf8" font-size="11" font-weight="bold">2</text>
              <text x="195" y="136" fill="#ef4444" font-size="11" font-weight="bold">9</text>
              <text x="172" y="150" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">9</text>

              <!-- Front Foyer with Angled Door Pivot ❷ -->
              <rect x="130" y="171" width="84" height="58" fill="#0f172a" rx="4" />
              <text x="172" y="185" fill="#cbd5e1" font-size="8.5" font-weight="bold" text-anchor="middle">ໂຖງໜ້າເຮືອນ</text>
              <text x="142" y="203" fill="#38bdf8" font-size="11" font-weight="bold">7</text>
              <text x="195" y="203" fill="#ef4444" font-size="11" font-weight="bold">9</text>
              <text x="172" y="217" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">7</text>

              <!-- ANGLED DOOR PORTAL (+6.0° Pivot, Setback 15.7cm) -->
              <g transform="translate(172, 234) rotate(6)">
                <!-- Original Wall opening -->
                <rect x="-35" y="-3" width="70" height="6" fill="#44403c" rx="1" />
                <!-- Angled Door Jamb & Door Leaf -->
                <rect x="-35" y="-5" width="70" height="10" rx="2" fill="#10b981" stroke="#34d399" stroke-width="2" />
                <line x1="-35" y1="0" x2="35" y2="0" stroke="#ffffff" stroke-width="1.5" />
                <!-- Arc showing shift -->
                <path d="M 35 0 A 35 35 0 0 1 33 8" fill="none" stroke="#fbbf24" stroke-width="1.5" />
              </g>

              <rect x="220" y="226" width="115" height="24" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.2" />
              <text x="277" y="238" fill="#a7f3d0" font-size="8" font-weight="bold" text-anchor="middle">ບິດວົງກົບ +6.0° ❷</text>
              <text x="277" y="247" fill="#6ee7b7" font-size="7.5" text-anchor="middle">(ຖອຍຮົ້ນ 15.7 cm)</text>

              <!-- Circulating Water Urn Fountain outside Angled Door -->
              <circle cx="130" cy="265" r="14" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
              <text x="130" y="269" fill="#ffffff" font-size="8.5" font-weight="bold" text-anchor="middle">ອ່າງນ້ຳ 9</text>
              <text x="195" y="265" fill="#6ee7b7" font-size="8.5" font-weight="bold">ອ່າງນ້ຳລົ້ນເຄື່ອນໄຫວ</text>
              <text x="195" y="277" fill="#94a3b8" font-size="7.5">ດຶງດູດດາວນ້ຳ 9 ມ່ວງເຂົ້າປະຕູໃໝ່</text>

              <!-- New Facing Vector (28.5° Chou) -->
              <line x1="172" y1="240" x2="195" y2="310" stroke="#10b981" stroke-width="2.5" />
              <polygon points="198,318 190,308 200,306" fill="#10b981" />
              <rect x="120" y="298" width="175" height="20" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1" />
              <text x="207" y="312" fill="#a7f3d0" font-size="9.5" font-weight="bold" text-anchor="middle">ທິດຫັນໃໝ່: 28.5° (ໂຈ່ວ 丑 / Gen ☶)</text>
            </svg>
          </div>

          <!-- Explanations -->
          <div style="background: rgba(6,78,59,0.3); border-left: 3px solid #10b981; padding: 6px 10px; border-radius: 0 8px 8px 0; font-size: 10px; line-height: 1.45; color: #d1fae5;">
            • <strong>ບິດວົງກົບປະຕູ:</strong> ບິດມຸມ +6.0° (ຖອຍຮົ້ນ 15.7 cm) ປ່ຽນທິດຫັນຈາກ 22.5° ເປັນ 28.5° ພູເຂົາໂຈ່ວ.<br>
            • <strong>ວາງອ່າງນ້ຳລົ້ນ:</strong> ຕັ້ງອ່າງນ້ຳໜ້າປະຕູໃໝ່ຮັບດາວນ້ຳ 9; ສ້າງສວນຫີນ 1.8 m ຫຼັງເຮືອນຄ້ຳຈຸນດາວພູ!
          </div>
        </div>

        <!-- PANEL 3: STEP-BY-STEP GUA & DOOR TILTING ALGORITHM -->
        <div style="background: #0d0606; border: 1.5px solid #991b1b; border-radius: 14px; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: inset 0 0 25px rgba(0,0,0,0.85);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #b91c1c; padding-bottom: 6px;">
            <span style="font-size: 12px; font-weight: bold; color: #fca5a5;">❸ ວິທີໄລ່ກວ້າ &amp; ສູດຄຳນວນບິດປະຕູ</span>
            <span style="font-size: 10px; background: #7f1d1d; color: #fecaca; padding: 2px 7px; border-radius: 10px;">转角开运秘术</span>
          </div>

          <!-- 5-Step Cards -->
          <div style="display: flex; flex-direction: column; gap: 7px; margin: 4px 0;">
            <!-- Step 1 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #292524; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #ef4444; font-weight: bold;">ຂັ້ນຕອນ 1: ວິນິດໄສເສັ້ນມະຫາຂົງຫວາງ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ຫຼົວຜານອ່ານໄດ້: <strong>22.5°</strong> (ເສັ້ນແບ່ງ Kan ☵ ແລະ Gen ☶)<br>
                • ເປັນ <strong>"ມະຫາຂົງຫວາງ (Da Kong Wang 大空亡)"</strong> ເຮັດໃຫ້ເສຍຊັບ ແລະ ປ່ວຍຊຳເຮື້ອ!
              </div>
            </div>

            <!-- Step 2 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #292524; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #f59e0b; font-weight: bold;">ຂັ້ນຕອນ 2: ຄິດໄລ່ມຸມບິດແກ້ໄຂ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ຕ້ອງບິດໃຫ້ພົ້ນເຂດອັນຕະລາຍຢ່າງໜ້ອຍ <strong>Δ ≥ 4.5°</strong><br>
                • ເລືອກບິດໄປຫາ <strong>28.5° (ພູເຂົາ ໂຈ່ວ 丑)</strong> ເຂົ້າສູ່ເຂດເຈີ້ງຊ່ຽນ 100%.
              </div>
            </div>

            <!-- Step 3 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #292524; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #a78bfa; font-weight: bold;">ຂັ້ນຕອນ 3: ສູດເລຂາຄະນິດຖອຍຮົ້ນວົງກົບ</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ປະຕູກວ້າງ W = 1.50 m, ມຸມບິດ θ = +6.0°:<br>
                • ໄລຍະຖອຍຮົ້ນ: <strong>Δ = W × sin(6.0°) = 1.50 × 0.1045 = 15.7 cm</strong>!
              </div>
            </div>

            <!-- Step 4 -->
            <div style="background: rgba(255,255,255,0.03); border: 1px solid #292524; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #38bdf8; font-weight: bold;">ຂັ້ນຕອນ 4: ຜັງດາວໃໝ່ (ໂຈ່ວ-ໝຸຍ ຍຸກ 9)</div>
              <div style="color: #cbd5e1; margin-top: 1px;">
                • ຫັນໜ້າຫາ ໂຈ່ວ (Chou 28.5°) / ພິງ ໝຸຍ (Wei 208.5°).<br>
                • ປ່ຽນພະລັງງານສູນສິ້ນ ກາຍເປັນ <strong>"ວັງດາວຈະເລີນຮຸ່ງເຮືອງ (Wang Qi)"</strong>!
              </div>
            </div>

            <!-- Step 5 -->
            <div style="background: rgba(5,150,105,0.15); border: 1.2px solid #10b981; border-radius: 8px; padding: 6px 9px; font-size: 10px; line-height: 1.4;">
              <div style="color: #34d399; font-weight: bold;">ຂັ້ນຕອນ 5: ການຈັດວາງວັດຖຸແກ້ໄຂຕົວຈິງ</div>
              <div style="color: #ecfdf5; margin-top: 1px;">
                ➔ ຕັ້ງອ່າງນ້ຳລົ້ນໜ້າປະຕູໃໝ່ 28.5° ຮັບດາວນ້ຳ 9; ສ້າງສວນຫີນ 1.8 m ຫຼັງເຮືອນຄ້ຳຈຸນດາວພູ ສົ່ງຜົນໃຫ້ພັນລະຍາຫາຍປ່ວຍ ແລະ ທຸລະກິດຟື້ນຕົວຢ່າງອັດສະຈັນ!
              </div>
            </div>
          </div>

          <!-- Bottom Formula Note -->
          <div style="background: rgba(16,185,129,0.1); border-left: 3px solid #10b981; padding: 5px 9px; border-radius: 0 8px 8px 0; font-size: 9.5px; color: #a7f3d0;">
            💡 <strong>ວິຊາບິດປະຕູ:</strong> ບໍ່ຈຳເປັນຕ້ອງທຸບເຮືອນຖິ້ມ! ພຽງແຕ່ບິດວົງກົບປະຕູໃຫຍ່ໃຫ້ພົ້ນເສັ້ນຂົງຫວາງ ກໍປ່ຽນຮ້າຍກາຍເປັນດີໄດ້ 100%!
          </div>
        </div>
      </div>

      <!-- Bottom Footer Bar -->
      <div style="background: rgba(239,68,68,0.15); border: 1px solid #ef4444; border-radius: 10px; padding: 6px 16px; font-size: 11px; color: #fef2f2; display: flex; justify-content: space-between; align-items: center;">
        <span>🎯 <strong>ສະຫຼຸບມາດຕະຖານ:</strong> ເສັ້ນມະຫາຂົງຫວາງ 22.5° ແກ້ໄຂໄດ້ດ້ວຍການບິດປະຕູ +6.0° (15.7 cm) ປ່ຽນທິດຫັນສູ່ 28.5° ພູເຂົາໂຈ່ວ.</span>
        <span style="font-weight: bold; color: #fca5a5;">转关脱煞 • 移门纳吉 • 起死回生</span>
      </div>
    </div>
  `;
  await renderDiagram(page, case5Html, path.join(outputDir, 'fig_3_10_door_tilting_cure.png'));

  await browser.close();
  console.log('🎉 ALL MASTERCLASS CASE STUDY BLUEPRINTS GENERATED SUCCESSFULLY!');
})();
