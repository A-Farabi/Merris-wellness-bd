// DeliverySystem.jsx
import { motion } from 'framer-motion';
import { Truck, Home } from 'lucide-react';

const DeliverySystem = () => {
  return (
    <section id="delivery" className="py-16 bg-[#FFF8E1]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#4E342E] mb-8">
          ডেলিভারি সিস্টেম
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          আপনার অর্ডারকৃত পণ্য এখন <span className="font-bold text-[#D84315]">বিনামূল্যে হোম ডেলিভারি</span> সিস্টেমের মাধ্যমে পেয়ে যান!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Option 1: Free Home Delivery */}
          <motion.div 
            className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm px-3 py-1 rounded-bl-lg shadow-md">
              ফ্রি ডেলিভারি!
            </div>
            <Home className="text-green-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#4E342E] mb-4">
              বিনামূল্যে হোম ডেলিভারি
            </h3>
            <p className="text-gray-700">
              আপনার অর্ডার করা পণ্য আমরা <span className="font-semibold">বিনামূল্যে</span> আপনার ঠিকানায় পৌঁছে দেবো! 
              দ্রুত এবং নিরাপদ ডেলিভারি নিশ্চিত করতে আমাদের বিশ্বস্ত ডেলিভারি টিম সর্বদা প্রস্তুত।
            </p>
          </motion.div>

          {/* Option 2: Van Sale at Modina Market */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Truck className="text-amber-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#4E342E] mb-4">
              ভ্যানে বিক্রয় (মদিনা মার্কেট)
            </h3>
            <p className="text-gray-700">
              <span className="font-semibold">২০ ফেব্রুয়ারি</span> থেকে আমরা <span className="font-semibold">মদিনা মার্কেট</span> এলাকায় ভ্যানে পণ্য বিক্রয় করবো। 
              সরাসরি এসে পছন্দের পণ্যটি কিনে নিন!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySystem;
