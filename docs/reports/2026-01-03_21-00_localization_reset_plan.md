# Localization Reset Plan: Delete & Recreate Protocol

**Document ID:** 2026-01-03_21-00_localization_reset_plan.md
**Created:** 2026-01-03T21:00:00Z
**Status:** Planning Phase
**Priority:** Critical

---

## Executive Summary

This plan outlines a "Delete & Recreate" protocol for all non-English content on the John F. Miller website. The project has suffered from hallucinated translations and content drift across multiple languages. This plan implements a "Git First" workflow with checkpoint commits before any deletion, ensuring complete rollback capability.

**Key Objectives:**
- Eliminate all hallucinated and corrupted non-English content
- Rebuild localization from verified English Source of Truth files
- Implement Git-based safety checkpoints throughout the process
- Provide three implementation options with clear trade-offs

**Recommended Approach:** Option 2 (Standard) - Complete reset of all translatable content with balanced thoroughness and manageability.

---

## Current State Analysis

### Problem Statement

The John F. Miller website currently contains 7 language directories with translated content that has been identified as containing:
- Hallucinated translations not based on authentic source material
- Content drift from the original English text
- Inconsistent quality across different languages
- Potential SEO and user experience issues from inaccurate content

### Current Localization Structure

**Language Directories (7 total):**
1. `no/` - Norwegian
2. `pl/` - Polish
3. `egy/` - Egyptian
4. `zh/` - Chinese (Simplified)
5. `fr/` - French
6. `es/` - Spanish
7. `la/` - Latin

**Files per Language Directory:**
- `index.html` - Main landing page
- `books/do-you-read-me.html` - Book detail page 1
- `books/triumphant-victim.html` - Book detail page 2

**Total Files to Delete:** 21 HTML files (7 languages × 3 files each)

**Note:** No legacy `js/quote_data_[lang].js` files were found in the current codebase. The only quote data file is `js/quote_data.js` which serves as the English Source of Truth.

---

## Inventory of Files to Delete

### Complete File List

**Norwegian (no/)**
```
no/index.html
no/books/do-you-read-me.html
no/books/triumphant-victim.html
```

**Polish (pl/)**
```
pl/index.html
pl/books/do-you-read-me.html
pl/books/triumphant-victim.html
```

**Egyptian (egy/)**
```
egy/index.html
egy/books/do-you-read-me.html
egy/books/triumphant-victim.html
```

**Chinese (zh/)**
```
zh/index.html
zh/books/do-you-read-me.html
zh/books/triumphant-victim.html
```

**French (fr/)**
```
fr/index.html
fr/books/do-you-read-me.html
fr/books/triumphant-victim.html
```

**Spanish (es/)**
```
es/index.html
es/books/do-you-read-me.html
es/books/triumphant-victim.html
```

**Latin (la/)**
```
la/index.html
la/books/do-you-read-me.html
la/books/triumphant-victim.html
```

**Total Count:** 21 HTML files across 7 language directories

---

## Source of Truth Verification

### English Template Files

**Primary Source of Truth Files:**

1. **`index.html`** (811 lines)
   - Clean English template
   - Proper HTML5 structure
   - Complete meta tags for SEO
   - JSON-LD structured data
   - All sections present and functional
   - Language selector with all 7 language links
   - Verified: Ready to serve as reconstruction base

2. **`js/quote_data.js`** (442 lines)
   - Contains verified English quote data
   - Metadata version 2.0, last updated 2026-01-03
   - 6 verified book summaries from actual publications
   - 8 thematic categories
   - Connection network for visualizations
   - Localized arrays exist but are EMPTY (pending authentic content)
   - Verified: Clean, no hallucinations detected

### Supporting English Files

3. **`books/do-you-read-me.html`**
   - English book detail page template
   - Will serve as base for translations

4. **`books/triumphant-victim.html`**
   - English book detail page template
   - Will serve as base for translations

### Source of Truth Status

✅ **VERIFIED:** All English Source of Truth files are clean and ready for reconstruction
✅ **VERIFIED:** No hallucinated content detected in English files
✅ **VERIFIED:** Quote data contains only verified book summaries
✅ **VERIFIED:** Empty localized arrays in quote_data.js confirm no corrupted data exists

