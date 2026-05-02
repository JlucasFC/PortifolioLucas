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

  return (
    <form action={action} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4">
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
      <input
        name="imageUrl"
        placeholder="URL da imagem"
        defaultValue={initialProject?.imageUrl}
        required
        className={fieldClassName}
      />
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
