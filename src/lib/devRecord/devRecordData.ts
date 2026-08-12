import { DevRecord } from '@/lib/data/types/devRecord';

export const devRecordData: DevRecord[] = [
      {
            id: '1',
            date: '2026-08-12',
            category: 'Next.js',
            page: 'record-page',
            title: '개발일지 페이지 추가',
            content: '개발일지 테이블 UI 및 mock data 구조 작업',
            tags: ['Next.js', 'TypeScript'],
      },
      {
            id: '2',
            date: '2026-08-12',
            category: 'Next.js',
            page: 'jstory - 메인',
            title: '구조 수정 작업 및 디테일링',
            content: 'profile + project 버튼 삭제 / 개발일지 페이지 미리보기가 Jstory 메인에 보이도록 수정 작업',
            tags: ['Next.js', 'TypeScript'],
      },
      {
            id: '3',
            date: '2026-08-12',
            category: 'Server',
            page: '전체 프로젝트',
            title: '나만의 서버만들기',
            content: 'Jstory 및 Jstory 부속 프로젝트 데이터 관리를 위한 서버 구축하기[1]',
            tags: ['Next.js', 'TypeScript'],
      },
];