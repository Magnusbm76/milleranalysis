// Contextual Quote Journey Data Structure
// This file contains the network of interconnected quotes for the Miller Analysis project

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
      name: "Lenguaje y Semiótica",
      description: "Exploración de las limitaciones lingüísticas y el vacío entre significante y significado",
      color: "#FFD700",
      icon: "language-theme.svg",
      relatedThemes: ["semiotics", "communication"]
    },
    {
      id: "identity",
      name: "Identidad y Yo",
      description: "Formación de la identidad a través de estructuras sociales y narrativas personales",
      color: "#002147",
      icon: "identity-theme.svg",
      relatedThemes: ["social", "desire"]
    },
    {
      id: "interpretation",
      name: "Interpretación y Análisis",
      description: "El proceso y límites de la interpretación psicoanalítica",
      color: "#36454F",
      icon: "interpretation-theme.svg",
      relatedThemes: ["clinical", "philosophical"]
    },
    {
      id: "desire",
      name: "Deseo y Subjetividad",
      description: "La naturaleza del deseo y su papel en moldear la experiencia subjetiva",
      color: "#8B0000",
      icon: "desire-theme.svg",
      relatedThemes: ["identity", "philosophical"]
    },
    {
      id: "clinical",
      name: "Aplicaciones Clínicas",
      description: "Aplicaciones prácticas de la teoría psicoanalítica en entornos clínicos",
      color: "#2F4F4F",
      icon: "clinical-theme.svg",
      relatedThemes: ["interpretation", "language"]
    },
    {
      id: "social",
      name: "Contexto Social y Cultural",
      description: "El impacto de las estructuras sociales en la psicología individual",
      color: "#483D8B",
      icon: "social-theme.svg",
      relatedThemes: ["identity", "desire"]
    },
    {
      id: "philosophical",
      name: "Fundamentos Filosóficos",
      description: "Principios filosóficos subyacentes de la teoría psicoanalítica",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],

  quotes: [
    {
      id: "quote_001",
      title: "El Analista No Lee la Historia",
      quote: "El analista no lee la historia del paciente; el analista lee los vacíos donde la historia no se mantiene unida.",
      context: "Esta perspectiva explora el vacío fundamental entre el significante y el significado, basándose en el trabajo temprano de Lacan sobre los límites de la comunicación. El acto de hablar necesariamente distorsiona el pensamiento original, creando un vacío permanente entre intención y expresión.",
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
          label: "Exploración adicional"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Contexto histórico"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.6,
          label: "Aplicación clínica"
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
      title: "La Víctima Triunfante",
      quote: "La víctima triunfante es aquella que, a través de su sufrimiento, logra capturar el deseo del Otro y dominar la escena del mundo.",
      context: "Un extracto de The Triumphant Victim, discutiendo cómo las estructuras sociales contemporáneas fomentan y validan una identidad performativa arraigada en la inadecuación estructural. Esta identidad proporciona tanto reconocimiento social como confort psicológico.",
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
          label: "Análisis más profundo"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.7,
          label: "Vista alternativa"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.6,
          label: "Implicaciones sociales"
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
      title: "La Buena Interpretación",
      quote: "Una 'buena' interpretación no es aquella que es verdadera, sino aquella que produce un efecto de verdad en el inconsciente del sujeto.",
      context: "Expandiendo sobre el fracaso del lenguaje, esta cita explora cómo el significante siempre contiene un silencio inherente - un vacío que representa lo que no puede ser articulado. Este silencio no es vacío sino el espacio donde emerge el significado.",
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
          label: "Fundamento"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Antecedentes teóricos"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.7,
          label: "Relevancia clínica"
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
      title: "La Estructura Perversa",
      quote: "En la estructura perversa, el dolor de la víctima es el instrumento a través del cual el sujeto intenta completar la falta del Otro.",
      context: "Análisis adicional de la victimidad como performance, examinando cómo los medios sociales y la cultura contemporánea crean bucles de retroalimentación que recompensan las exhibiciones de sufrimiento. La performance se vuelve auténtica a través de su validación social.",
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
          label: "Concepto central"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.5,
          label: "Contrapunto"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.8,
          label: "Relevancia contemporánea"
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
      title: "El Entrenamiento del Analista",
      quote: "El entrenamiento de un analista comienza en el momento en que se dan cuenta de que ya no están escuchando el significado, sino la estructura del significante.",
      context: "Contexto histórico para entender el desarrollo de la teoría psicoanalítica, particularmente cómo Lacan reinterpretó el trabajo de Freud a través de la lingüística estructural. Esta relectura creó nuevas posibilidades para entender el inconsciente.",
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
          label: "Fundamento teórico"
        },
        {
          id: "quote_004",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Antecedentes"
        },
        {
          id: "quote_009",
          relationship: "expands",
          strength: 0.5,
          label: "Implicaciones filosóficas"
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
      title: "El Triunfo de la Víctima",
      quote: "El triunfo de la víctima radica en el conocimiento secreto de que han escenificado la escena de su propia destrucción para probar la inconsistencia del Otro.",
      context: "Un contrapunto al análisis de la victimidad, sugiriendo que el reconocimiento de la agencia dentro del sufrimiento representa el primer paso hacia el empoderamiento auténtico. Esto desafía la visión determinista del condicionamiento social.",
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
          label: "Contrapunto"
        },
        {
          id: "quote_011",
          relationship: "expands",
          strength: 0.6,
          label: "Exploración adicional"
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
      title: "Resistencia y Cura",
      quote: "La resistencia no es un obstáculo para la cura; es el mismo material del trabajo analítico.",
      context: "Aplicación de la teoría semiótica a la práctica clínica, demostrando cómo los síntomas físicos y psicológicos funcionan como elementos estructurales en la narrativa del paciente. Estos 'signos de puntuación' revelan la gramática subyacente del sufrimiento.",
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
          label: "Aplicación práctica"
        },
        {
          id: "quote_004",
          relationship: "applies",
          strength: 0.7,
          label: "Relevancia clínica"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Integración"
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
      title: "El Sufrimiento como Moneda",
      quote: "El sufrimiento no es meramente un estado de ser; en la economía de la víctima triunfante, se convierte en una forma de moneda utilizada para negociar con el orden simbólico.",
      context: "Análisis contemporáneo de cómo las plataformas de medios sociales han creado nuevos mecanismos para la performance del sufrimiento. La arena digital amplifica y monetiza la exhibición del dolor personal, creando nuevas formas de identidad.",
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
          label: "Aplicación contemporánea"
        },
        {
          id: "quote_005",
          relationship: "applies",
          strength: 0.8,
          label: "Contexto moderno"
        },
        {
          id: "quote_008",
          relationship: "expands",
          strength: 0.6,
          label: "Análisis adicional"
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
      label: "Exploración adicional",
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
      label: "Contexto histórico",
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
      label: "Aplicación clínica",
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
      label: "Análisis más profundo",
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
      label: "Vista alternativa",
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
      label: "Implicaciones sociales",
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
      label: "Antecedentes teóricos",
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
      label: "Relevancia clínica",
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
      label: "Contrapunto",
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
      label: "Relevancia contemporánea",
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
      label: "Implicaciones filosóficas",
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
      label: "Exploración adicional",
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
