import { motion } from 'framer-motion';
import { Server, Shield, Zap, Globe, MessageCircle, Mail, Bell, Brain, Activity } from 'lucide-react';

const Services = () => {
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

  const handleClickBtn = (name: string) => () => {
    if (name === "HireMe") {
      handlePost("getHired")
      return
    }
    if (name === "DiscussYourProject") {
      handlePost("discussProject")
      return
    }
  }
  const services = [
    {
      icon: <Server size={32} />,
      title: "API & Backend Architecture",
      description: "Scalable REST and GraphQL APIs with robust architecture patterns, microservices design, and performance optimization.",
      features: [
        "RESTful API Design",
        "GraphQL Implementation",
        "Microservices Architecture",
        "Performance Optimization"
      ]
    },
    {
      icon: <Shield size={32} />,
      title: "Admin Dashboards & CMS",
      description: "Custom admin panels and content management systems with role-based access control and intuitive interfaces.",
      features: [
        "Role-based Access Control",
        "Real-time Analytics",
        "Content Management",
        "User Management"
      ]
    },
    {
      icon: <Zap size={32} />,
      title: "Real-time Applications",
      description: "IoT systems, WebSocket applications, GPS tracking, and real-time data processing solutions.",
      features: [
        "WebSocket Integration",
        "IoT Data Processing",
        "GPS Tracking Systems",
        "Real-time Analytics"
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Payment Integration",
      description: "Secure payment processing with Stripe, Razorpay, and subscription management for SaaS platforms.",
      features: [
        "Stripe & Razorpay Integration",
        "Subscription Billing",
        "Multi-currency Support",
        "Webhook & Fraud Handling"
      ]
    },
    {
      icon: <MessageCircle size={32} />,
      title: "DevOps & Cloud Infrastructure",
      description: "AWS and Azure cloud setup, Docker containerization, CI/CD pipelines, and scalable production deployments.",
      features: [
        "AWS & Azure Setup",
        "Docker & PM2",
        "CI/CD Pipelines",
        "Domain & SSL Configuration"
      ]
    },
    {
      icon: <Bell size={32} />,
      title: "Notification Systems",
      description: "Smart notification infrastructure using emails, SMS, push notifications, and event-driven messaging.",
      features: [
        "Email & SMS Integration",
        "Firebase Push Notifications",
        "Webhook Triggers",
        "Transactional Messaging"
      ]
    },
    {
      icon: <Brain size={32} />,
      title: "AI & Workflow Automation",
      description: "Automate workflows with Generative AI, OCR-based document processing, and prompt-based logic.",
      features: [
        "OCR (Azure Computer Vision)",
        "Generative AI (Azure OpenAI)",
        "Prompt-based Automation",
        "Smart Data Extraction"
      ]
    },
    {
      icon: <Activity size={32} />,
      title: "Monitoring & Performance Tuning",
      description: "Ensure reliability and uptime with logging, error tracking, rate limiting, and performance analysis.",
      features: [
        "API Monitoring",
        "Rate Limiting",
        "PM2 Logs & Crash Recovery",
        "Performance Profiling"
      ]
    }
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Let's Build Your Vision</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive backend and full-stack development services to bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life with cutting-edge technology and proven expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:ssmahapatra1478@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 245, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClickBtn("HireMe")}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 neon-glow"
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
              Contact for Freelance Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;