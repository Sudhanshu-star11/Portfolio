"use client";

import { motion } from "framer-motion";
import CircuitBackground from "./CircuitBackground";

const experiences = [
  {
    company: "SKSoftware Consultancy Limited",
    client: "Advantmed Healthcare (US)",
    role: "Senior Test Engineer",
    duration: "April 2024 – Mar 2026",
    points: [
      "Designed and executed 3000+ test cases, achieving 95% test coverage.",
      "Conducted API testing using Postman, Nitro validating 200+ API endpoints.",
      "Ensured smooth deployments by validating bug fixes and conducting post-release testing.",
      "Collaborated with developers, business analysts, and Product Head, identifying gaps and improving efficiency.",
      "Led UAT sessions with stakeholders, ensuring alignment with business requirements.",
      "Verified data integrity through SQL, GraphQL and REST API testing.",
    ],
  },
  {
    company: "Tech Mahindra",
    client: "Facebook/Meta (UK)",
    role: "Test Engineer",
    duration: "July 2023 – April 2024",
    points: [
      "Tested Messenger desktop, web, and mobile applications.",
      "Ensured 99% uptime by detecting and resolving critical functional issues.",
      "Led real-time sync testing across multiple devices, reducing messaging inconsistencies by 40%.",
      "Conducted UI/UX testing to improve application usability.",
      "Verified video call and media sharing functionalities across devices.",
    ],
  },
  {
    company: "SKSoftware Consultancy Limited",
    client: "Transport for London (UK)",
    role: "Test Engineer",
    duration: "July 2022 – June 2023",
    points: [
      "Performed manual testing on web and mobile apps used by millions of daily commuters.",
      "Conducted end-to-end regression testing, decreasing production defects by 35%.",
      "Developed automated regression test cases, reducing test cycle time by 20%.",
      "Tested real-time travel updates ensuring accurate data synchronization.",
      "Conducted accessibility testing, ensuring compliance with WCAG standards.",
    ],
  },
  {
    company: "Capgemini",
    client: "Cisco (US)",
    role: "Test Engineer",
    duration: "July 2021 – June 2022",
    points: [
      "Executed functional and usability testing for NCS 4000 & NCS 1010 websites.",
      "Developed automated regression test cases, reducing test cycle time by 20%.",
      "Led defect triage meetings, reducing defect turnaround time by 30%.",
      "Performed API and backend testing for data integrity and security compliance.",
    ],
  },
  {
    company: "Sanvi Technology",
    client: "In-House",
    role: "Trainee Test Engineer",
    duration: "July 2020 – June 2021",
    points: [
      "Performed manual testing on web and mobile applications.",
      "Conducted end-to-end regression testing.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-20 bg-[#f8f9fc] py-32 px-8 border-t border-neutral-200 overflow-hidden"
    >
      {/* Live Circuit Background */}
      <CircuitBackground />

      {/* Subtle top gradient fade so it blends from above */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#f8f9fc] to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8f9fc] to-transparent z-[1] pointer-events-none" />

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
            Career Timeline
          </p>
          <h2 className="text-5xl md:text-7xl font-light text-neutral-900 tracking-tight">
            Professional <span className="font-medium">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i + 1}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12
                         border border-white hover:border-blue-100
                         shadow-sm hover:shadow-xl hover:shadow-blue-900/[0.06]
                         transition-all duration-500"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full bg-gradient-to-b from-blue-300 via-indigo-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-neutral-900">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-light text-neutral-500 mt-2">
                    {exp.company}{" "}
                    <span className="text-neutral-300 mx-2">|</span>{" "}
                    <span className="text-neutral-800 font-medium">
                      Client: {exp.client}
                    </span>
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="text-sm font-medium uppercase tracking-wider text-blue-600/80 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                    {exp.duration}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start text-neutral-600 font-light text-lg"
                  >
                    <span className="mr-4 text-blue-300 mt-1 shrink-0">&#9679;</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
