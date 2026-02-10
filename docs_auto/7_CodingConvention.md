# 7. Coding Convention & AI Collaboration Guide

## 0. MVP 캡슐
(1_PRD.md와 동일, 상단 참조)

## 1. AI 협업 대원칙
1. **Don't Trust, Verify**: AI가 작성한 코드는 반드시 실행하고 눈으로 확인한다.
2. **Context First**: 명령을 내릴 때 "파일 하나만 수정해"라고 하지 않고, "이 파일은 저 파일과 연결되어 있어"라고 **관계를 먼저 설명**한다.
3. **Keep it Simple**: 복잡한 로직보다는 읽기 쉬운 코드가 우선이다. (유지보수를 위해)

## 2. Coding Conventions

### 2.1. Naming
- **Variables/Functions**: `camelCase` (e.g., `fetchProjects`, `isOpen`)
- **Components**: `PascalCase` (e.g., `ContextCard`, `ProjectList`)
- **Files**:
  - Components: `PascalCase.tsx` (e.g., `Navbar.tsx`)
  - Utilities: `camelCase.ts` (e.g., `notionClient.ts`)
  - constants: `UPPER_SNAKE_CASE` (e.g., `DEFAULT_LANG`)

### 2.2. TypeScript
- **Any 금지**: 가능한 한 구체적인 타입을 명시한다. Notion API 응답처럼 복잡한 경우 별도 `interface`로 정의한다.
- **Interface 접두사 금지**: `IProps` 대신 `Props` 또는 `ButtonProps` 사용.

### 2.3. Project Structure
- **Components**: `components/domain/ComponentName` 형태로 도메인별 응집도를 높인다.
- **Imports**: 절대 경로(`@/components/...`) 사용을 권장한다.

### 2.4. CSS (Tailwind)
- **Utility First**: `.css` 파일을 만들지 않고 Tailwind 클래스로 해결한다.
- **Ordering**: 레이아웃(display, position) -> 박스모델(margin, padding) -> 타이포그래피 -> 장식(color, border) 순서로 쓴다. (플러그인 사용 권장)

## 3. Security Checklist
- [ ] `.env` 파일이 `.gitignore`에 포함되었는가?
- [ ] Notion API Key가 클라이언트 사이드 코드에 하드코딩되지 않았는가?
- [ ] `dangerouslySetInnerHTML` 사용 시 Notion 컨텐츠 외의 입력을 차단했는가?

## 4. Debugging & Feedback Loop
- 오류 발생 시: 에러 로그 전체를 붙여넣고 "어떤 상황에서 이 에러가 났는지" 설명한다.
- 디자인 수정 시: "좀 더 예쁘게" (X) -> "버튼의 여백을 2배로(px) 늘리고 색상을 `#CCFF00`으로 변경해" (O)
