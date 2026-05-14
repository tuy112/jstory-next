import Image from "next/image";

import styles from "./Footer.module.css";

const socialLinks = [
    {
        url: "https://github.com/tuy112",
        src: "/images/GithubLogo.png",
        alt: "깃허브",
        text: "GITHUB",
    },
    {
        url: "https://jh-healing-place.tistory.com/",
        src: "/images/TstoryLogo.png",
        alt: "티스토리",
        text: "BLOG",
    },
    {
        url: "https://www.youtube.com/channel/UCIUZejYbHXZOHhwUokcRBUQ",
        src: "/images/YoutubeLogo.png",
        alt: "유튜브",
        text: "YOUTUBE",
    },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <h3>CONTACT ME</h3>

                <ul className={styles.links}>
                    {socialLinks.map(
                        ({
                            url,
                            src,
                            alt,
                            text,
                        }) => (
                            <li key={text}>
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={src}
                                        alt={alt}
                                        width={24}
                                        height={24}
                                    />

                                    <em>{text}</em>
                                </a>
                            </li>
                        )
                    )}
                </ul>

                <div className={styles.always}>
                    <p>
                        Do your Best, Then Good
                        Result will be following
                        you :)
                    </p>
                </div>
            </div>
        </footer>
    );
}