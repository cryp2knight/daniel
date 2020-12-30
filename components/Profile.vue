<template>
  <div class="container">
    <h1 class="title is-1">
      Hi! I'm Daniel
    </h1>
    <h2 class="subtitle">
      {{ github.bio }}
    </h2>
    <hr>
    <p class="is-6">
      @{{ github.login }}
    </p>
    <div class="level is-mobile">
      <div class="level-left has-text-grey">
        <span class="level-item">
          <span class="icon is-small mr-2">
            <i class="fa fa-github-alt" aria-hidden="true" />
          </span>

          <span class="has-text-weight-semibold mr-2">{{
            github.public_repos
          }}</span>
          <span>public repos</span>
        </span>
        <span class="level-item">
          <span class="icon is-small mr-2">
            <i class="fa fa-users" aria-hidden="true" />
          </span>

          <span class="has-text-weight-semibold mr-2">{{
            github.followers
          }}</span>
          <span>followers</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    github: {
      type: Object,
      default () {
        return {}
      }
    }
  }
})
</script>
