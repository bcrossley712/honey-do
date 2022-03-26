<template>
  <div class="container-fluid">
    <div class="container item-template">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <h4>Shopping List</h4>
        </div>
        <div v-if="groceryItems.length > 0">
          <h6>Grocery Items</h6>
          <div
            class="d-flex flex-column justify-content-start m-2"
            v-for="g in groceryItems"
            :key="g.id"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {{ g.name }}
              </label>
            </div>
          </div>
        </div>
        <div v-if="hardwareItems.length > 0">
          <h6>Hardware Items</h6>
          <div
            class="d-flex flex-column justify-content-start m-2"
            v-for="h in hardwareItems"
            :key="h.id"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {{ h.name }}
              </label>
            </div>
          </div>
        </div>
        <div v-if="cleaningItems.length > 0">
          <h6>Cleaning Items</h6>
          <div
            class="d-flex flex-column justify-content-start m-2"
            v-for="c in cleaningItems"
            :key="c.id"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {{ c.name }}
              </label>
            </div>
          </div>
        </div>
        <div v-if="officeItems.length > 0">
          <h6>Office Items</h6>
          <div
            class="d-flex flex-column justify-content-start m-2"
            v-for="o in officeItems"
            :key="o.id"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                {{ o.name }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="createItem()" class="message-box w-100 row">
      <div class="mb-1">
        <select v-model="editable.type" class="form-select" name="" id="">
          <option value="grocery" selected>Grocery</option>
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
          placeholder="Add item to shopping list..."
          aria-label="shopping item"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button class="input-group-text selectable" id="basic-addon2">
            <i class="mdi mdi-send"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
import { itemsService } from "../services/ItemsService"
import { onMounted } from "@vue/runtime-core"
import { groupsService } from "../services/GroupsService"
export default {
  setup() {
    const editable = ref({})
    const route = useRoute()
    onMounted(async () => {
      try {
        if (!AppState.activeGroup.id) {
          await groupsService.getGroup(route.params.id)
        }
        if (AppState.items.length == 0) {
          await itemsService.getItems(route.params.id)
        }
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      editable,
      route,
      activeRecipe: computed(() => AppState.activeRecipe),
      groceryItems: computed(() => AppState.items.filter(i => i.type == 'grocery')),
      hardwareItems: computed(() => AppState.items.filter(i => i.type == 'hardware')),
      officeItems: computed(() => AppState.items.filter(i => i.type == 'office')),
      cleaningItems: computed(() => AppState.items.filter(i => i.type == 'cleaning')),
      async createItem() {
        editable.value.groupId = route.params.id
        await itemsService.createItem(editable.value)
        editable.value = {}
      },
      changeFilter(type) {
        filterBy = type

      }
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
  bottom: 5vh;
}
</style>