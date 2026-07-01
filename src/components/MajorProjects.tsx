import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    title: "RAWC Rehabilitation Center Portal",
    subtitle: "Healthcare Management System — Full Stack",
    description:
      "A large-scale healthcare and rehabilitation center management system with client portal, appointment management, patient workflows, doctor/specialist access, financial flows, department assignment, and multi-role dashboards.",
    image: "/assets/rukn-alwatikon.png",
    techs: ["React", "Next.js", "Node.js", "MongoDB", "RBAC", "Real-time Data"],
    link: "https://rawc.vercel.app/clientportal",
    year: "2025",
  },
  {
    title: "Arab Security Group",
    subtitle: "Enterprise Security Solutions — Full Stack",
    description:
      "Comprehensive corporate website for Arab Security Group, a leading provider of smart security solutions, AI-powered surveillance systems, and integrated safety infrastructure across the Middle East and Gulf region.",
    image: "/assets/screenshot-2.png",
    techs: ["Vite", "React", "Node.js", "Custom CMS"],
    link: "https://arab-security.com",
    year: "2025/2026",
  },
  {
    title: "ASG Holding Company",
    subtitle: "Corporate Group Platform — Full Stack",
    description:
      "Corporate holding company website for ASG ecosystem, presenting the group structure, business units, smart security solutions, AI-powered infrastructure, smart city technologies, distribution operations, and related subsidiaries.",
    image: "/assets/screenshot-1.png",
    techs: ["Vite", "React", "Landing Page", "Animation"],
    link: "https://www.asg.com.eg/",
    year: "2026",
  },
  {
    title: "ASG Distribution",
    subtitle: "B2B Distribution Platform — Full Stack",
    description:
      "Enterprise distribution platform for Arab Security Group connecting suppliers, partners, and customers with seamless B2B operations. Custom RESTful APIs for inventory management, partner networks, and sales operations.",
    image: "/assets/asg-distribution.png",
    techs: ["Next.js", "Node.js", "REST API", "PostgreSQL", "JWT", "Responsive"],
    link: "https://asgdistribution.com",
    year: "2023",
  },
  {
    title: "File Upload & Analysis System",
    subtitle: "Full Stack — Next.js + NestJS + PostgreSQL",
    description:
      "A private/internal system focused on file upload, OCR, PDF parsing, asynchronous processing, Redis queues, Bull queues, WebSockets, and structured document analysis with real-time progress tracking.",
    image: "/assets/file-upload.png",
    techs: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Bull"],
    link: null,
    year: "2024",
  },
];

const MajorProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 block" style={{ fontFamily: "Inter, sans-serif" }}>
            Selected Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a2e]">
            Major <span className="gold-gradient-text">Projects</span>
          </h2>
          <p className="text-base text-[#2d2d2d]/60 mt-4 max-w-xl" style={{ fontFamily: "Inter, sans-serif" }}>
            Real-world applications built for scale, security, and performance.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#D4A017]/10 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#D4A017]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {project.year}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-[#D4A017] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {project.subtitle}
                </p>
                <p className="text-[#2d2d2d]/60 mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white text-sm font-medium rounded-full hover:bg-[#D4A017] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    View Live <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#2d2d2d]/10 text-[#2d2d2d]/60 text-sm font-medium rounded-full" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Lock size={14} /> Private System
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MajorProjects;
