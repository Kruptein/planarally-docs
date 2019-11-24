<template>
  <Layout class="has-sidebar docs-page" :footer="true">
    <div class="container flex flex-align-top">
      <div class="sidebar" v-if="subtitles">
        <template v-for="subtitle in subtitles">
          <h3 class="menu-item" v-if="subtitle.depth === 2" :key="`title-${subtitle.value}`">{{ subtitle.value }}</h3>
          <a :key="`item-${subtitle.value}`" v-if="subtitle.depth === 3" :href="subtitle.anchor">{{ subtitle.value }}</a>
          <a :key="`item-${subtitle.value}`" v-if="subtitle.depth === 4" :href="subtitle.anchor" style="padding-left:10px;">{{ subtitle.value }}</a>
        </template>
      </div>
      <Section class="doc-content flex-fit" container="base">
        <slot />
      </Section>
    </div>
  </Layout>
</template>

<script>
export default {
  props: {
    subtitles: { type: Array, default: () => [] },
    links: { type: Array, default: () => [] }
  },
  computed: {
    items () {
      return this.links.reduce((acc, group) => (acc.push(...group.items), acc), [])
    },
    currentIndex () {
      return this.items.findIndex(item => {
        return item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
      })
    },
    nextPage () {
      return this.items[this.currentIndex + 1]
    },
    previousPage () {
      return this.items[this.currentIndex - 1]
    }
  }
}
</script>