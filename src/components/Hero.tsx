import { motion } from 'framer-motion';
import { Download, Mail, MessageCircle } from 'lucide-react';
import File from "../assets/pdf/Subham_Sidhartha_Mohapatra_Backend_Resume.pdf";

const Hero = () => {
  const handlePost = async (data: String) => {

    const payload = {
      eventType: data,
    };
    try {
      const response = await fetch("https://subham-portfolio-api.onrender.com/api/key-click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Success:");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const particles = Array.from({ length: 50 }, (_, i) => i);

  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = File;
    link.download = "Subham_Sidhartha_Mohapatra_Backend_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClickBtn = (name: string) => () => {
    if (name === "DownloadResume") {
      handleDownload();
      handlePost("resumeDownloaded")
      return
    }
    if (name === "HireMe") {
      handlePost("getHired")
      return
    }
    if (name === "DiscussYourProject") {
      handlePost("discussProject")
      return
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold gradient-text leading-tight pt-5"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Subham Sidhartha
            <br />
            Mahapatra
          </motion.h1>

          {/* Headline */}
          <motion.h2
            className="text-2xl md:text-4xl font-semibold text-gray-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Backend Specialist & Full-Stack Builder
            <br />
            <span className="text-cyan-400">for High-Impact Products</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting secure, scalable, and production-ready systems for modern businesses,
            startups, and creators.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 245, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClickBtn("DownloadResume")}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 neon-glow"
            >
              <Download size={20} />
              Download Resume
            </motion.button>

            <motion.a
              href="mailto:ssmahapatra1478@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClickBtn("HireMe")}
              className="flex items-center gap-2 bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              <Mail size={20} />
              Hire Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClickBtn("DiscussYourProject")}
              href="#contact"
              className="flex items-center gap-2 bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300"
            >
              <MessageCircle size={20} />
              Discuss Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;