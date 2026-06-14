import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const websites = [
  { name: "Masterpiece AVS", desc: "Smart Solutions", url: "https://masterpieceavs.com" },
  { name: "Sure Business Solutions", desc: "Business Solutions", url: "https://sure-bs.com" },
  { name: "Arab Security", desc: "Security Solutions", url: "https://arab-security.com" },
  { name: "BritMed Healthcare", desc: "UK Healthcare Platform", url: "https://britmedhealthcare.co.uk" },
  { name: "ASG Holding Company", desc: "Corporate Group", url: "https://www.asg.com.eg/" },
  { name: "Advan Sec", desc: "Advanced Security", url: "https://advan-sec.com" },
  { name: "ASG Distribution", desc: "Distribution Platform", url: "https://asgdistribution.com" },
  { name: "Sure Education", desc: "Education Platform", url: "https://sure-education.com" },
  { name: "Arab Security Gulf", desc: "Gulf Operations", url: "https://arabsecuritygulf.com" },
  { name: "RAWC UAE", desc: "Rehabilitatio Center", url: "https://rawc.ae" },
  { name: "RAWC Portal", desc: "Rehabilitation Center Portal", url: "https://rawc.vercel.app/clientportal" },
    { name: "Dr Sofia Mora", desc: "Skincare & Self-Care Brand", url: "https://drsofiamora.com" },
];

const ProductionWebsites = () => {
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
            Production Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e]">
            11+ <span className="gold-gradient-text">Live Websites</span>
          </h2>
          <p className="text-base text-[#2d2d2d]/60 mt-4 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Production websites currently serving real businesses and users.
          </p>
        </motion.div>

        {/* Website Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {websites.map((site, i) => (
            <motion.a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl bg-white border border-[#D4A017]/10 hover:border-[#D4A017]/40 hover:shadow-lg hover:shadow-[#D4A017]/5 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#1a1a2e] group-hover:text-[#D4A017] transition-colors text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {site.name}
                  </h3>
                  <p className="text-xs text-[#2d2d2d]/50 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {site.desc}
                  </p>
                </div>
                <ExternalLink size={16} className="text-[#2d2d2d]/30 group-hover:text-[#D4A017] transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductionWebsites;
