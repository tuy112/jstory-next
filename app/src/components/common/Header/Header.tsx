"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";

import styles from "./Header.module.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* Header - Title */}
                <div className={styles.headerTitle}>
                    <h1 className={styles.headerLogo}>
                        <Link
                            href="/home"
                            className={styles.siteMaintitle}
                        >
                            Jstory
                        </Link>

                        <span className={styles.siteSubtitle}>
                            {" "}
                            - Jay's Healing Space
                        </span>
                    </h1>
                </div>

                {/* Header - HamburgerMenu */}
                <button
                    className={styles.hamburgerMenu}
                    onClick={toggleMenu}
                    aria-label="메뉴 열기"
                    aria-expanded={isOpen}
                    type="button"
                >
                    <div className={styles.menuIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div
                    className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}
                >
                    <div className={styles.loginState}>
                        <h3 className={styles.noLogin}>
                            로그인이 필요합니다
                        </h3>

                        <h3 className={styles.yesLogin}>
                            어서오세요
                        </h3>
                    </div>

                    <ul className={styles.menuSection}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href="/profile">
                                About Me
                            </Link>

                            <ul className={styles.subSection}>
                                <li>
                                    <Link href="/profile">
                                        Profile
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/project">
                                        Project
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/study">
                                Jay's 공부방
                            </Link>

                            <ul className={styles.subSection}>
                                <li>
                                    <Link href="/server-create">
                                        리눅스 서버구축하기
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/certificate">
                                        공부방(리눅스+정처기)
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/hobby">
                                취미 기록방
                            </Link>

                            <ul className={styles.subSection}>
                                <li>
                                    <Link href="/mountain">
                                        등산
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <Link href="/three">
                                3D 공간으로 초대합니다!
                            </Link>
                        </li>
                    </ul>

                    <ul className={styles.bottomMenu}>
                        <li>
                            <Link href="/todo">
                                TIL/WIL
                            </Link>
                        </li>

                        <li>
                            <a
                                href="https://github.com/tuy112/Jstory"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Jstory ASIS
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://jstoryjay.notion.site/Jay-UI-UX-124211b2c60980b98d93f25d148bdcc3?pvs=4"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                노션 이력서 링크
                            </a>
                        </li>

                        <li>
                            <a
                                href="/doc/Jstory_고도화프로젝트_화면설계서_v0.26_250115.pptx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                화면설계서 v0.26
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Header loginMenu */}
                <div className={styles.loginButtons}>
                    <div className={styles.webLogin}>
                        <div className={styles.mainButton}>
                            로그인메뉴
                        </div>

                        <div className={styles.subButtons}>
                            <Link
                                href="/login"
                                className={styles.subButton}
                            >
                                로그인
                            </Link>

                            <Link
                                href="/signup"
                                className={styles.subButton}
                            >
                                회원가입
                            </Link>
                        </div>
                    </div>

                    <div className={styles.mobileLogin}>
                        <Link
                            href="/login"
                            className={styles.mainButton}
                        >
                            LOGIN
                        </Link>

                        <div className={styles.subButtons}>
                            <Link
                                href="/signup"
                                className={styles.subButton}
                            >
                                회원가입
                            </Link>

                            <Link
                                href="/"
                                className={styles.subButton}
                            >
                                Gate 이동
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}