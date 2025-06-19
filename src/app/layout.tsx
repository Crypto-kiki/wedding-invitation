// src/app/layout.tsx
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "우리의 결혼식에 초대합니다 💍",
  description: "모바일 청첩장 - 소중한 당신을 우리의 결혼식에 초대합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex justify-center bg-[#fdf6f0]">
        <div className="w-full max-w-lg mx-auto">{children}</div>
      </body>
    </html>
  );
}
