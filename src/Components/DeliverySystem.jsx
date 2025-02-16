// DeliverySystem.jsx
import { motion } from 'framer-motion';
import { MapPin, Truck } from 'lucide-react';

const DeliverySystem = () => {
  return (
    <section id="delivery" className="py-16 bg-[#FFF8E1]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#4E342E] mb-8">
          ডেলিভারি সিস্টেম
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          আপনার সুবিধামত পণ্য সংগ্রহ করার জন্য আমাদের দুটি পদ্ধতি রয়েছে:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Option 1: Pickup from School */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MapPin className="text-amber-600 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold text-[#4E342E] mb-4">
              স্কুলের সামনে থেকে সংগ্রহ
            </h3>
            <p className="text-gray-700">
              আপনি আপনার অর্ডারকৃত পণ্যটি <strong>বিড্যানিকেতন স্কুল</strong> এর সামনে থেকে সংগ্রহ করতে পারেন। 
              স্থানটিতে পৌঁছানোর পর <strong>০১৭৪৯৪১৩২৮০</strong> নম্বরে কল করুন। 
              আমাদের এজেন্ট সেখানে অবস্থান করেন এবং <strong>৫ মিনিটের মধ্যে</strong> আপনার হাতে পণ্যটি তুলে দেবেন।
            </p>
          </motion.div>

          {/* Option 2: Van Sale at Market */}
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
              <strong>২০ ফেব্রুয়ারি</strong> থেকে আমরা <strong>মদিনা মার্কেট</strong> এলাকায় ভ্যানে পণ্য বিক্রয় করবো।
              আপনি সরাসরি সেখানে গিয়ে পণ্য ক্রয় করতে পারেন।
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySystem;
