import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from 'next/image';
import { FolderOpen } from 'lucide-react';

import CommonModal from '../Modal/Modal';

import styles from "./Header.module.css";

interface Props {
    variant?: 'main' | 'detail';
}

export default function Header({ variant = 'main', }: Props) {

      // 1. 햄버거 메뉴 상태 관리
      const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = useCallback(() => {
            setIsOpen((prev) => !prev);
      }, []);

      // 2. 타이핑 효과
      const text = "안녕하세요! 풀스택 개발자, Jay입니다😊";
      const [displayText, setDisplayText] = useState("");
      const [index, setIndex] = useState(0);

      useEffect(() => {
            if (index < text.length) {
            const timeout = setTimeout(() => {
                  setDisplayText((prev) => prev + text.charAt(index));
                  setIndex((prev) => prev + 1);
            }, 70);

            return () => clearTimeout(timeout);
            }
      }, [index, text]);

      // 3. 모달창 띄우기
      const [open, setOpen] = useState(false);
      const handlePreparePage = (
            e: React.MouseEvent<HTMLAnchorElement>
      ) => {
            e.preventDefault();

            setOpen(true);
      };

      return (
            <>
                  <header className={ 
                        variant === 'detail'
                        ? `${styles.header} ${styles.detailHeader}`
                        : styles.header
                  }
                  >
                        <div className={styles.inner}>
                              {/* Header - Title */}
                              <div className={styles.headerTitle}>
                                    <h1 className={styles.headerLogo}>
                                    <Link 
                                          href="/home" 
                                          className={styles.siteMaintitle}>
                                                Jstory
                                    </Link>
                                    <span className={styles.siteSubtitle}>{" "} - Jay's Healing Space</span>
                                    </h1>
                              </div>

                              {/* Header - HamburgerMenu */}
                              <button
                                    className={styles.hamburgerMenu}
                                    onClick={toggleMenu}
                                    aria-label="메뉴 열기"
                                    aria-expanded={isOpen}
                              >
                                    <div className={styles.menuIcon}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    </div>
                              </button>

                              <div className={`${styles.sideMenu} ${isOpen ? styles.open : ""}`}>

                                    {/* 메뉴 프로필 */}
                                    <div className={styles.hamburgerProfile}>
                                          <Image
                                                className={styles.profileImage}
                                                src="/images/pika.png"
                                                alt="profileImg"
                                                width={100}
                                                height={100}
                                          />
                                          <h2 className={styles.profileName}>JAY</h2>
                                          <span className={styles.profileDescription}>
                                                {displayText}
                                          </span>
                                    </div>

                                    <ul className={styles.menuSection}>
                                          <li>
                                                <Link href="/profile">PROFILE</Link>
                                          </li>
                                          <li>
                                                <Link href="/project">Project Lab (프로젝트 모음)</Link>
                                          </li>
                                          <li>
                                                <Link href="/server-operation" onClick={handlePreparePage}>Server Lab (서버 운영 현황)</Link>
                                          </li>
                                    </ul>

                                    {/* 작은 메뉴 영역 */}
                                    <ul className={styles.bottomMenu}>
                                          <li>
                                                <Link href="/gate">대문으로 이동</Link>
                                          </li>
                                          <li>
                                                <Link href="/gallery" onClick={handlePreparePage}>갤러리</Link>
                                          </li>
                                          <li>
                                                <Link
                                                      href="https://www.notion.so/jstoryjay/RMS-196211b2c60980a7baccd0751dd9a093"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      >
                                                      노션메모장
                                                </Link>
                                          </li>
                                          <li>
                                                <Link
                                                      href="https://tuy112.github.io"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                >
                                                      Jstory ASIS
                                                </Link>
                                          </li>
                                    </ul>
                              </div>

                                    {/* Header - topmenu */}
                                    <div className={styles.topMenu}>
                                          <div className={styles.projectButtons}>
                                          <div className={styles.webLogin}>
                                                
                                                <div className={styles.mainButton}>
                                                      <span className={styles.buttonText}>
                                                      프로젝트 바로가기
                                                      </span>

                                                      <FolderOpen
                                                      size={18}
                                                      className={styles.mobileProjectIcon}
                                                      />
                                                </div>
                                                <div className={styles.subButtons}>
                                                      <Link href="http://192.168.0.37/" className={styles.subButton}>1. Jay Record Room (HTTP임시배포 중)</Link>
                                                      <Link href="https://jay-travel-record-eqj8qzdpw-tuy112s-projects.vercel.app/" className={styles.subButton}>2. Jay 여행기록</Link>
                                                      <Link href="" className={styles.subButton} onClick={handlePreparePage}>3. 산행기록방 (개발 중)</Link>
                                                      <Link href="" className={styles.subButton} onClick={handlePreparePage}>'4. 나만의 AI 플랫폼 (개발 전)</Link>
                                                      <Link href="" className={styles.subButton} onClick={handlePreparePage}>5. 나만의 게임 모음 (개발 전)</Link>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </header>

                  <CommonModal
                        open={open}
                        onClose={() => setOpen(false)}
                        title="안내"
                        message={`아직 미구현 페이지입니다. 
                              빠른 시일 내 화면 개발 완료하겠습니다 :)`}
                  />
            </>
      );
}