'use client';

import { useState } from 'react';

import { studyBoardData, StudyBoardItem } from '../../lib/study';

import DetailPageLayout from '../../components/layout/DetailPageLayout';
import Board from '../../components/board/Board';
import CommonModal from '../../components/common/Modal/Modal';

import styles from './style.module.css';

export default function StudyPage() {

    const [selectedItem, setSelectedItem] =
        useState<StudyBoardItem | null>(null);

    const [isOpen, setIsOpen] = useState(false);

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
                description="5/24 정보처리기사 시험 준비방입니다."
            >
                <Board
                    columns={[
                        {
                            key: 'title',
                            label: '제목',
                            width: '60%',
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
                    data={studyBoardData.map((item) => ({
                        ...item,
                        createdAt: formatDate(item.createdAt),
                    }))}
                    onRowClick={(row) =>
                        handleRowClick(
                            row as StudyBoardItem
                        )
                    }
                />
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