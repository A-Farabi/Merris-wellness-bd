// Contact.jsx
import { motion } from 'framer-motion';
import { BiPhoneCall } from 'react-icons/bi';
import { FaFacebook } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-8 bg-[#FAFAFA] px-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#4E342E] mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We are here to assist you. Feel free to reach out through any of the following methods:
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Direct Call */}
          <motion.a 
            href="tel:+8801759627617" 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BiPhoneCall className="text-amber-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-[#4E342E] mb-2">Direct Call</h3>
            <p className="text-gray-600">+880 1759-627617</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a 
            href="https://wa.me/8801759627617" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FiMessageCircle className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-[#4E342E] mb-2">WhatsApp</h3>
            <p className="text-gray-600">Chat with us on WhatsApp</p>
          </motion.a>

          {/* Facebook Page */}
          <motion.a 
            href="https://www.facebook.com/Merris.Group" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaFacebook className="text-blue-600 w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold text-[#4E342E] mb-2">Facebook Page</h3>
            <p className="text-gray-600">Connect with us on Facebook</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
