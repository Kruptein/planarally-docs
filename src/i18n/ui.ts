import de from "./locales/de.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import it from "./locales/it.json";

export const languages = {
    en: "English",
    de: "Deutsch",
    it: "Italiano",
    es: "Español",
    fr: "Français",
} as const;

export const defaultLang = "en";

export const ui = {
    en,
    de,
    it,
    es,
    fr,
} as const;

export type SupportedLanguage = keyof typeof ui;
export type TranslationKey = keyof typeof en;
