import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, Linkedin, Github, ArrowUpRight, MapPin, Mail } from "lucide-react";

function useInView(threshold = 0.15) {
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
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold]);

    return { ref, inView };
}

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        value: "zeyadelbadawi.ze@gmail.com",
        href: "mailto:zeyadelbadawi.ze@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+20 106 994 2554",
        href: "tel:+201069942554",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "zeyad-elbadawi",
        href: "https://www.linkedin.com/in/zeyad-elbadawi",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "zeyadelbadawi",
        href: "https://github.com/zeyadelbadawi",
    },
];

export default function ContactSection() {
    const { ref, inView } = useInView();

    return (
        <section id="contact" className="relative py-32 px-6">
            {/* Divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#222] to-transparent" />

            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(212,168,67,0.06)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-4xl mx-auto" ref={ref}>
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-xs tracking-[0.3em] uppercase text-[#D4A843] font-medium">Get In Touch</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
                        Let's build something
                        <br />
                        <span className="text-gradient-gold">together.</span>
                    </h2>
                    <p className="text-[#666] text-lg max-w-lg mx-auto">
                        Have a project in mind or looking for a developer who builds real production systems? Let's talk.
                    </p>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {contactLinks.map((link, i) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`group flex items-center gap-4 p-6 rounded-2xl bg-[#111] border border-[#1A1A1A] hover:border-[#D4A843]/20 hover:bg-[#141414] transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                                style={{ transitionDelay: `${300 + i * 80}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] flex items-center justify-center group-hover:bg-[#D4A843]/10 transition-colors flex-shrink-0">
                                    <Icon className="w-5 h-5 text-[#666] group-hover:text-[#D4A843] transition-colors" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-xs text-[#555] uppercase tracking-wider">{link.label}</p>
                                    <p className="text-sm font-medium text-white truncate">{link.value}</p>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-[#333] group-hover:text-[#D4A843] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                            </a>
                        );
                    })}
                </div>

                {/* Location */}
                <div
                    className={`text-center mb-16 transition-all duration-700 delay-500 ${inView ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 text-[#555]">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">6 October City, Egypt</span>
                    </div>
                </div>

                {/* CTA */}
                <div
                    className={`text-center transition-all duration-700 delay-600 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <a
                        href="https://wa.me/201069942554?text=Hi%20Ziad%2C%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-10 py-5 bg-[#D4A843] text-[#0A0A0A] font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.25)] hover:scale-[1.02]"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>Start a Conversation</span>
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="max-w-7xl mx-auto mt-32 pt-8 border-t border-[#1A1A1A]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <img src="/assets/logo.png" alt="Ziad Elbadawi" className="w-8 h-8 object-contain transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(212,168,67,0.4)]" />
                        <span className="text-sm text-[#555]">© 2026 Ziad Elbadawi. All rights reserved.</span>
                    </div>
                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "https://github.com/zeyadelbadawi" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/zeyad-elbadawi" },
                            { icon: Mail, href: "mailto:zeyadelbadawi.ze@gmail.com" },
                        ].map(({ icon: Icon, href }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#444] hover:text-[#D4A843] transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </section>
    );
}
