import type { Metadata } from "next";

import "./globals.css";

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