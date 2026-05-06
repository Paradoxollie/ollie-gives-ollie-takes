export interface CharacterLabCandidate {
  filename: string;
  src: string;
  createdAt: string;
  seed: number;
  width: number;
  height: number;
  prompt: string;
  negativePrompt: string;
  renderPresetId: CharacterLabRenderPresetId;
  backgroundMode: CharacterLabBackgroundMode;
  workflowFamily: CharacterLabWorkflowFamily;
  hasTransparency: boolean;
  selected: boolean;
}

export type CharacterLabSilhouette = "compact" | "balanced" | "tall";

export type CharacterLabPosePreset = "idle-3q" | "idle-front" | "action-ready" | "turnaround-front";

export type CharacterLabDetailBudget = "clean" | "balanced" | "ornate";

export type CharacterLabAnimationGoal = "puppet-rig" | "mascot-loop" | "frame-by-frame";

export interface CharacterLabDirection {
  silhouette: CharacterLabSilhouette;
  posePreset: CharacterLabPosePreset;
  detailBudget: CharacterLabDetailBudget;
  animationGoal: CharacterLabAnimationGoal;
}

export interface CharacterLabEntry {
  id: string;
  name: string;
  concept: string;
  subjectPrompt: string;
  negativePrompt: string;
  notes: string;
  direction: CharacterLabDirection;
  fallbackArtSrc: string;
  referenceImageSrc: string | null;
  referenceImageUpdatedAt: string | null;
  candidates: CharacterLabCandidate[];
  selectedCandidateFilename: string | null;
  selectedCandidateSrc: string | null;
  candidateCount: number;
  lastGeneratedAt: string | null;
}

export type CharacterLabWorkflowFamily = "sdxl" | "flux";

export type CharacterLabRenderPresetId =
  | "game-toon-cutout"
  | "game-pixel-cutout"
  | "game-pixel-scene"
  | "flux-concept-cutout";

export type CharacterLabBackgroundMode = "scene" | "flat-backdrop" | "transparent-cutout";

export interface CharacterLabSettings {
  comfyUiUrl: string;
  renderPresetId: CharacterLabRenderPresetId;
  backgroundMode: CharacterLabBackgroundMode;
  width: number;
  height: number;
  referenceStrength: number;
  batchSize: number;
  steps: number;
  guidanceScale: number;
  samplerName: string;
  scheduler: string;
}

export interface CharacterLabServiceStatus {
  checkedAt: string;
  comfyUiUrl: string;
  reachable: boolean;
  error: string | null;
}

export interface CharacterLabStoredCandidate {
  filename: string;
  createdAt: string;
  seed: number;
  width: number;
  height: number;
  prompt: string;
  negativePrompt: string;
  renderPresetId?: CharacterLabRenderPresetId;
  backgroundMode?: CharacterLabBackgroundMode;
  workflowFamily?: CharacterLabWorkflowFamily;
  hasTransparency?: boolean;
}

export interface CharacterLabStoredCardState {
  subjectPrompt?: string;
  prompt?: string;
  negativePrompt?: string;
  notes?: string;
  direction?: Partial<CharacterLabDirection>;
  referenceImageFilename?: string | null;
  referenceImageUpdatedAt?: string | null;
  selectedCandidateFilename?: string | null;
  lastGeneratedAt?: string | null;
  candidates?: CharacterLabStoredCandidate[];
}

export interface CharacterLabStoredState {
  version: 1;
  settings?: Partial<CharacterLabSettings>;
  cards?: Record<string, CharacterLabStoredCardState>;
}

export interface CharacterLabData {
  guide: string[];
  warning: string;
  settings: CharacterLabSettings;
  serviceStatus: CharacterLabServiceStatus;
  entries: CharacterLabEntry[];
}

export interface CharacterLabCardUpdateInput {
  cardId: string;
  subjectPrompt: string;
  negativePrompt: string;
  notes: string;
  direction: CharacterLabDirection;
}

export interface CharacterLabGenerationInput extends CharacterLabCardUpdateInput {
  seed: number | null;
  settings: CharacterLabSettings;
}
