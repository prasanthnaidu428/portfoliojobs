import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Animated background with floating particles
const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particles = Array(20).fill(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 -z-10 overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${x}%`,
              top: `${y}%`,
              boxShadow: '0 0 15px 5px rgba(168, 85, 247, 0.5)'
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        );
      })}
      {/* Cursor highlight effect */}
      <motion.div
        className="pointer-events-none fixed -left-48 -top-48 h-96 w-96 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
        style={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

// Text animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// Button hover animation
const buttonHover = {
  scale: 1.05,
  transition: { type: 'spring', stiffness: 400, damping: 10 }
};

const buttonTap = {
  scale: 0.95
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Parallax effect for elements with data-parallax attribute
      const container = containerRef.current;
      if (!container) return;
      
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 20;
      const y = ((e.clientY - top) / height - 0.5) * 20;
      
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden bg-slate-900"
      style={{
        '--mouse-x': '0px',
        '--mouse-y': '0px'
      } as React.CSSProperties}
    >
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="text-gray-300"
              variants={textVariants}
              custom={0}
            >
              Hi, I'm
            </motion.div>
            <motion.div 
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
              variants={textVariants}
              custom={1}
            >
              SINGARAJU PRASANTH
            </motion.div>
          </motion.h1>
          <motion.div 
            className="mb-8"
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              className="text-xl text-gray-300 mb-6 leading-relaxed"
              variants={textVariants}
              custom={2}
            >
              <motion.span 
                className="inline-block hover:text-purple-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Computer Science Student
              </motion.span>
              {' • '}
              <motion.span 
                className="inline-block hover:text-pink-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Python & Java Developer
              </motion.span>
              {' • '}
              <motion.span 
                className="inline-block hover:text-blue-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Embedded Systems
              </motion.span>
            </motion.p>
            <motion.p 
              className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0"
              variants={textVariants}
              custom={3}
            >
              Enthusiastic Computer Science student with a strong foundation in Python and Java. Skilled in applying technical knowledge to build real-world solutions, with hands-on experience in embedded systems and cross-functional teamwork. Proven track record of innovation and problem-solving through active participation in hackathons and college-level tech initiatives.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <motion.a
              href="https://github.com/prasanthnaidu428"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg overflow-hidden"
              whileHover={buttonHover}
              whileTap={buttonTap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="relative z-10 flex items-center">
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center px-6 py-3 border border-purple-400 text-purple-400 rounded-lg overflow-hidden"
              whileHover={buttonHover}
              whileTap={buttonTap}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <span className="relative z-10 flex items-center">
                <span>Contact Me</span>
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </motion.a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="https://github.com/prasanthnaidu428"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 relative group"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Github className="h-5 w-5" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/prasanth-singaraju-79735b370"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200 relative group"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Linkedin className="h-5 w-5" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative flex justify-center"
        >
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: 'var(--mouse-x, 0px)',
              y: 'var(--mouse-y, 0px)',
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
              }
            }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 }
            }}
          >
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl relative z-10">
              <img
                src="/profile.jpg"
                alt="Singaraju Prasanth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            {/* Floating elements */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-purple-400/30"
                style={{
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;