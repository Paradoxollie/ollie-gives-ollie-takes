# Ollie Gives, Ollie Takes

Prototype jouable dans le navigateur d'un combat tactique par cartes pour **Ollie Gives, Ollie Takes**.

## Portee actuelle

- Next.js App Router frontend
- TypeScript partout
- Tailwind CSS pour le style
- Moteur deterministe pur dans `src/core`
- Humain contre IA sur un plateau `3x3`
- Run aventure avec draft initial de `7` cartes depuis une offre de `14` cartes tiree par seed
- Presets de pools partages `10` / `12` / `14` cartes par joueur, sans doublons entre les deux camps
- Familles de cartes controlees sur le board: Familiers, Demons, Humains, Automates, Revenants et Arcanes
- Bots `random`, `greedy`, `heuristic`, `trained` et `champion`
- Simulateur deterministe en self-play avec rapports JSON et Markdown
- Pipeline local d'entrainement self-play avec benchmark et promotion conditionnelle du bot live
- Studio IA `/lab/ai` avec echelle de joueurs, diagnostics de decks et snapshot deployable
- Route `/lab` pour l'inspection locale des rapports et du sandbox
- Couverture Vitest sur les regles de combat, la legalite des bots et l'agregation des simulations

## Regles implementees

- Les combats de preset distribuent des decks uniques depuis un pool partage
- Le preset V2 par defaut utilise `12` cartes par joueur depuis un pool de `24` cartes uniques
- En aventure, la run commence par une offre aleatoire de `14` cartes, incluant les `7` animaux existants, puis le joueur en choisit `7`
- Les cartes draftes par le joueur sont retirees du pool de depart ennemi
- Une victoire propose de voler une carte unique du deck adverse, sans generer de butin gratuit de combat
- Les coffres proposent un choix de carte hors combat, tandis que la forge fusionne et le camp ameliore ou retire
- Chaque champion commence avec des PV configurables, `24` par defaut
- Le plateau est en `3x3`
- Le joueur actif pioche `4` cartes par tour et en pose `1` sur une case vide
- A chaque tour, la main est retiree aleatoirement parmi toutes les cartes disponibles hors plateau
- Les cartes non jouees retournent a la pioche
- Les cartes non jouees redeviennent donc immediatement eligibles au tour suivant
- Les cartes posees restent sur le plateau jusqu'a la fin du round
- Quand la pioche est vide ou insuffisante, la defausse est melangee de nouveau dans la pioche
- Seule la carte nouvellement posee resout le combat orthogonal
- Les cartes alliees ne se battent jamais
- Si la valeur posee est strictement superieure a la valeur opposee ennemie, la carte ennemie se retourne et change de proprietaire
- Si la valeur posee est egale ou inferieure, il ne se passe rien
- Une pose peut retourner plusieurs cartes a la fois
- Les bonus de famille peuvent ajouter de petits bonus deterministes en attaque, defense ou controle de fin de round
- Une carte retournee par un Demon actif peut etre corrompue et compter aussi comme Demon tant que son controleur la garde
- Quand le plateau `3x3` est plein, le round se termine
- En fin de round, chaque champion subit autant de degats que le nombre de cartes controlees par l'adversaire
- Les degats de fin de round sont donc simultanes
- Apres la resolution, toutes les cartes du plateau partent dans la defausse de leur proprietaire actuel, le plateau se vide et le round suivant commence
- Le match se termine sur KO d'un champion ou sur blocage repete sans coups jouables

## Lancement local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) pour le prototype jouable, [http://localhost:3000/lab](http://localhost:3000/lab) pour le labo local et [http://localhost:3000/lab/ai](http://localhost:3000/lab/ai) pour le studio IA.

## Pipeline visuel des personnages

Un studio local de generation/review des personnages est disponible dans `/lab/characters` :

- il sauvegarde les prompts et reglages dans `reports/character-lab/state.json`
- il stocke les candidats dans `public/images/cards-generated/<card-id>/`
- il permet de retenir ou supprimer des candidats sans impacter le jeu principal
- il attend un serveur `ComfyUI` local configure depuis l'interface

Le workflow detaille est documente dans `docs/character-art-pipeline.md`.

Sur cette machine, `ComfyUI` est installe dans `D:\AI\ComfyUI` et le labo est deja configure pour viser `http://127.0.0.1:8188`.

Demarrage rapide :

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\start-comfyui.ps1 -Background
```

Arret :

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\stop-comfyui.ps1
```

## Commandes

