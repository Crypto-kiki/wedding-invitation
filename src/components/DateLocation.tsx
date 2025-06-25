"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function DateLocation() {
  const { t } = useLanguage();
  return (
    <section className="py-10 px-4 w-full max-w-md flex flex-col items-center mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="bg-white/80 rounded-2xl shadow-xl p-7 w-full flex flex-col items-center border border-[#ecd8c1] backdrop-blur-[1px]"
      >
        <h2 className="text-xl font-bold mb-3 text-[#b18463] font-serif tracking-wide">
          {t("weddingInfo")}
        </h2>
        <div className="flex items-center gap-2 mb-1 text-[#be8c62]">
          <FaCalendarAlt className="text-base" />
          <span className="text-base font-semibold">{t("ceremonyDate")}</span>
        </div>
        <div className="flex items-center gap-2 mb-2 text-[#be8c62]">
          <FaMapMarkerAlt className="text-base" />
          <span className="text-base font-medium">{t("venueLocation")}</span>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          src="/images/venue_map.png"
          alt="웨딩홀 지도"
          className="rounded-xl shadow border mt-4 mb-2 w-full max-w-[330px] object-cover"
        />
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.4 }}
          href="https://naver.me/GplXTcqB"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-8 py-2 rounded-full bg-gradient-to-r from-[#ffe8cf] to-[#d8b4a0] text-[#6d4635] font-bold shadow hover:scale-105 transition"
        >
          {t("mapButton")}
        </motion.a>
      </motion.div>
    </section>
  );
}
