import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Database, Cloud, Radio, ShieldCheck } from "lucide-react";

const techCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    techs: ["React.js", "Next.js", "Tailwind CSS", "HTML / CSS / SCSS"],
  },
  {
    icon: Server,
    title: "Backend",
    techs: ["Node.js", "Express", "NestJS", "PHP (WordPress)"],
  },
  {
    icon: Database,
    title: "Databases",
    techs: ["MongoDB", "PostgreSQL", "MySQL", "Oracle"],
  },
  {
    icon: Cloud,
    title: "Infrastructure",
    techs: ["Docker", "VPS / Linux", "Git", "CI/CD"],
  },
  {
    icon: Radio,
    title: "Real-Time",
    techs: ["WebSockets", "Socket.io", "Redis", "Bull Queues"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    techs: ["JWT Auth", "RBAC", "REST APIs", "Web Security"],
  },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-[#FAFAF5] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 block" style={{ fontFamily: "Inter, sans-serif" }}>
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e]">
            Tech Stack & <span className="gold-gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="p-6 rounded-2xl bg-white border border-[#D4A017]/10 hover:border-[#D4A017]/30 hover:shadow-lg hover:shadow-[#D4A017]/5 transition-all group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#D4A017]/10 flex items-center justify-center group-hover:bg-[#D4A017]/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-[#D4A017]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a2e]" style={{ fontFamily: "Inter, sans-serif" }}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span key={tech} className="tech-badge">
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

export default TechStack;