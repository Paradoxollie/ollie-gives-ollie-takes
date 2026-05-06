import { STARTER_DECK_PRESETS } from "@/core";
import type { SimulationReport } from "@/core/sim/types";

interface LabReportDashboardProps {
  latestReport: SimulationReport | null;
  recentReports: SimulationReport[];
}

function toFiniteNumber(value: number | null | undefined): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function formatPercent(value: number | null | undefined): string {
  return `${(toFiniteNumber(value) * 100).toFixed(1)}%`;
}

function formatAverage(value: number | null | undefined): string {
  return toFiniteNumber(value).toFixed(2);
}

function deckLabel(deckPresetId: string): string {
  return STARTER_DECK_PRESETS[deckPresetId as keyof typeof STARTER_DECK_PRESETS]?.label ?? deckPresetId;
}

function MetricCard({
  label,
  value,
  detail,
  tone = "default",
}: {
  label: string;
  value: string;
  detail: string;
  tone?: "default" | "mint" | "violet" | "amber";
}) {
  const toneClass = {
    default: "border-white/10 bg-white/[0.05]",
    mint: "border-emerald-200/14 bg-emerald-200/10",
    violet: "border-violet-200/14 bg-violet-200/10",
    amber: "border-amber-200/14 bg-amber-200/10",
  }[tone];

  return (
    <div className={["rounded-[1.5rem] border p-4 text-white", toneClass].join(" ")}>
      <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">{label}</p>
      <p className="mt-2 text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-sm leading-6 text-white/65">{detail}</p>
    </div>
  );
}

function BarRow({
  label,
  value,
  max,
  tone = "emerald",
}: {
  label: string;
  value: number;
  max: number;
  tone?: "emerald" | "violet" | "amber";
}) {
  const safeValue = toFiniteNumber(value);
  const safeMax = toFiniteNumber(max);
  const width = safeMax === 0 ? 0 : Math.max(8, (safeValue / safeMax) * 100);
  const barTone = {
    emerald: "from-emerald-300 to-cyan-200",
    violet: "from-violet-300 to-fuchsia-200",
    amber: "from-amber-300 to-orange-200",
  }[tone];

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-3 text-sm text-white/78">
        <span>{label}</span>
        <span>{formatAverage(safeValue)}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div className={["h-3 rounded-full bg-gradient-to-r", barTone].join(" ")} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function renderMoveHeatmap(report: SimulationReport) {
  const totalMoves = report.primarySummary.moveDistribution.overall.flat().reduce((sum, value) => sum + value, 0);

  return (
    <div
      className="grid gap-2.5"
      style={{ gridTemplateColumns: `repeat(${report.primarySummary.boardSize}, minmax(0, 1fr))` }}
    >
      {report.primarySummary.moveDistribution.overall.flatMap((row, rowIndex) =>
        row.map((value, colIndex) => {
          const intensity = totalMoves === 0 ? 0.14 : 0.16 + (value / totalMoves) * 0.84;

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="rounded-[1.2rem] border border-white/10 p-3 text-center"
              style={{
                background: `linear-gradient(180deg, rgba(34, 211, 238, ${intensity * 0.45}), rgba(168, 85, 247, ${
                  intensity * 0.32
                }))`,
              }}
            >
              <p className="text-[0.58rem] uppercase tracking-[0.22em] text-white/70">
                {rowIndex},{colIndex}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
            </div>
          );
        }),
      )}
    </div>
  );
}

