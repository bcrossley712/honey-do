<template>
  <div class="container-fluid d-flex flex-column" style="min-height: 94vh">
    <LogoBanner />
    <div class="row flex-grow-1 overflow">
      <div>
        <div class="col-12 d-flex justify-content-center text-center">
          <h2>Shopping List</h2>
        </div>
        <div>
          <div v-if="groceryItems.length > 0">
            <h4>Grocery Items</h4>
          </div>
          <div
            class="d-flex justify-content-between my-2"
            v-for="g in groceryItems"
            :key="g.id"
          >
            <GroceryItem :groceryItems="g" />
          </div>
        </div>
        <div>
          <div v-if="hardwareItems.length > 0">
            <h4>Hardware Items</h4>
          </div>
          <div
            class="d-flex justify-content-between my-2"
            v-for="h in hardwareItems"
            :key="h.id"
          >
            <HardwareItem :hardwareItems="h" />
          </div>
        </div>
        <div>
          <div v-if="cleaningItems.length > 0">
            <h4>Cleaning Items</h4>
          </div>
          <div
            class="d-flex justify-content-between my-2"
            v-for="c in cleaningItems"
            :key="c.id"
          >
            <CleaningItems :cleaningItems="c" />
          </div>
        </div>
        <div>
          <div v-if="officeItems.length > 0">
            <h4>Office Items</h4>
          </div>
          <div
            class="d-flex justify-content-between my-2"
            v-for="o in officeItems"
            :key="o.id"
          >
            <OfficeItems :officeItems="o" />
          </div>
        </div>
      </div>
    </div>
    <img
      v-if="item.length < 5"
      src="../assets/img/undraw_diary_re_4jpc.svg"
      class="img-fluid"
      alt=""
    />
    <div class="row px-2">
      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h6 class="bg-secondary rounded">
            <button
              class="btn elevation-2"
              data-bs-toggle="modal"
              data-bs-target="#new-item"
            >
              Add Items
              <i class="mdi mdi-plus" title="Add item"></i>
            </button>
          </h6>
          <h6
            class="bg-secondary rounded px-1"
            v-if="group.creatorId == account.id"
            @click="deleteAllItems()"
          >
            <button class="btn" title="clear list">
              <i class="selectable mdi mdi-cancel"></i> Clear List
            </button>
          </h6>
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
import { onMounted, watchEffect } from "@vue/runtime-core"
import { groupsService } from "../services/GroupsService"
import { socketService } from "../services/SocketService"
export default {
  setup() {
    const editable = ref({})
    const route = useRoute()
    watchEffect(async () => {
      try {
        if (!AppState.activeGroup.id) {
          await groupsService.getGroup(route.params.id)
        }
        await itemsService.getItems(route.params.id)
        socketService.joinRoom('group-' + route.params.id)

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

      async deleteAllItems() {
        try {
          let grocery
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
.overflow {
  max-height: 80vh;
  overflow: auto;
}
</style>