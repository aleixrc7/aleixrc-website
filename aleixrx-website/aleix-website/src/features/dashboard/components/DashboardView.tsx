"use client";

import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { profile } from "@/shared/lib/data/profile";

export function DashboardView() {
  const { t } = useI18n();

  return (
    <section className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 text-center">
          <h1 className="display-3 fw-bold mb-4">{profile.fullName}</h1>
          <h2 className="h4 text-body-secondary mb-3">
            {t("dashboard.aboutTitle")}
          </h2>
          <p className="lead text-body-secondary mb-0">
            {t("dashboard.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
