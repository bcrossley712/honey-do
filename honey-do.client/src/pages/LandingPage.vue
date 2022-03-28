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
        <div class="text-center">
          <h5>Search Groups</h5>
          <form
            class="mb-3 d-flex align-items-center"
            @submit.prevent="groupSearch"
          >
            <input
              type="text"
              class="form-control"
              name="group-search"
              id="group-search"
              aria-describedby="group search"
              placeholder="Group Name..."
              v-model="editable.name"
              required
            />
            <button class="btn btn-secondary">
              <i class="mdi mdi-magnify" title="Search Group"></i>
            </button>
          </form>
          <div>
            <ul>
              <li
                @click="setGroup"
                class="selectable"
                v-for="g in searchResults"
                :key="g.id"
                data-bs-target="#join-group"
                data-bs-toggle="modal"
              >
                {{ g.name }} | {{ g.creatorName }}
              </li>
            </ul>
          </div>
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
import { onMounted, watchEffect } from "@vue/runtime-core"
import { accountService } from "../services/AccountService"
import { groupsService } from "../services/GroupsService"
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const editable = ref({})
    watchEffect(async () => {
      try {
        if (AppState.account.name) {

          await accountService.getMyGroups()
        }


      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }

    })
    return {
      editable,
      groups: computed(() => AppState.groups),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      searchResults: computed(() => AppState.searchResults),
      goTo(group) {
        AppState.activeGroup = group
        router.push({ name: 'Home', params: { id: group.id } })
      },
      async groupSearch() {
        try {
          await groupsService.groupSearch(editable.value)
          editable.value = {}
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>