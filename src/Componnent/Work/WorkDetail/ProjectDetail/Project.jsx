import React from "react";
import web3 from "../../../../assets/images/web3.png";
import web1 from "../../../../assets/images/web1.png";
import web2 from "../../../../assets/images/web2.png";
import image1 from "../../../../assets/images/image1.png";
import { motion } from "framer-motion";

const Project = () => {
  const userListAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div className="bg-color text-white min-h-screen">
      <p className="text-center py-10 text-xl tracking-wide mb-6">
        <i>Home / work / Detail / Project</i>
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Html / CSS / JS</h1>
      </div>
      <div className="mt-10  bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
            variants={userListAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <a href="/projects/detail" className="group">
              <div className="category-project w-full p-5 h-76 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
                {/* Image Section */}
                <div className="image-project w-full rounded-lg h-44 overflow-hidden bg-amber-500">
                  <img
                    src={web3}
                    alt="Ecommerce Project"
                    className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Text Section */}
                <div className="mt-4 text-white">
                  <p className="text-xl font-semibold text-white group-hover:text-blue-400 ">
                    Ecommerce Project
                  </p>
                  <small className="text-gray-400 line-clamp-2 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eos sit illum sunt praesentium.
                  </small>
                </div>
              </div>
            </a>
            <a href="/projects/detail" className="group">
              <div className="category-project w-full p-5 h-76 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
                {/* Image Section */}
                <div className="image-project w-full rounded-lg h-44 overflow-hidden bg-amber-500">
                  <img
                    src={web1}
                    alt="Ecommerce Project"
                    className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Text Section */}
                <div className="mt-4 text-white">
                  <p className="text-xl line-clamp-1 font-semibold text-white group-hover:text-blue-400 ">
                    Staff Managerment System
                  </p>
                  <small className="text-gray-400 line-clamp-2 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eos sit illum sunt praesentium.
                  </small>
                </div>
              </div>
            </a>
            <a href="/projects/detail" className="group">
              <div className="category-project w-full p-5 h-76 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
                {/* Image Section */}
                <div className="image-project w-full rounded-lg h-44 overflow-hidden bg-amber-500">
                  <img
                    src={web2}
                    alt="Ecommerce Project"
                    className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Text Section */}
                <div className="mt-4 text-white">
                  <p className="text-xl font-semibold text-white group-hover:text-blue-400 ">
                    Human Resource
                  </p>
                  <small className="text-gray-400 line-clamp-2 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eos sit illum sunt praesentium.
                  </small>
                </div>
              </div>
            </a>
            <a href="/projects/detail" className="group">
              <div className="category-project w-full p-5 h-76 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
                {/* Image Section */}
                <div className="image-project w-full rounded-lg h-44 overflow-hidden bg-amber-500">
                  <img
                    src={image1}
                    alt="Ecommerce Project"
                    className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                {/* Text Section */}
                <div className="mt-4 text-white">
                  <p className="text-xl font-semibold text-white group-hover:text-blue-400 ">
                    Talwind CSS
                  </p>
                  <small className="text-gray-400 line-clamp-2 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis eos sit illum sunt praesentium.
                  </small>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
