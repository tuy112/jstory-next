// 정보처리기사
// 2과목 : 소프트웨어 개발
import { StudyBoardItem } from './types/StudyBoardItem';
import { getTodayDate } from '../getTodayDate';

export const softwareDevelopmentData: StudyBoardItem[] = [
    {
        id: 1,
        title: '자료구조 - 선형/비선형 구분',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
- 선형 구조 :
배열(Array)
연결리스트(Linked List)
스택(Stack)
큐(Queue)
데크(Deque)
"배연스큐데"


- 비선형 구조 :
트리(Tree)
그래프(Graph)
"트그"
        `,
    },

    {
        id: 2,
        title: '자료구조 - 비선형 구조',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
비선형 구조 :
트리(Tree)
그래프(Graph)
"트리는 뿌리, 그래프는 그물"
        `,
    },

    {
        id: 3,
        title: '스택 / 큐',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
스택(Stack) : LIFO (후입선출)
- 함수 호출, 괄호 검사, 수식 계산

큐(Queue) : FIFO (선입선출)
- 프로세스 스케줄링, 버퍼

"스택은 접시쌓기, 큐는 줄서기"
        `,
    },

    {
        id: 4,
        title: '정렬 알고리즘',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
버블 정렬 : 인접한 두 값 비교/교환
선택 정렬 : 최소값 찾아서 앞으로
삽입 정렬 : 제자리에 삽입
퀵 정렬 : 피벗 기준 분할 (평균 O(nlogn))
병합 정렬 : 분할 후 병합 (안정적, O(nlogn))
힙 정렬 : 힙 구조 이용

"버선삽퀵병힙"
        `,
    },

    {
        id: 5,
        title: '해싱(Hashing)',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
해싱 : 키를 해시함수로 변환해 저장위치 결정

해시 충돌 해결법 :
- 체이닝(Chaining)
- 개방주소법(Open Addressing)

"충돌나면 체이닝 아니면 옆자리(개방주소)"
        `,
    },

    {
        id: 6,
        title: '소스코드 정적 분석 / 동적 분석',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
정적 분석 : 코드 실행 없이 검사 (버그, 스타일)
- 도구 : pmd, cppcheck, checkstyle, SonarQube

동적 분석 : 실제 실행하며 검사 (메모리 누수 등)
- 도구 : Valgrind, Avalanche

"정적은 안 돌리고, 동적은 돌리면서"
        `,
    },

    {
        id: 7,
        title: '테스트 기법 - 화이트박스 / 블랙박스',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
화이트박스 테스트 : 내부 로직/구조 기반
- 기초경로검사, 조건검사, 루프검사, 데이터흐름검사

블랙박스 테스트 : 입출력 기반, 내부 구조 모름
- 동치분할, 경계값분석, 원인효과그래프

"화이트는 안을 보고, 블랙은 겉만 본다"
        `,
    },

    {
        id: 8,
        title: '테스트 단계',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
단위 테스트 -> 통합 테스트 -> 시스템 테스트 -> 인수 테스트

"단통시인"
        `,
    },

    {
        id: 9,
        title: '테스트 커버리지',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
구문 커버리지(Statement) : 모든 문장 1번 이상 실행
분기 커버리지(Branch) : 모든 분기 1번 이상 실행
조건 커버리지(Condition) : 모든 조건 참/거짓 각 1번
조건/분기 커버리지 : 조건 + 분기 모두 만족

"구분조조"
        `,
    },

    {
        id: 10,
        title: '형상관리(Configuration Management)',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
형상관리 절차 :
형상식별 -> 형상통제 -> 형상감사 -> 형상기록

도구 : Git, SVN, CVS

"식통감기"
        `,
    },

    {
        id: 11,
        title: '통합구현 - 모듈 연계',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
EAI(Enterprise Application Integration) : 내부 시스템 통합
ESB(Enterprise Service Bus) : 서비스 중심 통합, 느슨한 결합

연계 방식 : DB 연계, API/Open API, 소켓 방식, 웹서비스 방식
        `,
    },

    {
        id: 12,
        title: '결합도(Coupling) / 응집도(Cohesion)',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
결합도 낮을수록 좋음 :
자료 < 스탬프 < 제어 < 외부 < 공통 < 내용

응집도 높을수록 좋음 :
우연적 < 논리적 < 시간적 < 절차적 < 통신적 < 순차적 < 기능적

"결합은 낮게, 응집은 높게"
        `,
    },

    {
        id: 13,
        title: '애플리케이션 배포',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
배포 자동화 도구 : Jenkins, Travis CI
빌드 도구 : Maven, Gradle, Ant

배포 절차 : 빌드 -> 테스트 -> 배포 -> 모니터링
        `,
    },

    {
        id: 14,
        title: '클린 코드(Clean Code) 원칙',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
가독성
단순성
의존성 배제
중복성 최소화
추상화

"가단의중추"
        `,
    },

    {
        id: 15,
        title: '인터페이스 구현 검증',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
검증 도구 : xUnit, STAF, FitNesse, NTAF, Selenium, watir

"xUnit은 단위테스트, Selenium은 웹 자동화"
        `,
    },
];