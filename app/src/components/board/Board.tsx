'use client';

import styles from './Board.module.css';

import { BoardProps } from './types';

export default function Board({
    columns,
    data,
    onRowClick,
}: BoardProps) {

    return (
        <div className={styles.boardWrap}>
            <table className={styles.boardTable}>
                <thead>
                    <tr>
                        <th className={styles.checkboxColumn}>
                            <input type="checkbox" />
                        </th>

                        <th
                            className={styles.numberColumn}
                        >
                            번호
                        </th>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                style={{
                                    width: column.width,
                                    textAlign: column.align || 'left',
                                }}
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.length > 0 ? (
                        data.map((row, index) => (
                            <tr
                                key={index}
                                onClick={() => onRowClick?.(row)}
                            >
                                {/* 체크박스 */}
                                <td
                                    className={
                                        styles.checkboxColumn
                                    }
                                    onClick={(e) =>
                                        e.stopPropagation()
                                    }
                                >
                                    <input
                                        type="checkbox"
                                    />
                                </td>

                                {/* 번호 */}
                                <td
                                    className={
                                        styles.numberColumn
                                    }
                                >
                                    {row.id}
                                </td>

                                {/* 데이터 */}
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        style={{
                                            textAlign:
                                                column.align || 'left',
                                        }}
                                    >
                                        {row[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={columns.length}
                                className={styles.empty}
                            >
                                게시글이 없습니다.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}