---

## Reconstruction Protocol

### Phase 1: Pre-Deletion Preparation

#### Step 1.1: Git Checkpoint (CRITICAL)

**Objective:** Create a safety net before any deletion occurs.

**Commands:**
```bash
# Ensure working directory is clean
git status

# Create checkpoint commit
git add -A
git commit -m "Pre-Purge State: Full localization backup before reset

- All 7 language directories intact
- 21 non-English HTML files preserved
- English Source of Truth verified clean
- Ready for localization reset execution"

# Tag for easy rollback
git tag -a localization-reset-backup-2026-01-03 -m "Pre-purge backup point before localization reset"

# Verify tag created
git tag -l
```

**Verification:**
- Confirm commit hash is recorded
- Confirm tag is created and accessible
- Document commit hash in this plan

#### Step 1.2: Create Rollback Script

**Objective:** Provide immediate rollback capability.

**Create file:** `scripts/rollback-localization-reset.sh`
```bash
#!/bin/bash
# Rollback script for localization reset
# Usage: ./scripts/rollback-localization-reset.sh

echo "Rolling back to pre-purge state..."
git reset --hard localization-reset-backup-2026-01-03
echo "Rollback complete. All non-English files restored."
```

---

### Phase 2: Delete Phase

#### Step 2.1: Delete Language Directories

**Objective:** Remove all non-English content.

**Commands:**
```bash
# Delete each language directory
rm -rf no/
rm -rf pl/
rm -rf egy/
rm -rf zh/
rm -rf fr/
rm -rf es/
rm -rf la/

# Verify deletion
git status
```

**Expected Git Status:**
- 7 directories deleted
- 21 files deleted
- No other changes

#### Step 2.2: Post-Deletion Git Checkpoint

**Commands:**
```bash
# Commit deletion
git add -A
git commit -m "Purge: All non-English directories deleted

- Deleted: no/, pl/, egy/, zh/, fr/, es/, la/
- Total files removed: 21 HTML files
- English Source of Truth preserved
- Ready for reconstruction"

# Tag deletion checkpoint
git tag -a localization-reset-purge-2026-01-03 -m "Post-purge checkpoint after deleting all non-English content"
```

---

### Phase 3: Reconstruction Phase

#### Step 3.1: Recreate Directory Structure

**Objective:** Create empty directories for each language.

**Commands:**
```bash
# Create language directories
mkdir -p no/books
mkdir -p pl/books
mkdir -p egy/books
mkdir -p zh/books
mkdir -p fr/books
mkdir -p es/books
mkdir -p la/books

# Verify structure
tree -L 2 no pl egy zh fr es la
```

#### Step 3.2: Translate & Write Phase

**Objective:** Generate translated content from English sources.

**Process for Each Language:**

For each target language (NO, PL, EGY, ZH, FR, ES, LA):

1. **Parse English `index.html`**
   - Extract all translatable text content
   - Preserve HTML structure, CSS classes, and JavaScript references
   - Identify and translate:
     - Meta tags (title, description, keywords)
     - Navigation elements
     - Hero section content
     - Book titles and descriptions
     - About section text
     - Key concepts
     - FAQ questions and answers
     - Contact form labels
     - Footer content

2. **Generate `[lang]/index.html`**
   - Apply translations to English template
   - Update `lang` attribute in `<html>` tag
   - Update hreflang tags for proper SEO
   - Preserve all functionality and structure

3. **Parse English `books/do-you-read-me.html`**
   - Extract book-specific content
   - Translate book title, subtitle, description
   - Translate any additional book-specific content

4. **Generate `[lang]/books/do-you-read-me.html`**
   - Apply translations to English book template
   - Preserve book cover images and links
   - Maintain all interactive elements

5. **Parse English `books/triumphant-victim.html`**
   - Extract book-specific content
   - Translate book title, subtitle, description

6. **Generate `[lang]/books/triumphant-victim.html`**
   - Apply translations to English book template
   - Preserve book cover images and links
   - Maintain all interactive elements

