<template>
  <form @submit.prevent="createItem()">
    <select v-model="editable.type" class="form-select" name="" id="">
      <option value="" selected disabled>Select one...</option>
      <option value="grocery">Grocery</option>
      <option value="hardware">Hardware</option>
      <option value="cleaning">Cleaning</option>
      <option value="office">Office</option>
    </select>

    <div class="input-group my-2">
      <input
        v-model="editable.name"
        type="text"
        class="form-control"
        placeholder="shopping item"
        aria-label="shopping item"
        aria-describedby="basic-addon2"
      />
      <div class="input-group-append">
        <button class="btn-rounded-end bg-success" id="basic-addon2">
          <i class="mdi mdi-check"></i>
        </button>
      </div>
    </div>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import { itemsService } from "../services/ItemsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { useRoute } from "vue-router"
export default {
  setup() {
    const editable = ref({})
    const route = useRoute()
    return {
      editable,
      async createItem() {
        try {
          editable.value.groupId = route.params.id
          await itemsService.createItem(editable.value)
          editable.value.name = ''
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