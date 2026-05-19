import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260519-050929",
  "generatedAt": "2026-05-19T05:09:29.774Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 5,
    "deckPresetIds": [
      "starter10",
      "starter12",
      "starter14"
    ],
    "modelIds": [
      "beginner",
      "opportunist",
      "regular",
      "expert",
      "champion"
    ]
  },
  "playerModels": [
    {
      "id": "beginner",
      "label": "Debutant",
      "skillLabel": "Joue sans plan",
      "rank": 1,
      "botId": "random",
      "searchDepth": 1,
      "beamWidth": 9,
      "description": "Modele de joueur qui decouvre les cartes et rate souvent les bons flips."
    },
    {
      "id": "opportunist",
      "label": "Opportuniste",
      "skillLabel": "Cherche le flip visible",
      "rank": 2,
      "botId": "greedy",
      "searchDepth": 1,
      "beamWidth": 12,
      "description": "Modele de joueur qui prend les gains immediats sans vraiment proteger le tour suivant."
    },
    {
      "id": "regular",
      "label": "Regulier",
      "skillLabel": "Comprend le controle",
      "rank": 3,
      "botId": "heuristic",
      "searchDepth": 1,
      "beamWidth": 12,
      "description": "Modele de joueur moyen qui valorise les coins, le controle et les fins de round."
    },
    {
      "id": "expert",
      "label": "Expert",
      "skillLabel": "Anticipe les reponses",
      "rank": 4,
      "botId": "heuristic",
      "searchDepth": 2,
      "beamWidth": 10,
      "description": "Modele de joueur solide qui cherche plus loin et evite les contres evidents."
    },
    {
      "id": "champion",
      "label": "Champion",
      "skillLabel": "Profil entraine live",
      "rank": 5,
      "botId": "champion",
      "searchDepth": 3,
      "beamWidth": 8,
      "description": "Modele promu par l'apprentissage self-play, avec fallback heuristique si aucun profil n'est valide."
    }
  ],
  "skillSummaries": [
    {
      "modelId": "beginner",
      "games": 54,
      "wins": 0,
      "losses": 54,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -21.074074074074073
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 63,
      "losses": 45,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 6.953703703703703
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 56,
      "losses": 52,
      "draws": 0,
      "winRate": 0.5185185185185185,
      "averageHpEdge": 0.4166666666666667
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 67,
      "losses": 41,
      "draws": 0,
      "winRate": 0.6203703703703703,
      "averageHpEdge": 3.2777777777777777
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 30,
      "losses": 24,
      "draws": 0,
      "winRate": 0.5555555555555556,
      "averageHpEdge": -0.2222222222222222
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.6666666666666666,
      "averages": {
        "turns": 47.111111111111114,
        "rounds": 5.333333333333333,
        "flipsPerMatch": 16.555555555555557,
        "flipsPerTurn": 0.35141509433962265,
        "reshuffles": 7.944444444444445,
        "deadTurns": 0,
        "finalHpDifference": 7.666666666666667
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (67%)."
      ]
    },
    {
      "deckPresetId": "starter12",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.8888888888888888,
      "averages": {
        "turns": 52.611111111111114,
        "rounds": 5.944444444444445,
        "flipsPerMatch": 20.055555555555557,
        "flipsPerTurn": 0.3812038014783527,
        "reshuffles": 5.944444444444445,
        "deadTurns": 0,
        "finalHpDifference": 6.333333333333333
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (89%)."
      ]
    },
    {
      "deckPresetId": "starter14",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.7777777777777778,
      "averages": {
        "turns": 53.611111111111114,
        "rounds": 6,
        "flipsPerMatch": 17.5,
        "flipsPerTurn": 0.32642487046632124,
        "reshuffles": 4.333333333333333,
        "deadTurns": 0,
        "finalHpDifference": 6.111111111111111
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (78%)."
      ]
    }
  ],
  "ladderPairings": [
    {
      "deckPresetId": "starter10",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 18,
          "wins": 0,
          "losses": 18,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -20.27777777777778
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.27777777777778
        }
      ],
      "averages": {
        "turns": 33.166666666666664,
        "rounds": 3.7222222222222223,
        "flipsPerMatch": 19.5,
        "flipsPerTurn": 0.5879396984924623,
        "reshuffles": 4.777777777777778,
        "deadTurns": 0.3888888888888889,
        "finalHpDifference": 20.27777777777778
      },
      "deadTurnFrequency": 0.011725293132328308
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -8.333333333333334
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 8.333333333333334
        }
      ],
      "averages": {
        "turns": 46.44444444444444,
        "rounds": 5.277777777777778,
        "flipsPerMatch": 29.666666666666668,
        "flipsPerTurn": 0.638755980861244,
        "reshuffles": 7.444444444444445,
        "deadTurns": 0,
        "finalHpDifference": 9.11111111111111
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 8,
          "winRate": 0.8
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.6666666666666666
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -5.555555555555555
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 5.555555555555555
        }
      ],
      "averages": {
        "turns": 47.5,
        "rounds": 5.277777777777778,
        "flipsPerMatch": 19.72222222222222,
        "flipsPerTurn": 0.4152046783625731,
        "reshuffles": 7.833333333333333,
        "deadTurns": 0,
        "finalHpDifference": 8
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 6,
          "winRate": 0.6
        },
        "enemy": {
          "games": 8,
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.6111111111111112
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": 0.16666666666666666
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": -0.16666666666666666
        }
      ],
      "averages": {
        "turns": 46.5,
        "rounds": 5.166666666666667,
        "flipsPerMatch": 24.833333333333332,
        "flipsPerTurn": 0.5340501792114696,
        "reshuffles": 7.388888888888889,
        "deadTurns": 0,
        "finalHpDifference": 8.5
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 18,
          "wins": 0,
          "losses": 18,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -22.11111111111111
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.11111111111111
        }
      ],
      "averages": {
        "turns": 31.72222222222222,
        "rounds": 3.611111111111111,
        "flipsPerMatch": 18.055555555555557,
        "flipsPerTurn": 0.5691768826619965,
        "reshuffles": 3,
        "deadTurns": 0,
        "finalHpDifference": 22.11111111111111
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 8,
          "winRate": 0.8
        },
        "enemy": {
          "games": 8,
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.7222222222222222
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 4,
          "losses": 14,
          "draws": 0,
          "winRate": 0.2222222222222222,
          "averageHpEdge": -6.333333333333333
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 6.333333333333333
        }
      ],
      "averages": {
        "turns": 47.22222222222222,
        "rounds": 5.333333333333333,
        "flipsPerMatch": 29.27777777777778,
        "flipsPerTurn": 0.62,
        "reshuffles": 5.5,
        "deadTurns": 0,
        "finalHpDifference": 8.777777777777779
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 6,
          "winRate": 0.6
        },
        "enemy": {
          "games": 8,
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -6.222222222222222
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 6.222222222222222
        }
      ],
      "averages": {
        "turns": 55.111111111111114,
        "rounds": 6.166666666666667,
        "flipsPerMatch": 20.166666666666668,
        "flipsPerTurn": 0.3659274193548387,
        "reshuffles": 6.5,
        "deadTurns": 0,
        "finalHpDifference": 8
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 8,
          "winRate": 1
        },
        "overallStartingPlayerWinRate": 0.7222222222222222
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": -1.0555555555555556
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": 1.0555555555555556
        }
      ],
      "averages": {
        "turns": 48.5,
        "rounds": 5.388888888888889,
        "flipsPerMatch": 29.555555555555557,
        "flipsPerTurn": 0.6093928980526919,
        "reshuffles": 5.388888888888889,
        "deadTurns": 0,
        "finalHpDifference": 7.388888888888889
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 18,
          "wins": 0,
          "losses": 18,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -20.833333333333332
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.833333333333332
        }
      ],
      "averages": {
        "turns": 32.55555555555556,
        "rounds": 3.8333333333333335,
        "flipsPerMatch": 16.88888888888889,
        "flipsPerTurn": 0.5187713310580204,
        "reshuffles": 2.5,
        "deadTurns": 0,
        "finalHpDifference": 20.833333333333332
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 7,
          "winRate": 0.7
        },
        "enemy": {
          "games": 8,
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.6666666666666666
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -6.833333333333333
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 6.833333333333333
        }
      ],
      "averages": {
        "turns": 50.833333333333336,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 27.72222222222222,
        "flipsPerTurn": 0.5453551912568306,
        "reshuffles": 4.388888888888889,
        "deadTurns": 0,
        "finalHpDifference": 9.277777777777779
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 3,
          "winRate": 0.3
        },
        "enemy": {
          "games": 8,
          "wins": 2,
          "winRate": 0.25
        },
        "overallStartingPlayerWinRate": 0.2777777777777778
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 4,
          "losses": 14,
          "draws": 0,
          "winRate": 0.2222222222222222,
          "averageHpEdge": -7.222222222222222
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 7.222222222222222
        }
      ],
      "averages": {
        "turns": 51,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 19.833333333333332,
        "flipsPerTurn": 0.3888888888888889,
        "reshuffles": 4.611111111111111,
        "deadTurns": 0,
        "finalHpDifference": 8.444444444444445
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 10,
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": 1.5555555555555556
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": -1.5555555555555556
        }
      ],
      "averages": {
        "turns": 53.111111111111114,
        "rounds": 5.944444444444445,
        "flipsPerMatch": 29.666666666666668,
        "flipsPerTurn": 0.5585774058577406,
        "reshuffles": 4.833333333333333,
        "deadTurns": 0,
        "finalHpDifference": 7.777777777777778
      },
      "deadTurnFrequency": 0
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
      {
        "cardId": "heron",
        "name": "Oiselle aubeplume",
        "family": "familiar",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "combo-2",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 2568,
        "played": 413,
        "ignored": 2155,
        "selectionRate": 0.16082554517133957,
        "wins": 215,
        "losses": 198,
        "draws": 0,
        "winRateWhenPlayed": 0.5205811138014528,
        "averageFlips": 0.7239709443099274,
        "failedImpactRate": 0.27602905569007263,
        "averageFlipMargin": 1.411371237458194,
        "averageEffectAmount": 0.513317191283293,
        "averageDamageDealt": 0.45278450363196127,
        "averageDamageTaken": 0.2469733656174334,
        "averageNetDamage": 0.20581113801452786,
        "lethalMoves": 4,
        "roundClosers": 40,
        "byModel": [
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.5056179775280899
          },
          {
            "modelId": "expert",
            "played": 88,
            "winRate": 0.6477272727272727
          },
          {
            "modelId": "opportunist",
            "played": 71,
            "winRate": 0.6056338028169014
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.6410256410256411
          },
          {
            "modelId": "beginner",
            "played": 37,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 171,
            "winRate": 0.49707602339181284
          },
          {
            "deckPresetId": "starter12",
            "played": 130,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter14",
            "played": 112,
            "winRate": 0.5803571428571429
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "foxfire",
        "name": "Requin runefer",
        "family": "familiar",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "combo-3",
          "familiar",
          "flip-1",
          "gain-shield",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 2576,
        "played": 395,
        "ignored": 2181,
        "selectionRate": 0.15333850931677018,
        "wins": 199,
        "losses": 196,
        "draws": 0,
        "winRateWhenPlayed": 0.5037974683544304,
        "averageFlips": 0.5620253164556962,
        "failedImpactRate": 0.4322250639386189,
        "averageFlipMargin": 1.490990990990991,
        "averageEffectAmount": 0.1468354430379747,
        "averageDamageDealt": 0.47848101265822784,
        "averageDamageTaken": 0.27341772151898736,
        "averageNetDamage": 0.2050632911392405,
        "lethalMoves": 7,
        "roundClosers": 43,
        "byModel": [
          {
            "modelId": "regular",
            "played": 168,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 97,
            "winRate": 0.6494845360824743
          },
          {
            "modelId": "opportunist",
            "played": 59,
            "winRate": 0.4406779661016949
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.6046511627906976
          },
          {
            "modelId": "beginner",
            "played": 28,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 142,
            "winRate": 0.5211267605633803
          },
          {
            "deckPresetId": "starter10",
            "played": 138,
            "winRate": 0.4855072463768116
          },
          {
            "deckPresetId": "starter14",
            "played": 115,
            "winRate": 0.5043478260869565
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "owl",
        "name": "Chaton des ronces",
        "family": "familiar",
        "rarity": "common",
        "role": "stabilizer",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "center",
          "familiar",
          "gain-shield",
          "stabilizer"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 2651,
        "played": 388,
        "ignored": 2263,
        "selectionRate": 0.14635986420218786,
        "wins": 166,
        "losses": 222,
        "draws": 0,
        "winRateWhenPlayed": 0.42783505154639173,
        "averageFlips": 0.5463917525773195,
        "failedImpactRate": 0.4143646408839779,
        "averageFlipMargin": 1.2169811320754718,
        "averageEffectAmount": 0.31958762886597936,
        "averageDamageDealt": 0.27835051546391754,
        "averageDamageTaken": 0.2757731958762887,
        "averageNetDamage": 0.002577319587628857,
        "lethalMoves": 3,
        "roundClosers": 31,
        "byModel": [
          {
            "modelId": "regular",
            "played": 155,
            "winRate": 0.4064516129032258
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.5365853658536586
          },
          {
            "modelId": "opportunist",
            "played": 59,
            "winRate": 0.5254237288135594
          },
          {
            "modelId": "champion",
            "played": 52,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "beginner",
            "played": 40,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 144,
            "winRate": 0.4027777777777778
          },
          {
            "deckPresetId": "starter12",
            "played": 132,
            "winRate": 0.42424242424242425
          },
          {
            "deckPresetId": "starter14",
            "played": 112,
            "winRate": 0.4642857142857143
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "quiet-monk",
        "name": "Moine du seuil",
        "family": "human",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 3,
        "minSide": 3,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "center",
          "gain-shield",
          "human"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 2780,
        "played": 304,
        "ignored": 2476,
        "selectionRate": 0.1093525179856115,
        "wins": 153,
        "losses": 151,
        "draws": 0,
        "winRateWhenPlayed": 0.5032894736842105,
        "averageFlips": 0.6085526315789473,
        "failedImpactRate": 0.33212996389891697,
        "averageFlipMargin": 1.0864864864864865,
        "averageEffectAmount": 0.4375,
        "averageDamageDealt": 0.35526315789473684,
        "averageDamageTaken": 0.2236842105263158,
        "averageNetDamage": 0.13157894736842105,
        "lethalMoves": 2,
        "roundClosers": 26,
        "byModel": [
          {
            "modelId": "regular",
            "played": 106,
            "winRate": 0.5094339622641509
          },
          {
            "modelId": "expert",
            "played": 73,
            "winRate": 0.6438356164383562
          },
          {
            "modelId": "opportunist",
            "played": 49,
            "winRate": 0.5510204081632653
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.5681818181818182
          },
          {
            "modelId": "beginner",
            "played": 32,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 115,
            "winRate": 0.5043478260869565
          },
          {
            "deckPresetId": "starter12",
            "played": 99,
            "winRate": 0.45454545454545453
          },
          {
            "deckPresetId": "starter14",
            "played": 90,
            "winRate": 0.5555555555555556
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "tin-oracle",
        "name": "Oracle de fer-blanc",
        "family": "automaton",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "automaton",
          "combo-2",
          "corner",
          "draw-next-turn",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 727,
        "played": 121,
        "ignored": 606,
        "selectionRate": 0.16643741403026135,
        "wins": 49,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.4049586776859504,
        "averageFlips": 0.17355371900826447,
        "failedImpactRate": 0.676923076923077,
        "averageFlipMargin": 1.3333333333333333,
        "averageEffectAmount": 0.371900826446281,
        "averageDamageDealt": 0.1652892561983471,
        "averageDamageTaken": 0.10743801652892562,
        "averageNetDamage": 0.05785123966942149,
        "lethalMoves": 0,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 52,
            "winRate": 0.40384615384615385
          },
          {
            "modelId": "expert",
            "played": 27,
            "winRate": 0.5185185185185185
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.4117647058823529
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 8,
            "winRate": 0.875
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 121,
            "winRate": 0.4049586776859504
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "badger",
        "name": "Poney runique",
        "family": "familiar",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "attacker",
          "corner",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 1591,
        "played": 667,
        "ignored": 924,
        "selectionRate": 0.41923318667504716,
        "wins": 365,
        "losses": 302,
        "draws": 0,
        "winRateWhenPlayed": 0.5472263868065967,
        "averageFlips": 0.27436281859070466,
        "failedImpactRate": 0.5246753246753246,
        "averageFlipMargin": 1.9125683060109289,
        "averageEffectAmount": 1.5637181409295353,
        "averageDamageDealt": 0.38980509745127434,
        "averageDamageTaken": 0.1634182908545727,
        "averageNetDamage": 0.22638680659670163,
        "lethalMoves": 7,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 303,
            "winRate": 0.5577557755775577
          },
          {
            "modelId": "expert",
            "played": 142,
            "winRate": 0.6408450704225352
          },
          {
            "modelId": "opportunist",
            "played": 107,
            "winRate": 0.5607476635514018
          },
          {
            "modelId": "champion",
            "played": 72,
            "winRate": 0.625
          },
          {
            "modelId": "beginner",
            "played": 43,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 255,
            "winRate": 0.5843137254901961
          },
          {
            "deckPresetId": "starter12",
            "played": 224,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter14",
            "played": 188,
            "winRate": 0.5531914893617021
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "rune-mage",
        "name": "Mage des runes",
        "family": "human",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "connector",
          "draw-next-turn",
          "human"
        ],
        "preferredPositions": [],
        "offered": 1721,
        "played": 653,
        "ignored": 1068,
        "selectionRate": 0.37943056362579897,
        "wins": 341,
        "losses": 312,
        "draws": 0,
        "winRateWhenPlayed": 0.5222052067381318,
        "averageFlips": 0.332312404287902,
        "failedImpactRate": 0.5479166666666667,
        "averageFlipMargin": 1.7741935483870968,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.327718223583461,
        "averageDamageTaken": 0.24655436447166923,
        "averageNetDamage": 0.08116385911179175,
        "lethalMoves": 10,
        "roundClosers": 51,
        "byModel": [
          {
            "modelId": "regular",
            "played": 307,
            "winRate": 0.511400651465798
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.6422764227642277
          },
          {
            "modelId": "opportunist",
            "played": 112,
            "winRate": 0.5535714285714286
          },
          {
            "modelId": "champion",
            "played": 69,
            "winRate": 0.6231884057971014
          },
          {
            "modelId": "beginner",
            "played": 42,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 255,
            "winRate": 0.49019607843137253
          },
          {
            "deckPresetId": "starter12",
            "played": 215,
            "winRate": 0.5209302325581395
          },
          {
            "deckPresetId": "starter14",
            "played": 183,
            "winRate": 0.5683060109289617
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "little-abyss",
        "name": "Petit abysse",
        "family": "demon",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "attacker",
          "behind-on-board",
          "deal-damage",
          "demon"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 1659,
        "played": 644,
        "ignored": 1015,
        "selectionRate": 0.3881856540084388,
        "wins": 336,
        "losses": 308,
        "draws": 0,
        "winRateWhenPlayed": 0.5217391304347826,
        "averageFlips": 0.3385093167701863,
        "failedImpactRate": 0.5101123595505618,
        "averageFlipMargin": 1.8440366972477065,
        "averageEffectAmount": 0.8183229813664596,
        "averageDamageDealt": 1.0776397515527951,
        "averageDamageTaken": 0.2080745341614907,
        "averageNetDamage": 0.8695652173913044,
        "lethalMoves": 10,
        "roundClosers": 42,
        "byModel": [
          {
            "modelId": "regular",
            "played": 265,
            "winRate": 0.5132075471698113
          },
          {
            "modelId": "expert",
            "played": 156,
            "winRate": 0.6217948717948718
          },
          {
            "modelId": "opportunist",
            "played": 115,
            "winRate": 0.5217391304347826
          },
          {
            "modelId": "champion",
            "played": 73,
            "winRate": 0.589041095890411
          },
          {
            "modelId": "beginner",
            "played": 35,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 248,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter12",
            "played": 212,
            "winRate": 0.5754716981132075
          },
          {
            "deckPresetId": "starter14",
            "played": 184,
            "winRate": 0.4891304347826087
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "hornling",
        "name": "Cornu farceur",
        "family": "demon",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "adjacent-enemy",
          "anchor",
          "deal-damage",
          "demon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 2054,
        "played": 628,
        "ignored": 1426,
        "selectionRate": 0.305744888023369,
        "wins": 362,
        "losses": 266,
        "draws": 0,
        "winRateWhenPlayed": 0.5764331210191083,
        "averageFlips": 0.5780254777070064,
        "failedImpactRate": 0.49230769230769234,
        "averageFlipMargin": 1.5151515151515151,
        "averageEffectAmount": 0.7277070063694268,
        "averageDamageDealt": 1.3694267515923566,
        "averageDamageTaken": 0.4538216560509554,
        "averageNetDamage": 0.9156050955414012,
        "lethalMoves": 26,
        "roundClosers": 93,
        "byModel": [
          {
            "modelId": "regular",
            "played": 288,
            "winRate": 0.5798611111111112
          },
          {
            "modelId": "expert",
            "played": 140,
            "winRate": 0.6285714285714286
          },
          {
            "modelId": "opportunist",
            "played": 110,
            "winRate": 0.6454545454545455
          },
          {
            "modelId": "champion",
            "played": 59,
            "winRate": 0.6101694915254238
          },
          {
            "modelId": "beginner",
            "played": 31,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 245,
            "winRate": 0.5673469387755102
          },
          {
            "deckPresetId": "starter12",
            "played": 202,
            "winRate": 0.5445544554455446
          },
          {
            "deckPresetId": "starter14",
            "played": 181,
            "winRate": 0.6243093922651933
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "sapling",
        "name": "Floramie toxique",
        "family": "familiar",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "adjacent-ally",
          "anchor",
          "familiar",
          "gain-shield"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 2011,
        "played": 590,
        "ignored": 1421,
        "selectionRate": 0.29338637493784187,
        "wins": 310,
        "losses": 280,
        "draws": 0,
        "winRateWhenPlayed": 0.5254237288135594,
        "averageFlips": 0.3474576271186441,
        "failedImpactRate": 0.5610278372591007,
        "averageFlipMargin": 1.8634146341463416,
        "averageEffectAmount": 0.5474576271186441,
        "averageDamageDealt": 0.5288135593220339,
        "averageDamageTaken": 0.27627118644067794,
        "averageNetDamage": 0.25254237288135595,
        "lethalMoves": 8,
        "roundClosers": 77,
        "byModel": [
          {
            "modelId": "regular",
            "played": 271,
            "winRate": 0.5239852398523985
          },
          {
            "modelId": "expert",
            "played": 156,
            "winRate": 0.6410256410256411
          },
          {
            "modelId": "opportunist",
            "played": 85,
            "winRate": 0.38823529411764707
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.7291666666666666
          },
          {
            "modelId": "beginner",
            "played": 30,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 222,
            "winRate": 0.5315315315315315
          },
          {
            "deckPresetId": "starter12",
            "played": 189,
            "winRate": 0.5343915343915344
          },
          {
            "deckPresetId": "starter14",
            "played": 179,
            "winRate": 0.5083798882681564
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "mole",
        "name": "Ecureuil mineur",
        "family": "familiar",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "adjacent-ally",
          "boost-self",
          "connector",
          "familiar"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 2069,
        "played": 584,
        "ignored": 1485,
        "selectionRate": 0.28226196230062833,
        "wins": 265,
        "losses": 319,
        "draws": 0,
        "winRateWhenPlayed": 0.4537671232876712,
        "averageFlips": 0.4708904109589041,
        "failedImpactRate": 0.4353182751540041,
        "averageFlipMargin": 1.701818181818182,
        "averageEffectAmount": 0.5547945205479452,
        "averageDamageDealt": 0.5462328767123288,
        "averageDamageTaken": 0.3493150684931507,
        "averageNetDamage": 0.1969178082191781,
        "lethalMoves": 6,
        "roundClosers": 73,
        "byModel": [
          {
            "modelId": "regular",
            "played": 275,
            "winRate": 0.46545454545454545
          },
          {
            "modelId": "opportunist",
            "played": 100,
            "winRate": 0.47
          },
          {
            "modelId": "expert",
            "played": 97,
            "winRate": 0.5154639175257731
          },
          {
            "modelId": "champion",
            "played": 77,
            "winRate": 0.5194805194805194
          },
          {
            "modelId": "beginner",
            "played": 35,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 228,
            "winRate": 0.4824561403508772
          },
          {
            "deckPresetId": "starter12",
            "played": 188,
            "winRate": 0.46808510638297873
          },
          {
            "deckPresetId": "starter14",
            "played": 168,
            "winRate": 0.39880952380952384
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "pact-sprite",
        "name": "Lutin a pacte",
        "family": "demon",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "adjacent-enemy",
          "boost-self",
          "connector",
          "demon"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 2004,
        "played": 582,
        "ignored": 1422,
        "selectionRate": 0.2904191616766467,
        "wins": 295,
        "losses": 287,
        "draws": 0,
        "winRateWhenPlayed": 0.506872852233677,
        "averageFlips": 0.5996563573883161,
        "failedImpactRate": 0.39723661485319517,
        "averageFlipMargin": 2.670487106017192,
        "averageEffectAmount": 0.7697594501718213,
        "averageDamageDealt": 0.5051546391752577,
        "averageDamageTaken": 0.33676975945017185,
        "averageNetDamage": 0.16838487972508587,
        "lethalMoves": 4,
        "roundClosers": 68,
        "byModel": [
          {
            "modelId": "regular",
            "played": 258,
            "winRate": 0.49612403100775193
          },
          {
            "modelId": "opportunist",
            "played": 113,
            "winRate": 0.48672566371681414
          },
          {
            "modelId": "expert",
            "played": 112,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "champion",
            "played": 62,
            "winRate": 0.6451612903225806
          },
          {
            "modelId": "beginner",
            "played": 37,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 219,
            "winRate": 0.5662100456621004
          },
          {
            "deckPresetId": "starter12",
            "played": 187,
            "winRate": 0.4919786096256685
          },
          {
            "deckPresetId": "starter14",
            "played": 176,
            "winRate": 0.44886363636363635
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "ash-whisper",
        "name": "Murmure de cendre",
        "family": "demon",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "attacker",
          "demon",
          "draw-next-turn",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 1941,
        "played": 580,
        "ignored": 1361,
        "selectionRate": 0.29881504379185986,
        "wins": 286,
        "losses": 294,
        "draws": 0,
        "winRateWhenPlayed": 0.49310344827586206,
        "averageFlips": 0.4810344827586207,
        "failedImpactRate": 0.41509433962264153,
        "averageFlipMargin": 1.6702508960573477,
        "averageEffectAmount": 0.4810344827586207,
        "averageDamageDealt": 0.27413793103448275,
        "averageDamageTaken": 0.16551724137931034,
        "averageNetDamage": 0.10862068965517241,
        "lethalMoves": 4,
        "roundClosers": 38,
        "byModel": [
          {
            "modelId": "regular",
            "played": 262,
            "winRate": 0.5038167938931297
          },
          {
            "modelId": "expert",
            "played": 113,
            "winRate": 0.5575221238938053
          },
          {
            "modelId": "opportunist",
            "played": 113,
            "winRate": 0.5486725663716814
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 0.5178571428571429
          },
          {
            "modelId": "beginner",
            "played": 36,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 216,
            "winRate": 0.5555555555555556
          },
          {
            "deckPresetId": "starter12",
            "played": 195,
            "winRate": 0.4564102564102564
          },
          {
            "deckPresetId": "starter14",
            "played": 169,
            "winRate": 0.4556213017751479
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "field-knight",
        "name": "Chevaliere des champs",
        "family": "human",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "combo-2",
          "gain-shield",
          "human",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 2313,
        "played": 559,
        "ignored": 1754,
        "selectionRate": 0.24167747514051016,
        "wins": 328,
        "losses": 231,
        "draws": 0,
        "winRateWhenPlayed": 0.5867620751341681,
        "averageFlips": 0.47942754919499103,
        "failedImpactRate": 0.5127272727272727,
        "averageFlipMargin": 1.6753731343283582,
        "averageEffectAmount": 1.6422182468694098,
        "averageDamageDealt": 0.8962432915921288,
        "averageDamageTaken": 0.2844364937388193,
        "averageNetDamage": 0.6118067978533095,
        "lethalMoves": 19,
        "roundClosers": 115,
        "byModel": [
          {
            "modelId": "regular",
            "played": 224,
            "winRate": 0.5892857142857143
          },
          {
            "modelId": "expert",
            "played": 121,
            "winRate": 0.71900826446281
          },
          {
            "modelId": "opportunist",
            "played": 115,
            "winRate": 0.5652173913043478
          },
          {
            "modelId": "champion",
            "played": 65,
            "winRate": 0.676923076923077
          },
          {
            "modelId": "beginner",
            "played": 34,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 207,
            "winRate": 0.6376811594202898
          },
          {
            "deckPresetId": "starter12",
            "played": 188,
            "winRate": 0.5585106382978723
          },
          {
            "deckPresetId": "starter14",
            "played": 164,
            "winRate": 0.5548780487804879
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "brimstone-tot",
        "name": "Bambin soufre",
        "family": "demon",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "attacker",
          "center",
          "deal-damage",
          "demon"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 2108,
        "played": 535,
        "ignored": 1573,
        "selectionRate": 0.25379506641366223,
        "wins": 243,
        "losses": 292,
        "draws": 0,
        "winRateWhenPlayed": 0.4542056074766355,
        "averageFlips": 0.4785046728971963,
        "failedImpactRate": 0.371007371007371,
        "averageFlipMargin": 1.43359375,
        "averageEffectAmount": 0.30280373831775703,
        "averageDamageDealt": 0.6261682242990654,
        "averageDamageTaken": 0.2261682242990654,
        "averageNetDamage": 0.39999999999999997,
        "lethalMoves": 8,
        "roundClosers": 40,
        "byModel": [
          {
            "modelId": "regular",
            "played": 233,
            "winRate": 0.4721030042918455
          },
          {
            "modelId": "opportunist",
            "played": 99,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "expert",
            "played": 96,
            "winRate": 0.59375
          },
          {
            "modelId": "champion",
            "played": 65,
            "winRate": 0.49230769230769234
          },
          {
            "modelId": "beginner",
            "played": 42,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 189,
            "winRate": 0.49206349206349204
          },
          {
            "deckPresetId": "starter12",
            "played": 184,
            "winRate": 0.40217391304347827
          },
          {
            "deckPresetId": "starter14",
            "played": 162,
            "winRate": 0.4691358024691358
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "ember-imp",
        "name": "Diablotin braise",
        "family": "demon",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "attacker",
          "deal-damage",
          "demon",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 2156,
        "played": 534,
        "ignored": 1622,
        "selectionRate": 0.24768089053803338,
        "wins": 253,
        "losses": 281,
        "draws": 0,
        "winRateWhenPlayed": 0.4737827715355805,
        "averageFlips": 0.6966292134831461,
        "failedImpactRate": 0.3541666666666667,
        "averageFlipMargin": 1.6612903225806452,
        "averageEffectAmount": 0.5711610486891385,
        "averageDamageDealt": 0.9662921348314607,
        "averageDamageTaken": 0.32771535580524347,
        "averageNetDamage": 0.6385767790262172,
        "lethalMoves": 8,
        "roundClosers": 52,
        "byModel": [
          {
            "modelId": "regular",
            "played": 209,
            "winRate": 0.49282296650717705
          },
          {
            "modelId": "expert",
            "played": 112,
            "winRate": 0.5357142857142857
          },
          {
            "modelId": "opportunist",
            "played": 105,
            "winRate": 0.5523809523809524
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 44,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 213,
            "winRate": 0.460093896713615
          },
          {
            "deckPresetId": "starter12",
            "played": 182,
            "winRate": 0.46153846153846156
          },
          {
            "deckPresetId": "starter14",
            "played": 139,
            "winRate": 0.5107913669064749
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "path-ranger",
        "name": "Rodeuse du sentier",
        "family": "human",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "adjacent-ally",
          "attacker",
          "boost-self",
          "human"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 2244,
        "played": 524,
        "ignored": 1720,
        "selectionRate": 0.23351158645276293,
        "wins": 255,
        "losses": 269,
        "draws": 0,
        "winRateWhenPlayed": 0.4866412213740458,
        "averageFlips": 0.48854961832061067,
        "failedImpactRate": 0.4272930648769575,
        "averageFlipMargin": 1.65234375,
        "averageEffectAmount": 0.5534351145038168,
        "averageDamageDealt": 0.4675572519083969,
        "averageDamageTaken": 0.32633587786259544,
        "averageNetDamage": 0.14122137404580148,
        "lethalMoves": 5,
        "roundClosers": 57,
        "byModel": [
          {
            "modelId": "regular",
            "played": 212,
            "winRate": 0.5424528301886793
          },
          {
            "modelId": "expert",
            "played": 131,
            "winRate": 0.5954198473282443
          },
          {
            "modelId": "opportunist",
            "played": 104,
            "winRate": 0.40384615384615385
          },
          {
            "modelId": "beginner",
            "played": 39,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.5263157894736842
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 197,
            "winRate": 0.45685279187817257
          },
          {
            "deckPresetId": "starter12",
            "played": 164,
            "winRate": 0.5365853658536586
          },
          {
            "deckPresetId": "starter14",
            "played": 163,
            "winRate": 0.4723926380368098
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "gate-thief",
        "name": "Voleuse des portes",
        "family": "human",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "attacker",
          "draw-next-turn",
          "flip-1",
          "human"
        ],
        "preferredPositions": [],
        "offered": 2230,
        "played": 514,
        "ignored": 1716,
        "selectionRate": 0.2304932735426009,
        "wins": 265,
        "losses": 249,
        "draws": 0,
        "winRateWhenPlayed": 0.5155642023346303,
        "averageFlips": 0.7801556420233463,
        "failedImpactRate": 0.2877442273534636,
        "averageFlipMargin": 1.571072319201995,
        "averageEffectAmount": 0.7801556420233463,
        "averageDamageDealt": 0.3657587548638132,
        "averageDamageTaken": 0.2178988326848249,
        "averageNetDamage": 0.1478599221789883,
        "lethalMoves": 5,
        "roundClosers": 41,
        "byModel": [
          {
            "modelId": "regular",
            "played": 221,
            "winRate": 0.5429864253393665
          },
          {
            "modelId": "expert",
            "played": 108,
            "winRate": 0.6203703703703703
          },
          {
            "modelId": "opportunist",
            "played": 96,
            "winRate": 0.5520833333333334
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "beginner",
            "played": 44,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 194,
            "winRate": 0.4845360824742268
          },
          {
            "deckPresetId": "starter12",
            "played": 179,
            "winRate": 0.5027932960893855
          },
          {
            "deckPresetId": "starter14",
            "played": 141,
            "winRate": 0.574468085106383
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "banner-squire",
        "name": "Ecuyere banniere",
        "family": "human",
        "rarity": "common",
        "role": "engine",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "adjacent-ally",
          "combo-2",
          "engine",
          "gain-shield",
          "human"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 2295,
        "played": 512,
        "ignored": 1783,
        "selectionRate": 0.22309368191721132,
        "wins": 257,
        "losses": 255,
        "draws": 0,
        "winRateWhenPlayed": 0.501953125,
        "averageFlips": 0.50390625,
        "failedImpactRate": 0.44989339019189767,
        "averageFlipMargin": 1.4612403100775193,
        "averageEffectAmount": 0.49609375,
        "averageDamageDealt": 0.775390625,
        "averageDamageTaken": 0.39453125,
        "averageNetDamage": 0.380859375,
        "lethalMoves": 10,
        "roundClosers": 95,
        "byModel": [
          {
            "modelId": "regular",
            "played": 216,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 117,
            "winRate": 0.6324786324786325
          },
          {
            "modelId": "opportunist",
            "played": 83,
            "winRate": 0.4457831325301205
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.59375
          },
          {
            "modelId": "beginner",
            "played": 32,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 179,
            "winRate": 0.5027932960893855
          },
          {
            "deckPresetId": "starter10",
            "played": 178,
            "winRate": 0.550561797752809
          },
          {
            "deckPresetId": "starter14",
            "played": 155,
            "winRate": 0.44516129032258067
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "stag",
        "name": "Herisson lumisylve",
        "family": "familiar",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "draw-next-turn"
        ],
        "buildTags": [
          "center",
          "connector",
          "draw-next-turn",
          "familiar"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 2285,
        "played": 451,
        "ignored": 1834,
        "selectionRate": 0.19737417943107222,
        "wins": 203,
        "losses": 248,
        "draws": 0,
        "winRateWhenPlayed": 0.4501108647450111,
        "averageFlips": 0.4079822616407982,
        "failedImpactRate": 0.3825503355704698,
        "averageFlipMargin": 1.608695652173913,
        "averageEffectAmount": 0.2727272727272727,
        "averageDamageDealt": 0.3148558758314856,
        "averageDamageTaken": 0.13303769401330376,
        "averageNetDamage": 0.18181818181818185,
        "lethalMoves": 3,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 198,
            "winRate": 0.4898989898989899
          },
          {
            "modelId": "expert",
            "played": 95,
            "winRate": 0.5789473684210527
          },
          {
            "modelId": "opportunist",
            "played": 83,
            "winRate": 0.37349397590361444
          },
          {
            "modelId": "beginner",
            "played": 39,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.5555555555555556
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 168,
            "winRate": 0.39285714285714285
          },
          {
            "deckPresetId": "starter12",
            "played": 162,
            "winRate": 0.5246913580246914
          },
          {
            "deckPresetId": "starter14",
            "played": 121,
            "winRate": 0.4297520661157025
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "cinder-grin",
        "name": "Sourire de suie",
        "family": "demon",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "combo-3",
          "deal-damage",
          "demon",
          "flip-2",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 2451,
        "played": 445,
        "ignored": 2006,
        "selectionRate": 0.18155854753161974,
        "wins": 209,
        "losses": 236,
        "draws": 0,
        "winRateWhenPlayed": 0.4696629213483146,
        "averageFlips": 0.4449438202247191,
        "failedImpactRate": 0.484375,
        "averageFlipMargin": 1.595959595959596,
        "averageEffectAmount": 0.02696629213483146,
        "averageDamageDealt": 0.5932584269662922,
        "averageDamageTaken": 0.39775280898876403,
        "averageNetDamage": 0.19550561797752813,
        "lethalMoves": 6,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 202,
            "winRate": 0.4752475247524752
          },
          {
            "modelId": "expert",
            "played": 89,
            "winRate": 0.6292134831460674
          },
          {
            "modelId": "opportunist",
            "played": 66,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "champion",
            "played": 46,
            "winRate": 0.5869565217391305
          },
          {
            "modelId": "beginner",
            "played": 42,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 164,
            "winRate": 0.4451219512195122
          },
          {
            "deckPresetId": "starter12",
            "played": 150,
            "winRate": 0.5266666666666666
          },
          {
            "deckPresetId": "starter14",
            "played": 131,
            "winRate": 0.4351145038167939
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "clock-sentinel",
        "name": "Sentinelle d'horloge",
        "family": "automaton",
        "rarity": "common",
        "role": "anchor",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "automaton",
          "corner",
          "gain-shield"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 1112,
        "played": 389,
        "ignored": 723,
        "selectionRate": 0.3498201438848921,
        "wins": 229,
        "losses": 160,
        "draws": 0,
        "winRateWhenPlayed": 0.5886889460154242,
        "averageFlips": 0.2493573264781491,
        "failedImpactRate": 0.5610859728506787,
        "averageFlipMargin": 1.7835051546391754,
        "averageEffectAmount": 1.5681233933161953,
        "averageDamageDealt": 0.36503856041131105,
        "averageDamageTaken": 0.16709511568123395,
        "averageNetDamage": 0.1979434447300771,
        "lethalMoves": 6,
        "roundClosers": 35,
        "byModel": [
          {
            "modelId": "regular",
            "played": 175,
            "winRate": 0.56
          },
          {
            "modelId": "expert",
            "played": 81,
            "winRate": 0.7160493827160493
          },
          {
            "modelId": "opportunist",
            "played": 71,
            "winRate": 0.6056338028169014
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.6976744186046512
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 199,
            "winRate": 0.6080402010050251
          },
          {
            "deckPresetId": "starter14",
            "played": 190,
            "winRate": 0.5684210526315789
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "hearth-archer",
        "name": "Archer du foyer",
        "family": "human",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 1,
        "effectKinds": [
          "deal-damage"
        ],
        "buildTags": [
          "attacker",
          "deal-damage",
          "flip-1",
          "human"
        ],
        "preferredPositions": [],
        "offered": 1158,
        "played": 386,
        "ignored": 772,
        "selectionRate": 0.3333333333333333,
        "wins": 220,
        "losses": 166,
        "draws": 0,
        "winRateWhenPlayed": 0.5699481865284974,
        "averageFlips": 0.7772020725388601,
        "failedImpactRate": 0.25925925925925924,
        "averageFlipMargin": 1.4666666666666666,
        "averageEffectAmount": 0.5492227979274611,
        "averageDamageDealt": 1.0207253886010363,
        "averageDamageTaken": 0.33419689119170987,
        "averageNetDamage": 0.6865284974093264,
        "lethalMoves": 5,
        "roundClosers": 41,
        "byModel": [
          {
            "modelId": "regular",
            "played": 169,
            "winRate": 0.5502958579881657
          },
          {
            "modelId": "expert",
            "played": 87,
            "winRate": 0.7011494252873564
          },
          {
            "modelId": "opportunist",
            "played": 66,
            "winRate": 0.5909090909090909
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.6923076923076923
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 200,
            "winRate": 0.585
          },
          {
            "deckPresetId": "starter14",
            "played": 186,
            "winRate": 0.553763440860215
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "gear-monk",
        "name": "Moine engrene",
        "family": "automaton",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "adjacent-ally",
          "automaton",
          "connector",
          "gain-shield"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 1413,
        "played": 370,
        "ignored": 1043,
        "selectionRate": 0.2618542108987969,
        "wins": 194,
        "losses": 176,
        "draws": 0,
        "winRateWhenPlayed": 0.5243243243243243,
        "averageFlips": 0.33783783783783783,
        "failedImpactRate": 0.625748502994012,
        "averageFlipMargin": 1.224,
        "averageEffectAmount": 0.6837837837837838,
        "averageDamageDealt": 0.8405405405405405,
        "averageDamageTaken": 0.5,
        "averageNetDamage": 0.3405405405405405,
        "lethalMoves": 11,
        "roundClosers": 79,
        "byModel": [
          {
            "modelId": "regular",
            "played": 171,
            "winRate": 0.5087719298245614
          },
          {
            "modelId": "expert",
            "played": 100,
            "winRate": 0.66
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.5434782608695652
          },
          {
            "modelId": "champion",
            "played": 30,
            "winRate": 0.5333333333333333
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 185,
            "winRate": 0.5837837837837838
          },
          {
            "deckPresetId": "starter12",
            "played": 185,
            "winRate": 0.4648648648648649
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "brass-rook",
        "name": "Tour de laiton",
        "family": "automaton",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "attacker",
          "automaton",
          "boost-self",
          "combo-2",
          "corner"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 1544,
        "played": 300,
        "ignored": 1244,
        "selectionRate": 0.19430051813471502,
        "wins": 157,
        "losses": 143,
        "draws": 0,
        "winRateWhenPlayed": 0.5233333333333333,
        "averageFlips": 0.49,
        "failedImpactRate": 0.45353159851301117,
        "averageFlipMargin": 1.3537414965986394,
        "averageEffectAmount": 0.2833333333333333,
        "averageDamageDealt": 0.5333333333333333,
        "averageDamageTaken": 0.31666666666666665,
        "averageNetDamage": 0.21666666666666667,
        "lethalMoves": 5,
        "roundClosers": 35,
        "byModel": [
          {
            "modelId": "regular",
            "played": 130,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "expert",
            "played": 72,
            "winRate": 0.625
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.5535714285714286
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.4074074074074074
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 154,
            "winRate": 0.4935064935064935
          },
          {
            "deckPresetId": "starter12",
            "played": 146,
            "winRate": 0.5547945205479452
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "spring-knave",
        "name": "Valet ressort",
        "family": "automaton",
        "rarity": "common",
        "role": "connector",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "automaton",
          "behind-on-board",
          "boost-self",
          "connector"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 499,
        "played": 187,
        "ignored": 312,
        "selectionRate": 0.374749498997996,
        "wins": 93,
        "losses": 94,
        "draws": 0,
        "winRateWhenPlayed": 0.49732620320855614,
        "averageFlips": 0.36363636363636365,
        "failedImpactRate": 0.575,
        "averageFlipMargin": 2.2941176470588234,
        "averageEffectAmount": 0.9144385026737968,
        "averageDamageDealt": 0.48663101604278075,
        "averageDamageTaken": 0.32620320855614976,
        "averageNetDamage": 0.160427807486631,
        "lethalMoves": 5,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "regular",
            "played": 77,
            "winRate": 0.5064935064935064
          },
          {
            "modelId": "expert",
            "played": 52,
            "winRate": 0.5961538461538461
          },
          {
            "modelId": "opportunist",
            "played": 29,
            "winRate": 0.4827586206896552
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0.5625
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 187,
            "winRate": 0.49732620320855614
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "copper-beetle",
        "name": "Scarabee cuivre",
        "family": "automaton",
        "rarity": "common",
        "role": "stabilizer",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "automaton",
          "center",
          "gain-shield",
          "stabilizer"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 687,
        "played": 145,
        "ignored": 542,
        "selectionRate": 0.21106259097525473,
        "wins": 73,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.503448275862069,
        "averageFlips": 0.4689655172413793,
        "failedImpactRate": 0.45161290322580644,
        "averageFlipMargin": 1.2941176470588236,
        "averageEffectAmount": 0.22758620689655173,
        "averageDamageDealt": 0.6482758620689655,
        "averageDamageTaken": 0.32413793103448274,
        "averageNetDamage": 0.32413793103448274,
        "lethalMoves": 2,
        "roundClosers": 18,
        "byModel": [
          {
            "modelId": "regular",
            "played": 60,
            "winRate": 0.5666666666666667
          },
          {
            "modelId": "expert",
            "played": 30,
            "winRate": 0.6333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 27,
            "winRate": 0.37037037037037035
          },
          {
            "modelId": "champion",
            "played": 20,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 145,
            "winRate": 0.503448275862069
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "glass-warden",
        "name": "Gardien de verre",
        "family": "automaton",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "attacker",
          "automaton",
          "flip-1",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 695,
        "played": 139,
        "ignored": 556,
        "selectionRate": 0.2,
        "wins": 68,
        "losses": 71,
        "draws": 0,
        "winRateWhenPlayed": 0.4892086330935252,
        "averageFlips": 0.5467625899280576,
        "failedImpactRate": 0.4108527131782946,
        "averageFlipMargin": 1.263157894736842,
        "averageEffectAmount": 0.5467625899280576,
        "averageDamageDealt": 0.5179856115107914,
        "averageDamageTaken": 0.2446043165467626,
        "averageNetDamage": 0.27338129496402874,
        "lethalMoves": 0,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 66,
            "winRate": 0.4696969696969697
          },
          {
            "modelId": "expert",
            "played": 30,
            "winRate": 0.6
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "opportunist",
            "played": 18,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 7,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 139,
            "winRate": 0.4892086330935252
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      }
    ],
    "familyAnalytics": [
      {
        "id": "demon",
        "label": "demon",
        "offered": 14373,
        "played": 3948,
        "ignored": 10425,
        "selectionRate": 0.2746816948445001,
        "wins": 1984,
        "losses": 1964,
        "draws": 0,
        "winRateWhenPlayed": 0.502532928064843,
        "averageFlips": 0.5154508611955421,
        "averageDamageDealt": 0.7907801418439716,
        "averageNetDamage": 0.4908814589665653,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 644,
            "winRateWhenPlayed": 0.5217391304347826
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 628,
            "winRateWhenPlayed": 0.5764331210191083
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 582,
            "winRateWhenPlayed": 0.506872852233677
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 580,
            "winRateWhenPlayed": 0.49310344827586206
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 535,
            "winRateWhenPlayed": 0.4542056074766355
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "familiar",
        "label": "familiar",
        "offered": 15751,
        "played": 3488,
        "ignored": 12263,
        "selectionRate": 0.2214462573804838,
        "wins": 1723,
        "losses": 1765,
        "draws": 0,
        "winRateWhenPlayed": 0.49397935779816515,
        "averageFlips": 0.45298165137614677,
        "averageDamageDealt": 0.4349197247706422,
        "averageNetDamage": 0.19036697247706424,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 667,
            "winRateWhenPlayed": 0.5472263868065967
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 590,
            "winRateWhenPlayed": 0.5254237288135594
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 584,
            "winRateWhenPlayed": 0.4537671232876712
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 451,
            "winRateWhenPlayed": 0.4501108647450111
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 413,
            "winRateWhenPlayed": 0.5205811138014528
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "human",
        "label": "human",
        "offered": 14741,
        "played": 3452,
        "ignored": 11289,
        "selectionRate": 0.234176785835425,
        "wins": 1819,
        "losses": 1633,
        "draws": 0,
        "winRateWhenPlayed": 0.5269409038238703,
        "averageFlips": 0.5460602549246814,
        "averageDamageDealt": 0.592989571263036,
        "averageNetDamage": 0.3027230590961762,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 653,
            "winRateWhenPlayed": 0.5222052067381318
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 559,
            "winRateWhenPlayed": 0.5867620751341681
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 524,
            "winRateWhenPlayed": 0.4866412213740458
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 514,
            "winRateWhenPlayed": 0.5155642023346303
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 512,
            "winRateWhenPlayed": 0.501953125
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "automaton",
        "label": "automaton",
        "offered": 6677,
        "played": 1651,
        "ignored": 5026,
        "selectionRate": 0.2472667365583346,
        "wins": 863,
        "losses": 788,
        "draws": 0,
        "winRateWhenPlayed": 0.5227135069654755,
        "averageFlips": 0.3646274984857662,
        "averageDamageDealt": 0.5390672319806178,
        "averageNetDamage": 0.23622047244094485,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 389,
            "winRateWhenPlayed": 0.5886889460154242
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 370,
            "winRateWhenPlayed": 0.5243243243243243
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 300,
            "winRateWhenPlayed": 0.5233333333333333
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 187,
            "winRateWhenPlayed": 0.49732620320855614
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 145,
            "winRateWhenPlayed": 0.503448275862069
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      }
    ],
    "roleAnalytics": [
      {
        "id": "sans-role",
        "label": "sans role",
        "offered": 24706,
        "played": 6442,
        "ignored": 18264,
        "selectionRate": 0.2607463773982029,
        "wins": 3363,
        "losses": 3079,
        "draws": 0,
        "winRateWhenPlayed": 0.5220428438373176,
        "averageFlips": 0.48044085687674637,
        "averageDamageDealt": 0.6851909344923937,
        "averageNetDamage": 0.3711580254579323,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 401,
            "winRateWhenPlayed": 0.5660847880299252
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 384,
            "winRateWhenPlayed": 0.5390625
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 376,
            "winRateWhenPlayed": 0.5398936170212766
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 362,
            "winRateWhenPlayed": 0.5883977900552486
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 338,
            "winRateWhenPlayed": 0.5266272189349113
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "attacker",
        "label": "attacker",
        "offered": 8221,
        "played": 2270,
        "ignored": 5951,
        "selectionRate": 0.27612212626201194,
        "wins": 1121,
        "losses": 1149,
        "draws": 0,
        "winRateWhenPlayed": 0.49383259911894273,
        "averageFlips": 0.5118942731277533,
        "averageDamageDealt": 0.539647577092511,
        "averageNetDamage": 0.3180616740088106,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 268,
            "winRateWhenPlayed": 0.4962686567164179
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 266,
            "winRateWhenPlayed": 0.518796992481203
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 266,
            "winRateWhenPlayed": 0.48872180451127817
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 265,
            "winRateWhenPlayed": 0.5169811320754717
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 261,
            "winRateWhenPlayed": 0.46360153256704983
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "connector",
        "label": "connector",
        "offered": 6538,
        "played": 1534,
        "ignored": 5004,
        "selectionRate": 0.2346283267054145,
        "wins": 739,
        "losses": 795,
        "draws": 0,
        "winRateWhenPlayed": 0.4817470664928292,
        "averageFlips": 0.485006518904824,
        "averageDamageDealt": 0.39113428943937417,
        "averageNetDamage": 0.13820078226857885,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 269,
            "winRateWhenPlayed": 0.49814126394052044
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 262,
            "winRateWhenPlayed": 0.5305343511450382
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 258,
            "winRateWhenPlayed": 0.44573643410852715
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 246,
            "winRateWhenPlayed": 0.45934959349593496
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 239,
            "winRateWhenPlayed": 0.4811715481171548
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "anchor",
        "label": "anchor",
        "offered": 4305,
        "played": 900,
        "ignored": 3405,
        "selectionRate": 0.20905923344947736,
        "wins": 494,
        "losses": 406,
        "draws": 0,
        "winRateWhenPlayed": 0.5488888888888889,
        "averageFlips": 0.47444444444444445,
        "averageDamageDealt": 0.6577777777777778,
        "averageNetDamage": 0.40444444444444444,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 266,
            "winRateWhenPlayed": 0.5601503759398496
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 252,
            "winRateWhenPlayed": 0.5238095238095238
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 204,
            "winRateWhenPlayed": 0.47549019607843135
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 178,
            "winRateWhenPlayed": 0.651685393258427
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "payoff",
        "label": "payoff",
        "offered": 4575,
        "played": 827,
        "ignored": 3748,
        "selectionRate": 0.18076502732240438,
        "wins": 411,
        "losses": 416,
        "draws": 0,
        "winRateWhenPlayed": 0.4969770253929867,
        "averageFlips": 0.44740024183796856,
        "averageDamageDealt": 0.5296251511487303,
        "averageNetDamage": 0.2841596130592503,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 262,
            "winRateWhenPlayed": 0.5152671755725191
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 252,
            "winRateWhenPlayed": 0.503968253968254
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 235,
            "winRateWhenPlayed": 0.5063829787234042
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 78,
            "winRateWhenPlayed": 0.38461538461538464
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "stabilizer",
        "label": "stabilizer",
        "offered": 2062,
        "played": 309,
        "ignored": 1753,
        "selectionRate": 0.1498545101842871,
        "wins": 141,
        "losses": 168,
        "draws": 0,
        "winRateWhenPlayed": 0.4563106796116505,
        "averageFlips": 0.5339805825242718,
        "averageDamageDealt": 0.3818770226537217,
        "averageNetDamage": 0.06796116504854371,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 230,
            "winRateWhenPlayed": 0.4652173913043478
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 79,
            "winRateWhenPlayed": 0.43037974683544306
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "engine",
        "label": "engine",
        "offered": 1135,
        "played": 257,
        "ignored": 878,
        "selectionRate": 0.226431718061674,
        "wins": 120,
        "losses": 137,
        "draws": 0,
        "winRateWhenPlayed": 0.4669260700389105,
        "averageFlips": 0.5408560311284046,
        "averageDamageDealt": 0.7354085603112841,
        "averageNetDamage": 0.3579766536964981,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 257,
            "winRateWhenPlayed": 0.4669260700389105
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      }
    ],
    "rarityAnalytics": [
      {
        "id": "common",
        "label": "common",
        "offered": 51542,
        "played": 12539,
        "ignored": 39003,
        "selectionRate": 0.24327732722827985,
        "wins": 6389,
        "losses": 6150,
        "draws": 0,
        "winRateWhenPlayed": 0.5095302655714172,
        "averageFlips": 0.48664167796475,
        "averageDamageDealt": 0.6041949118749501,
        "averageNetDamage": 0.3219554988436079,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 667,
            "winRateWhenPlayed": 0.5472263868065967
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 653,
            "winRateWhenPlayed": 0.5222052067381318
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 644,
            "winRateWhenPlayed": 0.5217391304347826
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 628,
            "winRateWhenPlayed": 0.5764331210191083
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 590,
            "winRateWhenPlayed": 0.5254237288135594
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      }
    ],
    "comboAnalytics": [
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 959,
        "wins": 506,
        "losses": 453,
        "draws": 0,
        "winRate": 0.5276329509906152,
        "averageFlips": 0.5933263816475496,
        "averageDamageDealt": 0.6329509906152242,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 938,
        "wins": 477,
        "losses": 461,
        "draws": 0,
        "winRate": 0.5085287846481876,
        "averageFlips": 0.6492537313432836,
        "averageDamageDealt": 0.8987206823027718,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 908,
        "wins": 442,
        "losses": 466,
        "draws": 0,
        "winRate": 0.486784140969163,
        "averageFlips": 0.539647577092511,
        "averageDamageDealt": 0.9328193832599119,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 878,
        "wins": 436,
        "losses": 442,
        "draws": 0,
        "winRate": 0.49658314350797267,
        "averageFlips": 0.5250569476082004,
        "averageDamageDealt": 0.4886104783599089,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 862,
        "wins": 491,
        "losses": 371,
        "draws": 0,
        "winRate": 0.5696055684454756,
        "averageFlips": 0.6160092807424594,
        "averageDamageDealt": 0.7865429234338747,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 784,
        "wins": 384,
        "losses": 400,
        "draws": 0,
        "winRate": 0.4897959183673469,
        "averageFlips": 0.5625,
        "averageDamageDealt": 0.5943877551020408,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 763,
        "wins": 381,
        "losses": 382,
        "draws": 0,
        "winRate": 0.49934469200524245,
        "averageFlips": 0.617300131061599,
        "averageDamageDealt": 0.9541284403669725,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 710,
        "wins": 358,
        "losses": 352,
        "draws": 0,
        "winRate": 0.504225352112676,
        "averageFlips": 0.5197183098591549,
        "averageDamageDealt": 0.6535211267605634,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 687,
        "wins": 328,
        "losses": 359,
        "draws": 0,
        "winRate": 0.4774381368267831,
        "averageFlips": 0.5502183406113537,
        "averageDamageDealt": 0.6739446870451238,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 653,
        "wins": 341,
        "losses": 312,
        "draws": 0,
        "winRate": 0.5222052067381318,
        "averageFlips": 0.332312404287902,
        "averageDamageDealt": 0.327718223583461,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 631,
        "wins": 329,
        "losses": 302,
        "draws": 0,
        "winRate": 0.5213946117274167,
        "averageFlips": 0.34072900158478603,
        "averageDamageDealt": 1.0998415213946118,
        "averageEffectAmount": 0.8351822503961965,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 616,
        "wins": 363,
        "losses": 253,
        "draws": 0,
        "winRate": 0.5892857142857143,
        "averageFlips": 0.4707792207792208,
        "averageDamageDealt": 1.0844155844155845,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 598,
        "wins": 354,
        "losses": 244,
        "draws": 0,
        "winRate": 0.5919732441471572,
        "averageFlips": 0.637123745819398,
        "averageDamageDealt": 1.2073578595317727,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 595,
        "wins": 355,
        "losses": 240,
        "draws": 0,
        "winRate": 0.5966386554621849,
        "averageFlips": 0.6100840336134454,
        "averageDamageDealt": 1.4453781512605042,
        "averageEffectAmount": 0.7680672268907563,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 591,
        "wins": 388,
        "losses": 203,
        "draws": 0,
        "winRate": 0.6565143824027073,
        "averageFlips": 0.6209813874788495,
        "averageDamageDealt": 1.2385786802030456,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 549,
        "wins": 290,
        "losses": 259,
        "draws": 0,
        "winRate": 0.5282331511839709,
        "averageFlips": 0.4444444444444444,
        "averageDamageDealt": 0.9817850637522769,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 522,
        "wins": 311,
        "losses": 211,
        "draws": 0,
        "winRate": 0.5957854406130269,
        "averageFlips": 0.1781609195402299,
        "averageDamageDealt": 0.36590038314176243,
        "averageEffectAmount": 1.9980842911877394,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+demon",
        "kind": "friendly-adjacent",
        "label": "familiar allie + demon",
        "count": 498,
        "wins": 283,
        "losses": 215,
        "draws": 0,
        "winRate": 0.5682730923694779,
        "averageFlips": 0.5261044176706827,
        "averageDamageDealt": 1.644578313253012,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 462,
        "wins": 290,
        "losses": 172,
        "draws": 0,
        "winRate": 0.6277056277056277,
        "averageFlips": 0.45021645021645024,
        "averageDamageDealt": 1.1363636363636365,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 448,
        "wins": 230,
        "losses": 218,
        "draws": 0,
        "winRate": 0.5133928571428571,
        "averageFlips": 0.75,
        "averageDamageDealt": 0.6026785714285714,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 443,
        "wins": 252,
        "losses": 191,
        "draws": 0,
        "winRate": 0.5688487584650113,
        "averageFlips": 0.5507900677200903,
        "averageDamageDealt": 1.4830699774266365,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gate-thief:draw-next-turn",
        "kind": "effect",
        "label": "Voleuse des portes -> draw-next-turn",
        "count": 394,
        "wins": 224,
        "losses": 170,
        "draws": 0,
        "winRate": 0.5685279187817259,
        "averageFlips": 1.017766497461929,
        "averageDamageDealt": 0.4365482233502538,
        "averageEffectAmount": 1.017766497461929,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->automaton",
        "kind": "family-chain",
        "label": "demon -> automaton",
        "count": 387,
        "wins": 198,
        "losses": 189,
        "draws": 0,
        "winRate": 0.5116279069767442,
        "averageFlips": 0.42377260981912146,
        "averageDamageDealt": 0.6459948320413437,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 371,
        "wins": 249,
        "losses": 122,
        "draws": 0,
        "winRate": 0.6711590296495957,
        "averageFlips": 0.4743935309973046,
        "averageDamageDealt": 1.2264150943396226,
        "averageEffectAmount": 2.4743935309973044,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2780,
        "id": "card-quiet-monk-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Moine du seuil est ignoree par les bots",
        "detail": "2780 offres, 11% selection, role anchor.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2651,
        "id": "card-owl-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Chaton des ronces est ignoree par les bots",
        "detail": "2651 offres, 15% selection, role stabilizer.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2576,
        "id": "card-foxfire-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Requin runefer est ignoree par les bots",
        "detail": "2576 offres, 15% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2568,
        "id": "card-heron-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "2568 offres, 16% selection, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 727,
        "id": "card-tin-oracle-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oracle de fer-blanc est ignoree par les bots",
        "detail": "727 offres, 17% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 2062,
        "id": "role-stabilizer-buff",
        "severity": "watch",
        "action": "verify",
        "title": "stabilizer manque d'attraction",
        "detail": "2062 offres, 15% selection, 46% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 448,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "448 occurrences, 51% win, 0.75 flips, 0.60 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gate-thief:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 394,
        "title": "Voleuse des portes -> draw-next-turn ressort comme combo",
        "detail": "394 occurrences, 57% win, 1.02 flips, 0.44 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "deck-starter10-problem",
      "severity": "problem",
      "title": "starter10 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (67%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "deck-starter12-problem",
      "severity": "problem",
      "title": "starter12 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (89%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "deck-starter14-problem",
      "severity": "problem",
      "title": "starter14 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (78%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "diagnostic-card-quiet-monk-ignored",
      "severity": "problem",
      "title": "Moine du seuil est ignoree par les bots",
      "detail": "2780 offres, 11% selection, role anchor. Confiance high, echantillon 2780.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-owl-ignored",
      "severity": "problem",
      "title": "Chaton des ronces est ignoree par les bots",
      "detail": "2651 offres, 15% selection, role stabilizer. Confiance high, echantillon 2651.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-foxfire-ignored",
      "severity": "problem",
      "title": "Requin runefer est ignoree par les bots",
      "detail": "2576 offres, 15% selection, role payoff. Confiance high, echantillon 2576.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "problem",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "2568 offres, 16% selection, role connector. Confiance high, echantillon 2568.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "deck-turn-spread",
      "severity": "watch",
      "title": "La taille de deck change fortement le rythme",
      "detail": "Ecart de 6.50 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    }
  ]
};
