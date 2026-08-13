import en from "./locales/en.json";

export const languages = {
    en: "English",
} as const;

export const defaultLang = "en";

export const ui = {
    en,
} as const;

export type SupportedLanguage = keyof typeof ui;
export type TranslationKey = keyof typeof en;
