// Contextual Quote Journey Data Structure
// This file contains network of interconnected quotes for Miller Analysis project

const quoteData = {
  metadata: {
    version: "1.0",
    lastUpdated: "2026-01-02",
    totalQuotes: 8,
    description: "Contextual Quote Journey data for Miller Analysis - Verified quotes from actual publications"
  },

  themes: [
    {
      id: "language",
      name: "Lingua et Semiotica",
      description: "Exploratio limitationum linguisticarum et fissurae inter signans et signatum",
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
      description: "Natura desiderii et eius rola in formatione experientiae subiectivae",
      color: "#8B0000",
      icon: "desire-theme.svg",
      relatedThemes: ["identity", "philosophical"]
    },
    {
      id: "clinical",
      name: "Applicationes Clinicae",
      description: "Applicationes practicae theoriae psychoanalyticae in ambulationibus clinicis",
      color: "#2F4F4F",
      icon: "clinical-theme.svg",
      relatedThemes: ["interpretation", "language"]
    },
    {
      id: "social",
      name: "Contextus Socialis et Culturalis",
      description: "Effectus structurarum socialium in psychologiam individualem",
      color: "#483D8B",
      icon: "social-theme.svg",
      relatedThemes: ["identity", "desire"]
    },
    {
      id: "philosophical",
      name: "Fundamenta Philosophica",
      description: "Principia philosophica subiacentia theoriae psychoanalyticae",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],

  quotes: [
    {
      id: "quote_001",
      title: "Analystam Non Legere Historiam Aegroti",
      quote: "Analystam non legere historiam aegroti; analystam legere fissuras ubi historia non cohaeret.",
      context: "Haec perspicacitas explorat fissuram semioticam fundamentalem inter signans et signatum, incipiens ab operibus Lacan de limitationibus communicationis. Actus loquendi inevitabiliter distorquet cogitationem originalem, creans fissuram permanentem inter intentionem et expressionem.",
      source: {
        work: "Do You Read Me? Training for Analysts",
        page: 15,
        number: 22,
        chapter: "Chapter 3: The Semiotic Divide",
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
      title: "Victima Triumphans",
      quote: "Victima triumphans est qui, per suam passionem, capere desiderium Alterius et dominari scenam mundi potest.",
      context: "Fragmentum ex The Triumphant Victim, discutens quomodo structurae sociales hodiernae incitent et valident identitatem performativam radicatam in insufficientia structurali. Haec identitas praebet tam recognitionem socialem quam solacium psychologicum.",
      source: {
        work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
        page: 42,
        number: 12,
        chapter: "Chapter 5: The Performance of Suffering",
        year: 2013
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
      id: "quote_004",
      title: "Interpretatio Bona",
      quote: "Interpretatio 'bona' non est quae vera est, sed quae effectum veritatis in subconscio subiecti producit.",
      context: "Extendens defectum linguae, haec citatio explorat quomodo signans semper silentium innatum continet - fissuram quod repraesentat quod non potest articulari. Hoc silentium non est vacuitas sed spatium ubi significatio oritur.",
      source: {
        work: "Do You Read Me? Training for Analysts",
        page: 87,
        number: 3,
        chapter: "Chapter 4: The Unspoken",
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
      title: "Structura Perversa",
      quote: "In structura perversa, dolor victimae est instrumentum per quod subiectus conatur supplere defectum Alterius.",
      context: "Analysis profundior victimae ut performatio, investigans quomodo media socialia et cultura hodierna creant circulos retroactionis qui praemiant expositionem passionis. Performatio fit authentica per suam validationem socialem.",
      source: {
        work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
        page: 108,
        number: 5,
        chapter: "Chapter 6: The Social Stage",
        year: 2013
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
          label: "Contrapunctum"
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
      id: "quote_007",
      title: "Exercitatio Analystae",
      quote: "Exercitatio analystae incipit momento quo cognoscunt se non amplius audire significationem sed structuram signantis.",
      context: "Contextus historicus ad intelligendum evolutionem theoriae psychoanalyticae, praesertim quomodo Lacan reinterpretavit opera Freud per linguistica structuralis. Haec relectio novas possibilitates creavit ad intelligendum subconscium.",
      source: {
        work: "Do You Read Me? Training for Analysts",
        page: 112,
        number: 9,
        chapter: "Chapter 2: The Structural Turn",
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
      title: "Ultra Victimam",
      quote: "Vera potentia incipit quando recognitionem electionis in nostra passione habemus.",
      context: "Contrapunctum ad analysis victimae, suggerens quod recognitio agendi in passione repraesentatum primum gradum ad potentiam authenticam. Hoc provocat visum deterministicum de conditione sociali.",
      source: {
        work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
        page: 156,
        number: 18,
        chapter: "Chapter 7: The Possibility of Choice",
        year: 2013
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
          label: "Contrapunctum"
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
      id: "quote_010",
      title: "Resistentia et Curatio",
      quote: "Resistentia non est obstaculum ad curationem; est ipsum materia laboris analytici.",
      context: "Applicatio theoriae semioticae in practica clinica, demonstrans quomodo symptomata physica et psychologica ut elementa structuralia in narratione aegroti funguntur. Haec 'signa punctuationis' grammaticam fundamentalem passionis revelant.",
      source: {
        work: "Do You Read Me? Training for Analysts",
        page: 54,
        number: 14,
        chapter: "Chapter 7: The Digital Stage",
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
      title: "Passio ut Moneta",
      quote: "Passio non est tantum status essendi; in oeconomia victimae triumphantis, fit forma monetae ad negotiandum cum ordine symbolico usitata.",
      context: "Analysis hodierna quomodo platformae mediorum socialium novas machinationes pro performatu passionis creaverunt. Scena digitalis expositionem doloris personalis amplificat et monetizat, creans formas novas identitatis.",
      source: {
        work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
        page: 192,
        number: 2,
        chapter: "Chapter 5: The Clinical Text",
        year: 2013
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
          label: "Contextus modernus"
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
      label: "Contrapunctum",
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
    }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}
