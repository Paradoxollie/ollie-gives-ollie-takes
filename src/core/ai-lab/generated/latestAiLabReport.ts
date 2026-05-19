import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260519-122409",
  "generatedAt": "2026-05-19T12:24:09.440Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 7,
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
      "averageHpEdge": -20.90740740740741
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 60,
      "losses": 48,
      "draws": 0,
      "winRate": 0.5555555555555556,
      "averageHpEdge": 6.62962962962963
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 64,
      "losses": 44,
      "draws": 0,
      "winRate": 0.5925925925925926,
      "averageHpEdge": 1.6759259259259258
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 62,
      "losses": 46,
      "draws": 0,
      "winRate": 0.5740740740740741,
      "averageHpEdge": 2.009259259259259
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 30,
      "losses": 24,
      "draws": 0,
      "winRate": 0.5555555555555556,
      "averageHpEdge": 0.2777777777777778
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5555555555555556,
      "averages": {
        "turns": 49.22222222222222,
        "rounds": 5.5,
        "flipsPerMatch": 18.055555555555557,
        "flipsPerTurn": 0.36681715575620766,
        "reshuffles": 8.222222222222221,
        "deadTurns": 0,
        "finalHpDifference": 7.833333333333333
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
        "turns": 53.666666666666664,
        "rounds": 6,
        "flipsPerMatch": 18.77777777777778,
        "flipsPerTurn": 0.3498964803312629,
        "reshuffles": 6.222222222222222,
        "deadTurns": 0,
        "finalHpDifference": 5.833333333333333
      },
      "deadTurnFrequency": 0,
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
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 51.55555555555556,
        "rounds": 5.777777777777778,
        "flipsPerMatch": 17.444444444444443,
        "flipsPerTurn": 0.33836206896551724,
        "reshuffles": 4.5,
        "deadTurns": 0,
        "finalHpDifference": 6.888888888888889
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
          "averageHpEdge": -20.88888888888889
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.88888888888889
        }
      ],
      "averages": {
        "turns": 32.666666666666664,
        "rounds": 3.5555555555555554,
        "flipsPerMatch": 18.055555555555557,
        "flipsPerTurn": 0.5527210884353742,
        "reshuffles": 4.222222222222222,
        "deadTurns": 0.6666666666666666,
        "finalHpDifference": 20.88888888888889
      },
      "deadTurnFrequency": 0.02040816326530612
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
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -9.333333333333334
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 9.333333333333334
        }
      ],
      "averages": {
        "turns": 46.111111111111114,
        "rounds": 5.166666666666667,
        "flipsPerMatch": 27.555555555555557,
        "flipsPerTurn": 0.5975903614457831,
        "reshuffles": 7.166666666666667,
        "deadTurns": 0,
        "finalHpDifference": 9.777777777777779
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
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 6,
          "winRate": 0.75
        },
        "overallStartingPlayerWinRate": 0.6111111111111112
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": -2.1666666666666665
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": 2.1666666666666665
        }
      ],
      "averages": {
        "turns": 47.55555555555556,
        "rounds": 5.333333333333333,
        "flipsPerMatch": 20.61111111111111,
        "flipsPerTurn": 0.433411214953271,
        "reshuffles": 7.888888888888889,
        "deadTurns": 0,
        "finalHpDifference": 6.833333333333333
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
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 0.6666666666666666
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -0.6666666666666666
        }
      ],
      "averages": {
        "turns": 46.55555555555556,
        "rounds": 5.333333333333333,
        "flipsPerMatch": 26.555555555555557,
        "flipsPerTurn": 0.5704057279236276,
        "reshuffles": 8,
        "deadTurns": 0,
        "finalHpDifference": 7
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
          "averageHpEdge": -21.38888888888889
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.38888888888889
        }
      ],
      "averages": {
        "turns": 32.888888888888886,
        "rounds": 3.7777777777777777,
        "flipsPerMatch": 19.22222222222222,
        "flipsPerTurn": 0.5844594594594594,
        "reshuffles": 3.111111111111111,
        "deadTurns": 0,
        "finalHpDifference": 21.38888888888889
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
          "wins": 1,
          "losses": 17,
          "draws": 0,
          "winRate": 0.05555555555555555,
          "averageHpEdge": -6.444444444444445
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 6.444444444444445
        }
      ],
      "averages": {
        "turns": 49.77777777777778,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 30.166666666666668,
        "flipsPerTurn": 0.6060267857142857,
        "reshuffles": 5.611111111111111,
        "deadTurns": 0,
        "finalHpDifference": 6.555555555555555
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
          "wins": 7,
          "losses": 11,
          "draws": 0,
          "winRate": 0.3888888888888889,
          "averageHpEdge": -2.111111111111111
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 11,
          "losses": 7,
          "draws": 0,
          "winRate": 0.6111111111111112,
          "averageHpEdge": 2.111111111111111
        }
      ],
      "averages": {
        "turns": 54.77777777777778,
        "rounds": 6.111111111111111,
        "flipsPerMatch": 21.555555555555557,
        "flipsPerTurn": 0.3935091277890467,
        "reshuffles": 6.5,
        "deadTurns": 0,
        "finalHpDifference": 6.666666666666667
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
          "wins": 6,
          "winRate": 0.6
        },
        "enemy": {
          "games": 8,
          "wins": 6,
          "winRate": 0.75
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
          "averageHpEdge": -2.4444444444444446
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 11,
          "losses": 7,
          "draws": 0,
          "winRate": 0.6111111111111112,
          "averageHpEdge": 2.4444444444444446
        }
      ],
      "averages": {
        "turns": 52.5,
        "rounds": 5.833333333333333,
        "flipsPerMatch": 28.11111111111111,
        "flipsPerTurn": 0.5354497354497354,
        "reshuffles": 6.111111111111111,
        "deadTurns": 0,
        "finalHpDifference": 6.222222222222222
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
        "turns": 34.888888888888886,
        "rounds": 3.888888888888889,
        "flipsPerMatch": 18.833333333333332,
        "flipsPerTurn": 0.5398089171974523,
        "reshuffles": 2.7222222222222223,
        "deadTurns": 0,
        "finalHpDifference": 20.444444444444443
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
          "wins": 4,
          "losses": 14,
          "draws": 0,
          "winRate": 0.2222222222222222,
          "averageHpEdge": -7.166666666666667
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 7.166666666666667
        }
      ],
      "averages": {
        "turns": 51.5,
        "rounds": 5.777777777777778,
        "flipsPerMatch": 30,
        "flipsPerTurn": 0.5825242718446602,
        "reshuffles": 4.777777777777778,
        "deadTurns": 0,
        "finalHpDifference": 8.5
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
          "wins": 5,
          "winRate": 0.625
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
          "averageHpEdge": -8.61111111111111
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 8.61111111111111
        }
      ],
      "averages": {
        "turns": 50.611111111111114,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 18.555555555555557,
        "flipsPerTurn": 0.36663007683863885,
        "reshuffles": 4.388888888888889,
        "deadTurns": 0,
        "finalHpDifference": 8.833333333333334
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
          "wins": 2,
          "winRate": 0.2
        },
        "enemy": {
          "games": 8,
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.2777777777777778
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": 0.9444444444444444
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": -0.9444444444444444
        }
      ],
      "averages": {
        "turns": 52.44444444444444,
        "rounds": 5.888888888888889,
        "flipsPerMatch": 29.72222222222222,
        "flipsPerTurn": 0.5667372881355932,
        "reshuffles": 4.277777777777778,
        "deadTurns": 0,
        "finalHpDifference": 5.166666666666667
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
        "offered": 2605,
        "played": 447,
        "ignored": 2158,
        "selectionRate": 0.17159309021113245,
        "wins": 225,
        "losses": 222,
        "draws": 0,
        "winRateWhenPlayed": 0.5033557046979866,
        "averageFlips": 0.6599552572706935,
        "failedImpactRate": 0.29256594724220625,
        "averageFlipMargin": 1.3728813559322033,
        "averageEffectAmount": 0.48769574944071586,
        "averageDamageDealt": 0.42058165548098436,
        "averageDamageTaken": 0.2662192393736018,
        "averageNetDamage": 0.15436241610738255,
        "lethalMoves": 9,
        "roundClosers": 45,
        "byModel": [
          {
            "modelId": "regular",
            "played": 197,
            "winRate": 0.5228426395939086
          },
          {
            "modelId": "expert",
            "played": 98,
            "winRate": 0.5816326530612245
          },
          {
            "modelId": "opportunist",
            "played": 70,
            "winRate": 0.5142857142857142
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.6590909090909091
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
            "played": 175,
            "winRate": 0.49142857142857144
          },
          {
            "deckPresetId": "starter12",
            "played": 149,
            "winRate": 0.4966442953020134
          },
          {
            "deckPresetId": "starter14",
            "played": 123,
            "winRate": 0.5284552845528455
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 2501,
        "played": 424,
        "ignored": 2077,
        "selectionRate": 0.16953218712514995,
        "wins": 211,
        "losses": 213,
        "draws": 0,
        "winRateWhenPlayed": 0.49764150943396224,
        "averageFlips": 0.44339622641509435,
        "failedImpactRate": 0.5013262599469496,
        "averageFlipMargin": 1.648936170212766,
        "averageEffectAmount": 0.009433962264150943,
        "averageDamageDealt": 0.4410377358490566,
        "averageDamageTaken": 0.3466981132075472,
        "averageNetDamage": 0.09433962264150941,
        "lethalMoves": 2,
        "roundClosers": 47,
        "byModel": [
          {
            "modelId": "regular",
            "played": 199,
            "winRate": 0.5477386934673367
          },
          {
            "modelId": "expert",
            "played": 69,
            "winRate": 0.6231884057971014
          },
          {
            "modelId": "opportunist",
            "played": 69,
            "winRate": 0.463768115942029
          },
          {
            "modelId": "champion",
            "played": 53,
            "winRate": 0.5094339622641509
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
            "played": 159,
            "winRate": 0.4591194968553459
          },
          {
            "deckPresetId": "starter12",
            "played": 139,
            "winRate": 0.539568345323741
          },
          {
            "deckPresetId": "starter14",
            "played": 126,
            "winRate": 0.5
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
        "offered": 2495,
        "played": 419,
        "ignored": 2076,
        "selectionRate": 0.16793587174348698,
        "wins": 212,
        "losses": 207,
        "draws": 0,
        "winRateWhenPlayed": 0.5059665871121718,
        "averageFlips": 0.5560859188544153,
        "failedImpactRate": 0.3685636856368564,
        "averageFlipMargin": 1.2532188841201717,
        "averageEffectAmount": 0.31742243436754175,
        "averageDamageDealt": 0.38902147971360385,
        "averageDamageTaken": 0.29832935560859186,
        "averageNetDamage": 0.09069212410501198,
        "lethalMoves": 6,
        "roundClosers": 41,
        "byModel": [
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.5730337078651685
          },
          {
            "modelId": "expert",
            "played": 96,
            "winRate": 0.5416666666666666
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.6363636363636364
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
            "played": 164,
            "winRate": 0.524390243902439
          },
          {
            "deckPresetId": "starter12",
            "played": 134,
            "winRate": 0.4925373134328358
          },
          {
            "deckPresetId": "starter14",
            "played": 121,
            "winRate": 0.49586776859504134
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
        "offered": 2728,
        "played": 388,
        "ignored": 2340,
        "selectionRate": 0.14222873900293256,
        "wins": 170,
        "losses": 218,
        "draws": 0,
        "winRateWhenPlayed": 0.4381443298969072,
        "averageFlips": 0.5025773195876289,
        "failedImpactRate": 0.47297297297297297,
        "averageFlipMargin": 1.4923076923076923,
        "averageEffectAmount": 0.13659793814432988,
        "averageDamageDealt": 0.7061855670103093,
        "averageDamageTaken": 0.3917525773195876,
        "averageNetDamage": 0.3144329896907217,
        "lethalMoves": 6,
        "roundClosers": 62,
        "byModel": [
          {
            "modelId": "regular",
            "played": 161,
            "winRate": 0.5341614906832298
          },
          {
            "modelId": "expert",
            "played": 101,
            "winRate": 0.43564356435643564
          },
          {
            "modelId": "opportunist",
            "played": 48,
            "winRate": 0.4791666666666667
          },
          {
            "modelId": "beginner",
            "played": 42,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.4722222222222222
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
            "played": 138,
            "winRate": 0.43478260869565216
          },
          {
            "deckPresetId": "starter14",
            "played": 106,
            "winRate": 0.49056603773584906
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
        "offered": 2768,
        "played": 315,
        "ignored": 2453,
        "selectionRate": 0.11380057803468208,
        "wins": 143,
        "losses": 172,
        "draws": 0,
        "winRateWhenPlayed": 0.45396825396825397,
        "averageFlips": 0.5714285714285714,
        "failedImpactRate": 0.3939393939393939,
        "averageFlipMargin": 1.1333333333333333,
        "averageEffectAmount": 0.39365079365079364,
        "averageDamageDealt": 0.346031746031746,
        "averageDamageTaken": 0.2222222222222222,
        "averageNetDamage": 0.12380952380952381,
        "lethalMoves": 4,
        "roundClosers": 26,
        "byModel": [
          {
            "modelId": "regular",
            "played": 108,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 87,
            "winRate": 0.5747126436781609
          },
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.37777777777777777
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.5116279069767442
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
            "played": 113,
            "winRate": 0.4336283185840708
          },
          {
            "deckPresetId": "starter12",
            "played": 113,
            "winRate": 0.37168141592920356
          },
          {
            "deckPresetId": "starter14",
            "played": 89,
            "winRate": 0.5842696629213483
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
        "offered": 709,
        "played": 126,
        "ignored": 583,
        "selectionRate": 0.1777150916784203,
        "wins": 67,
        "losses": 59,
        "draws": 0,
        "winRateWhenPlayed": 0.5317460317460317,
        "averageFlips": 0.2857142857142857,
        "failedImpactRate": 0.5324675324675324,
        "averageFlipMargin": 1.6944444444444444,
        "averageEffectAmount": 0.31746031746031744,
        "averageDamageDealt": 0.15873015873015872,
        "averageDamageTaken": 0.11904761904761904,
        "averageNetDamage": 0.03968253968253968,
        "lethalMoves": 0,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "regular",
            "played": 58,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 28,
            "winRate": 0.7857142857142857
          },
          {
            "modelId": "opportunist",
            "played": 18,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0.6666666666666666
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
            "played": 126,
            "winRate": 0.5317460317460317
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1736,
        "played": 661,
        "ignored": 1075,
        "selectionRate": 0.3807603686635945,
        "wins": 327,
        "losses": 334,
        "draws": 0,
        "winRateWhenPlayed": 0.4947049924357035,
        "averageFlips": 0.35098335854765506,
        "failedImpactRate": 0.5236139630390144,
        "averageFlipMargin": 1.6724137931034482,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.3615733736762481,
        "averageDamageTaken": 0.23600605143721634,
        "averageNetDamage": 0.12556732223903175,
        "lethalMoves": 8,
        "roundClosers": 53,
        "byModel": [
          {
            "modelId": "regular",
            "played": 293,
            "winRate": 0.552901023890785
          },
          {
            "modelId": "opportunist",
            "played": 127,
            "winRate": 0.48031496062992124
          },
          {
            "modelId": "expert",
            "played": 126,
            "winRate": 0.5158730158730159
          },
          {
            "modelId": "champion",
            "played": 75,
            "winRate": 0.52
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
            "played": 253,
            "winRate": 0.48221343873517786
          },
          {
            "deckPresetId": "starter12",
            "played": 223,
            "winRate": 0.4618834080717489
          },
          {
            "deckPresetId": "starter14",
            "played": 185,
            "winRate": 0.5513513513513514
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
        "offered": 1664,
        "played": 660,
        "ignored": 1004,
        "selectionRate": 0.39663461538461536,
        "wins": 346,
        "losses": 314,
        "draws": 0,
        "winRateWhenPlayed": 0.5242424242424243,
        "averageFlips": 0.31666666666666665,
        "failedImpactRate": 0.5184331797235023,
        "averageFlipMargin": 1.9425837320574162,
        "averageEffectAmount": 0.8242424242424242,
        "averageDamageDealt": 1.1606060606060606,
        "averageDamageTaken": 0.22424242424242424,
        "averageNetDamage": 0.9363636363636364,
        "lethalMoves": 6,
        "roundClosers": 49,
        "byModel": [
          {
            "modelId": "regular",
            "played": 290,
            "winRate": 0.5413793103448276
          },
          {
            "modelId": "expert",
            "played": 127,
            "winRate": 0.6141732283464567
          },
          {
            "modelId": "opportunist",
            "played": 123,
            "winRate": 0.5284552845528455
          },
          {
            "modelId": "champion",
            "played": 79,
            "winRate": 0.5822784810126582
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
            "played": 252,
            "winRate": 0.49603174603174605
          },
          {
            "deckPresetId": "starter12",
            "played": 220,
            "winRate": 0.5863636363636363
          },
          {
            "deckPresetId": "starter14",
            "played": 188,
            "winRate": 0.48936170212765956
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
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
        "played": 659,
        "ignored": 963,
        "selectionRate": 0.406288532675709,
        "wins": 360,
        "losses": 299,
        "draws": 0,
        "winRateWhenPlayed": 0.5462822458270106,
        "averageFlips": 0.2534142640364188,
        "failedImpactRate": 0.5424657534246575,
        "averageFlipMargin": 1.8562874251497006,
        "averageEffectAmount": 1.5690440060698028,
        "averageDamageDealt": 0.32473444613050073,
        "averageDamageTaken": 0.17754172989377845,
        "averageNetDamage": 0.14719271623672228,
        "lethalMoves": 5,
        "roundClosers": 50,
        "byModel": [
          {
            "modelId": "regular",
            "played": 297,
            "winRate": 0.6094276094276094
          },
          {
            "modelId": "expert",
            "played": 144,
            "winRate": 0.6527777777777778
          },
          {
            "modelId": "opportunist",
            "played": 110,
            "winRate": 0.38181818181818183
          },
          {
            "modelId": "champion",
            "played": 63,
            "winRate": 0.6825396825396826
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
            "played": 244,
            "winRate": 0.5450819672131147
          },
          {
            "deckPresetId": "starter12",
            "played": 219,
            "winRate": 0.5844748858447488
          },
          {
            "deckPresetId": "starter14",
            "played": 196,
            "winRate": 0.5051020408163265
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
        "offered": 2037,
        "played": 624,
        "ignored": 1413,
        "selectionRate": 0.30633284241531666,
        "wins": 311,
        "losses": 313,
        "draws": 0,
        "winRateWhenPlayed": 0.4983974358974359,
        "averageFlips": 0.32051282051282054,
        "failedImpactRate": 0.576271186440678,
        "averageFlipMargin": 1.82,
        "averageEffectAmount": 0.5785256410256411,
        "averageDamageDealt": 0.6233974358974359,
        "averageDamageTaken": 0.358974358974359,
        "averageNetDamage": 0.2644230769230769,
        "lethalMoves": 9,
        "roundClosers": 95,
        "byModel": [
          {
            "modelId": "regular",
            "played": 268,
            "winRate": 0.5783582089552238
          },
          {
            "modelId": "expert",
            "played": 134,
            "winRate": 0.5447761194029851
          },
          {
            "modelId": "opportunist",
            "played": 112,
            "winRate": 0.3482142857142857
          },
          {
            "modelId": "champion",
            "played": 75,
            "winRate": 0.5866666666666667
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
            "played": 235,
            "winRate": 0.46808510638297873
          },
          {
            "deckPresetId": "starter12",
            "played": 204,
            "winRate": 0.5441176470588235
          },
          {
            "deckPresetId": "starter14",
            "played": 185,
            "winRate": 0.4864864864864865
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
        "offered": 2064,
        "played": 608,
        "ignored": 1456,
        "selectionRate": 0.29457364341085274,
        "wins": 346,
        "losses": 262,
        "draws": 0,
        "winRateWhenPlayed": 0.569078947368421,
        "averageFlips": 0.5263157894736842,
        "failedImpactRate": 0.5273264401772526,
        "averageFlipMargin": 1.565625,
        "averageEffectAmount": 0.7319078947368421,
        "averageDamageDealt": 1.236842105263158,
        "averageDamageTaken": 0.3042763157894737,
        "averageNetDamage": 0.9325657894736843,
        "lethalMoves": 10,
        "roundClosers": 68,
        "byModel": [
          {
            "modelId": "regular",
            "played": 250,
            "winRate": 0.58
          },
          {
            "modelId": "expert",
            "played": 130,
            "winRate": 0.6538461538461539
          },
          {
            "modelId": "opportunist",
            "played": 106,
            "winRate": 0.5754716981132075
          },
          {
            "modelId": "champion",
            "played": 81,
            "winRate": 0.6790123456790124
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
            "played": 222,
            "winRate": 0.5765765765765766
          },
          {
            "deckPresetId": "starter12",
            "played": 204,
            "winRate": 0.5588235294117647
          },
          {
            "deckPresetId": "starter14",
            "played": 182,
            "winRate": 0.5714285714285714
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
        "offered": 2037,
        "played": 599,
        "ignored": 1438,
        "selectionRate": 0.29405989199803634,
        "wins": 301,
        "losses": 298,
        "draws": 0,
        "winRateWhenPlayed": 0.5025041736227045,
        "averageFlips": 0.6210350584307178,
        "failedImpactRate": 0.3901639344262295,
        "averageFlipMargin": 2.7580645161290325,
        "averageEffectAmount": 0.7796327212020033,
        "averageDamageDealt": 0.6060100166944908,
        "averageDamageTaken": 0.38731218697829717,
        "averageNetDamage": 0.21869782971619367,
        "lethalMoves": 7,
        "roundClosers": 87,
        "byModel": [
          {
            "modelId": "regular",
            "played": 261,
            "winRate": 0.5440613026819924
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.5772357723577236
          },
          {
            "modelId": "opportunist",
            "played": 121,
            "winRate": 0.4462809917355372
          },
          {
            "modelId": "champion",
            "played": 59,
            "winRate": 0.576271186440678
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
            "played": 221,
            "winRate": 0.502262443438914
          },
          {
            "deckPresetId": "starter12",
            "played": 209,
            "winRate": 0.5358851674641149
          },
          {
            "deckPresetId": "starter14",
            "played": 169,
            "winRate": 0.46153846153846156
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
        "offered": 2042,
        "played": 581,
        "ignored": 1461,
        "selectionRate": 0.28452497551420175,
        "wins": 266,
        "losses": 315,
        "draws": 0,
        "winRateWhenPlayed": 0.4578313253012048,
        "averageFlips": 0.48709122203098104,
        "failedImpactRate": 0.4259634888438134,
        "averageFlipMargin": 1.6537102473498233,
        "averageEffectAmount": 0.48709122203098104,
        "averageDamageDealt": 0.33218588640275387,
        "averageDamageTaken": 0.28399311531841653,
        "averageNetDamage": 0.04819277108433734,
        "lethalMoves": 4,
        "roundClosers": 50,
        "byModel": [
          {
            "modelId": "regular",
            "played": 273,
            "winRate": 0.4981684981684982
          },
          {
            "modelId": "opportunist",
            "played": 108,
            "winRate": 0.4722222222222222
          },
          {
            "modelId": "expert",
            "played": 106,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 55,
            "winRate": 0.4727272727272727
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
            "played": 227,
            "winRate": 0.47577092511013214
          },
          {
            "deckPresetId": "starter12",
            "played": 188,
            "winRate": 0.43617021276595747
          },
          {
            "deckPresetId": "starter14",
            "played": 166,
            "winRate": 0.4578313253012048
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
        "offered": 2112,
        "played": 577,
        "ignored": 1535,
        "selectionRate": 0.27320075757575757,
        "wins": 311,
        "losses": 266,
        "draws": 0,
        "winRateWhenPlayed": 0.5389948006932409,
        "averageFlips": 0.4696707105719237,
        "failedImpactRate": 0.4146868250539957,
        "averageFlipMargin": 1.7011070110701108,
        "averageEffectAmount": 0.5701906412478336,
        "averageDamageDealt": 0.5459272097053726,
        "averageDamageTaken": 0.24783362218370883,
        "averageNetDamage": 0.2980935875216637,
        "lethalMoves": 11,
        "roundClosers": 65,
        "byModel": [
          {
            "modelId": "regular",
            "played": 263,
            "winRate": 0.6007604562737643
          },
          {
            "modelId": "expert",
            "played": 135,
            "winRate": 0.5851851851851851
          },
          {
            "modelId": "opportunist",
            "played": 93,
            "winRate": 0.4731182795698925
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 0.6
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
            "played": 207,
            "winRate": 0.5314009661835749
          },
          {
            "deckPresetId": "starter12",
            "played": 202,
            "winRate": 0.5544554455445545
          },
          {
            "deckPresetId": "starter14",
            "played": 168,
            "winRate": 0.5297619047619048
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
        "offered": 2187,
        "played": 557,
        "ignored": 1630,
        "selectionRate": 0.25468678555098306,
        "wins": 316,
        "losses": 241,
        "draws": 0,
        "winRateWhenPlayed": 0.5673249551166966,
        "averageFlips": 0.8025134649910234,
        "failedImpactRate": 0.28708133971291866,
        "averageFlipMargin": 1.5771812080536913,
        "averageEffectAmount": 0.8025134649910234,
        "averageDamageDealt": 0.49730700179533216,
        "averageDamageTaken": 0.3016157989228007,
        "averageNetDamage": 0.19569120287253144,
        "lethalMoves": 10,
        "roundClosers": 63,
        "byModel": [
          {
            "modelId": "regular",
            "played": 252,
            "winRate": 0.5992063492063492
          },
          {
            "modelId": "opportunist",
            "played": 122,
            "winRate": 0.5573770491803278
          },
          {
            "modelId": "expert",
            "played": 108,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.6410256410256411
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
            "played": 207,
            "winRate": 0.5990338164251208
          },
          {
            "deckPresetId": "starter12",
            "played": 193,
            "winRate": 0.5751295336787565
          },
          {
            "deckPresetId": "starter14",
            "played": 157,
            "winRate": 0.5159235668789809
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
        "offered": 2273,
        "played": 552,
        "ignored": 1721,
        "selectionRate": 0.24285085789705235,
        "wins": 276,
        "losses": 276,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.6304347826086957,
        "failedImpactRate": 0.3958333333333333,
        "averageFlipMargin": 1.6379310344827587,
        "averageEffectAmount": 0.4855072463768116,
        "averageDamageDealt": 0.9528985507246377,
        "averageDamageTaken": 0.3278985507246377,
        "averageNetDamage": 0.625,
        "lethalMoves": 16,
        "roundClosers": 58,
        "byModel": [
          {
            "modelId": "regular",
            "played": 215,
            "winRate": 0.5302325581395348
          },
          {
            "modelId": "expert",
            "played": 121,
            "winRate": 0.5537190082644629
          },
          {
            "modelId": "opportunist",
            "played": 107,
            "winRate": 0.4953271028037383
          },
          {
            "modelId": "champion",
            "played": 59,
            "winRate": 0.711864406779661
          },
          {
            "modelId": "beginner",
            "played": 50,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 201,
            "winRate": 0.527363184079602
          },
          {
            "deckPresetId": "starter12",
            "played": 195,
            "winRate": 0.4666666666666667
          },
          {
            "deckPresetId": "starter14",
            "played": 156,
            "winRate": 0.5064102564102564
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
        "offered": 2212,
        "played": 551,
        "ignored": 1661,
        "selectionRate": 0.24909584086799277,
        "wins": 270,
        "losses": 281,
        "draws": 0,
        "winRateWhenPlayed": 0.4900181488203267,
        "averageFlips": 0.5081669691470054,
        "failedImpactRate": 0.43089430894308944,
        "averageFlipMargin": 1.6392857142857142,
        "averageEffectAmount": 0.5934664246823956,
        "averageDamageDealt": 0.4863883847549909,
        "averageDamageTaken": 0.308529945553539,
        "averageNetDamage": 0.1778584392014519,
        "lethalMoves": 9,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 248,
            "winRate": 0.5362903225806451
          },
          {
            "modelId": "expert",
            "played": 110,
            "winRate": 0.5363636363636364
          },
          {
            "modelId": "opportunist",
            "played": 100,
            "winRate": 0.48
          },
          {
            "modelId": "champion",
            "played": 60,
            "winRate": 0.5
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
            "played": 202,
            "winRate": 0.5247524752475248
          },
          {
            "deckPresetId": "starter12",
            "played": 184,
            "winRate": 0.4673913043478261
          },
          {
            "deckPresetId": "starter14",
            "played": 165,
            "winRate": 0.4727272727272727
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
        "offered": 2079,
        "played": 541,
        "ignored": 1538,
        "selectionRate": 0.26022126022126024,
        "wins": 260,
        "losses": 281,
        "draws": 0,
        "winRateWhenPlayed": 0.4805914972273567,
        "averageFlips": 0.49722735674676527,
        "failedImpactRate": 0.31202046035805625,
        "averageFlipMargin": 1.483271375464684,
        "averageEffectAmount": 0.3123844731977819,
        "averageDamageDealt": 0.5988909426987061,
        "averageDamageTaken": 0.19408502772643252,
        "averageNetDamage": 0.4048059149722736,
        "lethalMoves": 14,
        "roundClosers": 34,
        "byModel": [
          {
            "modelId": "regular",
            "played": 223,
            "winRate": 0.5426008968609866
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.4796747967479675
          },
          {
            "modelId": "opportunist",
            "played": 101,
            "winRate": 0.48514851485148514
          },
          {
            "modelId": "champion",
            "played": 62,
            "winRate": 0.5
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
            "played": 196,
            "winRate": 0.5102040816326531
          },
          {
            "deckPresetId": "starter12",
            "played": 180,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter14",
            "played": 165,
            "winRate": 0.42424242424242425
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
        "offered": 2359,
        "played": 538,
        "ignored": 1821,
        "selectionRate": 0.22806273844849512,
        "wins": 278,
        "losses": 260,
        "draws": 0,
        "winRateWhenPlayed": 0.516728624535316,
        "averageFlips": 0.4646840148698885,
        "failedImpactRate": 0.4939271255060729,
        "averageFlipMargin": 1.42,
        "averageEffectAmount": 0.5408921933085502,
        "averageDamageDealt": 0.7732342007434945,
        "averageDamageTaken": 0.40148698884758366,
        "averageNetDamage": 0.3717472118959108,
        "lethalMoves": 12,
        "roundClosers": 101,
        "byModel": [
          {
            "modelId": "regular",
            "played": 225,
            "winRate": 0.5733333333333334
          },
          {
            "modelId": "expert",
            "played": 111,
            "winRate": 0.5765765765765766
          },
          {
            "modelId": "opportunist",
            "played": 90,
            "winRate": 0.4888888888888889
          },
          {
            "modelId": "champion",
            "played": 74,
            "winRate": 0.5540540540540541
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
            "played": 197,
            "winRate": 0.5126903553299492
          },
          {
            "deckPresetId": "starter12",
            "played": 180,
            "winRate": 0.5277777777777778
          },
          {
            "deckPresetId": "starter14",
            "played": 161,
            "winRate": 0.5093167701863354
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
        "offered": 2397,
        "played": 537,
        "ignored": 1860,
        "selectionRate": 0.22403003754693368,
        "wins": 285,
        "losses": 252,
        "draws": 0,
        "winRateWhenPlayed": 0.5307262569832403,
        "averageFlips": 0.5083798882681564,
        "failedImpactRate": 0.4780114722753346,
        "averageFlipMargin": 1.5714285714285714,
        "averageEffectAmount": 1.584729981378026,
        "averageDamageDealt": 0.659217877094972,
        "averageDamageTaken": 0.2271880819366853,
        "averageNetDamage": 0.43202979515828677,
        "lethalMoves": 9,
        "roundClosers": 84,
        "byModel": [
          {
            "modelId": "regular",
            "played": 226,
            "winRate": 0.588495575221239
          },
          {
            "modelId": "expert",
            "played": 117,
            "winRate": 0.5982905982905983
          },
          {
            "modelId": "opportunist",
            "played": 99,
            "winRate": 0.494949494949495
          },
          {
            "modelId": "champion",
            "played": 57,
            "winRate": 0.5789473684210527
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
            "played": 194,
            "winRate": 0.5670103092783505
          },
          {
            "deckPresetId": "starter12",
            "played": 189,
            "winRate": 0.4656084656084656
          },
          {
            "deckPresetId": "starter14",
            "played": 154,
            "winRate": 0.564935064935065
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
        "offered": 2313,
        "played": 463,
        "ignored": 1850,
        "selectionRate": 0.2001729355814959,
        "wins": 235,
        "losses": 228,
        "draws": 0,
        "winRateWhenPlayed": 0.5075593952483801,
        "averageFlips": 0.45788336933045354,
        "failedImpactRate": 0.4111111111111111,
        "averageFlipMargin": 1.4528301886792452,
        "averageEffectAmount": 0.2526997840172786,
        "averageDamageDealt": 0.42116630669546434,
        "averageDamageTaken": 0.24622030237580994,
        "averageNetDamage": 0.1749460043196544,
        "lethalMoves": 5,
        "roundClosers": 42,
        "byModel": [
          {
            "modelId": "regular",
            "played": 205,
            "winRate": 0.5902439024390244
          },
          {
            "modelId": "expert",
            "played": 104,
            "winRate": 0.5576923076923077
          },
          {
            "modelId": "opportunist",
            "played": 78,
            "winRate": 0.4358974358974359
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.5238095238095238
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
            "played": 173,
            "winRate": 0.47398843930635837
          },
          {
            "deckPresetId": "starter12",
            "played": 161,
            "winRate": 0.4968944099378882
          },
          {
            "deckPresetId": "starter14",
            "played": 129,
            "winRate": 0.5658914728682171
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
        "offered": 1188,
        "played": 386,
        "ignored": 802,
        "selectionRate": 0.32491582491582494,
        "wins": 225,
        "losses": 161,
        "draws": 0,
        "winRateWhenPlayed": 0.582901554404145,
        "averageFlips": 0.7875647668393783,
        "failedImpactRate": 0.2639225181598063,
        "averageFlipMargin": 1.611842105263158,
        "averageEffectAmount": 0.5492227979274611,
        "averageDamageDealt": 1.0362694300518134,
        "averageDamageTaken": 0.23575129533678757,
        "averageNetDamage": 0.8005181347150259,
        "lethalMoves": 9,
        "roundClosers": 38,
        "byModel": [
          {
            "modelId": "regular",
            "played": 169,
            "winRate": 0.5976331360946746
          },
          {
            "modelId": "expert",
            "played": 83,
            "winRate": 0.6987951807228916
          },
          {
            "modelId": "opportunist",
            "played": 66,
            "winRate": 0.6060606060606061
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.7027027027027027
          },
          {
            "modelId": "beginner",
            "played": 31,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 214,
            "winRate": 0.5747663551401869
          },
          {
            "deckPresetId": "starter14",
            "played": 172,
            "winRate": 0.5930232558139535
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
        "offered": 1149,
        "played": 372,
        "ignored": 777,
        "selectionRate": 0.3237597911227154,
        "wins": 195,
        "losses": 177,
        "draws": 0,
        "winRateWhenPlayed": 0.5241935483870968,
        "averageFlips": 0.25268817204301075,
        "failedImpactRate": 0.5414634146341464,
        "averageFlipMargin": 1.7446808510638299,
        "averageEffectAmount": 1.618279569892473,
        "averageDamageDealt": 0.3629032258064516,
        "averageDamageTaken": 0.1532258064516129,
        "averageNetDamage": 0.20967741935483872,
        "lethalMoves": 2,
        "roundClosers": 32,
        "byModel": [
          {
            "modelId": "regular",
            "played": 151,
            "winRate": 0.5562913907284768
          },
          {
            "modelId": "expert",
            "played": 95,
            "winRate": 0.5894736842105263
          },
          {
            "modelId": "opportunist",
            "played": 74,
            "winRate": 0.47297297297297297
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.5714285714285714
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
            "played": 202,
            "winRate": 0.5099009900990099
          },
          {
            "deckPresetId": "starter14",
            "played": 170,
            "winRate": 0.5411764705882353
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
        "offered": 1424,
        "played": 339,
        "ignored": 1085,
        "selectionRate": 0.238061797752809,
        "wins": 153,
        "losses": 186,
        "draws": 0,
        "winRateWhenPlayed": 0.45132743362831856,
        "averageFlips": 0.336283185840708,
        "failedImpactRate": 0.6027874564459931,
        "averageFlipMargin": 1.236842105263158,
        "averageEffectAmount": 0.6696165191740413,
        "averageDamageDealt": 0.7227138643067846,
        "averageDamageTaken": 0.471976401179941,
        "averageNetDamage": 0.25073746312684364,
        "lethalMoves": 6,
        "roundClosers": 64,
        "byModel": [
          {
            "modelId": "regular",
            "played": 161,
            "winRate": 0.4409937888198758
          },
          {
            "modelId": "expert",
            "played": 78,
            "winRate": 0.47435897435897434
          },
          {
            "modelId": "opportunist",
            "played": 50,
            "winRate": 0.48
          },
          {
            "modelId": "champion",
            "played": 32,
            "winRate": 0.65625
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 174,
            "winRate": 0.4540229885057471
          },
          {
            "deckPresetId": "starter14",
            "played": 165,
            "winRate": 0.4484848484848485
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
        "offered": 1566,
        "played": 331,
        "ignored": 1235,
        "selectionRate": 0.21136653895274585,
        "wins": 152,
        "losses": 179,
        "draws": 0,
        "winRateWhenPlayed": 0.459214501510574,
        "averageFlips": 0.46827794561933533,
        "failedImpactRate": 0.4691780821917808,
        "averageFlipMargin": 1.4064516129032258,
        "averageEffectAmount": 0.22658610271903323,
        "averageDamageDealt": 0.38368580060422963,
        "averageDamageTaken": 0.2326283987915408,
        "averageNetDamage": 0.15105740181268884,
        "lethalMoves": 5,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 131,
            "winRate": 0.44274809160305345
          },
          {
            "modelId": "expert",
            "played": 90,
            "winRate": 0.5444444444444444
          },
          {
            "modelId": "opportunist",
            "played": 53,
            "winRate": 0.49056603773584906
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.5
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
            "played": 171,
            "winRate": 0.4152046783625731
          },
          {
            "deckPresetId": "starter14",
            "played": 160,
            "winRate": 0.50625
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
        "offered": 558,
        "played": 173,
        "ignored": 385,
        "selectionRate": 0.3100358422939068,
        "wins": 88,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.5086705202312138,
        "averageFlips": 0.4393063583815029,
        "failedImpactRate": 0.45714285714285713,
        "averageFlipMargin": 2.460526315789474,
        "averageEffectAmount": 0.9421965317919075,
        "averageDamageDealt": 0.35260115606936415,
        "averageDamageTaken": 0.2023121387283237,
        "averageNetDamage": 0.15028901734104044,
        "lethalMoves": 1,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 67,
            "winRate": 0.5074626865671642
          },
          {
            "modelId": "opportunist",
            "played": 38,
            "winRate": 0.39473684210526316
          },
          {
            "modelId": "expert",
            "played": 35,
            "winRate": 0.7714285714285715
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.5217391304347826
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
            "played": 173,
            "winRate": 0.5086705202312138
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
        "offered": 694,
        "played": 141,
        "ignored": 553,
        "selectionRate": 0.20317002881844382,
        "wins": 67,
        "losses": 74,
        "draws": 0,
        "winRateWhenPlayed": 0.475177304964539,
        "averageFlips": 0.5177304964539007,
        "failedImpactRate": 0.4251968503937008,
        "averageFlipMargin": 1.4931506849315068,
        "averageEffectAmount": 0.28368794326241137,
        "averageDamageDealt": 0.5319148936170213,
        "averageDamageTaken": 0.2978723404255319,
        "averageNetDamage": 0.23404255319148937,
        "lethalMoves": 2,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "regular",
            "played": 46,
            "winRate": 0.4782608695652174
          },
          {
            "modelId": "expert",
            "played": 42,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "opportunist",
            "played": 26,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "champion",
            "played": 14,
            "winRate": 0.42857142857142855
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
            "played": 141,
            "winRate": 0.475177304964539
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
        "offered": 691,
        "played": 140,
        "ignored": 551,
        "selectionRate": 0.20260492040520983,
        "wins": 68,
        "losses": 72,
        "draws": 0,
        "winRateWhenPlayed": 0.4857142857142857,
        "averageFlips": 0.7285714285714285,
        "failedImpactRate": 0.37423312883435583,
        "averageFlipMargin": 1.1862745098039216,
        "averageEffectAmount": 0.7285714285714285,
        "averageDamageDealt": 0.5357142857142857,
        "averageDamageTaken": 0.40714285714285714,
        "averageNetDamage": 0.12857142857142856,
        "lethalMoves": 2,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "regular",
            "played": 65,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "opportunist",
            "played": 23,
            "winRate": 0.5652173913043478
          },
          {
            "modelId": "champion",
            "played": 22,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "expert",
            "played": 19,
            "winRate": 0.6842105263157895
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
            "played": 140,
            "winRate": 0.4857142857142857
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
        "offered": 14660,
        "played": 3965,
        "ignored": 10695,
        "selectionRate": 0.2704638472032742,
        "wins": 2006,
        "losses": 1959,
        "draws": 0,
        "winRateWhenPlayed": 0.5059268600252207,
        "averageFlips": 0.5016393442622951,
        "averageDamageDealt": 0.7846153846153846,
        "averageNetDamage": 0.4912988650693569,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 660,
            "winRateWhenPlayed": 0.5242424242424243
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 608,
            "winRateWhenPlayed": 0.569078947368421
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 599,
            "winRateWhenPlayed": 0.5025041736227045
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 581,
            "winRateWhenPlayed": 0.4578313253012048
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 552,
            "winRateWhenPlayed": 0.5
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
        "offered": 15912,
        "played": 3577,
        "ignored": 12335,
        "selectionRate": 0.22479889391654098,
        "wins": 1824,
        "losses": 1753,
        "draws": 0,
        "winRateWhenPlayed": 0.5099245177523064,
        "averageFlips": 0.43975398378529496,
        "averageDamageDealt": 0.4858820240424937,
        "averageNetDamage": 0.20799552697791446,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 659,
            "winRateWhenPlayed": 0.5462822458270106
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 624,
            "winRateWhenPlayed": 0.4983974358974359
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 577,
            "winRateWhenPlayed": 0.5389948006932409
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 463,
            "winRateWhenPlayed": 0.5075593952483801
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 447,
            "winRateWhenPlayed": 0.5033557046979866
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
        "offered": 14847,
        "played": 3545,
        "ignored": 11302,
        "selectionRate": 0.23876877483666734,
        "wins": 1844,
        "losses": 1701,
        "draws": 0,
        "winRateWhenPlayed": 0.5201692524682652,
        "averageFlips": 0.5545839210155148,
        "averageDamageDealt": 0.5819464033850493,
        "averageNetDamage": 0.3018335684062059,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 661,
            "winRateWhenPlayed": 0.4947049924357035
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 557,
            "winRateWhenPlayed": 0.5673249551166966
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 551,
            "winRateWhenPlayed": 0.4900181488203267
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 538,
            "winRateWhenPlayed": 0.516728624535316
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 537,
            "winRateWhenPlayed": 0.5307262569832403
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
        "offered": 6791,
        "played": 1622,
        "ignored": 5169,
        "selectionRate": 0.23884553084965396,
        "wins": 790,
        "losses": 832,
        "draws": 0,
        "winRateWhenPlayed": 0.4870530209617756,
        "averageFlips": 0.4007398273736128,
        "averageDamageDealt": 0.45499383477188654,
        "averageNetDamage": 0.18187422934648578,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 372,
            "winRateWhenPlayed": 0.5241935483870968
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 339,
            "winRateWhenPlayed": 0.45132743362831856
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 331,
            "winRateWhenPlayed": 0.459214501510574
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 173,
            "winRateWhenPlayed": 0.5086705202312138
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 141,
            "winRateWhenPlayed": 0.475177304964539
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
        "offered": 25280,
        "played": 6569,
        "ignored": 18711,
        "selectionRate": 0.2598496835443038,
        "wins": 3431,
        "losses": 3138,
        "draws": 0,
        "winRateWhenPlayed": 0.5223017202009438,
        "averageFlips": 0.48607093926016137,
        "averageDamageDealt": 0.6760541939412391,
        "averageNetDamage": 0.3522606180544984,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 395,
            "winRateWhenPlayed": 0.5113924050632911
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 392,
            "winRateWhenPlayed": 0.5535714285714286
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 392,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 366,
            "winRateWhenPlayed": 0.47540983606557374
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 339,
            "winRateWhenPlayed": 0.5752212389380531
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
        "offered": 8323,
        "played": 2280,
        "ignored": 6043,
        "selectionRate": 0.27393968520966,
        "wins": 1139,
        "losses": 1141,
        "draws": 0,
        "winRateWhenPlayed": 0.49956140350877193,
        "averageFlips": 0.5280701754385965,
        "averageDamageDealt": 0.5780701754385965,
        "averageNetDamage": 0.3425438596491228,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 268,
            "winRateWhenPlayed": 0.5597014925373134
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 267,
            "winRateWhenPlayed": 0.5355805243445693
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 264,
            "winRateWhenPlayed": 0.5606060606060606
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 264,
            "winRateWhenPlayed": 0.45454545454545453
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 263,
            "winRateWhenPlayed": 0.49049429657794674
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
        "offered": 6441,
        "played": 1540,
        "ignored": 4901,
        "selectionRate": 0.23909330849247012,
        "wins": 756,
        "losses": 784,
        "draws": 0,
        "winRateWhenPlayed": 0.4909090909090909,
        "averageFlips": 0.4668831168831169,
        "averageDamageDealt": 0.38506493506493505,
        "averageNetDamage": 0.15844155844155844,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 266,
            "winRateWhenPlayed": 0.4699248120300752
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 264,
            "winRateWhenPlayed": 0.5037878787878788
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 262,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 249,
            "winRateWhenPlayed": 0.4939759036144578
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 245,
            "winRateWhenPlayed": 0.49795918367346936
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
        "offered": 4312,
        "played": 914,
        "ignored": 3398,
        "selectionRate": 0.21196660482374768,
        "wins": 481,
        "losses": 433,
        "draws": 0,
        "winRateWhenPlayed": 0.526258205689278,
        "averageFlips": 0.4223194748358862,
        "averageDamageDealt": 0.6422319474835886,
        "averageNetDamage": 0.4146608315098468,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 269,
            "winRateWhenPlayed": 0.5613382899628253
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 258,
            "winRateWhenPlayed": 0.5310077519379846
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 214,
            "winRateWhenPlayed": 0.4205607476635514
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 173,
            "winRateWhenPlayed": 0.5953757225433526
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
        "offered": 4826,
        "played": 822,
        "ignored": 4004,
        "selectionRate": 0.1703273932863655,
        "wins": 389,
        "losses": 433,
        "draws": 0,
        "winRateWhenPlayed": 0.4732360097323601,
        "averageFlips": 0.48175182481751827,
        "averageDamageDealt": 0.5304136253041363,
        "averageNetDamage": 0.2871046228710462,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 262,
            "winRateWhenPlayed": 0.4770992366412214
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 244,
            "winRateWhenPlayed": 0.48770491803278687
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 237,
            "winRateWhenPlayed": 0.43037974683544306
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 79,
            "winRateWhenPlayed": 0.5443037974683544
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "id": "stabilizer",
        "label": "stabilizer",
        "offered": 1925,
        "played": 325,
        "ignored": 1600,
        "selectionRate": 0.16883116883116883,
        "wins": 148,
        "losses": 177,
        "draws": 0,
        "winRateWhenPlayed": 0.4553846153846154,
        "averageFlips": 0.5169230769230769,
        "averageDamageDealt": 0.31384615384615383,
        "averageNetDamage": 0.055384615384615365,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 242,
            "winRateWhenPlayed": 0.45867768595041325
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 83,
            "winRateWhenPlayed": 0.4457831325301205
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
        "offered": 1103,
        "played": 259,
        "ignored": 844,
        "selectionRate": 0.23481414324569355,
        "wins": 120,
        "losses": 139,
        "draws": 0,
        "winRateWhenPlayed": 0.46332046332046334,
        "averageFlips": 0.43243243243243246,
        "averageDamageDealt": 0.667953667953668,
        "averageNetDamage": 0.3281853281853282,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 259,
            "winRateWhenPlayed": 0.46332046332046334
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
        "offered": 52210,
        "played": 12709,
        "ignored": 39501,
        "selectionRate": 0.2434208006129094,
        "wins": 6464,
        "losses": 6245,
        "draws": 0,
        "winRateWhenPlayed": 0.5086159414588087,
        "averageFlips": 0.48611220394995674,
        "averageDamageDealt": 0.6019356361633488,
        "averageNetDamage": 0.31922259815878506,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 661,
            "winRateWhenPlayed": 0.4947049924357035
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 660,
            "winRateWhenPlayed": 0.5242424242424243
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 659,
            "winRateWhenPlayed": 0.5462822458270106
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 624,
            "winRateWhenPlayed": 0.4983974358974359
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 608,
            "winRateWhenPlayed": 0.569078947368421
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
        "count": 972,
        "wins": 515,
        "losses": 457,
        "draws": 0,
        "winRate": 0.529835390946502,
        "averageFlips": 0.6069958847736625,
        "averageDamageDealt": 0.5853909465020576,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 962,
        "wins": 502,
        "losses": 460,
        "draws": 0,
        "winRate": 0.5218295218295218,
        "averageFlips": 0.6216216216216216,
        "averageDamageDealt": 0.8523908523908524,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 910,
        "wins": 488,
        "losses": 422,
        "draws": 0,
        "winRate": 0.5362637362637362,
        "averageFlips": 0.621978021978022,
        "averageDamageDealt": 0.8813186813186813,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 900,
        "wins": 455,
        "losses": 445,
        "draws": 0,
        "winRate": 0.5055555555555555,
        "averageFlips": 0.5388888888888889,
        "averageDamageDealt": 0.8588888888888889,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 897,
        "wins": 466,
        "losses": 431,
        "draws": 0,
        "winRate": 0.5195094760312151,
        "averageFlips": 0.5039018952062431,
        "averageDamageDealt": 0.4782608695652174,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 805,
        "wins": 400,
        "losses": 405,
        "draws": 0,
        "winRate": 0.4968944099378882,
        "averageFlips": 0.5639751552795031,
        "averageDamageDealt": 0.7577639751552795,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 775,
        "wins": 382,
        "losses": 393,
        "draws": 0,
        "winRate": 0.49290322580645163,
        "averageFlips": 0.5961290322580645,
        "averageDamageDealt": 1.04,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 705,
        "wins": 374,
        "losses": 331,
        "draws": 0,
        "winRate": 0.5304964539007092,
        "averageFlips": 0.577304964539007,
        "averageDamageDealt": 0.6070921985815603,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 671,
        "wins": 347,
        "losses": 324,
        "draws": 0,
        "winRate": 0.5171385991058122,
        "averageFlips": 0.5305514157973175,
        "averageDamageDealt": 0.7496274217585693,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 661,
        "wins": 327,
        "losses": 334,
        "draws": 0,
        "winRate": 0.4947049924357035,
        "averageFlips": 0.35098335854765506,
        "averageDamageDealt": 0.3615733736762481,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 642,
        "wins": 334,
        "losses": 308,
        "draws": 0,
        "winRate": 0.5202492211838006,
        "averageFlips": 0.308411214953271,
        "averageDamageDealt": 1.1137071651090342,
        "averageEffectAmount": 0.8473520249221184,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 634,
        "wins": 391,
        "losses": 243,
        "draws": 0,
        "winRate": 0.6167192429022083,
        "averageFlips": 0.638801261829653,
        "averageDamageDealt": 1.2665615141955835,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 629,
        "wins": 385,
        "losses": 244,
        "draws": 0,
        "winRate": 0.6120826709062003,
        "averageFlips": 0.6009538950715422,
        "averageDamageDealt": 1.2559618441971383,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 585,
        "wins": 355,
        "losses": 230,
        "draws": 0,
        "winRate": 0.6068376068376068,
        "averageFlips": 0.47692307692307695,
        "averageDamageDealt": 1.2136752136752136,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 583,
        "wins": 339,
        "losses": 244,
        "draws": 0,
        "winRate": 0.58147512864494,
        "averageFlips": 0.548885077186964,
        "averageDamageDealt": 1.2898799313893654,
        "averageEffectAmount": 0.7632933104631218,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 582,
        "wins": 337,
        "losses": 245,
        "draws": 0,
        "winRate": 0.5790378006872853,
        "averageFlips": 0.43470790378006874,
        "averageDamageDealt": 1.2199312714776633,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 525,
        "wins": 322,
        "losses": 203,
        "draws": 0,
        "winRate": 0.6133333333333333,
        "averageFlips": 0.4704761904761905,
        "averageDamageDealt": 1.0952380952380953,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 517,
        "wins": 296,
        "losses": 221,
        "draws": 0,
        "winRate": 0.5725338491295938,
        "averageFlips": 0.1528046421663443,
        "averageDamageDealt": 0.29593810444874274,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 506,
        "wins": 279,
        "losses": 227,
        "draws": 0,
        "winRate": 0.5513833992094862,
        "averageFlips": 0.5276679841897233,
        "averageDamageDealt": 1.4505928853754941,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 467,
        "wins": 245,
        "losses": 222,
        "draws": 0,
        "winRate": 0.5246252676659529,
        "averageFlips": 0.7751605995717344,
        "averageDamageDealt": 0.7387580299785867,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:gate-thief:draw-next-turn",
        "kind": "effect",
        "label": "Voleuse des portes -> draw-next-turn",
        "count": 441,
        "wins": 264,
        "losses": 177,
        "draws": 0,
        "winRate": 0.5986394557823129,
        "averageFlips": 1.0136054421768708,
        "averageDamageDealt": 0.562358276643991,
        "averageEffectAmount": 1.0136054421768708,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+demon",
        "kind": "friendly-adjacent",
        "label": "familiar allie + demon",
        "count": 438,
        "wins": 267,
        "losses": 171,
        "draws": 0,
        "winRate": 0.6095890410958904,
        "averageFlips": 0.4703196347031963,
        "averageDamageDealt": 1.4063926940639269,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:sapling:gain-shield",
        "kind": "effect",
        "label": "Floramie toxique -> gain-shield",
        "count": 361,
        "wins": 179,
        "losses": 182,
        "draws": 0,
        "winRate": 0.49584487534626037,
        "averageFlips": 0.34349030470914127,
        "averageDamageDealt": 1.0304709141274238,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->automaton",
        "kind": "family-chain",
        "label": "demon -> automaton",
        "count": 352,
        "wins": 149,
        "losses": 203,
        "draws": 0,
        "winRate": 0.42329545454545453,
        "averageFlips": 0.4630681818181818,
        "averageDamageDealt": 0.4943181818181818,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2768,
        "id": "card-quiet-monk-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Moine du seuil est ignoree par les bots",
        "detail": "2768 offres, 11% selection, role anchor.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2728,
        "id": "card-foxfire-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Requin runefer est ignoree par les bots",
        "detail": "2728 offres, 14% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2605,
        "id": "card-heron-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "2605 offres, 17% selection, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2501,
        "id": "card-cinder-grin-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Sourire de suie est ignoree par les bots",
        "detail": "2501 offres, 17% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2495,
        "id": "card-owl-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Chaton des ronces est ignoree par les bots",
        "detail": "2495 offres, 17% selection, role stabilizer.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 709,
        "id": "card-tin-oracle-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oracle de fer-blanc est ignoree par les bots",
        "detail": "709 offres, 18% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 4826,
        "id": "role-payoff-buff",
        "severity": "watch",
        "action": "verify",
        "title": "payoff manque d'attraction",
        "detail": "4826 offres, 17% selection, 47% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 1925,
        "id": "role-stabilizer-buff",
        "severity": "watch",
        "action": "verify",
        "title": "stabilizer manque d'attraction",
        "detail": "1925 offres, 17% selection, 46% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 467,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "467 occurrences, 52% win, 0.78 flips, 0.74 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gate-thief:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 441,
        "title": "Voleuse des portes -> draw-next-turn ressort comme combo",
        "detail": "441 occurrences, 60% win, 1.01 flips, 0.56 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "diagnostic-card-quiet-monk-ignored",
      "severity": "problem",
      "title": "Moine du seuil est ignoree par les bots",
      "detail": "2768 offres, 11% selection, role anchor. Confiance high, echantillon 2768.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-foxfire-ignored",
      "severity": "problem",
      "title": "Requin runefer est ignoree par les bots",
      "detail": "2728 offres, 14% selection, role payoff. Confiance high, echantillon 2728.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "problem",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "2605 offres, 17% selection, role connector. Confiance high, echantillon 2605.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-cinder-grin-ignored",
      "severity": "problem",
      "title": "Sourire de suie est ignoree par les bots",
      "detail": "2501 offres, 17% selection, role payoff. Confiance high, echantillon 2501.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "deck-turn-spread",
      "severity": "watch",
      "title": "La taille de deck change fortement le rythme",
      "detail": "Ecart de 4.44 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    }
  ]
};
