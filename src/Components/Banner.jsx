import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-[#3E2723] to-[#4E342E]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1603349381076-dfcbf1a2c67a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGRhdGVzfGVufDB8fHx8MTY5MjM2NzU0Mw&ixlib=rb-1.2.1&q=80&w=1080')" 
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Merris Wellness
        </motion.h1>

        <motion.p 
          className="text-xl md:text-3xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          আমরা কিছু উদ্যমী ইয়াং স্টুডেন্ট পোলাপান রমজানে ন্যায্যমূল্যে খেজুর সরবরাহের উদ্যোগ নিয়েছি।  
          এর পাশাপাশি, ফাউন্ডেশন প্রজেক্ট হিসেবে আমরা ইনশাল্লাহ রমজানের অত্যাবশ্যকীয় পণ্য (মসুর ডাল, চানা, চানার ডাল) ভ্যানে বিক্রি করবো।
        </motion.p>

        <motion.a 
          href="#products" 
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          অর্ডার করুন
        </motion.a>
      </div>

      {/* Animated Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 left-10 w-16 h-16 bg-amber-500 rounded-full opacity-50 animate-bounce"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: -20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-20 right-20 w-10 h-10 bg-amber-400 rounded-full opacity-50"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      ></motion.div>
    </section>
  );
};

export default Banner;
