<template>
    <div class="right-sidebar">
      <div class="right-sidebar-row">
        <div class="right-sidebar-row__item">
          <h1 class="app__title">
            Accounts
          </h1>
        </div>
        <div class="right-sidebar-row__item">
          <button class="btn">Add account <span>+</span></button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'rightSideBar',
};
</script>

<style scoped lang="scss">
  .right-sidebar {
    padding: 15px;
    width: 60%;
    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
