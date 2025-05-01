import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductItem {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating: number;
  tags?: string[];
}

const tabs = ["Skin Care", "Health Care", "Accessories"];

const mockProducts: ProductItem[] = [
  {
    id: 1,
    name: "Himalaya Baby Body Lotion 400 ml Pack Of 2",
    image: "/api/placeholder/200/200",
    price: 8,
    oldPrice: 9.2,
    discount: 13,
    rating: 5
  },
  {
    id: 2,
    name: "mCaffeine Deep Moisturization- Body Butter",
    image: "/api/placeholder/200/200",
    price: 9,
    oldPrice: 10.5,
    discount: 14,
    rating: 5
  },
  {
    id: 3,
    name: "Liveasy Diabetic Protein - Sugar Management",
    image: "/api/placeholder/200/200",
    price: 4.5,
    oldPrice: 5,
    discount: 10,
    rating: 5
  },
  {
    id: 4,
    name: "Kudos Shatavari Ayurvedic Brahmi Women’s Wellness",
    image: "/api/placeholder/200/200",
    price: 4,
    oldPrice: 4.6,
    discount: 13,
    rating: 5
  },
  {
    id: 5,
    name: "Pharmeasy Lumbar Sacro Support Belt-Pain Relief",
    image: "/api/placeholder/200/200",
    price: 18,
    oldPrice: 20,
    discount: 10,
    rating: 5
  },
  {
    id: 6,
    name: "Vicks VapoRub Cold & Cough Relief Balm 25 ml",
    image: "/api/placeholder/200/200",
    price: 1.3,
    rating: 5
  }
];

export const PopularCategorySlider = () => {
  const [selectedTab, setSelectedTab] = useState("Skin Care");

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Popular Categories</h2>
        <div className="flex justify-center gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                selectedTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-blue-700 text-white rounded-full shadow">
            <ChevronLeft size={18} />
          </button>
          <div className="grid grid-cols-6 gap-4 overflow-hidden">
            {mockProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center hover:text-green-600"
              >
                <div className="relative w-full mb-2">
                  {product.discount && (
                    <span className="absolute top-0 left-0 bg-blue-700 text-white text-xs px-2 rounded">
                      -{product.discount}%
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-contain"
                  />
                </div>
                <div className="text-sm font-medium line-clamp-2 mb-1">{product.name}</div>
                <div className="flex justify-center text-yellow-400 text-sm mb-1">★★★★★</div>
                <div className="text-sm text-gray-500 line-through">{product.oldPrice && `$${product.oldPrice}`}</div>
                <div className="text-green-600 font-semibold text-lg">${product.price}</div>
                <button className="mt-2 text-sm flex items-center justify-center gap-2 border px-4 py-2 rounded-full">
                  🛒 Add To Cart
                </button>
              </div>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-green-600 text-white rounded-full shadow">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
