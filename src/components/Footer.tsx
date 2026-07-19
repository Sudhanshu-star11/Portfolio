"use client";

import ConstellationBackground from "./ConstellationBackground";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-slate-50 overflow-hidden py-32 px-8 text-center border-t border-slate-200">
      {/* Light version of the Constellation Background - assuming it looks okay, else we just use a clean light background */}
      <div className="absolute inset-0 z-0 opacity-20">
         <ConstellationBackground />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-bold font-display text-slate-900 mb-8 tracking-tight">
          Ready to <span className="text-blue-600">Connect?</span>
        </h2>
        <p className="text-slate-600 font-medium text-lg max-w-xl mx-auto mb-16">
          Let's discuss how our elite software testing services can help you deliver flawless applications and accelerate your business growth.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mb-24">
          <a href="mailto:business@skieglobal.com" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors uppercase tracking-wider shadow-[0_8px_20px_rgb(37,99,235,0.3)] hover:shadow-[0_10px_25px_rgb(37,99,235,0.5)]">
            business@skieglobal.com
          </a>
        </div>
        <p className="text-sm font-bold text-slate-400">
          © {new Date().getFullYear()} SKIE Global. All rights reserved. ALWAYS HAPPY TO SUPPORT.
        </p>
      </div>
    </footer>
  );
}
