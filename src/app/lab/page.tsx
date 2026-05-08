import { notFound } from "next/navigation";

import { isLabSurfaceEnabled } from "@/lib/deployment-mode";

export const dynamic = "force-dynamic";

export default async function LabPage() {
  if (!isLabSurfaceEnabled()) {
    notFound();
  }

  const [
    { BattleClient },
    { LabReportDashboard },
    { TrainingStatusWidget },
    { loadResolvedLiveChampionProfile },
    { loadSimulationReports },
  ] = await Promise.all([
    import("@/components/battle-client"),
    import("@/components/lab-report-dashboard"),
    import("@/components/training-status-widget"),
    import("@/lib/live-champion"),
    import("@/lib/simulation-reports"),
  ]);

  const [reports, liveChampionProfile] = await Promise.all([
    loadSimulationReports(),
    loadResolvedLiveChampionProfile(),
  ]);

  return (
    <div className="ogot-scroll mx-auto flex h-screen max-w-[92rem] flex-col gap-6 overflow-y-auto px-4 py-5 lg:px-6 lg:py-6">
      <TrainingStatusWidget />
      <LabReportDashboard latestReport={reports.latestReport} recentReports={reports.recentReports} />

      <section className="rounded-[2.2rem] border border-fuchsia-200/12 bg-[linear-gradient(180deg,rgba(21,12,31,0.94),rgba(9,10,21,0.92))] p-6 text-white shadow-[0_28px_100px_rgba(10,7,20,0.42)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-fuchsia-100/55">Studio annexe</p>
            <h2 className="mt-3 font-serif text-4xl text-white">Laboratoire personnages</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/68">
              Le studio de generation et de review des personnages est maintenant isole du reste du labo pour rester simple a utiliser.
              Les candidats y restent locaux et ne sont pas branches sur les cartes du jeu.
            </p>
          </div>

          <a
            href="/lab/characters"
            className="inline-flex items-center justify-center rounded-full border border-fuchsia-200/24 bg-fuchsia-300/12 px-5 py-3 text-sm font-medium text-fuchsia-50 transition hover:border-fuchsia-100/40 hover:bg-fuchsia-300/18"
          >
            Ouvrir le studio personnages
          </a>
        </div>
      </section>

      <section className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,16,30,0.92),rgba(6,12,23,0.88))] p-5 text-white shadow-[0_28px_100px_rgba(5,12,24,0.42)] backdrop-blur-xl">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.34em] text-cyan-100/55">Sandbox local</p>
            <h2 className="mt-2 font-serif text-3xl text-white">Inspection manuelle du combat</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/68">
            Le combat ci-dessous utilise exactement le meme moteur deterministe que le simulateur. Sers-t-en pour verifier les cas limites a cote des rapports generes.
          </p>
        </div>

        <BattleClient labMode embedded initialLiveChampionProfile={liveChampionProfile} />
      </section>
    </div>
  );
}
