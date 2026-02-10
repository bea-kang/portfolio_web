# Portfolio Web - Task & Status Tracker

> 최종 업데이트: 2026-02-09

## 현재 상태 요약

| 항목 | 상태 | 비고 |
|------|------|------|
| 프로젝트 셋업 | ✅ 완료 | Next.js 15 + Tailwind + TypeScript |
| 디자인 시스템 | ✅ 완료 | 커스텀 컬러, 타이포그래피 적용 |
| Notion API 연동 | ✅ 완료 | SDK v2.2.15 (타입 에러 해결됨) |
| UI 컴포넌트 | ✅ 완료 | Navigation, ContextCard, ProjectList 등 |
| 다국어 지원 | ✅ 완료 | Zustand 기반 KR/EN/CN |
| 프로젝트 상세 페이지 | ✅ 완료 | `/projects/[slug]` 구현 완료 |
| 연락처 정보 | ✅ 완료 | 이메일, LinkedIn, GitHub 입력 완료 |
| 빌드 | ✅ 성공 | `npm run build` 통과 |
| 배포 | ⏳ 대기 | Vercel 배포 준비 완료 |

---

## 연동/설정 체크리스트

### Notion API
- [x] `.env.example` 파일 생성
- [x] `.env.local` 파일 존재
- [x] `lib/notion.ts` 클라이언트 구현
- [x] SDK 다운그레이드 (v5.7.0 → v2.2.15) - 타입 에러 해결
- [ ] **Notion Database ID 형식 확인 필요** - "Invalid request URL" 에러 발생

### 환경 변수
- [x] `NOTION_TOKEN` 설정 위치 확인
- [x] `NOTION_DATABASE_ID` 설정 위치 확인
- [ ] **Database ID 형식 확인 필요** (하이픈 포함 UUID 형식: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 이미지 설정
- [x] `next.config.ts`에 Notion 이미지 도메인 등록
- [x] AWS S3 도메인 등록

### 배포 준비
- [x] 빌드 성공 (`npm run build`)
- [ ] Vercel 프로젝트 연결
- [ ] 환경 변수 Vercel에 등록

---

## 구현 완료된 기능

### Milestone 1: Project Setup & Framework
- [x] M1-T1: Next.js 프로젝트 초기화
- [x] M1-T2: 디자인 시스템 테마 적용

### Milestone 2: Notion API & Data Layer
- [x] M2-T1: Notion Client 설정
- [x] M2-T2: 데이터 패칭 및 타입 정의
- [x] M2-T3: 프로젝트 상세 조회 함수 추가 (`getProjectBySlug`, `getProjectContent`)

### Milestone 3: UI Implementation
- [x] M3-T1: 메인 레이아웃 & 네비게이션
- [x] M3-T2: Context Card 컴포넌트
- [x] M3-T3: Project List Item 컴포넌트
- [x] M3-T4: 프로젝트 리스트 페이지
- [x] M3-T5: 프로젝트 상세 페이지 (`/projects/[slug]`)
- [x] M3-T6: NotionRenderer 컴포넌트 (블록 렌더링)

### Milestone 4: Polish & Deploy
- [x] M4-T1: 다국어 상태 관리 (Zustand)
- [ ] M4-T2: PDF 내보내기 (Optional - 미구현)
- [x] M4-T3: 접근성(Accessibility) 검증
- [x] M4-T4: 연락처 정보 입력

---

## 새로 생성된 파일

| 파일 | 설명 |
|------|------|
| `app/projects/[slug]/page.tsx` | 프로젝트 상세 페이지 (Server Component + ISR) |
| `app/projects/[slug]/loading.tsx` | 로딩 스켈레톤 UI |
| `app/projects/[slug]/not-found.tsx` | 404 페이지 |
| `components/NotionRenderer.tsx` | Notion 블록 렌더러 |

---

## 연락처 정보

| 항목 | 값 |
|------|------|
| 이메일 | garding3@gmail.com |
| LinkedIn | https://www.linkedin.com/in/ye-been-kang-b7a145236/ |
| GitHub | https://github.com/bea-kang |

---

## 남은 작업

### Vercel 배포 전 필수
1. [ ] **Notion Database ID 확인** - `.env.local`의 `NOTION_DATABASE_ID` 형식이 올바른지 확인
   - 올바른 형식: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` (하이픈 포함 32자 UUID)
   - Notion URL에서 추출: `https://notion.so/workspace/DATABASE_ID?v=...`

2. [ ] **Notion Integration 권한 확인**
   - Database에 Integration이 연결되어 있는지 확인
   - Notion 페이지 → Share → Connections에서 Integration 추가

### Vercel 배포 단계
1. GitHub에 코드 푸시
2. Vercel Dashboard에서 repository 연결
3. 환경 변수 설정:
   - `NOTION_TOKEN`: Notion Integration Token
   - `NOTION_DATABASE_ID`: Notion Database ID
4. 배포

### 선택적 개선사항
- [ ] AboutSection 프로필 이미지 추가
- [ ] PDF 내보내기 기능
- [ ] 추가 애니메이션/트랜지션
