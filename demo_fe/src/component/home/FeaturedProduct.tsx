
export const FeaturedProduct = () => {
    return (
      <section className="py-6">
        <div className="container mx-auto">
          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-between relative">
            <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">SAVE 15% OFF</div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Caffeine Choco Body Butter</h3>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    );
  };