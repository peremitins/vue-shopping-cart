<template>
  <div class="row justify-content-between">
    <div v-for="product in products" :key="product.id" class="card" style="width: 18rem;">
      <img :src="product.imgUrl" class="card-img-top" :alt="product.title">
      <div class="card-body">
        <h6 class="card-title">{{ product.title }}</h6>
        <p class="card-text">$ {{ product.price }}</p>
        <a @click.prevent="addToCart(product), saveCart(product.id)" href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
</template>
<script>
import {  mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(["products"])
  },
  methods: {
    ...mapActions(["getProducts", "addToCart", "saveCart"])
  },
  mounted() {
    this.getProducts();
  }
}
</script>
<style scoped>
  .card {
    border: none;
    min-height: 305px;
    margin-bottom: 30px;
    flex: 1 1 200px;
  }
  .card-body {
    display: flex;
    flex-direction: column;
  }
  .card img {
    height: 150px;
    object-fit: contain;
    width: 100%;
  }
  .btn {
    margin-top: auto;
  }
</style>