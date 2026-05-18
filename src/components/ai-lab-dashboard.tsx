import { STARTER_DECK_PRESETS } from "@/core";
import type { AiLabInsightSeverity, AiLabModelSummary, AiLabPairingSummary, AiLabReport, AiPlayerModelId } from "@/core/ai-lab/types";
import { AiTrainingControls } from "@/components/ai-training-controls";
import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";
import type { TrainingStatusPayload } from "@/lib/training-status-types";

interface AiLabDashboardProps {
  report: AiLabReport | null;
  trainingStatus: TrainingStatusPayload | null;
  liveChampion: RuntimeLiveChampionProfile;
  canControlTraining: boolean;
}

function formatPercent(value: number | null | undefined): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return `${(value * 100).toFixed(1)}%`;
}

function formatAverage(value: number | null | undefined): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return value.toFixed(2);
}

function formatSigned(value: number | null | undefined): string {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "--";
  }

  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}`;
}

function deckLabel(deckPresetId: string): string {
  return STARTER_DECK_PRESETS[deckPresetId as keyof typeof STARTER_DECK_PRESETS]?.label ?? deckPresetId;
}

function severityTone(severity: AiLabInsightSeverity): string {
  if (severity === "problem") {
    return "border-rose-200/18 bg-rose-300/10 text-rose-50";
  }

  if (severity === "watch") {
    return "border-amber-200/18 bg-amber-300/10 text-amber-50";
  }

  return "border-cyan-200/18 bg-cyan-300/10 text-cyan-50";
}

function statusTone(status: "healthy" | "watch" | "problem"): string {
  if (status === "problem") {
    return "border-rose-200/20 bg-rose-300/12 text-rose-50";
  }

  if (status === "watch") {
    return "border-amber-200/20 bg-amber-300/12 text-amber-50";
  }

  return "border-emerald-200/20 bg-emerald-300/12 text-emerald-50";
}

function getModelSummary(report: AiLabReport, modelId: AiPlayerModelId): AiLabModelSummary | null {
  return report.skillSummaries.find((summary) => summary.modelId === modelId) ?? null;
}

function getPairingSummary(pairing: AiLabPairingSummary, modelId: AiPlayerModelId): AiLabModelSummary | null {
  return pairing.modelSummaries.find((summary) => summary.modelId === modelId) ?? null;
}

function MetricCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-4 text-white">
      <p className="text-[0.56rem] uppercase tracking-[0.22em] text-white/45">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/58">{detail}</p>
    </div>
  );
}

export function AiLabDashboard({
  report,
  trainingStatus,
  liveChampion,
  canControlTraining,
}: AiLabDashboardProps) {
  const problemCount = report?.insights.filter((insight) => insight.severity === "problem").length ?? 0;
  const watchCount = report?.insights.filter((insight) => insight.severity === "watch").length ?? 0;

  return (
    <div className="ogot-scroll mx-auto flex h-screen max-w-[92rem] flex-col gap-5 overflow-y-auto px-4 py-5 text-white lg:px-6 lg:py-6">
      <header className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,16,30,0.94),rgba(6,12,23,0.9))] p-6 shadow-[0_28px_100px_rgba(5,12,24,0.42)]">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-[0.62rem] uppercase tracking-[0.3em] text-cyan-100/55">Page privee labo</p>
            <h1 className="mt-3 font-serif text-4xl text-white md:text-5xl">Studio IA</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/64">
              Benchmarks deterministes, echelle de joueurs, apprentissage local et signaux d'equilibrage pour Ollie Gives, Ollie Takes.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href="/lab"
              className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold text-white/82 transition hover:bg-white/12"
            >
              Labo
            </a>
            <a
              href="/game"
              className="rounded-full border border-cyan-200/18 bg-cyan-300/12 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-300/18"
            >
              Jouer
            </a>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Champion live"
          value={liveChampion.source === "trained" ? "Entraine" : "Heuristique"}
          detail={`${liveChampion.name} | depth ${liveChampion.searchDepth}, beam ${liveChampion.beamWidth}`}
        />
        <MetricCard
          label="Dernier rapport"
          value={report?.reportId ?? "Aucun"}
          detail={report ? `${report.config.matchesPerPairing} matchs par pairing | seed ${report.config.seed}` : "Lance npm run ai:lab:apply"}
        />
        <MetricCard
          label="Alertes"
          value={`${problemCount}/${watchCount}`}
          detail="Problemes forts / signaux a surveiller dans le dernier benchmark"
        />
        <MetricCard
          label="Promotion"
          value={formatPercent(liveChampion.winRateVsChampion)}
          detail={`Vs champion precedent | edge ${formatSigned(liveChampion.averageHpEdge)}`}
        />
      </section>

      <AiTrainingControls
        initialStatus={trainingStatus}
        canControlTraining={canControlTraining}
      />

      {!report ? (
        <section className="rounded-[1.5rem] border border-dashed border-white/16 bg-white/[0.04] p-6">
          <p className="text-sm leading-7 text-white/70">
            Aucun snapshot AI lab n'est encore disponible. Lance `npm run ai:lab:apply`, commit le fichier genere, puis redeploie.
          </p>
        </section>
      ) : (
        <>
          <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Echelle de joueurs</p>
                <h2 className="mt-1 font-serif text-2xl text-white">Du debutant au champion</h2>
              </div>
              <p className="text-sm text-white/52">Genere le {report.generatedAt}</p>
            </div>

            <div className="mt-5 overflow-x-auto rounded-[1rem] border border-white/10 bg-black/16">
              <table className="min-w-full text-left text-sm text-white/76">
                <thead className="border-b border-white/10 text-[0.56rem] uppercase tracking-[0.2em] text-white/42">
                  <tr>
                    <th className="px-4 py-3">Modele</th>
                    <th className="px-4 py-3">Niveau</th>
                    <th className="px-4 py-3">Bot</th>
                    <th className="px-4 py-3">Games</th>
                    <th className="px-4 py-3">Win rate</th>
                    <th className="px-4 py-3">Edge PV</th>
                  </tr>
                </thead>
                <tbody>
                  {report.playerModels.map((model) => {
                    const summary = getModelSummary(report, model.id);

                    return (
                      <tr key={model.id} className="border-b border-white/6 last:border-b-0">
                        <td className="px-4 py-3 font-semibold text-white">{model.label}</td>
                        <td className="px-4 py-3">{model.skillLabel}</td>
                        <td className="px-4 py-3">
                          {model.botId} d{model.searchDepth}/b{model.beamWidth}
                        </td>
                        <td className="px-4 py-3">{summary?.games ?? 0}</td>
                        <td className="px-4 py-3">{formatPercent(summary?.winRate)}</td>
                        <td className="px-4 py-3">{formatSigned(summary?.averageHpEdge)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Signaux</p>
              <h2 className="mt-1 font-serif text-2xl text-white">A examiner</h2>
              <div className="mt-5 space-y-3">
                {report.insights.map((insight) => (
                  <div key={insight.id} className={["rounded-[1rem] border p-4", severityTone(insight.severity)].join(" ")}>
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold">{insight.title}</p>
                      <span className="rounded-full border border-current/20 px-2 py-1 text-[0.62rem] uppercase tracking-[0.16em]">
                        {insight.severity}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 opacity-80">{insight.detail}</p>
                    <p className="mt-2 text-sm leading-6 opacity-70">{insight.recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Deck-size balance</p>
              <h2 className="mt-1 font-serif text-2xl text-white">10 / 12 / 14 cartes</h2>
              <div className="mt-5 overflow-x-auto rounded-[1rem] border border-white/10 bg-black/16">
                <table className="min-w-full text-left text-sm text-white/76">
                  <thead className="border-b border-white/10 text-[0.56rem] uppercase tracking-[0.2em] text-white/42">
                    <tr>
                      <th className="px-4 py-3">Deck</th>
                      <th className="px-4 py-3">Statut</th>
                      <th className="px-4 py-3">1er joueur</th>
                      <th className="px-4 py-3">Draw</th>
                      <th className="px-4 py-3">Tours</th>
                      <th className="px-4 py-3">Flips/tour</th>
                      <th className="px-4 py-3">Tours morts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.deckSummaries.map((deck) => (
                      <tr key={deck.deckPresetId} className="border-b border-white/6 last:border-b-0">
                        <td className="px-4 py-3 font-semibold text-white">{deckLabel(deck.deckPresetId)}</td>
                        <td className="px-4 py-3">
                          <span className={["rounded-full border px-2.5 py-1 text-xs font-semibold", statusTone(deck.status)].join(" ")}>
                            {deck.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">{formatPercent(deck.startingPlayerWinRate)}</td>
                        <td className="px-4 py-3">{formatPercent(deck.drawRate)}</td>
                        <td className="px-4 py-3">{formatAverage(deck.averages.turns)}</td>
                        <td className="px-4 py-3">{formatAverage(deck.averages.flipsPerTurn)}</td>
                        <td className="px-4 py-3">{formatPercent(deck.deadTurnFrequency)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Progression</p>
                <h2 className="mt-1 font-serif text-2xl text-white">Pairings par niveau</h2>
              </div>
              <p className="text-sm text-white/52">Le modele de droite devrait gagner plus souvent.</p>
            </div>

            <div className="mt-5 overflow-x-auto rounded-[1rem] border border-white/10 bg-black/16">
              <table className="min-w-full text-left text-sm text-white/76">
                <thead className="border-b border-white/10 text-[0.56rem] uppercase tracking-[0.2em] text-white/42">
                  <tr>
                    <th className="px-4 py-3">Deck</th>
                    <th className="px-4 py-3">Pairing</th>
                    <th className="px-4 py-3">Gauche</th>
                    <th className="px-4 py-3">Droite</th>
                    <th className="px-4 py-3">Draw</th>
                    <th className="px-4 py-3">Flips/tour</th>
                  </tr>
                </thead>
                <tbody>
                  {report.ladderPairings.map((pairing) => {
                    const [leftId, rightId] = pairing.matchup;
                    const left = report.playerModels.find((model) => model.id === leftId);
                    const right = report.playerModels.find((model) => model.id === rightId);
                    const leftSummary = getPairingSummary(pairing, leftId);
                    const rightSummary = getPairingSummary(pairing, rightId);

                    return (
                      <tr key={`${pairing.deckPresetId}-${leftId}-${rightId}`} className="border-b border-white/6 last:border-b-0">
                        <td className="px-4 py-3">{deckLabel(pairing.deckPresetId)}</td>
                        <td className="px-4 py-3 font-semibold text-white">
                          {left?.label ?? leftId} vs {right?.label ?? rightId}
                        </td>
                        <td className="px-4 py-3">{formatPercent(leftSummary?.winRate)}</td>
                        <td className="px-4 py-3">{formatPercent(rightSummary?.winRate)}</td>
                        <td className="px-4 py-3">{formatPercent(pairing.drawRate)}</td>
                        <td className="px-4 py-3">{formatAverage(pairing.averages.flipsPerTurn)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
