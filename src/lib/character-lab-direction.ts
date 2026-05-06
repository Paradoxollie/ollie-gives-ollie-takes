import type {
  CharacterLabAnimationGoal,
  CharacterLabBackgroundMode,
  CharacterLabDetailBudget,
  CharacterLabDirection,
  CharacterLabPosePreset,
  CharacterLabRenderPresetId,
  CharacterLabSilhouette,
} from "@/lib/character-lab-types";

interface CharacterLabDirectionOption<T extends string> {
  id: T;
  label: string;
  description: string;
  prompt: string;
  negativePrompt?: string;
}

export interface CharacterLabQuickflow {
  id: string;
  label: string;
  description: string;
  renderPresetId: CharacterLabRenderPresetId;
  backgroundMode: CharacterLabBackgroundMode;
  direction: CharacterLabDirection;
}

export interface CharacterLabDirectionDiagnostics {
  score: number;
  readinessLabel: string;
  summary: string;
  strengths: string[];
  risks: string[];
  nextSteps: string[];
  segmentCount: number;
  sceneClutterCount: number;
  accessoryCount: number;
}

const DEFAULT_CHARACTER_LAB_DIRECTION: CharacterLabDirection = {
  silhouette: "balanced",
  posePreset: "idle-3q",
  detailBudget: "clean",
  animationGoal: "puppet-rig",
};

const CARD_DIRECTION_DEFAULTS: Readonly<Record<string, Partial<CharacterLabDirection>>> = {
  sapling: {
    silhouette: "tall",
    posePreset: "idle-3q",
  },
  badger: {
    silhouette: "balanced",
    posePreset: "idle-front",
    detailBudget: "balanced",
  },
  heron: {
    silhouette: "tall",
    posePreset: "idle-3q",
  },
  foxfire: {
    silhouette: "balanced",
    posePreset: "action-ready",
    detailBudget: "balanced",
  },
  mole: {
    silhouette: "compact",
    posePreset: "idle-front",
    animationGoal: "mascot-loop",
  },
  stag: {
    silhouette: "compact",
    posePreset: "idle-front",
    animationGoal: "mascot-loop",
  },
  owl: {
    silhouette: "balanced",
    posePreset: "idle-3q",
    detailBudget: "balanced",
    animationGoal: "frame-by-frame",
  },
};

const SILHOUETTE_OPTIONS: readonly CharacterLabDirectionOption<CharacterLabSilhouette>[] = [
  {
    id: "compact",
    label: "Compact",
    description: "Mascotte dense, lisible tres vite et facile a boucler.",
    prompt: "compact silhouette, chunky readable masses, big focal face, simple body proportions",
    negativePrompt: "tiny head on giant body, thin unreadable limbs",
  },
  {
    id: "balanced",
    label: "Equilibre",
    description: "Hero 2D propre avec torse et membres bien lisibles.",
    prompt: "balanced hero proportions, clear torso and limbs, readable negative space, stable center of mass",
    negativePrompt: "messy overlapping shapes, tangled silhouette",
  },
  {
    id: "tall",
    label: "Vertical",
    description: "Silhouette allongee avec lecture forte en hauteur.",
    prompt: "tall vertical silhouette, long readable limbs, elegant stacked shapes, clean height rhythm",
    negativePrompt: "squat proportions, compressed silhouette",
  },
] as const;

