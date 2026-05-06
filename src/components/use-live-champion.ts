"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { createChampionBotFromProfile, getStaticLiveChampionProfile } from "@/lib/live-champion-client";
import type { RuntimeLiveChampionProfile } from "@/lib/live-champion-types";

const REFRESH_INTERVAL_MS = 15_000;

interface UsePinnedLiveChampionOptions {
  refresh?: boolean;
}

async function fetchLiveChampionProfile(): Promise<RuntimeLiveChampionProfile> {
  const response = await fetch(`/api/live-champion?ts=${Date.now()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to load live champion (${response.status})`);
  }

  return response.json() as Promise<RuntimeLiveChampionProfile>;
}

export function usePinnedLiveChampion(
  snapshotKey: string,
  initialProfile?: RuntimeLiveChampionProfile | null,
  options: UsePinnedLiveChampionOptions = {},
) {
  const refresh = options.refresh ?? true;
  const fallbackProfile = useMemo(
    () => initialProfile ?? getStaticLiveChampionProfile(),
    [initialProfile],
  );
  const [latestProfile, setLatestProfile] = useState<RuntimeLiveChampionProfile>(fallbackProfile);
  const [pinnedProfile, setPinnedProfile] = useState<RuntimeLiveChampionProfile>(fallbackProfile);
  const appliedSnapshotKeyRef = useRef(snapshotKey);

  useEffect(() => {
    if (!refresh) {
      setLatestProfile(fallbackProfile);
      return;
    }

    let cancelled = false;

    const load = async () => {
      try {
        const profile = await fetchLiveChampionProfile();
        if (!cancelled) {
          setLatestProfile(profile);
        }
      } catch {
        if (!cancelled) {
          setLatestProfile((current) => current ?? fallbackProfile);
        }
      }
    };

    void load();
    const interval = window.setInterval(() => {
      void load();
    }, REFRESH_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, [fallbackProfile, refresh]);

  useEffect(() => {
    if (appliedSnapshotKeyRef.current !== snapshotKey) {
      appliedSnapshotKeyRef.current = snapshotKey;
      setPinnedProfile(latestProfile);
    }
  }, [latestProfile, snapshotKey]);

  const bot = useMemo(() => createChampionBotFromProfile(pinnedProfile), [pinnedProfile]);

  return {
    bot,
    profile: pinnedProfile,
    latestProfile,
  };
}
