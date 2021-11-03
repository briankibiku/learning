<template>
  <div>
    <Navbar />
    <br />
    <form style="width: 400px; padding: 0px 20px 0px 20px" class="mx-auto">
      <br />
      <h4>Say hi :-)</h4>
      <br />
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          <h6>We'll never share your email with anyone else.</h6>
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Comments</label>
        <textarea
          id="form7"
          class="md-textarea form-control"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <br />
    <Networkdata />

    <Footer />
  </div>
</template>

<script>
export default {
  // layout: 'blog',
  head() {
    return {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto&display=swap",
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>


<style scoped>
h6 {
  font-family: Circular, Arial, sans-serif;
  /* Dejavu Sans, Arial, Verdana, sans-serif; */
}
</style>