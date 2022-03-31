<template>
  <span v-touch:swipe.right="deleteItem">
    <div class="d-flex justify-content-start w-100">
      <div class="form-check fs-5" @click="markComplete(g.id)">
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
  </span>
  <i
    v-if="g.creatorId == account.id || group.creatorId == account.id"
    class="mdi mdi-delete-forever"
    title="delete item"
    @click="deleteItem(g.id)"
  ></i>
</template>


<script>
import { computed } from "@vue/reactivity"
export default {
  setup() {
    return {
      groceryItems: computed(() => AppState.items.filter(i => i.type == 'grocery'))
    }
  }
}
</script>


<style lang="scss" scoped>
</style>