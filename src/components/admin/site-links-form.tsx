import type { SiteLinks } from "@/types/site-links";

type SiteLinksFormProps = {
  action: (formData: FormData) => Promise<void>;
  siteLinks: SiteLinks;
};

export function SiteLinksForm({ action, siteLinks }: SiteLinksFormProps) {
  const fieldClassName =
    "rounded-md border border-slate-300 px-3 py-2 text-sm text-black placeholder:text-black placeholder:opacity-70";

  return (
    <form action={action} className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4">
      <input
        name="linkedinUrl"
        placeholder="Link do LinkedIn"
        defaultValue={siteLinks.linkedinUrl}
        className={fieldClassName}
      />
      <input
        name="whatsappUrl"
        placeholder="Link do WhatsApp"
        defaultValue={siteLinks.whatsappUrl}
        className={fieldClassName}
      />
      <input
        name="contactUrl"
        placeholder="Link do botao de contato"
        defaultValue={siteLinks.contactUrl}
        className={fieldClassName}
      />
      <input
        name="contactLabel"
        placeholder="Texto do botao de contato"
        defaultValue={siteLinks.contactLabel}
        className={fieldClassName}
      />
      <button
        type="submit"
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
      >
        Salvar links dos botoes
      </button>
    </form>
  );
}
