<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 d-flex flex-column align-items-center p-3">
        <h1>{{ activeGroup.name }}</h1>
        <button class="btn btn-danger my-3" @click="deleteGroup">
          Delete group?
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { groupsService } from "../services/GroupsService"
export default {
  setup() {
    return {
      activeGroup: computed(() => AppState.activeGroup),
      async deleteGroup() {
        if (await Pop.confirm()) {
          await groupsService.deleteGroup(AppState.activeGroup.id)
          Pop.toast('Group deleted', 'success')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>