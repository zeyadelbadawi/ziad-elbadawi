import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowDown, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

/* ─── Particle + Mouse Spotlight Canvas ─── */
interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    pulse: number;
    pulseSpeed: number;
}

function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 200);
            particlesRef.current = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.5 + 0.1,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.005,
            }));
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Mouse spotlight gradient
            if (mx > 0 && my > 0) {
                const spotGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 350);
                spotGrad.addColorStop(0, "rgba(212, 168, 67, 0.06)");
                spotGrad.addColorStop(0.5, "rgba(212, 168, 67, 0.02)");
                spotGrad.addColorStop(1, "rgba(212, 168, 67, 0)");
                ctx.fillStyle = spotGrad;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            // Center glow orb (pulsing)
            const orbPulse = Math.sin(time * 0.008) * 0.3 + 0.7;
            const orbGrad = ctx.createRadialGradient(
                canvas.width / 2, canvas.height * 0.42, 0,
                canvas.width / 2, canvas.height * 0.42, 300 * orbPulse
            );
            orbGrad.addColorStop(0, `rgba(212, 168, 67, ${0.08 * orbPulse})`);
            orbGrad.addColorStop(0.4, `rgba(212, 168, 67, ${0.03 * orbPulse})`);
            orbGrad.addColorStop(1, "rgba(212, 168, 67, 0)");
            ctx.fillStyle = orbGrad;
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height * 0.42, 300 * orbPulse, 0, Math.PI * 2);
            ctx.fill();

            // Aurora gradient bands
            for (let b = 0; b < 3; b++) {
                const bx = canvas.width * (0.3 + b * 0.2) + Math.sin(time * 0.003 + b * 2) * 150;
                const by = canvas.height * 0.35 + Math.cos(time * 0.004 + b) * 80;
                const auroraGrad = ctx.createRadialGradient(bx, by, 0, bx, by, 250);
                const hueShift = Math.sin(time * 0.005 + b * 1.5);
                const r = Math.floor(212 + hueShift * 20);
                const g = Math.floor(168 + hueShift * 30);
                auroraGrad.addColorStop(0, `rgba(${r}, ${g}, 67, 0.04)`);
                auroraGrad.addColorStop(1, `rgba(${r}, ${g}, 67, 0)`);
                ctx.fillStyle = auroraGrad;
                ctx.beginPath();
                ctx.ellipse(bx, by, 250, 120, Math.sin(time * 0.002 + b) * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Particles
            const particles = particlesRef.current;
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.pulse += p.pulseSpeed;
                const pulseAlpha = p.alpha * (0.5 + Math.sin(p.pulse) * 0.5);

                // Mouse repulsion/attraction
                const dx = p.x - mx;
                const dy = p.y - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200 && dist > 0) {
                    const force = (200 - dist) / 200;
                    p.vx += (dx / dist) * force * 0.08;
                    p.vy += (dy / dist) * force * 0.08;
                }

                // Damping
                p.vx *= 0.99;
                p.vy *= 0.99;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap around
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                // Draw particle with glow
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 168, 67, ${pulseAlpha})`;
                ctx.fill();

                // Glow
                if (p.size > 1) {
                    const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
                    glowGrad.addColorStop(0, `rgba(212, 168, 67, ${pulseAlpha * 0.3})`);
                    glowGrad.addColorStop(1, "rgba(212, 168, 67, 0)");
                    ctx.fillStyle = glowGrad;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Connect nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
                    if (d < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(212, 168, 67, ${0.06 * (1 - d / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Animated grid lines (subtle)
            ctx.strokeStyle = "rgba(212, 168, 67, 0.015)";
            ctx.lineWidth = 0.5;
            const gridSpacing = 80;
            const gridOffset = (time * 0.2) % gridSpacing;
            for (let x = -gridOffset; x < canvas.width + gridSpacing; x += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = -gridOffset; y < canvas.height + gridSpacing; y += gridSpacing) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            time++;
            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
        />
    );
}

/* ─── Floating Code Snippets ─── */
function FloatingCode() {
    const snippets = [
        { text: "const app = express();", x: "8%", y: "15%", delay: 2.5 },
        { text: "async function deploy() {", x: "75%", y: "12%", delay: 3.2 },
        { text: "SELECT * FROM users", x: "5%", y: "72%", delay: 4.0 },
        { text: "docker-compose up -d", x: "80%", y: "68%", delay: 3.7 },
        { text: "git push origin main", x: "70%", y: "85%", delay: 4.5 },
        { text: "npm run build", x: "12%", y: "88%", delay: 5.0 },
        { text: "export default handler", x: "85%", y: "35%", delay: 2.8 },
        { text: "useEffect(() => {", x: "3%", y: "45%", delay: 3.5 },
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {snippets.map((s, i) => (
                <div
                    key={i}
                    className="absolute font-mono text-[10px] sm:text-xs text-[#D4A843]/[0.07] animate-float whitespace-nowrap"
                    style={{
                        left: s.x,
                        top: s.y,
                        animationDelay: `${s.delay}s`,
                        animationDuration: `${6 + i * 0.8}s`,
                    }}
                >
                    {s.text}
                </div>
            ))}
        </div>
    );
}

/* ─── Geometric Shapes ─── */
function GeometricShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Rotating ring */}
            <div
                className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] opacity-[0.04]"
                style={{ animation: "spin-slow 30s linear infinite" }}
            >
                <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="250" r="200" stroke="#D4A843" strokeWidth="0.5" strokeDasharray="8 12" />
                    <circle cx="250" cy="250" r="230" stroke="#D4A843" strokeWidth="0.3" strokeDasharray="4 16" />
                    <circle cx="250" cy="250" r="170" stroke="#D4A843" strokeWidth="0.3" />
                </svg>
            </div>
            {/* Corner accents */}
            <div className="absolute top-20 left-10 w-20 h-20 border border-[#D4A843]/[0.04] rotate-45 animate-pulse-gold" />
            <div className="absolute bottom-32 right-16 w-16 h-16 border border-[#D4A843]/[0.05] rotate-12" style={{ animation: "spin-slow 20s linear infinite reverse" }} />
            <div className="absolute top-1/3 right-[8%] w-2 h-2 rounded-full bg-[#D4A843]/20 animate-pulse" />
            <div className="absolute bottom-1/3 left-[6%] w-1.5 h-1.5 rounded-full bg-[#D4A843]/15 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
    );
}

/* ─── Character-by-character Reveal ─── */
function CharReveal({ text, startDelay = 0, className = "" }: { text: string; startDelay?: number; className?: string }) {
    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            let count = 0;
            const interval = setInterval(() => {
                count++;
                setVisibleCount(count);
                if (count >= text.length) clearInterval(interval);
            }, 50);
            return () => clearInterval(interval);
        }, startDelay);
        return () => clearTimeout(timer);
    }, [text, startDelay]);

    return (
        <span className={className}>
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className="inline-block transition-all duration-500 ease-out"
                    style={{
                        opacity: i < visibleCount ? 1 : 0,
                        transform: i < visibleCount ? "translateY(0) scale(1)" : "translateY(30px) scale(0.8)",
                        filter: i < visibleCount ? "blur(0px)" : "blur(8px)",
                        transitionDelay: `${i * 15}ms`,
                    }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    );
}

/* ─── Typewriter Effect ─── */
function Typewriter({ text, startDelay = 0, className = "" }: { text: string; startDelay?: number; className?: string }) {
    const [displayed, setDisplayed] = useState("");
    const [showCursor, setShowCursor] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setShowCursor(true);
            let i = 0;
            const interval = setInterval(() => {
                i++;
                setDisplayed(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(interval);
                    setTimeout(() => setShowCursor(false), 2000);
                }
            }, 35);
            return () => clearInterval(interval);
        }, startDelay);
        return () => clearTimeout(startTimer);
    }, [text, startDelay]);

    return (
        <span className={className}>
            {displayed}
            {showCursor && <span className="inline-block w-[2px] h-[1em] bg-[#D4A843] ml-1 align-middle animate-blink" />}
        </span>
    );
}

/* ─── Magnetic Button ─── */
function MagneticButton({ children, className = "", href = "#" }: { children: React.ReactNode; className?: string; href?: string }) {
    const btnRef = useRef<HTMLAnchorElement>(null);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const btn = btnRef.current;
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.15;
        const dy = (e.clientY - cy) * 0.15;
        setOffset({ x: dx, y: dy });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setOffset({ x: 0, y: 0 });
    }, []);

    return (
        <a
            ref={btnRef}
            href={href}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
        >
            {children}
        </a>
    );
}

/* ─── Noise Overlay ─── */
function NoiseOverlay() {
    return (
        <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
                backgroundSize: "128px 128px",
            }}
        />
    );
}

/* ─── Main Hero ─── */
export default function HeroSection() {
    const [phase, setPhase] = useState(0);
    // phase 0: nothing, 1: bg visible, 2: badge, 3: name, 4: title, 5: subtitle, 6: buttons, 7: social+scroll

    useEffect(() => {
        const timers = [
            setTimeout(() => setPhase(1), 100),
            setTimeout(() => setPhase(2), 400),
            setTimeout(() => setPhase(3), 600),
            setTimeout(() => setPhase(4), 1200),
            setTimeout(() => setPhase(5), 1600),
            setTimeout(() => setPhase(6), 2200),
            setTimeout(() => setPhase(7), 2600),
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Particle Background */}
            <div className={`absolute inset-0 transition-opacity duration-1500 ${phase >= 1 ? "opacity-100" : "opacity-0"}`}>
                <ParticleField />
            </div>

            {/* Geometric shapes */}
            <GeometricShapes />

            {/* Floating code */}
            <FloatingCode />

            {/* Noise texture */}
            <NoiseOverlay />

            {/* Radial gradient overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.1)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(212,168,67,0.05)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-transparent to-[#0A0A0A]" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#0A0A0A_100%)]" />

            {/* Navigation */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-[#1A1A1A] ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <a href="#hero" className="flex items-center gap-3 group">
                        <img
                            src="/assets/logo.png"
                            alt="ZE"
                            className="w-10 h-10 object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,168,67,0.4)]"
                        />
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        {["Work", "Expertise", "Experience", "Contact"].map((item, i) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`text-sm text-[#666] hover:text-white transition-all duration-500 relative group ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                    }`}
                                style={{ transitionDelay: `${600 + i * 80}ms` }}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4A843] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm px-5 py-2 rounded-lg glass text-[#D4A843] border border-[#D4A843]/20 hover:bg-[#D4A843]/10 hover:border-[#D4A843]/40 hover:shadow-[0_0_20px_rgba(212,168,67,0.1)] transition-all duration-500 ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                                }`}
                            style={{ transitionDelay: "920ms" }}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Status badge */}
                <div
                    className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-strong mb-10 transition-all duration-700 ${phase >= 2 ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
                        }`}
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-xs text-[#999] tracking-[0.2em] uppercase font-medium">Available for new projects</span>
                </div>

                {/* Name — character reveal */}
                <h1 className="mb-5 relative">
                    {phase >= 3 && (
                        <CharReveal
                            text="Ziad Elbadawi"
                            startDelay={0}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-extrabold tracking-tight leading-none hero-name-glow"
                        />
                    )}
                    {phase < 3 && (
                        <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-extrabold tracking-tight leading-none opacity-0">
                            Ziad Elbadawi
                        </span>
                    )}
                </h1>

                {/* Title — gradient reveal */}
                <div
                    className={`mb-5 overflow-hidden transition-all duration-1000 ease-out ${phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient-gold tracking-wide inline-block">
                        Full Stack Developer
                    </span>
                </div>

                {/* Subtitle — typewriter */}
                <div className="mb-12 h-8 sm:h-10">
                    {phase >= 5 && (
                        <Typewriter
                            text="I don't just build UI — I build systems."
                            startDelay={0}
                            className="text-lg sm:text-xl md:text-2xl text-[#777] font-light"
                        />
                    )}
                </div>

                {/* CTA Buttons — magnetic */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-5 mb-14 transition-all duration-800 ${phase >= 6 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                >
                    <MagneticButton
                        href="#work"
                        className="group relative px-10 py-4 bg-[#D4A843] text-[#0A0A0A] font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,168,67,0.4),0_0_80px_rgba(212,168,67,0.15)] active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View My Work
                            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F5D77A] via-[#E8C55A] to-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </MagneticButton>

                    <MagneticButton
                        href="#contact"
                        className="group px-10 py-4 rounded-xl border border-[#333] text-white font-semibold hover:border-[#D4A843]/60 hover:bg-[#D4A843]/5 hover:shadow-[0_0_30px_rgba(212,168,67,0.08)] transition-all duration-500 active:scale-95 relative overflow-hidden"
                    >
                        <span className="relative z-10">Get In Touch</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4A843]/0 via-[#D4A843]/5 to-[#D4A843]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </MagneticButton>
                </div>

                {/* Social Links */}
                <div
                    className={`flex items-center justify-center gap-4 transition-all duration-700 ${phase >= 7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    {[
                        { icon: Github, href: "https://github.com/zeyadelbadawi", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/zeyad-elbadawi", label: "LinkedIn" },
                        { icon: Mail, href: "mailto:zeyadelbadawi.ze@gmail.com", label: "Email" },
                    ].map(({ icon: Icon, href, label }, i) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="group p-3.5 rounded-xl glass border border-[#1A1A1A] text-[#555] hover:text-[#D4A843] hover:border-[#D4A843]/30 hover:bg-[#D4A843]/5 hover:shadow-[0_0_20px_rgba(212,168,67,0.1)] transition-all duration-400"
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${phase >= 7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
            >
                <a href="#value" className="flex flex-col items-center gap-1.5 text-[#444] hover:text-[#D4A843] transition-colors duration-300 group">
                    <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll Down</span>
                    <div className="relative w-5 h-8 rounded-full border border-[#333] group-hover:border-[#D4A843]/40 transition-colors">
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1.5 rounded-full bg-[#D4A843] animate-scroll-dot" />
                    </div>
                </a>
            </div>
        </section>
    );
}
