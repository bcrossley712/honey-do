<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 offset-1 text-center p-2">
        <h6>Recipe Search</h6>
        <form @submit.prevent="getRecipes" class="mb-3 d-flex">
          <input
            v-model="editable"
            type="text"
            class="form-control"
            name="recipe-search"
            id="recipe-search"
            aria-describedby="helpId"
            placeholder="Chicken soup..."
          />
          <button
            title="Search"
            class="btn btn-secondary mdi mdi-plus ms-1"
          ></button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1" v-for="r in recipes" :key="r.id">
        <Recipe :recipe="r" />
      </div>
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
    const editable = ref('')
    return {
      editable,
      recipes: computed(() => AppState.recipes),
      async getRecipes() {
        try {
          await recipesService.getRecipes(editable)
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