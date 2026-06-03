Original prompt: ok fais les corrections. ameliore encore le jeu pour que ce soit encore plus slay the spire et encore plus fun et qu on ait envie de jouer

## 2026-05-24

- Starting from latest AI snapshot on `origin/main` (`ai-lab-20260524-004418`).
- Main signals to address: second-player skew in the 12-card opening, beginner adventure failure, weak/ignored cards, and stronger Slay-the-Spire-style reward/deck-building hooks.
- Planned balance pass: reduce opening response bonus, soften early/boss enemy scaling, make reward offers more build-defining earlier, buff Widow Knight and Wandering Glyph, and make bots value mana spending/stack synergies more accurately.
- Implemented first pass and fixed a benchmark slowdown by caching bot pre-preview scores. Full unit suite passes: 18 files, 107 tests.
- Final applied AI lab snapshot `ai-lab-20260524-071045`: 0 problem signals, healthy current start, beginner adventure progression improved, expert/champion boss reach at 66.7% on the local 6/3 validation sample.
- Browser verification on `http://localhost:3000`: `/lab/ai`, `/game`, and `/playtest` load. Manual Playwright flow confirmed: dismiss coin toss, pick a board cell, stack two cards within mana, confirm the move, then the AI responds with its own stack. No console errors were captured.
- Follow-up applied after larger 12/6 AI-lab validation: opening initiative shield, stack side cap 10, softer adventure routing/enemy scaling, stronger reward fit, clearer Path Ranger/Star Witch/Mage/Monk roles, and calibrated AI-lab ladder widths. Latest applied snapshot is `ai-lab-20260524-081417`.
- Remaining design signals to inspect next: first-player win rate is still only 33.3% on this sample, flips/turn remain low at 0.14, and Widow Knight / Tin Oracle / Pact Sprite are still under-selected.

## 2026-05-26

- Synced local branch to latest `origin/main` snapshot `ai-lab-20260526-165334`.
- Current report signals: flips per turn still low (~0.17), champion trails expert, beginner/regular runs stall before boss too often, Field Knight overperforms, Moth Ghost / Widow Knight / Hornling underperform or get ignored.
- Implemented source-family tracking for stacked effects so each card's own family thresholds resolve correctly inside mixed stacks.
- Added explicit hybrid stack requirements for selected effects and AI-lab combo tracking for mixed-family stacks.
- First targeted validation passed: `npm test -- src/core/engine.test.ts src/core/family-starter-decks.test.ts src/core/ai-lab/ai-lab.test.ts` and `npx tsc --noEmit --pretty false`.
- Final pass: hybrid reward scoring, safer adventure-route weight bounds, stronger expert model separation, more contact-seeking bots, builder/shaper signature enemy cards, and clearer small-sample AI-lab severity.
- Applied snapshot `ai-lab-20260526-184735`: 0 problem signals, all starter cards/families healthy, expert now clearly above regular on the local ladder; remaining watch signals are low-sample rhythm/route checks.
- Full validation passed: `npm test` (18 files / 112 tests), `npx tsc --noEmit --pretty false`, `npm run build`, and Playwright smoke on `/lab/ai` + `/game` with a manual stacked move and AI response.

## 2026-05-29

- UI pass continued on `/game`: generated a cleaner stone arena background without a baked-in 3x3 board, then moved the DOM board to be the single readable tactical surface.
- Improved combat HUD hierarchy: top status strip no longer covers the rival hand, rival card count is visible, and rival choices are revealed while the AI is taking its turn.
- Added stack/family readability on board cards: family crests and counts stay attached to placed stacks, active family stacks highlight in the right panel, and same-family fusion shows an animated bonus toast.
- Enlarged the fusion queue below the board, added family preview icons and active threshold labels, and made hand-card effect tooltips larger and unclipped.
- Validation passed: `npx tsc --noEmit --pretty false`, `npm test` (18 files / 112 tests), `npm run build`, and Playwright desktop/mobile checks on `/game` with no console errors.
- Restarted the local Next dev server on port 3000 after the user did not see changes. Added stricter responsive board sizing and compact portrait/landscape phone rules, then verified seven viewport captures: 1920x1080, 1366x768, 1024x768, 768x1024, 390x844, 844x390, and 360x740.
- Final UI correction pass for the obstructive HUD: moved round/status fully into the side HUD, moved selected-fusion details into the command panel instead of a floating board bubble, kept rival cards visible outside the AI turn, tightened mobile champion/status text, and rebalanced board/hand spacing so no measured HUD or fusion element overlaps the board across the same seven viewport matrix.
- Final validation passed after restarting the dev server with `allowedDevOrigins`: `npx tsc --noEmit --pretty false`, `npm test` (18 files / 112 tests), `npm run build`, HTTP 200 on `/game`, and Playwright desktop/phone smoke with no console errors.

