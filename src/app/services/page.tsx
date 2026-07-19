"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const manualServices = [
    "Broken Links Detection", "Button & Clickability Testing", "Navigation Menu Testing", 
    "UI Layout Consistency Check", "Responsive Design Testing 📱", "Image & Media Verification", 
    "Text Overflow & Visibility Check", "Page Redirection Validation", "Basic Form Validation Testing", 
    "Input Field Behavior Testing", "Error Message Validation ⚠️", "Basic Accessibility Check", 
    "Bug Reporting with Screenshots 📸", "Basic Database Testing", "Header & Footer Link Verification", 
    "Hyperlink & Anchor Link Testing", "Page Load Verification ⚡", "Cross-Browser Testing 🌐", 
    "Mobile Usability Testing", "User Flow Testing", "Pagination Testing", 
    "Search Functionality Testing 🔍", "File Upload/Download Verification", "Session Handling (Login/Logout) 🔐", 
    "Data Display Verification", "Exploratory Testing 🧠", "Content Alignment Check", 
    "Basic API Testing 🔗", "Basic Performance Testing 📊"
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-sky-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm mb-6 shadow-sm border border-blue-200">
            6+ Years of Expertise in Functional/Manual Testing 🚀
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Testing Services</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            We leave no stone unturned. Our exhaustive testing protocols ensure that every button click, page load, and user flow works flawlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manualServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 10) * 0.05 }}
              className="flex items-start gap-4 p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="text-blue-500 mt-1 flex-shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <p className="text-slate-800 font-bold">{service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
