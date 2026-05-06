"use client";

import { startTransition, useMemo, useRef, useState } from "react";

import { CARD_ART_BRIEFS } from "@/core/config/cardArtBriefs";
import {
  analyzeCharacterLabDirectionPlan,
  CHARACTER_LAB_ANIMATION_OPTIONS,
  CHARACTER_LAB_DETAIL_OPTIONS,
  CHARACTER_LAB_POSE_OPTIONS,
  CHARACTER_LAB_QUICKFLOWS,
  CHARACTER_LAB_SILHOUETTE_OPTIONS,
  getDefaultCharacterLabDirection,
  resolveCharacterLabDirection,
} from "@/lib/character-lab-direction";
import {
  applyCharacterLabRenderPresetDefaults,
  CHARACTER_LAB_RENDER_PRESETS,
  composeCharacterLabGenerationPrompts,
  getCharacterLabRenderPreset,
} from "@/lib/character-lab-presets";
import type {
  CharacterLabBackgroundMode,
  CharacterLabData,
  CharacterLabDirection,
  CharacterLabEntry,
  CharacterLabSettings,
} from "@/lib/character-lab-types";

interface CharacterArtLabProps {
  initialData: CharacterLabData;
}

interface CharacterCardDraft {
  subjectPrompt: string;
  negativePrompt: string;
  notes: string;
  direction: CharacterLabDirection;
  seed: string;
}

const TRANSPARENT_BACKGROUND_STYLE = {
  backgroundColor: "#0a1220",
  backgroundImage:
    "linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.06) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.06) 75%)",
  backgroundSize: "28px 28px",
  backgroundPosition: "0 0, 0 14px, 14px -14px, -14px 0px",
} as const;

function buildDrafts(data: CharacterLabData): Record<string, CharacterCardDraft> {
  return Object.fromEntries(
    data.entries.map((entry) => [
      entry.id,
      {
        subjectPrompt: entry.subjectPrompt,
        negativePrompt: entry.negativePrompt,
        notes: entry.notes,
        direction: entry.direction,
        seed: "",
      },
    ]),
  );
}

async function fetchJson<T>(input: string, init?: RequestInit): Promise<T> {
  const response = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const payload = (await response.json()) as T & { error?: string };
  if (!response.ok) {
    throw new Error(payload.error ?? "La requete du studio a echoue.");
  }

  return payload as T;
}

async function fetchFormJson<T>(input: string, formData: FormData): Promise<T> {
  const response = await fetch(input, {
    method: "POST",
    body: formData,
  });

  const payload = (await response.json()) as T & { error?: string };
  if (!response.ok) {
    throw new Error(payload.error ?? "La requete du studio a echoue.");
  }

  return payload as T;
}

function formatDateLabel(value: string | null): string {
  if (!value) {
    return "Jamais";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString("fr-FR");
}

function settingsInputClassName() {
  return "w-full rounded-[1rem] border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none transition focus:border-cyan-200/55 focus:bg-black/28";
}

function textareaClassName() {
  return "min-h-[9.5rem] w-full rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none transition focus:border-cyan-200/55 focus:bg-black/28";
}

function panelClassName() {
  return "rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)]";
}

function buttonClassName(tone: "primary" | "secondary" | "danger" = "secondary") {
  const toneClass = {
    primary:
      "border-cyan-200/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.28),rgba(14,116,144,0.34))] text-cyan-50 hover:border-cyan-100/48 hover:bg-[linear-gradient(135deg,rgba(34,211,238,0.34),rgba(14,116,144,0.4))]",
    secondary:
      "border-white/10 bg-white/5 text-white/86 hover:border-white/16 hover:bg-white/9",
    danger:
      "border-rose-200/20 bg-rose-300/10 text-rose-50 hover:border-rose-100/34 hover:bg-rose-300/16",
  }[tone];

  return [
    "rounded-full border px-4 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50",
    toneClass,
  ].join(" ");
}

function labelClassName() {
  return "text-[0.64rem] uppercase tracking-[0.24em] text-white/45";
}

function NumberField({
  label,
  value,
  step,
  min,
  onChange,
}: {
  label: string;
  value: number;
  step?: number;
  min?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="grid gap-2">
      <span className={labelClassName()}>{label}</span>
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        step={step ?? 1}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        className={settingsInputClassName()}
      />
    </label>
  );
}

function ChoiceButton({
  label,
  description,
  selected,
  onClick,
}: {
  label: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-[1.1rem] border px-3 py-3 text-left transition",
        selected
          ? "border-cyan-200/38 bg-cyan-300/12 text-cyan-50 shadow-[0_10px_30px_rgba(34,211,238,0.12)]"
          : "border-white/10 bg-black/16 text-white/76 hover:border-white/16 hover:bg-black/24",
      ].join(" ")}
    >
      <p className="text-sm font-medium">{label}</p>
      <p className={["mt-1 text-xs leading-5", selected ? "text-cyan-50/72" : "text-white/56"].join(" ")}>{description}</p>
    </button>
  );
}

function backgroundModeLabel(backgroundMode: CharacterLabBackgroundMode) {
  switch (backgroundMode) {
    case "scene":
      return "Petit decor";
    case "flat-backdrop":
      return "Fond plat";
    case "transparent-cutout":
      return "PNG transparent";
    default:
      return backgroundMode;
  }
}

