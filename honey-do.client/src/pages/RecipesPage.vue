<template>
  <div class="container-fluid">
    <LogoBanner />
    <div class="row">
      <div class="col-10 offset-1 text-center p-2">
        <h2>Recipe Search</h2>
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
            class="btn btn-secondary elevation-2 mdi mdi-magnify ms-1"
          ></button>
        </form>
        <span>Click recipe to see more info</span>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div v-if="loading" class="half-circle-spinner darken-30">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1" v-for="r in recipes" :key="r.id">
        <Recipe :recipe="r" />
      </div>
    </div>
    <img
      v-if="recipes.length < 5"
      src="../assets/img/undraw_searching_re_3ra9.svg"
      class="img-fluid mt-2"
      alt=""
    />
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
    const loading = ref(false)
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
      loading,
      editable,
      activeRecipe: computed(() => AppState.activeRecipe),
      recipes: computed(() => AppState.recipes),
      async getRecipes() {
        try {
          loading.value = true
          await recipesService.getRecipes(editable.value)
          loading.value = false
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
.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #bcff9f;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #bcff9f;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>