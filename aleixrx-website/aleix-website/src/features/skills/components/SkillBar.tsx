"use client";

import { useEffect, useState } from "react";
import type { Skill } from "../model/skills";

interface SkillBarProps {
  skill: Skill;
}

export function SkillBar({ skill }: SkillBarProps) {
  const [renderedLevel, setRenderedLevel] = useState(0);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setRenderedLevel(skill.level));
    return () => window.cancelAnimationFrame(id);
  }, [skill.level]);

  return (
    <div>
      <div className="d-flex justify-content-between mb-1">
        <span className="fw-semibold">{skill.name}</span>
        <span className="text-body-secondary small">{skill.level} / 100</span>
      </div>
      <div
        className="skill-bar"
        role="progressbar"
        aria-label={skill.name}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.level}
      >
        <div
          className="skill-bar__fill"
          style={{ width: `${renderedLevel}%` }}
        />
        <span className="skill-bar__label">{skill.level}%</span>
      </div>
    </div>
  );
}
