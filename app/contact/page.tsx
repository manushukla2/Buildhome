'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactPage() {
  // No form on this page per request; showing map instead

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1920&q=80"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-wider mb-4">
              CONTACT US
            </h1>
            <p className="text-xl text-white">
              We&apos;d love to hear from you
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information & Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Have a question about our products or services? Our expert team is here 
              to help. Reach out to us using any of the methods below.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-gold bg-opacity-10 p-3 rounded-full">
                  <FiPhone className="text-gold text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 9430400013</p>
                  <p className="text-gray-500 text-sm">Mon-Fri: 9am-6pm</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-gold bg-opacity-10 p-3 rounded-full">
                  <FiMapPin className="text-gold text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">AT+PO-Vishnupur Titidha, PS-Barati OP</p>
                  <p className="text-gray-600">City-Hajipur, Vaishali, Bihar</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-gold bg-opacity-10 p-3 rounded-full">
                  <FiClock className="text-gold text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Trade Accounts */}
            <div className="bg-primary text-white p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-2">Trade Accounts</h3>
              <p className="text-gray-300 mb-4">
                Are you a trade professional? We offer special pricing and terms for 
                registered trade accounts.
              </p>
              <Button href="/trade" variant="secondary" size="sm">
                Learn More →
              </Button>
            </div>
          </div>

          {/* Map Column */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg h-[600px] bg-white">
              <iframe
                title="Build Home Location Map"
                src="https://www.google.com/maps?q=AT+PO+Vishnupur+Titidha+PS-Barati+OP+Hajipur+Vaishali+Bihar&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Build Home address"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
