import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-2">
              <BrandLogo width={280} height={84} className="h-16 md:h-20 w-auto object-contain" onDark />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">
              <span className="text-white">Build Home Enterprises</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Specialist in hand-finished composite stone bathware. Premium quality for modern living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products/baths" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Baths
                </Link>
              </li>
              <li>
                <Link href="/products/basins" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Basins
                </Link>
              </li>
              <li>
                <Link href="/products/countertops" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Counter Tops
                </Link>
              </li>
              <li>
                <Link href="/products/taps" className="text-gray-300 hover:text-gold transition-colors text-sm">
                  Taps
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-300 text-sm">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>AT+PO-Vishnupur Titidha, PS-Barati OP, City-Hajipur, Vaishali, Bihar</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <FiPhone className="flex-shrink-0" />
                <span>+91 9430400013</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Build Home Enterprises. All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
