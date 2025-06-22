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
  description: "2025년 9월 14일, 포레스트원웨딩에서 진행되는 김백기와 여이페의 결혼식에 여러분을 초대합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${notoSerifKR.variable} ${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}