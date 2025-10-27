import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
}) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link href={`/products/${id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 text-xs font-semibold rounded">
            {category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
          {/* Price and buttons intentionally removed as requested */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
