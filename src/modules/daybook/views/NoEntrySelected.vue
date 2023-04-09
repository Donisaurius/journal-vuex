<template>
  <div class="d-flex justify-content-center">
    <p class="align-self-center">Nada seleccionado</p>
  </div>
  <Fab />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
</style>
