"use client";

import { useState, useRef } from "react";
import Link from "next/link";

import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import Stars from "../../components/common/Stars/Stars";

import { devRecordData } from '@/lib/devRecord/devRecordData';
import styles from "./style.module.css";

export default function HomePage() {
    
    const particleIdRef = useRef(0);
    // 하트 날리기 기능
    const [particles, setParticles] = useState<
        {
            id: number;
            x: number;
            y: number;
            delay: number;
        }[]
    >([]);

    const handleHeartEffect = () => {
        const newParticles = Array.from(
            { length: 8 },
            (_, index) => ({
                id: particleIdRef.current++,
                x: Math.random() * 60 - 30,
                y: Math.random() * 20,
                delay: Math.random() * 0.5,
            })
        );

        setParticles((prev) => [
            ...prev,
            ...newParticles,
        ]);

        setTimeout(() => {
            setParticles((prev) =>
                prev.filter(
                    (particle) =>
                        !newParticles.some(
                            (newParticle) =>
                                newParticle.id ===
                                particle.id
                        )
                )
            );
        }, 2200);
    };

    return (
        <div id="wrap">
            <Stars count={120} />

            <Header />

            <main className={styles.main}>
                <section className={styles.hero}>
                    <h2>Jay's Dev Space</h2>
                    <p>늘 새로운 걸 만드는 것을 추구하는 Jay입니다..!</p>

                    <div className={styles.buttonWrap}>
                        <button
                            onClick={handleHeartEffect}
                            className={styles.heroButton}
                        >
                            좋아요 💙
                        </button>

                        <div className={styles.particleArea}>
                            {particles.map((particle) => (
                                <span
                                    key={particle.id}
                                    className={styles.particle}
                                    style={{
                                        left: `${particle.x}px`,
                                        bottom: `${particle.y}px`,
                                        animationDelay: `${particle.delay}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.gridSection}>
                
                    <a href="https://jay-record-room-eight.vercel.app/dev-record"
                            className={styles.devRecordCard}
                    >
                            <div className={styles.devRecordHeader}>
                                <span className={styles.cardLabel}>RECORD</span>
                                <h3>개발일지</h3>
                                <p>오늘의 개발 및 공부한 내용을 기록하는 공간</p>
                            </div> 

                            <ul className={styles.devRecordPreviewList}>
                                {devRecordData.slice(0, 3).map((record) => (
                                        <li key={record.id} className={styles.devRecordPreviewItem}>
                                            <span className={styles.previewDate}>{record.date}</span>
                                            <span className={styles.previewPage}>{record.page}</span>
                                            <span className={styles.previewTitle}>{record.title}</span>
                                        </li>
                                ))}
                            </ul>

                            <span className={styles.devRecordMore}>클릭해서 전체보기 →</span>
                    </a>
                </section>

                <section className={styles.bottomMessage}>
                    <p>시련이 온다해도, 쓰러지지말고 이겨내서 발전하자</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}