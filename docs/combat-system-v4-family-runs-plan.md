# Combat System V4 - Family Runs, Starter Decks, Rarity, Enemies, UI

Date: 2026-05-08
Status: design plan for next implementation pass

## Goal

V4 replaces the current free draft start with a clearer Slay-the-Spire-style run identity:

- the player chooses a family at the start of the run;
- that family gives a fixed starter deck;
- starter decks use duplicates;
- each family has exactly 4 unique starter cards, 10 cards total with copies;
- every base card has exactly 1 effect;
- upgrades can improve the effect or add one extra layer;
- enemies also have specialized family decks;
- enemies become rarer, stronger, and more hybrid as the run approaches the boss;
- after combat, the player can still steal one card from the defeated enemy deck;
- cards become true TCG-style objects visually, with final card art generated manually later by the user.

This document is intentionally implementation-ready but does not require image generation. The user will generate final card images one by one.

## Non-Goals For The Next Pass

- Do not generate final card illustrations.
- Do not redesign every visual asset in one step.
- Do not add online, backend, auth, ads, or paid systems.
- Do not remove the 3x3 board.
- Do not abandon deterministic core rules.
- Do not make rare cards simply "same card but bigger numbers"; rarity must add build direction.

## V4 Design Pillars

1. **A run starts with a clear identity.**
   The family choice must feel like choosing a character in Slay the Spire.

2. **A starter deck is simple but already has a playstyle.**
   Four unique cards, repeated to 10 total cards, gives consistency without overwhelming the player.

3. **Every card has one memorable job.**
   Base cards have one effect only. The effect should be short enough to remember.

4. **Stats and effects are balanced together.**
   Strong effects require weaker stats, harder setup, or narrow positioning. Strong stats get simpler effects.

5. **Every family can beat every other family.**
   Matchups should create different problems, not hard counters.

6. **Deckbuilding is about improving a machine.**
   Duplicates, upgrades, steals, and rewards should make the deck more consistent or open a second family plan.

7. **The opponent plays the same language.**
   Enemy decks use family identity, duplicates, rare cards, and combos too.

8. **Families create real build objectives.**
   A family is not just a label. It tells the player which board shapes, side values,
   trigger conditions, and reward cards they should actively look for during the run.

9. **Hybrid families create TFT-like pivots.**
   Mixing families should feel like adding a second trait in TFT: the player can stay
   focused on their main family, splash a support package, or pivot into a two-family engine.

## Core Run Flow

### 1. Start Run

The player chooses 1 family:

- Familiar
- Demon
- Human
- Automaton
- Revenant
- Arcane

The game creates the matching starter deck:

- 4 unique card models.
- 10 cards total.
- Recommended copy split: `3 / 3 / 2 / 2`.
- No rarity above common in starter decks.
- Every starter card has exactly 1 base effect.

### 2. Combat Node

Enemy uses a specialized deck:

- early run: 1 family;
- mid run: 1 main family plus splash cards;
- late run: 2-family hybrid deck;
- boss: curated 2-family or 3-family deck with rares and upgrades.

### 3. Win Reward

After a win:

1. Offer steal choices from enemy deck first.
2. Duplicates are allowed.
3. If the enemy has no eligible cards, offer generated family reward cards.
4. Rewards can include same-card duplicates, upgraded cards, off-family splash, or rare cards.

### 4. Sites

Camp, forge, chest, and shop should reinforce deckbuilding:

- camp: upgrade or heal;
- forge: upgrade, fuse, or transform;
- chest: rare/off-family card;
- shop: choose between consistency, power, or removal.

## Starter Deck Rules

Each family deck:

- has 10 cards;
- has 4 unique cards;
- copy split uses `3 / 3 / 2 / 2`;
- total side-budget average should be almost equal across families;
- has one high-tempo card, one defensive/control card, one setup card, one payoff card;
- has at least one card that is good on an empty board;
- has at least one card that becomes better with family setup;
- has a weakness that another family can pressure.

## Global Stat Budget

Current V3 cards use values roughly around 11-12 total side strength. V4 should formalize this.

### Common Starter Card Budget

Target side total:

- low effect impact: 12 total side points;
- medium effect impact: 11 total side points;
- high setup payoff: 10 or 11 total side points;
- very reliable effect: 10 or 11 total side points.

Allowed side values:

- starter common: 1 to 5;
- uncommon: 1 to 6;
- rare: 1 to 7;
- upgraded/fused cap still governed by config.

### Shape Roles

Each starter deck should include these shapes:

1. **Anchor**
   Balanced or corner-friendly. Good first play.

2. **Attacker**
   One strong side, one exposed weak side. Creates flip pressure.

3. **Connector**
   Wants adjacency, same row/column, center, or family setup.

4. **Payoff**
   Lower base reliability, stronger if setup succeeds.

### Balance Formula For First Pass

Use this provisional card score:

```text
side_total
+ effect_reliability_value
+ effect_power_value
- setup_difficulty_discount
- exposure_penalty
= balance_score
```

Target:

- starter cards: `13.0` to `14.5`;
- starter deck average: `13.75` plus or minus `0.25`;
- no starter deck should have more than one card above `14.5`;
- no starter deck should have more than one card below `13.0`.

