// src/components/PreviewGallery.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const images = [
  { src: "/images/couple1.jpg", alt: "커플 사진 1" },
  { src: "/images/couple2.jpg", alt: "커플 사진 2" },
  { src: "/images/couple3.jpg", alt: "커플 사진 3" },
  { src: "/images/couple4.jpg", alt: "커플 사진 4" },
  { src: "/images/couple5.jpg", alt: "커플 사진 5" },
  { src: "/images/couple6.jpg", alt: "커플 사진 6" },
  { src: "/images/couple7.jpg", alt: "커플 사진 7" },
  { src: "/images/couple8.jpg", alt: "커플 사진 8" },
  { src: "/images/couple9.jpg", alt: "커플 사진 9" },
];

export default function PreviewGallery() {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-4 w-full flex flex-col items-center max-w-md mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-serif font-bold text-[#b18463] mb-5"
      >
        {t("ourMoments")}
      </motion.h2>
      <div>
        <Link href="gallery" className="grid grid-cols-3 gap-2 mb-6 w-full">
          {images.map((image, idx) => (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.36, delay: 0.03 * idx }}
              viewport={{ once: true }}
              className="w-full aspect-square object-cover rounded-xl shadow ring-1 ring-[#ecd8c1] hover:scale-105 transition"
            />
          ))}
        </Link>
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
          {t("viewMorePhotos")}
        </Link>
      </motion.div>
    </section>
  );
}
