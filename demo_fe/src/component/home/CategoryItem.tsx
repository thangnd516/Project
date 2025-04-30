// CategoryItem.tsx
import React from 'react';

type CategoryItemProps = {
  icon: string;
  name: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, name }) => {
  return (
    <a href="#" className="bg-white rounded-lg shadow p-4 flex flex-col items-center hover:shadow-lg transition">
      <span className="text-3xl mb-2">{icon}</span>
      <span className="font-medium">{name}</span>
    </a>
  );
};

export default CategoryItem;
