<!-- docs/CONVENTIONS.md -->

# Conventions

## Language & Tooling
- TypeScript is strongly recommended.
- Prefer strict typing at module boundaries (props, data models, exported functions).
- Avoid `any`. If unavoidable, document why and add a TODO to remove it.

## Code Style
- Components: `PascalCase` (e.g. `Sidebar`, `ProjectCard`)
- Hooks: `camelCase` prefixed with `use` (e.g. `useProjects`)
- Files:
  - Components: `ComponentName.tsx`
  - Hooks: `useThing.ts`
  - Pure modules: `thing.ts`

## Clean Code Rules
- Components should do one job.
- Avoid components > ~150 lines (split if needed).
- Avoid deep prop drilling:
  - use composition
  - or introduce a feature-level hook to orchestrate data

## UI Rules
- No business/data logic inside presentational UI components.
- A UI component should ideally:
  - receive data via props
  - render
  - emit events via callbacks

## Architecture Rules
- `shared/` cannot import from `features/`.
- `features/` can import from `shared/`.
- `app/` can import from both.
- Domain/model code should not depend on React.

## Bootstrap Conventions
- Use Bootstrap classes consistently.
- Prefer semantic HTML.
- Ensure responsive behavior (container/row/col, breakpoints).

## Accessibility (Minimum Baseline)
- Every form input must have a label (or `aria-label`).
- Use semantic elements (`nav`, `main`, `aside`, `header`).
- Buttons must have text or `aria-label`.
- Focus states must remain visible.

## Testing & TDD
- Default workflow:
  1) Write failing test
  2) Implement minimal code to pass
  3) Refactor
- Prefer behavior-driven tests with React Testing Library.
- Do not test Bootstrap class names unless it’s core behavior.

## Mandatory Final Checklist (per task)
- [ ] Types are correct (no `any`)
- [ ] Follows folder layering rules
- [ ] Tests added/updated (or explicitly justified)
- [ ] No dead code or unused exports
- [ ] Sidebar + navigation still works