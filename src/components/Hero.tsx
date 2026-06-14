import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { value: "12+", label: "Production Systems" },
  { value: "4", label: "Custom Plugins" },
  { value: "3+", label: "Years Experience" },
];

const keywords = [
  "Enterprise Portals",
  "Healthcare Systems",
  "B2B Platforms",
  "Security Infrastructure",
  "Real-Time Dashboards",
  "Custom CMS Solutions",
];

const Hero = () => {
  const [activeKeyword, setActiveKeyword] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKeyword((prev) => (prev + 1) % keywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF5]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        {/* Large gold gradient orb */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)" }}
          animate={{ scale: [1.1, 1, 1.1], x: [0, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#D4A017 1px, transparent 1px), linear-gradient(90deg, #D4A017 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content — main messaging */}
          <div className="lg:col-span-7">
            {/* Micro-label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3">
                <div className="w-8 h-[2px] bg-[#D4A017]" />
                <span
                  className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4A017]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Software Engineer
                </span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1a1a2e] leading-[1.1] mb-2">
                I build the systems
              </h1>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
                <span className="gold-gradient-text">businesses run on.</span>
              </h1>
            </motion.div>

          

            {/* Description */}
            <motion.p
              className="text-base md:text-lg text-[#2d2d2d]/60 max-w-xl leading-relaxed mb-10"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Full stack architecture for enterprise platforms, healthcare portals,
              distribution networks, and security infrastructure. From database design
              to deployment — production-grade, every time.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex items-center gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative">
                  {i > 0 && (
                    <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-px h-8 bg-[#D4A017]/20" />
                  )}
                  <p className="text-2xl md:text-3xl font-bold text-[#1a1a2e]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#2d2d2d]/50 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — visual element */}
          <div className="lg:col-span-5">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {/* Code terminal mockup */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1a1a2e]/10 border border-[#D4A017]/10">
                {/* Terminal header */}
                <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-3 text-xs text-white/40 font-mono">ziad@production ~</span>
                </div>
                {/* Terminal body */}
                <div className="bg-[#1a1a2e] p-6 font-mono text-sm leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.0, duration: 0.4 }}
                  >
                    <span className="text-[#D4A017]">→</span>
                    <span className="text-white/60"> deploying </span>
                    <span className="text-green-400">rawc-portal</span>
                    <span className="text-white/40"> v3.2.1</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.3, duration: 0.4 }}
                    className="mt-2"
                  >
                    <span className="text-white/40">  ├── </span>
                    <span className="text-white/70">frontend </span>
                    <span className="text-green-400">✓</span>
                    <span className="text-white/30"> Next.js + React</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.4 }}
                    className="mt-1"
                  >
                    <span className="text-white/40">  ├── </span>
                    <span className="text-white/70">backend </span>
                    <span className="text-green-400">✓</span>
                    <span className="text-white/30"> Node.js + MongoDB</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7, duration: 0.4 }}
                    className="mt-1"
                  >
                    <span className="text-white/40">  ├── </span>
                    <span className="text-white/70">auth </span>
                    <span className="text-green-400">✓</span>
                    <span className="text-white/30"> RBAC + JWT</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.9, duration: 0.4 }}
                    className="mt-1"
                  >
                    <span className="text-white/40">  └── </span>
                    <span className="text-white/70">infra </span>
                    <span className="text-green-400">✓</span>
                    <span className="text-white/30"> Docker + VPS</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.2, duration: 0.4 }}
                    className="mt-4"
                  >
                    <span className="text-[#D4A017]">✓</span>
                    <span className="text-green-400"> Production ready</span>
                    <span className="text-white/40"> — 0 errors, 0 warnings</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 0.4 }}
                    className="mt-3"
                  >
                    <span className="text-[#D4A017]">→</span>
                    <span className="text-white/60"> live at </span>
                    <span className="text-[#D4A017] underline">www.rawc.ae</span>
                    <motion.span
                      className="inline-block w-2 h-4 bg-[#D4A017] ml-1"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-white shadow-lg shadow-[#D4A017]/10 border border-[#D4A017]/15"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.0, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-[#1a1a2e]" style={{ fontFamily: "Inter, sans-serif" }}>
                    Available for projects
                  </span>
                </div>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                className="absolute -top-3 -right-3 px-3 py-2 rounded-lg bg-white shadow-lg shadow-[#D4A017]/10 border border-[#D4A017]/15"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.2, duration: 0.5 }}
              >
                <span className="text-xs font-bold text-[#D4A017]" style={{ fontFamily: "Inter, sans-serif" }}>
                  Full Stack Developer
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
