# Playtest public

Objectif: donner un simple lien aux joueurs, sans labo, sans routes admin, sans API locale et sans outils de training.

## Commandes

```bash
npm run dev:playtest
npm run build:playtest
```

`dev:playtest` lance la version joueur en local. `build:playtest` force `NEXT_PUBLIC_PLAYTEST_BUILD=1` et produit une build Next.js ou la page racine `/` devient l'entree playtest.

## Ce que voit le joueur

- `/` affiche uniquement l'ecran "Jouer".
- `/playtest` affiche la meme entree, utile pour tester sans changer la home de dev.
- Le menu de run ne montre pas le labo, le mode IA auto, la pause spectateur, ni la seed.
- Les appels live champion sont desactives en playtest; le bot integre au build est utilise.
- `/lab`, `/lab/*` et `/game` redirigent vers `/`.
- `/api/*` repond en 404.

## Publication simple

La solution recommandee est un deploiement web avec un lien unique.

Sur Vercel:

1. Creer un nouveau projet dedie au playtest.
2. Build command: `npm run build:playtest`
3. Output: laisser Next.js par defaut.
4. Env optionnelle: `NEXT_PUBLIC_PLAYTEST_BUILD=1`
5. Env optionnelle: `PLAYTEST_BUILD=1`

Ensuite, envoyer uniquement l'URL publique aux joueurs. Pour telephone, envoyer aussi un QR code qui pointe vers cette URL.

## Limite de protection

Une build navigateur expose forcement le JavaScript minifie et les assets necessaires pour jouer. Cette version evite surtout d'exposer le repo, les sources de travail, les scripts, le labo, les routes d'API et les outils internes.
