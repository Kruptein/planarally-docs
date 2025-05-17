type DocsNavigationItem = { title: string; path: string };

export interface DocsNavigation {
    title: string;
    path: string;
    items: (string | DocsNavigationItem)[];
}

type FlatDocsNavigation = DocsNavigationItem & { depth: number; active?: boolean };

export const docStructure: Record<string, DocsNavigation[]> = {
    docs: [
        {
            title: "Overview",
            path: "",
            items: [
                { title: "Introduction", path: "/" },
                { title: "Quick Reference", path: "/reference/" },
                { title: "Tools Overview", path: "/tools-overview/" },
            ],
        },
        {
            title: "Dashboard",
            path: "/dashboard",
            items: [
                { title: "Games", path: "/games/" },
                { title: "Assets", path: "/assets/" },
                { title: "Settings", path: "/settings/" },
            ],
        },
        {
            title: "Game",
            path: "/game",
            items: [
                { title: "Board", path: "/gameboard/" },
                { title: "Client Settings", path: "/settings/" },
                "Markers",
                "Snapping",
                "Shapes",
                "Notes",
                "Chat",
            ],
        },
        {
            title: "DM",
            path: "/dm",
            items: [
                { title: "Campaign Settings", path: "/settings/" },
                "Layers",
                "Floors",
                "Locations",
                { title: "Lighting & Vision", path: "/lighting-vision/" },
                "Assets",
            ],
        },
        {
            title: "Tools",
            path: "/tools",
            items: [
                "Select",
                "Pan",
                "Draw",
                "Spell",
                "Ruler",
                "Ping",
                "Vision",
                "Zoom",
                "Initiative",
                { title: "Undo/Redo", path: "/undo/" },
            ],
        },
        {
            title: "DM Tools",
            path: "/tools",
            items: ["Map", { title: "Quick toggles", path: "/quick-toggles/" }],
        },
    ],
    learn: [
        { title: "Player 101", path: "/player", items: [{ title: "Introduction", path: "/intro/" }, "Interaction"] },
        {
            title: "DM 101",
            path: "/dm",
            items: [
                { title: "Introduction", path: "/intro/" },
                { title: "First Map", path: "/first-map/" },
                { title: "Other Features", path: "/other-features/" },
            ],
        },
        {
            title: "Varia",
            path: "/varia",
            items: [
                { title: "RTS-style lighting", path: "/rts-lighting/" },
                { title: "Wall Masks Guide", path: "/Wall_guide/wall-masks/" },
                { title: "Markdown Tutorial", path: "/Markdown_Tutorial/markdown/" },
            ],
        },
    ],
    server: [
        {
            title: "Installation",
            path: "/setup",
            items: [{ title: "Start", path: "/" }, { title: "Self-hosted", path: "/self-hosting/" }, "Managed"],
        },
        {
            title: "Management",
            path: "/management",
            items: ["Configuration", { title: "User Management", path: "/users/" }, "API"],
        },
        {
            title: "Advanced",
            path: "/advanced",
            items: [{ title: "Reverse proxy setup", path: "/proxy/" }, "Subpath"],
        },
    ],
};

export function getDocsNav(section: string, currentUrl: string): FlatDocsNavigation[] {
    const nav: FlatDocsNavigation[] = [];
    for (const doc of docStructure[section]) {
        const { items, ...rest } = doc;
        nav.push({ ...rest, path: `/${section}${rest.path}`, depth: 1 });
        for (const item of items) {
            const pathEnd = typeof item === "string" ? `/${item.toLowerCase()}/` : item.path;
            const path = `/${section}${rest.path}${pathEnd}`;
            nav.push({
                title: typeof item === "string" ? item : item.title,
                path,
                depth: 2,
                active: path === currentUrl,
            });
        }
    }
    return nav;
}
