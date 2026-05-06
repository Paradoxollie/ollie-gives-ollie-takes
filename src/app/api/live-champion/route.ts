import { NextResponse } from "next/server";

import { loadResolvedLiveChampionProfile } from "@/lib/live-champion";

export const dynamic = "force-dynamic";

export async function GET() {
  const payload = await loadResolvedLiveChampionProfile();

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