7. **Parse English `js/quote_data.js`**
   - Extract quote data structure
   - Translate:
     - Theme names and descriptions
     - Quote titles, text, and context
     - Source information
     - Connection labels

8. **Generate `js/quote_data_[lang].js`**
   - Apply translations to quote data structure
   - Preserve all metadata and relationships
   - Maintain connection network structure

**Translation Methodology:**

- Use AI-powered translation with context awareness
- Implement human review for critical content (book titles, key concepts)
- Maintain consistent terminology across all sections
- Preserve psychoanalytic terminology accuracy
- Ensure cultural appropriateness for each language

---

### Phase 4: Post-Reconstruction Verification

#### Step 4.1: Quality Assurance Checks

**For Each Language:**

1. **HTML Validation**
   - Validate HTML structure
   - Check for broken tags or attributes
   - Verify all links work correctly

2. **Content Verification**
   - Verify all translations are complete
   - Check for missing or untranslated text
   - Verify terminology consistency

3. **Functionality Testing**
   - Test navigation between pages
   - Test language selector functionality
   - Test contact forms
   - Test interactive elements (carousels, accordions)

4. **SEO Verification**
   - Verify hreflang tags are correct
   - Check meta tags are properly translated
   - Verify JSON-LD structured data is updated

5. **Quote Data Verification**
   - Verify quote data structure is preserved
   - Check that all quotes are translated
   - Verify connection network is intact

#### Step 4.2: Cross-Language Consistency

**Checks:**
- Verify language selector links are correct
- Ensure consistent navigation structure across all languages
- Verify book page links work from all language versions
- Check that quote data loads correctly in all languages

#### Step 4.3: Final Git Checkpoint

**Commands:**
```bash
# Commit reconstructed content
git add -A
git commit -m "Reconstruction: All non-English content rebuilt from English SoT

- Rebuilt: 7 language directories
- Created: 21 translated HTML files
- Generated: 7 localized quote_data files
- All translations verified
- QA checks passed

Source: English index.html and js/quote_data.js (verified clean)"

# Tag reconstruction completion
git tag -a localization-reset-complete-2026-01-03 -m "Localization reset complete - all content rebuilt from verified English sources"
```

---

## Implementation Options

### Option 1: Minimal

**Scope:**
- Delete/Recreate `index.html` only for each language
- Leave `books/` subdirectories untouched
- Do not create `js/quote_data_[lang].js` files

**Files Affected:**
- Delete: 7 files (`[lang]/index.html`)
- Create: 7 files (`[lang]/index.html`)

**Pros:**
- Fastest execution time
- Lowest risk of breaking existing book pages
- Minimal changes to codebase

**Cons:**
- Leaves potentially corrupted book pages in place
- No localized quote data
- Incomplete localization reset
- May leave hallucinated content in book pages

**Risk Level:** Medium
**Recommended:** No

---

### Option 2: Standard (RECOMMENDED)

**Scope:**
- Delete/Recreate `index.html` for each language
- Delete/Recreate `books/` subdirectories (both book pages)
- Create `js/quote_data_[lang].js` files for each language
- Complete reset of all translatable content

**Files Affected:**
- Delete: 21 files (7 languages × 3 files each)
- Create: 21 HTML files (7 languages × 3 files each)
- Create: 7 JS files (`js/quote_data_[lang].js`)

**Pros:**
- Complete reset of all translatable content
- Ensures consistency across all language files
- Comprehensive localization from verified sources
- Balanced thoroughness and manageability
- Clear scope and deliverables

**Cons:**
- Requires translation of 28 files (21 HTML + 7 JS)
- Longer execution time than Option 1
- Higher complexity than Option 1

**Risk Level:** Low (with Git checkpoints)
**Recommended:** Yes

---

### Option 3: Comprehensive

**Scope:**
- Everything from Option 2
- Add "Lockfile" mechanism to prevent future manual edits from breaking sync
- Implement validation checks after reconstruction
- Add automated testing for translation accuracy
- Create localization management documentation

