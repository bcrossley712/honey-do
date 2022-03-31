<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">{{ activeGroup.name }}</h1>
        <h6 v-if="acceptedMembers.length > 1">Accepted members:</h6>
        <ul v-for="m in members" :key="m.id">
          <li v-if="m.id != account.id && m.status == 'accepted'">
            <span>
              {{ m.name }}
            </span>
            <br />
            <span class="text-end">
              <button
                @click="changeStatus(m.memberId, 'declined')"
                class="btn btn-danger"
              >
                Boot Member?
              </button>
            </span>
          </li>
        </ul>
        <h6 v-if="declinedMembers.length > 0">Declined members:</h6>
        <ul v-for="m in members" :key="m.id">
          <li v-if="m.id != account.id && m.status == 'declined'">
            <span> {{ m.name }} </span><br />
            <span>
              <button
                @click="changeStatus(m.memberId, 'accepted')"
                class="btn btn-success"
              >
                Accept Member?
              </button>
            </span>
          </li>
        </ul>
      </div>
      <div class="col-12 d-flex flex-column align-items-center p-3">
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
import { Modal } from "bootstrap"
import { membersService } from "../services/MembersService"
export default {
  setup() {
    return {
      members: computed(() => AppState.members),
      account: computed(() => AppState.account),
      activeGroup: computed(() => AppState.activeGroup),
      acceptedMembers: computed(() => AppState.members.filter(m => m.status == 'accepted')),
      declinedMembers: computed(() => AppState.members.filter(m => m.status == 'declined')),
      async deleteGroup() {
        if (await Pop.confirm()) {
          await groupsService.deleteGroup(AppState.activeGroup.id)
          Modal.getOrCreateInstance(document.getElementById('group-options')).hide()
          Pop.toast('Group deleted', 'success')
        }
      },
      async changeStatus(memberId, newStatus) {
        try {
          const body = {
            status: newStatus,
            groupId: AppState.activeGroup.id
          }
          if (newStatus == 'declined') {
            await membersService.declineMember(memberId, body)
            Pop.toast('Member booted', 'success')
          }
          if (newStatus == 'accepted') {
            await membersService.acceptMember(memberId, body)
            Pop.toast('Member accepted', 'success')
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


<style lang="scss" scoped>
</style>