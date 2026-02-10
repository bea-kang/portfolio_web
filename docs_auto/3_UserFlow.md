# 3. User Flow (사용자 흐름도)

## 0. MVP 캡슐
(1_PRD.md와 동일, 상단 참조)

## 1. Main Navigation Flow
방문자가 사이트에 접속하여 정보를 탐색하는 기본 흐름입니다.

```mermaid
graph TD
    Start((접속)) --> Intro[Hero 섹션: 이름/직무/한줄소개]
    
    Intro --> Lang{언어 선택}
    Lang -->|KR/EN/CN| ContentUpdate[해당 언어로 콘텐츠 표시]
    
    ContentUpdate --> Nav[네비게이션 메뉴]
    
    Nav --> About[About Me: 스토리/브랜드]
    Nav --> Projects[Projects: 핵심 경력]
    Nav --> Skills[Skills: 시각화된 역량]
    Nav --> Contact[Contact: 이메일/링크]
    
    Projects --> ProjList[프로젝트 리스트 스캔]
    ProjList -->|Click| ProjDetail[프로젝트 상세 (Notion Page View)]
    
    ProjDetail --> Context[맥락 카드 확인]
    ProjDetail --> Problem[문제/해결 읽기]
    ProjDetail --> Back[목록으로 복귀]
    
    Contact --> CopyEmail[이메일 복사]
    Contact --> ClickLink[LinkedIn/Github 이동]
    
    CopyEmail --> Exit((이탈/연락))
    ClickLink --> Exit
```

## 2. Content Management Flow (Admin)
베아님이 내용을 수정하는 흐름입니다.

```mermaid
graph TD
    Idea[수정 사항 발생] --> NotionApp[Notion 앱 실행]
    NotionApp --> SelectDB[포트폴리오 DB 접속]
    
    SelectDB --> Edit{수정 유형}
    Edit -->|텍스트 수정| UpdateText[셀 내용 변경]
    Edit -->|프로젝트 추가| NewRow[새 행 추가 & 속성 입력]
    Edit -->|상태 변경| ChangeStatus[Status: Draft -> Published]
    
    UpdateText --> AutoSave[Notion 자동 저장]
    NewRow --> AutoSave
    ChangeStatus --> AutoSave
    
    AutoSave --> Vercel[Vercel 재배포 (또는 ISR 주기 대기)]
    Vercel --> LiveSite[웹사이트 반영 완료]
```
