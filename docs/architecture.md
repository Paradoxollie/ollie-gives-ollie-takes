# Architecture

`Ollie Gives, Ollie Takes` is split into two layers:

- `src/core/`: deterministic game state, config, deck data, flip-combat engine, adventure progression, bots, AI-lab runners, RNG helpers, and serialization helpers.
- `src/components/` and `src/app/`: React UI, route entrypoints, and browser-only orchestration that consume `src/core` APIs.

## Core responsibilities

- Create and restart matches from config, deck preset, and seed.
- Create and resolve the adventure opening draft before the map, using only core-owned card data.
- Track champion health, round number, turn number, board ownership, piles, and reshuffles explicitly in the match state.
- Draw cards, reshuffle discards, validate placements, resolve directional flip combat, apply round-end control-difference damage on a full board, clear the board into the next round, and stop immediately on champion KO or stalemate.
- Expose reusable bot interfaces and move previews without duplicating battle rules.
- Serialize readable state for debug tooling and browser automation.
- Run AI-lab and training batches without touching React.

## UI responsibilities

- Render the opening draft, family bonus summaries, 3x3 board, player hand, champion health, round metadata, ownership state, family labels, and last-action flip feedback.
- Let the human select a card, hover a cell for preview, and commit a placement.
- Trigger AI turns by calling the engine, never by re-implementing rules.
- Expose `window.render_game_to_text()` and `window.advanceTime(ms)` for automated inspection.
- Keep private lab pages as thin consumers of generated AI reports and core debug surfaces.

## AI lab responsibilities

- Reuse the same engine used by the playable UI.
- Reproduce the current player flow: family choice, fixed starter deck, map pathing, card rewards, charms, upgrades, removals, fusions, and boss progression.
- Compare player models from beginner to champion with deterministic seeds.
- Export machine-readable JSON, human-readable Markdown, and a deployable snapshot for `/lab/ai`.
