"use server";

import { redirect } from "next/navigation";
import { createAdminSession, validateAdminCredentials } from "@/lib/auth";
import { ROUTES } from "@/lib/constants";

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  const valid = await validateAdminCredentials(email, password);
  if (!valid) {
    redirect(`${ROUTES.login}?error=invalid_credentials`);
  }

  await createAdminSession();
  redirect(ROUTES.admin);
}
