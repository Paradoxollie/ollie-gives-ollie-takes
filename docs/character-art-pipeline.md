# Character Art Pipeline

Le studio personnages de `/lab` est maintenant un espace de travail local dedie.

Important :

- aucune image generee dans ce pipeline n'est utilisee par les cartes du jeu pour le moment ;
- les candidats restent dans le labo tant qu'on ne valide pas ensemble une integration ;
- le studio sauvegarde les prompts, reglages et selections localement.

## Ce que fait `/lab/characters`

Le studio permet de :

- choisir une carte de depart ;
- editer le prompt, le negative prompt et les notes ;
- configurer un serveur `ComfyUI` local ;
- lancer une generation locale ;
- afficher les candidats produits ;
- retenir un candidat pour review ;
- supprimer un candidat rate.

## Stockage local

Etat du studio :

```text
reports/character-lab/state.json
```

Images generees :

```text
public/images/cards-generated/<card-id>/
```

Exemple :

```text
public/images/cards-generated/stag/candidate-stag-20260403123456-01.png
```

## Workflow supporte

Le backend `/lab/characters` pilote un workflow ComfyUI `checkpoint + txt2img` simple, adapte a un checkpoint Stable Diffusion / SDXL charge via `CheckpointLoaderSimple`.

Le reglage par defaut dans le studio est :

```text
sd_xl_base_1.0.safetensors
```

Tu peux le remplacer par n'importe quel checkpoint compatible deja installe dans ComfyUI.

## Stack locale recommandee

Pour un pipeline gratuit et exploitable sur cette machine :

1. `ComfyUI` en local pour l'inference.
2. Un checkpoint SDXL compatible avec `CheckpointLoaderSimple`.
3. `Krita` en complement si on veut retoucher ou inpaint apres selection d'un bon candidat.

Le studio web n'impose pas Krita, mais Krita reste utile pour les corrections fines.

## Reglages par defaut

Le studio initialise :

- URL ComfyUI : `http://127.0.0.1:8188`
- checkpoint : `sd_xl_base_1.0.safetensors`
- resolution : `1024x1536`
- variantes : `4`
- steps : `28`
- cfg : `6.5`
- sampler : `dpmpp_2m`
- scheduler : `karras`

## Setup ComfyUI

Sources officielles :

- ComfyUI docs : <https://docs.comfy.org/>
- ComfyUI GitHub : <https://github.com/Comfy-Org/ComfyUI>

Sur cette machine AMD, le chemin le plus simple est :

1. utiliser l'installation locale deja posee dans `D:\AI\ComfyUI` ;
2. lancer `powershell -ExecutionPolicy Bypass -File .\scripts\start-comfyui.ps1 -Background` depuis le repo ;
3. verifier que `http://127.0.0.1:8188/system_stats` repond ;
4. revenir sur `/lab/characters`.

Pour arreter le serveur :

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\stop-comfyui.ps1
```

Le checkpoint gratuit actuellement installe est :

```text
D:\AI\ComfyUI\models\checkpoints\sd_xl_base_1.0.safetensors
```

## Utilisation du studio

1. Ouvrir `http://localhost:3000/lab/characters`
2. Choisir une carte dans la colonne de gauche.
3. Ajuster le prompt et le negative prompt.
4. Sauver le brief si besoin.
5. Verifier les reglages ComfyUI.
6. Cliquer sur `Generer 4 variantes`.
7. Comparer les candidats.
8. Cliquer sur `Retenir` pour marquer un candidat comme selection de review.

## Regles de production

- personnage centre ;
- silhouette lisible a petite taille ;
- pas de texte ni watermark ;
- eviter les crops agressifs ;
- viser une lecture forte en format portrait ;
- ne pas integrer les candidats au gameplay tant qu'ils ne sont pas valides.
