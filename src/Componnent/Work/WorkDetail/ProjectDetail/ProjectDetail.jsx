import React, { useState, useEffect } from "react";
import image1 from "../../../../assets/images/image1.png";
import web1 from "../../../../assets/images/web1.png";
import web2 from "../../../../assets/images/web2.png";
import web3 from "../../../../assets/images/web3.png";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetail = () => {
  const slides = [web1, image1, web2, web3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const userListAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const [project, setProject] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/project/show/${id}`)
      .then((Response) => {
        setProject(Response.data.project);
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
      {/* Breadcrumb */}
      <p className="text-center py-10 text-xl tracking-wide mb-6">
        <i>Home / Blog / Detail</i>
      </p>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">{project?.name}</h1>
        {/* Website Link Preview */}
        <div className=" bg-gray-900 text-white rounded-lg shadow-md p-6 text-center my-6">
          <h2 className="text-2xl font-bold mb-2">Explore the Full Project</h2>
          <p className="text-base mb-4">
            Dive deeper into the project details, see live previews, and
            discover how it was built step-by-step.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <a
              className="inline-block bg-blue-600 text-white font-medium py-2 px-6 rounded hover:bg-sky-900 transition duration-300"
              href={project?.link_web}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="fa-solid fa-globe"></i> Visit Website{" "}
              </span>
            </a>

            <a
              className="inline-block bg-sky-900 text-white font-medium py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="fa-solid fa-code"></i> Source Code
              </span>
            </a>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          className="relative w-full mt-5"
          variants={userListAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Carousel Wrapper */}
          <div className="relative h-80 overflow-hidden rounded-lg md:h-[600px]">
            {project.image_urls &&
              project.image_urls.length > 0 &&
              project.image_urls.map((url, index) => (
                <div
                  key={index}
                  className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={url}
                    alt={`Project Image ${index + 1}`}
                    className="absolute block w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
          </div>

          {/* Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </motion.div>

        {/* Blog Metadata */}
        <div className="flex justify-between items-center text-gray-400 text-sm mb-8 mt-5">
          <p>
            Published on:{" "}
            <span className="text-blue-400">
              {" "}
              {new Date(project.created_at).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>
          <p>
            Author: <span className="text-blue-400">{project?.author}</span>
          </p>
        </div>

        {/* Blog Content */}
        <div className="text-gray-300 leading-relaxed">
          <p className="mb-4">{project?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
