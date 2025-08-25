import React from "react";
import { motion } from "framer-motion";

const ServicesText2 = () => {
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
      className="min-h-screen bg-black flex items-center justify-center px-4 lg:px-48 md:py-20"
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
            Interested? Let's Chat
          </motion.p>

          {/* Main heading */}
          <motion.h1
            className="text-white leading-tight text-xl sm:text-5xl md:text-4xl lg:text-4xlfont-light"
            variants={textVariants}
          >
            I would love to learn more about your project and for me to walk you
            through my build process in more detail. Reach out today and we’ll
            talk soon.
          </motion.h1>
          <motion.button
            className="relative border-2 px-10 py-5 font-semibold text-sm overflow-hidden group"
            style={{ borderColor: "#e1a87a", color: "white" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              CONTACT ME TODAY
            </span>
            <div
              className="absolute inset-0 w-full h-full left-0 bottom-0 z-0 transition-transform duration-300 group-hover:translate-y-0 translate-y-full"
              style={{ backgroundColor: "#e1a87a" }}
            ></div>
          </motion.button>
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

export default ServicesText2;
