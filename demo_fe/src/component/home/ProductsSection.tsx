
  // ProductsSection.tsx
  import React from 'react';
  import ProductCard, { ProductCardProps } from './ProductCard';

  type ProductsSectionProps = {
    title: string;
    products: ProductCardProps['product'][];
    showViewMore?: boolean;
  };

  const ProductsSection: React.FC<ProductsSectionProps> = ({ title, products, showViewMore = false }) => {
    return (
  <section className="py-8">
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        {showViewMore && (
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-4 py-1 rounded mr-3">View More</button>
            <a href="#" className="text-blue-600 hover:underline">All categories</a>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  </section>


    );
  };

  export default ProductsSection;
