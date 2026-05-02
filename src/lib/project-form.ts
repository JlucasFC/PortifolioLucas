import type { ProjectInput } from "@/types/project";

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseProjectFormData(formData: FormData): ProjectInput {
  const technologiesRaw = asString(formData.get("technologies"));

  return {
    title: asString(formData.get("title")),
    description: asString(formData.get("description")),
    imageUrl: asString(formData.get("imageUrl")),
    technologies: technologiesRaw
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    projectUrl: asString(formData.get("projectUrl")),
    githubUrl: asString(formData.get("githubUrl")),
    featured: formData.get("featured") === "on",
  };
}
