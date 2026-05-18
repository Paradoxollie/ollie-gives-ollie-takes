import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260518-175301",
  "generatedAt": "2026-05-18T17:53:01.359Z",
  "config": {
    "matchesPerPairing": 12,
    "seed": 1701,
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
      "games": 36,
      "wins": 0,
      "losses": 36,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -21.416666666666668
    },
    {
      "modelId": "opportunist",
      "games": 72,
      "wins": 42,
      "losses": 30,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 6.388888888888889
    },
    {
      "modelId": "regular",
      "games": 72,
      "wins": 42,
      "losses": 30,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 1.4722222222222223
    },
    {
      "modelId": "expert",
      "games": 72,
      "wins": 39,
      "losses": 33,
      "draws": 0,
      "winRate": 0.5416666666666666,
      "averageHpEdge": 2.0555555555555554
    },
    {
      "modelId": "champion",
      "games": 36,
      "wins": 21,
      "losses": 15,
      "draws": 0,
      "winRate": 0.5833333333333334,
      "averageHpEdge": 1.5833333333333333
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayerWinRate": 0.8333333333333334,
      "averages": {
        "turns": 47.75,
        "rounds": 5.416666666666667,
        "flipsPerMatch": 17.416666666666668,
        "flipsPerTurn": 0.3647469458987784,
        "reshuffles": 7.916666666666667,
        "deadTurns": 0,
        "finalHpDifference": 6.5
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (83%)."
      ]
    },
    {
      "deckPresetId": "starter12",
      "mirrorModelId": "regular",
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayerWinRate": 0.6666666666666666,
      "averages": {
        "turns": 50.25,
        "rounds": 5.583333333333333,
        "flipsPerMatch": 17.583333333333332,
        "flipsPerTurn": 0.34991708126036486,
        "reshuffles": 5.416666666666667,
        "deadTurns": 0,
        "finalHpDifference": 8.5
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (67%)."
      ]
    },
    {
      "deckPresetId": "starter14",
      "mirrorModelId": "regular",
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayerWinRate": 0.6666666666666666,
      "averages": {
        "turns": 50.833333333333336,
        "rounds": 5.75,
        "flipsPerMatch": 18.166666666666668,
        "flipsPerTurn": 0.35737704918032787,
        "reshuffles": 4.25,
        "deadTurns": 0,
        "finalHpDifference": 7.833333333333333
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (67%)."
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
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "enemy": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 12,
          "wins": 0,
          "losses": 12,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -23.416666666666668
        },
        {
          "modelId": "opportunist",
          "games": 12,
          "wins": 12,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 23.416666666666668
        }
      ],
      "averages": {
        "turns": 32.666666666666664,
        "rounds": 3.6666666666666665,
        "flipsPerMatch": 17.333333333333332,
        "flipsPerTurn": 0.5306122448979592,
        "reshuffles": 4.333333333333333,
        "deadTurns": 0.25,
        "finalHpDifference": 23.416666666666668
      },
      "deadTurnFrequency": 0.007653061224489796
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 4,
          "winRate": 0.6666666666666666
        },
        "enemy": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5833333333333334
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 12,
          "wins": 1,
          "losses": 11,
          "draws": 0,
          "winRate": 0.08333333333333333,
          "averageHpEdge": -11.25
        },
        {
          "modelId": "regular",
          "games": 12,
          "wins": 11,
          "losses": 1,
          "draws": 0,
          "winRate": 0.9166666666666666,
          "averageHpEdge": 11.25
        }
      ],
      "averages": {
        "turns": 43.833333333333336,
        "rounds": 4.833333333333333,
        "flipsPerMatch": 28.166666666666668,
        "flipsPerTurn": 0.6425855513307985,
        "reshuffles": 6.75,
        "deadTurns": 0.3333333333333333,
        "finalHpDifference": 11.416666666666666
      },
      "deadTurnFrequency": 0.0076045627376425855
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 5,
          "winRate": 0.8333333333333334
        },
        "enemy": {
          "games": 6,
          "wins": 2,
          "winRate": 0.3333333333333333
        },
        "overallStartingPlayerWinRate": 0.5833333333333334
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 12,
          "wins": 3,
          "losses": 9,
          "draws": 0,
          "winRate": 0.25,
          "averageHpEdge": -7.083333333333333
        },
        {
          "modelId": "expert",
          "games": 12,
          "wins": 9,
          "losses": 3,
          "draws": 0,
          "winRate": 0.75,
          "averageHpEdge": 7.083333333333333
        }
      ],
      "averages": {
        "turns": 47.25,
        "rounds": 5.25,
        "flipsPerMatch": 18.833333333333332,
        "flipsPerTurn": 0.3985890652557319,
        "reshuffles": 7.916666666666667,
        "deadTurns": 0,
        "finalHpDifference": 8.25
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 5,
          "winRate": 0.8333333333333334
        },
        "enemy": {
          "games": 6,
          "wins": 4,
          "winRate": 0.6666666666666666
        },
        "overallStartingPlayerWinRate": 0.75
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 12,
          "wins": 3,
          "losses": 9,
          "draws": 0,
          "winRate": 0.25,
          "averageHpEdge": -2.9166666666666665
        },
        {
          "modelId": "champion",
          "games": 12,
          "wins": 9,
          "losses": 3,
          "draws": 0,
          "winRate": 0.75,
          "averageHpEdge": 2.9166666666666665
        }
      ],
      "averages": {
        "turns": 45.75,
        "rounds": 5.083333333333333,
        "flipsPerMatch": 27,
        "flipsPerTurn": 0.5901639344262295,
        "reshuffles": 7.416666666666667,
        "deadTurns": 0,
        "finalHpDifference": 7.083333333333333
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "enemy": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 12,
          "wins": 0,
          "losses": 12,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -20.25
        },
        {
          "modelId": "opportunist",
          "games": 12,
          "wins": 12,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.25
        }
      ],
      "averages": {
        "turns": 36.666666666666664,
        "rounds": 4.083333333333333,
        "flipsPerMatch": 22.166666666666668,
        "flipsPerTurn": 0.6045454545454545,
        "reshuffles": 3.6666666666666665,
        "deadTurns": 0,
        "finalHpDifference": 20.25
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 4,
          "winRate": 0.6666666666666666
        },
        "enemy": {
          "games": 6,
          "wins": 5,
          "winRate": 0.8333333333333334
        },
        "overallStartingPlayerWinRate": 0.75
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 12,
          "wins": 3,
          "losses": 9,
          "draws": 0,
          "winRate": 0.25,
          "averageHpEdge": -7.416666666666667
        },
        {
          "modelId": "regular",
          "games": 12,
          "wins": 9,
          "losses": 3,
          "draws": 0,
          "winRate": 0.75,
          "averageHpEdge": 7.416666666666667
        }
      ],
      "averages": {
        "turns": 48.416666666666664,
        "rounds": 5.5,
        "flipsPerMatch": 28.833333333333332,
        "flipsPerTurn": 0.5955249569707401,
        "reshuffles": 5.75,
        "deadTurns": 0,
        "finalHpDifference": 9.583333333333334
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 6,
          "winRate": 1
        },
        "enemy": {
          "games": 6,
          "wins": 2,
          "winRate": 0.3333333333333333
        },
        "overallStartingPlayerWinRate": 0.6666666666666666
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 12,
          "wins": 6,
          "losses": 6,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -3.0833333333333335
        },
        {
          "modelId": "expert",
          "games": 12,
          "wins": 6,
          "losses": 6,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 3.0833333333333335
        }
      ],
      "averages": {
        "turns": 51,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 19.916666666666668,
        "flipsPerTurn": 0.39052287581699346,
        "reshuffles": 5.583333333333333,
        "deadTurns": 0,
        "finalHpDifference": 7.583333333333333
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 6,
          "winRate": 1
        },
        "enemy": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.75
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 12,
          "wins": 5,
          "losses": 7,
          "draws": 0,
          "winRate": 0.4166666666666667,
          "averageHpEdge": -3.9166666666666665
        },
        {
          "modelId": "champion",
          "games": 12,
          "wins": 7,
          "losses": 5,
          "draws": 0,
          "winRate": 0.5833333333333334,
          "averageHpEdge": 3.9166666666666665
        }
      ],
      "averages": {
        "turns": 47.583333333333336,
        "rounds": 5.416666666666667,
        "flipsPerMatch": 25.083333333333332,
        "flipsPerTurn": 0.5271453590192644,
        "reshuffles": 5.166666666666667,
        "deadTurns": 0,
        "finalHpDifference": 8.916666666666666
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "enemy": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 12,
          "wins": 0,
          "losses": 12,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -20.583333333333332
        },
        {
          "modelId": "opportunist",
          "games": 12,
          "wins": 12,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 20.583333333333332
        }
      ],
      "averages": {
        "turns": 35.25,
        "rounds": 3.9166666666666665,
        "flipsPerMatch": 20.833333333333332,
        "flipsPerTurn": 0.5910165484633569,
        "reshuffles": 2.8333333333333335,
        "deadTurns": 0,
        "finalHpDifference": 20.583333333333332
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "enemy": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 12,
          "wins": 2,
          "losses": 10,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -7.25
        },
        {
          "modelId": "regular",
          "games": 12,
          "wins": 10,
          "losses": 2,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 7.25
        }
      ],
      "averages": {
        "turns": 51.916666666666664,
        "rounds": 6,
        "flipsPerMatch": 28.666666666666668,
        "flipsPerTurn": 0.5521669341894061,
        "reshuffles": 4.916666666666667,
        "deadTurns": 0,
        "finalHpDifference": 8.083333333333334
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "enemy": {
          "games": 6,
          "wins": 4,
          "winRate": 0.6666666666666666
        },
        "overallStartingPlayerWinRate": 0.5833333333333334
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 12,
          "wins": 3,
          "losses": 9,
          "draws": 0,
          "winRate": 0.25,
          "averageHpEdge": -6.916666666666667
        },
        {
          "modelId": "expert",
          "games": 12,
          "wins": 9,
          "losses": 3,
          "draws": 0,
          "winRate": 0.75,
          "averageHpEdge": 6.916666666666667
        }
      ],
      "averages": {
        "turns": 47.333333333333336,
        "rounds": 5.333333333333333,
        "flipsPerMatch": 17.833333333333332,
        "flipsPerTurn": 0.3767605633802817,
        "reshuffles": 4.083333333333333,
        "deadTurns": 0,
        "finalHpDifference": 7.916666666666667
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 12,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 6,
          "wins": 3,
          "winRate": 0.5
        },
        "enemy": {
          "games": 6,
          "wins": 2,
          "winRate": 0.3333333333333333
        },
        "overallStartingPlayerWinRate": 0.4166666666666667
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 12,
          "wins": 7,
          "losses": 5,
          "draws": 0,
          "winRate": 0.5833333333333334,
          "averageHpEdge": 2.0833333333333335
        },
        {
          "modelId": "champion",
          "games": 12,
          "wins": 5,
          "losses": 7,
          "draws": 0,
          "winRate": 0.4166666666666667,
          "averageHpEdge": -2.0833333333333335
        }
      ],
      "averages": {
        "turns": 50.916666666666664,
        "rounds": 5.75,
        "flipsPerMatch": 27.666666666666668,
        "flipsPerTurn": 0.5433715220949263,
        "reshuffles": 4,
        "deadTurns": 0,
        "finalHpDifference": 6.916666666666667
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
        "offered": 1573,
        "played": 269,
        "ignored": 1304,
        "selectionRate": 0.17101080737444374,
        "wins": 122,
        "losses": 147,
        "draws": 0,
        "winRateWhenPlayed": 0.45353159851301117,
        "averageFlips": 0.40892193308550184,
        "failedImpactRate": 0.47619047619047616,
        "averageFlipMargin": 1.5272727272727273,
        "averageEffectAmount": 0.007434944237918215,
        "averageDamageDealt": 0.29739776951672864,
        "averageDamageTaken": 0.13011152416356878,
        "averageNetDamage": 0.16728624535315986,
        "lethalMoves": 0,
        "roundClosers": 17,
        "byModel": [
          {
            "modelId": "regular",
            "played": 121,
            "winRate": 0.4462809917355372
          },
          {
            "modelId": "expert",
            "played": 62,
            "winRate": 0.5161290322580645
          },
          {
            "modelId": "opportunist",
            "played": 36,
            "winRate": 0.5833333333333334
          },
          {
            "modelId": "champion",
            "played": 26,
            "winRate": 0.5769230769230769
          },
          {
            "modelId": "beginner",
            "played": 24,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 92,
            "winRate": 0.40217391304347827
          },
          {
            "deckPresetId": "starter10",
            "played": 89,
            "winRate": 0.39325842696629215
          },
          {
            "deckPresetId": "starter12",
            "played": 88,
            "winRate": 0.5681818181818182
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
        "offered": 1722,
        "played": 267,
        "ignored": 1455,
        "selectionRate": 0.15505226480836237,
        "wins": 121,
        "losses": 146,
        "draws": 0,
        "winRateWhenPlayed": 0.45318352059925093,
        "averageFlips": 0.5280898876404494,
        "failedImpactRate": 0.4699248120300752,
        "averageFlipMargin": 1.4326241134751774,
        "averageEffectAmount": 0.13108614232209737,
        "averageDamageDealt": 0.44569288389513106,
        "averageDamageTaken": 0.3258426966292135,
        "averageNetDamage": 0.11985018726591756,
        "lethalMoves": 3,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 120,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 56,
            "winRate": 0.48214285714285715
          },
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.53125
          },
          {
            "modelId": "champion",
            "played": 32,
            "winRate": 0.53125
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
            "played": 100,
            "winRate": 0.45
          },
          {
            "deckPresetId": "starter12",
            "played": 92,
            "winRate": 0.4782608695652174
          },
          {
            "deckPresetId": "starter14",
            "played": 75,
            "winRate": 0.4266666666666667
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
        "offered": 1737,
        "played": 263,
        "ignored": 1474,
        "selectionRate": 0.1514104778353483,
        "wins": 130,
        "losses": 133,
        "draws": 0,
        "winRateWhenPlayed": 0.49429657794676807,
        "averageFlips": 0.6958174904942965,
        "failedImpactRate": 0.29343629343629346,
        "averageFlipMargin": 1.366120218579235,
        "averageEffectAmount": 0.5209125475285171,
        "averageDamageDealt": 0.5019011406844106,
        "averageDamageTaken": 0.30798479087452474,
        "averageNetDamage": 0.19391634980988587,
        "lethalMoves": 2,
        "roundClosers": 31,
        "byModel": [
          {
            "modelId": "regular",
            "played": 108,
            "winRate": 0.6018518518518519
          },
          {
            "modelId": "expert",
            "played": 60,
            "winRate": 0.48333333333333334
          },
          {
            "modelId": "opportunist",
            "played": 46,
            "winRate": 0.5869565217391305
          },
          {
            "modelId": "beginner",
            "played": 26,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.391304347826087
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 99,
            "winRate": 0.47474747474747475
          },
          {
            "deckPresetId": "starter12",
            "played": 95,
            "winRate": 0.5368421052631579
          },
          {
            "deckPresetId": "starter14",
            "played": 69,
            "winRate": 0.463768115942029
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
        "offered": 1654,
        "played": 263,
        "ignored": 1391,
        "selectionRate": 0.15900846432889965,
        "wins": 123,
        "losses": 140,
        "draws": 0,
        "winRateWhenPlayed": 0.467680608365019,
        "averageFlips": 0.4866920152091255,
        "failedImpactRate": 0.4311111111111111,
        "averageFlipMargin": 1.2421875,
        "averageEffectAmount": 0.3840304182509506,
        "averageDamageDealt": 0.2965779467680608,
        "averageDamageTaken": 0.23193916349809887,
        "averageNetDamage": 0.06463878326996195,
        "lethalMoves": 2,
        "roundClosers": 21,
        "byModel": [
          {
            "modelId": "regular",
            "played": 108,
            "winRate": 0.5092592592592593
          },
          {
            "modelId": "expert",
            "played": 57,
            "winRate": 0.543859649122807
          },
          {
            "modelId": "opportunist",
            "played": 45,
            "winRate": 0.4888888888888889
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.5357142857142857
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 99,
            "winRate": 0.5151515151515151
          },
          {
            "deckPresetId": "starter12",
            "played": 91,
            "winRate": 0.43956043956043955
          },
          {
            "deckPresetId": "starter14",
            "played": 73,
            "winRate": 0.4383561643835616
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
        "offered": 1842,
        "played": 207,
        "ignored": 1635,
        "selectionRate": 0.11237785016286644,
        "wins": 104,
        "losses": 103,
        "draws": 0,
        "winRateWhenPlayed": 0.5024154589371981,
        "averageFlips": 0.6231884057971014,
        "failedImpactRate": 0.33505154639175255,
        "averageFlipMargin": 1.1472868217054264,
        "averageEffectAmount": 0.36231884057971014,
        "averageDamageDealt": 0.42995169082125606,
        "averageDamageTaken": 0.22705314009661837,
        "averageNetDamage": 0.2028985507246377,
        "lethalMoves": 1,
        "roundClosers": 18,
        "byModel": [
          {
            "modelId": "regular",
            "played": 79,
            "winRate": 0.6075949367088608
          },
          {
            "modelId": "expert",
            "played": 44,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "opportunist",
            "played": 37,
            "winRate": 0.5135135135135135
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.6296296296296297
          },
          {
            "modelId": "beginner",
            "played": 20,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 74,
            "winRate": 0.5540540540540541
          },
          {
            "deckPresetId": "starter14",
            "played": 68,
            "winRate": 0.5
          },
          {
            "deckPresetId": "starter12",
            "played": 65,
            "winRate": 0.4461538461538462
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
        "offered": 468,
        "played": 82,
        "ignored": 386,
        "selectionRate": 0.1752136752136752,
        "wins": 42,
        "losses": 40,
        "draws": 0,
        "winRateWhenPlayed": 0.5121951219512195,
        "averageFlips": 0.32926829268292684,
        "failedImpactRate": 0.6301369863013698,
        "averageFlipMargin": 1.7777777777777777,
        "averageEffectAmount": 0.3780487804878049,
        "averageDamageDealt": 0.32926829268292684,
        "averageDamageTaken": 0.2926829268292683,
        "averageNetDamage": 0.03658536585365857,
        "lethalMoves": 0,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 46,
            "winRate": 0.41304347826086957
          },
          {
            "modelId": "expert",
            "played": 14,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "opportunist",
            "played": 13,
            "winRate": 0.8461538461538461
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 0.75
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 82,
            "winRate": 0.5121951219512195
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
        "offered": 1064,
        "played": 428,
        "ignored": 636,
        "selectionRate": 0.40225563909774437,
        "wins": 259,
        "losses": 169,
        "draws": 0,
        "winRateWhenPlayed": 0.6051401869158879,
        "averageFlips": 0.2967289719626168,
        "failedImpactRate": 0.49603174603174605,
        "averageFlipMargin": 1.858267716535433,
        "averageEffectAmount": 1.485981308411215,
        "averageDamageDealt": 0.42289719626168226,
        "averageDamageTaken": 0.1705607476635514,
        "averageNetDamage": 0.25233644859813087,
        "lethalMoves": 3,
        "roundClosers": 36,
        "byModel": [
          {
            "modelId": "regular",
            "played": 186,
            "winRate": 0.7150537634408602
          },
          {
            "modelId": "expert",
            "played": 104,
            "winRate": 0.5576923076923077
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.6153846153846154
          },
          {
            "modelId": "champion",
            "played": 47,
            "winRate": 0.5957446808510638
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
            "played": 166,
            "winRate": 0.6325301204819277
          },
          {
            "deckPresetId": "starter12",
            "played": 136,
            "winRate": 0.5661764705882353
          },
          {
            "deckPresetId": "starter14",
            "played": 126,
            "winRate": 0.6111111111111112
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
        "offered": 1057,
        "played": 428,
        "ignored": 629,
        "selectionRate": 0.40491958372753073,
        "wins": 200,
        "losses": 228,
        "draws": 0,
        "winRateWhenPlayed": 0.4672897196261682,
        "averageFlips": 0.3060747663551402,
        "failedImpactRate": 0.5287769784172662,
        "averageFlipMargin": 1.8702290076335877,
        "averageEffectAmount": 0.794392523364486,
        "averageDamageDealt": 1.0957943925233644,
        "averageDamageTaken": 0.27102803738317754,
        "averageNetDamage": 0.8247663551401869,
        "lethalMoves": 9,
        "roundClosers": 32,
        "byModel": [
          {
            "modelId": "regular",
            "played": 184,
            "winRate": 0.5217391304347826
          },
          {
            "modelId": "expert",
            "played": 94,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 69,
            "winRate": 0.4057971014492754
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.6041666666666666
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
            "played": 162,
            "winRate": 0.46296296296296297
          },
          {
            "deckPresetId": "starter12",
            "played": 142,
            "winRate": 0.4507042253521127
          },
          {
            "deckPresetId": "starter14",
            "played": 124,
            "winRate": 0.49193548387096775
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
        "offered": 1283,
        "played": 412,
        "ignored": 871,
        "selectionRate": 0.3211223694466095,
        "wins": 188,
        "losses": 224,
        "draws": 0,
        "winRateWhenPlayed": 0.4563106796116505,
        "averageFlips": 0.6116504854368932,
        "failedImpactRate": 0.418013856812933,
        "averageFlipMargin": 2.7896825396825395,
        "averageEffectAmount": 0.7864077669902912,
        "averageDamageDealt": 0.6990291262135923,
        "averageDamageTaken": 0.4174757281553398,
        "averageNetDamage": 0.28155339805825247,
        "lethalMoves": 10,
        "roundClosers": 66,
        "byModel": [
          {
            "modelId": "regular",
            "played": 179,
            "winRate": 0.44692737430167595
          },
          {
            "modelId": "expert",
            "played": 88,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 79,
            "winRate": 0.5063291139240507
          },
          {
            "modelId": "champion",
            "played": 41,
            "winRate": 0.5853658536585366
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 165,
            "winRate": 0.4666666666666667
          },
          {
            "deckPresetId": "starter12",
            "played": 136,
            "winRate": 0.4632352941176471
          },
          {
            "deckPresetId": "starter14",
            "played": 111,
            "winRate": 0.43243243243243246
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
        "offered": 1160,
        "played": 410,
        "ignored": 750,
        "selectionRate": 0.35344827586206895,
        "wins": 209,
        "losses": 201,
        "draws": 0,
        "winRateWhenPlayed": 0.5097560975609756,
        "averageFlips": 0.35121951219512193,
        "failedImpactRate": 0.5428571428571428,
        "averageFlipMargin": 1.7777777777777777,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.3926829268292683,
        "averageDamageTaken": 0.2634146341463415,
        "averageNetDamage": 0.12926829268292683,
        "lethalMoves": 2,
        "roundClosers": 39,
        "byModel": [
          {
            "modelId": "regular",
            "played": 181,
            "winRate": 0.5414364640883977
          },
          {
            "modelId": "expert",
            "played": 94,
            "winRate": 0.4787234042553192
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.6388888888888888
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.5128205128205128
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
            "played": 145,
            "winRate": 0.5172413793103449
          },
          {
            "deckPresetId": "starter12",
            "played": 139,
            "winRate": 0.4892086330935252
          },
          {
            "deckPresetId": "starter14",
            "played": 126,
            "winRate": 0.5238095238095238
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
        "offered": 1321,
        "played": 402,
        "ignored": 919,
        "selectionRate": 0.30431491294473884,
        "wins": 226,
        "losses": 176,
        "draws": 0,
        "winRateWhenPlayed": 0.5621890547263682,
        "averageFlips": 0.5572139303482587,
        "failedImpactRate": 0.5109170305676856,
        "averageFlipMargin": 1.5491071428571428,
        "averageEffectAmount": 0.7587064676616916,
        "averageDamageDealt": 1.2736318407960199,
        "averageDamageTaken": 0.3333333333333333,
        "averageNetDamage": 0.9402985074626866,
        "lethalMoves": 10,
        "roundClosers": 44,
        "byModel": [
          {
            "modelId": "regular",
            "played": 178,
            "winRate": 0.5898876404494382
          },
          {
            "modelId": "expert",
            "played": 81,
            "winRate": 0.6049382716049383
          },
          {
            "modelId": "opportunist",
            "played": 71,
            "winRate": 0.5774647887323944
          },
          {
            "modelId": "champion",
            "played": 51,
            "winRate": 0.6078431372549019
          },
          {
            "modelId": "beginner",
            "played": 21,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 160,
            "winRate": 0.54375
          },
          {
            "deckPresetId": "starter12",
            "played": 135,
            "winRate": 0.5407407407407407
          },
          {
            "deckPresetId": "starter14",
            "played": 107,
            "winRate": 0.616822429906542
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
        "offered": 1320,
        "played": 389,
        "ignored": 931,
        "selectionRate": 0.2946969696969697,
        "wins": 204,
        "losses": 185,
        "draws": 0,
        "winRateWhenPlayed": 0.5244215938303342,
        "averageFlips": 0.36246786632390743,
        "failedImpactRate": 0.559375,
        "averageFlipMargin": 1.8794326241134751,
        "averageEffectAmount": 0.4987146529562982,
        "averageDamageDealt": 0.5372750642673522,
        "averageDamageTaken": 0.3059125964010283,
        "averageNetDamage": 0.23136246786632386,
        "lethalMoves": 9,
        "roundClosers": 51,
        "byModel": [
          {
            "modelId": "regular",
            "played": 184,
            "winRate": 0.5652173913043478
          },
          {
            "modelId": "expert",
            "played": 93,
            "winRate": 0.5913978494623656
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 33,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 27,
            "winRate": 0.7037037037037037
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 139,
            "winRate": 0.539568345323741
          },
          {
            "deckPresetId": "starter10",
            "played": 135,
            "winRate": 0.5407407407407407
          },
          {
            "deckPresetId": "starter14",
            "played": 115,
            "winRate": 0.48695652173913045
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
        "offered": 1336,
        "played": 388,
        "ignored": 948,
        "selectionRate": 0.2904191616766467,
        "wins": 192,
        "losses": 196,
        "draws": 0,
        "winRateWhenPlayed": 0.4948453608247423,
        "averageFlips": 0.5103092783505154,
        "failedImpactRate": 0.4342857142857143,
        "averageFlipMargin": 1.5909090909090908,
        "averageEffectAmount": 0.5618556701030928,
        "averageDamageDealt": 0.5618556701030928,
        "averageDamageTaken": 0.3324742268041237,
        "averageNetDamage": 0.2293814432989691,
        "lethalMoves": 5,
        "roundClosers": 52,
        "byModel": [
          {
            "modelId": "regular",
            "played": 171,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "expert",
            "played": 75,
            "winRate": 0.5733333333333334
          },
          {
            "modelId": "opportunist",
            "played": 69,
            "winRate": 0.42028985507246375
          },
          {
            "modelId": "champion",
            "played": 43,
            "winRate": 0.5813953488372093
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
            "played": 146,
            "winRate": 0.5205479452054794
          },
          {
            "deckPresetId": "starter12",
            "played": 133,
            "winRate": 0.49624060150375937
          },
          {
            "deckPresetId": "starter14",
            "played": 109,
            "winRate": 0.45871559633027525
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
        "offered": 1483,
        "played": 378,
        "ignored": 1105,
        "selectionRate": 0.25488873904248144,
        "wins": 222,
        "losses": 156,
        "draws": 0,
        "winRateWhenPlayed": 0.5873015873015873,
        "averageFlips": 0.5582010582010583,
        "failedImpactRate": 0.44327176781002636,
        "averageFlipMargin": 1.4786729857819905,
        "averageEffectAmount": 1.6666666666666667,
        "averageDamageDealt": 0.8306878306878307,
        "averageDamageTaken": 0.17724867724867724,
        "averageNetDamage": 0.6534391534391535,
        "lethalMoves": 8,
        "roundClosers": 69,
        "byModel": [
          {
            "modelId": "regular",
            "played": 169,
            "winRate": 0.650887573964497
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.6527777777777778
          },
          {
            "modelId": "expert",
            "played": 72,
            "winRate": 0.5277777777777778
          },
          {
            "modelId": "champion",
            "played": 37,
            "winRate": 0.7297297297297297
          },
          {
            "modelId": "beginner",
            "played": 28,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 152,
            "winRate": 0.5657894736842105
          },
          {
            "deckPresetId": "starter12",
            "played": 123,
            "winRate": 0.6178861788617886
          },
          {
            "deckPresetId": "starter14",
            "played": 103,
            "winRate": 0.5825242718446602
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
        "offered": 1299,
        "played": 378,
        "ignored": 921,
        "selectionRate": 0.2909930715935335,
        "wins": 186,
        "losses": 192,
        "draws": 0,
        "winRateWhenPlayed": 0.49206349206349204,
        "averageFlips": 0.4470899470899471,
        "failedImpactRate": 0.46855345911949686,
        "averageFlipMargin": 1.650887573964497,
        "averageEffectAmount": 0.4470899470899471,
        "averageDamageDealt": 0.3201058201058201,
        "averageDamageTaken": 0.2698412698412698,
        "averageNetDamage": 0.05026455026455029,
        "lethalMoves": 2,
        "roundClosers": 32,
        "byModel": [
          {
            "modelId": "regular",
            "played": 168,
            "winRate": 0.5119047619047619
          },
          {
            "modelId": "opportunist",
            "played": 77,
            "winRate": 0.5064935064935064
          },
          {
            "modelId": "expert",
            "played": 75,
            "winRate": 0.5466666666666666
          },
          {
            "modelId": "champion",
            "played": 31,
            "winRate": 0.6451612903225806
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
            "played": 135,
            "winRate": 0.5259259259259259
          },
          {
            "deckPresetId": "starter12",
            "played": 126,
            "winRate": 0.5238095238095238
          },
          {
            "deckPresetId": "starter14",
            "played": 117,
            "winRate": 0.4188034188034188
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
        "offered": 1314,
        "played": 363,
        "ignored": 951,
        "selectionRate": 0.2762557077625571,
        "wins": 173,
        "losses": 190,
        "draws": 0,
        "winRateWhenPlayed": 0.4765840220385675,
        "averageFlips": 0.4986225895316804,
        "failedImpactRate": 0.3418181818181818,
        "averageFlipMargin": 1.4364640883977902,
        "averageEffectAmount": 0.30303030303030304,
        "averageDamageDealt": 0.6914600550964187,
        "averageDamageTaken": 0.35537190082644626,
        "averageNetDamage": 0.33608815426997246,
        "lethalMoves": 12,
        "roundClosers": 37,
        "byModel": [
          {
            "modelId": "regular",
            "played": 148,
            "winRate": 0.5067567567567568
          },
          {
            "modelId": "expert",
            "played": 69,
            "winRate": 0.4782608695652174
          },
          {
            "modelId": "opportunist",
            "played": 65,
            "winRate": 0.5692307692307692
          },
          {
            "modelId": "champion",
            "played": 48,
            "winRate": 0.5833333333333334
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
            "played": 136,
            "winRate": 0.4485294117647059
          },
          {
            "deckPresetId": "starter12",
            "played": 118,
            "winRate": 0.559322033898305
          },
          {
            "deckPresetId": "starter14",
            "played": 109,
            "winRate": 0.42201834862385323
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
        "offered": 1438,
        "played": 356,
        "ignored": 1082,
        "selectionRate": 0.24756606397774686,
        "wins": 188,
        "losses": 168,
        "draws": 0,
        "winRateWhenPlayed": 0.5280898876404494,
        "averageFlips": 0.6910112359550562,
        "failedImpactRate": 0.3787878787878788,
        "averageFlipMargin": 1.6016260162601625,
        "averageEffectAmount": 0.5449438202247191,
        "averageDamageDealt": 1.1348314606741574,
        "averageDamageTaken": 0.3848314606741573,
        "averageNetDamage": 0.7500000000000001,
        "lethalMoves": 5,
        "roundClosers": 47,
        "byModel": [
          {
            "modelId": "regular",
            "played": 132,
            "winRate": 0.5757575757575758
          },
          {
            "modelId": "opportunist",
            "played": 72,
            "winRate": 0.5833333333333334
          },
          {
            "modelId": "expert",
            "played": 63,
            "winRate": 0.5873015873015873
          },
          {
            "modelId": "champion",
            "played": 54,
            "winRate": 0.6111111111111112
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
            "played": 126,
            "winRate": 0.5476190476190477
          },
          {
            "deckPresetId": "starter12",
            "played": 126,
            "winRate": 0.5158730158730159
          },
          {
            "deckPresetId": "starter14",
            "played": 104,
            "winRate": 0.5192307692307693
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
        "offered": 1447,
        "played": 354,
        "ignored": 1093,
        "selectionRate": 0.24464409122322045,
        "wins": 178,
        "losses": 176,
        "draws": 0,
        "winRateWhenPlayed": 0.5028248587570622,
        "averageFlips": 0.7768361581920904,
        "failedImpactRate": 0.3125,
        "averageFlipMargin": 1.5418181818181818,
        "averageEffectAmount": 0.7768361581920904,
        "averageDamageDealt": 0.3333333333333333,
        "averageDamageTaken": 0.3389830508474576,
        "averageNetDamage": -0.005649717514124297,
        "lethalMoves": 3,
        "roundClosers": 31,
        "byModel": [
          {
            "modelId": "regular",
            "played": 147,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 86,
            "winRate": 0.5465116279069767
          },
          {
            "modelId": "expert",
            "played": 64,
            "winRate": 0.4375
          },
          {
            "modelId": "champion",
            "played": 35,
            "winRate": 0.5428571428571428
          },
          {
            "modelId": "beginner",
            "played": 22,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 138,
            "winRate": 0.5507246376811594
          },
          {
            "deckPresetId": "starter12",
            "played": 117,
            "winRate": 0.46153846153846156
          },
          {
            "deckPresetId": "starter14",
            "played": 99,
            "winRate": 0.48484848484848486
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
        "offered": 1533,
        "played": 340,
        "ignored": 1193,
        "selectionRate": 0.2217873450750163,
        "wins": 174,
        "losses": 166,
        "draws": 0,
        "winRateWhenPlayed": 0.5117647058823529,
        "averageFlips": 0.4647058823529412,
        "failedImpactRate": 0.46075085324232085,
        "averageFlipMargin": 1.6265822784810127,
        "averageEffectAmount": 0.5735294117647058,
        "averageDamageDealt": 0.49411764705882355,
        "averageDamageTaken": 0.45,
        "averageNetDamage": 0.04411764705882354,
        "lethalMoves": 3,
        "roundClosers": 45,
        "byModel": [
          {
            "modelId": "regular",
            "played": 153,
            "winRate": 0.5555555555555556
          },
          {
            "modelId": "opportunist",
            "played": 73,
            "winRate": 0.4520547945205479
          },
          {
            "modelId": "expert",
            "played": 53,
            "winRate": 0.5471698113207547
          },
          {
            "modelId": "champion",
            "played": 31,
            "winRate": 0.8709677419354839
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
            "played": 136,
            "winRate": 0.4338235294117647
          },
          {
            "deckPresetId": "starter12",
            "played": 111,
            "winRate": 0.5225225225225225
          },
          {
            "deckPresetId": "starter14",
            "played": 93,
            "winRate": 0.6129032258064516
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
        "offered": 1605,
        "played": 333,
        "ignored": 1272,
        "selectionRate": 0.20747663551401868,
        "wins": 149,
        "losses": 184,
        "draws": 0,
        "winRateWhenPlayed": 0.44744744744744747,
        "averageFlips": 0.40540540540540543,
        "failedImpactRate": 0.53125,
        "averageFlipMargin": 1.3555555555555556,
        "averageEffectAmount": 0.5345345345345346,
        "averageDamageDealt": 0.7327327327327328,
        "averageDamageTaken": 0.4444444444444444,
        "averageNetDamage": 0.28828828828828834,
        "lethalMoves": 10,
        "roundClosers": 57,
        "byModel": [
          {
            "modelId": "regular",
            "played": 131,
            "winRate": 0.4580152671755725
          },
          {
            "modelId": "opportunist",
            "played": 69,
            "winRate": 0.5652173913043478
          },
          {
            "modelId": "expert",
            "played": 69,
            "winRate": 0.463768115942029
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 0.46153846153846156
          },
          {
            "modelId": "beginner",
            "played": 25,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter10",
            "played": 119,
            "winRate": 0.44537815126050423
          },
          {
            "deckPresetId": "starter12",
            "played": 112,
            "winRate": 0.4107142857142857
          },
          {
            "deckPresetId": "starter14",
            "played": 102,
            "winRate": 0.49019607843137253
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
        "offered": 1517,
        "played": 293,
        "ignored": 1224,
        "selectionRate": 0.1931443638760712,
        "wins": 143,
        "losses": 150,
        "draws": 0,
        "winRateWhenPlayed": 0.4880546075085324,
        "averageFlips": 0.3583617747440273,
        "failedImpactRate": 0.46153846153846156,
        "averageFlipMargin": 1.6666666666666667,
        "averageEffectAmount": 0.26621160409556316,
        "averageDamageDealt": 0.19795221843003413,
        "averageDamageTaken": 0.18771331058020477,
        "averageNetDamage": 0.010238907849829365,
        "lethalMoves": 0,
        "roundClosers": 16,
        "byModel": [
          {
            "modelId": "regular",
            "played": 139,
            "winRate": 0.5323741007194245
          },
          {
            "modelId": "opportunist",
            "played": 52,
            "winRate": 0.4423076923076923
          },
          {
            "modelId": "expert",
            "played": 46,
            "winRate": 0.6304347826086957
          },
          {
            "modelId": "champion",
            "played": 32,
            "winRate": 0.53125
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
            "played": 118,
            "winRate": 0.5169491525423728
          },
          {
            "deckPresetId": "starter14",
            "played": 89,
            "winRate": 0.4943820224719101
          },
          {
            "deckPresetId": "starter12",
            "played": 86,
            "winRate": 0.4418604651162791
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
        "offered": 792,
        "played": 263,
        "ignored": 529,
        "selectionRate": 0.33207070707070707,
        "wins": 148,
        "losses": 115,
        "draws": 0,
        "winRateWhenPlayed": 0.5627376425855514,
        "averageFlips": 0.8365019011406845,
        "failedImpactRate": 0.2114695340501792,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 0.5665399239543726,
        "averageDamageDealt": 0.9315589353612167,
        "averageDamageTaken": 0.22813688212927757,
        "averageNetDamage": 0.7034220532319391,
        "lethalMoves": 5,
        "roundClosers": 20,
        "byModel": [
          {
            "modelId": "regular",
            "played": 103,
            "winRate": 0.6407766990291263
          },
          {
            "modelId": "opportunist",
            "played": 66,
            "winRate": 0.6818181818181818
          },
          {
            "modelId": "expert",
            "played": 56,
            "winRate": 0.44642857142857145
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.48
          },
          {
            "modelId": "beginner",
            "played": 13,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 145,
            "winRate": 0.6137931034482759
          },
          {
            "deckPresetId": "starter14",
            "played": 118,
            "winRate": 0.5
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
        "offered": 744,
        "played": 242,
        "ignored": 502,
        "selectionRate": 0.32526881720430106,
        "wins": 131,
        "losses": 111,
        "draws": 0,
        "winRateWhenPlayed": 0.5413223140495868,
        "averageFlips": 0.2603305785123967,
        "failedImpactRate": 0.5655172413793104,
        "averageFlipMargin": 1.7936507936507937,
        "averageEffectAmount": 1.628099173553719,
        "averageDamageDealt": 0.4132231404958678,
        "averageDamageTaken": 0.28512396694214875,
        "averageNetDamage": 0.12809917355371903,
        "lethalMoves": 3,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 105,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 48,
            "winRate": 0.4791666666666667
          },
          {
            "modelId": "expert",
            "played": 46,
            "winRate": 0.6521739130434783
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 0.72
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
            "played": 127,
            "winRate": 0.5118110236220472
          },
          {
            "deckPresetId": "starter14",
            "played": 115,
            "winRate": 0.5739130434782609
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
        "offered": 914,
        "played": 226,
        "ignored": 688,
        "selectionRate": 0.24726477024070023,
        "wins": 122,
        "losses": 104,
        "draws": 0,
        "winRateWhenPlayed": 0.5398230088495575,
        "averageFlips": 0.3672566371681416,
        "failedImpactRate": 0.5808080808080808,
        "averageFlipMargin": 1.1927710843373494,
        "averageEffectAmount": 0.672566371681416,
        "averageDamageDealt": 0.6283185840707964,
        "averageDamageTaken": 0.37168141592920356,
        "averageNetDamage": 0.2566371681415929,
        "lethalMoves": 3,
        "roundClosers": 35,
        "byModel": [
          {
            "modelId": "regular",
            "played": 108,
            "winRate": 0.5277777777777778
          },
          {
            "modelId": "expert",
            "played": 45,
            "winRate": 0.6
          },
          {
            "modelId": "opportunist",
            "played": 35,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "champion",
            "played": 28,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "beginner",
            "played": 10,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter12",
            "played": 115,
            "winRate": 0.5130434782608696
          },
          {
            "deckPresetId": "starter14",
            "played": 111,
            "winRate": 0.5675675675675675
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
        "offered": 1011,
        "played": 199,
        "ignored": 812,
        "selectionRate": 0.19683481701285854,
        "wins": 93,
        "losses": 106,
        "draws": 0,
        "winRateWhenPlayed": 0.46733668341708545,
        "averageFlips": 0.4371859296482412,
        "failedImpactRate": 0.49710982658959535,
        "averageFlipMargin": 1.3333333333333333,
        "averageEffectAmount": 0.2613065326633166,
        "averageDamageDealt": 0.6030150753768844,
        "averageDamageTaken": 0.32663316582914576,
        "averageNetDamage": 0.2763819095477386,
        "lethalMoves": 1,
        "roundClosers": 25,
        "byModel": [
          {
            "modelId": "regular",
            "played": 72,
            "winRate": 0.5138888888888888
          },
          {
            "modelId": "expert",
            "played": 54,
            "winRate": 0.46296296296296297
          },
          {
            "modelId": "opportunist",
            "played": 32,
            "winRate": 0.59375
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 0.5217391304347826
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
            "played": 110,
            "winRate": 0.4727272727272727
          },
          {
            "deckPresetId": "starter14",
            "played": 89,
            "winRate": 0.4606741573033708
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
        "offered": 346,
        "played": 118,
        "ignored": 228,
        "selectionRate": 0.34104046242774566,
        "wins": 55,
        "losses": 63,
        "draws": 0,
        "winRateWhenPlayed": 0.4661016949152542,
        "averageFlips": 0.4406779661016949,
        "failedImpactRate": 0.49019607843137253,
        "averageFlipMargin": 2.173076923076923,
        "averageEffectAmount": 0.9322033898305084,
        "averageDamageDealt": 0.3389830508474576,
        "averageDamageTaken": 0.3050847457627119,
        "averageNetDamage": 0.03389830508474573,
        "lethalMoves": 1,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 45,
            "winRate": 0.4888888888888889
          },
          {
            "modelId": "expert",
            "played": 32,
            "winRate": 0.71875
          },
          {
            "modelId": "opportunist",
            "played": 21,
            "winRate": 0.23809523809523808
          },
          {
            "modelId": "champion",
            "played": 11,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 118,
            "winRate": 0.4661016949152542
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
        "offered": 404,
        "played": 99,
        "ignored": 305,
        "selectionRate": 0.24504950495049505,
        "wins": 51,
        "losses": 48,
        "draws": 0,
        "winRateWhenPlayed": 0.5151515151515151,
        "averageFlips": 0.42424242424242425,
        "failedImpactRate": 0.38235294117647056,
        "averageFlipMargin": 1.3333333333333333,
        "averageEffectAmount": 0.25252525252525254,
        "averageDamageDealt": 0.21212121212121213,
        "averageDamageTaken": 0.25252525252525254,
        "averageNetDamage": -0.040404040404040414,
        "lethalMoves": 1,
        "roundClosers": 7,
        "byModel": [
          {
            "modelId": "regular",
            "played": 37,
            "winRate": 0.5945945945945946
          },
          {
            "modelId": "expert",
            "played": 27,
            "winRate": 0.6296296296296297
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.47058823529411764
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0
          }
        ],
        "byDeck": [
          {
            "deckPresetId": "starter14",
            "played": 99,
            "winRate": 0.5151515151515151
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
        "offered": 433,
        "played": 92,
        "ignored": 341,
        "selectionRate": 0.21247113163972287,
        "wins": 54,
        "losses": 38,
        "draws": 0,
        "winRateWhenPlayed": 0.5869565217391305,
        "averageFlips": 0.6956521739130435,
        "failedImpactRate": 0.26436781609195403,
        "averageFlipMargin": 1.171875,
        "averageEffectAmount": 0.6956521739130435,
        "averageDamageDealt": 0.30434782608695654,
        "averageDamageTaken": 0.09782608695652174,
        "averageNetDamage": 0.2065217391304348,
        "lethalMoves": 1,
        "roundClosers": 5,
        "byModel": [
          {
            "modelId": "expert",
            "played": 30,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "regular",
            "played": 30,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.7058823529411765
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0.7
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
            "played": 92,
            "winRate": 0.5869565217391305
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
        "offered": 9285,
        "played": 2608,
        "ignored": 6677,
        "selectionRate": 0.2808831448572967,
        "wins": 1283,
        "losses": 1325,
        "draws": 0,
        "winRateWhenPlayed": 0.4919478527607362,
        "averageFlips": 0.5034509202453987,
        "averageDamageDealt": 0.8148006134969326,
        "averageNetDamage": 0.4984662576687117,
        "topCards": [
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 428,
            "winRateWhenPlayed": 0.4672897196261682
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 412,
            "winRateWhenPlayed": 0.4563106796116505
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 402,
            "winRateWhenPlayed": 0.5621890547263682
          },
          {
            "cardId": "ash-whisper",
            "name": "Murmure de cendre",
            "played": 378,
            "winRateWhenPlayed": 0.49206349206349204
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 363,
            "winRateWhenPlayed": 0.4765840220385675
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
        "offered": 10350,
        "played": 2291,
        "ignored": 8059,
        "selectionRate": 0.22135265700483092,
        "wins": 1172,
        "losses": 1119,
        "draws": 0,
        "winRateWhenPlayed": 0.5115670013094719,
        "averageFlips": 0.44652989960715844,
        "averageDamageDealt": 0.4343081623745089,
        "averageNetDamage": 0.1702313400261894,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 428,
            "winRateWhenPlayed": 0.6051401869158879
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 389,
            "winRateWhenPlayed": 0.5244215938303342
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 388,
            "winRateWhenPlayed": 0.4948453608247423
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 293,
            "winRateWhenPlayed": 0.4880546075085324
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 267,
            "winRateWhenPlayed": 0.45318352059925093
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
        "offered": 9862,
        "played": 2285,
        "ignored": 7577,
        "selectionRate": 0.23169742445751368,
        "wins": 1184,
        "losses": 1101,
        "draws": 0,
        "winRateWhenPlayed": 0.5181619256017506,
        "averageFlips": 0.5566739606126915,
        "averageDamageDealt": 0.5859956236323851,
        "averageNetDamage": 0.27833698030634574,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 410,
            "winRateWhenPlayed": 0.5097560975609756
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 378,
            "winRateWhenPlayed": 0.5873015873015873
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 354,
            "winRateWhenPlayed": 0.5028248587570622
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 340,
            "winRateWhenPlayed": 0.5117647058823529
          },
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 333,
            "winRateWhenPlayed": 0.44744744744744747
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
        "offered": 4320,
        "played": 1058,
        "ignored": 3262,
        "selectionRate": 0.2449074074074074,
        "wins": 548,
        "losses": 510,
        "draws": 0,
        "winRateWhenPlayed": 0.5179584120982986,
        "averageFlips": 0.3950850661625709,
        "averageDamageDealt": 0.45179584120982985,
        "averageNetDamage": 0.15689981096408318,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 242,
            "winRateWhenPlayed": 0.5413223140495868
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 226,
            "winRateWhenPlayed": 0.5398230088495575
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 199,
            "winRateWhenPlayed": 0.46733668341708545
          },
          {
            "cardId": "spring-knave",
            "name": "Valet ressort",
            "played": 118,
            "winRateWhenPlayed": 0.4661016949152542
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 99,
            "winRateWhenPlayed": 0.5151515151515151
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
        "offered": 15882,
        "played": 4190,
        "ignored": 11692,
        "selectionRate": 0.263820677496537,
        "wins": 2186,
        "losses": 2004,
        "draws": 0,
        "winRateWhenPlayed": 0.5217183770883055,
        "averageFlips": 0.47995226730310264,
        "averageDamageDealt": 0.6804295942720764,
        "averageNetDamage": 0.3346062052505967,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 248,
            "winRateWhenPlayed": 0.6209677419354839
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 248,
            "winRateWhenPlayed": 0.4798387096774194
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 237,
            "winRateWhenPlayed": 0.45569620253164556
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 230,
            "winRateWhenPlayed": 0.5043478260869565
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 226,
            "winRateWhenPlayed": 0.6017699115044248
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
        "offered": 5559,
        "played": 1510,
        "ignored": 4049,
        "selectionRate": 0.2716315884151826,
        "wins": 756,
        "losses": 754,
        "draws": 0,
        "winRateWhenPlayed": 0.5006622516556292,
        "averageFlips": 0.5231788079470199,
        "averageDamageDealt": 0.5682119205298013,
        "averageNetDamage": 0.3463576158940397,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 180,
            "winRateWhenPlayed": 0.5833333333333334
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 180,
            "winRateWhenPlayed": 0.45
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 177,
            "winRateWhenPlayed": 0.5480225988700564
          },
          {
            "cardId": "brimstone-tot",
            "name": "Bambin soufre",
            "played": 177,
            "winRateWhenPlayed": 0.4745762711864407
          },
          {
            "cardId": "gate-thief",
            "name": "Voleuse des portes",
            "played": 175,
            "winRateWhenPlayed": 0.5028571428571429
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
        "offered": 4428,
        "played": 1020,
        "ignored": 3408,
        "selectionRate": 0.23035230352303523,
        "wins": 499,
        "losses": 521,
        "draws": 0,
        "winRateWhenPlayed": 0.4892156862745098,
        "averageFlips": 0.4852941176470588,
        "averageDamageDealt": 0.4411764705882353,
        "averageNetDamage": 0.16274509803921566,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 180,
            "winRateWhenPlayed": 0.5166666666666667
          },
          {
            "cardId": "mole",
            "name": "Ecureuil mineur",
            "played": 175,
            "winRateWhenPlayed": 0.4857142857142857
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 175,
            "winRateWhenPlayed": 0.45714285714285713
          },
          {
            "cardId": "stag",
            "name": "Herisson lumisylve",
            "played": 164,
            "winRateWhenPlayed": 0.524390243902439
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 157,
            "winRateWhenPlayed": 0.46496815286624205
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
        "offered": 2866,
        "played": 603,
        "ignored": 2263,
        "selectionRate": 0.2103977669225401,
        "wins": 312,
        "losses": 291,
        "draws": 0,
        "winRateWhenPlayed": 0.5174129353233831,
        "averageFlips": 0.48258706467661694,
        "averageDamageDealt": 0.6285240464344942,
        "averageNetDamage": 0.36815920398009955,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 176,
            "winRateWhenPlayed": 0.5113636363636364
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 175,
            "winRateWhenPlayed": 0.49142857142857144
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 137,
            "winRateWhenPlayed": 0.5255474452554745
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 115,
            "winRateWhenPlayed": 0.5565217391304348
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
        "offered": 2960,
        "played": 540,
        "ignored": 2420,
        "selectionRate": 0.18243243243243243,
        "wins": 265,
        "losses": 275,
        "draws": 0,
        "winRateWhenPlayed": 0.49074074074074076,
        "averageFlips": 0.5037037037037037,
        "averageDamageDealt": 0.45740740740740743,
        "averageNetDamage": 0.26851851851851855,
        "topCards": [
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 171,
            "winRateWhenPlayed": 0.5146198830409356
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 161,
            "winRateWhenPlayed": 0.4906832298136646
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 156,
            "winRateWhenPlayed": 0.46153846153846156
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 52,
            "winRateWhenPlayed": 0.5
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
        "offered": 1312,
        "played": 210,
        "ignored": 1102,
        "selectionRate": 0.1600609756097561,
        "wins": 99,
        "losses": 111,
        "draws": 0,
        "winRateWhenPlayed": 0.4714285714285714,
        "averageFlips": 0.4380952380952381,
        "averageDamageDealt": 0.18571428571428572,
        "averageNetDamage": -0.033333333333333326,
        "topCards": [
          {
            "cardId": "owl",
            "name": "Chaton des ronces",
            "played": 153,
            "winRateWhenPlayed": 0.46405228758169936
          },
          {
            "cardId": "copper-beetle",
            "name": "Scarabee cuivre",
            "played": 57,
            "winRateWhenPlayed": 0.49122807017543857
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
        "offered": 810,
        "played": 169,
        "ignored": 641,
        "selectionRate": 0.20864197530864198,
        "wins": 70,
        "losses": 99,
        "draws": 0,
        "winRateWhenPlayed": 0.41420118343195267,
        "averageFlips": 0.4437869822485207,
        "averageDamageDealt": 0.6686390532544378,
        "averageNetDamage": 0.24260355029585795,
        "topCards": [
          {
            "cardId": "banner-squire",
            "name": "Ecuyere banniere",
            "played": 169,
            "winRateWhenPlayed": 0.41420118343195267
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
        "offered": 33817,
        "played": 8242,
        "ignored": 25575,
        "selectionRate": 0.24372357098500755,
        "wins": 4187,
        "losses": 4055,
        "draws": 0,
        "winRateWhenPlayed": 0.5080077651055569,
        "averageFlips": 0.48847367143897114,
        "averageDamageDealt": 0.5990050958505218,
        "averageNetDamage": 0.3023537976219365,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 428,
            "winRateWhenPlayed": 0.6051401869158879
          },
          {
            "cardId": "little-abyss",
            "name": "Petit abysse",
            "played": 428,
            "winRateWhenPlayed": 0.4672897196261682
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 412,
            "winRateWhenPlayed": 0.4563106796116505
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 410,
            "winRateWhenPlayed": 0.5097560975609756
          },
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 402,
            "winRateWhenPlayed": 0.5621890547263682
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
        "count": 621,
        "wins": 295,
        "losses": 326,
        "draws": 0,
        "winRate": 0.4750402576489533,
        "averageFlips": 0.6086956521739131,
        "averageDamageDealt": 0.9355877616747182,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->human",
        "kind": "family-chain",
        "label": "demon -> human",
        "count": 607,
        "wins": 300,
        "losses": 307,
        "draws": 0,
        "winRate": 0.4942339373970346,
        "averageFlips": 0.6210873146622735,
        "averageDamageDealt": 0.6606260296540363,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->familiar",
        "kind": "family-chain",
        "label": "demon -> familiar",
        "count": 589,
        "wins": 292,
        "losses": 297,
        "draws": 0,
        "winRate": 0.49575551782682514,
        "averageFlips": 0.5534804753820034,
        "averageDamageDealt": 0.44991511035653653,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->demon",
        "kind": "family-chain",
        "label": "familiar -> demon",
        "count": 575,
        "wins": 299,
        "losses": 276,
        "draws": 0,
        "winRate": 0.52,
        "averageFlips": 0.5147826086956522,
        "averageDamageDealt": 0.9147826086956522,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 560,
        "wins": 335,
        "losses": 225,
        "draws": 0,
        "winRate": 0.5982142857142857,
        "averageFlips": 0.6160714285714286,
        "averageDamageDealt": 0.8196428571428571,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->demon",
        "kind": "family-chain",
        "label": "human -> demon",
        "count": 531,
        "wins": 250,
        "losses": 281,
        "draws": 0,
        "winRate": 0.4708097928436911,
        "averageFlips": 0.6384180790960452,
        "averageDamageDealt": 0.9529190207156308,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 506,
        "wins": 281,
        "losses": 225,
        "draws": 0,
        "winRate": 0.5553359683794467,
        "averageFlips": 0.567193675889328,
        "averageDamageDealt": 0.658102766798419,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->human",
        "kind": "family-chain",
        "label": "familiar -> human",
        "count": 493,
        "wins": 243,
        "losses": 250,
        "draws": 0,
        "winRate": 0.49290060851926976,
        "averageFlips": 0.5334685598377282,
        "averageDamageDealt": 0.6146044624746451,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 417,
        "wins": 262,
        "losses": 155,
        "draws": 0,
        "winRate": 0.6282973621103117,
        "averageFlips": 0.6546762589928058,
        "averageDamageDealt": 1.1510791366906474,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:human->familiar",
        "kind": "family-chain",
        "label": "human -> familiar",
        "count": 415,
        "wins": 200,
        "losses": 215,
        "draws": 0,
        "winRate": 0.4819277108433735,
        "averageFlips": 0.5204819277108433,
        "averageDamageDealt": 0.708433734939759,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:little-abyss:deal-damage",
        "kind": "effect",
        "label": "Petit abysse -> deal-damage",
        "count": 414,
        "wins": 192,
        "losses": 222,
        "draws": 0,
        "winRate": 0.463768115942029,
        "averageFlips": 0.30434782608695654,
        "averageDamageDealt": 1.0990338164251208,
        "averageEffectAmount": 0.821256038647343,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 410,
        "wins": 209,
        "losses": 201,
        "draws": 0,
        "winRate": 0.5097560975609756,
        "averageFlips": 0.35121951219512193,
        "averageDamageDealt": 0.3926829268292683,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:hornling:deal-damage",
        "kind": "effect",
        "label": "Cornu farceur -> deal-damage",
        "count": 379,
        "wins": 219,
        "losses": 160,
        "draws": 0,
        "winRate": 0.5778364116094987,
        "averageFlips": 0.5910290237467019,
        "averageDamageDealt": 1.3509234828496042,
        "averageEffectAmount": 0.8047493403693932,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 362,
        "wins": 225,
        "losses": 137,
        "draws": 0,
        "winRate": 0.6215469613259669,
        "averageFlips": 0.5773480662983426,
        "averageDamageDealt": 1.281767955801105,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+human",
        "kind": "friendly-adjacent",
        "label": "demon allie + human",
        "count": 358,
        "wins": 218,
        "losses": 140,
        "draws": 0,
        "winRate": 0.6089385474860335,
        "averageFlips": 0.4664804469273743,
        "averageDamageDealt": 1.047486033519553,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+familiar",
        "kind": "friendly-adjacent",
        "label": "demon allie + familiar",
        "count": 343,
        "wins": 182,
        "losses": 161,
        "draws": 0,
        "winRate": 0.5306122448979592,
        "averageFlips": 0.4402332361516035,
        "averageDamageDealt": 1.0262390670553936,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:pact-sprite:boost-self",
        "kind": "effect",
        "label": "Lutin a pacte -> boost-self",
        "count": 324,
        "wins": 153,
        "losses": 171,
        "draws": 0,
        "winRate": 0.4722222222222222,
        "averageFlips": 0.7469135802469136,
        "averageDamageDealt": 0.8487654320987654,
        "averageEffectAmount": 1,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 318,
        "wins": 203,
        "losses": 115,
        "draws": 0,
        "winRate": 0.6383647798742138,
        "averageFlips": 0.16037735849056603,
        "averageDamageDealt": 0.27044025157232704,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+human",
        "kind": "friendly-adjacent",
        "label": "familiar allie + human",
        "count": 311,
        "wins": 191,
        "losses": 120,
        "draws": 0,
        "winRate": 0.6141479099678456,
        "averageFlips": 0.4437299035369775,
        "averageDamageDealt": 1.2958199356913183,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:demon+demon",
        "kind": "friendly-adjacent",
        "label": "demon allie + demon",
        "count": 307,
        "wins": 186,
        "losses": 121,
        "draws": 0,
        "winRate": 0.6058631921824105,
        "averageFlips": 0.50814332247557,
        "averageDamageDealt": 1.739413680781759,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+demon",
        "kind": "friendly-adjacent",
        "label": "familiar allie + demon",
        "count": 287,
        "wins": 183,
        "losses": 104,
        "draws": 0,
        "winRate": 0.6376306620209059,
        "averageFlips": 0.4912891986062718,
        "averageDamageDealt": 1.5261324041811846,
        "averageEffectAmount": 0,
        "notes": [
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:gate-thief:draw-next-turn",
        "kind": "effect",
        "label": "Voleuse des portes -> draw-next-turn",
        "count": 269,
        "wins": 148,
        "losses": 121,
        "draws": 0,
        "winRate": 0.550185873605948,
        "averageFlips": 1.0223048327137547,
        "averageDamageDealt": 0.4052044609665427,
        "averageEffectAmount": 1.0223048327137547,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "family-chain:demon->automaton",
        "kind": "family-chain",
        "label": "demon -> automaton",
        "count": 256,
        "wins": 132,
        "losses": 124,
        "draws": 0,
        "winRate": 0.515625,
        "averageFlips": 0.4140625,
        "averageDamageDealt": 0.6015625,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 250,
        "wins": 174,
        "losses": 76,
        "draws": 0,
        "winRate": 0.696,
        "averageFlips": 0.516,
        "averageDamageDealt": 1.196,
        "averageEffectAmount": 2.52,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1842,
        "id": "card-quiet-monk-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Moine du seuil est ignoree par les bots",
        "detail": "1842 offres, 11% selection, role anchor.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1737,
        "id": "card-heron-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "1737 offres, 15% selection, role connector.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1722,
        "id": "card-foxfire-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Requin runefer est ignoree par les bots",
        "detail": "1722 offres, 16% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1654,
        "id": "card-owl-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Chaton des ronces est ignoree par les bots",
        "detail": "1654 offres, 16% selection, role stabilizer.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 1573,
        "id": "card-cinder-grin-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Sourire de suie est ignoree par les bots",
        "detail": "1573 offres, 17% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 468,
        "id": "card-tin-oracle-ignored",
        "severity": "problem",
        "action": "buff",
        "title": "Oracle de fer-blanc est ignoree par les bots",
        "detail": "468 offres, 18% selection, role payoff.",
        "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 1312,
        "id": "role-stabilizer-buff",
        "severity": "watch",
        "action": "verify",
        "title": "stabilizer manque d'attraction",
        "detail": "1312 offres, 16% selection, 47% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-effect:gate-thief:draw-next-turn",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 269,
        "title": "Voleuse des portes -> draw-next-turn ressort comme combo",
        "detail": "269 occurrences, 55% win, 1.02 flips, 0.41 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "deck-starter10-problem",
      "severity": "problem",
      "title": "starter10 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (83%).",
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
      "id": "deck-starter14-problem",
      "severity": "problem",
      "title": "starter14 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (67%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "skill-inversion-starter14-expert-vs-champion",
      "severity": "problem",
      "title": "Inversion de niveau detectee",
      "detail": "Expert bat Champion sur starter14 (58.3% contre 41.7%).",
      "recommendation": "Regarder les cartes ou situations qui recompensent trop le jeu immediat."
    },
    {
      "id": "diagnostic-card-quiet-monk-ignored",
      "severity": "problem",
      "title": "Moine du seuil est ignoree par les bots",
      "detail": "1842 offres, 11% selection, role anchor. Confiance high, echantillon 1842.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "problem",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "1737 offres, 15% selection, role connector. Confiance high, echantillon 1737.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-foxfire-ignored",
      "severity": "problem",
      "title": "Requin runefer est ignoree par les bots",
      "detail": "1722 offres, 16% selection, role payoff. Confiance high, echantillon 1722.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "diagnostic-card-owl-ignored",
      "severity": "problem",
      "title": "Chaton des ronces est ignoree par les bots",
      "detail": "1654 offres, 16% selection, role stabilizer. Confiance high, echantillon 1654.",
      "recommendation": "Clarifier son usage: meilleure face d'ouverture, effet plus lisible, ou role plus specialise."
    },
    {
      "id": "champion-underperforms-starter14",
      "severity": "watch",
      "title": "Le champion ne depasse pas l'expert",
      "detail": "Champion gagne 41.7% contre Expert sur starter14.",
      "recommendation": "Relancer `npm run ai:train` puis refaire un rapport AI lab pour verifier la promotion."
    }
  ]
};
