import { defineConfig } from "astro/config";
import astroImageTools from "astro-imagetools/plugin";
import Icons from "unplugin-icons/vite";
import vue from "@astrojs/vue";
import image from "@astrojs/image";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import remarkDirective from "remark-directive";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), image({ serviceEntryPoint: "@astrojs/image/sharp" }), mdx()],
    legacy: {
        astroFlavoredMarkdown: true,
    },
    markdown: {
        remarkPlugins: [remarkGfm, remarkSmartypants, remarkDirective],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "prepend",
                    content: {
                        type: "text",
                        value: "#",
                    },
                },
            ],
        ],
    },
    vite: {
        plugins: [astroImageTools, Icons({})],
        ssr: {
            external: ["@fortawesome/fontawesome-svg-core", "@fortawesome/free-solid-svg-icons"],
        },
    },
});