**Additional Deliverables:**
- Lockfile: `docs/localization-lock.json` (tracks file versions and sync status)
- Validation script: `scripts/validate-localization.sh`
- Test suite: `tests/localization-tests.js`
- Documentation: `docs/localization-management-guide.md`

**Files Affected:**
- All files from Option 2
- Plus: Lockfile, validation scripts, test suite, documentation

**Pros:**
- Most robust solution
- Prevents future content drift
- Automated validation ensures ongoing quality
- Comprehensive documentation for maintenance
- Long-term sustainability

**Cons:**
- Highest complexity
- Longest development time
- Requires ongoing maintenance of lockfile and tests
- May be overkill for current needs
- Steeper learning curve for future updates

**Risk Level:** Low (with Git checkpoints)
**Recommended:** Only if long-term localization management is a priority

---

## Git Workflow Details

### Pre-Execution Checklist

- [ ] Verify current Git branch is clean
- [ ] Confirm English Source of Truth files are verified
- [ ] Document current commit hash
- [ ] Create pre-purge backup tag
- [ ] Test rollback script functionality

### Commit Strategy

**Commit 1: Pre-Purge State**
```bash
git commit -m "Pre-Purge State: Full localization backup before reset"
git tag -a localization-reset-backup-2026-01-03 -m "Pre-purge backup point"
```

**Commit 2: Post-Purge**
```bash
git commit -m "Purge: All non-English directories deleted"
git tag -a localization-reset-purge-2026-01-03 -m "Post-purge checkpoint"
```

**Commit 3: Reconstruction Complete**
```bash
git commit -m "Reconstruction: All non-English content rebuilt from English SoT"
git tag -a localization-reset-complete-2026-01-03 -m "Localization reset complete"
```

### Branch Strategy

**Option A: Feature Branch (Recommended)**
```bash
# Create feature branch
git checkout -b feature/localization-reset

# Execute all steps on feature branch
# ... (execute reset process)

# Merge to main when complete and verified
git checkout main
git merge feature/localization-reset

# Delete feature branch
git branch -d feature/localization-reset
```

**Option B: Direct on Main**
```bash
# Execute directly on main branch
# ... (execute reset process)
```

**Recommendation:** Use Option A (Feature Branch) for safer execution

### Rollback Procedures

**Immediate Rollback (Any Phase):**
```bash
# Reset to pre-purge state
git reset --hard localization-reset-backup-2026-01-03

# Or use rollback script
./scripts/rollback-localization-reset.sh
```

**Rollback to Specific Checkpoint:**
```bash
# Rollback to post-purge state
git reset --hard localization-reset-purge-2026-01-03

# Rollback to reconstruction state
git reset --hard localization-reset-complete-2026-01-03
```

### Tag Naming Convention

**Format:** `localization-reset-[phase]-[date]`

**Examples:**
- `localization-reset-backup-2026-01-03` - Pre-purge backup
- `localization-reset-purge-2026-01-03` - Post-purge checkpoint
- `localization-reset-complete-2026-01-03` - Reconstruction complete

### Git Safety Measures

1. **Force Push Protection:** Never use `--force` on shared branches
2. **Commit Verification:** Always verify commit hash after each commit
3. **Tag Documentation:** Document all tags with descriptive messages
4. **Backup Verification:** Verify backup tag is accessible before proceeding
5. **Rollback Testing:** Test rollback script before executing any deletions

---

## Risk Assessment & Mitigation

### Risk 1: Data Loss

**Description:** Accidental deletion of English Source of Truth files

**Probability:** Low
**Impact:** Critical

**Mitigation:**
- Git checkpoint before any deletion
- Explicit verification of files to delete
- Rollback script available
- Multiple Git tags for different checkpoints

**Contingency:**
```bash
# Immediate rollback if English files are deleted
git reset --hard localization-reset-backup-2026-01-03
```

---

### Risk 2: Translation Quality Issues

**Description:** Poor quality translations that introduce new errors

**Probability:** Medium
**Impact:** High

**Mitigation:**
- Use high-quality AI translation with context
- Implement human review for critical content
- Create terminology glossary for consistency
- Test translations with native speakers if possible

**Contingency:**
- Re-translate specific problematic files
- Use Git to revert to previous version if needed

