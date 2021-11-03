<template>
  <div class="container d-flex justify-content-center" style="max-width: 900px">
    <div class="row align-items-start mx-auto">
      <div class="col-sm">
        <img
          src="https://drive.google.com/uc?export=view&id=1F-a5Svs-YffBbu-mTDtP1uMOGQgFJAC4"
          height="1000"
          width="1000"
          class="img-fluid"
        />
      </div>
      <br />
      <div class="col-sm">
        <p class="testing1">
          I'm Kibiku, thanks for droping by to check me out. Everything about the Software Engineering "Food Chain" excites me. My
          love for designing and breathing life to designs (through code) to
          testing the software is next to nothing. It is amazing how you can
          change lives using software.
        </p>
        <br />
        <p style="font-family: Work Sans">
          I am an Experienced Software Engineer with a history of working in the
          hospital & health care insurance industry. Skilled in Web and Mobile
          application development, debugging, testing and integrations. Strong
          engineering professional with a Bsc. Computer Science from University
          of Nairobi.
        </p>
        <p style="font-family: Work Sans">
          Wanna chat? Shoot me an email @ kibikukim@gmail.com
        </p>
      </div>
    </div>
    <nuxt keep-alive :keep-alive-props="{ max: 10 }" />
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
