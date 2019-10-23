<template>
  <Layout class="has-sidebar docs-page" :footer="true">
    <div class="container flex flex-align-top">
      <div class="sidebar" v-if="links">
        <template v-for="(group, i1) in links">
          <h3 class="menu-item" :key="`title-${i1}`">{{ group.title }}</h3>
          <template v-for="(item, i2) in group.items">
            <g-link exact class="menu-item menu-link" :to="item.link" :key="`link-${i1}-${i2}`">
              {{ item.title }}
            </g-link>
          </template>
        </template>
      </div>
      <Section class="doc-content flex-fit" container="base">
        <slot />
        <nav class="docs-nav">
          <div class="docs-nav__previous">
            <g-link v-if="previousPage" exact class="button  button--small docs-nav__link" :to="previousPage.link">
              &larr; {{ previousPage.title }}
            </g-link>
          </div>
          <div class="docs-nav__next">
            <g-link v-if="nextPage" exact class="button  button--small docs-nav__link" :to="nextPage.link">
              {{ nextPage.title }} &rarr;
            </g-link>
          </div>
        </nav>
      </Section>
      <div v-if="subtitles.length > 0 && subtitles[0].depth !== 3" class="sidebar sidebar--right hide-for-small">
        <h3>On this page</h3>
        <ul v-if="subtitles.length" class="menu-item submenu">
          <li class="submenu__item" :class="'submenu__item-depth-' + subtitle.depth" v-for="subtitle in subtitles" :key="subtitle.value">
            <a class="submenu__link" :href="subtitle.anchor">
              {{ subtitle.value }}
            </a>
          </li>
        </ul>
      </div>
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