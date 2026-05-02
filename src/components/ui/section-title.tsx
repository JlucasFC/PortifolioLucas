type SectionTitleProps = {
  overline: string;
  title: string;
  description?: string;
};

export function SectionTitle({ overline, title, description }: SectionTitleProps) {
  return (
    <header className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{overline}</p>
      <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-slate-300">{description}</p> : null}
    </header>
  );
}
