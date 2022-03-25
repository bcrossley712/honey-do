<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-secondary p-2">HONEY-DO</h1>
    </div>
    <div class="row text-center">
      <div class="col-12 p-2">
        <h4>My Group Members</h4>
      </div>
      <i class="mdi mdi-plus selectable" title="Add Member">Add Member</i>
      <div class="col-12 bg-secondary p-2">
        <div><img src="" alt="" /></div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-12 p-2">
        <h4>Group Notes</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { membersService } from '../services/MembersService'
import { groupsService } from '../services/GroupsService'
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
export default {
  name: 'Home',
  setup() {
    const route = useRoute()
    watchEffect(async () => {
      try {
        if (route.params.id) {
          await groupsService.getGroup(route.params.id)

        }
        // await membersService.getGroupMembers()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      members: computed(() => AppState.members),
      activeGroup: computed(() => AppState.activeGroup)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
