<template>
  <button
    id="btnTop"
    title="Go to top"
    :style="`display: ${showButton ? 'block' : 'none'}`"
    @click="goToTop"
  >
    <i class="fa fa-arrow-up" aria-hidden="true" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      showButton: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => this.scroll())
  },
  methods: {
    goToTop () {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
    },
    scroll () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.showButton = true
      } else {
        this.showButton = false
      }
    }
  }
})
</script>

<style scoped>
#btnTop {
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #2c3e50; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 10px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}

i {
  color: white !important;
}

#btnTop:hover {
  background-color: black; /* Add a dark-grey background on hover */
}
</style>
