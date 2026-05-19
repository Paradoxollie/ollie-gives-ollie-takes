import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260519-191143",
  "generatedAt": "2026-05-19T19:11:43.498Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 9,
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
      "averageHpEdge": -21.685185185185187
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 56,
      "losses": 52,
      "draws": 0,
      "winRate": 0.5185185185185185,
      "averageHpEdge": 5.592592592592593
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 55,
      "losses": 53,
      "draws": 0,
      "winRate": 0.5092592592592593,
      "averageHpEdge": -0.4444444444444444
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 71,
      "losses": 37,
      "draws": 0,
      "winRate": 0.6574074074074074,
      "averageHpEdge": 3.990740740740741
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 34,
      "losses": 20,
      "draws": 0,
      "winRate": 0.6296296296296297,
      "averageHpEdge": 3.4074074074074074
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.4444444444444444,
      "averages": {
        "turns": 65.22222222222223,
        "rounds": 7.444444444444445,
        "flipsPerMatch": 23.555555555555557,
        "flipsPerTurn": 0.36115843270868825,
        "reshuffles": 11.222222222222221,
        "deadTurns": 0,
        "finalHpDifference": 9.722222222222221
      },
      "deadTurnFrequency": 0,
      "status": "healthy",
      "notes": [
        "Ouverture stable sur ce deck."
      ]
    },
    {
      "deckPresetId": "starter12",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5555555555555556,
      "averages": {
        "turns": 73.27777777777777,
        "rounds": 8.222222222222221,
        "flipsPerMatch": 25.944444444444443,
        "flipsPerTurn": 0.35405610310841545,
        "reshuffles": 9.722222222222221,
        "deadTurns": 0.1111111111111111,
        "finalHpDifference": 8.5
      },
      "deadTurnFrequency": 0.001516300227445034,
      "status": "healthy",
      "notes": [
        "Ouverture stable sur ce deck."
      ]
    },
    {
      "deckPresetId": "starter14",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5555555555555556,
      "averages": {
        "turns": 78.27777777777777,
        "rounds": 8.833333333333334,
        "flipsPerMatch": 26.77777777777778,
        "flipsPerTurn": 0.3420865862313698,
        "reshuffles": 7.611111111111111,
        "deadTurns": 0,
        "finalHpDifference": 5.722222222222222
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
          "averageHpEdge": -22.61111111111111
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.61111111111111
        }
      ],
      "averages": {
        "turns": 36.05555555555556,
        "rounds": 3.9444444444444446,
        "flipsPerMatch": 20.11111111111111,
        "flipsPerTurn": 0.5577812018489985,
        "reshuffles": 4.722222222222222,
        "deadTurns": 0.9444444444444444,
        "finalHpDifference": 22.61111111111111
      },
      "deadTurnFrequency": 0.026194144838212634
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
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -11.88888888888889
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 11.88888888888889
        }
      ],
      "averages": {
        "turns": 57.833333333333336,
        "rounds": 6.5,
        "flipsPerMatch": 34.166666666666664,
        "flipsPerTurn": 0.590778097982709,
        "reshuffles": 9.722222222222221,
        "deadTurns": 0.4444444444444444,
        "finalHpDifference": 12
      },
      "deadTurnFrequency": 0.007684918347742555
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
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -10.11111111111111
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 10.11111111111111
        }
      ],
      "averages": {
        "turns": 61.388888888888886,
        "rounds": 6.888888888888889,
        "flipsPerMatch": 23.944444444444443,
        "flipsPerTurn": 0.3900452488687783,
        "reshuffles": 10.333333333333334,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 10.11111111111111
      },
      "deadTurnFrequency": 0.0009049773755656109
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
          "modelId": "expert",
          "games": 18,
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -4.333333333333333
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 4.333333333333333
        }
      ],
      "averages": {
        "turns": 61.388888888888886,
        "rounds": 6.888888888888889,
        "flipsPerMatch": 35.5,
        "flipsPerTurn": 0.5782805429864254,
        "reshuffles": 10.666666666666666,
        "deadTurns": 0,
        "finalHpDifference": 7.111111111111111
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
          "averageHpEdge": -21.72222222222222
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.72222222222222
        }
      ],
      "averages": {
        "turns": 35.27777777777778,
        "rounds": 4,
        "flipsPerMatch": 20.38888888888889,
        "flipsPerTurn": 0.5779527559055118,
        "reshuffles": 3.4444444444444446,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 21.72222222222222
      },
      "deadTurnFrequency": 0.0015748031496062992
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
          "wins": 0,
          "losses": 18,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -10.944444444444445
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 10.944444444444445
        }
      ],
      "averages": {
        "turns": 64.61111111111111,
        "rounds": 7.277777777777778,
        "flipsPerMatch": 37,
        "flipsPerTurn": 0.5726569217540842,
        "reshuffles": 8.277777777777779,
        "deadTurns": 0.16666666666666666,
        "finalHpDifference": 10.944444444444445
      },
      "deadTurnFrequency": 0.0025795356835769563
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
          "modelId": "regular",
          "games": 18,
          "wins": 0,
          "losses": 18,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -13.277777777777779
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 13.277777777777779
        }
      ],
      "averages": {
        "turns": 62.111111111111114,
        "rounds": 6.888888888888889,
        "flipsPerMatch": 24.333333333333332,
        "flipsPerTurn": 0.39177101967799643,
        "reshuffles": 7.611111111111111,
        "deadTurns": 0.1111111111111111,
        "finalHpDifference": 13.277777777777779
      },
      "deadTurnFrequency": 0.0017889087656529517
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
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -5.111111111111111
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 5.111111111111111
        }
      ],
      "averages": {
        "turns": 61.611111111111114,
        "rounds": 6.944444444444445,
        "flipsPerMatch": 35.611111111111114,
        "flipsPerTurn": 0.5779981965734896,
        "reshuffles": 7.722222222222222,
        "deadTurns": 0,
        "finalHpDifference": 8.333333333333334
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
          "averageHpEdge": -20.72222222222222
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.72222222222222
        }
      ],
      "averages": {
        "turns": 38.72222222222222,
        "rounds": 4.5,
        "flipsPerMatch": 22.11111111111111,
        "flipsPerTurn": 0.5710186513629842,
        "reshuffles": 3.1666666666666665,
        "deadTurns": 0,
        "finalHpDifference": 20.72222222222222
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
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -8.666666666666666
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 8.666666666666666
        }
      ],
      "averages": {
        "turns": 70.66666666666667,
        "rounds": 8.11111111111111,
        "flipsPerMatch": 40.666666666666664,
        "flipsPerTurn": 0.5754716981132075,
        "reshuffles": 7.111111111111111,
        "deadTurns": 0,
        "finalHpDifference": 9.11111111111111
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
          "modelId": "regular",
          "games": 18,
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -10.777777777777779
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 10.777777777777779
        }
      ],
      "averages": {
        "turns": 67.33333333333333,
        "rounds": 7.5,
        "flipsPerMatch": 26.27777777777778,
        "flipsPerTurn": 0.39026402640264024,
        "reshuffles": 6.5,
        "deadTurns": 0,
        "finalHpDifference": 11.444444444444445
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
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": -0.7777777777777778
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": 0.7777777777777778
        }
      ],
      "averages": {
        "turns": 69.33333333333333,
        "rounds": 7.833333333333333,
        "flipsPerMatch": 38.888888888888886,
        "flipsPerTurn": 0.5608974358974359,
        "reshuffles": 6.5,
        "deadTurns": 0,
        "finalHpDifference": 6.111111111111111
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
        "offered": 3537,
        "played": 590,
        "ignored": 2947,
        "selectionRate": 0.16680802940344924,
        "wins": 294,
        "losses": 296,
        "draws": 0,
        "winRateWhenPlayed": 0.49830508474576274,
        "averageFlips": 0.5576271186440678,
        "failedImpactRate": 0.5353107344632768,
        "averageFlipMargin": 1.3981762917933132,
        "averageEffectAmount": 0.43559322033898307,
        "averageDamageDealt": 1.1423728813559322,
        "averageDamageTaken": 0.5152542372881356,
        "averageNetDamage": 0.6271186440677966,
        "lethalMoves": 14,
        "roundClosers": 120,
        "byModel": [
          {
            "modelId": "regular",
            "played": 223,
            "winRate": 0.5112107623318386
          },
          {
            "modelId": "expert",
            "played": 143,
            "winRate": 0.5804195804195804
          },
          {
            "modelId": "champion",
            "played": 90,
            "winRate": 0.6222222222222222
          },
          {
            "modelId": "opportunist",
            "played": 90,
            "winRate": 0.45555555555555555
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
            "played": 223,
            "winRate": 0.452914798206278
          },
          {
            "deckPresetId": "starter14",
            "played": 189,
            "winRate": 0.5661375661375662
          },
          {
            "deckPresetId": "starter12",
            "played": 178,
            "winRate": 0.48314606741573035
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
        "offered": 2198,
        "played": 374,
        "ignored": 1824,
        "selectionRate": 0.17015468607825296,
        "wins": 175,
        "losses": 199,
        "draws": 0,
        "winRateWhenPlayed": 0.4679144385026738,
        "averageFlips": 0.3315508021390374,
        "failedImpactRate": 0.6352941176470588,
        "averageFlipMargin": 1.1451612903225807,
        "averageEffectAmount": 0.7566844919786097,
        "averageDamageDealt": 0.5347593582887701,
        "averageDamageTaken": 0.32620320855614976,
        "averageNetDamage": 0.20855614973262032,
        "lethalMoves": 5,
        "roundClosers": 79,
        "byModel": [
          {
            "modelId": "regular",
            "played": 186,
            "winRate": 0.46774193548387094
          },
          {
            "modelId": "expert",
            "played": 78,
            "winRate": 0.5641025641025641
          },
          {
            "modelId": "opportunist",
            "played": 53,
            "winRate": 0.33962264150943394
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.5416666666666666
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 188,
            "winRate": 0.4095744680851064
          },
          {
            "deckPresetId": "starter14",
            "played": 186,
            "winRate": 0.5268817204301075
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
          "combo-1",
          "corner",
          "draw-next-turn",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 850,
        "played": 202,
        "ignored": 648,
        "selectionRate": 0.2376470588235294,
        "wins": 91,
        "losses": 111,
        "draws": 0,
        "winRateWhenPlayed": 0.4504950495049505,
        "averageFlips": 0.15841584158415842,
        "failedImpactRate": 0.6444444444444445,
        "averageFlipMargin": 1.59375,
        "averageEffectAmount": 1.004950495049505,
        "averageDamageDealt": 0.13861386138613863,
        "averageDamageTaken": 0.0594059405940594,
        "averageNetDamage": 0.07920792079207922,
        "lethalMoves": 0,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 103,
            "winRate": 0.4563106796116505
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.37142857142857144
          },
          {
            "modelId": "champion",
            "played": 14,
            "winRate": 0.35714285714285715
          },
          {
            "modelId": "beginner",
            "played": 11,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 202,
            "winRate": 0.4504950495049505
          }
        ],
        "status": "underperformer",
        "notes": [
          "Impact tactique faible."
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
        "offered": 2217,
        "played": 826,
        "ignored": 1391,
        "selectionRate": 0.37257555254848895,
        "wins": 451,
        "losses": 375,
        "draws": 0,
        "winRateWhenPlayed": 0.5460048426150121,
        "averageFlips": 0.2215496368038741,
        "failedImpactRate": 0.5402010050251256,
        "averageFlipMargin": 1.6284153005464481,
        "averageEffectAmount": 1.675544794188862,
        "averageDamageDealt": 0.22518159806295399,
        "averageDamageTaken": 0.10653753026634383,
        "averageNetDamage": 0.11864406779661016,
        "lethalMoves": 3,
        "roundClosers": 62,
        "byModel": [
          {
            "modelId": "regular",
            "played": 401,
            "winRate": 0.5586034912718204
          },
          {
            "modelId": "expert",
            "played": 170,
            "winRate": 0.6647058823529411
          },
          {
            "modelId": "opportunist",
            "played": 123,
            "winRate": 0.4065040650406504
          },
          {
            "modelId": "champion",
            "played": 87,
            "winRate": 0.735632183908046
          },
          {
            "modelId": "beginner",
            "played": 45,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 319,
            "winRate": 0.6018808777429467
          },
          {
            "deckPresetId": "starter12",
            "played": 273,
            "winRate": 0.5384615384615384
          },
          {
            "deckPresetId": "starter14",
            "played": 234,
            "winRate": 0.47863247863247865
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
        "offered": 2372,
        "played": 812,
        "ignored": 1560,
        "selectionRate": 0.342327150084317,
        "wins": 441,
        "losses": 371,
        "draws": 0,
        "winRateWhenPlayed": 0.5431034482758621,
        "averageFlips": 0.5049261083743842,
        "failedImpactRate": 0.3512658227848101,
        "averageFlipMargin": 1.6341463414634145,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.2647783251231527,
        "averageDamageTaken": 0.17610837438423646,
        "averageNetDamage": 0.08866995073891623,
        "lethalMoves": 5,
        "roundClosers": 70,
        "byModel": [
          {
            "modelId": "regular",
            "played": 376,
            "winRate": 0.5824468085106383
          },
          {
            "modelId": "expert",
            "played": 196,
            "winRate": 0.6632653061224489
          },
          {
            "modelId": "opportunist",
            "played": 120,
            "winRate": 0.36666666666666664
          },
          {
            "modelId": "champion",
            "played": 76,
            "winRate": 0.631578947368421
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
            "played": 308,
            "winRate": 0.5422077922077922
          },
          {
            "deckPresetId": "starter12",
            "played": 270,
            "winRate": 0.5259259259259259
          },
          {
            "deckPresetId": "starter14",
            "played": 234,
            "winRate": 0.5641025641025641
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
        "offered": 2599,
        "played": 806,
        "ignored": 1793,
        "selectionRate": 0.3101192766448634,
        "wins": 407,
        "losses": 399,
        "draws": 0,
        "winRateWhenPlayed": 0.5049627791563276,
        "averageFlips": 0.36228287841191065,
        "failedImpactRate": 0.535031847133758,
        "averageFlipMargin": 1.3869863013698631,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.38337468982630274,
        "averageDamageTaken": 0.29652605459057074,
        "averageNetDamage": 0.086848635235732,
        "lethalMoves": 12,
        "roundClosers": 109,
        "byModel": [
          {
            "modelId": "regular",
            "played": 362,
            "winRate": 0.46685082872928174
          },
          {
            "modelId": "expert",
            "played": 205,
            "winRate": 0.6780487804878049
          },
          {
            "modelId": "opportunist",
            "played": 111,
            "winRate": 0.3963963963963964
          },
          {
            "modelId": "champion",
            "played": 87,
            "winRate": 0.632183908045977
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
            "played": 294,
            "winRate": 0.4965986394557823
          },
          {
            "deckPresetId": "starter12",
            "played": 267,
            "winRate": 0.5805243445692884
          },
          {
            "deckPresetId": "starter14",
            "played": 245,
            "winRate": 0.4326530612244898
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
        "offered": 2606,
        "played": 743,
        "ignored": 1863,
        "selectionRate": 0.285111281657713,
        "wins": 359,
        "losses": 384,
        "draws": 0,
        "winRateWhenPlayed": 0.4831763122476447,
        "averageFlips": 0.3243606998654105,
        "failedImpactRate": 0.5227722772277228,
        "averageFlipMargin": 1.8049792531120332,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.1911170928667564,
        "averageDamageTaken": 0.16150740242261102,
        "averageNetDamage": 0.02960969044414538,
        "lethalMoves": 4,
        "roundClosers": 46,
        "byModel": [
          {
            "modelId": "regular",
            "played": 354,
            "winRate": 0.5056497175141242
          },
          {
            "modelId": "opportunist",
            "played": 143,
            "winRate": 0.3916083916083916
          },
          {
            "modelId": "expert",
            "played": 130,
            "winRate": 0.6384615384615384
          },
          {
            "modelId": "champion",
            "played": 72,
            "winRate": 0.5694444444444444
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
            "played": 274,
            "winRate": 0.5182481751824818
          },
          {
            "deckPresetId": "starter12",
            "played": 240,
            "winRate": 0.4666666666666667
          },
          {
            "deckPresetId": "starter14",
            "played": 229,
            "winRate": 0.4585152838427948
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
        "offered": 3069,
        "played": 742,
        "ignored": 2327,
        "selectionRate": 0.2417725643532095,
        "wins": 397,
        "losses": 345,
        "draws": 0,
        "winRateWhenPlayed": 0.5350404312668463,
        "averageFlips": 0.444743935309973,
        "failedImpactRate": 0.541029207232267,
        "averageFlipMargin": 1.4878787878787878,
        "averageEffectAmount": 1.2466307277628033,
        "averageDamageDealt": 0.5121293800539084,
        "averageDamageTaken": 0.31805929919137466,
        "averageNetDamage": 0.19407008086253374,
        "lethalMoves": 11,
        "roundClosers": 144,
        "byModel": [
          {
            "modelId": "regular",
            "played": 350,
            "winRate": 0.5342857142857143
          },
          {
            "modelId": "expert",
            "played": 183,
            "winRate": 0.6775956284153005
          },
          {
            "modelId": "opportunist",
            "played": 96,
            "winRate": 0.4270833333333333
          },
          {
            "modelId": "champion",
            "played": 68,
            "winRate": 0.6617647058823529
          },
          {
            "modelId": "beginner",
            "played": 45,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 282,
            "winRate": 0.5035460992907801
          },
          {
            "deckPresetId": "starter12",
            "played": 241,
            "winRate": 0.5435684647302904
          },
          {
            "deckPresetId": "starter14",
            "played": 219,
            "winRate": 0.5662100456621004
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
        "offered": 2736,
        "played": 721,
        "ignored": 2015,
        "selectionRate": 0.2635233918128655,
        "wins": 404,
        "losses": 317,
        "draws": 0,
        "winRateWhenPlayed": 0.5603328710124826,
        "averageFlips": 0.3578363384188627,
        "failedImpactRate": 0.5204460966542751,
        "averageFlipMargin": 1.3992248062015504,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.3342579750346741,
        "averageDamageTaken": 0.1955617198335645,
        "averageNetDamage": 0.1386962552011096,
        "lethalMoves": 7,
        "roundClosers": 83,
        "byModel": [
          {
            "modelId": "regular",
            "played": 313,
            "winRate": 0.5399361022364217
          },
          {
            "modelId": "expert",
            "played": 178,
            "winRate": 0.7247191011235955
          },
          {
            "modelId": "opportunist",
            "played": 103,
            "winRate": 0.4077669902912621
          },
          {
            "modelId": "champion",
            "played": 95,
            "winRate": 0.6736842105263158
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
            "played": 269,
            "winRate": 0.5650557620817844
          },
          {
            "deckPresetId": "starter12",
            "played": 230,
            "winRate": 0.5826086956521739
          },
          {
            "deckPresetId": "starter14",
            "played": 222,
            "winRate": 0.5315315315315315
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
        "offered": 3162,
        "played": 711,
        "ignored": 2451,
        "selectionRate": 0.22485768500948766,
        "wins": 375,
        "losses": 336,
        "draws": 0,
        "winRateWhenPlayed": 0.5274261603375527,
        "averageFlips": 0.5021097046413502,
        "failedImpactRate": 0.4742268041237113,
        "averageFlipMargin": 1.473389355742297,
        "averageEffectAmount": 1.8284106891701828,
        "averageDamageDealt": 0.569620253164557,
        "averageDamageTaken": 0.16877637130801687,
        "averageNetDamage": 0.40084388185654013,
        "lethalMoves": 6,
        "roundClosers": 127,
        "byModel": [
          {
            "modelId": "regular",
            "played": 295,
            "winRate": 0.5661016949152542
          },
          {
            "modelId": "expert",
            "played": 153,
            "winRate": 0.6274509803921569
          },
          {
            "modelId": "opportunist",
            "played": 144,
            "winRate": 0.4027777777777778
          },
          {
            "modelId": "champion",
            "played": 77,
            "winRate": 0.7012987012987013
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
            "played": 264,
            "winRate": 0.5265151515151515
          },
          {
            "deckPresetId": "starter12",
            "played": 238,
            "winRate": 0.542016806722689
          },
          {
            "deckPresetId": "starter14",
            "played": 209,
            "winRate": 0.5119617224880383
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
        "offered": 2619,
        "played": 703,
        "ignored": 1916,
        "selectionRate": 0.26842306223749524,
        "wins": 351,
        "losses": 352,
        "draws": 0,
        "winRateWhenPlayed": 0.4992887624466572,
        "averageFlips": 0.30725462304409673,
        "failedImpactRate": 0.48693586698337293,
        "averageFlipMargin": 1.7453703703703705,
        "averageEffectAmount": 0.6756756756756757,
        "averageDamageDealt": 0.9374110953058321,
        "averageDamageTaken": 0.15789473684210525,
        "averageNetDamage": 0.7795163584637268,
        "lethalMoves": 8,
        "roundClosers": 53,
        "byModel": [
          {
            "modelId": "regular",
            "played": 306,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 148,
            "winRate": 0.6621621621621622
          },
          {
            "modelId": "opportunist",
            "played": 115,
            "winRate": 0.3739130434782609
          },
          {
            "modelId": "champion",
            "played": 90,
            "winRate": 0.6333333333333333
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
            "played": 256,
            "winRate": 0.51171875
          },
          {
            "deckPresetId": "starter12",
            "played": 226,
            "winRate": 0.48672566371681414
          },
          {
            "deckPresetId": "starter14",
            "played": 221,
            "winRate": 0.497737556561086
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
        "offered": 2967,
        "played": 689,
        "ignored": 2278,
        "selectionRate": 0.2322210987529491,
        "wins": 332,
        "losses": 357,
        "draws": 0,
        "winRateWhenPlayed": 0.4818577648766328,
        "averageFlips": 0.6328011611030478,
        "failedImpactRate": 0.3780313837375178,
        "averageFlipMargin": 2.7591743119266057,
        "averageEffectAmount": 0.7547169811320755,
        "averageDamageDealt": 0.3309143686502177,
        "averageDamageTaken": 0.22496371552975328,
        "averageNetDamage": 0.10595065312046445,
        "lethalMoves": 5,
        "roundClosers": 82,
        "byModel": [
          {
            "modelId": "regular",
            "played": 314,
            "winRate": 0.4968152866242038
          },
          {
            "modelId": "expert",
            "played": 144,
            "winRate": 0.6458333333333334
          },
          {
            "modelId": "opportunist",
            "played": 128,
            "winRate": 0.3359375
          },
          {
            "modelId": "champion",
            "played": 65,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "beginner",
            "played": 38,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 255,
            "winRate": 0.47058823529411764
          },
          {
            "deckPresetId": "starter12",
            "played": 230,
            "winRate": 0.5043478260869565
          },
          {
            "deckPresetId": "starter14",
            "played": 204,
            "winRate": 0.47058823529411764
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
        "offered": 3106,
        "played": 663,
        "ignored": 2443,
        "selectionRate": 0.21345782356728912,
        "wins": 341,
        "losses": 322,
        "draws": 0,
        "winRateWhenPlayed": 0.5143288084464555,
        "averageFlips": 0.39668174962292607,
        "failedImpactRate": 0.5504273504273505,
        "averageFlipMargin": 1.7718631178707225,
        "averageEffectAmount": 0.5354449472096531,
        "averageDamageDealt": 0.3861236802413273,
        "averageDamageTaken": 0.32277526395173456,
        "averageNetDamage": 0.06334841628959276,
        "lethalMoves": 6,
        "roundClosers": 100,
        "byModel": [
          {
            "modelId": "regular",
            "played": 325,
            "winRate": 0.49230769230769234
          },
          {
            "modelId": "expert",
            "played": 155,
            "winRate": 0.7225806451612903
          },
          {
            "modelId": "opportunist",
            "played": 76,
            "winRate": 0.32894736842105265
          },
          {
            "modelId": "champion",
            "played": 69,
            "winRate": 0.6376811594202898
          },
          {
            "modelId": "beginner",
            "played": 38,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 241,
            "winRate": 0.5103734439834025
          },
          {
            "deckPresetId": "starter12",
            "played": 212,
            "winRate": 0.5047169811320755
          },
          {
            "deckPresetId": "starter14",
            "played": 210,
            "winRate": 0.5285714285714286
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
        "offered": 3083,
        "played": 653,
        "ignored": 2430,
        "selectionRate": 0.2118066818034382,
        "wins": 290,
        "losses": 363,
        "draws": 0,
        "winRateWhenPlayed": 0.444104134762634,
        "averageFlips": 0.4241960183767228,
        "failedImpactRate": 0.4917431192660551,
        "averageFlipMargin": 1.4909747292418774,
        "averageEffectAmount": 0.5666156202143952,
        "averageDamageDealt": 0.29402756508422667,
        "averageDamageTaken": 0.21745788667687596,
        "averageNetDamage": 0.07656967840735071,
        "lethalMoves": 8,
        "roundClosers": 68,
        "byModel": [
          {
            "modelId": "regular",
            "played": 301,
            "winRate": 0.46179401993355484
          },
          {
            "modelId": "expert",
            "played": 127,
            "winRate": 0.6299212598425197
          },
          {
            "modelId": "opportunist",
            "played": 119,
            "winRate": 0.3697478991596639
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 52,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 246,
            "winRate": 0.4715447154471545
          },
          {
            "deckPresetId": "starter14",
            "played": 216,
            "winRate": 0.3888888888888889
          },
          {
            "deckPresetId": "starter12",
            "played": 191,
            "winRate": 0.4712041884816754
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
        "offered": 3196,
        "played": 652,
        "ignored": 2544,
        "selectionRate": 0.20400500625782228,
        "wins": 315,
        "losses": 337,
        "draws": 0,
        "winRateWhenPlayed": 0.4831288343558282,
        "averageFlips": 0.44631901840490795,
        "failedImpactRate": 0.4680073126142596,
        "averageFlipMargin": 1.6151202749140894,
        "averageEffectAmount": 0.6779141104294478,
        "averageDamageDealt": 0.28680981595092025,
        "averageDamageTaken": 0.18098159509202455,
        "averageNetDamage": 0.1058282208588957,
        "lethalMoves": 6,
        "roundClosers": 64,
        "byModel": [
          {
            "modelId": "regular",
            "played": 309,
            "winRate": 0.47572815533980584
          },
          {
            "modelId": "expert",
            "played": 141,
            "winRate": 0.6595744680851063
          },
          {
            "modelId": "opportunist",
            "played": 110,
            "winRate": 0.4
          },
          {
            "modelId": "champion",
            "played": 58,
            "winRate": 0.5344827586206896
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
            "played": 242,
            "winRate": 0.48760330578512395
          },
          {
            "deckPresetId": "starter14",
            "played": 211,
            "winRate": 0.45023696682464454
          },
          {
            "deckPresetId": "starter12",
            "played": 199,
            "winRate": 0.5125628140703518
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
        "offered": 3264,
        "played": 639,
        "ignored": 2625,
        "selectionRate": 0.1957720588235294,
        "wins": 315,
        "losses": 324,
        "draws": 0,
        "winRateWhenPlayed": 0.49295774647887325,
        "averageFlips": 0.6353677621283255,
        "failedImpactRate": 0.42082738944365194,
        "averageFlipMargin": 1.6699507389162562,
        "averageEffectAmount": 0.4209702660406886,
        "averageDamageDealt": 0.9029733959311425,
        "averageDamageTaken": 0.3427230046948357,
        "averageNetDamage": 0.5602503912363068,
        "lethalMoves": 8,
        "roundClosers": 87,
        "byModel": [
          {
            "modelId": "regular",
            "played": 268,
            "winRate": 0.48880597014925375
          },
          {
            "modelId": "expert",
            "played": 137,
            "winRate": 0.6496350364963503
          },
          {
            "modelId": "opportunist",
            "played": 103,
            "winRate": 0.42718446601941745
          },
          {
            "modelId": "champion",
            "played": 86,
            "winRate": 0.5930232558139535
          },
          {
            "modelId": "beginner",
            "played": 45,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 237,
            "winRate": 0.4767932489451477
          },
          {
            "deckPresetId": "starter12",
            "played": 204,
            "winRate": 0.5049019607843137
          },
          {
            "deckPresetId": "starter14",
            "played": 198,
            "winRate": 0.5
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
        "offered": 3041,
        "played": 630,
        "ignored": 2411,
        "selectionRate": 0.2071686945083854,
        "wins": 341,
        "losses": 289,
        "draws": 0,
        "winRateWhenPlayed": 0.5412698412698412,
        "averageFlips": 0.5206349206349207,
        "failedImpactRate": 0.376425855513308,
        "averageFlipMargin": 1.5304878048780488,
        "averageEffectAmount": 0.5206349206349207,
        "averageDamageDealt": 0.18253968253968253,
        "averageDamageTaken": 0.20952380952380953,
        "averageNetDamage": -0.026984126984127,
        "lethalMoves": 6,
        "roundClosers": 51,
        "byModel": [
          {
            "modelId": "regular",
            "played": 308,
            "winRate": 0.5097402597402597
          },
          {
            "modelId": "expert",
            "played": 134,
            "winRate": 0.6865671641791045
          },
          {
            "modelId": "opportunist",
            "played": 99,
            "winRate": 0.5353535353535354
          },
          {
            "modelId": "champion",
            "played": 53,
            "winRate": 0.7358490566037735
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
            "played": 226,
            "winRate": 0.5265486725663717
          },
          {
            "deckPresetId": "starter12",
            "played": 223,
            "winRate": 0.5246636771300448
          },
          {
            "deckPresetId": "starter14",
            "played": 181,
            "winRate": 0.580110497237569
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
        "offered": 3252,
        "played": 624,
        "ignored": 2628,
        "selectionRate": 0.1918819188191882,
        "wins": 296,
        "losses": 328,
        "draws": 0,
        "winRateWhenPlayed": 0.47435897435897434,
        "averageFlips": 0.7227564102564102,
        "failedImpactRate": 0.3566333808844508,
        "averageFlipMargin": 1.6252771618625277,
        "averageEffectAmount": 1.0977564102564104,
        "averageDamageDealt": 0.3701923076923077,
        "averageDamageTaken": 0.15865384615384615,
        "averageNetDamage": 0.21153846153846156,
        "lethalMoves": 2,
        "roundClosers": 73,
        "byModel": [
          {
            "modelId": "regular",
            "played": 258,
            "winRate": 0.4689922480620155
          },
          {
            "modelId": "expert",
            "played": 139,
            "winRate": 0.6474820143884892
          },
          {
            "modelId": "opportunist",
            "played": 114,
            "winRate": 0.34210526315789475
          },
          {
            "modelId": "champion",
            "played": 71,
            "winRate": 0.647887323943662
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
            "played": 233,
            "winRate": 0.4892703862660944
          },
          {
            "deckPresetId": "starter12",
            "played": 208,
            "winRate": 0.46634615384615385
          },
          {
            "deckPresetId": "starter14",
            "played": 183,
            "winRate": 0.4644808743169399
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
        "offered": 3173,
        "played": 615,
        "ignored": 2558,
        "selectionRate": 0.1938228805546801,
        "wins": 295,
        "losses": 320,
        "draws": 0,
        "winRateWhenPlayed": 0.4796747967479675,
        "averageFlips": 0.848780487804878,
        "failedImpactRate": 0.2770083102493075,
        "averageFlipMargin": 1.475095785440613,
        "averageEffectAmount": 0.848780487804878,
        "averageDamageDealt": 0.24715447154471545,
        "averageDamageTaken": 0.2032520325203252,
        "averageNetDamage": 0.043902439024390255,
        "lethalMoves": 3,
        "roundClosers": 55,
        "byModel": [
          {
            "modelId": "regular",
            "played": 263,
            "winRate": 0.5475285171102662
          },
          {
            "modelId": "opportunist",
            "played": 137,
            "winRate": 0.29927007299270075
          },
          {
            "modelId": "expert",
            "played": 101,
            "winRate": 0.6534653465346535
          },
          {
            "modelId": "champion",
            "played": 63,
            "winRate": 0.6984126984126984
          },
          {
            "modelId": "beginner",
            "played": 51,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 235,
            "winRate": 0.5106382978723404
          },
          {
            "deckPresetId": "starter12",
            "played": 193,
            "winRate": 0.47668393782383417
          },
          {
            "deckPresetId": "starter14",
            "played": 187,
            "winRate": 0.44385026737967914
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
        "offered": 3152,
        "played": 610,
        "ignored": 2542,
        "selectionRate": 0.1935279187817259,
        "wins": 293,
        "losses": 317,
        "draws": 0,
        "winRateWhenPlayed": 0.48032786885245904,
        "averageFlips": 0.44098360655737706,
        "failedImpactRate": 0.372960372960373,
        "averageFlipMargin": 1.4237918215613383,
        "averageEffectAmount": 0.6688524590163935,
        "averageDamageDealt": 0.8508196721311475,
        "averageDamageTaken": 0.14590163934426228,
        "averageNetDamage": 0.7049180327868853,
        "lethalMoves": 27,
        "roundClosers": 38,
        "byModel": [
          {
            "modelId": "regular",
            "played": 258,
            "winRate": 0.4689922480620155
          },
          {
            "modelId": "expert",
            "played": 120,
            "winRate": 0.6083333333333333
          },
          {
            "modelId": "opportunist",
            "played": 113,
            "winRate": 0.4778761061946903
          },
          {
            "modelId": "champion",
            "played": 75,
            "winRate": 0.6
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
            "winRate": 0.5023474178403756
          },
          {
            "deckPresetId": "starter12",
            "played": 200,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter14",
            "played": 197,
            "winRate": 0.4365482233502538
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
        "offered": 3186,
        "played": 604,
        "ignored": 2582,
        "selectionRate": 0.18957940991839298,
        "wins": 291,
        "losses": 313,
        "draws": 0,
        "winRateWhenPlayed": 0.4817880794701987,
        "averageFlips": 0.8129139072847682,
        "failedImpactRate": 0.2693452380952381,
        "averageFlipMargin": 1.4236252545824848,
        "averageEffectAmount": 1.1804635761589404,
        "averageDamageDealt": 0.21688741721854304,
        "averageDamageTaken": 0.18543046357615894,
        "averageNetDamage": 0.0314569536423841,
        "lethalMoves": 3,
        "roundClosers": 50,
        "byModel": [
          {
            "modelId": "regular",
            "played": 303,
            "winRate": 0.5247524752475248
          },
          {
            "modelId": "opportunist",
            "played": 124,
            "winRate": 0.46774193548387094
          },
          {
            "modelId": "expert",
            "played": 99,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.5128205128205128
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
            "played": 232,
            "winRate": 0.4525862068965517
          },
          {
            "deckPresetId": "starter12",
            "played": 208,
            "winRate": 0.4423076923076923
          },
          {
            "deckPresetId": "starter14",
            "played": 164,
            "winRate": 0.573170731707317
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
        "offered": 3324,
        "played": 602,
        "ignored": 2722,
        "selectionRate": 0.18110709987966306,
        "wins": 281,
        "losses": 321,
        "draws": 0,
        "winRateWhenPlayed": 0.46677740863787376,
        "averageFlips": 0.6495016611295681,
        "failedImpactRate": 0.37738853503184716,
        "averageFlipMargin": 1.5728900255754477,
        "averageEffectAmount": 0.29401993355481726,
        "averageDamageDealt": 0.6461794019933554,
        "averageDamageTaken": 0.2026578073089701,
        "averageNetDamage": 0.44352159468438535,
        "lethalMoves": 11,
        "roundClosers": 55,
        "byModel": [
          {
            "modelId": "regular",
            "played": 269,
            "winRate": 0.4721189591078067
          },
          {
            "modelId": "expert",
            "played": 137,
            "winRate": 0.5985401459854015
          },
          {
            "modelId": "opportunist",
            "played": 90,
            "winRate": 0.43333333333333335
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.515625
          },
          {
            "modelId": "beginner",
            "played": 42,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 222,
            "winRate": 0.4594594594594595
          },
          {
            "deckPresetId": "starter10",
            "played": 199,
            "winRate": 0.47738693467336685
          },
          {
            "deckPresetId": "starter14",
            "played": 181,
            "winRate": 0.46408839779005523
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
        "offered": 1654,
        "played": 476,
        "ignored": 1178,
        "selectionRate": 0.2877871825876663,
        "wins": 263,
        "losses": 213,
        "draws": 0,
        "winRateWhenPlayed": 0.5525210084033614,
        "averageFlips": 0.18907563025210083,
        "failedImpactRate": 0.6525096525096525,
        "averageFlipMargin": 1.6444444444444444,
        "averageEffectAmount": 1.6680672268907564,
        "averageDamageDealt": 0.14705882352941177,
        "averageDamageTaken": 0.06302521008403361,
        "averageNetDamage": 0.08403361344537816,
        "lethalMoves": 4,
        "roundClosers": 26,
        "byModel": [
          {
            "modelId": "regular",
            "played": 212,
            "winRate": 0.5424528301886793
          },
          {
            "modelId": "expert",
            "played": 93,
            "winRate": 0.8279569892473119
          },
          {
            "modelId": "opportunist",
            "played": 77,
            "winRate": 0.35064935064935066
          },
          {
            "modelId": "champion",
            "played": 66,
            "winRate": 0.6666666666666666
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
            "played": 244,
            "winRate": 0.5491803278688525
          },
          {
            "deckPresetId": "starter14",
            "played": 232,
            "winRate": 0.5560344827586207
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
        "offered": 1708,
        "played": 461,
        "ignored": 1247,
        "selectionRate": 0.26990632318501173,
        "wins": 237,
        "losses": 224,
        "draws": 0,
        "winRateWhenPlayed": 0.5140997830802603,
        "averageFlips": 0.38177874186550975,
        "failedImpactRate": 0.3736654804270463,
        "averageFlipMargin": 1.3125,
        "averageEffectAmount": 0.8655097613882863,
        "averageDamageDealt": 0.13882863340563992,
        "averageDamageTaken": 0.1279826464208243,
        "averageNetDamage": 0.01084598698481562,
        "lethalMoves": 3,
        "roundClosers": 23,
        "byModel": [
          {
            "modelId": "regular",
            "played": 215,
            "winRate": 0.5162790697674419
          },
          {
            "modelId": "opportunist",
            "played": 90,
            "winRate": 0.3888888888888889
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.6976744186046512
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.6888888888888889
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
            "played": 233,
            "winRate": 0.47639484978540775
          },
          {
            "deckPresetId": "starter14",
            "played": 228,
            "winRate": 0.5526315789473685
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
        "offered": 2106,
        "played": 410,
        "ignored": 1696,
        "selectionRate": 0.19468186134852802,
        "wins": 221,
        "losses": 189,
        "draws": 0,
        "winRateWhenPlayed": 0.5390243902439025,
        "averageFlips": 0.824390243902439,
        "failedImpactRate": 0.23006833712984054,
        "averageFlipMargin": 1.4733727810650887,
        "averageEffectAmount": 0.29024390243902437,
        "averageDamageDealt": 0.7878048780487805,
        "averageDamageTaken": 0.2731707317073171,
        "averageNetDamage": 0.5146341463414634,
        "lethalMoves": 9,
        "roundClosers": 53,
        "byModel": [
          {
            "modelId": "regular",
            "played": 172,
            "winRate": 0.5697674418604651
          },
          {
            "modelId": "expert",
            "played": 89,
            "winRate": 0.7078651685393258
          },
          {
            "modelId": "opportunist",
            "played": 73,
            "winRate": 0.3835616438356164
          },
          {
            "modelId": "champion",
            "played": 49,
            "winRate": 0.6530612244897959
          },
          {
            "modelId": "beginner",
            "played": 27,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 218,
            "winRate": 0.5412844036697247
          },
          {
            "deckPresetId": "starter14",
            "played": 192,
            "winRate": 0.5364583333333334
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
        "offered": 787,
        "played": 241,
        "ignored": 546,
        "selectionRate": 0.3062261753494282,
        "wins": 127,
        "losses": 114,
        "draws": 0,
        "winRateWhenPlayed": 0.5269709543568465,
        "averageFlips": 0.3941908713692946,
        "failedImpactRate": 0.483695652173913,
        "averageFlipMargin": 1.4210526315789473,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.33195020746887965,
        "averageDamageTaken": 0.1908713692946058,
        "averageNetDamage": 0.14107883817427386,
        "lethalMoves": 1,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 110,
            "winRate": 0.4727272727272727
          },
          {
            "modelId": "expert",
            "played": 49,
            "winRate": 0.7959183673469388
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.3409090909090909
          },
          {
            "modelId": "champion",
            "played": 31,
            "winRate": 0.6774193548387096
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
            "played": 241,
            "winRate": 0.5269709543568465
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
        "offered": 809,
        "played": 217,
        "ignored": 592,
        "selectionRate": 0.26823238566131025,
        "wins": 117,
        "losses": 100,
        "draws": 0,
        "winRateWhenPlayed": 0.5391705069124424,
        "averageFlips": 0.4147465437788018,
        "failedImpactRate": 0.5161290322580645,
        "averageFlipMargin": 2.2888888888888888,
        "averageEffectAmount": 0.8894009216589862,
        "averageDamageDealt": 0.20276497695852536,
        "averageDamageTaken": 0.1889400921658986,
        "averageNetDamage": 0.013824884792626752,
        "lethalMoves": 0,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "regular",
            "played": 116,
            "winRate": 0.5603448275862069
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "expert",
            "played": 32,
            "winRate": 0.75
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 0.5416666666666666
          },
          {
            "modelId": "beginner",
            "played": 10,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 217,
            "winRate": 0.5391705069124424
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
        "offered": 928,
        "played": 206,
        "ignored": 722,
        "selectionRate": 0.22198275862068967,
        "wins": 114,
        "losses": 92,
        "draws": 0,
        "winRateWhenPlayed": 0.5533980582524272,
        "averageFlips": 0.7233009708737864,
        "failedImpactRate": 0.32272727272727275,
        "averageFlipMargin": 1.3624161073825503,
        "averageEffectAmount": 1.441747572815534,
        "averageDamageDealt": 0.1941747572815534,
        "averageDamageTaken": 0.11650485436893204,
        "averageNetDamage": 0.07766990291262135,
        "lethalMoves": 1,
        "roundClosers": 19,
        "byModel": [
          {
            "modelId": "regular",
            "played": 88,
            "winRate": 0.5909090909090909
          },
          {
            "modelId": "expert",
            "played": 49,
            "winRate": 0.6938775510204082
          },
          {
            "modelId": "opportunist",
            "played": 36,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 20,
            "winRate": 0.5
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
            "played": 206,
            "winRate": 0.5533980582524272
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
        "offered": 20639,
        "played": 4828,
        "ignored": 15811,
        "selectionRate": 0.23392606230922042,
        "wins": 2391,
        "losses": 2437,
        "draws": 0,
        "winRateWhenPlayed": 0.4952361226180613,
        "averageFlips": 0.4656172328086164,
        "averageDamageDealt": 0.30903065451532724,
        "averageNetDamage": 0.09942004971002483,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 826,
            "winRateWhenPlayed": 0.5460048426150121
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 806,
            "winRateWhenPlayed": 0.5049627791563276
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 663,
            "winRateWhenPlayed": 0.5143288084464555
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 653,
            "winRateWhenPlayed": 0.444104134762634
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 652,
            "winRateWhenPlayed": 0.4831288343558282
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
        "offered": 19224,
        "played": 4754,
        "ignored": 14470,
        "selectionRate": 0.2472950478568456,
        "wins": 2492,
        "losses": 2262,
        "draws": 0,
        "winRateWhenPlayed": 0.5241901556583929,
        "averageFlips": 0.5166175851914178,
        "averageDamageDealt": 0.39082877576777453,
        "averageNetDamage": 0.18111064366848972,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 812,
            "winRateWhenPlayed": 0.5431034482758621
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 743,
            "winRateWhenPlayed": 0.4831763122476447
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 742,
            "winRateWhenPlayed": 0.5350404312668463
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 721,
            "winRateWhenPlayed": 0.5603328710124826
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 711,
            "winRateWhenPlayed": 0.5274261603375527
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
        "offered": 21904,
        "played": 4463,
        "ignored": 17441,
        "selectionRate": 0.2037527392257122,
        "wins": 2207,
        "losses": 2256,
        "draws": 0,
        "winRateWhenPlayed": 0.4945104190006722,
        "averageFlips": 0.5321532601389201,
        "averageDamageDealt": 0.7082679811785795,
        "averageNetDamage": 0.4546269325565763,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 703,
            "winRateWhenPlayed": 0.4992887624466572
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 689,
            "winRateWhenPlayed": 0.4818577648766328
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 639,
            "winRateWhenPlayed": 0.49295774647887325
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 630,
            "winRateWhenPlayed": 0.5412698412698412
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 610,
            "winRateWhenPlayed": 0.48032786885245904
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
        "offered": 8934,
        "played": 2177,
        "ignored": 6757,
        "selectionRate": 0.2436758450861876,
        "wins": 1124,
        "losses": 1053,
        "draws": 0,
        "winRateWhenPlayed": 0.5163068442811208,
        "averageFlips": 0.34726688102893893,
        "averageDamageDealt": 0.2416169039963252,
        "averageNetDamage": 0.08819476343592098,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 476,
            "winRateWhenPlayed": 0.5525210084033614
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 461,
            "winRateWhenPlayed": 0.5140997830802603
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 374,
            "winRateWhenPlayed": 0.4679144385026738
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 241,
            "winRateWhenPlayed": 0.5269709543568465
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 217,
            "winRateWhenPlayed": 0.5391705069124424
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
        "offered": 41646,
        "played": 9947,
        "ignored": 31699,
        "selectionRate": 0.23884646784805263,
        "wins": 5112,
        "losses": 4835,
        "draws": 0,
        "winRateWhenPlayed": 0.513923796119433,
        "averageFlips": 0.4737106665326229,
        "averageDamageDealt": 0.4531014376193827,
        "averageNetDamage": 0.2212727455514225,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 558,
            "winRateWhenPlayed": 0.5591397849462365
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 545,
            "winRateWhenPlayed": 0.5614678899082569
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 544,
            "winRateWhenPlayed": 0.5165441176470589
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 476,
            "winRateWhenPlayed": 0.5462184873949579
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 474,
            "winRateWhenPlayed": 0.4957805907172996
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
        "offered": 9843,
        "played": 2282,
        "ignored": 7561,
        "selectionRate": 0.23183988621355278,
        "wins": 1146,
        "losses": 1136,
        "draws": 0,
        "winRateWhenPlayed": 0.5021910604732691,
        "averageFlips": 0.5148992112182296,
        "averageDamageDealt": 0.40885188431200703,
        "averageNetDamage": 0.26468010517090274,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 268,
            "winRateWhenPlayed": 0.5186567164179104
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 267,
            "winRateWhenPlayed": 0.5056179775280899
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 267,
            "winRateWhenPlayed": 0.49063670411985016
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 262,
            "winRateWhenPlayed": 0.5190839694656488
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 261,
            "winRateWhenPlayed": 0.5019157088122606
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
        "offered": 7726,
        "played": 1553,
        "ignored": 6173,
        "selectionRate": 0.20100957804814912,
        "wins": 718,
        "losses": 835,
        "draws": 0,
        "winRateWhenPlayed": 0.4623309723116549,
        "averageFlips": 0.5074050225370251,
        "averageDamageDealt": 0.23824855119124275,
        "averageNetDamage": 0.08435286542176432,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 269,
            "winRateWhenPlayed": 0.46096654275092935
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 261,
            "winRateWhenPlayed": 0.46360153256704983
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 260,
            "winRateWhenPlayed": 0.46153846153846156
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 259,
            "winRateWhenPlayed": 0.44015444015444016
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 253,
            "winRateWhenPlayed": 0.4426877470355731
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
        "offered": 4872,
        "played": 945,
        "ignored": 3927,
        "selectionRate": 0.1939655172413793,
        "wins": 486,
        "losses": 459,
        "draws": 0,
        "winRateWhenPlayed": 0.5142857142857142,
        "averageFlips": 0.4148148148148148,
        "averageDamageDealt": 0.5100529100529101,
        "averageNetDamage": 0.24973544973544975,
        "topCards": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 264,
            "winRateWhenPlayed": 0.48484848484848486
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 254,
            "winRateWhenPlayed": 0.531496062992126
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 251,
            "winRateWhenPlayed": 0.4820717131474104
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 176,
            "winRateWhenPlayed": 0.5795454545454546
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
        "offered": 4243,
        "played": 881,
        "ignored": 3362,
        "selectionRate": 0.20763610652839973,
        "wins": 439,
        "losses": 442,
        "draws": 0,
        "winRateWhenPlayed": 0.4982973893303065,
        "averageFlips": 0.58683314415437,
        "averageDamageDealt": 0.5414301929625426,
        "averageNetDamage": 0.3291713961407492,
        "topCards": [
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 265,
            "winRateWhenPlayed": 0.5094339622641509
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 265,
            "winRateWhenPlayed": 0.5094339622641509
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 264,
            "winRateWhenPlayed": 0.4772727272727273
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 87,
            "winRateWhenPlayed": 0.4942528735632184
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
        "offered": 1151,
        "played": 348,
        "ignored": 803,
        "selectionRate": 0.3023457862728063,
        "wins": 176,
        "losses": 172,
        "draws": 0,
        "winRateWhenPlayed": 0.5057471264367817,
        "averageFlips": 0.3764367816091954,
        "averageDamageDealt": 0.3563218390804598,
        "averageNetDamage": 0.13218390804597702,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 262,
            "winRateWhenPlayed": 0.48091603053435117
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 86,
            "winRateWhenPlayed": 0.5813953488372093
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
        "offered": 1220,
        "played": 266,
        "ignored": 954,
        "selectionRate": 0.2180327868852459,
        "wins": 137,
        "losses": 129,
        "draws": 0,
        "winRateWhenPlayed": 0.5150375939849624,
        "averageFlips": 0.45112781954887216,
        "averageDamageDealt": 0.5413533834586466,
        "averageNetDamage": 0.20300751879699247,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 266,
            "winRateWhenPlayed": 0.5150375939849624
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
        "offered": 70701,
        "played": 16222,
        "ignored": 54479,
        "selectionRate": 0.22944512807456754,
        "wins": 8214,
        "losses": 8008,
        "draws": 0,
        "winRateWhenPlayed": 0.5063494020466034,
        "averageFlips": 0.4829860683023055,
        "averageDamageDealt": 0.4337936136111454,
        "averageNetDamage": 0.21957835038836152,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 826,
            "winRateWhenPlayed": 0.5460048426150121
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 812,
            "winRateWhenPlayed": 0.5431034482758621
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 806,
            "winRateWhenPlayed": 0.5049627791563276
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 743,
            "winRateWhenPlayed": 0.4831763122476447
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 742,
            "winRateWhenPlayed": 0.5350404312668463
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
        "count": 1239,
        "wins": 706,
        "losses": 533,
        "draws": 0,
        "winRate": 0.5698143664245359,
        "averageFlips": 0.5875706214689266,
        "averageDamageDealt": 0.5294592413236481,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 1219,
        "wins": 603,
        "losses": 616,
        "draws": 0,
        "winRate": 0.4946677604593929,
        "averageFlips": 0.5808039376538146,
        "averageDamageDealt": 0.4692370795734208,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 1141,
        "wins": 560,
        "losses": 581,
        "draws": 0,
        "winRate": 0.49079754601226994,
        "averageFlips": 0.4925503943908852,
        "averageDamageDealt": 0.32602979842243646,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 1118,
        "wins": 577,
        "losses": 541,
        "draws": 0,
        "winRate": 0.5161001788908766,
        "averageFlips": 0.5152057245080501,
        "averageDamageDealt": 0.49016100178890876,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 1059,
        "wins": 516,
        "losses": 543,
        "draws": 0,
        "winRate": 0.48725212464589235,
        "averageFlips": 0.5259678942398489,
        "averageDamageDealt": 0.41076487252124644,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 1027,
        "wins": 522,
        "losses": 505,
        "draws": 0,
        "winRate": 0.5082765335929893,
        "averageFlips": 0.5540408958130477,
        "averageDamageDealt": 0.43037974683544306,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 983,
        "wins": 491,
        "losses": 492,
        "draws": 0,
        "winRate": 0.49949135300101727,
        "averageFlips": 0.6093591047812817,
        "averageDamageDealt": 0.6876907426246185,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 902,
        "wins": 540,
        "losses": 362,
        "draws": 0,
        "winRate": 0.5986696230598669,
        "averageFlips": 0.6496674057649667,
        "averageDamageDealt": 0.8669623059866962,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 895,
        "wins": 423,
        "losses": 472,
        "draws": 0,
        "winRate": 0.47262569832402235,
        "averageFlips": 0.6111731843575419,
        "averageDamageDealt": 0.7430167597765364,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 875,
        "wins": 431,
        "losses": 444,
        "draws": 0,
        "winRate": 0.49257142857142855,
        "averageFlips": 0.5874285714285714,
        "averageDamageDealt": 0.8228571428571428,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 833,
        "wins": 573,
        "losses": 260,
        "draws": 0,
        "winRate": 0.687875150060024,
        "averageFlips": 0.6002400960384153,
        "averageDamageDealt": 0.9651860744297719,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 812,
        "wins": 441,
        "losses": 371,
        "draws": 0,
        "winRate": 0.5431034482758621,
        "averageFlips": 0.5049261083743842,
        "averageDamageDealt": 0.2647783251231527,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:owl:gain-shield",
        "kind": "effect",
        "label": "Chaton des ronces -> gain-shield",
        "count": 806,
        "wins": 407,
        "losses": 399,
        "draws": 0,
        "winRate": 0.5049627791563276,
        "averageFlips": 0.36228287841191065,
        "averageDamageDealt": 0.38337468982630274,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 743,
        "wins": 359,
        "losses": 384,
        "draws": 0,
        "winRate": 0.4831763122476447,
        "averageFlips": 0.3243606998654105,
        "averageDamageDealt": 0.1911170928667564,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 726,
        "wins": 441,
        "losses": 285,
        "draws": 0,
        "winRate": 0.6074380165289256,
        "averageFlips": 0.4986225895316804,
        "averageDamageDealt": 0.9449035812672176,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 724,
        "wins": 363,
        "losses": 361,
        "draws": 0,
        "winRate": 0.5013812154696132,
        "averageFlips": 0.42265193370165743,
        "averageDamageDealt": 0.7265193370165746,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 721,
        "wins": 404,
        "losses": 317,
        "draws": 0,
        "winRate": 0.5603328710124826,
        "averageFlips": 0.3578363384188627,
        "averageDamageDealt": 0.3342579750346741,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 693,
        "wins": 396,
        "losses": 297,
        "draws": 0,
        "winRate": 0.5714285714285714,
        "averageFlips": 0.15873015873015872,
        "averageDamageDealt": 0.18903318903318903,
        "averageEffectAmount": 1.997113997113997,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 684,
        "wins": 336,
        "losses": 348,
        "draws": 0,
        "winRate": 0.49122807017543857,
        "averageFlips": 0.2953216374269006,
        "averageDamageDealt": 0.9371345029239766,
        "averageEffectAmount": 0.6944444444444444,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 643,
        "wins": 380,
        "losses": 263,
        "draws": 0,
        "winRate": 0.5909797822706065,
        "averageFlips": 0.40902021772939345,
        "averageDamageDealt": 0.8538102643856921,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+familiar",
        "kind": "friendly-adjacent",
        "label": "human allie + familiar",
        "count": 598,
        "wins": 341,
        "losses": 257,
        "draws": 0,
        "winRate": 0.5702341137123745,
        "averageFlips": 0.43812709030100333,
        "averageDamageDealt": 0.7792642140468228,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:banner-squire:gain-shield",
        "kind": "effect",
        "label": "Ecuyere banniere -> gain-shield",
        "count": 565,
        "wins": 332,
        "losses": 233,
        "draws": 0,
        "winRate": 0.5876106194690266,
        "averageFlips": 0.4300884955752212,
        "averageDamageDealt": 0.647787610619469,
        "averageEffectAmount": 1.6371681415929205,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 553,
        "wins": 286,
        "losses": 267,
        "draws": 0,
        "winRate": 0.5171790235081374,
        "averageFlips": 0.5949367088607594,
        "averageDamageDealt": 1.2188065099457503,
        "averageEffectAmount": 0.46473779385171793,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 536,
        "wins": 321,
        "losses": 215,
        "draws": 0,
        "winRate": 0.5988805970149254,
        "averageFlips": 0.47388059701492535,
        "averageDamageDealt": 0.7089552238805971,
        "averageEffectAmount": 2.425373134328358,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 850,
        "id": "card-tin-oracle-buff",
        "severity": "problem",
        "action": "buff",
        "title": "Oracle de fer-blanc sous-performe",
        "detail": "202 plays, 45% win, net PV 0.08.",
        "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3537,
        "id": "card-hornling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Cornu farceur est ignoree par les bots",
        "detail": "3537 offres, 17% selection, 50% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2198,
        "id": "card-gear-monk-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Moine engrene est ignoree par les bots",
        "detail": "2198 offres, 17% selection, 47% win quand jouee, role connector.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      }
    ]
  },
  "insights": [
    {
      "id": "skill-inversion-starter14-expert-vs-champion",
      "severity": "problem",
      "title": "Inversion de niveau detectee",
      "detail": "Expert bat Champion sur starter14 (55.6% contre 44.4%).",
      "recommendation": "Regarder les cartes ou situations qui recompensent trop le jeu immediat."
    },
    {
      "id": "diagnostic-card-tin-oracle-buff",
      "severity": "problem",
      "title": "Oracle de fer-blanc sous-performe",
      "detail": "202 plays, 45% win, net PV 0.08. Confiance high, echantillon 850.",
      "recommendation": "Ajouter une compensation: une face defensive, un effet conditionnel, ou une synergie famille plus nette."
    },
    {
      "id": "deck-turn-spread",
      "severity": "watch",
      "title": "La taille de deck change fortement le rythme",
      "detail": "Ecart de 13.06 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    },
    {
      "id": "champion-underperforms-starter14",
      "severity": "watch",
      "title": "Le champion ne depasse pas l'expert",
      "detail": "Champion gagne 44.4% contre Expert sur starter14.",
      "recommendation": "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion."
    },
    {
      "id": "diagnostic-card-hornling-ignored",
      "severity": "watch",
      "title": "Cornu farceur est ignoree par les bots",
      "detail": "3537 offres, 17% selection, 50% win quand jouee, role anchor. Confiance high, echantillon 3537.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-gear-monk-ignored",
      "severity": "watch",
      "title": "Moine engrene est ignoree par les bots",
      "detail": "2198 offres, 17% selection, 47% win quand jouee, role connector. Confiance high, echantillon 2198.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    }
  ]
};
