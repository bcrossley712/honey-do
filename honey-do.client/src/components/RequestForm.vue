<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h6>{{ memberRequest.name }}</h6>
        <div class="d-flex align-items-center p-1">
          <img :src="memberRequest.picture" alt="" class="img-small px-1" />
        </div>
      </div>
      <div class="col-6">
        <button @click="acceptMember" class="btn btn-success">Accept</button>
      </div>
      <div class="col-6">
        <button @click="declineMember" class="btn btn-danger">Decline</button>
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
      memberRequest: computed(() => AppState.memberRequest),
      async acceptMember() {
        try {
          const body = {
            status: 'accepted'
          }
          await membersService.acceptMember(AppState.memberRequest.memberId, body)
          Pop.toast('Member has been accepted', 'success')
          Modal.getOrCreateInstance(document.getElementById('group-request')).hide()
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async declineMember() {
        try {
          const body = {
            status: 'declined'
          }
          await membersService.declineMember(AppState.memberRequest.memberId, body)
          Pop.toast('Member has been declined', 'error')
          Modal.getOrCreateInstance(document.getElementById('group-request')).hide()
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