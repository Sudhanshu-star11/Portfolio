"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle2, ShieldAlert } from "lucide-react";

export default function BugSimulation() {
  const [step, setStep] = useState(0); // 0: Normal, 1: Error/Crash, 2: Fixing, 3: Success

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        setStep(0);
        await new Promise(r => setTimeout(r, 2000));
        setStep(1); // Crash
        await new Promise(r => setTimeout(r, 2500));
        setStep(2); // QA Fix
        await new Promise(r => setTimeout(r, 2000));
        setStep(3); // Success
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    sequence();
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto h-[320px] bg-white rounded-3xl shadow-[0_20px_50px_rgb(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col justify-center items-center p-8">
      
      {/* Background Pulse indicating active simulation */}
      <div className="absolute inset-0 bg-slate-50/50 flex items-center justify-center">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 to-transparent opacity-50" />
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="normal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-4 relative z-10 w-full"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-2xl mb-2 animate-pulse" />
            <div className="w-3/4 h-4 bg-slate-100 rounded-full" />
            <div className="w-1/2 h-4 bg-slate-100 rounded-full" />
            <div className="w-full h-10 bg-blue-50 rounded-xl mt-4 flex items-center justify-center">
              <span className="text-blue-400 text-sm font-medium">Processing...</span>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, x: [0, -10, 10, -10, 10, 0] }}
            transition={{ x: { duration: 0.4, ease: "easeInOut" } }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center gap-4 relative z-10 w-full"
          >
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-2 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <AlertCircle size={40} />
            </div>
            <h3 className="text-red-600 font-bold text-xl">500 Server Error</h3>
            <div className="w-full h-10 bg-red-100 rounded-xl mt-2 border border-red-200 flex items-center justify-center">
              <span className="text-red-600 text-sm font-bold">App Crashed / Login Failed</span>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="fixing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-4 relative z-10 w-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 rounded-full border-4 border-slate-100 border-t-blue-500 flex items-center justify-center mb-2"
            >
              <ShieldAlert className="text-blue-500 animate-pulse" size={24} />
            </motion.div>
            <h3 className="text-blue-600 font-bold text-lg">SKIE QA Analyzing...</h3>
            <p className="text-slate-400 text-xs text-center">Finding bugs before users do.</p>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="flex flex-col items-center gap-4 relative z-10 w-full"
          >
             <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-2 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              <CheckCircle2 size={40} />
            </motion.div>
            <h3 className="text-green-600 font-bold text-xl">Issue Resolved</h3>
            <div className="w-full h-10 bg-green-100 rounded-xl mt-2 border border-green-200 flex items-center justify-center">
              <span className="text-green-700 text-sm font-bold">Release Success: 100% Rating</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
