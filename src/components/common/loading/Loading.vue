<template>
  <div class="loader">
    <div class="h-full flex justify-center items-center">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
@import './loading';
</style>