## 2026-06-03

- Audited 30 committed AI-lab snapshots and the recent GitHub Actions failures. Stable signals: Human cards overperform, Automaton cards underperform, and the previously promoted Champion is not reliably stronger than the Expert.
- Reworked Champion training so learned weights only choose between tactically safe deep-heuristic moves. Training, promotion, and live play now use the same guarded behavior.
- Added shield, future draw, controlled mana, and stack synergy to the learned evaluation, plus bounded weight normalization to prevent pathological profiles.
- Rebuilt promotion measurements around balanced four-match blocks and the exact public mono-family 12-card starter decks. Local and workflow controls now only use valid multiples of four.
- Revoked the old trained Champion approval because it was promoted under the obsolete benchmark. The live Champion temporarily falls back to the stable Expert until a new profile passes the stricter promotion gates.
- Added same-ruleset rolling trends to AI-lab reports, increased minimum sample sizes for strong conclusions, and changed GitHub training to run after relevant core gameplay changes as well as on its regular schedule.
- Added shared move telemetry for adventure combats and a separate deckbuilding diagnostic so reward cards, fusions, and mixed-family combos are measured instead of only the mono-family starter matches.
- Applied targeted balance changes: Field Knight requires a real Human stack for shield scaling; Clock Sentinel gains a clear corner-defense role; Gear Monk becomes a cheap Automaton draw/fusion enabler.
- Repaired benchmark noise: each four-match block now replays the same decks and seed across both seats and both starting players, candidates in one training iteration face the same exam, and starter-family matchups rotate with the report seed.
- Replaced unapproved adventure-route weights with stable skill-model profiles, added pairwise starter matchup reporting, and made full-run card/combo diagnostics compare against their own sample win-rate baseline.
- Updated the workflow schedule to avoid deep-run congestion, upgraded GitHub Actions to Node 24-based releases, and updated Next.js/PostCSS/Vitest to remove all high-severity dependency advisories.
- Confirmed the old balance problem across multiple reports, then made Human starter roles distinct instead of universally strong: the final report moves Human from the earlier 86.5% signal to 50.2% while Automaton reaches 44.6%.
- Reworked Arcane starter roles so only the Glyph anchors the center, the network can extend through ally/enemy contact, and Star Witch is a visible three-card pile payoff. Arcane reaches a healthy 43.5% in the final report while its full-run combo engine remains measurable.
- Final applied snapshot: `ai-lab-20260603-110942`, ruleset `v7-2026-06-03-arcane-core-payoff`, 24 balanced matches per pairing and 4 full adventure runs per model. Remaining new signal: Revenant/Widow Knight overperformance must be confirmed by same-ruleset trends before another nerf.
- Added deterministic result reuse for identical player policies and per-model adventure progress logs, reducing future report cost without changing results.
- Repaired the Vercel serverless trace issue: production build has no Turbopack trace warnings, `/lab/ai` traces about 1.84 MiB, training routes trace about 1.58 MiB, and local report/public directories are excluded.
- Final local validation passed: `npx tsc --noEmit --pretty false`, `npm run test` (18 files / 128 tests), `npm run build`, and `git diff --check`.
- Final Playwright verification passed on `/lab/ai` and `/game`: the v7 report sections render, a three-card mixed-family stack consumes the expected four mana, the move resolves, and the AI answers without console errors.
