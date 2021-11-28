<template>
  <div class="page-error flex flex-wrap">
    <div class="w-full md:w-1/2">
      <div class="flex h-full items-center justify center">
        <div class="w-full text-center">
          <h2 class="text-3xl md:text-5xl">404</h2>
          <p class="mb-6">No se encontró la pagína :(</p>
          <router-link to="/">Ir al inicio</router-link>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 hidden md:flex right-side"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="scss">
@import './page404';
</style>
