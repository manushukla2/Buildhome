"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Floating WhatsApp button
 * - Fixed to bottom-right
 * - Shows a small tooltip on hover
 * - Opens WhatsApp chat to the company number on click
 */
export default function FloatingWhatsApp() {
  // Try png -> svg -> jpg fallbacks so it works regardless of the uploaded extension
  const candidates = [
    "/logowhat.png",
    "/logowhat.svg",
    "/logowhat.jpg",
    "/logowhat.jpeg",
    "/logowhat.webp",
  ];
  const [srcIndex, setSrcIndex] = useState(0);

  const onImgError = () => {
    setSrcIndex((i) => (i < candidates.length - 1 ? i + 1 : i));
  };

  // India number with country code
  const whatsappHref = `https://wa.me/919430400013`;

  return (
    <a
      href={whatsappHref}
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-5 bottom-5 z-50"
    >
      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#25D366] px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        WhatsApp
      </span>

      {/* Icon button */}
      <div className="rounded-full bg-white shadow-xl ring-1 ring-black/10 p-2 hover:scale-110 transition-transform">
        <div className="wa-bounce">
          <Image
            src={candidates[srcIndex]}
            alt="WhatsApp"
            width={56}
            height={56}
            onError={onImgError}
            className="h-14 w-14 object-contain"
            priority
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes wa-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .wa-bounce {
          animation: wa-bob 2s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </a>
  );
}
