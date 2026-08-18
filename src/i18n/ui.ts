import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";
import zh from "./locales/zh.json";

export const languages = {
    en: "English",
    de: "Deutsch",
    it: "Italiano",
    es: "Español",
    fr: "Français",
    zh: "中文",
} as const;

export const defaultLang = "en";

export const ui = {
    en,
    de,
    it,
    es,
    fr,
    zh,
} as const;

export type SupportedLanguage = keyof typeof ui;
export type TranslationKey = keyof typeof en;
