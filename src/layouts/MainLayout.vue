<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Header from '@/components/common/header/Header.vue';
// import Footer from '@/components/common/footer/Footer.vue';

export default Vue.extend({
  components: {
    Header
    // Footer
  }
});
</script>

<style scoped></style>
