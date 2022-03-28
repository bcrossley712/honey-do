<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <img
          :src="activeRecipe.imageUrl"
          alt="recipe image"
          class="img-fluid rounded"
        />
      </div>
      <i
        class="mdi mdi-plus selectable fs-5 p-2"
        @click="addAll(activeRecipe.ingredients)"
      >
        Add all to shopping list</i
      >
      <div v-for="i in activeRecipe.ingredients" :key="i.name" class="col-12">
        <p @click="addIngredient(i)" class="ps-2">
          <i class="mdi mdi-plus selectable" title="Add Ingredient"></i>
          {{ i }}
        </p>
      </div>
      <div class="col-12">
        <a
          target="_blank"
          class="btn-secondary btn"
          :href="`https://tasty.co/recipe/${activeRecipe.slug}`"
          >Click for full recipe</a
        >
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { itemsService } from "../services/ItemsService"
import { useRoute } from "vue-router"
export default {
  setup() {
    const route = useRoute()
    return {
      activeRecipe: computed(() => AppState.activeRecipe),
      async addIngredient(ingredient) {
        try {
          const newItem = {
            name: ingredient,
            groupId: route.params.id
          }
          await itemsService.createItem(newItem)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message, 'error')
        }
      },
      async addAll(ingredientsArray) {
        try {
          await itemsService.addAll(ingredientsArray, route.params.id)
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