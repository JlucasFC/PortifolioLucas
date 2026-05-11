import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { seedProjects } from "@/data/seed-projects";
import type { Project, ProjectInput } from "@/types/project";

const projectsFilePath = path.join(process.cwd(), "src/data/projects.json");

async function ensureProjectsFile() {
  try {
    await fs.access(projectsFilePath);
  } catch {
    await fs.writeFile(projectsFilePath, "[]", "utf-8");
  }
}

async function readProjects(): Promise<Project[]> {
  await ensureProjectsFile();
  const data = await fs.readFile(projectsFilePath, "utf-8");
  const parsed = JSON.parse(data) as Project[];
  if (parsed.length === 0) return seedProjects;
  return parsed;
}

async function saveProjects(projects: Project[]) {
  await fs.writeFile(projectsFilePath, JSON.stringify(projects, null, 2), "utf-8");
}

export async function listProjects() {
  const projects = await readProjects();
  return projects.sort((a, b) => Number(b.featured) - Number(a.featured));
}

export async function getProjectById(id: string) {
  const projects = await readProjects();
  return projects.find((project) => project.id === id);
}

export async function createProject(input: ProjectInput) {
  const projects = await readProjects();
  const now = new Date().toISOString();
  const next: Project = {
    id: randomUUID(),
    title: input.title,
    description: input.description,
    imageUrl: input.imageUrl,
    technologies: input.technologies,
    projectUrl: input.projectUrl,
    githubUrl: input.githubUrl,
    featured: Boolean(input.featured),
    createdAt: now,
    updatedAt: now,
  };
  await saveProjects([next, ...projects]);
}

export async function updateProject(id: string, input: ProjectInput) {
  const projects = await readProjects();
  const updated = projects.map((project) =>
    project.id === id
      ? {
          ...project,
          ...input,
          featured: Boolean(input.featured),
          updatedAt: new Date().toISOString(),
        }
      : project,
  );
  await saveProjects(updated);
}

export async function removeProject(id: string) {
  const projects = await readProjects();
  const filtered = projects.filter((project) => project.id !== id);
  await saveProjects(filtered);
}
