import type { Project } from "@/types/project";

const now = new Date().toISOString();

export const seedProjects: Project[] = [
  {
    id: "proj-portfolio-engineering",
    title: "Portfolio Engineering",
    description:
      "Portfolio focado em arquitetura front-end moderna com App Router e boas práticas de SEO.",
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    projectUrl: "",
    githubUrl: "",
    featured: true,
    createdAt: now,
    updatedAt: now,
  },
];
