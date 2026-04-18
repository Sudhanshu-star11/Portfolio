"use client";

import { motion } from "framer-motion";
import AuroraBackground from "./AuroraBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-white py-32 px-8 overflow-hidden">
      {/* Live Aurora Background */}
      <AuroraBackground />

      {/* Grain overlay for depth */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        <motion.div
          className="md:w-1/3 space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <p className="text-sm uppercase tracking-[0.2em] font-medium text-neutral-400">
            Professional Summary
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
            Testing for <br />
            <span className="font-medium">Perfection.</span>
          </h2>
          <div className="w-12 h-1 bg-neutral-900 rounded-full" />
        </motion.div>

        <motion.div
          className="md:w-2/3 space-y-8 text-lg font-light text-neutral-600 leading-relaxed
                     bg-white/50 backdrop-blur-2xl p-8 md:p-10 rounded-3xl
                     border border-white/70 shadow-xl shadow-blue-100/30"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <p>
            I am a Dedicated Senior Test Engineer with over{" "}
            <b className="text-neutral-900 font-medium">6 years of experience</b> in
            Front-end (web, desktop, and mobile application) and Back-end (API and
            Database) testing. My expertise spans diverse domains including Ecommerce,
            Social Media, HealthCare, and Finance.
          </p>
          <p>
            I am adept at ensuring{" "}
            <b className="text-neutral-900 font-medium">99% application uptime</b> by
            implementing rigorous testing strategies and{" "}
            <b className="text-neutral-900 font-medium">reducing defect leakage by 30%</b>{" "}
            through comprehensive test case execution. My proven ability to manage
            cross-functional teams and optimize test processes has consistently driven
            efficiency improvements of up to 40%.
          </p>
          <p>
            My edge lies in an unwavering commitment to excellence and client
            satisfaction. I'm always available to provide unparalleled client support
            and utilize my strong client-handling skills to foster a collaborative team
            environment. I'm not just a candidate; I'm the dependable partner your
            projects deserve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
