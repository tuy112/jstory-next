'use client';

import styles from './Project.module.css';

import DetailPageLayout from '../src/components/layout/DetailPageLayout';

const projectList = [
    {
        title: '기록관리시스템 구축 및 유지보수',
        period: '2025-02 ~ ing',
        description: [
            'Oracle + Java 기반 기록관리시스템 개발',
            '전자결재 데이터 이관',
            '운영 유지보수 및 기능 개선',
        ],
    },
    {
        title: '의료기기 플랫폼 프로토타입',
        period: '2024-11 ~ 2025-01',
        description: [
            '요구사항 분석',
            '기능명세서 제작',
            '프로토타입 화면 설계',
        ],
    },
    {
        title: 'LGU+ 관리자 페이지 현대화',
        period: '2024-06 ~ 2024-09',
        description: [
            'Java X Tymeleaf 기반 관리자 화면 개발',
            'API 연동 및 CRUD 구현',
            '통계 화면 작업',
        ],
    },
    {
        title: '공공 L사 고도화 프로젝트',
        period: '2024-06 ~ 2024-09',
        description: [
            'GIS 기반 공공 데이터 시각화 시스템 개발',
            'API 연동 및 CRUD 구현',
            '지도 기반 데이터 시각화 작업',
        ],
    },
    {
        title: '신한은행 통합단말 차세대',
        period: '2022-02 ~ 2022-09',
        description: [
            '금융권 차세대 프로젝트',
            'AS-IS → TO-BE 전환',
            '통합테스트 및 결함 수정',
        ],
    },
];

export default function ProjectPage() {
    return (
        <DetailPageLayout
            title="Project"
            description="프로젝트 수행 이력"
        >
            <section className={styles.projectHero}>
                <span className={styles.badge}>
                    PROJECT ARCHIVE
                </span>

                <h2 className={styles.title}>
                    실무 중심 프로젝트 경험
                </h2>

                <p className={styles.description}>
                    SI 프로젝트, 관리자 시스템,
                    기록관리 시스템 구축 및 데이터 이관 경험을
                    정리한 공간입니다.
                </p>
            </section>

            <section className={styles.projectGrid}>
                {projectList.map((project) => (
                    <article
                        key={project.title}
                        className={styles.projectCard}
                    >
                        <div className={styles.cardTop}>
                            <h3>
                                {project.title}
                            </h3>

                            <span>
                                {project.period}
                            </span>
                        </div>

                        <ul>
                            {project.description.map((desc) => (
                                <li key={desc}>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        </DetailPageLayout>
    );
}