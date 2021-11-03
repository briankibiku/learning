<template>
  <div>
    <Navbar />
    <br />
    <a
      class="btn btn-primary"
      style="padding-left: 20px"
      v-if="show"
      @click="show = false"
      >Hide Mountains</a
    >
    <div class="row" style="padding: 0px 20px 0px 20px" v-if="show">
      <p v-if="$fetchState.pending">
        <span class="spinner-border m-5 visually-hidden"></span>
      </p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <Mountains
        v-for="mountain in mountains"
        :cardelement="mountain"
        :key="mountain.title"
      />
    </div>
    <a class="btn btn-primary" v-if="!show" @click="show = true;"
      >View Mountains</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return { mountains: [], show: false };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  async fetch() {
    try {
      this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
        (res) => res.json()
      );
    } catch (e) {
      print("An error occured while fetching");
    }
  },
};
</script>