This is not final balance. It is a guardrail for implementation and simulation.

## Effect Design Rules

### Base Cards

Base card rules:

- exactly 1 effect;
- effect text should be one short sentence;
- no base card should both deal damage and draw;
- no base card should both boost itself and buff another card;
- no base card should have two independent triggers;
- if an effect scales, it must require setup.

### Upgraded Cards

Upgrade options:

- +1 to one side;
- improve effect amount by 1;
- loosen condition;
- add a small second effect;
- increase combo cap;
- change `Combo 3` into `Combo 2`.

Do not use every upgrade type on every card. Each card should have a designed upgrade path.

### Rare Cards

Rare cards should do at least one of these:

- unlock a new archetype;
- make an existing family deck more consistent;
- reward a board formation;
- enable a two-family hybrid;
- act as a strong payoff for setup.

Rare cards should not just be common cards with more side points.

## Family Identities

## Familiar

Fantasy: pack support, adjacency, soft tempo.

Strengths:

- protects board pieces;
- buffs adjacent allies;
- stable, friendly first deck;
- creates compact formations.

Weaknesses:

- can be punished by Demon direct damage;
- can struggle if forced apart;
- lower burst.

Core verbs:

- adjacent ally;
- support;
- small shields;
- small buffs to neighbors;
- flip rewards.

Starter deck target:

| Slot | Copies | Role | Stat Shape | Effect Direction |
|---|---:|---|---|---|
| Familiar Anchor | 3 | stable first play | balanced 3/3/3/2 or 4/3/2/2 | gain shield if adjacent ally |
| Familiar Attacker | 3 | pressure | one 5 side, exposed 1/2 side | on flip: small shield or draw |
| Familiar Connector | 2 | adjacency setup | two medium adjacent sides | buff adjacent ally weakest side |
| Familiar Payoff | 2 | pack reward | modest stats | Combo 3: draw or shield scales |

## Demon

Fantasy: aggressive pressure, corruption, direct damage.

Strengths:

- can end fights without full board dominance;
- punishes isolated cards;
- high reward from multi-flips.

Weaknesses:

- weaker defense;
- bad into heavy shield if not prepared;
- risky exposed sides.

Core verbs:

- deal direct damage;
- corrupt flipped cards;
- punish isolation;
- snowball from flips.

Starter deck target:

| Slot | Copies | Role | Stat Shape | Effect Direction |
|---|---:|---|---|---|
| Demon Anchor | 3 | early pressure | 4/3/3/1 | if adjacent enemy: 1 direct damage |
| Demon Attacker | 3 | flip tool | 5 on one side, weak opposite | on flip: 1 direct damage |
| Demon Connector | 2 | setup | medium spread | boost self if adjacent enemy |
| Demon Payoff | 2 | burst | low total, strong direction | Flip 2+, Combo 3: direct damage scales |

## Human

Fantasy: disciplined formations, reliability, defense.

Strengths:

- consistent starter;
- good row/column planning;
- shields and stable hands.

Weaknesses:

- less explosive;
- can be outscaled by rare combo decks;
- needs formation discipline.

Core verbs:

- row/column;
- shield;
- draw consistency;
- modest buffs.

Starter deck target:

| Slot | Copies | Role | Stat Shape | Effect Direction |
|---|---:|---|---|---|
| Human Anchor | 3 | reliable opening | balanced 3/3/3/3 or 4/3/3/2 | gain shield |
| Human Attacker | 3 | line pressure | 5 side, two 2s | if same row/column ally: +1 self |
| Human Connector | 2 | hand smoothing | balanced-low | draw next turn |
| Human Payoff | 2 | formation payoff | modest stats | Combo 3: shield scales |

## Automaton

Fantasy: engineered structure, corners, fortification.

Strengths:

- excellent corners;
- durable board plans;
- stable end-round control.

Weaknesses:

- predictable placement priorities;
- slower center pressure;
- can be disrupted if corner access is denied.

Core verbs:

- corner;
- armor/shield;
- self-calibration;
- board structure.

Starter deck target:

| Slot | Copies | Role | Stat Shape | Effect Direction |
|---|---:|---|---|---|
| Automaton Anchor | 3 | corner hold | strong two adjacent sides | in corner: gain shield |
| Automaton Attacker | 3 | directional pressure | strong edge pair | in corner: boost weakest side |
| Automaton Connector | 2 | structure | balanced | if adjacent ally: shield |
| Automaton Payoff | 2 | fortress payoff | low-medium | Combo 3 or corner: draw/scaling shield |

## Revenant

Fantasy: comeback, sacrifice, pressure while behind.

Strengths:

- strong when losing board control;
- punishes overextension;
- creates comeback turns.

Weaknesses:

- less efficient when ahead;
- awkward if it cannot engineer a comeback state;
- can be weak to early aggression.

Core verbs:

- behind on board;
- comeback;
- recover;
- revenge damage.

Starter deck target:

| Slot | Copies | Role | Stat Shape | Effect Direction |
|---|---:|---|---|---|
| Revenant Anchor | 3 | safe recover | balanced low | if not ahead: shield |
| Revenant Attacker | 3 | retaliation | one strong side | if not ahead: direct damage or self boost |
| Revenant Connector | 2 | comeback hand | modest stats | if not ahead: draw |
| Revenant Payoff | 2 | reversal | weak until setup | Combo 3 and not ahead: scale damage/shield |

