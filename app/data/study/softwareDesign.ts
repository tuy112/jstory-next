// 정보처리기사
// 1과목 : 소프트웨어 설계
// 소프트웨어 설계 / 개발 / 구축 / 프로그래밍 언어 활용 / 정보시스템 구축 관리
import { StudyBoardItem } from './types/StudyBoardItem';

const getTodayDate = () => {
    return new Intl.DateTimeFormat('ko-KR')
        .format(new Date())
        .replace(/\./g, '-')
        .replace(/\s/g, '')
        .slice(0, -1);
};

export const softwareDesignData: StudyBoardItem[] = [
    {
        id: 1,
        title: '소프트웨어 생명주기',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
소프트웨어 생명주기(SDLC)
- 폭포수 모델
요구사항 분석 > 설계 > 구현 > 테스트 > 유지보수
==========================================
그 외 모델 : 
프로토타입 모델
나선형 모델
애자일 모델
        `,
    },

    {
        id: 2,
        title: '애자일 모델 + 나선형 모델',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
애자일 모델 :
빠르게 개발
짧은 주기 반복
고객 피드백
변화 대응
"애자일 = 빨리 만들고 계속 고친다"
==========================================
나선형 모델 :
위험 분석 중요
반복 개발
대규모 프로젝트 적합
비용 큼
계획 → 위험분석 → 개발 → 평가 반복
"나선형 = 돌면서 위험 분석"
        `,
    },

    {
        id: 3,
        title: '스크럼( Scrum )',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
스크럼은 애자일 방법론 중 하나
"스크럼 = 짧게 만들고 매일 공유"
==========================================
제품 책임자(PO)
스크럼 마스터(SM)
개발팀
"PO가 요구, SM이 관리, 팀이 개발"

        `,
    },

    {
        id: 4,
        title: 'UI 설계 원칙',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
직관성
유효성
학습성
유연성
"직유학유"
        `,
    },

    {
        id: 5,
        title: '요구사항 검토 방법',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
동료검토(Peer Review) : 담담자끼리 검토
워크스루(Walkthrough) : 설명하면서 검토
인스펙션(Inspection) : 공식적으로 오류 검사
"동워인"
        `,
    },

    {
        id: 6,
        title: '현행 시스템 분석',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
현행 시스템 분석 절차입니다.
        `,
    },

    {
        id: 7,
        title: 'UML(Unified Modeling Language)',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
"UML = 객체지향 시스템을 시각적으로 표현"
목적
- 시스템 구조 표현
- 개발자 간 의사소통
- 설계 문서화
==========================================
UML 구성
- 구조 다이어그램 : 클래스,객체,컴포넌트,배치(클객컴배)
- 행위 다이어그램 : 유스케이스,시퀀스,활동,상태(유시활상)
        `,
    },

    {
        id: 8,
        title: '유스케이스 다이어그램',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
유스케이스 다이어그램 : 사용자 입장에서 기능 표현
        `,
    },

    {
        id: 9,
        title: '클래스 다이어그램',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
클래스 다이어그램 : 객체 구조와 관계 표현
        `,
    },

    {
        id: 10,
        title: '시퀀스 다이어그램',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
시퀀스 다이어그램 : 시간 순서대로 메시지 흐름
        `,
    },

    {
        id: 11,
        title: '요구사항 정의',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
요구사항 정의 내용입니다.
        `,
    },

    {
        id: 12,
        title: '요구사항 분석',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
요구사항 분석 내용입니다.
        `,
    },

    {
        id: 13,
        title: '요구사항 명세',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
요구사항 명세 정리입니다.
        `,
    },

    {
        id: 14,
        title: '인터페이스 설계',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
인터페이스 설계 정리입니다.
        `,
    },

    {
        id: 15,
        title: 'UI 설계 원칙',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
UI 설계 원칙입니다.
        `,
    },

    {
        id: 16,
        title: 'UI 표준',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
UI 표준 정리입니다.
        `,
    },

    {
        id: 17,
        title: '객체지향 설계',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
객체지향 설계 정리입니다.
        `,
    },

    {
        id: 18,
        title: '디자인 패턴',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
디자인 패턴 정리입니다.
        `,
    },

    {
        id: 19,
        title: 'MVC 패턴',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
MVC 패턴 설명입니다.
        `,
    },

    {
        id: 20,
        title: '애플리케이션 아키텍처',
        subject: '소프트웨어 설계',
        createdAt: getTodayDate(),
        content: `
애플리케이션 아키텍처 정리입니다.
        `,
    },
];