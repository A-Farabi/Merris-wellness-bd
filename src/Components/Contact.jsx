// Contact.jsx
import React from 'react';
import { FaFacebook, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-amber-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">যোগাযোগের জন্য উপায়</h2>
        <p className="text-lg text-gray-600 mb-12">আমাদের সাথে সরাসরি যোগাযোগ করতে, আপনি নিচের মাধ্যমগুলো ব্যবহার করতে পারেন:</p>

        <div className="flex justify-center gap-8">
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-64 text-center hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="text-5xl text-amber-600 mb-4">
              <FaPhoneAlt />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">ফোনে যোগাযোগ করুন</h3>
            <p className="text-gray-600">আমাদের হটলাইন: <a href="tel:+8801234567890" className="text-amber-600">+8801234567890</a></p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-64 text-center hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="text-5xl text-green-500 mb-4">
              <FaWhatsapp />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp মাধ্যমে যোগাযোগ করুন</h3>
            <p className="text-gray-600">আমাদের WhatsApp: <a href="https://wa.me/8801234567890" className="text-green-500">+8801234567890</a></p>
          </div>

          {/* Facebook */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-64 text-center hover:shadow-xl transform transition duration-300 hover:scale-105">
            <div className="text-5xl text-blue-600 mb-4">
              <FaFacebook />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Facebook এ যোগাযোগ করুন</h3>
            <p className="text-gray-600">আমাদের Facebook পেজ: <a href="https://www.facebook.com/merriswellness" className="text-blue-600">Merris Wellness</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
