import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "ELEMENTARY COFFEE CO.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      
      delay: 0.1
    },
    {
      title: "NEXT STEP PERFORMANCE",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      
      delay: 0.2
    }
  ]

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 style={{ color: '#e1a87a' }} className="lg:mb-6">Latest Squarespace projects</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-white sm:mb-6 md:mb-6 lg:mb-20 lg:mx-32">
            As a developer, here are some of the latest projects I've worked on.
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each project represents a unique challenge and solution, showcasing my ability to 
            create custom digital experiences that drive results.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: project.delay }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
              
              <h3 style={{ color: '#e1a87a' }} className="text-sm font-bold text-white mb-2 group-hover:text-gray-300 transition-colors underline">
                {project.title}
              </h3>
             
              {/* <motion.a
                href="#"
                className="inline-block text-white border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-all duration-300 font-medium"
                whileHover={{ x: 5 }}
              >
                VIEW PROJECT →
              </motion.a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 