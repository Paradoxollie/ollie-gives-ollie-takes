import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260519-135104",
  "generatedAt": "2026-05-19T13:51:04.154Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 8,
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
      "averageHpEdge": -23.074074074074073
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 59,
      "losses": 49,
      "draws": 0,
      "winRate": 0.5462962962962963,
      "averageHpEdge": 7.083333333333333
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 52,
      "losses": 56,
      "draws": 0,
      "winRate": 0.48148148148148145,
      "averageHpEdge": -0.8981481481481481
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 67,
      "losses": 41,
      "draws": 0,
      "winRate": 0.6203703703703703,
      "averageHpEdge": 4.388888888888889
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 38,
      "losses": 16,
      "draws": 0,
      "winRate": 0.7037037037037037,
      "averageHpEdge": 1.9259259259259258
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
        "turns": 67.83333333333333,
        "rounds": 7.555555555555555,
        "flipsPerMatch": 22.444444444444443,
        "flipsPerTurn": 0.3308763308763309,
        "reshuffles": 11.777777777777779,
        "deadTurns": 0.2777777777777778,
        "finalHpDifference": 9.722222222222221
      },
      "deadTurnFrequency": 0.004095004095004095,
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
        "turns": 73.22222222222223,
        "rounds": 8.277777777777779,
        "flipsPerMatch": 24.5,
        "flipsPerTurn": 0.334597875569044,
        "reshuffles": 9.5,
        "deadTurns": 0,
        "finalHpDifference": 7.388888888888889
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
        "turns": 74.44444444444444,
        "rounds": 8.5,
        "flipsPerMatch": 25.72222222222222,
        "flipsPerTurn": 0.3455223880597015,
        "reshuffles": 7.444444444444445,
        "deadTurns": 0,
        "finalHpDifference": 6.444444444444445
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
          "averageHpEdge": -24.77777777777778
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 24.77777777777778
        }
      ],
      "averages": {
        "turns": 35.388888888888886,
        "rounds": 3.888888888888889,
        "flipsPerMatch": 19.38888888888889,
        "flipsPerTurn": 0.5478806907378336,
        "reshuffles": 4.944444444444445,
        "deadTurns": 1.2222222222222223,
        "finalHpDifference": 24.77777777777778
      },
      "deadTurnFrequency": 0.03453689167974882
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
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -8.333333333333334
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 8.333333333333334
        }
      ],
      "averages": {
        "turns": 58.77777777777778,
        "rounds": 6.555555555555555,
        "flipsPerMatch": 33.55555555555556,
        "flipsPerTurn": 0.5708884688090737,
        "reshuffles": 9.722222222222221,
        "deadTurns": 0.5555555555555556,
        "finalHpDifference": 9.222222222222221
      },
      "deadTurnFrequency": 0.00945179584120983
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
          "averageHpEdge": -12.055555555555555
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 12.055555555555555
        }
      ],
      "averages": {
        "turns": 60.77777777777778,
        "rounds": 6.777777777777778,
        "flipsPerMatch": 26.5,
        "flipsPerTurn": 0.4360146252285192,
        "reshuffles": 10.5,
        "deadTurns": 0.16666666666666666,
        "finalHpDifference": 12.055555555555555
      },
      "deadTurnFrequency": 0.002742230347349177
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
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -2.0555555555555554
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 2.0555555555555554
        }
      ],
      "averages": {
        "turns": 62.333333333333336,
        "rounds": 7.111111111111111,
        "flipsPerMatch": 37.111111111111114,
        "flipsPerTurn": 0.5953654188948306,
        "reshuffles": 11.222222222222221,
        "deadTurns": 0,
        "finalHpDifference": 7.5
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
          "averageHpEdge": -22.444444444444443
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.444444444444443
        }
      ],
      "averages": {
        "turns": 34.77777777777778,
        "rounds": 3.9444444444444446,
        "flipsPerMatch": 19.88888888888889,
        "flipsPerTurn": 0.5718849840255591,
        "reshuffles": 3.5,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 22.444444444444443
      },
      "deadTurnFrequency": 0.001597444089456869
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
          "averageHpEdge": -8.61111111111111
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 8.61111111111111
        }
      ],
      "averages": {
        "turns": 62.833333333333336,
        "rounds": 7.055555555555555,
        "flipsPerMatch": 37.333333333333336,
        "flipsPerTurn": 0.5941644562334217,
        "reshuffles": 7.777777777777778,
        "deadTurns": 0.16666666666666666,
        "finalHpDifference": 9.277777777777779
      },
      "deadTurnFrequency": 0.002652519893899204
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
          "averageHpEdge": -10.166666666666666
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 10.166666666666666
        }
      ],
      "averages": {
        "turns": 66.16666666666667,
        "rounds": 7.444444444444445,
        "flipsPerMatch": 27.333333333333332,
        "flipsPerTurn": 0.41309823677581864,
        "reshuffles": 8.333333333333334,
        "deadTurns": 0,
        "finalHpDifference": 10.166666666666666
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
          "wins": 3,
          "winRate": 0.375
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 6,
          "losses": 12,
          "draws": 0,
          "winRate": 0.3333333333333333,
          "averageHpEdge": -0.9444444444444444
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 12,
          "losses": 6,
          "draws": 0,
          "winRate": 0.6666666666666666,
          "averageHpEdge": 0.9444444444444444
        }
      ],
      "averages": {
        "turns": 66.55555555555556,
        "rounds": 7.555555555555555,
        "flipsPerMatch": 39.111111111111114,
        "flipsPerTurn": 0.5876460767946577,
        "reshuffles": 8.61111111111111,
        "deadTurns": 0,
        "finalHpDifference": 6.277777777777778
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
          "averageHpEdge": -22
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22
        }
      ],
      "averages": {
        "turns": 38.55555555555556,
        "rounds": 4.5,
        "flipsPerMatch": 21.27777777777778,
        "flipsPerTurn": 0.5518731988472623,
        "reshuffles": 3.2222222222222223,
        "deadTurns": 0,
        "finalHpDifference": 22
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
          "averageHpEdge": -9.777777777777779
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 9.777777777777779
        }
      ],
      "averages": {
        "turns": 64.94444444444444,
        "rounds": 7.333333333333333,
        "flipsPerMatch": 35.888888888888886,
        "flipsPerTurn": 0.5526090675791274,
        "reshuffles": 6.666666666666667,
        "deadTurns": 0,
        "finalHpDifference": 11.666666666666666
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
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -9.88888888888889
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 9.88888888888889
        }
      ],
      "averages": {
        "turns": 70.27777777777777,
        "rounds": 7.888888888888889,
        "flipsPerMatch": 25.666666666666668,
        "flipsPerTurn": 0.3652173913043478,
        "reshuffles": 6.666666666666667,
        "deadTurns": 0,
        "finalHpDifference": 11.222222222222221
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
          "averageHpEdge": -2.7777777777777777
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 2.7777777777777777
        }
      ],
      "averages": {
        "turns": 69.38888888888889,
        "rounds": 7.833333333333333,
        "flipsPerMatch": 39.111111111111114,
        "flipsPerTurn": 0.5636509207365893,
        "reshuffles": 6.555555555555555,
        "deadTurns": 0,
        "finalHpDifference": 4.555555555555555
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
        "offered": 3358,
        "played": 594,
        "ignored": 2764,
        "selectionRate": 0.17689100655151876,
        "wins": 288,
        "losses": 306,
        "draws": 0,
        "winRateWhenPlayed": 0.48484848484848486,
        "averageFlips": 0.6616161616161617,
        "failedImpactRate": 0.362012987012987,
        "averageFlipMargin": 1.6055979643765903,
        "averageEffectAmount": 0.2845117845117845,
        "averageDamageDealt": 0.7306397306397306,
        "averageDamageTaken": 0.26262626262626265,
        "averageNetDamage": 0.468013468013468,
        "lethalMoves": 6,
        "roundClosers": 70,
        "byModel": [
          {
            "modelId": "regular",
            "played": 240,
            "winRate": 0.42916666666666664
          },
          {
            "modelId": "expert",
            "played": 137,
            "winRate": 0.6131386861313869
          },
          {
            "modelId": "opportunist",
            "played": 92,
            "winRate": 0.5108695652173914
          },
          {
            "modelId": "champion",
            "played": 80,
            "winRate": 0.675
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
            "played": 219,
            "winRate": 0.4657534246575342
          },
          {
            "deckPresetId": "starter12",
            "played": 191,
            "winRate": 0.5706806282722513
          },
          {
            "deckPresetId": "starter14",
            "played": 184,
            "winRate": 0.41847826086956524
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
        "offered": 3591,
        "played": 579,
        "ignored": 3012,
        "selectionRate": 0.16123642439431912,
        "wins": 294,
        "losses": 285,
        "draws": 0,
        "winRateWhenPlayed": 0.5077720207253886,
        "averageFlips": 0.5716753022452504,
        "failedImpactRate": 0.5230547550432276,
        "averageFlipMargin": 1.392749244712991,
        "averageEffectAmount": 0.38169257340241797,
        "averageDamageDealt": 1.1329879101899827,
        "averageDamageTaken": 0.41968911917098445,
        "averageNetDamage": 0.7132987910189983,
        "lethalMoves": 14,
        "roundClosers": 114,
        "byModel": [
          {
            "modelId": "regular",
            "played": 221,
            "winRate": 0.4751131221719457
          },
          {
            "modelId": "expert",
            "played": 149,
            "winRate": 0.6442953020134228
          },
          {
            "modelId": "opportunist",
            "played": 97,
            "winRate": 0.422680412371134
          },
          {
            "modelId": "champion",
            "played": 78,
            "winRate": 0.6666666666666666
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
            "played": 204,
            "winRate": 0.43137254901960786
          },
          {
            "deckPresetId": "starter12",
            "played": 196,
            "winRate": 0.5663265306122449
          },
          {
            "deckPresetId": "starter14",
            "played": 179,
            "winRate": 0.5307262569832403
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
        "offered": 2227,
        "played": 373,
        "ignored": 1854,
        "selectionRate": 0.1674898967220476,
        "wins": 176,
        "losses": 197,
        "draws": 0,
        "winRateWhenPlayed": 0.4718498659517426,
        "averageFlips": 0.3351206434316354,
        "failedImpactRate": 0.6268656716417911,
        "averageFlipMargin": 1.224,
        "averageEffectAmount": 0.6970509383378016,
        "averageDamageDealt": 0.5549597855227882,
        "averageDamageTaken": 0.3646112600536193,
        "averageNetDamage": 0.19034852546916892,
        "lethalMoves": 5,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 165,
            "winRate": 0.4484848484848485
          },
          {
            "modelId": "expert",
            "played": 95,
            "winRate": 0.6421052631578947
          },
          {
            "modelId": "opportunist",
            "played": 57,
            "winRate": 0.2982456140350877
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.6857142857142857
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
            "played": 196,
            "winRate": 0.4387755102040816
          },
          {
            "deckPresetId": "starter14",
            "played": 177,
            "winRate": 0.5084745762711864
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
        "offered": 2232,
        "played": 828,
        "ignored": 1404,
        "selectionRate": 0.3709677419354839,
        "wins": 456,
        "losses": 372,
        "draws": 0,
        "winRateWhenPlayed": 0.5507246376811594,
        "averageFlips": 0.2391304347826087,
        "failedImpactRate": 0.5469107551487414,
        "averageFlipMargin": 1.6666666666666667,
        "averageEffectAmount": 1.6135265700483092,
        "averageDamageDealt": 0.19202898550724637,
        "averageDamageTaken": 0.1111111111111111,
        "averageNetDamage": 0.08091787439613526,
        "lethalMoves": 7,
        "roundClosers": 52,
        "byModel": [
          {
            "modelId": "regular",
            "played": 386,
            "winRate": 0.5284974093264249
          },
          {
            "modelId": "expert",
            "played": 173,
            "winRate": 0.6647398843930635
          },
          {
            "modelId": "opportunist",
            "played": 128,
            "winRate": 0.4921875
          },
          {
            "modelId": "champion",
            "played": 102,
            "winRate": 0.7254901960784313
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
            "played": 314,
            "winRate": 0.5414012738853503
          },
          {
            "deckPresetId": "starter12",
            "played": 277,
            "winRate": 0.5270758122743683
          },
          {
            "deckPresetId": "starter14",
            "played": 237,
            "winRate": 0.5907172995780591
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
        "offered": 2618,
        "played": 803,
        "ignored": 1815,
        "selectionRate": 0.3067226890756303,
        "wins": 395,
        "losses": 408,
        "draws": 0,
        "winRateWhenPlayed": 0.4919053549190536,
        "averageFlips": 0.39476961394769616,
        "failedImpactRate": 0.5365497076023392,
        "averageFlipMargin": 1.3785488958990537,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.31008717310087175,
        "averageDamageTaken": 0.21170610211706103,
        "averageNetDamage": 0.09838107098381071,
        "lethalMoves": 9,
        "roundClosers": 95,
        "byModel": [
          {
            "modelId": "regular",
            "played": 385,
            "winRate": 0.44675324675324674
          },
          {
            "modelId": "expert",
            "played": 200,
            "winRate": 0.6
          },
          {
            "modelId": "champion",
            "played": 90,
            "winRate": 0.7777777777777778
          },
          {
            "modelId": "opportunist",
            "played": 89,
            "winRate": 0.3707865168539326
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
            "played": 290,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter12",
            "played": 272,
            "winRate": 0.47794117647058826
          },
          {
            "deckPresetId": "starter14",
            "played": 241,
            "winRate": 0.4979253112033195
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
        "offered": 2445,
        "played": 787,
        "ignored": 1658,
        "selectionRate": 0.32188139059304705,
        "wins": 431,
        "losses": 356,
        "draws": 0,
        "winRateWhenPlayed": 0.5476493011435832,
        "averageFlips": 0.48792884371029227,
        "failedImpactRate": 0.37254901960784315,
        "averageFlipMargin": 1.6015625,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.2121982210927573,
        "averageDamageTaken": 0.1156289707750953,
        "averageNetDamage": 0.09656925031766199,
        "lethalMoves": 5,
        "roundClosers": 47,
        "byModel": [
          {
            "modelId": "regular",
            "played": 382,
            "winRate": 0.518324607329843
          },
          {
            "modelId": "expert",
            "played": 164,
            "winRate": 0.6402439024390244
          },
          {
            "modelId": "opportunist",
            "played": 132,
            "winRate": 0.5681818181818182
          },
          {
            "modelId": "champion",
            "played": 78,
            "winRate": 0.6794871794871795
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
            "played": 289,
            "winRate": 0.5847750865051903
          },
          {
            "deckPresetId": "starter12",
            "played": 261,
            "winRate": 0.5287356321839081
          },
          {
            "deckPresetId": "starter14",
            "played": 237,
            "winRate": 0.5232067510548524
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
        "offered": 3022,
        "played": 772,
        "ignored": 2250,
        "selectionRate": 0.2554599602911979,
        "wins": 403,
        "losses": 369,
        "draws": 0,
        "winRateWhenPlayed": 0.522020725388601,
        "averageFlips": 0.42487046632124353,
        "failedImpactRate": 0.563249001331558,
        "averageFlipMargin": 1.4329268292682926,
        "averageEffectAmount": 1.2772020725388602,
        "averageDamageDealt": 0.6101036269430051,
        "averageDamageTaken": 0.2914507772020725,
        "averageNetDamage": 0.3186528497409326,
        "lethalMoves": 12,
        "roundClosers": 154,
        "byModel": [
          {
            "modelId": "regular",
            "played": 368,
            "winRate": 0.4701086956521739
          },
          {
            "modelId": "expert",
            "played": 169,
            "winRate": 0.621301775147929
          },
          {
            "modelId": "opportunist",
            "played": 125,
            "winRate": 0.512
          },
          {
            "modelId": "champion",
            "played": 79,
            "winRate": 0.7721518987341772
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
            "played": 285,
            "winRate": 0.5298245614035088
          },
          {
            "deckPresetId": "starter12",
            "played": 258,
            "winRate": 0.5038759689922481
          },
          {
            "deckPresetId": "starter14",
            "played": 229,
            "winRate": 0.5327510917030568
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
        "offered": 2570,
        "played": 759,
        "ignored": 1811,
        "selectionRate": 0.2953307392996109,
        "wins": 390,
        "losses": 369,
        "draws": 0,
        "winRateWhenPlayed": 0.5138339920948617,
        "averageFlips": 0.3069828722002635,
        "failedImpactRate": 0.533066132264529,
        "averageFlipMargin": 1.7210300429184548,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.17918313570487485,
        "averageDamageTaken": 0.11725955204216074,
        "averageNetDamage": 0.06192358366271411,
        "lethalMoves": 9,
        "roundClosers": 45,
        "byModel": [
          {
            "modelId": "regular",
            "played": 374,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "expert",
            "played": 140,
            "winRate": 0.6214285714285714
          },
          {
            "modelId": "opportunist",
            "played": 134,
            "winRate": 0.43283582089552236
          },
          {
            "modelId": "champion",
            "played": 69,
            "winRate": 0.6811594202898551
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
            "played": 275,
            "winRate": 0.5345454545454545
          },
          {
            "deckPresetId": "starter12",
            "played": 258,
            "winRate": 0.4883720930232558
          },
          {
            "deckPresetId": "starter14",
            "played": 226,
            "winRate": 0.5176991150442478
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
        "offered": 2698,
        "played": 748,
        "ignored": 1950,
        "selectionRate": 0.27724240177909565,
        "wins": 376,
        "losses": 372,
        "draws": 0,
        "winRateWhenPlayed": 0.5026737967914439,
        "averageFlips": 0.3195187165775401,
        "failedImpactRate": 0.5716845878136201,
        "averageFlipMargin": 1.3598326359832635,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.3114973262032086,
        "averageDamageTaken": 0.25668449197860965,
        "averageNetDamage": 0.05481283422459893,
        "lethalMoves": 9,
        "roundClosers": 85,
        "byModel": [
          {
            "modelId": "regular",
            "played": 327,
            "winRate": 0.4954128440366973
          },
          {
            "modelId": "expert",
            "played": 205,
            "winRate": 0.5853658536585366
          },
          {
            "modelId": "opportunist",
            "played": 98,
            "winRate": 0.30612244897959184
          },
          {
            "modelId": "champion",
            "played": 81,
            "winRate": 0.7901234567901234
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
            "played": 271,
            "winRate": 0.5239852398523985
          },
          {
            "deckPresetId": "starter12",
            "played": 255,
            "winRate": 0.5215686274509804
          },
          {
            "deckPresetId": "starter14",
            "played": 222,
            "winRate": 0.45495495495495497
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
        "offered": 2891,
        "played": 693,
        "ignored": 2198,
        "selectionRate": 0.2397094430992736,
        "wins": 350,
        "losses": 343,
        "draws": 0,
        "winRateWhenPlayed": 0.5050505050505051,
        "averageFlips": 0.6507936507936508,
        "failedImpactRate": 0.39300134589502017,
        "averageFlipMargin": 2.8558758314855877,
        "averageEffectAmount": 0.7806637806637806,
        "averageDamageDealt": 0.2698412698412698,
        "averageDamageTaken": 0.23088023088023088,
        "averageNetDamage": 0.038961038961038946,
        "lethalMoves": 7,
        "roundClosers": 79,
        "byModel": [
          {
            "modelId": "regular",
            "played": 320,
            "winRate": 0.521875
          },
          {
            "modelId": "expert",
            "played": 151,
            "winRate": 0.6357615894039735
          },
          {
            "modelId": "opportunist",
            "played": 123,
            "winRate": 0.3902439024390244
          },
          {
            "modelId": "champion",
            "played": 60,
            "winRate": 0.65
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
            "played": 245,
            "winRate": 0.5387755102040817
          },
          {
            "deckPresetId": "starter12",
            "played": 237,
            "winRate": 0.48945147679324896
          },
          {
            "deckPresetId": "starter14",
            "played": 211,
            "winRate": 0.4834123222748815
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
        "offered": 3195,
        "played": 690,
        "ignored": 2505,
        "selectionRate": 0.215962441314554,
        "wins": 392,
        "losses": 298,
        "draws": 0,
        "winRateWhenPlayed": 0.5681159420289855,
        "averageFlips": 0.4652173913043478,
        "failedImpactRate": 0.4984375,
        "averageFlipMargin": 1.5202492211838006,
        "averageEffectAmount": 1.9333333333333333,
        "averageDamageDealt": 0.5217391304347826,
        "averageDamageTaken": 0.17246376811594202,
        "averageNetDamage": 0.3492753623188406,
        "lethalMoves": 8,
        "roundClosers": 124,
        "byModel": [
          {
            "modelId": "regular",
            "played": 304,
            "winRate": 0.4934210526315789
          },
          {
            "modelId": "expert",
            "played": 146,
            "winRate": 0.726027397260274
          },
          {
            "modelId": "opportunist",
            "played": 119,
            "winRate": 0.5378151260504201
          },
          {
            "modelId": "champion",
            "played": 87,
            "winRate": 0.8275862068965517
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
            "played": 269,
            "winRate": 0.5464684014869888
          },
          {
            "deckPresetId": "starter12",
            "played": 231,
            "winRate": 0.6363636363636364
          },
          {
            "deckPresetId": "starter14",
            "played": 190,
            "winRate": 0.5157894736842106
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
        "offered": 2708,
        "played": 688,
        "ignored": 2020,
        "selectionRate": 0.25406203840472674,
        "wins": 345,
        "losses": 343,
        "draws": 0,
        "winRateWhenPlayed": 0.501453488372093,
        "averageFlips": 0.3168604651162791,
        "failedImpactRate": 0.46568627450980393,
        "averageFlipMargin": 1.7844036697247707,
        "averageEffectAmount": 0.6715116279069767,
        "averageDamageDealt": 0.8938953488372093,
        "averageDamageTaken": 0.19186046511627908,
        "averageNetDamage": 0.7020348837209303,
        "lethalMoves": 16,
        "roundClosers": 47,
        "byModel": [
          {
            "modelId": "regular",
            "played": 283,
            "winRate": 0.48056537102473496
          },
          {
            "modelId": "expert",
            "played": 149,
            "winRate": 0.6510067114093959
          },
          {
            "modelId": "opportunist",
            "played": 123,
            "winRate": 0.37398373983739835
          },
          {
            "modelId": "champion",
            "played": 89,
            "winRate": 0.7415730337078652
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
            "played": 254,
            "winRate": 0.5039370078740157
          },
          {
            "deckPresetId": "starter12",
            "played": 225,
            "winRate": 0.48
          },
          {
            "deckPresetId": "starter14",
            "played": 209,
            "winRate": 0.5215311004784688
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
        "offered": 2943,
        "played": 666,
        "ignored": 2277,
        "selectionRate": 0.22629969418960244,
        "wins": 321,
        "losses": 345,
        "draws": 0,
        "winRateWhenPlayed": 0.481981981981982,
        "averageFlips": 0.506006006006006,
        "failedImpactRate": 0.37822878228782286,
        "averageFlipMargin": 1.5578635014836795,
        "averageEffectAmount": 0.506006006006006,
        "averageDamageDealt": 0.25075075075075076,
        "averageDamageTaken": 0.21621621621621623,
        "averageNetDamage": 0.03453453453453453,
        "lethalMoves": 5,
        "roundClosers": 57,
        "byModel": [
          {
            "modelId": "regular",
            "played": 316,
            "winRate": 0.4778481012658228
          },
          {
            "modelId": "expert",
            "played": 127,
            "winRate": 0.5905511811023622
          },
          {
            "modelId": "opportunist",
            "played": 111,
            "winRate": 0.4594594594594595
          },
          {
            "modelId": "champion",
            "played": 71,
            "winRate": 0.6197183098591549
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
            "winRate": 0.5476190476190477
          },
          {
            "deckPresetId": "starter12",
            "played": 219,
            "winRate": 0.4337899543378995
          },
          {
            "deckPresetId": "starter14",
            "played": 195,
            "winRate": 0.4512820512820513
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
        "offered": 3134,
        "played": 662,
        "ignored": 2472,
        "selectionRate": 0.21123165283982132,
        "wins": 302,
        "losses": 360,
        "draws": 0,
        "winRateWhenPlayed": 0.4561933534743202,
        "averageFlips": 0.3580060422960725,
        "failedImpactRate": 0.5760286225402504,
        "averageFlipMargin": 1.7932489451476794,
        "averageEffectAmount": 0.5302114803625377,
        "averageDamageDealt": 0.3564954682779456,
        "averageDamageTaken": 0.2930513595166163,
        "averageNetDamage": 0.06344410876132928,
        "lethalMoves": 3,
        "roundClosers": 93,
        "byModel": [
          {
            "modelId": "regular",
            "played": 312,
            "winRate": 0.4358974358974359
          },
          {
            "modelId": "expert",
            "played": 172,
            "winRate": 0.5697674418604651
          },
          {
            "modelId": "opportunist",
            "played": 87,
            "winRate": 0.3448275862068966
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 0.6785714285714286
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
            "winRate": 0.39285714285714285
          },
          {
            "deckPresetId": "starter14",
            "played": 208,
            "winRate": 0.4951923076923077
          },
          {
            "deckPresetId": "starter12",
            "played": 202,
            "winRate": 0.49504950495049505
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
        "offered": 3022,
        "played": 655,
        "ignored": 2367,
        "selectionRate": 0.21674387822634017,
        "wins": 317,
        "losses": 338,
        "draws": 0,
        "winRateWhenPlayed": 0.48396946564885496,
        "averageFlips": 0.4549618320610687,
        "failedImpactRate": 0.3618843683083512,
        "averageFlipMargin": 1.4060402684563758,
        "averageEffectAmount": 0.6778625954198473,
        "averageDamageDealt": 0.8351145038167939,
        "averageDamageTaken": 0.19541984732824427,
        "averageNetDamage": 0.6396946564885496,
        "lethalMoves": 23,
        "roundClosers": 42,
        "byModel": [
          {
            "modelId": "regular",
            "played": 250,
            "winRate": 0.452
          },
          {
            "modelId": "expert",
            "played": 131,
            "winRate": 0.6106870229007634
          },
          {
            "modelId": "opportunist",
            "played": 129,
            "winRate": 0.4108527131782946
          },
          {
            "modelId": "champion",
            "played": 90,
            "winRate": 0.7888888888888889
          },
          {
            "modelId": "beginner",
            "played": 55,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 242,
            "winRate": 0.5661157024793388
          },
          {
            "deckPresetId": "starter12",
            "played": 223,
            "winRate": 0.35874439461883406
          },
          {
            "deckPresetId": "starter14",
            "played": 190,
            "winRate": 0.5263157894736842
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
        "offered": 3171,
        "played": 645,
        "ignored": 2526,
        "selectionRate": 0.20340586565752128,
        "wins": 293,
        "losses": 352,
        "draws": 0,
        "winRateWhenPlayed": 0.4542635658914729,
        "averageFlips": 0.4201550387596899,
        "failedImpactRate": 0.4623015873015873,
        "averageFlipMargin": 1.5830258302583027,
        "averageEffectAmount": 0.5503875968992248,
        "averageDamageDealt": 0.30697674418604654,
        "averageDamageTaken": 0.21395348837209302,
        "averageNetDamage": 0.09302325581395351,
        "lethalMoves": 7,
        "roundClosers": 73,
        "byModel": [
          {
            "modelId": "regular",
            "played": 311,
            "winRate": 0.4437299035369775
          },
          {
            "modelId": "opportunist",
            "played": 118,
            "winRate": 0.4067796610169492
          },
          {
            "modelId": "expert",
            "played": 116,
            "winRate": 0.5603448275862069
          },
          {
            "modelId": "champion",
            "played": 60,
            "winRate": 0.7
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
            "played": 250,
            "winRate": 0.444
          },
          {
            "deckPresetId": "starter14",
            "played": 198,
            "winRate": 0.43434343434343436
          },
          {
            "deckPresetId": "starter12",
            "played": 197,
            "winRate": 0.4873096446700508
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
        "offered": 3261,
        "played": 643,
        "ignored": 2618,
        "selectionRate": 0.19717877951548604,
        "wins": 327,
        "losses": 316,
        "draws": 0,
        "winRateWhenPlayed": 0.5085536547433903,
        "averageFlips": 0.47900466562986005,
        "failedImpactRate": 0.4634146341463415,
        "averageFlipMargin": 1.6590909090909092,
        "averageEffectAmount": 0.6080870917573873,
        "averageDamageDealt": 0.3265940902021773,
        "averageDamageTaken": 0.17573872472783825,
        "averageNetDamage": 0.15085536547433903,
        "lethalMoves": 6,
        "roundClosers": 64,
        "byModel": [
          {
            "modelId": "regular",
            "played": 323,
            "winRate": 0.541795665634675
          },
          {
            "modelId": "expert",
            "played": 122,
            "winRate": 0.5573770491803278
          },
          {
            "modelId": "opportunist",
            "played": 85,
            "winRate": 0.47058823529411764
          },
          {
            "modelId": "champion",
            "played": 67,
            "winRate": 0.6567164179104478
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
            "played": 249,
            "winRate": 0.5180722891566265
          },
          {
            "deckPresetId": "starter12",
            "played": 204,
            "winRate": 0.5294117647058824
          },
          {
            "deckPresetId": "starter14",
            "played": 190,
            "winRate": 0.47368421052631576
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
        "offered": 3242,
        "played": 637,
        "ignored": 2605,
        "selectionRate": 0.19648365206662555,
        "wins": 316,
        "losses": 321,
        "draws": 0,
        "winRateWhenPlayed": 0.49607535321821034,
        "averageFlips": 0.750392464678179,
        "failedImpactRate": 0.34877384196185285,
        "averageFlipMargin": 1.6548117154811715,
        "averageEffectAmount": 1.1444270015698588,
        "averageDamageDealt": 0.3642072213500785,
        "averageDamageTaken": 0.20251177394034536,
        "averageNetDamage": 0.16169544740973313,
        "lethalMoves": 4,
        "roundClosers": 87,
        "byModel": [
          {
            "modelId": "regular",
            "played": 273,
            "winRate": 0.48717948717948717
          },
          {
            "modelId": "expert",
            "played": 149,
            "winRate": 0.5906040268456376
          },
          {
            "modelId": "opportunist",
            "played": 101,
            "winRate": 0.46534653465346537
          },
          {
            "modelId": "champion",
            "played": 68,
            "winRate": 0.7058823529411765
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
            "played": 232,
            "winRate": 0.49137931034482757
          },
          {
            "deckPresetId": "starter12",
            "played": 213,
            "winRate": 0.4835680751173709
          },
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
        "offered": 3317,
        "played": 633,
        "ignored": 2684,
        "selectionRate": 0.19083509195055773,
        "wins": 304,
        "losses": 329,
        "draws": 0,
        "winRateWhenPlayed": 0.4802527646129542,
        "averageFlips": 0.8088467614533965,
        "failedImpactRate": 0.2778561354019746,
        "averageFlipMargin": 1.55078125,
        "averageEffectAmount": 0.8088467614533965,
        "averageDamageDealt": 0.3080568720379147,
        "averageDamageTaken": 0.22432859399684044,
        "averageNetDamage": 0.08372827804107427,
        "lethalMoves": 7,
        "roundClosers": 66,
        "byModel": [
          {
            "modelId": "regular",
            "played": 287,
            "winRate": 0.47038327526132406
          },
          {
            "modelId": "opportunist",
            "played": 132,
            "winRate": 0.4621212121212121
          },
          {
            "modelId": "expert",
            "played": 113,
            "winRate": 0.5575221238938053
          },
          {
            "modelId": "champion",
            "played": 65,
            "winRate": 0.6923076923076923
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
            "played": 223,
            "winRate": 0.47533632286995514
          },
          {
            "deckPresetId": "starter12",
            "played": 223,
            "winRate": 0.452914798206278
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
        "offered": 3293,
        "played": 631,
        "ignored": 2662,
        "selectionRate": 0.19161858487701183,
        "wins": 303,
        "losses": 328,
        "draws": 0,
        "winRateWhenPlayed": 0.48019017432646594,
        "averageFlips": 0.8003169572107766,
        "failedImpactRate": 0.2507418397626113,
        "averageFlipMargin": 1.3445544554455446,
        "averageEffectAmount": 1.1315372424722663,
        "averageDamageDealt": 0.2900158478605388,
        "averageDamageTaken": 0.1600633914421553,
        "averageNetDamage": 0.1299524564183835,
        "lethalMoves": 4,
        "roundClosers": 61,
        "byModel": [
          {
            "modelId": "regular",
            "played": 272,
            "winRate": 0.46691176470588236
          },
          {
            "modelId": "expert",
            "played": 131,
            "winRate": 0.5877862595419847
          },
          {
            "modelId": "opportunist",
            "played": 131,
            "winRate": 0.4961832061068702
          },
          {
            "modelId": "champion",
            "played": 49,
            "winRate": 0.6938775510204082
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
            "played": 242,
            "winRate": 0.4793388429752066
          },
          {
            "deckPresetId": "starter12",
            "played": 201,
            "winRate": 0.5124378109452736
          },
          {
            "deckPresetId": "starter14",
            "played": 188,
            "winRate": 0.44680851063829785
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
        "played": 620,
        "ignored": 2644,
        "selectionRate": 0.18995098039215685,
        "wins": 314,
        "losses": 306,
        "draws": 0,
        "winRateWhenPlayed": 0.5064516129032258,
        "averageFlips": 0.6387096774193548,
        "failedImpactRate": 0.391705069124424,
        "averageFlipMargin": 1.702020202020202,
        "averageEffectAmount": 0.44193548387096776,
        "averageDamageDealt": 0.8935483870967742,
        "averageDamageTaken": 0.27741935483870966,
        "averageNetDamage": 0.6161290322580646,
        "lethalMoves": 5,
        "roundClosers": 73,
        "byModel": [
          {
            "modelId": "regular",
            "played": 266,
            "winRate": 0.46616541353383456
          },
          {
            "modelId": "expert",
            "played": 120,
            "winRate": 0.6166666666666667
          },
          {
            "modelId": "opportunist",
            "played": 114,
            "winRate": 0.49122807017543857
          },
          {
            "modelId": "champion",
            "played": 81,
            "winRate": 0.7407407407407407
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
            "played": 235,
            "winRate": 0.44680851063829785
          },
          {
            "deckPresetId": "starter12",
            "played": 206,
            "winRate": 0.5728155339805825
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
        "offered": 1580,
        "played": 484,
        "ignored": 1096,
        "selectionRate": 0.30632911392405066,
        "wins": 257,
        "losses": 227,
        "draws": 0,
        "winRateWhenPlayed": 0.53099173553719,
        "averageFlips": 0.1962809917355372,
        "failedImpactRate": 0.6346153846153846,
        "averageFlipMargin": 1.7263157894736842,
        "averageEffectAmount": 1.6632231404958677,
        "averageDamageDealt": 0.22107438016528927,
        "averageDamageTaken": 0.10537190082644628,
        "averageNetDamage": 0.11570247933884299,
        "lethalMoves": 6,
        "roundClosers": 36,
        "byModel": [
          {
            "modelId": "regular",
            "played": 220,
            "winRate": 0.5545454545454546
          },
          {
            "modelId": "expert",
            "played": 96,
            "winRate": 0.6145833333333334
          },
          {
            "modelId": "opportunist",
            "played": 80,
            "winRate": 0.3875
          },
          {
            "modelId": "champion",
            "played": 65,
            "winRate": 0.6923076923076923
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
            "played": 260,
            "winRate": 0.5115384615384615
          },
          {
            "deckPresetId": "starter14",
            "played": 224,
            "winRate": 0.5535714285714286
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
        "offered": 1759,
        "played": 453,
        "ignored": 1306,
        "selectionRate": 0.25753268902785675,
        "wins": 237,
        "losses": 216,
        "draws": 0,
        "winRateWhenPlayed": 0.5231788079470199,
        "averageFlips": 0.4216335540838852,
        "failedImpactRate": 0.3612040133779264,
        "averageFlipMargin": 1.3455497382198953,
        "averageEffectAmount": 0.8498896247240618,
        "averageDamageDealt": 0.22737306843267108,
        "averageDamageTaken": 0.152317880794702,
        "averageNetDamage": 0.07505518763796909,
        "lethalMoves": 3,
        "roundClosers": 34,
        "byModel": [
          {
            "modelId": "regular",
            "played": 194,
            "winRate": 0.5463917525773195
          },
          {
            "modelId": "expert",
            "played": 119,
            "winRate": 0.6134453781512605
          },
          {
            "modelId": "opportunist",
            "played": 73,
            "winRate": 0.3972602739726027
          },
          {
            "modelId": "champion",
            "played": 44,
            "winRate": 0.6590909090909091
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
            "played": 231,
            "winRate": 0.5411255411255411
          },
          {
            "deckPresetId": "starter14",
            "played": 222,
            "winRate": 0.5045045045045045
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
        "offered": 2053,
        "played": 401,
        "ignored": 1652,
        "selectionRate": 0.19532391622016562,
        "wins": 198,
        "losses": 203,
        "draws": 0,
        "winRateWhenPlayed": 0.4937655860349127,
        "averageFlips": 0.7880299251870324,
        "failedImpactRate": 0.28018223234624146,
        "averageFlipMargin": 1.4936708860759493,
        "averageEffectAmount": 0.2543640897755611,
        "averageDamageDealt": 0.8154613466334164,
        "averageDamageTaken": 0.24688279301745636,
        "averageNetDamage": 0.56857855361596,
        "lethalMoves": 6,
        "roundClosers": 54,
        "byModel": [
          {
            "modelId": "regular",
            "played": 168,
            "winRate": 0.4642857142857143
          },
          {
            "modelId": "expert",
            "played": 100,
            "winRate": 0.57
          },
          {
            "modelId": "opportunist",
            "played": 59,
            "winRate": 0.4576271186440678
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.7659574468085106
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
            "played": 224,
            "winRate": 0.5401785714285714
          },
          {
            "deckPresetId": "starter14",
            "played": 177,
            "winRate": 0.4350282485875706
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
        "offered": 734,
        "played": 232,
        "ignored": 502,
        "selectionRate": 0.31607629427792916,
        "wins": 123,
        "losses": 109,
        "draws": 0,
        "winRateWhenPlayed": 0.5301724137931034,
        "averageFlips": 0.39655172413793105,
        "failedImpactRate": 0.5053763440860215,
        "averageFlipMargin": 1.4130434782608696,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.49137931034482757,
        "averageDamageTaken": 0.28448275862068967,
        "averageNetDamage": 0.2068965517241379,
        "lethalMoves": 1,
        "roundClosers": 37,
        "byModel": [
          {
            "modelId": "regular",
            "played": 99,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "expert",
            "played": 57,
            "winRate": 0.5964912280701754
          },
          {
            "modelId": "champion",
            "played": 32,
            "winRate": 0.71875
          },
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.375
          },
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 232,
            "winRate": 0.5301724137931034
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
        "offered": 824,
        "played": 210,
        "ignored": 614,
        "selectionRate": 0.25485436893203883,
        "wins": 100,
        "losses": 110,
        "draws": 0,
        "winRateWhenPlayed": 0.47619047619047616,
        "averageFlips": 0.19523809523809524,
        "failedImpactRate": 0.6132075471698113,
        "averageFlipMargin": 1.6585365853658536,
        "averageEffectAmount": 0.919047619047619,
        "averageDamageDealt": 0.10476190476190476,
        "averageDamageTaken": 0.0761904761904762,
        "averageNetDamage": 0.028571428571428567,
        "lethalMoves": 2,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 100,
            "winRate": 0.51
          },
          {
            "modelId": "expert",
            "played": 47,
            "winRate": 0.5319148936170213
          },
          {
            "modelId": "opportunist",
            "played": 33,
            "winRate": 0.3939393939393939
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0.7333333333333333
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
            "played": 210,
            "winRate": 0.47619047619047616
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
        "offered": 782,
        "played": 201,
        "ignored": 581,
        "selectionRate": 0.2570332480818414,
        "wins": 116,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.5771144278606966,
        "averageFlips": 0.39800995024875624,
        "failedImpactRate": 0.5121951219512195,
        "averageFlipMargin": 2.225,
        "averageEffectAmount": 0.9104477611940298,
        "averageDamageDealt": 0.21393034825870647,
        "averageDamageTaken": 0.14427860696517414,
        "averageNetDamage": 0.06965174129353233,
        "lethalMoves": 1,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 93,
            "winRate": 0.6451612903225806
          },
          {
            "modelId": "expert",
            "played": 47,
            "winRate": 0.5957446808510638
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.6785714285714286
          },
          {
            "modelId": "opportunist",
            "played": 21,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 201,
            "winRate": 0.5771144278606966
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
        "offered": 970,
        "played": 182,
        "ignored": 788,
        "selectionRate": 0.18762886597938144,
        "wins": 96,
        "losses": 86,
        "draws": 0,
        "winRateWhenPlayed": 0.5274725274725275,
        "averageFlips": 0.7252747252747253,
        "failedImpactRate": 0.30158730158730157,
        "averageFlipMargin": 1.3409090909090908,
        "averageEffectAmount": 1.445054945054945,
        "averageDamageDealt": 0.15384615384615385,
        "averageDamageTaken": 0.23626373626373626,
        "averageNetDamage": -0.0824175824175824,
        "lethalMoves": 1,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 74,
            "winRate": 0.6081081081081081
          },
          {
            "modelId": "expert",
            "played": 42,
            "winRate": 0.5952380952380952
          },
          {
            "modelId": "opportunist",
            "played": 28,
            "winRate": 0.35714285714285715
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0.8421052631578947
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 182,
            "winRate": 0.5274725274725275
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
        "offered": 20951,
        "played": 4849,
        "ignored": 16102,
        "selectionRate": 0.231444799770894,
        "wins": 2392,
        "losses": 2457,
        "draws": 0,
        "winRateWhenPlayed": 0.4932975871313673,
        "averageFlips": 0.4772117962466488,
        "averageDamageDealt": 0.30253660548566713,
        "averageNetDamage": 0.10930088678077954,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 828,
            "winRateWhenPlayed": 0.5507246376811594
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 803,
            "winRateWhenPlayed": 0.4919053549190536
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 662,
            "winRateWhenPlayed": 0.4561933534743202
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 645,
            "winRateWhenPlayed": 0.4542635658914729
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 643,
            "winRateWhenPlayed": 0.5085536547433903
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
        "offered": 19300,
        "played": 4790,
        "ignored": 14510,
        "selectionRate": 0.24818652849740933,
        "wins": 2494,
        "losses": 2296,
        "draws": 0,
        "winRateWhenPlayed": 0.5206680584551148,
        "averageFlips": 0.4870563674321503,
        "averageDamageDealt": 0.3943632567849687,
        "averageNetDamage": 0.19457202505219207,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 787,
            "winRateWhenPlayed": 0.5476493011435832
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 772,
            "winRateWhenPlayed": 0.522020725388601
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 759,
            "winRateWhenPlayed": 0.5138339920948617
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 748,
            "winRateWhenPlayed": 0.5026737967914439
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 690,
            "winRateWhenPlayed": 0.5681159420289855
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
        "offered": 21777,
        "played": 4495,
        "ignored": 17282,
        "selectionRate": 0.20641043302566928,
        "wins": 2229,
        "losses": 2266,
        "draws": 0,
        "winRateWhenPlayed": 0.49588431590656284,
        "averageFlips": 0.539265850945495,
        "averageDamageDealt": 0.7030033370411568,
        "averageNetDamage": 0.4505005561735261,
        "topCards": [
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 693,
            "winRateWhenPlayed": 0.5050505050505051
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 688,
            "winRateWhenPlayed": 0.501453488372093
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 666,
            "winRateWhenPlayed": 0.481981981981982
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 655,
            "winRateWhenPlayed": 0.48396946564885496
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 620,
            "winRateWhenPlayed": 0.5064516129032258
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
        "offered": 8876,
        "played": 2135,
        "ignored": 6741,
        "selectionRate": 0.24053627760252366,
        "wins": 1105,
        "losses": 1030,
        "draws": 0,
        "winRateWhenPlayed": 0.5175644028103045,
        "averageFlips": 0.3540983606557377,
        "averageDamageDealt": 0.29227166276346606,
        "averageNetDamage": 0.10023419203747075,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 484,
            "winRateWhenPlayed": 0.53099173553719
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 453,
            "winRateWhenPlayed": 0.5231788079470199
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 373,
            "winRateWhenPlayed": 0.4718498659517426
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 232,
            "winRateWhenPlayed": 0.5301724137931034
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 210,
            "winRateWhenPlayed": 0.47619047619047616
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
        "offered": 42246,
        "played": 10002,
        "ignored": 32244,
        "selectionRate": 0.23675614259338162,
        "wins": 5114,
        "losses": 4888,
        "draws": 0,
        "winRateWhenPlayed": 0.5112977404519096,
        "averageFlips": 0.47250549890022,
        "averageDamageDealt": 0.45560887822435514,
        "averageNetDamage": 0.23315336932613479,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 560,
            "winRateWhenPlayed": 0.5357142857142857
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 540,
            "winRateWhenPlayed": 0.49444444444444446
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 522,
            "winRateWhenPlayed": 0.5593869731800766
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 507,
            "winRateWhenPlayed": 0.5266272189349113
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 493,
            "winRateWhenPlayed": 0.5557809330628803
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
        "offered": 10024,
        "played": 2274,
        "ignored": 7750,
        "selectionRate": 0.2268555466879489,
        "wins": 1146,
        "losses": 1128,
        "draws": 0,
        "winRateWhenPlayed": 0.503957783641161,
        "averageFlips": 0.5259454705364995,
        "averageDamageDealt": 0.4542656112576957,
        "averageNetDamage": 0.2669305189094108,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 268,
            "winRateWhenPlayed": 0.582089552238806
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 266,
            "winRateWhenPlayed": 0.5150375939849624
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 265,
            "winRateWhenPlayed": 0.5245283018867924
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 265,
            "winRateWhenPlayed": 0.5169811320754717
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 261,
            "winRateWhenPlayed": 0.4827586206896552
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
        "offered": 7483,
        "played": 1559,
        "ignored": 5924,
        "selectionRate": 0.20833890151008955,
        "wins": 750,
        "losses": 809,
        "draws": 0,
        "winRateWhenPlayed": 0.4810776138550353,
        "averageFlips": 0.49839640795381657,
        "averageDamageDealt": 0.2354073123797306,
        "averageNetDamage": 0.06478511866581141,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 266,
            "winRateWhenPlayed": 0.462406015037594
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 265,
            "winRateWhenPlayed": 0.4716981132075472
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 260,
            "winRateWhenPlayed": 0.5153846153846153
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 259,
            "winRateWhenPlayed": 0.4517374517374517
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 255,
            "winRateWhenPlayed": 0.4666666666666667
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
        "offered": 4652,
        "played": 942,
        "ignored": 3710,
        "selectionRate": 0.20249355116079107,
        "wins": 441,
        "losses": 501,
        "draws": 0,
        "winRateWhenPlayed": 0.4681528662420382,
        "averageFlips": 0.3895966029723992,
        "averageDamageDealt": 0.5159235668789809,
        "averageNetDamage": 0.2611464968152866,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 260,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 255,
            "winRateWhenPlayed": 0.4
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 251,
            "winRateWhenPlayed": 0.450199203187251
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
        "offered": 4167,
        "played": 878,
        "ignored": 3289,
        "selectionRate": 0.21070314374850013,
        "wins": 460,
        "losses": 418,
        "draws": 0,
        "winRateWhenPlayed": 0.5239179954441914,
        "averageFlips": 0.5831435079726651,
        "averageDamageDealt": 0.4715261958997722,
        "averageNetDamage": 0.31207289293849655,
        "topCards": [
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 267,
            "winRateWhenPlayed": 0.5056179775280899
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 263,
            "winRateWhenPlayed": 0.5285171102661597
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 259,
            "winRateWhenPlayed": 0.5405405405405406
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 89,
            "winRateWhenPlayed": 0.5168539325842697
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
        "offered": 1269,
        "played": 349,
        "ignored": 920,
        "selectionRate": 0.27501970055161545,
        "wins": 173,
        "losses": 176,
        "draws": 0,
        "winRateWhenPlayed": 0.49570200573065903,
        "averageFlips": 0.38968481375358166,
        "averageDamageDealt": 0.35816618911174786,
        "averageNetDamage": 0.1833810888252149,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 263,
            "winRateWhenPlayed": 0.4866920152091255
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 86,
            "winRateWhenPlayed": 0.5232558139534884
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
        "offered": 1063,
        "played": 265,
        "ignored": 798,
        "selectionRate": 0.24929444967074318,
        "wins": 136,
        "losses": 129,
        "draws": 0,
        "winRateWhenPlayed": 0.5132075471698113,
        "averageFlips": 0.42641509433962266,
        "averageDamageDealt": 0.5962264150943396,
        "averageNetDamage": 0.29056603773584905,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 265,
            "winRateWhenPlayed": 0.5132075471698113
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
        "offered": 70904,
        "played": 16269,
        "ignored": 54635,
        "selectionRate": 0.2294510887961187,
        "wins": 8220,
        "losses": 8049,
        "draws": 0,
        "winRateWhenPlayed": 0.5052553936935276,
        "averageFlips": 0.48109902268117277,
        "averageDamageDealt": 0.438871473354232,
        "averageNetDamage": 0.22748786034790092,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 828,
            "winRateWhenPlayed": 0.5507246376811594
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 803,
            "winRateWhenPlayed": 0.4919053549190536
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 787,
            "winRateWhenPlayed": 0.5476493011435832
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 772,
            "winRateWhenPlayed": 0.522020725388601
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 759,
            "winRateWhenPlayed": 0.5138339920948617
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
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 1229,
        "wins": 630,
        "losses": 599,
        "draws": 0,
        "winRate": 0.5126118795768918,
        "averageFlips": 0.6061838893409276,
        "averageDamageDealt": 0.44914564686737185,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 1219,
        "wins": 680,
        "losses": 539,
        "draws": 0,
        "winRate": 0.5578342904019689,
        "averageFlips": 0.5512715340442986,
        "averageDamageDealt": 0.55701394585726,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 1169,
        "wins": 548,
        "losses": 621,
        "draws": 0,
        "winRate": 0.46877673224978617,
        "averageFlips": 0.49615055603079555,
        "averageDamageDealt": 0.32763045337895635,
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
        "wins": 573,
        "losses": 545,
        "draws": 0,
        "winRate": 0.5125223613595706,
        "averageFlips": 0.5196779964221825,
        "averageDamageDealt": 0.501788908765653,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 1096,
        "wins": 573,
        "losses": 523,
        "draws": 0,
        "winRate": 0.5228102189781022,
        "averageFlips": 0.5009124087591241,
        "averageDamageDealt": 0.4023722627737226,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 1061,
        "wins": 505,
        "losses": 556,
        "draws": 0,
        "winRate": 0.4759660697455231,
        "averageFlips": 0.5466540999057493,
        "averageDamageDealt": 0.35721017907634306,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 977,
        "wins": 457,
        "losses": 520,
        "draws": 0,
        "winRate": 0.4677584442169908,
        "averageFlips": 0.5987717502558854,
        "averageDamageDealt": 0.6499488229273286,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 891,
        "wins": 441,
        "losses": 450,
        "draws": 0,
        "winRate": 0.494949494949495,
        "averageFlips": 0.6464646464646465,
        "averageDamageDealt": 0.8002244668911336,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 880,
        "wins": 530,
        "losses": 350,
        "draws": 0,
        "winRate": 0.6022727272727273,
        "averageFlips": 0.675,
        "averageDamageDealt": 0.8056818181818182,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 880,
        "wins": 451,
        "losses": 429,
        "draws": 0,
        "winRate": 0.5125,
        "averageFlips": 0.6295454545454545,
        "averageDamageDealt": 0.7761363636363636,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 824,
        "wins": 535,
        "losses": 289,
        "draws": 0,
        "winRate": 0.6492718446601942,
        "averageFlips": 0.5691747572815534,
        "averageDamageDealt": 0.9563106796116505,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 815,
        "wins": 499,
        "losses": 316,
        "draws": 0,
        "winRate": 0.6122699386503068,
        "averageFlips": 0.4233128834355828,
        "averageDamageDealt": 0.898159509202454,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:owl:gain-shield",
        "kind": "effect",
        "label": "Chaton des ronces -> gain-shield",
        "count": 803,
        "wins": 395,
        "losses": 408,
        "draws": 0,
        "winRate": 0.4919053549190536,
        "averageFlips": 0.39476961394769616,
        "averageDamageDealt": 0.31008717310087175,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 787,
        "wins": 431,
        "losses": 356,
        "draws": 0,
        "winRate": 0.5476493011435832,
        "averageFlips": 0.48792884371029227,
        "averageDamageDealt": 0.2121982210927573,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 759,
        "wins": 390,
        "losses": 369,
        "draws": 0,
        "winRate": 0.5138339920948617,
        "averageFlips": 0.3069828722002635,
        "averageDamageDealt": 0.17918313570487485,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 758,
        "wins": 408,
        "losses": 350,
        "draws": 0,
        "winRate": 0.5382585751978892,
        "averageFlips": 0.44591029023746703,
        "averageDamageDealt": 0.6292875989445911,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 748,
        "wins": 376,
        "losses": 372,
        "draws": 0,
        "winRate": 0.5026737967914439,
        "averageFlips": 0.3195187165775401,
        "averageDamageDealt": 0.3114973262032086,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 711,
        "wins": 405,
        "losses": 306,
        "draws": 0,
        "winRate": 0.569620253164557,
        "averageFlips": 0.40646976090014064,
        "averageDamageDealt": 0.9774964838255977,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 678,
        "wins": 339,
        "losses": 339,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 0.31563421828908556,
        "averageDamageDealt": 0.9026548672566371,
        "averageEffectAmount": 0.6814159292035398,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 669,
        "wins": 383,
        "losses": 286,
        "draws": 0,
        "winRate": 0.5724962630792227,
        "averageFlips": 0.17189835575485798,
        "averageDamageDealt": 0.17937219730941703,
        "averageEffectAmount": 1.9970104633781764,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:banner-squire:gain-shield",
        "kind": "effect",
        "label": "Ecuyere banniere -> gain-shield",
        "count": 608,
        "wins": 331,
        "losses": 277,
        "draws": 0,
        "winRate": 0.5444078947368421,
        "averageFlips": 0.39144736842105265,
        "averageDamageDealt": 0.75,
        "averageEffectAmount": 1.6217105263157894,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+familiar",
        "kind": "friendly-adjacent",
        "label": "human allie + familiar",
        "count": 559,
        "wins": 313,
        "losses": 246,
        "draws": 0,
        "winRate": 0.5599284436493739,
        "averageFlips": 0.4418604651162791,
        "averageDamageDealt": 0.7728085867620751,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 550,
        "wins": 290,
        "losses": 260,
        "draws": 0,
        "winRate": 0.5272727272727272,
        "averageFlips": 0.6018181818181818,
        "averageDamageDealt": 1.1927272727272726,
        "averageEffectAmount": 0.4018181818181818,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 541,
        "wins": 285,
        "losses": 256,
        "draws": 0,
        "winRate": 0.5268022181146026,
        "averageFlips": 0.7837338262476895,
        "averageDamageDealt": 0.2975970425138632,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3591,
        "id": "card-hornling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Cornu farceur est ignoree par les bots",
        "detail": "3591 offres, 16% selection, 51% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3358,
        "id": "card-ember-imp-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Diablotin braise est ignoree par les bots",
        "detail": "3358 offres, 18% selection, 48% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2227,
        "id": "card-gear-monk-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Moine engrene est ignoree par les bots",
        "detail": "2227 offres, 17% selection, 47% win quand jouee, role connector.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 541,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "541 occurrences, 53% win, 0.78 flips, 0.30 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "deck-turn-spread",
      "severity": "watch",
      "title": "La taille de deck change fortement le rythme",
      "detail": "Ecart de 6.61 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    },
    {
      "id": "diagnostic-card-hornling-ignored",
      "severity": "watch",
      "title": "Cornu farceur est ignoree par les bots",
      "detail": "3591 offres, 16% selection, 51% win quand jouee, role anchor. Confiance high, echantillon 3591.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-ember-imp-ignored",
      "severity": "watch",
      "title": "Diablotin braise est ignoree par les bots",
      "detail": "3358 offres, 18% selection, 48% win quand jouee, role attacker. Confiance high, echantillon 3358.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-gear-monk-ignored",
      "severity": "watch",
      "title": "Moine engrene est ignoree par les bots",
      "detail": "2227 offres, 17% selection, 47% win quand jouee, role connector. Confiance high, echantillon 2227.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-combo-effect:pact-sprite:boost-self",
      "severity": "watch",
      "title": "Lutin a pacte -> boost-self ressort comme combo",
      "detail": "541 occurrences, 53% win, 0.78 flips, 0.30 degats. Confiance high, echantillon 541.",
      "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
    }
  ]
};
