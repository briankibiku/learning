<template>
  <div style=" padding: 0px 20px 0px 20px">
    <div class="card" style="width: 18rem">
      <img :src="cardelement.image" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ cardelement.title }}</h5>
        <p class="card-text">
          {{ cardelement.description }}
        </p>
        <a href="#" class="btn btn-primary">{{ cardelement.continent }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardelement: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
