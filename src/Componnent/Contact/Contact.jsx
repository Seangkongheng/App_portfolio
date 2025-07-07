import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const userListAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const userFormAnimation = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/contact/summit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        description: ""
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="bg-color h-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.h1
          className="text-white mt-5 text-3xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}>
          My Contact
        </motion.h1>
        <div className="contact-section flex flex-col md:flex-row gap-8 mt-8 items-center">
          <motion.div
            className="contact-left-section md:w-1/2 bg-gray-900 p-6 rounded-lg text-white h-full overflow-auto"
            variants={userListAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} >
            <h1 className="text-2xl font-bold">Contact with me!</h1>
            <p className="mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              obcaecati nam tenetur nostrum dolore quos vel.
            </p>
            <form className="mt-7" onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <textarea
                rows="8"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              <button type="submit" className="py-2 px-5 cursor-pointer bg-sky-900 mt-6">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right contact info remains unchanged */}
          <motion.div
            className="contact-right-section text-white"
            variants={userFormAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {/* Phone Section */}
            <div className="contact-right-phone flex items-center gap-4 mt-4">
              <div className="flex items-center justify-center h-12 w-12 sm:h-20 sm:w-20 rounded-xl bg-gray-900">
                <i className="fa-solid fa-phone text-blue-500 text-2xl sm:text-4xl"></i>
              </div>
              <div className="contact-right-phone-text">
                <small className="block text-gray-400">Phone Number</small>
                <h1 className="text-lg sm:text-2xl">096 990 7215</h1>
              </div>
            </div>

            {/* Email Section */}
            <div className="contact-right-email flex items-center gap-4 mt-4">
              <div className="flex items-center justify-center h-12 w-12 sm:h-20 sm:w-20 rounded-xl bg-gray-900">
                <i className="fa-solid fa-envelope text-blue-500 text-2xl sm:text-4xl"></i>
              </div>
              <div className="contact-right-email-text">
                <small className="block text-gray-400">Email</small>
                <h1 className="text-lg sm:text-2xl">
                  konghengseang878@gmail.com
                </h1>
              </div>
            </div>

            {/* Address Section */}
            <div className="contact-right-address flex items-center gap-4 mt-4">
              <div className="flex items-center justify-center h-12 w-12 sm:h-20 sm:w-20 rounded-xl bg-gray-900">
                <i className="fa-solid fa-location-dot text-blue-500 text-2xl sm:text-4xl"></i>
              </div>
              <div className="contact-right-address-text">
                <small className="block text-gray-400">Address</small>
                <h1 className="text-lg sm:text-2xl">Phnom Penh, Cambodia</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
