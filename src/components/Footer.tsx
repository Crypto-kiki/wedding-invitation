"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="py-8 text-center text-[#a28566] text-base font-serif tracking-wide mt-12 mb-6 opacity-80"
    >
      <p>
        저희 두 사람의 소중한 시작을
        <br />
        함께 해주셔서 진심으로 감사드립니다.
      </p>
    </motion.footer>
  );
}
