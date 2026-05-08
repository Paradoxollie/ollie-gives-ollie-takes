import { NextResponse } from "next/server";

import { isLabSurfaceEnabled, labUnavailableResponse } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!isLabSurfaceEnabled()) {
    return labUnavailableResponse();
  }

  const { loadTrainingStatus } = await import("@/lib/training-status");
  const payload = await loadTrainingStatus();

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
