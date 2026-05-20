"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/shared/lib/data/nav";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <aside className="app-shell__sidebar p-3">
      <div className="px-2 py-3 mb-2">
        <span className="fw-bold fs-5">Portfolio</span>
      </div>
      <nav aria-label="Primary">
        <ul className="list-unstyled d-flex flex-column gap-1 m-0">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`sidebar-link ${
                    isActive ? "sidebar-link--active" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
