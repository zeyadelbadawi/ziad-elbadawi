import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, ExternalLink } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 block" style={{ fontFamily: "Inter, sans-serif" }}>
            Education
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e]">
            B.Sc. <span className="gold-gradient-text">Software Engineering</span>
          </h2>
          <p className="text-base text-[#2d2d2d]/60 mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
            Dual Degree Program · 2019 – 2023
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Greenwich */}
          <motion.div
            className="p-8 rounded-2xl bg-[#FAFAF5] border border-[#D4A017]/10 hover:border-[#D4A017]/20 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#D4A017]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e] text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  Greenwich University
                </h3>
                <p className="text-xs text-[#2d2d2d]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                  2021 – 2023
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#2d2d2d]/50 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              <MapPin size={12} />
              London, United Kingdom
            </div>
            <p className="text-sm text-[#2d2d2d]/70 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Exchange Program · Bachelor of Science
            </p>
            <p className="text-sm text-[#2d2d2d]/60 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
              Computer Science (Software Engineering)
            </p>
            <p className="text-xs text-[#2d2d2d]/50 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              Awarded 7 September 2023 · SmartVerify+ Certified
            </p>
            <a
              href="https://graduatedocsverifyqr.gre.ac.uk/?reference=58999905-01-QW43"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4A017] hover:underline"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <ExternalLink size={12} /> Verify Degree
            </a>
          </motion.div>

          {/* MSA */}
          <motion.div
            className="p-8 rounded-2xl bg-[#FAFAF5] border border-[#D4A017]/10 hover:border-[#D4A017]/20 transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#D4A017]" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e] text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
                  MSA University
                </h3>
                <p className="text-xs text-[#2d2d2d]/50" style={{ fontFamily: "Inter, sans-serif" }}>
                  2019 – 2023
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#2d2d2d]/50 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
              <MapPin size={12} />
              6th October City, Egypt
            </div>
            <p className="text-sm text-[#2d2d2d]/70 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
              Bachelor of Science in Software Engineering
            </p>
            <p className="text-sm text-[#2d2d2d]/60" style={{ fontFamily: "Inter, sans-serif" }}>
              Full undergraduate program with focus on software development, algorithms, and system design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;