import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkSmartypants from "remark-smartypants";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [vue(), mdx()],
    // legacy: {
    //     astroFlavoredMarkdown: true,
    // },
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
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
        plugins: [Icons({ compiler: "vue3" })],
        ssr: {
            external: ["@fortawesome/fontawesome-svg-core", "@fortawesome/free-solid-svg-icons"],
        },
    },
});
