import { motion } from 'framer-motion';
import { Github, ExternalLink, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    // 🥇 HIGH PRIORITY — Featured Production & Freelance Projects
    {
      name: "BluelineMD",
      stack: [
        "Webhook", "Node.js", "Express", "MongoDB", "Redis",
        "AWS S3", "PostgreSQL", "Razorpay", "Hostinger",
        "Docker", "PM2", "Nginx"
      ],
      description: "Building a scalable EMR SaaS platform for clinics with secure Razorpay subscriptions, multi-tenant database architecture, and file handling via AWS S3. Deployed on Hostinger using Docker, PM2, and Nginx for high-performance production setup.",
      github: "",
      demo: "https://bluelinemd.com/",
      tag: "Freelance",
      color: "from-teal-400 to-blue-500"
    },
    {
      name: "AllMasters",
      stack: [
        "Node.js", "MongoDB", "Express", "Azure", "Azure File Storage",
        "ejs", "RabbitMQ", "Azure Computer Vision API", "CRON",
        "Generative AI", "Timezone", "Microservices"
      ],
      description: "Engineered a timezone-aware microservices backend for an international shipping platform. Automated global workflows with CRON, improved task handling by 45% using RabbitMQ, and reduced manual work by 60% via Azure Computer Vision OCR and Generative AI modules.",
      github: "",
      demo: "https://www.allmasters.ai/",
      tag: "Professional",
      color: "from-green-400 to-blue-500"
    },
    {
      name: "PetNav",
      stack: [
        "Node.js", "Express", "MongoDB", "Socket.IO", "NodeMailer",
        "Stripe", "FirebaseNotifications", "Twilio", "stream-chat",
        "googleapis"
      ],
      description: "Delivered the complete backend for a US-based pet care platform supporting groomers, vets, and users. Built modules for appointment booking, real-time chat, lost & found posting, email/SMS alerts, and Stripe payments. Deployed on AWS EC2 with wildcard SSL and integrated Stream-powered chat.",
      github: "",
      demo: "https://stage.petnav.com/",
      tag: "Freelance",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Classhila",
      stack: ["Node.js", "MongoDB", "Express", "Razorpay", "AWS S3", "CDN", "CloudFront"],
      description: "Built a complete backend for a course-selling platform with secure Razorpay integration, dynamic course access, and protected media streaming using AWS S3 and CloudFront CDN. Improved video delivery performance by 60% and ensured access control via signed URLs.",
      github: "",
      demo: "https://classhila.com",
      tag: "Freelance",
      color: "from-green-400 to-blue-500"
    },
    {
      name: "FunctionUp",
      stack: ["Express", "Redis", "Docker", "PM2", "MongoDB", "AWS"],
      description: "Contributed to the backend of a live coding education platform with 1000+ daily users. Optimized APIs, added Redis caching, and containerized services using Docker. Improved response times by 60% and deployed scalable architecture on AWS with PM2 process management.",
      github: "",
      demo: "https://functionup.org/",
      tag: "Professional",
      color: "from-red-400 to-pink-500"
    },

    // 🥈 MID-TIER — Specialized Tech, IoT, Data Aggregation
    {
      name: "IoT Data Pipeline",
      stack: ["AWS", "Lambda", "DynamoDB", "MQTT", "Node.js", "Teltonika FMB930"],
      description: "Built a serverless IoT backend pipeline to process real-time data from Teltonika FMB930 devices, including ignition status and GPS data. Used MQTT for communication, AWS Lambda for processing, and DynamoDB for scalable storage. Enabled fast, bidirectional data flow between IoT devices and backend systems.",
      github: "",
      demo: "",
      tag: "Client Work",
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Sales Analytics API",
      stack: ["MongoDB", "Express", "GraphQL", "Node.js", "Aggregation", "Apollo Server", "Crypto"],
      description: "Built a GraphQL-based sales analytics API using Apollo Server with advanced MongoDB aggregations. Used UUIDs via crypto module instead of default _id for better abstraction and data handling.",
      github: "https://github.com/Subhamsidharth/sales-analytics-api/tree/master",
      demo: "",
      tag: "Personal",
      color: "from-pink-400 to-red-500"
    },

    // 🥉 CLASSIC BACKEND PROJECTS — CRUD, Utility, Clones
    {
      name: "Products_Management",
      stack: ["Node.js", "Express", "JWT", "MongoDB", "Redis", "AWS S3"],
      description: "Developed a full-featured e-commerce backend with JWT auth, product/catalog APIs, cart management, and secure image uploads via AWS S3. Used Redis for caching to enhance performance and scalability, similar to platforms like Myntra.",
      github: "https://github.com/Subhamsidharth/Project_Products_Management",
      demo: "",
      tag: "Personal",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "IMDB_CLONE",
      stack: ["Node.js", "Express", "JWT", "MongoDB"],
      description: "Built a movie database clone with user authentication, movie search, and dynamic rating features. Used JWT for secure auth and optimized MongoDB queries for fast performance.",
      github: "https://github.com/Subhamsidharth/IMDB_CLONE",
      demo: "",
      tag: "Personal",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "URL-Shortner",
      stack: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
      description: "Developed a URL shortening service with token-based access, secure redirection, and analytics tracking. Used Redis for fast lookups and MongoDB for persistent storage.",
      github: "https://github.com/Subhamsidharth/URL_Shortner",
      demo: "",
      tag: "Personal",
      color: "from-indigo-400 to-purple-500"
    },
    {
      name: "Book_Management_System",
      stack: ["Node.js", "Express", "MongoDB", "AWS S3"],
      description: "Developed a RESTful library management backend with CRUD operations for books and users. Integrated AWS S3 for secure file storage and implemented clean routing with Express and MongoDB.",
      github: "https://github.com/Subhamsidharth/Book_Management_System",
      demo: "",
      tag: "Personal",
      color: "from-yellow-300 to-amber-500"
    }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of impactful solutions built with modern technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, rotateY: 5 }}
              className="glass-card rounded-2xl p-6 "
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-1 text-xs">
                  <Tag size={12} className="text-gray-400" />
                  <span className={`px-2 py-1 rounded-full text-xs ${project.tag === 'Client Work' ? 'bg-green-500/20 text-green-400' :
                    project.tag === 'Freelance' ? 'bg-blue-500/20 text-blue-400' :
                      project.tag === 'Professional' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-purple-500/20 text-purple-400'
                    }`}>
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 border-t border-gray-700">
                {
                  project.github !== "" &&
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                }
                {
                  project.demo !== "" &&
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                }
              </div>

              {/* Gradient Border Effect */}
              <div className={`inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${project.color} p-[1px]`}>
                <div className="w-full h-full rounded-2xl bg-gray-800"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;