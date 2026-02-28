import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import ProjectsSection from "@/components/ProjectsSection";
import WordPressSection from "@/components/WordPressSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
            <HeroSection />
            <ValueSection />
            <ProjectsSection />
            <WordPressSection />
            <ContactSection />
        </div>
    );
}