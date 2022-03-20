<template>
    <DocsLayout :subtitles="subtitles" :links="links">
        <VueRemarkContent class="post mb"></VueRemarkContent>
    </DocsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: tutorialPage (id: $id) {
    title
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
import links from "@/data/doc-links-tutorial.yaml";
import mediumZoom from "medium-zoom";
export default {
    computed: {
        links() {
            return links;
        },
        subtitles() {
            // Remove h1, h4, h5, h6 titles
            let subtitles = this.$page.doc.subtitles.filter(function(
                value,
                index,
                arr
            ) {
                return [2, 3].includes(value.depth);
            });
            return subtitles;
        },
    },
    updated() {
        mediumZoom("img", { background: "transparent", margin: 150 });
    },
    metaInfo() {
        const { title, headings } = this.$page.doc;
        return {
            title: title || (headings.length ? headings[0].value : undefined),
        };
    },
};
</script>

<style>
.medium-zoom-overlay,
.medium-zoom-image--opened {
    z-index: 999;
}
</style>
