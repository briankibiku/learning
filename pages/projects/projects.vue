<template>
  <div>
    <Navbar />
    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <Card />
        </div>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="justify-content-center">
        <div v-if="$nuxt.isOnline">You are online</div>
        <Nuxt />
        <br />

        <div>{{ content }}</div>
        <br />
        <button @click="refreshPage" class="btn btn-primary">Refresh</button>
        <button @click="showAlert" class="btn btn-primary">Show Alert</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      content:
        "Example to show refresh page data, provided by asyncData or fetch " +
        "Created at: " +
        Date(),
    };
  },
  methods: {
    refreshPage() {
      this.$nuxt.refresh();
    },
    showAlert() {
      alert("You clicked me");
    },
  },
  //    mounted() {
  //     this.$nextTick(() => {
  //       this.$nuxt.$loading.start()
  //       setTimeout(() => this.$nuxt.$loading.finish(), 5000)
  //     })
  //   }
  //   middleware({ store, redirect }) {
  //     // retrieving keys via object destructuring
  //     const isAuthenticated = store.state.authenticated;
  //     if (!isAuthenticated) {
  //       return redirect("/login");
  //     }
  //   },
};
</script>
