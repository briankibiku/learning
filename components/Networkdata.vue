<template>
  <p v-if="$fetchState.pending">
    <span class="spinner-border m-5 visually-hidden"></span>
  </p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <ul v-else>
    <li v-for="(mountain, index) of mountains" :key="index">
      {{ mountain.title }}
    </li>
    <br />
    <p>New Question</p>
    <li>
      {{ this.triviaQuestions.data[0].question }}
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      mountains: [],
      triviaQuestions: [],
    };
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 3000) {
      this.fetch();
    }
  },
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      (res) => res.json()
    );
    this.triviaQuestions = await fetch(
      "http://csm.mswali.co.ke/mswali/mswali_app/backend/web/index.php?r=api/fetch-all-questions"
    ).then((res) => res.json());
    console.log(this.triviaQuestions.data[0].question);
  },
};
</script>