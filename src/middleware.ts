import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

function pathWithoutLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && routing.locales.includes(first as (typeof routing.locales)[number])) {
    return "/" + segments.slice(1).join("/");
  }
  return pathname || "/";
}

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  let session = null;
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    const supabase = createMiddlewareClient({ req: request, res: response });
    const auth = await supabase.auth.getSession();
    session = auth.data.session;
  }

  const pathname = request.nextUrl.pathname;
  const bare = pathWithoutLocale(pathname);
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] &&
    routing.locales.includes(segments[0] as (typeof routing.locales)[number])
    ? segments[0]
    : routing.defaultLocale;

  const protectedPrefixes = ["/dashboard", "/modules", "/documents", "/certificates"];
  const isProtected = protectedPrefixes.some(
    (p) => bare === p || bare.startsWith(`${p}/`),
  );
  const isLogin = bare === "/login";

  if (isProtected && !session) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/login`;
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if (isLogin && session) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/dashboard`;
    url.search = "";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
