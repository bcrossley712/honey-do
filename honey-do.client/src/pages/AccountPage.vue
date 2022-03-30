<template>
  <div class="container-fluid">
    <LogoBanner />
    <div class="row justify-content-center">
      <div class="col-4">
        <Login />
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-around">
        <button
          title="New Group"
          class="btn btn-secondary my-3"
          data-bs-target="#new-group"
          data-bs-toggle="modal"
        >
          <h5 class="m-0">New Group</h5>
        </button>
        <div class="dropdown">
          <button
            title="My Groups"
            class="btn btn-secondary my-3"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <h5>My Groups</h5>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li v-for="g in groups" :key="g.id">
              <div
                class="dropdown-item selectable"
                @click="goTo(g)"
                title="Go To Group"
              >
                {{ g.name }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-12 text-center">
            <h5>Search Groups</h5>
            <form
              class="mb-3 d-flex align-items-center"
              @submit.prevent="groupSearch"
            >
              <input
                type="text"
                class="form-control me-2"
                name="group-search"
                id="group-search"
                aria-describedby="group search"
                placeholder="Group Name..."
                v-model="editable.search"
                required
              />
              <button class="btn btn-secondary" title="Search Groups">
                <i class="mdi mdi-magnify" title="Search Group"></i>
              </button>
            </form>
          </div>
          <div class="col-12">
            <ul>
              <li
                @click="setGroup(g)"
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
      <div class="col-12">
        <h5 class="text-center">Membership options</h5>
        <ul v-for="m in members" :key="m.id">
          <li v-if="m.id != account.id">
            {{ m.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import { accountService } from "../services/AccountService"
import { useRoute, useRouter } from "vue-router"
import { groupsService } from "../services/GroupsService"
import { membersService } from "../services/MembersService"
export default {
  name: 'Account',
  setup() {
    const editable = ref({})
    const route = useRoute()
    const router = useRouter()
    watchEffect(async () => {
      if (route.name == 'Account') {
        await accountService.getMyGroups()

      }
      if (AppState.activeGroup.id) {
      }
    })
    return {
      editable,
      account: computed(() => AppState.account),
      groups: computed(() => AppState.groups),
      searchResults: computed(() => AppState.searchResults),
      activeGroup: computed(() => AppState.activeGroup),
      members: computed(() => AppState.members),
      async goTo(group) {
        AppState.activeGroup = group
        // router.push({ name: 'Home', params: { id: group.id } })
        await membersService.getGroupMembers(group.id)
      },
      setGroup(group) {
        AppState.grouptoJoin = group
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

<style scoped>
img {
  max-width: 100px;
}
</style>
