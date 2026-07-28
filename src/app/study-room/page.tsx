'use client';

import { useState, useMemo } from 'react';
import { studyBoardData, StudyBoardItem } from '../../lib/study';
import DetailPageLayout from '../../components/layout/DetailPageLayout';
import Board from '../../components/board/Board';
import CommonModal from '../../components/common/Modal/Modal';
import styles from './style.module.css';

const PAGE_SIZE = 10;

export default function StudyPage() {

    const [selectedItem, setSelectedItem] =
        useState<StudyBoardItem | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    // 탭 분리
    const subjects = useMemo(() => {
        return Array.from(
            new Set(studyBoardData.map((item) => item.subject))
        );
    }, []);

    const [activeSubject, setActiveSubject] =
        useState(subjects[0]);

    const filteredData = useMemo(() => {
        return studyBoardData.filter(
            (item) => item.subject === activeSubject
        );
    }, [activeSubject]);

    // 페이지 처리
    const [page, setPage] = useState(1);
    const totalPages = Math.max(
        Math.ceil(filteredData.length / PAGE_SIZE), 1
    );
    const pagedData = filteredData.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    // 탭 클릭 이벤트
    const handleTabClick = (subject: string) => {
        setActiveSubject(subject);
        setPage(1);
    };

    // 행 클릭 이벤트
    const handleRowClick = (
        item: StudyBoardItem
    ) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    const formatDate = (date: string) => {
        const [year, month, day] = date.split('-');

        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    return (
        <>
            <DetailPageLayout
                title="(임시) 정보처리기사 공부방"
                description="8/15 정보처리기사 시험 준비방입니다."
            >
                {/* 탭 분리 */}
                <div className={styles.tabs}>
                    {subjects.map((subject, index) => (
                        <button
                            key={subject}
                            className={`${styles.tabButton} ${
                                activeSubject === subject ? styles.tabButtonActive : ''
                            }`}
                            onClick={() => handleTabClick(subject)}
                        >
                            {`${index + 1}과목`}
                        </button>
                    ))}
                </div>

                <Board
                    columns={[
                        {
                            key: 'title',
                            label: '제목',
                            width: '38%',
                        },
                        {
                            key: 'subject',
                            label: '과목',
                            width: '20%',
                            align: 'center',
                        },
                        {
                            key: 'createdAt',
                            label: '등록일',
                            width: '20%',
                            align: 'center',
                        },
                    ]}
                    data={pagedData.map((item) => ({
                        ...item,
                        createdAt: formatDate(item.createdAt),
                    }))}
                    onRowClick={(row) =>
                        handleRowClick(
                            row as StudyBoardItem
                        )
                    }
                />

                {/* 페이지네이션 */}
                <div className={styles.pagination}>
                    <button
                        className={styles.pageButton}
                        onClick={() => setPage((p) => Math.max(p - 1, 1))}
                        disabled={page === 1}
                    >
                        이전
                    </button>

                    <span className={styles.pageInfo}>
                        {page} / {totalPages}
                    </span>

                    <button
                        className={styles.pageButton}
                        onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                        disabled={page === totalPages}
                    >
                        다음
                    </button>
                </div>
            </DetailPageLayout>

            <CommonModal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                title={selectedItem?.title}
                className={styles.studyModal}
            >
                {selectedItem && (
                    <div className={styles.modalContent}>
                        <div className={styles.modalInfo}>
                            <span>ID : {selectedItem.id},</span>
                            <span>과목 : {selectedItem.subject},</span>
                            <span>작성일 : {selectedItem.createdAt}</span>
                        </div>

                        <div className={styles.modalBody}>
                            {selectedItem.content}
                        </div>

                        <div className={styles.modalFooter}>
                            <button
                                className={styles.editButton}
                                onClick={() => {
                                    alert('수정 기능 준비중');
                                }}
                            >
                                수정
                            </button>
                        </div>
                    </div>
                )}
            </CommonModal>
        </>
    );
}