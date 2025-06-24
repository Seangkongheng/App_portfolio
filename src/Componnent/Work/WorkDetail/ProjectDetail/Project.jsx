import React, { useEffect, useState } from "react";
import web3 from "../../../../assets/images/web3.png";
import web1 from "../../../../assets/images/web1.png";
import web2 from "../../../../assets/images/web2.png";
import image1 from "../../../../assets/images/image1.png";
import { motion } from "framer-motion";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Project = () => {
  const userListAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/project/${id}`)

      .then((response) => {
        setProject(response.data.projects || []);
        setCategoryName(response.data.categoryName);
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
        <i>Home / work / Detail / Project</i>
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {categoryName?.name}
        </h1>
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
            {project.map((item, index) => (
              <Link to={`/projects/detail/${item.id}`}>
                
                  <div className="category-project w-full p-5 h-76 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105">
                    {/* Image Section */}
                    <div className="image-project w-full rounded-lg h-44 overflow-hidden ">
                      <img
                        src={item?.image_url}
                        alt="Ecommerce Project"
                        className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    {/* Text Section */}
                    <div className="mt-4 text-white">
                      <p className="text-xl font-semibold text-white group-hover:text-blue-400 ">
                        {item?.name}
                      </p>
                      <small className="text-gray-400 line-clamp-2 mt-2">
                        {item.description}
                      </small>
                    </div>
                  </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
