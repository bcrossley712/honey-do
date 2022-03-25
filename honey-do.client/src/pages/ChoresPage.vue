<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">Chores Page</div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { onMounted } from "@vue/runtime-core"
import { groupsService } from "../services/GroupsService"
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
        // await membersService.getGroupMembers()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
</style>