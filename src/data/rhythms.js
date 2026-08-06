export const worldRhythms = [
  {
    id: 'samba',
    title: '브라질 삼바 (Samba)',
    description: '리우데자네이루의 카니발을 상징하는 정열적인 다성 리듬',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '삼바는 아프리카에서 끌려온 노예들의 음악과 유럽의 행진곡이 결합하여 탄생했습니다. 수르두(Surdo)의 묵직한 베이스 라인 위에 다채로운 타악기들이 얹혀 특유의 흥을 만들어냅니다.',
    tracks: [
      { name: 'Kick', pattern: [0,2,0,1, 0,3,0,0] },
      { name: 'Snare', pattern: [3,1,2,1, 3,1,2,1] },
      { name: 'Shaker', pattern: [2,1,2,1, 2,1,2,1] }
    ]
  },
  {
    id: 'son_clave_3_2',
    title: '쿠바 손 클라베 (Son Clave 3-2)',
    description: '쿠바 음악의 핵심이 되는 3-2 패턴의 뼈대 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '클라베는 스페인어로 "열쇠"라는 뜻으로, 아프로 큐반 음악의 모든 리듬 요소들을 하나로 묶어주는 역할을 합니다. 3-2 손 클라베는 살사, 맘보 등 다양한 라틴 음악의 기본이 됩니다.',
    tracks: [
      { name: 'Clave', pattern: [3,0,0,3, 0,0,3,0, 0,0,3,0, 3,0,0,0] },
      { name: 'Kick', pattern: [0,0,0,0, 2,0,0,0, 0,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,0,2,0, 0,0,2,0, 0,0,2,0] }
    ]
  },
  {
    id: 'rumba_clave',
    title: '쿠바 룸바 클라베 (Rumba Clave)',
    description: '아프리카 색채가 강한 3-2 룸바 클라베 패턴',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '손 클라베와 비슷하지만 세 번째 타격이 반 박자 늦게 연주되어 더욱 강한 싱코페이션(당김음)을 만들어냅니다. 쿠바의 거리에서 아프리카계 쿠바인들이 연주하며 발전했습니다.',
    tracks: [
      { name: 'Clave', pattern: [3,0,0,3, 0,0,0,3, 0,0,3,0, 3,0,0,0] },
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 2,0,0,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 2,0,0,0, 0,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'tango',
    title: '아르헨티나 탱고 (Tango)',
    description: '하바네라 리듬에 뿌리를 둔 부에노스아이레스의 춤곡',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 65,
    story: '19세기 말 부에노스아이레스의 항구 노동자들 사이에서 생겨났습니다. 유럽의 이민자들과 아프리카계의 리듬이 섞여 특유의 우수 띤 분위기와 열정을 동시에 담고 있습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,2, 0,0,3,0, 3,0,0,2, 0,0,3,0] },
      { name: 'Snare', pattern: [0,0,0,0, 2,0,0,0, 0,0,0,0, 2,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'cumbia',
    title: '콜롬비아 쿰비아 (Cumbia)',
    description: '콜롬비아 북부 해안의 경쾌한 2박자 계열 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 95,
    story: '원주민, 아프리카인, 스페인 사람들의 문화가 융합되어 탄생했습니다. 타마라(Tambora)와 구아차(Guacha)라는 악기들이 엮어내는 독특한 엇박자가 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 0,0,2,0] },
      { name: 'Shaker', pattern: [1,2,1,3, 1,2,1,3, 1,2,1,3, 1,2,1,3] },
      { name: 'Bell', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] }
    ]
  },
  {
    id: 'one_drop',
    title: '자메이카 원드롭 (One Drop)',
    description: '레게 음악의 근간이 되는 여유로운 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 78,
    story: '일반적인 대중음악과 달리 첫 박자를 비우고 세 번째 박자에 베이스 드럼과 스네어를 동시에 연주하는 것이 특징입니다. 라스타파리안 문화와 자메이카의 여유가 담겨있습니다.',
    tracks: [
      { name: 'Kick', pattern: [0,0,0,0, 0,0,0,0, 3,0,0,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 0,0,0,0, 3,0,0,0, 0,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'calypso',
    title: '트리니다드 칼립소 (Calypso)',
    description: '카리브해의 흥겨운 축제 음악',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '아프리카 노예들이 농장에서 일하며 서로 소통하고 사회를 풍자하기 위해 불렀던 노래에서 유래했습니다. 후에 스틸팬(Steelpan) 악기와 결합하며 카리브해를 대표하는 음악이 되었습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 0,0,2,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,3,0,0, 0,0,3,0, 0,3,0,0] },
      { name: 'HiHat', pattern: [2,0,2,2, 2,0,2,2, 2,0,2,2, 2,0,2,2] }
    ]
  },
  {
    id: 'djembe_yankole',
    title: '기니 젬베 얀콜레 (Djembe Yankolé)',
    description: '서아프리카 만딩고 족의 전통 12/8박자 젬베 리듬',
    timeSignature: '12/8',
    subdivision: 2,
    defaultBpm: 120,
    story: '얀콜레는 주로 젊은 여성들의 춤을 반주할 때 쓰이는 경쾌한 리듬입니다. 젬베와 둔둔(Dunun) 악기들이 서로 얽히며 복잡하고 역동적인 폴리리듬을 만들어냅니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2, 0,0,0, 3,0,2, 0,0,0] },
      { name: 'Snare', pattern: [0,0,0, 3,0,0, 0,0,0, 3,0,0] },
      { name: 'Tom', pattern: [2,0,1, 2,0,1, 2,0,1, 2,0,1] }
    ]
  },
  {
    id: 'kpanlogo',
    title: '가나 크팡로고 (Kpanlogo)',
    description: '가나 가(Ga) 족의 젊은 춤과 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '1960년대 초반 가나의 독립 시기에 수도 아크라의 젊은이들 사이에서 탄생했습니다. 아프리카 전통 리듬에 서양의 록과 팝 음악 요소가 가미되어 활기찬 분위기를 띕니다.',
    tracks: [
      { name: 'Bell', pattern: [3,0,0,3, 0,0,3,0, 0,0,3,0, 3,0,0,0] },
      { name: 'Tom', pattern: [0,2,0,0, 2,0,0,0, 0,2,0,0, 2,0,0,0] },
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 3,0,0,0, 0,0,0,0] }
    ]
  },
  {
    id: 'afrobeat',
    title: '나이지리아 아프로비트 (Afrobeat)',
    description: '펠라 쿠티가 창시한 펑크(Funk)와 서아프리카 리듬의 결합',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 115,
    story: '1970년대 나이지리아의 전설적인 음악가 펠라 쿠티에 의해 탄생했습니다. 하이라이프, 재즈, 펑크가 혼합된 형태이며, 정치적 메시지와 끝없는 그루브를 자랑합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 0,0,0,0, 0,2,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,0,1, 0,0,1,0, 3,0,0,0] },
      { name: 'Shaker', pattern: [2,1,2,1, 2,1,2,1, 2,1,2,1, 2,1,2,1] }
    ]
  },
  {
    id: 'maqsum',
    title: '이집트 막숨 (Maqsum)',
    description: '중동 음악에서 가장 널리 쓰이는 다르부카 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 95,
    story: '이집트와 레반트 지역에서 기원한 막숨은 중동 팝부터 민속 음악까지 거의 모든 음악에 등장합니다. "둠-탁-둠-탁"의 기본 패턴이 배꼽춤(벨리댄스) 반주에도 자주 쓰입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 0,0,3,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,0,0, 0,0,0,0, 3,0,2,0] },
      { name: 'HiHat', pattern: [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1] }
    ]
  },
  {
    id: 'saidi',
    title: '사우디 사이디 (Saidi)',
    description: '이집트 남부와 아라비아의 민속 지팡이 춤 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '이집트 남부(상부 이집트) 지역의 전통 무술이자 춤인 "타팁(Tahtib)"에서 유래했습니다. 두 번 연속되는 무거운 "둠" 소리가 대지에 발을 딛는 역동적인 느낌을 줍니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 0,0,2,0, 0,0,0,0, 3,0,0,0] },
      { name: 'HiHat', pattern: [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1] }
    ]
  },
  {
    id: 'aksak',
    title: '터키 악삭 (Aksak)',
    description: '발칸 반도와 아나톨리아의 절뚝거리는 9/8박자 리듬',
    timeSignature: '9/8',
    subdivision: 2,
    defaultBpm: 130,
    story: '튀르키예어로 "절뚝거리는"이라는 뜻을 가진 이 리듬은 2+2+2+3의 비대칭적인 구조를 가집니다. 발칸 반도와 터키 전역의 전통 춤과 노래에 깊이 뿌리내려 있습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0, 3,0, 3,0, 3,0,0] },
      { name: 'Snare', pattern: [0,2, 0,2, 0,2, 0,2,0] },
      { name: 'HiHat', pattern: [1,1, 1,1, 1,1, 1,1,1] }
    ]
  },
  {
    id: 'kalamatianos',
    title: '그리스 칼라마티아노스 (Kalamatianos)',
    description: '그리스의 대표적인 7/8박자 원무 리듬',
    timeSignature: '7/8',
    subdivision: 2,
    defaultBpm: 120,
    story: '3+2+2 구조로 이루어진 그리스의 국민적인 춤 리듬입니다. 펠로폰네소스 반도의 칼라마타 지역에서 유래했다고 전해지며, 결혼식과 축제에서 사람들이 손을 잡고 둥글게 춤을 춥니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 2,0, 2,0] },
      { name: 'Snare', pattern: [0,0,2, 0,2, 0,2] },
      { name: 'Shaker', pattern: [1,1,1, 1,1, 1,1] }
    ]
  },
  {
    id: 'jig',
    title: '아일랜드 지그 (Jig)',
    description: '경쾌하게 통통 튀는 켈틱 전통 무곡',
    timeSignature: '6/8',
    subdivision: 2,
    defaultBpm: 115,
    story: '아일랜드를 대표하는 춤곡으로, 발을 빠르게 움직이는 독특한 스텝 댄스와 함께 연주됩니다. 보드란(Bodhrán)이라는 전통 북이 셋잇단음표 느낌을 살려 리듬을 이끕니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2, 2,0,2] },
      { name: 'Snare', pattern: [0,1,1, 0,1,1] },
      { name: 'Tom', pattern: [3,0,0, 0,0,0] }
    ]
  },
  {
    id: 'bulerias',
    title: '스페인 불레리아스 (Bulerías)',
    description: '플라멩코에서 가장 빠르고 현란한 12박자 리듬',
    timeSignature: '12/8',
    subdivision: 2,
    defaultBpm: 130,
    story: '안달루시아 지방의 집시(Gitano) 공동체에서 유래했습니다. 12박자 구조 속에서 3, 6, 8, 10, 12번째 박자에 강세가 들어가는 매우 복잡하고 정열적인 플라멩코 리듬입니다.',
    tracks: [
      { name: 'Clave', pattern: [0,0, 3,0,0, 3,0, 3,0, 3,0, 3] },
      { name: 'Snare', pattern: [1,1, 0,1,1, 0,1, 0,1, 0,1, 0] },
      { name: 'Kick', pattern: [2,0, 0,0,0, 0,0, 0,0, 0,0, 3] }
    ]
  },
  {
    id: 'gutgeori',
    title: '대한민국 굿거리 (Gutgeori)',
    description: '12/8 박자 24소박 정밀 해상도로 구현한 굿거리 장단 (70 BPM)',
    timeSignature: '12/8',
    subdivision: 4,
    defaultBpm: 70,
    story: '12/8 박자 24소박(4대박 x 6소박) 정밀 해상도로 구현된 굿거리장단입니다. 장구의 궁편(쿵)과 채편(덕), 꽹과리가 어우러져 "1대박: 덩 - - 기(약) 덕(강) - | 2대박: 쿵 - - 더(중) 러(약) 러(약) 러(약) | 3대박: 쿵 - - - 기(약) 덕(강) | 4대박: 쿵 - - 덕(중) - -"의 신명나는 호흡을 선사합니다.',
    tracks: [
      { name: 'Kick',  pattern: [3,0,0,0,0,0, 3,0,0,0,0,0, 3,0,0,0,0,0, 3,0,0,0,0,0] },
      { name: 'Snare', pattern: [3,0,0,1,3,0, 0,0,2,1,1,1, 0,0,0,1,3,0, 0,0,2,0,0,0] },
      { name: 'Bell',  pattern: [3,0,0,0,0,0, 2,0,0,0,0,0, 3,0,0,0,0,0, 2,0,0,0,0,0] }
    ]
  },
  {
    id: 'matsuri_bayashi',
    title: '일본 마쓰리바야시 (Matsuri-bayashi)',
    description: '일본 여름 축제의 다이코(큰북) 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '신사를 중심으로 열리는 지역 축제(마쓰리)에서 분위기를 돋우기 위해 연주됩니다. 다이코의 중앙을 치는 "돈"과 테두리를 치는 "카"가 어우러져 축제의 열기를 더합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 0,0,0,0, 3,0,2,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,2,0, 0,0,0,0, 3,0,2,0] },
      { name: 'Bell', pattern: [2,2,2,2, 2,2,2,2, 2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'tintal',
    title: '인도 틴탈 (Tintal)',
    description: '북인도 클래식 음악의 가장 대표적인 16박자 탈라',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '힌두스타니 음악에서 널리 쓰이는 틴탈은 16개의 마트라(박)로 이루어져 있습니다. 타블라(Tabla) 연주자가 다이내믹하고 현란한 손가락 주법을 펼치는 바탕이 됩니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 0,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [2,0,2,0, 2,0,2,0, 3,0,3,0, 2,0,2,0] },
      { name: 'Shaker', pattern: [1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,1,0] }
    ]
  },
  {
    id: 'kotekan',
    title: '인도네시아 코테칸 (Kotekan)',
    description: '발리 가멜란 음악의 화려한 교차 연주 기법',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '발리 전통 음악에서 폴로스(Polos)와 상시(Sangsih)라는 두 개의 파트가 톱니바퀴처럼 맞물려 연주됩니다. 이 고속 교차 연주가 가멜란 특유의 반짝이는 소리를 완성합니다.',
    tracks: [
      { name: 'Bell', pattern: [3,0,3,0, 3,3,0,3, 3,0,3,0, 3,3,0,3] },
      { name: 'Snare', pattern: [0,3,0,3, 0,0,3,0, 0,3,0,3, 0,0,3,0] },
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 2,0,0,0, 0,0,0,0] }
    ]
  },
  {
    id: 'otea',
    title: "타히티 오테아 (Ōte'a)",
    description: '빠르고 폭발적인 타히티의 전통 타악 앙상블',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '원래 전사들의 춤이었으나 현재는 타히티를 대표하는 축제 춤이 되었습니다. 토에레(Toere)라는 나무 슬릿 드럼이 엄청난 속도로 휘몰아치는 리듬을 쏟아냅니다.',
    tracks: [
      { name: 'Snare', pattern: [3,2,3,2, 3,2,3,2, 3,2,3,2, 3,3,3,3] },
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 3,0,0,0, 3,0,0,0] },
      { name: 'Tom', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] }
    ]
  },
  {
    id: 'maori_poi',
    title: '뉴질랜드 마오리 포이 (Poi)',
    description: '마오리족의 공 던지기 춤에 쓰이는 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 95,
    story: '포이(Poi)는 줄 끝에 매단 공을 돌리며 추는 마오리족 여성들의 우아한 춤입니다. 몸이나 손바닥에 포이가 부딪히는 소리와 노래가 자연스러운 리듬을 형성합니다.',
    tracks: [
      { name: 'Tom', pattern: [3,0,0,2, 3,0,0,2, 3,0,0,2, 3,0,0,2] },
      { name: 'Shaker', pattern: [2,0,3,0, 2,0,3,0, 2,0,3,0, 2,0,3,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,0,2,0, 0,0,2,0, 0,0,2,0] }
    ]
  },
  {
    id: 'gnawa',
    title: '모로코 그나와 (Gnawa)',
    description: '북아프리카 수피즘과 결합된 최면적인 트랜스 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 80,
    story: '과거 사하라 이남에서 모로코로 끌려온 흑인들의 치유 의식에서 출발했습니다. 카라켑(Qraqeb)이라는 금속 캐스터네츠가 만들어내는 금속성 리듬이 끝없이 반복되며 무아지경을 이끕니다.',
    tracks: [
      { name: 'Bell', pattern: [3,0,2,0, 2,3,0,2, 3,0,2,0, 2,3,0,2] },
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 2,0,0,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,0,0,0, 0,0,2,0, 0,0,0,0] }
    ]
  },
  {
    id: 'eskista',
    title: '에티오피아 에스키스타 (Eskista)',
    description: '어깨를 심하게 터는 에티오피아 전통 춤의 박동',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '어깨와 가슴을 빠르고 강하게 흔드는 에티오피아 특유의 춤 "에스키스타"를 위한 음악입니다. 케베로(Kebero) 드럼이 이 역동적인 어깨춤의 타이밍을 이끌어갑니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 0,0,3,0, 2,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,2, 0,2,0,0, 0,2,0,2, 0,0,2,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'festejo',
    title: '페루 페스테호 (Festejo)',
    description: '아프로 페루비안 12/8박자 아프리카계 축제 리듬',
    timeSignature: '12/8',
    subdivision: 2,
    defaultBpm: 110,
    story: '페루 연안 지역의 아프리카계 노예들 사이에서 탄생한 기쁨의 춤입니다. 나무 상자인 카혼(Cajón)의 탁월한 음향이 아프리카의 심장 박동과 안데스의 정서를 잇습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2, 0,3,0, 0,2,0, 3,0,0] },
      { name: 'Snare', pattern: [0,2,0, 3,0,2, 3,0,2, 0,3,0] },
      { name: 'Bell', pattern: [2,0,2, 0,2,0, 2,0,2, 0,2,0] }
    ]
  },
  {
    id: 'tarantella',
    title: '이탈리아 타란텔라 (Tarantella)',
    description: '빠른 템포의 6/8박자 춤곡',
    timeSignature: '6/8',
    subdivision: 2,
    defaultBpm: 120,
    story: '독거미 타란툴라에 물렸을 때 해독하기 위해 땀을 흘리며 격렬하게 추었다는 전설에서 유래한 춤곡입니다. 탬버린이 중요한 역할을 합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 2,0,0] },
      { name: 'Snare', pattern: [0,2,2, 0,2,2] },
      { name: 'HiHat', pattern: [3,2,2, 3,2,2] }
    ]
  },
  {
    id: 'polka',
    title: '체코 폴카 (Polka)',
    description: '경쾌한 2/4박자 농민 춤곡',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '19세기 중반 보헤미아에서 시작되어 유럽 전역으로 퍼진 춤곡입니다. 베이스와 화음이 번갈아 나오는 쿵짝 리듬이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'hasapiko',
    title: '그리스 하사피코 (Hasapiko)',
    description: '느리게 시작해 빨라지는 4/4박자 그리스 춤',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 80,
    story: '비잔틴 시대 정육점 길드에서 유래한 춤으로 영화 그리스인 조르바를 통해 유명해졌습니다. 어깨동무를 하고 일렬로 춥니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 0,0,2,0, 3,0,2,0, 0,0,2,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,0,0, 0,0,0,0, 3,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'sardana',
    title: '스페인 사르다나 (Sardana)',
    description: '카탈루냐의 원무',
    timeSignature: '6/8',
    subdivision: 2,
    defaultBpm: 100,
    story: '스페인 카탈루냐 지방의 상징적인 춤으로 여러 사람이 손을 잡고 원을 그리며 춥니다. 코블라라는 관악 밴드가 반주합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 0,0,0] },
      { name: 'Snare', pattern: [0,0,0, 2,0,2] },
      { name: 'Bell', pattern: [2,0,2, 0,2,0] }
    ]
  },
  {
    id: 'reel',
    title: '스코틀랜드 릴 (Reel)',
    description: '빠르고 활기찬 4/4박자 스코틀랜드 무곡',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '켈트 문화권의 대표적인 무곡으로 8분음표가 끊임없이 이어지는 빠른 선율이 특징입니다. 아일랜드와 북미로 전파되었습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 2,0,0,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,2,2,2, 2,2,2,2, 2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'soukous',
    title: '콩고 수쿠스 (Soukous)',
    description: '빠르고 경쾌한 아프리카 룸바',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '쿠바 음악이 아프리카로 돌아가 변형된 장르로, 화려한 기타 연주와 끊임없는 댄스 리듬이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 3,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'isicathamiya',
    title: '남아공 이시카타미야 (Isicathamiya)',
    description: '줄루족 아카펠라 스타일의 부드러운 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '남아프리카 광산 노동자들이 기숙사에서 조용히 노래하며 춤추던 것에서 유래한 부드러운 화음과 리듬입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 0,0,2,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,0,0, 0,0,0,0, 3,0,0,0] },
      { name: 'Clave', pattern: [2,0,0,2, 0,0,2,0, 0,0,0,0, 0,0,0,0] }
    ]
  },
  {
    id: 'bikutsi',
    title: '카메룬 비쿠치 (Bikutsi)',
    description: '베티족의 6/8박자 강렬한 댄스 음악',
    timeSignature: '6/8',
    subdivision: 2,
    defaultBpm: 125,
    story: '카메룬 여성들이 주로 연주하던 민속 음악에서 발전하여 빠른 템포와 폭발적인 에너지를 가진 장르가 되었습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 2,0,0] },
      { name: 'Snare', pattern: [0,0,3, 0,0,3] },
      { name: 'HiHat', pattern: [2,2,2, 2,2,2] }
    ]
  },
  {
    id: 'khaliji',
    title: '걸프 지역 칼리지 (Khaliji)',
    description: '페르시아만 지역의 독특한 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 105,
    story: '아라비아 반도 걸프만 지역의 전통 리듬으로 손뼉과 우드, 다라부카가 중심이 됩니다. 특유의 당김음이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 0,0,3,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 3,0,0,0, 0,2,0,0, 3,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'dabke',
    title: '레바논 다브케 (Dabke)',
    description: '레반트 지역의 민속 원무 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '지붕을 다지기 위해 발을 구르던 작업에서 유래한 레반트 지역의 대표적인 축제 춤 리듬입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,0,0, 0,0,3,0, 0,0,2,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'ayoub',
    title: '모로코 아유브 (Ayoub)',
    description: '치유 의식에 쓰이는 2/4박자 리듬',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 95,
    story: '자르(Zar)라는 북아프리카의 치유 의식에서 주로 쓰이는 리듬입니다. 몽환적이고 반복적인 패턴이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 0,0,3,0] },
      { name: 'Snare', pattern: [0,2,0,0, 2,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'ciftetelli',
    title: '터키 치프테텔리 (Ciftetelli)',
    description: '벨리댄스에 많이 쓰이는 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 80,
    story: '오스만 제국 시절부터 전해지는 느리고 관능적인 리듬으로 멜로디 악기의 솔로 연주 배경으로 많이 쓰입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 0,0,2,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,2,0,0, 3,0,0,0, 0,0,2,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'baladi',
    title: '이집트 발라디 (Baladi)',
    description: '고향, 시골을 뜻하는 이집트 대중 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '막숨 리듬의 무거운 버전으로 이집트 도시로 이주한 농민들의 향수가 담긴 대중적인 리듬입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,3,0, 0,0,2,0, 3,0,0,0, 2,0,2,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'samulnori',
    title: '한국 사물놀이 (Samulnori)',
    description: '꽹과리, 징, 장구, 북의 네 가지 악기 리듬',
    timeSignature: '12/8',
    subdivision: 2,
    defaultBpm: 120,
    story: '풍물굿의 리듬을 무대 예술로 승화시킨 한국의 대표적인 타악 앙상블로 폭발적인 역동성을 가집니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 2,0,0, 3,0,0, 2,0,0] },
      { name: 'Snare', pattern: [0,0,3, 0,2,0, 0,0,3, 0,2,0] },
      { name: 'Bell', pattern: [3,2,2, 3,2,2, 3,2,2, 3,2,2] }
    ]
  },
  {
    id: 'taiko_odaiko',
    title: '일본 오다이코 (Taiko Odaiko)',
    description: '일본 전통 대북의 장엄한 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '축제와 의식에서 신과 소통하기 위해 연주되던 거대한 북의 울림으로 강렬한 타격과 기합이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,2,0, 3,0,0,0, 2,2,2,2] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'Tom', pattern: [0,2,0,2, 0,2,0,2, 0,2,0,2, 0,0,0,0] }
    ]
  },
  {
    id: 'lion_dance',
    title: '중국 사자탈춤 (Lion Dance)',
    description: '타악기 위주의 명절 축제 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '춘절이나 특별한 행사에 복을 부르고 액운을 쫓기 위해 사자춤을 출 때 연주하는 역동적인 타악 리듬입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 3,0,3,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,2, 0,0,2,2, 0,0,0,0, 2,2,2,2] },
      { name: 'Bell', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'morin_khuur_gallop',
    title: '몽골 마두금 갤럽 (Morin Khuur Gallop)',
    description: '말발굽 소리를 모방한 유목민 리듬',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '몽골 초원을 달리는 말의 역동적인 움직임을 음악적으로 표현한 리듬으로 유목민의 정서를 담고 있습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,2,3,2, 0,2,3,2] },
      { name: 'HiHat', pattern: [2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'eisa',
    title: '오키나와 에이사 (Okinawa Eisa)',
    description: '조상을 기리는 오키나와 전통 춤',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 105,
    story: '오봉(추석) 기간에 조상의 영혼을 환영하고 배웅하기 위해 북을 치며 추는 오키나와의 전통 군무입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 0,0,2,0] },
      { name: 'Snare', pattern: [0,2,2,0, 3,0,0,0, 0,2,2,0, 3,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'bhangra',
    title: '인도 방그라 (Bhangra)',
    description: '펀자브 지방의 흥겨운 수확 축제 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 105,
    story: '북인도 펀자브 지역에서 농부들이 추수철에 기쁨을 나누며 추던 춤으로 돌(Dhol) 북소리가 핵심입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 3,0,0,0, 3,0,2,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 0,0,3,0, 0,0,0,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'dadra',
    title: '인도 다드라 (Dadra)',
    description: '경쾌한 6/8박자의 북인도 리듬',
    timeSignature: '6/8',
    subdivision: 2,
    defaultBpm: 100,
    story: '북인도 고전 음악과 가벼운 클래식에서 널리 쓰이는 타알(Tala)로 3+3 구조를 가집니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 0,0,0] },
      { name: 'Snare', pattern: [0,0,0, 3,0,0] },
      { name: 'Bell', pattern: [2,0,2, 2,0,2] }
    ]
  },
  {
    id: 'rupak',
    title: '인도 루팍 (Rupak)',
    description: '독특한 7/8박자의 북인도 리듬',
    timeSignature: '7/8',
    subdivision: 2,
    defaultBpm: 90,
    story: '3+2+2 구조로 이루어진 7박자 리듬으로 첫 박(Sam)이 열린 소리(Khali)로 시작하는 독특한 특징이 있습니다.',
    tracks: [
      { name: 'Kick', pattern: [0,0,0, 3,0, 2,0] },
      { name: 'Snare', pattern: [2,0,2, 0,0, 0,0] },
      { name: 'Bell', pattern: [2,2,2, 2,2, 2,2] }
    ]
  },
  {
    id: 'jhaptal',
    title: '인도 찹탈 (Jhaptal)',
    description: '안정적인 10/8박자의 인도 리듬',
    timeSignature: '10/8',
    subdivision: 2,
    defaultBpm: 85,
    story: '2+3+2+3 구조를 가지는 10박자 리듬으로 힌두스타니 고전 음악에서 우아하고 진지한 표현에 사용됩니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0, 3,0,0, 0,0, 2,0,0] },
      { name: 'Snare', pattern: [0,0, 0,0,2, 3,0, 0,0,2] },
      { name: 'HiHat', pattern: [2,0, 2,0,0, 2,0, 2,0,0] }
    ]
  },
  {
    id: 'kandyan',
    title: '스리랑카 캔디안 (Kandyan)',
    description: '스리랑카 왕궁의 궁중 춤 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '스리랑카 중부 캔디 왕국에서 기원한 화려한 춤으로 게타베라(Geta Bera)라는 북이 박력을 더합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,2,0,2, 0,2,0,2, 0,2,0,2, 0,2,0,2] },
      { name: 'Bell', pattern: [2,0,0,0, 2,0,0,0, 2,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'dohori',
    title: '네팔 도호리 (Dohori)',
    description: '남녀가 대화하듯 주고받는 민요 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 95,
    story: '네팔 산악 지대에서 남녀가 즉흥적인 가사로 묻고 답하는 형태의 노래에 쓰이는 경쾌한 마달(Madal) 북 리듬입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 0,0,2,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'ramwong',
    title: '태국 람웡 (Ramwong)',
    description: '손동작이 아름다운 태국 대중 원무',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '태국의 전통적인 축제나 모임에서 모두가 함께 참여하여 추는 원무로 부드럽고 경쾌한 리듬입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] },
      { name: 'Bell', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'tinikling',
    title: '필리핀 티니클링 (Tinikling)',
    description: '대나무 장대 사이를 뛰는 필리핀 전통 춤',
    timeSignature: '3/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '티니클링 새가 덫을 피하는 모습을 묘사한 춤으로 3박자에 맞춰 두 개의 대나무 장대를 부딪치며 리듬을 만듭니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,0,0, 3,0,0,0] },
      { name: 'HiHat', pattern: [2,0,0,0, 2,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'saing_waing',
    title: '미얀마 사인와잉 (Saing Waing)',
    description: '미얀마 전통 타악기 앙상블 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '둥글게 배열된 여러 개의 북을 혼자서 화려하게 연주하는 미얀마만의 독특한 타악 오케스트라 음악입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,2, 0,2,3,0, 3,0,0,2, 0,2,3,0] },
      { name: 'Snare', pattern: [0,2,0,0, 3,0,0,0, 0,2,0,0, 3,0,0,0] },
      { name: 'Bell', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'pinpeat',
    title: '캄보디아 핀피트 (Pinpeat)',
    description: '크메르 제국의 궁중 및 종교 음악',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '앙코르와트 부조에도 새겨져 있는 유서 깊은 음악으로 주로 궁중 무용이나 사원 의식을 반주할 때 연주됩니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 0,0,2,0] },
      { name: 'Snare', pattern: [0,2,2,0, 3,0,0,0, 0,2,2,0, 3,0,0,0] },
      { name: 'Bell', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'ca_tru',
    title: '베트남 카쭈 (Ca Tru)',
    description: '대나무 타악기 파치(Phach) 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 80,
    story: '여성 가수가 노래하며 나무 타악기 파치로 직접 리듬을 치는 베트남 북부의 정교한 실내악입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Clave', pattern: [2,0,2,0, 0,2,3,0, 2,0,2,0, 0,2,3,0] },
      { name: 'HiHat', pattern: [0,2,0,2, 0,2,0,2, 0,2,0,2, 0,2,0,2] }
    ]
  },
  {
    id: 'lam_vong',
    title: '라오스 람봉 (Lam Vong)',
    description: '손가락 관절을 꺾으며 추는 4/4박자 원무',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 95,
    story: '마 마을 축제나 결혼식에서 남녀가 짝을 지어 부드럽고 우아한 손동작을 하며 원을 그리는 라오스의 대표 춤입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'clap_sticks',
    title: '호주 애버리진 클랩스틱 (Aboriginal Clapsticks)',
    description: '디저리두와 함께하는 타악 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '호주 원주민들이 디저리두 연주와 함께 두 개의 나무 막대기를 부딪혀 시간을 맞추고 영적 의식을 치릅니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 3,0,2,0, 3,0,2,0, 3,0,2,0] },
      { name: 'Clave', pattern: [3,0,0,0, 3,0,0,0, 3,0,0,0, 3,0,0,0] },
      { name: 'Shaker', pattern: [2,2,2,2, 2,2,2,2, 2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'siva',
    title: '사모아 시바 (Samoan Siva)',
    description: '우아한 손동작의 폴리네시아 춤',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '사모아 여성들이 자연의 움직임을 손동작으로 유려하게 표현하는 전통 춤으로 잔잔한 리듬이 반주됩니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'lakalaka',
    title: '통가 라칼라카 (Tongan Lakalaka)',
    description: '마을 전체가 참여하는 통가의 대규모 무용',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 95,
    story: '남녀가 수백 명씩 모여서 노래와 손뼉, 안무를 맞추는 장엄한 폴리네시아 예술의 정수입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 3,0,0,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,2,0, 0,0,3,0, 0,0,2,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'meke',
    title: '피지 메케 (Fijian Meke)',
    description: '전설과 역사를 담은 피지의 전통 가무',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '랄리(Lali)라는 나무 슬릿 드럼과 박수 소리에 맞춰 신화와 전투, 역사적 사건들을 춤으로 재현합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0, 3,0,2,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,0,0, 3,0,0,0] },
      { name: 'Tom', pattern: [0,2,0,2, 0,2,0,2, 0,2,0,2, 0,0,0,0] }
    ]
  },
  {
    id: 'kundu',
    title: '파푸아뉴기니 쿤두 (PNG Kundu)',
    description: '모래시계 모양의 쿤두 북 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '부족들의 모임인 싱싱(Sing-Sing) 축제에서 도마뱀 가죽으로 만든 쿤두 북을 두드리며 조상을 기립니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 3,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,2, 0,0,2,2, 0,0,3,3, 0,0,2,2] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'bossa_nova',
    title: '브라질 보사노바 (Bossa Nova)',
    description: '삼바에서 파생된 세련된 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 75,
    story: '1950년대 브라질 리우데자네이루에서 삼바 리듬을 어쿠스틱 기타와 결합하여 부드럽고 세련되게 발전시킨 장르입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,2, 0,0,3,0, 3,0,0,2, 0,0,3,0] },
      { name: 'Snare', pattern: [3,0,0,3, 0,0,3,0, 0,3,0,0, 3,0,0,0] },
      { name: 'HiHat', pattern: [2,2,2,2, 2,2,2,2, 2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'merengue',
    title: '도미니카 메렝게 (Merengue)',
    description: '2/4박자의 빠르고 신나는 춤곡',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '도미니카 공화국의 국민 댄스 음악으로 구이라(금속 스크레이퍼)와 탐보라(드럼)가 만들어내는 쉼 없는 박동이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 3,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,2, 0,2,3,0] },
      { name: 'Shaker', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  // ── 인도네시아 섬별 리듬 ──
  {
    id: 'java_gamelan',
    title: '자바 가믈란 (Gamelan Jawa)',
    description: '중부 자바 왕궁의 청동 타악 앙상블, 느리고 장엄한 궁정 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 70,
    story: '자바 가믈란은 족자카르타와 수라카르타 왕궁(크라톤)의 궁정 음악입니다. 발리 가믈란의 빠르고 화려한 코테칸과 달리, 자바 가믈란은 "할루스(Halus, 섬세함)"를 추구하여 느리고 명상적인 흐름이 특징입니다. 큰 북 끄낭(Kenong)이 박자 골격을 잡고, 공(Gong)이 주기의 끝을 알립니다.',
    tracks: [
      { name: 'Bell',   pattern: [3,0,0,0, 0,0,0,0, 2,0,0,0, 0,0,0,0] },
      { name: 'Kick',   pattern: [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,3] },
      { name: 'HiHat',  pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] },
      { name: 'Tom',    pattern: [0,0,0,2, 0,0,0,0, 0,0,0,2, 0,0,0,0] }
    ]
  },
  {
    id: 'sunda_jaipongan',
    title: '순다 자이퐁안 (Jaipongan)',
    description: '서부 자바 순다의 관능적이고 역동적인 사회 무용 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 125,
    story: '자이퐁안(Jaipongan)은 1970년대 구구 나수르디안(Gugum Gumbira)이 순다 전통 무용과 현대 감각을 결합하여 창시한 무용 음악입니다. 끈당(Kendang, 양면 북)의 즉흥적이고 복잡한 리듬 패턴이 무용수의 어깨 떨림(Gitek)과 골반 움직임을 이끌며, 서부 자바의 열정적인 에너지를 폭발시킵니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,0, 0,0,2,0, 3,0,1,0, 0,0,2,1] },
      { name: 'Snare',  pattern: [0,0,2,1, 3,0,0,1, 0,0,2,1, 3,1,0,0] },
      { name: 'HiHat',  pattern: [2,1,2,1, 2,1,2,1, 2,1,2,1, 2,1,2,1] }
    ]
  },
  {
    id: 'sumatra_talempong',
    title: '수마트라 탈렘퐁 (Talempong)',
    description: '미낭카바우 고원의 인터로킹 놋쇠 주전자 북 합주',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 115,
    story: '탈렘퐁(Talempong)은 수마트라 서부 미낭카바우(Minangkabau) 민족의 전통 합주입니다. 작은 놋쇠 주전자 모양의 타악기들을 여러 연주자가 한 음씩 나누어 맞물려(interlocking) 치면서 하나의 멜로디를 만들어냅니다. 이 "인터로킹" 기법이 공동체의 협동과 조화를 상징합니다.',
    tracks: [
      { name: 'Bell',   pattern: [3,0,2,0, 0,2,0,3, 0,2,0,0, 2,0,3,0] },
      { name: 'Clave',  pattern: [0,2,0,3, 2,0,3,0, 2,0,3,0, 0,2,0,2] },
      { name: 'Kick',   pattern: [2,0,0,0, 0,0,0,0, 2,0,0,0, 0,0,0,0] },
      { name: 'HiHat',  pattern: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1] }
    ]
  },
  {
    id: 'sulawesi_kabasaran',
    title: '술라웨시 카바사란 (Kabasaran)',
    description: '미나하사 전사의 전투 춤, 강렬한 북과 발 구름',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 140,
    story: '카바사란(Kabasaran)은 북술라웨시 미나하사(Minahasa) 민족의 전통 전쟁 무용입니다. 빨간 의상을 입은 전사들이 칼(Keris)을 들고 콜린탕(Kolintang, 나무 실로폰)과 북의 강렬한 리듬에 맞춰 전투 동작을 재현합니다. 빠르고 규칙적인 강세가 전사의 행군을 표현합니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,2,0, 3,0,2,0, 3,0,2,0, 3,0,2,0] },
      { name: 'Snare',  pattern: [0,0,0,3, 0,0,0,3, 0,0,0,3, 0,0,0,3] },
      { name: 'Bell',   pattern: [2,2,2,2, 2,2,2,2, 2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'kalimantan_sape',
    title: '칼리만탄 다약 사페 (Dayak Sapé)',
    description: '보르네오 열대 우림의 다약족 류트와 의례 북',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 85,
    story: '사페(Sapé/Sape\')는 칼리만탄(보르네오) 다약(Dayak)족, 특히 카얀(Kayan)과 크냐(Kenyah) 부족의 전통 류트입니다. 긴 집(Longhouse)에서 열리는 축제에서 사페의 유려한 선율에 맞춰 느리고 우아한 응아짓(Ngajat) 춤을 추며, 코끼리새(Hornbill)의 움직임을 모방합니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,0, 0,0,2,0, 0,0,0,0, 0,2,0,0] },
      { name: 'Shaker', pattern: [2,1,1,1, 2,1,1,1, 2,1,1,1, 2,1,1,1] },
      { name: 'Tom',    pattern: [0,0,0,0, 2,0,0,1, 0,0,0,0, 2,0,0,1] }
    ]
  },
  {
    id: 'papua_tifa',
    title: '파푸아 티파 (Tifa)',
    description: '파푸아 해안 부족의 모래시계형 북과 전쟁 합창',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '티파(Tifa)는 인도네시아 파푸아와 말루쿠 지역에서 사용되는 전통 모래시계형 북입니다. 한 손으로 가죽 면을 치면서 다른 손으로 몸통을 잡아 음정을 조절합니다. 전쟁 춤, 환영 의식, 카누 경주 등에서 남성들이 원을 그리며 합창과 함께 연주하며, 원초적이고 강렬한 리듬이 특징입니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,2, 0,3,0,0, 2,0,0,3, 0,2,0,0] },
      { name: 'Tom',    pattern: [0,2,0,0, 3,0,2,0, 0,2,0,0, 3,0,2,0] },
      { name: 'Shaker', pattern: [2,1,2,1, 2,1,2,1, 2,1,2,1, 2,1,2,1] }
    ]
  },
  {
    id: 'flores_caci',
    title: '플로레스 차치 (Caci)',
    description: '플로레스섬 망가라이족의 채찍 결투 무용 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '차치(Caci)는 누사틍가라(Nusa Tenggara) 플로레스(Flores)섬 서부 망가라이(Manggarai) 민족의 전통 채찍 격투 무용입니다. 한 전사가 가죽 채찍으로 공격하고 다른 전사가 방패로 막는 의례적 결투를 북과 징의 격렬한 리듬이 이끕니다. 채찍 소리처럼 날카로운 강세가 특징입니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,0, 0,0,3,0, 0,0,0,0, 0,0,3,0] },
      { name: 'Snare',  pattern: [0,0,3,0, 0,0,0,0, 3,0,0,0, 0,0,0,3] },
      { name: 'Bell',   pattern: [2,0,0,2, 0,2,0,0, 2,0,0,2, 0,2,0,0] },
      { name: 'HiHat',  pattern: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1] }
    ]
  },
  {
    id: 'maluku_cakalele',
    title: '말루쿠 차칼렐레 (Cakalele)',
    description: '향신료 제도의 전쟁 무용, 칼과 방패의 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '차칼렐레(Cakalele)는 말루쿠(Maluku, 향신료 제도) 원주민의 전쟁 무용입니다. 남성 전사들이 칼(Parang)과 방패(Salawaku)를 들고 전투 대형을 짜며 춤을 추고, 여성들은 사라사(Lenso, 손수건)를 흔들며 응원합니다. 티파 북의 규칙적인 강약이 전사들의 진퇴를 지휘합니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Tom',    pattern: [0,0,2,0, 0,0,2,0, 0,0,2,0, 0,0,2,3] },
      { name: 'Snare',  pattern: [0,0,0,2, 0,0,0,0, 0,0,0,2, 0,0,0,0] },
      { name: 'Bell',   pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  // ── 북아메리카 리듬 ──
  {
    id: 'nola_second_line',
    title: '뉴올리언스 세컨드라인 (Second Line)',
    description: '장례 행렬에서 탄생한 뉴올리언스의 춤추는 거리 퍼레이드',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 115,
    story: '세컨드라인(Second Line)은 뉴올리언스의 재즈 장례식에서 유래한 행진 리듬입니다. "퍼스트라인"인 장례 행렬 뒤에서 시민들이 자발적으로 합류하여 춤추는 것을 "세컨드라인"이라 부릅니다. 장례가 묘지를 떠나는 순간 슬픈 행진곡이 신나는 업비트로 전환되며, 스네어의 독특한 싱코페이션이 뉴올리언스만의 "스윙"을 만듭니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,0, 0,0,0,0, 3,0,0,0, 0,0,0,0] },
      { name: 'Snare',  pattern: [0,0,0,2, 0,3,0,1, 0,0,2,0, 3,0,1,0] },
      { name: 'HiHat',  pattern: [2,1,2,1, 2,1,2,1, 2,1,2,1, 2,1,2,1] },
      { name: 'Bell',   pattern: [0,0,2,0, 0,0,2,0, 0,0,2,0, 0,0,2,0] }
    ]
  },
  {
    id: 'shuffle_blues',
    title: '셔플 블루스 (Shuffle Blues)',
    description: '시카고 블루스의 뿌리, 삼연음이 만드는 "끌리는" 리듬',
    timeSignature: '12/8',
    subdivision: 2,
    defaultBpm: 85,
    story: '셔플(Shuffle)은 미국 남부 델타 블루스에서 시카고 일렉트릭 블루스로 이어진 핵심 리듬입니다. 곧은 8비트 대신 삼연음의 "길고-짧은" 패턴이 독특한 "끌림(Swing)"을 만들어냅니다. 머디 워터스(Muddy Waters)부터 B.B. 킹까지, 블루스의 심장은 이 셔플 리듬 위에서 뛰었습니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,2,0,0, 3,0,0,2,0,0] },
      { name: 'Snare',  pattern: [0,0,0,0,0,3, 0,0,0,0,0,3] },
      { name: 'HiHat',  pattern: [2,0,1,2,0,1, 2,0,1,2,0,1] }
    ]
  },
  {
    id: 'funk_backbeat',
    title: '펑크 백비트 (Funk Backbeat)',
    description: '제임스 브라운이 발명한 "The One", 1박에 모든 것을 건다',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 105,
    story: '제임스 브라운(James Brown)은 "The One"이라 불리는 혁명적 리듬 철학을 만들었습니다. 모든 에너지를 1박에 집중시키고, 스네어는 2·4박에서 강렬한 백비트를 치며, 하이햇은 16분음표로 쪼개어 육체적인 그루브를 만듭니다. 이 리듬이 펑크, 디스코, 힙합의 근간이 되었습니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,1, 0,0,0,0, 3,0,2,0, 0,0,0,0] },
      { name: 'Snare',  pattern: [0,0,0,0, 3,0,0,0, 0,0,0,0, 3,0,0,0] },
      { name: 'HiHat',  pattern: [2,1,2,1, 2,1,2,1, 2,1,2,1, 2,1,2,1] }
    ]
  },
  {
    id: 'boom_bap',
    title: '붐뱁 힙합 (Boom Bap)',
    description: '90년대 뉴욕 힙합의 상징, 묵직한 킥과 날카로운 스네어',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '붐뱁(Boom Bap)은 1990년대 뉴욕 동부 해안 힙합의 핵심 비트 스타일입니다. "붐"은 킥드럼의 묵직한 저음, "뱁"은 스네어의 날카로운 타격을 의미합니다. DJ 프리미어(DJ Premier), 피트 록(Pete Rock) 등이 정립한 이 미학은 MPC 샘플러와 비닐 스크래치와 결합하여 힙합 황금기를 열었습니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,0, 0,0,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'Snare',  pattern: [0,0,0,0, 3,0,0,0, 0,0,0,0, 3,0,0,2] },
      { name: 'HiHat',  pattern: [2,2,2,2, 2,2,2,2, 2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'gogo_dc',
    title: 'DC 고고 (Go-Go)',
    description: '워싱턴 DC의 끊이지 않는 콩가 퍼커션 그루브',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '고고(Go-Go)는 워싱턴 D.C.의 척 브라운(Chuck Brown)이 1970년대에 창시한 도시 펑크 리듬입니다. 라이브 공연에서 곡과 곡 사이에 끊김 없이(non-stop) 콩가와 팀발레스의 폴리리듬이 이어지는 것이 최대 특징으로, DC의 흑인 커뮤니티 문화의 상징입니다.',
    tracks: [
      { name: 'Tom',    pattern: [3,0,0,2, 0,3,0,0, 2,0,0,3, 0,2,0,0] },
      { name: 'Kick',   pattern: [3,0,0,0, 0,0,0,0, 3,0,0,0, 0,0,2,0] },
      { name: 'Snare',  pattern: [0,0,0,0, 3,0,0,1, 0,0,0,0, 3,0,0,1] },
      { name: 'Bell',   pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'powwow_honor',
    title: '파우와우 아너 비트 (Pow-wow Honor Beat)',
    description: '원주민 대북의 심장 박동, 대지와 연결되는 의례 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 80,
    story: '파우와우(Pow-wow)는 북아메리카 원주민의 대규모 모임으로, 아너 비트(Honor Beat)는 그 중심에 놓이는 신성한 리듬입니다. 여러 남성이 큰 북(Big Drum) 주위에 원을 그리고 앉아 동시에 내리치며, 강세 3회 후 약한 박이 따르는 패턴이 대지의 심장 박동을 상징합니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,0, 3,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Tom',    pattern: [0,0,2,0, 0,0,2,0, 0,0,2,0, 0,0,1,0] },
      { name: 'Shaker', pattern: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1] }
    ]
  },
  {
    id: 'cajun_zydeco',
    title: '케이준 자이데코 (Cajun Zydeco)',
    description: '루이지애나 늪지대의 아코디언과 빨래판이 만드는 춤곡',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '자이데코(Zydeco)는 루이지애나 남서부 크리올(Creole)과 케이준(Cajun) 문화가 결합된 댄스 음악입니다. 아코디언과 프로트와르(Frottoir, 빨래판 조끼)가 핵심 악기로, 프랑스어 가사와 함께 두 박자 그루브가 늪지대의 뜨거운 토요일 밤 댄스홀을 달궜습니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,0,0, 0,0,3,0, 0,0,0,0, 0,0,3,0] },
      { name: 'Snare',  pattern: [0,0,0,0, 3,0,0,0, 0,0,0,0, 3,0,0,0] },
      { name: 'Shaker', pattern: [2,2,2,2, 2,2,2,2, 2,2,2,2, 2,2,2,2] },
      { name: 'Bell',   pattern: [0,0,2,0, 0,0,0,2, 0,0,2,0, 0,0,0,2] }
    ]
  },
  {
    id: 'appalachian_clogging',
    title: '애팔래치아 클로깅 (Clogging)',
    description: '산간 마을의 발 타악기, 영국-아일랜드-아프리카의 융합',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '클로깅(Clogging)은 미국 애팔래치아 산맥 지역의 발 타악 무용입니다. 영국·아일랜드 이민자의 스텝 댄스와 아프리카계 미국인의 리듬이 결합되어, 나무 바닥을 구두 밑창으로 두드리며 복잡한 리듬을 만들어냅니다. 피들과 밴조의 올드타임 음악에 맞춰 발이 곧 드럼이 됩니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,2,0, 3,0,2,0, 3,0,2,0, 3,0,2,0] },
      { name: 'HiHat',  pattern: [0,2,0,2, 0,2,0,2, 0,2,0,2, 0,2,0,2] },
      { name: 'Bell',   pattern: [2,0,0,0, 2,0,0,0, 2,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'inuit_katajjaq',
    title: '이누이트 카타작 (Katajjaq)',
    description: '북극 여성들의 호흡 게임, 들숨과 날숨의 맞물림',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '카타작(Katajjaq)은 캐나다 북극 이누이트(Inuit) 여성들의 목청 게임(Throat Singing)입니다. 두 여성이 마주 보고 서서 한 명이 들숨에, 다른 한 명이 날숨에 소리를 내며 서로 맞물립니다. 북극곰, 바람, 썰매 개 소리를 모방하며, 먼저 웃거나 숨이 끊기면 지는 놀이입니다.',
    tracks: [
      { name: 'Tom',    pattern: [3,0,2,0, 0,0,3,0, 2,0,0,0, 3,0,2,0] },
      { name: 'Shaker', pattern: [0,2,0,3, 2,0,0,2, 0,3,2,0, 0,2,0,3] },
      { name: 'Kick',   pattern: [2,0,0,0, 0,0,2,0, 0,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'quebecois_podorythmie',
    title: '퀘벡 포도리트미 (Podorythmie)',
    description: '프랑스계 캐나다의 발 타악, 지그와 릴의 동반자',
    timeSignature: '6/8',
    subdivision: 2,
    defaultBpm: 110,
    story: '포도리트미(Podorythmie, "발의 리듬")는 프랑스계 캐나다 퀘벡(Québec)의 전통 발 타악 기법입니다. 의자에 앉아 한쪽 발은 바닥을 구르고 다른 발은 들어올려 치며 복잡한 패턴을 만들어, 피들의 지그(Jig)와 릴(Reel)에 맞춰 리듬 반주를 합니다. 겨울 밤 부엌 파티(Veillée)의 핵심 요소였습니다.',
    tracks: [
      { name: 'Kick',   pattern: [3,0,2,0,1,0] },
      { name: 'HiHat',  pattern: [0,2,0,2,0,2] },
      { name: 'Tom',    pattern: [2,0,0,2,0,0] }
    ]
  },
  {
    id: 'ayoub',
    title: '아유브 (Ayoub)',
    description: '단순하고 최면적인 수피(Sufi) 의식 리듬',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 95,
    story: '모로코 등지에서 종교적인 수피 의식이나 자르(Zaar) 치유 의식에 쓰이는 단순하고 반복적인 리듬입니다. "둠-탁"의 주술적인 박동이 사람들을 트랜스(무아지경) 상태로 이끕니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'khaliji',
    title: '걸프 할리지 (Khaliji)',
    description: '사우디 및 걸프 지역의 여성 머리카락 춤 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '사우디아라비아와 페르시아만 지역 특유의 리듬으로, 여성들이 긴 머리카락을 흔들며 춤출 때 자주 연주됩니다. 무거운 박자가 엇박으로 등장하는 독특한 그루브를 만듭니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 0,0,3,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 3,0,0,0, 0,2,0,0, 3,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'dabke',
    title: '레바논 다브케 (Dabke)',
    description: '레반트 지역의 힘찬 발구르기 라인 댄스',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '레바논과 시리아 등지에서 결혼식이나 축제 때 사람들이 일렬로 손을 잡고 추는 춤입니다. 흙지붕을 다지는 작업에서 유래한 강한 발구르기를 묘사한 역동적인 리듬입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,3,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,0,0,0, 0,0,3,0, 0,0,2,0] },
      { name: 'Tom', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'malfuf',
    title: '이집트 말루프 (Malfuf)',
    description: '이집트의 빠르고 구르는 듯한 2박자 리듬',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '말루프(Malfuf)는 아랍어로 "감싼다" 혹은 "구른다"는 뜻으로, 무용수가 무대에 등장하거나 퇴장할 때 흥을 돋우는 속도감 있는 리듬입니다. 짧지만 에너지가 넘칩니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,2, 0,0,3,0] },
      { name: 'Snare', pattern: [0,0,0,0, 2,0,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'chiftetelli',
    title: '터키 치프테텔리 (Chiftetelli)',
    description: '터키식 벨리댄스의 느리고 관능적인 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 85,
    story: '오스만 제국 시대에 유래한 이 리듬은 느린 템포 속에서 선율 악기가 독주(탁심)를 펼치기 좋은 여백을 제공합니다. 여성 댄서의 부드럽고 관능적인 움직임을 받쳐줍니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 0,0,2,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,2,0,0, 3,0,0,0, 0,0,2,0] },
      { name: 'HiHat', pattern: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1] }
    ]
  },
  {
    id: 'wahda',
    title: '이라크 와하다 (Wahda)',
    description: '아랍 클래식 음악의 느린 하나(Unity) 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 75,
    story: '와하다(Wahda)는 "하나"라는 뜻으로, 첫 박에 강한 베이스(둠)가 한 번 떨어지고 나머지는 조용하게 채워집니다. 감성적이고 서정적인 아랍 노래를 부를 때 쓰입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,0,0, 0,0,2,0, 0,0,2,0] },
      { name: 'Shaker', pattern: [0,2,0,2, 0,2,0,2, 0,2,0,2, 0,2,0,2] }
    ]
  },
  {
    id: 'karsilama',
    title: '터키 카르실라마 (Karsilama)',
    description: '마주보며 추는 터키의 경쾌한 9/8박자 춤',
    timeSignature: '9/8',
    subdivision: 2,
    defaultBpm: 125,
    story: '카르실라마는 "대면하다"라는 뜻으로, 남녀가 서로 마주보며 추는 춤입니다. 2+2+2+3의 분할로 이루어진 9박자의 절뚝거리는 듯한 흥겨움이 매력적입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0, 3,0, 3,0, 3,0,0] },
      { name: 'Snare', pattern: [0,0, 0,0, 0,0, 0,3,0] },
      { name: 'Bell', pattern: [2,0, 2,0, 2,0, 2,0,2] }
    ]
  },
  {
    id: 'zaar',
    title: '수단 자르 (Zaar)',
    description: '수단과 이집트의 영혼 치유 의식 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '자르(Zaar)는 여성들이 중심이 되어 악령을 달래고 치유하는 북아프리카의 의식입니다. 점점 속도가 빨라지고 격렬해지는 다라부카 타악기 소리에 맞춰 몸을 흔듭니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 0,0,3,0, 3,0,2,0, 0,0,3,0] },
      { name: 'Snare', pattern: [0,2,0,0, 2,0,0,0, 0,2,0,0, 2,0,0,0] },
      { name: 'Tom', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'laz_horon',
    title: '터키 흐론 (Laz Horon)',
    description: '흑해 연안 사람들의 떨리는 7/8박자 군무',
    timeSignature: '7/8',
    subdivision: 2,
    defaultBpm: 140,
    story: '터키 흑해 지역에 사는 라즈인들의 전통 춤으로, 검은 바다의 거친 파도나 은빛 물고기가 펄떡이는 모습을 형상화하여 온몸을 격렬하게 떠는 것이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 2,0, 2,0] },
      { name: 'Snare', pattern: [0,0,2, 0,2, 0,2] },
      { name: 'HiHat', pattern: [2,2,2, 2,2, 2,2] }
    ]
  },
  {
    id: 'yemeni_bara',
    title: '예멘 바라 (Bara\'a)',
    description: '예멘 남성들의 용맹한 단검 춤 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 115,
    story: '바라아(Bara\'a)는 예멘의 각 부족 남성들이 잔비야(곡선형 단검)를 치켜들고 추는 용맹한 춤입니다. 부족의 결속력을 다지고 외부인을 환영할 때 타악기 반주에 맞춰 연주됩니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 3,0,2,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,2,0, 0,0,3,0, 0,0,2,0] },
      { name: 'Tom', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'russian_kalinka',
    title: '러시아 칼링카 (Kalinka)',
    description: '점점 빨라지는 러시아 민속 춤의 대명사',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '가장 유명한 러시아의 노래 중 하나인 "칼링카"는 가막살나무 열매를 뜻합니다. 처음에는 느리고 서정적으로 시작하다가 합창과 춤이 진행되면서 점점 템포가 폭발적으로 빨라집니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'kamarinskaya',
    title: '카마린스카야 (Kamarinskaya)',
    description: '발라라이카와 어울리는 경쾌한 농민 춤곡',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 140,
    story: '빠르고 활기찬 러시아의 기악 춤곡으로, 러시아 농부들의 흥과 에너지를 대변합니다. 차이코프스키 등 많은 클래식 작곡가들이 이 선율과 리듬을 차용했습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,2,0] },
      { name: 'Shaker', pattern: [2,1,2,1, 2,1,2,1] }
    ]
  },
  {
    id: 'barynya',
    title: '바린야 (Barynya)',
    description: '유머러스한 가사와 함께하는 스쿼트 킥 댄스',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '바린야는 지주 계급의 여성을 뜻하는 단어로, 농노들이 그들을 풍자하며 유쾌하게 춘 춤에서 비롯되었습니다. 쪼그려 앉은 상태에서 발을 차는 강렬한 체력전이 벌어집니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 3,0,2,0, 3,0,0,0, 3,0,2,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,2,0, 0,0,3,0] },
      { name: 'Tom', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'cossack_hopak',
    title: '코사크 호파크 (Hopak)',
    description: '우크라이나와 러시아 코사크 기병의 곡예 무술 춤',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 145,
    story: '전투를 앞둔 코사크 전사들이 용맹을 과시하기 위해 무술 동작을 춤으로 승화시켰습니다. 엄청난 높이로 도약하고 회전하며 강렬한 타악 리듬과 함께 폭발합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'troika',
    title: '트로이카 (Troika)',
    description: '세 마리 말이 끄는 썰매를 묘사한 3박자 춤곡',
    timeSignature: '3/4',
    subdivision: 2,
    defaultBpm: 120,
    story: '끝없이 펼쳐진 설원 위를 달리는 세 마리 말이 끄는 마차(트로이카)의 방울 소리와 말발굽 소리를 음악적으로 표현했습니다. 리듬에서 말의 질주 본능이 느껴집니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0, 0,0, 0,0] },
      { name: 'Snare', pattern: [0,0, 3,0, 3,0] },
      { name: 'Bell', pattern: [2,2, 2,2, 2,2] }
    ]
  },
  {
    id: 'chastushka',
    title: '차스투쉬카 (Chastushka)',
    description: '아코디언 반주의 짧고 해학적인 2박자 민요',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 130,
    story: '러시아 농촌에서 즐겨 부르던 짧고 유머러스한 4줄짜리 시를 기반으로 합니다. 바얀(러시아식 아코디언)의 빠르고 활기찬 리듬에 맞춰 즉흥적으로 부르며 박수를 칩니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 3,0,2,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0] },
      { name: 'Shaker', pattern: [2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'khorovod',
    title: '흐로보드 (Khorovod)',
    description: '고대 슬라브족의 가장 오래된 느린 원무',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 70,
    story: '자연의 변화와 계절을 기리기 위해 여럿이 손을 잡고 큰 원을 그리며 천천히 도는 의식적인 춤입니다. 슬라브인들의 강한 공동체 의식을 서정적인 리듬으로 표현합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,0, 3,0,0,0, 0,0,0,0, 3,0,0,0] },
      { name: 'Tom', pattern: [2,0,0,0, 2,0,0,0, 2,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'plyas',
    title: '플료스 (Plyas)',
    description: '엄격한 규칙 없이 즉흥적으로 추는 빠른 솔로 춤',
    timeSignature: '2/4',
    subdivision: 4,
    defaultBpm: 150,
    story: '마을 잔치에서 누구나 원 가운데로 뛰어들어 자신의 실력을 뽐내며 자유롭게 추는 춤입니다. 개인의 기량과 즉흥성을 발휘할 수 있도록 빠르고 거친 비트가 깔립니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,2,3,2, 0,2,3,2] },
      { name: 'HiHat', pattern: [2,2,2,2, 2,2,2,2] }
    ]
  },
  {
    id: 'siberian_shaman',
    title: '시베리아 샤먼 (Siberian Shaman)',
    description: '북아시아 샤먼의 프레임 드럼 의식 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 80,
    story: '시베리아 원주민 무당(샤먼)들이 영혼 세계와 소통할 때 둥근 프레임 드럼을 칩니다. 단조롭고 무거운 북소리가 반복되며 강렬한 영적 에너지를 불러일으킵니다.',
    tracks: [
      { name: 'Tom', pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 3,0,0,0, 0,0,0,0] },
      { name: 'Shaker', pattern: [2,0,0,0, 2,0,0,0, 2,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'tatar_sabantuy',
    title: '타타르 사반투이 (Sabantuy)',
    description: '타타르족 봄철 쟁기질 축제의 명랑한 음악',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 120,
    story: '사반투이는 봄철 파종이 끝난 후 열리는 볼가 강 유역 타타르족의 가장 큰 명절입니다. 씨름, 경마와 함께 어우러지는 활기차고 경쾌한 춤 리듬이 축제 분위기를 돋웁니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,2,0, 3,0,0,0, 0,0,2,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'Bell', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'uzbek_lazgi',
    title: '우즈베크 라즈기 (Lazgi)',
    description: '불에서 기원한 호레즘 지방의 떨림 춤',
    timeSignature: '6/8',
    subdivision: 2,
    defaultBpm: 120,
    story: '실크로드의 중심지였던 우즈베키스탄 호레즘 지역의 유명한 춤입니다. 모닥불 주위에서 추던 고대 의식에서 기원하여, 손목과 어깨를 미세하게 떠는 동작이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 2,0,0] },
      { name: 'Snare', pattern: [0,0,3, 0,2,2] },
      { name: 'Tom', pattern: [2,0,2, 2,0,2] }
    ]
  },
  {
    id: 'kazakh_kara_zhorga',
    title: '카자흐 카라 조르가 (Kara Zhorga)',
    description: '검은 말의 경쾌한 걸음걸이를 모방한 춤',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 115,
    story: '말과 함께 살아온 카자흐스탄 유목민들의 춤으로, 검은 말("카라 조르가")이 유연하게 걷는 모습을 흉내냅니다. 활기찬 어깨 움직임과 발놀림이 북소리와 어우러집니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 3,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] },
      { name: 'Shaker', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'tajik_falak',
    title: '타지크 팔락 (Falak)',
    description: '파미르 고원의 애절한 산악 음악',
    timeSignature: '6/8',
    subdivision: 2,
    defaultBpm: 70,
    story: '팔락은 타지크어로 "하늘"이나 "운명"을 의미합니다. 험준한 산악 지대 사람들이 신이나 사랑하는 이를 향해 부르짖던 애절한 감정이 느리고 구슬픈 리듬에 담겨있습니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0, 0,0,0] },
      { name: 'Snare', pattern: [0,0,0, 2,0,0] },
      { name: 'HiHat', pattern: [2,0,2, 0,2,0] }
    ]
  },
  {
    id: 'turkmen_kushtdepdi',
    title: '투르크멘 쿠슈트덱디 (Kushtdepdi)',
    description: '젊은이들의 에너지 넘치는 스탬핑 원무',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 110,
    story: '투르크메니스탄 카스피해 연안에서 시작되어 전국적으로 사랑받는 축제 춤입니다. 남녀가 둥글게 모여 발을 강하게 구르고 박수를 치며 폭발적인 에너지를 뿜어냅니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 3,0,2,0, 3,0,2,0, 3,0,2,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] },
      { name: 'Clave', pattern: [2,0,0,0, 2,0,0,0, 2,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'kyrgyz_komuz',
    title: '키르기스 코무즈 (Komuz)',
    description: '3현 전통 악기의 말발굽 같은 줄 뜯기 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 100,
    story: '키르기스스탄의 국민 악기인 세 줄짜리 코무즈는 천산산맥을 누비는 말의 리듬을 재현합니다. 현을 타격하듯 연주하며 매우 현란하고 다이내믹한 갤럽 리듬을 만듭니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,3,0,0, 0,0,3,0, 0,3,0,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'afghan_attan',
    title: '아프가니스탄 아탄 (Attan)',
    description: '파슈툰족의 군사 춤에서 유래한 국가 원무',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 140,
    story: '아프가니스탄의 국기 춤으로 불리며, 부족 전사들이 전투 전 사기를 높이던 의식에서 비롯되었습니다. 북소리가 점점 빨라지면서 무아지경으로 회전하는 것이 특징입니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 3,0,0,0, 3,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,0,3,0, 0,0,2,0, 0,0,3,0] },
      { name: 'Tom', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'uzbek_doira',
    title: '우즈베크 도이라 (Doira)',
    description: '현란한 손가락 주법의 타악기 앙상블',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 105,
    story: '도이라는 중앙아시아 전역에서 쓰이는 금속 고리가 달린 프레임 드럼입니다. 우즈베키스탄에서는 이 악기를 여러 대 모아놓고 현란한 기교를 다투는 연주가 유명합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,2,0, 0,0,3,0, 2,0,0,0, 3,0,0,0] },
      { name: 'Snare', pattern: [0,0,0,2, 0,2,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'Bell', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'kazakh_dombra',
    title: '카자흐 돔브라 (Dombra)',
    description: '2현 악기로 연주하는 음유시인의 서사시 리듬',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 90,
    story: '카자흐스탄 유목민 텐트(유르트)마다 걸려 있는 돔브라는 넓은 스텝 지역의 역사와 전설을 노래하는 악기입니다. 두 줄을 동시에 치며 찰진 리듬감을 선사합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 2,0,0,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,3,0, 0,0,3,0, 0,0,3,0, 0,0,3,0] },
      { name: 'HiHat', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  },
  {
    id: 'tajik_shashmaqom',
    title: '타지크 샤슈마콤 (Shashmaqom)',
    description: '타지크와 우즈베크의 궁중 클래식 성악 음악',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 75,
    story: '샤슈마콤은 "여섯 개의 선법"이라는 뜻으로, 실크로드 오아시스 도시 군주들의 궁정에서 발전한 고도로 세련된 예술 음악입니다. 우아하고 고상한 박자가 기품을 더합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,0,0, 2,0,0,0, 0,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,0,0,0, 0,0,3,0, 0,0,0,0] },
      { name: 'HiHat', pattern: [2,0,0,0, 2,0,0,0, 2,0,0,0, 2,0,0,0] }
    ]
  },
  {
    id: 'turkmen_bagshi',
    title: '투르크멘 바그시 (Bagshi)',
    description: '오아시스 사막을 떠도는 바드(시인)의 노래',
    timeSignature: '4/4',
    subdivision: 4,
    defaultBpm: 85,
    story: '바그시는 투르크메니스탄의 떠돌이 음유시인을 말합니다. 두타르(Dutar) 악기 하나를 들고 마을을 돌아다니며 민족의 영웅 서사시를 읊조리듯 노래합니다.',
    tracks: [
      { name: 'Kick', pattern: [3,0,0,0, 0,0,3,0, 3,0,0,0, 2,0,0,0] },
      { name: 'Snare', pattern: [0,0,2,0, 0,0,0,0, 0,0,2,0, 0,0,0,0] },
      { name: 'Shaker', pattern: [2,0,2,0, 2,0,2,0, 2,0,2,0, 2,0,2,0] }
    ]
  }
];
