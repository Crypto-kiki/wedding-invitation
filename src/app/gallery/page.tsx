"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/couple1.jpg",
  "/images/couple2.jpg",
  "/images/couple3.jpg",
  "/images/couple4.jpg",
  "/images/couple5.jpg",
  "/images/couple6.jpg",
  "/images/couple7.jpg",
  "/images/couple5.jpg",
  "/images/couple6.jpg",
  "/images/couple7.jpg",
];

const breakpointColumnsObj = {
  default: 2,
  640: 2, // 모바일에서 1열
};

export default function GalleryPage() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-center text-sx font-semibold mt-6 text-pink-200">
        GALLERY
      </h2>
      <h1 className="text-center text-2xl font-semibold mb-6">우리의 순간들</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="space-y-4"
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`gallery-${i}`}
            className="w-full rounded-lg cursor-pointer"
            onClick={() => setIndex(i)}
          />
        ))}
      </Masonry>

      <Lightbox
        open={index !== null}
        close={() => setIndex(null)}
        slides={images.map((src) => ({ src }))}
        index={index ?? 0}
      />
    </div>
  );
}
