<template>
  <div>
    <Navigation />
    <TopButton />
    <div class="container is-max-desktop">
      <section class="hero is-fullheight">
        <Nuxt />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  watch: {
    $route() {
      this.$store.dispatch("discordify", "Someone visited your website. ");
    },
  },
  mounted() {
    this.$store.dispatch("discordify", "Someone visited your website. ");
  },
});
</script>
