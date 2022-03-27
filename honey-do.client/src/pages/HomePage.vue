<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-secondary p-2">HONEY-DO</h1>
    </div>
    <div class="row p-3">
      <div class="col-12">My Group Members</div>
      <div class="col-12 p-2 bg-secondary d-flex rounded shadow">
        <img
          v-for="m in members"
          :key="m.id"
          :src="m.picture"
          alt=""
          class="img-small rounded-circle m-1"
          :title="m.name"
        />
      </div>
    </div>

    <i class="mdi mdi-plus selectable" title="Add Member">Add Member</i>

    <div class="row text-center">
      <div class="col-12">
        <h4>
          Group Notes
          <i
            class="mdi mdi-plus"
            title="Add note"
            data-bs-toggle="modal"
            data-bs-target="#new-note"
          ></i>
        </h4>
        <div v-for="n in notes" :key="n.id">
          <Notes :note="n" />
        </div>
      </div>
    </div>
  </div>
  <Modal id="new-note">
    <template #title>New Note</template>
    <template #body><NoteForm /></template>
  </Modal>
</template>

<script>
import { computed, onMounted, watchEffect } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { membersService } from '../services/MembersService'
import { groupsService } from '../services/GroupsService'
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import { notesService } from "../services/NotesService"
export default {
  name: 'Home',
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        if (!AppState.activeGroup.id) {
          await groupsService.getGroup(route.params.id)
        }
        if (AppState.members.length == 0) {
          await membersService.getGroupMembers(route.params.id)
        }
        if (AppState.notes.length == 0) {
          await notesService.getNotes(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }

    })
    return {
      members: computed(() => AppState.members),
      activeGroup: computed(() => AppState.activeGroup),
      notes: computed(() => AppState.notes)
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
.img-small {
  height: 55px;
  width: 55px;
}
</style>
