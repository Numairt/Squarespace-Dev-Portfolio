import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
         <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
       {/* Video Background - Full Screen */}
       <div className="fullscreen-video pointer-events-none">
         <iframe
           src="https://player.vimeo.com/video/357581440?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0"
           frameBorder="0"
           allow="autoplay; fullscreen"
           allowFullScreen
           className="w-full h-full object-cover"
           style={{ 
             pointerEvents: 'none', 
             margin: 0, 
             padding: 0
           }}
           title="Background Video"
         ></iframe>
         {/* Dark overlay */}
         <div className="absolute inset-0 bg-black/50"></div>
       </div>

       <div className="w-full px-4 md:px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">Squarespace Developer</span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300">
              & Coffee Enthusiast.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting digital experiences that look amazing and work flawlessly
          </motion.p>

                     {/* Call to Action Buttons */}
           <motion.div 
             className="flex flex-col sm:flex-row gap-6 justify-center items-center"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
           >
                           <motion.button
                className="relative bg-transparent border-2 text-white px-8 py-4 font-semibold text-lg overflow-hidden group"
                style={{ borderColor: '#e1a87a' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire an Expert</span>
                <div 
                  className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ backgroundColor: '#e1a87a' }}
                ></div>
                <span className="absolute inset-0 flex items-center justify-center text-black font-semibold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Hire an Expert
                </span>
              </motion.button>
             
             <motion.button
               className="bg-transparent border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/20 hover:text-gray-300 transition-all duration-300 text-lg flex items-center gap-3 rounded-full w-16 h-16 justify-center"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <Play className="h-6 w-6" />
             </motion.button>
           </motion.div>
        </div>
      </div>

      
    </section>
  )
}

export default Hero 