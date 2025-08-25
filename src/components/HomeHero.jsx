import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Play,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { name: "HOME", to: "/" },
  { name: "ABOUT", to: "/about" },
  { name: "SERVICES", to: "/services" },
  { name: "CONTACT", to: "/contact" },
];

const SOCIALS = [
  { icon: Instagram, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

const SquarespaceHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Remove local active state, use NavLink's isActive
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openVideoPlayer = () => {
    setShowVideoPlayer(true);
  };

  const closeVideoPlayer = () => {
    setShowVideoPlayer(false);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Video Background - Enhanced for mobile */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/357581440?h=fb2ef2ca32&autoplay=1&loop=1&muted=1&background=1&controls=0"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mobile-video-bg"
          style={{
            width: "100vw",
            height: "100vh",
            minWidth: "100vw",
            minHeight: "200vh", // Much more extended height for mobile
            objectFit: "cover",
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Background Video"
        ></iframe>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 lg:px-12">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wider">AO</div>

        {/* Centered Navigation - Desktop */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group flex items-center">
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-white text-sm font-medium tracking-wide px-2 transition-colors ${
                    isActive ? "font-bold underline underline-offset-8" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Hamburger/X for mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-white p-2 z-30">
          {isMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col justify-between">
          <div className="flex items-center justify-between px-6 py-6">
            <div className="text-white text-2xl font-bold tracking-wider">
              AO
            </div>
            <button onClick={toggleMenu} className="text-white p-2">
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-white text-2xl font-bold transition-colors ${
                    isActive ? "underline underline-offset-8" : ""
                  }`
                }
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6 pb-8">
            {SOCIALS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="text-white hover:text-gray-300"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* White line after navbar */}
      <div className="w-full h-0.5 bg-white/20 relative z-20"></div>

      {/* Hero Content - Enhanced z-index */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-12">
            <span
              className="block mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Squarespace Developer
            </span>
            <span
              className="block"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              & Coffee Enthusiast.
            </span>
          </h1>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            {/* Hire an Expert Button */}
            <button className="border-2 border-[#e1a87a] px-10 py-5 font-semibold text-sm tracking-widest hover:bg-[#e1a87a] text-white transition-all duration-300 transform hover:scale-105 z-40 relative">
              HIRE AN EXPERT
            </button>

            {/* Watch Video Button */}
            <button
              onClick={openVideoPlayer}
              className="flex items-center space-x-3 text-white hover:text-gray-300 transition-colors group z-40 relative"
            >
              <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
              </div>
              <span className="text-sm font-medium tracking-widest">
                WATCH VIDEO
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {showVideoPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideoPlayer}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              src="https://player.vimeo.com/video/357581440?h=fb2ef2ca32&autoplay=1"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Demo Video"
            ></iframe>
          </div>
        </div>
      )}

      {/* Additional CSS for mobile video scaling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-video-bg {
            min-height: 400vh !important;
            height: 400vh !important;
            transform: translate(-50%, -50%) scale(2.5) !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-video-bg {
            min-height: 500vh !important;
            height: 500vh !important;
            transform: translate(-50%, -50%) scale(3) !important;
          }
        }

        @media (max-width: 375px) {
          .mobile-video-bg {
            min-height: 600vh !important;
            height: 600vh !important;
            transform: translate(-50%, -50%) scale(3.5) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SquarespaceHero;
