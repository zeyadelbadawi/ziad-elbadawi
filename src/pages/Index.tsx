import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import MajorProjects from "@/components/MajorProjects";
import ProductionWebsites from "@/components/ProductionWebsites";
import WordPress from "@/components/WordPress";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <MajorProjects />
        <ProductionWebsites />
        <WordPress />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <WhatsAppFloat />
      </motion.div>
    </>
  );
};

export default Index;