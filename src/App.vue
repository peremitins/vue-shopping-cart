<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <div class="row main-wrapper">
        <div class="col-md-12 col-lg-8">
          <ProductList></ProductList>
        </div>
        <div class="col-md-12 col-lg-4 mb-5 cart-block">
          <Cart></Cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Header from './components/Header'
export default {
  components: {
    Cart,
    ProductList, Header },
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

@media (max-width: 992px) {
  .main-wrapper {
    flex-direction: column-reverse;
  }
  /* .cart-block {
    flex: 1 1 100%;
  } */
}
</style>
