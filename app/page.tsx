import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import ProductCard from '@/components/ProductCard';
// 3D demo removed per request

export default function Home() {
  const featuredProducts = [
    {
      id: '1',
      name: 'The Oval Bath',
      description: 'Elegant freestanding bath with smooth curves and modern design. Perfect for contemporary bathrooms.',
      price: '£2,499',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
      category: 'BATHS',
    },
    {
      id: '2',
      name: 'Ravello Basin',
      description: 'Perfectly designed basin with generous capacity and beautifully contoured lines.',
      price: '£899',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      category: 'BASINS',
    },
    {
      id: '3',
      name: 'Chrome Waterfall Tap',
      description: 'Modern waterfall tap with premium chrome finish and exceptional build quality.',
      price: '£349',
  image: '/chromewaterfalltap.jpg',
      category: 'TAPS',
    },
    {
      id: '4',
      name: 'Marble Counter Top',
      description: 'Luxurious marble counter top with natural stone finish and timeless elegance.',
      price: '£1,599',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
      category: 'COUNTERTOPS',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="BUILD HOMES"
        subtitle="Experience luxury with our hand-finished composite stone bathware"
        images={[
          'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1920&q=80',
          'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80',
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&q=80',
          'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80',
          'https://images.unsplash.com/photo-1564540583246-934409427776?w=1920&q=80',
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
        ]}
        height="h-[600px]"
      />

      {/* 3D animation section intentionally removed */}

      {/* Guarantee Banner */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lux-section px-6 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <p className="text-lg">
              <span className="font-semibold">SPECIALIST</span> IN HAND FINISHED COMPOSITE STONE BATHWARE
            </p>
            <p className="text-lg">
              <span className="font-semibold text-gold">PREMIUM QUALITY</span> BY BUILD HOME
            </p>
          </div>
        </div>
      </div>

      {/* Ravello Basin Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductShowcase
          title="RAVELLO"
          description="Perfectly designed to complement our Picasso baths this basin boasts a generous capacity and beautifully contoured lines. With its substantial form and touchable finish our Picasso solid basin is ideal for modern and elegant bathrooms."
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80"
          
        />
      </div>

      {/* TEC Artisan Showcase */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lux-section px-6 md:px-10 py-10">
          <ProductShowcase
            title="TEC ARTISAN"
            description="Basin mixer with remote features, allowing you to single lever handle to control the flow and temperature of the water. This basin tap has been made from solid high polished chrome finish. Comes complete with basin waste."
            image="/tecartisantap.jpg"
            
            reverse={true}
          />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            FEATURED PRODUCTS
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our handpicked selection of premium bathroom accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">
              WHY CHOOSE BUILD HOME
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-gold text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">TIMELY DELIVERY</h3>
              <p className="text-gray-300">Reliable shipping and on-time delivery for every order</p>
            </div>
            
            <div className="text-center">
              <div className="text-gold text-5xl mb-4">★★★★★</div>
              <h3 className="text-xl font-semibold mb-2">PREMIUM QUALITY</h3>
              <p className="text-gray-300">
                Hand-finished composite stone crafted to perfection
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-gold text-5xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">EXPERT SERVICE</h3>
              <p className="text-gray-300">
                Professional advice and support from our specialist team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
