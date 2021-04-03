<template>
  <div class="box">
    <a
      :href="project.html_url"
    ><h4 class="title is-4">{{ project.name }}</h4></a>
    <p>
      <small>Updated at {{ new Date(project.updated_at).toDateString() }}</small>
    </p>
    <p class="subtitle is-5">
      {{ project.description }}
    </p>
    <span
      v-if="project.language"
      class="tag"
      :class="tags[Math.floor(Math.random() * 8)]"
    >{{ project.language }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import tags from '~/utils/tags'

export default Vue.extend({
  props: {
    project: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    tags () {
      return tags
    }
  }
})
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
