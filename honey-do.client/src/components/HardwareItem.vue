<template>
  <div class="d-flex justify-content-start">
    <div class="form-check" @click="markComplete(hardwareItems.id)">
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        :checked="hardwareItems.isComplete"
      />

      <label
        class="form-check-label"
        :style="{
          textDecoration: hardwareItems.isComplete ? 'line-through' : 'inherit',
        }"
      >
        {{ hardwareItems.name }}
      </label>
    </div>
  </div>
  <i
    v-if="
      hardwareItems.creatorId == account.id || group.creatorId == account.id
    "
    class="mdi mdi-delete-forever"
    title="delete item"
    @click="deleteItem(hardwareItems.id)"
  ></i>
</template>


<script>
import { computed } from "@vue/reactivity"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { itemsService } from "../services/ItemsService"
import { AppState } from "../AppState"
export default {
  props: {
    hardwareItems: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      member: computed(() => AppState.members),
      group: computed(() => AppState.activeGroup),

      async markComplete(itemId) {
        try {
          await itemsService.markComplete(itemId)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      async deleteItem(itemId) {
        try {
          logger.log('swiping', itemId)
          if (await Pop.confirm('Are You Sure You Want To Delete?')) {
            await itemsService.deleteItem(itemId)
            Pop.toast('Item removed', 'success')
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