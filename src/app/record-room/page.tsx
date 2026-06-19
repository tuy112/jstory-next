'use client'
import { useState } from 'react';

import DetailPageLayout from '../../components/layout/DetailPageLayout';
import styles from "./style.module.css";
import AccountSection from './account/AccountSection';
import ExerciseSection from './exercise/ExerciseSection';

export default function RecordPage() {
    const [activeTab, setActiveTab] = useState<'account' | 'exercise'>('account');

    return (
        <>
            <DetailPageLayout 
                title="가계부+운동기록방" 
                description="Jay의 가계부 및 운동기록방입니다."
            >
                {/* 탭 바 */}
                <div className={styles.tabBar}>
                    <button
                    className={`${styles.tabBtn} ${activeTab === 'account' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('account')}
                    >
                    가계부
                    </button>
                    <button
                    className={`${styles.tabBtn} ${activeTab === 'exercise' ? styles.tabActive : ''}`}
                    onClick={() => setActiveTab('exercise')}
                    >
                    운동기록
                    </button>
                </div>

                {/* 가게부 */}
                {activeTab === 'account'  && <AccountSection />}

                {/* 운동기록방 */}
                {activeTab === 'exercise' && <ExerciseSection />}
            </DetailPageLayout>
        </>
    );
}