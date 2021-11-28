<template>
  <div class="flex justify-center">
    <div>
      <h1 class="text-3xl text-center text-default-secondary mb-4">
        {{ comic.title }}
      </h1>
      <div
        v-lazy-container="{
          selector: 'img',
          error: placeholder
        }"
      >
        <img :data-src="comic.img" :alt="comic.alt" />
      </div>
      <div class="flex justify-center mt-8">
        <StarRating
          v-model="rating"
          :show-rating="false"
          :border-width="4"
          border-color="#d8d8d8"
          :rounded-corners="true"
          :star-points="[
            23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46, 19,
            31, 17
          ]"
          @rating-selected="setRating"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
// interfaces
import IComic from '@/interfaces/comic';
// components
import StarRating from 'vue-star-rating';

export default Vue.extend({
  components: {
    StarRating
  },
  props: {
    /**
     * Comic object
     */
    comic: {
      required: true,
      type: Object
    } as PropOptions<IComic>
  },
  data: () => ({
    rating: 0
  }),
  computed: {
    /**
     * returns a generic image in case of API error
     */
    placeholder(): string {
      return require('@/assets/img/placeholder.png');
    }
  },
  methods: {
    /**
     * Set rating of current comic
     */
    setRating(rating: number) {
      console.log('id', this.comic.num, rating);
    }
  }
});
</script>

<style scoped></style>
