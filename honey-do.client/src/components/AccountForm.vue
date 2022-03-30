<template>
  <form class="mb-3" @submit.prevent="editAccount">
    <label for="Group Name" class="form-label">Name</label>
    <input
      v-model="editable.name"
      type="text"
      class="form-control"
      name=""
      id=""
      placeholder="Name..."
      required
    />
    <label for="picture" class="form-label">ImageUrl</label>
    <input
      v-model="editable.picture"
      type="text"
      class="form-control"
      name=""
      id=""
      placeholder="ImageUrl..."
      required
    />
    <button class="btn btn-success mt-2 elevation-2" title="Edit Account">
      Edit Account
    </button>
  </form>
</template>


<script>
import { ref } from "@vue/reactivity"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
import { useRouter } from "vue-router"
import { Modal } from "bootstrap"
import { AppState } from "../AppState"
import { accountService } from "../services/AccountService"
import { watchEffect } from "@vue/runtime-core"
export default {
  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.value = AppState.account
    })
    return {
      editable,
      async editAccount() {
        try {
          await accountService.editAccount(editable.value)
          Modal.getOrCreateInstance(document.getElementById("edit-account")).hide();
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