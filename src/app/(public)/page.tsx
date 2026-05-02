import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { listProjects } from "@/services/projects";

export default async function HomePage() {
  const projects = await listProjects();

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} JLucas. Todos os direitos reservados.
      </footer>
    </main>
  );
}
