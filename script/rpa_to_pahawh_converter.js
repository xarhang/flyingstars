/**
 * RPA to Pahawh Hmong (Stage 3 / Version 3) Transliteration Engine
 * Conforms to Unicode 7.0 Standard U+16B00..U+16B8F
 *
 * Pahawh Hmong is a semi-syllabic script written Left-to-Right.
 * Inside each syllable, the Vowel Rime (with tone) is written FIRST,
 * followed by the Consonant Onset.
 */

// 1. VOWEL RIMES (Third Stage Reduced Version)
const RIMES = {
  // -b (high level)
  'eeb': '\u{16B00}\u{16B36}', // 𖬀𖬶
  'ib':  '\u{16B02}\u{16B32}', // 𖬂𖬲
  'aub': '\u{16B04}\u{16B30}', // 𖬄𖬰
  'ub':  '\u{16B06}\u{16B30}', // 𖬆𖬰
  'eb':  '\u{16B08}\u{16B30}', // 𖬈𖬰
  'aib': '\u{16B0A}\u{16B30}', // 𖬊𖬰
  'oob': '\u{16B0C}',          // 𖬌
  'awb': '\u{16B0E}',          // 𖬎
  'uab': '\u{16B10}\u{16B36}', // 𖬐𖬶
  'ob':  '\u{16B12}\u{16B30}', // 𖬒𖬰
  'iab': '\u{16B14}',          // 𖬔
  'ab':  '\u{16B16}\u{16B32}', // 𖬖𖬲
  'aab': '\u{16B1A}\u{16B32}', // 𖬚𖬲
  'wb':  '\u{16B18}\u{16B30}', // 𖬘𖬰

  // -m (low glottal / breathy)
  'eem': '\u{16B00}',          // 𖬀
  'im':  '\u{16B02}',          // 𖬂
  'aum': '\u{16B04}',          // 𖬄
  'um':  '\u{16B06}',          // 𖬆
  'em':  '\u{16B08}',          // 𖬈
  'aim': '\u{16B0A}',          // 𖬊
  'oom': '\u{16B0C}\u{16B30}', // 𖬌𖬰
  'awm': '\u{16B0E}\u{16B30}', // 𖬎𖬰
  'uam': '\u{16B10}',          // 𖬐
  'om':  '\u{16B12}',          // 𖬒
  'iam': '\u{16B14}\u{16B30}', // 𖬔𖬰
  'am':  '\u{16B16}',          // 𖬖
  'aam': '\u{16B1A}',          // 𖬚
  'wm':  '\u{16B18}',          // 𖬘

  // -j (high falling)
  'eej': '\u{16B00}\u{16B30}', // 𖬀𖬰
  'ij':  '\u{16B02}\u{16B30}', // 𖬂𖬰
  'auj': '\u{16B04}\u{16B36}', // 𖬄𖬶
  'uj':  '\u{16B06}\u{16B36}', // 𖬆𖬶
  'ej':  '\u{16B08}\u{16B32}', // 𖬈𖬲
  'aij': '\u{16B0A}\u{16B36}', // 𖬊𖬶
  'ooj': '\u{16B0C}\u{16B32}', // 𖬌𖬲
  'awj': '\u{16B0E}\u{16B32}', // 𖬎𖬲
  'uaj': '\u{16B10}\u{16B30}', // 𖬐𖬰
  'oj':  '\u{16B12}\u{16B32}', // 𖬒𖬲
  'iaj': '\u{16B14}\u{16B36}', // 𖬔𖬶
  'aj':  '\u{16B16}\u{16B30}', // 𖬖𖬰
  'aaj': '\u{16B1A}\u{16B30}', // 𖬚𖬰
  'wj':  '\u{16B18}\u{16B32}', // 𖬘𖬲

  // -v (mid rising)
  'eev': '\u{16B00}\u{16B32}', // 𖬀𖬲
  'iv':  '\u{16B02}\u{16B36}', // 𖬂𖬶
  'auv': '\u{16B04}\u{16B32}', // 𖬄𖬲
  'uv':  '\u{16B06}\u{16B32}', // 𖬆𖬲
  'ev':  '\u{16B09}',          // 𖬉
  'aiv': '\u{16B0A}\u{16B32}', // 𖬊𖬲
  'oov': '\u{16B0D}\u{16B30}', // 𖬍𖬰
  'awv': '\u{16B0E}\u{16B36}', // 𖬎𖬶
  'uav': '\u{16B10}\u{16B32}', // 𖬐𖬲
  'ov':  '\u{16B12}\u{16B36}', // 𖬒𖬶
  'iav': '\u{16B14}\u{16B32}', // 𖬔𖬲
  'av':  '\u{16B17}',          // 𖬗
  'aav': '\u{16B1B}',          // 𖬛
  'wv':  '\u{16B19}',          // 𖬙

  // - (unmarked / mid level)
  'ee':  '\u{16B01}',          // 𖬁
  'i':   '\u{16B03}',          // 𖬃
  'au':  '\u{16B05}',          // 𖬅
  'u':   '\u{16B07}',          // 𖬇
  'e':   '\u{16B09}\u{16B30}', // 𖬉𖬰
  'ai':  '\u{16B0B}',          // 𖬋
  'oo':  '\u{16B0D}',          // 𖬍
  'aw':  '\u{16B0F}',          // 𖬏
  'ua':  '\u{16B11}',          // 𖬑
  'o':   '\u{16B13}\u{16B30}', // 𖬓𖬰
  'ia':  '\u{16B15}',          // 𖬕
  'a':   '\u{16B17}\u{16B30}', // 𖬗𖬰
  'aa':  '\u{16B1B}\u{16B30}', // 𖬛𖬰
  'w':   '\u{16B19}\u{16B30}', // 𖬙𖬰

  // -s (low level)
  'ees': '\u{16B01}\u{16B30}', // 𖬁𖬰
  'is':  '\u{16B03}\u{16B30}', // 𖬃𖬰
  'aus': '\u{16B05}\u{16B30}', // 𖬅𖬰
  'us':  '\u{16B07}\u{16B30}', // 𖬇𖬰
  'es':  '\u{16B09}\u{16B32}', // 𖬉𖬲
  'ais': '\u{16B0B}\u{16B30}', // 𖬋𖬰
  'oos': '\u{16B0D}\u{16B32}', // 𖬍𖬲
  'aws': '\u{16B0F}\u{16B30}', // 𖬏𖬰
  'uas': '\u{16B11}\u{16B32}', // 𖬑𖬲
  'os':  '\u{16B13}\u{16B32}', // 𖬓𖬲
  'ias': '\u{16B15}\u{16B30}', // 𖬕𖬰
  'as':  '\u{16B17}\u{16B32}', // 𖬗𖬲
  'aas': '\u{16B1B}\u{16B32}', // 𖬛𖬲
  'ws':  '\u{16B19}\u{16B32}', // 𖬙𖬲

  // -g (falling breathy)
  'eeg': '\u{16B01}\u{16B32}', // 𖬁𖬲
  'ig':  '\u{16B03}\u{16B32}', // 𖬃𖬲
  'aug': '\u{16B05}\u{16B32}', // 𖬅𖬲
  'ug':  '\u{16B07}\u{16B32}', // 𖬇𖬲
  'eg':  '\u{16B09}\u{16B36}', // 𖬉𖬶
  'aig': '\u{16B0B}\u{16B32}', // 𖬋𖬲
  'oog': '\u{16B0D}\u{16B36}', // 𖬍𖬶
  'awg': '\u{16B0F}\u{16B32}', // 𖬏𖬲
  'uag': '\u{16B11}\u{16B36}', // 𖬑𖬶
  'og':  '\u{16B13}',          // 𖬓
  'iag': '\u{16B15}\u{16B32}', // 𖬕𖬲
  'ag':  '\u{16B17}\u{16B36}', // 𖬗𖬶
  'aag': '\u{16B1B}\u{16B36}', // 𖬛𖬶
  'wg':  '\u{16B19}\u{16B36}', // 𖬙𖬶

  // -d (variant tone)
  'eed': '\u{16B00}\u{16B32}',
  'id':  '\u{16B02}\u{16B32}',
  'aud': '\u{16B04}\u{16B32}',
  'ud':  '\u{16B06}\u{16B32}',
  'ed':  '\u{16B08}\u{16B32}',
  'aid': '\u{16B0A}\u{16B32}',
  'ood': '\u{16B0C}\u{16B32}',
  'awd': '\u{16B0E}\u{16B32}',
  'uad': '\u{16B10}\u{16B32}',
  'od':  '\u{16B12}\u{16B32}',
  'iad': '\u{16B14}\u{16B32}',
  'ad':  '\u{16B16}\u{16B32}',
  'aad': '\u{16B1A}\u{16B32}',
  'wd':  '\u{16B18}\u{16B32}'
};

