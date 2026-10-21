// enrich_boundary_doctrine.js
// Creates 100% structured cards for all 18 Boundary & Environmental Adjacency Archetypes

const fs = require('fs');

const rawLao = JSON.parse(fs.readFileSync('script/data_boundary_adjacencies_lao.json', 'utf8'));
const rawHmong = JSON.parse(fs.readFileSync('script/data_boundary_adjacencies_hmong.json', 'utf8'));

// Helper to wrap text into 2 short lines
function splitLines(text, maxLen = 28) {
  if (!text) return ['', ''];
  if (text.length <= maxLen) return [text, ''];
  const words = text.split(' ');
  let l1 = '', l2 = '';
  for (const w of words) {
    if ((l1 + ' ' + w).trim().length <= maxLen) {
      l1 = (l1 + ' ' + w).trim();
    } else {
      l2 = (l2 + ' ' + w).trim();
    }
  }
  return [l1, l2];
}

const enrichedLao = rawLao.map(item => {
  const [rem1, rem2] = item.comprehensiveRemedy.split('; ');
  const remSteps = item.comprehensiveRemedy.split('; ').map(s => s.trim());
  const tabs = item.taboos.split('\n').map(t => t.replace(/^[•\s-]+/, '').trim());

  return {
    id: item.id,
    baseName: item.baseName,
    category: item.category,
    score: item.score,
    isGood: item.isGood,
    roadType: item.roadType,
    summary: item.geometryPhysics,
    
    entrance: {
      title: '🚪 ທາງເຂົ້າ & ປະຕູຮົ້ວ',
      l1: '• ປະຕູຮົ້ວ: ' + item.entrancePlacement.slice(0, 26),
      l2: '• ໄລຍະຫ່າງ: ຫ່າງມຸມຮົ້ວ 3 ແມັດ',
      l3: '• ທາງລົດ: ໂຄ້ງຊະລໍຄວາມໄວ',
      l4: '• ປອດໄພ: ຫຼີກລ່ຽງທາງສາມແພ່ງ',
      sub1: 'ຕຳແໜ່ງ: ' + (item.roadType.length > 20 ? item.roadType.slice(0, 20) : item.roadType),
      sub2: '✓ ເປີດຮັບພະລັງ Sheng Qi ປອດໄພ'
    },

    gua: {
      title: '☯️ ທາດກວ້າ & ຄວາມຖືກຊາຕາ',
      l1: '• ທາດປະຈຳ: ' + item.elementGua.split(' - ')[0].slice(0, 24),
      l2: '• ✓ ຖືກກັບ: ' + item.favorablePeople.slice(0, 24),
      l3: '  ' + (item.favorablePeople.length > 24 ? item.favorablePeople.slice(24, 52) : ''),
      l4: '• ✗ ບໍ່ຖືກກັບ: ' + item.clashingPeople.slice(0, 24),
      l5: '  ' + (item.clashingPeople.length > 24 ? item.clashingPeople.slice(24, 52) : ''),
      sub1: 'ກົດເກນ 5 ທາດ & ເຂັມທິດ 8 ທິດ',
      sub2: '✓ ສົມດຸນພະລັງງານທຳມະຊາດ'
    },

    house: {
      title: '🧭 ຕຳແໜ່ງເຮືອນ & ທິດຫັນໜ້າ',
      l1: '• ຕຳແໜ່ງ: ' + item.housePositioning.slice(0, 24),
      l2: '• ໄລຍະຖອຍ: ' + (item.housePositioning.length > 24 ? item.housePositioning.slice(24, 52) : 'ຖອຍຮົ່ນ 5-8 ແມັດ'),
      l3: '• ທິດໜ້າ: ' + item.orientationFacing.split('; ')[0].replace('ທິດໜ້າເຮືອນ (向): ', '').replace('ທິດໜ້າເຮືອນ: ', '').slice(0, 24),
      l4: '• ທິດພິງ: ' + (item.orientationFacing.split('; ')[1] || '').replace('ທິດພິງຫຼັງ (坐): ', '').replace('ທິດຫຼັງເຮືອນ: ', '').slice(0, 24),
      bed: (item.orientationFacing.split('; ')[2] || 'ພິງຝາທຶບ').replace('ທິດຫົວຕຽງ: ', '').slice(0, 22),
      bedSub: 'ພິງຝາທຶບ ຫຼີກລ່ຽງກົງປ່ອງຢ້ຽມ'
    },

    remedy: {
      title: '🛡️ ວິທີແກ້ໄຂດ່ວນ 4 ຂັ້ນຕອນ',
      l1: remSteps[0] ? remSteps[0].slice(0, 28) : '1. ປັບສົມດຸນແນວຮົ້ວ',
      l2: remSteps[1] ? remSteps[1].slice(0, 28) : '2. ປູກຕົ້ນໄມ້ບັງລົມ',
      l3: remSteps[2] ? remSteps[2].slice(0, 28) : '3. ຕັ້ງສີລາໄທຊານ',
      l4: remSteps[3] ? remSteps[3].slice(0, 28) : '4. ອ່າງນ້ຳພຸຊະລໍລົມ',
      t1: '• ' + (tabs[0] || 'ຫ້າມເປີດປະຕູກົງມຸມແຫຼມ').slice(0, 27),
      t2: '• ' + (tabs[1] || 'ຫ້າມຂຸດໜອງນ້ຳຫຼັງເຮືອນ').slice(0, 27),
      t3: '• ' + (tabs[2] || 'ຫ້າມຕັ້ງຫ້ອງນອນຕິດແນວອັນຕະລາຍ').slice(0, 27)
    }
  };
});

