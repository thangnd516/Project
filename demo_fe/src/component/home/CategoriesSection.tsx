import CategoryItem from "./CategoryItem";

// Categories Section Component
export const CategoriesSection = () => {
  const categories = [
    { icon: 'https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Cat-02.png', name: 'Health Care', link: '#' },
    { icon: 'https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Cat-04.png', name: 'Skin Care', link: '#' },
    { icon: 'https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Cat-01.png', name: 'Baby Care', link: '#' },
    { icon: 'https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Cat-06.png', name: 'Oral care', link: '#' },
    { icon: 'https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/Cat-03.png', name: 'Medicines', link: '#' },
    { icon: 'https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/03/cat-07.png', name: 'Moisturiser', link: '#' }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold text-center mb-6">Top Categories</h2>
        <div className="flex justify-center flex-wrap gap-20">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="flex flex-row gap-[15px] items-center text-center hover:text-green-600"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-2">
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
