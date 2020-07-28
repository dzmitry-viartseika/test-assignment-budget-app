<template>
  <div class="left-sidebar">
    <div class="left-sidebar__logo"
         @click="proceedToRoute('/')"
    >
      <span class="left-sidebar__logo-text">
        <img src="../assets/images/logo.png" alt=""> udgeterbium</span>
    </div>
    <div class="left-sidebar-menu">
      <div class="left-sidebar-menu__item"
           v-for="item in menuList"
           :key="item.name"
           @click="proceedToRoute(item.route)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leftSideBar',
  data: () => ({
    menuList: [
      {
        id: 1,
        name: 'Accounts',
        route: '/accounts',
      },
      {
        id: 2,
        name: 'Budgets',
        route: '/budgets',
      },
    ],
  }),
  methods: {
    proceedToRoute(route) {
      this.$router.push(route);
    },
  },
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

    &__logo {
      cursor: pointer;

      &-text {
        font-size: 30px;
        display: inline-flex;
        align-items: flex-end;
      }
    }

    &-menu {
      margin-top: 20px;

      &__item {
        font-size: 30px;
        border-bottom: 2px solid $color-green;
        padding-bottom: 15px;
        padding-top: 15px;
        transition: opacity .15s ease-in;
        cursor: pointer;

        &:hover {
          opacity: .8;
        }
      }
    }
  }
</style>
