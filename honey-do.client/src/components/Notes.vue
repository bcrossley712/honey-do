<template>
  <span v-touch:swipe.right="deleteNotes" v-touch-class="'active'">
    <div v-if="note.creatorId == account.id">
      <div class="row p-1">
        <div class="col-2 p-0">
          <img
            :src="note.creator?.picture"
            alt=""
            class="img-fluid img-ex-small rounded-circle"
          />
        </div>
        <div
          class="
            col-10
            rounded
            text-start
            elevation-2
            d-flex
            justify-content-between
            bg-white
          "
        >
          <div>
            <i>{{ note.creator?.name }}</i>
            <p>
              {{ note.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="row p-3">
        <div
          class="
            col-10
            rounded
            text-start
            elevation-2
            d-flex
            justify-content-between
            bg-azureblue
          "
        >
          <div>
            <i>{{ note.creator?.name }}</i>
            <p>
              {{ note.body }}
            </p>
          </div>
        </div>
        <div class="col-2 d-flex justify-content-end p-0">
          <img
            :src="note.creator?.picture"
            alt=""
            class="img-fluid img-ex-small rounded-circle"
          />
        </div>
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
  object-fit: cover;
}

.col-9 {
  transition: all 0.4s ease;
}

span.active div .col-9 {
  background: red;
  transform: translateX(3em);
}
.img-ex-small {
  height: 40px;
  width: 40px;
  object-fit: cover;
}
.bg-azureblue {
  background-color: azure;
}
</style>