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
      </div>
    </div>
    <div class="row">
      <h6 class="col-12">Members Name</h6>
      <div class="col-12">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            name="Chore Name"
            id=""
            value="checkedValue"
            checked
            @click="markComplete"
          />
          <label class="form-check-label" for="">Chore Name</label>
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
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { onMounted } from "@vue/runtime-core"
import { groupsService } from "../services/GroupsService"
import { choresService } from "../services/ChoresService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        if (!AppState.activeGroup.id) {
          await groupsService.getGroup(route.params.id)
        }
        await choresService.getChores(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })

    return {
      async markComplete(choreId) {
        try {
          await choresService.markComplete(choreId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
</style>