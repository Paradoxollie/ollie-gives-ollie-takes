# Combat System V2

## Direction

`Ollie Gives, Ollie Takes` keeps the 3x3 tactical board and removes the destruction loop. The prototype now leans on a shared-card-pool structure, unique cards, multi-round champion health, and TFT-like families that are counted from board control.

## Core Rules

- Board remains 3x3.
- Cards are unique within a preset pool.
- Default combat presets deal from a shared pool: the player and AI receive non-overlapping decks.
- Adventure runs start with a seeded draft: 14 offered cards, 7 player picks, fixed for the run.
- The current draft always keeps the seven existing animal cards visible, then fills the rest of the offer from the wider Set 0 pool.
- Enemy decks are built from the remaining shared draft pool, so drafted player cards are not duplicated by enemy loadouts.
- A turn draws a small hand, plays one card, and returns unplayed cards to the draw pile.
- Only the newly placed card resolves adjacent orthogonal combat.
- Combat still flips control; it does not destroy cards.
- Full board resolves round damage from controlled cards, then clears the board into discard.
- Champion health keeps battles multi-round.
- A combat victory can offer enemy cards as post-combat steal rewards.
- Chests are non-combat card picks. Camps upgrade/remove, and shops fuse two owned cards.
- Combat does not generate a separate generic reward offer.

## Presets

- `starter10`: 20-card shared pool, 10 cards per player.
- `starter12`: 24-card shared pool, 12 cards per player, default V2 target.
- `starter14`: 28-card shared pool, 14 cards per player.

These presets exist for simulation and balance comparison. The run can still pass explicit player and enemy decks when it needs campaign-specific loadouts.

## Adventure Draft

- `ADVENTURE_CONFIG.draftOfferSize` is `14`.
- `ADVENTURE_CONFIG.draftPickCount` is `7`.
- The draft is a real adventure phase before opening charm selection.
- Resolving the draft creates the player's run deck and clears the draft state.
- Bots and automated campaign benchmarks resolve the same draft phase before choosing routes.
- Serialization exposes the current draft offer, selected cards, families, rarities, and side values for browser QA.

## Families

The first Set 0 families are:

- `familiar`: the current animal roster. Support, adjacency, pack control.
- `demon`: corruption, stolen synergy, pressure on isolated cards.
- `human`: lines, columns, disciplined formations.
- `automaton`: corners, defense, stable control.
- `revenant`: comeback pressure when behind on board.
- `arcane`: equality manipulation and center control.

Future families reserved for broader appeal:

- `dragon`: premium build-around pieces.
- `renegade`: theft, risk, and reward manipulation.

## Trait Counting

Traits count from cards currently controlled on the board. If a card is flipped, its trait immediately helps the new controller.

Demon corruption is an exception: a card flipped by an active Demon pair keeps its original family and also counts as Demon while controlled by the corrupting player.

## Implemented Trait Bonuses

### Familiar

- 2: a Familiar gets +1 attack when adjacent to an allied Familiar.
- 3: a Familiar gets +1 defense when adjacent to an allied Familiar.
- 4: +1 end-of-round control.

### Demon

- 2: cards flipped by a Demon become corrupted and also count as Demon for that controller.
- 3: a Demon gets +1 attack against corrupted or isolated cards.
- 5: +1 end-of-round control if at least two controlled cards are corrupted.

### Human

- 2: a Human gets +1 attack when another allied Human is in the same row or column.
- 3: a Human gets +1 defense when another allied Human is in the same row or column.
- 5: +1 end-of-round control for a controlled full row or column with at least two Humans.

### Automaton

- 2: an Automaton in a corner gets +1 defense.
- 3: a card defended next to an allied Automaton gets +1 defense.
- 4: +1 end-of-round control if an Automaton controls a corner.

### Revenant

- 2: a Revenant gets +1 attack when its owner is not ahead on board control.
- 3: a Revenant gets +1 defense when its owner is not ahead on board control.
- 4: +1 end-of-round control when behind on board control.

### Arcane

- 2: an Arcane attacker gets +1 when the compared values are equal.
- 4: +1 end-of-round control if Arcane controls the center.

## Balance Guardrails

- Card side values stay between 1 and 6.
- Most cards target a total side budget of 11 or 12.
- Trait battle bonuses are capped to +2 attack and +2 defense per comparison.
- End-of-round trait control bonus is capped to +2 per player.
- Presets 10 / 12 / 14 must stay part of simulation reports.

## Post-Victory Steal

When the player wins an adventure combat, the reward system first tries to offer cards from the defeated enemy loadout. Cards already owned by the player are filtered out. If no enemy card can be stolen, the run falls back to the normal generated reward offer.

## Next Design Work

- Add larger art coverage for non-animal families.
- Add UI surfaces for in-combat active family counts and post-victory card theft.
- Run larger bot batches before adding rarity back into the design.
