<template>
  <div class="container-fluid">
    <div class="row">
      <h1 class="bg-secondary text-tertiary t-shadow p-2">HONEY-DO</h1>
    </div>
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
            required
          />
          <button
            title="Search"
            class="btn btn-secondary mdi mdi-magnify ms-1 tert-outline"
          ></button>
        </form>
        <span>Click recipe to see more info</span>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1" v-for="r in recipes" :key="r.id">
        <Recipe :recipe="r" />
      </div>
    </div>
  </div>
  <OffCanvas id="recipe">
    <template #title>{{ activeRecipe.name }} </template>
    <template #body><RecipeForm /></template>
  </OffCanvas>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { recipesService } from "../services/RecipesService";
import { AppState } from "../AppState";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { groupsService } from "../services/GroupsService";
export default {
  setup() {
    const editable = ref('')
    const route = useRoute()
    onMounted(async () => {
      try {
        if (route.name == 'Recipes') {
          await groupsService.getGroup(route.params.id)
        }

      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    })
    return {
      editable,
      activeRecipe: computed(() => AppState.activeRecipe),
      recipes: computed(() => AppState.recipes),
      async getRecipes() {
        try {
          Pop.toast(`Searching for ${editable.value}, please stand by...`, 'info')
          await recipesService.getRecipes(editable.value)
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