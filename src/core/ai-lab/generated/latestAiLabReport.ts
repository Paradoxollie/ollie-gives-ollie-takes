import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260518-161929",
  "generatedAt": "2026-05-18T16:19:29.127Z",
  "config": {
    "matchesPerPairing": 6,
    "seed": 2,
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
      "games": 18,
      "wins": 0,
      "losses": 18,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -22.166666666666668
    },
    {
      "modelId": "opportunist",
      "games": 36,
      "wins": 19,
      "losses": 17,
      "draws": 0,
      "winRate": 0.5277777777777778,
      "averageHpEdge": 6.638888888888889
    },
    {
      "modelId": "regular",
      "games": 36,
      "wins": 17,
      "losses": 19,
      "draws": 0,
      "winRate": 0.4722222222222222,
      "averageHpEdge": -0.08333333333333333
    },
    {
      "modelId": "expert",
      "games": 36,
      "wins": 24,
      "losses": 12,
      "draws": 0,
      "winRate": 0.6666666666666666,
      "averageHpEdge": 2.6944444444444446
    },
    {
      "modelId": "champion",
      "games": 18,
      "wins": 12,
      "losses": 6,
      "draws": 0,
      "winRate": 0.6666666666666666,
      "averageHpEdge": 3.6666666666666665
    }
  ],
  "deckSummaries": [
    {
      "deckPresetId": "starter10",
      "mirrorModelId": "regular",
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 46.5,
        "rounds": 5.166666666666667,
        "flipsPerMatch": 17.666666666666668,
        "flipsPerTurn": 0.37992831541218636,
        "reshuffles": 8.166666666666666,
        "deadTurns": 0,
        "finalHpDifference": 6.333333333333333
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
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayerWinRate": 0.5,
      "averages": {
        "turns": 54,
        "rounds": 6,
        "flipsPerMatch": 18.333333333333332,
        "flipsPerTurn": 0.3395061728395062,
        "reshuffles": 6.333333333333333,
        "deadTurns": 0,
        "finalHpDifference": 4.333333333333333
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
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayerWinRate": 1,
      "averages": {
        "turns": 49.5,
        "rounds": 5.5,
        "flipsPerMatch": 17.5,
        "flipsPerTurn": 0.35353535353535354,
        "reshuffles": 4,
        "deadTurns": 0,
        "finalHpDifference": 6.666666666666667
      },
      "deadTurnFrequency": 0,
      "status": "problem",
      "notes": [
        "Avantage premier joueur tres marque (100%)."
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
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 6,
          "wins": 0,
          "losses": 6,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -23
        },
        {
          "modelId": "opportunist",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 23
        }
      ],
      "averages": {
        "turns": 30,
        "rounds": 3.3333333333333335,
        "flipsPerMatch": 17.666666666666668,
        "flipsPerTurn": 0.5888888888888889,
        "reshuffles": 3.8333333333333335,
        "deadTurns": 0,
        "finalHpDifference": 23
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 6,
          "wins": 0,
          "losses": 6,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -8.666666666666666
        },
        {
          "modelId": "regular",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 8.666666666666666
        }
      ],
      "averages": {
        "turns": 47.5,
        "rounds": 5.333333333333333,
        "flipsPerMatch": 25.166666666666668,
        "flipsPerTurn": 0.5298245614035088,
        "reshuffles": 7.166666666666667,
        "deadTurns": 0.5,
        "finalHpDifference": 8.666666666666666
      },
      "deadTurnFrequency": 0.010526315789473684
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 6,
          "wins": 0,
          "losses": 6,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -9.5
        },
        {
          "modelId": "expert",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 9.5
        }
      ],
      "averages": {
        "turns": 45,
        "rounds": 5,
        "flipsPerMatch": 20,
        "flipsPerTurn": 0.4444444444444444,
        "reshuffles": 7.333333333333333,
        "deadTurns": 0,
        "finalHpDifference": 9.5
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter10",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 1,
          "winRate": 0.25
        },
        "enemy": {
          "games": 2,
          "wins": 2,
          "winRate": 1
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 6,
          "wins": 2,
          "losses": 4,
          "draws": 0,
          "winRate": 0.3333333333333333,
          "averageHpEdge": -3.5
        },
        {
          "modelId": "champion",
          "games": 6,
          "wins": 4,
          "losses": 2,
          "draws": 0,
          "winRate": 0.6666666666666666,
          "averageHpEdge": 3.5
        }
      ],
      "averages": {
        "turns": 45,
        "rounds": 5,
        "flipsPerMatch": 24.5,
        "flipsPerTurn": 0.5444444444444444,
        "reshuffles": 7.166666666666667,
        "deadTurns": 0,
        "finalHpDifference": 11.5
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 6,
          "wins": 0,
          "losses": 6,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -21.5
        },
        {
          "modelId": "opportunist",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.5
        }
      ],
      "averages": {
        "turns": 33.833333333333336,
        "rounds": 3.8333333333333335,
        "flipsPerMatch": 18.833333333333332,
        "flipsPerTurn": 0.5566502463054187,
        "reshuffles": 3.1666666666666665,
        "deadTurns": 0,
        "finalHpDifference": 21.5
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "opportunist",
        "regular"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 3,
          "winRate": 0.75
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.6666666666666666
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 6,
          "wins": 1,
          "losses": 5,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -9.666666666666666
        },
        {
          "modelId": "regular",
          "games": 6,
          "wins": 5,
          "losses": 1,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 9.666666666666666
        }
      ],
      "averages": {
        "turns": 40.833333333333336,
        "rounds": 4.666666666666667,
        "flipsPerMatch": 24.833333333333332,
        "flipsPerTurn": 0.6081632653061224,
        "reshuffles": 4.666666666666667,
        "deadTurns": 0,
        "finalHpDifference": 12.333333333333334
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 6,
          "wins": 0,
          "losses": 6,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -7
        },
        {
          "modelId": "expert",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 7
        }
      ],
      "averages": {
        "turns": 51,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 19.166666666666668,
        "flipsPerTurn": 0.3758169934640523,
        "reshuffles": 6,
        "deadTurns": 0,
        "finalHpDifference": 7
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter12",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 4,
          "winRate": 1
        },
        "enemy": {
          "games": 2,
          "wins": 2,
          "winRate": 1
        },
        "overallStartingPlayerWinRate": 1
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 6,
          "wins": 3,
          "losses": 3,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -1.8333333333333333
        },
        {
          "modelId": "champion",
          "games": 6,
          "wins": 3,
          "losses": 3,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 1.8333333333333333
        }
      ],
      "averages": {
        "turns": 52.5,
        "rounds": 5.833333333333333,
        "flipsPerMatch": 29.833333333333332,
        "flipsPerTurn": 0.5682539682539682,
        "reshuffles": 5.833333333333333,
        "deadTurns": 0,
        "finalHpDifference": 6.166666666666667
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "beginner",
        "opportunist"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "beginner",
          "games": 6,
          "wins": 0,
          "losses": 6,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -22
        },
        {
          "modelId": "opportunist",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 22
        }
      ],
      "averages": {
        "turns": 35,
        "rounds": 4,
        "flipsPerMatch": 19.833333333333332,
        "flipsPerTurn": 0.5666666666666667,
        "reshuffles": 2.5,
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
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "opportunist",
          "games": 6,
          "wins": 0,
          "losses": 6,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -8.333333333333334
        },
        {
          "modelId": "regular",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 8.333333333333334
        }
      ],
      "averages": {
        "turns": 51,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 25.166666666666668,
        "flipsPerTurn": 0.4934640522875817,
        "reshuffles": 4.666666666666667,
        "deadTurns": 0,
        "finalHpDifference": 8.333333333333334
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "regular",
        "expert"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 1,
          "winRate": 0.5
        },
        "overallStartingPlayerWinRate": 0.5
      },
      "modelSummaries": [
        {
          "modelId": "regular",
          "games": 6,
          "wins": 0,
          "losses": 6,
          "draws": 0,
          "winRate": 0,
          "averageHpEdge": -10.666666666666666
        },
        {
          "modelId": "expert",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 10.666666666666666
        }
      ],
      "averages": {
        "turns": 48,
        "rounds": 5.333333333333333,
        "flipsPerMatch": 19.333333333333332,
        "flipsPerTurn": 0.4027777777777778,
        "reshuffles": 4,
        "deadTurns": 0,
        "finalHpDifference": 10.666666666666666
      },
      "deadTurnFrequency": 0
    },
    {
      "deckPresetId": "starter14",
      "matchup": [
        "expert",
        "champion"
      ],
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayer": {
        "player": {
          "games": 4,
          "wins": 2,
          "winRate": 0.5
        },
        "enemy": {
          "games": 2,
          "wins": 0,
          "winRate": 0
        },
        "overallStartingPlayerWinRate": 0.3333333333333333
      },
      "modelSummaries": [
        {
          "modelId": "expert",
          "games": 6,
          "wins": 1,
          "losses": 5,
          "draws": 0,
          "winRate": 0.16666666666666666,
          "averageHpEdge": -5.666666666666667
        },
        {
          "modelId": "champion",
          "games": 6,
          "wins": 5,
          "losses": 1,
          "draws": 0,
          "winRate": 0.8333333333333334,
          "averageHpEdge": 5.666666666666667
        }
      ],
      "averages": {
        "turns": 51,
        "rounds": 5.666666666666667,
        "flipsPerMatch": 27.166666666666668,
        "flipsPerTurn": 0.5326797385620915,
        "reshuffles": 4.166666666666667,
        "deadTurns": 0,
        "finalHpDifference": 7.333333333333333
      },
      "deadTurnFrequency": 0
    }
  ],
  "insights": [
    {
      "id": "deck-starter14-problem",
      "severity": "problem",
      "title": "starter14 sort de la zone saine",
      "detail": "Avantage premier joueur tres marque (100%).",
      "recommendation": "Tester ce preset avec plus de matchs, puis ajuster pioche, taille de deck ou valeurs faibles."
    },
    {
      "id": "deck-turn-spread",
      "severity": "watch",
      "title": "La taille de deck change fortement le rythme",
      "detail": "Ecart de 7.50 tours moyens entre les presets.",
      "recommendation": "Comparer les reshuffles et les tours morts avant de choisir le deck par defaut."
    }
  ]
};
