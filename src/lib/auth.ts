import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/lib/constants";

const FALLBACK_ADMIN_EMAIL = "admin@portfolio.local";
const FALLBACK_ADMIN_PASSWORD = "admin123";

function sha256(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

function secureCompare(a: string, b: string): boolean {
  const aHash = sha256(a);
  const bHash = sha256(b);
  return timingSafeEqual(aHash, bHash);
}

function getExpectedCredentials() {
  return {
    email: process.env.ADMIN_EMAIL ?? FALLBACK_ADMIN_EMAIL,
    password: process.env.ADMIN_PASSWORD ?? FALLBACK_ADMIN_PASSWORD,
  };
}

export async function validateAdminCredentials(email: string, password: string) {
  const expected = getExpectedCredentials();
  return secureCompare(email, expected.email) && secureCompare(password, expected.password);
}

export async function createAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_COOKIE_NAME);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(AUTH_COOKIE_NAME)?.value === "authenticated";
}
