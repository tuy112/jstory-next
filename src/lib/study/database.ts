// 정보처리기사
// 3과목 : 데이터베이스 구축
import { StudyBoardItem } from './types/StudyBoardItem';
import { getTodayDate } from '../getTodayDate';

export const databaseData: StudyBoardItem[] = [
    {
        id: 1,
        title: 'SQL DDL',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
데이터 정의어(Data Definition Language)
CREATE / ALTER / DROP
스키마, 도메인, 테이블, 뷰, 인덱스를 정의
        `,
    },

    {
        id: 2,
        title: 'SQL DML',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
데이터 조작어(Data Manipulation Language)
SELECT / INSERT / UPDATE / DELETE
WHERE, GROUP BY, HAVING, ORDER BY 절 조합이 실기 작성형 단골
        `,
    },

    {
        id: 3,
        title: 'SQL DCL / TCL',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
DCL(데이터 제어어) : GRANT(권한 부여) / REVOKE(권한 회수)
TCL(트랜잭션 제어어) : COMMIT / ROLLBACK / SAVEPOINT
        `,
    },

    {
        id: 4,
        title: 'JOIN 종류',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
INNER JOIN : 양쪽 모두 일치하는 데이터
OUTER JOIN : LEFT/RIGHT/FULL, 일치 안 해도 한쪽 기준 포함
CROSS JOIN : 모든 조합(카티션 곱)
SELF JOIN : 같은 테이블끼리 조인
        `,
    },

    {
        id: 5,
        title: '서브쿼리 / 집합 연산자',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
UNION(합집합, 중복제거) / UNION ALL(중복포함)
INTERSECT(교집합) / EXCEPT(MINUS, 차집합)
IN, EXISTS로 서브쿼리 결과와 비교
        `,
    },

    {
        id: 6,
        title: '집계 함수 / 윈도우 함수',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
COUNT, SUM, AVG, MIN, MAX
ROLLUP / CUBE : 소계·총계 자동 집계
OVER() : 그룹별 순위/누적 등 윈도우 함수
        `,
    },

    {
        id: 7,
        title: '정규화(Normalization)',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
1NF : 원자값만 허용
2NF : 부분 함수 종속 제거
3NF : 이행 함수 종속 제거
BCNF : 결정자가 후보키가 아닌 함수 종속 제거

"1234 BCNF" 순서로 강해짐
        `,
    },

    {
        id: 8,
        title: '이상현상(Anomaly)',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
삽입 이상 : 불필요한 데이터까지 같이 넣어야 함
삭제 이상 : 삭제 시 필요한 데이터까지 같이 사라짐
갱신 이상 : 중복 데이터 중 일부만 수정되어 불일치 발생

"삽삭갱" - 정규화로 해결
        `,
    },

    {
        id: 9,
        title: '반정규화(Denormalization)',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
조회 성능 향상을 위해 중복을 허용
테이블 통합, 테이블 분리, 중복 컬럼 추가 등의 방법
정규화와 트레이드오프 관계
        `,
    },

    {
        id: 10,
        title: '트랜잭션 ACID',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
원자성(Atomicity) : 전부 실행 또는 전부 취소
일관성(Consistency) : 실행 전후 데이터 일관성 유지
격리성(Isolation) : 동시 실행 트랜잭션 간 독립성
영속성(Durability) : 완료된 결과는 영구 반영

"원일격영" 실기 약술형 단골
        `,
    },

    {
        id: 11,
        title: '트랜잭션 상태',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
활성(Active) → 부분완료(Partially Committed) → 완료(Committed)
                              ↘ 실패(Failed) → 철회(Aborted)
        `,
    },

    {
        id: 12,
        title: '키(Key) 종류',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
슈퍼키 : 유일성만 만족
후보키 : 유일성 + 최소성 만족
기본키 : 후보키 중 선택된 대표 키
대체키 : 기본키로 선택되지 않은 후보키
외래키 : 다른 테이블의 기본키를 참조하는 키
        `,
    },

    {
        id: 13,
        title: '무결성 제약조건',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
개체 무결성 : 기본키는 NULL/중복 불가
참조 무결성 : 외래키는 참조 테이블에 존재하는 값이거나 NULL
도메인 무결성 : 속성값은 정의된 도메인 범위 안이어야 함
        `,
    },

    {
        id: 14,
        title: '스키마 3단계 구조',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
외부 스키마 : 사용자/응용프로그램 관점
개념 스키마 : 조직 전체 관점(전체 하나만 존재)
내부 스키마 : 저장 장치 관점(물리적 구조)

논리적 독립성(외부-개념) / 물리적 독립성(개념-내부)
        `,
    },

    {
        id: 15,
        title: '관계대수',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
Select(σ) : 조건에 맞는 행 선택
Project(π) : 원하는 열만 선택
Join(⋈) : 두 릴레이션 결합
Division(÷) : 나눗셈 연산, 실기 고난도 문제로 출제된 적 있음
        `,
    },

    {
        id: 16,
        title: 'DBMS 기능',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
정의 기능 : 스키마 정의
조작 기능 : 데이터 삽입/삭제/수정/검색
제어 기능 : 무결성, 보안, 병행제어

"정조제" 매 회차 고정 출제
        `,
    },

    {
        id: 17,
        title: '인덱스(Index)',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
검색 속도 향상을 위한 자료구조
B-트리 인덱스, 해시 인덱스
클러스터드(물리적 정렬) vs 논클러스터드 인덱스
        `,
    },

    {
        id: 18,
        title: '뷰(View)',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
하나 이상의 테이블에서 유도된 가상 테이블
장점 : 보안, 편의성 / 단점 : 갱신 제약, 인덱스 사용 불가
        `,
    },

    {
        id: 19,
        title: 'ERD / 데이터 모델링',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
개체(Entity), 속성(Attribute), 관계(Relationship)
카디널리티(1:1, 1:N, N:M) 및 참여도 표현
실기에서 그림 보고 관계 해석하는 문제 출제
        `,
    },

    {
        id: 20,
        title: '병행제어(Concurrency Control)',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
로킹(Locking) : 공유 락 / 배타 락
2단계 로킹(2PL) : 확장 단계(락 획득) → 축소 단계(락 해제)
교착상태(Deadlock), 타임스탬프 기법
        `,
    },

    {
        id: 21,
        title: '회복 기법(Recovery)',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
로그 기반 회복 : 즉시 갱신 / 지연 갱신
검사점(Checkpoint) : 회복 시간 단축을 위한 중간 기록
REDO(재실행) / UNDO(취소)
        `,
    },

    {
        id: 22,
        title: '절차형 SQL',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
프로시저(Procedure) : 특정 작업 수행, 반환값 없음(OUT 파라미터로 가능)
사용자 정의 함수(Function) : 반환값 필수
트리거(Trigger) : 이벤트(INSERT/UPDATE/DELETE) 발생 시 자동 실행
        `,
    },
];