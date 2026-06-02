import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
      }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #D4A017, transparent)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #F5A623, transparent)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D4A017] mb-4 block" style={{ fontFamily: "Inter, sans-serif" }}>
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Let's build something{" "}
            <span className="gold-gradient-text">together.</span>
          </h2>
          <p className="text-base text-white/50 mt-4 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Have a project in mind or looking for a developer who builds real production systems? Let's talk.
          </p>
        </motion.div>

        {/* WhatsApp Primary CTA */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://wa.me/201069942554?text=Hi%20Ziad%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-[#D4A017]/30 hover:border-[#D4A017]/60 transition-all max-w-lg mx-auto hover:shadow-lg hover:shadow-[#D4A017]/10"
          >
            <div className="w-14 h-14 rounded-xl bg-[#D4A017]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A017]/25 transition-colors">
              <MessageCircle className="w-7 h-7 text-[#D4A017]" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-lg mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                WhatsApp
              </p>
              <p className="text-white/50 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                +20 106 994 2554 · Usually replies within hours
              </p>
            </div>
            <Send size={18} className="text-[#D4A017] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <motion.a
            href="mailto:zeyadelbadawi.ze@gmail.com"
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4A017]/50 transition-all group text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -3 }}
          >
            <Mail className="w-6 h-6 text-[#D4A017] mx-auto mb-3" />
            <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Email</p>
            <p className="text-sm text-white font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              zeyadelbadawi.ze@gmail.com
            </p>
          </motion.a>

          <motion.a
            href="tel:+201069942554"
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4A017]/50 transition-all group text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -3 }}
          >
            <Phone className="w-6 h-6 text-[#D4A017] mx-auto mb-3" />
            <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Phone</p>
            <p className="text-sm text-white font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              +20 106 994 2554
            </p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/zeyad-elbadawi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4A017]/50 transition-all group text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <Linkedin className="w-6 h-6 text-[#D4A017] mx-auto mb-3" />
            <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>LinkedIn</p>
            <p className="text-sm text-white font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              zeyad-elbadawi
            </p>
          </motion.a>

          <motion.a
            href="https://github.com/zeyadelbadawi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4A017]/50 transition-all group text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: -3 }}
          >
            <Github className="w-6 h-6 text-[#D4A017] mx-auto mb-3" />
            <p className="text-xs text-white/40 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>GitHub</p>
            <p className="text-sm text-white font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              zeyadelbadawi
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;