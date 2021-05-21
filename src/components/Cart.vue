<template>
  <div>
    <div v-if="!cart.length" class="alert alert-secondary" role="alert">
      No product in cart!
    </div>
    <div v-if="orderPlaced" class="alert alert-success" role="alert">
      Order successefully placed!
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in cart" :key="item.id">
        <button @click="removeItem(item.id), saveCart(item.id)" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="media">
          <img :src="item.imgUrl" class="mr-3" width="80px" alt="item.title">
          <div class="media-body">
            <h5 class="mt-0">{{ item.title }}</h5>
            <button @click="reduceQty(item.id), saveCart(item.id)" class="btn btn-qty btn-sm btn-secondary">-</button>
            <span class="cart-qty">x {{ item.qty }}</span>
            <button @click="addQty(item.id), saveCart(item.id)" class="btn btn-qty btn-sm btn-secondary">+</button>
          </div>
        </div>
      </li>
    </ul>
    <button @click="placeOrder" 
            v-if="cart.length" 
            class="btn-checkout btn btn-lg btn-block btn-success"
            :disabled="isProcessing"
            >
      <div v-if="!isProcessing">
        Checkout ($ {{ totalPrice }})
      </div>
      <div v-else class="spinner-border text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </button>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      isProcessing: false,
      orderPlaced: false
    }
  },
  computed: {
    ...mapGetters(["cart"]),
    totalPrice() {
      return this.cart.reduce((acc, item) => acc + item.qty * item.price, 0)
    }
  },
  methods: {
    ...mapActions(["addQty", "reduceQty", "removeItem", "emptyCart", "saveCart"]),
    placeOrder() {
      this.isProcessing = true;
      setTimeout(() => {
        this.isProcessing = false;
        this.orderPlaced = true;
        this.emptyCart();
        setTimeout(() => {
          this.orderPlaced = false;
        }, 5000)
      }, 1000)
    }
  }
}
</script>
<style scoped>
  .btn-qty {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .btn-checkout {
    margin-top: 20px;
  }
  .cart-qty {
    display: inline-block;
    width: 48px;
  }
</style>