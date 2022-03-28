<template>
  <div
    class="row my-2 shadow rounded bg-secondary selectable"
    data-bs-toggle="offcanvas"
    data-bs-target="#recipe"
    @click="goTo"
  >
    <div class="col-12 p-2 d-flex">
      <img class="img-fluid img-md" :src="recipe.imageUrl" alt="recipe image" />
      <h6 class="p-2">{{ recipe.name }}</h6>
      <!-- <ul v-for="i in recipe.ingredients" :key="i">
        <li>
          {{ i }}
        </li>
      </ul> -->
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { useRouter } from "vue-router"
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    return {
      goTo() {
        AppState.activeRecipe = props.recipe
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.img-md {
  max-width: 80px;
}
</style>