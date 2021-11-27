<template>
  <div class="home flex flex-wrap">
    <div class="w-full md:w-1/2">
      <div class="flex h-full items-center justify center">
        <div class="w-full text-center">
          <h2 class="text-3xl md:text-5xl">Bienvenido</h2>
          <p class="mb-6">
            Te invitamos a ver los mejores comics de romance, <br />
            sarcasmo, matemáticas y lenguaje.
          </p>
          <a href="#!">Ver comics</a>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 hidden md:flex right-side"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home'
});
</script>
<style lang="scss" scoped>
@import './home';
</style>
