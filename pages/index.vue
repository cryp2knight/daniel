<template>
  <div class="hero-body">
    <Profile :github="data" />
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import usernames from "~/utils/usernames";

export default Vue.extend({
  async asyncData({ $axios }: any) {
    const { data } = await $axios.get(
      `https://api.github.com/users/${usernames.github}`
    );
    return { data };
  },
});
</script>