<template>
  <div>
    <Navbar />
    <div class="container" style="width: 400px">
      <div class="subheading1">{{ this.profile.username }}</div>
      <div class="subheading1">{{ this.profile.agewise }}</div>
      <div class="subheading1">{{ this.profile.length }}</div>
      <button class="primary-button" @click="refreshPage">Refresh</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Navbar from "../../components/Navbar.vue";
export default {
  middleware: "auth",
  data() {
    return {
      profile: {
        username: "",
        agewise: null,
        length: "",
      },
      data: {
        username: "Kim",
        age: 90,
        height: "5'9",
      },
    };
  },
  computed: {
    ...mapState({
      userProfile: "userProfile",
    }),
  },
  methods: {
    ...mapActions({ startPersistance: "startPersistance" }),
    startPersistanceNow() {
      this.startPersistance(this.data);
    },
    refreshPage() {
      this.startPersistance(null);
      window.location.reload();
      this.startPersistance(this.data);
    },
  },
  mounted() {
    if (this.userProfile !== null) {
      console.log("Fetched from state!!");
      this.profile.username = this.userProfile.username;
      this.profile.agewise = this.userProfile.age;
      this.profile.length = this.userProfile.height;
    } else {
      console.log("FAILED to fetch from state!!");
      this.startPersistanceNow(this.data);
    }
  },
  components: { Navbar },
};
</script>
