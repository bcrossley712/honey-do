<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <Login />
      </div>
      <div class="col-12 d-flex justify-content-around">
        <button
          class="btn btn-secondary my-3"
          data-bs-target="#new-group"
          data-bs-toggle="modal"
        >
          <h5 class="m-0">New Group</h5>
        </button>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle my-3"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <h5>My Groups</h5>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li v-for="g in groups" :key="g.id">
              <button class="dropdown-item" type="button" @click="goTo(g)">
                {{ g.name }}
              </button>
            </li>
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
        router.push({ name: 'Home', params: { id: group.id } })
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
