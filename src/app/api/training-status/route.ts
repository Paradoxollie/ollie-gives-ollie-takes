import { NextResponse } from "next/server";

import { loadTrainingStatus } from "@/lib/training-status";

export const dynamic = "force-dynamic";

export async function GET() {
  const payload = await loadTrainingStatus();

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
