'use client';

import { useState } from 'react';

import styles from './Study.module.css';

import DetailPageLayout from '../src/components/layout/DetailPageLayout';

import Board from '../src/components/board/Board';
import BoardToolbar from '../src/components/board/BoardToolbar';
import BoardPagination from '../src/components/board/BoardPagination';

import CommonModal from '../src/components/common/Modal/Modal';

import {
    studyBoardData,
    StudyBoardItem,
} from '../data/study';

export default function StudyPage() {

    const [search, setSearch] = useState('');

    // 상세 모달
    const [selectedItem, setSelectedItem] =
        useState<StudyBoardItem | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    // 검색
    const filteredData = studyBoardData.filter((item) =>
        item.title
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // 게시글 클릭
    const handleRowClick = (
        item: StudyBoardItem
    ) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    // 페이지 처리
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 7;

    const totalPage = Math.ceil(
        filteredData.length / pageSize
    );

    const pagedData = filteredData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    // 날짜 포맷
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
                <BoardToolbar
                    title="공부 게시판"
                    search={search}
                    onChangeSearch={setSearch}
                    onClickDelete={() => {
                        alert('삭제 기능 미구현');
                    }}
                    onClickWrite={() => {
                        alert('글쓰기 기능 미구현');
                    }}
                />

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

                <div className={styles.paginationWrap}>
                    <BoardPagination
                        currentPage={currentPage}
                        totalPage={totalPage}
                        onChangePage={(page) => {
                            setCurrentPage(page);
                        }}
                    />
                </div>
            </DetailPageLayout>

            {/* 모달 */}
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
                            <span>과목 :{selectedItem.subject},</span>
                            <span>작성일 :{selectedItem.createdAt}</span>
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