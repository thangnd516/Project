import React from 'react';
import "./index.scss";
export type ProductItemProps = {
  title: string;
  image: string;
  rating: number;
  originalPrice?: string;
  salePrice: string;
};

const ProductItem: React.FC<ProductItemProps> = ({ title, image, rating, originalPrice, salePrice }) => {
  const stars = Array.from({ length: 5 }).map((_, index) => (
    <svg
      key={index}
      className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.148 3.53a1 1 0 00.95.69h3.708c.969 0 1.371 1.24.588 1.81l-3 2.18a1 1 0 00-.364 1.118l1.148 3.53c.3.921-.755 1.688-1.538 1.118l-3-2.18a1 1 0 00-1.176 0l-3 2.18c-.783.57-1.838-.197-1.538-1.118l1.148-3.53a1 1 0 00-.364-1.118l-3-2.18c-.783-.57-.38-1.81.588-1.81h3.708a1 1 0 00.95-.69l1.148-3.53z"></path>
    </svg>
  ));

  return (
    <div className="flex items-start p-4 rounded-lg  w-full">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-contain  mr-4"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-sm font-medium text-[#0d47a1] leading-snug mb-1">
            {title}
          </h3>
          <div className="flex text-yellow-400 mb-1">{stars}</div>
        </div>
        <div className="text-sm text-green-600 font-semibold">${salePrice}</div>
      </div>
    </div>

  );
};

export default ProductItem;
