import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Kalasalingam Academy of Research and Education",
      location: "Krishnankoil, TN",
      degree: "B Tech - Computer Science and Engineering",
      field: "CGPA: 8.48/10",
      year: "2022-2026",
      icon: GraduationCap
    },
    {
      institution: "Sri Gowthami Junior College",
      location: "Inkollu, AP",
      degree: "Intermediate",
      field: "Score: 909/1000",
      year: "2020-2022",
      icon: BookOpen
    },
    {
      institution: "Sri Gowthami High School",
      location: "Inkollu, AP",
      degree: "Secondary School of Education",
      field: "Score: 597/600",
      year: "2019-2020",
      icon: Award
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section 
      id="education" 
      className="py-20 px-4 bg-slate-900/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-purple-400/50"
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-2 flex justify-center md:justify-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="md:col-span-7">
                    <h3 className="text-xl font-bold text-white mb-2">{edu.institution}</h3>
                    <div className="text-purple-400 font-semibold mb-2">
                      {edu.degree} {edu.field && `- ${edu.field}`}
                    </div>
                    <div className="text-gray-400 mb-4">{edu.location}</div>
                    
                    {edu.projects && (
                      <div className="space-y-2">
                        <h4 className="text-white font-semibold mb-2">Key Projects:</h4>
                        <ul className="space-y-1">
                          {edu.projects.map((project, idx) => (
                            <li key={idx} className="text-gray-300 flex items-center">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  <div className="md:col-span-3 text-center md:text-right">
                    <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span className="text-white font-semibold">{edu.year}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                        <Award className="h-4 w-4 text-purple-400" />
                        <span className="text-white">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    {edu.score && (
                      <div className="text-gray-300 text-sm">
                        Score: {edu.score}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;