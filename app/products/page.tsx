"use client";

import { Suspense, useMemo, useState } from 'react';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { useSearchParams } from 'next/navigation';

const allProducts = [
  // Baths
  {
    id: '1',
    name: 'The Oval Bath',
    description: 'Elegant freestanding bath with smooth curves and modern design.',
    price: '£2,499',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
    category: 'BATHS',
  },
  {
    id: '2',
    name: 'The Square Bath',
    description: 'Contemporary square design with clean lines and spacious interior.',
    price: '£2,299',
    image: 'https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80',
    category: 'BATHS',
  },
  {
    id: '3',
    name: 'The Classic Bath',
    description: 'Timeless design combining traditional elegance with modern comfort.',
    price: '£2,799',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
    category: 'BATHS',
  },
  // Basins
  {
    id: '4',
    name: 'Ravello Basin',
    description: 'Perfectly designed basin with generous capacity and beautiful lines.',
    price: '£899',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    category: 'BASINS',
  },
  {
    id: '5',
    name: 'Countertop Basin',
    description: 'Modern countertop basin with sleek finish and premium quality.',
    price: '£749',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    category: 'BASINS',
  },
  {
    id: '6',
    name: 'Wall Mounted Basin',
    description: 'Space-saving wall mounted design with contemporary styling.',
    price: '£649',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    category: 'BASINS',
  },
  // Taps
  {
    id: '7',
    name: 'Chrome Waterfall Tap',
    description: 'Modern waterfall tap with premium chrome finish.',
    price: '£349',
    image: '/chromewaterfalltap.jpg',
    category: 'TAPS',
  },
  {
    id: '8',
    name: 'TEC Artisan Tap',
    description: 'Basin mixer with remote features and polished chrome finish.',
    price: '£399',
    image: '/tecartisantap.jpg',
    category: 'TAPS',
  },
  {
    id: '9',
    name: 'Gold Basin Tap',
    description: 'Luxurious gold finish tap with elegant design and smooth operation.',
    price: '£449',
    image: '/goldbasintap.jpg',
    category: 'TAPS',
  },
  // Counter Tops
  {
    id: '10',
    name: 'Marble Counter Top',
    description: 'Luxurious marble counter top with natural stone finish.',
    price: '£1,599',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    category: 'COUNTERTOPS',
  },
  {
    id: '11',
    name: 'Composite Stone Counter',
    description: 'Durable composite stone with seamless finish and modern appeal.',
    price: '£1,399',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    category: 'COUNTERTOPS',
  },
  {
    id: '12',
    name: 'Granite Counter Top',
    description: 'Premium granite with exceptional durability and natural beauty.',
    price: '£1,799',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    category: 'COUNTERTOPS',
  },
];

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-gray-500">Loading products…</div>}>
      <ProductsContent />
    </Suspense>
  );
}

function ProductsContent() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const params = useSearchParams();
  const searchTerm = (params.get('q') || '').toLowerCase();

  const categories = ['ALL', 'BATHS', 'BASINS', 'TAPS', 'COUNTERTOPS'];

  const filteredProducts = useMemo(() => {
    const byCategory = selectedCategory === 'ALL' 
      ? allProducts 
      : allProducts.filter((p) => p.category === selectedCategory);
    if (!searchTerm) return byCategory;
    return byCategory.filter((p) =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm)
    );
  }, [selectedCategory, searchTerm]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80"
          alt="Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-wider mb-4">
              OUR PRODUCTS
            </h1>
            <p className="text-xl text-white">
              Premium bathroom accessories for modern living
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="lux-section px-4 py-4 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
            {searchTerm && (
              <span className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-600">
                Searching: <span className="font-semibold">{params.get('q')}</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            {selectedCategory === 'ALL' ? 'All Products' : selectedCategory}
            <span className="text-gray-500 ml-2">({filteredProducts.length} products)</span>
          </h2>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gold text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">FREE DELIVERY</h3>
              <p className="text-gray-300">On all orders over £500</p>
            </div>
            <div>
              <div className="text-gold text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">DEDICATED SUPPORT</h3>
              <p className="text-gray-300">Expert guidance at every step</p>
            </div>
            <div>
              <div className="text-gold text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold mb-2">PREMIUM QUALITY</h3>
              <p className="text-gray-300">Hand-finished to perfection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
