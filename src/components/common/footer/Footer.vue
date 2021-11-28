<template>
  <footer>
    <span>COPYRIGHT &copy;</span>
    <span>{{ getYear }} </span>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    /**
     * Get full year
     */
    getYear(): number {
      return new Date().getFullYear();
    }
  }
});
</script>
<style lang="scss" scoped>
@import './footer';
</style>
