// Contextual Quote Journey Data Structure
// This file contains network of interconnected quotes for the Miller Analysis project

const quoteData = {
  metadata: {
    version: "1.0",
    lastUpdated: "2025-11-27",
    totalQuotes: 12,
    description: "Contextual Quote Journey data for Miller Analysis"
  },
  
  themes: [
    {
      id: "language",
      name: "Lingua et Semiotica",
      description: "Exploratio limitationum linguisticarum et fissurae inter significans et significatum",
      color: "#FFD700",
      icon: "language-theme.svg",
      relatedThemes: ["semiotics", "communication"]
    },
    {
      id: "identity",
      name: "Identitas et Ego",
      description: "Formatio identitatis per structuras sociales et narrationes personales",
      color: "#002147",
      icon: "identity-theme.svg",
      relatedThemes: ["social", "desire"]
    },
    {
      id: "interpretation",
      name: "Interpretatio et Analysis",
      description: "Processus et limites interpretationis psychoanalyticae",
      color: "#36454F",
      icon: "interpretation-theme.svg",
      relatedThemes: ["clinical", "philosophical"]
    },
    {
      id: "desire",
      name: "Desiderium et Subiectivitas",
      description: "Natura desiderii et eius rolus in formanda experientia subiectiva",
      color: "#8B0000",
      icon: "desire-theme.svg",
      relatedThemes: ["identity", "philosophical"]
    },
    {
      id: "clinical",
      name: "Applicationes Clinicae",
      description: "Applicationes practicae theoriae psychoanalyticae in locis clinicalibus",
      color: "#2F4F4F",
      icon: "clinical-theme.svg",
      relatedThemes: ["interpretation", "language"]
    },
    {
      id: "social",
      name: "Contextus Socialis et Culturalis",
      description: "Impactus structurarum socialium in psychologiam individualem",
      color: "#483D8B",
      icon: "social-theme.svg",
      relatedThemes: ["identity", "desire"]
    },
    {
      id: "philosophical",
      name: "Fundamenta Philosophica",
      description: "Principia philosophica subiectiva theoriae psychoanalyticae",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],
  
  quotes: [
    {
      id: "quote_001",
      title: "Fallentia Linguae",
      quote: "Omnis sententia iam proditio est cogitationis initialis.",
      context: "Haec perspicacitatem explorat fissuram semioticam fundamentalem inter significans et significatum, ex operibus Lacani primis de limitibus communicationis ducta. Actus loquendi necessario cogitationem originalem distorquet, creantes fissuram permanentem inter intentionem et expressionem.",
      source: {
        work: "Do You Read Me",
        page: 42,
        chapter: "Capitulum 3: Fissura Semiotica",
        year: 2018
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_004",
          relationship: "expands",
          strength: 0.8,
          label: "Exploratio ulterior"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Contextus historicus"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.6,
          label: "Applicatio clinica"
        }
      ],
      visual: {
        type: "central",
        color: "#002147",
        size: 1.2,
        icon: "language-icon.svg"
      },
      position: {
        x: 0.5,
        y: 0.3,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 2,
        popularity: 0.9,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_002",
      title: "Victima ut Identitas",
      quote: "Adoptare rollem victimae est unicam formam triumphi quam ego vere intelligit consequi.",
      context: "Excerptum ex Triumphant Victim, discutiens quomodo structurae sociales hodiernae foveant et valident identitatem performativam radicatam in inadequate structura. Haec identitas tum recognitionem socialem tum comfortem psychicum praebet.",
      source: {
        work: "Triumphant Victim",
        page: 87,
        chapter: "Capitulum 5: Performantia Doloris",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_005",
          relationship: "expands",
          strength: 0.9,
          label: "Analysis profundior"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.7,
          label: "Visus alternativus"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.6,
          label: "Implicationes sociales"
        }
      ],
      visual: {
        type: "central",
        color: "#36454F",
        size: 1.1,
        icon: "identity-icon.svg"
      },
      position: {
        x: 0.3,
        y: 0.6,
        fixed: false
      },
      metadata: {
        difficulty: "advanced",
        readingTime: 3,
        popularity: 0.8,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_003",
      title: "Finis Interpretationis",
      quote: "Propositum psychoanalysis non est responsa praebere, sed desiderium eorum finire.",
      context: "Principium centrale philosophiae Milleris: vera resolutio venit quando subiectum desinit desiderium completionis in analysistam vel narrationem externam projicere. Iter therapeuticum non cum intellectione sed cum acceptatione terminatur.",
      source: {
        work: "Triumphant Victim",
        page: 156,
        chapter: "Capitulum 8: Ultra Analysin",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_006",
          relationship: "expands",
          strength: 0.8,
          label: "Processus therapeuticus"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.7,
          label: "Implicationes philosophicae"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Integratio"
        }
      ],
      visual: {
        type: "terminal",
        color: "#FFD700",
        size: 1.0,
        icon: "interpretation-icon.svg"
      },
      position: {
        x: 0.7,
        y: 0.7,
        fixed: false
      },
      metadata: {
        difficulty: "advanced",
        readingTime: 2,
        popularity: 0.7,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_004",
      title: "Silentium Significantis",
      quote: "Inter verbum et cogitationem abyssus iacet quem lingua ipsa transire non potest.",
      context: "Expandens super fallentia linguae, haec citatio explorat quomodo significans semper silentium inherens continet - fissuram quae repraesentat quod articulari non potest. Hoc silentium non vacuum sed spatium est ubi significatio emergit.",
      source: {
        work: "Do You Read Me",
        page: 63,
        chapter: "Capitulum 4: Inexpressum",
        year: 2018
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "expands",
          strength: 0.8,
          label: "Fundamentum"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Contextus theoricus"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.7,
          label: "Relevantia clinica"
        }
      ],
      visual: {
        type: "node",
        color: "#002147",
        size: 1.0,
        icon: "silence-icon.svg"
      },
      position: {
        x: 0.4,
        y: 0.2,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 2,
        popularity: 0.6,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_005",
      title: "Performantia Doloris",
      quote: "Identitas hodierna est scaena ubi dolor etiam scriptum et plausus est.",
      context: "Analysis ulterior victimatis ut performantia, examinans quomodo media socialia et cultura hodierna cyclis retroactionis creant quae exhibitiones doloris praemiant. Performantia per validationem socialem fit authentica.",
      source: {
        work: "Triumphant Victim",
        page: 112,
        chapter: "Capitulum 6: Scaena Socialis",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "expands",
          strength: 0.9,
          label: "Conceptus centralis"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.5,
          label: "Contrapunctus"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.8,
          label: "Relevantia hodierna"
        }
      ],
      visual: {
        type: "node",
        color: "#36454F",
        size: 1.0,
        icon: "performance-icon.svg"
      },
      position: {
        x: 0.2,
        y: 0.5,
        fixed: false
      },
      metadata: {
        difficulty: "advanced",
        readingTime: 3,
        popularity: 0.7,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_006",
      title: "Terminatio Therapeutica",
      quote: "Successus analysistae mensuratur sua obsolescentia.",
      context: "Exploratio paradoxi practicae therapeuticae ubi scopus est se fieri inutilem. Vera sanatio evenit quando aeger non iam indiget interpretatione analysistae sed per suum pagum psychicum navigare potest.",
      source: {
        work: "Triumphant Victim",
        page: 178,
        chapter: "Capitulum 9: Finis Analyseos",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "expands",
          strength: 0.8,
          label: "Applicatio practica"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.6,
          label: "Considerationes ethicae"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Integratio"
        }
      ],
      visual: {
        type: "node",
        color: "#FFD700",
        size: 1.0,
        icon: "termination-icon.svg"
      },
      position: {
        x: 0.8,
        y: 0.6,
        fixed: false
      },
      metadata: {
        difficulty: "advanced",
        readingTime: 2,
        popularity: 0.6,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_007",
      title: "Hereditas Lacani",
      quote: "Reditus ad Freud non est repetitio sed relatio per lentem structuralismi.",
      context: "Contextus historicus ad intellegendum evolutionem theoriae psychoanalyticae, praecipue quomodo Lacan opus Freud per linguistics structuralem re-interpretavit. Haec relatio novas possibilitates ad intellegendum inconscium creavit.",
      source: {
        work: "Do You Read Me",
        page: 28,
        chapter: "Capitulum 2: Versio Structuralis",
        year: 2018
      },
      themes: ["language", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Fundamentum theoricum"
        },
        {
          id: "quote_004",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Contextus"
        },
        {
          id: "quote_009",
          relationship: "expands",
          strength: 0.5,
          label: "Implicationes philosophicae"
        }
      ],
      visual: {
        type: "gateway",
        color: "#002147",
        size: 0.9,
        icon: "history-icon.svg"
      },
      position: {
        x: 0.6,
        y: 0.1,
        fixed: false
      },
      metadata: {
        difficulty: "beginner",
        readingTime: 2,
        popularity: 0.5,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_008",
      title: "Ultra Victimatem",
      quote: "Vera potentia incipit cum electionem in dolore nostro recognoscimus.",
      context: "Contrapunctus ad analysin victimatis, suggerens quod recognitio agentiae intra dolorem primum gradum ad potentiam authenticam repraesentat. Hoc visum deterministicae conditioningis sociale provocat.",
      source: {
        work: "Triumphant Victim",
        page: 134,
        chapter: "Capitulum 7: Possibilitas Electionis",
        year: 2021
      },
      themes: ["identity", "desire"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "contradicts",
          strength: 0.7,
          label: "Perspectiva alternativa"
        },
        {
          id: "quote_005",
          relationship: "contradicts",
          strength: 0.5,
          label: "Contrapunctus"
        },
        {
          id: "quote_011",
          relationship: "expands",
          strength: 0.6,
          label: "Exploratio ulterior"
        }
      ],
      visual: {
        type: "node",
        color: "#36454F",
        size: 1.0,
        icon: "empowerment-icon.svg"
      },
      position: {
        x: 0.1,
        y: 0.7,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 2,
        popularity: 0.6,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_009",
      title: "Ethica Interpretationis",
      quote: "Interpretari est exercere potestatem, sed interpretationem recusare est responsabilitatem deserere.",
      context: "Examen philosophicum dilematis ethici inherentis in practica psychoanalytica. Analysita debet navigare inter arrogantiam scientiae et neglegentiam recusandi offerendi directionem.",
      source: {
        work: "Triumphant Victim",
        page: 201,
        chapter: "Capitulum 10: Dilemma Ethicum",
        year: 2021
      },
      themes: ["interpretation", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "questions",
          strength: 0.7,
          label: "Quaestiones ethicae"
        },
        {
          id: "quote_006",
          relationship: "questions",
          strength: 0.6,
          label: "Ethica professionalis"
        },
        {
          id: "quote_007",
          relationship: "expands",
          strength: 0.5,
          label: "Contextus theoricus"
        }
      ],
      visual: {
        type: "node",
        color: "#FFD700",
        size: 1.0,
        icon: "ethics-icon.svg"
      },
      position: {
        x: 0.9,
        y: 0.4,
        fixed: false
      },
      metadata: {
        difficulty: "advanced",
        readingTime: 3,
        popularity: 0.5,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_010",
      title: "Semiotica Clinica",
      quote: "Sermo aegri est textus ubi symptomata signa punctuationis sunt.",
      context: "Applicatio theoriae semioticae in practica clinica, demonstrans quomodo symptomata physica et psychologica ut elementa structuralia in narratione aegri functionantur. Haec 'signa punctuationis' grammaticam subiacentem doloris revelant.",
      source: {
        work: "Do You Read Me",
        page: 95,
        chapter: "Capitulum 5: Textus Clinicus",
        year: 2018
      },
      themes: ["language", "clinical"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "applies",
          strength: 0.6,
          label: "Applicatio practica"
        },
        {
          id: "quote_004",
          relationship: "applies",
          strength: 0.7,
          label: "Relevantia clinica"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Integratio"
        }
      ],
      visual: {
        type: "node",
        color: "#002147",
        size: 1.0,
        icon: "clinical-icon.svg"
      },
      position: {
        x: 0.3,
        y: 0.3,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 2,
        popularity: 0.6,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_011",
      title: "Dolor in Mediis Socialibus",
      quote: "Arena digitalis dolorem privatum in performantiam publicam transformavit.",
      context: "Analysis hodierna quomodo media socialia mechanismos novos pro performantia doloris creaverint. Arena digitalis exhibitionem doloris personalis amplificat et monetizat, novas identitatum formas creans.",
      source: {
        work: "Triumphant Victim",
        page: 145,
        chapter: "Capitulum 7: Scaena Digitalis",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "applies",
          strength: 0.6,
          label: "Applicatio hodierna"
        },
        {
          id: "quote_005",
          relationship: "applies",
          strength: 0.8,
          label: "Contextus hodiernus"
        },
        {
          id: "quote_008",
          relationship: "expands",
          strength: 0.6,
          label: "Analysis ulterior"
        }
      ],
      visual: {
        type: "node",
        color: "#36454F",
        size: 1.0,
        icon: "digital-icon.svg"
      },
      position: {
        x: 0.15,
        y: 0.85,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 2,
        popularity: 0.7,
        dateAdded: "2025-11-27"
      }
    },
    {
      id: "quote_012",
      title: "Ego Integratum",
      quote: "Integritas non est absentia contradictionis sed amplexus paradoxorum.",
      context: "Synthesin plurium thematum, suggerens quod sanitas psychologica non ex resolutione contradictionum sed ex evolutione capacitates veritates paradoxas simul tenendi venit. Hoc repraesentat culminationem itineris analytici.",
      source: {
        work: "Triumphant Victim",
        page: 223,
        chapter: "Capitulum 11: Ultra Resolutionem",
        year: 2021
      },
      themes: ["interpretation", "desire"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Integratio"
        },
        {
          id: "quote_006",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Scopus therapeuticus"
        },
        {
          id: "quote_010",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Integratio clinica"
        }
      ],
      visual: {
        type: "terminal",
        color: "#FFD700",
        size: 1.1,
        icon: "integration-icon.svg"
      },
      position: {
        x: 0.85,
        y: 0.85,
        fixed: false
      },
      metadata: {
        difficulty: "advanced",
        readingTime: 2,
        popularity: 0.8,
        dateAdded: "2025-11-27"
      }
    }
  ],
  
  connections: [
    {
      from: "quote_001",
      to: "quote_004",
      type: "expands",
      strength: 0.8,
      label: "Exploratio ulterior",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 3
      }
    },
    {
      from: "quote_001",
      to: "quote_007",
      type: "contextualizes",
      strength: 0.7,
      label: "Contextus historicus",
      bidirectional: true,
      visual: {
        style: "dashed",
        color: "#002147",
        width: 2
      }
    },
    {
      from: "quote_001",
      to: "quote_010",
      type: "applies",
      strength: 0.6,
      label: "Applicatio clinica",
      bidirectional: true,
      visual: {
        style: "dotted",
        color: "#36454F",
        width: 2
      }
    },
    {
      from: "quote_002",
      to: "quote_005",
      type: "expands",
      strength: 0.9,
      label: "Analysis profundior",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 3
      }
    },
    {
      from: "quote_002",
      to: "quote_008",
      type: "contradicts",
      strength: 0.7,
      label: "Visus alternativus",
      bidirectional: true,
      visual: {
        style: "dashed",
        color: "#dc3545",
        width: 2
      }
    },
    {
      from: "quote_002",
      to: "quote_011",
      type: "applies",
      strength: 0.6,
      label: "Implicationes sociales",
      bidirectional: true,
      visual: {
        style: "dotted",
        color: "#36454F",
        width: 2
      }
    },
    {
      from: "quote_003",
      to: "quote_006",
      type: "expands",
      strength: 0.8,
      label: "Processus therapeuticus",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 3
      }
    },
    {
      from: "quote_003",
      to: "quote_009",
      type: "questions",
      strength: 0.7,
      label: "Implicationes philosophicae",
      bidirectional: true,
      visual: {
        style: "dashed",
        color: "#002147",
        width: 2
      }
    },
    {
      from: "quote_003",
      to: "quote_012",
      type: "synthesizes",
      strength: 0.6,
      label: "Integratio",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 2
      }
    },
    {
      from: "quote_004",
      to: "quote_007",
      type: "contextualizes",
      strength: 0.6,
      label: "Contextus theoricus",
      bidirectional: true,
      visual: {
        style: "dashed",
        color: "#002147",
        width: 2
      }
    },
    {
      from: "quote_004",
      to: "quote_010",
      type: "applies",
      strength: 0.7,
      label: "Relevantia clinica",
      bidirectional: true,
      visual: {
        style: "dotted",
        color: "#36454F",
        width: 2
      }
    },
    {
      from: "quote_005",
      to: "quote_008",
      type: "contradicts",
      strength: 0.5,
      label: "Contrapunctus",
      bidirectional: true,
      visual: {
        style: "dashed",
        color: "#dc3545",
        width: 2
      }
    },
    {
      from: "quote_005",
      to: "quote_011",
      type: "applies",
      strength: 0.8,
      label: "Relevantia hodierna",
      bidirectional: true,
      visual: {
        style: "dotted",
        color: "#36454F",
        width: 2
      }
    },
    {
      from: "quote_006",
      to: "quote_009",
      type: "questions",
      strength: 0.6,
      label: "Considerationes ethicae",
      bidirectional: true,
      visual: {
        style: "dashed",
        color: "#002147",
        width: 2
      }
    },
    {
      from: "quote_006",
      to: "quote_012",
      type: "synthesizes",
      strength: 0.7,
      label: "Scopus therapeuticus",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 2
      }
    },
    {
      from: "quote_007",
      to: "quote_009",
      type: "expands",
      strength: 0.5,
      label: "Implicationes philosophicae",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 2
      }
    },
    {
      from: "quote_008",
      to: "quote_011",
      type: "expands",
      strength: 0.6,
      label: "Exploratio ulterior",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 2
      }
    },
    {
      from: "quote_010",
      to: "quote_012",
      type: "synthesizes",
      strength: 0.5,
      label: "Integratio clinica",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 2
      }
    }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}