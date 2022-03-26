<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="
          col-12
          d-flex
          flex-column
          justify-contents-center
          align-items-center
        "
        v-if="user.isAuthenticated"
      >
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
      <div
        v-else
        class="col-10 offset-1 rounded shadow bg-secondary text-center p-3 my-3"
      >
        Sign in to enjoy the features of our app.
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { useRoute, useRouter } from "vue-router"
import { onMounted } from "@vue/runtime-core"
import { accountService } from "../services/AccountService"
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        await accountService.getMyGroups()

      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }

    })
    return {
      groups: computed(() => AppState.groups),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      goTo(group) {
        AppState.activeGroup = group
        router.push({ name: 'Home', params: { id: group.id } })
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>