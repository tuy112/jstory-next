'use client';

import styles from './Board.module.css';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function BoardSearch({
    value,
    onChange,
}: Props) {
    return (
        <div className={styles.searchWrap}>
            <input
                type="text"
                placeholder="검색어를 입력하세요."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={styles.searchInput}
            />
        </div>
    );
}