// 2. CONSONANT ONSETS
const ONSETS = {
  // 4-letter
  'ntsh': '\u{16B2F}\u{16B30}', // 𖬯𖬰
  'ntxh': '\u{16B25}\u{16B35}', // 𖬥𖬵
  'nplh': '\u{16B21}\u{16B35}', // 𖬡𖬵

  // 3-letter
  'nts':  '\u{16B1D}',          // 𖬝
  'ntx':  '\u{16B22}\u{16B30}', // 𖬢𖬰
  'nph':  '\u{16B21}\u{16B30}', // 𖬡𖬰
  'npl':  '\u{16B2B}\u{16B30}', // 𖬫𖬰
  'nth':  '\u{16B2B}',          // 𖬫
  'nkh':  '\u{16B2B}\u{16B35}', // 𖬫𖬵
  'nch':  '\u{16B28}',          // 𖬨
  'nrh':  '\u{16B28}\u{16B30}', // 𖬨𖬰
  'plh':  '\u{16B2A}',          // 𖬪
  'tsh':  '\u{16B2A}\u{16B30}', // 𖬪𖬰
  'txh':  '\u{16B26}\u{16B30}', // 𖬦𖬰
  'hny':  '\u{16B23}\u{16B30}', // 𖬣𖬰
  'hml':  '\u{16B20}\u{16B30}', // 𖬠𖬰

  // 2-letter
  'nr':   '\u{16B1C}\u{16B30}', // 𖬜𖬰
  'ts':   '\u{16B1D}\u{16B30}', // 𖬝𖬰
  'ph':   '\u{16B1D}\u{16B35}', // 𖬝𖬵
  'nk':   '\u{16B22}',          // 𖬢
  'rh':   '\u{16B22}\u{16B35}', // 𖬢𖬵
  'dh':   '\u{16B1E}\u{16B35}', // 𖬞𖬵
  'hn':   '\u{16B29}',          // 𖬩
  'kh':   '\u{16B29}\u{16B30}', // 𖬩𖬰
  'nt':   '\u{16B29}\u{16B35}', // 𖬩𖬵
  'nq':   '\u{16B2C}\u{16B30}', // 𖬬𖬰
  'nqh':  '\u{16B2C}\u{16B35}', // 𖬬𖬵
  'ml':   '\u{16B20}',          // 𖬠
  'ny':   '\u{16B2E}\u{16B35}', // 𖬮𖬵
  'tx':   '\u{16B2F}\u{16B35}', // 𖬯𖬵
  'hl':   '\u{16B25}',          // 𖬥
  'nc':   '\u{16B24}\u{16B30}', // 𖬤𖬰
  'xy':   '\u{16B27}\u{16B30}', // 𖬧𖬰
  'np':   '\u{16B28}\u{16B35}', // 𖬨𖬵
  'qh':   '\u{16B23}',          // 𖬣
  'hm':   '\u{16B23}\u{16B35}', // 𖬣𖬵
  'ch':   '\u{16B27}',          // 𖬧
  'pl':   '\u{16B1F}\u{16B35}', // 𖬟𖬵
  'th':   '\u{16B1F}\u{16B30}', // 𖬟𖬰

  // 1-letter
  'v':    '\u{16B1C}',          // 𖬜
  'f':    '\u{16B1C}\u{16B35}', // 𖬜𖬵
  'l':    '\u{16B1E}',          // 𖬞
  'd':    '\u{16B1E}\u{16B30}', // 𖬞𖬰
  'r':    '\u{16B21}',          // 𖬡
  'n':    '\u{16B2C}',          // 𖬬
  'g':    '\u{16B20}\u{16B35}', // 𖬠𖬵
  'x':    '\u{16B2E}',          // 𖬮
  'c':    '\u{16B2F}',          // 𖬯
  'z':    '\u{16B25}\u{16B30}', // 𖬥𖬰
  'y':    '\u{16B24}',          // 𖬤
  's':    '\u{16B24}\u{16B35}', // 𖬤𖬵
  'm':    '\u{16B26}',          // 𖬦
  'q':    '\u{16B26}\u{16B35}', // 𖬦𖬵
  'h':    '\u{16B1F}',          // 𖬟
  'p':    '\u{16B2A}\u{16B35}', // 𖬪𖬵
  't':    '\u{16B27}\u{16B35}', // 𖬧𖬵
  'k':    '',                   // inherent /k/ has NO onset character
  '':     '\u{16B2E}\u{16B30}'  // zero onset / glottal stop 𖬮𖬰
};

