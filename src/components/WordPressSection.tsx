import { useEffect, useRef, useState } from "react";
import {
    Globe,
    FileSearch,
    GraduationCap,
    ExternalLink,
    Lock,
    Users,
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

const wordpressSites = [
    { name: "Masterpiece AVS", url: "https://masterpieceavs.com", desc: "Audio Visual Solutions" },
    { name: "Sure BS", url: "https://sure-bs.com", desc: "Business Solutions" },
    { name: "BritMed Healthcare", url: "https://britmedhealthcare.co.uk", desc: "Healthcare Platform" },
    { name: "Arab Security", url: "https://arab-security.com", desc: "Security Solutions" },
    { name: "ASG Distribution", url: "https://asgdistribution.com", desc: "Distribution Platform" },
    { name: "Advan Sec", url: "https://advan-sec.com", desc: "Advanced Security" },
    { name: "Arab Security Gulf", url: "https://arabsecuritygulf.com", desc: "Gulf Operations" },
    { name: "Sure Education", url: "https://sure-education.com", desc: "Education Platform" },
    { name: "RAWC", url: "https://rawc.ae", desc: "UAE Operations" },
];

const wpSkills = [
    "Custom Plugin Dev (PHP)",
    "Elementor Customization",
    "Theme Development",
    "Performance Optimization",
    "Security Hardening",
    "Tutor LMS",
];

const plugins = [
    {
        icon: Lock,
        title: "Exam Lock Plugin",
        problem: "Students cheating during online exams",
        solution: "Anti-cheating system that blocks copy/paste, detects tab switching, and enforces fullscreen mode during exams.",
        tags: ["Anti-Cheat", "Fullscreen API", "Event Listeners"],
    },
    {
        icon: FileSearch,
        title: "Plagiarism Detection Plugin",
        problem: "No built-in plagiarism checking in WordPress LMS",
        solution: "Similarity calculation engine with secure AJAX handling and WordPress nonces for content integrity verification.",
        tags: ["Text Analysis", "AJAX", "WordPress Nonces"],
    },
    {
        icon: Users,
        title: "Tutor LMS Extensions",
        problem: "Limited LMS functionality for institutional needs",
        solution: "Survey system, automated user grouping, and BuddyPress integration for enhanced learning management.",
        tags: ["Survey System", "User Groups", "BuddyPress"],
    },
];

const experience = [
    {
        company: "Arab Security Group",
        role: "Full Stack Developer",
        period: "Jun 2024 – Present",
        location: "Cairo, Egypt",
        highlights: [
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
        highlights: [
            "Developed full-stack web applications using modern JavaScript frameworks",
            "Collaborated within Agile workflows improving delivery speed",
        ],
    },
    {
        company: "Information Technology Institute (ITI)",
        role: "Full Stack Web Intern",
        period: "Feb 2023 – Mar 2023",
        location: "Giza, Egypt",
        highlights: [
            "Built responsive web applications with React.js and RESTful APIs",
            "Integrated databases using Node.js and MongoDB",
        ],
    },
];

export default function WordPressSection() {
    const { ref: wpRef, inView: wpInView } = useInView();
    const { ref: pluginRef, inView: pluginInView } = useInView();
    const { ref: expRef, inView: expInView } = useInView();

    return (
        <>
            {/* WordPress Engineering */}
            <section className="relative py-32 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />

                <div className="max-w-7xl mx-auto" ref={wpRef}>
                    <div
                        className={`mb-16 transition-all duration-700 ${wpInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">WordPress Engineering</span>
                        <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">
                            9+ Production Websites
                        </h2>
                        <p className="text-[#666] text-lg max-w-2xl">
                            Custom WordPress development — from plugin engineering to performance optimization and security hardening.
                        </p>
                    </div>

                    {/* WP Skills */}
                    <div
                        className={`flex flex-wrap gap-3 mb-12 transition-all duration-700 ${wpInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                        style={{ transitionDelay: "200ms" }}
                    >
                        {wpSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 text-sm font-mono rounded-xl bg-[#D4A843]/5 text-[#D4A843] border border-[#D4A843]/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Sites Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {wordpressSites.map((site, i) => (
                            <a
                                key={site.name}
                                href={site.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative p-6 rounded-2xl bg-[#111] border border-[#1A1A1A] hover:border-[#D4A843]/20 hover:bg-[#141414] transition-all duration-500 ${wpInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${300 + i * 60}ms` }}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#D4A843]/10 transition-colors">
                                        <Globe className="w-5 h-5 text-[#666] group-hover:text-[#D4A843] transition-colors" />
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-[#333] group-hover:text-[#D4A843] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                                <h3 className="font-semibold text-white mb-1">{site.name}</h3>
                                <p className="text-xs text-[#666]">{site.desc}</p>
                                <p className="text-xs text-[#444] font-mono mt-2 truncate">{site.url.replace("https://", "")}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Systems & Plugins */}
            <section className="relative py-32 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />

                <div className="max-w-7xl mx-auto" ref={pluginRef}>
                    <div
                        className={`text-center mb-16 transition-all duration-700 ${pluginInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">Deep Technical Work</span>
                        <h2 className="text-4xl sm:text-5xl font-bold mt-4">Systems & Plugins</h2>
                        <p className="text-[#666] mt-4 text-lg max-w-xl mx-auto">
                            Custom-built solutions solving real problems in education and content management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {plugins.map((plugin, i) => {
                            const Icon = plugin.icon;
                            return (
                                <div
                                    key={plugin.title}
                                    className={`group relative p-8 rounded-2xl bg-[#111] border border-[#1A1A1A] hover:border-[#D4A843]/15 transition-all duration-700 ${pluginInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                        }`}
                                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#D4A843]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4A843]/15 transition-colors">
                                        <Icon className="w-6 h-6 text-[#D4A843]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{plugin.title}</h3>
                                    <div className="mb-4">
                                        <span className="text-xs uppercase tracking-wider text-[#555]">Problem</span>
                                        <p className="text-sm text-[#888] mt-1">{plugin.problem}</p>
                                    </div>
                                    <div className="mb-6">
                                        <span className="text-xs uppercase tracking-wider text-[#555]">Solution</span>
                                        <p className="text-sm text-[#999] mt-1 leading-relaxed">{plugin.solution}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {plugin.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 text-[10px] font-mono rounded-md bg-[#1A1A1A] text-[#777] border border-[#222]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section id="experience" className="relative py-32 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />

                <div className="max-w-4xl mx-auto" ref={expRef}>
                    <div
                        className={`text-center mb-16 transition-all duration-700 ${expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">Career</span>
                        <h2 className="text-4xl sm:text-5xl font-bold mt-4">Experience</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4A843]/30 via-[#222] to-transparent md:-translate-x-px" />

                        {experience.map((exp, i) => (
                            <div
                                key={exp.company}
                                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 transition-all duration-700 ${expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                                style={{ transitionDelay: `${300 + i * 150}ms` }}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-[#D4A843] -translate-x-[5px] md:-translate-x-1.5 mt-1.5 z-10 shadow-[0_0_10px_rgba(212,168,67,0.3)]" />

                                {/* Date side */}
                                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"} pl-8 md:pl-0`}>
                                    <span className="text-sm text-[#D4A843] font-mono">{exp.period}</span>
                                    <p className="text-xs text-[#555] mt-1">{exp.location}</p>
                                </div>

                                {/* Content side */}
                                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:order-1 md:text-right md:pr-12"} pl-8 md:pl-0`}>
                                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                                    <p className="text-sm text-[#888] mb-4">{exp.role}</p>
                                    <ul className={`space-y-2 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                                        {exp.highlights.map((h, j) => (
                                            <li key={j} className="text-sm text-[#666] leading-relaxed">{h}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Education */}
                    <div
                        className={`mt-20 text-center transition-all duration-700 ${expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "700ms" }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass">
                            <GraduationCap className="w-5 h-5 text-[#D4A843]" />
                            <div className="text-left">
                                <p className="text-sm font-semibold">B.Sc. Software Engineering</p>
                                <p className="text-xs text-[#666]">MSA University & Greenwich University · 2019 – 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}