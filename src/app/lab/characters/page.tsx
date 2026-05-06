import { CharacterArtLab } from "@/components/character-art-lab";
import { loadCharacterLabData } from "@/lib/character-lab-store";

export const dynamic = "force-dynamic";

export default async function CharacterLabPage() {
  const characterLabData = await loadCharacterLabData();

  return (
    <div className="ogot-scroll mx-auto flex h-screen max-w-[104rem] flex-col gap-6 overflow-y-auto px-4 py-5 lg:px-6 lg:py-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <a
          href="/lab"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/84 transition hover:border-white/16 hover:bg-white/8"
        >
          Retour au labo
        </a>
        <p className="text-sm text-white/52">Route locale de generation et de review uniquement.</p>
      </div>

      <CharacterArtLab initialData={characterLabData} />
    </div>
  );
}
