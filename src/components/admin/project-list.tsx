import Image from "next/image";
import { ProjectForm } from "@/components/admin/project-form";
import type { Project } from "@/types/project";

type ProjectListProps = {
  projects: Project[];
  onUpdate: (formData: FormData) => Promise<void>;
  onDelete: (formData: FormData) => Promise<void>;
};

export function ProjectList({ projects, onUpdate, onDelete }: ProjectListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article
          key={project.id}
          className="overflow-hidden rounded-lg border border-[rgb(var(--portfolio-border))] bg-[rgb(var(--portfolio-surface))/65] shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
        >
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
              <h3 className="text-xl font-semibold text-[rgb(var(--portfolio-fg))]">
                {project.title}
              </h3>
              <p className="text-sm leading-6 text-[rgb(var(--portfolio-muted))]">
                {project.description}
              </p>
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

            <div className="flex flex-wrap gap-2">
              <details className="group w-full">
                <summary className="cursor-pointer list-none rounded-md border border-[rgb(var(--portfolio-border))] bg-black/25 px-3 py-2 text-sm font-semibold text-[rgb(var(--portfolio-fg))] transition hover:bg-black/40">
                  Editar projeto
                </summary>
                <div className="mt-3">
                  <ProjectForm mode="edit" action={onUpdate} initialProject={project} />
                </div>
              </details>
              <form action={onDelete}>
                <input type="hidden" name="id" value={project.id} />
                <button
                  type="submit"
                  className="rounded-md border border-rose-400/60 bg-rose-500/10 px-3 py-2 text-sm font-semibold text-rose-300 transition hover:bg-rose-500/20"
                >
                  Excluir projeto
                </button>
              </form>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
