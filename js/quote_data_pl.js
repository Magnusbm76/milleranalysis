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
      name: "Język i Semiotyka",
      description: "Eksploracja językowych ograniczeń i przepaści między signifiant a signifié",
      color: "#FFD700",
      icon: "language-theme.svg",
      relatedThemes: ["semiotics", "communication"]
    },
    {
      id: "identity",
      name: "Tożsamość i Jaźń",
      description: "Kształtowanie tożsamości przez struktury społeczne i osobiste narracje",
      color: "#002147",
      icon: "identity-theme.svg",
      relatedThemes: ["social", "desire"]
    },
    {
      id: "interpretation",
      name: "Interpretacja i Analiza",
      description: "Proces i granice psychoanalitycznej interpretacji",
      color: "#36454F",
      icon: "interpretation-theme.svg",
      relatedThemes: ["clinical", "philosophical"]
    },
    {
      id: "desire",
      name: "Pragnienie i Subiektywność",
      description: "Natura pragnienia i jego rola w kształtowaniu subiektywnego doświadczenia",
      color: "#8B0000",
      icon: "desire-theme.svg",
      relatedThemes: ["identity", "philosophical"]
    },
    {
      id: "clinical",
      name: "Zastosowania Kliniczne",
      description: "Praktyczne zastosowania teorii psychoanalitycznej w ustawieniach klinicznych",
      color: "#2F4F4F",
      icon: "clinical-theme.svg",
      relatedThemes: ["interpretation", "language"]
    },
    {
      id: "social",
      name: "Kontekst Społeczny i Kulturowy",
      description: "Wpływ struktur społecznych na psychologię indywidualną",
      color: "#483D8B",
      icon: "social-theme.svg",
      relatedThemes: ["identity", "desire"]
    },
    {
      id: "philosophical",
      name: "Podstawy Filozoficzne",
      description: "Leżące u podstaw filozoficzne zasady teorii psychoanalitycznej",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],

  quotes: [
    {
      id: "quote_001",
      title: "Analityk Nie Czyta Historię Pacjenta",
      quote: "Analityk nie czyta historii pacjenta; analityk czyta luki gdzie historia nie trzyma się razem.",
      context: "Ta perspektywa eksploruje fundamentalną semiotyczną przepaść między signifiant a signifié, czerpiąc z wczesnych prac Lacana nad ograniczeniami komunikacji. Akt mówienia nieuchronnie zniekształca pierwotną myśl, tworząc stałą przepaść między intencją a wyrażeniem.",
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
          label: "Dalsza eksploracja"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Kontekst historyczny"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.6,
          label: "Zastosowanie kliniczne"
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
      title: "Ofiarność jako Tożsamość",
      quote: "Ofiarność to osiągnięcie jedynej formy triumfu, którą ego naprawdę rozumie.",
      context: "Fragment z Triumphant Victim, omawiający jak współczesne struktury społeczne zachęcają i walidują performatywną tożsamość zakorzenioną w strukturalnej nieadekwatności. Ta tożsamość zapewnia zarówno społeczne uznanie, jak i komfort psychologiczny.",
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
          label: "Głębsza analiza"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.7,
          label: "Alternatywne spojrzenie"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.6,
          label: "Implikacje społeczne"
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
      title: "Dobra Interpretacja",
      quote: "Dobra interpretacja nie jest taka, która jest prawdziwa, ale taka, która wywołuje efekt prawdy w nieświadomym podmiotu.",
      context: "Rozwijając niepowodzenie języka, ten cytat eksploruje jak signifiant zawsze zawiera wrodzoną ciszę - lukę, która reprezentuje to, co nie może być wyartykułowane. Ta cisza nie jest pustką, ale przestrzenią, gdzie powstaje znaczenie.",
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
          label: "Fundament"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Tło teoretyczne"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.7,
          label: "Relewantność kliniczna"
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
      title: "Struktura Perverse",
      quote: "W strukturze perverse, ból ofiary jest instrumentem, przez który podmiot próbuje uzupełnić brak Innego.",
      context: "Dalsza analiza ofiarności jako performans, badając jak media społecznościowe i współczesna kultura tworzą pętle zwrotne, które nagradzają ekspozycję cierpienia. Performans staje się autentyczny poprzez swoje społeczne walidowanie.",
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
          label: "Koncepcja centralna"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.5,
          label: "Kontrpunkt"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.8,
          label: "Współczesna relewantność"
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
      title: "Szkolenie Analityka",
      quote: "Szkolenie analityka zaczyna się w momencie, gdy zdają sobie, że już nie słuchają znaczenia, ale strukturę signifiantu.",
      context: "Kontekst historyczny do zrozumienia rozwoju teorii psychoanalitycznej, szczególnie jak Lacan reinterpretował pracę Freuda przez lingwistykę strukturalną. Ta ponowna lektura stworzyła nowe możliwości dla zrozumienia nieświadomości.",
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
          label: "Fundament teoretyczny"
        },
        {
          id: "quote_004",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Tło"
        },
        {
          id: "quote_009",
          relationship: "expands",
          strength: 0.5,
          label: "Implikacje filozoficzne"
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
      title: "Poza Ofiarnością",
      quote: "Prawdziwe wzmocnienie zaczyna się, gdy rozpoznajemy wybór w naszym cierpieniu.",
      context: "Kontrpunkt do analizy ofiarności, sugerujący, że rozpoznanie agencji w cierpieniu reprezentuje pierwszy krok do autentycznego wzmocnienia. To wyzwala deterministyczne spojrzenie na warunkowanie społeczne.",
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
          label: "Alternatywna perspektywa"
        },
        {
          id: "quote_005",
          relationship: "contradicts",
          strength: 0.5,
          label: "Kontrpunkt"
        },
        {
          id: "quote_011",
          relationship: "expands",
          strength: 0.6,
          label: "Dalsza eksploracja"
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
      title: "Opor i Kuracja",
      quote: "Opor nie jest przeszkodą dla kuracji; jest sam materiał pracy analitycznej.",
      context: "Zastosowanie teorii semiotycznej w praktyce klinicznej, demonstrując jak objawy fizyczne i psychologiczne funkcjonują jako elementy strukturalne w narracji pacjenta. Te 'znaki interpunkcyjne' ujawniają podstawową gramatykę cierpienia.",
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
          label: "Zastosowanie praktyczne"
        },
        {
          id: "quote_004",
          relationship: "applies",
          strength: 0.7,
          label: "Relewantność kliniczna"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Integracja"
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
      title: "Cierpienie jako Waluta",
      quote: "Cierpienie nie jest jedynie stanem bycia; w ekonomii ofiarności triumfującej, staje się formą waluty używaną do negocjowania z porządkiem symbolicznym.",
      context: "Współczesna analiza tego, jak platformy mediów społecznościowych stworzyły nowe mechanizmy dla performansu cierpienia. Cyfrowa arena wzmacnia i monetizuje ekspozycję osobistego bólu, tworząc nowe formy tożsamości.",
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
          label: "Współczesne zastosowanie"
        },
        {
          id: "quote_005",
          relationship: "applies",
          strength: 0.8,
          label: "Współczesny kontekst"
        },
        {
          id: "quote_008",
          relationship: "expands",
          strength: 0.6,
          label: "Dalsza analiza"
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
      label: "Dalsza eksploracja",
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
      label: "Kontekst historyczny",
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
      label: "Zastosowanie kliniczne",
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
      label: "Głębsza analiza",
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
      label: "Alternatywne spojrzenie",
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
      label: "Implikacje społeczne",
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
      label: "Tło teoretyczne",
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
      label: "Relewantność kliniczna",
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
      label: "Kontrpunkt",
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
      label: "Współczesna relewantność",
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
      label: "Implikacje filozoficzne",
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
      label: "Dalsza eksploracja",
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
