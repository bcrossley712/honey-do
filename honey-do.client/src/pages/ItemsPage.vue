<template>
  <div class="container-fluid">
    <div class="container item-template">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <h4>Shopping List</h4>
        </div>
        <h6>Grocery Items</h6>
        <div
          class="d-flex flex-column justify-content-start m-2"
          v-for="i in activeRecipe.ingredients"
          :key="i"
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              {{ i }}
            </label>
          </div>
        </div>
      </div>
    </div>
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
      <div class="input-group mb-3">
        <input
          v-model="editable.name"
          type="text"
          class="form-control"
          placeholder="shopping item"
          aria-label="shopping item"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2"
            ><i class="mdi mdi-send"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
export default {
  setup() {
    const editable = ref({})
    const route = useRoute()
    return {
      editable,
      route,
      activeRecipe: computed(() => AppState.activeRecipe)
    }
  }
}
</script>


<style lang="scss" scoped>
.item-template {
  display: flex;
  flex-direction: column;
  min-height: 70vh;
}

.message-box {
  position: fixed;
  bottom: 8vh;
}
</style>