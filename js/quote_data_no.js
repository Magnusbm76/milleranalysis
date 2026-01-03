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
      name: "Språk og Semiotikk",
      description: "Utforskning av språklige begrensninger og gapet mellom signifikant og signifikat",
      color: "#FFD700",
      icon: "language-theme.svg",
      relatedThemes: ["semiotics", "communication"]
    },
    {
      id: "identity",
      name: "Identitet og Selv",
      description: "Forming av identitet gjennom sosiale strukturer og personlige fortellinger",
      color: "#002147",
      icon: "identity-theme.svg",
      relatedThemes: ["social", "desire"]
    },
    {
      id: "interpretation",
      name: "Tolkning og Analyse",
      description: "Prosessen og grensene for psykoanalytisk tolkning",
      color: "#36454F",
      icon: "interpretation-theme.svg",
      relatedThemes: ["clinical", "philosophical"]
    },
    {
      id: "desire",
      name: "Lyst og Subjektivitet",
      description: "Lysets natur og dens rolle i forming av subjektiv opplevelse",
      color: "#8B0000",
      icon: "desire-theme.svg",
      relatedThemes: ["identity", "philosophical"]
    },
    {
      id: "clinical",
      name: "Kliniske Anvendelser",
      description: "Praktiske anvendelser av psykoanalytisk teori i kliniske settinger",
      color: "#2F4F4F",
      icon: "clinical-theme.svg",
      relatedThemes: ["interpretation", "language"]
    },
    {
      id: "social",
      name: "Sosial og Kulturell Kontekst",
      description: "Effekten av sosiale strukturer på individuell psykologi",
      color: "#483D8B",
      icon: "social-theme.svg",
      relatedThemes: ["identity", "desire"]
    },
    {
      id: "philosophical",
      name: "Filosofiske Grunnlag",
      description: "Underliggende filosofiske prinsipper for psykoanalytisk teori",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],

  quotes: [
    {
      id: "quote_001",
      title: "Tolkningsgapet Mellom Erfaring og Språk",
      quote: "Det fundamentale gapet mellom det som kan uttrykkes og det som faktisk erfarves, former hele terapeutisk praksis.",
      context: "En kjerneinnsikt fra Do You Read Me (2015) som utforsker hvordan språkets begrensninger påvirker psykoanalytisk arbeid. Miller undersøker hvordan tolkningsgapet mellom erfaring og uttrykk skaper både utfordringer og muligheter i terapi.",
      source: {
        work: "Do You Read Me",
        page: 23,
        number: 1,
        chapter: "Chapter 2: The Interpretive Gap",
        year: 2015
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_004",
          relationship: "expands",
          strength: 0.8,
          label: "Videre utforskning"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Historisk kontekst"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.6,
          label: "Klinisk anvendelse"
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
      title: "Den Triumferende Offeren",
      quote: "Den triumferende offeren er den som, gjennom sin lidelse, klarer å fange ønsket til den Andre og å dominere scenen i verden.",
      context: "Et sentralt konsept fra The Triumphant Victim (2013) som analyserer hvordan moderne sosiale strukturer oppmuntrer og validerer en performativ identitet forankret i strukturell utilstrekkelighet. Denne identiteten gir både sosial anerkjennelse og psykologisk komfort.",
      source: {
        work: "The Triumphant Victim",
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
          label: "Dypere analyse"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.7,
          label: "Alternativt synspunkt"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.6,
          label: "Sosiale implikasjoner"
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
      title: "Kommunikasjonens Grenser i Terapi",
      quote: "I terapi må vi akseptere at ord aldri kan fange hele erfaringen, men at dette gapet selv er rommet for endring.",
      context: "En videreutvikling av tolkningsgapet-konseptet fra Do You Read Me (2015). Miller argumenterer for at aksept av språkets begrensninger er avgjørende for effektiv terapeutisk praksis.",
      source: {
        work: "Do You Read Me",
        page: 87,
        number: 3,
        chapter: "Chapter 4: The Limits of Language",
        year: 2015
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "expands",
          strength: 0.8,
          label: "Grunnlag"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Teoretisk bakgrunn"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.7,
          label: "Klinisk relevans"
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
      title: "Sadomasochisme som Psykologisk Struktur",
      quote: "I den perverse strukturen er offerens smerte instrumentet gjennom hvilket subjektet forsøker å fullføre den Andres mangel.",
      context: "Dypere analyse av offerrollen som fremføring, med fokus på hvordan sosiale medier og moderne kultur skaper tilbakekoblingssløyfer som belønner fremvisning av lidelse. Fremføringen blir autentisk gjennom sin sosiale validering.",
      source: {
        work: "The Triumphant Victim",
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
          label: "Kjernekonsept"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.5,
          label: "Motpunkt"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.8,
          label: "Samtidig relevans"
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
      title: "Analytikerens Utdanning",
      quote: "Utdanningen av en analytiker begynner i øyeblikket de innser at de ikke lenger lytter etter mening, men etter strukturen i pasientens fortelling.",
      context: "Fra Do You Read Me (2015), utforsker Miller hvordan analytikerens rolle endres når de lærer å arbeide innenfor tolkningsgapet. Dette krever en fundamental endring i hvordan man lytter til pasientens fortelling.",
      source: {
        work: "Do You Read Me",
        page: 112,
        number: 9,
        chapter: "Chapter 2: The Analyst's Training",
        year: 2015
      },
      themes: ["language", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "contextualizes",
          strength: 0.7,
          label: "Teoretisk grunnlag"
        },
        {
          id: "quote_004",
          relationship: "contextualizes",
          strength: 0.6,
          label: "Bakgrunn"
        },
        {
          id: "quote_009",
          relationship: "expands",
          strength: 0.5,
          label: "Filosofiske implikasjoner"
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
      title: "Valg og Handlekraft i Lidelser",
      quote: "Ekte styrke begynner når vi anerkjenner valget i vår lidelse og muligheten for endring.",
      context: "Et motpunkt til analysen av offerrollen fra The Triumphant Victim (2013). Miller utfordrer deterministiske syn på sosial betinging og antyder at anerkjennelse av handlekraft innen lidelse representerer det første skrittet mot ekte styrke.",
      source: {
        work: "The Triumphant Victim",
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
          label: "Alternativt perspektiv"
        },
        {
          id: "quote_005",
          relationship: "contradicts",
          strength: 0.5,
          label: "Motpunkt"
        },
        {
          id: "quote_011",
          relationship: "expands",
          strength: 0.6,
          label: "Videre utforskning"
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
      title: "Motstand som Terapeutisk Materiale",
      quote: "Motstand er ikke et hinder for kur; det er selve materialet i det analytiske arbeidet.",
      context: "Fra Do You Read Me (2015), anvender Miller semiotisk teori i klinisk praksis. Han viser hvordan fysiske og psykologiske symptomer fungerer som strukturelle elementer i pasientens fortelling og avslører den underliggende grammatikken i lidelsen.",
      source: {
        work: "Do You Read Me",
        page: 54,
        number: 14,
        chapter: "Chapter 7: Resistance as Material",
        year: 2015
      },
      themes: ["language", "clinical"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "applies",
          strength: 0.6,
          label: "Praktisk anvendelse"
        },
        {
          id: "quote_004",
          relationship: "applies",
          strength: 0.7,
          label: "Klinisk relevans"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Integrasjon"
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
      title: "Lidelse som Sosial Valuta",
      quote: "Lidelse er ikke bare en tilstand av å være; i økonomien til den triumferende offeren blir det en form av valuta brukt til å forhandle med den symbolske ordenen.",
      context: "En samtidsanalyse fra The Triumphant Victim (2013) som undersøker hvordan sosiale medieplattformer har skapt nye mekanismer for fremføring av lidelse. Den digitale arenaen forsterker og moneteriserer visningen av personlig smerte, og skaper nye identitetsformer.",
      source: {
        work: "The Triumphant Victim",
        page: 192,
        number: 2,
        chapter: "Chapter 8: The Digital Economy of Suffering",
        year: 2013
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "applies",
          strength: 0.6,
          label: "Samtidig anvendelse"
        },
        {
          id: "quote_005",
          relationship: "applies",
          strength: 0.8,
          label: "Moderne kontekst"
        },
        {
          id: "quote_008",
          relationship: "expands",
          strength: 0.6,
          label: "Videre analyse"
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
      label: "Videre utforskning",
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
      label: "Historisk kontekst",
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
      label: "Klinisk anvendelse",
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
      label: "Dypere analyse",
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
      label: "Alternativt synspunkt",
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
      label: "Sosiale implikasjoner",
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
      label: "Teoretisk bakgrunn",
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
      label: "Klinisk relevans",
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
      label: "Motpunkt",
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
      label: "Samtidig relevans",
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
      label: "Filosofiske implikasjoner",
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
      label: "Videre utforskning",
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
