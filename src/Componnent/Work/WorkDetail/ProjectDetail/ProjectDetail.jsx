import React, { useState, useEffect } from "react";
import image1 from "../../../../assets/images/image1.png";
import web1 from "../../../../assets/images/web1.png";
import web2 from "../../../../assets/images/web2.png";
import web3 from "../../../../assets/images/web3.png";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const slides = [web1, image1, web2, web3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const userListAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-color text-white min-h-screen">
      {/* Breadcrumb */}
      <p className="text-center py-10 text-xl tracking-wide mb-6">
        <i>Home / Blog / Detail</i>
      </p>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Understanding Tailwind CSS: A Beginner’s Guide
        </h1>
        {/* Website Link Preview */}
        <div className=" bg-gray-900 text-white rounded-lg shadow-md p-6 text-center my-6">
          <h2 className="text-2xl font-bold mb-2">Explore the Full Project</h2>
          <p className="text-base mb-4">
            Dive deeper into the project details, see live previews, and
            discover how it was built step-by-step.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <a
              className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded hover:bg-sky-900 transition duration-300"
              href="https://www.youtube.com/watch?v=Z1MuP27SdjI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
            <a
              className="inline-block bg-sky-900 text-white font-medium py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
              href="https://www.youtube.com/watch?v=Z1MuP27SdjI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          className="relative w-full mt-5"
          variants={userListAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Carousel Wrapper */}
          <div className="relative h-80 overflow-hidden rounded-lg md:h-[600px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                />
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </motion.div>

        {/* Blog Metadata */}
        <div className="flex justify-between items-center text-gray-400 text-sm mb-8 mt-5">
          <p>
            Published on: <span className="text-blue-400">May 02 2025</span>
          </p>
          <p>
            Author: <span className="text-blue-400">Seang Kongheng</span>
          </p>
        </div>

        {/* Blog Content */}
        <div className="text-gray-300 leading-relaxed">
          <p className="mb-4">
            Tailwind CSS is a utility-first CSS framework that allows developers
            to build modern and responsive designs quickly. It provides a set of
            pre-defined classes that can be directly applied to HTML elements,
            eliminating the need to write custom CSS for most use cases.
          </p>
          <p className="mb-4">
            In this guide, we’ll explore the basics of Tailwind CSS, how to set
            it up in your project, and some tips for using it effectively.
            Whether you’re a beginner or an experienced developer, Tailwind CSS
            can help you streamline your workflow and create beautiful designs
            effortlessly.
          </p>
          <p className="mb-4">
            One of the key benefits of Tailwind CSS is its flexibility. You can
            customize the framework to match your project’s design requirements
            by modifying the configuration file. Additionally, Tailwind CSS
            supports responsive design out of the box, making it easy to create
            layouts that look great on any device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
