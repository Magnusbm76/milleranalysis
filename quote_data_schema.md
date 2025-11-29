# Contextual Quote Journey Data Structure Schema

## Overview
This document defines the JSON schema for the "Contextual Quote Journey" system that will replace the current simple click-to-reveal functionality in the Miller Analysis project. This system implements a network-based interactive experience where each quote connects to related quotes, creating a "Labyrinth of Interpretation."

## JSON Schema Definition

### Root Object Structure

```json
{
  "metadata": {
    "version": "1.0",
    "lastUpdated": "2025-11-27",
    "totalQuotes": 12,
    "description": "Contextual Quote Journey data for Miller Analysis"
  },
  "quotes": [
    // Array of Quote objects
  ],
  "themes": [
    // Array of Theme objects
  ],
  "connections": [
    // Array of Connection objects
  ]
}
```

### Quote Object Schema

```json
{
  "id": "quote_001",                    // Unique identifier (required)
  "title": "The Failure of Language",  // Quote title (required)
  "quote": "Every sentence is already a betrayal of the initial thought.", // Quote text (required)
  "context": "This insight explores...", // Detailed explanation (required)
  "source": {                           // Source information (required)
    "work": "Do You Read Me",           // Book/work title
    "page": 42,                         // Page number (optional)
    "chapter": "Chapter 3",             // Chapter (optional)
    "year": 2018                        // Publication year (optional)
  },
  "themes": ["language", "semiotics"],  // Array of theme IDs (required)
  "relatedQuotes": [                    // Array of related quote IDs (required)
    {
      "id": "quote_004",                // Related quote ID
      "relationship": "expands",        // Relationship type
      "strength": 0.8,                  // Connection strength (0.1-1.0)
      "label": "Further exploration"    // Optional label for connection
    }
    // Maximum 3 related quotes per quote
  ],
  "visual": {                           // Visual representation (optional)
    "type": "node",                     // Visual type: "node", "central", "terminal"
    "color": "#002147",                 // Custom color (optional)
    "size": 1.0,                        // Relative size (0.5-2.0)
    "icon": "language-icon.svg"         // Icon filename (optional)
  },
  "position": {                         // Position for initial layout (optional)
    "x": 0.5,                          // X position (0.0-1.0)
    "y": 0.3,                          // Y position (0.0-1.0)
    "fixed": false                     // Whether position is fixed
  },
  "metadata": {                         // Additional metadata (optional)
    "difficulty": "intermediate",       // "beginner", "intermediate", "advanced"
    "readingTime": 2,                   // Estimated reading time in minutes
    "popularity": 0.7,                  // Usage statistics (0.0-1.0)
    "dateAdded": "2025-11-27"          // When quote was added
  }
}
```

### Theme Object Schema

```json
{
  "id": "language",                     // Unique theme identifier (required)
  "name": "Language & Semiotics",       // Display name (required)
  "description": "Exploration of linguistic limitations...", // Theme description (required)
  "color": "#FFD700",                   // Theme color for visualization (required)
  "icon": "language-theme.svg",         // Theme icon (optional)
  "relatedThemes": ["semiotics", "communication"] // Related theme IDs (optional)
}
```

### Connection Object Schema

```json
{
  "from": "quote_001",                  // Source quote ID (required)
  "to": "quote_004",                    // Target quote ID (required)
  "type": "expands",                    // Relationship type (required)
  "strength": 0.8,                      // Connection strength (0.1-1.0)
  "label": "Further exploration",       // Connection label (optional)
  "bidirectional": true,                // Whether connection works both ways
  "visual": {                           // Visual properties (optional)
    "style": "solid",                   // "solid", "dashed", "dotted"
    "color": "#FFD700",                 // Connection color
    "width": 2                          // Line width in pixels
  }
}
```

## Relationship Types

The system supports the following relationship types between quotes:

- **expands**: Extends or elaborates on the concept
- **contradicts**: Offers a contrasting perspective
- **applies**: Practical application of the concept
- **questions**: Raises questions about the concept
- **contextualizes**: Provides historical or theoretical context
- **synthesizes**: Combines multiple concepts

## Theme Categories

Quotes can be categorized into these thematic areas:

- **language**: Language & Semiotics
- **identity**: Identity & Selfhood
- **desire**: Desire & Subjectivity
- **interpretation**: Interpretation & Analysis
- **clinical**: Clinical Applications
- **social**: Social & Cultural Context
- **philosophical**: Philosophical Foundations

## Visual Representation Types

- **node**: Standard quote node in the network
- **central**: Central or foundational concept
- **terminal**: End point in a conceptual journey
- **gateway**: Entry point to a specific theme

## Implementation Notes

1. **Scalability**: The structure supports easy addition of new quotes by simply adding to the quotes array and updating connections.

2. **Network Traversal**: The connections array provides efficient graph traversal algorithms for finding paths between quotes.

3. **Visual Layout**: Position properties provide initial layout hints while allowing for dynamic positioning based on user interaction.

4. **Theme Organization**: Themes allow for filtering and visual grouping of related concepts.

5. **Progressive Disclosure**: Difficulty and reading time metadata can guide user journeys through the labyrinth.

6. **Performance**: The structure is optimized for JavaScript traversal with direct ID references and minimal nesting.