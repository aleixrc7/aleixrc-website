"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { profile } from "@/shared/lib/data/profile";

export function DashboardView() {
  const { t } = useI18n();

  return (
    <section className="container-fluid px-0">
      <header>
        <h1 className="mb-1">{profile.fullName}</h1>
        <p className="text-body-secondary mb-0">{t("dashboard.aboutTitle")}</p>
      </header>
      <p className="text-body-secondary" style={{ maxWidth: "162ch" }}>
        {t("dashboard.description")}
      </p>
    </section>
  );
}
