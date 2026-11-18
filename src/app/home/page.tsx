"use client";

import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Stars from "../../components/common/Stars";
import FloatingIsland from '@/components/FloatingIsland';

import styles from "./page.module.css";

export default function HomePage() {

      return (
            <div id="wrap">
                  <Stars count={120} />

                  <Header />

                  <main className={styles.main}>
                        <section className={styles.hero}>
                              <h2>저만 힐링공간에 오신 분들을 환영합니다!</h2>
                              <p>오늘도 하나씩 쌓여가는 나의 기록</p>
                        </section>

                        {/* 3D 공중의 섬 */}
                        <section className={styles.islandSection}>
                              <FloatingIsland />
                        </section>

                        <section className={styles.bottomMessage}>
                              <p>시련이 온다해도, 쓰러지지말고 이겨내서 발전하자</p>
                        </section>
                  </main>

                  <Footer />
            </div>
      );
}