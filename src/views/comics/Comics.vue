<template>
  <div class="my-6">
    <Comic :comic="comic" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import Comic from '@/components/comic/Comic.vue';
// services
import comicServices from '@/http/services';
// interfaces
import IComic from '@/interfaces/comic';

export default Vue.extend({
  components: { Comic },
  data: () => ({
    comic: {} as IComic
  }),
  mounted() {
    this.getComics();
  },
  methods: {
    /**
     * get comics from https://xkcd.com/ API
     */
    async getComics() {
      const res = await comicServices.getComic();
      this.comic = res.data;
    }
  }
});
</script>

<style scoped></style>
