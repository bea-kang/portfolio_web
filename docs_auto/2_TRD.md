# 2. TRD (기술 요구사항 정의서)

## 0. MVP 캡슐
(1_PRD.md와 동일, 상단 참조)

## 1. 시스템 아키텍처 (System Architecture)
```mermaid
graph TD
    User[Visitor] -->|Access| CDN[Vercel Edge Network]
    CDN -->|Serve Static HTML| FE[Next.js App]
    
    subgraph "Build Time / ISR"
        FE -->|Fetch Content| NotionAPI[Notion Official API]
        NotionAPI -->|Return Blocks| NotionDB[Notion Database]
    end
    
    subgraph "Client Side"
        FE -->|Interaction| State[Zustand Store (Lang/Theme)]
    end
```

## 2. 기술 스택 (Tech Stack)
| 구분 | 기술 | 선정 이유 |
|---|---|---|
| **Framework** | **Next.js (App Router)** | SEO 최적화, 정적 사이트 생성(SSG/ISR) 강력 지원, React 생태계 |
| **Styling** | **Tailwind CSS** | 빠르고 일관된 디자인 시스템 적용, 커스텀 필요성 적음 |
| **CMS** | **Notion API** | 사용자가 가장 익숙한 에디터, 유지보수 용이성 최상 |
| **Deploy** | **Vercel** | Next.js 최적화 배포, SSL 자동 적용, 글로벌 CDN |
| **State** | **Zustand** | 다국어/테마 등 전역 상태 관리에 가볍고 직관적 |
| **Icons** | **Lucide React** | 깔끔하고 모던한 아이콘, 가벼운 용량 |

## 3. 데이터베이스 요구사항 (Notion as DB)
- **Notion Database ID**를 환경변수(`NOTION_DATABASE_ID`)로 관리.
- **Notion Integration Token** (`NOTION_TOKEN`) 보안 관리 필수.
- 이미지는 Notion 내부에 호스팅된 URL을 가져오되, `next/image`로 최적화하여 서빙.

## 4. 비기능 요구사항
- **Performance**: Lighthouse Performance 점수 90점 이상 목표.
- **Responsive**: Mobile (375px~)부터 Desktop (1920px)까지 유연한 레이아웃.
- **SEO**: 각 페이지별 동적 `meta` 태그 (og:title, og:description, og:image) 자동 생성.
- **Accessibility**: 시멘틱 태그(`header`, `main`, `footer`, `article`) 준수.

## 5. 외부 연동 및 보안
- **API 연동**: `POST https://api.notion.com/v1/databases/{id}/query`
- **보안**: Notion Token은 절대 클라이언트 사이드에 노출되지 않도록 서버 사이드(`getStaticProps` or Server Component)에서만 호출.
- **Rate Limit 대응**: 배포 시(Build Time) 또는 일정 주기에만 호출하여 API 호출 횟수 최소화.

## 6. 디렉토리 구조 권장 (Recommendation)
```
/
├── components/   # 공통 UI 컴포넌트 (Button, Card, Layout)
├── app/          # Next.js 13+ App Router 페이지
├── lib/          # Notion API 클라이언트 및 유틸리티
├── styles/       # 글로벌 스타일 및 Tailwind 설정
└── types/        # TypeScript 인터페이스 정의 (Notion Block 타입 등)
```
