<template>
  <button
    class="border-none bg-dark-slate p-3 text-base text-default-secondary hover:text-default-smoke"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    /**
     * text in button
     */
    text: {
      type: String,
      default: ''
    }
  }
});
</script>

<style scoped></style>
