import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/bg.jpg";
import axios from "axios";

const Home = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}home`)
      .then((response) => {
        setProfile(response.data.names[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!profile) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className=" bg-black/80 backdrop-blur-sm">
      {/* Main Hero Section */}
      <div
        className="relative  min-h-screen bg-cover bg-center flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-400 text-lg mb-3 font-medium tracking-wide">
              👋 Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              {profile.name}
            </h1>

            <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
              {/* Full Stack Engineer | Laravel & React Specialist */}
              {profile.position}
            </h3>

            <p className="text-gray-300 max-w-lg mb-8 text-lg leading-relaxed">
              I build scalable, secure, and high-performance web applications.
              Specialized in REST APIs, JWT authentication, and Microservice
              Architecture. Focused on clean code, maintainable systems, and
              responsive UI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="/contact"
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition transform hover:scale-105 hover:border-purple-500 hover:text-purple-400"
              >
                Contact Me
              </a>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
              {[
                "Laravel",
                "React",
                "Microservices",
                "REST API",
                "MySQL",
                "Linux",
                "PHP",
                "Angular",
                "Express",
                "Tailwind CSS",
                "Git",
                "bootrap",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <img
                src={profile.image_url}
                alt="Profile"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce text-2xl">
          ↓
        </div>
      </div>
    </div>
  );
};

export default Home;
