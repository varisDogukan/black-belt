# CLAUDE.md

## Project structure

This repository has two main parts:

- `client`: React UI application
- `server`: Node.js / Express backend API

Always detect whether a task belongs to `client`, `server`, or both before making changes.

## Working style

- Explore first, then plan, then implement
- Keep diffs small and reviewable
- Do not rewrite unrelated files
- Prefer the smallest safe change
- Preserve the existing architecture unless explicitly asked to change it

## Code rules

- Keep code clear and readable
- Prefer small single-purpose changes
- Avoid unnecessary abstraction
- Avoid unnecessary dependency additions
- Keep UI text and code in English

## Safety rules

- Do not change tooling unless explicitly asked
- Do not add new packages unless clearly necessary
- Do not modify unrelated files
- For risky tasks, explain the risk before applying broad changes

## Delivery format

When finishing a task, always return:

1. What changed
2. Files changed
3. Assumptions made
4. Manual verification steps
