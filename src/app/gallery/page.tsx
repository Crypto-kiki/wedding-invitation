// src/app/gallery/page.tsx
"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/images/couple1.jpg",
  "/images/couple2.jpg",
  "/images/couple3.jpg",
  "/images/couple4.jpg",
  "/images/couple5.jpg",
  "/images/couple6.jpg",
  "/images/couple7.jpg",
  "/images/couple8.jpg",
  "/images/couple9.jpg",
  "/images/couple10.jpg",
  "/images/couple11.jpg",
  "/images/couple12.jpg",
  "/images/couple13.jpg",
  "/images/couple14.jpg",
  "/images/couple15.jpg",
  "/images/couple16.jpg",
  "/images/couple17.jpg",
  "/images/couple18.jpg",
  "/images/couple19.jpg",
  "/images/couple20.jpg",
  "/images/couple21.jpg",
  "/images/couple22.jpg",
];

const breakpointColumnsObj = {
  default: 2,
  640: 1,
};

export default function GalleryPage() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen p-0 flex flex-col items-center bg-gradient-to-b from-[#f5e6d3] via-[#faece1] to-[#fdf8f3] max-w-2xl mx-auto rounded-2xl">
      {/* 상단 */}
      <div className="sticky top-0 z-20 w-full bg-gradient-to-b from-white/90 to-transparent py-4 mb-3 flex items-center px-4">
        <Link href="/invitation" className="mr-2">
          <FaChevronLeft className="text-[#d8b4a0] text-lg" />
        </Link>
        <div className="flex-1 text-center">
          <span className="text-[1rem] font-serif font-bold text-[#b18463] tracking-wider">
            GALLERY
          </span>
        </div>
        <span className="w-6" />
      </div>

      {/* 감성 타이틀 */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center text-[1.65rem] font-serif font-bold mb-3 text-[#a1775c] drop-shadow-sm"
      >
        우리의 순간들
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-center text-[14px] text-[#ad9582] mb-6 font-serif"
      >
        평범한 날을 특별하게 만들어준 <br />
        소중한 추억들을 담았어요.
      </motion.div>

      {/* Masonry 그리드 */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="w-full flex gap-3 p-2"
        columnClassName="space-y-3"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.06 * i }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white/90 shadow-md overflow-hidden border border-[#ecd8c1] relative group"
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              width={400}
              height={500}
              className="w-full object-cover aspect-[4/5] max-h-[340px] cursor-pointer transition duration-150 group-hover:scale-105"
              onClick={() => setIndex(i)}
              loading="lazy"
              draggable={false}
              style={{ userSelect: "none" }}
            />
            {/* 오버레이 효과 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
          </motion.div>
        ))}
      </Masonry>

      {/* Lightbox (모바일 친화) */}
      <AnimatePresence>
        {index !== null && (
          <Lightbox
            open={index !== null}
            close={() => setIndex(null)}
            slides={images.map((src) => ({ src }))}
            index={index ?? 0}
            styles={{
              container: {
                background: "rgba(36,23,12,0.93)",
                zIndex: 50,
              },
            }}
            render={{
              // 닫기버튼 스타일링
              iconClose: () => (
                <span className="absolute right-6 top-4 text-[22px] text-[#ecd8c1] font-bold z-50 bg-[#0005] rounded-full p-1.5 shadow-lg">
                  ×
                </span>
              ),
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
