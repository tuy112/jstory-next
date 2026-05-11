import type { Metadata } from "next";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

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
      <body>
        <p id="skipNav" className="hide">
            <a href="/">본문 바로가기</a>
        </p>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
