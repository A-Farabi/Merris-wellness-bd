// Testimonial.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Satisfied Customer',
    quote: 'Merris Wellness dates have completely transformed my snack game. The Medjool dates are my absolute favorite!',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Happy Shopper',
    quote: 'These dates are delicious and the perfect healthy alternative to sugary snacks. I buy them every week.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    title: 'Gourmet Enthusiast',
    quote: 'I love the stuffed dates! They’re a perfect treat for my guests. Everyone asks where I got them.',
    imageUrl: 'https://via.placeholder.com/150'
  }
];

const Testimonial = () => {
  return (
    <div className="bg-amber-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-lg rounded-lg p-6 max-w-xs transform transition duration-300 hover:scale-105">
              <img 
                src={testimonial.imageUrl} 
                alt={testimonial.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-amber-600"
              />
              <p className="text-lg text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
