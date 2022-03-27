<template>
  <div class="row p-3">
    <div class="col-3">
      <img
        src="https://thiscatdoesnotexist.com"
        alt=""
        class="img-fluid img-small rounded-circle"
      />
    </div>
    <div class="col-9 d-flex bg-grey rounded border border-secondary">
      <p>
        Test note: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Saepe recusandae amet quaerat eveniet deserunt, necessitatibus accusamus
        explicabo.
      </p>
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
.img-small {
  height: 55px;
  width: 55px;
}
</style>