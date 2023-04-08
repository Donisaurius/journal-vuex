<template>
  <div class="entry-list-container bg-warning">
    <div class="px-2 pt-2 mb-2">
      <input type="text" class="form-control" placeholder="Search" />
    </div>

    <div class="entry-scrollarea">
      <p v-for="item in 100" :key="item">
        <Entry />
      </p>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue")),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 80px);
  overflow: hidden;
}

.entry-scrollarea {
  height: calc(100vh - 80px);
  overflow-y: scroll;
}
</style>
