<template>
  <div class="container" style="max-width: 1020px">
    <div class="row">
      <div class="col-sm">
        <!-- <img
          src="https://drive.google.com/uc?export=view&id=1F-a5Svs-YffBbu-mTDtP1uMOGQgFJAC4"
          height="1000"
          width="1000"
          class="img-fluid"
        /> -->

        <img
          src="../assets/b2k.gif"
          class="img-fluid"
          style="border-radius: 20px;"
        />
      </div>
      <br />
      <div class="col-sm">
        <br>
        <h4 class="animate__animated animate__bounce animate__delay-0s testing1">
          Hello there and welcome!
        </h4>
        <p class="testing1">
          I'm Kibiku, thanks for dropping by to check my portfolio out!
        </p>
        <p>
          I am a <b>Full Stack Software Engineer and DevOps Engineer</b>, bridging the gap between
           code and infrastructure for seamless application development and deployment.
        </p>
        <h6>My Programming Stacks</h6>
        <p class="favs">
          Frontend <br><br>
          <span v-for="lang in fe"> {{ lang.name }} </span>
          <!-- <span>VueJs,</span> <span>Laravel,</span> <span>MongoDB,</span>
          <span>Express,</span> -->
        </p>
        <p class="favs">
          Mobile Development <br><br>
          <span v-for="lang in md"><span> {{ lang.name }} </span></span>
        </p>
        <p class="favs">
          Programming Languages <br><br>
          <span v-for="lang in be"> {{ lang.name }} </span>
        </p>
        <p class="favs">
          Backend <br><br>
          <span v-for="lang in bestack"> {{ lang.name }} </span>
        </p>
        <p class="favs">
          Databases <br><br>
          <span v-for="lang in db"> {{ lang.name }} </span>
        </p>
        <p class="favs">
          Cloud Technologies <br><br>
          <span v-for="lang in cloud"> {{ lang.name }} </span>
        </p>
        <p style="font-family: Work Sans">
          My four-year experience across the fintech, telehealth, and edutech fields has improved my skills
          in software development, testing, deployment, and maintenance, Data Analysis, Leadership, and Communication
          which I am continuously improving.
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
  data() {
    return {
      fe: [{'name': 'Vue.js'}, {'name': 'React'}, {'name': 'Angular'}, {'name': 'Django'}],
      md: [{'name': 'Flutter'}, {'name': 'React Native'}],
      be: [{'name': 'Python'}, {'name': 'GraphQL'}, {'name': 'Dart'}],
      db: [{'name': 'PostgreSQL'}, {'name': 'MYSQL'}, {'name': 'MongoDB'}, {'name': 'Firebase'}],
      cloud: [{'name': 'AWS'}, {'name': 'Docker'}, {'name': 'GCP'},  {'name': 'Firebase'}],
      bestack:[{'name': 'Django Rest Framework'}, {'name': 'Flask'}]
    }
  }
};
</script>
<style>
.favs {
  color: #1596f8;
  font-weight: 600;
  font-size: 14px;
}
span {
  background-color: #F8F9FA;
  height: 40px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  margin-inline: 2px;
  margin-block: 5px;
}
</style>
