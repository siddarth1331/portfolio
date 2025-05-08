"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectDetailsPage = () => {
  return (
    <motion.div
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        More Details
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-10"
      >
        Project Details
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Project 1 */}
        <div className="p-6 border border-gray-400 rounded-xl hover:bg-lightHover duration-500 shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Portfolio Website
          </h3>
          <p className="text-sm text-gray-600 mb-1">Personal Project, 2025</p>
          <p className="text-sm text-gray-600">
            A responsive portfolio website built with React, Next.js, and
            Tailwind CSS to showcase my development projects and skills.
          </p>
          <p className="text-sm text-gray-600">
            Tech Stack: React, Next.js, Tailwind CSS
          </p>
        </div>

        {/* Project 2 */}
        <div className="p-6 border border-gray-400 rounded-xl hover:bg-lightHover duration-500 shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Estimating The Stocks Keeping Units Using ML
          </h3>
          <p className="text-sm text-gray-600 mb-1">Team Project, 2024</p>
          <p className="text-sm text-gray-600">
            Developed a Flask-based REST API integrated with a React frontend to
            predict SKU stock levels using Linear Regression and Decision Tree
            models. Achieved 82% accuracy with data processing via NumPy,
            Pandas, and Scikit-learn.
          </p>
          <p className="text-sm text-gray-600">
            Tech Stack: Python, Flask, React, Scikit-learn, NumPy, Pandas
          </p>
        </div>

        {/* Project 3 */}
        <div className="p-6 border border-gray-400 rounded-xl hover:bg-lightHover duration-500 shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Human Pose Estimation using Machine Learning
          </h3>
          <p className="text-sm text-gray-600 mb-1">Solo Project, 2024</p>
          <p className="text-sm text-gray-600">
            Built a web-based pose estimation system using Python and deep
            learning models, integrating OpenPose and Mediapipe with a
            browser-based frontend. Detected body keypoints with high accuracy
            for fitness tracking, gesture recognition, and AR.
          </p>
          <p className="text-sm text-gray-600">
            Tech Stack: Python, OpenPose, Mediapipe, TensorFlow, Keras, OpenCV,
            NumPy
          </p>
        </div>
        {/* Project 4 */}
        <div className="p-6 border border-gray-400 rounded-xl hover:bg-lightHover duration-500 shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">Ai Agent</h3>
          <p className="text-sm text-gray-600 mb-1">Solo Project, 2025</p>
          <p className="text-sm text-gray-600">
            Developed an intelligent agent using LLMs and browser automation
            (Playwright, Browser-Use) to autonomously interpret and execute
            tasks. Enabled smart web interaction for research, data extraction,
            and task automation, leveraging machine learning and NLP.
          </p>
          <p className="text-sm text-gray-600">
            Tech Stack: Gemini API, Playwright, Browser-Use, LLMs, Python
          </p>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-10"
      >
        <Link
          href="/#about"
          className="py-3 px-9 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          ← Back to About
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailsPage;
