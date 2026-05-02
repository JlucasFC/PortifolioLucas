import { ProjectForm } from "@/components/admin/project-form";
import { ProjectList } from "@/components/admin/project-list";
import {
  createProjectAction,
  deleteProjectAction,
  logoutAction,
  updateProjectAction,
} from "@/app/(admin)/admin/actions";
import { listProjects } from "@/services/projects";

export default async function AdminPage() {
  const projects = await listProjects();

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="flex flex-wrap items-start justify-between gap-3 rounded-lg bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-700">Admin</p>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard de projetos</h1>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Sair
            </button>
          </form>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Novo projeto</h2>
          <ProjectForm mode="create" action={createProjectAction} />
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Projetos cadastrados</h2>
          <ProjectList
            projects={projects}
            onUpdate={updateProjectAction}
            onDelete={deleteProjectAction}
          />
        </section>
      </div>
    </main>
  );
}
