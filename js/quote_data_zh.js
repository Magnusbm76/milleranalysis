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
      name: "语言与符号学",
      description: "探索语言限制以及能指与所指之间的鸿沟",
      color: "#FFD700",
      icon: "language-theme.svg",
      relatedThemes: ["semiotics", "communication"]
    },
    {
      id: "identity",
      name: "身份与自我",
      description: "通过社会结构和个人叙事塑造身份",
      color: "#002147",
      icon: "identity-theme.svg",
      relatedThemes: ["social", "desire"]
    },
    {
      id: "interpretation",
      name: "解释与分析",
      description: "精神分析解释的过程和限制",
      color: "#36454F",
      icon: "interpretation-theme.svg",
      relatedThemes: ["clinical", "philosophical"]
    },
    {
      id: "desire",
      name: "欲望与主体性",
      description: "欲望的本质及其在塑造主体体验中的作用",
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
      description: "精神分析理论的潜在哲学原则",
      color: "#556B2F",
      icon: "philosophical-theme.svg",
      relatedThemes: ["interpretation", "desire"]
    }
  ],

  quotes: [
    {
      id: "quote_001",
      title: "分析师不阅读患者的故事",
      quote: "分析师不阅读患者的故事；分析师阅读故事无法连贯的地方。",
      context: "这一见解探索了能指与所指之间基本的符号学鸿沟，基于拉康早期关于交流限制的工作。说话行为不可避免地扭曲了原始思想，在意图与表达之间制造了永久的鸿沟。",
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
      title: "胜利的受害者",
      quote: "胜利的受害者是通过其痛苦成功捕获他者的欲望并主导世界舞台的人。",
      context: "摘自《胜利的受害者》，讨论现代社会结构如何鼓励和验证一种植根于结构不足的表演性身份。这种身份既提供社会认可，也提供心理舒适。",
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
          label: "更深入的分析"
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
      id: "quote_004",
      title: "好的解释",
      quote: "一个好的解释不是真实的解释，而是在主体无意识中产生真理效果的解释。",
      context: "扩展语言的失败，这段引语探索了能指如何总是包含内在的沉默——一个代表无法被表达内容的鸿沟。这种沉默不是空虚，而是意义产生的空间。",
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
      title: "倒错结构",
      quote: "在倒错结构中，受害者的痛苦是主体试图完成他者缺乏的工具。",
      context: "更深入地分析作为表演的受害者身份，重点关注社交媒体和现代文化如何创建奖励痛苦表现的反馈循环。表演通过其社会验证变得真实。",
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
          label: "核心概念"
        },
        {
          id: "quote_008",
          relationship: "contradicts",
          strength: 0.5,
          label: "对比点"
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
      id: "quote_007",
      title: "分析师的训练",
      quote: "分析师的训练始于他们意识到不再倾听意义，而是倾听能指结构的时刻。",
      context: "理解精神分析理论发展的历史背景，特别是拉康如何通过结构语言学重新解读弗洛伊德的作品。这种重新解读为理解无意识创造了新的可能性。",
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
          label: "哲学含义"
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
      quote: "真正的力量始于我们认识到痛苦中的选择。",
      context: "对受害者身份分析的对比点，表明认识到痛苦中的能动性代表了迈向真正力量的第一步。这挑战了关于社会条件化的决定论观点。",
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
          label: "替代视角"
        },
        {
          id: "quote_005",
          relationship: "contradicts",
          strength: 0.5,
          label: "对比点"
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
      id: "quote_010",
      title: "阻抗与治愈",
      quote: "阻抗不是治愈的障碍；它是分析工作的材料本身。",
      context: "符号学理论在临床实践中的应用，展示身体和心理症状如何在患者叙事中作为结构元素发挥作用。这些'标点符号'揭示了痛苦的基本语法。",
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
      title: "痛苦作为货币",
      quote: "痛苦不仅仅是一种存在状态；在胜利受害者的经济中，它成为用于与符号秩序谈判的货币形式。",
      context: "当代分析社交媒体平台如何为痛苦表演创建新机制。数字舞台增强并货币化个人痛苦的展示，创造新的身份形式。",
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
          label: "当代应用"
        },
        {
          id: "quote_005",
          relationship: "applies",
          strength: 0.8,
          label: "现代背景"
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
      label: "更深入的分析",
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
      label: "对比点",
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
      from: "quote_007",
      to: "quote_009",
      type: "expands",
      strength: 0.5,
      label: "哲学含义",
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
    }
  ]
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = quoteData;
}
