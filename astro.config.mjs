import { unified } from "@astrojs/markdown-remark";
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
    redirects: {
        "/": "/en/",
        "/server": "/en/server/setup/",
        "/server/": "/en/server/setup/",
        "/en/server": "/en/server/setup/",
        "/en/server/": "/en/server/setup/",
        "/it/server": "/it/server/setup/",
        "/it/server/": "/it/server/setup/",
        "/es/server": "/es/server/setup/",
        "/es/server/": "/es/server/setup/",
        "/fr/server": "/fr/server/setup/",
        "/fr/server/": "/fr/server/setup/",
        "/de/server": "/de/server/setup/",
        "/de/server/": "/de/server/setup/",
        "/zh/server": "/zh/server/setup/",
        "/zh/server/": "/zh/server/setup/",
    },
    integrations: [
        vue(),
        mdx({
            processor: unified({
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
            }),
        }),
    ],
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
    i18n: {
        locales: ["en", "de", "it", "es", "fr", "zh"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true,
        },
    },
});
