<template>
    <div class="right-sidebar">
      <div class="right-sidebar-row">
        <div class="right-sidebar-row__item">
          <h1 class="app__title">
            Accounts
          </h1>
        </div>
        <div class="right-sidebar-row__item">
          <button class="btn"
                  @click="proceedToRoute('/create')"
          >Add account <span>+</span></button>
        </div>
      </div>
      <div class="right-sidebar-row">
        <table class="right-sidebar-row__table">
          <thead>
          <tr>
            <td>
              Account name
            </td>
            <td>
              Balance
            </td>
            <td>

            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'rightSideBar',
  methods: {
    proceedToRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped lang="scss">
  @import "src/assets/scss/variables";
  .right-sidebar {
    padding: 15px;
    width: 60%;
    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__table {
        border: 1px solid $color-black;
      }
    }
  }
</style>
