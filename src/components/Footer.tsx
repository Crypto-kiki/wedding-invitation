"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full max-w-md px-4 py-12 text-center"
    >
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#e6bfae] to-transparent" />
        </div>

        <p className="text-[#8b6f52] text-base font-light leading-loose mb-4">
          {t('preciousBeginning')}
          <br />
          {t('thankYouForBeing')}
        </p>

        <div className="text-sm text-[#a8916f] font-light">
          <p className="mb-1">김백기 & 여이페</p>
          <p>2025. 9. 14</p>
        </div>

        <div className="flex justify-center mt-6">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#e6bfae] to-transparent" />
        </div>
      </div>
    </motion.footer>
  );
}