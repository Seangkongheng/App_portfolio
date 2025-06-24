import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Html from "../../../assets/images/css.png";
import react from "../../../assets/images/react.jpg";
import laravel from "../../../assets/images/laravel.jpg";
import php from "../../../assets/images/php.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const WorkDetail = () => {
  const userListAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const [categories, setCategory] = useState([]);
  const [skillName, setSkillName] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/skill/${id}`)

      .then((response) => {
        setCategory(response.data.category || []);
        setSkillName(response.data.skill_name || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-color text-white">
        <div className="flex items-center gap-3 text-xl font-semibold animate-pulse">
          <i className="fa-solid fa-spinner fa-spin text-2xl"></i>
          Loading...
        </div>
      </div>
    );
  }
  return (
    <div className="bg-color text-white min-h-screen">
      <p className="text-center py-10 text-xl tracking-wide mb-6">
        <i>Home / work / Detail</i>
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {skillName?.title}
        </h1>
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
            {categories.map((category, index) => (
              <Link to={`/projects/${category.id}`}>
                <a href="/projects">
                  <div className="category-project relative w-full h-72 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
                    <img
                      src={category?.image_url}
                      className="h-full w-full object-cover rounded-lg"
                      alt="HTML"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300 rounded-lg">
                      <p className="text-white text-xl font-bold">
                        {category?.name}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetail;
