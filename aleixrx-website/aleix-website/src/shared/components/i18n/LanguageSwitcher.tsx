"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";
import type { Locale } from "@/shared/lib/i18n/dictionaries";

interface LocaleOption {
  code: Locale;
  labelKey: "language.english" | "language.spanish";
  flag: React.ReactNode;
}

function FlagUK() {
  return (
    <svg
      className="flag-icon"
      viewBox="0 0 60 30"
      role="img"
      aria-hidden="true"
    >
      <clipPath id="uk-clip">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="uk-diag">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0 0l60 30m0-30L0 30"
          clipPath="url(#uk-diag)"
          stroke="#C8102E"
          strokeWidth="4"
        />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function FlagES() {
  return (
    <svg
      className="flag-icon"
      viewBox="0 0 60 40"
      role="img"
      aria-hidden="true"
    >
      <rect width="60" height="40" fill="#AA151B" />
      <rect y="10" width="60" height="20" fill="#F1BF00" />
    </svg>
  );
}

const options: LocaleOption[] = [
  { code: "en", labelKey: "language.english", flag: <FlagUK /> },
  { code: "es", labelKey: "language.spanish", flag: <FlagES /> },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const current = options.find((option) => option.code === locale) ?? options[0];

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        type="button"
        className="btn btn-outline-secondary d-inline-flex align-items-center gap-2"
        aria-label={t("language.select")}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {current.flag}
        <span className="text-uppercase small fw-semibold">{current.code}</span>
      </button>
      {open && (
        <ul
          className="dropdown-menu show mt-1 end-0"
          role="listbox"
          style={{ right: 0, left: "auto" }}
        >
          {options.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                className={`dropdown-item d-flex align-items-center gap-2 ${
                  option.code === locale ? "active" : ""
                }`}
                role="option"
                aria-selected={option.code === locale}
                onClick={() => {
                  setLocale(option.code);
                  setOpen(false);
                }}
              >
                {option.flag}
                <span>{t(option.labelKey)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
