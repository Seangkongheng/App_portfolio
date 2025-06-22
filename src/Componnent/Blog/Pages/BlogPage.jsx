import React, { useEffect, useState } from "react";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.jpg";
import image3 from "../../../assets/images/image3.png";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogPosts, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/blog")
      .then((response) => {
        setBlogPost(response.data.blog || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error", error);
        setLoading(false);
      });
  }, []);

  const userListAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const userFormAnimation = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

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
    <div className=" bg-color text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={userListAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
             

              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>

              <div className="p-6">
                <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 mb-2 gap-4">
                  {/* Date */}
                  <div className="flex items-center gap-2">
                    <i className="fa-regular fa-calendar text-blue-400"></i>
                    <span>
                      {new Date(post.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* View count */}
                  <div className="flex items-center gap-2">
                    <i className="fa-regular fa-eye text-blue-400"></i>
                    <span>{post.view}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold line-clamp-2 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {post.description}
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-400 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
