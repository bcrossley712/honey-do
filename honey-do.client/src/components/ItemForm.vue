<template>
  <div class="message-box">
    <div>
      <label for="" class="form-label"></label>
      <select v-model="editable.type" class="form-control" name="" id="">
        <option value="grocery">Grocery</option>
        <option value="hardware">Hardware</option>
        <option value="office">Office</option>
        <option value="cleaning">Cleaning</option>
      </select>
    </div>
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
        <span
          class="input-group-text selectable"
          id="basic-addon2"
          @click="createItem()"
          ><i class="mdi mdi-send"></i
        ></span>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import { itemsService } from "../services/ItemsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { useRoute } from "vue-router"
import { Modal } from "bootstrap"
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
          Modal.getOrCreateInstance(document.getElementById('new-item')).hide()
          editable.value = {}
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