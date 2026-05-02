import { ProjectCard } from "@/components/projects/project-card";
import { SectionTitle } from "@/components/ui/section-title";
import type { Project } from "@/types/project";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projetos" className="flex min-h-screen items-center bg-black">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <SectionTitle
          overline="Projetos"
          title="Projetos em destaque"
          description="Projetos reais com foco em usabilidade, performance e arquitetura."
        />
        <div className="mt-8 grid grid-flow-col auto-cols-[88%] gap-6 overflow-x-auto pb-4 snap-x snap-mandatory sm:auto-cols-[70%] lg:auto-cols-[calc((100%-8rem)/3)]">
          {projects.map((project) => (
            <div key={project.id} className="snap-start">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
