// src/components/PreviewGallery.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const images = Array.from(
  { length: 9 },
  (_, i) => `/images/couple${i + 1}.jpg`
);

export default function PreviewGallery() {
  return (
    <section className="py-12 px-4 w-full flex flex-col items-center max-w-md">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-serif font-bold text-[#b18463] mb-5"
      >
        우리의 순간들
      </motion.h2>
      <div className="grid grid-cols-3 gap-2 mb-6 w-full">
        {images.map((src, idx) => (
          <motion.img
            key={src}
            src={src}
            alt={`preview${idx + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.36, delay: 0.03 * idx }}
            viewport={{ once: true }}
            className="w-full aspect-square object-cover rounded-xl shadow ring-1 ring-[#ecd8c1] hover:scale-105 transition"
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        viewport={{ once: true }}
      >
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-7 py-2 rounded-full bg-gradient-to-r from-[#ffe8cf] to-[#d8b4a0] text-[#6d4635] font-semibold shadow hover:scale-105 transition"
        >
          더 많은 사진 보기
        </Link>
      </motion.div>
    </section>
  );
}
