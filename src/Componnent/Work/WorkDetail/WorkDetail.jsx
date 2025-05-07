import React from "react";
import { motion } from "framer-motion";
import Html from "../../../assets/images/css.png";
import react from "../../../assets/images/react.jpg";
import laravel from "../../../assets/images/laravel.jpg";
import php from "../../../assets/images/php.jpg";




const WorkDetail = () => {
  const userListAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div className="bg-color text-white min-h-screen">
      <p className="text-center py-10 text-xl tracking-wide mb-6">
        <i>Home / work / Detail</i>
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Web Development</h1>
      </div>
      <div className="mt-10 p-6 bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
            variants={userListAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* HTML Card */}
            <a href="/projects">
              <div className="category-project relative w-full h-72 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                <img
                  src={Html}
                  className="h-full w-full object-cover rounded-lg"
                  alt="HTML"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-xl font-bold">HTML  | CSS | JS</p>
                </div>
              </div>
            </a>

            {/* React Card */}
            <a href="/projects">
              <div className="category-project relative w-full h-72 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                <img
                  src={react}
                  className="h-full w-full object-cover rounded-lg"
                  alt="HTML"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-xl font-bold">React JS</p>
                </div>
              </div>
            </a>

            {/* Empty Card 1 */}
            <a href="/projects">
              <div className="category-project relative w-full h-72 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                <img
                  src={php}
                  className="h-full w-full object-cover rounded-lg"
                  alt="HTML"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-xl font-bold">PHP</p>
                </div>
              </div>
            </a>

            {/* Empty Card 2 */}
            <a href="/projects">
              <div className="category-project relative w-full h-72 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                <img
                  src={laravel}
                  className="h-full w-full object-cover rounded-lg"
                  alt="HTML"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300 rounded-lg">
                  <p className="text-white text-xl font-bold">Laravel</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
