"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Animate the image panning down as we scroll through the steps (Simulating video scrolling)
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section id="process" className="py-32 bg-slate-50 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">
            How We Manage <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            A transparent, process-driven approach to ensure quality is embedded at every stage of your software development lifecycle.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Left: Sticky Video/Image Simulation */}
          <div className="lg:w-1/2 hidden lg:block h-[600px] sticky top-32 rounded-[40px] overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgb(0,0,0,0.1)] bg-slate-900">
            {/* The browser/dashboard mockup wrapper */}
            <div className="absolute top-0 inset-x-0 h-10 bg-slate-800 flex items-center px-4 gap-2 z-10 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-slate-400 font-mono">skie-test-management.app</div>
            </div>
            {/* The scrolling image */}
            <motion.div className="w-full h-[200%] absolute top-10" style={{ y: imageY }}>
              <Image 
                src="/images/test-dashboard.png" 
                alt="Test Dashboard" 
                fill
                className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </div>
          
          {/* Right: Scrolling Steps */}
          <div className="lg:w-1/2 space-y-12">
            {steps.map((step, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6 }}
                 className="relative flex flex-col items-start pt-2"
               >
                 <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 font-bold font-display flex items-center justify-center mb-6 shadow-sm border border-blue-200 text-xl">
                   {step.number}
                 </div>
                 <div className="bg-white/80 backdrop-blur-md border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-3xl hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all">
                   <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                   <p className="text-slate-600 leading-relaxed font-medium">
                     {step.description}
                   </p>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
