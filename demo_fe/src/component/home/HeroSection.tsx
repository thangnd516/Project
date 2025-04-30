
export const HeroSection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-gray-200 rounded-lg p-8 relative" style={{minHeight: "400px"}}>
            <div className="max-w-md">
              <div className="bg-blue-600 text-white inline-block px-2 py-1 rounded text-sm mb-2">Healthy Habits Start Here</div>
              <h2 className="text-4xl font-bold mb-2">Boost Immunity, <br/>Healthy Life</h2>
              <p className="text-lg text-gray-600 mb-4">Discover HealthMart</p>
              <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded inline-block hover:bg-blue-700">Get yours Today</a>
            </div>
          </div>
          
          <div className="grid grid-rows-3 gap-4">
            <div className="bg-purple-100 rounded-lg p-4 relative flex items-center">
              <div>
                <div className="text-sm text-purple-700 mb-1">Save Up to 25% OFF</div>
                <h3 className="text-md font-semibold">Get Healthy With Exclusive Medical Product Deals!</h3>
              </div>
            </div>
            
            <div className="bg-yellow-100 rounded-lg p-4 relative flex items-center">
              <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">OFFER!</div>
              <div>
                <h3 className="text-md font-semibold">Premium Health Gummies</h3>
              </div>
            </div>
            
            <div className="bg-blue-100 rounded-lg p-4 relative flex items-center">
              <div>
                <div className="text-sm text-blue-700 mb-1">Save 15% OFF</div>
                <h3 className="text-md font-semibold">Premium Wellness Products</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};