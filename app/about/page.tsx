import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80"
          alt="About Build Home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-wider">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Founded with a passion for excellence, Build Homes has been at the forefront of 
              luxury bathroom design for over two decades. We specialize in hand-finished 
              composite stone bathware that combines traditional craftsmanship with modern aesthetics.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Every piece we create is a testament to our commitment to quality, durability, 
              and timeless design. Our artisans pour their expertise into each product, 
              ensuring that your bathroom becomes a sanctuary of comfort and style.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We stand behind every product we sell, giving you complete peace of mind.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80"
              alt="Craftsmanship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="lux-section p-8 text-center">
              <div className="text-gold text-5xl mb-4">★</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Quality First
              </h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product undergoes rigorous testing 
                to ensure it meets our exacting standards.
              </p>
            </div>

            <div className="lux-section p-8 text-center">
              <div className="text-gold text-5xl mb-4">♥</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Customer Focus
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We provide exceptional service and 
                support throughout your journey with us.
              </p>
            </div>

            <div className="lux-section p-8 text-center">
              <div className="text-gold text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously explore new materials and techniques to bring you 
                the finest bathroom accessories available.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Craftsmanship Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80"
              alt="Hand-finished bathware"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Hand-Finished Excellence
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Our composite stone bathware is meticulously hand-finished by skilled 
              artisans who have perfected their craft over many years. Each piece 
              undergoes multiple stages of refinement to achieve the perfect surface.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              The result is a stunning, durable product that combines the natural 
              beauty of stone with the practicality of modern materials. Our products 
              are resistant to stains, scratches, and everyday wear.
            </p>
            <div className="bg-gold bg-opacity-10 border-l-4 border-gold p-6 mt-6">
              <p className="text-primary font-semibold text-lg">
                &ldquo;Every Build Homes product is a masterpiece of design and engineering, 
                created to last a lifetime.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-gold mb-2">10K+</div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">500+</div>
              <p className="text-gray-300">Products</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-2">24/7</div>
              <p className="text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Our Commitment to Sustainability
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            At Build Homes, we believe in creating beautiful products while protecting 
            our planet. Our composite stone materials are eco-friendly and sustainably 
            sourced. We minimize waste in our production process and use energy-efficient 
            manufacturing techniques.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            By choosing Build Homes, you&apos;re not only investing in quality and style, 
            but also supporting a more sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}
