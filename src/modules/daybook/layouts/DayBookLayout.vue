<template>
  <div>
    <NavBar />
    <div class="d-flex">
      <div class="col-4">
        <EntryList></EntryList>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions } from 'vuex';

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
  methods: {
    ...mapActions('journal',['loadEntries'])
  },
  created(){
    
  }
};
</script>

<style></style>
