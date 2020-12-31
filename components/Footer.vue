<template>
  <footer class="py-6">
    <div class="has-text-centered">
      <a
        :href="`https://www.linkedin.com/in/${usernames.linkedIn}`"
        class="px-2"
      >
        <i class="fa fa-linkedin" aria-hidden="true" />
      </a>
      <a :href="`https://github.com/${usernames.github}`" class="px-2">
        <i class="fa fa-github" aria-hidden="true" />
      </a>
      <a :href="`https://twitter.com/${usernames.twitter}`" class="px-2">
        <i class="fa fa-twitter" aria-hidden="true" />
      </a>
    </div>
    <div class="has-text-centered mt-3">
      <span
        class="has-text-grey-light"
      >Daniel De Castro © {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import usernames from '~/utils/usernames'
export default Vue.extend({
  computed: {
    usernames () {
      return usernames
    }
  }
})
</script>
