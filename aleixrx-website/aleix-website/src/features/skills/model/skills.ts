export type SkillCategory = "it" | "language" | "other";

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: SkillCategory;
}

export const skills: Skill[] = [
  { id: "javascript", name: "JavaScript", level: 88, category: "it" },
  { id: "angular", name: "Angular", level: 72, category: "it" },
  { id: "node", name: "Node.js", level: 80, category: "it" },
  { id: "php", name: "PHP", level: 60, category: "it" },
  { id: "spanish", name: "Spanish", level: 100, category: "language" },
  { id: "english", name: "English", level: 80, category: "language" },
  { id: "godot", name: "Godot Engine", level: 50, category: "other" },
  { id: "unreal", name: "Unreal Engine", level: 40, category: "other" },
];

export const skillCategoryOrder: SkillCategory[] = ["it", "language", "other"];