function CandidateImage({
  entry,
  src,
  alt,
  contain = false,
}: {
  entry: CharacterLabEntry;
  src: string;
  alt: string;
  contain?: boolean;
}) {
  const usesTransparentPreview =
    contain || entry.selectedCandidateFilename !== null || entry.candidates.some((candidate) => candidate.hasTransparency);

  return (
    <div
      className="overflow-hidden rounded-[1rem] border border-white/10"
      style={usesTransparentPreview ? TRANSPARENT_BACKGROUND_STYLE : undefined}
    >
      <img
        src={src}
        alt={alt}
        className={["aspect-[2/3] w-full", contain ? "object-contain" : "object-cover"].join(" ")}
        draggable={false}
      />
    </div>
  );
}

export function CharacterArtLab({ initialData }: CharacterArtLabProps) {
  const [data, setData] = useState(initialData);
  const [drafts, setDrafts] = useState(() => buildDrafts(initialData));
  const [settingsDraft, setSettingsDraft] = useState<CharacterLabSettings>(initialData.settings);
  const [activeCardId, setActiveCardId] = useState(initialData.entries[0]?.id ?? "");
  const [busyAction, setBusyAction] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState("Studio pret.");
  const [showExperimentalPresets, setShowExperimentalPresets] = useState(() =>
    getCharacterLabRenderPreset(initialData.settings.renderPresetId).experimental ?? false,
  );
  const referenceInputRef = useRef<HTMLInputElement | null>(null);

  const activeEntry = useMemo(
    () => data.entries.find((entry) => entry.id === activeCardId) ?? data.entries[0] ?? null,
    [activeCardId, data.entries],
  );
  const activeDraft = activeEntry ? drafts[activeEntry.id] : null;
  const activeRenderPreset = useMemo(
    () => getCharacterLabRenderPreset(settingsDraft.renderPresetId),
    [settingsDraft.renderPresetId],
  );
  const visibleRenderPresets = useMemo(
    () =>
      CHARACTER_LAB_RENDER_PRESETS.filter(
        (preset) => showExperimentalPresets || !preset.experimental || preset.id === settingsDraft.renderPresetId,
      ),
    [settingsDraft.renderPresetId, showExperimentalPresets],
  );
  const composedPreview = useMemo(() => {
    if (!activeDraft) {
      return null;
    }

    return composeCharacterLabGenerationPrompts({
      renderPresetId: settingsDraft.renderPresetId,
      backgroundMode: settingsDraft.backgroundMode,
      subjectPrompt: activeDraft.subjectPrompt,
      negativePrompt: activeDraft.negativePrompt,
      direction: activeDraft.direction,
    });
  }, [activeDraft, settingsDraft.backgroundMode, settingsDraft.renderPresetId]);
  const activeDiagnostics = useMemo(() => {
    if (!activeDraft || !composedPreview) {
      return null;
    }

    return analyzeCharacterLabDirectionPlan({
      subjectPrompt: composedPreview.subjectPrompt,
      direction: activeDraft.direction,
      renderPresetId: settingsDraft.renderPresetId,
      backgroundMode: settingsDraft.backgroundMode,
      experimental: activeRenderPreset.experimental ?? false,
      removedSegments: composedPreview.removedSegments,
    });
  }, [activeDraft, activeRenderPreset.experimental, composedPreview, settingsDraft.backgroundMode, settingsDraft.renderPresetId]);

  function updateData(nextData: CharacterLabData) {
    startTransition(() => {
      setData(nextData);
      setSettingsDraft(nextData.settings);
      if (getCharacterLabRenderPreset(nextData.settings.renderPresetId).experimental) {
        setShowExperimentalPresets(true);
      }
      setDrafts((currentDrafts) => {
        const nextDrafts = buildDrafts(nextData);
        for (const entry of nextData.entries) {
          if (currentDrafts[entry.id]) {
            nextDrafts[entry.id] = {
              ...nextDrafts[entry.id],
              seed: currentDrafts[entry.id].seed,
            };
          }
        }

        return nextDrafts;
      });
      if (!nextData.entries.some((entry) => entry.id === activeCardId) && nextData.entries[0]) {
        setActiveCardId(nextData.entries[0].id);
      }
    });
  }

  function updateActiveDraft(patch: Partial<CharacterCardDraft>) {
    if (!activeEntry) {
      return;
    }

    setDrafts((currentDrafts) => ({
      ...currentDrafts,
      [activeEntry.id]: {
        ...currentDrafts[activeEntry.id],
        ...patch,
      },
    }));
  }

  function resetActiveDraftToRecommended() {
    if (!activeEntry) {
      return;
    }

    const brief = CARD_ART_BRIEFS[activeEntry.id];
    if (!brief) {
      return;
    }

    updateActiveDraft({
      subjectPrompt: brief.subjectPrompt,
      negativePrompt: brief.negativePrompt,
      notes: brief.notes,
      direction: getDefaultCharacterLabDirection(activeEntry.id),
    });
    setStatusMessage(`Brief propre recharge pour ${activeEntry.name}.`);
  }

  function applySanitizedSubject() {
    if (!composedPreview) {
      return;
    }

    updateActiveDraft({
      subjectPrompt: composedPreview.subjectPrompt,
    });
    setStatusMessage("Le sujet a ete nettoye pour laisser le style au preset.");
  }

  function applyQuickflow(quickflowId: string) {
    const quickflow = CHARACTER_LAB_QUICKFLOWS.find((entry) => entry.id === quickflowId);
    if (!quickflow || !activeEntry) {
      return;
    }

    setSettingsDraft((current) => ({
      ...applyCharacterLabRenderPresetDefaults(current, quickflow.renderPresetId),
      backgroundMode: quickflow.backgroundMode,
    }));
    updateActiveDraft({
      direction: resolveCharacterLabDirection(quickflow.direction, activeEntry.id),
    });
    setStatusMessage(`Workflow ${quickflow.label} applique pour ${activeEntry.name}.`);
  }

  async function refreshState() {
    setBusyAction("refresh");
    setStatusMessage("Rafraichissement du studio...");

    try {
      const nextData = await fetchJson<CharacterLabData>("/api/character-lab");
      updateData(nextData);
      setStatusMessage("Studio recharge avec succes.");
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "Le rafraichissement a echoue.");
    } finally {
      setBusyAction(null);
    }
  }

  async function saveSettings() {
    setBusyAction("settings");
    setStatusMessage("Sauvegarde des reglages du studio...");

    try {
      const nextData = await fetchJson<CharacterLabData>("/api/character-lab", {
        method: "PUT",
        body: JSON.stringify({
          type: "settings",
          settings: settingsDraft,
        }),
      });
      updateData(nextData);
      setStatusMessage("Reglages du studio sauvegardes.");
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "La sauvegarde des reglages a echoue.");
    } finally {
      setBusyAction(null);
    }
  }

  async function saveActiveCard() {
    if (!activeEntry || !activeDraft) {
      return;
    }

    setBusyAction("card");
    setStatusMessage(`Sauvegarde de ${activeEntry.name}...`);

    try {
      const nextData = await fetchJson<CharacterLabData>("/api/character-lab", {
        method: "PUT",
        body: JSON.stringify({
          type: "card",
          cardId: activeEntry.id,
          subjectPrompt: activeDraft.subjectPrompt,
          negativePrompt: activeDraft.negativePrompt,
          notes: activeDraft.notes,
          direction: activeDraft.direction,
        }),
      });
      updateData(nextData);
      setStatusMessage(`Brief sauvegarde pour ${activeEntry.name}.`);
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "La sauvegarde de la carte a echoue.");
    } finally {
      setBusyAction(null);
    }
  }

  async function generateForActiveCard() {
    if (!activeEntry || !activeDraft) {
      return;
    }

    setBusyAction("generate");
    setStatusMessage(
      activeEntry.referenceImageSrc
        ? `Generation guidee par l'image de base pour ${activeEntry.name}...`
        : `Generation locale en cours pour ${activeEntry.name}...`,
    );

    try {
      const nextData = await fetchJson<CharacterLabData & { seed: number }>("/api/character-lab/generate", {
        method: "POST",
        body: JSON.stringify({
          cardId: activeEntry.id,
          subjectPrompt: activeDraft.subjectPrompt,
          negativePrompt: activeDraft.negativePrompt,
          notes: activeDraft.notes,
          direction: activeDraft.direction,
          seed:
            activeDraft.seed.trim().length > 0 && Number.isFinite(Number(activeDraft.seed))
              ? Number(activeDraft.seed)
              : null,
          settings: settingsDraft,
        }),
      });
      updateData(nextData);
      updateActiveDraft({
        seed: String(nextData.seed),
      });
      setStatusMessage(
        activeEntry.referenceImageSrc
          ? `Generation terminee pour ${activeEntry.name}. En mode image de base, le labo sort une variante a la fois pour garder la fidelite.`
          : `Generation terminee pour ${activeEntry.name}. ${settingsDraft.batchSize} candidat${settingsDraft.batchSize > 1 ? "s" : ""} ajoute${settingsDraft.batchSize > 1 ? "s" : ""}.`,
      );
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "La generation locale a echoue.");
    } finally {
      setBusyAction(null);
    }
  }

  async function selectCandidate(filename: string | null) {
    if (!activeEntry) {
      return;
    }

    setBusyAction("select");
    setStatusMessage(filename ? "Selection du candidat..." : "Retrait de la selection...");

    try {
      const nextData = await fetchJson<CharacterLabData>("/api/character-lab/candidate", {
        method: "POST",
        body: JSON.stringify({
          action: "select",
          cardId: activeEntry.id,
          filename,
        }),
      });
      updateData(nextData);
      setStatusMessage(filename ? "Candidat retenu pour la review." : "Selection retiree.");
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "La selection du candidat a echoue.");
    } finally {
      setBusyAction(null);
    }
  }

  async function deleteCandidate(filename: string) {
    if (!activeEntry) {
      return;
    }

    setBusyAction(`delete:${filename}`);
    setStatusMessage("Suppression du candidat...");

    try {
      const nextData = await fetchJson<CharacterLabData>("/api/character-lab/candidate", {
        method: "POST",
        body: JSON.stringify({
          action: "delete",
          cardId: activeEntry.id,
          filename,
        }),
      });
      updateData(nextData);
      setStatusMessage("Candidat supprime.");
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "La suppression du candidat a echoue.");
    } finally {
      setBusyAction(null);
    }
  }

  async function uploadReferenceImage(file: File) {
    if (!activeEntry) {
      return;
    }

    setBusyAction("reference-upload");
    setStatusMessage(`Import de l'image de base pour ${activeEntry.name}...`);

    try {
      const formData = new FormData();
      formData.set("cardId", activeEntry.id);
      formData.set("file", file);
      const nextData = await fetchFormJson<CharacterLabData>("/api/character-lab/reference", formData);
      updateData(nextData);
      setStatusMessage(`Image de base enregistree pour ${activeEntry.name}. Les prochaines generations s'y accrocheront.`);
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "L'import de l'image de base a echoue.");
    } finally {
      if (referenceInputRef.current) {
        referenceInputRef.current.value = "";
      }
      setBusyAction(null);
    }
  }

  async function clearReferenceImage() {
    if (!activeEntry) {
      return;
    }

    setBusyAction("reference-clear");
    setStatusMessage("Suppression de l'image de base...");

    try {
      const nextData = await fetchJson<CharacterLabData>("/api/character-lab/reference", {
        method: "DELETE",
        body: JSON.stringify({
          cardId: activeEntry.id,
        }),
      });
      updateData(nextData);
      setStatusMessage(`Image de base retiree pour ${activeEntry.name}.`);
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "La suppression de l'image de base a echoue.");
    } finally {
      if (referenceInputRef.current) {
        referenceInputRef.current.value = "";
      }
      setBusyAction(null);
    }
  }

  if (!activeEntry || !activeDraft || !composedPreview) {
    return null;
  }

  return (
    <section className="space-y-6 rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,15,27,0.95),rgba(8,10,20,0.94))] p-5 text-white shadow-[0_28px_100px_rgba(9,7,20,0.42)] backdrop-blur-xl">
      <input
        ref={referenceInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            void uploadReferenceImage(file);
          }
        }}
      />

      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-fuchsia-100/55">Studio personnage</p>
          <h1 className="mt-2 font-serif text-4xl text-white">Generation et review locale</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">{data.warning}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={refreshState} className={buttonClassName()} disabled={busyAction !== null}>
            Rafraichir
          </button>
          <button type="button" onClick={saveSettings} className={buttonClassName()} disabled={busyAction !== null}>
            Sauver les reglages
          </button>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-4">
        {data.guide.map((step) => (
          <div
            key={step}
            className="rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white/72"
          >
            {step}
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className={panelClassName()}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className={labelClassName()}>Cartes de travail</p>
              <h2 className="mt-1 font-serif text-2xl text-white">Bibliotheque</h2>
            </div>
            <span
              className={[
                "rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
                data.serviceStatus.reachable
                  ? "border-emerald-200/30 bg-emerald-300/12 text-emerald-100"
                  : "border-amber-200/24 bg-amber-300/12 text-amber-100",
              ].join(" ")}
            >
              {data.serviceStatus.reachable ? "ComfyUI ok" : "ComfyUI hors ligne"}
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {data.entries.map((entry) => {
              const selected = entry.id === activeEntry.id;
              const usesTransparentPreview =
                entry.selectedCandidateFilename !== null || entry.candidates.some((candidate) => candidate.hasTransparency);
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => setActiveCardId(entry.id)}
                  className={[
                    "w-full rounded-[1.3rem] border px-3 py-3 text-left transition",
                    selected
                      ? "border-cyan-200/40 bg-cyan-300/12 shadow-[0_12px_40px_rgba(34,211,238,0.14)]"
                      : "border-white/8 bg-white/[0.03] hover:border-white/14 hover:bg-white/[0.05]",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="flex h-[4.5rem] w-12 shrink-0 items-center justify-center overflow-hidden rounded-[0.8rem] border border-white/10 bg-black/30"
                      style={usesTransparentPreview ? TRANSPARENT_BACKGROUND_STYLE : undefined}
                    >
                      <img
                        src={entry.selectedCandidateSrc ?? entry.fallbackArtSrc}
                        alt=""
                        className="h-full w-full object-contain"
                        draggable={false}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-white">{entry.name}</p>
                      <p className="mt-1 text-xs leading-5 text-white/56">{entry.concept}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-[0.68rem] text-white/55">
                        <span>{entry.candidateCount} candidat{entry.candidateCount > 1 ? "s" : ""}</span>
                        <span>{entry.selectedCandidateFilename ? "retenu" : "a valider"}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="grid gap-6">
          <section className="grid gap-4 2xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className={panelClassName()}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className={labelClassName()}>Carte active</p>
                  <h2 className="mt-1 font-serif text-3xl text-white">{activeEntry.name}</h2>
                  <p className="mt-2 text-sm text-fuchsia-100/78">{activeEntry.concept}</p>
                </div>
                <div className="rounded-[1.2rem] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/66">
                  <p>Derniere generation : {formatDateLabel(activeEntry.lastGeneratedAt)}</p>
                  <p className="mt-1">Candidats : {activeEntry.candidateCount}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <figure className="rounded-[1.3rem] border border-white/10 bg-black/20 p-3">
                  <figcaption className="mb-3 text-[0.64rem] uppercase tracking-[0.24em] text-white/45">
                    Visuel actuel du jeu
                  </figcaption>
                  <CandidateImage
                    entry={activeEntry}
                    src={activeEntry.fallbackArtSrc}
                    alt={`Visuel actuel de ${activeEntry.name}`}
                  />
                </figure>

                <figure className="rounded-[1.3rem] border border-white/10 bg-black/20 p-3">
                  <figcaption className="mb-3 text-[0.64rem] uppercase tracking-[0.24em] text-white/45">
                    Candidat retenu
                  </figcaption>
                  {activeEntry.selectedCandidateSrc ? (
                    <CandidateImage
                      entry={activeEntry}
                      src={activeEntry.selectedCandidateSrc}
                      alt={`Candidat retenu pour ${activeEntry.name}`}
                      contain
                    />
                  ) : (
                    <div className="grid aspect-[2/3] place-items-center rounded-[1rem] border border-dashed border-white/12 bg-black/10 text-center text-sm leading-6 text-white/42">
                      <div>
                        <p>Aucun candidat retenu.</p>
                        <p className="mt-2 text-white/30">La selection reste dans le labo.</p>
                      </div>
                    </div>
                  )}
                </figure>

                <figure className="rounded-[1.3rem] border border-white/10 bg-black/20 p-3">
                  <figcaption className="mb-3 flex items-center justify-between gap-3 text-[0.64rem] uppercase tracking-[0.24em] text-white/45">
                    <span>Image de base</span>
                    {activeEntry.referenceImageSrc ? (
                      <span className="rounded-full border border-emerald-200/24 bg-emerald-300/12 px-2 py-1 text-[0.58rem] text-emerald-100">
                        guidee
                      </span>
                    ) : null}
                  </figcaption>
                  {activeEntry.referenceImageSrc ? (
                    <div className="space-y-3">
                      <CandidateImage
                        entry={activeEntry}
                        src={activeEntry.referenceImageSrc}
                        alt={`Image de base pour ${activeEntry.name}`}
                        contain
                      />
                      <p className="text-xs leading-5 text-white/55">
                        Derniere mise a jour : {formatDateLabel(activeEntry.referenceImageUpdatedAt)}
                      </p>
                    </div>
                  ) : (
                    <div className="grid aspect-[2/3] place-items-center rounded-[1rem] border border-dashed border-white/12 bg-black/10 text-center text-sm leading-6 text-white/42">
                      <div>
                        <p>Aucune image de base.</p>
                        <p className="mt-2 text-white/30">Ajoute ton image pour verrouiller le perso.</p>
                      </div>
                    </div>
                  )}
                </figure>

                <div className="rounded-[1.3rem] border border-white/10 bg-black/20 p-3">
                  <p className={labelClassName()}>Pipeline actif</p>
                  <div className="mt-3 space-y-3 rounded-[1rem] border border-white/10 bg-black/20 p-3 text-sm leading-6 text-white/70">
                    <div>
                      <p className="font-medium text-white/88">{activeRenderPreset.label}</p>
                      <p className="mt-1 text-white/62">{activeRenderPreset.description}</p>
                    </div>
                    <div className="rounded-[0.9rem] border border-white/10 bg-white/5 px-3 py-2 text-xs leading-5 text-white/66">
                      {activeRenderPreset.modelSummary}
                    </div>
                    <div className="flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-white/55">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                        {backgroundModeLabel(settingsDraft.backgroundMode)}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                        {activeRenderPreset.workflowFamily === "flux" ? "FLUX" : "SDXL"}
                      </span>
                      {activeRenderPreset.experimental ? (
                        <span className="rounded-full border border-amber-200/24 bg-amber-300/12 px-2 py-1 text-amber-100">
                          experimental
                        </span>
                      ) : (
                        <span className="rounded-full border border-emerald-200/24 bg-emerald-300/12 px-2 py-1 text-emerald-100">
                          rendu final
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/55">
                      {data.serviceStatus.reachable
                        ? "ComfyUI repond. Le preset choisi est pret a tourner."
                        : "ComfyUI ne repond pas encore."}
                    </p>
                    <div className="rounded-[0.9rem] border border-white/10 bg-white/5 px-3 py-2 text-xs leading-5 text-white/66">
                      {activeEntry.referenceImageSrc
                        ? `Mode image de base actif. Fidelite actuelle: ${Math.round((1 - settingsDraft.referenceStrength) * 100)}%.`
                        : "Sans image de base, le modele interprete ton brief mais ne peut pas reproduire exactement un design existant."}
                    </div>
                    {data.serviceStatus.error ? <p className="text-amber-100/88">{data.serviceStatus.error}</p> : null}
                    <div className="rounded-[0.9rem] border border-white/10 bg-white/5 p-3">
                      <p className={labelClassName()}>Workflows rapides</p>
                      <div className="mt-3 grid gap-2">
                        {CHARACTER_LAB_QUICKFLOWS.map((quickflow) => (
                          <button
                            key={quickflow.id}
                            type="button"
                            onClick={() => applyQuickflow(quickflow.id)}
                            className="rounded-[0.95rem] border border-white/10 bg-black/20 px-3 py-3 text-left transition hover:border-white/16 hover:bg-black/28"
                          >
                            <p className="text-sm font-medium text-white">{quickflow.label}</p>
                            <p className="mt-1 text-xs leading-5 text-white/58">{quickflow.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => referenceInputRef.current?.click()}
                      className={buttonClassName("primary")}
                      disabled={busyAction !== null}
                    >
                      {activeEntry.referenceImageSrc ? "Changer image de base" : "Ajouter image de base"}
                    </button>
                    <button
                      type="button"
                      onClick={clearReferenceImage}
                      className={buttonClassName("danger")}
                      disabled={busyAction !== null || !activeEntry.referenceImageSrc}
                    >
                      Retirer image
                    </button>
                    <button
                      type="button"
                      onClick={() => selectCandidate(null)}
                      className={buttonClassName()}
                      disabled={busyAction !== null || !activeEntry.selectedCandidateFilename}
                    >
                      Retirer la selection
                    </button>
                    <button
                      type="button"
                      onClick={saveActiveCard}
                      className={buttonClassName()}
                      disabled={busyAction !== null}
                    >
                      Sauver le brief
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={panelClassName()}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={labelClassName()}>Preset de rendu</p>
                  <h2 className="mt-1 font-serif text-2xl text-white">Pipeline local</h2>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowExperimentalPresets((current) => !current)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/60 transition hover:border-white/16 hover:bg-white/9"
                  >
                    {showExperimentalPresets ? "Masquer experimental" : "Afficher experimental"}
                  </button>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/60">
                    non destructif
                  </span>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                {visibleRenderPresets.map((preset) => {
                  const selected = settingsDraft.renderPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setSettingsDraft((current) => applyCharacterLabRenderPresetDefaults(current, preset.id))}
                      className={[
                        "rounded-[1.2rem] border px-4 py-3 text-left transition",
                        selected
                          ? "border-cyan-200/40 bg-cyan-300/12 shadow-[0_12px_40px_rgba(34,211,238,0.12)]"
                          : "border-white/10 bg-black/18 hover:border-white/16 hover:bg-black/24",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-medium text-white">{preset.label}</p>
                          <p className="mt-1 text-sm leading-6 text-white/62">{preset.description}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-white/55">
                            {preset.workflowFamily}
                          </span>
                          {preset.experimental ? (
                            <span className="rounded-full border border-amber-200/24 bg-amber-300/12 px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-amber-100">
                              experimental
                            </span>
                          ) : (
                            <span className="rounded-full border border-emerald-200/24 bg-emerald-300/12 px-2 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-emerald-100">
                              recommande
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {activeRenderPreset.experimental ? (
                <div className="mt-4 rounded-[1.2rem] border border-amber-200/20 bg-amber-300/10 px-4 py-3 text-sm leading-6 text-amber-50/88">
                  FLUX est garde dans le labo pour l'ideation, mais il est experimental ici et peut faire tomber ComfyUI.
                </div>
              ) : null}

              <div className="mt-4 grid gap-3">
                <div>
                  <p className={labelClassName()}>Sortie</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(["transparent-cutout", "flat-backdrop", "scene"] as const).map((backgroundMode) => {
                      const selected = settingsDraft.backgroundMode === backgroundMode;
                      return (
                        <button
                          key={backgroundMode}
                          type="button"
                          onClick={() => setSettingsDraft((current) => ({ ...current, backgroundMode }))}
                          className={[
                            "rounded-full border px-3 py-2 text-sm transition",
                            selected
                              ? "border-cyan-200/40 bg-cyan-300/14 text-cyan-50"
                              : "border-white/10 bg-white/5 text-white/72 hover:border-white/16 hover:bg-white/9",
                          ].join(" ")}
                        >
                          {backgroundModeLabel(backgroundMode)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-2 sm:col-span-2">
                    <span className={labelClassName()}>URL ComfyUI</span>
                    <input
                      type="url"
                      value={settingsDraft.comfyUiUrl}
                      onChange={(event) =>
                        setSettingsDraft((current) => ({
                          ...current,
                          comfyUiUrl: event.target.value,
                        }))
                      }
                      className={settingsInputClassName()}
                    />
                  </label>

                  <NumberField
                    label="Largeur"
                    value={settingsDraft.width}
                    min={256}
                    onChange={(value) => setSettingsDraft((current) => ({ ...current, width: value }))}
                  />
                  <NumberField
                    label="Hauteur"
                    value={settingsDraft.height}
                    min={256}
                    onChange={(value) => setSettingsDraft((current) => ({ ...current, height: value }))}
                  />
                  <NumberField
                    label="Fidelite image"
                    value={settingsDraft.referenceStrength}
                    min={0.08}
                    step={0.05}
                    onChange={(value) => setSettingsDraft((current) => ({ ...current, referenceStrength: value }))}
                  />
                  <NumberField
                    label="Variantes"
                    value={settingsDraft.batchSize}
                    min={1}
                    onChange={(value) => setSettingsDraft((current) => ({ ...current, batchSize: value }))}
                  />
                  <NumberField
                    label="Steps"
                    value={settingsDraft.steps}
                    min={4}
                    onChange={(value) => setSettingsDraft((current) => ({ ...current, steps: value }))}
                  />
                  <NumberField
                    label={activeRenderPreset.workflowFamily === "flux" ? "Guidance" : "CFG"}
                    value={settingsDraft.guidanceScale}
                    min={1}
                    step={0.5}
                    onChange={(value) => setSettingsDraft((current) => ({ ...current, guidanceScale: value }))}
                  />

                  <label className="grid gap-2">
                    <span className={labelClassName()}>Sampler</span>
                    <input
                      type="text"
                      value={settingsDraft.samplerName}
                      onChange={(event) =>
                        setSettingsDraft((current) => ({
                          ...current,
                          samplerName: event.target.value,
                        }))
                      }
                      className={settingsInputClassName()}
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className={labelClassName()}>Scheduler</span>
                    <input
                      type="text"
                      value={settingsDraft.scheduler}
                      onChange={(event) =>
                        setSettingsDraft((current) => ({
                          ...current,
                          scheduler: event.target.value,
                        }))
                      }
                      className={settingsInputClassName()}
                    />
                  </label>
                </div>
                <p className="text-xs leading-5 text-white/52">
                  Plus la fidelite image est basse, plus le rendu reste colle a ton image de base. Monte-la seulement si le perso reste trop raide.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-6 2xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div className={panelClassName()}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={labelClassName()}>Brief editable</p>
                  <h2 className="mt-1 font-serif text-2xl text-white">Sujet et contraintes</h2>
                </div>
                <div className="rounded-[1rem] border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/62">
                  Le seed vide lance une seed aleatoire.
                </div>
              </div>

              <div className="mt-4 grid gap-4">
                <label className="grid gap-2">
                  <span className={labelClassName()}>Sujet du personnage</span>
                  <textarea
                    value={activeDraft.subjectPrompt}
                    onChange={(event) => updateActiveDraft({ subjectPrompt: event.target.value })}
                    className={textareaClassName()}
                  />
                </label>

                {composedPreview.removedSegments.length > 0 ? (
                  <div className="rounded-[1.2rem] border border-cyan-200/14 bg-cyan-300/10 px-4 py-3 text-sm leading-6 text-cyan-50/90">
                    <p>
                      Le labo a retire automatiquement des mots de style ou de decor pour garder seulement le personnage.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={applySanitizedSubject}
                        className={buttonClassName()}
                        disabled={busyAction !== null}
                      >
                        Nettoyer le champ sujet
                      </button>
                      <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-[0.64rem] uppercase tracking-[0.18em] text-cyan-50/88">
                        {composedPreview.removedSegments.length} segment{composedPreview.removedSegments.length > 1 ? "s" : ""} retire
                        {composedPreview.removedSegments.length > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                ) : null}

                <div className="grid gap-4 rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className={labelClassName()}>Direction 2D</p>
                      <p className="mt-1 text-sm text-white/58">
                        Ces choix orientent la silhouette, la pose et la facon dont le perso pourra etre anime ensuite.
                      </p>
                    </div>
                    <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-[0.64rem] uppercase tracking-[0.18em] text-cyan-50/88">
                      animation first
                    </span>
                  </div>

                  <div className="grid gap-3 lg:grid-cols-3">
                    <div className="space-y-2">
                      <p className={labelClassName()}>Silhouette</p>
                      {CHARACTER_LAB_SILHOUETTE_OPTIONS.map((option) => (
                        <ChoiceButton
                          key={option.id}
                          label={option.label}
                          description={option.description}
                          selected={activeDraft.direction.silhouette === option.id}
                          onClick={() =>
                            updateActiveDraft({
                              direction: {
                                ...activeDraft.direction,
                                silhouette: option.id,
                              },
                            })
                          }
                        />
                      ))}
                    </div>

                    <div className="space-y-2">
                      <p className={labelClassName()}>Pose</p>
                      {CHARACTER_LAB_POSE_OPTIONS.map((option) => (
                        <ChoiceButton
                          key={option.id}
                          label={option.label}
                          description={option.description}
                          selected={activeDraft.direction.posePreset === option.id}
                          onClick={() =>
                            updateActiveDraft({
                              direction: {
                                ...activeDraft.direction,
                                posePreset: option.id,
                              },
                            })
                          }
                        />
                      ))}
                    </div>

                    <div className="space-y-2">
                      <p className={labelClassName()}>Animation</p>
                      {CHARACTER_LAB_ANIMATION_OPTIONS.map((option) => (
                        <ChoiceButton
                          key={option.id}
                          label={option.label}
                          description={option.description}
                          selected={activeDraft.direction.animationGoal === option.id}
                          onClick={() =>
                            updateActiveDraft({
                              direction: {
                                ...activeDraft.direction,
                                animationGoal: option.id,
                              },
                            })
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className={labelClassName()}>Budget de details</p>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {CHARACTER_LAB_DETAIL_OPTIONS.map((option) => (
                        <ChoiceButton
                          key={option.id}
                          label={option.label}
                          description={option.description}
                          selected={activeDraft.direction.detailBudget === option.id}
                          onClick={() =>
                            updateActiveDraft({
                              direction: {
                                ...activeDraft.direction,
                                detailBudget: option.id,
                              },
                            })
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <label className="grid gap-2">
                  <span className={labelClassName()}>Contraintes supplementaires</span>
                  <textarea
                    value={activeDraft.negativePrompt}
                    onChange={(event) => updateActiveDraft({ negativePrompt: event.target.value })}
                    className={textareaClassName()}
                  />
                </label>

                <label className="grid gap-2">
                  <span className={labelClassName()}>Notes de review</span>
                  <textarea
                    value={activeDraft.notes}
                    onChange={(event) => updateActiveDraft({ notes: event.target.value })}
                    className="min-h-[7rem] w-full rounded-[1.1rem] border border-white/10 bg-black/20 px-4 py-3 text-sm leading-6 text-white outline-none transition focus:border-cyan-200/55 focus:bg-black/28"
                  />
                </label>

                <div className="grid gap-3 md:grid-cols-[minmax(0,14rem)_1fr]">
                  <label className="grid gap-2">
                    <span className={labelClassName()}>Seed manuelle</span>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={activeDraft.seed}
                      onChange={(event) => updateActiveDraft({ seed: event.target.value })}
                      className={settingsInputClassName()}
                      placeholder="Laisser vide pour aleatoire"
                    />
                  </label>

                  <div className="flex flex-wrap items-end gap-3">
                    <button
                      type="button"
                      onClick={resetActiveDraftToRecommended}
                      className={buttonClassName()}
                      disabled={busyAction !== null}
                    >
                      Reset prompt propre
                    </button>
                    <button
                      type="button"
                      onClick={saveActiveCard}
                      className={buttonClassName()}
                      disabled={busyAction !== null}
                    >
                      Sauver ce brief
                    </button>
                    <button
                      type="button"
                      onClick={generateForActiveCard}
                      className={buttonClassName("primary")}
                      disabled={busyAction !== null}
                    >
                      Generer {settingsDraft.batchSize} variante{settingsDraft.batchSize > 1 ? "s" : ""}
                    </button>
                  </div>
                </div>

                {activeDiagnostics ? (
                  <div className="grid gap-4 rounded-[1.4rem] border border-cyan-200/12 bg-cyan-200/8 p-4">
                    <div className="flex flex-wrap items-end justify-between gap-3">
                      <div>
                        <p className={labelClassName()}>Diagnostic animation</p>
                        <div className="mt-2 flex flex-wrap items-end gap-3">
                          <h3 className="text-3xl font-semibold text-white">{activeDiagnostics.score}/100</h3>
                          <p className="pb-1 text-sm text-cyan-50/88">{activeDiagnostics.readinessLabel}</p>
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">{activeDiagnostics.summary}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.16em] text-white/58">
                        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1">
                          {activeDiagnostics.segmentCount} segments
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1">
                          {activeDiagnostics.accessoryCount} accessoires
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1">
                          {activeDiagnostics.sceneClutterCount} decors
                        </span>
                      </div>
                    </div>

                    <div className="grid gap-3 lg:grid-cols-3">
                      <div className="rounded-[1rem] border border-emerald-200/20 bg-emerald-300/10 p-3">
                        <p className={labelClassName()}>Points forts</p>
                        <div className="mt-2 space-y-2 text-sm leading-6 text-emerald-50/88">
                          {activeDiagnostics.strengths.map((item) => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1rem] border border-amber-200/20 bg-amber-300/10 p-3">
                        <p className={labelClassName()}>Risques</p>
                        <div className="mt-2 space-y-2 text-sm leading-6 text-amber-50/88">
                          {activeDiagnostics.risks.map((item) => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1rem] border border-cyan-200/20 bg-cyan-300/10 p-3">
                        <p className={labelClassName()}>Prochaines etapes</p>
                        <div className="mt-2 space-y-2 text-sm leading-6 text-cyan-50/88">
                          {activeDiagnostics.nextSteps.map((item) => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="grid gap-4 rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className={labelClassName()}>Prompt final compose</p>
                      <p className="mt-1 text-sm text-white/56">
                        Le studio melange ton sujet, la direction 2D, le preset de rendu et le mode de fond avant l&apos;envoi a ComfyUI.
                      </p>
                    </div>
                    <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-[0.64rem] uppercase tracking-[0.2em] text-cyan-50/88">
                      {activeRenderPreset.shortLabel}
                    </span>
                  </div>

                  <label className="grid gap-2">
                    <span className={labelClassName()}>Sujet retenu</span>
                    <textarea value={composedPreview.subjectPrompt} readOnly className={textareaClassName()} />
                  </label>

                  <label className="grid gap-2">
                    <span className={labelClassName()}>Prompt envoye</span>
                    <textarea value={composedPreview.prompt} readOnly className={textareaClassName()} />
                  </label>

                  <label className="grid gap-2">
                    <span className={labelClassName()}>Negative envoye</span>
                    <textarea value={composedPreview.negativePrompt} readOnly className={textareaClassName()} />
                  </label>
                </div>
              </div>
            </div>

            <div className={panelClassName()}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className={labelClassName()}>Candidats locaux</p>
                  <h2 className="mt-1 font-serif text-2xl text-white">Galerie de review</h2>
                </div>
                <div className="rounded-[1rem] border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/62">
                  Rien n&apos;est pousse vers le jeu principal.
                </div>
              </div>

              {activeEntry.candidates.length > 0 ? (
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {activeEntry.candidates.map((candidate) => (
                    <article
                      key={candidate.filename}
                      className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-black/20"
                    >
                      <div style={candidate.hasTransparency ? TRANSPARENT_BACKGROUND_STYLE : undefined}>
                        <img
                          src={candidate.src}
                          alt={`Candidat ${candidate.filename} pour ${activeEntry.name}`}
                          className={["aspect-[2/3] w-full", candidate.hasTransparency ? "object-contain" : "object-cover"].join(
                            " ",
                          )}
                          draggable={false}
                        />
                      </div>
                      <div className="space-y-3 p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-white">{candidate.filename}</p>
                            <p className="mt-1 text-xs leading-5 text-white/52">
                              {formatDateLabel(candidate.createdAt)} - seed {candidate.seed}
                            </p>
                          </div>
                          {candidate.selected ? (
                            <span className="rounded-full border border-emerald-200/30 bg-emerald-300/12 px-3 py-1 text-[0.64rem] uppercase tracking-[0.18em] text-emerald-100">
                              retenu
                            </span>
                          ) : null}
                        </div>

                        <div className="flex flex-wrap gap-2 text-[0.64rem] uppercase tracking-[0.16em] text-white/55">
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                            {candidate.workflowFamily}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                            {backgroundModeLabel(candidate.backgroundMode)}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => selectCandidate(candidate.filename)}
                            className={buttonClassName(candidate.selected ? "secondary" : "primary")}
                            disabled={busyAction !== null}
                          >
                            {candidate.selected ? "Deja retenu" : "Retenir"}
                          </button>
                          <button
                            type="button"
                            onClick={() => deleteCandidate(candidate.filename)}
                            className={buttonClassName("danger")}
                            disabled={busyAction !== null}
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-4 grid min-h-[16rem] place-items-center rounded-[1.3rem] border border-dashed border-white/12 bg-black/10 text-center text-sm leading-7 text-white/45">
                  <div>
                    <p>Aucun candidat local pour cette carte.</p>
                    <p className="mt-2">
                      Choisis un preset, garde un sujet simple, puis genere quand ComfyUI est pret.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <div
        aria-live="polite"
        className="rounded-[1.4rem] border border-cyan-200/12 bg-cyan-200/8 px-4 py-3 text-sm leading-6 text-cyan-50/92"
      >
        {statusMessage}
      </div>
    </section>
  );
}
