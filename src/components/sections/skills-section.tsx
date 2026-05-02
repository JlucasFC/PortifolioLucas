import { SectionTitle } from "@/components/ui/section-title";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Arquitetura de Software",
  "CI/CD",
];

export function SkillsSection() {
  return (
    <section className="bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <SectionTitle overline="Skills" title="Stack e especialidades" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
