export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const en = {
  "nav.dashboard": "Dashboard",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "dashboard.aboutTitle": "About me",
  "dashboard.description":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "skills.title": "Skills",
  "skills.subtitle": "Experience levels per technology",
  "skills.level": "Level",
  "projects.title": "Projects",
  "projects.empty": "Projects coming soon.",
  "theme.toggleToDark": "Switch to dark mode",
  "theme.toggleToLight": "Switch to light mode",
  "language.select": "Select language",
  "language.english": "English",
  "language.spanish": "Spanish",
  "footer.rights": "All rights reserved.",
} as const;

const es: Record<keyof typeof en, string> = {
  "nav.dashboard": "Panel",
  "nav.skills": "Habilidades",
  "nav.projects": "Proyectos",
  "dashboard.aboutTitle": "Sobre mí",
  "dashboard.description":
    "Siempre he sido un apasionado del mundo IT, especializándome en esto últimos años en desarrollo de software, tratando de implementar soluciones tecnológicas, dedico parte de mi tiempo a profundizar en arquitectura de software y buenas prácticas, tratando de aplicar principios de Clean Code, patrones de diseño y técnicas como Domain-Driven Design (DDD) y Test-Driven Development (TDD). Con los últimos avances, considero que ya no debemos especializarnos en un único stack tecnológico, sino ser capaces de adaptarnos rápido a distintas tecnologías. Por ello, actualmente estoy inmerso en desarrollo con IA, utilizando agentes (Copilot, ChatGPT, Claude, etc.), vibe coding y el protocolo MCP, buscando comprender bien el contexto, aprovechar al máximo estas herramientas y, al mismo tiempo, evitar malas prácticas y posibles vulnerabilidades. Además, tengo un marcado interés por el mundo DevOps y homelab: dockerizo servicios, configuro y despliego aplicaciones como Nextcloud en un servidor local, también un servidor VPN  para acceso seguro a mi red doméstica desde otros dispositivos cuando me encuentro fuera de casa. Me gusta entender todo el ciclo: desde el código hasta la infraestructura..",
  "skills.title": "Habilidades",
  "skills.subtitle": "Niveles de experiencia por tecnología",
  "skills.level": "Nivel",
  "projects.title": "Proyectos",
  "projects.empty": "Proyectos próximamente.",
  "theme.toggleToDark": "Cambiar a modo oscuro",
  "theme.toggleToLight": "Cambiar a modo claro",
  "language.select": "Seleccionar idioma",
  "language.english": "Inglés",
  "language.spanish": "Español",
  "footer.rights": "Todos los derechos reservados.",
};

export type DictionaryKey = keyof typeof en;

export const dictionaries: Record<Locale, Record<DictionaryKey, string>> = {
  en,
  es,
};
