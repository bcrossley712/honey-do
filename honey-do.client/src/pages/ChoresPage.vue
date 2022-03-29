<template>
  <div class="container-fluid d-flex flex-column" style="min-height: 94vh">
    <div class="row">
      <h1 class="bg-secondary text-tertiary t-shadow p-2">HONEY-DO</h1>
    </div>

    <div class="row px-2">
      <div class="col-12 d-flex flex-column">
        <h2 class="align-self-center">Chores List</h2>
      </div>
    </div>
    <div class="row px-2 flex-grow-1 overflow">
      <div>
        <div class="col-12" v-for="m in members" :key="m.id">
          <MemberChores :member="m" />
        </div>
      </div>
    </div>
    <div class="row px-2">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h6 class="bg-tertiary rounded px-1">
            <button
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#new-chore"
            >
              Add Chore<i class="mdi mdi-plus" title="Add Chore"> </i>
            </button>
          </h6>
          <h6 class="bg-tertiary rounded px-1">
            <button
              v-if="account.id == group.creatorId"
              @click="resetChores"
              class="btn"
            >
              <i class="mdi mdi-cancel"></i> Reset Chores
            </button>
          </h6>
        </div>
      </div>
    </div>
  </div>
  <Modal id="new-chore">
    <template #title>New Chore</template>
    <template #body><ChoreForm /></template>
  </Modal>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { onMounted, watchEffect } from "@vue/runtime-core"
import { groupsService } from "../services/GroupsService"
import { choresService } from "../services/ChoresService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import { membersService } from "../services/MembersService"
export default {
  setup() {
    const route = useRoute()
    watchEffect(async () => {
      try {
        if (route.name == 'Chores') {
          await groupsService.getGroup(route.params.id)
          await membersService.getGroupMembers(route.params.id)
          await choresService.getChores(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })

    return {
      async resetChores() {
        try {
          await choresService.resetChores()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      chores: computed(() => AppState.chores),
      members: computed(() => AppState.members),
      account: computed(() => AppState.account),
      group: computed(() => AppState.activeGroup)
    }
  }
}
</script>


<style lang="scss" scoped>
.overflow {
  max-height: 76vh;
  overflow: scroll;
}
</style>