export const FeaturedProduct = () => {
  return (
    <div style={{padding: "0 69px"}} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left block: MamyPoko Pants Deal */}
      <div className="relative rounded-lg overflow-hidden h-56 md:h-64">
        <img
          src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Banner-01.jpg"
          alt="MamyPoko"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center items-start p-6 text-white">
          <p className="text-sm mb-1">Up to 45% OFF</p>
          <h3 className="text-xl font-bold leading-snug mb-4">Don't Miss Out On<br />MamyPoko Pants Deals!</h3>
          <a href="#" className="bg-[#33a58e] text-white text-sm px-4 py-2 rounded-full hover:bg-[#2b57a2] transition">
            Buy Now &gt;
          </a>
        </div>
      </div>

      {/* Right block: Caffeine Body Butter */}
      <div className="relative rounded-lg overflow-hidden h-56 md:h-64">
        <img
          src="https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Banner-02.jpg"
          alt="Caffeine Choco Body Butter"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col justify-center items-start p-6 text-white">
          <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full mb-2">FLAT 15% OFF</span>
          <h3 className="text-xl font-bold leading-snug">Caffeine Choco<br />Body Butter</h3>
        </div>
      </div>
    </div>
  );
};
