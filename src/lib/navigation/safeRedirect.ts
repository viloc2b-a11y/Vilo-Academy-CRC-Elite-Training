export function safeInternalRedirectPath(value: string | null): string | null {
  if (!value) return null;
  if (!value.startsWith("/") || value.startsWith("//") || value.includes("\\")) {
    return null;
  }

  try {
    const url = new URL(value, "https://vilo.local");
    if (url.origin !== "https://vilo.local") return null;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return null;
  }
}
