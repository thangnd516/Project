import React from 'react';

type TestimonialItemProps = {
  quote: string;
  name: string;
  image: string;
};

const TestimonialItem: React.FC<TestimonialItemProps> = ({ quote, name, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <p className="text-sm text-gray-600 mb-4">“{quote}”</p>
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-2 object-cover" />
      <h4 className="font-medium">{name}</h4>
    </div>
  );
};

export default TestimonialItem;
