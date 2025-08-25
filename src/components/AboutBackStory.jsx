import React from "react";
import { motion } from "framer-motion";

const BackStory = () => {
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
              Back Story.
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
              Yes, as I stated in my random facts and in the video above, I knew
              what I wanted to do by the age of 13. The short version is that I
              loved playing video games growing up and always had an interest in
              knowing how they were made. So, a small idea turned into me
              wanting to make my own video game.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              And after a few friends helped to fill up notebooks with thoughts,
              ideas, and drawings we quickly realized that we needed a website.
              Obviously, this was before the internet was filled with this type
              of knowledge readily available at your fingertips (Youtube,
              Facebook, and even MySpace weren't a thing yet). So, I was able to
              teach myself the basics and build something.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              Fast-forwarding, after graduating college with an associate's
              degree in digital arts, I made my way into multiple jobs. First
              starting out as a designer in the print industry for a small
              publication company. This was the start of many core
              understandings and played a key role in my thought process when
              thinking about design as a whole, especially when it comes to
              typography. After that, working my way into the development
              industry was a path that I created for myself based on one
              question that I still find myself asking, how does it work? This
              was the one question that started the passion I call my career.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              After years in the industry, and having gone through multiple
              opportunities, some good, and some bad,{" "}
              <span className="underline decoration-orange-400 underline-offset-4 cursor-pointer hover:text-orange-400 transition-colors duration-300">
                I finally left my full-time job to venture on my own
              </span>
              . It was March of 2016 which was my first day working for myself
              as a{" "}
              <span className="underline decoration-orange-400 underline-offset-4 cursor-pointer hover:text-orange-400 transition-colors duration-300">
                Squarespace developer
              </span>
              . So, here I am years later still doing the same damn thing, and
              still loving it.
            </motion.p>

            <motion.p
              className="text-white text-base md:text-lg leading-relaxed font-light"
              variants={paragraphVariants}
            >
              Now, as of 2022, I've been finding myself venturing down new paths
              and pushing some new focus areas such as helping people{" "}
              <span className="underline decoration-orange-400 underline-offset-4 cursor-pointer hover:text-orange-400 transition-colors duration-300">
                build personal brands
              </span>
              . Ever since I created my own personal brand back in 2016, I
              realized that I've learned a lot and can help teach people what
              I've learned over the years about what worked and what didn't for
              me. And if you want to know more about why I started a personal
              brand, you can{" "}
              <span className="underline decoration-orange-400 underline-offset-4 cursor-pointer hover:text-orange-400 transition-colors duration-300">
                read the full story
              </span>
              .
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BackStory;
