import Image from "next/image";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-[rgb(var(--portfolio-border))] bg-[rgb(var(--portfolio-surface))/65] shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={1200}
        height={720}
        className="h-44 w-full object-cover"
        unoptimized
      />
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[rgb(var(--portfolio-fg))]">{project.title}</h3>
          <p className="text-sm leading-6 text-[rgb(var(--portfolio-muted))]">{project.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-[rgb(var(--portfolio-border))] bg-black/30 px-2 py-1 text-xs font-medium text-[rgb(var(--portfolio-fg))]"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 text-sm font-medium">
          {project.projectUrl ? (
            <a
              className="text-[rgb(var(--portfolio-accent))] hover:text-[rgb(var(--portfolio-fg))]"
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              Projeto
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              className="text-[rgb(var(--portfolio-muted))] hover:text-[rgb(var(--portfolio-fg))]"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
