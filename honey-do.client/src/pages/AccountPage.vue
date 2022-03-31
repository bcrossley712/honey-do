<template>
  <div class="container-fluid" v-if="user.isAuthenticated">
    <LogoBanner />
    <div class="d-flex flex-column" style="min-height: 83vh">
      <div class="row justify-content-around">
        <Login />
      </div>
      <h3 class="text-center">{{ activeGroup.name }}</h3>
      <div class="row d-flex justify-content-center mb-2">
        <div class="text-center">
          <button
            v-if="activeGroup.name && activeGroup.creatorId == account.id"
            class="btn btn-secondary elevation-2"
            data-bs-toggle="modal"
            data-bs-target="#group-options"
          >
            <h6 class="mb-0">Group options</h6>
          </button>
        </div>
      </div>

      <div class="row flex-grow-1">
        <div>
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
              <button
                class="btn btn-secondary elevation-2"
                title="Search Groups"
              >
                <i class="mdi mdi-magnify" title="Search Group"></i>
              </button>
            </form>
          </div>
          <div class="col-12">
            <ul v-for="g in searchResults" :key="g.id">
              <li
                @click="setGroup(g)"
                class="selectable"
                data-bs-target="#join-group"
                data-bs-toggle="modal"
              >
                {{ g.name }} | {{ g.creatorName }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row px-2 d-flex flex-column">
        <div class="col-12 d-flex justify-content-between">
          <button
            title="New Group"
            class="btn btn-secondary my-3 elevation-2"
            data-bs-target="#new-group"
            data-bs-toggle="modal"
          >
            <h6 class="m-0">New Group</h6>
          </button>
          <div class="dropup">
            <button
              title="My Groups"
              class="
                btn btn-secondary
                dropdown-toggle
                my-3
                elevation-2
                d-flex
                align-items-center
              "
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <h6 class="mb-0">My Groups</h6>
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
      </div>
    </div>
  </div>
  <div class="container-fluid bg-photo" v-else>
    <LogoBanner />
    <div
      class="row d-flex flex-column rounded bg-secondary text-center p-3 m-3"
    >
      <div>Please Register or Login to enjoy the features of Honey-Do</div>
    </div>
    <Modal id="group-options">
      <template #title>Delete Group</template>
      <template #body><GroupOptionsForm /></template>
    </Modal>
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
    return {
      editable,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      groups: computed(() => AppState.groups),
      searchResults: computed(() => AppState.searchResults),
      activeGroup: computed(() => AppState.activeGroup),
      members: computed(() => AppState.members),
      acceptedMembers: computed(() => AppState.members.filter(m => m.status == 'accepted')),
      declinedMembers: computed(() => AppState.members.filter(m => m.status == 'declined')),
      async goTo(group) {
        AppState.activeGroup = group
        router.push({ name: 'Home', params: { id: group.id } })
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
