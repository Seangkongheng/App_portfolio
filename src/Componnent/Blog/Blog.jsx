import React from "react";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.png";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Why You Should Learn React in 2025",
    description:
      "React continues to dominate frontend development. Here’s why you should master it this year.",
    date: "April 30, 2025",
    image: image2,
    link: "/blog-detail",
  },
  {
    id: 2,
    title: "5 Essential Tools for Web Developers",
    description:
      "Boost your productivity with these must-have tools for modern web development.",
    date: "March 18, 2025",
    image: image1,
    link: "/blog-detail",
  },
  {
    id: 3,
    title: "Understanding Tailwind CSS: A Beginner’s Guide",
    description:
      "Learn how to quickly style beautiful websites using utility-first classes.",
    date: "February 10, 2025",
    image: image3,

    link: "/blog-detail",
  },
];

const Blog = () => {
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
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={userListAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <a href={post.link} className="text-blue-400 hover:underline">
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Blog;
