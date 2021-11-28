<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Header from '@/components/common/header/Header.vue';

export default Vue.extend({
  components: {
    Header
  }
});
</script>

<style scoped></style>
