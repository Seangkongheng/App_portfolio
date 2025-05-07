import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/bg.jpg";
import profileImage from "../../assets/images/profile.jpg";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/home")
      .then((response) => {
        console.log(setName(response.data.names)); // Access the 'names' key from the response
        setName(response.data.names);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        className="home-profile text-center bg-black bg-opacity-50 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.div
          className="profile-image w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {name.map((item) => (
          <motion.h1
            className="profile-name mt-6 text-white text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {item.name}
          </motion.h1>
        ))}
        {/* Name */}
        {/* Position */}

        {name.map((item) => (
          <motion.p
            className="profile-position text-white text-lg mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {item.description}
          </motion.p>
        ))}

        {/* Social Media Links */}
        <motion.div
          className="profile-social-media mt-6 flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 text-2xl"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 text-2xl"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-black text-2xl"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-2xl"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>

          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 text-2xl"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </motion.div>

        {/* Hire Me Button */}
        <motion.div
          className="profile-button-hire-me mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <button className="px-6 py-3 cursor-pointer rounded-full btn-hiring-me text-white font-semibold hover:bg-blue-600 transition">
            Download CV
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
