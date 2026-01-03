// Contextual Quote Journey Data Structure
// This file contains verified book summaries for Miller Analysis project

const quoteData = {
  metadata: {
    version: "2.0",
    lastUpdated: "2026-01-03",
    totalQuotes: 6,
    description: "Verified book summaries from actual publications - no fabricated quotes"
  },

  themes: [
    {
      id: "sadomasochism",
      name: "Sadomasochism & Perverse Thinking",
      description: "Examination of sadomasochistic patterns and perverse thinking in personal relationships and society",
      color: "#FFD700",
      icon: "sadomasochism-theme.svg",
      relatedThemes: ["victimhood", "clinical"]
    },
    {
      id: "victimhood",
      name: "The Triumphant Victim",
      description: "How suffering becomes a source of identity, moral superiority, and control",
      color: "#002147",
      icon: "victimhood-theme.svg",
      relatedThemes: ["sadomasochism", "social"]
    },
    {
      id: "learning",
      name: "Learning Difficulties",
      description: "Exploration of dyslexia, learning difficulties, and denial of meaning",
      color: "#36454F",
      icon: "learning-theme.svg",
      relatedThemes: ["education", "emotional"]
    },
    {
      id: "education",
      name: "Educational Psychology",
      description: "The emotional dimensions of reading, writing, and education",
      color: "#2F4F4F",
      icon: "education-theme.svg",
      relatedThemes: ["learning", "emotional"]
    },
    {
      id: "emotional",
      name: "Emotional Development",
      description: "Understanding emotional conflicts and their impact on learning and relationships",
      color: "#483D8B",
      icon: "emotional-theme.svg",
      relatedThemes: ["learning", "clinical"]
    },
    {
      id: "clinical",
      name: "Clinical Applications",
      description: "Practical applications of post-Kleinian psychoanalysis in therapeutic settings",
      color: "#556B2F",
      icon: "clinical-theme.svg",
      relatedThemes: ["sadomasochism", "emotional"]
    },
    {
      id: "post-kleinian",
      name: "Post-Kleinian Psychoanalysis",
      description: "Projective identification, symbolic thinking, and claustrum",
      color: "#8B0000",
      icon: "post-kleinian-theme.svg",
      relatedThemes: ["clinical", "emotional"]
    }
  ],

  quotes: [
    {
      id: "summary_001",
      title: "The Triumphant Victim - Overview",
      quote: "The book examines unrecognised prevalence of sadomasochism and perverse thinking in personal relationships and public domain, discussing how it contributes to culture of victim.",
      context: "This book offers a provocative examination of sadomasochism and perverse thinking in both personal relationships and wider society. Miller argues that we live in a 'culture of victim' where suffering has become a source of identity and power.",
      source: {
        work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
        page: null,
        number: null,
        chapter: "Introduction",
        year: 2013
      },
      themes: ["sadomasochism", "victimhood"],
      relatedQuotes: [
        {
          id: "summary_002",
          relationship: "expands",
          strength: 0.9,
          label: "Deeper analysis"
        },
        {
          id: "summary_003",
          relationship: "applies",
          strength: 0.8,
          label: "Clinical application"
        }
      ],
      visual: {
        type: "central",
        color: "#002147",
        size: 1.2,
        icon: "victim-icon.svg"
      },
      position: {
        x: 0.5,
        y: 0.3,
        fixed: false
      },
      metadata: {
        difficulty: "advanced",
        readingTime: 5,
        popularity: 0.9,
        dateAdded: "2026-01-03"
      }
    },
    {
      id: "summary_002",
      title: "Part One: Origins of Perverse Pathology",
      quote: "Part One traces origins of perverse pathology and how it operates in obstructing emotional development and producing dysfunctional relationships, explored through hysteria, exhibitionism, voyeurism, and projective identification.",
      context: "Drawing on 30 years of psychoanalytical practice, Miller explores how sadomasochistic patterns obstruct emotional development and create dysfunctional relationships. The book examines these dynamics through the lens of hysteria, exhibitionism, voyeurism, and projective identification, illustrated with detailed clinical material from couple- and family-therapy experiences and educational consultations.",
      source: {
        work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
        page: null,
        number: null,
        chapter: "Part One",
        year: 2013
      },
      themes: ["sadomasochism", "clinical"],
      relatedQuotes: [
        {
          id: "summary_001",
          relationship: "expands",
          strength: 0.9,
          label: "Foundation"
        },
        {
          id: "summary_003",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Social context"
        }
      ],
      visual: {
        type: "node",
        color: "#36454F",
        size: 1.1,
        icon: "pathology-icon.svg"
      },
      position: {
        x: 0.3,
        y: 0.6,
        fixed: false
      },
      metadata: {
        difficulty: "advanced",
        readingTime: 4,
        popularity: 0.8,
        dateAdded: "2026-01-03"
      }
    },
    {
      id: "summary_003",
      title: "Part Two: Contemporary Modes of Thinking",
      quote: "Part Two examines current modes of thinking and belief systems with particular emphasis on tribal mentality, Cartesian dualism, Enlightenment's contribution to marginalisation of feminine values, and negative masculine control.",
      context: "In the second half, Miller turns his attention to society at large, examining how perverse thinking has infiltrated our belief systems, educational institutions, and cultural assumptions. He critiques the legacy of Cartesian dualism, explores the tension between masculine control and feminine values, and challenges both religious and secular fundamentalisms.",
      source: {
        work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
        page: null,
        number: null,
        chapter: "Part Two",
        year: 2013
      },
      themes: ["sadomasochism", "post-kleinian"],
      relatedQuotes: [
        {
          id: "summary_001",
          relationship: "applies",
          strength: 0.8,
          label: "Clinical relevance"
        },
        {
          id: "summary_002",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Theoretical background"
        }
      ],
      visual: {
        type: "node",
        color: "#002147",
        size: 1.0,
        icon: "society-icon.svg"
      },
      position: {
        x: 0.7,
        y: 0.5,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 4,
        popularity: 0.7,
        dateAdded: "2026-01-03"
      }
    },
    {
      id: "summary_004",
      title: "Do You Read Me? - Core Thesis",
      quote: "Reading and writing are fundamentally about the communication of meaning. Miller's contention is that the concept of dyslexia is something that has been invented, rather than discovered, in order to evade the question of meaning and understanding of the individual.",
      context: "A fascinating and compelling exploration of the learning process for parents, teachers, and anyone with an interest in education. Miller argues that when a child has difficulty in learning to read and write, the one area that is never seen as having any relevance is the child's life experiences. The book examines this as part of a culture in which child-rearing and education are increasingly depersonalising, and children are viewed as assets or commodities rather than individuals.",
      source: {
        work: "Do You Read Me?: Learning Difficulties, Dyslexia and Denial of Meaning",
        page: null,
        number: null,
        chapter: "Introduction",
        year: 2015
      },
      themes: ["learning", "education"],
      relatedQuotes: [
        {
          id: "summary_005",
          relationship: "expands",
          strength: 0.9,
          label: "Further exploration"
        },
        {
          id: "summary_006",
          relationship: "applies",
          strength: 0.8,
          label: "Practical application"
        }
      ],
      visual: {
        type: "central",
        color: "#FFD700",
        size: 1.2,
        icon: "reading-icon.svg"
      },
      position: {
        x: 0.5,
        y: 0.7,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 4,
        popularity: 0.9,
        dateAdded: "2026-01-03"
      }
    },
    {
      id: "summary_005",
      title: "Part I: Reading Disability",
      quote: "Part I examines dyslexia muddle, acronyms and non-science, emotional health and fitness, family matters, secrets and hidden agendas, and function of aggression in healthy development.",
      context: "Based on 30 years' experience of both educational psychology and analytical therapy, the book sets out a radical approach to learning difficulties in which the primary assumption is that there will usually be underlying emotional conflicts, tensions, and anxieties. Any learning disability is thus more likely to be a symptom of less-evident, personal difficulties, rather than a problem in itself.",
      source: {
        work: "Do You Read Me?: Learning Difficulties, Dyslexia and Denial of Meaning",
        page: null,
        number: null,
        chapter: "Part I: Reading Disability",
        year: 2015
      },
      themes: ["learning", "emotional"],
      relatedQuotes: [
        {
          id: "summary_004",
          relationship: "expands",
          strength: 0.9,
          label: "Core concept"
        },
        {
          id: "summary_006",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Educational context"
        }
      ],
      visual: {
        type: "node",
        color: "#FFD700",
        size: 1.0,
        icon: "disability-icon.svg"
      },
      position: {
        x: 0.3,
        y: 0.8,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 3,
        popularity: 0.8,
        dateAdded: "2026-01-03"
      }
    },
    {
      id: "summary_006",
      title: "Part III: The Education Issue",
      quote: "Part III explores schooling versus education, asking whether education is liberation or persecution, and examining the broader cultural context of how children are treated as assets or commodities.",
      context: "The book examines learning difficulties within the context of a depersonalising culture where children are viewed as assets or commodities rather than individuals. Miller provides a framework for understanding how underlying emotional conflicts, tensions, and anxieties manifest as learning problems. The work challenges conventional thinking about dyslexia and learning difficulties, arguing that these are often symptoms of deeper emotional issues rather than purely technical problems.",
      source: {
        work: "Do You Read Me?: Learning Difficulties, Dyslexia and Denial of Meaning",
        page: null,
        number: null,
        chapter: "Part III: The Education Issue",
        year: 2015
      },
      themes: ["education", "emotional"],
      relatedQuotes: [
        {
          id: "summary_004",
          relationship: "applies",
          strength: 0.8,
          label: "Theoretical foundation"
        },
        {
          id: "summary_005",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Practical context"
        }
      ],
      visual: {
        type: "node",
        color: "#FFD700",
        size: 1.0,
        icon: "education-icon.svg"
      },
      position: {
        x: 0.7,
        y: 0.8,
        fixed: false
      },
      metadata: {
        difficulty: "intermediate",
        readingTime: 3,
        popularity: 0.7,
        dateAdded: "2026-01-03"
      }
    }
  ],

  connections: [
    {
      from: "summary_001",
      to: "summary_002",
      type: "expands",
      strength: 0.9,
      label: "Deeper analysis",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 3
      }
    },
    {
      from: "summary_001",
      to: "summary_003",
      type: "applies",
      strength: 0.8,
      label: "Clinical application",
      bidirectional: true,
      visual: {
        style: "dashed",
        color: "#002147",
        width: 2
      }
    },
    {
      from: "summary_002",
      to: "summary_003",
      type: "contextualizes",
      strength: 0.7,
      label: "Social context",
      bidirectional: true,
      visual: {
        style: "dotted",
        color: "#36454F",
        width: 2
      }
    },
    {
      from: "summary_004",
      to: "summary_005",
      type: "expands",
      strength: 0.9,
      label: "Further exploration",
      bidirectional: true,
      visual: {
        style: "solid",
        color: "#FFD700",
        width: 3
      }
    },
    {
      from: "summary_004",
      to: "summary_006",
      type: "applies",
      strength: 0.8,
      label: "Practical application",
      bidirectional: true,
      visual: {
        style: "dashed",
        color: "#002147",
        width: 2
      }
    },
    {
      from: "summary_005",
      to: "summary_006",
      type: "contextualizes",
      strength: 0.7,
      label: "Educational context",
      bidirectional: true,
      visual: {
        style: "dotted",
        color: "#36454F",
        width: 2
      }
    }
  ],

  // Localized content - PENDING AUTHENTIC CONTENT ACQUISITION
  // All previous localized quotes were fabricated per fact_check_report.md
  // These arrays will be populated with verified translations once authentic content is acquired
  localized: {
    FR: [],
    ES: [],
    NO: [],
    PL: [],
    LA: [],
    EGY: [],
    ZH: []
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}
