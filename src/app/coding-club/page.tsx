'use client';

import { useState } from 'react';
import { knowledgePosts, KnowledgeItem } from '../../lib/knowledge';
import DetailPageLayout from '../../components/layout/DetailPageLayout';
import styles from './style.module.css';

const PAGE_SIZE = 5;

export default function KnowledgePage() {

    const [selectedPost, setSelectedPost] = useState<KnowledgeItem | null>(null);

    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(knowledgePosts.length / PAGE_SIZE);
    const pagedPosts = knowledgePosts.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE
    );

    const handleRowClick = (post: KnowledgeItem) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    // content 문자열을 간단한 규칙(## 소제목, - 목록, ``` 코드블록)으로 나눠 렌더링
    const renderContent = (content: string) => {
        return content.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
                return (
                    <h4 key={i} className={styles.contentHeading}>
                        {block.replace('## ', '')}
                    </h4>
                );
            }

            if (block.startsWith('```')) {
                return (
                    <pre key={i} className={styles.codeBlock}>
                        <code>{block.replace(/```/g, '').trim()}</code>
                    </pre>
                );
            }

            if (block.startsWith('- ') || block.match(/^\d\. /)) {
                const items = block.split('\n');
                return (
                    <ul key={i} className={styles.contentList}>
                        {items.map((item, j) => (
                            <li key={j}>{item.replace(/^(- |\d\. )/, '')}</li>
                        ))}
                    </ul>
                );
            }

            return (
                <p key={i} className={styles.contentParagraph}>
                    {block}
                </p>
            );
        });
    };

    return (
        <>
            <DetailPageLayout
                title="지식 저장소"
                description="공부하거나 정리한 내용을 기록하는 공간입니다."
            >
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.topicCol}>주제</th>
                            <th className={styles.titleCol}>제목</th>
                            <th className={styles.dateCol}>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pagedPosts.map((post) => (
                            <tr
                                key={post.id}
                                className={styles.row}
                                onClick={() => handleRowClick(post)}
                            >
                                <td className={styles.topicCol}>
                                    <span className={styles.topicBadge}>{post.topic}</span>
                                </td>
                                <td>
                                    <div className={styles.title}>{post.title}</div>
                                    <div className={styles.subtitle}>{post.subtitle}</div>
                                </td>
                                <td className={styles.dateCol}>{post.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={styles.pagination}>
                    <button
                        className={styles.pageButton}
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                    >
                        이전
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            className={`${styles.pageButton} ${
                                page === num ? styles.pageButtonActive : ''
                            }`}
                            onClick={() => setPage(num)}
                        >
                            {num}
                        </button>
                    ))}

                    <button
                        className={styles.pageButton}
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => p + 1)}
                    >
                        다음
                    </button>
                </div>
            </DetailPageLayout>

            {selectedPost && (
                <div className={styles.overlay} onClick={handleCloseModal}>
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={styles.closeButton} onClick={handleCloseModal}>
                            ×
                        </button>

                        <span className={styles.topicBadge}>{selectedPost.topic}</span>
                        <h3 className={styles.modalTitle}>{selectedPost.title}</h3>
                        <p className={styles.modalSubtitle}>{selectedPost.subtitle}</p>
                        <p className={styles.modalDate}>{selectedPost.createdAt}</p>

                        <div className={styles.modalBody}>
                            {renderContent(selectedPost.content)}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}