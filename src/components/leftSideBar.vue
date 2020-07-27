<template>
  <div class="left-sidebar">
    <div class="left-sidebar__logo">
      <span class="left-sidebar__logo-text">
        <img src="../assets/images/logo.png" alt=""> udgeterbium</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leftSideBar',
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .left-sidebar {
    width: 40%;
    background: $color-black;
    height: 100vh;
    color: $color-white;
    padding: 20px;
    justify-content: center;
    display: flex;
    flex-direction: row;

    &__logo {

      &-text {
        display: inline-block;
        font-size: 30px;
      }
    }
  }
</style>
