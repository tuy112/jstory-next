'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import styles from './style.module.css';

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