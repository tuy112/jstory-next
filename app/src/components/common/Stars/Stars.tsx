"use client";

import { useEffect, useRef } from "react";

import styles from "./Stars.module.css";

interface StarsProps {
    count?: number;
}

export default function Stars({
    count = 100,
}: StarsProps) {
    const starRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const starContainer = starRef.current;

        if (!starContainer) return;

        starContainer.innerHTML = "";

        const createStar = () => {
            const star =
                document.createElement("div");

            const size =
                Math.random() * 3 + 1;

            star.style.top = `${
                Math.random() * 100
            }%`;

            star.style.left = `${
                Math.random() * 100
            }%`;

            star.style.width = `${size}px`;

            star.style.height = `${size}px`;

            return star;
        };

        const stars = Array.from(
            { length: count },
            createStar
        );

        starContainer.append(...stars);

        return () => {
            starContainer.innerHTML = "";
        };
    }, [count]);

    return (
        <div
            ref={starRef}
            className={styles.stars}
        />
    );
}