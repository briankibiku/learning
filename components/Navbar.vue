<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="/">
        <img
          src="https://drive.google.com/uc?export=view&id=1EztWl51HpYGlZ1G3hD5iPF6z6YgeGq9n"
          alt=""
          width="140"
          height="60"
          class="d-inline-block align-text-top"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="menu">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/projects">Projects</b-nav-item>
            <b-nav-item href="/hire">Contact</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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
