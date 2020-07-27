<template>
  <div class="app">
    <leftSideBar/>
    <rightSideBar/>
  </div>
</template>

<script>

import leftSideBar from '../components/leftSideBar.vue';
import rightSideBar from '../components/rightSideBar.vue';

export default {
  name: 'Home',
  components: {
    leftSideBar,
    rightSideBar,
  },
};
</script>

<style lang="scss" scoped>
  .app {
    display: flex;
  }
</style>
