// FAQ.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "পণ্য অর্ডার করার পদ্ধতি কী?",
    answer: "এই ওয়েবসাইটে সকল ধরণের কন্টাক্ট ডিটেইলস দেয়া আছে, অর্ডার করতে হোয়াটস্যাপ, ফেইসবুক পেজে ম্যাসেজ কিংবা ডাইরেক্ট কল করতে পারেন। "
  },
  {
    question: "পিকআপের জন্য কোথায় যেতে হবে?",
    answer: "আপনি বিড্যানিকেতন স্কুলের সামনে থেকে পণ্য সংগ্রহ করতে পারেন। পৌঁছানোর পর 01749413280 নম্বরে কল করুন।"
  },
  {
    question: "পেমেন্টের অপশন কি কি?",
    answer: "বর্তমানে আমরা শুধুমাত্র ক্যাশ অন ডেলিভারি (COD) সাপোর্ট করছি। তবে আপনি চাইলে খরচসহ বিকাশ (সেন্ড মানি) করতে পারেন।  "
  },
  {
    question: "ভ্যানে পণ্য বিক্রয় কখন শুরু হবে?",
    answer: "২০ ফেব্রুয়ারি থেকে মদিনা মার্কেট এলাকায় ভ্যানে পণ্য বিক্রয় শুরু হবে।"
  },
  {
    question: "বিক্রিত পণ্য কী ফেরতযোগ্য ?",
    answer: "যেহেতু আমরা ইসলামী অনুশাসন মেনে চলি, তাই আমরা বিক্রিত পণ্য আনন্দের সহিত গ্রহণ করবো। "
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 bg-[#FFF3E0] px-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#4E342E] mb-8">
          সাধারণ জিজ্ঞাসা (FAQ)
        </h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#4E342E]">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-amber-600 w-6 h-6" />
                ) : (
                  <ChevronDown className="text-amber-600 w-6 h-6" />
                )}
              </div>
              {activeIndex === index && (
                <motion.p 
                  className="text-gray-700 mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
