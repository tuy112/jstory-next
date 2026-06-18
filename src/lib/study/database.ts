import { getTodayDate } from '../getTodayDate';

export const databaseData = [
    {
        title: '정규화',
        subject: '데이터베이스 구축',
        createdAt: getTodayDate(),
        content: `
정규화(Normalization)

목적 :
데이터 중복 제거
무결성 유지
이상현상 방지

1정규형 :
원자값만 저장

2정규형 :
부분 함수 종속 제거

3정규형 :
이행 함수 종속 제거
        `,
    },
];