```bash
npm run dev
npm run build
npm run start
npm run test
npm run ai:lab:apply -- --matches 24 --seed 1701
npm run ai:train -- --seed 700 --iterations 8 --population 10 --elite-count 3 --matches-per-opponent 6 --promotion-matches-per-opponent 12 --search-depth 3 --beam-width 8
npm run train:bot -- --seed 700 --iterations 6 --population 8 --elite-count 3 --matches-per-opponent 4 --promotion-matches-per-opponent 8 --search-depth 3 --beam-width 8 --apply --promote
```

## CLI d'entrainement

Lance un cycle d'entrainement auto-evalue avec :

```bash
npm run train:bot -- --seed 700 --iterations 12 --population 10 --elite-count 3 --matches-per-opponent 4 --promotion-matches-per-opponent 10 --search-depth 3 --beam-width 8 --apply --promote
```

Options principales :

- `--iterations <number>` : nombre d'iterations evolutionnaires
- `--population <number>` : taille de population par iteration
- `--elite-count <number>` : nombre d'elites retenues pour recalculer la moyenne
- `--matches-per-opponent <number>` : matchs d'entrainement par adversaire de reference
- `--promotion-matches-per-opponent <number>` : matchs de benchmark par adversaire pour la promotion
- `--search-depth <number>` : profondeur de recherche du candidat entraine
- `--beam-width <number>` : largeur de faisceau de recherche
- `--apply` : applique le meilleur checkpoint a `src/core/bots/generated/trainedWeights.ts`
- `--promote` : promeut le profil live dans `src/core/bots/generated/liveChampion.ts` uniquement si le benchmark passe

Chaque execution ecrit :

- `reports/training/<report-id>.json`
- `reports/training/<report-id>-promotion.json`
- `reports/training/latest-trained-bot.json`
- `reports/training/latest-promotion-report.json`

## Studio IA

Le studio IA separe trois besoins :

- `npm run ai:lab:apply -- --matches 24 --seed 1701` genere `reports/ai-lab/latest-ai-lab-report.*` et met a jour `src/core/ai-lab/generated/latestAiLabReport.ts` pour la page deployee.
- `npm run ai:train -- --seed 700 --iterations 8 --matches-per-opponent 6 --promotion-matches-per-opponent 12 --search-depth 3 --beam-width 8` entraine et promeut le champion si le benchmark passe.
- `/lab/ai` lit le dernier rapport local quand il existe, sinon le snapshot versionne, et affiche les signaux d'equilibrage sur le depart actuel du jeu: choix de famille et starter fixe de 12 cartes.

Les modeles de joueur sont `Debutant`, `Opportuniste`, `Regulier`, `Expert` et `Champion`. Ils utilisent tous le moteur deterministe dans `src/core` ; la page React ne reimplemente aucune regle. Le Studio IA reproduit le flux joueur actuel, afin que les diagnostics restent alignes avec le jeu public.

## Structure du projet

```text
src/
  app/           Routes Next.js et styles globaux
  components/    Rendu UI et glue d'interaction uniquement
  core/          Moteur pur, adventure, bots, config, training, Studio IA, serialization
  lib/           Helpers serveur et passerelles locales
  types/         Declarations globales cote navigateur
scripts/         Entrees CLI TypeScript
docs/            Notes d'architecture
reports/         Sorties generees localement, ignorees par Git
```

## Notes d'architecture

- `src/core` porte toute la boucle de combat : PV des champions, flips de controle, rounds, piles, bots, previews, aventure et entrainement IA.
- Le bot `champion` est le bot live du jeu : il lit `src/core/bots/generated/liveChampion.ts` et retombe sur l'heuristique si aucun profil entraine n'a encore passe la promotion.
- Les composants React consomment `createMatch`, `applyMove`, `previewMove`, `passTurn` et les types du moteur sans reimplementer les regles.
- `/lab` reste un outil local pour ouvrir le Studio IA, le studio personnages et manipuler le meme moteur vivant que l'ecran principal.
- `window.render_game_to_text()` et `window.advanceTime(ms)` restent exposes pour l'automatisation locale.

## Notes d'equilibrage actuelles

- `greedy` domine encore `random`.
- `heuristic` reste devant `greedy` sur les premiers echantillons.
- Le jeu recompense bien les multi-flips, les coins et la protection des faces faibles.
- Le plateau `3x3` donne des rounds courts et lisibles, utiles pour le prototypage d'interface.
- Le studio IA de reference teste le depart de run reel, pas une comparaison de tailles de deck historiques.
