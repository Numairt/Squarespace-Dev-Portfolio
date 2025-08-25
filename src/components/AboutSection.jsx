import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" })
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        {/* First Row - Developer Focus */}
        <div ref={ref1} className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Developer at work"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Being a Developer & Designer is my primary focus.
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your website needs to look amazing and work flawlessly. I've been helping businesses 
              create stunning digital experiences for years. Let me show you how we can work together 
              to bring your vision to life.
            </p>
            <motion.button
              className="relative border-2 px-10 py-5 font-semibold text-sm overflow-hidden group"
              style={{ borderColor: '#e1a87a', color: 'white' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                LEARN MORE →
              </span>
              <div
                className="absolute inset-0 w-full h-full left-0 bottom-0 z-0 transition-transform duration-300 group-hover:translate-y-0 translate-y-full"
                style={{ backgroundColor: '#e1a87a' }}
              ></div>
            </motion.button>
          </motion.div>
        </div>

        {/* Second Row - Personal Brand */}
        <div ref={ref2} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My other passion is building powerful personal brands.
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I've been running a personal brand business for 8 years, helping individuals and 
              companies establish their digital presence. Based on my experience, I've created 
              a comprehensive course that shares all my insights and strategies.
            </p>
            <motion.button
              className="relative border-2 px-10 py-5 font-semibold text-sm overflow-hidden group"
              style={{ borderColor: '#e1a87a', color: 'white' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                LEARN MORE →
              </span>
              <div
                className="absolute inset-0 w-full h-full left-0 bottom-0 z-0 transition-transform duration-300 group-hover:translate-y-0 translate-y-full"
                style={{ backgroundColor: '#e1a87a' }}
              ></div>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 