<template>
  <div>
    <Navbar />
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-3" style="margin-inline: 10px">
          <WeatherCard />
        </div>
        <div class="col-sm-3" style="margin-inline: 10px">
          <DonateCard />
        </div>
        <div class="col-sm-3" style="margin-inline: 10px">
          <DropCard />
        </div>
        <div class="col-sm-3" style="margin-inline: 10px">
          <AutoCheck />
        </div>
        <div class="col-sm-3" style="margin-inline: 10px">
          <FikishaCard />
        </div>
      </div>
    </div>
    <br />
    <Footer />
  </div>
</template>

<script>
import DropCard from "../../components/DropCard.vue";
import FikishaCard from "../../components/FikishaCard.vue";
import DonateCard from "../../components/DonateCard.vue";
import WeatherCard from "../../components/WeatherCard.vue";
import Navbar from "../../components/Navbar.vue";
import AutoCheck from "../../components/AutoCheck.vue";
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
  components: { DropCard, DonateCard, WeatherCard, Navbar, FikishaCard, AutoCheck },
};
</script>
