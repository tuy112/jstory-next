"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import Stars from "@/components/common/Stars";
import Loading from "@/components/common/Loading";

import styles from "./page.module.css";

export default function Gate() {
      const [isLoading, setIsLoading] = useState(true);
      const [progress, setProgress] = useState(0);

      useEffect(() => {
            const interval = setInterval(() => {
                  setProgress((prev) => {
                  if (prev >= 100) {
                        clearInterval(interval);
                        setIsLoading(false);

                        return 100;
                  }
                  return prev + 2;
                  });
            }, 100);

            return () => clearInterval(interval);
      }, []);

      if (isLoading) {
            return (
                  <Loading progress={progress} />
            );
      }

      return (
            <div className={styles.gatePage}>
                  <Stars count={100} />

                  <header className={styles.gateHeader}>
                        <img
                              src="/images/earth.png"
                              alt="earth"
                              className={styles.gateLogo}
                        />
                        <p className={styles.gateText}>JSTORY [Next.js(Typescript)]</p>
                        
                        <Link href="/home" className={styles.gateLink}>
                              안으로 들어가기!
                        </Link>
                  </header>
            </div>
      );
}