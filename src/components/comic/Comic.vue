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
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
// interfaces
import IComic from '@/interfaces/comic';

export default Vue.extend({
  props: {
    /**
     * Comic object
     */
    comic: {
      required: true,
      type: Object
    } as PropOptions<IComic>
  },
  computed: {
    /**
     * returns a generic image in case of API error
     */
    placeholder(): string {
      return require('@/assets/img/placeholder.png');
    }
  }
});
</script>

<style scoped></style>
