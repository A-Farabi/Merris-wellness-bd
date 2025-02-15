// Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-amber-600 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Logo or Brand Name */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Merris Wellness</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-8 mb-6">
          <a href="#home" className="text-white hover:text-amber-300 transition duration-300">Home</a>
          <a href="#products" className="text-white hover:text-amber-300 transition duration-300">Products</a>
          <a href="#contact" className="text-white hover:text-amber-300 transition duration-300">Contact</a>
          <a href="#testimonials" className="text-white hover:text-amber-300 transition duration-300">Testimonials</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.facebook.com/merriswellness" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition duration-300 text-3xl">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/merriswellness" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition duration-300 text-3xl">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/merriswellness" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition duration-300 text-3xl">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/merriswellness" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 transition duration-300 text-3xl">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-200">
          <p>&copy; 2025 Merris Wellness. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
