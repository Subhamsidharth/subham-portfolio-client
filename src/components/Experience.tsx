import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Building } from 'lucide-react';
import File from "../assets/pdf/Subham_Sidhartha_Mohapatra_Backend_Resume.pdf";

const Experience = () => {
  const handleDownload = (): void => {
    const link = document.createElement("a");
    link.href = File;
    link.download = "Subham_Sidhartha_Mohapatra_Backend_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handlePost = async (data: String) => {
    handleDownload()
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
  const experiences = [
    {
      position: "SDE-3",
      company: "AllMasters",
      location: "Chennai, India",
      duration: "2023 – Present",
      type: "Full-time",
      description: "Leading the backend architecture for a global shipping automation platform. Built scalable microservices, integrated AI-based automation, and enabled timezone-aware scheduling for international clients.",
      achievements: [
        "Reduced task processing time by 45% using RabbitMQ queues",
        "Integrated Azure Computer Vision API and Azure OpenAI for document automation",
        "Implemented timezone-aware CRON workflows for 10+ international regions",
        "Led GenAI feature rollout and improved process automation by 60%"
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      position: "Web Developer",
      company: "Dokonaly",
      location: "Chennai, India",
      duration: "2022 – 2023",
      type: "Full-time",
      description: "Built and maintained backend services for a modern e-commerce platform, focusing on payments, inventory, and order management.",
      achievements: [
        "Integrated Stripe for secure payments and webhooks",
        "Developed product catalog, cart APIs, and order workflows",
        "Reduced DB load time by 40% through query optimization",
        "Connected logistics APIs for real-time delivery updates"
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      position: "Backend Developer Trainee",
      company: "FunctionUp",
      location: "Bangalore, India",
      duration: "Apr 2022 – Dec 2022",
      type: "Full-time (Training)",
      description: "Completed a hands-on backend development training program with real-world projects and infrastructure exposure.",
      achievements: [
        "Built scalable APIs using Node.js, MongoDB, and Redis",
        "Worked on Dockerized microservices with CI/CD deployment",
        "Collaborated on production systems with 1000+ daily users",
        "Contributed to backend of a live coding platform (FunctionUp)"
      ],
      color: "from-indigo-400 to-purple-500"
    },
    {
      position: "Teaching Assistant",
      company: "FunctionUp",
      location: "Bangalore, India",
      duration: "2021 – 2022",
      type: "Part-time",
      description: "Mentored backend learners, conducted code reviews, and supported curriculum development for a live coding platform.",
      achievements: [
        "Guided 150+ students in Node.js, DBs, and backend best practices",
        "Hosted weekly code review and debugging sessions",
        "Contributed to curriculum and assignment design",
        "Maintained 95%+ learner satisfaction rate"
      ],
      color: "from-cyan-400 to-blue-500"
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of building scalable solutions and leading development teams
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline Indicator */}
                <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center mb-4`}>
                    <Building size={24} className="text-white" />
                  </div>
                  <div className="hidden lg:block w-0.5 h-full bg-gray-700"></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 245, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePost("resumeDownloaded")}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 neon-glow mx-auto"
          >
            <Download size={20} />
            Download Complete Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;