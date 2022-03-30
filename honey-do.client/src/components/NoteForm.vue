<template>
  <form class="mb-3 d-flex flex-column" @submit.prevent="createNote">
    <input
      v-model="editable.body"
      type="text"
      class="form-control"
      name=""
      id=""
      aria-describedby="helpId"
      placeholder="Tell us..."
    />
    <button class="btn btn-success mt-2 align-self-end" title="Create Note">
      Create Note
    </button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { notesService } from "../services/NotesService"
import { Modal } from "bootstrap"
import { useRoute } from "vue-router"
export default {
  setup() {
    const route = useRoute()
    const editable = ref({})
    return {
      editable,
      async createNote() {
        try {
          editable.value.groupId = route.params.id
          await notesService.createNote(editable.value)
          Modal.getOrCreateInstance(document.getElementById("new-note")).hide();
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