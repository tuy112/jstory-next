import type { Metadata } from "next";

import "../styles/globals.css";
import "../styles/reset.css";
import "../styles/tokens.css";
import "../styles/utilities.css";

export const metadata: Metadata = {
    title: "Jstory",
    description: "Jstory Next.js App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}