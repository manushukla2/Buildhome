"use client";

import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar removed as requested */}

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center py-3 gap-6">
            {/* Logo + Company Name */}
                  <Link href="/" className="flex items-center gap-4" aria-label="Build Homes home">
                    <BrandLogo width={1000} height={160} className="h-20 md:h-24 w-auto object-contain" />
                    <span className="inline-block font-serif font-bold tracking-wider text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-900">
                      Build Home Pvt Ltd
                    </span>
                  </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 ml-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gold transition-colors duration-200 font-medium tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary black navigation bar removed site-wide as requested */}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-gold transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
