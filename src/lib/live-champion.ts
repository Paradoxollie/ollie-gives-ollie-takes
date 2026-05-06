import "server-only";

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

import { LIVE_CHAMPION_PROFILE } from "@/core/bots/generated/liveChampion";
import type { TrainedBotWeights } from "@/core/types";
import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";

interface TrainingReportFile {
  reportId: string;
  trainedAt: string;
  config?: {
    searchDepth?: number;
    beamWidth?: number;
  };
  best?: {
    weights?: TrainedBotWeights;
    averageHpEdge?: number;
  };
}

interface PromotionOpponentSummary {
  opponentId: string;
  matches: number;
  winRate: number;
  averageHpEdge: number;
}

interface PromotionAdventureOpponentSummary {
  opponentId: string;
  runs: number;
  victoryRate: number;
  bossReachRate: number;
  averageLocationsCleared: number;
  averageScore: number;
}

interface PromotionReportFile {
  reportId: string;
  trainedAt: string;
  approved: boolean;
  config?: {
    matchesPerOpponent?: number;
    searchDepth?: number;
    beamWidth?: number;
  };
  benchmark?: {
    averageHpEdge?: number;
    opponents?: PromotionOpponentSummary[];
  };
  campaignBenchmark?: {
    averageScore?: number;
    opponents?: PromotionAdventureOpponentSummary[];
  };
}

interface ApprovedChampionCandidate {
  profile: RuntimeLiveChampionProfile;
  trainedAtMs: number;
  overallAverageHpEdge: number;
}

const TRAINING_REPORTS_DIRECTORY = path.join(process.cwd(), "reports", "training");

