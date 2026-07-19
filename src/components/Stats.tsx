"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      // easeOutExpo
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOut * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count}</span>;
}

export default function Stats() {
  const stats = [
    {
      value: 15,
      suffix: "+",
      label: "Projects Delivered",
      description: "Successfully shipped high-quality applications across industries."
    },
    {
      value: 7,
      suffix: "+",
      label: "Years of TRUST",
      description: "Consistent, reliable QA and software testing partnerships."
    },
    {
      value: 100,
      suffix: "%",
      label: "Seamless Experience",
      description: "Our QA ensures users enjoy a frustration-free experience."
    },
    {
      value: 0,
      suffix: " Crashes",
      label: "Built For Stability",
      description: "We help businesses eliminate app crashes and deliver stability."
    }
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-slate-50 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow"
            >
              <div className="text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 mb-4">
                <Counter to={stat.value} duration={2.5} />
                {stat.suffix}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{stat.label}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
