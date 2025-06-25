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

export default function InvitationPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  // 페이지 진입 시 컨페티
  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="invitation"
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(6px)" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="min-h-screen relative bg-white overflow-auto pb-12 px-4 pt-6 rounded-3xl"
      >
        <div className="max-w-xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
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

        {showConfetti && (
          <Confetti width={width} height={height} recycle={false} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
