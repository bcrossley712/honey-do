<template>
  <div class="container-fluid">
    <LogoBanner />
    <div class="row">
      <h2>{{ activeGroup.name }}</h2>
    </div>
    <div class="row px-3">
      <div class="col-12 mb-1">My Group Members</div>
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
    <div class="row px-3" v-if="groupRequests.length >= 1">
      <div class="col-12">Group Requests</div>
      <div class="col-12 p-2 bg-secondary d-flex rounded shadow">
        <img
          @click="setRequest(r)"
          data-bs-toggle="modal"
          data-bs-target="#group-request"
          v-for="r in groupRequests"
          :key="r.id"
          :src="r.picture"
          alt=""
          class="img-small rounded-circle m-1"
          :title="r.name"
        />
      </div>
    </div>

    <div class="row text-center mt-2">
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
  <Modal id="group-request">
    <template #title>Add Member?</template>
    <template #body><RequestForm /></template>
  </Modal>
  <button
    v-if="activeGroup.creatorId == account.id"
    class="btn btn-secondary"
    @click="deleteAllNotes()"
  >
    Delete All Notes
  </button>
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
    watchEffect(async () => {
      try {
        if (route.name == 'Home') {
          await groupsService.getGroup(route.params.id)
          await membersService.getGroupMembers(route.params.id)
          await membersService.getPendingMembers(route.params.id)
          await notesService.getNotes(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }

    })
    return {
      activeGroup: computed(() => AppState.activeGroup),
      members: computed(() => AppState.members),
      notes: computed(() => AppState.notes),
      groupRequests: computed(() => AppState.groupRequests),
      account: computed(() => AppState.account),
      setRequest(member) {
        AppState.memberRequest = member
      },

      async deleteAllNotes() {
        try {
          if (await Pop.confirm('Are You Sure You Want To Delete All Notes?')) {
            await notesService.deleteAllNotes(AppState.notes)

          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      }
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
