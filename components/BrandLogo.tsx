"use client";

import Image from "next/image";
import { useState } from "react";

export default function BrandLogo({
  width = 160,
  height = 48,
  className = "h-10 w-auto object-contain",
  alt = "Build Home - Trust & Quality",
  onDark = false,
  src: initialSrc = "/logobuildhome.png",
}: {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
  onDark?: boolean;
  src?: string;
}) {
  const [src, setSrc] = useState<string>(initialSrc);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${onDark ? 'invert brightness-0 contrast-100' : ''}`}
      priority
      onError={() => setSrc("/build-home-logo.svg")}
    />
  );
}
