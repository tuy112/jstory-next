import { getTodayDate } from '../getTodayDate';

export const programmingLanguageData = [
    {
        title: '자바스크립트',  
        subject: '프로그래밍 언어',
        createdAt: getTodayDate(),
        content: `
자바스크립트(JavaScript)    
- 웹 개발의 핵심 언어
- 동적 타이핑
- 객체 기반 
- 이벤트 기반 프로그래밍
- 다양한 프레임워크와 라이브러리 존재 (React, Angular, Vue 등)
        `,
    },
    {
        title: '파이썬',
        subject: '프로그래밍 언어',
        createdAt: getTodayDate(), 
        content: `
파이썬(Python)    
- 간결하고 읽기 쉬운 문법
- 다양한 용도 (웹 개발, 데이터 과학, 인공지능 등)
- 풍부한 라이브러리와 프레임워크 (Django, Flask, TensorFlow 등)
        `,
    },
    {
        title: '자바',
        subject: '프로그래밍 언어',
        createdAt: getTodayDate(), 
        content: `
자바(Java)
- 객체 지향 프로그래밍 언어
- 플랫폼 독립적 (JVM 사용)
- 대규모 애플리케이션 개발에 적합
- 풍부한 라이브러리와 프레임워크 (Spring, Hibernate 등)
        `,
    },
];  