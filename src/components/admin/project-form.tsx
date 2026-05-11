import type { Project } from "@/types/project";

type ProjectFormProps = {
  mode: "create" | "edit";
  action: (formData: FormData) => Promise<void>;
  initialProject?: Project;
};

export function ProjectForm({ mode, action, initialProject }: ProjectFormProps) {
  const isEdit = mode === "edit";
  const fieldClassName =
    "rounded-md border border-slate-300 px-3 py-2 text-sm text-black placeholder:text-black placeholder:opacity-70";
  const fileFieldClassName =
    "rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-black file:mr-3 file:rounded-md file:border-0 file:bg-slate-900 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white";

  return (
    <form
      action={action}
      encType="multipart/form-data"
      className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4"
    >
      {isEdit ? <input type="hidden" name="id" value={initialProject?.id} /> : null}
      <input
        name="title"
        placeholder="Titulo"
        defaultValue={initialProject?.title}
        required
        className={fieldClassName}
      />
      <textarea
        name="description"
        placeholder="Descricao"
        defaultValue={initialProject?.description}
        required
        className={`min-h-24 ${fieldClassName}`}
      />
      <label className="grid gap-1 text-sm font-medium text-slate-700">
        Foto do projeto
        <input
          type="file"
          name="projectImage"
          accept="image/jpeg,image/png,image/webp,image/gif"
          required={!isEdit}
          className={fileFieldClassName}
        />
        {isEdit ? (
          <span className="text-xs font-normal text-slate-500">
            Envie uma nova foto somente se quiser substituir a atual.
          </span>
        ) : null}
      </label>
      <input
        name="technologies"
        placeholder="Tecnologias separadas por virgula"
        defaultValue={initialProject?.technologies.join(", ")}
        required
        className={fieldClassName}
      />
      <input
        name="projectUrl"
        placeholder="Link do projeto"
        defaultValue={initialProject?.projectUrl}
        className={fieldClassName}
      />
      <input
        name="githubUrl"
        placeholder="Link do GitHub"
        defaultValue={initialProject?.githubUrl}
        className={fieldClassName}
      />
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          name="featured"
          defaultChecked={initialProject?.featured}
          className="size-4"
        />
        Destacar projeto
      </label>
      <button
        type="submit"
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        {isEdit ? "Salvar alteracoes" : "Cadastrar projeto"}
      </button>
    </form>
  );
}
