import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260519-235422",
  "generatedAt": "2026-05-19T23:54:22.217Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 11,
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
      "averageHpEdge": -22.796296296296298
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 63,
      "losses": 45,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 6.972222222222222
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 46,
      "losses": 62,
      "draws": 0,
      "winRate": 0.42592592592592593,
      "averageHpEdge": -1.3240740740740742
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 79,
      "losses": 29,
      "draws": 0,
      "winRate": 0.7314814814814815,
      "averageHpEdge": 5.694444444444445
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 28,
      "losses": 26,
      "draws": 0,
      "winRate": 0.5185185185185185,
      "averageHpEdge": 0.1111111111111111
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
        "turns": 67,
        "rounds": 7.555555555555555,
        "flipsPerMatch": 23.11111111111111,
        "flipsPerTurn": 0.3449419568822554,
        "reshuffles": 11.555555555555555,
        "deadTurns": 0.3333333333333333,
        "finalHpDifference": 10.555555555555555
      },
      "deadTurnFrequency": 0.004975124378109453,
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
        "turns": 69.77777777777777,
        "rounds": 7.888888888888889,
        "flipsPerMatch": 22.944444444444443,
        "flipsPerTurn": 0.3288216560509554,
        "reshuffles": 8.444444444444445,
        "deadTurns": 0,
        "finalHpDifference": 8.88888888888889
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
      "startingPlayerWinRate": 0.3888888888888889,
      "averages": {
        "turns": 76.22222222222223,
        "rounds": 8.61111111111111,
        "flipsPerMatch": 24.444444444444443,
        "flipsPerTurn": 0.3206997084548105,
        "reshuffles": 7.5,
        "deadTurns": 0,
        "finalHpDifference": 6.444444444444445
      },
      "deadTurnFrequency": 0,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a surveiller (39%)."
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
          "averageHpEdge": -23.166666666666668
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 23.166666666666668
        }
      ],
      "averages": {
        "turns": 34.333333333333336,
        "rounds": 3.8333333333333335,
        "flipsPerMatch": 19,
        "flipsPerTurn": 0.5533980582524272,
        "reshuffles": 4.666666666666667,
        "deadTurns": 1.1666666666666667,
        "finalHpDifference": 23.166666666666668
      },
      "deadTurnFrequency": 0.03398058252427184
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
          "wins": 4,
          "losses": 14,
          "draws": 0,
          "winRate": 0.2222222222222222,
          "averageHpEdge": -9.777777777777779
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 9.777777777777779
        }
      ],
      "averages": {
        "turns": 55.666666666666664,
        "rounds": 6.166666666666667,
        "flipsPerMatch": 31.944444444444443,
        "flipsPerTurn": 0.5738522954091816,
        "reshuffles": 9.055555555555555,
        "deadTurns": 0.9444444444444444,
        "finalHpDifference": 12.444444444444445
      },
      "deadTurnFrequency": 0.016966067864271458
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
          "averageHpEdge": -14.222222222222221
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 14.222222222222221
        }
      ],
      "averages": {
        "turns": 59.888888888888886,
        "rounds": 6.666666666666667,
        "flipsPerMatch": 26.333333333333332,
        "flipsPerTurn": 0.4397031539888683,
        "reshuffles": 10.055555555555555,
        "deadTurns": 0.3333333333333333,
        "finalHpDifference": 14.222222222222221
      },
      "deadTurnFrequency": 0.0055658627087198514
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
          "wins": 2,
          "winRate": 0.25
        },
        "overallStartingPlayerWinRate": 0.3888888888888889
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": 1.8888888888888888
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": -1.8888888888888888
        }
      ],
      "averages": {
        "turns": 58.666666666666664,
        "rounds": 6.611111111111111,
        "flipsPerMatch": 35.388888888888886,
        "flipsPerTurn": 0.603219696969697,
        "reshuffles": 10.055555555555555,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 6.111111111111111
      },
      "deadTurnFrequency": 0.000946969696969697
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
          "averageHpEdge": -21.944444444444443
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.944444444444443
        }
      ],
      "averages": {
        "turns": 35.111111111111114,
        "rounds": 3.9444444444444446,
        "flipsPerMatch": 20.555555555555557,
        "flipsPerTurn": 0.5854430379746836,
        "reshuffles": 3.7777777777777777,
        "deadTurns": 0,
        "finalHpDifference": 21.944444444444443
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
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -10.055555555555555
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 10.055555555555555
        }
      ],
      "averages": {
        "turns": 59.27777777777778,
        "rounds": 6.777777777777778,
        "flipsPerMatch": 33.666666666666664,
        "flipsPerTurn": 0.5679475164011246,
        "reshuffles": 7.5,
        "deadTurns": 0.16666666666666666,
        "finalHpDifference": 11.38888888888889
      },
      "deadTurnFrequency": 0.0028116213683223993
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
          "averageHpEdge": -11.444444444444445
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 11.444444444444445
        }
      ],
      "averages": {
        "turns": 63.888888888888886,
        "rounds": 7.222222222222222,
        "flipsPerMatch": 25.77777777777778,
        "flipsPerTurn": 0.40347826086956523,
        "reshuffles": 8.38888888888889,
        "deadTurns": 0,
        "finalHpDifference": 12.222222222222221
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
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 7,
          "losses": 11,
          "draws": 0,
          "winRate": 0.3888888888888889,
          "averageHpEdge": -3.3333333333333335
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 11,
          "losses": 7,
          "draws": 0,
          "winRate": 0.6111111111111112,
          "averageHpEdge": 3.3333333333333335
        }
      ],
      "averages": {
        "turns": 67.55555555555556,
        "rounds": 7.666666666666667,
        "flipsPerMatch": 37.77777777777778,
        "flipsPerTurn": 0.5592105263157895,
        "reshuffles": 8.444444444444445,
        "deadTurns": 0,
        "finalHpDifference": 6.888888888888889
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
          "averageHpEdge": -23.27777777777778
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 23.27777777777778
        }
      ],
      "averages": {
        "turns": 35.888888888888886,
        "rounds": 4.111111111111111,
        "flipsPerMatch": 20.22222222222222,
        "flipsPerTurn": 0.5634674922600619,
        "reshuffles": 3,
        "deadTurns": 0,
        "finalHpDifference": 23.27777777777778
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
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -6.722222222222222
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 6.722222222222222
        }
      ],
      "averages": {
        "turns": 68.44444444444444,
        "rounds": 7.777777777777778,
        "flipsPerMatch": 37.27777777777778,
        "flipsPerTurn": 0.5446428571428571,
        "reshuffles": 7.277777777777778,
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
          "averageHpEdge": -8.833333333333334
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 8.833333333333334
        }
      ],
      "averages": {
        "turns": 65.83333333333333,
        "rounds": 7.5,
        "flipsPerMatch": 24.833333333333332,
        "flipsPerTurn": 0.37721518987341773,
        "reshuffles": 5.944444444444445,
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
          "wins": 5,
          "winRate": 0.5
        },
        "enemy": {
          "games": 8,
          "wins": 7,
          "winRate": 0.875
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
          "averageHpEdge": 1.1111111111111112
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -1.1111111111111112
        }
      ],
      "averages": {
        "turns": 67.55555555555556,
        "rounds": 7.555555555555555,
        "flipsPerMatch": 38.111111111111114,
        "flipsPerTurn": 0.5641447368421053,
        "reshuffles": 6.222222222222222,
        "deadTurns": 0,
        "finalHpDifference": 8.333333333333334
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
        "offered": 3425,
        "played": 603,
        "ignored": 2822,
        "selectionRate": 0.17605839416058394,
        "wins": 309,
        "losses": 294,
        "draws": 0,
        "winRateWhenPlayed": 0.5124378109452736,
        "averageFlips": 0.5887230514096186,
        "failedImpactRate": 0.5041899441340782,
        "averageFlipMargin": 1.3690140845070422,
        "averageEffectAmount": 0.3913764510779436,
        "averageDamageDealt": 1.0248756218905473,
        "averageDamageTaken": 0.46434494195688225,
        "averageNetDamage": 0.560530679933665,
        "lethalMoves": 18,
        "roundClosers": 110,
        "byModel": [
          {
            "modelId": "regular",
            "played": 208,
            "winRate": 0.4519230769230769
          },
          {
            "modelId": "expert",
            "played": 152,
            "winRate": 0.7302631578947368
          },
          {
            "modelId": "opportunist",
            "played": 114,
            "winRate": 0.5087719298245614
          },
          {
            "modelId": "champion",
            "played": 89,
            "winRate": 0.5168539325842697
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
            "played": 224,
            "winRate": 0.4419642857142857
          },
          {
            "deckPresetId": "starter12",
            "played": 194,
            "winRate": 0.5412371134020618
          },
          {
            "deckPresetId": "starter14",
            "played": 185,
            "winRate": 0.5675675675675675
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
        "offered": 3313,
        "played": 573,
        "ignored": 2740,
        "selectionRate": 0.17295502565650467,
        "wins": 245,
        "losses": 328,
        "draws": 0,
        "winRateWhenPlayed": 0.42757417102966844,
        "averageFlips": 0.6265270506108203,
        "failedImpactRate": 0.3976510067114094,
        "averageFlipMargin": 1.5961002785515321,
        "averageEffectAmount": 0.29842931937172773,
        "averageDamageDealt": 0.6282722513089005,
        "averageDamageTaken": 0.32111692844677137,
        "averageNetDamage": 0.30715532286212915,
        "lethalMoves": 5,
        "roundClosers": 61,
        "byModel": [
          {
            "modelId": "regular",
            "played": 258,
            "winRate": 0.35271317829457366
          },
          {
            "modelId": "expert",
            "played": 112,
            "winRate": 0.6785714285714286
          },
          {
            "modelId": "opportunist",
            "played": 87,
            "winRate": 0.5172413793103449
          },
          {
            "modelId": "champion",
            "played": 70,
            "winRate": 0.4714285714285714
          },
          {
            "modelId": "beginner",
            "played": 46,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 205,
            "winRate": 0.4
          },
          {
            "deckPresetId": "starter12",
            "played": 197,
            "winRate": 0.4467005076142132
          },
          {
            "deckPresetId": "starter14",
            "played": 171,
            "winRate": 0.43859649122807015
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
        "offered": 2145,
        "played": 362,
        "ignored": 1783,
        "selectionRate": 0.16876456876456877,
        "wins": 164,
        "losses": 198,
        "draws": 0,
        "winRateWhenPlayed": 0.4530386740331492,
        "averageFlips": 0.281767955801105,
        "failedImpactRate": 0.7,
        "averageFlipMargin": 1.1862745098039216,
        "averageEffectAmount": 0.7320441988950276,
        "averageDamageDealt": 0.5165745856353591,
        "averageDamageTaken": 0.43646408839779005,
        "averageNetDamage": 0.08011049723756902,
        "lethalMoves": 6,
        "roundClosers": 78,
        "byModel": [
          {
            "modelId": "regular",
            "played": 172,
            "winRate": 0.4418604651162791
          },
          {
            "modelId": "expert",
            "played": 77,
            "winRate": 0.6233766233766234
          },
          {
            "modelId": "opportunist",
            "played": 53,
            "winRate": 0.2830188679245283
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.6097560975609756
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
            "played": 189,
            "winRate": 0.4497354497354497
          },
          {
            "deckPresetId": "starter14",
            "played": 173,
            "winRate": 0.45664739884393063
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 2370,
        "played": 802,
        "ignored": 1568,
        "selectionRate": 0.33839662447257385,
        "wins": 438,
        "losses": 364,
        "draws": 0,
        "winRateWhenPlayed": 0.5461346633416458,
        "averageFlips": 0.4937655860349127,
        "failedImpactRate": 0.36942675159235666,
        "averageFlipMargin": 1.648989898989899,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.243142144638404,
        "averageDamageTaken": 0.1172069825436409,
        "averageNetDamage": 0.1259351620947631,
        "lethalMoves": 7,
        "roundClosers": 51,
        "byModel": [
          {
            "modelId": "regular",
            "played": 403,
            "winRate": 0.5161290322580645
          },
          {
            "modelId": "expert",
            "played": 158,
            "winRate": 0.7848101265822784
          },
          {
            "modelId": "opportunist",
            "played": 117,
            "winRate": 0.4700854700854701
          },
          {
            "modelId": "champion",
            "played": 84,
            "winRate": 0.6071428571428571
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
            "played": 298,
            "winRate": 0.6006711409395973
          },
          {
            "deckPresetId": "starter12",
            "played": 282,
            "winRate": 0.5531914893617021
          },
          {
            "deckPresetId": "starter14",
            "played": 222,
            "winRate": 0.46396396396396394
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
        "offered": 2116,
        "played": 799,
        "ignored": 1317,
        "selectionRate": 0.3775992438563327,
        "wins": 451,
        "losses": 348,
        "draws": 0,
        "winRateWhenPlayed": 0.5644555694618273,
        "averageFlips": 0.23779724655819776,
        "failedImpactRate": 0.5399515738498789,
        "averageFlipMargin": 1.7947368421052632,
        "averageEffectAmount": 1.6270337922403004,
        "averageDamageDealt": 0.17897371714643304,
        "averageDamageTaken": 0.11264080100125157,
        "averageNetDamage": 0.06633291614518147,
        "lethalMoves": 4,
        "roundClosers": 51,
        "byModel": [
          {
            "modelId": "regular",
            "played": 368,
            "winRate": 0.529891304347826
          },
          {
            "modelId": "expert",
            "played": 160,
            "winRate": 0.8
          },
          {
            "modelId": "opportunist",
            "played": 131,
            "winRate": 0.5343511450381679
          },
          {
            "modelId": "champion",
            "played": 106,
            "winRate": 0.5471698113207547
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
            "played": 287,
            "winRate": 0.5609756097560976
          },
          {
            "deckPresetId": "starter12",
            "played": 270,
            "winRate": 0.5666666666666667
          },
          {
            "deckPresetId": "starter14",
            "played": 242,
            "winRate": 0.5661157024793388
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
        "offered": 2469,
        "played": 763,
        "ignored": 1706,
        "selectionRate": 0.3090319967598218,
        "wins": 385,
        "losses": 378,
        "draws": 0,
        "winRateWhenPlayed": 0.5045871559633027,
        "averageFlips": 0.34469200524246396,
        "failedImpactRate": 0.5534804753820034,
        "averageFlipMargin": 1.4258555133079849,
        "averageEffectAmount": 0.9986893840104849,
        "averageDamageDealt": 0.42988204456094364,
        "averageDamageTaken": 0.24770642201834864,
        "averageNetDamage": 0.182175622542595,
        "lethalMoves": 9,
        "roundClosers": 99,
        "byModel": [
          {
            "modelId": "regular",
            "played": 354,
            "winRate": 0.4378531073446328
          },
          {
            "modelId": "expert",
            "played": 174,
            "winRate": 0.7413793103448276
          },
          {
            "modelId": "opportunist",
            "played": 110,
            "winRate": 0.44545454545454544
          },
          {
            "modelId": "champion",
            "played": 95,
            "winRate": 0.5473684210526316
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
            "played": 297,
            "winRate": 0.494949494949495
          },
          {
            "deckPresetId": "starter12",
            "played": 251,
            "winRate": 0.5418326693227091
          },
          {
            "deckPresetId": "starter14",
            "played": 215,
            "winRate": 0.4744186046511628
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
        "offered": 2956,
        "played": 738,
        "ignored": 2218,
        "selectionRate": 0.2496617050067659,
        "wins": 389,
        "losses": 349,
        "draws": 0,
        "winRateWhenPlayed": 0.5271002710027101,
        "averageFlips": 0.43360433604336046,
        "failedImpactRate": 0.5287187039764359,
        "averageFlipMargin": 1.446875,
        "averageEffectAmount": 1.2195121951219512,
        "averageDamageDealt": 0.47696476964769646,
        "averageDamageTaken": 0.2696476964769648,
        "averageNetDamage": 0.20731707317073167,
        "lethalMoves": 13,
        "roundClosers": 135,
        "byModel": [
          {
            "modelId": "regular",
            "played": 342,
            "winRate": 0.4678362573099415
          },
          {
            "modelId": "expert",
            "played": 183,
            "winRate": 0.7540983606557377
          },
          {
            "modelId": "opportunist",
            "played": 108,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.578125
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
            "played": 281,
            "winRate": 0.49110320284697506
          },
          {
            "deckPresetId": "starter12",
            "played": 248,
            "winRate": 0.5241935483870968
          },
          {
            "deckPresetId": "starter14",
            "played": 209,
            "winRate": 0.5789473684210527
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
        "offered": 2539,
        "played": 737,
        "ignored": 1802,
        "selectionRate": 0.29027176053564396,
        "wins": 358,
        "losses": 379,
        "draws": 0,
        "winRateWhenPlayed": 0.48575305291723203,
        "averageFlips": 0.32700135685210313,
        "failedImpactRate": 0.5347490347490348,
        "averageFlipMargin": 1.5518672199170125,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.18724559023066487,
        "averageDamageTaken": 0.1248303934871099,
        "averageNetDamage": 0.06241519674355496,
        "lethalMoves": 6,
        "roundClosers": 49,
        "byModel": [
          {
            "modelId": "regular",
            "played": 356,
            "winRate": 0.42696629213483145
          },
          {
            "modelId": "expert",
            "played": 137,
            "winRate": 0.7883211678832117
          },
          {
            "modelId": "opportunist",
            "played": 131,
            "winRate": 0.46564885496183206
          },
          {
            "modelId": "champion",
            "played": 71,
            "winRate": 0.5211267605633803
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
            "played": 271,
            "winRate": 0.5018450184501845
          },
          {
            "deckPresetId": "starter12",
            "played": 247,
            "winRate": 0.44129554655870445
          },
          {
            "deckPresetId": "starter14",
            "played": 219,
            "winRate": 0.5159817351598174
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
        "offered": 2786,
        "played": 701,
        "ignored": 2085,
        "selectionRate": 0.25161521895190236,
        "wins": 354,
        "losses": 347,
        "draws": 0,
        "winRateWhenPlayed": 0.5049928673323824,
        "averageFlips": 0.3466476462196862,
        "failedImpactRate": 0.5371428571428571,
        "averageFlipMargin": 1.3497942386831276,
        "averageEffectAmount": 0.9971469329529244,
        "averageDamageDealt": 0.340941512125535,
        "averageDamageTaken": 0.20970042796005706,
        "averageNetDamage": 0.13124108416547792,
        "lethalMoves": 2,
        "roundClosers": 84,
        "byModel": [
          {
            "modelId": "regular",
            "played": 302,
            "winRate": 0.49337748344370863
          },
          {
            "modelId": "expert",
            "played": 183,
            "winRate": 0.7103825136612022
          },
          {
            "modelId": "opportunist",
            "played": 94,
            "winRate": 0.3723404255319149
          },
          {
            "modelId": "champion",
            "played": 85,
            "winRate": 0.47058823529411764
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
            "played": 265,
            "winRate": 0.49056603773584906
          },
          {
            "deckPresetId": "starter12",
            "played": 239,
            "winRate": 0.5146443514644351
          },
          {
            "deckPresetId": "starter14",
            "played": 197,
            "winRate": 0.5126903553299492
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
        "offered": 3168,
        "played": 695,
        "ignored": 2473,
        "selectionRate": 0.21938131313131312,
        "wins": 355,
        "losses": 340,
        "draws": 0,
        "winRateWhenPlayed": 0.5107913669064749,
        "averageFlips": 0.45323741007194246,
        "failedImpactRate": 0.5284431137724551,
        "averageFlipMargin": 1.5174603174603174,
        "averageEffectAmount": 1.8532374100719424,
        "averageDamageDealt": 0.48345323741007196,
        "averageDamageTaken": 0.16546762589928057,
        "averageNetDamage": 0.3179856115107914,
        "lethalMoves": 10,
        "roundClosers": 124,
        "byModel": [
          {
            "modelId": "regular",
            "played": 327,
            "winRate": 0.4648318042813456
          },
          {
            "modelId": "expert",
            "played": 135,
            "winRate": 0.725925925925926
          },
          {
            "modelId": "opportunist",
            "played": 117,
            "winRate": 0.5128205128205128
          },
          {
            "modelId": "champion",
            "played": 75,
            "winRate": 0.6
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
            "played": 257,
            "winRate": 0.5136186770428015
          },
          {
            "deckPresetId": "starter12",
            "played": 231,
            "winRate": 0.5497835497835498
          },
          {
            "deckPresetId": "starter14",
            "played": 207,
            "winRate": 0.463768115942029
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
        "offered": 2604,
        "played": 683,
        "ignored": 1921,
        "selectionRate": 0.2622887864823349,
        "wins": 359,
        "losses": 324,
        "draws": 0,
        "winRateWhenPlayed": 0.5256222547584187,
        "averageFlips": 0.3206442166910688,
        "failedImpactRate": 0.5186813186813187,
        "averageFlipMargin": 1.8310502283105023,
        "averageEffectAmount": 0.6471449487554904,
        "averageDamageDealt": 0.9033674963396779,
        "averageDamageTaken": 0.2430453879941435,
        "averageNetDamage": 0.6603221083455344,
        "lethalMoves": 19,
        "roundClosers": 60,
        "byModel": [
          {
            "modelId": "regular",
            "played": 277,
            "winRate": 0.49097472924187724
          },
          {
            "modelId": "expert",
            "played": 170,
            "winRate": 0.7588235294117647
          },
          {
            "modelId": "opportunist",
            "played": 110,
            "winRate": 0.41818181818181815
          },
          {
            "modelId": "champion",
            "played": 88,
            "winRate": 0.5454545454545454
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
            "played": 246,
            "winRate": 0.5487804878048781
          },
          {
            "deckPresetId": "starter12",
            "played": 232,
            "winRate": 0.4827586206896552
          },
          {
            "deckPresetId": "starter14",
            "played": 205,
            "winRate": 0.5463414634146342
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
        "offered": 2945,
        "played": 654,
        "ignored": 2291,
        "selectionRate": 0.22207130730050934,
        "wins": 357,
        "losses": 297,
        "draws": 0,
        "winRateWhenPlayed": 0.5458715596330275,
        "averageFlips": 0.308868501529052,
        "failedImpactRate": 0.6085271317829457,
        "averageFlipMargin": 1.8514851485148516,
        "averageEffectAmount": 0.5214067278287462,
        "averageDamageDealt": 0.37003058103975534,
        "averageDamageTaken": 0.23853211009174313,
        "averageNetDamage": 0.1314984709480122,
        "lethalMoves": 8,
        "roundClosers": 83,
        "byModel": [
          {
            "modelId": "regular",
            "played": 328,
            "winRate": 0.4969512195121951
          },
          {
            "modelId": "expert",
            "played": 161,
            "winRate": 0.7888198757763976
          },
          {
            "modelId": "opportunist",
            "played": 68,
            "winRate": 0.45588235294117646
          },
          {
            "modelId": "champion",
            "played": 61,
            "winRate": 0.5901639344262295
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
            "played": 239,
            "winRate": 0.5397489539748954
          },
          {
            "deckPresetId": "starter12",
            "played": 208,
            "winRate": 0.5769230769230769
          },
          {
            "deckPresetId": "starter14",
            "played": 207,
            "winRate": 0.5217391304347826
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
        "offered": 3007,
        "played": 639,
        "ignored": 2368,
        "selectionRate": 0.2125041569670768,
        "wins": 331,
        "losses": 308,
        "draws": 0,
        "winRateWhenPlayed": 0.5179968701095462,
        "averageFlips": 0.45539906103286387,
        "failedImpactRate": 0.37553648068669526,
        "averageFlipMargin": 1.4467353951890034,
        "averageEffectAmount": 0.6807511737089202,
        "averageDamageDealt": 0.9577464788732394,
        "averageDamageTaken": 0.19561815336463223,
        "averageNetDamage": 0.7621283255086071,
        "lethalMoves": 23,
        "roundClosers": 52,
        "byModel": [
          {
            "modelId": "regular",
            "played": 272,
            "winRate": 0.47058823529411764
          },
          {
            "modelId": "expert",
            "played": 127,
            "winRate": 0.7716535433070866
          },
          {
            "modelId": "opportunist",
            "played": 104,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "champion",
            "played": 92,
            "winRate": 0.532608695652174
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
            "played": 234,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter14",
            "played": 203,
            "winRate": 0.5517241379310345
          },
          {
            "deckPresetId": "starter12",
            "played": 202,
            "winRate": 0.504950495049505
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
        "offered": 2970,
        "played": 639,
        "ignored": 2331,
        "selectionRate": 0.21515151515151515,
        "wins": 295,
        "losses": 344,
        "draws": 0,
        "winRateWhenPlayed": 0.4616588419405321,
        "averageFlips": 0.514866979655712,
        "failedImpactRate": 0.42077464788732394,
        "averageFlipMargin": 1.513677811550152,
        "averageEffectAmount": 0.514866979655712,
        "averageDamageDealt": 0.29577464788732394,
        "averageDamageTaken": 0.23943661971830985,
        "averageNetDamage": 0.05633802816901409,
        "lethalMoves": 7,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 311,
            "winRate": 0.4212218649517685
          },
          {
            "modelId": "opportunist",
            "played": 115,
            "winRate": 0.5130434782608696
          },
          {
            "modelId": "expert",
            "played": 113,
            "winRate": 0.6902654867256637
          },
          {
            "modelId": "champion",
            "played": 60,
            "winRate": 0.45
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
            "played": 239,
            "winRate": 0.41841004184100417
          },
          {
            "deckPresetId": "starter12",
            "played": 207,
            "winRate": 0.4396135265700483
          },
          {
            "deckPresetId": "starter14",
            "played": 193,
            "winRate": 0.538860103626943
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
        "offered": 2942,
        "played": 632,
        "ignored": 2310,
        "selectionRate": 0.21481985044187626,
        "wins": 321,
        "losses": 311,
        "draws": 0,
        "winRateWhenPlayed": 0.5079113924050633,
        "averageFlips": 0.629746835443038,
        "failedImpactRate": 0.4041916167664671,
        "averageFlipMargin": 2.751256281407035,
        "averageEffectAmount": 0.7816455696202531,
        "averageDamageDealt": 0.36550632911392406,
        "averageDamageTaken": 0.23575949367088608,
        "averageNetDamage": 0.12974683544303797,
        "lethalMoves": 5,
        "roundClosers": 74,
        "byModel": [
          {
            "modelId": "regular",
            "played": 267,
            "winRate": 0.4606741573033708
          },
          {
            "modelId": "expert",
            "played": 153,
            "winRate": 0.7189542483660131
          },
          {
            "modelId": "opportunist",
            "played": 113,
            "winRate": 0.46017699115044247
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.5625
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
            "played": 222,
            "winRate": 0.5675675675675675
          },
          {
            "deckPresetId": "starter12",
            "played": 209,
            "winRate": 0.46411483253588515
          },
          {
            "deckPresetId": "starter14",
            "played": 201,
            "winRate": 0.48756218905472637
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
        "offered": 2999,
        "played": 621,
        "ignored": 2378,
        "selectionRate": 0.20706902300766922,
        "wins": 293,
        "losses": 328,
        "draws": 0,
        "winRateWhenPlayed": 0.4718196457326892,
        "averageFlips": 0.47020933977455714,
        "failedImpactRate": 0.4438095238095238,
        "averageFlipMargin": 1.5890410958904109,
        "averageEffectAmount": 0.6038647342995169,
        "averageDamageDealt": 0.428341384863124,
        "averageDamageTaken": 0.23510466988727857,
        "averageNetDamage": 0.19323671497584544,
        "lethalMoves": 8,
        "roundClosers": 70,
        "byModel": [
          {
            "modelId": "regular",
            "played": 305,
            "winRate": 0.4426229508196721
          },
          {
            "modelId": "expert",
            "played": 127,
            "winRate": 0.7165354330708661
          },
          {
            "modelId": "opportunist",
            "played": 87,
            "winRate": 0.47126436781609193
          },
          {
            "modelId": "champion",
            "played": 66,
            "winRate": 0.3939393939393939
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
            "played": 227,
            "winRate": 0.44493392070484583
          },
          {
            "deckPresetId": "starter12",
            "played": 210,
            "winRate": 0.4714285714285714
          },
          {
            "deckPresetId": "starter14",
            "played": 184,
            "winRate": 0.5054347826086957
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
        "offered": 3203,
        "played": 620,
        "ignored": 2583,
        "selectionRate": 0.19356852950359038,
        "wins": 335,
        "losses": 285,
        "draws": 0,
        "winRateWhenPlayed": 0.5403225806451613,
        "averageFlips": 0.6629032258064517,
        "failedImpactRate": 0.3637770897832817,
        "averageFlipMargin": 1.70316301703163,
        "averageEffectAmount": 0.42096774193548386,
        "averageDamageDealt": 0.9048387096774193,
        "averageDamageTaken": 0.2467741935483871,
        "averageNetDamage": 0.6580645161290322,
        "lethalMoves": 10,
        "roundClosers": 75,
        "byModel": [
          {
            "modelId": "regular",
            "played": 236,
            "winRate": 0.4491525423728814
          },
          {
            "modelId": "expert",
            "played": 153,
            "winRate": 0.7450980392156863
          },
          {
            "modelId": "opportunist",
            "played": 132,
            "winRate": 0.5757575757575758
          },
          {
            "modelId": "champion",
            "played": 68,
            "winRate": 0.5735294117647058
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
            "played": 229,
            "winRate": 0.5589519650655022
          },
          {
            "deckPresetId": "starter12",
            "played": 200,
            "winRate": 0.525
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
        "offered": 3020,
        "played": 615,
        "ignored": 2405,
        "selectionRate": 0.20364238410596028,
        "wins": 300,
        "losses": 315,
        "draws": 0,
        "winRateWhenPlayed": 0.4878048780487805,
        "averageFlips": 0.44878048780487806,
        "failedImpactRate": 0.4523809523809524,
        "averageFlipMargin": 1.4420289855072463,
        "averageEffectAmount": 0.5821138211382114,
        "averageDamageDealt": 0.3723577235772358,
        "averageDamageTaken": 0.26666666666666666,
        "averageNetDamage": 0.10569105691056913,
        "lethalMoves": 5,
        "roundClosers": 77,
        "byModel": [
          {
            "modelId": "regular",
            "played": 316,
            "winRate": 0.4525316455696203
          },
          {
            "modelId": "expert",
            "played": 112,
            "winRate": 0.6964285714285714
          },
          {
            "modelId": "opportunist",
            "played": 94,
            "winRate": 0.5425531914893617
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.4375
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
            "played": 221,
            "winRate": 0.5248868778280543
          },
          {
            "deckPresetId": "starter12",
            "played": 204,
            "winRate": 0.49019607843137253
          },
          {
            "deckPresetId": "starter14",
            "played": 190,
            "winRate": 0.4421052631578947
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
        "offered": 3138,
        "played": 603,
        "ignored": 2535,
        "selectionRate": 0.1921606118546845,
        "wins": 308,
        "losses": 295,
        "draws": 0,
        "winRateWhenPlayed": 0.5107794361525705,
        "averageFlips": 0.8192371475953566,
        "failedImpactRate": 0.2269170579029734,
        "averageFlipMargin": 1.3663967611336032,
        "averageEffectAmount": 1.175787728026534,
        "averageDamageDealt": 0.23383084577114427,
        "averageDamageTaken": 0.1956882255389718,
        "averageNetDamage": 0.038142620232172464,
        "lethalMoves": 3,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 265,
            "winRate": 0.4830188679245283
          },
          {
            "modelId": "opportunist",
            "played": 133,
            "winRate": 0.5639097744360902
          },
          {
            "modelId": "expert",
            "played": 107,
            "winRate": 0.6728971962616822
          },
          {
            "modelId": "champion",
            "played": 59,
            "winRate": 0.559322033898305
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
            "played": 226,
            "winRate": 0.5486725663716814
          },
          {
            "deckPresetId": "starter12",
            "played": 197,
            "winRate": 0.5329949238578681
          },
          {
            "deckPresetId": "starter14",
            "played": 180,
            "winRate": 0.4388888888888889
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
        "offered": 3207,
        "played": 598,
        "ignored": 2609,
        "selectionRate": 0.18646710321172436,
        "wins": 283,
        "losses": 315,
        "draws": 0,
        "winRateWhenPlayed": 0.47324414715719065,
        "averageFlips": 0.705685618729097,
        "failedImpactRate": 0.36253776435045315,
        "averageFlipMargin": 1.627962085308057,
        "averageEffectAmount": 1.0585284280936456,
        "averageDamageDealt": 0.34782608695652173,
        "averageDamageTaken": 0.1939799331103679,
        "averageNetDamage": 0.15384615384615383,
        "lethalMoves": 7,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 243,
            "winRate": 0.4156378600823045
          },
          {
            "modelId": "expert",
            "played": 148,
            "winRate": 0.7094594594594594
          },
          {
            "modelId": "opportunist",
            "played": 104,
            "winRate": 0.4423076923076923
          },
          {
            "modelId": "champion",
            "played": 59,
            "winRate": 0.5254237288135594
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
            "played": 220,
            "winRate": 0.4954545454545455
          },
          {
            "deckPresetId": "starter12",
            "played": 203,
            "winRate": 0.49261083743842365
          },
          {
            "deckPresetId": "starter14",
            "played": 175,
            "winRate": 0.4228571428571429
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
        "offered": 3257,
        "played": 591,
        "ignored": 2666,
        "selectionRate": 0.1814553269880258,
        "wins": 297,
        "losses": 294,
        "draws": 0,
        "winRateWhenPlayed": 0.5025380710659898,
        "averageFlips": 0.7868020304568528,
        "failedImpactRate": 0.3241279069767442,
        "averageFlipMargin": 1.4967741935483871,
        "averageEffectAmount": 0.7868020304568528,
        "averageDamageDealt": 0.2808798646362098,
        "averageDamageTaken": 0.2131979695431472,
        "averageNetDamage": 0.06768189509306258,
        "lethalMoves": 4,
        "roundClosers": 53,
        "byModel": [
          {
            "modelId": "regular",
            "played": 290,
            "winRate": 0.496551724137931
          },
          {
            "modelId": "expert",
            "played": 112,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "opportunist",
            "played": 105,
            "winRate": 0.5523809523809524
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.5111111111111111
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
            "played": 221,
            "winRate": 0.5248868778280543
          },
          {
            "deckPresetId": "starter12",
            "played": 191,
            "winRate": 0.46596858638743455
          },
          {
            "deckPresetId": "starter14",
            "played": 179,
            "winRate": 0.5139664804469274
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
        "offered": 1558,
        "played": 477,
        "ignored": 1081,
        "selectionRate": 0.3061617458279846,
        "wins": 246,
        "losses": 231,
        "draws": 0,
        "winRateWhenPlayed": 0.5157232704402516,
        "averageFlips": 0.2138364779874214,
        "failedImpactRate": 0.5952380952380952,
        "averageFlipMargin": 1.7450980392156863,
        "averageEffectAmount": 1.6121593291404612,
        "averageDamageDealt": 0.20335429769392033,
        "averageDamageTaken": 0.1761006289308176,
        "averageNetDamage": 0.02725366876310273,
        "lethalMoves": 2,
        "roundClosers": 40,
        "byModel": [
          {
            "modelId": "regular",
            "played": 204,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 110,
            "winRate": 0.7636363636363637
          },
          {
            "modelId": "opportunist",
            "played": 77,
            "winRate": 0.33766233766233766
          },
          {
            "modelId": "champion",
            "played": 53,
            "winRate": 0.6415094339622641
          },
          {
            "modelId": "beginner",
            "played": 33,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 250,
            "winRate": 0.532
          },
          {
            "deckPresetId": "starter14",
            "played": 227,
            "winRate": 0.4977973568281938
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
        "offered": 1642,
        "played": 463,
        "ignored": 1179,
        "selectionRate": 0.28197320341047505,
        "wins": 226,
        "losses": 237,
        "draws": 0,
        "winRateWhenPlayed": 0.48812095032397407,
        "averageFlips": 0.39956803455723544,
        "failedImpactRate": 0.3954248366013072,
        "averageFlipMargin": 1.3621621621621622,
        "averageEffectAmount": 0.8272138228941684,
        "averageDamageDealt": 0.1857451403887689,
        "averageDamageTaken": 0.11447084233261338,
        "averageNetDamage": 0.07127429805615552,
        "lethalMoves": 0,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 199,
            "winRate": 0.5276381909547738
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.6422764227642277
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.3291139240506329
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.4444444444444444
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
            "played": 233,
            "winRate": 0.45493562231759654
          },
          {
            "deckPresetId": "starter14",
            "played": 230,
            "winRate": 0.5217391304347826
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
        "offered": 2003,
        "played": 411,
        "ignored": 1592,
        "selectionRate": 0.20519221168247628,
        "wins": 215,
        "losses": 196,
        "draws": 0,
        "winRateWhenPlayed": 0.5231143552311436,
        "averageFlips": 0.7956204379562044,
        "failedImpactRate": 0.28289473684210525,
        "averageFlipMargin": 1.470948012232416,
        "averageEffectAmount": 0.25547445255474455,
        "averageDamageDealt": 0.6374695863746959,
        "averageDamageTaken": 0.2895377128953771,
        "averageNetDamage": 0.34793187347931875,
        "lethalMoves": 10,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 173,
            "winRate": 0.5202312138728323
          },
          {
            "modelId": "expert",
            "played": 94,
            "winRate": 0.7127659574468085
          },
          {
            "modelId": "opportunist",
            "played": 58,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 52,
            "winRate": 0.5576923076923077
          },
          {
            "modelId": "beginner",
            "played": 34,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 224,
            "winRate": 0.5491071428571429
          },
          {
            "deckPresetId": "starter14",
            "played": 187,
            "winRate": 0.4919786096256685
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
        "offered": 735,
        "played": 250,
        "ignored": 485,
        "selectionRate": 0.3401360544217687,
        "wins": 129,
        "losses": 121,
        "draws": 0,
        "winRateWhenPlayed": 0.516,
        "averageFlips": 0.416,
        "failedImpactRate": 0.4639175257731959,
        "averageFlipMargin": 1.375,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.312,
        "averageDamageTaken": 0.196,
        "averageNetDamage": 0.11599999999999999,
        "lethalMoves": 4,
        "roundClosers": 27,
        "byModel": [
          {
            "modelId": "regular",
            "played": 124,
            "winRate": 0.45161290322580644
          },
          {
            "modelId": "expert",
            "played": 48,
            "winRate": 0.7708333333333334
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "champion",
            "played": 33,
            "winRate": 0.6363636363636364
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
            "played": 250,
            "winRate": 0.516
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
        "offered": 824,
        "played": 219,
        "ignored": 605,
        "selectionRate": 0.2657766990291262,
        "wins": 106,
        "losses": 113,
        "draws": 0,
        "winRateWhenPlayed": 0.4840182648401826,
        "averageFlips": 0.4611872146118721,
        "failedImpactRate": 0.5073170731707317,
        "averageFlipMargin": 2.1584158415841586,
        "averageEffectAmount": 0.863013698630137,
        "averageDamageDealt": 0.2100456621004566,
        "averageDamageTaken": 0.2100456621004566,
        "averageNetDamage": 0,
        "lethalMoves": 1,
        "roundClosers": 19,
        "byModel": [
          {
            "modelId": "regular",
            "played": 105,
            "winRate": 0.49523809523809526
          },
          {
            "modelId": "expert",
            "played": 48,
            "winRate": 0.6875
          },
          {
            "modelId": "opportunist",
            "played": 31,
            "winRate": 0.41935483870967744
          },
          {
            "modelId": "champion",
            "played": 24,
            "winRate": 0.3333333333333333
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
            "played": 219,
            "winRate": 0.4840182648401826
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
        "offered": 816,
        "played": 198,
        "ignored": 618,
        "selectionRate": 0.2426470588235294,
        "wins": 94,
        "losses": 104,
        "draws": 0,
        "winRateWhenPlayed": 0.47474747474747475,
        "averageFlips": 0.1919191919191919,
        "failedImpactRate": 0.6310679611650486,
        "averageFlipMargin": 1.605263157894737,
        "averageEffectAmount": 0.9545454545454546,
        "averageDamageDealt": 0.14646464646464646,
        "averageDamageTaken": 0.07575757575757576,
        "averageNetDamage": 0.0707070707070707,
        "lethalMoves": 1,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 99,
            "winRate": 0.5050505050505051
          },
          {
            "modelId": "expert",
            "played": 33,
            "winRate": 0.696969696969697
          },
          {
            "modelId": "opportunist",
            "played": 27,
            "winRate": 0.4074074074074074
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.43478260869565216
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
            "played": 198,
            "winRate": 0.47474747474747475
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
        "offered": 971,
        "played": 192,
        "ignored": 779,
        "selectionRate": 0.19773429454170957,
        "wins": 99,
        "losses": 93,
        "draws": 0,
        "winRateWhenPlayed": 0.515625,
        "averageFlips": 0.7552083333333334,
        "failedImpactRate": 0.3317972350230415,
        "averageFlipMargin": 1.4,
        "averageEffectAmount": 1.4791666666666667,
        "averageDamageDealt": 0.20833333333333334,
        "averageDamageTaken": 0.13541666666666666,
        "averageNetDamage": 0.07291666666666669,
        "lethalMoves": 1,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 79,
            "winRate": 0.5443037974683544
          },
          {
            "modelId": "expert",
            "played": 42,
            "winRate": 0.7142857142857143
          },
          {
            "modelId": "opportunist",
            "played": 37,
            "winRate": 0.4594594594594595
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0.5
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
            "played": 192,
            "winRate": 0.515625
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
        "id": "human",
        "label": "human",
        "offered": 19079,
        "played": 4675,
        "ignored": 14404,
        "selectionRate": 0.24503380680329157,
        "wins": 2406,
        "losses": 2269,
        "draws": 0,
        "winRateWhenPlayed": 0.5146524064171123,
        "averageFlips": 0.493475935828877,
        "averageDamageDealt": 0.36106951871657755,
        "averageNetDamage": 0.1702673796791444,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 802,
            "winRateWhenPlayed": 0.5461346633416458
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 738,
            "winRateWhenPlayed": 0.5271002710027101
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 737,
            "winRateWhenPlayed": 0.48575305291723203
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 701,
            "winRateWhenPlayed": 0.5049928673323824
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 695,
            "winRateWhenPlayed": 0.5107913669064749
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
        "offered": 19894,
        "played": 4653,
        "ignored": 15241,
        "selectionRate": 0.2338896149592842,
        "wins": 2377,
        "losses": 2276,
        "draws": 0,
        "winRateWhenPlayed": 0.5108532129808726,
        "averageFlips": 0.45970341715022567,
        "averageDamageDealt": 0.3346228239845261,
        "averageNetDamage": 0.124220932731571,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 799,
            "winRateWhenPlayed": 0.5644555694618273
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 763,
            "winRateWhenPlayed": 0.5045871559633027
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 654,
            "winRateWhenPlayed": 0.5458715596330275
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 621,
            "winRateWhenPlayed": 0.4718196457326892
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 615,
            "winRateWhenPlayed": 0.4878048780487805
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
        "offered": 21464,
        "played": 4389,
        "ignored": 17075,
        "selectionRate": 0.2044819232202758,
        "wins": 2195,
        "losses": 2194,
        "draws": 0,
        "winRateWhenPlayed": 0.5001139211665527,
        "averageFlips": 0.5381635907951697,
        "averageDamageDealt": 0.7263613579403053,
        "averageNetDamage": 0.4506721348826612,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 683,
            "winRateWhenPlayed": 0.5256222547584187
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 639,
            "winRateWhenPlayed": 0.5179968701095462
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 639,
            "winRateWhenPlayed": 0.4616588419405321
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 632,
            "winRateWhenPlayed": 0.5079113924050633
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 620,
            "winRateWhenPlayed": 0.5403225806451613
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
        "offered": 8691,
        "played": 2161,
        "ignored": 6530,
        "selectionRate": 0.24864802669428143,
        "wins": 1064,
        "losses": 1097,
        "draws": 0,
        "winRateWhenPlayed": 0.4923646459972235,
        "averageFlips": 0.35955576122165667,
        "averageDamageDealt": 0.26052753354928276,
        "averageNetDamage": 0.06108283202221196,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 477,
            "winRateWhenPlayed": 0.5157232704402516
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 463,
            "winRateWhenPlayed": 0.48812095032397407
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 362,
            "winRateWhenPlayed": 0.4530386740331492
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 250,
            "winRateWhenPlayed": 0.516
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 219,
            "winRateWhenPlayed": 0.4840182648401826
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
        "offered": 40158,
        "played": 9632,
        "ignored": 30526,
        "selectionRate": 0.23985258229991532,
        "wins": 4958,
        "losses": 4674,
        "draws": 0,
        "winRateWhenPlayed": 0.5147425249169435,
        "averageFlips": 0.46636212624584716,
        "averageDamageDealt": 0.45982142857142855,
        "averageNetDamage": 0.22196843853820597,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 536,
            "winRateWhenPlayed": 0.585820895522388
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 531,
            "winRateWhenPlayed": 0.568738229755179
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 506,
            "winRateWhenPlayed": 0.525691699604743
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 474,
            "winRateWhenPlayed": 0.5464135021097046
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 470,
            "winRateWhenPlayed": 0.48723404255319147
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
        "offered": 10052,
        "played": 2275,
        "ignored": 7777,
        "selectionRate": 0.22632311977715877,
        "wins": 1148,
        "losses": 1127,
        "draws": 0,
        "winRateWhenPlayed": 0.5046153846153846,
        "averageFlips": 0.5283516483516484,
        "averageDamageDealt": 0.4276923076923077,
        "averageNetDamage": 0.2650549450549451,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 268,
            "winRateWhenPlayed": 0.5559701492537313
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 266,
            "winRateWhenPlayed": 0.46616541353383456
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 265,
            "winRateWhenPlayed": 0.4830188679245283
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 263,
            "winRateWhenPlayed": 0.49809885931558934
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 260,
            "winRateWhenPlayed": 0.45
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
        "offered": 7678,
        "played": 1546,
        "ignored": 6132,
        "selectionRate": 0.20135451940609533,
        "wins": 732,
        "losses": 814,
        "draws": 0,
        "winRateWhenPlayed": 0.47347994825355755,
        "averageFlips": 0.5012936610608021,
        "averageDamageDealt": 0.2975420439844761,
        "averageNetDamage": 0.0957309184993532,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 267,
            "winRateWhenPlayed": 0.48314606741573035
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 262,
            "winRateWhenPlayed": 0.5229007633587787
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 261,
            "winRateWhenPlayed": 0.47509578544061304
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 258,
            "winRateWhenPlayed": 0.49224806201550386
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 256,
            "winRateWhenPlayed": 0.44140625
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
        "offered": 4535,
        "played": 940,
        "ignored": 3595,
        "selectionRate": 0.20727673649393605,
        "wins": 485,
        "losses": 455,
        "draws": 0,
        "winRateWhenPlayed": 0.5159574468085106,
        "averageFlips": 0.39148936170212767,
        "averageDamageDealt": 0.5212765957446809,
        "averageNetDamage": 0.26276595744680853,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 257,
            "winRateWhenPlayed": 0.5447470817120622
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 256,
            "winRateWhenPlayed": 0.4921875
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 252,
            "winRateWhenPlayed": 0.5317460317460317
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 175,
            "winRateWhenPlayed": 0.4857142857142857
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
        "offered": 4380,
        "played": 877,
        "ignored": 3503,
        "selectionRate": 0.2002283105022831,
        "wins": 426,
        "losses": 451,
        "draws": 0,
        "winRateWhenPlayed": 0.48574686431014824,
        "averageFlips": 0.5758266818700114,
        "averageDamageDealt": 0.5039908779931584,
        "averageNetDamage": 0.2998859749144811,
        "topCards": [
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 266,
            "winRateWhenPlayed": 0.5037593984962406
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 266,
            "winRateWhenPlayed": 0.46616541353383456
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 259,
            "winRateWhenPlayed": 0.4980694980694981
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 86,
            "winRateWhenPlayed": 0.45348837209302323
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
        "offered": 1192,
        "played": 344,
        "ignored": 848,
        "selectionRate": 0.28859060402684567,
        "wins": 163,
        "losses": 181,
        "draws": 0,
        "winRateWhenPlayed": 0.4738372093023256,
        "averageFlips": 0.3633720930232558,
        "averageDamageDealt": 0.23546511627906977,
        "averageNetDamage": 0.04360465116279069,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 257,
            "winRateWhenPlayed": 0.46303501945525294
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 87,
            "winRateWhenPlayed": 0.5057471264367817
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
        "offered": 1133,
        "played": 264,
        "ignored": 869,
        "selectionRate": 0.23300970873786409,
        "wins": 130,
        "losses": 134,
        "draws": 0,
        "winRateWhenPlayed": 0.49242424242424243,
        "averageFlips": 0.44696969696969696,
        "averageDamageDealt": 0.4583333333333333,
        "averageNetDamage": 0.26515151515151514,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 264,
            "winRateWhenPlayed": 0.49242424242424243
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
        "offered": 69128,
        "played": 15878,
        "ignored": 53250,
        "selectionRate": 0.22968985071172318,
        "wins": 8042,
        "losses": 7836,
        "draws": 0,
        "winRateWhenPlayed": 0.5064869630935886,
        "averageFlips": 0.47770500062980226,
        "averageDamageDealt": 0.4406096485703489,
        "averageNetDamage": 0.21942310114624006,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 802,
            "winRateWhenPlayed": 0.5461346633416458
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 799,
            "winRateWhenPlayed": 0.5644555694618273
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 763,
            "winRateWhenPlayed": 0.5045871559633027
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 738,
            "winRateWhenPlayed": 0.5271002710027101
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 737,
            "winRateWhenPlayed": 0.48575305291723203
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
        "count": 1205,
        "wins": 651,
        "losses": 554,
        "draws": 0,
        "winRate": 0.5402489626556016,
        "averageFlips": 0.5634854771784232,
        "averageDamageDealt": 0.48132780082987553,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 1194,
        "wins": 640,
        "losses": 554,
        "draws": 0,
        "winRate": 0.5360134003350083,
        "averageFlips": 0.5753768844221105,
        "averageDamageDealt": 0.4288107202680067,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 1107,
        "wins": 581,
        "losses": 526,
        "draws": 0,
        "winRate": 0.5248419150858176,
        "averageFlips": 0.5194218608852755,
        "averageDamageDealt": 0.39295392953929537,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 1080,
        "wins": 521,
        "losses": 559,
        "draws": 0,
        "winRate": 0.4824074074074074,
        "averageFlips": 0.4888888888888889,
        "averageDamageDealt": 0.3851851851851852,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 1054,
        "wins": 532,
        "losses": 522,
        "draws": 0,
        "winRate": 0.5047438330170778,
        "averageFlips": 0.4857685009487666,
        "averageDamageDealt": 0.4468690702087287,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 994,
        "wins": 518,
        "losses": 476,
        "draws": 0,
        "winRate": 0.5211267605633803,
        "averageFlips": 0.5311871227364185,
        "averageDamageDealt": 0.4778672032193159,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 934,
        "wins": 457,
        "losses": 477,
        "draws": 0,
        "winRate": 0.4892933618843683,
        "averageFlips": 0.6006423982869379,
        "averageDamageDealt": 0.7248394004282656,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 885,
        "wins": 460,
        "losses": 425,
        "draws": 0,
        "winRate": 0.519774011299435,
        "averageFlips": 0.6508474576271186,
        "averageDamageDealt": 0.896045197740113,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 860,
        "wins": 420,
        "losses": 440,
        "draws": 0,
        "winRate": 0.4883720930232558,
        "averageFlips": 0.6151162790697674,
        "averageDamageDealt": 0.7604651162790698,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 843,
        "wins": 520,
        "losses": 323,
        "draws": 0,
        "winRate": 0.6168446026097272,
        "averageFlips": 0.6156583629893239,
        "averageDamageDealt": 0.930011862396204,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 802,
        "wins": 438,
        "losses": 364,
        "draws": 0,
        "winRate": 0.5461346633416458,
        "averageFlips": 0.4937655860349127,
        "averageDamageDealt": 0.243142144638404,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 771,
        "wins": 482,
        "losses": 289,
        "draws": 0,
        "winRate": 0.6251621271076524,
        "averageFlips": 0.5719844357976653,
        "averageDamageDealt": 0.8119325551232166,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:owl:gain-shield",
        "kind": "effect",
        "label": "Chaton des ronces -> gain-shield",
        "count": 762,
        "wins": 384,
        "losses": 378,
        "draws": 0,
        "winRate": 0.5039370078740157,
        "averageFlips": 0.3438320209973753,
        "averageDamageDealt": 0.421259842519685,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 737,
        "wins": 358,
        "losses": 379,
        "draws": 0,
        "winRate": 0.48575305291723203,
        "averageFlips": 0.32700135685210313,
        "averageDamageDealt": 0.18724559023066487,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 724,
        "wins": 421,
        "losses": 303,
        "draws": 0,
        "winRate": 0.5814917127071824,
        "averageFlips": 0.4281767955801105,
        "averageDamageDealt": 0.8591160220994475,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 699,
        "wins": 353,
        "losses": 346,
        "draws": 0,
        "winRate": 0.5050071530758226,
        "averageFlips": 0.34620886981402005,
        "averageDamageDealt": 0.3419170243204578,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 693,
        "wins": 384,
        "losses": 309,
        "draws": 0,
        "winRate": 0.5541125541125541,
        "averageFlips": 0.4213564213564214,
        "averageDamageDealt": 0.8196248196248196,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 686,
        "wins": 418,
        "losses": 268,
        "draws": 0,
        "winRate": 0.60932944606414,
        "averageFlips": 0.42128279883381925,
        "averageDamageDealt": 0.9110787172011662,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 662,
        "wins": 344,
        "losses": 318,
        "draws": 0,
        "winRate": 0.5196374622356495,
        "averageFlips": 0.3202416918429003,
        "averageDamageDealt": 0.9108761329305136,
        "averageEffectAmount": 0.6676737160120846,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 650,
        "wins": 374,
        "losses": 276,
        "draws": 0,
        "winRate": 0.5753846153846154,
        "averageFlips": 0.1646153846153846,
        "averageDamageDealt": 0.17076923076923076,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 570,
        "wins": 302,
        "losses": 268,
        "draws": 0,
        "winRate": 0.5298245614035088,
        "averageFlips": 0.6228070175438597,
        "averageDamageDealt": 1.075438596491228,
        "averageEffectAmount": 0.41403508771929826,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:banner-squire:gain-shield",
        "kind": "effect",
        "label": "Ecuyere banniere -> gain-shield",
        "count": 553,
        "wins": 327,
        "losses": 226,
        "draws": 0,
        "winRate": 0.5913200723327305,
        "averageFlips": 0.41229656419529837,
        "averageDamageDealt": 0.6057866184448463,
        "averageEffectAmount": 1.6274864376130198,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+familiar",
        "kind": "friendly-adjacent",
        "label": "human allie + familiar",
        "count": 544,
        "wins": 327,
        "losses": 217,
        "draws": 0,
        "winRate": 0.6011029411764706,
        "averageFlips": 0.47058823529411764,
        "averageDamageDealt": 0.8731617647058824,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 527,
        "wins": 307,
        "losses": 220,
        "draws": 0,
        "winRate": 0.5825426944971537,
        "averageFlips": 0.444022770398482,
        "averageDamageDealt": 0.6261859582542695,
        "averageEffectAmount": 2.444022770398482,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3313,
        "id": "card-ember-imp-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Diablotin braise est ignoree par les bots",
        "detail": "3313 offres, 17% selection, 43% win quand jouee, role attacker.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2145,
        "id": "card-gear-monk-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Moine engrene est ignoree par les bots",
        "detail": "2145 offres, 17% selection, 45% win quand jouee, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3425,
        "id": "card-hornling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Cornu farceur est ignoree par les bots",
        "detail": "3425 offres, 18% selection, 51% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      }
    ]
  },
  "insights": [
    {
      "id": "skill-inversion-starter10-expert-vs-champion",
      "severity": "problem",
      "title": "Inversion de niveau detectee",
      "detail": "Expert bat Champion sur starter10 (55.6% contre 44.4%).",
      "recommendation": "Regarder les cartes ou situations qui recompensent trop le jeu immediat."
    },
    {
      "id": "diagnostic-card-ember-imp-ignored",
      "severity": "problem",
      "title": "Diablotin braise est ignoree par les bots",
      "detail": "3313 offres, 17% selection, 43% win quand jouee, role attacker. Confiance high, echantillon 3313.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-gear-monk-ignored",
      "severity": "problem",
      "title": "Moine engrene est ignoree par les bots",
      "detail": "2145 offres, 17% selection, 45% win quand jouee, role connector. Confiance high, echantillon 2145.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "deck-starter14-watch",
      "severity": "watch",
      "title": "starter14 a un signal a surveiller",
      "detail": "Avantage premier joueur a surveiller (39%).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "deck-turn-spread",
      "severity": "watch",
      "title": "La taille de deck change fortement le rythme",
      "detail": "Ecart de 9.22 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    },
    {
      "id": "champion-underperforms-starter10",
      "severity": "watch",
      "title": "Le champion ne depasse pas l'expert",
      "detail": "Champion gagne 44.4% contre Expert sur starter10.",
      "recommendation": "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion."
    },
    {
      "id": "diagnostic-card-hornling-ignored",
      "severity": "watch",
      "title": "Cornu farceur est ignoree par les bots",
      "detail": "3425 offres, 18% selection, 51% win quand jouee, role anchor. Confiance high, echantillon 3425.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    }
  ]
};
