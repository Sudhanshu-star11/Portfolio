"use client";

import { motion } from "framer-motion";
import { Users, Award, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-purple-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 font-display tracking-tight">
            About <span className="text-blue-600">SKIE Global</span>
          </h1>
          <p className="text-xl text-slate-600 mb-16 font-medium leading-relaxed">
            We are a team of passionate QA engineers dedicated to elevating the standard of software globally. With over a decade of combined experience, we act as the final line of defense between your code and your customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200 shadow-sm"
          >
            <Users className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-4xl font-bold text-slate-900 mb-2 font-display">15+</h3>
            <p className="text-slate-500 font-medium">Global Clients</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200 shadow-sm"
          >
            <Award className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-4xl font-bold text-slate-900 mb-2 font-display">100%</h3>
            <p className="text-slate-500 font-medium">Release Success Rating</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200 shadow-sm"
          >
            <Shield className="text-blue-600 mx-auto mb-4" size={40} />
            <h3 className="text-4xl font-bold text-slate-900 mb-2 font-display">6+</h3>
            <p className="text-slate-500 font-medium">Years Expertise</p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
