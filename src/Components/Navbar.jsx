import { useState } from 'react';
import logo from '../assets/logo/merris logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#4E342E] shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Merris Wellness" className="h-10 w-10 mr-2" />
          <span className="text-2xl font-bold text-[#F5F5F5]">
            Merris Wellness
          </span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-[#F5F5F5] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-[#4E342E] md:bg-transparent transition-all duration-300`}
        >
          <li className="border-b md:border-none">
            <button
              className="block w-full text-left py-2 px-4 text-[#F5F5F5] hover:text-[#A1887F]"
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
          </li>
          <li className="border-b md:border-none">
            <button
              className="block w-full text-left py-2 px-4 text-[#F5F5F5] hover:text-[#A1887F]"
              onClick={() => scrollToSection('products')}
            >
              Products
            </button>
          </li>
          <li className="border-b md:border-none">
            <button
              className="block w-full text-left py-2 px-4 text-[#F5F5F5] hover:text-[#A1887F]"
              onClick={() => scrollToSection('testimonials')}
            >
              Testimonials
            </button>
          </li>
          <li className="border-b md:border-none">
            <button
              className="block w-full text-left py-2 px-4 text-[#F5F5F5] hover:text-[#A1887F]"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
