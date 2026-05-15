export * from './types/StudyBoardItem';
import { softwareDesignData } from './softwareDesign';
import { softwareDevelopmentData } from './softwareDevelopment';

export const studyBoardData = [
    ...softwareDesignData,
    ...softwareDevelopmentData,
];