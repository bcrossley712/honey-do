<template>
  <div class="container-fluid d-flex flex-column" style="min-height: 94vh">
    <LogoBanner />
    <div class="row px-2">
      <h1>{{ activeGroup.name }}</h1>
    </div>
    <div class="row px-2">
      <div class="col-12 d-flex flex-column">
        <h5 class="align-self-center">My Group Members</h5>
      </div>
      <div class="col-12 p-2 bg-secondary d-flex rounded shadow">
        <div v-for="m in members" :key="m.id" class="d-flex">
          <img
            v-if="m.status == 'accepted'"
            :src="m.picture"
            alt=""
            class="img-small rounded-circle m-1"
            :title="m.name"
          />
        </div>
      </div>
    </div>
    <div class="row px-2" v-if="groupRequests.length >= 1">
      <div class="col-12 d-flex flex-column">
        <h5 class="align-self-center">Group Requests</h5>
      </div>
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

    <div class="row px-2">
      <div class="col-12 d-flex flex-column">
        <h4 class="align-self-center mt-2">Group Notes</h4>
      </div>
    </div>
    <div class="row px-2 flex-grow-1 overflow">
      <div class="col-12">
        <div v-for="n in notes" :key="n.id">
          <Notes :note="n" />
        </div>
      </div>
    </div>
    <div class="row px-2">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h6 class="bg-tertiary rounded">
            <button
              class="btn elevation-2"
              data-bs-toggle="modal"
              data-bs-target="#new-note"
            >
              Add Note<i class="mdi mdi-plus" title="Add Note"> </i>
            </button>
          </h6>
          <h6 class="bg-tertiary rounded">
            <button
              v-if="activeGroup.creatorId == account.id"
              class="btn elevation-2"
              @click="deleteAllNotes()"
            >
              <i class="mdi mdi-cancel"></i> Delete All Notes
            </button>
          </h6>
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
