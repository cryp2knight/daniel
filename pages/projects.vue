<template>
  <div class="container is-fluid pt-6 mt-6">
    <h2 class="title is-2">Projects</h2>
    <hr />
    <ProjectCard v-for="project of data" :key="project.id" :project="project" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import usernames from "~/utils/usernames";
export default Vue.extend({
  async asyncData({ $axios }: any) {
    const { data } = await $axios.get(
      `https://api.github.com/users/${usernames.github}/repos`
    );
    return { data };
  },
});
</script>