// 정보처리기사
// 5과목 : 정보시스템 구축 관리
import { StudyBoardItem } from './types/StudyBoardItem';
import { getTodayDate } from '../getTodayDate';

export const informationSystemData: StudyBoardItem[] = [
    {
        id: 1,
        title: '소프트웨어 개발 방법론',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
구조적 방법론 : 절차 중심, 순차적 개발
정보공학 방법론 : 데이터 중심, 대규모 프로젝트
객체지향 방법론 : 클래스/객체 중심
CBD(컴포넌트 기반) : 재사용 컴포넌트 조합
애자일 방법론 : 반복/점증적, 고객 협력

"구정객CBD애"
        `,
    },

    {
        id: 2,
        title: '프로젝트 개발비용 산정',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
LOC(원시 코드 라인수) 기법 : 예측 라인수로 산정
COCOMO 모델 : 유형별(조직형/반분리형/내장형) 비용 산정
기능점수(FP) 모델 : 기능 단위로 산정

"LOC는 줄 세고, COCOMO는 유형 나누고, FP는 기능 센다"
        `,
    },

    {
        id: 3,
        title: '일정 관리 - PERT / CPM',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
PERT : 소요시간 예측 (낙관/비관/최빈 3점 추정)
CPM : 임계경로(가장 긴 경로)로 최소완료시간 계산

"PERT는 예측, CPM은 경로"
        `,
    },

    {
        id: 4,
        title: '네트워크 공격 유형',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
DoS/DDoS : 서비스 거부 공격
스니핑(Sniffing) : 도청, 패킷 가로채기
스푸핑(Spoofing) : 위장, 속이기
파밍(Pharming) : DNS 조작해 가짜사이트 유도
스미싱(Smishing) : 문자메시지 이용 피싱
APT : 지능형 지속 위협

"디도스, 스니핑, 스푸핑, 파밍, 스미싱, APT"
        `,
    },

    {
        id: 5,
        title: '암호화 알고리즘',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
대칭키(비밀키) : DES, AES, SEED
- 속도 빠름, 키 관리 어려움

비대칭키(공개키) : RSA, ECC
- 속도 느림, 키 분배 안전

해시함수 : SHA-256, MD5
- 단방향, 무결성 검증

"대칭은 빠르고, 비대칭은 안전하고, 해시는 단방향"
        `,
    },

    {
        id: 6,
        title: '접근통제 모델',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
임의적 접근통제(DAC) : 소유자가 권한 부여
강제적 접근통제(MAC) : 보안등급 기반, 관리자 통제
역할기반 접근통제(RBAC) : 역할(직무)에 따라 권한 부여

"DAC는 소유자, MAC는 등급, RBAC는 역할"
        `,
    },

    {
        id: 7,
        title: '認증(Authentication) 기술',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
지식 기반 : 비밀번호
소유 기반 : OTP, 스마트카드
생체 기반 : 지문, 홍채
다중 요소 인증(MFA) : 2가지 이상 조합

"지소생 + 다중"
        `,
    },

    {
        id: 8,
        title: '클라우드 컴퓨팅',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
IaaS : 인프라(서버,스토리지) 제공
PaaS : 플랫폼(개발환경) 제공
SaaS : 소프트웨어(완제품) 제공

"I는 인프라, P는 플랫폼, S는 소프트웨어"
        `,
    },

    {
        id: 9,
        title: 'IT 신기술',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
블록체인 : 분산원장, 위변조 방지
빅데이터 : 대용량 데이터 분석
IoT : 사물인터넷
디지털 트윈 : 현실을 가상에 복제
메시 네트워크 : 노드끼리 그물망 연결
        `,
    },

    {
        id: 10,
        title: '서버 보안 - 취약점',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
SQL 삽입(Injection) : 악의적 쿼리 삽입
XSS(크로스사이트 스크립팅) : 악성 스크립트 삽입
CSRF : 사용자 의도와 무관한 요청 위조
버퍼 오버플로우 : 메모리 경계 초과 입력

"SQL, XSS, CSRF, 버퍼오버플로우"
        `,
    },

    {
        id: 11,
        title: '재해복구 시스템(DRS)',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
Mirror Site : 실시간 동일 시스템 운영 (RTO=0)
Hot Site : 즉시 전환 가능 (RTO 수시간)
Warm Site : 일부 자원만 구축 (RTO 수일)
Cold Site : 최소 자원, 복구 오래걸림 (RTO 수주)

"미러 - 핫 - 웜 - 콜드 순으로 복구 느려짐"
        `,
    },

    {
        id: 12,
        title: 'DB 이중화 / 서버 이중화',
        subject: '정보시스템 구축 관리',
        createdAt: getTodayDate(),
        content: `
클러스터링 : 여러 서버를 하나처럼 묶어 가용성 향상
로드밸런싱 : 부하를 여러 서버에 분산
장애 대응 : Active-Active, Active-Standby 구성
        `,
    },
];