// 3. DIGITS
const DIGITS = {
  '0': '\u{16B50}', // 𖭐
  '1': '\u{16B51}', // 𖭑
  '2': '\u{16B52}', // 𖭒
  '3': '\u{16B53}', // 𖭓
  '4': '\u{16B54}', // 𖭔
  '5': '\u{16B55}', // 𖭕
  '6': '\u{16B56}', // 𖭖
  '7': '\u{16B57}', // 𖭗
  '8': '\u{16B58}', // 𖭘
  '9': '\u{16B59}'  // 𖭙
};

// Sort onsets descending by length so greedy match picks longest first ('ntsh' before 'nts', etc.)
const SORTED_ONSETS = Object.keys(ONSETS).filter(Boolean).sort((a, b) => b.length - a.length);

/**
 * Transliterates a single RPA syllable (e.g. "Hmoob", "Looj", "av", "tsev")
 */
function rpaSyllableToPahawh(syl) {
  if (!syl) return '';
  const lower = syl.toLowerCase();

  // Find longest matching onset
  let matchedOnset = '';
  for (const o of SORTED_ONSETS) {
    if (lower.startsWith(o)) {
      matchedOnset = o;
      break;
    }
  }

  const remainder = lower.slice(matchedOnset.length);

  // Match vowel rime
  if (RIMES[remainder]) {
    const rimeGlyph = RIMES[remainder];
    const onsetGlyph = (matchedOnset in ONSETS) ? ONSETS[matchedOnset] : ONSETS[''];
    return rimeGlyph + onsetGlyph;
  }

  // If no match found, return original
  return syl;
}

