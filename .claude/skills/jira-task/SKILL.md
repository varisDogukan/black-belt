---
name: jira-task
description: Analyze and implement a Jira-style engineering task in a controlled, reviewable way.
---

Handle the following task in the context of the current repository:

$ARGUMENTS

Working method:

1. First analyze the task in the repository context
2. Do not immediately make code changes unless the task is already very clear and low-risk
3. Identify:
   - the goal of the task
   - likely affected files
   - risks
   - likely acceptance criteria
   - the smallest safe implementation plan

4. Prefer small, reviewable changes
5. Do not perform unrelated refactors
6. Do not add dependencies unless clearly necessary
7. Preserve the existing architecture unless explicitly asked to change it

Rules:

- Explain your analysis and summaries in Turkish
- Keep code, file names, commit messages, and UI text in English

Response format:

1. Task summary
2. Likely affected areas
3. Risks
4. Proposed implementation plan
5. Manual verification steps
