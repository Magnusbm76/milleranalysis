# Layout Clipping Bug & Localization Realignment Plan

**Date:** 3 January 2026  
**Type:** Research & Planning Document  
**Status:** Ready for Implementation  

---

## Executive Summary

This report documents two critical issues requiring resolution:

1. **Layout Clipping Bug:** The quiz interface has insufficient bottom padding, causing content to be clipped at the viewport edge
2. **Localization Desync:** All 7 non-English language files contain completely fabricated quotes that must be replaced with verified book summaries

Both issues are fully analyzed with detailed implementation plans provided.

---

## Part 1: Layout Clipping Bug Analysis

### 1.1 Root Cause Identification

**File:** [`css/styles.css`](../css/styles.css)

**Problematic CSS Rules:**

1. **Lines 1311-1320:** `.quiz-interface` container
   ```css
   .quiz-interface {
       background-color: var(--color-oxford-blue);
       border: 1px solid var(--color-gold);
       border-radius: 0.5rem;
       padding: 2rem;
       max-width: 800px;
       margin: 0 auto;
       box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
       transition: all var(--transition-normal);
   }
   ```

2. **Lines 1527-1533:** `.quiz-navigation` container
   ```css
   .quiz-navigation {
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin-top: 2rem;
       gap: 1rem;
   }
   ```

3. **Lines 1805-1859:** Mobile responsive adjustments
   ```css
   @media (max-width: 768px) {
       .quiz-interface {
           padding: 1.5rem;
           margin: 0 1rem;
       }
   }
   ```

**Root Cause:**
The `.quiz-interface` container has fixed `padding: 2rem` (32px) on desktop and `padding: 1.5rem` (24px) on mobile. When quiz content, navigation buttons, and results are rendered, the total height exceeds the available viewport space, causing the bottom content (typically the "Return to Lobby" and "Exit" buttons) to be clipped by the viewport edge.

**Contributing Factors:**
- No `min-height` or `height: auto` to accommodate dynamic content
- No bottom padding buffer specifically for navigation buttons
- Fixed padding doesn't scale with content length
- Mobile breakpoint reduces padding further (24px), exacerbating the issue on smaller screens

### 1.2 Recommended Fix Strategy

**Approach:** Dynamic bottom padding with flexbox layout

**Implementation Plan:**

1. **Add dynamic bottom padding to `.quiz-interface`:**
   ```css
   .quiz-interface {
       /* Existing styles... */
       padding-bottom: calc(2rem + 80px); /* Base padding + button height buffer */
       min-height: auto;
   }
   ```

2. **Add responsive bottom padding for mobile:**
   ```css
   @media (max-width: 768px) {
       .quiz-interface {
           padding-bottom: calc(1.5rem + 100px); /* Larger buffer for mobile */
       }
   }
   ```

3. **Alternative: Use flexbox column layout:**
   ```css
   .quiz-interface {
       display: flex;
       flex-direction: column;
       min-height: 100vh;
       padding: 2rem;
       padding-bottom: 4rem; /* Generous bottom buffer */
   }
   
   .quiz-results-actions {
       margin-top: auto; /* Push to bottom */
   }
   ```

4. **Ensure footer/exit buttons never overlap:**
   ```css
   .quiz-navigation,
   .quiz-results-actions {
       position: relative;
       z-index: 10;
       margin-top: 2rem;
       padding-bottom: 1rem;
   }
   ```

**Benefits of This Approach:**
- Responsive to content length
- Maintains consistent spacing across devices
- Prevents viewport clipping regardless of quiz length
- Preserves existing visual design

---

## Part 2: Multi-Language Desync Analysis

### 2.1 Verified English Baseline

**File:** [`js/quote_data.js`](../js/quote_data.js)

**Verified Content Structure:**
- **Version:** 2.0 (updated 2026-01-03)
- **Total Quotes:** 6 book summaries (not fabricated quotes)
- **Source Material:** Verified from [`docs/fact_check_report.md`](../fact_check_report.md)
- **Content Type:** Book summaries and thematic descriptions from actual publications

**Verified Book Summaries:**
1. `summary_001`: "The Triumphant Victim - Overview"
2. `summary_002`: "Part One: Origins of Perverse Pathology"
3. `summary_003`: "Part Two: Contemporary Modes of Thinking"
4. `summary_004`: "Do You Read Me? - Core Thesis"
5. `summary_005`: "Part I: Reading Disability"
6. `summary_006`: "Part III: The Education Issue"

