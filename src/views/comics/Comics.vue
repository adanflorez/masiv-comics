<template>
  <div class="my-6">
    <Comic :comic="current" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import Comic from '@/components/comic/Comic.vue';
// services
import comicServices from '@/http/services';
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  components: { Comic },
  computed: {
    /**
     * Returns a number between 1 and 2547 (comic quantity)
     */
    getRandomNumber(): number {
      return Math.floor(Math.random() * 2547 + 1);
    },
    ...mapState('comic', ['current'])
  },
  mounted() {
    this.getComics();
  },
  methods: {
    /**
     * get comics from https://xkcd.com/ API
     */
    async getComics() {
      const res = await comicServices.getComic(this.getRandomNumber);
      this.setCurrentComic(res.data);
    },
    /**
     * comic actions
     */
    ...mapActions('comic', ['setCurrentComic'])
  }
});
</script>

<style scoped></style>
