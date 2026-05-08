import { NextRequest, NextResponse } from "next/server";

import { isLabSurfaceEnabled, labUnavailableResponse } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

function jsonError(message: string, status = 400) {
  return NextResponse.json(
    {
      error: message,
    },
    { status },
  );
}

export async function POST(request: NextRequest) {
  if (!isLabSurfaceEnabled()) {
    return labUnavailableResponse();
  }

  const payload = (await request.json()) as
    | {
        action?: "select";
        cardId?: string;
        filename?: string | null;
      }
    | {
        action?: "delete";
        cardId?: string;
        filename?: string;
      };

  if (typeof payload.cardId !== "string") {
    return jsonError("La carte cible est manquante.");
  }

  if (payload.action === "select") {
    const { selectCharacterLabCandidate } = await import("@/lib/character-lab-store");
    const nextState = await selectCharacterLabCandidate(payload.cardId, payload.filename ?? null);
    return NextResponse.json(nextState);
  }

  if (payload.action === "delete") {
    if (typeof payload.filename !== "string" || payload.filename.length === 0) {
      return jsonError("Le fichier a supprimer est manquant.");
    }

    const { deleteCharacterLabCandidate } = await import("@/lib/character-lab-store");
    const nextState = await deleteCharacterLabCandidate(payload.cardId, payload.filename);
    return NextResponse.json(nextState);
  }

  return jsonError("Action de candidat inconnue.");
}
