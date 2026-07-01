import { useState, useEffect } from 'react';

import { EntryType, MONTHS, TYPE_LABELS, CARD_LABELS, fmt } from './data/types';
import { MOCK_DATA } from './data/MockData'
// import AddEntryModal from './AddEntryModal';
// import EditAssetModal from './EditAssetModal';

import styles from './style.module.css';

export default function AccountSection() {
    const now = new Date();
    const [year, setYear]   = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth()); // 0 - indexed
  
    const key = `${year}-${String(month + 1).padStart(2, '0')}`;
    const current = MOCK_DATA[key] ?? null;
  
    const prevMonth = () => {
      if (month === 0) { setYear(y => y - 1); setMonth(11); }
      else setMonth(m => m - 1);
    };
    const nextMonth = () => {
      if (month === 11) { setYear(y => y + 1); setMonth(0); }
      else setMonth(m => m + 1);
    };
 
    // 집계
    const income  = current?.entries.filter(e => e.type === 'income').reduce((s, e)  => s + e.amount, 0) ?? 0;
    const fixed   = current?.entries.filter(e => e.type === 'fixed').reduce((s, e)   => s + e.amount, 0) ?? 0;
    const saving = current?.entries.filter(e => e.type === 'saving').reduce((s, e) => s + e.amount, 0) ?? 0;
    const creditExpense  = current?.dailyExpenses.filter(e => e.cardType === 'credit').reduce((s, e) => s + e.amount, 0) ?? 0;
    const cashExpense   = current?.dailyExpenses.filter(e => e.cardType === 'cash').reduce((s, e)  => s + e.amount, 0) ?? 0;
    
    const totalExpense  = creditExpense + cashExpense;
    const balance =  income - (fixed + saving + creditExpense + cashExpense);

    // 일별 지출 날짜순 그룹화
    const groupedDaily = current?.dailyExpenses.reduce<Record<string, typeof current.dailyExpenses>>((acc, e) => {
      acc[e.date] = [...(acc[e.date] ?? []), e];
      return acc;
    }, {}) ?? {};
    const sortedDates = Object.keys(groupedDaily).sort();

    // 지출 부분 접기/펼치기 
    const [collapsedDates, setCollapsedDates] = useState<Set<string>>(new Set());

    const toggleDate = (date: string) => {
      setCollapsedDates(prev => {
        const next = new Set(prev);
        next.has(date) ? next.delete(date) : next.add(date);
        return next;
      });
    };

    useEffect(() => {
      setCollapsedDates(new Set(sortedDates));
    }, []);
 
    return (
      <section className={styles.section}>
        {/* 월 네비게이션 */}
        <div className={styles.monthNav}>
          <button className={styles.navArrow} onClick={prevMonth}>‹</button>
          <span className={styles.monthLabel}>{MONTHS[month]}</span>
          <button className={styles.navArrow} onClick={nextMonth}>›</button>
        </div>
  
        {current === null ? (
          <div className={styles.empty}>이 달의 데이터가 없습니다.</div>
        ) : (
          <>
            {/* 총재산 카드 */}
            <div className={styles.assetCard}>
              <span className={styles.assetLabel}>총재산</span>
              <span className={styles.assetValue}>{fmt(current.totalAsset)}</span>
            </div>
  
            {/* 요약 5칸 */}
            <div className={styles.summaryRow_2}>
              <div className={`${styles.summaryCard} ${styles.income}`}>
                <span className={styles.summaryLabel}>수입</span>
                <span className={styles.summaryValue}>+{fmt(income)}</span>
              </div>
              <div className={`${styles.summaryCard} ${styles.saving}`}>
                <span className={styles.summaryLabel}>저축</span>
                <span className={styles.summaryValue}>{fmt(saving)}</span>
              </div>
            </div>

            <div className={styles.summaryRow_3}>
              <div className={`${styles.summaryCard} ${styles.fixed}`}>
                <span className={styles.summaryLabel}>고정지출</span>
                <span className={styles.summaryValue}>-{fmt(fixed)}</span>
              </div>
              <div className={`${styles.summaryCard} ${styles.credit}`}>
                <span className={styles.summaryLabel}>총 지출</span>
                <span className={styles.summaryValue}>-{fmt(totalExpense)}</span>
              </div>
              <div className={`${styles.summaryCard} ${styles.check}`}>
                <span className={styles.summaryLabel}>신용카드 지출</span>
                <span className={styles.summaryValue}>-{fmt(creditExpense)}</span>
                <span className={styles.summaryLabel}>체크카드 지출</span>
                <span className={styles.summaryValue}>-{fmt(cashExpense)}</span>
              </div>
            </div>
  
            {/* 이번 달 수지 */}
            <div className={styles.balanceRow}>
              <span className={styles.balanceLabel}>이번 달 수지 [수입 - (고정지출+지출+저축)]</span>
              <span className={`${styles.balanceValue} ${balance >= 0 ? styles.plus : styles.minus}`}>
                {balance >= 0 ? '+' : ''}{fmt(balance)}
              </span>
            </div>
  
            {/* 항목 리스트 - 수입 / 고정지출 / 저축 */}
            {(['income', 'fixed', 'saving'] as EntryType[]).map(t => {
              const items = current.entries.filter(e => e.type === t);
              if (items.length === 0) return null;
              
              return (
                <div key={t} className={styles.entryGroup}>
                  <span className={`${styles.groupHeader} ${styles[`header_${t}`]}`}>
                    {TYPE_LABELS[t]}
                  </span>
                  {items.map(item => (
                    <div key={item.id} className={styles.entryRow}>
                      <span className={styles.entryLabel}>{item.label}</span>
                      <span className={`${styles.entryAmount} ${styles[`amount_${t}`]}`}>
                        {t === 'income' ? '+' : '-'}{fmt(item.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}

            {/* 일별 지출 (신용 + 체크 통합, 카드 뱃지 표시) */}
            {sortedDates.length > 0 && (
              <div className={styles.entryGroup}>
                <span className={`${styles.groupHeader} ${styles.header_expense}`}>지출</span>
                
                {sortedDates.map(date => {
                  const isCollapsed = collapsedDates.has(date);
                  return (
                    <div key={date}>
                      <div
                        className={styles.dateRow}
                        onClick={() => toggleDate(date)}
                        style={{ cursor: 'pointer', userSelect: 'none' }}
                      >
                        {date.slice(5).replace('-', '/')}
                        <span style={{ marginLeft: 6, fontSize: '0.75rem', color: '#888' }}>
                          {isCollapsed ? '▶' : '▼'}
                        </span>
                      </div>
                      {!isCollapsed && groupedDaily[date].map((item, i) => (
                        <div key={i} className={styles.entryRow}>
                          <span className={styles.entryLabel}>{item.label}</span>
                          <span className={`${styles.cardBadge} ${styles[`badge_${item.cardType}`]}`}>
                            {CARD_LABELS[item.cardType]}
                          </span>
                          <span className={`${styles.entryAmount} ${styles.amount_expense}`}>
                            -{fmt(item.amount)}
                          </span>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </section>
    );
}