<template>
  <div class="container-fluid">
    <LogoBanner />
    <div v-if="user.isAuthenticated">
      <div class="row justify-content-center">
        <div class="col-4 d-flex justify-content-center">
          <Login />
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-around">
          <button
            title="New Group"
            class="btn btn-secondary my-3 elevation-2"
            data-bs-target="#new-group"
            data-bs-toggle="modal"
          >
            <h5 class="m-0">New Group</h5>
          </button>
          <div class="dropdown">
            <button
              title="My Groups"
              class="btn btn-secondary my-3 elevation-2"
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
                <button
                  class="btn btn-secondary elevation-2"
                  title="Search Groups"
                >
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
        <div class="col-12" v-if="activeGroup.creatorId == account.id">
          <h3 class="text-center">{{ activeGroup.name }}</h3>
          <h6 class="">Membership options:</h6>
          <h6 v-if="acceptedMembers.length > 1">Accepted members</h6>
          <ul v-for="m in members" :key="m.id">
            <li
              v-if="m.id != account.id && m.status == 'accepted'"
              data-bs-toggle="modal"
              :data-bs-target="'#m' + `${m.id}`"
            >
              {{ m.name }}
            </li>
            <Modal :id="'m' + `${m.id}`">
              <template #title>Member Options</template>
              <template #body><MemberForm :member="m" /></template>
            </Modal>
          </ul>
          <h6 v-if="declinedMembers.length > 0">Declined members</h6>
          <ul v-for="m in members" :key="m.id">
            <li
              v-if="m.id != account.id && m.status == 'declined'"
              data-bs-toggle="modal"
              :data-bs-target="'#m' + `${m.id}`"
            >
              {{ m.name }}
            </li>
            <Modal :id="'m' + `${m.id}`">
              <template #title>Member Options</template>
              <template #body><MemberForm :member="m" /></template>
            </Modal>
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
