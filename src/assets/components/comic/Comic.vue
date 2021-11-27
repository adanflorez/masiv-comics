<template>
  <div></div>
</template>

<script lang="ts">
import Vue from 'vue';

import comicServices from '@/http/services';

export default Vue.extend({
  mounted() {
    this.getComics();
  },
  methods: {
    async getComics() {
      const data = await comicServices.getComic();
      console.log(data);
    }
  }
});
</script>

<style scoped></style>
