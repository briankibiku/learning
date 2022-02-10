<template>
  <div>
    <Navbar />
    <br />
    <div class="container">
      <div class="row">
        <div class="col">
          <WeatherCard />
        </div>
        <div class="col">
          <DonateCard />
        </div>
        <div class="col">
          <DropCard />
        </div>
      </div>
    </div>
    <br />
    <!-- 
      <div class="container">
        <div class="justify-content-center">
          <div v-if="$nuxt.isOnline">You are online</div>
        <br />

        <div>{{ content }}</div>
        <br />
        <button @click="refreshPage" class="btn btn-primary">Refresh</button>
        <button @click="showAlert" class="btn btn-primary">Show Alert</button>
      </div>
    </div>
        -->
    <Footer />
  </div>
</template>

<script>
import DropCard from "../../components/DropCard.vue";
import DonateCard from "../../components/DonateCard.vue";
import WeatherCard from "../../components/WeatherCard.vue";
import Navbar from "../../components/Navbar.vue";
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
  components: { DropCard, DonateCard, WeatherCard, Navbar },
};
</script>
