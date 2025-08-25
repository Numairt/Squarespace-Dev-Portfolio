import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Line */}
      <div className="border-t border-white/20"></div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:mx-28 py-16 gap-8 text-center md:text-left">
        {/* Left - Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <a
            href="mailto:hello@devonstank.com"
            className="flex items-center gap-2 text-[#e1a87a] hover:text-white underline transition-colors duration-300"
          >
            <Mail size={16} /> hello@devonstank.com
          </a>
          <a
            href="tel:7175251031"
            className="flex items-center gap-2 text-[#e1a87a] underline hover:text-white transition-colors duration-300"
          >
            <Phone size={16} /> (717) 525-1031
          </a>
        </div>

        {/* Center - AO Logo with hover animation */}
        <div className="relative group">
          <span className="sm:text-2xl lg:text-5xl font-serif relative cursor-pointer">
            AO
            {/* Animated Line */}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e1a87a] transition-all duration-500 ease-in-out group-hover:w-1/2 group-hover:left-1/4"></span>
          </span>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-6 text-[#e1a87a]">
          <a href="#" className="hover:text-white transition-colors duration-300"><Instagram size={20} /></a>
          <a href="#" className="hover:text-white transition-colors duration-300"><Facebook size={20} /></a>
          <a href="#" className="hover:text-white transition-colors duration-300"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors duration-300"><Linkedin size={20} /></a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center px-6 md:px-16 py-10 text-sm text-gray-400">
        {/* Copyright Text */}
        <p className="opacity-0 animate-slideUp delay-200 lg:my-4">
          © 2025 AO. All rights reserved. Squarespace Developer & Founder of{" "}
          <a href="#" className="text-[#e1a87a] hover:text-white transition-colors duration-300">SQUAR</a>
        </p>

        {/* Terms Links */}
        <div className="flex flex-col md:flex-row gap-4 mt-4 text-center">
          <a href="#" className="opacity-0 animate-slideUp delay-500 text-[#e1a87a] hover:text-white transition-colors duration-300">Terms of Service</a>
          <a href="#" className="opacity-0 animate-slideUp delay-700 text-[#e1a87a] hover:text-white transition-colors duration-300">Return Policy</a>
          <a href="#" className="opacity-0 animate-slideUp delay-900 text-[#e1a87a] hover:text-white transition-colors duration-300">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
