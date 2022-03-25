<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Login />
        <button
          class="btn btn-outline-secondary fw-bold"
          data-bs-target="#new-group"
          data-bs-toggle="modal"
        >
          New Group
        </button>
        <div class="text-center">
          <h4>My Groups</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { accountService } from "../services/AccountService"
export default {
  name: 'Account',
  setup() {
    watchEffect(async () => {
      // await accountService.getMyGroups()
    })
    return {
      account: computed(() => AppState.account),
      groups: computed(() => AppState.groups)


    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
