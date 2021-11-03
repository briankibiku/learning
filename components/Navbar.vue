<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand>
      <img
        src="https://drive.google.com/uc?export=view&id=1EztWl51HpYGlZ1G3hD5iPF6z6YgeGq9n"
        alt=""
        width="140"
        height="60"
        class="d-inline-block align-text-top"
      />
    </b-navbar-brand>
  </b-navbar>
</template>
<style>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  font-weight: bold;
  color: cyan;
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: #00c58e;
}
.nuxt-link-prefetched {
  color: orangeRed;
}
</style>
