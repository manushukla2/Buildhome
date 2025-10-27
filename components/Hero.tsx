"use client";

import Image from 'next/image';
import Button from './Button';
import { useEffect, useState } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  images?: string[]; // optional carousel images for background
  ctaText?: string;
  ctaLink?: string;
  height?: string;
  overlay?: boolean;
  interval?: number; // ms for autoplay when images[] provided
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  images,
  ctaText,
  ctaLink = '/products',
  height = 'h-[600px]',
  overlay = true,
  interval = 4500,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className={`relative ${height} w-full overflow-hidden`}>
      {/* Background: single image or fading carousel */}
      {images && images.length > 0 ? (
        <div className="absolute inset-0">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={title}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      ) : (
        <Image
          src={backgroundImage || ''}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4 tracking-wider animate-fadeIn">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl animate-fadeIn">
            {subtitle}
          </p>
        )}
         {ctaText && (
           <Button href={ctaLink} variant="secondary" size="lg" className="animate-fadeIn">
             {ctaText}
           </Button>
         )}
      </div>
    </div>
  );
};

export default Hero;
