import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <a href="/">HengDev</a>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="home" smooth={true} duration={300} className="hover:text-gray-400 cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} duration={300} className="hover:text-gray-400 cursor-pointer">
              About
            </Link>
            <Link to="services" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Services
            </Link>
            <Link to="work" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Work
            </Link>
            <Link to="blog" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Blog
            </Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
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
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-4 px-4 py-4">
            <Link
              to="home"
              smooth={true}
              duration={300}
              className="hover:text-gray-400 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={300}
              className="hover:text-gray-400 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Work
            </Link>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-gray-400 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;