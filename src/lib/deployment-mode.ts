export function isLabSurfaceEnabled(): boolean {
  return process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_ENABLE_LAB === "true";
}

export function labUnavailableResponse(): Response {
  return Response.json({ error: "Not found." }, { status: 404 });
}
