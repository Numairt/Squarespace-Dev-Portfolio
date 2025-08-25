import React from "react";
import { motion } from "framer-motion";

const ServicesText1 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-black flex items-center justify-center px-4 lg:px-48 py-10 md:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-left  space-y-8 md:space-y-12"
          variants={containerVariants}
        >
          {/* Subtitle */}
          <motion.p
            className="text-amber-400 uppercase tracking-[0.2em] text-xs md:text-sm font-medium"
            variants={subtitleVariants}
          >
            Working with Squarespace
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="text-white leading-tight text-xl sm:text-5xl md:text-4xl lg:text-4xlfont-light"
            variants={textVariants}
          >
            Working exclusively as a Squarespace developer & designer since
            early 2016, and my knowledge as a front-end developer allows me to
            push this platform further.
          </motion.h1>
        </motion.div>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default ServicesText1;
