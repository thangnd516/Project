import CategoryItem from "./CategoryItem";

// Categories Section Component
export const CategoriesSection = () => {
    const categories = [
      { icon: '🩺', name: 'Health Care' },
      { icon: '🧴', name: 'Skin Care' },
      { icon: '👶', name: 'Baby Care' },
      { icon: '🥗', name: 'Diet Care' },
      { icon: '💊', name: 'Medicines' },
      { icon: '🩹', name: 'Medical Items' }
    ];
  
    return (
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Categories</h2>
          <div className="grid grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryItem key={index} icon={category.icon} name={category.name} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  