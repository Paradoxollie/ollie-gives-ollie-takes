import { STARTER_DECK_PRESETS } from "@/core/config/decks";
import type { SimulationReport, SimulationSummary } from "@/core/sim/types";

function formatPercent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

function formatAverage(value: number): string {
  return value.toFixed(2);
}

function moveMatrixToMarkdown(summary: SimulationSummary): string {
  const header = ["| Row/Col |", ...Array.from({ length: summary.boardSize }, (_, index) => ` ${index} |`)].join("");
  const divider = ["| --- |", ...Array.from({ length: summary.boardSize }, () => " ---: |")].join("");
  const rows = [header, divider];

  summary.moveDistribution.overall.forEach((row, index) => {
    rows.push(`| ${index} | ${row.join(" | ")} |`);
  });

  return rows.join("\n");
}

/**
 * Produces a concise interpretation block from a simulation report.
 */
export function interpretReport(report: Pick<SimulationReport, "primarySummary" | "deckComparison">): string[] {
  const notes: string[] = [];
  const primary = report.primarySummary;
  const topBot = [...primary.botWinRates].sort((left, right) => right.winRate - left.winRate)[0];

  if (topBot.winRate >= 0.6) {
    notes.push(`${topBot.botId} prend clairement l'avantage sur le matchup principal avec ${formatPercent(topBot.winRate)} de victoires.`);
  } else {
    notes.push("Le matchup principal reste relativement serre: aucun bot ne depasse 60% de victoires.");
  }

  if (primary.drawRate >= 0.1) {
    notes.push(`Les egalites montent a ${formatPercent(primary.drawRate)}. Le tempo des rounds et la gestion des tours morts meritent un examen de pres.`);
  } else {
    notes.push("Les egalites restent rares sur cette serie d'echantillons.");
  }

  if (primary.startingPlayer.overallStartingPlayerWinRate >= 0.55) {
    notes.push(
      `Le premier joueur gagne ${formatPercent(primary.startingPlayer.overallStartingPlayerWinRate)} des matchs: le tempo d'ouverture est peut-etre encore trop fort.`,
    );
  } else {
    notes.push("L'avantage du premier joueur existe, mais il ne domine pas encore la serie observee.");
  }

  if (primary.averages.flipsPerTurn >= 0.5) {
    notes.push("Les flips arrivent frequemment: le systeme produit deja des renversements de controle visibles tour apres tour.");
  } else {
    notes.push("Les flips restent relativement rares: il faudra peut-etre reequilibrer les valeurs de cartes ou les heuristiques.");
  }

  const controlSpread =
    Math.max(...report.deckComparison.map((entry) => entry.averages.roundEndControlDifference)) -
    Math.min(...report.deckComparison.map((entry) => entry.averages.roundEndControlDifference));
  if (controlSpread >= 0.35) {
    notes.push("La taille de deck change visiblement le controle de fin de round: les presets ne se jouent plus de la meme maniere.");
  } else {
    notes.push("Le controle moyen reste assez stable entre les presets actuels.");
  }

  return notes;
}

/**
 * Formats a simulation report as readable Markdown.
 */
export function createMarkdownReport(report: SimulationReport): string {
  const botLines = report.primarySummary.botWinRates
    .map((entry) => `- ${entry.botId}: ${entry.wins}/${entry.games} victoires (${formatPercent(entry.winRate)})`)
    .join("\n");
  const deckComparisonRows = [
    "| Deck | Tours moy. | Rounds moy. | Flips / match | Flips / tour | Diff. controle | Degats de round | Cartes controlees J/E | Melanges moy. |",
    "| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | ---: |",
  ];

  report.deckComparison.forEach((entry) => {
    deckComparisonRows.push(
      `| ${STARTER_DECK_PRESETS[entry.deckPresetId].label} | ${formatAverage(entry.averages.turns)} | ${formatAverage(entry.averages.rounds)} | ${formatAverage(entry.averages.flipsPerMatch)} | ${formatAverage(entry.averages.flipsPerTurn)} | ${formatAverage(entry.averages.roundEndControlDifference)} | ${formatAverage(entry.averages.roundEndDamage)} | ${formatAverage(entry.averages.controlledCardsPerRoundBySide.player)} / ${formatAverage(entry.averages.controlledCardsPerRoundBySide.enemy)} | ${formatAverage(entry.averages.reshuffles)} |`,
    );
  });

  const interpretationLines = report.interpretation.map((line) => `- ${line}`).join("\n");

  return `# Rapport de simulation

- ID du rapport: \`${report.reportId}\`
- Genere le: ${report.generatedAt}
- Matchup: \`${report.config.matchup[0]}\` vs \`${report.config.matchup[1]}\`
- Matchs par preset: ${report.config.matchesPerSeries}
- Seed: ${report.config.seed}
- Deck principal: ${STARTER_DECK_PRESETS[report.config.requestedDeckPreset].label}

## Resume principal

### Victoires par bot
${botLines}

### Premier joueur

- Win rate en ouvrant cote joueur: ${formatPercent(report.primarySummary.startingPlayer.player.winRate)}
- Win rate en ouvrant cote ennemi: ${formatPercent(report.primarySummary.startingPlayer.enemy.winRate)}
- Win rate global du premier joueur: ${formatPercent(report.primarySummary.startingPlayer.overallStartingPlayerWinRate)}
- Taux de draw: ${formatPercent(report.primarySummary.drawRate)}

### Moyennes de match

- Taille du plateau: ${report.primarySummary.boardSize}x${report.primarySummary.boardSize}
- Tours moyens: ${formatAverage(report.primarySummary.averages.turns)}
- Rounds moyens: ${formatAverage(report.primarySummary.averages.rounds)}
- Flips moyens par match: ${formatAverage(report.primarySummary.averages.flipsPerMatch)}
- Flips moyens par tour: ${formatAverage(report.primarySummary.averages.flipsPerTurn)}
- Ecart moyen de controle en fin de round: ${formatAverage(report.primarySummary.averages.roundEndControlDifference)}
- Degats moyens de fin de round: ${formatAverage(report.primarySummary.averages.roundEndDamage)} (1 degat par carte controlee)
- Cartes controlees par round, joueur: ${formatAverage(report.primarySummary.averages.controlledCardsPerRoundBySide.player)}
- Cartes controlees par round, ennemi: ${formatAverage(report.primarySummary.averages.controlledCardsPerRoundBySide.enemy)}
- Melanges moyens: ${formatAverage(report.primarySummary.averages.reshuffles)}
- Occupation moyenne en fin de round: ${formatAverage(report.primarySummary.averages.roundEndOccupancy)}
- Ecart final moyen de PV: ${formatAverage(report.primarySummary.averages.finalHpDifference)}
- Dead turns moyens: ${formatAverage(report.primarySummary.averages.deadTurns)}
- Frequence des dead turns: ${formatPercent(report.primarySummary.deadTurnFrequency)}

### Sources de fin

- Controle de fin de round: ${report.primarySummary.endingSources["round-end-control"]}
- Degats directs: ${report.primarySummary.endingSources["direct-damage"]}
- Blocages: ${report.primarySummary.endingSources.stalemate}

### Distribution des placements

${moveMatrixToMarkdown(report.primarySummary)}

## Comparaison des decks

${deckComparisonRows.join("\n")}

## Interpretation

${interpretationLines}
`;
}
