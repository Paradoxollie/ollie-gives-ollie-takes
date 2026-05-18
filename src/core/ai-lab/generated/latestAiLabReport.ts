import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260518-190443",
  "generatedAt": "2026-05-18T19:04:43.590Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 3,
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
      "averageHpEdge": -20.685185185185187
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 65,
      "losses": 43,
      "draws": 0,
      "winRate": 0.6018518518518519,
      "averageHpEdge": 6.972222222222222
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 59,
      "losses": 49,
      "draws": 0,
      "winRate": 0.5462962962962963,
      "averageHpEdge": 1.3518518518518519
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 58,
      "losses": 50,
      "draws": 0,
      "winRate": 0.5370370370370371,
      "averageHpEdge": 1.5925925925925926
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 34,
      "losses": 20,
      "draws": 0,
      "winRate": 0.6296296296296297,
      "averageHpEdge": 0.8518518518518519
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
        "turns": 51.388888888888886,
        "rounds": 5.722222222222222,
        "flipsPerMatch": 20.666666666666668,
        "flipsPerTurn": 0.40216216216216216,
        "reshuffles": 8.666666666666666,
        "deadTurns": 0,
        "finalHpDifference": 5.611111111111111
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
      "startingPlayerWinRate": 0.3888888888888889,
      "averages": {
        "turns": 52.5,
        "rounds": 5.833333333333333,
        "flipsPerMatch": 19.27777777777778,
        "flipsPerTurn": 0.3671957671957672,
        "reshuffles": 6.166666666666667,
        "deadTurns": 0,
        "finalHpDifference": 5.666666666666667
      },
      "deadTurnFrequency": 0,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a surveiller (39%)."
      ]
    },
    {
      "deckPresetId": "starter14",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.6111111111111112,
      "averages": {
        "turns": 54.05555555555556,
        "rounds": 6.055555555555555,
        "flipsPerMatch": 16.27777777777778,
        "flipsPerTurn": 0.3011305241521069,
        "reshuffles": 4.666666666666667,
        "deadTurns": 0,
        "finalHpDifference": 4.722222222222222
      },
      "deadTurnFrequency": 0,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a surveiller (61%)."
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
          "averageHpEdge": -20.444444444444443
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.444444444444443
        }
      ],
      "averages": {
        "turns": 32.666666666666664,
        "rounds": 3.611111111111111,
        "flipsPerMatch": 19.22222222222222,
        "flipsPerTurn": 0.5884353741496599,
        "reshuffles": 4.666666666666667,
        "deadTurns": 0.3333333333333333,
        "finalHpDifference": 20.444444444444443
      },
      "deadTurnFrequency": 0.01020408163265306
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
          "modelId": "opportunist",
          "games": 18,
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -7.611111111111111
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 7.611111111111111
        }
      ],
      "averages": {
        "turns": 44.22222222222222,
        "rounds": 5.055555555555555,
        "flipsPerMatch": 27,
        "flipsPerTurn": 0.6105527638190955,
        "reshuffles": 7.111111111111111,
        "deadTurns": 0.2777777777777778,
        "finalHpDifference": 9.277777777777779
      },
      "deadTurnFrequency": 0.00628140703517588
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
          "wins": 7,
          "winRate": 0.7
        },
        "enemy": {
          "games": 8,
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 7,
          "losses": 11,
          "draws": 0,
          "winRate": 0.3888888888888889,
          "averageHpEdge": -2.5
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 11,
          "losses": 7,
          "draws": 0,
          "winRate": 0.6111111111111112,
          "averageHpEdge": 2.5
        }
      ],
      "averages": {
        "turns": 49.388888888888886,
        "rounds": 5.5,
        "flipsPerMatch": 20.166666666666668,
        "flipsPerTurn": 0.40832395950506184,
        "reshuffles": 8.277777777777779,
        "deadTurns": 0,
        "finalHpDifference": 7.944444444444445
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
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 4,
          "losses": 14,
          "draws": 0,
          "winRate": 0.2222222222222222,
          "averageHpEdge": -3
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 3
        }
      ],
      "averages": {
        "turns": 44.05555555555556,
        "rounds": 5.111111111111111,
        "flipsPerMatch": 23.72222222222222,
        "flipsPerTurn": 0.5384615384615384,
        "reshuffles": 7.222222222222222,
        "deadTurns": 0,
        "finalHpDifference": 7.222222222222222
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
          "averageHpEdge": -19.944444444444443
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 19.944444444444443
        }
      ],
      "averages": {
        "turns": 33.22222222222222,
        "rounds": 3.8333333333333335,
        "flipsPerMatch": 19.77777777777778,
        "flipsPerTurn": 0.5953177257525084,
        "reshuffles": 3.2222222222222223,
        "deadTurns": 0,
        "finalHpDifference": 19.944444444444443
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
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -5.555555555555555
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 5.555555555555555
        }
      ],
      "averages": {
        "turns": 49.611111111111114,
        "rounds": 5.777777777777778,
        "flipsPerMatch": 29,
        "flipsPerTurn": 0.5845464725643897,
        "reshuffles": 5.666666666666667,
        "deadTurns": 0,
        "finalHpDifference": 8.333333333333334
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
          "wins": 4,
          "losses": 14,
          "draws": 0,
          "winRate": 0.2222222222222222,
          "averageHpEdge": -4.722222222222222
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 4.722222222222222
        }
      ],
      "averages": {
        "turns": 51,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 20.61111111111111,
        "flipsPerTurn": 0.40413943355119825,
        "reshuffles": 5.555555555555555,
        "deadTurns": 0,
        "finalHpDifference": 6.055555555555555
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
          "wins": 9,
          "winRate": 0.9
        },
        "enemy": {
          "games": 8,
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.6666666666666666
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 7,
          "losses": 11,
          "draws": 0,
          "winRate": 0.3888888888888889,
          "averageHpEdge": -0.3333333333333333
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 11,
          "losses": 7,
          "draws": 0,
          "winRate": 0.6111111111111112,
          "averageHpEdge": 0.3333333333333333
        }
      ],
      "averages": {
        "turns": 54,
        "rounds": 6.055555555555555,
        "flipsPerMatch": 29.77777777777778,
        "flipsPerTurn": 0.551440329218107,
        "reshuffles": 6.277777777777778,
        "deadTurns": 0,
        "finalHpDifference": 5.222222222222222
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
          "averageHpEdge": -21.666666666666668
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.666666666666668
        }
      ],
      "averages": {
        "turns": 32.5,
        "rounds": 3.6666666666666665,
        "flipsPerMatch": 17.555555555555557,
        "flipsPerTurn": 0.5401709401709401,
        "reshuffles": 2.4444444444444446,
        "deadTurns": 0,
        "finalHpDifference": 21.666666666666668
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
          "wins": 4,
          "winRate": 0.4
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.4444444444444444
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -7.055555555555555
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 7.055555555555555
        }
      ],
      "averages": {
        "turns": 52.111111111111114,
        "rounds": 5.833333333333333,
        "flipsPerMatch": 31.22222222222222,
        "flipsPerTurn": 0.5991471215351812,
        "reshuffles": 4.944444444444445,
        "deadTurns": 0,
        "finalHpDifference": 7.944444444444445
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
          "wins": 4,
          "winRate": 0.4
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.4444444444444444
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -4.888888888888889
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 4.888888888888889
        }
      ],
      "averages": {
        "turns": 52.27777777777778,
        "rounds": 5.833333333333333,
        "flipsPerMatch": 21.555555555555557,
        "flipsPerTurn": 0.412327311370882,
        "reshuffles": 4.388888888888889,
        "deadTurns": 0,
        "finalHpDifference": 7.333333333333333
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
          "wins": 4,
          "winRate": 0.4
        },
        "enemy": {
          "games": 8,
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.4444444444444444
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 0.7777777777777778
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -0.7777777777777778
        }
      ],
      "averages": {
        "turns": 53.94444444444444,
        "rounds": 6,
        "flipsPerMatch": 27.833333333333332,
        "flipsPerTurn": 0.5159629248197735,
        "reshuffles": 4.388888888888889,
        "deadTurns": 0,
        "finalHpDifference": 6.333333333333333
      },
      "deadTurnFrequency": 0
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
        "offered": 2515,
        "played": 444,
        "ignored": 2071,
        "selectionRate": 0.17654075546719683,
        "wins": 188,
        "losses": 256,
        "draws": 0,
        "winRateWhenPlayed": 0.42342342342342343,
        "averageFlips": 0.39414414414414417,
        "failedImpactRate": 0.5152354570637119,
        "averageFlipMargin": 1.6171428571428572,
        "averageEffectAmount": 0.009009009009009009,
        "averageDamageDealt": 0.30405405405405406,
        "averageDamageTaken": 0.27927927927927926,
        "averageNetDamage": 0.0247747747747748,
        "lethalMoves": 1,
        "roundClosers": 33,
        "byModel": [
          {
            "modelId": "regular",
            "played": 193,
            "winRate": 0.44559585492227977
          },
          {
            "modelId": "expert",
            "played": 94,
            "winRate": 0.425531914893617
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.4177215189873418
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.6590909090909091
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
            "played": 164,
            "winRate": 0.38414634146341464
          },
          {
            "deckPresetId": "starter12",
            "played": 150,
            "winRate": 0.52
          },
          {
            "deckPresetId": "starter14",
            "played": 130,
            "winRate": 0.36153846153846153
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
          "combo-2",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 2499,
        "played": 432,
        "ignored": 2067,
        "selectionRate": 0.17286914765906364,
        "wins": 197,
        "losses": 235,
        "draws": 0,
        "winRateWhenPlayed": 0.45601851851851855,
        "averageFlips": 0.6851851851851852,
        "failedImpactRate": 0.2727272727272727,
        "averageFlipMargin": 1.4324324324324325,
        "averageEffectAmount": 0.5439814814814815,
        "averageDamageDealt": 0.3055555555555556,
        "averageDamageTaken": 0.2708333333333333,
        "averageNetDamage": 0.034722222222222265,
        "lethalMoves": 5,
        "roundClosers": 38,
        "byModel": [
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.4157303370786517
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.45348837209302323
          },
          {
            "modelId": "opportunist",
            "played": 84,
            "winRate": 0.6071428571428571
          },
          {
            "modelId": "champion",
            "played": 52,
            "winRate": 0.6346153846153846
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
            "played": 177,
            "winRate": 0.5141242937853108
          },
          {
            "deckPresetId": "starter12",
            "played": 144,
            "winRate": 0.4305555555555556
          },
          {
            "deckPresetId": "starter14",
            "played": 111,
            "winRate": 0.3963963963963964
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
        "offered": 2467,
        "played": 424,
        "ignored": 2043,
        "selectionRate": 0.17186866639643292,
        "wins": 208,
        "losses": 216,
        "draws": 0,
        "winRateWhenPlayed": 0.49056603773584906,
        "averageFlips": 0.5117924528301887,
        "failedImpactRate": 0.41032608695652173,
        "averageFlipMargin": 1.2764976958525345,
        "averageEffectAmount": 0.3160377358490566,
        "averageDamageDealt": 0.31839622641509435,
        "averageDamageTaken": 0.2830188679245283,
        "averageNetDamage": 0.03537735849056606,
        "lethalMoves": 4,
        "roundClosers": 36,
        "byModel": [
          {
            "modelId": "regular",
            "played": 161,
            "winRate": 0.5093167701863354
          },
          {
            "modelId": "expert",
            "played": 112,
            "winRate": 0.5178571428571429
          },
          {
            "modelId": "opportunist",
            "played": 59,
            "winRate": 0.5254237288135594
          },
          {
            "modelId": "champion",
            "played": 52,
            "winRate": 0.7115384615384616
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
            "played": 151,
            "winRate": 0.4768211920529801
          },
          {
            "deckPresetId": "starter12",
            "played": 144,
            "winRate": 0.5138888888888888
          },
          {
            "deckPresetId": "starter14",
            "played": 129,
            "winRate": 0.4806201550387597
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
        "offered": 2625,
        "played": 401,
        "ignored": 2224,
        "selectionRate": 0.15276190476190477,
        "wins": 193,
        "losses": 208,
        "draws": 0,
        "winRateWhenPlayed": 0.48129675810473815,
        "averageFlips": 0.5311720698254364,
        "failedImpactRate": 0.4634760705289673,
        "averageFlipMargin": 1.5023474178403755,
        "averageEffectAmount": 0.1596009975062344,
        "averageDamageDealt": 0.5311720698254364,
        "averageDamageTaken": 0.24937655860349128,
        "averageNetDamage": 0.2817955112219451,
        "lethalMoves": 9,
        "roundClosers": 43,
        "byModel": [
          {
            "modelId": "regular",
            "played": 175,
            "winRate": 0.5085714285714286
          },
          {
            "modelId": "expert",
            "played": 98,
            "winRate": 0.5102040816326531
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 40,
            "winRate": 0.7
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
            "played": 161,
            "winRate": 0.5527950310559007
          },
          {
            "deckPresetId": "starter12",
            "played": 128,
            "winRate": 0.40625
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
        "offered": 2868,
        "played": 334,
        "ignored": 2534,
        "selectionRate": 0.11645746164574616,
        "wins": 159,
        "losses": 175,
        "draws": 0,
        "winRateWhenPlayed": 0.47604790419161674,
        "averageFlips": 0.6017964071856288,
        "failedImpactRate": 0.3536977491961415,
        "averageFlipMargin": 1.144278606965174,
        "averageEffectAmount": 0.4311377245508982,
        "averageDamageDealt": 0.3323353293413174,
        "averageDamageTaken": 0.27245508982035926,
        "averageNetDamage": 0.05988023952095811,
        "lethalMoves": 3,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 121,
            "winRate": 0.5206611570247934
          },
          {
            "modelId": "expert",
            "played": 87,
            "winRate": 0.5057471264367817
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.6444444444444445
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.5227272727272727
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
            "played": 125,
            "winRate": 0.496
          },
          {
            "deckPresetId": "starter14",
            "played": 108,
            "winRate": 0.4537037037037037
          },
          {
            "deckPresetId": "starter12",
            "played": 101,
            "winRate": 0.4752475247524752
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 752,
        "played": 122,
        "ignored": 630,
        "selectionRate": 0.1622340425531915,
        "wins": 56,
        "losses": 66,
        "draws": 0,
        "winRateWhenPlayed": 0.45901639344262296,
        "averageFlips": 0.5163934426229508,
        "failedImpactRate": 0.42727272727272725,
        "averageFlipMargin": 1.2063492063492063,
        "averageEffectAmount": 0.5163934426229508,
        "averageDamageDealt": 0.4672131147540984,
        "averageDamageTaken": 0.30327868852459017,
        "averageNetDamage": 0.1639344262295082,
        "lethalMoves": 0,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 54,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "expert",
            "played": 23,
            "winRate": 0.5652173913043478
          },
          {
            "modelId": "opportunist",
            "played": 22,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.5384615384615384
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
            "played": 122,
            "winRate": 0.45901639344262296
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
        "offered": 1622,
        "played": 663,
        "ignored": 959,
        "selectionRate": 0.4087546239210851,
        "wins": 359,
        "losses": 304,
        "draws": 0,
        "winRateWhenPlayed": 0.5414781297134238,
        "averageFlips": 0.2971342383107089,
        "failedImpactRate": 0.47745358090185674,
        "averageFlipMargin": 1.83248730964467,
        "averageEffectAmount": 1.4962292609351433,
        "averageDamageDealt": 0.41478129713423834,
        "averageDamageTaken": 0.2171945701357466,
        "averageNetDamage": 0.19758672699849172,
        "lethalMoves": 5,
        "roundClosers": 63,
        "byModel": [
          {
            "modelId": "regular",
            "played": 289,
            "winRate": 0.5605536332179931
          },
          {
            "modelId": "expert",
            "played": 138,
            "winRate": 0.5797101449275363
          },
          {
            "modelId": "opportunist",
            "played": 119,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "champion",
            "played": 76,
            "winRate": 0.7105263157894737
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
            "played": 247,
            "winRate": 0.582995951417004
          },
          {
            "deckPresetId": "starter12",
            "played": 218,
            "winRate": 0.5229357798165137
          },
          {
            "deckPresetId": "starter14",
            "played": 198,
            "winRate": 0.51010101010101
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
        "offered": 1689,
        "played": 660,
        "ignored": 1029,
        "selectionRate": 0.3907637655417407,
        "wins": 355,
        "losses": 305,
        "draws": 0,
        "winRateWhenPlayed": 0.5378787878787878,
        "averageFlips": 0.35454545454545455,
        "failedImpactRate": 0.5052854122621564,
        "averageFlipMargin": 1.8076923076923077,
        "averageEffectAmount": 0.8106060606060606,
        "averageDamageDealt": 1.1227272727272728,
        "averageDamageTaken": 0.24848484848484848,
        "averageNetDamage": 0.8742424242424243,
        "lethalMoves": 14,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 274,
            "winRate": 0.5693430656934306
          },
          {
            "modelId": "expert",
            "played": 157,
            "winRate": 0.535031847133758
          },
          {
            "modelId": "opportunist",
            "played": 117,
            "winRate": 0.5726495726495726
          },
          {
            "modelId": "champion",
            "played": 72,
            "winRate": 0.6666666666666666
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
            "played": 249,
            "winRate": 0.5060240963855421
          },
          {
            "deckPresetId": "starter12",
            "played": 220,
            "winRate": 0.5454545454545454
          },
          {
            "deckPresetId": "starter14",
            "played": 191,
            "winRate": 0.5706806282722513
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
        "offered": 1746,
        "played": 641,
        "ignored": 1105,
        "selectionRate": 0.36712485681557844,
        "wins": 323,
        "losses": 318,
        "draws": 0,
        "winRateWhenPlayed": 0.5039001560062403,
        "averageFlips": 0.38845553822152884,
        "failedImpactRate": 0.5248091603053435,
        "averageFlipMargin": 1.7349397590361446,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.42745709828393136,
        "averageDamageTaken": 0.27613104524180965,
        "averageNetDamage": 0.1513260530421217,
        "lethalMoves": 4,
        "roundClosers": 63,
        "byModel": [
          {
            "modelId": "regular",
            "played": 300,
            "winRate": 0.5333333333333333
          },
          {
            "modelId": "expert",
            "played": 138,
            "winRate": 0.45652173913043476
          },
          {
            "modelId": "opportunist",
            "played": 111,
            "winRate": 0.6036036036036037
          },
          {
            "modelId": "champion",
            "played": 57,
            "winRate": 0.5789473684210527
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
            "played": 231,
            "winRate": 0.49783549783549785
          },
          {
            "deckPresetId": "starter12",
            "played": 214,
            "winRate": 0.5327102803738317
          },
          {
            "deckPresetId": "starter14",
            "played": 196,
            "winRate": 0.47959183673469385
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
        "offered": 2082,
        "played": 628,
        "ignored": 1454,
        "selectionRate": 0.3016330451488953,
        "wins": 327,
        "losses": 301,
        "draws": 0,
        "winRateWhenPlayed": 0.5207006369426752,
        "averageFlips": 0.5461783439490446,
        "failedImpactRate": 0.5202797202797202,
        "averageFlipMargin": 1.4868804664723032,
        "averageEffectAmount": 0.7229299363057324,
        "averageDamageDealt": 1.2802547770700636,
        "averageDamageTaken": 0.3869426751592357,
        "averageNetDamage": 0.8933121019108279,
        "lethalMoves": 14,
        "roundClosers": 76,
        "byModel": [
          {
            "modelId": "regular",
            "played": 262,
            "winRate": 0.5229007633587787
          },
          {
            "modelId": "expert",
            "played": 141,
            "winRate": 0.5531914893617021
          },
          {
            "modelId": "opportunist",
            "played": 106,
            "winRate": 0.6226415094339622
          },
          {
            "modelId": "champion",
            "played": 70,
            "winRate": 0.6571428571428571
          },
          {
            "modelId": "beginner",
            "played": 49,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 222,
            "winRate": 0.49099099099099097
          },
          {
            "deckPresetId": "starter12",
            "played": 219,
            "winRate": 0.5525114155251142
          },
          {
            "deckPresetId": "starter14",
            "played": 187,
            "winRate": 0.5187165775401069
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
        "offered": 2077,
        "played": 619,
        "ignored": 1458,
        "selectionRate": 0.2980259990370727,
        "wins": 321,
        "losses": 298,
        "draws": 0,
        "winRateWhenPlayed": 0.518578352180937,
        "averageFlips": 0.3263327948303716,
        "failedImpactRate": 0.5738396624472574,
        "averageFlipMargin": 1.8663366336633664,
        "averageEffectAmount": 0.555735056542811,
        "averageDamageDealt": 0.6688206785137318,
        "averageDamageTaken": 0.29079159935379645,
        "averageNetDamage": 0.3780290791599354,
        "lethalMoves": 9,
        "roundClosers": 92,
        "byModel": [
          {
            "modelId": "regular",
            "played": 281,
            "winRate": 0.4875444839857651
          },
          {
            "modelId": "expert",
            "played": 147,
            "winRate": 0.564625850340136
          },
          {
            "modelId": "opportunist",
            "played": 93,
            "winRate": 0.5806451612903226
          },
          {
            "modelId": "champion",
            "played": 61,
            "winRate": 0.7704918032786885
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
            "played": 231,
            "winRate": 0.5757575757575758
          },
          {
            "deckPresetId": "starter12",
            "played": 214,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter14",
            "played": 174,
            "winRate": 0.46551724137931033
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
        "offered": 2039,
        "played": 593,
        "ignored": 1446,
        "selectionRate": 0.2908288376655223,
        "wins": 294,
        "losses": 299,
        "draws": 0,
        "winRateWhenPlayed": 0.4957841483979764,
        "averageFlips": 0.5868465430016864,
        "failedImpactRate": 0.4041095890410959,
        "averageFlipMargin": 2.704022988505747,
        "averageEffectAmount": 0.7622259696458684,
        "averageDamageDealt": 0.596964586846543,
        "averageDamageTaken": 0.39291736930860033,
        "averageNetDamage": 0.20404721753794264,
        "lethalMoves": 7,
        "roundClosers": 83,
        "byModel": [
          {
            "modelId": "regular",
            "played": 271,
            "winRate": 0.5166051660516605
          },
          {
            "modelId": "opportunist",
            "played": 114,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 107,
            "winRate": 0.5420560747663551
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.609375
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
            "played": 210,
            "winRate": 0.5428571428571428
          },
          {
            "deckPresetId": "starter12",
            "played": 196,
            "winRate": 0.44387755102040816
          },
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
        "offered": 2167,
        "played": 584,
        "ignored": 1583,
        "selectionRate": 0.26949700046146746,
        "wins": 316,
        "losses": 268,
        "draws": 0,
        "winRateWhenPlayed": 0.541095890410959,
        "averageFlips": 0.4914383561643836,
        "failedImpactRate": 0.4213709677419355,
        "averageFlipMargin": 1.7526132404181185,
        "averageEffectAmount": 0.559931506849315,
        "averageDamageDealt": 0.3955479452054795,
        "averageDamageTaken": 0.261986301369863,
        "averageNetDamage": 0.13356164383561647,
        "lethalMoves": 5,
        "roundClosers": 56,
        "byModel": [
          {
            "modelId": "regular",
            "played": 271,
            "winRate": 0.5645756457564576
          },
          {
            "modelId": "expert",
            "played": 116,
            "winRate": 0.6206896551724138
          },
          {
            "modelId": "opportunist",
            "played": 85,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "champion",
            "played": 71,
            "winRate": 0.647887323943662
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
            "played": 223,
            "winRate": 0.515695067264574
          },
          {
            "deckPresetId": "starter12",
            "played": 191,
            "winRate": 0.5130890052356021
          },
          {
            "deckPresetId": "starter14",
            "played": 170,
            "winRate": 0.6058823529411764
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
        "offered": 2246,
        "played": 579,
        "ignored": 1667,
        "selectionRate": 0.25779162956366874,
        "wins": 340,
        "losses": 239,
        "draws": 0,
        "winRateWhenPlayed": 0.5872193436960277,
        "averageFlips": 0.5181347150259067,
        "failedImpactRate": 0.4836488812392427,
        "averageFlipMargin": 1.5633333333333332,
        "averageEffectAmount": 1.6355785837651122,
        "averageDamageDealt": 0.8082901554404145,
        "averageDamageTaken": 0.2711571675302245,
        "averageNetDamage": 0.53713298791019,
        "lethalMoves": 10,
        "roundClosers": 114,
        "byModel": [
          {
            "modelId": "regular",
            "played": 236,
            "winRate": 0.5847457627118644
          },
          {
            "modelId": "expert",
            "played": 135,
            "winRate": 0.562962962962963
          },
          {
            "modelId": "opportunist",
            "played": 107,
            "winRate": 0.7009345794392523
          },
          {
            "modelId": "champion",
            "played": 66,
            "winRate": 0.7727272727272727
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
            "played": 216,
            "winRate": 0.6388888888888888
          },
          {
            "deckPresetId": "starter12",
            "played": 194,
            "winRate": 0.5721649484536082
          },
          {
            "deckPresetId": "starter14",
            "played": 169,
            "winRate": 0.5384615384615384
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
        "offered": 2019,
        "played": 569,
        "ignored": 1450,
        "selectionRate": 0.2818226844972759,
        "wins": 273,
        "losses": 296,
        "draws": 0,
        "winRateWhenPlayed": 0.4797891036906854,
        "averageFlips": 0.45694200351493847,
        "failedImpactRate": 0.44086021505376344,
        "averageFlipMargin": 1.6576923076923078,
        "averageEffectAmount": 0.45694200351493847,
        "averageDamageDealt": 0.4253075571177504,
        "averageDamageTaken": 0.36203866432337434,
        "averageNetDamage": 0.06326889279437609,
        "lethalMoves": 10,
        "roundClosers": 63,
        "byModel": [
          {
            "modelId": "regular",
            "played": 252,
            "winRate": 0.4880952380952381
          },
          {
            "modelId": "expert",
            "played": 125,
            "winRate": 0.52
          },
          {
            "modelId": "opportunist",
            "played": 107,
            "winRate": 0.5514018691588785
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.5531914893617021
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
            "played": 211,
            "winRate": 0.4218009478672986
          },
          {
            "deckPresetId": "starter12",
            "played": 189,
            "winRate": 0.5026455026455027
          },
          {
            "deckPresetId": "starter14",
            "played": 169,
            "winRate": 0.5266272189349113
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
        "offered": 2101,
        "played": 545,
        "ignored": 1556,
        "selectionRate": 0.25940028557829603,
        "wins": 246,
        "losses": 299,
        "draws": 0,
        "winRateWhenPlayed": 0.45137614678899085,
        "averageFlips": 0.4917431192660551,
        "failedImpactRate": 0.32151898734177214,
        "averageFlipMargin": 1.4514925373134329,
        "averageEffectAmount": 0.3119266055045872,
        "averageDamageDealt": 0.563302752293578,
        "averageDamageTaken": 0.23853211009174313,
        "averageNetDamage": 0.3247706422018348,
        "lethalMoves": 13,
        "roundClosers": 38,
        "byModel": [
          {
            "modelId": "regular",
            "played": 230,
            "winRate": 0.5043478260869565
          },
          {
            "modelId": "expert",
            "played": 116,
            "winRate": 0.45689655172413796
          },
          {
            "modelId": "opportunist",
            "played": 92,
            "winRate": 0.4782608695652174
          },
          {
            "modelId": "champion",
            "played": 62,
            "winRate": 0.532258064516129
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
            "played": 203,
            "winRate": 0.45320197044334976
          },
          {
            "deckPresetId": "starter12",
            "played": 183,
            "winRate": 0.40437158469945356
          },
          {
            "deckPresetId": "starter14",
            "played": 159,
            "winRate": 0.5031446540880503
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
        "offered": 2234,
        "played": 541,
        "ignored": 1693,
        "selectionRate": 0.2421665174574754,
        "wins": 289,
        "losses": 252,
        "draws": 0,
        "winRateWhenPlayed": 0.5341959334565619,
        "averageFlips": 0.7005545286506469,
        "failedImpactRate": 0.3565365025466893,
        "averageFlipMargin": 1.7308707124010554,
        "averageEffectAmount": 0.5785582255083179,
        "averageDamageDealt": 1.0517560073937153,
        "averageDamageTaken": 0.2902033271719039,
        "averageNetDamage": 0.7615526802218114,
        "lethalMoves": 11,
        "roundClosers": 54,
        "byModel": [
          {
            "modelId": "regular",
            "played": 237,
            "winRate": 0.5021097046413502
          },
          {
            "modelId": "opportunist",
            "played": 121,
            "winRate": 0.6694214876033058
          },
          {
            "modelId": "expert",
            "played": 102,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 57,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 205,
            "winRate": 0.5317073170731708
          },
          {
            "deckPresetId": "starter12",
            "played": 180,
            "winRate": 0.5888888888888889
          },
          {
            "deckPresetId": "starter14",
            "played": 156,
            "winRate": 0.47435897435897434
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
        "offered": 2273,
        "played": 538,
        "ignored": 1735,
        "selectionRate": 0.23669159700835898,
        "wins": 271,
        "losses": 267,
        "draws": 0,
        "winRateWhenPlayed": 0.5037174721189591,
        "averageFlips": 0.7639405204460966,
        "failedImpactRate": 0.29015544041450775,
        "averageFlipMargin": 1.5304136253041363,
        "averageEffectAmount": 0.7639405204460966,
        "averageDamageDealt": 0.4052044609665427,
        "averageDamageTaken": 0.24907063197026022,
        "averageNetDamage": 0.1561338289962825,
        "lethalMoves": 5,
        "roundClosers": 49,
        "byModel": [
          {
            "modelId": "regular",
            "played": 234,
            "winRate": 0.5085470085470085
          },
          {
            "modelId": "opportunist",
            "played": 123,
            "winRate": 0.5853658536585366
          },
          {
            "modelId": "expert",
            "played": 108,
            "winRate": 0.5277777777777778
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.5348837209302325
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
            "played": 206,
            "winRate": 0.5533980582524272
          },
          {
            "deckPresetId": "starter12",
            "played": 180,
            "winRate": 0.4444444444444444
          },
          {
            "deckPresetId": "starter14",
            "played": 152,
            "winRate": 0.506578947368421
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
        "offered": 2261,
        "played": 534,
        "ignored": 1727,
        "selectionRate": 0.23617868199911543,
        "wins": 269,
        "losses": 265,
        "draws": 0,
        "winRateWhenPlayed": 0.5037453183520599,
        "averageFlips": 0.49063670411985016,
        "failedImpactRate": 0.43655913978494626,
        "averageFlipMargin": 1.717557251908397,
        "averageEffectAmount": 0.5468164794007491,
        "averageDamageDealt": 0.5056179775280899,
        "averageDamageTaken": 0.2940074906367041,
        "averageNetDamage": 0.21161048689138579,
        "lethalMoves": 10,
        "roundClosers": 61,
        "byModel": [
          {
            "modelId": "regular",
            "played": 259,
            "winRate": 0.5521235521235521
          },
          {
            "modelId": "expert",
            "played": 101,
            "winRate": 0.5346534653465347
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.46835443037974683
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.6481481481481481
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
            "played": 194,
            "winRate": 0.4690721649484536
          },
          {
            "deckPresetId": "starter12",
            "played": 182,
            "winRate": 0.5494505494505495
          },
          {
            "deckPresetId": "starter14",
            "played": 158,
            "winRate": 0.4936708860759494
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
        "offered": 2386,
        "played": 509,
        "ignored": 1877,
        "selectionRate": 0.21332774518021794,
        "wins": 249,
        "losses": 260,
        "draws": 0,
        "winRateWhenPlayed": 0.48919449901768175,
        "averageFlips": 0.4715127701375246,
        "failedImpactRate": 0.4805194805194805,
        "averageFlipMargin": 1.5208333333333333,
        "averageEffectAmount": 0.4675834970530452,
        "averageDamageDealt": 0.7917485265225933,
        "averageDamageTaken": 0.4793713163064833,
        "averageNetDamage": 0.31237721021611004,
        "lethalMoves": 8,
        "roundClosers": 98,
        "byModel": [
          {
            "modelId": "regular",
            "played": 214,
            "winRate": 0.5186915887850467
          },
          {
            "modelId": "expert",
            "played": 112,
            "winRate": 0.5178571428571429
          },
          {
            "modelId": "opportunist",
            "played": 89,
            "winRate": 0.5056179775280899
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 0.625
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
            "played": 182,
            "winRate": 0.46153846153846156
          },
          {
            "deckPresetId": "starter12",
            "played": 173,
            "winRate": 0.5144508670520231
          },
          {
            "deckPresetId": "starter14",
            "played": 154,
            "winRate": 0.4935064935064935
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
        "offered": 2323,
        "played": 452,
        "ignored": 1871,
        "selectionRate": 0.19457597933706414,
        "wins": 216,
        "losses": 236,
        "draws": 0,
        "winRateWhenPlayed": 0.4778761061946903,
        "averageFlips": 0.40486725663716816,
        "failedImpactRate": 0.3859060402684564,
        "averageFlipMargin": 1.6065573770491803,
        "averageEffectAmount": 0.26991150442477874,
        "averageDamageDealt": 0.2721238938053097,
        "averageDamageTaken": 0.15486725663716813,
        "averageNetDamage": 0.11725663716814158,
        "lethalMoves": 3,
        "roundClosers": 28,
        "byModel": [
          {
            "modelId": "regular",
            "played": 203,
            "winRate": 0.5172413793103449
          },
          {
            "modelId": "expert",
            "played": 96,
            "winRate": 0.5208333333333334
          },
          {
            "modelId": "opportunist",
            "played": 78,
            "winRate": 0.47435897435897434
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.5853658536585366
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
            "played": 172,
            "winRate": 0.47093023255813954
          },
          {
            "deckPresetId": "starter12",
            "played": 145,
            "winRate": 0.42758620689655175
          },
          {
            "deckPresetId": "starter14",
            "played": 135,
            "winRate": 0.5407407407407407
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
        "offered": 1120,
        "played": 399,
        "ignored": 721,
        "selectionRate": 0.35625,
        "wins": 216,
        "losses": 183,
        "draws": 0,
        "winRateWhenPlayed": 0.5413533834586466,
        "averageFlips": 0.2932330827067669,
        "failedImpactRate": 0.5534351145038168,
        "averageFlipMargin": 1.7008547008547008,
        "averageEffectAmount": 1.543859649122807,
        "averageDamageDealt": 0.3032581453634085,
        "averageDamageTaken": 0.18045112781954886,
        "averageNetDamage": 0.12280701754385964,
        "lethalMoves": 2,
        "roundClosers": 32,
        "byModel": [
          {
            "modelId": "regular",
            "played": 180,
            "winRate": 0.5277777777777778
          },
          {
            "modelId": "expert",
            "played": 77,
            "winRate": 0.6623376623376623
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.5416666666666666
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.6595744680851063
          },
          {
            "modelId": "beginner",
            "played": 23,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 211,
            "winRate": 0.5071090047393365
          },
          {
            "deckPresetId": "starter14",
            "played": 188,
            "winRate": 0.5797872340425532
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
        "offered": 1234,
        "played": 388,
        "ignored": 846,
        "selectionRate": 0.31442463533225284,
        "wins": 236,
        "losses": 152,
        "draws": 0,
        "winRateWhenPlayed": 0.6082474226804123,
        "averageFlips": 0.8376288659793815,
        "failedImpactRate": 0.22248803827751196,
        "averageFlipMargin": 1.4738461538461538,
        "averageEffectAmount": 0.6211340206185567,
        "averageDamageDealt": 1.1469072164948453,
        "averageDamageTaken": 0.23711340206185566,
        "averageNetDamage": 0.9097938144329896,
        "lethalMoves": 11,
        "roundClosers": 40,
        "byModel": [
          {
            "modelId": "regular",
            "played": 154,
            "winRate": 0.6168831168831169
          },
          {
            "modelId": "expert",
            "played": 92,
            "winRate": 0.6413043478260869
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.6582278481012658
          },
          {
            "modelId": "champion",
            "played": 46,
            "winRate": 0.6521739130434783
          },
          {
            "modelId": "beginner",
            "played": 17,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 217,
            "winRate": 0.6175115207373272
          },
          {
            "deckPresetId": "starter14",
            "played": 171,
            "winRate": 0.5964912280701754
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
        "offered": 1421,
        "played": 365,
        "ignored": 1056,
        "selectionRate": 0.2568613652357495,
        "wins": 187,
        "losses": 178,
        "draws": 0,
        "winRateWhenPlayed": 0.5123287671232877,
        "averageFlips": 0.3287671232876712,
        "failedImpactRate": 0.6417910447761194,
        "averageFlipMargin": 1.1916666666666667,
        "averageEffectAmount": 0.6383561643835617,
        "averageDamageDealt": 0.6876712328767123,
        "averageDamageTaken": 0.4958904109589041,
        "averageNetDamage": 0.19178082191780815,
        "lethalMoves": 2,
        "roundClosers": 69,
        "byModel": [
          {
            "modelId": "regular",
            "played": 175,
            "winRate": 0.5485714285714286
          },
          {
            "modelId": "expert",
            "played": 74,
            "winRate": 0.6621621621621622
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.3695652173913043
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.5681818181818182
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
            "played": 185,
            "winRate": 0.4810810810810811
          },
          {
            "deckPresetId": "starter14",
            "played": 180,
            "winRate": 0.5444444444444444
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
        "offered": 1582,
        "played": 296,
        "ignored": 1286,
        "selectionRate": 0.18710493046776233,
        "wins": 149,
        "losses": 147,
        "draws": 0,
        "winRateWhenPlayed": 0.5033783783783784,
        "averageFlips": 0.4222972972972973,
        "failedImpactRate": 0.5059288537549407,
        "averageFlipMargin": 1.416,
        "averageEffectAmount": 0.21283783783783783,
        "averageDamageDealt": 0.47297297297297297,
        "averageDamageTaken": 0.28040540540540543,
        "averageNetDamage": 0.19256756756756754,
        "lethalMoves": 3,
        "roundClosers": 33,
        "byModel": [
          {
            "modelId": "regular",
            "played": 130,
            "winRate": 0.5153846153846153
          },
          {
            "modelId": "expert",
            "played": 64,
            "winRate": 0.640625
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.5833333333333334
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "beginner",
            "played": 31,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 148,
            "winRate": 0.5472972972972973
          },
          {
            "deckPresetId": "starter12",
            "played": 148,
            "winRate": 0.4594594594594595
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
        "offered": 529,
        "played": 175,
        "ignored": 354,
        "selectionRate": 0.33081285444234404,
        "wins": 86,
        "losses": 89,
        "draws": 0,
        "winRateWhenPlayed": 0.49142857142857144,
        "averageFlips": 0.4114285714285714,
        "failedImpactRate": 0.49295774647887325,
        "averageFlipMargin": 2.2083333333333335,
        "averageEffectAmount": 0.9314285714285714,
        "averageDamageDealt": 0.3028571428571429,
        "averageDamageTaken": 0.2571428571428571,
        "averageNetDamage": 0.04571428571428576,
        "lethalMoves": 2,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 77,
            "winRate": 0.5324675324675324
          },
          {
            "modelId": "expert",
            "played": 41,
            "winRate": 0.6341463414634146
          },
          {
            "modelId": "opportunist",
            "played": 33,
            "winRate": 0.3939393939393939
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0.375
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
            "played": 175,
            "winRate": 0.49142857142857144
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
        "offered": 683,
        "played": 146,
        "ignored": 537,
        "selectionRate": 0.21376281112737922,
        "wins": 66,
        "losses": 80,
        "draws": 0,
        "winRateWhenPlayed": 0.4520547945205479,
        "averageFlips": 0.3904109589041096,
        "failedImpactRate": 0.4722222222222222,
        "averageFlipMargin": 1.2982456140350878,
        "averageEffectAmount": 0.22602739726027396,
        "averageDamageDealt": 0.4315068493150685,
        "averageDamageTaken": 0.3561643835616438,
        "averageNetDamage": 0.07534246575342468,
        "lethalMoves": 1,
        "roundClosers": 18,
        "byModel": [
          {
            "modelId": "regular",
            "played": 67,
            "winRate": 0.5373134328358209
          },
          {
            "modelId": "opportunist",
            "played": 27,
            "winRate": 0.4074074074074074
          },
          {
            "modelId": "expert",
            "played": 22,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0.42105263157894735
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
            "played": 146,
            "winRate": 0.4520547945205479
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
          "combo-2",
          "corner",
          "draw-next-turn",
          "payoff"
        ],
        "preferredPositions": [
          "corner"
        ],
        "offered": 717,
        "played": 133,
        "ignored": 584,
        "selectionRate": 0.18549511854951187,
        "wins": 69,
        "losses": 64,
        "draws": 0,
        "winRateWhenPlayed": 0.518796992481203,
        "averageFlips": 0.3157894736842105,
        "failedImpactRate": 0.5531914893617021,
        "averageFlipMargin": 1.619047619047619,
        "averageEffectAmount": 0.3533834586466165,
        "averageDamageDealt": 0.39097744360902253,
        "averageDamageTaken": 0.23308270676691728,
        "averageNetDamage": 0.15789473684210525,
        "lethalMoves": 1,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 65,
            "winRate": 0.5230769230769231
          },
          {
            "modelId": "opportunist",
            "played": 26,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 25,
            "winRate": 0.64
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 133,
            "winRate": 0.518796992481203
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
        "offered": 14679,
        "played": 3980,
        "ignored": 10699,
        "selectionRate": 0.2711356359425029,
        "wins": 1972,
        "losses": 2008,
        "draws": 0,
        "winRateWhenPlayed": 0.49547738693467336,
        "averageFlips": 0.5042713567839195,
        "averageDamageDealt": 0.7919597989949749,
        "averageNetDamage": 0.4761306532663317,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 660,
            "winRateWhenPlayed": 0.5378787878787878
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 628,
            "winRateWhenPlayed": 0.5207006369426752
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 593,
            "winRateWhenPlayed": 0.4957841483979764
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 569,
            "winRateWhenPlayed": 0.4797891036906854
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 545,
            "winRateWhenPlayed": 0.45137614678899085
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
        "offered": 15780,
        "played": 3575,
        "ignored": 12205,
        "selectionRate": 0.22655259822560203,
        "wins": 1810,
        "losses": 1765,
        "draws": 0,
        "winRateWhenPlayed": 0.5062937062937063,
        "averageFlips": 0.4461538461538462,
        "averageDamageDealt": 0.426013986013986,
        "averageNetDamage": 0.1787412587412587,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 663,
            "winRateWhenPlayed": 0.5414781297134238
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 619,
            "winRateWhenPlayed": 0.518578352180937
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 584,
            "winRateWhenPlayed": 0.541095890410959
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 452,
            "winRateWhenPlayed": 0.4778761061946903
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 432,
            "winRateWhenPlayed": 0.45601851851851855
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
        "offered": 15014,
        "played": 3523,
        "ignored": 11491,
        "selectionRate": 0.2346476621819635,
        "wins": 1847,
        "losses": 1676,
        "draws": 0,
        "winRateWhenPlayed": 0.5242690888447346,
        "averageFlips": 0.5642917967641214,
        "averageDamageDealt": 0.621345444223673,
        "averageNetDamage": 0.32273630428611977,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 641,
            "winRateWhenPlayed": 0.5039001560062403
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 579,
            "winRateWhenPlayed": 0.5872193436960277
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 538,
            "winRateWhenPlayed": 0.5037174721189591
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 534,
            "winRateWhenPlayed": 0.5037453183520599
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 509,
            "winRateWhenPlayed": 0.48919449901768175
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
        "offered": 6804,
        "played": 1636,
        "ignored": 5168,
        "selectionRate": 0.24044679600235155,
        "wins": 829,
        "losses": 807,
        "draws": 0,
        "winRateWhenPlayed": 0.5067237163814181,
        "averageFlips": 0.3643031784841076,
        "averageDamageDealt": 0.4504889975550122,
        "averageNetDamage": 0.14425427872860636,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 399,
            "winRateWhenPlayed": 0.5413533834586466
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 365,
            "winRateWhenPlayed": 0.5123287671232877
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 296,
            "winRateWhenPlayed": 0.5033783783783784
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 175,
            "winRateWhenPlayed": 0.49142857142857144
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 146,
            "winRateWhenPlayed": 0.4520547945205479
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
        "offered": 25550,
        "played": 6595,
        "ignored": 18955,
        "selectionRate": 0.25812133072407045,
        "wins": 3440,
        "losses": 3155,
        "draws": 0,
        "winRateWhenPlayed": 0.5216072782410918,
        "averageFlips": 0.48642911296436697,
        "averageDamageDealt": 0.6636846095526915,
        "averageNetDamage": 0.3331311599696741,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 395,
            "winRateWhenPlayed": 0.5392405063291139
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 394,
            "winRateWhenPlayed": 0.5177664974619289
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 371,
            "winRateWhenPlayed": 0.5256064690026954
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 361,
            "winRateWhenPlayed": 0.554016620498615
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 359,
            "winRateWhenPlayed": 0.5264623955431755
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
        "offered": 8544,
        "played": 2253,
        "ignored": 6291,
        "selectionRate": 0.2636938202247191,
        "wins": 1162,
        "losses": 1091,
        "draws": 0,
        "winRateWhenPlayed": 0.5157567687527741,
        "averageFlips": 0.5068797159343098,
        "averageDamageDealt": 0.5947625388371061,
        "averageNetDamage": 0.3790501553484243,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 268,
            "winRateWhenPlayed": 0.5447761194029851
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 266,
            "winRateWhenPlayed": 0.5676691729323309
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 266,
            "winRateWhenPlayed": 0.44360902255639095
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 262,
            "winRateWhenPlayed": 0.4847328244274809
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 261,
            "winRateWhenPlayed": 0.5363984674329502
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
        "offered": 6413,
        "played": 1543,
        "ignored": 4870,
        "selectionRate": 0.2406050210509902,
        "wins": 733,
        "losses": 810,
        "draws": 0,
        "winRateWhenPlayed": 0.475048606610499,
        "averageFlips": 0.4860661049902787,
        "averageDamageDealt": 0.3914452365521711,
        "averageNetDamage": 0.12443292287751134,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 270,
            "winRateWhenPlayed": 0.4740740740740741
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 265,
            "winRateWhenPlayed": 0.5358490566037736
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 259,
            "winRateWhenPlayed": 0.47876447876447875
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 247,
            "winRateWhenPlayed": 0.46963562753036436
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 242,
            "winRateWhenPlayed": 0.4049586776859504
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
        "offered": 4300,
        "played": 922,
        "ignored": 3378,
        "selectionRate": 0.2144186046511628,
        "wins": 448,
        "losses": 474,
        "draws": 0,
        "winRateWhenPlayed": 0.48590021691973967,
        "averageFlips": 0.4436008676789588,
        "averageDamageDealt": 0.5986984815618221,
        "averageNetDamage": 0.35140997830802606,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 267,
            "winRateWhenPlayed": 0.4756554307116105
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 260,
            "winRateWhenPlayed": 0.5076923076923077
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 217,
            "winRateWhenPlayed": 0.45161290322580644
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 178,
            "winRateWhenPlayed": 0.5112359550561798
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
        "offered": 4361,
        "played": 819,
        "ignored": 3542,
        "selectionRate": 0.18780096308186195,
        "wins": 394,
        "losses": 425,
        "draws": 0,
        "winRateWhenPlayed": 0.4810744810744811,
        "averageFlips": 0.48595848595848595,
        "averageDamageDealt": 0.5128205128205128,
        "averageNetDamage": 0.2771672771672771,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 262,
            "winRateWhenPlayed": 0.5114503816793893
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 248,
            "winRateWhenPlayed": 0.4717741935483871
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 233,
            "winRateWhenPlayed": 0.44206008583690987
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 76,
            "winRateWhenPlayed": 0.5263157894736842
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
        "offered": 1873,
        "played": 322,
        "ignored": 1551,
        "selectionRate": 0.17191671115856913,
        "wins": 147,
        "losses": 175,
        "draws": 0,
        "winRateWhenPlayed": 0.45652173913043476,
        "averageFlips": 0.4751552795031056,
        "averageDamageDealt": 0.2888198757763975,
        "averageNetDamage": 0.03416149068322982,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 240,
            "winRateWhenPlayed": 0.4625
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 82,
            "winRateWhenPlayed": 0.43902439024390244
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
        "offered": 1236,
        "played": 260,
        "ignored": 976,
        "selectionRate": 0.21035598705501618,
        "wins": 134,
        "losses": 126,
        "draws": 0,
        "winRateWhenPlayed": 0.5153846153846153,
        "averageFlips": 0.4846153846153846,
        "averageDamageDealt": 0.8269230769230769,
        "averageNetDamage": 0.39230769230769225,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 260,
            "winRateWhenPlayed": 0.5153846153846153
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
        "offered": 52277,
        "played": 12714,
        "ignored": 39563,
        "selectionRate": 0.24320446850431357,
        "wins": 6458,
        "losses": 6256,
        "draws": 0,
        "winRateWhenPlayed": 0.5079439987415447,
        "averageFlips": 0.4865502595563945,
        "averageDamageDealt": 0.5978448953909077,
        "averageNetDamage": 0.3072990404278748,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 663,
            "winRateWhenPlayed": 0.5414781297134238
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 660,
            "winRateWhenPlayed": 0.5378787878787878
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 641,
            "winRateWhenPlayed": 0.5039001560062403
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 628,
            "winRateWhenPlayed": 0.5207006369426752
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 619,
            "winRateWhenPlayed": 0.518578352180937
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
        "count": 958,
        "wins": 500,
        "losses": 458,
        "draws": 0,
        "winRate": 0.5219206680584552,
        "averageFlips": 0.6336116910229646,
        "averageDamageDealt": 0.68580375782881,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 923,
        "wins": 430,
        "losses": 493,
        "draws": 0,
        "winRate": 0.4658721560130011,
        "averageFlips": 0.5861321776814734,
        "averageDamageDealt": 0.8916576381365113,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 901,
        "wins": 459,
        "losses": 442,
        "draws": 0,
        "winRate": 0.5094339622641509,
        "averageFlips": 0.537180910099889,
        "averageDamageDealt": 0.4594894561598224,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 881,
        "wins": 430,
        "losses": 451,
        "draws": 0,
        "winRate": 0.4880817253121453,
        "averageFlips": 0.5709421112372304,
        "averageDamageDealt": 0.9069239500567536,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 847,
        "wins": 447,
        "losses": 400,
        "draws": 0,
        "winRate": 0.5277449822904369,
        "averageFlips": 0.5478158205430933,
        "averageDamageDealt": 0.7485242030696576,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 846,
        "wins": 490,
        "losses": 356,
        "draws": 0,
        "winRate": 0.5791962174940898,
        "averageFlips": 0.6335697399527187,
        "averageDamageDealt": 0.8274231678486997,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 783,
        "wins": 386,
        "losses": 397,
        "draws": 0,
        "winRate": 0.4929757343550447,
        "averageFlips": 0.5964240102171137,
        "averageDamageDealt": 1.0063856960408684,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 767,
        "wins": 395,
        "losses": 372,
        "draws": 0,
        "winRate": 0.5149934810951761,
        "averageFlips": 0.5436766623207301,
        "averageDamageDealt": 0.681877444589309,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 692,
        "wins": 348,
        "losses": 344,
        "draws": 0,
        "winRate": 0.5028901734104047,
        "averageFlips": 0.5332369942196532,
        "averageDamageDealt": 0.5433526011560693,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 667,
        "wins": 393,
        "losses": 274,
        "draws": 0,
        "winRate": 0.5892053973013494,
        "averageFlips": 0.5082458770614693,
        "averageDamageDealt": 1.232383808095952,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 661,
        "wins": 385,
        "losses": 276,
        "draws": 0,
        "winRate": 0.5824508320726173,
        "averageFlips": 0.649016641452345,
        "averageDamageDealt": 1.1830559757942511,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 648,
        "wins": 347,
        "losses": 301,
        "draws": 0,
        "winRate": 0.5354938271604939,
        "averageFlips": 0.35185185185185186,
        "averageDamageDealt": 1.1435185185185186,
        "averageEffectAmount": 0.8256172839506173,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 641,
        "wins": 323,
        "losses": 318,
        "draws": 0,
        "winRate": 0.5039001560062403,
        "averageFlips": 0.38845553822152884,
        "averageDamageDealt": 0.42745709828393136,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 596,
        "wins": 321,
        "losses": 275,
        "draws": 0,
        "winRate": 0.5385906040268457,
        "averageFlips": 0.575503355704698,
        "averageDamageDealt": 1.348993288590604,
        "averageEffectAmount": 0.761744966442953,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 552,
        "wins": 361,
        "losses": 191,
        "draws": 0,
        "winRate": 0.6539855072463768,
        "averageFlips": 0.6177536231884058,
        "averageDamageDealt": 1.210144927536232,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 543,
        "wins": 303,
        "losses": 240,
        "draws": 0,
        "winRate": 0.5580110497237569,
        "averageFlips": 0.43462246777163904,
        "averageDamageDealt": 1.0405156537753222,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 497,
        "wins": 284,
        "losses": 213,
        "draws": 0,
        "winRate": 0.5714285714285714,
        "averageFlips": 0.17706237424547283,
        "averageDamageDealt": 0.30985915492957744,
        "averageEffectAmount": 1.9959758551307847,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 490,
        "wins": 249,
        "losses": 241,
        "draws": 0,
        "winRate": 0.5081632653061224,
        "averageFlips": 0.49795918367346936,
        "averageDamageDealt": 1.473469387755102,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 471,
        "wins": 291,
        "losses": 180,
        "draws": 0,
        "winRate": 0.6178343949044586,
        "averageFlips": 0.4840764331210191,
        "averageDamageDealt": 1.2038216560509554,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 452,
        "wins": 225,
        "losses": 227,
        "draws": 0,
        "winRate": 0.497787610619469,
        "averageFlips": 0.7588495575221239,
        "averageDamageDealt": 0.7743362831858407,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+demon",
        "kind": "friendly-adjacent",
        "label": "familiar allie + demon",
        "count": 442,
        "wins": 258,
        "losses": 184,
        "draws": 0,
        "winRate": 0.583710407239819,
        "averageFlips": 0.5203619909502263,
        "averageDamageDealt": 1.5135746606334841,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:gate-thief:draw-next-turn",
        "kind": "effect",
        "label": "Voleuse des portes -> draw-next-turn",
        "count": 407,
        "wins": 220,
        "losses": 187,
        "draws": 0,
        "winRate": 0.5405405405405406,
        "averageFlips": 1.00982800982801,
        "averageDamageDealt": 0.5257985257985258,
        "averageEffectAmount": 1.00982800982801,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 388,
        "wins": 261,
        "losses": 127,
        "draws": 0,
        "winRate": 0.6726804123711341,
        "averageFlips": 0.46649484536082475,
        "averageDamageDealt": 1.0541237113402062,
        "averageEffectAmount": 2.4407216494845363,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:ember-imp:deal-damage",
        "kind": "effect",
        "label": "Diablotin braise -> deal-damage",
        "count": 375,
        "wins": 226,
        "losses": 149,
        "draws": 0,
        "winRate": 0.6026666666666667,
        "averageFlips": 1.0106666666666666,
        "averageDamageDealt": 1.424,
        "averageEffectAmount": 0.8346666666666667,
        "notes": [
          "Produit beaucoup de flips."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2868,
        "id": "card-quiet-monk-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Moine du seuil est ignoree par les bots",
        "detail": "2868 offres, 12% selection, role anchor.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2625,
        "id": "card-foxfire-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Requin runefer est ignoree par les bots",
        "detail": "2625 offres, 15% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2515,
        "id": "card-cinder-grin-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Sourire de suie est ignoree par les bots",
        "detail": "2515 offres, 18% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2499,
        "id": "card-heron-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "2499 offres, 17% selection, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2467,
        "id": "card-owl-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Chaton des ronces est ignoree par les bots",
        "detail": "2467 offres, 17% selection, role stabilizer.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 752,
        "id": "card-glass-warden-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Gardien de verre est ignoree par les bots",
        "detail": "752 offres, 16% selection, role attacker.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 1873,
        "id": "role-stabilizer-buff",
        "severity": "watch",
        "action": "verify",
        "title": "stabilizer manque d'attraction",
        "detail": "1873 offres, 17% selection, 46% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 452,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "452 occurrences, 50% win, 0.76 flips, 0.77 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gate-thief:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 407,
        "title": "Voleuse des portes -> draw-next-turn ressort comme combo",
        "detail": "407 occurrences, 54% win, 1.01 flips, 0.53 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:ember-imp:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 375,
        "title": "Diablotin braise -> deal-damage ressort comme combo",
        "detail": "375 occurrences, 60% win, 1.01 flips, 1.42 degats.",
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
      "id": "diagnostic-card-quiet-monk-ignored",
      "severity": "problem",
      "title": "Moine du seuil est ignoree par les bots",
      "detail": "2868 offres, 12% selection, role anchor. Confiance high, echantillon 2868.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-foxfire-ignored",
      "severity": "problem",
      "title": "Requin runefer est ignoree par les bots",
      "detail": "2625 offres, 15% selection, role payoff. Confiance high, echantillon 2625.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-cinder-grin-ignored",
      "severity": "problem",
      "title": "Sourire de suie est ignoree par les bots",
      "detail": "2515 offres, 18% selection, role payoff. Confiance high, echantillon 2515.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "problem",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "2499 offres, 17% selection, role connector. Confiance high, echantillon 2499.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "deck-starter12-watch",
      "severity": "watch",
      "title": "starter12 a un signal a surveiller",
      "detail": "Avantage premier joueur a surveiller (39%).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "deck-starter14-watch",
      "severity": "watch",
      "title": "starter14 a un signal a surveiller",
      "detail": "Avantage premier joueur a surveiller (61%).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    }
  ]
};
