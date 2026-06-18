interface LoadingProps {
    progress: number;
}

import styles from "./Loading.module.css";

export default function Loading({
    progress,
}: LoadingProps) {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.loadingInner}>
                <div
                    className={
                        styles.loadingBarContainer
                    }
                >
                    <div
                        className={styles.loadingBar}
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>

                <p className={styles.loadingText}>
                    Loading... {progress}%
                </p>
            </div>
        </div>
    );
}