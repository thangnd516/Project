import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

export type ProductCardProps = {
  product: {
    title: string;
    image: string;
    badge?: 'NEW' | 'SALE' | 'HOT';
    price: string;
    oldPrice?: string;
    rating: number;
    reviews: number;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, image, badge, price, oldPrice, rating, reviews } = product;

  return (
    <div className="flex flex-col justify-between h-full bg-white rounded-lg shadow overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-xs text-white rounded ${
              badge === 'NEW' ? 'bg-green-500' :
              badge === 'SALE' ? 'bg-red-500' :
              'bg-orange-500'
            }`}
          >
            {badge}
          </span>
        )}
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full hover:text-red-500">
          <Heart size={18} />
        </button>
      </div>

      {/* Text Content */}
      <div className="p-4 flex flex-col grow">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>

        {/* Stars */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <div key={i}>★</div>
            ))}
            {rating % 1 > 0 && <div>★</div>}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
              <div key={i + Math.ceil(rating)} className="text-gray-300">★</div>
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-1">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-blue-600">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">{oldPrice}</span>
          )}
        </div>

        {/* Add to Cart Button (Always at bottom) */}
        <div className="mt-auto">
          <button className="w-full h-10 bg-[#f7f7f7] text-black rounded-3xl flex items-center justify-center hover:bg-[#2b57a2] hover:text-white">
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
