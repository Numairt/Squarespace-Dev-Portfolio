import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: "Code Shop",
      description: "Built by an expert, I provide high-quality plugins, snippets, and support that will help take your site further.",
      link: "VIEW ALL PLUGINS",
      delay: 0.1
    },
    {
      title: "Site Builds",
      description: "Looking to have me completely build out a custom and unique site? Learn how I work with all of my clients to make this a reality.",
      link: "VIEW A PROJECT",
      delay: 0.2
    },
    {
      title: "Consulting",
      description: "Built your own site and need some help? Hiring me in for one-on-one training, lecture requests, or just to answer your questions.",
      link: "LEARN MORE",
      delay: 0.3
    },
    {
      title: "My Work",
      description: "Feel free to take a look at some of the latest projects I've been working on and the type of clients I typically work with.",
      link: "VIEW PROJECTS",
      delay: 0.4
    },
    {
      title: "Online Courses",
      description: "Take a look at my upcoming self-paced online courses. Developed to get you up and running with the latest technologies.",
      link: "VIEW COURSES",
      delay: 0.5
    },
    {
      title: "Reach Out",
      description: "Looking to hire a developer, consultant, or you just have a general question that needs to be answered? Reach out!",
      link: "CONTACT ME",
      delay: 0.6
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Everything I Offer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From custom development to consulting and courses, I provide comprehensive solutions 
            to help you succeed in the digital world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="bg-black p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
            >
              <h3 className="text-3xl font-medium text-white mb-4 group-hover:text-gray-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-white mb-6 leading-relaxed">
                {service.description}
              </p>
              <motion.a
                href="#"
                style={{ color: '#e1a87a' }}
                className=" inline-block text-white pb-1 text-xs hover:text-gray-300 hover:border-gray-300 transition-all duration-300 font-medium"
                whileHover={{ x: 5 }}
              >
                {service.link}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 