async function readJsonFile<T>(filename: string): Promise<T | null> {
  try {
    const raw = await readFile(path.join(TRAINING_REPORTS_DIRECTORY, filename), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

function fallbackProfile(): RuntimeLiveChampionProfile {
  return {
    name: LIVE_CHAMPION_PROFILE.name,
    source: LIVE_CHAMPION_PROFILE.source,
    approved: LIVE_CHAMPION_PROFILE.approved,
    promotedAt: LIVE_CHAMPION_PROFILE.promotedAt,
    benchmarkMatchesPerOpponent: LIVE_CHAMPION_PROFILE.benchmarkMatchesPerOpponent,
    winRateVsHeuristic: LIVE_CHAMPION_PROFILE.winRateVsHeuristic,
    winRateVsChampion: LIVE_CHAMPION_PROFILE.winRateVsChampion,
    averageHpEdge: LIVE_CHAMPION_PROFILE.averageHpEdge,
    campaignScoreVsHeuristic: LIVE_CHAMPION_PROFILE.campaignScoreVsHeuristic,
    campaignScoreVsChampion: LIVE_CHAMPION_PROFILE.campaignScoreVsChampion,
    campaignBossReachVsHeuristic: LIVE_CHAMPION_PROFILE.campaignBossReachVsHeuristic,
    campaignBossReachVsChampion: LIVE_CHAMPION_PROFILE.campaignBossReachVsChampion,
    searchDepth: LIVE_CHAMPION_PROFILE.searchDepth,
    beamWidth: LIVE_CHAMPION_PROFILE.beamWidth,
    weights: LIVE_CHAMPION_PROFILE.weights,
    selectionReason:
      LIVE_CHAMPION_PROFILE.source === "trained" && LIVE_CHAMPION_PROFILE.approved
        ? "Profil promu deja integre dans le build."
        : "Fallback heuristique en attente d'un profil promu plus fort.",
  };
}

function opponentSummary(report: PromotionReportFile, opponentId: string): PromotionOpponentSummary | null {
  return report.benchmark?.opponents?.find((entry) => entry.opponentId === opponentId) ?? null;
}

function compareApprovedCandidates(left: ApprovedChampionCandidate, right: ApprovedChampionCandidate) {
  if (left.profile.winRateVsChampion !== right.profile.winRateVsChampion) {
    return right.profile.winRateVsChampion - left.profile.winRateVsChampion;
  }

  if (left.profile.campaignScoreVsChampion !== right.profile.campaignScoreVsChampion) {
    return right.profile.campaignScoreVsChampion - left.profile.campaignScoreVsChampion;
  }

  if (left.profile.winRateVsHeuristic !== right.profile.winRateVsHeuristic) {
    return right.profile.winRateVsHeuristic - left.profile.winRateVsHeuristic;
  }

  if (left.profile.campaignScoreVsHeuristic !== right.profile.campaignScoreVsHeuristic) {
    return right.profile.campaignScoreVsHeuristic - left.profile.campaignScoreVsHeuristic;
  }

  if (left.overallAverageHpEdge !== right.overallAverageHpEdge) {
    return right.overallAverageHpEdge - left.overallAverageHpEdge;
  }

  return right.trainedAtMs - left.trainedAtMs;
}

async function loadApprovedCandidates(): Promise<ApprovedChampionCandidate[]> {
  try {
    const files = await readdir(TRAINING_REPORTS_DIRECTORY);
    const promotionFiles = files
      .filter((filename) => filename.startsWith("trained-bot-") && filename.endsWith("-promotion.json"))
      .sort((left, right) => right.localeCompare(left));
    const candidates: ApprovedChampionCandidate[] = [];

    for (const promotionFilename of promotionFiles) {
      const promotion = await readJsonFile<PromotionReportFile>(promotionFilename);
      if (!promotion?.approved) {
        continue;
      }

      const report = await readJsonFile<TrainingReportFile>(`${promotion.reportId}.json`);
      if (!report?.best?.weights) {
        continue;
      }

      const heuristicSummary = opponentSummary(promotion, "heuristic");
      const championSummary = opponentSummary(promotion, "champion");
      const campaignHeuristicSummary = promotion.campaignBenchmark?.opponents?.find((entry) => entry.opponentId === "heuristic");
      const campaignChampionSummary = promotion.campaignBenchmark?.opponents?.find((entry) => entry.opponentId === "champion");
      const trainedAtMs = Date.parse(promotion.trainedAt);

      candidates.push({
        profile: {
          name: promotion.reportId,
          source: "trained",
          approved: true,
          promotedAt: promotion.trainedAt,
          benchmarkMatchesPerOpponent: promotion.config?.matchesPerOpponent ?? 0,
          winRateVsHeuristic: heuristicSummary?.winRate ?? 0,
          winRateVsChampion: championSummary?.winRate ?? 0,
          averageHpEdge: promotion.benchmark?.averageHpEdge ?? report.best.averageHpEdge ?? 0,
          campaignScoreVsHeuristic: campaignHeuristicSummary?.averageScore ?? 0,
          campaignScoreVsChampion: campaignChampionSummary?.averageScore ?? 0,
          campaignBossReachVsHeuristic: campaignHeuristicSummary?.bossReachRate ?? 0,
          campaignBossReachVsChampion: campaignChampionSummary?.bossReachRate ?? 0,
          searchDepth: promotion.config?.searchDepth ?? report.config?.searchDepth ?? LIVE_CHAMPION_PROFILE.searchDepth,
          beamWidth: promotion.config?.beamWidth ?? report.config?.beamWidth ?? LIVE_CHAMPION_PROFILE.beamWidth,
          weights: report.best.weights,
          selectionReason:
            "Meilleur profil approuve retrouve automatiquement dans les benchmarks locaux, sur combat tactique et run complet.",
        },
        trainedAtMs: Number.isFinite(trainedAtMs) ? trainedAtMs : 0,
        overallAverageHpEdge: promotion.benchmark?.averageHpEdge ?? 0,
      });
    }

    return candidates.sort(compareApprovedCandidates);
  } catch {
    return [];
  }
}

/**
 * Resolves the live champion profile at request time. This keeps localhost
 * gameplay aligned with the best approved training result even while the
 * production bundle is already running.
 */
export async function loadResolvedLiveChampionProfile(): Promise<RuntimeLiveChampionProfile> {
  const approvedCandidates = await loadApprovedCandidates();
  return approvedCandidates[0]?.profile ?? fallbackProfile();
}
