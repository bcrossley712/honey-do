<template>
  <header>
    <Navbar />
  </header>
  <main class="mb-5">
    <router-view />
  </main>
  <Modal id="new-group">
    <template #title>New Group</template>
    <template #body><GroupForm /></template>
  </Modal>
  <Modal id="edit-account">
    <template #title> Edit Account</template>
    <template #body> <AccountForm /></template>
  </Modal>
  <Modal id="join-group">
    <template #title>Request to join group</template>
    <template #body><JoinForm /></template>
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
