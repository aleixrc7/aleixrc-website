export interface Skill {
  id: string;
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { id: "javascript", name: "JavaScript", level: 88 },
  { id: "angular", name: "Angular", level: 72 },
  { id: "node", name: "Node.js", level: 80 },
  { id: "php", name: "PHP", level: 60 },
];
