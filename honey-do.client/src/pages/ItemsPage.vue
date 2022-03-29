<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-secondary text-tertiary t-shadow p-2">HONEY-DO</h1>
    </div>
    <div class="container item-template">
      <div class="row">
        <div class="col-12 d-flex justify-content-center text-center">
          <h2>Shopping List</h2>
        </div>

        <div
          class="
            col-12
            text-center
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <h6 class="bg-tertiary rounded px-1">
            <button
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#new-item"
            >
              Add Items
              <i class="mdi mdi-plus selectable" title="Add note"></i>
            </button>
          </h6>
          <h6
            class="bg-tertiary rounded px-1"
            v-if="group.creatorId == account.id"
            @click="deleteAllItems()"
          >
            <button class="btn" title="clear list">
              <i class="selectable mdi mdi-cancel"></i> Clear List
            </button>
          </h6>
        </div>

        <div v-if="groceryItems.length > 0">
          <h6>Grocery Items</h6>
        </div>
        <div
          class="d-flex justify-content-between m-2"
          v-for="g in groceryItems"
          :key="g.id"
        >
          <div class="d-flex justify-content-start">
            <div class="form-check" @click="markComplete(g.id)">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                :checked="g.isComplete"
              />
              <label
                class="form-check-label"
                :style="{
                  textDecoration: g.isComplete ? 'line-through' : 'inherit',
                }"
              >
                {{ g.name }}
              </label>
            </div>
          </div>
          <i
            v-if="g.creatorId == account.id || group.creatorId == account.id"
            class="mdi mdi-delete-forever"
            title="delete item"
            @click="deleteItem(g.id)"
          ></i>
        </div>
        <div v-if="hardwareItems.length > 0">
          <h6>Hardware Items</h6>
        </div>
        <div
          class="d-flex justify-content-between m-2"
          v-for="h in hardwareItems"
          :key="h.id"
        >
          <div class="d-flex justify-content-start">
            <div class="form-check" @click="markComplete(h.id)">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                :checked="h.isComplete"
              />
              <label
                class="form-check-label"
                :style="{
                  textDecoration: h.isComplete ? 'line-through' : 'inherit',
                }"
              >
                {{ h.name }}
              </label>
            </div>
          </div>
          <i
            v-if="h.creatorId == account.id || group.creatorId == account.id"
            class="mdi mdi-delete-forever"
            title="delete item"
            @click="deleteItem(h.id)"
          ></i>
        </div>
        <div v-if="cleaningItems.length > 0">
          <h6>Cleaning Items</h6>
        </div>
        <div
          class="d-flex justify-content-between m-2"
          v-for="c in cleaningItems"
          :key="c.id"
        >
          <div class="justify-content-start">
            <div class="form-check" @click="markComplete(c.id)">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                :checked="c.isComplete"
              />
              <label
                class="form-check-label"
                :style="{
                  textDecoration: c.isComplete ? 'line-through' : 'inherit',
                }"
              >
                {{ c.name }}
              </label>
            </div>
          </div>
          <i
            v-if="c.creatorId == account.id || group.creatorId == account.id"
            class="mdi mdi-delete-forever"
            title="delete item"
            @click="deleteItem(c.id)"
          ></i>
        </div>
        <div v-if="officeItems.length > 0">
          <h6>Office Items</h6>
        </div>
        <div
          class="d-flex justify-content-between m-2"
          v-for="o in officeItems"
          :key="o.id"
        >
          <div class="justify-content-start">
            <div class="form-check" @click="markComplete(o.id)">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                :checked="o.isComplete"
              />
              <label
                class="form-check-label"
                :style="{
                  textDecoration: o.isComplete ? 'line-through' : 'inherit',
                }"
              >
                {{ o.name }}
              </label>
            </div>
          </div>
          <i
            v-if="o.creatorId == account.id || group.creatorId == account.id"
            class="mdi mdi-delete-forever"
            title="delete item"
            @click="deleteItem(o.id)"
          ></i>
        </div>
      </div>
    </div>

    <Modal id="new-item">
      <template #title>New Item</template>
      <template #body><ItemForm /></template>
    </Modal>
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
        await itemsService.getItems(route.params.id)

      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      editable,
      route,
      activeRecipe: computed(() => AppState.activeRecipe),
      item: computed(() => AppState.items),
      groceryItems: computed(() => AppState.items.filter(i => i.type == 'grocery')),
      hardwareItems: computed(() => AppState.items.filter(i => i.type == 'hardware')),
      officeItems: computed(() => AppState.items.filter(i => i.type == 'office')),
      cleaningItems: computed(() => AppState.items.filter(i => i.type == 'cleaning')),
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
          if (await Pop.confirm('Are You Sure You Want To Delete?')) {
            await itemsService.deleteItem(itemId)
            Pop.toast('Item removed', 'success')
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },

      async deleteAllItems() {
        try {
          if (await Pop.confirm('Delete the whole list?')) {
            await itemsService.deleteAllItems(AppState.items)
            Pop.toast('List Cleared', 'success')
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
.item-template {
  display: flex;
  flex-direction: column;
}
</style>