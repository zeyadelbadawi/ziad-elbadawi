import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Server, Code2 } from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "Performance",
    desc: "Optimized systems that handle scale without breaking a sweat",
  },
  {
    icon: Server,
    title: "Scalability",
    desc: "Architectures designed to grow from MVP to millions of users",
  },
  {
    icon: Shield,
    title: "Security",
    desc: "RBAC, JWT, encryption — security baked into every layer",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "Modular, maintainable codebases built for long-term success",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 block" style={{ fontFamily: "Inter, sans-serif" }}>
            What I Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e] leading-tight">
            Building production systems<br />
            <span className="gold-gradient-text">that actually work.</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-[#2d2d2d]/60 max-w-3xl mb-16 leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I work across the entire stack — from pixel-perfect frontends to robust backend
          architectures, databases, APIs, and deployment infrastructure. Every system I build
          is designed for performance, security, and scale.
        </motion.p>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="p-6 rounded-2xl bg-[#FAFAF5] border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4A017]/10 flex items-center justify-center mb-4 group-hover:bg-[#D4A017]/20 transition-colors">
                <cap.icon className="w-6 h-6 text-[#D4A017]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                {cap.title}
              </h3>
              <p className="text-sm text-[#2d2d2d]/60" style={{ fontFamily: "Inter, sans-serif" }}>
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;