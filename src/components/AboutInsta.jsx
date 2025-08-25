import React from "react";
import { motion } from "framer-motion";

const InstagramFeed = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      alt: "Christmas decoration",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
      alt: "Coffee and workspace",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
      alt: "Computer screen with stories",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
      alt: "Whiskey bottle",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
      alt: "Coffee beans",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
      alt: "Plant and cup",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=400&h=400&fit=crop",
      alt: "Baby with donut",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1602528147691-3b7ca75e5c7b?w=400&h=400&fit=crop",
      alt: "Maternity photo",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=400&fit=crop",
      alt: "Black coffee mug",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1515378791036-0648a814897e?w=400&h=400&fit=crop",
      alt: "Baby announcement",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="text-amber-400 text-xs md:text-sm lg:text-sm font-light tracking-widest uppercase mb-4 md:mb-6">
            My Instagram Feed
          </div>
          <h2 className="text-xl md:text-5xl lg:text-6xl font-light tracking-wide">
            @Squarespacedeveloper
          </h2>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 mb-16 md:mb-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="aspect-square overflow-hidden bg-gray-800 relative group cursor-pointer"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="md:text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="text-amber-400 text-sm md:text-base font-light tracking-widest uppercase mb-6 md:mb-8">
            On the Otherside
          </div>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light md:leading-relaxed lg:leading-relaxed">
            Outside of Squarespace, I have a huge passion for coffee, video
            production, game development, mountain biking, and living that dad
            life.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InstagramFeed;
