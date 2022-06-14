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
          I'm Kibiku, thanks for dropping by to check my portfolio out!
        </p>
        <p>
          I am a programmer passionate about building applications that make the
          world better. In the past
          <span style="font-weight: bold"> 3 years</span>
          , I have had the opportunity to work in the finance, EduTech and
          TeleHealth environment building applications that manage medical,
          financial, and content data. I have also worked in the corporate world
          building web and mobile applications that have improved processes
          efficiency, reporting, and maintainability.
        </p>
        <p>My go to's</p>
        <p class="favs">
          Frontend ->
          <span>ReactJs,</span>
          <span>VueJs,</span> <span>Laravel,</span> <span>MongoDB,</span>
          <span>Express,</span>
        </p>
        <p class="favs">
          Mobile Development ->
          <span>Flutter,</span>
          <span>React Native,</span>
        </p>
        <p class="favs">
          Databases ->
          <span>MYSQL,</span>
          <span>MongoDB,</span> <span>MariaDB,</span><span>Firebase,</span>
        </p>
        <p class="favs">
          Serverside ->
          <span>NodeJs,</span>
          <span>Express,</span>
        </p>
        <p style="font-family: Work Sans">
          My work experience and educational background have improved my skills
          in Software Development, Data Analysis, Leadership, and Communication
          which I still seek to improve with time.
        </p>
        <p>
          Besides work, I love traveling, reading books, watching movies, and
          hiking.
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
<style>
.favs {
  color: #1596f8;
  font-weight: 600;
  font-size: 14px;
}
</style>
