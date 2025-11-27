# Labyrinth of Interpretation: Asset Organization Structure

**Date:** November 26, 2025
**Project:** John F. Miller Website - Media Asset Organization
**Concept:** The Labyrinth of Interpretation

---

## Table of Contents
1. [Directory Structure Overview](#directory-overview)
2. [Detailed Directory Structure](#detailed-structure)
3. [File Organization System](#file-organization)
4. [Technical Specifications](#technical-specs)
5. [Workflow Integration](#workflow-integration)
6. [Documentation Requirements](#documentation-requirements)
7. [Asset Management Guidelines](#asset-management)

---

<a name="directory-overview"></a>
## 1. Directory Structure Overview

The asset organization structure for John F. Miller's Labyrinth concept website follows a hierarchical approach designed to accommodate the AI-generated media assets while maintaining scalability, version control, and efficient workflow integration.

```
assets/
├── video/
│   ├── hero-loop.mp4
│   └── ambient-loops/
├── images/
│   ├── textures/
│   ├── book-covers/
│   └── quote-cards/
└── generated/
```

This structure provides a clear separation between different asset types while allowing for future expansion and efficient management throughout the development lifecycle.

---

<a name="detailed-structure"></a>
## 2. Detailed Directory Structure

### Complete Directory Hierarchy

```
assets/
├── video/
│   ├── hero/
│   │   ├── hero-loop-v1.mp4
│   │   ├── hero-loop-v1.webm
│   │   ├── hero-loop-v2.mp4
│   │   └── hero-loop-v2.webm
│   ├── ambient-loops/
│   │   ├── library-ambience-v1.mp4
│   │   ├── library-ambience-v1.webm
│   │   ├── river-cherwell-v1.mp4
│   │   ├── river-cherwell-v1.webm
│   │   ├── architectural-elements-v1.mp4
│   │   └── architectural-elements-v1.webm
│   └── README.md
├── images/
│   ├── textures/
│   │   ├── parchment/
│   │   │   ├── parchment-texture-v1.png
│   │   │   └── parchment-texture-v2.png
│   │   ├── leather/
│   │   │   ├── leather-texture-v1.png
│   │   │   └── leather-texture-v2.png
│   │   └── water-reflection/
│   │       ├── water-reflection-v1.png
│   │       └── water-reflection-v2.png
│   ├── book-covers/
│   │   ├── do-you-read-me/
│   │   │   ├── do-you-read-me-default-v1.png
│   │   │   ├── do-you-read-me-hover-v1.png
│   │   │   ├── do-you-read-me-default-v2.png
│   │   │   └── do-you-read-me-hover-v2.png
│   │   └── triumphant-victim/
│   │       ├── triumphant-victim-default-v1.png
│   │       ├── triumphant-victim-hover-v1.png
│   │       ├── triumphant-victim-default-v2.png
│   │       └── triumphant-victim-hover-v2.png
│   ├── quote-cards/
│   │   ├── communication/
│   │   │   ├── comm-quote-bg-v1.png
│   │   │   └── comm-quote-bg-v2.png
│   │   ├── psychological/
│   │   │   ├── psych-quote-bg-v1.png
│   │   │   └── psych-quote-bg-v2.png
│   │   └── academic/
│   │       ├── academic-quote-bg-v1.png
│   │       └── academic-quote-bg-v2.png
│   ├── atmospheric/
│   │   ├── section-dividers/
│   │   │   ├── divider-primary-v1.png
│   │   │   ├── divider-dots-v1.png
│   │   │   └── divider-maze-v1.png
│   │   ├── navigation/
│   │   │   ├── compass-rose-v1.png
│   │   │   └── directional-indicators-v1.png
│   │   └── icons/
│   │       ├── interpretation-icon-v1.png
│   │       └── reflection-icon-v1.png
│   └── README.md
├── generated/
│   ├── working/
│   │   ├── video-exports/
│   │   ├── image-exports/
│   │   └── temp/
│   ├── archive/
│   │   ├── deprecated/
│   │   └── unused/
│   ├── metadata/
│   │   ├── asset-tracking.csv
│   │   ├── generation-logs/
│   │   └── quality-reports/
│   └── README.md
└── README.md
```

### Directory Purpose and Function

#### `/assets/video/`
Contains all video assets for the website, including the hero background and ambient loops. Each video asset includes both MP4 (primary) and WebM (fallback) formats to ensure cross-browser compatibility.

#### `/assets/images/textures/`
Stores background texture assets used throughout the website to add depth and visual interest. Organized by texture type (parchment, leather, water-reflection) with version control for iterations.

#### `/assets/images/book-covers/`
Contains the default and hover states for Miller's book covers. Organized by book title with clear separation between default and hover variants.

#### `/assets/images/quote-cards/`
Holds background images for the interactive quote cards, organized by thematic category (communication, psychological, academic) to facilitate content pairing.

#### `/assets/images/atmospheric/`
Contains supporting visual elements that enhance the labyrinth theme, including section dividers, navigation elements, and icons.

#### `/assets/generated/`
Working directory for the asset generation process, containing temporary files, exports, and archived materials. This directory facilitates the workflow between AI generation tools and final asset integration.

---

<a name="file-organization"></a>
## 3. File Organization System

### Naming Conventions

#### Video Assets
- **Pattern:** `{purpose}-{description}-v{version}.{format}`
- **Examples:**
  - `hero-loop-v1.mp4`
  - `library-ambience-v1.webm`
  - `river-cherwell-v2.mp4`

#### Image Assets
- **Pattern:** {category}-{specific-name}-{state}-v{version}.{format}
- **Examples:**
  - `do-you-read-me-default-v1.png`
  - `comm-quote-bg-v2.png`
  - `divider-primary-v1.png`

#### Version Control System
- **Version Numbers:** Incremented for significant changes (v1, v2, v3)
- **State Indicators:** `default`, `hover`, `active` for interactive elements
- **Format Extensions:** `.mp4`, `.webm` for video; `.png` for images with transparency

### Metadata Tagging System

Each asset should include embedded metadata with the following fields:

#### Standard Metadata Fields
- **Asset ID:** Unique identifier (e.g., `VID-HERO-001`, `IMG-QUOTE-001`)
- **Creation Date:** ISO 8601 format (YYYY-MM-DD)
- **Generation Tool:** AI tool used (Veo 3.1, Nano Banana Pro)
- **Prompt Reference:** Link to prompt in prompt bank
- **Seed Value:** AI generation seed for reproducibility
- **Dimensions:** Width x Height in pixels
- **File Size:** In kilobytes
- **Color Profile:** sRGB or other color space
- **Usage Context:** Where the asset is used on the website
- **Status:** `working`, `approved`, `deprecated`

#### Custom Metadata Fields
- **Theme Alignment:** How well the asset aligns with labyrinth theme (1-10 scale)
- **Academic Credibility:** Assessment of academic appropriateness (1-10 scale)
- **Technical Quality:** Technical assessment (1-10 scale)
- **Notes:** Additional context or special considerations

### Backup and Archival Strategy

#### Backup System
- **Daily Backups:** Automatic backup of the entire assets directory
- **Version Snapshots:** Weekly snapshots of the assets directory
- **Cloud Storage:** Off-site backup with version history
- **Redundancy:** Local and remote backup copies

#### Archival Process
- **Deprecated Assets:** Move to `/assets/generated/archive/deprecated/`
- **Unused Assets:** Move to `/assets/generated/archive/unused/`
- **Archive Metadata:** Include reason for archival and date
- **Retention Policy:** Keep archived assets for 12 months before permanent deletion

---

<a name="technical-specs"></a>
## 4. Technical Specifications

### Video Assets (Veo 3.1)

#### File Format Standards
- **Primary Format:** MP4 with H.264 compression
- **Fallback Format:** WebM with VP9 compression
- **Container:** MP4/WebM with proper metadata headers
- **Color Space:** sRGB for web consistency

#### Compression Guidelines
- **Target Bitrate:** 2-4 Mbps (balance quality and file size)
- **Maximum File Size:** 8MB for optimal loading
- **Compression Profile:** High profile for H.264
- **Keyframe Interval:** 2 seconds for smooth seeking

#### Resolution and Dimension Requirements
- **Hero Background:** 1920x1080 (16:9 aspect ratio)
- **Ambient Loops:** 1920x1080 (16:9 aspect ratio)
- **Frame Rate:** 24fps for cinematic quality
- **Duration:** 10-20 seconds with seamless loop

### Image Assets (Nano Banana Pro)

#### File Format Standards
- **Primary Format:** PNG with transparency support
- **Color Depth:** 24-bit with alpha channel
- **Compression:** Lossless PNG for quality preservation
- **Color Space:** sRGB for web consistency

#### Resolution and Dimension Requirements
- **Quote Cards:** 800x450px (16:9 ratio)
- **Book Covers:** 400x600px (2:3 book ratio)
- **Section Dividers:** 1200x100px
- **Background Textures:** 1920x1080px
- **Icons:** 64x64px or 200x200px
- **Resolution:** 150-200dpi for crisp display

#### File Size Targets
- **Quote Cards:** Under 500KB
- **Book Covers:** Under 800KB
- **Atmospheric Elements:** Under 200KB
- **Background Textures:** Under 1MB

### Quality Control Standards

#### Visual Quality Criteria
- **Clarity:** Sharp, well-defined elements
- **Color Accuracy:** Oxford blue (#002147) precision
- **Contrast:** Appropriate for text overlay (minimum 4.5:1)
- **Consistency:** Unified visual language across assets

#### Technical Quality Criteria
- **File Integrity:** No corruption or artifacts
- **Optimization:** Efficient compression without quality loss
- **Compatibility:** Works across major browsers
- **Performance:** Fast loading and smooth rendering

---

<a name="workflow-integration"></a>
## 5. Workflow Integration

### Asset Generation Workflow

#### Phase 1: Generation
1. **Prompt Selection:** Choose appropriate prompt from [`labyrinth_ai_prompt_bank.md`](labyrinth_ai_prompt_bank.md)
2. **Tool Configuration:** Set up AI generation tool with specified parameters
3. **Asset Generation:** Generate initial asset variations
4. **Initial Review:** Basic quality check against specifications
5. **Export to Working:** Save to `/assets/generated/working/` with metadata

#### Phase 2: Refinement
1. **Quality Assessment:** Evaluate against quality control criteria
2. **Iterative Refinement:** Generate variations as needed
3. **Selection:** Choose best candidate for integration
4. **Final Optimization:** Optimize file size and format
5. **Metadata Completion:** Add comprehensive metadata

#### Phase 3: Integration
1. **Final Approval:** Sign-off on asset quality and appropriateness
2. **Directory Placement:** Move to appropriate final directory
3. **Version Control:** Update version numbers and tracking
4. **Website Integration:** Implement in website code
5. **Testing:** Verify functionality across browsers and devices

### Integration with Prompt Bank System

#### Prompt Reference System
- **Asset-Prompt Linking:** Each asset references its source prompt
- **Parameter Tracking:** Record generation parameters for reproducibility
- **Seed Value Storage:** Maintain seed values for consistent generation
- **Variation Management:** Track relationships between asset variations

#### Feedback Loop
- **Performance Tracking:** Monitor asset performance in real-world usage
- **User Feedback Collection:** Gather feedback on asset effectiveness
- **Prompt Refinement:** Update prompts based on asset performance
- **Knowledge Base Expansion:** Build library of effective prompt patterns

### Collaboration Considerations

#### Team Workflow
- **Clear Responsibilities:** Defined roles for generation, review, and integration
- **Communication Channels:** Regular check-ins on asset progress
- **Review Process:** Structured approval workflow
- **Documentation:** Comprehensive documentation of decisions and changes

#### Version Control
- **Asset Versioning:** Clear version numbers and change logs
- **Branch Strategy:** Separate branches for experimental assets
- **Merge Protocol:** Process for integrating approved changes
- **Rollback Capability:** Ability to revert to previous versions if needed

---

<a name="documentation-requirements"></a>
## 6. Documentation Requirements

### README Files Structure

#### Root `/assets/README.md`
- Overview of asset organization structure
- Directory structure explanation
- Naming convention guidelines
- Workflow overview
- Contact information for asset-related questions

#### `/assets/video/README.md`
- Video asset specifications
- Compression guidelines
- Format recommendations
- Quality control checklist
- Troubleshooting common issues

#### `/assets/images/README.md`
- Image asset specifications
- Resolution guidelines
- File format recommendations
- Quality control checklist
- Optimization techniques

#### `/assets/generated/README.md`
- Working directory guidelines
- Temporary file management
- Archive procedures
- Metadata requirements
- Cleanup protocols

### Asset Tracking Spreadsheet Structure

#### Core Fields
- **Asset ID:** Unique identifier
- **File Name:** Current file name
- **Directory Path:** Location in directory structure
- **Asset Type:** Video, image, texture, etc.
- **Creation Date:** When asset was created
- **Last Modified:** Most recent modification date
- **Version:** Current version number
- **Status:** Working, approved, deprecated
- **Creator:** Person or team who created asset
- **Reviewer:** Person who approved asset

#### Technical Fields
- **Dimensions:** Width x Height in pixels
- **File Size:** Current file size in KB
- **Format:** File format and compression
- **Color Space:** sRGB, Adobe RGB, etc.
- **Generation Tool:** AI tool used
- **Prompt Reference:** Link to source prompt
- **Seed Value:** AI generation seed
- **Parameters:** Generation parameters used

#### Usage Fields
- **Usage Context:** Where asset is used on website
- **Page References:** Specific pages where asset appears
- **Integration Date:** When asset was integrated
- **Performance Metrics:** Loading time, user engagement
- **Feedback Notes:** User feedback or comments

### Quality Control Documentation

#### Quality Assessment Checklist
- **Visual Quality:** Clarity, color accuracy, composition
- **Technical Quality:** File integrity, optimization, compatibility
- **Content Alignment:** Theme consistency, academic appropriateness
- **Usability:** Text readability, interaction effectiveness
- **Performance:** Loading speed, rendering efficiency

#### Review Process Documentation
- **Review Criteria:** Standards used for evaluation
- **Review Team:** Members involved in review process
- **Approval Workflow:** Steps from creation to approval
- **Revision History:** Record of changes and improvements
- **Final Sign-off:** Documentation of final approval

---

<a name="asset-management"></a>
## 7. Asset Management Guidelines

### Asset Lifecycle Management

#### Creation Phase
- **Requirement Analysis:** Clear understanding of asset purpose
- **Prompt Development:** Detailed prompt creation
- **Generation Process:** Systematic asset generation
- **Initial Review:** Basic quality assessment
- **Metadata Assignment:** Initial metadata tagging

#### Active Use Phase
- **Integration:** Implementation in website
- **Performance Monitoring:** Regular performance checks
- **User Feedback Collection:** Gathering user responses
- **Maintenance Updates:** Regular optimization and updates
- **Usage Analytics:** Tracking asset effectiveness

#### Archive Phase
- **Deprecation Process:** Systematic retirement of outdated assets
- **Archive Documentation:** Comprehensive documentation of archived assets
- **Storage Optimization:** Efficient storage of archived materials
- **RetentionPolicy:** Clear policy for archive retention
- **Disposal Protocol:** Secure deletion of unnecessary assets

### Performance Optimization

#### File Optimization Techniques
- **Compression Optimization:** Balance between quality and file size
- **Format Selection:** Appropriate format for each asset type
- **Resolution Management:** Appropriate resolution for usage context
- **Loading Strategies:** Lazy loading and progressive loading
- **Caching Implementation:** Browser and server caching strategies

#### Website Performance Integration
- **Critical Path Optimization:** Prioritize loading of essential assets
- **Responsive Asset Delivery:** Appropriate assets for different devices
- **CDN Integration:** Content delivery network for global performance
- **Fallback Strategies:** Alternative assets for compatibility
- **Performance Monitoring:** Regular performance assessment

### Security Considerations

#### Asset Security
- **Access Control:** Appropriate permissions for asset access
- **Integrity Verification:** Regular checks for asset corruption
- **Backup Security:** Secure storage of backup copies
- **Version Control Security:** Protected access to version history
- **Metadata Protection:** Sensitive information protection

#### Copyright and Licensing
- **Asset Ownership:** Clear ownership of generated assets
- **Usage Rights:** Appropriate usage rights for all assets
- **Attribution Requirements:** Proper attribution where needed
- **License Compliance:** Adherence to licensing requirements
- **Copyright Documentation:** Documentation of copyright status

---

## Implementation Timeline

### Phase 1: Structure Setup (Week 1)
- Create directory structure
- Set up naming conventions
- Establish metadata system
- Create initial documentation

### Phase 2: Asset Generation (Weeks 2-3)
- Generate video assets
- Generate image assets
- Implement quality control
- Complete metadata tagging

### Phase 3: Integration (Week 4)
- Integrate assets into website
- Test across browsers and devices
- Optimize performance
- Document final implementation

### Phase 4: Maintenance (Ongoing)
- Regular performance monitoring
- Asset updates as needed
- Documentation maintenance
- Archive management

---

## Conclusion

This comprehensive asset organization structure provides a robust framework for managing the AI-generated media assets for John F. Miller's Labyrinth concept website. The system balances technical requirements with practical workflow considerations, ensuring efficient asset management throughout the project lifecycle.

The hierarchical directory structure, combined with clear naming conventions and comprehensive metadata tagging, provides scalability for future growth while maintaining organization and accessibility. Integration with the prompt bank system ensures consistency and reproducibility in asset generation.

By following these guidelines, the project team can efficiently manage the media assets while maintaining the high academic standards appropriate for an Oxford scholar's website, while also incorporating the subtle modern elements that enhance user engagement.

---

**Prepared by:** Miller Analysis Team  
**Date:** November 26, 2025  
**Project:** John F. Miller Website - Asset Organization Structure