---

### Risk 3: Broken Functionality

**Description:** Translations break JavaScript functionality or links

**Probability:** Medium
**Impact:** High

**Mitigation:**
- Preserve all HTML structure and attributes
- Do not translate IDs, class names, or data attributes
- Test all interactive elements after translation
- Verify all links work correctly

**Contingency:**
- Use Git diff to identify what changed
- Revert specific files if functionality is broken
- Fix issues and re-commit

---

### Risk 4: SEO Impact

**Description:** Changes to URLs or content structure affect search rankings

**Probability:** Low
**Impact:** Medium

**Mitigation:**
- Preserve all URL structures
- Maintain proper hreflang tags
- Ensure meta tags are correctly translated
- Submit updated sitemaps to search engines

**Contingency:**
- Monitor search rankings after deployment
- Implement 301 redirects if URLs must change
- Communicate changes to SEO team

---

### Risk 5: Git Repository Corruption

**Description:** Git repository becomes corrupted during process

**Probability:** Very Low
**Impact:** Critical

**Mitigation:**
- Create remote backup before starting
- Verify Git repository health before execution
- Use feature branch to isolate changes
- Push to remote after each major checkpoint

**Contingency:**
- Restore from remote backup
- Use Git repair tools if available
- Clone repository from remote if necessary

---

## Verification Checklist

### Pre-Execution Verification

- [ ] English Source of Truth files verified clean
- [ ] All non-English files identified and documented
- [ ] Git repository is clean (no uncommitted changes)
- [ ] Pre-purge backup tag created and verified
- [ ] Rollback script created and tested
- [ ] Feature branch created (if using branch strategy)

### Post-Purge Verification

- [ ] All 7 language directories deleted
- [ ] Exactly 21 files deleted (verify count)
- [ ] English Source of Truth files intact
- [ ] Git status shows expected deletions only
- [ ] Post-purge checkpoint tag created
- [ ] No unintended files deleted

### Post-Reconstruction Verification

For Each Language (NO, PL, EGY, ZH, FR, ES, LA):

- [ ] `index.html` created and valid HTML
- [ ] `books/do-you-read-me.html` created and valid HTML
- [ ] `books/triumphant-victim.html` created and valid HTML
- [ ] `js/quote_data_[lang].js` created and valid JSON
- [ ] All text translated (no English remaining)
- [ ] Navigation links work correctly
- [ ] Language selector links work correctly
- [ ] Book page links work correctly
- [ ] Contact form labels translated
- [ ] Meta tags translated and correct
- [ ] hreflang tags correct
- [ ] JSON-LD structured data updated

### Cross-Language Verification

- [ ] Language selector links to all 7 languages
- [ ] All language versions have consistent structure
- [ ] All book pages accessible from all languages
- [ ] Quote data loads correctly in all languages
- [ ] No broken links between language versions

### Functionality Verification

- [ ] Navigation works on all pages
- [ ] Contact forms submit correctly
- [ ] Interactive elements (carousels, accordions) work
- [ ] Quote network visualization loads
- [ ] Assessment section loads correctly
- [ ] Newsletter subscription works

### Final Verification

- [ ] All Git checkpoints created and tagged
- [ ] Git repository is clean
- [ ] All translations complete
- [ ] All QA checks passed
- [ ] Documentation updated
- [ ] Rollback procedures documented

---

## Timeline Estimation

**Note:** Time estimates are provided for planning purposes only. Actual duration may vary based on translation quality requirements and team availability.

### Option 1: Minimal
- Pre-Execution: 1 hour
- Deletion: 30 minutes
- Reconstruction: 4-6 hours (7 index.html files)
- Verification: 2-3 hours
- **Total:** 7.5-10.5 hours

### Option 2: Standard (Recommended)
- Pre-Execution: 1 hour
- Deletion: 30 minutes
- Reconstruction: 12-18 hours (21 HTML + 7 JS files)
- Verification: 4-6 hours
- **Total:** 17.5-25.5 hours

