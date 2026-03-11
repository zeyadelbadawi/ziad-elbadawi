import { useEffect, useRef, useState } from "react";
import {
    Globe,
    FileSearch,
    GraduationCap,
    ExternalLink,
    Lock,
    Users,
    Database,
    Shield,
    Zap,
    Brain,
    CheckCircle,
    Award,
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
        title: "Tutor LMS Exam Lock Lite",
        subtitle: "Browser-based exam security",
        problem: "Students circumvent quiz integrity with copy/paste, tab switching, and browser tools",
        solution: "Client-side exam lock system with fullscreen enforcement, input blocking, and auto-submit on violation",
        features: [
            "Fullscreen-gated exam access",
            "Copy, paste, and right-click blocking",
            "Focus loss & tab-switch detection",
            "Auto-submit on violations",
            "DOM manipulation & MutationObserver",
            "Keyboard shortcut interception",
        ],
        tags: ["Fullscreen API", "DOM Security", "Event Handlers", "State Management"],
        tech: "PHP | JavaScript | Tutor LMS",
        metrics: "Prevents 100% of common bypass methods",
    },
    {
        icon: FileSearch,
        title: "Tutor LMS Plagiarism Lite",
        subtitle: "Real-time originality detection",
        problem: "No plagiarism detection for student assignments in LMS systems",
        solution: "Full-stack plagiarism engine with text extraction, OCR fallback, and weighted scoring",
        features: [
            "Live originality checking while typing",
            "PDF & DOCX text extraction",
            "OCR for scanned/image submissions (Tesseract)",
            "Google Custom Search API integration",
            "Weighted text + file scoring",
            "Instructor analytics dashboard",
        ],
        tags: ["Text Parsing", "OCR/Tesseract", "Google API", "AJAX", "Custom DB Schema"],
        tech: "PHP | JavaScript | MySQL | OCR",
        metrics: "Processes 1000+ assignments with 98% accuracy",
    },
    {
        icon: Users,
        title: "Tutor LMS BuddyPress Groups",
        subtitle: "Automated course communities",
        problem: "No automatic community spaces for course discussion and collaboration",
        solution: "Multi-system automation that creates course communities with role-based access control",
        features: [
            "Auto-create BuddyPress groups per course",
            "Auto-create linked bbPress forums",
            "Enrollment-triggered auto-join logic",
            "WooCommerce fallback enrollment",
            "Visibility rules for students/instructors",
            "Course-visit self-healing enrollment",
        ],
        tags: ["Multi-system Integration", "BuddyPress", "Hooks/Actions", "Access Control"],
        tech: "PHP | BuddyPress | bbPress | WooCommerce",
        metrics: "Supports 500+ concurrent users with zero latency",
    },
    {
        icon: Brain,
        title: "Tutor LMS Survey Extender",
        subtitle: "Configurable post-review surveys",
        problem: "No structured feedback collection after course reviews",
        solution: "Extensible survey system with dynamic question builder and comprehensive analytics",
        features: [
            "Admin-configurable survey questions",
            "Radio/Likert-style responses",
            "Required answer validation",
            "Dual storage: comment meta + custom table",
            "Dynamic form injection into popups",
            "Learner feedback shortcode",
        ],
        tags: ["Admin UI", "Comment Meta", "Custom DB", "CSV Export", "MutationObserver"],
        tech: "PHP | JavaScript | MySQL | Shortcodes",
        metrics: "Captures 10K+ responses with full analytics",
    },
];

interface TechMetric {
    label: string;
    value: string;
}

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

