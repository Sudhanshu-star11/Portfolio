"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import BugSimulation from "./animations/BugSimulation";

export default function HeroSTaaS() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-slate-50">
      {/* Soft gradient background replacing circuit */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-sky-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 mb-8 backdrop-blur-sm shadow-sm"
          >
            <ShieldCheck size={16} />
            <span className="text-sm font-bold tracking-wide uppercase">Elite Testing as a Service</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6 leading-[1.1] font-display"
          >
            WE CATCH THE BUGS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              BEFORE YOUR COMPETITORS
            </span>
            <br /> CATCH YOUR USERS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 font-medium"
          >
            Sky-High Standards, Rapid Results, Absolute Confidence. Partner with SKIE Global to deliver flawless software applications and dominate your online presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link
              href="/services"
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_8px_20px_rgb(37,99,235,0.3)] hover:shadow-[0_10px_25px_rgb(37,99,235,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="group px-8 py-4 bg-white text-slate-800 border border-slate-200 font-bold rounded-full hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Zap size={18} className="text-blue-500" />
              Partner with Us
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative"
        >
          {/* Glass morphic container for the simulation */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-[40px] border border-white/60 shadow-[0_20px_60px_rgb(0,0,0,0.05)] transform rotate-3 scale-105" />
          <div className="relative p-6">
            <BugSimulation />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
