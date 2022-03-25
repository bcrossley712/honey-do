<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3 nav-sticky">
    <div v-if="!user.isAuthenticated" class="d-flex justify-content-end w-100">
      <Login />
    </div>
    <div v-else class="d-flex justify-content-between w-100">
      <router-link
        class="navbar-brand p-0 text-center m-0 text-dark"
        :to="{ name: 'Chores' }"
      >
        <i class="mdi mdi-format-list-bulleted fs-4"></i>
      </router-link>
      <router-link
        class="navbar-brand p-0 text-center m-0 text-dark"
        :to="{ name: 'Items' }"
      >
        <i class="mdi mdi-cart-outline fs-4"></i>
      </router-link>
      <router-link
        class="navbar-brand p-0 text-center m-0 text-dark"
        :to="{ name: 'Home' }"
      >
        <i class="mdi mdi-home"></i>
      </router-link>
      <router-link
        class="navbar-brand p-0 text-center m-0 text-dark"
        :to="{ name: 'Recipes' }"
      >
        <i class="mdi mdi-noodles fs-4"></i>
      </router-link>
      <router-link
        class="navbar-brand p-0 text-center m-0 text-dark"
        :to="{ name: 'Account' }"
      >
        <i class="mdi mdi-account fs-4"></i>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      user: computed(() => AppState.user)
    };
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.nav-sticky {
  position: sticky;
  top: 0;
  z-index: 1020;
}
@media (max-width: 576px) {
  .nav-sticky {
    position: sticky;
    top: 100vh;
    z-index: 1020;
  }
}
</style>
