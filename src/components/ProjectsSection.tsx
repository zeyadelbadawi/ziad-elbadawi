import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

function useInView(threshold = 0.05) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { threshold, rootMargin: "100px 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, inView };
}

interface Project {
    title: string;
    subtitle: string;
    date: string;
    description: string[];
    tech: string[];
    image: string;
    link?: string;
}

const projects: Project[] = [
    {
        title: "Healthcare Management System",
        subtitle: "Full Stack — Next.js + Express + MongoDB",
        date: "May 2025 – Dec 2025",
        description: [
            "Production healthcare platform supporting multiple therapeutic programs and user roles with 50+ concurrent users and 99.9% uptime.",
            "Engineered document processing workflow using Syncfusion, Mammoth.js, and Puppeteer for DOCX parsing and PDF generation.",
            "Real-time data synchronization via WebSockets, appointment scheduling, multi-program enrollment, and integrated payment processing.",
        ],
        tech: ["Next.js", "Express", "MongoDB", "WebSockets", "JWT", "RBAC"],
        image: "https://mgx-backend-cdn.metadl.com/generate/images/995247/2026-02-28/f40434c8-3a85-4000-8f9a-037d7198ca08.png",
    },
    {
        title: "File Upload & Analysis System",
        subtitle: "Full Stack — Next.js + NestJS + PostgreSQL",
        date: "Mar 2025",
        description: [
            "Scalable file processing platform with async workflows using Redis, Bull queues, and WebSockets for OCR and PDF parsing.",
            "Drag-and-drop upload interface with real-time progress tracking, secure JWT authentication, and role-based access control.",
        ],
        tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "Bull"],
        image: "https://mgx-backend-cdn.metadl.com/generate/images/995247/2026-02-28/4811923b-61ee-47d4-905b-718ac0bbbf02.png",
    },
    {
        title: "ASG Smart E-commerce Platform",
        subtitle: "Full Stack — Next.js + Node.js + PostgreSQL",
        date: "Aug 2024",
        description: [
            "Full-stack e-commerce platform with Paymob payment gateway integration supporting multiple payment methods.",
            "Admin dashboard for managing products, orders, and user analytics with secure session management using JWT and cookies.",
        ],
        tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Paymob", "JWT"],
        image: "https://mgx-backend-cdn.metadl.com/generate/images/995247/2026-02-28/7a150afb-a1d5-46c8-aab3-567d7241532b.png",
    },
    {
        title: "Arab Security Distribution Website",
        subtitle: "Full Stack — Next.js + React + Node.js",
        date: "Jun 2024",
        description: [
            "Responsive web application with custom RESTful APIs for dynamic content management and seamless frontend-backend communication.",
            "Lucky Draw system with automated winner selection logic, modern UX design optimized for cross-device compatibility.",
        ],
        tech: ["Next.js", "React", "Node.js", "REST APIs", "UX Design"],
        image: "https://mgx-backend-cdn.metadl.com/generate/images/995247/2026-02-28/ebd3d4ca-635b-4f3e-860a-daf13c972988.png",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const { ref, inView } = useInView(0.05);
    const isEven = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24 transition-all duration-1000 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                }`}
        >
            {/* Image */}
            <div className={`${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-[#1A1A1A] bg-[#111]">
                    <div className="relative overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                </div>
            </div>

            {/* Content */}
            <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <span className="text-xs tracking-[0.2em] uppercase text-[#D4A843] font-medium">{project.date}</span>
                <h3 className="text-3xl sm:text-4xl font-bold mt-3 mb-2">{project.title}</h3>
                <p className="text-sm text-[#666] font-mono mb-6">{project.subtitle}</p>

                <div className="space-y-3 mb-8">
                    {project.description.map((desc, i) => (
                        <p key={i} className="text-[#999] leading-relaxed text-[15px]">
                            {desc}
                        </p>
                    ))}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[#1A1A1A] text-[#888] border border-[#222]"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#D4A843] hover:text-[#F5D77A] transition-colors group/link"
                    >
                        <span className="text-sm font-medium">View Project</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                )}
            </div>
        </div>
    );
}

export default function ProjectsSection() {
    const { ref: headerRef, inView: headerInView } = useInView();

    return (
        <section id="work" className="relative py-32 px-6">
            {/* Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-8 transition-all duration-700 ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">Selected Work</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
                        Production Systems
                    </h2>
                    <p className="text-[#666] mt-4 text-lg max-w-xl mx-auto">
                        Real-world applications built for scale, security, and performance.
                    </p>
                </div>

                {/* Projects */}
                <div className="divide-y divide-[#1A1A1A]">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}