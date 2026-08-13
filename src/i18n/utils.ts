import { defaultLang, type SupportedLanguage, type TranslationKey, ui } from "./ui";

export function getLangFromUrl(url: URL): SupportedLanguage {
    const [, lang] = url.pathname.split("/");
    if (lang in ui) return lang as SupportedLanguage;
    return defaultLang;
}

export function useTranslations(lang: string) {
    const activeLang: SupportedLanguage = lang in ui ? (lang as SupportedLanguage) : defaultLang;
    const localizedUI: Record<string, string> = ui[activeLang];
    return function t(key: TranslationKey | string): string {
        return localizedUI[key] || ui[defaultLang][key as TranslationKey] || key;
    };
}
