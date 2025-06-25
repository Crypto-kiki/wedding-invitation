"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function WelcomePage() {
  const router = useRouter();

  const handleOpen = () => {
    router.push("/invitation");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300">
      {/* 배경 데코 */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-2xl animate-pulse" />

      {/* 봉투 버튼 */}
      <motion.button
        onClick={handleOpen}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        whileHover={{ scale: 1.1 }}
        className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl border border-white/50 backdrop-blur-md flex flex-col items-center"
      >
        <motion.span
          className="text-9xl"
          animate={{ rotate: [0, -5, 5, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          💌
        </motion.span>
        <motion.p
          className="mt-6 text-xl font-semibold text-gray-800"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          우리의 순간으로 초대합니다
        </motion.p>
        <motion.span
          className="mt-2 text-sm text-gray-500"
          animate={{ opacity: [0, 1] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.5,
            delay: 1,
          }}
        >
          Tap to open
        </motion.span>
      </motion.button>
    </div>
  );
}
