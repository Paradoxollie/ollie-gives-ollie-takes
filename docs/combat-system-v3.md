# Combat System V3 - Deckbuilding tactique profond

Date: 2026-05-08

## Objectif

La V3 transforme le prototype en vrai jeu de run/deckbuilding inspire de Slay the Spire, sans perdre la base Triple Triad. Les cartes ne doivent plus seulement avoir des chiffres et une famille: elles doivent produire des effets reels qui changent la partie, creent des choix de sequencing, et donnent une raison claire de construire un deck autour d'un plan.

Le joueur doit pouvoir se dire:

- "Je construis un deck Demon qui finit vite avec des degats directs."
- "Je construis un deck Familier/Humain qui bloque les grosses fins de round."
- "Je construis Automate autour des coins."
- "Je construis Arcane autour du centre et de la pioche."
- "Je construis Revenant pour jouer en retard puis retourner la situation."

## Piliers

1. Chaque carte a une fonction tactique.
   Les valeurs de cote restent importantes, mais une carte peut aussi bloquer, attaquer, piocher ou se renforcer.

2. La run developpe une base.
   Les drafts, recompenses, upgrades et fusions conservent maintenant les effets des cartes. Ajouter une carte change donc le moteur du deck, pas seulement sa force brute.

3. Les familles sont des archetypes, pas des badges.
   Les bonus de famille restent utiles, mais chaque famille porte aussi une identite d'effets.

4. Le timing est strict.
   Les effets ont un ordre de resolution stable pour que le joueur puisse apprendre, anticiper et optimiser.

5. Les chiffres sont tunables.
   Les caps sont dans `GAME_CONFIG`, donc les simulations peuvent aider a equilibrer sans reecrire les regles.

## Nouvelles ressources

### Bouclier

- Stocke sur chaque joueur pendant le round.
- Cap actuel: `maxShieldPerPlayer = 6`.
- Bloque les degats directs entrants.
- Bloque aussi les degats de controle en fin de round.
- Retombe a 0 au debut du round suivant.
- Sert de vraie defense, pas de texte decoratif.

Exemple:

- Une carte donne `+2 bouclier`.
- L'adversaire controle 3 cartes en fin de round.
- Le joueur prend 1 degat au lieu de 3.

### Degats directs

- Infligent des degats au champion adverse sans attendre la fin du round.
- Cap actuel: `maxDirectDamagePerMove = 4`.
- Sont bloques par le bouclier adverse.
- Peuvent terminer le combat immediatement.
- Creent un plan agressif equivalent a "attaquer" dans Slay the Spire.

### Pioche bonus

- Stockee sur le joueur qui declenche l'effet.
- Cap actuel: `maxNextTurnDrawBonus = 2`.
- Consommee au prochain tour de ce joueur.
- Ajoute de vraies decisions de deckbuilding: une carte moins forte peut devenir excellente si elle accelere la main suivante.

### Canalisation

- Boost de la carte jouee avant la comparaison de flip.
- Cap actuel par cote: `maxCardSideValue = 8`.
- Peut viser le cote faible, le cote fort ou tous les cotes.
- Cree des combos positionnels: jouer au centre, adjacent a un ennemi, dans un coin, etc.

### Combo de famille

- Certains effets demandent un seuil de famille avant de s'activer.
- `Combo 2` signifie que la carte doit faire partie d'un plateau qui contient au moins 2 cartes de sa famille pour ce joueur, en comptant la carte jouee.
- `Combo 3` demande un vrai setup: il faut deja avoir prepare deux cartes de la meme famille avant de jouer la carte payoff.
- Les effets avec `cumule avec la famille` scalent ensuite avec le nombre de cartes de cette famille, dans le cap de l'effet.
- Le systeme est symetrique: l'adversaire profite des memes effets si son deck et son plateau sont construits pour.

## Timing exact d'un coup

1. Le joueur choisit une carte et une case.
2. Les modificateurs preexistants s'appliquent:
   - porte-bonheur du joueur;
   - pouvoirs ennemis;
   - modifications de main.
3. Les effets `Pose: Canalise` de la carte s'appliquent.
4. La carte est posee sur le plateau.
5. Le combat adjacent se resout:
   - seulement la carte posee attaque;
   - les allies ne combattent jamais;
   - les traits de famille modifient attaque/defense;
   - les cartes adverses battues sont retournees.
6. Les effets de ressource se resolvent:
   - `Pose`;
   - `Flip`;
   - les effets `Flip` multiplient leur valeur par le nombre de flips reussis, dans les caps.
7. Les effets `Combo N` verifient la famille controlee par le joueur qui vient de jouer.
8. Si les degats directs tuent un champion, le combat se termine tout de suite.
9. Si le plateau vient d'etre rempli, la fin de round se resout:
   - controle brut;
   - bonus de charme;
   - bonus de famille;
   - degats de controle;
   - reduction par bouclier.
10. Les cartes du plateau partent en defausse selon leur controle final.
11. Le round suivant commence avec un nouveau starter.

## Lisibilite des cartes

Les cartes n'affichent plus les phrases d'effet en permanence. Elles utilisent des pictos compacts:

- bouclier: defense;
- lame: degats directs;
- cartes: pioche;
- etoile: canalisation/boost;
- `2+`: effet de flip qui demande au moins 2 flips;
- `C2` ou `C3`: seuil de combo de famille.

Le texte complet reste disponible au survol de l'icone. L'objectif est de garder la carte lisible pendant le choix, tout en laissant les joueurs apprendre les mots-clefs comme dans un deckbuilder.

## Conditions d'effets

Les effets peuvent avoir une condition:

