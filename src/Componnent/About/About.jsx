import React, { useState, useEffect } from "react";
import CssLogo from "../../assets/images/css.png";
import HtmlLogo from "../../assets/images/html.png";
import JsLogo from "../../assets/images/js.png";
import ReactLogo from "../../assets/images/react.png";
import axios from "axios";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [experiences, setExperience] = useState([]);
  const [educations, setEducation] = useState([]);
  const [programming, setProgramming] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/home")
      .then((response) => {
        setExperience(response.data.experiences || []);
        setEducation(response.data.educations || []);
        setProgramming(response.data.programming || []);
        setAbout(response.data.names || []);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="bg-color h-full py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-white mt-5 text-3xl font-bold text-center">
          My About
        </h1>

        <div className="about-section flex flex-col md:flex-row gap-8 mt-8">
          {/* Tabs Section */}
          <div className="about-left-section md:w-1/3  bg-gray-900  p-4 rounded-lg text-white h-full">
            <h1 className="text-4xl font-bold">Why hire Me?</h1>
            <p className="mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque dolores soluta aut nostrum!
            </p>
            <nav className="tabs flex flex-col space-y-4 mt-10">
              <button
                className={`tab text-white py-2 px-4 rounded-lg ${
                  activeTab === "experience" ? "bg-blue-500" : "bg-gray-700"
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`tab text-white py-2 px-4 rounded-lg ${
                  activeTab === "education" ? "bg-blue-500" : "bg-gray-700"
                }`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </button>
              <button
                className={`tab text-white py-2 px-4 rounded-lg ${
                  activeTab === "skill" ? "bg-blue-500" : "bg-gray-700"
                }`}
                onClick={() => setActiveTab("skill")}
              >
                Programming
              </button>
              <button
                className={`tab text-white py-2 px-4 rounded-lg ${
                  activeTab === "about" ? "bg-blue-500" : "bg-gray-700"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </button>
            </nav>
          </div>

          {/* Content Section */}
          <div className="about-right-section md:w-3/4 bg-gray-900  p-6 rounded-lg text-white h-full overflow-auto">
            {activeTab === "experience" && (
              <div>
                <h1 className="text-4xl font-bold text-blue-400 mb-4">
                  My Experience
                </h1>
                <p className="mt-7">
                  {" "}
                  I have extensive experience in web development, working with
                  modern technologies to build scalable and efficient
                  applications.{" "}
                </p>
                <div className="experience-session mt-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {experiences.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-700 w-full rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <p className="text-white text-lg font-semibold">
                          {item.start_year} - {item.end_year}
                        </p>
                        <p className="text-blue-400 text-xl font-bold mt-3">
                          {item.position}
                        </p>
                        <p className="text-gray-300 mt-4">
                          {item.company_name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "education" && (
              <div>
                <h1 className="text-4xl font-bold text-blue-400 mb-4">
                  My Education
                </h1>
                <p className="mt-3">
                  I hold a degree in Computer Science and have completed various
                  certifications in web development and programming. I hold a
                  degree in Computer Science and have completed various
                  certifications in web development and programming. I hold a
                  degree in Computer Science and have completed various
                  certifications in web development and programming. I hold a
                  degree in Computer Science and have completed various
                  certifications in web development and programming.
                </p>
                <div className="experience-session mt-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {educations.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-700 w-full rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <p className="text-white text-lg font-semibold">
                          {item.start_year} - {item.end_year}
                        </p>
                        <p className="text-blue-400 text-xl font-bold mt-3">
                          {item.school}
                        </p>
                        <p className="text-gray-300 mt-4">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === "skill" && (
              <div>
                <h1 className="text-4xl font-bold text-blue-400 mb-4">
                  Programming
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {programming.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 rounded-xl p-4 flex flex-col items-center shadow-lg"
                    >
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-16 h-16 object-contain mb-3"
                      />
                      <div className="w-full">
                        <div className="flex justify-between mb-1">
                          <span className="text-white font-semibold">
                            {item.name}
                          </span>
                          <span className="text-blue-400 font-bold">
                            {item.percen}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                          <motion.div
                            className="bg-blue-500 h-3 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${item.percen}%` }}
                            transition={{
                              duration: 1.2,
                              ease: "easeOut",
                              delay: 0.3,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "about" && (
              <div>
                <h1 className="text-4xl font-bold text-blue-400 mb-4">
                  About Me
                </h1>
                {about.map((item) => (
                  <div key={item.id || item.description} className="mb-6">
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="about-me-session">
                      <ul className="space-y-3">
                        <li className="text-gray-300">
                          <span className="font-semibold text-blue-400">
                            Name:
                          </span>{" "}
                          {item.name}
                        </li>
                        <li className="text-gray-300">
                          <span className="font-semibold text-blue-400">
                            Position:
                          </span>{" "}
                          {item.position}
                        </li>
                        <li className="text-gray-300">
                          <span className="font-semibold text-blue-400">
                            Gender:
                          </span>{" "}
                          {item.gender}
                        </li>
                        <li className="text-gray-300">
                          <span className="font-semibold text-blue-400">
                            Email:
                          </span>{" "}
                          {item.email}
                        </li>
                        <li className="text-gray-300">
                          <span className="font-semibold text-blue-400">
                            Phone Number:
                          </span>{" "}
                          0{item.phone}
                        </li>
                        <li className="text-gray-300">
                          <span className="font-semibold text-blue-400">
                            Date Of Birth:
                          </span>{" "}
                          {new Date(item.dob).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </li>
                        <li className="text-gray-300">
                          <span className="font-semibold text-blue-400">
                            Current Address:
                          </span>
                          {"  "}
                          {item.current_address}
                        </li>
                        <li className="text-gray-300">
                          <span className="font-semibold text-blue-400">
                            Place of Birth:
                          </span>{" "}
                          {item.pob}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
