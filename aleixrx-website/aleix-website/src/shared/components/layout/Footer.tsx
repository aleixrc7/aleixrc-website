"use client";

import { ThemeToggle } from "@/shared/components/theme/ThemeToggle";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import { profile } from "@/shared/lib/data/profile";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="app-shell__footer px-4 py-3 d-flex align-items-center justify-content-between">
      <ThemeToggle />
      <small className="text-body-secondary">
        © {year} {profile.fullName}. {t("footer.rights")}
      </small>
    </footer>
  );
}
