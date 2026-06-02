import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/201069942554"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#D4A017]/20 animate-ping" style={{ animationDuration: "3s" }} />
      
      {/* Button */}
      <div className="relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B8860B] text-white shadow-xl shadow-[#D4A017]/25 group-hover:shadow-[#D4A017]/40 transition-shadow">
        <MessageCircle size={20} className="flex-shrink-0" />
        <span
          className="text-sm font-medium hidden sm:inline whitespace-nowrap"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Let's Talk
        </span>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="px-3 py-1.5 rounded-lg bg-[#1a1a2e] text-white text-xs whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif" }}>
          Chat on WhatsApp
          <div className="absolute top-full right-6 w-2 h-2 bg-[#1a1a2e] rotate-45 -translate-y-1" />
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppFloat;