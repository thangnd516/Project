import React from 'react';
import ProductCard, { ProductCardProps } from './ProductCard';

export const TopRatedProducts: React.FC = () => {
  const rawProducts = [
    {
      name: "Himalaya Baby Body Lotion 400 ml Pack Of 2",
      image: "/api/placeholder/100/100",
      rating: 5,
      reviews: 12,
      price: "18.99"
    },
    {
      name: "InCellDerm Deep Moisturization Body Butter",
      image: "/api/placeholder/100/100",
      rating: 5,
      reviews: 27,
      price: "22.50"
    },
    {
      name: "Kodu Premium Ayurvedic Balm–Women's Wellness",
      image: "/api/placeholder/100/100",
      rating: 5,
      reviews: 15,
      price: "12.75"
    },
    {
      name: "Infinity Wellness Premium Natural Nose Breather",
      image: "/api/placeholder/100/100",
      rating: 5,
      reviews: 31,
      price: "24.99"
    },
    {
      name: "Zencura Big Display Digital Blood Pressure",
      image: "/api/placeholder/100/100",
      rating: 5,
      reviews: 18,
      price: "54.49"
    },
    {
      name: "Kids Ultimate Air Copper Mask Nude-Pink",
      image: "/api/placeholder/100/100",
      rating: 5,
      reviews: 22,
      price: "12.99"
    }
  ];

  // ✅ Convert to expected type
  const products: ProductCardProps['product'][] = rawProducts.map((p) => ({
    title: p.name,
    image: p.image,
    price: `$${p.price}`,
    rating: p.rating,
    reviews: p.reviews,
    badge: 'HOT' // You can randomize this if needed
  }));

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Rated Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
