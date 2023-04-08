<template>
  <div class="hello">
    <router-link to="/">
      <button class="btn btn-primary">Home</button>
    </router-link>
    <router-link to="/daybook">
      <button class="btn btn-secondary">CLICK</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
