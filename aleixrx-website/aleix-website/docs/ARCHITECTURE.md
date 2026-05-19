<!-- docs/ARCHITECTURE.md -->

# Architecture

## Core Principles
- MVC/MVVM Patterns
- Maintain a SPA-like user experience, even if implemented with Next.js routing.
- Separate UI rendering from data/state orchestration.
- Keep components small and focused.
- Prefer composition over complex abstractions.
- Incremental development: small changes, tested, then refactor.

## Routing
- Use Next.js App Router (`src/app`) unless the repository already uses Pages Router.
- Pages should be mostly composition and layout wiring, not business logic.

## Suggested Folder Structure
(Adjust if your project already differs, but keep the same layering idea.)

src/
  app/
    layout.tsx
    page.tsx
    dashboard/page.tsx
    skills/page.tsx
    projects/page.tsx

  features/
    dashboard/
      components/
      hooks/
      model/
      index.ts
    skills/
      components/
      model/
      index.ts
    projects/
      components/
      model/
      index.ts

  shared/
    components/
      layout/
        Sidebar.tsx
        AppShell.tsx
    lib/
      data/
      testing/
    styles/
    types/

## Layering Rules
- `app/`:
  - routing + page composition
  - imports from `features/*` and `shared/*`
- `features/*`:
  - each section (dashboard/skills/projects) is a feature module
  - may contain:
    - `model/` for types + pure mapping logic
    - `hooks/` for state orchestration (if needed)
    - `components/` for UI pieces specific to the feature
- `shared/*`:
  - reusable components and utilities
  - MUST NOT import from `features/*`

## Data Strategy (No API)
Use local sources with types:
- `src/shared/lib/data/*.ts` or `src/shared/lib/data/*.json`
- Export typed data structures (e.g. `Skill[]`, `Project[]`)
- Optional: create a simple repository interface for future flexibility, but avoid overengineering.

Example approach:
- `ProjectRepository` interface (optional)
- `LocalProjectRepository` implementation reading from local data modules

## State Management
- Prefer local state via React hooks.
- Avoid global state unless necessary.
- If state grows, consider `useReducer` inside feature hooks.

## UI + Bootstrap
- Use Bootstrap classes consistently.
- Keep layout primitives in `shared/components/layout`.
- Sidebar should be a shared component:
  - receives nav configuration
  - highlights active route

## Testing Strategy (TDD-Friendly)
- Write a failing test first for each meaningful change.
- Focus on:
  - components: React Testing Library
  - pure logic: unit tests (no DOM)
- Keep tests close to the unit under test, e.g.:
  - `ComponentName.test.tsx`
  - `mapper.test.ts`
- Aim to test behavior, not implementation details.

## Definition of Done (Architectural)
A change is considered done when:
- It follows folder/layer rules.
- It compiles and passes tests.
- It does not introduce unused abstractions.
- UI remains accessible and responsive.