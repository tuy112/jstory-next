## Jstory 3rd Upgrade Project

#### AS-IS GitHub Repository

🔗 https://github.com/tuy112/Jstory<br />
🔗 https://github.com/tuy112/jstory-transformation-front


## AS-IS 배포 페이지

🔗 https://tuy112.github.io

## TO-BE 배포 페이지

🔗 jstory-next.vercel.app


## Jstory 디렉토리 구조
```
src
 ┣ app
 ┃ ┣ coding-club
 ┃ ┃ ┣ page.tsx
 ┃ ┃ ┗ style.module.css
 ┃ ┣ home
 ┃ ┃ ┣ page.tsx
 ┃ ┃ ┗ style.module.css
 ┃ ┣ profile
 ┃ ┃ ┣ page.tsx
 ┃ ┃ ┗ style.module.css
 ┃ ┣ project
 ┃ ┃ ┣ page.tsx
 ┃ ┃ ┗ style.module.css
 ┃ ┣ study-room
 ┃ ┃ ┣ page.tsx
 ┃ ┃ ┗ style.module.css
 ┃ ┣ favicon.ico
 ┃ ┣ globals.css
 ┃ ┣ layout.tsx
 ┃ ┣ page.module.css
 ┃ ┗ page.tsx
 ┣ components
 ┃ ┣ board
 ┃ ┃ ┣ Board.tsx
 ┃ ┃ ┣ style.module.css
 ┃ ┃ ┗ types.ts
 ┃ ┣ common
 ┃ ┃ ┣ Footer
 ┃ ┃ ┃ ┣ Footer.module.css
 ┃ ┃ ┃ ┗ Footer.tsx
 ┃ ┃ ┣ Header
 ┃ ┃ ┃ ┣ Header.module.css
 ┃ ┃ ┃ ┗ Header.tsx
 ┃ ┃ ┣ Loading
 ┃ ┃ ┃ ┣ Loading.module.css
 ┃ ┃ ┃ ┗ Loading.tsx
 ┃ ┃ ┣ Modal
 ┃ ┃ ┃ ┣ Modal.module.css
 ┃ ┃ ┃ ┗ Modal.tsx
 ┃ ┃ ┗ Stars
 ┃ ┃ ┃ ┣ Stars.module.css
 ┃ ┃ ┃ ┗ Stars.tsx
 ┃ ┗ layout
 ┃ ┃ ┣ DetailPageLayout.tsx
 ┃ ┃ ┗ style.module.css
 ┣ hooks
 ┗ lib
 ┃ ┣ knowledge
 ┃ ┃ ┣ types
 ┃ ┃ ┃ ┗ knowledgeItem.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┗ posts.ts
 ┃ ┣ study
 ┃ ┃ ┣ types
 ┃ ┃ ┃ ┗ StudyBoardItem.ts
 ┃ ┃ ┣ database.ts
 ┃ ┃ ┣ index.ts
 ┃ ┃ ┣ informationSystem.ts
 ┃ ┃ ┣ programmingLanguage.ts
 ┃ ┃ ┣ softwareDesign.ts
 ┃ ┃ ┗ softwareDevelopment.ts
 ┃ ┗ getTodayDate.ts
```

## 디렉토리 세부 설명

- `app`<br />
  → 페이지 라우팅 (URL 단위 페이지, 각 페이지별 스타일)

- `components`<br />
  → 공통 / 재사용 컴포넌트
  - `board` : 게시판형 UI 컴포넌트
  - `common` : Header, Footer, Modal, Loading 등 전역 공통 컴포넌트
  - `layout` : 상세 페이지 등 레이아웃 컴포넌트

- `hooks`<br />
  → 커스텀 훅

- `lib`<br />
  → 데이터 및 타입 관리
  - `knowledge`, `study` 등 도메인별 데이터(mock data)와 타입 정의
  - 공통 유틸 함수 (예: `getTodayDate.ts`)

---

## CSS 구성

- `globals.css`<br />
  → 태그 초기화(reset) + 색상, 폰트, z-index, shadow, radius 등 공통 변수(tokens) + hide, line, goTop 등 공통 유틸리티 클래스를 한 파일에서 관리

- `*.module.css`<br />
  → Header, Footer, Modal, Loading, Stars 등 컴포넌트별 스타일 관리<br />
  → 각 페이지(`app` 하위)별 `style.module.css`로 페이지 전용 스타일 관리


---

## 🛠 Tools 



![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![next](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?style=for-the-badge&logo=css3&logoColor=white)
![java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)
