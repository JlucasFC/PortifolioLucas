import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { listProjects } from "@/services/projects";

export default async function HomePage() {
  const projects = await listProjects();

  return (
    <main className="portfolio-theme min-h-screen bg-[rgb(var(--portfolio-bg))] text-[rgb(var(--portfolio-fg))]">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <footer className="border-t border-[rgb(var(--portfolio-border))] bg-black/60 py-6 text-center text-sm text-[rgb(var(--portfolio-muted))]">
        © {new Date().getFullYear()} JLucas. Todos os direitos reservados.
      </footer>
    </main>
  );
}