- `always`: toujours.
- `adjacent-ally`: au moins un allie orthogonal adjacent.
- `adjacent-enemy`: au moins un ennemi orthogonal adjacent.
- `corner`: case de coin.
- `center`: case centrale.
- `behind-on-board`: le joueur n'est pas devant au controle avant la pose.

Ces conditions creent des choix de placement. Une carte n'est plus seulement "forte"; elle est forte dans une situation.

## Identite des familles

### Familier

Plan: soutien, securite, tempo doux.

- Bouclier si un allie est adjacent.
- Pioche apres flip.
- Encourage les formations compactes.
- Fonctionne bien avec Humain pour survivre.

### Demon

Plan: pression, degats directs, snowball.

- Degats directs sur flip.
- Degats de pose si un ennemi est adjacent.
- Corruption via les seuils de famille existants.
- Risque: moins defensif, sensible au bouclier adverse.

### Humain

Plan: stabilite, defense, main fiable.

- Bouclier simple.
- Pioche simple.
- Boosts modestes avec support adjacent.
- Sert de base solide pour runs longues.

### Automate

Plan: coins, structure, scaling local.

- Bouclier en coin.
- Boost du cote faible en coin.
- Recompense la preparation et les placements propres.
- Devient tres bon quand le joueur connait les patterns du plateau.

### Revenant

Plan: comeback, jouer depuis une position perdante.

- Effets actifs si le joueur n'est pas devant au controle.
- Pioche ou bouclier quand on est en retard.
- Peut retourner un round mal engage.
- Donne une vraie alternative au snowball pur.

### Arcane

Plan: centre, precision, combos.

- Boost au centre.
- Pioche au centre.
- Degats ou tempo si un flip est bien prepare.
- Cree le gameplay le plus "combo".

## Deckbuilding pendant la run

### Draft initial

Le bot de draft ne penalise plus automatiquement le fait de prendre plus de deux cartes d'une meme famille. Il valorise maintenant le deuxieme et troisieme pick d'une famille pour permettre une vraie base d'archetype.

### Recompenses

Les cartes de recompense ont maintenant des effets reels generes selon leur famille et leur rarete.

- Communes: effets simples.
- Inhabituelles: meilleures valeurs et effets plus fiables.
- Rares: valeurs fortes et effets a impact plus haut.

### Upgrade

Une carte upgradee conserve son effet. L'upgrade augmente donc la valeur tactique sans supprimer le role de la carte.

### Fusion

Une fusion herite d'un effet de chaque carte source. C'est un vrai levier de build: fusionner ne sert pas seulement a combiner les cotes, mais aussi a combiner deux morceaux de moteur.

## Implementation actuelle

Fichiers principaux:

- `src/core/types.ts`: nouveaux types `CardEffect`, `CardEffectEvent`, `PlayerCombatState`.
- `src/core/card-effects.ts`: clonage et formatage des effets.
- `src/core/config/cardArchetypes.ts`: effets sur les cartes de draft.
- `src/core/config/adventureRewards.ts`: effets sur les cartes de recompense.
- `src/core/engine.ts`: resolution deterministe des effets.
- `src/core/serialization.ts`: export des effets et ressources pour l'UI/tests.
- `src/components/card-view.tsx`: texte d'effet sur les cartes.
- `src/components/combat-info-dock.tsx`: ressources visibles.
- `src/core/engine.test.ts`: tests de bouclier, degats directs, pioche et boost.

## Criteres d'acceptation

Un systeme est valide si:

- une carte avec degats directs peut vraiment retirer des PV;
- une carte avec bouclier reduit vraiment les degats recus;
- une carte avec pioche modifie vraiment la main suivante;
- une carte avec boost change vraiment une comparaison de flip;
- les bots voient les effets dans les previews;
- les drafts peuvent produire des bases de famille;
- les recompenses de run apportent de nouveaux effets;
- les effets sont visibles sur les cartes et dans le feedback de combat.

## Tuning initial

Valeurs actuelles:

- `maxShieldPerPlayer`: 6
- `maxNextTurnDrawBonus`: 2
- `maxDirectDamagePerMove`: 4
- `maxCardSideValue`: 8
- `roundDamagePerControlledCard`: 1

Regles de tuning:

- Si Demon finit trop souvent avant la fin du round, baisser `maxDirectDamagePerMove` a 3.
- Si les combats durent trop longtemps, baisser `maxShieldPerPlayer` a 4.
- Si la main devient trop fiable, garder `maxNextTurnDrawBonus` a 1.
- Si les cartes canalisees dominent les flips, garder `maxCardSideValue` a 7.

## Prochaines evolutions

1. Ajouter des reliques de run qui modifient les effets:
   - premier degat direct de chaque round +1;
   - premier bouclier de chaque round double;
   - les effets de centre comptent aussi sur les cases adjacentes au centre.

2. Ajouter des malus cartes:
   - carte qui donne +2 attaque mais inflige 1 degat au joueur;
   - carte qui pioche mais perd 1 sur son cote faible;
   - carte qui donne bouclier mais rend un ennemi plus dur a flip.

3. Ajouter des mots-clefs plus avances:
   - `Echo`: repete un petit effet si la carte ne flip rien.
   - `Rupture`: bonus si le bouclier adverse est a 0.
   - `Ancrage`: bonus si la carte reste controlee jusqu'a la fin du round.

4. Ajouter des rapports de simulation dedies:
   - degats directs moyens par match;
   - bouclier moyen consomme;
   - pioche bonus moyenne;
   - taux de victoire par famille dominante;
   - taux de fin par degats directs.

Cette V3 donne une base profonde: il reste a equilibrer par simulations et playtests, mais le jeu possede maintenant les vrais leviers d'un deckbuilder tactique.
