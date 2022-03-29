<template>
  <div v-if="chores.length > 0">
    <h3>
      <span class="bg-tertiary rounded px-1">
        {{ member.name }}
      </span>
    </h3>
    <div class="form-check" v-for="c in chores" :key="c.id" :value="c.id">
      <input
        type="checkbox"
        class="form-check-input"
        name="Chore Name"
        id=""
        :checked="c.isComplete"
        @click="markComplete(c.id)"
      />
      <div class="d-flex justify-content-between">
        <label
          class="form-check-label ms-2 mb-1"
          for=""
          :style="{
            textDecoration: c.isComplete ? 'line-through' : 'inherit',
          }"
          >{{ c.body }} </label
        ><i
          v-if="c.creatorId == account.id"
          @click="deleteChore(c.id)"
          class="mdi mdi-trash-can-outline ms-2 text-secondary"
        ></i>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { choresService } from "../services/ChoresService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      chores: computed(() => AppState.chores.filter(c => c.assignedTo == props.member.id)),
      account: computed(() => AppState.account),
      async markComplete(choreId) {
        try {
          await choresService.markComplete(choreId)
          // Pop.toast('Chore Completed!', 'success')
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async deleteChore(choreId) {
        try {
          if (await Pop.confirm('Delete this Chore?')) {
            await choresService.deleteChore(choreId)
            Pop.toast('Chore Deleted!', 'success')
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
</style>