<template>
  <div>
    <Navbar />
    <br />
    <p>{{ userNameFunc() }}</p>
    <About />

    <br />
    <div class="d-flex justify-content-center">
      <div class="row align-items-start" style="width: 1400"></div>
    </div>
    <Footer />
    <footer class="page-footer font-small blue pt-4">
      <div class="footer-copyright text-center py-3" style="color: grey">
        © 2020 Copyright: b2k
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return { userName: "" };
  },
  methods: {
    userNameFunc() {
      this.$store.commit("updateUserName", "");
      this.userName = this.$store.state.visitor_info.username;
      return this.userName;
    },
  },
  // transition: { mode: "", name: "about" },
  transition(to, from) {
    if (!from) {
      return "slide-left";
    }
    return +to.query.page < +from.query.page ? "slide-right" : "slide-left";
  },
  head: {
    title: "Home",
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
<style>
.curved-div {
  background: #fff;
  color: #fff;
  text-align: center;
}
.curved-div h1 {
  font-size: 6rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.curved-div p {
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.about-enter-active,
.about-leave-active {
  transition: opacity 0.5s;
}
.about-enter,
.about-leave-active {
  opacity: 0;
}
</style>
