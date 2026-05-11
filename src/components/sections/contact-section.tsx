import type { SiteLinks } from "@/types/site-links";

type ContactSectionProps = {
  siteLinks: SiteLinks;
};

export function ContactSection({ siteLinks }: ContactSectionProps) {
  return (
    <section id="contato" className="border-t border-[rgb(var(--portfolio-border))] bg-gradient-to-br from-black via-[rgb(var(--portfolio-bg))] to-[rgb(var(--portfolio-accent-deep))/25]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <h2 className="text-3xl font-bold text-[rgb(var(--portfolio-fg))]">Vamos construir algo relevante?</h2>
        <p className="mt-3 max-w-xl text-[rgb(var(--portfolio-muted))]">
          Aberto a oportunidades de produto, consultoria tecnica e projetos fullstack.
        </p>
        <a
          href={siteLinks.contactUrl}
          className="mt-6 inline-flex rounded-md bg-[rgb(var(--portfolio-accent))] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[rgb(var(--portfolio-accent))/85]"
        >
          {siteLinks.contactLabel}
        </a>
      </div>
    </section>
  );
}
