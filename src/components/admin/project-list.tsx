import { ProjectForm } from "@/components/admin/project-form";
import type { Project } from "@/types/project";

type ProjectListProps = {
  projects: Project[];
  onUpdate: (formData: FormData) => Promise<void>;
  onDelete: (formData: FormData) => Promise<void>;
};

export function ProjectList({ projects, onUpdate, onDelete }: ProjectListProps) {
  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div key={project.id} className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <ProjectForm mode="edit" action={onUpdate} initialProject={project} />
          <form action={onDelete}>
            <input type="hidden" name="id" value={project.id} />
            <button
              type="submit"
              className="rounded-md border border-rose-300 bg-white px-3 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50"
            >
              Remover projeto
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}
