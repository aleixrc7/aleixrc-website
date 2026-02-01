"use client";

import Image from "next/image";
import { useId, useState } from "react";
import styles from "./DashboardMain.module.css";

type LanguageOption = "en" | "es";

const navItems = [
  { label: "Dashboard", href: "#" },
  { label: "Skills", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Experience", href: "#" },
];

const languageLabels: Record<LanguageOption, string> = {
  en: "English",
  es: "Espanol",
};

export function DashboardMain() {
  const [language, setLanguage] = useState<LanguageOption>("en");
  const languageSelectId = useId();
  const flagClass =
    language === "es" ? styles.flagSpain : styles.flagUnitedKingdom;

  return (
    <div className={`${styles.dashboard} min-vh-100 d-flex flex-column`}>
      <header className="border-bottom">
        <div className="container-fluid py-4">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div className="d-flex align-items-center gap-3">
              <Image
                src="/profile-placeholder.svg"
                alt="Portrait of Aleix RC"
                width={64}
                height={64}
                className={styles.avatar}
                priority
              />
              <div>
                <p className="text-uppercase small mb-1 text-muted">
                  Frontend Developer
                </p>
                <h1 className="h4 mb-0">Aleix RC</h1>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <label
                htmlFor={languageSelectId}
                className="small text-muted me-1"
              >
                Language
              </label>
              <span className={`${styles.flag} ${flagClass}`} aria-hidden />
              <select
                id={languageSelectId}
                className="form-select form-select-sm"
                value={language}
                onChange={(event) =>
                  setLanguage(event.target.value as LanguageOption)
                }
                aria-label="Select language"
              >
                <option value="en">{languageLabels.en}</option>
                <option value="es">{languageLabels.es}</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid flex-grow-1">
        <div className="row h-100">
          <aside className="col-12 col-lg-3 col-xl-2 border-end py-4">
            <nav aria-label="Primary">
              <ul className="nav flex-column gap-2">
                {navItems.map((item) => (
                  <li key={item.label} className="nav-item">
                    <a className="nav-link px-0" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <main className="col-12 col-lg-9 col-xl-10 py-4">
            <section className="col-12 col-xl-9">
              <h2 className="h5">About me</h2>
              <p className="lead">
                I am a frontend developer focused on building clear, fast, and
                accessible experiences. I enjoy translating complex ideas into
                simple interfaces and building design systems that scale.
              </p>
              <p className="mb-4">
                This space is a single-page dashboard with room for skills,
                projects, and writing. It stays lightweight, uses clean
                structure, and keeps the UI responsive for every screen size.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge text-bg-dark">UI Engineering</span>
                <span className="badge text-bg-dark">Design Systems</span>
                <span className="badge text-bg-dark">React + Next.js</span>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="border-top mt-auto">
        <div className="container-fluid py-3 small text-muted d-flex flex-wrap justify-content-between gap-2">
          <span>© 2026 Aleix RC</span>
          <span>Available for collaborations and new challenges.</span>
        </div>
      </footer>
    </div>
  );
}
