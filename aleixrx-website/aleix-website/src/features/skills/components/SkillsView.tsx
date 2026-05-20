"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { skills } from "../model/skills";
import { SkillBar } from "./SkillBar";

export function SkillsView() {
  const { t } = useI18n();

  return (
    <section className="container-fluid">
      <header className="mb-4">
        <h1 className="h2 fw-bold mb-1">{t("skills.title")}</h1>
        <p className="text-body-secondary mb-0">{t("skills.subtitle")}</p>
      </header>
      <ul className="list-unstyled d-flex flex-column gap-4 m-0">
        {skills.map((skill) => (
          <li key={skill.id}>
            <SkillBar skill={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
}
