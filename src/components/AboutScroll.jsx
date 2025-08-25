import React, { useRef } from "react";
import { motion } from "framer-motion";

const AboutScroll = () => {
  const constraintsRef = useRef(null);
  const items = [
    {
      id: 1,
      title: "The wife.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&crop=faces",
      description: "A couple standing in front of their home",
      size: "large",
    },
    {
      id: 2,
      title: "The boy.",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&h=600&fit=crop&crop=faces",
      description: "A happy baby with a bib",
      size: "small",
    },
    {
      id: 3,
      title: "The obsession.",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=800&fit=crop",
      description: "A beautifully crafted latte with art",
      size: "large",
    },
    {
      id: 4,
      title: "The addiction.",
      image:
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=600&fit=crop",
      description: "Another obsession",
      size: "small",
    },
  ];

  return (
    <div className="py-16 bg-black">
      <div className="w-full overflow-hidden" ref={constraintsRef}>
        <motion.div
          className="flex gap-6 px-6 md:px-12 cursor-grab active:cursor-grabbing w-max"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          drag="x"
          dragConstraints={{ left: -200, right: 0 }}
          dragElastic={0.1}
          whileDrag={{ cursor: "grabbing" }}
        >
          <div className="flex gap-6 items-center">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex-shrink-0 snap-center flex flex-col ${
                  item.size === "large" ? "w-80 md:w-96" : "w-64 md:w-80"
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1 }}
              >
                <div className="relative group">
                  <div
                    className={`relative w-full bg-gray-900 rounded-lg overflow-hidden ${
                      item.size === "large"
                        ? "h-96 md:h-[500px]"
                        : "h-80 md:h-96"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                </div>

                <motion.div
                  className="mt-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <h3 className="text-white text-xl md:text-2xl font-light tracking-wide">
                    {item.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AboutScroll;