### Option 3: Comprehensive
- Pre-Execution: 1 hour
- Deletion: 30 minutes
- Reconstruction: 12-18 hours (same as Option 2)
- Lockfile Implementation: 2-3 hours
- Validation Scripts: 3-4 hours
- Test Suite: 4-6 hours
- Documentation: 3-4 hours
- Verification: 6-8 hours
- **Total:** 31.5-44.5 hours

---

## Recommendations

### Primary Recommendation

**Implement Option 2 (Standard)**

**Rationale:**
- Provides complete reset of all translatable content
- Ensures consistency across all language files
- Balanced approach between thoroughness and manageability
- Clear scope and deliverables
- Lower risk than leaving corrupted content in place

### Secondary Recommendations

1. **Use Feature Branch Strategy**
   - Isolates changes from main branch
   - Allows for safe testing and verification
   - Easy rollback if issues arise

2. **Implement Comprehensive Verification**
   - Thorough QA checks for each language
   - Cross-language consistency verification
   - Functionality testing for all interactive elements

3. **Document Everything**
   - Document all decisions made during reconstruction
   - Create localization management guide for future updates
   - Maintain record of translation sources and reviewers

### Future Considerations

1. **Localization Management System**
   - Consider implementing a CMS or localization platform for future updates
   - Automate translation workflow where possible
   - Establish review process for new translations

2. **Continuous Quality Assurance**
   - Regular audits of translated content
   - User feedback collection on translation quality
   - Periodic review and update of terminology

3. **SEO Monitoring**
   - Monitor search rankings after deployment
   - Track user engagement across different languages
   - Adjust hreflang and meta tags as needed

---

## Appendix A: File Structure Reference

### English Source of Truth Structure
```
c:/dev/milleranalysis/
├── index.html                          # Main English page (811 lines)
├── books/
│   ├── do-you-read-me.html            # English book page 1
│   └── triumphant-victim.html         # English book page 2
└── js/
    └── quote_data.js                  # English quote data (442 lines)
```

### Non-English Structure (To Be Deleted)
```
c:/dev/milleranalysis/
├── no/
│   ├── index.html
│   └── books/
│       ├── do-you-read-me.html
│       └── triumphant-victim.html
├── pl/
│   ├── index.html
│   └── books/
│       ├── do-you-read-me.html
│       └── triumphant-victim.html
├── egy/
│   ├── index.html
│   └── books/
│       ├── do-you-read-me.html
│       └── triumphant-victim.html
├── zh/
│   ├── index.html
│   └── books/
│       ├── do-you-read-me.html
│       └── triumphant-victim.html
├── fr/
│   ├── index.html
│   └── books/
│       ├── do-you-read-me.html
│       └── triumphant-victim.html
├── es/
│   ├── index.html
│   └── books/
│       ├── do-you-read-me.html
│       └── triumphant-victim.html
└── la/
    ├── index.html
    └── books/
        ├── do-you-read-me.html
        └── triumphant-victim.html
```

### Reconstructed Structure (After Implementation)
```
c:/dev/milleranalysis/
├── index.html                          # English SoT (unchanged)
├── books/
│   ├── do-you-read-me.html            # English SoT (unchanged)
│   └── triumphant-victim.html         # English SoT (unchanged)
├── js/
│   ├── quote_data.js                  # English SoT (unchanged)
│   ├── quote_data_no.js               # NEW: Norwegian quotes
│   ├── quote_data_pl.js               # NEW: Polish quotes
│   ├── quote_data_egy.js              # NEW: Egyptian quotes
│   ├── quote_data_zh.js               # NEW: Chinese quotes
│   ├── quote_data_fr.js               # NEW: French quotes
│   ├── quote_data_es.js               # NEW: Spanish quotes
│   └── quote_data_la.js               # NEW: Latin quotes
├── no/
│   ├── index.html                     # NEW: Translated from English
│   └── books/
│       ├── do-you-read-me.html        # NEW: Translated from English
│       └── triumphant-victim.html     # NEW: Translated from English
├── pl/
│   ├── index.html                     # NEW: Translated from English
│   └── books/
│       ├── do-you-read-me.html        # NEW: Translated from English
│       └── triumphant-victim.html     # NEW: Translated from English
├── egy/
│   ├── index.html                     # NEW: Translated from English
│   └── books/
│       ├── do-you-read-me.html        # NEW: Translated from English
│       └── triumphant-victim.html     # NEW: Translated from English
├── zh/
│   ├── index.html                     # NEW: Translated from English
│   └── books/
│       ├── do-you-read-me.html        # NEW: Translated from English
│       └── triumphant-victim.html     # NEW: Translated from English
├── fr/
│   ├── index.html                     # NEW: Translated from English
│   └── books/
│       ├── do-you-read-me.html        # NEW: Translated from English
│       └── triumphant-victim.html     # NEW: Translated from English
├── es/
│   ├── index.html                     # NEW: Translated from English
│   └── books/
│       ├── do-you-read-me.html        # NEW: Translated from English
│       └── triumphant-victim.html     # NEW: Translated from English
└── la/
    ├── index.html                     # NEW: Translated from English
    └── books/
        ├── do-you-read-me.html        # NEW: Translated from English
        └── triumphant-victim.html     # NEW: Translated from English
```

