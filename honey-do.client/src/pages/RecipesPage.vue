<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        Recipes Page
        <button class="btn btn-secondary" @click="getRecipes">
          Get Recipes
        </button>
      </div>
      {{ recipes[0]?.name }}
      {{ recipes[4]?.ingredients }}
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { recipesService } from "../services/RecipesService";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      recipes: computed(() => AppState.recipes),
      async getRecipes() {
        try {
          await recipesService.getRecipes()
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