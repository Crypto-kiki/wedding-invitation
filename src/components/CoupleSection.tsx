// src/components/CoupleSection.tsx
"use client";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function CoupleSection() {
  return (
    <section className="w-full max-w-md px-4 py-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full bg-white/80 border border-[#ecd8c1] shadow-xl rounded-3xl py-8 px-6 flex flex-col items-center backdrop-blur-[2px]"
      >
        {/* 상단 감성 하트/라인 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, type: "spring", stiffness: 340 }}
          className="flex flex-col items-center mb-4 w-full"
        >
          <FaHeart className="text-[#e6bfae] text-2xl mb-2 drop-shadow" />
          <span className="block w-16 h-[2px] bg-gradient-to-r from-[#ecd8c1] via-[#e6bfae] to-[#ecd8c1] rounded-full" />
        </motion.div>
        {/* 신랑 & 신부 이름 */}
        <div className="w-full flex items-center justify-center gap-6 mb-2">
          <div className="flex flex-col items-end">
            <span className="text-lg font-serif text-[#765c45] font-bold">
              김백기
            </span>
            <span className="text-xs text-[#bda68c]">金柏淇</span>
          </div>
          <span className="text-[28px] font-light text-[#b18463] px-2 -mt-1">
            &amp;
          </span>
          <div className="flex flex-col items-start">
            <span className="text-lg font-serif text-[#765c45] font-bold">
              여이페
            </span>
            <span className="text-xs text-[#bda68c]">呂怡蓓</span>
          </div>
        </div>
        {/* 영문이름도 원하면 추가 */}
        {/* <div className="text-[13px] text-[#bfa795] mb-2">Baekgi KIM & Yi Pei LU</div> */}
        {/* 감성 인삿말 */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#a28566] text-[15px] text-center leading-snug font-serif mt-4"
        >
          저희 두 사람이
          <br />
          사랑으로 함께하는 길에
          <br />
          소중한 분들을 초대합니다.
        </motion.div>
      </motion.div>
    </section>
  );
}
