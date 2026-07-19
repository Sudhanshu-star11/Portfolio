"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-[100] w-full flex justify-center p-4 mt-2"
    >
      <div className="bg-black/50 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl transition-all">
        <a href="#" className="font-bold text-white tracking-tight text-xl font-display">
          SKIE<span className="text-blue-500">GLOBAL</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="mailto:business@skieglobal.com"
          className="hidden md:block text-sm font-bold bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition-colors uppercase tracking-wider"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:business@skieglobal.com"
            className="text-center text-sm font-bold bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-500 transition-colors uppercase"
          >
            Let's Talk
          </a>
        </div>
      )}
    </motion.nav>
  );
}
