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
      title: "L'Analyste Ne Lit Pas l'Histoire",
      quote: "L'analyste ne lit pas l'histoire du patient ; l'analyste lit les espaces où l'histoire ne tient pas ensemble.",
      context: "Cette perspective explore le fossé sémiotique fondamental entre le signifiant et le signifié, se basant sur les travaux précoces de Lacan sur les limites de la communication. L'acte de parler déforme nécessairement la pensée originale, créant un fossé permanent entre l'intention et l'expression.",
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
      title: "La Victime Triomphante",
      quote: "La victime triomphante est celle qui, à travers sa souffrance, parvient à capturer le désir de l'Autre et à dominer la scène du monde.",
      context: "Un extrait de The Triumphant Victim, discutant comment les structures sociales contemporaines encouragent et valident une identité performative enracinée dans l'inadéquation structurelle. Cette identité fournit à la fois reconnaissance sociale et confort psychologique.",
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
      id: "quote_004",
      title: "La Bonne Interprétation",
      quote: "Une 'bonne' interprétation n'est pas celle qui est vraie, mais celle qui produit un effet de vérité dans l'inconscient du sujet.",
      context: "Développant sur l'échec du langage, cette citation explore comment le signifiant contient toujours un silence inhérent - un fossé qui représente ce qui ne peut être articulé. Ce silence n'est pas le vide mais l'espace où le sens émerge.",
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
      title: "La Structure Perverse",
      quote: "Dans la structure perverse, la douleur de la victime est l'instrument à travers lequel le sujet tente de compléter le manque de l'Autre.",
      context: "Analyse plus approfondie de la victimisation comme performance, examinant comment les médias sociaux et la culture contemporaine créent des boucles de rétroaction qui récompensent les exhibitions de souffrance. La performance devient authentique par sa validation sociale.",
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
      id: "quote_007",
      title: "La Formation de l'Analyste",
      quote: "La formation d'un analyste commence au moment où ils réalisent qu'ils n'écoutent plus pour le sens, mais pour la structure du signifiant.",
      context: "Contexte historique pour comprendre le développement de la théorie psychanalytique, en particulier comment Lacan a réinterprété l'œuvre de Freud à travers la linguistique structurale. Cette relecture a créé de nouvelles possibilités pour comprendre l'inconscient.",
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
      title: "Le Triomphe de la Victime",
      quote: "Le triomphe de la victime réside dans la connaissance secrète qu'ils ont mis en scène la scène de leur propre destruction pour prouver l'inconsistance de l'Autre.",
      context: "Un contrepoint à l'analyse de la victimisation, suggérant que la reconnaissance de l'agence dans la souffrance représente la première étape vers l'empowerment authentique. Cela remet en question la vision déterministe du conditionnement social.",
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
      id: "quote_010",
      title: "Résistance et Cure",
      quote: "La résistance n'est pas un obstacle à la cure ; c'est le même matériel du travail analytique.",
      context: "Application de la théorie sémiotique à la pratique clinique, démontrant comment les symptômes physiques et psychologiques fonctionnent comme des éléments structurels dans le récit du patient. Ces 'marques de ponctuation' révèlent la grammaire sous-jacente de la souffrance.",
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
      title: "La Souffrance comme Monnaie",
      quote: "La souffrance n'est pas simplement un état d'être ; dans l'économie de la victime triomphante, elle devient une forme de monnaie utilisée pour négocier avec l'ordre symbolique.",
      context: "Analyse contemporaine de la manière dont les plateformes de médias sociaux ont créé de nouveaux mécanismes pour la performance de la souffrance. L'arène numérique amplifie et monétise l'exposition de la douleur personnelle, créant de nouvelles formes d'identité.",
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
    }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}
