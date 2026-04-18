"use client";

import { useState, useEffect } from "react";
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
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
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
      <div className="bg-white/70 backdrop-blur-xl border border-neutral-200 shadow-sm rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl transition-all">
        <a href="#" className="font-medium text-neutral-900 tracking-tight text-lg">
          SK<span className="text-neutral-400">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="mailto:sudhanshu@skieglobal.in"
          className="hidden md:block text-sm font-medium bg-neutral-900 text-white px-5 py-2 rounded-full hover:bg-neutral-800 transition-colors"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-neutral-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-4 right-4 bg-white border border-neutral-200 rounded-3xl p-6 shadow-xl flex flex-col gap-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:sudhanshu@skieglobal.in"
            className="text-center text-sm font-medium bg-neutral-900 text-white px-5 py-3 rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      )}
    </motion.nav>
  );
}
