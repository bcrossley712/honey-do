<template>
  <div v-if="chores.length > 0">
    <h3>{{ member.name }}</h3>
    <div class="form-check" v-for="c in chores" :key="c.id" :value="c.id">
      <input
        type="checkbox"
        class="form-check-input"
        name="Chore Name"
        id=""
        :checked="c.isComplete"
        @click="markComplete(c.id)"
      />
      <div>
        <label
          class="form-check-label"
          for=""
          :style="{
            textDecoration: c.isComplete ? 'line-through' : 'inherit',
          }"
          >{{ c.body }}</label
        >
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
      async markComplete(choreId) {
        try {
          await choresService.markComplete(choreId)
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