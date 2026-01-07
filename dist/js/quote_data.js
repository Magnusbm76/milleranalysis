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
    FR: [
      {
        id: "summary_001_fr",
        title: "La Victime Triomphante - Vue d'ensemble",
        quote: "Le livre examine la prévalence non reconnue du sadomasochisme et de la pensée perverse dans les relations personnelles et le domaine public, discutant de la manière dont il contribue à la culture de la victime.",
        context: "Ce livre offre un examen provocant du sadomasochisme et de la pensée perverse dans les relations personnelles et la société au sens large. Miller soutient que nous vivons dans une 'culture de la victime' où la souffrance est devenue une source d'identité et de pouvoir.",
        source: {
          work: "The Triumphant Victim: Une Perspective Psychanalytique sur le Sadomasochisme et la Pensée Perverse",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadomasochisme", "victimisation"],
        relatedQuotes: [
          {
            id: "summary_002_fr",
            relationship: "développe",
            strength: 0.9,
            label: "Analyse plus profonde"
          },
          {
            id: "summary_003_fr",
            relationship: "applique",
            strength: 0.8,
            label: "Application clinique"
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
          difficulty: "avancé",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_002_fr",
        title: "Partie I: Origines de la Pathologie Perverse",
        quote: "La première partie trace les origines de la pathologie perverse et comment elle opère en obstruant le développement émotionnel et en produisant des relations dysfonctionnelles, explorées à travers l'hystérie, l'exhibitionnisme, le voyeurisme et l'identification projective.",
        context: "S'appuyant sur 30 ans de pratique psychanalytique, Miller explore comment les schémas sadomasochistes obstruent le développement émotionnel et créent des relations dysfonctionnelles. Le livre examine ces dynamiques à travers le prisme de l'hystérie, de l'exhibitionnisme, du voyeurisme et de l'identification projective, illustré avec du matériel clinique détaillé provenant d'expériences de thérapie de couple et de famille et de consultations éducatives.",
        source: {
          work: "The Triumphant Victim: Une Perspective Psychanalytique sur le Sadomasochisme et la Pensée Perverse",
          page: null,
          number: null,
          chapter: "Partie I",
          year: 2013
        },
        themes: ["sadomasochisme", "clinique"],
        relatedQuotes: [
          {
            id: "summary_001_fr",
            relationship: "développe",
            strength: 0.9,
            label: "Fondation"
          },
          {
            id: "summary_003_fr",
            relationship: "contextualise",
            strength: 0.7,
            label: "Contexte social"
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
          difficulty: "avancé",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_003_fr",
        title: "Partie II: Modes de Pensée Contemporains",
        quote: "La deuxième partie examine les modes de pensée et les systèmes de croyance actuels avec un accent particulier sur la mentalité tribale, le dualisme cartésien, la contribution des Lumières à la marginalisation des valeurs féminines, et le contrôle masculin négatif.",
        context: "Dans la seconde moitié, Miller tourne son attention vers la société au sens large, examinant comment la pensée perverse a infiltré nos systèmes de croyance, nos institutions éducatives et nos hypothèses culturelles. Il critique l'héritage du dualisme cartésien, explore la tension entre le contrôle masculin et les valeurs féminines, et remet en question les fondamentalismes tant religieux que laïques.",
        source: {
          work: "The Triumphant Victim: Une Perspective Psychanalytique sur le Sadomasochisme et la Pensée Perverse",
          page: null,
          number: null,
          chapter: "Partie II",
          year: 2013
        },
        themes: ["sadomasochisme", "post-kleinien"],
        relatedQuotes: [
          {
            id: "summary_001_fr",
            relationship: "applique",
            strength: 0.8,
            label: "Pertinence clinique"
          },
          {
            id: "summary_002_fr",
            relationship: "contextualise",
            strength: 0.7,
            label: "Contexte théorique"
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
          difficulty: "intermédiaire",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_004_fr",
        title: "Do You Read Me? - Thèse Centrale",
        quote: "La lecture et l'écriture sont fondamentalement une question de communication de sens. La thèse de Miller est que le concept de dyslexie est quelque chose qui a été inventé, plutôt que découvert, afin d'éviter la question de sens et de compréhension de l'individu.",
        context: "Une exploration fascinante et convaincante du processus d'apprentissage pour les parents, les enseignants et toute personne s'intéressant à l'éducation. Miller soutient que lorsqu'un enfant a des difficultés à apprendre à lire et à écrire, un domaine qui n'est jamais considéré comme ayant une pertinence est la vie de l'enfant. Le livre examine cela comme faisant partie d'une culture dans laquelle l'éducation et l'élevage des enfants sont de plus en plus dépersonnalisés, et les enfants sont considérés comme des actifs ou des marchandises plutôt que comme des individus.",
        source: {
          work: "Do You Read Me?: Difficultés d'Apprentissage, Dyslexie et le Déni de Sens",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["apprentissage", "éducation"],
        relatedQuotes: [
          {
            id: "summary_005_fr",
            relationship: "développe",
            strength: 0.9,
            label: "Exploration plus approfondie"
          },
          {
            id: "summary_006_fr",
            relationship: "applique",
            strength: 0.8,
            label: "Application pratique"
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
          difficulty: "intermédiaire",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_005_fr",
        title: "Partie I: Le Handicap de Lecture",
        quote: "La première partie examine le problème de la dyslexie, les acronymes et la non-science, la santé émotionnelle et la forme physique, les questions familiales, les secrets et les agendas cachés, et la fonction de l'agression dans le développement sain.",
        context: "Basé sur 30 ans d'expérience à la fois en psychologie éducative et en thérapie analytique, le livre propose une approche radicale des difficultés d'apprentissage dans laquelle l'hypothèse principale est qu'il y aura généralement des conflits émotionnels sous-jacents, des tensions et des anxiétés sous-jacentes. Tout handicap d'apprentissage est donc plus susceptible d'être un symptôme de difficultés personnelles moins évidentes, plutôt qu'un problème en soi.",
        source: {
          work: "Do You Read Me?: Difficultés d'Apprentissage, Dyslexie et le Déni de Sens",
          page: null,
          number: null,
          chapter: "Partie I: Le Handicap de Lecture",
          year: 2015
        },
        themes: ["apprentissage", "émotionnel"],
        relatedQuotes: [
          {
            id: "summary_004_fr",
            relationship: "développe",
            strength: 0.9,
            label: "Concept central"
          },
          {
            id: "summary_006_fr",
            relationship: "contextualise",
            strength: 0.7,
            label: "Contexte éducatif"
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
          difficulty: "intermédiaire",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_006_fr",
        title: "Partie III: La Question Éducative",
        quote: "La troisième partie explore la scolarisation contre l'éducation, demandant si l'éducation est une libération ou une persécution, et examinant le contexte culturel plus large de la manière dont les enfants sont traités comme des actifs ou des marchandises plutôt que comme des individus.",
        context: "Le livre examine les difficultés d'apprentissage dans le contexte d'une culture dépersonnalisée où les enfants sont considérés comme des actifs ou des marchandises plutôt que comme des individus. Miller fournit un cadre pour comprendre comment les conflits émotionnels sous-jacents, les tensions et les anxiétés se manifestent comme des problèmes d'apprentissage. Le travail remet en question la pensée conventionnelle sur la dyslexie et les difficultés d'apprentissage, soutenant qu'elles sont souvent des symptômes de problèmes émotionnels plus profonds plutôt que des problèmes purement techniques.",
        source: {
          work: "Do You Read Me?: Difficultés d'Apprentissage, Dyslexie et le Déni de Sens",
          page: null,
          number: null,
          chapter: "Partie III: La Question Éducative",
          year: 2015
        },
        themes: ["éducation", "émotionnel"],
        relatedQuotes: [
          {
            id: "summary_004_fr",
            relationship: "applique",
            strength: 0.8,
            label: "Fondation théorique"
          },
          {
            id: "summary_005_fr",
            relationship: "contextualise",
            strength: 0.7,
            label: "Contexte pratique"
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
          difficulty: "intermédiaire",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      }
    ],
    ES: [
      {
        id: "summary_001_es",
        title: "La Víctima Triunfante - Visión General",
        quote: "El libro examina la prevalencia no reconocida del sadomasoquismo y el pensamiento perverso en las relaciones personales y el dominio público, discutiendo cómo contribuye a la cultura de la víctima.",
        context: "Este libro ofrece un examen provocador del sadomasoquismo y el pensamiento perverso tanto en las relaciones personales como en la sociedad en general. Miller sostiene que vivimos en una 'cultura de la víctima' donde el sufrimiento se ha convertido en una fuente de identidad y poder.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadomasoquismo", "victimismo"],
        relatedQuotes: [
          {
            id: "summary_002_es",
            relationship: "expande",
            strength: 0.9,
            label: "Análisis más profundo"
          },
          {
            id: "summary_003_es",
            relationship: "aplica",
            strength: 0.8,
            label: "Aplicación clínica"
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
          difficulty: "avanzado",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_002_es",
        title: "Parte I: Orígenes de la Patología Perversa",
        quote: "La primera parte rastrea los orígenes de la patología perversa y cómo opera obstruyendo el desarrollo emocional y produciendo relaciones disfuncionales, exploradas a través de la histeria, el exhibicionismo, el voyeurismo y la identificación proyectiva.",
        context: "Basándose en 30 años de práctica psicoanalítica, Miller explora cómo los patrones sadomasoquistas obstruyen el desarrollo emocional y crean relaciones disfuncionales. El libro examina estas dinámicas a través del prisma de la histeria, el exhibicionismo, el voyeurismo y la identificación proyectiva, ilustrado con material clínico detallado de experiencias de terapia de pareja y familiar y consultas educativas.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Parte I",
          year: 2013
        },
        themes: ["sadomasoquismo", "clínico"],
        relatedQuotes: [
          {
            id: "summary_001_es",
            relationship: "expande",
            strength: 0.9,
            label: "Fundamento"
          },
          {
            id: "summary_003_es",
            relationship: "contextualiza",
            strength: 0.7,
            label: "Contexto social"
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
          difficulty: "avanzado",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_003_es",
        title: "Parte II: Modos de Pensamiento Contemporáneos",
        quote: "La segunda parte examina los modos de pensamiento y sistemas de creencias actuales con énfasis particular en la mentalidad tribal, el dualismo cartesiano, la contribución de la Ilustración a la marginalización de los valores femeninos, y el control masculino negativo.",
        context: "En la segunda mitad, Miller dirige su atención a la sociedad en general, examinando cómo el pensamiento perverso ha infiltrado nuestros sistemas de creencias, nuestras instituciones educativas y nuestros supuestos culturales. Critica el legado del dualismo cartesiano, explora la tensión entre el control masculino y los valores femeninos, y cuestiona tanto los fundamentalismos religiosos como seculares.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Parte II",
          year: 2013
        },
        themes: ["sadomasoquismo", "post-kleiniano"],
        relatedQuotes: [
          {
            id: "summary_001_es",
            relationship: "aplica",
            strength: 0.8,
            label: "Pertinencia clínica"
          },
          {
            id: "summary_002_es",
            relationship: "contextualiza",
            strength: 0.7,
            label: "Contexto teórico"
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
          difficulty: "intermedio",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_004_es",
        title: "Do You Read Me? - Tesis Central",
        quote: "La lectura y la escritura son fundamentalmente una cuestión de comunicación de significado. La tesis de Miller es que el concepto de dislexia es algo que ha sido inventado, en lugar de descubierto, para evitar la cuestión de significado y comprensión del individuo.",
        context: "Una exploración fascinante y convincente del proceso de aprendizaje para padres, maestros y cualquier persona interesada en la educación. Miller sostiene que cuando un niño tiene dificultades para aprender a leer y escribir, un área que nunca se considera como relevante es la vida del niño. El libro examina esto como parte de una cultura en la que la educación y la crianza de los niños son cada vez más despersonalizadas, y los niños son considerados como activos o mercancías en lugar de como individuos.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["aprendizaje", "educación"],
        relatedQuotes: [
          {
            id: "summary_005_es",
            relationship: "expande",
            strength: 0.9,
            label: "Exploración más profunda"
          },
          {
            id: "summary_006_es",
            relationship: "aplica",
            strength: 0.8,
            label: "Aplicación práctica"
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
          difficulty: "intermedio",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_005_es",
        title: "Parte I: La Discapacidad de Lectura",
        quote: "La primera parte examina el problema de la dislexia, los acrónimos y la no-ciencia, la salud emocional y la forma física, las preguntas familiares, los secretos y las agendas ocultas, y la función de la agresión en el desarrollo saludable.",
        context: "Basado en 30 años de experiencia tanto en psicología educativa como en terapia analítica, el libro propone un enfoque radical para las dificultades de aprendizaje en el que la hipótesis principal es que generalmente habrá conflictos emocionales subyacentes, tensiones y ansiedades subyacentes. Cual discapacidad de aprendizaje es por lo tanto más probable que sea un síntoma de dificultades personales menos evidentes, en lugar de un problema en sí.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Parte I: La Discapacidad de Lectura",
          year: 2015
        },
        themes: ["aprendizaje", "emocional"],
        relatedQuotes: [
          {
            id: "summary_004_es",
            relationship: "expande",
            strength: 0.9,
            label: "Concepto central"
          },
          {
            id: "summary_006_es",
            relationship: "contextualiza",
            strength: 0.7,
            label: "Contexto educativo"
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
          difficulty: "intermedio",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_006_es",
        title: "Parte III: La Cuestión Educativa",
        quote: "La tercera parte explora la escolarización versus la educación, preguntando si la educación es una liberación o una persecución, y examinando el contexto cultural más amplio de cómo se trata a los niños como activos o mercancías en lugar de como individuos.",
        context: "El libro examina las dificultades de aprendizaje en el contexto de una cultura despersonalizada donde los niños son considerados como activos o mercancías en lugar de como individuos. Miller proporciona un marco para entender cómo los conflictos emocionales subyacentes, las tensiones y las ansiedades se manifiestan como problemas de aprendizaje. El trabajo cuestiona el pensamiento convencional sobre la dislexia y las dificultades de aprendizaje, argumentando que a menudo son síntomas de problemas emocionales más profundos en lugar de problemas puramente técnicos.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Parte III: La Cuestión Educativa",
          year: 2015
        },
        themes: ["educación", "emocional"],
        relatedQuotes: [
          {
            id: "summary_004_es",
            relationship: "aplica",
            strength: 0.8,
            label: "Fundamento teórico"
          },
          {
            id: "summary_005_es",
            relationship: "contextualiza",
            strength: 0.7,
            label: "Contexto práctico"
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
          difficulty: "intermedio",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      }
    ],
    NO: [
      {
        id: "summary_001_no",
        title: "Den Triumferende Offer - Oversikt",
        quote: "Boken undersøker den ikke anerkjente utbredelsen av sadomasochisme og pervers tenkning i personlige relasjoner og det offentlige domenet, og diskuterer hvordan det bidrar til en offerkultur.",
        context: "Denne boken tilbyr en provoserende undersøkelse av sadomasochisme og pervers tenkning både i personlige relasjoner og i samfunnet. Miller argumenterer for at vi lever i en 'offerkultur' der lidelse har blitt en kilde til identitet og makt.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadomasochisme", "offer"],
        relatedQuotes: [
          {
            id: "summary_002_no",
            relationship: "utvider",
            strength: 0.9,
            label: "Dypere analyse"
          },
          {
            id: "summary_003_no",
            relationship: "anvender",
            strength: 0.8,
            label: "Klinisk anvendelse"
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
          difficulty: "avansert",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_002_no",
        title: "Del I: Opprinnelsen til Pervers Patologi",
        quote: "Del en del spore opprinnelsen til pervers patologi og hvordan den opererer i å hindre emosjonell utvikling og produserer dysfunksjonelle relasjoner, utforsket gjennom hysteri, utstillingsbehov, voyeurisme og projektiv identifikasjon.",
        context: "Basert på 30 år med psykoanalytisk praksis, utforsker Miller hvordan sadomasochistiske mønstre hindrer emosjonell utvikling og skaper dysfunksjonelle relasjoner. Boken undersøker disse dynamikkene gjennom prismet av hysteri, utstillingsbehov, voyeurisme og projektiv identifikasjon, illustrert med detaljert klinisk materiale fra erfaringer med par- og familieterapi og utdanningskonsultasjoner.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Del I",
          year: 2013
        },
        themes: ["sadomasochisme", "klinisk"],
        relatedQuotes: [
          {
            id: "summary_001_no",
            relationship: "utvider",
            strength: 0.9,
            label: "Grunnlag"
          },
          {
            id: "summary_003_no",
            relationship: "kontekstualiserer",
            strength: 0.7,
            label: "Sosial kontekst"
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
          difficulty: "avansert",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_003_no",
        title: "Del II: Samtidige Tankemåter",
        quote: "Del to undersøker nåværende tankemåter og trossystemer med spesiell vekt på stammementalitet, kartesiansk dualisme, opplysningens bidrag til marginaliseringen av feminine verdier, og negativ maskulin kontroll.",
        context: "I andre halvdel retter Miller sin oppmerksomhet mot samfunnet som helhet, og undersøker hvordan pervers tenkning har infiltrert våre trossystemer, utdanningsinstitusjoner og kulturelle antakelser. Han kritiserer arvet fra kartesiansk dualisme, utforsker spenningen mellom maskulin kontroll og feminine verdier, og utfordrer både religiøse og sekulære fundamentalismer.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Del II",
          year: 2013
        },
        themes: ["sadomasochisme", "post-kleiniansk"],
        relatedQuotes: [
          {
            id: "summary_001_no",
            relationship: "anvender",
            strength: 0.8,
            label: "Klinisk relevans"
          },
          {
            id: "summary_002_no",
            relationship: "kontekstualiserer",
            strength: 0.7,
            label: "Teoretisk bakgrunn"
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
          difficulty: "middels",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_004_no",
        title: "Do You Read Me? - Sentral Tese",
        quote: "Lesing og skriving er fundamentalt et spørsmål om kommunikasjon av mening. Millers tes er at begrepet dysleksi er noe som har blitt oppfunnet, snarere enn oppdaget, for å unngå spørsmålet om mening og forståelse av individet.",
        context: "En fascinerende og overbevisende utforskning av læringsprosessen for foreldre, lærere og alle som er interessert i utdanning. Miller hevder at når et barn har vansker med å lære å lese og skrive, et område som aldri anses som relevant er barnets liv. Boken undersøker dette som en del av en kultur der barneoppdragelse og utdanning av barn blir stadig mer depersonalisert, og barn blir ansett som aktiva eller varer i stedet for som individer.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["læring", "utdanning"],
        relatedQuotes: [
          {
            id: "summary_005_no",
            relationship: "utvider",
            strength: 0.9,
            label: "Dypere utforskning"
          },
          {
            id: "summary_006_no",
            relationship: "anvender",
            strength: 0.8,
            label: "Praktisk anvendelse"
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
          difficulty: "middels",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_005_no",
        title: "Del I: Lesevansker",
        quote: "Den første delen undersøker dysleksi-problemet, akronymer og ikke-vitenskap, emosjonell helse og fysisk form, familiespørsmål, hemmeligheter og skjulte dagsordener, og funksjonen av aggresjon i sunn utvikling.",
        context: "Basert på 30 års erfaring både i utdanningspsykologi og analytisk terapi, foreslår boken en radikal tilnærming til læringsvansker der hovedhypotesen er at det vanligvis vil være underliggende emosjonelle konflikter, spenninger og angster. Enhver læringsvansker er derfor mer sannsynlig å være et symptom på mindre åpenbare personlige vansker, snarere enn et problem i seg selv.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Del I: Lesevansker",
          year: 2015
        },
        themes: ["læring", "emosjonell"],
        relatedQuotes: [
          {
            id: "summary_004_no",
            relationship: "utvider",
            strength: 0.9,
            label: "Sentral konsept"
          },
          {
            id: "summary_006_no",
            relationship: "kontekstualiserer",
            strength: 0.7,
            label: "Utdanningskontekst"
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
          difficulty: "middels",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_006_no",
        title: "Del III: Utdanningsspørsmålet",
        quote: "Den tredje delen utforsker skolegang versus utdanning, spør om utdanning er en frigjørelse eller forfølgelse, og undersøker det bredere kulturelle kontekstet av hvordan barn behandles som aktiva eller varer i stedet for som individer.",
        context: "Boken undersøker læringsvansker i konteksten av en depersonalisert kultur der barn behandles som aktiva eller varer i stedet for som individer. Miller gir et rammeverk for å forstå hvordan underliggende emosjonelle konflikter, spenninger og angst manifesterer seg som læringsproblemer. Arbeidet utfordrer konvensjonell tenkning om dysleksi og læringsvansker, og argumenterer for at disse ofte er symptomer på dypere emosjonelle problemer snarere enn rent tekniske problemer.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Del III: Utdanningsspørsmålet",
          year: 2015
        },
        themes: ["utdanning", "emosjonell"],
        relatedQuotes: [
          {
            id: "summary_004_no",
            relationship: "anvender",
            strength: 0.8,
            label: "Teoretisk fundament"
          },
          {
            id: "summary_005_no",
            relationship: "kontekstualiserer",
            strength: 0.7,
            label: "Praktisk kontekst"
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
          difficulty: "middels",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      }
    ],
    PL: [
      {
        id: "summary_001_pl",
        title: "Triumfująca Ofiara - Przegląd Ogólny",
        quote: "Książka bada nieuznana powszechność sadyzmu i perwersyjnego myślenia w relacjach osobowych i domenie publicznym, omawiając jak przyczynia się do kultury ofiar.",
        context: "Ta książka oferuje prowokujące badanie sadyzmu i perwersyjnego myślenia zarówno w relacjach osobowych jak i w społeczeństwie ogólnie. Miller twierdzi, że żyjemy w 'kulturze ofiar' gdzie cierpienie stało się źródłem tożsamości, moralnej wyższości i kontroli.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadyzm", "ofiary"],
        relatedQuotes: [
          {
            id: "summary_002_pl",
            relationship: "rozwija",
            strength: 0.9,
            label: "Głębsza analiza"
          },
          {
            id: "summary_003_pl",
            relationship: "stosuje",
            strength: 0.8,
            label: "Zastosowanie kliniczne"
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
          difficulty: "zaawansowany",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_002_pl",
        title: "Część I: Początki Patologii Perwersyjnej",
        quote: "Pierwsza część śledzi pochodzenia patologii perwersyjnej i jak ona działa w przeszkadzaniu rozwoju emocjonalnego i produkując dysfunkcyjne relacje, zbadane przez histerię, ekshibicjonizm, voyeurizm i identyfikację projekcyjną.",
        context: "Opierając się na 30 lat doświadczenia w praktyce psychoanalitycznej, Miller bada, jak wzorce sadyzmu przeszkadzają rozwój emocjonalny i tworzą dysfunkcyjne relacje. Książka bada te dynamiki przez pryzmat histerii, ekshibicjonizmu, voyeurizmu i identyfikacji projekcyjnej, zilustrowanym szczegółowym materiałem klinicznym z doświadczeń w terapii par i rodzin oraz konsultacji edukacyjnych.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Część I",
          year: 2013
        },
        themes: ["sadyzm", "kliniczny"],
        relatedQuotes: [
          {
            id: "summary_001_pl",
            relationship: "rozwija",
            strength: 0.9,
            label: "Fundament"
          },
          {
            id: "summary_003_pl",
            relationship: "kontekstualizuje",
            strength: 0.7,
            label: "Kontekst społeczny"
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
          difficulty: "zaawansowany",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_003_pl",
        title: "Część II: Współczesne Sposoby Myślenia",
        quote: "Druga część bada współczesne sposoby myślenia i systemy wierzeń ze szczególnym naciskiem na mentalność plemienną, dualizm kartezjański, wkład Oświecenia do marginalizacji wartości kobiecych, i negatywną męską kontrolę.",
        context: "W drugiej części Miller kieruje swoją uwagę na społeczeństwo w ogóle, badając jak perwersyjne myślenie przeniknęło nasze systemy wierzeń, nasze instytucje edukacyjne i założenia kulturowe. Krytykuje dziedzictwo dualizmu kartezjańskiego, bada napięcie między męską kontrolą a wartościami kobiecymi, i podważa zarówno fundamentalizmy religijne jak i świeckie.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Część II",
          year: 2013
        },
        themes: ["sadyzm", "post-kleinowski"],
        relatedQuotes: [
          {
            id: "summary_001_pl",
            relationship: "stosuje",
            strength: 0.8,
            label: "Zastosowanie kliniczne"
          },
          {
            id: "summary_002_pl",
            relationship: "kontekstualizuje",
            strength: 0.7,
            label: "Tło teoretyczne"
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
          difficulty: "średniozaawansowany",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_004_pl",
        title: "Do You Read Me? - Centralna Teza",
        quote: "Czytanie i pisanie są zasadniczo kwestią komunikacji znaczenia. Teza Millera jest takie, że pojęcie dysleksji jest czymś, co zostało wynalezione, a nie odkryte, aby uniknąć pytania o znaczeniu i zrozumieniu jednostki.",
        context: "Porywająca i przekonująca eksploracja procesu uczenia się dla rodziców, nauczycieli i każdego zainteresowanego edukacją. Miller twierdzi, że gdy dziecko ma trudności z nauką czytania i pisania, obszar, który nigdy nie jest uważany za istotny jest życie dziecka. Książka bada to jako część kultury, w której wychowanie i edukacja dzieci są coraz bardziej zdepersonalizowane, a dzieci są traktowane jako aktywa lub towar zamiast jako jednostki.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["uczenie się", "edukacja"],
        relatedQuotes: [
          {
            id: "summary_005_pl",
            relationship: "rozwija",
            strength: 0.9,
            label: "Głębsza eksploracja"
          },
          {
            id: "summary_006_pl",
            relationship: "stosuje",
            strength: 0.8,
            label: "Zastosowanie praktyczne"
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
          difficulty: "średniozaawansowany",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_005_pl",
        title: "Część I: Trudności w Uczeniu się",
        quote: "Pierwsza część bada problem dysleksji, skróty i nienaukę, zdrowie emocjonalne i formę fizyczną, pytania rodzinne, sekrety i ukryte agendy, oraz funkcję agresji w zdrowym rozwoju.",
        context: "Opierając się na 30 lat doświadczenia zarówno w psychologii edukacyjnej jak w terapii analitycznej, książka proponuje radykalne podejście do trudności w uczeniu się, w którym główna hipoteza jest, że zazwycz będą podlegające konflikty emocjonalne, napięcia i lęki podlegające. Każda trudność w uczeniu się jest więc bardziej prawdopodobna, by być objawem mniej jawnych trudności osobistych, a nie problemem samym w sobie.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Część I: Trudności w Uczeniu się",
          year: 2015
        },
        themes: ["uczenie się", "emocjonalny"],
        relatedQuotes: [
          {
            id: "summary_004_pl",
            relationship: "rozwija",
            strength: 0.9,
            label: "Centralny koncept"
          },
          {
            id: "summary_006_pl",
            relationship: "kontekstualizuje",
            strength: 0.7,
            label: "Kontekst edukacyjny"
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
          difficulty: "średniozaawansowany",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_006_pl",
        title: "Część III: Kwestia Edukacyjna",
        quote: "Trzecia część bada szkolizację przeciwko edukacji, pytając czy edukacja jest wyzwoleniem czy prześladowaniem, i badając szerszy kontekst kulturowy traktowania dzieci jako aktyw lub towar zamiast jako jednostki.",
        context: "Książka bada trudności w uczeniu się w kontekście zdepersonalizowanej kultury, w której dzieci są traktowane jako aktywa lub towar zamiast jako jednostki. Miller dostarcza ramę do zrozumienia, jak podlegające konflikty emocjonalne, napięcia i lęki manifestują się jako problemy w uczeniu się. Praca kwestionuje konwencjonalne myślenie o dysleksji i trudnościach w uczeniu się, argumentując, że są one często objawami głębszych problemów emocjonalnych, a nie problemami czysto technicznymi.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Część III: Kwestia Edukacyjna",
          year: 2015
        },
        themes: ["edukacja", "emocjonalny"],
        relatedQuotes: [
          {
            id: "summary_004_pl",
            relationship: "stosuje",
            strength: 0.8,
            label: "Fundament teoretyczny"
          },
          {
            id: "summary_005_pl",
            relationship: "kontekstualizuje",
            strength: 0.7,
            label: "Kontekst praktyczny"
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
          difficulty: "średniozaawansowany",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      }
    ],
    LA: [
      {
        id: "summary_001_la",
        title: "Victima Triumphans - Visio Generalis",
        quote: "Liber examinat praevalementiam non recognitam sadomasochismi et perversi cogitandi in relationibus personalibus et dominio publico, disserens quomodo contribuit ad culturam victimarum.",
        context: "Hic liber offert examinationem provocantem sadomasochismi et perversi cogitandi in relationibus personalibus et societate in genere. Miller asserit nos vivere in 'cultura victimarum' ubi dolor fit fons identitatis et potestatis.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadomasochismus", "victimatio"],
        relatedQuotes: [
          {
            id: "summary_002_la",
            relationship: "expandit",
            strength: 0.9,
            label: "Analysis profundior"
          },
          {
            id: "summary_003_la",
            relationship: "applicat",
            strength: 0.8,
            label: "Applicatio clinica"
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
          difficulty: "progressus",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_002_la",
        title: "Pars I: Origines Pathologiae Perversae",
        quote: "Pars prima tracet origines pathologiae perversae et quomodo operatur in obstruens evolutionem animalem et producens relationes disfunctionales, exploratas per hystericam, exhibitionismum, voyeurismum et identificationem projectivam.",
        context: "Fundans in 30 annos experientiae in praxi psychanalytica, Miller explorat quomodo schemata sadomasochistica obstruunt evolutionem animalem et creant relationes disfunctionales. Liber examinat has dynamicas per prisma hystericam, exhibitionismi, voyeurismi et identificationis projectivis, illustratum cum materia clinico diligenti ex experientiis in therapia par et familiari et consultationibus educationis.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Pars I",
          year: 2013
        },
        themes: ["sadomasochismus", "clinicus"],
        relatedQuotes: [
          {
            id: "summary_001_la",
            relationship: "expandit",
            strength: 0.9,
            label: "Fundamentum"
          },
          {
            id: "summary_003_la",
            relationship: "contextualizat",
            strength: 0.7,
            label: "Contextus socialis"
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
          difficulty: "progressus",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_003_la",
        title: "Pars II: Modi Cogitationis Contemporanei",
        quote: "Pars secunda examinat modos cogitationis et systemata credentiarum contemporaneis cum attentione speciali in mentalem tribali, dualismo cartesiano, contributione Illustrationis ad marginalisationem valorum femininorum, et negativum masculinum controllum.",
        context: "In secunda parte, Miller vertit attentionem suam ad societatem in genere, examinans quomodo perversus cogitandi infiltravit nostra systemata credentiarum, nostra institutiones educationis et suppositiones culturales. Criticit hereditatem dualismi cartesiani, explorat tensionem inter masculinum controllum et valorum femininorum, et quaestionat tam fundamentalismos religiosos quam saeculares.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Pars II",
          year: 2013
        },
        themes: ["sadomasochismus", "post-kleinianus"],
        relatedQuotes: [
          {
            id: "summary_001_la",
            relationship: "applicat",
            strength: 0.8,
            label: "Pertinentia clinica"
          },
          {
            id: "summary_002_la",
            relationship: "contextualizat",
            strength: 0.7,
            label: "Contextus theoricus"
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
          difficulty: "mediocris",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_004_la",
        title: "Do You Read Me? - Theses Centralis",
        quote: "Lectio et scriptio sunt fundamentaliter quaestio communicationis significationis. Theses Miller est quod conceptus dyslexiae est aliquid quod inventum est, potius quam inventum, ut evitare quaestionem de significatione et intelligentia individui.",
        context: "Exploratio fascinans et convincons de processus discendi pro parentibus, magistris et quocumque persona intersessata in educatione. Miller asserit quod cum puer habet difficultates in discendo et scribendo, area quae numquam consideratur pertinens est vita pueri. Liber examinat hoc sicut partem culturae in qua educatio et educatio puerorum sunt magis depersonalizatae, et pueri considerantur sicut activa vel merces potius quam ut individui.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["discendum", "educatio"],
        relatedQuotes: [
          {
            id: "summary_005_la",
            relationship: "expandit",
            strength: 0.9,
            label: "Exploratio profundior"
          },
          {
            id: "summary_006_la",
            relationship: "applicat",
            strength: 0.8,
            label: "Applicatio practica"
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
          difficulty: "mediocris",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_005_la",
        title: "Pars I: Inpedimentum Legendi",
        quote: "Pars prima examinat problema dyslexiae, acronyma et non-scientia, sanitatem emotionalem et formam physicam, quaestiones familiares, secreta et agendas occultas, et functionem aggressionis in evolutione sana.",
        context: "Fundans in 30 annos experientiae tam in psychologia educationis quam in therapia analytica, liber proponit accessum radicalem ad difficultates discendi in qua hypothesis principalis est quod erunt generaliter conflictus animales subiacentes, tensiones et anxietates subiacentes. Omne impedimentum discendi est igitur probabilius esse symptoma difficultatum personalium minus evidentium, potius quam problema in se.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Pars I: Inpedimentum Legendi",
          year: 2015
        },
        themes: ["discendum", "emotionale"],
        relatedQuotes: [
          {
            id: "summary_004_la",
            relationship: "expandit",
            strength: 0.9,
            label: "Conceptus centralis"
          },
          {
            id: "summary_006_la",
            relationship: "contextualizat",
            strength: 0.7,
            label: "Contextus educationis"
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
          difficulty: "mediocris",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_006_la",
        title: "Pars III: Quaestio Educationis",
        quote: "Pars tertia explorat scholarisationem contra educationem, quaerens an education sit liberatio vel persecutio, et examinans contextum culturalem latius quo pueri tractantur sicut activa vel merces potius quam ut individui.",
        context: "Liber examinat difficultates discendi in contextu culturae depersonalizata ubi pueri considerantur sicut activa vel merces potius quam ut individui. Miller praebit contextum ad intelligentiam conflictuum animi latentium, tensionum et anxietatum quae manifestant sicut problema discendi. Opus eius interrogat conventionalem cogitationem de dyslexia et difficultatibus discendi, argumentans quae sae sunt symptoma problematum animi profundiorum potius quam problemata technica pura.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Pars III: Quaestio Educationis",
          year: 2015
        },
        themes: ["educatio", "emotionale"],
        relatedQuotes: [
          {
            id: "summary_004_la",
            relationship: "applicat",
            strength: 0.8,
            label: "Fundamentum theoricum"
          },
          {
            id: "summary_005_la",
            relationship: "contextualizat",
            strength: 0.7,
            label: "Contextus practicus"
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
          difficulty: "mediocris",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      }
    ],
    EGY: [
      {
        id: "summary_001_egy",
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
            id: "summary_002_egy",
            relationship: "expands",
            strength: 0.9,
            label: "Deeper analysis"
          },
          {
            id: "summary_003_egy",
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
        id: "summary_002_egy",
        title: "Part One: Origins of Perverse Pathology",
        quote: "Part One traces origins of perverse pathology and how it operates in obstructing emotional development and producing dysfunctional relationships, explored through hysteria, exhibitionism, voyeurism and projective identification.",
        context: "Drawing on 30 years of psychoanalytical practice, Miller explores how sadomasochistic patterns obstruct emotional development and create dysfunctional relationships. The book examines these dynamics through lens of hysteria, exhibitionism, voyeurism and projective identification, illustrated with detailed clinical material from couple- and family-therapy experiences and educational consultations.",
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
            id: "summary_001_egy",
            relationship: "expands",
            strength: 0.9,
            label: "Foundation"
          },
          {
            id: "summary_003_egy",
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
        id: "summary_003_egy",
        title: "Part Two: Contemporary Modes of Thinking",
        quote: "Part Two examines current modes of thinking and belief systems with particular emphasis on tribal mentality, Cartesian dualism, Enlightenment's contribution to marginalisation of feminine values, and negative masculine control.",
        context: "In second half, Miller turns his attention to society at large, examining how perverse thinking has infiltrated our belief systems, educational institutions, and cultural assumptions. He critiques legacy of Cartesian dualism, explores tension between masculine control and feminine values, and challenges both religious and secular fundamentalisms.",
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
            id: "summary_001_egy",
            relationship: "applies",
            strength: 0.8,
            label: "Clinical relevance"
          },
          {
            id: "summary_002_egy",
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
        id: "summary_004_egy",
        title: "Do You Read Me? - Core Thesis",
        quote: "Reading and writing are fundamentally about communication of meaning. Miller's contention is that concept of dyslexia is something that has been invented, rather than discovered, in order to evade question of meaning and understanding of individual.",
        context: "A fascinating and compelling exploration of learning process for parents, teachers, and anyone with an interest in education. Miller contends that when a child has difficulty in learning to read and write, one area that is never seen as having any relevance is child's life experiences. The book examines this as part of a culture in which child-rearing and education are increasingly depersonalising, and children are viewed as assets or commodities rather than as individuals.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["learning", "education"],
        relatedQuotes: [
          {
            id: "summary_005_egy",
            relationship: "expands",
            strength: 0.9,
            label: "Further exploration"
          },
          {
            id: "summary_006_egy",
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
        id: "summary_005_egy",
        title: "Part I: Reading Disability",
        quote: "Part I examines dyslexia muddle, acronyms and non-science, emotional health and fitness, family matters, secrets and hidden agendas, and function of aggression in healthy development.",
        context: "Based on 30 years' experience of both educational psychology and analytical therapy, book sets out radical approach to learning difficulties in which primary assumption is that there will usually be underlying emotional conflicts, tensions, and anxieties. Any learning disability is thus more likely to be a symptom of less-evident, personal difficulties, rather than a problem in itself.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Part I: Reading Disability",
          year: 2015
        },
        themes: ["learning", "emotional"],
        relatedQuotes: [
          {
            id: "summary_004_egy",
            relationship: "expands",
            strength: 0.9,
            label: "Core concept"
          },
          {
            id: "summary_006_egy",
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
        id: "summary_006_egy",
        title: "Part III: The Education Issue",
        quote: "Part III explores schooling versus education, asking whether education is liberation or persecution, and examining broader cultural context of how children are treated as assets or commodities rather than as individuals.",
        context: "The book examines learning difficulties within context of a depersonalising culture where children are viewed as assets or commodities rather than as individuals. Miller provides framework for understanding how underlying emotional conflicts, tensions, and anxieties manifest as learning problems. The work challenges conventional thinking about dyslexia and learning difficulties, arguing that these are often symptoms of deeper emotional issues rather than purely technical problems.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Part III: The Education Issue",
          year: 2015
        },
        themes: ["education", "emotional"],
        relatedQuotes: [
          {
            id: "summary_004_egy",
            relationship: "applies",
            strength: 0.8,
            label: "Theoretical foundation"
          },
          {
            id: "summary_005_egy",
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
    ZH: [
      {
        id: "summary_001_zh",
        title: "胜利的受害者 - 概述",
        quote: "这本书探讨了在个人关系和公共领域中未被广泛认可的受虐狂和变态思维的普遍存在，讨论了它如何助长了受害者文化。",
        context: "这本书对个人关系和整个社会中的受虐狂和变态思维进行了挑衅性的审视。Miller 认为，我们生活在一个'受害者文化'中，在这个文化中，痛苦已成为身份、道德优越感和控制的来源。",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["受虐狂", "受害者身份"],
        relatedQuotes: [
          {
            id: "summary_002_zh",
            relationship: "展开",
            strength: 0.9,
            label: "更深入的分析"
          },
          {
            id: "summary_003_zh",
            relationship: "应用",
            strength: 0.8,
            label: "临床应用"
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
          difficulty: "高级",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_002_zh",
        title: "第一部分：变态病态的起源",
        quote: "第一部分追溯了变态病态的起源，以及它如何阻碍情感发展并产生功能失调的关系，通过癔症、暴露癖、窥视癖和投射认同进行探索。",
        context: "基于30年的精神分析实践经验，Miller 探索了受虐狂模式如何阻碍情感发展并创造功能失调的关系。这本书通过癔症、暴露癖、窥视癖和投射认同的视角来检查这些动态，并使用了来自夫妻和家庭治疗以及教育咨询的详细临床材料进行了说明。",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Part One",
          year: 2013
        },
        themes: ["受虐狂", "临床"],
        relatedQuotes: [
          {
            id: "summary_001_zh",
            relationship: "展开",
            strength: 0.9,
            label: "基础"
          },
          {
            id: "summary_003_zh",
            relationship: "语境化",
            strength: 0.7,
            label: "社会背景"
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
          difficulty: "高级",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_003_zh",
        title: "第二部分：当代思维模式",
        quote: "第二部分审视了当前的思维模式和信仰体系，特别关注部落心态、笛卡尔二元论、启蒙运动对女性价值观的边缘化，以及消极的男性控制。",
        context: "在后半部分，Miller 将注意力转向整个社会，检查变态思维如何渗透了我们的信仰体系、教育机构和文化假设。他批评了笛卡尔二元论的遗产，探索了男性控制与女性价值观之间的紧张关系，并质疑了宗教和世俗的原教旨主义。",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Part Two",
          year: 2013
        },
        themes: ["受虐狂", "后克莱因派"],
        relatedQuotes: [
          {
            id: "summary_001_zh",
            relationship: "应用",
            strength: 0.8,
            label: "临床相关性"
          },
          {
            id: "summary_002_zh",
            relationship: "语境化",
            strength: 0.7,
            label: "理论背景"
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
          difficulty: "中级",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_004_zh",
        title: "Do You Read Me? - 核心论点",
        quote: "阅读和写作从根本上说是意义交流的问题。Miller 的论点是，阅读障碍的概念是某种被发明而不是被发现的东西，以避免对意义和个人理解的问题。",
        context: "对父母、教师和任何对教育感兴趣的人来说，这是一个关于学习过程的迷人而有说服力的探索。Miller 认为，当孩子在阅读和写作方面有困难时，一个从未被认为与孩子的生活经历相关的领域。这本书将此检查为一个文化的一部分，在这个文化中，儿童养育和教育越来越非个性化，儿童被视为资产或商品而不是个体。",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["学习", "教育"],
        relatedQuotes: [
          {
            id: "summary_005_zh",
            relationship: "展开",
            strength: 0.9,
            label: "更深入的探索"
          },
          {
            id: "summary_006_zh",
            relationship: "应用",
            strength: 0.8,
            label: "实际应用"
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
          difficulty: "中级",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_005_zh",
        title: "第一部分：阅读障碍",
        quote: "第一部分检查了阅读障碍问题、首字母缩写和非科学、情感健康和身体健康、家庭事务、秘密和隐藏议程，以及健康发展中攻击的作用。",
        context: "基于30年的教育心理学和分析治疗经验，这本书为学习困难提出了激进的方法，其中主要假设是通常会有潜在的情感冲突、紧张和焦虑。因此，任何学习障碍都更有可能是不太明显的个人困难的症状，而不是本身的问题。",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "第一部分：阅读障碍",
          year: 2015
        },
        themes: ["学习", "情感"],
        relatedQuotes: [
          {
            id: "summary_004_zh",
            relationship: "展开",
            strength: 0.9,
            label: "核心概念"
          },
          {
            id: "summary_006_zh",
            relationship: "语境化",
            strength: 0.7,
            label: "教育语境"
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
          difficulty: "中级",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-03"
        }
      },
      {
        id: "summary_006_zh",
        title: "第三部分：教育问题",
        quote: "第三部分探讨了学校教育与教育的对立面，询问教育是解放还是迫害，并检查了更广泛的文化背景，即儿童如何被视为资产或商品而不是个体。",
        context: "这本书在学习困难的文化语境中检查了非个性化文化，在这种文化中儿童被视为资产或商品而不是个体。Miller 提供了一个框架来理解潜在的情感冲突、紧张和焦虑如何表现为学习问题。这项工作质疑了对阅读障碍和学习困难的常规思维，认为这些往往是更深层次情感问题的症状，而不是纯粹的技术问题。",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "第三部分：教育问题",
          year: 2015
        },
        themes: ["教育", "情感"],
        relatedQuotes: [
          {
            id: "summary_004_zh",
            relationship: "应用",
            strength: 0.8,
            label: "理论基础"
          },
          {
            id: "summary_005_zh",
            relationship: "语境化",
            strength: 0.7,
            label: "实际语境"
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
          difficulty: "中级",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-03"
        }
      }
    ],
    DE: [
      {
        id: "summary_001_de",
        title: "Der Triumphierende Opfer - Übersicht",
        quote: "Das Buch untersucht die nicht anerkannte Verbreitung von Sadomasochismus und perversem Denken in persönlichen Beziehungen und im öffentlichen Bereich und diskutiert, wie es zur Opferkultur beiträgt.",
        context: "Dieses Buch bietet eine provokante Untersuchung von Sadomasochismus und perversem Denken sowohl in persönlichen Beziehungen als auch in der Gesellschaft im Allgemeinen. Miller argumentiert, dass wir in einer 'Opferkultur' leben, in der Leiden zu einer Quelle von Identität und Macht geworden sind.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadomasochismus", "opferrolle"],
        relatedQuotes: [
          {
            id: "summary_002_de",
            relationship: "erweitert",
            strength: 0.9,
            label: "Tiefere Analyse"
          },
          {
            id: "summary_003_de",
            relationship: "wendet an",
            strength: 0.8,
            label: "Klinische Anwendung"
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
          difficulty: "fortgeschritten",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_002_de",
        title: "Teil I: Ursprünge der Perversen Pathologie",
        quote: "Der erste Teil verfolgt die Ursprünge der perversen Pathologie und wie sie funktioniert, indem sie die emotionale Entwicklung behindert und dysfunktionale Beziehungen erzeugt, untersucht durch Hysterie, Exhibitionismus, Voyeurismus und projektive Identifikation.",
        context: "Basierend auf 30 Jahren psychoanalytischer Praxis erforscht Miller, wie sadomasochistische Muster die emotionale Entwicklung behindern und dysfunktionale Beziehungen schaffen. Das Buch untersucht diese Dynamiken durch das Prisma von Hysterie, Exhibitionismus, Voyeurismus und projektiver Identifikation, illustriert mit detailliertem klinischem Material aus Erfahrungen mit Paar- und Familientherapie und pädagogischen Beratungen.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Teil I",
          year: 2013
        },
        themes: ["sadomasochismus", "klinisch"],
        relatedQuotes: [
          {
            id: "summary_001_de",
            relationship: "erweitert",
            strength: 0.9,
            label: "Grundlage"
          },
          {
            id: "summary_003_de",
            relationship: "kontextualisiert",
            strength: 0.7,
            label: "Sozialer Kontext"
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
          difficulty: "fortgeschritten",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_003_de",
        title: "Teil II: Zeitgenössische Denkweisen",
        quote: "Der zweite Teil untersucht aktuelle Denkweisen und Glaubenssysteme mit besonderem Schwerpunkt auf Stammesmentalität, kartesischem Dualismus, dem Beitrag der Aufklärung zur Marginalisierung weiblicher Werte und negativer männlicher Kontrolle.",
        context: "In der zweiten Hälfte wendet Miller seine Aufmerksamkeit der Gesellschaft im Allgemeinen zu und untersucht, wie perverses Denken unsere Glaubenssysteme, unsere Bildungseinrichtungen und unsere kulturellen Annahmen infiltriert hat. Er kritisiert das Erbe des kartesischen Dualismus, erforscht die Spannung zwischen männlicher Kontrolle und weiblichen Werten und hinterfragt sowohl religiöse als auch säkulare Fundamentalismen.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Teil II",
          year: 2013
        },
        themes: ["sadomasochismus", "post-kleinianisch"],
        relatedQuotes: [
          {
            id: "summary_001_de",
            relationship: "wendet an",
            strength: 0.8,
            label: "Klinische Relevanz"
          },
          {
            id: "summary_002_de",
            relationship: "kontextualisiert",
            strength: 0.7,
            label: "Theoretischer Hintergrund"
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
          difficulty: "mittel",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_004_de",
        title: "Do You Read Me? - Kernthese",
        quote: "Lesen und Schreiben sind im Grunde eine Frage der Kommunikation von Bedeutung. Millers These ist, dass das Konzept der Dyslexie etwas ist, das erfunden, nicht entdeckt wurde, um die Frage nach Bedeutung und Verständnis des Individuums zu vermeiden.",
        context: "Eine faszinierende und überzeugende Erkundung des Lernprozesses für Eltern, Lehrer und alle, die sich für Bildung interessieren. Miller argumentiert, dass wenn ein Kind Schwierigkeiten beim Erlernen des Lesens und Schreibens hat, ein Bereich, der niemals als relevant angesehen wird, das Leben des Kindes ist. Das Buch untersucht dies als Teil einer Kultur, in der Kindererziehung und Bildung zunehmend depersonalisiert werden und Kinder als Vermögenswerte oder Waren statt als Individuen betrachtet werden.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["lernen", "bildung"],
        relatedQuotes: [
          {
            id: "summary_005_de",
            relationship: "erweitert",
            strength: 0.9,
            label: "Tiefere Erkundung"
          },
          {
            id: "summary_006_de",
            relationship: "wendet an",
            strength: 0.8,
            label: "Praktische Anwendung"
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
          difficulty: "mittel",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_005_de",
        title: "Teil I: Leseschwierigkeiten",
        quote: "Der erste Teil untersucht das Dyslexie-Problem, Abkürzungen und Nicht-Wissenschaft, emotionale Gesundheit und körperliche Fitness, Familienangelegenheiten, Geheimnisse und verborgene Agenden und die Funktion von Aggression in gesunder Entwicklung.",
        context: "Basierend auf 30 Jahren Erfahrung sowohl in der pädagogischen Psychologie als auch in der analytischen Therapie schlägt das Buch einen radikalen Ansatz für Lernschwierigkeiten vor, bei dem die Hauptannahme ist, dass es in der Regel zugrundeliegende emotionale Konflikte, Spannungen und Ängste geben wird. Jede Lernbehinderung ist daher eher ein Symptom weniger offensichtlicher persönlicher Schwierigkeiten als ein Problem an sich.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Teil I: Leseschwierigkeiten",
          year: 2015
        },
        themes: ["lernen", "emotional"],
        relatedQuotes: [
          {
            id: "summary_004_de",
            relationship: "erweitert",
            strength: 0.9,
            label: "Kernkonzept"
          },
          {
            id: "summary_006_de",
            relationship: "kontextualisiert",
            strength: 0.7,
            label: "Bildungskontext"
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
          difficulty: "mittel",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_006_de",
        title: "Teil III: Die Bildungsfrage",
        quote: "Der dritte Teil untersucht Schulbesuch im Gegensatz zu Bildung und fragt, ob Bildung Befreiung oder Verfolgung ist, und untersucht den breiteren kulturellen Kontext, wie Kinder als Vermögenswerte oder Waren statt als Individuen behandelt werden.",
        context: "Das Buch untersucht Lernschwierigkeiten im Kontext einer depersonalisierenden Kultur, in der Kinder als Vermögenswerte oder Waren statt als Individuen betrachtet werden. Miller bietet einen Rahmen zum Verständnis, wie zugrundeliegende emotionale Konflikte, Spannungen und Ängste sich als Lernprobleme manifestieren. Die Arbeit hinterfragt konventionelles Denken über Dyslexie und Lernschwierigkeiten und argumentiert, dass diese oft Symptome tieferer emotionaler Probleme statt rein technischer Probleme sind.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Teil III: Die Bildungsfrage",
          year: 2015
        },
        themes: ["bildung", "emotional"],
        relatedQuotes: [
          {
            id: "summary_004_de",
            relationship: "wendet an",
            strength: 0.8,
            label: "Theoretische Grundlage"
          },
          {
            id: "summary_005_de",
            relationship: "kontextualisiert",
            strength: 0.7,
            label: "Praktischer Kontext"
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
          difficulty: "mittel",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      }
    ],
    PT: [
      {
        id: "summary_001_pt",
        title: "A Vítima Triunfante - Visão Geral",
        quote: "O livro examina a prevalência não reconhecida de sadomasoquismo e pensamento perverso em relacionamentos pessoais e domínio público, discutindo como contribui para a cultura de vítima.",
        context: "Este livro oferece um exame provocativo de sadomasoquismo e pensamento perverso tanto em relacionamentos pessoais quanto na sociedade em geral. Miller argumenta que vivemos em uma 'cultura de vítima' onde o sofrimento se tornou uma fonte de identidade e poder.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadomasoquismo", "vitimização"],
        relatedQuotes: [
          {
            id: "summary_002_pt",
            relationship: "expande",
            strength: 0.9,
            label: "Análise mais profunda"
          },
          {
            id: "summary_003_pt",
            relationship: "aplica",
            strength: 0.8,
            label: "Aplicação clínica"
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
          difficulty: "avançado",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_002_pt",
        title: "Parte I: Origens da Patologia Perversa",
        quote: "A primeira parte rastreia as origens da patologia perversa e como ela opera obstruindo o desenvolvimento emocional e produzindo relacionamentos disfuncionais, exploradas através de histeria, exibicionismo, voyeurismo e identificação projetiva.",
        context: "Baseando-se em 30 anos de prática psicanalítica, Miller explora como padrões sadomasoquistas obstruem o desenvolvimento emocional e criam relacionamentos disfuncionais. O livro examina essas dinâmicas através do prisma da histeria, exibicionismo, voyeurismo e identificação projetiva, ilustrado com material clínico detalhado de experiências de terapia de casal e familiar e consultas educacionais.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Parte I",
          year: 2013
        },
        themes: ["sadomasoquismo", "clínico"],
        relatedQuotes: [
          {
            id: "summary_001_pt",
            relationship: "expande",
            strength: 0.9,
            label: "Fundamento"
          },
          {
            id: "summary_003_pt",
            relationship: "contextualiza",
            strength: 0.7,
            label: "Contexto social"
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
          difficulty: "avançado",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_003_pt",
        title: "Parte II: Modos de Pensamento Contemporâneos",
        quote: "A segunda parte examina os modos de pensamento e sistemas de crença atuais com ênfase particular na mentalidade tribal, dualismo cartesiano, contribuição do Iluminismo para a marginalização dos valores femininos, e controle masculino negativo.",
        context: "Na segunda metade, Miller volta sua atenção para a sociedade em geral, examinando como o pensamento perverso infiltrou nossos sistemas de crença, instituições educacionais e suposições culturais. Ele critica o legado do dualismo cartesiano, explora a tensão entre controle masculino e valores femininos, e desafia tanto fundamentalismos religiosos quanto seculares.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Parte II",
          year: 2013
        },
        themes: ["sadomasoquismo", "pós-kleiniano"],
        relatedQuotes: [
          {
            id: "summary_001_pt",
            relationship: "aplica",
            strength: 0.8,
            label: "Relevância clínica"
          },
          {
            id: "summary_002_pt",
            relationship: "contextualiza",
            strength: 0.7,
            label: "Contexto teórico"
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
          difficulty: "intermediário",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_004_pt",
        title: "Do You Read Me? - Tese Central",
        quote: "A leitura e a escrita são fundamentalmente uma questão de comunicação de significado. A tese de Miller é que o conceito de dislexia é algo que foi inventado, em vez de descoberto, para evitar a questão de significado e compreensão do indivíduo.",
        context: "Uma exploração fascinante e convincente do processo de aprendizagem para pais, professores e qualquer pessoa interessada em educação. Miller argumenta que quando uma criança tem dificuldade em aprender a ler e escrever, uma área que nunca é vista como tendo relevância é a vida da criança. O livro examina isso como parte de uma cultura na qual a criação de filhos e a educação são cada vez mais despersonalizadas, e as crianças são vistas como ativos ou commodities em vez de indivíduos.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["aprendizagem", "educação"],
        relatedQuotes: [
          {
            id: "summary_005_pt",
            relationship: "expande",
            strength: 0.9,
            label: "Exploração mais profunda"
          },
          {
            id: "summary_006_pt",
            relationship: "aplica",
            strength: 0.8,
            label: "Aplicação prática"
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
          difficulty: "intermediário",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_005_pt",
        title: "Parte I: Dificuldade de Leitura",
        quote: "A primeira parte examina o problema da dislexia, siglas e não-ciência, saúde emocional e forma física, questões familiares, segredos e agendas ocultas, e a função da agressão no desenvolvimento saudável.",
        context: "Baseado em 30 anos de experiência tanto em psicologia educacional quanto em terapia analítica, o livro propõe uma abordagem radical para dificuldades de aprendizagem na qual a suposição primária é que geralmente haverá conflitos emocionais subjacentes, tensões e ansiedades subjacentes. Qualquer deficiência de aprendizagem é, portanto, mais provável de ser um sintoma de dificuldades pessoais menos evidentes, em vez de um problema em si.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Parte I: Dificuldade de Leitura",
          year: 2015
        },
        themes: ["aprendizagem", "emocional"],
        relatedQuotes: [
          {
            id: "summary_004_pt",
            relationship: "expande",
            strength: 0.9,
            label: "Conceito central"
          },
          {
            id: "summary_006_pt",
            relationship: "contextualiza",
            strength: 0.7,
            label: "Contexto educacional"
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
          difficulty: "intermediário",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_006_pt",
        title: "Parte III: A Questão Educacional",
        quote: "A terceira parte explora escolarização versus educação, perguntando se a educação é libertação ou perseguição, e examinando o contexto cultural mais amplo de como as crianças são tratadas como ativos ou commodities em vez de indivíduos.",
        context: "O livro examina dificuldades de aprendizagem dentro do contexto de uma cultura despersonalizadora onde as crianças são vistas como ativos ou commodities em vez de indivíduos. Miller fornece uma estrutura para entender como conflitos emocionais subjacentes, tensões e ansiedades se manifestam como problemas de aprendizagem. O trabalho desafia o pensamento convencional sobre dislexia e dificuldades de aprendizagem, argumentando que estes são frequentemente sintomas de problemas emocionais mais profundos em vez de problemas puramente técnicos.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Parte III: A Questão Educacional",
          year: 2015
        },
        themes: ["educação", "emocional"],
        relatedQuotes: [
          {
            id: "summary_004_pt",
            relationship: "aplica",
            strength: 0.8,
            label: "Fundamento teórico"
          },
          {
            id: "summary_005_pt",
            relationship: "contextualiza",
            strength: 0.7,
            label: "Contexto prático"
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
          difficulty: "intermediário",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      }
    ],
    IT: [
      {
        id: "summary_001_it",
        title: "La Vittima Trionfante - Panoramica",
        quote: "Il libro esamina la prevalenza non riconosciuta di sadomasochismo e pensiero perverso nelle relazioni personali e nel dominio pubblico, discutendo come contribuisce alla cultura della vittima.",
        context: "Questo libro offre un esame provocatorio di sadomasochismo e pensiero perverso sia nelle relazioni personali che nella società in generale. Miller sostiene che viviamo in una 'cultura della vittima' dove la sofferenza è diventata una fonte di identità e potere.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadomasochismo", "vittimismo"],
        relatedQuotes: [
          {
            id: "summary_002_it",
            relationship: "espande",
            strength: 0.9,
            label: "Analisi più profonda"
          },
          {
            id: "summary_003_it",
            relationship: "applica",
            strength: 0.8,
            label: "Applicazione clinica"
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
          difficulty: "avanzato",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_002_it",
        title: "Parte I: Origini della Patologia Perversa",
        quote: "La prima parte traccia le origini della patologia perversa e come opera ostacolando lo sviluppo emotivo e producendo relazioni disfunzionali, esplorate attraverso isteria, esibizionismo, voyeurismo e identificazione proiettiva.",
        context: "Basandosi su 30 anni di pratica psicoanalitica, Miller esplora come i pattern sadomasochistici ostacolano lo sviluppo emotivo e creano relazioni disfunzionali. Il libro esamina queste dinamiche attraverso il prisma dell'isteria, esibizionismo, voyeurismo e identificazione proiettiva, illustrato con materiale clinico dettagliato da esperienze di terapia di coppia e familiare e consultazioni educative.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Parte I",
          year: 2013
        },
        themes: ["sadomasochismo", "clinico"],
        relatedQuotes: [
          {
            id: "summary_001_it",
            relationship: "espande",
            strength: 0.9,
            label: "Fondamento"
          },
          {
            id: "summary_003_it",
            relationship: "contestualizza",
            strength: 0.7,
            label: "Contesto sociale"
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
          difficulty: "avanzato",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_003_it",
        title: "Parte II: Modi di Pensiero Contemporanei",
        quote: "La seconda parte esamina i modi di pensiero attuali e i sistemi di credenza con particolare enfasi sulla mentalità tribale, dualismo cartesiano, contributo dell'Illuminismo alla marginalizzazione dei valori femminili, e controllo maschile negativo.",
        context: "Nella seconda metà, Miller rivolge la sua attenzione alla società in generale, esaminando come il pensiero perverso ha infiltrato i nostri sistemi di credenza, le nostre istituzioni educative e le nostre assunzioni culturali. Critica l'eredità del dualismo cartesiano, esplora la tensione tra controllo maschile e valori femminili, e sfida sia i fondamentalismi religiosi che secolari.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Parte II",
          year: 2013
        },
        themes: ["sadomasochismo", "post-kleiniano"],
        relatedQuotes: [
          {
            id: "summary_001_it",
            relationship: "applica",
            strength: 0.8,
            label: "Rilevanza clinica"
          },
          {
            id: "summary_002_it",
            relationship: "contestualizza",
            strength: 0.7,
            label: "Contesto teorico"
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
          difficulty: "intermedio",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_004_it",
        title: "Do You Read Me? - Tesi Centrale",
        quote: "La lettura e la scrittura sono fondamentalmente una questione di comunicazione di significato. La tesi di Miller è che il concetto di dislessia è qualcosa che è stato inventato, piuttosto che scoperto, per evitare la questione di significato e comprensione dell'individuo.",
        context: "Un'esplorazione affascinante e convincente del processo di apprendimento per genitori, insegnanti e chiunque sia interessato all'educazione. Miller sostiene che quando un bambino ha difficoltà nell'apprendere a leggere e scrivere, un'area che non viene mai vista come rilevante è la vita del bambino. Il libro esamina questo come parte di una cultura in cui l'educazione dei bambini è sempre più depersonalizzata, e i bambini sono visti come beni o merci invece che come individui.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["apprendimento", "educazione"],
        relatedQuotes: [
          {
            id: "summary_005_it",
            relationship: "espande",
            strength: 0.9,
            label: "Esplorazione più profonda"
          },
          {
            id: "summary_006_it",
            relationship: "applica",
            strength: 0.8,
            label: "Applicazione pratica"
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
          difficulty: "intermedio",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_005_it",
        title: "Parte I: Disabilità di Lettura",
        quote: "La prima parte esamina il problema della dislessia, acronimi e non-scienza, salute emotiva e forma fisica, questioni familiari, segreti e agende nascoste, e la funzione dell'aggressione nello sviluppo sano.",
        context: "Basato su 30 anni di esperienza sia in psicologia educativa che in terapia analitica, il libro propone un approccio radicale alle difficoltà di apprendimento in cui l'assunzione primaria è che ci saranno generalmente conflitti emotivi sottostanti, tensioni e ansie sottostanti. Qualsiasi disabilità di apprendimento è quindi più probabile che sia un sintomo di difficoltà personali meno evidenti, piuttosto che un problema in sé.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Parte I: Disabilità di Lettura",
          year: 2015
        },
        themes: ["apprendimento", "emotivo"],
        relatedQuotes: [
          {
            id: "summary_004_it",
            relationship: "espande",
            strength: 0.9,
            label: "Concetto centrale"
          },
          {
            id: "summary_006_it",
            relationship: "contestualizza",
            strength: 0.7,
            label: "Contesto educativo"
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
          difficulty: "intermedio",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_006_it",
        title: "Parte III: La Questione Educativa",
        quote: "La terza parte esplora scolarizzazione versus educazione, chiedendosi se l'educazione è liberazione o persecuzione, ed esaminando il contesto culturale più ampio di come i bambini sono trattati come beni o merci invece che come individui.",
        context: "Il libro esamina le difficoltà di apprendimento nel contesto di una cultura depersonalizzante dove i bambini sono visti come beni o merci invece che come individui. Miller fornisce un quadro per capire come conflitti emotivi sottostanti, tensioni e ansie si manifestano come problemi di apprendimento. Il lavoro sfida il pensiero convenzionale sulla dislessia e le difficoltà di apprendimento, sostenendo che questi sono spesso sintomi di problemi emotivi più profondi piuttosto che problemi puramente tecnici.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Parte III: La Questione Educativa",
          year: 2015
        },
        themes: ["educazione", "emotivo"],
        relatedQuotes: [
          {
            id: "summary_004_it",
            relationship: "applica",
            strength: 0.8,
            label: "Fondamento teorico"
          },
          {
            id: "summary_005_it",
            relationship: "contestualizza",
            strength: 0.7,
            label: "Contesto pratico"
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
          difficulty: "intermedio",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      }
    ],
    EL: [
      {
        id: "summary_001_el",
        title: "Ο Θριαμβεύων Θύμα - Επισκόπηση",
        quote: "Το βιβλίο εξετάζει την μη αναγνωρισμένη επικράτηση του σαδομασοχισμού και της διεστραμμένης σκέψης στις προσωπικές σχέσεις και στο δημόσιο τομέα, συζητώντας πώς συμβάλλει στον πολιτισμό του θύματος.",
        context: "Αυτό το βιβλίο προσφέρει μια προκλητική εξέταση του σαδομασοχισμού και της διεστραμμένης σκέψης τόσο στις προσωπικές σχέσεις όσο και στην κοινωνία γενικά. Ο Miller υποστηρίζει ότι ζούμε σε έναν 'πολιτισμό του θύματος' όπου ο πόνος έχει γίνει πηγή ταυτότητας και δύναμης.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["σαδομασοχισμός", "θυματοποίηση"],
        relatedQuotes: [
          {
            id: "summary_002_el",
            relationship: "επεκτείνει",
            strength: 0.9,
            label: "Πιο βαθιά ανάλυση"
          },
          {
            id: "summary_003_el",
            relationship: "εφαρμόζει",
            strength: 0.8,
            label: "Κλινική εφαρμογή"
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
          difficulty: "προχωρημένος",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_002_el",
        title: "Μέρος Ι: Αρχές της Παραμορφωμένης Παθολογίας",
        quote: "Το πρώτο μέρος παρακολουθεί τις αρχές της παραμορφωμένης παθολογίας και πώς λειτουργεί εμποδίζοντας τη συναισθηματική ανάπτυξη και παράγοντας δυσλειτουργικές σχέσεις, διερευνημένες μέσω υστερίας, εκθεσιασμού, βουγερτισμού και προβολικής ταυτοποίησης.",
        context: "Με βάση 30 χρόνια ψυχαναλυτικής πρακτικής, ο Miller διερευνά πώς τα σαδομασοχιστικά μοτίβα εμποδίζουν τη συναισθηματική ανάπτυξη και δημιουργούν δυσλειτουργικές σχέσεις. Το βιβλίο εξετάζει αυτές τις δυναμικές μέσω του πρίσματος της υστερίας, εκθεσιασμού, βουγερτισμού και προβολικής ταυτοποίησης, εικονογραφημένο με λεπτομερές κλινικό υλικό από εμπειρίες θεραπείας ζευγαριών και οικογενειών και εκπαιδευτικών συμβουλών.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Μέρος Ι",
          year: 2013
        },
        themes: ["σαδομασοχισμός", "κλινικός"],
        relatedQuotes: [
          {
            id: "summary_001_el",
            relationship: "επεκτείνει",
            strength: 0.9,
            label: "Βάση"
          },
          {
            id: "summary_003_el",
            relationship: "περιβάλλει",
            strength: 0.7,
            label: "Κοινωνικό πλαίσιο"
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
          difficulty: "προχωρημένος",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_003_el",
        title: "Μέρος ΙΙ: Σύγχρονοι Τρόποι Σκέψης",
        quote: "Το δεύτερο μέρος εξετάζει τους τρέχοντες τρόπους σκέψης και συστήματα πεποιθήσεων με ιδιαίτερη έμφαση στη φυλετική νοοτροπία, τον καρτεσιανό δυϊσμό, τη συμβολή του Διαφωτισμού στην περιθωριοποίηση των θηλυκών αξιών, και το αρνητικό αρσενικό έλεγχο.",
        context: "Στο δεύτερο μισό, ο Miller στρέφει την προσοχή του στην κοινωνία γενικά, εξετάζοντας πώς η διεστραμμένη σκέψη έχει διεισδύσει στα συστήματα πεποιθήσεων μας, στα εκπαιδευτικά μας ιδρύματα και στις πολιτισμικές μας υποθέσεις. Κριτικάρει την κληρονομιά του καρτεσιανού δυϊσμού, διερευνά την ένταση μεταξύ αρσενικού ελέγχου και θηλυκών αξιών, και αμφισβητεί τόσο τους θρησκευτικούς όσο και τους κοσμικούς θεμελιωτισμούς.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Μέρος ΙΙ",
          year: 2013
        },
        themes: ["σαδομασοχισμός", "μετα-κλάιν"],
        relatedQuotes: [
          {
            id: "summary_001_el",
            relationship: "εφαρμόζει",
            strength: 0.8,
            label: "Κλινική σχετικότητα"
          },
          {
            id: "summary_002_el",
            relationship: "περιβάλλει",
            strength: 0.7,
            label: "Θεωρητικό υπόβαθρο"
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
          difficulty: "ενδιάμεσος",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_004_el",
        title: "Do You Read Me? - Κεντρική Θέση",
        quote: "Η ανάγνωση και η γραφή είναι θεμελιωδώς μια ερώτηση επικοινωνίας νοήματος. Η θέση του Miller είναι ότι η έννοια της δυσλεξίας είναι κάτι που έχει εφευρεθεί, όχι ανακαλυφθεί, για να αποφύγει την ερώτηση νοήματος και κατανόησης του ατόμου.",
        context: "Μια συναρπαστική και πειστική εξερεύνηση της διαδικασίας μάθησης για γονείς, δασκάλους και οποιονδήποτε ενδιαφέρεται για την εκπαίδευση. Ο Miller υποστηρίζει ότι όταν ένα παιδί έχει δυσκολία στο να μάθει να διαβάζει και να γράφει, μια περιοχή που δεν θεωρείται ποτέ ως σχετική είναι η ζωή του παιδιού. Το βιβλίο εξετάζει αυτό ως μέρος ενός πολιτισμού στον οποίο η ανατροφή και η εκπαίδευση των παιδιών είναι όλο και πιο αποπροσωποποιημένες, και τα παιδιά θεωρούνται ως περιουσιακά στοιχεία ή εμπορεύματα αντί για άτομα.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["μάθηση", "εκπαίδευση"],
        relatedQuotes: [
          {
            id: "summary_005_el",
            relationship: "επεκτείνει",
            strength: 0.9,
            label: "Πιο βαθιά εξερεύνηση"
          },
          {
            id: "summary_006_el",
            relationship: "εφαρμόζει",
            strength: 0.8,
            label: "Πρακτική εφαρμογή"
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
          difficulty: "ενδιάμεσος",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_005_el",
        title: "Μέρος Ι: Δυσκολία Ανάγνωσης",
        quote: "Το πρώτο μέρος εξετάζει το πρόβλημα της δυσλεξίας, συντομογραφίες και μη-επιστήμη, συναισθηματική υγεία και φυσική κατάσταση, οικογενειακά θέματα, μυστικά και κρυφές ατζέντες, και τη λειτουργία της επιθετικότητας στην υγιή ανάπτυξη.",
        context: "Με βάση 30 χρόνια εμπειρίας τόσο στην εκπαιδευτική ψυχολογία όσο και στην αναλυτική θεραπεία, το βιβλίο προτείνει μια ριζοσπαστική προσέγγιση για τις μαθησιακές δυσκολίες στην οποία η κύρια υπόθεση είναι ότι θα υπάρχουν γενικά υποκείμενες συναισθηματικές συγκρούσεις, εντάσεις και άγχος. Οποιαδήποτε μαθησιακή αναπηρία είναι επομένως πιο πιθανό να είναι σύμπτωμα λιγότερο προφανών προσωπικών δυσκολιών, αντί για πρόβλημα από μόνο του.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Μέρος Ι: Δυσκολία Ανάγνωσης",
          year: 2015
        },
        themes: ["μάθηση", "συναισθηματικός"],
        relatedQuotes: [
          {
            id: "summary_004_el",
            relationship: "επεκτείνει",
            strength: 0.9,
            label: "Κεντρική έννοια"
          },
          {
            id: "summary_006_el",
            relationship: "περιβάλλει",
            strength: 0.7,
            label: "Εκπαιδευτικό πλαίσιο"
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
          difficulty: "ενδιάμεσος",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_006_el",
        title: "Μέρος ΙΙΙ: Το Εκπαιδευτικό Ζήτημα",
        quote: "Το τρίτο μέρος εξετάζει την εκπαίδευση έναντι της εκπαίδευσης, ρωτώντας αν η εκπαίδευση είναι απελευθέρωση ή δίωξη, και εξετάζοντας το ευρύτερο πολιτισμικό πλαίσιο του πώς τα παιδιά αντιμετωπίζονται ως περιουσιακά στοιχεία ή εμπορεύματα αντί για άτομα.",
        context: "Το βιβλίο εξετάζει τις μαθησιακές δυσκολίες στο πλαίσιο μιας αποπροσωποποιημένης κουλτούρας όπου τα παιδιά αντιμετωπίζονται ως περιουσιακά στοιχεία ή εμπορεύματα αντί για άτομα. Ο Miller παρέχει ένα πλαίσιο για την κατανόηση του πώς υποκείμενες συναισθηματικές συγκρούσεις, εντάσεις και άγχος εκδηλώνονται ως μαθησιακά προβλήματα. Η εργασία αμφισβητεί τη συμβατική σκέψη για τη δυσλεξία και τις μαθησιακές δυσκολίες, υποστηρίζοντας ότι αυτές είναι συχνά συμπτώματα βαθύτερων συναισθηματικών προβλημάτων αντί για καθαρά τεχνικά προβλήματα.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Μέρος ΙΙΙ: Το Εκπαιδευτικό Ζήτημα",
          year: 2015
        },
        themes: ["εκπαίδευση", "συναισθηματικός"],
        relatedQuotes: [
          {
            id: "summary_004_el",
            relationship: "εφαρμόζει",
            strength: 0.8,
            label: "Θεωρητική βάση"
          },
          {
            id: "summary_005_el",
            relationship: "περιβάλλει",
            strength: 0.7,
            label: "Πρακτικό πλαίσιο"
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
          difficulty: "ενδιάμεσος",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      }
    ],
    NL: [
      {
        id: "summary_001_nl",
        title: "De Triomferende Slachtoffer - Overzicht",
        quote: "Het boek onderzoekt de niet-erkende prevalentie van sadomasochisme en pervers denken in persoonlijke relaties en het publieke domein, en bespreekt hoe het bijdraagt aan een slachtoffercultuur.",
        context: "Dit boek biedt een provocerend onderzoek van sadomasochisme en pervers denken zowel in persoonlijke relaties als in de samenleving in het algemeen. Miller stelt dat we leven in een 'slachtoffercultuur' waar lijden een bron van identiteit en macht is geworden.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["sadomasochisme", "slachtofferschap"],
        relatedQuotes: [
          {
            id: "summary_002_nl",
            relationship: "breidt uit",
            strength: 0.9,
            label: "Diepere analyse"
          },
          {
            id: "summary_003_nl",
            relationship: "past toe",
            strength: 0.8,
            label: "Klinische toepassing"
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
          difficulty: "geavanceerd",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_002_nl",
        title: "Deel I: Oorsprong van Perverse Pathologie",
        quote: "Het eerste deel traceert de oorsprong van perverse pathologie en hoe het werkt door emotionele ontwikkeling te belemmeren en disfunctionele relaties te produceren, onderzocht door hysterie, exhibitionisme, voyeurisme en projectieve identificatie.",
        context: "Gebaseerd op 30 jaar psychoanalytische praktijk onderzoekt Miller hoe sadomasochistische patronen emotionele ontwikkeling belemmeren en disfunctionele relaties creëren. Het boek onderzoekt deze dynamiek door het prisma van hysterie, exhibitionisme, voyeurisme en projectieve identificatie, geïllustreerd met gedetailleerd klinisch materiaal uit ervaringen met paar- en gezinstherapie en educatieve consultaties.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Deel I",
          year: 2013
        },
        themes: ["sadomasochisme", "klinisch"],
        relatedQuotes: [
          {
            id: "summary_001_nl",
            relationship: "breidt uit",
            strength: 0.9,
            label: "Fundament"
          },
          {
            id: "summary_003_nl",
            relationship: "contextualiseert",
            strength: 0.7,
            label: "Sociale context"
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
          difficulty: "geavanceerd",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_003_nl",
        title: "Deel II: Hedendaagse Denkwijzen",
        quote: "Het tweede deel onderzoekt huidige denkwijzen en geloofssystemen met bijzondere nadruk op stammenmentaliteit, Cartesiaans dualisme, de bijdrage van de Verlichting aan de marginalisering van vrouwelijke waarden, en negatieve mannelijke controle.",
        context: "In de tweede helft richt Miller zijn aandacht op de samenleving in het algemeen en onderzoekt hoe pervers denken onze geloofssystemen, educatieve instellingen en culturele aannames heeft geïnfiltreerd. Hij bekritiseert de erfenis van het Cartesiaans dualisme, onderzoekt de spanning tussen mannelijke controle en vrouwelijke waarden, en daagt zowel religieuze als seculiere fundamentalismen uit.",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Deel II",
          year: 2013
        },
        themes: ["sadomasochisme", "post-kleiniaans"],
        relatedQuotes: [
          {
            id: "summary_001_nl",
            relationship: "past toe",
            strength: 0.8,
            label: "Klinische relevantie"
          },
          {
            id: "summary_002_nl",
            relationship: "contextualiseert",
            strength: 0.7,
            label: "Theoretische achtergrond"
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
          difficulty: "gemiddeld",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_004_nl",
        title: "Do You Read Me? - Centrale These",
        quote: "Lezen en schrijven zijn fundamenteel een kwestie van communicatie van betekenis. Millers these is dat het concept van dyslexie iets is dat is uitgevonden, in plaats van ontdekt, om de vraag naar betekenis en begrip van het individu te vermijden.",
        context: "Een fascinerende en overtuigende verkenning van het leerproces voor ouders, leraren en iedereen die geïnteresseerd is in onderwijs. Miller stelt dat wanneer een kind moeite heeft met leren lezen en schrijven, een gebied dat nooit als relevant wordt gezien het leven van het kind is. Het boek onderzoekt dit als onderdeel van een cultuur waarin kinderopvoeding en onderwijs steeds meer depersonaliserend zijn, en kinderen worden gezien als activa of goederen in plaats van als individuen.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["leren", "onderwijs"],
        relatedQuotes: [
          {
            id: "summary_005_nl",
            relationship: "breidt uit",
            strength: 0.9,
            label: "Diepere verkenning"
          },
          {
            id: "summary_006_nl",
            relationship: "past toe",
            strength: 0.8,
            label: "Praktische toepassing"
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
          difficulty: "gemiddeld",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_005_nl",
        title: "Deel I: Leesproblemen",
        quote: "Het eerste deel onderzoekt het dyslexieprobleem, acroniemen en niet-wetenschap, emotionele gezondheid en fysieke conditie, gezinskwesties, geheimen en verborgen agenda's, en de functie van agressie in gezonde ontwikkeling.",
        context: "Gebaseerd op 30 jaar ervaring zowel in educatieve psychologie als in analytische therapie stelt het boek een radicale benadering voor voor leerproblemen waarbij de primaire aanname is dat er meestal onderliggende emotionele conflicten, spanningen en angsten zullen zijn. Elke leerstoornis is dus waarschijnlijker een symptoom van minder voor de hand liggende persoonlijke moeilijkheden, in plaats van een probleem op zich.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Deel I: Leesproblemen",
          year: 2015
        },
        themes: ["leren", "emotioneel"],
        relatedQuotes: [
          {
            id: "summary_004_nl",
            relationship: "breidt uit",
            strength: 0.9,
            label: "Centraal concept"
          },
          {
            id: "summary_006_nl",
            relationship: "contextualiseert",
            strength: 0.7,
            label: "Educatieve context"
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
          difficulty: "gemiddeld",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_006_nl",
        title: "Deel III: Het Onderwijsvraagstuk",
        quote: "Het derde deel onderzoekt scholing versus onderwijs, en vraagt of onderwijs bevrijding of vervolging is, en onderzoekt de bredere culturele context van hoe kinderen worden behandeld als activa of goederen in plaats van als individuen.",
        context: "Het boek onderzoekt leerproblemen in de context van een depersonaliserende cultuur waar kinderen worden gezien als activa of goederen in plaats van als individuen. Miller biedt een kader voor het begrijpen van hoe onderliggende emotionele conflicten, spanningen en angsten zich manifesteren als leerproblemen. Het werk daagt conventioneel denken over dyslexie en leerproblemen uit en stelt dat deze vaak symptomen zijn van diepere emotionele problemen in plaats van puur technische problemen.",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Deel III: Het Onderwijsvraagstuk",
          year: 2015
        },
        themes: ["onderwijs", "emotioneel"],
        relatedQuotes: [
          {
            id: "summary_004_nl",
            relationship: "past toe",
            strength: 0.8,
            label: "Theoretische basis"
          },
          {
            id: "summary_005_nl",
            relationship: "contextualiseert",
            strength: 0.7,
            label: "Praktische context"
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
          difficulty: "gemiddeld",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      }
    ],
    JA: [
      {
        id: "summary_001_ja",
        title: "勝利する犠牲者 - 概要",
        quote: "この本は、個人的な関係と公共の場におけるサディズム・マゾヒズムと倒錯した思考の認識されていない普遍性を検証し、それが被害者文化にどのように寄与しているかについて議論しています。",
        context: "この本は、個人的な関係と社会全体におけるサディズム・マゾヒズムと倒錯した思考についての挑発的な検証を提供しています。Millerは、苦しみがアイデンティティと力の源となっている「被害者文化」に私たちが生きていると主張しています。",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2013
        },
        themes: ["サディズム・マゾヒズム", "被害者意識"],
        relatedQuotes: [
          {
            id: "summary_002_ja",
            relationship: "拡張",
            strength: 0.9,
            label: "より深い分析"
          },
          {
            id: "summary_003_ja",
            relationship: "適用",
            strength: 0.8,
            label: "臨床的応用"
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
          difficulty: "上級",
          readingTime: 5,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_002_ja",
        title: "第一部：倒錯した病理の起源",
        quote: "第一部は、倒錯した病理の起源を追跡し、それが感情的発達を阻害し、機能不全の関係を生み出す方法を検証し、ヒステリー、露出症、覗き症、投影的同一性を通じて探索されます。",
        context: "30年間の精神分析実践に基づき、Millerはサディズム・マゾヒズムのパターンが感情的発達をどのように阻害し、機能不全の関係を作り出すかを探求しています。この本は、ヒステリー、露出症、覗き症、投影的同一性のレンズを通じてこれらのダイナミクスを検証し、カップルおよび家族療法の経験と教育的相談からの詳細な臨床資料で説明されています。",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "第一部",
          year: 2013
        },
        themes: ["サディズム・マゾヒズム", "臨床"],
        relatedQuotes: [
          {
            id: "summary_001_ja",
            relationship: "拡張",
            strength: 0.9,
            label: "基礎"
          },
          {
            id: "summary_003_ja",
            relationship: "文脈化",
            strength: 0.7,
            label: "社会的文脈"
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
          difficulty: "上級",
          readingTime: 4,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_003_ja",
        title: "第二部：現代的な思考様式",
        quote: "第二部は、部族主義、デカルト的二元論、啓蒙運動の女性の価値の周縁化への貢献、そして否定的な男性支配に特別な重点を置いて、現在の思考様式と信念体系を検証します。",
        context: "後半で、Millerは社会全体に注意を向け、倒錯した思考が私たちの信念体系、教育機関、文化的仮定にどのように浸透したかを検証しています。彼はデカルト的二元論の遺産を批判し、男性支配と女性の価値の間の緊張を探求し、宗教的および世俗的な原理主義の両方に挑戦しています。",
        source: {
          work: "The Triumphant Victim: A Psychoanalytical Perspective on Sadomasochism and Perverse Thinking",
          page: null,
          number: null,
          chapter: "第二部",
          year: 2013
        },
        themes: ["サディズム・マゾヒズム", "ポストクライン派"],
        relatedQuotes: [
          {
            id: "summary_001_ja",
            relationship: "適用",
            strength: 0.8,
            label: "臨床的関連性"
          },
          {
            id: "summary_002_ja",
            relationship: "文脈化",
            strength: 0.7,
            label: "理論的背景"
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
          difficulty: "中級",
          readingTime: 4,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_004_ja",
        title: "Do You Read Me? - 中核テーゼ",
        quote: "読み書きは本質的に意味の伝達の問題です。Millerのテーゼは、ディスレクシアの概念は個人の意味と理解の質問を回避するために発明されたものであり、発見されたものではないということです。",
        context: "親、教師、教育に興味のある誰にとっても、学習プロセスの魅力的で説得力のある探求です。Millerは、子供が読み書きを学ぶのに困難がある場合、関連性があるとは見なされない領域は子供の人生であると主張しています。この本は、子供の育成と教育がますます非個人的になり、子供が個人ではなく資産または商品として見られている文化の一部としてこれを検証しています。",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "Introduction",
          year: 2015
        },
        themes: ["学習", "教育"],
        relatedQuotes: [
          {
            id: "summary_005_ja",
            relationship: "拡張",
            strength: 0.9,
            label: "より深い探求"
          },
          {
            id: "summary_006_ja",
            relationship: "適用",
            strength: 0.8,
            label: "実践的応用"
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
          difficulty: "中級",
          readingTime: 4,
          popularity: 0.9,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_005_ja",
        title: "第一部：読書障害",
        quote: "第一部は、ディスレクシアの問題、頭字語と非科学、感情的健康と身体的適性、家族の問題、秘密と隠されたアジェンダ、そして健全な発達における攻撃性の機能を検証します。",
        context: "教育心理学と分析療法の両方で30年の経験に基づき、この本は学習障害に対するラジカルなアプローチを提案しており、主な仮定は通常、根底にある感情的葛藤、緊張、不安があるということです。したがって、学習障害はそれ自体の問題というよりも、あまり明白でない個人的な困難の症状である可能性が高くなります。",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "第一部：読書障害",
          year: 2015
        },
        themes: ["学習", "感情的"],
        relatedQuotes: [
          {
            id: "summary_004_ja",
            relationship: "拡張",
            strength: 0.9,
            label: "中核概念"
          },
          {
            id: "summary_006_ja",
            relationship: "文脈化",
            strength: 0.7,
            label: "教育的文脈"
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
          difficulty: "中級",
          readingTime: 3,
          popularity: 0.8,
          dateAdded: "2026-01-05"
        }
      },
      {
        id: "summary_006_ja",
        title: "第三部：教育問題",
        quote: "第三部は、学校教育対教育を探求し、教育は解放か迫害かを問い、子供が個人ではなく資産または商品として扱われるより広い文化的文脈を検証します。",
        context: "この本は、子供が個人ではなく資産または商品として見られている非個人的な文化の文脈で学習障害を検証しています。Millerは、根底にある感情的葛藤、緊張、不安が学習問題としてどのように現れるかを理解するための枠組みを提供しています。この作品は、ディスレクシアと学習障害についての従来の考えに挑戦し、それらが純粋に技術的な問題ではなく、より深い感情的問題の症状であることが多いと主張しています。",
        source: {
          work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
          page: null,
          number: null,
          chapter: "第三部：教育問題",
          year: 2015
        },
        themes: ["教育", "感情的"],
        relatedQuotes: [
          {
            id: "summary_004_ja",
            relationship: "適用",
            strength: 0.8,
            label: "理論的基礎"
          },
          {
            id: "summary_005_ja",
            relationship: "文脈化",
            strength: 0.7,
            label: "実践的文脈"
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
          difficulty: "中級",
          readingTime: 3,
          popularity: 0.7,
          dateAdded: "2026-01-05"
        }
      }
    ]
  }
};

// UI Text Translations for Quiz Engine - All 14 Languages
const uiTextTranslations = {
  en: {
    nextButton: 'Next',
    submitButton: 'Submit Assessment',
    previousButton: 'Previous',
    retakeButton: 'Retake Assessment',
    retryButton: 'Retry',
    exitButton: 'Exit',
    returnToLobbyButton: 'Return to Lobby',
    questionLabel: 'Question',
    ofLabel: 'of',
    scoreLabel: 'Your Score',
    scoreDisplay: 'Your Score',
    resultsTitle: 'Your Result',
    correctAnswer: 'Correct',
    incorrectAnswer: 'Incorrect',
    answerRequired: 'Please select an answer before proceeding.',
    selectAssessment: 'Select Assessment',
    startButton: 'Start',
    errorTitle: 'Unable to Load Assessment',
    errorMessage: 'We\'re sorry, but the assessment could not be loaded at this time. Please try again later.',
    lobbyErrorTitle: 'Failed to load assessments',
    lobbyErrorMessage: 'Failed to load assessments. Please try again later.',
    quizErrorTitle: 'An error occurred while loading the quiz. Please try again later.',
    scaleLabels: {
      0: 'Strongly Disagree',
      1: 'Disagree',
      2: 'Neutral',
      3: 'Agree',
      4: 'Strongly Agree'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Next',
    previous: 'Previous',
    submit: 'Submit',
    results: 'Results',
    score: 'Score',
    back_to_lobby: 'Back to Lobby'
  },
  de: {
    nextButton: 'Weiter',
    submitButton: 'Bewertung absenden',
    previousButton: 'Zurück',
    retakeButton: 'Bewertung wiederholen',
    retryButton: 'Wiederholen',
    exitButton: 'Beenden',
    returnToLobbyButton: 'Zurück zum Eingangsbereich',
    questionLabel: 'Frage',
    ofLabel: 'von',
    scoreLabel: 'Ihre Punktzahl',
    scoreDisplay: 'Ihre Punktzahl',
    resultsTitle: 'Ihr Ergebnis',
    correctAnswer: 'Richtig',
    incorrectAnswer: 'Falsch',
    answerRequired: 'Bitte wählen Sie eine Antwort aus, bevor Sie fortfahren.',
    selectAssessment: 'Bewertung auswählen',
    startButton: 'Starten',
    errorTitle: 'Bewertung kann nicht geladen werden',
    errorMessage: 'Es tut uns leid, aber die Bewertung konnte zu diesem Zeitpunkt nicht geladen werden. Bitte versuchen Sie es später erneut.',
    lobbyErrorTitle: 'Laden der Bewertungen fehlgeschlagen',
    lobbyErrorMessage: 'Bewertungen konnten nicht geladen werden. Bitte versuchen Sie es später erneut.',
    quizErrorTitle: 'Beim Laden des Quiz ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
    scaleLabels: {
      0: 'Stimme überhaupt nicht zu',
      1: 'Stimme nicht zu',
      2: 'Neutral',
      3: 'Stimme zu',
      4: 'Stimme voll zu'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Weiter',
    previous: 'Zurück',
    submit: 'Absenden',
    results: 'Ergebnisse',
    score: 'Punktzahl',
    back_to_lobby: 'Zurück zum Eingangsbereich'
  },
  egy: {
    nextButton: 'التالي',
    submitButton: 'إرسال التقييم',
    previousButton: 'السابق',
    retakeButton: 'إعادة التقييم',
    retryButton: 'إعادة المحاولة',
    exitButton: 'خروج',
    returnToLobbyButton: 'العودة إلى الردهة',
    questionLabel: 'سؤال',
    ofLabel: 'من',
    scoreLabel: 'نتيجتك',
    scoreDisplay: 'نتيجتك',
    resultsTitle: 'نتيجتك',
    correctAnswer: 'صحيح',
    incorrectAnswer: 'خطأ',
    answerRequired: 'يرجى تحديد إجابة قبل المتابعة.',
    selectAssessment: 'اختيار التقييم',
    startButton: 'ابدأ',
    errorTitle: 'غير قادر على تحميل التقييم',
    errorMessage: 'نحن آسفون ، ولكن لا يمكن تحميل التقييم في هذا الوقت. يرجى المحاولة مرة أخرى لاحقاً.',
    lobbyErrorTitle: 'فشل تحميل التقييمات',
    lobbyErrorMessage: 'فشل تحميل التقييمات. يرجى المحاولة مرة أخرى لاحقًا.',
    quizErrorTitle: 'حدث خطأ أثناء تحميل الاختبار. يرجى المحاولة مرة أخرى لاحقًا.',
    scaleLabels: {
      0: 'لا أوافق بشدة',
      1: 'لا أوافق',
      2: 'محايد',
      3: 'أوافق',
      4: 'أوافق بشدة'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'التالي',
    previous: 'السابق',
    submit: 'إرسال',
    results: 'النتائج',
    score: 'النتيجة',
    back_to_lobby: 'العودة إلى الردهة'
  },
  el: {
    nextButton: 'Επόμενο',
    submitButton: 'Υποβολή Αξιολόγησης',
    previousButton: 'Προηγούμενο',
    retakeButton: 'Επαναλαμβάνω Αξιολόγηση',
    retryButton: 'Επανάληψη',
    exitButton: 'Έξοδος',
    returnToLobbyButton: 'Επιστροφή στο Λόμπι',
    questionLabel: 'Ερώτηση',
    ofLabel: 'από',
    scoreLabel: 'Η Βαθμολογία Σας',
    scoreDisplay: 'Η Βαθμολογία Σας',
    resultsTitle: 'Το Αποτέλεσμά Σας',
    correctAnswer: 'Σωστό',
    incorrectAnswer: 'Λάθος',
    answerRequired: 'Παρακαλώ επιλέξτε μια απάντηση πριν συνεχίσετε.',
    selectAssessment: 'Επιλογή Αξιολόγησης',
    startButton: 'Έναρξη',
    errorTitle: 'Αδύνατη φόρτωση αξιολόγησης',
    errorMessage: 'Λυπούμαστε, αλλά η αξιολόγηση δεν μπορούσε να φορτωθεί αυτή τη στιγμή. Παρακαλούμε προσπαθήστε ξανά αργότερα.',
    lobbyErrorTitle: 'Αποτυχία φόρτωσης αξιολογήσεων',
    lobbyErrorMessage: 'Αποτυχία φόρτωσης αξιολογήσεων. Παρακαλούμε προσπαθήστε ξανά αργότερα.',
    quizErrorTitle: 'Παρουσιάστηκε σφάλμα κατά τη φόρτωση του κουίζ. Παρακαλούμε προσπαθήστε ξανά αργότερα.',
    scaleLabels: {
      0: 'Διαφωνώ έντονα',
      1: 'Διαφωνώ',
      2: 'Ουδέτερο',
      3: 'Συμφωνώ',
      4: 'Συμφωνώ έντονα'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Επόμενο',
    previous: 'Προηγούμενο',
    submit: 'Υποβολή',
    results: 'Αποτελέσματα',
    score: 'Βαθμολογία',
    back_to_lobby: 'Επιστροφή στο Λόμπι'
  },
  es: {
    nextButton: 'Siguiente',
    submitButton: 'Enviar evaluación',
    previousButton: 'Anterior',
    retakeButton: 'Repetir evaluación',
    retryButton: 'Reintentar',
    exitButton: 'Salir',
    returnToLobbyButton: 'Volver al Vestíbulo',
    questionLabel: 'Pregunta',
    ofLabel: 'de',
    scoreLabel: 'Su Puntuación',
    scoreDisplay: 'Su Puntuación',
    resultsTitle: 'Tu Resultado',
    correctAnswer: 'Correcto',
    incorrectAnswer: 'Incorrecto',
    answerRequired: 'Por favor seleccione una respuesta antes de continuar.',
    selectAssessment: 'Seleccione su evaluación',
    startButton: 'Comenzar',
    errorTitle: 'No se puede cargar la evaluación',
    errorMessage: 'Lo sentimos, pero la evaluación no se pudo cargar en este momento. Por favor, inténtelo de nuevo más tarde.',
    lobbyErrorTitle: 'Error al cargar evaluaciones',
    lobbyErrorMessage: 'Error al cargar evaluaciones. Por favor, inténtelo de nuevo más tarde.',
    quizErrorTitle: 'Ocurrió un error al cargar el cuestionario. Por favor, inténtelo de nuevo más tarde.',
    scaleLabels: {
      0: 'Muy en desacuerdo',
      1: 'En desacuerdo',
      2: 'Neutral',
      3: 'De acuerdo',
      4: 'Muy de acuerdo'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Siguiente',
    previous: 'Anterior',
    submit: 'Enviar',
    results: 'Resultados',
    score: 'Puntuación',
    back_to_lobby: 'Volver al Vestíbulo'
  },
  fr: {
    nextButton: 'Suivant',
    submitButton: 'Soumettre l\'évaluation',
    previousButton: 'Précédent',
    retakeButton: 'Refaire l\'évaluation',
    retryButton: 'Réessayer',
    exitButton: 'Sortir',
    returnToLobbyButton: 'Retour au Vestibule',
    questionLabel: 'Question',
    ofLabel: 'sur',
    scoreLabel: 'Votre Score',
    scoreDisplay: 'Votre Score',
    resultsTitle: 'Votre Résultat',
    correctAnswer: 'Correct',
    incorrectAnswer: 'Incorrect',
    answerRequired: 'Veuillez sélectionner une réponse avant de continuer.',
    selectAssessment: 'Sélectionnez votre évaluation',
    startButton: 'Commencer',
    errorTitle: 'Impossible de charger l\'évaluation',
    errorMessage: 'Nous sommes désolés, mais l\'évaluation n\'a pas pu être chargée pour le moment. Veuillez réessayer plus tard.',
    lobbyErrorTitle: 'Échec du chargement des évaluations',
    lobbyErrorMessage: 'Échec du chargement des évaluations. Veuillez réessayer plus tard.',
    quizErrorTitle: 'Une erreur s\'est produite lors du chargement du quiz. Veuillez réessayer plus tard.',
    scaleLabels: {
      0: 'Fortement en désaccord',
      1: 'En désaccord',
      2: 'Neutre',
      3: 'D\'accord',
      4: 'Fortement d\'accord'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Suivant',
    previous: 'Précédent',
    submit: 'Soumettre',
    results: 'Résultats',
    score: 'Score',
    back_to_lobby: 'Retour au Vestibule'
  },
  it: {
    nextButton: 'Successivo',
    submitButton: 'Invia valutazione',
    previousButton: 'Precedente',
    retakeButton: 'Ripeti valutazione',
    retryButton: 'Riprova',
    exitButton: 'Esci',
    returnToLobbyButton: 'Torna al Vestibolo',
    questionLabel: 'Domanda',
    ofLabel: 'di',
    scoreLabel: 'Il Tuo Punteggio',
    scoreDisplay: 'Il Tuo Punteggio',
    resultsTitle: 'Il Tuo Risultato',
    correctAnswer: 'Corretto',
    incorrectAnswer: 'Sbagliato',
    answerRequired: 'Seleziona una risposta prima di continuare.',
    selectAssessment: 'Seleziona la tua valutazione',
    startButton: 'Inizia',
    errorTitle: 'Impossibile caricare la valutazione',
    errorMessage: 'Siamo spiacenti, ma la valutazione non può essere caricata al momento. Per favore riprova più tardi.',
    lobbyErrorTitle: 'Impossibile caricare le valutazioni',
    lobbyErrorMessage: 'Impossibile caricare le valutazioni. Per favore riprova più tardi.',
    quizErrorTitle: 'Si è verificato un errore durante il caricamento del quiz. Per favore riprova più tardi.',
    scaleLabels: {
      0: 'Fortemente in disaccordo',
      1: 'In disaccordo',
      2: 'Neutrale',
      3: 'D\'accordo',
      4: 'Fortemente d\'accordo'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Successivo',
    previous: 'Precedente',
    submit: 'Invia',
    results: 'Risultati',
    score: 'Punteggio',
    back_to_lobby: 'Torna al Vestibolo'
  },
  ja: {
    nextButton: '次へ',
    submitButton: '評価を送信',
    previousButton: '前へ',
    retakeButton: '評価を再試行',
    retryButton: '再試行',
    exitButton: '終了',
    returnToLobbyButton: 'ロビーに戻る',
    questionLabel: '質問',
    ofLabel: '中',
    scoreLabel: 'あなたのスコア',
    scoreDisplay: 'あなたのスコア',
    resultsTitle: 'あなたの結果',
    correctAnswer: '正解',
    incorrectAnswer: '不正解',
    answerRequired: '続行する前に回答を選択してください。',
    selectAssessment: '評価を選択',
    startButton: '開始',
    errorTitle: '評価をロードできません',
    errorMessage: '申し訳ありませんが、評価を現在ロードできませんでした。後でもう一度お試しください。',
    lobbyErrorTitle: '評価のロードに失敗しました',
    lobbyErrorMessage: '評価のロードに失敗しました。後でもう一度お試しください。',
    quizErrorTitle: 'クイズのロード中にエラーが発生しました。後でもう一度お試しください。',
    scaleLabels: {
      0: '強く反対',
      1: '反対',
      2: '中立',
      3: '賛成',
      4: '強く賛成'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: '次へ',
    previous: '前へ',
    submit: '送信',
    results: '結果',
    score: 'スコア',
    back_to_lobby: 'ロビーに戻る'
  },
  la: {
    nextButton: 'Sequens',
    submitButton: 'Mitte aestimationem',
    previousButton: 'Anterior',
    retakeButton: 'Iterum aestimationem',
    retryButton: 'Conare iterum',
    exitButton: 'Exeunde',
    returnToLobbyButton: 'Redite ad Vestibulum',
    questionLabel: 'Quaestio',
    ofLabel: 'de',
    scoreLabel: 'Tua Punctuatio',
    scoreDisplay: 'Tua Punctuatio',
    resultsTitle: 'Tuum Resultatum',
    correctAnswer: 'Correctum',
    incorrectAnswer: 'Incorrectum',
    answerRequired: 'Quaeso roga responsum priusquam pergas.',
    selectAssessment: 'Elige tuam aestimationem',
    startButton: 'Incepta',
    errorTitle: 'Aestimatio non potest onerari',
    errorMessage: 'Dolemus, sed aestimatio non potest onerari hoc tempore. Quaeso conare iterum postea.',
    lobbyErrorTitle: 'Aestimationes onerari non potuerunt',
    lobbyErrorMessage: 'Aestimationes onerari non potuerunt. Quaeso conare iterum postea.',
    quizErrorTitle: 'Errore factum est dum quaestio onerabatur. Quaeso conare iterum postea.',
    scaleLabels: {
      0: 'Fortiter dissentio',
      1: 'Dissentio',
      2: 'Neutrum',
      3: 'Consenio',
      4: 'Fortiter consentio'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Sequens',
    previous: 'Anterior',
    submit: 'Mitte',
    results: 'Resultata',
    score: 'Punctuatio',
    back_to_lobby: 'Redite ad Vestibulum'
  },
  nl: {
    nextButton: 'Volgende',
    submitButton: 'Beoordeling indienen',
    previousButton: 'Vorige',
    retakeButton: 'Beoordeling opnieuw',
    retryButton: 'Opnieuw proberen',
    exitButton: 'Afsluiten',
    returnToLobbyButton: 'Terug naar Lobby',
    questionLabel: 'Vraag',
    ofLabel: 'van',
    scoreLabel: 'Je Score',
    scoreDisplay: 'Je Score',
    resultsTitle: 'Je Resultaat',
    correctAnswer: 'Correct',
    incorrectAnswer: 'Onjuist',
    answerRequired: 'Selecteer een antwoord voordat u doorgaat.',
    selectAssessment: 'Selecteer uw beoordeling',
    startButton: 'Start',
    errorTitle: 'Kan beoordeling niet laden',
    errorMessage: 'Het spijt ons, maar de beoordeling kon op dit moment niet worden geladen. Probeer het later opnieuw.',
    lobbyErrorTitle: 'Kan beoordelingen niet laden',
    lobbyErrorMessage: 'Kan beoordelingen niet laden. Probeer het later opnieuw.',
    quizErrorTitle: 'Er is een fout opgetreden bij het laden van de quiz. Probeer het later opnieuw.',
    scaleLabels: {
      0: 'Helemaal mee oneens',
      1: 'Mee oneens',
      2: 'Neutraal',
      3: 'Mee eens',
      4: 'Helemaal mee eens'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Volgende',
    previous: 'Vorige',
    submit: 'Indienen',
    results: 'Resultaten',
    score: 'Score',
    back_to_lobby: 'Terug naar Lobby'
  },
  no: {
    nextButton: 'Neste',
    submitButton: 'Send inn vurdering',
    previousButton: 'Forrige',
    retakeButton: 'Ta vurdering på nytt',
    retryButton: 'Prøv på nytt',
    exitButton: 'Avslutt',
    returnToLobbyButton: 'Tilbake til Lobby',
    questionLabel: 'Spørsmål',
    ofLabel: 'av',
    scoreLabel: 'Din Poengsum',
    scoreDisplay: 'Din Poengsum',
    resultsTitle: 'Ditt Resultat',
    correctAnswer: 'Riktig',
    incorrectAnswer: 'Feil',
    answerRequired: 'Vennligst velg et svar før du fortsetter.',
    selectAssessment: 'Velg din vurdering',
    startButton: 'Start',
    errorTitle: 'Kan ikke laste vurdering',
    errorMessage: 'Vi er lei oss, men vurderingen kunne ikke lastes inn på dette tidspunktet. Vennligst prøv igjen senere.',
    lobbyErrorTitle: 'Kunne ikke laste vurderinger',
    lobbyErrorMessage: 'Kunne ikke laste vurderinger. Vennligst prøv igjen senere.',
    quizErrorTitle: 'Det oppstod en feil ved lasting av spørsmålet. Vennligst prøv igjen senere.',
    scaleLabels: {
      0: 'Helt uenig',
      1: 'Uenig',
      2: 'Nøytral',
      3: 'Enig',
      4: 'Helt enig'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Neste',
    previous: 'Forrige',
    submit: 'Send',
    results: 'Resultater',
    score: 'Poengsum',
    back_to_lobby: 'Tilbake til Lobby'
  },
  pl: {
    nextButton: 'Następny',
    submitButton: 'Wyślij ocenę',
    previousButton: 'Poprzedni',
    retakeButton: 'Ponów ocenę',
    retryButton: 'Spróbuj ponownie',
    exitButton: 'Wyjdź',
    returnToLobbyButton: 'Powrót do Hallu',
    questionLabel: 'Pytanie',
    ofLabel: 'z',
    scoreLabel: 'Twój Wynik',
    scoreDisplay: 'Twój Wynik',
    resultsTitle: 'Twój Wynik',
    correctAnswer: 'Poprawna',
    incorrectAnswer: 'Niepoprawna',
    answerRequired: 'Proszę wybrać odpowiedź przed przejściem dalej.',
    selectAssessment: 'Wybierz swoją ocenę',
    startButton: 'Rozpocznij',
    errorTitle: 'Nie można załadować oceny',
    errorMessage: 'Przykro namy, ale ocena nie mogła zostać załadowana w tym czasie. Spróbuj ponownie później.',
    lobbyErrorTitle: 'Nie udało się załadować ocen',
    lobbyErrorMessage: 'Nie udało się załadować ocen. Spróbuj ponownie później.',
    quizErrorTitle: 'Wystąpił błąd podczas ładowania quizu. Spróbuj ponownie później.',
    scaleLabels: {
      0: 'Zdecydowanie się nie zgadzam',
      1: 'Nie zgadzam',
      2: 'Neutralny',
      3: 'Zgadzam',
      4: 'Zdecydowanie się zgadzam'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Dalej',
    previous: 'Wstecz',
    submit: 'Wyślij',
    results: 'Wyniki',
    score: 'Wynik',
    back_to_lobby: 'Powrót do lobby'
  },
  pt: {
    nextButton: 'Próximo',
    submitButton: 'Enviar avaliação',
    previousButton: 'Anterior',
    retakeButton: 'Repetir avaliação',
    retryButton: 'Tentar novamente',
    exitButton: 'Sair',
    returnToLobbyButton: 'Voltar ao Vestíbulo',
    questionLabel: 'Pergunta',
    ofLabel: 'de',
    scoreLabel: 'Sua Pontuação',
    scoreDisplay: 'Sua Pontuação',
    resultsTitle: 'Seu Resultado',
    correctAnswer: 'Correto',
    incorrectAnswer: 'Incorreto',
    answerRequired: 'Por favor, selecione uma resposta antes de continuar.',
    selectAssessment: 'Selecione sua avaliação',
    startButton: 'Começar',
    errorTitle: 'Não é possível carregar a avaliação',
    errorMessage: 'Desculpe-nos, mas a avaliação não pôde ser carregada neste momento. Por favor, tente novamente mais tarde.',
    lobbyErrorTitle: 'Falha ao carregar avaliações',
    lobbyErrorMessage: 'Falha ao carregar avaliações. Por favor, tente novamente mais tarde.',
    quizErrorTitle: 'Ocorreu um erro ao carregar o questionário. Por favor, tente novamente mais tarde.',
    scaleLabels: {
      0: 'Discordo totalmente',
      1: 'Discordo',
      2: 'Neutro',
      3: 'Concordo',
      4: 'Concordo totalmente'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: 'Próximo',
    previous: 'Anterior',
    submit: 'Enviar',
    results: 'Resultados',
    score: 'Pontuação',
    back_to_lobby: 'Voltar ao Vestíbulo'
  },
  zh: {
    nextButton: '下一题',
    submitButton: '提交评估',
    previousButton: '上一题',
    retakeButton: '重新评估',
    retryButton: '重试',
    exitButton: '退出',
    returnToLobbyButton: '返回大厅',
    questionLabel: '问题',
    ofLabel: '共',
    scoreLabel: '你的分数',
    scoreDisplay: '你的分数',
    resultsTitle: '你的结果',
    correctAnswer: '正确',
    incorrectAnswer: '错误',
    answerRequired: '请选择答案后再继续。',
    selectAssessment: '选择评估',
    startButton: '开始',
    errorTitle: '无法加载评估',
    errorMessage: '很抱歉，评估目前无法加载。请稍后再试。',
    lobbyErrorTitle: '加载评估失败',
    lobbyErrorMessage: '加载评估失败。请稍后再试。',
    quizErrorTitle: '加载测验时发生错误。请稍后再试。',
    scaleLabels: {
      0: '强烈不同意',
      1: '不同意',
      2: '中立',
      3: '同意',
      4: '强烈同意'
    },
    // Additional UI text keys for quiz engine (simple key aliases)
    next: '下一题',
    previous: '上一题',
    submit: '提交',
    results: '结果',
    score: '分数',
    back_to_lobby: '返回大厅'
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}