const POSE_OPTIONS: readonly CharacterLabDirectionOption<CharacterLabPosePreset>[] = [
  {
    id: "idle-3q",
    label: "Idle 3/4",
    description: "Pose de repos la plus polyvalente pour un perso de jeu.",
    prompt: "neutral idle pose in 3/4 view, full body visible, both arms readable, feet planted",
    negativePrompt: "extreme foreshortening, cropped pose",
  },
  {
    id: "idle-front",
    label: "Idle face",
    description: "Face camera, tres propre pour sprite sheet et rig simple.",
    prompt: "neutral front-facing idle pose, full body centered, symmetrical readable stance",
    negativePrompt: "turned away pose, hidden limbs",
  },
  {
    id: "action-ready",
    label: "Pret a agir",
    description: "Dynamique sans casser la lisibilite des volumes.",
    prompt: "action-ready pose, clear weight shift, dynamic but readable limbs, no extreme perspective",
    negativePrompt: "contorted pose, motion blur",
  },
  {
    id: "turnaround-front",
    label: "Model sheet",
    description: "Front propre pour review, rig et paint-over.",
    prompt: "character sheet feeling, neutral front design pose, full body aligned for model review",
    negativePrompt: "dramatic camera angle, cinematic pose",
  },
] as const;

const DETAIL_OPTIONS: readonly CharacterLabDirectionOption<CharacterLabDetailBudget>[] = [
  {
    id: "clean",
    label: "Propre",
    description: "Peu de details, grosses formes, meilleur point de depart pour animer.",
    prompt: "large simple shapes, low detail budget, very few accessories, simple costume blocks, clean material groups",
    negativePrompt: "micro details everywhere, ornate armor, layered belts, overdesigned costume, texture noise",
  },
  {
    id: "balanced",
    label: "Controle",
    description: "Un ou deux details signatures sans noyer la silhouette.",
    prompt: "selective detail budget, one signature accessory, clear material separation, clean silhouette first",
    negativePrompt: "ornate clutter, tiny noisy props",
  },
  {
    id: "ornate",
    label: "Hero",
    description: "Plus de details mais toujours sous controle pour le jeu.",
    prompt: "hero-grade detail pass, secondary accents, strong shape hierarchy, silhouette still readable",
    negativePrompt: "flat generic costume, detail mush",
  },
] as const;

const ANIMATION_OPTIONS: readonly CharacterLabDirectionOption<CharacterLabAnimationGoal>[] = [
  {
    id: "puppet-rig",
    label: "Rig 2D",
    description: "Cherche des parties de corps detachees et faciles a separer.",
    prompt:
      "animation-ready 2d cutout, separated limbs, clear joints at shoulders elbows hips knees, clean overlap logic, rig-friendly shapes",
    negativePrompt: "merged arms into torso, fused legs, hidden hands, missing feet",
  },
  {
    id: "mascot-loop",
    label: "Loop mascotte",
    description: "Idle simple, rebond propre et volumes faciles a boucler.",
    prompt: "loop-friendly mascot design, bouncy readable shapes, simple hands and feet, strong face read",
    negativePrompt: "stiff anatomy, complex finger poses, tiny feet",
  },
  {
    id: "frame-by-frame",
    label: "Sprite anime",
    description: "Pose forte avec zones flexibles pour keyframes expressives.",
    prompt: "strong keyframe silhouette, flexible squash and stretch zones, expressive face and hands, clear acting lines",
    negativePrompt: "lifeless mannequin pose, unreadable gesture line",
  },
] as const;

const SCENE_CLUTTER_WORDS = [
  "background",
  "forest",
  "shrine",
  "pedestal",
  "platform",
  "altar",
  "cave",
  "waterfall",
  "portal",
  "environment",
  "scene",
  "vista",
] as const;

const ACCESSORY_WORDS = [
  "holding",
  "wearing",
  "crown",
  "cape",
  "satchel",
  "amulet",
  "necklace",
  "goggles",
  "glasses",
  "bottle",
  "staff",
  "lantern",
  "weapon",
  "bag",
] as const;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function splitSegments(value: string): string[] {
  return value
    .split(",")
    .map((segment) => segment.trim().replace(/\s+/g, " "))
    .filter(Boolean);
}

function getOptionById<T extends string>(
  options: readonly CharacterLabDirectionOption<T>[],
  id: T,
): CharacterLabDirectionOption<T> {
  return options.find((option) => option.id === id) ?? options[0];
}

function getSceneClutterSegments(subjectPrompt: string): string[] {
  return splitSegments(subjectPrompt).filter((segment) =>
    SCENE_CLUTTER_WORDS.some((word) => segment.toLowerCase().includes(word)),
  );
}

