import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";

const jua = Jua({
      subsets: ["latin"],
      weight: "400",
      variable: "--font-jua",
      display: "swap",
});

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
            <html lang="ko" className={jua.variable}>
                  <body className={jua.className}>{children}</body>
            </html>
      );
}