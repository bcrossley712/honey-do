<template>
  <form class="mb-3 d-flex flex-column" @submit.prevent="createGroup">
    <input
      v-model="editable.name"
      type="text"
      class="form-control"
      name=""
      id=""
      aria-describedby="helpId"
      placeholder="Name your Group!"
      required
    />
    <button
      class="btn btn-success mt-2 align-self-end elevation-2"
      title="Create Group"
    >
      Create Group
    </button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { useRouter } from "vue-router"
import { groupsService } from "../services/GroupsService"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"
export default {
  setup() {
    const router = useRouter()
    const editable = ref({})
    return {
      editable,
      async createGroup() {
        try {
          let newGroup = await groupsService.createGroup(editable.value)
          Modal.getOrCreateInstance(document.getElementById("new-group")).hide();
          router.push({ name: 'Home', params: { id: newGroup.id } })
          AppState.activeGroup = newGroup
          editable.value = {}
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