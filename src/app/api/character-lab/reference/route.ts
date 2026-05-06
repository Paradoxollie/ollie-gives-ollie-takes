import { NextRequest, NextResponse } from "next/server";

import { clearCharacterLabReferenceImage, saveCharacterLabReferenceImage } from "@/lib/character-lab-store";
import { isSupportedGeneratedImage } from "@/lib/card-art";

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
  const formData = await request.formData();
  const cardId = formData.get("cardId");
  const file = formData.get("file");

  if (typeof cardId !== "string" || cardId.length === 0) {
    return jsonError("La carte cible est manquante.");
  }

  if (!(file instanceof File)) {
    return jsonError("L'image de reference est manquante.");
  }

  if (!isSupportedGeneratedImage(file.name)) {
    return jsonError("Format d'image non supporte. Utilise PNG, JPG ou WEBP.");
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const nextState = await saveCharacterLabReferenceImage(cardId, file.name, bytes);
  return NextResponse.json(nextState);
}

export async function DELETE(request: NextRequest) {
  const payload = (await request.json()) as {
    cardId?: string;
  };

  if (typeof payload.cardId !== "string" || payload.cardId.length === 0) {
    return jsonError("La carte cible est manquante.");
  }

  const nextState = await clearCharacterLabReferenceImage(payload.cardId);
  return NextResponse.json(nextState);
}
