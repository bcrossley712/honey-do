<template>
  <div class="mb-3">
    <label for="" class="form-label"></label>
    <input
      v-model="editable.body"
      type="text"
      class="form-control"
      name=""
      id=""
      aria-describedby="helpId"
      placeholder="Add Chore here"
    />
  </div>
  <div class="mb-3 d-flex">
    <select
      v-model="editable.assignedTo"
      class="form-select me-2"
      default=""
      name="assignedTo"
      id="assignedTo"
      required
    >
      <option v-for="m in members" :key="m.id" :value="m.id">
        <p>{{ m.name }}</p>
      </option>
    </select>
    <button
      class="btn btn-success mdi mdi-check"
      title="Add Chore"
      @click="createChore"
    ></button>
  </div>
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
          Modal.getOrCreateInstance(document.getElementById('new-chore')).hide()
          editable.value = {}
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