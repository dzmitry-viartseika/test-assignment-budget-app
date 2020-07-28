<template>
  <div id="app">
    <leftSideBar/>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>

import leftSideBar from './components/leftSideBar.vue';

export default {
  name: 'Home',
  components: {
    leftSideBar,
  },
};
</script>

<style lang="scss">
  @import "assets/scss/core";
</style>
