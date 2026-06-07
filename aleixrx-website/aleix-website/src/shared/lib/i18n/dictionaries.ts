export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const en = {
  "nav.dashboard": "About me",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "dashboard.aboutTitle": "About me",
  "dashboard.description":
    "I have always been passionate about the IT world. In recent years, I have been primarily focused on software development, striving to implement technological solutions. I dedicate part of my time to deepening my knowledge of software architecture and best practices, applying Clean Code principles, design patterns, and methodologies such as Domain-Driven Design (DDD) and Test-Driven Development (TDD). \n\n With the latest advancements, I believe we should no longer specialize in a single technology stack but instead be capable of adapting quickly to different technologies. For this reason, I am currently immersed in AI development, using and creating agents, MCP protocols, token usage optimization, and more. My goal is to fully understand the context, make the most of these tools, and at the same time avoid bad practices and potential vulnerabilities. \n\n Additionally, I have a strong interest in the DevOps and homelab world: I containerize services, configure and deploy applications such as Nextcloud on a local server, and run a VPN server to securely access my home network from other devices when I am away from home. I enjoy understanding the entire lifecycle, from code to infrastructure.",
  "skills.title": "Skills",
  "skills.subtitle": "Experience levels per technology",
  "skills.level": "Level",
  "skills.category.it": "IT Skills",
  "skills.category.language": "Languages",
  "skills.category.other": "Others",
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
  "nav.dashboard": "Sobre Mi",
  "nav.skills": "Habilidades",
  "nav.projects": "Proyectos",
  "dashboard.aboutTitle": "Sobre mí",
  "dashboard.description":
    "Siempre he sido un apasionado del mundo IT, estos últimos años he estado inverso principalmente en desarrollo, tratando de implementar soluciones tecnológicas, dedico parte de mi tiempo a profundizar en arquitectura de software y buenas prácticas tratando de aplicar principios de Clean Code, patrones de diseño y técnicas como Domain-Driven Design (DDD) y Test-Driven Development (TDD). \n\n Con los últimos avances, considero que ya no debemos especializarnos en un único stack tecnológico, sino ser capaces de adaptarnos rápido a distintas tecnologías. Por ello, actualmente estoy inmerso en desarrollo con IA, utilizando y creando agentes, protocolos MCP, optimicación en el uso de tokens, etc, etc.  Buscando comprender bien el contexto, aprovechar al máximo estas herramientas y, al mismo tiempo, evitar malas prácticas y posibles vulnerabilidades. \n\n Además, tengo un marcado interés por el mundo DevOps y homelab: dockerizo servicios, configuro y despliego aplicaciones como Nextcloud en un servidor local, también un servidor VPN  para acceso seguro a mi red doméstica desde otros dispositivos cuando me encuentro fuera de casa. Me gusta entender todo el ciclo: desde el código hasta la infraestructura.",
  "skills.title": "Habilidades",
  "skills.subtitle": "Niveles de experiencia por tecnología",
  "skills.level": "Nivel",
  "skills.category.it": "IT",
  "skills.category.language": "Idiomas",
  "skills.category.other": "Otros",
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
