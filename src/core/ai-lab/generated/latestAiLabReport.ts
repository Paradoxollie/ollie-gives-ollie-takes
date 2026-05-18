import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260518-210158",
  "generatedAt": "2026-05-18T21:01:58.880Z",
  "config": {
    "matchesPerPairing": 18,
    "seed": 4,
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
      "averageHpEdge": -20.51851851851852
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 62,
      "losses": 46,
      "draws": 0,
      "winRate": 0.5740740740740741,
      "averageHpEdge": 7.5092592592592595
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 57,
      "losses": 51,
      "draws": 0,
      "winRate": 0.5277777777777778,
      "averageHpEdge": 0.09259259259259259
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 66,
      "losses": 42,
      "draws": 0,
      "winRate": 0.6111111111111112,
      "averageHpEdge": 1.8148148148148149
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 31,
      "losses": 23,
      "draws": 0,
      "winRate": 0.5740740740740741,
      "averageHpEdge": 1.6851851851851851
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
        "turns": 48.166666666666664,
        "rounds": 5.388888888888889,
        "flipsPerMatch": 18.38888888888889,
        "flipsPerTurn": 0.3817762399077278,
        "reshuffles": 8.166666666666666,
        "deadTurns": 0,
        "finalHpDifference": 10.166666666666666
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
      "startingPlayerWinRate": 0.5555555555555556,
      "averages": {
        "turns": 52.05555555555556,
        "rounds": 5.888888888888889,
        "flipsPerMatch": 20.444444444444443,
        "flipsPerTurn": 0.3927427961579509,
        "reshuffles": 6.055555555555555,
        "deadTurns": 0,
        "finalHpDifference": 6.777777777777778
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
        "turns": 51.111111111111114,
        "rounds": 5.777777777777778,
        "flipsPerMatch": 17.5,
        "flipsPerTurn": 0.3423913043478261,
        "reshuffles": 4.222222222222222,
        "deadTurns": 0,
        "finalHpDifference": 7.222222222222222
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
          "averageHpEdge": -21.055555555555557
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.055555555555557
        }
      ],
      "averages": {
        "turns": 31.666666666666668,
        "rounds": 3.5,
        "flipsPerMatch": 17.833333333333332,
        "flipsPerTurn": 0.5631578947368421,
        "reshuffles": 4.111111111111111,
        "deadTurns": 0.4444444444444444,
        "finalHpDifference": 21.055555555555557
      },
      "deadTurnFrequency": 0.014035087719298246
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
          "averageHpEdge": -7
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 7
        }
      ],
      "averages": {
        "turns": 43.72222222222222,
        "rounds": 5,
        "flipsPerMatch": 24.833333333333332,
        "flipsPerTurn": 0.567979669631512,
        "reshuffles": 7.333333333333333,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 8.666666666666666
      },
      "deadTurnFrequency": 0.0012706480304955528
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
          "wins": 5,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.5555555555555556
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -4.666666666666667
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 4.666666666666667
        }
      ],
      "averages": {
        "turns": 47,
        "rounds": 5.333333333333333,
        "flipsPerMatch": 19.555555555555557,
        "flipsPerTurn": 0.4160756501182033,
        "reshuffles": 7.888888888888889,
        "deadTurns": 0,
        "finalHpDifference": 8.11111111111111
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
          "wins": 9,
          "winRate": 0.9
        },
        "enemy": {
          "games": 8,
          "wins": 6,
          "winRate": 0.75
        },
        "overallStartingPlayerWinRate": 0.8333333333333334
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 18,
          "wins": 6,
          "losses": 12,
          "draws": 0,
          "winRate": 0.3333333333333333,
          "averageHpEdge": -2.7777777777777777
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 12,
          "losses": 6,
          "draws": 0,
          "winRate": 0.6666666666666666,
          "averageHpEdge": 2.7777777777777777
        }
      ],
      "averages": {
        "turns": 48.44444444444444,
        "rounds": 5.5,
        "flipsPerMatch": 28.11111111111111,
        "flipsPerTurn": 0.5802752293577982,
        "reshuffles": 8.277777777777779,
        "deadTurns": 0,
        "finalHpDifference": 6
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
          "averageHpEdge": -19.5
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 19.5
        }
      ],
      "averages": {
        "turns": 34.888888888888886,
        "rounds": 4,
        "flipsPerMatch": 21.22222222222222,
        "flipsPerTurn": 0.60828025477707,
        "reshuffles": 3.5555555555555554,
        "deadTurns": 0,
        "finalHpDifference": 19.5
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
          "averageHpEdge": -4.888888888888889
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 4.888888888888889
        }
      ],
      "averages": {
        "turns": 50.94444444444444,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 30.88888888888889,
        "flipsPerTurn": 0.6063249727371864,
        "reshuffles": 6.055555555555555,
        "deadTurns": 0.2222222222222222,
        "finalHpDifference": 8.666666666666666
      },
      "deadTurnFrequency": 0.004362050163576881
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
          "wins": 6,
          "winRate": 0.75
        },
        "overallStartingPlayerWinRate": 0.6666666666666666
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 18,
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -5.388888888888889
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 5.388888888888889
        }
      ],
      "averages": {
        "turns": 52.333333333333336,
        "rounds": 5.833333333333333,
        "flipsPerMatch": 20,
        "flipsPerTurn": 0.3821656050955414,
        "reshuffles": 6,
        "deadTurns": 0,
        "finalHpDifference": 7.611111111111111
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
          "wins": 8,
          "losses": 10,
          "draws": 0,
          "winRate": 0.4444444444444444,
          "averageHpEdge": -2.3333333333333335
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 10,
          "losses": 8,
          "draws": 0,
          "winRate": 0.5555555555555556,
          "averageHpEdge": 2.3333333333333335
        }
      ],
      "averages": {
        "turns": 51.72222222222222,
        "rounds": 5.777777777777778,
        "flipsPerMatch": 30.22222222222222,
        "flipsPerTurn": 0.5843179377013964,
        "reshuffles": 5.722222222222222,
        "deadTurns": 0,
        "finalHpDifference": 6.666666666666667
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
          "averageHpEdge": -21
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21
        }
      ],
      "averages": {
        "turns": 33.833333333333336,
        "rounds": 3.8333333333333335,
        "flipsPerMatch": 19.11111111111111,
        "flipsPerTurn": 0.5648604269293924,
        "reshuffles": 2.6666666666666665,
        "deadTurns": 0,
        "finalHpDifference": 21
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
          "averageHpEdge": -4.611111111111111
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 4.611111111111111
        }
      ],
      "averages": {
        "turns": 52.111111111111114,
        "rounds": 5.888888888888889,
        "flipsPerMatch": 29.22222222222222,
        "flipsPerTurn": 0.5607675906183369,
        "reshuffles": 4.777777777777778,
        "deadTurns": 0,
        "finalHpDifference": 6.277777777777778
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
          "modelId": "regular",
          "games": 18,
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -5.888888888888889
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 5.888888888888889
        }
      ],
      "averages": {
        "turns": 51.611111111111114,
        "rounds": 5.777777777777778,
        "flipsPerMatch": 20.166666666666668,
        "flipsPerTurn": 0.3907427341227126,
        "reshuffles": 4.277777777777778,
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
          "averageHpEdge": 0.05555555555555555
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -0.05555555555555555
        }
      ],
      "averages": {
        "turns": 51.05555555555556,
        "rounds": 5.722222222222222,
        "flipsPerMatch": 29.11111111111111,
        "flipsPerTurn": 0.5701849836779108,
        "reshuffles": 4.222222222222222,
        "deadTurns": 0,
        "finalHpDifference": 7.055555555555555
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
        "offered": 2534,
        "played": 439,
        "ignored": 2095,
        "selectionRate": 0.17324388318863457,
        "wins": 220,
        "losses": 219,
        "draws": 0,
        "winRateWhenPlayed": 0.5011389521640092,
        "averageFlips": 0.7312072892938497,
        "failedImpactRate": 0.26036866359447003,
        "averageFlipMargin": 1.442367601246106,
        "averageEffectAmount": 0.571753986332574,
        "averageDamageDealt": 0.3735763097949886,
        "averageDamageTaken": 0.31662870159453305,
        "averageNetDamage": 0.05694760820045558,
        "lethalMoves": 2,
        "roundClosers": 43,
        "byModel": [
          {
            "modelId": "regular",
            "played": 194,
            "winRate": 0.5051546391752577
          },
          {
            "modelId": "expert",
            "played": 101,
            "winRate": 0.594059405940594
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.5972222222222222
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.5277777777777778
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
            "played": 160,
            "winRate": 0.49375
          },
          {
            "deckPresetId": "starter12",
            "played": 155,
            "winRate": 0.4967741935483871
          },
          {
            "deckPresetId": "starter14",
            "played": 124,
            "winRate": 0.5161290322580645
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
        "offered": 2487,
        "played": 390,
        "ignored": 2097,
        "selectionRate": 0.15681544028950542,
        "wins": 180,
        "losses": 210,
        "draws": 0,
        "winRateWhenPlayed": 0.46153846153846156,
        "averageFlips": 0.5076923076923077,
        "failedImpactRate": 0.4124629080118694,
        "averageFlipMargin": 1.297979797979798,
        "averageEffectAmount": 0.31025641025641026,
        "averageDamageDealt": 0.32564102564102565,
        "averageDamageTaken": 0.2153846153846154,
        "averageNetDamage": 0.11025641025641025,
        "lethalMoves": 3,
        "roundClosers": 27,
        "byModel": [
          {
            "modelId": "regular",
            "played": 149,
            "winRate": 0.436241610738255
          },
          {
            "modelId": "expert",
            "played": 97,
            "winRate": 0.6288659793814433
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.4642857142857143
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 0.56
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
            "played": 143,
            "winRate": 0.5524475524475524
          },
          {
            "deckPresetId": "starter14",
            "played": 127,
            "winRate": 0.4015748031496063
          },
          {
            "deckPresetId": "starter12",
            "played": 120,
            "winRate": 0.4166666666666667
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
        "offered": 2678,
        "played": 372,
        "ignored": 2306,
        "selectionRate": 0.13890963405526513,
        "wins": 192,
        "losses": 180,
        "draws": 0,
        "winRateWhenPlayed": 0.5161290322580645,
        "averageFlips": 0.5779569892473119,
        "failedImpactRate": 0.42513368983957217,
        "averageFlipMargin": 1.4651162790697674,
        "averageEffectAmount": 0.14516129032258066,
        "averageDamageDealt": 0.6693548387096774,
        "averageDamageTaken": 0.3897849462365591,
        "averageNetDamage": 0.27956989247311825,
        "lethalMoves": 4,
        "roundClosers": 58,
        "byModel": [
          {
            "modelId": "regular",
            "played": 173,
            "winRate": 0.49710982658959535
          },
          {
            "modelId": "expert",
            "played": 75,
            "winRate": 0.68
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.5961538461538461
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.5581395348837209
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
            "played": 140,
            "winRate": 0.5285714285714286
          },
          {
            "deckPresetId": "starter12",
            "played": 125,
            "winRate": 0.512
          },
          {
            "deckPresetId": "starter14",
            "played": 107,
            "winRate": 0.5046728971962616
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
        "offered": 2776,
        "played": 358,
        "ignored": 2418,
        "selectionRate": 0.12896253602305474,
        "wins": 174,
        "losses": 184,
        "draws": 0,
        "winRateWhenPlayed": 0.4860335195530726,
        "averageFlips": 0.6256983240223464,
        "failedImpactRate": 0.35816618911174786,
        "averageFlipMargin": 1.1517857142857142,
        "averageEffectAmount": 0.44972067039106145,
        "averageDamageDealt": 0.2988826815642458,
        "averageDamageTaken": 0.1564245810055866,
        "averageNetDamage": 0.1424581005586592,
        "lethalMoves": 1,
        "roundClosers": 23,
        "byModel": [
          {
            "modelId": "regular",
            "played": 129,
            "winRate": 0.5038759689922481
          },
          {
            "modelId": "expert",
            "played": 88,
            "winRate": 0.6363636363636364
          },
          {
            "modelId": "champion",
            "played": 55,
            "winRate": 0.6363636363636364
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.391304347826087
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
            "played": 133,
            "winRate": 0.43609022556390975
          },
          {
            "deckPresetId": "starter12",
            "played": 122,
            "winRate": 0.45901639344262296
          },
          {
            "deckPresetId": "starter14",
            "played": 103,
            "winRate": 0.5825242718446602
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
        "offered": 728,
        "played": 120,
        "ignored": 608,
        "selectionRate": 0.16483516483516483,
        "wins": 58,
        "losses": 62,
        "draws": 0,
        "winRateWhenPlayed": 0.48333333333333334,
        "averageFlips": 0.2916666666666667,
        "failedImpactRate": 0.6067415730337079,
        "averageFlipMargin": 1.8,
        "averageEffectAmount": 0.3416666666666667,
        "averageDamageDealt": 0.325,
        "averageDamageTaken": 0.16666666666666666,
        "averageNetDamage": 0.15833333333333335,
        "lethalMoves": 1,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 63,
            "winRate": 0.47619047619047616
          },
          {
            "modelId": "expert",
            "played": 21,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.5294117647058824
          },
          {
            "modelId": "beginner",
            "played": 12,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 7,
            "winRate": 0.7142857142857143
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 120,
            "winRate": 0.48333333333333334
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
        "offered": 1587,
        "played": 679,
        "ignored": 908,
        "selectionRate": 0.42785129174543163,
        "wins": 385,
        "losses": 294,
        "draws": 0,
        "winRateWhenPlayed": 0.5670103092783505,
        "averageFlips": 0.30338733431516934,
        "failedImpactRate": 0.486284289276808,
        "averageFlipMargin": 1.8446601941747574,
        "averageEffectAmount": 1.5287187039764358,
        "averageDamageDealt": 0.3387334315169367,
        "averageDamageTaken": 0.15905743740795286,
        "averageNetDamage": 0.17967599410898383,
        "lethalMoves": 4,
        "roundClosers": 53,
        "byModel": [
          {
            "modelId": "regular",
            "played": 307,
            "winRate": 0.5960912052117264
          },
          {
            "modelId": "expert",
            "played": 137,
            "winRate": 0.6715328467153284
          },
          {
            "modelId": "opportunist",
            "played": 120,
            "winRate": 0.5083333333333333
          },
          {
            "modelId": "champion",
            "played": 79,
            "winRate": 0.620253164556962
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
            "played": 250,
            "winRate": 0.548
          },
          {
            "deckPresetId": "starter12",
            "played": 238,
            "winRate": 0.5294117647058824
          },
          {
            "deckPresetId": "starter14",
            "played": 191,
            "winRate": 0.6387434554973822
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
        "offered": 1628,
        "played": 661,
        "ignored": 967,
        "selectionRate": 0.406019656019656,
        "wins": 356,
        "losses": 305,
        "draws": 0,
        "winRateWhenPlayed": 0.5385779122541604,
        "averageFlips": 0.34493192133131617,
        "failedImpactRate": 0.5117773019271948,
        "averageFlipMargin": 1.8771929824561404,
        "averageEffectAmount": 0.7760968229954615,
        "averageDamageDealt": 1.0907715582450832,
        "averageDamageTaken": 0.2723146747352496,
        "averageNetDamage": 0.8184568835098336,
        "lethalMoves": 7,
        "roundClosers": 50,
        "byModel": [
          {
            "modelId": "regular",
            "played": 258,
            "winRate": 0.5736434108527132
          },
          {
            "modelId": "expert",
            "played": 165,
            "winRate": 0.6545454545454545
          },
          {
            "modelId": "opportunist",
            "played": 120,
            "winRate": 0.48333333333333334
          },
          {
            "modelId": "champion",
            "played": 73,
            "winRate": 0.5753424657534246
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
            "played": 250,
            "winRate": 0.54
          },
          {
            "deckPresetId": "starter12",
            "played": 214,
            "winRate": 0.5607476635514018
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
        "offered": 1819,
        "played": 644,
        "ignored": 1175,
        "selectionRate": 0.35404068169323805,
        "wins": 311,
        "losses": 333,
        "draws": 0,
        "winRateWhenPlayed": 0.4829192546583851,
        "averageFlips": 0.3447204968944099,
        "failedImpactRate": 0.5384615384615384,
        "averageFlipMargin": 1.7792792792792793,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.391304347826087,
        "averageDamageTaken": 0.2593167701863354,
        "averageNetDamage": 0.13198757763975155,
        "lethalMoves": 7,
        "roundClosers": 60,
        "byModel": [
          {
            "modelId": "regular",
            "played": 308,
            "winRate": 0.487012987012987
          },
          {
            "modelId": "expert",
            "played": 132,
            "winRate": 0.5984848484848485
          },
          {
            "modelId": "opportunist",
            "played": 109,
            "winRate": 0.44954128440366975
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.6111111111111112
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
            "played": 239,
            "winRate": 0.4560669456066946
          },
          {
            "deckPresetId": "starter12",
            "played": 227,
            "winRate": 0.4713656387665198
          },
          {
            "deckPresetId": "starter14",
            "played": 178,
            "winRate": 0.5337078651685393
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
        "offered": 2036,
        "played": 641,
        "ignored": 1395,
        "selectionRate": 0.3148330058939096,
        "wins": 340,
        "losses": 301,
        "draws": 0,
        "winRateWhenPlayed": 0.5304212168486739,
        "averageFlips": 0.5444617784711389,
        "failedImpactRate": 0.5139275766016713,
        "averageFlipMargin": 1.495702005730659,
        "averageEffectAmount": 0.7035881435257411,
        "averageDamageDealt": 1.3728549141965678,
        "averageDamageTaken": 0.44617784711388453,
        "averageNetDamage": 0.9266770670826833,
        "lethalMoves": 19,
        "roundClosers": 97,
        "byModel": [
          {
            "modelId": "regular",
            "played": 265,
            "winRate": 0.5056603773584906
          },
          {
            "modelId": "expert",
            "played": 129,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 122,
            "winRate": 0.5327868852459017
          },
          {
            "modelId": "champion",
            "played": 83,
            "winRate": 0.6626506024096386
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
            "played": 235,
            "winRate": 0.5404255319148936
          },
          {
            "deckPresetId": "starter12",
            "played": 226,
            "winRate": 0.5707964601769911
          },
          {
            "deckPresetId": "starter14",
            "played": 180,
            "winRate": 0.4666666666666667
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
        "offered": 1964,
        "played": 604,
        "ignored": 1360,
        "selectionRate": 0.3075356415478615,
        "wins": 317,
        "losses": 287,
        "draws": 0,
        "winRateWhenPlayed": 0.5248344370860927,
        "averageFlips": 0.6225165562913907,
        "failedImpactRate": 0.36593591905564926,
        "averageFlipMargin": 2.595744680851064,
        "averageEffectAmount": 0.7897350993377483,
        "averageDamageDealt": 0.5695364238410596,
        "averageDamageTaken": 0.3079470198675497,
        "averageNetDamage": 0.26158940397350994,
        "lethalMoves": 11,
        "roundClosers": 78,
        "byModel": [
          {
            "modelId": "regular",
            "played": 275,
            "winRate": 0.5236363636363637
          },
          {
            "modelId": "expert",
            "played": 126,
            "winRate": 0.6031746031746031
          },
          {
            "modelId": "opportunist",
            "played": 114,
            "winRate": 0.5263157894736842
          },
          {
            "modelId": "champion",
            "played": 59,
            "winRate": 0.6271186440677966
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
            "winRate": 0.4864864864864865
          },
          {
            "deckPresetId": "starter12",
            "played": 208,
            "winRate": 0.5625
          },
          {
            "deckPresetId": "starter14",
            "played": 174,
            "winRate": 0.5287356321839081
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
        "offered": 2036,
        "played": 601,
        "ignored": 1435,
        "selectionRate": 0.2951866404715128,
        "wins": 299,
        "losses": 302,
        "draws": 0,
        "winRateWhenPlayed": 0.49750415973377704,
        "averageFlips": 0.36938435940099834,
        "failedImpactRate": 0.5306553911205074,
        "averageFlipMargin": 1.8513513513513513,
        "averageEffectAmount": 0.5374376039933444,
        "averageDamageDealt": 0.5058236272878536,
        "averageDamageTaken": 0.30782029950083195,
        "averageNetDamage": 0.19800332778702162,
        "lethalMoves": 6,
        "roundClosers": 78,
        "byModel": [
          {
            "modelId": "regular",
            "played": 258,
            "winRate": 0.5232558139534884
          },
          {
            "modelId": "expert",
            "played": 131,
            "winRate": 0.6030534351145038
          },
          {
            "modelId": "opportunist",
            "played": 93,
            "winRate": 0.40860215053763443
          },
          {
            "modelId": "champion",
            "played": 77,
            "winRate": 0.6103896103896104
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
            "played": 223,
            "winRate": 0.5022421524663677
          },
          {
            "deckPresetId": "starter12",
            "played": 202,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter14",
            "played": 176,
            "winRate": 0.48863636363636365
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
        "offered": 2302,
        "played": 578,
        "ignored": 1724,
        "selectionRate": 0.2510860121633362,
        "wins": 352,
        "losses": 226,
        "draws": 0,
        "winRateWhenPlayed": 0.6089965397923875,
        "averageFlips": 0.5346020761245674,
        "failedImpactRate": 0.48841059602649006,
        "averageFlipMargin": 1.6245954692556634,
        "averageEffectAmount": 1.6539792387543253,
        "averageDamageDealt": 0.8754325259515571,
        "averageDamageTaken": 0.29238754325259514,
        "averageNetDamage": 0.5830449826989619,
        "lethalMoves": 19,
        "roundClosers": 124,
        "byModel": [
          {
            "modelId": "regular",
            "played": 232,
            "winRate": 0.6379310344827587
          },
          {
            "modelId": "expert",
            "played": 122,
            "winRate": 0.6721311475409836
          },
          {
            "modelId": "opportunist",
            "played": 119,
            "winRate": 0.5966386554621849
          },
          {
            "modelId": "champion",
            "played": 71,
            "winRate": 0.7183098591549296
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
            "played": 224,
            "winRate": 0.6026785714285714
          },
          {
            "deckPresetId": "starter12",
            "played": 186,
            "winRate": 0.6182795698924731
          },
          {
            "deckPresetId": "starter14",
            "played": 168,
            "winRate": 0.6071428571428571
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
        "offered": 2121,
        "played": 569,
        "ignored": 1552,
        "selectionRate": 0.2682696841112683,
        "wins": 277,
        "losses": 292,
        "draws": 0,
        "winRateWhenPlayed": 0.4868189806678383,
        "averageFlips": 0.46572934973637964,
        "failedImpactRate": 0.39909297052154197,
        "averageFlipMargin": 1.6,
        "averageEffectAmount": 0.5729349736379613,
        "averageDamageDealt": 0.5606326889279437,
        "averageDamageTaken": 0.34797891036906853,
        "averageNetDamage": 0.21265377855887518,
        "lethalMoves": 7,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 251,
            "winRate": 0.5139442231075697
          },
          {
            "modelId": "expert",
            "played": 120,
            "winRate": 0.55
          },
          {
            "modelId": "opportunist",
            "played": 94,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 64,
            "winRate": 0.546875
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
            "played": 210,
            "winRate": 0.5523809523809524
          },
          {
            "deckPresetId": "starter12",
            "played": 197,
            "winRate": 0.467005076142132
          },
          {
            "deckPresetId": "starter14",
            "played": 162,
            "winRate": 0.42592592592592593
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
        "offered": 2091,
        "played": 551,
        "ignored": 1540,
        "selectionRate": 0.2635102821616451,
        "wins": 282,
        "losses": 269,
        "draws": 0,
        "winRateWhenPlayed": 0.5117967332123412,
        "averageFlips": 0.455535390199637,
        "failedImpactRate": 0.4625267665952891,
        "averageFlipMargin": 1.649402390438247,
        "averageEffectAmount": 0.455535390199637,
        "averageDamageDealt": 0.38656987295825773,
        "averageDamageTaken": 0.27586206896551724,
        "averageNetDamage": 0.1107078039927405,
        "lethalMoves": 5,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 242,
            "winRate": 0.5537190082644629
          },
          {
            "modelId": "expert",
            "played": 119,
            "winRate": 0.6218487394957983
          },
          {
            "modelId": "opportunist",
            "played": 96,
            "winRate": 0.5104166666666666
          },
          {
            "modelId": "beginner",
            "played": 49,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 45,
            "winRate": 0.5555555555555556
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 201,
            "winRate": 0.48258706467661694
          },
          {
            "deckPresetId": "starter12",
            "played": 177,
            "winRate": 0.519774011299435
          },
          {
            "deckPresetId": "starter14",
            "played": 173,
            "winRate": 0.5375722543352601
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
        "offered": 2004,
        "played": 549,
        "ignored": 1455,
        "selectionRate": 0.27395209580838326,
        "wins": 269,
        "losses": 280,
        "draws": 0,
        "winRateWhenPlayed": 0.4899817850637523,
        "averageFlips": 0.4772313296903461,
        "failedImpactRate": 0.3177083333333333,
        "averageFlipMargin": 1.400763358778626,
        "averageEffectAmount": 0.34972677595628415,
        "averageDamageDealt": 0.6575591985428051,
        "averageDamageTaken": 0.2331511839708561,
        "averageNetDamage": 0.424408014571949,
        "lethalMoves": 15,
        "roundClosers": 41,
        "byModel": [
          {
            "modelId": "regular",
            "played": 212,
            "winRate": 0.4811320754716981
          },
          {
            "modelId": "opportunist",
            "played": 125,
            "winRate": 0.48
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.5934959349593496
          },
          {
            "modelId": "champion",
            "played": 55,
            "winRate": 0.6181818181818182
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
            "played": 197,
            "winRate": 0.43147208121827413
          },
          {
            "deckPresetId": "starter12",
            "played": 188,
            "winRate": 0.5372340425531915
          },
          {
            "deckPresetId": "starter14",
            "played": 164,
            "winRate": 0.5060975609756098
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
        "offered": 2223,
        "played": 544,
        "ignored": 1679,
        "selectionRate": 0.24471434997750788,
        "wins": 288,
        "losses": 256,
        "draws": 0,
        "winRateWhenPlayed": 0.5294117647058824,
        "averageFlips": 0.8069852941176471,
        "failedImpactRate": 0.2896440129449838,
        "averageFlipMargin": 1.5193621867881548,
        "averageEffectAmount": 0.8069852941176471,
        "averageDamageDealt": 0.47794117647058826,
        "averageDamageTaken": 0.3088235294117647,
        "averageNetDamage": 0.16911764705882354,
        "lethalMoves": 8,
        "roundClosers": 63,
        "byModel": [
          {
            "modelId": "regular",
            "played": 237,
            "winRate": 0.5443037974683544
          },
          {
            "modelId": "opportunist",
            "played": 111,
            "winRate": 0.5945945945945946
          },
          {
            "modelId": "expert",
            "played": 102,
            "winRate": 0.6078431372549019
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.6078431372549019
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
            "played": 217,
            "winRate": 0.5576036866359447
          },
          {
            "deckPresetId": "starter12",
            "played": 185,
            "winRate": 0.4972972972972973
          },
          {
            "deckPresetId": "starter14",
            "played": 142,
            "winRate": 0.528169014084507
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
        "offered": 2302,
        "played": 532,
        "ignored": 1770,
        "selectionRate": 0.2311033883579496,
        "wins": 269,
        "losses": 263,
        "draws": 0,
        "winRateWhenPlayed": 0.5056390977443609,
        "averageFlips": 0.706766917293233,
        "failedImpactRate": 0.35506003430531735,
        "averageFlipMargin": 1.7127659574468086,
        "averageEffectAmount": 0.5413533834586466,
        "averageDamageDealt": 0.9624060150375939,
        "averageDamageTaken": 0.38533834586466165,
        "averageNetDamage": 0.5770676691729323,
        "lethalMoves": 8,
        "roundClosers": 58,
        "byModel": [
          {
            "modelId": "regular",
            "played": 219,
            "winRate": 0.54337899543379
          },
          {
            "modelId": "expert",
            "played": 111,
            "winRate": 0.5855855855855856
          },
          {
            "modelId": "opportunist",
            "played": 106,
            "winRate": 0.5188679245283019
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.5555555555555556
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
            "played": 207,
            "winRate": 0.5072463768115942
          },
          {
            "deckPresetId": "starter12",
            "played": 174,
            "winRate": 0.4827586206896552
          },
          {
            "deckPresetId": "starter14",
            "played": 151,
            "winRate": 0.5298013245033113
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
        "offered": 2245,
        "played": 519,
        "ignored": 1726,
        "selectionRate": 0.2311804008908686,
        "wins": 273,
        "losses": 246,
        "draws": 0,
        "winRateWhenPlayed": 0.5260115606936416,
        "averageFlips": 0.47784200385356457,
        "failedImpactRate": 0.44642857142857145,
        "averageFlipMargin": 1.6290322580645162,
        "averageEffectAmount": 0.5780346820809249,
        "averageDamageDealt": 0.5722543352601156,
        "averageDamageTaken": 0.325626204238921,
        "averageNetDamage": 0.24662813102119457,
        "lethalMoves": 9,
        "roundClosers": 64,
        "byModel": [
          {
            "modelId": "regular",
            "played": 235,
            "winRate": 0.5276595744680851
          },
          {
            "modelId": "expert",
            "played": 107,
            "winRate": 0.616822429906542
          },
          {
            "modelId": "opportunist",
            "played": 90,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 61,
            "winRate": 0.6229508196721312
          },
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 188,
            "winRate": 0.526595744680851
          },
          {
            "deckPresetId": "starter12",
            "played": 176,
            "winRate": 0.5568181818181818
          },
          {
            "deckPresetId": "starter14",
            "played": 155,
            "winRate": 0.49032258064516127
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
        "offered": 2336,
        "played": 507,
        "ignored": 1829,
        "selectionRate": 0.2170376712328767,
        "wins": 267,
        "losses": 240,
        "draws": 0,
        "winRateWhenPlayed": 0.5266272189349113,
        "averageFlips": 0.48717948717948717,
        "failedImpactRate": 0.45714285714285713,
        "averageFlipMargin": 1.4777327935222673,
        "averageEffectAmount": 0.5542406311637081,
        "averageDamageDealt": 0.6942800788954635,
        "averageDamageTaken": 0.3767258382642998,
        "averageNetDamage": 0.3175542406311637,
        "lethalMoves": 17,
        "roundClosers": 84,
        "byModel": [
          {
            "modelId": "regular",
            "played": 185,
            "winRate": 0.5135135135135135
          },
          {
            "modelId": "expert",
            "played": 115,
            "winRate": 0.6608695652173913
          },
          {
            "modelId": "opportunist",
            "played": 94,
            "winRate": 0.5212765957446809
          },
          {
            "modelId": "champion",
            "played": 73,
            "winRate": 0.6438356164383562
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
            "played": 183,
            "winRate": 0.6065573770491803
          },
          {
            "deckPresetId": "starter12",
            "played": 181,
            "winRate": 0.5193370165745856
          },
          {
            "deckPresetId": "starter14",
            "played": 143,
            "winRate": 0.43356643356643354
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
        "offered": 2308,
        "played": 438,
        "ignored": 1870,
        "selectionRate": 0.18977469670710573,
        "wins": 203,
        "losses": 235,
        "draws": 0,
        "winRateWhenPlayed": 0.4634703196347032,
        "averageFlips": 0.3721461187214612,
        "failedImpactRate": 0.46381578947368424,
        "averageFlipMargin": 1.6809815950920246,
        "averageEffectAmount": 0.273972602739726,
        "averageDamageDealt": 0.2922374429223744,
        "averageDamageTaken": 0.19863013698630136,
        "averageNetDamage": 0.09360730593607305,
        "lethalMoves": 1,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 206,
            "winRate": 0.47572815533980584
          },
          {
            "modelId": "expert",
            "played": 100,
            "winRate": 0.58
          },
          {
            "modelId": "opportunist",
            "played": 69,
            "winRate": 0.43478260869565216
          },
          {
            "modelId": "beginner",
            "played": 32,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 31,
            "winRate": 0.5483870967741935
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 153,
            "winRate": 0.43790849673202614
          },
          {
            "deckPresetId": "starter10",
            "played": 151,
            "winRate": 0.45695364238410596
          },
          {
            "deckPresetId": "starter14",
            "played": 134,
            "winRate": 0.5
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
        "offered": 2424,
        "played": 437,
        "ignored": 1987,
        "selectionRate": 0.18028052805280528,
        "wins": 191,
        "losses": 246,
        "draws": 0,
        "winRateWhenPlayed": 0.43707093821510296,
        "averageFlips": 0.4279176201372998,
        "failedImpactRate": 0.4717514124293785,
        "averageFlipMargin": 1.5828877005347595,
        "averageEffectAmount": 0.016018306636155607,
        "averageDamageDealt": 0.39816933638443935,
        "averageDamageTaken": 0.2334096109839817,
        "averageNetDamage": 0.16475972540045766,
        "lethalMoves": 5,
        "roundClosers": 34,
        "byModel": [
          {
            "modelId": "regular",
            "played": 203,
            "winRate": 0.5073891625615764
          },
          {
            "modelId": "expert",
            "played": 92,
            "winRate": 0.4782608695652174
          },
          {
            "modelId": "opportunist",
            "played": 55,
            "winRate": 0.4727272727272727
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.3333333333333333
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
            "played": 160,
            "winRate": 0.45
          },
          {
            "deckPresetId": "starter12",
            "played": 147,
            "winRate": 0.42857142857142855
          },
          {
            "deckPresetId": "starter14",
            "played": 130,
            "winRate": 0.4307692307692308
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
        "offered": 1157,
        "played": 399,
        "ignored": 758,
        "selectionRate": 0.34485738980121,
        "wins": 201,
        "losses": 198,
        "draws": 0,
        "winRateWhenPlayed": 0.5037593984962406,
        "averageFlips": 0.2807017543859649,
        "failedImpactRate": 0.5428571428571428,
        "averageFlipMargin": 1.7410714285714286,
        "averageEffectAmount": 1.5889724310776943,
        "averageDamageDealt": 0.42105263157894735,
        "averageDamageTaken": 0.22807017543859648,
        "averageNetDamage": 0.19298245614035087,
        "lethalMoves": 6,
        "roundClosers": 42,
        "byModel": [
          {
            "modelId": "regular",
            "played": 163,
            "winRate": 0.49693251533742333
          },
          {
            "modelId": "expert",
            "played": 85,
            "winRate": 0.6705882352941176
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.4810126582278481
          },
          {
            "modelId": "champion",
            "played": 46,
            "winRate": 0.5434782608695652
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
            "played": 216,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter14",
            "played": 183,
            "winRate": 0.5081967213114754
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
        "offered": 1216,
        "played": 373,
        "ignored": 843,
        "selectionRate": 0.3067434210526316,
        "wins": 204,
        "losses": 169,
        "draws": 0,
        "winRateWhenPlayed": 0.546916890080429,
        "averageFlips": 0.7694369973190348,
        "failedImpactRate": 0.22849462365591397,
        "averageFlipMargin": 1.4146341463414633,
        "averageEffectAmount": 0.5549597855227882,
        "averageDamageDealt": 0.7962466487935657,
        "averageDamageTaken": 0.13136729222520108,
        "averageNetDamage": 0.6648793565683646,
        "lethalMoves": 5,
        "roundClosers": 19,
        "byModel": [
          {
            "modelId": "regular",
            "played": 157,
            "winRate": 0.5732484076433121
          },
          {
            "modelId": "expert",
            "played": 82,
            "winRate": 0.6707317073170732
          },
          {
            "modelId": "opportunist",
            "played": 71,
            "winRate": 0.5492957746478874
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.4878048780487805
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 199,
            "winRate": 0.5678391959798995
          },
          {
            "deckPresetId": "starter14",
            "played": 174,
            "winRate": 0.5229885057471264
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
        "offered": 1403,
        "played": 336,
        "ignored": 1067,
        "selectionRate": 0.23948681397006416,
        "wins": 165,
        "losses": 171,
        "draws": 0,
        "winRateWhenPlayed": 0.49107142857142855,
        "averageFlips": 0.35119047619047616,
        "failedImpactRate": 0.5916955017301038,
        "averageFlipMargin": 1.194915254237288,
        "averageEffectAmount": 0.6190476190476191,
        "averageDamageDealt": 0.6964285714285714,
        "averageDamageTaken": 0.38095238095238093,
        "averageNetDamage": 0.31547619047619047,
        "lethalMoves": 2,
        "roundClosers": 60,
        "byModel": [
          {
            "modelId": "regular",
            "played": 158,
            "winRate": 0.4936708860759494
          },
          {
            "modelId": "expert",
            "played": 73,
            "winRate": 0.6301369863013698
          },
          {
            "modelId": "opportunist",
            "played": 56,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.52
          },
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 179,
            "winRate": 0.49162011173184356
          },
          {
            "deckPresetId": "starter14",
            "played": 157,
            "winRate": 0.49044585987261147
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
        "offered": 1534,
        "played": 294,
        "ignored": 1240,
        "selectionRate": 0.19165580182529335,
        "wins": 120,
        "losses": 174,
        "draws": 0,
        "winRateWhenPlayed": 0.40816326530612246,
        "averageFlips": 0.5170068027210885,
        "failedImpactRate": 0.4015748031496063,
        "averageFlipMargin": 1.375,
        "averageEffectAmount": 0.22448979591836735,
        "averageDamageDealt": 0.41156462585034015,
        "averageDamageTaken": 0.25510204081632654,
        "averageNetDamage": 0.1564625850340136,
        "lethalMoves": 4,
        "roundClosers": 32,
        "byModel": [
          {
            "modelId": "regular",
            "played": 123,
            "winRate": 0.43089430894308944
          },
          {
            "modelId": "expert",
            "played": 59,
            "winRate": 0.4915254237288136
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.5652173913043478
          },
          {
            "modelId": "champion",
            "played": 40,
            "winRate": 0.3
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
            "played": 156,
            "winRate": 0.41025641025641024
          },
          {
            "deckPresetId": "starter14",
            "played": 138,
            "winRate": 0.4057971014492754
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
        "offered": 537,
        "played": 188,
        "ignored": 349,
        "selectionRate": 0.3500931098696462,
        "wins": 93,
        "losses": 95,
        "draws": 0,
        "winRateWhenPlayed": 0.4946808510638298,
        "averageFlips": 0.43617021276595747,
        "failedImpactRate": 0.46405228758169936,
        "averageFlipMargin": 2.0609756097560976,
        "averageEffectAmount": 0.9202127659574468,
        "averageDamageDealt": 0.3829787234042553,
        "averageDamageTaken": 0.28191489361702127,
        "averageNetDamage": 0.10106382978723405,
        "lethalMoves": 3,
        "roundClosers": 18,
        "byModel": [
          {
            "modelId": "regular",
            "played": 77,
            "winRate": 0.4805194805194805
          },
          {
            "modelId": "expert",
            "played": 47,
            "winRate": 0.7021276595744681
          },
          {
            "modelId": "opportunist",
            "played": 39,
            "winRate": 0.38461538461538464
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0.6666666666666666
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 188,
            "winRate": 0.4946808510638298
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
        "offered": 655,
        "played": 144,
        "ignored": 511,
        "selectionRate": 0.2198473282442748,
        "wins": 74,
        "losses": 70,
        "draws": 0,
        "winRateWhenPlayed": 0.5138888888888888,
        "averageFlips": 0.4375,
        "failedImpactRate": 0.42727272727272725,
        "averageFlipMargin": 1.3492063492063493,
        "averageEffectAmount": 0.20833333333333334,
        "averageDamageDealt": 0.3611111111111111,
        "averageDamageTaken": 0.2777777777777778,
        "averageNetDamage": 0.08333333333333331,
        "lethalMoves": 2,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 70,
            "winRate": 0.5285714285714286
          },
          {
            "modelId": "expert",
            "played": 30,
            "winRate": 0.7333333333333333
          },
          {
            "modelId": "opportunist",
            "played": 21,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.46153846153846156
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
            "played": 144,
            "winRate": 0.5138888888888888
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
        "offered": 686,
        "played": 132,
        "ignored": 554,
        "selectionRate": 0.1924198250728863,
        "wins": 78,
        "losses": 54,
        "draws": 0,
        "winRateWhenPlayed": 0.5909090909090909,
        "averageFlips": 0.6212121212121212,
        "failedImpactRate": 0.31092436974789917,
        "averageFlipMargin": 1.353658536585366,
        "averageEffectAmount": 0.6212121212121212,
        "averageDamageDealt": 0.38636363636363635,
        "averageDamageTaken": 0.1590909090909091,
        "averageNetDamage": 0.22727272727272727,
        "lethalMoves": 0,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 55,
            "winRate": 0.6363636363636364
          },
          {
            "modelId": "expert",
            "played": 30,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 23,
            "winRate": 0.6521739130434783
          },
          {
            "modelId": "champion",
            "played": 14,
            "winRate": 0.5714285714285714
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
            "played": 132,
            "winRate": 0.5909090909090909
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
        "offered": 14449,
        "played": 3975,
        "ignored": 10474,
        "selectionRate": 0.2751055436362378,
        "wins": 2024,
        "losses": 1951,
        "draws": 0,
        "winRateWhenPlayed": 0.509182389937107,
        "averageFlips": 0.5104402515723271,
        "averageDamageDealt": 0.8062893081761007,
        "averageNetDamage": 0.4945911949685535,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 661,
            "winRateWhenPlayed": 0.5385779122541604
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 641,
            "winRateWhenPlayed": 0.5304212168486739
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 604,
            "winRateWhenPlayed": 0.5248344370860927
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 551,
            "winRateWhenPlayed": 0.5117967332123412
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 549,
            "winRateWhenPlayed": 0.4899817850637523
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
        "offered": 14917,
        "played": 3523,
        "ignored": 11394,
        "selectionRate": 0.23617349332975798,
        "wins": 1869,
        "losses": 1654,
        "draws": 0,
        "winRateWhenPlayed": 0.5305137666761283,
        "averageFlips": 0.5608856088560885,
        "averageDamageDealt": 0.5878512631280159,
        "averageNetDamage": 0.3128015895543571,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 644,
            "winRateWhenPlayed": 0.4829192546583851
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 578,
            "winRateWhenPlayed": 0.6089965397923875
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 544,
            "winRateWhenPlayed": 0.5294117647058824
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 519,
            "winRateWhenPlayed": 0.5260115606936416
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 507,
            "winRateWhenPlayed": 0.5266272189349113
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
        "wins": 1756,
        "losses": 1732,
        "draws": 0,
        "winRateWhenPlayed": 0.5034403669724771,
        "averageFlips": 0.455848623853211,
        "averageDamageDealt": 0.4360665137614679,
        "averageNetDamage": 0.16485091743119262,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 679,
            "winRateWhenPlayed": 0.5670103092783505
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 601,
            "winRateWhenPlayed": 0.49750415973377704
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 569,
            "winRateWhenPlayed": 0.4868189806678383
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 439,
            "winRateWhenPlayed": 0.5011389521640092
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 438,
            "winRateWhenPlayed": 0.4634703196347032
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
        "offered": 6700,
        "played": 1613,
        "ignored": 5087,
        "selectionRate": 0.24074626865671642,
        "wins": 789,
        "losses": 824,
        "draws": 0,
        "winRateWhenPlayed": 0.48915065096094235,
        "averageFlips": 0.3992560446373218,
        "averageDamageDealt": 0.4569125852448853,
        "averageNetDamage": 0.19156850588964663,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 399,
            "winRateWhenPlayed": 0.5037593984962406
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 336,
            "winRateWhenPlayed": 0.49107142857142855
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 294,
            "winRateWhenPlayed": 0.40816326530612246
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 188,
            "winRateWhenPlayed": 0.4946808510638298
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 144,
            "winRateWhenPlayed": 0.5138888888888888
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
        "offered": 25073,
        "played": 6453,
        "ignored": 18620,
        "selectionRate": 0.2573684840266422,
        "wins": 3392,
        "losses": 3061,
        "draws": 0,
        "winRateWhenPlayed": 0.5256469858980319,
        "averageFlips": 0.5019370835270417,
        "averageDamageDealt": 0.6635673330234,
        "averageNetDamage": 0.34852006818534015,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 411,
            "winRateWhenPlayed": 0.5717761557177615
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 393,
            "winRateWhenPlayed": 0.5216284987277354
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 376,
            "winRateWhenPlayed": 0.48404255319148937
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 374,
            "winRateWhenPlayed": 0.56951871657754
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 338,
            "winRateWhenPlayed": 0.5207100591715976
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
        "offered": 8503,
        "played": 2282,
        "ignored": 6221,
        "selectionRate": 0.2683758673409385,
        "wins": 1168,
        "losses": 1114,
        "draws": 0,
        "winRateWhenPlayed": 0.5118317265556529,
        "averageFlips": 0.5258545135845749,
        "averageDamageDealt": 0.5714285714285714,
        "averageNetDamage": 0.34662576687116564,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 268,
            "winRateWhenPlayed": 0.5634328358208955
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 268,
            "winRateWhenPlayed": 0.5597014925373134
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 266,
            "winRateWhenPlayed": 0.4849624060150376
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 265,
            "winRateWhenPlayed": 0.4981132075471698
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 264,
            "winRateWhenPlayed": 0.4772727272727273
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
        "offered": 6526,
        "played": 1549,
        "ignored": 4977,
        "selectionRate": 0.23735825927060986,
        "wins": 732,
        "losses": 817,
        "draws": 0,
        "winRateWhenPlayed": 0.4725629438347321,
        "averageFlips": 0.4654615881213686,
        "averageDamageDealt": 0.43447385409941897,
        "averageNetDamage": 0.17301484828921881,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 268,
            "winRateWhenPlayed": 0.48134328358208955
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 267,
            "winRateWhenPlayed": 0.5280898876404494
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 265,
            "winRateWhenPlayed": 0.42641509433962266
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 245,
            "winRateWhenPlayed": 0.4775510204081633
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 242,
            "winRateWhenPlayed": 0.45454545454545453
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
        "offered": 4124,
        "played": 928,
        "ignored": 3196,
        "selectionRate": 0.22502424830261883,
        "wins": 457,
        "losses": 471,
        "draws": 0,
        "winRateWhenPlayed": 0.49245689655172414,
        "averageFlips": 0.4418103448275862,
        "averageDamageDealt": 0.6411637931034483,
        "averageNetDamage": 0.36745689655172414,
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
            "played": 263,
            "winRateWhenPlayed": 0.467680608365019
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 221,
            "winRateWhenPlayed": 0.497737556561086
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 177,
            "winRateWhenPlayed": 0.5480225988700564
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
        "offered": 4612,
        "played": 814,
        "ignored": 3798,
        "selectionRate": 0.17649609713790113,
        "wins": 427,
        "losses": 387,
        "draws": 0,
        "winRateWhenPlayed": 0.5245700245700246,
        "averageFlips": 0.47174447174447176,
        "averageDamageDealt": 0.5552825552825553,
        "averageNetDamage": 0.3034398034398035,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 262,
            "winRateWhenPlayed": 0.5763358778625954
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 247,
            "winRateWhenPlayed": 0.46153846153846156
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 227,
            "winRateWhenPlayed": 0.5418502202643172
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 78,
            "winRateWhenPlayed": 0.5
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
        "offered": 1868,
        "played": 315,
        "ignored": 1553,
        "selectionRate": 0.16862955032119914,
        "wins": 145,
        "losses": 170,
        "draws": 0,
        "winRateWhenPlayed": 0.4603174603174603,
        "averageFlips": 0.5047619047619047,
        "averageDamageDealt": 0.35555555555555557,
        "averageNetDamage": 0.08253968253968258,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 236,
            "winRateWhenPlayed": 0.4406779661016949
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 79,
            "winRateWhenPlayed": 0.5189873417721519
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
        "offered": 1111,
        "played": 258,
        "ignored": 853,
        "selectionRate": 0.23222322232223222,
        "wins": 117,
        "losses": 141,
        "draws": 0,
        "winRateWhenPlayed": 0.45348837209302323,
        "averageFlips": 0.4883720930232558,
        "averageDamageDealt": 0.4496124031007752,
        "averageNetDamage": 0.1162790697674419,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 258,
            "winRateWhenPlayed": 0.45348837209302323
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
        "offered": 51817,
        "played": 12599,
        "ignored": 39218,
        "selectionRate": 0.2431441418839377,
        "wins": 6438,
        "losses": 6161,
        "draws": 0,
        "winRateWhenPlayed": 0.5109929359472974,
        "averageFlips": 0.49519803158980874,
        "averageDamageDealt": 0.5979839669815065,
        "averageNetDamage": 0.3136756885467101,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 679,
            "winRateWhenPlayed": 0.5670103092783505
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 661,
            "winRateWhenPlayed": 0.5385779122541604
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 644,
            "winRateWhenPlayed": 0.4829192546583851
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 641,
            "winRateWhenPlayed": 0.5304212168486739
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 604,
            "winRateWhenPlayed": 0.5248344370860927
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
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 979,
        "wins": 506,
        "losses": 473,
        "draws": 0,
        "winRate": 0.5168539325842697,
        "averageFlips": 0.6138917262512769,
        "averageDamageDealt": 0.8835546475995915,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 912,
        "wins": 496,
        "losses": 416,
        "draws": 0,
        "winRate": 0.543859649122807,
        "averageFlips": 0.6162280701754386,
        "averageDamageDealt": 0.5317982456140351,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 877,
        "wins": 425,
        "losses": 452,
        "draws": 0,
        "winRate": 0.4846066134549601,
        "averageFlips": 0.5553021664766249,
        "averageDamageDealt": 0.4218928164196123,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 870,
        "wins": 501,
        "losses": 369,
        "draws": 0,
        "winRate": 0.5758620689655173,
        "averageFlips": 0.6264367816091954,
        "averageDamageDealt": 0.906896551724138,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 833,
        "wins": 409,
        "losses": 424,
        "draws": 0,
        "winRate": 0.4909963985594238,
        "averageFlips": 0.5630252100840336,
        "averageDamageDealt": 0.8943577430972389,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 803,
        "wins": 407,
        "losses": 396,
        "draws": 0,
        "winRate": 0.5068493150684932,
        "averageFlips": 0.5803237858032378,
        "averageDamageDealt": 0.660024906600249,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 791,
        "wins": 426,
        "losses": 365,
        "draws": 0,
        "winRate": 0.538558786346397,
        "averageFlips": 0.606826801517067,
        "averageDamageDealt": 1.0556257901390644,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 773,
        "wins": 407,
        "losses": 366,
        "draws": 0,
        "winRate": 0.5265200517464425,
        "averageFlips": 0.5756791720569211,
        "averageDamageDealt": 0.6688227684346701,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 677,
        "wins": 334,
        "losses": 343,
        "draws": 0,
        "winRate": 0.4933530280649926,
        "averageFlips": 0.5539143279172821,
        "averageDamageDealt": 0.741506646971935,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 644,
        "wins": 311,
        "losses": 333,
        "draws": 0,
        "winRate": 0.4829192546583851,
        "averageFlips": 0.3447204968944099,
        "averageDamageDealt": 0.391304347826087,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 643,
        "wins": 342,
        "losses": 301,
        "draws": 0,
        "winRate": 0.5318818040435459,
        "averageFlips": 0.3405909797822706,
        "averageDamageDealt": 1.088646967340591,
        "averageEffectAmount": 0.7978227060653188,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 606,
        "wins": 389,
        "losses": 217,
        "draws": 0,
        "winRate": 0.641914191419142,
        "averageFlips": 0.6039603960396039,
        "averageDamageDealt": 1.3333333333333333,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 606,
        "wins": 384,
        "losses": 222,
        "draws": 0,
        "winRate": 0.6336633663366337,
        "averageFlips": 0.49174917491749176,
        "averageDamageDealt": 1.1732673267326732,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 600,
        "wins": 330,
        "losses": 270,
        "draws": 0,
        "winRate": 0.55,
        "averageFlips": 0.5816666666666667,
        "averageDamageDealt": 1.455,
        "averageEffectAmount": 0.7516666666666667,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 597,
        "wins": 369,
        "losses": 228,
        "draws": 0,
        "winRate": 0.6180904522613065,
        "averageFlips": 0.661641541038526,
        "averageDamageDealt": 1.1725293132328307,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 548,
        "wins": 291,
        "losses": 257,
        "draws": 0,
        "winRate": 0.531021897810219,
        "averageFlips": 0.4854014598540146,
        "averageDamageDealt": 0.9142335766423357,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 519,
        "wins": 295,
        "losses": 224,
        "draws": 0,
        "winRate": 0.5684007707129094,
        "averageFlips": 0.17341040462427745,
        "averageDamageDealt": 0.24470134874759153,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 499,
        "wins": 299,
        "losses": 200,
        "draws": 0,
        "winRate": 0.5991983967935872,
        "averageFlips": 0.43887775551102204,
        "averageDamageDealt": 1.0841683366733468,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 497,
        "wins": 287,
        "losses": 210,
        "draws": 0,
        "winRate": 0.5774647887323944,
        "averageFlips": 0.5392354124748491,
        "averageDamageDealt": 1.635814889336016,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+demon",
        "kind": "friendly-adjacent",
        "label": "familiar allie + demon",
        "count": 485,
        "wins": 284,
        "losses": 201,
        "draws": 0,
        "winRate": 0.5855670103092784,
        "averageFlips": 0.5443298969072164,
        "averageDamageDealt": 1.6350515463917525,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 477,
        "wins": 250,
        "losses": 227,
        "draws": 0,
        "winRate": 0.5241090146750524,
        "averageFlips": 0.7714884696016772,
        "averageDamageDealt": 0.6960167714884696,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:gate-thief:draw-next-turn",
        "kind": "effect",
        "label": "Voleuse des portes -> draw-next-turn",
        "count": 435,
        "wins": 245,
        "losses": 190,
        "draws": 0,
        "winRate": 0.5632183908045977,
        "averageFlips": 1.0091954022988505,
        "averageDamageDealt": 0.5379310344827586,
        "averageEffectAmount": 1.0091954022988505,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 395,
        "wins": 275,
        "losses": 120,
        "draws": 0,
        "winRate": 0.6962025316455697,
        "averageFlips": 0.5113924050632911,
        "averageDamageDealt": 1.159493670886076,
        "averageEffectAmount": 2.420253164556962,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:automaton->demon",
        "kind": "family-chain",
        "label": "automaton -> demon",
        "count": 379,
        "wins": 163,
        "losses": 216,
        "draws": 0,
        "winRate": 0.43007915567282323,
        "averageFlips": 0.5382585751978892,
        "averageDamageDealt": 0.9393139841688655,
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
        "sampleSize": 2776,
        "id": "card-quiet-monk-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Moine du seuil est ignoree par les bots",
        "detail": "2776 offres, 13% selection, role anchor.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2678,
        "id": "card-foxfire-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Requin runefer est ignoree par les bots",
        "detail": "2678 offres, 14% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2534,
        "id": "card-heron-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "2534 offres, 17% selection, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 2487,
        "id": "card-owl-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Chaton des ronces est ignoree par les bots",
        "detail": "2487 offres, 16% selection, role stabilizer.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 728,
        "id": "card-tin-oracle-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oracle de fer-blanc est ignoree par les bots",
        "detail": "728 offres, 16% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 4612,
        "id": "role-payoff-buff",
        "severity": "watch",
        "action": "verify",
        "title": "payoff manque d'attraction",
        "detail": "4612 offres, 18% selection, 52% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 1868,
        "id": "role-stabilizer-buff",
        "severity": "watch",
        "action": "verify",
        "title": "stabilizer manque d'attraction",
        "detail": "1868 offres, 17% selection, 46% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 477,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "477 occurrences, 52% win, 0.77 flips, 0.70 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:gate-thief:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 435,
        "title": "Voleuse des portes -> draw-next-turn ressort comme combo",
        "detail": "435 occurrences, 56% win, 1.01 flips, 0.54 degats.",
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
      "detail": "2776 offres, 13% selection, role anchor. Confiance high, echantillon 2776.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-foxfire-ignored",
      "severity": "problem",
      "title": "Requin runefer est ignoree par les bots",
      "detail": "2678 offres, 14% selection, role payoff. Confiance high, echantillon 2678.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "problem",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "2534 offres, 17% selection, role connector. Confiance high, echantillon 2534.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-owl-ignored",
      "severity": "problem",
      "title": "Chaton des ronces est ignoree par les bots",
      "detail": "2487 offres, 16% selection, role stabilizer. Confiance high, echantillon 2487.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    }
  ]
};
