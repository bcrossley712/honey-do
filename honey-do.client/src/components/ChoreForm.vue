<template>
  <form @submit.prevent="createChore" class="mb-3">
    <select
      v-model="editable.assignedTo"
      class="form-select mb-2"
      default=""
      name="assignedTo"
      id="assignedTo"
    >
      <option v-for="m in members" :key="m.id" :value="m.id">
        <p>{{ m.name }}</p>
      </option>
    </select>
    <div class="d-flex">
      <input
        v-model="editable.body"
        type="text"
        class="form-control"
        name=""
        id=""
        aria-describedby="helpId"
        placeholder="Add Chore here"
      />
      <button
        class="btn-rounded-end bg-success mdi mdi-check"
        title="Add Chore"
      ></button>
    </div>
  </form>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { choresService } from "../services/ChoresService"
import { Modal } from "bootstrap"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
export default {
  setup() {
    const editable = ref({})
    const route = useRoute()
    return {
      editable,
      members: computed(() => AppState.members),
      async createChore() {
        try {
          editable.value.groupId = route.params.id
          await choresService.createChore(editable.value)
          Modal.getOrCreateInstance(document.getElementById('new-chore'))
          editable.value.body = ''
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

    }
  }
}
</script>


<style lang="scss" scoped>
</style>