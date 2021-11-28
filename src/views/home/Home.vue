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
          <router-link :to="`/comic/${getRandomNumber}`">Ver comic</router-link>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 hidden md:flex right-side"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  computed: {
    /**
     * Returns a number between 1 and 2547 (comic quantity)
     */
    getRandomNumber(): number {
      return Math.floor(Math.random() * 2547 + 1);
    }
  }
});
</script>
<style lang="scss" scoped>
@import './home';
</style>
