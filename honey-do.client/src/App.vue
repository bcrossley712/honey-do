<template>
  <header></header>
  <main>
    <router-view />
    <Navbar />
  </main>
  <footer></footer>
  <Modal id="new-group">
    <template #title>New Group</template>
    <template #body><GroupForm /></template>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
