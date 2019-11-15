<template>
  <BlogLayout :subtitles="subtitles">
    <Section container="md" dots="true" >

      <div class="post-header container-md text-center mb-x2">
        <h1 v-html="$page.post.title"/>
        <PostMeta :post="$page.post"/>
      </div>

      <div class="post-content post mb-x2">

        <!-- <g-image v-if="$page.post.poster" quality="1" width="600" :src="$page.post.poster" /> -->

        <p class="lead" v-html="$page.post.excerpt"/>

        <div v-html="$page.post.content"/>

      </div>
    </Section>
  </BlogLayout>
</template>

<page-query>
query ($id: ID!) {
  post: blogPost (id: $id) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    author {
      id
      title
      avatar (width: 60)
    }
    excerpt
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
import PostMeta from '@/components/PostMeta.vue'
export default {
  components: {
    PostMeta
  },
  computed: {
    subtitles() {
        // Remove h1, h4, h5, h6 titles
        let subtitles = this.$page.post.subtitles.filter(function(value, index, arr){
          return [2,3,4].includes(value.depth)
        })
        return subtitles;
      },
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.excerpt
        }
      ]
    }
  }
}
</script>