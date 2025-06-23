"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import Hero from "@/components/Hero";
import CoupleSection from "@/components/CoupleSection";
import CountdownTimer from "@/components/CountdownTimer";
import DateLocation from "@/components/DateLocation";
import PreviewGallery from "@/components/PreviewGallery";
import BankSection from "@/components/BankSection";
import MessageSection from "@/components/MessageSection";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";

export default function Page() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isOpening, setIsOpening] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleOpen = () => {
    setIsOpening(true);
  };

  // 오버레이가 다 깔리고 나면 환영 화면 제거 & 컨페티
  const handleOverlayComplete = () => {
    setShowWelcome(false);
    setShowConfetti(true);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  return (
    // <div className="min-h-screen relative bg-white">
    <>
      {/* 메인 페이지 */}
      <AnimatePresence>
        {!showWelcome && (
          <motion.div
            key="main"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="overflow-auto pb-12 px-4 pt-6"
          >
            <div className="max-w-lg mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
              <LanguageToggle />
              <Hero />
              <CoupleSection />
              <CountdownTimer />
              <PreviewGallery />
              <DateLocation />
              <MessageSection />
              <BankSection />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 웰컴 오버레이 */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            key="welcome"
            className="h-screen fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* 데코레이티브 볼 */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-2xl animate-pulse" />

            {/* 떠오르는 하트 */}
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-pink-200 text-2xl"
                initial={{ y: 0, opacity: 0 }}
                animate={{
                  y: [0, -30, -60],
                  opacity: [0, 1, 0],
                  x: [0, 10 * (i - 3), 0],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{ left: `${20 + i * 10}%` }}
              >
                ❤️
              </motion.span>
            ))}

            {/* 봉투 버튼 */}
            <motion.button
              onClick={handleOpen}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              whileHover={{ scale: 1.1 }}
              className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl border border-white/50 backdrop-blur-md flex flex-col items-center"
            >
              <motion.span
                className="text-9xl"
                animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
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

            {/* 클릭 후 전체 흐림 & 메인 페이드인 트리거 */}
            {isOpening && (
              <motion.div
                className="absolute inset-0 bg-white/20 backdrop-blur-md z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={handleOverlayComplete}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti */}
      {showConfetti && (
        <Confetti width={width} height={height} recycle={false} />
      )}
    </>
    // </div>
  );
}
