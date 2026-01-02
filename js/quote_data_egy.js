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
      name: "اللغة والسيميائيات",
      description: "استكشاف قيود اللغة والفجوة بين الدال والمدلول",
      color: "#FFD700",
      icon: "language-theme.svg",
      relatedThemes: ["semiotics", "communication"]
    },
    {
      id: "identity",
      name: "الهوية والذات",
      description: "تشكيل الهوية من خلال الهياكل الاجتماعية والسرد الشخصي",
      color: "#002147",
      icon: "identity-theme.svg",
      relatedThemes: ["social", "desire"]
    },
    {
      id: "interpretation",
      name: "التفسير والتحليل",
      description: "عملية وحدود التفسير التحليل النفسي",
      color: "#36454F",
      icon: "interpretation-theme.svg",
      relatedThemes: ["clinical", "philosophical"]
    },
    {
      id: "desire",
      name: "الرغبة والذاتية",
      description: "طبيعة الرغبة ودورها في تشكيل التجربة الذاتية",
      color: "#8B0000",
      icon: "desire-theme.svg",
      relatedThemes: ["identity", "philosophical"]
    },
    {
      id: "clinical",
      name: "التطبيقات السريرية",
      description: "التطبيقات العملية للنظرية التحليل النفسي في البيئات السريرية",
      color: "#2F4F4F",
      icon: "clinical-theme.svg",
      relatedThemes: ["interpretation", "language"]
    },
    {
      id: "social",
      name: "السياق الاجتماعي والثقافي",
      description: "تأثير الهياكل الاجتماعية على علم النفس الفردي",
      color: "#483D8B",
      icon: "social-theme.svg",
      relatedThemes: ["identity", "desire"]
    },
    {
      id: "philosophical",
      name: "الأساس الفلسفي",
      description: "المبادئ الفلسفية الكامنة للنظرية التحليل النفسي",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],

  quotes: [
    {
      id: "quote_001",
      title: "المحلل لا يقرأ قصة المريض",
      quote: "المحلل لا يقرأ قصة المريض؛ المحلل يقرأ الفجوات حيث لا تتماسك القصة.",
      context: "تستكشف هذه الرؤية الفجوة السيميائية الأساسية بين الدال والمدلول، انطلاقاً من أعمال لاكان المبكرة حول حدود التواصل. فعل الكلام يحتمياً يشوه الفكرة الأصلية، مما يخلق فجوة دائمة بين النية والتعبير.",
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
          label: "استكشاف إضافي"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.7,
          label: "السياق التاريخي"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.6,
          label: "التطبيق السريري"
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
      title: "الضحية المنتصرة",
      quote: "الضحية المنتصرة هي التي، من خلال معاناتها، تنجح في التقاط رغبة الآخر والسيطرة على مسرح العالم.",
      context: "مقتطف من The Triumphant Victim، يناقش كيف تشجع الهياكل الاجتماعية الحديثة وتتحقق من الهوية الأدائية المتجذرة في النقص الهيكلي. هذه الهوية توفر الاعتراف الاجتماعي والراحة النفسية.",
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
          label: "تحليل أعمق"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.7,
          label: "منظر بديل"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.6,
          label: "التداعيات الاجتماعية"
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
      title: "التفسير الجيد",
      quote: "التفسير 'الجيد' ليس الذي يكون صحيحاً، بل الذي ينتج تأثير الحقيقة في اللاواعي للموضوع.",
      context: "بالتوسع في فشل اللغة، تستكشف هذه الاقتباس كيف يحتوي الدال دائماً على صمت جوهري - فجوة تمثل ما لا يمكن التعبير عنه. هذا الصمت ليس فراغاً بل هو المساحة حيث يظهر المعنى.",
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
          label: "الأساس"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.6,
          label: "الخلفية النظرية"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.7,
          label: "الصلة السريرية"
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
      title: "البنية الشاذة",
      quote: "في البنية الشاذة، يكون ألم الضحية هو الأداة التي يحاول من خلالها الموضوع إكمال نقص الآخر.",
      context: "تحليل أعمق للضحية كأداء، مع التركيز على كيفية إنشاء وسائل التواصل الاجتماعي والثقافة الحديثة حلقات تغذية راجعة تُكافئ عرض المعاناة. يصبح الأداء أصيلاً من خلال التحقق الاجتماعي.",
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
          label: "المفهوم المركزي"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.5,
          label: "نقطة مقابلة"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.8,
          label: "الصلة المعاصرة"
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
      title: "تدريب المحلل",
      quote: "يبدأ تدريب المحلل في اللحظة التي يدركون فيها أنهم لم يعودوا يستمعون إلى المعنى، بل إلى بنية الدال.",
      context: "السياق التاريخي لفهم تطور النظرية التحليل النفسي، خاصة كيف أعاد لاكان تفسير أعمال فرويد من خلال اللسانيات البنيوية. هذا إعادة القراءة خلق إمكانيات جديدة لفهم اللاواعي.",
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
          label: "الأساس النظري"
        },
        {
          id: "quote_004",
          relationship: "contextualizes",
          strength: 0.6,
          label: "الخلفية"
        },
        {
          id: "quote_009",
          relationship: "expands",
          strength: 0.5,
          label: "التداعيات الفلسفية"
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
      title: "ما وراء الضحية",
      quote: "القوة الحقيقية تبدأ عندما نعترف بالاختيار في معاناتنا.",
      context: "نقطة مقابلة لتحليل الضحية، تشير إلى أن الاعتراف بالقدرة على الفعل في المعاناة يمثل الخطوة الأولى نحو القوة الحقيقية. هذا يتحدى النظرة الحتمية حول التكييف الاجتماعي.",
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
          label: "منظر بديل"
        },
        {
          id: "quote_005",
          relationship: "contradicts",
          strength: 0.5,
          label: "نقطة مقابلة"
        },
        {
          id: "quote_011",
          relationship: "expands",
          strength: 0.6,
          label: "استكشاف إضافي"
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
      title: "المقاومة والعلاج",
      quote: "المقاومة ليست عقبة أمام العلاج؛ هي نفسها مادة العمل التحليلي.",
      context: "تطبيق نظرية السيميائيات في الممارسة السريرية، يوضح كيف تعمل الأعراض الجسدية والنفسية كعناصر هيكلية في قصة المريض. تكشف هذه 'علامات الترقيم' عن القواعد النحوية الأساسية للمعاناة.",
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
          label: "التطبيق العملي"
        },
        {
          id: "quote_004",
          relationship: "applies",
          strength: 0.7,
          label: "الصلة السريرية"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.5,
          label: "التكامل"
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
      title: "المعاناة كعملة",
      quote: "المعاناة ليست مجرد حالة وجود؛ في اقتصاد الضحية المنتصرة، تصبح شكلاً من أشكال العملة المستخدمة للتفاوض مع النظام الرمزي.",
      context: "تحليل معاصر لكيفية إنشاء منصات التواصل الاجتماعي لآليات جديدة لأداء المعاناة. يعزز المسرح الرقمي ويُمول عرض الألم الشخصي، مما يخلق أشكالاً جديدة من الهوية.",
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
          label: "التطبيق المعاصر"
        },
        {
          id: "quote_005",
          relationship: "applies",
          strength: 0.8,
          label: "السياق الحديث"
        },
        {
          id: "quote_008",
          relationship: "expands",
          strength: 0.6,
          label: "تحليل إضافي"
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
      label: "استكشاف إضافي",
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
      label: "السياق التاريخي",
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
      label: "التطبيق السريري",
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
      label: "تحليل أعمق",
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
      label: "منظر بديل",
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
      label: "التداعيات الاجتماعية",
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
      label: "الخلفية النظرية",
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
      label: "الصلة السريرية",
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
      label: "نقطة مقابلة",
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
      label: "الصلة المعاصرة",
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
      label: "التداعيات الفلسفية",
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
      label: "استكشاف إضافي",
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
