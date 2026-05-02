"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { clearAdminSession } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";
import { parseProjectFormData } from "@/lib/project-form";
import { createProject, removeProject, updateProject } from "@/services/projects";

export async function createProjectAction(formData: FormData) {
  const input = parseProjectFormData(formData);
  await createProject(input);
  revalidatePath(ROUTES.home);
  revalidatePath(ROUTES.admin);
}

export async function updateProjectAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  const input = parseProjectFormData(formData);
  await updateProject(id, input);
  revalidatePath(ROUTES.home);
  revalidatePath(ROUTES.admin);
}

export async function deleteProjectAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  await removeProject(id);
  revalidatePath(ROUTES.home);
  revalidatePath(ROUTES.admin);
}

export async function logoutAction() {
  await clearAdminSession();
  redirect(ROUTES.login);
}
