<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-3 nav-sticky">
    <router-link class="navbar-brand d-flex text-dark" :to="{ name: 'Home' }">
      <i class="mdi mdi-menu"></i>
    </router-link>
    <i class="mdi mdi-format-list-bulleted fs-4"></i>
    <i class="mdi mdi-cart-outline fs-4"></i>
    <i class="mdi mdi-account fs-4"></i>
    <i class="mdi mdi-noodles fs-4"></i>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link
            :to="{ name: 'About' }"
            class="btn text-success lighten-30 selectable text-uppercase"
          >
            About
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
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
