"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-[10%] left-[60%] w-[400px] h-[400px] bg-sky-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">
            Let's build <br/><span className="text-blue-600">quality together.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-12 font-medium">
            Reach out to discuss your QA needs. Whether you need a quick audit or a full embedded QA team, we are ready to help.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email Us</p>
                <a href="mailto:business@skieglobal.com" className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
                  business@skieglobal.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Headquarters</p>
                <p className="text-xl font-bold text-slate-800">
                  Global Operations
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 bg-white p-8 md:p-12 rounded-[40px] border border-slate-200 shadow-[0_20px_50px_rgb(0,0,0,0.05)]"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-8 font-display">Send a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Full Name</label>
              <input type="text" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-800" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Work Email</label>
              <input type="email" className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-800" placeholder="john@company.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">How can we help?</label>
              <textarea rows={4} className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-slate-800 resize-none" placeholder="Tell us about your testing needs..."></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors uppercase tracking-wider shadow-[0_8px_20px_rgb(37,99,235,0.3)] hover:shadow-[0_10px_25px_rgb(37,99,235,0.5)]">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
