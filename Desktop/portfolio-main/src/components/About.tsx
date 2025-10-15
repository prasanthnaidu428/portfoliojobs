import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const progressBar = {
  hidden: { width: 0 },
  visible: (custom: number) => ({
    width: custom,
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  })
};



const About = () => {
  const skills = [
    { name: 'Python', level: '90%' },
    { name: 'Java', level: '85%' },
    { name: 'C', level: '80%' },
    { name: 'SQL', level: '85%' },
    { name: 'HTML & CSS', level: '75%' },
    { name: 'Machine Learning', level: '80%' },
    { name: 'TensorFlow', level: '75%' },
    { name: 'NumPy/Pandas', level: '85%' },
    { name: 'Problem Solving', level: '90%' },
    { name: 'Team Collaboration', level: '85%' },
  ];
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              Enthusiastic Computer Science student with a strong foundation in Python and Java. Skilled in applying technical knowledge to build real-world solutions, with hands-on experience in embedded systems and cross-functional teamwork. Proven track record of innovation and problem-solving through active participation in hackathons and college-level tech initiatives. Passionate about leveraging technology to drive smart, scalable, and meaningful impact.
            </p>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-purple-300 font-medium">B.Tech - Computer Science and Engineering</h5>
                  <p className="text-gray-400">Kalasalingam Academy of Research and Education | 2022-2026</p>
                  <p className="text-gray-300">CGPA: 8.48/10</p>
                </div>
                <div>
                  <h5 className="text-purple-300 font-medium">Intermediate</h5>
                  <p className="text-gray-400">Sri Gowthami Junior College, Inkollu, AP | 2020-2022</p>
                  <p className="text-gray-300">Score: 909/1000</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-purple-300">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={progressBar}
                      custom={skill.level}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-white mb-4">Achievements</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">🏆</span>
                  <span>2nd Prize – National Symposium Ideathon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">🏅</span>
                  <span>Participated in IEEE Robotics challenge in Kalasalingam University</span>
                </li>
              </ul>
              
              <h4 className="text-xl font-semibold text-white mt-6 mb-4">Extracurricular Activities</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Active participant in coding competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Regular contributor to open-source projects & hackathons</span>
                </li>
              </ul>
              
              <h4 className="text-xl font-semibold text-white mt-6 mb-4">Certifications</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>National Symposium winning Certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  <span>Code Chef & Code Tantra Certifications (Data Base Management System, Python, Design and Analysis of Algorithms)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;