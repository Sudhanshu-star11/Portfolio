"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Webhook, MonitorCheck, ClipboardCheck, Code2 } from "lucide-react";
import Link from "next/link";

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
    <section id="services" className="py-32 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
            Elite Testing <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            From early-stage APIs to final user acceptance, we provide comprehensive quality assurance to safeguard your digital ecosystem.
          </p>
          <Link href="/services" className="inline-block px-6 py-3 bg-slate-100 text-blue-600 font-bold rounded-full hover:bg-slate-200 transition-colors">
            View All 30+ Services &rarr;
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)]"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500 origin-left relative z-10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10 font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
