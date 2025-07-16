import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from '../assets/images/profile.png';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl font-bold text-cyan-400">
                    <img src={Image} alt="image" className='rounded-full w-72 h-72'/>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-900 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a passionate backend specialist with over 3.5+ years of experience building 
                scalable, secure, and high-performance systems that power modern applications.
              </p>
              <p>
                My expertise spans across Node.js ecosystems, cloud infrastructure, and full-stack 
                development, with a focus on delivering production-ready solutions that scale with business growth.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring aspiring developers in their journey.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <motion.a
                href="https://github.com/Subhamsidharth"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-full transition-all duration-300"
              >
                <Github size={20} />
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/subham-sidhartha-mahapatra/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-full transition-all duration-300"
              >
                <Linkedin size={20} />
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:ssmahapatra1478@gmail.com"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-full transition-all duration-300"
              >
                <Mail size={20} />
                Email
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;