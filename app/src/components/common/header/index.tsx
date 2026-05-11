"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <header id="header">
      <div className="inner">
        {/* Header Title */}
        <div className="header-title">
          <h1 className="header-logo">
            <Link href="/home" className="site-maintitle">
              Jstory
            </Link>
            <span className="site-subtitle"> - Jay's Healing Space</span>
          </h1>
        </div>

        {/* Header HamburgerMenu */}
        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
          type="button"
        >
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`side-menu ${isOpen ? "open" : ""}`} id="sideMenu">
          <div className="login-state">
            <h3 className="no-login">로그인이 필요합니다</h3>
            <h3 className="yes-login">어서오세요</h3>
          </div>

          <ul className="menu-section">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/profile">About Me</Link>
              <ul className="sub-section">
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <Link href="/project">Project</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/study">Jay's 공부방</Link>
              <ul className="sub-section">
                <li>
                  <Link href="/server-create">리눅스 서버구축하기</Link>
                </li>
                <li>
                  <Link href="/certificate">공부방(리눅스+정처기)</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/hobby">취미 기록방</Link>
              <ul className="sub-section">
                <li>
                  <Link href="/mountain">등산</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/three">3D 공간으로 초대합니다!</Link>
            </li>
          </ul>

          <ul className="bottom-menu">
            <li>
              <Link href="/todo">TIL/WIL</Link>
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
        <div className="login-buttons">
          <div className="web-login">
            <div className="main-button">로그인메뉴</div>
            <div className="sub-buttons">
              <Link href="/login" className="sub-button">
                로그인
              </Link>
              <Link href="/signup" className="sub-button">
                회원가입
              </Link>
            </div>
          </div>

          <div className="mobile-login">
            <Link href="/login" className="main-button">
              LOGIN
            </Link>
            <div className="sub-buttons">
              <Link href="/signup" className="sub-button">
                회원가입
              </Link>
              <Link href="/" className="sub-button">
                Gate 이동
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}