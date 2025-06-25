"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CoupleSection() {
  const { t } = useLanguage();

  return (
    <section id="couple" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#b18463] mb-1">
                {t("groom")}
              </h3>
              <p className="text-2xl font-bold text-[#8b6f52]">김백기</p>
              <p className="text-sm text-[#a8916f] mt-2">金柏淇</p>
            </div>

            <FaHeart className="text-[#d8b4a0] text-2xl" />

            <div className="text-center">
              <h3 className="text-lg font-semibold text-[#b18463] mb-1">
                {t("bride")}
              </h3>
              <p className="text-2xl font-bold text-[#8b6f52]">여이페</p>
              <p className="text-sm text-[#a8916f] mt-2">呂怡蓓</p>
            </div>
          </div>

          <div className="text-center space-y-2 mt-8">
            <p className="text-[#8b6f52] leading-relaxed">
              {t("coupleMessage1")}
            </p>
            <p className="text-[#8b6f52] leading-relaxed">
              {t("coupleMessage2")}
            </p>
            <p className="text-[#8b6f52] leading-relaxed">
              {t("coupleMessage3")}
            </p>
            <p className="text-[#8b6f52] leading-relaxed">
              {t("coupleMessage4")}
            </p>
            <p className="text-[#8b6f52] leading-relaxed">
              {t("coupleMessage5")}
            </p>
            <p className="text-[#8b6f52] leading-relaxed">
              {t("coupleMessage6")}
            </p>
            <p className="text-[#8b6f52] leading-relaxed">
              {t("coupleMessage7")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
