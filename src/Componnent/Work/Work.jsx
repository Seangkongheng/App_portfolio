import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

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

  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((response) => {
        setSkills(response.data.skill || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

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

        {loading ? (
          <p className="text-white text-center mt-10">Loading...</p>
        ) : skills.length === 0 ? (
          <p className="text-white text-center mt-10">No skills found.</p>
        ) : (
          <motion.div
            className="work-section mt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 hover:scale-105"
                  variants={cardVariants}
                >
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h1 className="text-4xl font-bold text-white">
                          0{index + 1}
                        </h1>
                        <div className="w-12 h-12 bg-gray-700 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300">
                          <i className="fa-solid fa-arrow-right text-xl text-white transform group-hover:rotate-45 transition-transform duration-300"></i>
                        </div>
                      </div>
                      <h3 className="text-blue-400 text-2xl font-semibold mb-2">
                        {skill.title}
                      </h3>
                      <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                        Featured
                      </span>
                      <p className="text-gray-300 mb-2">{skill.description}</p>
                      <p className="text-gray-500 text-sm">Updated: Apr 2025</p>
                    </div>
                    <div className="mt-6">
                      <Link
                        to={`/works/${skill.id}`}
                        className="inline-block text-center w-full px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-md transition-colors"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Work;
