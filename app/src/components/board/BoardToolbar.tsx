'use client';

import styles from './Board.module.css';

interface Props {
    title: string;
    search: string;

    onChangeSearch: (value: string) => void;
    onClickWrite?: () => void;
    onClickDelete?: () => void;
}

export default function BoardToolbar({
    title,
    search,
    onChangeSearch,
    onClickWrite,
    onClickDelete,
}: Props) {
    return (
        <div className={styles.toolbar}>
            {/* 좌 */}
            <div className={styles.toolbarLeft}>
                <h2>{title}</h2>
            </div>

            {/* 우 */}
            <div className={styles.toolbarRight}>

                <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    value={search}
                    onChange={(e) =>
                        onChangeSearch(e.target.value)
                    }
                    className={styles.searchInput}
                />

                <button
                    className={styles.deleteButton}
                    onClick={onClickDelete}
                >
                    삭제
                </button>

                <button
                    className={styles.writeButton}
                    onClick={onClickWrite}
                >
                    글쓰기
                </button>
            </div>
        </div>
    );
}