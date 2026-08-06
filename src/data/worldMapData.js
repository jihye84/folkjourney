import { romanProgressions } from './progressions';

// 'World Folk (민요 & 전통)' 카테고리에 해당하는 진행 필터링
const folkProgressions = romanProgressions.filter(p => p.category === 'World Folk (민요 & 전통)');

// 각 진행 id에 위도, 경도, 지역명, 국기 코드, 디폴트 키, 대륙 매핑
const coordinatesMap = {
  // ── 라틴아메리카 ──
  'la_bamba':             { lat: 23.63, lng: -102.55, region: '멕시코', flag: 'mx', defaultKey: 'C', continent: '라틴아메리카' },
  'mexican_ranchera':     { lat: 20.67, lng: -103.35, region: '멕시코', flag: 'mx', defaultKey: 'G', continent: '라틴아메리카' },
  'cuban_montuno':        { lat: 21.52, lng: -77.78,  region: '쿠바', flag: 'cu', defaultKey: 'Bb', continent: '라틴아메리카' },
  'cuban_guajira':        { lat: 22.40, lng: -79.95,  region: '쿠바', flag: 'cu', defaultKey: 'C', continent: '라틴아메리카' },
  'argentine_tango':      { lat: -34.60, lng: -58.38, region: '아르헨티나', flag: 'ar', defaultKey: 'A', continent: '라틴아메리카' },
  'argentine_chacarera':  { lat: -27.79, lng: -64.26, region: '아르헨티나', flag: 'ar', defaultKey: 'E', continent: '라틴아메리카' },
  'andean_folk':          { lat: -13.53, lng: -71.97, region: '페루', flag: 'pe', defaultKey: 'E', continent: '라틴아메리카' },
  'colombian_cumbia':     { lat: 10.39, lng: -75.51,  region: '콜롬비아', flag: 'co', defaultKey: 'A', continent: '라틴아메리카' },
  'jamaican_reggae':      { lat: 18.11, lng: -77.30,  region: '자메이카', flag: 'jm', defaultKey: 'G', continent: '라틴아메리카' },
  'trinidadian_calypso':  { lat: 10.65, lng: -61.50,  region: '트리니다드', flag: 'tt', defaultKey: 'C', continent: '라틴아메리카' },
  'brazilian_bossa':      { lat: -22.91, lng: -43.17, region: '브라질', flag: 'br', defaultKey: 'C', continent: '라틴아메리카' },
  'brazilian_samba':      { lat: -12.97, lng: -38.51, region: '브라질', flag: 'br', defaultKey: 'D', continent: '라틴아메리카' },

  // ── 유럽 ──
  'celtic_mixolydian':    { lat: 53.14, lng: -7.69,   region: '아일랜드', flag: 'ie', defaultKey: 'D', continent: '유럽' },
  'irish_sean_nos':       { lat: 53.27, lng: -9.05,   region: '아일랜드', flag: 'ie', defaultKey: 'E', continent: '유럽' },
  'scottish_march':       { lat: 55.95, lng: -3.19,   region: '스코틀랜드', flag: 'gb', defaultKey: 'Bb', continent: '유럽' },
  'portuguese_fado':      { lat: 38.72, lng: -9.14,   region: '포르투갈', flag: 'pt', defaultKey: 'A', continent: '유럽' },
  'flamenco_bulerias':    { lat: 37.39, lng: -5.98,   region: '스페인', flag: 'es', defaultKey: 'E', continent: '유럽' },
  'spanish_rumba':        { lat: 41.39, lng: 2.17,    region: '스페인', flag: 'es', defaultKey: 'A', continent: '유럽' },
  'greek_sirtaki':        { lat: 37.98, lng: 23.73,   region: '그리스', flag: 'gr', defaultKey: 'E', continent: '유럽' },
  'romanian_hora':        { lat: 44.43, lng: 26.10,   region: '루마니아', flag: 'ro', defaultKey: 'A', continent: '유럽' },
  'russian_gypsy':        { lat: 55.76, lng: 37.62,   region: '러시아', flag: 'ru', defaultKey: 'A', continent: '유럽' },
  'nordic_fiddle':        { lat: 59.91, lng: 10.75,   region: '노르웨이', flag: 'no', defaultKey: 'A', continent: '유럽' },
  'finnish_kantele':      { lat: 60.17, lng: 24.94,   region: '핀란드', flag: 'fi', defaultKey: 'A', continent: '유럽' },

  // ── 중동 & 중앙아시아 ──
  'arabian_phrygian':     { lat: 23.89, lng: 45.08,   region: '사우디아라비아', flag: 'sa', defaultKey: 'Bb', continent: '중동' },
  'egyptian_baladi':      { lat: 30.04, lng: 31.24,   region: '이집트', flag: 'eg', defaultKey: 'Bb', continent: '중동' },
  'turkish_folk':         { lat: 39.93, lng: 32.86,   region: '터키', flag: 'tr', defaultKey: 'A', continent: '중동' },
  'persian_dastgah':      { lat: 32.65, lng: 51.68,   region: '이란', flag: 'ir', defaultKey: 'Bb', continent: '중동' },
  'israeli_klezmer':      { lat: 31.77, lng: 35.22,   region: '이스라엘', flag: 'il', defaultKey: 'A', continent: '중동' },
  'pakistani_qawwali':    { lat: 31.52, lng: 74.35,   region: '파키스탄', flag: 'pk', defaultKey: 'C', continent: '남아시아' },
  'mongolian_long_song':  { lat: 47.89, lng: 106.91,  region: '몽골', flag: 'mn', defaultKey: 'D', continent: '동아시아' },

  // ── 남아시아 & 동아시아 ──
  'indian_raga_drone':    { lat: 20.59, lng: 78.96,   region: '인도', flag: 'in', defaultKey: 'C', continent: '남아시아' },
  'indian_bhangra':       { lat: 30.73, lng: 76.77,   region: '인도', flag: 'in', defaultKey: 'G', continent: '남아시아' },
  'chinese_guzheng':      { lat: 39.90, lng: 116.41,  region: '중국', flag: 'cn', defaultKey: 'G', continent: '동아시아' },
  'japanese_enka':        { lat: 35.68, lng: 139.65,  region: '일본', flag: 'jp', defaultKey: 'A', continent: '동아시아' },
  'okinawan_folk':        { lat: 26.33, lng: 127.80,  region: '일본', flag: 'jp', defaultKey: 'C', continent: '동아시아' },
  'korean_sanjo':         { lat: 35.18, lng: 128.97,  region: '대한민국', flag: 'kr', defaultKey: 'Bb', continent: '동아시아' },

  // ── 동남아시아 ──
  'balinese_gamelan':     { lat: -8.41, lng: 115.19,  region: '인도네시아', flag: 'id', defaultKey: 'F', continent: '동남아시아' },
  'thai_luk_thung':       { lat: 13.76, lng: 100.50,  region: '태국', flag: 'th', defaultKey: 'G', continent: '동남아시아' },
  'vietnamese_ca_tru':    { lat: 21.03, lng: 105.85,  region: '베트남', flag: 'vn', defaultKey: 'E', continent: '동남아시아' },
  'philippine_kundiman':  { lat: 14.60, lng: 120.98,  region: '필리핀', flag: 'ph', defaultKey: 'Eb', continent: '동남아시아' },
  'myanmar_saing_waing':  { lat: 16.87, lng: 96.20,   region: '미얀마', flag: 'mm', defaultKey: 'Bb', continent: '동남아시아' },
  'cambodian_pinpeat':    { lat: 11.56, lng: 104.92,  region: '캄보디아', flag: 'kh', defaultKey: 'F', continent: '동남아시아' },
  'laos_mor_lam':         { lat: 17.97, lng: 102.63,  region: '라오스', flag: 'la', defaultKey: 'G', continent: '동남아시아' },
  'malaysian_zapin':      { lat: 3.14, lng: 101.69,   region: '말레이시아', flag: 'my', defaultKey: 'A', continent: '동남아시아' },

  // ── 아프리카 ──
  'african_mbube':        { lat: -30.56, lng: 22.94,  region: '남아프리카', flag: 'za', defaultKey: 'G', continent: '아프리카' },
  'desert_blues':         { lat: 17.57, lng: -3.99,   region: '말리', flag: 'ml', defaultKey: 'E', continent: '아프리카' },
  'ghanaian_highlife':    { lat: 5.60, lng: -0.19,    region: '가나', flag: 'gh', defaultKey: 'F', continent: '아프리카' },
  'senegalese_mbalax':    { lat: 14.69, lng: -17.44,  region: '세네갈', flag: 'sn', defaultKey: 'F', continent: '아프리카' },
  'malagasy_salegy':      { lat: -18.88, lng: 47.51,  region: '마다가스카르', flag: 'mg', defaultKey: 'G', continent: '아프리카' },
  'nigerian_afrobeat':    { lat: 6.52, lng: 3.38,     region: '나이지리아', flag: 'ng', defaultKey: 'Eb', continent: '아프리카' },
  'ethiopian_tizita':     { lat: 9.02, lng: 38.75,    region: '에티오피아', flag: 'et', defaultKey: 'A', continent: '아프리카' },
  'congolese_soukous':    { lat: -4.44, lng: 15.27,   region: '콩고', flag: 'cd', defaultKey: 'G', continent: '아프리카' },
  'zimbabwean_mbira':     { lat: -17.83, lng: 31.05,  region: '짐바브웨', flag: 'zw', defaultKey: 'G', continent: '아프리카' },
  'cape_verdean_morna':   { lat: 14.93, lng: -23.51,  region: '카보베르데', flag: 'cv', defaultKey: 'A', continent: '아프리카' },
  'tanzanian_taarab':     { lat: -6.79, lng: 39.28,   region: '탄자니아', flag: 'tz', defaultKey: 'F', continent: '아프리카' },
  'guinean_mandingue':    { lat: 9.64, lng: -13.58,   region: '기니', flag: 'gn', defaultKey: 'C', continent: '아프리카' },
  'cameroonian_makossa':  { lat: 4.05, lng: 9.77,     region: '카메룬', flag: 'cm', defaultKey: 'F', continent: '아프리카' },
  'beninese_vodun':       { lat: 6.37, lng: 2.39,     region: '베냉', flag: 'bj', defaultKey: 'E', continent: '아프리카' },
  'moroccan_gnawa':       { lat: 31.63, lng: -8.01,   region: '모로코', flag: 'ma', defaultKey: 'Bb', continent: '아프리카' },

  // ── 북아메리카 ──
  'native_american_spirit': { lat: 39.83, lng: -98.58, region: '미국', flag: 'us', defaultKey: 'F#', continent: '북아메리카' },
  'hawaiian_slack':       { lat: 21.31, lng: -157.86, region: '미국', flag: 'us', defaultKey: 'G', continent: '북아메리카' },

  // ── 오세아니아 ──
  'maori_haka':           { lat: -38.14, lng: 176.25, region: '뉴질랜드', flag: 'nz', defaultKey: 'E', continent: '오세아니아' },
  'aboriginal_didgeridoo': { lat: -25.34, lng: 131.04, region: '호주', flag: 'au', defaultKey: 'E', continent: '오세아니아' },
  'tahitian_otea':        { lat: -17.53, lng: -149.57, region: '타히티', flag: 'pf', defaultKey: 'G', continent: '오세아니아' },
  'samoan_siva':          { lat: -13.83, lng: -171.76, region: '사모아', flag: 'ws', defaultKey: 'C', continent: '오세아니아' },
  'tongan_lakalaka':      { lat: -21.21, lng: -175.15, region: '통가', flag: 'to', defaultKey: 'C', continent: '오세아니아' },
  'png_kundu':            { lat: -6.31, lng: 147.15,  region: '파푸아뉴기니', flag: 'pg', defaultKey: 'E', continent: '오세아니아' },
};

export const globeData = folkProgressions.map(prog => {
  const coord = coordinatesMap[prog.id] || { lat: 0, lng: 0, region: '알 수 없음', flag: '', defaultKey: 'C', continent: '' };
  return {
    ...prog,
    lat: coord.lat,
    lng: coord.lng,
    region: coord.region,
    flag: coord.flag,
    defaultKey: coord.defaultKey,
    continent: coord.continent,
    size: 1.5,
    color: '#10b981'
  };
});
