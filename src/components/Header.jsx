// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { ChevronDown, ShoppingCart, Sun } from 'lucide-react'

// const Header = ({ isScrolled }) => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false)
//   const [isMoreOpen, setIsMoreOpen] = useState(false)

//   return (
//     <motion.header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="container-custom px-4 md:px-8 lg:px-16">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <motion.div
//             className="text-2xl font-bold text-white"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           >
//             DS
//           </motion.div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <motion.a
//               href="#home"
//               className="text-white hover:text-gray-300 transition-colors duration-200"
//               whileHover={{ y: -2 }}
//             >
//               Home
//             </motion.a>

//             <motion.a
//               href="#about"
//               className="text-white hover:text-gray-300 transition-colors duration-200"
//               whileHover={{ y: -2 }}
//             >
//               About
//             </motion.a>

//             <div className="relative">
//               <motion.button
//                 className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
//                 onClick={() => setIsServicesOpen(!isServicesOpen)}
//                 whileHover={{ y: -2 }}
//               >
//                 Services
//                 <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
//               </motion.button>

//               {isServicesOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 10 }}
//                   className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg"
//                 >
//                   <div className="py-2">
//                     <a href="#web-development" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
//                       Web Development
//                     </a>
//                     <a href="#design" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
//                       Design
//                     </a>
//                     <a href="#consulting" className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors">
//                       Consulting
//                     </a>
//                   </div>
//                 </motion.div>
//               )}
//             </div>

//             <motion.a
//               href="#contact"
//               className="text-white hover:text-gray-300 transition-colors duration-200"
//               whileHover={{ y: -2 }}
//             >
//               Contact
//             </motion.a>
//           </nav>

//           {/* Right side */}
//           <div className="flex items-center space-x-4">
//             <motion.button
//               className="text-white hover:text-gray-300 transition-colors duration-200"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <ShoppingCart className="h-5 w-5" />
//             </motion.button>

//             <motion.button
//               className="text-white hover:text-gray-300 transition-colors duration-200"
//               whileHover={{ scale: 1.1, rotate: 180 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Sun className="h-5 w-5" />
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </motion.header>
//   )
// }

// export default Header

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-12 border-b border-white/20">
      {/* AO Logo Animation */}
      <motion.div
        className="text-white text-2xl font-bold tracking-wider"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        AO
      </motion.div>

      {/* Centered Nav Links */}
      <div className="hidden lg:flex flex-1 justify-center items-center space-x-10">
        <div className="relative">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-wide capitalize relative px-2 ${
                isActive ? "font-bold underline underline-offset-8" : ""
              }`
            }
          >
            Home
          </NavLink>
        </div>
        <div className="relative">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-wide capitalize relative px-2 ${
                isActive ? "font-bold underline underline-offset-8" : ""
              }`
            }
          >
            About
          </NavLink>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-wide capitalize relative px-2 ${
                isActive ? "font-bold underline underline-offset-8" : ""
              }`
            }
          >
            Services
          </NavLink>
          {/* Dropdown for Services (optional, can be expanded) */}
        </div>
        <div className="relative">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-wide capitalize relative px-2 ${
                isActive ? "font-bold underline underline-offset-8" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="lg:hidden text-white p-2">
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black bg-opacity-95 backdrop-blur-md flex flex-col lg:hidden"
            aria-modal="true"
            role="dialog"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="flex flex-col p-6 space-y-4 flex-1 justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `text-white text-2xl md:text-3xl font-medium hover:text-gray-300 transition-colors tracking-wide capitalize text-center ${
                    isActive ? "font-bold underline underline-offset-8" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-white text-2xl md:text-3xl font-medium hover:text-gray-300 transition-colors tracking-wide capitalize text-center ${
                    isActive ? "font-bold underline underline-offset-8" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-white text-2xl md:text-3xl font-medium hover:text-gray-300 transition-colors tracking-wide capitalize text-center ${
                    isActive ? "font-bold underline underline-offset-8" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-white text-2xl md:text-3xl font-medium hover:text-gray-300 transition-colors tracking-wide capitalize text-center ${
                    isActive ? "font-bold underline underline-offset-8" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
