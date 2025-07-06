"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaGoogle } from "react-icons/fa";
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
        className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full flex flex-col items-center border border-[#d1bfa5] backdrop-blur-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#a57958] font-serif tracking-wide">
          {t("weddingInfo")}
        </h2>

        <div className="flex items-center gap-3 mb-2 text-[#b48c5c]">
          <FaCalendarAlt className="text-lg" />
          <span className="text-base font-semibold">{t("ceremonyDate")}</span>
        </div>

        <div className="flex items-center gap-3 mb-5 text-[#b48c5c]">
          <FaMapMarkerAlt className="text-lg" />
          <span className="text-base font-medium">{t("venueLocation")}</span>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          src="/images/venue_map.png"
          alt="웨딩홀 지도"
          className="rounded-xl shadow-lg border mb-4 w-full max-w-[330px] object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 flex gap-4"
        >
          <motion.a
            href="https://naver.me/GplXTcqB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-[#03C75A] text-white rounded-full font-medium shadow-md hover:bg-[#02ab4d] transition"
          >
            <FaMapMarkerAlt className="text-base" />
            <span className="text-sm">{t("mapButtonNaver")}</span>
          </motion.a>

          <motion.a
            href="https://maps.app.goo.gl/yrNRstU1PsCeEXxV9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-[#4285F4] text-white rounded-full font-medium shadow-md hover:bg-[#357ae8] transition"
          >
            <FaGoogle className="text-base" />
            <span className="text-sm">{t("mapButtonGoogle")}</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