## Arcane

Fantasy: center control, precise combos, spell-like sequencing.

Strengths:

- strongest center incentives;
- best combo expression;
- draw and self-buff tools.

Weaknesses:

- relies on contested center;
- can be punished if center is denied;
- effects often have positioning conditions.

Core verbs:

- center;
- equality manipulation;
- draw;
- self boost;
- combo setup.

Starter deck target:

| Slot | Copies | Role | Stat Shape | Effect Direction |
|---|---:|---|---|---|
| Arcane Anchor | 3 | center setup | balanced | center: draw or shield |
| Arcane Attacker | 3 | precision flip | 5 side, weak side | center: boost strongest/weakest |
| Arcane Connector | 2 | combo builder | balanced-low | adjacent ally: draw |
| Arcane Payoff | 2 | spell payoff | lower stats | Combo 3: boost/draw scales |

## Starter Deck Copy Pattern

Recommended for each family:

```text
3x Anchor
3x Attacker
2x Connector
2x Payoff
= 10 cards
```

Why:

- 3x cards define the main loop and make the deck consistent.
- 2x cards add identity without making the opening hand too repetitive.
- The payoff appears often enough to matter but not always enough to guarantee combo.

Alternative if testing shows too much variance:

```text
4x Anchor
2x Attacker
2x Connector
2x Payoff
= 10 cards
```

Use this only if first-turn dead setup becomes too common.

## Rarity Model

### Common

- appears in starter decks and early enemies;
- one effect;
- side total usually 10-12;
- build role is clear.

### Uncommon

- stronger stats or stronger condition;
- can have combo scaling;
- side total usually 11-13;
- can bridge two families.

### Rare

- run-defining;
- side total usually 12-14, but effect must carry the identity;
- can have stronger combo cap;
- can support hybrid decks.

### Upgrade

Upgrades are not rarity. A common upgraded card is still common but stronger.

Recommended naming:

- `Card Name`
- `Card Name +`

## Enemy Deck Progression

Enemies should feel like opponents with decks, not random card piles.

### Early Run

Depth 1-3:

- mono-family deck;
- mostly common;
- 4 unique cards;
- 10 cards total;
- same duplicate logic as player;
- no rare cards.

### Mid Run

Depth 4-7:

- mono-family plus 1 splash family;
- 1-2 uncommon cards;
- 10-12 cards total;
- some duplicates;
- one clear payoff.

### Late Run

Depth 8-11:

- two-family hybrid;
- 2-4 uncommon cards;
- up to 1 rare;
- 12 cards total;
- upgraded cards allowed.

### Boss

Boss deck:

- curated 2-family or 3-family deck;
- 12-14 cards total;
- 2 rares maximum for first balance pass;
- at least one signature card;
- no random generation for first boss implementation.

## Enemy Archetype Examples

### Familiar Boss Variant

Plan: compact board, shields, adjacency buffs.

Player counterplay:

- separate their pieces;
- deny adjacency chains;
- use direct damage to bypass control.

### Demon Boss Variant

Plan: multi-flip into direct damage.

Player counterplay:

- use shield;
- avoid isolated exposed pieces;
- control their setup before payoff.

### Human Boss Variant

Plan: rows/columns, stable shield, reliable draw.

Player counterplay:

- break row/column structures;
- contest center and lines;
- outscale with stronger payoff.

### Automaton Boss Variant

Plan: corners and fortress scoring.

Player counterplay:

- deny corners early;
- force center conflict;
- punish predictable placements.

### Revenant Boss Variant

Plan: lets you lead, then punishes with comeback effects.

Player counterplay:

- avoid overcommitting;
- win by steady damage, not just board lead;
- deny their setup pieces.

### Arcane Boss Variant

Plan: center control, draw, precision flip chains.

Player counterplay:

- contest center;
- force bad side exposure;
- use corner/edge pressure.

## Post-Combat Steal Rules

After defeating an enemy:

1. Build a reward pool from enemy deck cards.
2. Keep duplicates eligible.
3. Exclude only cards that are explicitly temporary or boss-only if needed.
4. Offer 3 cards when possible.
5. If a duplicate is offered, show copy count and whether the player already owns it.
6. The player may skip.

Important: duplicates are good. Do not filter a card out just because the player already owns one.

## Reward Offer Rules

A normal reward offer should consider:

- current chosen family;
- owned family counts;
- current deck consistency;
- missing roles;
- enemies ahead;
- whether the player already has payoff without setup, or setup without payoff.

Reward offer should include:

- 1 on-family card most of the time;
- 1 flexible/support card;
- 1 wildcard, rare, upgrade, or splash option.

## Deep Family Gameplay Model

The next pass should turn each family into a real deckbuilding archetype.

The target is not only "cards with effects". The target is:

```text
starter identity
-> repeated patterns in combat
-> clear cards the player wants to add
-> meaningful upgrades
-> hybrid choices
-> late-run payoff
```

This is the Slay-the-Spire lesson: the player should recognize a possible engine,
then decide whether to commit, stabilize, or pivot.

