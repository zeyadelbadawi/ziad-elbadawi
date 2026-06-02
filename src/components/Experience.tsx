import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Arab Security Group",
    role: "Full Stack Developer",
    period: "Jun 2024 – Present",
    location: "Cairo, Egypt",
    points: [
      "Built scalable web and e-commerce applications using Next.js, React, Node.js, PostgreSQL",
      "Customized WordPress and Shopify websites including theme development and plugin customization",
      "Managed production environments — VPS setup, deployments, domains, email configuration",
    ],
  },
  {
    company: "Elmaady Solutions",
    role: "Full Stack Developer",
    period: "Nov 2023 – Jan 2024",
    location: "Giza, Egypt",
    points: [
      "Developed full-stack web applications using modern JavaScript frameworks",
      "Collaborated within Agile workflows improving delivery speed",
    ],
  },
  {
    company: "Information Technology Institute (ITI)",
    role: "Full Stack Web Intern",
    period: "Feb 2023 – Mar 2023",
    location: "Giza, Egypt",
    points: [
      "Built responsive web applications with React.js and RESTful APIs",
      "Integrated databases using Node.js and MongoDB",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#FAFAF5] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 block" style={{ fontFamily: "Inter, sans-serif" }}>
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e]">
            <span className="gold-gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#D4A017]/20" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-8 md:pl-20"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 rounded-full bg-[#D4A017] -translate-x-1/2 ring-4 ring-[#D4A017]/10" />

                <div className="p-6 rounded-2xl bg-white border border-[#D4A017]/10 hover:border-[#D4A017]/20 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs text-[#2d2d2d]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#2d2d2d]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a2e] mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-[#D4A017] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                    {exp.role}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#2d2d2d]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                        <Briefcase size={12} className="text-[#D4A017] mt-1 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;