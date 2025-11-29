// Contextual Quote Journey Data Structure
// This file contains the network of interconnected quotes for the Miller Analysis project

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
      name: "Langage et Sémiotique",
      description: "Exploration des limitations linguistiques et du fossé entre le signifiant et le signifié",
      color: "#FFD700",
      icon: "language-theme.svg",
      relatedThemes: ["semiotics", "communication"]
    },
    {
      id: "identity",
      name: "Identité et Soi",
      description: "Formation de l'identité à travers les structures sociales et les récits personnels",
      color: "#002147",
      icon: "identity-theme.svg",
      relatedThemes: ["social", "desire"]
    },
    {
      id: "interpretation",
      name: "Interprétation et Analyse",
      description: "Le processus et les limites de l'interprétation psychanalytique",
      color: "#36454F",
      icon: "interpretation-theme.svg",
      relatedThemes: ["clinical", "philosophical"]
    },
    {
      id: "desire",
      name: "Désir et Subjectivité",
      description: "La nature du désir et son rôle dans la formation de l'expérience subjective",
      color: "#8B0000",
      icon: "desire-theme.svg",
      relatedThemes: ["identity", "philosophical"]
    },
    {
      id: "clinical",
      name: "Applications Cliniques",
      description: "Applications pratiques de la théorie psychanalytique en contexte clinique",
      color: "#2F4F4F",
      icon: "clinical-theme.svg",
      relatedThemes: ["interpretation", "language"]
    },
    {
      id: "social",
      name: "Contexte Social et Culturel",
      description: "L'impact des structures sociales sur la psychologie individuelle",
      color: "#483D8B",
      icon: "social-theme.svg",
      relatedThemes: ["identity", "desire"]
    },
    {
      id: "philosophical",
      name: "Fondements Philosophiques",
      description: "Principes philosophiques sous-jacents de la théorie psychanalytique",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],
  
  quotes: [
    {
      id: "quote_001",
      title: "L'Échec du Langage",
      quote: "Chaque phrase est déjà une trahison de la pensée initiale.",
      context: "Cet aperçu explore le fossé sémiotique fondamental entre le signifiant et le signifié, s'inspirant des premiers travaux de Lacan sur les limites de la communication. L'acte de parler déforme nécessairement la pensée originale, créant un fossé permanent entre l'intention et l'expression.",
      source: {
        work: "Do You Read Me",
        page: 42,
        chapter: "Chapitre 3 : Le Fossé Sémiotique",
        year: 2018
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_004",
          relationship: "expands",
          strength: 0.8,
          label: "Exploration approfondie"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Contexte historique"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.6,
          label: "Application clinique"
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
      title: "La Victimisation comme Identité",
      quote: "Adopter le rôle de victime, c'est atteindre la seule forme de triomphe que l'ego comprend vraiment.",
      context: "Un extrait de Triumphant Victim, discutant comment les structures sociales contemporaines encouragent et valident une identité performative enracinée dans l'inadéquation structurelle. Cette identité fournit à la fois reconnaissance sociale et confort psychologique.",
      source: {
        work: "Triumphant Victim",
        page: 87,
        chapter: "Chapitre 5 : La Performance de la Souffrance",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_005",
          relationship: "expands",
          strength: 0.9,
          label: "Analyse plus approfondie"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.7,
          label: "Vue alternative"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.6,
          label: "Implications sociales"
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
      title: "La Fin de l'Interprétation",
      quote: "Le but de la psychanalyse n'est pas de fournir des réponses, mais de mettre fin au désir d'en avoir.",
      context: "Un principe central de la philosophie de Miller : la véritable résolution survient lorsque le sujet cesse de projeter le désir d'achèvement sur l'analyste ou un récit externe. Le parcours thérapeutique se termine non par la compréhension mais par l'acceptation.",
      source: {
        work: "Triumphant Victim",
        page: 156,
        chapter: "Chapitre 8 : Au-delà de l'Analyse",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_006",
          relationship: "expands",
          strength: 0.8,
          label: "Processus thérapeutique"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.7,
          label: "Implications philosophiques"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Intégration"
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
      title: "Le Silence du Signifiant",
      quote: "Entre le mot et la pensée se trouve un abîme que le langage lui-même ne peut franchir.",
      context: "Développant l'échec du langage, cette citation explore comment le signifiant contient toujours un silence inhérent - un fossé qui représente ce qui ne peut être articulé. Ce silence n'est pas le vide mais l'espace où le sens émerge.",
      source: {
        work: "Do You Read Me",
        page: 63,
        chapter: "Chapitre 4 : L'Non-dit",
        year: 2018
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "expands",
          strength: 0.8,
          label: "Fondement"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Contexte théorique"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.7,
          label: "Pertinence clinique"
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
      title: "La Performance de la Souffrance",
      quote: "L'identité moderne est une scène où la souffrance est à la fois le scénario et les applaudissements.",
      context: "Analyse plus approfondie de la victimisation comme performance, examinant comment les médias sociaux et la culture contemporaine créent des boucles de rétroaction qui récompensent les manifestations de souffrance. La performance devient authentique par sa validation sociale.",
      source: {
        work: "Triumphant Victim",
        page: 112,
        chapter: "Chapitre 6 : La Scène Sociale",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "expands",
          strength: 0.9,
          label: "Concept central"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.5,
          label: "Contrepoint"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.8,
          label: "Pertinence contemporaine"
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
      title: "La Terminaison Thérapeutique",
      quote: "Le succès de l'analyste se mesure à sa propre obsolescence.",
      context: "Exploration du paradoxe de la pratique thérapeutique où le but est de se rendre inutile. La véritable guérison survient lorsque le patient n'a plus besoin de l'interprétation de l'analyste mais peut naviguer dans son propre paysage psychique.",
      source: {
        work: "Triumphant Victim",
        page: 178,
        chapter: "Chapitre 9 : La Fin de l'Analyse",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "expands",
          strength: 0.8,
          label: "Application pratique"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.6,
          label: "Considérations éthiques"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Intégration"
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
      title: "L'Héritage de Lacan",
      quote: "Le retour à Freud n'est pas une répétition mais une relecture à travers le prisme du structuralisme.",
      context: "Contexte historique pour comprendre le développement de la théorie psychanalytique, en particulier comment Lacan a réinterprété l'œuvre de Freud à travers la linguistique structurale. Cette relecture a créé de nouvelles possibilités pour comprendre l'inconscient.",
      source: {
        work: "Do You Read Me",
        page: 28,
        chapter: "Chapitre 2 : Le Tournant Structurel",
        year: 2018
      },
      themes: ["language", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Fondement théorique"
        },
        {
          id: "quote_004",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Contexte"
        },
        {
          id: "quote_009",
          relationship: "expands",
          strength: 0.5,
          label: "Implications philosophiques"
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
      title: "Au-delà de la Victimisation",
      quote: "Le véritable empowerment commence lorsque nous reconnaissons le choix dans notre souffrance.",
      context: "Un contrepoint à l'analyse de la victimisation, suggérant que la reconnaissance de l'agence dans la souffrance représente la première étape vers un authentique empowerment. Cela remet en question la vue déterministe du conditionnement social.",
      source: {
        work: "Triumphant Victim",
        page: 134,
        chapter: "Chapitre 7 : La Possibilité du Choix",
        year: 2021
      },
      themes: ["identity", "desire"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "contradicts",
          strength: 0.7,
          label: "Perspective alternative"
        },
        {
          id: "quote_005",
          relationship: "contradicts",
          strength: 0.5,
          label: "Contrepoint"
        },
        {
          id: "quote_011",
          relationship: "expands",
          strength: 0.6,
          label: "Exploration approfondie"
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
      title: "L'Éthique de l'Interprétation",
      quote: "Interpréter, c'est exercer le pouvoir, mais refuser l'interprétation, c'est abandonner la responsabilité.",
      context: "Examen philosophique du dilemme éthique inhérent à la pratique psychanalytique. L'analyste doit naviguer entre l'arrogance de prétendre savoir et la négligence de refuser d'offrir des conseils.",
      source: {
        work: "Triumphant Victim",
        page: 201,
        chapter: "Chapitre 10 : Le Dilemme Éthique",
        year: 2021
      },
      themes: ["interpretation", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "questions",
          strength: 0.7,
          label: "Questions éthiques"
        },
        {
          id: "quote_006",
          relationship: "questions",
          strength: 0.6,
          label: "Éthique professionnelle"
        },
        {
          id: "quote_007",
          relationship: "expands",
          strength: 0.5,
          label: "Contexte théorique"
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
      title: "Sémiotique Clinique",
      quote: "La parole du patient est un texte où les symptômes sont des marques de ponctuation.",
      context: "Application de la théorie sémiotique à la pratique clinique, démontrant comment les symptômes physiques et psychologiques fonctionnent comme des éléments structurels dans le récit du patient. Ces 'marques de ponctuation' révèlent la grammaire sous-jacente de la souffrance.",
      source: {
        work: "Do You Read Me",
        page: 95,
        chapter: "Chapitre 5 : Le Texte Clinique",
        year: 2018
      },
      themes: ["language", "clinical"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "applies",
          strength: 0.6,
          label: "Application pratique"
        },
        {
          id: "quote_004",
          relationship: "applies",
          strength: 0.7,
          label: "Pertinence clinique"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Intégration"
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
      title: "La Souffrance sur les Médias Sociaux",
      quote: "L'arène numérique a transformé la douleur privée en performance publique.",
      context: "Analyse contemporaine de la manière dont les plateformes de médias sociaux ont créé de nouveaux mécanismes pour la performance de la souffrance. L'arène numérique amplifie et monétise l'affichage de la douleur personnelle, créant de nouvelles formes d'identité.",
      source: {
        work: "Triumphant Victim",
        page: 145,
        chapter: "Chapitre 7 : La Scène Numérique",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "applies",
          strength: 0.6,
          label: "Application contemporaine"
        },
        {
          id: "quote_005",
          relationship: "applies",
          strength: 0.8,
          label: "Contexte moderne"
        },
        {
          id: "quote_008",
          relationship: "expands",
          strength: 0.6,
          label: "Analyse plus approfondie"
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
      title: "Le Soi Intégré",
      quote: "L'unité n'est pas l'absence de contradiction mais l'acceptation du paradoxe.",
      context: "Synthèse de multiples thèmes, suggérant que la santé psychologique ne vient pas de la résolution des contradictions mais du développement de la capacité à maintenir simultanément des vérités paradoxales. Cela représente l'aboutissement du parcours analytique.",
      source: {
        work: "Triumphant Victim",
        page: 223,
        chapter: "Chapitre 11 : Au-delà de la Résolution",
        year: 2021
      },
      themes: ["interpretation", "desire"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Intégration"
        },
        {
          id: "quote_006",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Objectif thérapeutique"
        },
        {
          id: "quote_010",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Intégration clinique"
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
      label: "Exploration approfondie",
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
      label: "Contexte historique",
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
      label: "Application clinique",
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
      label: "Analyse plus approfondie",
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
      label: "Vue alternative",
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
      label: "Implications sociales",
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
      label: "Processus thérapeutique",
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
      label: "Implications philosophiques",
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
      label: "Intégration",
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
      label: "Contexte théorique",
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
      label: "Pertinence clinique",
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
      label: "Contrepoint",
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
      label: "Pertinence contemporaine",
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
      label: "Considérations éthiques",
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
      label: "Objectif thérapeutique",
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
      label: "Implications philosophiques",
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
      label: "Exploration approfondie",
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
      label: "Intégration clinique",
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