export function LabReportDashboard({ latestReport, recentReports }: LabReportDashboardProps) {
  if (!latestReport) {
    return (
      <section className="rounded-[2.2rem] border border-dashed border-white/14 bg-[linear-gradient(180deg,rgba(7,16,30,0.92),rgba(6,12,23,0.88))] p-6 text-white shadow-[0_28px_100px_rgba(5,12,24,0.42)]">
        <p className="text-[0.64rem] uppercase tracking-[0.32em] text-cyan-100/55">Outil local uniquement</p>
        <h1 className="mt-3 font-serif text-4xl text-white">Laboratoire de simulation</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68">
          Aucun rapport compatible n'a ete trouve. Lance <code>npm run sim</code> pour generer les fichiers JSON et Markdown dans
          <code> /reports</code>, puis recharge la page.
        </p>
      </section>
    );
  }

  const deckMaxTurns = Math.max(...latestReport.deckComparison.map((entry) => entry.averages.turns));
  const deckMaxControlDiff = Math.max(...latestReport.deckComparison.map((entry) => entry.averages.roundEndControlDifference));
  const endingMax = Math.max(...Object.values(latestReport.primarySummary.endingSources));
  const reasonMax = Math.max(...Object.values(latestReport.primarySummary.resultReasons));
  const hasDeckComparison = latestReport.deckComparison.length > 1;

  return (
    <section className="space-y-6 rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,16,30,0.92),rgba(6,12,23,0.88))] p-6 text-white shadow-[0_28px_100px_rgba(5,12,24,0.42)] backdrop-blur-xl">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-[0.64rem] uppercase tracking-[0.32em] text-cyan-100/55">Outil local uniquement</p>
          <h1 className="mt-3 font-serif text-5xl text-white">Laboratoire de simulation</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/68">
            Ces rapports testent le meme moteur deterministe que l'UI jouable. On mesure ici les flips, le controle du plateau, le tempo des rounds et les degats infliges carte par carte en fin de manche.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-sm text-white/72">
          <p>Dernier rapport: {latestReport.reportId}</p>
          <p className="mt-1 text-white/48">Genere le {latestReport.generatedAt}</p>
        </div>
      </div>

      <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
          <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Regles actuelles</p>
          <div className="mt-3 grid gap-3 text-sm leading-6 text-white/72">
            <p>Le plateau est en 3x3. Seule la carte posee compare ses cotes avec les voisins adverses.</p>
            <p>Si la valeur posee est strictement superieure, la carte adverse se retourne et change de proprietaire.</p>
            <p>Quand le plateau est plein, chaque champion subit autant de degats que le nombre de cartes controlees par l'adversaire, puis toutes les cartes partent en defausse sous leur proprietaire actuel.</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <MetricCard
            label="Matchup"
            value={`${latestReport.config.matchup[0]} vs ${latestReport.config.matchup[1]}`}
            detail={`Deck principal: ${deckLabel(latestReport.config.requestedDeckPreset)}`}
            tone="mint"
          />
          <MetricCard
            label="Taux de draw"
            value={formatPercent(latestReport.primarySummary.drawRate)}
            detail={`Avantage premier joueur ${formatPercent(latestReport.primarySummary.startingPlayer.overallStartingPlayerWinRate)}`}
            tone="violet"
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Matchs par serie"
          value={String(latestReport.config.matchesPerSeries)}
          detail={hasDeckComparison ? "Une serie pour chaque preset disponible" : "Une serie sur le deck actif"}
        />
        <MetricCard
          label="Rounds moyens"
          value={formatAverage(latestReport.primarySummary.averages.rounds)}
          detail={`Tours moyens ${formatAverage(latestReport.primarySummary.averages.turns)}`}
          tone="mint"
        />
        <MetricCard
          label="Flips / match"
          value={formatAverage(latestReport.primarySummary.averages.flipsPerMatch)}
          detail={`Flips / tour ${formatAverage(latestReport.primarySummary.averages.flipsPerTurn)}`}
          tone="amber"
        />
        <MetricCard
          label="Degats / round"
          value={formatAverage(latestReport.primarySummary.averages.roundEndDamage)}
          detail={`Cartes controlees J/E ${formatAverage(latestReport.primarySummary.averages.controlledCardsPerRoundBySide.player)} / ${formatAverage(latestReport.primarySummary.averages.controlledCardsPerRoundBySide.enemy)}`}
          tone="violet"
        />
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <section className="space-y-4 rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Resume principal</p>
              <h2 className="mt-1 font-serif text-2xl text-white">Performance des bots</h2>
            </div>
            <p className="text-sm text-white/58">
              Frequence de dead-turn {formatPercent(latestReport.primarySummary.deadTurnFrequency)}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.3rem] border border-white/10 bg-black/14 p-4">
              <p className="text-sm font-medium text-white">Win rate par bot</p>
              <div className="mt-4 space-y-3">
                {latestReport.primarySummary.botWinRates.map((entry) => (
                  <BarRow key={entry.botId} label={entry.botId} value={entry.winRate * 100} max={100} tone="emerald" />
                ))}
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-white/10 bg-black/14 p-4">
              <p className="text-sm font-medium text-white">Controle moyen par round</p>
              <div className="mt-4 space-y-3">
                <BarRow
                  label="Ollie"
                  value={latestReport.primarySummary.averages.controlledCardsPerRoundBySide.player}
                  max={latestReport.primarySummary.boardSize * latestReport.primarySummary.boardSize}
                  tone="amber"
                />
                <BarRow
                  label="Rival"
                  value={latestReport.primarySummary.averages.controlledCardsPerRoundBySide.enemy}
                  max={latestReport.primarySummary.boardSize * latestReport.primarySummary.boardSize}
                  tone="violet"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4 rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Resume principal</p>
            <h2 className="mt-1 font-serif text-2xl text-white">Fin de match</h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.3rem] border border-white/10 bg-black/14 p-4">
              <p className="text-sm font-medium text-white">Sources de fin</p>
              <div className="mt-4 space-y-3">
                {Object.entries(latestReport.primarySummary.endingSources).map(([label, value]) => (
                  <BarRow key={label} label={label} value={value} max={endingMax} tone="violet" />
                ))}
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-white/10 bg-black/14 p-4">
              <p className="text-sm font-medium text-white">Raisons de resultat</p>
              <div className="mt-4 space-y-3">
                {Object.entries(latestReport.primarySummary.resultReasons).map(([label, value]) => (
                  <BarRow key={label} label={label} value={value} max={reasonMax} tone="amber" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <section className="space-y-4 rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Resume principal</p>
            <h2 className="mt-1 font-serif text-2xl text-white">Heatmap des placements</h2>
          </div>
          {renderMoveHeatmap(latestReport)}
        </section>

        <section className="space-y-4 rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">{hasDeckComparison ? "Comparaison de decks" : "Deck actif"}</p>
            <h2 className="mt-1 font-serif text-2xl text-white">{hasDeckComparison ? "Ecart de controle moyen" : "Rythme du pool de test"}</h2>
          </div>
          <div className="rounded-[1.3rem] border border-white/10 bg-black/14 p-4">
            <div className="space-y-3">
              {latestReport.deckComparison.map((entry) => (
                <BarRow
                  key={entry.deckPresetId}
                  label={deckLabel(entry.deckPresetId)}
                  value={entry.averages.roundEndControlDifference}
                  max={deckMaxControlDiff}
                  tone="emerald"
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">{hasDeckComparison ? "Comparaison de decks" : "Deck actif"}</p>
            <h2 className="mt-1 font-serif text-2xl text-white">{hasDeckComparison ? "Presets de pool" : "Statistiques du pool de test"}</h2>
          </div>
          <p className="text-sm text-white/58">
            {hasDeckComparison ? "Meme matchup, meme famille de seed, compare tous les presets disponibles." : "Meme matchup, meme famille de seed, suivi sur le seul deck jouable actuel."}
          </p>
        </div>

        <div className="mt-5 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-x-auto rounded-[1.3rem] border border-white/10 bg-black/14">
            <table className="min-w-full text-left text-sm text-white/78">
              <thead className="border-b border-white/10 text-[0.58rem] uppercase tracking-[0.2em] text-white/45">
                <tr>
                  <th className="px-4 py-3">Deck</th>
                  <th className="px-4 py-3">Tours</th>
                  <th className="px-4 py-3">Rounds</th>
                  <th className="px-4 py-3">Flips</th>
                  <th className="px-4 py-3">Diff. ctrl</th>
                  <th className="px-4 py-3">Degats</th>
                  <th className="px-4 py-3">Ctrl J/E</th>
                </tr>
              </thead>
              <tbody>
                {latestReport.deckComparison.map((entry) => (
                  <tr key={entry.deckPresetId} className="border-b border-white/6 last:border-b-0">
                    <td className="px-4 py-3 font-medium text-white">{deckLabel(entry.deckPresetId)}</td>
                    <td className="px-4 py-3">{formatAverage(entry.averages.turns)}</td>
                    <td className="px-4 py-3">{formatAverage(entry.averages.rounds)}</td>
                    <td className="px-4 py-3">{formatAverage(entry.averages.flipsPerMatch)}</td>
                    <td className="px-4 py-3">{formatAverage(entry.averages.roundEndControlDifference)}</td>
                    <td className="px-4 py-3">{formatAverage(entry.averages.roundEndDamage)}</td>
                    <td className="px-4 py-3">
                      {formatAverage(entry.averages.controlledCardsPerRoundBySide.player)} / {formatAverage(entry.averages.controlledCardsPerRoundBySide.enemy)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-[1.3rem] border border-white/10 bg-black/14 p-4">
            <p className="text-sm font-medium text-white">Tours moyens par deck</p>
            <div className="mt-4 space-y-3">
              {latestReport.deckComparison.map((entry) => (
                <BarRow
                  key={entry.deckPresetId}
                  label={deckLabel(entry.deckPresetId)}
                  value={entry.averages.turns}
                  max={deckMaxTurns}
                  tone="amber"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.58rem] uppercase tracking-[0.24em] text-white/50">Rapports recents</p>
            <h2 className="mt-1 font-serif text-2xl text-white">Historique rapide</h2>
          </div>
          <p className="text-sm text-white/58">JSON recents de `/reports`, regroupes par matchup et deck principal.</p>
        </div>

        <div className="mt-5 overflow-x-auto rounded-[1.3rem] border border-white/10 bg-black/14">
          <table className="min-w-full text-left text-sm text-white/78">
            <thead className="border-b border-white/10 text-[0.58rem] uppercase tracking-[0.2em] text-white/45">
              <tr>
                <th className="px-4 py-3">Rapport</th>
                <th className="px-4 py-3">Matchup</th>
                <th className="px-4 py-3">Deck</th>
                <th className="px-4 py-3">Games</th>
                <th className="px-4 py-3">Leader</th>
                <th className="px-4 py-3">Draw</th>
                <th className="px-4 py-3">Flips</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => {
                const leader = [...report.primarySummary.botWinRates].sort((left, right) => right.winRate - left.winRate)[0];

                return (
                  <tr key={report.reportId} className="border-b border-white/6 last:border-b-0">
                    <td className="px-4 py-3 font-medium text-white">{report.reportId}</td>
                    <td className="px-4 py-3">
                      {report.config.matchup[0]} vs {report.config.matchup[1]}
                    </td>
                    <td className="px-4 py-3">{deckLabel(report.config.requestedDeckPreset)}</td>
                    <td className="px-4 py-3">{report.primarySummary.totalGames}</td>
                    <td className="px-4 py-3">
                      {leader.botId} ({formatPercent(leader.winRate)})
                    </td>
                    <td className="px-4 py-3">{formatPercent(report.primarySummary.drawRate)}</td>
                    <td className="px-4 py-3">{formatAverage(report.primarySummary.averages.flipsPerMatch)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-[1.7rem] border border-cyan-200/12 bg-cyan-200/8 p-5">
        <p className="text-[0.58rem] uppercase tracking-[0.24em] text-cyan-100/72">Interpretation</p>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-cyan-50/90">
          {latestReport.interpretation.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