This is the TFT lesson: family tags should create thresholds and hybrid bonuses that
make the board itself matter, not only the card being played this turn.

## Trait Thresholds And Combo Layers

V4 should use two different combo layers.

### 1. Board Traits

Board traits count controlled cards on the board by family.

Example:

```text
Familiar 2: first adjacent Familiar each turn gains 1 shield.
Familiar 3: adjacent Familiar effects gain +1 value.
Familiar 4: first Familiar payoff each combat triggers twice at reduced value.
```

Rules:

- only controlled cards count;
- destroyed cards stop counting immediately;
- traits update after each placement and after flips;
- thresholds should be visible in UI;
- enemy traits use the same rules.

Recommended thresholds for a 3x3 board:

| Threshold | Meaning | Use |
|---:|---|---|
| 2 | splash online | small reliable bonus |
| 3 | main engine online | most family payoff cards activate |
| 4 | high commitment | strong but hard to maintain |

Do not require 5+ controlled cards for normal combo text. On a 3x3 board this becomes too late and too win-more.

### 2. Card Combos

Card combos belong to individual cards.

Examples:

- `Combo: 2 Familiars` means the card needs 2 controlled Familiar cards after placement.
- `Combo: adjacent ally` means the card needs a positional setup.
- `Combo: behind on board` means the card needs a score-state setup.
- `Combo: center occupied by you` means the card needs a board-control setup.

Rules:

- common cards can have one simple condition;
- uncommon cards can have one condition plus scaling;
- rare cards can care about two related conditions;
- upgrades can lower a condition or raise the payoff;
- UI must show inactive combo requirements before play.

## Slay-The-Spire Deckbuilding Goals

Each family needs the same deckbuilding grammar:

| Deckbuilding Need | Meaning | Example Reward Question |
|---|---|---|
| Starter Plan | What the first 10 cards already do | "Can I win early fights with this shape?" |
| Setup Cards | Cards that prepare the board | "Do I need more adjacency/corners/center?" |
| Payoff Cards | Cards that convert setup into power | "Do I have enough reasons to build this way?" |
| Consistency Cards | Draw, duplicate, upgrade, or safer stats | "Do I see my engine often enough?" |
| Stabilizers | Defensive cards that prevent bad starts | "Can I survive if my engine is late?" |
| Finishers | Rare cards or upgraded payoffs | "How do I beat late hybrid enemies?" |

Reward choices should be judged against this grammar.

Bad reward:

```text
"This card is rare and has bigger numbers."
```

Good reward:

```text
"This card gives my Demon deck a second direct-damage payoff, but I now need more flip setup."
```

## Stats The Player Should Search For

Side stats must become part of deckbuilding. A player should sometimes take a card because of its side shape, not only because of its effect.

### Stat Shapes

| Shape | Side Pattern | Gameplay Meaning |
|---|---|---|
| Balanced | 3/3/3/3 or 4/3/3/2 | safe opening, flexible placement |
| Spear | 5/3/2/1 | attacks one direction, exposed opposite side |
| Wall | 5/4/1/1 or 4/4/2/1 | excellent edge/corner defense, poor flexibility |
| Hook | 5/1/4/1 | threatens two non-opposite directions |
| Core | 4/3/4/2 | good center/adjacency play |
| Fragile Engine | 2/2/3/3 with strong effect | must be protected |

### Family Stat Preferences

| Family | Wants | Avoids | Why |
|---|---|---|---|
| Familiar | medium adjacent sides, low exposure | isolated spear cards | supports compact packs |
| Demon | high attack side, acceptable weak side | too many balanced cards | needs flips and pressure |
| Human | balanced lines, reliable 3+ values | extreme weak sides | wants row/column discipline |
| Automaton | two strong adjacent sides | center-only shapes | wants corners and edge fortresses |
| Revenant | comeback attackers and resilient anchors | cards only good while ahead | plays from unstable board states |
| Arcane | center-ready core shapes, flexible sides | corner-only cards | wants precision and contested center |

## Family Gameplay Contracts

Each family needs a contract: what the player is trying to do, what cards they search for, what stats matter, and what defeats them.

### Familiar Gameplay Contract

Core fantasy: build a pack that becomes harder to break as pieces connect.

Primary objective:

- create adjacency chains;
- keep at least 2 allied cards touching;
- turn small shields and buffs into stable board control.

Cards to search for:

- more adjacent-buff cards;
- shields that protect engine pieces;
- payoffs that trigger at Familiar 3 or adjacency 2;
- one off-family finisher because Familiar can lack burst.

Stats to search for:

- medium values on sides likely to touch allies;
- balanced cards that can sit in the middle of a pack;
- not too many exposed 1-value sides.

Main combos:

- adjacency buff into protected payoff;
- shielded ally survives Demon pressure;
- Familiar 3 makes each small support effect worth building around.

Weakness:

- spread-out boards;
- direct damage that bypasses side combat;
- losing the first pack piece before payoff.

Good hybrids:

- Familiar + Human: formation shields and adjacency stability;
- Familiar + Arcane: protected center combo;
- Familiar + Automaton: compact fortress.

### Demon Gameplay Contract

