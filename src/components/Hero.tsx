"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="h-[80vh] min-h-[600px] w-full flex flex-col justify-center items-center text-center relative bg-[url('/images/hero.jpg')] bg-cover bg-center">
      {/* 오버레이 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/20" />

      {/* 텍스트 그룹 */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center w-full px-6"
      >
        {/* 상단 장식 
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="mb-6"
        >
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent mb-4" />
          <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm">
            <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm" />
          </div>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent mt-4" />
        </motion.div>
        */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl font-serif font-light mb-4 tracking-[0.02em] text-white/80"
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {t("weddingInvitation")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-6"
        >
          <p
            className="text-lg text-white mb-2"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            {t("groomBride")}
          </p>
          <p
            className="text-base text-white tracking-wide"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            {t("weddingDate")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
          className="bg-white/10 backdrop-blur-none rounded-2xl px-8 py-4 border border-white/20"
        >
          <p className="text-black/50 text-center leading-relaxed">
            {t("heroMessage1")}
            <br />
            {t("heroMessage2")}
            <br />
            <span className="font-medium">{t("heroMessage3")}</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
