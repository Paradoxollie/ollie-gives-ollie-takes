import { NextResponse } from "next/server";

import { isLabSurfaceEnabled, labUnavailableResponse } from "@/lib/deployment-mode";
import type { TrainingControlAction, TrainingLaunchOptions } from "@/lib/training-control";

export const dynamic = "force-dynamic";

interface TrainingControlRequest {
  action?: TrainingControlAction;
  iterations?: number;
  matchesPerOpponent?: number;
  promotionMatchesPerOpponent?: number;
}

export async function POST(request: Request) {
  if (!isLabSurfaceEnabled()) {
    return labUnavailableResponse();
  }

  if (process.env.NODE_ENV === "production" || process.platform !== "win32") {
    return NextResponse.json(
      {
        ok: false,
        message: "Le controle d'entrainement est reserve au localhost Windows. Les entrainements en ligne passent par GitHub Actions.",
      },
      { status: 409 },
    );
  }

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

  const [{ controlTraining }, { loadTrainingStatus }] = await Promise.all([
    import("@/lib/training-control"),
    import("@/lib/training-status"),
  ]);
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
