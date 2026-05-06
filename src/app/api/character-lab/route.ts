import { NextRequest, NextResponse } from "next/server";

import { loadCharacterLabData, saveCharacterLabCard, saveCharacterLabSettings } from "@/lib/character-lab-store";
import type { CharacterLabDirection, CharacterLabSettings } from "@/lib/character-lab-types";

export const dynamic = "force-dynamic";

function jsonError(message: string, status = 400) {
  return NextResponse.json(
    {
      error: message,
    },
    { status },
  );
}

export async function GET() {
  const payload = await loadCharacterLabData();

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}

export async function PUT(request: NextRequest) {
  const payload = (await request.json()) as
    | {
        type?: "settings";
        settings?: CharacterLabSettings;
      }
    | {
        type?: "card";
        cardId?: string;
        subjectPrompt?: string;
        negativePrompt?: string;
        notes?: string;
        direction?: CharacterLabDirection;
      };

  if (payload.type === "settings") {
    if (!payload.settings) {
      return jsonError("Les reglages du studio sont manquants.");
    }

    const nextState = await saveCharacterLabSettings(payload.settings);
    return NextResponse.json(nextState);
  }

  if (payload.type === "card") {
    if (
      typeof payload.cardId !== "string" ||
      typeof payload.subjectPrompt !== "string" ||
      typeof payload.negativePrompt !== "string" ||
      typeof payload.notes !== "string" ||
      !payload.direction
    ) {
      return jsonError("Les donnees de carte sont incompletes.");
    }

    const nextState = await saveCharacterLabCard({
      cardId: payload.cardId,
      subjectPrompt: payload.subjectPrompt,
      negativePrompt: payload.negativePrompt,
      notes: payload.notes,
      direction: payload.direction,
    });
    return NextResponse.json(nextState);
  }

  return jsonError("Operation du studio inconnue.");
}
