"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { clearAdminSession } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";
import { removeProjectImageUpload, saveProjectImageUpload } from "@/lib/project-image";
import { parseProjectFormData } from "@/lib/project-form";
import { createProject, getProjectById, removeProject, updateProject } from "@/services/projects";

export async function createProjectAction(formData: FormData) {
  const imageUrl = await saveProjectImageUpload(formData);
  if (!imageUrl) throw new Error("Envie uma imagem para o projeto.");

  const input = parseProjectFormData(formData, imageUrl);
  await createProject(input);
  revalidatePath(ROUTES.home);
  revalidatePath(ROUTES.admin);
}

export async function updateProjectAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  const currentProject = await getProjectById(id);
  if (!currentProject) return;

  const nextImageUrl = await saveProjectImageUpload(formData);
  const input = parseProjectFormData(formData, nextImageUrl || currentProject.imageUrl);

  await updateProject(id, input);

  if (nextImageUrl) {
    await removeProjectImageUpload(currentProject.imageUrl);
  }

  revalidatePath(ROUTES.home);
  revalidatePath(ROUTES.admin);
}

export async function deleteProjectAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  const currentProject = await getProjectById(id);
  await removeProject(id);
  await removeProjectImageUpload(currentProject?.imageUrl);
  revalidatePath(ROUTES.home);
  revalidatePath(ROUTES.admin);
}

export async function logoutAction() {
  await clearAdminSession();
  redirect(ROUTES.login);
}
