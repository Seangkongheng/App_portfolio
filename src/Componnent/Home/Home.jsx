import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/bg.jpg";
import axios from "axios";

// Define animation variants for reusability
const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const Home = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/home")
      .then((response) => {
        setName(response.data.names);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        className="home-profile text-center bg-black bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {name.length === 0 ? (
          <p className="text-white">Loading...</p>
        ) : (
          name.map((item, index) => (
            <div key={index}>
              {/* Profile Image */}
              <motion.div
                className="profile-image w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 mx-auto"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img
                  src={item.image_url}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Name */}
              <motion.h1
                className="profile-name mt-6 text-white text-3xl font-bold"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                {item.name}
              </motion.h1>

              {/* Position/Description */}
              <motion.p
                className="profile-position text-white text-lg mt-2"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.9 }}
              >
                {item.position}
              </motion.p>
            </div>
          ))
        )}

        {/* Social Media Links */}
        <motion.div
          className="profile-social-media mt-6 flex justify-center space-x-6"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 text-2xl transition-colors"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 text-2xl transition-colors"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black text-2xl transition-colors"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-2xl transition-colors"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-2xl transition-colors"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          className="profile-button-hire-me mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <button className="px-6 py-3 cursor-pointer rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
            Download CV
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;