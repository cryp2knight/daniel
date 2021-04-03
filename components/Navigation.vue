<template>
  <nav
    class="navbar is-fixed-top is-transparent is-lowercase my-navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand px-3">
      <nuxt-link class="navbar-item" to="/">
        <h1 class="is-size-4 has-text-weight-semibold">
          Daniel De Castro
        </h1>
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        :class="toggle && 'is-active'"
        @click="toggle = !toggle"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-menu px-3 my-navbar" :class="toggle && 'is-active'">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/blogs">
          Blogs
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/projects">
          Projects
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/resume">
          Resume
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      toggle: false
    }
  }
})
</script>

<style scoped>
.my-navbar {
  background-color: #2c3e50;
}
a,
h1 {
  color: white !important;
}
a:hover,
a:active,
a:visited {
  background-color: black !important;
}
</style>
