"use client";

import { motion } from "framer-motion";
import ConstellationBackground from "./ConstellationBackground";

const tools = [
  "Jira", "Zephyr", "X-ray", "Bugzilla", "Opengrok",
  "Vendor", "Jenkins", "Git", "AWS", "Postman", "Nitro", "JMeter",
];
const testingSkills = [
  { title: "Functional Testing", rating: "4.5/5", value: 90 },
  { title: "Postman / API Testing", rating: "4.0/5", value: 80 },
  { title: "Performance / JMeter", rating: "3.5/5", value: 70 },
  { title: "Database Testing / SQL", rating: "3.5/5", value: 70 },
];
const methods = [
  "Functional", "Regression", "Smoke", "Sanity",
  "Usability", "UAT", "Agile (Scrum)", "SDLC", "STLC",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

const barVariant = {
  hidden: { scaleX: 0 },
  visible: (val: number) => ({
    scaleX: val / 100,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-20 bg-white py-32 px-8 overflow-hidden"
    >
      {/* Live Constellation Background */}
      <ConstellationBackground />

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <p className="text-sm uppercase tracking-[0.2em] font-medium text-neutral-400 mb-4">
            Competencies
          </p>
          <h2 className="text-5xl md:text-7xl font-light text-neutral-900 tracking-tight">
            Technical <span className="font-medium">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-10">
            {/* Tools */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-sm shadow-indigo-100/40"
            >
              <h3 className="text-2xl font-medium text-neutral-900 mb-6">
                Tools &amp; Platforms
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-white border border-neutral-200 rounded-full
                               text-neutral-700 font-medium text-sm
                               hover:border-indigo-300 hover:text-indigo-700 hover:bg-indigo-50
                               transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Methodologies */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-sm shadow-indigo-100/40"
            >
              <h3 className="text-2xl font-medium text-neutral-900 mb-6">
                Methodologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {methods.map((m) => (
                  <span
                    key={m}
                    className="px-4 py-2 bg-neutral-900 text-white rounded-full font-medium text-sm
                               hover:bg-indigo-800 transition-colors duration-200 cursor-default"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Programming */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-sm shadow-indigo-100/40"
            >
              <h3 className="text-2xl font-medium text-neutral-900 mb-6">
                Programming
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full font-medium text-sm hover:bg-blue-100 transition-colors">JAVA</span>
                <span className="px-5 py-2.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full font-medium text-sm hover:bg-emerald-100 transition-colors">SQL</span>
                <span className="px-5 py-2.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-full font-medium text-sm hover:bg-purple-100 transition-colors">GraphQL</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Core Ratings */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-sm shadow-indigo-100/40"
            >
              <h3 className="text-2xl font-medium text-neutral-900 mb-8">
                Core Ratings
              </h3>
              <div className="space-y-7">
                {testingSkills.map((skill, idx) => (
                  <div key={skill.title}>
                    <div className="flex justify-between text-sm font-medium text-neutral-700 mb-2.5">
                      <span>{skill.title}</span>
                      <span className="text-indigo-500">{skill.rating}</span>
                    </div>
                    <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full origin-left"
                        style={{
                          background: `linear-gradient(90deg, #6366f1, #818cf8)`,
                        }}
                        variants={barVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={skill.value}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education & Soft Skills */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/80 shadow-sm shadow-indigo-100/40"
            >
              <h3 className="text-2xl font-medium text-neutral-900 mb-6">
                Education &amp; Soft Skills
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Strong analytical and problem-solving abilities",
                  "Effective communication and client-handling skills",
                  "Adaptability in fast-paced, high-pressure environments",
                ].map((s) => (
                  <li key={s} className="flex items-start text-neutral-600 font-light">
                    <span className="mr-3 text-indigo-300 mt-1">&#9679;</span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-neutral-100">
                <p className="font-medium text-neutral-900">
                  B.Tech (Computer Science)
                </p>
                <p className="text-neutral-500 text-sm mt-1">
                  Medicap&apos;s University Indore | 2020
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
