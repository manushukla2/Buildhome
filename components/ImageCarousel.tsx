"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Slide = { src: string; alt?: string };

const slides: Slide[] = [
  { src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1920&q=80", alt: "Modern bath 1" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80", alt: "Modern bath 2" },
  { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80", alt: "Counter and basin" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80", alt: "Ravello basin" },
  { src: "https://images.unsplash.com/photo-1564540583246-934409427776?w=1920&q=80", alt: "Square bath" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80", alt: "Stone counter" },
];

export default function ImageCarousel({
  height = "h-[420px]",
  interval = 4500,
}: {
  height?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [interval]);

  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section className="relative select-none">
      <div className={`relative overflow-hidden rounded-xl lux-section ${height}`}>
        {/* Slides wrapper */}
        <div
          className="absolute inset-0 flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="relative shrink-0 w-full h-full">
              <Image src={s.src} alt={s.alt || "Slide"} fill className="object-cover" priority={i === 0} />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 rounded-full p-2 shadow"
          onClick={() => go(-1)}
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 rounded-full p-2 shadow"
          onClick={() => go(1)}
        >
          <FiChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? "bg-gold w-6" : "bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