**Key Finding:** The English baseline contains NO fabricated quotes. All content is verified book summaries from actual publications.

### 2.2 Localization Files Audit

All 7 localization files contain **completely different, fabricated content**:

#### 2.2.1 Spanish ([`js/quote_data_es.js`](../js/quote_data_es.js))
- **Version:** 1.0 (outdated)
- **Total Quotes:** 8 fabricated quotes
- **Content:** Lacanian psychoanalysis quotes (NOT Miller's work)
- **Issues:**
  - References non-existent book: "Do You Read Me? Training for Analysts" (2018)
  - Contains fabricated quotes with fake page numbers
  - Wrong theoretical framework (Lacanian instead of post-Kleinian)
  - All 8 quotes are hallucinated fabrications

#### 2.2.2 French ([`js/quote_data_fr.js`](../js/quote_data_fr.js))
- **Version:** 1.0 (outdated)
- **Total Quotes:** 8 fabricated quotes
- **Content:** Same Lacanian fabrications as Spanish
- **Issues:** Identical to Spanish file - completely wrong content

#### 2.2.3 Latin ([`js/quote_data_la.js`](../js/quote_data_la.js))
- **Version:** 1.0 (outdated)
- **Total Quotes:** 8 fabricated quotes
- **Content:** Lacanian fabrications in Latin
- **Issues:** Same wrong content, just translated

#### 2.2.4 Norwegian ([`js/quote_data_no.js`](../js/quote_data_no.js))
- **Version:** 1.0 (outdated)
- **Total Quotes:** 8 fabricated quotes
- **Content:** Lacanian fabrications in Norwegian
- **Issues:** Same wrong content, just translated

#### 2.2.5 Polish ([`js/quote_data_pl.js`](../js/quote_data_pl.js))
- **Version:** 1.0 (outdated)
- **Total Quotes:** 8 fabricated quotes
- **Content:** Lacanian fabrications in Polish
- **Issues:** Same wrong content, just translated

#### 2.2.6 Chinese ([`js/quote_data_zh.js`](../js/quote_data_zh.js))
- **Version:** 1.0 (outdated)
- **Total Quotes:** 8 fabricated quotes
- **Content:** Lacanian fabrications in Chinese
- **Issues:** Same wrong content, just translated

#### 2.2.7 Egyptian Arabic ([`js/quote_data_egy.js`](../js/quote_data_egy.js))
- **Version:** 1.0 (outdated)
- **Total Quotes:** 8 fabricated quotes
- **Content:** Lacanian fabrications in Arabic
- **Issues:** Same wrong content, just translated

### 2.3 Critical Finding

**ALL 7 localization files contain identical fabricated content:**
- 8 quotes each (total: 56 fabricated quotes across all languages)
- All reference non-existent book: "Do You Read Me? Training for Analysts" (2018)
- All use wrong theoretical framework (Lacanian vs. post-Kleinian)
- All have fake page numbers and chapter references
- None match the verified English baseline (6 book summaries)

**Translation Required:**
- 6 verified book summaries from English baseline
- 7 theme descriptions
- Connection labels
- Metadata fields

**Translation Scope:**
- ~2,000 words per language (estimated)
- Technical psychoanalytic terminology
- Post-Kleinian framework concepts

---

## Part 3: RTL Layout Compatibility Analysis (Arabic)

### 3.1 Current RTL Support in CSS

**File:** [`css/styles.css`](../css/styles.css)

**Existing RTL Rules (Lines 1734-1801):**

```css
/* RTL Layout Adjustments */
.quiz-interface[dir="rtl"] {
    text-align: right;
}

.quiz-interface[dir="rtl"] .quiz-progress-text {
    text-align: right;
}

/* RTL Exit Button Positioning */
.quiz-interface[dir="rtl"] .btn-quiz-exit {
    right: auto;
    left: 0;
}

.quiz-interface[dir="rtl"] .quiz-question-text,
.quiz-interface[dir="rtl"] .quiz-question-context {
    text-align: right;
}

.quiz-interface[dir="rtl"] .quiz-scale-buttons {
    flex-direction: row-reverse;
}

.quiz-interface[dir="rtl"] .quiz-scale-btn {
    flex-direction: column;
}

.quiz-interface[dir="rtl"] .quiz-navigation {
    flex-direction: row-reverse;
}

.quiz-interface[dir="rtl"] .btn-quiz-prev {
    margin-right: auto;
    margin-left: 1rem;
}

.quiz-interface[dir="rtl"] .btn-quiz-next,
.quiz-interface[dir="rtl"] .btn-quiz-submit {
    margin-left: 1rem;
    margin-right: auto;
}
```

### 3.2 New Buttons RTL Compatibility

**New Buttons to Verify:**
1. **Return to Lobby Button** (Lines 1359-1393)
2. **Exit Quiz Button** (Lines 1331-1356)

**Current Implementation Analysis:**

**Exit Button (`.btn-quiz-exit`):**
- Position: `absolute; top: 0; right: 0;`
- RTL fix: `right: auto; left: 0;` ✓ **Already handled**
- Status: **Compatible with RTL**

**Return to Lobby Button (`.btn-quiz-return-lobby`):**
- Position: `relative` (not absolute)
- Margin: `margin-right: 1rem;`
- **Issue:** No RTL-specific override for margin

### 3.3 RTL Issues Identified

**Issue 1: Return to Lobby Button Margin**
```css
.btn-quiz-return-lobby {
    /* ... */
    margin-right: 1rem;
}
```

**Problem:** In RTL, this should be `margin-left` instead.

**Fix Required:**
```css
.quiz-interface[dir="rtl"] .btn-quiz-return-lobby {
    margin-right: 0;
    margin-left: 1rem;
}
```

**Issue 2: Navigation Button Order**
```css
.quiz-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
}
```

**Current RTL Fix:**
```css
.quiz-interface[dir="rtl"] .quiz-navigation {
    flex-direction: row-reverse;
}
```

**Status:** ✓ **Already handled** - buttons will reverse order in RTL

**Issue 3: Text Direction**
- Quiz interface needs `dir="rtl"` attribute set on HTML element
- Currently, no explicit direction setting for Arabic locale

**Fix Required:**
```javascript
// When switching to Arabic (ar-EG)
const quizInterface = document.querySelector('.quiz-interface');
if (currentLocale === 'ar-EG') {
    quizInterface.setAttribute('dir', 'rtl');
} else {
    quizInterface.removeAttribute('dir');
}
```

### 3.4 RTL Compatibility Summary

| Element | Current Status | RTL Support | Action Required |
|---------|----------------|--------------|-----------------|
| Exit Button | ✓ Compatible | ✓ Implemented | None |
| Return to Lobby Button | ✗ Incompatible | ✗ Missing | Add margin flip |
| Navigation Buttons | ✓ Compatible | ✓ Implemented | None |
| Quiz Questions | ✓ Compatible | ✓ Implemented | None |
| Scale Buttons | ✓ Compatible | ✓ Implemented | None |
| Results Display | ✓ Compatible | ✓ Implemented | None |
| Text Direction | ✗ Missing | ✗ Missing | Add dir="rtl" attribute |

**Recommendation:** Add CSS rule for `.btn-quiz-return-lobby` RTL margin flip and ensure `dir="rtl"` is set when Arabic locale is active.

---

## Part 4: Implementation Options

### Option 1: Minimal Fix (Fastest)

**Scope:**
- Fix layout clipping bug only
- Use English fallbacks for all non-English languages
- Document translation requirements for future

**Implementation Steps:**

1. **Fix Layout Clipping:**
   - Modify [`css/styles.css`](../css/styles.css) line 1311-1320
   - Add `padding-bottom: calc(2rem + 80px);` to `.quiz-interface`
   - Add mobile breakpoint with `padding-bottom: calc(1.5rem + 100px);`

2. **Add RTL Margin Fix:**
   - Add CSS rule for `.quiz-interface[dir="rtl"] .btn-quiz-return-lobby`
   - Flip margin from right to left

3. **Add Text Direction Logic:**
   - Modify JavaScript to set `dir="rtl"` when locale is 'ar-EG'

4. **Document Translation Gaps:**
   - Create TODO list noting all 7 languages need complete replacement
   - Note that current content is fabricated and should not be used

**Pros:**
- Fastest implementation (1-2 hours)
- Immediate fix for layout bug
- No translation work required
- Documentation created for future reference

**Cons:**
- Non-English users see English content
- Fabricated quotes remain in codebase (just not displayed)
- Incomplete user experience for international users
- Requires follow-up work later

**Time Estimate:** 1-2 hours

---

### Option 2: Standard Fix (Recommended)

**Scope:**
- Fix layout clipping bug
- Fix RTL compatibility
- Create structured translation templates for all 7 languages
- Clear instructions for human translators
- Replace all fabricated content with English fallbacks temporarily

**Implementation Steps:**

1. **Fix Layout Clipping** (same as Option 1)

2. **Fix RTL Compatibility** (same as Option 1)

3. **Create Translation Template:**
   - Extract all 6 verified book summaries from [`js/quote_data.js`](../js/quote_data.js)
   - Create JSON template with English source text
   - Include context notes for translators (post-Kleinian framework)
   - Mark technical terms requiring careful translation

4. **Update All 7 Language Files:**
   - Replace fabricated content with English fallbacks
   - Update version to "2.0"
   - Update lastUpdated to "2026-01-03"
   - Add translation_status field: "pending_translation"

5. **Create Translator Guide:**
   - Document post-Kleinian terminology
   - Provide glossary of key terms
   - Explain context for each book summary
   - Specify character limits if applicable

6. **Add Translation Status Tracking:**
   - Add metadata field to track translation completion
   - Create checklist for each language

**Translation Template Structure:**
```json
{
  "metadata": {
    "version": "2.0",
    "lastUpdated": "2026-01-03",
    "translationStatus": "pending",
    "sourceLanguage": "en"
  },
  "translations": [
    {
      "id": "summary_001",
      "title_en": "The Triumphant Victim - Overview",
      "title_target": "[TRANSLATE]",
      "quote_en": "The book examines the unrecognised prevalence of sadomasochism...",
      "quote_target": "[TRANSLATE]",
      "context_en": "This book offers a provocative examination...",
      "context_target": "[TRANSLATE]",
      "notes": "Post-Kleinian framework. Sadomasochism refers to psychological patterns, not literal interpretation."
    }
    // ... 5 more summaries
  ]
}
```

**Pros:**
- Fixes both layout and RTL issues
- Provides clear path to full localization
- Professional translation workflow
- English fallbacks ensure functionality
- Scalable approach for future languages
- Documentation for translators

**Cons:**
- Requires human translators (not automated)
- Takes longer than Option 1
- Need to find qualified translators for 7 languages
- Technical psychoanalytic terminology requires expertise

**Time Estimate:** 4-6 hours (implementation) + 2-4 weeks (translation)

---

### Option 3: Comprehensive Fix (Long-term Solution)

**Scope:**
- Fix layout clipping bug
- Fix RTL compatibility
- Implement automated localization system
- Create translation management infrastructure
- Integrate with translation management system (TMS)
- Ensure ongoing synchronization

**Implementation Steps:**

1. **Fix Layout Clipping** (same as Option 1)

2. **Fix RTL Compatibility** (same as Option 1)

3. **Create Localization Infrastructure:**
   - Build JSON-based translation system
   - Implement locale detection and switching
   - Create translation loading mechanism
   - Add fallback chain (target → English → default)

4. **Implement Automated Translation Bridge:**
   - Create sync script that compares English baseline with all languages
   - Generate translation diff reports
   - Flag missing or outdated translations
   - Auto-generate translation templates

5. **Integrate Translation Management System:**
   - Choose TMS (e.g., Lokalise, Phrase, Crowdin)
   - Set up API integration
   - Implement webhook for translation updates
   - Create automated deployment pipeline

6. **Build Translation Dashboard:**
   - Admin interface to view translation status
   - Progress tracking per language
   - Quality metrics
   - Translator assignment system

7. **Create Continuous Localization Pipeline:**
   - Git hooks to trigger translation checks
   - Automated testing of translated content
   - Screenshot comparison for visual regressions
   - Performance monitoring

**Architecture:**
```
┌─────────────────────────────────────────────────────────┐
│                   Translation Management System          │
│              (Lokalise/Phrase/Crowdin)             │
└──────────────────────┬──────────────────────────────────┘
                       │ API/Webhooks
                       ▼
┌─────────────────────────────────────────────────────────┐
│              Localization Middleware                     │
│  • Locale detection                                  │
│  • Translation loading                                │
│  • Fallback chain                                    │
│  • Caching layer                                     │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│              Application Layer                          │
│  • React components with i18n hooks                   │
│  • Dynamic content rendering                          │
│  • RTL/LTR switching                                │
└─────────────────────────────────────────────────────────┘
```

**Pros:**
- Most robust and scalable solution
- Automated synchronization
- Professional translation workflow
- Continuous localization
- Easy to add new languages
- Quality assurance built-in
- Long-term maintainability

**Cons:**
- Highest implementation cost
- Requires TMS subscription
- Most complex architecture
- Longest time to implement
- May be overkill for current scope

**Time Estimate:** 2-3 weeks (implementation) + ongoing (maintenance)

---

## Part 5: Recommended Implementation Approach

### Recommendation: **Option 2 (Standard Fix)**

**Rationale:**
1. **Balanced Approach:** Fixes immediate issues while providing professional path forward
2. **Practical Timeline:** Can be implemented in days, not weeks
3. **Cost-Effective:** No expensive TMS integration required
4. **User Experience:** English fallbacks ensure all languages work immediately
5. **Scalable:** Translation templates and documentation make future additions easy
6. **Professional:** Structured translation workflow with clear guidelines

### Implementation Priority Order:

1. **Phase 1: Critical Fixes (Day 1)**
   - Fix layout clipping bug
   - Fix RTL margin for Return to Lobby button
   - Add text direction logic for Arabic

2. **Phase 2: Content Realignment (Day 2-3)**
   - Replace all fabricated content with English fallbacks
   - Update all 7 language files to version 2.0
   - Add translation_status metadata

3. **Phase 3: Translation Preparation (Day 4-5)**
   - Create translation templates
   - Write translator guide with terminology glossary
   - Set up translation workflow

4. **Phase 4: Translation Execution (Weeks 2-4)**
   - Distribute templates to translators
   - Review and approve translations
   - Implement translated content

---

## Part 6: Builder Prompt for Implementation

**Copy and paste this prompt into Builder mode to execute the recommended implementation:**

```
Implement the Standard Fix (Option 2) for layout clipping bug and localization realignment:

PHASE 1: CRITICAL FIXES
1. Fix layout clipping bug in css/styles.css:
   - Modify .quiz-interface (lines 1311-1320)
   - Add: padding-bottom: calc(2rem + 80px);
   - Add mobile breakpoint (line 1806): padding-bottom: calc(1.5rem + 100px);
   - Ensure min-height: auto; is set

2. Fix RTL compatibility for Return to Lobby button:
   - Add CSS rule after line 1794:
     .quiz-interface[dir="rtl"] .btn-quiz-return-lobby {
         margin-right: 0;
         margin-left: 1rem;
     }

3. Add text direction logic:
   - Find locale switching code in main.js
   - Add: if (locale === 'ar-EG') { quizInterface.setAttribute('dir', 'rtl'); }
   - Add: else { quizInterface.removeAttribute('dir'); }

PHASE 2: CONTENT REALIGNMENT
4. Replace all fabricated content in these files with English fallbacks from js/quote_data.js:
   - js/quote_data_es.js
   - js/quote_data_fr.js
   - js/quote_data_la.js
   - js/quote_data_no.js
   - js/quote_data_pl.js
   - js/quote_data_zh.js
   - js/quote_data_egy.js
   
   For each file:
   - Replace all quotes array with English summaries (summary_001 through summary_006)
   - Replace themes array with English themes
   - Update metadata.version to "2.0"
   - Update metadata.lastUpdated to "2026-01-03"
   - Add metadata.translationStatus: "pending_translation"
   - Update metadata.totalQuotes to 6
   - Update metadata.description to match English baseline

PHASE 3: TRANSLATION PREPARATION
5. Create translation template file: docs/translations/translation_template.json
   - Extract all 6 book summaries from js/quote_data.js
   - Create structure with English text and empty target fields
   - Include context notes for each summary
   - Add glossary of post-Kleinian terms

6. Create translator guide: docs/translations/translator_guide.md
   - Explain post-Kleinian framework
   - Provide terminology glossary
   - Give context for each book
   - Specify formatting requirements

VERIFICATION:
- Test quiz interface on desktop and mobile to ensure no clipping
- Test Arabic (ar-EG) locale to verify RTL layout
- Verify all 7 language files load without errors
- Confirm English fallbacks display correctly in all languages
- Validate that no fabricated quotes remain in any language file
```

---

## Part 7: Verification Checklist

After implementation, verify:

### Layout Fixes:
- [ ] Quiz interface displays without clipping on desktop (1920x1080)
- [ ] Quiz interface displays without clipping on tablet (768x1024)
- [ ] Quiz interface displays without clipping on mobile (375x667)
- [ ] Return to Lobby button is fully visible
- [ ] Exit button is fully visible
- [ ] Navigation buttons have adequate spacing
- [ ] Results display completely without truncation

### RTL Compatibility:
- [ ] Arabic locale (ar-EG) sets dir="rtl" on quiz interface
- [ ] Return to Lobby button margin flips correctly in RTL
- [ ] Exit button positions correctly in RTL
- [ ] Navigation buttons reverse order in RTL
- [ ] Quiz questions align right in RTL
- [ ] Scale buttons display correctly in RTL
- [ ] All text flows right-to-left in Arabic

### Localization:
- [ ] All 7 language files updated to version 2.0
- [ ] All fabricated quotes removed from language files
- [ ] English fallbacks load correctly in all languages
- [ ] Translation template created with all 6 summaries
- [ ] Translator guide created with terminology
- [ ] No errors in browser console when switching languages
- [ ] All metadata fields consistent across language files

### Code Quality:
- [ ] CSS changes follow existing style patterns
- [ ] JavaScript changes use existing patterns
- [ ] No hardcoded strings (use locale system)
- [ ] Comments added for RTL-specific rules
- [ ] Code is maintainable and well-documented

---

## Part 8: Risk Assessment

### High Risk:
- **Translation Quality:** Post-Kleinian terminology requires expert translators
- **Timeline:** Human translation may take 2-4 weeks
- **Cost:** Professional translation for 7 languages × 6 summaries = significant expense

### Medium Risk:
- **RTL Edge Cases:** Arabic may have unexpected layout issues on certain devices
- **Mobile Variability:** Different mobile browsers may render differently
- **Content Accuracy:** Must ensure translations match verified English content exactly

### Low Risk:
- **Layout Fix:** CSS changes are straightforward and reversible
- **RTL Implementation:** Existing RTL patterns can be extended
- **English Fallbacks:** Ensures functionality even if translations fail

### Mitigation Strategies:
1. **Translation:** Use professional translation services with psychoanalytic expertise
2. **Testing:** Comprehensive cross-browser and cross-device testing
3. **Rollback:** Keep git history to revert if issues arise
4. **Staging:** Test all changes in staging environment before production
5. **Monitoring:** Add error tracking for localization failures

---

## Part 9: Success Criteria

### Technical Success:
- ✅ No layout clipping on any device size
- ✅ RTL layout works correctly in Arabic
- ✅ All languages load without errors
- ✅ English fallbacks display properly
- ✅ Translation templates are complete and accurate

### User Experience Success:
- ✅ Quiz is fully usable in all 8 languages (including English)
- ✅ Navigation buttons are always visible and accessible
- ✅ Content displays correctly in LTR and RTL
- ✅ No broken text or layout issues
- ✅ Smooth language switching

### Process Success:
- ✅ Documentation is clear and actionable
- ✅ Translators have everything needed to work
- ✅ Future language additions are straightforward
- ✅ Code is maintainable and well-commented
- ✅ Implementation can be completed in estimated timeframe

---

## Conclusion

This research has identified:

1. **Layout Clipping Bug:** Caused by insufficient bottom padding in `.quiz-interface` - easily fixable with CSS changes
2. **Localization Crisis:** All 7 non-English files contain 56 fabricated quotes requiring complete replacement
3. **RTL Compatibility:** Mostly implemented, but needs one margin fix for Return to Lobby button
4. **Clear Path Forward:** Option 2 (Standard Fix) provides balanced approach addressing all issues

**Recommended Action:** Proceed with Option 2 implementation using the Builder prompt provided in Part 6.

**Next Steps After Implementation:**
1. Test all fixes thoroughly across devices
2. Begin translation process using prepared templates
3. Monitor for any edge cases or regressions
4. Plan for future language additions using established workflow

---

**Report Prepared By:** Research Analyst (Architect Mode)  
**Report Date:** 3 January 2026  
**Status:** Complete - Ready for Implementation
