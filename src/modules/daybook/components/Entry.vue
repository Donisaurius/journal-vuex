<template>
  <div class="entry-container mb-3 pointer">
    <!-- Title -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves </span>
    </div>
  </div>

  <!-- Description -->
  <div class="entry-description">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut voluptates
    aspernatur debitis eveniet asperiores illum ipsa soluta. Nostrum tenetur,
    quas molestiae officia fuga, at culpa modi aut quasi explicabo maxime. Qui
    eos ipsam, ex quos impedit alias excepturi totam eveniet atque ratione
    tenetur dicta accusamus ab numquam et sint molestiae a odio fugit, non,
    beatae consequatur obcaecati dolorum! Excepturi, alias.
  </div>
</template>

<script>
export default {
  name: "EntryComponent",
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease;
  }
}
</style>
