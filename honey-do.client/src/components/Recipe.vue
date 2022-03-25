<template>
  <div class="row my-2 shadow rounded bg-secondary">
    <div class="col-12 d-flex p-2">
      <img class="img-fluid" :src="recipe.imageUrl" alt="recipe image" />
      <h5 class="p-2">{{ recipe.name }}</h5>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>