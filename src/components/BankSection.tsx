"use client";
import { useState } from "react";
import { FaChevronDown, FaRegCopy, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const accounts = [
  {
    label: "신랑",
    name: "김백기",
    bank: "국민은행",
    number: "089501-04-214272",
  },
  {
    label: "신랑측 아버지",
    name: "김효중",
    bank: "신한은행",
    number: "110-127-184413",
  },
  {
    label: "신랑측 어머니",
    name: "오선숙",
    bank: "농협은행",
    number: "3520976329793",
  },
  {
    label: "新娘",
    name: "呂怡蓓",
    bank: "台新銀行(812)",
    number: "28881005551315",
  },
];

export default function BankSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const showToast = (idx: number) => {
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <section className="w-full max-w-md px-4 py-10 flex flex-col items-center mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-[1.15rem] font-serif font-bold text-[#b18463] mb-5 tracking-wide"
      >
        마음 전하기
      </motion.h2>
      <div className="w-full flex flex-col gap-3">
        {accounts.map((acc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.09 * idx }}
            viewport={{ once: true }}
            className="relative bg-white/80 rounded-2xl shadow-md border border-[#ecd8c1] px-4 py-3"
          >
            <button
              className="w-full flex items-center justify-between focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
              type="button"
            >
              <span className="text-[#a1775c] font-semibold text-base">
                {acc.label}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#bda68c]">{acc.name}</span>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    open === idx ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>
            <AnimatePresence>
              {open === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24 }}
                  className="mt-4 flex flex-col items-start"
                >
                  <span className="text-xs text-[#ad9582] mb-1">
                    {acc.bank}
                  </span>
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-[#faede6] rounded-full font-mono text-sm font-bold text-[#a1775c] shadow active:scale-95 transition"
                    onClick={() => {
                      window.navigator.clipboard.writeText(acc.number);
                      showToast(idx);
                    }}
                    type="button"
                  >
                    {acc.number}
                    <FaRegCopy className="ml-1" />
                  </button>
                  {copiedIdx === idx && (
                    <div className="flex items-center gap-1 text-green-700 text-xs mt-2 animate-fadeIn">
                      <FaCheckCircle className="text-green-500" />
                      복사 완료!
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s cubic-bezier(0.44, 0.13, 0.48, 0.87);
        }
      `}</style>
    </section>
  );
}
