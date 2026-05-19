import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260519-121346",
  "generatedAt": "2026-05-19T12:13:46.364Z",
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
      "averageHpEdge": -22.833333333333332
    },
    {
      "modelId": "opportunist",
      "games": 108,
      "wins": 58,
      "losses": 50,
      "draws": 0,
      "winRate": 0.5370370370370371,
      "averageHpEdge": 6.324074074074074
    },
    {
      "modelId": "regular",
      "games": 108,
      "wins": 59,
      "losses": 49,
      "draws": 0,
      "winRate": 0.5462962962962963,
      "averageHpEdge": 0.7314814814814815
    },
    {
      "modelId": "expert",
      "games": 108,
      "wins": 65,
      "losses": 43,
      "draws": 0,
      "winRate": 0.6018518518518519,
      "averageHpEdge": 2.7685185185185186
    },
    {
      "modelId": "champion",
      "games": 54,
      "wins": 34,
      "losses": 20,
      "draws": 0,
      "winRate": 0.6296296296296297,
      "averageHpEdge": 3.185185185185185
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 18,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 65.44444444444444,
        "rounds": 7.333333333333333,
        "flipsPerMatch": 22.055555555555557,
        "flipsPerTurn": 0.3370118845500849,
        "reshuffles": 11.166666666666666,
        "deadTurns": 0.2777777777777778,
        "finalHpDifference": 10.777777777777779
      },
      "deadTurnFrequency": 0.004244482173174873,
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
        "turns": 71.11111111111111,
        "rounds": 7.944444444444445,
        "flipsPerMatch": 26.27777777777778,
        "flipsPerTurn": 0.36953125,
        "reshuffles": 9.277777777777779,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 9.38888888888889
      },
      "deadTurnFrequency": 0.00078125,
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
      "startingPlayerWinRate": 0.4444444444444444,
      "averages": {
        "turns": 74.05555555555556,
        "rounds": 8.277777777777779,
        "flipsPerMatch": 26.055555555555557,
        "flipsPerTurn": 0.35183795948987245,
        "reshuffles": 7.222222222222222,
        "deadTurns": 0,
        "finalHpDifference": 7.722222222222222
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
          "averageHpEdge": -23.11111111111111
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 23.11111111111111
        }
      ],
      "averages": {
        "turns": 34.77777777777778,
        "rounds": 3.8333333333333335,
        "flipsPerMatch": 20.166666666666668,
        "flipsPerTurn": 0.5798722044728435,
        "reshuffles": 4.555555555555555,
        "deadTurns": 0.5,
        "finalHpDifference": 23.11111111111111
      },
      "deadTurnFrequency": 0.01437699680511182
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
          "averageHpEdge": -11.61111111111111
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 11.61111111111111
        }
      ],
      "averages": {
        "turns": 50.888888888888886,
        "rounds": 5.611111111111111,
        "flipsPerMatch": 28.333333333333332,
        "flipsPerTurn": 0.5567685589519651,
        "reshuffles": 8,
        "deadTurns": 1.0555555555555556,
        "finalHpDifference": 13.38888888888889
      },
      "deadTurnFrequency": 0.02074235807860262
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
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -10.833333333333334
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 10.833333333333334
        }
      ],
      "averages": {
        "turns": 63.833333333333336,
        "rounds": 7.166666666666667,
        "flipsPerMatch": 27.22222222222222,
        "flipsPerTurn": 0.42645778938207135,
        "reshuffles": 11.11111111111111,
        "deadTurns": 0,
        "finalHpDifference": 11.61111111111111
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
          "averageHpEdge": -1.7777777777777777
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 9,
          "losses": 9,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 1.7777777777777777
        }
      ],
      "averages": {
        "turns": 60.333333333333336,
        "rounds": 6.944444444444445,
        "flipsPerMatch": 35.05555555555556,
        "flipsPerTurn": 0.5810313075506446,
        "reshuffles": 10.833333333333334,
        "deadTurns": 0,
        "finalHpDifference": 7.666666666666667
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
        "turns": 33.27777777777778,
        "rounds": 3.8333333333333335,
        "flipsPerMatch": 18.055555555555557,
        "flipsPerTurn": 0.5425709515859767,
        "reshuffles": 3.4444444444444446,
        "deadTurns": 0,
        "finalHpDifference": 22.61111111111111
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
          "wins": 2,
          "losses": 16,
          "draws": 0,
          "winRate": 0.1111111111111111,
          "averageHpEdge": -9.333333333333334
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 16,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8888888888888888,
          "averageHpEdge": 9.333333333333334
        }
      ],
      "averages": {
        "turns": 64.5,
        "rounds": 7.333333333333333,
        "flipsPerMatch": 38,
        "flipsPerTurn": 0.5891472868217055,
        "reshuffles": 8.555555555555555,
        "deadTurns": 0.05555555555555555,
        "finalHpDifference": 9.666666666666666
      },
      "deadTurnFrequency": 0.0008613264427217916
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
          "averageHpEdge": -7.277777777777778
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 14,
          "losses": 4,
          "draws": 0,
          "winRate": 0.7777777777777778,
          "averageHpEdge": 7.277777777777778
        }
      ],
      "averages": {
        "turns": 61.333333333333336,
        "rounds": 6.833333333333333,
        "flipsPerMatch": 25.055555555555557,
        "flipsPerTurn": 0.40851449275362317,
        "reshuffles": 7.333333333333333,
        "deadTurns": 0,
        "finalHpDifference": 10.5
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
          "wins": 5,
          "losses": 13,
          "draws": 0,
          "winRate": 0.2777777777777778,
          "averageHpEdge": -5.333333333333333
        },
        {
          "modelId": "champion",
          "games": 18,
          "wins": 13,
          "losses": 5,
          "draws": 0,
          "winRate": 0.7222222222222222,
          "averageHpEdge": 5.333333333333333
        }
      ],
      "averages": {
        "turns": 62.27777777777778,
        "rounds": 7,
        "flipsPerMatch": 34.888888888888886,
        "flipsPerTurn": 0.56021409455843,
        "reshuffles": 7.666666666666667,
        "deadTurns": 0,
        "finalHpDifference": 7.111111111111111
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
          "averageHpEdge": -22.77777777777778
        },
        {
          "modelId": "opportunist",
          "games": 18,
          "wins": 18,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22.77777777777778
        }
      ],
      "averages": {
        "turns": 37.166666666666664,
        "rounds": 4.222222222222222,
        "flipsPerMatch": 21.166666666666668,
        "flipsPerTurn": 0.5695067264573991,
        "reshuffles": 3.1666666666666665,
        "deadTurns": 0,
        "finalHpDifference": 22.77777777777778
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
          "averageHpEdge": -9.61111111111111
        },
        {
          "modelId": "regular",
          "games": 18,
          "wins": 17,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9444444444444444,
          "averageHpEdge": 9.61111111111111
        }
      ],
      "averages": {
        "turns": 67.27777777777777,
        "rounds": 7.666666666666667,
        "flipsPerMatch": 38.388888888888886,
        "flipsPerTurn": 0.5706028075970272,
        "reshuffles": 6.777777777777778,
        "deadTurns": 0,
        "finalHpDifference": 10.61111111111111
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
          "wins": 3,
          "losses": 15,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -8.055555555555555
        },
        {
          "modelId": "expert",
          "games": 18,
          "wins": 15,
          "losses": 3,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 8.055555555555555
        }
      ],
      "averages": {
        "turns": 67,
        "rounds": 7.611111111111111,
        "flipsPerMatch": 26.5,
        "flipsPerTurn": 0.39552238805970147,
        "reshuffles": 6.277777777777778,
        "deadTurns": 0,
        "finalHpDifference": 10.166666666666666
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
          "wins": 6,
          "winRate": 0.75
        },
        "overallStartingPlayerWinRate": 0.7222222222222222
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
        "turns": 66.33333333333333,
        "rounds": 7.5,
        "flipsPerMatch": 39.72222222222222,
        "flipsPerTurn": 0.5988274706867671,
        "reshuffles": 6,
        "deadTurns": 0,
        "finalHpDifference": 7
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
          "combo-1",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 3327,
        "played": 580,
        "ignored": 2747,
        "selectionRate": 0.17433122933573791,
        "wins": 293,
        "losses": 287,
        "draws": 0,
        "winRateWhenPlayed": 0.5051724137931034,
        "averageFlips": 0.7775862068965518,
        "failedImpactRate": 0.2908805031446541,
        "averageFlipMargin": 1.3037694013303769,
        "averageEffectAmount": 1.1155172413793104,
        "averageDamageDealt": 0.28620689655172415,
        "averageDamageTaken": 0.296551724137931,
        "averageNetDamage": -0.010344827586206862,
        "lethalMoves": 4,
        "roundClosers": 64,
        "byModel": [
          {
            "modelId": "regular",
            "played": 262,
            "winRate": 0.5267175572519084
          },
          {
            "modelId": "opportunist",
            "played": 136,
            "winRate": 0.47794117647058826
          },
          {
            "modelId": "expert",
            "played": 104,
            "winRate": 0.6538461538461539
          },
          {
            "modelId": "beginner",
            "played": 42,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 36,
            "winRate": 0.6111111111111112
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 220,
            "winRate": 0.5227272727272727
          },
          {
            "deckPresetId": "starter12",
            "played": 186,
            "winRate": 0.478494623655914
          },
          {
            "deckPresetId": "starter14",
            "played": 174,
            "winRate": 0.5114942528735632
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
        "offered": 3385,
        "played": 573,
        "ignored": 2812,
        "selectionRate": 0.16927621861152142,
        "wins": 296,
        "losses": 277,
        "draws": 0,
        "winRateWhenPlayed": 0.5165794066317626,
        "averageFlips": 0.5497382198952879,
        "failedImpactRate": 0.5434782608695652,
        "averageFlipMargin": 1.4253968253968254,
        "averageEffectAmount": 0.37347294938917974,
        "averageDamageDealt": 1.1291448516579408,
        "averageDamageTaken": 0.462478184991274,
        "averageNetDamage": 0.6666666666666667,
        "lethalMoves": 20,
        "roundClosers": 119,
        "byModel": [
          {
            "modelId": "regular",
            "played": 223,
            "winRate": 0.5022421524663677
          },
          {
            "modelId": "expert",
            "played": 145,
            "winRate": 0.6413793103448275
          },
          {
            "modelId": "champion",
            "played": 85,
            "winRate": 0.5647058823529412
          },
          {
            "modelId": "opportunist",
            "played": 84,
            "winRate": 0.5119047619047619
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
            "played": 213,
            "winRate": 0.45539906103286387
          },
          {
            "deckPresetId": "starter12",
            "played": 192,
            "winRate": 0.5260416666666666
          },
          {
            "deckPresetId": "starter14",
            "played": 168,
            "winRate": 0.5833333333333334
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
        "offered": 3347,
        "played": 546,
        "ignored": 2801,
        "selectionRate": 0.16313116223483717,
        "wins": 281,
        "losses": 265,
        "draws": 0,
        "winRateWhenPlayed": 0.5146520146520146,
        "averageFlips": 0.6996336996336996,
        "failedImpactRate": 0.347008547008547,
        "averageFlipMargin": 1.557591623036649,
        "averageEffectAmount": 0.34615384615384615,
        "averageDamageDealt": 0.6904761904761905,
        "averageDamageTaken": 0.2673992673992674,
        "averageNetDamage": 0.4230769230769231,
        "lethalMoves": 9,
        "roundClosers": 54,
        "byModel": [
          {
            "modelId": "regular",
            "played": 232,
            "winRate": 0.521551724137931
          },
          {
            "modelId": "expert",
            "played": 128,
            "winRate": 0.5859375
          },
          {
            "modelId": "opportunist",
            "played": 75,
            "winRate": 0.6266666666666667
          },
          {
            "modelId": "champion",
            "played": 71,
            "winRate": 0.5352112676056338
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
            "played": 190,
            "winRate": 0.5473684210526316
          },
          {
            "deckPresetId": "starter12",
            "played": 184,
            "winRate": 0.45652173913043476
          },
          {
            "deckPresetId": "starter14",
            "played": 172,
            "winRate": 0.5406976744186046
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
        "played": 356,
        "ignored": 1778,
        "selectionRate": 0.1668228678537957,
        "wins": 175,
        "losses": 181,
        "draws": 0,
        "winRateWhenPlayed": 0.49157303370786515,
        "averageFlips": 0.3455056179775281,
        "failedImpactRate": 0.6045016077170418,
        "averageFlipMargin": 1.2195121951219512,
        "averageEffectAmount": 0.6853932584269663,
        "averageDamageDealt": 0.4859550561797753,
        "averageDamageTaken": 0.34269662921348315,
        "averageNetDamage": 0.14325842696629215,
        "lethalMoves": 6,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 174,
            "winRate": 0.4885057471264368
          },
          {
            "modelId": "expert",
            "played": 91,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 42,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.7142857142857143
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
            "played": 180,
            "winRate": 0.45
          },
          {
            "deckPresetId": "starter14",
            "played": 176,
            "winRate": 0.5340909090909091
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
        "offered": 2344,
        "played": 796,
        "ignored": 1548,
        "selectionRate": 0.3395904436860068,
        "wins": 419,
        "losses": 377,
        "draws": 0,
        "winRateWhenPlayed": 0.5263819095477387,
        "averageFlips": 0.47613065326633164,
        "failedImpactRate": 0.37766830870279144,
        "averageFlipMargin": 1.6226912928759893,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.19974874371859297,
        "averageDamageTaken": 0.1708542713567839,
        "averageNetDamage": 0.02889447236180906,
        "lethalMoves": 3,
        "roundClosers": 53,
        "byModel": [
          {
            "modelId": "regular",
            "played": 351,
            "winRate": 0.5897435897435898
          },
          {
            "modelId": "expert",
            "played": 215,
            "winRate": 0.6
          },
          {
            "modelId": "opportunist",
            "played": 119,
            "winRate": 0.3865546218487395
          },
          {
            "modelId": "champion",
            "played": 61,
            "winRate": 0.6065573770491803
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
            "played": 304,
            "winRate": 0.5592105263157895
          },
          {
            "deckPresetId": "starter12",
            "played": 265,
            "winRate": 0.5018867924528302
          },
          {
            "deckPresetId": "starter14",
            "played": 227,
            "winRate": 0.5110132158590308
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
        "offered": 2242,
        "played": 785,
        "ignored": 1457,
        "selectionRate": 0.35013380909901876,
        "wins": 457,
        "losses": 328,
        "draws": 0,
        "winRateWhenPlayed": 0.5821656050955414,
        "averageFlips": 0.21910828025477708,
        "failedImpactRate": 0.5656565656565656,
        "averageFlipMargin": 1.680232558139535,
        "averageEffectAmount": 1.621656050955414,
        "averageDamageDealt": 0.2573248407643312,
        "averageDamageTaken": 0.14777070063694267,
        "averageNetDamage": 0.10955414012738854,
        "lethalMoves": 6,
        "roundClosers": 67,
        "byModel": [
          {
            "modelId": "regular",
            "played": 358,
            "winRate": 0.5949720670391061
          },
          {
            "modelId": "expert",
            "played": 167,
            "winRate": 0.7365269461077845
          },
          {
            "modelId": "opportunist",
            "played": 123,
            "winRate": 0.4065040650406504
          },
          {
            "modelId": "champion",
            "played": 99,
            "winRate": 0.7171717171717171
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
            "played": 290,
            "winRate": 0.6413793103448275
          },
          {
            "deckPresetId": "starter12",
            "played": 265,
            "winRate": 0.5471698113207547
          },
          {
            "deckPresetId": "starter14",
            "played": 230,
            "winRate": 0.5478260869565217
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
        "offered": 2598,
        "played": 749,
        "ignored": 1849,
        "selectionRate": 0.2882986913010008,
        "wins": 380,
        "losses": 369,
        "draws": 0,
        "winRateWhenPlayed": 0.507343124165554,
        "averageFlips": 0.3885180240320427,
        "failedImpactRate": 0.5380952380952381,
        "averageFlipMargin": 1.309278350515464,
        "averageEffectAmount": 0.9986648865153538,
        "averageDamageDealt": 0.3951935914552737,
        "averageDamageTaken": 0.30040053404539385,
        "averageNetDamage": 0.09479305740987987,
        "lethalMoves": 6,
        "roundClosers": 103,
        "byModel": [
          {
            "modelId": "regular",
            "played": 352,
            "winRate": 0.5255681818181818
          },
          {
            "modelId": "expert",
            "played": 161,
            "winRate": 0.6086956521739131
          },
          {
            "modelId": "opportunist",
            "played": 106,
            "winRate": 0.39622641509433965
          },
          {
            "modelId": "champion",
            "played": 95,
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
            "played": 261,
            "winRate": 0.46360153256704983
          },
          {
            "deckPresetId": "starter12",
            "played": 253,
            "winRate": 0.5454545454545454
          },
          {
            "deckPresetId": "starter14",
            "played": 235,
            "winRate": 0.5148936170212766
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
        "offered": 2905,
        "played": 736,
        "ignored": 2169,
        "selectionRate": 0.2533562822719449,
        "wins": 354,
        "losses": 382,
        "draws": 0,
        "winRateWhenPlayed": 0.48097826086956524,
        "averageFlips": 0.3736413043478261,
        "failedImpactRate": 0.5895522388059702,
        "averageFlipMargin": 1.4181818181818182,
        "averageEffectAmount": 1.2418478260869565,
        "averageDamageDealt": 0.5285326086956522,
        "averageDamageTaken": 0.3546195652173913,
        "averageNetDamage": 0.17391304347826092,
        "lethalMoves": 12,
        "roundClosers": 141,
        "byModel": [
          {
            "modelId": "regular",
            "played": 353,
            "winRate": 0.49291784702549574
          },
          {
            "modelId": "expert",
            "played": 163,
            "winRate": 0.5214723926380368
          },
          {
            "modelId": "opportunist",
            "played": 114,
            "winRate": 0.41228070175438597
          },
          {
            "modelId": "champion",
            "played": 68,
            "winRate": 0.7058823529411765
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
            "played": 274,
            "winRate": 0.4562043795620438
          },
          {
            "deckPresetId": "starter12",
            "played": 241,
            "winRate": 0.5311203319502075
          },
          {
            "deckPresetId": "starter14",
            "played": 221,
            "winRate": 0.45701357466063347
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
        "offered": 2502,
        "played": 729,
        "ignored": 1773,
        "selectionRate": 0.29136690647482016,
        "wins": 362,
        "losses": 367,
        "draws": 0,
        "winRateWhenPlayed": 0.49657064471879286,
        "averageFlips": 0.3223593964334705,
        "failedImpactRate": 0.5549242424242424,
        "averageFlipMargin": 1.6127659574468085,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.23593964334705075,
        "averageDamageTaken": 0.1906721536351166,
        "averageNetDamage": 0.045267489711934145,
        "lethalMoves": 9,
        "roundClosers": 57,
        "byModel": [
          {
            "modelId": "regular",
            "played": 365,
            "winRate": 0.5342465753424658
          },
          {
            "modelId": "opportunist",
            "played": 124,
            "winRate": 0.4435483870967742
          },
          {
            "modelId": "expert",
            "played": 111,
            "winRate": 0.6036036036036037
          },
          {
            "modelId": "champion",
            "played": 77,
            "winRate": 0.5844155844155844
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
            "played": 266,
            "winRate": 0.462406015037594
          },
          {
            "deckPresetId": "starter12",
            "played": 245,
            "winRate": 0.4897959183673469
          },
          {
            "deckPresetId": "starter14",
            "played": 218,
            "winRate": 0.5458715596330275
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
        "offered": 2688,
        "played": 712,
        "ignored": 1976,
        "selectionRate": 0.2648809523809524,
        "wins": 384,
        "losses": 328,
        "draws": 0,
        "winRateWhenPlayed": 0.5393258426966292,
        "averageFlips": 0.3651685393258427,
        "failedImpactRate": 0.5289855072463768,
        "averageFlipMargin": 1.396153846153846,
        "averageEffectAmount": 0.9985955056179775,
        "averageDamageDealt": 0.25842696629213485,
        "averageDamageTaken": 0.24297752808988765,
        "averageNetDamage": 0.015449438202247201,
        "lethalMoves": 4,
        "roundClosers": 76,
        "byModel": [
          {
            "modelId": "regular",
            "played": 326,
            "winRate": 0.5245398773006135
          },
          {
            "modelId": "expert",
            "played": 182,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "champion",
            "played": 89,
            "winRate": 0.6741573033707865
          },
          {
            "modelId": "opportunist",
            "played": 84,
            "winRate": 0.42857142857142855
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
            "played": 267,
            "winRate": 0.5318352059925093
          },
          {
            "deckPresetId": "starter12",
            "played": 228,
            "winRate": 0.5789473684210527
          },
          {
            "deckPresetId": "starter14",
            "played": 217,
            "winRate": 0.5069124423963134
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
        "offered": 2621,
        "played": 710,
        "ignored": 1911,
        "selectionRate": 0.27088897367417014,
        "wins": 342,
        "losses": 368,
        "draws": 0,
        "winRateWhenPlayed": 0.48169014084507045,
        "averageFlips": 0.3,
        "failedImpactRate": 0.5379609544468547,
        "averageFlipMargin": 1.624413145539906,
        "averageEffectAmount": 0.6309859154929578,
        "averageDamageDealt": 0.8985915492957747,
        "averageDamageTaken": 0.20985915492957746,
        "averageNetDamage": 0.6887323943661972,
        "lethalMoves": 12,
        "roundClosers": 57,
        "byModel": [
          {
            "modelId": "regular",
            "played": 282,
            "winRate": 0.4929078014184397
          },
          {
            "modelId": "expert",
            "played": 165,
            "winRate": 0.6242424242424243
          },
          {
            "modelId": "opportunist",
            "played": 126,
            "winRate": 0.35714285714285715
          },
          {
            "modelId": "champion",
            "played": 85,
            "winRate": 0.6470588235294118
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
            "played": 263,
            "winRate": 0.41064638783269963
          },
          {
            "deckPresetId": "starter12",
            "played": 232,
            "winRate": 0.521551724137931
          },
          {
            "deckPresetId": "starter14",
            "played": 215,
            "winRate": 0.5255813953488372
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
        "offered": 2941,
        "played": 685,
        "ignored": 2256,
        "selectionRate": 0.2329139748384903,
        "wins": 361,
        "losses": 324,
        "draws": 0,
        "winRateWhenPlayed": 0.527007299270073,
        "averageFlips": 0.3722627737226277,
        "failedImpactRate": 0.5549738219895288,
        "averageFlipMargin": 1.7450980392156863,
        "averageEffectAmount": 0.5167883211678832,
        "averageDamageDealt": 0.381021897810219,
        "averageDamageTaken": 0.22627737226277372,
        "averageNetDamage": 0.15474452554744528,
        "lethalMoves": 8,
        "roundClosers": 91,
        "byModel": [
          {
            "modelId": "regular",
            "played": 314,
            "winRate": 0.5636942675159236
          },
          {
            "modelId": "expert",
            "played": 191,
            "winRate": 0.6020942408376964
          },
          {
            "modelId": "opportunist",
            "played": 80,
            "winRate": 0.375
          },
          {
            "modelId": "champion",
            "played": 63,
            "winRate": 0.6190476190476191
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
            "played": 257,
            "winRate": 0.5447470817120622
          },
          {
            "deckPresetId": "starter14",
            "played": 215,
            "winRate": 0.5162790697674419
          },
          {
            "deckPresetId": "starter12",
            "played": 213,
            "winRate": 0.5164319248826291
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
        "offered": 3171,
        "played": 679,
        "ignored": 2492,
        "selectionRate": 0.2141280353200883,
        "wins": 373,
        "losses": 306,
        "draws": 0,
        "winRateWhenPlayed": 0.5493372606774669,
        "averageFlips": 0.508100147275405,
        "failedImpactRate": 0.48507462686567165,
        "averageFlipMargin": 1.5739130434782609,
        "averageEffectAmount": 1.840942562592047,
        "averageDamageDealt": 0.49337260677466865,
        "averageDamageTaken": 0.1796759941089838,
        "averageNetDamage": 0.3136966126656848,
        "lethalMoves": 5,
        "roundClosers": 118,
        "byModel": [
          {
            "modelId": "regular",
            "played": 308,
            "winRate": 0.5487012987012987
          },
          {
            "modelId": "expert",
            "played": 144,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "opportunist",
            "played": 115,
            "winRate": 0.5391304347826087
          },
          {
            "modelId": "champion",
            "played": 73,
            "winRate": 0.6301369863013698
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
            "played": 254,
            "winRate": 0.5236220472440944
          },
          {
            "deckPresetId": "starter12",
            "played": 230,
            "winRate": 0.5434782608695652
          },
          {
            "deckPresetId": "starter14",
            "played": 195,
            "winRate": 0.5897435897435898
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
        "offered": 2952,
        "played": 671,
        "ignored": 2281,
        "selectionRate": 0.22730352303523035,
        "wins": 338,
        "losses": 333,
        "draws": 0,
        "winRateWhenPlayed": 0.503725782414307,
        "averageFlips": 0.6527570789865872,
        "failedImpactRate": 0.3661360347322721,
        "averageFlipMargin": 2.8036529680365296,
        "averageEffectAmount": 0.7868852459016393,
        "averageDamageDealt": 0.4098360655737705,
        "averageDamageTaken": 0.23845007451564829,
        "averageNetDamage": 0.17138599105812222,
        "lethalMoves": 7,
        "roundClosers": 83,
        "byModel": [
          {
            "modelId": "regular",
            "played": 306,
            "winRate": 0.5359477124183006
          },
          {
            "modelId": "expert",
            "played": 138,
            "winRate": 0.5869565217391305
          },
          {
            "modelId": "opportunist",
            "played": 107,
            "winRate": 0.42990654205607476
          },
          {
            "modelId": "champion",
            "played": 80,
            "winRate": 0.5875
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
            "played": 247,
            "winRate": 0.5425101214574899
          },
          {
            "deckPresetId": "starter12",
            "played": 224,
            "winRate": 0.5223214285714286
          },
          {
            "deckPresetId": "starter14",
            "played": 200,
            "winRate": 0.435
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
        "offered": 3050,
        "played": 646,
        "ignored": 2404,
        "selectionRate": 0.21180327868852458,
        "wins": 322,
        "losses": 324,
        "draws": 0,
        "winRateWhenPlayed": 0.4984520123839009,
        "averageFlips": 0.6269349845201239,
        "failedImpactRate": 0.38821752265861026,
        "averageFlipMargin": 1.7506172839506173,
        "averageEffectAmount": 0.4179566563467492,
        "averageDamageDealt": 0.8777089783281734,
        "averageDamageTaken": 0.26625386996904027,
        "averageNetDamage": 0.6114551083591331,
        "lethalMoves": 9,
        "roundClosers": 75,
        "byModel": [
          {
            "modelId": "regular",
            "played": 280,
            "winRate": 0.48214285714285715
          },
          {
            "modelId": "expert",
            "played": 138,
            "winRate": 0.6086956521739131
          },
          {
            "modelId": "opportunist",
            "played": 99,
            "winRate": 0.5050505050505051
          },
          {
            "modelId": "champion",
            "played": 79,
            "winRate": 0.6708860759493671
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
            "played": 235,
            "winRate": 0.5234042553191489
          },
          {
            "deckPresetId": "starter12",
            "played": 216,
            "winRate": 0.44907407407407407
          },
          {
            "deckPresetId": "starter14",
            "played": 195,
            "winRate": 0.5230769230769231
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
        "offered": 3106,
        "played": 644,
        "ignored": 2462,
        "selectionRate": 0.20734063103670317,
        "wins": 295,
        "losses": 349,
        "draws": 0,
        "winRateWhenPlayed": 0.4580745341614907,
        "averageFlips": 0.4767080745341615,
        "failedImpactRate": 0.45080500894454384,
        "averageFlipMargin": 1.6091205211726385,
        "averageEffectAmount": 0.6024844720496895,
        "averageDamageDealt": 0.38819875776397517,
        "averageDamageTaken": 0.18322981366459629,
        "averageNetDamage": 0.20496894409937888,
        "lethalMoves": 4,
        "roundClosers": 74,
        "byModel": [
          {
            "modelId": "regular",
            "played": 335,
            "winRate": 0.4507462686567164
          },
          {
            "modelId": "expert",
            "played": 125,
            "winRate": 0.576
          },
          {
            "modelId": "opportunist",
            "played": 88,
            "winRate": 0.375
          },
          {
            "modelId": "champion",
            "played": 63,
            "winRate": 0.6190476190476191
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
            "winRate": 0.49407114624505927
          },
          {
            "deckPresetId": "starter12",
            "played": 204,
            "winRate": 0.46568627450980393
          },
          {
            "deckPresetId": "starter14",
            "played": 187,
            "winRate": 0.40106951871657753
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
        "offered": 2875,
        "played": 637,
        "ignored": 2238,
        "selectionRate": 0.22156521739130436,
        "wins": 283,
        "losses": 354,
        "draws": 0,
        "winRateWhenPlayed": 0.44427001569858715,
        "averageFlips": 0.5274725274725275,
        "failedImpactRate": 0.42759795570698467,
        "averageFlipMargin": 1.5476190476190477,
        "averageEffectAmount": 0.5274725274725275,
        "averageDamageDealt": 0.20408163265306123,
        "averageDamageTaken": 0.16483516483516483,
        "averageNetDamage": 0.0392464678178964,
        "lethalMoves": 2,
        "roundClosers": 47,
        "byModel": [
          {
            "modelId": "regular",
            "played": 298,
            "winRate": 0.4597315436241611
          },
          {
            "modelId": "expert",
            "played": 123,
            "winRate": 0.5609756097560976
          },
          {
            "modelId": "opportunist",
            "played": 113,
            "winRate": 0.36283185840707965
          },
          {
            "modelId": "champion",
            "played": 56,
            "winRate": 0.6428571428571429
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
            "played": 240,
            "winRate": 0.5041666666666667
          },
          {
            "deckPresetId": "starter12",
            "played": 205,
            "winRate": 0.3804878048780488
          },
          {
            "deckPresetId": "starter14",
            "played": 192,
            "winRate": 0.4375
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
        "offered": 3099,
        "played": 613,
        "ignored": 2486,
        "selectionRate": 0.1978057437883188,
        "wins": 294,
        "losses": 319,
        "draws": 0,
        "winRateWhenPlayed": 0.4796084828711256,
        "averageFlips": 0.8417618270799347,
        "failedImpactRate": 0.25862068965517243,
        "averageFlipMargin": 1.501937984496124,
        "averageEffectAmount": 0.8417618270799347,
        "averageDamageDealt": 0.23491027732463296,
        "averageDamageTaken": 0.19575856443719414,
        "averageNetDamage": 0.03915171288743882,
        "lethalMoves": 2,
        "roundClosers": 48,
        "byModel": [
          {
            "modelId": "regular",
            "played": 275,
            "winRate": 0.509090909090909
          },
          {
            "modelId": "opportunist",
            "played": 136,
            "winRate": 0.41911764705882354
          },
          {
            "modelId": "expert",
            "played": 115,
            "winRate": 0.5826086956521739
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.5882352941176471
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
            "played": 228,
            "winRate": 0.4605263157894737
          },
          {
            "deckPresetId": "starter12",
            "played": 210,
            "winRate": 0.45714285714285713
          },
          {
            "deckPresetId": "starter14",
            "played": 175,
            "winRate": 0.5314285714285715
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
        "offered": 3123,
        "played": 612,
        "ignored": 2511,
        "selectionRate": 0.19596541786743515,
        "wins": 332,
        "losses": 280,
        "draws": 0,
        "winRateWhenPlayed": 0.5424836601307189,
        "averageFlips": 0.7581699346405228,
        "failedImpactRate": 0.3464788732394366,
        "averageFlipMargin": 1.6293103448275863,
        "averageEffectAmount": 1.1797385620915033,
        "averageDamageDealt": 0.369281045751634,
        "averageDamageTaken": 0.1388888888888889,
        "averageNetDamage": 0.2303921568627451,
        "lethalMoves": 9,
        "roundClosers": 70,
        "byModel": [
          {
            "modelId": "regular",
            "played": 274,
            "winRate": 0.5291970802919708
          },
          {
            "modelId": "expert",
            "played": 145,
            "winRate": 0.6620689655172414
          },
          {
            "modelId": "opportunist",
            "played": 94,
            "winRate": 0.5106382978723404
          },
          {
            "modelId": "champion",
            "played": 69,
            "winRate": 0.6231884057971014
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
            "played": 219,
            "winRate": 0.5388127853881278
          },
          {
            "deckPresetId": "starter12",
            "played": 216,
            "winRate": 0.5601851851851852
          },
          {
            "deckPresetId": "starter14",
            "played": 177,
            "winRate": 0.5254237288135594
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
        "offered": 2939,
        "played": 612,
        "ignored": 2327,
        "selectionRate": 0.20823409322898945,
        "wins": 309,
        "losses": 303,
        "draws": 0,
        "winRateWhenPlayed": 0.5049019607843137,
        "averageFlips": 0.47549019607843135,
        "failedImpactRate": 0.32325581395348835,
        "averageFlipMargin": 1.4398625429553265,
        "averageEffectAmount": 0.704248366013072,
        "averageDamageDealt": 0.9656862745098039,
        "averageDamageTaken": 0.1388888888888889,
        "averageNetDamage": 0.826797385620915,
        "lethalMoves": 22,
        "roundClosers": 43,
        "byModel": [
          {
            "modelId": "regular",
            "played": 262,
            "winRate": 0.5114503816793893
          },
          {
            "modelId": "expert",
            "played": 115,
            "winRate": 0.6173913043478261
          },
          {
            "modelId": "opportunist",
            "played": 112,
            "winRate": 0.45535714285714285
          },
          {
            "modelId": "champion",
            "played": 85,
            "winRate": 0.6235294117647059
          },
          {
            "modelId": "beginner",
            "played": 38,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 213,
            "winRate": 0.5633802816901409
          },
          {
            "deckPresetId": "starter10",
            "played": 210,
            "winRate": 0.4714285714285714
          },
          {
            "deckPresetId": "starter14",
            "played": 189,
            "winRate": 0.47619047619047616
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
        "offered": 3040,
        "played": 608,
        "ignored": 2432,
        "selectionRate": 0.2,
        "wins": 279,
        "losses": 329,
        "draws": 0,
        "winRateWhenPlayed": 0.4588815789473684,
        "averageFlips": 0.43256578947368424,
        "failedImpactRate": 0.43073593073593075,
        "averageFlipMargin": 1.5475285171102662,
        "averageEffectAmount": 0.5707236842105263,
        "averageDamageDealt": 0.33881578947368424,
        "averageDamageTaken": 0.16776315789473684,
        "averageNetDamage": 0.1710526315789474,
        "lethalMoves": 5,
        "roundClosers": 61,
        "byModel": [
          {
            "modelId": "regular",
            "played": 284,
            "winRate": 0.4788732394366197
          },
          {
            "modelId": "expert",
            "played": 120,
            "winRate": 0.5583333333333333
          },
          {
            "modelId": "opportunist",
            "played": 108,
            "winRate": 0.42592592592592593
          },
          {
            "modelId": "champion",
            "played": 55,
            "winRate": 0.5454545454545454
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
            "played": 231,
            "winRate": 0.48917748917748916
          },
          {
            "deckPresetId": "starter12",
            "played": 199,
            "winRate": 0.4371859296482412
          },
          {
            "deckPresetId": "starter14",
            "played": 178,
            "winRate": 0.4438202247191011
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
        "offered": 1532,
        "played": 474,
        "ignored": 1058,
        "selectionRate": 0.3093994778067885,
        "wins": 251,
        "losses": 223,
        "draws": 0,
        "winRateWhenPlayed": 0.5295358649789029,
        "averageFlips": 0.2489451476793249,
        "failedImpactRate": 0.5203252032520326,
        "averageFlipMargin": 1.6355932203389831,
        "averageEffectAmount": 1.6814345991561181,
        "averageDamageDealt": 0.17088607594936708,
        "averageDamageTaken": 0.08016877637130802,
        "averageNetDamage": 0.09071729957805906,
        "lethalMoves": 1,
        "roundClosers": 30,
        "byModel": [
          {
            "modelId": "regular",
            "played": 211,
            "winRate": 0.5355450236966824
          },
          {
            "modelId": "opportunist",
            "played": 95,
            "winRate": 0.4105263157894737
          },
          {
            "modelId": "expert",
            "played": 93,
            "winRate": 0.5913978494623656
          },
          {
            "modelId": "champion",
            "played": 61,
            "winRate": 0.7213114754098361
          },
          {
            "modelId": "beginner",
            "played": 14,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 252,
            "winRate": 0.5158730158730159
          },
          {
            "deckPresetId": "starter14",
            "played": 222,
            "winRate": 0.545045045045045
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
        "offered": 1680,
        "played": 437,
        "ignored": 1243,
        "selectionRate": 0.26011904761904764,
        "wins": 208,
        "losses": 229,
        "draws": 0,
        "winRateWhenPlayed": 0.4759725400457666,
        "averageFlips": 0.43249427917620137,
        "failedImpactRate": 0.3527397260273973,
        "averageFlipMargin": 1.3756613756613756,
        "averageEffectAmount": 0.8741418764302059,
        "averageDamageDealt": 0.2036613272311213,
        "averageDamageTaken": 0.11899313501144165,
        "averageNetDamage": 0.08466819221967964,
        "lethalMoves": 2,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 205,
            "winRate": 0.4878048780487805
          },
          {
            "modelId": "expert",
            "played": 94,
            "winRate": 0.4787234042553192
          },
          {
            "modelId": "opportunist",
            "played": 86,
            "winRate": 0.4069767441860465
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 0.7368421052631579
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
            "played": 222,
            "winRate": 0.481981981981982
          },
          {
            "deckPresetId": "starter12",
            "played": 215,
            "winRate": 0.4697674418604651
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
        "offered": 1916,
        "played": 383,
        "ignored": 1533,
        "selectionRate": 0.19989561586638832,
        "wins": 203,
        "losses": 180,
        "draws": 0,
        "winRateWhenPlayed": 0.5300261096605744,
        "averageFlips": 0.804177545691906,
        "failedImpactRate": 0.2542372881355932,
        "averageFlipMargin": 1.5129870129870129,
        "averageEffectAmount": 0.3185378590078329,
        "averageDamageDealt": 0.8433420365535248,
        "averageDamageTaken": 0.2506527415143603,
        "averageNetDamage": 0.5926892950391645,
        "lethalMoves": 10,
        "roundClosers": 55,
        "byModel": [
          {
            "modelId": "regular",
            "played": 163,
            "winRate": 0.5521472392638037
          },
          {
            "modelId": "expert",
            "played": 88,
            "winRate": 0.5340909090909091
          },
          {
            "modelId": "opportunist",
            "played": 61,
            "winRate": 0.5081967213114754
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.7291666666666666
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
            "played": 195,
            "winRate": 0.5692307692307692
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
        "offered": 730,
        "played": 229,
        "ignored": 501,
        "selectionRate": 0.3136986301369863,
        "wins": 115,
        "losses": 114,
        "draws": 0,
        "winRateWhenPlayed": 0.5021834061135371,
        "averageFlips": 0.4410480349344978,
        "failedImpactRate": 0.44505494505494503,
        "averageFlipMargin": 1.4356435643564356,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.2314410480349345,
        "averageDamageTaken": 0.13973799126637554,
        "averageNetDamage": 0.09170305676855897,
        "lethalMoves": 1,
        "roundClosers": 19,
        "byModel": [
          {
            "modelId": "regular",
            "played": 97,
            "winRate": 0.5154639175257731
          },
          {
            "modelId": "expert",
            "played": 47,
            "winRate": 0.723404255319149
          },
          {
            "modelId": "opportunist",
            "played": 47,
            "winRate": 0.2553191489361702
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.76
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
            "played": 229,
            "winRate": 0.5021834061135371
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
        "offered": 814,
        "played": 213,
        "ignored": 601,
        "selectionRate": 0.2616707616707617,
        "wins": 106,
        "losses": 107,
        "draws": 0,
        "winRateWhenPlayed": 0.49765258215962443,
        "averageFlips": 0.4507042253521127,
        "failedImpactRate": 0.48936170212765956,
        "averageFlipMargin": 2.5416666666666665,
        "averageEffectAmount": 0.8873239436619719,
        "averageDamageDealt": 0.22065727699530516,
        "averageDamageTaken": 0.15023474178403756,
        "averageNetDamage": 0.0704225352112676,
        "lethalMoves": 0,
        "roundClosers": 15,
        "byModel": [
          {
            "modelId": "regular",
            "played": 110,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "expert",
            "played": 43,
            "winRate": 0.5581395348837209
          },
          {
            "modelId": "opportunist",
            "played": 27,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "champion",
            "played": 20,
            "winRate": 0.65
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
            "played": 213,
            "winRate": 0.49765258215962443
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
        "offered": 835,
        "played": 195,
        "ignored": 640,
        "selectionRate": 0.23353293413173654,
        "wins": 79,
        "losses": 116,
        "draws": 0,
        "winRateWhenPlayed": 0.40512820512820513,
        "averageFlips": 0.18461538461538463,
        "failedImpactRate": 0.64,
        "averageFlipMargin": 1.7777777777777777,
        "averageEffectAmount": 1.0512820512820513,
        "averageDamageDealt": 0.15384615384615385,
        "averageDamageTaken": 0.14358974358974358,
        "averageNetDamage": 0.010256410256410275,
        "lethalMoves": 1,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 92,
            "winRate": 0.4673913043478261
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.48717948717948717
          },
          {
            "modelId": "opportunist",
            "played": 31,
            "winRate": 0.2903225806451613
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0.5333333333333333
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 195,
            "winRate": 0.40512820512820513
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
        "offered": 941,
        "played": 188,
        "ignored": 753,
        "selectionRate": 0.1997874601487779,
        "wins": 100,
        "losses": 88,
        "draws": 0,
        "winRateWhenPlayed": 0.5319148936170213,
        "averageFlips": 0.6436170212765957,
        "failedImpactRate": 0.37628865979381443,
        "averageFlipMargin": 1.3140495867768596,
        "averageEffectAmount": 1.2819148936170213,
        "averageDamageDealt": 0.13829787234042554,
        "averageDamageTaken": 0.047872340425531915,
        "averageNetDamage": 0.09042553191489362,
        "lethalMoves": 1,
        "roundClosers": 9,
        "byModel": [
          {
            "modelId": "regular",
            "played": 80,
            "winRate": 0.5875
          },
          {
            "modelId": "expert",
            "played": 40,
            "winRate": 0.625
          },
          {
            "modelId": "opportunist",
            "played": 36,
            "winRate": 0.4722222222222222
          },
          {
            "modelId": "champion",
            "played": 19,
            "winRate": 0.5789473684210527
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
            "played": 188,
            "winRate": 0.5319148936170213
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
        "offered": 20377,
        "played": 4663,
        "ignored": 15714,
        "selectionRate": 0.22883643323354763,
        "wins": 2397,
        "losses": 2266,
        "draws": 0,
        "winRateWhenPlayed": 0.5140467510186575,
        "averageFlips": 0.47244263349774823,
        "averageDamageDealt": 0.3446279219386661,
        "averageNetDamage": 0.13596397169204374,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 785,
            "winRateWhenPlayed": 0.5821656050955414
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 749,
            "winRateWhenPlayed": 0.507343124165554
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 685,
            "winRateWhenPlayed": 0.527007299270073
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 644,
            "winRateWhenPlayed": 0.4580745341614907
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 612,
            "winRateWhenPlayed": 0.5424836601307189
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
        "offered": 18625,
        "played": 4648,
        "ignored": 13977,
        "selectionRate": 0.24955704697986578,
        "wins": 2389,
        "losses": 2259,
        "draws": 0,
        "winRateWhenPlayed": 0.5139845094664371,
        "averageFlips": 0.4987091222030981,
        "averageDamageDealt": 0.367039586919105,
        "averageNetDamage": 0.1417814113597246,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 796,
            "winRateWhenPlayed": 0.5263819095477387
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 736,
            "winRateWhenPlayed": 0.48097826086956524
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 729,
            "winRateWhenPlayed": 0.49657064471879286
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 712,
            "winRateWhenPlayed": 0.5393258426966292
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 679,
            "winRateWhenPlayed": 0.5493372606774669
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
        "offered": 21169,
        "played": 4395,
        "ignored": 16774,
        "selectionRate": 0.20761490859275356,
        "wins": 2171,
        "losses": 2224,
        "draws": 0,
        "winRateWhenPlayed": 0.4939704209328783,
        "averageFlips": 0.5415244596131968,
        "averageDamageDealt": 0.7337883959044369,
        "averageNetDamage": 0.48759954493742896,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 710,
            "winRateWhenPlayed": 0.48169014084507045
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 671,
            "winRateWhenPlayed": 0.503725782414307
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 646,
            "winRateWhenPlayed": 0.4984520123839009
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 637,
            "winRateWhenPlayed": 0.44427001569858715
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 612,
            "winRateWhenPlayed": 0.5049019607843137
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
        "offered": 8666,
        "played": 2092,
        "ignored": 6574,
        "selectionRate": 0.24140318486037388,
        "wins": 1034,
        "losses": 1058,
        "draws": 0,
        "winRateWhenPlayed": 0.494263862332696,
        "averageFlips": 0.37476099426386233,
        "averageDamageDealt": 0.23852772466539196,
        "averageNetDamage": 0.08891013384321222,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 474,
            "winRateWhenPlayed": 0.5295358649789029
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 437,
            "winRateWhenPlayed": 0.4759725400457666
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 356,
            "winRateWhenPlayed": 0.49157303370786515
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 229,
            "winRateWhenPlayed": 0.5021834061135371
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 213,
            "winRateWhenPlayed": 0.49765258215962443
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
        "offered": 40047,
        "played": 9545,
        "ignored": 30502,
        "selectionRate": 0.23834494468998926,
        "wins": 4896,
        "losses": 4649,
        "draws": 0,
        "winRateWhenPlayed": 0.5129387113672079,
        "averageFlips": 0.47700366684127815,
        "averageDamageDealt": 0.464117338920901,
        "averageNetDamage": 0.23939235201676273,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 529,
            "winRateWhenPlayed": 0.5614366729678639
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 517,
            "winRateWhenPlayed": 0.6092843326885881
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 485,
            "winRateWhenPlayed": 0.5051546391752577
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 473,
            "winRateWhenPlayed": 0.46511627906976744
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 463,
            "winRateWhenPlayed": 0.4946004319654428
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
        "offered": 10245,
        "played": 2260,
        "ignored": 7985,
        "selectionRate": 0.22059541239629088,
        "wins": 1112,
        "losses": 1148,
        "draws": 0,
        "winRateWhenPlayed": 0.4920353982300885,
        "averageFlips": 0.5163716814159292,
        "averageDamageDealt": 0.45530973451327433,
        "averageNetDamage": 0.2907079646017699,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 268,
            "winRateWhenPlayed": 0.5298507462686567
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 267,
            "winRateWhenPlayed": 0.45692883895131087
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 266,
            "winRateWhenPlayed": 0.46616541353383456
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 262,
            "winRateWhenPlayed": 0.46564885496183206
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 261,
            "winRateWhenPlayed": 0.5095785440613027
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
        "offered": 7542,
        "played": 1550,
        "ignored": 5992,
        "selectionRate": 0.20551577830814108,
        "wins": 744,
        "losses": 806,
        "draws": 0,
        "winRateWhenPlayed": 0.48,
        "averageFlips": 0.5058064516129033,
        "averageDamageDealt": 0.2761290322580645,
        "averageNetDamage": 0.09419354838709676,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 266,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 260,
            "winRateWhenPlayed": 0.5076923076923077
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 258,
            "winRateWhenPlayed": 0.4263565891472868
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 257,
            "winRateWhenPlayed": 0.45136186770428016
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 256,
            "winRateWhenPlayed": 0.5
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
        "offered": 4529,
        "played": 941,
        "ignored": 3588,
        "selectionRate": 0.2077721351291676,
        "wins": 479,
        "losses": 462,
        "draws": 0,
        "winRateWhenPlayed": 0.5090329436769394,
        "averageFlips": 0.4261424017003188,
        "averageDamageDealt": 0.46971307120085015,
        "averageNetDamage": 0.2210414452709883,
        "topCards": [
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 257,
            "winRateWhenPlayed": 0.5447470817120622
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 256,
            "winRateWhenPlayed": 0.47265625
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 253,
            "winRateWhenPlayed": 0.4743083003952569
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 175,
            "winRateWhenPlayed": 0.56
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
        "offered": 4143,
        "played": 887,
        "ignored": 3256,
        "selectionRate": 0.2140960656529085,
        "wins": 447,
        "losses": 440,
        "draws": 0,
        "winRateWhenPlayed": 0.503945885005637,
        "averageFlips": 0.5941375422773394,
        "averageDamageDealt": 0.5152198421645998,
        "averageNetDamage": 0.3404735062006765,
        "topCards": [
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 269,
            "winRateWhenPlayed": 0.4944237918215613
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 267,
            "winRateWhenPlayed": 0.49812734082397003
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 264,
            "winRateWhenPlayed": 0.5568181818181818
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 87,
            "winRateWhenPlayed": 0.39080459770114945
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
        "offered": 1305,
        "played": 352,
        "ignored": 953,
        "selectionRate": 0.2697318007662835,
        "wins": 179,
        "losses": 173,
        "draws": 0,
        "winRateWhenPlayed": 0.5085227272727273,
        "averageFlips": 0.41761363636363635,
        "averageDamageDealt": 0.33238636363636365,
        "averageNetDamage": -0.03409090909090906,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 264,
            "winRateWhenPlayed": 0.5113636363636364
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 88,
            "winRateWhenPlayed": 0.5
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
        "offered": 1026,
        "played": 263,
        "ignored": 763,
        "selectionRate": 0.25633528265107214,
        "wins": 134,
        "losses": 129,
        "draws": 0,
        "winRateWhenPlayed": 0.5095057034220533,
        "averageFlips": 0.40304182509505704,
        "averageDamageDealt": 0.5095057034220533,
        "averageNetDamage": 0.13688212927756654,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 263,
            "winRateWhenPlayed": 0.5095057034220533
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
        "offered": 68837,
        "played": 15798,
        "ignored": 53039,
        "selectionRate": 0.22949867077298547,
        "wins": 7991,
        "losses": 7807,
        "draws": 0,
        "winRateWhenPlayed": 0.5058235219648056,
        "averageFlips": 0.4864539815166477,
        "averageDamageDealt": 0.4454361311558425,
        "averageNetDamage": 0.22926952778832765,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 796,
            "winRateWhenPlayed": 0.5263819095477387
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 785,
            "winRateWhenPlayed": 0.5821656050955414
          },
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 749,
            "winRateWhenPlayed": 0.507343124165554
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 736,
            "winRateWhenPlayed": 0.48097826086956524
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 729,
            "winRateWhenPlayed": 0.49657064471879286
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
        "count": 1200,
        "wins": 627,
        "losses": 573,
        "draws": 0,
        "winRate": 0.5225,
        "averageFlips": 0.59,
        "averageDamageDealt": 0.4866666666666667,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 1158,
        "wins": 630,
        "losses": 528,
        "draws": 0,
        "winRate": 0.5440414507772021,
        "averageFlips": 0.6113989637305699,
        "averageDamageDealt": 0.48618307426597585,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 1090,
        "wins": 531,
        "losses": 559,
        "draws": 0,
        "winRate": 0.4871559633027523,
        "averageFlips": 0.47522935779816516,
        "averageDamageDealt": 0.363302752293578,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 1073,
        "wins": 557,
        "losses": 516,
        "draws": 0,
        "winRate": 0.5191053122087604,
        "averageFlips": 0.5041938490214353,
        "averageDamageDealt": 0.45013979496738116,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 1067,
        "wins": 538,
        "losses": 529,
        "draws": 0,
        "winRate": 0.5042174320524836,
        "averageFlips": 0.5126522961574508,
        "averageDamageDealt": 0.38425492033739456,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 1060,
        "wins": 559,
        "losses": 501,
        "draws": 0,
        "winRate": 0.5273584905660378,
        "averageFlips": 0.5226415094339623,
        "averageDamageDealt": 0.47830188679245284,
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
        "wins": 467,
        "losses": 480,
        "draws": 0,
        "winRate": 0.4931362196409715,
        "averageFlips": 0.5934530095036958,
        "averageDamageDealt": 0.7771911298838438,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 883,
        "wins": 432,
        "losses": 451,
        "draws": 0,
        "winRate": 0.48924122310305773,
        "averageFlips": 0.6274065685164213,
        "averageDamageDealt": 0.8029445073612684,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 863,
        "wins": 438,
        "losses": 425,
        "draws": 0,
        "winRate": 0.507531865585168,
        "averageFlips": 0.6164542294322132,
        "averageDamageDealt": 0.7856315179606026,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 862,
        "wins": 543,
        "losses": 319,
        "draws": 0,
        "winRate": 0.6299303944315545,
        "averageFlips": 0.6334106728538283,
        "averageDamageDealt": 0.8561484918793504,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 800,
        "wins": 495,
        "losses": 305,
        "draws": 0,
        "winRate": 0.61875,
        "averageFlips": 0.58625,
        "averageDamageDealt": 0.7975,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 796,
        "wins": 419,
        "losses": 377,
        "draws": 0,
        "winRate": 0.5263819095477387,
        "averageFlips": 0.47613065326633164,
        "averageDamageDealt": 0.19974874371859297,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:owl:gain-shield",
        "kind": "effect",
        "label": "Chaton des ronces -> gain-shield",
        "count": 748,
        "wins": 380,
        "losses": 368,
        "draws": 0,
        "winRate": 0.5080213903743316,
        "averageFlips": 0.3877005347593583,
        "averageDamageDealt": 0.39438502673796794,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 729,
        "wins": 362,
        "losses": 367,
        "draws": 0,
        "winRate": 0.49657064471879286,
        "averageFlips": 0.3223593964334705,
        "averageDamageDealt": 0.23593964334705075,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 717,
        "wins": 417,
        "losses": 300,
        "draws": 0,
        "winRate": 0.5815899581589958,
        "averageFlips": 0.4714086471408647,
        "averageDamageDealt": 0.8256624825662483,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 711,
        "wins": 383,
        "losses": 328,
        "draws": 0,
        "winRate": 0.5386779184247539,
        "averageFlips": 0.36427566807313644,
        "averageDamageDealt": 0.2587904360056259,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 705,
        "wins": 373,
        "losses": 332,
        "draws": 0,
        "winRate": 0.5290780141843971,
        "averageFlips": 0.41702127659574467,
        "averageDamageDealt": 0.8524822695035461,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 685,
        "wins": 323,
        "losses": 362,
        "draws": 0,
        "winRate": 0.47153284671532847,
        "averageFlips": 0.2875912408759124,
        "averageDamageDealt": 0.8759124087591241,
        "averageEffectAmount": 0.654014598540146,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 637,
        "wins": 379,
        "losses": 258,
        "draws": 0,
        "winRate": 0.5949764521193093,
        "averageFlips": 0.12244897959183673,
        "averageDamageDealt": 0.19937205651491366,
        "averageEffectAmount": 1.9984301412872842,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 618,
        "wins": 361,
        "losses": 257,
        "draws": 0,
        "winRate": 0.5841423948220065,
        "averageFlips": 0.3786407766990291,
        "averageDamageDealt": 0.9951456310679612,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+familiar",
        "kind": "friendly-adjacent",
        "label": "human allie + familiar",
        "count": 592,
        "wins": 369,
        "losses": 223,
        "draws": 0,
        "winRate": 0.6233108108108109,
        "averageFlips": 0.44763513513513514,
        "averageDamageDealt": 0.9510135135135135,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:banner-squire:gain-shield",
        "kind": "effect",
        "label": "Ecuyere banniere -> gain-shield",
        "count": 572,
        "wins": 297,
        "losses": 275,
        "draws": 0,
        "winRate": 0.5192307692307693,
        "averageFlips": 0.34440559440559443,
        "averageDamageDealt": 0.6555944055944056,
        "averageEffectAmount": 1.597902097902098,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 540,
        "wins": 290,
        "losses": 250,
        "draws": 0,
        "winRate": 0.5370370370370371,
        "averageFlips": 0.5833333333333334,
        "averageDamageDealt": 1.1851851851851851,
        "averageEffectAmount": 0.3962962962962963,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 528,
        "wins": 277,
        "losses": 251,
        "draws": 0,
        "winRate": 0.5246212121212122,
        "averageFlips": 0.7840909090909091,
        "averageDamageDealt": 0.48295454545454547,
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
        "sampleSize": 3385,
        "id": "card-hornling-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Cornu farceur est ignoree par les bots",
        "detail": "3385 offres, 17% selection, 52% win quand jouee, role anchor.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3347,
        "id": "card-ember-imp-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Diablotin braise est ignoree par les bots",
        "detail": "3347 offres, 16% selection, 51% win quand jouee, role attacker.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 3327,
        "id": "card-heron-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "3327 offres, 17% selection, 51% win quand jouee, role connector.",
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
        "detail": "2134 offres, 17% selection, 49% win quand jouee, role connector.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "id": "combo-effect:pact-sprite:boost-self",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 528,
        "title": "Lutin a pacte -> boost-self ressort comme combo",
        "detail": "528 occurrences, 52% win, 0.78 flips, 0.48 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "deck-turn-spread",
      "severity": "watch",
      "title": "La taille de deck change fortement le rythme",
      "detail": "Ecart de 8.61 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    },
    {
      "id": "diagnostic-card-hornling-ignored",
      "severity": "watch",
      "title": "Cornu farceur est ignoree par les bots",
      "detail": "3385 offres, 17% selection, 52% win quand jouee, role anchor. Confiance high, echantillon 3385.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-ember-imp-ignored",
      "severity": "watch",
      "title": "Diablotin braise est ignoree par les bots",
      "detail": "3347 offres, 16% selection, 51% win quand jouee, role attacker. Confiance high, echantillon 3347.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "watch",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "3327 offres, 17% selection, 51% win quand jouee, role connector. Confiance high, echantillon 3327.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-gear-monk-ignored",
      "severity": "watch",
      "title": "Moine engrene est ignoree par les bots",
      "detail": "2134 offres, 17% selection, 49% win quand jouee, role connector. Confiance high, echantillon 2134.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    }
  ]
};
