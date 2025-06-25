// /app/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomePage() {
  const router = useRouter();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 overflow-hidden">
      {/* 버튼과 블러 오버레이를 동시에 관리 */}
      <AnimatePresence mode="wait">
        {/* 1) 아직 클릭 전: 봉투 버튼 */}
        {!isOpening && (
          <motion.button
            onClick={handleOpen}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl border border-white/50 backdrop-blur-md flex flex-col items-center"
          >
            <motion.span
              className="text-9xl"
              animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              💌
            </motion.span>
            <motion.p
              className="mt-6 text-xl font-semibold text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              우리의 순간으로 초대합니다
            </motion.p>
            <motion.span
              className="mt-2 text-sm text-gray-500"
              animate={{ opacity: [0, 1] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                delay: 1,
              }}
            >
              Tap to open
            </motion.span>
          </motion.button>
        )}

        {/* 2) 클릭 후: 화면 전체 블러 + 페이드인 → 완료 시 네비게이트 */}
        {isOpening && (
          <motion.div
            className="absolute inset-0 bg-white/20 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={() => {
              router.push("/invitation");
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
