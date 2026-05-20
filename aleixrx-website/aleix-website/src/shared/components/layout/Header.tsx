import Image from "next/image";
import { profile } from "@/shared/lib/data/profile";
import { LanguageSwitcher } from "@/shared/components/i18n/LanguageSwitcher";

export function Header() {
  return (
    <header className="app-shell__header px-4 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <Image
          src={profile.avatarSrc}
          alt={profile.fullName}
          width={56}
          height={56}
          className="app-avatar"
          priority
        />
      </div>
      <div className="d-flex align-items-center">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
