---
name: bug-triage
description: Investigate a bug, identify likely causes, and propose the smallest safe fix.
---

Investigate the following bug in the current repository:

$ARGUMENTS

Working method:

1. First restate the bug clearly
2. Identify the most likely affected files or areas
3. List likely root causes
4. Point to the most likely cause
5. Propose the smallest safe fix plan
6. Do not modify files yet unless explicitly asked

Rules:

- Focus on concrete findings
- Avoid broad refactors
- Preserve the existing architecture
- Prefer the smallest safe change
- Mention any uncertainty clearly
- Explain your analysis and summaries in Turkish
- Keep code, file names, commit messages, and UI text in English

Response format:

1. Bug summary
2. Likely affected areas
3. Possible root causes
4. Most likely cause
5. Proposed fix plan
6. Manual reproduction / verification steps
