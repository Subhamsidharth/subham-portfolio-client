import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: "Languages & Templating",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "HTML", "CSS", "EJS", "Handlebars"],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Database size={32} />,
      title: "Backend & Databases",
      skills: [
        "Node.js", "Express", "Koa",
        "MongoDB", "PostgreSQL", "Redis",
        "Database Design", "ORMs",
        "REST APIs", "GraphQL", "System Design"
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <Cloud size={32} />,
      title: "Infrastructure",
      skills: [
        "AWS", "Azure", "Docker", "PM2", "Nginx",
        "CI/CD", "Domain Management", "SSL",
        "Monitoring", "Blob Storage", "Render", "Linux Servers"
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Wrench size={32} />,
      title: "Tools & Services",
      skills: [
        "Stripe", "Razorpay", "Twilio", "Nodemailer",
        "Prisma", "RabbitMQ", "Fyno",
        "Git", "GitHub", "Bitbucket", "Postman",
        "Jira", "VS Code"
      ],
      color: "from-cyan-400 to-blue-500"
    },
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Skills & Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-card rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 mx-auto`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform`}></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Apollo Server",
              "MQTT",
              "CDN",
              "CloudFront",
              "NodeMailer",
              "Email Notifications",
              "Firebase Notifications",
              "Stripe Webhooks",
              "Razorpay Webhooks",
              "Webhook Handling",
              "CRON Jobs",
              "Timezone Handling",
              "OAuth 2.0",
              "Socket.io",
              "Azure OpenAI API",
              "Azure Computer Vision API",
              "Generative AI (Prompt-based)"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-gray-300 hover:text-cyan-400 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;