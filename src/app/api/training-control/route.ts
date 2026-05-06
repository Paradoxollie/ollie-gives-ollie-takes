import { NextResponse } from "next/server";

import { controlTraining } from "@/lib/training-control";
import { loadTrainingStatus } from "@/lib/training-status";
import type { TrainingControlAction, TrainingLaunchOptions } from "@/lib/training-control";

export const dynamic = "force-dynamic";

interface TrainingControlRequest {
  action?: TrainingControlAction;
  iterations?: number;
  matchesPerOpponent?: number;
  promotionMatchesPerOpponent?: number;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as TrainingControlRequest;
  const action = body.action;

  if (action !== "start" && action !== "stop" && action !== "restart") {
    return NextResponse.json(
      {
        ok: false,
        message: "Action invalide.",
      },
      { status: 400 },
    );
  }

  const launchOptions: TrainingLaunchOptions = {
    iterations: body.iterations,
    matchesPerOpponent: body.matchesPerOpponent,
    promotionMatchesPerOpponent: body.promotionMatchesPerOpponent,
  };

  const control = await controlTraining(action, launchOptions);
  const status = await loadTrainingStatus();

  return NextResponse.json(
    {
      ...control,
      status,
    },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    },
  );
}
