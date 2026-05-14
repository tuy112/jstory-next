"use client";

import Link from "next/link";

import Header from "../src/components/common/Header/Header";
import Footer from "../src/components/common/Footer/Footer";

import Stars from "../src/components/common/Stars/Stars";

import styles from "./Home.module.css";

export default function HomePage() {
    return (
        <div id="wrap">
            <Stars count={100} />

            <Header />

            <main
                id="container"
                className={styles.main}
            >
                <section
                    className={styles["main-wrap"]}
                >
                    <h2>
                        저만의 힐링공간에 오신
                        모든 분들을 환영합니다
                        ^_^
                    </h2>

                    <div
                        className={
                            styles["main-intro"]
                        }
                    >
                        <div
                            className={`${styles["main-detail"]} ${styles.detail1}`}
                        >
                            <h3>About Me</h3>

                            <p>
                                안녕하세요!
                                Developer Jay입니다.
                            </p>

                            <p>
                                새로운 도전과 배움을
                                즐기는 개발자입니다.
                            </p>

                            <Link
                                href="/profile"
                                className={
                                    styles[
                                        "cta-button"
                                    ]
                                }
                            >
                                PROFILE로 바로가기
                            </Link>
                        </div>

                        <div
                            className={`${styles["main-detail"]} ${styles.detail2}`}
                        >
                            <h3>
                                다이어트 기록방
                            </h3>

                            <p>
                                식단 및 다이어트 기록이
                                담긴 공간입니다.
                            </p>

                            <Link
                                href="/diet"
                                className={
                                    styles[
                                        "cta-button"
                                    ]
                                }
                            >
                                다이어트 기록 보러가기
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}