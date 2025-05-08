"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const EducationPage = () => {
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
        More Details...
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo mb-10"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="p-6 border border-gray-400 rounded-xl hover:bg-lightHover duration-500 shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            B.Tech in Computer Science and Data Science
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Vaagdevi Engineering College , 2021 – 2025
          </p>
          <p className="text-sm text-gray-600">CGPA: 6.5</p>
        </div>

        <div className="p-6 border border-gray-400 rounded-xl hover:bg-lightHover duration-500 shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            Intermediate – MPC
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Ekashila Junior College, 2019 – 2021
          </p>
          <p className="text-sm text-gray-600">Percentage: 91%</p>
        </div>

        <div className="p-6 border border-gray-400 rounded-xl hover:bg-lightHover duration-500 shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            SSC – State Board
          </h3>
          <p className="text-sm text-gray-600 mb-1">
            Little Buds Convent High School, 2018 – 2019
          </p>
          <p className="text-sm text-gray-600">GPA: 8.5</p>
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

export default EducationPage;
