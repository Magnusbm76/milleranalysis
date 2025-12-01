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
      title: "Språkets Svikt",
      quote: "Hver setning er allerede et forræderi mot den opprinnelige tanken.",
      context: "Denne innsikten utforsker det fundamentale semiotiske gapet mellom signifikant og signifikat, med utgangspunkt i Lacans tidlige arbeid om kommunikasjonsgrenser. Å tale nødvendiggjør en forvrengning av den opprinnelige tanken, og skaper et permanent gap mellom intensjon og uttrykk.",
      source: {
        work: "Do You Read Me",
        page: 42,
        chapter: "Kapittel 3: Den Semiotiske Kløften",
        year: 2018
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
      title: "Offerrollen som Identitet",
      quote: "Å påta seg offerrollen er å oppnå den eneste formen for triumf egoet virkelig forstår.",
      context: "Et utdrag fra Triumphant Victim, som diskuterer hvordan moderne sosiale strukturer oppmuntrer og validerer en performativ identitet forankret i strukturell utilstrekkelighet. Denne identiteten gir både sosial anerkjennelse og psykologisk komfort.",
      source: {
        work: "Triumphant Victim",
        page: 87,
        chapter: "Kapittel 5: Lidelsens Fremføring",
        year: 2021
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
      id: "quote_003",
      title: "Tolkningens Slutt",
      quote: "Formålet med psykoanalyse er ikke å gi svar, men å avslutte ønsket om dem.",
      context: "Et sentralt prinsipp i Millers filosofi: at ekte løsning kommer når subjektet slutter å projisere ønsket om fullføring på analytikeren eller en ekstern fortelling. Den terapeutiske reisen avsluttes ikke med forståelse, men med aksept.",
      source: {
        work: "Triumphant Victim",
        page: 156,
        chapter: "Kapittel 8: Utover Analyse",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_006",
          relationship: "expands",
          strength: 0.8,
          label: "Terapeutisk prosess"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.7,
          label: "Filosofiske implikasjoner"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Integrasjon"
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
      title: "Signifikantens Stillhet",
      quote: "Mellom ordet og tanken ligger et avgrunn som selve språket ikke kan krysse.",
      context: "Videreutvikling av språkets svikt, denne sitaten utforsker hvordan signifikanten alltid inneholder en iboende stillhet - et gap som representerer hva som ikke kan artikuleres. Denne stillheten er ikke tomhet, men rommet hvor mening oppstår.",
      source: {
        work: "Do You Read Me",
        page: 63,
        chapter: "Kapittel 4: Det Usagte",
        year: 2018
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
      title: "Lidelsens Fremføring",
      quote: "Moderne identitet er en scene hvor lidelsen er både manus og applaus.",
      context: "Videre analyse av offerrollen som fremføring, med fokus på hvordan sosiale medier og moderne kultur skaper tilbakekoblingssløyfer som belønner fremvisning av lidelse. Fremføringen blir autentisk gjennom sin sosiale validering.",
      source: {
        work: "Triumphant Victim",
        page: 112,
        chapter: "Kapittel 6: Den Sosiale Scenen",
        year: 2021
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
      id: "quote_006",
      title: "Terapeutisk Avslutning",
      quote: "Analytikerens suksess måles ved egen utdatertethet.",
      context: "Utforskning av paradokset i terapeutisk praksis hvor målet er å gjøre seg unødvendig. Ekte helbredelse skjer når pasienten ikke lenger trenger analytikerens tolkning, men kan navigere i sitt eget psykiske landskap.",
      source: {
        work: "Triumphant Victim",
        page: 178,
        chapter: "Kapittel 9: Analysens Slutt",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "expands",
          strength: 0.8,
          label: "Praktisk anvendelse"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.6,
          label: "Etiske betraktninger"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Integrasjon"
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
      title: "Lacans Arv",
      quote: "Tilbakevendelsen til Freud er ikke en repetisjon, men en nylesning gjennom strukturalismens linse.",
      context: "Historisk kontekst for å forstå utviklingen av psykoanalytisk teori, spesielt hvordan Lacan re-interpreterte Freuds verk gjennom strukturell lingvistikk. Denne nylesningen skapte nye muligheter for å forstå det ubevisste.",
      source: {
        work: "Do You Read Me",
        page: 28,
        chapter: "Kapittel 2: Den Strukturelle Vendingen",
        year: 2018
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
      title: "Utofferrollen",
      quote: "Ekte styrke begynner når vi anerkjenner valget i vår lidelse.",
      context: "Et motpunkt til analysen av offerrollen, som antyder at anerkjennelse av handlekraft innen lidelse representerer det første skrittet mot ekte styrke. Dette utfordrer det deterministiske synet på sosial betinging.",
      source: {
        work: "Triumphant Victim",
        page: 134,
        chapter: "Kapittel 7: Valgets Mulighet",
        year: 2021
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
      id: "quote_009",
      title: "Tolkningens Etikk",
      quote: "Å tolke er å utøve makt, men å nekte tolkning er å forlate ansvar.",
      context: "Filosofisk undersøkelse av det etiske dilemmaet iboende i psykoanalytisk praksis. Analytikeren må navigere mellom arrogansen ved å påstå å vite og uaktsomheten ved å nekte å veilede.",
      source: {
        work: "Triumphant Victim",
        page: 201,
        chapter: "Kapittel 10: Det Etiske Dilemmaet",
        year: 2021
      },
      themes: ["interpretation", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "questions",
          strength: 0.7,
          label: "Etiske spørsmål"
        },
        {
          id: "quote_006",
          relationship: "questions",
          strength: 0.6,
          label: "Profesjonell etikk"
        },
        {
          id: "quote_007",
          relationship: "expands",
          strength: 0.5,
          label: "Teoretisk bakgrunn"
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
      title: "Klinisk Semiotikk",
      quote: "Pasientens tale er en tekst hvor symptomene er tegnsetting.",
      context: "Anvendelse av semiotisk teori i klinisk praksis, som viser hvordan fysiske og psykologiske symptomer fungerer som strukturelle elementer i pasientens fortelling. Disse 'tegnsettingene' avslører den underliggende grammatikken i lidelsen.",
      source: {
        work: "Do You Read Me",
        page: 95,
        chapter: "Kapittel 5: Den Kliniske Teksten",
        year: 2018
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
      title: "Sosiale Mediers Lidelse",
      quote: "Den digitale arenaen har transformert privat smerte til offentlig fremføring.",
      context: "Samtidsanalyse av hvordan sosiale medieplattformer har skapt nye mekanismer for fremføring av lidelse. Den digitale arenaen forsterker og kommersialiserer visning av personlig smerte, og skaper nye identitetsformer.",
      source: {
        work: "Triumphant Victim",
        page: 145,
        chapter: "Kapittel 7: Den Digitale Scenen",
        year: 2021
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
    },
    {
      id: "quote_012",
      title: "Det Integrerte Selvet",
      quote: "Helhet er ikke fraværet av motsetning, men omfavnelsen av paradoks.",
      context: "Syntese av flere temaer, som antyder at psykisk helse kommer ikke fra å løse motsetninger, men fra å utvikle evnen til å holde paradoksale sannheter samtidig. Dette representerer kulminasjonen av den analytiske reisen.",
      source: {
        work: "Triumphant Victim",
        page: 223,
        chapter: "Kapittel 11: Utover Løsning",
        year: 2021
      },
      themes: ["interpretation", "desire"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "synthesizes",
          strength: 0.6,
          label: "Integrasjon"
        },
        {
          id: "quote_006",
          relationship: "synthesizes",
          strength: 0.7,
          label: "Terapeutisk mål"
        },
        {
          id: "quote_010",
          relationship: "synthesizes",
          strength: 0.5,
          label: "Klinisk integrasjon"
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
      from: "quote_003",
      to: "quote_006",
      type: "expands",
      strength: 0.8,
      label: "Terapeutisk prosess",
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
      label: "Filosofiske implikasjoner",
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
      label: "Integrasjon",
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
      from: "quote_006",
      to: "quote_009",
      type: "questions",
      strength: 0.6,
      label: "Etiske betraktninger",
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
      label: "Terapeutisk mål",
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
    },
    {
      from: "quote_010",
      to: "quote_012",
      type: "synthesizes",
      strength: 0.5,
      label: "Klinisk integrasjon",
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