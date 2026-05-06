# AGENTS.md

## Project goal
Build a browser-playable card tactics roguelite prototype inspired by Triple Triad and Slay the Spire, with an original destruction/discard loop.

## General rules
- Use TypeScript everywhere.
- Keep the rules engine fully deterministic and independent from React UI.
- The core game logic must live in `src/core/`.
- The UI must only consume the core engine, never re-implement rules.
- Prefer small, testable pure functions.
- Add tests for every important game rule.
- Do not introduce a backend for V1.
- Do not introduce paid services.
- Do not implement ads.
- Do not implement auth yet, but keep storage abstractions ready for future cloud accounts.
- Keep all numeric values configurable from a central config file.

## Tech stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Vitest for unit tests
- Node scripts for simulations

## V1 gameplay scope
- 3x3 board
- two players: human and AI
- same starter deck on both sides
- draw N cards each turn (initial default: 4)
- play 1 card per turn
- played cards go to discard
- destroyed cards go to owner's discard
- unplayed cards return to draw pile
- reshuffle discard into draw pile when needed
- only the newly placed card resolves adjacent combat
- allied cards never fight
- victory when board is full, winner controls the majority of cards on board

## Simulation scope
- Implement at least 3 bots:
  - random
  - greedy
  - heuristic
- Add a CLI simulation runner that can play thousands of matches automatically.
- Output reports as JSON and markdown in `/reports`.
- Track:
  - win rate by bot
  - win rate by starting player
  - average turns
  - average destructions
  - average reshuffles
  - dead-turn frequency
  - deck-size balance comparison for 10 / 12 / 14-card starter decks

## Code quality
- No giant files.
- No duplicated rule logic.
- Document exported functions.
- Use enums or discriminated unions where helpful.
- Fail loudly on invalid game states.
- Add seedable randomness for reproducible simulations.

## UX for V1
- Clean readable prototype UI
- Placeholder art allowed
- Strong visual clarity over polish
- Add a `/lab` page for private local testing and simulation report viewing, but do not assume it is secure for public deployment

## Deliverables
- working prototype
- working tests
- working simulation runner
- short README explaining local setup, commands, and project structure

- The public game name is "Ollie Gives, Ollie Takes".
- Prefer prototype correctness and simulation usefulness over feature count.
- Do not implement online multiplayer, ads, or account systems in V1.