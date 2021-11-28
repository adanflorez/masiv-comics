<template>
  <div id="app">
    <Loading v-if="show" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
export default Vue.extend({
  components: {
    Loading: () => import('@/components/common/loading/Loading.vue')
  },
  computed: {
    ...mapState('loading', ['show'])
  }
});
</script>

<style lang="scss">
@import '@/assets/scss/index';
html,
body {
  font-family: 'Lato', 'sans-serif' !important;
  @apply text-dark-slate;
}
</style>
