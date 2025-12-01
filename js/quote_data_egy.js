// Contextual Quote Journey Data Structure
// This file contains network of interconnected quotes for the Miller Analysis project

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
      name: "اللغة وعلم العلامات",
      description: "استكشاف القيود اللغوية والفجوة بين الدال والمدلول",
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
      description: "عملية وحدود التفسير التحليلي النفسي",
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
      description: "التطبيقات العملية لنظرية التحليل النفسي في البيئات السريرية",
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
      name: "الأسس الفلسفية",
      description: "المبادئ الفلسفية الكامنة لنظرية التحليل النفسي",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],
  
  quotes: [
    {
      id: "quote_001",
      title: "فشل اللغة",
      quote: "كل جملة هي بالفعل خيانة للفكرة الأولية.",
      context: "هذه البصيرة تستكشف الفجوة العلامية الأساسية بين الدال والمدلول، مستندة إلى أعمال لاكان المبكرة حول حدود التواصل. فعل التحدث بالضرورة يشوه الفكرة الأصلية، خالقاً فجوة دائمة بين النية والتعبير.",
      source: {
        work: "Do You Read Me",
        page: 42,
        chapter: "الفصل 3: الفجوة العلامية",
        year: 2018
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_004",
          relationship: "expands",
          strength: 0.8,
          label: "استكشاف أعمق"
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
      title: "الضحية كهوية",
      quote: "تبني دور الضحية هو تحقيق الشكل الوحيد للانتصار الذي يفهمه الأنا حقاً.",
      context: "مقتطف من Triumphant Victim، يناقش كيف تشجع الهياكل الاجتماعية المعاصرة وتصادق على هوية أدائية متجذرة في النقص الهيكلي. هذه الهوية توفر كلاً من الاعتراف الاجتماعي والراحة النفسية.",
      source: {
        work: "Triumphant Victim",
        page: 87,
        chapter: "الفصل 5: أداء المعاناة",
        year: 2021
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
          label: "رؤية بديلة"
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
      id: "quote_003",
      title: "نهاية التفسير",
      quote: "غرض التحليل النفسي ليس تقديم إجابات، بل إنهاء الرغبة فيها.",
      context: "مبدأ مركزي في فلسفة ميلر: أن الحل الحقيقي يأتي عندما يتوقف الموضوع عن إسقاط رغبة الاكتمال على المحلل أو سرد خارجي. تنتهي الرحلة العلاجية ليس بالفهم بل بالقبول.",
      source: {
        work: "Triumphant Victim",
        page: 156,
        chapter: "الفصل 8: ما وراء التحليل",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_006",
          relationship: "expands",
          strength: 0.8,
          label: "العملية العلاجية"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.7,
          label: "التداعيات الفلسفية"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.6,
          label: "التكامل"
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
      title: "صمت الدال",
      quote: "بين الكلمة والفكر يقع هاوية لا يمكن للغة نفسها عبورها.",
      context: "موسعاً لفشل اللغة، تستكشف هذه الاقتباس كيف يحتوي الدال دائماً على صمت كامن - فجوة تمثل ما لا يمكن التعبير عنه. هذا الصمت ليس فراغاً بل هو المكان حيث ينشأ المعنى.",
      source: {
        work: "Do You Read Me",
        page: 63,
        chapter: "الفصل 4: غير المقول",
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
      title: "أداء المعاناة",
      quote: "الهوية الحديثة هي مسرح حيث المعاناة هي كل من النص والتصفيق.",
      context: "تحليل أعمق للضحية كأداء، يفحص كيف تخلق وسائل التواصل الاجتماعي والثقافة المعاصرة حلقات تغذية راجعة تكافئ عرض المعاناة. يصبح الأداء أصيلاً من خلال التحقق الاجتماعي.",
      source: {
        work: "Triumphant Victim",
        page: 112,
        chapter: "الفصل 6: المسرح الاجتماعي",
        year: 2021
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
          label: "نقطة مضادة"
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
      id: "quote_006",
      title: "الإنهاء العلاجي",
      quote: "يُقاس نجاح المحلل بقدمه القديمة.",
      context: "استكشاف مفارقة الممارسة العلاجية حيث الهدف هو جعل النفس غير ضرورية. يحدث الشفاء الحقيقي عندما لم يعد المريض يحتاج إلى تفسير المحلل بل يمكنه التنقل في مشهده النفسي الخاص.",
      source: {
        work: "Triumphant Victim",
        page: 178,
        chapter: "الفصل 9: نهاية التحليل",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "expands",
          strength: 0.8,
          label: "التطبيق العملي"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.6,
          label: "الاعتبارات الأخلاقية"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.7,
          label: "التكامل"
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
      title: "إرث لاكان",
      quote: "العودة إلى فرويد ليست تكراراً بل إعادة قراءة من خلال عدوى البنيوية.",
      context: "سياق تاريخي لفهم تطوير نظرية التحليل النفسي، خاصة كيف أعاد لاكان تفسير عمل فرويد من خلال اللغويات البنيوية. خلقت إعادة القراءة هذه إمكانيات جديدة لفهم اللاوعي.",
      source: {
        work: "Do You Read Me",
        page: 28,
        chapter: "الفصل 2: المنعطف البنيوي",
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
      quote: "التمكين الحقيقي يبدأ عندما نعترف بالاختيار في معاناتنا.",
      context: "نقطة مضادة لتحليل الضحية، تقترح أن إدراك الفاعلية داخل المعاناة يمثل الخطوة الأولى نحو التمكين الحقيقي. هذا يتحدى الرؤية الحتمية للشرط الاجتماعي.",
      source: {
        work: "Triumphant Victim",
        page: 134,
        chapter: "الفصل 7: إمكانية الاختيار",
        year: 2021
      },
      themes: ["identity", "desire"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "contradicts",
          strength: 0.7,
          label: "منظور بديل"
        },
        {
          id: "quote_005",
          relationship: "contradicts",
          strength: 0.5,
          label: "نقطة مضادة"
        },
        {
          id: "quote_011",
          relationship: "expands",
          strength: 0.6,
          label: "استكشاف أعمق"
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
      title: "أخلاقيات التفسير",
      quote: "التفسير هو ممارسة السلطة، لكن رفض التفسير هو التخلي عن المسؤولية.",
      context: "فحص فلسفي للمأزق الأخلاقي الكامن في ممارسة التحليل النفسي. يجب على المحلل التنقل بين غرور الادعاء بالمعرفة وإهمال رفض تقديم التوجيه.",
      source: {
        work: "Triumphant Victim",
        page: 201,
        chapter: "الفصل 10: المأزق الأخلاقي",
        year: 2021
      },
      themes: ["interpretation", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "questions",
          strength: 0.7,
          label: "أسئلة أخلاقية"
        },
        {
          id: "quote_006",
          relationship: "questions",
          strength: 0.6,
          label: "الأخلاق المهنية"
        },
        {
          id: "quote_007",
          relationship: "expands",
          strength: 0.5,
          label: "الخلفية النظرية"
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
      title: "علم العلامات السريري",
      quote: "كلام المريض هو نص حيث الأعراض هي علامات الترقيم.",
      context: "تطبيق نظرية العلامات في الممارسة السريرية، يوضح كيف تعمل الأعراض الجسدية والنفسية كعناصر هيكلية في سرد المريض. تكشف 'علامات الترقيم' هذه القواعد النحوية الكامنة للمعاناة.",
      source: {
        work: "Do You Read Me",
        page: 95,
        chapter: "الفصل 5: النص السريري",
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
      title: "المعاناة في وسائل التواصل الاجتماعي",
      quote: "حولت الساحة الرقمية الألم الخاص إلى أداء عام.",
      context: "تحليل معاصر لكيفية خلقت منصات وسائل التواصل الاجتماعي آليات جديدة لأداء المعاناة. تعزز الساحة الرقمية وتحول عرض الألم الشخصي، وتخلق أشكالاً جديدة من الهوية.",
      source: {
        work: "Triumphant Victim",
        page: 145,
        chapter: "الفصل 7: المسرح الرقمي",
        year: 2021
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
          label: "تحليل أعمق"
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
      title: "الذات المتكاملة",
      quote: "الكمال ليس غياب التناقض بل احتضان المفارقة.",
      context: "مزيج من عدة مواضيع، يقترح أن الصحة النفسية لا تأتي من حل التناقضات بل من تطوير القدرة على الاحتفاظ بالحقائق المتناقضة في نفس الوقت. هذا يمثل ذروة الرحلة التحليلية.",
      source: {
        work: "Triumphant Victim",
        page: 223,
        chapter: "الفصل 11: ما وراء الحل",
        year: 2021
      },
      themes: ["interpretation", "desire"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "synthesizes",
          strength: 0.6,
          label: "التكامل"
        },
        {
          id: "quote_006",
          relationship: "synthesizes",
          strength: 0.7,
          label: "الهدف العلاجي"
        },
        {
          id: "quote_010",
          relationship: "synthesizes",
          strength: 0.5,
          label: "التكامل السريري"
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
      label: "استكشاف أعمق",
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
      label: "رؤية بديلة",
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
      from: "quote_003",
      to: "quote_006",
      type: "expands",
      strength: 0.8,
      label: "العملية العلاجية",
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
      label: "التداعيات الفلسفية",
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
      label: "التكامل",
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
      label: "نقطة مضادة",
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
      from: "quote_006",
      to: "quote_009",
      type: "questions",
      strength: 0.6,
      label: "الاعتبارات الأخلاقية",
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
      label: "الهدف العلاجي",
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
      label: "استكشاف أعمق",
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
      label: "التكامل السريري",
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