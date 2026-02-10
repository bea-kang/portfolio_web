# 1. PRD (제품 요구사항 정의서)

## 0. MVP 캡슐
1. **목표**: 해외 취업을 위한 **맥락 전달 중심**의 커리어 브랜딩 & **수정이 쉬운** 아카이빙 웹사이트 구축
2. **페르소나**: 1분 안에 훑어보는 **Global HR** (60%) & 깊이 있게 검증하는 **Hiring Manager** (40%)
3. **핵심 기능**: `FEAT-1` 다국어(한/영/중) 맥락 카드 & `FEAT-2` Notion CMS 연동
4. **성공 지표**: **"완성"** 및 배포 완료 (Self-Verification)
5. **입력 지표**: 지원서 제출 횟수 (PDF 대신 링크 제출)
6. **비기능 요구**: 모바일/데스크톱 **반응형**, 로딩 속도 최적화 (ISR)
7. **Out-of-scope**: 방문자 분석(Analytics), 결제, 소셜 로그인, 화려한 WebGL 효과
8. **Top 리스크**: Notion API 쿼리 속도 저하 및 레이아웃 깨짐
9. **완화/실험**: Next.js ISR(Incremental Static Regeneration)로 빌드 시점에 데이터 캐싱
10. **다음 단계**: Notion 페이지 구조화 및 Vercel 연동 테스트

---

## 1. 문제 정의 (Problem Definition)
- **맥락 부재**: 한국에서의 성과나 기업 규모가 해외 담당자에게는 생소하여, 경력의 임팩트가 과소평가됨.
- **유지보수 고통**: PDF 이력서는 수정이 번거롭고, 링크드인/비핸스 등에 정보가 파편화되어 있음.
- **언어 장벽**: 단일 언어(영어)만으로는 뉘앙스 전달에 한계가 있거나, 중어권 기회에 대응하기 어려움.

## 2. 목표 (Goals)
- **Context Awareness**: "Context Card"를 통해 프로젝트의 배경(규모, 위상)을 직관적으로 전달한다.
- **Easy Maintenance**: 코드를 수정하지 않고 **Notion** 글 수정만으로 포트폴리오를 업데이트한다.
- **Global Standard**: Google의 깔끔함 + Spotify의 힙한 무드를 결합하여 "트렌디한 전문가" 이미지를 준다.

## 3. 사용자 페르소나 (User Personas)
### P1. The Scanner (Global Recruiter / HR)
- **행동**: 모바일이나 데스크톱으로 링크를 클릭. 평균 체류 시간 1분 미만. 스크롤을 빠르게 내리며 키워드(Key Skills, Years)만 찾음.
- **니즈**: "이 지원자가 우리 포지션에 맞는 기본 자격을 갖췄는가?" (가독성, 요약)

### P2. The Deep Diver (Hiring Manager / Tech Lead)
- **행동**: 데스크톱에서 꼼꼼히 탐색. 프로젝트 상세 페이지로 진입하여 문제 해결 과정(Troubleshooting)을 읽음.
- **니즈**: "이 성과가 진짜인가? 기술적으로 어떤 고민을 했는가?" (논리, 깊이)

## 4. 사용자 스토리 (User Stories)
| ID | Actor | User Story | Priority |
|---|---|---|---|
| **FEAT-1** | Visitor | 포트폴리오 상단에서 언어(KR/EN/CN)를 전환하여, 편한 언어로 내용을 완벽히 이해하고 싶다. | **P0 (MVP)** |
| **FEAT-1** | Visitor | 프로젝트 리스트에서 'Context Card'(회사 규모, 서비스 MAU 등)를 먼저 보고, 이 경력의 무게감을 바로 알고 싶다. | **P0 (MVP)** |
| **FEAT-2** | Admin (Bea) | Notion에서 이력서 텍스트를 수정하면, 별도 배포 과정 없이(혹은 간단히) 웹사이트에 자동 반영되기를 원한다. | **P0 (MVP)** |
| **FEAT-3** | Visitor | 스마트폰으로 접속했을 때도 글자가 깨지지 않고 깔끔하게 읽히기를 원한다. | **P0 (MVP)** |
| **FEAT-4** | Visitor | 스킬 섹션에서 단순 나열이 아니라, 'Expert'와 'Interest'가 구분된 시각적 그래프를 보고 싶다. | P1 |
| **FEAT-5** | Visitor | 마음에 드는 이력서 내용을 버튼 하나로 PDF로 다운로드하고 싶다. | P2 |

## 5. 가정 및 리스크 (Assumptions & Risks)
- **가정**: Notion을 CMS로 사용해도 페이지 로딩 속도가 2초 이내일 것이다.
- **리스크**: Notion API 응답이 느리거나, 무료 플랜 제한에 걸릴 수 있다.
- **해결 가설**: Next.js의 `getStaticProps` (ISR)를 사용하여, 요청 때마다 API를 부르는 게 아니라 주기적으로 정적 페이지를 생성한다. 배포 시점에만 API를 호출하므로 빠르다.

## 6. Decision Log
- `{D-01, 디자인 컨셉, Google 구조 + Spotify 무드, "가독성과 임팩트 동시 추구", "다크모드 & 라임 포인트 컬러 확정"}`
- `{D-02, 데이터 소스, Notion CMS, "유지보수 최우선", "코드 수정 없이 컨텐츠 관리 가능"}`
- `{D-03, 톤앤매너, Professional & Sharp, "미사여구 절제", "숫자와 팩트 중심 서술"}`
