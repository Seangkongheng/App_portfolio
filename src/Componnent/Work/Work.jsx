import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-color h-full py-10 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.h1
          className="text-white mt-5 text-3xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Work
        </motion.h1>

        <motion.div
          className="work-section mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CARD 1 */}
            <motion.div
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 hover:scale-105"
              variants={cardVariants}
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-4xl font-bold text-white">01</h1>
                    <div className="w-12 h-12 bg-gray-700 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                      <i className="fa-solid fa-arrow-right text-xl text-white transform group-hover:rotate-45 transition-transform duration-300"></i>
                    </div>
                  </div>
                  <h3 className="text-blue-400 text-2xl font-semibold mb-2">Web Development</h3>
                  <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                    Featured
                  </span>
                  <p className="text-gray-300 mb-2">
                    Short description goes here. Learn how we boosted engagement with targeted strategies.
                  </p>
                  <p className="text-gray-500 text-sm">Updated: Apr 2025</p>
                </div>
                <div className="mt-6">
                  <a
                    href="/works"
                    className="inline-block text-center w-full px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 hover:scale-105"
              variants={cardVariants}
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-4xl font-bold text-white">02</h1>
                    <div className="w-12 h-12 bg-gray-700 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                      <i className="fa-solid fa-arrow-right text-xl text-white transform group-hover:rotate-45 transition-transform duration-300"></i>
                    </div>
                  </div>
                  <h3 className="text-blue-400 text-2xl font-semibold mb-2">Web Design</h3>
                  <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                    Featured
                  </span>
                  <p className="text-gray-300 mb-2">
                    Designed responsive and visually engaging web pages that improve user experience.
                  </p>
                  <p className="text-gray-500 text-sm">Updated: Apr 2025</p>
                </div>
                <div className="mt-6">
                  <a
                    href="/works"
                    className="inline-block text-center w-full px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 hover:scale-105"
              variants={cardVariants}
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h1 className="text-4xl font-bold text-white">03</h1>
                    <div className="w-12 h-12 bg-gray-700 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                      <i className="fa-solid fa-arrow-right text-xl text-white transform group-hover:rotate-45 transition-transform duration-300"></i>
                    </div>
                  </div>
                  <h3 className="text-blue-400 text-2xl font-semibold mb-2">Digital Marketing</h3>
                  <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                    Featured
                  </span>
                  <p className="text-gray-300 mb-2">
                    Implemented marketing strategies that increased traffic and sales significantly.
                  </p>
                  <p className="text-gray-500 text-sm">Updated: Apr 2025</p>
                </div>
                <div className="mt-6">
                  <a
                    href="/works"
                    className="inline-block text-center w-full px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
