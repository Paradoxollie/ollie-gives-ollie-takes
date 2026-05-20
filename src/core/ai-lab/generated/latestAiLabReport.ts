import type { AiLabReport } from "@/core/ai-lab/types";

export const LATEST_AI_LAB_REPORT: AiLabReport = {
  "reportId": "ai-lab-20260520-063307",
  "generatedAt": "2026-05-20T06:33:07.595Z",
  "config": {
    "matchesPerPairing": 6,
    "seed": 20260524,
    "scenarioIds": [
      "current-family-start"
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
      "searchDepth": 2,
      "beamWidth": 6,
      "description": "Modele de joueur moyen qui valorise les coins, le controle et les fins de round."
    },
    {
      "id": "expert",
      "label": "Expert",
      "skillLabel": "Anticipe les reponses",
      "rank": 4,
      "botId": "heuristic",
      "searchDepth": 3,
      "beamWidth": 5,
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
      "description": "Modele live qui garde une recherche profonde stable et n'accepte le profil promu qu'en net progres."
    }
  ],
  "skillSummaries": [
    {
      "modelId": "beginner",
      "games": 6,
      "wins": 0,
      "losses": 6,
      "draws": 0,
      "winRate": 0,
      "averageHpEdge": -21.166666666666668
    },
    {
      "modelId": "opportunist",
      "games": 12,
      "wins": 6,
      "losses": 6,
      "draws": 0,
      "winRate": 0.5,
      "averageHpEdge": -0.08333333333333333
    },
    {
      "modelId": "regular",
      "games": 12,
      "wins": 9,
      "losses": 3,
      "draws": 0,
      "winRate": 0.75,
      "averageHpEdge": 11.333333333333334
    },
    {
      "modelId": "expert",
      "games": 12,
      "wins": 5,
      "losses": 7,
      "draws": 0,
      "winRate": 0.4166666666666667,
      "averageHpEdge": -0.08333333333333333
    },
    {
      "modelId": "champion",
      "games": 6,
      "wins": 4,
      "losses": 2,
      "draws": 0,
      "winRate": 0.6666666666666666,
      "averageHpEdge": -1.1666666666666667
    }
  ],
  "deckSummaries": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "mirrorModelId": "regular",
      "totalGames": 6,
      "drawRate": 0,
      "startingPlayerWinRate": 0.6666666666666666,
      "averages": {
        "turns": 98.66666666666667,
        "rounds": 10.833333333333334,
        "flipsPerMatch": 25.833333333333332,
        "flipsPerTurn": 0.26182432432432434,
        "reshuffles": 17.5,
        "deadTurns": 1.1666666666666667,
        "finalHpDifference": 7.833333333333333
      },
      "deadTurnFrequency": 0.011824324324324325,
      "status": "watch",
      "notes": [
        "Avantage premier joueur a confirmer (67%)."
      ]
    }
  ],
  "ladderPairings": [
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
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
          "averageHpEdge": -21.166666666666668
        },
        {
          "modelId": "opportunist",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.166666666666668
        }
      ],
      "averages": {
        "turns": 41.833333333333336,
        "rounds": 4.333333333333333,
        "flipsPerMatch": 19.666666666666668,
        "flipsPerTurn": 0.4701195219123506,
        "reshuffles": 5.333333333333333,
        "deadTurns": 2.8333333333333335,
        "finalHpDifference": 21.166666666666668
      },
      "deadTurnFrequency": 0.06772908366533864
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
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
          "averageHpEdge": -21.333333333333332
        },
        {
          "modelId": "regular",
          "games": 6,
          "wins": 6,
          "losses": 0,
          "draws": 0,
          "winRate": 1,
          "averageHpEdge": 21.333333333333332
        }
      ],
      "averages": {
        "turns": 59.166666666666664,
        "rounds": 6,
        "flipsPerMatch": 28.5,
        "flipsPerTurn": 0.48169014084507045,
        "reshuffles": 8,
        "deadTurns": 5.166666666666667,
        "finalHpDifference": 21.333333333333332
      },
      "deadTurnFrequency": 0.08732394366197183
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "matchup": [
        "regular",
        "expert"
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
          "modelId": "regular",
          "games": 6,
          "wins": 3,
          "losses": 3,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": 1.3333333333333333
        },
        {
          "modelId": "expert",
          "games": 6,
          "wins": 3,
          "losses": 3,
          "draws": 0,
          "winRate": 0.5,
          "averageHpEdge": -1.3333333333333333
        }
      ],
      "averages": {
        "turns": 101,
        "rounds": 10.833333333333334,
        "flipsPerMatch": 32.5,
        "flipsPerTurn": 0.3217821782178218,
        "reshuffles": 17.166666666666668,
        "deadTurns": 3.5,
        "finalHpDifference": 10.333333333333334
      },
      "deadTurnFrequency": 0.034653465346534656
    },
    {
      "scenarioId": "current-family-start",
      "scenarioLabel": "Depart actuel - famille 10 cartes",
      "startingDeckCardCount": 10,
      "matchup": [
        "expert",
        "champion"
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
          "wins": 0,
          "winRate": 0
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
          "averageHpEdge": 1.1666666666666667
        },
        {
          "modelId": "champion",
          "games": 6,
          "wins": 4,
          "losses": 2,
          "draws": 0,
          "winRate": 0.6666666666666666,
          "averageHpEdge": -1.1666666666666667
        }
      ],
      "averages": {
        "turns": 109.16666666666667,
        "rounds": 12,
        "flipsPerMatch": 40,
        "flipsPerTurn": 0.366412213740458,
        "reshuffles": 19.666666666666668,
        "deadTurns": 1.8333333333333333,
        "finalHpDifference": 7.5
      },
      "deadTurnFrequency": 0.016793893129770993
    }
  ],
  "diagnostics": {
    "cardAnalytics": [
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
          "draw-next-turn",
          "payoff"
        ],
        "preferredPositions": [],
        "offered": 839,
        "played": 142,
        "ignored": 697,
        "selectionRate": 0.16924910607866508,
        "wins": 69,
        "losses": 73,
        "draws": 0,
        "winRateWhenPlayed": 0.4859154929577465,
        "averageFlips": 0.20422535211267606,
        "failedImpactRate": 0.7211538461538461,
        "averageFlipMargin": 1.9655172413793103,
        "averageEffectAmount": 2,
        "averageDamageDealt": 0.3873239436619718,
        "averageDamageTaken": 0.056338028169014086,
        "averageNetDamage": 0.33098591549295775,
        "lethalMoves": 1,
        "roundClosers": 29,
        "byModel": [
          {
            "modelId": "regular",
            "played": 59,
            "winRate": 0.6610169491525424
          },
          {
            "modelId": "expert",
            "played": 41,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 21,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 18,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 142,
            "winRate": 0.4859154929577465
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
          "combo-1",
          "connector",
          "draw-next-turn",
          "familiar",
          "flip-1"
        ],
        "preferredPositions": [],
        "offered": 449,
        "played": 69,
        "ignored": 380,
        "selectionRate": 0.15367483296213807,
        "wins": 39,
        "losses": 30,
        "draws": 0,
        "winRateWhenPlayed": 0.5652173913043478,
        "averageFlips": 0.5797101449275363,
        "failedImpactRate": 0.4444444444444444,
        "averageFlipMargin": 1.925,
        "averageEffectAmount": 1.0434782608695652,
        "averageDamageDealt": 0.7536231884057971,
        "averageDamageTaken": 0.07246376811594203,
        "averageNetDamage": 0.6811594202898551,
        "lethalMoves": 1,
        "roundClosers": 13,
        "byModel": [
          {
            "modelId": "regular",
            "played": 24,
            "winRate": 0.7916666666666666
          },
          {
            "modelId": "expert",
            "played": 16,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 14,
            "winRate": 0.6428571428571429
          },
          {
            "modelId": "champion",
            "played": 11,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 69,
            "winRate": 0.5652173913043478
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      },
      {
        "cardId": "grave-child",
        "name": "Enfant des tombes",
        "family": "revenant",
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
          "behind-on-board",
          "combo-1",
          "connector",
          "draw-next-turn",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 326,
        "played": 49,
        "ignored": 277,
        "selectionRate": 0.15030674846625766,
        "wins": 25,
        "losses": 24,
        "draws": 0,
        "winRateWhenPlayed": 0.5102040816326531,
        "averageFlips": 0.3877551020408163,
        "failedImpactRate": 0.45714285714285713,
        "averageFlipMargin": 1.5263157894736843,
        "averageEffectAmount": 1.5918367346938775,
        "averageDamageDealt": 0,
        "averageDamageTaken": 0,
        "averageNetDamage": 0,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 20,
            "winRate": 0.35
          },
          {
            "modelId": "expert",
            "played": 12,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 10,
            "winRate": 0.6
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 0
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 49,
            "winRate": 0.5102040816326531
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
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
        "offered": 1046,
        "played": 312,
        "ignored": 734,
        "selectionRate": 0.2982791586998088,
        "wins": 164,
        "losses": 148,
        "draws": 0,
        "winRateWhenPlayed": 0.5256410256410257,
        "averageFlips": 0.4551282051282051,
        "failedImpactRate": 0.3106796116504854,
        "averageFlipMargin": 1.7816901408450705,
        "averageEffectAmount": 0.8685897435897436,
        "averageDamageDealt": 0.09294871794871795,
        "averageDamageTaken": 0.041666666666666664,
        "averageNetDamage": 0.05128205128205129,
        "lethalMoves": 1,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 145,
            "winRate": 0.7862068965517242
          },
          {
            "modelId": "expert",
            "played": 77,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 44,
            "winRate": 0.2727272727272727
          },
          {
            "modelId": "champion",
            "played": 38,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 312,
            "winRate": 0.5256410256410257
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
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 1149,
        "played": 250,
        "ignored": 899,
        "selectionRate": 0.2175805047867711,
        "wins": 138,
        "losses": 112,
        "draws": 0,
        "winRateWhenPlayed": 0.552,
        "averageFlips": 0.324,
        "failedImpactRate": 0.6553191489361702,
        "averageFlipMargin": 1.4320987654320987,
        "averageEffectAmount": 1.908,
        "averageDamageDealt": 0.16,
        "averageDamageTaken": 0.124,
        "averageNetDamage": 0.036000000000000004,
        "lethalMoves": 1,
        "roundClosers": 41,
        "byModel": [
          {
            "modelId": "regular",
            "played": 117,
            "winRate": 0.7606837606837606
          },
          {
            "modelId": "expert",
            "played": 60,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 39,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 29,
            "winRate": 0.3448275862068966
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 250,
            "winRate": 0.552
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
          "automaton",
          "connector",
          "gain-shield"
        ],
        "preferredPositions": [],
        "offered": 835,
        "played": 178,
        "ignored": 657,
        "selectionRate": 0.21317365269461078,
        "wins": 77,
        "losses": 101,
        "draws": 0,
        "winRateWhenPlayed": 0.43258426966292135,
        "averageFlips": 0.11797752808988764,
        "failedImpactRate": 0.8618421052631579,
        "averageFlipMargin": 1.1428571428571428,
        "averageEffectAmount": 1.9213483146067416,
        "averageDamageDealt": 0.06179775280898876,
        "averageDamageTaken": 0.08426966292134831,
        "averageNetDamage": -0.02247191011235955,
        "lethalMoves": 0,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 78,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "expert",
            "played": 55,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 23,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 17,
            "winRate": 0.11764705882352941
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 178,
            "winRate": 0.43258426966292135
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
        "offered": 454,
        "played": 155,
        "ignored": 299,
        "selectionRate": 0.34140969162995594,
        "wins": 80,
        "losses": 75,
        "draws": 0,
        "winRateWhenPlayed": 0.5161290322580645,
        "averageFlips": 0.10967741935483871,
        "failedImpactRate": 0.8229166666666666,
        "averageFlipMargin": 1.588235294117647,
        "averageEffectAmount": 1.3419354838709678,
        "averageDamageDealt": 0.25806451612903225,
        "averageDamageTaken": 0.07096774193548387,
        "averageNetDamage": 0.18709677419354837,
        "lethalMoves": 0,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 72,
            "winRate": 0.6805555555555556
          },
          {
            "modelId": "expert",
            "played": 37,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 25,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 12,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 9,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 155,
            "winRate": 0.5161290322580645
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "lantern-shade",
        "name": "Ombre a lanterne",
        "family": "revenant",
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
          "behind-on-board",
          "gain-shield",
          "revenant"
        ],
        "preferredPositions": [
          "behind"
        ],
        "offered": 351,
        "played": 128,
        "ignored": 223,
        "selectionRate": 0.3646723646723647,
        "wins": 69,
        "losses": 59,
        "draws": 0,
        "winRateWhenPlayed": 0.5390625,
        "averageFlips": 0.34375,
        "failedImpactRate": 0.5368421052631579,
        "averageFlipMargin": 1.3636363636363635,
        "averageEffectAmount": 1.9609375,
        "averageDamageDealt": 0.375,
        "averageDamageTaken": 0.234375,
        "averageNetDamage": 0.140625,
        "lethalMoves": 2,
        "roundClosers": 19,
        "byModel": [
          {
            "modelId": "regular",
            "played": 57,
            "winRate": 0.49122807017543857
          },
          {
            "modelId": "expert",
            "played": 37,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 18,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 11,
            "winRate": 0.36363636363636365
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 128,
            "winRate": 0.5390625
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
        "offered": 623,
        "played": 126,
        "ignored": 497,
        "selectionRate": 0.20224719101123595,
        "wins": 64,
        "losses": 62,
        "draws": 0,
        "winRateWhenPlayed": 0.5079365079365079,
        "averageFlips": 0.15873015873015872,
        "failedImpactRate": 0.8214285714285714,
        "averageFlipMargin": 2.7,
        "averageEffectAmount": 0.7698412698412699,
        "averageDamageDealt": 0.3492063492063492,
        "averageDamageTaken": 0.047619047619047616,
        "averageNetDamage": 0.30158730158730157,
        "lethalMoves": 1,
        "roundClosers": 14,
        "byModel": [
          {
            "modelId": "regular",
            "played": 62,
            "winRate": 0.6935483870967742
          },
          {
            "modelId": "expert",
            "played": 35,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 17,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 126,
            "winRate": 0.5079365079365079
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
        "offered": 500,
        "played": 116,
        "ignored": 384,
        "selectionRate": 0.232,
        "wins": 78,
        "losses": 38,
        "draws": 0,
        "winRateWhenPlayed": 0.6724137931034483,
        "averageFlips": 0.43103448275862066,
        "failedImpactRate": 0.46236559139784944,
        "averageFlipMargin": 1.54,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.6120689655172413,
        "averageDamageTaken": 0.034482758620689655,
        "averageNetDamage": 0.5775862068965517,
        "lethalMoves": 2,
        "roundClosers": 19,
        "byModel": [
          {
            "modelId": "regular",
            "played": 55,
            "winRate": 0.8363636363636363
          },
          {
            "modelId": "expert",
            "played": 34,
            "winRate": 0.7058823529411765
          },
          {
            "modelId": "opportunist",
            "played": 12,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 116,
            "winRate": 0.6724137931034483
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
        "offered": 503,
        "played": 109,
        "ignored": 394,
        "selectionRate": 0.21669980119284293,
        "wins": 55,
        "losses": 54,
        "draws": 0,
        "winRateWhenPlayed": 0.5045871559633027,
        "averageFlips": 0.1926605504587156,
        "failedImpactRate": 0.6557377049180327,
        "averageFlipMargin": 1.5238095238095237,
        "averageEffectAmount": 1.8807339449541285,
        "averageDamageDealt": 0.12844036697247707,
        "averageDamageTaken": 0.009174311926605505,
        "averageNetDamage": 0.11926605504587157,
        "lethalMoves": 1,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 44,
            "winRate": 0.75
          },
          {
            "modelId": "expert",
            "played": 39,
            "winRate": 0.4358974358974359
          },
          {
            "modelId": "champion",
            "played": 15,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.625
          },
          {
            "modelId": "beginner",
            "played": 3,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 109,
            "winRate": 0.5045871559633027
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
        "offered": 374,
        "played": 91,
        "ignored": 283,
        "selectionRate": 0.24331550802139038,
        "wins": 44,
        "losses": 47,
        "draws": 0,
        "winRateWhenPlayed": 0.4835164835164835,
        "averageFlips": 0.24175824175824176,
        "failedImpactRate": 0.6811594202898551,
        "averageFlipMargin": 1.6363636363636365,
        "averageEffectAmount": 0.3956043956043956,
        "averageDamageDealt": 0.3076923076923077,
        "averageDamageTaken": 0.02197802197802198,
        "averageNetDamage": 0.28571428571428575,
        "lethalMoves": 1,
        "roundClosers": 8,
        "byModel": [
          {
            "modelId": "regular",
            "played": 44,
            "winRate": 0.7727272727272727
          },
          {
            "modelId": "expert",
            "played": 29,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 7,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "champion",
            "played": 6,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 91,
            "winRate": 0.4835164835164835
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "widow-knight",
        "name": "Chevalier veuf",
        "family": "revenant",
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
          "flip-1",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 471,
        "played": 89,
        "ignored": 382,
        "selectionRate": 0.18895966029723993,
        "wins": 44,
        "losses": 45,
        "draws": 0,
        "winRateWhenPlayed": 0.4943820224719101,
        "averageFlips": 0.651685393258427,
        "failedImpactRate": 0.3763440860215054,
        "averageFlipMargin": 2.586206896551724,
        "averageEffectAmount": 0.42696629213483145,
        "averageDamageDealt": 1.0112359550561798,
        "averageDamageTaken": 0.24719101123595505,
        "averageNetDamage": 0.7640449438202248,
        "lethalMoves": 1,
        "roundClosers": 12,
        "byModel": [
          {
            "modelId": "regular",
            "played": 42,
            "winRate": 0.38095238095238093
          },
          {
            "modelId": "expert",
            "played": 22,
            "winRate": 1
          },
          {
            "modelId": "champion",
            "played": 12,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 89,
            "winRate": 0.4943820224719101
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
        "offered": 365,
        "played": 82,
        "ignored": 283,
        "selectionRate": 0.22465753424657534,
        "wins": 42,
        "losses": 40,
        "draws": 0,
        "winRateWhenPlayed": 0.5121951219512195,
        "averageFlips": 0.3902439024390244,
        "failedImpactRate": 0.49206349206349204,
        "averageFlipMargin": 1.5,
        "averageEffectAmount": 1.9390243902439024,
        "averageDamageDealt": 0.35365853658536583,
        "averageDamageTaken": 0.024390243902439025,
        "averageNetDamage": 0.3292682926829268,
        "lethalMoves": 0,
        "roundClosers": 10,
        "byModel": [
          {
            "modelId": "regular",
            "played": 33,
            "winRate": 0.7272727272727273
          },
          {
            "modelId": "expert",
            "played": 21,
            "winRate": 0.47619047619047616
          },
          {
            "modelId": "champion",
            "played": 16,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 10,
            "winRate": 0.8
          },
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 82,
            "winRate": 0.5121951219512195
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
        "offered": 316,
        "played": 80,
        "ignored": 236,
        "selectionRate": 0.25316455696202533,
        "wins": 47,
        "losses": 33,
        "draws": 0,
        "winRateWhenPlayed": 0.5875,
        "averageFlips": 0.325,
        "failedImpactRate": 0.5873015873015873,
        "averageFlipMargin": 1.9230769230769231,
        "averageEffectAmount": 2,
        "averageDamageDealt": 0.4625,
        "averageDamageTaken": 0.075,
        "averageNetDamage": 0.3875,
        "lethalMoves": 2,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 37,
            "winRate": 0.7837837837837838
          },
          {
            "modelId": "expert",
            "played": 14,
            "winRate": 0.8571428571428571
          },
          {
            "modelId": "champion",
            "played": 13,
            "winRate": 0
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.75
          },
          {
            "modelId": "beginner",
            "played": 8,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 80,
            "winRate": 0.5875
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "moon-scribe",
        "name": "Scribe lunaire",
        "family": "arcane",
        "rarity": "common",
        "role": "attacker",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 1,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "arcane",
          "attacker",
          "boost-self",
          "center"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 235,
        "played": 79,
        "ignored": 156,
        "selectionRate": 0.33617021276595743,
        "wins": 49,
        "losses": 30,
        "draws": 0,
        "winRateWhenPlayed": 0.620253164556962,
        "averageFlips": 0.5316455696202531,
        "failedImpactRate": 0.3114754098360656,
        "averageFlipMargin": 1.3333333333333333,
        "averageEffectAmount": 0.012658227848101266,
        "averageDamageDealt": 0.7468354430379747,
        "averageDamageTaken": 0.31645569620253167,
        "averageNetDamage": 0.430379746835443,
        "lethalMoves": 2,
        "roundClosers": 11,
        "byModel": [
          {
            "modelId": "regular",
            "played": 34,
            "winRate": 0.7352941176470589
          },
          {
            "modelId": "expert",
            "played": 18,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 10,
            "winRate": 0.6
          },
          {
            "modelId": "beginner",
            "played": 7,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 79,
            "winRate": 0.620253164556962
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "wandering-glyph",
        "name": "Glyphe errant",
        "family": "arcane",
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
          "arcane",
          "center",
          "gain-shield"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 304,
        "played": 62,
        "ignored": 242,
        "selectionRate": 0.20394736842105263,
        "wins": 30,
        "losses": 32,
        "draws": 0,
        "winRateWhenPlayed": 0.4838709677419355,
        "averageFlips": 0.5161290322580645,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.1875,
        "averageEffectAmount": 0.6129032258064516,
        "averageDamageDealt": 0.2903225806451613,
        "averageDamageTaken": 0.20967741935483872,
        "averageNetDamage": 0.08064516129032259,
        "lethalMoves": 2,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 30,
            "winRate": 0.36666666666666664
          },
          {
            "modelId": "expert",
            "played": 11,
            "winRate": 0.5454545454545454
          },
          {
            "modelId": "champion",
            "played": 9,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.5
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 62,
            "winRate": 0.4838709677419355
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "moth-ghost",
        "name": "Fantome phalene",
        "family": "revenant",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 5,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "boost-self",
          "payoff",
          "revenant"
        ],
        "preferredPositions": [],
        "offered": 284,
        "played": 58,
        "ignored": 226,
        "selectionRate": 0.20422535211267606,
        "wins": 29,
        "losses": 29,
        "draws": 0,
        "winRateWhenPlayed": 0.5,
        "averageFlips": 0.5517241379310345,
        "failedImpactRate": 0.3333333333333333,
        "averageFlipMargin": 1.625,
        "averageEffectAmount": 1,
        "averageDamageDealt": 0.1206896551724138,
        "averageDamageTaken": 0.017241379310344827,
        "averageNetDamage": 0.10344827586206898,
        "lethalMoves": 0,
        "roundClosers": 3,
        "byModel": [
          {
            "modelId": "regular",
            "played": 27,
            "winRate": 0.6296296296296297
          },
          {
            "modelId": "champion",
            "played": 10,
            "winRate": 0
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 8,
            "winRate": 0.375
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 58,
            "winRate": 0.5
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "rune-adept",
        "name": "Adepte sigillaire",
        "family": "arcane",
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
          "arcane",
          "center",
          "connector",
          "draw-next-turn"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 190,
        "played": 44,
        "ignored": 146,
        "selectionRate": 0.23157894736842105,
        "wins": 26,
        "losses": 18,
        "draws": 0,
        "winRateWhenPlayed": 0.5909090909090909,
        "averageFlips": 0.8181818181818182,
        "failedImpactRate": 0.2,
        "averageFlipMargin": 1.2777777777777777,
        "averageEffectAmount": 0.06818181818181818,
        "averageDamageDealt": 0.6590909090909091,
        "averageDamageTaken": 0.25,
        "averageNetDamage": 0.40909090909090906,
        "lethalMoves": 0,
        "roundClosers": 6,
        "byModel": [
          {
            "modelId": "regular",
            "played": 17,
            "winRate": 0.7058823529411765
          },
          {
            "modelId": "expert",
            "played": 12,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "beginner",
            "played": 5,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 44,
            "winRate": 0.5909090909090909
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "cardId": "star-witch",
        "name": "Sorciere d'etoiles",
        "family": "arcane",
        "rarity": "common",
        "role": "payoff",
        "sourceType": "draft",
        "sideTotal": 12,
        "maxSide": 4,
        "minSide": 2,
        "effectKinds": [
          "boost-self"
        ],
        "buildTags": [
          "arcane",
          "boost-self",
          "center",
          "combo-2",
          "payoff"
        ],
        "preferredPositions": [
          "center"
        ],
        "offered": 188,
        "played": 40,
        "ignored": 148,
        "selectionRate": 0.2127659574468085,
        "wins": 19,
        "losses": 21,
        "draws": 0,
        "winRateWhenPlayed": 0.475,
        "averageFlips": 0.775,
        "failedImpactRate": 0.18421052631578946,
        "averageFlipMargin": 1.2258064516129032,
        "averageEffectAmount": 0.075,
        "averageDamageDealt": 0.525,
        "averageDamageTaken": 0.15,
        "averageNetDamage": 0.375,
        "lethalMoves": 1,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 14,
            "winRate": 0.42857142857142855
          },
          {
            "modelId": "opportunist",
            "played": 11,
            "winRate": 0.45454545454545453
          },
          {
            "modelId": "expert",
            "played": 9,
            "winRate": 0.4444444444444444
          },
          {
            "modelId": "champion",
            "played": 4,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 40,
            "winRate": 0.475
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
        "offered": 134,
        "played": 36,
        "ignored": 98,
        "selectionRate": 0.26865671641791045,
        "wins": 19,
        "losses": 17,
        "draws": 0,
        "winRateWhenPlayed": 0.5277777777777778,
        "averageFlips": 0.6666666666666666,
        "failedImpactRate": 0.3684210526315789,
        "averageFlipMargin": 1.1666666666666667,
        "averageEffectAmount": 0.7222222222222222,
        "averageDamageDealt": 1.4166666666666667,
        "averageDamageTaken": 0.3888888888888889,
        "averageNetDamage": 1.027777777777778,
        "lethalMoves": 2,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 18,
            "winRate": 0.5
          },
          {
            "modelId": "expert",
            "played": 8,
            "winRate": 0.5
          },
          {
            "modelId": "champion",
            "played": 5,
            "winRate": 1
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 36,
            "winRate": 0.5277777777777778
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
        "offered": 164,
        "played": 31,
        "ignored": 133,
        "selectionRate": 0.18902439024390244,
        "wins": 15,
        "losses": 16,
        "draws": 0,
        "winRateWhenPlayed": 0.4838709677419355,
        "averageFlips": 0.9354838709677419,
        "failedImpactRate": 0.09375,
        "averageFlipMargin": 1.7586206896551724,
        "averageEffectAmount": 1.7741935483870968,
        "averageDamageDealt": 2.4516129032258065,
        "averageDamageTaken": 0.6129032258064516,
        "averageNetDamage": 1.838709677419355,
        "lethalMoves": 0,
        "roundClosers": 4,
        "byModel": [
          {
            "modelId": "regular",
            "played": 11,
            "winRate": 0.36363636363636365
          },
          {
            "modelId": "expert",
            "played": 7,
            "winRate": 0.5714285714285714
          },
          {
            "modelId": "opportunist",
            "played": 6,
            "winRate": 0.6666666666666666
          },
          {
            "modelId": "beginner",
            "played": 4,
            "winRate": 0
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 1
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 31,
            "winRate": 0.4838709677419355
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
        "offered": 89,
        "played": 27,
        "ignored": 62,
        "selectionRate": 0.30337078651685395,
        "wins": 17,
        "losses": 10,
        "draws": 0,
        "winRateWhenPlayed": 0.6296296296296297,
        "averageFlips": 0.7777777777777778,
        "failedImpactRate": 0.19230769230769232,
        "averageFlipMargin": 2,
        "averageEffectAmount": 1.1481481481481481,
        "averageDamageDealt": 1.4074074074074074,
        "averageDamageTaken": 0.1111111111111111,
        "averageNetDamage": 1.2962962962962963,
        "lethalMoves": 2,
        "roundClosers": 1,
        "byModel": [
          {
            "modelId": "regular",
            "played": 13,
            "winRate": 0.5384615384615384
          },
          {
            "modelId": "expert",
            "played": 5,
            "winRate": 0.8
          },
          {
            "modelId": "opportunist",
            "played": 5,
            "winRate": 0.6
          },
          {
            "modelId": "champion",
            "played": 3,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 1,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 27,
            "winRate": 0.6296296296296297
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
        "offered": 91,
        "played": 19,
        "ignored": 72,
        "selectionRate": 0.2087912087912088,
        "wins": 8,
        "losses": 11,
        "draws": 0,
        "winRateWhenPlayed": 0.42105263157894735,
        "averageFlips": 0.5263157894736842,
        "failedImpactRate": 0.2857142857142857,
        "averageFlipMargin": 1.7,
        "averageEffectAmount": 0.7368421052631579,
        "averageDamageDealt": 0.6842105263157895,
        "averageDamageTaken": 0.3684210526315789,
        "averageNetDamage": 0.31578947368421056,
        "lethalMoves": 0,
        "roundClosers": 2,
        "byModel": [
          {
            "modelId": "regular",
            "played": 8,
            "winRate": 0.375
          },
          {
            "modelId": "expert",
            "played": 4,
            "winRate": 0.5
          },
          {
            "modelId": "opportunist",
            "played": 3,
            "winRate": 0.3333333333333333
          },
          {
            "modelId": "champion",
            "played": 2,
            "winRate": 1
          },
          {
            "modelId": "beginner",
            "played": 2,
            "winRate": 0
          }
        ],
        "byScenario": [
          {
            "scenarioId": "current-family-start",
            "scenarioLabel": "Depart actuel - famille 10 cartes",
            "startingDeckCardCount": 10,
            "played": 19,
            "winRate": 0.42105263157894735
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
        "id": "automaton",
        "label": "automaton",
        "offered": 3869,
        "played": 882,
        "ignored": 2987,
        "selectionRate": 0.2279658826570173,
        "wins": 448,
        "losses": 434,
        "draws": 0,
        "winRateWhenPlayed": 0.5079365079365079,
        "averageFlips": 0.30952380952380953,
        "averageDamageDealt": 0.15306122448979592,
        "averageNetDamage": 0.07709750566893424,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 312,
            "winRateWhenPlayed": 0.5256410256410257
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 250,
            "winRateWhenPlayed": 0.552
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 178,
            "winRateWhenPlayed": 0.43258426966292135
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 142,
            "winRateWhenPlayed": 0.4859154929577465
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
        "offered": 1900,
        "played": 441,
        "ignored": 1459,
        "selectionRate": 0.23210526315789473,
        "wins": 227,
        "losses": 214,
        "draws": 0,
        "winRateWhenPlayed": 0.5147392290249433,
        "averageFlips": 0.22448979591836735,
        "averageDamageDealt": 0.37188208616780044,
        "averageNetDamage": 0.31746031746031744,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 155,
            "winRateWhenPlayed": 0.5161290322580645
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 126,
            "winRateWhenPlayed": 0.5079365079365079
          },
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 91,
            "winRateWhenPlayed": 0.4835164835164835
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 69,
            "winRateWhenPlayed": 0.5652173913043478
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
        "offered": 1684,
        "played": 387,
        "ignored": 1297,
        "selectionRate": 0.22980997624703087,
        "wins": 222,
        "losses": 165,
        "draws": 0,
        "winRateWhenPlayed": 0.5736434108527132,
        "averageFlips": 0.3333333333333333,
        "averageDamageDealt": 0.39018087855297157,
        "averageNetDamage": 0.3565891472868217,
        "topCards": [
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 116,
            "winRateWhenPlayed": 0.6724137931034483
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 109,
            "winRateWhenPlayed": 0.5045871559633027
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 82,
            "winRateWhenPlayed": 0.5121951219512195
          },
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 80,
            "winRateWhenPlayed": 0.5875
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "revenant",
        "label": "revenant",
        "offered": 1432,
        "played": 324,
        "ignored": 1108,
        "selectionRate": 0.22625698324022347,
        "wins": 167,
        "losses": 157,
        "draws": 0,
        "winRateWhenPlayed": 0.5154320987654321,
        "averageFlips": 0.4722222222222222,
        "averageDamageDealt": 0.44753086419753085,
        "averageNetDamage": 0.2839506172839506,
        "topCards": [
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 128,
            "winRateWhenPlayed": 0.5390625
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 89,
            "winRateWhenPlayed": 0.4943820224719101
          },
          {
            "cardId": "moth-ghost",
            "name": "Fantome phalene",
            "played": 58,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 49,
            "winRateWhenPlayed": 0.5102040816326531
          }
        ],
        "status": "healthy",
        "notes": [
          "Pas de derive forte sur cet echantillon."
        ]
      },
      {
        "id": "arcane",
        "label": "arcane",
        "offered": 917,
        "played": 225,
        "ignored": 692,
        "selectionRate": 0.24536532170119957,
        "wins": 124,
        "losses": 101,
        "draws": 0,
        "winRateWhenPlayed": 0.5511111111111111,
        "averageFlips": 0.6266666666666667,
        "averageDamageDealt": 0.5644444444444444,
        "averageNetDamage": 0.31999999999999995,
        "topCards": [
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 79,
            "winRateWhenPlayed": 0.620253164556962
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 62,
            "winRateWhenPlayed": 0.4838709677419355
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 44,
            "winRateWhenPlayed": 0.5909090909090909
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 40,
            "winRateWhenPlayed": 0.475
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
        "offered": 478,
        "played": 113,
        "ignored": 365,
        "selectionRate": 0.23640167364016737,
        "wins": 59,
        "losses": 54,
        "draws": 0,
        "winRateWhenPlayed": 0.5221238938053098,
        "averageFlips": 0.7433628318584071,
        "averageDamageDealt": 1.575221238938053,
        "averageNetDamage": 1.1946902654867257,
        "topCards": [
          {
            "cardId": "hornling",
            "name": "Cornu farceur",
            "played": 36,
            "winRateWhenPlayed": 0.5277777777777778
          },
          {
            "cardId": "ember-imp",
            "name": "Diablotin braise",
            "played": 31,
            "winRateWhenPlayed": 0.4838709677419355
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 27,
            "winRateWhenPlayed": 0.6296296296296297
          },
          {
            "cardId": "pact-sprite",
            "name": "Lutin a pacte",
            "played": 19,
            "winRateWhenPlayed": 0.42105263157894735
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
        "offered": 7339,
        "played": 1805,
        "ignored": 5534,
        "selectionRate": 0.24594631421174548,
        "wins": 967,
        "losses": 838,
        "draws": 0,
        "winRateWhenPlayed": 0.5357340720221606,
        "averageFlips": 0.3296398891966759,
        "averageDamageDealt": 0.3601108033240997,
        "averageNetDamage": 0.25872576177285317,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 282,
            "winRateWhenPlayed": 0.5283687943262412
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 220,
            "winRateWhenPlayed": 0.5590909090909091
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 160,
            "winRateWhenPlayed": 0.43125
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 125,
            "winRateWhenPlayed": 0.52
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 122,
            "winRateWhenPlayed": 0.48360655737704916
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
        "offered": 789,
        "played": 171,
        "ignored": 618,
        "selectionRate": 0.21673003802281368,
        "wins": 84,
        "losses": 87,
        "draws": 0,
        "winRateWhenPlayed": 0.49122807017543857,
        "averageFlips": 0.4152046783625731,
        "averageDamageDealt": 0.27485380116959063,
        "averageNetDamage": 0.1286549707602339,
        "topCards": [
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 30,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "lantern-shade",
            "name": "Ombre a lanterne",
            "played": 30,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "sapling",
            "name": "Floramie toxique",
            "played": 29,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "quiet-monk",
            "name": "Moine du seuil",
            "played": 29,
            "winRateWhenPlayed": 0.4827586206896552
          },
          {
            "cardId": "wandering-glyph",
            "name": "Glyphe errant",
            "played": 28,
            "winRateWhenPlayed": 0.4642857142857143
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
        "offered": 879,
        "played": 169,
        "ignored": 710,
        "selectionRate": 0.19226393629124006,
        "wins": 84,
        "losses": 85,
        "draws": 0,
        "winRateWhenPlayed": 0.4970414201183432,
        "averageFlips": 0.5207100591715976,
        "averageDamageDealt": 0.8047337278106509,
        "averageNetDamage": 0.6094674556213018,
        "topCards": [
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 30,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "path-ranger",
            "name": "Rodeuse du sentier",
            "played": 30,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 30,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "moon-scribe",
            "name": "Scribe lunaire",
            "played": 30,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "widow-knight",
            "name": "Chevalier veuf",
            "played": 27,
            "winRateWhenPlayed": 0.5555555555555556
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
        "offered": 593,
        "played": 114,
        "ignored": 479,
        "selectionRate": 0.19224283305227655,
        "wins": 58,
        "losses": 56,
        "draws": 0,
        "winRateWhenPlayed": 0.5087719298245614,
        "averageFlips": 0.543859649122807,
        "averageDamageDealt": 0.30701754385964913,
        "averageNetDamage": 0.2719298245614035,
        "topCards": [
          {
            "cardId": "foxfire",
            "name": "Requin runefer",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "field-knight",
            "name": "Chevaliere des champs",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "star-witch",
            "name": "Sorciere d'etoiles",
            "played": 19,
            "winRateWhenPlayed": 0.47368421052631576
          },
          {
            "cardId": "cinder-grin",
            "name": "Sourire de suie",
            "played": 18,
            "winRateWhenPlayed": 0.5555555555555556
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
        "offered": 680,
        "played": 113,
        "ignored": 567,
        "selectionRate": 0.1661764705882353,
        "wins": 54,
        "losses": 59,
        "draws": 0,
        "winRateWhenPlayed": 0.4778761061946903,
        "averageFlips": 0.5575221238938053,
        "averageDamageDealt": 0.2831858407079646,
        "averageNetDamage": 0.19469026548672566,
        "topCards": [
          {
            "cardId": "rune-mage",
            "name": "Mage des runes",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "rune-adept",
            "name": "Adepte sigillaire",
            "played": 20,
            "winRateWhenPlayed": 0.5
          },
          {
            "cardId": "heron",
            "name": "Oiselle aubeplume",
            "played": 19,
            "winRateWhenPlayed": 0.47368421052631576
          },
          {
            "cardId": "grave-child",
            "name": "Enfant des tombes",
            "played": 19,
            "winRateWhenPlayed": 0.47368421052631576
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 18,
            "winRateWhenPlayed": 0.4444444444444444
          }
        ],
        "status": "ignored",
        "notes": [
          "Souvent propose, rarement choisi."
        ]
      }
    ],
    "rarityAnalytics": [
      {
        "id": "common",
        "label": "common",
        "offered": 10280,
        "played": 2372,
        "ignored": 7908,
        "selectionRate": 0.23073929961089495,
        "wins": 1247,
        "losses": 1125,
        "draws": 0,
        "winRateWhenPlayed": 0.5257166947723441,
        "averageFlips": 0.3705733558178752,
        "averageDamageDealt": 0.3794266441821248,
        "averageNetDamage": 0.27192242833052277,
        "topCards": [
          {
            "cardId": "brass-rook",
            "name": "Tour de laiton",
            "played": 312,
            "winRateWhenPlayed": 0.5256410256410257
          },
          {
            "cardId": "clock-sentinel",
            "name": "Sentinelle d'horloge",
            "played": 250,
            "winRateWhenPlayed": 0.552
          },
          {
            "cardId": "gear-monk",
            "name": "Moine engrene",
            "played": 178,
            "winRateWhenPlayed": 0.43258426966292135
          },
          {
            "cardId": "badger",
            "name": "Poney runique",
            "played": 155,
            "winRateWhenPlayed": 0.5161290322580645
          },
          {
            "cardId": "tin-oracle",
            "name": "Oracle de fer-blanc",
            "played": 142,
            "winRateWhenPlayed": 0.4859154929577465
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
        "id": "family-chain:automaton->automaton",
        "kind": "family-chain",
        "label": "automaton -> automaton",
        "count": 687,
        "wins": 350,
        "losses": 337,
        "draws": 0,
        "winRate": 0.5094614264919942,
        "averageFlips": 0.3245997088791849,
        "averageDamageDealt": 0.1965065502183406,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:automaton+automaton",
        "kind": "friendly-adjacent",
        "label": "automaton allie + automaton",
        "count": 479,
        "wins": 254,
        "losses": 225,
        "draws": 0,
        "winRate": 0.5302713987473904,
        "averageFlips": 0.2254697286012526,
        "averageDamageDealt": 0.4906054279749478,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:familiar->familiar",
        "kind": "family-chain",
        "label": "familiar -> familiar",
        "count": 343,
        "wins": 178,
        "losses": 165,
        "draws": 0,
        "winRate": 0.5189504373177842,
        "averageFlips": 0.27988338192419826,
        "averageDamageDealt": 0.478134110787172,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:human->human",
        "kind": "family-chain",
        "label": "human -> human",
        "count": 304,
        "wins": 179,
        "losses": 125,
        "draws": 0,
        "winRate": 0.5888157894736842,
        "averageFlips": 0.41118421052631576,
        "averageDamageDealt": 0.4967105263157895,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:revenant->revenant",
        "kind": "family-chain",
        "label": "revenant -> revenant",
        "count": 252,
        "wins": 131,
        "losses": 121,
        "draws": 0,
        "winRate": 0.5198412698412699,
        "averageFlips": 0.5555555555555556,
        "averageDamageDealt": 0.5674603174603174,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:clock-sentinel:gain-shield",
        "kind": "effect",
        "label": "Sentinelle d'horloge -> gain-shield",
        "count": 245,
        "wins": 136,
        "losses": 109,
        "draws": 0,
        "winRate": 0.5551020408163265,
        "averageFlips": 0.3224489795918367,
        "averageDamageDealt": 0.15510204081632653,
        "averageEffectAmount": 1.9469387755102041,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:familiar+familiar",
        "kind": "friendly-adjacent",
        "label": "familiar allie + familiar",
        "count": 239,
        "wins": 143,
        "losses": 96,
        "draws": 0,
        "winRate": 0.5983263598326359,
        "averageFlips": 0.28870292887029286,
        "averageDamageDealt": 1.0627615062761506,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:human+human",
        "kind": "friendly-adjacent",
        "label": "human allie + human",
        "count": 236,
        "wins": 173,
        "losses": 63,
        "draws": 0,
        "winRate": 0.7330508474576272,
        "averageFlips": 0.3644067796610169,
        "averageDamageDealt": 1.5635593220338984,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "family-chain:arcane->arcane",
        "kind": "family-chain",
        "label": "arcane -> arcane",
        "count": 175,
        "wins": 99,
        "losses": 76,
        "draws": 0,
        "winRate": 0.5657142857142857,
        "averageFlips": 0.7828571428571428,
        "averageDamageDealt": 0.7257142857142858,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips."
        ]
      },
      {
        "id": "effect:brass-rook:boost-self",
        "kind": "effect",
        "label": "Tour de laiton -> boost-self",
        "count": 175,
        "wins": 95,
        "losses": 80,
        "draws": 0,
        "winRate": 0.5428571428571428,
        "averageFlips": 0.15428571428571428,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.5485714285714285,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:gear-monk:gain-shield",
        "kind": "effect",
        "label": "Moine engrene -> gain-shield",
        "count": 175,
        "wins": 76,
        "losses": 99,
        "draws": 0,
        "winRate": 0.4342857142857143,
        "averageFlips": 0.11428571428571428,
        "averageDamageDealt": 0.05142857142857143,
        "averageEffectAmount": 1.9542857142857142,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:revenant+revenant",
        "kind": "friendly-adjacent",
        "label": "revenant allie + revenant",
        "count": 161,
        "wins": 91,
        "losses": 70,
        "draws": 0,
        "winRate": 0.5652173913043478,
        "averageFlips": 0.4968944099378882,
        "averageDamageDealt": 0.968944099378882,
        "averageEffectAmount": 0,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:tin-oracle:draw-next-turn",
        "kind": "effect",
        "label": "Oracle de fer-blanc -> draw-next-turn",
        "count": 142,
        "wins": 69,
        "losses": 73,
        "draws": 0,
        "winRate": 0.4859154929577465,
        "averageFlips": 0.20422535211267606,
        "averageDamageDealt": 0.3873239436619718,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:lantern-shade:gain-shield",
        "kind": "effect",
        "label": "Ombre a lanterne -> gain-shield",
        "count": 126,
        "wins": 68,
        "losses": 58,
        "draws": 0,
        "winRate": 0.5396825396825397,
        "averageFlips": 0.3412698412698413,
        "averageDamageDealt": 0.31746031746031744,
        "averageEffectAmount": 1.992063492063492,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:path-ranger:boost-self",
        "kind": "effect",
        "label": "Rodeuse du sentier -> boost-self",
        "count": 116,
        "wins": 78,
        "losses": 38,
        "draws": 0,
        "winRate": 0.6724137931034483,
        "averageFlips": 0.43103448275862066,
        "averageDamageDealt": 0.6120689655172413,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "friendly-adjacent:arcane+arcane",
        "kind": "friendly-adjacent",
        "label": "arcane allie + arcane",
        "count": 108,
        "wins": 82,
        "losses": 26,
        "draws": 0,
        "winRate": 0.7592592592592593,
        "averageFlips": 0.5925925925925926,
        "averageDamageDealt": 1.9351851851851851,
        "averageEffectAmount": 0,
        "notes": [
          "Combo gagnant frequent.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:badger:gain-shield",
        "kind": "effect",
        "label": "Poney runique -> gain-shield",
        "count": 106,
        "wins": 57,
        "losses": 49,
        "draws": 0,
        "winRate": 0.5377358490566038,
        "averageFlips": 0.0660377358490566,
        "averageDamageDealt": 0.32075471698113206,
        "averageEffectAmount": 1.9622641509433962,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:quiet-monk:gain-shield",
        "kind": "effect",
        "label": "Moine du seuil -> gain-shield",
        "count": 105,
        "wins": 53,
        "losses": 52,
        "draws": 0,
        "winRate": 0.5047619047619047,
        "averageFlips": 0.2,
        "averageDamageDealt": 0,
        "averageEffectAmount": 1.9523809523809523,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:sapling:gain-shield",
        "kind": "effect",
        "label": "Floramie toxique -> gain-shield",
        "count": 97,
        "wins": 53,
        "losses": 44,
        "draws": 0,
        "winRate": 0.5463917525773195,
        "averageFlips": 0.15463917525773196,
        "averageDamageDealt": 0.3917525773195876,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "family-chain:demon->demon",
        "kind": "family-chain",
        "label": "demon -> demon",
        "count": 87,
        "wins": 46,
        "losses": 41,
        "draws": 0,
        "winRate": 0.5287356321839081,
        "averageFlips": 0.8275862068965517,
        "averageDamageDealt": 1.896551724137931,
        "averageEffectAmount": 0,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      },
      {
        "id": "effect:rune-mage:draw-next-turn",
        "kind": "effect",
        "label": "Mage des runes -> draw-next-turn",
        "count": 80,
        "wins": 47,
        "losses": 33,
        "draws": 0,
        "winRate": 0.5875,
        "averageFlips": 0.325,
        "averageDamageDealt": 0.4625,
        "averageEffectAmount": 2,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:field-knight:gain-shield",
        "kind": "effect",
        "label": "Chevaliere des champs -> gain-shield",
        "count": 65,
        "wins": 37,
        "losses": 28,
        "draws": 0,
        "winRate": 0.5692307692307692,
        "averageFlips": 0.4153846153846154,
        "averageDamageDealt": 0.15384615384615385,
        "averageEffectAmount": 2.4461538461538463,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:moth-ghost:boost-self",
        "kind": "effect",
        "label": "Fantome phalene -> boost-self",
        "count": 58,
        "wins": 29,
        "losses": 29,
        "draws": 0,
        "winRate": 0.5,
        "averageFlips": 0.5517241379310345,
        "averageDamageDealt": 0.1206896551724138,
        "averageEffectAmount": 1,
        "notes": [
          "Signal descriptif a confirmer."
        ]
      },
      {
        "id": "effect:widow-knight:deal-damage",
        "kind": "effect",
        "label": "Chevalier veuf -> deal-damage",
        "count": 55,
        "wins": 33,
        "losses": 22,
        "draws": 0,
        "winRate": 0.6,
        "averageFlips": 1.0545454545454545,
        "averageDamageDealt": 1.5272727272727273,
        "averageEffectAmount": 0.6909090909090909,
        "notes": [
          "Produit beaucoup de flips.",
          "Convertit bien en degats."
        ]
      }
    ],
    "balanceRecommendations": [
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 839,
        "id": "card-tin-oracle-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Oracle de fer-blanc est ignoree par les bots",
        "detail": "839 offres, 17% selection, 49% win quand jouee, role payoff.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 449,
        "id": "card-heron-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Oiselle aubeplume est ignoree par les bots",
        "detail": "449 offres, 15% selection, 57% win quand jouee, role connector.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "card",
        "confidence": "high",
        "sampleSize": 326,
        "id": "card-grave-child-ignored",
        "severity": "watch",
        "action": "buff",
        "title": "Enfant des tombes est ignoree par les bots",
        "detail": "326 offres, 15% selection, 51% win quand jouee, role connector.",
        "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
      },
      {
        "target": "role",
        "confidence": "high",
        "sampleSize": 680,
        "id": "role-connector-buff",
        "severity": "watch",
        "action": "verify",
        "title": "connector manque d'attraction",
        "detail": "680 offres, 17% selection, 48% win.",
        "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
      },
      {
        "id": "combo-friendly-adjacent:human+human",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 236,
        "title": "human allie + human ressort comme combo",
        "detail": "236 occurrences, 73% win, 0.36 flips, 1.56 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:arcane->arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 175,
        "title": "arcane -> arcane ressort comme combo",
        "detail": "175 occurrences, 57% win, 0.78 flips, 0.73 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-friendly-adjacent:arcane+arcane",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 108,
        "title": "arcane allie + arcane ressort comme combo",
        "detail": "108 occurrences, 76% win, 0.59 flips, 1.94 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-family-chain:demon->demon",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 87,
        "title": "demon -> demon ressort comme combo",
        "detail": "87 occurrences, 53% win, 0.83 flips, 1.90 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      },
      {
        "id": "combo-effect:widow-knight:deal-damage",
        "severity": "watch",
        "target": "combo",
        "action": "verify",
        "confidence": "high",
        "sampleSize": 55,
        "title": "Chevalier veuf -> deal-damage ressort comme combo",
        "detail": "55 occurrences, 60% win, 1.05 flips, 1.53 degats.",
        "recommendation": "Tester manuellement ce pattern: s'il est trop facile, augmenter sa condition ou baisser son payoff."
      }
    ]
  },
  "insights": [
    {
      "id": "scenario-current-family-start-watch",
      "severity": "watch",
      "title": "Depart actuel - famille 10 cartes a un signal a surveiller",
      "detail": "Avantage premier joueur a confirmer (67%).",
      "recommendation": "Relancer le rapport avec un echantillon plus grand avant de changer les cartes."
    },
    {
      "id": "diagnostic-card-tin-oracle-ignored",
      "severity": "watch",
      "title": "Oracle de fer-blanc est ignoree par les bots",
      "detail": "839 offres, 17% selection, 49% win quand jouee, role payoff. Confiance high, echantillon 839.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-heron-ignored",
      "severity": "watch",
      "title": "Oiselle aubeplume est ignoree par les bots",
      "detail": "449 offres, 15% selection, 57% win quand jouee, role connector. Confiance high, echantillon 449.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-card-grave-child-ignored",
      "severity": "watch",
      "title": "Enfant des tombes est ignoree par les bots",
      "detail": "326 offres, 15% selection, 51% win quand jouee, role connector. Confiance high, echantillon 326.",
      "recommendation": "Surveiller sans buff immediat: la carte est niche, mais elle reste competitive quand elle est jouee."
    },
    {
      "id": "diagnostic-role-connector-buff",
      "severity": "watch",
      "title": "connector manque d'attraction",
      "detail": "680 offres, 17% selection, 48% win. Confiance high, echantillon 680.",
      "recommendation": "Regarder les cartes les plus joueuses du groupe et isoler le maillon faible."
    }
  ]
};
