import { useTranslations } from "./i18n/utils";

export interface DocItem {
    key: string;
    path: string;
}

export interface DocSectionGroup {
    key: string;
    path: string;
    items: DocItem[];
}

export interface FlatDocsNavigation {
    title: string;
    path: string;
    depth: number;
    active?: boolean;
}

export const docStructure: Record<string, DocSectionGroup[]> = {
    docs: [
        {
            key: "sidebar.docs.overview",
            path: "",
            items: [
                { key: "sidebar.docs.intro", path: "/" },
                { key: "sidebar.docs.reference", path: "/reference/" },
                { key: "sidebar.docs.toolsOverview", path: "/tools-overview/" },
            ],
        },
        {
            key: "sidebar.docs.dashboard",
            path: "/dashboard",
            items: [
                { key: "sidebar.docs.games", path: "/games/" },
                { key: "sidebar.docs.assets", path: "/assets/" },
                { key: "sidebar.docs.settings", path: "/settings/" },
            ],
        },
        {
            key: "sidebar.docs.game",
            path: "/game",
            items: [
                { key: "sidebar.docs.gameboard", path: "/gameboard/" },
                { key: "sidebar.docs.clientSettings", path: "/settings/" },
                { key: "sidebar.docs.markers", path: "/markers/" },
                { key: "sidebar.docs.snapping", path: "/snapping/" },
                { key: "sidebar.docs.shapes", path: "/shapes/" },
                { key: "sidebar.docs.notes", path: "/notes/" },
                { key: "sidebar.docs.chat", path: "/chat/" },
            ],
        },
        {
            key: "sidebar.docs.dm",
            path: "/dm",
            items: [
                { key: "sidebar.docs.campaignSettings", path: "/settings/" },
                { key: "sidebar.docs.layers", path: "/layers/" },
                { key: "sidebar.docs.floors", path: "/floors/" },
                { key: "sidebar.docs.locations", path: "/locations/" },
                { key: "sidebar.docs.lightingVision", path: "/lighting-vision/" },
                { key: "sidebar.docs.dmAssets", path: "/assets/" },
            ],
        },
        {
            key: "sidebar.docs.tools",
            path: "/tools",
            items: [
                { key: "sidebar.docs.select", path: "/select/" },
                { key: "sidebar.docs.pan", path: "/pan/" },
                { key: "sidebar.docs.draw", path: "/draw/" },
                { key: "sidebar.docs.spell", path: "/spell/" },
                { key: "sidebar.docs.ruler", path: "/ruler/" },
                { key: "sidebar.docs.ping", path: "/ping/" },
                { key: "sidebar.docs.vision", path: "/vision/" },
                { key: "sidebar.docs.zoom", path: "/zoom/" },
                { key: "sidebar.docs.initiative", path: "/initiative/" },
                { key: "sidebar.docs.undo", path: "/undo/" },
            ],
        },
        {
            key: "sidebar.docs.dmTools",
            path: "/tools",
            items: [
                { key: "sidebar.docs.map", path: "/map/" },
                { key: "sidebar.docs.quickToggles", path: "/quick-toggles/" },
            ],
        },
    ],
    learn: [
        {
            key: "sidebar.learn.player101",
            path: "/player",
            items: [
                { key: "sidebar.learn.playerIntro", path: "/intro/" },
                { key: "sidebar.learn.interaction", path: "/interaction/" },
            ],
        },
        {
            key: "sidebar.learn.dm101",
            path: "/dm",
            items: [
                { key: "sidebar.learn.dmIntro", path: "/intro/" },
                { key: "sidebar.learn.firstMap", path: "/first-map/" },
                { key: "sidebar.learn.otherFeatures", path: "/other-features/" },
            ],
        },
        {
            key: "sidebar.learn.varia",
            path: "/varia",
            items: [
                { key: "sidebar.learn.rtsLighting", path: "/rts-lighting/" },
                { key: "sidebar.learn.wallMasks", path: "/Wall_guide/wall-masks/" },
                { key: "sidebar.learn.markdown", path: "/Markdown_Tutorial/markdown/" },
            ],
        },
    ],
    server: [
        {
            key: "sidebar.server.installation",
            path: "/setup",
            items: [
                { key: "sidebar.server.start", path: "/" },
                { key: "sidebar.server.selfHosting", path: "/self-hosting/" },
                { key: "sidebar.server.managed", path: "/managed/" },
            ],
        },
        {
            key: "sidebar.server.management",
            path: "/management",
            items: [
                { key: "sidebar.server.configuration", path: "/configuration/" },
                { key: "sidebar.server.users", path: "/users/" },
            ],
        },
        {
            key: "sidebar.server.advanced",
            path: "/advanced",
            items: [
                { key: "sidebar.server.proxy", path: "/proxy/" },
                { key: "sidebar.server.subpath", path: "/subpath/" },
            ],
        },
    ],
};

export function getDocsNav(section: string, currentUrl: string, lang: string = "en"): FlatDocsNavigation[] {
    const nav: FlatDocsNavigation[] = [];
    const sectionDocs = docStructure[section];
    if (!sectionDocs) return nav;

    const t = useTranslations(lang);
    const langPrefix = `/${lang}`;

    for (const doc of sectionDocs) {
        const sectionPath = `${langPrefix}/${section}${doc.path}`;
        nav.push({
            title: t(doc.key),
            path: sectionPath,
            depth: 1,
        });

        for (const item of doc.items) {
            const path = `${langPrefix}/${section}${doc.path}${item.path}`;
            const normalizedCurrent = currentUrl.endsWith("/") ? currentUrl : `${currentUrl}/`;
            const normalizedPath = path.endsWith("/") ? path : `${path}/`;
            nav.push({
                title: t(item.key),
                path,
                depth: 2,
                active: normalizedPath === normalizedCurrent,
            });
        }
    }
    return nav;
}
