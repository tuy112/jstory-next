'use client';

import styles from './Profile.module.css';

import Image from 'next/image';

import DetailPageLayout from '../src/components/layout/DetailPageLayout';

import profileImage from '../../public/images/about_man.png';

const capabilityList = [
    'Linux Server Development',
    'Java (Spring)',
    'JavaScript (React.js)',
    'TypeScript (Next.js)',
    'HTML / CSS / Publishing',
    'Oracle / MySQL',
    'WebSquare5',
    'UX Research / UI Prototyping',
];

const timelineData = [
    {
        year: '2026',
        items: [
            {
                title: 'Jstory 3단계 고도화 프로젝트(Next.js)',
                period: '2026-04 ~ ing',
            },
            {
                title: '(주)소프트케이 자체 홈페이지 제작 및 운영',
                period: '2026-02 ~ ing',
            },
            {
                title: '기록관리시스템 구축 및 유지보수 개발',
                period: '2025-02 ~ ing',
            },
        ],
    },
    {
        year: '2025',
        items: [
            {
                title: 'Mikep 전자결재 문서 이관 사업',
                period: '2025-02 ~ 2025-10',
            },
            {
                title: '의료기기 플랫폼 프로토타입 제작',
                period: '2024-12 ~ 2025-01',
            },
        ],
    },
    {
        year: '2024',
        items: [
            {
                title: 'Jstory 고도화 프로젝트(React.js)',
                period: '2024-08 ~ 2025-08',
            },
            {
                title: 'LG U+ 관리자 페이지 현대화 프로젝트',
                period: '2024-06 ~ 2024-09',
            },
        ],
    },
    {
        year: '2023',
        items: [
            {
                title: '공공 L사 고도화 프로젝트',
                period: '2023-10 ~ 2024-02',
            },
            {
                title: '스파르타코딩클럽 Node.js 백엔드 과정',
                period: '2023-05 ~ 2023-09',
            },
        ],
    },
    {
        year: '2020 ~ 2022',
        items: [
            {
                title: '금융권 S사 통합단말 차세대 프로젝트',
                period: '2022-02 ~ 2022-10',
            },
            {
                title: 'Jstory 첫 구축 작업 (HTML/CSS/JS)',
                period: '2022-01 ~ 2022-12',
            },
            {
                title: '이젠아카데미 UI/UX 퍼블리셔 양성과정',
                period: '2021-07 ~ 2022-01', 
            },
            {
                title: '강남대학교 Java 웹 개발자 양성과정(K-move)',
                period: '2020-12 ~ 2021-06', 
            },
        ],
    },
];

export default function ProfilePage() {
    return (
        <DetailPageLayout
            title="Profile"
            description="Developer Jay 소개 페이지"
        >
            <section className={styles.profileSection}>
                <div className={styles.profileImageBox}>
                    <Image
                        src={profileImage}
                        alt="Jay"
                        className={styles.profileImage}
                    />
                </div>

                <div className={styles.profileContent}>
                    <span className={styles.badge}>
                        ABOUT ME
                    </span>

                    <h2 className={styles.title}>
                        인간 스타트업을 목표로
                        성장 중인 개발자
                    </h2>

                    <p className={styles.description}>
                        기획, 디자인, 개발까지 모두 가능한
                        개발자를 목표로 성장하고 있습니다.
                        <br />
                        React.js + Spring 기반 개발을 주력으로 하며,
                        Next.js(TypeScript) 기반 프로젝트도
                        진행 가능합니다.
                    </p>
                </div>
            </section>

            <section className={styles.capabilitySection}>
                <h3 className={styles.sectionTitle}>
                    Capability
                </h3>

                <div className={styles.capabilityGrid}>
                    {capabilityList.map((item) => (
                        <div
                            key={item}
                            className={styles.capabilityCard}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.timelineSection}>
                <h3 className={styles.sectionTitle}>
                    Career Timeline
                </h3>

                <div className={styles.timelineWrap}>
                    {timelineData.map((timeline) => (
                        <div
                            key={timeline.year}
                            className={styles.timelineGroup}
                        >
                            <div className={styles.timelineYear}>
                                {timeline.year}
                            </div>

                            <div className={styles.timelineItems}>
                                {timeline.items.map((item) => (
                                    <div
                                        key={item.title}
                                        className={styles.timelineCard}
                                    >
                                        <h4>
                                            {item.title}
                                        </h4>

                                        <p>
                                            {item.period}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </DetailPageLayout>
    );
}