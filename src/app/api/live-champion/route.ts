import { NextResponse } from "next/server";

import { isLabSurfaceEnabled, labUnavailableResponse } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isLabSurfaceEnabled()) {
    return labUnavailableResponse();
  }

  const { loadResolvedLiveChampionProfile } = await import("@/lib/live-champion");
  const payload = await loadResolvedLiveChampionProfile();

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
