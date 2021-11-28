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
      try {
        this.showLoading();
        const res = await comicServices.getComic(this.$route.params.id);
        this.setCurrentComic(res.data);
        this.hideLoading();
      } catch (error) {
        this.hideLoading();
        console.error(error);
      }
    },
    /**
     * comic actions
     */
    ...mapActions({
      setCurrentComic: 'comic/setCurrentComic',
      showLoading: 'loading/showLoading',
      hideLoading: 'loading/hideLoading'
    })
  }
});
</script>

<style scoped></style>
