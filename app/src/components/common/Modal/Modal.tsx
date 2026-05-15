'use client';

import styles from './Modal.module.css';

interface CommonModalProps {
    open: boolean;
    title?: string;
    message?: string;
    onClose: () => void;
    children?: React.ReactNode;
    className?: string;
}

export default function CommonModal({
    open,
    title,
    message,
    onClose,
    children,
    className,
}: CommonModalProps) {

    if (!open) {
        return null;
    }

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
        >
            <div
                className={`${styles.modal} ${className || ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    ×
                </button>

                {title && (
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                )}

                {message && (
                    <p className={styles.message}>
                        {message}
                    </p>
                )}

                {children && (
                    <div className={styles.content}>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}