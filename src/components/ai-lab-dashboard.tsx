import type {
  AiLabBalanceRecommendation,
  AiLabCardAnalysis,
  AiLabComboAnalysis,
  AiLabGroupAnalysis,
  AiLabInsightSeverity,
  AiLabModelSummary,
  AiLabPairingSummary,
  AiLabReport,
  AiPlayerModelId,
} from "@/core/ai-lab/types";
import { getAiLabScenario } from "@/core/ai-lab/scenarios";
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

function summaryLabel(summary: { scenarioLabel: string }): string {
  return summary.scenarioLabel;
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

function statusLabel(status: "healthy" | "watch" | "problem" | AiLabCardAnalysis["status"]): string {
  if (status === "overperformer") {
    return "trop fort";
  }

  if (status === "underperformer") {
    return "trop faible";
  }

  if (status === "ignored") {
    return "ignore";
  }

  if (status === "risky") {
    return "risque";
  }

  return status;
}

function cardStatusTone(status: AiLabCardAnalysis["status"]): string {
  if (status === "overperformer") {
    return "border-rose-200/20 bg-rose-300/12 text-rose-50";
  }

  if (status === "underperformer" || status === "ignored" || status === "risky") {
    return "border-amber-200/20 bg-amber-300/12 text-amber-50";
  }

  return "border-emerald-200/20 bg-emerald-300/12 text-emerald-50";
}

function actionTone(action: AiLabBalanceRecommendation["action"]): string {
  if (action === "nerf") {
    return "border-rose-200/20 bg-rose-300/12 text-rose-50";
  }

  if (action === "buff") {
    return "border-emerald-200/20 bg-emerald-300/12 text-emerald-50";
  }

  return "border-cyan-200/18 bg-cyan-300/12 text-cyan-50";
}

function shortNotes(notes: string[]): string {
  return notes.slice(0, 2).join(" ");
}

function RecommendationRows({ recommendations }: { recommendations: AiLabBalanceRecommendation[] }) {
  return (
    <div className="overflow-x-auto rounded-[1rem] border border-white/10 bg-black/16">
      <table className="min-w-full text-left text-sm text-white/76">
        <thead className="border-b border-white/10 text-[0.56rem] uppercase tracking-[0.2em] text-white/42">
          <tr>
            <th className="px-4 py-3">Signal</th>
            <th className="px-4 py-3">Action</th>
            <th className="px-4 py-3">Cible</th>
            <th className="px-4 py-3">Sample</th>
            <th className="px-4 py-3">Lecture</th>
            <th className="px-4 py-3">Proposition</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((recommendation) => (
            <tr key={recommendation.id} className="border-b border-white/6 last:border-b-0">
              <td className="px-4 py-3 font-semibold text-white">{recommendation.title}</td>
              <td className="px-4 py-3">
                <span className={["rounded-full border px-2.5 py-1 text-xs font-semibold", actionTone(recommendation.action)].join(" ")}>
                  {recommendation.action}
                </span>
              </td>
              <td className="px-4 py-3">{recommendation.target}</td>
              <td className="px-4 py-3">
                {recommendation.sampleSize} / {recommendation.confidence}
              </td>
              <td className="min-w-[18rem] px-4 py-3">{recommendation.detail}</td>
              <td className="min-w-[18rem] px-4 py-3">{recommendation.recommendation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CardRows({ cards }: { cards: AiLabCardAnalysis[] }) {
  return (
    <div className="overflow-x-auto rounded-[1rem] border border-white/10 bg-black/16">
      <table className="min-w-full text-left text-sm text-white/76">
        <thead className="border-b border-white/10 text-[0.56rem] uppercase tracking-[0.2em] text-white/42">
          <tr>
            <th className="px-4 py-3">Carte</th>
            <th className="px-4 py-3">Famille</th>
            <th className="px-4 py-3">Statut</th>
            <th className="px-4 py-3">Choix</th>
            <th className="px-4 py-3">Win</th>
            <th className="px-4 py-3">Flips</th>
            <th className="px-4 py-3">Net PV</th>
            <th className="px-4 py-3">Signal</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.cardId} className="border-b border-white/6 last:border-b-0">
              <td className="px-4 py-3">
                <p className="font-semibold text-white">{card.name}</p>
                <p className="mt-1 text-xs text-white/42">
                  {card.role ?? "sans role"} | {card.rarity} | {card.effectKinds.join(", ") || "sans effet"}
                </p>
              </td>
              <td className="px-4 py-3">{card.family}</td>
              <td className="px-4 py-3">
                <span className={["rounded-full border px-2.5 py-1 text-xs font-semibold", cardStatusTone(card.status)].join(" ")}>
                  {statusLabel(card.status)}
                </span>
              </td>
              <td className="px-4 py-3">
                {card.played}/{card.offered}
                <span className="ml-2 text-white/42">{formatPercent(card.selectionRate)}</span>
              </td>
              <td className="px-4 py-3">{formatPercent(card.winRateWhenPlayed)}</td>
              <td className="px-4 py-3">{formatAverage(card.averageFlips)}</td>
              <td className="px-4 py-3">{formatSigned(card.averageNetDamage)}</td>
              <td className="min-w-[16rem] px-4 py-3">{shortNotes(card.notes)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GroupRows({ groups }: { groups: AiLabGroupAnalysis[] }) {
  return (
    <div className="overflow-x-auto rounded-[1rem] border border-white/10 bg-black/16">
      <table className="min-w-full text-left text-sm text-white/76">
        <thead className="border-b border-white/10 text-[0.56rem] uppercase tracking-[0.2em] text-white/42">
          <tr>
            <th className="px-4 py-3">Groupe</th>
            <th className="px-4 py-3">Statut</th>
            <th className="px-4 py-3">Choix</th>
            <th className="px-4 py-3">Win</th>
            <th className="px-4 py-3">Net PV</th>
            <th className="px-4 py-3">Cartes cle</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id} className="border-b border-white/6 last:border-b-0">
              <td className="px-4 py-3 font-semibold text-white">{group.label}</td>
              <td className="px-4 py-3">
                <span className={["rounded-full border px-2.5 py-1 text-xs font-semibold", cardStatusTone(group.status)].join(" ")}>
                  {statusLabel(group.status)}
                </span>
              </td>
              <td className="px-4 py-3">
                {group.played}/{group.offered}
                <span className="ml-2 text-white/42">{formatPercent(group.selectionRate)}</span>
              </td>
              <td className="px-4 py-3">{formatPercent(group.winRateWhenPlayed)}</td>
              <td className="px-4 py-3">{formatSigned(group.averageNetDamage)}</td>
              <td className="min-w-[16rem] px-4 py-3">{group.topCards.map((card) => card.name).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ComboRows({ combos }: { combos: AiLabComboAnalysis[] }) {
  return (
    <div className="overflow-x-auto rounded-[1rem] border border-white/10 bg-black/16">
      <table className="min-w-full text-left text-sm text-white/76">
        <thead className="border-b border-white/10 text-[0.56rem] uppercase tracking-[0.2em] text-white/42">
          <tr>
            <th className="px-4 py-3">Combo</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Occ.</th>
            <th className="px-4 py-3">Win</th>
            <th className="px-4 py-3">Flips</th>
            <th className="px-4 py-3">Degats</th>
            <th className="px-4 py-3">Signal</th>
          </tr>
        </thead>
        <tbody>
          {combos.map((combo) => (
            <tr key={combo.id} className="border-b border-white/6 last:border-b-0">
              <td className="px-4 py-3 font-semibold text-white">{combo.label}</td>
              <td className="px-4 py-3">{combo.kind}</td>
              <td className="px-4 py-3">{combo.count}</td>
              <td className="px-4 py-3">{formatPercent(combo.winRate)}</td>
              <td className="px-4 py-3">{formatAverage(combo.averageFlips)}</td>
              <td className="px-4 py-3">{formatAverage(combo.averageDamageDealt)}</td>
              <td className="min-w-[16rem] px-4 py-3">{shortNotes(combo.notes)}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
  const recommendationRows = report?.diagnostics.balanceRecommendations.slice(0, 10) ?? [];
  const scenarioLabels =
    report?.config.scenarioIds?.map((scenarioId) => getAiLabScenario(scenarioId).label).join(", ") || "Depart actuel";
  const priorityCardRows =
    report?.diagnostics.cardAnalytics
      .filter((card) => card.status !== "healthy")
      .concat(report.diagnostics.cardAnalytics.filter((card) => card.status === "healthy"))
      .slice(0, 14) ?? [];
  const comboRows = report?.diagnostics.comboAnalytics.slice(0, 14) ?? [];

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
          detail={
            report
              ? `${report.config.matchesPerPairing} matchs par pairing | ${scenarioLabels} | seed ${report.config.seed}`
              : "Lance npm run ai:lab:apply"
          }
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
              <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Scenario actuel</p>
              <h2 className="mt-1 font-serif text-2xl text-white">Depart de run reel</h2>
              <div className="mt-5 overflow-x-auto rounded-[1rem] border border-white/10 bg-black/16">
                <table className="min-w-full text-left text-sm text-white/76">
                  <thead className="border-b border-white/10 text-[0.56rem] uppercase tracking-[0.2em] text-white/42">
                    <tr>
                      <th className="px-4 py-3">Scenario</th>
                      <th className="px-4 py-3">Cartes depart</th>
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
                      <tr key={deck.scenarioId} className="border-b border-white/6 last:border-b-0">
                        <td className="px-4 py-3 font-semibold text-white">{summaryLabel(deck)}</td>
                        <td className="px-4 py-3">{deck.startingDeckCardCount}</td>
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
                <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Equilibrage</p>
                <h2 className="mt-1 font-serif text-2xl text-white">Actions recommandees</h2>
              </div>
              <p className="text-sm text-white/52">Cartes, familles, roles et combos classes par risque.</p>
            </div>
            <div className="mt-5">
              {recommendationRows.length > 0 ? (
                <RecommendationRows recommendations={recommendationRows} />
              ) : (
                <p className="rounded-[1rem] border border-white/10 bg-black/16 p-4 text-sm text-white/62">
                  Aucun signal assez fort pour proposer un changement direct sur cet echantillon.
                </p>
              )}
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Cartes</p>
                <h2 className="mt-1 font-serif text-2xl text-white">Ce qui est choisi, ignore, gagne ou coute des PV</h2>
              </div>
              <p className="text-sm text-white/52">Priorite aux cartes hors zone saine.</p>
            </div>
            <div className="mt-5">
              <CardRows cards={priorityCardRows} />
            </div>
          </section>

          <section className="grid gap-5 xl:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Familles</p>
              <h2 className="mt-1 font-serif text-2xl text-white">Archetypes dominants</h2>
              <div className="mt-5">
                <GroupRows groups={report.diagnostics.familyAnalytics} />
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Roles</p>
              <h2 className="mt-1 font-serif text-2xl text-white">Fonctions de deck</h2>
              <div className="mt-5">
                <GroupRows groups={report.diagnostics.roleAnalytics} />
              </div>
            </div>
          </section>

          <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/48">Combos</p>
                <h2 className="mt-1 font-serif text-2xl text-white">Chaines, adjacences et effets detectes</h2>
              </div>
              <p className="text-sm text-white/52">Un combo frequent n'est pas toujours un probleme, mais il devient testable.</p>
            </div>
            <div className="mt-5">
              <ComboRows combos={comboRows} />
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
                    <th className="px-4 py-3">Scenario</th>
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
                      <tr key={`${pairing.scenarioId}-${leftId}-${rightId}`} className="border-b border-white/6 last:border-b-0">
                        <td className="px-4 py-3">{summaryLabel(pairing)}</td>
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
