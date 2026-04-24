---
name: a11y-review
description: Review the current implementation for accessibility issues and suggest minimal fixes.
---

Review the current implementation in the repository for accessibility issues.

$ARGUMENTS

Working method:

1. Do not modify files
2. Only perform a review
3. Focus on concrete findings, not generic theory
4. Prefer minimal, practical fixes
5. Pay special attention to:
   - semantic HTML
   - label / input relationships
   - keyboard navigation
   - focus behavior
   - aria usage
   - error message accessibility
   - radio / checkbox semantics
   - color contrast if clearly relevant in code

Rules:

- Explain your analysis and summaries in Turkish
- Keep code, file names, commit messages, and UI text in English

Response format:

1. Critical findings
2. Medium-priority findings
3. Small improvements
4. Suggested fixes
