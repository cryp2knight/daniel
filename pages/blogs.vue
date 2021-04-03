<template>
  <div class="container is-fluid pt-6 mt-6">
    <h2 class="title is-2">
      Blogs
    </h2>
    <hr>
    <BlogCard
      v-for="item of items.filter((el) => el.categories)"
      :key="item.guid"
      :blog="item"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Parser from 'rss-parser'
import usernames from '~/utils/usernames'

const parser = new Parser()

export default Vue.extend({
  async asyncData () {
    const { items } = await parser.parseURL(
      `https://medium.com/feed/@${usernames.medium}`
    )
    return { items }
  }
})
</script>

<style scoped>
h2 {
  color: white !important;
}
</style>
