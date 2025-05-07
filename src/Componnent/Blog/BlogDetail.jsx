import React from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/image1.png";

const blogPosts = [
  {
    id: 1,
    title: "Why You Should Learn React in 2025",
    description:
      "React continues to dominate frontend development. Here’s why you should master it this year.",
    date: "April 30, 2025",
    image: image1,
    link: "/blog-detail/1",
  },
  {
    id: 2,
    title: "5 Essential Tools for Web Developers",
    description:
      "Boost your productivity with these must-have tools for modern web development.",
    date: "March 18, 2025",
    image: image1,
    link: "/blog-detail/2",
  },
  {
    id: 3,
    title: "5 Essential Tools for Web Developers",
    description:
      "Boost your productivity with these must-have tools for modern web development.",
    date: "March 18, 2025",
    image: image1,
    link: "/blog-detail/3",
  },
];

const userListAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BlogDetail = () => {
  return (
    <div className="bg-color text-white min-h-screen">
      {/* Breadcrumb */}
      <p className="text-center py-10 text-xl tracking-wide mb-6">
        <i>Home / Blog / Detail</i>
      </p>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Understanding Tailwind CSS: A Beginner’s Guide
        </h1>

        {/* Blog Image */}
        <div className="mb-8">
          <img
            src={image1}
            alt="Blog Detail"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Metadata */}
        <div className="flex justify-between items-center text-gray-400 text-sm mb-8">
          <p>
            Published on:{" "}
            <span className="text-blue-400">May 02 2025</span>
          </p>
          <p>
            Author: <span className="text-blue-400">Seang Kongheng</span>
          </p>
        </div>

        {/* Blog Content */}
        <div className="text-gray-300 leading-relaxed">
          <p className="mb-4">
            Tailwind CSS is a utility-first CSS framework that allows developers
            to build modern and responsive designs quickly. It provides a set of
            pre-defined classes that can be directly applied to HTML elements,
            eliminating the need to write custom CSS for most use cases.
          </p>
          <p className="mb-4">
            In this guide, we’ll explore the basics of Tailwind CSS, how to set
            it up in your project, and some tips for using it effectively.
            Whether you’re a beginner or an experienced developer, Tailwind CSS
            can help you streamline your workflow and create beautiful designs
            effortlessly.
          </p>
          <p className="mb-4">
            One of the key benefits of Tailwind CSS is its flexibility. You can
            customize the framework to match your project’s design requirements
            by modifying the configuration file. Additionally, Tailwind CSS
            supports responsive design out of the box, making it easy to create
            layouts that look great on any device.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Related Articles
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
    </div>
  );
};

export default BlogDetail;