<template>
  <div class="row p-3">
    <div class="col-3">
      <img
        :src="note.creator?.picture"
        alt=""
        class="img-fluid img-small rounded-circle"
      />
    </div>
    <div
      class="
        col-9
        rounded
        text-start
        elevation-2
        d-flex
        justify-content-between
      "
    >
      <div>
        <span>{{ new Date(note.createdAt).toLocaleString() }}</span>
        <p>
          {{ note.body }}
        </p>
      </div>
      <i
        class="mdi mdi-delete-forever selectable"
        title="delete note"
        @click="deleteNotes(note.id)"
      ></i>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { notesService } from "../services/NotesService"
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup() {

    return {
      notes: computed(() => AppState.notes),
      async deleteNotes(noteId) {
        try {
          if (await Pop.confirm('Are You Sure You Want To Delete?'))
            await notesService.deleteNotes(noteId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
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


<style lang="scss" scoped>
.img-small {
  height: 55px;
  width: 55px;
}
</style>