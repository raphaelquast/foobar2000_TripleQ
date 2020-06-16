// Convert charset string to decimal codepage
function convertCharsetToCodepage(charset) {
	return CharsetMapping[charset.toLowerCase()];
}

function getLocalCharset() {
	return 0;
}

var CharsetMapping = {
	"437": 437,
	"850": 850,
	"852": 852,
	"855": 855,
	"857": 857,
	"860": 860,
	"861": 861,
	"862": 862,
	"863": 863,
	"865": 865,
	"866": 866,
	"869": 869,
	"_iso-2022-jp": 50221,
	"_iso-2022-jp$sio": 50222,
	"ansi_x3.4-1968": 20127,
	"ansi_x3.4-1986": 20127,
	"arabic": 28596,
	"arabic7": 709,
	"ascii": 20127,
	"asmo-708": 708,
	"asmo_449": 709,
	"big5": 950,
	"big5-hkscs": 950,
	"ccsid00858": 858,
	"ccsid00924": 20924,
	"ccsid01140": 1140,
	"ccsid01141": 1141,
	"ccsid01142": 1142,
	"ccsid01143": 1143,
	"ccsid01144": 1144,
	"ccsid01145": 1145,
	"ccsid01146": 1146,
	"ccsid01147": 1147,
	"ccsid01148": 1148,
	"ccsid01149": 1149,
	"chinese": 936,
	"cn-big5": 950,
	"cn-gb": 936,
	"codepage437": 437,
	"cp-gr": 869,
	"cp-is": 861,
	"cp00858": 858,
	"cp00924": 20924,
	"cp01140": 1140,
	"cp01141": 1141,
	"cp01142": 1142,
	"cp01143": 1143,
	"cp01144": 1144,
	"cp01145": 1145,
	"cp01146": 1146,
	"cp01147": 1147,
	"cp01148": 1148,
	"cp01149": 1149,
	"cp037": 37,
	"cp1025": 21025,
	"cp1026": 1026,
	"cp1125": 1125,
	"cp1133": 1133,
	"cp1200": 1200,
	"cp12000": 12000,
	"cp12001": 12001,
	"cp1201": 1201,
	"cp1250": 1250,
	"cp1251": 1251,
	"cp1252": 1252,
	"cp1253": 1253,
	"cp1254": 1254,
	"cp1255": 1255,
	"cp1256": 1256,
	"cp1257": 1257,
	"cp1258": 1258,
	"cp1361": 1361,
	"cp154": 154,
	"cp273": 20273,
	"cp278": 20278,
	"cp280": 20280,
	"cp284": 20284,
	"cp285": 20285,
	"cp290": 20290,
	"cp297": 20297,
	"cp367": 20127,
	"cp420": 20420,
	"cp423": 20423,
	"cp424": 20424,
	"cp437": 437,
	"cp500": 775,
	"cp50221": 50221,
	"cp51932": 51932,
	"cp65001": 65001,
	"cp737": 737,
	"cp775": 775,
	"cp819": 28591,
	"cp850": 850,
	"cp852": 852,
	"cp853": 853,
	"cp855": 855,
	"cp857": 857,
	"cp858": 858,
	"cp860": 860,
	"cp861": 861,
	"cp862": 862,
	"cp863": 863,
	"cp864": 864,
	"cp865": 865,
	"cp866": 866,
	"cp869": 869,
	"cp870": 870,
	"cp871": 20871,
	"cp874": 874,
	"cp875": 875,
	"cp880": 20880,
	"cp905": 20905,
	"cp932": 932,
	"cp936": 936,
	"cp949": 949,
	"cp950": 950,
	"csascii": 20127,
	"csbig5": 950,
	"cseuckr": 51949,
	"cseucpkdfmtjapanese": 20932,
	"csgb2312": 936,
	"csgb231280": 936,
	"csibm037": 37,
	"csibm1026": 1026,
	"csibm273": 20273,
	"csibm277": 20277,
	"csibm278": 20278,
	"csibm280": 20280,
	"csibm284": 20284,
	"csibm285": 20285,
	"csibm290": 20290,
	"csibm297": 20297,
	"csibm420": 20420,
	"csibm423": 20423,
	"csibm424": 20424,
	"csibm500": 775,
	"csibm855": 855,
	"csibm857": 857,
	"csibm860": 860,
	"csibm861": 861,
	"csibm863": 863,
	"csibm864": 864,
	"csibm865": 865,
	"csibm866": 866,
	"csibm869": 869,
	"csibm870": 870,
	"csibm871": 20871,
	"csibm880": 20880,
	"csibm905": 20905,
	"csibmthai": 20838,
	"csiso2022jp": 50221,
	"csiso2022kr": 50225,
	"csiso58gb231280": 936,
	"csiso89asmo449": 709,
	"csisolatin1": 28591,
	"csisolatin2": 28592,
	"csisolatin3": 28593,
	"csisolatin4": 28594,
	"csisolatin5": 28595,
	"csisolatinarabic": 28596,
	"csisolatincyrillic": 28595,
	"csisolatingreek": 28597,
	"csisolatinhebrew": 28598,
	"cskoi8r": 20866,
	"csksc56011987": 949,
	"csmacintosh": 10000,
	"cspc775baltic": 775,
	"cspc8": 437,
	"cspc850multilingual": 850,
	"cspc862latinhebrew": 862,
	"cspc8codepage437": 437,
	"cspcp852": 852,
	"csptcp154": 154,
	"csshiftjis": 932,
	"csunicode11utf7": 65000,
	"cswindows31j": 932,
	"cyrillic": 28595,
	"cyrillic-asian": 154,
	"dos-720": 720,
	"dos-862": 862,
	"dos-874": 874,
	"ebcdic-cp-ar1": 20420,
	"ebcdic-cp-be": 775,
	"ebcdic-cp-ca": 37,
	"ebcdic-cp-ch": 775,
	"ebcdic-cp-dk": 20277,
	"ebcdic-cp-es": 20284,
	"ebcdic-cp-fi": 20278,
	"ebcdic-cp-fr": 20297,
	"ebcdic-cp-gb": 20285,
	"ebcdic-cp-gr": 20423,
	"ebcdic-cp-he": 20424,
	"ebcdic-cp-is": 20871,
	"ebcdic-cp-it": 20280,
	"ebcdic-cp-nl": 37,
	"ebcdic-cp-no": 20277,
	"ebcdic-cp-roece": 870,
	"ebcdic-cp-se": 20278,
	"ebcdic-cp-tr": 20905,
	"ebcdic-cp-us": 37,
	"ebcdic-cp-wt": 37,
	"ebcdic-cp-yu": 870,
	"ebcdic-cyrillic": 20880,
	"ebcdic-de-273+euro": 1141,
	"ebcdic-dk-277+euro": 1142,
	"ebcdic-es-284+euro": 1145,
	"ebcdic-fi-278+euro": 1143,
	"ebcdic-fr-297+euro": 1147,
	"ebcdic-gb-285+euro": 1146,
	"ebcdic-international-500+euro": 1148,
	"ebcdic-is-871+euro": 1149,
	"ebcdic-it-280+euro": 1144,
	"ebcdic-jp-kana": 20290,
	"ebcdic-latin9--euro": 20924,
	"ebcdic-no-277+euro": 1142,
	"ebcdic-se-278+euro": 1143,
	"ebcdic-us-37+euro": 1140,
	"ecma-114": 28596,
	"ecma-118": 28597,
	"elot_928": 28597,
	"euc-cn": 51936,
	"euc-jp": 20932,
	"euc-kr": 51949,
	"extended_unix_code_packed_format_for_japanese": 20932,
	"gb18030": 54936,
	"gb2312": 936,
	"gb2312-80": 936,
	"gb231280": 936,
	"gb_2312-80": 936,
	"gbk": 936,
	"greek": 28597,
	"greek8": 28597,
	"hebrew": 28598,
	"hz-gb-2312": 52936,
	"ibm-cp1133": 1133,
	"ibm-thai": 20838,
	"ibm00858": 858,
	"ibm00924": 20924,
	"ibm01047": 1047,
	"ibm01140": 1140,
	"ibm01141": 1141,
	"ibm01142": 1142,
	"ibm01143": 1143,
	"ibm01144": 1144,
	"ibm01145": 1145,
	"ibm01146": 1146,
	"ibm01147": 1147,
	"ibm01148": 1148,
	"ibm01149": 1149,
	"ibm037": 37,
	"ibm1026": 1026,
	"ibm273": 20273,
	"ibm277": 20277,
	"ibm278": 20278,
	"ibm280": 20280,
	"ibm284": 20284,
	"ibm285": 20285,
	"ibm290": 20290,
	"ibm297": 20297,
	"ibm367": 20127,
	"ibm420": 20420,
	"ibm423": 20423,
	"ibm424": 20424,
	"ibm437": 437,
	"ibm500": 500,
	"ibm737": 737,
	"ibm775": 775,
	"ibm819": 28591,
	"ibm850": 850,
	"ibm852": 852,
	"ibm855": 855,
	"ibm857": 857,
	"ibm860": 860,
	"ibm861": 861,
	"ibm862": 862,
	"ibm863": 863,
	"ibm864": 864,
	"ibm865": 865,
	"ibm866": 866,
	"ibm869": 869,
	"ibm870": 870,
	"ibm871": 20871,
	"ibm880": 20880,
	"ibm905": 20905,
	"iso-2022-cn": 50229,
	"iso-2022-jp": 50220,
	"iso-2022-jp-ms": 50221,
	"iso-2022-kr": 50225,
	"iso-4873:1986": 54936,
	"iso-8859-1": 28591,
	"iso-8859-11": 874,
	"iso-8859-13": 28603,
	"iso-8859-15": 28605,
	"iso-8859-2": 28592,
	"iso-8859-3": 28593,
	"iso-8859-4": 28594,
	"iso-8859-5": 28595,
	"iso-8859-6": 28596,
	"iso-8859-7": 28597,
	"iso-8859-8": 28598,
	"iso-8859-8-i": 38598,
	"iso-8859-9": 28599,
	"iso-ir-100": 28591,
	"iso-ir-101": 28592,
	"iso-ir-109": 28593,
	"iso-ir-110": 28594,
	"iso-ir-126": 28597,
	"iso-ir-127": 28596,
	"iso-ir-138": 28598,
	"iso-ir-144": 28595,
	"iso-ir-148": 28599,
	"iso-ir-149": 949,
	"iso-ir-58": 936,
	"iso-ir-6": 20127,
	"iso-ir-6us": 20127,
	"iso-ir-89": 709,
	"iso2022-jp-ms": 50221,
	"iso2022-kr": 50225,
	"iso646-us": 20127,
	"iso8859-1": 28591,
	"iso8859-13": 28603,
	"iso8859-15": 28605,
	"iso8859-2": 28592,
	"iso8859-3": 28593,
	"iso8859-4": 28594,
	"iso8859-5": 28595,
	"iso8859-6": 28596,
	"iso8859-7": 28597,
	"iso8859-8": 28598,
	"iso8859-8-i": 38598,
	"iso8859-9": 28599,
	"iso_646.irv:1991": 20127,
	"iso_8859-1": 28591,
	"iso_8859-15": 28605,
	"iso_8859-1:1987": 28591,
	"iso_8859-2": 28592,
	"iso_8859-2:1987": 28592,
	"iso_8859-3": 28593,
	"iso_8859-3:1988": 28593,
	"iso_8859-4": 28594,
	"iso_8859-4:1988": 28594,
	"iso_8859-5": 28595,
	"iso_8859-5:1988": 28595,
	"iso_8859-6": 28596,
	"iso_8859-6:1987": 28596,
	"iso_8859-7": 28597,
	"iso_8859-7:1987": 28597,
	"iso_8859-8": 28598,
	"iso_8859-8:1988": 28598,
	"iso_8859-9": 28599,
	"iso_8859-9:1989": 28599,
	"iso_9036": 709,
	"johab": 1361,
	"koi": 20866,
	"koi8": 20866,
	"koi8-r": 20866,
	"koi8-ru": 21866,
	"koi8-u": 21866,
	"koi8r": 20866,
	"korean": 949,
	"ks-c-5601": 949,
	"ks-c5601": 949,
	"ks_c_5601": 949,
	"ks_c_5601-1987": 949,
	"ks_c_5601-1989": 949,
	"ks_c_5601_1987": 949,
	"ksc5601": 949,
	"ksc_5601": 949,
	"l1": 28591,
	"l2": 28592,
	"l3": 28593,
	"l4": 28594,
	"l5": 28599,
	"l9": 28605,
	"latin-9": 28605,
	"latin1": 28591,
	"latin2": 28592,
	"latin3": 28593,
	"latin4": 28594,
	"latin5": 28599,
	"latin9": 28605,
	"logical": 38598,
	"mac": 10000,
	"macintosh": 10000,
	"ms-ansi": 1252,
	"ms-arab": 1256,
	"ms-cyrl": 1251,
	"ms-ee": 1250,
	"ms-greek": 1253,
	"ms-hebr": 1255,
	"ms-turk": 1254,
	"ms50221": 50221,
	"ms51932": 51932,
	"ms932": 932,
	"ms936": 936,
	"ms_kanji": 932,
	"pc-multilingual-850+euro": 858,
	"pt154": 154,
	"ptcp154": 154,
	"shifft_jis": 932,
	"shifft_jis-ms": 932,
	"shift-jis": 932,
	"shift_jis": 932,
	"sjis": 932,
	"sjis-ms": 932,
	"sjis-open": 932,
	"sjis-win": 932,
	"tis-620": 874,
	"ucs-2": 1200,
	"ucs-2be": 1201,
	"ucs-2le": 1200,
	"ucs-4": 12000,
	"ucs-4be": 12001,
	"ucs-4le": 12000,
	"ucs2": 1200,
	"ucs2be": 1201,
	"ucs4": 12000,
	"ucs4be": 12001,
	"ucs4le": 12000,
	"uhc": 949,
	"unicode": 1200,
	"unicode-1-1-utf-7": 65000,
	"unicode-1-1-utf-8": 65001,
	"unicode-2-0-utf-8": 65001,
	"unicodefffe": 1201,
	"us": 20127,
	"us-ascii": 20127,
	"utf-16": 1200,
	"utf-16be": 1201,
	"utf-16le": 1200,
	"utf-32": 12000,
	"utf-32be": 12001,
	"utf-32le": 12000,
	"utf-7": 65000,
	"utf-8": 65001,
	"utf16": 1200,
	"utf16be": 1201,
	"utf16le": 1200,
	"utf32": 12000,
	"utf32be": 12001,
	"utf32le": 12000,
	"utf8": 65001,
	"visual": 28598,
	"winbaltrim": 1257,
	"windows-1250": 1250,
	"windows-1251": 1251,
	"windows-1252": 1252,
	"windows-1253": 1253,
	"windows-1254": 1254,
	"windows-1255": 1255,
	"windows-1256": 1256,
	"windows-1257": 1257,
	"windows-1258": 1258,
	"windows-31j": 932,
	"windows-50221": 50221,
	"windows-51932": 51932,
	"windows-874": 874,
	"windows-932": 932,
	"windows-936": 936,
	"x-ansi": 1252,
	"x-chinese-cns": 20000,
	"x-chinese-eten": 20002,
	"x-chinese_cns": 20000,
	"x-cp1250": 1250,
	"x-cp1251": 1251,
	"x-cp20001": 20001,
	"x-cp20003": 20003,
	"x-cp20004": 20004,
	"x-cp20005": 20005,
	"x-cp20261": 20261,
	"x-cp20269": 20269,
	"x-cp20936": 20936,
	"x-cp20949": 20949,
	"x-cp50227": 50227,
	"x-ebcdic-arabic": 420,
	"x-ebcdic-cp-us-euro": 1140,
	"x-ebcdic-cyrillicrussian": 20880,
	"x-ebcdic-cyrillicserbianbulgarian": 21025,
	"x-ebcdic-denmarknorway": 20277,
	"x-ebcdic-denmarknorway-euro": 1142,
	"x-ebcdic-finlandsweden": 20278,
	"x-ebcdic-finlandsweden-euro": 1143,
	"x-ebcdic-france": 1143,
	"x-ebcdic-france-euro": 1147,
	"x-ebcdic-germany": 20273,
	"x-ebcdic-germany-euro": 1141,
	"x-ebcdic-greek": 20423,
	"x-ebcdic-greekmodern": 875,
	"x-ebcdic-hebrew": 20424,
	"x-ebcdic-icelandic": 20871,
	"x-ebcdic-icelandic-euro": 1149,
	"x-ebcdic-international-euro": 1148,
	"x-ebcdic-italy": 20280,
	"x-ebcdic-italy-euro": 1144,
	"x-ebcdic-japaneseandjapaneselatin": 50939,
	"x-ebcdic-japaneseandkana": 50930,
	"x-ebcdic-japaneseanduscanada": 50931,
	"x-ebcdic-japanesekatakana": 20290,
	"x-ebcdic-koreanandkoreanextended": 50933,
	"x-ebcdic-koreanextended": 20833,
	"x-ebcdic-simplifiedchinese": 50935,
	"x-ebcdic-spain": 20284,
	"x-ebcdic-spain-euro": 1145,
	"x-ebcdic-thai": 20838,
	"x-ebcdic-traditionalchinese": 50937,
	"x-ebcdic-turkish": 20905,
	"x-ebcdic-uk": 20285,
	"x-ebcdic-uk-euro": 1146,
	"x-euc": 51932,
	"x-euc-cn": 51936,
	"x-euc-jp": 51932,
	"x-europa": 29001,
	"x-ia5": 20105,
	"x-ia5-german": 20106,
	"x-ia5-norwegian": 20108,
	"x-ia5-swedish": 20107,
	"x-iscii-as": 57006,
	"x-iscii-be": 57003,
	"x-iscii-de": 57002,
	"x-iscii-gu": 57010,
	"x-iscii-ka": 57008,
	"x-iscii-ma": 57009,
	"x-iscii-or": 57007,
	"x-iscii-pa": 57011,
	"x-iscii-ta": 57004,
	"x-iscii-te": 57005,
	"x-mac-arabic": 10004,
	"x-mac-ce": 10029,
	"x-mac-chinesesimp": 10008,
	"x-mac-chinesetrad": 10002,
	"x-mac-croatian": 10082,
	"x-mac-cyrillic": 10007,
	"x-mac-greek": 10006,
	"x-mac-hebrew": 10005,
	"x-mac-icelandic": 10079,
	"x-mac-japanese": 10001,
	"x-mac-korean": 10003,
	"x-mac-romanian": 10010,
	"x-mac-thai": 10021,
	"x-mac-turkish": 10081,
	"x-mac-ukrainian": 10017,
	"x-ms-cp932": 932,
	"x-sjis": 932,
	"x-unicode-2-0-utf-7": 65000,
	"x-unicode-2-0-utf-8": 65001,
	"x-x-big5": 950,
	"x_chinese-eten": 20002
};
