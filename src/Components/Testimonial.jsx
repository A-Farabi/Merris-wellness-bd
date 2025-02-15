// Testimonial.jsx
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Ali H.",
    review: "Excellent quality and fast delivery. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Fatima S.",
    review: "Loved the freshness and taste. Will definitely order again!",
    rating: 5
  },
  {
    id: 3,
    name: "Yusuf A.",
    review: "Best dates I've ever had. Customer service was great too.",
    rating: 4
  }
];

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#F5F5F5] lg:px-[20%]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#4E342E] mb-8">
          Customer Testimonials
        </h2>

        {testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
              >
                <div className="text-amber-600 mb-2">
                  {"⭐".repeat(testimonial.rating)}
                </div>
                <p className="text-gray-700 italic mb-4">
                  {testimonial.review}
                </p>
                <h4 className="font-bold text-[#4E342E]">
                  - {testimonial.name}
                </h4>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="mt-10 text-2xl text-gray-600 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            No Reviews yet, but will be soon Inshallah.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
