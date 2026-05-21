// 정보처리기사
// 2과목 : 소프트웨어 개발
import { StudyBoardItem } from './types/StudyBoardItem';
import { getTodayDate } from '../utils/getTodayDate';

export const softwareDevelopmentData: StudyBoardItem[] = [
    {
        title: '자료 구조 개념',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
자료구조 기본 개념입니다.
        `,
    },

    {
        title: '스택(Stack)',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
스택 자료구조 설명입니다.
        `,
    },

    {
        title: '큐(Queue)',
        subject: '소프트웨어 개발',
        createdAt: getTodayDate(),
        content: `
큐 자료구조 설명입니다.
        `,
    },
];