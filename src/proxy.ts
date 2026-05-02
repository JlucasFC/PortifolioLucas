import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_COOKIE_NAME, ROUTES } from "@/lib/constants";

export function proxy(request: NextRequest) {
  const isAuthenticated = request.cookies.get(AUTH_COOKIE_NAME)?.value === "authenticated";

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL(ROUTES.login, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