function getAccessorySegments(subjectPrompt: string): string[] {
  return splitSegments(subjectPrompt).filter((segment) =>
    ACCESSORY_WORDS.some((word) => segment.toLowerCase().includes(word)),
  );
}

export const CHARACTER_LAB_SILHOUETTE_OPTIONS = SILHOUETTE_OPTIONS;
export const CHARACTER_LAB_POSE_OPTIONS = POSE_OPTIONS;
export const CHARACTER_LAB_DETAIL_OPTIONS = DETAIL_OPTIONS;
export const CHARACTER_LAB_ANIMATION_OPTIONS = ANIMATION_OPTIONS;

export const CHARACTER_LAB_QUICKFLOWS: readonly CharacterLabQuickflow[] = [
  {
    id: "anim-2d-cutout",
    label: "2D anime propre",
    description: "Le meilleur point de depart pour un perso 2D cool, lisible et riggable.",
    renderPresetId: "game-toon-cutout",
    backgroundMode: "transparent-cutout",
    direction: {
      silhouette: "balanced",
      posePreset: "idle-3q",
      detailBudget: "clean",
      animationGoal: "puppet-rig",
    },
  },
  {
    id: "sprite-mascot",
    label: "Mascotte loop",
    description: "Pour des personnages plus chibi, simples et faciles a boucler.",
    renderPresetId: "game-pixel-cutout",
    backgroundMode: "transparent-cutout",
    direction: {
      silhouette: "compact",
      posePreset: "idle-front",
      detailBudget: "clean",
      animationGoal: "mascot-loop",
    },
  },
  {
    id: "silhouette-explore",
    label: "Exploration silhouette",
    description: "Pour chercher une bonne forme avant le rendu final.",
    renderPresetId: "flux-concept-cutout",
    backgroundMode: "flat-backdrop",
    direction: {
      silhouette: "balanced",
      posePreset: "action-ready",
      detailBudget: "clean",
      animationGoal: "frame-by-frame",
    },
  },
] as const;

export function getDefaultCharacterLabDirection(cardId?: string): CharacterLabDirection {
  return resolveCharacterLabDirection(CARD_DIRECTION_DEFAULTS[cardId ?? ""]);
}

export function resolveCharacterLabDirection(direction?: Partial<CharacterLabDirection>, cardId?: string): CharacterLabDirection {
  return {
    ...DEFAULT_CHARACTER_LAB_DIRECTION,
    ...(cardId ? CARD_DIRECTION_DEFAULTS[cardId] : {}),
    ...direction,
  };
}

export function buildCharacterLabDirectionPrompt(direction: CharacterLabDirection) {
  const silhouette = getOptionById(SILHOUETTE_OPTIONS, direction.silhouette);
  const pose = getOptionById(POSE_OPTIONS, direction.posePreset);
  const detail = getOptionById(DETAIL_OPTIONS, direction.detailBudget);
  const animation = getOptionById(ANIMATION_OPTIONS, direction.animationGoal);

  return {
    promptSegments: [silhouette.prompt, pose.prompt, detail.prompt, animation.prompt],
    negativePromptSegments: [
      silhouette.negativePrompt,
      pose.negativePrompt,
      detail.negativePrompt,
      animation.negativePrompt,
    ].filter(Boolean) as string[],
    labels: [silhouette.label, pose.label, detail.label, animation.label],
  };
}

