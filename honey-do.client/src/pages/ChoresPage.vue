<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-secondary text-tertiary t-shadow p-2">HONEY-DO</h1>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-around align-items-center">
        <h2>Chores List</h2>
        <i
          class="mdi mdi-plus"
          title="Add Chore"
          data-bs-toggle="modal"
          data-bs-target="#new-chore"
        >
          Add Chore</i
        >
        <button @click="resetChores" class="btn btn-primary">
          Reset Chores
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12" v-for="m in members" :key="m.id">
        <MemberChores :member="m" />
      </div>
      <div class="col-12"></div>
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
    }
  }
}
</script>


<style lang="scss" scoped>
</style>