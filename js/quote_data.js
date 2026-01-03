// Contextual Quote Journey Data Structure
// This file contains verified book summaries for the Miller Analysis project

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
      description: "Exploration of dyslexia, learning difficulties, and the denial of meaning",
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
      description: "Projective identification, symbolic thinking, and the claustrum",
      color: "#8B0000",
      icon: "post-kleinian-theme.svg",
      relatedThemes: ["clinical", "emotional"]
    }
  ],

  quotes: [
    {
      id: "summary_001",
      title: "The Triumphant Victim - Overview",
      quote: "The book examines the unrecognised prevalence of sadomasochism and perverse thinking in personal relationships and the public domain, discussing how it contributes to the culture of the victim.",
      context: "This book offers a provocative examination of sadomasochism and perverse thinking in both personal relationships and wider society. Miller argues that we live in a 'culture of the victim' where suffering has become a source of identity and power.",
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
      quote: "Part One traces the origins of perverse pathology and how it operates in obstructing emotional development and producing dysfunctional relationships, explored through hysteria, exhibitionism, voyeurism, and projective identification.",
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
      quote: "Part Two examines current modes of thinking and belief systems with particular emphasis on tribal mentality, Cartesian dualism, the Enlightenment's contribution to marginalisation of feminine values, and negative masculine control.",
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
      quote: "Reading and writing are fundamentally about the communication of meaning. Miller's contention is that the concept of dyslexia is something that has been invented, rather than discovered, in order to evade the question of meaning and the understanding of the individual.",
      context: "A fascinating and compelling exploration of the learning process for parents, teachers, and anyone with an interest in education. Miller argues that when a child has difficulty in learning to read and write, the one area that is never seen as having any relevance is the child's life experiences. The book examines this as part of a culture in which child-rearing and education are increasingly depersonalising, and children are viewed as assets or commodities rather than individuals.",
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
      quote: "Part I examines the dyslexia muddle, acronyms and non-science, emotional health and fitness, family matters, secrets and hidden agendas, and the function of aggression in healthy development.",
      context: "Based on 30 years' experience of both educational psychology and analytical therapy, the book sets out a radical approach to learning difficulties in which the primary assumption is that there will usually be underlying emotional conflicts, tensions, and anxieties. Any learning disability is thus more likely to be the symptom of less-evident, personal difficulties, rather than a problem in itself.",
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
        work: "Do You Read Me?: Learning Difficulties, Dyslexia and the Denial of Meaning",
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

  // Localized content - Accurate translations of verified English quotes
  localized: {
    FR: [
      {
        id: "summary_001",
        title: "La Victorieuse Victime - Aperçu",
        quote: "L'ouvrage examine la prévalence méconnue du sadomasochisme et de la pensée perverse dans les relations personnelles et le domaine public, en discutant de la manière dont cela contribue à la culture de la victime.",
        context: "Ce livre offre un examen provocateur du sadomasochisme et de la pensée perverse tant dans les relations personnelles que dans la société au sens large. Miller soutient que nous vivons dans une 'culture de la victime' où la souffrance est devenue une source d'identité et de pouvoir."
      },
      {
        id: "summary_002",
        title: "Première Partie : Origines de la Pathologie Perverse",
        quote: "La première partie retrace les origines de la pathologie perverse et comment elle opère en entravant le développement émotionnel et en produisant des relations dysfonctionnelles, explorées à travers l'hystérie, l'exhibitionnisme, le voyeurisme et l'identification projective.",
        context: "S'appuyant sur 30 ans de pratique psychanalytique, Miller explore comment les schémas sadomasochistes entravent le développement émotionnel et créent des relations dysfonctionnelles. Le livre examine ces dynamiques à travers le prisme de l'hystérie, de l'exhibitionnisme, du voyeurisme et de l'identification projective, illustré avec du matériel clinique détaillé provenant d'expériences de thérapie de couple et de famille et de consultations éducatives."
      },
      {
        id: "summary_003",
        title: "Deuxième Partie : Modes de Pensée Contemporains",
        quote: "La deuxième partie examine les modes de pensée actuels et les systèmes de croyances avec un accent particulier sur la mentalité tribale, le dualisme cartésien, la contribution des Lumières à la marginalisation des valeurs féminines, et le contrôle masculin négatif.",
        context: "Dans la seconde moitié, Miller tourne son attention vers la société dans son ensemble, examinant comment la pensée perverse a infiltré nos systèmes de croyance, nos institutions éducatives et nos hypothèses culturelles. Il critique l'héritage du dualisme cartésien, explore la tension entre le contrôle masculin et les valeurs féminines, et remet en question tant les fondamentalismes religieux que séculiers."
      },
      {
        id: "summary_004",
        title: "Do You Read Me? - Thèse Centrale",
        quote: "La lecture et l'écriture sont fondamentalement axées sur la communication du sens. La thèse de Miller est que le concept de dyslexie est quelque chose qui a été inventé, plutôt que découvert, afin d'éviter la question du sens et la compréhension de l'individu.",
        context: "Une exploration fascinante et convaincante du processus d'apprentissage pour les parents, les enseignants et toute personne intéressée par l'éducation. Miller soutient que lorsqu'un enfant a des difficultés à apprendre à lire et à écrire, le seul domaine qui n'est jamais considéré comme pertinent est les expériences de vie de l'enfant. Le livre examine cela dans le cadre d'une culture où l'éducation des enfants et l'éducation sont de plus en plus dépersonnalisées, et les enfants sont considérés comme des actifs ou des marchandises plutôt que comme des individus."
      },
      {
        id: "summary_005",
        title: "Première Partie : Handicap de Lecture",
        quote: "La première partie examine le désordre de la dyslexie, les acronymes et la non-science, la santé et la forme émotionnelles, les questions familiales, les secrets et les agendas cachés, et la fonction de l'agression dans le développement sain.",
        context: "Basé sur 30 ans d'expérience en psychologie éducative et en thérapie analytique, le livre expose une approche radicale des difficultés d'apprentissage dans laquelle l'hypothèse principale est qu'il y aura généralement des conflits émotionnels sous-jacents, des tensions et des anxiétés. Tout handicap d'apprentissage est donc plus susceptible d'être le symptôme de difficultés personnelles moins évidentes, plutôt qu'un problème en soi."
      },
      {
        id: "summary_006",
        title: "Troisième Partie : La Question Éducative",
        quote: "La troisième partie explore l'enseignement par rapport à l'éducation, en demandant si l'éducation est une libération ou une persécution, et en examinant le contexte culturel plus large de la manière dont les enfants sont traités comme des actifs ou des marchandises.",
        context: "Le livre examine les difficultés d'apprentissage dans le contexte d'une culture dépersonnalisée où les enfants sont considérés comme des actifs ou des marchandises plutôt que comme des individus. Miller fournit un cadre pour comprendre comment les conflits émotionnels sous-jacents, les tensions et les anxiétés se manifestent sous forme de problèmes d'apprentissage. L'œuvre remet en question la pensée conventionnelle sur la dyslexie et les difficultés d'apprentissage, soutenant que ce sont souvent des symptômes de problèmes émotionnels plus profonds plutôt que des problèmes purement techniques."
      }
    ],
    ES: [
      {
        id: "summary_001",
        title: "La Víctima Triunfante - Visión General",
        quote: "El libro examina la prevalencia no reconocida del sadomasoquismo y el pensamiento perverso en las relaciones personales y el dominio público, discutiendo cómo contribuye a la cultura de la víctima.",
        context: "Este libro ofrece un examen provocador del sadomasoquismo y el pensamiento perverso tanto en las relaciones personales como en la sociedad en general. Miller argumenta que vivimos en una 'cultura de la víctima' donde el sufrimiento se ha convertido en una fuente de identidad y poder."
      },
      {
        id: "summary_002",
        title: "Primera Parte: Orígenes de la Patología Perversa",
        quote: "La primera parte rastrea los orígenes de la patología perversa y cómo opera obstruyendo el desarrollo emocional y produciendo relaciones disfuncionales, exploradas a través de la histeria, el exhibicionismo, el voyeurismo y la identificación proyectiva.",
        context: "Basándose en 30 años de práctica psicoanalítica, Miller explora cómo los patrones sádico-masoquistas obstruyen el desarrollo emocional y crean relaciones disfuncionales. El libro examina estas dinámicas a través del lente de la histeria, el exhibicionismo, el voyeurismo y la identificación proyectiva, ilustrado con material clínico detallado de experiencias de terapia de pareja y familiar y consultas educativas."
      },
      {
        id: "summary_003",
        title: "Segunda Parte: Modos de Pensamiento Contemporáneos",
        quote: "La segunda parte examina los modos de pensamiento actuales y los sistemas de creencias con énfasis particular en la mentalidad tribal, el dualismo cartesiano, la contribución de la Ilustración a la marginación de los valores femeninos, y el control masculino negativo.",
        context: "En la segunda mitad, Miller dirige su atención a la sociedad en general, examinando cómo el pensamiento perverso ha infiltrado nuestros sistemas de creencias, instituciones educativas y suposiciones culturales. Critica el legado del dualismo cartesiano, explora la tensión entre el control masculino y los valores femeninos, y desafía tanto los fundamentalismos religiosos como seculares."
      },
      {
        id: "summary_004",
        title: "Do You Read Me? - Tesis Central",
        quote: "La lectura y la escritura son fundamentalmente sobre la comunicación del significado. La tesis de Miller es que el concepto de dislexia es algo que se ha inventado, más que descubierto, para evadir la cuestión del significado y la comprensión del individuo.",
        context: "Una exploración fascinante y convincente del proceso de aprendizaje para padres, maestros y cualquiera con interés en la educación. Miller argumenta que cuando un niño tiene dificultades para aprender a leer y escribir, el único área que nunca se ve como relevante es las experiencias de vida del niño. El libro examina esto como parte de una cultura en la que la crianza de los hijos y la educación son cada vez más despersonalizadas, y los niños son vistos como activos o mercancías en lugar de individuos."
      },
      {
        id: "summary_005",
        title: "Primera Parte: Discapacidad de Lectura",
        quote: "La primera parte examina el enredo de la dislexia, los acrónimos y la no-ciencia, la salud y forma física emocionales, los asuntos familiares, los secretos y agendas ocultas, y la función de la agresión en el desarrollo saludable.",
        context: "Basado en 30 años de experiencia tanto en psicología educativa como en terapia analítica, el libro presenta un enfoque radical para las dificultades de aprendizaje en el que la suposición principal es que generalmente habrá conflictos emocionales subyacentes, tensiones y ansiedades. Cualquier discapacidad de aprendizaje es así más probable que sea el síntoma de dificultades personales menos evidentes, más que un problema en sí mismo."
      },
      {
        id: "summary_006",
        title: "Tercera Parte: La Cuestión Educativa",
        quote: "La tercera parte explora la escolarización versus la educación, preguntando si la educación es liberación o persecución, y examinando el contexto cultural más amplio de cómo los niños son tratados como activos o mercancías.",
        context: "El libro examina las dificultades de aprendizaje dentro del contexto de una cultura despersonalizadora donde los niños son vistos como activos o mercancías en lugar de individuos. Miller proporciona un marco para entender cómo los conflictos emocionales subyacentes, tensiones y ansiedades se manifiestan como problemas de aprendizaje. La obra desafía el pensamiento convencional sobre la dislexia y las dificultades de aprendizaje, argumentando que estos son a menudo síntomas de problemas emocionales más profundos en lugar de problemas puramente técnicos."
      }
    ],
    NO: [
      {
        id: "summary_001",
        title: "Den Seirende Offeret - Oversikt",
        quote: "Boken undersøker den ukjente utbredelsen av sadomasochisme og pervers tenkning i personlige relasjoner og det offentlige rom, og diskuterer hvordan det bidrar til offerkulturen.",
        context: "Denne boken tilbyr en provoserende undersøkelse av sadomasochisme og pervers tenkning både i personlige relasjoner og i samfunnet for øvrig. Miller argumenterer for at vi lever i en 'offerkultur' hvor lidelse har blitt en kilde til identitet og makt."
      },
      {
        id: "summary_002",
        title: "Del En: Opprinnelse til Pervers Patologi",
        quote: "Del En sporer opprinnelsen til pervers patologi og hvordan den opererer ved å hindre emosjonell utvikling og skape dysfunksjonelle relasjoner, utforsket gjennom hysteri, eksibisjonisme, voyeurisme og projektiv identifikasjon.",
        context: "Med utgangspunkt i 30 års psykoanalytisk praksis utforsker Miller hvordan sadomasochistiske mønstre hindrer emosjonell utvikling og skaper dysfunksjonelle relasjoner. Boken undersøker disse dynamikkene gjennom linsen av hysteri, eksibisjonisme, voyeurisme og projektiv identifikasjon, illustrert med detaljert klinisk materiale fra par- og familieterapi-erfaringer og pedagogiske konsultasjoner."
      },
      {
        id: "summary_003",
        title: "Del To: Samtidige Tenkemåter",
        quote: "Del To undersøker nåværende tenkemåter og trossystemer med spesiell vekt på stammementalitet, kartesisk dualisme, opplysningstidens bidrag til marginalisering av feminine verdier, og negativ maskulin kontroll.",
        context: "I den andre halvdelen vender Miller sin oppmerksomhet mot samfunnet som helhet, og undersøker hvordan pervers tenkning har infiltrert vårt trossystem, utdanningsinstitusjoner og kulturelle antagelser. Han kritiserer arven etter kartesisk dualisme, utforsker spenningen mellom maskulin kontroll og feminine verdier, og utfordrer både religiøse og sekulære fundamentalismer."
      },
      {
        id: "summary_004",
        title: "Do You Read Me? - Kjerneavhandling",
        quote: "Lesing og skriving er fundamentalt om kommunikasjon av mening. Millers påstand er at konseptet dysleksi er noe som er oppfunnet, snarere enn oppdaget, for å unngå spørsmålet om mening og forståelsen av individet.",
        context: "En fascinerende og overbevisende utforskning av læringsprosessen for foreldre, lærere og alle med interesse for utdanning. Miller argumenterer for at når et barn har vanskeligheter med å lære å lese og skrive, er det eneste området som aldri sees som relevant barnets livserfaringer. Boken undersøker dette som del av en kultur der barneoppdragelse og utdanning blir stadig mer upersonlige, og barn blir sett på som aktiva eller varer snarere enn individer."
      },
      {
        id: "summary_005",
        title: "Del I: Lesevansker",
        quote: "Del I undersøker dysleksiforvirringen, akronymer og ikke-vitenskap, emosjonell helse og form, familiemessige forhold, hemmeligheter og skjulte dagsordener, og funksjonen av aggresjon i sunn utvikling.",
        context: "Basert på 30 års erfaring både fra pedagogisk psykologi og analytisk terapi, legger boken frem en radikal tilnærming til læringsvansker der hovedantagelsen er at det vanligvis vil være underliggende emosjonelle konflikter, spenninger og angst. Enhver lærevanske er dermed mer sannsynlig å være symptomet på mindre åpenbare personlige vanskeligheter, snarere enn et problem i seg selv."
      },
      {
        id: "summary_006",
        title: "Del III: Utdanningsspørsmålet",
        quote: "Del III utforsker skolegang versus utdanning, og spør om utdanning er frigjøring eller forfølgelse, og undersøker det bredere kulturelle konteksten av hvordan barn behandles som aktiva eller varer.",
        context: "Boken undersøker læringsvansker innenfor konteksten av en upersonlig kultur der barn blir sett på som aktiva eller varer snarere enn individer. Miller gir et rammeverk for å forstå hvordan underliggende emosjonelle konflikter, spenninger og angst manifesterer seg som læringsproblemer. Verket utfordrer konvensjonell tenkning om dysleksi og læringsvansker, og argumenterer for at disse ofte er symptomer på dypere emosjonelle problemer snarere enn rent tekniske problemer."
      }
    ],
    PL: [
      {
        id: "summary_001",
        title: "Triumfująca Ofiara - Przegląd",
        quote: "Książka bada nieuznaną powszechność sadyzmu i perwersyjnego myślenia w relacjach osobistych i sferze publicznej, omawiając, jak to przyczynia się do kultury ofiary.",
        context: "Ta książka oferuje prowokacyjne badanie sadyzmu i perwersyjnego myślenia zarówno w relacjach osobistych, jak i w szerszym społeczeństwie. Miller twierdzi, że żyjemy w 'kulturze ofiary', w której cierpienie stało się źródłem tożsamości i władzy."
      },
      {
        id: "summary_002",
        title: "Część Pierwsza: Początki Perwersyjnej Patologii",
        quote: "Część Pierwsza śledzi początki perwersyjnej patologii i jak ona działa w przeszkadzaniu rozwojowi emocjonalnemu i tworzeniu dysfunkcyjnych relacji, badanych przez histerię, ekshibicjonizm, wojeryzm i identyfikację projekcyjną.",
        context: "Opierając się na 30-letniej praktyce psychoanalitycznej, Miller bada, jak wzorce sady-masochistyczne przeszkadzają rozwojowi emocjonalnemu i tworzą dysfunkcyjne relacje. Książka bada te dynamiki przez pryzmat histerii, ekshibicjonizmu, wojeryzmu i identyfikacji projekcyjnej, zilustrowane szczegółowym materiałem klinicznym z doświadczeń terapii par i rodzin oraz konsultacji edukacyjnych."
      },
      {
        id: "summary_003",
        title: "Część Druga: Współczesne Sposoby Myślenia",
        quote: "Część Druga bada obecne sposoby myślenia i systemy wierzeń ze szczególnym naciskiem na mentalność plemienną, dualizm kartezjański, wkład Oświecenia w marginalizację wartości kobiecych i negatywną kontrolę męską.",
        context: "W drugiej połowie Miller zwraca uwagę na społeczeństwo jako całość, badając, jak perwersyjne myślenie przeniknęło nasze systemy wierzeń, instytucje edukacyjne i założenia kulturowe. Krytykuje dziedzictwo dualizmu kartezjańskiego, bada napięcie między męską kontrolą a kobiecymi wartościami i wyzywa zarówno fundamentalizmy religijne, jak i świeckie."
      },
      {
        id: "summary_004",
        title: "Do You Read Me? - Główna Teza",
        quote: "Czytanie i pisanie są fundamentalnie o komunikacji znaczenia. Tezą Millera jest to, że pojęcie dysleksji jest czymś, co zostało wynalezione, a nie odkryte, aby uniknąć pytania o znaczenie i zrozumienie jednostki.",
        context: "Fascynująca i przekonująca eksploracja procesu uczenia się dla rodziców, nauczycieli i każdego zainteresowanego edukacją. Miller twierdzi, że gdy dziecko ma trudności z nauką czytania i pisania, jedynym obszarem, który nigdy nie jest postrzegany jako istotny, są doświadczenia życiowe dziecka. Książka bada to jako część kultury, w której wychowanie dzieci i edukacja są coraz bardziej zniepersonalizowane, a dzieci są postrzegane jako aktywa lub towary, a nie jako jednostki."
      },
      {
        id: "summary_005",
        title: "Część I: Niepełnosprawność Czytania",
        quote: "Część I bada zamieszanie dysleksji, akronimy i nienaukę, zdrowie i kondycję emocjonalną, sprawy rodzinne, tajemnice i ukryte agendy oraz funkcję agresji w zdrowym rozwoju.",
        context: "Opierając się na 30-letnim doświadczeniu zarówno w psychologii edukacyjnej, jak i terapii analitycznej, książka przedstawia radykalne podejście do trudności w uczeniu się, w którym głównym założeniem jest, że zazwyczaj będą istnieć podstawowe konflikty emocjonalne, napięcia i lęki. Każda niepełnosprawność w uczeniu się jest więc bardziej prawdopodobna, że jest objawem mniej oczywistych trudności osobistych, a nie problemem samym w sobie."
      },
      {
        id: "summary_006",
        title: "Część III: Kwestia Edukacyjna",
        quote: "Część III bada szkolnictwo w porównaniu z edukacją, pytając, czy edukacja jest wyzwoleniem czy prześladowaniem, i badając szerszy kontekst kulturowy tego, jak dzieci są traktowane jako aktywa lub towary.",
        context: "Książka bada trudności w uczeniu się w kontekście zniepersonalizowanej kultury, w której dzieci są postrzegane jako aktywa lub towary, a nie jako jednostki. Miller zapewnia ramy do zrozumienia, jak podstawowe konflikty emocjonalne, napięcia i lęki manifestują się jako problemy w uczeniu się. Praca wyzywa konwencjonalne myślenie o dysleksji i trudnościach w uczeniu się, argumentując, że są one często objawami głębszych problemów emocjonalnych, a nie czysto technicznymi problemami."
      }
    ],
    LA: [
      {
        id: "summary_001",
        title: "Victoriosa Victima - Conspectus",
        quote: "Liber examinat agnitam praesentiam sadomasochismi et cogitationis perversae in relationibus personalibus et in publico dominio, disserens quomodo ad culturam victimae conferat.",
        context: "Hic liber provocatricem examinationem sadomasochismi et cogitationis perversae tam in relationibus personalibus quam in societate late patente offert. Miller contendit nos in 'cultura victimae' vivere, ubi dolor factus est identitatis et potestatis fons."
      },
      {
        id: "summary_002",
        title: "Pars Prima: Originem Pathologiae Perversae",
        quote: "Pars Prima originem pathologiae perversae et quomodo operatur in developmentum emotionalem impediendo et relationes disfunctionales generando per hysteresin, exhibitionismum, voyeurismum et identificationem projectivam persequitur.",
        context: "In triginta annorum psychoanalyticae praxi innixus, Miller explorat quomodo schemata sadomasochistica developmentum emotionalem impediunt et relationes disfunctionales creant. Liber has dynamismos per hysteresin, exhibitionismum, voyeurismum et identificationem projectivam examinat, cum materiali clinico ex experientiis therapiarum coniugalis et familiaris et consultationibus educativis illustratus."
      },
      {
        id: "summary_003",
        title: "Pars Secunda: Modos Cogitationis Hodiernos",
        quote: "Pars Secunda modos cogitationis hodiernos et systemata fidei cum speciali attentione in mentalem tribalem, dualismum Cartesianum, contributionem Illuminationis ad marginalizationem valorum femineorum et negativam masculinam dominationem examinat.",
        context: "In secunda parte, Miller attentionem suam in societatem in toto vertit, examinans quomodo cogitatio perversa nostra systemata fidei, institutiones educativas et praesumptiones culturales infiltrauit. Hereditatem dualismi Cartesiani crititatur, tensionem inter dominationem masculinam et valores femineos explorat, et tam fundamentalismos religiosos quam saeculares provocat."
      },
      {
        id: "summary_004",
        title: "Do You Read Me? - Thesim Centralem",
        quote: "Lectio et scriptio fundamentaliter de communicatione sensus sunt. Contentio Millera est quod conceptus dyslexiae est quod inventum est, non inventum, ut quaestio sensus et intellectus individui evitetur.",
        context: "Fascinans et convincens exploratio processus discendi pro parentibus, magistris et quocumque qui in educatione interest. Miller contendit quod cum puer difficultatem in discendo legendi et scribendi habet, unicum quod umquam relevans non videtur est experientiae vitae pueri. Liber hoc ut partem culturae examinat, in qua educatio puerorum et instructio magis magisque depersonalizationis fiunt, et pueri ut bona vel merces, non ut individui videntur."
      },
      {
        id: "summary_005",
        title: "Pars I: Lese Impedimentum",
        quote: "Pars I confusionem dyslexiae, acronyma et non-scientiam, sanitatem et firmitatem emotionalem, res familiares, secreta et agendas occultas, et functionem aggressionis in sano developmentu examinat.",
        context: "In triginta annorum experientia tam psychologiae educativae quam therapiae analyticae innixus, liber radicalem aditum ad difficultates discendi proponit, in quo praesumptio primaria est quod confligentes emotionales subiacentes, tensiones et anxietates plerumque erunt. Quodlibet impedimentum discendi ita probabilius est symptoma difficultatum personalium minus evidentium, quam problema per se."
      },
      {
        id: "summary_006",
        title: "Pars III: Quaestio Educative",
        quote: "Pars III scholam versus educationem explorat, interrogans utrum educatio liberatio an persecutio sit, et examinans latiorem contextum culturalem quomodo pueri ut bona vel merces tractentur.",
        context: "Liber difficultates discendi intra contextum culturae depersonalizationis examinat, in qua pueri ut bona vel merces, non ut individui videntur. Miller contextum ad intelligendum quomodo confligentes emotionales subiacentes, tensiones et anxietates ut problemata discendi manifestentur praebet. Opus conventionalem cogitationem de dyslexia et difficultatibus discendi provocat, contendens haec saepe symptomata profundiorum problematum emotionalium, non purorum technicorum problematum esse."
      }
    ],
    EGY: [
      {
        id: "summary_001",
        title: "الضحية المنتصرة - نظرة عامة",
        quote: "يناقش الكتاب الانتشار غير المعترف به للسادية والتفكير المنحرف في العلاقات الشخصية والمجال العام، وكيف يساهم ذلك في ثقافة الضحية.",
        context: "يقدم هذا الكتاب فحصًا مثيرًا للجدل للسادية والتفكير المنحرف في العلاقات الشخصية والمجتمع الأوسع. يجادل ميلر بأننا نعيش في 'ثقافة الضحية' حيث أصبح المعاناة مصدرًا للهوية والسلطة."
      },
      {
        id: "summary_002",
        title: "الجزء الأول: أصول علم الأمراض المنحرف",
        quote: "يتتبع الجزء الأول أصول علم الأمراض المنحرف وكيف يعمل في عرقلة التطور العاطفي وإنتاج العلاقات الوظيفية، ويستكشف من خلال الهستيريا والاستعراضية والتجسس والتعريف الإسقاطي.",
        context: "بالاعتماد على 30 عامًا من الممارسة التحليلية النفسية، يستكشف ميلر كيف تعيق أنماط السادية المازوخية التطور العاطفي وتخلق علاقات وظيفية. يفحص الكتاب هذه الديناميات من خلال عدسة الهستيريا والاستعراضية والتجسس والتعريف الإسقاطي، مع توضيح بمادة سريرية مفصلة من تجارب علاج الأزواج والعائلات والاستشارات التعليمية."
      },
      {
        id: "summary_003",
        title: "الجزء الثاني: أنماط التفكير المعاصرة",
        quote: "يفحص الجزء الثاني أنماط التفكير الحالية وأنظمة المعتقدات مع التركيز الخاص على العقلية القبلية، والثنائية الديكارتية، ومساهمة التنوير في تهميش القيم الأنثوية، والسيطرة الذكورية السلبية.",
        context: "في النصف الثاني، يوجه ميلر انتباهه إلى المجتمع ككل، ويفحص كيف تسللت التفكير المنحرف إلى أنظمة معتقداتنا ومؤسساتنا التعليمية والافتراضات الثقافية. ينتقد إرث الثنائية الديكارتية، ويستكشف التوتر بين السيطرة الذكورية والقيم الأنثوية، ويحدي الأصولية الدينية والعلمانية."
      },
      {
        id: "summary_004",
        title: "هل تقرأني؟ - الأطروحة المركزية",
        quote: "القراءة والكتابة تتعلق بشكل أساسي بتواصل المعنى. حجة ميلر هي أن مفهوم عسر القراءة هو شيء تم اختراعه، وليس اكتشافه، لتجنب سؤال المعنى وفهم الفرد.",
        context: "استكشاف رائع ومقنع لعملية التعلم للآباء والمعلمين وأي شخص مهتم بالتعليم. يجادل ميلر بأنه عندما يواجه الطفل صعوبة في تعلم القراءة والكتابة، فإن المنطقة الوحيدة التي لا تُرى أبدًا ذات صلة هي تجارب حياة الطفل. يفحص الكتاب هذا كجزء من ثقافة أصبح فيها تربية الأطفال والتعليم أكثر فأكثر شخصية، ويُنظر إلى الأطفال كأصول أو سلع بدلاً من الأفراد."
      },
      {
        id: "summary_005",
        title: "الجزء الأول: إعاقة القراءة",
        quote: "يفحص الجزء الأول فوضى عسر القراءة، والاختصارات وغير العلم، والصحة واللياقة العاطفية، والشؤون العائلية، والأسرار والم agendas المخفية، ووظيفة العدوان في التطور الصحي.",
        context: "بناءً على 30 عامًا من الخبرة في كل من علم النفس التربوي والعلاج التحليلي، يقدم الكتاب نهجًا جذريًا لصعوبات التعلم حيث الافتراض الرئيسي هو أن هناك عادةً صراعات عاطفية أساسية وتوترات وقلق. أي إعاقة تعلم هي بالتالي أكثر احتمالًا أن تكون عرضًا لمصاعب شخصية أقل وضوحًا، بدلاً من مشكلة في حد ذاتها."
      },
      {
        id: "summary_006",
        title: "الجزء الثالث: قضية التعليم",
        quote: "يستكشف الجزء الثالث المدرسة مقابل التعليم، ويسأل ما إذا كان التعليم تحريرًا أم اضطهادًا، ويفحص السياق الثقافي الأوسع لكيفية معاملة الأطفال كأصول أو سلع.",
        context: "يفحص الكتاب صعوبات التعلم في سياق ثقافة غير شخصية حيث يُنظر إلى الأطفال كأصول أو سلع بدلاً من الأفراد. يوفر ميلر إطارًا لفهم كيف تظهر الصراعات العاطفية الأساسية والتوترات والقلق كمشاكل في التعلم. يتحدى العمل التفكير التقليدي حول عسر القراءة وصعوبات التعلم، بحجة أن هذه غالبًا ما تكون أعراضًا لمشاكل عاطفية أعمق بدلاً من مشاكل تقنية بحتة."
      }
    ],
    ZH: [
      {
        id: "summary_001",
        title: "胜利的受害者 - 概述",
        quote: "本书探讨了个人关系和公共领域中未被承认的施虐受虐和变态思维的普遍性，讨论了它如何助长受害者文化。",
        context: "本书对个人关系和更广泛社会中的施虐受虐和变态思维进行了发人深省的探讨。米勒认为，我们生活在一个'受害者文化'中，痛苦已成为身份和权力的源泉。"
      },
      {
        id: "summary_002",
        title: "第一部分：变态病理学的起源",
        quote: "第一部分追溯了变态病理学的起源，以及它如何阻碍情感发展并产生功能失调的关系，通过歇斯底里、暴露癖、窥淫癖和投射认同进行探索。",
        context: "基于30年的精神分析实践，米勒探讨了施虐受虐模式如何阻碍情感发展并造成功能失调的关系。本书通过歇斯底里、暴露癖、窥淫癖和投射认同的视角来检验这些动态，并以夫妻和家庭治疗经验及教育咨询的详细临床材料加以说明。"
      },
      {
        id: "summary_003",
        title: "第二部分：当代思维模式",
        quote: "第二部分审视了当前的思维模式和信仰体系，特别关注部落心态、笛卡尔二元论、启蒙运动对女性价值观边缘化的贡献以及消极的男性控制。",
        context: "在下半部分，米勒将注意力转向整个社会，审视变态思维如何渗透到我们的信仰体系、教育机构和文化假设中。他批评了笛卡尔二元论的遗产，探讨了男性控制与女性价值观之间的紧张关系，并挑战了宗教和世俗的原教旨主义。"
      },
      {
        id: "summary_004",
        title: "你读懂我吗？- 核心论点",
        quote: "阅读和写作从根本上说是关于意义的交流。米勒的主张是，阅读障碍的概念是为了逃避意义问题和个体理解而发明的，而不是发现的。",
        context: "对学习过程的引人入胜的探索，适合父母、教师和任何对教育感兴趣的人。米勒认为，当孩子在阅读和写作方面遇到困难时，唯一被认为无关紧要的领域是孩子的生活经历。本书将此视为一种文化的组成部分，在这种文化中，育儿和教育越来越非人性化，儿童被视为资产或商品，而不是个体。"
      },
      {
        id: "summary_005",
        title: "第一部分：阅读障碍",
        quote: "第一部分探讨了阅读障碍的混乱、首字母缩略词和非科学、情感健康和适应能力、家庭事务、秘密和隐藏议程，以及攻击在健康发展中的作用。",
        context: "基于30年的教育心理学和分析治疗经验，本书提出了一个解决学习困难的激进方法，其主要假设是通常存在潜在的情感冲突、紧张和焦虑。任何学习障碍因此更可能是较不明显的个人困难的症状，而不是问题本身。"
      },
      {
        id: "summary_006",
        title: "第三部分：教育问题",
        quote: "第三部分探讨了学校教育与教育的关系，询问教育是解放还是迫害，并审视儿童被视为资产或商品的更广泛文化背景。",
        context: "本书在非人性化文化的背景下审视学习困难，在这种文化中，儿童被视为资产或商品，而不是个体。米勒提供了一个框架来理解潜在的情感冲突、紧张和焦虑如何表现为学习问题。这项工作挑战了关于阅读障碍和学习困难的常规思维，认为这些往往是更深层次情感问题的症状，而不是纯粹的技术问题。"
      }
    ]
  }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}
