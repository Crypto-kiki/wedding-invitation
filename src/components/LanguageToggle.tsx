// src/components/LanguageToggle.tsx
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import "flag-icons/css/flag-icons.min.css";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-6 right-6 z-50"
    >
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full shadow-lg border border-white/20 flex">
        <button
          onClick={() => setLanguage("ko")}
          className={`
            w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center
            ${
              language === "ko"
                ? "bg-white/30 backdrop-blur-md shadow-md transform scale-105"
                : "hover:bg-white/15 hover:scale-105"
            }
          `}
        >
          <span className="fi fi-kr text-sm"></span>
        </button>
        <button
          onClick={() => setLanguage("zh")}
          className={`
            w-10 h-10 rounded-full transition-all duration-300 flex items-center justify-center
            ${
              language === "zh"
                ? "bg-white/30 backdrop-blur-md shadow-md transform scale-105"
                : "hover:bg-white/15 hover:scale-105"
            }
          `}
        >
          <span className="fi fi-tw text-sm"></span>
        </button>
      </div>
    </motion.div>
  );
}
