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
      title: "El Fracaso del Lenguaje",
      quote: "Toda oración es ya una traición al pensamiento inicial.",
      context: "Esta perspicacia explora el vacío semiótico fundamental entre el significante y el significado, basándose en el trabajo temprano de Lacan sobre los límites de la comunicación. El acto de hablar necesariamente distorsiona el pensamiento original, creando un vacío permanente entre intención y expresión.",
      source: {
        work: "Do You Read Me",
        page: 42,
        chapter: "Capítulo 3: La División Semiótica",
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
      title: "La Víctima como Identidad",
      quote: "Adoptar el rol de víctima es lograr la única forma de triunfo que el yo realmente comprende.",
      context: "Un extracto de Triumphant Victim, que discute cómo las estructuras sociales contemporáneas fomentan y validan una identidad performativa arraigada en la inadequación estructural. Esta identidad proporciona tanto reconocimiento social como confort psicológico.",
      source: {
        work: "Triumphant Victim",
        page: 87,
        chapter: "Capítulo 5: La Representación del Sufrimiento",
        year: 2021
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
      id: "quote_003",
      title: "El Fin de la Interpretación",
      quote: "El propósito del psicoanálisis no es proporcionar respuestas, sino terminar el deseo de ellas.",
      context: "Un tenet central de la filosofía de Miller: que la verdadera resolución llega cuando el sujeto cesa de proyectar el deseo de completitud sobre el analista o una narrativa externa. El viaje terapéutico termina no con comprensión sino con aceptación.",
      source: {
        work: "Triumphant Victim",
        page: 156,
        chapter: "Capítulo 8: Más Allá del Análisis",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_006",
          relationship: "expands",
          strength: 0.8,
          label: "Proceso terapéutico"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.7,
          label: "Implicaciones filosóficas"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Integración"
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
      title: "El Silencio del Significante",
      quote: "Entre la palabra y el pensamiento yace un abismo que el propio lenguaje no puede cruzar.",
      context: "Expandiendo sobre el fracaso del lenguaje, esta cita explora cómo el significante siempre contiene un silencio inherente - un vacío que representa lo que no puede ser articulado. Este silencio no es vacío sino el espacio donde emerge el significado.",
      source: {
        work: "Do You Read Me",
        page: 63,
        chapter: "Capítulo 4: Lo No Dicho",
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
      title: "La Representación del Sufrimiento",
      quote: "La identidad moderna es un escenario donde el sufrimiento es tanto el guion como el aplauso.",
      context: "Análisis adicional de la victimidad como representación, examinando cómo las redes sociales y la cultura contemporánea crean bucles de retroalimentación que recompensan las exhibiciones de sufrimiento. La representación se vuelve auténtica a través de su validación social.",
      source: {
        work: "Triumphant Victim",
        page: 112,
        chapter: "Capítulo 6: El Escenario Social",
        year: 2021
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
      id: "quote_006",
      title: "Terminación Terapéutica",
      quote: "El éxito del analista se mide por su propia obsolescencia.",
      context: "Explorando la paradoja de la práctica terapéutica donde el objetivo es volverse innecesario. La verdadera curación ocurre cuando el paciente ya no necesita la interpretación del analista sino puede navegar su propio paisaje psíquico.",
      source: {
        work: "Triumphant Victim",
        page: 178,
        chapter: "Capítulo 9: El Fin del Análisis",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "expands",
          strength: 0.8,
          label: "Aplicación práctica"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.6,
          label: "Consideraciones éticas"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Integración"
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
      title: "El Legado de Lacan",
      quote: "El retorno a Freud no es una repetición sino una relectura a través del lente del estructuralismo.",
      context: "Contexto histórico para entender el desarrollo de la teoría psicoanalítica, particularmente cómo Lacan reinterpretó el trabajo de Freud a través de la lingüística estructural. Esta relectura creó nuevas posibilidades para entender el inconsciente.",
      source: {
        work: "Do You Read Me",
        page: 28,
        chapter: "Capítulo 2: El Giro Estructural",
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
      title: "Más Allá de la Victimidad",
      quote: "El verdadero empoderamiento comienza cuando reconocemos la elección en nuestro sufrimiento.",
      context: "Un contrapunto al análisis de la victimidad, sugiriendo que el reconocimiento de la agencia dentro del sufrimiento representa el primer paso hacia el empoderamiento auténtico. Esto desafía la visión determinista del condicionamiento social.",
      source: {
        work: "Triumphant Victim",
        page: 134,
        chapter: "Capítulo 7: La Posibilidad de Elección",
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
      id: "quote_009",
      title: "La Ética de la Interpretación",
      quote: "Interpretar es ejercer poder, pero rechazar la interpretación es abandonar la responsabilidad.",
      context: "Examen filosófico del dilema ético inherente a la práctica psicoanalítica. El analista debe navegar entre la arrogancia de pretender saber y la negligencia de negarse a ofrecer orientación.",
      source: {
        work: "Triumphant Victim",
        page: 201,
        chapter: "Capítulo 10: El Dilema Ético",
        year: 2021
      },
      themes: ["interpretation", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "questions",
          strength: 0.7,
          label: "Cuestiones éticas"
        },
        {
          id: "quote_006",
          relationship: "questions",
          strength: 0.6,
          label: "Ética profesional"
        },
        {
          id: "quote_007",
          relationship: "expands",
          strength: 0.5,
          label: "Antecedentes teóricos"
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
      title: "Semiótica Clínica",
      quote: "El discurso del paciente es un texto donde los síntomas son signos de puntuación.",
      context: "Aplicación de la teoría semiótica a la práctica clínica, demostrando cómo los síntomas físicos y psicológicos funcionan como elementos estructurales en la narrativa del paciente. Estos 'signos de puntuación' revelan la gramática subyacente del sufrimiento.",
      source: {
        work: "Do You Read Me",
        page: 95,
        chapter: "Capítulo 5: El Texto Clínico",
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
      title: "Sufrimiento en Redes Sociales",
      quote: "La arena digital ha transformado el dolor privado en representación pública.",
      context: "Análisis contemporáneo de cómo las plataformas de redes sociales han creado nuevos mecanismos para la representación del sufrimiento. La arena digital amplifica y monetiza la exhibición del dolor personal, creando nuevas formas de identidad.",
      source: {
        work: "Triumphant Victim",
        page: 145,
        chapter: "Capítulo 7: El Escenario Digital",
        year: 2021
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
    },
    {
      id: "quote_012",
      title: "El Yo Integrado",
      quote: "La totalidad no es la ausencia de contradicción sino la abrazada de la paradoja.",
      context: "Síntesis de múltiples temas, sugiriendo que la salud psicológica proviene no de resolver contradicciones sino de desarrollar la capacidad de mantener verdades paradójicas simultáneamente. Esto representa la culminación del viaje analítico.",
      source: {
        work: "Triumphant Victim",
        page: 223,
        chapter: "Capítulo 11: Más Allá de la Resolución",
        year: 2021
      },
      themes: ["interpretation", "desire"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Integración"
        },
        {
          id: "quote_006",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Objetivo terapéutico"
        },
        {
          id: "quote_010",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Integración clínica"
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
      from: "quote_003",
      to: "quote_006",
      type: "expands",
      strength: 0.8,
      label: "Proceso terapéutico",
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
      label: "Implicaciones filosóficas",
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
      label: "Integración",
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
      from: "quote_006",
      to: "quote_009",
      type: "questions",
      strength: 0.6,
      label: "Consideraciones éticas",
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
      label: "Objetivo terapéutico",
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
    },
    {
      from: "quote_010",
      to: "quote_012",
      type: "synthesizes",
      strength: 0.5,
      label: "Integración clínica",
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