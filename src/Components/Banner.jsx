// Banner.jsx
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div 
      className="relative h-screen bg-cover bg-center" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1598412187259-7f06e5e4233f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5NzN8MHx8c2VhcmNofDJ8fGJhdGhlcnxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080')" 
      }}
    >
      {/* Textured Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Merris Wellness
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Indulge in Nature's Sweetness
        </motion.p>

        <motion.a 
          href="#products" 
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Shop Now
        </motion.a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-amber-500 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-20 right-20 w-10 h-10 bg-amber-400 rounded-full opacity-50 animate-pulse"></div>
    </div>
  );
};

export default Banner;
