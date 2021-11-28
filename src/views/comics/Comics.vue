<template>
  <div class="my-6">
    <Comic :comic="current" />
    <div class="flex justify-center mt-8">
      <Button
        class="mx-2"
        :text="'Anterior'"
        @click.native="nextOrPrevComic(false)"
      />
      <Button class="mx-2" :text="'Aleatorio'" />
      <Button
        class="mx-2"
        :text="'Siguiente'"
        @click.native="nextOrPrevComic(true)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// components
import Comic from '@/components/comic/Comic.vue';
import Button from '@/components/common/ui/button/Button.vue';
// services
import comicServices from '@/http/services';
import { mapActions, mapState } from 'vuex';

export default Vue.extend({
  components: { Comic, Button },
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
        this.$router.push('/error-404');
      }
    },
    /**
     * Next or previous comic page, depends of isNext
     *
     * @param {Boolean} isNext
     */
    nextOrPrevComic(isNext: boolean) {
      const comicId = Number(this.$route.params.id);
      if (isNext) {
        this.$router.push(`/comic/${comicId + 1}`);
      } else {
        console.log('aca fueee');
        this.$router.push(`/comic/${comicId - 1}`);
      }
    },
    /**
     * Store actions
     */
    ...mapActions({
      setCurrentComic: 'comic/setCurrentComic',
      showLoading: 'loading/showLoading',
      hideLoading: 'loading/hideLoading'
    })
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.getComics();
      },
      deep: true
    }
  }
});
</script>

<style scoped></style>
