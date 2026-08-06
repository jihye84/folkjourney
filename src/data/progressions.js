const getRole = (numeral) => {
  const t = { role: '안정 (Tonic)', roleColor: 'bg-blue-100 text-blue-700', roleIcon: '🏠' };
  const s = { role: '전개 (Subdom)', roleColor: 'bg-green-100 text-green-700', roleIcon: '🍃' };
  const d = { role: '긴장 (Dom)', roleColor: 'bg-red-100 text-red-700', roleIcon: '⚡' };
  const m = { role: '색채 (Color)', roleColor: 'bg-purple-100 text-purple-700', roleIcon: '🎨' };

  if (['I', 'IMaj7', 'Imaj7', 'I7', 'i7', 'im7', 'vi', 'vi7', 'iii', 'iii7'].includes(numeral)) return t;
  if (['IV', 'IVMaj7', 'IV7', 'iv', 'iv7', 'ii', 'ii7', 'ii7b5', 'II7'].includes(numeral)) return s;
  if (['V', 'V7', 'V7b9', 'v7', 'V7sus4', 'III7', 'VI7', 'bVII', 'bVII7', 'bVI'].includes(numeral)) return d;
  return m;
};

const makeChords = (numerals) => numerals.map(n => ({ numeral: n, ...getRole(n) }));

