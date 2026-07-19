"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function MediaCarousel() {
  const images = [
    {
      src: "/images/isometric-testing.png",
      title: "Comprehensive Architecture Testing",
      subtitle: "End-to-End System Integration"
    },
    {
      src: "/images/testing-icons.png",
      title: "Full-Spectrum QA Tooling",
      subtitle: "Security, Performance, and Automation"
    },
    {
      src: "/images/o7-services.png",
      title: "Robust Software Testing",
      subtitle: "The Key to a Seamless User Experience"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-[40px] overflow-hidden bg-slate-100 shadow-[0_20px_50px_rgb(0,0,0,0.1)] mb-20 border border-slate-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            fill
            className="object-cover md:object-contain object-center bg-white"
            priority={currentIndex === 0}
          />
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

          {/* Animated Text Content */}
          <div className="absolute bottom-10 left-10 right-10 flex flex-col items-start">
             <motion.span
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, duration: 0.5 }}
               className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2"
             >
               {images[currentIndex].subtitle}
             </motion.span>
             <motion.h3
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.7, duration: 0.5 }}
               className="text-white text-3xl md:text-4xl font-display font-bold"
             >
               {images[currentIndex].title}
             </motion.h3>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="absolute bottom-6 right-10 flex gap-2 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-blue-500" : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