---

## Appendix B: Git Command Reference

### Essential Git Commands for This Process

```bash
# Check current status
git status

# Add all changes
git add -A

# Commit with message
git commit -m "Descriptive commit message"

# Create annotated tag
git tag -a tag-name -m "Tag description"

# List all tags
git tag -l

# Show tag details
git show tag-name

# Reset to specific tag
git reset --hard tag-name

# Create and checkout feature branch
git checkout -b feature-branch-name

# Merge feature branch to main
git checkout main
git merge feature-branch-name

# Delete feature branch
git branch -d feature-branch-name

# View commit history
git log --oneline --graph --all

# View changes between commits
git diff commit-hash-1 commit-hash-2

# View staged changes
git diff --staged

# Unstage changes
git reset HEAD filename

# Discard changes to file
git checkout -- filename
```

---

## Appendix C: Translation Guidelines

### Content Categories for Translation

**Must Translate:**
- Page titles and meta descriptions
- Navigation menu items
- Hero section text
- Book titles and descriptions
- About section content
- Key concepts definitions
- FAQ questions and answers
- Contact form labels and placeholders
- Footer content
- Quote data (themes, quotes, contexts)

**Must NOT Translate:**
- HTML tag names and attributes
- CSS class names and IDs
- JavaScript variable names and function names
- File paths and URLs
- Code comments
- Technical identifiers

### Terminology Guidelines

**Psychoanalytic Terms:**
- Maintain consistency with established translations
- Use academic/clinical terminology where appropriate
- Preserve technical accuracy over literal translation

**Book Titles:**
- Use official translated titles if available
- If no official translation exists, create descriptive translation
- Include original English title in parentheses if helpful

**Names:**
- Keep personal names in original form (John F. Miller)
- Translate titles only if culturally appropriate (Mr., Dr., etc.)

### Quality Standards

**Accuracy:**
- Translation must accurately convey meaning of original text
- Technical terms must be translated correctly
- Context must be preserved

**Consistency:**
- Same terms must be translated consistently across all content
- Style and tone must be consistent
- Formatting must match original

**Readability:**
- Translated text must flow naturally in target language
- Avoid awkward literal translations
- Use appropriate register and tone for the content

---

## Appendix D: Contact and Support

### Project Stakeholders

- **Project Owner:** [To be specified]
- **Technical Lead:** [To be specified]
- **Localization Specialist:** [To be specified]
- **QA Lead:** [To be specified]

### Emergency Contacts

**Git Repository Issues:**
- Contact: Technical Lead
- Escalation: Project Owner

**Translation Quality Issues:**
- Contact: Localization Specialist
- Escalation: Project Owner

**Deployment Issues:**
- Contact: Technical Lead
- Escalation: Project Owner

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-03 | Architect | Initial plan creation |

---

## Approval

**Plan Status:** Pending Approval

**Required Approvals:**
- [ ] Project Owner
- [ ] Technical Lead
- [ ] Localization Specialist (if applicable)

**Approval Date:** _______________

**Approved By:** _______________

---

**End of Document**
