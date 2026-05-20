import type { DictionaryKey } from "@/shared/lib/i18n/dictionaries";

export interface NavItem {
  href: string;
  labelKey: DictionaryKey;
}
