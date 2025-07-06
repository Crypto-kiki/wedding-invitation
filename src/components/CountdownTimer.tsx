"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CountdownTimer() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2025-09-14T11:30:00").getTime();
    const update = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: t("days"), value: timeLeft.days },
    { label: t("hours"), value: timeLeft.hours },
    { label: t("minutes"), value: timeLeft.minutes },
    { label: t("seconds"), value: timeLeft.seconds },
  ];

  return (
    <section className="py-10 px-4 w-full max-w-lg mx-auto flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-lg font-serif text-[#b18463] mb-6"
      >
        {t("specialDay")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full flex justify-between bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#ecd8c1] shadow-md"
      >
        {units.map((u, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <span className="text-2xl font-mono font-semibold text-[#6d4635]">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-xs uppercase text-[#a8916f] tracking-wide">
              {u.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
