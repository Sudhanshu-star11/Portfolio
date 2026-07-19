"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Requirement Analysis",
      description: "We dive deep into your product vision, identifying critical paths, user journeys, and potential risk areas before a single test is written."
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Crafting a tailored test strategy covering manual, automated, performance, and security testing to align with your release cycles."
    },
    {
      number: "03",
      title: "Test Execution & Automation",
      description: "Rigorous execution of test cases and building scalable automation frameworks integrated directly into your CI/CD pipelines."
    },
    {
      number: "04",
      title: "Continuous Monitoring & UAT",
      description: "Facilitating User Acceptance Testing and providing continuous quality metrics to ensure your software is release-ready and flawless."
    }
  ];

  return (
    <section id="process" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
            How We Manage <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-lg text-slate-600">
            A transparent, process-driven approach to ensure quality is embedded at every stage of your software development lifecycle.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 -translate-x-0 md:-translate-x-1/2 rounded-full bg-white border-4 border-slate-100 shadow-md flex items-center justify-center z-10 text-blue-600 font-bold font-display">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16"} pt-2`}>
                    <div className="bg-white/80 backdrop-blur-md border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-3xl hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
