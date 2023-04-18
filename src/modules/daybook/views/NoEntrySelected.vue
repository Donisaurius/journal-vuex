<template>
  <div class="d-flex justify-content-center">
    <p class="align-self-center">Nada seleccionado</p>
  </div>
  <Fab @saveEntry="newEntry" />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  methods: {
    newEntry() {

      this.$router.push({ name: "entry", params: { id: "new" } })
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