export function analyzeCharacterLabDirectionPlan(options: {
  subjectPrompt: string;
  direction: CharacterLabDirection;
  renderPresetId: CharacterLabRenderPresetId;
  backgroundMode: CharacterLabBackgroundMode;
  experimental: boolean;
  removedSegments: string[];
}): CharacterLabDirectionDiagnostics {
  const segments = splitSegments(options.subjectPrompt);
  const sceneClutterSegments = getSceneClutterSegments(options.subjectPrompt);
  const accessorySegments = getAccessorySegments(options.subjectPrompt);

  let score = 52;
  const strengths: string[] = [];
  const risks: string[] = [];
  const nextSteps: string[] = [];

  if (options.backgroundMode === "transparent-cutout") {
    score += 16;
    strengths.push("Le fond transparent garde le perso directement exploitable pour le jeu.");
  } else {
    risks.push("Le fond n'est pas en cutout pur. Il faudra nettoyer avant integration.");
    nextSteps.push("Passe en PNG transparent pour evaluer le perso comme asset de jeu et non comme illustration.");
  }

  if (options.renderPresetId === "game-toon-cutout") {
    score += 14;
    strengths.push("Le preset 2D toon pousse des volumes plus propres et moins blob que le pixel prompt.");
  } else if (options.renderPresetId === "game-pixel-cutout") {
    score += 8;
    strengths.push("Le preset pixel reste lisible, mais il simplifie fort les formes.");
  }

  if (options.direction.detailBudget !== "ornate") {
    score += 6;
    strengths.push("Le budget de details reste compatible avec une future animation.");
  } else {
    risks.push("Le niveau de details hero peut vite noyer les articulations et la silhouette.");
  }

  if (options.direction.animationGoal === "puppet-rig") {
    score += 8;
    strengths.push("Le brief force des membres separables et des articulations plus lisibles.");
  }

  if (options.direction.posePreset === "idle-front" || options.direction.posePreset === "idle-3q") {
    score += 6;
    strengths.push("La pose est stable et facile a relire en idle.");
  }

  if (segments.length <= 7) {
    score += 6;
  } else if (segments.length >= 11) {
    score -= 10;
    risks.push("Le sujet contient beaucoup de segments. Le modele risque de repartir son energie partout.");
    nextSteps.push("Supprime une partie des accessoires pour garder 4 a 7 idees fortes maximum.");
  }

  if (sceneClutterSegments.length > 0) {
    score -= 16;
    risks.push("Le sujet contient encore du decor ou des mots d'illustration.");
    nextSteps.push("Retire le decor du sujet. Le perso doit porter tout seul la lecture.");
  }

  if (accessorySegments.length >= 3) {
    score -= 8;
    risks.push("Trop d'accessoires concurrencent la silhouette et les futures animations.");
    nextSteps.push("Garde un accessoire signature, pas trois.");
  }

  if (options.removedSegments.length > 0) {
    score += 4;
    strengths.push("Le nettoyage automatique a deja retire des vieux mots de style/decor.");
  }

  if (options.experimental) {
    score -= 12;
    risks.push("Le preset experimental sert surtout a chercher des idees, pas un rendu final propre.");
  }

  score = clamp(score, 12, 98);

  if (strengths.length === 0) {
    strengths.push("La base est editable, mais le studio a encore besoin de contraintes plus claires.");
  }

  if (risks.length === 0) {
    risks.push("Aucun risque critique detecte. Le prochain tri devra surtout se faire sur la silhouette et le charme.");
  }

  if (nextSteps.length === 0) {
    nextSteps.push("Lance 2 a 4 variantes avec des seeds differentes et compare seulement la silhouette et les articulations.");
  }

  const readinessLabel = score >= 82 ? "Tres solide" : score >= 66 ? "Bonne base" : "A nettoyer";
  const summary =
    score >= 82
      ? "Le brief vise deja un vrai personnage de jeu 2D plutot qu'une illustration. Tu peux iterer sur les seeds."
      : score >= 66
        ? "La direction va dans le bon sens, mais un peu de simplification donnera des persos bien plus propres."
        : "Le studio pousse encore trop vers l'image illustrative ou trop chargee. Il faut simplifier avant de relancer.";

  return {
    score,
    readinessLabel,
    summary,
    strengths,
    risks,
    nextSteps,
    segmentCount: segments.length,
    sceneClutterCount: sceneClutterSegments.length,
    accessoryCount: accessorySegments.length,
  };
}
