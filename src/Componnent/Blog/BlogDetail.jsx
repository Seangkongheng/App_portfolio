import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/image1.png";
import { data, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const userListAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogDetail = () => {
  const { id } = useParams();
  const [blogPosts, setBlogPost] = useState([]);
  const [blogRelate, setBlogRelate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/blog/${id}`)
      .then((response) => {
        setBlogPost(response.data.blog);
        setBlogRelate(response.data.related_blogs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blog:", err);
        setLoading(false);
      });
  }, [id]);

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
        <i>Home / Blog / Detail</i>
      </p>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {blogPosts.title}
        </h1>

        <div className="mb-8">
          {blogPosts.image_url ? (
            <img
              src={blogPosts.image_url}
              alt="Blog Detail"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-700 rounded-lg shadow-lg text-gray-300">
              No image
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-between items-center text-sm text-gray-400 mb-8 gap-4">
          <div className="flex items-center gap-1">
            <i className="fa-regular fa-calendar text-blue-400"></i>
            <span className="text-blue-400">
              {new Date(blogPosts.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-regular fa-user text-blue-400"></i>
            <span className="text-blue-400">{blogPosts.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-regular fa-eye text-blue-400"></i>
            <span className="text-blue-400">{blogPosts.view}</span>
          </div>
        </div>

        <div className="text-gray-300 leading-relaxed">
          <p className="mb-4 text-justify">{blogPosts.description}</p>
        </div>

        <div className="mb-8">
          {blogPosts.image_urls ? (
            <img
              src={blogPosts.image_urls}
              alt="Blog Detail"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-700 rounded-lg shadow-lg text-gray-300">
              No image
            </div>
          )}
        </div>

        {/* Related Articles */}
        <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Related Blogs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogRelate.map((post) => (
              <motion.div
                key={post.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={userListAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3 ">
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
    </div>
  );
};

export default BlogDetail;
