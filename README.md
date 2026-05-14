# 📘 Jstory Project

**AS-IS GitHub Repository**  
🔗 https://github.com/tuy112/Jstory
🔗 https://github.com/tuy112/jstory-transformation-front

**AS-IS 배포 페이지**
🔗 https://tuy112.github.io

**TOBE 배포 페이지**
🔗 (현재 미 배포 상태)

최신 업데이트 날짜: 
최신 릴리즈 버전: 
예정 출시 버전: 

---

## Jstory 디렉토리 구조
```
📦app
 ┣ 📂home
 ┃ ┣ 📜Home.module.css
 ┃ ┗ 📜page.tsx
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📂common
 ┃ ┃ ┃ ┣ 📂CommonBtn
 ┃ ┃ ┃ ┃ ┣ 📜CommonBtn.module.css
 ┃ ┃ ┃ ┃ ┗ 📜CommonBtn.tsx
 ┃ ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┃ ┣ 📜Footer.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┃ ┣ 📜Header.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Header.tsx
 ┃ ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┃ ┣ 📜Loading.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┃ ┣ 📜Modal.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┃ ┃ ┗ 📂Stars
 ┃ ┃ ┃ ┃ ┣ 📜Stars.module.css
 ┃ ┃ ┃ ┃ ┗ 📜Stars.tsx
 ┃ ┣ 📂feature
 ┃ ┃ ┗ 📂Gate
 ┃ ┃ ┃ ┣ 📜Gate.module.css
 ┃ ┃ ┃ ┗ 📜Gate.tsx
 ┃ ┗ 📂styles
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┣ 📜reset.css
 ┃ ┃ ┣ 📜tokens.css
 ┃ ┃ ┗ 📜utilities.css
 ┣ 📜favicon.ico
 ┣ 📜layout.tsx
 ┗ 📜page.tsx
```

### 디렉토리 세부 설명
app        → URL 페이지 담당
features   → 실제 화면 컴포넌트
components → 공통/재사용 컴포넌트
styles     → 전역 CSS, 변수, reset, utility
public     → 이미지

### css 구성
globals.css     → reset.css + tokens.css + utilities.css import만 담당
tokens.css      → 색상, 폰트, z-index, shadow, radius 등 공통 변수
reset.css       → 태그 초기화
utilities.css   → hide, line, goTop 같은 공통 유틸
*.module.css    → Header, Footer, Gate 등 컴포넌트별 스타일

---

## Tools

![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![react](	https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![css](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![spring](https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![mysql](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
