# 6. TASKS (AI 개발 파트너용 프롬프트 설계)

## 0. MVP 캡슐
(1_PRD.md와 동일, 상단 참조)

## Milestone 1: Project Setup & Framework
- [ ] **M1-T1: Next.js 프로젝트 초기화**
    - Context: Next.js 13+ App Router, Tailwind CSS, TypeScript 환경 구성.
    - Prompt: "Next.js App Router 최신 버전으로 프로젝트를 생성해줘. Tailwind CSS와 TypeScript를 포함하고, `components`, `lib`, `types` 폴더 구조를 잡아줘. 폰트는 `Inter`와 `Pretendard`를 설정해줘."
    - Ref: `2_TRD.md` (Tech Stack)

- [ ] **M1-T2: 디자인 시스템 테마 적용**
    - Context: Tailwind Config에 커스텀 컬러(Lime, Dark BG, Border) 및 Typography Scale 정의.
    - Prompt: "Tailwind config 파일을 열어서 `5_DesignSystem.md`의 Color Palette를 `theme.colors`에 등록해줘. 배경색은 `bg-almost-black`, 메인 컬러는 `text-lime`, 테두리는 `border-stroke`(#3E3E3E) 처럼 쓸 수 있게 해줘. Typography Scale도 추가해줘: H1(3rem), H2(2rem), Body(1rem), Caption(0.875rem)."
    - Ref: `5_DesignSystem.md`

## Milestone 2: Notion API & Data Layer
- [ ] **M2-T1: Notion Client 설정**
    - Context: Notion API 연동을 위한 클라이언트 유틸리티 작성.
    - Prompt: "`lib/notion.ts` 파일을 만들고 Notion SDK를 초기화해줘. 데이터베이스 ID와 토큰을 환경변수로 받고, `getDatabase` 함수를 만들어줘."
    - Ref: `2_TRD.md`, `4_DatabaseDesign.md`

- [ ] **M2-T2: 데이터 패칭 및 타입 정의**
    - Context: API 응답을 내부 타입으로 변환.
    - Prompt: "Notion API 응답 결과를 매핑할 `Project` 인터페이스를 정의해줘. `4_DatabaseDesign.md`의 스키마를 참고해서 Title, Tags, Context, Image URL 등을 포함해야 해."

## Milestone 3: UI Implementation (Core Features)
- [ ] **M3-T1: 메인 레이아웃 & 네비게이션**
    - Context: 상단 네비게이션 및 다국어 토글 UI.
    - Prompt: "상단 고정 네비게이션 바를 만들어줘. 로고, 메뉴(About, Projects), 그리고 우측에 언어 변경 버튼(KR/EN/CN)을 배치해줘. 모바일 반응형도 고려해줘."
    - Ref: `5_DesignSystem.md`

- [ ] **M3-T2: Context Card 컴포넌트**
    - Context: 핵심 기능인 맥락 카드 구현. Glassmorphism 스타일 적용.
    - Prompt: "프로젝트의 규모와 위상을 보여주는 `ContextCard` 컴포넌트를 만들어줘. 숫자(Metric)가 강조되고 라임색 라벨이 붙은 카드 형태여야 해. Glassmorphism 효과(backdrop-blur, 반투명 배경)를 살짝 적용하거나 깔끔한 보더 박스 스타일로 구현해줘."
    - Ref: `5_DesignSystem.md`, `1_PRD.md`

- [ ] **M3-T3: Project List Item 컴포넌트**
    - Context: 프로젝트 목록의 개별 아이템 컴포넌트 구현.
    - Prompt: "`ProjectListItem` 컴포넌트를 만들어줘. 왼쪽에 16:9 비율 썸네일, 오른쪽에 텍스트(Title, Tags, Context Summary)를 배치해줘. 호버 시 썸네일 `scale-105` 확대, 전체 카드 밝기 증가 인터랙션을 추가해줘."
    - Ref: `5_DesignSystem.md`

- [ ] **M3-T4: 프로젝트 리스트 페이지**
    - Context: Notion 데이터로 리스트 렌더링.
    - Prompt: "Notion에서 가져온 데이터로 프로젝트 리스트 섹션을 만들어줘. 방금 만든 `ProjectListItem`과 `ContextCard` 컴포넌트를 활용해서 구성해줘."
    - Ref: `4_DatabaseDesign.md`, `5_DesignSystem.md`

## Milestone 4: Polish & Deploy
- [ ] **M4-T1: 다국어 상태 관리 (Zustand)**
    - Context: 언어 버튼 클릭 시 텍스트 변경.
    - Prompt: "Zustand를 사용해서 `useLanguageStore`를 만들어줘. 현재 언어 상태를 관리하고, 컴포넌트에서 언어에 따라 다른 필드(Description_KR vs EN)를 보여주게 수정해줘."

- [ ] **M4-T2: PDF 내보내기 (Optional)**
    - Context: `html2canvas` 등으로 현재 화면 캡처/다운로드.
    - Prompt: "간단하게 현재 페이지 내용을 PDF로 인쇄할 수 있는 버튼을 추가해줘. `window.print()` 스타일을 CSS `@media print`로 다듬어서 깔끔하게 나오게 해줘."

- [ ] **M4-T3: 접근성(Accessibility) 검증**
    - Context: 디자인 시스템 접근성 요구사항 충족 확인.
    - Prompt: "전체 컴포넌트의 접근성을 점검해줘. 라임색 텍스트와 검정 배경의 명도 대비가 4.5:1 이상인지 확인하고, 키보드 탭 이동 시 라임색 포커스 링이 표시되도록 해줘. 모든 이미지에 적절한 alt 속성이 있는지도 확인해줘."
    - Ref: `5_DesignSystem.md`
