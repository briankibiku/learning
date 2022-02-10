<template>
  <div>
    <Navbar />
    <br />
    <form
      style="width: 400px; min-height: 100vh; padding: 0px 20px 0px 20px"
      class="mx-auto"
    >
      <br />
      <h4 style="font-family: Work Sans; font-size: 23px; text-align: center">
        It seems like we could get along...
      </h4>
      <br />
      <p
        style="
          font-family: Work Sans;
          font-size: 16px;
          text-align: center;
          color: black;
        "
      >
        Do not hesitate to shoot me an email @ <u>kibikukim@gmail.com</u> Or
        just call me up on <b> +2547 24 609 783 </b>
      </p>
    </form>
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "About",
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Work Sans",
      },
    ],
  },
};
</script>
