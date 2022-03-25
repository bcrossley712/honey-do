<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12" v-if="user.isAuthenticated">
        <button
          class="btn btn-outline-secondary"
          data-bs-target="#new-group"
          data-bs-toggle="modal"
        >
          New Group
        </button>
        <div>My Groups</div>
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
import { useRoute } from "vue-router"
import { onMounted } from "@vue/runtime-core"
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        if (route.params.id) {
        }

        // await membersService.getGroupMembers()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }

    })
    return {

      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>