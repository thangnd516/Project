
export type ProductCardProps = {
  product: {
    id: number,
    title: string;
    image: string;
    badge?: 'NEW' | 'SALE' | 'HOT';
    price: string;
    oldPrice?: string;

  };
  viewMode?: 'grid' | 'list';
};


import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const { id, title, image, badge, price, oldPrice } = product;
  const navigate = useNavigate();
  const isList = viewMode === 'list';

  return (
    <div  onClick={() => navigate(`/product/${id}`)}  className={`${isList ? 'flex gap-4 items-start' : 'flex flex-col'} bg-white rounded-lg shadow overflow-hidden h-full`}>
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className={isList ? 'w-32 h-32 object-cover' : 'w-full h-48 object-cover'}
        />
        {!isList && badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-xs text-white rounded ${badge === 'NEW' ? 'bg-green-500' :
                badge === 'SALE' ? 'bg-red-500' :
                  'bg-orange-500'
              }`}
          >
            {badge}
          </span>
        )}
        {!isList && (
          <button className="absolute top-2 right-2 p-1 bg-white rounded-full hover:text-red-500">
            <Heart size={18} />
          </button>
        )}
      </div>

      {/* Text Content */}
      <div className={`${isList ? 'flex-1' : 'p-4 flex flex-col grow'} p-4`}>
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h3>

        {/* Price */}
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-blue-600">{price}</span>
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">{oldPrice}</span>
          )}
        </div>

        {/* Add to Cart */}
        <div className={`mt-auto ${isList ? 'flex justify-end' : ''}`}>
          <button
            className={`h-10 ${isList ? 'px-4' : 'w-full'
              } bg-[#f7f7f7] text-black rounded-3xl flex items-center justify-center hover:bg-[#2b57a2] hover:text-white`}
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
