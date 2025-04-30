import React from 'react';

const BrandLogos: React.FC = () => {
  const brands: string[] = [
    "Good Nature",
    "Selena Gomez",
    "Modern Wellness",
    "Modern Gallery",
    "Rootcore",
    "Golden Gallery"
  ];

  return (
    <section className="py-8 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <div className="font-bold text-sm">{brand}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
