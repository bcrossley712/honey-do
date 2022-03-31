<template>
  <span v-touch:swipe.right="deleteNotes" v-touch-class="'active'">
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
        <!-- <i
          v-if="note.creatorId == account.id || group.creatorId == account.id"
          class="mdi mdi-delete-forever selectable"
          title="delete note"
          @click="deleteNotes(note.id)"
        ></i> -->
      </div>
    </div>
  </span>
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
  setup(props) {

    return {
      notes: computed(() => AppState.notes),
      account: computed(() => AppState.account),
      group: computed(() => AppState.activeGroup),
      async deleteNotes() {
        try {
          let noteId = props.note.id
          if (await Pop.confirm()) {
            await notesService.deleteNotes(noteId)
            Pop.toast('Note Deleted', 'success', 'top-end', 1000)
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      swipeRight() {
        logger.log('swiping right')
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

.col-9 {
  transition: all 0.4s ease;
}

span.active div .col-9 {
  background: red;
  transform: translateX(3em);
}
</style>