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
    ]
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}