Core fantasy: convert flips into direct pressure and force the enemy to answer now.

Primary objective:

- create flip chains;
- punish isolated or exposed enemies;
- convert board aggression into direct damage.

Cards to search for:

- high-side attackers;
- cards that reward flipping;
- cards that damage through shields or punish no-adjacent allies;
- stabilizers, because Demon can overextend.

Stats to search for:

- 5+ attack sides;
- spear or hook shapes;
- cards with weak backs that are acceptable if the turn creates tempo.

Main combos:

- flip card -> direct damage payoff;
- Demon 3 turns aggressive plays into lethal pressure;
- rare Demon card rewards multiple flips in one combat.

Weakness:

- shield-heavy boards;
- bad draw order with too many fragile attackers;
- opponents that deny flips by playing safe corners.

Good hybrids:

- Demon + Revenant: aggression that becomes stronger when behind;
- Demon + Arcane: precision center flips into burst;
- Demon + Human: safer lines for an otherwise risky deck.

### Human Gameplay Contract

Core fantasy: disciplined formations, reliable hands, and clean tactical lines.

Primary objective:

- build row/column structures;
- reduce variance through draw and shield;
- win by making fewer bad turns than the opponent.

Cards to search for:

- row/column payoffs;
- draw next turn;
- shield cards;
- upgraded balanced attackers;
- one higher-scaling rare to avoid falling behind late.

Stats to search for:

- balanced 3/3/3/3 or 4/3/3/2;
- line-friendly shapes with no catastrophic exposed side;
- cards that can safely occupy edge-middle positions.

Main combos:

- row setup -> self boost;
- shielded formation -> slow majority win;
- Human 3 improves reliability, draw, or protection.

Weakness:

- less explosive than Demon or Arcane;
- can be outscaled if it never finds a finisher;
- predictable formation goals can be disrupted.

Good hybrids:

- Human + Familiar: safest defensive scaling deck;
- Human + Automaton: structured fortress;
- Human + Revenant: controlled comeback without collapsing.

### Automaton Gameplay Contract

Core fantasy: engineer a fortress through corners, edges, and predictable structure.

Primary objective:

- claim corners early;
- make corner and edge cards hard to flip;
- force the opponent into bad center attacks.

Cards to search for:

- corner payoffs;
- shield and armor effects;
- cards with two adjacent strong sides;
- cards that reward staying unflipped.

Stats to search for:

- wall shapes;
- 5/4 adjacent sides;
- low values on sides that will face the board edge;
- stable anchors with defensive effects.

Main combos:

- corner anchor -> shield -> adjacent connector;
- Automaton 3 makes fortress pieces scale;
- rare Automaton card rewards every protected corner/edge.

Weakness:

- opponent denies corners;
- slow first turns;
- center-control decks can force awkward placements.

Good hybrids:

- Automaton + Familiar: hard-to-break pack fortress;
- Automaton + Human: safest line-and-corner control;
- Automaton + Arcane: corner shell around center engine.

### Revenant Gameplay Contract

Core fantasy: weaponize bad board states and turn being behind into pressure.

Primary objective:

- stay close enough to survive;
- trigger not-ahead effects;
- flip momentum with revenge cards.

Cards to search for:

- effects that trigger when tied or behind;
- direct damage while behind;
- draw while behind;
- late payoffs that do not require already winning.

Stats to search for:

- anchors that are acceptable when played defensively;
- attackers with one strong side for comeback flips;
- fewer pure win-more shapes.

Main combos:

- behind on board -> draw/setup;
- revenge attacker -> direct damage;
- Revenant 3 turns comeback effects into a real engine.

Weakness:

- awkward when far ahead;
- can be too slow if early turns are passive;
- aggressive opponents can end the fight before comeback is online.

Good hybrids:

- Revenant + Demon: pressure from either ahead or behind;
- Revenant + Human: stable comeback deck;
- Revenant + Arcane: setup-heavy reversal deck.

### Arcane Gameplay Contract

Core fantasy: precise sequencing, center control, and spell-like combo turns.

Primary objective:

- contest or hold center;
- set up exact adjacency/trait requirements;
- convert precision into draw, boosts, or multi-step payoffs.

Cards to search for:

- center payoffs;
- draw and combo extenders;
- cards that manipulate weakest/strongest side;
- rares that reward exact board states.

Stats to search for:

- core shapes;
- flexible middle values;
- cards that can survive in the center long enough to enable payoff.

Main combos:

- center anchor -> combo connector -> payoff;
- Arcane 3 turns precision setup into repeatable value;
- rare Arcane card rewards exact family mix or center ownership.

Weakness:

- center denial;
- bad sequencing;
- fragile engine cards getting flipped before payoff.

Good hybrids:

- Arcane + Familiar: protected spell engine;
- Arcane + Demon: precision burst deck;
- Arcane + Automaton: fortress around center.

## Hybrid Family Design

Hybrid design should avoid random soup. A hybrid should have a reason to exist.

Recommended structure:

```text
Main family: 6-8 cards
Splash family: 2-4 cards
Optional late hybrid: 5-7 main, 4-6 splash
```

The main family gives identity. The splash should solve a weakness or unlock a payoff.

### Hybrid Pair Matrix

