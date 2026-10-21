// build_master_atlas_encyclopedia_docx.js
// Dedicated High-Precision OpenXML Compiler for Book 2:
// Phau Ntawv Qhia Tag Nrho Cov Qauv Roob, Thaj Av Thiab Kev Kho Looj Mem
// (The Master Atlas & Encyclopedia of Mountain Landforms, Land Plots, and Environmental Sha Remedies)

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, PageOrientation, Header, Footer,
  PageNumber, AlignmentType
} = require('docx');

const { getAtlasEncyclopediaContent } = require('./atlas_encyclopedia_content');

console.log("================================================================================");
console.log("🗺️  COMPILING BOOK 2: MASTER ATLAS & ENCYCLOPEDIA OF LANDFORMS & PLOTS");
console.log("================================================================================");

const contentElements = getAtlasEncyclopediaContent();
console.log(`Loaded ${contentElements.length} elements from atlas_encyclopedia_content.js`);

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Segoe UI", size: 20, color: "212121" }
      }
    }
  },
  sections: [
    {
      properties: {
        titlePage: true,
        page: {
          size: {
            width: 11906, // Pass 11906 so docx flips with PageOrientation.LANDSCAPE to w:w=16838!
            height: 16838,
            orientation: PageOrientation.LANDSCAPE
          },
          margin: {
            top: 1000,
            bottom: 1000,
            left: 1200,
            right: 1200
          }
        }
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              spacing: { after: 120 },
              children: [
                new TextRun({
                  text: "PHAU NTAWV QHIA TAG NRHO COV QAUV ROOB, THAJ AV THIAB KEV KHO LOOJ MEM  |  MASTER ATLAS ENCYCLOPEDIA",
                  size: 16,
                  color: "78909C",
                  font: "Segoe UI"
                })
              ]
            })
          ]
        }),
        first: new Header({
          children: []
        })
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 120 },
              children: [
                new TextRun({
                  text: "Daim Ntawv - ",
                  size: 16,
                  color: "78909C",
                  font: "Segoe UI"
                }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  size: 16,
                  color: "78909C",
                  font: "Segoe UI"
                }),
                new TextRun({
                  text: " ntawm ",
                  size: 16,
                  color: "78909C",
                  font: "Segoe UI"
                }),
                new TextRun({
                  children: [PageNumber.TOTAL_PAGES],
                  size: 16,
                  color: "78909C",
                  font: "Segoe UI"
                })
              ]
            })
          ]
        }),
        first: new Footer({
          children: []
        })
      },
      children: contentElements
    }
  ]
});

const outputDocxPath = path.resolve(__dirname, '..', 'doc', 'Phau_Ntawv_Qhia_Tag_Nrho_Cov_Qauv_Roob_Thaj_Av.docx');

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputDocxPath, buffer);
  const sizeMb = (buffer.length / (1024 * 1024)).toFixed(2);
  console.log(`\n🎉 BOOK 2 (MASTER ATLAS ENCYCLOPEDIA) SUCCESSFULLY GENERATED!`);
  console.log(`File: ${outputDocxPath}`);
  console.log(`Size: ${buffer.length} bytes (${sizeMb} MB)`);
  console.log("================================================================================\n");
}).catch(err => {
  console.error("FATAL: Failed to pack Document:", err);
  process.exit(1);
});
