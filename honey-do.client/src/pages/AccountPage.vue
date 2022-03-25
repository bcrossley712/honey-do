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
        <div>
          <h5>My Groups</h5>
          <ul v-for="g in groups" :key="g.name">
            <li @click="goTo(g)">{{ g.group.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { accountService } from "../services/AccountService"
import { useRouter } from "vue-router"
export default {
  name: 'Account',
  setup() {
    const router = useRouter()
    watchEffect(async () => {
      if (AppState.groups.length == 0) {
        await accountService.getMyGroups()
      }
    })
    return {
      account: computed(() => AppState.account),
      groups: computed(() => AppState.groups),
      goTo(group) {
        AppState.activeGroup = group
        router.push({ name: 'Home', params: { id: group.groupId } })
      }

    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
