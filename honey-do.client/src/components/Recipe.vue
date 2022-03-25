<template>
  <div class="row my-2 shadow rounded bg-secondary" @click="setToActive">
    <div class="col-12 p-2">
      <!-- <img class="img-fluid" :src="recipe.imageUrl" alt="recipe image" /> -->
      <h5 class="p-2">{{ recipe.name }}</h5>
      <ul v-for="i in recipe.ingredients" :key="i">
        <li>
          {{ i }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      setToActive() {
        AppState.activeRecipe = props.recipe
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>