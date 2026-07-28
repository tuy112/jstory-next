'use client';

import styles from './style.module.css';

import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

interface Props {
    variant?: 'main' | 'detail';
    
    title: string;
    description?: string;
    children: React.ReactNode;
}

export default function DetailPageLayout({
    title,
    description,
    children,
}: Props) {
    return (
        <>
            <Header variant="detail" />

            <main className={styles.detailPage}>
                <div className={styles.detailPageInner}>
                    <section className={styles.detailPageHeader}>
                        <h1>{title}</h1>
                        
                        {description && (
                            <p>{description}</p>
                        )}
                    </section>

                    <section className={styles.detailPageContent}>
                        {children}
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}