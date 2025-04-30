import React from 'react';
import TestimonialItem from './TestimonialItem';

type Testimonial = {
  quote: string;
  name: string;
  image: string;
};

const CustomerTestimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Absolutely natural items with friendly staff, good service, nice selection, and always stocked with products!",
      name: "Patricia Miller",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "I chose this site for healthcarelife staff, and it really goes well above. What a blessed place for natural items.",
      name: "Abbie Peters",
      image: "/api/placeholder/64/64"
    },
    {
      quote: "Great service, wide product selection, had delivery, and friendly staff. I will recommend this retailer.",
      name: "Harold Shaw",
      image: "/api/placeholder/64/64"
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say!</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem 
              key={index} 
              quote={testimonial.quote} 
              name={testimonial.name} 
              image={testimonial.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
