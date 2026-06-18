export * from './types/StudyBoardItem';

import { StudyBoardItem } from './types/StudyBoardItem';

import { softwareDesignData } from './softwareDesign';
// import { softwareDevelopmentData } from './softwareDevelopment';
import { databaseData } from './database';
import { programmingLanguageData } from './programmingLanguage';

type StudyBoardWithoutId =
    Omit<StudyBoardItem, 'id'>;

const rawStudyBoardData: StudyBoardWithoutId[] = [
    ...softwareDesignData,
    // ...softwareDevelopmentData,
    ...databaseData,
    ...programmingLanguageData,
];

export const studyBoardData: StudyBoardItem[] =
    rawStudyBoardData.map((item, index) => ({
        id: index + 1,
        ...item,
    }));