fs.writeFileSync('script/data_boundary_structured_lao.json', JSON.stringify(enrichedLao, null, 2), 'utf8');
console.log('✅ Wrote structured Lao boundary data');

// Corresponding Hmong
const enrichedHmong = rawHmong.map(item => {
  const remSteps = item.comprehensiveRemedy.split('; ').map(s => s.trim());
  const tabs = item.taboos.split('\n').map(t => t.replace(/^[•\s-]+/, '').trim());

  return {
    id: item.id,
    baseName: item.baseName,
    category: item.category,
    score: item.score,
    isGood: item.isGood,
    roadType: item.roadType,
    summary: item.geometryPhysics,

    entrance: {
      title: '🚪 QHOV ROOJ & KEV TSHEB',
      l1: '• Qhov Rooj Vag: ' + item.entrancePlacement.slice(0, 24),
      l2: '• Ceev Xwm: Deb kaum av 3m',
      l3: '• Kev Tsheb: Nkhaus mos muag',
      l4: '• Nyab Xeeb: Zam kev tshuam',
      sub1: 'Qauv Ciam: ' + (item.roadType.length > 20 ? item.roadType.slice(0, 20) : item.roadType),
      sub2: '✓ Txais Zog Sheng Qi'
    },

    gua: {
      title: '☯️ ZOG BAGUA & NEEG HAUM',
      l1: '• Zog Thaj Av: ' + item.elementGua.split(' - ')[0].slice(0, 22),
      l2: '• ✓ Haum: ' + item.favorablePeople.slice(0, 24),
      l3: '  ' + (item.favorablePeople.length > 24 ? item.favorablePeople.slice(24, 50) : ''),
      l4: '• ✗ Tsis Haum: ' + item.clashingPeople.slice(0, 24),
      l5: '  ' + (item.clashingPeople.length > 24 ? item.clashingPeople.slice(24, 50) : ''),
      sub1: 'Tsib Yam Zog & Bagua 8 Phab',
      sub2: '✓ Sib Npaug Zog Huab Cua'
    },

    house: {
      title: '🧭 TSO TSEV & TSHAV',
      l1: '• Chaw: ' + item.housePositioning.slice(0, 24),
      l2: '• Qhov Deb: ' + (item.housePositioning.length > 24 ? item.housePositioning.slice(24, 50) : 'Deb kev 5-8m'),
      l3: '• Ntsia (Xiang): ' + item.orientationFacing.split('; ')[0].replace('Ntsia: ', '').slice(0, 22),
      l4: '• Zaum (Zuo): ' + (item.orientationFacing.split('; ')[1] || '').replace('Zaum: ', '').slice(0, 22),
      bed: (item.orientationFacing.split('; ')[2] || 'Phab ntsa tuab').replace('Taub hau pw: ', '').slice(0, 22),
      bedSub: 'Phab ntsa tuab tsis ncaj qhov rai'
    },

    remedy: {
      title: '🛡️ KEV KHO 4 KAUJ RUAM',
      l1: remSteps[0] ? remSteps[0].slice(0, 28) : '1. Kho phab ntsa ciam av',
      l2: remSteps[1] ? remSteps[1].slice(0, 28) : '2. Cog hav ntoo ntsuab',
      l3: remSteps[2] ? remSteps[2].slice(0, 28) : '3. Pob zeb Tai Shan',
      l4: remSteps[3] ? remSteps[3].slice(0, 28) : '4. Pas dej txo cua ntsawj',
      t1: '• ' + (tabs[0] || 'Txwv tsis qhib qhov rooj kaum').slice(0, 26),
      t2: '• ' + (tabs[1] || 'Txwv tsis khawb pas dej tom qab').slice(0, 26),
      t3: '• ' + (tabs[2] || 'Txwv tsis tso chav pw ze kev').slice(0, 26)
    }
  };
});

fs.writeFileSync('script/data_boundary_structured_hmong.json', JSON.stringify(enrichedHmong, null, 2), 'utf8');
console.log('✅ Wrote structured Hmong boundary data');
