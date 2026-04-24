---
name: frontend-slice
description: Implement a small, reviewable frontend slice with minimal changes.
---

Implement the following frontend slice in the current repository:

$ARGUMENTS

Working method:

1. First determine whether the task belongs to `client` only or also affects `server`
2. Prefer the smallest safe implementation
3. Keep the change focused and easy to review
4. Preserve the existing architecture and patterns unless explicitly told otherwise
5. Do not perform unrelated refactors
6. Do not add dependencies unless clearly necessary
7. If the request is ambiguous, briefly clarify the scope in your response before making changes

Rules:

- Explain your analysis and summaries in Turkish
- Keep code, file names, commit messages, and UI text in English

Response format:

1. What changed
2. Files changed
3. Assumptions made
4. Manual verification steps
