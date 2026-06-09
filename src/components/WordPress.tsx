import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Puzzle, ShieldCheck, Gauge, Palette } from "lucide-react";

const plugins = [
  {
    name: "Tutor LMS Exam Lock",
    desc: "Browser-based exam security with fullscreen enforcement, input blocking, and auto-submit on violation",
    techs: ["PHP", "JavaScript", "Tutor LMS"],
  },
  {
    name: "Tutor LMS Plagiarism",
    desc: "Full-stack plagiarism engine with text extraction, OCR fallback, Google API integration, and weighted scoring",
    techs: ["PHP", "JavaScript", "MySQL", "OCR"],
  },
  {
    name: "Tutor LMS BuddyPress Groups",
    desc: "Multi-system automation that creates course communities with role-based access control and enrollment triggers",
    techs: ["PHP", "BuddyPress", "bbPress", "WooCommerce"],
  },
  {
    name: "Tutor LMS Survey Extender",
    desc: "Extensible survey system with dynamic question builder, dual storage, and comprehensive analytics dashboard",
    techs: ["PHP", "JavaScript", "MySQL", "Shortcodes"],
  },
];

const capabilities = [
  { icon: Puzzle, label: "Custom Plugin Dev (PHP)" },
  { icon: Palette, label: "Theme Development" },
  { icon: Gauge, label: "Performance Optimization" },
  { icon: ShieldCheck, label: "Security Hardening" },
];

const WordPress = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 block" style={{ fontFamily: "Inter, sans-serif" }}>
            WordPress Engineering
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e]">
            4 Production <span className="gold-gradient-text">Plugins</span>
          </h2>
          <p className="text-base text-[#2d2d2d]/60 mt-4 max-w-2xl" style={{ fontFamily: "Inter, sans-serif" }}>
            Built from scratch for Tutor LMS. Real engineering solving real problems in education:
            exam security, plagiarism detection, community automation, and learning analytics.
          </p>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {capabilities.map((cap) => (
            <div key={cap.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAF5] border border-[#D4A017]/10">
              <cap.icon size={14} className="text-[#D4A017]" />
              <span className="text-xs font-medium text-[#2d2d2d]" style={{ fontFamily: "Inter, sans-serif" }}>
                {cap.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Plugin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plugins.map((plugin, i) => (
            <motion.div
              key={plugin.name}
              className="p-6 rounded-2xl bg-[#FAFAF5] border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Puzzle size={16} className="text-[#D4A017]" />
                </div>
                <h3 className="font-semibold text-[#1a1a2e] text-base" style={{ fontFamily: "Inter, sans-serif" }}>
                  {plugin.name}
                </h3>
              </div>
              <p className="text-sm text-[#2d2d2d]/60 mb-4 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                {plugin.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {plugin.techs.map((tech) => (
                  <span key={tech} className="tech-badge text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordPress;
