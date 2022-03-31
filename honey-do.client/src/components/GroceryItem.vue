<template>
  <span v-touch:swipe.right="deleteItem">
    <div class="d-flex justify-content-start w-100">
      <div class="form-check fs-5" @click="markComplete(groceryItems.id)">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          :checked="groceryItems.isComplete"
        />
        <label
          class="form-check-label"
          :style="{
            textDecoration: groceryItems.isComplete
              ? 'line-through'
              : 'inherit',
          }"
        >
          {{ groceryItems.name }}
        </label>
      </div>
    </div>
  </span>
  <!-- <i
    v-if="groceryItems.creatorId == account.id || group.creatorId == account.id"
    class="mdi mdi-delete-forever"
    title="delete item"
    @click="deleteItem"
  ></i> -->
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { itemsService } from "../services/ItemsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  props: {
    groceryItems: {
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
          let itemId = props.groceryItems.id
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
span.active {
  background: red;
  transform: translateX(3em);
}
</style>