| Pair | Build Name | What It Does |
|---|---|---|
| Familiar + Demon | Protected Aggression | shields fragile attackers so Demon can keep pressure |
| Familiar + Human | Pack Formation | adjacency plus row/column discipline |
| Familiar + Automaton | Living Fortress | compact protected board with strong corners |
| Familiar + Revenant | Loyal Comeback | pack survives long enough for behind-state payoffs |
| Familiar + Arcane | Protected Ritual | shields center/combo engines |
| Demon + Human | Tactical Assault | aggressive flips with safer formations |
| Demon + Automaton | Siege Engine | corner control that converts flips into damage |
| Demon + Revenant | Revenge Burn | direct damage whether ahead or behind |
| Demon + Arcane | Burst Ritual | precise center flips into direct damage |
| Human + Automaton | Ordered Fortress | safest defensive control plan |
| Human + Revenant | Last Stand | disciplined comeback with draw and shields |
| Human + Arcane | Scholar Formation | row/column setup enables precise spell payoffs |
| Automaton + Revenant | Broken Machine | fortress pieces that punish being flipped/behind |
| Automaton + Arcane | Clockwork Ritual | protected center plus corner shell |
| Revenant + Arcane | Death Spiral | behind-state draw creates exact combo turns |

### Hybrid Reward Rules

Reward generation should start reading the player's deck after a few nodes.

Rules:

- if a player has 3+ cards from a non-starting family, offer more support for that hybrid;
- if the player has payoff without setup, offer setup;
- if the player has setup without payoff, offer payoff;
- if the player has too many weak stat shapes, offer stabilizers;
- if the player has too many effects but not enough attack sides, offer high-side cards.

This makes reward choices feel like deckbuilding instead of random card collection.

## Family Objectives During A Run

Each family should have explicit run objectives that can be shown in the UI/lab and used by reward logic.

| Family | Early Goal | Mid Goal | Late Goal |
|---|---|---|---|
| Familiar | keep adjacency online | protect a payoff/card engine | build a resilient hybrid or shield engine |
| Demon | find reliable flip targets | add damage payoff or stabilizer | burst through boss defenses |
| Human | form safe lines | add consistency and one finisher | win with reliable upgraded board control |
| Automaton | secure corners | scale fortress pieces | force boss into bad attacks |
| Revenant | survive while close/behind | add comeback draw and revenge damage | convert reversals into boss pressure |
| Arcane | contest center | assemble exact combo pieces | chain precision payoffs safely |

These objectives should influence:

- reward weighting;
- enemy design;
- tutorial hints;
- lab simulations;
- UI trait display.

## Enemy Gameplay With Family Plans

Enemies should also play real family objectives.

Enemy deck generation should store:

```text
mainFamily
splashFamily?
deckPlan
preferredBoardShapes
keyPayoffCards
counterplayHint
rarityBand
```

Examples:

- early Familiar enemy: teaches adjacency and shields;
- early Demon enemy: teaches direct damage and exposed sides;
- mid Human + Automaton enemy: teaches fortress formations;
- late Demon + Revenant enemy: teaches pressure plus comeback;
- boss Arcane + Familiar + Automaton: center engine protected by shield and corners.

The opponent should not only receive stronger cards. It should receive clearer engines.

## Implementation Additions For Gameplay Depth

Add these to the next implementation pass.

### Data Fields

Likely additions:

```ts
family: CardFamily;
rarity: CardRarity;
role: "anchor" | "attacker" | "connector" | "payoff" | "engine" | "stabilizer" | "finisher";
buildTags: string[];
traitThresholds?: TraitThresholdConfig[];
preferredPositions?: BoardPositionTag[];
hybridLinks?: CardFamily[];
```

### Core Helpers

Needed pure helpers:

- count controlled cards by family;
- evaluate active trait thresholds;
- evaluate card combo requirements before placement;
- classify deck role balance;
- calculate family/hybrid density in a deck;
- score reward candidates against current deck needs.

### UI Helpers

Needed UI display:

- active family traits;
- inactive next thresholds;
- card build tags as icons;
- "this card helps" reward reason;
- combo preview on hover;
- enemy deck plan before combat.

## Balance Pass For Real Playstyles

Simulation reports should compare not only win rate, but whether each family is doing its intended thing.

Add metrics:

- average active trait turns by family;
- average payoff triggers per combat;
- average setup cards played before payoff;
- average hybrid cards added by depth;
- most picked reward role;
- dead payoff frequency;
- over-stabilizer frequency;
- percentage of wins by direct damage vs board majority;
- average center ownership for Arcane;
- average corner ownership for Automaton;
- average behind-state triggers for Revenant;
- average adjacency count for Familiar;
- average row/column completions for Human;
- average flips and damage for Demon.

Balance target:

- every family should have at least one measurable behavior where it is best;
- no family should be best at everything;
- every family should have at least two viable hybrid paths;
- every family should have a clear answer to at least one enemy style and a clear weakness into another;
- no deck should win only because its raw side totals are higher.

## Implementation Plan For Next Pass

### Phase 1 - Data Model

Files likely touched:

