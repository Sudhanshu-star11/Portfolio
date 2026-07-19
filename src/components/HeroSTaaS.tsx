"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import CircuitBackground from "./CircuitBackground";

export default function HeroSTaaS() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <CircuitBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-sm"
        >
          <ShieldCheck size={16} />
          <span className="text-sm font-medium tracking-wide">ELITE TESTING AS A SERVICE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1] font-display"
        >
          WE CATCH THE BUGS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
            BEFORE YOUR COMPETITORS
          </span>
          <br /> CATCH YOUR USERS.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light"
        >
          Sky-High Standards, Rapid Results, Absolute Confidence. Partner with SKIE Global to deliver flawless software applications and dominate your online presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#services"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-neutral-200 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </a>
          
          <a
            href="#contact"
            className="group px-8 py-4 bg-transparent text-white border border-white/20 font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            <Zap size={18} className="text-blue-400" />
            Partner with Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
