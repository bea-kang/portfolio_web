# 5. Design System (디자인 시스템)

## 0. MVP 캡슐
(1_PRD.md와 동일, 상단 참조)

## 1. Design Concept
- **Keywords**: Clean(Google), Conceptual(Spotify), Sharp(Resume)
- **Theme**: Dark Mode Default (전문성, 시선 집중)
- **Layout**: Grid System 기반의 질서 정연한 배치 (Google Style)
- **Vibe**: 굵은 타이포그래피와 포인트 컬러의 과감한 대비 (Spotify Style)

## 2. Color Palette
다크 모드를 기본으로 하며, 라임색을 포인트로 사용합니다.

| Role | Color User Name | Hex Code | Usage |
|---|---|---|---|
| **Background** | **Almost Black** | `#121212` | 메인 배경 (Spotify Black) |
| **Surface** | **Dark Gray** | `#242424` | 카드 배경, 버튼 배경 |
| **Primary** | **Electric Lime** | `#1DB954` or `#CCFF00` | **User Pick**: 라임색 (`#CCFF00` 계열 추천), 강조 텍스트, 버튼, 링크 |
| **Text Main** | **White** | `#FFFFFF` | 제목, 본문 |
| **Text Sub** | **Gray** | `#B3B3B3` | 부가 설명, 날짜 |
| **Border** | **Stroke** | `#3E3E3E` | 카드 테두리, 구분선 |

## 3. Typography
가독성이 좋으면서도 국문/영문/중문이 조화로운 폰트를 선정합니다.

- **Primary Font (Eng)**: `Inter` or `Space Grotesk` (모던하고 기하학적인 느낌)
- **Fallback Font (Kor)**: `Pretendard` (Inter와 가장 잘 어울리는 국문 폰트)
- **Scale**:
  - `H1`: 3rem (48px), Bold, Tight tracking
  - `H2`: 2rem (32px), SemiBold
  - `Body`: 1rem (16px), Regular, Relaxed line-height (1.6)
  - `Caption`: 0.875rem (14px), Medium

## 4. Components (Core)

### 4.1. Context Card
프로젝트의 무게감을 전달하는 핵심 컴포넌트입니다.
- **구성**:
  - 상단: `Context Label` (e.g., Enterprise) - 라임색 텍스트
  - 중단: `Metric` (e.g., 500k MAU) - 큰 흰색 볼드 숫자
  - 하단: `Description` (e.g., Korea's No.1 App) - 회색 작은 글씨
- **스타일**: 글래스모피즘(Glassmorphism) 살짝 적용 or 깔끔한 보더 박스

### 4.2. Project List Item
- 왼쪽: 썸네일 (16:9 비율)
- 오른쪽: 텍스트 정보 (Title, Tags, Context Summary)
- 인터랙션: 호버 시 썸네일 살짝 확대 (`scale-105`), 전체 카드 밝기 증가

### 4.3. Navigation Bar
- 위치: 상단 고정 (Sticky)
- 구성: Logo(Left), Menu(Center), Lang Toggle(Right)
- 모바일: 햄버거 메뉴로 축소

## 5. Accessibility (접근성)
- **Contrast**: 라임색 텍스트는 검정 배경 위에서 명도 대비 4.5:1 이상 확보 필수.
- **Alt Text**: 모든 이미지에 적절한 `alt` 속성 제공 (Notion 캡션 활용).
- **Focus Ring**: 키보드 탭 이동 시 라임색 아웃라인 표시.
