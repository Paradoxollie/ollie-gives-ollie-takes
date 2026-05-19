import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260519-112158",
  "generatedAt": "2026-05-19T11:21:58.402Z",
  "config": {
    "matchesPerPairing": 32,
    "seed": 6,
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
      "games": 96,
      "wins": 0,
      "losses": 96,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -20.791666666666668
    },
    {
      "modelId": "opportunist",
      "games": 192,
      "wins": 111,
      "losses": 81,
      "draws": 0,
      "winRate": 0.578125,
      "averageHpEdge": 6.270833333333333
    },
    {
      "modelId": "regular",
      "games": 192,
      "wins": 98,
      "losses": 94,
      "draws": 0,
      "winRate": 0.5104166666666666,
      "averageHpEdge": 0.71875
    },
    {
      "modelId": "expert",
      "games": 192,
      "wins": 117,
      "losses": 75,
      "draws": 0,
      "winRate": 0.609375,
      "averageHpEdge": 2.3802083333333335
    },
    {
      "modelId": "champion",
      "games": 96,
      "wins": 58,
      "losses": 38,
      "draws": 0,
      "winRate": 0.6041666666666666,
      "averageHpEdge": 2.0520833333333335
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayerWinRate": 0.53125,
      "averages": {
        "turns": 49.84375,
        "rounds": 5.5625,
        "flipsPerMatch": 18.71875,
        "flipsPerTurn": 0.3755485893416928,
        "reshuffles": 8.3125,
        "deadTurns": 0,
        "finalHpDifference": 7.46875
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
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5625,
      "averages": {
        "turns": 52.8125,
        "rounds": 5.9375,
        "flipsPerMatch": 18.03125,
        "flipsPerTurn": 0.34142011834319524,
        "reshuffles": 6.0625,
        "deadTurns": 0,
        "finalHpDifference": 7.3125
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
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayerWinRate": 0.71875,
      "averages": {
        "turns": 51.90625,
        "rounds": 5.78125,
        "flipsPerMatch": 16.78125,
        "flipsPerTurn": 0.32329921733895245,
        "reshuffles": 4.3125,
        "deadTurns": 0,
        "finalHpDifference": 6.03125
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (72%)."
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
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "enemy": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 32,
          "wins": 0,
          "losses": 32,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -21.15625
        },
        {
          "modelId": "opportunist",
          "games": 32,
          "wins": 32,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.15625
        }
      ],
      "averages": {
        "turns": 33.6875,
        "rounds": 3.6875,
        "flipsPerMatch": 19.5,
        "flipsPerTurn": 0.5788497217068646,
        "reshuffles": 4.53125,
        "deadTurns": 0.59375,
        "finalHpDifference": 21.15625
      },
      "deadTurnFrequency": 0.017625231910946195
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "enemy": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "overallStartingPlayerWinRate": 0.5625
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 32,
          "wins": 4,
          "losses": 28,
          "draws": 0,
          "winRate": 0.125,
          "averageHpEdge": -9.59375
        },
        {
          "modelId": "regular",
          "games": 32,
          "wins": 28,
          "losses": 4,
          "draws": 0,
          "winRate": 0.875,
          "averageHpEdge": 9.59375
        }
      ],
      "averages": {
        "turns": 45.09375,
        "rounds": 5.0625,
        "flipsPerMatch": 27.9375,
        "flipsPerTurn": 0.6195426195426196,
        "reshuffles": 6.96875,
        "deadTurns": 0.25,
        "finalHpDifference": 10.28125
      },
      "deadTurnFrequency": 0.005544005544005544
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 7,
          "winRate": 0.4375
        },
        "enemy": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 32,
          "wins": 8,
          "losses": 24,
          "draws": 0,
          "winRate": 0.25,
          "averageHpEdge": -5
        },
        {
          "modelId": "expert",
          "games": 32,
          "wins": 24,
          "losses": 8,
          "draws": 0,
          "winRate": 0.75,
          "averageHpEdge": 5
        }
      ],
      "averages": {
        "turns": 48.875,
        "rounds": 5.46875,
        "flipsPerMatch": 21.03125,
        "flipsPerTurn": 0.430306905370844,
        "reshuffles": 8.1875,
        "deadTurns": 0,
        "finalHpDifference": 6.875
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "enemy": {
          "games": 16,
          "wins": 10,
          "winRate": 0.625
        },
        "overallStartingPlayerWinRate": 0.59375
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 32,
          "wins": 9,
          "losses": 23,
          "draws": 0,
          "winRate": 0.28125,
          "averageHpEdge": -3.875
        },
        {
          "modelId": "champion",
          "games": 32,
          "wins": 23,
          "losses": 9,
          "draws": 0,
          "winRate": 0.71875,
          "averageHpEdge": 3.875
        }
      ],
      "averages": {
        "turns": 49.09375,
        "rounds": 5.5,
        "flipsPerMatch": 27.46875,
        "flipsPerTurn": 0.5595162316995544,
        "reshuffles": 8.34375,
        "deadTurns": 0,
        "finalHpDifference": 7.3125
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "enemy": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 32,
          "wins": 0,
          "losses": 32,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -20.09375
        },
        {
          "modelId": "opportunist",
          "games": 32,
          "wins": 32,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.09375
        }
      ],
      "averages": {
        "turns": 33.53125,
        "rounds": 3.8125,
        "flipsPerMatch": 19.5625,
        "flipsPerTurn": 0.5834109972041006,
        "reshuffles": 3.3125,
        "deadTurns": 0.0625,
        "finalHpDifference": 20.09375
      },
      "deadTurnFrequency": 0.001863932898415657
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "enemy": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "overallStartingPlayerWinRate": 0.53125
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 32,
          "wins": 7,
          "losses": 25,
          "draws": 0,
          "winRate": 0.21875,
          "averageHpEdge": -6
        },
        {
          "modelId": "regular",
          "games": 32,
          "wins": 25,
          "losses": 7,
          "draws": 0,
          "winRate": 0.78125,
          "averageHpEdge": 6
        }
      ],
      "averages": {
        "turns": 51.4375,
        "rounds": 5.8125,
        "flipsPerMatch": 30.5625,
        "flipsPerTurn": 0.5941676792223572,
        "reshuffles": 6.03125,
        "deadTurns": 0,
        "finalHpDifference": 8.125
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "enemy": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.53125
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 32,
          "wins": 3,
          "losses": 29,
          "draws": 0,
          "winRate": 0.09375,
          "averageHpEdge": -7.8125
        },
        {
          "modelId": "expert",
          "games": 32,
          "wins": 29,
          "losses": 3,
          "draws": 0,
          "winRate": 0.90625,
          "averageHpEdge": 7.8125
        }
      ],
      "averages": {
        "turns": 52.0625,
        "rounds": 5.875,
        "flipsPerMatch": 21.15625,
        "flipsPerTurn": 0.4063625450180072,
        "reshuffles": 6,
        "deadTurns": 0,
        "finalHpDifference": 9.0625
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 4,
          "winRate": 0.25
        },
        "enemy": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "overallStartingPlayerWinRate": 0.40625
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 32,
          "wins": 17,
          "losses": 15,
          "draws": 0,
          "winRate": 0.53125,
          "averageHpEdge": 0.09375
        },
        {
          "modelId": "champion",
          "games": 32,
          "wins": 15,
          "losses": 17,
          "draws": 0,
          "winRate": 0.46875,
          "averageHpEdge": -0.09375
        }
      ],
      "averages": {
        "turns": 50.375,
        "rounds": 5.6875,
        "flipsPerMatch": 28.4375,
        "flipsPerTurn": 0.5645161290322581,
        "reshuffles": 5.4375,
        "deadTurns": 0,
        "finalHpDifference": 7.28125
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "enemy": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 32,
          "wins": 0,
          "losses": 32,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -21.125
        },
        {
          "modelId": "opportunist",
          "games": 32,
          "wins": 32,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.125
        }
      ],
      "averages": {
        "turns": 32.09375,
        "rounds": 3.65625,
        "flipsPerMatch": 18.84375,
        "flipsPerTurn": 0.5871470301850049,
        "reshuffles": 2.40625,
        "deadTurns": 0,
        "finalHpDifference": 21.125
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "enemy": {
          "games": 16,
          "wins": 9,
          "winRate": 0.5625
        },
        "overallStartingPlayerWinRate": 0.5625
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 32,
          "wins": 4,
          "losses": 28,
          "draws": 0,
          "winRate": 0.125,
          "averageHpEdge": -9.15625
        },
        {
          "modelId": "regular",
          "games": 32,
          "wins": 28,
          "losses": 4,
          "draws": 0,
          "winRate": 0.875,
          "averageHpEdge": 9.15625
        }
      ],
      "averages": {
        "turns": 46.96875,
        "rounds": 5.34375,
        "flipsPerMatch": 27.125,
        "flipsPerTurn": 0.5775116433799069,
        "reshuffles": 4.125,
        "deadTurns": 0,
        "finalHpDifference": 9.90625
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "enemy": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 32,
          "wins": 6,
          "losses": 26,
          "draws": 0,
          "winRate": 0.1875,
          "averageHpEdge": -7.625
        },
        {
          "modelId": "expert",
          "games": 32,
          "wins": 26,
          "losses": 6,
          "draws": 0,
          "winRate": 0.8125,
          "averageHpEdge": 7.625
        }
      ],
      "averages": {
        "turns": 50.4375,
        "rounds": 5.625,
        "flipsPerMatch": 20.3125,
        "flipsPerTurn": 0.40272614622057,
        "reshuffles": 4.40625,
        "deadTurns": 0,
        "finalHpDifference": 8.75
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 32,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 16,
          "wins": 10,
          "winRate": 0.625
        },
        "enemy": {
          "games": 16,
          "wins": 8,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5625
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 32,
          "wins": 12,
          "losses": 20,
          "draws": 0,
          "winRate": 0.375,
          "averageHpEdge": -2.375
        },
        {
          "modelId": "champion",
          "games": 32,
          "wins": 20,
          "losses": 12,
          "draws": 0,
          "winRate": 0.625,
          "averageHpEdge": 2.375
        }
      ],
      "averages": {
        "turns": 50.09375,
        "rounds": 5.59375,
        "flipsPerMatch": 28.0625,
        "flipsPerTurn": 0.5601996257018091,
        "reshuffles": 3.9375,
        "deadTurns": 0,
        "finalHpDifference": 6.9375
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
        "offered": 4561,
        "played": 751,
        "ignored": 3810,
        "selectionRate": 0.16465687349265512,
        "wins": 370,
        "losses": 381,
        "draws": 0,
        "winRateWhenPlayed": 0.49267643142476697,
        "averageFlips": 0.7137150466045273,
        "failedImpactRate": 0.26068965517241377,
        "averageFlipMargin": 1.4179104477611941,
        "averageEffectAmount": 0.563249001331558,
        "averageDamageDealt": 0.4580559254327563,
        "averageDamageTaken": 0.2623169107856192,
        "averageNetDamage": 0.1957390146471371,
        "lethalMoves": 13,
        "roundClosers": 78,
        "byModel": [
          {
            "modelId": "regular",
            "played": 334,
            "winRate": 0.46107784431137727
          },
          {
            "modelId": "expert",
            "played": 147,
            "winRate": 0.6122448979591837
          },
          {
            "modelId": "opportunist",
            "played": 135,
            "winRate": 0.6296296296296297
          },
          {
            "modelId": "champion",
            "played": 73,
            "winRate": 0.5616438356164384
          },
          {
            "modelId": "beginner",
            "played": 62,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 311,
            "winRate": 0.5337620578778135
          },
          {
            "deckPresetId": "starter12",
            "played": 234,
            "winRate": 0.48717948717948717
          },
          {
            "deckPresetId": "starter14",
            "played": 206,
            "winRate": 0.4368932038834951
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
        "offered": 4385,
        "played": 739,
        "ignored": 3646,
        "selectionRate": 0.1685290763968073,
        "wins": 374,
        "losses": 365,
        "draws": 0,
        "winRateWhenPlayed": 0.5060893098782138,
        "averageFlips": 0.4939106901217862,
        "failedImpactRate": 0.3986820428336079,
        "averageFlipMargin": 1.2821917808219179,
        "averageEffectAmount": 0.29499323410013534,
        "averageDamageDealt": 0.32070365358592695,
        "averageDamageTaken": 0.2584573748308525,
        "averageNetDamage": 0.062246278755074436,
        "lethalMoves": 3,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 303,
            "winRate": 0.5181518151815182
          },
          {
            "modelId": "expert",
            "played": 169,
            "winRate": 0.6390532544378699
          },
          {
            "modelId": "opportunist",
            "played": 106,
            "winRate": 0.46226415094339623
          },
          {
            "modelId": "champion",
            "played": 90,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 71,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 272,
            "winRate": 0.47794117647058826
          },
          {
            "deckPresetId": "starter12",
            "played": 259,
            "winRate": 0.4942084942084942
          },
          {
            "deckPresetId": "starter14",
            "played": 208,
            "winRate": 0.5576923076923077
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
        "offered": 4387,
        "played": 733,
        "ignored": 3654,
        "selectionRate": 0.1670845680419421,
        "wins": 350,
        "losses": 383,
        "draws": 0,
        "winRateWhenPlayed": 0.47748976807639837,
        "averageFlips": 0.4024556616643929,
        "failedImpactRate": 0.5132013201320133,
        "averageFlipMargin": 1.5932203389830508,
        "averageEffectAmount": 0.0286493860845839,
        "averageDamageDealt": 0.451568894952251,
        "averageDamageTaken": 0.2673942701227831,
        "averageNetDamage": 0.1841746248294679,
        "lethalMoves": 11,
        "roundClosers": 71,
        "byModel": [
          {
            "modelId": "regular",
            "played": 327,
            "winRate": 0.4709480122324159
          },
          {
            "modelId": "expert",
            "played": 170,
            "winRate": 0.6176470588235294
          },
          {
            "modelId": "opportunist",
            "played": 103,
            "winRate": 0.44660194174757284
          },
          {
            "modelId": "champion",
            "played": 78,
            "winRate": 0.5769230769230769
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
            "played": 261,
            "winRate": 0.5057471264367817
          },
          {
            "deckPresetId": "starter12",
            "played": 251,
            "winRate": 0.450199203187251
          },
          {
            "deckPresetId": "starter14",
            "played": 221,
            "winRate": 0.4751131221719457
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
        "offered": 4780,
        "played": 710,
        "ignored": 4070,
        "selectionRate": 0.14853556485355648,
        "wins": 342,
        "losses": 368,
        "draws": 0,
        "winRateWhenPlayed": 0.48169014084507045,
        "averageFlips": 0.5859154929577465,
        "failedImpactRate": 0.4165497896213184,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 0.15492957746478872,
        "averageDamageDealt": 0.6816901408450704,
        "averageDamageTaken": 0.3591549295774648,
        "averageNetDamage": 0.3225352112676056,
        "lethalMoves": 16,
        "roundClosers": 106,
        "byModel": [
          {
            "modelId": "regular",
            "played": 304,
            "winRate": 0.5032894736842105
          },
          {
            "modelId": "expert",
            "played": 169,
            "winRate": 0.591715976331361
          },
          {
            "modelId": "opportunist",
            "played": 95,
            "winRate": 0.4421052631578947
          },
          {
            "modelId": "champion",
            "played": 84,
            "winRate": 0.5595238095238095
          },
          {
            "modelId": "beginner",
            "played": 58,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 261,
            "winRate": 0.45977011494252873
          },
          {
            "deckPresetId": "starter10",
            "played": 253,
            "winRate": 0.49407114624505927
          },
          {
            "deckPresetId": "starter14",
            "played": 196,
            "winRate": 0.49489795918367346
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
        "offered": 4994,
        "played": 600,
        "ignored": 4394,
        "selectionRate": 0.12014417300760913,
        "wins": 289,
        "losses": 311,
        "draws": 0,
        "winRateWhenPlayed": 0.4816666666666667,
        "averageFlips": 0.6033333333333334,
        "failedImpactRate": 0.3442028985507246,
        "averageFlipMargin": 1.1629834254143647,
        "averageEffectAmount": 0.4266666666666667,
        "averageDamageDealt": 0.395,
        "averageDamageTaken": 0.22833333333333333,
        "averageNetDamage": 0.16666666666666669,
        "lethalMoves": 6,
        "roundClosers": 53,
        "byModel": [
          {
            "modelId": "regular",
            "played": 204,
            "winRate": 0.47058823529411764
          },
          {
            "modelId": "expert",
            "played": 145,
            "winRate": 0.5724137931034483
          },
          {
            "modelId": "champion",
            "played": 98,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "opportunist",
            "played": 97,
            "winRate": 0.4845360824742268
          },
          {
            "modelId": "beginner",
            "played": 56,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 229,
            "winRate": 0.48034934497816595
          },
          {
            "deckPresetId": "starter12",
            "played": 193,
            "winRate": 0.44041450777202074
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
        "offered": 1269,
        "played": 202,
        "ignored": 1067,
        "selectionRate": 0.15918045705279749,
        "wins": 85,
        "losses": 117,
        "draws": 0,
        "winRateWhenPlayed": 0.4207920792079208,
        "averageFlips": 0.2623762376237624,
        "failedImpactRate": 0.5655737704918032,
        "averageFlipMargin": 1.7547169811320755,
        "averageEffectAmount": 0.3217821782178218,
        "averageDamageDealt": 0.36633663366336633,
        "averageDamageTaken": 0.12871287128712872,
        "averageNetDamage": 0.2376237623762376,
        "lethalMoves": 1,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 96,
            "winRate": 0.40625
          },
          {
            "modelId": "expert",
            "played": 52,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 22,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "beginner",
            "played": 19,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0.6153846153846154
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 202,
            "winRate": 0.4207920792079208
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
        "offered": 2887,
        "played": 1168,
        "ignored": 1719,
        "selectionRate": 0.4045722202978871,
        "wins": 663,
        "losses": 505,
        "draws": 0,
        "winRateWhenPlayed": 0.5676369863013698,
        "averageFlips": 0.2928082191780822,
        "failedImpactRate": 0.49107142857142855,
        "averageFlipMargin": 1.8245614035087718,
        "averageEffectAmount": 1.5402397260273972,
        "averageDamageDealt": 0.3381849315068493,
        "averageDamageTaken": 0.19777397260273974,
        "averageNetDamage": 0.14041095890410957,
        "lethalMoves": 10,
        "roundClosers": 97,
        "byModel": [
          {
            "modelId": "regular",
            "played": 494,
            "winRate": 0.5607287449392713
          },
          {
            "modelId": "expert",
            "played": 255,
            "winRate": 0.6941176470588235
          },
          {
            "modelId": "opportunist",
            "played": 217,
            "winRate": 0.5207373271889401
          },
          {
            "modelId": "champion",
            "played": 138,
            "winRate": 0.6956521739130435
          },
          {
            "modelId": "beginner",
            "played": 64,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 453,
            "winRate": 0.6004415011037527
          },
          {
            "deckPresetId": "starter12",
            "played": 394,
            "winRate": 0.5380710659898477
          },
          {
            "deckPresetId": "starter14",
            "played": 321,
            "winRate": 0.557632398753894
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
        "offered": 3018,
        "played": 1143,
        "ignored": 1875,
        "selectionRate": 0.378727634194831,
        "wins": 591,
        "losses": 552,
        "draws": 0,
        "winRateWhenPlayed": 0.5170603674540682,
        "averageFlips": 0.38232720909886264,
        "failedImpactRate": 0.49303944315545245,
        "averageFlipMargin": 1.7208237986270023,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.3438320209973753,
        "averageDamageTaken": 0.2440944881889764,
        "averageNetDamage": 0.09973753280839892,
        "lethalMoves": 7,
        "roundClosers": 93,
        "byModel": [
          {
            "modelId": "regular",
            "played": 535,
            "winRate": 0.5345794392523364
          },
          {
            "modelId": "expert",
            "played": 228,
            "winRate": 0.6008771929824561
          },
          {
            "modelId": "opportunist",
            "played": 194,
            "winRate": 0.5103092783505154
          },
          {
            "modelId": "champion",
            "played": 120,
            "winRate": 0.575
          },
          {
            "modelId": "beginner",
            "played": 66,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 441,
            "winRate": 0.4852607709750567
          },
          {
            "deckPresetId": "starter12",
            "played": 390,
            "winRate": 0.5487179487179488
          },
          {
            "deckPresetId": "starter14",
            "played": 312,
            "winRate": 0.5224358974358975
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
        "offered": 2948,
        "played": 1142,
        "ignored": 1806,
        "selectionRate": 0.38738127544097695,
        "wins": 546,
        "losses": 596,
        "draws": 0,
        "winRateWhenPlayed": 0.47810858143607704,
        "averageFlips": 0.340630472854641,
        "failedImpactRate": 0.5173697270471465,
        "averageFlipMargin": 1.8920308483290489,
        "averageEffectAmount": 0.7819614711033275,
        "averageDamageDealt": 1.075306479859895,
        "averageDamageTaken": 0.23905429071803852,
        "averageNetDamage": 0.8362521891418565,
        "lethalMoves": 22,
        "roundClosers": 79,
        "byModel": [
          {
            "modelId": "regular",
            "played": 482,
            "winRate": 0.495850622406639
          },
          {
            "modelId": "expert",
            "played": 268,
            "winRate": 0.5671641791044776
          },
          {
            "modelId": "opportunist",
            "played": 184,
            "winRate": 0.45652173913043476
          },
          {
            "modelId": "champion",
            "played": 131,
            "winRate": 0.5419847328244275
          },
          {
            "modelId": "beginner",
            "played": 77,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 433,
            "winRate": 0.47575057736720555
          },
          {
            "deckPresetId": "starter12",
            "played": 400,
            "winRate": 0.4775
          },
          {
            "deckPresetId": "starter14",
            "played": 309,
            "winRate": 0.48220064724919093
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
        "offered": 3618,
        "played": 1096,
        "ignored": 2522,
        "selectionRate": 0.3029297954671089,
        "wins": 545,
        "losses": 551,
        "draws": 0,
        "winRateWhenPlayed": 0.4972627737226277,
        "averageFlips": 0.5437956204379562,
        "failedImpactRate": 0.5197421434327155,
        "averageFlipMargin": 1.4899328859060403,
        "averageEffectAmount": 0.7271897810218978,
        "averageDamageDealt": 1.27007299270073,
        "averageDamageTaken": 0.3841240875912409,
        "averageNetDamage": 0.8859489051094891,
        "lethalMoves": 23,
        "roundClosers": 135,
        "byModel": [
          {
            "modelId": "regular",
            "played": 450,
            "winRate": 0.4911111111111111
          },
          {
            "modelId": "expert",
            "played": 237,
            "winRate": 0.5949367088607594
          },
          {
            "modelId": "opportunist",
            "played": 214,
            "winRate": 0.5093457943925234
          },
          {
            "modelId": "champion",
            "played": 122,
            "winRate": 0.6065573770491803
          },
          {
            "modelId": "beginner",
            "played": 73,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 433,
            "winRate": 0.5080831408775982
          },
          {
            "deckPresetId": "starter12",
            "played": 362,
            "winRate": 0.4889502762430939
          },
          {
            "deckPresetId": "starter14",
            "played": 301,
            "winRate": 0.49169435215946844
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
        "offered": 3508,
        "played": 1071,
        "ignored": 2437,
        "selectionRate": 0.30530216647662484,
        "wins": 558,
        "losses": 513,
        "draws": 0,
        "winRateWhenPlayed": 0.5210084033613446,
        "averageFlips": 0.33613445378151263,
        "failedImpactRate": 0.5652173913043478,
        "averageFlipMargin": 1.961111111111111,
        "averageEffectAmount": 0.5592903828197946,
        "averageDamageDealt": 0.5564892623716153,
        "averageDamageTaken": 0.2791783380018674,
        "averageNetDamage": 0.2773109243697479,
        "lethalMoves": 19,
        "roundClosers": 142,
        "byModel": [
          {
            "modelId": "regular",
            "played": 494,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "expert",
            "played": 236,
            "winRate": 0.6186440677966102
          },
          {
            "modelId": "opportunist",
            "played": 157,
            "winRate": 0.45222929936305734
          },
          {
            "modelId": "champion",
            "played": 118,
            "winRate": 0.635593220338983
          },
          {
            "modelId": "beginner",
            "played": 66,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 418,
            "winRate": 0.5191387559808612
          },
          {
            "deckPresetId": "starter12",
            "played": 366,
            "winRate": 0.5081967213114754
          },
          {
            "deckPresetId": "starter14",
            "played": 287,
            "winRate": 0.5400696864111498
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
        "offered": 3558,
        "played": 1071,
        "ignored": 2487,
        "selectionRate": 0.30101180438448566,
        "wins": 504,
        "losses": 567,
        "draws": 0,
        "winRateWhenPlayed": 0.47058823529411764,
        "averageFlips": 0.5704948646125116,
        "failedImpactRate": 0.37843336724313326,
        "averageFlipMargin": 2.657937806873977,
        "averageEffectAmount": 0.738562091503268,
        "averageDamageDealt": 0.44724556489262374,
        "averageDamageTaken": 0.30158730158730157,
        "averageNetDamage": 0.14565826330532217,
        "lethalMoves": 14,
        "roundClosers": 115,
        "byModel": [
          {
            "modelId": "regular",
            "played": 485,
            "winRate": 0.4762886597938144
          },
          {
            "modelId": "opportunist",
            "played": 213,
            "winRate": 0.4460093896713615
          },
          {
            "modelId": "expert",
            "played": 201,
            "winRate": 0.5970149253731343
          },
          {
            "modelId": "champion",
            "played": 100,
            "winRate": 0.58
          },
          {
            "modelId": "beginner",
            "played": 72,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 397,
            "winRate": 0.5088161209068011
          },
          {
            "deckPresetId": "starter12",
            "played": 370,
            "winRate": 0.44594594594594594
          },
          {
            "deckPresetId": "starter14",
            "played": 304,
            "winRate": 0.4506578947368421
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
        "offered": 4000,
        "played": 1039,
        "ignored": 2961,
        "selectionRate": 0.25975,
        "wins": 607,
        "losses": 432,
        "draws": 0,
        "winRateWhenPlayed": 0.5842155919153031,
        "averageFlips": 0.5495668912415784,
        "failedImpactRate": 0.4809090909090909,
        "averageFlipMargin": 1.574430823117338,
        "averageEffectAmount": 1.697786333012512,
        "averageDamageDealt": 0.9230028873917228,
        "averageDamageTaken": 0.2714148219441771,
        "averageNetDamage": 0.6515880654475457,
        "lethalMoves": 30,
        "roundClosers": 217,
        "byModel": [
          {
            "modelId": "regular",
            "played": 430,
            "winRate": 0.5697674418604651
          },
          {
            "modelId": "expert",
            "played": 229,
            "winRate": 0.6943231441048034
          },
          {
            "modelId": "opportunist",
            "played": 192,
            "winRate": 0.6145833333333334
          },
          {
            "modelId": "champion",
            "played": 123,
            "winRate": 0.6910569105691057
          },
          {
            "modelId": "beginner",
            "played": 65,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 398,
            "winRate": 0.5728643216080402
          },
          {
            "deckPresetId": "starter12",
            "played": 358,
            "winRate": 0.6145251396648045
          },
          {
            "deckPresetId": "starter14",
            "played": 283,
            "winRate": 0.5618374558303887
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
        "offered": 3882,
        "played": 1002,
        "ignored": 2880,
        "selectionRate": 0.2581143740340031,
        "wins": 495,
        "losses": 507,
        "draws": 0,
        "winRateWhenPlayed": 0.4940119760479042,
        "averageFlips": 0.49001996007984033,
        "failedImpactRate": 0.42370892018779344,
        "averageFlipMargin": 1.6822810590631365,
        "averageEffectAmount": 0.593812375249501,
        "averageDamageDealt": 0.5169660678642715,
        "averageDamageTaken": 0.36726546906187624,
        "averageNetDamage": 0.14970059880239522,
        "lethalMoves": 10,
        "roundClosers": 123,
        "byModel": [
          {
            "modelId": "regular",
            "played": 452,
            "winRate": 0.5154867256637168
          },
          {
            "modelId": "expert",
            "played": 203,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 182,
            "winRate": 0.5054945054945055
          },
          {
            "modelId": "champion",
            "played": 94,
            "winRate": 0.574468085106383
          },
          {
            "modelId": "beginner",
            "played": 71,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 398,
            "winRate": 0.46733668341708545
          },
          {
            "deckPresetId": "starter12",
            "played": 323,
            "winRate": 0.5015479876160991
          },
          {
            "deckPresetId": "starter14",
            "played": 281,
            "winRate": 0.5231316725978647
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
        "offered": 3605,
        "played": 987,
        "ignored": 2618,
        "selectionRate": 0.2737864077669903,
        "wins": 463,
        "losses": 524,
        "draws": 0,
        "winRateWhenPlayed": 0.4690982776089159,
        "averageFlips": 0.46403242147923,
        "failedImpactRate": 0.42963885429638854,
        "averageFlipMargin": 1.705240174672489,
        "averageEffectAmount": 0.46403242147923,
        "averageDamageDealt": 0.3525835866261398,
        "averageDamageTaken": 0.22695035460992907,
        "averageNetDamage": 0.12563323201621074,
        "lethalMoves": 11,
        "roundClosers": 81,
        "byModel": [
          {
            "modelId": "regular",
            "played": 460,
            "winRate": 0.47391304347826085
          },
          {
            "modelId": "expert",
            "played": 183,
            "winRate": 0.5683060109289617
          },
          {
            "modelId": "opportunist",
            "played": 172,
            "winRate": 0.5174418604651163
          },
          {
            "modelId": "champion",
            "played": 98,
            "winRate": 0.5306122448979592
          },
          {
            "modelId": "beginner",
            "played": 74,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 370,
            "winRate": 0.42702702702702705
          },
          {
            "deckPresetId": "starter12",
            "played": 343,
            "winRate": 0.46938775510204084
          },
          {
            "deckPresetId": "starter14",
            "played": 274,
            "winRate": 0.5255474452554745
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
        "offered": 4010,
        "played": 970,
        "ignored": 3040,
        "selectionRate": 0.24189526184538654,
        "wins": 476,
        "losses": 494,
        "draws": 0,
        "winRateWhenPlayed": 0.49072164948453606,
        "averageFlips": 0.49690721649484537,
        "failedImpactRate": 0.4064039408866995,
        "averageFlipMargin": 1.7074688796680497,
        "averageEffectAmount": 0.5670103092783505,
        "averageDamageDealt": 0.545360824742268,
        "averageDamageTaken": 0.32268041237113404,
        "averageNetDamage": 0.22268041237113395,
        "lethalMoves": 9,
        "roundClosers": 120,
        "byModel": [
          {
            "modelId": "regular",
            "played": 423,
            "winRate": 0.4940898345153664
          },
          {
            "modelId": "expert",
            "played": 209,
            "winRate": 0.583732057416268
          },
          {
            "modelId": "opportunist",
            "played": 169,
            "winRate": 0.5088757396449705
          },
          {
            "modelId": "champion",
            "played": 103,
            "winRate": 0.5728155339805825
          },
          {
            "modelId": "beginner",
            "played": 66,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 371,
            "winRate": 0.46900269541778977
          },
          {
            "deckPresetId": "starter12",
            "played": 322,
            "winRate": 0.5031055900621118
          },
          {
            "deckPresetId": "starter14",
            "played": 277,
            "winRate": 0.5054151624548736
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
        "offered": 3938,
        "played": 962,
        "ignored": 2976,
        "selectionRate": 0.24428643981716608,
        "wins": 514,
        "losses": 448,
        "draws": 0,
        "winRateWhenPlayed": 0.5343035343035343,
        "averageFlips": 0.7827442827442828,
        "failedImpactRate": 0.3014842300556586,
        "averageFlipMargin": 1.5803452855245683,
        "averageEffectAmount": 0.7806652806652806,
        "averageDamageDealt": 0.4230769230769231,
        "averageDamageTaken": 0.31704781704781704,
        "averageNetDamage": 0.10602910602910603,
        "lethalMoves": 14,
        "roundClosers": 100,
        "byModel": [
          {
            "modelId": "regular",
            "played": 421,
            "winRate": 0.5534441805225653
          },
          {
            "modelId": "expert",
            "played": 199,
            "winRate": 0.5879396984924623
          },
          {
            "modelId": "opportunist",
            "played": 190,
            "winRate": 0.5421052631578948
          },
          {
            "modelId": "champion",
            "played": 88,
            "winRate": 0.6931818181818182
          },
          {
            "modelId": "beginner",
            "played": 64,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 389,
            "winRate": 0.5501285347043702
          },
          {
            "deckPresetId": "starter12",
            "played": 306,
            "winRate": 0.5686274509803921
          },
          {
            "deckPresetId": "starter14",
            "played": 267,
            "winRate": 0.47191011235955055
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
        "offered": 4144,
        "played": 955,
        "ignored": 3189,
        "selectionRate": 0.23045366795366795,
        "wins": 490,
        "losses": 465,
        "draws": 0,
        "winRateWhenPlayed": 0.5130890052356021,
        "averageFlips": 0.45549738219895286,
        "failedImpactRate": 0.4858156028368794,
        "averageFlipMargin": 1.4482758620689655,
        "averageEffectAmount": 0.5539267015706806,
        "averageDamageDealt": 0.8544502617801047,
        "averageDamageTaken": 0.44712041884816756,
        "averageNetDamage": 0.4073298429319372,
        "lethalMoves": 16,
        "roundClosers": 194,
        "byModel": [
          {
            "modelId": "regular",
            "played": 408,
            "winRate": 0.49019607843137253
          },
          {
            "modelId": "expert",
            "played": 206,
            "winRate": 0.6067961165048543
          },
          {
            "modelId": "opportunist",
            "played": 170,
            "winRate": 0.5529411764705883
          },
          {
            "modelId": "champion",
            "played": 110,
            "winRate": 0.6454545454545455
          },
          {
            "modelId": "beginner",
            "played": 61,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 368,
            "winRate": 0.5271739130434783
          },
          {
            "deckPresetId": "starter12",
            "played": 310,
            "winRate": 0.5096774193548387
          },
          {
            "deckPresetId": "starter14",
            "played": 277,
            "winRate": 0.4981949458483754
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
        "offered": 3991,
        "played": 945,
        "ignored": 3046,
        "selectionRate": 0.23678276121272865,
        "wins": 512,
        "losses": 433,
        "draws": 0,
        "winRateWhenPlayed": 0.5417989417989418,
        "averageFlips": 0.691005291005291,
        "failedImpactRate": 0.3654033041788144,
        "averageFlipMargin": 1.768759571209801,
        "averageEffectAmount": 0.5492063492063493,
        "averageDamageDealt": 0.9947089947089947,
        "averageDamageTaken": 0.2761904761904762,
        "averageNetDamage": 0.7185185185185184,
        "lethalMoves": 23,
        "roundClosers": 91,
        "byModel": [
          {
            "modelId": "regular",
            "played": 392,
            "winRate": 0.5306122448979592
          },
          {
            "modelId": "expert",
            "played": 206,
            "winRate": 0.5970873786407767
          },
          {
            "modelId": "opportunist",
            "played": 174,
            "winRate": 0.6494252873563219
          },
          {
            "modelId": "champion",
            "played": 99,
            "winRate": 0.6868686868686869
          },
          {
            "modelId": "beginner",
            "played": 74,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 369,
            "winRate": 0.5338753387533876
          },
          {
            "deckPresetId": "starter12",
            "played": 319,
            "winRate": 0.5579937304075235
          },
          {
            "deckPresetId": "starter14",
            "played": 257,
            "winRate": 0.5330739299610895
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
        "offered": 3729,
        "played": 944,
        "ignored": 2785,
        "selectionRate": 0.2531509788146956,
        "wins": 454,
        "losses": 490,
        "draws": 0,
        "winRateWhenPlayed": 0.4809322033898305,
        "averageFlips": 0.4745762711864407,
        "failedImpactRate": 0.3065015479876161,
        "averageFlipMargin": 1.4665178571428572,
        "averageEffectAmount": 0.3167372881355932,
        "averageDamageDealt": 0.576271186440678,
        "averageDamageTaken": 0.1832627118644068,
        "averageNetDamage": 0.3930084745762712,
        "lethalMoves": 19,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 379,
            "winRate": 0.49604221635883905
          },
          {
            "modelId": "expert",
            "played": 194,
            "winRate": 0.5309278350515464
          },
          {
            "modelId": "opportunist",
            "played": 193,
            "winRate": 0.5233160621761658
          },
          {
            "modelId": "champion",
            "played": 105,
            "winRate": 0.5904761904761905
          },
          {
            "modelId": "beginner",
            "played": 73,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 336,
            "winRate": 0.5208333333333334
          },
          {
            "deckPresetId": "starter12",
            "played": 333,
            "winRate": 0.4594594594594595
          },
          {
            "deckPresetId": "starter14",
            "played": 275,
            "winRate": 0.4581818181818182
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
        "offered": 4004,
        "played": 833,
        "ignored": 3171,
        "selectionRate": 0.20804195804195805,
        "wins": 394,
        "losses": 439,
        "draws": 0,
        "winRateWhenPlayed": 0.4729891956782713,
        "averageFlips": 0.42016806722689076,
        "failedImpactRate": 0.3881118881118881,
        "averageFlipMargin": 1.5457142857142858,
        "averageEffectAmount": 0.24489795918367346,
        "averageDamageDealt": 0.3013205282112845,
        "averageDamageTaken": 0.20168067226890757,
        "averageNetDamage": 0.09963985594237695,
        "lethalMoves": 6,
        "roundClosers": 60,
        "byModel": [
          {
            "modelId": "regular",
            "played": 386,
            "winRate": 0.4792746113989637
          },
          {
            "modelId": "expert",
            "played": 171,
            "winRate": 0.6198830409356725
          },
          {
            "modelId": "opportunist",
            "played": 137,
            "winRate": 0.41605839416058393
          },
          {
            "modelId": "champion",
            "played": 71,
            "winRate": 0.647887323943662
          },
          {
            "modelId": "beginner",
            "played": 68,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 324,
            "winRate": 0.47530864197530864
          },
          {
            "deckPresetId": "starter12",
            "played": 277,
            "winRate": 0.4584837545126354
          },
          {
            "deckPresetId": "starter14",
            "played": 232,
            "winRate": 0.4870689655172414
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
        "offered": 2127,
        "played": 682,
        "ignored": 1445,
        "selectionRate": 0.32063939821344617,
        "wins": 387,
        "losses": 295,
        "draws": 0,
        "winRateWhenPlayed": 0.5674486803519062,
        "averageFlips": 0.8211143695014663,
        "failedImpactRate": 0.22330097087378642,
        "averageFlipMargin": 1.5267857142857142,
        "averageEffectAmount": 0.5513196480938416,
        "averageDamageDealt": 0.9648093841642229,
        "averageDamageTaken": 0.23460410557184752,
        "averageNetDamage": 0.7302052785923754,
        "lethalMoves": 13,
        "roundClosers": 59,
        "byModel": [
          {
            "modelId": "regular",
            "played": 265,
            "winRate": 0.5433962264150943
          },
          {
            "modelId": "expert",
            "played": 162,
            "winRate": 0.7037037037037037
          },
          {
            "modelId": "opportunist",
            "played": 141,
            "winRate": 0.5815602836879432
          },
          {
            "modelId": "champion",
            "played": 77,
            "winRate": 0.6103896103896104
          },
          {
            "modelId": "beginner",
            "played": 37,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 362,
            "winRate": 0.5552486187845304
          },
          {
            "deckPresetId": "starter14",
            "played": 320,
            "winRate": 0.58125
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
        "offered": 2084,
        "played": 662,
        "ignored": 1422,
        "selectionRate": 0.31765834932821496,
        "wins": 345,
        "losses": 317,
        "draws": 0,
        "winRateWhenPlayed": 0.5211480362537765,
        "averageFlips": 0.28700906344410876,
        "failedImpactRate": 0.5052083333333334,
        "averageFlipMargin": 1.8,
        "averageEffectAmount": 1.5740181268882176,
        "averageDamageDealt": 0.44410876132930516,
        "averageDamageTaken": 0.18580060422960726,
        "averageNetDamage": 0.2583081570996979,
        "lethalMoves": 7,
        "roundClosers": 67,
        "byModel": [
          {
            "modelId": "regular",
            "played": 282,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 136,
            "winRate": 0.7205882352941176
          },
          {
            "modelId": "opportunist",
            "played": 126,
            "winRate": 0.48412698412698413
          },
          {
            "modelId": "champion",
            "played": 76,
            "winRate": 0.5921052631578947
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
            "played": 369,
            "winRate": 0.5121951219512195
          },
          {
            "deckPresetId": "starter14",
            "played": 293,
            "winRate": 0.5324232081911263
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
        "offered": 2456,
        "played": 599,
        "ignored": 1857,
        "selectionRate": 0.24389250814332247,
        "wins": 333,
        "losses": 266,
        "draws": 0,
        "winRateWhenPlayed": 0.5559265442404007,
        "averageFlips": 0.3622704507512521,
        "failedImpactRate": 0.5921052631578947,
        "averageFlipMargin": 1.1566820276497696,
        "averageEffectAmount": 0.6928213689482471,
        "averageDamageDealt": 0.67779632721202,
        "averageDamageTaken": 0.43906510851419034,
        "averageNetDamage": 0.23873121869782965,
        "lethalMoves": 10,
        "roundClosers": 106,
        "byModel": [
          {
            "modelId": "regular",
            "played": 268,
            "winRate": 0.5335820895522388
          },
          {
            "modelId": "expert",
            "played": 171,
            "winRate": 0.6900584795321637
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.5277777777777778
          },
          {
            "modelId": "champion",
            "played": 50,
            "winRate": 0.68
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
            "played": 316,
            "winRate": 0.569620253164557
          },
          {
            "deckPresetId": "starter14",
            "played": 283,
            "winRate": 0.5406360424028268
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
        "offered": 2615,
        "played": 512,
        "ignored": 2103,
        "selectionRate": 0.19579349904397705,
        "wins": 262,
        "losses": 250,
        "draws": 0,
        "winRateWhenPlayed": 0.51171875,
        "averageFlips": 0.509765625,
        "failedImpactRate": 0.4411134903640257,
        "averageFlipMargin": 1.3563218390804597,
        "averageEffectAmount": 0.2421875,
        "averageDamageDealt": 0.54296875,
        "averageDamageTaken": 0.388671875,
        "averageNetDamage": 0.154296875,
        "lethalMoves": 5,
        "roundClosers": 67,
        "byModel": [
          {
            "modelId": "regular",
            "played": 219,
            "winRate": 0.5068493150684932
          },
          {
            "modelId": "expert",
            "played": 118,
            "winRate": 0.6694915254237288
          },
          {
            "modelId": "opportunist",
            "played": 86,
            "winRate": 0.5697674418604651
          },
          {
            "modelId": "champion",
            "played": 52,
            "winRate": 0.4423076923076923
          },
          {
            "modelId": "beginner",
            "played": 37,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 267,
            "winRate": 0.47191011235955055
          },
          {
            "deckPresetId": "starter14",
            "played": 245,
            "winRate": 0.5551020408163265
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
        "offered": 927,
        "played": 308,
        "ignored": 619,
        "selectionRate": 0.33225458468176916,
        "wins": 140,
        "losses": 168,
        "draws": 0,
        "winRateWhenPlayed": 0.45454545454545453,
        "averageFlips": 0.39285714285714285,
        "failedImpactRate": 0.5140562248995983,
        "averageFlipMargin": 2.3801652892561984,
        "averageEffectAmount": 0.9383116883116883,
        "averageDamageDealt": 0.3474025974025974,
        "averageDamageTaken": 0.2792207792207792,
        "averageNetDamage": 0.06818181818181818,
        "lethalMoves": 3,
        "roundClosers": 27,
        "byModel": [
          {
            "modelId": "regular",
            "played": 156,
            "winRate": 0.48717948717948717
          },
          {
            "modelId": "expert",
            "played": 53,
            "winRate": 0.5471698113207547
          },
          {
            "modelId": "opportunist",
            "played": 53,
            "winRate": 0.41509433962264153
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.4642857142857143
          },
          {
            "modelId": "beginner",
            "played": 18,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 308,
            "winRate": 0.45454545454545453
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
        "offered": 1073,
        "played": 249,
        "ignored": 824,
        "selectionRate": 0.2320596458527493,
        "wins": 114,
        "losses": 135,
        "draws": 0,
        "winRateWhenPlayed": 0.4578313253012048,
        "averageFlips": 0.41365461847389556,
        "failedImpactRate": 0.430939226519337,
        "averageFlipMargin": 1.3592233009708738,
        "averageEffectAmount": 0.21686746987951808,
        "averageDamageDealt": 0.40963855421686746,
        "averageDamageTaken": 0.26506024096385544,
        "averageNetDamage": 0.14457831325301201,
        "lethalMoves": 1,
        "roundClosers": 25,
        "byModel": [
          {
            "modelId": "regular",
            "played": 114,
            "winRate": 0.4473684210526316
          },
          {
            "modelId": "expert",
            "played": 55,
            "winRate": 0.6363636363636364
          },
          {
            "modelId": "opportunist",
            "played": 33,
            "winRate": 0.42424242424242425
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 22,
            "winRate": 0.6363636363636364
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 249,
            "winRate": 0.4578313253012048
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
        "offered": 1189,
        "played": 242,
        "ignored": 947,
        "selectionRate": 0.20353238015138772,
        "wins": 135,
        "losses": 107,
        "draws": 0,
        "winRateWhenPlayed": 0.5578512396694215,
        "averageFlips": 0.5702479338842975,
        "failedImpactRate": 0.3811659192825112,
        "averageFlipMargin": 1.2463768115942029,
        "averageEffectAmount": 0.5702479338842975,
        "averageDamageDealt": 0.32231404958677684,
        "averageDamageTaken": 0.2231404958677686,
        "averageNetDamage": 0.09917355371900824,
        "lethalMoves": 3,
        "roundClosers": 19,
        "byModel": [
          {
            "modelId": "regular",
            "played": 107,
            "winRate": 0.5607476635514018
          },
          {
            "modelId": "expert",
            "played": 50,
            "winRate": 0.66
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.5428571428571428
          },
          {
            "modelId": "champion",
            "played": 34,
            "winRate": 0.6764705882352942
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
            "played": 242,
            "winRate": 0.5578512396694215
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
        "offered": 25836,
        "played": 6918,
        "ignored": 18918,
        "selectionRate": 0.2677659080352996,
        "wins": 3374,
        "losses": 3544,
        "draws": 0,
        "winRateWhenPlayed": 0.4877132119109569,
        "averageFlips": 0.4986990459670425,
        "averageDamageDealt": 0.7606244579358196,
        "averageNetDamage": 0.4901705695287655,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 1142,
            "winRateWhenPlayed": 0.47810858143607704
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 1096,
            "winRateWhenPlayed": 0.4972627737226277
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 1071,
            "winRateWhenPlayed": 0.47058823529411764
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 987,
            "winRateWhenPlayed": 0.4690982776089159
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 945,
            "winRateWhenPlayed": 0.5417989417989418
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
        "offered": 26231,
        "played": 6351,
        "ignored": 19880,
        "selectionRate": 0.2421181045328047,
        "wins": 3354,
        "losses": 2997,
        "draws": 0,
        "winRateWhenPlayed": 0.5281058101086443,
        "averageFlips": 0.5668398677373642,
        "averageDamageDealt": 0.629664619744922,
        "averageNetDamage": 0.3300267674381987,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 1143,
            "winRateWhenPlayed": 0.5170603674540682
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 1039,
            "winRateWhenPlayed": 0.5842155919153031
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 970,
            "winRateWhenPlayed": 0.49072164948453606
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 962,
            "winRateWhenPlayed": 0.5343035343035343
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 955,
            "winRateWhenPlayed": 0.5130890052356021
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
        "offered": 28007,
        "played": 6274,
        "ignored": 21733,
        "selectionRate": 0.22401542471524977,
        "wins": 3196,
        "losses": 3078,
        "draws": 0,
        "winRateWhenPlayed": 0.5094038890659867,
        "averageFlips": 0.4558495377749442,
        "averageDamageDealt": 0.45027095951546064,
        "averageNetDamage": 0.17787695250239083,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 1168,
            "winRateWhenPlayed": 0.5676369863013698
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 1071,
            "winRateWhenPlayed": 0.5210084033613446
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 1002,
            "winRateWhenPlayed": 0.4940119760479042
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 833,
            "winRateWhenPlayed": 0.4729891956782713
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 751,
            "winRateWhenPlayed": 0.49267643142476697
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
        "offered": 11613,
        "played": 2774,
        "ignored": 8839,
        "selectionRate": 0.23887023163695859,
        "wins": 1414,
        "losses": 1360,
        "draws": 0,
        "winRateWhenPlayed": 0.5097332372025956,
        "averageFlips": 0.3904109589041096,
        "averageDamageDealt": 0.4826964671953857,
        "averageNetDamage": 0.18817591925018023,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 662,
            "winRateWhenPlayed": 0.5211480362537765
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 599,
            "winRateWhenPlayed": 0.5559265442404007
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 512,
            "winRateWhenPlayed": 0.51171875
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 308,
            "winRateWhenPlayed": 0.45454545454545453
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 249,
            "winRateWhenPlayed": 0.4578313253012048
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
        "offered": 44149,
        "played": 11466,
        "ignored": 32683,
        "selectionRate": 0.2597114317425083,
        "wins": 5944,
        "losses": 5522,
        "draws": 0,
        "winRateWhenPlayed": 0.5184022326879469,
        "averageFlips": 0.49127856270713416,
        "averageDamageDealt": 0.6739054596197454,
        "averageNetDamage": 0.36752136752136755,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 693,
            "winRateWhenPlayed": 0.5829725829725829
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 670,
            "winRateWhenPlayed": 0.5208955223880597
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 666,
            "winRateWhenPlayed": 0.4924924924924925
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 625,
            "winRateWhenPlayed": 0.5216
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 617,
            "winRateWhenPlayed": 0.5332252836304701
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
        "offered": 14896,
        "played": 4025,
        "ignored": 10871,
        "selectionRate": 0.27020676691729323,
        "wins": 2049,
        "losses": 1976,
        "draws": 0,
        "winRateWhenPlayed": 0.5090683229813665,
        "averageFlips": 0.5137888198757764,
        "averageDamageDealt": 0.5585093167701863,
        "averageNetDamage": 0.3316770186335404,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 476,
            "winRateWhenPlayed": 0.4579831932773109
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 475,
            "winRateWhenPlayed": 0.5452631578947369
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 471,
            "winRateWhenPlayed": 0.47983014861995754
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 464,
            "winRateWhenPlayed": 0.48060344827586204
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 462,
            "winRateWhenPlayed": 0.5324675324675324
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
        "offered": 11601,
        "played": 2727,
        "ignored": 8874,
        "selectionRate": 0.23506594259115593,
        "wins": 1328,
        "losses": 1399,
        "draws": 0,
        "winRateWhenPlayed": 0.486982031536487,
        "averageFlips": 0.4902823615694903,
        "averageDamageDealt": 0.39823982398239827,
        "averageNetDamage": 0.11477814448111479,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 473,
            "winRateWhenPlayed": 0.5116279069767442
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 471,
            "winRateWhenPlayed": 0.5074309978768577
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 460,
            "winRateWhenPlayed": 0.4543478260869565
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 437,
            "winRateWhenPlayed": 0.4691075514874142
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 428,
            "winRateWhenPlayed": 0.45560747663551404
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
        "offered": 7525,
        "played": 1625,
        "ignored": 5900,
        "selectionRate": 0.2159468438538206,
        "wins": 794,
        "losses": 831,
        "draws": 0,
        "winRateWhenPlayed": 0.4886153846153846,
        "averageFlips": 0.4707692307692308,
        "averageDamageDealt": 0.6172307692307692,
        "averageNetDamage": 0.3470769230769231,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 471,
            "winRateWhenPlayed": 0.46496815286624205
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 454,
            "winRateWhenPlayed": 0.5044052863436124
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 387,
            "winRateWhenPlayed": 0.48320413436692505
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 313,
            "winRateWhenPlayed": 0.5079872204472844
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
        "offered": 8332,
        "played": 1429,
        "ignored": 6903,
        "selectionRate": 0.1715074411905905,
        "wins": 710,
        "losses": 719,
        "draws": 0,
        "winRateWhenPlayed": 0.49685094471658503,
        "averageFlips": 0.4912526242127362,
        "averageDamageDealt": 0.5738278516445067,
        "averageNetDamage": 0.3261021693491952,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 465,
            "winRateWhenPlayed": 0.5505376344086022
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 418,
            "winRateWhenPlayed": 0.4784688995215311
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 413,
            "winRateWhenPlayed": 0.4745762711864407
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 133,
            "winRateWhenPlayed": 0.43609022556390975
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
        "offered": 3251,
        "played": 588,
        "ignored": 2663,
        "selectionRate": 0.1808674254075669,
        "wins": 282,
        "losses": 306,
        "draws": 0,
        "winRateWhenPlayed": 0.47959183673469385,
        "averageFlips": 0.47619047619047616,
        "averageDamageDealt": 0.3112244897959184,
        "averageNetDamage": 0.08503401360544219,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 435,
            "winRateWhenPlayed": 0.4896551724137931
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 153,
            "winRateWhenPlayed": 0.45098039215686275
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
        "offered": 1933,
        "played": 457,
        "ignored": 1476,
        "selectionRate": 0.23642007242628038,
        "wins": 231,
        "losses": 226,
        "draws": 0,
        "winRateWhenPlayed": 0.5054704595185996,
        "averageFlips": 0.4551422319474836,
        "averageDamageDealt": 0.7833698030634574,
        "averageNetDamage": 0.400437636761488,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 457,
            "winRateWhenPlayed": 0.5054704595185996
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
        "offered": 91687,
        "played": 22317,
        "ignored": 69370,
        "selectionRate": 0.24340419034323296,
        "wins": 11338,
        "losses": 10979,
        "draws": 0,
        "winRateWhenPlayed": 0.5080431957700408,
        "averageFlips": 0.49258412869113233,
        "averageDamageDealt": 0.601559349374916,
        "averageNetDamage": 0.31926334184702243,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 1168,
            "winRateWhenPlayed": 0.5676369863013698
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 1143,
            "winRateWhenPlayed": 0.5170603674540682
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 1142,
            "winRateWhenPlayed": 0.47810858143607704
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 1096,
            "winRateWhenPlayed": 0.4972627737226277
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 1071,
            "winRateWhenPlayed": 0.5210084033613446
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
        "count": 1669,
        "wins": 848,
        "losses": 821,
        "draws": 0,
        "winRate": 0.5080886758538047,
        "averageFlips": 0.6297183942480528,
        "averageDamageDealt": 0.6363091671659676,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 1654,
        "wins": 799,
        "losses": 855,
        "draws": 0,
        "winRate": 0.4830713422007255,
        "averageFlips": 0.6118500604594922,
        "averageDamageDealt": 0.8548972188633616,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 1596,
        "wins": 762,
        "losses": 834,
        "draws": 0,
        "winRate": 0.4774436090225564,
        "averageFlips": 0.5100250626566416,
        "averageDamageDealt": 0.5012531328320802,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 1591,
        "wins": 922,
        "losses": 669,
        "draws": 0,
        "winRate": 0.57950974230044,
        "averageFlips": 0.6272784412319296,
        "averageDamageDealt": 0.9453174104336896,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 1566,
        "wins": 760,
        "losses": 806,
        "draws": 0,
        "winRate": 0.48531289910600256,
        "averageFlips": 0.5351213282247765,
        "averageDamageDealt": 0.8454661558109834,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 1419,
        "wins": 747,
        "losses": 672,
        "draws": 0,
        "winRate": 0.5264270613107822,
        "averageFlips": 0.5940803382663847,
        "averageDamageDealt": 0.6885130373502466,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 1396,
        "wins": 686,
        "losses": 710,
        "draws": 0,
        "winRate": 0.49140401146131807,
        "averageFlips": 0.6038681948424068,
        "averageDamageDealt": 0.995702005730659,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 1374,
        "wins": 697,
        "losses": 677,
        "draws": 0,
        "winRate": 0.507278020378457,
        "averageFlips": 0.5647743813682679,
        "averageDamageDealt": 0.6870451237263464,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 1219,
        "wins": 648,
        "losses": 571,
        "draws": 0,
        "winRate": 0.5315832649712879,
        "averageFlips": 0.5824446267432322,
        "averageDamageDealt": 0.667760459392945,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 1143,
        "wins": 591,
        "losses": 552,
        "draws": 0,
        "winRate": 0.5170603674540682,
        "averageFlips": 0.38232720909886264,
        "averageDamageDealt": 0.3438320209973753,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 1122,
        "wins": 689,
        "losses": 433,
        "draws": 0,
        "winRate": 0.6140819964349377,
        "averageFlips": 0.6657754010695187,
        "averageDamageDealt": 1.1720142602495545,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 1114,
        "wins": 529,
        "losses": 585,
        "draws": 0,
        "winRate": 0.4748653500897666,
        "averageFlips": 0.3357271095152603,
        "averageDamageDealt": 1.0646319569120288,
        "averageEffectAmount": 0.8016157989228008,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 1077,
        "wins": 719,
        "losses": 358,
        "draws": 0,
        "winRate": 0.6675951717734447,
        "averageFlips": 0.6304549675023212,
        "averageDamageDealt": 1.3760445682451254,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 1063,
        "wins": 611,
        "losses": 452,
        "draws": 0,
        "winRate": 0.5747883349012229,
        "averageFlips": 0.5070555032925682,
        "averageDamageDealt": 1.244590780809031,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 1041,
        "wins": 535,
        "losses": 506,
        "draws": 0,
        "winRate": 0.5139289145052833,
        "averageFlips": 0.5725264169068204,
        "averageDamageDealt": 1.3314121037463977,
        "averageEffectAmount": 0.765609990393852,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 1014,
        "wins": 553,
        "losses": 461,
        "draws": 0,
        "winRate": 0.5453648915187377,
        "averageFlips": 0.4280078895463511,
        "averageDamageDealt": 1.0197238658777121,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 919,
        "wins": 549,
        "losses": 370,
        "draws": 0,
        "winRate": 0.5973884657236126,
        "averageFlips": 0.4733405875952122,
        "averageDamageDealt": 1.2850924918389555,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 905,
        "wins": 535,
        "losses": 370,
        "draws": 0,
        "winRate": 0.5911602209944752,
        "averageFlips": 0.5480662983425414,
        "averageDamageDealt": 1.4121546961325966,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 900,
        "wins": 527,
        "losses": 373,
        "draws": 0,
        "winRate": 0.5855555555555556,
        "averageFlips": 0.18555555555555556,
        "averageDamageDealt": 0.2722222222222222,
        "averageEffectAmount": 1.998888888888889,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 791,
        "wins": 381,
        "losses": 410,
        "draws": 0,
        "winRate": 0.48166877370417194,
        "averageFlips": 0.7496839443742098,
        "averageDamageDealt": 0.5815423514538559,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+demon",
        "kind": "friendly-adjacent",
        "label": "familiar allie + demon",
        "count": 778,
        "wins": 441,
        "losses": 337,
        "draws": 0,
        "winRate": 0.5668380462724936,
        "averageFlips": 0.5077120822622108,
        "averageDamageDealt": 1.3341902313624678,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gate-thief:draw-next-turn",
        "kind": "effect",
        "label": "Voleuse des portes -> draw-next-turn",
        "count": 727,
        "wins": 411,
        "losses": 316,
        "draws": 0,
        "winRate": 0.5653370013755158,
        "averageFlips": 1.0357634112792298,
        "averageDamageDealt": 0.4938101788170564,
        "averageEffectAmount": 1.0330123796423658,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 701,
        "wins": 474,
        "losses": 227,
        "draws": 0,
        "winRate": 0.6761768901569187,
        "averageFlips": 0.5178316690442225,
        "averageDamageDealt": 1.261055634807418,
        "averageEffectAmount": 2.5164051355206847,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+demon",
        "kind": "friendly-adjacent",
        "label": "human allie + demon",
        "count": 643,
        "wins": 389,
        "losses": 254,
        "draws": 0,
        "winRate": 0.6049766718506998,
        "averageFlips": 0.5225505443234837,
        "averageDamageDealt": 1.7465007776049766,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 4994,
        "id": "card-quiet-monk-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Moine du seuil est ignoree par les bots",
        "detail": "4994 offres, 12% selection, role anchor.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 4780,
        "id": "card-foxfire-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Requin runefer est ignoree par les bots",
        "detail": "4780 offres, 15% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 4561,
        "id": "card-heron-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "4561 offres, 16% selection, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 4387,
        "id": "card-cinder-grin-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Sourire de suie est ignoree par les bots",
        "detail": "4387 offres, 17% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 4385,
        "id": "card-owl-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Chaton des ronces est ignoree par les bots",
        "detail": "4385 offres, 17% selection, role stabilizer.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1269,
        "id": "card-tin-oracle-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oracle de fer-blanc est ignoree par les bots",
        "detail": "1269 offres, 16% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 8332,
        "id": "role-payoff-buff",
        "severity": "watch",
        "action": "verify",
        "title": "payoff manque d'attraction",
        "detail": "8332 offres, 17% selection, 50% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:gate-thief:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 727,
        "title": "Voleuse des portes -> draw-next-turn ressort comme combo",
        "detail": "727 occurrences, 57% win, 1.04 flips, 0.49 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "deck-starter14-problem",
      "severity": "problem",
      "title": "starter14 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (72%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "diagnostic-card-quiet-monk-ignored",
      "severity": "problem",
      "title": "Moine du seuil est ignoree par les bots",
      "detail": "4994 offres, 12% selection, role anchor. Confiance high, echantillon 4994.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-foxfire-ignored",
      "severity": "problem",
      "title": "Requin runefer est ignoree par les bots",
      "detail": "4780 offres, 15% selection, role payoff. Confiance high, echantillon 4780.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "problem",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "4561 offres, 16% selection, role connector. Confiance high, echantillon 4561.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-cinder-grin-ignored",
      "severity": "problem",
      "title": "Sourire de suie est ignoree par les bots",
      "detail": "4387 offres, 17% selection, role payoff. Confiance high, echantillon 4387.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "champion-underperforms-starter12",
      "severity": "watch",
      "title": "Le champion ne depasse pas l'expert",
      "detail": "Champion gagne 46.9% contre Expert sur starter12.",
      "recommendation": "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion."
    }
  ]
};
