const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outputDir = path.resolve(__dirname, '../img/lao');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function renderPlate(page, html, outputPath, width = 860, height = 580) {
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
  await page.waitForTimeout(400);
  await page.screenshot({ path: outputPath, type: 'png' });
  console.log('Generated Dedicated Plate:', outputPath);
}

// Macro Compass SVG Helper (Large 420x420)
function renderLargeCompassSvg({
  facingDegree,
  facingMountainText,
  facingGuaText,
  sittingDegree,
  sittingMountainText,
  sittingGuaText,
  eastText = "卯 90°",
  westText = "酉 270°",
  isKongWang = false,
  showPivotArrow = false,
  pivotText = "ບິດ +6.0° ➔ 28.5°",
  badgeBg = "#7f1d1d",
  badgeBorder = "#ef4444",
  badgeText = "ທິດຫັນໜ້າ"
}) {
  return `
    <svg width="420" height="420" viewBox="0 0 420 420">
      <rect x="12" y="12" width="396" height="396" rx="20" fill="#1c1917" stroke="#b45309" stroke-width="4" />
      <rect x="22" y="22" width="376" height="376" rx="16" fill="#292524" stroke="#78350f" stroke-width="2" />

      <!-- Spirit Level Vial -->
      <circle cx="48" cy="48" r="14" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
      <circle cx="48" cy="48" r="5" fill="#ffffff" opacity="0.85" />
      <text x="48" y="75" fill="#7dd3fc" font-size="9.5" font-weight="bold" text-anchor="middle">ລະດັບນ້ຳ</text>

      <circle cx="372" cy="48" r="8" fill="#78350f" stroke="#d97706" stroke-width="1.5" />
      <circle cx="48" cy="372" r="8" fill="#78350f" stroke="#d97706" stroke-width="1.5" />
      <circle cx="372" cy="372" r="8" fill="#78350f" stroke="#d97706" stroke-width="1.5" />

      <!-- Rotating Tian Pan -->
      <circle cx="210" cy="210" r="172" fill="#451a03" stroke="#f59e0b" stroke-width="3" />

      <path d="M 100 58 A 178 178 0 0 1 320 58" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,5" />
      <polygon points="325,58 314,52 316,63" fill="#38bdf8" />
      <path d="M 320 362 A 178 178 0 0 1 100 362" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,5" />
      <polygon points="95,362 106,368 104,357" fill="#38bdf8" />
      <text x="210" y="50" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">↻ ໝຸນຈານທອງດ້ວຍມືສອງເບື້ອງ</text>

      <!-- Degrees and Mountains -->
      <circle cx="210" cy="210" r="156" fill="#78350f" stroke="#fbbf24" stroke-width="1.5" />
      <circle cx="210" cy="210" r="132" fill="#292524" stroke="#d97706" stroke-width="1.8" />

      <g transform="translate(210, 210)">
        <text x="0" y="-138" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">${sittingDegree}</text>
        <text x="0" y="-116" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">${sittingMountainText}</text>
        <text x="0" y="-102" fill="#93c5fd" font-size="10" text-anchor="middle">${sittingGuaText}</text>

        <text x="0" y="152" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">${facingDegree}</text>
        <text x="0" y="125" fill="#ef4444" font-size="15" font-weight="bold" text-anchor="middle">${facingMountainText}</text>
        <text x="0" y="106" fill="#fca5a5" font-size="10" text-anchor="middle">${facingGuaText}</text>

        <text x="124" y="5" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">${eastText}</text>
        <text x="-124" y="5" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">${westText}</text>
      </g>

      <!-- Central Tian Chi -->
      <circle cx="210" cy="210" r="70" fill="#09090b" stroke="#f59e0b" stroke-width="3" />
      <line x1="210" y1="148" x2="210" y2="272" stroke="#ef4444" stroke-width="2.2" />
      <circle cx="205" cy="260" r="3" fill="#ef4444" />
      <circle cx="215" cy="260" r="3" fill="#ef4444" />
      <text x="210" y="165" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">N ເໜືອ</text>
      <text x="210" y="270" fill="#ef4444" font-size="9" text-anchor="middle">ໄຂ່ປາ 2 ຈຸດ</text>

      <!-- Magnetic Needle -->
      <polygon points="210,154 205,210 215,210" fill="#38bdf8" stroke="#ffffff" stroke-width="1" />
      <polygon points="210,266 205,210 215,210" fill="#ef4444" stroke="#ffffff" stroke-width="1" />
      <circle cx="210" cy="210" r="6" fill="#fbbf24" stroke="#ffffff" stroke-width="2" />

      <!-- Crosshairs -->
      <line x1="25" y1="210" x2="395" y2="210" stroke="#dc2626" stroke-width="1.8" opacity="0.85" />
      <line x1="210" y1="25" x2="210" y2="395" stroke="#dc2626" stroke-width="2.5" />

      ${isKongWang ? `
        <g transform="translate(210, 290)">
          <rect x="-55" y="-14" width="110" height="28" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
          <text x="0" y="5" fill="#fef2f2" font-size="10" font-weight="bold" text-anchor="middle">☠️ ມະຫາຂົງຫວາງ</text>
        </g>
      ` : ''}

      ${showPivotArrow ? `
        <line x1="210" y1="210" x2="255" y2="360" stroke="#10b981" stroke-width="3" stroke-dasharray="5,3" />
        <circle cx="255" cy="360" r="5" fill="#10b981" />
        <rect x="230" y="340" width="145" height="24" rx="5" fill="#064e3b" stroke="#10b981" stroke-width="1.2" />
        <text x="302" y="356" fill="#a7f3d0" font-size="9.5" font-weight="bold" text-anchor="middle">${pivotText}</text>
      ` : ''}

      <rect x="105" y="365" width="210" height="32" rx="8" fill="${badgeBg}" stroke="${badgeBorder}" stroke-width="1.5" />
      <text x="210" y="386" fill="#fef2f2" font-size="12" font-weight="bold" text-anchor="middle">${badgeText}</text>
    </svg>
  `;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // =========================================================================
  // 1. CASE 1: VILLA (ທ່ານ ສົມສັກ 180.0° Wu)
  // =========================================================================
  // Already generated in previous step, keep verified

  // =========================================================================
  // 2. CASE 2 - PART 1: MACRO LUOPAN COMPASS (ທ່ານນາງ ມະນີວອນ 201.0° Ding)
  // =========================================================================
  const c2LuopanHtml = `
    <div style="width: 820px; height: 540px; background: linear-gradient(145deg, #12100e 0%, #1c1815 50%, #14110f 100%); border: 2px solid #d97706; border-radius: 18px; padding: 20px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 45px rgba(0,0,0,0.9);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(217,119,6,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 11px; color: #f59e0b; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            CASE STUDY 2 • PART 1: 罗盘校准与分金 • ເຕັກນິກການໝຸນ & ອ່ານຄ່າຫຼົວຜານ
          </div>
          <div style="font-size: 19px; font-weight: bold; color: #fef3c7; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ວິທີໝຸນຈານຫຼົວຜານ ແລະ ການອ່ານຄ່າອົງສາບ່ຽງ 201.0° (ທ່ານນາງ ມະນີວອນ)
          </div>
        </div>
        <div style="background: rgba(217,119,6,0.2); border: 1.5px solid #d97706; padding: 4px 14px; border-radius: 20px; font-size: 11px; color: #fde68a; font-weight: bold;">
          ອົງສາບ່ຽງ: ຈຽນສຽນ (Jian Xian 替卦)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 420px 1fr; gap: 20px; align-items: center; flex: 1; margin: 10px 0;">
        ${renderLargeCompassSvg({
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

        <div style="display: flex; flex-direction: column; gap: 10px; justify-content: space-between; height: 420px;">
          <div style="background: rgba(120,53,15,0.25); border: 1.5px solid #92400e; border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 13px; font-weight: bold; color: #fde68a; margin-bottom: 6px;">
              🔍 ຂັ້ນຕອນການວັດແທກຫຼົບສະໜາມເຫຼັກ:
            </div>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 11.5px; line-height: 1.45; color: #fef3c7;">
              <div><strong>1. ດຶງເຊືອກຂະໜານ:</strong> ດຶງແນວເຊືອກຈາກກຳແພງແບ່ງຮ່ວມ (Party Wall) ອອກມາສູ່ທາງຍ່າງ 3.0 m.</div>
              <div><strong>2. ວາງຖານໄມ້ສາກ:</strong> ວາງຖານຫຼົວຜານແນບຂະໜານກັບແນວເຊືອກກາງແຈ້ງ ຫຼົບປະຕູມ້ວນເຫຼັກ.</div>
              <div><strong>3. ໝຸນຈານທອງ:</strong> ປັບລະດັບນ້ຳທ່ຽງແລ້ວໝຸນຈານຈົນເຂັມແມ່ເຫຼັກຕົກຮ່ອງເສັ້ນແດງ海底.</div>
              <div><strong>4. ອ່ານຄ່າຕັດ:</strong> ສາຍກາກະບາດຕັດອົງສາດ້ານໜ້າ = <strong>201.0°</strong> ບ່ຽງຈາກແກນກາງຕິ່ງ (195.0°) ເຖິງ +6.0°!</div>
            </div>
          </div>

          <div style="background: rgba(217,119,6,0.12); border-left: 4px solid #f59e0b; padding: 10px 14px; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: bold; color: #fde68a;">ວິນິດໄສເຂດຈຽນສຽນ:</div>
            <div style="font-size: 11px; color: #fef3c7; margin-top: 3px; line-height: 1.45;">
              • ພູເຂົາ ຕິ່ງ (Ding) ແກນກາງ 195.0° (ຂອບເຂດ 187.5° – 202.5°)<br>
              • ມຸມອ່ານໄດ້ 201.0° ບ່ຽງເກີນ 3.0° ➔ <strong>"ຈຽນສຽນ (Jian Xian)"</strong> ຫ້າມໃຊ້ຜັງປົກກະຕິເດັດຂາດ! ຕ້ອງໃຊ້ດາວປ່ຽນແທນ.
            </div>
          </div>

          <div style="background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 10px; padding: 8px 12px; font-size: 11px; color: #fca5a5; line-height: 1.4;">
            ⚠️ <strong>ຄຳເຕືອນ:</strong> ຖ້າວັດແທກຕິດປະຕູເຫຼັກ ເຂັມທິດຈະບິດບ້ຽວເຖິງ 25° ເຮັດໃຫ້ວາງຕູ້ນິລະໄພຜິດທິດ!
          </div>
        </div>
      </div>

      <div style="background: rgba(217,119,6,0.15); border: 1px solid #d97706; border-radius: 8px; padding: 6px 14px; font-size: 11px; color: #fef3c7; display: flex; justify-content: space-between;">
        <span>🎯 <strong>ມາດຕະຖານ:</strong> ຕຶກແຖວປະຕູເຫຼັກ ຕ້ອງດຶງເຊືອກຂະໜານ 3.0 m ອອກມາວັດແທກກາງແຈ້ງສະເໝີ.</span>
        <span style="font-weight: bold; color: #f59e0b;">界墙拉线 • 替卦变星</span>
      </div>
    </div>
  `;
  await renderPlate(page, c2LuopanHtml, path.join(outputDir, 'fig_3_case2_luopan_macro.png'));

  // =========================================================================
  // 3. CASE 2 - PART 2: ARCHITECTURAL FLOORPLAN & 9 PALACES (ທ່ານນາງ ມະນີວອນ)
  // =========================================================================
  const c2FloorplanHtml = `
    <div style="width: 820px; height: 540px; background: linear-gradient(145deg, #12100e 0%, #1c1815 50%, #14110f 100%); border: 2px solid #d97706; border-radius: 18px; padding: 20px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 45px rgba(0,0,0,0.9);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(217,119,6,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 11px; color: #f59e0b; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            CASE STUDY 2 • PART 2: 建筑平面与九宫飞星 • ແປນຮ້ານຄຳ & ຜັງ 9 ວັງ
          </div>
          <div style="font-size: 19px; font-weight: bold; color: #fef3c7; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ແປນຕຶກແຖວຮ້ານຄຳ ຊ້ອນທັບຜັງດາວປ່ຽນແທນ (ທ່ານນາງ ມະນີວອນ)
          </div>
        </div>
        <div style="background: rgba(217,119,6,0.2); border: 1.5px solid #d97706; padding: 4px 14px; border-radius: 20px; font-size: 11px; color: #fde68a; font-weight: bold;">
          ຕູ້ນິລະໄພວັງດາວ 8-9 (財库安稳)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 440px 1fr; gap: 20px; align-items: center; flex: 1; margin: 10px 0;">
        <svg width="440" height="420" viewBox="0 0 440 420">
          <rect width="440" height="420" fill="#0d1117" rx="12" />

          <!-- Sitting Vector -->
          <rect x="130" y="8" width="180" height="22" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2" />
          <text x="220" y="23" fill="#bae6fd" font-size="10.5" font-weight="bold" text-anchor="middle">ທິດພິງ (Sitting 坐): 21.0° ກຸ້ຍ (癸)</text>

          <!-- Parallel String line -->
          <line x1="45" y1="36" x2="45" y2="385" stroke="#fbbf24" stroke-width="2" stroke-dasharray="6,4" />
          <circle cx="45" cy="36" r="4" fill="#fbbf24" />
          <circle cx="45" cy="385" r="4" fill="#fbbf24" />
          <text x="38" y="210" fill="#fbbf24" font-size="9" text-anchor="middle" transform="rotate(-90 38 210)">ແນວເຊືອກຂະໜານ Party Wall</text>

          <!-- Shophouse Perimeter -->
          <rect x="55" y="34" width="330" height="280" rx="6" fill="#1c1917" stroke="#d97706" stroke-width="2.2" />

          <!-- 9-Palace Grid Lines -->
          <line x1="165" y1="34" x2="165" y2="314" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="275" y1="34" x2="275" y2="314" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="55" y1="127" x2="385" y2="127" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="55" y1="220" x2="385" y2="220" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3" />

          <!-- Rear Storage -->
          <rect x="170" y="38" width="100" height="84" fill="#0f172a" rx="4" />
          <text x="220" y="58" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">ສາງ & ຊ່າງທອງ</text>
          <text x="185" y="82" fill="#38bdf8" font-size="14" font-weight="bold">9</text>
          <text x="255" y="82" fill="#ef4444" font-size="14" font-weight="bold">1</text>
          <text x="220" y="104" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">8</text>

          <!-- NW Stairs -->
          <rect x="60" y="38" width="100" height="84" fill="#0f172a" rx="4" />
          <text x="110" y="58" fill="#94a3b8" font-size="10" text-anchor="middle">ຂັ້ນໄດຊັ້ນ 2</text>
          <text x="75" y="82" fill="#38bdf8" font-size="13">8</text>
          <text x="145" y="82" fill="#ef4444" font-size="13">2</text>
          <text x="110" y="104" fill="#fbbf24" font-size="13" text-anchor="middle">9</text>

          <!-- NE Restroom -->
          <rect x="280" y="38" width="100" height="84" fill="#0f172a" rx="4" />
          <text x="330" y="58" fill="#94a3b8" font-size="10" text-anchor="middle">ຫ້ອງນ້ຳ (NE)</text>
          <text x="295" y="82" fill="#38bdf8" font-size="13">4</text>
          <text x="365" y="82" fill="#ef4444" font-size="13">6</text>
          <text x="330" y="104" fill="#fbbf24" font-size="13" text-anchor="middle">4</text>

          <!-- SAFE BOX & CASHIER VAULT (EAST PALACE 8-9) -->
          <rect x="280" y="132" width="100" height="83" fill="#064e3b" rx="5" stroke="#10b981" stroke-width="2" />
          <text x="330" y="152" fill="#a7f3d0" font-size="10.5" font-weight="bold" text-anchor="middle">ຕູ້ນິລະໄພ ❷</text>
          <text x="295" y="178" fill="#38bdf8" font-size="15" font-weight="bold">8</text>
          <text x="365" y="178" fill="#ef4444" font-size="15" font-weight="bold">9</text>
          <text x="330" y="196" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">3</text>
          <text x="330" y="209" fill="#34d399" font-size="8.5" font-weight="bold" text-anchor="middle">ວັງດາວ 8-9 ໂຊກ</text>

          <!-- Center Hall -->
          <rect x="170" y="132" width="100" height="83" fill="#1c1917" rx="4" stroke="#d97706" stroke-width="1.2" />
          <text x="220" y="152" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">ຫ້ອງໂຖງກາງ</text>
          <text x="185" y="178" fill="#38bdf8" font-size="14" font-weight="bold">1</text>
          <text x="255" y="178" fill="#ef4444" font-size="14" font-weight="bold">8</text>
          <text x="220" y="196" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">9</text>

          <!-- West Shelves -->
          <rect x="60" y="132" width="100" height="83" fill="#0f172a" rx="4" />
          <text x="110" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">ຕູ້ໂຊຮອງ</text>
          <text x="75" y="178" fill="#38bdf8" font-size="13">6</text>
          <text x="145" y="178" fill="#ef4444" font-size="13">4</text>
          <text x="110" y="196" fill="#fbbf24" font-size="13" text-anchor="middle">5</text>

          <!-- Front Main Jewelry Counters (SOUTH) -->
          <rect x="170" y="225" width="100" height="84" fill="#451a03" rx="4" stroke="#f59e0b" stroke-width="2" />
          <text x="220" y="245" fill="#fef3c7" font-size="10" font-weight="bold" text-anchor="middle">ຕູ້ໂຊຄຳຫຼັກ</text>
          <text x="185" y="271" fill="#38bdf8" font-size="15" font-weight="bold">8</text>
          <text x="255" y="271" fill="#ef4444" font-size="15" font-weight="bold">9</text>
          <text x="220" y="289" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">1</text>
          <text x="220" y="302" fill="#fde68a" font-size="8.5" font-weight="bold" text-anchor="middle">替卦财星到门</text>

          <!-- SW & SE Windows -->
          <rect x="60" y="225" width="100" height="84" fill="#0f172a" rx="4" />
          <text x="110" y="245" fill="#94a3b8" font-size="10" text-anchor="middle">ຕູ້ໂຊແກ້ວ (SW)</text>
          <text x="75" y="271" fill="#38bdf8" font-size="13">2</text>
          <text x="145" y="271" fill="#ef4444" font-size="13">7</text>
          <text x="110" y="289" fill="#fbbf24" font-size="13" text-anchor="middle">7</text>

          <rect x="280" y="225" width="100" height="84" fill="#0f172a" rx="4" />
          <text x="330" y="245" fill="#94a3b8" font-size="10" text-anchor="middle">ຕູ້ໂຊແກ້ວ (SE)</text>
          <text x="295" y="271" fill="#38bdf8" font-size="13">3</text>
          <text x="365" y="271" fill="#ef4444" font-size="13">5</text>
          <text x="330" y="289" fill="#fbbf24" font-size="13" text-anchor="middle">2</text>

          <!-- Steel Rolling Door -->
          <rect x="55" y="310" width="330" height="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.2" />
          <text x="220" y="317" fill="#fca5a5" font-size="8.5" text-anchor="middle">⚠️ ປະຕູມ້ວນເຫຼັກ (ສະໜາມແມ່ເຫຼັກກວນ)</text>

          <!-- Sidewalk Station 3.0m -->
          <rect x="55" y="324" width="330" height="42" rx="4" fill="#0f172a" stroke="#475569" stroke-dasharray="3,3" />
          <circle cx="220" cy="345" r="13" fill="#10b981" stroke="#34d399" stroke-width="1.8" />
          <text x="220" y="350" fill="#064e3b" font-size="11" font-weight="bold" text-anchor="middle">❸</text>
          <text x="295" y="350" fill="#a7f3d0" font-size="10" font-weight="bold">ຈຸດວັດແທກ 3.0 m (ກາງແຈ້ງ)</text>

          <!-- Facing Vector -->
          <line x1="220" y1="318" x2="220" y2="400" stroke="#ef4444" stroke-width="3" />
          <polygon points="220,408 214,396 226,396" fill="#ef4444" />
          <rect x="130" y="388" width="180" height="22" rx="4" fill="#78350f" stroke="#d97706" stroke-width="1.2" />
          <text x="220" y="403" fill="#fef3c7" font-size="10.5" font-weight="bold" text-anchor="middle">ທິດຫັນ: 201.0° ຕິ່ງ (丁 替卦)</text>
        </svg>

        <div style="display: flex; flex-direction: column; gap: 10px; justify-content: space-between; height: 420px;">
          <div style="background: rgba(120,53,15,0.25); border: 1.5px solid #92400e; border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 13px; font-weight: bold; color: #fde68a; margin-bottom: 6px;">
              🏪 ການຈັດວາງພື້ນທີ່ຮ້ານຄຳ:
            </div>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 11px; line-height: 1.45; color: #fef3c7;">
              <div>• <strong style="color: #6ee7b7;">ຕູ້ນິລະໄພ ❷:</strong> ຍ້າຍມາວາງໃນວັງດາວ 8-9 (ທິດຕາເວັນອອກ) ເພື່ອລັອກຊັບສິນເງິນຄຳບໍ່ໃຫ້ຮົ່ວໄຫຼ.</div>
              <div>• <strong style="color: #fbbf24;">ຕູ້ໂຊຄຳຫຼັກ (ໜ້າຮ້ານ):</strong> ຕົກວັງດາວນ້ຳ 9 ເປີດຮັບລູກຄ້າ ແລະ ການຄ້າຂາຍຄຶກຄັກ.</div>
              <div>• <strong style="color: #38bdf8;">ແນວເຊືອກຂະໜານ ❶:</strong> ດຶງແນວກຳແພງແບ່ງອອກມາວັດແທກຫ່າງ 3m ເພື່ອຄວາມແມ່ນຍຳ.</div>
              <div>• <strong style="color: #fca5a5;">ຜັງດາວປ່ຽນແທນ:</strong> ຖ້າບໍ່ໃຊ້ດາວປ່ຽນແທນ ຈະຄິດໄລ່ວັງດາວຜິດທັງໝົດ!</div>
            </div>
          </div>

          <div style="background: rgba(16,185,129,0.15); border-left: 4px solid #10b981; padding: 10px 14px; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: bold; color: #a7f3d0;">ຜົນການປັບແກ້ຮວງຈຸ້ຍ:</div>
            <div style="font-size: 10.5px; color: #ecfdf5; margin-top: 3px; line-height: 1.4;">
              ຫຼັງຈາກຍ້າຍຕູ້ນິລະໄພ ແລະ ໂຕະເກັບເງິນມາໄວ້ໃນວັງດາວ 8-9, ຍອດຂາຍຄຳເພີ່ມຂຶ້ນຢ່າງຕໍ່ເນື່ອງ ແລະ ບັນຫາເງິນຄຳຮົ່ວໄຫຼຖືກແກ້ໄຂຢ່າງຖາວອນ.
            </div>
          </div>

          <div style="background: rgba(217,119,6,0.1); border: 1px solid #d97706; border-radius: 10px; padding: 8px 12px; font-size: 11px; color: #fde68a; line-height: 1.4;">
            💡 <strong>ຄຳແນະນຳ:</strong> ທຸລະກິດຮ້ານຄຳ ແລະ ການເງິນ ຕ້ອງໃຫ້ຄວາມສຳຄັນກັບຕຳແໜ່ງຕູ້ນິລະໄພເປັນອັນດັບ 1!
          </div>
        </div>
      </div>

      <div style="background: rgba(217,119,6,0.15); border: 1px solid #d97706; border-radius: 8px; padding: 6px 14px; font-size: 11px; color: #fef3c7; display: flex; justify-content: space-between;">
        <span>🎯 <strong>ຜົນລັບ:</strong> ດາວປ່ຽນແທນຖືກຕ້ອງ + ຕູ້ນິລະໄພວັງ 8-9 = ການຄ້າຄຶກຄັກ ຊັບສິນໝັ້ນຄົງ.</span>
        <span style="font-weight: bold; color: #f59e0b;">替卦挨星 • 财源茂盛</span>
      </div>
    </div>
  `;
  await renderPlate(page, c2FloorplanHtml, path.join(outputDir, 'fig_3_case2_shophouse_floorplan.png'));

  // =========================================================================
  // 4. CASE 3 - PART 1: MACRO LUOPAN COMPASS (ທ່ານ ຄຳພັນ 270.0° You)
  // =========================================================================
  const c3LuopanHtml = `
    <div style="width: 820px; height: 540px; background: linear-gradient(145deg, #0c1520 0%, #112233 50%, #0d1722 100%); border: 2px solid #0284c7; border-radius: 18px; padding: 20px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 45px rgba(0,0,0,0.9);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(2,132,199,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 11px; color: #38bdf8; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            CASE STUDY 3 • PART 1: 罗盘校准与分金 • ເຕັກນິກການໝຸນ & ອ່ານຄ່າຫຼົວຜານ
          </div>
          <div style="font-size: 19px; font-weight: bold; color: #f0f9ff; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ວິທີໝຸນຈານຫຼົວຜານ ແລະ ການອ່ານຄ່າອົງສາ 270.0° (ທ່ານ ຄຳພັນ)
          </div>
        </div>
        <div style="background: rgba(2,132,199,0.2); border: 1.5px solid #0284c7; padding: 4px 14px; border-radius: 20px; font-size: 11px; color: #7dd3fc; font-weight: bold;">
          ເຈີ້ງຊ່ຽນ (Zheng Xian 100%)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 420px 1fr; gap: 20px; align-items: center; flex: 1; margin: 10px 0;">
        ${renderLargeCompassSvg({
          facingDegree: "270.0°",
          facingMountainText: "酉 (You)",
          facingGuaText: "ກວ້າຕຸ້ຍ ☱ (ຕາເວັນຕົກ)",
          sittingDegree: "90.0°",
          sittingMountainText: "卯 (Mao)",
          sittingGuaText: "ກວ້າເຈິ່ນ ☳ (ຕາເວັນອອກ)",
          badgeBg: "#0c4a6e",
          badgeBorder: "#0284c7",
          badgeText: "ທິດຫັນໜ້າ: 270.0° (ຢິວ 酉 / West)"
        })}

        <div style="display: flex; flex-direction: column; gap: 10px; justify-content: space-between; height: 420px;">
          <div style="background: rgba(12,74,110,0.25); border: 1.5px solid #0369a1; border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 13px; font-weight: bold; color: #7dd3fc; margin-bottom: 6px;">
              🔍 ຂັ້ນຕອນວັດແທກຄອນໂດ 2 ຂັ້ນຕອນ:
            </div>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 11.5px; line-height: 1.45; color: #e0f2fe;">
              <div><strong>1. ວັດແກນຕຶກຊັ້ນລຸ່ມ:</strong> ວັດແນວກຳແພງຕຶກໃຫຍ່ຊັ້ນລຸ່ມສຸດ ຫ່າງຕຶກ 10m ໄດ້ 270.0°.</div>
              <div><strong>2. ວັດແນວລະບຽງຊັ້ນ 8:</strong> ວາງຫຼົວຜານແນບແວ່ນເລື່ອນລະບຽງຊັ້ນ 8 ໄດ້ 270.0° ກົງກັນ 100%.</div>
              <div><strong>3. ໝຸນຈານທອງ:</strong> ປັບລະດັບນ້ຳທ່ຽງ ແລ້ວໝຸນຈານຈົນເຂັມແມ່ເຫຼັກຕົກຮ່ອງເສັ້ນແດງ海底.</div>
              <div><strong>4. ອ່ານຄ່າຕັດ:</strong> ສາຍກາກະບາດຕັດອົງສາ = <strong>270.0°</strong> ຕົກກາງພູເຂົາ ຢິວ (You 酉).</div>
            </div>
          </div>

          <div style="background: rgba(2,132,199,0.12); border-left: 4px solid #38bdf8; padding: 10px 14px; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: bold; color: #bae6fd;">ວິນິດໄສທິດຫັນຄອນໂດ:</div>
            <div style="font-size: 11px; color: #f0f9ff; margin-top: 3px; line-height: 1.45;">
              • ພູເຂົາ ຢິວ (You) ກວມເອົາ 262.5° – 277.5°<br>
              • ອົງສາ 270.0° ຄືແກນກາງສູນສູດ ➔ <strong>"ເຈີ້ງຊ່ຽນ (Zheng Xian) 100%"</strong> ບໍ່ມີມຸມບ່ຽງເບນ.
            </div>
          </div>

          <div style="background: rgba(14,165,233,0.1); border: 1px solid #0284c7; border-radius: 10px; padding: 8px 12px; font-size: 11px; color: #bae6fd; line-height: 1.4;">
            💡 <strong>ກົດເກນຢາງຊີ່:</strong> ປະຕູຫ້ອງຕິດທາງຍ່າງມືດເປັນ Yin Qi (ຫ້າມໃຊ້ເປັນທິດຫັນ); ລະບຽງເປີດຮັບແສງ & ລົມແມ່ນ້ຳເປັນ Yang Qi ຈຶ່ງເປັນທິດຫັນແທ້!
          </div>
        </div>
      </div>

      <div style="background: rgba(2,132,199,0.15); border: 1px solid #0284c7; border-radius: 8px; padding: 6px 14px; font-size: 11px; color: #f0f9ff; display: flex; justify-content: space-between;">
        <span>🎯 <strong>ມາດຕະຖານ:</strong> ຄອນໂດຊັ້ນສູງ ຍຶດຖືລະບຽງຮັບແສງ ແລະ ລົມແມ່ນ້ຳຂອງເປັນທິດຫັນໜ້າສະເໝີ.</span>
        <span style="font-weight: bold; color: #38bdf8;">以光为向 • 坐卯向酉</span>
      </div>
    </div>
  `;
  await renderPlate(page, c3LuopanHtml, path.join(outputDir, 'fig_3_case3_luopan_macro.png'));

  // =========================================================================
  // 5. CASE 3 - PART 2: ARCHITECTURAL FLOORPLAN & 9 PALACES (ທ່ານ ຄຳພັນ)
  // =========================================================================
  const c3FloorplanHtml = `
    <div style="width: 820px; height: 540px; background: linear-gradient(145deg, #0c1520 0%, #112233 50%, #0d1722 100%); border: 2px solid #0284c7; border-radius: 18px; padding: 20px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 45px rgba(0,0,0,0.9);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(2,132,199,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 11px; color: #38bdf8; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            CASE STUDY 3 • PART 2: 建筑平面与九宫飞星 • ແປນຄອນໂດ & ຜັງ 9 ວັງ
          </div>
          <div style="font-size: 19px; font-weight: bold; color: #f0f9ff; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ແປນຫ້ອງຄອນໂດຊັ້ນ 8 ຊ້ອນທັບຜັງດາວເຫີນຍຸກ 9 (ທ່ານ ຄຳພັນ)
          </div>
        </div>
        <div style="background: rgba(2,132,199,0.2); border: 1.5px solid #0284c7; padding: 4px 14px; border-radius: 20px; font-size: 11px; color: #7dd3fc; font-weight: bold;">
          ລະບຽງຮັບຊີ່ແມ່ນ້ຳຂອງ (临水纳财)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 440px 1fr; gap: 20px; align-items: center; flex: 1; margin: 10px 0;">
        <svg width="440" height="420" viewBox="0 0 440 420">
          <rect width="440" height="420" fill="#0d1117" rx="12" />

          <!-- Dark Corridor (North / Yin Qi) -->
          <rect x="40" y="8" width="360" height="26" rx="4" fill="#1e1b4b" stroke="#4338ca" stroke-dasharray="3,3" />
          <text x="220" y="25" fill="#a5b4fc" font-size="10" text-anchor="middle">ທາງຍ່າງມືດພາຍໃນອາຄານ (Dark Corridor / Yin Qi)</text>

          <!-- Entry Door ❶ (NOT Facing) -->
          <rect x="195" y="32" width="50" height="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
          <circle cx="220" cy="48" r="9" fill="#ef4444" />
          <text x="220" y="52" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">❌</text>
          <text x="220" y="66" fill="#fca5a5" font-size="8.5" font-weight="bold" text-anchor="middle">ປະຕູຫ້ອງ ❶ (ບໍ່ແມ່ນທິດຫັນ)</text>

          <!-- Condo Footprint -->
          <rect x="40" y="70" width="360" height="235" rx="6" fill="#1e293b" stroke="#0284c7" stroke-width="2.2" />

          <!-- 9-Palace Grid Lines -->
          <line x1="160" y1="70" x2="160" y2="305" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="280" y1="70" x2="280" y2="305" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="40" y1="148" x2="400" y2="148" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="40" y1="226" x2="400" y2="226" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4,3" />

          <!-- Rooms -->
          <!-- North Entry Foyer -->
          <rect x="165" y="75" width="110" height="68" fill="#0f172a" rx="4" />
          <text x="220" y="93" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">ໂຖງທາງເຂົ້າ</text>
          <text x="180" y="116" fill="#38bdf8" font-size="14" font-weight="bold">8</text>
          <text x="250" y="116" fill="#ef4444" font-size="14" font-weight="bold">1</text>
          <text x="220" y="134" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">4</text>

          <!-- NW Kitchen -->
          <rect x="45" y="75" width="110" height="68" fill="#0f172a" rx="4" />
          <text x="100" y="93" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">ຫ້ອງຄົວ (NW)</text>
          <text x="65" y="116" fill="#38bdf8" font-size="13">7</text>
          <text x="135" y="116" fill="#ef4444" font-size="13">2</text>
          <text x="100" y="134" fill="#fbbf24" font-size="13" text-anchor="middle">5</text>

          <!-- NE Bathroom -->
          <rect x="285" y="75" width="110" height="68" fill="#0f172a" rx="4" />
          <text x="340" y="93" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">ຫ້ອງນ້ຳ (NE)</text>
          <text x="305" y="116" fill="#38bdf8" font-size="13">3</text>
          <text x="375" y="116" fill="#ef4444" font-size="13">6</text>
          <text x="340" y="134" fill="#fbbf24" font-size="13" text-anchor="middle">9</text>

          <!-- EAST: MASTER BEDROOM (SITTING 90° MAO) -->
          <rect x="285" y="153" width="110" height="68" fill="#0c4a6e" rx="4" stroke="#38bdf8" stroke-width="1.8" />
          <text x="340" y="171" fill="#bae6fd" font-size="10" font-weight="bold" text-anchor="middle">ຫ້ອງນອນໃຫຍ່</text>
          <text x="305" y="194" fill="#38bdf8" font-size="14" font-weight="bold">4</text>
          <text x="375" y="194" fill="#ef4444" font-size="14" font-weight="bold">5</text>
          <text x="340" y="212" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">1</text>
          <text x="340" y="180" fill="#7dd3fc" font-size="8.5" text-anchor="middle">ທິດພິງ 90° 卯</text>

          <!-- Center Hall -->
          <rect x="165" y="153" width="110" height="68" fill="#1c1917" rx="4" />
          <text x="220" y="171" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">ໃຈກາງໄທ້ຈີ໊</text>
          <text x="180" y="194" fill="#38bdf8" font-size="14" font-weight="bold">9</text>
          <text x="250" y="194" fill="#ef4444" font-size="14" font-weight="bold">9</text>
          <text x="220" y="212" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">2</text>

          <!-- WEST: BALCONY LIVING & DESK ❸ -->
          <rect x="45" y="153" width="110" height="68" fill="#064e3b" rx="4" stroke="#10b981" stroke-width="2" />
          <text x="100" y="171" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">ຫ້ອງຮັບແຂກ & ໂຕະ ❸</text>
          <text x="65" y="194" fill="#38bdf8" font-size="14" font-weight="bold">5</text>
          <text x="135" y="194" fill="#ef4444" font-size="14" font-weight="bold">4</text>
          <text x="100" y="212" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">8</text>
          <text x="100" y="180" fill="#34d399" font-size="8.5" text-anchor="middle">ດຶງດູດຊີ່ໂຊກ 9</text>

          <!-- South Rooms -->
          <rect x="165" y="231" width="110" height="68" fill="#0f172a" rx="4" />
          <text x="220" y="249" fill="#cbd5e1" font-size="10" text-anchor="middle">ມຸມນັ່ງຫຼິ້ນ</text>
          <text x="180" y="272" fill="#38bdf8" font-size="13">2</text>
          <text x="250" y="272" fill="#ef4444" font-size="13">7</text>
          <text x="220" y="290" fill="#fbbf24" font-size="13" text-anchor="middle">6</text>

          <rect x="45" y="231" width="110" height="68" fill="#0f172a" rx="4" />
          <text x="100" y="249" fill="#cbd5e1" font-size="10" text-anchor="middle">ລະບຽງເສີມ</text>
          <text x="65" y="272" fill="#38bdf8" font-size="13">1</text>
          <text x="135" y="272" fill="#ef4444" font-size="13">8</text>
          <text x="100" y="290" fill="#fbbf24" font-size="13" text-anchor="middle">7</text>

          <rect x="285" y="231" width="110" height="68" fill="#0f172a" rx="4" />
          <text x="340" y="249" fill="#cbd5e1" font-size="10" text-anchor="middle">ຫ້ອງແຕ່ງຕົວ</text>
          <text x="305" y="272" fill="#38bdf8" font-size="13">6</text>
          <text x="375" y="272" fill="#ef4444" font-size="13">3</text>
          <text x="340" y="290" fill="#fbbf24" font-size="13" text-anchor="middle">3</text>

          <!-- Glass Balcony Slider Door ❷ -->
          <rect x="40" y="303" width="360" height="10" fill="#0284c7" stroke="#38bdf8" stroke-width="1.8" />

          <!-- Balcony Deck -->
          <rect x="40" y="313" width="360" height="48" rx="4" fill="#0c4a6e" stroke="#0284c7" stroke-width="1.5" />
          <circle cx="120" cy="337" r="12" fill="#10b981" />
          <text x="120" y="342" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">✔️</text>
          <text x="235" y="335" fill="#a7f3d0" font-size="11" font-weight="bold">❷ ທິດຫັນໜ້າແທ້ຈິງ (Facing: 270.0° 酉)</text>
          <text x="235" y="350" fill="#7dd3fc" font-size="9.5">ແວ່ນເລື່ອນລະບຽງ ຮັບແສງ & ລົມແມ່ນ້ຳຂອງ 100%</text>

          <!-- Mekong River Waves -->
          <path d="M 45 372 Q 120 364 195 372 T 345 372 T 400 372" fill="none" stroke="#38bdf8" stroke-width="2.5" />
          <path d="M 45 382 Q 120 374 195 382 T 345 382 T 400 382" fill="none" stroke="#0284c7" stroke-width="2" />
          <text x="220" y="402" fill="#7dd3fc" font-size="10.5" font-weight="bold" text-anchor="middle">🌊 ກະແສຊີ່ແມ່ນ້ຳຂອງ (Mekong Virtual Water Flow)</text>
        </svg>

        <div style="display: flex; flex-direction: column; gap: 10px; justify-content: space-between; height: 420px;">
          <div style="background: rgba(12,74,110,0.25); border: 1.5px solid #0369a1; border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 13px; font-weight: bold; color: #7dd3fc; margin-bottom: 6px;">
              🏢 ການຈັດວາງພື້ນທີ່ຄອນໂດ:
            </div>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 11px; line-height: 1.45; color: #e0f2fe;">
              <div>• <strong style="color: #6ee7b7;">ລະບຽງແວ່ນເລື່ອນ ❷:</strong> ເປັນທິດຫັນໜ້າແທ້ຈິງ 270.0° (ຢິວ 酉) ເປີດຮັບແສງແດດ ແລະ ລົມແມ່ນ້ຳຂອງ.</div>
              <div>• <strong style="color: #38bdf8;">ໂຕະເຮັດວຽກ ❸:</strong> ວາງຫັນໜ້າຫາລະບຽງເພື່ອດຶງດູດກະແສຊັບດາວ 9 ມ່ວງຈາກແມ່ນ້ຳຂອງ.</div>
              <div>• <strong style="color: #fca5a5;">ປະຕູຫ້ອງ ❶:</strong> ເປີດສູ່ທາງຍ່າງມືດເປັນ Yin Qi ບໍ່ມີຜົນຕໍ່ການກຳນົດທິດຫັນໜ້າ.</div>
              <div>• <strong style="color: #fbbf24;">ຫ້ອງນອນໃຫຍ່ (ທິດພິງ 90°):</strong> ຕັ້ງຢູ່ທິດຕາເວັນອອກ (ເມົາ 卯) ຮັບຄວາມສະຫງົບ.</div>
            </div>
          </div>

          <div style="background: rgba(14,165,233,0.15); border-left: 4px solid #0284c7; padding: 10px 14px; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: bold; color: #bae6fd;">ກົດເກນຕັດສິນທິດຫັນຕຶກສູງ:</div>
            <div style="font-size: 10.5px; color: #f0f9ff; margin-top: 3px; line-height: 1.4;">
              "以向为阳，以背为阴" (ບ່ອນໃດມີແສງສະຫວ່າງ ແລະ ການໄຫຼວຽນຂອງອາກາດຫຼາຍທີ່ສຸດ ບ່ອນນັ້ນຄືທິດຫັນໜ້າຂອງຫ້ອງ).
            </div>
          </div>

          <div style="background: rgba(16,185,129,0.1); border: 1px solid #10b981; border-radius: 10px; padding: 8px 12px; font-size: 11px; color: #a7f3d0; line-height: 1.4;">
            💡 <strong>ບົດຮຽນສຳຄັນ:</strong> ຊາວຄອນໂດຫຼາຍທ່ານຄິດໄລ່ຜິດຍ້ອນເອົາປະຕູຫ້ອງເປັນທິດຫັນ ເຮັດໃຫ້ຜັງດາວປີ້ນ 180°!
          </div>
        </div>
      </div>

      <div style="background: rgba(2,132,199,0.15); border: 1px solid #0284c7; border-radius: 8px; padding: 6px 14px; font-size: 11px; color: #f0f9ff; display: flex; justify-content: space-between;">
        <span>🎯 <strong>ຜົນລັບ:</strong> ລະບຽງຮັບແສງ 270° + ໂຕະຫັນຫານ້ຳຂອງ = ດູດຊັບດາວ 9 ມ່ວງ ຈະເລີນກ້າວໜ້າ.</span>
        <span style="font-weight: bold; color: #38bdf8;">临水纳气 • 步步高升</span>
      </div>
    </div>
  `;
  await renderPlate(page, c3FloorplanHtml, path.join(outputDir, 'fig_3_case3_condo_floorplan.png'));

  // =========================================================================
  // 6. CASE 4 - PART 1: MACRO LUOPAN COMPASS (ທ່ານ ບຸນມີ 135.0° Xun)
  // =========================================================================
  const c4LuopanHtml = `
    <div style="width: 820px; height: 540px; background: linear-gradient(145deg, #120e1f 0%, #1c1533 50%, #130f21 100%); border: 2px solid #8b5cf6; border-radius: 18px; padding: 20px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 45px rgba(0,0,0,0.9);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(139,92,246,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 11px; color: #a78bfa; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            CASE STUDY 4 • PART 1: 罗盘校准与分金 • ເຕັກນິກການໝຸນ & ອ່ານຄ່າຫຼົວຜານ
          </div>
          <div style="font-size: 19px; font-weight: bold; color: #faf5ff; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ວິທີໝຸນຈານຫຼົວຜານ ແລະ ການອ່ານຄ່າອົງສາ 135.0° (ທ່ານ ບຸນມີ)
          </div>
        </div>
        <div style="background: rgba(139,92,246,0.2); border: 1.5px solid #8b5cf6; padding: 4px 14px; border-radius: 20px; font-size: 11px; color: #ddd6fe; font-weight: bold;">
          ເຈີ້ງຊ່ຽນ (Zheng Xian 100%)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 420px 1fr; gap: 20px; align-items: center; flex: 1; margin: 10px 0;">
        ${renderLargeCompassSvg({
          facingDegree: "135.0°",
          facingMountainText: "巽 (Xun)",
          facingGuaText: "ກວ້າຊຸ່ນ ☴ (ອາຄະເນ)",
          sittingDegree: "315.0°",
          sittingMountainText: "乾 (Qian)",
          sittingGuaText: "ກວ້າຂຽນ ☰ (ພາຍັບ)",
          badgeBg: "#4c1d95",
          badgeBorder: "#8b5cf6",
          badgeText: "ທິດຫັນໜ້າ: 135.0° (ຊຸ່ນ 巽 / SE)"
        })}

        <div style="display: flex; flex-direction: column; gap: 10px; justify-content: space-between; height: 420px;">
          <div style="background: rgba(76,29,149,0.25); border: 1.5px solid #6d28d9; border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 13px; font-weight: bold; color: #ddd6fe; margin-bottom: 6px;">
              🔍 ຂັ້ນຕອນວັດແທກຫຼົບສະໜາມໄຟຟ້າ:
            </div>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 11.5px; line-height: 1.45; color: #ede9fe;">
              <div><strong>1. ອອກມາວັດນອກຮົ້ວ 15 m:</strong> ຕັ້ງຂາຕັ້ງໄມ້ປອດໂລຫະຫ່າງຈາກໝໍ້ແປງໄຟຟ້າ ແລະ ເຄື່ອງຈັກຕັດໄມ້.</div>
              <div><strong>2. ສັງເກດເຂັມແມ່ເຫຼັກ:</strong> ເຂັມນິ້ງສະຫງົບ ບໍ່ແກວ່ງບິດບ້ຽວ.</div>
              <div><strong>3. ໝຸນຈານທອງ:</strong> ປັບລະດັບນ້ຳທ່ຽງ ແລ້ວໝຸນຈານຈົນເຂັມຕົກຮ່ອງເສັ້ນແດງ海底.</div>
              <div><strong>4. ອ່ານຄ່າຕັດ:</strong> ສາຍກາກະບາດຕັດອົງສາ = <strong>135.0°</strong> ຕົກກາງພູເຂົາ ຊຸ່ນ (Xun 巽).</div>
            </div>
          </div>

          <div style="background: rgba(139,92,246,0.12); border-left: 4px solid #8b5cf6; padding: 10px 14px; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: bold; color: #ddd6fe;">ວິນິດໄສທິດຫັນໂຮງງານ:</div>
            <div style="font-size: 11px; color: #faf5ff; margin-top: 3px; line-height: 1.45;">
              • ພູເຂົາ ຊຸ່ນ (Xun) ກວມເອົາ 127.5° – 142.5°<br>
              • ອົງສາ 135.0° ຄືແກນກາງສູນສູດ ➔ <strong>"ເຈີ້ງຊ່ຽນ (Zheng Xian) 100%"</strong> ບໍ່ມີມຸມບ່ຽງເບນ.
            </div>
          </div>

          <div style="background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 10px; padding: 8px 12px; font-size: 11px; color: #fca5a5; line-height: 1.4;">
            ⚠️ <strong>ຄຳເຕືອນ:</strong> ຫ້າມວັດແທກພາຍໃນໂຮງງານເດັດຂາດ ເພາະມໍເຕີ້ໄຟຟ້າແຮງສູງຈະດຶງເຂັມທິດແກວ່ງ 360°!
          </div>
        </div>
      </div>

      <div style="background: rgba(139,92,246,0.15); border: 1px solid #8b5cf6; border-radius: 8px; padding: 6px 14px; font-size: 11px; color: #faf5ff; display: flex; justify-content: space-between;">
        <span>🎯 <strong>ມາດຕະຖານ:</strong> ໂຮງງານອຸດສາຫະກຳໃຫຍ່ ຕ້ອງອອກມາວັດແທກກາງແຈ້ງ 15 m ຫຼົບສະໜາມໄຟຟ້າ.</span>
        <span style="font-weight: bold; color: #a78bfa;">避电定针 • 坐乾向巽</span>
      </div>
    </div>
  `;
  await renderPlate(page, c4LuopanHtml, path.join(outputDir, 'fig_3_case4_luopan_macro.png'));

  // =========================================================================
  // 7. CASE 4 - PART 2: ARCHITECTURAL FACTORY PLAN & 9 PALACES (ທ່ານ ບຸນມີ)
  // =========================================================================
  const c4FloorplanHtml = `
    <div style="width: 820px; height: 540px; background: linear-gradient(145deg, #120e1f 0%, #1c1533 50%, #130f21 100%); border: 2px solid #8b5cf6; border-radius: 18px; padding: 20px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 45px rgba(0,0,0,0.9);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(139,92,246,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 11px; color: #a78bfa; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            CASE STUDY 4 • PART 2: 建筑平面与九宫飞星 • ແປນໂຮງງານ & ຜັງ 9 ວັງ
          </div>
          <div style="font-size: 19px; font-weight: bold; color: #faf5ff; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ແປນໂຮງງານ 5,000 m² ຊ້ອນທັບຜັງດາວເຫີນ ແລະ ຈຸດໄທ້ຈີ໊ (ທ່ານ ບຸນມີ)
          </div>
        </div>
        <div style="background: rgba(139,92,246,0.2); border: 1.5px solid #8b5cf6; padding: 4px 14px; border-radius: 20px; font-size: 11px; color: #ddd6fe; font-weight: bold;">
          ຈຸດສູນກາງໄທ້ຈີ໊ (Tai Ji Centroid)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 440px 1fr; gap: 20px; align-items: center; flex: 1; margin: 10px 0;">
        <svg width="440" height="420" viewBox="0 0 440 420">
          <rect width="440" height="420" fill="#0d1117" rx="12" />

          <!-- Sitting NW 315° -->
          <rect x="110" y="8" width="220" height="22" rx="4" fill="#1e1b4b" stroke="#8b5cf6" stroke-width="1.2" />
          <text x="220" y="23" fill="#ddd6fe" font-size="10.5" font-weight="bold" text-anchor="middle">ທິດພິງ (Sitting 坐): 315.0° ພາຍັບ (乾)</text>

          <!-- Factory 5,000 m² Outer Boundary -->
          <rect x="40" y="38" width="360" height="280" rx="6" fill="#1e1b4b" stroke="#6366f1" stroke-width="2.2" />

          <!-- 9-Palace Grid Lines -->
          <line x1="160" y1="38" x2="160" y2="318" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="280" y1="38" x2="280" y2="318" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="40" y1="131" x2="400" y2="131" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="40" y1="225" x2="400" y2="225" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="4,3" />

          <!-- CAD Diagonal Geometric Centroid Lines ❶ -->
          <line x1="40" y1="38" x2="400" y2="318" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="5,3" />
          <line x1="400" y1="38" x2="40" y2="318" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="5,3" />
          <circle cx="220" cy="178" r="14" fill="#f59e0b" stroke="#fef3c7" stroke-width="2" />
          <text x="220" y="183" fill="#451a03" font-size="12" font-weight="bold" text-anchor="middle">❶</text>
          <text x="220" y="205" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">ຈຸດສູນກາງໄທ້ຈີ໊ (CAD)</text>

          <!-- Heavy Machinery Red Interference Zone (North / Star 5 Yellow) -->
          <circle cx="100" cy="178" r="38" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3" />
          <text x="100" y="175" fill="#fca5a5" font-size="9.5" font-weight="bold" text-anchor="middle">⚙️ ເຄື່ອງຈັກໜັກ</text>
          <text x="100" y="189" fill="#ef4444" font-size="8.5" text-anchor="middle">(ສະກົດດາວ 5 ເຫຼືອງ)</text>

          <!-- Administrative & Accounting Office (SE / Palace 9-1) ❹ -->
          <rect x="285" y="230" width="110" height="84" fill="#064e3b" rx="5" stroke="#10b981" stroke-width="2" />
          <text x="340" y="250" fill="#a7f3d0" font-size="10.5" font-weight="bold" text-anchor="middle">ຫ້ອງການບັນຊີ ❹</text>
          <text x="305" y="276" fill="#38bdf8" font-size="15" font-weight="bold">9</text>
          <text x="375" y="276" fill="#ef4444" font-size="15" font-weight="bold">1</text>
          <text x="340" y="294" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">2</text>
          <text x="340" y="307" fill="#34d399" font-size="8.5" font-weight="bold" text-anchor="middle">ວັງດາວໂຊກ 9-1</text>

          <!-- Main Truck Logistics Gate SE 135° ❷ (Qi Mouth) -->
          <rect x="300" y="313" width="75" height="12" fill="#10b981" stroke="#34d399" stroke-width="2" rx="2" />
          <circle cx="337" cy="338" r="12" fill="#10b981" />
          <text x="337" y="342" fill="#064e3b" font-size="11" font-weight="bold" text-anchor="middle">❷</text>
          <text x="240" y="342" fill="#6ee7b7" font-size="10" font-weight="bold">ປະຕູຊີ່ຫຼັກ SE 135° (ລົດບັນທຸກ 90%)</text>

          <!-- Qi Stream from SE to Centroid -->
          <line x1="337" y1="313" x2="220" y2="178" stroke="#34d399" stroke-width="2.5" stroke-dasharray="6,4" />

          <!-- Outside Measurement Station 15m ❸ -->
          <circle cx="80" cy="355" r="12" fill="#a855f7" stroke="#d8b4fe" stroke-width="1.8" />
          <text x="80" y="359" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">❸</text>
          <text x="80" y="375" fill="#d8b4fe" font-size="9" font-weight="bold" text-anchor="middle">ຈຸດວັດ 15 m ປອດໄຟຟ້າ</text>

          <!-- Facing Vector -->
          <line x1="337" y1="320" x2="337" y2="400" stroke="#ef4444" stroke-width="3" />
          <polygon points="337,408 331,396 343,396" fill="#ef4444" />
          <rect x="220" y="388" width="180" height="22" rx="4" fill="#4c1d95" stroke="#8b5cf6" stroke-width="1.2" />
          <text x="310" y="403" fill="#faf5ff" font-size="10.5" font-weight="bold" text-anchor="middle">ທິດຫັນ: 135.0° ຊຸ່ນ (巽 SE)</text>
        </svg>

        <div style="display: flex; flex-direction: column; gap: 10px; justify-content: space-between; height: 420px;">
          <div style="background: rgba(76,29,149,0.25); border: 1.5px solid #6d28d9; border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 13px; font-weight: bold; color: #ddd6fe; margin-bottom: 6px;">
              🏭 ການຈັດວາງພື້ນທີ່ໂຮງງານ:
            </div>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 11px; line-height: 1.45; color: #ede9fe;">
              <div>• <strong style="color: #fbbf24;">ຈຸດສູນກາງໄທ້ຈີ໊ ❶:</strong> ຕັດເສັ້ນທະແຍງມຸມແຜນຜັງ CAD ຫາຈຸດສູນກາງມວນສານແທ້ຈິງ.</div>
              <div>• <strong style="color: #6ee7b7;">ປະຕູຊີ່ຫຼັກ ❷:</strong> ປະຕູ SE (ທິດຊຸ່ນ 巽) ມີລົດບັນທຸກສັນຈອນ 90% ເປັນປາກຮັບຊີ່ໃຫຍ່ສຸດ.</div>
              <div>• <strong style="color: #34d399;">ຫ້ອງການບັນຊີ ❹:</strong> ຍ້າຍມາວາງຕິດປະຕູຊຸ່ນໃນວັງດາວ 9-1 ດຶງດູດກຳໄລ.</div>
              <div>• <strong style="color: #fca5a5;">ເຄື່ອງຈັກໜັກ:</strong> ຍ້າຍມໍເຕີ້ສຽງດັງໄປໄວ້ໃນວັງດາວ 5 ເຫຼືອງ ເພື່ອສະກົດຂົ່ມ.</div>
            </div>
          </div>

          <div style="background: rgba(109,40,217,0.2); border-left: 4px solid #8b5cf6; padding: 10px 14px; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: bold; color: #ede9fe;">ຫຼັກການກຳນົດປະຕູຊີ່:</div>
            <div style="font-size: 10.5px; color: #f5f3ff; margin-top: 3px; line-height: 1.4;">
              "动处为气口" (ບ່ອນໃດມີການເຄື່ອນໄຫວ ແລະ ລົດບັນທຸກສິນຄ້າສັນຈອນຫຼາຍທີ່ສຸດ ບ່ອນນັ້ນຄືປະຕູຊີ່ແທ້ຈິງຂອງໂຮງງານ).
            </div>
          </div>

          <div style="background: rgba(16,185,129,0.1); border: 1px solid #10b981; border-radius: 10px; padding: 8px 12px; font-size: 11px; color: #a7f3d0; line-height: 1.4;">
            💡 <strong>ຜົນການແກ້ໄຂ:</strong> ຫຼັງຈາກຍ້າຍຫ້ອງການບັນຊີມາຮັບດາວ 9-1 ຢູ່ປະຕູຊຸ່ນ ກຳໄລໂຮງງານເພີ່ມຂຶ້ນ 300%!
          </div>
        </div>
      </div>

      <div style="background: rgba(139,92,246,0.15); border: 1px solid #8b5cf6; border-radius: 8px; padding: 6px 14px; font-size: 11px; color: #faf5ff; display: flex; justify-content: space-between;">
        <span>🎯 <strong>ຜົນລັບ:</strong> ໄທ້ຈີ໊ CAD + ປະຕູຊີ່ລົດບັນທຸກ SE + ຫ້ອງການວັງ 9-1 = ທຸລະກິດໂຮງງານຮຸ່ງເຮືອງ.</span>
        <span style="font-weight: bold; color: #a78bfa;">动处立门 • 财源广进</span>
      </div>
    </div>
  `;
  await renderPlate(page, c4FloorplanHtml, path.join(outputDir, 'fig_3_case4_factory_floorplan.png'));

  // =========================================================================
  // 8. CASE 5 - PART 1: MACRO LUOPAN COMPASS (ທ່ານ ດາວອນ 22.5° → 28.5°)
  // =========================================================================
  const c5LuopanHtml = `
    <div style="width: 820px; height: 540px; background: linear-gradient(145deg, #1c0d0d 0%, #291212 50%, #170a0a 100%); border: 2px solid #ef4444; border-radius: 18px; padding: 20px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 45px rgba(0,0,0,0.9);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(239,68,68,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 11px; color: #f87171; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            CASE STUDY 5 • PART 1: 罗盘校准与分金 • ເຕັກນິກການໝຸນ & ອ່ານຄ່າຫຼົວຜານ (ບິດແກ້ໄຂ)
          </div>
          <div style="font-size: 19px; font-weight: bold; color: #fef2f2; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ວິທີໝຸນຈານຫຼົວຜານແກ້ໄຂເສັ້ນມະຫາຂົງຫວາງ 22.5° ➔ 28.5° (ທ່ານ ດາວອນ)
          </div>
        </div>
        <div style="background: rgba(239,68,68,0.2); border: 1.5px solid #ef4444; padding: 4px 14px; border-radius: 20px; font-size: 11px; color: #fca5a5; font-weight: bold;">
          ບິດປະຕູ +6.0° (Cured 100%)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 420px 1fr; gap: 20px; align-items: center; flex: 1; margin: 10px 0;">
        ${renderLargeCompassSvg({
          facingDegree: "22.5° ➔ 28.5°",
          facingMountainText: "癸丑界 ➔ 丑 (Chou)",
          facingGuaText: "ແບ່ງ Kan ☵ / Gen ☶",
          sittingDegree: "202.5° ➔ 208.5°",
          sittingMountainText: "丁未界 ➔ 未 (Wei)",
          sittingGuaText: "ແບ່ງ Li ☲ / Kun ☷",
          isKongWang: true,
          showPivotArrow: true,
          pivotText: "ບິດ +6.0° ➔ 28.5° ໂຈ່ວ",
          badgeBg: "#064e3b",
          badgeBorder: "#10b981",
          badgeText: "ມຸມໃໝ່ປອດໄພ: 28.5° (ໂຈ່ວ 丑 100%)"
        })}

        <div style="display: flex; flex-direction: column; gap: 10px; justify-content: space-between; height: 420px;">
          <div style="background: rgba(127,29,29,0.25); border: 1.5px solid #b91c1c; border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 13px; font-weight: bold; color: #fca5a5; margin-bottom: 6px;">
              🔍 ຂັ້ນຕອນວິນິດໄສ & ບິດໝຸນຫຼົວຜານ:
            </div>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 11.5px; line-height: 1.45; color: #fecaca;">
              <div><strong>1. ແກນເດີມ 22.5°:</strong> ຕົກເສັ້ນແບ່ງລະຫວ່າງ ກຸ້ຍ-ໂຈ່ວ ເປັນ <strong>"ມະຫາຂົງຫວາງ (大空亡)"</strong>.</div>
              <div><strong>2. ພະລັງງານສູນສິ້ນ:</strong> ບໍ່ສາມາດຕັ້ງຜັງດາວໄດ້ ເກີດອາຖັນປ່ວຍໄຂ້ ແລະ ເສຍຊັບຊຳເຮື້ອ!</div>
              <div><strong>3. ໝຸນຈານທອງບິດ +6.0°:</strong> ບິດຈານຫຼົວຜານໄປຫາ <strong>28.5° ພູເຂົາ ໂຈ່ວ (Chou 丑)</strong>.</div>
              <div><strong>4. ເຂົ້າສູ່ເຂດປອດໄພ:</strong> 28.5° ຕົກເຂດເຈີ້ງຊ່ຽນຂອງກວ້າເກິ່ນ ປອດໄພ 100%!</div>
            </div>
          </div>

          <div style="background: rgba(16,185,129,0.15); border-left: 4px solid #10b981; padding: 10px 14px; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: bold; color: #a7f3d0;">ສູດເລຂາຄະນິດຖອຍຮົ້ນວົງກົບ:</div>
            <div style="font-size: 11px; color: #ecfdf5; margin-top: 3px; line-height: 1.45;">
              • ຄວາມກວ້າງປະຕູ $W = 1.50\text{ m}$, ມຸມບິດ $\theta = +6.0^\circ$<br>
              • ໄລຍະຖອຍຮົ້ນ: $\Delta = W \times \sin(6.0^\circ) = 1.50 \times 0.1045 = \mathbf{15.7\text{ cm}}$!
            </div>
          </div>

          <div style="background: rgba(239,68,68,0.1); border: 1px solid #ef4444; border-radius: 10px; padding: 8px 12px; font-size: 11px; color: #fca5a5; line-height: 1.4;">
            💡 <strong>ວິຊາບິດປະຕູ:</strong> ບໍ່ຈຳເປັນຕ້ອງທຸບເຮືອນຖິ້ມ! ພຽງແຕ່ບິດວົງກົບປະຕູໃຫຍ່ 15.7 cm ກໍປ່ຽນຮ້າຍກາຍເປັນດີ 100%!
          </div>
        </div>
      </div>

      <div style="background: rgba(239,68,68,0.15); border: 1px solid #ef4444; border-radius: 8px; padding: 6px 14px; font-size: 11px; color: #fef2f2; display: flex; justify-content: space-between;">
        <span>🎯 <strong>ມາດຕະຖານ:</strong> ເສັ້ນມະຫາຂົງຫວາງ 22.5° ແກ້ໄຂໄດ້ດ້ວຍການບິດປະຕູ +6.0° ສູ່ 28.5° ພູເຂົາໂຈ່ວ.</span>
        <span style="font-weight: bold; color: #fca5a5;">转关脱煞 • 移门纳吉</span>
      </div>
    </div>
  `;
  await renderPlate(page, c5LuopanHtml, path.join(outputDir, 'fig_3_case5_luopan_macro.png'));

  // =========================================================================
  // 9. CASE 5 - PART 2: ARCHITECTURAL FLOORPLAN WITH ANGLED DOOR (ທ່ານ ດາວອນ)
  // =========================================================================
  const c5FloorplanHtml = `
    <div style="width: 820px; height: 540px; background: linear-gradient(145deg, #1c0d0d 0%, #291212 50%, #170a0a 100%); border: 2px solid #ef4444; border-radius: 18px; padding: 20px 24px; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 20px 45px rgba(0,0,0,0.9);">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid rgba(239,68,68,0.4); padding-bottom: 10px;">
        <div>
          <div style="font-size: 11px; color: #f87171; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">
            CASE STUDY 5 • PART 2: 建筑平面与九宫飞星 • ແປນບິດມຸມປະຕູ & ຜັງ 9 ວັງໃໝ່
          </div>
          <div style="font-size: 19px; font-weight: bold; color: #fef2f2; font-family: 'Noto Serif Lao'; margin-top: 2px;">
            ແປນເຮືອນບິດມຸມປະຕູ +6.0° ຊ້ອນທັບຜັງດາວໂຈ່ວ-ໝຸຍ (ທ່ານ ດາວອນ)
          </div>
        </div>
        <div style="background: rgba(16,185,129,0.2); border: 1.5px solid #10b981; padding: 4px 14px; border-radius: 20px; font-size: 11px; color: #a7f3d0; font-weight: bold;">
          ຜັງດາວຟື້ນຕົວ (起死回生)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 440px 1fr; gap: 20px; align-items: center; flex: 1; margin: 10px 0;">
        <svg width="440" height="420" viewBox="0 0 440 420">
          <rect width="440" height="420" fill="#0d1117" rx="12" />

          <!-- Rear Rockery (208.5° Wei) -->
          <rect x="40" y="8" width="360" height="26" rx="4" fill="#1c1917" stroke="#44403c" stroke-dasharray="3,3" />
          <text x="220" y="25" fill="#a8a29e" font-size="10" text-anchor="middle">⛰️ ສວນຫີນພູເຂົາ 1.8 m (ຄ້ຳຈຸນດາວພູ 9 ເສີມສຸຂະພາບພັນລະຍາ)</text>

          <!-- Fixed House Outer Walls (Original Axis 22.5°) -->
          <rect x="40" y="42" width="360" height="260" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="2.2" />

          <!-- 9-Palace Grid Lines -->
          <line x1="160" y1="42" x2="160" y2="302" stroke="#7f1d1d" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="280" y1="42" x2="280" y2="302" stroke="#7f1d1d" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="40" y1="128" x2="400" y2="128" stroke="#7f1d1d" stroke-width="1.5" stroke-dasharray="4,3" />
          <line x1="40" y1="215" x2="400" y2="215" stroke="#7f1d1d" stroke-width="1.5" stroke-dasharray="4,3" />

          <!-- Deadly Original Axis 22.5° -->
          <line x1="220" y1="42" x2="220" y2="310" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="6,3" />
          <text x="185" y="160" fill="#fca5a5" font-size="9" transform="rotate(-90 185 160)">ແກນເດີມ 22.5° (ມະຫາຂົງຫວາງ ☠️)</text>

          <!-- Rear Master Bed (SW 208.5° Wei) -->
          <rect x="165" y="46" width="110" height="78" fill="#064e3b" rx="4" stroke="#10b981" stroke-width="1.5" />
          <text x="220" y="66" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">ຫ້ອງນອນໃຫຍ່</text>
          <text x="180" y="90" fill="#38bdf8" font-size="15" font-weight="bold">9</text>
          <text x="250" y="90" fill="#ef4444" font-size="15" font-weight="bold">2</text>
          <text x="220" y="110" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">2</text>

          <!-- Center Tai Ji -->
          <rect x="165" y="133" width="110" height="78" fill="#1c1917" rx="4" />
          <text x="220" y="153" fill="#fde68a" font-size="10" font-weight="bold" text-anchor="middle">ໃຈກາງໄທ້ຈີ໊</text>
          <text x="180" y="177" fill="#38bdf8" font-size="15" font-weight="bold">2</text>
          <text x="250" y="177" fill="#ef4444" font-size="15" font-weight="bold">9</text>
          <text x="220" y="197" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">9</text>

          <!-- Front Living Foyer -->
          <rect x="165" y="220" width="110" height="78" fill="#0f172a" rx="4" />
          <text x="220" y="240" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">ໂຖງໜ້າເຮືອນ</text>
          <text x="180" y="264" fill="#38bdf8" font-size="15" font-weight="bold">7</text>
          <text x="250" y="264" fill="#ef4444" font-size="15" font-weight="bold">9</text>
          <text x="220" y="284" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">7</text>

          <!-- ANGLED DOOR PORTAL (+6.0° Pivot, Setback 15.7cm) ❷ -->
          <g transform="translate(220, 302) rotate(6)">
            <rect x="-45" y="-4" width="90" height="8" fill="#44403c" rx="1" />
            <rect x="-45" y="-6" width="90" height="12" rx="2" fill="#10b981" stroke="#34d399" stroke-width="2.5" />
            <line x1="-45" y1="0" x2="45" y2="0" stroke="#ffffff" stroke-width="2" />
            <path d="M 45 0 A 45 45 0 0 1 42 12" fill="none" stroke="#fbbf24" stroke-width="2" />
          </g>

          <rect x="280" y="295" width="135" height="26" rx="5" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
          <text x="347" y="309" fill="#a7f3d0" font-size="9.5" font-weight="bold" text-anchor="middle">ບິດວົງກົບ +6.0° ❷</text>
          <text x="347" y="318" fill="#6ee7b7" font-size="8" text-anchor="middle">(ຖອຍຮົ້ນ 15.7 cm)</text>

          <!-- Water Fountain Urn Outside Angled Door -->
          <circle cx="160" cy="345" r="17" fill="#0284c7" stroke="#38bdf8" stroke-width="2.2" />
          <text x="160" y="350" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">ອ່າງນ້ຳ 9</text>
          <text x="255" y="343" fill="#6ee7b7" font-size="10.5" font-weight="bold">ອ່າງນ້ຳລົ້ນເຄື່ອນໄຫວ</text>
          <text x="255" y="358" fill="#94a3b8" font-size="9.5">ດຶງດູດດາວນ້ຳ 9 ມ່ວງເຂົ້າປະຕູໃໝ່</text>

          <!-- New Facing Vector (28.5° Chou) -->
          <line x1="220" y1="310" x2="255" y2="400" stroke="#10b981" stroke-width="3" />
          <polygon points="259,408 249,397 261,394" fill="#10b981" />
          <rect x="150" y="388" width="200" height="22" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.2" />
          <text x="250" y="403" fill="#a7f3d0" font-size="10.5" font-weight="bold" text-anchor="middle">ທິດຫັນໃໝ່: 28.5° (ໂຈ່ວ 丑 / Gen ☶)</text>
        </svg>

        <div style="display: flex; flex-direction: column; gap: 10px; justify-content: space-between; height: 420px;">
          <div style="background: rgba(127,29,29,0.25); border: 1.5px solid #b91c1c; border-radius: 12px; padding: 12px 14px;">
            <div style="font-size: 13px; font-weight: bold; color: #fca5a5; margin-bottom: 6px;">
              🚪 ເຕັກນິກການບິດປະຕູແກ້ໄຂ:
            </div>
            <div style="display: flex; flex-direction: column; gap: 7px; font-size: 11px; line-height: 1.45; color: #fecaca;">
              <div>• <strong style="color: #6ee7b7;">ບິດວົງກົບ +6.0° ❷:</strong> ຖອຍຮົ້ນວົງກົບເບື້ອງຂວາ 15.7 cm ປ່ຽນທິດຫັນຈາກ 22.5° ເປັນ 28.5° ພູເຂົາໂຈ່ວ.</div>
              <div>• <strong style="color: #38bdf8;">ອ່າງນ້ຳລົ້ນ:</strong> ຕັ້ງໜ້າປະຕູໃໝ່ເພື່ອດຶງດູດກະແສຊັບດາວ 9 ມ່ວງ.</div>
              <div>• <strong style="color: #a7f3d0;">ສວນຫີນ 1.8 m:</strong> ສ້າງໄວ້ຫຼັງເຮືອນຄ້ຳຈຸນດາວພູ ເພື່ອສຸຂະພາບພັນລະຍາ.</div>
              <div>• <strong style="color: #fbbf24;">ໂຄງສ້າງເຮືອນເດີມ:</strong> ບໍ່ຕ້ອງທຸບກຳແພງ ຫຼື ຮື້ຖອນເຮືອນໃຫຍ່.</div>
            </div>
          </div>

          <div style="background: rgba(16,185,129,0.15); border-left: 4px solid #10b981; padding: 10px 14px; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: bold; color: #a7f3d0;">ຜົນລັບຫຼັງການບິດປະຕູ:</div>
            <div style="font-size: 10.5px; color: #ecfdf5; margin-top: 3px; line-height: 1.4;">
              ພາຍໃນ 6 ເດືອນ: ພັນລະຍາຂອງທ່ານ ດາວອນ ທີ່ປ່ວຍຊຳເຮື້ອໄດ້ຫາຍດີເປັນປົກກະຕິ, ແລະ ທຸລະກິດທີ່ເຄີຍຂາດທຶນກັບມາຟື້ນຕົວມີກຳໄລຢ່າງອັດສະຈັນ!
            </div>
          </div>

          <div style="background: rgba(245,158,11,0.1); border: 1px solid #d97706; border-radius: 10px; padding: 8px 12px; font-size: 11px; color: #fde68a; line-height: 1.4;">
            💡 <strong>ວິຊາບິດປະຕູ:</strong> "移门纳吉 • 起死回生" ຄືສຸດຍອດເຄັດລັບແຫ່ງສາຍວິຊາສຽນຄົງດາວເຫີນ!
          </div>
        </div>
      </div>

      <div style="background: rgba(16,185,129,0.15); border: 1px solid #10b981; border-radius: 8px; padding: 6px 14px; font-size: 11px; color: #ecfdf5; display: flex; justify-content: space-between;">
        <span>🎯 <strong>ຜົນລັບ:</strong> ບິດປະຕູ 15.7 cm + ອ່າງນ້ຳ 9 + ສວນຫີນຫຼັງ = ປ່ຽນຮ້າຍກາຍເປັນດີ 100%.</span>
        <span style="font-weight: bold; color: #34d399;">起死回生 • 富贵安康</span>
      </div>
    </div>
  `;
  await renderPlate(page, c5FloorplanHtml, path.join(outputDir, 'fig_3_case5_door_tilting_floorplan.png'));

  await browser.close();
  console.log('🎉 ALL 10 DEDICATED SEPARATED PLATES GENERATED SUCCESSFULLY!');
})();
