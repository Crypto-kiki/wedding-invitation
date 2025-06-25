// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_KR, Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-noto-serif-kr",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "김백기 ❤️ 여이페 | 결혼합니다",
  description:
    "2025년 9월 14일, 포레스트원웨딩에서 진행되는 김백기와 여이페의 결혼식에 여러분을 초대합니다.",
  icons: {
    // 데이터 URL로 SVG 파비콘 설정
    icon:
      "data:image/svg+xml," +
      encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <text x="50%" y="50%" font-size="48" text-anchor="middle" dominant-baseline="central">
          💌
        </text>
      </svg>
    `),
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`
          ${notoSerifKR.variable} ${inter.variable}
          font-sans antialiased
          max-w-2xl mx-auto
          bg-gradient-to-b from-[#fdf8f3] via-[#faf0e8] to-[#f5e6d3] p-4
        `}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
