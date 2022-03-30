<template>
  <div class="row p-3">
    <div class="col-3">
      <img
        :src="note.creator?.picture"
        alt=""
        class="img-fluid img-small rounded-circle"
      />
    </div>
    <div class="col-9 rounded text-start elevation-2">
      <span>{{ new Date(note.createdAt).toLocaleString() }}</span>
      <p>
        {{ note.body }}
      </p>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  props: {
    note: {
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
.img-small {
  height: 55px;
  width: 55px;
}
</style>