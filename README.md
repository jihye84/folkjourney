# 🌍 Folk Journey — World Music & Rhythm Explorer

**Folk Journey**는 3D 인터랙티브 지구본 위에서 전 세계 문화권의 고유한 **코드 진행(Chord Progressions)**과 **전통 리듬(Traditional Rhythms)**을 탐험하고 직접 들어볼 수 있는 웹 애플리케이션입니다.

![Folk Journey Preview](public/favicon.svg)

---

## 🌟 주요 기능 (Key Features)

### 🎹 1. 코드 진행 (Chord Progression) 모드
- **전 세계 67개 전통/민요 코드 진행**: 라틴아메리카, 유럽, 중동, 아시아, 아프리카, 오세아니아 등 세계 주요 전통 음악의 화성학적 뼈대 탑재.
- **실시간 소리 연주 (Tone.js)**: 음장감 있는 피아노 신디사이저로 코드 진행 연주 (`Block` 반주 / `Arpeggio` 아르페지오 지원).
- **시각적 악보 & 피아노 건반**:
  - **오선지 악보 (Staff Notation)**: 현재 코드의 음표가 실시간으로 하이라이트.
  - **2옥타브 인터랙티브 피아노 건반**: 구성음 시각화 및 개별 음 직접 클릭 연주.

### 🥁 2. 리듬 (Rhythm) 모드
- **전 세계 110개 전통 타악 패턴**: 브라질 삼바, 쿠바 클라베, 한국 굿거리, 우즈벡 라즈기, 미국 세컨드라인, 이집트 말루프 등 대륙 및 섬별 고유 리듬 매핑.
- **타악기 음원 합성**: Membrane/Noise/Metal 신디사이저 기반의 Kick, Snare, Hi-Hat, Bell, Clave 등 멀티트랙 타악기 사운드.
- **비트 그리드 (Rhythm Grid)**: 16분음표/8분음표 해상도의 강약(고스트, 보통, 강세) 원형 시각화 및 재생 스텝 애니메이션.

### ✈️ 3. 세계 여행 (World Tour) 모드
- 지구본이 전 세계를 무작위로 순회하며 7초마다 새로운 국가로 카메라를 이동시키고 음악/리듬을 자동 연주하는 시연용 탐험 모드.

### ⌨️ 4. 키보드 단축키 지원
- `Space`: 재생 / 정지 토글
- `Esc`: 패널 닫기 / 세계 여행 종료
- `M`: 🎹 코드진행 ↔ 🥁 리듬 모드 전환
- `T`: ✈️ 세계 여행 켜기 / 끄기

### 🔍 5. 스마트 검색 & 대륙 필터
- 진행 이름, 국가명, 대륙별 키워드(`아시아`, `유럽`, `남미`, `중동` 등)로 실시간 검색 및 빠른 스펙테이팅 지원.

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 |
|---|---|
| **Core** | React 19, Vite |
| **3D & Globe** | `react-globe.gl`, Three.js |
| **Audio Engine** | Tone.js |
| **Styling & UI** | Tailwind CSS v4, Framer Motion, Lucide Icons |

---

## 🚀 시작하기 (Getting Started)

### 사전 요구 사항
- Node.js (v18 이상 권장)

### 설치 및 실행

```bash
# 클론하기
git clone https://github.com/your-username/folkjourney.git
cd folkjourney/folk-journey-web

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속합니다.

### 프로덕션 빌드

```bash
npm run build
```

---

## 📜 라이선스 (License)

MIT License
