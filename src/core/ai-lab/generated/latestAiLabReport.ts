import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260520-054431",
  "generatedAt": "2026-05-20T05:44:31.175Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 12,
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
      "averageHpEdge": -22.77777777777778
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 57,
      "losses": 51,
      "draws": 0,
      "winRate": 0.5277777777777778,
      "averageHpEdge": 6.194444444444445
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 56,
      "losses": 52,
      "draws": 0,
      "winRate": 0.5185185185185185,
      "averageHpEdge": 0.018518518518518517
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 67,
      "losses": 41,
      "draws": 0,
      "winRate": 0.6203703703703703,
      "averageHpEdge": 3.8518518518518516
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 36,
      "losses": 18,
      "draws": 0,
      "winRate": 0.6666666666666666,
      "averageHpEdge": 2.6481481481481484
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.6111111111111112,
      "averages": {
        "turns": 67.94444444444444,
        "rounds": 7.666666666666667,
        "flipsPerMatch": 25,
        "flipsPerTurn": 0.3679476696647588,
        "reshuffles": 11.88888888888889,
        "deadTurns": 0.16666666666666666,
        "finalHpDifference": 9.333333333333334
      },
      "deadTurnFrequency": 0.0024529844644317253,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a surveiller (61%)."
      ]
    },
    {
      "deckPresetId": "starter12",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5555555555555556,
      "averages": {
        "turns": 76.61111111111111,
        "rounds": 8.555555555555555,
        "flipsPerMatch": 25.88888888888889,
        "flipsPerTurn": 0.33792603335750543,
        "reshuffles": 10.333333333333334,
        "deadTurns": 0,
        "finalHpDifference": 6.833333333333333
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
        "turns": 77,
        "rounds": 8.666666666666666,
        "flipsPerMatch": 25.333333333333332,
        "flipsPerTurn": 0.329004329004329,
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
        "turns": 33.72222222222222,
        "rounds": 3.7777777777777777,
        "flipsPerMatch": 19.72222222222222,
        "flipsPerTurn": 0.5848434925864909,
        "reshuffles": 4.5,
        "deadTurns": 0.3888888888888889,
        "finalHpDifference": 23.27777777777778
      },
      "deadTurnFrequency": 0.011532125205930808
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
          "wins": 0,
          "losses": 18,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -11.5
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 11.5
        }
      ],
      "averages": {
        "turns": 57,
        "rounds": 6.5,
        "flipsPerMatch": 31.333333333333332,
        "flipsPerTurn": 0.5497076023391813,
        "reshuffles": 9.444444444444445,
        "deadTurns": 0.7222222222222222,
        "finalHpDifference": 11.5
      },
      "deadTurnFrequency": 0.012670565302144249
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
          "averageHpEdge": -11.88888888888889
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 11.88888888888889
        }
      ],
      "averages": {
        "turns": 56.44444444444444,
        "rounds": 6.333333333333333,
        "flipsPerMatch": 23,
        "flipsPerTurn": 0.4074803149606299,
        "reshuffles": 9.277777777777779,
        "deadTurns": 0.2777777777777778,
        "finalHpDifference": 12.666666666666666
      },
      "deadTurnFrequency": 0.004921259842519685
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
          "wins": 1,
          "winRate": 0.125
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
          "averageHpEdge": 0.2222222222222222
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -0.2222222222222222
        }
      ],
      "averages": {
        "turns": 62.888888888888886,
        "rounds": 7.277777777777778,
        "flipsPerMatch": 35.72222222222222,
        "flipsPerTurn": 0.5680212014134276,
        "reshuffles": 11.277777777777779,
        "deadTurns": 0,
        "finalHpDifference": 8.222222222222221
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
        "turns": 33.94444444444444,
        "rounds": 3.888888888888889,
        "flipsPerMatch": 19.833333333333332,
        "flipsPerTurn": 0.5842880523731587,
        "reshuffles": 3.3333333333333335,
        "deadTurns": 0,
        "finalHpDifference": 22.333333333333332
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
          "averageHpEdge": -10.055555555555555
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 10.055555555555555
        }
      ],
      "averages": {
        "turns": 56.05555555555556,
        "rounds": 6.444444444444445,
        "flipsPerMatch": 32.55555555555556,
        "flipsPerTurn": 0.5807730426164519,
        "reshuffles": 7.055555555555555,
        "deadTurns": 0.2777777777777778,
        "finalHpDifference": 10.38888888888889
      },
      "deadTurnFrequency": 0.004955401387512388
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
          "averageHpEdge": -9.5
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 9.5
        }
      ],
      "averages": {
        "turns": 66.61111111111111,
        "rounds": 7.444444444444445,
        "flipsPerMatch": 27.166666666666668,
        "flipsPerTurn": 0.4078398665554629,
        "reshuffles": 8.38888888888889,
        "deadTurns": 0,
        "finalHpDifference": 10.055555555555555
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
          "wins": 4,
          "winRate": 0.4
        },
        "enemy": {
          "games": 8,
          "wins": 3,
          "winRate": 0.375
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
          "averageHpEdge": -3.0555555555555554
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 12,
          "losses": 6,
          "draws": 0,
          "winRate": 0.6666666666666666,
          "averageHpEdge": 3.0555555555555554
        }
      ],
      "averages": {
        "turns": 63.888888888888886,
        "rounds": 7.222222222222222,
        "flipsPerMatch": 35.111111111111114,
        "flipsPerTurn": 0.5495652173913044,
        "reshuffles": 8.222222222222221,
        "deadTurns": 0,
        "finalHpDifference": 5.944444444444445
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
          "averageHpEdge": -22.72222222222222
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.72222222222222
        }
      ],
      "averages": {
        "turns": 37.166666666666664,
        "rounds": 4.277777777777778,
        "flipsPerMatch": 20.88888888888889,
        "flipsPerTurn": 0.5620328849028401,
        "reshuffles": 3.111111111111111,
        "deadTurns": 0,
        "finalHpDifference": 22.72222222222222
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
          "wins": 5,
          "winRate": 0.625
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
          "averageHpEdge": -9.61111111111111
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 9.61111111111111
        }
      ],
      "averages": {
        "turns": 63.55555555555556,
        "rounds": 7.166666666666667,
        "flipsPerMatch": 35.94444444444444,
        "flipsPerTurn": 0.5655594405594405,
        "reshuffles": 6.5,
        "deadTurns": 0.1111111111111111,
        "finalHpDifference": 11.055555555555555
      },
      "deadTurnFrequency": 0.0017482517482517483
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
          "wins": 2,
          "winRate": 0.25
        },
        "overallStartingPlayerWinRate": 0.3888888888888889
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -9.666666666666666
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 9.666666666666666
        }
      ],
      "averages": {
        "turns": 67.5,
        "rounds": 7.5,
        "flipsPerMatch": 25.61111111111111,
        "flipsPerTurn": 0.3794238683127572,
        "reshuffles": 6.777777777777778,
        "deadTurns": 0,
        "finalHpDifference": 11.11111111111111
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
          "wins": 4,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -5.111111111111111
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 5.111111111111111
        }
      ],
      "averages": {
        "turns": 67.66666666666667,
        "rounds": 7.666666666666667,
        "flipsPerMatch": 37.166666666666664,
        "flipsPerTurn": 0.5492610837438424,
        "reshuffles": 6.222222222222222,
        "deadTurns": 0,
        "finalHpDifference": 7
      },
      "deadTurnFrequency": 0
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
        "offered": 3253,
        "played": 584,
        "ignored": 2669,
        "selectionRate": 0.17952659083922534,
        "wins": 291,
        "losses": 293,
        "draws": 0,
        "winRateWhenPlayed": 0.4982876712328767,
        "averageFlips": 0.6301369863013698,
        "failedImpactRate": 0.39672131147540984,
        "averageFlipMargin": 1.6141304347826086,
        "averageEffectAmount": 0.285958904109589,
        "averageDamageDealt": 0.7671232876712328,
        "averageDamageTaken": 0.24315068493150685,
        "averageNetDamage": 0.523972602739726,
        "lethalMoves": 13,
        "roundClosers": 69,
        "byModel": [
          {
            "modelId": "regular",
            "played": 273,
            "winRate": 0.4908424908424908
          },
          {
            "modelId": "expert",
            "played": 114,
            "winRate": 0.5877192982456141
          },
          {
            "modelId": "opportunist",
            "played": 88,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "champion",
            "played": 67,
            "winRate": 0.6268656716417911
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
            "played": 219,
            "winRate": 0.5159817351598174
          },
          {
            "deckPresetId": "starter12",
            "played": 187,
            "winRate": 0.44919786096256686
          },
          {
            "deckPresetId": "starter14",
            "played": 178,
            "winRate": 0.5280898876404494
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 3484,
        "played": 561,
        "ignored": 2923,
        "selectionRate": 0.16102181400688864,
        "wins": 276,
        "losses": 285,
        "draws": 0,
        "winRateWhenPlayed": 0.4919786096256685,
        "averageFlips": 0.5026737967914439,
        "failedImpactRate": 0.5791044776119403,
        "averageFlipMargin": 1.3617021276595744,
        "averageEffectAmount": 0.35650623885918004,
        "averageDamageDealt": 1.2566844919786095,
        "averageDamageTaken": 0.6381461675579323,
        "averageNetDamage": 0.6185383244206772,
        "lethalMoves": 13,
        "roundClosers": 140,
        "byModel": [
          {
            "modelId": "regular",
            "played": 215,
            "winRate": 0.4930232558139535
          },
          {
            "modelId": "expert",
            "played": 136,
            "winRate": 0.6544117647058824
          },
          {
            "modelId": "opportunist",
            "played": 93,
            "winRate": 0.3655913978494624
          },
          {
            "modelId": "champion",
            "played": 70,
            "winRate": 0.6714285714285714
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
            "played": 196,
            "winRate": 0.45408163265306123
          },
          {
            "deckPresetId": "starter12",
            "played": 191,
            "winRate": 0.4869109947643979
          },
          {
            "deckPresetId": "starter14",
            "played": 174,
            "winRate": 0.5402298850574713
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
        "offered": 2134,
        "played": 381,
        "ignored": 1753,
        "selectionRate": 0.17853795688847235,
        "wins": 201,
        "losses": 180,
        "draws": 0,
        "winRateWhenPlayed": 0.5275590551181102,
        "averageFlips": 0.34908136482939633,
        "failedImpactRate": 0.5709677419354838,
        "averageFlipMargin": 1.1654135338345866,
        "averageEffectAmount": 0.7244094488188977,
        "averageDamageDealt": 0.4540682414698163,
        "averageDamageTaken": 0.34120734908136485,
        "averageNetDamage": 0.11286089238845143,
        "lethalMoves": 4,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 168,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 86,
            "winRate": 0.627906976744186
          },
          {
            "modelId": "champion",
            "played": 58,
            "winRate": 0.7068965517241379
          },
          {
            "modelId": "opportunist",
            "played": 55,
            "winRate": 0.4
          },
          {
            "modelId": "beginner",
            "played": 14,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 195,
            "winRate": 0.48717948717948717
          },
          {
            "deckPresetId": "starter12",
            "played": 186,
            "winRate": 0.5698924731182796
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
        "offered": 2177,
        "played": 825,
        "ignored": 1352,
        "selectionRate": 0.378961874138723,
        "wins": 446,
        "losses": 379,
        "draws": 0,
        "winRateWhenPlayed": 0.5406060606060606,
        "averageFlips": 0.25333333333333335,
        "failedImpactRate": 0.525,
        "averageFlipMargin": 1.784688995215311,
        "averageEffectAmount": 1.5927272727272728,
        "averageDamageDealt": 0.19272727272727272,
        "averageDamageTaken": 0.11757575757575757,
        "averageNetDamage": 0.07515151515151515,
        "lethalMoves": 2,
        "roundClosers": 57,
        "byModel": [
          {
            "modelId": "regular",
            "played": 402,
            "winRate": 0.5447761194029851
          },
          {
            "modelId": "expert",
            "played": 175,
            "winRate": 0.6514285714285715
          },
          {
            "modelId": "opportunist",
            "played": 120,
            "winRate": 0.475
          },
          {
            "modelId": "champion",
            "played": 86,
            "winRate": 0.6511627906976745
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
            "played": 319,
            "winRate": 0.5517241379310345
          },
          {
            "deckPresetId": "starter12",
            "played": 273,
            "winRate": 0.5128205128205128
          },
          {
            "deckPresetId": "starter14",
            "played": 233,
            "winRate": 0.5579399141630901
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
        "offered": 2374,
        "played": 781,
        "ignored": 1593,
        "selectionRate": 0.32898062342038753,
        "wins": 390,
        "losses": 391,
        "draws": 0,
        "winRateWhenPlayed": 0.499359795134443,
        "averageFlips": 0.46094750320102434,
        "failedImpactRate": 0.36507936507936506,
        "averageFlipMargin": 1.6416666666666666,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.16517285531370038,
        "averageDamageTaken": 0.11267605633802817,
        "averageNetDamage": 0.05249679897567221,
        "lethalMoves": 2,
        "roundClosers": 42,
        "byModel": [
          {
            "modelId": "regular",
            "played": 389,
            "winRate": 0.5578406169665809
          },
          {
            "modelId": "expert",
            "played": 171,
            "winRate": 0.5614035087719298
          },
          {
            "modelId": "opportunist",
            "played": 111,
            "winRate": 0.36036036036036034
          },
          {
            "modelId": "champion",
            "played": 67,
            "winRate": 0.5522388059701493
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
            "played": 287,
            "winRate": 0.5121951219512195
          },
          {
            "deckPresetId": "starter12",
            "played": 264,
            "winRate": 0.5151515151515151
          },
          {
            "deckPresetId": "starter14",
            "played": 230,
            "winRate": 0.4652173913043478
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
        "offered": 3010,
        "played": 778,
        "ignored": 2232,
        "selectionRate": 0.2584717607973422,
        "wins": 397,
        "losses": 381,
        "draws": 0,
        "winRateWhenPlayed": 0.5102827763496144,
        "averageFlips": 0.4074550128534704,
        "failedImpactRate": 0.5621546961325967,
        "averageFlipMargin": 1.4637223974763407,
        "averageEffectAmount": 1.2210796915167095,
        "averageDamageDealt": 0.5681233933161953,
        "averageDamageTaken": 0.31233933161953725,
        "averageNetDamage": 0.25578406169665807,
        "lethalMoves": 18,
        "roundClosers": 156,
        "byModel": [
          {
            "modelId": "regular",
            "played": 376,
            "winRate": 0.4946808510638298
          },
          {
            "modelId": "expert",
            "played": 156,
            "winRate": 0.6474358974358975
          },
          {
            "modelId": "opportunist",
            "played": 113,
            "winRate": 0.4336283185840708
          },
          {
            "modelId": "champion",
            "played": 88,
            "winRate": 0.6931818181818182
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
            "played": 283,
            "winRate": 0.5229681978798587
          },
          {
            "deckPresetId": "starter12",
            "played": 268,
            "winRate": 0.5149253731343284
          },
          {
            "deckPresetId": "starter14",
            "played": 227,
            "winRate": 0.4889867841409692
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
        "offered": 2630,
        "played": 768,
        "ignored": 1862,
        "selectionRate": 0.2920152091254753,
        "wins": 411,
        "losses": 357,
        "draws": 0,
        "winRateWhenPlayed": 0.53515625,
        "averageFlips": 0.3385416666666667,
        "failedImpactRate": 0.5723684210526315,
        "averageFlipMargin": 1.3923076923076922,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.3463541666666667,
        "averageDamageTaken": 0.2591145833333333,
        "averageNetDamage": 0.08723958333333337,
        "lethalMoves": 10,
        "roundClosers": 101,
        "byModel": [
          {
            "modelId": "regular",
            "played": 356,
            "winRate": 0.5140449438202247
          },
          {
            "modelId": "expert",
            "played": 185,
            "winRate": 0.6810810810810811
          },
          {
            "modelId": "champion",
            "played": 97,
            "winRate": 0.7319587628865979
          },
          {
            "modelId": "opportunist",
            "played": 93,
            "winRate": 0.3333333333333333
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
            "played": 286,
            "winRate": 0.534965034965035
          },
          {
            "deckPresetId": "starter12",
            "played": 246,
            "winRate": 0.5894308943089431
          },
          {
            "deckPresetId": "starter14",
            "played": 236,
            "winRate": 0.4788135593220339
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
        "offered": 2544,
        "played": 734,
        "ignored": 1810,
        "selectionRate": 0.28852201257861637,
        "wins": 354,
        "losses": 380,
        "draws": 0,
        "winRateWhenPlayed": 0.4822888283378747,
        "averageFlips": 0.2956403269754768,
        "failedImpactRate": 0.5633802816901409,
        "averageFlipMargin": 1.7511520737327189,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.15803814713896458,
        "averageDamageTaken": 0.17166212534059946,
        "averageNetDamage": -0.013623978201634884,
        "lethalMoves": 3,
        "roundClosers": 45,
        "byModel": [
          {
            "modelId": "regular",
            "played": 366,
            "winRate": 0.505464480874317
          },
          {
            "modelId": "opportunist",
            "played": 138,
            "winRate": 0.41304347826086957
          },
          {
            "modelId": "expert",
            "played": 126,
            "winRate": 0.5873015873015873
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.59375
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
            "played": 252,
            "winRate": 0.5317460317460317
          },
          {
            "deckPresetId": "starter12",
            "played": 252,
            "winRate": 0.43253968253968256
          },
          {
            "deckPresetId": "starter14",
            "played": 230,
            "winRate": 0.4826086956521739
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
        "offered": 2747,
        "played": 714,
        "ignored": 2033,
        "selectionRate": 0.2599199126319621,
        "wins": 342,
        "losses": 372,
        "draws": 0,
        "winRateWhenPlayed": 0.4789915966386555,
        "averageFlips": 0.33053221288515405,
        "failedImpactRate": 0.5770609318996416,
        "averageFlipMargin": 1.3728813559322033,
        "averageEffectAmount": 0.9985994397759104,
        "averageDamageDealt": 0.25770308123249297,
        "averageDamageTaken": 0.21008403361344538,
        "averageNetDamage": 0.04761904761904759,
        "lethalMoves": 2,
        "roundClosers": 72,
        "byModel": [
          {
            "modelId": "regular",
            "played": 347,
            "winRate": 0.4409221902017291
          },
          {
            "modelId": "expert",
            "played": 156,
            "winRate": 0.6346153846153846
          },
          {
            "modelId": "champion",
            "played": 93,
            "winRate": 0.6344086021505376
          },
          {
            "modelId": "opportunist",
            "played": 87,
            "winRate": 0.3563218390804598
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
            "played": 250,
            "winRate": 0.46
          },
          {
            "deckPresetId": "starter12",
            "played": 248,
            "winRate": 0.4717741935483871
          },
          {
            "deckPresetId": "starter14",
            "played": 216,
            "winRate": 0.5092592592592593
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
        "offered": 2589,
        "played": 710,
        "ignored": 1879,
        "selectionRate": 0.2742371572035535,
        "wins": 341,
        "losses": 369,
        "draws": 0,
        "winRateWhenPlayed": 0.4802816901408451,
        "averageFlips": 0.27887323943661974,
        "failedImpactRate": 0.543778801843318,
        "averageFlipMargin": 1.7424242424242424,
        "averageEffectAmount": 0.647887323943662,
        "averageDamageDealt": 0.8633802816901408,
        "averageDamageTaken": 0.18309859154929578,
        "averageNetDamage": 0.680281690140845,
        "lethalMoves": 11,
        "roundClosers": 51,
        "byModel": [
          {
            "modelId": "regular",
            "played": 292,
            "winRate": 0.5171232876712328
          },
          {
            "modelId": "expert",
            "played": 174,
            "winRate": 0.5632183908045977
          },
          {
            "modelId": "opportunist",
            "played": 110,
            "winRate": 0.34545454545454546
          },
          {
            "modelId": "champion",
            "played": 94,
            "winRate": 0.574468085106383
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
            "played": 256,
            "winRate": 0.47265625
          },
          {
            "deckPresetId": "starter12",
            "played": 239,
            "winRate": 0.45188284518828453
          },
          {
            "deckPresetId": "starter14",
            "played": 215,
            "winRate": 0.5209302325581395
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
        "offered": 3138,
        "played": 683,
        "ignored": 2455,
        "selectionRate": 0.21765455704270237,
        "wins": 373,
        "losses": 310,
        "draws": 0,
        "winRateWhenPlayed": 0.5461200585651538,
        "averageFlips": 0.5183016105417276,
        "failedImpactRate": 0.4847161572052402,
        "averageFlipMargin": 1.5254237288135593,
        "averageEffectAmount": 1.834553440702782,
        "averageDamageDealt": 0.5314787701317716,
        "averageDamageTaken": 0.17715959004392387,
        "averageNetDamage": 0.3543191800878477,
        "lethalMoves": 6,
        "roundClosers": 120,
        "byModel": [
          {
            "modelId": "regular",
            "played": 313,
            "winRate": 0.5686900958466453
          },
          {
            "modelId": "expert",
            "played": 141,
            "winRate": 0.6737588652482269
          },
          {
            "modelId": "opportunist",
            "played": 106,
            "winRate": 0.49056603773584906
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
            "played": 259,
            "winRate": 0.555984555984556
          },
          {
            "deckPresetId": "starter12",
            "played": 232,
            "winRate": 0.5086206896551724
          },
          {
            "deckPresetId": "starter14",
            "played": 192,
            "winRate": 0.578125
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
        "offered": 2906,
        "played": 670,
        "ignored": 2236,
        "selectionRate": 0.23055746730901583,
        "wins": 316,
        "losses": 354,
        "draws": 0,
        "winRateWhenPlayed": 0.4716417910447761,
        "averageFlips": 0.5074626865671642,
        "failedImpactRate": 0.39823008849557523,
        "averageFlipMargin": 1.5235294117647058,
        "averageEffectAmount": 0.5074626865671642,
        "averageDamageDealt": 0.17313432835820897,
        "averageDamageTaken": 0.18955223880597014,
        "averageNetDamage": -0.01641791044776117,
        "lethalMoves": 0,
        "roundClosers": 49,
        "byModel": [
          {
            "modelId": "regular",
            "played": 318,
            "winRate": 0.48427672955974843
          },
          {
            "modelId": "expert",
            "played": 133,
            "winRate": 0.5639097744360902
          },
          {
            "modelId": "opportunist",
            "played": 116,
            "winRate": 0.39655172413793105
          },
          {
            "modelId": "champion",
            "played": 59,
            "winRate": 0.6949152542372882
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
            "played": 244,
            "winRate": 0.5286885245901639
          },
          {
            "deckPresetId": "starter12",
            "played": 228,
            "winRate": 0.4605263157894737
          },
          {
            "deckPresetId": "starter14",
            "played": 198,
            "winRate": 0.41414141414141414
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
        "played": 652,
        "ignored": 2355,
        "selectionRate": 0.2168274027269704,
        "wins": 313,
        "losses": 339,
        "draws": 0,
        "winRateWhenPlayed": 0.48006134969325154,
        "averageFlips": 0.4754601226993865,
        "failedImpactRate": 0.36344969199178645,
        "averageFlipMargin": 1.3709677419354838,
        "averageEffectAmount": 0.6794478527607362,
        "averageDamageDealt": 0.8573619631901841,
        "averageDamageTaken": 0.1441717791411043,
        "averageNetDamage": 0.7131901840490797,
        "lethalMoves": 24,
        "roundClosers": 38,
        "byModel": [
          {
            "modelId": "regular",
            "played": 268,
            "winRate": 0.47388059701492535
          },
          {
            "modelId": "expert",
            "played": 124,
            "winRate": 0.6209677419354839
          },
          {
            "modelId": "opportunist",
            "played": 121,
            "winRate": 0.4214876033057851
          },
          {
            "modelId": "champion",
            "played": 91,
            "winRate": 0.6373626373626373
          },
          {
            "modelId": "beginner",
            "played": 48,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 243,
            "winRate": 0.4279835390946502
          },
          {
            "deckPresetId": "starter12",
            "played": 222,
            "winRate": 0.4864864864864865
          },
          {
            "deckPresetId": "starter14",
            "played": 187,
            "winRate": 0.5401069518716578
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
        "offered": 2944,
        "played": 651,
        "ignored": 2293,
        "selectionRate": 0.22112771739130435,
        "wins": 303,
        "losses": 348,
        "draws": 0,
        "winRateWhenPlayed": 0.46543778801843316,
        "averageFlips": 0.6835637480798771,
        "failedImpactRate": 0.34941520467836257,
        "averageFlipMargin": 2.8247191011235957,
        "averageEffectAmount": 0.8064516129032258,
        "averageDamageDealt": 0.4362519201228879,
        "averageDamageTaken": 0.2073732718894009,
        "averageNetDamage": 0.22887864823348697,
        "lethalMoves": 9,
        "roundClosers": 81,
        "byModel": [
          {
            "modelId": "regular",
            "played": 299,
            "winRate": 0.451505016722408
          },
          {
            "modelId": "expert",
            "played": 152,
            "winRate": 0.5723684210526315
          },
          {
            "modelId": "opportunist",
            "played": 98,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "champion",
            "played": 62,
            "winRate": 0.6290322580645161
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
            "played": 225,
            "winRate": 0.4222222222222222
          },
          {
            "deckPresetId": "starter14",
            "played": 215,
            "winRate": 0.4697674418604651
          },
          {
            "deckPresetId": "starter12",
            "played": 211,
            "winRate": 0.5071090047393365
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
        "offered": 3113,
        "played": 632,
        "ignored": 2481,
        "selectionRate": 0.20301959524574364,
        "wins": 342,
        "losses": 290,
        "draws": 0,
        "winRateWhenPlayed": 0.5411392405063291,
        "averageFlips": 0.36075949367088606,
        "failedImpactRate": 0.5393939393939394,
        "averageFlipMargin": 1.855263157894737,
        "averageEffectAmount": 0.5268987341772152,
        "averageDamageDealt": 0.3370253164556962,
        "averageDamageTaken": 0.20411392405063292,
        "averageNetDamage": 0.1329113924050633,
        "lethalMoves": 2,
        "roundClosers": 77,
        "byModel": [
          {
            "modelId": "regular",
            "played": 291,
            "winRate": 0.5601374570446735
          },
          {
            "modelId": "expert",
            "played": 162,
            "winRate": 0.6604938271604939
          },
          {
            "modelId": "champion",
            "played": 75,
            "winRate": 0.68
          },
          {
            "modelId": "opportunist",
            "played": 73,
            "winRate": 0.2876712328767123
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
            "played": 231,
            "winRate": 0.5064935064935064
          },
          {
            "deckPresetId": "starter12",
            "played": 211,
            "winRate": 0.6350710900473934
          },
          {
            "deckPresetId": "starter14",
            "played": 190,
            "winRate": 0.4789473684210526
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
        "offered": 3079,
        "played": 632,
        "ignored": 2447,
        "selectionRate": 0.20526144852224748,
        "wins": 292,
        "losses": 340,
        "draws": 0,
        "winRateWhenPlayed": 0.4620253164556962,
        "averageFlips": 0.46677215189873417,
        "failedImpactRate": 0.44652908067542213,
        "averageFlipMargin": 1.6711864406779662,
        "averageEffectAmount": 0.6075949367088608,
        "averageDamageDealt": 0.4161392405063291,
        "averageDamageTaken": 0.1930379746835443,
        "averageNetDamage": 0.2231012658227848,
        "lethalMoves": 9,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 294,
            "winRate": 0.46258503401360546
          },
          {
            "modelId": "expert",
            "played": 146,
            "winRate": 0.6164383561643836
          },
          {
            "modelId": "opportunist",
            "played": 93,
            "winRate": 0.3010752688172043
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.59375
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
            "played": 252,
            "winRate": 0.49603174603174605
          },
          {
            "deckPresetId": "starter12",
            "played": 202,
            "winRate": 0.4306930693069307
          },
          {
            "deckPresetId": "starter14",
            "played": 178,
            "winRate": 0.449438202247191
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
        "offered": 3215,
        "played": 621,
        "ignored": 2594,
        "selectionRate": 0.19315707620528771,
        "wins": 329,
        "losses": 292,
        "draws": 0,
        "winRateWhenPlayed": 0.5297906602254429,
        "averageFlips": 0.7423510466988728,
        "failedImpactRate": 0.34978843441466856,
        "averageFlipMargin": 1.6355748373101953,
        "averageEffectAmount": 1.144927536231884,
        "averageDamageDealt": 0.38808373590982287,
        "averageDamageTaken": 0.16747181964573268,
        "averageNetDamage": 0.22061191626409019,
        "lethalMoves": 4,
        "roundClosers": 78,
        "byModel": [
          {
            "modelId": "regular",
            "played": 295,
            "winRate": 0.5016949152542373
          },
          {
            "modelId": "expert",
            "played": 130,
            "winRate": 0.6461538461538462
          },
          {
            "modelId": "opportunist",
            "played": 100,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 63,
            "winRate": 0.746031746031746
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
            "played": 233,
            "winRate": 0.5622317596566524
          },
          {
            "deckPresetId": "starter12",
            "played": 210,
            "winRate": 0.5095238095238095
          },
          {
            "deckPresetId": "starter14",
            "played": 178,
            "winRate": 0.5112359550561798
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
        "offered": 3145,
        "played": 616,
        "ignored": 2529,
        "selectionRate": 0.1958664546899841,
        "wins": 302,
        "losses": 314,
        "draws": 0,
        "winRateWhenPlayed": 0.4902597402597403,
        "averageFlips": 0.6298701298701299,
        "failedImpactRate": 0.39280125195618154,
        "averageFlipMargin": 1.6649484536082475,
        "averageEffectAmount": 0.42045454545454547,
        "averageDamageDealt": 0.8376623376623377,
        "averageDamageTaken": 0.26461038961038963,
        "averageNetDamage": 0.573051948051948,
        "lethalMoves": 17,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 230,
            "winRate": 0.4391304347826087
          },
          {
            "modelId": "expert",
            "played": 146,
            "winRate": 0.6232876712328768
          },
          {
            "modelId": "opportunist",
            "played": 125,
            "winRate": 0.52
          },
          {
            "modelId": "champion",
            "played": 74,
            "winRate": 0.6081081081081081
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
            "played": 233,
            "winRate": 0.3905579399141631
          },
          {
            "deckPresetId": "starter12",
            "played": 207,
            "winRate": 0.5362318840579711
          },
          {
            "deckPresetId": "starter14",
            "played": 176,
            "winRate": 0.5681818181818182
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
        "offered": 3182,
        "played": 612,
        "ignored": 2570,
        "selectionRate": 0.1923318667504714,
        "wins": 305,
        "losses": 307,
        "draws": 0,
        "winRateWhenPlayed": 0.49836601307189543,
        "averageFlips": 0.4133986928104575,
        "failedImpactRate": 0.48785425101214575,
        "averageFlipMargin": 1.4901185770750989,
        "averageEffectAmount": 0.5571895424836601,
        "averageDamageDealt": 0.4117647058823529,
        "averageDamageTaken": 0.19607843137254902,
        "averageNetDamage": 0.2156862745098039,
        "lethalMoves": 7,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 300,
            "winRate": 0.4666666666666667
          },
          {
            "modelId": "expert",
            "played": 121,
            "winRate": 0.6446280991735537
          },
          {
            "modelId": "opportunist",
            "played": 102,
            "winRate": 0.46078431372549017
          },
          {
            "modelId": "champion",
            "played": 57,
            "winRate": 0.7017543859649122
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
            "played": 235,
            "winRate": 0.5319148936170213
          },
          {
            "deckPresetId": "starter12",
            "played": 199,
            "winRate": 0.457286432160804
          },
          {
            "deckPresetId": "starter14",
            "played": 178,
            "winRate": 0.5
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
        "offered": 3054,
        "played": 598,
        "ignored": 2456,
        "selectionRate": 0.19580877537655533,
        "wins": 326,
        "losses": 272,
        "draws": 0,
        "winRateWhenPlayed": 0.5451505016722408,
        "averageFlips": 0.8294314381270903,
        "failedImpactRate": 0.25188536953242835,
        "averageFlipMargin": 1.3951612903225807,
        "averageEffectAmount": 1.1956521739130435,
        "averageDamageDealt": 0.31270903010033446,
        "averageDamageTaken": 0.23578595317725753,
        "averageNetDamage": 0.07692307692307693,
        "lethalMoves": 3,
        "roundClosers": 58,
        "byModel": [
          {
            "modelId": "regular",
            "played": 263,
            "winRate": 0.5551330798479087
          },
          {
            "modelId": "opportunist",
            "played": 135,
            "winRate": 0.4666666666666667
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.7154471544715447
          },
          {
            "modelId": "champion",
            "played": 42,
            "winRate": 0.6904761904761905
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
            "played": 240,
            "winRate": 0.5541666666666667
          },
          {
            "deckPresetId": "starter12",
            "played": 196,
            "winRate": 0.5306122448979592
          },
          {
            "deckPresetId": "starter14",
            "played": 162,
            "winRate": 0.5493827160493827
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
        "offered": 3100,
        "played": 593,
        "ignored": 2507,
        "selectionRate": 0.19129032258064516,
        "wins": 292,
        "losses": 301,
        "draws": 0,
        "winRateWhenPlayed": 0.4924114671163575,
        "averageFlips": 0.8145025295109612,
        "failedImpactRate": 0.2948905109489051,
        "averageFlipMargin": 1.4865424430641823,
        "averageEffectAmount": 0.8145025295109612,
        "averageDamageDealt": 0.26981450252951095,
        "averageDamageTaken": 0.224283305227656,
        "averageNetDamage": 0.04553119730185495,
        "lethalMoves": 4,
        "roundClosers": 56,
        "byModel": [
          {
            "modelId": "regular",
            "played": 261,
            "winRate": 0.48659003831417624
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.5691056910569106
          },
          {
            "modelId": "opportunist",
            "played": 116,
            "winRate": 0.47413793103448276
          },
          {
            "modelId": "champion",
            "played": 61,
            "winRate": 0.6557377049180327
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
            "played": 233,
            "winRate": 0.5407725321888412
          },
          {
            "deckPresetId": "starter12",
            "played": 187,
            "winRate": 0.47593582887700536
          },
          {
            "deckPresetId": "starter14",
            "played": 173,
            "winRate": 0.44508670520231214
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
        "offered": 1703,
        "played": 468,
        "ignored": 1235,
        "selectionRate": 0.2748091603053435,
        "wins": 212,
        "losses": 256,
        "draws": 0,
        "winRateWhenPlayed": 0.452991452991453,
        "averageFlips": 0.37606837606837606,
        "failedImpactRate": 0.37142857142857144,
        "averageFlipMargin": 1.375,
        "averageEffectAmount": 0.8675213675213675,
        "averageDamageDealt": 0.14316239316239315,
        "averageDamageTaken": 0.10042735042735043,
        "averageNetDamage": 0.04273504273504272,
        "lethalMoves": 2,
        "roundClosers": 22,
        "byModel": [
          {
            "modelId": "regular",
            "played": 216,
            "winRate": 0.4398148148148148
          },
          {
            "modelId": "expert",
            "played": 124,
            "winRate": 0.532258064516129
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.3924050632911392
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.5882352941176471
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 242,
            "winRate": 0.4214876033057851
          },
          {
            "deckPresetId": "starter14",
            "played": 226,
            "winRate": 0.48672566371681414
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
        "offered": 1542,
        "played": 465,
        "ignored": 1077,
        "selectionRate": 0.301556420233463,
        "wins": 262,
        "losses": 203,
        "draws": 0,
        "winRateWhenPlayed": 0.5634408602150538,
        "averageFlips": 0.1870967741935484,
        "failedImpactRate": 0.6167400881057269,
        "averageFlipMargin": 1.6781609195402298,
        "averageEffectAmount": 1.6774193548387097,
        "averageDamageDealt": 0.25161290322580643,
        "averageDamageTaken": 0.18064516129032257,
        "averageNetDamage": 0.07096774193548386,
        "lethalMoves": 6,
        "roundClosers": 43,
        "byModel": [
          {
            "modelId": "regular",
            "played": 215,
            "winRate": 0.5627906976744186
          },
          {
            "modelId": "expert",
            "played": 92,
            "winRate": 0.6521739130434783
          },
          {
            "modelId": "opportunist",
            "played": 67,
            "winRate": 0.4626865671641791
          },
          {
            "modelId": "champion",
            "played": 66,
            "winRate": 0.7575757575757576
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
            "played": 235,
            "winRate": 0.5617021276595745
          },
          {
            "deckPresetId": "starter14",
            "played": 230,
            "winRate": 0.5652173913043478
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
        "offered": 2057,
        "played": 391,
        "ignored": 1666,
        "selectionRate": 0.19008264462809918,
        "wins": 211,
        "losses": 180,
        "draws": 0,
        "winRateWhenPlayed": 0.5396419437340153,
        "averageFlips": 0.8235294117647058,
        "failedImpactRate": 0.25806451612903225,
        "averageFlipMargin": 1.484472049689441,
        "averageEffectAmount": 0.27877237851662406,
        "averageDamageDealt": 0.6828644501278772,
        "averageDamageTaken": 0.2531969309462916,
        "averageNetDamage": 0.42966751918158563,
        "lethalMoves": 7,
        "roundClosers": 44,
        "byModel": [
          {
            "modelId": "regular",
            "played": 161,
            "winRate": 0.5279503105590062
          },
          {
            "modelId": "expert",
            "played": 89,
            "winRate": 0.651685393258427
          },
          {
            "modelId": "opportunist",
            "played": 62,
            "winRate": 0.41935483870967744
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.7777777777777778
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
            "played": 207,
            "winRate": 0.5700483091787439
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
        "offered": 784,
        "played": 236,
        "ignored": 548,
        "selectionRate": 0.3010204081632653,
        "wins": 126,
        "losses": 110,
        "draws": 0,
        "winRateWhenPlayed": 0.5338983050847458,
        "averageFlips": 0.4067796610169492,
        "failedImpactRate": 0.4782608695652174,
        "averageFlipMargin": 1.3854166666666667,
        "averageEffectAmount": 0.9957627118644068,
        "averageDamageDealt": 0.3389830508474576,
        "averageDamageTaken": 0.25,
        "averageNetDamage": 0.08898305084745761,
        "lethalMoves": 2,
        "roundClosers": 34,
        "byModel": [
          {
            "modelId": "regular",
            "played": 117,
            "winRate": 0.5811965811965812
          },
          {
            "modelId": "expert",
            "played": 44,
            "winRate": 0.5909090909090909
          },
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.28125
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.8214285714285714
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
            "played": 236,
            "winRate": 0.5338983050847458
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
        "offered": 779,
        "played": 218,
        "ignored": 561,
        "selectionRate": 0.2798459563543004,
        "wins": 108,
        "losses": 110,
        "draws": 0,
        "winRateWhenPlayed": 0.4954128440366973,
        "averageFlips": 0.44954128440366975,
        "failedImpactRate": 0.4895833333333333,
        "averageFlipMargin": 2.3979591836734695,
        "averageEffectAmount": 0.9128440366972477,
        "averageDamageDealt": 0.25229357798165136,
        "averageDamageTaken": 0.26146788990825687,
        "averageNetDamage": -0.009174311926605505,
        "lethalMoves": 0,
        "roundClosers": 20,
        "byModel": [
          {
            "modelId": "regular",
            "played": 101,
            "winRate": 0.5742574257425742
          },
          {
            "modelId": "expert",
            "played": 56,
            "winRate": 0.5178571428571429
          },
          {
            "modelId": "opportunist",
            "played": 30,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "beginner",
            "played": 16,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0.7333333333333333
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 218,
            "winRate": 0.4954128440366973
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
        "offered": 823,
        "played": 198,
        "ignored": 625,
        "selectionRate": 0.24058323207776428,
        "wins": 96,
        "losses": 102,
        "draws": 0,
        "winRateWhenPlayed": 0.48484848484848486,
        "averageFlips": 0.1919191919191919,
        "failedImpactRate": 0.6082474226804123,
        "averageFlipMargin": 1.7894736842105263,
        "averageEffectAmount": 0.9797979797979798,
        "averageDamageDealt": 0.12626262626262627,
        "averageDamageTaken": 0.09595959595959595,
        "averageNetDamage": 0.030303030303030318,
        "lethalMoves": 0,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 96,
            "winRate": 0.5416666666666666
          },
          {
            "modelId": "expert",
            "played": 38,
            "winRate": 0.4473684210526316
          },
          {
            "modelId": "opportunist",
            "played": 29,
            "winRate": 0.4482758620689655
          },
          {
            "modelId": "champion",
            "played": 20,
            "winRate": 0.7
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
            "played": 198,
            "winRate": 0.48484848484848486
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
        "offered": 977,
        "played": 177,
        "ignored": 800,
        "selectionRate": 0.1811668372569089,
        "wins": 96,
        "losses": 81,
        "draws": 0,
        "winRateWhenPlayed": 0.5423728813559322,
        "averageFlips": 0.6497175141242938,
        "failedImpactRate": 0.375,
        "averageFlipMargin": 1.3565217391304347,
        "averageEffectAmount": 1.2937853107344632,
        "averageDamageDealt": 0.14689265536723164,
        "averageDamageTaken": 0.10734463276836158,
        "averageNetDamage": 0.03954802259887007,
        "lethalMoves": 1,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 74,
            "winRate": 0.6621621621621622
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.48717948717948717
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.4857142857142857
          },
          {
            "modelId": "beginner",
            "played": 15,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 14,
            "winRate": 0.7857142857142857
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 177,
            "winRate": 0.5423728813559322
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
        "offered": 20450,
        "played": 4688,
        "ignored": 15762,
        "selectionRate": 0.22924205378973106,
        "wins": 2451,
        "losses": 2237,
        "draws": 0,
        "winRateWhenPlayed": 0.5228242320819113,
        "averageFlips": 0.4697098976109215,
        "averageDamageDealt": 0.33724402730375425,
        "averageNetDamage": 0.14270477815699656,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 825,
            "winRateWhenPlayed": 0.5406060606060606
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 768,
            "winRateWhenPlayed": 0.53515625
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 632,
            "winRateWhenPlayed": 0.5411392405063291
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 632,
            "winRateWhenPlayed": 0.4620253164556962
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 621,
            "winRateWhenPlayed": 0.5297906602254429
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
        "offered": 18970,
        "played": 4674,
        "ignored": 14296,
        "selectionRate": 0.24638903531892462,
        "wins": 2359,
        "losses": 2315,
        "draws": 0,
        "winRateWhenPlayed": 0.5047068891741548,
        "averageFlips": 0.48973042362002567,
        "averageDamageDealt": 0.3553701326486949,
        "averageNetDamage": 0.14997860504920835,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 781,
            "winRateWhenPlayed": 0.499359795134443
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 778,
            "winRateWhenPlayed": 0.5102827763496144
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 734,
            "winRateWhenPlayed": 0.4822888283378747
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 714,
            "winRateWhenPlayed": 0.4789915966386555
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 683,
            "winRateWhenPlayed": 0.5461200585651538
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
        "offered": 21328,
        "played": 4444,
        "ignored": 16884,
        "selectionRate": 0.20836459114778694,
        "wins": 2142,
        "losses": 2302,
        "draws": 0,
        "winRateWhenPlayed": 0.481998199819982,
        "averageFlips": 0.5245274527452746,
        "averageDamageDealt": 0.7292979297929792,
        "averageNetDamage": 0.4707470747074707,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 710,
            "winRateWhenPlayed": 0.4802816901408451
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 670,
            "winRateWhenPlayed": 0.4716417910447761
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 652,
            "winRateWhenPlayed": 0.48006134969325154
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 651,
            "winRateWhenPlayed": 0.46543778801843316
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 616,
            "winRateWhenPlayed": 0.4902597402597403
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
        "offered": 8742,
        "played": 2143,
        "ignored": 6599,
        "selectionRate": 0.24513841226264013,
        "wins": 1101,
        "losses": 1042,
        "draws": 0,
        "winRateWhenPlayed": 0.51376574895007,
        "averageFlips": 0.3467102193187121,
        "averageDamageDealt": 0.2533831077928138,
        "averageNetDamage": 0.059729351376574896,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 468,
            "winRateWhenPlayed": 0.452991452991453
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 465,
            "winRateWhenPlayed": 0.5634408602150538
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 381,
            "winRateWhenPlayed": 0.5275590551181102
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 236,
            "winRateWhenPlayed": 0.5338983050847458
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 218,
            "winRateWhenPlayed": 0.4954128440366973
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
        "offered": 40685,
        "played": 9714,
        "ignored": 30971,
        "selectionRate": 0.2387612142067101,
        "wins": 4975,
        "losses": 4739,
        "draws": 0,
        "winRateWhenPlayed": 0.5121474161004735,
        "averageFlips": 0.46788140827671404,
        "averageDamageDealt": 0.4500720609429689,
        "averageNetDamage": 0.23234506897261686,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 557,
            "winRateWhenPlayed": 0.5421903052064632
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 518,
            "winRateWhenPlayed": 0.5193050193050193
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 513,
            "winRateWhenPlayed": 0.5263157894736842
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 510,
            "winRateWhenPlayed": 0.5392156862745098
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 469,
            "winRateWhenPlayed": 0.4690831556503198
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
        "offered": 9639,
        "played": 2270,
        "ignored": 7369,
        "selectionRate": 0.23550160805062767,
        "wins": 1118,
        "losses": 1152,
        "draws": 0,
        "winRateWhenPlayed": 0.49251101321585905,
        "averageFlips": 0.5030837004405286,
        "averageDamageDealt": 0.42687224669603524,
        "averageNetDamage": 0.2629955947136564,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 268,
            "winRateWhenPlayed": 0.5373134328358209
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 265,
            "winRateWhenPlayed": 0.4830188679245283
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 263,
            "winRateWhenPlayed": 0.4600760456273764
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 261,
            "winRateWhenPlayed": 0.48659003831417624
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 261,
            "winRateWhenPlayed": 0.4789272030651341
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
        "offered": 7699,
        "played": 1550,
        "ignored": 6149,
        "selectionRate": 0.20132484738277698,
        "wins": 754,
        "losses": 796,
        "draws": 0,
        "winRateWhenPlayed": 0.4864516129032258,
        "averageFlips": 0.5096774193548387,
        "averageDamageDealt": 0.33741935483870966,
        "averageNetDamage": 0.09419354838709676,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 265,
            "winRateWhenPlayed": 0.5056603773584906
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 260,
            "winRateWhenPlayed": 0.49615384615384617
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 259,
            "winRateWhenPlayed": 0.5212355212355212
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 257,
            "winRateWhenPlayed": 0.490272373540856
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 256,
            "winRateWhenPlayed": 0.4296875
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
        "offered": 4817,
        "played": 934,
        "ignored": 3883,
        "selectionRate": 0.1938966161511314,
        "wins": 475,
        "losses": 459,
        "draws": 0,
        "winRateWhenPlayed": 0.5085653104925053,
        "averageFlips": 0.3875802997858672,
        "averageDamageDealt": 0.5107066381156317,
        "averageNetDamage": 0.23447537473233404,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 258,
            "winRateWhenPlayed": 0.4844961240310077
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 256,
            "winRateWhenPlayed": 0.484375
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 244,
            "winRateWhenPlayed": 0.5327868852459017
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 176,
            "winRateWhenPlayed": 0.5454545454545454
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
        "offered": 4237,
        "played": 871,
        "ignored": 3366,
        "selectionRate": 0.2055699787585556,
        "wins": 424,
        "losses": 447,
        "draws": 0,
        "winRateWhenPlayed": 0.48679678530424797,
        "averageFlips": 0.5706084959816303,
        "averageDamageDealt": 0.49827784156142363,
        "averageNetDamage": 0.32606199770378874,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 262,
            "winRateWhenPlayed": 0.49236641221374045
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 261,
            "winRateWhenPlayed": 0.47509578544061304
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 260,
            "winRateWhenPlayed": 0.5038461538461538
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 88,
            "winRateWhenPlayed": 0.45454545454545453
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
        "offered": 1331,
        "played": 345,
        "ignored": 986,
        "selectionRate": 0.25920360631104433,
        "wins": 180,
        "losses": 165,
        "draws": 0,
        "winRateWhenPlayed": 0.5217391304347826,
        "averageFlips": 0.3536231884057971,
        "averageDamageDealt": 0.2985507246376812,
        "averageNetDamage": 0.06666666666666668,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 258,
            "winRateWhenPlayed": 0.5271317829457365
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
        "offered": 1082,
        "played": 265,
        "ignored": 817,
        "selectionRate": 0.24491682070240295,
        "wins": 127,
        "losses": 138,
        "draws": 0,
        "winRateWhenPlayed": 0.47924528301886793,
        "averageFlips": 0.4037735849056604,
        "averageDamageDealt": 0.5584905660377358,
        "averageNetDamage": 0.24150943396226415,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 265,
            "winRateWhenPlayed": 0.47924528301886793
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
        "offered": 69490,
        "played": 15949,
        "ignored": 53541,
        "selectionRate": 0.22951503813498345,
        "wins": 8053,
        "losses": 7896,
        "draws": 0,
        "winRateWhenPlayed": 0.504921938679541,
        "averageFlips": 0.4743244090538592,
        "averageDamageDealt": 0.4405291867828704,
        "averageNetDamage": 0.22509248228729073,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 825,
            "winRateWhenPlayed": 0.5406060606060606
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 781,
            "winRateWhenPlayed": 0.499359795134443
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 778,
            "winRateWhenPlayed": 0.5102827763496144
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 768,
            "winRateWhenPlayed": 0.53515625
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 734,
            "winRateWhenPlayed": 0.4822888283378747
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
        "count": 1181,
        "wins": 600,
        "losses": 581,
        "draws": 0,
        "winRate": 0.5080440304826418,
        "averageFlips": 0.5876375952582558,
        "averageDamageDealt": 0.441151566469094,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 1167,
        "wins": 653,
        "losses": 514,
        "draws": 0,
        "winRate": 0.5595544130248501,
        "averageFlips": 0.583547557840617,
        "averageDamageDealt": 0.5201371036846615,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 1099,
        "wins": 549,
        "losses": 550,
        "draws": 0,
        "winRate": 0.49954504094631486,
        "averageFlips": 0.49954504094631486,
        "averageDamageDealt": 0.4212920837124659,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 1090,
        "wins": 521,
        "losses": 569,
        "draws": 0,
        "winRate": 0.4779816513761468,
        "averageFlips": 0.5174311926605505,
        "averageDamageDealt": 0.3394495412844037,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 1046,
        "wins": 535,
        "losses": 511,
        "draws": 0,
        "winRate": 0.511472275334608,
        "averageFlips": 0.5038240917782026,
        "averageDamageDealt": 0.4225621414913958,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 1019,
        "wins": 533,
        "losses": 486,
        "draws": 0,
        "winRate": 0.5230618253189402,
        "averageFlips": 0.5250245338567223,
        "averageDamageDealt": 0.4533856722276742,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 947,
        "wins": 459,
        "losses": 488,
        "draws": 0,
        "winRate": 0.48468848996832103,
        "averageFlips": 0.5797254487856388,
        "averageDamageDealt": 0.7180570221752904,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 942,
        "wins": 450,
        "losses": 492,
        "draws": 0,
        "winRate": 0.47770700636942676,
        "averageFlips": 0.5976645435244161,
        "averageDamageDealt": 0.7940552016985138,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 905,
        "wins": 419,
        "losses": 486,
        "draws": 0,
        "winRate": 0.46298342541436466,
        "averageFlips": 0.594475138121547,
        "averageDamageDealt": 0.7878453038674034,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 878,
        "wins": 565,
        "losses": 313,
        "draws": 0,
        "winRate": 0.643507972665148,
        "averageFlips": 0.6503416856492027,
        "averageDamageDealt": 0.9612756264236902,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 782,
        "wins": 484,
        "losses": 298,
        "draws": 0,
        "winRate": 0.618925831202046,
        "averageFlips": 0.5869565217391305,
        "averageDamageDealt": 0.8439897698209718,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 781,
        "wins": 390,
        "losses": 391,
        "draws": 0,
        "winRate": 0.499359795134443,
        "averageFlips": 0.46094750320102434,
        "averageDamageDealt": 0.16517285531370038,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:owl:gain-shield",
        "kind": "effect",
        "label": "Chaton des ronces -> gain-shield",
        "count": 768,
        "wins": 411,
        "losses": 357,
        "draws": 0,
        "winRate": 0.53515625,
        "averageFlips": 0.3385416666666667,
        "averageDamageDealt": 0.3463541666666667,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 752,
        "wins": 422,
        "losses": 330,
        "draws": 0,
        "winRate": 0.5611702127659575,
        "averageFlips": 0.4015957446808511,
        "averageDamageDealt": 0.8404255319148937,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 738,
        "wins": 400,
        "losses": 338,
        "draws": 0,
        "winRate": 0.5420054200542005,
        "averageFlips": 0.42140921409214094,
        "averageDamageDealt": 0.9010840108401084,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 734,
        "wins": 354,
        "losses": 380,
        "draws": 0,
        "winRate": 0.4822888283378747,
        "averageFlips": 0.2956403269754768,
        "averageDamageDealt": 0.15803814713896458,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 713,
        "wins": 341,
        "losses": 372,
        "draws": 0,
        "winRate": 0.4782608695652174,
        "averageFlips": 0.33099579242636745,
        "averageDamageDealt": 0.25806451612903225,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 689,
        "wins": 325,
        "losses": 364,
        "draws": 0,
        "winRate": 0.4716981132075472,
        "averageFlips": 0.2757619738751814,
        "averageDamageDealt": 0.8766328011611031,
        "averageEffectAmount": 0.6676342525399129,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 658,
        "wins": 371,
        "losses": 287,
        "draws": 0,
        "winRate": 0.5638297872340425,
        "averageFlips": 0.16869300911854104,
        "averageDamageDealt": 0.1534954407294833,
        "averageEffectAmount": 1.9969604863221884,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 651,
        "wins": 375,
        "losses": 276,
        "draws": 0,
        "winRate": 0.576036866359447,
        "averageFlips": 0.4270353302611367,
        "averageDamageDealt": 0.7250384024577573,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+familiar",
        "kind": "friendly-adjacent",
        "label": "human allie + familiar",
        "count": 593,
        "wins": 340,
        "losses": 253,
        "draws": 0,
        "winRate": 0.5733558178752108,
        "averageFlips": 0.4300168634064081,
        "averageDamageDealt": 0.8903878583473862,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:banner-squire:gain-shield",
        "kind": "effect",
        "label": "Ecuyere banniere -> gain-shield",
        "count": 592,
        "wins": 330,
        "losses": 262,
        "draws": 0,
        "winRate": 0.5574324324324325,
        "averageFlips": 0.3597972972972973,
        "averageDamageDealt": 0.6959459459459459,
        "averageEffectAmount": 1.6047297297297298,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 525,
        "wins": 255,
        "losses": 270,
        "draws": 0,
        "winRate": 0.4857142857142857,
        "averageFlips": 0.7923809523809524,
        "averageDamageDealt": 0.48,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 521,
        "wins": 283,
        "losses": 238,
        "draws": 0,
        "winRate": 0.5431861804222649,
        "averageFlips": 0.5508637236084453,
        "averageDamageDealt": 1.4875239923224568,
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
        "sampleSize": 3484,
        "id": "card-hornling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Cornu farceur est ignoree par les bots",
        "detail": "3484 offres, 16% selection, 49% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3253,
        "id": "card-ember-imp-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Diablotin braise est ignoree par les bots",
        "detail": "3253 offres, 18% selection, 50% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2134,
        "id": "card-gear-monk-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Moine engrene est ignoree par les bots",
        "detail": "2134 offres, 18% selection, 53% win quand jouee, role connector.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 525,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "525 occurrences, 49% win, 0.79 flips, 0.48 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "deck-starter10-watch",
      "severity": "watch",
      "title": "starter10 a un signal a surveiller",
      "detail": "Avantage premier joueur a surveiller (61%).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
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
      "detail": "Ecart de 9.06 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    },
    {
      "id": "diagnostic-card-hornling-ignored",
      "severity": "watch",
      "title": "Cornu farceur est ignoree par les bots",
      "detail": "3484 offres, 16% selection, 49% win quand jouee, role anchor. Confiance high, echantillon 3484.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-ember-imp-ignored",
      "severity": "watch",
      "title": "Diablotin braise est ignoree par les bots",
      "detail": "3253 offres, 18% selection, 50% win quand jouee, role attacker. Confiance high, echantillon 3253.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-gear-monk-ignored",
      "severity": "watch",
      "title": "Moine engrene est ignoree par les bots",
      "detail": "2134 offres, 18% selection, 53% win quand jouee, role connector. Confiance high, echantillon 2134.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-combo-effect:pact-sprite:boost-self",
      "severity": "watch",
      "title": "Lutin a pacte -> boost-self ressort comme combo",
      "detail": "525 occurrences, 49% win, 0.79 flips, 0.48 degats. Confiance high, echantillon 525.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    }
  ]
};
