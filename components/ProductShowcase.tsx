import Image from 'next/image';
import Button from './Button';

interface ProductShowcaseProps {
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  reverse?: boolean;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title,
  description,
  image,
  ctaText,
  ctaLink = '/products',
  reverse = false,
}) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 my-16`}>
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 tracking-wider">
          {title}
        </h2>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {description}
        </p>
        {ctaText && (
          <Button href={ctaLink} variant="primary" size="lg">
            {ctaText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
