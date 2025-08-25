import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServicesHire = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Step 1. Interview",
      description:
        "Grab a coffee, tea, or beer, and let’s chat. I want to know how you got started, what you’re currently doing, and where you’re heading. This is time for you to share your vision. I come in with a lot of questions, but the questions are just there to help guide the conversation along.",

      delay: 0.1,
    },
    {
      title: "Step 2. Build",
      description:
        "After the interview, I’ll have what I need to start on the design side of things. And we’ll make our way through two major rounds of revision that will put us in place for a successful site build. A bunch of communication, design, and development work will happen through this stage.",

      delay: 0.2,
    },
    {
      title: "Step 3. Polish",
      description:
        "As the project is coming to an end I'm typically waiting on any remaining content needed to complete the site. Once all of the pages have been populated, I go through some final cleanup and polish. I also provide detailed training so nobody is left in the dark before the site has been successfully launched.",

      delay: 0.3,
    },
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
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
                style={{ color: "#e1a87a" }}
                className="inline-block text-white pb-1 text-xs hover:text-gray-300 hover:border-gray-300 transition-all duration-300 font-medium"
                whileHover={{ x: 5 }}
              >
                {service.link}
              </motion.a>
            </motion.div>
          ))}
        </div>
        {/* Direct Contact Section below the grid */}
      </div>
    </section>
  );
};
export default ServicesHire;
