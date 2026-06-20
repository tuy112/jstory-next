"use client";

import { useState, useRef } from "react";
import Link from "next/link";

import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import Stars from "../../components/common/Stars/Stars";

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
                    <h2>Welcome to Jay's World :&#41;</h2>
                    <p>천천히 성장하며, 늘 새로운 것을 만들고자 하는 Jay입니다..!</p>

                    <div className={styles.buttonWrap}>
                        <button
                            onClick={handleHeartEffect}
                            className={styles.heroButton}
                        >
                            하트 발사하기 💙
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
                    <Link
                        href="/profile"
                        className={styles.card}
                    >
                        <span className={styles.cardLabel}>ABOUTME</span>
                        <h3>Profile</h3>
                        <p>Developer Jay를 소개합니다.</p>
                    </Link>

                    <Link
                        href="/project"
                        className={styles.card}
                    >
                        <span className={styles.cardLabel}>RECORD</span>
                        <h3>Project</h3>
                        <p>Jay의 프로젝트 경력 기록공간</p>
                    </Link>
                </section>

                <section className={styles.bottomMessage}>
                    <p>시련이 온다해도, 쓰러지지말고 이겨내서 발전하자</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}