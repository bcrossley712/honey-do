<template>
  <span v-touch:swipe.right="deleteItem">
    <div class="justify-content-start">
      <div class="form-check fs-5" @click="markComplete(cleaningItems.id)">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          :checked="cleaningItems.isComplete"
        />
        <label
          class="form-check-label"
          :style="{
            textDecoration: cleaningItems.isComplete
              ? 'line-through'
              : 'inherit',
          }"
        >
          {{ cleaningItems.name }}
        </label>
      </div>
    </div>
  </span>
  <!-- <i
    v-if="
      cleaningItems.creatorId == account.id || group.creatorId == account.id
    "
    class="mdi mdi-delete-forever"
    title="delete item"
    @click="deleteItem(cleaningItems.id)"
  ></i> -->
</template>


<script>
import { computed } from "@vue/reactivity"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { itemsService } from "../services/ItemsService"
import { AppState } from "../AppState"
export default {
  props: {
    cleaningItems: {
      type: Object,
      required: true
    }
  },
  setup(props) {
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

      async deleteItem() {
        try {
          let itemId = props.cleaningItems.id
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