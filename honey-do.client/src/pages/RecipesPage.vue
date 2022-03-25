<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        Recipes Page
        <button class="btn btn-secondary" @click="getRecipes">
          Get Recipes
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { recipesService } from "../services/RecipesService";
export default {
  setup() {
    return {
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