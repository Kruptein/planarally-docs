module.exports = {
    siteName: "PlanarAlly",
    port: 8081,
    templates: {
        BlogPost: "/blog/:year/:month/:day/:title",
    },
    plugins: [
        {
            use: "@gridsome/source-filesystem",
            options: {
                path: "./blog/*/index.md",
                typeName: "BlogPost",
                refs: {
                    author: "Contributor",
                },
            },
        },
        {
            use: "@gridsome/vue-remark",
            options: {
                index: ["README"],
                baseDir: "./docs",
                pathPrefix: "/docs",
                plugins: [
                    "@gridsome/remark-prismjs",
                    "gridsome-plugin-remark-container",
                ],
                typeName: "DocPage",
                template: "./src/templates/DocPage.vue",
                remark: {
                    autolinkHeadings: {
                        content: {
                            type: "text",
                            value: "#",
                        },
                    },
                },
            },
        },
        {
            use: "@gridsome/vue-remark",
            options: {
                index: ["README"],
                baseDir: "./tutorial",
                pathPrefix: "/tutorial",
                plugins: [
                    "@gridsome/remark-prismjs",
                    "gridsome-plugin-remark-container",
                ],
                typeName: "TutorialPage",
                template: "./src/templates/TutorialPage.vue",
                remark: {
                    autolinkHeadings: {
                        content: {
                            type: "text",
                            value: "#",
                        },
                    },
                },
            },
        },
        {
            use: "@gridsome/vue-remark",
            options: {
                index: ["README"],
                baseDir: "./server",
                pathPrefix: "/server",
                plugins: [
                    "@gridsome/remark-prismjs",
                    "gridsome-plugin-remark-container",
                ],
                typeName: "ServerPage",
                template: "./src/templates/ServerPage.vue",
                remark: {
                    autolinkHeadings: {
                        content: {
                            type: "text",
                            value: "#",
                        },
                    },
                },
            },
        },
    ],
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule.use("vue-svg-loader").loader("vue-svg-loader");
    },
};
