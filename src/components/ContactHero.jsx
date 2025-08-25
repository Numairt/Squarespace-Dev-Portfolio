import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden -mt-24 md:-mt-28 pt-24 md:pt-28">
      {/* Background image - now extends to top */}
      <img
        src="/public/man-with-laptop-computer-sitting-at-outdoor-cafe-2018185.jpg"
        alt="Contact Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        draggable="false"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content - padding moved here to push content below navbar */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full h-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-white text-[3rem] md:text-[10rem] font-light leading-none text-center drop-shadow-lg">
          Reach Out.
        </h1>
      </motion.div>
    </section>
  );
};

export default ContactHero;
