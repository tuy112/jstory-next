'use client';

import styles from './Board.module.css';

interface Props {
    currentPage: number;
    totalPage: number;
    onChangePage: (page: number) => void;
}

export default function BoardPagination({
    currentPage,
    totalPage,
    onChangePage,
}: Props) {

    const handlePrev = () => {
        if (currentPage <= 1) {
            return;
        }

        onChangePage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage >= totalPage) {
            return;
        }

        onChangePage(currentPage + 1);
    };

    if (totalPage <= 1) {
        return null;
    }

    return (
        <div className={styles.pagination}>
            <button
                className={styles.pageButton}
                onClick={handlePrev}
                disabled={currentPage === 1}
            >
                이전
            </button>

            {Array.from(
                { length: totalPage },
                (_, index) => {
                    const page = index + 1;

                    return (
                        <button
                            key={page}
                            className={
                                currentPage === page
                                    ? styles.activePage
                                    : styles.pageButton
                            }
                            onClick={() => onChangePage(page)}
                        >
                            {page}
                        </button>
                    );
                }
            )}

            <button
                className={styles.pageButton}
                onClick={handleNext}
                disabled={currentPage === totalPage}
            >
                다음
            </button>
        </div>
    );
}