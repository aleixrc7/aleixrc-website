"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import type { DictionaryKey } from "@/shared/lib/i18n/dictionaries";
import { skills, skillCategoryOrder, type SkillCategory } from "../model/skills";
import { SkillBar } from "./SkillBar";

const categoryTitleKey: Record<SkillCategory, DictionaryKey> = {
  it: "skills.category.it",
  language: "skills.category.language",
  other: "skills.category.other",
};

export function SkillsView() {
  const { t } = useI18n();

  const groups = skillCategoryOrder
    .map((category) => ({
      category,
      items: skills.filter((skill) => skill.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section className="container-fluid px-0">
      <header>
        <h1 className="mb-1">{t("skills.title")}</h1>
        {/* <p className="text-body-secondary mb-0">{t("skills.subtitle")}</p> */}
      </header>
      <div className="d-flex flex-column gap-5 mt-3">
        {groups.map(({ category, items }) => (
          <section key={category}>
            <h2 className="h5 mb-3">{t(categoryTitleKey[category])}</h2>
            <ul className="list-unstyled d-flex flex-column gap-4 m-0">
              {items.map((skill) => (
                <li key={skill.id}>
                  <SkillBar skill={skill} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
