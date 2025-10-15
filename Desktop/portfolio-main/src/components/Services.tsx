import React from 'react';
import { Code, LayoutTemplate } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using modern web technologies like React, TypeScript, and Tailwind CSS.',
      icon: <Code className="h-10 w-10 text-purple-400" />,
    },
    {
      title: 'Application Design',
      description: 'Creating beautiful and intuitive user experiences with a focus on usability and modern design principles.',
      icon: <LayoutTemplate className="h-10 w-10 text-purple-400" />,
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
