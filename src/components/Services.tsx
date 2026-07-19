"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Webhook, MonitorCheck, ClipboardCheck, Code2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Web Application Testing",
      description: "Comprehensive functional, performance, and security testing for web platforms to ensure seamless user experiences across all browsers."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Testing",
      description: "Rigorous testing across iOS and Android devices, covering usability, responsiveness, and device-specific edge cases."
    },
    {
      icon: <Webhook size={32} />,
      title: "API Testing",
      description: "Validating core business logic, security, and performance at the API layer for robust and scalable backend systems."
    },
    {
      icon: <MonitorCheck size={32} />,
      title: "Desktop Application Testing",
      description: "Ensuring flawless execution and compatibility of desktop software across various operating systems and hardware configurations."
    },
    {
      icon: <ClipboardCheck size={32} />,
      title: "User Acceptance Testing (UAT)",
      description: "Validating end-to-end business flows with real-world scenarios to guarantee the software meets actual user requirements before release."
    },
    {
      icon: <Code2 size={32} />,
      title: "Test Automation",
      description: "Building robust automation frameworks integrated with CI/CD pipelines to accelerate release cycles without compromising quality."
    }
  ];

  return (
    <section id="services" className="py-32 bg-black relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Elite Testing <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            From early-stage APIs to final user acceptance, we provide comprehensive quality assurance to safeguard your digital ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800/50 transition-colors overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500 origin-left">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
