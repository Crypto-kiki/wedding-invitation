"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[75vh] min-h-[480px] w-full flex flex-col justify-end items-center text-center relative bg-[url('/images/hero.jpg')] bg-cover bg-center pb-10">
      {/* 텍스트 그룹: 아래 쪽에 겹치지 않게 */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center w-full px-5"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-serif font-bold mb-3 tracking-wide text-white drop-shadow-lg"
          style={{
            textShadow: "0 2px 12px rgba(0,0,0,0.38), 0 1px 0 #fff2",
          }}
        >
          우리의 결혼식
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-base font-light text-white mb-5 drop-shadow"
          style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.27)",
          }}
        >
          2025년 9월 14일
          <br />
          우리의 시작을 함께 해주세요
        </motion.p>
        <motion.span
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.54, duration: 0.42, type: "spring" }}
          className="inline-block px-7 py-2 rounded-full bg-white/85 text-[#b18463] font-semibold shadow backdrop-blur text-[16px]"
          style={{ textShadow: "0 1px 4px #fff8" }}
        >
          Wedding Invitation
        </motion.span>
      </motion.div>
    </section>
  );
}
