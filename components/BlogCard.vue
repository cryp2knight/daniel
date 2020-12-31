<template>
  <div class="box">
    <div class="columns">
      <div v-if="imageUrl" class="column is-one-quarter">
        <img :src="imageUrl" class="cover" height="100">
      </div>
      <div class="column">
        <a
          :href="blog.link"
        ><h2 class="title is-4">{{ blog.title }}</h2></a>
        <p>
          <small>Updated {{ new Date(blog.pubDate).toDateString() }}</small>
        </p>
        <p class="subtitle is-5">
          {{
            blog["content:encodedSnippet"] &&
              blog["content:encodedSnippet"].slice(0, 200) + "..."
          }}
        </p>
        Tags:
        <small
          v-for="category of blog.categories"
          :key="category"
        ><span
          class="tag mx-1"
          :class="tags[Math.floor(Math.random() * 8)]"
        >{{ category }}</span></small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import tags from '~/utils/tags'

export default Vue.extend({
  props: {
    blog: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    tags () {
      return tags
    },
    imageUrl () {
      const content = this.blog['content:encoded']
      if (!content) { return null }
      const img = content.match(/<img.+?src=[\'"]([^\'"]+)[\'"].*?>/i)
      if (img.length > 0) { return img[1] }
      return null
    }
  }
})
</script>
