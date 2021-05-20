<template>
  <nav class="navbar navbar-light bg-light mb-4">
    <span class="navbar-brand mb-0 h1">Navbar</span>
    <span class="navbar-brand mb-0 h1">Cart ({{ totalQty }})</span>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart']),
    totalQty() {
      return this.cart.reduce((acc, item) => acc + item.qty, 0);
    }
  }
}
</script>
<style scoped>
  
</style>