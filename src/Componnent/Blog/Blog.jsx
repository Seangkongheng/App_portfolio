import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.png";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/home")
      .then((response) => {
        setBlog(response.data.blog || []);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
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

  const displayedPosts = blogPosts.slice(0, 5);

  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedPosts.map((post, idx) => (
            <React.Fragment key={post.id}>
              <motion.div
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
                  <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 mb-8 gap-4">
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

                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-5">
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
              {idx < displayedPosts.length - 1 && (
                <hr className="my-6 border-gray-700 block sm:hidden" />
              )}
            </React.Fragment>
          ))}
        </div>

        <span className="text-center flex justify-center items-center mt-8">
          <a className="btn-color" href="/blog-page">
            See More{" "}
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Blog;