- `src/core/types.ts`
- `src/core/config/cardArchetypes.ts`
- `src/core/config/decks.ts`
- `src/core/adventure.ts`
- `src/core/adventure-bot.ts`
- `src/core/adventure-enemy.ts`
- `src/core/adventure-rewards.ts`
- `src/core/serialization.ts`

Tasks:

1. Add a run-level selected family field.
2. Define family starter deck configs.
3. Allow starter decks to contain duplicate archetype IDs.
4. Remove or bypass the opening draft as the default start.
5. Keep draft code available only if useful for lab/simulation.
6. Add card roles and build tags.
7. Add active board trait calculation.
8. Add family/hybrid density helpers for reward logic.

Acceptance:

- starting a run asks for family;
- chosen family creates the correct 10-card deck;
- duplicate cards appear in draw pile and play correctly;
- serialization exposes chosen family and deck copy counts.
- board traits can be evaluated without React/UI code.
- deck family density can be evaluated deterministically from card IDs.

### Phase 2 - Starter Card Redesign

Files likely touched:

- `src/core/config/cardArchetypes.ts`
- `src/core/cards.ts`
- `src/core/engine.test.ts`
- `src/core/deck-analysis.ts`

Tasks:

1. Replace current starter card list with V4 card table.
2. Give each starter base card exactly one effect.
3. Assign rarity and side budgets explicitly.
4. Add test helpers to verify:
   - starter card side totals;
   - exactly one base effect;
   - valid value ranges;
   - every starter deck has 10 cards;
   - every starter deck has 4 unique card IDs.
5. Assign every card a role, stat shape, build tags, and counterplay note.
6. Ensure each family has at least:
   - 1 setup card;
   - 1 payoff card;
   - 1 stabilizer or safe opener;
   - 1 card that creates a clear deckbuilding direction.

Acceptance:

- all six starter decks are valid;
- no starter deck exceeds balance budget;
- every card has a unique role.
- every family has a measurable playstyle objective.
- every starter deck has at least one obvious upgrade/reward path.

### Phase 3 - Enemy Decks

Files likely touched:

- `src/core/config/enemyProfiles.ts`
- `src/core/adventure-enemy.ts`
- `src/core/adventure.test.ts`
- `src/core/adventure-enemy.test.ts`

Tasks:

1. Define enemy family archetypes by depth.
2. Build mono-family enemies early.
3. Build hybrid enemies later.
4. Increase rarity as boss approaches.
5. Ensure enemy decks also use duplicates.
6. Give each enemy a deck plan and counterplay hint.
7. Make late enemies use real trait thresholds and payoff cards.

Acceptance:

- enemy decks are readable and themed;
- early enemies are simpler;
- late enemies contain real combo threats;
- boss has curated deck.
- enemy decks demonstrate the same family rules as the player.
- enemies do not scale only through raw side values.

### Phase 4 - Rewards And Stealing

Files likely touched:

- `src/core/adventure-rewards.ts`
- `src/components/adventure-reward-overlay.tsx`
- `src/core/serialization.ts`

Tasks:

1. Allow duplicate steals.
2. Show whether a reward is duplicate, upgrade, or new.
3. Offer more on-family rewards.
4. Add uncommon/rare reward pools.
5. Add skip.
6. Score reward offers against current deck needs:
   - missing setup;
   - missing payoff;
   - missing stabilizer;
   - over-reliance on one stat shape;
   - emerging hybrid family.
7. Add reward reasons in data, even if the first UI only shows a short label.

Acceptance:

- player can steal duplicate enemy cards;
- reward offer does not collapse duplicate deckbuilding;
- rare cards appear later, not too early.
- reward choices support real build decisions instead of random power picks.
- hybrid pivots become visible after the player commits to splash cards.

### Phase 5 - UI Flow

Files likely touched:

- `src/components/adventure-client.tsx`
- new family choice component
- `src/components/card-view.tsx`
- `src/components/adventure-reward-overlay.tsx`
- `src/components/combat-info-dock.tsx`

Tasks:

1. Add start-of-run family selection.
2. Show family identity and starter deck preview.
3. Show deck copy counts.
4. Improve card inspection modal.
5. Show active setup/payoff state clearly:
   - combo active/inactive;
   - needed family count;
   - potential trigger on hovered move.
6. Show active trait thresholds like a compact TFT trait panel:
   - current family counts;
   - active thresholds;
   - next threshold needed.
7. Show reward reasons:
   - setup;
   - payoff;
   - stabilizer;
   - duplicate consistency;
   - hybrid splash.

Acceptance:

- player understands their starting deck before first node;
- hand cards are readable;
- detailed text appears in inspection/tooltip, not as clutter.
- player understands what their deck is trying to become.
- player can see why a hybrid card might be worth taking.

### Phase 6 - Visual Upgrade Scaffolding

Do not generate images in code. The user will generate final card art manually.

Tasks:

1. Define card image slot requirements.
2. Build card layout that supports:
   - large character art;
   - name;
   - family crest;
   - rarity frame;
   - four side values;
   - one short bonus text line on large card;
   - compact icons in combat.
3. Prepare file naming convention for manually generated cards.

Suggested image convention:

```text
public/images/cards-v4/{family}/{card-id}.png
public/images/cards-v4/{family}/{card-id}-plus.png
```

