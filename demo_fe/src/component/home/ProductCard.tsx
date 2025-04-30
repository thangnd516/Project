// ProductCard.tsx
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
    <div className="bg-white rounded-lg shadow overflow-hidden">
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

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
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
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-blue-600">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">{oldPrice}</span>
          )}
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center hover:bg-blue-700">
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