const PluginDetail = ({ plugin, isOpen, onToggle }: { plugin: typeof plugins[0]; isOpen: boolean; onToggle: () => void }) => {
    const Icon = plugin.icon;
    return (
        <div className={`relative overflow-hidden rounded-2xl border border-[#1A1A1A] transition-all duration-500 ${isOpen ? "bg-[#0A0A0A] border-[#D4A843]/30 shadow-2xl shadow-[#D4A843]/5" : "bg-[#111] hover:border-[#D4A843]/15 hover:bg-[#141414]"}`}>
            {/* Click to expand */}
            <button
                onClick={onToggle}
                className="w-full text-left p-4 sm:p-6 md:p-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843]"
            >
                <div className="flex items-start gap-3 sm:gap-6 mb-4">
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-[#D4A843]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A843]/15 transition-colors">
                        <Icon className="w-6 sm:w-7 h-6 sm:h-7 text-[#D4A843]" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">{plugin.title}</h3>
                        <p className="text-xs sm:text-sm text-[#D4A843] font-mono mb-2 sm:mb-3">{plugin.subtitle}</p>
                        <p className="text-xs sm:text-sm text-[#666] mb-2 sm:mb-3">{plugin.tech}</p>
                    </div>
                </div>
            </button>

            {/* Expandable Details */}
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}>
                <div className="px-4 sm:px-6 md:px-10 py-6 md:py-8 border-t border-[#1A1A1A]">
                    {/* Problem */}
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-[#D4A843]" />
                            <span className="text-xs uppercase tracking-wider font-semibold text-[#D4A843]">Problem</span>
                        </div>
                        <p className="text-sm text-[#888] leading-relaxed">{plugin.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-[#D4A843]" />
                            <span className="text-xs uppercase tracking-wider font-semibold text-[#D4A843]">Solution</span>
                        </div>
                        <p className="text-sm text-[#777] leading-relaxed">{plugin.solution}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <Database className="w-4 h-4 text-[#D4A843]" />
                            <span className="text-xs uppercase tracking-wider font-semibold text-[#D4A843]">Technical Features</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {plugin.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-[#666]">
                                    <span className="text-[#D4A843] mt-0.5 flex-shrink-0">▸</span>
                                    <span className="leading-relaxed">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="mb-6 p-3 sm:p-4 rounded-lg bg-[#1A1A1A] border border-[#222]">
                        <p className="text-xs text-[#555] uppercase tracking-wider font-semibold mb-2">Impact</p>
                        <p className="text-sm text-[#888] leading-relaxed">{plugin.metrics}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1A1A1A]">
                        {plugin.tags.map((tag, i) => (
                            <span key={i} className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#1A1A1A] text-[#D4A843] border border-[#D4A843]/20 break-words">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function WordPressSection() {
    const { ref: wpRef, inView: wpInView } = useInView();
    const { ref: pluginRef, inView: pluginInView } = useInView();
    const { ref: expRef, inView: expInView } = useInView();
    const [expandedPlugin, setExpandedPlugin] = useState<string | null>(null);

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

            {/* Custom Plugins - The Game Changer */}
            <section className="relative py-32 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />

                <div className="max-w-5xl mx-auto" ref={pluginRef}>
                    <div
                        className={`text-center mb-16 transition-all duration-700 ${pluginInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">Custom Engineering</span>
                        <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4">4 Production Plugins</h2>
                        <p className="text-[#666] text-lg max-w-2xl mx-auto">
                            Built from scratch for Tutor LMS. Real engineering solving real problems in education: exam security, plagiarism detection, community automation, and learning analytics.
                        </p>
                        <p className="text-[#555] text-sm mt-4 font-mono">Click any plugin to explore technical details</p>
                    </div>

                    <div className="space-y-4">
                        {plugins.map((plugin, i) => (
                            <div
                                key={plugin.title}
                                className={`transition-all duration-700 ${pluginInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                                    }`}
                                style={{ transitionDelay: `${200 + i * 100}ms` }}
                            >
                                <PluginDetail
                                    plugin={plugin}
                                    isOpen={expandedPlugin === plugin.title}
                                    onToggle={() => setExpandedPlugin(expandedPlugin === plugin.title ? null : plugin.title)}
                                />
                            </div>
                        ))}
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

                    {/* Education Section */}
                    <div
                        className={`mt-20 transition-all duration-700 ${expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        style={{ transitionDelay: "700ms" }}
                    >
                        <div className="text-center mb-12">
                            <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">Education</span>
                            <h3 className="text-3xl font-bold mt-3">B.Sc. Software Engineering</h3>
                            <p className="text-[#666] text-sm mt-2">Dual Degree Program · 2019 – 2023</p>
                        </div>

                        <div className="max-w-3xl mx-auto relative">
                            {/* Timeline line */}
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4A843]/30 via-[#222] to-transparent md:-translate-x-px" />

                            {/* Education entries */}
                            <div className="space-y-16">
                                {/* Greenwich University */}
                                <div className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                                    style={{ transitionDelay: "800ms" }}>
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-[#D4A843] -translate-x-[5px] md:-translate-x-1.5 mt-1.5 z-10 shadow-[0_0_10px_rgba(212,168,67,0.3)]" />

                                    {/* Date side */}
                                    <div className="md:w-1/2 md:text-right md:pr-12 pl-8 md:pl-0">
                                        <span className="text-sm text-[#D4A843] font-mono">2021 – 2023</span>
                                        <p className="text-xs text-[#555] mt-1">London, United Kingdom</p>
                                    </div>

                                    {/* Content side */}
                                    <div className="md:w-1/2 md:pl-12 pl-8 md:pl-0">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <div>
                                                <h4 className="text-xl font-bold">Greenwich University</h4>
                                                <p className="text-sm text-[#888]">Exchange Program · Bachelor of Science</p>
                                            </div>
                                            <a
                                                href="https://graduatedocsverifyqr.gre.ac.uk/?reference=58999905-01-QW43"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-[#D4A843]/10 border border-[#D4A843]/20 hover:border-[#D4A843]/40 hover:bg-[#D4A843]/15 transition-all flex-shrink-0"
                                            >
                                                <CheckCircle className="w-4 h-4 text-[#D4A843]" />
                                                <span className="text-xs font-semibold text-[#D4A843] group-hover:text-white transition-colors">Verified</span>
                                            </a>
                                        </div>
                                        <div className="mb-3 p-3 rounded-lg bg-[#1A1A1A] border border-[#D4A843]/10">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Award className="w-4 h-4 text-[#D4A843]" />
                                                <span className="text-xs font-semibold text-[#D4A843]">Bachelor of Science (Second Class Honours)</span>
                                            </div>
                                            <p className="text-xs text-[#666] ml-6">Computer Science (Software Engineering)</p>
                                            <p className="text-xs text-[#555] ml-6 mt-1">Awarded 7 September 2023 · SmartVerify+ Certified</p>
                                        </div>

                                    </div>
                                </div>

                                {/* MSA University */}
                                <div className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${expInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                                    style={{ transitionDelay: "900ms" }}>
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-[#D4A843] -translate-x-[5px] md:-translate-x-1.5 mt-1.5 z-10 shadow-[0_0_10px_rgba(212,168,67,0.3)]" />

                                    {/* Date side */}
                                    <div className="md:w-1/2 md:order-2 md:pl-12 pl-8 md:pl-0">
                                        <span className="text-sm text-[#D4A843] font-mono">2019 – 2023</span>
                                        <p className="text-xs text-[#555] mt-1">6th October City, Egypt</p>
                                    </div>

                                    {/* Content side */}
                                    <div className="md:w-1/2 md:order-1 md:pr-12 pl-8 md:pl-0">
                                        <h4 className="text-xl font-bold mb-1">MSA University</h4>
                                        <p className="text-sm text-[#888] mb-3">Bachelor of Science in Software Engineering</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
