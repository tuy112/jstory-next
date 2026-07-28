import { getTodayDate } from '../getTodayDate';

export const programmingLanguageData = [
    {
        title: 'TCP/IP',  
        subject: '프로그래밍 언어',
        createdAt: getTodayDate(),
        content: `
TCP/IP : 인터넷에 연결된 서로 다른 기종의 컴퓨터들이 데이터를 주고받을 수 있도록
하는 표준 프로토콜
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