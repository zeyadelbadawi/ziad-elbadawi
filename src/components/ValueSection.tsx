import { useEffect, useRef, useState } from "react";
import {
    Monitor,
    Server,
    Database,
    Shield,
    Zap,
    Globe,
    Layers,
    Terminal,
    Code2,
    Cpu,
    Cloud,
    Lock,
} from "lucide-react";

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

const focusAreas = [
    { icon: Zap, title: "Performance", desc: "Optimized systems that handle scale without breaking a sweat" },
    { icon: Layers, title: "Scalability", desc: "Architectures designed to grow from MVP to millions of users" },
    { icon: Shield, title: "Security", desc: "RBAC, JWT, encryption — security baked into every layer" },
    { icon: Code2, title: "Clean Architecture", desc: "Modular, maintainable codebases built for long-term success" },
];

const capabilities = [
    {
        category: "Frontend",
        icon: Monitor,
        color: "#60A5FA",
        items: ["React.js", "Next.js", "Tailwind CSS", "HTML / CSS / SCSS"],
    },
    {
        category: "Backend",
        icon: Server,
        color: "#34D399",
        items: ["Node.js", "Express", "NestJS", "PHP (WordPress)"],
    },
    {
        category: "Databases",
        icon: Database,
        color: "#F59E0B",
        items: ["MongoDB", "PostgreSQL", "MySQL", "Oracle"],
    },
    {
        category: "Infrastructure",
        icon: Cloud,
        color: "#A78BFA",
        items: ["Docker", "VPS / Linux", "Git", "CI/CD"],
    },
    {
        category: "Real-Time",
        icon: Cpu,
        color: "#F472B6",
        items: ["WebSockets", "Socket.io", "Redis", "Bull Queues"],
    },
    {
        category: "Security",
        icon: Lock,
        color: "#FB923C",
        items: ["JWT Auth", "RBAC", "REST APIs", "Web Security"],
    },
];

export default function ValueSection() {
    const { ref: valueRef, inView: valueInView } = useInView();
    const { ref: expertRef, inView: expertInView } = useInView();

    return (
        <>
            {/* Value Proposition */}
            <section id="value" className="relative py-32 px-6">
                <div className="max-w-7xl mx-auto" ref={valueRef}>
                    {/* Section header */}
                    <div className="max-w-3xl mb-20">
                        <div
                            className={`transition-all duration-700 ${valueInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">What I Do</span>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
                                Building production systems
                                <br />
                                <span className="text-[#888]">that actually work.</span>
                            </h2>
                            <p className="text-lg text-[#666] leading-relaxed max-w-2xl">
                                I work across the entire stack — from pixel-perfect frontends to robust backend
                                architectures, databases, APIs, and deployment infrastructure. Every system I build
                                is designed for performance, security, and scale.
                            </p>
                        </div>
                    </div>

                    {/* Focus areas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {focusAreas.map((area, i) => {
                            const Icon = area.icon;
                            return (
                                <div
                                    key={area.title}
                                    className={`group relative p-8 rounded-2xl glass border-gradient transition-all duration-700 hover:bg-[#161616] ${valueInView
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-12"
                                        }`}
                                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#D4A843]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4A843]/20 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-[#D4A843]" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                                    <p className="text-sm text-[#666] leading-relaxed">{area.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Expertise / Capabilities */}
            <section id="expertise" className="relative py-32 px-6">
                {/* Subtle divider */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />

                <div className="max-w-7xl mx-auto" ref={expertRef}>
                    <div
                        className={`text-center mb-16 transition-all duration-700 ${expertInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">Capabilities</span>
                        <h2 className="text-4xl sm:text-5xl font-bold mt-4">
                            Tech Stack & Expertise
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap, i) => {
                            const Icon = cap.icon;
                            return (
                                <div
                                    key={cap.category}
                                    className={`group relative p-6 rounded-2xl bg-[#111] border border-[#1A1A1A] hover:border-[#2A2A2A] transition-all duration-700 ${expertInView
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-12"
                                        }`}
                                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                                            style={{ backgroundColor: `${cap.color}15` }}
                                        >
                                            <Icon className="w-5 h-5" style={{ color: cap.color }} />
                                        </div>
                                        <h3 className="font-semibold text-lg">{cap.category}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {cap.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-[#1A1A1A] text-[#999] border border-[#222] group-hover:border-[#333] group-hover:text-[#bbb] transition-all duration-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Full stack visual */}
                    <div
                        className={`mt-16 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ${expertInView ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ transitionDelay: "700ms" }}
                    >
                        {[
                            { icon: Terminal, label: "Frontend" },
                            { icon: Globe, label: "APIs" },
                            { icon: Server, label: "Backend" },
                            { icon: Database, label: "Database" },
                            { icon: Cloud, label: "Deploy" },
                        ].map((item, idx) => (
                            <div key={item.label} className="flex items-center gap-2">
                                {idx > 0 && <div className="w-8 h-px bg-[#333] hidden sm:block" />}
                                <div className="flex items-center gap-2 px-5 py-3 rounded-full glass">
                                    <item.icon className="w-4 h-4 text-[#D4A843]" />
                                    <span className="text-sm text-[#888]">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}