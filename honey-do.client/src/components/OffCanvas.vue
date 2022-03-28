<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <slot name="title"></slot>
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>