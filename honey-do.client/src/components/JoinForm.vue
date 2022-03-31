<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h6 class="p-1">Group Name:</h6>
        <h6 class="p-1">{{ groupToJoin.name }}</h6>
      </div>
      <div class="col-12">
        <h6 class="p-1">Group Creator:</h6>
        <div class="d-flex align-items-center p-1">
          <img :src="groupToJoin.picture" alt="" class="img-small px-1" />
          <h6>{{ groupToJoin.creatorName }}</h6>
        </div>
      </div>
      <div class="col-6 offset-6">
        <button @click="createMember" class="btn btn-primary">
          Request to join?
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
import { membersService } from "../services/MembersService"
import { Modal } from "bootstrap"
export default {
  setup() {
    return {
      groupToJoin: computed(() => AppState.grouptoJoin),
      async createMember() {
        const request = {
          groupId: AppState.grouptoJoin.id,
          accountId: AppState.account.id
        }
        try {
          await membersService.createMember(request)
          Pop.toast('Your request has been sent', 'success')
          AppState.searchResults = []
          Modal.getOrCreateInstance(document.getElementById('join-group')).hide()
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
.img-small {
  height: 55px;
  width: 55px;
}
</style>