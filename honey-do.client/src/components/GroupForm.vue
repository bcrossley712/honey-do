<template>
  <div class="component">Group Form</div>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { useRouter } from "vue-router"
import { groupsService } from "../services/GroupsService"
import { Modal } from "bootstrap"
export default {
  setup() {
    const router = useRouter()
    const group = ref({})
    return {
      group,
      async createGroup() {
        try {
          let newGroup = await groupsService.createGroup(group.value)
          Modal.getOrCreateInstance(document.getElementById("new-group")).hide();
          router.push({ name: 'Home', params: { id: newGroup.id } })
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