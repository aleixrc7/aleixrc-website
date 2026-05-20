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
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
