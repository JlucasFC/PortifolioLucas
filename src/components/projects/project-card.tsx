import Image from "next/image";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900/70 shadow-sm">
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
          <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
          <p className="text-sm leading-6 text-slate-300">{project.description}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-medium text-slate-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 text-sm font-medium">
          {project.projectUrl ? (
            <a
              className="text-cyan-300 hover:text-cyan-200"
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              Projeto
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              className="text-slate-200 hover:text-white"
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
