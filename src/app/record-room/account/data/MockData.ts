// 임시 데이터 처리 (DB 구축 전까지)
import { MonthData } from './types';
 
import { DATA_2026_06 } from './months/2026-06';
import { DATA_2026_07 } from './months/2026-07';
import { DATA_2026_08 } from './months/2026-08';
 
export const MOCK_DATA: Record<string, MonthData> = {
  '2026-06': DATA_2026_06,
  '2026-07': DATA_2026_07,
  '2026-08': DATA_2026_08,
};