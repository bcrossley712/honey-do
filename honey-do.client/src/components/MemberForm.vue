<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 my-1">
        <h6>Name: {{ member?.name }}</h6>
        <h6>Group status: {{ member.status }}</h6>
      </div>
      <div class="col-12 my-1 d-flex justify-content-end">
        <button @click="changeStatus" class="btn btn-secondary">
          Boot Member?
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { membersService } from "../services/MembersService"
import { Modal } from "bootstrap"
export default {

  props: {
    member: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      async changeStatus() {
        try {
          const body = {
            status: 'declined',
            groupId: props.member.groupId
          }
          await membersService.bootMember(props.member.memberId, body)
          Pop.toast('Member booted', 'success')
          // FIXME
          // Modal.getOrCreateInstance(document.getElementById('m' + `${props.member.id}`)).hide()

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