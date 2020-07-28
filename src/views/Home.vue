<template>
  <div class="app">
    <rightSideBar/>
  </div>
</template>

<script>

import rightSideBar from '../components/rightSideBar.vue';

export default {
  name: 'Home',
  components: {
    rightSideBar,
  },
};
</script>

<style lang="scss" scoped>
  .app {
    display: flex;
  }
</style>
