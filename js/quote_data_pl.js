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
      title: "Niepowodzenie Języka",
      quote: "Każde zdanie jest już zdradą pierwotnej myśli.",
      context: "Ta wiedza eksploruje fundamentalną semiotyczną przepaść między signifiant a signifié, czerpiąc z wczesnych prac Lacana nad ograniczeniami komunikacji. Akt mówienia nieuchronnie zniekształca pierwotną myśl, tworząc stałą przepaść między intencją a wyrażeniem.",
      source: {
        work: "Do You Read Me",
        page: 42,
        chapter: "Rozdział 3: Semiotyczny Podział",
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
      quote: "Przyjęcie roli ofiary to osiągnięcie jedynej formy triumfu, jaką ego naprawdę rozumie.",
      context: "Fragment z Triumphant Victim, omawiający jak współczesne struktury społeczne zachęcają i walidują performatywną tożsamość zakorzenioną w strukturalnej nieadekwatności. Ta tożsamość zapewnia zarówno społeczne uznanie, jak i komfort psychologiczny.",
      source: {
        work: "Triumphant Victim",
        page: 87,
        chapter: "Rozdział 5: Performans Cierpienia",
        year: 2021
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
      id: "quote_003",
      title: "Koniec Interpretacji",
      quote: "Celem psychoanalizy nie jest dostarczanie odpowiedzi, ale zakończenie pragnienia ich posiadania.",
      context: "Centralna zasada filozofii Millera: prawdziwa resolucja nadchodzi, gdy podmiot przestaje projektować pragnienie dopełnienia na analityka lub zewnętrzną narrację. Podróż terapeutyczna kończy się nie zrozumieniem, ale akceptacją.",
      source: {
        work: "Triumphant Victim",
        page: 156,
        chapter: "Rozdział 8: Poza Analizą",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_006",
          relationship: "expands",
          strength: 0.8,
          label: "Proces terapeutyczny"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.7,
          label: "Implikacje filozoficzne"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Integracja"
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
      title: "Cisza Signifiantu",
      quote: "Między słowem a myślą leży przepaść, której sam język nie może przekroczyć.",
      context: "Rozwijając niepowodzenie języka, ten cytat eksploruje jak signifiant zawsze zawiera wrodzoną ciszę - lukę, która reprezentuje to, co nie może być artykułowane. Ta cisza nie jest pustką, ale przestrzenią, gdzie rodzi się znaczenie.",
      source: {
        work: "Do You Read Me",
        page: 63,
        chapter: "Rozdział 4: Niewypowiedziane",
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
      title: "Performans Cierpienia",
      quote: "Współczesna tożsamość to scena, na której cierpienie jest jednocześnie scenariuszem i oklaskami.",
      context: "Dalsza analiza ofiarności jako performansu, badająca jak media społecznościowe i współczesna kultura tworzą pętle zwrotne, które nagradzają ekspozycję cierpienia. Performans staje się autentyczny poprzez swoje społeczne walidowanie.",
      source: {
        work: "Triumphant Victim",
        page: 112,
        chapter: "Rozdział 6: Scena Społeczna",
        year: 2021
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
      id: "quote_006",
      title: "Zakończenie Terapeutyczne",
      quote: "Sukces analityka mierzony jest jego własną przestarzałością.",
      context: "Eksploracja paradoksu praktyki terapeutycznej, gdzie celem jest uczynienie się niepotrzebnym. Prawdziwe leczenie następuje, gdy pacjent nie potrzebuje już interpretacji analityka, ale może nawigować po własnym krajobrazie psychicznym.",
      source: {
        work: "Triumphant Victim",
        page: 178,
        chapter: "Rozdział 9: Koniec Analizy",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "expands",
          strength: 0.8,
          label: "Zastosowanie praktyczne"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.6,
          label: "Rozważania etyczne"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Integracja"
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
      title: "Dziedzictwo Lacana",
      quote: "Powrót do Freuda nie jest powtórzeniem, ale ponowną lekturą przez pryzmat strukturalizmu.",
      context: "Kontekst historyczny dla zrozumienia rozwoju teorii psychoanalitycznej, szczególnie jak Lacan reinterpretował pracę Freuda przez strukturalną lingwistykę. Ta ponowna lektura stworzyła nowe możliwości dla zrozumienia nieświadomości.",
      source: {
        work: "Do You Read Me",
        page: 28,
        chapter: "Rozdział 2: Strukturalny Zwrot",
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
        work: "Triumphant Victim",
        page: 134,
        chapter: "Rozdział 7: Możliwość Wyboru",
        year: 2021
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
      id: "quote_009",
      title: "Etyka Interpretacji",
      quote: "Interpretować to wykonywać władzę, ale odmawiać interpretacji to porzucić odpowiedzialność.",
      context: "Filozoficzne zbadanie etycznego dylematu inherentnego w praktyce psychoanalitycznej. Analityk musi nawigować między arogancją roszczenia wiedzy a zaniedbaniem odmowy oferowania wskazówek.",
      source: {
        work: "Triumphant Victim",
        page: 201,
        chapter: "Rozdział 10: Dylemat Etyczny",
        year: 2021
      },
      themes: ["interpretation", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "questions",
          strength: 0.7,
          label: "Pytania etyczne"
        },
        {
          id: "quote_006",
          relationship: "questions",
          strength: 0.6,
          label: "Etyka zawodowa"
        },
        {
          id: "quote_007",
          relationship: "expands",
          strength: 0.5,
          label: "Tło teoretyczne"
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
      title: "Semiotyka Kliniczna",
      quote: "Mowa pacjenta to tekst, w którym objawy są znakami interpunkcyjnymi.",
      context: "Zastosowanie teorii semiotycznej w praktyce klinicznej, demonstrujące jak objawy fizyczne i psychologiczne funkcjonują jako elementy strukturalne w narracji pacjenta. Te 'znaki interpunkcyjne' ujawniają podstawową gramatykę cierpienia.",
      source: {
        work: "Do You Read Me",
        page: 95,
        chapter: "Rozdział 5: Tekst Kliniczny",
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
      title: "Cierpienie w Mediach Społecznościowych",
      quote: "Cyfrowa arena przekształciła prywatny ból w publiczny performans.",
      context: "Współczesna analiza tego, jak platformy mediów społecznościowych stworzyły nowe mechanizmy dla performansu cierpienia. Cyfrowa arena wzmacnia i monetyzuje ekspozycję osobistego bólu, tworząc nowe formy tożsamości.",
      source: {
        work: "Triumphant Victim",
        page: 145,
        chapter: "Rozdział 7: Cyfrowa Scena",
        year: 2021
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
    },
    {
      id: "quote_012",
      title: "Zintegrowane Ja",
      quote: "Całość nie jest brakiem sprzeczności, ale uściskiem paradoksu.",
      context: "Synteza wielu tematów, sugerująca, że zdrowie psychiczne nie pochodzi z rozwiązywania sprzeczności, ale z rozwijania zdolności do utrzymywania paradoksalnych prawd jednocześnie. To reprezentuje kulminację podróży analitycznej.",
      source: {
        work: "Triumphant Victim",
        page: 223,
        chapter: "Rozdział 11: Poza Resolucją",
        year: 2021
      },
      themes: ["interpretation", "desire"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Integracja"
        },
        {
          id: "quote_006",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Cel terapeutyczny"
        },
        {
          id: "quote_010",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Integracja kliniczna"
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
      from: "quote_003",
      to: "quote_006",
      type: "expands",
      strength: 0.8,
      label: "Proces terapeutyczny",
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
      label: "Implikacje filozoficzne",
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
      label: "Integracja",
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
      from: "quote_006",
      to: "quote_009",
      type: "questions",
      strength: 0.6,
      label: "Rozważania etyczne",
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
      label: "Cel terapeutyczny",
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
    },
    {
      from: "quote_010",
      to: "quote_012",
      type: "synthesizes",
      strength: 0.5,
      label: "Integracja kliniczna",
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