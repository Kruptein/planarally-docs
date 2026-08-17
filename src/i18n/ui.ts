import en from "./locales/en.json";
import es from "./locales/es.json";
import it from "./locales/it.json";

export const languages = {
    en: "English",
    it: "Italiano",
    es: "Español",
} as const;

export const defaultLang = "en";

export const ui = {
    en,
    it,
    es,
} as const;

export type SupportedLanguage = keyof typeof ui;
export type TranslationKey = keyof typeof en;
