import { createServerClient, type CookieOptions } from "@supabase/ssr";
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

function copyResponseCookies(from: NextResponse, to: NextResponse) {
  from.cookies.getAll().forEach((cookie) => {
    to.cookies.set(cookie.name, cookie.value);
  });
}

export async function middleware(request: NextRequest) {
  let response = intlMiddleware(request);

  // Compute path info early (needed for both auth and AppShell)
  const pathname = request.nextUrl.pathname;
  const bare = pathWithoutLocale(pathname);
  const segments = pathname.split("/").filter(Boolean);
  const locale =
    segments[0] &&
    routing.locales.includes(segments[0] as (typeof routing.locales)[number])
      ? segments[0]
      : routing.defaultLocale;

  // Inject locale-stripped path for AppShell nav variant detection
  response.headers.set("x-pathname", bare);

  // Supabase session
  let session = null;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (url && anon) {
    const supabase = createServerClient(url, anon, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(
          cookiesToSet: { name: string; value: string; options: CookieOptions }[],
        ) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    });

    const { data } = await supabase.auth.getSession();
    session = data.session;
  }

  const protectedPrefixes = [
    "/dashboard",
    "/modules",
    "/documents",
    "/certificates",
    "/academy",
    "/pricing",
  ];
  const publicAuthPrefixes = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/certification",
  ];
  const isProtected = protectedPrefixes.some(
    (p) => bare === p || bare.startsWith(`${p}/`),
  );
  const isPublicAuth = publicAuthPrefixes.some(
    (p) => bare === p || bare.startsWith(`${p}/`),
  );
  const isLogin = bare === "/login";

  if (isProtected && !isPublicAuth && !session) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${locale}/login`;
    redirectUrl.searchParams.set("next", pathname);
    const redirectResponse = NextResponse.redirect(redirectUrl);
    copyResponseCookies(response, redirectResponse);
    return redirectResponse;
  }

  if (isLogin && session) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${locale}/dashboard`;
    redirectUrl.search = "";
    const redirectResponse = NextResponse.redirect(redirectUrl);
    copyResponseCookies(response, redirectResponse);
    return redirectResponse;
  }

  // Always set pathname header on final response
  response.headers.set("x-pathname", bare);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
