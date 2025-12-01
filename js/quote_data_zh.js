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
      name: "语言与符号学",
      description: "探索语言局限性及能指与所指之间的鸿沟",
      color: "#FFD700",
      icon: "language-theme.svg",
      relatedThemes: ["semiotics", "communication"]
    },
    {
      id: "identity",
      name: "身份与自我",
      description: "通过社会结构和个人叙事形成身份",
      color: "#002147",
      icon: "identity-theme.svg",
      relatedThemes: ["social", "desire"]
    },
    {
      id: "interpretation",
      name: "解释与分析",
      description: "精神分析解释的过程与局限",
      color: "#36454F",
      icon: "interpretation-theme.svg",
      relatedThemes: ["clinical", "philosophical"]
    },
    {
      id: "desire",
      name: "欲望与主体性",
      description: "欲望的本质及其在塑造主观体验中的作用",
      color: "#8B0000",
      icon: "desire-theme.svg",
      relatedThemes: ["identity", "philosophical"]
    },
    {
      id: "clinical",
      name: "临床应用",
      description: "精神分析理论在临床环境中的实际应用",
      color: "#2F4F4F",
      icon: "clinical-theme.svg",
      relatedThemes: ["interpretation", "language"]
    },
    {
      id: "social",
      name: "社会与文化背景",
      description: "社会结构对个体心理学的影响",
      color: "#483D8B",
      icon: "social-theme.svg",
      relatedThemes: ["identity", "desire"]
    },
    {
      id: "philosophical",
      name: "哲学基础",
      description: "精神分析理论的基本哲学原理",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],
  
  quotes: [
    {
      id: "quote_001",
      title: "语言的失败",
      quote: "每句话都是对最初思想的背叛。",
      context: "这一洞察探讨了能指与所指之间的基本符号学鸿沟，借鉴了拉康早期关于交流局限性的研究。说话的行为必然会扭曲原始思想，在意图与表达之间制造永久的鸿沟。",
      source: {
        work: "Do You Read Me",
        page: 42,
        chapter: "第三章：符号学鸿沟",
        year: 2018
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_004",
          relationship: "expands",
          strength: 0.8,
          label: "进一步探索"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.7,
          label: "历史背景"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.6,
          label: "临床应用"
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
      title: "受害者身份",
      quote: "采用受害者角色是获得自我真正理解的唯一胜利形式。",
      context: "摘自《胜利的受害者》，讨论当代社会结构如何鼓励并验证一种植根于结构性不足的表演性身份。这种身份既提供了社会认可，也提供了心理舒适。",
      source: {
        work: "Triumphant Victim",
        page: 87,
        chapter: "第五章：痛苦的表演",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_005",
          relationship: "expands",
          strength: 0.9,
          label: "深入分析"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.7,
          label: "替代观点"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.6,
          label: "社会影响"
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
      title: "解释的终结",
      quote: "精神分析的目的不是提供答案，而是终结对答案的渴望。",
      context: "米勒哲学的核心原则：真正的解决方案到来时，是当主体停止将完成欲投射到分析师或外部叙事上时。治疗旅程不是以理解结束，而是以接受结束。",
      source: {
        work: "Triumphant Victim",
        page: 156,
        chapter: "第八章：超越分析",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_006",
          relationship: "expands",
          strength: 0.8,
          label: "治疗过程"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.7,
          label: "哲学影响"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.6,
          label: "整合"
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
      title: "能指的沉默",
      quote: "在词语与思想之间，存在着语言本身无法跨越的深渊。",
      context: "扩展语言失败，这句引言探讨了能指如何总是包含一种内在的沉默——一个代表无法被表达之物的鸿沟。这种沉默不是空虚，而是意义产生的空间。",
      source: {
        work: "Do You Read Me",
        page: 63,
        chapter: "第四章：未言说",
        year: 2018
      },
      themes: ["language", "semiotics"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "expands",
          strength: 0.8,
          label: "基础"
        },
        {
          id: "quote_007",
          relationship: "contextualizes",
          strength: 0.6,
          label: "理论背景"
        },
        {
          id: "quote_010",
          relationship: "applies",
          strength: 0.7,
          label: "临床相关性"
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
      title: "痛苦的表演",
      quote: "现代身份是一个舞台，痛苦既是剧本也是掌声。",
      context: "进一步分析受害者身份作为表演，探讨社交媒体和当代文化如何创造奖励痛苦展示的反馈循环。表演通过其社会验证变得真实。",
      source: {
        work: "Triumphant Victim",
        page: 112,
        chapter: "第六章：社会舞台",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "expands",
          strength: 0.9,
          label: "核心概念"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.5,
          label: "对立观点"
        },
        {
          id: "quote_011",
          relationship: "applies",
          strength: 0.8,
          label: "当代相关性"
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
      title: "治疗性终结",
      quote: "分析师的成功是以自己的过时来衡量的。",
      context: "探索治疗实践的悖论，其中目标是使自己变得不必要。真正的治愈发生在患者不再需要分析师的解释，而是能够导航自己的心理景观时。",
      source: {
        work: "Triumphant Victim",
        page: 178,
        chapter: "第九章：分析的终结",
        year: 2021
      },
      themes: ["interpretation", "clinical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "expands",
          strength: 0.8,
          label: "实际应用"
        },
        {
          id: "quote_009",
          relationship: "questions",
          strength: 0.6,
          label: "伦理考量"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.7,
          label: "整合"
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
      title: "拉康的遗产",
      quote: "回归弗洛伊德不是重复，而是通过结构主义视角的重新阅读。",
      context: "理解精神分析理论发展的历史背景，特别是拉康如何通过结构语言学重新解释弗洛伊德的作品。这种重新阅读为理解无意识创造了新的可能性。",
      source: {
        work: "Do You Read Me",
        page: 28,
        chapter: "第二章：结构转向",
        year: 2018
      },
      themes: ["language", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "contextualizes",
          strength: 0.7,
          label: "理论基础"
        },
        {
          id: "quote_004",
          relationship: "contextualizes",
          strength: 0.6,
          label: "背景"
        },
        {
          id: "quote_009",
          relationship: "expands",
          strength: 0.5,
          label: "哲学影响"
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
      title: "超越受害者身份",
      quote: "真正的赋权始于我们认识到痛苦中的选择。",
      context: "对受害者身份分析的对立观点，建议认识到痛苦中的能动性代表走向真正赋权的第一步。这挑战了社会条件作用的决定论观点。",
      source: {
        work: "Triumphant Victim",
        page: 134,
        chapter: "第七章：选择的可能性",
        year: 2021
      },
      themes: ["identity", "desire"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "contradicts",
          strength: 0.7,
          label: "替代视角"
        },
        {
          id: "quote_005",
          relationship: "contradicts",
          strength: 0.5,
          label: "对立观点"
        },
        {
          id: "quote_011",
          relationship: "expands",
          strength: 0.6,
          label: "进一步探索"
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
      title: "解释的伦理",
      quote: "解释是行使权力，但拒绝解释是放弃责任。",
      context: "对精神分析实践中内在伦理困境的哲学审视。分析师必须在声称知晓的傲慢与拒绝提供指导的疏忽之间导航。",
      source: {
        work: "Triumphant Victim",
        page: 201,
        chapter: "第十章：伦理困境",
        year: 2021
      },
      themes: ["interpretation", "philosophical"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "questions",
          strength: 0.7,
          label: "伦理问题"
        },
        {
          id: "quote_006",
          relationship: "questions",
          strength: 0.6,
          label: "职业伦理"
        },
        {
          id: "quote_007",
          relationship: "expands",
          strength: 0.5,
          label: "理论背景"
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
      title: "临床符号学",
      quote: "患者的言语是一个文本，症状是标点符号。",
      context: "符号学理论在临床实践中的应用，展示身体和心理症状如何在患者叙事中作为结构元素发挥作用。这些'标点符号'揭示了痛苦的基本语法。",
      source: {
        work: "Do You Read Me",
        page: 95,
        chapter: "第五章：临床文本",
        year: 2018
      },
      themes: ["language", "clinical"],
      relatedQuotes: [
        {
          id: "quote_001",
          relationship: "applies",
          strength: 0.6,
          label: "实际应用"
        },
        {
          id: "quote_004",
          relationship: "applies",
          strength: 0.7,
          label: "临床相关性"
        },
        {
          id: "quote_012",
          relationship: "synthesizes",
          strength: 0.5,
          label: "整合"
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
      title: "社交媒体中的痛苦",
      quote: "数字竞技场已将私人痛苦转化为公共表演。",
      context: "对社交媒体平台如何创造痛苦表演新机制的当代分析。数字竞技场放大并货币化个人痛苦的展示，创造新的身份形式。",
      source: {
        work: "Triumphant Victim",
        page: 145,
        chapter: "第七章：数字舞台",
        year: 2021
      },
      themes: ["identity", "social"],
      relatedQuotes: [
        {
          id: "quote_002",
          relationship: "applies",
          strength: 0.6,
          label: "当代应用"
        },
        {
          id: "quote_005",
          relationship: "applies",
          strength: 0.8,
          label: "现代语境"
        },
        {
          id: "quote_008",
          relationship: "expands",
          strength: 0.6,
          label: "进一步分析"
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
      title: "整合的自我",
      quote: "完整不是矛盾的缺席，而是对悖论的拥抱。",
      context: "多个主题的综合，表明心理健康不是来自解决矛盾，而是来自发展同时持有悖论真理的能力。这代表了分析旅程的高潮。",
      source: {
        work: "Triumphant Victim",
        page: 223,
        chapter: "第十一章：超越解决",
        year: 2021
      },
      themes: ["interpretation", "desire"],
      relatedQuotes: [
        {
          id: "quote_003",
          relationship: "synthesizes",
          strength: 0.6,
          label: "整合"
        },
        {
          id: "quote_006",
          relationship: "synthesizes",
          strength: 0.7,
          label: "治疗目标"
        },
        {
          id: "quote_010",
          relationship: "synthesizes",
          strength: 0.5,
          label: "临床整合"
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
      label: "进一步探索",
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
      label: "历史背景",
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
      label: "临床应用",
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
      label: "深入分析",
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
      label: "替代观点",
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
      label: "社会影响",
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
      label: "治疗过程",
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
      label: "哲学影响",
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
      label: "整合",
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
      label: "理论背景",
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
      label: "临床相关性",
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
      label: "对立观点",
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
      label: "当代相关性",
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
      label: "伦理考量",
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
      label: "治疗目标",
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
      label: "哲学影响",
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
      label: "进一步探索",
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
      label: "临床整合",
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