import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260519-212620",
  "generatedAt": "2026-05-19T21:26:20.599Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 10,
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
      "averageHpEdge": -23.25925925925926
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 58,
      "losses": 50,
      "draws": 0,
      "winRate": 0.5370370370370371,
      "averageHpEdge": 6.5092592592592595
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 55,
      "losses": 53,
      "draws": 0,
      "winRate": 0.5092592592592593,
      "averageHpEdge": 0.07407407407407407
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 74,
      "losses": 34,
      "draws": 0,
      "winRate": 0.6851851851851852,
      "averageHpEdge": 4.611111111111111
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 29,
      "losses": 25,
      "draws": 0,
      "winRate": 0.5370370370370371,
      "averageHpEdge": 0.8703703703703703
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
        "turns": 64,
        "rounds": 7.166666666666667,
        "flipsPerMatch": 23.72222222222222,
        "flipsPerTurn": 0.3706597222222222,
        "reshuffles": 10.833333333333334,
        "deadTurns": 0.3888888888888889,
        "finalHpDifference": 11.11111111111111
      },
      "deadTurnFrequency": 0.006076388888888889,
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
      "startingPlayerWinRate": 0.6666666666666666,
      "averages": {
        "turns": 76.61111111111111,
        "rounds": 8.61111111111111,
        "flipsPerMatch": 27.61111111111111,
        "flipsPerTurn": 0.3604060913705584,
        "reshuffles": 10.055555555555555,
        "deadTurns": 0.16666666666666666,
        "finalHpDifference": 7.111111111111111
      },
      "deadTurnFrequency": 0.002175489485134155,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (67%)."
      ]
    },
    {
      "deckPresetId": "starter14",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5555555555555556,
      "averages": {
        "turns": 79.88888888888889,
        "rounds": 9.055555555555555,
        "flipsPerMatch": 27.11111111111111,
        "flipsPerTurn": 0.33936022253129344,
        "reshuffles": 7.888888888888889,
        "deadTurns": 0,
        "finalHpDifference": 6.166666666666667
      },
      "deadTurnFrequency": 0,
      "status": "healthy",
      "notes": [
        "Ouverture stable sur ce deck."
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
          "averageHpEdge": -24.11111111111111
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 24.11111111111111
        }
      ],
      "averages": {
        "turns": 33.166666666666664,
        "rounds": 3.611111111111111,
        "flipsPerMatch": 17.166666666666668,
        "flipsPerTurn": 0.5175879396984925,
        "reshuffles": 3.888888888888889,
        "deadTurns": 1.1666666666666667,
        "finalHpDifference": 24.11111111111111
      },
      "deadTurnFrequency": 0.035175879396984924
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
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.4444444444444444
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -12.166666666666666
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 12.166666666666666
        }
      ],
      "averages": {
        "turns": 56.72222222222222,
        "rounds": 6.5,
        "flipsPerMatch": 31.166666666666668,
        "flipsPerTurn": 0.5494613124387855,
        "reshuffles": 9.5,
        "deadTurns": 0.5,
        "finalHpDifference": 12.38888888888889
      },
      "deadTurnFrequency": 0.00881488736532811
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
          "modelId": "regular",
          "games": 18,
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -10.11111111111111
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 10.11111111111111
        }
      ],
      "averages": {
        "turns": 63.77777777777778,
        "rounds": 7.111111111111111,
        "flipsPerMatch": 26.944444444444443,
        "flipsPerTurn": 0.42247386759581884,
        "reshuffles": 11,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 11.88888888888889
      },
      "deadTurnFrequency": 0.0008710801393728223
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
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -2.2777777777777777
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 2.2777777777777777
        }
      ],
      "averages": {
        "turns": 63.166666666666664,
        "rounds": 7.111111111111111,
        "flipsPerMatch": 35.27777777777778,
        "flipsPerTurn": 0.5584872471416007,
        "reshuffles": 11.38888888888889,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 8.944444444444445
      },
      "deadTurnFrequency": 0.0008795074758135445
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
          "averageHpEdge": -23.333333333333332
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 23.333333333333332
        }
      ],
      "averages": {
        "turns": 35.27777777777778,
        "rounds": 3.9444444444444446,
        "flipsPerMatch": 19.944444444444443,
        "flipsPerTurn": 0.5653543307086614,
        "reshuffles": 3.5,
        "deadTurns": 0.1111111111111111,
        "finalHpDifference": 23.333333333333332
      },
      "deadTurnFrequency": 0.0031496062992125984
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
          "modelId": "opportunist",
          "games": 18,
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -9.11111111111111
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 9.11111111111111
        }
      ],
      "averages": {
        "turns": 61.888888888888886,
        "rounds": 7,
        "flipsPerMatch": 36.388888888888886,
        "flipsPerTurn": 0.5879712746858169,
        "reshuffles": 8.055555555555555,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 10.333333333333334
      },
      "deadTurnFrequency": 0.0008976660682226212
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
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.6111111111111112
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -10.11111111111111
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 10.11111111111111
        }
      ],
      "averages": {
        "turns": 62.05555555555556,
        "rounds": 6.944444444444445,
        "flipsPerMatch": 23.72222222222222,
        "flipsPerTurn": 0.38227394807520143,
        "reshuffles": 7.277777777777778,
        "deadTurns": 0,
        "finalHpDifference": 11
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
          "wins": 7,
          "winRate": 0.7
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.6111111111111112
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": 2.111111111111111
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": -2.111111111111111
        }
      ],
      "averages": {
        "turns": 63.94444444444444,
        "rounds": 7.277777777777778,
        "flipsPerMatch": 36.5,
        "flipsPerTurn": 0.5708079930495221,
        "reshuffles": 7.944444444444445,
        "deadTurns": 0,
        "finalHpDifference": 6.555555555555555
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
          "averageHpEdge": -22.333333333333332
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.333333333333332
        }
      ],
      "averages": {
        "turns": 37.333333333333336,
        "rounds": 4.277777777777778,
        "flipsPerMatch": 21.333333333333332,
        "flipsPerTurn": 0.5714285714285714,
        "reshuffles": 3.0555555555555554,
        "deadTurns": 0,
        "finalHpDifference": 22.333333333333332
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
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.4444444444444444
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -9.444444444444445
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 9.444444444444445
        }
      ],
      "averages": {
        "turns": 68.61111111111111,
        "rounds": 7.666666666666667,
        "flipsPerMatch": 38.833333333333336,
        "flipsPerTurn": 0.5659919028340081,
        "reshuffles": 7.166666666666667,
        "deadTurns": 0.16666666666666666,
        "finalHpDifference": 9.88888888888889
      },
      "deadTurnFrequency": 0.0024291497975708503
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
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.4444444444444444
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -10.055555555555555
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 10.055555555555555
        }
      ],
      "averages": {
        "turns": 68.72222222222223,
        "rounds": 7.777777777777778,
        "flipsPerMatch": 26,
        "flipsPerTurn": 0.37833468067906223,
        "reshuffles": 6.666666666666667,
        "deadTurns": 0,
        "finalHpDifference": 10.61111111111111
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
          "wins": 2,
          "winRate": 0.25
        },
        "overallStartingPlayerWinRate": 0.3888888888888889
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 6,
          "losses": 12,
          "draws": 0,
          "winRate": 0.3333333333333333,
          "averageHpEdge": -2.4444444444444446
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 12,
          "losses": 6,
          "draws": 0,
          "winRate": 0.6666666666666666,
          "averageHpEdge": 2.4444444444444446
        }
      ],
      "averages": {
        "turns": 70,
        "rounds": 7.777777777777778,
        "flipsPerMatch": 40.388888888888886,
        "flipsPerTurn": 0.5769841269841269,
        "reshuffles": 7.055555555555555,
        "deadTurns": 0,
        "finalHpDifference": 5.222222222222222
      },
      "deadTurnFrequency": 0
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
        "offered": 3583,
        "played": 593,
        "ignored": 2990,
        "selectionRate": 0.1655037677923528,
        "wins": 313,
        "losses": 280,
        "draws": 0,
        "winRateWhenPlayed": 0.5278246205733558,
        "averageFlips": 0.5362563237774031,
        "failedImpactRate": 0.5589459084604715,
        "averageFlipMargin": 1.3396226415094339,
        "averageEffectAmount": 0.39291736930860033,
        "averageDamageDealt": 1.209106239460371,
        "averageDamageTaken": 0.5075885328836425,
        "averageNetDamage": 0.7015177065767286,
        "lethalMoves": 20,
        "roundClosers": 136,
        "byModel": [
          {
            "modelId": "regular",
            "played": 224,
            "winRate": 0.5089285714285714
          },
          {
            "modelId": "expert",
            "played": 145,
            "winRate": 0.7103448275862069
          },
          {
            "modelId": "champion",
            "played": 96,
            "winRate": 0.5520833333333334
          },
          {
            "modelId": "opportunist",
            "played": 95,
            "winRate": 0.45263157894736844
          },
          {
            "modelId": "beginner",
            "played": 33,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 219,
            "winRate": 0.4931506849315068
          },
          {
            "deckPresetId": "starter14",
            "played": 191,
            "winRate": 0.5654450261780105
          },
          {
            "deckPresetId": "starter12",
            "played": 183,
            "winRate": 0.5300546448087432
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "minSide": 1,
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
        "offered": 3378,
        "played": 577,
        "ignored": 2801,
        "selectionRate": 0.17081113084665484,
        "wins": 262,
        "losses": 315,
        "draws": 0,
        "winRateWhenPlayed": 0.4540727902946274,
        "averageFlips": 0.5996533795493935,
        "failedImpactRate": 0.4214046822742475,
        "averageFlipMargin": 1.6242774566473988,
        "averageEffectAmount": 0.268630849220104,
        "averageDamageDealt": 0.6568457538994801,
        "averageDamageTaken": 0.2322357019064125,
        "averageNetDamage": 0.42461005199306756,
        "lethalMoves": 4,
        "roundClosers": 61,
        "byModel": [
          {
            "modelId": "regular",
            "played": 236,
            "winRate": 0.4533898305084746
          },
          {
            "modelId": "expert",
            "played": 128,
            "winRate": 0.6015625
          },
          {
            "modelId": "opportunist",
            "played": 86,
            "winRate": 0.46511627906976744
          },
          {
            "modelId": "champion",
            "played": 80,
            "winRate": 0.475
          },
          {
            "modelId": "beginner",
            "played": 47,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 198,
            "winRate": 0.45454545454545453
          },
          {
            "deckPresetId": "starter12",
            "played": 196,
            "winRate": 0.4387755102040816
          },
          {
            "deckPresetId": "starter14",
            "played": 183,
            "winRate": 0.46994535519125685
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 2239,
        "played": 358,
        "ignored": 1881,
        "selectionRate": 0.15989280928986155,
        "wins": 162,
        "losses": 196,
        "draws": 0,
        "winRateWhenPlayed": 0.45251396648044695,
        "averageFlips": 0.3994413407821229,
        "failedImpactRate": 0.5342019543973942,
        "averageFlipMargin": 1.1608391608391608,
        "averageEffectAmount": 0.6927374301675978,
        "averageDamageDealt": 0.40502793296089384,
        "averageDamageTaken": 0.39106145251396646,
        "averageNetDamage": 0.013966480446927387,
        "lethalMoves": 3,
        "roundClosers": 63,
        "byModel": [
          {
            "modelId": "regular",
            "played": 165,
            "winRate": 0.43636363636363634
          },
          {
            "modelId": "expert",
            "played": 83,
            "winRate": 0.6385542168674698
          },
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.26666666666666666
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.5681818181818182
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 179,
            "winRate": 0.4692737430167598
          },
          {
            "deckPresetId": "starter12",
            "played": 179,
            "winRate": 0.43575418994413406
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
        "offered": 2212,
        "played": 859,
        "ignored": 1353,
        "selectionRate": 0.3883363471971067,
        "wins": 480,
        "losses": 379,
        "draws": 0,
        "winRateWhenPlayed": 0.5587892898719441,
        "averageFlips": 0.2479627473806752,
        "failedImpactRate": 0.5213483146067416,
        "averageFlipMargin": 1.7136150234741785,
        "averageEffectAmount": 1.6041909196740396,
        "averageDamageDealt": 0.19557625145518046,
        "averageDamageTaken": 0.08149010477299184,
        "averageNetDamage": 0.11408614668218861,
        "lethalMoves": 7,
        "roundClosers": 54,
        "byModel": [
          {
            "modelId": "regular",
            "played": 407,
            "winRate": 0.5700245700245701
          },
          {
            "modelId": "expert",
            "played": 186,
            "winRate": 0.6989247311827957
          },
          {
            "modelId": "opportunist",
            "played": 135,
            "winRate": 0.45185185185185184
          },
          {
            "modelId": "champion",
            "played": 90,
            "winRate": 0.6333333333333333
          },
          {
            "modelId": "beginner",
            "played": 41,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 314,
            "winRate": 0.5923566878980892
          },
          {
            "deckPresetId": "starter12",
            "played": 281,
            "winRate": 0.498220640569395
          },
          {
            "deckPresetId": "starter14",
            "played": 264,
            "winRate": 0.5833333333333334
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
          "attacker",
          "boost-self",
          "human"
        ],
        "preferredPositions": [],
        "offered": 2363,
        "played": 839,
        "ignored": 1524,
        "selectionRate": 0.35505713076597545,
        "wins": 442,
        "losses": 397,
        "draws": 0,
        "winRateWhenPlayed": 0.5268176400476758,
        "averageFlips": 0.5065554231227652,
        "failedImpactRate": 0.3521341463414634,
        "averageFlipMargin": 1.6494117647058824,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.24910607866507747,
        "averageDamageTaken": 0.12157330154946365,
        "averageNetDamage": 0.12753277711561384,
        "lethalMoves": 10,
        "roundClosers": 58,
        "byModel": [
          {
            "modelId": "regular",
            "played": 406,
            "winRate": 0.5467980295566502
          },
          {
            "modelId": "expert",
            "played": 184,
            "winRate": 0.6793478260869565
          },
          {
            "modelId": "opportunist",
            "played": 129,
            "winRate": 0.3953488372093023
          },
          {
            "modelId": "champion",
            "played": 76,
            "winRate": 0.5789473684210527
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
            "played": 330,
            "winRate": 0.5696969696969697
          },
          {
            "deckPresetId": "starter12",
            "played": 272,
            "winRate": 0.5257352941176471
          },
          {
            "deckPresetId": "starter14",
            "played": 237,
            "winRate": 0.46835443037974683
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
          "familiar",
          "gain-shield",
          "stabilizer"
        ],
        "preferredPositions": [],
        "offered": 2551,
        "played": 803,
        "ignored": 1748,
        "selectionRate": 0.31477851822814584,
        "wins": 365,
        "losses": 438,
        "draws": 0,
        "winRateWhenPlayed": 0.45454545454545453,
        "averageFlips": 0.3150684931506849,
        "failedImpactRate": 0.5726351351351351,
        "averageFlipMargin": 1.33201581027668,
        "averageEffectAmount": 0.9987546699875467,
        "averageDamageDealt": 0.30884184308841844,
        "averageDamageTaken": 0.22042341220423411,
        "averageNetDamage": 0.08841843088418433,
        "lethalMoves": 8,
        "roundClosers": 102,
        "byModel": [
          {
            "modelId": "regular",
            "played": 367,
            "winRate": 0.4550408719346049
          },
          {
            "modelId": "expert",
            "played": 183,
            "winRate": 0.6229508196721312
          },
          {
            "modelId": "opportunist",
            "played": 112,
            "winRate": 0.32142857142857145
          },
          {
            "modelId": "champion",
            "played": 98,
            "winRate": 0.4897959183673469
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
            "played": 285,
            "winRate": 0.43508771929824563
          },
          {
            "deckPresetId": "starter12",
            "played": 264,
            "winRate": 0.4772727272727273
          },
          {
            "deckPresetId": "starter14",
            "played": 254,
            "winRate": 0.452755905511811
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
          "combo-1",
          "engine",
          "gain-shield",
          "human"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 3068,
        "played": 741,
        "ignored": 2327,
        "selectionRate": 0.24152542372881355,
        "wins": 373,
        "losses": 368,
        "draws": 0,
        "winRateWhenPlayed": 0.5033738191632928,
        "averageFlips": 0.41700404858299595,
        "failedImpactRate": 0.5442477876106194,
        "averageFlipMargin": 1.4466019417475728,
        "averageEffectAmount": 1.2375168690958165,
        "averageDamageDealt": 0.5006747638326585,
        "averageDamageTaken": 0.3252361673414305,
        "averageNetDamage": 0.175438596491228,
        "lethalMoves": 8,
        "roundClosers": 137,
        "byModel": [
          {
            "modelId": "regular",
            "played": 355,
            "winRate": 0.49295774647887325
          },
          {
            "modelId": "expert",
            "played": 166,
            "winRate": 0.6325301204819277
          },
          {
            "modelId": "opportunist",
            "played": 118,
            "winRate": 0.5338983050847458
          },
          {
            "modelId": "champion",
            "played": 63,
            "winRate": 0.47619047619047616
          },
          {
            "modelId": "beginner",
            "played": 39,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 295,
            "winRate": 0.48135593220338985
          },
          {
            "deckPresetId": "starter12",
            "played": 243,
            "winRate": 0.5679012345679012
          },
          {
            "deckPresetId": "starter14",
            "played": 203,
            "winRate": 0.458128078817734
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "gain-shield"
        ],
        "buildTags": [
          "anchor",
          "gain-shield",
          "human"
        ],
        "preferredPositions": [],
        "offered": 2788,
        "played": 732,
        "ignored": 2056,
        "selectionRate": 0.26255380200860834,
        "wins": 393,
        "losses": 339,
        "draws": 0,
        "winRateWhenPlayed": 0.5368852459016393,
        "averageFlips": 0.35792349726775957,
        "failedImpactRate": 0.5626043405676127,
        "averageFlipMargin": 1.3358778625954197,
        "averageEffectAmount": 0.9986338797814208,
        "averageDamageDealt": 0.3360655737704918,
        "averageDamageTaken": 0.2390710382513661,
        "averageNetDamage": 0.09699453551912568,
        "lethalMoves": 7,
        "roundClosers": 91,
        "byModel": [
          {
            "modelId": "regular",
            "played": 328,
            "winRate": 0.5365853658536586
          },
          {
            "modelId": "expert",
            "played": 184,
            "winRate": 0.7119565217391305
          },
          {
            "modelId": "opportunist",
            "played": 100,
            "winRate": 0.39
          },
          {
            "modelId": "champion",
            "played": 90,
            "winRate": 0.5222222222222223
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
            "played": 277,
            "winRate": 0.5740072202166066
          },
          {
            "deckPresetId": "starter12",
            "played": 239,
            "winRate": 0.4560669456066946
          },
          {
            "deckPresetId": "starter14",
            "played": 216,
            "winRate": 0.5787037037037037
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
        "offered": 2574,
        "played": 728,
        "ignored": 1846,
        "selectionRate": 0.2828282828282828,
        "wins": 358,
        "losses": 370,
        "draws": 0,
        "winRateWhenPlayed": 0.49175824175824173,
        "averageFlips": 0.32005494505494503,
        "failedImpactRate": 0.5693160813308688,
        "averageFlipMargin": 1.6566523605150214,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.21153846153846154,
        "averageDamageTaken": 0.125,
        "averageNetDamage": 0.08653846153846154,
        "lethalMoves": 4,
        "roundClosers": 47,
        "byModel": [
          {
            "modelId": "regular",
            "played": 374,
            "winRate": 0.48128342245989303
          },
          {
            "modelId": "opportunist",
            "played": 127,
            "winRate": 0.4251968503937008
          },
          {
            "modelId": "expert",
            "played": 125,
            "winRate": 0.704
          },
          {
            "modelId": "champion",
            "played": 68,
            "winRate": 0.5294117647058824
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
            "played": 260,
            "winRate": 0.5038461538461538
          },
          {
            "deckPresetId": "starter12",
            "played": 244,
            "winRate": 0.5409836065573771
          },
          {
            "deckPresetId": "starter14",
            "played": 224,
            "winRate": 0.42410714285714285
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
        "offered": 2634,
        "played": 718,
        "ignored": 1916,
        "selectionRate": 0.27258921791951407,
        "wins": 367,
        "losses": 351,
        "draws": 0,
        "winRateWhenPlayed": 0.5111420612813371,
        "averageFlips": 0.298050139275766,
        "failedImpactRate": 0.5169300225733634,
        "averageFlipMargin": 1.8037383177570094,
        "averageEffectAmount": 0.649025069637883,
        "averageDamageDealt": 0.8760445682451253,
        "averageDamageTaken": 0.19498607242339833,
        "averageNetDamage": 0.681058495821727,
        "lethalMoves": 7,
        "roundClosers": 55,
        "byModel": [
          {
            "modelId": "regular",
            "played": 296,
            "winRate": 0.5135135135135135
          },
          {
            "modelId": "expert",
            "played": 175,
            "winRate": 0.6857142857142857
          },
          {
            "modelId": "opportunist",
            "played": 118,
            "winRate": 0.3898305084745763
          },
          {
            "modelId": "champion",
            "played": 88,
            "winRate": 0.5568181818181818
          },
          {
            "modelId": "beginner",
            "played": 41,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 264,
            "winRate": 0.5151515151515151
          },
          {
            "deckPresetId": "starter12",
            "played": 241,
            "winRate": 0.5394190871369294
          },
          {
            "deckPresetId": "starter14",
            "played": 213,
            "winRate": 0.47417840375586856
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
        "offered": 3112,
        "played": 689,
        "ignored": 2423,
        "selectionRate": 0.22140102827763497,
        "wins": 380,
        "losses": 309,
        "draws": 0,
        "winRateWhenPlayed": 0.5515239477503628,
        "averageFlips": 0.5108853410740203,
        "failedImpactRate": 0.5076923076923077,
        "averageFlipMargin": 1.6278409090909092,
        "averageEffectAmount": 1.8635703918722786,
        "averageDamageDealt": 0.5776487663280117,
        "averageDamageTaken": 0.15965166908563136,
        "averageNetDamage": 0.4179970972423803,
        "lethalMoves": 14,
        "roundClosers": 130,
        "byModel": [
          {
            "modelId": "regular",
            "played": 310,
            "winRate": 0.5290322580645161
          },
          {
            "modelId": "expert",
            "played": 143,
            "winRate": 0.7062937062937062
          },
          {
            "modelId": "opportunist",
            "played": 126,
            "winRate": 0.5079365079365079
          },
          {
            "modelId": "champion",
            "played": 75,
            "winRate": 0.68
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
            "played": 265,
            "winRate": 0.5660377358490566
          },
          {
            "deckPresetId": "starter12",
            "played": 224,
            "winRate": 0.5267857142857143
          },
          {
            "deckPresetId": "starter14",
            "played": 200,
            "winRate": 0.56
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
        "offered": 2937,
        "played": 675,
        "ignored": 2262,
        "selectionRate": 0.22982635342185903,
        "wins": 315,
        "losses": 360,
        "draws": 0,
        "winRateWhenPlayed": 0.4666666666666667,
        "averageFlips": 0.6474074074074074,
        "failedImpactRate": 0.38966480446927376,
        "averageFlipMargin": 2.8810068649885583,
        "averageEffectAmount": 0.7644444444444445,
        "averageDamageDealt": 0.3762962962962963,
        "averageDamageTaken": 0.26222222222222225,
        "averageNetDamage": 0.11407407407407405,
        "lethalMoves": 2,
        "roundClosers": 84,
        "byModel": [
          {
            "modelId": "regular",
            "played": 305,
            "winRate": 0.46557377049180326
          },
          {
            "modelId": "expert",
            "played": 145,
            "winRate": 0.6620689655172414
          },
          {
            "modelId": "opportunist",
            "played": 115,
            "winRate": 0.3826086956521739
          },
          {
            "modelId": "champion",
            "played": 71,
            "winRate": 0.4647887323943662
          },
          {
            "modelId": "beginner",
            "played": 39,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 239,
            "winRate": 0.4895397489539749
          },
          {
            "deckPresetId": "starter12",
            "played": 222,
            "winRate": 0.4369369369369369
          },
          {
            "deckPresetId": "starter14",
            "played": 214,
            "winRate": 0.4719626168224299
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
        "offered": 3029,
        "played": 648,
        "ignored": 2381,
        "selectionRate": 0.2139319907560251,
        "wins": 288,
        "losses": 360,
        "draws": 0,
        "winRateWhenPlayed": 0.4444444444444444,
        "averageFlips": 0.5308641975308642,
        "failedImpactRate": 0.392226148409894,
        "averageFlipMargin": 1.5261627906976745,
        "averageEffectAmount": 0.5308641975308642,
        "averageDamageDealt": 0.20679012345679013,
        "averageDamageTaken": 0.15432098765432098,
        "averageNetDamage": 0.05246913580246915,
        "lethalMoves": 4,
        "roundClosers": 45,
        "byModel": [
          {
            "modelId": "regular",
            "played": 311,
            "winRate": 0.41479099678456594
          },
          {
            "modelId": "expert",
            "played": 120,
            "winRate": 0.6333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 120,
            "winRate": 0.4583333333333333
          },
          {
            "modelId": "champion",
            "played": 60,
            "winRate": 0.4666666666666667
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
            "played": 245,
            "winRate": 0.3795918367346939
          },
          {
            "deckPresetId": "starter12",
            "played": 205,
            "winRate": 0.44878048780487806
          },
          {
            "deckPresetId": "starter14",
            "played": 198,
            "winRate": 0.5202020202020202
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
        "offered": 3036,
        "played": 647,
        "ignored": 2389,
        "selectionRate": 0.21310935441370224,
        "wins": 330,
        "losses": 317,
        "draws": 0,
        "winRateWhenPlayed": 0.5100463678516228,
        "averageFlips": 0.3400309119010819,
        "failedImpactRate": 0.5546558704453441,
        "averageFlipMargin": 1.7545454545454546,
        "averageEffectAmount": 0.5255023183925811,
        "averageDamageDealt": 0.3616692426584235,
        "averageDamageTaken": 0.25193199381761977,
        "averageNetDamage": 0.10973724884080371,
        "lethalMoves": 5,
        "roundClosers": 82,
        "byModel": [
          {
            "modelId": "regular",
            "played": 296,
            "winRate": 0.5371621621621622
          },
          {
            "modelId": "expert",
            "played": 162,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 86,
            "winRate": 0.313953488372093
          },
          {
            "modelId": "champion",
            "played": 74,
            "winRate": 0.4864864864864865
          },
          {
            "modelId": "beginner",
            "played": 29,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 237,
            "winRate": 0.45569620253164556
          },
          {
            "deckPresetId": "starter12",
            "played": 214,
            "winRate": 0.5093457943925234
          },
          {
            "deckPresetId": "starter14",
            "played": 196,
            "winRate": 0.576530612244898
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
        "offered": 3138,
        "played": 643,
        "ignored": 2495,
        "selectionRate": 0.20490758444869345,
        "wins": 324,
        "losses": 319,
        "draws": 0,
        "winRateWhenPlayed": 0.5038880248833593,
        "averageFlips": 0.8149300155520995,
        "failedImpactRate": 0.2802197802197802,
        "averageFlipMargin": 1.5095419847328244,
        "averageEffectAmount": 0.8149300155520995,
        "averageDamageDealt": 0.2581648522550544,
        "averageDamageTaken": 0.20373250388802489,
        "averageNetDamage": 0.05443234836702954,
        "lethalMoves": 3,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 292,
            "winRate": 0.5342465753424658
          },
          {
            "modelId": "opportunist",
            "played": 135,
            "winRate": 0.4148148148148148
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.6910569105691057
          },
          {
            "modelId": "champion",
            "played": 60,
            "winRate": 0.45
          },
          {
            "modelId": "beginner",
            "played": 33,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 253,
            "winRate": 0.48221343873517786
          },
          {
            "deckPresetId": "starter12",
            "played": 197,
            "winRate": 0.5532994923857868
          },
          {
            "deckPresetId": "starter14",
            "played": 193,
            "winRate": 0.48186528497409326
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
          "combo-1",
          "familiar",
          "flip-1",
          "gain-shield",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 3347,
        "played": 642,
        "ignored": 2705,
        "selectionRate": 0.19181356438601732,
        "wins": 345,
        "losses": 297,
        "draws": 0,
        "winRateWhenPlayed": 0.5373831775700935,
        "averageFlips": 0.7492211838006231,
        "failedImpactRate": 0.35175202156334234,
        "averageFlipMargin": 1.5800415800415801,
        "averageEffectAmount": 1.1713395638629283,
        "averageDamageDealt": 0.3629283489096573,
        "averageDamageTaken": 0.19937694704049844,
        "averageNetDamage": 0.16355140186915887,
        "lethalMoves": 5,
        "roundClosers": 83,
        "byModel": [
          {
            "modelId": "regular",
            "played": 277,
            "winRate": 0.5054151624548736
          },
          {
            "modelId": "expert",
            "played": 149,
            "winRate": 0.738255033557047
          },
          {
            "modelId": "opportunist",
            "played": 93,
            "winRate": 0.5053763440860215
          },
          {
            "modelId": "champion",
            "played": 79,
            "winRate": 0.6075949367088608
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
            "played": 229,
            "winRate": 0.5545851528384279
          },
          {
            "deckPresetId": "starter12",
            "played": 224,
            "winRate": 0.5535714285714286
          },
          {
            "deckPresetId": "starter14",
            "played": 189,
            "winRate": 0.4973544973544973
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
        "offered": 3171,
        "played": 636,
        "ignored": 2535,
        "selectionRate": 0.20056764427625354,
        "wins": 301,
        "losses": 335,
        "draws": 0,
        "winRateWhenPlayed": 0.47327044025157233,
        "averageFlips": 0.42138364779874216,
        "failedImpactRate": 0.5,
        "averageFlipMargin": 1.6828358208955223,
        "averageEffectAmount": 0.6226415094339622,
        "averageDamageDealt": 0.41037735849056606,
        "averageDamageTaken": 0.15251572327044025,
        "averageNetDamage": 0.25786163522012584,
        "lethalMoves": 8,
        "roundClosers": 72,
        "byModel": [
          {
            "modelId": "regular",
            "played": 315,
            "winRate": 0.41904761904761906
          },
          {
            "modelId": "expert",
            "played": 132,
            "winRate": 0.6515151515151515
          },
          {
            "modelId": "opportunist",
            "played": 107,
            "winRate": 0.5046728971962616
          },
          {
            "modelId": "champion",
            "played": 55,
            "winRate": 0.5272727272727272
          },
          {
            "modelId": "beginner",
            "played": 27,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 229,
            "winRate": 0.45414847161572053
          },
          {
            "deckPresetId": "starter12",
            "played": 221,
            "winRate": 0.502262443438914
          },
          {
            "deckPresetId": "starter14",
            "played": 186,
            "winRate": 0.46236559139784944
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
          "adjacent-ally",
          "connector",
          "draw-next-turn",
          "familiar"
        ],
        "preferredPositions": [
          "adjacent"
        ],
        "offered": 3069,
        "played": 630,
        "ignored": 2439,
        "selectionRate": 0.20527859237536658,
        "wins": 321,
        "losses": 309,
        "draws": 0,
        "winRateWhenPlayed": 0.5095238095238095,
        "averageFlips": 0.43492063492063493,
        "failedImpactRate": 0.46588693957115007,
        "averageFlipMargin": 1.5766423357664234,
        "averageEffectAmount": 0.5682539682539682,
        "averageDamageDealt": 0.5206349206349207,
        "averageDamageTaken": 0.2523809523809524,
        "averageNetDamage": 0.2682539682539683,
        "lethalMoves": 5,
        "roundClosers": 89,
        "byModel": [
          {
            "modelId": "regular",
            "played": 300,
            "winRate": 0.54
          },
          {
            "modelId": "expert",
            "played": 116,
            "winRate": 0.6379310344827587
          },
          {
            "modelId": "opportunist",
            "played": 111,
            "winRate": 0.42342342342342343
          },
          {
            "modelId": "champion",
            "played": 69,
            "winRate": 0.5507246376811594
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
            "played": 236,
            "winRate": 0.538135593220339
          },
          {
            "deckPresetId": "starter12",
            "played": 205,
            "winRate": 0.47317073170731705
          },
          {
            "deckPresetId": "starter14",
            "played": 189,
            "winRate": 0.5132275132275133
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
          "combo-1",
          "deal-damage",
          "demon",
          "flip-1",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 3335,
        "played": 629,
        "ignored": 2706,
        "selectionRate": 0.18860569715142428,
        "wins": 318,
        "losses": 311,
        "draws": 0,
        "winRateWhenPlayed": 0.505564387917329,
        "averageFlips": 0.6311605723370429,
        "failedImpactRate": 0.40657698056801195,
        "averageFlipMargin": 1.602015113350126,
        "averageEffectAmount": 0.397456279809221,
        "averageDamageDealt": 0.9141494435612083,
        "averageDamageTaken": 0.31319554848966613,
        "averageNetDamage": 0.6009538950715422,
        "lethalMoves": 11,
        "roundClosers": 84,
        "byModel": [
          {
            "modelId": "regular",
            "played": 263,
            "winRate": 0.49809885931558934
          },
          {
            "modelId": "expert",
            "played": 134,
            "winRate": 0.6791044776119403
          },
          {
            "modelId": "opportunist",
            "played": 107,
            "winRate": 0.4766355140186916
          },
          {
            "modelId": "champion",
            "played": 78,
            "winRate": 0.5769230769230769
          },
          {
            "modelId": "beginner",
            "played": 47,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 220,
            "winRate": 0.5045454545454545
          },
          {
            "deckPresetId": "starter12",
            "played": 218,
            "winRate": 0.481651376146789
          },
          {
            "deckPresetId": "starter14",
            "played": 191,
            "winRate": 0.5340314136125655
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
        "offered": 3088,
        "played": 620,
        "ignored": 2468,
        "selectionRate": 0.20077720207253885,
        "wins": 328,
        "losses": 292,
        "draws": 0,
        "winRateWhenPlayed": 0.5290322580645161,
        "averageFlips": 0.45483870967741935,
        "failedImpactRate": 0.3411214953271028,
        "averageFlipMargin": 1.450354609929078,
        "averageEffectAmount": 0.6709677419354839,
        "averageDamageDealt": 0.8467741935483871,
        "averageDamageTaken": 0.08548387096774193,
        "averageNetDamage": 0.7612903225806452,
        "lethalMoves": 25,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 236,
            "winRate": 0.5550847457627118
          },
          {
            "modelId": "expert",
            "played": 151,
            "winRate": 0.6754966887417219
          },
          {
            "modelId": "opportunist",
            "played": 116,
            "winRate": 0.47413793103448276
          },
          {
            "modelId": "champion",
            "played": 74,
            "winRate": 0.5405405405405406
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
            "played": 212,
            "winRate": 0.5566037735849056
          },
          {
            "deckPresetId": "starter12",
            "played": 206,
            "winRate": 0.46116504854368934
          },
          {
            "deckPresetId": "starter14",
            "played": 202,
            "winRate": 0.5693069306930693
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
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
          "combo-1",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 3233,
        "played": 596,
        "ignored": 2637,
        "selectionRate": 0.1843489019486545,
        "wins": 280,
        "losses": 316,
        "draws": 0,
        "winRateWhenPlayed": 0.4697986577181208,
        "averageFlips": 0.825503355704698,
        "failedImpactRate": 0.25,
        "averageFlipMargin": 1.3780487804878048,
        "averageEffectAmount": 1.2046979865771812,
        "averageDamageDealt": 0.2651006711409396,
        "averageDamageTaken": 0.19630872483221476,
        "averageNetDamage": 0.06879194630872484,
        "lethalMoves": 4,
        "roundClosers": 55,
        "byModel": [
          {
            "modelId": "regular",
            "played": 288,
            "winRate": 0.4513888888888889
          },
          {
            "modelId": "opportunist",
            "played": 122,
            "winRate": 0.4672131147540984
          },
          {
            "modelId": "expert",
            "played": 109,
            "winRate": 0.6513761467889908
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.5365853658536586
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
            "played": 209,
            "winRate": 0.4880382775119617
          },
          {
            "deckPresetId": "starter12",
            "played": 200,
            "winRate": 0.45
          },
          {
            "deckPresetId": "starter14",
            "played": 187,
            "winRate": 0.47058823529411764
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
        "offered": 1575,
        "played": 502,
        "ignored": 1073,
        "selectionRate": 0.31873015873015875,
        "wins": 266,
        "losses": 236,
        "draws": 0,
        "winRateWhenPlayed": 0.5298804780876494,
        "averageFlips": 0.2051792828685259,
        "failedImpactRate": 0.6083650190114068,
        "averageFlipMargin": 1.6601941747572815,
        "averageEffectAmount": 1.6474103585657371,
        "averageDamageDealt": 0.1892430278884462,
        "averageDamageTaken": 0.11155378486055777,
        "averageNetDamage": 0.07768924302788845,
        "lethalMoves": 3,
        "roundClosers": 36,
        "byModel": [
          {
            "modelId": "regular",
            "played": 226,
            "winRate": 0.5442477876106194
          },
          {
            "modelId": "expert",
            "played": 103,
            "winRate": 0.7572815533980582
          },
          {
            "modelId": "opportunist",
            "played": 73,
            "winRate": 0.3698630136986301
          },
          {
            "modelId": "champion",
            "played": 68,
            "winRate": 0.5588235294117647
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
            "played": 257,
            "winRate": 0.5758754863813229
          },
          {
            "deckPresetId": "starter14",
            "played": 245,
            "winRate": 0.4816326530612245
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
          "combo-1",
          "corner"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 1726,
        "played": 474,
        "ignored": 1252,
        "selectionRate": 0.2746234067207416,
        "wins": 228,
        "losses": 246,
        "draws": 0,
        "winRateWhenPlayed": 0.4810126582278481,
        "averageFlips": 0.42616033755274263,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.3712871287128714,
        "averageEffectAmount": 0.79957805907173,
        "averageDamageDealt": 0.1877637130801688,
        "averageDamageTaken": 0.1371308016877637,
        "averageNetDamage": 0.05063291139240508,
        "lethalMoves": 3,
        "roundClosers": 32,
        "byModel": [
          {
            "modelId": "regular",
            "played": 226,
            "winRate": 0.45132743362831856
          },
          {
            "modelId": "expert",
            "played": 106,
            "winRate": 0.6792452830188679
          },
          {
            "modelId": "opportunist",
            "played": 80,
            "winRate": 0.375
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 238,
            "winRate": 0.49159663865546216
          },
          {
            "deckPresetId": "starter14",
            "played": 236,
            "winRate": 0.4703389830508475
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
        "offered": 2086,
        "played": 399,
        "ignored": 1687,
        "selectionRate": 0.1912751677852349,
        "wins": 221,
        "losses": 178,
        "draws": 0,
        "winRateWhenPlayed": 0.5538847117794486,
        "averageFlips": 0.7944862155388471,
        "failedImpactRate": 0.28603603603603606,
        "averageFlipMargin": 1.5173501577287065,
        "averageEffectAmount": 0.2506265664160401,
        "averageDamageDealt": 0.7644110275689223,
        "averageDamageTaken": 0.23057644110275688,
        "averageNetDamage": 0.5338345864661654,
        "lethalMoves": 8,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.5224719101123596
          },
          {
            "modelId": "expert",
            "played": 93,
            "winRate": 0.6881720430107527
          },
          {
            "modelId": "opportunist",
            "played": 54,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 53,
            "winRate": 0.6981132075471698
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 217,
            "winRate": 0.6082949308755761
          },
          {
            "deckPresetId": "starter14",
            "played": 182,
            "winRate": 0.489010989010989
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
          "gain-shield",
          "stabilizer"
        ],
        "preferredPositions": [],
        "offered": 778,
        "played": 241,
        "ignored": 537,
        "selectionRate": 0.3097686375321337,
        "wins": 137,
        "losses": 104,
        "draws": 0,
        "winRateWhenPlayed": 0.5684647302904564,
        "averageFlips": 0.36099585062240663,
        "failedImpactRate": 0.532258064516129,
        "averageFlipMargin": 1.5862068965517242,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.29045643153526973,
        "averageDamageTaken": 0.2157676348547718,
        "averageNetDamage": 0.07468879668049794,
        "lethalMoves": 3,
        "roundClosers": 27,
        "byModel": [
          {
            "modelId": "regular",
            "played": 112,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "expert",
            "played": 59,
            "winRate": 0.6610169491525424
          },
          {
            "modelId": "opportunist",
            "played": 29,
            "winRate": 0.4482758620689655
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.75
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
            "played": 241,
            "winRate": 0.5684647302904564
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
        "offered": 803,
        "played": 226,
        "ignored": 577,
        "selectionRate": 0.28144458281444584,
        "wins": 112,
        "losses": 114,
        "draws": 0,
        "winRateWhenPlayed": 0.49557522123893805,
        "averageFlips": 0.39823008849557523,
        "failedImpactRate": 0.5081967213114754,
        "averageFlipMargin": 2.611111111111111,
        "averageEffectAmount": 0.8982300884955752,
        "averageDamageDealt": 0.17256637168141592,
        "averageDamageTaken": 0.19911504424778761,
        "averageNetDamage": -0.026548672566371695,
        "lethalMoves": 1,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "regular",
            "played": 106,
            "winRate": 0.5754716981132075
          },
          {
            "modelId": "expert",
            "played": 47,
            "winRate": 0.7021276595744681
          },
          {
            "modelId": "opportunist",
            "played": 30,
            "winRate": 0.2
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 0.5714285714285714
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 226,
            "winRate": 0.49557522123893805
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
        "offered": 965,
        "played": 204,
        "ignored": 761,
        "selectionRate": 0.21139896373056996,
        "wins": 109,
        "losses": 95,
        "draws": 0,
        "winRateWhenPlayed": 0.5343137254901961,
        "averageFlips": 0.7450980392156863,
        "failedImpactRate": 0.2995391705069124,
        "averageFlipMargin": 1.3486842105263157,
        "averageEffectAmount": 1.4803921568627452,
        "averageDamageDealt": 0.23529411764705882,
        "averageDamageTaken": 0.10784313725490197,
        "averageNetDamage": 0.12745098039215685,
        "lethalMoves": 1,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 100,
            "winRate": 0.52
          },
          {
            "modelId": "expert",
            "played": 47,
            "winRate": 0.5319148936170213
          },
          {
            "modelId": "opportunist",
            "played": 37,
            "winRate": 0.5405405405405406
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0.8
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 204,
            "winRate": 0.5343137254901961
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
          "combo-1",
          "corner",
          "draw-next-turn",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 893,
        "played": 196,
        "ignored": 697,
        "selectionRate": 0.21948488241881298,
        "wins": 95,
        "losses": 101,
        "draws": 0,
        "winRateWhenPlayed": 0.4846938775510204,
        "averageFlips": 0.20408163265306123,
        "failedImpactRate": 0.6,
        "averageFlipMargin": 1.65,
        "averageEffectAmount": 0.9846938775510204,
        "averageDamageDealt": 0.05102040816326531,
        "averageDamageTaken": 0.025510204081632654,
        "averageNetDamage": 0.025510204081632654,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 95,
            "winRate": 0.49473684210526314
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 30,
            "winRate": 0.4
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0.625
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 196,
            "winRate": 0.4846938775510204
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
        "id": "familiar",
        "label": "familiar",
        "offered": 20619,
        "played": 4813,
        "ignored": 15806,
        "selectionRate": 0.23342548135215094,
        "wins": 2422,
        "losses": 2391,
        "draws": 0,
        "winRateWhenPlayed": 0.5032204446291294,
        "averageFlips": 0.4573031373363806,
        "averageDamageDealt": 0.33866611261167673,
        "averageNetDamage": 0.14938707666735926,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 859,
            "winRateWhenPlayed": 0.5587892898719441
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 803,
            "winRateWhenPlayed": 0.45454545454545453
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 647,
            "winRateWhenPlayed": 0.5100463678516228
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 642,
            "winRateWhenPlayed": 0.5373831775700935
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 636,
            "winRateWhenPlayed": 0.47327044025157233
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
        "offered": 19129,
        "played": 4771,
        "ignored": 14358,
        "selectionRate": 0.24941188770976006,
        "wins": 2491,
        "losses": 2280,
        "draws": 0,
        "winRateWhenPlayed": 0.5221127646195766,
        "averageFlips": 0.5076503877593795,
        "averageDamageDealt": 0.3875497799203521,
        "averageNetDamage": 0.19010689582896667,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 839,
            "winRateWhenPlayed": 0.5268176400476758
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 741,
            "winRateWhenPlayed": 0.5033738191632928
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 732,
            "winRateWhenPlayed": 0.5368852459016393
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 728,
            "winRateWhenPlayed": 0.49175824175824173
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 689,
            "winRateWhenPlayed": 0.5515239477503628
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "demon",
        "label": "demon",
        "offered": 21984,
        "played": 4460,
        "ignored": 17524,
        "selectionRate": 0.20287481804949054,
        "wins": 2191,
        "losses": 2269,
        "draws": 0,
        "winRateWhenPlayed": 0.4912556053811659,
        "averageFlips": 0.5242152466367713,
        "averageDamageDealt": 0.7204035874439462,
        "averageNetDamage": 0.4733183856502242,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 718,
            "winRateWhenPlayed": 0.5111420612813371
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 675,
            "winRateWhenPlayed": 0.4666666666666667
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 648,
            "winRateWhenPlayed": 0.4444444444444444
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 629,
            "winRateWhenPlayed": 0.505564387917329
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 620,
            "winRateWhenPlayed": 0.5290322580645161
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
        "offered": 8979,
        "played": 2201,
        "ignored": 6778,
        "selectionRate": 0.24512751976834837,
        "wins": 1109,
        "losses": 1092,
        "draws": 0,
        "winRateWhenPlayed": 0.5038618809631985,
        "averageFlips": 0.3711949114039073,
        "averageDamageDealt": 0.22535211267605634,
        "averageNetDamage": 0.05043162199000456,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 502,
            "winRateWhenPlayed": 0.5298804780876494
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 474,
            "winRateWhenPlayed": 0.4810126582278481
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 358,
            "winRateWhenPlayed": 0.45251396648044695
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 241,
            "winRateWhenPlayed": 0.5684647302904564
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 226,
            "winRateWhenPlayed": 0.49557522123893805
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
        "offered": 41797,
        "played": 9978,
        "ignored": 31819,
        "selectionRate": 0.23872526736368638,
        "wins": 5109,
        "losses": 4869,
        "draws": 0,
        "winRateWhenPlayed": 0.5120264582080577,
        "averageFlips": 0.47213870515133294,
        "averageDamageDealt": 0.4535979154139106,
        "averageNetDamage": 0.23652034475846861,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 591,
            "winRateWhenPlayed": 0.5786802030456852
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 572,
            "winRateWhenPlayed": 0.5472027972027972
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 540,
            "winRateWhenPlayed": 0.4648148148148148
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 475,
            "winRateWhenPlayed": 0.5010526315789474
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 474,
            "winRateWhenPlayed": 0.5590717299578059
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
        "offered": 9998,
        "played": 2276,
        "ignored": 7722,
        "selectionRate": 0.22764552910582117,
        "wins": 1155,
        "losses": 1121,
        "draws": 0,
        "winRateWhenPlayed": 0.5074692442882249,
        "averageFlips": 0.4960456942003515,
        "averageDamageDealt": 0.429701230228471,
        "averageNetDamage": 0.29481546572934975,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 268,
            "winRateWhenPlayed": 0.5261194029850746
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 268,
            "winRateWhenPlayed": 0.5149253731343284
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 267,
            "winRateWhenPlayed": 0.48314606741573035
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 265,
            "winRateWhenPlayed": 0.49433962264150944
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 264,
            "winRateWhenPlayed": 0.5378787878787878
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
        "offered": 7676,
        "played": 1565,
        "ignored": 6111,
        "selectionRate": 0.203882230328296,
        "wins": 715,
        "losses": 850,
        "draws": 0,
        "winRateWhenPlayed": 0.45686900958466453,
        "averageFlips": 0.5169329073482428,
        "averageDamageDealt": 0.3412140575079872,
        "averageNetDamage": 0.14313099041533547,
        "topCards": [
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 264,
            "winRateWhenPlayed": 0.4583333333333333
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 264,
            "winRateWhenPlayed": 0.42803030303030304
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 263,
            "winRateWhenPlayed": 0.467680608365019
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 262,
            "winRateWhenPlayed": 0.48854961832061067
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 260,
            "winRateWhenPlayed": 0.4576923076923077
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
        "offered": 4469,
        "played": 937,
        "ignored": 3532,
        "selectionRate": 0.2096665920787648,
        "wins": 481,
        "losses": 456,
        "draws": 0,
        "winRateWhenPlayed": 0.5133404482390609,
        "averageFlips": 0.39807897545357523,
        "averageDamageDealt": 0.5261472785485592,
        "averageNetDamage": 0.2678762006403415,
        "topCards": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 258,
            "winRateWhenPlayed": 0.49612403100775193
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 252,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 250,
            "winRateWhenPlayed": 0.508
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 177,
            "winRateWhenPlayed": 0.5649717514124294
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
        "offered": 4539,
        "played": 872,
        "ignored": 3667,
        "selectionRate": 0.19211280017625026,
        "wins": 453,
        "losses": 419,
        "draws": 0,
        "winRateWhenPlayed": 0.5194954128440367,
        "averageFlips": 0.588302752293578,
        "averageDamageDealt": 0.5103211009174312,
        "averageNetDamage": 0.32339449541284404,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 267,
            "winRateWhenPlayed": 0.50187265917603
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 264,
            "winRateWhenPlayed": 0.5113636363636364
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 256,
            "winRateWhenPlayed": 0.55078125
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 85,
            "winRateWhenPlayed": 0.5058823529411764
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
        "offered": 1142,
        "played": 351,
        "ignored": 791,
        "selectionRate": 0.3073555166374781,
        "wins": 165,
        "losses": 186,
        "draws": 0,
        "winRateWhenPlayed": 0.4700854700854701,
        "averageFlips": 0.37606837606837606,
        "averageDamageDealt": 0.2336182336182336,
        "averageNetDamage": 0.051282051282051266,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 263,
            "winRateWhenPlayed": 0.43346007604562736
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 88,
            "winRateWhenPlayed": 0.5795454545454546
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "engine",
        "label": "engine",
        "offered": 1090,
        "played": 266,
        "ignored": 824,
        "selectionRate": 0.24403669724770644,
        "wins": 135,
        "losses": 131,
        "draws": 0,
        "winRateWhenPlayed": 0.5075187969924813,
        "averageFlips": 0.41729323308270677,
        "averageDamageDealt": 0.48872180451127817,
        "averageNetDamage": 0.15789473684210525,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 266,
            "winRateWhenPlayed": 0.5075187969924813
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
        "offered": 70711,
        "played": 16245,
        "ignored": 54466,
        "selectionRate": 0.2297379474197791,
        "wins": 8213,
        "losses": 8032,
        "draws": 0,
        "winRateWhenPlayed": 0.505570944906125,
        "averageFlips": 0.47879347491535856,
        "averageDamageDealt": 0.4424746075715605,
        "averageNetDamage": 0.2368728839642967,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 859,
            "winRateWhenPlayed": 0.5587892898719441
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 839,
            "winRateWhenPlayed": 0.5268176400476758
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 803,
            "winRateWhenPlayed": 0.45454545454545453
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 741,
            "winRateWhenPlayed": 0.5033738191632928
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 732,
            "winRateWhenPlayed": 0.5368852459016393
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
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 1212,
        "wins": 700,
        "losses": 512,
        "draws": 0,
        "winRate": 0.5775577557755776,
        "averageFlips": 0.5858085808580858,
        "averageDamageDealt": 0.49834983498349833,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 1183,
        "wins": 601,
        "losses": 582,
        "draws": 0,
        "winRate": 0.5080304311073541,
        "averageFlips": 0.5824175824175825,
        "averageDamageDealt": 0.5604395604395604,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 1124,
        "wins": 596,
        "losses": 528,
        "draws": 0,
        "winRate": 0.5302491103202847,
        "averageFlips": 0.5071174377224199,
        "averageDamageDealt": 0.4555160142348754,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 1100,
        "wins": 537,
        "losses": 563,
        "draws": 0,
        "winRate": 0.48818181818181816,
        "averageFlips": 0.4809090909090909,
        "averageDamageDealt": 0.30454545454545456,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 1095,
        "wins": 535,
        "losses": 560,
        "draws": 0,
        "winRate": 0.4885844748858447,
        "averageFlips": 0.5287671232876713,
        "averageDamageDealt": 0.43561643835616437,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 1087,
        "wins": 531,
        "losses": 556,
        "draws": 0,
        "winRate": 0.48850045998160074,
        "averageFlips": 0.5289788408463661,
        "averageDamageDealt": 0.49678012879484823,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 994,
        "wins": 486,
        "losses": 508,
        "draws": 0,
        "winRate": 0.48893360160965793,
        "averageFlips": 0.5855130784708249,
        "averageDamageDealt": 0.716297786720322,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 912,
        "wins": 539,
        "losses": 373,
        "draws": 0,
        "winRate": 0.5910087719298246,
        "averageFlips": 0.6458333333333334,
        "averageDamageDealt": 0.9133771929824561,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 881,
        "wins": 436,
        "losses": 445,
        "draws": 0,
        "winRate": 0.4948921679909194,
        "averageFlips": 0.626560726447219,
        "averageDamageDealt": 0.8410896708286039,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 865,
        "wins": 425,
        "losses": 440,
        "draws": 0,
        "winRate": 0.4913294797687861,
        "averageFlips": 0.5838150289017341,
        "averageDamageDealt": 0.7526011560693642,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 839,
        "wins": 442,
        "losses": 397,
        "draws": 0,
        "winRate": 0.5268176400476758,
        "averageFlips": 0.5065554231227652,
        "averageDamageDealt": 0.24910607866507747,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:owl:gain-shield",
        "kind": "effect",
        "label": "Chaton des ronces -> gain-shield",
        "count": 802,
        "wins": 365,
        "losses": 437,
        "draws": 0,
        "winRate": 0.4551122194513716,
        "averageFlips": 0.31546134663341646,
        "averageDamageDealt": 0.30673316708229426,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 788,
        "wins": 425,
        "losses": 363,
        "draws": 0,
        "winRate": 0.5393401015228426,
        "averageFlips": 0.47081218274111675,
        "averageDamageDealt": 0.8426395939086294,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 781,
        "wins": 511,
        "losses": 270,
        "draws": 0,
        "winRate": 0.6542893725992317,
        "averageFlips": 0.614596670934699,
        "averageDamageDealt": 0.9282970550576184,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 731,
        "wins": 393,
        "losses": 338,
        "draws": 0,
        "winRate": 0.5376196990424077,
        "averageFlips": 0.35841313269493846,
        "averageDamageDealt": 0.33515731874145005,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 728,
        "wins": 358,
        "losses": 370,
        "draws": 0,
        "winRate": 0.49175824175824173,
        "averageFlips": 0.32005494505494503,
        "averageDamageDealt": 0.21153846153846154,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 716,
        "wins": 361,
        "losses": 355,
        "draws": 0,
        "winRate": 0.5041899441340782,
        "averageFlips": 0.40782122905027934,
        "averageDamageDealt": 0.8854748603351955,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 702,
        "wins": 355,
        "losses": 347,
        "draws": 0,
        "winRate": 0.5056980056980057,
        "averageFlips": 0.2934472934472934,
        "averageDamageDealt": 0.8703703703703703,
        "averageEffectAmount": 0.6638176638176638,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 689,
        "wins": 396,
        "losses": 293,
        "draws": 0,
        "winRate": 0.5747460087082729,
        "averageFlips": 0.15239477503628446,
        "averageDamageDealt": 0.1741654571843251,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 646,
        "wins": 416,
        "losses": 230,
        "draws": 0,
        "winRate": 0.6439628482972136,
        "averageFlips": 0.43188854489164086,
        "averageDamageDealt": 1.0154798761609907,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+familiar",
        "kind": "friendly-adjacent",
        "label": "human allie + familiar",
        "count": 606,
        "wins": 349,
        "losses": 257,
        "draws": 0,
        "winRate": 0.5759075907590759,
        "averageFlips": 0.43234323432343236,
        "averageDamageDealt": 0.9570957095709571,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:banner-squire:gain-shield",
        "kind": "effect",
        "label": "Ecuyere banniere -> gain-shield",
        "count": 575,
        "wins": 305,
        "losses": 270,
        "draws": 0,
        "winRate": 0.5304347826086957,
        "averageFlips": 0.4226086956521739,
        "averageDamageDealt": 0.6313043478260869,
        "averageEffectAmount": 1.5947826086956522,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 562,
        "wins": 308,
        "losses": 254,
        "draws": 0,
        "winRate": 0.5480427046263345,
        "averageFlips": 0.5658362989323843,
        "averageDamageDealt": 1.2758007117437722,
        "averageEffectAmount": 0.41459074733096085,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 519,
        "wins": 317,
        "losses": 202,
        "draws": 0,
        "winRate": 0.6107899807321773,
        "averageFlips": 0.5086705202312138,
        "averageDamageDealt": 0.7398843930635838,
        "averageEffectAmount": 2.4739884393063583,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3378,
        "id": "card-ember-imp-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Diablotin braise est ignoree par les bots",
        "detail": "3378 offres, 17% selection, 45% win quand jouee, role attacker.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2239,
        "id": "card-gear-monk-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Moine engrene est ignoree par les bots",
        "detail": "2239 offres, 16% selection, 45% win quand jouee, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3583,
        "id": "card-hornling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Cornu farceur est ignoree par les bots",
        "detail": "3583 offres, 17% selection, 53% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
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
      "detail": "Avantage premier joueur tres marque (67%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "skill-inversion-starter12-expert-vs-champion",
      "severity": "problem",
      "title": "Inversion de niveau detectee",
      "detail": "Expert bat Champion sur starter12 (55.6% contre 44.4%).",
      "recommendation": "Regarder les cartes ou situations qui recompensent trop le jeu immediat."
    },
    {
      "id": "diagnostic-card-ember-imp-ignored",
      "severity": "problem",
      "title": "Diablotin braise est ignoree par les bots",
      "detail": "3378 offres, 17% selection, 45% win quand jouee, role attacker. Confiance high, echantillon 3378.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-gear-monk-ignored",
      "severity": "problem",
      "title": "Moine engrene est ignoree par les bots",
      "detail": "2239 offres, 16% selection, 45% win quand jouee, role connector. Confiance high, echantillon 2239.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "deck-turn-spread",
      "severity": "watch",
      "title": "La taille de deck change fortement le rythme",
      "detail": "Ecart de 15.89 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    },
    {
      "id": "champion-underperforms-starter12",
      "severity": "watch",
      "title": "Le champion ne depasse pas l'expert",
      "detail": "Champion gagne 44.4% contre Expert sur starter12.",
      "recommendation": "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion."
    },
    {
      "id": "diagnostic-card-hornling-ignored",
      "severity": "watch",
      "title": "Cornu farceur est ignoree par les bots",
      "detail": "3583 offres, 17% selection, 53% win quand jouee, role anchor. Confiance high, echantillon 3583.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    }
  ]
};
