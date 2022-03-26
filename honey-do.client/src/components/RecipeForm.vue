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
      <div class="col-12">
        <a :href="`https://tasty.co/recipe/${activeRecipe.slug}`"
          >Click for full recipe</a
        >
      </div>
      <ul v-for="i in activeRecipe.ingredients" :key="i.name">
        <li>{{ i }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      activeRecipe: computed(() => AppState.activeRecipe)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>