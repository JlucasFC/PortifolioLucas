import { ProjectCard } from "@/components/projects/project-card";
import { SectionTitle } from "@/components/ui/section-title";
import type { Project } from "@/types/project";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projetos" className="bg-[rgb(var(--portfolio-bg))]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionTitle
          overline="Projetos"
          title="Projetos em destaque"
          description="Projetos reais com foco em usabilidade, performance e arquitetura."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