Acceptance:

- generated card images can be dropped in one by one;
- missing images fall back gracefully;
- combat still uses compact readable cards.

### Phase 7 - Arena And UI Overhaul

Tasks:

1. Improve board readability.
2. Make tile ownership and last move clearer.
3. Add better preview feedback:
   - expected flips;
   - triggered effects;
   - active combo;
   - blocked damage.
4. Improve enemy intention display:
   - family plan;
   - deck style;
   - visible drawn hand during delay.
5. Improve victory/reward screen.

Acceptance:

- a player can read the board state in 2 seconds;
- hover preview explains why a move is strong;
- opponent deck identity is understandable.

## Required Tests

### Core Tests

- every starter deck has exactly 10 cards;
- every starter deck has exactly 4 unique card IDs;
- every base card has exactly 1 effect;
- starter deck side averages are within tolerance;
- duplicates draw/play/discard correctly;
- steal reward allows duplicates;
- enemy decks scale rarity by depth;
- rare cards do not appear before configured unlock depth;
- combo effects trigger only when setup is met.
- board trait thresholds activate/deactivate correctly after placement, flips, and destruction;
- reward scoring detects missing setup and missing payoff;
- hybrid density is deterministic and seed-stable;
- enemies receive deck plans appropriate to run depth.

### Simulation Tests

Run at least:

```text
family vs family matrix:
6 x 6 matchups
at least 500 games per matchup for first pass
later 2000+ games per matchup
```

Metrics:

- win rate by family;
- win rate by starting player;
- average rounds;
- average direct damage;
- average shield used;
- average draw bonus generated;
- average active combo triggers;
- average active trait turns;
- average payoff triggers by family;
- average setup-before-payoff turns;
- average hybrid density by depth;
- dead payoff frequency;
- family-specific objective metrics;
- steal reward picked by family;
- deck size at boss;
- boss win rate.

Balance target:

- no starter family should exceed 58% average win rate across all other starter families;
- no starter family should fall below 42%;
- hard-counter matchup should not exceed 65/35 in first balance pass;
- starting player advantage should stay below 55%.

### Browser QA

Need screenshots for:

- family select;
- each starter deck preview;
- first combat hand;
- tooltip/inspection;
- reward steal with duplicate;
- enemy hybrid deck;
- boss intro;
- mobile portrait;
- desktop 1366x768.

## Card Design Template

Use this for every card before implementation:

```text
Card ID:
Display Name:
Family:
Rarity:
Starter Deck: yes/no
Starter Copies:
Side Values: top / right / bottom / left
Side Total:
Role: anchor / attacker / connector / payoff / rare engine
Effect:
Condition:
Combo Requirement:
Trait Threshold Interaction:
Upgrade:
Weakness:
Deckbuilding Objective:
Hybrid Links:
Best Board Position:
Counterplay:
Visual Brief Placeholder:
```

## Family Starter Deck Template

Use this table for implementation planning:

| Family | Card ID | Copies | Rarity | Top | Right | Bottom | Left | Total | Role | Effect | Upgrade |
|---|---|---:|---|---:|---:|---:|---:|---:|---|---|---|
| Familiar | TBD | 3 | Common | TBD | TBD | TBD | TBD | TBD | Anchor | TBD | TBD |
| Familiar | TBD | 3 | Common | TBD | TBD | TBD | TBD | TBD | Attacker | TBD | TBD |
| Familiar | TBD | 2 | Common | TBD | TBD | TBD | TBD | TBD | Connector | TBD | TBD |
| Familiar | TBD | 2 | Common | TBD | TBD | TBD | TBD | TBD | Payoff | TBD | TBD |

Repeat this table for all six families before coding.

## Open Design Questions

Need answer before implementation:

1. Does the player still get a charm at run start, or only after first nodes?
2. Should family choice also change player avatar/passive, or only starter deck?
3. Should off-family cards be common in rewards or mostly special?
4. Should every family have one rare legendary card for first V4, or wait?
5. Should boss decks be fixed per family route or generated by seed?
6. Should starter decks be exactly 10 forever, or can some families start with 11 as a drawback/benefit?
7. Should upgrades be chosen by card type, or deterministic per card?

## Next Session Recommended Order

1. Fill the full 24-card starter matrix: 6 families x 4 cards.
2. Assign copy counts and side values.
3. Review balance manually using side totals and effect power.
4. Implement family selection and fixed starter decks.
5. Add tests for deck validity.
6. Implement enemy family decks.
7. Implement duplicate steal rewards.
8. Run family-vs-family simulations.
9. Tune stats/effects.
10. Only after gameplay stabilizes, start replacing card art one by one.

## Definition Of Done For V4

V4 is ready when:

- the player starts by choosing a family;
- every family has a fixed 10-card duplicate starter deck;
- each starter deck has 4 unique cards;
- base cards have exactly one effect;
- enemy decks are family-themed and scale over the run;
- duplicate cards are allowed in player and enemy decks;
- stealing enemy cards remains core to progression;
- rewards include rarity and duplicates;
- simulations show no family is overwhelmingly dominant;
- card UI supports final generated art without changing core logic;
- gameplay feels like building a deck, not collecting unrelated one-off cards.
