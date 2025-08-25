import React from "react";
import { motion } from "framer-motion";

const ServicesProcess = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-black min-h-screen py-16 px-6 lg:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left side - Title (1/3 width) */}
          <motion.div className="lg:col-span-1" variants={titleVariants}>
            <h1 className="text-white text-4xl md:text-4xl lg:text-5xl font-light leading-tight">
              My Process.
            </h1>
          </motion.div>

          {/* Right side - Content (2/3 width) */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
          >
            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              I work differently than most creatives. I don't just turn out
              multiple design mock-ups at you and hope you like one. I first
              learn who you are and how you got started. It’s a simple fact that
              my clients invest a lot in me, and it only makes sense that I’m
              doing the same for them.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              With that said, working with me relies heavily on trust, and
              letting me do what I do best. And this is why I first go through a
              deep interview process to fully understand your needs within the
              structure, as well as, the aesthetic of the website. Because every
              one of my clients needs something different, so let me build the
              site you need, not what someone else needed.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesProcess;
