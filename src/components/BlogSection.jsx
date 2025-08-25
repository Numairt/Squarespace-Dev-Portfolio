import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const BlogSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      title: "I started a vlog",
      description: "Documenting the growth of my agency and sharing insights from behind the scenes.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      delay: 0.1
    },
    {
      title: "Introducing SQUAR",
      description: "My new company, SQUAR, a human-first creative digital agency focused on meaningful solutions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      delay: 0.2
    },
    {
      title: "Code Shop growth",
      description: "The expansion of my Code Shop and how it's helping developers worldwide.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      delay: 0.3
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 style={{ color: '#e1a87a' }} className="text-sm font-semibold lg:mb-6">LATEST BLOG POSTS</h2>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 lg:mx-32 lg:mb-20">
            Read through some of my thoughts and insights through being a developer.
          </h2>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge, experiences, and lessons learned from my journey in the digital world.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: post.delay }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-3xl font-light text-white mb-3 group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {post.description}
              </p>
              <motion.a
                href="#"
                style={{ color: '#e1a87a' }}
                className="inline-block text-white underline pb-1 hover:text-gray-300 hover:border-gray-300 transition-all duration-300 font-medium"
                whileHover={{ x: 5 }}
              >
                Read more
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection 