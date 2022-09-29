import { defineConfig } from "astro/config";
import astroImageTools from "astro-imagetools/plugin";
import Icons from "unplugin-icons/vite";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    legacy: {
        astroFlavoredMarkdown: true,
    },
    markdown: {
        remarkPlugins: ["remark-gfm", "remark-smartypants", "remark-directive"],
        rehypePlugins: [
            "rehype-slug",
            ["rehype-autolink-headings", { behavior: "prepend", content: { type: "text", value: "#" } }],
        ],
    },
    vite: {
        plugins: [astroImageTools, Icons({})],
        ssr: { external: ["@fortawesome/fontawesome-svg-core", "@fortawesome/free-solid-svg-icons"] },
    },
});
