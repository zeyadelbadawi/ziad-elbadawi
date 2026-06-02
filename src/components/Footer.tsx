import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-[#1a1a2e] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="ZE" className="w-8 h-8 object-contain" />
            <span className="text-sm text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
              © 2026 Ziad Elbadawi. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/zeyadelbadawi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/40 hover:text-[#D4A017] transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/zeyad-elbadawi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white/40 hover:text-[#D4A017] transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:zeyadelbadawi.ze@gmail.com"
              className="p-2 text-white/40 hover:text-[#D4A017] transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;