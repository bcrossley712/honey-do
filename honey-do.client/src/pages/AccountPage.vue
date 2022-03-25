<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Login />
        <button
          class="btn btn-outline-secondary"
          data-bs-target="#new-group"
          data-bs-toggle="modal"
        >
          New Group
        </button>
        <div>My Groups</div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)

    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
