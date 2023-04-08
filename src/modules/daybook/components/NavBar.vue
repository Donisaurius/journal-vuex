<template>
  <nav class="navbar bg-success">
    <router-link to="/" class="navbar-brand text-white">
      <img
        src="@/assets/logo.png"
        height="24"
        class="mx-2 d-inline-block"
      />Daybook
    </router-link>
    <router-link to="/daybook" class="d-flex">
      <button class="btn btn-secondary mx-2">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