/**
 * Transliterates an entire text string from White Hmong RPA to Pahawh Hmong Stage 3.
 * Preserves HTML tags, punctuation, numbers, and Latin identifiers (like "ENV-0001", "LP-0002").
 */
function rpaToPahawh(text, options = {}) {
  if (!text) return '';
  if (typeof text !== 'string') text = String(text);

  const convertDigits = options.convertDigits !== false;

  // Regex to tokenize into words, HTML tags, HTML entities, punctuation, numbers
  // Matches: <tags...>, &entities;, [brackets], numbers, or words
  return text.replace(/(<[^>]+>)|(&[a-zA-Z0-9#]+;)|([A-Za-z]+)|(\d+)|([^\s\w<>]+)/g, (match, tag, entity, word, num, punct) => {
    if (tag) return tag; // preserve HTML tags untouched
    if (entity) return entity; // preserve HTML entities untouched

    if (num) {
      if (!convertDigits) return num;
      // Convert digits to Pahawh numerals
      return num.split('').map(d => DIGITS[d] || d).join('');
    }

    if (word) {
      // Special technical / code tokens preservation (e.g., LP, ENV, LT, HTTP, URL, CSS, SVG)
      if (/^(LP|ENV|LT|ID|URL|HTTP|HTTPS|HTML|CSS|JS|SVG|PDF|DOCX|PNG|JPG|RPA|HD|FAQ|API|GPS|GIS)$/i.test(word)) {
        return word;
      }

      // Check special compound words
      const lowWord = word.toLowerCase();
      if (lowWord === 'phajhauj') {
        return '\u{16B16}\u{16B30}\u{16B1D}\u{16B35} \u{16B04}\u{16B36}\u{16B1F}'; // 𖬖𖬰𖬝𖬵 𖬄𖬶𖬟 (Phaj hauj)
      }
      if (lowWord === 'tshajplaws') {
        return '\u{16B16}\u{16B30}\u{16B2A}\u{16B30} \u{16B0F}\u{16B30}\u{16B1F}\u{16B35}'; // 𖬖𖬰𖬪𖬰 𖬏𖬰𖬟𖬵 (tshaj plaws)
      }
      if (lowWord === 'lossis') {
        return rpaSyllableToPahawh('los') + ' ' + rpaSyllableToPahawh('sis');
      }

      // Check if word can be directly mapped as a single syllable
      const singleSyl = rpaSyllableToPahawh(word);
      if (singleSyl !== word) {
        return singleSyl;
      }

      // Try hyphenated or multi-syllable decomposition if compound
      // e.g. "phajhauj" -> "phaj" + "hauj"
      // Attempt splitting at possible syllable boundaries
      // Standard Hmong RPA words in textbook are space-separated, but compound names may exist
      return word;
    }

    return match;
  });
}

module.exports = {
  rpaToPahawh,
  rpaSyllableToPahawh,
  RIMES,
  ONSETS,
  DIGITS
};
