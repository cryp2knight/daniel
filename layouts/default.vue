<template>
  <div>
    <div class="skewed" />
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
import Vue from 'vue'
export default Vue.extend({
  watch: {
    $route () {
      this.$store.dispatch('discordify', 'Someone visited your website. ')
    }
  },
  mounted () {
    this.$store.dispatch('discordify', 'Someone visited your website. ')
  }
})
</script>

<style scoped>
.skewed {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: #2c3e50;
  z-index: 0;
  transform: skewY(8deg);
  transform-origin: top right;
}
</style>
