// 정보처리기사
// 2과목 : 소프트웨어 개발
import { StudyBoardItem } from './types/StudyBoardItem';

const getTodayDate = () => {
    return new Intl.DateTimeFormat('ko-KR')
        .format(new Date())
        .replace(/\./g, '-')
        .replace(/\s/g, '')
        .slice(0, -1);
};

export const softwareDevelopmentData: StudyBoardItem[] = [
    {
        id: 101,
        title: '자료 구조 개념',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
자료구조 기본 개념입니다.
        `,
    },

    {
        id: 102,
        title: '스택(Stack)',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
스택 자료구조 설명입니다.
        `,
    },

    {
        id: 103,
        title: '큐(Queue)',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
큐 자료구조 설명입니다.
        `,
    },
];