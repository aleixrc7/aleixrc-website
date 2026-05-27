"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export function ProjectsView() {
  const { t } = useI18n();
  return (
    <section className="container-fluid px-0">
      <header>
        <h1 className="mb-0">{t("projects.title")}</h1>
      </header>
      <p className="text-body-secondary">{t("projects.empty")}</p>
    </section>
  );
}