export const romanProgressions = [
  
  {
    id: 'canon',
    category: 'Pop & Rock',
    title: '캐논 진행',
    description: '우아하고 완벽한 서사 구조 (Pachelbel)',
    defaultBpm: 90,
    chords: makeChords(['I', 'V', 'vi', 'iii', 'IV', 'I', 'IV', 'V']),
    story: '파헬벨의 캐논으로 유명해진 이 진행은 수백 년이 지난 오늘날에도 수많은 팝송과 클래식에서 사용됩니다. I에서 출발해 계단을 하나씩 내려가듯 흘러가다 다시 I로 돌아오는, 완벽한 서사 구조를 갖고 있습니다.'
  },
  {
    id: 'money',
    category: 'Pop & Rock',
    title: '머니 코드',
    description: '귀에 착 감기는 히트곡 보증 수표',
    defaultBpm: 90,
    chords: makeChords(['I', 'V', 'vi', 'IV']),
    story: '"Let It Be", "With or Without You", "Someone Like You" 등 수천 곡에서 사용된 진행입니다. 밝고(I), 긴장하고(V), 차분해지다가(vi), 포근하게 마무리(IV)되는 구조가 인간의 감정을 본능적으로 자극합니다.'
  },
  {
    id: 'doo_wop',
    category: 'Pop & Rock',
    title: '50년대 두왑 (Doo-Wop)',
    description: '정갈하고 복고적인 감성의 왕도 진행',
    defaultBpm: 90,
    chords: makeChords(['I', 'vi', 'IV', 'V7']),
    story: '"Stand By Me", "Earth Angel" 등 50년대 두왑과 로큰롤의 황금비율 진행입니다. 집(I) → 감성(vi) → 나들이(IV) → 귀가(V7)의 사이클이 끊임없이 반복되며 편안하고 복고적인 감성을 만들어냅니다.'
  },
  {
    id: 'ghibli',
    category: 'Pop & Rock',
    title: '4536 / 지브리 진행',
    description: '아련하고 서정적인 감성을 만드는 진행',
    defaultBpm: 80,
    chords: makeChords(['IV', 'V', 'iii', 'vi']),
    story: '일본에서는 "4536 진행"이라고 불리며, 지브리 스튜디오 음악과 J-Pop에서 많이 사용됩니다. 서브도미넌트(IV)에서 시작해 마이너(vi)로 안착되는 흐름이 아련하고 서정적인 감성을 만들어냅니다.'
  },
  {
    id: 'creep',
    category: 'Unique Mood',
    title: '크립 (Creep) 진행',
    description: '우울함과 처절함을 극대화하는 마법',
    defaultBpm: 75,
    chords: makeChords(['I', 'III7', 'IV', 'iv']),
    story: '라디오헤드의 "Creep"으로 널리 알려진 진행입니다. 장조(I)에서 갑자기 다이아토닉을 벗어난 III7이 등장하며 강한 자극을 주고, 이어지는 IV가 iv(마이너 서브도미넌트)로 찌그러지며 깊은 우울감과 처절함을 자아냅니다.'
  },
  {
    id: 'pop_punk',
    category: 'Pop & Rock',
    title: '팝 펑크 (Pop Punk)',
    description: '2000년대 하이틴 감성의 록 진행',
    defaultBpm: 140,
    chords: makeChords(['vi', 'IV', 'I', 'V']),
    story: '그린데이, 에이브릴 라빈 등 2000년대 팝 펑크와 록 음악을 지배했던 진행입니다. 마이너(vi)로 시작해 반항적인 느낌을 주다가도 금세 I과 V로 이어지며 경쾌하게 달리는 에너지를 만들어냅니다.'
  },
  {
    id: 'disco_vamp',
    category: 'Soul & City Pop',
    title: '디스코 그루브 (Disco Vamp)',
    description: '어깨가 들썩이는 펑크(Funk)와 디스코의 리듬',
    defaultBpm: 120,
    chords: makeChords(['im7', 'IV7', 'im7', 'IV7']),
    story: '마이너(im7)와 도미넌트(IV7) 두 개의 코드만으로 끝없이 리듬을 타게 만드는 마법의 "도리안(Dorian) 그루브"입니다. 70년대 디스코부터 다프트 펑크의 "Get Lucky" 스타일까지, 춤을 유발하는 최고의 뱀프(Vamp) 진행입니다.'
  },
  {
    id: 'kpop_ballad',
    category: 'Pop & Rock',
    title: '발라드 하행 (Ballad Descending)',
    description: '가슴을 울리는 한국형 발라드의 눈물 버튼',
    defaultBpm: 70,
    chords: makeChords(['I', 'V/3', 'vi', 'v7', 'IVMaj7']),
    story: '베이스가 한 계단씩(I → VII → VI) 차분히 내려가며 서사를 쌓아가는 K-Pop 발라드의 정석입니다. 특히 vi 뒤에 등장하는 v7 코드가 감정을 응축시켰다가 IVMaj7에서 왈칵 터뜨리며 슬픔을 극대화합니다.'
  },

  
  {
    id: 'jazz_major_251',
    category: 'Jazz & Blues',
    title: 'Major ii-V-I',
    description: '재즈 음악의 뼈대가 되는 핵심 진행',
    defaultBpm: 90,
    chords: makeChords(['ii7', 'V7', 'Imaj7']),
    story: '재즈에서 가장 중요한 화성 진행입니다. ii7(전개) → V7(긴장) → Imaj7(해결)의 흐름은 마치 활시위를 당겼다 놓는 것처럼 완벽한 긴장과 해결을 만들어냅니다. 모든 재즈 뮤지션이 반드시 익혀야 하는 진행입니다.'
  },
  {
    id: 'jazz_minor_251',
    category: 'Jazz & Blues',
    title: 'Minor ii-V-i',
    description: '마이너 재즈의 찌릿한 긴장과 해결',
    defaultBpm: 85,
    chords: makeChords(['ii7b5', 'V7b9', 'im7']),
    story: '마이너 키의 ii-V-I 진행입니다. ii7♭5(반감7화음)와 V7♭9의 조합은 일반 장조 진행보다 훨씬 날카롭고 어두운 긴장감을 만들어냅니다. 재즈 발라드와 마이너 감성의 곡에서 자주 등장합니다.'
  },
  {
    id: 'bossa_nova',
    category: 'Jazz & Blues',
    title: '보사노바 (Bossa Nova)',
    description: '해변의 여유와 나른한 라틴 감성',
    defaultBpm: 110,
    chords: makeChords(['Imaj7', 'II7', 'ii7', 'V7']),
    story: '"The Girl from Ipanema"로 대표되는 보사노바의 영혼과도 같은 진행입니다. 부드러운 Imaj7 이후 다이아토닉에 없는 뜬금없는 II7(세컨더리 도미넌트)가 등장해 특유의 나른하고 이국적인 긴장감을 부여합니다.'
  },
  {
    id: 'rhythm_changes',
    category: 'Jazz & Blues',
    title: 'Rhythm Changes (A파트)',
    description: '스윙 재즈에서 끊임없이 순환하는 진행',
    defaultBpm: 150,
    chords: makeChords(['Imaj7', 'vi7', 'ii7', 'V7']),
    story: '거쉰의 "I Got Rhythm"에서 비롯된 재즈 스탠다드의 핵심 진행입니다. Imaj7 → vi7 → ii7 → V7의 순환 구조는 스윙, 비밥 등 수많은 재즈곡의 기반이 되었으며, 리듬 체인지를 자유롭게 연주하는 것이 재즈 실력의 척도로 여겨집니다.'
  },

  
  {
    id: 'just_the_two_of_us',
    category: 'Soul & City Pop',
    title: 'Just The Two of Us',
    description: '세련되고 도시적인 시티팝의 교과서',
    defaultBpm: 95,
    chords: makeChords(['IVMaj7', 'III7', 'vi7', 'I7']),
    story: '현대 R&B, 시티팝, 로파이(Lo-fi) 힙합에서 가장 사랑받는 진행입니다. IVMaj7의 몽환적인 시작, III7의 날카로운 긴장, vi7의 쓸쓸한 해결 뒤에 다시 처음으로 돌아가기 위한 I7(세컨더리 도미넌트)의 부드러운 연결이 끝없이 반복하고 싶게 만듭니다.'
  },
  {
    id: 'neo_soul',
    category: 'Soul & City Pop',
    title: '네오 소울 (Neo Soul) 턴어라운드',
    description: '끈적하고 그루비한 현대 R&B의 뼈대',
    defaultBpm: 85,
    chords: makeChords(['ii7', 'v7', 'I7', 'IVMaj7']),
    story: '토닉(I)으로 향하는 대신, 서브도미넌트(IVMaj7)로 향하기 위한 "마이너 ii-V-I" 진행(v7 - I7 - IVMaj7)을 사용합니다. 일반적인 가요의 뻔한 종지법을 피하고 곡 전체에 끈적하고 그루비한 긴장감을 유지하게 해주는 마법 같은 진행입니다.'
  },
  {
    id: 'sad_subdominant_minor',
    category: 'Soul & City Pop',
    title: '애절한 하행 (Subdominant Minor)',
    description: '가슴이 미어지는 애절한 감성 폭발',
    defaultBpm: 75,
    chords: makeChords(['IVMaj7', 'iv7', 'iii7', 'vi7']),
    story: '장조의 IVMaj7가 단조의 iv7로 순간적으로 우울하게 변모한 뒤, 베이스가 반음씩 깎여 내려가는 매우 아름답고 슬픈 진행입니다. 현대 R&B와 J-Pop, K-Pop 발라드의 하이라이트에서 감정을 극대화할 때 단골로 등장합니다.'
  },
  {
    id: 'city_pop_royal_road',
    category: 'Soul & City Pop',
    title: '시티팝 왕도 (Jazzy 4-5-3-6)',
    description: '타케우치 마리야의 "Plastic Love" 바이브',
    defaultBpm: 105,
    chords: makeChords(['IVMaj7', 'V7', 'iii7', 'vi7']),
    story: '일반적인 4536 진행에 모두 세븐스(7th) 코드를 입힌 형태로, 일본 시티팝과 현대 J-Pop을 지배하는 절대적인 "왕도(Royal Road)" 진행입니다. IVMaj7의 반짝이는 세련됨과 도미넌트, 마이너 7th의 재지한 느낌이 섞여 네온사인이 빛나는 80년대 도쿄의 밤거리를 연상케 합니다.'
  },
  {
    id: 'backdoor_cadence',
    category: 'Soul & City Pop',
    title: '백도어 종지 (Backdoor Cadence)',
    description: '뒷문으로 슬며시 들어오는 청량하고 세련된 마침표',
    defaultBpm: 95,
    chords: makeChords(['IVMaj7', 'bVII7', 'Imaj7']),
    story: '정문인 V7 대신, 다이아토닉에 없는 ♭VII7 코드를 사용해 뒷문(Backdoor)으로 토닉(I)에 안착하는 종지법입니다. 서브도미넌트 마이너의 대리 코드로 쓰이며, J-City Pop 특유의 노스탤지어와 청량함을 만들어내는 1등 공신입니다.'
  },
  {
    id: 'jazz_turnaround_1625',
    category: 'Jazz & Blues',
    title: '1-6-2-5 턴어라운드',
    description: '야마시타 타츠로 스타일의 드라이빙 그루브',
    defaultBpm: 110,
    chords: makeChords(['Imaj7', 'vi7', 'ii7', 'V7']),
    story: '야마시타 타츠로의 "Ride on Time", "Sparkle" 같은 청량한 시티팝 드라이빙 뮤직의 근간이 되는 진행입니다. 안정적인 토닉(Imaj7)에서 출발해 순환하는 재즈의 기본 뼈대이며, 영원히 반복되는 해안가 드라이브를 떠오르게 합니다.'
  },

  
  {
    id: 'twelve_bar_blues',
    category: 'Jazz & Blues',
    title: '12-Bar Blues',
    description: '블루스/재즈의 12마디 기본 패턴',
    defaultBpm: 90,
    chords: makeChords(['I7', 'IV7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7']),
    story: '"Johnny B. Goode", "Hound Dog"부터 수많은 재즈 블루스까지, 12마디 블루스 진행은 대중음악의 근간입니다. 도미넌트 7화음(I7, IV7, V7)을 기반으로 하며, 모든 코드에 블루지한 7음이 포함되어 독특한 블루스 색채를 만들어냅니다.'
  },

  
  {
    id: 'andalusian',
    category: 'Unique Mood',
    title: '안달루시안 진행',
    description: '스페인 플라멩코풍의 비장하고 열정적인 진행',
    defaultBpm: 90,
    chords: makeChords(['vi', 'V', 'IV', 'III7']),
    story: '"Stairway to Heaven"의 인트로, "Hit the Road Jack", 플라멩코 음악에서 들을 수 있는 진행입니다. vi에서 III7까지 반음계적으로 하행하는 베이스 움직임이 스페인적 열정과 비장함을 만들어냅니다. III7의 강렬한 도미넌트 색채가 핵심입니다.'
  },
  {
    id: 'subdominant_minor',
    category: 'Unique Mood',
    title: '서브도미넌트 마이너',
    description: '장조 곡 중간에 몽환적인 반전을 주는 진행',
    defaultBpm: 90,
    chords: makeChords(['I', 'iv', 'I']),
    story: '"Yesterday" (비틀즈)에서 들을 수 있는 가장 극적인 색채 변화 기법입니다. 밝은 장조(I) 위에 갑자기 iv(단조 서브도미넌트)가 등장하면, 마치 구름이 햇빛을 가리듯 순간적으로 어둡고 몽환적인 분위기가 만들어집니다. 다시 I로 돌아올 때 해방감이 배가됩니다.'
  },
  {
    id: 'major_line_cliche',
    category: 'Unique Mood',
    title: '장조 클리셰 (Line Cliche)',
    description: '비틀즈와 007 제임스 본드의 첩보물 감성',
    defaultBpm: 90,
    chords: makeChords(['I', 'Iaug', 'I6', 'I7']),
    story: '루트(근음)는 그대로 둔 채, 내부의 한 음만 반음씩 기묘하게 상승(5음 → ♯5음 → 6음 → ♭7음)하는 신비로운 진행입니다. 비틀즈의 곡들이나 스파이/탐정 영화의 테마곡에서 느꼈던 특유의 묘한 긴장감이 바로 이 진행에서 나옵니다.'
  },

  
  {
    id: 'plagal_cadence',
    category: 'Cadence & Buildup',
    title: '아멘 종지 (Plagal Cadence)',
    description: '교회 음악에서 자주 쓰이는 경건하고 편안한 마무리',
    defaultBpm: 90,
    chords: makeChords(['IV', 'I']),
    story: '"아~멘~" 하고 끝날 때 찬송가에서 가장 많이 듣게 되는 코드 진행입니다. 도미넌트(V)의 강한 긴장 없이, 서브도미넌트(IV)에서 토닉(I)으로 부드럽게 해결되어 경건하고 평화로운 느낌을 줍니다.'
  },
  {
    id: 'authentic_cadence',
    category: 'Cadence & Buildup',
    title: '바른 종지 (Authentic Cadence)',
    description: '가장 강력하고 확실한 마침표',
    defaultBpm: 90,
    chords: makeChords(['V', 'I']),
    story: '음악이 "완벽하게 끝났다"는 느낌을 주는 가장 기본적이고 강력한 종지법입니다. V(긴장)에서 I(해결)로 향하는 강한 중력 같은 이끌림이 곡을 깔끔하게 마무리 짓습니다.'
  },
  {
    id: 'deceptive_cadence',
    category: 'Cadence & Buildup',
    title: '거짓 종지 (Deceptive Cadence)',
    description: '끝날 듯 끝나지 않는 극적인 반전',
    defaultBpm: 90,
    chords: makeChords(['V', 'vi']),
    story: '당연히 밝은 토닉(I)으로 갈 줄 알았던 도미넌트(V)가, 예상치 못하게 어두운 마이너(vi)로 빠지면서 청중을 속이는 종지입니다. 곡이 끝나는 척하면서 새로운 전개를 이어갈 때 아주 효과적으로 쓰입니다.'
  },
  {
    id: 'half_cadence',
    category: 'Cadence & Buildup',
    title: '반 종지 (Half Cadence)',
    description: '질문만 남기고 끝나는 열린 결말',
    defaultBpm: 90,
    chords: makeChords(['I', 'IV', 'V']),
    story: '문장의 마침표 대신 쉼표나 물음표를 찍은 것처럼, 도미넌트(V)에서 멈춰서 강한 긴장감과 다음 프레이즈에 대한 기대감을 짙게 남기는 종지입니다.'
  },

  
  {
    id: 'mario_cadence',
    category: 'Cadence & Buildup',
    title: '마리오 종지 (Epic Buildup)',
    description: '슈퍼 마리오에서 스테이지를 클리어할 때 나오는 벅찬 느낌',
    defaultBpm: 120,
    chords: makeChords(['bVI', 'bVII', 'I']),
    story: '모달 인터체인지(Modal Interchange)를 활용한 가장 에픽하고 극적인 빌드업입니다. 원래 키에 없는 ♭VI와 ♭VII 코드를 빌려와 계단을 오르듯 에너지를 팽창시키다가 토닉(I)에서 환희에 차게 터뜨립니다. 게임 음악이나 애니메이션 하이라이트에서 필수적으로 쓰입니다.'
  },
  {
    id: 'prechorus_buildup',
    category: 'Cadence & Buildup',
    title: '프리코러스 계단 (Pre-Chorus)',
    description: '후렴구(Chorus)로 가기 직전에 감정을 고조시키는 진행',
    defaultBpm: 110,
    chords: makeChords(['IV', 'V', 'vi', 'V7sus4']),
    story: '팝송의 프리코러스(Pre-Chorus)에서 후렴구로 넘어가기 직전에 폭발적인 감정을 준비할 때 쓰입니다. 베이스 라인이 IV → V → vi 로 상승하며 감정을 끌어올린 뒤, V7sus4의 아슬아슬한 긴장감 속에서 잠시 멈췄다가 후렴으로 쏟아집니다.'
  },

  // --- World Folk (민요 & 전통) ---
  {
    id: 'la_bamba',
    category: 'World Folk (민요 & 전통)',
    title: '라 밤바 (La Bamba)',
    description: '전 세계의 축제를 지배하는 가장 원초적인 3코드',
    defaultBpm: 130,
    chords: makeChords(['I', 'IV', 'V']),
    story: '멕시코 전통 민요이자 라틴 아메리카를 상징하는 원초적이고 신나는 진행입니다. 복잡한 기교 없이 오직 I(토닉), IV(서브도미넌트), V(도미넌트)의 가장 뼈대가 되는 세 기둥만으로 무한히 돌아가는 에너지를 만들어냅니다.'
  },
  {
    id: 'cuban_montuno',
    category: 'World Folk (민요 & 전통)',
    title: '쿠바 몬투노 (Cuban Montuno)',
    description: '어깨와 골반을 움직이게 만드는 살사의 심장',
    defaultBpm: 130,
    chords: makeChords(['I', 'IV', 'V7', 'IV']),
    story: '쿠바의 손(Son)이나 살사(Salsa) 음악에서 피아노가 끊임없이 반복해서 연주하는 리듬 패턴입니다. 단순한 3개의 코드지만 특유의 당김음(엇박) 리듬과 결합되면 숨 쉴 틈 없이 흥겨운 카리브해의 해변으로 청자를 안내합니다.'
  },
  {
    id: 'argentine_tango',
    category: 'World Folk (민요 & 전통)',
    title: '아르헨티나 탱고 (Tango)',
    description: '부에노스아이레스의 비장하고 관능적인 춤',
    defaultBpm: 100,
    chords: makeChords(['i', 'V7b9', 'V7', 'i']),
    story: '아르헨티나 뒷골목에서 피어난 관능적이고 비장한 춤곡, 탱고의 정석입니다. V7♭9 코드가 주는 날카롭고 찌를 듯한 긴장감이 단조(i)로 격렬하게 해결되며, 마치 서로를 강하게 끌어당기는 남녀의 긴장감 넘치는 스텝을 연상케 합니다.'
  },
  {
    id: 'andean_folk',
    category: 'World Folk (민요 & 전통)',
    title: '안데스의 바람 (Andean Folk)',
    description: '안데스 산맥 잉카 제국의 스산하고 구슬픈 향수',
    defaultBpm: 75,
    chords: makeChords(['i', 'bVII', 'bIII', 'V7']),
    story: '"철새는 날아가고(El Condor Pasa)"로 친숙한 남미 안데스 지역의 잉카 전통 음악입니다. 단조(i)의 어두움과 나란한 장조(♭III)의 밝음을 바쁘게 오가며, 고산지대의 스산한 바람과 인디오들의 구슬픈 역사를 노래합니다.'
  },
  {
    id: 'balinese_gamelan',
    category: 'World Folk (민요 & 전통)',
    title: '발리 가멜란 (Balinese Gamelan)',
    description: '인도네시아 전통 타악 앙상블의 몽환적인 순환',
    defaultBpm: 80,
    chords: makeChords(['I', 'Isus4', 'bVII', 'Isus4']),
    story: '인도네시아 발리섬의 전통 청동 타악기 앙상블인 "가멜란"의 물결치는 듯한 리듬을 서양 코드로 표현했습니다. 화성이 특정 목적지로 향하지 않고(기능적 화성 배제), 일정한 간격으로 영원히 반복되며 몽환적인 트랜스(Trance) 상태를 유발합니다.'
  },
  {
    id: 'celtic_mixolydian',
    category: 'World Folk (민요 & 전통)',
    title: '켈틱 믹솔리디안 (Celtic Folk)',
    description: '광활한 대자연과 고향에 대한 향수',
    defaultBpm: 90,
    chords: makeChords(['I', 'bVII', 'IV', 'I']),
    story: '스코틀랜드와 아일랜드 전통 켈틱(Celtic) 음악에서 주로 쓰이는 "더블 플래이걸(Double Plagal)" 진행입니다. V(도미넌트)를 쓰지 않고 ♭VII를 거쳐 IV에서 I로 돌아오며, 완벽히 끝나는 느낌 없이 광활하고 몽환적인 자연의 분위기를 자아냅니다.'
  },
  {
    id: 'russian_gypsy',
    category: 'World Folk (민요 & 전통)',
    title: '동유럽 / 집시 민요 (Korobeiniki)',
    description: '추운 겨울날 불을 피우고 추는 열정적인 춤',
    defaultBpm: 90,
    chords: makeChords(['i', 'iv', 'V7', 'i']),
    story: '"테트리스" 브금으로 친숙한 러시아 민요 "코로베이니키" 등 동유럽과 집시 음악의 정석입니다. 단조(i, iv)의 춥고 우울한 분위기 속에서도 V7의 강렬한 화성적 긴장이 결합되어, 슬프면서도 열정적인 춤을 추게 만듭니다.'
  },
  {
    id: 'arabian_phrygian',
    category: 'World Folk (민요 & 전통)',
    title: '아라비안 사막 (Middle Eastern)',
    description: '중동과 유대인 음악의 이국적이고 신비로운 분위기',
    defaultBpm: 90,
    chords: makeChords(['I', 'bII', 'I', 'iv']),
    story: '아랍 음악이나 클레즈머(Klezmer) 등에서 쓰이는 "프리지안 도미넌트(Phrygian Dominant)" 스케일의 소리입니다. I(장조)와 ♭II(장조) 사이의 아슬아슬한 반음 간격이 마치 뜨거운 사막의 모래바람이 부는 듯한 신비로운 긴장감을 만들어냅니다.'
  },
  {
    id: 'african_mbube',
    category: 'World Folk (민요 & 전통)',
    title: '아프리카 합창 (Mbube)',
    description: '눈부시게 밝고 원초적인 아프리카의 긍정 에너지',
    defaultBpm: 110,
    chords: makeChords(['I', 'IV', 'I', 'V']),
    story: '아프리카 남부 줄루족의 전통 합창 스타일에서 유래한 진행으로, 라이온 킹의 "The Lion Sleeps Tonight (Wimoweh)"이 대표적입니다. 가장 순수하고 폭발적인 기쁨과 긍정의 에너지를 뿜어냅니다.'
  },
  {
    id: 'desert_blues',
    category: 'World Folk (민요 & 전통)',
    title: '사하라 사막 블루스 (Desert Blues)',
    description: '블루스의 진정한 뿌리이자 강인한 생명력',
    defaultBpm: 90,
    chords: makeChords(['i', 'bVII', 'iv', 'i']),
    story: '서양 "블루스(Blues)"의 근원인 아프리카 말리와 사하라 사막 유목민들의 음악입니다. 단조(i)와 ♭VII의 투박한 결합이 척박한 사막의 고독함 속에서도 리듬을 타는 강인한 생명력을 묘사합니다.'
  },
  {
    id: 'native_american_spirit',
    category: 'World Folk (민요 & 전통)',
    title: '아메리카 원주민 (Native Spirit)',
    description: '대자연과 동화되는 영적이고 경건한 의식',
    defaultBpm: 70,
    chords: makeChords(['i', 'bIII', 'bVII', 'i']),
    story: '아메리카 원주민(인디언)의 플루트 연주나 부족 의식에서 영감을 받은 단조 5음계(Minor Pentatonic) 기반의 진행입니다. 깊은 계곡에 바람이 부는 듯한 영적이고 경건한 분위기를 자아냅니다.'
  },
  {
    id: 'indian_raga_drone',
    category: 'World Folk (민요 & 전통)',
    title: '인도 라가 드론 (Indian Raga)',
    description: '시간이 멈춘 듯한 무한한 최면과 명상',
    defaultBpm: 60,
    chords: makeChords(['I', 'Isus4', 'I', 'Isus4']),
    story: '인도 전통 음악은 서양처럼 화성이 역동적으로 진행되지 않고, 하나의 중심음(Drone)을 끝없이 울리며 그 위에서 선율(Raga)이 춤을 춥니다. 코드가 I과 Isus4 사이에서만 미세하게 요동치며, 청자를 최면에 걸린 듯한 몽환적인 명상 상태로 이끕니다.'
  },
  {
    id: 'japanese_enka',
    category: 'World Folk (민요 & 전통)',
    title: '일본 엔카 (Enka)',
    description: '비 내리는 골목, 일본 연가의 애절한 눈물',
    defaultBpm: 72,
    chords: makeChords(['i', 'iv', 'bVII', 'i']),
    story: '엔카(演歌)는 일본의 대표적인 대중 감성 음악으로, 한국의 트로트와 뿌리를 공유합니다. 단조(i)의 애절함과 iv의 한(恨)이 결합되고, ♭VII이 잠깐 장조의 빛을 비추었다가 다시 단조(i)로 돌아오며, 비 오는 거리를 혼자 걷는 듯한 쓸쓸함을 자아냅니다.'
  },
  {
    id: 'jamaican_reggae',
    category: 'World Folk (민요 & 전통)',
    title: '자메이카 레게 (Reggae)',
    description: '카리브해의 여유로운 엇박 리듬과 평화의 메시지',
    defaultBpm: 78,
    chords: makeChords(['I', 'vi', 'IV', 'V']),
    story: '밥 말리(Bob Marley)의 "No Woman, No Cry", "Three Little Birds"에서 느낄 수 있는 자메이카 레게의 정석 진행입니다. 특유의 엇박(offbeat) 기타 스트러밍과 결합되면, 느릿느릿한 카리브해의 바람과 라스타파리아니즘의 평화로운 메시지가 음악 속에 녹아듭니다.'
  },
  {
    id: 'brazilian_bossa',
    category: 'World Folk (민요 & 전통)',
    title: '브라질 보사노바 (Bossa Nova)',
    description: '코파카바나 해변의 나른하고 세련된 오후',
    defaultBpm: 130,
    chords: makeChords(['Imaj7', 'ii7', 'V7', 'Imaj7']),
    story: '안토니오 카를로스 조빔(Jobim)의 "The Girl from Ipanema", "Corcovado"로 대표되는 브라질 보사노바입니다. 삼바의 리듬을 재즈의 세련된 화성(Maj7, ii7, V7)과 결합하여, 리우데자네이루 해변의 나른하고 도시적인 우아함을 만들어냅니다.'
  },
  {
    id: 'turkish_folk',
    category: 'World Folk (민요 & 전통)',
    title: '터키 아나톨리아 (Turkish Folk)',
    description: '동서양의 교차로에서 울려 퍼지는 사즈의 선율',
    defaultBpm: 90,
    chords: makeChords(['i', 'bII', 'bVII', 'V7']),
    story: '터키 전통 악기 사즈(Saz/Bağlama)가 연주하는 아나톨리아 고원의 민요입니다. 단조(i)와 ♭II의 반음 간격이 주는 긴장감은 아라비안 프리지안과 유사하지만, ♭VII을 경유하여 V7으로 해결되는 구조가 터키 특유의 동서양이 교차하는 독특한 정서를 만들어냅니다.'
  },
  {
    id: 'greek_sirtaki',
    category: 'World Folk (민요 & 전통)',
    title: '그리스 시르타키 (Sirtaki)',
    description: '점점 빨라지는 조르바의 춤, 에게 해의 열정',
    defaultBpm: 100,
    chords: makeChords(['i', 'V7', 'i', 'iv']),
    story: '영화 "그리스인 조르바"에서 유명해진 시르타키 춤곡의 진행입니다. 느리게 시작하여 점점 빨라지는 것이 특징이며, 단조(i)와 V7의 강렬한 왕복이 지중해의 뜨거운 태양 아래 어깨를 걸고 추는 열정적인 군무를 연상시킵니다. iv가 더해지며 비장함의 깊이를 더합니다.'
  },
  {
    id: 'hawaiian_slack',
    category: 'World Folk (민요 & 전통)',
    title: '하와이 슬랙 키 (Slack-Key Guitar)',
    description: '야자수 아래 물결치는 따뜻하고 느긋한 기타',
    defaultBpm: 85,
    chords: makeChords(['I', 'IVMaj7', 'V', 'IV']),
    story: '하와이 전통 기타 주법인 "키 호알루(Kī Hōʻalu, 슬랙 키)"의 대표적인 진행입니다. 개방 현의 풍성한 울림을 활용하기 위해 튜닝을 느슨하게 풀어(slack) 연주하며, IVMaj7의 달콤한 색채가 하와이 해변의 석양과 야자수 그늘 아래의 평온함을 완벽하게 표현합니다.'
  },
  {
    id: 'chinese_guzheng',
    category: 'World Folk (민요 & 전통)',
    title: '중국 고쟁 (Guzheng Traditional)',
    description: '산수화 속 안개 낀 강가의 고아한 울림',
    defaultBpm: 75,
    chords: makeChords(['I', 'IV', 'vi', 'IV']),
    story: '중국 전통 현악기 고쟁(古筝)과 얼후(二胡)로 연주되는 궁상각치우(宮商角徵羽) 5음계의 정서를 서양 코드로 표현했습니다. 한국의 동양 5음계 진행과 유사하지만, IV(서브도미넌트)를 더 적극적으로 사용하여 중국 산수화의 안개 낀 강가처럼 유유자적한 분위기를 만들어냅니다.'
  },
  {
    id: 'mongolian_long_song',
    category: 'World Folk (민요 & 전통)',
    title: '몽골 장가 (Urtyn Duu)',
    description: '끝없는 초원 위, 바람처럼 길게 뻗는 목소리',
    defaultBpm: 55,
    chords: makeChords(['I', 'IV', 'bVII', 'IV']),
    story: '유네스코 무형문화유산인 몽골의 장가(Urtyn Duu, 긴 노래)는 광활한 스텝 초원을 말 위에서 달리며 부르는 노래입니다. I에서 IV로의 넓은 움직임과 ♭VII의 모달한 색채가 결합되어, 지평선 끝까지 펼쳐진 몽골 대초원의 무한한 공간감과 유목민의 자유로운 영혼을 표현합니다.'
  },
  {
    id: 'scottish_march',
    category: 'World Folk (민요 & 전통)',
    title: '스코틀랜드 행진곡 (Highland March)',
    description: '안개 낀 고지대를 가르는 백파이프의 웅장함',
    defaultBpm: 108,
    chords: makeChords(['I', 'V', 'IV', 'V']),
    story: '스코틀랜드 하이랜드의 그레이트 백파이프(Great Highland Bagpipe)가 연주하는 행진곡입니다. 백파이프의 드론(지속음) 위에서 I → V → IV → V의 단순하지만 웅장한 반복이 안개 속에서 전진하는 클랜(Clan) 전사들의 행렬을 연상시킵니다.'
  },
  {
    id: 'portuguese_fado',
    category: 'World Folk (민요 & 전통)',
    title: '포르투갈 파두 (Fado)',
    description: '리스본 뒷골목의 숙명적인 그리움, 사우다지',
    defaultBpm: 68,
    chords: makeChords(['i', 'V7', 'bVI', 'V7']),
    story: '파두(Fado)는 포르투갈의 영혼이라 불리는 음악으로, "사우다지(Saudade, 돌이킬 수 없는 그리움)"의 감정을 노래합니다. 포르투게사 기타의 떨리는 음색 위에 단조(i)와 V7의 긴장이 반복되고, ♭VI가 주는 찬란하면서도 슬픈 빛이 리스본 알파마 지구의 골목을 물들입니다.'
  },
  {
    id: 'ghanaian_highlife',
    category: 'World Folk (민요 & 전통)',
    title: '가나 하이라이프 (Highlife)',
    description: '서아프리카 황금 해안의 낙천적이고 춤추는 리듬',
    defaultBpm: 115,
    chords: makeChords(['I', 'IV7', 'V7', 'IV7']),
    story: '20세기 초 가나(Gold Coast)에서 탄생한 하이라이프(Highlife)는 서아프리카 전통 리듬과 서양 재즈/빅밴드를 융합한 장르입니다. 모든 코드에 도미넌트 7th 색채(IV7, V7)를 입혀 블루지하면서도 밝고 낙천적인 분위기를 만들며, 아크라 거리의 활기 넘치는 댄스홀을 떠오르게 합니다.'
  },
  {
    id: 'nordic_fiddle',
    category: 'World Folk (민요 & 전통)',
    title: '노르웨이 하르당에르 (Nordic Fiddle)',
    description: '피요르드와 오로라 아래 울리는 공명현의 신비',
    defaultBpm: 80,
    chords: makeChords(['i', 'bIII', 'bVII', 'iv']),
    story: '노르웨이 전통 악기 하르당에르 바이올린(Hardingfele)은 연주현 아래에 공명현이 있어 독특한 잔향을 만들어냅니다. 단조(i)에서 ♭III과 ♭VII의 나란한 장조를 오가는 구조가 북유럽 피요르드의 깊고 차가운 물과 그 위를 춤추는 오로라의 신비로운 대비를 묘사합니다.'
  },
  {
    id: 'egyptian_baladi',
    category: 'World Folk (민요 & 전통)',
    title: '이집트 발라디 (Baladi)',
    description: '카이로 시장의 활기와 나일강의 유구한 역사',
    defaultBpm: 95,
    chords: makeChords(['I', 'bII', 'IV', 'bII']),
    story: '발라디(بلدي, "나의 나라")는 이집트 대중 음악의 근간이 되는 리듬이자 스타일입니다. 아라비안 프리지안과 유사한 I-♭II의 반음 긴장감을 공유하지만, IV를 적극 활용하여 더 따뜻하고 대중적인 느낌을 줍니다. 카이로 시장(바자르)의 시끌벅적한 활기가 느껴집니다.'
  },
  {
    id: 'thai_luk_thung',
    category: 'World Folk (민요 & 전통)',
    title: '태국 룩퉁 (Luk Thung)',
    description: '논밭과 사원 종소리, 태국 시골의 따뜻한 서정',
    defaultBpm: 105,
    chords: makeChords(['I', 'ii', 'V', 'I']),
    story: '룩퉁(ลูกทุ่ง, "들판의 아이")은 태국의 컨트리 음악으로, 논밭에서 일하는 농민들의 사랑과 삶을 노래합니다. I → ii → V → I의 단정하고 따뜻한 진행이 라나트(Ranat, 실로폰)와 소(Saw, 2현 바이올린)의 음색과 어우러져 태국 시골의 소박하고 아름다운 풍경을 그립니다.'
  },
  {
    id: 'flamenco_bulerias',
    category: 'World Folk (민요 & 전통)',
    title: '스페인 불레리아스 (Flamenco Bulerías)',
    description: '세비야의 밤, 발 구르기와 손뼉의 불꽃 같은 열정',
    defaultBpm: 130,
    chords: makeChords(['i', 'bII', 'bII', 'V7']),
    story: '불레리아스(Bulerías)는 플라멩코에서 가장 빠르고 열정적인 형식입니다. 12박 사이클의 복잡한 리듬 위에서 단조(i)와 ♭II 사이의 날카로운 반음 긴장이 두 번 반복되며 극도의 긴장감을 쌓아 올린 뒤, V7이 폭발적으로 해방합니다. 세비야 동굴 타블라오에서 무용수의 사파테아도(발 구르기)가 울려 퍼집니다.'
  },
  {
    id: 'korean_sanjo',
    category: 'World Folk (민요 & 전통)',
    title: '한국 산조 (Sanjo)',
    description: '느린 진양조에서 빠른 휘모리까지, 한의 즉흥 독주',
    defaultBpm: 85,
    chords: makeChords(['i', 'bVII', 'iv', 'bVII']),
    story: '산조(散調)는 가야금, 거문고, 대금 등 한국 전통 악기의 독주 즉흥 음악입니다. 진양조(느림) → 중모리 → 중중모리 → 자진모리 → 휘모리(극빠름)로 점차 빨라지며, 단조(i)와 ♭VII의 반복이 한(恨)과 흥(興)을 넘나드는 깊은 감정의 골을 만들어냅니다.'
  },
  {
    id: 'okinawan_folk',
    category: 'World Folk (민요 & 전통)',
    title: '오키나와 민요 (Okinawan Folk)',
    description: '산신(三線)이 들려주는 류큐 왕국의 따뜻한 바다',
    defaultBpm: 90,
    chords: makeChords(['I', 'IV', 'bVII', 'IV']),
    story: '오키나와(류큐)의 전통 3현 악기 산신(三線/Sanshin)으로 연주되는 민요입니다. 일본 본토의 요나누키(4·7음 제거) 음계와 달리, 독자적인 류큐 음계를 사용하여 밝고 따뜻한 남쪽 바다의 정취를 자아냅니다. ♭VII이 독특한 이국적 색채를 더합니다.'
  },
  {
    id: 'cuban_guajira',
    category: 'World Folk (민요 & 전통)',
    title: '쿠바 과히라 (Guajira)',
    description: '사탕수수 밭 위의 소박하고 목가적인 농촌 노래',
    defaultBpm: 100,
    chords: makeChords(['I', 'IV', 'V7', 'I']),
    story: '과히라(Guajira)는 쿠바 시골(Campo) 농부들의 노래에서 유래한 장르입니다. 도시적인 몬투노(Montuno)와 달리, I → IV → V7 → I의 가장 기본적인 화성 순환 위에 구아히로(농부)의 즉흥 시(décima) 낭송이 더해지며, 사탕수수 밭 위의 소박한 일상을 노래합니다.'
  },
  {
    id: 'brazilian_samba',
    category: 'World Folk (민요 & 전통)',
    title: '브라질 삼바 (Samba de Roda)',
    description: '리우 카니발의 심장을 뛰게 하는 원초적인 리듬',
    defaultBpm: 110,
    chords: makeChords(['I', 'vi', 'ii', 'V7']),
    story: '삼바 지 호다(Samba de Roda)는 바이아주(Bahia)의 아프로-브라질 전통에서 탄생한 삼바의 원형입니다. 보사노바의 세련됨과 달리, 수르두(Surdo) 드럼과 판데이루(Pandeiro)의 원초적이고 강렬한 리듬 위에 I → vi → ii → V7의 순환이 카니발의 뜨거운 열기를 만들어냅니다.'
  },
  {
    id: 'irish_sean_nos',
    category: 'World Folk (민요 & 전통)',
    title: '아일랜드 셔노스 (Sean-nós)',
    description: '서부 해안 절벽 위, 반주 없는 영혼의 독창',
    defaultBpm: 65,
    chords: makeChords(['i', 'bVII', 'i', 'bVI']),
    story: '셔노스(Sean-nós, "오래된 방식")는 아일랜드 서부 게일타흐트(Gaeltacht) 지역의 무반주 독창 전통입니다. 켈틱 믹솔리디안의 밝고 활기찬 선율과 달리, 단조(i)와 ♭VI의 어둡고 명상적인 조합이 대서양 절벽에 부딪히는 파도와 게일어의 고독한 아름다움을 담아냅니다.'
  },
  {
    id: 'indian_bhangra',
    category: 'World Folk (민요 & 전통)',
    title: '인도 방그라 (Bhangra)',
    description: '펀자브의 수확 축제, 돌(Dhol) 드럼의 폭발적 에너지',
    defaultBpm: 140,
    chords: makeChords(['I', 'IV', 'I', 'V']),
    story: '방그라(Bhangra)는 인도 펀자브 지방의 수확 축제(바이사키)에서 추는 춤 음악입니다. 라가 드론의 명상적 고요와는 정반대로, 돌(Dhol) 양면 드럼의 폭발적인 비트 위에 I → IV → I → V의 단순하고 강렬한 반복이 팔을 들어 올리며 뛰는 군무의 에너지를 만들어냅니다.'
  },
  {
    id: 'colombian_cumbia',
    category: 'World Folk (민요 & 전통)',
    title: '콜롬비아 쿰비아 (Cumbia)',
    description: '카리브 해안의 촛불 아래 나란히 걷는 구애의 춤',
    defaultBpm: 95,
    chords: makeChords(['i', 'iv', 'V7', 'i']),
    story: '쿰비아(Cumbia)는 콜롬비아 카리브 해안에서 아프리카 노예, 원주민, 스페인 문화가 융합되어 탄생한 춤입니다. 여성이 촛불을 들고 남성이 모자를 흔들며 나란히 걷는 구애의 춤으로, 단조(i)의 그리움과 V7의 열정이 교차하며 라틴아메리카 전역에 퍼진 리듬의 어머니가 되었습니다.'
  },
  {
    id: 'persian_dastgah',
    category: 'World Folk (민요 & 전통)',
    title: '이란 다스트가 (Persian Dastgah)',
    description: '페르시아 정원의 세타르가 속삭이는 천일야화',
    defaultBpm: 75,
    chords: makeChords(['I', 'bII', 'bII', 'I']),
    story: '다스트가(Dastgāh)는 페르시아 전통 음악의 선법 체계로, 서양의 "조성"에 해당합니다. 세타르(Setar)와 타르(Tar)의 떨리는 현 위에서 I과 ♭II가 반음 간격으로 아슬아슬하게 요동치며, 이스파한 정원의 분수 소리와 천일야화의 신비로운 이야기를 풀어놓습니다.'
  },
  {
    id: 'romanian_hora',
    category: 'World Folk (민요 & 전통)',
    title: '루마니아 호라 (Hora)',
    description: '마을 광장에서 손을 잡고 돌아가는 원무',
    defaultBpm: 120,
    chords: makeChords(['i', 'V7', 'i', 'iv']),
    story: '호라(Hora)는 루마니아, 몰도바, 발칸 반도 전역에서 추는 전통 원무(圓舞)입니다. 결혼식이나 축제 때 마을 사람들이 손을 잡고 원을 그리며 도는 춤으로, 단조(i)와 V7의 빠른 왕복이 치마비(Cimbal)와 바이올린의 현란한 속주와 함께 점점 빨라지며 흥을 고조시킵니다.'
  },
  {
    id: 'israeli_klezmer',
    category: 'World Folk (민요 & 전통)',
    title: '이스라엘 클레즈머 (Klezmer)',
    description: '웃음과 눈물이 뒤섞인 유대인 축제의 클라리넷',
    defaultBpm: 110,
    chords: makeChords(['i', 'iv', 'V7', 'bVI']),
    story: '클레즈머(Klezmer, "노래의 그릇")는 동유럽 아슈케나지 유대인의 결혼식 축하 음악입니다. 클라리넷의 울부짖는 듯한 벤딩과 바이올린의 격정적인 선율이 단조(i)와 iv의 슬픔 속에서도 ♭VI의 예상치 못한 빛을 만나, "울면서 웃는" 유대 특유의 감정을 완벽히 표현합니다.'
  },
  {
    id: 'mexican_ranchera',
    category: 'World Folk (민요 & 전통)',
    title: '멕시코 란체라 (Ranchera)',
    description: '마리아치 트럼펫이 울려 퍼지는 사랑과 이별',
    defaultBpm: 115,
    chords: makeChords(['I', 'IV', 'V7', 'I']),
    story: '란체라(Ranchera)는 멕시코 혁명 시대에 탄생한 감성적인 노래 장르입니다. 라 밤바의 원초적 축제 에너지와 달리, 마리아치 밴드의 트럼펫과 비우엘라(Vihuela) 기타가 I → IV → V7 → I 위에 사랑, 이별, 조국애를 절절하게 노래합니다. "¡Ay, ay, ay!" 하는 그리토(Grito, 외침)가 감정의 절정을 찍습니다.'
  },
  {
    id: 'vietnamese_ca_tru',
    category: 'World Folk (민요 & 전통)',
    title: '베트남 까쭈 (Ca Trù)',
    description: '대나무 막대의 박자 위, 궁정 시가의 그윽한 울림',
    defaultBpm: 65,
    chords: makeChords(['i', 'bIII', 'iv', 'bIII']),
    story: '까쭈(Ca Trù)는 베트남 북부의 고대 궁정 성악 예술로, 유네스코 무형문화유산입니다. 여성 가수(đào)가 단현 악기 đàn đáy의 반주 위에 시(詩)를 노래하고, 청중이 대나무 막대(phách)로 박자를 치며 평가하는 독특한 형식입니다. 단조(i)와 ♭III의 몽환적 오가닥이 그윽한 베트남의 밤을 수놓습니다.'
  },
  {
    id: 'senegalese_mbalax',
    category: 'World Folk (민요 & 전통)',
    title: '세네갈 음발라크스 (Mbalax)',
    description: '다카르 해변의 사바르 드럼과 현대적 그루브',
    defaultBpm: 125,
    chords: makeChords(['I', 'IV', 'V', 'IV']),
    story: '음발라크스(Mbalax)는 유수 은두르(Youssou N\'Dour)가 세계에 알린 세네갈의 대표 대중음악입니다. 월로프(Wolof)족의 전통 사바르(Sabar) 드럼의 복잡한 폴리리듬 위에 I → IV → V → IV의 밝은 장조 진행이 결합되어, 서아프리카 해안의 태양빛처럼 눈부시고 역동적인 댄스 뮤직을 만들어냅니다.'
  },
  {
    id: 'philippine_kundiman',
    category: 'World Folk (민요 & 전통)',
    title: '필리핀 쿤디만 (Kundiman)',
    description: '달빛 아래 창가에서 기타로 전하는 사랑의 세레나데',
    defaultBpm: 75,
    chords: makeChords(['I', 'vi', 'IV', 'V']),
    story: '쿤디만(Kundiman)은 필리핀의 전통 사랑 노래(세레나데)입니다. 스페인 식민지 시대의 영향을 받아 기타와 만돌린으로 연주되며, I → vi → IV → V의 로맨틱한 진행 위에 타갈로그어의 부드러운 가사가 실려 달빛 아래 연인의 창가에서 사랑을 고백하는 장면을 그립니다.'
  },
  {
    id: 'pakistani_qawwali',
    category: 'World Folk (민요 & 전통)',
    title: '파키스탄 카왈리 (Qawwali)',
    description: '누스랏의 목소리, 수피 신비주의의 점층적 황홀경',
    defaultBpm: 90,
    chords: makeChords(['I', 'IV', 'V7sus4', 'I']),
    story: '카왈리(Qawwali)는 누스랏 파테 알리 칸(Nusrat Fateh Ali Khan)으로 대표되는 수피 이슬람의 신비주의 헌신 음악입니다. 하르모니움의 드론과 타블라의 리듬 위에서 가수가 같은 프레이즈를 점점 강렬하게 반복하며 청중을 신과의 합일(Wajd, 황홀경) 상태로 이끕니다. V7sus4의 해결되지 않는 긴장이 그 영적 갈망을 표현합니다.'
  },
  {
    id: 'finnish_kantele',
    category: 'World Folk (민요 & 전통)',
    title: '핀란드 칸텔레 (Kantele)',
    description: '칼레발라 서사시 속 얼어붙은 호수의 잔잔한 울림',
    defaultBpm: 70,
    chords: makeChords(['i', 'bVI', 'bIII', 'bVII']),
    story: '칸텔레(Kantele)는 핀란드 민족 서사시 \"칼레발라(Kalevala)\"에서 영웅 배이내뫼이넨이 물고기 턱뼈로 만들었다는 전설의 현악기입니다. 단조(i)에서 ♭VI, ♭III, ♭VII으로 이어지는 하행 진행이 북극의 하얀 밤, 얼어붙은 호수 위의 고요, 그리고 사우나 속 자작나무 향의 명상적 분위기를 자아냅니다.'
  },
  {
    id: 'trinidadian_calypso',
    category: 'World Folk (민요 & 전통)',
    title: '트리니다드 칼립소 (Calypso)',
    description: '스틸팬 드럼의 강철 위에서 춤추는 카니발의 풍자',
    defaultBpm: 120,
    chords: makeChords(['I', 'IV', 'V', 'I']),
    story: '칼립소(Calypso)는 트리니다드 토바고의 카니발에서 탄생한 음악으로, 버려진 기름통으로 만든 스틸팬(Steel Pan)의 맑고 투명한 음색이 특징입니다. I → IV → V → I의 밝은 장조 위에 사회 풍자와 유머가 담긴 가사를 얹어, 춤추면서도 세상을 비꼬는 카리브해의 지혜를 담고 있습니다.'
  },
  {
    id: 'argentine_chacarera',
    category: 'World Folk (민요 & 전통)',
    title: '아르헨티나 차카레라 (Chacarera)',
    description: '팜파스 가우초의 먼지 날리는 발 구르기 춤',
    defaultBpm: 120,
    chords: makeChords(['i', 'V7', 'i', 'bVII']),
    story: '차카레라(Chacarera)는 아르헨티나 북서부 산티아고 델 에스테로(Santiago del Estero)의 가우초 농촌 춤곡입니다. 탱고의 도시적 관능미와 대조적으로, 단조(i)와 V7의 거친 왕복에 ♭VII의 투박한 색채가 더해져, 팜파스 대초원에서 먼지를 일으키며 발을 구르는 소박하고 활기찬 시골 축제를 묘사합니다.'
  },
  {
    id: 'malagasy_salegy',
    category: 'World Folk (민요 & 전통)',
    title: '마다가스카르 살레기 (Salegy)',
    description: '인도양 섬의 폭발적이고 빠른 6/8 리듬',
    defaultBpm: 140,
    chords: makeChords(['I', 'IV', 'I', 'V']),
    story: '살레기(Salegy)는 마다가스카르 북부 해안의 전통 춤 음악입니다. 발리하(Valiha, 대나무 관 치터)와 카보시(Kabosy) 기타의 빠른 6/8 리듬 위에 I → IV → I → V의 단순하지만 에너지 넘치는 반복이 인도양 섬나라의 독특하고 폭발적인 생명력을 표현합니다.'
  },
  {
    id: 'spanish_rumba',
    category: 'World Folk (민요 & 전통)',
    title: '스페인 룸바 카탈라나 (Rumba Catalana)',
    description: '바르셀로나 해변의 집시 기타와 손뼉의 축제',
    defaultBpm: 115,
    chords: makeChords(['I', 'IV', 'bVII', 'IV']),
    story: '룸바 카탈라나(Rumba Catalana)는 바르셀로나의 히타노(Gitano, 집시) 커뮤니티에서 탄생한 장르로, 집시 킹스(Gipsy Kings)가 세계에 알렸습니다. 불레리아스의 복잡한 12박과 달리, I → IV → ♭VII → IV의 밝고 자유로운 반복 위에 벤트리케로(Ventriloqueo, 기타 타격 주법)의 경쾌한 리듬이 지중해 해변의 축제 분위기를 만들어냅니다.'
  },
  // ── 동남아시아 & 오세아니아 ──
  {
    id: 'myanmar_saing_waing',
    category: 'World Folk (민요 & 전통)',
    title: '미얀마 사인 와인 (Saing Waing)',
    description: '21개 둥근 북의 원형 앙상블, 황금 탑의 울림',
    defaultBpm: 95,
    chords: makeChords(['i', 'bIII', 'bVII', 'i']),
    story: '사인 와인(ဆိုင်းဝိုင်း)은 21개의 작은 북을 원형으로 배열한 빳사인(Pat Waing)을 중심으로 한 미얀마 전통 앙상블입니다. 쉐다곤 파고다(Shwedagon Pagoda)의 황금빛 아래 울려 퍼지는 이 음악은, 단조(i)에서 ♭III과 ♭VII의 밝은 장조를 경유했다가 다시 단조로 돌아오며, 상좌부 불교 문화의 장엄함과 일상의 따뜻함을 모두 담아냅니다.'
  },
  {
    id: 'cambodian_pinpeat',
    category: 'World Folk (민요 & 전통)',
    title: '캄보디아 핀삐엇 (Pinpeat)',
    description: '앙코르 와트의 돌벽에 새겨진 천상의 궁정 음악',
    defaultBpm: 70,
    chords: makeChords(['I', 'IV', 'V', 'IV']),
    story: '핀삐엇(ពិណពាទ្យ)은 캄보디아 왕궁의 의례와 고전 무용극(라캄, Lkhon)을 위한 궁정 앙상블입니다. 로낫(Roneat, 실로폰)과 스코르(Skor, 북)의 맑은 음색이 I → IV → V → IV의 순환 위에서 앙코르 와트 벽면의 압사라(Apsara, 천상의 무희) 부조가 살아 움직이는 듯한 고요하고 장엄한 분위기를 만들어냅니다.'
  },
  {
    id: 'laos_mor_lam',
    category: 'World Folk (민요 & 전통)',
    title: '라오스 모르 람 (Mor Lam)',
    description: '케앤 대나무 입술 오르간의 쾌활한 즉흥 랩',
    defaultBpm: 110,
    chords: makeChords(['I', 'IV', 'bVII', 'I']),
    story: '모르 람(ໝໍລຳ)은 라오스와 태국 이싼(Isan) 지역의 민속 가창 예술로, 케앤(Khaen, 대나무 입술 오르간)의 드론과 함께 즉흥적으로 재치 있는 가사를 랩처럼 읊습니다. I → IV → ♭VII → I의 밝은 진행과 케앤의 화음이 메콩강변 벼논의 초록빛 활기와 라오스 사람들의 낙천적인 유머를 그대로 전합니다.'
  },
  {
    id: 'malaysian_zapin',
    category: 'World Folk (민요 & 전통)',
    title: '말레이시아 자핀 (Zapin)',
    description: '아랍과 말레이 문화가 만나 추는 우아한 궁정 무용',
    defaultBpm: 100,
    chords: makeChords(['i', 'V7', 'iv', 'V7']),
    story: '자핀(Zapin)은 아랍 상인들이 전한 이슬람 음악과 말레이 전통이 융합된 궁정 무용입니다. 감부스(Gambus, 아랍 류트)와 마라와스(Marwas, 작은 봉고)의 반주 위에 남성 무용수들이 짝을 이루어 우아하게 춤을 춥니다. 단조(i)와 V7의 긴장감 있는 왕복이 말라카 해협을 건너온 문화 교류의 아름다움을 표현합니다.'
  },
  {
    id: 'maori_haka',
    category: 'World Folk (민요 & 전통)',
    title: '마오리 하카 (Haka)',
    description: '대지를 흔드는 전사의 함성과 발 구름',
    defaultBpm: 100,
    chords: makeChords(['i', 'bVII', 'i', 'bVII']),
    story: '하카(Haka)는 뉴질랜드 마오리족의 전통 전쟁 무용으로, "Ka Mate!"의 함성과 함께 눈을 부릅뜨고(Pūkana) 혀를 내미는(Whētero) 위압적인 동작이 특징입니다. 단조(i)와 ♭VII 사이의 강렬하고 단순한 반복이 발을 구르는(Takahi) 리듬과 합쳐져 대지 자체가 진동하는 듯한 원초적 힘을 만들어냅니다.'
  },
  {
    id: 'aboriginal_didgeridoo',
    category: 'World Folk (민요 & 전통)',
    title: '호주 디제리두 (Didgeridoo)',
    description: '5만 년 드림타임의 대지가 내는 태고의 드론',
    defaultBpm: 55,
    chords: makeChords(['I', 'Isus4', 'I', 'IV']),
    story: '디제리두(Didgeridoo/Yidaki)는 호주 원주민(Aboriginal)이 5만 년 이상 연주해 온 세계에서 가장 오래된 관악기입니다. 순환 호흡(Circular Breathing)으로 끊김 없는 드론을 만들어내며, I과 Isus4 사이의 미세한 흔들림과 IV로의 부드러운 이동이 "드림타임(Dreamtime)"이라 불리는 원주민 창세 신화의 시간 없는 대지를 표현합니다.'
  },
  {
    id: 'tahitian_otea',
    category: 'World Folk (민요 & 전통)',
    title: '타히티 오테아 (Ōte\'a)',
    description: '남태평양 화산섬의 폭발적인 힙 댄스',
    defaultBpm: 130,
    chords: makeChords(['I', 'V', 'IV', 'V']),
    story: '오테아(Ōteʻa)는 프렌치 폴리네시아 타히티섬의 전통 춤으로, 토에레(Toere, 나무 슬릿 드럼)와 파후(Pahu, 상어 가죽 드럼)의 빠른 폴리리듬 위에 무용수들이 엉덩이를 빠르게 흔드는(Tamure/ʻŌteʻa) 역동적인 춤입니다. I → V → IV → V의 밝고 힘찬 반복이 남태평양 화산섬의 불같은 에너지를 전합니다.'
  },
  {
    id: 'samoan_siva',
    category: 'World Folk (민요 & 전통)',
    title: '사모아 시바 (Siva)',
    description: '우아한 손동작으로 이야기하는 태평양의 서정',
    defaultBpm: 85,
    chords: makeChords(['I', 'IV', 'V', 'IV']),
    story: '시바(Siva)는 사모아의 전통 좌식 무용으로, 타히티 오테아의 폭발적인 움직임과 대조적으로, 앉은 자세에서 손과 팔의 우아한 제스처만으로 이야기를 전합니다. I → IV → V → IV의 부드러운 장조 순환이 야자수 그늘 아래 바다 바람과 함께 흘러가는 평화로운 폴리네시아의 오후를 그려냅니다.'
  },
  {
    id: 'tongan_lakalaka',
    category: 'World Folk (민요 & 전통)',
    title: '통가 라카라카 (Lakalaka)',
    description: '왕국의 대합창, 수백 명이 하나 되는 의례의 춤',
    defaultBpm: 90,
    chords: makeChords(['I', 'vi', 'IV', 'I']),
    story: '라카라카(Lakalaka)는 통가 왕국의 국가 의례에서 수백 명이 동시에 추는 대규모 합창 무용으로, 유네스코 무형문화유산입니다. 남녀가 나란히 서서 상체와 팔의 통일된 동작으로 왕조의 역사와 조상의 이야기를 전하며, I → vi → IV → I의 장엄하면서도 따뜻한 진행이 태평양 왕국의 위엄과 공동체 정신을 담아냅니다.'
  },
  {
    id: 'png_kundu',
    category: 'World Folk (민요 & 전통)',
    title: '파푸아뉴기니 싱싱 (Sing-Sing)',
    description: '극락조 깃털과 얼굴 문양, 천 개 부족의 축제',
    defaultBpm: 105,
    chords: makeChords(['i', 'bVII', 'bVI', 'bVII']),
    story: '싱싱(Sing-Sing)은 파푸아뉴기니의 800개 이상 부족이 모이는 전통 축제로, 극락조 깃털 장식과 화려한 얼굴 페인팅이 특징입니다. 쿤두(Kundu) 모래시계형 드럼과 대나무 피리의 반주 위에 단조(i)에서 ♭VII과 ♭VI를 오가는 하행 진행이 열대 우림 속 원시적이면서도 화려한 의례의 신비를 표현합니다.'
  },
  // ── 아프리카 추가 ──
  {
    id: 'nigerian_afrobeat',
    category: 'World Folk (민요 & 전통)',
    title: '나이지리아 아프로비트 (Afrobeat)',
    description: '펠라 쿠티의 반복 최면, 정치적 저항의 그루브',
    defaultBpm: 115,
    chords: makeChords(['I', 'IV', 'I', 'bVII']),
    story: '아프로비트(Afrobeat)는 나이지리아의 전설적인 음악가 펠라 쿠티(Fela Kuti)가 서아프리카 하이라이프, 재즈, 펑크를 융합하여 창시한 장르입니다. I → IV의 단순한 반복이 10분 이상 이어지며 최면적인 그루브를 만들고, ♭VII이 예상을 비트는 긴장감을 더합니다. 음악 자체가 군부 독재에 대한 저항의 무기였습니다.'
  },
  {
    id: 'ethiopian_tizita',
    category: 'World Folk (민요 & 전통)',
    title: '에티오피아 티지타 (Tizita)',
    description: '아디스아바바의 고원에서 울려 퍼지는 향수의 5음계',
    defaultBpm: 75,
    chords: makeChords(['i', 'bVI', 'bVII', 'i']),
    story: '티지타(ትዝታ, "추억/그리움")는 에티오피아의 대표적인 선법이자 음악 장르입니다. 독자적인 5음계 위에 단조(i) → ♭VI → ♭VII → i의 순환이 크라르(Krar, 리라형 현악기)와 마신코(Masinko, 1현 바이올린)의 음색과 어우러져, 해발 2,400m 아디스아바바 고원의 안개 속에서 옛 사랑을 떠올리는 듯한 독특한 애수를 자아냅니다.'
  },
  {
    id: 'congolese_soukous',
    category: 'World Folk (민요 & 전통)',
    title: '콩고 수쿠스 (Soukous)',
    description: '콩고강변의 춤추는 기타, 아프리카 대륙을 지배한 리듬',
    defaultBpm: 130,
    chords: makeChords(['I', 'IV', 'V', 'IV']),
    story: '수쿠스(Soukous/Rumba Congolaise)는 콩고민주공화국(킨샤사)에서 쿠바 룸바의 영향을 받아 탄생한 아프리카 최대의 대중음악입니다. 세바스찬(Sébène)이라 불리는 일렉트릭 기타의 빠르고 화려한 핑거 피킹이 I → IV → V → IV 위에서 폭발하며, 콩고강변에서 사하라 이남 아프리카 전역의 댄스홀을 지배했습니다.'
  },
  {
    id: 'zimbabwean_mbira',
    category: 'World Folk (민요 & 전통)',
    title: '짐바브웨 음비라 (Mbira)',
    description: '엄지 피아노가 불러내는 조상의 영혼과 비의 기원',
    defaultBpm: 100,
    chords: makeChords(['I', 'bVII', 'IV', 'bVII']),
    story: '음비라(Mbira dzavadzimu, "조상의 음비라")는 짐바브웨 쇼나(Shona)족의 신성한 엄지 피아노입니다. 금속 혀를 양 엄지로 퉁기며 만드는 맑은 음색이 호쇼(Hosho, 마라카스)의 셰이킹과 결합되어, I과 ♭VII, IV를 순환하며 비의 신에게 풍년을 기원하는 보나(Bira) 의식의 명상적 분위기를 만듭니다.'
  },
  {
    id: 'cape_verdean_morna',
    category: 'World Folk (민요 & 전통)',
    title: '카보베르데 모르나 (Morna)',
    description: '대서양 한가운데, 세자리아 에보라의 맨발의 노래',
    defaultBpm: 70,
    chords: makeChords(['i', 'iv', 'V7', 'i']),
    story: '모르나(Morna)는 "맨발의 디바" 세자리아 에보라(Cesária Évora)로 세계에 알려진 카보베르데의 영혼 음악입니다. 포르투갈의 파두(Fado)와 브라질의 모딘야(Modinha)의 영향을 받았지만, 대서양 한가운데 화산섬의 고립감이 만든 독자적인 "소다지(Sodade, 그리움)"의 감정이 단조(i)와 iv, V7의 순환 속에 녹아있습니다.'
  },
  {
    id: 'tanzanian_taarab',
    category: 'World Folk (민요 & 전통)',
    title: '탄자니아 타아라브 (Taarab)',
    description: '잔지바르 궁전의 향신료 바람, 아랍과 아프리카의 교차',
    defaultBpm: 85,
    chords: makeChords(['I', 'IV', 'V7', 'I']),
    story: '타아라브(Taarab)는 탄자니아 잔지바르(Zanzibar)섬의 술탄 궁전에서 탄생한 음악으로, 아랍의 우드(Oud)와 카눈(Qanun), 인도의 타블라, 아프리카의 리듬이 융합된 인도양 교역로의 음악적 결정체입니다. I → IV → V7 → I의 정돈된 진행 위에 스와힐리어 시(詩)의 은유적 가사가 얹혀, 향신료 바람이 부는 궁전의 밤을 수놓습니다.'
  },
  {
    id: 'guinean_mandingue',
    category: 'World Folk (민요 & 전통)',
    title: '기니 만딩게 (Mandingue)',
    description: '젬베 드럼과 발라폰이 전하는 만딩 제국의 유산',
    defaultBpm: 120,
    chords: makeChords(['I', 'IV', 'I', 'V']),
    story: '만딩게(Mandingue) 음악은 13세기 말리 제국의 그리오(Griot, 세습 음유시인) 전통에 뿌리를 둔 서아프리카의 음악 유산입니다. 젬베(Djembe) 드럼의 세 가지 음색(슬랩·톤·베이스)과 발라폰(Balafon, 나무 실로폰)의 맑은 선율이 I → IV → I → V 위에서 대화하듯 주고받으며, 순디아타 케이타(Sundiata Keita)의 영웅 서사시를 들려줍니다.'
  },
  {
    id: 'cameroonian_makossa',
    category: 'World Folk (민요 & 전통)',
    title: '카메룬 마코사 (Makossa)',
    description: '"소울 마코사"의 나라, 베이스라인이 이끄는 도시적 댄스',
    defaultBpm: 110,
    chords: makeChords(['I', 'vi', 'ii', 'V7']),
    story: '마코사(Makossa)는 카메룬 두알라(Douala)에서 탄생한 도시적 댄스 음악으로, 마누 디방고(Manu Dibango)의 "Soul Makossa"(1972)가 마이클 잭슨에게까지 영향을 준 것으로 유명합니다. 육중한 베이스 기타의 그루브가 I → vi → ii → V7의 세련된 진행을 이끌며, 서아프리카 하이라이프보다 더 도시적이고 펑키한 감각을 자랑합니다.'
  },
  {
    id: 'beninese_vodun',
    category: 'World Folk (민요 & 전통)',
    title: '베냉 보둔 (Vodun Rhythm)',
    description: '부두교 의식의 태고적 드럼, 영혼을 부르는 리듬',
    defaultBpm: 90,
    chords: makeChords(['i', 'bVII', 'bVI', 'bVII']),
    story: '보둔(Vodun)은 베냉(구 다호메이 왕국)에서 시작된 전통 신앙으로, 아이티 부두교(Voodoo)의 원형입니다. 헝간(Houngan, 사제)이 이끄는 의식에서 아산(Azan) 드럼의 복잡한 폴리리듬이 단조(i)에서 ♭VII, ♭VI를 오가며, 로아(Loa, 정령)를 불러내어 참가자들이 트랜스 상태에 빠지도록 유도하는 강력한 영적 음악입니다.'
  },
  {
    id: 'moroccan_gnawa',
    category: 'World Folk (민요 & 전통)',
    title: '모로코 그나와 (Gnawa)',
    description: '겜브리 베이스의 트랜스, 사하라를 건너온 치유의 음악',
    defaultBpm: 80,
    chords: makeChords(['i', 'bII', 'i', 'bII']),
    story: '그나와(كناوة, Gnawa)는 사하라 사막 이남에서 모로코로 건너온 흑인 노예 후손들의 영적 음악입니다. 3현 베이스 류트 겜브리(Guembri/Sintir)의 깊고 울리는 저음과 크라켑(Qraqeb, 금속 캐스터네츠)의 리듬이 단조(i)와 ♭II의 반음 진동을 끝없이 반복하며, 릴라(Lila) 밤샘 의식에서 참가자를 치유적 트랜스 상태로 이끕니다.'
  },
];

export const PRESET_CATEGORIES = ['Pop & Rock', 'Soul & City Pop', 'Jazz & Blues', 'Cadence & Buildup', 'World Folk (민요 & 전통)', 'Unique Mood'];
