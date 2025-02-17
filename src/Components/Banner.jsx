import { motion } from 'framer-motion';
import bannerBg from '../assets/Banner/gradient-background-02.webp';

const Banner = () => {
  return (
    <div 
      className="relative h-screen overflow-hidden" 
      style={{ 
        backgroundImage: `url(${bannerBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Textured Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Merris Wellness
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          আমরা কিছু উদ্যমী ইয়াং স্টুডেন্ট পোলাপান রমজানে ন্যায্যমূল্যে খেজুর সরবরাহের উদ্যোগ নিয়েছি।  
          এর পাশাপাশি, ফাউন্ডেশন প্রজেক্ট হিসেবে আমরা ইনশাল্লাহ **রমজানের অত্যাবশ্যকীয় পণ্য** (মসুর ডাল, চানা, চানার ডাল) ভ্যানে বিক্রি করবো।
        </motion.p>

        <motion.a 
          href="#products" 
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Shop Now
        </motion.a>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 left-10 w-20 h-20 bg-teal-500 rounded-full opacity-70"
        animate={{ y: [0, 15, 0], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      ></motion.div>

      <motion.div 
        className="absolute top-20 right-20 w-12 h-12 bg-cyan-400 rounded-full opacity-70"
        animate={{ y: [0, 20, 0], rotate: [0, -360, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, delay: 0.5 }}
      ></motion.div>

      <motion.div 
        className="absolute bottom-20 right-32 w-16 h-16 bg-indigo-300 rounded-full opacity-70"
        animate={{ y: [0, 10, 0], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
      ></motion.div>
    </div>
  );
};

export default Banner;
