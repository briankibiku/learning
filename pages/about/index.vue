<template>
  <div>
    <Navbar />
    <br />
    <div
      class="container d-flex justify-content-center"
      style="max-width: 900px"
    >
      <div class="row align-items-start mx-auto">
        <div class="col-sm">
          <img
            src="https://drive.google.com/uc?export=view&id=1xtHKmans-EMiH1y8J1X2ptonxfm2st76"
            height="1000"
            width="1000"
            class="img-fluid"
          />
        </div>
        <div class="col-sm">
          <h1 class="animate__animated animate__bounce animate__delay-0s">
            An animated element
          </h1>
          <div class="animate__animated animate__bounce animate__delay-0s">
            Example
          </div>
          <p class="animate__flip" style="font-family: Lato, sans-serif">
            I do software development using Flutter, Nuxt, HTML, css, php, Yii
            and many more.
          </p>
          <br />
          <p style="font-family: Lato, sans-serif">
            Currently working at <a href="https://mswali.co.ke">mSwali</a> in
            the capacity of a Software Engineer/Developer.
          </p>
          <br />

          <client-only placeholder="Loading...">
            <!-- this component will only be rendered on client-side -->
            <b>
              <p>Client side rendering only of me</p>
              <LazyBaseFooButton />
            </b>
          </client-only>
        </div>
      </div>
      <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    </div>
    <br />
    <Footer />
  </div>
</template>
<script>
export default {
  head: {
    title: "About",
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
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
