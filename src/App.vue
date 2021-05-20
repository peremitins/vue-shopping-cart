<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <ProductList></ProductList>
        </div>
        <div class="col-4">
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
</style>
