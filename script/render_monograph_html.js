// script/render_monograph_html.js
const fs = require('fs');
const path = require('path');

const monoDir = path.resolve(__dirname, '../monographs/lao');
const files = fs.readdirSync(monoDir).filter(f => f.endsWith('.md'));

function mdToHtml(md) {
  // Convert tables first
  let lines = md.split('\n');
  let inTable = false;
  let tableHtml = '';
  let processedLines = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHtml = '<table style="width:100%; border-collapse:collapse; margin:20px 0; font-size:0.95rem;">';
        let cols = line.split('|').slice(1, -1).map(c => c.trim());
        tableHtml += '<thead><tr>' + cols.map(c => '<th style="border:1px solid #cbd5e1; padding:8px 12px; background:#f1f5f9; text-align:left;">' + c + '</th>').join('') + '</tr></thead><tbody>';
        // Skip separator line if next
        if (i + 1 < lines.length && lines[i + 1].includes('---')) {
          i++;
        }
      } else {
        let cols = line.split('|').slice(1, -1).map(c => c.trim());
        tableHtml += '<tr>' + cols.map(c => '<td style="border:1px solid #cbd5e1; padding:8px 12px;">' + c + '</td>').join('') + '</tr>';
      }
    } else {
      if (inTable) {
        tableHtml += '</tbody></table>';
        processedLines.push(tableHtml);
        inTable = false;
        tableHtml = '';
      }
      processedLines.push(lines[i]);
    }
  }
  if (inTable) {
    tableHtml += '</tbody></table>';
    processedLines.push(tableHtml);
  }

  let html = processedLines.join('\n')
    .replace(/^### (.*$)/gim, '<h3 style="color:#0284c7; margin-top:20px; font-size:1.2rem;">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 style="color:#b45309; border-bottom:2px solid #fef3c7; padding-bottom:6px; margin-top:35px; font-size:1.5rem;">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 style="color:#78350f; font-size:2rem; text-align:center; margin-bottom:20px;">$1</h1>')
    .replace(/^\> (.*$)/gim, '<blockquote style="background:#fef3c7; border-left:4px solid #f59e0b; padding:12px 18px; margin:15px 0; border-radius:4px; font-style:italic;">$1</blockquote>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/\n\n/gim, '</p><p style="margin-bottom:12px; line-height:1.8; text-align:justify;">')
    .replace(/\n- (.*$)/gim, '<li style="margin-left:25px; line-height:1.7;">$1</li>')
    .replace(/---/gim, '<hr style="border:none; border-top:1px solid #e2e8f0; margin:30px 0;">');

  return '<p style="margin-bottom:12px; line-height:1.8; text-align:justify;">' + html + '</p>';
}

files.forEach(file => {
  const id = file.replace('.md', '');
  const mdPath = path.join(monoDir, file);
  const mdContent = fs.readFileSync(mdPath, 'utf8');

  // Extract title
  const firstLine = mdContent.split('\n')[0].replace('# ', '').trim();
  const bodyHtml = mdToHtml(mdContent);

  const fullHtml = `<!DOCTYPE html>
<html lang="lo">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${firstLine}</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Lao:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Noto Serif Lao', serif;
            background: #fafaf9;
            color: #1c1917;
            margin: 0;
            padding: 40px 20px;
            display: flex;
            justify-content: center;
        }
        .container {
            max-width: 900px;
            background: #ffffff;
            padding: 50px 60px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
            border: 1px solid #e7e5e4;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.95rem;
        }
        th, td {
            border: 1px solid #cbd5e1;
            padding: 10px 14px;
            text-align: left;
        }
        th {
            background: #f1f5f9;
            color: #334155;
        }
        .badge {
            display: inline-block;
            background: #ecfdf5;
            color: #047857;
            padding: 4px 12px;
            border-radius: 9999px;
            font-weight: 600;
            font-size: 0.85rem;
            border: 1px solid #a7f3d0;
        }
        .header-meta {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 25px;
            border-bottom: 1px solid #e2e8f0;
        }
        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #b45309;
            text-decoration: none;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .back-link:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="../../lao/index.html" class="back-link">← ກັບຄືນສູ່ໜ້າຫຼັກ (Back to Atlas Portal)</a>
        <div class="header-meta">
            <span class="badge">Masterclass Monograph 10,000+ ຄຳ</span>
        </div>
        ${bodyHtml}
    </div>
</body>
</html>`;

  const outHtmlPath = path.join(monoDir, id + '.html');
  fs.writeFileSync(outHtmlPath, fullHtml, 'utf8');
  console.log(`Rendered: ${id}.html (${(fullHtml.length / 1024).toFixed(1)} KB)`);
});
