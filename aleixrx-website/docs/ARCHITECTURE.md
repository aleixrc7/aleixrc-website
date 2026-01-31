# Architecture

## Principios
- Utilizamos patrones MVC/MVVM
- Separar UI de lógica de aplicación.
- Componentes pequeños y enfocados.
- Preferir composición.
- Evitar "smart components" enormes.
- Sin sobre-ingeniería: patrones solo si aportan claridad.

## Estructura de carpetas
src/
  app/
    layout.tsx
    page.tsx
    (routes)/
      tasks/
        page.tsx
  features/
    tasks/
      domain/
        types.ts
        task.ts
      services/
        taskRepository.ts
      hooks/
        useTasks.ts
      components/
        TaskList.tsx
        TaskForm.tsx
      index.ts
  shared/
    components/
    lib/
    styles/
    types/

## Capas
- app/: routing y composición de páginas (casi sin lógica).
- features/: módulos por dominio (Tasks, etc.)
  - domain/: tipos y lógica de dominio (pura, sin React)
  - services/: repositorios/adapters (ej. localStorage)
  - hooks/: orquestación de estado y casos de uso para UI
  - components/: UI del feature (presentational)
- shared/: utilidades y componentes reutilizables

## Patrón de datos (sin API)
- Repository pattern para aislar storage:
  - TaskRepository: getAll, add, toggleComplete, remove
- Implementación inicial: LocalStorageTaskRepository
- Los hooks consumen el repositorio, la UI consume hooks.

## Estado
- Para MVP: useState/useReducer dentro de hooks del feature.
- No introducir librerías de estado global sin necesidad.

## Error handling
- Los repositorios devuelven resultados predecibles.
- Manejar estados: loading (si aplica), empty, error.

## Testing (opcional al inicio)
- Testear dominio (puro) y repositorio (localStorage con mocks).